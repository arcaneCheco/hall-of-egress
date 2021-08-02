import React, { useState, useEffect, useRef } from "react";
import axios from "axios";

const TestDropZone = () => {
  const dragOver = (e) => {
    e.preventDefault();
  };

  const dragEnter = (e) => {
    e.preventDefault();
    console.log("dragEnter triggered");
  };

  const dragLeave = (e) => {
    e.preventDefault();
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

  useEffect(() => {
    if (addedImage.imageSource) console.log(addedImage);
  }, [addedImage]);

  return (
    <div
      className="myDZ"
      onDragOver={dragOver}
      onDragEnter={dragEnter}
      onDragLeave={dragLeave}
      onDrop={fileDrop}
    ></div>
  );
};

export default TestDropZone;
