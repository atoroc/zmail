'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styles = require('../styles');

var _styles2 = _interopRequireDefault(_styles);

var _oyVey = require('oy-vey');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var wrapper = {
    padding: '0px 0'
};

var contentStyles = {
    width: _styles2.default.width,
    marginLeft: 'auto',
    marginRight: 'auto'
};

exports.default = function (props) {
    return _react2.default.createElement(
        _oyVey.Table,
        { width: '100%', style: contentStyles },
        _react2.default.createElement(
            _oyVey.TBody,
            null,
            _react2.default.createElement(
                _oyVey.TR,
                null,
                _react2.default.createElement(
                    _oyVey.TD,
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