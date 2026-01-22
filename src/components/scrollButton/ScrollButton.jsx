import "./ScrollButton.css";
import { IconButton } from "@mui/material";
import ScrollButtonIcon from "./ScrollButtonIcon";
import CircleIcon from "@mui/icons-material/Circle";

export default function ScrollButton() {
  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <IconButton
      color="primary"
      aria-label="scroll-button"
      onClick={scrollToTop}
    >
      <CircleIcon className="background-button" sx={{ fontSize: 80 }} />
      <ScrollButtonIcon className="fixed-button" sx={{ fontSize: 80 }} />
    </IconButton>
  );
}
