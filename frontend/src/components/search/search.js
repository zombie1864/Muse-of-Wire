import React from 'react';

class Search extends React.Component {
  render() {
    return (
      <main>
        <div className="body-container search-background-image">
          <div className="body-inner-container-center-and-sidebar">
            <div className="body-center-container">
              <div className="session-container search-session">
                <form>
                  <div className="session-form">
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