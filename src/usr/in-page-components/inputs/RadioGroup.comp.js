import isNil from 'lodash/isNil';
import pickBy from 'lodash/pickBy';
import uniqueId from 'lodash/uniqueId';
import React from 'react';
import RadioGroupMUI from '@material-ui/core/RadioGroup';
import RadioMUI from '@material-ui/core/Radio';
import FormControlLabelMUI from '@material-ui/core/FormControlLabel';
import { makeStyles } from '@material-ui/core/styles';
import { RadioGroupTypes } from './RadioGroup.props';
import InputCircularProgress from './assets/InputCircularProgress';

const useStyles = makeStyles(theme => ({
  group: {
    position: 'relative',
  },
}));

/**
 * Radio buttons allow the user to select one option from a set.
 * Use radio buttons when the user needs to see all available options.
 * If available options can be collapsed, consider using a dropdown menu because it uses less space.
 */
const RadioGroup = (props) => {
  const classes = useStyles();
  const uniqueName = uniqueId('radioGroup');
  const handleChange = e => {
    props.onChange({
      value: e.target.value
    });
  };

  const { items, selectedValue: value, loading, row, labelPlacement, } = props;
  const radioElements = [];
  if (items && items.length > 0) {
    let radioItem;
    let muiRadioItemProps;
    let muiRadioLabelProps;
    for (let i = 0; i < items.length; i++) {
      radioItem = items[i];
      if (radioItem) {
        const {label, value, required, disabled, color} = radioItem;
        muiRadioLabelProps = pickBy(
          { label, labelPlacement },
          i => !isNil(i)
        );
        if (labelPlacement) {
          muiRadioLabelProps.labelPlacement = labelPlacement;
        }
        muiRadioItemProps = pickBy(
          { value, required, disabled, color },
          i => !isNil(i)
        );
        if (loading) {
          muiRadioItemProps.disabled = true;
        }
        radioElements.push(
          <FormControlLabelMUI
            key={`${uniqueName}${i}`}
            {...muiRadioLabelProps}
            control={<RadioMUI {...muiRadioItemProps} />}
          />
        )
      }
    }
  }
  const muiRadioGroupProps = pickBy({ row, value }, i => !isNil(i));
  return (
    <RadioGroupMUI
      aria-label={uniqueName}
      name={uniqueName}
      className={classes.group}
      {...muiRadioGroupProps}
      onChange={handleChange}
    >
      {radioElements}
      {loading && (
        <InputCircularProgress />
      )}
    </RadioGroupMUI>
  );
};

RadioGroup.propTypes = RadioGroupTypes;

RadioGroup.defaultProps = {
  items: [
    {label: 'Orange', value: 'orange', labelPlacement: 'end', color: 'default'},
    {label: 'Green', value: 'green', labelPlacement: 'end', color: 'default'},
    {label: 'Blue', value: 'blue', labelPlacement: 'end', color: 'default'},
  ],
  row: true,
  selectedValue: 'Green',
  onChange: () => {
    console.info('RadioGroup.onChange is not set');
  }
};

export default RadioGroup;
