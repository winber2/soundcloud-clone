import React from 'react';

class UserShow extends React.Component {
  constructor(props) {
    super(props);
    this.showUser = this.showUser.bind(this);
  }

  showUser() {
    let object = {};
    object.preventDefault = function() {};
    if (this.props.home) {
      this.props.openSignIn(object);
    } else {
      window.location.hash = `/${this.props.user.username}`;
    }
  }

  render() {
    return (
      <li className='search-show collection-show'>
        <img onClick={this.showUser} src={this.props.user.profile_image_url} />
        <span onClick={this.showUser}>{this.props.user.username}</span>
      </li>
    );
  }
}

export default UserShow;
