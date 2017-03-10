'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

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

var _oyVey = require('oy-vey');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var appStyles = {
    backgroundColor: '#f7f6f5',
    fontFamily: _styles2.default.fontFamily
};

var WelcomeUser = function (_React$Component) {
    _inherits(WelcomeUser, _React$Component);

    function WelcomeUser() {
        _classCallCheck(this, WelcomeUser);

        return _possibleConstructorReturn(this, (WelcomeUser.__proto__ || Object.getPrototypeOf(WelcomeUser)).apply(this, arguments));
    }

    _createClass(WelcomeUser, [{
        key: 'render',
        value: function render() {
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
    }]);

    return WelcomeUser;
}(_react2.default.Component);

WelcomeUser.defaultProps = {
    firstName: 'there'
};
WelcomeUser.options = {
    title: 'Welcome to Lumi!',
    headCSS: 'body { background-color: #f7f6f5; }',
    previewText: 'Welcome to Lumi!'
};
exports.default = WelcomeUser;