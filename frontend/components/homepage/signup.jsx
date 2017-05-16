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
    let errors = this.props.errors.map( (error, idx) => <p key={idx}>{error}</p>);
    return (
      <ul className='homepage-auth'>
        <li>
          <h1>Sign up for Vibe</h1>
        </li>
        <li>
          {errors}
          <input onChange={this.update('username')} placeholder='Username'></input>
        </li>
        <li>
          <input onChange={this.update('password')} type='password' placeholder='Password'></input>
        </li>
        <li>
          <button onClick={this.handleSubmit}>Register</button>
        </li>
      </ul>
    );
  }
}

export default Signup;
