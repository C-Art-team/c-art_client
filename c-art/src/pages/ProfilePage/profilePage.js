import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Card from "../../components/Card/Card";
import { useSelector, useDispatch } from "react-redux";
import { viewProfile } from "../../actions/userAction";
import { toast } from "react-toastify";
import "./style.css";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";
import { fetchArtByAuthorID } from "../../actions/artAction"
import { fetchAllOrders } from "../../actions/orderAction";
import HistoryTableRow from "../../components/Tables/TableHistory/HistoryTableRow";

export default function ProfilePage() {
  const [loading, setLoading] = useState(true)
  const profile = useSelector((state) => state.userReducer.oneUser)
  const orders = useSelector((state) => state.orderReducer.orders);
  const lastThreeOrders = orders.slice(0, 3)
  const dispatch = useDispatch()

  const myArt = useSelector((state) => {
    return state.artReducer.myArt
  })

  useEffect(() => {
    dispatch(fetchArtByAuthorID(localStorage.access_token))
    .then((data) => {
      console.log(data)
      setLoading(false)
    })
    .catch((err) => {
      console.log(err)
    })
  },[])

  useEffect(() => {
    dispatch(viewProfile())
      .then((data) => {
        console.log(data);
        setLoading(false);
      })
      .catch((err) => {
        err.message
          ? toast.error(`${err?.message}`)
          : toast.error("Internal Server Error");
      });

    dispatch(fetchAllOrders())
      .then((data) => {
        setLoading(false);
      })
      .catch((err) =>
        err.message
          ? toast.error(`${err?.message}`)
          : toast.error("Internal Server Error")
      );
  }, []);

  return (
    <div
      className="p-8"
      style={{ backgroundColor: "#121218", color: "#CFD1D0" }}
    >
      <div className="flex justify-between">
        {!loading ? (
          <div>
            <div className="flex gap-6">
              <img
                className="w-32 h-32 p-1 rounded-full ring-2 ring-gray-300"
                src="https://placeimg.com/192/192/people"
                alt="Bordered avatar"
              />
              <div className="flex flex-col justify-end">
                <h1
                  className="text2xl"
                  name="username"
                  style={{ color: "#F9F9FB" }}
                >
                  {profile?.username}
                </h1>
                <h1
                  className="text-md"
                  name="address"
                  style={{ color: "#CFD1D0" }}
                >
                  {profile?.address}
                </h1>
              </div>
            </div>
          </div>
        ) : (
          <LoadingSpinner className="loading-profile" />
        )}
        <div style={{ color: "#CFD1D0" }}>
          <h1 className="text-2xl">History</h1>
          <div className="flex flex-col gap-2 py-2">
            <div
              className=" rounded-full w-80 shadow-lg"
              style={{ backgroundColor: "#191B1F" }}
            >
              <div className="py-2 px-3 flex justify-between">
                <h1>Order Date</h1>
                <h1>Art Name</h1>
                <h1>Category</h1>
              </div>
            </div>
            { !loading && orders.length > 0 ?
              lastThreeOrders.map(el => {
                return <HistoryTableRow histories={el} />
              }) : <div
                className=" rounded-full w-80 shadow-lg"
                style={{ backgroundColor: "#191B1F" }}
              >
                <div className="py-2 px-3 flex justify-between">
                  <h1>-</h1>
                  <h1>-</h1>
                  <h1>-</h1>
                </div>
              </div>
            }
          </div>
        </div>
      </div>
      <div className="flex flex-col pt-8 gap-3">
        <div className="flex justify-between items-center">
          <h1 className="text-xl">Your products</h1>
          <Link
            to={"/add-art"}
            className="btn"
            style={{ backgroundColor: "#85CF81", color: "#121218" }}
          >
            + New product
          </Link>
        </div>
        <div className="grid grid-cols-4 gap-1 rounded-lg bg-base-300 bg-opacity-50 shadow-xl">
          {!loading ? myArt.map((el, index) => {
            return (
              <Card art={el} key={index + 1} loading={loading} page="profile" />
            )
          }) : <h1 className="text-2xl">You dont have any uploaded art yet</h1>}
        </div>
      </div>
    </div>
  );
}
