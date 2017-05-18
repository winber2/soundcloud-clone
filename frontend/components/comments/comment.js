import React from 'react';

class Comment extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let comments = this.props.
    return (
      <ul className='comments'>
        <li>
          {comments}
          
        </li>
      </ul>
    );
  }
}
