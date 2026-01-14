import { useState } from "react";
import { useMediaQuery } from "@mui/material";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import Drawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import logo from "../assets/logo.svg";
import NavLinks from "./NavLinks";
import "./Header.css";

export default function Header() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const isSmallScreen = useMediaQuery("(max-width:600px)");

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const handleDrawerClose = () => {
    setDrawerOpen(false);
  };

  return (
    <div className="header">
      <a href="/">
        <img src={logo} className="logo" />
      </a>
      {isSmallScreen ? (
        <>
          <MenuRoundedIcon
            aria-label="open drawer"
            edge="end"
            onClick={handleDrawerToggle}
            sx={{ color: "#212121", fontSize: "5rem", fontWeight: "normal" }}
          />
          <Drawer
            anchor="right"
            open={drawerOpen}
            onClose={handleDrawerClose}
            PaperProps={{ sx: { width: "100vw", backgroundColor: "#FFF8EE"} }}
          >
            <Box
              sx={{ width: "100vw", height: "100vh" }}
              onKeyDown={handleDrawerClose}
            >
              <CloseRoundedIcon
                onClick={handleDrawerClose}
                aria-label="close drawer"
                sx={{
                  position: "absolute",
                  top: "1.5rem",
                  right: "1.5rem",
                  fontSize: "5rem",
                  color: "#212121",
                }}
              />
              <NavLinks isVertical={true} isDrawer={true}/>
            </Box>
          </Drawer>
        </>
      ) : (
        <NavLinks isVertical={false} />
      )}
    </div>
  );
}
