import React from 'react';
import GridMUI from '@material-ui/core/Grid';
import { GridCellTypes, validGridNumbersMap } from './GridCell.props';

class GridCell extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { lg, md, sm, xl, xs, zeroMinWidth, content } = this.props;
    return (
      <GridMUI
        item={true}
        lg={validGridNumbersMap[lg]}
        md={validGridNumbersMap[md]}
        sm={validGridNumbersMap[sm]}
        xl={validGridNumbersMap[xl]}
        xs={validGridNumbersMap[xs]}
        zeroMinWidth={zeroMinWidth}
      >
        {content}
      </GridMUI>
    );
  }
}

GridCell.propTypes = GridCellTypes;

GridCell.defaultProps = {
  lg: 'false',
  md: 'false',
  sm: 'false',
  xl: 'false',
  xs: 'true',
  zeroMinWidth: false,
  content: null,
};

export default GridCell;
