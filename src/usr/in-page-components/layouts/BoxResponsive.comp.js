import pickBy from 'lodash/pickBy';
import isNil from 'lodash/isNil';
import forOwn from 'lodash/forOwn';
import isEmpty from 'lodash/isEmpty';
import React from 'react';
import BoxMUI from '@material-ui/core/Box';
import { withTheme } from '@material-ui/core/styles';
import findColor from '../../common-props/utils/colorMap';
import { BoxResponsiveTypes } from './BoxResponsive.props';
import elevationMap from '../../common-props/utils/elevationMap';

/**
 * BoxResponsive comment..... test
 */
class BoxResponsive extends React.Component {
  render() {
    let properties = {};
    const { stylesByScreenSize, content, theme } = this.props;
    if (stylesByScreenSize && stylesByScreenSize.length > 0) {
      let stylingBreakpoint;
      for(let i = 0; i < stylesByScreenSize.length; i++) {
        stylingBreakpoint = stylesByScreenSize[i];
        if (stylingBreakpoint && stylingBreakpoint.styling) {
          let breakpointProperties = {};
          const { breakpoint, styling } = stylingBreakpoint;
          const { borders, display, flexbox, palette, positions, sizing, spacing, boxShadow } = styling;
          if (borders) {
            const { border, borderTop, borderRight, borderBottom, borderLeft, borderColor, borderRadius } = borders;
            breakpointProperties = {
              ...pickBy({ border, borderTop, borderRight, borderBottom, borderLeft }, i => !isNaN(i)),
              borderRadius,
            };
            if (borderColor) {
              const { colorHue, colorShade } = borderColor;
              breakpointProperties.borderColor = findColor(colorHue, colorShade, theme);
            }
          }
          if (display) {
            breakpointProperties = {
              ...breakpointProperties,
              ...pickBy(display, i => !!i)
            };
          }
          const { color, backgroundColor } = palette;
          if (color) {
            const { colorHue, colorShade } = color;
            breakpointProperties.color = findColor(colorHue, colorShade, theme);
          }
          if (backgroundColor) {
            const { colorHue, colorShade } = backgroundColor;
            breakpointProperties.bgcolor = findColor(colorHue, colorShade, theme);
          }
          if (sizing) {
            // const { width, maxWidth, minWidth, height, maxHeight, minHeight } = sizing;
            breakpointProperties = {
              ...breakpointProperties,
              ...pickBy(sizing, i => !!i)
            };
          }
          if (flexbox) {
            breakpointProperties = {
              ...breakpointProperties,
              ...flexbox
            };
          }
          if (positions) {
            breakpointProperties = {
              ...breakpointProperties,
              ...positions
            };
          }
          if (spacing) {
            forOwn(spacing, (spacingGroup) => {
              const validSpacing = pickBy(spacingGroup, i => !!i);
              if (!isEmpty(validSpacing)) {
                forOwn(validSpacing, (value, prop) => {
                  if (!isNaN(value)) {
                    breakpointProperties[prop] = parseFloat(value);
                  } else {
                    breakpointProperties[prop] = value;
                  }
                });
              }
            });
          }
          if (boxShadow) {
            breakpointProperties.boxShadow = elevationMap[boxShadow];
          }
          // get rid of nulls and undefined
          breakpointProperties = pickBy(breakpointProperties, i => !isNil(i));
          //
          forOwn(breakpointProperties, (propValue, propName) => {
            properties[propName] = properties[propName] || {};
            properties[propName][breakpoint] = propValue;
          });
        }
      }
    }
    console.info('properties: ', properties);
    return (
      <BoxMUI {...properties}>
        {content}
      </BoxMUI>
    );
  }
}

BoxResponsive.propTypes = BoxResponsiveTypes;

BoxResponsive.defaultProps = {
  doNotUseInFlows: true,
  stylesByScreenSize: [
    {
      breakpoint: 'xs',
      styling: {
        borders: {
          border: 1,
        },
      }
    }
  ],
  content: [<span/>],
};

export default withTheme(BoxResponsive);
