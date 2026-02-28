import { Grid } from "@mui/material";
import "./Home.css";
import hero from "./assets/hero.svg";

export default function MobileHomePage() {
  return (
    <Grid
      container
      spacing={2}
      direction="column"
      alignItems="center"
      sx={{ padding: "1.5rem" }}
    >
      <Grid>
        <div style={{ position: "relative" }}>
          <img className="hero-image" src={hero} alt="Hero" />
        </div>
      </Grid>
      <Grid>
        <div className="hero-text">
          <h1>hi!</h1>
          <h1>i’m candice!</h1>
          <p className="subtitle">
            designer &middot; illustrator &middot; product designer
          </p>
          <p>
            I am a graphic designer who loves creating work that is not only
            meaningful but also makes people smile!
          </p>
        </div>
      </Grid>
    </Grid>
  );
}
