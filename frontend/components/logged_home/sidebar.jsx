import React from 'react';

class SideBar extends React.Component {
  constructor (props) {
    super(props);
  }

  render() {
    return (
      <aside className='loggedhome-sidebar'>
        <ul>
          <li className='artist-suggestion'>
            <span>Who to follow</span>
            <ul>
              <li>asdf</li>
              <li>asdf</li>
              <li>asdf</li>
            </ul>
          </li>
          <li className='song-suggestion'>
            <span>Song Suggestions</span>
            <ul>
              <li>asdf</li>
              <li>asdf</li>
              <li>asdf</li>
            </ul>
          </li>
        </ul>
      </aside>
    );
  }
}

export default SideBar;
