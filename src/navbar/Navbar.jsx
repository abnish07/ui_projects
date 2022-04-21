import React from "react";
import "../stylesheet/navbar.scss";
import { Redirect, BrowserRouter, Route, Routes } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
  return (
    <div className="head_menu">
      <div className="head_inner">
        <img className="logo_img" src="./logo.svg" />
        <ul className="top_menu">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/app">App</a>
          </li>
          <li>
            <a href="/blog">Blog</a>
          </li>
          <li>
            <a href="/help">Help</a>
          </li>
        </ul>
        <ul className="sign_in">
          {" "}
          <li>
          <a href="/login">
            <FontAwesomeIcon icon={faUser} /> Sign In
          </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
