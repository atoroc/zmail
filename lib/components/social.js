'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styles = require('../styles');

var _styles2 = _interopRequireDefault(_styles);

var _oyVey = require('oy-vey');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var contentStyles = {
    width: _styles2.default.width,
    margin: '60px auto'
};

var linkStyles = {
    marginRight: '14px'
};

exports.default = function (props) {
    return _react2.default.createElement(
        _oyVey.Table,
        { width: '100%', style: contentStyles },
        _react2.default.createElement(
            _oyVey.TBody,
            null,
            _react2.default.createElement(
                _oyVey.TR,
                null,
                _react2.default.createElement(
                    _oyVey.TD,
                    null,
                    _react2.default.createElement(
                        'p',
                        { style: { textAlign: 'center', margin: 0, padding: 0 } },
                        _react2.default.createElement(
                            'a',
                            { style: linkStyles, href: 'http://instagram.com/lumi', target: '_blank' },
                            _react2.default.createElement('img', { src: 'https://s3.amazonaws.com/lumi-assets/social-60-insta-bg2.gif', width: '30px', height: '30px' })
                        ),
                        _react2.default.createElement(
                            'a',
                            { style: linkStyles, href: 'http://facebook.com/lumi', target: '_blank' },
                            _react2.default.createElement('img', { src: 'https://s3.amazonaws.com/lumi-assets/social-60-fb-bg2.gif', width: '30px', height: '30px' })
                        ),
                        _react2.default.createElement(
                            'a',
                            { style: linkStyles, href: 'http://twitter.com/lumi', target: '_blank' },
                            _react2.default.createElement('img', { src: 'https://s3.amazonaws.com/lumi-assets/social-60-twitter-bg2.gif', width: '30px', height: '30px' })
                        ),
                        _react2.default.createElement(
                            'a',
                            { href: 'http://pinterest.com/lumi', target: '_blank' },
                            _react2.default.createElement('img', { src: 'https://s3.amazonaws.com/lumi-assets/social-60-pinterest-bg2.gif', width: '30px', height: '30px' })
                        )
                    )
                )
            )
        )
    );
};