import PropTypes from 'prop-types';

export const StoreVariableTypes = {
  /**
   * The first function argument.
   */
  argument: PropTypes.shape({
    /**
     * A variable name for storing
     */
    name: PropTypes.string,
    /**
     * A value to store
     */
    value: PropTypes.any,
  })
};

export const GetVariablesTypes = {
  /**
   * An array of the variable names to be retrieved from the variable storage
   */
  argument: PropTypes.array,
  /**
   * The object with keays and values from the variable storage: {key1: value1, key2: value2}
   */
  variablesMap: PropTypes.object,
};
