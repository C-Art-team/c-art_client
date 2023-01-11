import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

function Carousel() {
  const [width, setWith] = useState(0);
  const carousel = useRef();
  useEffect(() => {
    setWith(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);
  return (
    <>
      <motion.div className="overflow-hidden w-10/12 my-10 h-1/2 flex rounded-xl">
        <motion.div
          drag="x"
          dragConstraints={{ right: 0, left: -width + 2 }}
          className="flex h-1/2"
          ref={carousel}
          whileTap={{ cursor: "grabbing" }}
        >
          <img
            draggable="false"
            className="rounded-2xl h-96 px-3"
            src="https://storage.googleapis.com/storage-c-art.appspot.com/c-art%2F3dmodel1previews1859492ca61.jpg"
          />
          <img
            draggable="false"
            className="rounded-2xl h-96 px-3"
            src="https://storage.googleapis.com/storage-c-art.appspot.com/c-art%2Fvideo1previews11859498069b.png"
          />
          <img
            draggable="false"
            className="rounded-2xl h-96 px-3"
            src="https://storage.googleapis.com/storage-c-art.appspot.com/c-art%2F3dmodel4previews1185949c9d46.jpg"
          />

        </motion.div>
      </motion.div>
    </>
  );
}

export default Carousel;
