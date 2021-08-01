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
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import {
  useTexture,
  Html,
  OrbitControls,
  Sky,
  Stars,
  Stage,
} from "@react-three/drei";
import { animated, useSpring } from "@react-spring/three";
// import state from "./components/state";
// import { useStore } from "./store";
import Lights from "./components/Lights";
import Moon from "./components/Moon";
import CustomMaterial from "./components/CustomMaterial";
import { useGalleryStore } from "./store";
import Image from "./components/Image";
import Gallery from "./components/Gallery";
import Camera from "./components/Camera";
import { RGBA_ASTC_10x10_Format } from "three";
import Effects from "./components/Effects";
import Particles from "./components/Particles";
import Sparks from "./components/Sparks";

// global
// const state = useStore.getState();
// console.log(state);
// let wheelSpeed = 0;
// useStore.subscribe(
//   (prev, next) => {
//     wheelSpeed = next;
//     // console.log(s);
//   },
//   (state) => state.wheelSpeed
// );

// useStore.setState({ wheelSpeed: speed + e.deltaY * 0.002 });

// rotations:
//   data.current.rotateX(Math.PI / 4); //rotate π/4 around the x-axis
//   let axis = new Vector3(1, 0, 0); //vector axis
//   console.log(axis);
//   data.current.rotateOnAxis(axis, Math.PI / 36); //rotate π/8 around the axis
//   let axis = new Vector3(0, 1, 0); //vector axis
//   data.current.translateOnAxis(axis, 1); //translation direction 100 along the axis axis

function App() {
  // console.log(events);
  const tex = useMemo(() => new THREE.TextureLoader().load("/space.jpeg"), []);
  const mouse = useRef([0, 0]);

  useEffect(() => {
    document.body.style.cursor =
      "url('https://raw.githubusercontent.com/chenglou/react-motion/master/demos/demo8-draggable-list/cursor.png') 20 20";
  }, []);

  return (
    <>
      <Canvas
        onCreated={({ scene }) => {
          scene.background = tex;
        }}
        colorManagement
        shadowMap
      >
        <Lights />
        <fog attach="fog" args={["white", 50, 190]} />
        <Camera />
        <gridHelper />
        <Sky />
        <Stars
          radius={100}
          depth={50}
          count={5000}
          factor={4}
          saturation={0}
          fade
        />
        <OrbitControls
          // ref={controls}
          // args={[camera, domElement]}
          enablePan={true}
          enableZoom={false}
          enableRotate={true}
          // onScroll={null}
        />
        <Suspense fallback={null}>
          <Gallery pos={[4, -1, -1]} galleryId={1} planetColor={"red"} />
          <Gallery pos={[-4, -1, -1]} galleryId={2} planetColor={"green"} />
          {/* <Effects /> */}
        </Suspense>
        <Particles count={200} mouse={mouse} />
        {/* <Sparks
          count={10}
          mouse={mouse}
          colors={[
            "#A2CCB6",
            "#FCEEB5",
            "#EE786E",
            "#e0feff",
            "lightpink",
            "lightblue",
          ]}
        /> */}
      </Canvas>
    </>
  );
}

export default App;
