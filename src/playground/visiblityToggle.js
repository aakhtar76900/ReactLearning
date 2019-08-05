class VisiblityToggle extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      visiblity: false
    };
  }

  render() {
    return (
      <div>
        {this.state.visiblity && <h1>This Text will be toggled</h1>}
        <button onClick={this.handleClick}>{this.state.visiblity ? "Hide Text" : "Show text"}</button>
      </div>
    );
  }

  handleClick() {
    this.setState(prevState => {
      return {visiblity :!prevState.visiblity};
    });
  }
}

ReactDOM.render(<VisiblityToggle />, document.getElementById("app"));
