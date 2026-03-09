import { Grid, Stack } from "@mui/material";
import Lottie from "lottie-react";
import boxMockup from "./assets/Mow_Box_Mockup.json";

export default function PackagingDevelopment() {
  return (
    <Stack spacing={2}>
      <h3>Packaging Development</h3>

      <h5>Unboxing Experience</h5>
      <p style={{ maxWidth: 800 }}>
        We crafted a packaging experience that transforms unboxing into a
        whimsical journey. The final design features a telescopic structure with
        a die-cut window at the center. As the customer slides the inner box
        out, a playful scene is revealed, creating a memorable and engaging
        unboxing moment.
      </p>

      <div
        style={{
          margin: "2rem auto 1rem auto",
          borderRadius: 16,
          padding: 16,
        }}
      >
        <Lottie
          animationData={boxMockup}
          loop
          autoplay
          style={{ width: "100%" }}
        />
      </div>

      <div>
        <img
          src="src/pages/work/projects/mow/assets/Mow_Box_Mockup.png"
          alt="Mow Box Mockup"
          style={{ width: "100%", borderRadius: "16px" }}
        />
      </div>

      <h3>Outcome</h3>
      <h5>Packaging</h5>

      <p style={{ maxWidth: 800 }}>
        We wanted to stand out on the shelf by moving away from current trends
        and creating something uniquely quirky, appealing, and timeless. By
        incorporating our two mascots and floral-inspired patterns, the
        packaging blends the worlds of grooming and gardening. Inside, the
        design remains simple and intuitive for the customer, with a playful
        hidden surprise tucked beneath the center of the box.
      </p>
      <div style={{ margin: "2rem auto" }}>
        <Grid container spacing={3}>
          <Grid size={12}>
            <img
              src="src/pages/work/projects/mow/assets/Mow_Inside.jpg"
              alt="Mow Inside"
              style={{ width: "100%", borderRadius: "16px" }}
            />
          </Grid>
          <Grid size={5.05}>
            <img
              src="src/pages/work/projects/mow/assets/Mow_Box_with_Sleeve.jpg"
              alt="Mow Box with Sleeve"
              style={{ width: "100%", borderRadius: "16px" }}
            />
          </Grid>
          <Grid size={6.95}>
            <img
              src="src/pages/work/projects/mow/assets/Mow_Box_Slide_Out.png"
              alt="Mow Box Slide Out"
              style={{ width: "100%", borderRadius: "16px" }}
            />
          </Grid>
        </Grid>
      </div>
    </Stack>
  );
}
