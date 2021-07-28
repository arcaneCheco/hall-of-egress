import { useRef, useEffect } from "react";
import { useTexture } from "@react-three/drei";
const Moon = () => {
  const mesh = useRef();
  useEffect(() => {
    const onScroll = (e) => {
      console.log(e.deltaY);
      mesh.current.rotation.x += 0.05;
      mesh.current.rotation.y += 0.075;
      mesh.current.rotation.z += 0.05;
    };
    window.addEventListener("wheel", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const moonTex = useTexture("/moon.jpeg");
  const normalTex = useTexture("/normal.jpeg");
  return (
    <mesh ref={mesh} onClick={() => console.log("hello")}>
      <sphereGeometry attach="geometry" args={[1, 32, 32]} />
      <meshStandardMaterial
        attach="material"
        color={"#ff6347"}
        map={moonTex}
        normalMap={normalTex}
      />
    </mesh>
  );
};

export default Moon;
