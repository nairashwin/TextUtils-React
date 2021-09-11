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
          <a className="navbar-brand" href="/">
            {title}
          </a>
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
                <a className="nav-link active" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  {aboutText}
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link disabled"
                  href="/"
                  tabIndex={-1}
                  aria-disabled="true"
                >
                  Disabled
                </a>
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
