import { useState } from "react";
// import axios from "axios";
import ChatBox from "../../components/ChatBox/chat";
import "./style.css";

export default function DetailPage() {
  const [showChatBox, setShowChatBox] = useState(false);
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
    Category: { name: "3D Model" },
    price: 400000,
    authorName: "User 1",
    status: "active",
  };

  return (
    <section className="container flex items-stretch">
      <div className="w-1/2 container-preview flex flex-col p-4 justfy-center items-center gap-y-5">
        {detailArt.Previews.map((el, i) => {
          switch (detailArt.Category.name) {
            case "Image Assets":
              return (
                <img
                  className="artboard h-1/3 w-2/3 rounded-lg my-1"
                  src={el.sourceUrl}
                  key={i}
                  alt="preview"
                />
              );
            case "3D Model":
              return <h1>ini 3d model</h1>;
            case "Sound Effect":
              return <audio src={el.sourceUrl} key={i} controls />;
            default:
              break;
          }
        })}
      </div>
      <div className="flex flex-col w-1/2 container-preview p-4 items-center">
        <span className="text-4xl text-center">{detailArt.name}</span>
        <span className="text-lg text-center">
          created by : {detailArt.authorName}
        </span>
        <span className="text-4xl text-center">{detailArt.price}</span>
        <p className="w-4/8 h-1/3 text-justify mt-4">{detailArt.description}</p>
        <ChatBox />
      </div>
      
    </section>
  );
}
