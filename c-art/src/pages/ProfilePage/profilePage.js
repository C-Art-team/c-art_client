import React from "react";
import { Link } from "react-router-dom";
import Card from "../../components/Card/Card";

export default function profilePage() {
  return (
    <div className="p-8">
      <div className="flex justify-between">
        <div className="card flex gap-6">
          <img
            class="w-32 h-32 p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500"
            src="/docs/images/people/profile-picture-5.jpg"
            alt="Bordered avatar"
          />
          <div>
            <h1 className="text-3xl">James Bond</h1>
            <h1 className="text-md">Jakarta, Indonesia</h1>
          </div>
        </div>
        <div>
          <h1 className="text-2xl">History</h1>
          <div className="flex flex-col gap-2 py-2">
            <div
              className="card rounded-full w-80 shadow-lg"
              style={{ backgroundColor: "#1F242D" }}
            >
              <div className="py-2 px-3 flex justify-between">
                <h1>asdasd</h1>
                <h1>asdasd</h1>
              </div>
            </div>
            <div
              className="card rounded-full w-80 shadow-lg"
              style={{ backgroundColor: "#1F242D" }}
            >
              <div className="py-2 px-3 flex justify-between">
                <h1>asdasd</h1>
                <h1>asdasd</h1>
              </div>
            </div>
            <div
              className="card rounded-full w-80 shadow-lg"
              style={{ backgroundColor: "#1F242D" }}
            >
              <div className="py-2 px-3 flex justify-between">
                <h1>asdasd</h1>
                <h1>asdasd</h1>
              </div>
            </div>
            <div
              className="card rounded-full w-80 shadow-lg"
              style={{ backgroundColor: "#1F242D" }}
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
          <Link to={"/add-art"} className="btn">+ New product</Link>
        </div>
        <div className="border-2 border-gray-500 rounded-lg bg-white-100 shadow-xl">
          <Card />
        </div>
      </div>
    </div>
  );
}
