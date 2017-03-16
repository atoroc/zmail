'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

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
                    'p',
                    { style: _extends({}, _styles2.default.paragraph, { textAlign: 'center' }) },
                    'Attached is the export you requested.'
                )
            ),
            _react2.default.createElement(_social2.default, null)
        );
    }
}
exports.default = ResetPassword;
ResetPassword.options = {
    title: 'Your export is ready',
    headCSS: _styles2.default.headCSS,
    previewText: 'Your export is ready'
};
ResetPassword.propTypes = {};