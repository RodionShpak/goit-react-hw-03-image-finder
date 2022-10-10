import ImageRequestService from 'helpers/ImageRequestService/ImageRequestService';
import { Component } from 'react';

export const imageRequestService = new ImageRequestService();

export class Searchbar extends Component {
  state = {
    searchQuery: '',
  };

  onChange = e => {
    this.setState({ searchQuery: e.currentTarget.value });
  };

  handleSubmit = async e => {
    const { searchQuery } = this.state;
    const { getImages, isLoadToggle } = this.props;

    e.preventDefault();

    imageRequestService.query = searchQuery;
    imageRequestService.resetPage();
    isLoadToggle();

    const images = await imageRequestService.getImage();

    if (images) {
      isLoadToggle();
      getImages(images);
    }
  };

  render() {
    const { children } = this.props;

    return (
      <header className="Searchbar">
        <form onSubmit={this.handleSubmit} className="SearchForm">
          <input
            value={this.searchQuery}
            onChange={this.onChange}
            className="SearchForm-input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
          {children}
        </form>
      </header>
    );
  }
}
