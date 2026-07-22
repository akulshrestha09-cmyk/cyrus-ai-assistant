import reflex as rx
import ollama

class State(rx.State):
    """The app state for managing chat history and LLM interaction."""
    
    # User inputs
    question: str = ""
    chat_history: list[dict[str, str]] = []
    
    # UI states
    is_processing: bool = False
    
    def set_question(self, question: str):
        self.question = question
    
    async def process_question(self):
        """Send question to local LLM and stream response."""
        if not self.question.strip():
            return
            
        user_prompt = self.question
        self.question = ""  # Clear input
        self.is_processing = True
        
        # Add new item to history with empty answer initially
        self.chat_history.append({"question": user_prompt, "answer": ""})
        yield
        
        try:
            # Stream response from local Ollama model
            response_stream = ollama.chat(
                model='llama3.2:1b',
                messages=[{'role': 'user', 'content': user_prompt}],
                stream=True,
            )
            
            for chunk in response_stream:
                content = chunk['message']['content']
                # Update the last item in chat history
                history = self.chat_history.copy()
                history[-1]["answer"] += content
                self.chat_history = history
                yield  # Real-time UI update
                
        except Exception as e:
            history = self.chat_history.copy()
            history[-1]["answer"] = f"⚠️ Error connecting to local model: {str(e)}"
            self.chat_history = history
            
        finally:
            self.is_processing = False
            yield
