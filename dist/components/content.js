'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styles = require('../styles');

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const wrapper = {
    padding: '0px 0'
};

const contentStyles = {
    width: _styles2.default.width,
    marginLeft: 'auto',
    marginRight: 'auto'
};

exports.default = props => {
    return _react2.default.createElement(
        'table',
        { width: '100%', style: contentStyles },
        _react2.default.createElement(
            'tbody',
            null,
            _react2.default.createElement(
                'tr',
                null,
                _react2.default.createElement(
                    'td',
                    { style: wrapper },
                    _react2.default.createElement(
                        'div',
                        null,
                        props.children
                    )
                )
            )
        )
    );
};