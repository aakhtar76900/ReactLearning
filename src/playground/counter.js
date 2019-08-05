class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.handlePlusOne = this.handlePlusOne.bind(this);
    this.handleMinusOne = this.handleMinusOne.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.state = {
      count: +props.count
    };
  }
  render() {
    return (
      <div>
        <h3>Count : {this.state.count}</h3>
        <button onClick={this.handlePlusOne}>+1</button>
        <button onClick={this.handleMinusOne}>-1</button>
        <button onClick={this.handleReset}>0</button>
      </div>
    );
  }


  handlePlusOne() {
    console.log(this.state);
    this.setState(prevState => {
      return {
        count: prevState.count + 1
      };
    });
  }
  handleMinusOne() {
    this.setState(prevState => {
      return {
        count: prevState .count - 1
      };
    });
  }
  handleReset() {
    this.setState(prevState => {
      return { count: 0 };
    });
  }
}


Counter.defaultProps = {
  count : 0
};

ReactDOM.render(<Counter count="10" />, document.getElementById("app"));
