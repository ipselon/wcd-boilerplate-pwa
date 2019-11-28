import React from 'react';
import BoxMUI from '@material-ui/core/Box';
import { useTheme } from '@material-ui/core/styles';
import findColor from '../../common-props/utils/colorMap';
import { BoxTypes } from './Box.props';

const Box = (props) => {
  const theme = useTheme();
  const { content, borders, palette } = props;
  const properties = {};
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
};

Box.propTypes = BoxTypes;

Box.defaultProps = {
  doNotUseInFlows: true,
  borders: {
    border: '0',
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

export default Box;
