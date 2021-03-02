import React, { useState, useEffect } from "react";
import "./Signup.scss";
import Request from "../../Routes/Get";
import sendRequest from "../../Routes/Post";
// import DatePicker from "react-datepicker";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

const initialSignupData = {
  // FirstName: "",
  // LastName: "",
  // Email: "",
  // Password: "",
  // DateofBirth: "",
  // MobileNo: "",
  // WhatsAppNo: "",
  // Qualification: "",
  // iCountryId: "",
  // iStateId: "",
  // City: "",
  // PinCode: "",
  iUserRegistrationID: null,
  strFirstName: "Shubham",
  strLastName: "Sharma",
  strPassword: "1234",
  strEmail: "shubhamsharma6294@gmail.com",
  strDOB: "060294",
  strProfileImage: null,
  strMobileNo: "7974092293",
  strWhatsappNo: null,
  strFacebookDetails: "",
  strGoogleDetails: "",
  blIsRegistered: 1,
  iPinCode: 491001,
  iCityID: 1,
  iStateID: 1,
  iCountryID: 38,
  iQualificationID: 1,
  strIP: "1230",
  strOS: "IOS",
  strBrowser: "CHROME",
  strDeviceDetails: "",
  strLatitude: "",
  strLongitude: "",
  blIsMobileType: false,
  blIsDesktopType: true,
  strOtherDetails: "",
};

const post = {
  iCountryID: null,
  iStateID: 0,
};

function Signup() {
  const [userSignIn, setUserSignIn] = useState(initialSignupData);
  // const [valid, setValid] = useState(false);
  const [country, setCountry] = useState([]);
  const [state, setState] = useState([]);
  const [city, setCity] = useState([]);
  const [qualification, setQualification] = useState([]);
  const [postData, setPostData] = useState(post);
  const [user, setUser] = useState();

  const namere = /^[a-zA-Z]{2,9}$/;
  const emailre = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
  const mobilere = /^[0-9]{10}$/;

  let token = JSON.parse(localStorage.getItem("token"));

  // useEffect(() => {
  //   Request("/SignIn/RegistrationFillvalues").then((resp) => {
  //     console.log("sinha", resp);
  //     let Country = JSON.parse(resp.data.CountryData);
  //     let Qualification = JSON.parse(resp.data.QualificationData);
  //     Country ? setCountry(Country) : console.log("babu");
  //     setQualification(Qualification);
  //   });
  // }, []);
  // console.log("Country", country);

  //dont uncomment
  // useEffect(() => {
  //   sendRequest(postData, "/Common/GetStateCityByID").then((resp) => {
  //     console.log("Dayta", resp);
  //     let State = JSON.parse(resp.data.Data).Table;
  //     setState(State);
  //     console.log("aatif-1", State);
  //   });
  // }, [userSignIn.iCountryId]);

  function handleChange(e) {
    e.preventDefault();
    setUserSignIn((prevState) => {
      return {
        ...prevState,
        [e.target.name]: e.target.value,
      };
    });
  }

  // setPostData((prevData) => {
  //   return {
  //     ...prevData,
  //     iCountryId: e.target.value,
  //     iStateId: e.target.value,
  //   };
  // }
  function handleSelect(e) {
    try {
      console.log("hello", e.target.value);
      // setPostData({ ...postData, [e.target.name]: e.target.value });
      handleChange(e);
      let xyz = { ...postData };
      xyz[e.target.name] = e.target.value;
      sendRequest(xyz, "/Common/GetStateCityByID").then((resp) => {
        console.log("Dayta", resp);
        // let State = JSON.parse(resp.data.Data).Table;
        let tempResponse = JSON.parse(resp.data.Data).Table;
        // console.log("object", Object.keys(tempResponse[0])[0]);
        console.log(tempResponse);

        if (Object.keys(tempResponse[0])[0] === "State ID") {
          setState(tempResponse);
        } else {
          setCity(tempResponse);
        }
      });
    } catch {}
  }
  console.log("is", postData);
  console.log("--------", userSignIn);
  // console.log("-----------", user);

  // console.log("aatif", state);

  const userValidation = (re, fieldName, err) => {
    if (!re.test(fieldName)) {
      setUserSignIn((prevState) => {
        return {
          ...prevState,
          [err]: "Input is not valid",
        };
      });
      return false;
    } else {
      setUserSignIn((prevState) => {
        return {
          ...prevState,
          [err]: "",
        };
      });
      return true;
    }
  };

  function handleSubmit(e) {
    e.preventDefault();
    console.log("Submit is clicked");
    if (
      userValidation(namere, userSignIn.strFirstName, "name") &&
      userValidation(mobilere, userSignIn.strMobileNo, "mobileNo") &&
      userValidation(emailre, userSignIn.strEmail, "email")
    ) {
      console.log("valid", userSignIn);
      sendRequest(userSignIn, "/SignIn/SignUp").then((response) => {
        let zxc = JSON.parse(response.data.Data).Table[0].ID;
        setUser(zxc);
      });
      sessionStorage.setItem(
        "user",
        JSON.stringify(
          userSignIn.strFirstName,
          userSignIn.strMobileNo,
          userSignIn.strEmail
        )
      );
      if (user === 1) {
        toast.success("Success");
        setTimeout((window.location.href = "/dashboard"), 3000);
      } else {
        toast("Already Registered 🦄");
      }
    } else if (!userValidation(namere, userSignIn.strFirstName, "name")) {
      console.log("invalid  inputs");
      toast.error("Enter correct name!");
    } else if (!userValidation(emailre, userSignIn.strEmail, "email")) {
      toast.error("Enter correct email");
    } else if (!userValidation(mobilere, userSignIn.strMobileNo, "mobileNo")) {
      toast.error("Enter correct mobile no.");
    } else {
      toast("lucky user");
    }
  }
  return (
    <>
      <div className="wrapper">
        <div className="signup_page_container">
          <div className="title">Registration</div>
          <form onSubmit={handleSubmit}>
            <div className="user_details">
              <div className="input_field">
                <span className="details">First Name</span>
                <input
                  type="text"
                  name="strFirstName"
                  placeholder="Enter FirstName"
                  onChange={(e) => handleChange(e, "FirstName")}
                  required
                />
              </div>
              <div className="input_field">
                <span className="details">Last Name</span>
                <input
                  type="text"
                  name="strLastName"
                  placeholder="Enter LastName"
                  onChange={(e) => handleChange(e)}
                />
              </div>
              <div className="input_field">
                <span className="details">Email</span>
                <input
                  type="email"
                  name="strEmail"
                  placeholder="Enter Email"
                  onChange={(e) => handleChange(e)}
                  required
                />
              </div>
              <div className="input_field">
                <span className="details">Password</span>
                <input
                  type="password"
                  name="strPassword"
                  placeholder="Enter Password"
                  onChange={(e) => handleChange(e)}
                  required
                />
              </div>
              <div className="input_field">
                <span className="details">Date of Birth</span>
                <input
                  type="date"
                  name="strDOB"
                  placeholder="Enter Date of Birth"
                  onChange={(e) => handleChange(e)}
                />
              </div>
              <div className="input_field">
                <span className="details">Mobile No</span>
                <input
                  type="number"
                  name="strMobileNo"
                  placeholder="Enter Mobile No"
                  onChange={(e) => handleChange(e)}
                  required
                />
              </div>
              <div className="input_field">
                <span className="details">WhatsAppNo</span>
                <input
                  type="text"
                  name="strWhatsAppNo"
                  placeholder="Enter WhatsAppNo"
                  onChange={(e) => handleChange(e)}
                />
              </div>
              <div className="input_field">
                <span className="details">Qualification</span>
                <select
                  className="input_field"
                  name="iQualificationID"
                  onChange={(e) => handleChange(e)}
                  required
                >
                  <option>Select Qualification</option>
                  {qualification.map((val) => (
                    <option value={val["Qualification ID"]}>
                      {val["Qualification Name"]}
                    </option>
                  ))}
                </select>
              </div>
              <div className="input_field">
                <span className="details">Country</span>
                <select
                  className="input_field"
                  name="iCountryID"
                  onChange={(e) => handleSelect(e)}
                  required
                >
                  <option>Select Country</option>
                  {country?.map((val) => (
                    <option value={val["Country ID"]}>
                      {val["Country Name"]}
                    </option>
                  ))}
                </select>
              </div>
              <div className="input_field">
                <span className="details">State</span>
                <select
                  className="input_field"
                  name="iStateID"
                  onChange={(e) => handleSelect(e)}
                  required
                >
                  <option>Select State</option>
                  {state?.map((val) => (
                    <option value={val["State ID"]}>{val["State Name"]}</option>
                  ))}
                </select>
              </div>
              <div className="input_field">
                <span className="details">City</span>
                <select
                  className="input_field"
                  name="iCityID"
                  onChange={(e) => handleChange(e)}
                  required
                >
                  <option>Select City</option>
                  {city?.map((val) => (
                    <option value={val["City ID"]}>{val["City Name"]}</option>
                  ))}
                </select>
              </div>
              <div className="input_field">
                <span className="details">Pin Code</span>
                <input
                  name="iPinCode"
                  type="text"
                  placeholder=" Enter PinCode"
                  onChange={(e) => handleChange(e)}
                  required
                />
              </div>
            </div>
            <div className="button">
              <input type="submit" value="Register" />
            </div>
            <ToastContainer />
          </form>
        </div>
      </div>
    </>
  );
}

export default Signup;
