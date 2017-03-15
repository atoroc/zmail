'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const EmptySpace = props => {
  const style = {
    lineHeight: `${props.height}px`,
    fontSize: '1px',
    msoLineHeightRule: 'exactly'
  };

  return _react2.default.createElement(
    'table',
    { width: '100%' },
    _react2.default.createElement(
      'tbody',
      null,
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement('td', {
          width: '100%',
          height: `${props.height}px`,
          style: style,
          dangerouslySetInnerHTML: { __html: '&nbsp;' } })
      )
    )
  );
};

EmptySpace.defaultProps = {
  height: '16'
};

exports.default = EmptySpace;