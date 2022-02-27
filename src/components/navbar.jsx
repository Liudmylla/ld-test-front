import { Link } from "react-router-dom";
// todo icons, styles
const NavBar = () => {
  return (
    <header className="header">
      <nav className="header__nav-container">
        <Link to="/">Home</Link>
        <Link to="/funzone">Funzone</Link>
        <Link to="/testimoniales">Testimoniales</Link>
      </nav>
    </header>
  );
};

export default NavBar;
