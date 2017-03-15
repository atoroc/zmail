'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styles = require('../styles');

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const appStyles = {
    backgroundColor: '#f7f6f5',
    fontFamily: _styles2.default.fontFamily,
    fontSize: _styles2.default.fontSize
};

exports.default = props => {
    return _react2.default.createElement(
        'table',
        { width: '100%', style: appStyles },
        _react2.default.createElement(
            'tbody',
            null,
            _react2.default.createElement(
                'tr',
                null,
                _react2.default.createElement(
                    'td',
                    null,
                    props.children
                )
            )
        )
    );
};