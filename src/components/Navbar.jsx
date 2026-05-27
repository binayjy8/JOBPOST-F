import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container">
        <Link className="navbar-brand" to="/">
          Intern House
        </Link>

        <div>
          <Link to="/" className="btn btn-light me-2">
            Home
          </Link>

          <Link
            to="/post-job"
            className="btn btn-warning"
          >
            Post Job
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;