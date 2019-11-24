import groupBy from 'lodash/groupBy';
import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import { RecursiveListTypes } from './RecursiveList.props';

const styles = theme => ({
  nested: {
    paddingLeft: theme.spacing(4),
  },
});

class RecursiveList extends React.Component {
  constructor(props) {
    super(props);
    const { itemsMetaData } = this.props;
    this.state = {
      expandedById: {},
      itemsMetaDataMap: itemsMetaData ? groupBy(itemsMetaData, ['type']) : {},
    };
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    const { itemsMetaData } = this.props;
    if (itemsMetaData !== prevProps.itemsMetaData) {
      this.setState({
        itemsMetaDataMap: itemsMetaData ? groupBy(itemsMetaData, ['type']) : {},
      });
    }
  }

  handleChangeInputValue = e => {
    this.setState({
      localInputText: e.target.value
    });
    this.props.onInputTextChange({
      enteredText: e.target.value
    });
  };

  handleItemClick = (itemValueData) => e => {
    if (e) {
      e.stopPropagation();
      e.preventDefault();
    }
    this.props.onItemClick({
      itemValueData
    });
  };

  handleItemToggle = (itemId) => (e) => {
    if (e) {
      e.stopPropagation();
      e.preventDefault();
    }
    const expandedById = {...this.state.expandedById};
    expandedById[itemId] = !expandedById[itemId];
    this.setState({
      expandedById
    });
  };

  renderList = (itemsValueData, level = 0) => {
    const { classes } = this.props;
    const { itemsMetaDataMap, expandedById } = this.state;
    const resultElementList = [];
    if (itemsValueData && itemsValueData.length > 0) {
      itemsValueData.forEach((itemValueData, idx) => {
        if (itemValueData) {
          const {id, type, primaryText, secondaryText, href, children} = itemValueData;
          if (id && type) {
            if (children && children.length > 0) {
              resultElementList.push(
                <ListItem key={id} button={true} onClick={this.handleItemToggle(id)}>
                  <ListItemText primary={primaryText} secondary={secondaryText} />
                  {expandedById[id] ? <ExpandLess /> : <ExpandMore />}
                </ListItem>
              );
              resultElementList.push(
                <Collapse in={expandedById[id]} timeout="auto" unmountOnExit={true}>
                  {this.renderList(children, level + 1)}
                </Collapse>
              )
            } else {
              resultElementList.push(
                <ListItem key={id} button={!href} onClick={this.handleItemClick(itemValueData)}>
                  {href
                    ? (
                      <ListItemText
                        primary={
                          <a href={href} onClick={this.handleItemClick(itemValueData)}>{primaryText}</a>
                        }
                        secondary={secondaryText}
                      />
                    )
                    : (
                      <ListItemText primary={primaryText} secondary={secondaryText} />
                    )
                  }
                </ListItem>
              )
            }
          }
        }
      });
    }
    return (
      <List
        component="div"
        className={level > 0 ? classes.nested : ''}
        disablePadding={true}
      >
        {resultElementList}
      </List>
    );
  };

  render() {
    const { itemsValueData } = this.props;
    return this.renderList(itemsValueData);
  }
}

RecursiveList.propTypes = RecursiveListTypes;

RecursiveList.defaultProps = {
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

export default withStyles(styles)(RecursiveList);
