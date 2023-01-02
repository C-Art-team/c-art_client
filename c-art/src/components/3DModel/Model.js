import * as THREE from "three"
import {useLoader} from "@react-three/fiber"
import {FBXLoader} from 'three/examples/jsm/loaders/FBXLoader'

export default function Model(props){
    const model = useLoader(FBXLoader, props.path)
    return(

        <mesh>
        {/* <boxBufferGeometry/>
        <meshBasicMaterial color="white" /> */}
        <primitive object={model} position={props.position} scale={props.scale} />
        </mesh>

    )
}