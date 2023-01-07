import React from "react";
import Card from "../../components/Card/Card";
import Carousel from "../../components/Carousel/Carousel";

function Dashboard() {
  return (
    <div className="px-8">
      <div className="flex justify-center">
        <Carousel />
      </div>
      <div className="flex py-5 justify-between items-center">
        <h1>ARTWORKS</h1>
        <div className="flex gap-3">
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
        </div>
      </div>
      <div class="grid grid-cols-4 gap-1">
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
      </div>
    </div>
  );
}

export default Dashboard;
