import { Fragment } from "react";
import { Outlet, Link } from "react-router-dom";

import { ReactComponent as Climbing } from "../../assets/mountainclimbing.svg";
// import { ReactComponent as Climbing } from "../../assets/crown.svg";

import "./navigations.styles.scss";

const Navigation = () => {
  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <Climbing className="logo" />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>
          <Link className="nav-link" to="/sign-in">
            SIGN IN
          </Link>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};
export default Navigation;
