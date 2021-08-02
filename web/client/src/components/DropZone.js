import React, { useState, useEffect, useRef } from "react";
import axios from "axios";

/**
 * inside app.js
 <div className="dnd">
          <p className="title">React Drag and Drop Image Upload</p>
          <div className="content">
            <DropZone />
          </div>
        </div>
 */

const DropZone = () => {
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const [validFiles, setValidFiles] = useState([]);
  const [unsupportedFiles, setUnsupportedFiles] = useState([]); // used to hde button when files are invalid

  const modalImageRef = useRef();
  const modalRef = useRef();
  const fileInputRef = useRef();

  const uploadModalRef = useRef(); // displays and hides the upload modal
  const uploadRef = useRef(); // shows messages
  const progressRef = useRef(); // updates the progress bar

  useEffect(() => {
    let filteredArray = selectedFiles.reduce((file, current) => {
      const x = file.find((item) => item.name === current.name);
      if (!x) {
        return file.concat([current]);
      } else {
        return file;
      }
    }, []);
    setValidFiles([...filteredArray]);
  }, [selectedFiles]);

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
    console.log(files);
    if (files.length) {
      handleFiles(files);
    }
  };

  const handleFiles = (files) => {
    for (let i = 0; i < files.length; i++) {
      if (validateFile(files[i])) {
        // add to an array so we can display the name of file
        setSelectedFiles((prevArray) => [...prevArray, files[i]]);
      } else {
        // add a new property called invalid
        files[i]["invalid"] = true;
        // add to the same array so we can display the name of the file
        setSelectedFiles((prevArray) => [...prevArray, files[i]]);
        // set error message
        setErrorMessage("File type not permitted");
        //
        setUnsupportedFiles((prevArray) => [...prevArray, files[i]]);
      }
    }
  };

  const validateFile = (file) => {
    const validTypes = [
      "image/jpeg",
      "image/jpg",
      "image/png",
      "image/gif",
      "image/x-icon",
    ];
    if (validTypes.indexOf(file.type) === -1) {
      return false;
    }
    return true;
  };

  const fileSize = (size) => {
    if (size === 0) return "0 Bytes";
    const k = 1024;
    const sizes = ["Bytes", "KB", "MB", "GB", "TB"];
    const i = Math.floor(Math.log(size) / Math.log(k));
    return parseFloat((size / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
  };

  const fileType = (fileName) => {
    return (
      fileName.substring(fileName.lastIndexOf(".") + 1, fileName.length) ||
      fileName
    );
  };

  const removeFile = (name) => {
    // find the index of the item
    // remove the item from array

    const validFileIndex = validFiles.findIndex((e) => e.name === name);
    validFiles.splice(validFileIndex, 1);
    // update validFiles array
    setValidFiles([...validFiles]);
    const selectedFileIndex = selectedFiles.findIndex((e) => e.name === name);
    selectedFiles.splice(selectedFileIndex, 1);
    // update selectedFiles array
    setSelectedFiles([...selectedFiles]);

    const unsupportedFileIndex = unsupportedFiles.findIndex(
      (e) => e.name === name
    );
    if (unsupportedFileIndex !== -1) {
      unsupportedFiles.splice(unsupportedFileIndex, 1);
      // update unsupportedFiles array
      setUnsupportedFiles([...unsupportedFiles]);
    }
  };

  const openImageModal = (file) => {
    const reader = new FileReader(); // enables web applications to asynchronously read the contents of files (or raw data buffers) stored on the user’s computer
    modalRef.current.style.display = "block";
    reader.readAsDataURL(file);
    reader.onload = function (e) {
      modalImageRef.current.style.backgroundImage = `url(${e.target.result})`;
    };
  };

  const closeModal = () => {
    modalRef.current.style.display = "none";
    modalImageRef.current.style.backgroundImage = "none";
  };

  /***these two methods allow us to select multiple files */

  const fileInputClicked = () => {
    fileInputRef.current.click();
  };

  const filesSelected = () => {
    if (fileInputRef.current.files.length) {
      handleFiles(fileInputRef.current.files);
    }
  };

  /**** */
  const uploadFiles = () => {
    uploadModalRef.current.style.display = "block";
    uploadRef.current.innerHTML = "File(s) Uploading...";
    for (let i = 0; i < validFiles.length; i++) {
      const formData = new FormData(); // This tool provides a way to easily construct key/value pairs to represent form fields and their values, which can then be easily sent.
      formData.append("image", validFiles[i]);
      formData.append("key", "f772c162924429d244bc8f5646ae9850"); // api key from https://api.imgbb.com/
      // POST request needed to upload files
      axios
        .post("https://api.imgbb.com/1/upload", formData, {
          onUploadProgress: (progressEvent) => {
            // console.log(progressEvent);
            const uploadPercentage = Math.floor(
              (progressEvent.loaded / progressEvent.total) * 100
            );
            progressRef.current.innerHTML = `${uploadPercentage}%`;
            progressRef.current.style.width = `${uploadPercentage}%`;
            if (uploadPercentage === 100) {
              uploadRef.current.innerHTML = "File(s) Uploaded";
              validFiles.length = 0;
              setValidFiles([...validFiles]);
              setSelectedFiles([...validFiles]);
              setUnsupportedFiles([...validFiles]);
            }
          },
        })
        .then((res) => console.log(res))
        .catch(() => {
          // If error, display a message on the upload modal
          uploadRef.current.innerHTML = `<span class="error">Error Uploading File(s)</span>`;
          // set progress bar background color to red
          progressRef.current.style.backgroundColor = "red";
        });
    }
  };

  const closeUploadModal = () => {
    uploadModalRef.current.style.display = "none";
  };

  //   console.log(validFiles);

  return (
    <>
      <div className="container">
        {unsupportedFiles.length === 0 && validFiles.length ? (
          <button className="file-upload-btn" onClick={() => uploadFiles()}>
            Upload Files
          </button>
        ) : (
          ""
        )}
        {unsupportedFiles.length ? (
          <p>Please remove all unsupported files.</p>
        ) : (
          ""
        )}
        <div
          className="drop-container"
          onDragOver={dragOver}
          onDragEnter={dragEnter}
          onDragLeave={dragLeave}
          onDrop={fileDrop}
          onClick={fileInputClicked}
        >
          <div className="drop-message">
            <div className="upload-icon"></div>
            Drag & Drop files here or click to upload
          </div>
          <input
            ref={fileInputRef}
            className="file-input"
            type="file"
            multiple
            onChange={filesSelected}
          />
        </div>
        <div className="file-display-container">
          {validFiles.map((data, i) => (
            <div className="file-status-bar" key={i}>
              <div
                onClick={
                  !data.invalid
                    ? () => openImageModal(data)
                    : () => removeFile(data.name)
                }
              >
                <div className="file-type-logo"></div>
                <div className="file-type">{fileType(data.name)}</div>
                <span
                  className={`file-name ${data.invalid ? "file-error" : ""}`}
                >
                  {data.name}
                </span>
                <span className="file-size">({fileSize(data.size)})</span>{" "}
                {data.invalid && (
                  <span className="file-error-message">({errorMessage})</span>
                )}
              </div>
              <div
                className="file-remove"
                onClick={() => removeFile(data.name)}
              >
                X
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="modal" ref={modalRef}>
        <div className="overlay"></div>
        <span className="close" onClick={() => closeModal()}>
          X
        </span>
        <div className="modal-image" ref={modalImageRef}></div>
      </div>
      <div className="upload-modal" ref={uploadModalRef}>
        <div className="overlay"></div>
        <div className="close" onClick={() => closeUploadModal()}>
          X
        </div>
        <div className="progress-container">
          <span ref={uploadRef}></span>
          <div className="progress">
            <div className="progress-bar" ref={progressRef}></div>
          </div>
        </div>
      </div>
    </>
  );
};
export default DropZone;
