import PropTypes from 'prop-types';
import { ColorTypes } from '../../common-props/color.props';

export const BoxTypes = {
  /**
   * If true then the component's instance will not be allowed to use in flows,
   * and you will not see the instance name in the pages instances list
   */
  doNotUseInFlows: PropTypes.bool,
  borders: PropTypes.shape({
    border: PropTypes.string,
    borderTop: PropTypes.string,
    borderRight: PropTypes.string,
    borderBottom: PropTypes.string,
    borderLeft: PropTypes.string,
    borderColor: PropTypes.shape(ColorTypes),
  }),
  palette: PropTypes.shape({
    color: PropTypes.shape(ColorTypes),
    backgroundColor: PropTypes.shape(ColorTypes),
  }),
  // A list of the components that will be placed inside the Box component. Increase the array to have more items.
  content: PropTypes.arrayOf(PropTypes.element),
};
