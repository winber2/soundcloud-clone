import React from 'react';

class LoggedHome extends React.Component {
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
      <div className='loggedhome'>
        <header className='loggedhome-header'>
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
        </header>
        <main className='loggedhome-body'>
          <p>songs</p>
        </main>
      </div>
    );
  }
}

export default LoggedHome;
