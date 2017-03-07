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
    // backgroundColor: '#222222',
    // color: '#ffffff',
    borderTop: '1px solid rgba(0, 0, 0, 0.1)',
    padding: '20px 0'
};

var footer = {
    width: _styles2.default.width,
    marginLeft: 'auto',
    marginRight: 'auto'
};

exports.default = function (props) {
    return _react2.default.createElement(
        Table,
        { width: '100%' },
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
                        { style: footer },
                        'Copyright 2017 Lumi, inc'
                    )
                )
            )
        )
    );
};