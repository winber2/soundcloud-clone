import React from 'react';

class RepostIcon extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <li className='repost'>
        <div className='repost-icon'/>
        <span className='repost'>12</span>
      </li>
    );
  }
}

export default RepostIcon;
