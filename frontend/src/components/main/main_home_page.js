import React from 'react';
// import { Link } from 'react-router-dom';

class MainHomePage extends React.Component {

  constructor(props) {
    super(props)
  };

  render() {
    // debugger

    return (
      <div>

        <h3>
          {`Welcome ${this.props.currentUser.email}!`}
        </h3>
        <p>
          {`You are currently signed in as a ${this.props.currentUser.status}`}
        </p> 

 

      </div>
    )
  }

}

export default MainHomePage;