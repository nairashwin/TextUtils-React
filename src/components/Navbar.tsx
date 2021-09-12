import { Link } from "react-router-dom";

interface NavbarProps {
  title?: string;
  aboutText?: string;
  mode: string;
  toggleMode(): void;
}
const Navbar = ({ title, aboutText, mode, toggleMode }: NavbarProps) => {
  return (
    <>
      <nav className={`navbar navbar-expand-lg navbar-${mode} bg-${mode}`}>
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            {title}
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="/navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  {aboutText}
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link disabled"
                  to="/"
                  tabIndex={-1}
                  aria-disabled="true"
                >
                  Disabled
                </Link>
              </li>
            </ul>
            <div className="form-check form-switch">
              <input
                className="form-check-input"
                type="checkbox"
                id="flexSwitchCheckChecked"
                onClick={toggleMode}
              />
              <label
                className={`form-check-label text-${
                  mode === "light" ? "dark" : "light"
                }`}
                htmlFor="flexSwitchCheckChecked"
              >
                Dark Mode
                {/* {`${mode.charAt(0).toUpperCase() + mode.slice(1)} Mode`} */}
              </label>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
