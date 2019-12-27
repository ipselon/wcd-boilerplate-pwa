import PropTypes from 'prop-types';

export const MemoryTypes = {
  var1: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    isTested: PropTypes.bool,
  }),
};

export const InMemoryTypes = {
  argument: PropTypes.shape({}),
  storage: PropTypes.shape({}),
};

export const GetFromMemoryTypes = {
  storage: PropTypes.shape({}),
};
