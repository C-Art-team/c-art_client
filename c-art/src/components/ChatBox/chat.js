import { useEffect, useState } from "react";
import { io } from "socket.io-client";
import "./style.css";

export default function ChatBox() {
  const socket = io("http://localhost:4000");
  const [messages, setMessages] = useState([]);
  const [chat, setChat] = useState({
    text: "",
    senderId: "",
    receiverId: "",
    tag: "",
  });

  const handleChatInput = (e) => {
    setChat({
      ...chat,
      text : e.target.value
    });
  };

  const sendChat = () => {
    console.log(chat);
    if (chat) {
      socket.emit("chat", chat);
    }

    setChat({
      text: "",
      senderId: "",
      receiverId: "",
      tag: "",
    });
  };

  useEffect(() => {
    socket.on("chat success", (messages) => {
      setMessages([...messages]);
      // window.scrollTo(0, document.getElementById("messages").scrollHeight);
    });
  }, []);

  return (
    <section className="chat-box container w-1/4 bg-grey-400 py-6 px-2">
      <ul id="messages">
        {messages.map((el, i) => {
          return (
            <div
              className={
                el.senderId !== 1 ? "chat chat-start" : "chat chat-end"
              }
              key={i}
            >
              <div className="chat-bubble bg-white-500 text-md font-bold">
                {el.text}
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
        <button
          type="submit"
          className="bg-gradient-to-r from-lime-400 to-green-500"
        >
          Send
        </button>
      </form>
    </section>
  );
}
