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

class OrderCancellation extends _react2.default.Component {

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
                    'Order #',
                    this.props.orderNumber,
                    ' has been cancelled'
                ),
                _react2.default.createElement(
                    'p',
                    { style: _styles2.default.paragraph },
                    'Dear ',
                    this.props.firstName,
                    ','
                ),
                _react2.default.createElement(
                    'p',
                    { style: _styles2.default.paragraph },
                    'Your order #',
                    this.props.orderNumber,
                    ' was cancelled',
                    this.props.reasons[this.props.reason],
                    this.props.statusResults[this.props.status]
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
}
exports.default = OrderCancellation;
OrderCancellation.defaultProps = {
    orderNumber: '13579',
    firstName: 'beloved Lumi customer',
    reason: 'nothing',
    status: 'nothing',
    reasons: {
        customer: ' at your request.',
        inventory: ' because we did not have enough stock to fulfill your order.',
        fraud: ' because we suspect it is fraudulent.',
        other: ' due to unforseen circumstances.',
        nothing: '.'
    },
    statusResults: {
        voided: ' Your payment has been voided.',
        credited: ' Your payment has been refunded.',
        nothing: ''
    }
};
OrderCancellation.options = {
    title: 'Your order has been cancelled.',
    headCSS: _styles2.default.headCSS,
    previewText: 'Your order has been cancelled.'
};