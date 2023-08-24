import React from "react";
import { Box } from "@mui/material";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <Box
      style={{
        display: "flex",
        width: "100%",
        border: "1px solid black",
        margin: "3px",
      }}
    >
      <img
        src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png"
        alt="App Logo"
        style={{ width: "140px" }}
      />
      <ul
        style={{
          display: "flex",
          justifyContent: "flex-end",
          width: "100%",
          padding: "24px",
          listStyle: "none",
        }}
      >
        <li style={{ marginRight: "10px", cursor: "pointer" }}>
          <Link to="/" style={{ textDecoration: "none", color: "brown" }}>
            Home
          </Link>
        </li>
        <li style={{ marginRight: "10px", cursor: "pointer" }}>
          <Link to="/about" style={{ textDecoration: "none", color: "brown" }}>
            About Us
          </Link>
        </li>
        <li style={{ marginRight: "10px", cursor: "pointer" }}>
          <Link
            to="/contact"
            style={{ textDecoration: "none", color: "brown" }}
          >
            Contact Us
          </Link>
        </li>
        <li style={{ marginRight: "10px", cursor: "pointer" }}>
          <Link to="/cart" style={{ textDecoration: "none", color: "brown" }}>
            Cart
          </Link>
        </li>
      </ul>
    </Box>
  );
}

export default NavBar;
