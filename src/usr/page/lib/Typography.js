import React from 'react';
import TypographyMUI from '@material-ui/core/Typography';
import pickWithValues from '../utils/pickWithValues';
import { TypographyTypes } from '../props/Typography.props';

class Typography extends React.Component {
  render() {
    const { color, display, noWrap, variant, text } = this.props;
    const muiTypographyProps =
      pickWithValues({ color, display, noWrap, variant });
    return (
      <TypographyMUI
        {...muiTypographyProps}
      >
        <span>{text}</span>
      </TypographyMUI>
    );
  }
}

Typography.propTypes = TypographyTypes;

Typography.defaultProps = {
  align: 'inherit',
  color: 'initial',
  display: 'initial',
  gutterBottom: false,
  noWrap: false,
  paragraph: false,
  variant: 'body1',
  text: 'Text here'
};

export default Typography;
