import React from "react";
import Box from "@mui/material/Box";
import { flexCenter } from "../themes/commonStyles";
import logo from "../../src/logo/airbnb.svg";
import "./styles.css";

const Logo = () => {
  return (
    <Box sx={flexCenter}>
      <img src={logo} alt="logo"  className="navbar-logo" />
    </Box>
  );
};

export default Logo;
