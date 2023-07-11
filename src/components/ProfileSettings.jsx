import React from "react";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import LanguageIcon from "@mui/icons-material/Language";
// react icons
import { BsGlobe } from "react-icons/bs";
import { AiOutlineMenu } from "react-icons/ai";
import { FaRegUserCircle } from "react-icons/fa";
import { flexCenter } from "../themes/commonStyles";

const ProfileSettings = () => {
  return (
    <Box sx={flexCenter}>
      <Link href="#" style={{  fontSize: '0.9rem',  fontWeight: 600 }}> Airbnb your home</Link>
      <Stack>
        <Button>
          <LanguageIcon sx={{ fontSize: "1.8rem" }} />
        </Button>
        <Button
          style={{
            borderRadius: "2rem",
            gap: "0.5rem",
            padding: "0.5rem",
            border: "1px solid #ddd",
          }}
        >
          <AiOutlineMenu size={24} />
          <FaRegUserCircle size={24} />
        </Button>
      </Stack>
    </Box>
  );
};

export default ProfileSettings;
