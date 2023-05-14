import PropTypes from 'prop-types';

import { Formik, Form, Field } from 'formik';

import css from './Searchbar.module.css';

export const Searchbar = ({ onSubmit }) => {
  const hendleSubmit = (values, actions) => {
    onSubmit(values);
    actions.resetForm();
  };
  return (
    <header className={css.searchbar}>
      <Formik initialValues={{ search: '' }} onSubmit={hendleSubmit}>
        <Form className={css.form}>
          <button type="submit" className={css.button}>
            Search
          </button>

          <Field
            className={css.input}
            name="search"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </Form>
      </Formik>
    </header>
  );
};

Searchbar.propTypes = {
  onSubmit: PropTypes.func,
};
