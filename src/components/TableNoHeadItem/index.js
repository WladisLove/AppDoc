import React from 'react';
import PropTypes from 'prop-types'

import ProfileAvatar from '../ProfileAvatar'
import Button from '../Button'
import Icon from '../Icon'

import './style.css'
import '../../icon/style.css'

class TableNoHeadItem extends React.Component{

    render(){
        const {img, type, name, infoText, size, online, title, time} = this.props;

        return (
            <div className='schedule'>
                <ProfileAvatar owner="patient" online={online} img={img} size={size}/>
                <div className="flex-col">
                    <div className="patient-name"><a href="#">{name}</a></div>
                    <div className="patient-info">{infoText}</div>
                </div>
                <div className="flex-col ml-a"><div className="patient-time">{time}</div></div>
                <div className="flex-col"><Icon svg type={type} size={16} title='title'/></div>
                <div className="flex-col">
                    <Button
                        btnText='Начать прием'
                        size='default'
                        type='float'
                    />
                </div>
                <div className="flex-col"><a href="#">Отменить</a></div>
            </div>
        )
    }
}

TableNoHeadItem.propTypes = {
    img: PropTypes.string,
    name: PropTypes.string,
    type: PropTypes.string.isRequired,
    infoText: PropTypes.string,
    title: PropTypes.string,
    time: PropTypes.string,
    specialty: PropTypes.string,
    rateValue: PropTypes.string,
    timesRated: PropTypes.string,
};

TableNoHeadItem.defaultProps = {
    img: '',
    name: '',
    title: '',
    size: 'small',
    infoText: '',
    time: '00:00',
};

export default TableNoHeadItem