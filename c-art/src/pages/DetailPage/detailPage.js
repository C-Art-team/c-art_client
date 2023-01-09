import { useEffect, useState } from "react";
// import axios from "axios";
import ChatBox from "../../components/ChatBox/chat";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";
import "./style.css";
import { fetchOneArt } from "../../actions/artAction";

export default function DetailPage() {
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const detailArt = useSelector((state) => state.artReducer.art);
  const dispatch = useDispatch();

  useEffect(() => {
    window.scrollTo(0,0)
    dispatch(fetchOneArt(id))
      .then((data) => {
        console.log(data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <section className="container flex items-stretch">
      <div className="w-1/2 container-preview flex flex-col p-4 justfy-center items-center gap-y-5">
        {!loading ? (
          detailArt.Previews.map((el, i) => {
            switch (detailArt.Category.name) {
              case "Image Asset":
              case "3D Model":
              case "Visual Effect":
              case "Video footage":
                return (
                  <img
                    className="artboard h-1/3 w-2/3 rounded-lg my-1"
                    src={el.sourceUrl}
                    key={i}
                    alt="preview"
                  />
                );
              case "Sound Effect":
              case "Music":
                return <audio src={el.sourceUrl} key={i} controls />;
              default:
                break;
            }
          })
        ) : (
          <LoadingSpinner />
        )}
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
