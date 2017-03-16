'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styles = require('../styles');

var _styles2 = _interopRequireDefault(_styles);

var _paragraph = require('../components/paragraph');

var _paragraph2 = _interopRequireDefault(_paragraph);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const productsTableRow = props => {
    return _react2.default.createElement(
        'tr',
        { width: '100%', style: _styles2.default.table },
        _react2.default.createElement(
            'td',
            { style: _styles2.default.tableData },
            _react2.default.createElement('img', { src: props.thumbnail, width: 50, height: 50, style: { maxWidth: '50px', maxHeight: '50px', width: 'auto', marginTop: '4px' } })
        ),
        _react2.default.createElement(
            'td',
            { style: _extends({}, _styles2.default.tableData, { padding: '7px 7px 0' }) },
            _react2.default.createElement(
                'p',
                { style: _styles2.default.paragraph },
                props.quantity,
                '\xA0\xD7\xA0',
                props.shortTitle,
                props.option1 ? ` / ${props.option1}` : '',
                props.option4 ? ` / ${props.option4}` : '',
                props.option2 ? ` / ${props.option2}` : '',
                props.option3 ? ` / ${props.option3}` : ''
            ),
            _react2.default.createElement(
                'p',
                { style: _styles2.default.paragraphSmall },
                'Estimated Delivery: ',
                props.deliveryDate
            )
        ),
        _react2.default.createElement(
            'td',
            { style: _extends({}, _styles2.default.tableData, { verticalAlign: 'middle', padding: '0 7px' }) },
            _react2.default.createElement(
                'p',
                { style: _extends({}, _styles2.default.paragraph, { marginBottom: 0 }) },
                props.price
            )
        )
    );
};

productsTableRow.propTypes = {
    thumbnail: _react2.default.PropTypes.string.isRequired,
    option1: _react2.default.PropTypes.string.isRequired,
    option2: _react2.default.PropTypes.string.isRequired,
    option3: _react2.default.PropTypes.string.isRequired,
    option4: _react2.default.PropTypes.string.isRequired,
    outputUrl: _react2.default.PropTypes.string.isRequired,
    designHeight: _react2.default.PropTypes.string.isRequired,
    designWidth: _react2.default.PropTypes.string.isRequired,
    quantity: _react2.default.PropTypes.number.isRequired,
    shortTitle: _react2.default.PropTypes.string.isRequired,
    price: _react2.default.PropTypes.string.isRequired,
    deliveryDate: _react2.default.PropTypes.string.isRequired
};

exports.default = productsTableRow;