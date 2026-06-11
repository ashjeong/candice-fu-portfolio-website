import { Stack, useMediaQuery, Grid, Box } from "@mui/material";
import Lottie from "lottie-react";

import CDG_Illustration_Showcase_2 from "./assets/CDG_Illustration_Showcase_2.json";
import CDGMugs from "../conran_design/assets/CDG_Mugs.png";
import CDGPoster from "../conran_design/assets/CDG_Poster_Frame.png";
import CDG_Tote_2 from "../conran_design/assets/CDG_Tote_2.png";

export default function InternationalExpansion({ isSmallScreen }) {
  return (
    <>
      <Stack alignItems={isSmallScreen ? "flex-start" : "center"}>
        <Stack spacing={2}>
          <h3>International Expansion</h3>
          <h5>To London, Paris, and Mumbai</h5>
          <p>
            Following the success of the New York series, the project expanded
            to include illustrations for CDG’s offices in London, Paris, and
            Mumbai. Just like in New York, each piece was shaped by input from
            local team members — those most familiar with the rhythms, icons,
            and quirks of their own cities. This collaborative process ensured
            that every illustration authentically reflects the distinctive
            character and culture of its location, while still maintaining a
            cohesive visual style across the global set.
          </p>
        </Stack>
        <Grid
          container
          spacing={4}
          sx={{ marginTop: "1rem", maxWidth: "100%" }}
        >
          <Grid size={12} style={{ width: "100%", borderRadius: "16px" }}>
            <Lottie animationData={CDG_Illustration_Showcase_2} loop={true} />
          </Grid>

          <Grid size={12}>
            <img
              src={CDGMugs}
              alt="CDG Mugs"
              style={{ width: "100%", borderRadius: "16px" }}
            />
          </Grid>

          <Grid size={isSmallScreen ? 12 : 6} container>
            <img
              src={CDGPoster}
              alt="CDG Poster"
              style={{ width: "100%", height: "100%", borderRadius: "16px" }}
            />
          </Grid>
          <Grid size={isSmallScreen ? 12 : 6} container>
            <img
              src={CDG_Tote_2}
              alt="CDG Tote"
              style={{
                width: "100%",
                height: "100%",
                borderRadius: "16px",
              }}
            />
          </Grid>
        </Grid>
      </Stack>
    </>
  );
}
