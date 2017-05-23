import React from 'react';
import { NavLink, Link } from 'react-router-dom';

class Navigation extends React.Component {
  constructor(props) {
    super(props);
    this.logout = this.logout.bind(this);
    this.toggleSettings = this.toggleSettings.bind(this);
    this.toHome = this.toHome.bind(this);
    this.state = { isActive: '' };
    this.showProfile = this.showProfile.bind(this);
    this.closeSettings = this.closeSettings.bind(this);
  }

  toHome() {
    window.location.hash = '/stream';
  }

  logout(e) {
    e.preventDefault();

    this.props.logout();
    window.location.hash = '';
  }

  showProfile() {
    window.location.hash = `/${this.props.currentUser.username}`;
  }

  toggleSettings() {
    if (this.state.isActive === '') {
      this.setState({ isActive: 'active' });
    } else {
      this.setState({ isActive: '' });
    }
  }

  closeSettings() {
    setTimeout(() => {
      if (this.state.isActive === '') {
        this.setState({ isActive: 'active' });
      } else {
        this.setState({ isActive: '' });
      }
    }, 65);
  }

  render() {
    return (
      <nav className='navigation'>
        <ul>
          <li onClick={this.toHome} className='loggedhome-logo'><img src='http://res.cloudinary.com/winber1/image/upload/v1495123529/vibe-logo_x2xsvo.png'/></li>
          <li><NavLink to='/stream'>Home</NavLink></li>
        </ul>
        <ul className='searchbar'>
          <input className='home-search'></input>
        </ul>
        <ul>
          <li><Link to='/upload'>Upload</Link></li>
          <li>
            <Link to='/stream'>Settings</Link>
          </li>
          <li className={`nav-user`}>
            <p tabIndex='0' onBlur={this.closeSettings} onClick={this.toggleSettings}
              className={`user ${this.state.isActive}`}>{this.props.currentUser.username}  ❯</p>
            <ul id='user-settings' className={this.state.isActive}>
              <li>
                <Link to={`/${this.props.currentUser.username}`}>Profile</Link>
              </li>
              <li>
                <Link to={`/${this.props.currentUser.username}`}>Likes</Link>
              </li>
              <li>
                <Link to={`/${this.props.currentUser.username}`}>Playlists</Link>
              </li>
              <li>
                <Link to={`/${this.props.currentUser.username}`}>Following</Link>
              </li>
              <li>
                <Link to={`/${this.props.currentUser.username}`}>Tracks</Link>
              </li>
              <li id='signout' onClick={this.logout}>Sign out</li>
            </ul>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navigation;
