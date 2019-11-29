import pickBy from 'lodash/pickBy';
import isNumber from 'lodash/isNumber';
import React from 'react';
import BoxMUI from '@material-ui/core/Box';
import { withTheme } from '@material-ui/core/styles';
import findColor from '../../common-props/utils/colorMap';
import { BoxTypes } from './Box.props';

class Box extends React.Component {
  render() {
    const { content, borders, palette, theme } = this.props;
    let properties = {};
    if (borders) {
      const { border, borderTop, borderRight, borderBottom, borderLeft, borderColor } = borders;
      properties = {
        ...properties,
        ...pickBy({ border, borderTop, borderRight, borderBottom, borderLeft }, isNumber)
      };
      if (borderColor) {
        const { colorHue, colorShade } = borderColor;
        properties.borderColor = findColor(colorHue, colorShade, theme);
      }
    }
    const { color, backgroundColor } = palette;
    if (color) {
      const { colorHue, colorShade } = color;
      properties.color = findColor(colorHue, colorShade, theme);
    }
    if (backgroundColor) {
      const { colorHue, colorShade } = backgroundColor;
      properties.bgcolor = findColor(colorHue, colorShade, theme);
    }
    console.info('properties: ', properties);
    return (
      <BoxMUI {...properties}>
        {content}
      </BoxMUI>
    );
  }
}

Box.propTypes = BoxTypes;

Box.defaultProps = {
  doNotUseInFlows: true,
  borders: {
    border: 0,
  },
  palette: {
    color: {
      colorHue: 'red',
      colorShade: '100'
    },
    backgroundColor: {
      colorHue: 'blue',
      colorShade: '100'
    }
  },
  content: [<span/>],
};

export default withTheme(Box);
