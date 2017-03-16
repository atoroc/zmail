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

var _paragraph = require('../components/paragraph');

var _paragraph2 = _interopRequireDefault(_paragraph);

var _spacer = require('../components/spacer');

var _spacer2 = _interopRequireDefault(_spacer);

var _link = require('../components/link');

var _link2 = _interopRequireDefault(_link);

var _productsTable = require('../components/productsTable');

var _productsTable2 = _interopRequireDefault(_productsTable);

var _productsTableRow = require('../components/productsTableRow');

var _productsTableRow2 = _interopRequireDefault(_productsTableRow);

var _billingAddress = require('../components/billingAddress');

var _billingAddress2 = _interopRequireDefault(_billingAddress);

var _shippingAddress = require('../components/shippingAddress');

var _shippingAddress2 = _interopRequireDefault(_shippingAddress);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const money = amount => {
    const dollars = amount / 100;

    return dollars.toLocaleString("en-US", { style: "currency", currency: "USD" });
};

class QuoteConfirmation extends _react2.default.Component {

    renderLineItems() {
        return this.props.lineItems.map(lineItem => {
            return _react2.default.createElement(_productsTableRow2.default, lineItem);
        });
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
                    'Thanks!'
                ),
                _react2.default.createElement(
                    _paragraph2.default,
                    null,
                    'Your order was successfully placed. We\'re already at work getting it ready for you! If you have any questions, feel free to reply to this email or get in touch at ',
                    _react2.default.createElement(
                        _link2.default,
                        { href: 'mailto:hello@lumi.com' },
                        'hello@lumi.com'
                    )
                ),
                _react2.default.createElement(_spacer2.default, null),
                _react2.default.createElement(
                    _productsTable2.default,
                    null,
                    this.renderLineItems()
                ),
                _react2.default.createElement(_spacer2.default, null),
                _react2.default.createElement(
                    'table',
                    { width: '100%' },
                    _react2.default.createElement(
                        'tbody',
                        null,
                        _react2.default.createElement(
                            'tr',
                            null,
                            _react2.default.createElement(
                                'td',
                                null,
                                _react2.default.createElement(
                                    _paragraph2.default,
                                    null,
                                    'Shipping'
                                )
                            ),
                            _react2.default.createElement(
                                'td',
                                { style: { textAlign: 'right' } },
                                _react2.default.createElement(
                                    _paragraph2.default,
                                    null,
                                    money(this.props.shippingPrice)
                                )
                            )
                        ),
                        _react2.default.createElement(
                            'tr',
                            null,
                            _react2.default.createElement(
                                'td',
                                null,
                                _react2.default.createElement(
                                    _paragraph2.default,
                                    null,
                                    'Discount'
                                )
                            ),
                            _react2.default.createElement(
                                'td',
                                { style: { textAlign: 'right' } },
                                _react2.default.createElement(
                                    _paragraph2.default,
                                    null,
                                    money(this.props.discountSavings)
                                )
                            )
                        ),
                        _react2.default.createElement(
                            'tr',
                            null,
                            _react2.default.createElement(
                                'td',
                                null,
                                _react2.default.createElement(
                                    _paragraph2.default,
                                    null,
                                    'Tax'
                                )
                            ),
                            _react2.default.createElement(
                                'td',
                                { style: { textAlign: 'right' } },
                                _react2.default.createElement(
                                    _paragraph2.default,
                                    null,
                                    money(this.props.taxPrice)
                                )
                            )
                        ),
                        _react2.default.createElement(
                            'tr',
                            null,
                            _react2.default.createElement(
                                'td',
                                null,
                                _react2.default.createElement(
                                    _paragraph2.default,
                                    null,
                                    _react2.default.createElement(
                                        'b',
                                        null,
                                        'Total'
                                    )
                                )
                            ),
                            _react2.default.createElement(
                                'td',
                                { style: { textAlign: 'right' } },
                                _react2.default.createElement(
                                    _paragraph2.default,
                                    null,
                                    _react2.default.createElement(
                                        'b',
                                        null,
                                        money(this.props.totalPrice)
                                    )
                                )
                            )
                        )
                    )
                ),
                _react2.default.createElement(_spacer2.default, null),
                _react2.default.createElement(
                    'table',
                    { width: '100%' },
                    _react2.default.createElement(
                        'tbody',
                        null,
                        _react2.default.createElement(
                            'tr',
                            null,
                            this.props.shippingAddress && _react2.default.createElement(_shippingAddress2.default, this.props.shippingAddress),
                            this.props.billingAddress && _react2.default.createElement(_billingAddress2.default, this.props.billingAddress)
                        )
                    )
                )
            ),
            _react2.default.createElement(_social2.default, null)
        );
    }
}
exports.default = QuoteConfirmation;
QuoteConfirmation.options = {
    title: 'Welcome to Lumi!',
    headCSS: _styles2.default.headCSS,
    previewText: 'Welcome to Lumi!'
};
QuoteConfirmation.propTypes = {
    discountSavings: _react2.default.PropTypes.number.isRequired,
    taxPrice: _react2.default.PropTypes.number.isRequired,
    shippingPrice: _react2.default.PropTypes.number.isRequired,
    totalPrice: _react2.default.PropTypes.number.isRequired,
    billingAddress: _react2.default.PropTypes.object.isRequired,
    shippingAddress: _react2.default.PropTypes.object.isRequired,
    lineItems: _react2.default.PropTypes.array.isRequired
};
QuoteConfirmation.defaultProps = {
    discountSavings: 4000,
    taxPrice: 2400,
    shippingPrice: 500,
    totalPrice: 7100,
    billingAddress: {
        name: 'David Hemphill',
        street: '3847 S Hillcrest Ave',
        city: 'Springfield',
        state: 'MO',
        postal_code: '65807',
        country: 'United States'
    },
    shippingAddress: {
        name: 'David Hemphill',
        street: '3847 S Hillcrest Ave',
        city: 'Springfield',
        state: 'MO',
        postal_code: '65807',
        country: 'United States'
    },
    lineItems: [{
        thumbnail: 'https://www.gravatar.com/avatar/2821f93cef33ccd01b1262ac41f87d9c?s=80',
        option1: 'Brown',
        option2: 'Yellow',
        option3: 'Red',
        option4: 'Blue',
        outputUrl: 'http://davidhemphill.com',
        designHeight: '4in',
        designWidth: '6in',
        quantity: 34,
        shortTitle: 'Some Cool Boxes',
        price: '$1235.67',
        deliveryDate: 'tomorrow'
    }, {
        thumbnail: 'https://www.gravatar.com/avatar/2821f93cef33ccd01b1262ac41f87d9c?s=80',
        option1: 'Brown',
        option2: 'Yellow',
        option3: 'Red',
        option4: 'Blue',
        outputUrl: 'http://davidhemphill.com',
        designHeight: '4in',
        designWidth: '6in',
        quantity: 34,
        shortTitle: 'Some Cool Boxes',
        price: '$1235.67',
        deliveryDate: 'tomorrow'
    }]
};