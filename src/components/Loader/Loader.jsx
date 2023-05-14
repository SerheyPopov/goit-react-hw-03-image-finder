import { RotatingLines } from 'react-loader-spinner';
import PropTypes from 'prop-types';

import css from './Loader.module.css';

export const Loader = load => {
  return (
    <div className={css.loading}>
      <RotatingLines
        strokeColor="black"
        strokeWidth="3"
        animationDuration="1.2"
        width="100"
        visible={load.load}
      />
    </div>
  );
};

Loader.propTypes = {
  load: PropTypes.bool,
};