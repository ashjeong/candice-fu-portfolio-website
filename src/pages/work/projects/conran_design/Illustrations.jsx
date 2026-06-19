import { Stack, Grid, Chip, useMediaQuery, Box } from "@mui/material";
import Lottie from "lottie-react";

import CDG_Illustration_Showcase_1 from "./assets/CDG_Illustration_Showcase_1.json";
import CDGWaterBottle from "../conran_design/assets/CDG_Merch_Water_Bottle.png";
import CDGShirt from "../conran_design/assets/CDG_Flat_TShirt.png";
import CDG_Social from "../conran_design/assets/CDG_Social.webp";
import CDG_Tote_1 from "../conran_design/assets/CDG_Tote_1.png";

export default function Illustrations({ isSmallScreen }) {
  return (
    <>
      <Stack spacing={2}>
        <h3>Illustrations</h3>
        <h5>NYC-centric Illustrations</h5>
        <p style={{ maxWidth: isSmallScreen ? 800 : 600 }}>
          From iconic subway trains to the playful myth of sewer alligators,
          each illustration draws on references instantly recognizable to New
          Yorkers. The set captures the city’s distinctive character and grounds
          the work in a distinctly local perspective. Stylistically, the
          illustrations employ a clean, graphic approach, with bold lines, flat
          colors, and playful proportions, creating visuals that feel both
          contemporary and approachable.
        </p>
        <Grid
          container
          spacing={4}
          sx={{ marginTop: "1rem", maxWidth: "100%" }}
        >
          <Grid size={12} style={{ width: "100%", borderRadius: "16px" }}>
            <Lottie animationData={CDG_Illustration_Showcase_1} loop={true} />
          </Grid>
          <Grid size={12}>
            <img
              src={CDGWaterBottle}
              alt="CDG Water Bottle"
              style={{ width: "100%", borderRadius: "16px" }}
            />
          </Grid>
          <Grid size={isSmallScreen ? 12 : 6} container>
            <Box
              sx={{
                width: "100%",
                aspectRatio: "1 / 1",
                overflow: "hidden",
                borderRadius: "16px",
              }}
            >
              <img
                src={CDG_Tote_1}
                alt="CDG Tote"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </Box>
          </Grid>
          <Grid size={isSmallScreen ? 12 : 6} container>
            <Box
              sx={{
                width: "100%",
                aspectRatio: "1 / 1",
                overflow: "hidden",
                borderRadius: "16px",
              }}
            >
              <img
                src={CDGShirt}
                alt="CDG Shirt"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </Box>
          </Grid>
          <Grid size={12}>
            <img
              src={CDG_Social}
              alt="CDG Social"
              style={{ width: "100%", borderRadius: "16px" }}
            />
          </Grid>
        </Grid>
      </Stack>
    </>
  );
}
