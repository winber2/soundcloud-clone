import React from 'react';

class Login extends React.Component {
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
    this.props.login(user);
  }

  update(prop) {
    return e => this.setState({ [prop]: e.target.value });
  }

  render() {
    let errors = this.props.errors.join('');
    return (
      <ul className='homepage-auth'>
        <li>
          <h1>Sign in</h1>
        </li>
        <li>
          <p>{errors}</p>
          <input onChange={this.update('username')} placeholder='Username'></input>
        </li>
        <li>
          <input onChange={this.update('password')} type='password' placeholder='Password'></input>
        </li>
        <li>
          <button onClick={this.handleSubmit}>Continue</button>
        </li>
      </ul>
    );
  }
}

export default Login;
