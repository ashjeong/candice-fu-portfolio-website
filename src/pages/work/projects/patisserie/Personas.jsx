import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useState, useRef, useEffect } from "react";
import { Grid, Box, IconButton } from "@mui/material";

import personaMain from "./assets/user_persona_1.png";
import persona1 from "./assets/user_persona_2.png";
import persona2 from "./assets/user_persona_3.png";

const personaImages = [
  { src: personaMain, alt: "User Persona 1" },
  { src: persona1, alt: "User Persona 2" },
  { src: persona2, alt: "User Persona 3" },
];

export default function Personas() {
  const [personaIdx, setPersonaIdx] = useState(0);
  const [slide, setSlide] = useState({
    animating: false,
    direction: 0,
    nextIdx: null,
  });
  const timeoutRef = useRef();

  useEffect(() => {
    // Add global keyframes for slide animation only once
    const style = document.createElement("style");
    style.innerHTML = `
      @keyframes slideInRight {
        from { transform: translateX(100%); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
      }
      @keyframes slideInLeft {
        from { transform: translateX(-100%); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
      }
      @keyframes slideOutLeft {
        from { transform: translateX(0); opacity: 1; }
        to { transform: translateX(-100%); opacity: 0; }
      }
      @keyframes slideOutRight {
        from { transform: translateX(0); opacity: 1; }
        to { transform: translateX(100%); opacity: 0; }
      }
    `;
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  const slideTo = (newIdx, dir) => {
    if (slide.animating) return;
    setSlide({ animating: true, direction: dir, nextIdx: newIdx });
    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setPersonaIdx(newIdx);
      setSlide({ animating: false, direction: 0, nextIdx: null });
    }, 350);
  };

  const handlePrev = () => {
    const newIdx = personaIdx === 0 ? personaImages.length - 1 : personaIdx - 1;
    slideTo(newIdx, -1);
  };
  const handleNext = () => {
    const newIdx = personaIdx === personaImages.length - 1 ? 0 : personaIdx + 1;
    slideTo(newIdx, 1);
  };
  return (
    <Box
      width="100%"
      mb={2}
      display="flex"
      flexDirection="column"
      alignItems="center"
    >
      <Box
        sx={{
          width: "100%",
          aspectRatio: "7/4",
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 2,
          overflow: "hidden",
          boxShadow: 2,
          background: "#f7f7f7",
        }}
      >
        <IconButton
          onClick={handlePrev}
          aria-label="Previous Persona"
          sx={{
            position: "absolute",
            left: 12,
            top: "50%",
            transform: "translateY(-50%)",
            bgcolor: "rgba(255,255,255,0.7)",
            "&:hover": { bgcolor: "rgba(255,255,255,0.9)" },
            zIndex: 2,
            boxShadow: 1,
          }}
        >
          <ArrowBackIosNewIcon />
        </IconButton>
        <Box
          sx={{
            width: "100%",
            height: "100%",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* Current image (slide out if animating) */}
          <Box
            component="img"
            src={personaImages[personaIdx].src}
            alt={personaImages[personaIdx].alt}
            sx={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              borderRadius: 2,
              position: "absolute",
              top: 0,
              left: 0,
              zIndex: 1,
              animation:
                slide.animating && slide.nextIdx !== null
                  ? `${slide.direction === 1 ? "slideOutLeft" : "slideOutRight"} 0.35s cubic-bezier(.4,0,.2,1) forwards`
                  : undefined,
              opacity: slide.animating && slide.nextIdx !== null ? 1 : 1,
              transition: "none",
            }}
          />
          {/* Next image (slide in if animating) */}
          {slide.animating && slide.nextIdx !== null && (
            <Box
              component="img"
              src={personaImages[slide.nextIdx].src}
              alt={personaImages[slide.nextIdx].alt}
              sx={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                borderRadius: 2,
                position: "absolute",
                top: 0,
                left: 0,
                zIndex: 2,
                animation: `${slide.direction === 1 ? "slideInRight" : "slideInLeft"} 0.35s cubic-bezier(.4,0,.2,1) forwards`,
                opacity: 1,
                transition: "none",
              }}
            />
          )}
        </Box>
        <IconButton
          onClick={handleNext}
          aria-label="Next Persona"
          sx={{
            position: "absolute",
            right: 12,
            top: "50%",
            transform: "translateY(-50%)",
            bgcolor: "rgba(255,255,255,0.7)",
            "&:hover": { bgcolor: "rgba(255,255,255,0.9)" },
            zIndex: 2,
            boxShadow: 1,
          }}
        >
          <ArrowForwardIosIcon />
        </IconButton>
      </Box>
      <Box display="flex" justifyContent="center" alignItems="center" mt={2}>
        {personaImages.map((_, idx) => (
          <Box
            key={idx}
            sx={{
              width: 12,
              height: 12,
              borderRadius: "50%",
              backgroundColor: idx === personaIdx ? "#333" : "#ccc",
              opacity: idx === personaIdx ? 0.9 : 0.5,
              mx: 0.5,
              transition: "background 0.2s, opacity 0.2s",
            }}
          />
        ))}
      </Box>
    </Box>
  );
}
