import reflex as rx
from cyrus.state import State

def message_card(qa: dict) -> rx.Component:
    """Render a single Q&A card in chat history."""
    return rx.vstack(
        # User Question
        rx.box(
            rx.text(qa["question"], weight="bold", color="var(--gray-12)"),
            padding="12px 16px",
            background_color="var(--accent-3)",
            border_radius="12px",
            align_self="flex-end",
            max_width="80%",
        ),
        # AI Answer (Supports Markdown rendering)
        rx.box(
            rx.markdown(qa["answer"]),
            padding="12px 16px",
            background_color="var(--gray-3)",
            border_radius="12px",
            align_self="flex-start",
            max_width="85%",
        ),
        spacing="3",
        width="100%",
    )

def index() -> rx.Component:
    """Main App Layout."""
    return rx.container(
        rx.vstack(
            # Header
            rx.heading("⚡ CYRUS", size="7", margin_bottom="2"),
            rx.text("Pure Python • Zero JS • 100% Offline LLM", color="gray"),
            rx.divider(),
            
            # Chat Container
            rx.scroll_area(
                rx.vstack(
                    rx.foreach(State.chat_history, message_card),
                    spacing="4",
                    width="100%",
                ),
                height="60vh",
                width="100%",
                padding="4",
            ),
            
            # Input Controls
            rx.hstack(
                rx.input(
                    placeholder="Ask your local model anything...",
                    value=State.question,
                    on_change=State.set_question, # Added setter below to fix this
                    on_key_down=lambda key: rx.cond(key == "Enter", State.process_question(), None),
                    width="100%",
                    size="3",
                ),
                rx.button(
                    "Send",
                    on_click=State.process_question,
                    loading=State.is_processing,
                    size="3",
                ),
                width="100%",
                margin_top="4",
            ),
            spacing="4",
            max_width="800px",
            padding="6",
        ),
        center_content=True,
    )

app = rx.App()
app.add_page(index)
