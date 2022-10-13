import { Component } from 'react';
import { ThreeDots } from 'react-loader-spinner';
import { Button } from './Button/Button';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Modal } from './Modal/Modal';
import { imageRequestService, Searchbar } from './Searchbar/SearchBar';

export class App extends Component {
  state = {
    images: null,
    isLoad: false,
    largeImage: null,
  };

  getImages = ({ hits }) => {
    this.setState({ images: hits });
  };

  isLoadToggle = () => {
    this.setState(({ isLoad }) => ({ isLoad: !isLoad }));
  };

  onOpenModal = largeImage => {
    this.setState({ largeImage });
  };

  onLoadMore = async () => {
    this.isLoadToggle();

    const images = await imageRequestService.getImage();

    this.isLoadToggle();

    const { hits: newImages } = images;

    if (images) {
      this.setState(({ images }) => {
        return { images: [...images, ...newImages] };
      });
    }
  };

  onModalClose = () => {
    this.setState({ largeImage: null });
  };

  render() {
    const { images, isLoad, largeImage } = this.state;

    const spinnerStyles = {
      margin: '0 auto',
    };

    return (
      <div className="App">
        <Searchbar isLoadToggle={this.isLoadToggle} getImages={this.getImages}>
          <Button type="submit" label="Search" className="SearchForm-input" />
        </Searchbar>

        {images && images.length > 0 && (
          <>
            <ImageGallery onOpenModal={this.onOpenModal} images={images} />
            {isLoad ? (
              <ThreeDots
                height="100"
                width="120"
                radius="14"
                color="#4fa94d"
                ariaLabel="three-dots-loading"
                wrapperStyle={spinnerStyles}
                wrapperClassName=""
                visible={true}
              />
            ) : (
              <Button
                onLoadMore={this.onLoadMore}
                type="button"
                label="Load more"
                className="Button"
              />
            )}
          </>
        )}
        {largeImage && (
          <Modal onModalClose={this.onModalClose} largeImage={largeImage} />
        )}
      </div>
    );
  }
}
