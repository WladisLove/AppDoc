import React from 'react';
import PropTypes from 'prop-types'
import PopoverBody from '../PopoverBody'

import { Popover } from 'antd';

import './style.css'

class PopoverApp extends React.Component {

	state = {
		visible: false,
	};

	handleVisibleChange = (visible) => {
		this.setState({ visible });
	};

	handleClose = () => {
        this.props.onClose();
        this.setState({visible: false})
    };

	handleEmail = () => {
        this.props.onEmail();
        this.setState({visible: false})
    };

	handlePhone = () => {
        this.props.onPhone();
        this.setState({visible: false})
    };

  render() {

    return (
      <Popover
        content={<PopoverBody {...this.props.data}
                              onClose={this.handleClose}
                              onEmail={this.handleEmail}
                              onPhone={this.handlePhone}
        />}
        trigger="click"
        visible={this.state.visible}
        onVisibleChange={this.handleVisibleChange}
        placement="rightTop"
      >
          {this.props.children}
      </Popover>
    );
  }
}


PopoverApp.propTypes = {
    data: PropTypes.object,
    onClose: PropTypes.func,
    onEmail: PropTypes.func,
    onPhone: PropTypes.func,
};

PopoverApp.defaultProps = {
    data: {},
    onClose: () => {},
    onEmail: () => {},
    onPhone: () => {},
};

export default PopoverApp
