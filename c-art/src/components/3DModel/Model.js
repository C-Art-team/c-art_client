import * as THREE from "three";
import { useLoader } from "@react-three/fiber";
import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";


import { Suspense,useState } from "react";

export default function Model(props) {
  // "https://storage.googleapis.com/storage-c-art.appspot.com/c-art%2Fgeneric_vr_glasses1858f32727b.glb"
  // "https://storage.googleapis.com/storage-c-art.appspot.com/c-art%2Fuploads_files_2792345_Koenigsegg18590252cc5.fbx"
  // "https://storage.googleapis.com/storage-c-art.appspot.com/c-art%2FFormula%201%20mesh18590471f94.obj"
  // "https://storage.googleapis.com/storage-c-art.appspot.com/c-art%2Fhelicopter_v21859068152a.glb"
  // "https://storage.googleapis.com/storage-c-art.appspot.com/c-art%2Fford_mustang_1968185906e2305.glb"
  // "https://storage.googleapis.com/storage-c-art.appspot.com/c-art%2F11805_airplane_v2_L2185908bfcd8.obj"
  const [asset, setAsset] = useState(props.asset);
  const format = asset.slice(asset.length - 3);

  let model = useLoader(
    format === "obj" ? OBJLoader : format === "fbx" ? FBXLoader : GLTFLoader,
    asset
  );

  model = format === "glb" || format === "gltf" ? model.scene : model;


  console.log(format);
  console.log(model);
  console.log(asset.slice(asset.length - 3));
  return (
    <Suspense>
      <mesh>
        {/* <boxBufferGeometry/>
        <meshBasicMaterial color="white" /> */}
        <primitive
          object={model}
          position={props.position}
          scale={props.scale}
        />
      </mesh>
    </Suspense>
  );
}
