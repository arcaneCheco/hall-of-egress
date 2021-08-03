import React from "react";
import { useTexture, Plane } from "@react-three/drei";
import { DoubleSide } from "three";
import { useGalleryStore } from "../store2";

const PsychicOwl = () => {
  const addGallery = useGalleryStore((state) => state.addGallery);

  const clickHandler = () => {
    addGallery({
      _id: 3,
      ownerId: 1,
      galleryDescription: "",
      galleryName: "new gallery",
      position: [-7, 3, -6],
      color: "yellow",
    });
  };

  return (
    <group onClick={clickHandler}>
      <Plane position={[0, 2, 0]} args={[3, 3, 1024, 1024]}>
        <meshStandardMaterial
          map={useTexture("/psychic_owl_bg.png")}
          transparent={true}
          side={DoubleSide}
          metalness={0.5}
          normalMap={useTexture("/203_norm.jpeg")}
        />
      </Plane>
    </group>
  );
};
export default PsychicOwl;
