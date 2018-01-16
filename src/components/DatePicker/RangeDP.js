import React from 'react'
import cn from 'classnames'

import {DatePicker as AntDatePicker} from 'antd'

import './styles.css'

class RangeDP extends React.Component{
   constructor(props){
       super(props);
       const {rangeSet} = props;
       const {defaultStartValue,defaultEndValue} = rangeSet;

       this.state = {
           startValue: defaultStartValue,
           endValue: defaultEndValue,
           endChosen: !!defaultStartValue && !!defaultEndValue,
           defaultEnd: null,
       };
   }

    disabledStartDate = (startValue) => {
        const endValue = this.state.endValue;
        if (!startValue || !endValue) {
            return false;
        }
        return startValue.valueOf() > endValue.valueOf();
    };

    disabledEndDate = (endValue) => {
        const startValue = this.state.startValue;
        if (!endValue || !startValue) {
            return false;
        }
        return endValue.valueOf() <= startValue.valueOf();
    };

    onChange = (field, value) => {
        (field === 'endValue' && value) ?
            this.setState({
                [field]: value,
                defaultEnd: value,
                endChosen: true,
            })
            :
            this.setState({
                [field]: value,
                defaultEnd: value,
                endChosen: false,
            })
    };

    render() {
        const {format} = this.props;
        const {defaultValue, range, rangeSet, delimiter} = this.props;
        const {placeholderStart,placeholderEnd} = rangeSet;
        const { startValue, endValue,defaultEnd, endChosen } = this.state;

        const classRPend = cn({'datepicker-base-range-chosen': endChosen});


        return (
            <div className="datepicker-base-range">
                <AntDatePicker format={format}
                               placeholder={placeholderStart}
                               className="datepicker-base-range-chosen"

                               disabledDate={this.disabledStartDate}
                               value={startValue}
                               onChange={(val) => this.onChange('startValue', val)}/>

                {delimiter && <span className="datepicker-base-range-delim"> {delimiter} </span>}

                <AntDatePicker format={format}
                               placeholder={placeholderEnd}
                               className={classRPend}

                               disabledDate={this.disabledEndDate}
                               value={defaultEnd}
                               onChange={(val) => this.onChange('endValue', val)}/>
            </div>
        )
    }
}

export default RangeDP;