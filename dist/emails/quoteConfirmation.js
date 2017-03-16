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

class QuoteConfirmation extends _react2.default.Component {

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
                    'We\u2019re On It!'
                ),
                _react2.default.createElement(
                    'p',
                    { style: _styles2.default.paragraph },
                    'We\u2019ve received your quote request and will start processing it shortly. For reference, here are the details you provided:'
                ),
                _react2.default.createElement(
                    'table',
                    { width: '100%', style: _extends({}, _styles2.default.table, { marginTop: '60px' }) },
                    _react2.default.createElement(
                        'tbody',
                        null,
                        _react2.default.createElement(
                            'tr',
                            null,
                            _react2.default.createElement(
                                'td',
                                { style: _styles2.default.tableData },
                                _react2.default.createElement(
                                    'b',
                                    null,
                                    'Name'
                                )
                            ),
                            _react2.default.createElement(
                                'td',
                                { style: _styles2.default.tableData },
                                this.props.name
                            )
                        ),
                        _react2.default.createElement(
                            'tr',
                            null,
                            _react2.default.createElement(
                                'td',
                                { style: _styles2.default.tableData },
                                _react2.default.createElement(
                                    'b',
                                    null,
                                    'Email'
                                )
                            ),
                            _react2.default.createElement(
                                'td',
                                { style: _styles2.default.tableData },
                                this.props.email
                            )
                        ),
                        this.props.product && _react2.default.createElement(
                            'tr',
                            null,
                            _react2.default.createElement(
                                'td',
                                { style: _styles2.default.tableData },
                                _react2.default.createElement(
                                    'b',
                                    null,
                                    'Product'
                                )
                            ),
                            _react2.default.createElement(
                                'td',
                                { style: _styles2.default.tableData },
                                this.props.product
                            )
                        ),
                        this.props.size && _react2.default.createElement(
                            'tr',
                            null,
                            _react2.default.createElement(
                                'td',
                                { style: _styles2.default.tableData },
                                _react2.default.createElement(
                                    'b',
                                    null,
                                    'Size'
                                )
                            ),
                            _react2.default.createElement(
                                'td',
                                { style: _styles2.default.tableData },
                                this.props.size
                            )
                        ),
                        this.props.colorCount && _react2.default.createElement(
                            'tr',
                            null,
                            _react2.default.createElement(
                                'td',
                                { style: _styles2.default.tableData },
                                _react2.default.createElement(
                                    'b',
                                    null,
                                    'Colors'
                                )
                            ),
                            _react2.default.createElement(
                                'td',
                                { style: _styles2.default.tableData },
                                this.props.colorCount
                            )
                        ),
                        this.props.currentPrice && _react2.default.createElement(
                            'tr',
                            null,
                            _react2.default.createElement(
                                'td',
                                { style: _styles2.default.tableData },
                                _react2.default.createElement(
                                    'b',
                                    null,
                                    'Budget'
                                )
                            ),
                            _react2.default.createElement(
                                'td',
                                { style: _styles2.default.tableData },
                                this.props.currentPrice
                            )
                        ),
                        this.props.quantity && _react2.default.createElement(
                            'tr',
                            null,
                            _react2.default.createElement(
                                'td',
                                { style: _styles2.default.tableData },
                                _react2.default.createElement(
                                    'b',
                                    null,
                                    'Quantity'
                                )
                            ),
                            _react2.default.createElement(
                                'td',
                                { style: _styles2.default.tableData },
                                this.props.quantity
                            )
                        ),
                        this.props.needByDate && _react2.default.createElement(
                            'tr',
                            null,
                            _react2.default.createElement(
                                'td',
                                { style: _styles2.default.tableData },
                                _react2.default.createElement(
                                    'b',
                                    null,
                                    'Need by date'
                                )
                            ),
                            _react2.default.createElement(
                                'td',
                                { style: _styles2.default.tableData },
                                this.props.needByDate
                            )
                        ),
                        this.props.additionalSpecs && _react2.default.createElement(
                            'tr',
                            null,
                            _react2.default.createElement(
                                'td',
                                { style: _styles2.default.tableData },
                                _react2.default.createElement(
                                    'b',
                                    null,
                                    'Notes'
                                )
                            ),
                            _react2.default.createElement(
                                'td',
                                { style: _styles2.default.tableData },
                                this.props.additionalSpecs
                            )
                        )
                    )
                )
            ),
            _react2.default.createElement(_social2.default, null)
        );
    }
}
exports.default = QuoteConfirmation;
QuoteConfirmation.defaultProps = {
    // name: 'David Hemphill',
    // email: 'davidlee.hemphill@gmail.com',
    // product: 'A Cool Product',
    // size: 'XL',
    // colorCount: '3',
    // currentPrice: '25.99',
    // quantity: '15',
    // needByDate: 'Tomorrow!',
    // additionalSpecs: 'With a smile',
};
QuoteConfirmation.options = {
    title: 'Welcome to Lumi!',
    headCSS: _styles2.default.headCSS,
    previewText: 'Welcome to Lumi!'
};
QuoteConfirmation.propTypes = {
    name: _react2.default.PropTypes.string.isRequired,
    email: _react2.default.PropTypes.string.isRequired
};