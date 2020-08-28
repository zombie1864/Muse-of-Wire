import React from 'react';
import { withRouter } from "react-router-dom";

class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedCollection: "",
      query: "",
      results: {},
      errors: {}
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.clearedErrors = false;
  }

  componentWillReceiveProps(nextProps) {
    // if (nextProps.signedIn === true) {
    //   this.props.history.push("/");
    // }

    this.setState({ errors: nextProps.errors });
  }

  update(field) {
    return (e) => {
      if (this.props.errors) this.props.clearSearchErrors();
      this.setState({
        [field]: e.currentTarget.value,
      });
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    let searchData = {
      query: this.state.query, 
      currentUser: this.props.currentUser
    };
    if (this.state.selectedCollection === "image") {
      debugger
      // this.props.searchImages(searchData) // TESTING PURPOSES
        this.setState({
          results: this.props.searchImages(searchData)
        })
    } else if (this.state.selectedCollection === "video") {
        this.setState({
          results: this.props.searchVideos(searchData)
        })
    } 
    // else if (this.state.selectedCollection === "user") {
    //   this.setState({
    //     results: this.props.searchUsers(query)
    //   })
    // } 
    else {
      // this is a brutish way of handling the error case, and as yet
      //   doesn't clear upon update
        this.setState({
          errors: {search: "You must select a category."}
        });
    }

  }

  renderSearchResults() {
    return (
      <ul className="rendered-results-list">
        {Object.keys(this.state.results).map((result, i) => (
          <li className="rendered-result" key={`result-${i}`}>
            {this.state.results[result]}
          </li>
        ))}
      </ul>
    );
  }

  renderErrors() {
    return (
      <ul className="rendered-errors-list">
        {Object.keys(this.state.errors).map((error, i) => (
          <li className="rendered-error" key={`error-${i}`}>
            {this.state.errors[error]}
          </li>
        ))}
      </ul>
    );
  }



  render() {
    return (
      <main>
        <div className="body-container search-background-image">
          <div className="body-inner-container-center-and-sidebar">
            <div className="body-center-container">
              <div className="search-results-container">
                {this.renderSearchResults()}
              </div>
              <div className="session-container search-session">
                <form onSubmit={this.handleSubmit}>
                  <div className="session-form">

                    <div className="search-selectors">
                      <label className="radio-button-container">
                        <input
                          type="radio"
                          className="session-form-radio-selector"
                          name="collection"
                          value="image"
                          checked={this.state.selectedCollection === "image"}
                          onChange={this.update("selectedCollection")}
                        />
                        <span className="radio-button-selector-disc"></span>
                        Image
                      </label>
                      <label className="radio-button-container">
                        <input
                          type="radio"
                          className="session-form-radio-selector"
                          name="collection"
                          value="video"
                          checked={this.state.selectedCollection === "video"}
                          onChange={this.update("selectedCollection")}
                        />
                        <span className="radio-button-selector-disc"></span>
                        Video
                      </label>
                      <label className="radio-button-container">
                        <input
                          type="radio"
                          className="session-form-radio-selector"
                          name="collection"
                          value="user"
                          checked={this.state.selectedCollection === "user"}
                          onChange={this.update("selectedCollection")}
                        />
                        <span className="radio-button-selector-disc"></span>
                        User
                      </label>
                    </div>
                    
                    <input
                      className="session-form-input-field"
                      type="text"
                      value={this.state.query}
                      onChange={this.update("query")}
                      placeholder="Choose category and enter search terms"
                    />
                    <input
                      className="session-submit-button"
                      type="submit"
                      value="Search"
                    />
                    {this.renderErrors()}
                  </div>
                </form> 
              </div>
            </div>
          </div>
        </div>
      </main>
    );
  }
}

export default withRouter(Search);