import { Component } from 'react';
import PropTypes from 'prop-types';

import css from './ImageGalleryItem.module.css';
import Modal from '../Modal/Modal';

class ImageGalleryItem extends Component {
  static propTypes = {
    showModal: PropTypes.bool,
  };

  state = {
    showModal: false,
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({ showModal: !showModal }));
  };

  render() {
    const { url, tag, large } = this.props;
    return (
      <li className={css.item} onClick={this.toggleModal}>
        <img className={css.img} src={url} alt={tag} />

        {this.state.showModal && (
          <Modal onClose={this.toggleModal} src={large} alt={tag} />
        )}
      </li>
    );
  }
}
export default ImageGalleryItem;
