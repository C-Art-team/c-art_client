import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Card from "../../components/Card/Card";
import { useSelector, useDispatch } from "react-redux";
import { viewProfile } from "../../actions/userAction";
import { toast } from "react-toastify";
import "./style.css";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";
import { fetchArtByAuthorID } from "../../actions/artAction";
import Modal from "../../components/Modal/Modal";

export default function ProfilePage() {
  const [loading, setLoading] = useState(true);
  const [modal, setModal] = useState(false);
  const profile = useSelector((state) => state.userReducer.oneUser);
  const dispatch = useDispatch();

  const [editProfile, setEditProfile] = useState({
    username: "",
    address: "",
    phone: "",
  });

  const myArt = useSelector((state) => {
    // console.log(state)
    return state.artReducer.myArt;
  });

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
  }, []);

  const changeToInput = (e) => {};

  return (
    <>
      {modal ? (
        <Modal
          setModal={setModal}
          id={profile?.id}
          username={profile?.username}
          address={profile?.address}
          phoneNumber={profile?.phoneNumber}
          preference={profile?.preference.split(", ")}
          type={"edit"}
        />
      ) : (
        ""
      )}
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
                  <button onClick={() => setModal(true)}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-6 h-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                      />
                    </svg>
                  </button>
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
                  <h1>asdasd</h1>
                  <h1>asdasd</h1>
                </div>
              </div>
              <div
                className=" rounded-full w-80 shadow-lg"
                style={{ backgroundColor: "#191B1F" }}
              >
                <div className="py-2 px-3 flex justify-between">
                  <h1>asdasd</h1>
                  <h1>asdasd</h1>
                </div>
              </div>
              <div
                className=" rounded-full w-80 shadow-lg"
                style={{ backgroundColor: "#191B1F" }}
              >
                <div className="py-2 px-3 flex justify-between">
                  <h1>asdasd</h1>
                  <h1>asdasd</h1>
                </div>
              </div>
              <div
                className=" rounded-full w-80 shadow-lg"
                style={{ backgroundColor: "#191B1F" }}
              >
                <div className="py-2 px-3 flex justify-between">
                  <h1>asdasd</h1>
                  <h1>asdasd</h1>
                </div>
              </div>
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
            {myArt.map((el, index) => {
              return (
                <Card
                  art={el}
                  key={index + 1}
                  loading={loading}
                  page="profile"
                />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
