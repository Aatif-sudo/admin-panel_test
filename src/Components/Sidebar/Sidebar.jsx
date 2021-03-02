import React, { useState } from "react";
import "./Sidebar.scss";
import { Link } from "react-router-dom";
import Login from "../../Pages/Login/Login";
import { GoDashboard, GoSignIn } from "react-icons/go";
import { AiOutlineLogout } from "react-icons/ai";
import { RiAdvertisementFill } from "react-icons/ri";
import { FaUserAlt, FaAngleDoubleRight } from "react-icons/fa";

function Sidebar({ isHovered, setIsHovered }) {
  function handleLogout() {
    sessionStorage.clear();
    window.location.href = "/";
  }
  function handleHover() {
    setIsHovered(!isHovered);
  }

  console.log("hover____--->", isHovered);
  return (
    <>
      {/* //
      <div className="sidebar_container">
        //{" "}
        <div className="logo_container">
          // <h1 className="logo">EvnOrg</h1>
          //{" "}
      </div> */}
      <nav
        onMouseEnter={() => handleHover()}
        onMouseLeave={() => handleHover()}
        className="sidebar"
      >
        <ul className="sidebar_link_container">
          <li className="logo">
            <Link className="sidebar_links" exact to="/dashboard">
              {/* <FaAngleDoubleRight className="svg" /> */}
              <span className="link_text">Evnorg</span>
            </Link>
          </li>
          <li className="sidebar_item">
            <Link className="sidebar_links" to="/">
              <AiOutlineLogout className="svg" />
              <span onClick={() => handleLogout()} className="link_text">
                LogOut
              </span>
            </Link>
          </li>
          <li className="sidebar_item">
            <Link className="sidebar_links" to="/admin/dashboard">
              <GoDashboard className="svg" />
              <span className="link_text">Dashboard</span>
            </Link>
          </li>
          <li className="sidebar_item">
            <Link className="sidebar_links" to="/signup">
              <GoSignIn className="svg" />
              <span className="link_text">SignIn</span>
            </Link>
          </li>
          <li className="sidebar_item">
            <Link className="sidebar_links" to="/advertise">
              <RiAdvertisementFill className="svg" />
              <span className="link_text">Advertise</span>
            </Link>
          </li>
          <li className="sidebar_item">
            <Link className="sidebar_links" to="/table">
              <FaUserAlt className="svg" />
              <span className="link_text">Student's Data</span>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Sidebar;
