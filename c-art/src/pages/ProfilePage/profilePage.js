import React from "react";
import { motion } from 'framer-motion';
import { Link } from "react-router-dom";
import Card from "../../components/Card/Card";

export default function profilePage() {
  return (
    <div className=" overflow-hidden">
      <motion.div
        initial={{ x: 100 }}
        animate={{ x: 0 }}
        transition={{ type: "spring" }}
        className="p-8 overflow-hidden"
        style={{ backgroundColor: "#121218", color: "#CFD1D0" }}
      >
        <div className="flex justify-between">
          <div>
            <div className="flex gap-6">
              <img
                className="w-32 h-32 p-1 rounded-full ring-2 ring-gray-300"
                src="/docs/images/people/profile-picture-5.jpg"
                alt="Bordered avatar"
              />
              <div className="flex flex-col justify-end">
                <h1 className="text-3xl" style={{ color: "#F9F9FB" }}>
                  James Bond
                </h1>
                <h1 className="text-md" style={{ color: "#CFD1D0" }}>
                  Jakarta, Indonesia
                </h1>
              </div>
            </div>
          </div>
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
          <div className="border-2 border-gray-500 rounded-lg bg-white-100 shadow-xl">
            <Card />
          </div>
        </div>
      </motion.div>
    </div>
  );
}
