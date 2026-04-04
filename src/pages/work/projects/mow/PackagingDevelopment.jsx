import { Grid, Stack } from "@mui/material";
import Lottie from "lottie-react";
import boxMockup from "./assets/Mow_Box_Mockup.json";
import MowBoxMockup from "./assets/Mow_Box_Mockup.png";
import MowInside from "./assets/Mow_Inside.jpg";
import MowBoxWithSleeve from "./assets/Mow_Box_with_Sleeve.jpg";
import MowBoxSlideOut from "./assets/Mow_Box_Slide_Out.png";

export default function PackagingDevelopment({ isSmallScreen }) {
  return (
    <Stack spacing={3}>
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
          src={MowBoxMockup}
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
              src={MowInside}
              alt="Mow Inside"
              style={{ width: "100%", borderRadius: "16px" }}
            />
          </Grid>
          <Grid size={isSmallScreen ? 12 : 5.05}>
            <img
              src={MowBoxWithSleeve}
              alt="Mow Box with Sleeve"
              style={{ width: "100%", borderRadius: "16px" }}
            />
          </Grid>
          <Grid size={isSmallScreen ? 12 : 6.95}>
            <img
              src={MowBoxSlideOut}
              alt="Mow Box Slide Out"
              style={{ width: "100%", borderRadius: "16px" }}
            />
          </Grid>
        </Grid>
      </div>
    </Stack>
  );
}
