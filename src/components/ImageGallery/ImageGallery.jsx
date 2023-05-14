import PropTypes from 'prop-types';

import css from './ImageGallery.module.css';

import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';

export const ImageGallery = ({ value }) => {
  return (
    <ul className={css.gallery}>
      {value &&
        value.map(value => (
          <ImageGalleryItem
            key={value.id}
            url={value.webformatURL}
            tag={value.tags}
            large={value.largeImageURL}
          />
        ))}
    </ul>
  );
};

ImageGallery.propTypes = {
  value: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.number,
      url: PropTypes.string,
      tag: PropTypes.string,
      large: PropTypes.string,
    })
  ),
};
