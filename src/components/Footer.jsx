import logo from "../assets/footer-logo.svg";
import NavLinks from "./NavLinks";
import "./Footer.css";

export default function Footer() {

  return (
    <div className="footer">
      <a href="/">
        <img src={logo} className="logo" />
      </a>
      <div className="footer-right">
        <NavLinks />
        <p className="footer-text">ALL RIGHTS RESERVED © 2026 CANDICE FU</p>
      </div>
    </div>
  );
}