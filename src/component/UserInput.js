import React, { Component } from "react";
import '../App.css'

class UserInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      gen: ""
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();

    let user = {
      name: this.state.name,
      email: this.state.email,
      gen: this.state.gen,
    };

    this.props.addUser(user);

    this.setState({
      name: "",
      email: "",
      gen: ""
    });
  };

  render() {
    return (
      <div className="form-container">
        <form onSubmit={this.handleSubmit}>
          <div className="name">
            <input
              type="text"
              name="name"
              value={this.state.name}
              onChange={(e) => this.setState({ name: e.target.value })}
              placeholder="Enter your Fullname"
            />
          </div>

          <div className="email">
            <input
              type="text"
              name="email"
              value={this.state.email}
              onChange={(e) => this.setState({ email: e.target.value })}
              placeholder="Enter your Email"
            />
          </div>

          <div>
          <input
              type="text"
              name="gen"
              value={this.state.gen}
              onChange={(e) => this.setState({ gen: e.target.value })}
              placeholder="Enter your Gen"
            />
          </div>

          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default UserInput;
