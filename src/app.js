class IndecisionApp extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Action />
        <Options />
        <AddOption />
      </div>
    );
  }
}

class Header extends React.Component {
  render() {
    return (
      <div>
        <h4>Put life in hands of computer</h4>
      </div>
    );
  }
}

class Action extends React.Component {
  render() {
    return (
      <div>
        <button>What Should I Do?</button>
      </div>
    );
  }
}

class Options extends React.Component {
  render() {
    return (
      <div>
        Options component here <Option />
      </div>
    );
  }
}

class AddOption extends React.Component {
  render() {
    return <div>AddOption component here</div>;
  }
}

class Option extends React.Component {
  render() {
    return <div>Option component here</div>;
  }
}

const template = (
  <div>
    <IndecisionApp />
  </div>
);

ReactDOM.render(template, document.getElementById("app"));
