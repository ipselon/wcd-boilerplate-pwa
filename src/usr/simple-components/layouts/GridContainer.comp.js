import React from 'react';
import GridMUI from '@material-ui/core/Grid';
import { GridContainerTypes, validSpacingNumbersMap } from './GridContainer.props';

class GridContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { alignContent, alignItems, direction, justify, wrap, spacing, content } = this.props;
    const contentList = [];
    if (content && content.length > 0) {
      content.forEach((contentCellItem, idx) => {
        contentList.push(React.cloneElement(contentCellItem, {key: `cell${idx}`}));
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

GridContainer.propTypes = GridContainerTypes;

GridContainer.defaultProps = {
  spacing: '0',
  alignContent: 'stretch',
  alignItems: 'stretch',
  direction: 'row',
  justify: 'flex-start',
  wrap: 'wrap',
  doNotUseInFlows: true,
  content: [<div />],
};

export default GridContainer;
