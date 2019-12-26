import PropTypes from 'prop-types';

export const SampleFunctionTypes = {
  /**
   * The first function argument.
   */
  argument: PropTypes.shape({
    // text value
    text: PropTypes.string,
    // extra specific logic options for some processing
    extraOptions: PropTypes.shape({
      extraFlag: PropTypes.bool
    })
  }),
  /**
   * The function dispatch
   */
  optionsFromInput: PropTypes.shape({
    // text value
    text: PropTypes.string,
    // extra options after some processing
    extraOptions: PropTypes.shape({
      extraFlag: PropTypes.bool
    })
  })
};
