import React from 'react';
import ReactPlayer from "react-player";
// import { Link } from 'react-router-dom';

class MainHomePage extends React.Component {

  constructor(props) {
    super(props)
  };

  renderStudentContent() {
    return (
      <div>
        {this.renderWelcome()}
        <p>
          {`Enjoy these wonderful works of art, specifically tailored for 
            ${this.props.currentUser.status}s like you!`}
        </p>
        <div>
          <img
            src="https://images.unsplash.com/photo-1492037766660-2a56f9eb3fcb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"
            width="630"
            height="420"
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
      </div>
    );
  }

  renderPerformerContent() {
    return (
      <div>
        {this.renderWelcome()}
        <p>
          {`Enjoy these wonderful works of art, specifically tailored for 
            ${this.props.currentUser.status}s like you!`}
        </p>
        <div>
          <img
            src="https://images.unsplash.com/photo-1553344518-c44926bebaa7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1653&q=80"
            width="630"
            height="420"
          />
        </div>
        <div>
          <ReactPlayer
            className="react-player"
            url="https://www.youtube.com/watch?v=0krINr-smMM"
            width="720px"
            height="460px"
          />
        </div>
      </div>
    );
  }

  renderMemberContent() {
    return (
      <div>
        {this.renderWelcome()}
        <p>
          {`Enjoy these wonderful works of art, specifically tailored for 
            ${this.props.currentUser.status}s like you!`}
        </p>
        <div>
          <img
            src="https://images.unsplash.com/photo-1553344518-c44926bebaa7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1653&q=80"
            width="630"
            height="420"
          />
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
            src="https://images.unsplash.com/photo-1492037766660-2a56f9eb3fcb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"
            width="630"
            height="420"
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
      </div>
    );
  }

  renderWelcome() {
    const { email, status } = this.props.currentUser;
    return (
      <div className="welcome-container">
        <h3 className="welcome-email">
          {`Welcome ${email}!`}
        </h3>
        <p className="welcome-status">
          {`You are currently signed in as a ${status}`}
        </p>
      </div>
    )
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