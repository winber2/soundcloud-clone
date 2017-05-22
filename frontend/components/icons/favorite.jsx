import React from 'react';

class FavoriteIcon extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isFavorited: 0, isActive: 'active' };
    this.addFavorite = this.addFavorite.bind(this);
  }

  addFavorite() {
    let user = this.props.currentUser;
    let favoritable = this.props.favoritable;

    this.props.createFavorite(user, favoritable);
    this.toggleFavorite();
  }

  toggleFavorite() {
    if (this.state.isFavorited === 0) {
      this.setState({ isFavorited: 1 });
    } else {
      this.setState({ isFavorited: 0 });
    }
  }


  render() {
    return (
      <li onClick={this.addFavorite} className={`favorite ${this.state.isActive}`}>
        <div className='heart-icon'/>
        <span className='favorite'>
          {`${this.props.favoritable.favorites + this.state.isFavorited}`}
        </span>
      </li>
    );
  }
}

export default FavoriteIcon;
