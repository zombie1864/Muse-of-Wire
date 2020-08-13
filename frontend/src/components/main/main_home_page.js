import React from 'react';
import ReactPlayer from "react-player";
// import { Link } from 'react-router-dom';

class MainHomePage extends React.Component {

  constructor(props) {
    super(props);
    this.renderModal = this.renderModal.bind(this);
  };

  componentDidMount() {
    this.renderModal();
  }

  renderModal() {
    const modal = document.getElementById('imgModal');
    const images = document.getElementsByClassName('images');
    const modalImg = document.getElementById("modal-image");

    for (let i = 0; i < images.length; i++) {
      const img = images[i];
      img.onclick = function (e) {
        console.log(e);
        modal.style.display = "block";
        modalImg.src = this.src;

        document.body.style.overflow = "hidden";
        document.body.style.height = "100%";
      }
    }

    const span = document.getElementsByClassName("close")[0];

    span.onclick = function () {
      modal.style.display = "none";
      document.body.style.overflow = "auto";
      document.body.style.height = "auto"; 
    }

    modalImg.onclick = function () {
      modal.style.display = "none";
      document.body.style.overflow = "auto";
      document.body.style.height = "auto";
    }
  }
  

  renderStudentContent() {
    return (
      <div className="main-home-container">
        <div className="main-home-background">
          {this.renderWelcome()}
          <div>
            <img
              className="images"
              src="https://images.unsplash.com/photo-1492037766660-2a56f9eb3fcb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"
              
            />
          </div>
          <div id="imgModal" className="modal">
            <span className="close">x</span>
            <img className="modal-content" id="modal-image" />
          </div>
          <div>
            <ReactPlayer
              className="images"
              url="https://www.youtube.com/watch?v=V-_GUXIBUiQ"
              width="720px"
              height="460px"/>
          </div>
          <div>
            <img
              className="images"
              src="https://mixkit.imgix.net/art/preview/mixkit-small-car-parked-in-front-of-a-building-with-a-364-desktop-wallpaper-medium.png?w=390&h=219&q=80&auto=format%2Ccompress&q=50&dpr=2"
              
            />
          </div>
          <div>
            <ReactPlayer
              className="react-player"
              url="https://www.youtube.com/watch?v=qyKXw24JX5g"
              width="720px"
              height="460px"
            />
          </div>
          <div>
            <img
              className="images"
              src="https://mixkit.imgix.net/art/preview/mixkit-cat-using-chopsticks-to-eat-a-bowl-of-ramen-240-desktop-wallpaper-medium.png?w=390&h=219&q=80&auto=format%2Ccompress&q=50&dpr=2"
              width="630"
              height="420"
            />
          </div>
          <div>
            <ReactPlayer
              className="react-player"
              url="https://www.youtube.com/watch?v=D3UW218_zPo"
              width="720px"
              height="460px"
            />
          </div>
          <div>
            <img
              className="images"
              src="https://image.freepik.com/free-photo/venice-canal-with-tourist-gondola_49537-57.jpg"
              
            />
          </div>
          <div>
            <ReactPlayer
              className="react-player"
              url="https://www.youtube.com/watch?v=HOlTsQgoji4"
              width="720px"
              height="460px"
            />
          </div>
        </div>
      </div>
    );
  }

  renderPerformerContent() {
    return (
      <div className="main-home-container">
        <div className="main-home-background">
          <div className="main-content-container">
            {this.renderWelcome()}
            <div>
              <img
                className="images"
                src="https://i.pinimg.com/originals/e8/66/c6/e866c6b5db3cd3bc9ac19532e8ad58f0.jpg"
              />
            </div>
            <div id="imgModal" className="modal">
              <span className="close">x</span>
              <img className="modal-content" id="modal-image" />
            </div>
            <div>
              <ReactPlayer
                className="react-player"
                url="https://www.youtube.com/watch?v=0krINr-smMM"
                width="720px"
                height="460px"
              />
            </div>
            <div>
              <img
                className="images"
                src="https://images.unsplash.com/photo-1553344518-c44926bebaa7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1653&q=80"
              />
            </div>
            <div>
              <ReactPlayer
                className="react-player"
                url="https://www.youtube.com/watch?v=nk0WgXgBHbY"
                width="720px"
                height="460px"
              />
            </div>
            <div>
              <img
                className="images"
                src="https://images.pexels.com/photos/1194420/pexels-photo-1194420.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
              />
            </div>
            <div>
              <ReactPlayer
                className="react-player"
                url="https://www.youtube.com/watch?v=f504Kx2XG-I"
                width="720px"
                height="460px"
              />
            </div>
            <div>
              <img
                className="images"
                src="https://images.pexels.com/photos/414860/pexels-photo-414860.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
              />
            </div>
            <div>
              <ReactPlayer
                className="react-player"
                url="https://www.youtube.com/watch?v=XpKlYeveS3Q"
                width="720px"
                height="460px"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }

  renderMemberContent() {
    return (
      <div className="main-home-container">
        {this.renderWelcome()}
        <div>
          <img
            className="images"
            src="https://i.pinimg.com/originals/e8/66/c6/e866c6b5db3cd3bc9ac19532e8ad58f0.jpg"
          />
        </div>
        <div id="imgModal" className="modal">
          <span className="close">x</span>
          <img className="modal-content" id="modal-image" />
        </div>
        <div>
          <ReactPlayer
            className="react-player"
            url="https://www.youtube.com/watch?v=0krINr-smMM"
            width="720px"
            height="460px"
          />
        </div>
        <div>
          <img
            className="images"
            src="https://images.unsplash.com/photo-1492037766660-2a56f9eb3fcb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"
          />
        </div>
        <div>
          <ReactPlayer
            className="react-player"
            url="https://www.youtube.com/watch?v=V-_GUXIBUiQ"
            width="720px"
            height="460px"
          />
        </div>
        <div>
          <img
            className="images"
            src="https://images.unsplash.com/photo-1553344518-c44926bebaa7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1653&q=80"
          />
        </div>
        <div>
          <ReactPlayer
            className="react-player"
            url="https://www.youtube.com/watch?v=nk0WgXgBHbY"
            width="720px"
            height="460px"
          />
        </div>
        <div>
          <img
            className="images"
            src="https://mixkit.imgix.net/art/preview/mixkit-small-car-parked-in-front-of-a-building-with-a-364-desktop-wallpaper-medium.png?w=390&h=219&q=80&auto=format%2Ccompress&q=50&dpr=2"
          />
        </div>
        <div>
          <ReactPlayer
            className="react-player"
            url="https://www.youtube.com/watch?v=qyKXw24JX5g"
            width="720px"
            height="460px"
          />
        </div>
      </div>
    );
  }

  renderWelcome() {
    const { email, status } = this.props.currentUser;
    return (
      <div className="welcome-container">
        <h3 className="welcome-email">{`Welcome ${email}!`}</h3>
        <p className="welcome-status">
          Enjoy your personalized feed, exclusively for 
          <span className="status-feed">{` ${status}s!`}</span>
        </p>
      </div>
    );
  }


  render() {
    const { status } = this.props.currentUser

    return (
      status === "member" ?
      this.renderMemberContent() :
        status === "student" ?
        this.renderStudentContent() :
        this.renderPerformerContent()
    );
  }
}

export default MainHomePage;