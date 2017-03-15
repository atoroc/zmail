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
    borderTop: '1px solid rgba(0, 0, 0, 0.1)',
    padding: '20px 0'
};

const footer = {
    width: _styles2.default.width,
    marginLeft: 'auto',
    marginRight: 'auto'
};

exports.default = props => {
    return _react2.default.createElement(
        'table',
        { width: '100%' },
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
                        { style: footer },
                        'Copyright 2017 Lumi, inc'
                    )
                )
            )
        )
    );
};