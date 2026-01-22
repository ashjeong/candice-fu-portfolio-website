import { CloseRounded, MenuRounded } from "@mui/icons-material";
import { Drawer, Link, useMediaQuery } from "@mui/material";
import { useState } from "react";
import "./Header.css";
import LogoIcon from "../common/Logo";
import NavLinks from "../navlinks/NavLinks";

export default function Header({ showHeader }) {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const isSmallScreen = useMediaQuery("(max-width:600px)");

  return (
    <div
      className="header"
      style={{
        transform: showHeader ? "translateY(0)" : "translateY(-120%)",
      }}
    >
      <Link href="/">
        <LogoIcon style={{ width: "4rem", height: "auto", fill: "#FF5115" }} />
      </Link>
      {isSmallScreen ? (
        <>
          <MenuRounded
            aria-label="open drawer"
            onClick={() => {
              setDrawerOpen(true);
            }}
            sx={{ color: "#212121", fontSize: "5rem", fontWeight: "normal" }}
          />
          <Drawer
            anchor="right"
            open={drawerOpen}
            PaperProps={{
              sx: {
                width: "100vw",
                height: "100vh",
                backgroundColor: "#FFF8EE",
              },
            }}
          >
            <CloseRounded
              onClick={() => {
                setDrawerOpen(false);
              }}
              aria-label="close drawer"
              className="close-drawer"
              sx={{
                fontSize: "5rem",
                position: "absolute",
                top: "1.5rem",
                right: "1.5rem",
                color: "#212121",
              }}
            />
            <NavLinks isDrawer={true} />
          </Drawer>
        </>
      ) : (
        <NavLinks />
      )}
    </div>
  );
}
