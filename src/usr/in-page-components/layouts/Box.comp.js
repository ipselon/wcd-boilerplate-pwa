import pickBy from 'lodash/pickBy';
import isNil from 'lodash/isNil';
import forOwn from 'lodash/forOwn';
import isEmpty from 'lodash/isEmpty';
import React from 'react';
import BoxMUI from '@material-ui/core/Box';
import { withTheme } from '@material-ui/core/styles';
import findColor from '../../common-props/utils/colorMap';
import { BoxTypes } from './Box.props';
import elevationMap from '../../common-props/utils/elevationMap';

/**
 * Box comment
 */
class Box extends React.Component {
  render () {
    let properties = {};
    const {
      borders,
      display,
      flexbox,
      palette,
      positions,
      sizing,
      spacing,
      boxShadow,
      typography,
      content,
      theme
    } = this.props;
    if (borders) {
      properties = borders;
      if (borders.borderColor) {
        const { colorHue, colorShade } = borders.borderColor;
        properties.borderColor = findColor(colorHue, colorShade, theme);
      }
    }
    if (display) {
      properties = {
        ...properties,
        ...pickBy(display, i => !!i)
      };
    }
    if (palette) {
      const { color, backgroundColor } = palette;
      if (color) {
        const { colorHue, colorShade } = color;
        properties.color = findColor(colorHue, colorShade, theme);
      }
      if (backgroundColor) {
        const { colorHue, colorShade } = backgroundColor;
        properties.bgcolor = findColor(colorHue, colorShade, theme);
      }
    }
    if (sizing) {
      properties = {
        ...properties,
        ...pickBy(sizing, i => !!i)
      };
    }
    if (flexbox) {
      properties = {
        ...properties,
        ...flexbox
      };
    }
    if (positions) {
      properties = {
        ...properties,
        ...positions
      };
    }
    if (spacing) {
      forOwn(spacing, (spacingGroup) => {
        const validSpacing = pickBy(spacingGroup, i => !!i);
        if (!isEmpty(validSpacing)) {
          forOwn(validSpacing, (value, prop) => {
            if (!isNaN(value)) {
              properties[prop] = parseFloat(value);
            } else {
              properties[prop] = value;
            }
          });
        }
      });
    }
    if (boxShadow) {
      properties.boxShadow = elevationMap[boxShadow];
    }
    if (typography) {
      properties = {
        ...properties,
        ...typography
      };
    }
    // get rid of nulls and undefined
    properties = pickBy(properties, i => !isNil(i));
    //
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
    border: 1,
  },
  content: [<span/>],
};

export default withTheme(Box);
