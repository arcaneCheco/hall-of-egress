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
import { useTexture, Html } from "@react-three/drei";
import { animated, useSpring } from "@react-spring/three";
// import state from "./components/state";
// import { useStore } from "./store";
import Lights from "./components/Lights";
import Moon from "./components/Moon";
import CustomMaterial from "./components/CustomMaterial";
import useStore from "./store";
import Image from "./components/Image";
import Gallery from "./components/Gallery";
import Camera from "./components/Camera";

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

function App() {
  return (
    <>
      <Canvas>
        <Lights />
        <Camera />
        <Suspense fallback={null}>
          <Gallery />
        </Suspense>
      </Canvas>
    </>
  );
}

export default App;
