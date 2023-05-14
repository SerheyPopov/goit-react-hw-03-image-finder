import React, { Component } from 'react';
import PropTypes from 'prop-types';
import toast, { Toaster } from 'react-hot-toast';

import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { GetImage } from './Api/Api';
import { Loader } from './Loader/Loader';
import { Button } from './Button/Button';
import css from './App.module.css';

export class App extends Component {
  static propTypes = {
    search: PropTypes.string,
    images: PropTypes.array,
    loading: PropTypes.bool,
    page: PropTypes.number,
    totalHits: PropTypes.number,
    loadMore: PropTypes.bool,
  };

  state = {
    search: ' ',
    images: [],
    loading: false,
    page: 1,
    totalHits: 0,
    loadMore: false,
  };

  componentDidUpdate(_, prevState) {
    const { search, page, images } = this.state;
    try {
      if (prevState.search !== search || prevState.page !== page) {
        this.setState({ loading: true });
        GetImage(search.search, page)
          .then(response => {
            if (!response.hits.length) {
              toast.error(`${search.search} not found`);
            }
            this.setState({
              images: [...images, ...response.hits],
              loadMore: page < Math.ceil(response.totalHits / 12),
            });
          })
          .finally(() => this.setState({ loading: false }));
      }
    } catch (error) {
      console.log(error);
    }
  }

  handleChange = search => {
    if (search.search === '') {
      return toast.error('Please, use your keyboard');
    }
    this.setState({ search: search, images: [], page: 1, totalHits: 0 });
  };

  handleLoadMore = () => {
    this.setState(prev => ({ page: prev.page + 1 }));
  };

  render() {
    const { loading, images, loadMore } = this.state;
    return (
      <div className={css.app}>
        <Searchbar onSubmit={this.handleChange} />
        {loading && <Loader load={loading} />}
        {images && <ImageGallery value={images} />}
        {loadMore && <Button onClick={this.handleLoadMore} />}
        <Toaster toastOptions={{ duration: 1500 }} position="top-right" />
      </div>
    );
  }
}
