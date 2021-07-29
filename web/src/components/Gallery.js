import { useFrame } from "@react-three/fiber";
import useStore from "../store";
import CustomMaterial from "./CustomMaterial";
import { useTexture } from "@react-three/drei";
import { useState, useRef, createRef } from "react";

const Gallery = () => {
  const gallery = useStore((state) => state.gallery);
  const textures = useTexture(gallery.map((obj) => obj.imagePath));

  const [isActive, setIsActive] = useState(true);

  if (isActive) {
    window.addEventListener("wheel", (e) => {
      speed += e.deltaY * 0.0002;
    });
  }

  let attractTo = 0;
  let attractMode = false;
  let speed = 0;
  let position = 0;
  let rounded = 0;

  const meshes = useRef([]);
  meshes.current = Array(5)
    .fill()
    .map((_, i) => meshes.current[i] || createRef());

  const imgGroup = useRef();

  const scrollAnimation = () => {
    position += speed;
    speed *= 0.8; //create some inertia
    meshes.current.forEach((data, i) => {
      let dist = Math.min(Math.abs(position - i), 1);
      dist = 1 - dist ** 2;
      let scale = 1 + 0.4 * dist;
      let posY = i * 1.2 - position * 1.2;
      data.current.position.y = posY;
      data.current.scale.set(scale, scale, scale);
      data.current.material.uniforms.distanceFromCenter.value = dist;
    });
    rounded = Math.round(position);
    let diff = rounded - position;
    attractMode
      ? (position += -(position - attractTo) * 0.05)
      : (position += Math.sign(diff) * Math.pow(Math.abs(diff), 0.7) * 0.015);
    //   sM.uniforms.time.value += 0.05;
    //   materials.forEach((mat) => {
    //     if (mat.uniforms) mat.uniforms.time.value = sM.uniforms.time.value;
    //   });
  };
  useFrame(scrollAnimation);

  // const [active, setActive] = useState(false);
  // const { rotations } = useSpring({
  //   rotations: active ? [0, 0, 0] : [-0.3, -0.3, -0.1],
  //   config: { mass: 10, tension: 1000, friction: 300, precision: 0.00001 },
  // });

  // const group = useRef();

  return (
    <>
      <group rotation={isActive ? [-0.3, -0.3, -0.1] : [0, 0, 0]}>
        {meshes.current.map((data, i) => (
          <group ref={imgGroup} position={[0, 1.2 * i, 0]}>
            <mesh ref={data}>
              <planeBufferGeometry args={[1.5, 1.0, 20, 20]} />
              <CustomMaterial imgTex={textures[i]} order={i} />
            </mesh>
          </group>
        ))}
      </group>
    </>
  );
};

export default Gallery;
