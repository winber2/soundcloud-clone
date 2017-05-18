import React from 'react';
import { Link } from 'react-router-dom';

class Navigation extends React.Component {
  constructor(props) {
    super(props);
    this.logout = this.logout.bind(this);
    this.toHome = this.toHome.bind(this);
    this.toggleSettings = this.toggleSettings.bind(this);
    this.state = { isActive: '' }
  }

  toHome() {
    window.location.hash = '/stream';
  }

  logout(e) {
    e.preventDefault();

    this.props.logout();
    window.location.hash = '';
  }

  toggleSettings() {
    if (this.state.isActive === '') {
      this.setState({ isActive: 'active' });
    } else {
      this.setState({ isActive: '' });
    }
  }

  render() {
    return (
      <nav className='navigation'>
        <ul>
          <li className='loggedhome-logo'><img src='http://res.cloudinary.com/winber1/image/upload/v1495123529/vibe-logo_x2xsvo.png'/></li>
          <li onClick={this.toHome} >Home</li>
        </ul>
        <ul className='searchbar'>
          <input className='home-search'></input>
        </ul>
        <ul>
          <li>Upload</li>
          <li>Settings</li>
          <li className={`nav-user ${this.state.isActive}`}>
            <p onClick={this.toggleSettings}>{this.props.currentUser.username}</p>
            <ul id='user-settings' className={this.state.isActive}>
              <li>Profile</li>
              <li>Likes</li>
              <li>Playlists</li>
              <li>Following</li>
              <li>Tracks</li>
              <li id='signout' onClick={this.logout}>Sign out</li>
            </ul>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navigation;
