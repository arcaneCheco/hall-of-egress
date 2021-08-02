import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { useTexture, Html } from "@react-three/drei";
import { useGalleryStore } from "../store";

const Planet = ({ planetColor, isActive, setIsActive }) => {
  //   const [isActivePlanet, setIsActivePlanet] = useState(isActive);
  const dragOver = (e) => {
    e.preventDefault();
  };

  const dragEnter = (e) => {
    e.preventDefault();
    console.log("dragEnter triggered");
  };

  const dragLeave = (e) => {
    e.preventDefault();
    console.log("dragLeave triggered");
  };

  const fileDrop = (e) => {
    e.preventDefault();
    const files = e.dataTransfer.files;
    files.length && handleFile(...files);
  };

  const handleFile = async (file) => {
    const newUpload = await uploadedFile(file);
    setAddedImage({
      imageSource: newUpload.data.data.url,
      imageDescription: newUpload.data.data.title,
    });
  };
  const [addedImage, setAddedImage] = useState({
    imageSource: "",
    imageDescription: "",
  });

  const uploadUrl = "https://api.imgbb.com/1/upload";
  const imgbbApiKey = "f772c162924429d244bc8f5646ae9850";

  const uploadedFile = async (image) => {
    try {
      const formData = new FormData();
      formData.append("image", image);
      formData.append("key", imgbbApiKey);
      return await axios.post(uploadUrl, formData);
    } catch (err) {
      console.log(err);
    }
  };

  let addToGallery = useGalleryStore((state) => state.addToGallery);

  useEffect(() => {
    if (addedImage.imageSource) {
      console.log(addedImage);
      addToGallery(addedImage);
    }
  }, [addedImage]);

  return (
    <mesh>
      <sphereBufferGeometry args={[1.5, 32, 32]} />
      <meshStandardMaterial
        color={planetColor}
        map={useTexture("/moon.jpeg")}
        normalMap={useTexture("/normal.jpeg")}
        castShadow
      />
      <Html>
        <div
          onDragOver={dragOver}
          onDragEnter={dragEnter}
          onDragLeave={dragLeave}
          onDrop={fileDrop}
          className={isActive ? "dropMeshActive" : "dropMeshInActive"}
          onClick={() => setIsActive(!isActive)}
        ></div>
      </Html>
    </mesh>
  );
};

export default Planet;
