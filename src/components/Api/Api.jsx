import axios from 'axios';
import PropTypes from 'prop-types';

const Key = '34917594-54f63cc7e31052419aaab69d2';
axios.defaults.baseURL = 'https://pixabay.com/api';

export const GetImage = async (searchQuery, page) => {
  const response = await axios.get(
    `/?key=${Key}&q=${searchQuery}&page=${page}&image_type=photo&orientation=horizontal&per_page=12`
  );

  return response.data;
};

GetImage.propTypes = {
  searchQuery: PropTypes.string,
  page: PropTypes.number,
};
