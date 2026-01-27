import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import MainLayout from "./layouts/MainLayout";
import About from "./pages/about/About";
import Home from "./pages/home/Home";
import Work from "./pages/work/Work";
import Patisserie from "./pages/work/projects/Patisserie.jsx";
import Mow from "./pages/work/projects/Mow.jsx";
import ConranDesignGroup from "./pages/work/projects/ConranDesignGroup.jsx";
import JustForFun from "./pages/work/projects/JustForFun.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/work" element={<Work />} />
          <Route path="/lepetitpatisserie" element={<Patisserie />} />
          <Route path="/mow" element={<Mow />} />
          <Route path="/conrandesigngroup" element={<ConranDesignGroup />} />
          <Route path="/justforfun" element={<JustForFun />} />
          <Route path="/about" element={<About />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
