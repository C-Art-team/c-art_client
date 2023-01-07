import { useEffect, useState } from "react";
import { useParams } from "react-router";
// import { useSelector } from "react-redux";
import { io } from "socket.io-client";
import "./style.css";
const socket = io("http://localhost:4000");

export default function ChatBox() {
  const { id } = useParams();
  const [messages, setMessages] = useState([]);
  const [chat, setChat] = useState("");

  const handleChatInput = (e) => {
    setChat(e.target.value);
  };

  const sendChat = () => {
    console.log(chat);
    if (chat) {
      socket.emit("comment", {
        text: chat,
        tag: id,
        access_token: localStorage.access_token,
      });
    }
    setChat("");
  };

  useEffect(() => {
    socket.on("chat success", (messages) => {
      setMessages([...messages]);
    });
    const containerScroll = document.getElementById("messages")
      containerScroll.scrollTo('auto', containerScroll.scrollHeight);
    // window.scrollTo(0, document.getElementById("messages").scrollHeight);
  }, []);

  useEffect(() => {
    socket.emit("comment product", id);
  }, []);

  useEffect(() => {
    socket.on("load chats", (data) => {
      setMessages([...data]);
    });
  }, []);

  return (
    <section className="chat-box container w-full h-1/8 bg-grey-400 py-6 px-2">
      <ul id="messages">
        {messages.map((el, i) => {
          return (
            <div className={"chat chat-start"} key={i}>
              <div className="chat-image avatar">
                <div className="w-10 rounded-full">
                  <img src="https://placeimg.com/192/192/people" />
                </div>
              </div>
              <div className="chat-bubble bg-white-500 text-md font-bold">
                {el.text}
              </div>
            </div>
          );
        })}
      </ul>
      <form
        className="w-full"
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
          Post
        </button>
      </form>
    </section>
  );
}
