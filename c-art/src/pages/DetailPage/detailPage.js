import { useEffect, useState } from "react";
import ChatBox from "../../components/ChatBox/chat";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import "./style.css"
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";
import { fetchOneArt } from "../../actions/artAction";
import { addOneOrder } from "../../actions/orderAction";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import music from "../../components/ImageCategory/icon/music.png"

export default function DetailPage() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const detailArt = useSelector((state) => state.artReducer.art);
  const dispatch = useDispatch();
  const MySwal = withReactContent(Swal);

  const [orderInput, setOrderInput] = useState({
    amount: "",
  });

  const toPreview = (id) => {
    navigate(`/art/${id}/3d`);
  };

  const setArtId = (id) => {
    setOrderInput({
      ...orderInput,
      artId: id,
    });
  };

  const createOrder = (e) => {
    e.preventDefault();
    MySwal.fire(`Are you sure you want to order ${detailArt.name}?`).then(
      (res) => {
        if (res.isConfirmed) {
          dispatch(addOneOrder(orderInput))
            .then(() => {
              // console.log(data);
              toast.success(`Successfully added ${detailArt.name} to your order list`)
            })
            .catch((err) => {
              // console.log(err.response.data.message);
              err.message
                ? toast.error(`${err?.response.data.message}`)
                : toast.error("Internal Server Error");
            })
            .finally(() => {
              setOrderInput({
                amount: "",
              });
            });
        }
      }
    );
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(fetchOneArt(id))
      .then((data) => {
        console.log(data);
        setLoading(false);
      })
      .catch((err) => {
        err.message
          ? toast.error(`${err?.message}`)
          : toast.error("Internal Server Error");
      });
  }, []);

  function formatRupiah(money) {
    return new Intl.NumberFormat('id-ID',
      { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 } // diletakkan dalam object
    ).format(money);
  }

  return (
    <section className="container flex items-stretch">
      <div className="w-1/2 container-preview flex flex-col p-4 justfy-center items-center gap-y-5">
        {!loading ? (
          detailArt.Previews.map((el, i) => {
            switch (detailArt.Category.name) {
              case "Image Asset":
              case "Visual Effect":
              case "Video Footage":
              case "Script":
                return (
                  <img
                    id="preview"
                    draggable="false"
                    className="artboard h-1/3 w-2/3 rounded-lg my-1"
                    src={el.sourceUrl}
                    key={i}
                    alt="preview"
                  />
                );
              case "3D Model":
                return (
                  <img
                    id="preview"
                    draggable="false"
                    onClick={() => toPreview(detailArt.id)}
                    className="artboard h-1/3 w-2/3 rounded-lg my-1"
                    src={el.sourceUrl}
                    key={i}
                    alt="preview"
                  />
                );
              case "Sound Effect":
              case "Music":
                return (
                  <>
                    <div className=" w-1/3 h-1/3">
                      <img
                        draggable="false"
                        src={music} />
                    </div>
                    <audio src={el.sourceUrl} key={i} controls />
                  </>
                );
              default:
                break;
            }
          })
        ) : (
          <LoadingSpinner />
        )}
      </div>
      <div className="flex flex-col w-1/2 container-preview-2 p-4 items-center bg-black bg-opacity-50 rounded-xl">
        <span className="text-4xl text-center">{detailArt.name}</span>
        <span className="text-lg text-center">
          created by : {detailArt.authorName}
        </span>
        <div className="flex flex-col justify-end items-center py-10">
          <div className="w-2/3">
            <p className="w-4/8 h-1/3 text-justify mt-4">{detailArt.description}</p>
          </div>


          <form onSubmit={createOrder} className="py-10">
            <button
              className="bg-green-400 text-black rounded-md w-32 h-7 font-semibold hover:bg-green-700"
              onClick={() => {
                setArtId(detailArt.id);
              }}
              type="submit"
            >
              {formatRupiah(detailArt.price)}
            </button>
          </form>
          <ChatBox />
        </div>
      </div>
    </section>
  );
}
