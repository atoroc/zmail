'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _oyVey = require('oy-vey');

var _oyVey2 = _interopRequireDefault(_oyVey);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styles = require('../styles');

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const wrapper = {
    padding: '15px 0',
    textAlign: 'center'
};

exports.default = props => {
    return _react2.default.createElement(
        'table',
        { width: '100%', style: { marginBottom: '30px' } },
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
                        'a',
                        { href: props.href, style: _styles2.default.button },
                        props.buttonText
                    )
                )
            )
        )
    );
};