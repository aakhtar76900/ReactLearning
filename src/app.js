class IndecisionApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      options: ["Seb", "Kimi", "Leclerc"]
    };

    this.handleRemoveAll = this.handleRemoveAll.bind(this);
    this.handleWhatShouldIDo = this.handleWhatShouldIDo.bind(this);
    this.handleAddOptions = this.handleAddOptions.bind(this);
    this.handleDeleteOption = this.handleDeleteOption.bind(this);
  }

  render() {
    const title = "Indecision App";
    const subTitle = "Life in the hands of computer.";
    const options = ["Torranaga", "Toda Hiromatsu", "Ishido"];
    return (
      <div>
        <Header subTitle={subTitle} />
        <Action
          handleWhatToDo={this.handleWhatShouldIDo}
          isEnabled={this.state.options.length > 0}
        />
        <Options
          removeAll={this.handleRemoveAll}
          options={this.state.options}
          removeOption={this.handleDeleteOption}
        />
        <AddOption handleAddOptions={this.handleAddOptions} />
      </div>
    );
  }
  handleRemoveAll() {
    this.setState(() => {
      return { options: [] };
    });
  }

  handleWhatShouldIDo() {
    var randomOptionNul = Math.floor(Math.random() * this.state.options.length);
    alert(this.state.options[randomOptionNul]);
  }

  handleAddOptions(option) {
    if (!option) {
      return "Please enter some value";
    }
    if (this.state.options.indexOf(option) > -1) {
      return "Option already exists";
    }

    this.setState(prevState => {
      return { options: prevState.options.concat(option) };
    });
  }

  handleDeleteOption(optionToRemove) {
    console.log(optionToRemove);
    this.setState(prevState => ({
      options: prevState.options.filter(option => option != optionToRemove)
    }));
  }
}

const Header = props => {
  return (
    <div>
      <h1>{props.title}</h1>
      <h4>{props.subTitle}</h4>
    </div>
  );
};

Header.defaultProps = {
  title: "App Course!"
};

const Action = props => {
  return (
    <div>
      <button disabled={!props.isEnabled} onClick={props.handleWhatToDo}>
        What Should I Do?
      </button>
    </div>
  );
};

const Options = props => {
  return (
    <div>
      <button onClick={props.removeAll}>Remove All</button>

      {props.options.map(item => {
        return (
          <Option removeOption={props.removeOption} key={item} option={item} />
        );
      })}
    </div>
  );
};

const Option = props => {
  return (
    <div>
      {props.option} 
      <button onClick={()=>{props.removeOption(props.option)}}>Remove</button>
    </div>
  );
};
class AddOption extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddOptions = this.handleAddOptions.bind(this);
    this.state = {
      error: undefined
    };
  }
  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.handleAddOptions}>
          <input type="text" name="option" />
          <button>Add Options</button>
        </form>
      </div>
    );
  }
  handleAddOptions(e) {
    e.preventDefault();
    const option = e.target.elements.option.value;
    const error = this.props.handleAddOptions(option);

    this.setState(() => {
      return { error: error };
    });
  }
}

const template = (
  <div>
    <IndecisionApp />
  </div>
);

const User = () => {
  return <p>Hello</p>;
};

ReactDOM.render(template, document.getElementById("app"));
