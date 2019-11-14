import isEqual from 'lodash/isEqual';
import React from 'react';
import { TestFormTypes } from './TestForm.props';

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

class TestForm extends React.Component {
  constructor(props) {
    super(props);
    const { inputText, styling, data } = this.props;
    console.info('Constructor data: ', data);
    this.state = {
      prevStyling: styling,
      rootStyle: { ...styling, ...styles.root },
      localInputText: inputText || ''
    };
  }

  static getDerivedStateFromProps(props, state) {
    if (props.styling !== state.prevStyling) {
      const newRootStyle = { ...props.styling, ...styles.root };
      if (!isEqual(newRootStyle, state.rootStyle)) {
        return {
          prevStyling: props.styling,
          rootStyle: newRootStyle
        };
      }
    }
    return null;
  }

  shouldComponentUpdate(nextProps, nextState, nextContext) {
    const { localInputText, rootStyle } = this.state;
    const { data } = this.props;
    return (
      localInputText !== nextState.localInputText ||
      data !== nextProps.data ||
      rootStyle !== nextState.rootStyle
    );
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    const { inputText } = this.props;
    const { localInputText } = this.state;
    if (inputText !== prevProps.inputText && localInputText !== inputText) {
      this.setState({
        localInputText: inputText || ''
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
    console.info('Render TestForm (data): ', data);
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

TestForm.propTypes = TestFormTypes;

TestForm.defaultProps = {
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
    console.info('TestForm.onInputTextChange is not set');
  },
  onSubmit: () => {
    console.info('TestForm.onSubmit is not set');
  }
};

export default TestForm;
