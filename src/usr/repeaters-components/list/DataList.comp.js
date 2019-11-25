import groupBy from 'lodash/groupBy';
import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import { DataListTypes } from './DataList.props';

const styles = theme => ({
  nested: {
    paddingLeft: theme.spacing(4),
  },
});

class DataList extends React.Component {
  constructor (props) {
    super(props);
    const { itemsMetaData } = this.props;
    this.state = {
      itemsMetaDataMap: itemsMetaData ? groupBy(itemsMetaData, ['type']) : {},
    };
  }

  componentDidUpdate (prevProps, prevState, snapshot) {
    const { itemsMetaData } = this.props;
    if (itemsMetaData !== prevProps.itemsMetaData) {
      this.setState({
        itemsMetaDataMap: itemsMetaData ? groupBy(itemsMetaData, ['type']) : {},
      });
    }
  }

  handleItemClick = (itemValueData) => e => {
    if (e) {
      e.stopPropagation();
      e.preventDefault();
    }
    this.props.onItemClick({
      itemValueData
    });
  };

  renderList = (itemsValueData) => {
    const { itemsMetaDataMap } = this.state;
    const resultElementList = [];
    if (itemsValueData && itemsValueData.length > 0) {
      itemsValueData.forEach((itemValueData, idx) => {
        if (itemValueData) {
          const { id, type, primaryText, secondaryText, href } = itemValueData;
          if (id && type) {
            if (href) {
              resultElementList.push(
                <ListItem key={id} button={false}>
                  <ListItemText
                    primary={
                      <a href={href} onClick={this.handleItemClick(itemValueData)}>{primaryText}</a>
                    }
                    secondary={secondaryText}
                  />
                </ListItem>
              );
            } else {
              resultElementList.push(
                <ListItem key={id} button={true} onClick={this.handleItemClick(itemValueData)}>
                  <ListItemText primary={primaryText} secondary={secondaryText}/>
                </ListItem>
              );
            }
          }
        }
      });
    }
    return (
      <List
        component="div"
        disablePadding={true}
      >
        {resultElementList}
      </List>
    );
  };

  render () {
    const { itemsValueData } = this.props;
    return this.renderList(itemsValueData);
  }
}

DataList.propTypes = DataListTypes;

DataList.defaultProps = {
  itemsValueData: [
    { id: '00001', type: 'someType', primaryText: 'List Item 00001', secondaryText: 'Subtext 00001' },
    { id: '00002', type: 'someType', primaryText: 'List Item 00002', secondaryText: 'Subtext 00002' },
    { id: '00003', type: 'someType', primaryText: 'List Item 00003', secondaryText: 'Subtext 00003' }
  ],
  itemsMetaData: [],
  onItemClick: () => {
    console.info('RecursiveList.onItemClick is not set');
  }
};

export default withStyles(styles)(DataList);
