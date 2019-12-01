import PropTypes from 'prop-types';

export const FlexboxTypes = {
  /**
   * The flex-direction CSS property sets how flex items are placed
   * in the flex container defining the main axis and the direction (normal or reversed).
   */
  flexDirection: PropTypes.oneOf(['', 'row', 'row-reverse', 'column', 'column-reverse']),
  /**
   * The flex-wrap CSS property sets whether flex items are forced onto one line or can wrap onto multiple lines.
   */
  flexWrap: PropTypes.oneOf(['', 'nowrap', 'wrap', 'wrap-reverse']),
  /**
   * The CSS justify-content property defines how the browser distributes space between and around content
   * items along the main-axis of a flex container, and the inline axis of a container.
   */
  justifyContent: PropTypes.oneOf([
    '',
    'center',
    'start',
    'end',
    'flex-start',
    'flex-end',
    'left',
    'right',
    'normal',
    'space-between',
    'space-around',
    'space-evenly',
    'stretch'
  ]),
  /**
   * The CSS align-items property sets the align-self value on all direct children as a group.
   */
  alignItems: PropTypes.oneOf([
    '', 'center', 'start', 'end', 'flex-start', 'flex-end', 'baseline', 'normal', 'stretch'
  ]),
  /**
   * The CSS align-content property sets the distribution of space between
   * and around content items along a flexbox's cross-axis.
   */
  alignContent: PropTypes.oneOf([
    '',
    'center',
    'start',
    'end',
    'flex-start',
    'flex-end',
    'baseline',
    'space-between',
    'space-around',
    'space-evenly',
    'normal',
    'stretch'
  ]),
  /**
   * The order CSS property sets the order to lay out an item in a flex or grid container.
   * Items in a container are sorted by ascending order value and then by their source code order.
   */
  order: PropTypes.number,
};