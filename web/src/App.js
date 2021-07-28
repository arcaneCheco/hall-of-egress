import "./App.css";
import * as THREE from "three";
import React, {
  useRef,
  Suspense,
  useMemo,
  useState,
  useEffect,
  useCallback,
} from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useTexture, Html } from "@react-three/drei";
import { animated, useSpring } from "@react-spring/three";
// import state from "./components/state";
// import { useStore } from "./store";
import Lights from "./components/Lights";
import Moon from "./components/Moon";
import CustomMaterial from "./components/CustomMaterial";
import useStore from "./store";

const Image = ({ imgTex, id }) => {
  const gallery = useStore((state) => state.gallery);
  // const speed = useStore.subscribe(
  //   (oldValue, newValue) => {
  //     console.log("old: ", oldValue);
  //     console.log("new: ", newValue);
  //   },
  //   (state) => state.speed
  // );
  // console.log(speed);
  return (
    <group>
      <mesh>
        <planeBufferGeometry args={[1.5, 1.0, 20, 20]} />
        <CustomMaterial
          imgTex={imgTex}
          order={gallery.find((obj) => obj.id === id).index}
        />
      </mesh>
    </group>
  );
};

const Gallery = () => {
  const gallery = useStore((state) => state.gallery);
  const textures = useTexture(gallery.map((obj) => obj.imagePath));
  const ids = gallery.map((obj) => obj.id);
  // const [isActive]

  // const [active, setActive] = useState(false);
  // const { rotations } = useSpring({
  //   rotations: active ? [0, 0, 0] : [-0.3, -0.3, -0.1],
  //   config: { mass: 10, tension: 1000, friction: 300, precision: 0.00001 },
  // });

  const setSpeed = useStore((state) => state.setSpeed);
  // useEffect(() => ,[])
  const onWheelHandler = (e) => {
    console.log(e.deltaY, "from gallery");
    // setSpeed(e.delta);
  };

  return (
    <>
      <group onWheel={onWheelHandler}>
        {textures.map((imgTex, i) => (
          <Image imgTex={imgTex} id={ids[i]} />
        ))}
      </group>
    </>
  );
};

function App() {
  return (
    <>
      <Canvas>
        <Lights />
        <Suspense fallback={null}>
          <Gallery />
        </Suspense>
      </Canvas>
    </>
  );
}

export default App;
