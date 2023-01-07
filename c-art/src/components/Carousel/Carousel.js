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
      <motion.div className="overflow-hidden w-10/12 my-10 flex rounded-xl">
        <motion.div
          drag="x"
          dragConstraints={{ right: 0, left: -width + 2 }}
          className="flex"
          ref={carousel}
          whileTap={{ cursor: "grabbing" }}
        >
          <img
            draggable="false"
            className="rounded-2xl h-full px-3"
            src="https://placeimg.com/400/300/arch"
          />
          <img
            draggable="false"
            className="rounded-2xl h-full px-3"
            src="https://placeimg.com/400/300/arch"
          />
          <img
            draggable="false"
            className="rounded-2xl h-full px-3"
            src="https://placeimg.com/400/300/arch"
          />
          <img
            draggable="false"
            className="rounded-2xl h-full px-3"
            src="https://placeimg.com/400/300/arch"
          />
          <img
            draggable="false"
            className="rounded-2xl h-full px-3"
            src="https://placeimg.com/400/300/arch"
          />
          <img
            draggable="false"
            className="rounded-2xl h-full px-3"
            src="https://placeimg.com/400/300/arch"
          />
          <img
            draggable="false"
            className="rounded-2xl h-full px-3"
            src="https://placeimg.com/400/300/arch"
          />
          <img
            draggable="false"
            className="rounded-2xl h-full px-3"
            src="https://placeimg.com/400/300/arch"
          />
        </motion.div>
      </motion.div>
    </>
  );
}

export default Carousel;
