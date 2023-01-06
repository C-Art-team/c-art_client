import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { io } from "socket.io-client";
import "./style.css";

export default function ChatBox() {
  const logged = useSelector((state) => state.userReducer.loged)
  const socket = io("http://localhost:4000");
  const [messages, setMessages] = useState([]);
  const [chat, setChat] = useState("")
  const [dataChat,setDataChat] = useState({
    text : "",
    tag : ""
  })


  const handleChatInput = (e) => {
    setChat(e.target.value)
  };

  const sendChat = () => {
    console.log(chat);
    setDataChat({
      text : chat,
      tag : ""
    })
    if (chat) {
      socket.emit("comment", dataChat);
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
