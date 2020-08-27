import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      selectedStatus: "",
      password: "",
      password2: "",
      errors: {},
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.clearedErrors = false;
  }

  // not entirely sure what this does
  componentWillReceiveProps(nextProps) {
    if (nextProps.signedIn === true) {
      this.props.history.push("/");
    }

    this.setState({ errors: nextProps.errors });
  }

  update(field) {
    return (e) => {
      if (this.props.errors) this.props.clearErrors();
      this.setState({
        [field]: e.currentTarget.value,
      });
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    let user = {
      email: this.state.email,
      status: this.state.selectedStatus,
      password: this.state.password,
      password2: this.state.password2,
    };
    this.props.signup(user, this.props.history);
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
                <form>
                  <div className="session-form">

                    <div className="search-selectors">
                      <label className="radio-button-container">
                        <input
                          type="radio"
                          className="session-form-radio-selector"
                          name="collection"
                          value="image"
                          // checked={this.state.selectedStatus === "performer"}
                          // onChange={this.update("selectedStatus")}
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
                          // checked={this.state.selectedStatus === "student"}
                          // onChange={this.update("selectedStatus")}
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
                          // checked={this.state.selectedStatus === "member"}
                          // onChange={this.update("selectedStatus")}
                        />
                        <span className="radio-button-selector-disc"></span>
                        User
                      </label>
                    </div>
                    
                    <input
                      className="session-form-input-field"
                      type="text"
                      placeholder="Search coming soon"
                    />
                    <input
                      className="session-submit-button"
                      type="submit"
                      value="Search"
                    />
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