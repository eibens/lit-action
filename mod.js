function stringify1(action) {
  return JSON.stringify(action, null, 2);
}
function parse1(json) {
  const obj = parseJson(json);
  return parseAction(obj);
}
function parseJson(str) {
  try {
    return JSON.parse(str);
  } catch (error) {
    throw new Error(
      `Parsing the lit-action JSON string failed: string is not valid JSON. Original error message:\n${error}`,
    );
  }
}
function parseAction(action) {
  valid(action, [], "object");
  valid(action, [
    "name",
  ], "string");
  valid(action, [
    "description",
  ], "string");
  valid(action, [
    "steps",
  ], "array");
  action.steps.forEach((_, i) => {
    const path = [
      "steps",
      i,
    ];
    valid(action, path, "object");
    valid(action, [
      ...path,
      "name",
    ], "string");
    valid(action, [
      ...path,
      "run",
    ], "string");
  });
  return action;
}
function valid(x, path, type) {
  const value = path.reduce((a, k) => Reflect.get(a, k), x);
  let valid1 = true;
  valid1 = typeof value === type;
  if (type === "object") valid1 = value !== null;
  if (type === "array") valid1 = Array.isArray(value);
  if (!valid1) {
    throw new Error(
      `Validating the lit-action JSON string failed: value of type '${type}' expected at path 'Action${
        path.map((x1) => "." + x1).join()
      }'.`,
    );
  }
}
export { stringify1 as stringify };
export { parse1 as parse };
const mod = function () {
  return {
    stringify: stringify1,
    parse: parse1,
  };
}();
function _typeof(obj) {
  "@babel/helpers - typeof";
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function (obj2) {
      return typeof obj2;
    };
  } else {
    _typeof = function (obj2) {
      return obj2 && typeof Symbol === "function" &&
          obj2.constructor === Symbol && obj2 !== Symbol.prototype
        ? "symbol"
        : typeof obj2;
    };
  }
  return _typeof(obj);
}
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}
function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value,
      enumerable: true,
      configurable: true,
      writable: true,
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true,
    },
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}
function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf
    ? Object.getPrototypeOf
    : function _getPrototypeOf2(o2) {
      return o2.__proto__ || Object.getPrototypeOf(o2);
    };
  return _getPrototypeOf(o);
}
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
    o2.__proto__ = p2;
    return o2;
  };
  return _setPrototypeOf(o, p);
}
function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;
  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {
    }));
    return true;
  } catch (e) {
    return false;
  }
}
function _construct(Parent, args, Class) {
  if (_isNativeReflectConstruct()) {
    _construct = Reflect.construct;
  } else {
    _construct = function _construct2(Parent2, args2, Class2) {
      var a = [
        null,
      ];
      a.push.apply(a, args2);
      var Constructor = Function.bind.apply(Parent2, a);
      var instance = new Constructor();
      if (Class2) _setPrototypeOf(instance, Class2.prototype);
      return instance;
    };
  }
  return _construct.apply(null, arguments);
}
function _isNativeFunction(fn) {
  return Function.toString.call(fn).indexOf("[native code]") !== -1;
}
function _wrapNativeSuper(Class) {
  var _cache = typeof Map === "function" ? new Map() : void 0;
  _wrapNativeSuper = function _wrapNativeSuper2(Class2) {
    if (Class2 === null || !_isNativeFunction(Class2)) return Class2;
    if (typeof Class2 !== "function") {
      throw new TypeError("Super expression must either be null or a function");
    }
    if (typeof _cache !== "undefined") {
      if (_cache.has(Class2)) return _cache.get(Class2);
      _cache.set(Class2, Wrapper);
    }
    function Wrapper() {
      return _construct(Class2, arguments, _getPrototypeOf(this).constructor);
    }
    Wrapper.prototype = Object.create(Class2.prototype, {
      constructor: {
        value: Wrapper,
        enumerable: false,
        writable: true,
        configurable: true,
      },
    });
    return _setPrototypeOf(Wrapper, Class2);
  };
  return _wrapNativeSuper(Class);
}
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called",
    );
  }
  return self;
}
function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  }
  return _assertThisInitialized(self);
}
function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();
  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived), result;
    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }
    return _possibleConstructorReturn(this, result);
  };
}
function _superPropBase(object, property) {
  while (!Object.prototype.hasOwnProperty.call(object, property)) {
    object = _getPrototypeOf(object);
    if (object === null) break;
  }
  return object;
}
function _get(target, property, receiver) {
  if (typeof Reflect !== "undefined" && Reflect.get) {
    _get = Reflect.get;
  } else {
    _get = function _get2(target2, property2, receiver2) {
      var base = _superPropBase(target2, property2);
      if (!base) return;
      var desc = Object.getOwnPropertyDescriptor(base, property2);
      if (desc.get) {
        return desc.get.call(receiver2);
      }
      return desc.value;
    };
  }
  return _get(target, property, receiver || target);
}
function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) ||
    _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}
function _toArray(arr) {
  return _arrayWithHoles(arr) || _iterableToArray(arr) ||
    _unsupportedIterableToArray(arr) || _nonIterableRest();
}
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}
function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) {
    return Array.from(iter);
  }
}
function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) {
    return;
  }
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = void 0;
  try {
    for (
      var _i = arr[Symbol.iterator](), _s;
      !(_n = (_s = _i.next()).done);
      _n = true
    ) {
      _arr.push(_s.value);
      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }
  return _arr;
}
function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) {
    return _arrayLikeToArray(o, minLen);
  }
}
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
  return arr2;
}
function _nonIterableRest() {
  throw new TypeError(
    "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
  );
}
function _createForOfIteratorHelper(o, allowArrayLike) {
  var it;
  if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
    if (
      Array.isArray(o) || (it = _unsupportedIterableToArray(o)) ||
      allowArrayLike && o && typeof o.length === "number"
    ) {
      if (it) o = it;
      var i = 0;
      var F = function () {
      };
      return {
        s: F,
        n: function () {
          if (i >= o.length) {
            return {
              done: true,
            };
          }
          return {
            done: false,
            value: o[i++],
          };
        },
        e: function (e) {
          throw e;
        },
        f: F,
      };
    }
    throw new TypeError(
      "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
    );
  }
  var normalCompletion = true, didErr = false, err;
  return {
    s: function () {
      it = o[Symbol.iterator]();
    },
    n: function () {
      var step = it.next();
      normalCompletion = step.done;
      return step;
    },
    e: function (e) {
      didErr = true;
      err = e;
    },
    f: function () {
      try {
        if (!normalCompletion && it.return != null) it.return();
      } finally {
        if (didErr) throw err;
      }
    },
  };
}
var Char = {
  ANCHOR: "&",
  COMMENT: "#",
  TAG: "!",
  DIRECTIVES_END: "-",
  DOCUMENT_END: ".",
};
var Type = {
  ALIAS: "ALIAS",
  BLANK_LINE: "BLANK_LINE",
  BLOCK_FOLDED: "BLOCK_FOLDED",
  BLOCK_LITERAL: "BLOCK_LITERAL",
  COMMENT: "COMMENT",
  DIRECTIVE: "DIRECTIVE",
  DOCUMENT: "DOCUMENT",
  FLOW_MAP: "FLOW_MAP",
  FLOW_SEQ: "FLOW_SEQ",
  MAP: "MAP",
  MAP_KEY: "MAP_KEY",
  MAP_VALUE: "MAP_VALUE",
  PLAIN: "PLAIN",
  QUOTE_DOUBLE: "QUOTE_DOUBLE",
  QUOTE_SINGLE: "QUOTE_SINGLE",
  SEQ: "SEQ",
  SEQ_ITEM: "SEQ_ITEM",
};
var defaultTagPrefix = "tag:yaml.org,2002:";
var defaultTags = {
  MAP: "tag:yaml.org,2002:map",
  SEQ: "tag:yaml.org,2002:seq",
  STR: "tag:yaml.org,2002:str",
};
function findLineStarts(src) {
  var ls = [
    0,
  ];
  var offset = src.indexOf("\n");
  while (offset !== -1) {
    offset += 1;
    ls.push(offset);
    offset = src.indexOf("\n", offset);
  }
  return ls;
}
function getSrcInfo(cst) {
  var lineStarts, src;
  if (typeof cst === "string") {
    lineStarts = findLineStarts(cst);
    src = cst;
  } else {
    if (Array.isArray(cst)) cst = cst[0];
    if (cst && cst.context) {
      if (!cst.lineStarts) cst.lineStarts = findLineStarts(cst.context.src);
      lineStarts = cst.lineStarts;
      src = cst.context.src;
    }
  }
  return {
    lineStarts,
    src,
  };
}
function getLinePos(offset, cst) {
  if (typeof offset !== "number" || offset < 0) return null;
  var _getSrcInfo = getSrcInfo(cst),
    lineStarts = _getSrcInfo.lineStarts,
    src = _getSrcInfo.src;
  if (!lineStarts || !src || offset > src.length) return null;
  for (var i = 0; i < lineStarts.length; ++i) {
    var start = lineStarts[i];
    if (offset < start) {
      return {
        line: i,
        col: offset - lineStarts[i - 1] + 1,
      };
    }
    if (offset === start) {
      return {
        line: i + 1,
        col: 1,
      };
    }
  }
  var line = lineStarts.length;
  return {
    line,
    col: offset - lineStarts[line - 1] + 1,
  };
}
function getLine(line, cst) {
  var _getSrcInfo2 = getSrcInfo(cst),
    lineStarts = _getSrcInfo2.lineStarts,
    src = _getSrcInfo2.src;
  if (!lineStarts || !(line >= 1) || line > lineStarts.length) return null;
  var start = lineStarts[line - 1];
  var end = lineStarts[line];
  while (end && end > start && src[end - 1] === "\n") {
    --end;
  }
  return src.slice(start, end);
}
function getPrettyContext(_ref, cst) {
  var start = _ref.start, end = _ref.end;
  var maxWidth = arguments.length > 2 && arguments[2] !== void 0
    ? arguments[2]
    : 80;
  var src = getLine(start.line, cst);
  if (!src) return null;
  var col = start.col;
  if (src.length > maxWidth) {
    if (col <= maxWidth - 10) {
      src = src.substr(0, maxWidth - 1) + "\u2026";
    } else {
      var halfWidth = Math.round(maxWidth / 2);
      if (src.length > col + halfWidth) {
        src = src.substr(0, col + halfWidth - 1) + "\u2026";
      }
      col -= src.length - maxWidth;
      src = "\u2026" + src.substr(1 - maxWidth);
    }
  }
  var errLen = 1;
  var errEnd = "";
  if (end) {
    if (
      end.line === start.line && col + (end.col - start.col) <= maxWidth + 1
    ) {
      errLen = end.col - start.col;
    } else {
      errLen = Math.min(src.length + 1, maxWidth) - col;
      errEnd = "\u2026";
    }
  }
  var offset = col > 1 ? " ".repeat(col - 1) : "";
  var err = "^".repeat(errLen);
  return "".concat(src, "\n").concat(offset).concat(err).concat(errEnd);
}
var Range1 = function () {
  function Range2(start, end) {
    _classCallCheck(this, Range2);
    this.start = start;
    this.end = end || start;
  }
  _createClass(Range2, [
    {
      key: "isEmpty",
      value: function isEmpty() {
        return typeof this.start !== "number" || !this.end ||
          this.end <= this.start;
      },
    },
    {
      key: "setOrigRange",
      value: function setOrigRange(cr, offset) {
        var start = this.start, end = this.end;
        if (cr.length === 0 || end <= cr[0]) {
          this.origStart = start;
          this.origEnd = end;
          return offset;
        }
        var i = offset;
        while (i < cr.length) {
          if (cr[i] > start) break;
          else ++i;
        }
        this.origStart = start + i;
        var nextOffset = i;
        while (i < cr.length) {
          if (cr[i] >= end) break;
          else ++i;
        }
        this.origEnd = end + i;
        return nextOffset;
      },
    },
  ], [
    {
      key: "copy",
      value: function copy(orig) {
        return new Range2(orig.start, orig.end);
      },
    },
  ]);
  return Range2;
}();
var Node1 = function () {
  function Node2(type, props, context) {
    _classCallCheck(this, Node2);
    Object.defineProperty(this, "context", {
      value: context || null,
      writable: true,
    });
    this.error = null;
    this.range = null;
    this.valueRange = null;
    this.props = props || [];
    this.type = type;
    this.value = null;
  }
  _createClass(Node2, [
    {
      key: "getPropValue",
      value: function getPropValue(idx, key, skipKey) {
        if (!this.context) return null;
        var src = this.context.src;
        var prop = this.props[idx];
        return prop && src[prop.start] === key
          ? src.slice(prop.start + (skipKey ? 1 : 0), prop.end)
          : null;
      },
    },
    {
      key: "anchor",
      get: function get() {
        for (var i = 0; i < this.props.length; ++i) {
          var anchor = this.getPropValue(i, Char.ANCHOR, true);
          if (anchor != null) return anchor;
        }
        return null;
      },
    },
    {
      key: "comment",
      get: function get() {
        var comments = [];
        for (var i = 0; i < this.props.length; ++i) {
          var comment = this.getPropValue(i, Char.COMMENT, true);
          if (comment != null) comments.push(comment);
        }
        return comments.length > 0 ? comments.join("\n") : null;
      },
    },
    {
      key: "commentHasRequiredWhitespace",
      value: function commentHasRequiredWhitespace(start) {
        var src = this.context.src;
        if (this.header && start === this.header.end) return false;
        if (!this.valueRange) return false;
        var end = this.valueRange.end;
        return start !== end || Node2.atBlank(src, end - 1);
      },
    },
    {
      key: "hasComment",
      get: function get() {
        if (this.context) {
          var src = this.context.src;
          for (var i = 0; i < this.props.length; ++i) {
            if (src[this.props[i].start] === Char.COMMENT) return true;
          }
        }
        return false;
      },
    },
    {
      key: "hasProps",
      get: function get() {
        if (this.context) {
          var src = this.context.src;
          for (var i = 0; i < this.props.length; ++i) {
            if (src[this.props[i].start] !== Char.COMMENT) return true;
          }
        }
        return false;
      },
    },
    {
      key: "includesTrailingLines",
      get: function get() {
        return false;
      },
    },
    {
      key: "jsonLike",
      get: function get() {
        var jsonLikeTypes = [
          Type.FLOW_MAP,
          Type.FLOW_SEQ,
          Type.QUOTE_DOUBLE,
          Type.QUOTE_SINGLE,
        ];
        return jsonLikeTypes.indexOf(this.type) !== -1;
      },
    },
    {
      key: "rangeAsLinePos",
      get: function get() {
        if (!this.range || !this.context) return void 0;
        var start = getLinePos(this.range.start, this.context.root);
        if (!start) return void 0;
        var end = getLinePos(this.range.end, this.context.root);
        return {
          start,
          end,
        };
      },
    },
    {
      key: "rawValue",
      get: function get() {
        if (!this.valueRange || !this.context) return null;
        var _this$valueRange = this.valueRange,
          start = _this$valueRange.start,
          end = _this$valueRange.end;
        return this.context.src.slice(start, end);
      },
    },
    {
      key: "tag",
      get: function get() {
        for (var i = 0; i < this.props.length; ++i) {
          var tag = this.getPropValue(i, Char.TAG, false);
          if (tag != null) {
            if (tag[1] === "<") {
              return {
                verbatim: tag.slice(2, -1),
              };
            } else {
              var _tag$match = tag.match(/^(.*!)([^!]*)$/),
                _tag$match2 = _slicedToArray(_tag$match, 3);
              _tag$match2[0];
              var handle = _tag$match2[1], suffix = _tag$match2[2];
              return {
                handle,
                suffix,
              };
            }
          }
        }
        return null;
      },
    },
    {
      key: "valueRangeContainsNewline",
      get: function get() {
        if (!this.valueRange || !this.context) return false;
        var _this$valueRange2 = this.valueRange,
          start = _this$valueRange2.start,
          end = _this$valueRange2.end;
        var src = this.context.src;
        for (var i = start; i < end; ++i) {
          if (src[i] === "\n") return true;
        }
        return false;
      },
    },
    {
      key: "parseComment",
      value: function parseComment(start) {
        var src = this.context.src;
        if (src[start] === Char.COMMENT) {
          var end = Node2.endOfLine(src, start + 1);
          var commentRange = new Range1(start, end);
          this.props.push(commentRange);
          return end;
        }
        return start;
      },
    },
    {
      key: "setOrigRanges",
      value: function setOrigRanges(cr, offset) {
        if (this.range) offset = this.range.setOrigRange(cr, offset);
        if (this.valueRange) this.valueRange.setOrigRange(cr, offset);
        this.props.forEach(function (prop) {
          return prop.setOrigRange(cr, offset);
        });
        return offset;
      },
    },
    {
      key: "toString",
      value: function toString() {
        var src = this.context.src, range = this.range, value = this.value;
        if (value != null) return value;
        var str = src.slice(range.start, range.end);
        return Node2.addStringTerminator(src, range.end, str);
      },
    },
  ], [
    {
      key: "addStringTerminator",
      value: function addStringTerminator(src, offset, str) {
        if (str[str.length - 1] === "\n") return str;
        var next = Node2.endOfWhiteSpace(src, offset);
        return next >= src.length || src[next] === "\n" ? str + "\n" : str;
      },
    },
    {
      key: "atDocumentBoundary",
      value: function atDocumentBoundary(src, offset, sep) {
        var ch0 = src[offset];
        if (!ch0) return true;
        var prev = src[offset - 1];
        if (prev && prev !== "\n") return false;
        if (sep) {
          if (ch0 !== sep) return false;
        } else {
          if (ch0 !== Char.DIRECTIVES_END && ch0 !== Char.DOCUMENT_END) {
            return false;
          }
        }
        var ch1 = src[offset + 1];
        var ch2 = src[offset + 2];
        if (ch1 !== ch0 || ch2 !== ch0) return false;
        var ch3 = src[offset + 3];
        return !ch3 || ch3 === "\n" || ch3 === "	" || ch3 === " ";
      },
    },
    {
      key: "endOfIdentifier",
      value: function endOfIdentifier(src, offset) {
        var ch = src[offset];
        var isVerbatim = ch === "<";
        var notOk = isVerbatim
          ? [
            "\n",
            "	",
            " ",
            ">",
          ]
          : [
            "\n",
            "	",
            " ",
            "[",
            "]",
            "{",
            "}",
            ",",
          ];
        while (ch && notOk.indexOf(ch) === -1) {
          ch = src[offset += 1];
        }
        if (isVerbatim && ch === ">") offset += 1;
        return offset;
      },
    },
    {
      key: "endOfIndent",
      value: function endOfIndent(src, offset) {
        var ch = src[offset];
        while (ch === " ") {
          ch = src[offset += 1];
        }
        return offset;
      },
    },
    {
      key: "endOfLine",
      value: function endOfLine(src, offset) {
        var ch = src[offset];
        while (ch && ch !== "\n") {
          ch = src[offset += 1];
        }
        return offset;
      },
    },
    {
      key: "endOfWhiteSpace",
      value: function endOfWhiteSpace(src, offset) {
        var ch = src[offset];
        while (ch === "	" || ch === " ") {
          ch = src[offset += 1];
        }
        return offset;
      },
    },
    {
      key: "startOfLine",
      value: function startOfLine(src, offset) {
        var ch = src[offset - 1];
        if (ch === "\n") return offset;
        while (ch && ch !== "\n") {
          ch = src[offset -= 1];
        }
        return offset + 1;
      },
    },
    {
      key: "endOfBlockIndent",
      value: function endOfBlockIndent(src, indent, lineStart) {
        var inEnd = Node2.endOfIndent(src, lineStart);
        if (inEnd > lineStart + indent) {
          return inEnd;
        } else {
          var wsEnd = Node2.endOfWhiteSpace(src, inEnd);
          var ch = src[wsEnd];
          if (!ch || ch === "\n") return wsEnd;
        }
        return null;
      },
    },
    {
      key: "atBlank",
      value: function atBlank(src, offset, endAsBlank) {
        var ch = src[offset];
        return ch === "\n" || ch === "	" || ch === " " || endAsBlank && !ch;
      },
    },
    {
      key: "nextNodeIsIndented",
      value: function nextNodeIsIndented(ch, indentDiff, indicatorAsIndent) {
        if (!ch || indentDiff < 0) return false;
        if (indentDiff > 0) return true;
        return indicatorAsIndent && ch === "-";
      },
    },
    {
      key: "normalizeOffset",
      value: function normalizeOffset(src, offset) {
        var ch = src[offset];
        return !ch
          ? offset
          : ch !== "\n" && src[offset - 1] === "\n"
          ? offset - 1
          : Node2.endOfWhiteSpace(src, offset);
      },
    },
    {
      key: "foldNewline",
      value: function foldNewline(src, offset, indent) {
        var inCount = 0;
        var error = false;
        var fold = "";
        var ch = src[offset + 1];
        while (ch === " " || ch === "	" || ch === "\n") {
          switch (ch) {
            case "\n":
              inCount = 0;
              offset += 1;
              fold += "\n";
              break;
            case "	":
              if (inCount <= indent) error = true;
              offset = Node2.endOfWhiteSpace(src, offset + 2) - 1;
              break;
            case " ":
              inCount += 1;
              offset += 1;
              break;
          }
          ch = src[offset + 1];
        }
        if (!fold) fold = " ";
        if (ch && inCount <= indent) error = true;
        return {
          fold,
          offset,
          error,
        };
      },
    },
  ]);
  return Node2;
}();
var YAMLError = function (_Error) {
  _inherits(YAMLError2, _Error);
  var _super = _createSuper(YAMLError2);
  function YAMLError2(name, source, message) {
    var _this;
    _classCallCheck(this, YAMLError2);
    if (!message || !(source instanceof Node1)) {
      throw new Error("Invalid arguments for new ".concat(name));
    }
    _this = _super.call(this);
    _this.name = name;
    _this.message = message;
    _this.source = source;
    return _this;
  }
  _createClass(YAMLError2, [
    {
      key: "makePretty",
      value: function makePretty() {
        if (!this.source) return;
        this.nodeType = this.source.type;
        var cst = this.source.context && this.source.context.root;
        if (typeof this.offset === "number") {
          this.range = new Range1(this.offset, this.offset + 1);
          var start = cst && getLinePos(this.offset, cst);
          if (start) {
            var end = {
              line: start.line,
              col: start.col + 1,
            };
            this.linePos = {
              start,
              end,
            };
          }
          delete this.offset;
        } else {
          this.range = this.source.range;
          this.linePos = this.source.rangeAsLinePos;
        }
        if (this.linePos) {
          var _this$linePos$start = this.linePos.start,
            line = _this$linePos$start.line,
            col = _this$linePos$start.col;
          this.message += " at line ".concat(line, ", column ").concat(col);
          var ctx = cst && getPrettyContext(this.linePos, cst);
          if (ctx) this.message += ":\n\n".concat(ctx, "\n");
        }
        delete this.source;
      },
    },
  ]);
  return YAMLError2;
}(_wrapNativeSuper(Error));
var YAMLReferenceError = function (_YAMLError) {
  _inherits(YAMLReferenceError2, _YAMLError);
  var _super2 = _createSuper(YAMLReferenceError2);
  function YAMLReferenceError2(source, message) {
    _classCallCheck(this, YAMLReferenceError2);
    return _super2.call(this, "YAMLReferenceError", source, message);
  }
  return YAMLReferenceError2;
}(YAMLError);
var YAMLSemanticError = function (_YAMLError2) {
  _inherits(YAMLSemanticError2, _YAMLError2);
  var _super3 = _createSuper(YAMLSemanticError2);
  function YAMLSemanticError2(source, message) {
    _classCallCheck(this, YAMLSemanticError2);
    return _super3.call(this, "YAMLSemanticError", source, message);
  }
  return YAMLSemanticError2;
}(YAMLError);
var YAMLSyntaxError = function (_YAMLError3) {
  _inherits(YAMLSyntaxError2, _YAMLError3);
  var _super4 = _createSuper(YAMLSyntaxError2);
  function YAMLSyntaxError2(source, message) {
    _classCallCheck(this, YAMLSyntaxError2);
    return _super4.call(this, "YAMLSyntaxError", source, message);
  }
  return YAMLSyntaxError2;
}(YAMLError);
var YAMLWarning = function (_YAMLError4) {
  _inherits(YAMLWarning2, _YAMLError4);
  var _super5 = _createSuper(YAMLWarning2);
  function YAMLWarning2(source, message) {
    _classCallCheck(this, YAMLWarning2);
    return _super5.call(this, "YAMLWarning", source, message);
  }
  return YAMLWarning2;
}(YAMLError);
var PlainValue = function (_Node) {
  _inherits(PlainValue2, _Node);
  var _super = _createSuper(PlainValue2);
  function PlainValue2() {
    _classCallCheck(this, PlainValue2);
    return _super.apply(this, arguments);
  }
  _createClass(PlainValue2, [
    {
      key: "strValue",
      get: function get() {
        if (!this.valueRange || !this.context) return null;
        var _this$valueRange = this.valueRange,
          start = _this$valueRange.start,
          end = _this$valueRange.end;
        var src = this.context.src;
        var ch = src[end - 1];
        while (start < end && (ch === "\n" || ch === "	" || ch === " ")) {
          ch = src[(--end) - 1];
        }
        var str = "";
        for (var i = start; i < end; ++i) {
          var _ch = src[i];
          if (_ch === "\n") {
            var _Node$foldNewline = Node1.foldNewline(src, i, -1),
              fold = _Node$foldNewline.fold,
              offset = _Node$foldNewline.offset;
            str += fold;
            i = offset;
          } else if (_ch === " " || _ch === "	") {
            var wsStart = i;
            var next = src[i + 1];
            while (i < end && (next === " " || next === "	")) {
              i += 1;
              next = src[i + 1];
            }
            if (next !== "\n") {
              str += i > wsStart ? src.slice(wsStart, i + 1) : _ch;
            }
          } else {
            str += _ch;
          }
        }
        var ch0 = src[start];
        switch (ch0) {
          case "	": {
            var msg = "Plain value cannot start with a tab character";
            var errors = [
              new YAMLSemanticError(this, msg),
            ];
            return {
              errors,
              str,
            };
          }
          case "@":
          case "`": {
            var _msg = "Plain value cannot start with reserved character "
              .concat(ch0);
            var _errors = [
              new YAMLSemanticError(this, _msg),
            ];
            return {
              errors: _errors,
              str,
            };
          }
          default:
            return str;
        }
      },
    },
    {
      key: "parseBlockValue",
      value: function parseBlockValue(start) {
        var _this$context = this.context,
          indent = _this$context.indent,
          inFlow = _this$context.inFlow,
          src = _this$context.src;
        var offset = start;
        var valueEnd = start;
        for (var ch = src[offset]; ch === "\n"; ch = src[offset]) {
          if (Node1.atDocumentBoundary(src, offset + 1)) break;
          var end = Node1.endOfBlockIndent(src, indent, offset + 1);
          if (end === null || src[end] === "#") break;
          if (src[end] === "\n") {
            offset = end;
          } else {
            valueEnd = PlainValue2.endOfLine(src, end, inFlow);
            offset = valueEnd;
          }
        }
        if (this.valueRange.isEmpty()) this.valueRange.start = start;
        this.valueRange.end = valueEnd;
        return valueEnd;
      },
    },
    {
      key: "parse",
      value: function parse2(context, start) {
        this.context = context;
        var inFlow = context.inFlow, src = context.src;
        var offset = start;
        var ch = src[offset];
        if (ch && ch !== "#" && ch !== "\n") {
          offset = PlainValue2.endOfLine(src, start, inFlow);
        }
        this.valueRange = new Range1(start, offset);
        offset = Node1.endOfWhiteSpace(src, offset);
        offset = this.parseComment(offset);
        if (!this.hasComment || this.valueRange.isEmpty()) {
          offset = this.parseBlockValue(offset);
        }
        return offset;
      },
    },
  ], [
    {
      key: "endOfLine",
      value: function endOfLine(src, start, inFlow) {
        var ch = src[start];
        var offset = start;
        while (ch && ch !== "\n") {
          if (
            inFlow &&
            (ch === "[" || ch === "]" || ch === "{" || ch === "}" || ch === ",")
          ) {
            break;
          }
          var next = src[offset + 1];
          if (
            ch === ":" &&
            (!next || next === "\n" || next === "	" || next === " " ||
              inFlow && next === ",")
          ) {
            break;
          }
          if ((ch === " " || ch === "	") && next === "#") break;
          offset += 1;
          ch = next;
        }
        return offset;
      },
    },
  ]);
  return PlainValue2;
}(Node1);
var BlankLine = function (_Node) {
  _inherits(BlankLine2, _Node);
  var _super = _createSuper(BlankLine2);
  function BlankLine2() {
    _classCallCheck(this, BlankLine2);
    return _super.call(this, Type.BLANK_LINE);
  }
  _createClass(BlankLine2, [
    {
      key: "includesTrailingLines",
      get: function get() {
        return true;
      },
    },
    {
      key: "parse",
      value: function parse2(context, start) {
        this.context = context;
        this.range = new Range1(start, start + 1);
        return start + 1;
      },
    },
  ]);
  return BlankLine2;
}(Node1);
var CollectionItem = function (_Node) {
  _inherits(CollectionItem2, _Node);
  var _super = _createSuper(CollectionItem2);
  function CollectionItem2(type, props) {
    var _this;
    _classCallCheck(this, CollectionItem2);
    _this = _super.call(this, type, props);
    _this.node = null;
    return _this;
  }
  _createClass(CollectionItem2, [
    {
      key: "includesTrailingLines",
      get: function get() {
        return !!this.node && this.node.includesTrailingLines;
      },
    },
    {
      key: "parse",
      value: function parse2(context, start) {
        this.context = context;
        var parseNode = context.parseNode, src = context.src;
        var atLineStart = context.atLineStart, lineStart = context.lineStart;
        if (!atLineStart && this.type === Type.SEQ_ITEM) {
          this.error = new YAMLSemanticError(
            this,
            "Sequence items must not have preceding content on the same line",
          );
        }
        var indent = atLineStart ? start - lineStart : context.indent;
        var offset = Node1.endOfWhiteSpace(src, start + 1);
        var ch = src[offset];
        var inlineComment = ch === "#";
        var comments = [];
        var blankLine = null;
        while (ch === "\n" || ch === "#") {
          if (ch === "#") {
            var _end = Node1.endOfLine(src, offset + 1);
            comments.push(new Range1(offset, _end));
            offset = _end;
          } else {
            atLineStart = true;
            lineStart = offset + 1;
            var wsEnd = Node1.endOfWhiteSpace(src, lineStart);
            if (src[wsEnd] === "\n" && comments.length === 0) {
              blankLine = new BlankLine();
              lineStart = blankLine.parse({
                src,
              }, lineStart);
            }
            offset = Node1.endOfIndent(src, lineStart);
          }
          ch = src[offset];
        }
        if (
          Node1.nextNodeIsIndented(
            ch,
            offset - (lineStart + indent),
            this.type !== Type.SEQ_ITEM,
          )
        ) {
          this.node = parseNode({
            atLineStart,
            inCollection: false,
            indent,
            lineStart,
            parent: this,
          }, offset);
        } else if (ch && lineStart > start + 1) {
          offset = lineStart - 1;
        }
        if (this.node) {
          if (blankLine) {
            var items = context.parent.items || context.parent.contents;
            if (items) items.push(blankLine);
          }
          if (comments.length) Array.prototype.push.apply(this.props, comments);
          offset = this.node.range.end;
        } else {
          if (inlineComment) {
            var c = comments[0];
            this.props.push(c);
            offset = c.end;
          } else {
            offset = Node1.endOfLine(src, start + 1);
          }
        }
        var end = this.node ? this.node.valueRange.end : offset;
        this.valueRange = new Range1(start, end);
        return offset;
      },
    },
    {
      key: "setOrigRanges",
      value: function setOrigRanges(cr, offset) {
        offset = _get(
          _getPrototypeOf(CollectionItem2.prototype),
          "setOrigRanges",
          this,
        ).call(this, cr, offset);
        return this.node ? this.node.setOrigRanges(cr, offset) : offset;
      },
    },
    {
      key: "toString",
      value: function toString() {
        var src = this.context.src,
          node = this.node,
          range = this.range,
          value = this.value;
        if (value != null) return value;
        var str = node
          ? src.slice(range.start, node.range.start) + String(node)
          : src.slice(range.start, range.end);
        return Node1.addStringTerminator(src, range.end, str);
      },
    },
  ]);
  return CollectionItem2;
}(Node1);
var Comment1 = function (_Node) {
  _inherits(Comment2, _Node);
  var _super = _createSuper(Comment2);
  function Comment2() {
    _classCallCheck(this, Comment2);
    return _super.call(this, Type.COMMENT);
  }
  _createClass(Comment2, [
    {
      key: "parse",
      value: function parse2(context, start) {
        this.context = context;
        var offset = this.parseComment(start);
        this.range = new Range1(start, offset);
        return offset;
      },
    },
  ]);
  return Comment2;
}(Node1);
function grabCollectionEndComments(node) {
  var cnode = node;
  while (cnode instanceof CollectionItem) {
    cnode = cnode.node;
  }
  if (!(cnode instanceof Collection)) return null;
  var len = cnode.items.length;
  var ci = -1;
  for (var i = len - 1; i >= 0; --i) {
    var n = cnode.items[i];
    if (n.type === Type.COMMENT) {
      var _n$context = n.context,
        indent = _n$context.indent,
        lineStart = _n$context.lineStart;
      if (indent > 0 && n.range.start >= lineStart + indent) break;
      ci = i;
    } else if (n.type === Type.BLANK_LINE) ci = i;
    else break;
  }
  if (ci === -1) return null;
  var ca = cnode.items.splice(ci, len - ci);
  var prevEnd = ca[0].range.start;
  while (true) {
    cnode.range.end = prevEnd;
    if (cnode.valueRange && cnode.valueRange.end > prevEnd) {
      cnode.valueRange.end = prevEnd;
    }
    if (cnode === node) break;
    cnode = cnode.context.parent;
  }
  return ca;
}
var Collection = function (_Node) {
  _inherits(Collection2, _Node);
  var _super = _createSuper(Collection2);
  function Collection2(firstItem) {
    var _this;
    _classCallCheck(this, Collection2);
    _this = _super.call(
      this,
      firstItem.type === Type.SEQ_ITEM ? Type.SEQ : Type.MAP,
    );
    for (var i = firstItem.props.length - 1; i >= 0; --i) {
      if (firstItem.props[i].start < firstItem.context.lineStart) {
        _this.props = firstItem.props.slice(0, i + 1);
        firstItem.props = firstItem.props.slice(i + 1);
        var itemRange = firstItem.props[0] || firstItem.valueRange;
        firstItem.range.start = itemRange.start;
        break;
      }
    }
    _this.items = [
      firstItem,
    ];
    var ec = grabCollectionEndComments(firstItem);
    if (ec) Array.prototype.push.apply(_this.items, ec);
    return _this;
  }
  _createClass(Collection2, [
    {
      key: "includesTrailingLines",
      get: function get() {
        return this.items.length > 0;
      },
    },
    {
      key: "parse",
      value: function parse2(context, start) {
        this.context = context;
        var parseNode = context.parseNode, src = context.src;
        var lineStart = Node1.startOfLine(src, start);
        var firstItem = this.items[0];
        firstItem.context.parent = this;
        this.valueRange = Range1.copy(firstItem.valueRange);
        var indent = firstItem.range.start - firstItem.context.lineStart;
        var offset = start;
        offset = Node1.normalizeOffset(src, offset);
        var ch = src[offset];
        var atLineStart = Node1.endOfWhiteSpace(src, lineStart) === offset;
        var prevIncludesTrailingLines = false;
        while (ch) {
          while (ch === "\n" || ch === "#") {
            if (atLineStart && ch === "\n" && !prevIncludesTrailingLines) {
              var blankLine = new BlankLine();
              offset = blankLine.parse({
                src,
              }, offset);
              this.valueRange.end = offset;
              if (offset >= src.length) {
                ch = null;
                break;
              }
              this.items.push(blankLine);
              offset -= 1;
            } else if (ch === "#") {
              if (
                offset < lineStart + indent &&
                !Collection2.nextContentHasIndent(src, offset, indent)
              ) {
                return offset;
              }
              var comment = new Comment1();
              offset = comment.parse({
                indent,
                lineStart,
                src,
              }, offset);
              this.items.push(comment);
              this.valueRange.end = offset;
              if (offset >= src.length) {
                ch = null;
                break;
              }
            }
            lineStart = offset + 1;
            offset = Node1.endOfIndent(src, lineStart);
            if (Node1.atBlank(src, offset)) {
              var wsEnd = Node1.endOfWhiteSpace(src, offset);
              var next = src[wsEnd];
              if (!next || next === "\n" || next === "#") {
                offset = wsEnd;
              }
            }
            ch = src[offset];
            atLineStart = true;
          }
          if (!ch) {
            break;
          }
          if (offset !== lineStart + indent && (atLineStart || ch !== ":")) {
            if (offset < lineStart + indent) {
              if (lineStart > start) offset = lineStart;
              break;
            } else if (!this.error) {
              var msg = "All collection items must start at the same column";
              this.error = new YAMLSyntaxError(this, msg);
            }
          }
          if (firstItem.type === Type.SEQ_ITEM) {
            if (ch !== "-") {
              if (lineStart > start) offset = lineStart;
              break;
            }
          } else if (ch === "-" && !this.error) {
            var _next = src[offset + 1];
            if (!_next || _next === "\n" || _next === "	" || _next === " ") {
              var _msg = "A collection cannot be both a mapping and a sequence";
              this.error = new YAMLSyntaxError(this, _msg);
            }
          }
          var node = parseNode({
            atLineStart,
            inCollection: true,
            indent,
            lineStart,
            parent: this,
          }, offset);
          if (!node) return offset;
          this.items.push(node);
          this.valueRange.end = node.valueRange.end;
          offset = Node1.normalizeOffset(src, node.range.end);
          ch = src[offset];
          atLineStart = false;
          prevIncludesTrailingLines = node.includesTrailingLines;
          if (ch) {
            var ls = offset - 1;
            var prev = src[ls];
            while (prev === " " || prev === "	") {
              prev = src[--ls];
            }
            if (prev === "\n") {
              lineStart = ls + 1;
              atLineStart = true;
            }
          }
          var ec = grabCollectionEndComments(node);
          if (ec) Array.prototype.push.apply(this.items, ec);
        }
        return offset;
      },
    },
    {
      key: "setOrigRanges",
      value: function setOrigRanges(cr, offset) {
        offset = _get(
          _getPrototypeOf(Collection2.prototype),
          "setOrigRanges",
          this,
        ).call(this, cr, offset);
        this.items.forEach(function (node) {
          offset = node.setOrigRanges(cr, offset);
        });
        return offset;
      },
    },
    {
      key: "toString",
      value: function toString() {
        var src = this.context.src,
          items = this.items,
          range = this.range,
          value = this.value;
        if (value != null) return value;
        var str = src.slice(range.start, items[0].range.start) +
          String(items[0]);
        for (var i = 1; i < items.length; ++i) {
          var item = items[i];
          var _item$context = item.context,
            atLineStart = _item$context.atLineStart,
            indent = _item$context.indent;
          if (atLineStart) {
            for (var _i = 0; _i < indent; ++_i) {
              str += " ";
            }
          }
          str += String(item);
        }
        return Node1.addStringTerminator(src, range.end, str);
      },
    },
  ], [
    {
      key: "nextContentHasIndent",
      value: function nextContentHasIndent(src, offset, indent) {
        var lineStart = Node1.endOfLine(src, offset) + 1;
        offset = Node1.endOfWhiteSpace(src, lineStart);
        var ch = src[offset];
        if (!ch) return false;
        if (offset >= lineStart + indent) return true;
        if (ch !== "#" && ch !== "\n") return false;
        return Collection2.nextContentHasIndent(src, offset, indent);
      },
    },
  ]);
  return Collection2;
}(Node1);
var Directive = function (_Node) {
  _inherits(Directive2, _Node);
  var _super = _createSuper(Directive2);
  function Directive2() {
    var _this;
    _classCallCheck(this, Directive2);
    _this = _super.call(this, Type.DIRECTIVE);
    _this.name = null;
    return _this;
  }
  _createClass(Directive2, [
    {
      key: "parameters",
      get: function get() {
        var raw = this.rawValue;
        return raw ? raw.trim().split(/[ \t]+/) : [];
      },
    },
    {
      key: "parseName",
      value: function parseName(start) {
        var src = this.context.src;
        var offset = start;
        var ch = src[offset];
        while (ch && ch !== "\n" && ch !== "	" && ch !== " ") {
          ch = src[offset += 1];
        }
        this.name = src.slice(start, offset);
        return offset;
      },
    },
    {
      key: "parseParameters",
      value: function parseParameters(start) {
        var src = this.context.src;
        var offset = start;
        var ch = src[offset];
        while (ch && ch !== "\n" && ch !== "#") {
          ch = src[offset += 1];
        }
        this.valueRange = new Range1(start, offset);
        return offset;
      },
    },
    {
      key: "parse",
      value: function parse2(context, start) {
        this.context = context;
        var offset = this.parseName(start + 1);
        offset = this.parseParameters(offset);
        offset = this.parseComment(offset);
        this.range = new Range1(start, offset);
        return offset;
      },
    },
  ]);
  return Directive2;
}(Node1);
var Document1 = function (_Node) {
  _inherits(Document2, _Node);
  var _super = _createSuper(Document2);
  function Document2() {
    var _this;
    _classCallCheck(this, Document2);
    _this = _super.call(this, Type.DOCUMENT);
    _this.directives = null;
    _this.contents = null;
    _this.directivesEndMarker = null;
    _this.documentEndMarker = null;
    return _this;
  }
  _createClass(Document2, [
    {
      key: "parseDirectives",
      value: function parseDirectives(start) {
        var src = this.context.src;
        this.directives = [];
        var atLineStart = true;
        var hasDirectives = false;
        var offset = start;
        while (!Node1.atDocumentBoundary(src, offset, Char.DIRECTIVES_END)) {
          offset = Document2.startCommentOrEndBlankLine(src, offset);
          switch (src[offset]) {
            case "\n":
              if (atLineStart) {
                var blankLine = new BlankLine();
                offset = blankLine.parse({
                  src,
                }, offset);
                if (offset < src.length) {
                  this.directives.push(blankLine);
                }
              } else {
                offset += 1;
                atLineStart = true;
              }
              break;
            case "#":
              {
                var comment = new Comment1();
                offset = comment.parse({
                  src,
                }, offset);
                this.directives.push(comment);
                atLineStart = false;
              }
              break;
            case "%":
              {
                var directive = new Directive();
                offset = directive.parse({
                  parent: this,
                  src,
                }, offset);
                this.directives.push(directive);
                hasDirectives = true;
                atLineStart = false;
              }
              break;
            default:
              if (hasDirectives) {
                this.error = new YAMLSemanticError(
                  this,
                  "Missing directives-end indicator line",
                );
              } else if (this.directives.length > 0) {
                this.contents = this.directives;
                this.directives = [];
              }
              return offset;
          }
        }
        if (src[offset]) {
          this.directivesEndMarker = new Range1(offset, offset + 3);
          return offset + 3;
        }
        if (hasDirectives) {
          this.error = new YAMLSemanticError(
            this,
            "Missing directives-end indicator line",
          );
        } else if (this.directives.length > 0) {
          this.contents = this.directives;
          this.directives = [];
        }
        return offset;
      },
    },
    {
      key: "parseContents",
      value: function parseContents(start) {
        var _this$context = this.context,
          parseNode = _this$context.parseNode,
          src = _this$context.src;
        if (!this.contents) this.contents = [];
        var lineStart = start;
        while (src[lineStart - 1] === "-") {
          lineStart -= 1;
        }
        var offset = Node1.endOfWhiteSpace(src, start);
        var atLineStart = lineStart === start;
        this.valueRange = new Range1(offset);
        while (!Node1.atDocumentBoundary(src, offset, Char.DOCUMENT_END)) {
          switch (src[offset]) {
            case "\n":
              if (atLineStart) {
                var blankLine = new BlankLine();
                offset = blankLine.parse({
                  src,
                }, offset);
                if (offset < src.length) {
                  this.contents.push(blankLine);
                }
              } else {
                offset += 1;
                atLineStart = true;
              }
              lineStart = offset;
              break;
            case "#":
              {
                var comment = new Comment1();
                offset = comment.parse({
                  src,
                }, offset);
                this.contents.push(comment);
                atLineStart = false;
              }
              break;
            default: {
              var iEnd = Node1.endOfIndent(src, offset);
              var context = {
                atLineStart,
                indent: -1,
                inFlow: false,
                inCollection: false,
                lineStart,
                parent: this,
              };
              var node = parseNode(context, iEnd);
              if (!node) return this.valueRange.end = iEnd;
              this.contents.push(node);
              offset = node.range.end;
              atLineStart = false;
              var ec = grabCollectionEndComments(node);
              if (ec) Array.prototype.push.apply(this.contents, ec);
            }
          }
          offset = Document2.startCommentOrEndBlankLine(src, offset);
        }
        this.valueRange.end = offset;
        if (src[offset]) {
          this.documentEndMarker = new Range1(offset, offset + 3);
          offset += 3;
          if (src[offset]) {
            offset = Node1.endOfWhiteSpace(src, offset);
            if (src[offset] === "#") {
              var _comment = new Comment1();
              offset = _comment.parse({
                src,
              }, offset);
              this.contents.push(_comment);
            }
            switch (src[offset]) {
              case "\n":
                offset += 1;
                break;
              case void 0:
                break;
              default:
                this.error = new YAMLSyntaxError(
                  this,
                  "Document end marker line cannot have a non-comment suffix",
                );
            }
          }
        }
        return offset;
      },
    },
    {
      key: "parse",
      value: function parse2(context, start) {
        context.root = this;
        this.context = context;
        var src = context.src;
        var offset = src.charCodeAt(start) === 65279 ? start + 1 : start;
        offset = this.parseDirectives(offset);
        offset = this.parseContents(offset);
        return offset;
      },
    },
    {
      key: "setOrigRanges",
      value: function setOrigRanges(cr, offset) {
        offset = _get(
          _getPrototypeOf(Document2.prototype),
          "setOrigRanges",
          this,
        ).call(this, cr, offset);
        this.directives.forEach(function (node) {
          offset = node.setOrigRanges(cr, offset);
        });
        if (this.directivesEndMarker) {
          offset = this.directivesEndMarker.setOrigRange(cr, offset);
        }
        this.contents.forEach(function (node) {
          offset = node.setOrigRanges(cr, offset);
        });
        if (this.documentEndMarker) {
          offset = this.documentEndMarker.setOrigRange(cr, offset);
        }
        return offset;
      },
    },
    {
      key: "toString",
      value: function toString() {
        var contents = this.contents,
          directives = this.directives,
          value = this.value;
        if (value != null) return value;
        var str = directives.join("");
        if (contents.length > 0) {
          if (directives.length > 0 || contents[0].type === Type.COMMENT) {
            str += "---\n";
          }
          str += contents.join("");
        }
        if (str[str.length - 1] !== "\n") str += "\n";
        return str;
      },
    },
  ], [
    {
      key: "startCommentOrEndBlankLine",
      value: function startCommentOrEndBlankLine(src, start) {
        var offset = Node1.endOfWhiteSpace(src, start);
        var ch = src[offset];
        return ch === "#" || ch === "\n" ? offset : start;
      },
    },
  ]);
  return Document2;
}(Node1);
var Alias1 = function (_Node) {
  _inherits(Alias2, _Node);
  var _super = _createSuper(Alias2);
  function Alias2() {
    _classCallCheck(this, Alias2);
    return _super.apply(this, arguments);
  }
  _createClass(Alias2, [
    {
      key: "parse",
      value: function parse2(context, start) {
        this.context = context;
        var src = context.src;
        var offset = Node1.endOfIdentifier(src, start + 1);
        this.valueRange = new Range1(start + 1, offset);
        offset = Node1.endOfWhiteSpace(src, offset);
        offset = this.parseComment(offset);
        return offset;
      },
    },
  ]);
  return Alias2;
}(Node1);
var Chomp = {
  CLIP: "CLIP",
  KEEP: "KEEP",
  STRIP: "STRIP",
};
var BlockValue = function (_Node) {
  _inherits(BlockValue2, _Node);
  var _super = _createSuper(BlockValue2);
  function BlockValue2(type, props) {
    var _this;
    _classCallCheck(this, BlockValue2);
    _this = _super.call(this, type, props);
    _this.blockIndent = null;
    _this.chomping = Chomp.CLIP;
    _this.header = null;
    return _this;
  }
  _createClass(BlockValue2, [
    {
      key: "includesTrailingLines",
      get: function get() {
        return this.chomping === Chomp.KEEP;
      },
    },
    {
      key: "strValue",
      get: function get() {
        if (!this.valueRange || !this.context) return null;
        var _this$valueRange = this.valueRange,
          start = _this$valueRange.start,
          end = _this$valueRange.end;
        var _this$context = this.context,
          indent = _this$context.indent,
          src = _this$context.src;
        if (this.valueRange.isEmpty()) return "";
        var lastNewLine = null;
        var ch = src[end - 1];
        while (ch === "\n" || ch === "	" || ch === " ") {
          end -= 1;
          if (end <= start) {
            if (this.chomping === Chomp.KEEP) break;
            else return "";
          }
          if (ch === "\n") lastNewLine = end;
          ch = src[end - 1];
        }
        var keepStart = end + 1;
        if (lastNewLine) {
          if (this.chomping === Chomp.KEEP) {
            keepStart = lastNewLine;
            end = this.valueRange.end;
          } else {
            end = lastNewLine;
          }
        }
        var bi = indent + this.blockIndent;
        var folded = this.type === Type.BLOCK_FOLDED;
        var atStart = true;
        var str = "";
        var sep = "";
        var prevMoreIndented = false;
        for (var i = start; i < end; ++i) {
          for (var j = 0; j < bi; ++j) {
            if (src[i] !== " ") break;
            i += 1;
          }
          var _ch = src[i];
          if (_ch === "\n") {
            if (sep === "\n") str += "\n";
            else sep = "\n";
          } else {
            var lineEnd = Node1.endOfLine(src, i);
            var line = src.slice(i, lineEnd);
            i = lineEnd;
            if (folded && (_ch === " " || _ch === "	") && i < keepStart) {
              if (sep === " ") sep = "\n";
              else if (!prevMoreIndented && !atStart && sep === "\n") {
                sep = "\n\n";
              }
              str += sep + line;
              sep = lineEnd < end && src[lineEnd] || "";
              prevMoreIndented = true;
            } else {
              str += sep + line;
              sep = folded && i < keepStart ? " " : "\n";
              prevMoreIndented = false;
            }
            if (atStart && line !== "") atStart = false;
          }
        }
        return this.chomping === Chomp.STRIP ? str : str + "\n";
      },
    },
    {
      key: "parseBlockHeader",
      value: function parseBlockHeader(start) {
        var src = this.context.src;
        var offset = start + 1;
        var bi = "";
        while (true) {
          var ch = src[offset];
          switch (ch) {
            case "-":
              this.chomping = Chomp.STRIP;
              break;
            case "+":
              this.chomping = Chomp.KEEP;
              break;
            case "0":
            case "1":
            case "2":
            case "3":
            case "4":
            case "5":
            case "6":
            case "7":
            case "8":
            case "9":
              bi += ch;
              break;
            default:
              this.blockIndent = Number(bi) || null;
              this.header = new Range1(start, offset);
              return offset;
          }
          offset += 1;
        }
      },
    },
    {
      key: "parseBlockValue",
      value: function parseBlockValue(start) {
        var _this$context2 = this.context,
          indent = _this$context2.indent,
          src = _this$context2.src;
        var explicit = !!this.blockIndent;
        var offset = start;
        var valueEnd = start;
        var minBlockIndent = 1;
        for (var ch = src[offset]; ch === "\n"; ch = src[offset]) {
          offset += 1;
          if (Node1.atDocumentBoundary(src, offset)) break;
          var end = Node1.endOfBlockIndent(src, indent, offset);
          if (end === null) break;
          var _ch2 = src[end];
          var lineIndent = end - (offset + indent);
          if (!this.blockIndent) {
            if (src[end] !== "\n") {
              if (lineIndent < minBlockIndent) {
                var msg =
                  "Block scalars with more-indented leading empty lines must use an explicit indentation indicator";
                this.error = new YAMLSemanticError(this, msg);
              }
              this.blockIndent = lineIndent;
            } else if (lineIndent > minBlockIndent) {
              minBlockIndent = lineIndent;
            }
          } else if (_ch2 && _ch2 !== "\n" && lineIndent < this.blockIndent) {
            if (src[end] === "#") break;
            if (!this.error) {
              var _src = explicit
                ? "explicit indentation indicator"
                : "first line";
              var _msg = "Block scalars must not be less indented than their "
                .concat(_src);
              this.error = new YAMLSemanticError(this, _msg);
            }
          }
          if (src[end] === "\n") {
            offset = end;
          } else {
            offset = valueEnd = Node1.endOfLine(src, end);
          }
        }
        if (this.chomping !== Chomp.KEEP) {
          offset = src[valueEnd] ? valueEnd + 1 : valueEnd;
        }
        this.valueRange = new Range1(start + 1, offset);
        return offset;
      },
    },
    {
      key: "parse",
      value: function parse2(context, start) {
        this.context = context;
        var src = context.src;
        var offset = this.parseBlockHeader(start);
        offset = Node1.endOfWhiteSpace(src, offset);
        offset = this.parseComment(offset);
        offset = this.parseBlockValue(offset);
        return offset;
      },
    },
    {
      key: "setOrigRanges",
      value: function setOrigRanges(cr, offset) {
        offset = _get(
          _getPrototypeOf(BlockValue2.prototype),
          "setOrigRanges",
          this,
        ).call(this, cr, offset);
        return this.header ? this.header.setOrigRange(cr, offset) : offset;
      },
    },
  ]);
  return BlockValue2;
}(Node1);
var FlowCollection = function (_Node) {
  _inherits(FlowCollection2, _Node);
  var _super = _createSuper(FlowCollection2);
  function FlowCollection2(type, props) {
    var _this;
    _classCallCheck(this, FlowCollection2);
    _this = _super.call(this, type, props);
    _this.items = null;
    return _this;
  }
  _createClass(FlowCollection2, [
    {
      key: "prevNodeIsJsonLike",
      value: function prevNodeIsJsonLike() {
        var idx = arguments.length > 0 && arguments[0] !== void 0
          ? arguments[0]
          : this.items.length;
        var node = this.items[idx - 1];
        return !!node &&
          (node.jsonLike ||
            node.type === Type.COMMENT && this.prevNodeIsJsonLike(idx - 1));
      },
    },
    {
      key: "parse",
      value: function parse2(context, start) {
        this.context = context;
        var parseNode = context.parseNode, src = context.src;
        var indent = context.indent, lineStart = context.lineStart;
        var __char = src[start];
        this.items = [
          {
            char: __char,
            offset: start,
          },
        ];
        var offset = Node1.endOfWhiteSpace(src, start + 1);
        __char = src[offset];
        while (__char && __char !== "]" && __char !== "}") {
          switch (__char) {
            case "\n":
              {
                lineStart = offset + 1;
                var wsEnd = Node1.endOfWhiteSpace(src, lineStart);
                if (src[wsEnd] === "\n") {
                  var blankLine = new BlankLine();
                  lineStart = blankLine.parse({
                    src,
                  }, lineStart);
                  this.items.push(blankLine);
                }
                offset = Node1.endOfIndent(src, lineStart);
                if (offset <= lineStart + indent) {
                  __char = src[offset];
                  if (
                    offset < lineStart + indent ||
                    __char !== "]" && __char !== "}"
                  ) {
                    var msg = "Insufficient indentation in flow collection";
                    this.error = new YAMLSemanticError(this, msg);
                  }
                }
              }
              break;
            case ",":
              {
                this.items.push({
                  char: __char,
                  offset,
                });
                offset += 1;
              }
              break;
            case "#":
              {
                var comment = new Comment1();
                offset = comment.parse({
                  src,
                }, offset);
                this.items.push(comment);
              }
              break;
            case "?":
            case ":": {
              var next = src[offset + 1];
              if (
                next === "\n" || next === "	" || next === " " ||
                next === "," || __char === ":" && this.prevNodeIsJsonLike()
              ) {
                this.items.push({
                  char: __char,
                  offset,
                });
                offset += 1;
                break;
              }
            }
            default: {
              var node = parseNode({
                atLineStart: false,
                inCollection: false,
                inFlow: true,
                indent: -1,
                lineStart,
                parent: this,
              }, offset);
              if (!node) {
                this.valueRange = new Range1(start, offset);
                return offset;
              }
              this.items.push(node);
              offset = Node1.normalizeOffset(src, node.range.end);
            }
          }
          offset = Node1.endOfWhiteSpace(src, offset);
          __char = src[offset];
        }
        this.valueRange = new Range1(start, offset + 1);
        if (__char) {
          this.items.push({
            char: __char,
            offset,
          });
          offset = Node1.endOfWhiteSpace(src, offset + 1);
          offset = this.parseComment(offset);
        }
        return offset;
      },
    },
    {
      key: "setOrigRanges",
      value: function setOrigRanges(cr, offset) {
        offset = _get(
          _getPrototypeOf(FlowCollection2.prototype),
          "setOrigRanges",
          this,
        ).call(this, cr, offset);
        this.items.forEach(function (node) {
          if (node instanceof Node1) {
            offset = node.setOrigRanges(cr, offset);
          } else if (cr.length === 0) {
            node.origOffset = node.offset;
          } else {
            var i = offset;
            while (i < cr.length) {
              if (cr[i] > node.offset) break;
              else ++i;
            }
            node.origOffset = node.offset + i;
            offset = i;
          }
        });
        return offset;
      },
    },
    {
      key: "toString",
      value: function toString() {
        var src = this.context.src,
          items = this.items,
          range = this.range,
          value = this.value;
        if (value != null) return value;
        var nodes = items.filter(function (item) {
          return item instanceof Node1;
        });
        var str = "";
        var prevEnd = range.start;
        nodes.forEach(function (node) {
          var prefix = src.slice(prevEnd, node.range.start);
          prevEnd = node.range.end;
          str += prefix + String(node);
          if (
            str[str.length - 1] === "\n" && src[prevEnd - 1] !== "\n" &&
            src[prevEnd] === "\n"
          ) {
            prevEnd += 1;
          }
        });
        str += src.slice(prevEnd, range.end);
        return Node1.addStringTerminator(src, range.end, str);
      },
    },
  ]);
  return FlowCollection2;
}(Node1);
var QuoteDouble = function (_Node) {
  _inherits(QuoteDouble2, _Node);
  var _super = _createSuper(QuoteDouble2);
  function QuoteDouble2() {
    _classCallCheck(this, QuoteDouble2);
    return _super.apply(this, arguments);
  }
  _createClass(QuoteDouble2, [
    {
      key: "strValue",
      get: function get() {
        if (!this.valueRange || !this.context) return null;
        var errors = [];
        var _this$valueRange = this.valueRange,
          start = _this$valueRange.start,
          end = _this$valueRange.end;
        var _this$context = this.context,
          indent = _this$context.indent,
          src = _this$context.src;
        if (src[end - 1] !== '"') {
          errors.push(new YAMLSyntaxError(this, 'Missing closing "quote'));
        }
        var str = "";
        for (var i = start + 1; i < end - 1; ++i) {
          var ch = src[i];
          if (ch === "\n") {
            if (Node1.atDocumentBoundary(src, i + 1)) {
              errors.push(
                new YAMLSemanticError(
                  this,
                  "Document boundary indicators are not allowed within string values",
                ),
              );
            }
            var _Node$foldNewline = Node1.foldNewline(src, i, indent),
              fold = _Node$foldNewline.fold,
              offset = _Node$foldNewline.offset,
              error = _Node$foldNewline.error;
            str += fold;
            i = offset;
            if (error) {
              errors.push(
                new YAMLSemanticError(
                  this,
                  "Multi-line double-quoted string needs to be sufficiently indented",
                ),
              );
            }
          } else if (ch === "\\") {
            i += 1;
            switch (src[i]) {
              case "0":
                str += "\0";
                break;
              case "a":
                str += "\x07";
                break;
              case "b":
                str += "\b";
                break;
              case "e":
                str += "";
                break;
              case "f":
                str += "\f";
                break;
              case "n":
                str += "\n";
                break;
              case "r":
                str += "\r";
                break;
              case "t":
                str += "	";
                break;
              case "v":
                str += "\v";
                break;
              case "N":
                str += "\x85";
                break;
              case "_":
                str += "\xA0";
                break;
              case "L":
                str += "\u2028";
                break;
              case "P":
                str += "\u2029";
                break;
              case " ":
                str += " ";
                break;
              case '"':
                str += '"';
                break;
              case "/":
                str += "/";
                break;
              case "\\":
                str += "\\";
                break;
              case "	":
                str += "	";
                break;
              case "x":
                str += this.parseCharCode(i + 1, 2, errors);
                i += 2;
                break;
              case "u":
                str += this.parseCharCode(i + 1, 4, errors);
                i += 4;
                break;
              case "U":
                str += this.parseCharCode(i + 1, 8, errors);
                i += 8;
                break;
              case "\n":
                while (src[i + 1] === " " || src[i + 1] === "	") {
                  i += 1;
                }
                break;
              default:
                errors.push(
                  new YAMLSyntaxError(
                    this,
                    "Invalid escape sequence ".concat(src.substr(i - 1, 2)),
                  ),
                );
                str += "\\" + src[i];
            }
          } else if (ch === " " || ch === "	") {
            var wsStart = i;
            var next = src[i + 1];
            while (next === " " || next === "	") {
              i += 1;
              next = src[i + 1];
            }
            if (next !== "\n") {
              str += i > wsStart ? src.slice(wsStart, i + 1) : ch;
            }
          } else {
            str += ch;
          }
        }
        return errors.length > 0
          ? {
            errors,
            str,
          }
          : str;
      },
    },
    {
      key: "parseCharCode",
      value: function parseCharCode(offset, length, errors) {
        var src = this.context.src;
        var cc = src.substr(offset, length);
        var ok = cc.length === length && /^[0-9a-fA-F]+$/.test(cc);
        var code = ok ? parseInt(cc, 16) : NaN;
        if (isNaN(code)) {
          errors.push(
            new YAMLSyntaxError(
              this,
              "Invalid escape sequence ".concat(
                src.substr(offset - 2, length + 2),
              ),
            ),
          );
          return src.substr(offset - 2, length + 2);
        }
        return String.fromCodePoint(code);
      },
    },
    {
      key: "parse",
      value: function parse2(context, start) {
        this.context = context;
        var src = context.src;
        var offset = QuoteDouble2.endOfQuote(src, start + 1);
        this.valueRange = new Range1(start, offset);
        offset = Node1.endOfWhiteSpace(src, offset);
        offset = this.parseComment(offset);
        return offset;
      },
    },
  ], [
    {
      key: "endOfQuote",
      value: function endOfQuote(src, offset) {
        var ch = src[offset];
        while (ch && ch !== '"') {
          offset += ch === "\\" ? 2 : 1;
          ch = src[offset];
        }
        return offset + 1;
      },
    },
  ]);
  return QuoteDouble2;
}(Node1);
var QuoteSingle = function (_Node) {
  _inherits(QuoteSingle2, _Node);
  var _super = _createSuper(QuoteSingle2);
  function QuoteSingle2() {
    _classCallCheck(this, QuoteSingle2);
    return _super.apply(this, arguments);
  }
  _createClass(QuoteSingle2, [
    {
      key: "strValue",
      get: function get() {
        if (!this.valueRange || !this.context) return null;
        var errors = [];
        var _this$valueRange = this.valueRange,
          start = _this$valueRange.start,
          end = _this$valueRange.end;
        var _this$context = this.context,
          indent = _this$context.indent,
          src = _this$context.src;
        if (src[end - 1] !== "'") {
          errors.push(new YAMLSyntaxError(this, "Missing closing 'quote"));
        }
        var str = "";
        for (var i = start + 1; i < end - 1; ++i) {
          var ch = src[i];
          if (ch === "\n") {
            if (Node1.atDocumentBoundary(src, i + 1)) {
              errors.push(
                new YAMLSemanticError(
                  this,
                  "Document boundary indicators are not allowed within string values",
                ),
              );
            }
            var _Node$foldNewline = Node1.foldNewline(src, i, indent),
              fold = _Node$foldNewline.fold,
              offset = _Node$foldNewline.offset,
              error = _Node$foldNewline.error;
            str += fold;
            i = offset;
            if (error) {
              errors.push(
                new YAMLSemanticError(
                  this,
                  "Multi-line single-quoted string needs to be sufficiently indented",
                ),
              );
            }
          } else if (ch === "'") {
            str += ch;
            i += 1;
            if (src[i] !== "'") {
              errors.push(
                new YAMLSyntaxError(
                  this,
                  "Unescaped single quote? This should not happen.",
                ),
              );
            }
          } else if (ch === " " || ch === "	") {
            var wsStart = i;
            var next = src[i + 1];
            while (next === " " || next === "	") {
              i += 1;
              next = src[i + 1];
            }
            if (next !== "\n") {
              str += i > wsStart ? src.slice(wsStart, i + 1) : ch;
            }
          } else {
            str += ch;
          }
        }
        return errors.length > 0
          ? {
            errors,
            str,
          }
          : str;
      },
    },
    {
      key: "parse",
      value: function parse2(context, start) {
        this.context = context;
        var src = context.src;
        var offset = QuoteSingle2.endOfQuote(src, start + 1);
        this.valueRange = new Range1(start, offset);
        offset = Node1.endOfWhiteSpace(src, offset);
        offset = this.parseComment(offset);
        return offset;
      },
    },
  ], [
    {
      key: "endOfQuote",
      value: function endOfQuote(src, offset) {
        var ch = src[offset];
        while (ch) {
          if (ch === "'") {
            if (src[offset + 1] !== "'") break;
            ch = src[offset += 2];
          } else {
            ch = src[offset += 1];
          }
        }
        return offset + 1;
      },
    },
  ]);
  return QuoteSingle2;
}(Node1);
function createNewNode(type, props) {
  switch (type) {
    case Type.ALIAS:
      return new Alias1(type, props);
    case Type.BLOCK_FOLDED:
    case Type.BLOCK_LITERAL:
      return new BlockValue(type, props);
    case Type.FLOW_MAP:
    case Type.FLOW_SEQ:
      return new FlowCollection(type, props);
    case Type.MAP_KEY:
    case Type.MAP_VALUE:
    case Type.SEQ_ITEM:
      return new CollectionItem(type, props);
    case Type.COMMENT:
    case Type.PLAIN:
      return new PlainValue(type, props);
    case Type.QUOTE_DOUBLE:
      return new QuoteDouble(type, props);
    case Type.QUOTE_SINGLE:
      return new QuoteSingle(type, props);
    default:
      return null;
  }
}
var ParseContext = function () {
  function ParseContext2() {
    var _this = this;
    var orig = arguments.length > 0 && arguments[0] !== void 0
      ? arguments[0]
      : {};
    var _ref = arguments.length > 1 && arguments[1] !== void 0
        ? arguments[1]
        : {},
      atLineStart = _ref.atLineStart,
      inCollection = _ref.inCollection,
      inFlow = _ref.inFlow,
      indent = _ref.indent,
      lineStart = _ref.lineStart,
      parent = _ref.parent;
    _classCallCheck(this, ParseContext2);
    _defineProperty(this, "parseNode", function (overlay, start) {
      if (Node1.atDocumentBoundary(_this.src, start)) return null;
      var context = new ParseContext2(_this, overlay);
      var _context$parseProps = context.parseProps(start),
        props = _context$parseProps.props,
        type = _context$parseProps.type,
        valueStart = _context$parseProps.valueStart;
      var node = createNewNode(type, props);
      var offset = node.parse(context, valueStart);
      node.range = new Range1(start, offset);
      if (offset <= start) {
        node.error = new Error("Node#parse consumed no characters");
        node.error.parseEnd = offset;
        node.error.source = node;
        node.range.end = start + 1;
      }
      if (context.nodeStartsCollection(node)) {
        if (
          !node.error && !context.atLineStart &&
          context.parent.type === Type.DOCUMENT
        ) {
          node.error = new YAMLSyntaxError(
            node,
            "Block collection must not have preceding content here (e.g. directives-end indicator)",
          );
        }
        var collection = new Collection(node);
        offset = collection.parse(new ParseContext2(context), offset);
        collection.range = new Range1(start, offset);
        return collection;
      }
      return node;
    });
    this.atLineStart = atLineStart != null
      ? atLineStart
      : orig.atLineStart || false;
    this.inCollection = inCollection != null
      ? inCollection
      : orig.inCollection || false;
    this.inFlow = inFlow != null ? inFlow : orig.inFlow || false;
    this.indent = indent != null ? indent : orig.indent;
    this.lineStart = lineStart != null ? lineStart : orig.lineStart;
    this.parent = parent != null ? parent : orig.parent || {};
    this.root = orig.root;
    this.src = orig.src;
  }
  _createClass(ParseContext2, [
    {
      key: "nodeStartsCollection",
      value: function nodeStartsCollection(node) {
        var inCollection = this.inCollection,
          inFlow = this.inFlow,
          src = this.src;
        if (inCollection || inFlow) return false;
        if (node instanceof CollectionItem) return true;
        var offset = node.range.end;
        if (src[offset] === "\n" || src[offset - 1] === "\n") return false;
        offset = Node1.endOfWhiteSpace(src, offset);
        return src[offset] === ":";
      },
    },
    {
      key: "parseProps",
      value: function parseProps(offset) {
        var inFlow = this.inFlow, parent = this.parent, src = this.src;
        var props = [];
        var lineHasProps = false;
        offset = this.atLineStart
          ? Node1.endOfIndent(src, offset)
          : Node1.endOfWhiteSpace(src, offset);
        var ch = src[offset];
        while (
          ch === Char.ANCHOR || ch === Char.COMMENT || ch === Char.TAG ||
          ch === "\n"
        ) {
          if (ch === "\n") {
            var inEnd = offset;
            var lineStart = void 0;
            do {
              lineStart = inEnd + 1;
              inEnd = Node1.endOfIndent(src, lineStart);
            } while (src[inEnd] === "\n");
            var indentDiff = inEnd - (lineStart + this.indent);
            var noIndicatorAsIndent = parent.type === Type.SEQ_ITEM &&
              parent.context.atLineStart;
            if (
              src[inEnd] !== "#" &&
              !Node1.nextNodeIsIndented(
                src[inEnd],
                indentDiff,
                !noIndicatorAsIndent,
              )
            ) {
              break;
            }
            this.atLineStart = true;
            this.lineStart = lineStart;
            lineHasProps = false;
            offset = inEnd;
          } else if (ch === Char.COMMENT) {
            var end = Node1.endOfLine(src, offset + 1);
            props.push(new Range1(offset, end));
            offset = end;
          } else {
            var _end = Node1.endOfIdentifier(src, offset + 1);
            if (
              ch === Char.TAG && src[_end] === "," &&
              /^[a-zA-Z0-9-]+\.[a-zA-Z0-9-]+,\d\d\d\d(-\d\d){0,2}\/\S/.test(
                src.slice(offset + 1, _end + 13),
              )
            ) {
              _end = Node1.endOfIdentifier(src, _end + 5);
            }
            props.push(new Range1(offset, _end));
            lineHasProps = true;
            offset = Node1.endOfWhiteSpace(src, _end);
          }
          ch = src[offset];
        }
        if (
          lineHasProps && ch === ":" && Node1.atBlank(src, offset + 1, true)
        ) {
          offset -= 1;
        }
        var type = ParseContext2.parseType(src, offset, inFlow);
        return {
          props,
          type,
          valueStart: offset,
        };
      },
    },
  ], [
    {
      key: "parseType",
      value: function parseType(src, offset, inFlow) {
        switch (src[offset]) {
          case "*":
            return Type.ALIAS;
          case ">":
            return Type.BLOCK_FOLDED;
          case "|":
            return Type.BLOCK_LITERAL;
          case "{":
            return Type.FLOW_MAP;
          case "[":
            return Type.FLOW_SEQ;
          case "?":
            return !inFlow && Node1.atBlank(src, offset + 1, true)
              ? Type.MAP_KEY
              : Type.PLAIN;
          case ":":
            return !inFlow && Node1.atBlank(src, offset + 1, true)
              ? Type.MAP_VALUE
              : Type.PLAIN;
          case "-":
            return !inFlow && Node1.atBlank(src, offset + 1, true)
              ? Type.SEQ_ITEM
              : Type.PLAIN;
          case '"':
            return Type.QUOTE_DOUBLE;
          case "'":
            return Type.QUOTE_SINGLE;
          default:
            return Type.PLAIN;
        }
      },
    },
  ]);
  return ParseContext2;
}();
function parse2(src) {
  var cr = [];
  if (src.indexOf("\r") !== -1) {
    src = src.replace(/\r\n?/g, function (match, offset2) {
      if (match.length > 1) cr.push(offset2);
      return "\n";
    });
  }
  var documents = [];
  var offset = 0;
  do {
    var doc = new Document1();
    var context = new ParseContext({
      src,
    });
    offset = doc.parse(context, offset);
    documents.push(doc);
  } while (offset < src.length);
  documents.setOrigRanges = function () {
    if (cr.length === 0) return false;
    for (var i = 1; i < cr.length; ++i) {
      cr[i] -= i;
    }
    var crOffset = 0;
    for (var _i = 0; _i < documents.length; ++_i) {
      crOffset = documents[_i].setOrigRanges(cr, crOffset);
    }
    cr.splice(0, cr.length);
    return true;
  };
  documents.toString = function () {
    return documents.join("...\n");
  };
  return documents;
}
function addCommentBefore(str, indent, comment) {
  if (!comment) return str;
  var cc = comment.replace(/[\s\S]^/gm, "$&".concat(indent, "#"));
  return "#".concat(cc, "\n").concat(indent).concat(str);
}
function addComment(str, indent, comment) {
  return !comment
    ? str
    : comment.indexOf("\n") === -1
    ? "".concat(str, " #").concat(comment)
    : "".concat(str, "\n") +
      comment.replace(/^/gm, "".concat(indent || "", "#"));
}
var Node2 = function Node21() {
  _classCallCheck(this, Node21);
};
function toJSON(value, arg, ctx) {
  if (Array.isArray(value)) {
    return value.map(function (v, i) {
      return toJSON(v, String(i), ctx);
    });
  }
  if (value && typeof value.toJSON === "function") {
    var anchor = ctx && ctx.anchors && ctx.anchors.get(value);
    if (anchor) {
      ctx.onCreate = function (res2) {
        anchor.res = res2;
        delete ctx.onCreate;
      };
    }
    var res = value.toJSON(arg, ctx);
    if (anchor && ctx.onCreate) ctx.onCreate(res);
    return res;
  }
  if ((!ctx || !ctx.keep) && typeof value === "bigint") return Number(value);
  return value;
}
var Scalar = function (_Node) {
  _inherits(Scalar2, _Node);
  var _super = _createSuper(Scalar2);
  function Scalar2(value) {
    var _this;
    _classCallCheck(this, Scalar2);
    _this = _super.call(this);
    _this.value = value;
    return _this;
  }
  _createClass(Scalar2, [
    {
      key: "toJSON",
      value: function toJSON$1(arg, ctx) {
        return ctx && ctx.keep ? this.value : toJSON(this.value, arg, ctx);
      },
    },
    {
      key: "toString",
      value: function toString() {
        return String(this.value);
      },
    },
  ]);
  return Scalar2;
}(Node2);
function collectionFromPath(schema, path, value) {
  var v = value;
  for (var i = path.length - 1; i >= 0; --i) {
    var k = path[i];
    if (Number.isInteger(k) && k >= 0) {
      var a = [];
      a[k] = v;
      v = a;
    } else {
      var o = {};
      Object.defineProperty(o, k, {
        value: v,
        writable: true,
        enumerable: true,
        configurable: true,
      });
      v = o;
    }
  }
  return schema.createNode(v, false);
}
var isEmptyPath = function isEmptyPath2(path) {
  return path == null ||
    _typeof(path) === "object" && path[Symbol.iterator]().next().done;
};
var Collection1 = function (_Node) {
  _inherits(Collection2, _Node);
  var _super = _createSuper(Collection2);
  function Collection2(schema) {
    var _this;
    _classCallCheck(this, Collection2);
    _this = _super.call(this);
    _defineProperty(_assertThisInitialized(_this), "items", []);
    _this.schema = schema;
    return _this;
  }
  _createClass(Collection2, [
    {
      key: "addIn",
      value: function addIn(path, value) {
        if (isEmptyPath(path)) this.add(value);
        else {
          var _path = _toArray(path), key = _path[0], rest = _path.slice(1);
          var node = this.get(key, true);
          if (node instanceof Collection2) node.addIn(rest, value);
          else if (node === void 0 && this.schema) {
            this.set(key, collectionFromPath(this.schema, rest, value));
          } else {
            throw new Error(
              "Expected YAML collection at ".concat(key, ". Remaining path: ")
                .concat(rest),
            );
          }
        }
      },
    },
    {
      key: "deleteIn",
      value: function deleteIn(_ref) {
        var _ref2 = _toArray(_ref), key = _ref2[0], rest = _ref2.slice(1);
        if (rest.length === 0) return this.delete(key);
        var node = this.get(key, true);
        if (node instanceof Collection2) return node.deleteIn(rest);
        else {
          throw new Error(
            "Expected YAML collection at ".concat(key, ". Remaining path: ")
              .concat(rest),
          );
        }
      },
    },
    {
      key: "getIn",
      value: function getIn(_ref3, keepScalar) {
        var _ref4 = _toArray(_ref3), key = _ref4[0], rest = _ref4.slice(1);
        var node = this.get(key, true);
        if (rest.length === 0) {
          return !keepScalar && node instanceof Scalar ? node.value : node;
        } else {
          return node instanceof Collection2
            ? node.getIn(rest, keepScalar)
            : void 0;
        }
      },
    },
    {
      key: "hasAllNullValues",
      value: function hasAllNullValues() {
        return this.items.every(function (node) {
          if (!node || node.type !== "PAIR") return false;
          var n = node.value;
          return n == null ||
            n instanceof Scalar && n.value == null && !n.commentBefore &&
              !n.comment && !n.tag;
        });
      },
    },
    {
      key: "hasIn",
      value: function hasIn(_ref5) {
        var _ref6 = _toArray(_ref5), key = _ref6[0], rest = _ref6.slice(1);
        if (rest.length === 0) return this.has(key);
        var node = this.get(key, true);
        return node instanceof Collection2 ? node.hasIn(rest) : false;
      },
    },
    {
      key: "setIn",
      value: function setIn(_ref7, value) {
        var _ref8 = _toArray(_ref7), key = _ref8[0], rest = _ref8.slice(1);
        if (rest.length === 0) {
          this.set(key, value);
        } else {
          var node = this.get(key, true);
          if (node instanceof Collection2) node.setIn(rest, value);
          else if (node === void 0 && this.schema) {
            this.set(key, collectionFromPath(this.schema, rest, value));
          } else {
            throw new Error(
              "Expected YAML collection at ".concat(key, ". Remaining path: ")
                .concat(rest),
            );
          }
        }
      },
    },
    {
      key: "toJSON",
      value: function toJSON2() {
        return null;
      },
    },
    {
      key: "toString",
      value: function toString(ctx, _ref9, onComment, onChompKeep) {
        var _this2 = this;
        var blockItem = _ref9.blockItem,
          flowChars = _ref9.flowChars,
          isMap = _ref9.isMap,
          itemIndent = _ref9.itemIndent;
        var _ctx = ctx,
          indent = _ctx.indent,
          indentStep = _ctx.indentStep,
          stringify2 = _ctx.stringify;
        var inFlow = this.type === Type.FLOW_MAP ||
          this.type === Type.FLOW_SEQ || ctx.inFlow;
        if (inFlow) itemIndent += indentStep;
        var allNullValues = isMap && this.hasAllNullValues();
        ctx = Object.assign({}, ctx, {
          allNullValues,
          indent: itemIndent,
          inFlow,
          type: null,
        });
        var chompKeep = false;
        var hasItemWithNewLine = false;
        var nodes = this.items.reduce(function (nodes2, item, i) {
          var comment;
          if (item) {
            if (!chompKeep && item.spaceBefore) {
              nodes2.push({
                type: "comment",
                str: "",
              });
            }
            if (item.commentBefore) {
              item.commentBefore.match(/^.*$/gm).forEach(function (line) {
                nodes2.push({
                  type: "comment",
                  str: "#".concat(line),
                });
              });
            }
            if (item.comment) comment = item.comment;
            if (
              inFlow &&
              (!chompKeep && item.spaceBefore || item.commentBefore ||
                item.comment ||
                item.key && (item.key.commentBefore || item.key.comment) ||
                item.value && (item.value.commentBefore || item.value.comment))
            ) {
              hasItemWithNewLine = true;
            }
          }
          chompKeep = false;
          var str2 = stringify2(item, ctx, function () {
            return comment = null;
          }, function () {
            return chompKeep = true;
          });
          if (inFlow && !hasItemWithNewLine && str2.includes("\n")) {
            hasItemWithNewLine = true;
          }
          if (inFlow && i < _this2.items.length - 1) str2 += ",";
          str2 = addComment(str2, itemIndent, comment);
          if (chompKeep && (comment || inFlow)) chompKeep = false;
          nodes2.push({
            type: "item",
            str: str2,
          });
          return nodes2;
        }, []);
        var str;
        if (nodes.length === 0) {
          str = flowChars.start + flowChars.end;
        } else if (inFlow) {
          var start = flowChars.start, end = flowChars.end;
          var strings = nodes.map(function (n) {
            return n.str;
          });
          if (
            hasItemWithNewLine || strings.reduce(function (sum, str2) {
                return sum + str2.length + 2;
              }, 2) > Collection2.maxFlowStringSingleLineLength
          ) {
            str = start;
            var _iterator = _createForOfIteratorHelper(strings), _step;
            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                var s = _step.value;
                str += s
                  ? "\n".concat(indentStep).concat(indent).concat(s)
                  : "\n";
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }
            str += "\n".concat(indent).concat(end);
          } else {
            str = "".concat(start, " ").concat(strings.join(" "), " ").concat(
              end,
            );
          }
        } else {
          var _strings = nodes.map(blockItem);
          str = _strings.shift();
          var _iterator2 = _createForOfIteratorHelper(_strings), _step2;
          try {
            for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
              var _s = _step2.value;
              str += _s ? "\n".concat(indent).concat(_s) : "\n";
            }
          } catch (err) {
            _iterator2.e(err);
          } finally {
            _iterator2.f();
          }
        }
        if (this.comment) {
          str += "\n" + this.comment.replace(/^/gm, "".concat(indent, "#"));
          if (onComment) onComment();
        } else if (chompKeep && onChompKeep) onChompKeep();
        return str;
      },
    },
  ]);
  return Collection2;
}(Node2);
_defineProperty(Collection1, "maxFlowStringSingleLineLength", 60);
function asItemIndex(key) {
  var idx = key instanceof Scalar ? key.value : key;
  if (idx && typeof idx === "string") idx = Number(idx);
  return Number.isInteger(idx) && idx >= 0 ? idx : null;
}
var YAMLSeq = function (_Collection) {
  _inherits(YAMLSeq2, _Collection);
  var _super = _createSuper(YAMLSeq2);
  function YAMLSeq2() {
    _classCallCheck(this, YAMLSeq2);
    return _super.apply(this, arguments);
  }
  _createClass(YAMLSeq2, [
    {
      key: "add",
      value: function add(value) {
        this.items.push(value);
      },
    },
    {
      key: "delete",
      value: function _delete(key) {
        var idx = asItemIndex(key);
        if (typeof idx !== "number") return false;
        var del = this.items.splice(idx, 1);
        return del.length > 0;
      },
    },
    {
      key: "get",
      value: function get(key, keepScalar) {
        var idx = asItemIndex(key);
        if (typeof idx !== "number") return void 0;
        var it = this.items[idx];
        return !keepScalar && it instanceof Scalar ? it.value : it;
      },
    },
    {
      key: "has",
      value: function has(key) {
        var idx = asItemIndex(key);
        return typeof idx === "number" && idx < this.items.length;
      },
    },
    {
      key: "set",
      value: function set(key, value) {
        var idx = asItemIndex(key);
        if (typeof idx !== "number") {
          throw new Error("Expected a valid index, not ".concat(key, "."));
        }
        this.items[idx] = value;
      },
    },
    {
      key: "toJSON",
      value: function toJSON$1(_, ctx) {
        var seq = [];
        if (ctx && ctx.onCreate) ctx.onCreate(seq);
        var i = 0;
        var _iterator = _createForOfIteratorHelper(this.items), _step;
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var item = _step.value;
            seq.push(toJSON(item, String(i++), ctx));
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
        return seq;
      },
    },
    {
      key: "toString",
      value: function toString(ctx, onComment, onChompKeep) {
        if (!ctx) return JSON.stringify(this);
        return _get(_getPrototypeOf(YAMLSeq2.prototype), "toString", this).call(
          this,
          ctx,
          {
            blockItem: function blockItem(n) {
              return n.type === "comment" ? n.str : "- ".concat(n.str);
            },
            flowChars: {
              start: "[",
              end: "]",
            },
            isMap: false,
            itemIndent: (ctx.indent || "") + "  ",
          },
          onComment,
          onChompKeep,
        );
      },
    },
  ]);
  return YAMLSeq2;
}(Collection1);
var stringifyKey = function stringifyKey2(key, jsKey, ctx) {
  if (jsKey === null) return "";
  if (_typeof(jsKey) !== "object") return String(jsKey);
  if (key instanceof Node2 && ctx && ctx.doc) {
    return key.toString({
      anchors: Object.create(null),
      doc: ctx.doc,
      indent: "",
      indentStep: ctx.indentStep,
      inFlow: true,
      inStringifyKey: true,
      stringify: ctx.stringify,
    });
  }
  return JSON.stringify(jsKey);
};
var Pair = function (_Node) {
  _inherits(Pair2, _Node);
  var _super = _createSuper(Pair2);
  function Pair2(key) {
    var _this;
    var value = arguments.length > 1 && arguments[1] !== void 0
      ? arguments[1]
      : null;
    _classCallCheck(this, Pair2);
    _this = _super.call(this);
    _this.key = key;
    _this.value = value;
    _this.type = Pair2.Type.PAIR;
    return _this;
  }
  _createClass(Pair2, [
    {
      key: "commentBefore",
      get: function get() {
        return this.key instanceof Node2 ? this.key.commentBefore : void 0;
      },
      set: function set(cb) {
        if (this.key == null) this.key = new Scalar(null);
        if (this.key instanceof Node2) this.key.commentBefore = cb;
        else {
          var msg =
            "Pair.commentBefore is an alias for Pair.key.commentBefore. To set it, the key must be a Node.";
          throw new Error(msg);
        }
      },
    },
    {
      key: "addToJSMap",
      value: function addToJSMap(ctx, map) {
        var key = toJSON(this.key, "", ctx);
        if (map instanceof Map) {
          var value = toJSON(this.value, key, ctx);
          map.set(key, value);
        } else if (map instanceof Set) {
          map.add(key);
        } else {
          var stringKey = stringifyKey(this.key, key, ctx);
          var _value = toJSON(this.value, stringKey, ctx);
          if (stringKey in map) {
            Object.defineProperty(map, stringKey, {
              value: _value,
              writable: true,
              enumerable: true,
              configurable: true,
            });
          } else map[stringKey] = _value;
        }
        return map;
      },
    },
    {
      key: "toJSON",
      value: function toJSON2(_, ctx) {
        var pair = ctx && ctx.mapAsMap ? new Map() : {};
        return this.addToJSMap(ctx, pair);
      },
    },
    {
      key: "toString",
      value: function toString(ctx, onComment, onChompKeep) {
        if (!ctx || !ctx.doc) return JSON.stringify(this);
        var _ctx$doc$options = ctx.doc.options,
          indentSize = _ctx$doc$options.indent,
          indentSeq = _ctx$doc$options.indentSeq,
          simpleKeys = _ctx$doc$options.simpleKeys;
        var key = this.key, value = this.value;
        var keyComment = key instanceof Node2 && key.comment;
        if (simpleKeys) {
          if (keyComment) {
            throw new Error("With simple keys, key nodes cannot have comments");
          }
          if (key instanceof Collection1) {
            var msg =
              "With simple keys, collection cannot be used as a key value";
            throw new Error(msg);
          }
        }
        var explicitKey = !simpleKeys &&
          (!key || keyComment ||
            (key instanceof Node2
              ? key instanceof Collection1 || key.type === Type.BLOCK_FOLDED ||
                key.type === Type.BLOCK_LITERAL
              : _typeof(key) === "object"));
        var _ctx = ctx,
          doc = _ctx.doc,
          indent = _ctx.indent,
          indentStep = _ctx.indentStep,
          stringify2 = _ctx.stringify;
        ctx = Object.assign({}, ctx, {
          implicitKey: !explicitKey,
          indent: indent + indentStep,
        });
        var chompKeep = false;
        var str = stringify2(key, ctx, function () {
          return keyComment = null;
        }, function () {
          return chompKeep = true;
        });
        str = addComment(str, ctx.indent, keyComment);
        if (!explicitKey && str.length > 1024) {
          if (simpleKeys) {
            throw new Error(
              "With simple keys, single line scalar must not span more than 1024 characters",
            );
          }
          explicitKey = true;
        }
        if (ctx.allNullValues && !simpleKeys) {
          if (this.comment) {
            str = addComment(str, ctx.indent, this.comment);
            if (onComment) onComment();
          } else if (chompKeep && !keyComment && onChompKeep) onChompKeep();
          return ctx.inFlow && !explicitKey ? str : "? ".concat(str);
        }
        str = explicitKey
          ? "? ".concat(str, "\n").concat(indent, ":")
          : "".concat(str, ":");
        if (this.comment) {
          str = addComment(str, ctx.indent, this.comment);
          if (onComment) onComment();
        }
        var vcb = "";
        var valueComment = null;
        if (value instanceof Node2) {
          if (value.spaceBefore) vcb = "\n";
          if (value.commentBefore) {
            var cs = value.commentBefore.replace(
              /^/gm,
              "".concat(ctx.indent, "#"),
            );
            vcb += "\n".concat(cs);
          }
          valueComment = value.comment;
        } else if (value && _typeof(value) === "object") {
          value = doc.schema.createNode(value, true);
        }
        ctx.implicitKey = false;
        if (!explicitKey && !this.comment && value instanceof Scalar) {
          ctx.indentAtStart = str.length + 1;
        }
        chompKeep = false;
        if (
          !indentSeq && indentSize >= 2 && !ctx.inFlow && !explicitKey &&
          value instanceof YAMLSeq && value.type !== Type.FLOW_SEQ &&
          !value.tag && !doc.anchors.getName(value)
        ) {
          ctx.indent = ctx.indent.substr(2);
        }
        var valueStr = stringify2(value, ctx, function () {
          return valueComment = null;
        }, function () {
          return chompKeep = true;
        });
        var ws = " ";
        if (vcb || this.comment) {
          ws = "".concat(vcb, "\n").concat(ctx.indent);
        } else if (!explicitKey && value instanceof Collection1) {
          var flow = valueStr[0] === "[" || valueStr[0] === "{";
          if (!flow || valueStr.includes("\n")) ws = "\n".concat(ctx.indent);
        } else if (valueStr[0] === "\n") ws = "";
        if (chompKeep && !valueComment && onChompKeep) onChompKeep();
        return addComment(str + ws + valueStr, ctx.indent, valueComment);
      },
    },
  ]);
  return Pair2;
}(Node2);
_defineProperty(Pair, "Type", {
  PAIR: "PAIR",
  MERGE_PAIR: "MERGE_PAIR",
});
var getAliasCount = function getAliasCount2(node, anchors) {
  if (node instanceof Alias2) {
    var anchor = anchors.get(node.source);
    return anchor.count * anchor.aliasCount;
  } else if (node instanceof Collection1) {
    var count = 0;
    var _iterator = _createForOfIteratorHelper(node.items), _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var item = _step.value;
        var c = getAliasCount2(item, anchors);
        if (c > count) count = c;
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
    return count;
  } else if (node instanceof Pair) {
    var kc = getAliasCount2(node.key, anchors);
    var vc = getAliasCount2(node.value, anchors);
    return Math.max(kc, vc);
  }
  return 1;
};
var Alias2 = function (_Node) {
  _inherits(Alias22, _Node);
  var _super = _createSuper(Alias22);
  function Alias22(source) {
    var _this;
    _classCallCheck(this, Alias22);
    _this = _super.call(this);
    _this.source = source;
    _this.type = Type.ALIAS;
    return _this;
  }
  _createClass(Alias22, [
    {
      key: "tag",
      set: function set(t) {
        throw new Error("Alias nodes cannot have tags");
      },
    },
    {
      key: "toJSON",
      value: function toJSON$1(arg, ctx) {
        if (!ctx) return toJSON(this.source, arg, ctx);
        var anchors = ctx.anchors, maxAliasCount = ctx.maxAliasCount;
        var anchor = anchors.get(this.source);
        if (!anchor || anchor.res === void 0) {
          var msg = "This should not happen: Alias anchor was not resolved?";
          if (this.cstNode) throw new YAMLReferenceError(this.cstNode, msg);
          else throw new ReferenceError(msg);
        }
        if (maxAliasCount >= 0) {
          anchor.count += 1;
          if (anchor.aliasCount === 0) {
            anchor.aliasCount = getAliasCount(this.source, anchors);
          }
          if (anchor.count * anchor.aliasCount > maxAliasCount) {
            var _msg =
              "Excessive alias count indicates a resource exhaustion attack";
            if (this.cstNode) throw new YAMLReferenceError(this.cstNode, _msg);
            else throw new ReferenceError(_msg);
          }
        }
        return anchor.res;
      },
    },
    {
      key: "toString",
      value: function toString(ctx) {
        return Alias22.stringify(this, ctx);
      },
    },
  ], [
    {
      key: "stringify",
      value: function stringify2(_ref, _ref2) {
        var range = _ref.range, source = _ref.source;
        var anchors = _ref2.anchors,
          doc = _ref2.doc,
          implicitKey = _ref2.implicitKey,
          inStringifyKey = _ref2.inStringifyKey;
        var anchor = Object.keys(anchors).find(function (a) {
          return anchors[a] === source;
        });
        if (!anchor && inStringifyKey) {
          anchor = doc.anchors.getName(source) || doc.anchors.newName();
        }
        if (anchor) return "*".concat(anchor).concat(implicitKey ? " " : "");
        var msg = doc.anchors.getName(source)
          ? "Alias node must be after source node"
          : "Source node not found for alias node";
        throw new Error("".concat(msg, " [").concat(range, "]"));
      },
    },
  ]);
  return Alias22;
}(Node2);
_defineProperty(Alias2, "default", true);
function findPair(items, key) {
  var k = key instanceof Scalar ? key.value : key;
  var _iterator = _createForOfIteratorHelper(items), _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var it = _step.value;
      if (it instanceof Pair) {
        if (it.key === key || it.key === k) return it;
        if (it.key && it.key.value === k) return it;
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  return void 0;
}
var YAMLMap = function (_Collection) {
  _inherits(YAMLMap2, _Collection);
  var _super = _createSuper(YAMLMap2);
  function YAMLMap2() {
    _classCallCheck(this, YAMLMap2);
    return _super.apply(this, arguments);
  }
  _createClass(YAMLMap2, [
    {
      key: "add",
      value: function add(pair, overwrite) {
        if (!pair) pair = new Pair(pair);
        else if (!(pair instanceof Pair)) {
          pair = new Pair(pair.key || pair, pair.value);
        }
        var prev = findPair(this.items, pair.key);
        var sortEntries = this.schema && this.schema.sortMapEntries;
        if (prev) {
          if (overwrite) prev.value = pair.value;
          else throw new Error("Key ".concat(pair.key, " already set"));
        } else if (sortEntries) {
          var i = this.items.findIndex(function (item) {
            return sortEntries(pair, item) < 0;
          });
          if (i === -1) this.items.push(pair);
          else this.items.splice(i, 0, pair);
        } else {
          this.items.push(pair);
        }
      },
    },
    {
      key: "delete",
      value: function _delete(key) {
        var it = findPair(this.items, key);
        if (!it) return false;
        var del = this.items.splice(this.items.indexOf(it), 1);
        return del.length > 0;
      },
    },
    {
      key: "get",
      value: function get(key, keepScalar) {
        var it = findPair(this.items, key);
        var node = it && it.value;
        return !keepScalar && node instanceof Scalar ? node.value : node;
      },
    },
    {
      key: "has",
      value: function has(key) {
        return !!findPair(this.items, key);
      },
    },
    {
      key: "set",
      value: function set(key, value) {
        this.add(new Pair(key, value), true);
      },
    },
    {
      key: "toJSON",
      value: function toJSON2(_, ctx, Type2) {
        var map = Type2 ? new Type2() : ctx && ctx.mapAsMap ? new Map() : {};
        if (ctx && ctx.onCreate) ctx.onCreate(map);
        var _iterator2 = _createForOfIteratorHelper(this.items), _step2;
        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var item = _step2.value;
            item.addToJSMap(ctx, map);
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }
        return map;
      },
    },
    {
      key: "toString",
      value: function toString(ctx, onComment, onChompKeep) {
        if (!ctx) return JSON.stringify(this);
        var _iterator3 = _createForOfIteratorHelper(this.items), _step3;
        try {
          for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
            var item = _step3.value;
            if (!(item instanceof Pair)) {
              throw new Error(
                "Map items must all be pairs; found ".concat(
                  JSON.stringify(item),
                  " instead",
                ),
              );
            }
          }
        } catch (err) {
          _iterator3.e(err);
        } finally {
          _iterator3.f();
        }
        return _get(_getPrototypeOf(YAMLMap2.prototype), "toString", this).call(
          this,
          ctx,
          {
            blockItem: function blockItem(n) {
              return n.str;
            },
            flowChars: {
              start: "{",
              end: "}",
            },
            isMap: true,
            itemIndent: ctx.indent || "",
          },
          onComment,
          onChompKeep,
        );
      },
    },
  ]);
  return YAMLMap2;
}(Collection1);
var MERGE_KEY = "<<";
var Merge = function (_Pair) {
  _inherits(Merge2, _Pair);
  var _super = _createSuper(Merge2);
  function Merge2(pair) {
    var _this;
    _classCallCheck(this, Merge2);
    if (pair instanceof Pair) {
      var seq = pair.value;
      if (!(seq instanceof YAMLSeq)) {
        seq = new YAMLSeq();
        seq.items.push(pair.value);
        seq.range = pair.value.range;
      }
      _this = _super.call(this, pair.key, seq);
      _this.range = pair.range;
    } else {
      _this = _super.call(this, new Scalar(MERGE_KEY), new YAMLSeq());
    }
    _this.type = Pair.Type.MERGE_PAIR;
    return _possibleConstructorReturn(_this);
  }
  _createClass(Merge2, [
    {
      key: "addToJSMap",
      value: function addToJSMap(ctx, map) {
        var _iterator = _createForOfIteratorHelper(this.value.items), _step;
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var source = _step.value.source;
            if (!(source instanceof YAMLMap)) {
              throw new Error("Merge sources must be maps");
            }
            var srcMap = source.toJSON(null, ctx, Map);
            var _iterator2 = _createForOfIteratorHelper(srcMap), _step2;
            try {
              for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                var _step2$value = _slicedToArray(_step2.value, 2),
                  key = _step2$value[0],
                  value = _step2$value[1];
                if (map instanceof Map) {
                  if (!map.has(key)) map.set(key, value);
                } else if (map instanceof Set) {
                  map.add(key);
                } else if (!Object.prototype.hasOwnProperty.call(map, key)) {
                  Object.defineProperty(map, key, {
                    value,
                    writable: true,
                    enumerable: true,
                    configurable: true,
                  });
                }
              }
            } catch (err) {
              _iterator2.e(err);
            } finally {
              _iterator2.f();
            }
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
        return map;
      },
    },
    {
      key: "toString",
      value: function toString(ctx, onComment) {
        var seq = this.value;
        if (seq.items.length > 1) {
          return _get(_getPrototypeOf(Merge2.prototype), "toString", this).call(
            this,
            ctx,
            onComment,
          );
        }
        this.value = seq.items[0];
        var str = _get(_getPrototypeOf(Merge2.prototype), "toString", this)
          .call(this, ctx, onComment);
        this.value = seq;
        return str;
      },
    },
  ]);
  return Merge2;
}(Pair);
var binaryOptions = {
  defaultType: Type.BLOCK_LITERAL,
  lineWidth: 76,
};
var boolOptions = {
  trueStr: "true",
  falseStr: "false",
};
var intOptions = {
  asBigInt: false,
};
var nullOptions = {
  nullStr: "null",
};
var strOptions = {
  defaultType: Type.PLAIN,
  doubleQuoted: {
    jsonEncoding: false,
    minMultiLineLength: 40,
  },
  fold: {
    lineWidth: 80,
    minContentWidth: 20,
  },
};
function resolveScalar(str, tags, scalarFallback) {
  var _iterator = _createForOfIteratorHelper(tags), _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var _step$value = _step.value,
        format = _step$value.format,
        test = _step$value.test,
        resolve = _step$value.resolve;
      if (test) {
        var match = str.match(test);
        if (match) {
          var res = resolve.apply(null, match);
          if (!(res instanceof Scalar)) res = new Scalar(res);
          if (format) res.format = format;
          return res;
        }
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  if (scalarFallback) str = scalarFallback(str);
  return new Scalar(str);
}
var FOLD_FLOW = "flow";
var FOLD_BLOCK = "block";
var FOLD_QUOTED = "quoted";
var consumeMoreIndentedLines = function consumeMoreIndentedLines2(text, i) {
  var ch = text[i + 1];
  while (ch === " " || ch === "	") {
    do {
      ch = text[i += 1];
    } while (ch && ch !== "\n");
    ch = text[i + 1];
  }
  return i;
};
function foldFlowLines(text, indent, mode, _ref) {
  var indentAtStart = _ref.indentAtStart,
    _ref$lineWidth = _ref.lineWidth,
    lineWidth = _ref$lineWidth === void 0 ? 80 : _ref$lineWidth,
    _ref$minContentWidth = _ref.minContentWidth,
    minContentWidth = _ref$minContentWidth === void 0
      ? 20
      : _ref$minContentWidth,
    onFold = _ref.onFold,
    onOverflow = _ref.onOverflow;
  if (!lineWidth || lineWidth < 0) return text;
  var endStep = Math.max(1 + minContentWidth, 1 + lineWidth - indent.length);
  if (text.length <= endStep) return text;
  var folds = [];
  var escapedFolds = {};
  var end = lineWidth - indent.length;
  if (typeof indentAtStart === "number") {
    if (indentAtStart > lineWidth - Math.max(2, minContentWidth)) folds.push(0);
    else end = lineWidth - indentAtStart;
  }
  var split = void 0;
  var prev = void 0;
  var overflow = false;
  var i = -1;
  var escStart = -1;
  var escEnd = -1;
  if (mode === FOLD_BLOCK) {
    i = consumeMoreIndentedLines(text, i);
    if (i !== -1) end = i + endStep;
  }
  for (var ch; ch = text[i += 1];) {
    if (mode === FOLD_QUOTED && ch === "\\") {
      escStart = i;
      switch (text[i + 1]) {
        case "x":
          i += 3;
          break;
        case "u":
          i += 5;
          break;
        case "U":
          i += 9;
          break;
        default:
          i += 1;
      }
      escEnd = i;
    }
    if (ch === "\n") {
      if (mode === FOLD_BLOCK) i = consumeMoreIndentedLines(text, i);
      end = i + endStep;
      split = void 0;
    } else {
      if (
        ch === " " && prev && prev !== " " && prev !== "\n" && prev !== "	"
      ) {
        var next = text[i + 1];
        if (next && next !== " " && next !== "\n" && next !== "	") split = i;
      }
      if (i >= end) {
        if (split) {
          folds.push(split);
          end = split + endStep;
          split = void 0;
        } else if (mode === FOLD_QUOTED) {
          while (prev === " " || prev === "	") {
            prev = ch;
            ch = text[i += 1];
            overflow = true;
          }
          var j = i > escEnd + 1 ? i - 2 : escStart - 1;
          if (escapedFolds[j]) return text;
          folds.push(j);
          escapedFolds[j] = true;
          end = j + endStep;
          split = void 0;
        } else {
          overflow = true;
        }
      }
    }
    prev = ch;
  }
  if (overflow && onOverflow) onOverflow();
  if (folds.length === 0) return text;
  if (onFold) onFold();
  var res = text.slice(0, folds[0]);
  for (var _i = 0; _i < folds.length; ++_i) {
    var fold = folds[_i];
    var _end = folds[_i + 1] || text.length;
    if (fold === 0) res = "\n".concat(indent).concat(text.slice(0, _end));
    else {
      if (mode === FOLD_QUOTED && escapedFolds[fold]) {
        res += "".concat(text[fold], "\\");
      }
      res += "\n".concat(indent).concat(text.slice(fold + 1, _end));
    }
  }
  return res;
}
var getFoldOptions = function getFoldOptions2(_ref) {
  var indentAtStart = _ref.indentAtStart;
  return indentAtStart
    ? Object.assign({
      indentAtStart,
    }, strOptions.fold)
    : strOptions.fold;
};
var containsDocumentMarker = function containsDocumentMarker2(str) {
  return /^(%|---|\.\.\.)/m.test(str);
};
function lineLengthOverLimit(str, lineWidth, indentLength) {
  if (!lineWidth || lineWidth < 0) return false;
  var limit = lineWidth - indentLength;
  var strLen = str.length;
  if (strLen <= limit) return false;
  for (var i = 0, start = 0; i < strLen; ++i) {
    if (str[i] === "\n") {
      if (i - start > limit) return true;
      start = i + 1;
      if (strLen - start <= limit) return false;
    }
  }
  return true;
}
function doubleQuotedString(value, ctx) {
  var implicitKey = ctx.implicitKey;
  var _strOptions$doubleQuo = strOptions.doubleQuoted,
    jsonEncoding = _strOptions$doubleQuo.jsonEncoding,
    minMultiLineLength = _strOptions$doubleQuo.minMultiLineLength;
  var json = JSON.stringify(value);
  if (jsonEncoding) return json;
  var indent = ctx.indent || (containsDocumentMarker(value) ? "  " : "");
  var str = "";
  var start = 0;
  for (var i = 0, ch = json[i]; ch; ch = json[++i]) {
    if (ch === " " && json[i + 1] === "\\" && json[i + 2] === "n") {
      str += json.slice(start, i) + "\\ ";
      i += 1;
      start = i;
      ch = "\\";
    }
    if (ch === "\\") {
      switch (json[i + 1]) {
        case "u":
          {
            str += json.slice(start, i);
            var code = json.substr(i + 2, 4);
            switch (code) {
              case "0000":
                str += "\\0";
                break;
              case "0007":
                str += "\\a";
                break;
              case "000b":
                str += "\\v";
                break;
              case "001b":
                str += "\\e";
                break;
              case "0085":
                str += "\\N";
                break;
              case "00a0":
                str += "\\_";
                break;
              case "2028":
                str += "\\L";
                break;
              case "2029":
                str += "\\P";
                break;
              default:
                if (code.substr(0, 2) === "00") str += "\\x" + code.substr(2);
                else str += json.substr(i, 6);
            }
            i += 5;
            start = i + 1;
          }
          break;
        case "n":
          if (
            implicitKey || json[i + 2] === '"' ||
            json.length < minMultiLineLength
          ) {
            i += 1;
          } else {
            str += json.slice(start, i) + "\n\n";
            while (
              json[i + 2] === "\\" && json[i + 3] === "n" && json[i + 4] !== '"'
            ) {
              str += "\n";
              i += 2;
            }
            str += indent;
            if (json[i + 2] === " ") str += "\\";
            i += 1;
            start = i + 1;
          }
          break;
        default:
          i += 1;
      }
    }
  }
  str = start ? str + json.slice(start) : json;
  return implicitKey
    ? str
    : foldFlowLines(str, indent, FOLD_QUOTED, getFoldOptions(ctx));
}
function singleQuotedString(value, ctx) {
  if (ctx.implicitKey) {
    if (/\n/.test(value)) return doubleQuotedString(value, ctx);
  } else {
    if (/[ \t]\n|\n[ \t]/.test(value)) return doubleQuotedString(value, ctx);
  }
  var indent = ctx.indent || (containsDocumentMarker(value) ? "  " : "");
  var res = "'" +
    value.replace(/'/g, "''").replace(/\n+/g, "$&\n".concat(indent)) + "'";
  return ctx.implicitKey
    ? res
    : foldFlowLines(res, indent, FOLD_FLOW, getFoldOptions(ctx));
}
function blockString(_ref2, ctx, onComment, onChompKeep) {
  var comment = _ref2.comment, type = _ref2.type, value = _ref2.value;
  if (/\n[\t ]+$/.test(value) || /^\s*$/.test(value)) {
    return doubleQuotedString(value, ctx);
  }
  var indent = ctx.indent ||
    (ctx.forceBlockIndent || containsDocumentMarker(value) ? "  " : "");
  var indentSize = indent ? "2" : "1";
  var literal = type === Type.BLOCK_FOLDED
    ? false
    : type === Type.BLOCK_LITERAL
    ? true
    : !lineLengthOverLimit(value, strOptions.fold.lineWidth, indent.length);
  var header = literal ? "|" : ">";
  if (!value) return header + "\n";
  var wsStart = "";
  var wsEnd = "";
  value = value.replace(/[\n\t ]*$/, function (ws) {
    var n = ws.indexOf("\n");
    if (n === -1) {
      header += "-";
    } else if (value === ws || n !== ws.length - 1) {
      header += "+";
      if (onChompKeep) onChompKeep();
    }
    wsEnd = ws.replace(/\n$/, "");
    return "";
  }).replace(/^[\n ]*/, function (ws) {
    if (ws.indexOf(" ") !== -1) header += indentSize;
    var m = ws.match(/ +$/);
    if (m) {
      wsStart = ws.slice(0, -m[0].length);
      return m[0];
    } else {
      wsStart = ws;
      return "";
    }
  });
  if (wsEnd) wsEnd = wsEnd.replace(/\n+(?!\n|$)/g, "$&".concat(indent));
  if (wsStart) wsStart = wsStart.replace(/\n+/g, "$&".concat(indent));
  if (comment) {
    header += " #" + comment.replace(/ ?[\r\n]+/g, " ");
    if (onComment) onComment();
  }
  if (!value) {
    return "".concat(header).concat(indentSize, "\n").concat(indent).concat(
      wsEnd,
    );
  }
  if (literal) {
    value = value.replace(/\n+/g, "$&".concat(indent));
    return "".concat(header, "\n").concat(indent).concat(wsStart).concat(value)
      .concat(wsEnd);
  }
  value = value.replace(/\n+/g, "\n$&").replace(
    /(?:^|\n)([\t ].*)(?:([\n\t ]*)\n(?![\n\t ]))?/g,
    "$1$2",
  ).replace(/\n+/g, "$&".concat(indent));
  var body = foldFlowLines(
    "".concat(wsStart).concat(value).concat(wsEnd),
    indent,
    FOLD_BLOCK,
    strOptions.fold,
  );
  return "".concat(header, "\n").concat(indent).concat(body);
}
function plainString(item, ctx, onComment, onChompKeep) {
  var comment = item.comment, type = item.type, value = item.value;
  var actualString = ctx.actualString,
    implicitKey = ctx.implicitKey,
    indent = ctx.indent,
    inFlow = ctx.inFlow;
  if (
    implicitKey && /[\n[\]{},]/.test(value) || inFlow && /[[\]{},]/.test(value)
  ) {
    return doubleQuotedString(value, ctx);
  }
  if (
    !value ||
    /^[\n\t ,[\]{}#&*!|>'"%@`]|^[?-]$|^[?-][ \t]|[\n:][ \t]|[ \t]\n|[\n\t ]#|[\n\t :]$/
      .test(value)
  ) {
    return implicitKey || inFlow || value.indexOf("\n") === -1
      ? value.indexOf('"') !== -1 && value.indexOf("'") === -1
        ? singleQuotedString(value, ctx)
        : doubleQuotedString(value, ctx)
      : blockString(item, ctx, onComment, onChompKeep);
  }
  if (
    !implicitKey && !inFlow && type !== Type.PLAIN && value.indexOf("\n") !== -1
  ) {
    return blockString(item, ctx, onComment, onChompKeep);
  }
  if (indent === "" && containsDocumentMarker(value)) {
    ctx.forceBlockIndent = true;
    return blockString(item, ctx, onComment, onChompKeep);
  }
  var str = value.replace(/\n+/g, "$&\n".concat(indent));
  if (actualString) {
    var tags = ctx.doc.schema.tags;
    var resolved = resolveScalar(str, tags, tags.scalarFallback).value;
    if (typeof resolved !== "string") return doubleQuotedString(value, ctx);
  }
  var body = implicitKey
    ? str
    : foldFlowLines(str, indent, FOLD_FLOW, getFoldOptions(ctx));
  if (
    comment && !inFlow &&
    (body.indexOf("\n") !== -1 || comment.indexOf("\n") !== -1)
  ) {
    if (onComment) onComment();
    return addCommentBefore(body, indent, comment);
  }
  return body;
}
function stringifyString(item, ctx, onComment, onChompKeep) {
  var defaultType = strOptions.defaultType;
  var implicitKey = ctx.implicitKey, inFlow = ctx.inFlow;
  var _item = item, type = _item.type, value = _item.value;
  if (typeof value !== "string") {
    value = String(value);
    item = Object.assign({}, item, {
      value,
    });
  }
  var _stringify = function _stringify2(_type) {
    switch (_type) {
      case Type.BLOCK_FOLDED:
      case Type.BLOCK_LITERAL:
        return blockString(item, ctx, onComment, onChompKeep);
      case Type.QUOTE_DOUBLE:
        return doubleQuotedString(value, ctx);
      case Type.QUOTE_SINGLE:
        return singleQuotedString(value, ctx);
      case Type.PLAIN:
        return plainString(item, ctx, onComment, onChompKeep);
      default:
        return null;
    }
  };
  if (
    type !== Type.QUOTE_DOUBLE && /[\x00-\x08\x0b-\x1f\x7f-\x9f]/.test(value)
  ) {
    type = Type.QUOTE_DOUBLE;
  } else if (
    (implicitKey || inFlow) &&
    (type === Type.BLOCK_FOLDED || type === Type.BLOCK_LITERAL)
  ) {
    type = Type.QUOTE_DOUBLE;
  }
  var res = _stringify(type);
  if (res === null) {
    res = _stringify(defaultType);
    if (res === null) {
      throw new Error("Unsupported default string type ".concat(defaultType));
    }
  }
  return res;
}
function stringifyNumber(_ref) {
  var format = _ref.format,
    minFractionDigits = _ref.minFractionDigits,
    tag = _ref.tag,
    value = _ref.value;
  if (typeof value === "bigint") return String(value);
  if (!isFinite(value)) {
    return isNaN(value) ? ".nan" : value < 0 ? "-.inf" : ".inf";
  }
  var n = JSON.stringify(value);
  if (
    !format && minFractionDigits &&
    (!tag || tag === "tag:yaml.org,2002:float") && /^\d/.test(n)
  ) {
    var i = n.indexOf(".");
    if (i < 0) {
      i = n.length;
      n += ".";
    }
    var d = minFractionDigits - (n.length - i - 1);
    while ((d--) > 0) {
      n += "0";
    }
  }
  return n;
}
function checkFlowCollectionEnd(errors, cst) {
  var __char, name;
  switch (cst.type) {
    case Type.FLOW_MAP:
      __char = "}";
      name = "flow map";
      break;
    case Type.FLOW_SEQ:
      __char = "]";
      name = "flow sequence";
      break;
    default:
      errors.push(new YAMLSemanticError(cst, "Not a flow collection!?"));
      return;
  }
  var lastItem;
  for (var i = cst.items.length - 1; i >= 0; --i) {
    var item = cst.items[i];
    if (!item || item.type !== Type.COMMENT) {
      lastItem = item;
      break;
    }
  }
  if (lastItem && lastItem.char !== __char) {
    var msg = "Expected ".concat(name, " to end with ").concat(__char);
    var err;
    if (typeof lastItem.offset === "number") {
      err = new YAMLSemanticError(cst, msg);
      err.offset = lastItem.offset + 1;
    } else {
      err = new YAMLSemanticError(lastItem, msg);
      if (lastItem.range && lastItem.range.end) {
        err.offset = lastItem.range.end - lastItem.range.start;
      }
    }
    errors.push(err);
  }
}
function checkFlowCommentSpace(errors, comment) {
  var prev = comment.context.src[comment.range.start - 1];
  if (prev !== "\n" && prev !== "	" && prev !== " ") {
    var msg =
      "Comments must be separated from other tokens by white space characters";
    errors.push(new YAMLSemanticError(comment, msg));
  }
}
function getLongKeyError(source, key) {
  var sk = String(key);
  var k = sk.substr(0, 8) + "..." + sk.substr(-8);
  return new YAMLSemanticError(source, 'The "'.concat(k, '" key is too long'));
}
function resolveComments(collection, comments) {
  var _iterator = _createForOfIteratorHelper(comments), _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var _step$value = _step.value,
        afterKey = _step$value.afterKey,
        before = _step$value.before,
        comment = _step$value.comment;
      var item = collection.items[before];
      if (!item) {
        if (comment !== void 0) {
          if (collection.comment) collection.comment += "\n" + comment;
          else collection.comment = comment;
        }
      } else {
        if (afterKey && item.value) item = item.value;
        if (comment === void 0) {
          if (afterKey || !item.commentBefore) item.spaceBefore = true;
        } else {
          if (item.commentBefore) item.commentBefore += "\n" + comment;
          else item.commentBefore = comment;
        }
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
}
function resolveString(doc, node) {
  var res = node.strValue;
  if (!res) return "";
  if (typeof res === "string") return res;
  res.errors.forEach(function (error) {
    if (!error.source) error.source = node;
    doc.errors.push(error);
  });
  return res.str;
}
function resolveTagHandle(doc, node) {
  var _node$tag = node.tag,
    handle = _node$tag.handle,
    suffix = _node$tag.suffix;
  var prefix = doc.tagPrefixes.find(function (p) {
    return p.handle === handle;
  });
  if (!prefix) {
    var dtp = doc.getDefaults().tagPrefixes;
    if (dtp) {
      prefix = dtp.find(function (p) {
        return p.handle === handle;
      });
    }
    if (!prefix) {
      throw new YAMLSemanticError(
        node,
        "The ".concat(
          handle,
          " tag handle is non-default and was not declared.",
        ),
      );
    }
  }
  if (!suffix) {
    throw new YAMLSemanticError(
      node,
      "The ".concat(handle, " tag has no suffix."),
    );
  }
  if (handle === "!" && (doc.version || doc.options.version) === "1.0") {
    if (suffix[0] === "^") {
      doc.warnings.push(
        new YAMLWarning(node, "YAML 1.0 ^ tag expansion is not supported"),
      );
      return suffix;
    }
    if (/[:/]/.test(suffix)) {
      var vocab = suffix.match(/^([a-z0-9-]+)\/(.*)/i);
      return vocab
        ? "tag:".concat(vocab[1], ".yaml.org,2002:").concat(vocab[2])
        : "tag:".concat(suffix);
    }
  }
  return prefix.prefix + decodeURIComponent(suffix);
}
function resolveTagName(doc, node) {
  var tag = node.tag, type = node.type;
  var nonSpecific = false;
  if (tag) {
    var handle = tag.handle, suffix = tag.suffix, verbatim = tag.verbatim;
    if (verbatim) {
      if (verbatim !== "!" && verbatim !== "!!") return verbatim;
      var msg = "Verbatim tags aren't resolved, so ".concat(
        verbatim,
        " is invalid.",
      );
      doc.errors.push(new YAMLSemanticError(node, msg));
    } else if (handle === "!" && !suffix) {
      nonSpecific = true;
    } else {
      try {
        return resolveTagHandle(doc, node);
      } catch (error) {
        doc.errors.push(error);
      }
    }
  }
  switch (type) {
    case Type.BLOCK_FOLDED:
    case Type.BLOCK_LITERAL:
    case Type.QUOTE_DOUBLE:
    case Type.QUOTE_SINGLE:
      return defaultTags.STR;
    case Type.FLOW_MAP:
    case Type.MAP:
      return defaultTags.MAP;
    case Type.FLOW_SEQ:
    case Type.SEQ:
      return defaultTags.SEQ;
    case Type.PLAIN:
      return nonSpecific ? defaultTags.STR : null;
    default:
      return null;
  }
}
function resolveByTagName(doc, node, tagName) {
  var tags = doc.schema.tags;
  var matchWithTest = [];
  var _iterator = _createForOfIteratorHelper(tags), _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var tag = _step.value;
      if (tag.tag === tagName) {
        if (tag.test) matchWithTest.push(tag);
        else {
          var res = tag.resolve(doc, node);
          return res instanceof Collection1 ? res : new Scalar(res);
        }
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  var str = resolveString(doc, node);
  if (typeof str === "string" && matchWithTest.length > 0) {
    return resolveScalar(str, matchWithTest, tags.scalarFallback);
  }
  return null;
}
function getFallbackTagName(_ref) {
  var type = _ref.type;
  switch (type) {
    case Type.FLOW_MAP:
    case Type.MAP:
      return defaultTags.MAP;
    case Type.FLOW_SEQ:
    case Type.SEQ:
      return defaultTags.SEQ;
    default:
      return defaultTags.STR;
  }
}
function resolveTag(doc, node, tagName) {
  try {
    var res = resolveByTagName(doc, node, tagName);
    if (res) {
      if (tagName && node.tag) res.tag = tagName;
      return res;
    }
  } catch (error) {
    if (!error.source) error.source = node;
    doc.errors.push(error);
    return null;
  }
  try {
    var fallback = getFallbackTagName(node);
    if (!fallback) {
      throw new Error("The tag ".concat(tagName, " is unavailable"));
    }
    var msg = "The tag ".concat(tagName, " is unavailable, falling back to ")
      .concat(fallback);
    doc.warnings.push(new YAMLWarning(node, msg));
    var _res = resolveByTagName(doc, node, fallback);
    _res.tag = tagName;
    return _res;
  } catch (error) {
    var refError = new YAMLReferenceError(node, error.message);
    refError.stack = error.stack;
    doc.errors.push(refError);
    return null;
  }
}
var isCollectionItem = function isCollectionItem2(node) {
  if (!node) return false;
  var type = node.type;
  return type === Type.MAP_KEY || type === Type.MAP_VALUE ||
    type === Type.SEQ_ITEM;
};
function resolveNodeProps(errors, node) {
  var comments = {
    before: [],
    after: [],
  };
  var hasAnchor = false;
  var hasTag = false;
  var props = isCollectionItem(node.context.parent)
    ? node.context.parent.props.concat(node.props)
    : node.props;
  var _iterator = _createForOfIteratorHelper(props), _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var _step$value = _step.value,
        start = _step$value.start,
        end = _step$value.end;
      switch (node.context.src[start]) {
        case Char.COMMENT: {
          if (!node.commentHasRequiredWhitespace(start)) {
            var msg =
              "Comments must be separated from other tokens by white space characters";
            errors.push(new YAMLSemanticError(node, msg));
          }
          var header = node.header, valueRange = node.valueRange;
          var cc = valueRange &&
              (start > valueRange.start || header && start > header.start)
            ? comments.after
            : comments.before;
          cc.push(node.context.src.slice(start + 1, end));
          break;
        }
        case Char.ANCHOR:
          if (hasAnchor) {
            var _msg = "A node can have at most one anchor";
            errors.push(new YAMLSemanticError(node, _msg));
          }
          hasAnchor = true;
          break;
        case Char.TAG:
          if (hasTag) {
            var _msg2 = "A node can have at most one tag";
            errors.push(new YAMLSemanticError(node, _msg2));
          }
          hasTag = true;
          break;
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  return {
    comments,
    hasAnchor,
    hasTag,
  };
}
function resolveNodeValue(doc, node) {
  var anchors = doc.anchors, errors = doc.errors, schema = doc.schema;
  if (node.type === Type.ALIAS) {
    var name = node.rawValue;
    var src = anchors.getNode(name);
    if (!src) {
      var msg = "Aliased anchor not found: ".concat(name);
      errors.push(new YAMLReferenceError(node, msg));
      return null;
    }
    var res = new Alias2(src);
    anchors._cstAliases.push(res);
    return res;
  }
  var tagName = resolveTagName(doc, node);
  if (tagName) return resolveTag(doc, node, tagName);
  if (node.type !== Type.PLAIN) {
    var _msg3 = "Failed to resolve ".concat(node.type, " node here");
    errors.push(new YAMLSyntaxError(node, _msg3));
    return null;
  }
  try {
    var str = resolveString(doc, node);
    return resolveScalar(str, schema.tags, schema.tags.scalarFallback);
  } catch (error) {
    if (!error.source) error.source = node;
    errors.push(error);
    return null;
  }
}
function resolveNode(doc, node) {
  if (!node) return null;
  if (node.error) doc.errors.push(node.error);
  var _resolveNodeProps = resolveNodeProps(doc.errors, node),
    comments = _resolveNodeProps.comments,
    hasAnchor = _resolveNodeProps.hasAnchor,
    hasTag = _resolveNodeProps.hasTag;
  if (hasAnchor) {
    var anchors = doc.anchors;
    var name = node.anchor;
    var prev = anchors.getNode(name);
    if (prev) anchors.map[anchors.newName(name)] = prev;
    anchors.map[name] = node;
  }
  if (node.type === Type.ALIAS && (hasAnchor || hasTag)) {
    var msg = "An alias node must not specify any properties";
    doc.errors.push(new YAMLSemanticError(node, msg));
  }
  var res = resolveNodeValue(doc, node);
  if (res) {
    res.range = [
      node.range.start,
      node.range.end,
    ];
    if (doc.options.keepCstNodes) res.cstNode = node;
    if (doc.options.keepNodeTypes) res.type = node.type;
    var cb = comments.before.join("\n");
    if (cb) {
      res.commentBefore = res.commentBefore
        ? "".concat(res.commentBefore, "\n").concat(cb)
        : cb;
    }
    var ca = comments.after.join("\n");
    if (ca) {
      res.comment = res.comment ? "".concat(res.comment, "\n").concat(ca) : ca;
    }
  }
  return node.resolved = res;
}
function resolveMap(doc, cst) {
  if (cst.type !== Type.MAP && cst.type !== Type.FLOW_MAP) {
    var msg = "A ".concat(cst.type, " node cannot be resolved as a mapping");
    doc.errors.push(new YAMLSyntaxError(cst, msg));
    return null;
  }
  var _ref = cst.type === Type.FLOW_MAP
      ? resolveFlowMapItems(doc, cst)
      : resolveBlockMapItems(doc, cst),
    comments = _ref.comments,
    items = _ref.items;
  var map = new YAMLMap();
  map.items = items;
  resolveComments(map, comments);
  var hasCollectionKey = false;
  for (var i = 0; i < items.length; ++i) {
    var iKey = items[i].key;
    if (iKey instanceof Collection1) hasCollectionKey = true;
    if (doc.schema.merge && iKey && iKey.value === MERGE_KEY) {
      items[i] = new Merge(items[i]);
      var sources = items[i].value.items;
      var error = null;
      sources.some(function (node) {
        if (node instanceof Alias2) {
          var type = node.source.type;
          if (type === Type.MAP || type === Type.FLOW_MAP) return false;
          return error = "Merge nodes aliases can only point to maps";
        }
        return error = "Merge nodes can only have Alias nodes as values";
      });
      if (error) doc.errors.push(new YAMLSemanticError(cst, error));
    } else {
      for (var j = i + 1; j < items.length; ++j) {
        var jKey = items[j].key;
        if (
          iKey === jKey ||
          iKey && jKey && Object.prototype.hasOwnProperty.call(iKey, "value") &&
            iKey.value === jKey.value
        ) {
          var _msg = 'Map keys must be unique; "'.concat(iKey, '" is repeated');
          doc.errors.push(new YAMLSemanticError(cst, _msg));
          break;
        }
      }
    }
  }
  if (hasCollectionKey && !doc.options.mapAsMap) {
    var warn =
      "Keys with collection values will be stringified as YAML due to JS Object restrictions. Use mapAsMap: true to avoid this.";
    doc.warnings.push(new YAMLWarning(cst, warn));
  }
  cst.resolved = map;
  return map;
}
var valueHasPairComment = function valueHasPairComment2(_ref2) {
  var _ref2$context = _ref2.context,
    lineStart = _ref2$context.lineStart,
    node = _ref2$context.node,
    src = _ref2$context.src,
    props = _ref2.props;
  if (props.length === 0) return false;
  var start = props[0].start;
  if (node && start > node.valueRange.start) return false;
  if (src[start] !== Char.COMMENT) return false;
  for (var i = lineStart; i < start; ++i) {
    if (src[i] === "\n") return false;
  }
  return true;
};
function resolvePairComment(item, pair) {
  if (!valueHasPairComment(item)) return;
  var comment = item.getPropValue(0, Char.COMMENT, true);
  var found = false;
  var cb = pair.value.commentBefore;
  if (cb && cb.startsWith(comment)) {
    pair.value.commentBefore = cb.substr(comment.length + 1);
    found = true;
  } else {
    var cc = pair.value.comment;
    if (!item.node && cc && cc.startsWith(comment)) {
      pair.value.comment = cc.substr(comment.length + 1);
      found = true;
    }
  }
  if (found) pair.comment = comment;
}
function resolveBlockMapItems(doc, cst) {
  var comments = [];
  var items = [];
  var key = void 0;
  var keyStart = null;
  for (var i = 0; i < cst.items.length; ++i) {
    var item = cst.items[i];
    switch (item.type) {
      case Type.BLANK_LINE:
        comments.push({
          afterKey: !!key,
          before: items.length,
        });
        break;
      case Type.COMMENT:
        comments.push({
          afterKey: !!key,
          before: items.length,
          comment: item.comment,
        });
        break;
      case Type.MAP_KEY:
        if (key !== void 0) items.push(new Pair(key));
        if (item.error) doc.errors.push(item.error);
        key = resolveNode(doc, item.node);
        keyStart = null;
        break;
      case Type.MAP_VALUE:
        {
          if (key === void 0) key = null;
          if (item.error) doc.errors.push(item.error);
          if (
            !item.context.atLineStart && item.node &&
            item.node.type === Type.MAP && !item.node.context.atLineStart
          ) {
            var msg = "Nested mappings are not allowed in compact mappings";
            doc.errors.push(new YAMLSemanticError(item.node, msg));
          }
          var valueNode = item.node;
          if (!valueNode && item.props.length > 0) {
            valueNode = new PlainValue(Type.PLAIN, []);
            valueNode.context = {
              parent: item,
              src: item.context.src,
            };
            var pos = item.range.start + 1;
            valueNode.range = {
              start: pos,
              end: pos,
            };
            valueNode.valueRange = {
              start: pos,
              end: pos,
            };
            if (typeof item.range.origStart === "number") {
              var origPos = item.range.origStart + 1;
              valueNode.range.origStart = valueNode.range.origEnd = origPos;
              valueNode.valueRange.origStart = valueNode.valueRange.origEnd =
                origPos;
            }
          }
          var pair = new Pair(key, resolveNode(doc, valueNode));
          resolvePairComment(item, pair);
          items.push(pair);
          if (key && typeof keyStart === "number") {
            if (item.range.start > keyStart + 1024) {
              doc.errors.push(getLongKeyError(cst, key));
            }
          }
          key = void 0;
          keyStart = null;
        }
        break;
      default:
        if (key !== void 0) items.push(new Pair(key));
        key = resolveNode(doc, item);
        keyStart = item.range.start;
        if (item.error) doc.errors.push(item.error);
        next:
        for (var j = i + 1;; ++j) {
          var nextItem = cst.items[j];
          switch (nextItem && nextItem.type) {
            case Type.BLANK_LINE:
            case Type.COMMENT:
              continue next;
            case Type.MAP_VALUE:
              break next;
            default: {
              var _msg2 = "Implicit map keys need to be followed by map values";
              doc.errors.push(new YAMLSemanticError(item, _msg2));
              break next;
            }
          }
        }
        if (item.valueRangeContainsNewline) {
          var _msg3 = "Implicit map keys need to be on a single line";
          doc.errors.push(new YAMLSemanticError(item, _msg3));
        }
    }
  }
  if (key !== void 0) items.push(new Pair(key));
  return {
    comments,
    items,
  };
}
function resolveFlowMapItems(doc, cst) {
  var comments = [];
  var items = [];
  var key = void 0;
  var explicitKey = false;
  var next = "{";
  for (var i = 0; i < cst.items.length; ++i) {
    var item = cst.items[i];
    if (typeof item.char === "string") {
      var __char = item.char, offset = item.offset;
      if (__char === "?" && key === void 0 && !explicitKey) {
        explicitKey = true;
        next = ":";
        continue;
      }
      if (__char === ":") {
        if (key === void 0) key = null;
        if (next === ":") {
          next = ",";
          continue;
        }
      } else {
        if (explicitKey) {
          if (key === void 0 && __char !== ",") key = null;
          explicitKey = false;
        }
        if (key !== void 0) {
          items.push(new Pair(key));
          key = void 0;
          if (__char === ",") {
            next = ":";
            continue;
          }
        }
      }
      if (__char === "}") {
        if (i === cst.items.length - 1) continue;
      } else if (__char === next) {
        next = ":";
        continue;
      }
      var msg = "Flow map contains an unexpected ".concat(__char);
      var err = new YAMLSyntaxError(cst, msg);
      err.offset = offset;
      doc.errors.push(err);
    } else if (item.type === Type.BLANK_LINE) {
      comments.push({
        afterKey: !!key,
        before: items.length,
      });
    } else if (item.type === Type.COMMENT) {
      checkFlowCommentSpace(doc.errors, item);
      comments.push({
        afterKey: !!key,
        before: items.length,
        comment: item.comment,
      });
    } else if (key === void 0) {
      if (next === ",") {
        doc.errors.push(
          new YAMLSemanticError(item, "Separator , missing in flow map"),
        );
      }
      key = resolveNode(doc, item);
    } else {
      if (next !== ",") {
        doc.errors.push(
          new YAMLSemanticError(item, "Indicator : missing in flow map entry"),
        );
      }
      items.push(new Pair(key, resolveNode(doc, item)));
      key = void 0;
      explicitKey = false;
    }
  }
  checkFlowCollectionEnd(doc.errors, cst);
  if (key !== void 0) items.push(new Pair(key));
  return {
    comments,
    items,
  };
}
function resolveSeq(doc, cst) {
  if (cst.type !== Type.SEQ && cst.type !== Type.FLOW_SEQ) {
    var msg = "A ".concat(cst.type, " node cannot be resolved as a sequence");
    doc.errors.push(new YAMLSyntaxError(cst, msg));
    return null;
  }
  var _ref = cst.type === Type.FLOW_SEQ
      ? resolveFlowSeqItems(doc, cst)
      : resolveBlockSeqItems(doc, cst),
    comments = _ref.comments,
    items = _ref.items;
  var seq = new YAMLSeq();
  seq.items = items;
  resolveComments(seq, comments);
  if (
    !doc.options.mapAsMap && items.some(function (it) {
      return it instanceof Pair && it.key instanceof Collection1;
    })
  ) {
    var warn =
      "Keys with collection values will be stringified as YAML due to JS Object restrictions. Use mapAsMap: true to avoid this.";
    doc.warnings.push(new YAMLWarning(cst, warn));
  }
  cst.resolved = seq;
  return seq;
}
function resolveBlockSeqItems(doc, cst) {
  var comments = [];
  var items = [];
  for (var i = 0; i < cst.items.length; ++i) {
    var item = cst.items[i];
    switch (item.type) {
      case Type.BLANK_LINE:
        comments.push({
          before: items.length,
        });
        break;
      case Type.COMMENT:
        comments.push({
          comment: item.comment,
          before: items.length,
        });
        break;
      case Type.SEQ_ITEM:
        if (item.error) doc.errors.push(item.error);
        items.push(resolveNode(doc, item.node));
        if (item.hasProps) {
          var msg =
            "Sequence items cannot have tags or anchors before the - indicator";
          doc.errors.push(new YAMLSemanticError(item, msg));
        }
        break;
      default:
        if (item.error) doc.errors.push(item.error);
        doc.errors.push(
          new YAMLSyntaxError(
            item,
            "Unexpected ".concat(item.type, " node in sequence"),
          ),
        );
    }
  }
  return {
    comments,
    items,
  };
}
function resolveFlowSeqItems(doc, cst) {
  var comments = [];
  var items = [];
  var explicitKey = false;
  var key = void 0;
  var keyStart = null;
  var next = "[";
  var prevItem = null;
  for (var i = 0; i < cst.items.length; ++i) {
    var item = cst.items[i];
    if (typeof item.char === "string") {
      var __char = item.char, offset = item.offset;
      if (__char !== ":" && (explicitKey || key !== void 0)) {
        if (explicitKey && key === void 0) key = next ? items.pop() : null;
        items.push(new Pair(key));
        explicitKey = false;
        key = void 0;
        keyStart = null;
      }
      if (__char === next) {
        next = null;
      } else if (!next && __char === "?") {
        explicitKey = true;
      } else if (next !== "[" && __char === ":" && key === void 0) {
        if (next === ",") {
          key = items.pop();
          if (key instanceof Pair) {
            var msg = "Chaining flow sequence pairs is invalid";
            var err = new YAMLSemanticError(cst, msg);
            err.offset = offset;
            doc.errors.push(err);
          }
          if (!explicitKey && typeof keyStart === "number") {
            var keyEnd = item.range ? item.range.start : item.offset;
            if (keyEnd > keyStart + 1024) {
              doc.errors.push(getLongKeyError(cst, key));
            }
            var src = prevItem.context.src;
            for (var _i = keyStart; _i < keyEnd; ++_i) {
              if (src[_i] === "\n") {
                var _msg =
                  "Implicit keys of flow sequence pairs need to be on a single line";
                doc.errors.push(new YAMLSemanticError(prevItem, _msg));
                break;
              }
            }
          }
        } else {
          key = null;
        }
        keyStart = null;
        explicitKey = false;
        next = null;
      } else if (next === "[" || __char !== "]" || i < cst.items.length - 1) {
        var _msg2 = "Flow sequence contains an unexpected ".concat(__char);
        var _err = new YAMLSyntaxError(cst, _msg2);
        _err.offset = offset;
        doc.errors.push(_err);
      }
    } else if (item.type === Type.BLANK_LINE) {
      comments.push({
        before: items.length,
      });
    } else if (item.type === Type.COMMENT) {
      checkFlowCommentSpace(doc.errors, item);
      comments.push({
        comment: item.comment,
        before: items.length,
      });
    } else {
      if (next) {
        var _msg3 = "Expected a ".concat(next, " in flow sequence");
        doc.errors.push(new YAMLSemanticError(item, _msg3));
      }
      var value = resolveNode(doc, item);
      if (key === void 0) {
        items.push(value);
        prevItem = item;
      } else {
        items.push(new Pair(key, value));
        key = void 0;
      }
      keyStart = item.range.start;
      next = ",";
    }
  }
  checkFlowCollectionEnd(doc.errors, cst);
  if (key !== void 0) items.push(new Pair(key));
  return {
    comments,
    items,
  };
}
var global$1 = typeof global !== "undefined"
  ? global
  : typeof self !== "undefined"
  ? self
  : typeof window !== "undefined"
  ? window
  : {};
var lookup = [];
var revLookup = [];
var Arr = typeof Uint8Array !== "undefined" ? Uint8Array : Array;
var inited = false;
function init() {
  inited = true;
  var code = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
  for (var i = 0, len = code.length; i < len; ++i) {
    lookup[i] = code[i];
    revLookup[code.charCodeAt(i)] = i;
  }
  revLookup["-".charCodeAt(0)] = 62;
  revLookup["_".charCodeAt(0)] = 63;
}
function toByteArray(b64) {
  if (!inited) {
    init();
  }
  var i, j, l, tmp, placeHolders, arr;
  var len = b64.length;
  if (len % 4 > 0) {
    throw new Error("Invalid string. Length must be a multiple of 4");
  }
  placeHolders = b64[len - 2] === "=" ? 2 : b64[len - 1] === "=" ? 1 : 0;
  arr = new Arr(len * 3 / 4 - placeHolders);
  l = placeHolders > 0 ? len - 4 : len;
  var L = 0;
  for (i = 0, j = 0; i < l; i += 4, j += 3) {
    tmp = revLookup[b64.charCodeAt(i)] << 18 |
      revLookup[b64.charCodeAt(i + 1)] << 12 |
      revLookup[b64.charCodeAt(i + 2)] << 6 | revLookup[b64.charCodeAt(i + 3)];
    arr[L++] = tmp >> 16 & 255;
    arr[L++] = tmp >> 8 & 255;
    arr[L++] = tmp & 255;
  }
  if (placeHolders === 2) {
    tmp = revLookup[b64.charCodeAt(i)] << 2 |
      revLookup[b64.charCodeAt(i + 1)] >> 4;
    arr[L++] = tmp & 255;
  } else if (placeHolders === 1) {
    tmp = revLookup[b64.charCodeAt(i)] << 10 |
      revLookup[b64.charCodeAt(i + 1)] << 4 |
      revLookup[b64.charCodeAt(i + 2)] >> 2;
    arr[L++] = tmp >> 8 & 255;
    arr[L++] = tmp & 255;
  }
  return arr;
}
function tripletToBase64(num) {
  return lookup[num >> 18 & 63] + lookup[num >> 12 & 63] +
    lookup[num >> 6 & 63] + lookup[num & 63];
}
function encodeChunk(uint8, start, end) {
  var tmp;
  var output = [];
  for (var i = start; i < end; i += 3) {
    tmp = (uint8[i] << 16) + (uint8[i + 1] << 8) + uint8[i + 2];
    output.push(tripletToBase64(tmp));
  }
  return output.join("");
}
function fromByteArray(uint8) {
  if (!inited) {
    init();
  }
  var tmp;
  var len = uint8.length;
  var extraBytes = len % 3;
  var output = "";
  var parts = [];
  var maxChunkLength = 16383;
  for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
    parts.push(
      encodeChunk(
        uint8,
        i,
        i + maxChunkLength > len2 ? len2 : i + maxChunkLength,
      ),
    );
  }
  if (extraBytes === 1) {
    tmp = uint8[len - 1];
    output += lookup[tmp >> 2];
    output += lookup[tmp << 4 & 63];
    output += "==";
  } else if (extraBytes === 2) {
    tmp = (uint8[len - 2] << 8) + uint8[len - 1];
    output += lookup[tmp >> 10];
    output += lookup[tmp >> 4 & 63];
    output += lookup[tmp << 2 & 63];
    output += "=";
  }
  parts.push(output);
  return parts.join("");
}
function read(buffer, offset, isLE, mLen, nBytes) {
  var e, m;
  var eLen = nBytes * 8 - mLen - 1;
  var eMax = (1 << eLen) - 1;
  var eBias = eMax >> 1;
  var nBits = -7;
  var i = isLE ? nBytes - 1 : 0;
  var d = isLE ? -1 : 1;
  var s = buffer[offset + i];
  i += d;
  e = s & (1 << -nBits) - 1;
  s >>= -nBits;
  nBits += eLen;
  for (; nBits > 0; e = e * 256 + buffer[offset + i], i += d, nBits -= 8) {
  }
  m = e & (1 << -nBits) - 1;
  e >>= -nBits;
  nBits += mLen;
  for (; nBits > 0; m = m * 256 + buffer[offset + i], i += d, nBits -= 8) {
  }
  if (e === 0) {
    e = 1 - eBias;
  } else if (e === eMax) {
    return m ? NaN : (s ? -1 : 1) * Infinity;
  } else {
    m = m + Math.pow(2, mLen);
    e = e - eBias;
  }
  return (s ? -1 : 1) * m * Math.pow(2, e - mLen);
}
function write(buffer, value, offset, isLE, mLen, nBytes) {
  var e, m, c;
  var eLen = nBytes * 8 - mLen - 1;
  var eMax = (1 << eLen) - 1;
  var eBias = eMax >> 1;
  var rt = mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0;
  var i = isLE ? 0 : nBytes - 1;
  var d = isLE ? 1 : -1;
  var s = value < 0 || value === 0 && 1 / value < 0 ? 1 : 0;
  value = Math.abs(value);
  if (isNaN(value) || value === Infinity) {
    m = isNaN(value) ? 1 : 0;
    e = eMax;
  } else {
    e = Math.floor(Math.log(value) / Math.LN2);
    if (value * (c = Math.pow(2, -e)) < 1) {
      e--;
      c *= 2;
    }
    if (e + eBias >= 1) {
      value += rt / c;
    } else {
      value += rt * Math.pow(2, 1 - eBias);
    }
    if (value * c >= 2) {
      e++;
      c /= 2;
    }
    if (e + eBias >= eMax) {
      m = 0;
      e = eMax;
    } else if (e + eBias >= 1) {
      m = (value * c - 1) * Math.pow(2, mLen);
      e = e + eBias;
    } else {
      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen);
      e = 0;
    }
  }
  for (; mLen >= 8; buffer[offset + i] = m & 255, i += d, m /= 256, mLen -= 8) {
  }
  e = e << mLen | m;
  eLen += mLen;
  for (; eLen > 0; buffer[offset + i] = e & 255, i += d, e /= 256, eLen -= 8) {
  }
  buffer[offset + i - d] |= s * 128;
}
var toString = {}.toString;
var isArray = Array.isArray || function (arr) {
  return toString.call(arr) == "[object Array]";
};
var INSPECT_MAX_BYTES = 50;
Buffer.TYPED_ARRAY_SUPPORT = global$1.TYPED_ARRAY_SUPPORT !== void 0
  ? global$1.TYPED_ARRAY_SUPPORT
  : true;
function kMaxLength() {
  return Buffer.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823;
}
function createBuffer(that, length) {
  if (kMaxLength() < length) {
    throw new RangeError("Invalid typed array length");
  }
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    that = new Uint8Array(length);
    that.__proto__ = Buffer.prototype;
  } else {
    if (that === null) {
      that = new Buffer(length);
    }
    that.length = length;
  }
  return that;
}
function Buffer(arg, encodingOrOffset, length) {
  if (!Buffer.TYPED_ARRAY_SUPPORT && !(this instanceof Buffer)) {
    return new Buffer(arg, encodingOrOffset, length);
  }
  if (typeof arg === "number") {
    if (typeof encodingOrOffset === "string") {
      throw new Error(
        "If encoding is specified then the first argument must be a string",
      );
    }
    return allocUnsafe(this, arg);
  }
  return from(this, arg, encodingOrOffset, length);
}
Buffer.poolSize = 8192;
Buffer._augment = function (arr) {
  arr.__proto__ = Buffer.prototype;
  return arr;
};
function from(that, value, encodingOrOffset, length) {
  if (typeof value === "number") {
    throw new TypeError('"value" argument must not be a number');
  }
  if (typeof ArrayBuffer !== "undefined" && value instanceof ArrayBuffer) {
    return fromArrayBuffer(that, value, encodingOrOffset, length);
  }
  if (typeof value === "string") {
    return fromString(that, value, encodingOrOffset);
  }
  return fromObject(that, value);
}
Buffer.from = function (value, encodingOrOffset, length) {
  return from(null, value, encodingOrOffset, length);
};
if (Buffer.TYPED_ARRAY_SUPPORT) {
  Buffer.prototype.__proto__ = Uint8Array.prototype;
  Buffer.__proto__ = Uint8Array;
}
function assertSize(size) {
  if (typeof size !== "number") {
    throw new TypeError('"size" argument must be a number');
  } else if (size < 0) {
    throw new RangeError('"size" argument must not be negative');
  }
}
function alloc(that, size, fill2, encoding) {
  assertSize(size);
  if (size <= 0) {
    return createBuffer(that, size);
  }
  if (fill2 !== void 0) {
    return typeof encoding === "string"
      ? createBuffer(that, size).fill(fill2, encoding)
      : createBuffer(that, size).fill(fill2);
  }
  return createBuffer(that, size);
}
Buffer.alloc = function (size, fill2, encoding) {
  return alloc(null, size, fill2, encoding);
};
function allocUnsafe(that, size) {
  assertSize(size);
  that = createBuffer(that, size < 0 ? 0 : checked(size) | 0);
  if (!Buffer.TYPED_ARRAY_SUPPORT) {
    for (var i = 0; i < size; ++i) {
      that[i] = 0;
    }
  }
  return that;
}
Buffer.allocUnsafe = function (size) {
  return allocUnsafe(null, size);
};
Buffer.allocUnsafeSlow = function (size) {
  return allocUnsafe(null, size);
};
function fromString(that, string2, encoding) {
  if (typeof encoding !== "string" || encoding === "") {
    encoding = "utf8";
  }
  if (!Buffer.isEncoding(encoding)) {
    throw new TypeError('"encoding" must be a valid string encoding');
  }
  var length = byteLength(string2, encoding) | 0;
  that = createBuffer(that, length);
  var actual = that.write(string2, encoding);
  if (actual !== length) {
    that = that.slice(0, actual);
  }
  return that;
}
function fromArrayLike(that, array) {
  var length = array.length < 0 ? 0 : checked(array.length) | 0;
  that = createBuffer(that, length);
  for (var i = 0; i < length; i += 1) {
    that[i] = array[i] & 255;
  }
  return that;
}
function fromArrayBuffer(that, array, byteOffset, length) {
  array.byteLength;
  if (byteOffset < 0 || array.byteLength < byteOffset) {
    throw new RangeError("'offset' is out of bounds");
  }
  if (array.byteLength < byteOffset + (length || 0)) {
    throw new RangeError("'length' is out of bounds");
  }
  if (byteOffset === void 0 && length === void 0) {
    array = new Uint8Array(array);
  } else if (length === void 0) {
    array = new Uint8Array(array, byteOffset);
  } else {
    array = new Uint8Array(array, byteOffset, length);
  }
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    that = array;
    that.__proto__ = Buffer.prototype;
  } else {
    that = fromArrayLike(that, array);
  }
  return that;
}
function fromObject(that, obj) {
  if (internalIsBuffer(obj)) {
    var len = checked(obj.length) | 0;
    that = createBuffer(that, len);
    if (that.length === 0) {
      return that;
    }
    obj.copy(that, 0, 0, len);
    return that;
  }
  if (obj) {
    if (
      typeof ArrayBuffer !== "undefined" && obj.buffer instanceof ArrayBuffer ||
      "length" in obj
    ) {
      if (typeof obj.length !== "number" || isnan(obj.length)) {
        return createBuffer(that, 0);
      }
      return fromArrayLike(that, obj);
    }
    if (obj.type === "Buffer" && isArray(obj.data)) {
      return fromArrayLike(that, obj.data);
    }
  }
  throw new TypeError(
    "First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.",
  );
}
function checked(length) {
  if (length >= kMaxLength()) {
    throw new RangeError(
      "Attempt to allocate Buffer larger than maximum size: 0x" +
        kMaxLength().toString(16) + " bytes",
    );
  }
  return length | 0;
}
Buffer.isBuffer = isBuffer;
function internalIsBuffer(b) {
  return !!(b != null && b._isBuffer);
}
Buffer.compare = function compare(a, b) {
  if (!internalIsBuffer(a) || !internalIsBuffer(b)) {
    throw new TypeError("Arguments must be Buffers");
  }
  if (a === b) return 0;
  var x = a.length;
  var y = b.length;
  for (var i = 0, len = Math.min(x, y); i < len; ++i) {
    if (a[i] !== b[i]) {
      x = a[i];
      y = b[i];
      break;
    }
  }
  if (x < y) return -1;
  if (y < x) return 1;
  return 0;
};
Buffer.isEncoding = function isEncoding(encoding) {
  switch (String(encoding).toLowerCase()) {
    case "hex":
    case "utf8":
    case "utf-8":
    case "ascii":
    case "latin1":
    case "binary":
    case "base64":
    case "ucs2":
    case "ucs-2":
    case "utf16le":
    case "utf-16le":
      return true;
    default:
      return false;
  }
};
Buffer.concat = function concat(list, length) {
  if (!isArray(list)) {
    throw new TypeError('"list" argument must be an Array of Buffers');
  }
  if (list.length === 0) {
    return Buffer.alloc(0);
  }
  var i;
  if (length === void 0) {
    length = 0;
    for (i = 0; i < list.length; ++i) {
      length += list[i].length;
    }
  }
  var buffer = Buffer.allocUnsafe(length);
  var pos = 0;
  for (i = 0; i < list.length; ++i) {
    var buf = list[i];
    if (!internalIsBuffer(buf)) {
      throw new TypeError('"list" argument must be an Array of Buffers');
    }
    buf.copy(buffer, pos);
    pos += buf.length;
  }
  return buffer;
};
function byteLength(string2, encoding) {
  if (internalIsBuffer(string2)) {
    return string2.length;
  }
  if (
    typeof ArrayBuffer !== "undefined" &&
    typeof ArrayBuffer.isView === "function" &&
    (ArrayBuffer.isView(string2) || string2 instanceof ArrayBuffer)
  ) {
    return string2.byteLength;
  }
  if (typeof string2 !== "string") {
    string2 = "" + string2;
  }
  var len = string2.length;
  if (len === 0) return 0;
  var loweredCase = false;
  for (;;) {
    switch (encoding) {
      case "ascii":
      case "latin1":
      case "binary":
        return len;
      case "utf8":
      case "utf-8":
      case void 0:
        return utf8ToBytes(string2).length;
      case "ucs2":
      case "ucs-2":
      case "utf16le":
      case "utf-16le":
        return len * 2;
      case "hex":
        return len >>> 1;
      case "base64":
        return base64ToBytes(string2).length;
      default:
        if (loweredCase) return utf8ToBytes(string2).length;
        encoding = ("" + encoding).toLowerCase();
        loweredCase = true;
    }
  }
}
Buffer.byteLength = byteLength;
function slowToString(encoding, start, end) {
  var loweredCase = false;
  if (start === void 0 || start < 0) {
    start = 0;
  }
  if (start > this.length) {
    return "";
  }
  if (end === void 0 || end > this.length) {
    end = this.length;
  }
  if (end <= 0) {
    return "";
  }
  end >>>= 0;
  start >>>= 0;
  if (end <= start) {
    return "";
  }
  if (!encoding) encoding = "utf8";
  while (true) {
    switch (encoding) {
      case "hex":
        return hexSlice(this, start, end);
      case "utf8":
      case "utf-8":
        return utf8Slice(this, start, end);
      case "ascii":
        return asciiSlice(this, start, end);
      case "latin1":
      case "binary":
        return latin1Slice(this, start, end);
      case "base64":
        return base64Slice(this, start, end);
      case "ucs2":
      case "ucs-2":
      case "utf16le":
      case "utf-16le":
        return utf16leSlice(this, start, end);
      default:
        if (loweredCase) throw new TypeError("Unknown encoding: " + encoding);
        encoding = (encoding + "").toLowerCase();
        loweredCase = true;
    }
  }
}
Buffer.prototype._isBuffer = true;
function swap(b, n, m) {
  var i = b[n];
  b[n] = b[m];
  b[m] = i;
}
Buffer.prototype.swap16 = function swap16() {
  var len = this.length;
  if (len % 2 !== 0) {
    throw new RangeError("Buffer size must be a multiple of 16-bits");
  }
  for (var i = 0; i < len; i += 2) {
    swap(this, i, i + 1);
  }
  return this;
};
Buffer.prototype.swap32 = function swap32() {
  var len = this.length;
  if (len % 4 !== 0) {
    throw new RangeError("Buffer size must be a multiple of 32-bits");
  }
  for (var i = 0; i < len; i += 4) {
    swap(this, i, i + 3);
    swap(this, i + 1, i + 2);
  }
  return this;
};
Buffer.prototype.swap64 = function swap64() {
  var len = this.length;
  if (len % 8 !== 0) {
    throw new RangeError("Buffer size must be a multiple of 64-bits");
  }
  for (var i = 0; i < len; i += 8) {
    swap(this, i, i + 7);
    swap(this, i + 1, i + 6);
    swap(this, i + 2, i + 5);
    swap(this, i + 3, i + 4);
  }
  return this;
};
Buffer.prototype.toString = function toString2() {
  var length = this.length | 0;
  if (length === 0) return "";
  if (arguments.length === 0) return utf8Slice(this, 0, length);
  return slowToString.apply(this, arguments);
};
Buffer.prototype.equals = function equals(b) {
  if (!internalIsBuffer(b)) throw new TypeError("Argument must be a Buffer");
  if (this === b) return true;
  return Buffer.compare(this, b) === 0;
};
Buffer.prototype.inspect = function inspect() {
  var str = "";
  var max = INSPECT_MAX_BYTES;
  if (this.length > 0) {
    str = this.toString("hex", 0, max).match(/.{2}/g).join(" ");
    if (this.length > max) str += " ... ";
  }
  return "<Buffer " + str + ">";
};
Buffer.prototype.compare = function compare2(
  target,
  start,
  end,
  thisStart,
  thisEnd,
) {
  if (!internalIsBuffer(target)) {
    throw new TypeError("Argument must be a Buffer");
  }
  if (start === void 0) {
    start = 0;
  }
  if (end === void 0) {
    end = target ? target.length : 0;
  }
  if (thisStart === void 0) {
    thisStart = 0;
  }
  if (thisEnd === void 0) {
    thisEnd = this.length;
  }
  if (
    start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length
  ) {
    throw new RangeError("out of range index");
  }
  if (thisStart >= thisEnd && start >= end) {
    return 0;
  }
  if (thisStart >= thisEnd) {
    return -1;
  }
  if (start >= end) {
    return 1;
  }
  start >>>= 0;
  end >>>= 0;
  thisStart >>>= 0;
  thisEnd >>>= 0;
  if (this === target) return 0;
  var x = thisEnd - thisStart;
  var y = end - start;
  var len = Math.min(x, y);
  var thisCopy = this.slice(thisStart, thisEnd);
  var targetCopy = target.slice(start, end);
  for (var i = 0; i < len; ++i) {
    if (thisCopy[i] !== targetCopy[i]) {
      x = thisCopy[i];
      y = targetCopy[i];
      break;
    }
  }
  if (x < y) return -1;
  if (y < x) return 1;
  return 0;
};
function bidirectionalIndexOf(buffer, val, byteOffset, encoding, dir) {
  if (buffer.length === 0) return -1;
  if (typeof byteOffset === "string") {
    encoding = byteOffset;
    byteOffset = 0;
  } else if (byteOffset > 2147483647) {
    byteOffset = 2147483647;
  } else if (byteOffset < -2147483648) {
    byteOffset = -2147483648;
  }
  byteOffset = +byteOffset;
  if (isNaN(byteOffset)) {
    byteOffset = dir ? 0 : buffer.length - 1;
  }
  if (byteOffset < 0) byteOffset = buffer.length + byteOffset;
  if (byteOffset >= buffer.length) {
    if (dir) return -1;
    else byteOffset = buffer.length - 1;
  } else if (byteOffset < 0) {
    if (dir) byteOffset = 0;
    else return -1;
  }
  if (typeof val === "string") {
    val = Buffer.from(val, encoding);
  }
  if (internalIsBuffer(val)) {
    if (val.length === 0) {
      return -1;
    }
    return arrayIndexOf(buffer, val, byteOffset, encoding, dir);
  } else if (typeof val === "number") {
    val = val & 255;
    if (
      Buffer.TYPED_ARRAY_SUPPORT &&
      typeof Uint8Array.prototype.indexOf === "function"
    ) {
      if (dir) {
        return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset);
      } else {
        return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset);
      }
    }
    return arrayIndexOf(
      buffer,
      [
        val,
      ],
      byteOffset,
      encoding,
      dir,
    );
  }
  throw new TypeError("val must be string, number or Buffer");
}
function arrayIndexOf(arr, val, byteOffset, encoding, dir) {
  var indexSize = 1;
  var arrLength = arr.length;
  var valLength = val.length;
  if (encoding !== void 0) {
    encoding = String(encoding).toLowerCase();
    if (
      encoding === "ucs2" || encoding === "ucs-2" || encoding === "utf16le" ||
      encoding === "utf-16le"
    ) {
      if (arr.length < 2 || val.length < 2) {
        return -1;
      }
      indexSize = 2;
      arrLength /= 2;
      valLength /= 2;
      byteOffset /= 2;
    }
  }
  function read2(buf, i2) {
    if (indexSize === 1) {
      return buf[i2];
    } else {
      return buf.readUInt16BE(i2 * indexSize);
    }
  }
  var i;
  if (dir) {
    var foundIndex = -1;
    for (i = byteOffset; i < arrLength; i++) {
      if (
        read2(arr, i) === read2(val, foundIndex === -1 ? 0 : i - foundIndex)
      ) {
        if (foundIndex === -1) foundIndex = i;
        if (i - foundIndex + 1 === valLength) return foundIndex * indexSize;
      } else {
        if (foundIndex !== -1) i -= i - foundIndex;
        foundIndex = -1;
      }
    }
  } else {
    if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength;
    for (i = byteOffset; i >= 0; i--) {
      var found = true;
      for (var j = 0; j < valLength; j++) {
        if (read2(arr, i + j) !== read2(val, j)) {
          found = false;
          break;
        }
      }
      if (found) return i;
    }
  }
  return -1;
}
Buffer.prototype.includes = function includes(val, byteOffset, encoding) {
  return this.indexOf(val, byteOffset, encoding) !== -1;
};
Buffer.prototype.indexOf = function indexOf(val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, true);
};
Buffer.prototype.lastIndexOf = function lastIndexOf(val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, false);
};
function hexWrite(buf, string2, offset, length) {
  offset = Number(offset) || 0;
  var remaining = buf.length - offset;
  if (!length) {
    length = remaining;
  } else {
    length = Number(length);
    if (length > remaining) {
      length = remaining;
    }
  }
  var strLen = string2.length;
  if (strLen % 2 !== 0) throw new TypeError("Invalid hex string");
  if (length > strLen / 2) {
    length = strLen / 2;
  }
  for (var i = 0; i < length; ++i) {
    var parsed = parseInt(string2.substr(i * 2, 2), 16);
    if (isNaN(parsed)) return i;
    buf[offset + i] = parsed;
  }
  return i;
}
function utf8Write(buf, string2, offset, length) {
  return blitBuffer(
    utf8ToBytes(string2, buf.length - offset),
    buf,
    offset,
    length,
  );
}
function asciiWrite(buf, string2, offset, length) {
  return blitBuffer(asciiToBytes(string2), buf, offset, length);
}
function latin1Write(buf, string2, offset, length) {
  return asciiWrite(buf, string2, offset, length);
}
function base64Write(buf, string2, offset, length) {
  return blitBuffer(base64ToBytes(string2), buf, offset, length);
}
function ucs2Write(buf, string2, offset, length) {
  return blitBuffer(
    utf16leToBytes(string2, buf.length - offset),
    buf,
    offset,
    length,
  );
}
Buffer.prototype.write = function write2(string2, offset, length, encoding) {
  if (offset === void 0) {
    encoding = "utf8";
    length = this.length;
    offset = 0;
  } else if (length === void 0 && typeof offset === "string") {
    encoding = offset;
    length = this.length;
    offset = 0;
  } else if (isFinite(offset)) {
    offset = offset | 0;
    if (isFinite(length)) {
      length = length | 0;
      if (encoding === void 0) encoding = "utf8";
    } else {
      encoding = length;
      length = void 0;
    }
  } else {
    throw new Error(
      "Buffer.write(string, encoding, offset[, length]) is no longer supported",
    );
  }
  var remaining = this.length - offset;
  if (length === void 0 || length > remaining) length = remaining;
  if (
    string2.length > 0 && (length < 0 || offset < 0) || offset > this.length
  ) {
    throw new RangeError("Attempt to write outside buffer bounds");
  }
  if (!encoding) encoding = "utf8";
  var loweredCase = false;
  for (;;) {
    switch (encoding) {
      case "hex":
        return hexWrite(this, string2, offset, length);
      case "utf8":
      case "utf-8":
        return utf8Write(this, string2, offset, length);
      case "ascii":
        return asciiWrite(this, string2, offset, length);
      case "latin1":
      case "binary":
        return latin1Write(this, string2, offset, length);
      case "base64":
        return base64Write(this, string2, offset, length);
      case "ucs2":
      case "ucs-2":
      case "utf16le":
      case "utf-16le":
        return ucs2Write(this, string2, offset, length);
      default:
        if (loweredCase) throw new TypeError("Unknown encoding: " + encoding);
        encoding = ("" + encoding).toLowerCase();
        loweredCase = true;
    }
  }
};
Buffer.prototype.toJSON = function toJSON2() {
  return {
    type: "Buffer",
    data: Array.prototype.slice.call(this._arr || this, 0),
  };
};
function base64Slice(buf, start, end) {
  if (start === 0 && end === buf.length) {
    return fromByteArray(buf);
  } else {
    return fromByteArray(buf.slice(start, end));
  }
}
function utf8Slice(buf, start, end) {
  end = Math.min(buf.length, end);
  var res = [];
  var i = start;
  while (i < end) {
    var firstByte = buf[i];
    var codePoint = null;
    var bytesPerSequence = firstByte > 239
      ? 4
      : firstByte > 223
      ? 3
      : firstByte > 191
      ? 2
      : 1;
    if (i + bytesPerSequence <= end) {
      var secondByte, thirdByte, fourthByte, tempCodePoint;
      switch (bytesPerSequence) {
        case 1:
          if (firstByte < 128) {
            codePoint = firstByte;
          }
          break;
        case 2:
          secondByte = buf[i + 1];
          if ((secondByte & 192) === 128) {
            tempCodePoint = (firstByte & 31) << 6 | secondByte & 63;
            if (tempCodePoint > 127) {
              codePoint = tempCodePoint;
            }
          }
          break;
        case 3:
          secondByte = buf[i + 1];
          thirdByte = buf[i + 2];
          if ((secondByte & 192) === 128 && (thirdByte & 192) === 128) {
            tempCodePoint = (firstByte & 15) << 12 | (secondByte & 63) << 6 |
              thirdByte & 63;
            if (
              tempCodePoint > 2047 &&
              (tempCodePoint < 55296 || tempCodePoint > 57343)
            ) {
              codePoint = tempCodePoint;
            }
          }
          break;
        case 4:
          secondByte = buf[i + 1];
          thirdByte = buf[i + 2];
          fourthByte = buf[i + 3];
          if (
            (secondByte & 192) === 128 && (thirdByte & 192) === 128 &&
            (fourthByte & 192) === 128
          ) {
            tempCodePoint = (firstByte & 15) << 18 | (secondByte & 63) << 12 |
              (thirdByte & 63) << 6 | fourthByte & 63;
            if (tempCodePoint > 65535 && tempCodePoint < 1114112) {
              codePoint = tempCodePoint;
            }
          }
      }
    }
    if (codePoint === null) {
      codePoint = 65533;
      bytesPerSequence = 1;
    } else if (codePoint > 65535) {
      codePoint -= 65536;
      res.push(codePoint >>> 10 & 1023 | 55296);
      codePoint = 56320 | codePoint & 1023;
    }
    res.push(codePoint);
    i += bytesPerSequence;
  }
  return decodeCodePointsArray(res);
}
var MAX_ARGUMENTS_LENGTH = 4096;
function decodeCodePointsArray(codePoints) {
  var len = codePoints.length;
  if (len <= MAX_ARGUMENTS_LENGTH) {
    return String.fromCharCode.apply(String, codePoints);
  }
  var res = "";
  var i = 0;
  while (i < len) {
    res += String.fromCharCode.apply(
      String,
      codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH),
    );
  }
  return res;
}
function asciiSlice(buf, start, end) {
  var ret = "";
  end = Math.min(buf.length, end);
  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i] & 127);
  }
  return ret;
}
function latin1Slice(buf, start, end) {
  var ret = "";
  end = Math.min(buf.length, end);
  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i]);
  }
  return ret;
}
function hexSlice(buf, start, end) {
  var len = buf.length;
  if (!start || start < 0) start = 0;
  if (!end || end < 0 || end > len) end = len;
  var out = "";
  for (var i = start; i < end; ++i) {
    out += toHex(buf[i]);
  }
  return out;
}
function utf16leSlice(buf, start, end) {
  var bytes = buf.slice(start, end);
  var res = "";
  for (var i = 0; i < bytes.length; i += 2) {
    res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256);
  }
  return res;
}
Buffer.prototype.slice = function slice(start, end) {
  var len = this.length;
  start = ~~start;
  end = end === void 0 ? len : ~~end;
  if (start < 0) {
    start += len;
    if (start < 0) start = 0;
  } else if (start > len) {
    start = len;
  }
  if (end < 0) {
    end += len;
    if (end < 0) end = 0;
  } else if (end > len) {
    end = len;
  }
  if (end < start) end = start;
  var newBuf;
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    newBuf = this.subarray(start, end);
    newBuf.__proto__ = Buffer.prototype;
  } else {
    var sliceLen = end - start;
    newBuf = new Buffer(sliceLen, void 0);
    for (var i = 0; i < sliceLen; ++i) {
      newBuf[i] = this[i + start];
    }
  }
  return newBuf;
};
function checkOffset(offset, ext, length) {
  if (offset % 1 !== 0 || offset < 0) {
    throw new RangeError("offset is not uint");
  }
  if (offset + ext > length) {
    throw new RangeError("Trying to access beyond buffer length");
  }
}
Buffer.prototype.readUIntLE = function readUIntLE(
  offset,
  byteLength2,
  noAssert,
) {
  offset = offset | 0;
  byteLength2 = byteLength2 | 0;
  if (!noAssert) checkOffset(offset, byteLength2, this.length);
  var val = this[offset];
  var mul = 1;
  var i = 0;
  while ((++i) < byteLength2 && (mul *= 256)) {
    val += this[offset + i] * mul;
  }
  return val;
};
Buffer.prototype.readUIntBE = function readUIntBE(
  offset,
  byteLength2,
  noAssert,
) {
  offset = offset | 0;
  byteLength2 = byteLength2 | 0;
  if (!noAssert) {
    checkOffset(offset, byteLength2, this.length);
  }
  var val = this[offset + --byteLength2];
  var mul = 1;
  while (byteLength2 > 0 && (mul *= 256)) {
    val += this[offset + --byteLength2] * mul;
  }
  return val;
};
Buffer.prototype.readUInt8 = function readUInt8(offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length);
  return this[offset];
};
Buffer.prototype.readUInt16LE = function readUInt16LE(offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length);
  return this[offset] | this[offset + 1] << 8;
};
Buffer.prototype.readUInt16BE = function readUInt16BE(offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length);
  return this[offset] << 8 | this[offset + 1];
};
Buffer.prototype.readUInt32LE = function readUInt32LE(offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length);
  return (this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16) +
    this[offset + 3] * 16777216;
};
Buffer.prototype.readUInt32BE = function readUInt32BE(offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length);
  return this[offset] * 16777216 +
    (this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3]);
};
Buffer.prototype.readIntLE = function readIntLE(offset, byteLength2, noAssert) {
  offset = offset | 0;
  byteLength2 = byteLength2 | 0;
  if (!noAssert) checkOffset(offset, byteLength2, this.length);
  var val = this[offset];
  var mul = 1;
  var i = 0;
  while ((++i) < byteLength2 && (mul *= 256)) {
    val += this[offset + i] * mul;
  }
  mul *= 128;
  if (val >= mul) val -= Math.pow(2, 8 * byteLength2);
  return val;
};
Buffer.prototype.readIntBE = function readIntBE(offset, byteLength2, noAssert) {
  offset = offset | 0;
  byteLength2 = byteLength2 | 0;
  if (!noAssert) checkOffset(offset, byteLength2, this.length);
  var i = byteLength2;
  var mul = 1;
  var val = this[offset + --i];
  while (i > 0 && (mul *= 256)) {
    val += this[offset + --i] * mul;
  }
  mul *= 128;
  if (val >= mul) val -= Math.pow(2, 8 * byteLength2);
  return val;
};
Buffer.prototype.readInt8 = function readInt8(offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length);
  if (!(this[offset] & 128)) return this[offset];
  return (255 - this[offset] + 1) * -1;
};
Buffer.prototype.readInt16LE = function readInt16LE(offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length);
  var val = this[offset] | this[offset + 1] << 8;
  return val & 32768 ? val | 4294901760 : val;
};
Buffer.prototype.readInt16BE = function readInt16BE(offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length);
  var val = this[offset + 1] | this[offset] << 8;
  return val & 32768 ? val | 4294901760 : val;
};
Buffer.prototype.readInt32LE = function readInt32LE(offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length);
  return this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16 |
    this[offset + 3] << 24;
};
Buffer.prototype.readInt32BE = function readInt32BE(offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length);
  return this[offset] << 24 | this[offset + 1] << 16 | this[offset + 2] << 8 |
    this[offset + 3];
};
Buffer.prototype.readFloatLE = function readFloatLE(offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length);
  return read(this, offset, true, 23, 4);
};
Buffer.prototype.readFloatBE = function readFloatBE(offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length);
  return read(this, offset, false, 23, 4);
};
Buffer.prototype.readDoubleLE = function readDoubleLE(offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length);
  return read(this, offset, true, 52, 8);
};
Buffer.prototype.readDoubleBE = function readDoubleBE(offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length);
  return read(this, offset, false, 52, 8);
};
function checkInt(buf, value, offset, ext, max, min) {
  if (!internalIsBuffer(buf)) {
    throw new TypeError('"buffer" argument must be a Buffer instance');
  }
  if (value > max || value < min) {
    throw new RangeError('"value" argument is out of bounds');
  }
  if (offset + ext > buf.length) throw new RangeError("Index out of range");
}
Buffer.prototype.writeUIntLE = function writeUIntLE(
  value,
  offset,
  byteLength2,
  noAssert,
) {
  value = +value;
  offset = offset | 0;
  byteLength2 = byteLength2 | 0;
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength2) - 1;
    checkInt(this, value, offset, byteLength2, maxBytes, 0);
  }
  var mul = 1;
  var i = 0;
  this[offset] = value & 255;
  while ((++i) < byteLength2 && (mul *= 256)) {
    this[offset + i] = value / mul & 255;
  }
  return offset + byteLength2;
};
Buffer.prototype.writeUIntBE = function writeUIntBE(
  value,
  offset,
  byteLength2,
  noAssert,
) {
  value = +value;
  offset = offset | 0;
  byteLength2 = byteLength2 | 0;
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength2) - 1;
    checkInt(this, value, offset, byteLength2, maxBytes, 0);
  }
  var i = byteLength2 - 1;
  var mul = 1;
  this[offset + i] = value & 255;
  while ((--i) >= 0 && (mul *= 256)) {
    this[offset + i] = value / mul & 255;
  }
  return offset + byteLength2;
};
Buffer.prototype.writeUInt8 = function writeUInt8(value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) checkInt(this, value, offset, 1, 255, 0);
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value);
  this[offset] = value & 255;
  return offset + 1;
};
function objectWriteUInt16(buf, value, offset, littleEndian) {
  if (value < 0) value = 65535 + value + 1;
  for (var i = 0, j = Math.min(buf.length - offset, 2); i < j; ++i) {
    buf[offset + i] = (value & 255 << 8 * (littleEndian ? i : 1 - i)) >>>
      (littleEndian ? i : 1 - i) * 8;
  }
}
Buffer.prototype.writeUInt16LE = function writeUInt16LE(
  value,
  offset,
  noAssert,
) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) checkInt(this, value, offset, 2, 65535, 0);
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = value & 255;
    this[offset + 1] = value >>> 8;
  } else {
    objectWriteUInt16(this, value, offset, true);
  }
  return offset + 2;
};
Buffer.prototype.writeUInt16BE = function writeUInt16BE(
  value,
  offset,
  noAssert,
) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) checkInt(this, value, offset, 2, 65535, 0);
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = value >>> 8;
    this[offset + 1] = value & 255;
  } else {
    objectWriteUInt16(this, value, offset, false);
  }
  return offset + 2;
};
function objectWriteUInt32(buf, value, offset, littleEndian) {
  if (value < 0) value = 4294967295 + value + 1;
  for (var i = 0, j = Math.min(buf.length - offset, 4); i < j; ++i) {
    buf[offset + i] = value >>> (littleEndian ? i : 3 - i) * 8 & 255;
  }
}
Buffer.prototype.writeUInt32LE = function writeUInt32LE(
  value,
  offset,
  noAssert,
) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) checkInt(this, value, offset, 4, 4294967295, 0);
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset + 3] = value >>> 24;
    this[offset + 2] = value >>> 16;
    this[offset + 1] = value >>> 8;
    this[offset] = value & 255;
  } else {
    objectWriteUInt32(this, value, offset, true);
  }
  return offset + 4;
};
Buffer.prototype.writeUInt32BE = function writeUInt32BE(
  value,
  offset,
  noAssert,
) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) checkInt(this, value, offset, 4, 4294967295, 0);
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = value >>> 24;
    this[offset + 1] = value >>> 16;
    this[offset + 2] = value >>> 8;
    this[offset + 3] = value & 255;
  } else {
    objectWriteUInt32(this, value, offset, false);
  }
  return offset + 4;
};
Buffer.prototype.writeIntLE = function writeIntLE(
  value,
  offset,
  byteLength2,
  noAssert,
) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength2 - 1);
    checkInt(this, value, offset, byteLength2, limit - 1, -limit);
  }
  var i = 0;
  var mul = 1;
  var sub = 0;
  this[offset] = value & 255;
  while ((++i) < byteLength2 && (mul *= 256)) {
    if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
      sub = 1;
    }
    this[offset + i] = (value / mul >> 0) - sub & 255;
  }
  return offset + byteLength2;
};
Buffer.prototype.writeIntBE = function writeIntBE(
  value,
  offset,
  byteLength2,
  noAssert,
) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength2 - 1);
    checkInt(this, value, offset, byteLength2, limit - 1, -limit);
  }
  var i = byteLength2 - 1;
  var mul = 1;
  var sub = 0;
  this[offset + i] = value & 255;
  while ((--i) >= 0 && (mul *= 256)) {
    if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
      sub = 1;
    }
    this[offset + i] = (value / mul >> 0) - sub & 255;
  }
  return offset + byteLength2;
};
Buffer.prototype.writeInt8 = function writeInt8(value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) checkInt(this, value, offset, 1, 127, -128);
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value);
  if (value < 0) value = 255 + value + 1;
  this[offset] = value & 255;
  return offset + 1;
};
Buffer.prototype.writeInt16LE = function writeInt16LE(value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) checkInt(this, value, offset, 2, 32767, -32768);
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = value & 255;
    this[offset + 1] = value >>> 8;
  } else {
    objectWriteUInt16(this, value, offset, true);
  }
  return offset + 2;
};
Buffer.prototype.writeInt16BE = function writeInt16BE(value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) checkInt(this, value, offset, 2, 32767, -32768);
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = value >>> 8;
    this[offset + 1] = value & 255;
  } else {
    objectWriteUInt16(this, value, offset, false);
  }
  return offset + 2;
};
Buffer.prototype.writeInt32LE = function writeInt32LE(value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) checkInt(this, value, offset, 4, 2147483647, -2147483648);
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = value & 255;
    this[offset + 1] = value >>> 8;
    this[offset + 2] = value >>> 16;
    this[offset + 3] = value >>> 24;
  } else {
    objectWriteUInt32(this, value, offset, true);
  }
  return offset + 4;
};
Buffer.prototype.writeInt32BE = function writeInt32BE(value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) checkInt(this, value, offset, 4, 2147483647, -2147483648);
  if (value < 0) value = 4294967295 + value + 1;
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = value >>> 24;
    this[offset + 1] = value >>> 16;
    this[offset + 2] = value >>> 8;
    this[offset + 3] = value & 255;
  } else {
    objectWriteUInt32(this, value, offset, false);
  }
  return offset + 4;
};
function checkIEEE754(buf, value, offset, ext, max, min) {
  if (offset + ext > buf.length) throw new RangeError("Index out of range");
  if (offset < 0) throw new RangeError("Index out of range");
}
function writeFloat(buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 4);
  }
  write(buf, value, offset, littleEndian, 23, 4);
  return offset + 4;
}
Buffer.prototype.writeFloatLE = function writeFloatLE(value, offset, noAssert) {
  return writeFloat(this, value, offset, true, noAssert);
};
Buffer.prototype.writeFloatBE = function writeFloatBE(value, offset, noAssert) {
  return writeFloat(this, value, offset, false, noAssert);
};
function writeDouble(buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 8);
  }
  write(buf, value, offset, littleEndian, 52, 8);
  return offset + 8;
}
Buffer.prototype.writeDoubleLE = function writeDoubleLE(
  value,
  offset,
  noAssert,
) {
  return writeDouble(this, value, offset, true, noAssert);
};
Buffer.prototype.writeDoubleBE = function writeDoubleBE(
  value,
  offset,
  noAssert,
) {
  return writeDouble(this, value, offset, false, noAssert);
};
Buffer.prototype.copy = function copy(target, targetStart, start, end) {
  if (!start) start = 0;
  if (!end && end !== 0) end = this.length;
  if (targetStart >= target.length) targetStart = target.length;
  if (!targetStart) targetStart = 0;
  if (end > 0 && end < start) end = start;
  if (end === start) return 0;
  if (target.length === 0 || this.length === 0) return 0;
  if (targetStart < 0) {
    throw new RangeError("targetStart out of bounds");
  }
  if (start < 0 || start >= this.length) {
    throw new RangeError("sourceStart out of bounds");
  }
  if (end < 0) throw new RangeError("sourceEnd out of bounds");
  if (end > this.length) end = this.length;
  if (target.length - targetStart < end - start) {
    end = target.length - targetStart + start;
  }
  var len = end - start;
  var i;
  if (this === target && start < targetStart && targetStart < end) {
    for (i = len - 1; i >= 0; --i) {
      target[i + targetStart] = this[i + start];
    }
  } else if (len < 1000 || !Buffer.TYPED_ARRAY_SUPPORT) {
    for (i = 0; i < len; ++i) {
      target[i + targetStart] = this[i + start];
    }
  } else {
    Uint8Array.prototype.set.call(
      target,
      this.subarray(start, start + len),
      targetStart,
    );
  }
  return len;
};
Buffer.prototype.fill = function fill(val, start, end, encoding) {
  if (typeof val === "string") {
    if (typeof start === "string") {
      encoding = start;
      start = 0;
      end = this.length;
    } else if (typeof end === "string") {
      encoding = end;
      end = this.length;
    }
    if (val.length === 1) {
      var code = val.charCodeAt(0);
      if (code < 256) {
        val = code;
      }
    }
    if (encoding !== void 0 && typeof encoding !== "string") {
      throw new TypeError("encoding must be a string");
    }
    if (typeof encoding === "string" && !Buffer.isEncoding(encoding)) {
      throw new TypeError("Unknown encoding: " + encoding);
    }
  } else if (typeof val === "number") {
    val = val & 255;
  }
  if (start < 0 || this.length < start || this.length < end) {
    throw new RangeError("Out of range index");
  }
  if (end <= start) {
    return this;
  }
  start = start >>> 0;
  end = end === void 0 ? this.length : end >>> 0;
  if (!val) val = 0;
  var i;
  if (typeof val === "number") {
    for (i = start; i < end; ++i) {
      this[i] = val;
    }
  } else {
    var bytes = internalIsBuffer(val)
      ? val
      : utf8ToBytes(new Buffer(val, encoding).toString());
    var len = bytes.length;
    for (i = 0; i < end - start; ++i) {
      this[i + start] = bytes[i % len];
    }
  }
  return this;
};
var INVALID_BASE64_RE = /[^+\/0-9A-Za-z-_]/g;
function base64clean(str) {
  str = stringtrim(str).replace(INVALID_BASE64_RE, "");
  if (str.length < 2) return "";
  while (str.length % 4 !== 0) {
    str = str + "=";
  }
  return str;
}
function stringtrim(str) {
  if (str.trim) return str.trim();
  return str.replace(/^\s+|\s+$/g, "");
}
function toHex(n) {
  if (n < 16) return "0" + n.toString(16);
  return n.toString(16);
}
function utf8ToBytes(string2, units) {
  units = units || Infinity;
  var codePoint;
  var length = string2.length;
  var leadSurrogate = null;
  var bytes = [];
  for (var i = 0; i < length; ++i) {
    codePoint = string2.charCodeAt(i);
    if (codePoint > 55295 && codePoint < 57344) {
      if (!leadSurrogate) {
        if (codePoint > 56319) {
          if ((units -= 3) > -1) bytes.push(239, 191, 189);
          continue;
        } else if (i + 1 === length) {
          if ((units -= 3) > -1) bytes.push(239, 191, 189);
          continue;
        }
        leadSurrogate = codePoint;
        continue;
      }
      if (codePoint < 56320) {
        if ((units -= 3) > -1) bytes.push(239, 191, 189);
        leadSurrogate = codePoint;
        continue;
      }
      codePoint = (leadSurrogate - 55296 << 10 | codePoint - 56320) + 65536;
    } else if (leadSurrogate) {
      if ((units -= 3) > -1) bytes.push(239, 191, 189);
    }
    leadSurrogate = null;
    if (codePoint < 128) {
      if ((units -= 1) < 0) break;
      bytes.push(codePoint);
    } else if (codePoint < 2048) {
      if ((units -= 2) < 0) break;
      bytes.push(codePoint >> 6 | 192, codePoint & 63 | 128);
    } else if (codePoint < 65536) {
      if ((units -= 3) < 0) break;
      bytes.push(
        codePoint >> 12 | 224,
        codePoint >> 6 & 63 | 128,
        codePoint & 63 | 128,
      );
    } else if (codePoint < 1114112) {
      if ((units -= 4) < 0) break;
      bytes.push(
        codePoint >> 18 | 240,
        codePoint >> 12 & 63 | 128,
        codePoint >> 6 & 63 | 128,
        codePoint & 63 | 128,
      );
    } else {
      throw new Error("Invalid code point");
    }
  }
  return bytes;
}
function asciiToBytes(str) {
  var byteArray = [];
  for (var i = 0; i < str.length; ++i) {
    byteArray.push(str.charCodeAt(i) & 255);
  }
  return byteArray;
}
function utf16leToBytes(str, units) {
  var c, hi, lo;
  var byteArray = [];
  for (var i = 0; i < str.length; ++i) {
    if ((units -= 2) < 0) break;
    c = str.charCodeAt(i);
    hi = c >> 8;
    lo = c % 256;
    byteArray.push(lo);
    byteArray.push(hi);
  }
  return byteArray;
}
function base64ToBytes(str) {
  return toByteArray(base64clean(str));
}
function blitBuffer(src, dst, offset, length) {
  for (var i = 0; i < length; ++i) {
    if (i + offset >= dst.length || i >= src.length) break;
    dst[i + offset] = src[i];
  }
  return i;
}
function isnan(val) {
  return val !== val;
}
function isBuffer(obj) {
  return obj != null &&
    (!!obj._isBuffer || isFastBuffer(obj) || isSlowBuffer(obj));
}
function isFastBuffer(obj) {
  return !!obj.constructor && typeof obj.constructor.isBuffer === "function" &&
    obj.constructor.isBuffer(obj);
}
function isSlowBuffer(obj) {
  return typeof obj.readFloatLE === "function" &&
    typeof obj.slice === "function" && isFastBuffer(obj.slice(0, 0));
}
function defaultSetTimout() {
  throw new Error("setTimeout has not been defined");
}
function defaultClearTimeout() {
  throw new Error("clearTimeout has not been defined");
}
var cachedSetTimeout = defaultSetTimout;
var cachedClearTimeout = defaultClearTimeout;
var globalContext;
if (typeof window !== "undefined") {
  globalContext = window;
} else if (typeof self !== "undefined") {
  globalContext = self;
} else {
  globalContext = {};
}
if (typeof globalContext.setTimeout === "function") {
  cachedSetTimeout = setTimeout;
}
if (typeof globalContext.clearTimeout === "function") {
  cachedClearTimeout = clearTimeout;
}
function runTimeout(fun) {
  if (cachedSetTimeout === setTimeout) {
    return setTimeout(fun, 0);
  }
  if (
    (cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout
  ) {
    cachedSetTimeout = setTimeout;
    return setTimeout(fun, 0);
  }
  try {
    return cachedSetTimeout(fun, 0);
  } catch (e) {
    try {
      return cachedSetTimeout.call(null, fun, 0);
    } catch (e2) {
      return cachedSetTimeout.call(this, fun, 0);
    }
  }
}
function runClearTimeout(marker) {
  if (cachedClearTimeout === clearTimeout) {
    return clearTimeout(marker);
  }
  if (
    (cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) &&
    clearTimeout
  ) {
    cachedClearTimeout = clearTimeout;
    return clearTimeout(marker);
  }
  try {
    return cachedClearTimeout(marker);
  } catch (e) {
    try {
      return cachedClearTimeout.call(null, marker);
    } catch (e2) {
      return cachedClearTimeout.call(this, marker);
    }
  }
}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;
function cleanUpNextTick() {
  if (!draining || !currentQueue) {
    return;
  }
  draining = false;
  if (currentQueue.length) {
    queue = currentQueue.concat(queue);
  } else {
    queueIndex = -1;
  }
  if (queue.length) {
    drainQueue();
  }
}
function drainQueue() {
  if (draining) {
    return;
  }
  var timeout = runTimeout(cleanUpNextTick);
  draining = true;
  var len = queue.length;
  while (len) {
    currentQueue = queue;
    queue = [];
    while ((++queueIndex) < len) {
      if (currentQueue) {
        currentQueue[queueIndex].run();
      }
    }
    queueIndex = -1;
    len = queue.length;
  }
  currentQueue = null;
  draining = false;
  runClearTimeout(timeout);
}
function nextTick(fun) {
  var args = new Array(arguments.length - 1);
  if (arguments.length > 1) {
    for (var i = 1; i < arguments.length; i++) {
      args[i - 1] = arguments[i];
    }
  }
  queue.push(new Item(fun, args));
  if (queue.length === 1 && !draining) {
    runTimeout(drainQueue);
  }
}
function Item(fun, array) {
  this.fun = fun;
  this.array = array;
}
Item.prototype.run = function () {
  this.fun.apply(null, this.array);
};
var title = "browser";
var platform = "browser";
var browser = true;
var argv = [];
var version = "";
var versions = {};
var release = {};
var config = {};
function noop() {
}
var on = noop;
var addListener = noop;
var once = noop;
var off = noop;
var removeListener = noop;
var removeAllListeners = noop;
var emit = noop;
function binding(name) {
  throw new Error("process.binding is not supported");
}
function cwd() {
  return "/";
}
function chdir(dir) {
  throw new Error("process.chdir is not supported");
}
function umask() {
  return 0;
}
var performance = globalContext.performance || {};
var performanceNow = performance.now || performance.mozNow ||
  performance.msNow || performance.oNow || performance.webkitNow ||
  function () {
    return new Date().getTime();
  };
function hrtime(previousTimestamp) {
  var clocktime = performanceNow.call(performance) * 0.001;
  var seconds = Math.floor(clocktime);
  var nanoseconds = Math.floor(clocktime % 1 * 1000000000);
  if (previousTimestamp) {
    seconds = seconds - previousTimestamp[0];
    nanoseconds = nanoseconds - previousTimestamp[1];
    if (nanoseconds < 0) {
      seconds--;
      nanoseconds += 1000000000;
    }
  }
  return [
    seconds,
    nanoseconds,
  ];
}
var startTime = new Date();
function uptime() {
  var currentTime = new Date();
  var dif = currentTime - startTime;
  return dif / 1000;
}
var process = {
  nextTick,
  title,
  browser,
  env: {
    NODE_ENV: "production",
  },
  argv,
  version,
  versions,
  on,
  addListener,
  once,
  off,
  removeListener,
  removeAllListeners,
  emit,
  binding,
  cwd,
  chdir,
  umask,
  hrtime,
  platform,
  release,
  config,
  uptime,
};
var binary = {
  identify: function identify(value) {
    return value instanceof Uint8Array;
  },
  default: false,
  tag: "tag:yaml.org,2002:binary",
  resolve: function resolve(doc, node) {
    var src = resolveString(doc, node);
    if (typeof Buffer === "function") {
      return Buffer.from(src, "base64");
    } else if (typeof atob === "function") {
      var str = atob(src.replace(/[\n\r]/g, ""));
      var buffer = new Uint8Array(str.length);
      for (var i = 0; i < str.length; ++i) {
        buffer[i] = str.charCodeAt(i);
      }
      return buffer;
    } else {
      var msg =
        "This environment does not support reading binary tags; either Buffer or atob is required";
      doc.errors.push(new YAMLReferenceError(node, msg));
      return null;
    }
  },
  options: binaryOptions,
  stringify: function stringify2(_ref, ctx, onComment, onChompKeep) {
    var comment = _ref.comment, type = _ref.type, value = _ref.value;
    var src;
    if (typeof Buffer === "function") {
      src = value instanceof Buffer
        ? value.toString("base64")
        : Buffer.from(value.buffer).toString("base64");
    } else if (typeof btoa === "function") {
      var s = "";
      for (var i = 0; i < value.length; ++i) {
        s += String.fromCharCode(value[i]);
      }
      src = btoa(s);
    } else {
      throw new Error(
        "This environment does not support writing binary tags; either Buffer or btoa is required",
      );
    }
    if (!type) type = binaryOptions.defaultType;
    if (type === Type.QUOTE_DOUBLE) {
      value = src;
    } else {
      var lineWidth = binaryOptions.lineWidth;
      var n = Math.ceil(src.length / lineWidth);
      var lines = new Array(n);
      for (var _i = 0, o = 0; _i < n; ++_i, o += lineWidth) {
        lines[_i] = src.substr(o, lineWidth);
      }
      value = lines.join(type === Type.BLOCK_LITERAL ? "\n" : " ");
    }
    return stringifyString(
      {
        comment,
        type,
        value,
      },
      ctx,
      onComment,
      onChompKeep,
    );
  },
};
function parsePairs(doc, cst) {
  var seq2 = resolveSeq(doc, cst);
  for (var i = 0; i < seq2.items.length; ++i) {
    var item = seq2.items[i];
    if (item instanceof Pair) continue;
    else if (item instanceof YAMLMap) {
      if (item.items.length > 1) {
        var msg = "Each pair must have its own sequence indicator";
        throw new YAMLSemanticError(cst, msg);
      }
      var pair = item.items[0] || new Pair();
      if (item.commentBefore) {
        pair.commentBefore = pair.commentBefore
          ? "".concat(item.commentBefore, "\n").concat(pair.commentBefore)
          : item.commentBefore;
      }
      if (item.comment) {
        pair.comment = pair.comment
          ? "".concat(item.comment, "\n").concat(pair.comment)
          : item.comment;
      }
      item = pair;
    }
    seq2.items[i] = item instanceof Pair ? item : new Pair(item);
  }
  return seq2;
}
function createPairs(schema, iterable, ctx) {
  var pairs2 = new YAMLSeq(schema);
  pairs2.tag = "tag:yaml.org,2002:pairs";
  var _iterator = _createForOfIteratorHelper(iterable), _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var it = _step.value;
      var key = void 0, value = void 0;
      if (Array.isArray(it)) {
        if (it.length === 2) {
          key = it[0];
          value = it[1];
        } else throw new TypeError("Expected [key, value] tuple: ".concat(it));
      } else if (it && it instanceof Object) {
        var keys = Object.keys(it);
        if (keys.length === 1) {
          key = keys[0];
          value = it[key];
        } else {
          throw new TypeError("Expected { key: value } tuple: ".concat(it));
        }
      } else {
        key = it;
      }
      var pair = schema.createPair(key, value, ctx);
      pairs2.items.push(pair);
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  return pairs2;
}
var pairs = {
  default: false,
  tag: "tag:yaml.org,2002:pairs",
  resolve: parsePairs,
  createNode: createPairs,
};
var YAMLOMap = function (_YAMLSeq) {
  _inherits(YAMLOMap2, _YAMLSeq);
  var _super = _createSuper(YAMLOMap2);
  function YAMLOMap2() {
    var _this;
    _classCallCheck(this, YAMLOMap2);
    _this = _super.call(this);
    _defineProperty(
      _assertThisInitialized(_this),
      "add",
      YAMLMap.prototype.add.bind(_assertThisInitialized(_this)),
    );
    _defineProperty(
      _assertThisInitialized(_this),
      "delete",
      YAMLMap.prototype.delete.bind(_assertThisInitialized(_this)),
    );
    _defineProperty(
      _assertThisInitialized(_this),
      "get",
      YAMLMap.prototype.get.bind(_assertThisInitialized(_this)),
    );
    _defineProperty(
      _assertThisInitialized(_this),
      "has",
      YAMLMap.prototype.has.bind(_assertThisInitialized(_this)),
    );
    _defineProperty(
      _assertThisInitialized(_this),
      "set",
      YAMLMap.prototype.set.bind(_assertThisInitialized(_this)),
    );
    _this.tag = YAMLOMap2.tag;
    return _this;
  }
  _createClass(YAMLOMap2, [
    {
      key: "toJSON",
      value: function toJSON$1(_, ctx) {
        var map2 = new Map();
        if (ctx && ctx.onCreate) ctx.onCreate(map2);
        var _iterator = _createForOfIteratorHelper(this.items), _step;
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var pair = _step.value;
            var key = void 0, value = void 0;
            if (pair instanceof Pair) {
              key = toJSON(pair.key, "", ctx);
              value = toJSON(pair.value, key, ctx);
            } else {
              key = toJSON(pair, "", ctx);
            }
            if (map2.has(key)) {
              throw new Error("Ordered maps must not include duplicate keys");
            }
            map2.set(key, value);
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
        return map2;
      },
    },
  ]);
  return YAMLOMap2;
}(YAMLSeq);
_defineProperty(YAMLOMap, "tag", "tag:yaml.org,2002:omap");
function parseOMap(doc, cst) {
  var pairs2 = parsePairs(doc, cst);
  var seenKeys = [];
  var _iterator2 = _createForOfIteratorHelper(pairs2.items), _step2;
  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
      var key = _step2.value.key;
      if (key instanceof Scalar) {
        if (seenKeys.includes(key.value)) {
          var msg = "Ordered maps must not include duplicate keys";
          throw new YAMLSemanticError(cst, msg);
        } else {
          seenKeys.push(key.value);
        }
      }
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }
  return Object.assign(new YAMLOMap(), pairs2);
}
function createOMap(schema, iterable, ctx) {
  var pairs2 = createPairs(schema, iterable, ctx);
  var omap2 = new YAMLOMap();
  omap2.items = pairs2.items;
  return omap2;
}
var omap = {
  identify: function identify2(value) {
    return value instanceof Map;
  },
  nodeClass: YAMLOMap,
  default: false,
  tag: "tag:yaml.org,2002:omap",
  resolve: parseOMap,
  createNode: createOMap,
};
var YAMLSet = function (_YAMLMap) {
  _inherits(YAMLSet2, _YAMLMap);
  var _super = _createSuper(YAMLSet2);
  function YAMLSet2() {
    var _this;
    _classCallCheck(this, YAMLSet2);
    _this = _super.call(this);
    _this.tag = YAMLSet2.tag;
    return _this;
  }
  _createClass(YAMLSet2, [
    {
      key: "add",
      value: function add(key) {
        var pair = key instanceof Pair ? key : new Pair(key);
        var prev = findPair(this.items, pair.key);
        if (!prev) this.items.push(pair);
      },
    },
    {
      key: "get",
      value: function get(key, keepPair) {
        var pair = findPair(this.items, key);
        return !keepPair && pair instanceof Pair
          ? pair.key instanceof Scalar ? pair.key.value : pair.key
          : pair;
      },
    },
    {
      key: "set",
      value: function set2(key, value) {
        if (typeof value !== "boolean") {
          throw new Error(
            "Expected boolean value for set(key, value) in a YAML set, not "
              .concat(_typeof(value)),
          );
        }
        var prev = findPair(this.items, key);
        if (prev && !value) {
          this.items.splice(this.items.indexOf(prev), 1);
        } else if (!prev && value) {
          this.items.push(new Pair(key));
        }
      },
    },
    {
      key: "toJSON",
      value: function toJSON3(_, ctx) {
        return _get(_getPrototypeOf(YAMLSet2.prototype), "toJSON", this).call(
          this,
          _,
          ctx,
          Set,
        );
      },
    },
    {
      key: "toString",
      value: function toString3(ctx, onComment, onChompKeep) {
        if (!ctx) return JSON.stringify(this);
        if (this.hasAllNullValues()) {
          return _get(_getPrototypeOf(YAMLSet2.prototype), "toString", this)
            .call(this, ctx, onComment, onChompKeep);
        } else throw new Error("Set items must all have null values");
      },
    },
  ]);
  return YAMLSet2;
}(YAMLMap);
_defineProperty(YAMLSet, "tag", "tag:yaml.org,2002:set");
function parseSet(doc, cst) {
  var map2 = resolveMap(doc, cst);
  if (!map2.hasAllNullValues()) {
    throw new YAMLSemanticError(cst, "Set items must all have null values");
  }
  return Object.assign(new YAMLSet(), map2);
}
function createSet(schema, iterable, ctx) {
  var set2 = new YAMLSet();
  var _iterator = _createForOfIteratorHelper(iterable), _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var value = _step.value;
      set2.items.push(schema.createPair(value, null, ctx));
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  return set2;
}
var set = {
  identify: function identify3(value) {
    return value instanceof Set;
  },
  nodeClass: YAMLSet,
  default: false,
  tag: "tag:yaml.org,2002:set",
  resolve: parseSet,
  createNode: createSet,
};
var parseSexagesimal = function parseSexagesimal2(sign, parts) {
  var n = parts.split(":").reduce(function (n2, p) {
    return n2 * 60 + Number(p);
  }, 0);
  return sign === "-" ? -n : n;
};
var stringifySexagesimal = function stringifySexagesimal2(_ref) {
  var value = _ref.value;
  if (isNaN(value) || !isFinite(value)) return stringifyNumber(value);
  var sign = "";
  if (value < 0) {
    sign = "-";
    value = Math.abs(value);
  }
  var parts = [
    value % 60,
  ];
  if (value < 60) {
    parts.unshift(0);
  } else {
    value = Math.round((value - parts[0]) / 60);
    parts.unshift(value % 60);
    if (value >= 60) {
      value = Math.round((value - parts[0]) / 60);
      parts.unshift(value);
    }
  }
  return sign + parts.map(function (n) {
    return n < 10 ? "0" + String(n) : String(n);
  }).join(":").replace(/000000\d*$/, "");
};
var intTime = {
  identify: function identify4(value) {
    return typeof value === "number";
  },
  default: true,
  tag: "tag:yaml.org,2002:int",
  format: "TIME",
  test: /^([-+]?)([0-9][0-9_]*(?::[0-5]?[0-9])+)$/,
  resolve: function resolve2(str, sign, parts) {
    return parseSexagesimal(sign, parts.replace(/_/g, ""));
  },
  stringify: stringifySexagesimal,
};
var floatTime = {
  identify: function identify5(value) {
    return typeof value === "number";
  },
  default: true,
  tag: "tag:yaml.org,2002:float",
  format: "TIME",
  test: /^([-+]?)([0-9][0-9_]*(?::[0-5]?[0-9])+\.[0-9_]*)$/,
  resolve: function resolve3(str, sign, parts) {
    return parseSexagesimal(sign, parts.replace(/_/g, ""));
  },
  stringify: stringifySexagesimal,
};
var timestamp = {
  identify: function identify6(value) {
    return value instanceof Date;
  },
  default: true,
  tag: "tag:yaml.org,2002:timestamp",
  test: RegExp(
    "^(?:([0-9]{4})-([0-9]{1,2})-([0-9]{1,2})(?:(?:t|T|[ \\t]+)([0-9]{1,2}):([0-9]{1,2}):([0-9]{1,2}(\\.[0-9]+)?)(?:[ \\t]*(Z|[-+][012]?[0-9](?::[0-9]{2})?))?)?)$",
  ),
  resolve: function resolve4(
    str,
    year,
    month,
    day,
    hour,
    minute,
    second,
    millisec,
    tz,
  ) {
    if (millisec) millisec = (millisec + "00").substr(1, 3);
    var date = Date.UTC(
      year,
      month - 1,
      day,
      hour || 0,
      minute || 0,
      second || 0,
      millisec || 0,
    );
    if (tz && tz !== "Z") {
      var d = parseSexagesimal(tz[0], tz.slice(1));
      if (Math.abs(d) < 30) d *= 60;
      date -= 60000 * d;
    }
    return new Date(date);
  },
  stringify: function stringify2(_ref2) {
    var value = _ref2.value;
    return value.toISOString().replace(/((T00:00)?:00)?\.000Z$/, "");
  },
};
function shouldWarn(deprecation) {
  var env = typeof process !== "undefined" && process.env || {};
  if (deprecation) {
    if (typeof YAML_SILENCE_DEPRECATION_WARNINGS !== "undefined") {
      return !YAML_SILENCE_DEPRECATION_WARNINGS;
    }
    return !env.YAML_SILENCE_DEPRECATION_WARNINGS;
  }
  if (typeof YAML_SILENCE_WARNINGS !== "undefined") {
    return !YAML_SILENCE_WARNINGS;
  }
  return !env.YAML_SILENCE_WARNINGS;
}
function warn(warning, type) {
  if (shouldWarn(false)) {
    var emit2 = typeof process !== "undefined" && process.emitWarning;
    if (emit2) emit2(warning, type);
    else {
      console.warn(type ? "".concat(type, ": ").concat(warning) : warning);
    }
  }
}
var warned = {};
function warnOptionDeprecation(name, alternative) {
  if (!warned[name] && shouldWarn(true)) {
    warned[name] = true;
    var msg = "The option '".concat(
      name,
      "' will be removed in a future release",
    );
    msg += alternative ? ", use '".concat(alternative, "' instead.") : ".";
    warn(msg, "DeprecationWarning");
  }
}
function createMap(schema, obj, ctx) {
  var map2 = new YAMLMap(schema);
  if (obj instanceof Map) {
    var _iterator = _createForOfIteratorHelper(obj), _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var _step$value = _slicedToArray(_step.value, 2),
          key = _step$value[0],
          value = _step$value[1];
        map2.items.push(schema.createPair(key, value, ctx));
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  } else if (obj && _typeof(obj) === "object") {
    for (
      var _i = 0, _Object$keys = Object.keys(obj);
      _i < _Object$keys.length;
      _i++
    ) {
      var _key = _Object$keys[_i];
      map2.items.push(schema.createPair(_key, obj[_key], ctx));
    }
  }
  if (typeof schema.sortMapEntries === "function") {
    map2.items.sort(schema.sortMapEntries);
  }
  return map2;
}
var map = {
  createNode: createMap,
  default: true,
  nodeClass: YAMLMap,
  tag: "tag:yaml.org,2002:map",
  resolve: resolveMap,
};
function createSeq(schema, obj, ctx) {
  var seq2 = new YAMLSeq(schema);
  if (obj && obj[Symbol.iterator]) {
    var _iterator = _createForOfIteratorHelper(obj), _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var it = _step.value;
        var v = schema.createNode(it, ctx.wrapScalars, null, ctx);
        seq2.items.push(v);
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  }
  return seq2;
}
var seq = {
  createNode: createSeq,
  default: true,
  nodeClass: YAMLSeq,
  tag: "tag:yaml.org,2002:seq",
  resolve: resolveSeq,
};
var string = {
  identify: function identify7(value) {
    return typeof value === "string";
  },
  default: true,
  tag: "tag:yaml.org,2002:str",
  resolve: resolveString,
  stringify: function stringify3(item, ctx, onComment, onChompKeep) {
    ctx = Object.assign({
      actualString: true,
    }, ctx);
    return stringifyString(item, ctx, onComment, onChompKeep);
  },
  options: strOptions,
};
var failsafe = [
  map,
  seq,
  string,
];
var intIdentify$2 = function intIdentify(value) {
  return typeof value === "bigint" || Number.isInteger(value);
};
var intResolve$1 = function intResolve(src, part, radix) {
  return intOptions.asBigInt ? BigInt(src) : parseInt(part, radix);
};
function intStringify$1(node, radix, prefix) {
  var value = node.value;
  if (intIdentify$2(value) && value >= 0) return prefix + value.toString(radix);
  return stringifyNumber(node);
}
var nullObj = {
  identify: function identify8(value) {
    return value == null;
  },
  createNode: function createNode(schema, value, ctx) {
    return ctx.wrapScalars ? new Scalar(null) : null;
  },
  default: true,
  tag: "tag:yaml.org,2002:null",
  test: /^(?:~|[Nn]ull|NULL)?$/,
  resolve: function resolve5() {
    return null;
  },
  options: nullOptions,
  stringify: function stringify4() {
    return nullOptions.nullStr;
  },
};
var boolObj = {
  identify: function identify9(value) {
    return typeof value === "boolean";
  },
  default: true,
  tag: "tag:yaml.org,2002:bool",
  test: /^(?:[Tt]rue|TRUE|[Ff]alse|FALSE)$/,
  resolve: function resolve6(str) {
    return str[0] === "t" || str[0] === "T";
  },
  options: boolOptions,
  stringify: function stringify5(_ref) {
    var value = _ref.value;
    return value ? boolOptions.trueStr : boolOptions.falseStr;
  },
};
var octObj = {
  identify: function identify10(value) {
    return intIdentify$2(value) && value >= 0;
  },
  default: true,
  tag: "tag:yaml.org,2002:int",
  format: "OCT",
  test: /^0o([0-7]+)$/,
  resolve: function resolve7(str, oct) {
    return intResolve$1(str, oct, 8);
  },
  options: intOptions,
  stringify: function stringify6(node) {
    return intStringify$1(node, 8, "0o");
  },
};
var intObj = {
  identify: intIdentify$2,
  default: true,
  tag: "tag:yaml.org,2002:int",
  test: /^[-+]?[0-9]+$/,
  resolve: function resolve8(str) {
    return intResolve$1(str, str, 10);
  },
  options: intOptions,
  stringify: stringifyNumber,
};
var hexObj = {
  identify: function identify11(value) {
    return intIdentify$2(value) && value >= 0;
  },
  default: true,
  tag: "tag:yaml.org,2002:int",
  format: "HEX",
  test: /^0x([0-9a-fA-F]+)$/,
  resolve: function resolve9(str, hex) {
    return intResolve$1(str, hex, 16);
  },
  options: intOptions,
  stringify: function stringify7(node) {
    return intStringify$1(node, 16, "0x");
  },
};
var nanObj = {
  identify: function identify12(value) {
    return typeof value === "number";
  },
  default: true,
  tag: "tag:yaml.org,2002:float",
  test: /^(?:[-+]?\.inf|(\.nan))$/i,
  resolve: function resolve10(str, nan) {
    return nan
      ? NaN
      : str[0] === "-"
      ? Number.NEGATIVE_INFINITY
      : Number.POSITIVE_INFINITY;
  },
  stringify: stringifyNumber,
};
var expObj = {
  identify: function identify13(value) {
    return typeof value === "number";
  },
  default: true,
  tag: "tag:yaml.org,2002:float",
  format: "EXP",
  test: /^[-+]?(?:\.[0-9]+|[0-9]+(?:\.[0-9]*)?)[eE][-+]?[0-9]+$/,
  resolve: function resolve11(str) {
    return parseFloat(str);
  },
  stringify: function stringify8(_ref2) {
    var value = _ref2.value;
    return Number(value).toExponential();
  },
};
var floatObj = {
  identify: function identify14(value) {
    return typeof value === "number";
  },
  default: true,
  tag: "tag:yaml.org,2002:float",
  test: /^[-+]?(?:\.([0-9]+)|[0-9]+\.([0-9]*))$/,
  resolve: function resolve12(str, frac1, frac2) {
    var frac = frac1 || frac2;
    var node = new Scalar(parseFloat(str));
    if (frac && frac[frac.length - 1] === "0") {
      node.minFractionDigits = frac.length;
    }
    return node;
  },
  stringify: stringifyNumber,
};
var core = failsafe.concat([
  nullObj,
  boolObj,
  octObj,
  intObj,
  hexObj,
  nanObj,
  expObj,
  floatObj,
]);
var intIdentify$1 = function intIdentify2(value) {
  return typeof value === "bigint" || Number.isInteger(value);
};
var stringifyJSON = function stringifyJSON2(_ref) {
  var value = _ref.value;
  return JSON.stringify(value);
};
var json = [
  map,
  seq,
  {
    identify: function identify15(value) {
      return typeof value === "string";
    },
    default: true,
    tag: "tag:yaml.org,2002:str",
    resolve: resolveString,
    stringify: stringifyJSON,
  },
  {
    identify: function identify16(value) {
      return value == null;
    },
    createNode: function createNode2(schema, value, ctx) {
      return ctx.wrapScalars ? new Scalar(null) : null;
    },
    default: true,
    tag: "tag:yaml.org,2002:null",
    test: /^null$/,
    resolve: function resolve13() {
      return null;
    },
    stringify: stringifyJSON,
  },
  {
    identify: function identify17(value) {
      return typeof value === "boolean";
    },
    default: true,
    tag: "tag:yaml.org,2002:bool",
    test: /^true|false$/,
    resolve: function resolve14(str) {
      return str === "true";
    },
    stringify: stringifyJSON,
  },
  {
    identify: intIdentify$1,
    default: true,
    tag: "tag:yaml.org,2002:int",
    test: /^-?(?:0|[1-9][0-9]*)$/,
    resolve: function resolve15(str) {
      return intOptions.asBigInt ? BigInt(str) : parseInt(str, 10);
    },
    stringify: function stringify9(_ref2) {
      var value = _ref2.value;
      return intIdentify$1(value) ? value.toString() : JSON.stringify(value);
    },
  },
  {
    identify: function identify18(value) {
      return typeof value === "number";
    },
    default: true,
    tag: "tag:yaml.org,2002:float",
    test: /^-?(?:0|[1-9][0-9]*)(?:\.[0-9]*)?(?:[eE][-+]?[0-9]+)?$/,
    resolve: function resolve16(str) {
      return parseFloat(str);
    },
    stringify: stringifyJSON,
  },
];
json.scalarFallback = function (str) {
  throw new SyntaxError("Unresolved plain scalar ".concat(JSON.stringify(str)));
};
var boolStringify = function boolStringify2(_ref) {
  var value = _ref.value;
  return value ? boolOptions.trueStr : boolOptions.falseStr;
};
var intIdentify3 = function intIdentify4(value) {
  return typeof value === "bigint" || Number.isInteger(value);
};
function intResolve2(sign, src, radix) {
  var str = src.replace(/_/g, "");
  if (intOptions.asBigInt) {
    switch (radix) {
      case 2:
        str = "0b".concat(str);
        break;
      case 8:
        str = "0o".concat(str);
        break;
      case 16:
        str = "0x".concat(str);
        break;
    }
    var _n = BigInt(str);
    return sign === "-" ? BigInt(-1) * _n : _n;
  }
  var n = parseInt(str, radix);
  return sign === "-" ? -1 * n : n;
}
function intStringify(node, radix, prefix) {
  var value = node.value;
  if (intIdentify3(value)) {
    var str = value.toString(radix);
    return value < 0 ? "-" + prefix + str.substr(1) : prefix + str;
  }
  return stringifyNumber(node);
}
var yaml11 = failsafe.concat(
  [
    {
      identify: function identify19(value) {
        return value == null;
      },
      createNode: function createNode3(schema, value, ctx) {
        return ctx.wrapScalars ? new Scalar(null) : null;
      },
      default: true,
      tag: "tag:yaml.org,2002:null",
      test: /^(?:~|[Nn]ull|NULL)?$/,
      resolve: function resolve17() {
        return null;
      },
      options: nullOptions,
      stringify: function stringify10() {
        return nullOptions.nullStr;
      },
    },
    {
      identify: function identify20(value) {
        return typeof value === "boolean";
      },
      default: true,
      tag: "tag:yaml.org,2002:bool",
      test: /^(?:Y|y|[Yy]es|YES|[Tt]rue|TRUE|[Oo]n|ON)$/,
      resolve: function resolve18() {
        return true;
      },
      options: boolOptions,
      stringify: boolStringify,
    },
    {
      identify: function identify21(value) {
        return typeof value === "boolean";
      },
      default: true,
      tag: "tag:yaml.org,2002:bool",
      test: /^(?:N|n|[Nn]o|NO|[Ff]alse|FALSE|[Oo]ff|OFF)$/i,
      resolve: function resolve19() {
        return false;
      },
      options: boolOptions,
      stringify: boolStringify,
    },
    {
      identify: intIdentify3,
      default: true,
      tag: "tag:yaml.org,2002:int",
      format: "BIN",
      test: /^([-+]?)0b([0-1_]+)$/,
      resolve: function resolve20(str, sign, bin) {
        return intResolve2(sign, bin, 2);
      },
      stringify: function stringify11(node) {
        return intStringify(node, 2, "0b");
      },
    },
    {
      identify: intIdentify3,
      default: true,
      tag: "tag:yaml.org,2002:int",
      format: "OCT",
      test: /^([-+]?)0([0-7_]+)$/,
      resolve: function resolve21(str, sign, oct) {
        return intResolve2(sign, oct, 8);
      },
      stringify: function stringify12(node) {
        return intStringify(node, 8, "0");
      },
    },
    {
      identify: intIdentify3,
      default: true,
      tag: "tag:yaml.org,2002:int",
      test: /^([-+]?)([0-9][0-9_]*)$/,
      resolve: function resolve22(str, sign, abs) {
        return intResolve2(sign, abs, 10);
      },
      stringify: stringifyNumber,
    },
    {
      identify: intIdentify3,
      default: true,
      tag: "tag:yaml.org,2002:int",
      format: "HEX",
      test: /^([-+]?)0x([0-9a-fA-F_]+)$/,
      resolve: function resolve23(str, sign, hex) {
        return intResolve2(sign, hex, 16);
      },
      stringify: function stringify13(node) {
        return intStringify(node, 16, "0x");
      },
    },
    {
      identify: function identify22(value) {
        return typeof value === "number";
      },
      default: true,
      tag: "tag:yaml.org,2002:float",
      test: /^(?:[-+]?\.inf|(\.nan))$/i,
      resolve: function resolve24(str, nan) {
        return nan
          ? NaN
          : str[0] === "-"
          ? Number.NEGATIVE_INFINITY
          : Number.POSITIVE_INFINITY;
      },
      stringify: stringifyNumber,
    },
    {
      identify: function identify23(value) {
        return typeof value === "number";
      },
      default: true,
      tag: "tag:yaml.org,2002:float",
      format: "EXP",
      test: /^[-+]?([0-9][0-9_]*)?(\.[0-9_]*)?[eE][-+]?[0-9]+$/,
      resolve: function resolve25(str) {
        return parseFloat(str.replace(/_/g, ""));
      },
      stringify: function stringify14(_ref2) {
        var value = _ref2.value;
        return Number(value).toExponential();
      },
    },
    {
      identify: function identify24(value) {
        return typeof value === "number";
      },
      default: true,
      tag: "tag:yaml.org,2002:float",
      test: /^[-+]?(?:[0-9][0-9_]*)?\.([0-9_]*)$/,
      resolve: function resolve26(str, frac) {
        var node = new Scalar(parseFloat(str.replace(/_/g, "")));
        if (frac) {
          var f = frac.replace(/_/g, "");
          if (f[f.length - 1] === "0") node.minFractionDigits = f.length;
        }
        return node;
      },
      stringify: stringifyNumber,
    },
  ],
  binary,
  omap,
  pairs,
  set,
  intTime,
  floatTime,
  timestamp,
);
var schemas = {
  core,
  failsafe,
  json,
  yaml11,
};
var tags = {
  binary,
  bool: boolObj,
  float: floatObj,
  floatExp: expObj,
  floatNaN: nanObj,
  floatTime,
  int: intObj,
  intHex: hexObj,
  intOct: octObj,
  intTime,
  map,
  null: nullObj,
  omap,
  pairs,
  seq,
  set,
  timestamp,
};
function findTagObject(value, tagName, tags2) {
  if (tagName) {
    var match = tags2.filter(function (t) {
      return t.tag === tagName;
    });
    var tagObj = match.find(function (t) {
      return !t.format;
    }) || match[0];
    if (!tagObj) throw new Error("Tag ".concat(tagName, " not found"));
    return tagObj;
  }
  return tags2.find(function (t) {
    return (t.identify && t.identify(value) ||
      t.class && value instanceof t.class) && !t.format;
  });
}
function createNode4(value, tagName, ctx) {
  if (value instanceof Node2) return value;
  var defaultPrefix = ctx.defaultPrefix,
    onTagObj = ctx.onTagObj,
    prevObjects = ctx.prevObjects,
    schema = ctx.schema,
    wrapScalars = ctx.wrapScalars;
  if (tagName && tagName.startsWith("!!")) {
    tagName = defaultPrefix + tagName.slice(2);
  }
  var tagObj = findTagObject(value, tagName, schema.tags);
  if (!tagObj) {
    if (typeof value.toJSON === "function") value = value.toJSON();
    if (!value || _typeof(value) !== "object") {
      return wrapScalars ? new Scalar(value) : value;
    }
    tagObj = value instanceof Map ? map : value[Symbol.iterator] ? seq : map;
  }
  if (onTagObj) {
    onTagObj(tagObj);
    delete ctx.onTagObj;
  }
  var obj = {
    value: void 0,
    node: void 0,
  };
  if (value && _typeof(value) === "object" && prevObjects) {
    var prev = prevObjects.get(value);
    if (prev) {
      var alias = new Alias2(prev);
      ctx.aliasNodes.push(alias);
      return alias;
    }
    obj.value = value;
    prevObjects.set(value, obj);
  }
  obj.node = tagObj.createNode
    ? tagObj.createNode(ctx.schema, value, ctx)
    : wrapScalars
    ? new Scalar(value)
    : value;
  if (tagName && obj.node instanceof Node2) obj.node.tag = tagName;
  return obj.node;
}
function getSchemaTags(schemas2, knownTags, customTags, schemaId) {
  var tags2 = schemas2[schemaId.replace(/\W/g, "")];
  if (!tags2) {
    var keys = Object.keys(schemas2).map(function (key) {
      return JSON.stringify(key);
    }).join(", ");
    throw new Error(
      'Unknown schema "'.concat(schemaId, '"; use one of ').concat(keys),
    );
  }
  if (Array.isArray(customTags)) {
    var _iterator = _createForOfIteratorHelper(customTags), _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var tag = _step.value;
        tags2 = tags2.concat(tag);
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  } else if (typeof customTags === "function") {
    tags2 = customTags(tags2.slice());
  }
  for (var i = 0; i < tags2.length; ++i) {
    var _tag = tags2[i];
    if (typeof _tag === "string") {
      var tagObj = knownTags[_tag];
      if (!tagObj) {
        var _keys = Object.keys(knownTags).map(function (key) {
          return JSON.stringify(key);
        }).join(", ");
        throw new Error(
          'Unknown custom tag "'.concat(_tag, '"; use one of ').concat(_keys),
        );
      }
      tags2[i] = tagObj;
    }
  }
  return tags2;
}
var sortMapEntriesByKey = function sortMapEntriesByKey2(a, b) {
  return a.key < b.key ? -1 : a.key > b.key ? 1 : 0;
};
var Schema = function () {
  function Schema2(_ref) {
    var customTags = _ref.customTags,
      merge = _ref.merge,
      schema = _ref.schema,
      sortMapEntries = _ref.sortMapEntries,
      deprecatedCustomTags = _ref.tags;
    _classCallCheck(this, Schema2);
    this.merge = !!merge;
    this.name = schema;
    this.sortMapEntries = sortMapEntries === true
      ? sortMapEntriesByKey
      : sortMapEntries || null;
    if (!customTags && deprecatedCustomTags) {
      warnOptionDeprecation("tags", "customTags");
    }
    this.tags = getSchemaTags(
      schemas,
      tags,
      customTags || deprecatedCustomTags,
      schema,
    );
  }
  _createClass(Schema2, [
    {
      key: "createNode",
      value: function createNode$1(value, wrapScalars, tagName, ctx) {
        var baseCtx = {
          defaultPrefix: Schema2.defaultPrefix,
          schema: this,
          wrapScalars,
        };
        var createCtx = ctx ? Object.assign(ctx, baseCtx) : baseCtx;
        return createNode4(value, tagName, createCtx);
      },
    },
    {
      key: "createPair",
      value: function createPair(key, value, ctx) {
        if (!ctx) {
          ctx = {
            wrapScalars: true,
          };
        }
        var k = this.createNode(key, ctx.wrapScalars, null, ctx);
        var v = this.createNode(value, ctx.wrapScalars, null, ctx);
        return new Pair(k, v);
      },
    },
  ]);
  return Schema2;
}();
_defineProperty(Schema, "defaultPrefix", defaultTagPrefix);
_defineProperty(Schema, "defaultTags", defaultTags);
var defaultOptions = {
  anchorPrefix: "a",
  customTags: null,
  indent: 2,
  indentSeq: true,
  keepCstNodes: false,
  keepNodeTypes: true,
  keepBlobsInJSON: true,
  mapAsMap: false,
  maxAliasCount: 100,
  prettyErrors: false,
  simpleKeys: false,
  version: "1.2",
};
var scalarOptions = {
  get binary() {
    return binaryOptions;
  },
  set binary(opt) {
    Object.assign(binaryOptions, opt);
  },
  get bool() {
    return boolOptions;
  },
  set bool(opt1) {
    Object.assign(boolOptions, opt1);
  },
  get int() {
    return intOptions;
  },
  set int(opt2) {
    Object.assign(intOptions, opt2);
  },
  get null() {
    return nullOptions;
  },
  set null(opt3) {
    Object.assign(nullOptions, opt3);
  },
  get str() {
    return strOptions;
  },
  set str(opt4) {
    Object.assign(strOptions, opt4);
  },
};
var documentOptions = {
  "1.0": {
    schema: "yaml-1.1",
    merge: true,
    tagPrefixes: [
      {
        handle: "!",
        prefix: defaultTagPrefix,
      },
      {
        handle: "!!",
        prefix: "tag:private.yaml.org,2002:",
      },
    ],
  },
  1.1: {
    schema: "yaml-1.1",
    merge: true,
    tagPrefixes: [
      {
        handle: "!",
        prefix: "!",
      },
      {
        handle: "!!",
        prefix: defaultTagPrefix,
      },
    ],
  },
  1.2: {
    schema: "core",
    merge: false,
    tagPrefixes: [
      {
        handle: "!",
        prefix: "!",
      },
      {
        handle: "!!",
        prefix: defaultTagPrefix,
      },
    ],
  },
};
function stringifyTag(doc, tag) {
  if ((doc.version || doc.options.version) === "1.0") {
    var priv = tag.match(/^tag:private\.yaml\.org,2002:([^:/]+)$/);
    if (priv) return "!" + priv[1];
    var vocab = tag.match(/^tag:([a-zA-Z0-9-]+)\.yaml\.org,2002:(.*)/);
    return vocab
      ? "!".concat(vocab[1], "/").concat(vocab[2])
      : "!".concat(tag.replace(/^tag:/, ""));
  }
  var p = doc.tagPrefixes.find(function (p2) {
    return tag.indexOf(p2.prefix) === 0;
  });
  if (!p) {
    var dtp = doc.getDefaults().tagPrefixes;
    p = dtp && dtp.find(function (p2) {
      return tag.indexOf(p2.prefix) === 0;
    });
  }
  if (!p) return tag[0] === "!" ? tag : "!<".concat(tag, ">");
  var suffix = tag.substr(p.prefix.length).replace(/[!,[\]{}]/g, function (ch) {
    return ({
      "!": "%21",
      ",": "%2C",
      "[": "%5B",
      "]": "%5D",
      "{": "%7B",
      "}": "%7D",
    })[ch];
  });
  return p.handle + suffix;
}
function getTagObject(tags1, item) {
  if (item instanceof Alias2) return Alias2;
  if (item.tag) {
    var match = tags1.filter(function (t) {
      return t.tag === item.tag;
    });
    if (match.length > 0) {
      return match.find(function (t) {
        return t.format === item.format;
      }) || match[0];
    }
  }
  var tagObj, obj;
  if (item instanceof Scalar) {
    obj = item.value;
    var _match = tags1.filter(function (t) {
      return t.identify && t.identify(obj) || t.class && obj instanceof t.class;
    });
    tagObj = _match.find(function (t) {
      return t.format === item.format;
    }) || _match.find(function (t) {
      return !t.format;
    });
  } else {
    obj = item;
    tagObj = tags1.find(function (t) {
      return t.nodeClass && obj instanceof t.nodeClass;
    });
  }
  if (!tagObj) {
    var name = obj && obj.constructor ? obj.constructor.name : _typeof(obj);
    throw new Error("Tag not resolved for ".concat(name, " value"));
  }
  return tagObj;
}
function stringifyProps(node, tagObj, _ref) {
  var anchors = _ref.anchors, doc = _ref.doc;
  var props = [];
  var anchor = doc.anchors.getName(node);
  if (anchor) {
    anchors[anchor] = node;
    props.push("&".concat(anchor));
  }
  if (node.tag) {
    props.push(stringifyTag(doc, node.tag));
  } else if (!tagObj.default) {
    props.push(stringifyTag(doc, tagObj.tag));
  }
  return props.join(" ");
}
function stringify$1(item, ctx, onComment, onChompKeep) {
  var _ctx$doc = ctx.doc, anchors = _ctx$doc.anchors, schema = _ctx$doc.schema;
  var tagObj;
  if (!(item instanceof Node2)) {
    var createCtx = {
      aliasNodes: [],
      onTagObj: function onTagObj(o) {
        return tagObj = o;
      },
      prevObjects: new Map(),
    };
    item = schema.createNode(item, true, null, createCtx);
    var _iterator = _createForOfIteratorHelper(createCtx.aliasNodes), _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var alias = _step.value;
        alias.source = alias.source.node;
        var name = anchors.getName(alias.source);
        if (!name) {
          name = anchors.newName();
          anchors.map[name] = alias.source;
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  }
  if (item instanceof Pair) return item.toString(ctx, onComment, onChompKeep);
  if (!tagObj) tagObj = getTagObject(schema.tags, item);
  var props = stringifyProps(item, tagObj, ctx);
  if (props.length > 0) {
    ctx.indentAtStart = (ctx.indentAtStart || 0) + props.length + 1;
  }
  var str = typeof tagObj.stringify === "function"
    ? tagObj.stringify(item, ctx, onComment, onChompKeep)
    : item instanceof Scalar
    ? stringifyString(item, ctx, onComment, onChompKeep)
    : item.toString(ctx, onComment, onChompKeep);
  if (!props) return str;
  return item instanceof Scalar || str[0] === "{" || str[0] === "["
    ? "".concat(props, " ").concat(str)
    : "".concat(props, "\n").concat(ctx.indent).concat(str);
}
var Anchors = function () {
  function Anchors2(prefix) {
    _classCallCheck(this, Anchors2);
    _defineProperty(this, "map", Object.create(null));
    this.prefix = prefix;
  }
  _createClass(Anchors2, [
    {
      key: "createAlias",
      value: function createAlias(node, name) {
        this.setAnchor(node, name);
        return new Alias2(node);
      },
    },
    {
      key: "createMergePair",
      value: function createMergePair() {
        var _this = this;
        var merge = new Merge();
        for (
          var _len = arguments.length, sources = new Array(_len), _key = 0;
          _key < _len;
          _key++
        ) {
          sources[_key] = arguments[_key];
        }
        merge.value.items = sources.map(function (s) {
          if (s instanceof Alias2) {
            if (s.source instanceof YAMLMap) return s;
          } else if (s instanceof YAMLMap) {
            return _this.createAlias(s);
          }
          throw new Error("Merge sources must be Map nodes or their Aliases");
        });
        return merge;
      },
    },
    {
      key: "getName",
      value: function getName(node) {
        var map1 = this.map;
        return Object.keys(map1).find(function (a) {
          return map1[a] === node;
        });
      },
    },
    {
      key: "getNames",
      value: function getNames() {
        return Object.keys(this.map);
      },
    },
    {
      key: "getNode",
      value: function getNode(name) {
        return this.map[name];
      },
    },
    {
      key: "newName",
      value: function newName(prefix) {
        if (!prefix) prefix = this.prefix;
        var names = Object.keys(this.map);
        for (var i = 1; true; ++i) {
          var name = "".concat(prefix).concat(i);
          if (!names.includes(name)) return name;
        }
      },
    },
    {
      key: "resolveNodes",
      value: function resolveNodes() {
        var map1 = this.map, _cstAliases = this._cstAliases;
        Object.keys(map1).forEach(function (a) {
          map1[a] = map1[a].resolved;
        });
        _cstAliases.forEach(function (a) {
          a.source = a.source.resolved;
        });
        delete this._cstAliases;
      },
    },
    {
      key: "setAnchor",
      value: function setAnchor(node, name) {
        if (node != null && !Anchors2.validAnchorNode(node)) {
          throw new Error(
            "Anchors may only be set for Scalar, Seq and Map nodes",
          );
        }
        if (name && /[\x00-\x19\s,[\]{}]/.test(name)) {
          throw new Error(
            "Anchor names must not contain whitespace or control characters",
          );
        }
        var map1 = this.map;
        var prev = node && Object.keys(map1).find(function (a) {
          return map1[a] === node;
        });
        if (prev) {
          if (!name) {
            return prev;
          } else if (prev !== name) {
            delete map1[prev];
            map1[name] = node;
          }
        } else {
          if (!name) {
            if (!node) return null;
            name = this.newName();
          }
          map1[name] = node;
        }
        return name;
      },
    },
  ], [
    {
      key: "validAnchorNode",
      value: function validAnchorNode(node) {
        return node instanceof Scalar || node instanceof YAMLSeq ||
          node instanceof YAMLMap;
      },
    },
  ]);
  return Anchors2;
}();
var visit = function visit2(node, tags1) {
  if (node && _typeof(node) === "object") {
    var tag = node.tag;
    if (node instanceof Collection1) {
      if (tag) tags1[tag] = true;
      node.items.forEach(function (n) {
        return visit2(n, tags1);
      });
    } else if (node instanceof Pair) {
      visit2(node.key, tags1);
      visit2(node.value, tags1);
    } else if (node instanceof Scalar) {
      if (tag) tags1[tag] = true;
    }
  }
  return tags1;
};
var listTagNames = function listTagNames2(node) {
  return Object.keys(visit(node, {}));
};
function parseContents(doc, contents) {
  var comments = {
    before: [],
    after: [],
  };
  var body = void 0;
  var spaceBefore = false;
  var _iterator = _createForOfIteratorHelper(contents), _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var node = _step.value;
      if (node.valueRange) {
        if (body !== void 0) {
          var msg =
            "Document contains trailing content not separated by a ... or --- line";
          doc.errors.push(new YAMLSyntaxError(node, msg));
          break;
        }
        var res = resolveNode(doc, node);
        if (spaceBefore) {
          res.spaceBefore = true;
          spaceBefore = false;
        }
        body = res;
      } else if (node.comment !== null) {
        var cc = body === void 0 ? comments.before : comments.after;
        cc.push(node.comment);
      } else if (node.type === Type.BLANK_LINE) {
        spaceBefore = true;
        if (
          body === void 0 && comments.before.length > 0 && !doc.commentBefore
        ) {
          doc.commentBefore = comments.before.join("\n");
          comments.before = [];
        }
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  doc.contents = body || null;
  if (!body) {
    doc.comment = comments.before.concat(comments.after).join("\n") || null;
  } else {
    var cb = comments.before.join("\n");
    if (cb) {
      var cbNode = body instanceof Collection1 && body.items[0]
        ? body.items[0]
        : body;
      cbNode.commentBefore = cbNode.commentBefore
        ? "".concat(cb, "\n").concat(cbNode.commentBefore)
        : cb;
    }
    doc.comment = comments.after.join("\n") || null;
  }
}
function resolveTagDirective(_ref, directive) {
  var tagPrefixes = _ref.tagPrefixes;
  var _directive$parameters = _slicedToArray(directive.parameters, 2),
    handle = _directive$parameters[0],
    prefix = _directive$parameters[1];
  if (!handle || !prefix) {
    var msg = "Insufficient parameters given for %TAG directive";
    throw new YAMLSemanticError(directive, msg);
  }
  if (
    tagPrefixes.some(function (p) {
      return p.handle === handle;
    })
  ) {
    var _msg =
      "The %TAG directive must only be given at most once per handle in the same document.";
    throw new YAMLSemanticError(directive, _msg);
  }
  return {
    handle,
    prefix,
  };
}
function resolveYamlDirective(doc, directive) {
  var _directive$parameters2 = _slicedToArray(directive.parameters, 1),
    version1 = _directive$parameters2[0];
  if (directive.name === "YAML:1.0") version1 = "1.0";
  if (!version1) {
    var msg = "Insufficient parameters given for %YAML directive";
    throw new YAMLSemanticError(directive, msg);
  }
  if (!documentOptions[version1]) {
    var v0 = doc.version || doc.options.version;
    var _msg2 = "Document will be parsed as YAML ".concat(
      v0,
      " rather than YAML ",
    ).concat(version1);
    doc.warnings.push(new YAMLWarning(directive, _msg2));
  }
  return version1;
}
function parseDirectives(doc, directives, prevDoc) {
  var directiveComments = [];
  var hasDirectives = false;
  var _iterator = _createForOfIteratorHelper(directives), _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var directive = _step.value;
      var comment = directive.comment, name = directive.name;
      switch (name) {
        case "TAG":
          try {
            doc.tagPrefixes.push(resolveTagDirective(doc, directive));
          } catch (error) {
            doc.errors.push(error);
          }
          hasDirectives = true;
          break;
        case "YAML":
        case "YAML:1.0":
          if (doc.version) {
            var msg =
              "The %YAML directive must only be given at most once per document.";
            doc.errors.push(new YAMLSemanticError(directive, msg));
          }
          try {
            doc.version = resolveYamlDirective(doc, directive);
          } catch (error) {
            doc.errors.push(error);
          }
          hasDirectives = true;
          break;
        default:
          if (name) {
            var _msg3 =
              "YAML only supports %TAG and %YAML directives, and not %".concat(
                name,
              );
            doc.warnings.push(new YAMLWarning(directive, _msg3));
          }
      }
      if (comment) directiveComments.push(comment);
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  if (
    prevDoc && !hasDirectives &&
    (doc.version || prevDoc.version || doc.options.version) === "1.1"
  ) {
    var copyTagPrefix = function copyTagPrefix2(_ref2) {
      var handle = _ref2.handle, prefix = _ref2.prefix;
      return {
        handle,
        prefix,
      };
    };
    doc.tagPrefixes = prevDoc.tagPrefixes.map(copyTagPrefix);
    doc.version = prevDoc.version;
  }
  doc.commentBefore = directiveComments.join("\n") || null;
}
function assertCollection(contents) {
  if (contents instanceof Collection1) return true;
  throw new Error("Expected a YAML collection as document contents");
}
var Document$1 = function () {
  function Document2(options) {
    _classCallCheck(this, Document2);
    this.anchors = new Anchors(options.anchorPrefix);
    this.commentBefore = null;
    this.comment = null;
    this.contents = null;
    this.directivesEndMarker = null;
    this.errors = [];
    this.options = options;
    this.schema = null;
    this.tagPrefixes = [];
    this.version = null;
    this.warnings = [];
  }
  _createClass(Document2, [
    {
      key: "add",
      value: function add(value) {
        assertCollection(this.contents);
        return this.contents.add(value);
      },
    },
    {
      key: "addIn",
      value: function addIn(path, value) {
        assertCollection(this.contents);
        this.contents.addIn(path, value);
      },
    },
    {
      key: "delete",
      value: function _delete(key) {
        assertCollection(this.contents);
        return this.contents.delete(key);
      },
    },
    {
      key: "deleteIn",
      value: function deleteIn(path) {
        if (isEmptyPath(path)) {
          if (this.contents == null) return false;
          this.contents = null;
          return true;
        }
        assertCollection(this.contents);
        return this.contents.deleteIn(path);
      },
    },
    {
      key: "getDefaults",
      value: function getDefaults() {
        return Document2.defaults[this.version] ||
          Document2.defaults[this.options.version] || {};
      },
    },
    {
      key: "get",
      value: function get(key, keepScalar) {
        return this.contents instanceof Collection1
          ? this.contents.get(key, keepScalar)
          : void 0;
      },
    },
    {
      key: "getIn",
      value: function getIn(path, keepScalar) {
        if (isEmptyPath(path)) {
          return !keepScalar && this.contents instanceof Scalar
            ? this.contents.value
            : this.contents;
        }
        return this.contents instanceof Collection1
          ? this.contents.getIn(path, keepScalar)
          : void 0;
      },
    },
    {
      key: "has",
      value: function has(key) {
        return this.contents instanceof Collection1
          ? this.contents.has(key)
          : false;
      },
    },
    {
      key: "hasIn",
      value: function hasIn(path) {
        if (isEmptyPath(path)) return this.contents !== void 0;
        return this.contents instanceof Collection1
          ? this.contents.hasIn(path)
          : false;
      },
    },
    {
      key: "set",
      value: function set1(key, value) {
        assertCollection(this.contents);
        this.contents.set(key, value);
      },
    },
    {
      key: "setIn",
      value: function setIn(path, value) {
        if (isEmptyPath(path)) this.contents = value;
        else {
          assertCollection(this.contents);
          this.contents.setIn(path, value);
        }
      },
    },
    {
      key: "setSchema",
      value: function setSchema(id, customTags) {
        if (!id && !customTags && this.schema) return;
        if (typeof id === "number") id = id.toFixed(1);
        if (id === "1.0" || id === "1.1" || id === "1.2") {
          if (this.version) this.version = id;
          else this.options.version = id;
          delete this.options.schema;
        } else if (id && typeof id === "string") {
          this.options.schema = id;
        }
        if (Array.isArray(customTags)) this.options.customTags = customTags;
        var opt = Object.assign({}, this.getDefaults(), this.options);
        this.schema = new Schema(opt);
      },
    },
    {
      key: "parse",
      value: function parse21(node, prevDoc) {
        if (this.options.keepCstNodes) this.cstNode = node;
        if (this.options.keepNodeTypes) this.type = "DOCUMENT";
        var _node$directives = node.directives,
          directives = _node$directives === void 0 ? [] : _node$directives,
          _node$contents = node.contents,
          contents = _node$contents === void 0 ? [] : _node$contents,
          directivesEndMarker = node.directivesEndMarker,
          error = node.error,
          valueRange = node.valueRange;
        if (error) {
          if (!error.source) error.source = this;
          this.errors.push(error);
        }
        parseDirectives(this, directives, prevDoc);
        if (directivesEndMarker) this.directivesEndMarker = true;
        this.range = valueRange
          ? [
            valueRange.start,
            valueRange.end,
          ]
          : null;
        this.setSchema();
        this.anchors._cstAliases = [];
        parseContents(this, contents);
        this.anchors.resolveNodes();
        if (this.options.prettyErrors) {
          var _iterator = _createForOfIteratorHelper(this.errors), _step;
          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              var _error = _step.value;
              if (_error instanceof YAMLError) _error.makePretty();
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }
          var _iterator2 = _createForOfIteratorHelper(this.warnings), _step2;
          try {
            for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
              var warn2 = _step2.value;
              if (warn2 instanceof YAMLError) warn2.makePretty();
            }
          } catch (err) {
            _iterator2.e(err);
          } finally {
            _iterator2.f();
          }
        }
        return this;
      },
    },
    {
      key: "listNonDefaultTags",
      value: function listNonDefaultTags() {
        return listTagNames(this.contents).filter(function (t) {
          return t.indexOf(Schema.defaultPrefix) !== 0;
        });
      },
    },
    {
      key: "setTagPrefix",
      value: function setTagPrefix(handle, prefix) {
        if (handle[0] !== "!" || handle[handle.length - 1] !== "!") {
          throw new Error("Handle must start and end with !");
        }
        if (prefix) {
          var prev = this.tagPrefixes.find(function (p) {
            return p.handle === handle;
          });
          if (prev) prev.prefix = prefix;
          else {
            this.tagPrefixes.push({
              handle,
              prefix,
            });
          }
        } else {
          this.tagPrefixes = this.tagPrefixes.filter(function (p) {
            return p.handle !== handle;
          });
        }
      },
    },
    {
      key: "toJSON",
      value: function toJSON$1(arg, onAnchor) {
        var _this = this;
        var _this$options = this.options,
          keepBlobsInJSON = _this$options.keepBlobsInJSON,
          mapAsMap = _this$options.mapAsMap,
          maxAliasCount = _this$options.maxAliasCount;
        var keep = keepBlobsInJSON &&
          (typeof arg !== "string" || !(this.contents instanceof Scalar));
        var ctx = {
          doc: this,
          indentStep: "  ",
          keep,
          mapAsMap: keep && !!mapAsMap,
          maxAliasCount,
          stringify: stringify$1,
        };
        var anchorNames = Object.keys(this.anchors.map);
        if (anchorNames.length > 0) {
          ctx.anchors = new Map(anchorNames.map(function (name) {
            return [
              _this.anchors.map[name],
              {
                alias: [],
                aliasCount: 0,
                count: 1,
              },
            ];
          }));
        }
        var res = toJSON(this.contents, arg, ctx);
        if (typeof onAnchor === "function" && ctx.anchors) {
          var _iterator3 = _createForOfIteratorHelper(ctx.anchors.values()),
            _step3;
          try {
            for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
              var _step3$value = _step3.value,
                count = _step3$value.count,
                _res = _step3$value.res;
              onAnchor(_res, count);
            }
          } catch (err) {
            _iterator3.e(err);
          } finally {
            _iterator3.f();
          }
        }
        return res;
      },
    },
    {
      key: "toString",
      value: function toString1() {
        if (this.errors.length > 0) {
          throw new Error("Document with errors cannot be stringified");
        }
        var indentSize = this.options.indent;
        if (!Number.isInteger(indentSize) || indentSize <= 0) {
          var s = JSON.stringify(indentSize);
          throw new Error(
            '"indent" option must be a positive integer, not '.concat(s),
          );
        }
        this.setSchema();
        var lines = [];
        var hasDirectives = false;
        if (this.version) {
          var vd = "%YAML 1.2";
          if (this.schema.name === "yaml-1.1") {
            if (this.version === "1.0") vd = "%YAML:1.0";
            else if (this.version === "1.1") vd = "%YAML 1.1";
          }
          lines.push(vd);
          hasDirectives = true;
        }
        var tagNames = this.listNonDefaultTags();
        this.tagPrefixes.forEach(function (_ref) {
          var handle = _ref.handle, prefix = _ref.prefix;
          if (
            tagNames.some(function (t) {
              return t.indexOf(prefix) === 0;
            })
          ) {
            lines.push("%TAG ".concat(handle, " ").concat(prefix));
            hasDirectives = true;
          }
        });
        if (hasDirectives || this.directivesEndMarker) lines.push("---");
        if (this.commentBefore) {
          if (hasDirectives || !this.directivesEndMarker) lines.unshift("");
          lines.unshift(this.commentBefore.replace(/^/gm, "#"));
        }
        var ctx = {
          anchors: Object.create(null),
          doc: this,
          indent: "",
          indentStep: " ".repeat(indentSize),
          stringify: stringify$1,
        };
        var chompKeep = false;
        var contentComment = null;
        if (this.contents) {
          if (this.contents instanceof Node2) {
            if (
              this.contents.spaceBefore &&
              (hasDirectives || this.directivesEndMarker)
            ) {
              lines.push("");
            }
            if (this.contents.commentBefore) {
              lines.push(this.contents.commentBefore.replace(/^/gm, "#"));
            }
            ctx.forceBlockIndent = !!this.comment;
            contentComment = this.contents.comment;
          }
          var onChompKeep = contentComment ? null : function () {
            return chompKeep = true;
          };
          var body = stringify$1(this.contents, ctx, function () {
            return contentComment = null;
          }, onChompKeep);
          lines.push(addComment(body, "", contentComment));
        } else if (this.contents !== void 0) {
          lines.push(stringify$1(this.contents, ctx));
        }
        if (this.comment) {
          if (
            (!chompKeep || contentComment) && lines[lines.length - 1] !== ""
          ) {
            lines.push("");
          }
          lines.push(this.comment.replace(/^/gm, "#"));
        }
        return lines.join("\n") + "\n";
      },
    },
  ]);
  return Document2;
}();
_defineProperty(Document$1, "defaults", documentOptions);
function createNode(value) {
  var wrapScalars = arguments.length > 1 && arguments[1] !== void 0
    ? arguments[1]
    : true;
  var tag = arguments.length > 2 ? arguments[2] : void 0;
  if (tag === void 0 && typeof wrapScalars === "string") {
    tag = wrapScalars;
    wrapScalars = true;
  }
  var options = Object.assign(
    {},
    Document$1.defaults[defaultOptions.version],
    defaultOptions,
  );
  var schema = new Schema(options);
  return schema.createNode(value, wrapScalars, tag);
}
var Document2 = function (_YAMLDocument) {
  _inherits(Document22, _YAMLDocument);
  var _super = _createSuper(Document22);
  function Document22(options) {
    _classCallCheck(this, Document22);
    return _super.call(this, Object.assign({}, defaultOptions, options));
  }
  return Document22;
}(Document$1);
function parseAllDocuments(src, options) {
  var stream = [];
  var prev;
  var _iterator = _createForOfIteratorHelper(parse2(src)), _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var cstDoc = _step.value;
      var doc = new Document2(options);
      doc.parse(cstDoc, prev);
      stream.push(doc);
      prev = doc;
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  return stream;
}
function parseDocument(src, options) {
  var cst = parse2(src);
  var doc = new Document2(options).parse(cst[0]);
  if (cst.length > 1) {
    var errMsg =
      "Source contains multiple documents; please use YAML.parseAllDocuments()";
    doc.errors.unshift(new YAMLSemanticError(cst[1], errMsg));
  }
  return doc;
}
function parse3(src, options) {
  var doc = parseDocument(src, options);
  doc.warnings.forEach(function (warning) {
    return warn(warning);
  });
  if (doc.errors.length > 0) throw doc.errors[0];
  return doc.toJSON();
}
function stringify2(value, options) {
  var doc = new Document2(options);
  doc.contents = value;
  return String(doc);
}
var YAML = {
  createNode,
  defaultOptions,
  Document: Document2,
  parse: parse3,
  parseAllDocuments,
  parseCST: parse2,
  parseDocument,
  scalarOptions,
  stringify: stringify2,
};
var dist = Object.freeze({
  __proto__: null,
  YAML,
});
var browser1 = dist.YAML;
function stringify3(action) {
  const output = {
    name: action.name,
    description: action.description,
    runs: {
      using: "composite",
      steps: action.steps.map((step) => {
        return {
          name: step.name,
          shell: "bash",
          run: step.run.trim() + "\n",
        };
      }),
    },
  };
  return browser1.stringify(output);
}
const mod1 = function () {
  return {
    stringify: stringify3,
  };
}();
function stringify4(action) {
  return BashAction(action);
}
function BashStep(opts) {
  return [
    "",
    `# ${opts.name}`,
    `# ${"-".repeat(opts.name.length)}`,
    `cat <<EOF\n${opts.name}\nEOF`,
    opts.run,
  ].join("\n");
}
function BashAction(opts) {
  return "#!/bin/sh\n\n" + BashStep({
    ...opts,
    run: [
      "# exit when any command fails",
      "set -e",
      ...opts.steps.map(BashStep),
    ].join("\n"),
  }).trim() + "\n";
}
const mod2 = function () {
  return {
    stringify: stringify4,
  };
}();
export { mod1 as GITHUB };
export { mod2 as BASH };
export { mod as JSON };
