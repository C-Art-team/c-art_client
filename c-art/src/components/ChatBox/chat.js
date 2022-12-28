import {io} from "socket.io-client"
const socket = io()
import "./style.css"
export default function ChatBox() {
  return (
    <section className="chat-box container w-1/4 min-h-screen">
      <ul id="messages"></ul>
      <form id="form" action="">
        <input id="input" autocomplete="off" />
        <button>Send</button>
      </form>
    </section>
  );
}
