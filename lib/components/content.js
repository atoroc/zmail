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

var Table = _oyVey2.default.Table,
    TBody = _oyVey2.default.TBody,
    TR = _oyVey2.default.TR,
    TD = _oyVey2.default.TD;


var wrapper = {
    padding: '60px 0'
};

var header = {
    width: _styles2.default.width,
    marginLeft: 'auto',
    marginRight: 'auto'
};

exports.default = function (props) {
    return _react2.default.createElement(
        Table,
        { width: '100%', style: header },
        _react2.default.createElement(
            TBody,
            null,
            _react2.default.createElement(
                TR,
                null,
                _react2.default.createElement(
                    TD,
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