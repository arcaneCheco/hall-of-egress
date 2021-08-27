import React, { useEffect, useRef, useMemo } from "react";
import { useFrame, extend, useThree } from "@react-three/fiber";
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer";
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass";
import { UnrealBloomPass } from "three/examples/jsm/postprocessing/UnrealBloomPass";
import * as THREE from "three";
extend({ EffectComposer, RenderPass, UnrealBloomPass });
function Bloom({ children }) {
  const { gl, camera, size } = useThree();
  const ref = useRef();
  const composer = useRef();
  const aspect = useMemo(
    () => new THREE.Vector2(size.width, size.height),
    [size]
  );
  useEffect(
    () => void ref.current && composer.current.setSize(size.width, size.height),
    [ref, size]
  );
  useFrame(() => ref.current && composer.current.render(), 1);
  return (
    <>
      <scene ref={ref}>{children}</scene>
      <effectComposer ref={composer} args={[gl]}>
        <renderPass attachArray="passes" scene={ref.current} camera={camera} />
        <unrealBloomPass attachArray="passes" args={[aspect, 3, 0.8, 0]} />
      </effectComposer>
    </>
  );
}

export default Bloom;
