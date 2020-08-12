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
          <div>
            {/* this may need to be a protected route */}
            <Link to={"/create"}>Create</Link>

            <Link to={"/creators"}>Creators</Link>
            <Link to={"/creations"}>Creations</Link>
            <Link to={"/search"}>Search</Link>
            <button onClick={this.logoutUser}>Logout</button>
          </div>
        );
      } 
     else if (this.props.currentUser.status === "student") {
        return (
          <div>
            <Link to={"/student/creators"}>Creators</Link>
            <Link to={"/student/creations"}>Creations</Link>
            <Link to={"/student/search"}>Search</Link>
            <button onClick={this.logoutUser}>Logout</button>
          </div>
        );
      }
      else {
        return (
          <div>
            <Link to={"/creators"}>Creators</Link>
            <Link to={"/creations"}>Creations</Link>
            <Link to={"/search"}>Search</Link>
            <button onClick={this.logoutUser}>Logout</button>
          </div>
        );
      }
    
    } else {
      return (
        <div>
          <Link to={"/signup"}>Signup</Link>
          <Link to={"/login"}>Login</Link>
        </div>
      );
    }
  }

  render() {
    return (
      <nav>
        {this.getLinks()}
      </nav>
    );
  }
}

export default NavBar;
