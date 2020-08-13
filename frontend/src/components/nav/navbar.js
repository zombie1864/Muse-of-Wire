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
                <img src="https://lh3.googleusercontent.com/h_StglhPQkLAAgon_Viq-bN1J26k0mHjS5r30e2Ofl9okpkq3NRFyFGmckPRH187t1JBqiMybYV8li8BJH5XScW_ELjx7foDGAUJ-TX48r-lyycaEXlCvy_e26JMqZfKjg_DmpLslHUmF0s3LHzyttoYElAUE6c27nx6ISQUdKnQOv_6koUVtYOQA1ToUWgz2HYoPK90TwUveOQsfkjBjBaaJvhHOeXF3YD5FkfAlU_9AgLMYSxT72uv4r7Krbg-5jPmF3Smp_hDZaLO9upfLwqB3-s5Ill6v1ol7FiVtrWyrWDWBMPdfUBvQNaewD3Jc4GbKDpVdPNlKEOs6R6NT-ep0s2iOeZGzNdVjDxpjOsoH36MxYnrzdPKiES4AMarCrTVBvNCqAc_HKr86EM3QbldzLChf1JqLVY4_HIsqmPLWX-cH0LnJwfSFnwD-xgnEOHQzh31t6L4G2KnDire4nC0l3l56xN9_OVKxmRfOG1vp_u0d6v21H0azcJKQnoYGlHHYDJZDvUr6pes3Hav0IqLjz9XsA1c1NG7PuTE-8dttni7yb5Gdz4pAP2wtnJFqusIFT_9FkHOjkV-QTGjIG9iZZwhamshi2VMbXfiRQu4Kzr8_7H47tuV9LUWwPcI_arKq-63HYuAxC2LoUdgq-GLtVOqr6sXUBa9l-hBSgC0i-fVm6dLL7_d5cJpiG3YR9dV2A=w3298-h1808-ft" />
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
