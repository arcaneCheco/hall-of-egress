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

  let wheelSpeed;
  // useStore.subscribe(
  //   (prev, next) => {
  //     wheelSpeed = next;
  //   },
  //   (state) => state.wheelSpeed
  // );

  // let position = 0;

  // useFrame(() => {
  //   console.log(wheelSpeed);
  // });
  // useFrame(() => {
  //   position += speed;

  // })

  //   const raf = () => {
  //     position += speed;
  //     speed *= 0.8; //create some inertia
  //     distArr.forEach((dist, i) => {
  //       dist = Math.min(Math.abs(position - i), 1);
  //       dist = 1 - dist ** 2;
  //       let factor = 1 + 0.4 * dist;
  //       if (meshes[i]) {
  //         meshes[i].position.y = i * 1.2 - position * 1.2;
  //         meshes[i].scale.set(factor, factor, factor);
  //         meshes[i].material.uniforms.distanceFromCenter.value = dist;
  //       }
  //     });
  //     rounded = Math.round(position);
  //     let diff = rounded - position;
  //     attractMode
  //       ? (position += -(position - attractTo) * 0.05)
  //       : (position += Math.sign(diff) * Math.pow(Math.abs(diff), 0.7) * 0.015);
  //     sM.uniforms.time.value += 0.05;
  //     materials.forEach((mat) => {
  //       if (mat.uniforms) mat.uniforms.time.value = sM.uniforms.time.value;
  //     });
  //     window.requestAnimationFrame(raf);
  //   };
  //   raf();

  return (
    <group position>
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
  const [isActive, setIsActive] = useState(true);

  const updateSpeed = useStore((state) => state.setWheelSpeed);

  let speed = 0;
  let position = 0;
  let rounded = 0;
  let diff = 0;

  if (isActive) {
    window.addEventListener("wheel", (e) => {
      speed += e.deltaY * 0.0002;
      // updateSpeed(e.deltaY);
    });
  }
  // const [active, setActive] = useState(false);
  // const { rotations } = useSpring({
  //   rotations: active ? [0, 0, 0] : [-0.3, -0.3, -0.1],
  //   config: { mass: 10, tension: 1000, friction: 300, precision: 0.00001 },
  // });
  const group = useRef();
  useFrame(() => {
    position += speed;
    speed *= 0.8;
    group.current.position.y = position;
    rounded = Math.round(position);
    let diff = rounded - position;
    position += Math.sign(diff) * Math.pow(Math.abs(diff), 0.7) * 0.015;
  });

  return (
    <>
      <group ref={group} rotation={isActive ? [-0.3, -0.3, -0.1] : [0, 0, 0]}>
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
