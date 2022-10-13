import PropTypes from 'prop-types';
import { createPortal } from 'react-dom';

const modal = document.querySelector('#rootModal');

export const Modal = ({ largeImage, onModalClose }) => {
  const onClose = e => {
    if (e.currentTarget === e.target) {
      onModalClose();
    }
  };

  return createPortal(
    <div onClick={onClose} className="Overlay">
      <div className="Modal">
        <img src={largeImage} alt="large" />
      </div>
    </div>,
    modal
  );
};

Modal.propTypes = {
  largeImage: PropTypes.string.isRequired,
  onModalClose: PropTypes.func.isRequired,
};
