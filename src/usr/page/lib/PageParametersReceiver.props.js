import PropTypes from 'prop-types';

export const PageParametersReceiverTypes = {
  /**
   * Pass the object with the page parameters into this property
   */
  pageParameters: PropTypes.object,
  /*
   * Triggers when the pageParameters property receives new value
   *
   * @functionTypes {PageParametersReceiverOnReceivedTypes}
   */
  onReceived: PropTypes.func,
};

export const PageParametersReceiverOnReceivedTypes = {
  argument: PropTypes.shape({
    // parameters received from the page
    pageParameters: PropTypes.object,
  }),
};
