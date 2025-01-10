import React from "react";
import { useForm } from "react-hook-form";
import { footerContact, footerContactNum, navLinks } from "../constants";

// import { Link } from 'react-router-dom'
import {
  FaAngleRight,
  FaArrowRight,
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Footer = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    mode: "all",
  });

  return (
    <footer>
      <div className="col first-col">
        <p className="title">
          Bright Future English Medium
          <span style={{ color: "#14d22a" }}> School </span>
          <span style={{ color: "#14d22a" }}>& Jr. College</span>
        </p>
      </div>
      {/* <div className="col second-col">
        <h2>Links</h2>
        {navLinks.map((link) => (
          <ul key={link.id}>
            <li>
              <FaAngleRight /> {link.id}
            </li>
          </ul>
        ))}
      </div> */}
      <div className="col third-col">
        <h2>Contact us</h2>
        {footerContact.map((contact) => (
          <ul key={contact.id}>
            <li>{contact.text}</li>
          </ul>
        ))}
        <div className="contNum">
          {footerContactNum.map((msg) => (
            <ul key={msg.id}>
              <li>
                <div className="icon">{msg.icon}</div>
                {msg.text}
              </li>
            </ul>
          ))}
        </div>
      </div>
      <div className="col fourth-col">
        <p style={{ color: "red" }}>{errors.email?.message}</p>
        <div className="icons">
          <NavLink
            to="https://wa.me/9922723147" // Replace with the desired phone number, including country code (no spaces or '+' sign)
            style={{ color: "#fff" }}
          >
            <FaWhatsapp />
          </NavLink>

          <NavLink
            to="https://www.youtube.com/@brightfutureenglishmediums8726"
            style={{ color: "#fff" }}
          >
            <FaYoutube />
          </NavLink>
          <NavLink
            to="https://www.instagram.com/Bfems_75/"
            style={{ color: "#fff" }}
          >
            <FaInstagram />
          </NavLink>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
