import React from 'react';

class Signup extends React.Component {
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
    this.props.signup(user);
    window.location.hash = 'stream';
  }

  update(prop) {
    return e => this.setState({ [prop]: e.target.value });
  }

  render() {
    return (
      <div>
        <h1>Sign up!</h1>
        <input onChange={this.update('username')} placeholder='username'></input>
        <input onChange={this.update('password')} type='password' placeholder='password'></input>
        <button onClick={this.handleSubmit}>Sign up!</button>
      </div>
    );
  }
}

export default Signup;
