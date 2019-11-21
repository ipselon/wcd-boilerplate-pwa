import PropTypes from 'prop-types';

export const PutIntoStateTypes = {
  // The key under which a new data will be put into the state storage
  key: PropTypes.string.isRequired,
  // The data object to store
  data: PropTypes.object,
};

export const AddStateListenerArgTypes = {
  // The key under which the data is changed in the state storage
  key: PropTypes.string.isRequired,
};

export const AddStateListenerDispatchTypes = {
  // The key under which the data is changed in the state storage
  // The data object to store
  data: PropTypes.object,
};
