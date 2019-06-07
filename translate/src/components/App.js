import React from "react";
import UserCreate from "./UserCreate";
import LanguageContext from "../contexts/LanguageContext";
import ColorContext from "../contexts/ColorContext";

class App extends React.Component {
  state = { language: "english" };

  onLaguageChange = language => {
    this.setState({ language });
  };

  render() {
    return (
      <div className="ui container">
        <div>
          Select a language:
          <i
            onClick={() => this.onLaguageChange("english")}
            className="flag us"
          />
          <i
            onClick={() => this.onLaguageChange("dutch")}
            className="flag nl"
          />
        </div>
        <LanguageContext.Provider value={this.state.language}>
          <ColorContext.Provider value="primary">
            <UserCreate />
          </ColorContext.Provider>
        </LanguageContext.Provider>
      </div>
    );
  }
}

export default App;
