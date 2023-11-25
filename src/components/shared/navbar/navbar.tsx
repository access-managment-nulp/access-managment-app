export default function NavBar() {
  return (
    <nav className="navbar navbar-expand navbar-light bg-light px-3">
      <div className="nav navbar-nav flex-nowrap">
        <a className="nav-item navbar-brand" href="/" aria-current="page">
          Access Managment
        </a>
        <a className="nav-item nav-link" href="/">
          Specialties
        </a>
        <a className="nav-item nav-link" href="/accesses">
          Accesses
        </a>
      </div>
    </nav>
  );
}
