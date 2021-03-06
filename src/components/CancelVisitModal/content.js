import React from 'react';

import { Form } from 'antd';
import TextArea from '../TextArea'
import Upload from '../Upload'
import DatePicker from '../DatePicker'
import Button from '../Button'

const FormItem = Form.Item;

class ContentForm extends React.Component{
    constructor(props){
        super(props);
        const {rangeSet} = props;

        this.state = {
            dpNum: rangeSet.length || 1,
            rangeSet: rangeSet
        };
    }

    handleSubmit = (e) => {
        e.preventDefault();
        let response = {
            ...this.props.form.getFieldsValue(),
            reason: this.ta.state.value,
        };
        this.props.onSave(response);
    };

    addDp = (e) => {
        e.preventDefault();
        const {dpNum} = this.state;
        if(dpNum< this.props.limit)
            this.setState({dpNum:(dpNum+1)})
    };

    dpChangeHandler = (arr, i) => {
        let newArr = this.state.rangeSet.concat();
        newArr[i] = {
            defaultStartValue: arr[0],
            defaultEndValue: arr[1],
        };

        this.setState({
            rangeSet: newArr,
        })
    };

    renderDp = (fieldDecorator) =>{
        let dpArr = [];
        for(let i =0; i<this.state.dpNum;i++){
            dpArr.push(
                <FormItem key={'dp'+i}>
                    {fieldDecorator(`dp${i}`)(
                        <DatePicker range
                                    rangeSet={this.state.rangeSet[i]}
                                    onChange={(dateArr) => this.dpChangeHandler(dateArr,i)}
                                    delimiter='&mdash;'/>
                    )}
                </FormItem>)
        }
        return (
            <div className="cancelVisitModal-datepickers">
                {dpArr}
            </div>
        );
    };

    changeFieldsVal = (dpNum = this.state.dpNum) => {
        const {rangeSet} = this.state;
        if (rangeSet.length){
            for(let i = 0; i < dpNum; i++){
                let {defaultStartValue, defaultEndValue} = rangeSet[i];
                this.props.form.setFieldsValue({
                    ['dp'+i]: [defaultStartValue, defaultEndValue],
                });
            }
        }
        else {
            this.props.form.setFieldsValue({
                ['dp0']: [null, null],
            });
        }
    };

    componentDidMount(){
        this.changeFieldsVal()
    }

    componentWillReceiveProps(nextProps){
        if (nextProps.rangeSet.length !== this.props.rangeSet.length){
            this.setState({
                dpNum: nextProps.rangeSet.length || 1,
                rangeSet: nextProps.rangeSet || [],
            })
        }
    }

    componentDidUpdate(prevProps){
        if (this.props.rangeSet.length !== prevProps.rangeSet.length){
            this.changeFieldsVal((this.props.rangeSet.length || 1))
        }
    }

    render(){
        const { getFieldDecorator } = this.props.form;

        return (
            <Form onSubmit={this.handleSubmit}
                  className="cancelVisitModal">

                <TextArea label='Причина отмены'
                          ref = {ta => this.ta = ta}
                          className="cancelVisitModal-txtarea"/>

                <FormItem>
                    {getFieldDecorator('file')(
                        <Upload className="cancelVisitModal-upload" text="Прикрепить файл"/>
                    )}
                </FormItem>
                {this.renderDp(getFieldDecorator)}
                <Button onClick={(e) => this.addDp(e)}
                        className='cancelVisitModal-dpAdd'
                        btnText='Добавить интервал'
                        size='file'
                        type='file'
                        icon='add-button'
                        svg
                />
                <Button htmlType="submit"
                        size='default'
                        btnText='Сохранить'
                        type='float'/>
            </Form>
        )
    }
}

const Content = Form.create()(ContentForm);

export default Content
