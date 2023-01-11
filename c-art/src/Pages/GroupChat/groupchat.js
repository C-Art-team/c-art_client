import { useState, useEffect} from "react";
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
    socket.emit("join room", tag);
  }, [tag]);

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

  useEffect(() => {
    const scroll = document.getElementById('messages-forum')
    scroll.scroll({ behavior: 'smooth' })
    scroll.scrollTo(0, scroll.scrollHeight)
  }, [messages]);

  return (
    <div className="flex flex-col items-center w-full h-full py-4 gap-2">
      <h1 className="text-white text-xl"> {tag} FORUM </h1>
      <section className="chat-box w-full bg-grey-400 px-2 ">
        <ul id="messages-forum" className="px-4">
          {!loading
            ? messages.map((el, i) => {
              return (
                <div
                  className={
                    el.sender !== localStorage.username
                      ? "chat chat-start max-w-1/2"
                      : "chat chat-end max-w-1/2"
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
                    <time className="text-xs opacity-50">{new Date(el.createdAt).toISOString().split('T')[1].slice(0, 5)}</time>
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
    </div>
  );
}
