import * as THREE from "three"
import { Canvas } from "@react-three/fiber"
import Model from "../../components/3DModel/Model"
import Orbit from "../../components/3DModel/Orbit"
import { Suspense } from "react"

export default function ThreeDViewer() {
    return (
        <div style={{ width: "80vw", height: "80vh" }} >

            <Canvas style={{ background: "black" }} camera={{ position: [15, 15, 15] }} >
                <Suspense>
                    <Model scale={[0.01,0.01,0.01]} position={[1,1,1]} path="/3Dfiles/Koenigsegg.fbx" />
                </Suspense>
                <ambientLight intensity={0.5} />

                <pointLight position={[-18,5,0]} intensity={2}  castShadow />
                <pointLight position={[9,9,9]} intensity={2}  castShadow />
                <pointLight position={[15,15,15]} intensity={2}  castShadow />
                <pointLight position={[-9,-9,-9]} intensity={2}  castShadow />

                <Orbit />

                {/* ////axesHelper is used for help positioning the object/camera */}
                {/* <axesHelper args={[3]} /> */}

            </Canvas>
        </div>
    )
} 