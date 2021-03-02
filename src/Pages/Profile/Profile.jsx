import React, { useState } from "react";
// import "./Profile.scss";
import ReactCrop from "react-image-crop";
import "react-image-crop/dist/ReactCrop.css";

const defaultSrc =
  "https://raw.githubusercontent.com/roadmanfong/react-cropper/master/example/img/child.jpg";

function Profile() {
  const [src, selectFile] = useState(null);
  const [image, setImage] = useState(null);
  const [crop, setCrop] = useState({
    aspect: 16 / 9,
  });
  const [result, setResult] = useState(null);
  const [name, setName] = useState("Jhon Titor");
  const [job, setJob] = useState(" Sr. FrontEnd Dev");
  const [about, setABout] = useState(
    "Front-end web development, also known as client-side development is the practice of producing HTML, CSS and JavaScript for a website or Web Application so that a user can see and interact with them directly."
  );
  function getCroppedImg() {
    const canvas = document.createElement("canvas");
    const scaleX = image.naturalWidth / image.width;
    const scaleY = image.naturalHeight / image.height;
    canvas.width = crop.width;
    canvas.height = crop.height;
    const ctx = canvas.getContext("2d");

    ctx.drawImage(
      image,
      crop.x * scaleX,
      crop.y * scaleY,
      crop.width * scaleX,
      crop.height * scaleY,
      0,
      0,
      crop.width,
      crop.height
    );

    // As Base64 string
    const base64Image = canvas.toDataURL("image/jpeg");
    setResult(base64Image);

    // canvas.toBlob((blob) => {
    //   setResult(blob);
    // });
  }

  function handleFileChange(e) {
    selectFile(URL.createObjectURL(e.target.files[0]));
  }
  return (
    <div className="profile_container">
      <div className="upper_container">
        <div className="image_container">
          <img src={image} alt="" className="profile_image" />
        </div>
        <input
          type="file"
          accept="image/*"
          onChange={(e) => handleFileChange(e)}
        />
        {src && (
          <div>
            <ReactCrop
              src={src}
              onImageLoaded={setImage}
              crop={crop}
              onChange={setCrop}
            />
            <button className="btn btn-danger" onClick={getCroppedImg}>
              {" "}
              Crop Image
            </button>
          </div>
        )}
      </div>
      <div className="lower_container">
        <h3>Name : {name}</h3>
        <h4>Job : {job}</h4>
        <p>
          <strong>About</strong> : {about}
        </p>
      </div>
      {result && (
        <div className="result">
          <img src={result} alt="Cropped Image" className="img-fluid" />
        </div>
      )}
    </div>
  );
}

export default Profile;
