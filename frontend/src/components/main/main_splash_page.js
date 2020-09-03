import React from "react";
import ReactPlayer from "react-player";
import { Link } from "react-router-dom";
import Footer from "../footer/footer";

class MainSplashPage extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      slideIndex: 0,
      textSlides: [
        'Connecting the world to a vital Artistic community',
        'Innovative performance venues',
        'Virtual galleries',
        'MUSE OF WIRE exploits digital age tools to conquer digital age isolation',
        'Sign up to become a member',
        'Student memberships with curated content',
        'Become a creator and share your Art',
        'Meet and collaborate with worldwide talent',
        'Support emerging artists',
        'Discover your next passion'
      ],
      currentSlide: "",
      slideTimer: "",
      fadeTimer: ""
    }

  };
  
  advanceSlide = () => {
    const { slideIndex } = this.state;
    this.setState( {
      slideIndex: slideIndex + 1,
      currentSlide: this.state.textSlides[this.state.slideIndex % this.state.textSlides.length]
    })
  }

 fadeSlide = () => {
    let el = document.getElementById("splash-site-description");
    el.classList.toggle("faded-out");
}

  componentDidMount() {
    this.advanceSlide();
    this.slideTimer = setInterval(this.advanceSlide, 6000);
    this.fadeTimer = setInterval(this.fadeSlide, 3000);
  };

  componentWillUnmount() {
    clearInterval(this.slideTimer);
    clearInterval(this.fadeTimer);
  }


  render() {

    return (
      <main>
        <div className="body-container splash-background-image">
          <div className="body-inner-container-center-and-sidebar">
            <div className="splash-muse-of-wire-logo-container">
              <img
                className="muse-of-wire-logo"
                src="https://lh3.googleusercontent.com/L4HLdfILkS8WL1rokMGgCgifkkA37b8sYIT98gEz3lH5O5ReVTUF-izTtbMnc4kudQDWigqIFRYdKwqLUW2xbC3MJah9LAlcCO00coFLjROLkmcnwWBpnvWcoq9tSezKV4h5_9YK_OBso4U9IXZ7G9eHpJ9fazezSb26-dlO5DS9B0UX9DSGQHXxg5lkN6IdfdAmjsHcAm-JSeprKGlj-G3eIW9FsJYkdf1BVUp7uJ3a-2el9GOs4zm4aCF1CCezB2wsm91PBUebSLrsmiuYDWawHZeRI8wd0AqabborOyJMolbG3EFQoPe91dGbekA00YDsXnMXnSkEhbf3J52AllcL-sVHQW3ARD2ArOkw2VR2LKISxVgW5nMe68iiBD4sfA_HPL62IKoIDVEUqJpPRMYGw7PraWXjE37y0lpWvKWKp-9Fh7eexI5YZNWdPSM77fuROFoPq38kQXklZl9dnmCupRcF_f_0e1yeZr2OeW2dKVDbATJc_bP58xd5mkiHrymQp-by6ib_6T1Rdy3c0QToHuOZnzvRDCnp_10rZ1kjVtM-OSraa_-YBgvkJY8ZbFkKCyzLfAnviAYytDjQl-ztTZz-f-w3hOk4f1K2Fg6Q_3zLvIXJi6f3fCF6FCipw6DiPMCAn1WlMxwsc6Ty2zF2vOwOr82fNmWacux9sJ02mehAHZ9LUxTjfNjGlBbTJ8sw1w=w3232-h1808-ft"
              />
            </div>
            <div className="splash-image-container">
              <Link to="/login">
                <div id="splash-site-description">
                  {this.state.currentSlide}
               </div>
                <img
                  className="splash-image"
                  src="https://images.pexels.com/photos/1781710/pexels-photo-1781710.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                />
              </Link>
            </div>
            <div className="splash-video-container">
              <ReactPlayer
                className="splash-page-video"
                url="https://www.youtube.com/watch?v=2LNiJK3rK9s"
                width="100%"
                height="100%"
              />
            </div>
            <Footer />
          </div>
        </div>
        {/* <div></div> */}
      </main>
    );
  }
}

export default MainSplashPage;
