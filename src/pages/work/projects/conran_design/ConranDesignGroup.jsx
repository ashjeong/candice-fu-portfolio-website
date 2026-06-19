import { Stack, useMediaQuery } from "@mui/material";
import Intro from "./Intro";
import Overview from "./Overview";
import Illustrations from "./Illustrations";
import InternationalExpansion from "./InternationalExpansion";
import CDGMerch from "./assets/CDG_Merch.png";
export default function ConranDesignGroup() {
  const isSmallScreen = useMediaQuery("(max-width:1000px)");

  return (
    <>
      <Stack
        spacing={isSmallScreen ? 4 : 12}
        sx={{ padding: "1.5rem", maxWidth: 1500, margin: "0 auto" }}
      >
        <Intro isSmallScreen={isSmallScreen} />
        <Overview isSmallScreen={isSmallScreen} />
        <img
          src={CDGMerch}
          alt="CDG Merch"
          style={{ width: "100%", borderRadius: "16px" }}
        />
        <Illustrations isSmallScreen={isSmallScreen} />
        <InternationalExpansion isSmallScreen={isSmallScreen} />
      </Stack>
    </>
  );
}
