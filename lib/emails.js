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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// export default [
//     {
//         component: ResetPasswordEmail,
//         fileName: 'resetPassword.html',
//         options: {
//             title: 'Password Reset Request',
//             headCSS: 'body { background-color: #f7f6f5; }',
//             previewText: 'Password Reset Request'
//         }
//     },
//     {
//         component: WelcomeUserEmail,
//         fileName: 'welcomeUser.html',
//         options: {
//             title: 'Welcome to Lumi!',
//             headCSS: 'body { background-color: #f7f6f5; }',
//             previewText: 'Welcome to Lumi!'
//         }
//     },
//     {
//         component: OrderCancellationEmail,
//         fileName: 'orderCancellation.html',
//         options: {
//             title: 'Your order has been cancelled.',
//             headCSS: 'body { background-color: #f7f6f5; }',
//             previewText: 'Your order has been cancelled.'
//         }
//     },
// ]

exports.default = {
    WelcomeUser: _welcomeUser2.default,
    ResetPasswordEmail: _resetPassword2.default,
    OrderCancellationEmail: _orderCancellation2.default
};