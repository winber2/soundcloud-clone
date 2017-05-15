import React from 'react';

class Signin extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: '', password: '' };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    let user = {
      username: this.state.username,
      password: this.state.password
    };
    this.props.signin(user);
    window.location.hash = 'stream';
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
        <button onClick={this.handleSubmit}>Sign in!</button>
      </div>
    );
  }
}

export default Signin;
