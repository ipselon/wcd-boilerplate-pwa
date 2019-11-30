import React from 'react';
import GridMUI from '@material-ui/core/Grid';
import gridSpacingMap from '../../common-props/utils/gridSpacingMap';
import gridMap from '../../common-props/utils/gridMap';
import { GridWithCellsTypes } from './GridWithCells.props';

class GridWithCells extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { gridProperties, flexProperties, cells } = this.props;
    const { spacing } = gridProperties;
    const { alignContent, alignItems, direction, justify, wrap } = flexProperties;
    const contentList = [];
    if (cells && cells.length > 0) {
      cells.forEach((contentCellItem, idx) => {
        const { cellContent, cellProperties } = contentCellItem;
        const { lg, md, sm, xl, xs, zeroMinWidth } = cellProperties;
        contentList.push(
          <GridMUI
            key={`cell${idx}`}
            item={true}
            lg={gridMap[lg]}
            md={gridMap[md]}
            sm={gridMap[sm]}
            xl={gridMap[xl]}
            xs={gridMap[xs]}
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
        spacing={gridSpacingMap[spacing]}
      >
        {contentList}
      </GridMUI>
    );
  }
}

GridWithCells.propTypes = GridWithCellsTypes;

GridWithCells.defaultProps = {
  gridProperties: {
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
  cells: [
    {
      cellContent: null,
      cellProperties: {
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

export default GridWithCells;
