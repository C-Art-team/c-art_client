import React, { useEffect, useState } from "react";
import Card from "../../components/Card/Card";
import Carousel from "../../components/Carousel/Carousel";
import { useSelector, useDispatch } from "react-redux";
import { fetchAllCategory } from "../../actions/actionCategory";
import { fetchAllArt } from "../../actions/artAction";

function Dashboard() {
  const [loading, setLoading] = useState(true);
  const categories = useSelector((state) => state.categoryReducer.categories);
  const arts = useSelector((state) => state.artReducer.arts);
  // console.log(arts)
  const dispatch = useDispatch();

  const filterArt = (e) => {
    // setLoading(true);
    dispatch(fetchAllArt(e.target.value))
      .then((data) => {
        console.log(data);
        if (data.length === 0) {
          dispatch(fetchAllArt()).then(() => {
            setTimeout(() => {
              setLoading(false);
            }, 2000);
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    dispatch(fetchAllCategory())
      .then(() => {
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    dispatch(fetchAllArt())
      .then(() => {
        setTimeout(() => {
          setLoading(false);
        }, 5000);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="px-8">
      <div className="flex justify-center">
        <Carousel />
      </div>
      <div className="flex py-5 justify-between items-center">
        <h1>ARTWORKS</h1>
        <div className="flex gap-3">
          {!loading
            ? categories.map((el) => {
              return (
                <div key={el.id}>
                  <button
                    onClick={filterArt}
                    className="badge badge-accent px-5 py-5 text-black font-semibold"
                    style={{
                      backgroundColor: "#85CF81",
                      borderColor: "#85CF81",
                    }}
                    value={el.id}
                  >
                    {el.name}
                  </button>
                </div>
              );
            })
            : <progress className="progress w-56">Loading</progress>}
        </div>
      </div>
      <div className="grid grid-cols-4">
        {arts.map((el) => {
          const { id, name, Previews, CategoryId } = el;
          return (
            <Card
              key={id}
              id={id}
              name={name}
              Previews={Previews}
              loading={loading}
              CategoryId={CategoryId}
              page="dashboard"
            />
          );
        })}
      </div>
    </div>
  );
}

export default Dashboard;
