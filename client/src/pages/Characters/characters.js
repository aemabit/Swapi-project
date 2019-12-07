import React from 'react';
import Modal from 'react-modal';
import CustomStyleModal from './styleModal.module.css';
import InfoMiddle from './components/charCenter';
import VideoChar from './components/charVideo';
import GetLucky from './components/getLucky';
import TheModal from './components/charPeople';
import MapChar from './components/mapChar';

class People extends React.Component {
  state = {
    characters: [],
    modalIsOpen: false,
    peopleSelect: [],
    searchTerm: ''
  };

  // FETCH
  fetchStw = () => {
    fetch('/api/characters')
      .then(response => response.json())
      .then(data => {
        this.setState({ characters: data.c });
      });
  };

  handleSearch = (event) => {
    this.setState({
      searchTerm: event.target.value
    });
  };

  // MODAL
  openModal = url => {
    this.setState({
      peopleSelect: this.state.characters.find(character => character.url === url),
      modalIsOpen: true
    });
    
  };

  closeModal = () => {
    this.setState({ modalIsOpen: false });
  };

  // GET LUCKY
  getLucky = () => {
    const random = this.state.characters[
      Math.floor(Math.random() * this.state.characters.length)
    ];
    this.setState({
      peopleSelect: random,
      modalIsOpen: true
    });
  };

  render() {
    return (
      <>
        <VideoChar />
        <InfoMiddle />
        <GetLucky
          handleSearch={this.handleSearch}
          getLucky={() => this.getLucky()}
        />
        <MapChar
          characters={this.state.characters}
          openModal={this.openModal}
          handleSearch={this.handleSearch}
          searchTerm={this.state.searchTerm}
        />
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={CustomStyleModal}
          className={CustomStyleModal.Modal}
          overlayClassName={CustomStyleModal.Overlay}
          contentLabel="STW Modal"
        >
          <TheModal
            closeModal={this.closeModal}
            peopleSelect={this.state.peopleSelect}
          />
        </Modal>
      </>
    );
  }

  componentDidMount() {
    this.fetchStw();
  }

  componentWillMount() {
    Modal.setAppElement('body');
  }
}

export default People;
