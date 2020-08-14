import React from "react";
import { Link } from "react-router-dom";

class Footer extends React.Component {
  constructor(props){
    super(props)
    
    this.developers = [
      "Jeff Varela",
      "Rob Kornblum",
      "Matthew Greer"
    ];
  
    // this.shuffle() = this.shuffle.bind(this);
    // this.renderDevelopers() = this.renderDevelopers.bind(this);
  };

  shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  renderDevelopers() { 
    let developerOrder = this.shuffle(this.developers);
    return(
      <div className="developer-names">
        {developerOrder[0]}, 
        &nbsp;{developerOrder[1]}, 
        &nbsp;{developerOrder[2]}
      </div>
    )
  };
    

  render() {
    return(
      <footer>
        <div className="footer-container">
          <div className="copywright">
            Copywright &copy; 2020
          </div>
          {this.renderDevelopers()}
          <div className="site-github-repo">
            <Link to="https://github.com/zombie1864">Github Repo</Link>
          </div>
        </div>
      </footer>
    )
  };
}

export default Footer;