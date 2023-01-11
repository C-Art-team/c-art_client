import React, { useEffect, useState } from "react";
import { useNavigate, Outlet, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchAllCategory } from "../../actions/actionCategory";

export default function Groups() {
  const preference = localStorage.preference.split(", ");
  console.log(preference, "8797979797987987");
  const { tag } = useParams();
  console.log(tag);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  // const categories = useSelector((state) => state.categoryReducer.categories)
  // const dispatch = useDispatch()

  // useEffect(() => {
  //   dispatch(fetchAllCategory())
  //   .then(() =>{
  //     setLoading(false)
  //   })
  //   .catch((error) => {
  //     console.log(error)
  //   })
  //   .finally(() => {
  //     setLoading(false)
  //   })
  // },[])
  return (
    <div className="flex flex-col gap-2 px-10 ">
      {preference.map((el, i) => {
        return (
          <div className="" key={i}>
            <div
              className="card w-full shadow-xl"
              style={{ backgroundColor: "#1F242D" }}
              onClick={() => navigate(`/groups/${el}`)}
            >
              <div className="px-6 pt-4">
                <div className="flex justify-between">
                  <h1 className="min-w-content h-10 rounded-2xl text-center p-1">
                    {el}
                  </h1>
                  <div className="pb-4">
                    <h1 className="text-xs">LAST ACTIVITY</h1>
                    <h1 className="">Today, 20:57</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
