import React from 'react';

class HomePage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='homepage'>
        <main className='homepage-info'>
          <header>
            <ul>
            <li>
              <p>Logo</p>
            </li>
            <li>
              <button>Sign in</button>
              <button>Create Account</button>
            </li>
            </ul>
          </header>
          <div className='homepage-description'>
            <span>Block of text</span>
          </div>
          <span className='homepage-scroll'>dot dot</span>
        </main>
        <section className="homepage-songs">

        </section>
        <section>

        </section>
      </div>
    );
  }
}

export default HomePage;
