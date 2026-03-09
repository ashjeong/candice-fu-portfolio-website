import { Grid, Stack } from "@mui/material";

import MowLogo from "./assets/Mow_Logo.png";
import MowFont from "./assets/Mow_Font.png";
import MowGraphic from "./assets/Mow_Graphic.png";
import MowColorPalette from "./assets/Mow_Color_Palette.png";
import MowToneOfVoice from "./assets/Mow_Tone_of_Voice.png";
import MowMascot from "./assets/Mow_Mascot.png";
export default function Logo({ isSmallScreen }) {
  return (
    <Stack spacing={3}>
      <h5>Logo</h5>
      <p style={{ maxWidth: 800 }}>
        Mow’s logo was designed to communicate a luxury yet friendly feel. Both
        the “m” and “w” have flared vertical strokes in dynamic angled strokes,
        to further refined look and allude to the blades of grass. The rounded
        shape of the type and the lowercased letters keeps it friendly and
        approachable.
      </p>

      <img
        src={MowLogo}
        alt="Mow Logo"
        style={{
          borderRadius: "16px",
          width: "100%",
          height: "auto",
          display: "block",
        }}
      />

      <h5>Visual Identity</h5>
      <p style={{ maxWidth: 800 }}>
        The identity draws from nature and the idea of tending a personal
        garden. Green tones highlight eco-conscious values with a playful twist,
        while blue, orange, and yellow accents add vibrancy. Symmetrical
        patterns blend leaves and flowers with razors and blades, uniting
        grooming and garden imagery.
      </p>
      <Grid container spacing={4}>
        <Grid size={isSmallScreen ? 12 : 6}>
          <img
            src={MowFont}
            alt="Mow Font"
            style={{ width: "100%", borderRadius: "16px" }}
          />
        </Grid>
        <Grid size={isSmallScreen ? 12 : 6}>
          <img
            src={MowGraphic}
            alt="Mow Graphic"
            style={{ width: "100%", borderRadius: "16px" }}
          />
        </Grid>
        <Grid size={isSmallScreen ? 12 : 6}>
          <img
            src={MowColorPalette}
            alt="Mow Color Palette"
            style={{ width: "100%", borderRadius: "16px" }}
          />
        </Grid>
        <Grid size={isSmallScreen ? 12 : 6}>
          <img
            src={MowToneOfVoice}
            alt="Mow Tone of Voice"
            style={{ width: "100%", borderRadius: "16px" }}
          />
        </Grid>
        <Grid size={isSmallScreen ? 12 : 6}>
          <img
            src={MowMascot}
            alt="Mow Mascot"
            style={{ width: "100%", borderRadius: "16px" }}
          />
        </Grid>
      </Grid>
    </Stack>
  );
}
