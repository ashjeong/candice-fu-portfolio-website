import Link from '@mui/material/Link';
import "./Footer.css";
import LogoIcon from "../common/Logo";
import NavLinks from "../navlinks/NavLinks";


export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <div className="footer">
      <Link href="/">
        <LogoIcon className="footer-logo" style={{ width: "4.5rem", height: "auto", fill: "#FFF8EE" }} />
      </Link>
      <div className="footer-right">
        <NavLinks />
        <p className="small">ALL RIGHTS RESERVED © {year} CANDICE FU</p>
      </div>
    </div>
  );
}
