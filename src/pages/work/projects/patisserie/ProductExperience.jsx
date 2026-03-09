import { Grid, Stack } from "@mui/material";
import Lottie from "lottie-react";
import checkoutFlowMov from "./assets/LPP_Checkout_Flow.mov";
import productFlowMov from "./assets/LPP_Main_Page_Prototype.mov";

export default function ProductExperience({ isSmallScreen }) {
  const lottieAnimations = import.meta.glob("./assets/*.json", { eager: true });
  const mobilePreview =
    lottieAnimations["./assets/LPP_mobile_screen_preview.json"]?.default;
  const desktopPreview =
    lottieAnimations["./assets/LPP_Desktop-Animation.json"]?.default;

  return (
    <Stack spacing={5}>
      <Stack spacing={2}>
        <h3>Product Experience</h3>
        <h5>Interactivity</h5>
        <p>
          The website’s interactive flow guides users through a storybook-like
          journey. Clear navigation, responsive product visuals, and subtle cues
          make exploration intuitive, while interactive touches like category
          filters and real-time order updates keep the experience engaging.
          Overall, the flow balances delight and functionality, ensuring that
          users feel immersed in the magic of the brand from start to finish.
        </p>
      </Stack>

      {mobilePreview && (
        <div style={{ width: "100%", margin: "1.5rem 0" }}>
          <Lottie
            animationData={mobilePreview}
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

      {desktopPreview && (
        <div style={{ width: "100%", margin: "1.5rem 0" }}>
          <Lottie
            animationData={desktopPreview}
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

      {isSmallScreen ? (
        <>
          <Grid container spacing={8} sx={{ marginBottom: "2rem" }}>
            <Grid size={12}>
              <h5>Product Flow</h5>
              <p>
                The product flow was designed to make ordering pastries as
                seamless and magical as visiting the bakery. Customers start on
                the homepage, explore the menu through clear categories and
                vivid visuals, and can easily learn about the bakery’s mission
                or reach out via the contact page.
              </p>
            </Grid>
          </Grid>
          <Grid size={12}>
            <video
              src={productFlowMov}
              muted
              loop
              autoPlay
              playsInline
              controls={false}
              style={{
                width: "100%",
                maxWidth: 420,
                borderRadius: 12,
                objectFit: "cover",
              }}
            />
          </Grid>
        </>
      ) : (
        <>
          <Grid container spacing={8} sx={{ marginBottom: "2rem" }}>
            <Grid size={6}>
              <video
                src={productFlowMov}
                muted
                loop
                autoPlay
                playsInline
                controls={false}
                style={{
                  width: "100%",
                  maxWidth: 420,
                  borderRadius: 12,
                  objectFit: "cover",
                }}
              />
            </Grid>
            <Grid size={6}>
              <h5>Product Flow</h5>
              <p>
                The product flow was designed to make ordering pastries as
                seamless and magical as visiting the bakery. Customers start on
                the homepage, explore the menu through clear categories and
                vivid visuals, and can easily learn about the bakery’s mission
                or reach out via the contact page.
              </p>
            </Grid>
          </Grid>
        </>
      )}

      <Grid container spacing={8} sx={{ marginBottom: "2rem" }}>
        <Grid size={isSmallScreen ? 12 : 6}>
          <h5>Purchase Flow</h5>
          <p>
            The checkout is streamlined with delivery or pickup options, playful
            microcopy, and a thank-you page showing estimated timing, creating a
            flow that balances clarity with whimsy and feels as magical as
            visiting the bakery in person.
          </p>
        </Grid>
        <Grid size={isSmallScreen ? 12 : 6}>
          <video
            src={checkoutFlowMov}
            muted
            loop
            autoPlay
            playsInline
            controls={false}
            style={{
              width: "100%",
              maxWidth: 420,
              borderRadius: 12,
              objectFit: "cover",
            }}
          />
        </Grid>
      </Grid>
    </Stack>
  );
}
