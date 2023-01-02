import {useThree, extend} from "@react-three/fiber"
import {OrbitControls} from "three/examples/jsm/controls/OrbitControls"

extend({OrbitControls})

export default function Orbit(){
    const {camera,gl} = useThree()
    return (
        <orbitControls args={[camera, gl.domElement]} />
    )
}

