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
    //
    primaryText: PropTypes.string,
    //
    secondaryText: PropTypes.string,
    /**
     * It is used for creating an URL link in the list item instead of a button.
     */
    href: PropTypes.string,
    /**
     * Add JSON description of the nested list items.
     * The structure of each child should be equal to the parent list item.
     */
    children: PropTypes.array,
    /**
     * Any arbitrary data you want to pass through the list item when the user clicks on the item.
     * This data will appear in the onItemClick output object.
     */
    data: PropTypes.object,
    metaData: PropTypes.shape({
      // If true, the list item will be selected
      selected: PropTypes.bool,
      // If true, the list item will be disabled.
      disabled: PropTypes.bool,
      /**
       * If true, compact vertical padding designed for keyboard and mouse input will be used.
       */
      dense: PropTypes.bool,
      // If true, the left and right padding is removed.
      disableGutters: PropTypes.bool,
      // If true, a 1px light border is added to the bottom of the list item.
      divider: PropTypes.bool,
    }),
  })),
  /*
   * An array of the data objects references.
   * Each data object item in the itemsData references to the item in the itemsMetaData by the "type" value.
   *
   * Read more in the component's Readme.
   */
  icons: PropTypes.arrayOf(PropTypes.element),
  /*
   * Triggered when the user click on the list item.
   *
   * @param {DataListItemClickTypes}
   */
  onItemClick: PropTypes.func,
};

export const DataListItemClickTypes = {
  /**
   * A value corresponds to the data of the single item in the listItems.
   */
  listItem: PropTypes.shape({
    // It is a required field and should be unique.
    id: PropTypes.string.isRequired,
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
