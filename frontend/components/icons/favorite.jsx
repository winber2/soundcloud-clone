import React from 'react';

class FavoriteIcon extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isFavorited: 0, isActive: '' };
    this.addFavorite = this.addFavorite.bind(this);
  }

  // componentWillReceiveProps(nextProps) {
  //   let favorite = this.props.favoritable;
  //   if (favorite.track_url !== undefined) {
  //     this.props.favoritable.type = 'Song';
  //   } else if (favorite.songs !== undefined) {
  //     this.props.favoritable.type = 'Playlist';
  //   }
  // }

  findUserFavorite(array, user) {
    for (let i = 0; i < array.length; i++) {
      if (array[i].user_id === user.id) {
        return true;
      }
    }
    return false;
  }

  componentDidMount() {
    let favorite = this.props.favoritable;
    // if (favorite.track_url !== undefined) {
    //   favorite.type = 'Song';
    // } else if (favorite.songs !== undefined) {
    //   favorite.type = 'Playlist';
    // }
    if (this.findUserFavorite(favorite.favorites, this.props.currentUser)) {
      this.setState({ isFavorited: 1, isActive: 'active' });
    }
  }

  addFavorite() {
    let user = this.props.currentUser;
    let favoritable = this.props.favoritable;

    if (this.state.isFavorited === 1) {
      let favorite = this.props.favoritable.favorites.find( fav => (
        fav.user_id === this.props.currentUser.id
      ));
      this.props.deleteFavorite(favorite.id)
        .then(() => this.props.fetchSingleSong(this.props.favoritable.id));
    } else {
      this.props.createFavorite(user, favoritable)
        .then(() => this.props.fetchSingleSong(this.props.favoritable.id));
    }

    this.toggleFavorite();
  }

  toggleFavorite() {
    if (this.state.isFavorited === 0) {
      this.setState({ isFavorited: 1, isActive: 'active' });
    } else {
      this.setState({ isFavorited: 0, isActive: '' });
    }
  }


  render() {
    return (
      <li onClick={this.addFavorite} className={`favorite ${this.state.isActive}`}>
        <div className='heart-icon'/>
        <span className='favorite'>
          {`${this.props.favoritable.favorites.length}`}
        </span>
      </li>
    );
  }
}

export default FavoriteIcon;
