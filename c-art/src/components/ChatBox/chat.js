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
    <div className=" py-11 w-full">
      <section className="chat-box bg-black bg-opacity-80 rounded-xl px-2">
        <div>
          <div className=" py-10">
            <ul id="messages" className=" bg-gray-600 bg-opacity-20 rounded-2xl h-full">
              {messages.map((el, i) => {
                return (
                  <div className={"chat chat-start"} key={i} >
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
          </div>
          <div>
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
                className="bg-gradient-to-r from-green-100 to-green-500"
              >
                Post
              </button>
            </form>

          </div>
        </div>
      </section>
    </div>
  );
}
