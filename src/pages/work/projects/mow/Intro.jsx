import Lottie from "lottie-react";
import mowHero from "./assets/Mow_Hero_HP.json";
import { Stack, Chip } from "@mui/material";

export default function Intro({ isSmallScreen }) {
  return (
    <Stack
      spacing={isSmallScreen ? 3 : 15}
      direction={isSmallScreen ? "column" : "row"}
    >
      <Stack spacing={3}>
        <Stack direction="row" spacing={1} sx={{ marginBottom: "1rem" }}>
          <Chip variant="outlined" label="Packaging" />
          <Chip variant="outlined" label="Brand Design" />
          <Chip variant="outlined" label="Illustration" />
        </Stack>
        <h2>mow</h2>
        <h5 style={{ maxWidth: isSmallScreen ? 800 : 400 }}>
          A sustainable shaving kit, offering a luxury shaving experience.
        </h5>
      </Stack>

      <Lottie animationData={mowHero} loop autoplay style={{ width: "100%" }} />
    </Stack>
  );
}
