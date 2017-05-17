import React from 'react';
import { Link } from 'react-router-dom';

class Navigation extends React.Component {
  constructor(props) {
    super(props);
    this.logout = this.logout.bind(this);
    this.toHome = this.toHome.bind(this);
  }

  toHome() {
    window.location.hash = '/stream';
  }

  logout(e) {
    e.preventDefault();

    this.props.logout();
    window.location.hash = '';
  }

  render() {
    return (
      <nav className='navigation'>
        <ul>
          <li className='loggedhome-logo'><img src="assets/vibe-logo.png" /></li>
          <li onClick={this.toHome} >Home</li>
        </ul>
        <ul className='searchbar'>
          <input className='home-search'></input>
        </ul>
        <ul>
          <li>Upload</li>
          <li>Settings</li>
          <li>{this.props.currentUser.username}</li>
          <li>
            <button onClick={this.logout}>Log out</button>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navigation;
