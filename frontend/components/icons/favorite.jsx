import React from 'react';

class FavoriteIcon extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    return (
      <li className='favorite'>
        <div className='heart-icon'/>
        <span className='favorite'>5</span>
      </li>
    );
  }
}

export default FavoriteIcon;
