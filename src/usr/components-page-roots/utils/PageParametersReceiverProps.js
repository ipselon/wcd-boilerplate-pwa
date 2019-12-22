import PropTypes from 'prop-types';

export const PageParametersReceiverTypes = {
  // Pass the object with the page parameters
  // and listen to the onPageParametersReceived event on the flow
  pageParameters: PropTypes.object,
  // Triggers when the pageParameters property receives new value
  // @param {OnPageParametersReceivedTypes}
  onPageParametersReceived: PropTypes.func,
};

export const OnPageParametersReceivedTypes = {
  // parameters received from the page
  pageParameters: PropTypes.object,
};
