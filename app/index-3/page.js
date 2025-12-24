"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Home3;
exports.metadata = void 0;
var _Layout = _interopRequireDefault(require("@/components/layout/Layout"));
var _Banner = _interopRequireDefault(require("@/components/sections/Home3/Banner"));
var _Service = _interopRequireDefault(require("@/components/sections/Home3/Service"));
var _About = _interopRequireDefault(require("@/components/sections/Home3/About"));
var _Cta = _interopRequireDefault(require("@/components/sections/Home3/Cta"));
var _Project = _interopRequireDefault(require("@/components/sections/Home3/Project"));
var _ChooseUs = _interopRequireDefault(require("@/components/sections/Home3/ChooseUs"));
var _Teams = _interopRequireDefault(require("@/components/sections/Home3/Teams"));
var _Testimonial = _interopRequireDefault(require("@/components/sections/Home1/Testimonial"));
var _Contact = _interopRequireDefault(require("@/components/sections/Home3/Contact"));
var _News = _interopRequireDefault(require("@/components/sections/Home3/News"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
var metadata = exports.metadata = {
  title: "Home 3 - Webtec React Next Js Template"
};
function Home3() {
  return /*#__PURE__*/React.createElement("div", {
    className: "home3-bgcolor"
  }, /*#__PURE__*/React.createElement(_Layout.default, {
    HeaderStyle: "three",
    FooterStyle: "three"
  }, /*#__PURE__*/React.createElement(_Banner.default, null), /*#__PURE__*/React.createElement(_Service.default, null), /*#__PURE__*/React.createElement(_About.default, null), /*#__PURE__*/React.createElement(_Cta.default, null), /*#__PURE__*/React.createElement(_Project.default, null), /*#__PURE__*/React.createElement(_ChooseUs.default, null), /*#__PURE__*/React.createElement(_Teams.default, null), /*#__PURE__*/React.createElement(_Testimonial.default, null), /*#__PURE__*/React.createElement(_Contact.default, null), /*#__PURE__*/React.createElement(_News.default, null)));
}