"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var IndecisionApp = function (_React$Component) {
  _inherits(IndecisionApp, _React$Component);

  function IndecisionApp(props) {
    _classCallCheck(this, IndecisionApp);

    var _this = _possibleConstructorReturn(this, (IndecisionApp.__proto__ || Object.getPrototypeOf(IndecisionApp)).call(this, props));

    _this.state = {
      options: []
    };

    _this.handleRemoveAll = _this.handleRemoveAll.bind(_this);
    _this.handleWhatShouldIDo = _this.handleWhatShouldIDo.bind(_this);
    _this.handleAddOptions = _this.handleAddOptions.bind(_this);
    _this.handleDeleteOption = _this.handleDeleteOption.bind(_this);
    return _this;
  }

  _createClass(IndecisionApp, [{
    key: "render",
    value: function render() {
      var title = "Indecision App";
      var subTitle = "Life in the hands of computer.";
      var options = ["Torranaga", "Toda Hiromatsu", "Ishido"];
      return React.createElement(
        "div",
        null,
        React.createElement(Header, { subTitle: subTitle }),
        React.createElement(Action, {
          handleWhatToDo: this.handleWhatShouldIDo,
          isEnabled: this.state.options.length > 0
        }),
        React.createElement(Options, {
          removeAll: this.handleRemoveAll,
          options: this.state.options,
          removeOption: this.handleDeleteOption
        }),
        React.createElement(AddOption, { handleAddOptions: this.handleAddOptions })
      );
    }
  }, {
    key: "handleRemoveAll",
    value: function handleRemoveAll() {
      this.setState(function () {
        return { options: [] };
      });
    }
  }, {
    key: "handleWhatShouldIDo",
    value: function handleWhatShouldIDo() {
      var randomOptionNul = Math.floor(Math.random() * this.state.options.length);
      alert(this.state.options[randomOptionNul]);
    }
  }, {
    key: "handleAddOptions",
    value: function handleAddOptions(option) {
      if (!option) {
        return "Please enter some value";
      }
      if (this.state.options.indexOf(option) > -1) {
        return "Option already exists";
      }

      this.setState(function (prevState) {
        return { options: prevState.options.concat(option) };
      });
    }
  }, {
    key: "handleDeleteOption",
    value: function handleDeleteOption(optionToRemove) {
      console.log(optionToRemove);
      this.setState(function (prevState) {
        return {
          options: prevState.options.filter(function (option) {
            return option != optionToRemove;
          })
        };
      });
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      console.log("did mount");
      var jsonOptions = JSON.parse(localStorage.getItem("options"));
      if (jsonOptions) {
        this.setState(function (prevState) {
          return { options: prevState.options.concat(jsonOptions) };
        });
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProp, prevState) {
      console.log("did update");
      if (prevState.options.length != this.state.options.length) {
        var jsonOptions = JSON.stringify(this.state.options);
        localStorage.setItem("options", jsonOptions);
      }
    }
  }]);

  return IndecisionApp;
}(React.Component);

var Header = function Header(props) {
  return React.createElement(
    "div",
    null,
    React.createElement(
      "h1",
      null,
      props.title
    ),
    React.createElement(
      "h4",
      null,
      props.subTitle
    )
  );
};

Header.defaultProps = {
  title: "App Courses!"
};

var Action = function Action(props) {
  return React.createElement(
    "div",
    null,
    React.createElement(
      "button",
      { disabled: !props.isEnabled, onClick: props.handleWhatToDo },
      "What Should I Do?"
    )
  );
};

var Options = function Options(props) {
  return React.createElement(
    "div",
    null,
    React.createElement(
      "button",
      { onClick: props.removeAll },
      "Remove All"
    ),
    props.options.map(function (item) {
      return React.createElement(Option, { removeOption: props.removeOption, key: item, option: item });
    })
  );
};

var Option = function Option(props) {
  return React.createElement(
    "div",
    null,
    props.option,
    React.createElement(
      "button",
      {
        onClick: function onClick() {
          props.removeOption(props.option);
        }
      },
      "Remove"
    )
  );
};

var AddOption = function (_React$Component2) {
  _inherits(AddOption, _React$Component2);

  function AddOption(props) {
    _classCallCheck(this, AddOption);

    var _this2 = _possibleConstructorReturn(this, (AddOption.__proto__ || Object.getPrototypeOf(AddOption)).call(this, props));

    _this2.handleAddOptions = _this2.handleAddOptions.bind(_this2);
    _this2.state = {
      error: undefined
    };
    return _this2;
  }

  _createClass(AddOption, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        this.state.error && React.createElement(
          "p",
          null,
          this.state.error
        ),
        React.createElement(
          "form",
          { onSubmit: this.handleAddOptions },
          React.createElement("input", { type: "text", name: "option" }),
          React.createElement(
            "button",
            null,
            "Add Options"
          )
        )
      );
    }
  }, {
    key: "handleAddOptions",
    value: function handleAddOptions(e) {
      e.preventDefault();
      var option = e.target.elements.option.value;
      var error = this.props.handleAddOptions(option);

      this.setState(function () {
        return { error: error };
      });
    }
  }]);

  return AddOption;
}(React.Component);

var template = React.createElement(
  "div",
  null,
  React.createElement(IndecisionApp, null)
);

var User = function User() {
  return React.createElement(
    "p",
    null,
    "Hello"
  );
};

ReactDOM.render(template, document.getElementById("app"));
