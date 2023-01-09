// import * as THREE from "three";
import { useParams } from "react-router-dom";
import { Canvas } from "@react-three/fiber";
import Model from "../../components/3DModel/Model";
import Orbit from "../../components/3DModel/Orbit";
import { Suspense, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchOneArt } from "../../actions/artAction";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";

export default function ThreeDViewer() {
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const oneArt = useSelector((state) => state.artReducer.art);
  const dispatch = useDispatch();

  useEffect(() => {


    dispatch(fetchOneArt(id))
      .then((data) => {
        setLoading(false);
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);
  return (
    <div style={{ width: "90vw", height: "85vh" }}>
      {!loading ? (
        <Canvas
          style={{ background: "transparent" }}
          camera={{ position: [3, 3, 3] }}
        >
          <Suspense>
            <Model
              position={[0, 0, 0]}
                asset={oneArt.source}
            />
          </Suspense>

          <ambientLight intensity={0.5} />

          <pointLight position={[-18, 5, 0]} intensity={2} castShadow />
          <pointLight position={[9, 9, 9]} intensity={2} castShadow />
          <pointLight position={[15, 15, 15]} intensity={2} castShadow />
          <pointLight position={[-9, -9, -9]} intensity={2} castShadow />

          <Orbit />
          {/* ////axesHelper is used for help positioning the object/camera */}
          <axesHelper args={[3]} />
        </Canvas>
      ) : (
        <LoadingSpinner />
      )}
    </div>
  );
}
