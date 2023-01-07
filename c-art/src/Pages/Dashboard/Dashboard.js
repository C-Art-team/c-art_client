import React from "react";
import Card from "../../components/Card/Card";
import { motion } from 'framer-motion';
import Carousel from "../../components/Carousel/Carousel";

function Dashboard() {
  return (
    <div className="px-8">
      <div className="flex justify-center">
        <Carousel />
      </div>
      <div className="flex py-5 justify-between items-center">
        <motion.h1
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ type: "spring", duration: 2 }}>ARTWORKS</motion.h1>
        <motion.div className="flex gap-3"
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ type: "spring", duration: 2 }}>
          <div >
            <div
              className="badge badge-accent px-5 py-5 text-black font-semibold"
              style={{ backgroundColor: "#85CF81", borderColor: "#85CF81" }}
            >
              accent
            </div>
          </div>
          <div >
            <div
              className="badge badge-accent px-5 py-5 text-black font-semibold"
              style={{ backgroundColor: "#85CF81", borderColor: "#85CF81" }}
            >
              accent
            </div>
          </div>
          <div >
            <div
              className="badge badge-accent px-5 py-5 text-black font-semibold"
              style={{ backgroundColor: "#85CF81", borderColor: "#85CF81" }}
            >
              accent
            </div>
          </div>
          <div >
            <div
              className="badge badge-accent px-5 py-5 text-black font-semibold"
              style={{ backgroundColor: "#85CF81", borderColor: "#85CF81" }}
            >
              accent
            </div>
          </div>
          <div >
            <div
              className="badge badge-accent px-5 py-5 text-black font-semibold"
              style={{ backgroundColor: "#85CF81", borderColor: "#85CF81" }}
            >
              accent
            </div>
          </div>
        </motion.div>
      </div>
      <motion.div class="grid grid-cols-4 gap-1"
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", duration: 2 }}>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </motion.div>
    </div>
  );
}

export default Dashboard;
