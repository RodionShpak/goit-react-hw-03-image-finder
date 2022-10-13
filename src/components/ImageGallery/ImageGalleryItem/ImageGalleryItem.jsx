import PropTypes from 'prop-types';

export const ImageGalleryItem = ({
  webformatImage,
  largeImage,
  onOpenModal,
}) => {
  return (
    <li onClick={() => onOpenModal(largeImage)} className="ImageGalleryItem">
      <img src={webformatImage} alt="" className="ImageGalleryItem-image" />
    </li>
  );
};

ImageGalleryItem.propTypes = {
  webformatImage: PropTypes.string.isRequired,
  largeImage: PropTypes.string.isRequired,
  onOpenModal: PropTypes.func.isRequired,
};
