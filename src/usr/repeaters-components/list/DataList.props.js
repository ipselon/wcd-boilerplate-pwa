import PropTypes from 'prop-types';

export const DataListTypes = {
  /**
   * The array of the data objects.
   *
   * Read about the structure of the data object in the component's Readme.
   */
  listItems: PropTypes.arrayOf(PropTypes.shape({
    // The list item is. It is a required field and should be unique.
    id: PropTypes.string.isRequired,
    /**
     * A reference to the record with the same type in the meta data.
     * Meta data is used mainly for the decoration of the list item with the particular type.
     */
    type: PropTypes.string,
    //
    primaryText: PropTypes.string,
    //
    secondaryText: PropTypes.string,
    /**
     * It is used for creating an URL in the list item instead of button.
     * Will be passed in the onItemClick output object.
     */
    href: PropTypes.string,
    /**
     * Any particular data you want to pass through the list item when the user clicks on the item.
     * This data will appear in the onItemClick output object.
     */
    data: PropTypes.object,
  })),
  /*
   * An array of the data objects references.
   * Each data object item in the itemsData references to the item in the itemsMetaData by the "type" value.
   *
   * Read more in the component's Readme.
   */
  listItemsMetaData: PropTypes.arrayOf(PropTypes.shape({
    // The type value for referencing to the item value.
    type: PropTypes.string,
    // This element is used as the icon in the list item with this type.
    icon: PropTypes.element,
    /**
     * If true, compact vertical padding designed for keyboard and mouse input will be used.
     */
    dense: PropTypes.bool,
    // If true, the list item will be disabled.
    disabled: PropTypes.bool,
    // If true, the left and right padding is removed.
    disableGutters: PropTypes.bool,
    // If true, a 1px light border is added to the bottom of the list item.
    divider: PropTypes.bool,
    // Use to apply selected styling.
    selected: PropTypes.bool,
    // Use it when the list item should trigger onDrillInClick event
    drillIn: PropTypes.bool,
    // Use it when the list item should trigger onNavigateBackClick event
    navigateBack: PropTypes.bool,
  })),
  /*
   * Triggered when the user click on the list item.
   *
   * @param {DataListItemClickTypes}
   */
  onItemClick: PropTypes.func,
  /*
   * Triggered when the user click on the drillIn item.
   *
   * @param {DataListItemClickTypes}
   */
  onDrillInClick: PropTypes.func,
  /*
   * Triggered when the user click on the navigateBack item.
   *
   * @param {DataListItemClickTypes}
   */
  onNavigateBackClick: PropTypes.func
};

export const DataListItemClickTypes = {
  /**
   * A value corresponds to the data of the single item in the listItems.
   */
  listItem: PropTypes.shape({
    // It is a required field and should be unique.
    id: PropTypes.string.isRequired,
    /**
     * A reference to the record with the same type in the meta data.
     * Meta data is used mainly for the decoration of the list item with the particular type.
     */
    type: PropTypes.string,
    //
    primaryText: PropTypes.string,
    //
    secondaryText: PropTypes.string,
    // It is used for creating an URL in the list item instead of button.
    href: PropTypes.string,
    /**
     * Any particular data you want to pass through the list item when the user clicks on the item.
     */
    data: PropTypes.object,
  }),
};
