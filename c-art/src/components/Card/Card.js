import React from "react";

import { useNavigate } from "react-router-dom";
import ImageCategory from "../ImageCategory/ImageCategory";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";
import { motion } from "framer-motion";

function Card({ art, loading, page, id, name, Previews, price, CategoryId }) {
  // console.log(art.source)
  function formatRupiah(money) {
    return new Intl.NumberFormat('id-ID',
      { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 } // diletakkan dalam object
    ).format(money);
  }

  const navigate = useNavigate();
  if (page === 'dashboard') {
    const toNavigation = (id) => {
      navigate(`/art/${id}`);
    };
    return (
      <>
        <motion.section
          layout
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="text-gray-700 body-font"
          onClick={() => toNavigation(id)}
        >
          <div className=" px-2 py-2">
            <div className="flex flex-wrap text-center overflow-hidden">
              <div className=" w-full">
                <div className="flex flex-col h-96 w-full items-center bg-base-300 bg-opacity-30 px-4 py-10 rounded-lg transition duration-500 hover:scale-110">
                  {loading ? <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="text-indigo-500 w-12 h-12 mb-3 inline-block"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 17l4 4 4-4m-4-5v9"></path>
                    <path d="M20.88 18.09A5 5 0 0018 9h-1.26A8 8 0 103 16.29"></path>
                  </svg> :
                    <ImageCategory Previews={Previews} CategoryId={CategoryId} Page={page} />
                  }
                  {loading ? <LoadingSpinner /> : null}
                  <h2 className="title-font font-medium text-3xl py-3 text-white">
                    {formatRupiah(price)}
                  </h2>
                  <p className="leading-relaxed text-white">{name}</p>
                </div>
              </div>
            </div>
          </div>
        </motion.section>
      </>
    )
  } else {
    const { id: idArt, name: nameArt, Previews: PreviewsArt, CategoryId } = art
    const toNavigation = (idArt) => {
      navigate(`/art/${idArt}`);
    };
    return (
      <>
        <motion.section
          layout
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className=" text-gray-700 body-font"
          onClick={() => toNavigation(idArt)}
        >
          <div className="w-full">
            <div className=" text-center overflow-hidden ">
              <div className=" w-full">
                <div className="flex flex-col h-96 w-full items-center bg-base-300 bg-opacity-30 px-4 py-10 rounded-lg transition duration-500 hover:scale-110">
                  {loading ? <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="text-indigo-500 w-12 h-12 mb-3 inline-block"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 17l4 4 4-4m-4-5v9"></path>
                    <path d="M20.88 18.09A5 5 0 0018 9h-1.26A8 8 0 103 16.29"></path>
                  </svg> :
                    <ImageCategory Previews={PreviewsArt} CategoryId={CategoryId} Page={page} />
                  }
                  {loading ? <LoadingSpinner /> : null}
                  <h2 className="title-font font-medium text-3xl py-3 text-white">
                    2.7K
                  </h2>
                  <p className="leading-relaxed">{nameArt}</p>
                </div>
              </div>
            </div>
          </div>
        </motion.section >
      </>
    )
  }
}

export default Card;
