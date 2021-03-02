import React, { useState } from "react";
import Cropper from "react-easy-crop";
import Slider from "@material-ui/core/Slider";
import Button from "@material-ui/core/Button";
import "./AdminProfile.scss";
import { generateDownload } from "../../Utils/CropImage";

function AdminProfile() {
  const inputRef = React.useRef();

  const triggerFileSelectPopup = () => inputRef.current.click();

  const [image, setImage] = useState(null);
  const [croppedArea, setCroppedArea] = useState(null);
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);

  const onCropComplete = (croppedAreaPercentage, croppedAreaPixels) => {
    console.log(
      "Percentage",
      croppedAreaPercentage,
      "Pixels",
      croppedAreaPixels
    );
    setCroppedArea(croppedAreaPixels);
  };

  const onSelectFile = (event) => {
    if (event.target.files && event.target.files.length > 0) {
      const reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      reader.addEventListener("load", () => {
        console.log("kitty", reader.result);
        setImage(reader.result);
      });
    }
  };

  const onDownload = () => {
    generateDownload(image, croppedArea);
  };

  return (
    <div>
      <div className="container">
        <div className="container_cropper">
          {image ? (
            <>
              <div className="cropper">
                <Cropper
                  image={image}
                  crop={crop}
                  zoom={zoom}
                  aspect={1}
                  onCropChange={setCrop}
                  onZoomChange={setZoom}
                  onCropComplete={onCropComplete}
                />
              </div>
              <div className="slider">
                <Slider
                  min={1}
                  max={3}
                  step={0.01}
                  value={zoom}
                  onChange={(e, zoom) => setZoom(zoom)}
                />
              </div>
            </>
          ) : null}
        </div>
        <div className="container_button">
          <input
            type="file"
            accept="image/*"
            ref={inputRef}
            style={{ display: "none" }}
            onChange={onSelectFile}
          />

          <Button
            variant="contained"
            color="primary"
            onClick={triggerFileSelectPopup}
          >
            Choose
          </Button>
          <Button variant="contained" color="secondary" onClick={onDownload}>
            Download
          </Button>
        </div>
      </div>
    </div>
  );
}

export default AdminProfile;
