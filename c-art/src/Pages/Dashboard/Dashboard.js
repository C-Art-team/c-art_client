import React, { useEffect, useState } from "react";
import Card from "../../components/Card/Card";
import Carousel from "../../components/Carousel/Carousel";
import { useSelector, useDispatch } from "react-redux";
import { fetchAllCategory } from "../../actions/actionCategory";
import { fetchAllArt } from "../../actions/artAction";
import { toast } from "react-toastify";
import { AnimatePresence, motion } from "framer-motion";


function Dashboard() {
  const [loading, setLoading] = useState(true);
  const categories = useSelector((state) => state.categoryReducer.categories);
  const arts = useSelector((state) => state.artReducer.arts);
  // console.log(arts)
  const dispatch = useDispatch();

  const filterArt = (e) => {
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
        // console.log(err);
        err.message
          ? toast.error(`${err?.message}`)
          : toast.error("Internal Server Error");
      });
  };

  useEffect(() => {
    dispatch(fetchAllCategory())
      .then(() => {
        setLoading(false);
      })
      .catch((err) => {
        // console.log(err);
        err.message
          ? toast.error(`${err?.message}`)
          : toast.error("Internal Server Error");
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
        // console.log(error);
        error.message
          ? toast.error(`${error?.message}`)
          : toast.error("Internal Server Error");
      });
  }, []);

  return (
    <div className="px-8">
      <motion.div className="flex justify-center"
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 100, opacity: 0 }}
        transition={{ type: "spring" }}>
        <Carousel />
      </motion.div>
      <div className="flex py-5 justify-between items-center">
        <motion.h1
          initial={{ opacity: 0, }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >ARTWORKS</motion.h1>
        <motion.div className="flex gap-3"
          initial={{ opacity: 0, }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}>
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
        </motion.div>
      </div>
      <div className="grid grid-cols-4">
        {arts.map((el) => {
          const { id, name, Previews, price, CategoryId } = el;
          return (
            <AnimatePresence>
              <Card
                key={id}
                id={id}
                name={name}
                price={price}
                Previews={Previews}
                loading={loading}
                CategoryId={CategoryId}
                page="dashboard"
              />
            </AnimatePresence>
          );
        })}
      </div>
    </div>
  );
}

export default Dashboard;
