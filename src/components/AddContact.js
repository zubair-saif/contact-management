import React, { Component } from "react";

export default class AddContact extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      name: "",
    };
  }

  emailHandler = (e) => {
    this.setState({
      email: e.target.value,
    });
  };
  nameHandler = (e) => {
    this.setState({
      name: e.target.value,
    });
  };
  onSubmithandler = (e) => {
    e.preventDefault();
    if (this.state.name === "" || this.state.email === "") {
      alert("All fields are required");
    }
    this.props.addContactHandler(this.state);
    this.setState({ name: "", email: "" });
  };
  render() {
    return (
      <div className="ui container">
        <h2>Add Contact</h2>
        <form onSubmit={this.onSubmithandler}>
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input
              type="text"
              placeholder="Name"
              className="form-control"
              value={this.state.name}
              onChange={this.nameHandler}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              type="email"
              className="form-control"
              placeholder="Email"
              value={this.state.email}
              onChange={this.emailHandler}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    );
  }
}
