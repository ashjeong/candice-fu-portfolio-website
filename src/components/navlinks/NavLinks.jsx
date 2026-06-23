import { Link as RouterLink } from "react-router-dom";
import { Link, Stack, useMediaQuery } from "@mui/material";
import "./NavLinks.css";

export default function NavLinks({ isDrawer = false, onNavigate }) {
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
        className={isDrawer ? "link-drawer" : "link"}
        to="/work"
        onClick={() => {
          onNavigate?.();
        }}
        underline="none"
        sx={(theme) => ({
          cursor: "pointer",
          color: theme.palette.primary.main,
          fontSize: isDrawer
            ? theme.typography.h3.fontSize
            : {
                xs: "max(14px, min(4vw, 18px))",
                sm: theme.typography.h6.fontSize,
              },
          fontWeight: isDrawer
            ? theme.typography.h3.fontWeight
            : theme.typography.h6.fontWeight,
        })}
      >
        {isDrawer ? "Work" : "WORK"}
      </Link>
      <Link
        component={RouterLink}
        className={isDrawer ? "link-drawer" : "link"}
        to="/about"
        onClick={() => {
          onNavigate?.();
        }}
        underline="none"
        sx={(theme) => ({
          cursor: "pointer",
          color: theme.palette.primary.main,
          fontSize: isDrawer
            ? theme.typography.h3.fontSize
            : {
                xs: "max(14px, min(4vw, 18px))",
                sm: theme.typography.h6.fontSize,
              },
          fontWeight: isDrawer
            ? theme.typography.h3.fontWeight
            : theme.typography.h6.fontWeight,
        })}
      >
        {isDrawer ? "About" : "ABOUT"}
      </Link>
    </Stack>
  );
}
