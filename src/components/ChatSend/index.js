import React from 'react';
import PropTypes from 'prop-types'
import cn from 'classnames'

import { Input } from 'antd';
import Button from '../Button'

import './style.css'
import '../../icon/style.css'

class ChatSend extends React.Component{
    render(){
        const { TextArea } = Input;
        const {message, attachment} = this.props;
        const rootClass = cn('message__send');


        return (
            <div className={rootClass}>
                <div className='message__send-smileys'>
                    <Button
                        btnText=''
                        size='small'
                        type='no-brd'
                        icon='emoticon-face'
                    />
                </div>
                <div className='message__send-area'>
                    <TextArea placeholder="Ваше сообщение..." autosize />
                </div>
                <div className='message__send-btns'>
                    <Button
                        btnText=''
                        size='small'
                        type='no-brd'
                        icon='result'
                        title='Добавить заключение'
                    />
                    <Button
                        btnText=''
                        size='small'
                        type='no-brd'
                        icon='clip'
                        title='Прикрепить файл'
                    />
                    <Button
                        btnText=''
                        size='small'
                        type='blue'
                        title='Отправить сообщение'
                        icon='right-arrow-forward_small'
                    />
                    <Button
                        btnText='завершить прием'
                        size='default'
                        type='yellow'
                    />
                </div>
            </div>
        )
    }
}

ChatSend.propTypes = {

    attachment: PropTypes.string,
};

ChatSend.defaultProps = {

    attachment: '',
};

export default ChatSend