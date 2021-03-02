import React, { useMemo, useState, useCallback } from "react";
import { useDropzone } from "react-dropzone";
import ReactCrop from "react-image-crop";
import Button from "@material-ui/core/Button";
import "react-image-crop/dist/ReactCrop.css";
import Card from "../../Components/AdvertisementCard/Card";
import "./Advertisement.scss";

//setting min date as today -- code grepper
let today = new Date();
let dd = today.getDate();
let mm = today.getMonth() + 1; //January is 0 so need to add 1 to make it 1!
let yyyy = today.getFullYear();

if (dd < 10) {
  dd = "0" + dd;
}
if (mm < 10) {
  mm = "0" + mm;
}

today = yyyy + "-" + mm + "-" + dd;
document.getElementById("datefield")?.setAttribute("min", today);

const initialData = {
  image: "",
  video: "",
  file: "",
  name: "",
  expiry_date: "",
  URL: "",
};

const baseStyle = {
  flex: 1,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "20px",
  borderWidth: 2,
  borderRadius: 2,
  borderColor: "#eeeeee",
  borderStyle: "dashed",
  backgroundColor: "#fafafa",
  color: "#bdbdbd",
  outline: "none",
  transition: "border .24s ease-in-out",
};

const activeStyle = {};

const acceptStyle = {
  borderColor: "#00e676",
};

const rejectStyle = {
  borderColor: "#ff1744",
};

function Advertisement() {
  const [src, selectFile] = useState(null);
  const [image, setImage] = useState(null);
  const [video, setVideo] = useState(null);
  const [crop, setCrop] = useState({
    aspect: 1 / 1,
  });
  const [result, setResult] = useState(null);
  const [advertisement, setAdvertisement] = useState(initialData);
  const [basicArray, setBasicArray] = useState([]);
  // const [startDate, setStartDate] = useState(new Date());

  //DropZOne
  const onDrop = useCallback((acceptedFiles) => {
    console.log(acceptedFiles[0].type, "image or video");
    if (acceptedFiles[0].type === "image/jpeg") {
      selectFile(URL.createObjectURL(acceptedFiles[0]));
    } else {
      console.log("file is not an image");
      setVideo(URL.createObjectURL(acceptedFiles[0]));
      setAdvertisement((prevState) => {
        return {
          ...prevState,
          video: URL.createObjectURL(acceptedFiles[0]),
        };
      });
    }
  }, []);
  console.log("i am a video", video);
  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isDragAccept,
    isDragReject,
    open,
  } = useDropzone({
    accept: "image/* , video/*",
    noClick: true,
    noKeyboard: true,
    onDrop,
  });

  const style = useMemo(
    () => ({
      ...baseStyle,
      ...(isDragActive ? activeStyle : { borderColor: "lightgreen" }),
      ...(isDragAccept ? acceptStyle : { borderColor: "lightblue" }),
      ...(isDragReject ? rejectStyle : {}),
    }),
    [isDragActive, isDragReject, isDragAccept]
  );

  //end-dropZOne

  //React-Cropper
  //function to get cropped Image
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
    selectFile(null);
    setAdvertisement((prevState) => {
      return {
        ...prevState,
        image: base64Image,
      };
    });
  }

  function handleChange(e) {
    // e.preventDefault();
    setAdvertisement((prevState) => {
      return {
        ...prevState,
        [e.target.name]: e.target.value,
      };
    });
  }
  console.log("data", advertisement);

  function handleSubmit() {
    console.log("Submit is kicked");
    setBasicArray([...basicArray, advertisement]);
    setAdvertisement(initialData);
    setImage(null);
    setVideo(null);
  }

  console.log("aatif", advertisement);
  console.log("basic array", basicArray);

  return (
    <>
      <div className="adevertisement_container">
        <div className="advertisement_input_container">
          <div {...getRootProps({ style })} className="dropzone_container">
            <input {...getInputProps({})} />
            <p>Drag 'n' drop some files here</p>
            <Button
              type="button"
              color="secondary"
              variant="contained"
              onClick={open}
            >
              Browse
            </Button>
          </div>
          <label htmlFor="name">Name</label>
          <input
            name="name"
            type="text"
            value={advertisement.name}
            onChange={(e) => handleChange(e)}
            placeholder="name"
          />
          <label htmlFor="expiry_date">Expiry</label>
          <input
            name="expiry_date"
            type="date"
            min={today}
            value={advertisement.expiry_date}
            onChange={(e) => handleChange(e)}
            placeholder="Expiry Date"
          />
          {/* <input type="datetime-local" id="datefield" min={today}></input> */}

          <label htmlFor="Link">Link</label>
          <input
            name="URL"
            type="URL"
            value={advertisement.URL}
            onChange={(e) => handleChange(e)}
            placeholder="paste URL if any"
          />
          <button className="btn btn-primary" onClick={handleSubmit}>
            Submit
          </button>
        </div>
        <div className="preview_container">
          {image && <img src={image} alt="" className="raw_image" />}
          {video && <video src={video} className="raw_video" controls />}
        </div>
        {src && (
          <div>
            <ReactCrop
              src={src}
              onImageLoaded={setImage}
              crop={crop}
              onChange={setCrop}
            />
            <button className="btn btn-danger" onClick={getCroppedImg}>
              Crop Image
            </button>
          </div>
        )}
        {result && (
          <div className="result_container">
            {advertisement.image && (
              <img src={advertisement.image} className="img-fluid" />
            )}
          </div>
        )}
      </div>
      <div className="card_container">
        {basicArray.map((adv, key) => {
          return (
            <Card
              key={key}
              image={adv.image}
              video={adv.video}
              name={adv.name}
              expiry_date={adv.expiry_date}
              URL={adv.URL}
            />
          );
        })}
      </div>
    </>
  );
}

export default Advertisement;
