import Stack from "@mui/material/Stack";
import Link from "@mui/material/Link";
import { useMediaQuery } from "@mui/material";
import "./NavLinks.css";

export default function NavLinks({ isDrawer = false }) {
  const isSmallScreen = useMediaQuery("(max-width:600px)");

  return (
    <Stack
      direction={isSmallScreen ? "column" : "row"}
      spacing={isSmallScreen ? 3 : { sm: 2, md: 4 }}
      className={isDrawer ? "links-drawer" : "links"}
    >
      <Link class={isDrawer ? "link-drawer" : "link"} href="/work" underline="none">
        {isDrawer ? "Work" : "WORK"}
      </Link>
      <Link class={isDrawer ? "link-drawer" : "link"} href="/about" underline="none">
        {isDrawer ? "About" : "ABOUT"}
      </Link>
      <Link class={isDrawer ? "link-drawer" : "link"} href="https://drive.google.com/file/d/18b9roccNMzs-1yWNJCMEHDjkmZakp_pQ/view?pli=1" target="_blank" underline="none">
        {isDrawer ? "Resume" : "RESUME"}
      </Link>
    </Stack>
  );
}
