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

var _oyVey = require('oy-vey');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var appStyles = {
    backgroundColor: '#f7f6f5',
    fontFamily: _styles2.default.fontFamily
};

exports.default = _react2.default.createClass({
    displayName: 'orderCancellation',
    render: function render() {
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
                    'Order #',
                    '{{ order.orderNumber }}',
                    ' has been cancelled'
                ),
                '{% if user.firstName %}',
                _react2.default.createElement(
                    'p',
                    { style: _styles2.default.paragraph },
                    'Dear ',
                    '{{ user.firstName }}',
                    ','
                ),
                '{% else %}',
                '{% endif %}',
                _react2.default.createElement(
                    'p',
                    { style: _styles2.default.paragraph },
                    'Your order ',
                    '#{{ order.orderNumber }}',
                    ' was cancelled ',
                    '{% case order.cancelReason %}',
                    '{% when "customer" %}',
                    'at your request.',
                    '{% when "inventory" %}',
                    'because we did not have enough stock to fulfill your order.',
                    '{% when "fraud" %}',
                    'because we suspect it is fraudulent.',
                    '{% when "other" %}',
                    'due to unforseen circumstances.',
                    '{% endcase %}',
                    '{% if order.status == "voided" %}',
                    ' Your payment has been voided.',
                    '{% elif order.status == "credited" %}',
                    ' Your payment has been refunded.',
                    '{% endif %}'
                ),
                _react2.default.createElement(
                    'p',
                    { style: _styles2.default.paragraph },
                    'Please reply to this email if you have any questions or concerns.'
                ),
                _react2.default.createElement(
                    'p',
                    { style: _styles2.default.paragraph },
                    'Thanks,'
                ),
                _react2.default.createElement(
                    'p',
                    { style: _styles2.default.paragraph },
                    'The Lumi Team'
                )
            ),
            _react2.default.createElement(_social2.default, null)
        );
    }
});