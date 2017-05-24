import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    debugger;
    return (
      <div className='search container'>
        <h1>Search results for {this.props.match.params.query}</h1>

      </div>
    );
  }
}

export default Search;
