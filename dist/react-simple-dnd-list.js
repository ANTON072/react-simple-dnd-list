import Oe, { createContext as sr, useRef as fr, useReducer as lr, useContext as cr } from "react";
var K = { exports: {} }, A = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Te;
function dr() {
  if (Te)
    return A;
  Te = 1;
  var p = Oe, d = Symbol.for("react.element"), b = Symbol.for("react.fragment"), s = Object.prototype.hasOwnProperty, y = p.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, u = { key: !0, ref: !0, __self: !0, __source: !0 };
  function m(R, v, C) {
    var E, T = {}, w = null, N = null;
    C !== void 0 && (w = "" + C), v.key !== void 0 && (w = "" + v.key), v.ref !== void 0 && (N = v.ref);
    for (E in v)
      s.call(v, E) && !u.hasOwnProperty(E) && (T[E] = v[E]);
    if (R && R.defaultProps)
      for (E in v = R.defaultProps, v)
        T[E] === void 0 && (T[E] = v[E]);
    return { $$typeof: d, type: R, key: w, ref: N, props: T, _owner: y.current };
  }
  return A.Fragment = b, A.jsx = m, A.jsxs = m, A;
}
var F = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Se;
function vr() {
  return Se || (Se = 1, process.env.NODE_ENV !== "production" && function() {
    var p = Oe, d = Symbol.for("react.element"), b = Symbol.for("react.portal"), s = Symbol.for("react.fragment"), y = Symbol.for("react.strict_mode"), u = Symbol.for("react.profiler"), m = Symbol.for("react.provider"), R = Symbol.for("react.context"), v = Symbol.for("react.forward_ref"), C = Symbol.for("react.suspense"), E = Symbol.for("react.suspense_list"), T = Symbol.for("react.memo"), w = Symbol.for("react.lazy"), N = Symbol.for("react.offscreen"), Z = Symbol.iterator, we = "@@iterator";
    function xe(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = Z && e[Z] || e[we];
      return typeof r == "function" ? r : null;
    }
    var D = p.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function g(e) {
      {
        for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++)
          t[n - 1] = arguments[n];
        De("error", e, t);
      }
    }
    function De(e, r, t) {
      {
        var n = D.ReactDebugCurrentFrame, i = n.getStackAddendum();
        i !== "" && (r += "%s", t = t.concat([i]));
        var f = t.map(function(o) {
          return String(o);
        });
        f.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, f);
      }
    }
    var Pe = !1, je = !1, Ie = !1, ke = !1, Ae = !1, Q;
    Q = Symbol.for("react.module.reference");
    function Fe(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === s || e === u || Ae || e === y || e === C || e === E || ke || e === N || Pe || je || Ie || typeof e == "object" && e !== null && (e.$$typeof === w || e.$$typeof === T || e.$$typeof === m || e.$$typeof === R || e.$$typeof === v || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === Q || e.getModuleId !== void 0));
    }
    function Ne(e, r, t) {
      var n = e.displayName;
      if (n)
        return n;
      var i = r.displayName || r.name || "";
      return i !== "" ? t + "(" + i + ")" : t;
    }
    function ee(e) {
      return e.displayName || "Context";
    }
    function S(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && g("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case s:
          return "Fragment";
        case b:
          return "Portal";
        case u:
          return "Profiler";
        case y:
          return "StrictMode";
        case C:
          return "Suspense";
        case E:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case R:
            var r = e;
            return ee(r) + ".Consumer";
          case m:
            var t = e;
            return ee(t._context) + ".Provider";
          case v:
            return Ne(e, e.render, "ForwardRef");
          case T:
            var n = e.displayName || null;
            return n !== null ? n : S(e.type) || "Memo";
          case w: {
            var i = e, f = i._payload, o = i._init;
            try {
              return S(o(f));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var x = Object.assign, I = 0, re, te, ne, ae, oe, ie, ue;
    function se() {
    }
    se.__reactDisabledLog = !0;
    function $e() {
      {
        if (I === 0) {
          re = console.log, te = console.info, ne = console.warn, ae = console.error, oe = console.group, ie = console.groupCollapsed, ue = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: se,
            writable: !0
          };
          Object.defineProperties(console, {
            info: e,
            log: e,
            warn: e,
            error: e,
            group: e,
            groupCollapsed: e,
            groupEnd: e
          });
        }
        I++;
      }
    }
    function Ye() {
      {
        if (I--, I === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: x({}, e, {
              value: re
            }),
            info: x({}, e, {
              value: te
            }),
            warn: x({}, e, {
              value: ne
            }),
            error: x({}, e, {
              value: ae
            }),
            group: x({}, e, {
              value: oe
            }),
            groupCollapsed: x({}, e, {
              value: ie
            }),
            groupEnd: x({}, e, {
              value: ue
            })
          });
        }
        I < 0 && g("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var U = D.ReactCurrentDispatcher, V;
    function $(e, r, t) {
      {
        if (V === void 0)
          try {
            throw Error();
          } catch (i) {
            var n = i.stack.trim().match(/\n( *(at )?)/);
            V = n && n[1] || "";
          }
        return `
` + V + e;
      }
    }
    var B = !1, Y;
    {
      var We = typeof WeakMap == "function" ? WeakMap : Map;
      Y = new We();
    }
    function fe(e, r) {
      if (!e || B)
        return "";
      {
        var t = Y.get(e);
        if (t !== void 0)
          return t;
      }
      var n;
      B = !0;
      var i = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var f;
      f = U.current, U.current = null, $e();
      try {
        if (r) {
          var o = function() {
            throw Error();
          };
          if (Object.defineProperty(o.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(o, []);
            } catch (O) {
              n = O;
            }
            Reflect.construct(e, [], o);
          } else {
            try {
              o.call();
            } catch (O) {
              n = O;
            }
            e.call(o.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (O) {
            n = O;
          }
          e();
        }
      } catch (O) {
        if (O && n && typeof O.stack == "string") {
          for (var a = O.stack.split(`
`), h = n.stack.split(`
`), l = a.length - 1, c = h.length - 1; l >= 1 && c >= 0 && a[l] !== h[c]; )
            c--;
          for (; l >= 1 && c >= 0; l--, c--)
            if (a[l] !== h[c]) {
              if (l !== 1 || c !== 1)
                do
                  if (l--, c--, c < 0 || a[l] !== h[c]) {
                    var _ = `
` + a[l].replace(" at new ", " at ");
                    return e.displayName && _.includes("<anonymous>") && (_ = _.replace("<anonymous>", e.displayName)), typeof e == "function" && Y.set(e, _), _;
                  }
                while (l >= 1 && c >= 0);
              break;
            }
        }
      } finally {
        B = !1, U.current = f, Ye(), Error.prepareStackTrace = i;
      }
      var j = e ? e.displayName || e.name : "", be = j ? $(j) : "";
      return typeof e == "function" && Y.set(e, be), be;
    }
    function Me(e, r, t) {
      return fe(e, !1);
    }
    function Le(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function W(e, r, t) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return fe(e, Le(e));
      if (typeof e == "string")
        return $(e);
      switch (e) {
        case C:
          return $("Suspense");
        case E:
          return $("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case v:
            return Me(e.render);
          case T:
            return W(e.type, r, t);
          case w: {
            var n = e, i = n._payload, f = n._init;
            try {
              return W(f(i), r, t);
            } catch {
            }
          }
        }
      return "";
    }
    var M = Object.prototype.hasOwnProperty, le = {}, ce = D.ReactDebugCurrentFrame;
    function L(e) {
      if (e) {
        var r = e._owner, t = W(e.type, e._source, r ? r.type : null);
        ce.setExtraStackFrame(t);
      } else
        ce.setExtraStackFrame(null);
    }
    function Ue(e, r, t, n, i) {
      {
        var f = Function.call.bind(M);
        for (var o in e)
          if (f(e, o)) {
            var a = void 0;
            try {
              if (typeof e[o] != "function") {
                var h = Error((n || "React class") + ": " + t + " type `" + o + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[o] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw h.name = "Invariant Violation", h;
              }
              a = e[o](r, o, n, t, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (l) {
              a = l;
            }
            a && !(a instanceof Error) && (L(i), g("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", n || "React class", t, o, typeof a), L(null)), a instanceof Error && !(a.message in le) && (le[a.message] = !0, L(i), g("Failed %s type: %s", t, a.message), L(null));
          }
      }
    }
    var Ve = Array.isArray;
    function X(e) {
      return Ve(e);
    }
    function Be(e) {
      {
        var r = typeof Symbol == "function" && Symbol.toStringTag, t = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return t;
      }
    }
    function Xe(e) {
      try {
        return de(e), !1;
      } catch {
        return !0;
      }
    }
    function de(e) {
      return "" + e;
    }
    function ve(e) {
      if (Xe(e))
        return g("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Be(e)), de(e);
    }
    var k = D.ReactCurrentOwner, qe = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, pe, Ee, q;
    q = {};
    function Je(e) {
      if (M.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function Ge(e) {
      if (M.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function ze(e, r) {
      if (typeof e.ref == "string" && k.current && r && k.current.stateNode !== r) {
        var t = S(k.current.type);
        q[t] || (g('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', S(k.current.type), e.ref), q[t] = !0);
      }
    }
    function Ke(e, r) {
      {
        var t = function() {
          pe || (pe = !0, g("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: t,
          configurable: !0
        });
      }
    }
    function He(e, r) {
      {
        var t = function() {
          Ee || (Ee = !0, g("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: t,
          configurable: !0
        });
      }
    }
    var Ze = function(e, r, t, n, i, f, o) {
      var a = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: d,
        // Built-in properties that belong on the element
        type: e,
        key: r,
        ref: t,
        props: o,
        // Record the component responsible for creating this element.
        _owner: f
      };
      return a._store = {}, Object.defineProperty(a._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(a, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: n
      }), Object.defineProperty(a, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: i
      }), Object.freeze && (Object.freeze(a.props), Object.freeze(a)), a;
    };
    function Qe(e, r, t, n, i) {
      {
        var f, o = {}, a = null, h = null;
        t !== void 0 && (ve(t), a = "" + t), Ge(r) && (ve(r.key), a = "" + r.key), Je(r) && (h = r.ref, ze(r, i));
        for (f in r)
          M.call(r, f) && !qe.hasOwnProperty(f) && (o[f] = r[f]);
        if (e && e.defaultProps) {
          var l = e.defaultProps;
          for (f in l)
            o[f] === void 0 && (o[f] = l[f]);
        }
        if (a || h) {
          var c = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          a && Ke(o, c), h && He(o, c);
        }
        return Ze(e, a, h, i, n, k.current, o);
      }
    }
    var J = D.ReactCurrentOwner, ge = D.ReactDebugCurrentFrame;
    function P(e) {
      if (e) {
        var r = e._owner, t = W(e.type, e._source, r ? r.type : null);
        ge.setExtraStackFrame(t);
      } else
        ge.setExtraStackFrame(null);
    }
    var G;
    G = !1;
    function z(e) {
      return typeof e == "object" && e !== null && e.$$typeof === d;
    }
    function he() {
      {
        if (J.current) {
          var e = S(J.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function er(e) {
      {
        if (e !== void 0) {
          var r = e.fileName.replace(/^.*[\\\/]/, ""), t = e.lineNumber;
          return `

Check your code at ` + r + ":" + t + ".";
        }
        return "";
      }
    }
    var _e = {};
    function rr(e) {
      {
        var r = he();
        if (!r) {
          var t = typeof e == "string" ? e : e.displayName || e.name;
          t && (r = `

Check the top-level render call using <` + t + ">.");
        }
        return r;
      }
    }
    function ye(e, r) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var t = rr(r);
        if (_e[t])
          return;
        _e[t] = !0;
        var n = "";
        e && e._owner && e._owner !== J.current && (n = " It was passed a child from " + S(e._owner.type) + "."), P(e), g('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', t, n), P(null);
      }
    }
    function me(e, r) {
      {
        if (typeof e != "object")
          return;
        if (X(e))
          for (var t = 0; t < e.length; t++) {
            var n = e[t];
            z(n) && ye(n, r);
          }
        else if (z(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var i = xe(e);
          if (typeof i == "function" && i !== e.entries)
            for (var f = i.call(e), o; !(o = f.next()).done; )
              z(o.value) && ye(o.value, r);
        }
      }
    }
    function tr(e) {
      {
        var r = e.type;
        if (r == null || typeof r == "string")
          return;
        var t;
        if (typeof r == "function")
          t = r.propTypes;
        else if (typeof r == "object" && (r.$$typeof === v || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        r.$$typeof === T))
          t = r.propTypes;
        else
          return;
        if (t) {
          var n = S(r);
          Ue(t, e.props, "prop", n, e);
        } else if (r.PropTypes !== void 0 && !G) {
          G = !0;
          var i = S(r);
          g("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", i || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && g("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function nr(e) {
      {
        for (var r = Object.keys(e.props), t = 0; t < r.length; t++) {
          var n = r[t];
          if (n !== "children" && n !== "key") {
            P(e), g("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", n), P(null);
            break;
          }
        }
        e.ref !== null && (P(e), g("Invalid attribute `ref` supplied to `React.Fragment`."), P(null));
      }
    }
    function Re(e, r, t, n, i, f) {
      {
        var o = Fe(e);
        if (!o) {
          var a = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (a += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var h = er(i);
          h ? a += h : a += he();
          var l;
          e === null ? l = "null" : X(e) ? l = "array" : e !== void 0 && e.$$typeof === d ? (l = "<" + (S(e.type) || "Unknown") + " />", a = " Did you accidentally export a JSX literal instead of a component?") : l = typeof e, g("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", l, a);
        }
        var c = Qe(e, r, t, i, f);
        if (c == null)
          return c;
        if (o) {
          var _ = r.children;
          if (_ !== void 0)
            if (n)
              if (X(_)) {
                for (var j = 0; j < _.length; j++)
                  me(_[j], e);
                Object.freeze && Object.freeze(_);
              } else
                g("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              me(_, e);
        }
        return e === s ? nr(c) : tr(c), c;
      }
    }
    function ar(e, r, t) {
      return Re(e, r, t, !0);
    }
    function or(e, r, t) {
      return Re(e, r, t, !1);
    }
    var ir = or, ur = ar;
    F.Fragment = s, F.jsx = ir, F.jsxs = ur;
  }()), F;
}
process.env.NODE_ENV === "production" ? K.exports = dr() : K.exports = vr();
var H = K.exports;
const Ce = sr({
  $refs: { current: /* @__PURE__ */ new Map() },
  dispatch: () => {
  },
  onDragEnd: () => {
  },
  store: {
    destinationIndex: -1,
    sourceIndex: -1
  }
});
function pr(p, d) {
  switch (d.type) {
    case "SET_DESTINATION_INDEX":
      return { ...p, destinationIndex: d.payload };
    case "SET_SOURCE_INDEX":
      return { ...p, sourceIndex: d.payload };
    default:
      return p;
  }
}
function gr({ children: p, onDragEnd: d }) {
  const b = fr(/* @__PURE__ */ new Map()), [s, y] = lr(pr, {
    destinationIndex: -1,
    sourceIndex: -1
  }), u = () => {
    d({
      destinationIndex: s.destinationIndex,
      sourceIndex: s.sourceIndex
    });
  };
  return /* @__PURE__ */ H.jsx(
    Ce.Provider,
    {
      value: {
        $refs: b,
        dispatch: y,
        onDragEnd: u,
        store: s
      },
      children: p
    }
  );
}
function hr({ draggableId: p, index: d, children: b }) {
  const s = cr(Ce), y = {
    draggable: !0,
    onDragStart(u) {
      u.dataTransfer.dropEffect = "move", u.dataTransfer.effectAllowed = "move", s.dispatch({ type: "SET_SOURCE_INDEX", payload: d });
    },
    onDragEnter(u) {
      u.preventDefault();
    },
    onDragOver(u) {
      u.preventDefault();
      const m = s == null ? void 0 : s.$refs.current.get(p);
      if (!m)
        return;
      const R = m.getBoundingClientRect(), v = u.clientY - R.top, C = Math.min(1, Math.max(0, v / R.height)), E = d + Math.round(C);
      s.dispatch({
        type: "SET_DESTINATION_INDEX",
        payload: E
      });
    },
    onDragLeave(u) {
      u.preventDefault();
    },
    onDragEnd(u) {
      u.preventDefault(), s.onDragEnd(), s.dispatch({ type: "SET_SOURCE_INDEX", payload: -1 }), s.dispatch({ type: "SET_DESTINATION_INDEX", payload: -1 });
    },
    onDrop(u) {
      u.preventDefault();
    },
    ref(u) {
      u ? s == null || s.$refs.current.set(p, u) : s == null || s.$refs.current.delete(p);
    }
  };
  return /* @__PURE__ */ H.jsx(H.Fragment, { children: b({
    draggableProps: y
  }) });
}
function _r(p, d, b) {
  const s = p[d], y = p.map((u, m) => m === d ? null : u);
  return y.splice(b, 0, s), y.flatMap((u) => u !== null ? [u] : []);
}
export {
  gr as DragDropContext,
  hr as Draggable,
  _r as reorder
};
