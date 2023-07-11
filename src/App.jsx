import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Header from "./components/Header";
import OptionsTab from "./components/OptionsTab";
import Container from "@mui/material/Container";
import {LocationCards, LocationCards3, LocationCards4} from "./components/LocationCards";
import {LocationCards1} from "./components/LocationCards";
import {LocationCards2} from "./components/LocationCards";
import React from "react";
import "./App.css";
import Footer from "./components/Footer";
import FooterMenu from "./components/FooterMenu";
import { displayOnDesktop } from "./themes/commonStyles";
import MobileFooter from "./components/MobileFooter";
import Tasks from "./components/Tasks";
import { useState } from "react";


function App() {
  const [selectedFilter, setSelectedFilter] = useState(0);
  return (
    <React.Fragment>
      <CssBaseline />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          height: "100vh",
        }}
      >
        <Box>
          <Header />
          <OptionsTab
            selectedFilter={selectedFilter}
            setSelectedFilter={setSelectedFilter}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            flexGrow: 1,
            height: 100,
            overflowY: "scroll",
          }}
        >
          <Container maxWidth="xl" sx={{ mb: 3 }}>
            {/* <Tasks /> */}
            {selectedFilter === 0 && <LocationCards />}
            {selectedFilter === 1 && <LocationCards1 />}
            {selectedFilter === 2 && <LocationCards2 />}
            {selectedFilter === 3 && <LocationCards3 />}
            {selectedFilter === 4 && <LocationCards4 />}
            
            <Box
              sx={{
                display: { xs: "flex", md: "none" },
              }}
            >
              <MobileFooter />
            </Box>
          </Container>
        </Box>
        <Box sx={{ display: { xs: "flex", md: "none" } }}>
          <FooterMenu />
        </Box>
        <Box sx={displayOnDesktop}>
          <Footer />
        </Box>
      </Box>
    </React.Fragment>
  );
}

export default App;
