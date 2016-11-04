import { connect } from 'react-redux'
import { updateAmount } from '../../actions'
import React, { PropTypes } from 'react';
import _ from 'lodash';

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
    const inputProps = _.pick(this.props, ['min', 'max', 'step', 'value']);

    return (
      <div className='range-selector'>
        <div>{ this.props.value }</div>
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
