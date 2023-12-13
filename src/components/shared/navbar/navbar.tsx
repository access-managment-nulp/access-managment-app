import { Dropdown, NavDropdown, NavLink } from "react-bootstrap";
import "./navbar.scss";

interface NavBarProps {
  setIsLoggedIn: (isLoggedIn: boolean) => void;
  isLoggedIn: boolean;
}

const NavBar = ({ setIsLoggedIn, isLoggedIn }: NavBarProps) => {
  return (
    <nav className="navbar navbar-expand navbar-light px-3">
      <div className="nav navbar-nav flex-nowrap w-100 ">
        <a
          className="nav-item navbar-brand color-white"
          href={isLoggedIn ? "/welcomepage" : "/"}
          aria-current="page"
        >
          Quality Of Life
        </a>
        {isLoggedIn && (
          <>
            <NavDropdown
              title="Access management"
              className="color-white"
            >
              <NavDropdown.Item href="/specialities">Specialities</NavDropdown.Item>
              <NavDropdown.Item href="/accesses">Accesses</NavDropdown.Item>
            </NavDropdown>
            <NavLink disabled className="color-white">Patient Cabinet</NavLink>
            <NavLink disabled className="color-white">Doctor Cabinet</NavLink>
            <NavLink disabled className="color-white">Communication</NavLink>
            <NavLink disabled className="color-white">Questionnaires</NavLink>
            <NavLink disabled className="color-white">Analysis</NavLink>
            <div className="ms-auto d-flex  flex-grow-1 justify-content-end ">
              <button className="btn btn-danger btn-hover-red">
                <a
                  className="logoutBtn"
                  href="/"
                  onClick={() => {
                    setIsLoggedIn(false)
                    localStorage.removeItem('accessManagmentAppToken')
                  }}
                >
                  Log Out
                </a>
              </button>
            </div>
          </>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
