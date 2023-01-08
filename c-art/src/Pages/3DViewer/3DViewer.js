import * as THREE from "three"
import { Canvas } from "@react-three/fiber"
import Model from "../../components/3DModel/Model"
import Orbit from "../../components/3DModel/Orbit"
import { Suspense } from "react"

export default function ThreeDViewer() {
    return (
        <div style={{ width: "90vw", height: "85vh" }} >
            <Canvas style={{ background: "transparent" }} camera={{ position: [10, 10, 15]}} >
                <Suspense>
                    <Model scale={[0.1,0.1,0.1]} position={[1,1,1]} />
                </Suspense>
                <ambientLight intensity={0.5} />

                <pointLight position={[-18,5,0]} intensity={2}  castShadow />
                <pointLight position={[9,9,9]} intensity={2}  castShadow />
                <pointLight position={[15,15,15]} intensity={2}  castShadow />
                <pointLight position={[-9,-9,-9]} intensity={2}  castShadow />
                
                <Orbit />
                {/* ////axesHelper is used for help positioning the object/camera */}
                <axesHelper args={[3]} />

            </Canvas>
        </div>
    )
} 