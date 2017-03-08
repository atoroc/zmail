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

exports.default = function (props) {
    return _react2.default.createElement(
        _oyVey.Table,
        { width: '100%' },
        _react2.default.createElement(
            _oyVey.TBody,
            null,
            _react2.default.createElement(
                _oyVey.TR,
                null,
                _react2.default.createElement(
                    _oyVey.TD,
                    null,
                    _react2.default.createElement(
                        'p',
                        { style: { margin: '30px 0', textAlign: 'center' } },
                        _react2.default.createElement(
                            'a',
                            { href: 'http://lumi.com' },
                            _react2.default.createElement('img', { src: _styles2.default.logo.src, width: '100px', height: '34px' })
                        )
                    )
                )
            )
        )
    );
};