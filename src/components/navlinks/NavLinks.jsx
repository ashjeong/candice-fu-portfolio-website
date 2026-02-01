import { Link as RouterLink } from "react-router-dom";
import { Link, Stack, useMediaQuery } from "@mui/material";
import "./NavLinks.css";

export default function NavLinks({ isDrawer = false }) {
  const isSmallScreen = useMediaQuery("(max-width:600px)");

  return (
    <Stack
      direction={isSmallScreen ? "column" : "row"}
      spacing={isSmallScreen ? 3 : { sm: 2, md: 4 }}
      className={isDrawer ? "links-drawer" : "links"}
    >
      <Link
        component={RouterLink}
        class={isDrawer ? "link-drawer" : "link"}
        to="/work"
        underline="none"
        sx={{ cursor: "pointer" }}
      >
        {isDrawer ? "Work" : "WORK"}
      </Link>
      <Link
        component={RouterLink}
        class={isDrawer ? "link-drawer" : "link"}
        to="/about"
        underline="none"
        sx={{ cursor: "pointer" }}
      >
        {isDrawer ? "About" : "ABOUT"}
      </Link>
      <Link
        component={RouterLink}
        class={isDrawer ? "link-drawer" : "link"}
        to="https://drive.google.com/file/d/18b9roccNMzs-1yWNJCMEHDjkmZakp_pQ/view?pli=1"
        target="_blank"
        underline="none"
        sx={{ cursor: "pointer" }}
      >
        {isDrawer ? "Resume" : "RESUME"}
      </Link>
    </Stack>
  );
}
