import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Login.scss";
import sendRequest from "../../Routes/Post";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { Redirect } from "react-router-dom";

const initialStore = {
  strPassword: "1234",
  strEmail: "shubhamsharma6294@gmail.com",
  strFacebookDetails: "",
  strGoogleDetails: "",
  strIP: "",
  strOS: "",
  strBrowser: "",
  strDeviceDetails: "",
  strLatitude: "",
  strLongitude: "",
  blIsMobileType: "",
  blIsDesktopType: "",
  strLoginGUID: null,
};

function Login() {
  const emailre = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
  const mobilere = /^[0-9]{10}$/;

  const [userLog, setUserLog] = useState();
  const [userInput, setUserInput] = useState(initialStore);

  function handleChange(e) {
    setUserInput({ ...userInput, [e.target.name]: e.target.value });
    console.log(userInput, "is");
  }

  const getToken = () => {
    axios
      .get("http://192.168.1.23:9898/api/SignIn/GetToken")
      .then((response) => {
        console.log("hello", response.data.data);
        localStorage.setItem("token", JSON.stringify(response.data.data));
      });
  };

  useEffect(() => {
    getToken();
  });

  const user = JSON.parse(sessionStorage.getItem("user"));

  if (user) {
    return <Redirect from="/" to="/admin" />;
  }

  const userValidation = (re, fieldName, err) => {
    if (!re.test(fieldName)) {
      setUserInput((prevState) => {
        return {
          ...prevState,
          [err]: "Input is not valid",
        };
      });
      return false;
    } else {
      setUserInput((prevState) => {
        return {
          ...prevState,
          [err]: "",
        };
      });
      return true;
    }
  };

  function handleSubmit() {
    // if (
    //   userValidation(mobilere, userInput.MobileNo, "mobileNo") ||
    //   userValidation(emailre, userInput.Email, "email")
    // ) {
    sendRequest(userInput, "/SignIn/Login").then((value) => {
      const zxc = JSON.parse(value.data.Data).Table[0].ID;
      setUserLog(zxc);
      console.log(zxc, "zxc");
    });
    if (userLog === 1) {
      sessionStorage.setItem("user", JSON.stringify(userInput));
      toast.success("success");
      window.location.href = "/admin/dashboard";
      // return <Redirect to="/admin/dashboard" />;
    } else {
      toast.error("incorrect Email or Password");
    }
    //   if (value.data === "Login Successfully") {
    //     window.location.href = "/dashboard";
    //     sessionStorage.setItem("user", JSON.stringify(value));
    //   } else {
    //     toast.error("incorrect email or password");
    //   }
    // }
    // );
    // } else if (
    //   !userValidation(mobilere, userInput.MobileNO, "mobileNo") &&
    //   !userValidation(emailre, userInput.Email, "email")
    // ) {
    //   toast.error("Enter correct email or mobile no.");
    // }
  }
  return (
    <>
      <div className="login_container">
        <div className="input_container">
          <h2>Login</h2>
          <input
            className="input_box"
            type="text"
            name="strEmail"
            // name="MobileNo"
            // value={userInput.userName}
            onChange={(e) => handleChange(e)}
            placeholder="Email"
          />
          <input
            className="input_box"
            type="text"
            name="strPassword"
            // value={userInput.password}
            onChange={(e) => handleChange(e)}
            placeholder="password"
          />
          <button className="login_button" onClick={() => handleSubmit()}>
            Login
          </button>
          <Link className="input_container_link">Forget Password ?</Link>
          <Link to="/signup" className="input_container_link">
            Create New Account.
          </Link>
        </div>
        <ToastContainer />
      </div>
    </>
  );
}

export default Login;
