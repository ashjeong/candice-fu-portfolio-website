import { Stack } from "@mui/material";

export default function Reflection() {
  return (
    <Stack spacing={3}>
      <h3>Reflection</h3>
      <h5>Our Takeaways</h5>
      <p style={{ maxWidth: 1200 }}>
        Mow proved that sustainability and luxury can coexist in personal care.
        Our 100% paperboard design earned a Shout-Out in the 2023 Paperboard
        Packaging Council Inspiration Gallery, validating our approach to
        replacing plastics with recyclable, brand-forward solutions.
      </p>
      <p style={{ maxWidth: 1200 }}>
        The project taught us that details matter, from structural integrity to
        storytelling, and that sustainability becomes most impactful when paired
        with humor, personality, and user delight.
      </p>
      <p>
        <a
          href="https://www.paperboardpackaging.org/inspiration-gallery/2023-winners"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            textDecoration: "underline",
            fontWeight: 500,
          }}
        >
          See our shoutout!
        </a>
      </p>
    </Stack>
  );
}
