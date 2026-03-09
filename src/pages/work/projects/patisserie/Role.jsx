import { Paper, Typography } from "@mui/material";

export function RolePill() {
  return (
    <Paper
      elevation={0}
      sx={{
        bgcolor: (t) => t.palette.grey[100],
        borderRadius: 999, // pill
        px: 2.5,
        py: 1.25,
        display: "flex",
        alignItems: "center",
        gap: 0.75,
      }}
    >
      <Typography variant="body1" sx={{ fontWeight: 700 }}>
        Role:
      </Typography>
      <Typography variant="body1">Digital Design Lead</Typography>
    </Paper>
  );
}
