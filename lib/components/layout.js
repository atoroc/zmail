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

var appStyles = {
    backgroundColor: '#f7f6f5',
    fontFamily: _styles2.default.fontFamily,
    fontSize: _styles2.default.fontSize
};

exports.default = function (props) {
    return _react2.default.createElement(
        _oyVey.Table,
        { width: '100%', style: appStyles },
        _react2.default.createElement(
            _oyVey.TBody,
            null,
            _react2.default.createElement(
                _oyVey.TR,
                null,
                _react2.default.createElement(
                    _oyVey.TD,
                    null,
                    props.children
                )
            )
        )
    );
};