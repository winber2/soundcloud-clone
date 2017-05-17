import React from 'react';

class Navigation extends React.Component {
  constructor(props) {
    super(props);
    this.logout = this.logout.bind(this);
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
          <li className='loggedhome-logo'></li>
          <li>Home</li>
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
