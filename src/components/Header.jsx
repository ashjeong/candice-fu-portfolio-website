import logo from "../assets/logo.svg";
import Stack from "@mui/material/Stack";
import Link from "@mui/material/Link";
import "./Header.css";

export default function Header() {
  return (
    <div className="header">
      <a href="/">
        <img src={logo} className="logo" />
      </a>
      <Stack
        direction="row"
        spacing={{ xs: 1, sm: 2, md: 4 }}
        className="header-links"
      >
        <Link class="header-link" href="/work" underline="none">
          {"WORK"}
        </Link>
        <Link class="header-link" href="/about" underline="none">
          {"ABOUT"}
        </Link>
        <Link class="header-link" href="https://drive.google.com/file/d/18b9roccNMzs-1yWNJCMEHDjkmZakp_pQ/view?pli=1" target="_blank" underline="none">
          {"RESUME"}
        </Link>
      </Stack>
    </div>
  );
}
