import React from 'react';

class LoggedHome extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='loggedhome'>
        <header className='navigation'>
          <ul>
            <li>Logo</li>
            <li>Home</li>
            <li>Search</li>
            <li>Upload</li>
            <li>Settings</li>
          </ul>
        </header>
        <main className='loggedhome-body'>
          <p>songs</p>
        </main>
      </div>
    );
  }
}

export default LoggedHome;
