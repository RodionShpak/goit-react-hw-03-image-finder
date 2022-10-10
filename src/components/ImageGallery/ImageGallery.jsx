import { ImageGalleryItem } from './ImageGalleryItem/ImageGalleryItem';

export const ImageGallery = ({ images, children }) => {
  return (
    <ul className="ImageGallery">
      {images.map(({ id, webformatURL }) => {
        return <ImageGalleryItem key={id} webformatURL={webformatURL} />;
      })}
      {children}
    </ul>
  );
};
