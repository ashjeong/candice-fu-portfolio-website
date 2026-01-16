import { Stack } from '@mui/material';
import { Outlet } from 'react-router-dom';


export default function MainLayout() {

  return (
    <Stack sx={{ minHeight: "100vh" }}>
      <main style={{ flex: "auto" }}>
        <Outlet />
      </main>
    </Stack>
  );
}
