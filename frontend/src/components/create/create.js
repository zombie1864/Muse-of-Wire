import React from "react";

class Create extends React.Component {
  render() {
    return (
      <main>
        <div className="body-container create-background-image">
          <div className="body-inner-container-center-and-sidebar">
            <div className="body-center-container">
              <div className="session-container create-session">
                <form>
                  <div className="session-form">
                    <input
                      className="session-form-input-field"
                      type="textfield"
                      placeholder="Create coming soon"
                    />
                    <input
                      className="session-submit-button"
                      type="submit"
                      value="Create"
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

export default Create;
