import { Box } from "@mui/material";

export default function RolePill() {
  return (
    <Box
      sx={{
        width: 524,
        height: 52,
        bgcolor: "rgb(244, 237, 227)",
        borderRadius: "16px",
        display: "flex",
        alignItems: "center",
        px: 3,
        boxSizing: "border-box",
      }}
    >
      <p>
        <strong className="strong">Role</strong>: Illustrator, Designer
      </p>
    </Box>
  );
}
