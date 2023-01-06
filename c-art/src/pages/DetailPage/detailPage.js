import { useState } from "react";
// import axios from "axios";
import ChatBox from "../../components/ChatBox/chat";
import "./style.css";

export default function DetailPage() {
  const [showChatBox, setShowChatBox] = useState(false);
  // const [linkDownload, setlinkDownload] = useState("");
  // const [fileName, setFileName] = useState("");
  const detailArt = {
    name: "Art 01",
    source:
      "https://res.cloudinary.com/dilzm9jdf/image/upload/v1672211086/p6y8kpjn6w3u7wkn3fxs.jpg",
    description:
      "first art in this web adalsdlaskjdlsadjlasdjaslkdjas sdjasdjalskdjas  asdjalkdsjal alsdjaldj asdjaldjal djladjadjla asldjlaksjd ladajd ladjladjl aksj  asdja",
    Previews: [
      {
        sourceUrl:
          "https://res.cloudinary.com/dilzm9jdf/image/upload/v1672211086/p6y8kpjn6w3u7wkn3fxs.jpg",
      },
      {
        sourceUrl:
          "https://res.cloudinary.com/dilzm9jdf/image/upload/v1672211086/p6y8kpjn6w3u7wkn3fxs.jpg",
      },
      {
        sourceUrl:
          "https://res.cloudinary.com/dilzm9jdf/image/upload/v1672211086/p6y8kpjn6w3u7wkn3fxs.jpg",
      },
    ],
    category: "2d",
    price: 500000,
    authorName: "User 1",
    status: "active",
  };

  return (
    <section className="container flex items-stretch">
      <div className="w-1/2 container-preview flex flex-col p-4 justfy-center items-center gap-y-5">
        {detailArt.Previews.map((el, i) => {
          return (
            <img
              className="artboard h-1/3 w-2/3 rounded-lg"
              src={el.sourceUrl}
              key={i}
              alt="preview"
            />
          );
        })}
      </div>
      <div className="flex flex-col w-1/2 container-preview p-4 items-center">
        <span className="text-4xl text-center">{detailArt.name}</span>
        <span className="text-lg text-center">
          created by : {detailArt.authorName}
        </span>
        <p className="w-4/8 h-1/3 text-justify mt-4">{detailArt.description}</p>
      </div>
      {showChatBox ? <ChatBox /> : null}
      <button
        onClick={() => {
          setShowChatBox(!showChatBox);
        }}
        className="rounded-3xl h-8 w-16 z-10 bg-gradient-to-r from-lime-400 to-green-500 fixed bottom-5 right-10 text-black"
      >
        Chats
      </button>
    </section>
  );
}


