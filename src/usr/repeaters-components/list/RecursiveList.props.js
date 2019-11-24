import PropTypes from 'prop-types';

export const RecursiveListTypes = {
  /**
   * The array of the data objects.
   *
   * Read about the structure of the data object in the component's Readme.
   */
  itemsValueData: PropTypes.array,
  /*
   * An array of the data objects references.
   * Each data object item in the itemsData references to the item in the itemsMetaData by the "type" value.
   *
   * Read more in the component's Readme.
   */
  itemsMetaData: PropTypes.arrayOf(PropTypes.shape({
    // The type value for referencing to the item value.
    type: PropTypes.string,
  })),
  /*
   * Triggered when the user click on the list item.
   *
   * @param {RecursiveListItemClickTypes}
   */
  onItemClick: PropTypes.func
};

export const RecursiveListItemClickTypes = {
  /**
   * A value data corresponding to the value data object of the single item in the itemsValueData.
   */
  itemValueData: PropTypes.object,
};
