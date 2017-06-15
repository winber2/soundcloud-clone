import React from 'react';

class RepostIcon extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isReposted: false, isActive: '' }
  }

  findUserFollow(followers, currentUser) {
    if (followers === undefined) return false;
    for (let i = 0; i < followers.length; i++) {
      if (followers[i].id === currentUser.id) {
        return true;
      }
    }
    return false;
  }

  componentWillReceiveProps(nextProps) {
    let user = nextProps.user;
    if (this.findUserFollow(user.followers, nextProps.currentUser)) {
      this.setState({ isFollowed: true, isActive: 'active' });
    } else {
      this.setState({ isFollowed: false, isActive: '' });
    }
  }

  componentDidMount() {
    let user = this.props.user;
    if (this.findUserFollow(user.followers, this.props.currentUser)) {
      this.setState({ isFollowed: true, isActive: 'active' });
    }
  }

  addRepost() {
    let currentUser = this.props.currentUser;
    let user = this.props.user;

    if (this.state.isFollowed === true) {
      let follow = this.props.user.followers.find( fol => (
        fol.id === currentUser.id
      ));
      this.props.unfollowUser(follow.follow_id)
        .then(() => this.props.fetchUser(this.props.user.username));
    } else {
      this.props.followUser(currentUser, user)
        .then(() => this.props.fetchUser(this.props.user.username));
    }
  }

  render() {
    return (
      <li className='repost'>
        <div className={`repost-icon ${this.state.isActive}`}/>
        <span className={`favorite ${this.state.isActive}`}>

        </span>
      </li>
    );
  }
}

export default RepostIcon;
