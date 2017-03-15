'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styles = require('../styles');

var _styles2 = _interopRequireDefault(_styles);

var _layout = require('../components/layout');

var _layout2 = _interopRequireDefault(_layout);

var _header = require('../components/header');

var _header2 = _interopRequireDefault(_header);

var _content = require('../components/content');

var _content2 = _interopRequireDefault(_content);

var _social = require('../components/social');

var _social2 = _interopRequireDefault(_social);

var _ctaButton = require('../components/ctaButton');

var _ctaButton2 = _interopRequireDefault(_ctaButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const appStyles = {
    backgroundColor: '#f7f6f5',
    fontFamily: _styles2.default.fontFamily
};

class ResetPassword extends _react2.default.Component {

    render() {
        return _react2.default.createElement(
            _layout2.default,
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
                _react2.default.createElement(_ctaButton2.default, { href: this.props.resetLink, buttonText: 'Reset Password' }),
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
                        { href: this.props.resetLink, style: { color: _styles2.default.brandColor } },
                        this.props.resetLink
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
        );
    }
}
exports.default = ResetPassword;
ResetPassword.options = {
    title: 'Password Reset Request',
    headCSS: 'body { background-color: #f7f6f5; }',
    previewText: 'Password Reset Request'
};
ResetPassword.propTypes = {
    resetLink: _react2.default.PropTypes.string.isRequired
};