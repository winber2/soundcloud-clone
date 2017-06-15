import React from 'react';

class RepostIcon extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isReposted: false, isActive: '' };
    this.addRepost = this.addRepost.bind(this);
  }

  repostedByUser(reposts, currentUser) {
    if (reposts === undefined) return false;
    for (let i = 0; i < reposts.length; i++) {
      if (reposts[i].reposter_id === currentUser.id) {
        return true;
      }
    }
    return false;
  }

  componentWillReceiveProps(nextProps) {
    let song = nextProps.song;
    if (this.repostedByUser(song.reposts, nextProps.currentUser)) {
      this.setState({ isReposted: true, isActive: 'active' });
    } else {
      this.setState({ isReposted: false, isActive: '' });
    }
  }

  componentDidMount() {
    let song = this.props.song;
    if (this.repostedByUser(song.reposts, this.props.currentUser)) {
      this.setState({ isReposted: true, isActive: 'active' });
    }
  }

  addRepost() {
    let currentUser = this.props.currentUser;
    let song = this.props.song;

    if (this.state.isReposted === true) {
      let repost = this.props.song.reposts.find( rep => (
        rep.reposter_id === currentUser.id
      ));
      this.props.deleteRepost(repost.id)
        .then(() => this.props.fetchSingleSong(song.id));
    } else {
      this.props.repostSong(currentUser.id, song.id)
        .then(() => this.props.fetchSingleSong(song.id));
    }
  }

  render() {
    let reposts = this.props.song.reposts || [];
    return (
      <li onClick={this.addRepost} className={`repost ${this.state.isActive}`}>
        <div className={`repost-icon ${this.state.isActive}`}/>
        <span className={`repost ${this.state.isActive}`}>
          {reposts.length}
        </span>
      </li>
    );
  }
}

export default RepostIcon;
