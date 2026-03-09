import { Stack } from "@mui/material";
export default function VideoPitch() {
  return (
    <Stack spacing={3}>
      <h5>Video Pitch</h5>
      <p style={{ maxWidth: 1500 }}>
        Alongside the packaging, we produced a video pitch to highlight both the
        product and Mow’s mission of “planting a better future.” Styled like an
        infomercial, the video reflects the brand’s playful personality and
        quirky voice, bringing the story and product to life.
      </p>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          width: "100%",
          marginTop: "2rem",
        }}
      >
        <div
          style={{
            width: "100vw",
            aspectRatio: "16/9",
            maxWidth: "1200px",
            borderRadius: "16px",
            overflow: "hidden",
          }}
        >
          <iframe
            title="vimeo-player"
            src="https://player.vimeo.com/video/1055434246?h=2f5cf92eb1"
            width="100%"
            height="100%"
            style={{
              display: "block",
              width: "100%",
              height: "100%",
              border: 0,
            }}
            referrerPolicy="strict-origin-when-cross-origin"
            allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </Stack>
  );
}
