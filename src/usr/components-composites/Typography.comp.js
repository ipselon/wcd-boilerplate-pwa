import React from 'react';
import TypographyMUI from '@material-ui/core/Typography';
import pickWithValues from 'usr/library/props/utils/pickWithValues';
import { TypographyTypes } from './Typography.props';

class Typography extends React.Component {
  render() {
    const { align, color, display, gutterBottom, noWrap, paragraph, variant, text } = this.props;
    const muiTypographyProps =
      pickWithValues({ align, color, display, gutterBottom, noWrap, paragraph, variant, text });
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
  doNotUseInFlows: true,
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
