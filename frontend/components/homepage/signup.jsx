import React from 'react';

class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: '', password: '' };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
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
    return e => this.setState({ [prop]: e.target.value });
  }

  render() {
    return (
      <ul className='homepage-auth'>
        <li>
          <h1>Sign up!</h1>
        </li>
        <li>
          <input onChange={this.update('username')} placeholder='username'></input>
        </li>
        <li>
          <input onChange={this.update('password')} type='password' placeholder='password'></input>
        </li>
        <li>
          <button onClick={this.handleSubmit}>Sign up!</button>
        </li>
      </ul>
    );
  }
}

export default Signup;
