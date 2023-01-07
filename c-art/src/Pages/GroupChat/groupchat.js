import { useState, useEffect } from "react";
import { io } from "socket.io-client";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import "./style.css";
const socket = io("http://localhost:4000");

export default function ForumChat() {
  const theme = useSelector((state) => state.themeReducer.theme);
  console.log(theme);
  const { tag } = useParams();
  const [loading, setLoading] = useState(true);
  const [messages, setMessages] = useState([]);
  const [chat, setChat] = useState("");
  const handleChatInput = (e) => {
    setChat(e.target.value);
  };

  const sendChat = () => {
    console.log(chat, tag, "dari send chat");
    if (chat) {
      socket.emit("group chat", {
        text: chat,
        tag,
        access_token: localStorage.access_token,
      });
    }
    setChat("");
  };

  useEffect(() => {
    console.log(tag, "8&*&*&*&*&");
    socket.emit("join room", tag);
  }, []);

  useEffect(() => {
    socket.on("group chat sucess", (messages) => {
      setMessages([...messages]);
    });
  }, []);

  useEffect(() => {
    socket.on("load chats", async (data) => {
      setLoading(false);
      setMessages([...data]);
    });
  }, []);

  return (
    <>
      <h1 className="text-white text-md"> {tag} FORUM </h1>
      <section className="chat-box container w-2/3 h-full bg-grey-400 py-6 px-2">
        <ul id="messages-forum">
          {!loading
            ? messages.map((el, i) => {
                return (
                  <div
                    className={
                      el.sender !== localStorage.username
                        ? "chat chat-start"
                        : "chat chat-end"
                    }
                    key={i}
                  >
                    <div className="chat-image avatar">
                      <div className="w-10 rounded-full">
                        <img src="https://placeimg.com/192/192/people" />
                      </div>
                    </div>
                    <div className="chat-header">{el.sender}</div>
                    <div className="chat-bubble bg-white-500 text-md font-bold">
                      {el.text}
                    </div>
                    <div className="chat-footer">
                      <time className="text-xs opacity-50">{el.createdAt}</time>
                    </div>
                  </div>
                );
              })
            : null}
        </ul>
        <form
          className={`text-${theme === "dark" ? "white" : "black"}`}
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
    </>
  );
}
