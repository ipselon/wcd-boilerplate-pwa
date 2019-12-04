import PropTypes from 'prop-types';

export const ButtonTypes = {
  /**
   * Button label text
   */
  label: PropTypes.string,
  /*
   * Triggered when the user click on the button
   *
   * @param {ButtonOnClickTypes}
   */
  onClick: PropTypes.func
};

export const ButtonOnClickTypes = {
};
