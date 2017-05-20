import React from 'react';

class FavoriteIcon extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    return (
      <li>
        <div className='heart-icon'/>
        <span>5</span>
      </li>
    );
  }
}

export default FavoriteIcon;
