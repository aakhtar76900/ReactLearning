import React from "react";
import AddOption from "./AddOption";
import Header from "./Header";
import Action from "./Action";
import Options from "./Options";
import OptionModal from "./OptionModal";

export default class IndecisionApp extends React.Component {
  state = {
    options: [],
    selectedOption: undefined
  };

  render() {
    const title = "Indecision App";
    const subTitle = "Put life in the hands of computers.";
    const options = ["Torranaga", "Toda Hiromatsu", "Ishido"];
    return (
      <div>
        <Header subTitle={subTitle} />
        <div className="container">
          <Action
            handleWhatToDo={this.handleWhatShouldIDo}
            isEnabled={this.state.options.length > 0}
          />
          <div className="widget">
            <Options
              removeAll={this.handleRemoveAll}
              options={this.state.options}
              removeOption={this.handleDeleteOption}
            />
            <AddOption handleAddOptions={this.handleAddOptions} />
          </div>
        </div>

        <OptionModal
          handleOptionModalClose={this.handleOptionModalClose}
          selectedOption={this.state.selectedOption}
        />
      </div>
    );
  }
  handleRemoveAll = () => {
    this.setState(() => {
      return { options: [] };
    });
  };

  handleWhatShouldIDo = () => {
    var randomOptionNul = Math.floor(Math.random() * this.state.options.length);
    this.setState(() => {
      return { selectedOption: this.state.options[randomOptionNul] };
    });
  };

  handleAddOptions = option => {
    if (!option) {
      return "Please enter some value";
    }
    if (this.state.options.indexOf(option) > -1) {
      return "Option already exists";
    }

    this.setState(prevState => {
      return { options: prevState.options.concat(option) };
    });
  };

  handleDeleteOption = optionToRemove => {
    console.log(optionToRemove);
    this.setState(prevState => ({
      options: prevState.options.filter(option => option != optionToRemove)
    }));
  };

  handleOptionModalClose = () => {
    this.setState(() => {
      return { selectedOption: undefined };
    });
  };
  componentDidMount() {
    console.log("did mount");
    const jsonOptions = JSON.parse(localStorage.getItem("options"));
    if (jsonOptions) {
      this.setState(prevState => {
        return { options: prevState.options.concat(jsonOptions) };
      });
    }
  }

  componentDidUpdate(prevProp, prevState) {
    console.log("did update");
    if (prevState.options.length != this.state.options.length) {
      const jsonOptions = JSON.stringify(this.state.options);
      localStorage.setItem("options", jsonOptions);
    }
  }
}
