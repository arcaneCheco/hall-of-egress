import "./App.css";
import React, { useRef, Suspense, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sky, Stars, Loader } from "@react-three/drei";
import Lights from "./components/Lights";
import Gallery from "./components/Gallery";
import Camera from "./components/Camera";
import AddEffects from "./components/AddEffects";
import Particles from "./components/Particles";
import { useGalleryStore } from "./store2";
import PsychicOwl from "./components/PsychicOwl";

function App() {
  const mouse = useRef([0, 0]);

  useEffect(() => {
    document.body.style.cursor =
      "url('https://raw.githubusercontent.com/chenglou/react-motion/master/demos/demo8-draggable-list/cursor.png') 26 26, auto";
  }, []);

  let galleries = useGalleryStore((state) => state.galleries);
  useGalleryStore.subscribe(
    (prev, next) => (galleries = next),
    (state) => state.galleries
  );

  return (
    <>
      <div className="app">
        <Canvas colorManagement shadowMap>
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
            enablePan={true}
            enableZoom={false}
            enableRotate={true}
            // autoRotate
          />
          <Suspense fallback={null}>
            <PsychicOwl />
            {galleries.map((gallery) => (
              <Gallery
                key={gallery._id}
                pos={gallery.position}
                galleryId={gallery._id}
                planetColor={gallery.color}
              />
            ))}
            <AddEffects />
          </Suspense>

          <Particles count={2000} mouse={mouse} />
        </Canvas>
        <Loader />
      </div>
    </>
  );
}

export default App;
