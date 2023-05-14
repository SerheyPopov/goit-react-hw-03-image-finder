import PropTypes from 'prop-types';

import css from './Button.module.css';

export const Button = ({ onClick }) => {
  return (
    <div className={css.container}>
      <button type="button" onClick={onClick} className={css.button}>
        Load more
      </button>
    </div>
  );
};

Button.propTypes = {
  onClick: PropTypes.func,
};