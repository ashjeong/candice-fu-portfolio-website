import { Stack } from '@mui/material';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header.jsx';


export default function MainLayout() {

  return (
    <Stack sx={{ minHeight: "100vh" }}>
      <Header />
      <main style={{ flex: "auto" }}>
        <Outlet />
      </main>
    </Stack>
  );
}
