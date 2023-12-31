import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { IoLogoTwitter } from "react-icons/io";
import "./Footer.css";

export default function Footer() {
  return (
    <footer>
      <a href="#" className="footer__logo">
        {" "}
        Tasbiha Naeem
      </a>
      <ul className="permalinks">
        <li>
          {" "}
          <a href="#">Home</a>
        </li>
        <li>
          {" "}
          <a href="#about">About</a>
        </li>
        <li>
          {" "}
          <a href="#services">Services</a>
        </li>
        <li>
          {" "}
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.facebook.com" target="_blank">
          <FaFacebookF />
        </a>
        <a href="https://www.instagram.com" target="_blank">
          <FiInstagram />
        </a>
        <a href="https://twitter.com" target="_blank">
          <IoLogoTwitter />
        </a>
      </div>

      <div className="footer__copyright">
        <small>&copy;Tasbiha Naeem. All rights reserved</small>
      </div>
    </footer>
  );
}
