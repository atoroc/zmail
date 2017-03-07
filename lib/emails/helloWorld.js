'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _cxs = require('cxs');

var _cxs2 = _interopRequireDefault(_cxs);

var _oyVey = require('oy-vey');

var _oyVey2 = _interopRequireDefault(_oyVey);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styles = require('../styles');

var _styles2 = _interopRequireDefault(_styles);

var _header = require('../components/header');

var _header2 = _interopRequireDefault(_header);

var _content = require('../components/content');

var _content2 = _interopRequireDefault(_content);

var _footer = require('../components/footer');

var _footer2 = _interopRequireDefault(_footer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Table = _oyVey2.default.Table,
    TBody = _oyVey2.default.TBody,
    TR = _oyVey2.default.TR,
    TD = _oyVey2.default.TD;


var appStyles = {
    backgroundColor: '#f7f6f5',
    fontFamily: _styles2.default.fontFamily
};

exports.default = _react2.default.createClass({
    displayName: 'helloWorld',
    render: function render() {
        return _react2.default.createElement(
            Table,
            { width: '100%', style: appStyles },
            _react2.default.createElement(
                TBody,
                null,
                _react2.default.createElement(
                    TR,
                    null,
                    _react2.default.createElement(
                        TD,
                        null,
                        _react2.default.createElement(_header2.default, null),
                        _react2.default.createElement(
                            _content2.default,
                            null,
                            '{% if condition %}',
                            _react2.default.createElement(
                                'h1',
                                null,
                                'Hello ',
                                '{# fullName #}',
                                '!'
                            ),
                            '{% else %}',
                            _react2.default.createElement(
                                'h1',
                                null,
                                'Hi there!'
                            ),
                            '{% endif %}'
                        ),
                        _react2.default.createElement(_footer2.default, null)
                    )
                )
            )
        );
    }
});