import './navbar.scss'; 

export default function NavBar() {
  return (
    <nav className="navbar navbar-expand navbar-light px-3">
      <div className="nav navbar-nav flex-nowrap">
        <a className="nav-item navbar-brand" href="/welcomepage" aria-current="page">
          Access Managment
        </a>
        <a className="nav-item nav-link" href="/specialities">
          Specialties
        </a>
        <a className="nav-item nav-link" href="/accesses">
          Accesses
        </a>
      </div>
      <div className="ms-auto">
          <button className="btn btn-danger btn-hover-red">
            <a className='logoutBtn' href="/">Log Out</a>
          </button>
        </div>
    </nav>
  );
}
