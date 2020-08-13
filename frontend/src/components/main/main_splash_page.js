import React from "react";
import ReactPlayer from "react-player";
import { Link } from "react-router-dom";

class MainSplashPage extends React.Component {
  render() {
    return (
      <main>
        <div className="body-container splash-background-image">
          <div className="splash-muse-of-wire-logo-container">
            <img
              className="muse-of-wire-logo" 
              src="https://lh3.google.com/u/0/d/1fPkEaNX-8lq4ZTFKtzbKyEJbWLsSbzxq=w3208-h1808-iv1" 
            />
          </div>
          <div className="splash-image-container">
            <Link to="/hello">
              <img
                className="splash-image"
                src="https://images.pexels.com/photos/1781710/pexels-photo-1781710.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              />
            </Link>
          </div>
          <div className="splash-video-container">
            <ReactPlayer
              className="react-player"
              url="https://www.youtube.com/watch?v=2LNiJK3rK9s"
              width="100%"
              height="100%"
            />
          </div>
        </div>
        <div></div>
      </main>
    );
  }
}

export default MainSplashPage;
