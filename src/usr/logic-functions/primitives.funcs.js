/**
 * This function is testing for the comment
 *
 */
// @param {SplitOnTrueAndFalseInputOptionsTypes from ./primitives.props.js}
export const splitOnTrueAndFalse = options => dispatch => {
  // do something here with options;
  const { trueData, falseData } = options;
  dispatch('trueData', trueData);
  /**
   * Perepuga....
   */
  // @param {SplitOnTrueAndFalseDispatchTypes from ./primitives.props.js}
  dispatch('falseData', falseData);
};
