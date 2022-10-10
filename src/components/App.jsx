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
  };

  getImages = ({ hits }) => {
    this.setState({ images: hits });
  };

  isLoadToggle = () => {
    this.setState(({ isLoad }) => ({ isLoad: !isLoad }));
  };

  onLoadMore = async () => {
    const images = await imageRequestService.getImage();
    const { hits: newImages } = images;

    this.setState(({ images }) => {
      return { images: [...images, ...newImages] };
    });
  };

  render() {
    const { images, isLoad } = this.state;

    return (
      <div className="App">
        <Searchbar isLoadToggle={this.isLoadToggle} getImages={this.getImages}>
          <Button type="submit" label="Search" className="SearchForm-input" />
        </Searchbar>
        {isLoad && (
          <ThreeDots
            height="80"
            width="80"
            radius="9"
            color="#4fa94d"
            ariaLabel="three-dots-loading"
            wrapperStyle={{}}
            wrapperClassName=""
            visible={true}
          />
        )}
        {images && images.length > 0 && (
          <>
            <ImageGallery images={images}></ImageGallery>
            <Button
              onLoadMore={this.onLoadMore}
              type="button"
              label="Load more"
              className="Button"
            />
          </>
        )}
        <Modal />
      </div>
    );
  }
}
