"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
require("./ImageSlider.css");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
// Import the CSS file

var ImageSlider = function ImageSlider(_ref) {
  var images = _ref.images;
  var _useState = (0, _react.useState)(1),
    _useState2 = _slicedToArray(_useState, 2),
    imgId = _useState2[0],
    setImgId = _useState2[1];
  var slideImage = function slideImage() {
    var _document$querySelect;
    var displayWidth = ((_document$querySelect = document.querySelector('.img-showcase img:first-child')) === null || _document$querySelect === void 0 ? void 0 : _document$querySelect.clientWidth) || 0;
    document.querySelector('.img-showcase').style.transform = "translateX(".concat(-(imgId - 1) * displayWidth, "px)");
  };
  (0, _react.useEffect)(function () {
    slideImage();
  }, [imgId]);
  (0, _react.useEffect)(function () {
    var handleResize = function handleResize() {
      return slideImage();
    };
    window.addEventListener('resize', handleResize);
    return function () {
      return window.removeEventListener('resize', handleResize);
    };
  }, []);
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "card-wrapper"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "card"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "product-imgs"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "img-display"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "img-showcase"
  }, images.map(function (image, index) {
    return /*#__PURE__*/_react["default"].createElement("img", {
      key: index,
      src: image,
      alt: "Product ".concat(index + 1)
    });
  }))), /*#__PURE__*/_react["default"].createElement("div", {
    className: "img-select"
  }, images.map(function (image, index) {
    return /*#__PURE__*/_react["default"].createElement("div", {
      className: "img-item",
      key: index
    }, /*#__PURE__*/_react["default"].createElement("a", {
      href: "#",
      "data-id": index + 1,
      onClick: function onClick(e) {
        e.preventDefault();
        setImgId(index + 1);
      }
    }, /*#__PURE__*/_react["default"].createElement("img", {
      src: image,
      alt: "Product Thumbnail ".concat(index + 1)
    })));
  })))));
};
var _default = exports["default"] = ImageSlider;