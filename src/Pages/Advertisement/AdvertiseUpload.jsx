import axios from "axios";
import "./AdvertiseUpload.scss";
import DatePicker from "react-datepicker";
import React, { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";

function AdvertiseUpload() {
  const [image, setImage] = useState({
    image: null,
  });
  // const [imageUrl, setImageUrl] = useState(null);
  // const [uploadPercent, setUploadPercent] = useState(0);
  const [startDate, setStartDate] = useState(new Date());
  const [upload, setUpload] = useState(false);
  const [advertisement, setAdvertisement] = useState({
    heading: "",
    subheading: "",
  });
  // function handleSelectedFile(e) {
  //   console.log(e.target.files[0], "file");
  //   const img = e.target.files[0];
  //   setImage(img);
  // }

  function handleUpload() {
    console.log("welcome");
    setUpload(true);

    //posting selected image in database
    // console.log(image.type, "image.value");
    // let allowedExtensions = /(\jpg|\jpeg|\png|\gif)$/i;

    // if (!allowedExtensions.exec(image.type)) {
    //   alert("Invalid input type");
    //   return false;
    // } else {
    //   // console.log(image[0], "image");
    //   let formData = new FormData();
    //   formData.append("image", image);
    //   const options = {
    //     onUploadProgress: (progressEvent) => {
    //       const { loaded, total } = progressEvent;
    //       let percent = Math.floor((loaded * 100) / total);
    //       console.log(`${loaded} kb of ${total}kb | ${percent}% `);

    //       if (percent < 100) {
    //         setUploadPercent(percent);
    //       }
    //     },
    //   };
    //   axios
    //     .post(
    //       "http://192.168.1.14/imageTest/upload_image.php",
    //       formData,
    //       options
    //     )
    //     .then((res) => {
    //       setImageUrl(res.data);
    //       console.log(res, "response");
    //       setUploadPercent({ image: res.data.url, uploadPercent: 100 });
    //       setTimeout(() => {
    //         setUploadPercent({ uploadPercent: 0 });
    //       });
    //     });
    // }
  }
  function handleChange(e) {
    setAdvertisement({ ...advertisement, [e.target.name]: e.target.value });
  }

  return (
    <div className="input_container">
      {/* <input
        className="file_input"
        type="file"
        onChange={(e) => handleSelectedFile(e)}
      /> */}
      <textarea
        type="text"
        className="file_input heading_input"
        placeholder="Heading"
        name="heading"
        value={advertisement.heading}
        onChange={(e) => handleChange(e)}
      />
      <textarea
        type="text"
        className="file_input"
        placeholder="Sub-Heading"
        name="subheading"
        value={advertisement.subheading}
        onChange={(e) => handleChange(e)}
      />
      <DatePicker
        className="calendar_input"
        selected={startDate}
        showTimeSelect
        onChange={(date) => setStartDate(date)}
        placeholderText="Enter Expiry Date"
        minDate={new Date()}
        dateFormat="d / MM / yyyy - h:mm "
      />
      <button className="file_upload" onClick={handleUpload}>
        Upload
      </button>
      <div className="advertisement_container">
        {/* {imageUrl?.url.map((uri) => (
          <img className="image_input" src={uri} />
        ))} */}
        {console.log(advertisement.heading, "advertisemet")}
      </div>

      {/* {upload ? (
        <AdvertisementCard
          image={
            "https://images.unsplash.com/photo-1519440862171-af26cf8c2a85?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFtYm98ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
          }
          heading={advertisement.heading}
          subheading={advertisement.subheading}
          expiryDate={startDate}
        />
      ) : (
        console.log("badDay")
      )} */}
    </div>
  );
}

export default AdvertiseUpload;
