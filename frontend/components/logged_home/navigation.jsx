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

  toSearch(e) {
    if (e.key === 'Enter' && e.target.value !== '') {
      window.location.hash = `/search?q=${e.target.value}`;
      e.target.value = '';
    }
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
      this.setState({ isActive: '' });
    }, 80);
  }

  render() {
    return (
      <nav className='navigation'>
        <ul>
          <li onClick={this.toHome} className='loggedhome-logo'><img src='https://res.cloudinary.com/winber1/image/upload/v1495123529/vibe-logo_x2xsvo.png'/></li>
          <li><NavLink to='/stream'>Home</NavLink></li>
          <li><NavLink to='/collection/likes'>Collection</NavLink></li>
        </ul>
        <ul className='searchbar'>
          <input onKeyPress={this.toSearch} className='home-search'></input>
        </ul>
        <ul>
          <li><Link to='/upload'>Upload</Link></li>
          <li className={`nav-user`}>
            <p tabIndex='0' onBlur={this.closeSettings}
              onClick={this.toggleSettings}
              className={`user ${this.state.isActive}`}>{this.props.currentUser.username} ❯</p>
            <ul id='user-settings' className={this.state.isActive}>
              <li>
                <Link to={`/${this.props.currentUser.username}`}>Profile</Link>
              </li>
              <li>
                <Link to={`/collection/likes`}>Likes</Link>
              </li>
              <li>
                <Link to={`/collection/playlists`}>Playlists</Link>
              </li>
              <li>
                <Link to={`/collection/following`}>Following</Link>
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
