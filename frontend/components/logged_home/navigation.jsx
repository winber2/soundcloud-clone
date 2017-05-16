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
          <li>Logo</li>
          <li>Home</li>
        </ul>
        <input className='home-search'></input>
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
