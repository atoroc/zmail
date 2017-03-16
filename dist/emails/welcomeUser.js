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

class WelcomeUser extends _react2.default.Component {

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
                    'Welcome to Lumi!'
                ),
                _react2.default.createElement(_ctaButton2.default, { href: 'http://lumi.com/account', buttonText: 'View your account' }),
                _react2.default.createElement(
                    'p',
                    { style: _styles2.default.paragraph },
                    'Hey ',
                    this.props.firstName,
                    '!'
                ),
                _react2.default.createElement(
                    'p',
                    { style: _styles2.default.paragraph },
                    'Thanks for joining Lumi. We\'re working hard to add new ways you can turn your logo and digital designs into physical things. If you have any suggestions don\'t hesitate to reply.'
                ),
                _react2.default.createElement(
                    'p',
                    { style: _styles2.default.paragraph },
                    'We\'re also regularly posting news and inspirational images on Instagram. We\'d love to see you there ',
                    _react2.default.createElement(
                        'a',
                        { style: { color: _styles2.default.brandColor }, href: 'https://instagram.com/lumi/' },
                        'instagram.com/lumi'
                    ),
                    '.'
                ),
                _react2.default.createElement(
                    'p',
                    { style: _styles2.default.paragraph },
                    'Thanks,',
                    _react2.default.createElement('br', null),
                    'Shayna Brody, Customer Service'
                )
            ),
            _react2.default.createElement(_social2.default, null)
        );
    }
}
exports.default = WelcomeUser;
WelcomeUser.defaultProps = {
    firstName: 'there'
};
WelcomeUser.options = {
    title: 'Welcome to Lumi!',
    headCSS: _styles2.default.headCSS,
    previewText: 'Welcome to Lumi!'
};