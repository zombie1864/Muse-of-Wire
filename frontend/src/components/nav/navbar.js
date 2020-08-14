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

      if (this.props.currentUser.status === "performer") {
        return (
          <div className="navigation-container">
            <Link to={"/"}>
              <div className="m-w-logo-container">
                <img
                  src="https://lh3.googleusercontent.com/CpSLsZPxX4uxfKQYf7X2rh9hD338-TFCwJtgfD99yIRpcG3x-Fei8AVD4qPqnHsbEL7B1Ffgcwx7mZA5jUApOA0RyWOhR9rzHh5VY1FFl_hl5fx4oHhw2-pC08Fmrbt68of1-qiwCZqjx4W3cU67SSuW7nMW7JD2oSBNe1LiCinJv37UF2dNvAdBPnqZKHmIUkBRe-8V30EcBi0CgBiEmSVP805fTP84iraGj0rsb_C8XagCMeYNG2QBFWT1jX670TCRG5BHK-_rdAZ7RcBWL4CTUBjLJuHqOmBe17QrFlKu2rSeiq_KPFNth3g0CjSHVArkP9BAeATvfbOTD0tWitEU-OTNx-6zAejjRylfOpeQ_hqAOzOkjLCb4-rCEh_SxpzozNLMgYsMcTfyfCuw0jfnZi61FAxUq9QU_WhRczl3MoWensaR3jy90PKs-9hdgWwqaNi_avqiLDKRKkOj2hBx6ZrFtaY_L2sJm6ETi1pgGOh-3W8F8s5mryZNbQd0_cKhZDqSoCQVuoUggFKj2fRIZkrdvNlsi6P92hHOlsrvV2Apztc8VOvYLOj5PtRfvi0SzXOf16nATfh82wR-dhIAajPbLBHC7fu1k6fbgjYRoeq16VVDHDq4uo23gkpLhTauNifuh-C55JfE6JKf_M7_qp86MLOdgZk-bGY7rlHFGVyjhF0fpy0qxqS7ESsRm3hMHA=w3232-h1808-ft"
                  className="m-w-logo-image"
                />
                <img
                  src="https://lh3.googleusercontent.com/KHPWCQ76hqkibj5Eg4mSmVhnxJUcZERKfblCe3PD2s2fu_nlDBf8vvIhKeQIUr592aQ5QbSIyEOhQ08XsVIsXpq4O5KibZIYX-jyjnbDFnBdZkrqlo_Lnjp9A4Rd0X8k_eV9_9w4x6qokAy60mHXsskjDEjt0Ni7Eh3dWUB3T8rwkM0lgUbwHFMaYHBC7c0hj4nidIfGIVsk9GhhlLhkyFznrXVrkUq8udiLA40-IllmkfkSYszqYBJa6Ai1Q5OyND8pXWzsWzi8P22t3i-o72unUy7NUEN9dS1Ssj1nGdnh9KbVGjPvOBTG6Cym5eJ5JVvHgiUavP5cOPztQzAfk3Eh4Z0CudT0PZiCd_JxiTl1WVkZfk4HB-ZCvOTWN50kSLOb9X7npaM6FaTLrlDINy-JAoJIOYlzt6qXNhh8ikf3KWm1AHAryiMXGOrYxDAyVW4VaZJ5r-W2bz82u0Iui1Afcq_17tDPoxJYgq7uv9vNa7GfJH9ux33694EI88-rWEXSIwwoVLnuHzif0FrC1lC7n3J74gvAnLJP3936_3Qb94o0heGllaoCTJCy60gRaD7qPx6s76C8BeFng-2BoblaWGOrGrR_Mx_LNh-gce25QDMWhCtjwscTqaIEJWU6c72kgo9LmFZgJuluPIySN2LHadDxO1jliTwgwFzLRnw80JQUiN_fPCK-u2mtxogs1F8ong=w1660-h1808-ft"
                  className="m-w-logo-image-hover"
                />
              </div>
            </Link>
            <div className="authenticated-user-links">
              {/* this may need to be a protected route */}
              <Link className="nav-link" to={"/create"}>Create</Link>

              <Link className="nav-link" to={"/creators"}>Creators</Link>
              <Link className="nav-link" to={"/creations"}>Creations</Link>
              <Link className="nav-link" to={"/search"}>Search</Link>
            </div>
            <div className="session-links-container">
              <div className="session-logout-button"> 
                <button onClick={this.logoutUser}>Logout</button>
              </div>
            </div>
          </div>
        );
      } 
     else if (this.props.currentUser.status === "student") {
        return (
          <div className="navigation-container">
            <Link to={"/"}>
              <div className="m-w-logo-container">
                <img
                  src="https://lh3.googleusercontent.com/CpSLsZPxX4uxfKQYf7X2rh9hD338-TFCwJtgfD99yIRpcG3x-Fei8AVD4qPqnHsbEL7B1Ffgcwx7mZA5jUApOA0RyWOhR9rzHh5VY1FFl_hl5fx4oHhw2-pC08Fmrbt68of1-qiwCZqjx4W3cU67SSuW7nMW7JD2oSBNe1LiCinJv37UF2dNvAdBPnqZKHmIUkBRe-8V30EcBi0CgBiEmSVP805fTP84iraGj0rsb_C8XagCMeYNG2QBFWT1jX670TCRG5BHK-_rdAZ7RcBWL4CTUBjLJuHqOmBe17QrFlKu2rSeiq_KPFNth3g0CjSHVArkP9BAeATvfbOTD0tWitEU-OTNx-6zAejjRylfOpeQ_hqAOzOkjLCb4-rCEh_SxpzozNLMgYsMcTfyfCuw0jfnZi61FAxUq9QU_WhRczl3MoWensaR3jy90PKs-9hdgWwqaNi_avqiLDKRKkOj2hBx6ZrFtaY_L2sJm6ETi1pgGOh-3W8F8s5mryZNbQd0_cKhZDqSoCQVuoUggFKj2fRIZkrdvNlsi6P92hHOlsrvV2Apztc8VOvYLOj5PtRfvi0SzXOf16nATfh82wR-dhIAajPbLBHC7fu1k6fbgjYRoeq16VVDHDq4uo23gkpLhTauNifuh-C55JfE6JKf_M7_qp86MLOdgZk-bGY7rlHFGVyjhF0fpy0qxqS7ESsRm3hMHA=w3232-h1808-ft"
                  className="m-w-logo-image"
                />
                <img
                  src="https://lh3.googleusercontent.com/KHPWCQ76hqkibj5Eg4mSmVhnxJUcZERKfblCe3PD2s2fu_nlDBf8vvIhKeQIUr592aQ5QbSIyEOhQ08XsVIsXpq4O5KibZIYX-jyjnbDFnBdZkrqlo_Lnjp9A4Rd0X8k_eV9_9w4x6qokAy60mHXsskjDEjt0Ni7Eh3dWUB3T8rwkM0lgUbwHFMaYHBC7c0hj4nidIfGIVsk9GhhlLhkyFznrXVrkUq8udiLA40-IllmkfkSYszqYBJa6Ai1Q5OyND8pXWzsWzi8P22t3i-o72unUy7NUEN9dS1Ssj1nGdnh9KbVGjPvOBTG6Cym5eJ5JVvHgiUavP5cOPztQzAfk3Eh4Z0CudT0PZiCd_JxiTl1WVkZfk4HB-ZCvOTWN50kSLOb9X7npaM6FaTLrlDINy-JAoJIOYlzt6qXNhh8ikf3KWm1AHAryiMXGOrYxDAyVW4VaZJ5r-W2bz82u0Iui1Afcq_17tDPoxJYgq7uv9vNa7GfJH9ux33694EI88-rWEXSIwwoVLnuHzif0FrC1lC7n3J74gvAnLJP3936_3Qb94o0heGllaoCTJCy60gRaD7qPx6s76C8BeFng-2BoblaWGOrGrR_Mx_LNh-gce25QDMWhCtjwscTqaIEJWU6c72kgo9LmFZgJuluPIySN2LHadDxO1jliTwgwFzLRnw80JQUiN_fPCK-u2mtxogs1F8ong=w1660-h1808-ft"
                  className="m-w-logo-image-hover"
                />
              </div>
            </Link>
            <div className="authenticated-user-links">
              <Link className="nav-link" to={"/student/creators"}>
                Creators
              </Link>
              <Link className="nav-link" to={"/student/creations"}>
                Creations
              </Link>
              <Link className="nav-link" to={"/student/search"}>
                Search
              </Link>
            </div>
            <div className="session-links-container">
              <div className="session-logout-button">
                <button onClick={this.logoutUser}>Logout</button>
              </div>
            </div>
          </div>
        );
      }
      else {
        return (
          <div className="navigation-container">
            <Link to={"/"}>
              <div className="m-w-logo-container">
                <img
                  src="https://lh3.googleusercontent.com/CpSLsZPxX4uxfKQYf7X2rh9hD338-TFCwJtgfD99yIRpcG3x-Fei8AVD4qPqnHsbEL7B1Ffgcwx7mZA5jUApOA0RyWOhR9rzHh5VY1FFl_hl5fx4oHhw2-pC08Fmrbt68of1-qiwCZqjx4W3cU67SSuW7nMW7JD2oSBNe1LiCinJv37UF2dNvAdBPnqZKHmIUkBRe-8V30EcBi0CgBiEmSVP805fTP84iraGj0rsb_C8XagCMeYNG2QBFWT1jX670TCRG5BHK-_rdAZ7RcBWL4CTUBjLJuHqOmBe17QrFlKu2rSeiq_KPFNth3g0CjSHVArkP9BAeATvfbOTD0tWitEU-OTNx-6zAejjRylfOpeQ_hqAOzOkjLCb4-rCEh_SxpzozNLMgYsMcTfyfCuw0jfnZi61FAxUq9QU_WhRczl3MoWensaR3jy90PKs-9hdgWwqaNi_avqiLDKRKkOj2hBx6ZrFtaY_L2sJm6ETi1pgGOh-3W8F8s5mryZNbQd0_cKhZDqSoCQVuoUggFKj2fRIZkrdvNlsi6P92hHOlsrvV2Apztc8VOvYLOj5PtRfvi0SzXOf16nATfh82wR-dhIAajPbLBHC7fu1k6fbgjYRoeq16VVDHDq4uo23gkpLhTauNifuh-C55JfE6JKf_M7_qp86MLOdgZk-bGY7rlHFGVyjhF0fpy0qxqS7ESsRm3hMHA=w3232-h1808-ft"
                  className="m-w-logo-image"
                />
                <img
                  src="https://lh3.googleusercontent.com/KHPWCQ76hqkibj5Eg4mSmVhnxJUcZERKfblCe3PD2s2fu_nlDBf8vvIhKeQIUr592aQ5QbSIyEOhQ08XsVIsXpq4O5KibZIYX-jyjnbDFnBdZkrqlo_Lnjp9A4Rd0X8k_eV9_9w4x6qokAy60mHXsskjDEjt0Ni7Eh3dWUB3T8rwkM0lgUbwHFMaYHBC7c0hj4nidIfGIVsk9GhhlLhkyFznrXVrkUq8udiLA40-IllmkfkSYszqYBJa6Ai1Q5OyND8pXWzsWzi8P22t3i-o72unUy7NUEN9dS1Ssj1nGdnh9KbVGjPvOBTG6Cym5eJ5JVvHgiUavP5cOPztQzAfk3Eh4Z0CudT0PZiCd_JxiTl1WVkZfk4HB-ZCvOTWN50kSLOb9X7npaM6FaTLrlDINy-JAoJIOYlzt6qXNhh8ikf3KWm1AHAryiMXGOrYxDAyVW4VaZJ5r-W2bz82u0Iui1Afcq_17tDPoxJYgq7uv9vNa7GfJH9ux33694EI88-rWEXSIwwoVLnuHzif0FrC1lC7n3J74gvAnLJP3936_3Qb94o0heGllaoCTJCy60gRaD7qPx6s76C8BeFng-2BoblaWGOrGrR_Mx_LNh-gce25QDMWhCtjwscTqaIEJWU6c72kgo9LmFZgJuluPIySN2LHadDxO1jliTwgwFzLRnw80JQUiN_fPCK-u2mtxogs1F8ong=w1660-h1808-ft"
                  className="m-w-logo-image-hover"
                />
              </div>
            </Link>
            <div className="authenticated-user-links">
              <Link className="nav-link" to={"/creators"}>
                Creators
              </Link>
              <Link className="nav-link" to={"/creations"}>
                Creations
              </Link>
              <Link className="nav-link" to={"/search"}>
                Search
              </Link>
            </div>
            <div className="session-links-container">
              <div className="session-logout-button">
                <button onClick={this.logoutUser}>Logout</button>
              </div>
            </div>
          </div>
        );
      }
    
    } else {
      return (
        <div className="navigation-container">
          <Link to={"/"}>
            <div className="m-w-logo-container">
              <img
                src="https://lh3.googleusercontent.com/CpSLsZPxX4uxfKQYf7X2rh9hD338-TFCwJtgfD99yIRpcG3x-Fei8AVD4qPqnHsbEL7B1Ffgcwx7mZA5jUApOA0RyWOhR9rzHh5VY1FFl_hl5fx4oHhw2-pC08Fmrbt68of1-qiwCZqjx4W3cU67SSuW7nMW7JD2oSBNe1LiCinJv37UF2dNvAdBPnqZKHmIUkBRe-8V30EcBi0CgBiEmSVP805fTP84iraGj0rsb_C8XagCMeYNG2QBFWT1jX670TCRG5BHK-_rdAZ7RcBWL4CTUBjLJuHqOmBe17QrFlKu2rSeiq_KPFNth3g0CjSHVArkP9BAeATvfbOTD0tWitEU-OTNx-6zAejjRylfOpeQ_hqAOzOkjLCb4-rCEh_SxpzozNLMgYsMcTfyfCuw0jfnZi61FAxUq9QU_WhRczl3MoWensaR3jy90PKs-9hdgWwqaNi_avqiLDKRKkOj2hBx6ZrFtaY_L2sJm6ETi1pgGOh-3W8F8s5mryZNbQd0_cKhZDqSoCQVuoUggFKj2fRIZkrdvNlsi6P92hHOlsrvV2Apztc8VOvYLOj5PtRfvi0SzXOf16nATfh82wR-dhIAajPbLBHC7fu1k6fbgjYRoeq16VVDHDq4uo23gkpLhTauNifuh-C55JfE6JKf_M7_qp86MLOdgZk-bGY7rlHFGVyjhF0fpy0qxqS7ESsRm3hMHA=w3232-h1808-ft"
                className="m-w-logo-image"
              />
              <img
                src="https://lh3.googleusercontent.com/KHPWCQ76hqkibj5Eg4mSmVhnxJUcZERKfblCe3PD2s2fu_nlDBf8vvIhKeQIUr592aQ5QbSIyEOhQ08XsVIsXpq4O5KibZIYX-jyjnbDFnBdZkrqlo_Lnjp9A4Rd0X8k_eV9_9w4x6qokAy60mHXsskjDEjt0Ni7Eh3dWUB3T8rwkM0lgUbwHFMaYHBC7c0hj4nidIfGIVsk9GhhlLhkyFznrXVrkUq8udiLA40-IllmkfkSYszqYBJa6Ai1Q5OyND8pXWzsWzi8P22t3i-o72unUy7NUEN9dS1Ssj1nGdnh9KbVGjPvOBTG6Cym5eJ5JVvHgiUavP5cOPztQzAfk3Eh4Z0CudT0PZiCd_JxiTl1WVkZfk4HB-ZCvOTWN50kSLOb9X7npaM6FaTLrlDINy-JAoJIOYlzt6qXNhh8ikf3KWm1AHAryiMXGOrYxDAyVW4VaZJ5r-W2bz82u0Iui1Afcq_17tDPoxJYgq7uv9vNa7GfJH9ux33694EI88-rWEXSIwwoVLnuHzif0FrC1lC7n3J74gvAnLJP3936_3Qb94o0heGllaoCTJCy60gRaD7qPx6s76C8BeFng-2BoblaWGOrGrR_Mx_LNh-gce25QDMWhCtjwscTqaIEJWU6c72kgo9LmFZgJuluPIySN2LHadDxO1jliTwgwFzLRnw80JQUiN_fPCK-u2mtxogs1F8ong=w1660-h1808-ft"
                className="m-w-logo-image-hover"
              />
            </div>
          </Link>
          <div className="session-links-container">
            <div className="session-link signup">
              <Link to={"/signup"}>Signup</Link>
            </div>
            <div className="session-text">or</div>
            <div className="session-link login">
              <Link to={"/login"}>Login</Link>
            </div>
          </div>
        </div>
      );
    }
  }

  render() {
    return (
      <nav>
        <div className="navigation-anchor">
          <div className="navigation-wrapper">
            {this.getLinks()}
          </div>
        </div>
      </nav>
    );
  }
}

export default NavBar;
