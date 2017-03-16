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

var _ctaButton = require('../components/ctaButton');

var _ctaButton2 = _interopRequireDefault(_ctaButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class ShipmentConfirmation extends _react2.default.Component {

    renderCTAButton() {
        if (this.props.trackingUrl) {
            return _react2.default.createElement(_ctaButton2.default, { href: this.props.trackingUrl, buttonText: 'Track your package' });
        }
    }

    renderTrackingNumbers() {
        if (this.props.carrier && this.props.trackingNumbers) {
            return _react2.default.createElement(
                'div',
                { style: { marginBottom: '30px' } },
                _react2.default.createElement(
                    'p',
                    { style: _styles2.default.paragraph },
                    'They are being shipped via ',
                    this.props.carrier,
                    ' with tracking number(s):'
                ),
                _react2.default.createElement(
                    'ul',
                    { style: { listStyle: 'none', padding: 0, margin: 0 } },
                    this.props.trackingNumbers.map(number => {
                        return _react2.default.createElement(
                            'li',
                            { key: number.trackingNumber },
                            _react2.default.createElement(
                                'a',
                                { href: number.trackingUrl, style: { 'color': _styles2.default.brandColor } },
                                number.trackingNumber
                            )
                        );
                    })
                )
            );
        }
    }

    renderCustomsWarning() {
        if (this.props.destinationCountry != 'United States') {
            return _react2.default.createElement(
                'p',
                { style: _extends({}, _styles2.default.paragraph, { marginTop: '30px', marginBottom: '30px' }) },
                _react2.default.createElement(
                    'b',
                    null,
                    'Please note:'
                ),
                ' once your package arrives in ',
                this.props.country,
                ' it may take 10-14 business days for it to clear customs.',
                this.props.carrier == 'USPS' ? _react2.default.createElement(
                    'span',
                    null,
                    ' If you haven\u2019t received your package by then, please contact your local post office with your tracking number to find out if they are holding your package.'
                ) : ''
            );
        }
    }

    renderTrackingStatusNotice() {
        if (this.props.trackingNumbers.length > 0) {
            return _react2.default.createElement(
                'p',
                { style: _extends({}, _styles2.default.paragraph, { marginTop: '30px' }) },
                _react2.default.createElement(
                    'b',
                    null,
                    'Note:'
                ),
                ' please allow some time for the status of the shipment to correctly display with the carrier.'
            );
        }
    }

    renderOrderItems() {
        return _react2.default.createElement(
            'table',
            { width: '100%', style: _styles2.default.table },
            _react2.default.createElement(
                'tbody',
                null,
                this.props.orderItems.map(item => {
                    return _react2.default.createElement(
                        'tr',
                        { key: item.id },
                        _react2.default.createElement(
                            'td',
                            { align: 'center', style: _styles2.default.tableData },
                            _react2.default.createElement('img', { src: item.value.thumbnailUrl, width: '50', height: '50', style: { maxWidth: '50px', maxHeight: '50px', width: 'auto', marginTop: '4px' } })
                        ),
                        _react2.default.createElement(
                            'td',
                            { style: _extends({}, _styles2.default.tableData, { padding: '7px 7px 0' }) },
                            _react2.default.createElement(
                                'p',
                                { style: _styles2.default.paragraph },
                                item.value.orderItem.quantity,
                                '\xA0\xD7\xA0',
                                item.value.productGroup.title,
                                item.value.buildOptions.option1 ? ` / ${item.value.buildOptions.option1}` : '',
                                item.value.buildOptions.option4 ? ` / ${item.value.buildOptions.option4}` : '',
                                item.value.buildOptions.option2 ? ` / ${item.value.buildOptions.option2}` : '',
                                item.value.buildOptions.option3 ? ` / ${item.value.buildOptions.option3}` : ''
                            ),
                            _react2.default.createElement(
                                'p',
                                { style: {
                                        fontSize: '9px',
                                        color: '#898884'
                                    } },
                                this.props.estimatedDeliveryDate
                            )
                        )
                    );
                })
            )
        );
    }

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
                    'Your order has\xA0shipped!'
                ),
                this.renderCTAButton(),
                _react2.default.createElement(
                    'p',
                    { style: _styles2.default.paragraph },
                    'Some of the items from order #',
                    this.props.orderNumber,
                    ' have now been shipped.'
                ),
                this.renderTrackingNumbers(),
                this.renderCustomsWarning(),
                this.renderOrderItems(),
                this.renderTrackingStatusNotice()
            ),
            _react2.default.createElement(_social2.default, null)
        );
    }
}
exports.default = ShipmentConfirmation;
ShipmentConfirmation.propTypes = {
    orderNumber: _react2.default.PropTypes.string.isRequired,
    carrier: _react2.default.PropTypes.string.isRequired,
    trackingUrl: _react2.default.PropTypes.string.isRequired,
    trackingNumbers: _react2.default.PropTypes.array.isRequired,
    destinationCountry: _react2.default.PropTypes.string.isRequired,
    estimatedDeliveryDate: _react2.default.PropTypes.string.isRequired,
    orderItems: _react2.default.PropTypes.array.isRequired
};
ShipmentConfirmation.options = {
    title: 'Your order has shipped!',
    headCSS: _styles2.default.headCSS,
    previewText: 'Your order has shipped!'
};