import { Link } from "react-router-dom";
const Footer = () => {
  // todo icons, styles
  return (
    <header className="footer">
      <nav className="footer__nav-container">
        <Link to="/">Home</Link>
        <Link to="/funzone">Funzone</Link>
        <Link to="/testimoniales">Testimoniales</Link>
      </nav>
    </header>
  );
};
export default Footer;
