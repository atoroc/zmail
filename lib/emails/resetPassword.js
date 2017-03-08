'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styles = require('../styles');

var _styles2 = _interopRequireDefault(_styles);

var _header = require('../components/header');

var _header2 = _interopRequireDefault(_header);

var _content = require('../components/content');

var _content2 = _interopRequireDefault(_content);

var _social = require('../components/social');

var _social2 = _interopRequireDefault(_social);

var _ctaButton = require('../components/ctaButton');

var _ctaButton2 = _interopRequireDefault(_ctaButton);

var _oyVey = require('oy-vey');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var appStyles = {
    backgroundColor: '#f7f6f5',
    fontFamily: _styles2.default.fontFamily
};

exports.default = _react2.default.createClass({
    displayName: 'resetPassword',
    render: function render() {
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
                        _react2.default.createElement(_header2.default, null),
                        _react2.default.createElement(
                            _content2.default,
                            null,
                            _react2.default.createElement(
                                'h2',
                                { style: _styles2.default.h1 },
                                'Reset your password'
                            ),
                            _react2.default.createElement(_ctaButton2.default, { href: 'http://lumi.com/resetPassword', buttonText: 'Reset Password' }),
                            _react2.default.createElement(
                                'p',
                                { style: _styles2.default.paragraph },
                                'Looks like you requested a password reset. Just follow this link to complete the process:'
                            ),
                            _react2.default.createElement(
                                'p',
                                { style: _styles2.default.paragraph },
                                _react2.default.createElement(
                                    'a',
                                    { href: '{\'{% resetLink %}\'}', style: { color: _styles2.default.brandColor } },
                                    '{% resetLink %}'
                                )
                            ),
                            _react2.default.createElement(
                                'p',
                                { style: _styles2.default.paragraph },
                                'If you did not request a password reset, you can safely disregard this email.'
                            ),
                            _react2.default.createElement(
                                'p',
                                { style: _styles2.default.paragraph },
                                'Thanks, Lumi'
                            )
                        ),
                        _react2.default.createElement(_social2.default, null)
                    )
                )
            )
        );
    }
});