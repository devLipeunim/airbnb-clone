import React from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import { FaSearch } from "react-icons/fa";
import { VscSettings } from "react-icons/vsc";
import Link from "@mui/material/Link";

const searchLinks = [
  { id: 1, text: "Anywhere", url: "#" },
  { id: 2, text: "Any week", url: "#" },
  { id: 3, text: ". Add guest", url: "#" },
];
const MobileSearch = () => {
  return (
    <Paper
      component="form"
      sx={{
        p: "2px 4px",
        display: "flex",
        alignItems: "center",
        border: "1px solid #ccc",
        borderRadius: 20,
      }}
    >
      <IconButton sx={{ p: "10px" }}>
        <FaSearch />
      </IconButton>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        <Link style={{ fontSize: "13px" }}>
          <b>Any where</b>
        </Link>
        <Link style={{ fontSize: "13px" }}>Any week</Link>
        <Link style={{ fontSize: "13px" }}>Any guest</Link>
      </div>
      <IconButton type="submit" sx={{ p: "10px" }}>
        <VscSettings />
      </IconButton>
    </Paper>
  );
};

export default MobileSearch;
