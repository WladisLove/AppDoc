import React from 'react';
import PropTypes from 'prop-types'

import Button from '../Button'

import './style.css'
import '../../icon/style.css'


class RegistrationForget extends React.Component{

    render(){
        const {text,phone} = this.props;
        return (
            <div className="login-form">
                <div className="login-title">Спасибо!</div>
                <div className="loginforget-body">
                    Ваша заявка отправлена.<br />
                    {text}
                </div>
                <div className="login-form-control">
                    <Button
                            htmlType="submit"
                            btnText='Ок'
                            size='large'
                            type='gradient'/>
                </div>
                <div className="login-forget-body">Остались вопросы?</div>
                <a href={phone} className="login-form-navlink">{phone}</a>
            </div>
        )
    }
}

RegistrationForget.propTypes = {
    text: PropTypes.string,
    phone: PropTypes.string,
    onSubmit: PropTypes.func,
};

RegistrationForget.defaultProps = {
    text: '',
    phone: '',
    onSubmit: () => {},
};

export default RegistrationForget
