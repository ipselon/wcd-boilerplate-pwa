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
  // The data object to store
  data: PropTypes.object,
};

export const GetFromStateArgTypes = {
  // The key under which the data is changed in the state storage
  keys: PropTypes.arrayOf(PropTypes.string).isRequired,
  // An extra data
  extraData: PropTypes.object,
};

export const GetFromStateDispatchTypes = {
  // The data object from store
  data: PropTypes.object,
  // The extra data passed in as the additional parameter
  extraData: PropTypes.object,
};
