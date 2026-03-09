import { Chip, Stack } from "@mui/material";
import intro_image from "./assets/intro_image.png";

export default function Intro({ isSmallScreen }) {
  return (
    <>
      <Stack
        direction={isSmallScreen ? "column" : "row"}
        spacing={isSmallScreen ? 4 : 15}
        alignItems={isSmallScreen ? "flex-start" : "center"}
      >
        <Stack spacing={2} sx={{ maxWidth: 500 }}>
          <Stack direction="row" spacing={1} sx={{ marginBottom: "1rem" }}>
            <Chip variant="outlined" label="Illustration" />
            <Chip variant="outlined" label="Brand Design" />
            <Chip variant="outlined" label="Product Design" />
          </Stack>
          <h2>Le Petit Patisserie</h2>
          <h5 style={{ maxWidth: isSmallScreen ? 800 : 400 }}>
            A whimsical brand identity bringing French pastries into a storybook
            world
          </h5>
        </Stack>
        <div>
          <img
            src={intro_image}
            alt="Intro Image"
            style={{ width: "100%", borderRadius: "10px" }}
          />
        </div>
      </Stack>
    </>
  );
}
