import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='search-page'>
        <h1>Search results for {this.props.match.params.query}</h1>
        <ul className='search-results'></ul>
      </div>
    );
  }
}

export default Search;
