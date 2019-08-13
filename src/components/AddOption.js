import React from 'react'

export default class AddOption extends React.Component {
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
          {this.state.error && <p className="add-option-error">{this.state.error}</p>}
          <form className="add-option" onSubmit={this.handleAddOptions}>
            <input className="add-option__input" type="text" name="option" />
            <button className="button">Add Options</button>
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