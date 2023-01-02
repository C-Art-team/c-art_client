import { useEffect, useState } from "react";
import { io } from "socket.io-client";
import "./style.css";

export default function ChatBox() {
  const socket = io("http://localhost:4000");
  const [messages, setMessages] = useState([1,2,3]);
  const [chat, setChat] = useState("");
  const handleChatInput = (e) => {
    setChat(e.target.value);
  };

  const sendChat = () => {
    console.log(chat);
    if (chat) {
      socket.emit("chat", chat);
    }
    setChat("");
  };

  useEffect(() => {
    socket.on("chat success", (messages) => {
      setMessages([...messages]);
      window.scrollTo(0, document.body.scrollHeight);
    });
  }, []);

  return (
    <section className="chat-box container w-1/4 min-h-screen bg-red-200">
      <ul id="messages">
        {messages.map((el, i) => {
          // return <li key={el.id} style={{textAlign : el.senderId !== 1 ? "left" : 'right'}}>{el.text}</li>;
          return (
            <div className="chat chat-start" key={i} style={{textAlign : el.senderId !== 1 ? "left" : 'right'}}>
              <div className="chat-bubble chat-bubble-primary">
                {el}
              </div>
            </div>
          );
        })}
      </ul>
      <form
        id="form"
        onSubmit={(e) => {
          e.preventDefault();
          sendChat();
        }}
      >
        <input
          id="input"
          autoComplete="off"
          value={chat}
          onChange={handleChatInput}
        />
        <button type="submit">Send</button>
      </form>
    </section>
  );
}
