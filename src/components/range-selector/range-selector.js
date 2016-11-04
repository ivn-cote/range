import { connect } from 'react-redux'
import { updateAmount } from '../../actions'
import React, { PropTypes } from 'react';
import _ from 'lodash';
import block from 'bem-cn';

import './range-selector.css';
const b_ = block('range-selector');

const DFLT_VALUE = 1e6;

class RangeComponent extends React.Component {
  // all measurements in cents
  static propTypes = {
    onRangeChange: PropTypes.func,
    min: PropTypes.number,
    max: PropTypes.number,
    step: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired
  };
  static defaultProps = {
    onRangeChange: _.noop,
    min: 0,
    max: 1e6,
    step: 1,
    value: DFLT_VALUE
  };

  handleChange = (evt) => {
    const inputValue = _.get(evt, 'target.value', DFLT_VALUE);
    this.props.onRangeChange(inputValue);
  }

  render() {
    const inputValue = this.props.value + '';
    const inputProps = _.pick(this.props, ['min', 'max', 'step', 'value']);

    return (
      <div className={ b_() }>
        <div className={ b_('main-part') }>{ inputValue.substr(0, inputValue.length - 2) }</div>
        <div className={ b_('cents-part') }>{ inputValue.substr(-2) }</div>
        <input type='range' { ...inputProps } onChange={ this.handleChange } />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  value: state.amountValue
});

const mapDispatchToProps = (dispatch) => ({
  onRangeChange: (data) => {
    dispatch(updateAmount(data))
  }
});

const RangeSelector = connect(
  mapStateToProps,
  mapDispatchToProps
)(RangeComponent);

export default RangeSelector;
