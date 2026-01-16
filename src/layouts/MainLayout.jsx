import { Stack } from '@mui/material';
import { useEffect, useRef, useState } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header.jsx';


export default function MainLayout() {
  const [showHeader, setShowHeader] = useState(true);
  const lastScrollY = useRef(window.scrollY);

  useEffect(() => {
    let ticking = false;
    function onScroll() {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;
          if (currentScrollY < lastScrollY.current) {
            setShowHeader(true); // scrolled up
          } else if (currentScrollY > lastScrollY.current) {
            if (currentScrollY > 50) setShowHeader(false); // scrolled down
          }
          lastScrollY.current = currentScrollY;
          ticking = false;
        });
        ticking = true;
      }
    }
    // NOTE(ashjeong): Without this, a refresh scrolls the page 10px down due to animation
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);


  return (
    <Stack sx={{ minHeight: "100vh" }}>
      <Header showHeader={showHeader} />
      <main style={{ flex: "auto" }}>
        <Outlet />
      </main>
    </Stack>
  );
}
