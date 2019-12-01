import PropTypes from 'prop-types';

export const SplitOnTrueAndFalseInputOptionsTypes = {
  // True data to pass through the function
  trueData: PropTypes.object.isRequired,
  // False data to pass through the function
  falseData: PropTypes.object.isRequired,
};


export const SplitOnTrueAndFalseDispatchTypes = {
  data: PropTypes.object,
};
