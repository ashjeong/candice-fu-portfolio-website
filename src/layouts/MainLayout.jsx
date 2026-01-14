import { useState, useEffect, useRef } from 'react';
import CircleIcon from '@mui/icons-material/Circle';
import ArrowUpwardRoundedIcon from '@mui/icons-material/ArrowUpwardRounded';
import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'
import { Outlet } from 'react-router-dom'
import './MainLayout.css'

export default function MainLayout() {
  const [showHeader, setShowHeader] = useState(true);
  const lastScrollY = useRef(window.scrollY);

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    let ticking = false;
    function onScroll() {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;
          if (currentScrollY < 0) return; // ignore bounce/negative scroll
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

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);


  return (
    <div className="layout-container">
      <div
        style={{
          position: "sticky",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          transition: "transform 0.3s cubic-bezier(.4,0,.2,1)",
          transform: showHeader ? "translateY(0)" : "translateY(-120%)",
          background: "#FFF8EE"
        }}
      >
        <Header />
      </div>
      <main className="main">
        <Outlet />
      </main>
      <Footer />
      {/* <div className="scroll-to-top-container">
        <CircleIcon
          fontSize="8vw"
          onClick={handleScrollToTop}
          className="scroll-to-top-button"
        />
        <ArrowUpwardRoundedIcon fontSize="3vw" className="scroll-to-top-arrow" />
      </div> */}
    </div>
  );
}