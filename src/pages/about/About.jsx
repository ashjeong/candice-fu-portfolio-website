import "./About.css";
import aboutDrawing from "./assets/about-me.svg";
import pfpCandice from "./assets/pfp-candice.svg";
import closingDrawing from "./assets/closing-hero.svg";
import contactDrawing from "./assets/contact.svg";
import { Stack, Chip, useMediaQuery } from "@mui/material";

function Hero({ isSmallScreen }) {
  return isSmallScreen ? (
    <Stack spacing={4} alignItems="center" className="hero">
      <Stack spacing={2} alignItems="flex-start">
        <Chip label="About" size="medium" variant="outlined" />
        <img
          className="hero-image"
          style={{
            borderRadius: "16px",
          }}
          src={aboutDrawing}
          alt="Illustration of a person."
        />
        <h2>Designing thoughtful systems, with personality.</h2>
        <p className="hero-subtitle">
          Multidisciplinary designer focused on UX/UI and brand identity.
        </p>
      </Stack>
    </Stack>
  ) : (
    <Stack spacing={2} className="hero" direction="row" alignItems="center">
      <Stack spacing={2} alignItems="flex-start">
        <Chip label="About" size="medium" variant="outlined" />

        <h2>Designing thoughtful systems, with personality.</h2>
        <p>Multidisciplinary designer focused on UX/UI and brand identity.</p>
      </Stack>
      <img
        className="hero-image"
        style={{
          borderRadius: "16px",
          height: "600px",
        }}
        src={aboutDrawing}
        alt="Illustration of a person."
      />
    </Stack>
  );
}

function AboutContent({ isSmallScreen }) {
  return isSmallScreen ? (
    <Stack
      direction={"column"}
      spacing={4}
      alignItems="center"
      className="about-content"
    >
      <Stack
        spacing={4}
        alignItems="center"
        className="about-content"
        sx={{ maxWidth: 1000, padding: "0 1rem" }}
      >
        <img
          className="about-pfp"
          style={{
            borderRadius: "16px",
          }}
          src={pfpCandice}
          alt="Portrait of Candice Fu"
        />
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
    </Stack>
  ) : (
    <Stack
      direction={"row"}
      spacing={10}
      alignItems="center"
      className="about-content"
    >
      <Stack
        spacing={4}
        alignItems="center"
        className="about-content"
        sx={{ maxWidth: 750, padding: "0 1rem" }}
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

export function Closing({ isSmallScreen }) {
  return isSmallScreen ? (
    <Stack
      spacing={2}
      direction="column"
      alignItems="center"
      className="closing"
      sx={{ maxWidth: 1200, padding: "0 1rem" }}
    >
      <img
        className="closing-image contact-peek-image"
        style={{
          borderRadius: "16px",
        }}
        src={contactDrawing}
        alt="Illustration of a person waving."
      />
      <h2 className="closing-title"> Let's build something together!</h2>

      {/* TODO: https://mui.com/material-ui/react-chip/#clickable-link */}
      <Stack spacing={2} width="100%">
        <Chip
          label="Product Design Resume"
          variant="outlined"
          color="secondary"
        />
        <Chip
          label="Brand Identity & Illustration Resume"
          variant="outlined"
          color="secondary"
        />
        <Chip label="LinkedIn" variant="outlined" color="secondary" />
        <Chip label="Email" variant="outlined" color="secondary" />
      </Stack>
    </Stack>
  ) : (
    <Stack
      spacing={8}
      direction="row"
      alignItems="flex-start"
      className="closing"
      sx={{ padding: "0 1rem" }}
    >
      <img
        className="closing-image"
        style={{
          borderRadius: "16px",
          width: "40%",
        }}
        src={contactDrawing}
        alt="Illustration of a person waving."
      />
      <Stack spacing={2}>
        <h2 className="closing-title-non-centered">
          Let's build something together!
        </h2>
        <Stack spacing={2} direction="row">
          <Chip
            label="Product Design Resume"
            variant="outlined"
            color="secondary"
          />
          <Chip
            label="Brand Identity & Illustration Resume"
            variant="outlined"
            color="secondary"
          />
        </Stack>
        <Stack spacing={2} direction="row">
          <Chip label="LinkedIn" variant="outlined" color="secondary" />
          <Chip label="Email" variant="outlined" color="secondary" />
        </Stack>
      </Stack>
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
