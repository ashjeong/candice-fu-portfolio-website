import { Stack, Grid } from "@mui/material";
import Lottie from "lottie-react";
export default function BrandIdentity() {
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
        <Grid size={6}>
          <img
            src="/src/pages/work/projects/patisserie/assets/patissire_logo.png"
            alt="Logo"
            style={{ width: "100%", borderRadius: "10px" }}
          />
        </Grid>
        <Grid size={6}>
          <img
            src="/src/pages/work/projects/patisserie/assets/wordmark.png"
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
        <Grid size={7}>
          <img
            src="/src/pages/work/projects/patisserie/assets/color_palette.png"
            alt="Color Palette"
            style={{ width: "100%", borderRadius: "10px" }}
          />
        </Grid>
        <Grid size={5}>
          <img
            src="/src/pages/work/projects/patisserie/assets/tone_of_voice.png"
            alt="Tone of Voice"
            style={{
              width: "100%",
              borderRadius: "20px",
            }}
          />
        </Grid>
        <Grid size={6}>
          <img
            src="/src/pages/work/projects/patisserie/assets/paper_bag_mockup_1.png"
            alt="Paper Bag Mockup 1"
            style={{ width: "100%", borderRadius: "10px" }}
          />
        </Grid>
        <Grid size={6}>
          <img
            src="/src/pages/work/projects/patisserie/assets/storefront_mockup_2.png"
            alt="Storefront Mockup 2"
            style={{ width: "100%", borderRadius: "10px" }}
          />
        </Grid>
      </Grid>
    </Stack>
  );
}
