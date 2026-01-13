import logo from "../assets/footer-logo.svg";
import "./Footer.css";

export default function Footer() {

  return (
    <div className="footer">
      <img src={logo} className="logo" />
      <p className="footer-text">ALL RIGHTS RESERVED © 2026 CANDICE FU</p>
    </div>
  );
}