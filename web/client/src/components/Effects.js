import * as THREE from "three";
import React, { useRef, useMemo, useEffect } from "react";
import { extend, useThree, useFrame } from "@react-three/fiber";
import { Effects } from "@react-three/drei";
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer";
import { ShaderPass } from "three/examples/jsm/postprocessing/ShaderPass";
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass";
import { UnrealBloomPass } from "three/examples/jsm/postprocessing/UnrealBloomPass";
import { BloomPass } from "three/examples/jsm/postprocessing/BloomPass";
import { FilmPass } from "three/examples/jsm/postprocessing/FilmPass";
import { ClearPass } from "three/examples/jsm/postprocessing/ClearPass";
import { AfterimagePass } from "three/examples/jsm/postprocessing/AfterimagePass";
import { WaterPass } from "./shader/WaterPass";

extend({
  EffectComposer,
  //   ShaderPass,
  RenderPass,
  WaterPass,
  UnrealBloomPass,
  BloomPass,
  FilmPass,
  ClearPass,
  AfterimagePass,
});

const MyEffects = () => {
  const aspect = useMemo(() => new THREE.Vector2(512, 512), []);
  return (
    <Effects
      multisamping={8} // Default, uses WebGL2 multisamping if available
      renderIndex={1} // Default
      disableGamma={false} // Default, would switch off the gamma-correction-pass
      disableRenderPass={false} // Default, would remove the first scene-render-pass
    >
      <waterPass attachArray="passes" factor={0.1} />
      {/* <afterimagePass attachArray="passes" args={[0.01]} /> */}
      {/* <clearPass attachArray="passes" clearAlpha={0.5} /> */}
    </Effects>
  );
};

export { MyEffects };

// export default function Effects() {
//   const composer = useRef();
//   const { scene, gl, size, camera } = useThree();
// const aspect = useMemo(() => new THREE.Vector2(512, 512), []);
//   //   useEffect(
//   //     () => void composer.current.setSize(size.width, size.height),
//   //     [size]
//   //   );
//   useFrame(() => composer.current.render(), 1);
//   return (
//     <effectComposer ref={composer} args={[gl]}>
//       <renderPass attachArray="passes" scene={scene} camera={camera} />
//       {/* <unrealBloomPass attachArray="passes" args={[aspect, 0.001, 0.4, 0]} /> */}
//       {/* <waterPass attachArray="passes" factor={0.1} /> */}
//     </effectComposer>
//   );
// }
