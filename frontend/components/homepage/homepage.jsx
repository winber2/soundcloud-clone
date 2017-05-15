import React from 'react';
import Modal from 'react-modal';
import Signin from './signin';
import Signup from './signup';

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isOpen: false, authRoute: '' };
    this.openSignUp = this.openSignUp.bind(this);
    this.openSignIn = this.openSignIn.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  componentWillMount() {
    Modal.setAppElement('body');
  }

  openSignIn(e) {
    e.preventDefault();

    this.setState({ isOpen: true, authRoute: 'signin' });
  }

  openSignUp(e) {
    e.preventDefault();

    this.setState({ isOpen: true, authRoute: 'signup' });
  }

  closeModal(e) {
    e.preventDefault();

    this.setState({ isOpen: false, authRoute: '' });
  }

  render() {
    let authRoute;
    if (this.state.authRoute === 'signin') {
      authRoute = <Signin signin={this.props.signin}/>;
    } else {
      authRoute = <Signup signup={this.props.signup}/>;
    }
    return (
      <div className='homepage'>
        <Modal isOpen={this.state.isOpen} contentLabel="Modal">
          {authRoute}
          <button onClick={this.closeModal}>Back</button>
        </Modal>
        <main className='homepage-info'>
          <header>
            <ul>
            <li>
              <p>Logo</p>
            </li>
            <li>
              <button onClick={this.openSignIn}>Sign in</button>
              <button onClick={this.openSignUp}>Create Account</button>
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
