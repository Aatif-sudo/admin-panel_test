import React, { useEffect, useRef } from "react";
import "./Navbar.scss";
import { Link } from "react-router-dom";

function Navbar() {
  const xyz = useRef();
  useEffect(() => {
    const hamburger = document.querySelector(".hamburger");
    console.log(hamburger);
    const navLinks = document.querySelector(".nav_links");
    const links = document.querySelectorAll(".nav_links li");
    hamburger.addEventListener("click", () => {
      navLinks.classList.toggle("open");
    });
  }, []);

  // console.log(xyz);

  return (
    <nav className="nav_container">
      <ul className="nav_links">
        <li>
          <Link className="link" to="#">
            Dashboard
          </Link>
        </li>
        <li>
          <Link className="link" to="#">
            User
          </Link>
        </li>
        <li>
          <Link className="link" to="#">
            Contacts
          </Link>
        </li>
      </ul>
      <div className="hamburger">
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
    </nav>
  );
}

export default Navbar;
