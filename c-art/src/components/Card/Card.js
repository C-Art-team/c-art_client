import React from "react";

import { useNavigate } from "react-router-dom";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";

function Card({ id, name, loading }) {
  const navigate = useNavigate();
  const toNavigation = (id) => {
    navigate(`/art/${id}`);
  };
  return (
    <>
      <section
        className="text-gray-700 body-font"
        onClick={() => toNavigation(id)}
      >
        <div className=" px-10 py-10">
          <div className="flex flex-wrap -m-4 text-center">
            <div className=" w-full">
              <div className="flex flex-col items-center border-2 border-gray-600 px-4 py-10 rounded-lg transition duration-500 hover:scale-110">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="text-indigo-500 w-12 h-12 mb-3 inline-block"
                  viewBox="0 0 24 24"
                >
                  <path d="M8 17l4 4 4-4m-4-5v9"></path>
                  <path d="M20.88 18.09A5 5 0 0018 9h-1.26A8 8 0 103 16.29"></path>
                </svg>
                {loading ? <LoadingSpinner /> : null}
                <h2 className="title-font font-medium text-3xl text-gray-900">
                  2.7K
                </h2>
                <p className="leading-relaxed">{name}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Card;
