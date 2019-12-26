import PropTypes from 'prop-types';

export const TypographyTypes = {
  /**
   * The font-size CSS property sets the size of the font.
   */
  fontSize: PropTypes.number,
  /**
   * The font-style CSS property sets whether a font should be styled with a normal, italic.
   */
  fontStyle: PropTypes.oneOf(['', 'normal', 'italic']),
  /**
   * Sets the weight (or boldness) of the font according to the application settings.
   */
  fontWeight: PropTypes.oneOf(['', 'fontWeightLight', 'fontWeightRegular', 'fontWeightMedium', 'fontWeightBold']),
  /**
   * The letter-spacing CSS property sets the spacing behavior between text characters.
   */
  letterSpacing: PropTypes.string,
  /**
   * The line-height CSS property sets the height of a line box.
   * It's commonly used to set the distance between lines of text.
   * On block-level elements, it specifies the minimum height of line boxes within the element.
   */
  lineHeight: PropTypes.string,
  /**
   * The text-align CSS property sets the horizontal alignment of a block element or table-cell box.
   */
  textAlign: PropTypes.oneOf(['', 'start', 'end', 'left', 'right', 'center', 'justify', 'match-parent']),
};

export const TypographyComponentTypes = {
  // Set the text-align on the component.
  align: PropTypes.oneOf(['inherit', 'left', 'center', 'right', 'justify']),
  /**
   * The color of the component. It supports those theme colors that make sense for this component.
   */
  color: PropTypes.oneOf(['initial', 'inherit', 'primary', 'secondary', 'textPrimary', 'textSecondary', 'error']),
  // Controls the display type
  display: PropTypes.oneOf(['initial', 'block', 'inline']),
  // If true, the text will have a bottom margin.
  gutterBottom: PropTypes.bool,
  /**
   * If true, the text will not wrap, but instead will truncate with a text overflow ellipsis.
   * Note that text overflow can only happen with block or inline-block level elements
   * (the element needs to have a width in order to overflow).
   */
  noWrap: PropTypes.bool,
  // If true, the text will have a bottom margin.
  paragraph: PropTypes.bool,
  // Applies the theme typography styles.
  variant: PropTypes.oneOf([
    'h1',
    'h2',
    'h3',
    'h4',
    'h5',
    'h6',
    'subtitle1',
    'subtitle2',
    'body1',
    'body2',
    'caption',
    'button',
    'overline',
    'srOnly',
    'inherit'
  ]),
  // The content of the component.
  text: PropTypes.string,
};