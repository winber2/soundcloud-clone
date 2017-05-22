import React from 'react';

class Follow extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isFollowed: false, isActive: '' };
    this.addFollow = this.addFollow.bind(this);
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

  addFollow() {
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
    let follow = this.state.isFollowed ? 'Followed' : 'Follow';
    return (
      <button onClick={this.addFollow} className={`follow ${this.state.isActive}`}>
        {follow}
      </button>
    );
  }
}

export default Follow;
