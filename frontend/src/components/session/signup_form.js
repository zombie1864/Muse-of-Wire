import React from "react";
import { withRouter } from "react-router-dom";

class SignupForm extends React.Component {
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

  componentWillReceiveProps(nextProps) {
    if (nextProps.signedIn === true) {
      this.props.history.push("/");
    }

    
    this.setState({ errors: nextProps.errors });
  }

  update(field) {
    return (e) =>
      this.setState({
        [field]: e.currentTarget.value,
      });
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
      <div>
      <form className="session-form signup" onSubmit={this.handleSubmit}>
        <div>
          <input
            className="session-form-input-field"
            type="text"
            value={this.state.email}
            onChange={this.update("email")}
            placeholder="Email"
          />
          <div>
              <label>
                <input
                  type="radio"
                  className="session-form-radio-selector"
                  name="account-status"
                  value="performer"
                  checked={this.state.selectedStatus === "performer"}
                  onChange={this.update("selectedStatus")}
                />
                Performer
              </label>
            </div>
            <div>
              <label>
                <input
                  type="radio"
                  className="session-form-radio-selector"
                  name="account-status"
                  value="student"
                  checked={this.state.selectedStatus === "student"}
                  onChange={this.update("selectedStatus")}
                />
                Student
              </label>
            </div>
            <div>
              <label>
                <input
                  type="radio"
                  className="session-form-radio-selector"
                  name="account-status"
                  value="member"
                  checked={this.state.selectedStatus === "member"}
                  onChange={this.update("selectedStatus")}
                />
                Member
              </label>
            </div>
            <input
              className="session-form-input-field"
              type="password"
              value={this.state.password}
              onChange={this.update("password")}
              placeholder="Password"
            />
            <input
              className="session-form-input-field"
              type="password"
              value={this.state.password2}
              onChange={this.update("password2")}
              placeholder="Confirm Password"
            />
            <input type="submit" value="Submit" />
            {this.renderErrors()}
          </div>
        </form>
        <img src='https://lh3.google.com/u/0/d/1kYbYz7q2qiOyDO9cTTMrVlEvu71s9z4k=w1627-h893-iv1' width = '630' height = '420'/>
        <img src='https://lh3.google.com/u/0/d/1EW9SXfumD1K3fOulIFsuNZjSWs5IyGVU=w1627-h893-iv1' width = '630' height = '420'/>
        <img src='https://images.pexels.com/photos/1081685/pexels-photo-1081685.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260' width = '630' height = '420'/>
      </div>
    );
  }
}

export default withRouter(SignupForm);
