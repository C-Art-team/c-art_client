import React, { useEffect, useState } from "react";
import Card from "../../components/Card/Card";
import Carousel from "../../components/Carousel/Carousel";
import { useSelector,useDispatch } from "react-redux";
import { fetchAllCategory } from "../../actions/actionCategory";
function Dashboard() {
  const [loading,setLoading] = useState(true)
  const categories = useSelector((state) => state.categoryReducer.categories)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchAllCategory())
    .then(() => {
      setLoading(false)
    })
    .catch((err) => {
      console.log(err)
    })
    .finally(() => {
      setLoading(false)
    })
  },[])
  return (
    <div className="px-8">
      <div className="flex justify-center">
        <Carousel />
      </div>
      <div className="flex py-5 justify-between items-center">
        <h1>ARTWORKS</h1>
        <div className="flex gap-3">
          {!loading ? categories.map((el) => {
            return (
              <div key={el.id}>
                <button
                  className="badge badge-accent px-5 py-5 text-black font-semibold"
                  style={{ backgroundColor: "#85CF81", borderColor: "#85CF81" }}
                  value={el.id}
                >
                  {el.name}
                </button>
              </div>
            );
          }) : null}
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
