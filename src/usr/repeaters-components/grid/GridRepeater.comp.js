import React from 'react';
import Grid from '@material-ui/core/Grid';
import { GridRepeaterTypes } from './GridRepeater.props';

class GridRepeater extends React.Component {
  constructor(props) {
    super(props);
    console.info('Costructor: ', this.props.repeaterItemsData);
    this.repeaterItemsByTypeMap = new Map();
  }

  render() {
    const { repeaterItems, repeaterData } = this.props;
    this.repeaterItemsByTypeMap.clear();
    if (repeaterItems && repeaterItems.length > 0) {
      repeaterItems.forEach(repeaterItem => {
        if (repeaterItem) {
          const { type, content } = repeaterItem;
          this.repeaterItemsByTypeMap.set(type, content);
        }
      });
    }
    if (repeaterData && repeaterData.length > 0) {
      return (
        <Grid container spacing={3}>
          {repeaterData.map((repeaterItemDataConf, idx) => {
            if (repeaterItemDataConf) {
              const { type, id, itemData } = repeaterItemDataConf;
              const foundContent = this.repeaterItemsByTypeMap.get(type);
              if (foundContent) {
                return (
                  <Grid key={id || `${type}${idx}`} item={true}>
                    {React.cloneElement(foundContent, {cloneProps: itemData})}
                  </Grid>
                )
              }
            }
            return (
              <Grid key={`notFound_${idx}`} item={true}>
                <span>Content type was not found</span>
              </Grid>
            );
          })}
        </Grid>
      );
    }
    return <span>Repeater component items data is not set</span>
  }
}

GridRepeater.propTypes = GridRepeaterTypes;

GridRepeater.defaultProps = {
  repeaterItems: [
    {
      type: 'placeholder',
      content: null,
    }
  ],
  repeaterData: [
    {
      type: 'placeholder',
      id: 'cell1',
      itemData: { text: 'Hello here' }
    },
    {
      type: 'placeholder',
      id: 'cell2',
      itemData: { text: 'Hello world!!!' }
    }
  ],
};

export default GridRepeater;
