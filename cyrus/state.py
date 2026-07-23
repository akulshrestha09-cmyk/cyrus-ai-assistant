import os
import reflex as rx
from openai import OpenAI

# Pulls key from Render environment variable, or uses your local fallback key
GROQ_API_KEY = os.getenv("GROQ_API_KEY")

# Initialize OpenAI client configured for Groq
client = OpenAI(
    base_url="https://api.groq.com/openai/v1",
    api_key=GROQ_API_KEY,
)

class State(rx.State):
    """The app state for managing chat history and LLM interaction via Groq."""
    
    # User inputs
    question: str = ""
    chat_history: list[dict[str, str]] = []
    
    # UI states
    is_processing: bool = False
    
    def set_question(self, question: str):
        self.question = question
    
    async def process_question(self):
        """Send question to Groq API and stream response."""
        if not self.question.strip():
            return
            
        user_prompt = self.question
        self.question = ""  # Clear input
        self.is_processing = True
        
        # Add new item to history with empty answer initially
        self.chat_history.append({"question": user_prompt, "answer": ""})
        yield
        
        try:
            # Stream response from Groq cloud model
            response_stream = client.chat.completions.create(
                model="llama-3.1-8b-instant",  # High-speed Groq production model
                messages=[{"role": "user", "content": user_prompt}],
                stream=True,
            )
            
            for chunk in response_stream:
                if chunk.choices and chunk.choices[0].delta.content:
                    content = chunk.choices[0].delta.content
                    # Update the last item in chat history
                    history = self.chat_history.copy()
                    history[-1]["answer"] += content
                    self.chat_history = history
                    yield  # Real-time UI update
                
        except Exception as e:
            history = self.chat_history.copy()
            history[-1]["answer"] = f"⚠️ Error: {str(e)}"
            self.chat_history = history
            
        finally:
            self.is_processing = False
            yield
