'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styles = require('../styles');

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
                    null,
                    _react2.default.createElement(
                        'p',
                        { style: { margin: '30px 0', textAlign: 'center' } },
                        _react2.default.createElement(
                            'a',
                            { href: 'http://lumi.com' },
                            _react2.default.createElement('img', { src: _styles2.default.logo.src, width: 100, height: 34 })
                        )
                    )
                )
            )
        )
    );
};