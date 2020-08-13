import React from "react";
import { Link } from "react-router-dom";

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.logoutUser = this.logoutUser.bind(this);
    this.getLinks = this.getLinks.bind(this);
  }

  logoutUser(e) {
    e.preventDefault();
    this.props.logout();
  }

  getLinks() {
    if (this.props.loggedIn) {

      if (this.props.currentUser.status === "artist") {
        return (
          <div className="nav-link-container">
            {/* this may need to be a protected route */}
            <Link className="nav-link" to={"/create"}>Create</Link>

            <Link className="nav-link" to={"/creators"}>Creators</Link>
            <Link className="nav-link" to={"/creations"}>Creations</Link>
            <Link className="nav-link" to={"/search"}>Search</Link>
            <button onClick={this.logoutUser}>Logout</button>
          </div>
        );
      } 
     else if (this.props.currentUser.status === "student") {
        return (
          <div>
            <Link className="nav-link" to={"/student/creators"}>Creators</Link>
            <Link className="nav-link" to={"/student/creations"}>Creations</Link>
            <Link className="nav-link" to={"/student/search"}>Search</Link>
            <button onClick={this.logoutUser}>Logout</button>
          </div>
        );
      }
      else {
        return (
          <div>
            <Link className="nav-link" to={"/creators"}>
              Creators
            </Link>
            <Link className="nav-link" to={"/creations"}>
              Creations
            </Link>
            <Link className="nav-link" to={"/search"}>
              Search
            </Link>
            <button onClick={this.logoutUser}>Logout</button>
          </div>
        );
      }
    
    } else {
      return (
        <div>
          <div className="session-link signup">
            <Link to={"/signup"}>Signup</Link>
          </div>
          <div className="session-text">or</div>
          <div className="session-link login">
            <Link to={"/login"}>Login</Link>
          </div>
        </div>
      );
    }
  }

  render() {
    return (
      <nav>
        <div className="navigation-wrapper">
          <div className="navigation-container">
            <Link to={"/"}>
              <div className="m-w-logo-container">
                <img
                  src="https://lh3.google.com/u/0/d/1CeO7JEqkDVQpUzyxAlTcquAc059ERD_j=w1616-h1808-iv1"
                  className="m-w-logo-image"
                />
                <img 
                  src="https://lh3.google.com/u/0/d/10xrgro8JEo5VD24pYRHf2xuA5zLDqDMM=w3564-h1808-iv1"
                  className="m-w-logo-image-hover" 
                />
              </div>
            </Link>
            {this.getLinks()}
          </div>
        </div>
      </nav>
    );
  }
}

export default NavBar;
