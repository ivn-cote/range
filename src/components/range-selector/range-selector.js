import React, { PropTypes } from 'react';
import _ from 'lodash';

const DFLT_VALUE = 1e6;

class RangeSelector extends React.Component {
  // all measurements in cents
  static propTypes = {
    min: PropTypes.number,
    max: PropTypes.number,
    step: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired
  };
  static defaultProps = {
    min: 0,
    max: 1e6,
    step: 1,
    value: DFLT_VALUE
  };
  constructor(props) {
    super(props);
    this.state = {
      inputValue: props.value
    }
  };

  handleChange = (evt) => {
    this.setState({ inputValue: _.get(evt, 'target.value', DFLT_VALUE) })
  }

  render() {
    const { inputValue } = this.state;
    const inputProps = _.assign({}, this.props, { value: inputValue });
    return (
      <div className='range-selector'>
        <div>{ inputValue }</div>
        <input type='range' { ...inputProps } onChange={ this.handleChange } />
      </div>
    );
  }
}

export default RangeSelector;
