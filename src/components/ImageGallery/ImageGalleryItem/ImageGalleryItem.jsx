export const ImageGalleryItem = ({ webformatURL }) => {
  return (
    <li className="ImageGalleryItem">
      <img src={webformatURL} alt="" className="ImageGalleryItem-image" />
    </li>
  );
};
