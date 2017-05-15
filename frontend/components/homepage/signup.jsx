import React from 'react';

class Signup extends React.Component {
  constructor(props) {
    super(props)
  }

  handleSubmit(e) {
    e.preventDefault();
    let user = {
      username: this.state.username,
      password: this.state.password
    };
    this.props.signup(user);
  }

  update(prop) {
    return e => this.setState({ prop });
  }

  render() {
    return (
      <div>
        <h1>Sign in!</h1>
        <input onChange={this.update('username')} placeholder='username'></input>
        <input onChange={this.update('password')} type='password' placeholder='password'></input>
        <button onClick={this.handleSubmit}>Sign Up!</button>

        <br />
        <button onClick={this.closeModal}>Back</button>
      </div>
    );
  }
}
