import React from 'react';
import FollowContainer from '../icons/follow_container';

class SidebarUser extends React.Component {
  constructor(props) {
    super(props);
    this.showUser = this.showUser.bind(this);
  }

  showUser() {
    window.location.hash = `${this.props.user.username}`;
  }

  render() {
    return (
      <li className='sidebar-user'>
        <img onClick={this.showUser} src={this.props.user.profile_image_url} />
        <ul className='sidebar-user-info'>
          <li><h4 onClick={this.showUser}>{this.props.user.username}</h4></li>
          <ul className='sidebar-user-options'>
            <li>{this.props.user.followers.length}</li>
            <FollowContainer user={this.props.user} key={this.props.user.id}/>
          </ul>
        </ul>
      </li>
    );
  }
}

export default SidebarUser;
