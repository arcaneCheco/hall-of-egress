import { useFrame } from "@react-three/fiber";
import useStore from "../store";
import CustomMaterial from "./CustomMaterial";
import { useTexture, Text, Html } from "@react-three/drei";
import { useState, useRef, createRef, useEffect } from "react";
import { useSpring, animated } from "@react-spring/three";
import { vDesc, vImg } from "../shader/vertex";
import { fImg, fDesc } from "../shader/fragment";

const Gallery = ({ pos, galleryId }) => {
  const { galleryName, images } = useStore((state) =>
    state.galleries.find((gallery) => gallery.galleryId === galleryId)
  );
  const textures = useTexture(images.map((img) => img.imagePath));
  const descriptions = images.map((img) => img.description);
  const nImages = images.length;

  const [isActive, setIsActive] = useState(true);

  const { activePos } = useSpring({
    activePos: isActive ? [4, 3, 3.5] : pos,
    config: { mass: 10, tension: 1000, friction: 300, precision: 0.00001 },
  });

  if (isActive) {
    window.addEventListener("wheel", (e) => {
      wheelSpeed += e.deltaY * 0.0002;
    });
  }

  let attractTo = 0; // for later
  let attractMode = false;

  let wheelSpeed = 0;
  let position = 0;
  let rounded = 0;
  let diff = 0;
  let orbitRadius = 1.5;

  const meshes = useRef([]);
  meshes.current = Array(nImages)
    .fill()
    .map((_, i) => meshes.current[i] || createRef());
  const textRefs = useRef([]);
  textRefs.current = Array(nImages)
    .fill()
    .map((_, i) => textRefs.current[i] || createRef());

  const scrollAnimation = () => {
    position += wheelSpeed;
    wheelSpeed *= 0.8; //create some inertia
    meshes.current.forEach((mesh, i) => {
      mesh.current.position.y =
        orbitRadius * Math.cos((position - i) * ((2 * Math.PI) / nImages)) + 0;
      mesh.current.position.z =
        orbitRadius * Math.sin((position - i) * ((2 * Math.PI) / nImages)) + 0;
      if (position < -0.0001) position += nImages; // makes it work in both directions
      let distance = Math.min(Math.abs(position - i), 1);
      distance = 1 - distance ** 2;
      let scaleFactor = 1 + 0.8 * distance;
      let angle = ((2 * Math.PI) / nImages) * (position - i);
      mesh.current.rotation.x = angle - Math.PI / 2;
      mesh.current.scale.set(scaleFactor, scaleFactor, scaleFactor);
      mesh.current.material.uniforms.distanceFromCenter.value = distance;

      textRefs.current[
        i
      ].current._baseMaterial.uniforms.distanceFromCenter.value = distance;
      textRefs.current[i].current._baseMaterial.uniforms.pos.value = position;
    });
    rounded = Math.round(position);
    diff = rounded - position;
    attractMode
      ? (position += -(position - attractTo) * 0.05)
      : (position += Math.sign(diff) * Math.pow(Math.abs(diff), 0.7) * 0.015);

    position = position % nImages;

    //   sM.uniforms.time.value += 0.05;
    //   materials.forEach((mat) => {
    //     if (mat.uniforms) mat.uniforms.time.value = sM.uniforms.time.value;
    //   });
  };
  useFrame(scrollAnimation);

  return (
    <>
      <animated.group
        position={activePos}
        onClick={() => setIsActive(!isActive)}
      >
        <group>
          <group visible={isActive}>
            {meshes.current.map((mesh, i) => (
              <group>
                <group rotation={[1.2, 0, 0.75]}>
                  <mesh ref={mesh}>
                    <planeBufferGeometry args={[1.5, 1.0, 20, 20]} />
                    <CustomMaterial
                      imgTex={textures[i]}
                      order={i}
                      vertexShader={vImg}
                      fragmentShader={fImg}
                    />
                  </mesh>
                </group>
                <mesh
                  position={[-6, 0, 0]}
                  scale={[4, 4, 4]}
                  rotation={[-0.4, 0.3, 0.2]}
                >
                  <Text
                    maxWidth={1.2}
                    curveRadius={-5}
                    text={descriptions[i]}
                    ref={textRefs.current[i]}
                    // outlineBlur={0.1}
                    outlineOpacity={0.1}
                    // outlineWidth={0.1}
                  >
                    <CustomMaterial
                      //   imgTex={textures[i]}
                      order={i}
                      shift={i}
                      vertexShader={vDesc}
                      fragmentShader={fDesc}
                      attach="material"
                    />
                  </Text>
                </mesh>
              </group>
            ))}
          </group>
          <group>
            <mesh>
              <sphereBufferGeometry args={[1, 32, 32]} />
              <meshStandardMaterial color={"blue"} />
            </mesh>
          </group>
        </group>
      </animated.group>
    </>
  );
};

export default Gallery;
