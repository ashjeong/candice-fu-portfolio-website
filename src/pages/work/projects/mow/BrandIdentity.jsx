import { Grid, Stack, Box } from "@mui/material";
import MowInfographics from "./MowInfographics";
import Moodboard from "./assets/Moodboard.png";

export default function BrandIdentity({ isSmallScreen }) {
  return (
    <Stack spacing={2}>
      <h3>Research</h3>

      <h5>Why Razors?</h5>
      <p style={{ maxWidth: 1200 }}>
        Disposable razors generate landfill waste from plastics and metals, and
        few sustainable options deliver a truly premium experience. This gap
        creates an opportunity to redesign packaging and products that reduce
        waste while preserving luxury and usability.
      </p>

      <Box sx={{ py: 2 }}>
        <MowInfographics isSmallScreen={isSmallScreen} />
      </Box>

      <h3>Brand Identity</h3>
      <h5>Visual Direction</h5>
      <Grid container spacing={4}>
        <Grid size={isSmallScreen ? 12 : 6}>
          <p>
            In defining our visual direction, we studied shaving brands:
            Gillette and Schick skew masculine and tech-driven, Billie and
            Flamingo are colorful and lifestyle-focused, while Harry’s takes a
            minimalist, witty approach.
          </p>
        </Grid>
        <Grid size={isSmallScreen ? 12 : 6}>
          <p>
            From these insights, we shaped a gender-neutral, approachable, and
            playful identity—friendly and organic yet bold, with a subtle touch
            of humor that reflects eco-conscious values.
          </p>
        </Grid>
      </Grid>

      <img src={Moodboard} alt="Mow Brand Identity" />
    </Stack>
  );
}
