import isEqual from 'lodash/isEqual';
import React from 'react';
import { ButtonTypes } from './Button.props';

const styles = {
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  containerStyle: {
    marginTop: '1em',
    marginBottom: '1em',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }
};

class Button extends React.Component {
  constructor(props) {
    super(props);
  }

  handleButtonClick = e => {
    if (e) {
      e.stopPropagation();
      e.preventDefault();
    }
    this.props.onSubmit({
      enteredText: this.state.localInputText
    });
  };

  render() {
    const { data, cells } = this.props;
    const { rootStyle, localInputText } = this.state;
    return (
      <div style={rootStyle}>
        <h3>{data.title}</h3>
        <div style={styles.containerStyle}>
          <input
            type="text"
            name="inputText"
            id="inputText"
            placeholder={data.placeholder}
            value={localInputText}
            onChange={this.handleChangeInputValue}
          />
        </div>
        <div style={styles.containerStyle}>
          <button onClick={this.handleButtonClick}>Click</button>
        </div>
        {cells &&
          cells.map((item, itemIdx) => {
            return (
              <div key={itemIdx} style={styles.containerStyle}>
                {item}
              </div>
            );
          })}
      </div>
    );
  }
}

Button.propTypes = ButtonTypes;

Button.defaultProps = {
  styling: {
    padding: '1em',
    margin: '4em',
    borderColor: '#cdcdcd',
    borderWidth: '2px',
    borderStyle: 'dotted'
  },
  data: {
    title: 'Empty Title Value',
    placeholder: 'Enter text',
    inputText: '',
    inputObject: {},
    inputArray: []
  },
  cells: [<div>Placeholder</div>],
  onInputTextChange: () => {
    console.info('Button.onInputTextChange is not set');
  },
  onSubmit: () => {
    console.info('Button.onSubmit is not set');
  }
};

export default Button;
