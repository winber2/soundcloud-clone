import React from 'react';

class SidebarUser extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <li className='sidebar-user'>
        <img src={this.props.user.profile_image_url} />
        <ul className='sidebar-user-info'>
          <h4>{this.props.user.username}</h4>
          <ul className='sidebar-user-options'>
            <li>444</li>
            <button>Follow</button>
          </ul>
        </ul>
      </li>
    );
  }
}

export default SidebarUser;
