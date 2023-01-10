import React from "react";

import { useNavigate } from "react-router-dom";
import ImageCategory from "../ImageCategory/ImageCategory";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";

function Card({ art, loading, page, id, name, Previews, CategoryId }) {
  // console.log(art.source)

  const navigate = useNavigate();
  if (page === 'dashboard') {
    const toNavigation = (id) => {
      navigate(`/art/${id}`);
    };
    return (
      <>
        <section
          className="text-gray-700 body-font"
          onClick={() => toNavigation(id)}
        >
          <div className=" px-2 py-2">
            <div className="flex flex-wrap text-center overflow-hidden">
              <div className=" w-full">
                <div className="flex flex-col h-96 w-full items-center border-2 border-gray-600 px-4 py-10 rounded-lg transition duration-500 hover:scale-110">
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
                    <ImageCategory Previews={Previews} CategoryId={CategoryId} />
                  }
                  {loading ? <LoadingSpinner /> : null}
                  <h2 className="title-font font-medium text-3xl text-gray-900">
                    2.7K
                  </h2>
                  <p className="leading-relaxed justify-end">{name}</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    )
  } else {
    const { id: idArt, name: nameArt, Previews: PreviewsArt } = art
    const toNavigation = (idArt) => {
      navigate(`/art/${idArt}`);
    };
    return (
      <>
        <section
          className=" text-gray-700 body-font"
          onClick={() => toNavigation(idArt)}
        >
          <div className="w-full">
            <div className=" text-center overflow-hidden ">
              <div className=" w-full">
                <div className="flex flex-col items-center border-2 border-gray-600 px-4 py-10 rounded-lg ">
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
                    <img
                      className="object-contain h-48 w-full transition duration-500 hover:scale-110"
                      src={PreviewsArt[0].sourceUrl} />
                  }
                  {loading ? <LoadingSpinner /> : null}
                  <h2 className="title-font font-medium text-3xl text-gray-900">
                    2.7K
                  </h2>
                  <p className="leading-relaxed">{nameArt}</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    )
  }
}

export default Card;
