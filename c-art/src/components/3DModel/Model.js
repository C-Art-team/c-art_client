import * as THREE from "three";
import { useLoader} from "@react-three/fiber";
import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
import { Suspense, useEffect,useState } from "react";


export default function Model(props) {
    // "https://storage.googleapis.com/storage-c-art.appspot.com/c-art%2Fgeneric_vr_glasses1858f32727b.glb"

    const [total, setTotal] = useState(1)
    const format = props.asset.slice(props.asset.length - 3);
    let size = new THREE.Vector3()
    const box = new THREE.Box3()
    let model = useLoader(
        format === "obj" ? OBJLoader : format === "fbx" ? FBXLoader : GLTFLoader,
        props.asset
    );

    model = format === "glb" || format === "ltf" ? model.scene : model;

    // const { scene } = useThree()

    useEffect(() => {

        box.expandByObject(model)

        let { x, y, z } = box.getSize(size)

        let totalSize = x * y * z

        if (totalSize > Math.pow(100, 3)) {
            setTotal(1 / 1000)
        } else if (totalSize > 100 && totalSize < 10000) {
            setTotal(1 / 100)
        } else if (totalSize > 0.01 && totalSize < 0.1){
            setTotal(1 * 10)
        }
      

    }, [])

    //   console.log(asset.slice(asset.length - 3));
    // console.log(total);



    return (
        <Suspense>
            <mesh  scale={[total, total, total]}  >
                <primitive
                    object={model}
                    position={props.position}
                />
            </mesh>
        </Suspense>
    );
}
