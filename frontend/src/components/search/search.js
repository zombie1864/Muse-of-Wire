import React from 'react';
import ReactPlayer from 'react-player'
import { withRouter } from "react-router-dom";

class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedCollection: "",
      query: "",
      // results: this.props.results,
      errors: this.props.errors
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.clearedErrors = false;
    this.renderModal = this.renderModal.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    // if (nextProps.signedIn === true) {
    //   this.props.history.push("/");
    // }
    this.setState({ 
      errors: nextProps.errors,
      results: nextProps.results
      // results: (nextProps.imageResults + nextProps.videoResults)
      });
  }

  componentDidUpdate() {
    this.renderModal();
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

    if (this.props.results && this.props.results.length > 0) {
      let testObject = this.props.results.slice(0, 1)[0];
      if (testObject.imageUrl !== undefined){
        return (
          <>
          <ul className="rendered-results-list">
            {this.props.results.map((result, i) => (
            <li className="rendered-result" key={`result-${i}`}>
              <div className="spacer-div-search">
                <div className="search-result-image-container">
                  <img 
                    className="search-result-image images" 
                    src={result.imageUrl} 
                    alt={result.description}
                  />
                </div>
              </div>
              <div className="search-result-title">
                {result.title}
              </div>
            </li>
            ))}
          </ul>
          </>
        );
      } else if (testObject.videoUrl !== undefined){
        return (
          <ul className="rendered-results-list">
            {this.props.results.map((result, i) => (
              <li className="rendered-result" key={`result-${i}`}>
                <div className="spacer-div-search">
                  <div className="search-result-image-container">
                    <ReactPlayer
                      className="search-result-video"
                      url={result.videoUrl}
                    />
                  </div>
                </div>
                <div className="search-result-title">
                  {result.title}
                </div>
              </li>
            ))}
          </ul>
        );
      }
    }
  }

  renderErrors() {
    return (
      <ul className="rendered-errors-list">
        {this.props.errors.map((error, i) => (
          <li className="rendered-error" key={`error-${i}`}>
            {this.props.errors[error]}
          </li>
        ))}
      </ul>
    );
  }

  renderModal() {
    const modal = document.getElementById('imgModal');
    const images = document.getElementsByClassName('images');
    const modalImg = document.getElementById("modal-image");
    const captionText = document.getElementById("caption");

    for (let i = 0; i < images.length; i++) {
      const img = images[i];
      img.onclick = function (e) {
        console.log(e);
        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;

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

  render() {
    return (
      <main>
        <div className="body-container search-background-image">
          <div className="body-inner-container-center-and-sidebar">
            <div className="body-center-container body-search-container">

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
                      {/* <label className="radio-button-container">
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
                      </label> */}
                    </div>
                    <div id="imgModal" className="modal">
                      <span className="close">x</span>
                      <img className="modal-content" id="modal-image" />
                      <div id="caption" ></div>
                    </div>
                    <input
                      className="session-form-input-field search-input-field"
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
                <div className="search-results-container">
                  {this.renderSearchResults()}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    );
  }
}

export default withRouter(Search);