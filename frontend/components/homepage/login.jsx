import React from 'react';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: '', password: '' };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
    this.demoLogin = this.demoLogin.bind(this);
    this.handleKey = this.handleKey.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.login(this.state);
  }

  demoLogin(e) {
    e.preventDefault();
    let user = {
      username: 'darude',
      password: 'sandstorm'
    };
    this.props.login(user);
  }

  update(prop) {
    return e => this.setState({ [prop]: e.target.value });
  }

  handleKey(e) {
    if (e.key === 'Enter') {
      this.props.login(this.state);
    }
  }

  render() {
    let errors = this.props.errors.join('');
    return (
      <ul className='homepage-auth'>
        <li>
          <h1>Sign in</h1>
        </li>
        <li><button onClick={this.demoLogin}>Demo login</button></li>
        <ul>
          <div></div>
          <p>OR</p>
          <div></div>
        </ul>
        <li>
          <p className='auth-errors'>{errors}</p>
          <input onKeyPress={this.handleKey} onChange={this.update('username')} placeholder='Username'></input>
        </li>
        <li>
          <input onKeyPress={this.handleKey} onChange={this.update('password')} type='password' placeholder='Password'></input>
        </li>
        <li>
          <button onClick={this.handleSubmit}>Continue</button>
        </li>
      </ul>
    );
  }
}

export default Login;
