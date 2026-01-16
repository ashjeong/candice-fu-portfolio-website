import { Link, Stack, useMediaQuery } from "@mui/material";
import "./NavLinks.css";


export default function NavLinks() {
  const isSmallScreen = useMediaQuery("(max-width:600px)");

  return (
    <Stack
      direction={isSmallScreen ? "column" : "row"}
      spacing={isSmallScreen ? 3 : { sm: 2, md: 4 }}
      className={"links"}
    >
      <Link class={"link"} href="/work" underline="none">
        {"WORK"}
      </Link>
      <Link class={"link"} href="/about" underline="none">
        {"ABOUT"}
      </Link>
      <Link class={"link"} href="https://drive.google.com/file/d/18b9roccNMzs-1yWNJCMEHDjkmZakp_pQ/view?pli=1" target="_blank" underline="none">
        {"RESUME"}
      </Link>
    </Stack>
  );
}
