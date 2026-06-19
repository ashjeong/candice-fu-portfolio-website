import "./About.css";
import aboutDrawing from "./assets/hero.svg";
import pfpCandice from "./assets/pfp-candice.svg";
import closingDrawing from "./assets/closing-hero.svg";
import { Stack, Chip, useMediaQuery } from "@mui/material";

function Hero({ isSmallScreen }) {
  return (
    <Stack
      direction={isSmallScreen ? "column" : "row"}
      spacing={4}
      alignItems="center"
      className="hero"
    >
      <Stack spacing={2} alignItems="flex-start">
        <Chip label="About" size="medium" variant="outlined" />
        <h1>Designing thoughtful systems, with personality.</h1>
        <p>
          Multidisciplinary designer focused on UX/UI and brand identity.
          Currently Junior Designer at Arnold NY.
        </p>
      </Stack>
      <img
        className="hero-image"
        style={{
          borderRadius: "16px",
        }}
        src={aboutDrawing}
        alt="Illustration of a person."
      />
    </Stack>
  );
}

function AboutContent({ isSmallScreen }) {
  return (
    <Stack
      direction={isSmallScreen ? "column" : "row"}
      spacing={isSmallScreen ? 4 : 10}
      alignItems="center"
      className="about-content"
    >
      <Stack
        spacing={4}
        alignItems="center"
        className="about-content"
        sx={{ maxWidth: 850 }}
      >
        <p>
          I’m a multidisciplinary designer working across product (UX/UI) and
          brand identity. I graduated from Rochester Institute of Technology
          with a BFA in Graphic Design and a minor in Advertising and Public
          Relations, and I’m currently a Junior Designer at Arnold NY.
        </p>
        <p>
          I contribute to both digital and brand-driven projects, refining user
          flows, building scalable UI systems, and supporting visual identities
          across touchpoints. I’m especially interested in where structure and
          storytelling meet: how thoughtful systems and strong visual language
          come together to create cohesive, intuitive experiences.
        </p>
        <p>
          I approach design with a systems mindset, considering how decisions
          scale and connect within a larger ecosystem. Whether contributing to a
          design system or shaping a brand expression, I care deeply about
          clarity, craft, and the details that make work feel considered and
          well-resolved.
        </p>
        <p>
          I’m intentional about growing into a designer who bridges product and
          brand, balancing strategic thinking with strong visual execution.
          Outside of client work, I explore more playful ideas through
          illustration, often incorporating humor as a way to keep creativity
          evolving.
        </p>
      </Stack>
      <img
        className="about-pfp"
        style={{
          borderRadius: "16px",
        }}
        src={pfpCandice}
        alt="Portrait of Candice Fu"
      />
    </Stack>
  );
}

function Closing({ isSmallScreen }) {
  return isSmallScreen ? (
    <Stack
      spacing={2}
      direction="column"
      alignItems="center"
      className="closing"
    >
      <h1> Let's build something together!</h1>

      <img
        className="closing-image"
        style={{
          borderRadius: "16px",
        }}
        src={closingDrawing}
        alt="Illustration of a person waving."
      />
    </Stack>
  ) : (
    <Stack
      spacing={2}
      direction="row"
      alignItems="flex-start"
      className="closing"
    >
      <img
        className="closing-image"
        style={{
          borderRadius: "16px",
          width: "30%",
        }}
        src={closingDrawing}
        alt="Illustration of a person waving."
      />
      <h1> Let's build something together!</h1>
    </Stack>
  );
}

function About() {
  const isSmallScreen = useMediaQuery("(max-width:800px)");

  return (
    <Stack
      spacing={14}
      sx={{
        maxWidth: 1500,
        margin: "0 auto",
        marginBottom: "4rem",
      }}
    >
      <Hero isSmallScreen={isSmallScreen} />
      <AboutContent isSmallScreen={isSmallScreen} />
      <Closing isSmallScreen={isSmallScreen} />
    </Stack>
  );
}

export default About;
