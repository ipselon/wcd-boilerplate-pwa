import PropTypes from 'prop-types';

export const CardWithCommentTypes = {
  /*
   * Submits the entered value
   *
   * @functionTypes {CardWithCommentSubmitTypes}
   */
  onSubmit: PropTypes.func
};

export const CardWithCommentSubmitTypes = {
  argument: PropTypes.shape({
    // entered text into the input control
    enteredText: PropTypes.string
  })
};
