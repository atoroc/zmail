"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _styles = require("../styles");

var _styles2 = _interopRequireDefault(_styles);

var _layout = require("../components/layout");

var _layout2 = _interopRequireDefault(_layout);

var _header = require("../components/header");

var _header2 = _interopRequireDefault(_header);

var _content = require("../components/content");

var _content2 = _interopRequireDefault(_content);

var _social = require("../components/social");

var _social2 = _interopRequireDefault(_social);

var _ctaButton = require("../components/ctaButton");

var _ctaButton2 = _interopRequireDefault(_ctaButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const appStyles = {
    backgroundColor: "#f7f6f5",
    fontFamily: _styles2.default.fontFamily
};

class AbandonedCart extends _react2.default.Component {

    renderGreeting() {
        if (this.props.name) {
            return _react2.default.createElement(
                "p",
                null,
                "Dear ",
                this.props.name,
                ","
            );
        } else {
            return _react2.default.createElement(
                "p",
                null,
                "Hey there!"
            );
        }
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
                    "h2",
                    { style: _styles2.default.h1 },
                    "Pick up where you left off"
                ),
                _react2.default.createElement(_ctaButton2.default, {
                    href: this.props.url,
                    buttonText: "Pick back up"
                }),
                this.renderGreeting(),
                _react2.default.createElement(
                    "p",
                    { style: _styles2.default.paragraph },
                    "We noticed you left your Lumi products on the shelf today. Did anything go wrong? Can we help? We're always looking to improve and would love your feedback."
                ),
                _react2.default.createElement(
                    "p",
                    { style: _styles2.default.paragraph },
                    "Should you decide to change your mind, we've set your order aside and have saved the contents of your cart here:"
                ),
                _react2.default.createElement(
                    "p",
                    { style: _styles2.default.paragraph },
                    _react2.default.createElement(
                        "a",
                        { style: _styles2.default.link, href: this.props.url },
                        this.props.url
                    )
                ),
                _react2.default.createElement(
                    "p",
                    { style: _styles2.default.paragraph },
                    "Thanks,",
                    _react2.default.createElement("br", null),
                    "Shayna Brody, Customer Service"
                )
            ),
            _react2.default.createElement(_social2.default, null)
        );
    }
}
exports.default = AbandonedCart;
AbandonedCart.options = {
    title: "Welcome to Lumi!",
    headCSS: "body { background-color: #f7f6f5; }",
    previewText: "Welcome to Lumi!"
};
AbandonedCart.propTypes = {
    url: _react2.default.PropTypes.string.isRequired
};