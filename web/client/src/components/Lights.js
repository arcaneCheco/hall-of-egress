import { useThree } from "@react-three/fiber";
import { useEffect } from "react";
import * as THREE from "three";
const Lights = () => {
  return (
    <>
      <ambientLight intensity={0.3} />
      <pointLight intensity={1} position={[0, 0, 0]} />
      {/* <pointLightHelper /> */}
      {/* <directionalLight intensity={1} position={[10, 10, 5]} />
      <directionalLight intensity={1.5} position={[0, 10, 0]} /> */}
    </>
  );
};

export default Lights;
