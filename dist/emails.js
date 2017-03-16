'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _welcomeUser = require('./emails/welcomeUser');

var _welcomeUser2 = _interopRequireDefault(_welcomeUser);

var _resetPassword = require('./emails/resetPassword');

var _resetPassword2 = _interopRequireDefault(_resetPassword);

var _orderCancellation = require('./emails/orderCancellation');

var _orderCancellation2 = _interopRequireDefault(_orderCancellation);

var _shipmentConfirmation = require('./emails/shipmentConfirmation');

var _shipmentConfirmation2 = _interopRequireDefault(_shipmentConfirmation);

var _quoteConfirmation = require('./emails/quoteConfirmation');

var _quoteConfirmation2 = _interopRequireDefault(_quoteConfirmation);

var _abandonedCart = require('./emails/abandonedCart');

var _abandonedCart2 = _interopRequireDefault(_abandonedCart);

var _orderConfirmation = require('./emails/orderConfirmation');

var _orderConfirmation2 = _interopRequireDefault(_orderConfirmation);

var _export = require('./emails/export');

var _export2 = _interopRequireDefault(_export);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    WelcomeUser: _welcomeUser2.default,
    ResetPassword: _resetPassword2.default,
    OrderCancellation: _orderCancellation2.default,
    ShipmentConfirmation: _shipmentConfirmation2.default,
    QuoteConfirmation: _quoteConfirmation2.default,
    AbandonedCart: _abandonedCart2.default,
    OrderConfirmation: _orderConfirmation2.default,
    Export: _export2.default
};