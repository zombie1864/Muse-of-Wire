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
  
  };

  shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  };

  renderDevelopers() { 
    const developerOrder = shuffle(this.developers)
    return(
      <div className="developer-names">
        {developerOrder[0]}, 
        {developerOrder[1]}, 
        {developerOrder[2]}
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
          {renderDevelopers()}
          <div className="site-github-repo">
            <Link to="https://github.com/zombie1864">Github Repo</Link>
          </div>
        </div>
      </footer>
    )
  };
}

export default Footer;