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
      alignItems={isSmallScreen ? "flex-start" : "center"}
    >
      <Link
        component={RouterLink}
        class={isDrawer ? "link-drawer" : "link"}
        href="/candice-fu-portfolio-website/work"
        underline="none"
        sx={{ cursor: "pointer" }}
      >
        {isDrawer ? "Work" : "WORK"}
      </Link>
      <Link
        component={RouterLink}
        class={isDrawer ? "link-drawer" : "link"}
        href="/candice-fu-portfolio-website/about"
        underline="none"
        sx={{ cursor: "pointer" }}
      >
        {isDrawer ? "About" : "ABOUT"}
      </Link>
    </Stack>
  );
}
