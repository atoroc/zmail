'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styles = require('../styles');

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const ShippingAddress = props => {
    return _react2.default.createElement(
        'td',
        null,
        _react2.default.createElement(
            'p',
            { style: _styles2.default.boxHeading },
            'Shipping Address'
        ),
        _react2.default.createElement(
            'p',
            { style: _styles2.default.boxStyles },
            props.name,
            _react2.default.createElement('br', null),
            props.street,
            _react2.default.createElement('br', null),
            props.city,
            ', ',
            props.state,
            ' ',
            props.postal_code,
            _react2.default.createElement('br', null),
            !props.country == 'United States' && _react2.default.createElement(
                'span',
                null,
                props.country
            )
        )
    );
};

ShippingAddress.propTypes = {
    name: _react2.default.PropTypes.string.isRequired,
    street: _react2.default.PropTypes.string.isRequired,
    city: _react2.default.PropTypes.string.isRequired,
    state: _react2.default.PropTypes.string.isRequired,
    postal_code: _react2.default.PropTypes.string.isRequired,
    country: _react2.default.PropTypes.string.isRequired
};

exports.default = ShippingAddress;