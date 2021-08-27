import { useFrame } from "@react-three/fiber";
import CustomMaterial from "./CustomMaterial";
import { useTexture, Text } from "@react-three/drei";
import { useState, useRef, createRef, useEffect, useMemo } from "react";
import { useSpring, animated } from "@react-spring/three";
import { vDesc, vImg } from "./shader/vertex";
import { fImg, fDesc } from "./shader/fragment";
import Planet from "./Planet";
import { useImageStore } from "../store2";

const Gallery = ({ pos, galleryId, planetColor }) => {
  let attractMode = false;
  let attractTo = 0;

  let images = useImageStore((state) =>
    state.images.filter((image) => image.ownerId === galleryId)
  );
  useImageStore.subscribe(
    (prev, next) => {
      images = next;
    },
    (state) => state.images.filter((image) => image.ownerId === galleryId)
  );

  const textures = useTexture(images.map((img) => img.imageSource));

  const descriptions = images.map((img) => img.imageDescription);

  const nImages = images.length;

  const [isActive, setIsActive] = useState(false);

  const { activePos } = useSpring({
    activePos: isActive ? [4, 3, 3.5] : pos,
    config: { mass: 10, tension: 1000, friction: 300, precision: 0.00001 },
  });

  const wheelFunc = (e) => {
    wheelSpeed += e.deltaY * 0.0002;
  };
  if (isActive) {
    window.addEventListener("wheel", wheelFunc);
  }

  let wheelSpeed = 0;
  let position = 0;
  let diff = 0;
  let orbitRadius = 2.2;

  const meshes = useRef([]);
  meshes.current = Array(nImages)
    .fill()
    .map((_, i) => meshes.current[i] || createRef());

  const textRefs = useRef([]);

  textRefs.current = Array(nImages)
    .fill()
    .map((_, i) => textRefs.current[i] || createRef());

  let time = 0;
  const planet = useRef();

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

      textRefs.current[i].current.position.y = 1.2 * (position - i);

      textRefs.current[
        i
      ].current._baseMaterial.uniforms.distanceFromCenter.value = distance;
    });
    diff = Math.round(position) - position;
    attractMode
      ? (position += -(position - attractTo) * 0.55)
      : (position += Math.sign(diff) * Math.pow(Math.abs(diff), 0.7) * 0.015);

    position = position % nImages;

    time += 0.05;
    planet.current.rotation.z += Math.sin(time * 0.3) * 0.03;
    planet.current.rotation.y += Math.sin(time * 0.3) * 0.03;
    planet.current.rotation.x += Math.sin(time * 0.3) * 0.03;
    planet.current.position.y += Math.sin(time * 0.8) * 0.0005;
    planet.current.position.z += Math.sin(time * 0.8) * 0.0005;
    planet.current.position.x += Math.sin(time * 0.8) * 0.0005;
  };

  useFrame(scrollAnimation);

  window.addEventListener("keydown", (e) => {
    if (textRefs.current[attractTo].current) {
      if (e.key === "Backspace")
        textRefs.current[attractTo].current.text = textRefs.current[
          attractTo
        ].current.text.slice(0, -1);
      else if (e.key === "Enter")
        textRefs.current[attractTo].current.text += "\n";
      else {
        textRefs.current[attractTo].current.text += e.key;
      }
      descriptions[attractTo] = textRefs.current[attractTo].current.text;
    }
  });

  const editMode = (i) => {
    attractTo = i;
    attractMode = !attractMode;
  };

  return (
    <>
      <animated.group position={activePos}>
        <group>
          <group visible={isActive}>
            {meshes.current.map((mesh, i) => (
              <group key={i}>
                <group rotation={[1.2, 0, 0.95]}>
                  <mesh ref={mesh}>
                    <planeBufferGeometry args={[1.5, 1.0, 20, 20]} castShadow />
                    <CustomMaterial
                      imgTex={attractMode ? textures[attractTo] : textures[i]}
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
                    outlineBlur={0.1}
                    outlineOpacity={0.05}
                    outlineWidth={0.15}
                    onClick={() => editMode(i)}
                  >
                    <CustomMaterial
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
          <group ref={planet} onClick={() => setIsActive(!isActive)}>
            <Planet
              planetColor={planetColor}
              isActive={isActive}
              setIsActive={setIsActive}
              ownerId={galleryId}
            />
          </group>
        </group>
      </animated.group>
    </>
  );
};

export default Gallery;
