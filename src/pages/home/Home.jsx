import "./Home.css";
import { Stack, useMediaQuery } from "@mui/material";
import WebHomePage from "./WebHomePage";
import MobileHomePage from "./MobileHomePage";
import WorkCardVertical from "../work/WorkCardVertical";
import { Closing } from "../about/About";

function Hero() {
  const isSmallScreen = useMediaQuery("(max-width:800px)");

  return (
    <Stack
      spacing={isSmallScreen ? 3 : { sm: 2, md: 4 }}
      sx={{ padding: "1.5rem", maxWidth: 1200, margin: "0 auto" }}
    >
      {isSmallScreen ? <MobileHomePage /> : <WebHomePage />}
      <WorkCardVertical />
      <Closing isSmallScreen={isSmallScreen} />
    </Stack>
  );
}

export default function Home() {
  return (
    <>
      <Hero />
    </>
  );
}
