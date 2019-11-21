import PropTypes from 'prop-types';

export const GridRepeaterTypes = {
  repeaterItems: PropTypes.arrayOf(PropTypes.shape({
    type: PropTypes.string,
    content: PropTypes.element,
  })),
  repeaterData: PropTypes.arrayOf(PropTypes.shape({
    type: PropTypes.string,
    id: PropTypes.string,
    itemData: PropTypes.object,
  })),
};
