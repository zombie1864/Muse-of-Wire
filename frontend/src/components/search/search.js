import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedCollection: "",
      query: "",
      errors: {},
    };

    // this.props.searchImages = this.props.searchImages.bind(this);
    // this.props.searchVideos = this.props.searchVideos.bind(this);
    // this.props.searchUsers = this.props.searchUsers.bind(this);
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
    debugger
    let query = this.state.query;
    if (this.state.selectedCollection === "image") {
        this.props.searchImages(query, this.props.history);
    } else if (this.state.selectedCollection === "video") {
        this.props.searchVideos(query, this.props.history);
    } else if (this.state.selectedCollection === "user") {
        this.props.searchUsers(query, this.props.history);
    } else {
        this.setState({
          errors: {search: "You must select a category."}
        });
    }
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

export default Search;