import Te, { createContext as ir } from "react";
var x = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var me;
function or() {
  if (me)
    return x;
  me = 1;
  var N = Te, w = Symbol.for("react.element"), M = Symbol.for("react.fragment"), m = Object.prototype.hasOwnProperty, D = N.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, F = { key: !0, ref: !0, __self: !0, __source: !0 };
  function P(h, l, R) {
    var v, g = {}, _ = null, A = null;
    R !== void 0 && (_ = "" + R), l.key !== void 0 && (_ = "" + l.key), l.ref !== void 0 && (A = l.ref);
    for (v in l)
      m.call(l, v) && !F.hasOwnProperty(v) && (g[v] = l[v]);
    if (h && h.defaultProps)
      for (v in l = h.defaultProps, l)
        g[v] === void 0 && (g[v] = l[v]);
    return { $$typeof: w, type: h, key: _, ref: A, props: g, _owner: D.current };
  }
  return x.Fragment = M, x.jsx = P, x.jsxs = P, x;
}
var k = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Re;
function ur() {
  return Re || (Re = 1, process.env.NODE_ENV !== "production" && function() {
    var N = Te, w = Symbol.for("react.element"), M = Symbol.for("react.portal"), m = Symbol.for("react.fragment"), D = Symbol.for("react.strict_mode"), F = Symbol.for("react.profiler"), P = Symbol.for("react.provider"), h = Symbol.for("react.context"), l = Symbol.for("react.forward_ref"), R = Symbol.for("react.suspense"), v = Symbol.for("react.suspense_list"), g = Symbol.for("react.memo"), _ = Symbol.for("react.lazy"), A = Symbol.for("react.offscreen"), H = Symbol.iterator, Oe = "@@iterator";
    function Ce(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = H && e[H] || e[Oe];
      return typeof r == "function" ? r : null;
    }
    var T = N.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function c(e) {
      {
        for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++)
          t[n - 1] = arguments[n];
        we("error", e, t);
      }
    }
    function we(e, r, t) {
      {
        var n = T.ReactDebugCurrentFrame, o = n.getStackAddendum();
        o !== "" && (r += "%s", t = t.concat([o]));
        var u = t.map(function(i) {
          return String(i);
        });
        u.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, u);
      }
    }
    var Pe = !1, Se = !1, je = !1, xe = !1, ke = !1, X;
    X = Symbol.for("react.module.reference");
    function De(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === m || e === F || ke || e === D || e === R || e === v || xe || e === A || Pe || Se || je || typeof e == "object" && e !== null && (e.$$typeof === _ || e.$$typeof === g || e.$$typeof === P || e.$$typeof === h || e.$$typeof === l || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === X || e.getModuleId !== void 0));
    }
    function Fe(e, r, t) {
      var n = e.displayName;
      if (n)
        return n;
      var o = r.displayName || r.name || "";
      return o !== "" ? t + "(" + o + ")" : t;
    }
    function Z(e) {
      return e.displayName || "Context";
    }
    function E(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && c("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case m:
          return "Fragment";
        case M:
          return "Portal";
        case F:
          return "Profiler";
        case D:
          return "StrictMode";
        case R:
          return "Suspense";
        case v:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case h:
            var r = e;
            return Z(r) + ".Consumer";
          case P:
            var t = e;
            return Z(t._context) + ".Provider";
          case l:
            return Fe(e, e.render, "ForwardRef");
          case g:
            var n = e.displayName || null;
            return n !== null ? n : E(e.type) || "Memo";
          case _: {
            var o = e, u = o._payload, i = o._init;
            try {
              return E(i(u));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var y = Object.assign, S = 0, Q, ee, re, te, ne, ae, ie;
    function oe() {
    }
    oe.__reactDisabledLog = !0;
    function Ae() {
      {
        if (S === 0) {
          Q = console.log, ee = console.info, re = console.warn, te = console.error, ne = console.group, ae = console.groupCollapsed, ie = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: oe,
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
        S++;
      }
    }
    function Ie() {
      {
        if (S--, S === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: y({}, e, {
              value: Q
            }),
            info: y({}, e, {
              value: ee
            }),
            warn: y({}, e, {
              value: re
            }),
            error: y({}, e, {
              value: te
            }),
            group: y({}, e, {
              value: ne
            }),
            groupCollapsed: y({}, e, {
              value: ae
            }),
            groupEnd: y({}, e, {
              value: ie
            })
          });
        }
        S < 0 && c("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var V = T.ReactCurrentDispatcher, U;
    function I(e, r, t) {
      {
        if (U === void 0)
          try {
            throw Error();
          } catch (o) {
            var n = o.stack.trim().match(/\n( *(at )?)/);
            U = n && n[1] || "";
          }
        return `
` + U + e;
      }
    }
    var B = !1, $;
    {
      var $e = typeof WeakMap == "function" ? WeakMap : Map;
      $ = new $e();
    }
    function ue(e, r) {
      if (!e || B)
        return "";
      {
        var t = $.get(e);
        if (t !== void 0)
          return t;
      }
      var n;
      B = !0;
      var o = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var u;
      u = V.current, V.current = null, Ae();
      try {
        if (r) {
          var i = function() {
            throw Error();
          };
          if (Object.defineProperty(i.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(i, []);
            } catch (b) {
              n = b;
            }
            Reflect.construct(e, [], i);
          } else {
            try {
              i.call();
            } catch (b) {
              n = b;
            }
            e.call(i.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (b) {
            n = b;
          }
          e();
        }
      } catch (b) {
        if (b && n && typeof b.stack == "string") {
          for (var a = b.stack.split(`
`), d = n.stack.split(`
`), s = a.length - 1, f = d.length - 1; s >= 1 && f >= 0 && a[s] !== d[f]; )
            f--;
          for (; s >= 1 && f >= 0; s--, f--)
            if (a[s] !== d[f]) {
              if (s !== 1 || f !== 1)
                do
                  if (s--, f--, f < 0 || a[s] !== d[f]) {
                    var p = `
` + a[s].replace(" at new ", " at ");
                    return e.displayName && p.includes("<anonymous>") && (p = p.replace("<anonymous>", e.displayName)), typeof e == "function" && $.set(e, p), p;
                  }
                while (s >= 1 && f >= 0);
              break;
            }
        }
      } finally {
        B = !1, V.current = u, Ie(), Error.prepareStackTrace = o;
      }
      var C = e ? e.displayName || e.name : "", ye = C ? I(C) : "";
      return typeof e == "function" && $.set(e, ye), ye;
    }
    function We(e, r, t) {
      return ue(e, !1);
    }
    function Ye(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function W(e, r, t) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return ue(e, Ye(e));
      if (typeof e == "string")
        return I(e);
      switch (e) {
        case R:
          return I("Suspense");
        case v:
          return I("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case l:
            return We(e.render);
          case g:
            return W(e.type, r, t);
          case _: {
            var n = e, o = n._payload, u = n._init;
            try {
              return W(u(o), r, t);
            } catch {
            }
          }
        }
      return "";
    }
    var Y = Object.prototype.hasOwnProperty, se = {}, fe = T.ReactDebugCurrentFrame;
    function L(e) {
      if (e) {
        var r = e._owner, t = W(e.type, e._source, r ? r.type : null);
        fe.setExtraStackFrame(t);
      } else
        fe.setExtraStackFrame(null);
    }
    function Le(e, r, t, n, o) {
      {
        var u = Function.call.bind(Y);
        for (var i in e)
          if (u(e, i)) {
            var a = void 0;
            try {
              if (typeof e[i] != "function") {
                var d = Error((n || "React class") + ": " + t + " type `" + i + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[i] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw d.name = "Invariant Violation", d;
              }
              a = e[i](r, i, n, t, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (s) {
              a = s;
            }
            a && !(a instanceof Error) && (L(o), c("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", n || "React class", t, i, typeof a), L(null)), a instanceof Error && !(a.message in se) && (se[a.message] = !0, L(o), c("Failed %s type: %s", t, a.message), L(null));
          }
      }
    }
    var Ne = Array.isArray;
    function q(e) {
      return Ne(e);
    }
    function Me(e) {
      {
        var r = typeof Symbol == "function" && Symbol.toStringTag, t = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return t;
      }
    }
    function Ve(e) {
      try {
        return le(e), !1;
      } catch {
        return !0;
      }
    }
    function le(e) {
      return "" + e;
    }
    function ce(e) {
      if (Ve(e))
        return c("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Me(e)), le(e);
    }
    var j = T.ReactCurrentOwner, Ue = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, de, ve, J;
    J = {};
    function Be(e) {
      if (Y.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function qe(e) {
      if (Y.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function Je(e, r) {
      if (typeof e.ref == "string" && j.current && r && j.current.stateNode !== r) {
        var t = E(j.current.type);
        J[t] || (c('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', E(j.current.type), e.ref), J[t] = !0);
      }
    }
    function Ge(e, r) {
      {
        var t = function() {
          de || (de = !0, c("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: t,
          configurable: !0
        });
      }
    }
    function ze(e, r) {
      {
        var t = function() {
          ve || (ve = !0, c("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: t,
          configurable: !0
        });
      }
    }
    var Ke = function(e, r, t, n, o, u, i) {
      var a = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: w,
        // Built-in properties that belong on the element
        type: e,
        key: r,
        ref: t,
        props: i,
        // Record the component responsible for creating this element.
        _owner: u
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
        value: o
      }), Object.freeze && (Object.freeze(a.props), Object.freeze(a)), a;
    };
    function He(e, r, t, n, o) {
      {
        var u, i = {}, a = null, d = null;
        t !== void 0 && (ce(t), a = "" + t), qe(r) && (ce(r.key), a = "" + r.key), Be(r) && (d = r.ref, Je(r, o));
        for (u in r)
          Y.call(r, u) && !Ue.hasOwnProperty(u) && (i[u] = r[u]);
        if (e && e.defaultProps) {
          var s = e.defaultProps;
          for (u in s)
            i[u] === void 0 && (i[u] = s[u]);
        }
        if (a || d) {
          var f = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          a && Ge(i, f), d && ze(i, f);
        }
        return Ke(e, a, d, o, n, j.current, i);
      }
    }
    var G = T.ReactCurrentOwner, pe = T.ReactDebugCurrentFrame;
    function O(e) {
      if (e) {
        var r = e._owner, t = W(e.type, e._source, r ? r.type : null);
        pe.setExtraStackFrame(t);
      } else
        pe.setExtraStackFrame(null);
    }
    var z;
    z = !1;
    function K(e) {
      return typeof e == "object" && e !== null && e.$$typeof === w;
    }
    function ge() {
      {
        if (G.current) {
          var e = E(G.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function Xe(e) {
      {
        if (e !== void 0) {
          var r = e.fileName.replace(/^.*[\\\/]/, ""), t = e.lineNumber;
          return `

Check your code at ` + r + ":" + t + ".";
        }
        return "";
      }
    }
    var Ee = {};
    function Ze(e) {
      {
        var r = ge();
        if (!r) {
          var t = typeof e == "string" ? e : e.displayName || e.name;
          t && (r = `

Check the top-level render call using <` + t + ">.");
        }
        return r;
      }
    }
    function be(e, r) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var t = Ze(r);
        if (Ee[t])
          return;
        Ee[t] = !0;
        var n = "";
        e && e._owner && e._owner !== G.current && (n = " It was passed a child from " + E(e._owner.type) + "."), O(e), c('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', t, n), O(null);
      }
    }
    function he(e, r) {
      {
        if (typeof e != "object")
          return;
        if (q(e))
          for (var t = 0; t < e.length; t++) {
            var n = e[t];
            K(n) && be(n, r);
          }
        else if (K(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var o = Ce(e);
          if (typeof o == "function" && o !== e.entries)
            for (var u = o.call(e), i; !(i = u.next()).done; )
              K(i.value) && be(i.value, r);
        }
      }
    }
    function Qe(e) {
      {
        var r = e.type;
        if (r == null || typeof r == "string")
          return;
        var t;
        if (typeof r == "function")
          t = r.propTypes;
        else if (typeof r == "object" && (r.$$typeof === l || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        r.$$typeof === g))
          t = r.propTypes;
        else
          return;
        if (t) {
          var n = E(r);
          Le(t, e.props, "prop", n, e);
        } else if (r.PropTypes !== void 0 && !z) {
          z = !0;
          var o = E(r);
          c("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", o || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && c("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function er(e) {
      {
        for (var r = Object.keys(e.props), t = 0; t < r.length; t++) {
          var n = r[t];
          if (n !== "children" && n !== "key") {
            O(e), c("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", n), O(null);
            break;
          }
        }
        e.ref !== null && (O(e), c("Invalid attribute `ref` supplied to `React.Fragment`."), O(null));
      }
    }
    function _e(e, r, t, n, o, u) {
      {
        var i = De(e);
        if (!i) {
          var a = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (a += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var d = Xe(o);
          d ? a += d : a += ge();
          var s;
          e === null ? s = "null" : q(e) ? s = "array" : e !== void 0 && e.$$typeof === w ? (s = "<" + (E(e.type) || "Unknown") + " />", a = " Did you accidentally export a JSX literal instead of a component?") : s = typeof e, c("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", s, a);
        }
        var f = He(e, r, t, o, u);
        if (f == null)
          return f;
        if (i) {
          var p = r.children;
          if (p !== void 0)
            if (n)
              if (q(p)) {
                for (var C = 0; C < p.length; C++)
                  he(p[C], e);
                Object.freeze && Object.freeze(p);
              } else
                c("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              he(p, e);
        }
        return e === m ? er(f) : Qe(f), f;
      }
    }
    function rr(e, r, t) {
      return _e(e, r, t, !0);
    }
    function tr(e, r, t) {
      return _e(e, r, t, !1);
    }
    var nr = tr, ar = rr;
    k.Fragment = m, k.jsx = nr, k.jsxs = ar;
  }()), k;
}
process.env.NODE_ENV === "production" ? or() : ur();
ir({
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
