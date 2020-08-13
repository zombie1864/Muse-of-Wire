import React from "react";
import { withRouter } from "react-router-dom";

class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      errors: {},
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.currentUser === true) {
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
      password: this.state.password,
    };
    this.props.login(user);
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
        <form className="session-form login" onSubmit={this.handleSubmit}>
          <div>
            <input
              className="session-form-input-field"
              type="text"
              value={this.state.email}
              onChange={this.update("email")}
              placeholder="Email"
            />
          </div>
          <div>
            <input
              className="session-form-input-field"
              type="password"
              value={this.state.password}
              onChange={this.update("password")}
              placeholder="Password"
            />
          </div>
          <div>
            <input
              className="session-form-submit-button"
              type="submit"
              value="Submit"
            />
          </div>
          {this.renderErrors()}
        </form>
        <div className="demo-button-container">
          <button className="demo-button"
            onClick={() => {
              this.props.demoLogin(this.props.demoStudent);
            }}>
            Student Demo Sign In
          </button>
        </div>
        <div className="demo-button-container">
          <button className="demo-button"
            onClick={() => {
              this.props.demoLogin(this.props.demoPerformer);
            }}>
            Performer Demo Sign In
          </button>
        </div>
        <div className="demo-button-container">
          <button className="demo-button"
            onClick={() => {
              this.props.demoLogin(this.props.demoMember);
            }}>
            Member Demo Sign In
          </button>
        </div>
        <img
          src="https://lh3.google.com/u/0/d/1ivkXBSqV--ySA-0-KYwEv7k5hDIKKfK0=w3078-h1564-iv1"
          width="630"
          height="420"
        />
        <img
          src="https://lh3.google.com/u/0/d/1AWNT1KaKvkVcHsVTPpuqIgF9m5UZICBZ=w3078-h1564-iv1"
          width="630"
          height="420"
        />
        <img
          src="https://lh3.google.com/u/0/d/1vXsJHmfv-kPQWh0XRA1QXz5IjygNRYiY=w3078-h1564-iv1"
          width="630"
          height="420"
        />
      </div>
    );
  }
}

export default withRouter(LoginForm);
