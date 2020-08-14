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
    this.renderModal = this.renderModal.bind(this);
    this.clearedErrors = false;
  }

  componentDidMount() {
    this.renderModal();
  }

  renderModal() {
    const modal = document.getElementById('imgModal');
    const images = document.getElementsByClassName('images');
    const modalImg = document.getElementById("modal-image");

    for (let i = 0; i < images.length; i++) {
      const img = images[i];
      img.onclick = function (e) {
        console.log(e);
        modal.style.display = "block";
        modalImg.src = this.src;

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
        <div className="body-container signup-background-image">
          <div className="body-inner-container-center-and-sidebar">
            <div className="body-center-container">
              <div className="session-container signup-session">
                <form onSubmit={this.handleSubmit}>
                  <div className="session-form">
                    <input
                      className="session-form-input-field"
                      type="text"
                      value={this.state.email}
                      onChange={this.update("email")}
                      placeholder="Email"
                    />
                    <div>
                      <label className="radio-button-container">
                        <input
                          type="radio"
                          className="session-form-radio-selector"
                          name="account-status"
                          value="performer"
                          checked={this.state.selectedStatus === "performer"}
                          onChange={this.update("selectedStatus")}
                        />
                        <span className="radio-button-selector-disc"></span>
                        Performer
                      </label>
                    </div>
                    <div>
                      <label className="radio-button-container">
                        <input
                          type="radio"
                          className="session-form-radio-selector"
                          name="account-status"
                          value="student"
                          checked={this.state.selectedStatus === "student"}
                          onChange={this.update("selectedStatus")}
                        />
                        <span className="radio-button-selector-disc"></span>
                        Student
                      </label>
                    </div>
                    <div>
                      <label className="radio-button-container">
                        <input
                          type="radio"
                          className="session-form-radio-selector"
                          name="account-status"
                          value="member"
                          checked={this.state.selectedStatus === "member"}
                          onChange={this.update("selectedStatus")}
                        />
                        <span className="radio-button-selector-disc"></span>
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
                    <input
                      className="session-submit-button"
                      type="submit"
                      value="Submit"
                    />
                    {this.renderErrors()}
                  </div>
                </form>
                <div className="demo-user-buttons-container">
                  <div className="demo-button-container">
                    <button
                      className="demo-button"
                      onClick={() => {
                        this.props.demoLogin(this.props.demoStudent);
                      }}
                    >
                      Student Demo Sign In
                    </button>
                  </div>
                  <div className="demo-button-container">
                    <button
                      className="demo-button"
                      onClick={() => {
                        this.props.demoLogin(this.props.demoPerformer);
                      }}
                    >
                      Performer Demo Sign In
                    </button>
                  </div>
                  <div className="demo-button-container">
                    <button
                      className="demo-button"
                      onClick={() => {
                        this.props.demoLogin(this.props.demoMember);
                      }}
                    >
                      Member Demo Sign In
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="sidebar-container">
              <div className="sidebar-image">
                <img
                  className="images"
                  src="https://lh3.googleusercontent.com/QNWyV9Cw46FbYCsjY31_iAjWzZn9zRKhXBAqN6q4RmpwYSwl0D2Nvt1-4lBwYbrPGbNCI6Vg3IIXiauLc90Ltm_g1-tLur-dQScjxC3ypERlI7xxmF4ydpsMTT6US14lWiq7UBKbk7gcyh0wUUodP63Y7uDJimMGnEdPh9pSsivYoyRs7FylqqeEianpZVVFRRAM4Azkub93NDlYMvp9kKaTVnklnwuCrRVoCdSH4wQjzMUviq4zM1kKpnoOjM6Vbf_X43CAHE7M7o17o3gLZX4qZ6H6bxRXDRYUpGCfZG1vuX_VQYAq_xADxSSKBBLiwLtL-ZltyJUfGBVBDfY1ql1iGmF_K-RbQj1Gp49x9pHCsURSlMCjcWYzYNX00Cs-5vhQVX0qu8mTAeIH-ruhVDOfq85kpHHuzHSApaJlsBTjDnLv_dWVu0O0l_XULwKWyN6fU5L1usTwM-Mjowzub8N_kPfPcPTD92bdafYOIpi0yqfZIIp6vgZvTDLB_U_MsrDWY5llzuLMANxctBD3dwSZAJWhS-m_iXkoFhCcw5IkO_4z4BYCUexj4te6T-b2DHiWL1X66PaJPxri11scXYblL6fHklH8G58B6YatCANjWYv0zBAK3DNmh92VLwwXMA7tHPOGu_bjW7fhvaAKb3lzt-Bd9AXwC8cVJF0zsAnXQuEOrfoa9DmzqVQdgJfdC66S2w=w1834-h1776-ft"
                />
              </div>
              <div className="sidebar-image">
                <img
                  className="images"
                  src="https://lh3.googleusercontent.com/TLrRGw-BJoYdUPuH9i02L9GU8xS4L8bQ90d4ECU5zG86hMAb9pqL6Jd3LUMGQgfqN6lQK3tLdMzBfGBHaVm0JjZkGCiIqf8FmEcKByl6UOhNzxOz-lR_hwMk7mgEWFX9qVsOGIY6TVkqRBX8HstwU-aAZrBok3ofrEBynknofxGfUMXHERu67FsMkoIG0P6CHnXMYWdTcN6bRKkoFEGFKXhlguztRPqjWYE0aUcHj81NJ0XULX6B_CH6QjB8e1bZu7UV-Qtpi_btw_T4SzVP-SCoHHw8NwVxvorQ4JMqIOltUAvClLeQe3K7QpDkzCuyuxttU2jnciaIhiedp88vEaiOVdsPzbLDXdI49gvzjt4HTBjjxGqF7UkdU4YTFuM1pMhXpCbwFbDsNIZ2FYCKp1t_X5fEcWlc9EZ89ZtcwGdaI0mFQvMCgw2lXFdWtp3SfibR3okrMNX6F7R4h1Vk1tiygjErcYR4Lt8uWG6AvZkTWQ6YTC6WhhD80gex082txjOu7MkRZ4ZsVORnMyQgRkyImFItvh5-KAtpBqC4Wvm3Vlv5ROyq4KxDwRLhLdAgxzBrtY6gnLsU7uwxTSp3PedAzbXPVzNv-_q1-2rO_Y08AJBm8ukDSbP5Z805nL9-lCH9taBISm14C4AoIS-nQqXACWIe8va2o7d1LNXei2yg7qV_I_i4dzaYRJ5O2tCgisUbJA=w1834-h1776-ft"
                />
              </div>
              <div className="sidebar-image">
                <img
                  className="images"
                  src="https://images.pexels.com/photos/1081685/pexels-photo-1081685.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
                />
              </div>
              <div id="imgModal" className="modal">
                <span className="close">x</span>
                <img className="modal-content" id="modal-image" />
              </div>
            </div>
          </div>
        </div>
      </main>
    );
  }
}

export default withRouter(SignupForm);
