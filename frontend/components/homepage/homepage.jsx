import React from 'react';
import Modal from 'react-modal';

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isOpen: false, username: '', password: '' };
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    let user = {
      username: this.state.username,
      password: this.state.password
    };
    this.props.signup(user);
  }

  update(prop) {
    return e => this.setState({ prop });
  }

  componentWillMount() {
    Modal.setAppElement('body');
  }

  openModal(e) {
    e.preventDefault();

    this.setState({ isOpen: true });
  }

  closeModal(e) {
    e.preventDefault();

    this.setState({ isOpen: false });
  }

  render() {
    return (
      <div className='homepage'>
        <Modal isOpen={this.state.isOpen} contentLabel="Modal">
          <h1>Sign in</h1>
          <input onChange={this.update('username')} placeholder='username'></input>
          <input onChange={this.update('password')} type='password' placeholder='password'></input>
          <button onClick={this.handleSubmit}>Sign Up!</button>

          <br />
          <button onClick={this.closeModal}>Back</button>
        </Modal>
        <main className='homepage-info'>
          <header>
            <ul>
            <li>
              <p>Logo</p>
            </li>
            <li>
              <button onClick={this.openModal}>Sign in</button>
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
