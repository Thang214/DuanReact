import { Link } from "react-router-dom";
import logo from "@/assets/uploads/Yummy Takoyaki.png";

const Header = () => {
  return (
    <div>
      <header className="header_admin">
        <div className="px-3 py-2 text-bg-dark border-bottom">
          <div className="container">
            <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
              <Link
                to="/"
                className="d-flex align-items-center my-2 my-lg-0 me-lg-auto text-white text-decoration-none"
              >
                <img src={logo} width={70} alt="" />
              </Link>
              <ul className="nav col-12 col-lg-auto my-2 justify-content-center my-md-0 text-small">
                <li>
                  <Link to="/admin" className="nav-link text-white">
                    <svg
                      className="bi d-block mx-auto mb-1"
                      width={24}
                      height={24}
                    ></svg>
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/admin/products" className="nav-link text-white">
                    <svg
                      className="bi d-block mx-auto mb-1"
                      width={24}
                      height={24}
                    ></svg>
                    Products
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* <div className="px-3 py-2 border-bottom mb-3">
          <div className="container d-flex flex-wrap justify-content-center">
            <form
              className="col-12 col-lg-auto mb-2 mb-lg-0 me-lg-auto"
              role="search"
            >
              <input
                type="search"
                className="form-control"
                placeholder="Search..."
                aria-label="Search"
              />
            </form>
            <div className="text-end">
              <Link
                to={"/signin"}
                type="button"
                className="btn btn-light text-dark me-2"
              >
                Login
              </Link>
              <Link to={"/signup"} type="button" className="btn btn-primary">
                Sign-up
              </Link>
            </div>
          </div>
        </div> */}
      </header>
    </div>
  );
};

export default Header;
