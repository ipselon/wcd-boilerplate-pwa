import React from 'react';
import GridMUI from '@material-ui/core/Grid';
import {
  GridContainerWithCellsTypes,
  validGridNumbersMap,
  validSpacingNumbersMap
} from './GridContainerWithCells.props';

class GridContainerWithCells extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { containerProperties, flexProperties, content } = this.props;
    const { spacing } = containerProperties;
    const { alignContent, alignItems, direction, justify, wrap } = flexProperties;
    const contentList = [];
    if (content && content.length > 0) {
      content.forEach((contentCellItem, idx) => {
        const { cellContent, cellItemProperties } = contentCellItem;
        const { lg, md, sm, xl, xs, zeroMinWidth } = cellItemProperties;
        contentList.push(
          <GridMUI
            key={`cell${idx}`}
            item={true}
            lg={validGridNumbersMap[lg]}
            md={validGridNumbersMap[md]}
            sm={validGridNumbersMap[sm]}
            xl={validGridNumbersMap[xl]}
            xs={validGridNumbersMap[xs]}
            zeroMinWidth={zeroMinWidth}
          >
            {cellContent}
          </GridMUI>
        );
      });
    }
    return (
      <GridMUI
        container={true}
        alignContent={alignContent}
        alignItems={alignItems}
        justify={justify}
        wrap={wrap}
        direction={direction}
        spacing={validSpacingNumbersMap[spacing]}
      >
        {contentList}
      </GridMUI>
    );
  }
}

GridContainerWithCells.propTypes = GridContainerWithCellsTypes;

GridContainerWithCells.defaultProps = {
  containerProperties: {
    spacing: '0'
  },
  flexProperties: {
    alignContent: 'stretch',
    alignItems: 'stretch',
    direction: 'row',
    justify: 'flex-start',
    wrap: 'wrap',
  },
  doNotUseInFlows: true,
  content: [
    {
      cellContent: null,
      cellItemProperties: {
        lg: 'false',
        md: 'false',
        sm: 'false',
        xl: 'false',
        xs: 'true',
        zeroMinWidth: false,
      }
    }
  ],
};

export default GridContainerWithCells;
