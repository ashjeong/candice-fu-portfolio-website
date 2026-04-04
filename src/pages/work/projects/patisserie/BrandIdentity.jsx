import { Stack, Grid } from "@mui/material";
import Lottie from "lottie-react";
import patissire_logo from "./assets/patissire_logo.png";
import wordmark from "./assets/wordmark.png";
import color_palette from "./assets/color_palette.png";
import tone_of_voice from "./assets/tone_of_voice.png";
import paper_bag_mockup_1 from "./assets/paper_bag_mockup_1.png";
import storefront_mockup_2 from "./assets/storefront_mockup_2.png";

export default function BrandIdentity({ isSmallScreen }) {
  // load any JSON Lottie animations from the local assets folder
  const lottieAnimations = import.meta.glob("./assets/*.json", { eager: true });
  const showcase =
    lottieAnimations["./assets/LPP_Visual_Schowcase.json"]?.default;

  return (
    <Stack spacing={2}>
      <h3>Brand Identity</h3>
      <h5 style={{ maxWidth: 700 }}>
        The visual identity evokes a magical, story-driven bakery experience,
        balancing fantasy and elegance to feel memorable, approachable, and
        instantly recognizable.
      </h5>
      {showcase && (
        <div style={{ width: "100%", margin: "1.5rem 0" }}>
          <Lottie
            animationData={showcase}
            loop
            autoplay
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "center",
              overflow: "hidden",
            }}
          />
        </div>
      )}

      <h5>Logo</h5>
      <p className="p2" style={{ maxWidth: 700 }}>
        The logo combines whimsical charm with bold simplicity: a playful
        hand-drawn typeface in white on a royal-blue backdrop. A golden crown
        atop the “L” nods to The Little Prince, reinforcing the brand’s
        celestial spirit. Its bright contrast and clean design make it instantly
        recognizable, while the friendly form conveys warmth and
        approachability.
      </p>

      <Grid container spacing={2} sx={{ marginBottom: "2rem" }}>
        <Grid size={isSmallScreen ? 12 : 6}>
          <img
            src={patissire_logo}
            alt="Logo"
            style={{ width: "100%", borderRadius: "10px" }}
          />
        </Grid>
        <Grid size={isSmallScreen ? 12 : 6}>
          <img
            src={wordmark}
            alt="Wordmark"
            style={{ width: "100%", borderRadius: "10px" }}
          />
        </Grid>
      </Grid>

      <h5>Visual and Verbal Identity</h5>
      <p className="p2" style={{ maxWidth: 500 }}>
        The visual identity pairs whimsical charm with bold simplicity, using a
        palette of royal blue, yellow, and lavender to evoke a dreamy, celestial
        feel. Playful typography, starry illustrations, organic shapes, and bold
        packaging make the brand both magical and recognizable.
      </p>
      <Grid
        container
        spacing={2}
        sx={{ marginBottom: "2rem", alignItems: "flex-start" }}
      >
        <Grid size={isSmallScreen ? 12 : 7}>
          <img
            src={color_palette}
            alt="Color Palette"
            style={{ width: "100%", borderRadius: "10px" }}
          />
        </Grid>
        <Grid size={isSmallScreen ? 12 : 5}>
          <img
            src={tone_of_voice}
            alt="Tone of Voice"
            style={{
              width: "100%",
              borderRadius: "20px",
            }}
          />
        </Grid>
        <Grid size={isSmallScreen ? 12 : 6}>
          <img
            src={paper_bag_mockup_1}
            alt="Paper Bag Mockup 1"
            style={{ width: "100%", borderRadius: "10px" }}
          />
        </Grid>
        <Grid size={isSmallScreen ? 12 : 6}>
          <img
            src={storefront_mockup_2}
            alt="Storefront Mockup 2"
            style={{ width: "100%", borderRadius: "10px" }}
          />
        </Grid>
      </Grid>
    </Stack>
  );
}
