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
      <main>
        <div className="body-container login-background-image">
          <div className="body-inner-container-center-and-sidebar">
            <div className="body-center-container">
              <div className="session-container login-session">
                <form onSubmit={this.handleSubmit}>
                  <div className="session-form">
                    <input
                      className="session-form-input-field"
                      type="text"
                      value={this.state.email}
                      onChange={this.update("email")}
                      placeholder="Email"
                    />
                    <input
                      className="session-form-input-field"
                      type="password"
                      value={this.state.password}
                      onChange={this.update("password")}
                      placeholder="Password"
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
                    className="session-form-image"
                    src="https://lh3.googleusercontent.com/fife/ABSRlIpArnu3KoCrNYT23f_ZyiBdS9WHrjRSClHD5EF1r46ApiPP4Lq2ncUpsiV127H2Vhw_hMPcA40xdrfgQuOPzHf2ktvhq-10Dvm6j4evjGg9PeF8SPjmeyX9medja2CK5f-hK3TEQ2ofvl2ZThb4qNf9BUZ91ZThDEXcZtSlOa9_JRAtbGHQdZIXo_NgAtlS15LLsQioc5vyJLj7eiAHvMDmCQmVavhNKOM3CNOO_I0mw17HwR2pZJB3me4d0x7K0TUAt8dzAnCBViCHZ7VDZ96oOy_WmrCAadID_AmZQEpNMuaaZHxM8DYNcXd7BwseA9HmKpxYPR8CdTAmS4q5vd1GPxRgGX2D0sXMNXdE1-_Kt0Ip0zPQdKADn80nZSPSrlcKl5HMtli7hUqWvCGtqNKg4krZaRrENWiF3_Xu6trO3lkbc92iaeHQ46EKW-IVyqGUILnCf3U4eIJ0XNEfzYT_0HX_-HA1YC5K9O_mZV1-Eyc4OP1YPtwhRDUYcXl5cR3ttYi27JRcWGbviNF1jNHyd2REAGo7SjKUDEv7ZZZlhD-IxDUlY-xnrBeQ2j94pUSZywPdoKjXqIiaeh-EnfeubbzV9a3mSMTHSNWmbWgY7HWuaBp_KFyiWtYL996E9cZ71WT3LhBMWWURHuNdWTmHnPIIJ_FvO44MljyZyANX0p3OxnziYQtjEh76emtxFZEFO_WId2tyEs3Vn4re8ow-71NrbNLNPAs=w3078-h1564-ft"
                  />
                </div>
                <div className="sidebar-image">
                  <img
                    className="session-form-image"
                    src="https://lh3.googleusercontent.com/fife/ABSRlIr4fFSvnlTH36DUCRYKQurYabJEhRDPnpOUXsPV-tc-Kp_JbLb6yzzn4KOzd12jALplFGyLD0WqIDhW2Sw2iZ4IWINCsJRB2rxKjDiLrWkwGqYDJ6m8TsA8TfzZObt6v0oHkch8Kf7fZ_pIVB89lliKTH-hRLAa2mbuA8sPqQIFF_xMB_lJ0A-PZFDfBHIXE_55C2L-mf3r_CyD1opNqRHeU293bxM0SKWH-4YeRxcJbsm_33x7i-WwgqU-AV2PYKeoa-tqDiubZQ2OKj3QmB8gXpa8N2OgLfxWyVTLPCz0hlZr7_NePnO3C73dK7Qrat_TxY7XwbeOa7nUmDNLdW_fsUfO2RJhp3FYjdPO4jX_cdwJjzrANpkcGJ_b3og2wITEvJcRfwsqkNIGBjXA-j7eUZFKRiPGVHn5jYU_G4h5qkQQhKws3LVGWeWZm7Gk01XyAanp7YVS1qu27qarAP8RkOl6fMrkNTrFlXbqEqCbfuYJt76vmci90FIcXa2uLo3PzU-0Sgh4JrrAhnpy27zeF53zQFDb5Ac0YcwYAalIVGlP8GeD--SvEzAeqpb-fPV-1bkPgoD1jP_7viQBfeQtDsFGDXWFE7i87Zer6Vq0ggHHUtlqmuJd2TLpNg0aTYSezd5eGghyOQZyJ_BnLJA0RMZZ-Cw8QkwAIFG7dA_cIdrf4K88wTgv_TwZ9_Qx8LvJB1MVisP6suDH5WULvYu5dgjeIJaAIwc=w3406-h1808-ft"
                  />
                </div>
                <div className="sidebar-image">
                  <img
                    className="session-form-image"
                    src="https://lh3.googleusercontent.com/fife/ABSRlIrJo0K2TDY216Y9tpgl5INJMD9q6oSql5p2BgiLBuWnOb2vqJ5df_OJtPbIMTwuswiGNhzRmPoPBFUPOhVyo7nIE_mykXZma5NbVDtQ2L5J5E3so88s8Ul7khqAPQ_fexWBCKuWXijonwRzFECJ-Xaf1uIGHnoTArIr78lLCtXPo_XuNgf8qQyBAY9ffehvG5Q408nzI_B976V2Aj71pmfx2WPv_ITmZhkewAFFUbeqbAC4NCrXYPs7URC--c_hKUKVOqp_MbUYTq8OulquGXJom_jju-W4A833sSRZJkQUcoRtUIwqxAAtbS15pZIg9SJjDisLkOONdVda-std77WsLtM9EMnwG9PPooc3UstGE4VaDNBC14fz8s7bLoBriF9Y0m5-ELUN4paaDzlXHzrqWEbcogvRNjg4KfcDHrExHuYaPkgw6_-pmVExpwvTQKuAReLl88ZOzHJ8EZYNWwDAtbfXSIZtFiFv4n2y12t_23vmTDEuAauJCH-L1-M4XDTLrOE75UG5DgIjfxUqDdNxiNpf-Kz6hltcWYNRf6bfXmwAl4Ta71BtXpzOfnwxzFTxOns4jCmO2O84asnA2KtzWf4Im0VjCBnu1eSsV_jidwqsGuwFY8cFbWE0wBUVHe4dZA6XA2I9dX5YHC1r4t1BoANe6IRqhffFzAcjFkXjR6j_koYKJ-hXvCwvjlo3skNGx5q7sWD15V3QS3q5udLCPIj10y1gdCQ=w3078-h1564-ft"
                  />
                </div>
            </div>
          </div>
        </div>
      </main>
    );
  }
}

export default withRouter(LoginForm);
