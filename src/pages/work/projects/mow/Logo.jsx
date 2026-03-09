import { Grid, Stack } from "@mui/material";

export default function Logo() {
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
        src="src/pages/work/projects/mow/assets/Mow_Logo.png"
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
        <Grid size={6}>
          <img
            src="src/pages/work/projects/mow/assets/Mow_Font.png"
            alt="Mow Font"
            style={{ width: "100%", borderRadius: "16px" }}
          />
        </Grid>
        <Grid size={6}>
          <img
            src="src/pages/work/projects/mow/assets/Mow_Graphic.png"
            alt="Mow Graphic"
            style={{ width: "100%", borderRadius: "16px" }}
          />
        </Grid>
        <Grid size={12}>
          <img
            src="src/pages/work/projects/mow/assets/Mow_Color_Palette.png"
            alt="Mow Color Palette"
            style={{ width: "100%", borderRadius: "16px" }}
          />
        </Grid>
        <Grid size={6}>
          <img
            src="src/pages/work/projects/mow/assets/Mow_Tone_of_Voice.png"
            alt="Mow Tone of Voice"
            style={{ width: "100%", borderRadius: "16px" }}
          />
        </Grid>
        <Grid size={6}>
          <img
            src="src/pages/work/projects/mow/assets/Mow_Mascot.png"
            alt="Mow Mascot"
            style={{ width: "100%", borderRadius: "16px" }}
          />
        </Grid>
      </Grid>
    </Stack>
  );
}
