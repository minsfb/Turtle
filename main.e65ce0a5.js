// all source code stolen from wordle, please don't sue me new york times
// word list from https://github.com/dwyl/english-words filtered for non-slurs based on wikipedia's "list of ethnic slurs" (not a super fun read, do not recommend)

this.turtle = this.turtle || {},
this.turtle.bundle = function(e) {
    "use strict";
    function a(e) {
        return (a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(e)
    }
    function s(e, a) {
        if (!(e instanceof a))
            throw new TypeError("Cannot call a class as a function")
    }
    function t(e, a) {
        for (var s = 0; s < a.length; s++) {
            var t = a[s];
            t.enumerable = t.enumerable || !1,
            t.configurable = !0,
            "value" in t && (t.writable = !0),
            Object.defineProperty(e, t.key, t)
        }
    }
    function o(e, a, s) {
        return a && t(e.prototype, a), s && t(e, s), e
    }
    function n(e, a, s) {
        return a in e ? Object.defineProperty(e, a, {
            value: s,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[a] = s, e
    }
    function r(e, a) {
        if ("function" != typeof a && null !== a)
            throw new TypeError("Super expression must either be null or a function");
        e.prototype = Object.create(a && a.prototype, {
            constructor: {
                value: e,
                writable: !0,
                configurable: !0
            }
        }),
        a && l(e, a)
    }
    function i(e) {
        return (i = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }
    function l(e, a) {
        return (l = Object.setPrototypeOf || function(e, a) {
            return e.__proto__ = a, e
        })(e, a)
    }
    function d() {
        if ("undefined" == typeof Reflect || !Reflect.construct)
            return !1;
        if (Reflect.construct.sham)
            return !1;
        if ("function" == typeof Proxy)
            return !0;
        try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
        } catch (e) {
            return !1
        }
    }
    function u(e, a, s) {
        return (u = d() ? Reflect.construct : function(e, a, s) {
            var t = [null];
            t.push.apply(t, a);
            var o = new (Function.bind.apply(e, t));
            return s && l(o, s.prototype), o
        }).apply(null, arguments)
    }
    function c(e) {
        var a = "function" == typeof Map ? new Map : void 0;
        return (c = function(e) {
            if (null === e || (s = e, -1 === Function.toString.call(s).indexOf("[native code]")))
                return e;
            var s;
            if ("function" != typeof e)
                throw new TypeError("Super expression must either be null or a function");
            if (void 0 !== a) {
                if (a.has(e))
                    return a.get(e);
                a.set(e, t)
            }
            function t() {
                return u(e, arguments, i(this).constructor)
            }
            return t.prototype = Object.create(e.prototype, {
                constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), l(t, e)
        })(e)
    }
    function p(e) {
        if (void 0 === e)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
    }
    function m(e, a) {
        return !a || "object" != typeof a && "function" != typeof a ? p(e) : a
    }
    function h(e) {
        var a = d();
        return function() {
            var s,
                t = i(e);
            if (a) {
                var o = i(this).constructor;
                s = Reflect.construct(t, arguments, o)
            } else
                s = t.apply(this, arguments);
            return m(this, s)
        }
    }
    function y(e, a) {
        return function(e) {
                if (Array.isArray(e))
                    return e
            }(e) || function(e, a) {
                var s = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                if (null == s)
                    return;
                var t,
                    o,
                    n = [],
                    r = !0,
                    i = !1;
                try {
                    for (s = s.call(e); !(r = (t = s.next()).done) && (n.push(t.value), !a || n.length !== a); r = !0)
                        ;
                } catch (e) {
                    i = !0,
                    o = e
                } finally {
                    try {
                        r || null == s.return || s.return()
                    } finally {
                        if (i)
                            throw o
                    }
                }
                return n
            }(e, a) || b(e, a) || function() {
                throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
    }
    function g(e) {
        return function(e) {
                if (Array.isArray(e))
                    return f(e)
            }(e) || function(e) {
                if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"])
                    return Array.from(e)
            }(e) || b(e) || function() {
                throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
    }
    function b(e, a) {
        if (e) {
            if ("string" == typeof e)
                return f(e, a);
            var s = Object.prototype.toString.call(e).slice(8, -1);
            return "Object" === s && e.constructor && (s = e.constructor.name), "Map" === s || "Set" === s ? Array.from(e) : "Arguments" === s || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(s) ? f(e, a) : void 0
        }
    }
    function f(e, a) {
        (null == a || a > e.length) && (a = e.length);
        for (var s = 0, t = new Array(a); s < a; s++)
            t[s] = e[s];
        return t
    }
    var k = document.createElement("template");
    k.innerHTML = "\n<style>\n  :host {\n    display: inline-block;\n  }\n  .tile {\n    width: 100%;\n    display: inline-flex;\n    justify-content: center;\n    align-items: center;\n    font-size: 2rem;\n    line-height: 2rem;\n    font-weight: bold;\n    vertical-align: middle;\n    box-sizing: border-box;\n    color: var(--tile-text-color);\n    text-transform: uppercase;\n    user-select: none;\n  }\n  .tile::before {\n    content: '';\n    display: inline-block;\n    padding-bottom: 100%;\n  }\n\n  /* Allow tiles to be smaller on small screens */\n  @media (max-height: 600px) {\n    .tile {\n      font-size: 1em;\n      line-height: 1em;\n    }\n  }\n\n  .tile[data-state='empty'] {\n    border: 2px solid var(--color-tone-4);\n  }\n  .tile[data-state='tbd'] {\n    background-color: var(--color-tone-7);\n    border: 2px solid var(--color-tone-3);\n    color: var(--color-tone-1);\n  }\n  .tile[data-state='correct'] {\n    background-color: var(--color-correct);\n  }\n  .tile[data-state='present'] {\n    background-color: var(--color-present);\n  }\n  .tile[data-state='absent'] {\n    background-color: var(--color-absent);\n  }\n\n  .tile[data-animation='pop'] {\n    animation-name: PopIn;\n    animation-duration: 100ms;\n  }\n\n  @keyframes PopIn {\n    from {\n      transform: scale(0.8);\n      opacity: 0;\n    }\n\n    40% {\n      transform: scale(1.1);\n      opacity: 1;\n    }\n  }\n  .tile[data-animation='flip-in'] {\n    animation-name: FlipIn;\n    animation-duration: 250ms;\n    animation-timing-function: ease-in;\n  }\n  @keyframes FlipIn {\n    0% {\n      transform: rotateX(0);\n    }\n    100% {\n      transform: rotateX(-90deg);\n    }\n  }\n  .tile[data-animation='flip-out'] {\n    animation-name: FlipOut;\n    animation-duration: 250ms;\n    animation-timing-function: ease-in;\n  }\n  @keyframes FlipOut {\n    0% {\n      transform: rotateX(-90deg);\n    }\n    100% {\n      transform: rotateX(0);\n    }\n  }\n</style>\n<div class=\"tile\" data-state=\"empty\" data-animation=\"idle\"></div>\n";
    var v = function(e) {
        r(t, e);
        var a = h(t);
        function t() {
            var e;
            return s(this, t), n(p(e = a.call(this)), "_letter", ""), n(p(e), "_state", "empty"), n(p(e), "_animation", "idle"), n(p(e), "_last", !1), n(p(e), "_reveal", !1), e.attachShadow({
                mode: "open"
            }), e
        }
        return o(t, [{
            key: "last",
            set: function(e) {
                this._last = e
            }
        }, {
            key: "connectedCallback",
            value: function() {
                var e = this;
                this.shadowRoot.appendChild(k.content.cloneNode(!0)),
                this.$tile = this.shadowRoot.querySelector(".tile"),
                this.$tile.addEventListener("animationend", (function(a) {
                    "PopIn" === a.animationName && (e._animation = "idle"),
                    "FlipIn" === a.animationName && (e.$tile.dataset.state = e._state, e._animation = "flip-out"),
                    "FlipOut" === a.animationName && (e._animation = "idle", e._last && e.dispatchEvent(new CustomEvent("game-last-tile-revealed-in-row", {
                        bubbles: !0,
                        composed: !0
                    }))),
                    e._render()
                })),
                this._render()
            }
        }, {
            key: "attributeChangedCallback",
            value: function(e, a, s) {
                switch (e) {
                case "letter":
                    if (s === a)
                        break;
                    var t = "null" === s ? "" : s;
                    this._letter = t,
                    this._state = t ? "tbd" : "empty",
                    this._animation = t ? "pop" : "idle";
                    break;
                case "evaluation":
                    if (!s)
                        break;
                    this._state = s;
                    break;
                case "reveal":
                    this._animation = "flip-in",
                    this._reveal = !0
                }
                this._render()
            }
        }, {
            key: "_render",
            value: function() {
                this.$tile && (this.$tile.textContent = this._letter, ["empty", "tbd"].includes(this._state) && (this.$tile.dataset.state = this._state), (["empty", "tbd"].includes(this._state) || this._reveal) && this.$tile.dataset.animation != this._animation && (this.$tile.dataset.animation = this._animation))
            }
        }], [{
            key: "observedAttributes",
            get: function() {
                return ["letter", "evaluation", "reveal"]
            }
        }]), t
    }(c(HTMLElement));
    customElements.define("game-tile", v);
    var w = document.createElement("template");
    w.innerHTML = '\n  <style>\n    :host {\n      display: block;\n    }\n    :host([invalid]){\n      animation-name: Shake;\n      animation-duration: 600ms;\n    }\n    .row {\n      display: grid;\n      grid-template-columns: repeat(6, 1fr);\n      grid-gap: 5px;\n    }\n    .win {\n      animation-name: Bounce;\n      animation-duration: 1000ms;\n    }\n\n    @keyframes Bounce {\n      0%, 20% {\n        transform: translateY(0);\n      }\n      40% {\n        transform: translateY(-30px);\n      }\n      50% {\n        transform: translateY(5px);\n      }\n      60% {\n        transform: translateY(-15px);\n      }\n      80% {\n        transform: translateY(2px);\n      }\n      100% {\n        transform: translateY(0);\n      }\n    }\n\n    @keyframes Shake {\n      10%,\n      90% {\n        transform: translateX(-1px);\n      }\n\n      20%,\n      80% {\n        transform: translateX(2px);\n      }\n\n      30%,\n      50%,\n      70% {\n        transform: translateX(-4px);\n      }\n\n      40%,\n      60% {\n        transform: translateX(4px);\n      }\n    }\n  </style>\n  <div class="row"></div>\n';
    var x = function(e) {
        r(t, e);
        var a = h(t);
        function t() {
            var e;
            return s(this, t), (e = a.call(this)).attachShadow({
                mode: "open"
            }), e._letters = "", e._evaluation = [], e._length, e
        }
        return o(t, [{
            key: "evaluation",
            get: function() {
                return this._evaluation
            },
            set: function(e) {
                var a = this;
                this._evaluation = e,
                this.$tiles && this.$tiles.forEach((function(e, s) {
                    e.setAttribute("evaluation", a._evaluation[s]),
                    setTimeout((function() {
                        e.setAttribute("reveal", "")
                    }), 300 * s)
                }))
            }
        }, {
            key: "connectedCallback",
            value: function() {
                var e = this;
                this.shadowRoot.appendChild(w.content.cloneNode(!0)),
                this.$row = this.shadowRoot.querySelector(".row");
                for (var a = function(a) {
                        var s = document.createElement("game-tile"),
                            t = e._letters[a];
                        (t && s.setAttribute("letter", t), e._evaluation[a]) && (s.setAttribute("evaluation", e._evaluation[a]), setTimeout((function() {
                            s.setAttribute("reveal", "")
                        }), 100 * a));
                        a === e._length - 1 && (s.last = !0),
                        e.$row.appendChild(s)
                    }, s = 0; s < this._length; s++)
                    a(s);
                this.$tiles = this.shadowRoot.querySelectorAll("game-tile"), // query for all tagged "game-tiles"
                this.addEventListener("animationend", (function(a) {
                    "Shake" === a.animationName && e.removeAttribute("invalid")
                }))
            }
        }, {
            key: "attributeChangedCallback",
            value: function(e, a, s) {
                switch (e) {
                case "letters":
                    this._letters = s || "";
                    break;
                case "length":
                    this._length = parseInt(s, 10);
                    break;
                case "win":
                    if (null === s) {
                        this.$tiles.forEach((function(e) {
                            e.classList.remove("win")
                        }));
                        break
                    }
                    this.$tiles.forEach((function(e, a) {
                        e.classList.add("win"),
                        e.style.animationDelay = "".concat(100 * a, "ms")
                    }))
                }
                this._render()
            }
        }, {
            key: "_render",
            value: function() {
                var e = this;
                this.$row && this.$tiles.forEach((function(a, s) {
                    var t = e._letters[s];
                    t ? a.setAttribute("letter", t) : a.removeAttribute("letter")
                }))
            }
        }], [{
            key: "observedAttributes",
            get: function() {
                return ["letters", "length", "invalid", "win"]
            }
        }]), t
    }(c(HTMLElement));
    customElements.define("game-row", x);
    var z = document.createElement("template");
    z.innerHTML = "\n  <slot></slot>\n";
    var j = "darkTheme",
        S = "colorBlindTheme",
        _ = function(e) {
            r(t, e);
            var a = h(t);
            function t() {
                var e;
                s(this, t),
                n(p(e = a.call(this)), "isDarkTheme", !1),
                n(p(e), "isColorBlindTheme", !1),
                e.attachShadow({
                    mode: "open"
                });
                var o = JSON.parse(window.localStorage.getItem(j)),
                    r = window.matchMedia("(prefers-color-scheme: dark)").matches,
                    i = JSON.parse(window.localStorage.getItem(S));
                return !0 === o || !1 === o ? e.setDarkTheme(o) : r && e.setDarkTheme(!0), !0 !== i && !1 !== i || e.setColorBlindTheme(i), e
            }
            return o(t, [{
                key: "setDarkTheme",
                value: function(e) {
                    var a = document.querySelector("body");
                    e && !a.classList.contains("nightmode") ? a.classList.add("nightmode") : a.classList.remove("nightmode"),
                    this.isDarkTheme = e,
                    window.localStorage.setItem(j, JSON.stringify(e))
                }
            }, {
                key: "setColorBlindTheme",
                value: function(e) {
                    var a = document.querySelector("body");
                    e && !a.classList.contains("colorblind") ? a.classList.add("colorblind") : a.classList.remove("colorblind"),
                    this.isColorBlindTheme = e,
                    window.localStorage.setItem(S, JSON.stringify(e))
                }
            }, {
                key: "connectedCallback",
                value: function() {
                    var e = this;
                    this.shadowRoot.appendChild(z.content.cloneNode(!0)),
                    this.shadowRoot.addEventListener("game-setting-change", (function(a) {
                        var s = a.detail,
                            t = s.name,
                            o = s.checked;
                        switch (t) {
                        case "dark-theme":
                            return void e.setDarkTheme(o);
                        case "color-blind-theme":
                            return void e.setColorBlindTheme(o)
                        }
                    }))
                }
            }]), t
        }(c(HTMLElement));
    function q(e, a) {
        return e === a || e != e && a != a
    }
    function E(e, a) {
        for (var s = e.length; s--;)
            if (q(e[s][0], a))
                return s;
        return -1
    }
    customElements.define("game-theme-manager", _);
    var A = Array.prototype.splice;
    function C(e) {
        var a = -1,
            s = null == e ? 0 : e.length;
        for (this.clear(); ++a < s;) {
            var t = e[a];
            this.set(t[0], t[1])
        }
    }
    C.prototype.clear = function() {
        this.__data__ = [],
        this.size = 0
    },
    C.prototype.delete = function(e) {
        var a = this.__data__,
            s = E(a, e);
        return !(s < 0) && (s == a.length - 1 ? a.pop() : A.call(a, s, 1), --this.size, !0)
    },
    C.prototype.get = function(e) {
        var a = this.__data__,
            s = E(a, e);
        return s < 0 ? void 0 : a[s][1]
    },
    C.prototype.has = function(e) {
        return E(this.__data__, e) > -1
    },
    C.prototype.set = function(e, a) {
        var s = this.__data__,
            t = E(s, e);
        return t < 0 ? (++this.size, s.push([e, a])) : s[t][1] = a, this
    };
    var L = "object" == ("undefined" == typeof global ? "undefined" : a(global)) && global && global.Object === Object && global,
        T = "object" == ("undefined" == typeof self ? "undefined" : a(self)) && self && self.Object === Object && self,
        I = L || T || Function("return this")(),
        M = I.Symbol,
        O = Object.prototype,
        R = O.hasOwnProperty,
        P = O.toString,
        $ = M ? M.toStringTag : void 0;
    var H = Object.prototype.toString;
    var N = M ? M.toStringTag : void 0;
    function D(e) {
        return null == e ? void 0 === e ? "[object Undefined]" : "[object Null]" : N && N in Object(e) ? function(e) {
            var a = R.call(e, $),
                s = e[$];
            try {
                e[$] = void 0;
                var t = !0
            } catch (e) {}
            var o = P.call(e);
            return t && (a ? e[$] = s : delete e[$]), o
        }(e) : function(e) {
            return H.call(e)
        }(e)
    }
    function G(e) {
        var s = a(e);
        return null != e && ("object" == s || "function" == s)
    }
    function B(e) {
        if (!G(e))
            return !1;
        var a = D(e);
        return "[object Function]" == a || "[object GeneratorFunction]" == a || "[object AsyncFunction]" == a || "[object Proxy]" == a
    }
    var F,
        W = I["__core-js_shared__"],
        Y = (F = /[^.]+$/.exec(W && W.keys && W.keys.IE_PROTO || "")) ? "Symbol(src)_1." + F : "";
    var J = Function.prototype.toString;
    var U = /^\[object .+?Constructor\]$/,
        X = Function.prototype,
        V = Object.prototype,
        K = X.toString,
        Q = V.hasOwnProperty,
        Z = RegExp("^" + K.call(Q).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
    function ee(e) {
        return !(!G(e) || (a = e, Y && Y in a)) && (B(e) ? Z : U).test(function(e) {
                if (null != e) {
                    try {
                        return J.call(e)
                    } catch (e) {}
                    try {
                        return e + ""
                    } catch (e) {}
                }
                return ""
            }(e));
        var a
    }
    function ae(e, a) {
        var s = function(e, a) {
            return null == e ? void 0 : e[a]
        }(e, a);
        return ee(s) ? s : void 0
    }
    var se = ae(I, "Map"),
        te = ae(Object, "create");
    var oe = Object.prototype.hasOwnProperty;
    var ne = Object.prototype.hasOwnProperty;
    function re(e) {
        var a = -1,
            s = null == e ? 0 : e.length;
        for (this.clear(); ++a < s;) {
            var t = e[a];
            this.set(t[0], t[1])
        }
    }
    function ie(e, s) {
        var t,
            o,
            n = e.__data__;
        return ("string" == (o = a(t = s)) || "number" == o || "symbol" == o || "boolean" == o ? "__proto__" !== t : null === t) ? n["string" == typeof s ? "string" : "hash"] : n.map
    }
    function le(e) {
        var a = -1,
            s = null == e ? 0 : e.length;
        for (this.clear(); ++a < s;) {
            var t = e[a];
            this.set(t[0], t[1])
        }
    }
    re.prototype.clear = function() {
        this.__data__ = te ? te(null) : {},
        this.size = 0
    },
    re.prototype.delete = function(e) {
        var a = this.has(e) && delete this.__data__[e];
        return this.size -= a ? 1 : 0, a
    },
    re.prototype.get = function(e) {
        var a = this.__data__;
        if (te) {
            var s = a[e];
            return "__lodash_hash_undefined__" === s ? void 0 : s
        }
        return oe.call(a, e) ? a[e] : void 0
    },
    re.prototype.has = function(e) {
        var a = this.__data__;
        return te ? void 0 !== a[e] : ne.call(a, e)
    },
    re.prototype.set = function(e, a) {
        var s = this.__data__;
        return this.size += this.has(e) ? 0 : 1, s[e] = te && void 0 === a ? "__lodash_hash_undefined__" : a, this
    },
    le.prototype.clear = function() {
        this.size = 0,
        this.__data__ = {
            hash: new re,
            map: new (se || C),
            string: new re
        }
    },
    le.prototype.delete = function(e) {
        var a = ie(this, e).delete(e);
        return this.size -= a ? 1 : 0, a
    },
    le.prototype.get = function(e) {
        return ie(this, e).get(e)
    },
    le.prototype.has = function(e) {
        return ie(this, e).has(e)
    },
    le.prototype.set = function(e, a) {
        var s = ie(this, e),
            t = s.size;
        return s.set(e, a), this.size += s.size == t ? 0 : 1, this
    };
    function de(e) {
        var a = this.__data__ = new C(e);
        this.size = a.size
    }
    de.prototype.clear = function() {
        this.__data__ = new C,
        this.size = 0
    },
    de.prototype.delete = function(e) {
        var a = this.__data__,
            s = a.delete(e);
        return this.size = a.size, s
    },
    de.prototype.get = function(e) {
        return this.__data__.get(e)
    },
    de.prototype.has = function(e) {
        return this.__data__.has(e)
    },
    de.prototype.set = function(e, a) {
        var s = this.__data__;
        if (s instanceof C) {
            var t = s.__data__;
            if (!se || t.length < 199)
                return t.push([e, a]), this.size = ++s.size, this;
            s = this.__data__ = new le(t)
        }
        return s.set(e, a), this.size = s.size, this
    };
    var ue = function() {
        try {
            var e = ae(Object, "defineProperty");
            return e({}, "", {}), e
        } catch (e) {}
    }();
    function ce(e, a, s) {
        "__proto__" == a && ue ? ue(e, a, {
            configurable: !0,
            enumerable: !0,
            value: s,
            writable: !0
        }) : e[a] = s
    }
    function pe(e, a, s) {
        (void 0 !== s && !q(e[a], s) || void 0 === s && !(a in e)) && ce(e, a, s)
    }
    var me,
        he = function(e, a, s) {
            for (var t = -1, o = Object(e), n = s(e), r = n.length; r--;) {
                var i = n[me ? r : ++t];
                if (!1 === a(o[i], i, o))
                    break
            }
            return e
        },
        ye = "object" == (void 0 === e ? "undefined" : a(e)) && e && !e.nodeType && e,
        ge = ye && "object" == ("undefined" == typeof module ? "undefined" : a(module)) && module && !module.nodeType && module,
        be = ge && ge.exports === ye ? I.Buffer : void 0,
        fe = be ? be.allocUnsafe : void 0;
    var ke = I.Uint8Array;
    function ve(e, a) {
        var s,
            t,
            o = a ? (s = e.buffer, t = new s.constructor(s.byteLength), new ke(t).set(new ke(s)), t) : e.buffer;
        return new e.constructor(o, e.byteOffset, e.length)
    }
    var we = Object.create,
        xe = function() {
            function e() {}
            return function(a) {
                if (!G(a))
                    return {};
                if (we)
                    return we(a);
                e.prototype = a;
                var s = new e;
                return e.prototype = void 0, s
            }
        }();
    var ze,
        je,
        Se = (ze = Object.getPrototypeOf, je = Object, function(e) {
            return ze(je(e))
        }),
        _e = Object.prototype;
    function qe(e) {
        var a = e && e.constructor;
        return e === ("function" == typeof a && a.prototype || _e)
    }
    function Ee(e) {
        return null != e && "object" == a(e)
    }
    function Ae(e) {
        return Ee(e) && "[object Arguments]" == D(e)
    }
    var Ce = Object.prototype,
        Le = Ce.hasOwnProperty,
        Te = Ce.propertyIsEnumerable,
        Ie = Ae(function() {
            return arguments
        }()) ? Ae : function(e) {
            return Ee(e) && Le.call(e, "callee") && !Te.call(e, "callee")
        },
        Me = Array.isArray;
    function Oe(e) {
        return "number" == typeof e && e > -1 && e % 1 == 0 && e <= 9007199254740991
    }
    function Re(e) {
        return null != e && Oe(e.length) && !B(e)
    }
    var Pe = "object" == (void 0 === e ? "undefined" : a(e)) && e && !e.nodeType && e,
        $e = Pe && "object" == ("undefined" == typeof module ? "undefined" : a(module)) && module && !module.nodeType && module,
        He = $e && $e.exports === Pe ? I.Buffer : void 0,
        Ne = (He ? He.isBuffer : void 0) || function() {
            return !1
        },
        De = Function.prototype,
        Ge = Object.prototype,
        Be = De.toString,
        Fe = Ge.hasOwnProperty,
        We = Be.call(Object);
    var Ye = {};
    Ye["[object Float32Array]"] = Ye["[object Float64Array]"] = Ye["[object Int8Array]"] = Ye["[object Int16Array]"] = Ye["[object Int32Array]"] = Ye["[object Uint8Array]"] = Ye["[object Uint8ClampedArray]"] = Ye["[object Uint16Array]"] = Ye["[object Uint32Array]"] = !0,
    Ye["[object Arguments]"] = Ye["[object Array]"] = Ye["[object ArrayBuffer]"] = Ye["[object Boolean]"] = Ye["[object DataView]"] = Ye["[object Date]"] = Ye["[object Error]"] = Ye["[object Function]"] = Ye["[object Map]"] = Ye["[object Number]"] = Ye["[object Object]"] = Ye["[object RegExp]"] = Ye["[object Set]"] = Ye["[object String]"] = Ye["[object WeakMap]"] = !1;
    var Je = "object" == (void 0 === e ? "undefined" : a(e)) && e && !e.nodeType && e,
        Ue = Je && "object" == ("undefined" == typeof module ? "undefined" : a(module)) && module && !module.nodeType && module,
        Xe = Ue && Ue.exports === Je && L.process,
        Ve = function() {
            try {
                var e = Ue && Ue.require && Ue.require("util").types;
                return e || Xe && Xe.binding && Xe.binding("util")
            } catch (e) {}
        }(),
        Ke = Ve && Ve.isTypedArray,
        Qe = Ke ? function(e) {
            return function(a) {
                return e(a)
            }
        }(Ke) : function(e) {
            return Ee(e) && Oe(e.length) && !!Ye[D(e)]
        };
    function Ze(e, a) {
        if (("constructor" !== a || "function" != typeof e[a]) && "__proto__" != a)
            return e[a]
    }
    var ea = Object.prototype.hasOwnProperty;
    function aa(e, a, s) {
        var t = e[a];
        ea.call(e, a) && q(t, s) && (void 0 !== s || a in e) || ce(e, a, s)
    }
    var sa = /^(?:0|[1-9]\d*)$/;
    function ta(e, s) {
        var t = a(e);
        return !!(s = null == s ? 9007199254740991 : s) && ("number" == t || "symbol" != t && sa.test(e)) && e > -1 && e % 1 == 0 && e < s
    }
    var oa = Object.prototype.hasOwnProperty;
    function na(e, a) {
        var s = Me(e),
            t = !s && Ie(e),
            o = !s && !t && Ne(e),
            n = !s && !t && !o && Qe(e),
            r = s || t || o || n,
            i = r ? function(e, a) {
                for (var s = -1, t = Array(e); ++s < e;)
                    t[s] = a(s);
                return t
            }(e.length, String) : [],
            l = i.length;
        for (var d in e)
            !a && !oa.call(e, d) || r && ("length" == d || o && ("offset" == d || "parent" == d) || n && ("buffer" == d || "byteLength" == d || "byteOffset" == d) || ta(d, l)) || i.push(d);
        return i
    }
    var ra = Object.prototype.hasOwnProperty;
    function ia(e) {
        if (!G(e))
            return function(e) {
                var a = [];
                if (null != e)
                    for (var s in Object(e))
                        a.push(s);
                return a
            }(e);
        var a = qe(e),
            s = [];
        for (var t in e)
            ("constructor" != t || !a && ra.call(e, t)) && s.push(t);
        return s
    }
    function la(e) {
        return Re(e) ? na(e, !0) : ia(e)
    }
    function da(e) {
        return function(e, a, s, t) {
            var o = !s;
            s || (s = {});
            for (var n = -1, r = a.length; ++n < r;) {
                var i = a[n],
                    l = t ? t(s[i], e[i], i, s, e) : void 0;
                void 0 === l && (l = e[i]),
                o ? ce(s, i, l) : aa(s, i, l)
            }
            return s
        }(e, la(e))
    }
    function ua(e, a, s, t, o, n, r) {
        var i = Ze(e, s),
            l = Ze(a, s),
            d = r.get(l);
        if (d)
            pe(e, s, d);
        else {
            var u,
                c = n ? n(i, l, s + "", e, a, r) : void 0,
                p = void 0 === c;
            if (p) {
                var m = Me(l),
                    h = !m && Ne(l),
                    y = !m && !h && Qe(l);
                c = l,
                m || h || y ? Me(i) ? c = i : Ee(u = i) && Re(u) ? c = function(e, a) {
                    var s = -1,
                        t = e.length;
                    for (a || (a = Array(t)); ++s < t;)
                        a[s] = e[s];
                    return a
                }(i) : h ? (p = !1, c = function(e, a) {
                    if (a)
                        return e.slice();
                    var s = e.length,
                        t = fe ? fe(s) : new e.constructor(s);
                    return e.copy(t), t
                }(l, !0)) : y ? (p = !1, c = ve(l, !0)) : c = [] : function(e) {
                    if (!Ee(e) || "[object Object]" != D(e))
                        return !1;
                    var a = Se(e);
                    if (null === a)
                        return !0;
                    var s = Fe.call(a, "constructor") && a.constructor;
                    return "function" == typeof s && s instanceof s && Be.call(s) == We
                }(l) || Ie(l) ? (c = i, Ie(i) ? c = da(i) : G(i) && !B(i) || (c = function(e) {
                    return "function" != typeof e.constructor || qe(e) ? {} : xe(Se(e))
                }(l))) : p = !1
            }
            p && (r.set(l, c), o(c, l, t, n, r), r.delete(l)),
            pe(e, s, c)
        }
    }
    function ca(e, a, s, t, o) {
        e !== a && he(a, (function(n, r) {
            if (o || (o = new de), G(n))
                ua(e, a, r, s, ca, t, o);
            else {
                var i = t ? t(Ze(e, r), n, r + "", e, a, o) : void 0;
                void 0 === i && (i = n),
                pe(e, r, i)
            }
        }), la)
    }
    function pa(e) {
        return e
    }
    function ma(e, a, s) {
        switch (s.length) {
        case 0:
            return e.call(a);
        case 1:
            return e.call(a, s[0]);
        case 2:
            return e.call(a, s[0], s[1]);
        case 3:
            return e.call(a, s[0], s[1], s[2])
        }
        return e.apply(a, s)
    }
    var ha = Math.max;
    var ya = ue ? function(e, a) {
            return ue(e, "toString", {
                configurable: !0,
                enumerable: !1,
                value: (s = a, function() {
                    return s
                }),
                writable: !0
            });
            var s
        } : pa,
        ga = Date.now;
    var ba = function(e) {
        var a = 0,
            s = 0;
        return function() {
            var t = ga(),
                o = 16 - (t - s);
            if (s = t, o > 0) {
                if (++a >= 800)
                    return arguments[0]
            } else
                a = 0;
            return e.apply(void 0, arguments)
        }
    }(ya);
    function fa(e, a) {
        return ba(function(e, a, s) {
            return a = ha(void 0 === a ? e.length - 1 : a, 0), function() {
                for (var t = arguments, o = -1, n = ha(t.length - a, 0), r = Array(n); ++o < n;)
                    r[o] = t[a + o];
                o = -1;
                for (var i = Array(a + 1); ++o < a;)
                    i[o] = t[o];
                return i[a] = s(r), ma(e, this, i)
            }
        }(e, a, pa), e + "")
    }
    var ka,
        va = (ka = function(e, a, s) {
            ca(e, a, s)
        }, fa((function(e, s) {
            var t = -1,
                o = s.length,
                n = o > 1 ? s[o - 1] : void 0,
                r = o > 2 ? s[2] : void 0;
            for (n = ka.length > 3 && "function" == typeof n ? (o--, n) : void 0, r && function(e, s, t) {
                if (!G(t))
                    return !1;
                var o = a(s);
                return !!("number" == o ? Re(t) && ta(s, t.length) : "string" == o && s in t) && q(t[s], e)
            }(s[0], s[1], r) && (n = o < 3 ? void 0 : n, o = 1), e = Object(e); ++t < o;) {
                var i = s[t];
                i && ka(e, i, t, n)
            }
            return e
        }))),
        wa = "gameState",
        xa = {
            boardState: null,
            evaluations: null,
            rowIndex: null,
            solution: null,
            gameStatus: null,
            lastPlayedTs: null,
            lastCompletedTs: null,
            restoringFromLocalStorage: null,
            hardMode: !1
        };
    function za() {
        var e = window.localStorage.getItem(wa) || JSON.stringify(xa);
        return JSON.parse(e)
    }
    function ja(e) {
        var a = za();
        !function(e) {
            window.localStorage.setItem(wa, JSON.stringify(e))
        }(va(a, e))
    }
    var Sa = document.createElement("template");
    // todo probably fix the email still going to wordle
    Sa.innerHTML = '\n  <style>\n  .setting {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    border-bottom: 1px solid var(--color-tone-4);\n    padding: 16px 0;\n  }\n\n  a, a:visited {\n    color: var(--color-tone-2);\n  }\n\n  .title {\n    font-size: 18px;\n  }\n  .text {\n    padding-right: 8px;\n  }\n  .description {\n    font-size: 12px;\n    color: var(--color-tone-2);\n  }\n\n  #footnote {\n    position: absolute;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    padding: 16px;\n    color: var(--color-tone-2);\n    font-size: 12px;\n    text-align: right;\n    display: flex;\n    justify-content: space-between;\n    align-items: flex-end;\n  }\n\n  #privacy-policy,\n  #copyright {\n    text-align: left;\n  }\n\n  @media only screen and (min-device-width : 320px) and (max-device-width : 480px) {\n    .setting {\n      padding: 16px;\n    }\n  }\n\n  </style>\n  <div class="sections">\n    <section>\n      <div class="setting">\n        <div class="text">\n          <div class="title">Hard Mode</div>\n          <div class="description">Any revealed hints must be used in subsequent guesses</div>\n        </div>\n        <div class="control">\n          <game-switch id="hard-mode" name="hard-mode"></game-switch>\n        </div>\n      </div>\n      <div class="setting">\n        <div class="text">\n          <div class="title">Dark Theme</div>\n        </div>\n        <div class="control">\n          <game-switch id="dark-theme" name="dark-theme"></game-switch>\n        </div>\n      </div>\n      <div class="setting">\n        <div class="text">\n          <div class="title">Color Blind Mode</div>\n          <div class="description">High contrast colors</div>\n        </div>\n        <div class="control">\n          <game-switch id="color-blind-theme" name="color-blind-theme"></game-switch>\n        </div>\n      </div>\n    </section>\n\n    <section>\n      <div class="setting">\n        <div class="text">\n          <div class="title">Feedback</div>\n        </div>\n        <div class="control">\n          <a href="mailto:support@turtles.com?subject=Feedback!" title="support@turtles.com">Email</a>\n          |\n          <a href="https://twitter.com/intent/tweet?screen_name=turtles" target="blank" title="@turtles">Twitter</a>\n        </div>\n      </div>\n    </section>\n  </div>\n  <div id="footnote">\n    <div>\n          </div>\n    <div>\n      <div id="puzzle-number"></div>\n      <div id="hash"></div>\n    </div>\n  </div>\n';
    var _a = function(e) {
        r(t, e);
        var a = h(t);
        function t() {
            var e;
            return s(this, t), n(p(e = a.call(this)), "gameApp", void 0), e.attachShadow({
                mode: "open"
            }), e
        }
        return o(t, [{
            key: "connectedCallback",
            value: function() {
                var e,
                    a = this;
                this.shadowRoot.appendChild(Sa.content.cloneNode(!0)),
                this.shadowRoot.querySelector("#hash").textContent = null === (e = window.turtle) || void 0 === e ? void 0 : e.hash,
                this.shadowRoot.querySelector("#puzzle-number").textContent = "#".concat(this.gameApp.dayOffset),
                this.shadowRoot.addEventListener("game-switch-change", (function(e) {
                    e.stopPropagation();
                    var s = e.detail,
                        t = s.name,
                        o = s.checked,
                        n = s.disabled;
                    a.dispatchEvent(new CustomEvent("game-setting-change", {
                        bubbles: !0,
                        composed: !0,
                        detail: {
                            name: t,
                            checked: o,
                            disabled: n
                        }
                    })),
                    a.render()
                })),
                this.render()
            }
        }, {
            key: "render",
            value: function() {
                var e = document.querySelector("body");
                e.classList.contains("nightmode") && this.shadowRoot.querySelector("#dark-theme").setAttribute("checked", ""),
                e.classList.contains("colorblind") && this.shadowRoot.querySelector("#color-blind-theme").setAttribute("checked", "");
                var a = za();
                a.hardMode && this.shadowRoot.querySelector("#hard-mode").setAttribute("checked", ""),
                a.hardMode || "IN_PROGRESS" !== a.gameStatus || 0 === a.rowIndex || (this.shadowRoot.querySelector("#hard-mode").removeAttribute("checked"), this.shadowRoot.querySelector("#hard-mode").setAttribute("disabled", ""))
            }
        }]), t
    }(c(HTMLElement));
    customElements.define("game-settings", _a);
    var qa = document.createElement("template");
    qa.innerHTML = '\n  <style>\n    .toast {\n      position: relative;\n      margin: 16px;\n      background-color: var(--color-tone-1);\n      color: var(--color-tone-7);\n      padding: 16px;\n      border: none;\n      border-radius: 4px;\n      opacity: 1;\n      transition: opacity 300ms cubic-bezier(0.645, 0.045, 0.355, 1);\n      font-weight: 700;\n    }\n    .win {\n      background-color: var(--color-correct);\n      color: var(--tile-text-color);\n    }\n    .fade {\n      opacity: 0;\n    }\n  </style>\n  <div class="toast"></div>\n';
    var Ea,
        Aa = function(e) {
            r(t, e);
            var a = h(t);
            function t() {
                var e;
                return s(this, t), n(p(e = a.call(this)), "_duration", void 0), e.attachShadow({
                    mode: "open"
                }), e
            }
            return o(t, [{
                key: "connectedCallback",
                value: function() {
                    var e = this;
                    this.shadowRoot.appendChild(qa.content.cloneNode(!0));
                    var a = this.shadowRoot.querySelector(".toast");
                    a.textContent = this.getAttribute("text"),
                    this._duration = this.getAttribute("duration") || 1e3,
                    "Infinity" !== this._duration && setTimeout((function() {
                        a.classList.add("fade")
                    }), this._duration),
                    a.addEventListener("transitionend", (function(a) {
                        e.parentNode.removeChild(e)
                    }))
                }
            }]), t
        }(c(HTMLElement));
    function Ca() {
        dataLayer.push(arguments)
    }
    customElements.define("game-toast", Aa),
    window.dataLayer = window.dataLayer || [],
    Ca("js", new Date);
    Ca("config", "G-2SSGMHY3NP", {
        app_version: null === (Ea = window.turtle) || void 0 === Ea ? void 0 : Ea.hash,
        debug_mode: !1
    });
    var La = ["turtle"],
        // Their initial list does appear to be a subset, ours is still at g while theirs is at z
        // should probably screen for bad words... removed around 20 based on wikipedia list
        // wonder how worlde did it originally, maybe they don't have duplicates in the correct list? but did they sort that manually?
        Ta = ["aahing","aaliis","aarrgh","ababua","abacay","abacas","abacli","abacot","abacus","abadia","abayah","abakas","abamps","abanet","abanga","abanic","abaris","abased","abaser","abases","abasgi","abasia","abasic","abasio","abassi","abated","abater","abates","abatic","abatis","abaton","abator","abattu","abatua","abbacy","abbaye","abbasi","abbate","abbeys","abbess","abbest","abbots","abbott","abbrev","abcess","abdali","abdest","abdiel","abduce","abduct","abedge","abegge","abeigh","abeles","abelia","abends","aberia","abesse","abhors","abidal","abided","abider","abides","abiegh","abient","abigei","abying","abilao","abilla","abipon","abysms","abyssa","abject","abjure","abkari","abkary","abkhas","ablach","ablare","ablate","ablaut","ablaze","ablend","ablest","ablins","ablock","abloom","ablude","ablush","ablute","abmhos","abnaki","aboard","abobra","abodah","aboded","abodes","abohms","abolla","abomas","abongo","abonne","aborad","aboral","aborts","abound","abouts","aboves","abrade","abraid","abrase","abrash","abraum","abrazo","abreed","abrege","abreid","abrico","abrine","abroad","abroma","abrood","abrook","abrupt","abscam","abseil","absent","absist","absmho","absohm","absoil","absorb","absume","absurd","abucco","abulia","abulic","aburst","abused","abusee","abuser","abuses","abvolt","abwatt","acacia","acacin","acadia","acadie","acaena","acajou","acamar","acanth","acarid","acarol","acarus","acater","acates","accede","accend","accent","accept","access","accise","accite","accloy","accoil","accoll","accord","accost","accrue","accumb","accupy","accuse","acedia","aceite","acerae","aceric","acerin","acerli","acerra","acetal","acetic","acetyl","acetin","acetla","acetol","acetum","achafe","achage","achape","achate","acheat","achech","acheck","acheer","achene","achete","achier","achill","achime","aching","achira","achkan","achoke","achras","achree","achtel","achter","achuas","acider","acidic","acidyl","acidly","acylal","acinar","acinic","acinus","ackees","ackeys","ackman","ackmen","acknew","acknow","ackton","acloud","acmaea","acmite","acnida","acnode","acoasm","acoela","acoine","acomia","aconic","aconin","acopic","acopon","acorea","acoria","acorns","acorus","acoupa","acoupe","acquit","acracy","acrasy","acrawl","acraze","acreak","acream","acrisy","acrita","acrite","acrity","acrock","acrook","acrose","across","actaea","actiad","actian","actify","actine","acting","actins","action","actium","active","actory","actors","actual","acture","acuate","acuchi","acuity","aculea","aculei","acumen","acuter","acutes","adages","adagio","adaize","adalat","adalid","adamas","adamic","adance","adapid","adapis","adapts","adarme","adatis","adatom","adaunt","adcons","addeem","addend","adders","addice","addict","adding","addita","addled","addles","addoom","adduce","adduct","adeems","adelea","adelia","adempt","adenia","adenyl","adenin","adeona","adepts","adesmy","adeste","adhaka","adhara","adhere","adhort","adiate","adicea","adient","adieus","adieux","adigei","adighe","adight","adipic","adipyl","adipsy","adital","aditio","adyton","adytta","adytum","aditus","adject","adjiga","adjoin","adjure","adjust","adjute","adless","admass","admire","admits","admixt","admove","adnate","adnexa","adnoun","adobes","adobos","adolph","adonai","adonia","adonic","adonin","adonis","adoors","adopts","adoral","adored","adorer","adores","adorno","adorns","adread","adream","adreno","adrent","adrian","adrift","adroit","adroop","adsbud","adsorb","aduana","adular","adulce","adults","advect","advena","advene","advent","adverb","advert","advice","advise","advisy","adviso","advoke","adward","aeacus","aeaean","aecial","aecium","aedegi","aedile","aedine","aefald","aegean","aegina","aenach","aenean","aeneas","aeneid","aeneus","aeolia","aeolic","aeolid","aeolis","aeolus","aeonic","aequor","aerage","aerate","aerial","aeried","aerier","aeries","aerify","aerily","aerobe","aerope","aerose","aerugo","aestii","aestus","aether","aethon","aetian","afaced","afaint","afeard","afenil","afetal","affair","affect","affeer","affeir","affere","affich","affied","affies","affile","affine","affing","affirm","affixt","afflue","afflux","afford","affray","affrap","affret","affuse","afghan","afield","aflame","aflare","afloat","aflush","afocal","afraid","afreet","afresh","afrete","africa","afridi","afrite","afrits","afront","afrown","afshah","afshar","aftaba","afters","aftosa","agaces","agadic","agalma","agamae","agamas","agamic","agamid","agamis","agapae","agapai","agaric","agarum","agates","agatha","agaves","agawam","agazed","agedly","ageing","ageism","ageist","agency","agenda","agenes","agents","aggers","aggest","aggies","aggros","aghast","aghori","agible","agings","agynic","agyria","agisms","agists","aglaia","aglaos","aglare","agleaf","agleam","aglets","aglint","agnail","agname","agnate","agnean","agneau","agnize","agnosy","agogic","agoing","agonal","agones","agonia","agonic","agorae","agoras","agorot","agouta","agouti","agouty","agrace","agrafe","agreat","agreed","agreer","agrees","agrege","agrest","agrias","agrief","agriot","agrise","agrito","agroan","agroof","agrope","agrote","agrufe","agruif","aguada","aguaji","aguara","aguilt","aguise","aguish","agujon","agunah","ahchoo","ahimsa","ahmadi","ahmedi","aholds","ahorse","ahtena","ahuaca","ahuula","aidant","aidenn","aiders","aidful","aiding","aidman","aidmen","ayenst","aiglet","aigret","ayield","aikane","aikido","aikona","aileen","ayless","ailing","ailuro","aimara","aymara","aimers","aimful","aiming","aimore","aymoro","ainhum","aiolis","airbag","airbus","airers","airest","airier","airify","airily","airing","airish","airman","airmen","airted","airths","airway","aisled","aisles","aissor","aythya","aition","aivers","aiwain","aizoon","ajenjo","ajimez","ajivas","ajoint","ajoure","ajowan","ajugas","akamai","akania","akaroa","akasha","akawai","akazga","akcheh","akeake","akebia","akelas","akeley","akenes","aketon","akhara","akhrot","akhund","akimbo","akmite","akoasm","akonge","alacha","alagao","alagau","alahee","alaihi","alaite","alalia","alaloi","alalus","alamos","alands","alange","alanyl","alanin","alants","alares","alarge","alaria","alaric","alarms","alarum","alasas","alaska","alated","alauda","alaund","alaunt","alazor","albany","albata","albedo","albeit","albert","albian","albify","albino","albion","albite","alboin","albuca","albugo","albums","alburn","alcade","alcaic","alcaid","alcali","alcedo","alchem","alcids","alcine","alcyon","alclad","alcove","alcumy","aldane","aldeia","aldern","alders","aldide","aldime","aldine","aldols","aldose","aldrin","alecup","alegar","aleger","alenge","alephs","alepot","aleppo","alerce","alerse","alerta","alerts","alesan","aletap","alette","alevin","alexas","alexia","alexic","alexin","alexis","alezan","alfaje","alfaki","alfirk","alfred","alfuro","algate","algedi","algedo","algine","algins","algist","algoid","algors","algous","algums","alhagi","alhena","alibis","alible","alicia","alidad","aliene","aliens","alight","aligns","aliyah","aliyas","aliyos","alined","aliner","alines","alinit","alioth","aliped","alipin","alypin","alypum","alisma","alison","alisos","aliter","alytes","alives","aljama","aljoba","alkaid","alkali","alkane","alkene","alkide","alkyds","alkies","alkyls","alkine","alkyne","alkool","alkoxy","allays","allect","allege","alleys","allele","allene","alleve","allice","allied","allies","allyic","allyls","allyou","allium","allody","allods","alloys","allose","allots","allows","alloxy","alltud","allude","allure","almach","almahs","almain","almehs","almery","almice","almida","almira","almner","almoin","almond","almose","almost","almous","almuce","almude","almuds","almugs","almury","alnage","alnath","alnein","alnico","alnuin","alodia","alogia","alohas","aloyau","aloins","alonso","alonzo","aloofe","aloose","alpaca","alpeen","alphas","alphyl","alphin","alphyn","alphol","alphos","alpian","alpieu","alpine","alpist","alraun","alroot","alruna","alrune","alsike","alsine","alsoon","altaic","altaid","altair","altars","altern","alters","alteza","althea","altica","altify","altoun","alture","aludel","aludra","alulae","alular","alulet","alulim","alumel","alumen","alumic","alumin","alumna","alumni","alupag","alveus","alvina","alvine","alvite","always","alwise","alwite","amabel","amable","amadan","amadis","amadou","amaine","amaist","amalic","amamau","amanda","amande","amania","amante","amarin","amarna","amarth","amasta","amasty","amated","amatol","amazed","amazer","amazes","amazia","amazon","ambach","ambage","ambari","ambary","ambash","ambeer","ambery","ambers","ambier","ambigu","ambits","ambled","ambler","ambles","ambury","ambush","amdahl","amebae","ameban","amebas","amebic","amebid","amedeo","ameers","ameiva","amelet","amelia","amelus","amende","amends","amenia","amenta","amenty","aments","amerce","amgarn","amhran","amiant","amical","amiced","amices","amicus","amides","amidic","amidid","amidin","amidol","amidon","amydon","amidst","amigas","amigos","amylan","amiles","amylic","amylin","amylom","amylon","amylum","amimia","amines","aminic","aminta","amyous","amiray","amiral","amyrin","amyris","amyrol","amytal","amitie","amixia","amlong","ammeos","ammine","ammino","ammono","amniac","amnion","amnios","amober","amobyr","amoeba","amoyan","amoles","amomal","amomis","amomum","amoral","amores","amoret","amorph","amorua","amotus","amouli","amount","amours","amoved","amparo","ampere","ampery","amphib","amphid","ampler","amplex","ampule","ampuls","amrita","amsath","amtman","amtmen","amtrac","amtrak","amucks","amugis","amuyon","amulae","amulas","amulet","amulla","amunam","amurca","amurru","amused","amusee","amuser","amuses","amusgo","amusia","anabas","anabia","anaces","anacid","anadem","anagap","anagep","anagua","anahao","anahau","anakes","analav","analyt","anally","analog","ananas","ananda","ananym","ananke","anansi","ananta","anapes","anaphe","anaqua","anarch","anarya","anatox","anatta","anatto","anatum","anaxon","anbury","anchat","anchor","ancien","ancile","ancoly","ancome","ancona","ancone","ancony","ancora","andean","anders","andevo","andhra","andian","andine","anding","andira","andoke","andrea","andrew","andria","andric","androl","andron","anears","aneath","aneled","aneles","anemia","anemic","anenst","anepia","anergy","anerly","anesis","anetic","aneuch","anezeh","angami","angara","angary","angela","angelo","angels","angers","angico","angild","angili","angilo","angina","angled","angler","angles","anglic","anglos","angola","angora","angsts","anguid","anguis","angula","angule","angust","anhang","anhele","anhima","anicca","anicut","anight","anyhow","anilao","anilau","anilic","anilid","anilin","anilla","animal","animas","animes","animis","animus","anyone","anions","anisal","anises","anisic","anisil","anisyl","anisol","anisum","anitos","anyway","anywhy","ankara","ankles","anklet","ankoli","ankush","anlace","anlage","anlaut","annale","annaly","annals","annard","annary","annats","anneal","annect","annexa","annexe","annist","annite","annoys","annona","annual","annule","annuli","annuls","anodal","anodes","anodic","anodon","anodos","anogra","anoine","anoint","anoles","anolis","anomal","anomer","anomia","anomic","anomie","anonad","anonym","anonol","anopia","anopla","anopsy","anorak","anorth","anosia","anotia","anotta","anotto","anotus","anoura","anoure","anoxia","anoxic","ansate","anseis","anselm","answer","antara","antdom","anteal","anteed","anteri","anteva","anthem","anther","anthol","anthos","anthus","antiae","antiar","antica","antick","antics","anting","antisi","antjar","antler","antlia","antlid","antony","antral","antres","antrin","antrum","anubin","anubis","anukit","anural","anuran","anuria","anuric","anuses","anusim","anvils","aogiri","aonach","aonian","aorist","aortae","aortal","aortas","aortic","aosmic","aouads","aoudad","apache","apayao","apaise","apalit","aparai","apatan","apathy","apedom","apelet","apeman","apepsy","aperch","apercu","aperea","apexed","apexes","apheta","aphids","aphodi","aphony","aphtha","apiaca","apiary","apicad","apical","apices","apidae","apiece","apinae","apinch","apioid","apiole","apiose","aplace","aplite","aplomb","aplome","apluda","apneal","apneas","apneic","apnoea","apocha","apodal","apodan","apodes","apodia","apogee","apogon","apoise","apolar","apollo","apolog","aponia","aponic","aporia","aposia","apozem","appair","appale","appall","appals","appast","appeal","appear","appels","append","appere","appert","appete","appius","appled","apples","applot","apport","appose","approx","aprons","aprowl","aptate","aptera","aptest","aptian","aptote","apulse","aquage","aquake","aquate","aquila","aquose","araban","arabia","arabic","arabin","arabis","arabit","arable","arache","aradid","arayne","arains","araire","araise","arales","aralia","aralie","aramid","aramis","aramus","aranea","aranga","arango","ararao","arauan","arauna","arawak","arbalo","arbela","arbith","arbory","arbors","arbota","arbour","arbtrn","arbust","arbute","arcade","arcady","arcana","arcane","arcate","arcato","arccos","archae","archai","arched","archer","arches","archie","archil","archin","archit","archly","archon","arcing","arcite","arcked","arcose","arcsin","arctan","arctia","arctic","arctos","arcual","arcula","ardass","ardeae","ardebs","ardeid","ardent","ardish","arditi","ardito","ardors","ardour","ardure","areach","aready","arecas","areche","areito","arenae","arenas","arenga","arenig","areola","areole","aretes","arette","argala","argali","argals","argand","argans","argean","argema","argent","arghan","arghel","argify","argyle","argyll","argils","argine","argive","argled","argles","argoan","argols","argons","argosy","argots","argued","arguer","argues","argufy","arguta","argute","arhats","ariana","aryans","aribin","aricin","arided","arider","aridge","aridly","ariels","aright","arigue","ariled","arilli","ariole","ariose","ariosi","arioso","arised","arisen","ariser","arises","arista","ariste","aristo","arkite","arkose","arlene","arleng","arless","arline","arling","arloup","armada","armado","armary","armata","armers","armets","armful","armida","armied","armies","armill","armine","arming","armlet","armory","armors","armour","armpad","armpit","armure","arnaut","arnica","arnold","aroast","aroids","aroint","aroynt","arolia","arolla","aromal","aromas","aronia","aroras","around","arouse","aroxyl","arpens","arpent","arrace","arrach","arrack","arrage","arrays","arrame","arrand","arrant","arrear","arrect","arrent","arrest","arrhal","arriba","arride","arriet","arrish","arrive","arroba","arrode","arroya","arroyo","arrope","arrowy","arrows","arrtez","arseno","arshin","arsine","arsino","arsono","arsons","artaba","artabe","artels","artery","artful","artgum","arthel","arthra","arthur","artiad","artier","artily","artist","artize","artlet","arumin","arundo","arunta","arusha","arzava","arzawa","asahel","asarin","asaron","asarta","asarum","asbest","ascape","ascare","ascebc","ascend","ascent","ascham","ascher","ascian","ascill","ascitb","ascite","ascoma","ascots","ascula","asdics","aseity","aselar","aselli","asemia","asemic","asfast","asgard","ashake","ashame","ashcan","ashery","ashier","ashily","ashine","ashing","ashkey","ashlar","ashler","ashman","ashmen","ashore","ashpan","ashpit","ashraf","ashram","asians","asiden","asides","asideu","asilid","asylum","asilus","asimen","asitia","askant","askari","askers","askile","asking","askoye","aslake","aslant","asleep","aslope","asmack","asmear","asmile","asmoke","asnort","asonia","asouth","aspace","aspect","aspens","aspern","aspers","aspics","aspide","aspire","aspish","asport","aspout","asquat","asrama","assacu","assahy","assail","assais","assays","assary","assart","assate","assaut","assbaa","asseal","asself","assent","assert","assess","asseth","assets","assify","assign","assisa","assise","assish","assisi","assist","assith","assyth","assize","assman","assoil","assoin","assort","assume","assurd","assure","astalk","astare","astart","astate","asteam","asteep","asteer","astely","astern","asters","astert","asthma","astian","astint","astite","astond","astone","astony","astoop","astore","astray","astral","astrer","astrid","astrol","astron","astrut","astute","asuang","aswail","aswarm","aswash","asweat","aswell","asweve","aswing","aswirl","aswoon","atabal","atabeg","atabek","atalan","ataman","ataunt","atavic","atavus","ataxia","ataxic","atazir","atbash","ateles","atelic","athena","athens","athymy","athing","athink","athold","athort","athrob","atimon","atinga","atypic","atlatl","atloid","atmans","atocha","atocia","atokal","atolls","atomic","atonal","atoned","atoner","atones","atonia","atonic","atopen","atopic","atorai","atossa","atoxic","atoxyl","atrail","atrede","atresy","atreus","atrial","atrypa","atrium","atroce","atropa","atrous","atsara","attach","attack","attain","attame","attars","attask","atteal","attend","attent","attery","attern","atterr","attest","attice","attics","attila","attire","attomy","attorn","attour","attrap","attrib","attune","atturn","atuami","atveen","atwain","atweel","atween","atwind","atwirl","atwist","atwite","atwixt","aubade","aubain","aubrey","auburn","auctor","aucuba","audace","audads","audian","audile","auding","audion","audios","audits","audrey","aufait","augean","augend","augers","aughts","augite","augrim","augure","augury","augurs","august","auhuhu","auklet","aulder","aulete","aullay","aumaga","aumail","aumbry","aumery","aumous","aumrie","auncel","aunter","auntie","auntly","auntre","aupaka","aurang","aurata","aurate","aureal","aurene","aureus","auride","aurify","auriga","aurigo","aurine","aurist","aurite","auroch","aurora","aurore","aurous","aurums","aurung","aurure","aushar","auspex","aussie","auster","austin","ausubo","autecy","autere","auteur","author","autism","autist","autoed","automa","autota","autumn","auxins","avails","avalon","avance","avania","avanyu","avanti","avaram","avatar","avaunt","aveloz","avener","avenge","avenin","avenue","averah","averia","averil","averin","averse","averts","avesta","avians","aviary","aviate","avichi","avidya","avidin","avidly","avijja","avikom","avions","avisos","avital","avitic","avives","avocat","avocet","avoids","avoyer","avoset","avouch","avoure","avowal","avowed","avower","avowry","avshar","avulse","awadhi","awaits","awaked","awaken","awakes","awalim","awanyu","awards","awaste","awatch","awater","aweary","awedly","aweigh","aweing","awhape","awheel","awheft","awhile","awhirl","awless","awmous","awning","awoken","aworry","aworth","awreak","awreck","awrist","awrong","awshar","axeman","axemen","axenic","axhead","axiate","axilla","axioms","axised","axises","axites","axlike","axonal","axones","axonia","axonic","axseed","axtree","axunge","axweed","axwise","axwort","azalea","azande","azazel","azides","azygos","azilut","azimin","azines","aziola","azlons","azoles","azolla","azonal","azonic","azores","azotea","azoted","azotes","azoths","azotic","azotin","azrael","azteca","aztecs","azured","azures","baaing","baalim","babasu","babbie","babbit","babble","babbly","babels","babery","babhan","babied","babies","babine","babion","babish","babism","babist","babite","babkas","bablah","babloh","baboen","babool","baboon","baboos","baboot","babuls","babuma","baburd","bacaba","bacach","baccae","baccar","bached","bachel","baches","bacile","backed","backen","backer","backet","backie","backup","backus","baclin","bacony","bacons","bacopa","bacula","bacule","baculi","bacury","badaga","badass","badaud","badawi","badaxe","badder","baddie","badged","badger","badges","badgir","badhan","badian","badman","badmen","baeria","baetyl","bafaro","baffed","baffle","bafyot","baftah","bagani","bagass","bagdad","bagels","bagful","bagged","bagger","baggie","baggit","baghla","bagios","bagman","bagmen","bagnes","bagnet","bagnio","bagnut","bagobo","bagong","bagpod","baguet","baguio","bagwig","bagwyn","bahada","bahama","bahera","bahima","bahuma","bahuts","bahutu","bayamo","bayano","bayard","baidak","baidar","baidya","baiera","bayeta","bayete","baying","bayish","baikie","bailed","bailee","bailey","bailer","baylet","bailie","bailli","bailor","bayman","baymen","bainie","bayong","bayous","bairam","bairdi","bairns","baited","baiter","baizas","baized","baizes","bajada","bajree","bajury","bakery","bakers","baking","bakshi","baktun","bakuba","bakula","bakutu","balaam","balada","balafo","balaic","balant","balaos","balata","balate","balawa","balawu","balboa","balche","balcon","balded","balden","balder","baldie","baldly","baleen","baleys","balers","balete","balian","","baline","baling","balita","baliti","balize","balkan","balkar","balked","balker","balkis","ballad","ballam","ballan","ballas","ballat","balled","baller","ballet","ballon","ballot","ballow","ballsy","ballup","balnea","baloch","balolo","balsam","balsas","baltei","balter","baltic","baltis","baluba","baluch","baluga","bamban","bamboo","bambos","bambuk","bammed","bamoth","banaba","banago","banana","banate","bancal","bancha","banchi","bancos","bancus","bandar","banded","bandel","bander","bandhu","bandie","bandit","bandle","bandog","bandon","bandor","bandos","banged","banger","banghy","bangia","bangle","bangos","bangup","banyai","banian","banyan","baniya","baning","banish","baniva","baniwa","banjos","banked","banker","banket","bannat","banned","banner","bannet","bannut","banque","banquo","bantay","bantam","banter","bantin","bantus","banuyo","banzai","baobab","baphia","baraca","baraka","barani","barato","baraza","barbal","barbar","barbas","barbed","barbel","barber","barbes","barbet","barble","barboy","barbra","barbre","barbut","barcan","barcas","barche","barcoo","barded","bardee","bardel","bardes","bardic","bardie","bareca","barege","bareka","barely","barest","barfed","barfly","barful","barged","bargee","barger","barges","bargir","barhal","barhop","baryes","barile","baring","baryon","barish","baryta","barite","baryte","barium","barkan","barked","barkey","barken","barker","barkle","barley","barlow","barman","barmen","barmie","barney","baroco","baroko","barolo","barong","baroni","barony","barons","baroto","barque","barrad","barras","barrat","barred","barrel","barren","barrer","barres","barret","barrio","barrow","barsac","barsom","barter","barton","baruch","barvel","barway","barwal","barwin","basale","basalt","basely","basest","bashaw","bashed","basher","bashes","basial","basics","basify","basils","basing","basins","basion","basked","basker","basket","basnat","basnet","basoga","basoid","basoko","basote","basque","bassan","basses","basset","bassia","bassie","bassly","basson","bassos","bassus","basted","basten","baster","bastes","baston","basuto","bataan","batara","batata","batavi","batboy","bateau","batell","batete","batful","bathed","bather","bathes","bathic","bathyl","bathos","batiks","bating","batino","batlan","batler","batlet","batlon","batman","batmen","batoid","batoka","batons","batoon","battak","batted","battel","batten","batter","battik","battle","batton","battue","batule","batzen","baubee","bauble","bauera","baulea","baulky","baulks","bauson","bautta","bavary","bavian","bavius","bavoso","bawbee","bawble","bawdry","bawled","bawley","bawler","bawrel","bawtie","baxter","bazaar","bazars","bazoos","beachy","beacon","beaded","beader","beadle","beagle","beaked","beaker","beamed","beamer","beaned","","beanie","beanos","beardy","beards","beared","bearer","beasts","beatae","beatas","beatee","beaten","beater","beatus","beaued","beaume","beaune","beauti","beauty","beauts","beaver","beback","bebait","bebang","bebite","bebled","beblot","bebops","beboss","bebump","bebusy","becall","becalm","became","becaps","becard","becchi","becher","bechic","becked","becker","becket","beckie","beckon","beclad","beclap","beclaw","beclip","beclog","become","becoom","becost","becram","becuna","becurl","bedaff","bedamn","bedamp","bedare","bedark","bedash","bedaub","bedawn","bedaze","bedbug","bedcap","bedded","bedder","bedead","bedeaf","bedebt","bedeck","bedeen","bedell","bedels","bedene","bedews","bedims","bedirt","bedkey","bedlam","bedlar","bedman","bedoyo","bedolt","bedote","bedown","bedpad","bedpan","bedral","bedrel","bedrid","bedrip","bedrop","bedrug","bedsit","beduck","beduin","beduke","bedull","bedumb","bedung","bedusk","bedust","bedway","beearn","beebee","beechy","beedom","beefed","beefer","beefin","beeish","beelol","beeman","beemen","beento","beeped","beeper","beetle","beeves","beeway","beezer","befall","befame","befell","befile","befire","befist","befits","beflag","beflap","beflea","beflum","befoam","befogs","befool","before","befoul","befret","befriz","befume","begall","begani","begari","begary","begash","begass","begats","begaud","begaze","begeck","begets","beggar","begged","begger","begift","begild","begins","begird","begirt","beglad","beglew","beglic","begluc","beglue","begnaw","begobs","begohm","begone","begoud","begowk","begray","begrim","beguin","begulf","begums","begunk","behale","behalf","behang","behave","behead","behear","beheld","behelp","behest","behymn","behind","behint","behold","behoof","behoot","behorn","behove","behowl","behung","beydom","beigel","beiges","beylic","beylik","beings","beinly","beyond","beirut","bejade","bejant","bejape","bejazz","bejuco","bekick","beking","bekiss","beknit","beknot","beknow","belace","belady","belage","belays","belait","belamy","belard","belash","belast","belate","belaud","beldam","belder","beleaf","beleap","beleed","beleft","beleve","belfry","belgae","belgas","belgic","belial","belick","belied","belief","belier","belies","belike","belili","belime","belion","belite","belive","belled","belles","bellic","bellis","bellon","bellow","bellum","beloam","belock","beloid","belone","belong","belook","belord","belout","belove","belows","belted","belter","beltie","beltir","beltis","belton","beluga","belute","bemail","bemaim","bemask","bemata","bemaul","bembex","bemeal","bemean","bemeet","bemete","bemire","bemist","bemixt","bemoan","bemoat","bemock","bemoil","bemole","bemolt","bemoon","bemuck","bemuse","bemusk","bename","benami","benben","benchy","benday","bended","bendee","bendel","bender","bendys","beneme","bengal","benign","bennel","bennes","bennet","bennis","benote","bensel","benshi","bensil","benson","benton","benumb","benzal","benzil","benzyl","benzin","benzol","bepaid","bepale","bepart","bepelt","bepile","bepill","bepity","bepray","bepuff","berain","berake","berapt","berate","berber","berean","berede","bereft","berend","berets","berger","bergut","beride","beryls","berime","bering","berith","berley","berlin","bermes","bernie","bernoo","beroll","berret","bersil","bersim","bertat","bertha","berths","bertie","bertin","berust","bervie","besand","besant","bescab","beseam","beseek","beseem","beseen","besets","beshag","beshod","beshow","beside","besigh","besing","beslab","beslap","beslow","beslur","besmut","besnow","besoil","besoin","besoms","besoot","besort","besots","besoul","besour","besped","bespew","bespin","bespit","bespot","bessel","besses","bessie","bestab","bestad","bestay","bestar","bested","bester","bestir","bestow","bestud","besugo","besuit","beswim","betail","betain","betake","betalk","betask","betear","beteem","betell","betels","bethel","betide","betime","betire","betise","betoya","betoil","betone","betony","betons","betook","betorn","betoss","betray","betrap","betrim","betsey","bettas","betted","better","bettor","betula","betwit","beulah","beurre","beveil","bevels","beveto","bevies","bevors","bewail","bewake","bewall","beware","bewary","bewash","beweep","bewend","bewept","bewest","bewhig","bewigs","bewith","bework","beworm","beworn","bewray","bewrap","bezant","bezazz","bezels","bezils","bezoar","bezzle","bhabar","bhadon","bhagat","bhajan","bhakta","bhakti","bhangi","bhangs","bharal","bharti","bhavan","bhikku","bhindi","bhisti","bhokra","bhoosa","bhoots","bhotia","bhumij","bhungi","bhutan","bhutia","biacid","bialis","bialys","bianca","bianco","biased","biases","biaxal","bibbed","bibber","bibble","bibiri","bibiru","bibles","biblic","byblis","biblos","biblus","bicarb","biceps","bichir","bichos","bicker","bicone","bicorn","bicron","bidden","bidder","biddie","bidene","bidens","bident","bidery","biders","bidets","bidget","biding","bidpai","bidree","byelaw","bielby","bieldy","bields","bielid","byeman","bienly","bienne","bientt","bietle","biface","bifara","biffed","biffin","biflex","bifoil","bifold","biform","bigamy","bygane","bigate","bigeye","biggah","bigged","biggen","bigger","biggie","biggin","bights","biglot","bignou","bygone","bigots","bigram","bigwig","byhand","bihari","bijous","bijoux","bikers","biking","bikini","bikram","bilaan","bilabe","bilalo","biland","byland","bilati","bylaws","bilbie","bilboa","bilbos","bildar","bilder","bileve","bilged","bilges","bilify","bylina","byline","byliny","bilith","bilked","bilker","bilkis","billed","biller","billet","billie","billyo","billon","billot","billow","bilobe","biloxi","bimahs","bimana","bimane","bimbil","bimbos","bimeby","bimini","bimong","byname","binary","binate","binder","bindis","bindle","binful","bingee","bingey","binges","binghi","bingle","bingos","biniou","binits","binman","binmen","binned","binocs","binode","binomy","binous","biofog","biogas","biogen","biomes","bionic","bionts","biopic","biopsy","bioral","biosis","biotas","biotic","biotin","bipack","bypass","bypast","bypath","bipeds","byplay","bipods","bipont","birded","birder","birdie","bireme","birgus","biriba","birken","birkie","byrlaw","birled","byrled","birler","birles","birlie","byrnie","byroad","birodo","birota","birred","birrus","byrrus","birses","birsit","birsle","birthy","births","bisalt","biscot","bisect","bisext","bishop","bisync","biskop","bisley","bismar","bismer","bisons","bisque","byssal","byssin","bisson","byssus","bister","bistre","bistro","bisulc","bitake","bytalk","bitchy","biters","bytime","biting","bitmap","bitnet","bitore","bitser","bitted","bitten","bitter","bittie","bittor","bitume","biurea","biuret","bivane","biverb","bivial","bivium","byways","bywalk","byward","byword","bywork","bizant","byzant","bizone","bjorne","bkbndr","blabby","blacky","blacks","bladed","blader","blades","blague","blaine","blayne","blains","blamed","blamer","blames","blanca","blanch","blanco","blancs","blanda","blanky","blanks","blared","blares","blarny","blashy","blasia","blason","blasty","blasts","blatch","blatta","blatti","blaver","blawed","blazed","blazer","blazes","blazon","bleach","bleaky","bleaks","bleary","blears","bleaty","bleats","blebby","bleeds","bleeps","bleery","bleeze","bleezy","blench","blende","blends","blenny","blesse","blethe","bletia","bliaut","blicky","bliest","blight","blimey","blimps","blinds","blinis","blinky","blinks","blintz","blypes","blites","blithe","blitum","bloats","blobby","blocky","blocks","blokes","blolly","bloman","blonde","blonds","bloody","bloods","blooey","blooie","bloomy","blooms","bloops","blooth","blosmy","blotch","blotty","blotto","blouse","blousy","blowby","blowen","blower","blowie","blowse","blowsy","blowth","blowup","blowze","blowzy","bludge","blueys","bluely","bluesy","bluest","blueth","bluets","bluffy","bluffs","bluggy","bluing","bluish","bluism","blumea","blumed","blumes","blunge","blunks","blunts","blurbs","blurry","blurts","blushy","blusht","boardy","boards","boarts","boasts","boated","boatel","boater","boatie","boatly","bobbed","bobber","bobbie","bobbin","bobble","bobcat","bobfly","boblet","bocage","bocces","boccia","boccie","boccis","bocher","boches","bochur","bockey","bodach","boddle","bodega","bodger","bodgie","bodice","bodied","bodier","bodies","bodily","boding","bodken","bodkin","bodock","bodoni","bodrag","boeing","boffin","boffos","bogach","bogans","bogard","bogart","bogeys","bogged","boggin","boggle","bogier","bogies","bogled","bogles","boglet","bogman","bogong","bogota","bogued","bogway","bohawn","boheas","bohora","","boyang","boyard","boyars","boyaus","boyaux","boidae","boydom","boigid","boyish","boyism","boylas","boiled","boiler","boites","boyuna","bojite","bokard","bokark","bolded","bolden","bolder","boldin","boldly","boldos","bolero","bolete","boleti","bolide","bolita","bolled","bollen","boller","bollix","bollox","boloed","bolshy","bolson","bolted","boltel","bolter","boltin","bombay","bombax","bombed","bomber","bombes","bombic","bombyx","bomble","bombus","bonace","bonaci","bonagh","bonair","bonang","bonasa","bonbon","bondar","bonded","bonder","bondoc","bondon","bonduc","boneen","boners","bonete","bongar","bonged","bongos","bonier","bonify","boning","bonism","bonita","bonity","bonito","bonked","bonnaz","bonnes","bonnet","bonnie","bonnne","bonsai","bonser","bontee","bontok","bonxie","bonzer","bonzes","booboo","boodie","boodle","booger","boogie","boogum","boohoo","booing","boojum","booked","booker","bookie","bookit","booksy","booley","boolya","boomah","boomed","boomer","boopic","boopis","boorga","boosts","booted","bootee","booter","bootes","booths","bootid","bootie","bootle","boozed","boozer","boozes","bopeep","bopped","bopper","borage","borago","borana","borane","borani","borate","bordar","bordel","border","bordun","boread","boreal","borean","boreas","boreen","borele","borers","boreus","borghi","boride","borine","boring","borish","borism","borith","bority","borize","borley","bornan","borneo","bornyl","borons","bororo","borrel","borrow","borsch","borsht","boruca","borzoi","boshas","bosher","boshes","bosker","bosket","bosomy","bosoms","bosons","bosque","bossed","bosser","bosses","bosset","bostal","boston","bosuns","botany","botchy","botein","botels","botete","botfly","bother","bothie","botone","botong","botony","botonn","bottle","bottom","boubas","boubou","boucan","bouche","boucle","boudin","bouffe","bougar","bougee","bouget","boughy","boughs","bought","bougie","boukit","boules","boulle","bounce","bouncy","bounds","bounty","bourgs","bourne","bourns","bourre","bourse","boused","bouser","bouses","boutel","bouton","boutre","bovate","bovids","bovine","bovoid","bovver","bowboy","bowden","bowels","bowery","bowers","bowess","bowfin","bowyer","bowing","bowker","bowled","bowleg","bowler","bowles","bowlin","bowman","bowmen","bowpin","bowpot","bowsaw","bowsed","bowser","bowses","bowsie","bowtel","bowtie","bowwow","boxcar","boxers","boxful","boxier","boxing","boxman","boxtop","bozine","braata","bracae","braced","bracer","braces","brache","bracky","bracon","bracts","bragas","brager","braggy","bragly","brahma","brahmi","brahms","brahui","braids","brayed","brayer","braies","brails","brainy","brains","braird","brairo","braise","braize","braked","braker","brakes","brakie","bramah","bramia","branch","brandi","brandy","brands","branky","branks","branle","branny","branta","brants","brarow","brasen","brashy","brasil","brasse","brassy","bratty","braula","brauna","bravas","braved","braver","braves","bravos","brawer","brawly","brawls","brawny","brawns","brazas","brazed","brazee","brazen","brazer","brazes","brazil","breach","breads","breaks","breams","breast","breath","brecht","brecia","bredes","breech","breedy","breeds","breeks","breeze","breezy","bregma","brehon","breird","brekky","brelan","brelaw","bremia","brenda","brents","breton","breves","brevet","brevis","brevit","brewed","brewer","brewis","brewst","briard","briary","briars","bribed","bribee","briber","bribes","bribri","bricky","bricks","bridal","brides","bridge","bridie","bridle","briefs","briery","briers","brieve","briggs","bright","brigid","brigue","brills","brimly","brimse","brince","brined","briner","brines","brings","brinie","brinks","brinny","brynza","briony","bryony","brique","brises","brisky","brisks","briton","britts","broach","broads","broche","brocho","brocht","brocks","brodee","brodie","brogan","brogue","broils","broken","broker","brokes","brolga","brolly","bromal","bromes","bromic","bromid","bromin","bromol","bromos","bromus","bronco","broncs","bronze","bronzy","brooch","broody","broods","brooke","brooky","brooks","broomy","brooms","broose","broses","brosot","brosse","brotan","brotel","brothe","brothy","broths","brough","brouze","browed","browet","browis","browny","browns","browse","browst","bruang","brubru","brucia","brucin","bruges","brughs","bruins","bruise","bruits","brujas","brujos","brulee","brules","brulot","brumal","brumby","brumes","brummy","brunch","brunel","brunet","brunts","brushy","brutal","bruted","brutes","brutus","bubale","bubals","bubber","bubble","bubbly","buboed","buboes","bucayo","bucare","buccal","buccan","buccin","bucked","bucker","bucket","buckie","buckle","","buddah","budded","budder","buddha","buddhi","buddie","buddle","budged","budger","budges","budget","budgie","budlet","buduma","budzat","buenas","buenos","buffed","buffer","buffet","buffin","buffle","buffos","bugala","bugara","bugdom","bugeye","bugged","bugger","bugled","bugler","bugles","buglet","bugong","bugout","bugsha","buibui","buicks","buyers","buying","builds","buyout","bukshi","bulbar","bulbed","bulbel","bulbil","bulbul","bulbus","bulder","bulgar","bulged","bulger","bulges","bulgur","bulies","bulimy","bulked","bulker","bulkin","bullae","bullan","bulled","buller","bullet","bullit","bullom","bultey","bulten","bulter","bultow","bumbee","bumble","bumfeg","bumkin","bummed","bummel","bummer","bummie","bummil","bummle","bumped","bumpee","bumper","bumpsy","buncal","bunchy","buncos","bunder","bundle","bundoc","bundts","bunged","bungee","bungey","bunger","bungfu","bungle","bungos","bunyah","bunyan","bunyas","bunyip","bunion","bunked","bunker","bunkie","bunkos","bunkum","bunnia","bunsen","buntal","bunted","bunter","bunton","buoyed","buqsha","burans","burble","burbly","burbot","burden","burdie","burdon","bureau","burele","burely","burets","burgau","burgee","burger","burghs","burgle","burgoo","burgul","burgus","burhel","burial","burian","buriat","buried","burier","buries","burins","burion","buriti","burked","burkei","burker","burkes","burkha","burlap","burled","burley","burler","burlet","burman","burned","burner","burnet","burnie","burnup","burnut","burped","burrah","burred","burree","burrel","burrer","burrio","burros","burrow","bursae","bursal","bursar","bursas","bursch","burses","bursty","bursts","burton","busaos","busbar","busboy","busera","bushed","bushel","busher","bushes","bushet","bushie","bushwa","busied","busier","busies","busily","busine","busing","busked","busker","busket","buskin","buskle","busman","busmen","bussed","busser","busses","busted","bustee","buster","bustic","bustle","busway","butane","butcha","butein","butene","buteos","butyls","butine","butyne","butled","butler","butles","butoxy","buttal","butted","butter","buttes","buttle","button","bututs","buxine","buzane","buzuki","buzzed","buzzer","buzzes","buzzle","bwanas","cabaan","caback","cabaho","cabala","caball","cabals","cabana","cabane","cabasa","cabbed","cabber","cabbie","cabble","cabers","cabful","cabiai","cabins","cabiri","cabled","cabler","cables","cablet","cabman","cabmen","cabobs","cabook","cabots","cabree","cabret","cabrie","cabrit","cabuya","cabuja","caburn","cacana","cacaos","cacara","caccia","cached","caches","cachet","cachot","cachou","cachua","cacked","cackle","cacoon","cactal","cactus","cadbit","cadded","caddie","caddis","caddle","caddow","cadeau","cadent","cadere","cadets","cadged","cadger","cadges","cadish","cadism","cadjan","cadmia","cadmic","cadmus","cadouk","cadres","caduac","caduca","caduke","cadwal","caecal","caecum","caelum","caelus","caeoma","caesar","cafard","caffle","caffoy","caffre","cafila","caftan","cafuso","cageot","cagers","cagier","cagily","caging","cagmag","cahier","cahill","cahita","cahoot","cahows","cayapa","cayapo","caille","caiman","cayman","caique","cairba","cairds","cairny","cairns","caisse","caitif","cayuca","cayuco","cayuga","cayuse","cajang","cajava","cajeta","cajole","cajuns","cakier","cakile","caking","calaba","calade","calais","calalu","calami","calash","calcar","calced","calces","calche","calcic","calden","calean","calefy","calesa","calgon","calico","califs","caliga","caligo","calili","calina","caline","calyon","caliph","calite","calked","calker","calkin","callan","callas","callat","called","caller","calles","callet","callid","calloo","callop","callot","callow","callum","callus","calmed","calmer","calmly","calool","calory","calpac","calpul","calque","caltha","calusa","calved","calver","calves","calvin","calvus","calxes","camaca","camail","camaka","camara","camass","camata","camber","cambia","cambio","camden","camels","cameos","camera","camery","camias","camino","camion","camisa","camise","camize","camlet","cammas","cammed","camoca","camois","camote","campal","camped","camper","campho","campit","cample","campoo","campos","campus","camuse","canaan","canaba","canada","canale","canali","canals","canamo","canape","canard","canari","canary","canaut","cancan","cancel","cancer","cancha","canchi","cancri","candid","candyh","candil","candys","candle","candor","canduc","canela","canell","canelo","caners","caneva","canful","cangan","cangia","cangle","cangue","canham","canids","canine","caning","canion","canyon","canjac","canker","canman","cannas","cannat","canned","cannel","canner","cannet","cannie","cannon","cannot","canoed","canoes","canons","canopy","canroy","cansos","cantab","cantar","canted","cantel","canter","canthi","cantic","cantil","cantle","canton","cantor","cantos","cantus","cantut","canuck","canula","canvas","canzon","canzos","caoine","capers","capful","caphar","capias","caping","capita","capite","capito","capivi","capkin","caplan","caplet","caplin","capman","capomo","capone","capons","capote","cappae","capped","capper","cappie","capple","capric","caprid","capryl","caprin","capris","capron","capsid","captan","captor","capuan","capuli","caquet","carack","caraco","caract","carafe","caraho","caraja","carajo","carane","caranx","carapa","carapo","carara","carate","carats","carbyl","carbin","carboy","carbon","carbro","carcan","carcel","carcer","carded","cardel","carder","cardia","cardin","cardol","cardon","careen","career","careys","careme","carene","carers","caress","carest","carets","carfax","carful","cargos","carhop","carian","caribe","caribi","carica","carida","caried","carien","caries","cariyo","carina","caring","cariri","carisa","carity","carked","carles","carlet","carlie","carlin","carlos","carlot","carman","carmel","carmen","carmot","carnac","carnal","carney","carnel","carnet","carnic","carnie","caroba","carobs","caroch","caroid","carole","caroli","carols","caroms","carone","caroon","carpal","carped","carpel","carper","carpet","carpid","carpos","carpus","carrat","carree","carrel","carrie","carrys","carrom","carrot","carrow","carrus","carses","carson","carted","cartel","carter","cartes","carton","cartop","carval","carved","carvel","carven","carver","carves","carvyl","carvol","carzey","casaba","casabe","casate","casaun","casava","casave","casavi","casbah","cascan","cascol","casefy","caseic","casein","casern","caseum","cashaw","cashed","cashel","casher","cashes","cashew","cashoo","cashou","casina","casing","casino","casiri","casita","casked","casket","caslon","caspar","casper","casque","cassan","casshe","cassia","cassie","cassis","casson","casted","casten","caster","castes","castle","castor","castra","castro","casual","casula","casule","catalo","catchy","catdom","cateye","catena","catery","caters","catgut","cathay","cathar","cathin","cathop","cathro","cathud","cating","cation","cativo","catkin","catlap","catlin","catnap","catnep","catnip","catsos","catsup","cattan","catted","catter","cattie","cattle","caucho","caucus","caudad","caudae","caudal","caudex","caudle","caufle","caught","cauked","caulds","caules","caulis","caulks","caunch","caunos","caunus","cauqui","caurus","causae","causal","caused","causey","causer","causes","causon","causse","causus","cautel","cauter","cautio","cavate","cavdia","caveae","caveat","cavern","cavers","caviar","cavies","caviya","cavils","cavina","caving","cavish","cavity","cavort","cawing","cawker","cawney","cawnie","caxiri","caxton","cazibi","cazimi","cearin","ceased","ceases","cebell","cebian","cebids","cebine","ceboid","cecile","cecily","cecils","cecity","cecums","cedary","cedarn","cedars","cedens","cedent","ceders","ceding","cedrat","cedric","cedrin","cedrol","cedron","cedrus","cedula","cedule","ceibas","ceibos","ceiled","ceiler","ceylon","ceinte","celebe","celebs","celery","celiac","celite","cellae","cellar","celled","cellos","celoms","celsia","celtic","celtis","celure","cement","cendre","cenizo","cenobe","cenoby","cenote","censed","censer","censes","censor","census","centai","cental","centas","center","centon","centos","centra","centre","centry","centro","centum","ceorls","cephas","cephen","cephid","cephus","cepous","cepter","ceptor","cerago","cerata","cerate","cercal","cercis","cercle","cercus","cereal","cereus","cereza","cerias","ceride","cerine","cering","cerion","ceriph","cerise","cerite","cerium","cermet","cerned","ceroid","ceroma","ceroon","cerote","cerous","cerris","certes","certie","certif","certis","cerule","ceruse","cervid","cervix","cervus","cesare","cesium","cessed","cesser","cesses","cessio","cessor","cestas","cestoi","ceston","cestos","cestui","cestuy","cestus","cesura","cesure","cetane","cetene","cetera","cevian","cevine","chaber","chabot","chabuk","chacma","chacra","chacte","chacun","chadar","chador","chadri","chaeta","chafed","chafer","chafes","chaffy","chaffs","chagal","chagan","chagga","chagul","chahar","chayma","chaine","chains","chairs","chaise","chakar","chakra","chaksi","chalah","chaleh","chalet","chalky","chalks","challa","chally","chalon","chalot","chalta","chamal","chamar","chamma","chammy","chamos","champa","champe","champy","champs","chanca","chance","chancy","chanco","chandi","chandu","changa","change","changs","chanst","chanty","chants","chaori","chaoua","chapah","chaped","chapel","chapes","chapin","chapon","chappe","chappy","charac","charas","charca","charco","chards","chared","charer","chares","charet","charge","charka","charks","charms","charnu","charon","charre","charry","charro","charrs","charta","charts","charuk","chased","chaser","chases","chasid","chasma","chasmy","chasms","chasse","chaste","chasty","chaton","chatot","chatta","chatti","chatty","chaule","chauna","chaunt","chauri","chaute","chauth","chauve","chavel","chaver","chawan","chawed","chawer","chawia","chawle","chazan","cheapo","cheaps","cheare","cheats","chebec","chebel","chebog","checke","checky","checks","chedar","cheder","cheeky","cheeks","cheepy","cheeps","cheery","cheero","cheers","cheese","cheesy","chegoe","chegre","chekan","cheken","chelae","chelas","chelem","chelys","chello","chemic","chemin","chemis","chemmy","chenar","chende","cheney","chenet","cheque","chequy","cherem","cherie","cherna","cherry","cherte","cherty","cherts","cherub","cherup","chesil","cheson","chesty","chests","chetah","cheths","chetif","chetty","cheung","cheval","chevee","cheven","chevet","chevin","chevon","chevre","chevvy","chewed","chewer","chewet","chewie","chiack","chyack","chiasm","chiaus","chiave","chibol","chicer","chicha","","chicky","chicks","chicle","chicly","chicos","chicot","chided","chider","chides","chidra","chiefs","chield","chiels","chieve","chigga","chigoe","chihfu","chikee","childe","chiles","chyles","chilla","chilli","chilly","chillo","chills","chilte","chimar","chimbe","chimbs","chimed","chimer","chimes","chymes","chymia","chymic","chimin","chimla","chimps","chinar","chinas","chinch","chindi","chined","chinee","chines","chinik","chinin","","chinks","chinny","chinoa","chinol","chinos","chinse","chints","chintz","chippy","chypre","chiral","chirks","chirms","chiron","chiros","chirpy","chirps","chirre","chirrs","chisel","chitak","chital","chithe","chitin","chiton","chitra","chytra","chitty","chiule","chiurm","chivey","chiver","chives","chivvy","chkfil","chleuh","chlore","chloro","choana","choate","choaty","chobie","chocho","chocks","chogak","choiak","choice","choicy","choile","choirs","choise","choked","chokey","choker","chokes","chokra","cholam","cholee","choler","cholic","cholla","cholos","cholum","chomer","chomps","chonta","chooky","choora","choose","choosy","chopas","chopin","choppy","chorai","choral","chorda","chords","chorea","chored","choree","chorei","chores","chorgi","choric","chorio","chorti","chorus","chosen","choses","chotts","chouan","chough","chouka","choule","chouse","choush","chowed","chowry","chowse","chozar","chrism","christ","chroma","chrome","chromy","chromo","chteau","chuana","chubby","chucky","chucks","chudic","chueta","chufas","chuffy","chuffs","chuhra","chukar","chukka","chukor","chulan","chulha","chullo","chulpa","chumar","chummy","chumpa","chumpy","chumps","chunam","chunga","chunky","chunks","chupak","chupon","church","churel","churly","churls","churns","churro","churrs","chuser","chuted","chuter","chutes","chuzwi","chwana","cyamid","cyamus","cyanea","cyanic","cyanid","cyanin","cyanol","cyanus","cyathi","cybele","cibola","cibols","cyborg","cibory","cicada","cycads","cicala","cicale","cicely","cicero","cichar","cyclar","cyclas","cycled","cycler","cycles","cyclic","cyclop","cyclos","cyclus","cicone","cicuta","ciders","cyders","cierge","cierzo","cyeses","cyesis","cyetic","cigala","cigale","cigars","cygnet","cygnid","cygnus","cilery","cilice","cilium","cymars","cimbal","cymbal","cymbel","cimbia","cymbid","cimbri","cymene","cimier","cymlin","cimnel","cymoid","cymols","cymose","cymous","cymric","cymtia","cymule","cynara","cincha","cinder","cindie","cinema","cinene","cineol","cingle","cynias","cynics","cynips","cynism","cinnyl","cynoid","cinque","cinter","cintre","cinura","cipaye","cipher","cypher","cippus","cypres","cypria","cyprid","cypris","cyprus","cyrano","circar","circle","circue","circum","circus","circut","cirque","cirrus","ciscos","cisele","cising","cisium","cissus","cistae","cystal","cisted","cysted","cistic","cystic","cystid","cystin","cystis","cistus","cytase","citers","citess","cither","citied","cities","citify","citing","cytode","cytoid","citola","citole","cytoma","cytome","cytone","cytons","cytost","citral","citric","citril","citrin","citron","citrul","citrus","cytula","ciudad","civets","civics","civies","civile","civism","civite","civory","cywydd","ciwies","cixiid","clachs","clacks","cladus","claggy","clayed","clayey","clayen","clayer","claims","claire","claith","clamer","clammy","clamor","clamps","clangs","clanks","clappe","claque","clares","claret","clarin","clarke","claros","clarre","clarty","clarts","clashy","clasps","claspt","classy","clasts","clatch","clatty","claude","clause","clavae","claval","clavel","claver","claves","clavis","clavus","clawed","clawer","claxon","cleach","cleans","clears","cleats","cleave","cleche","clechy","cledde","cledge","cledgy","cleech","cleeky","cleeks","clefts","clench","cleoid","cleome","cleped","clepes","clergy","cleric","clerid","clerks","clerum","clerus","cletch","cleuch","cleuks","clever","clevis","clewed","cliack","cliche","clicky","clicks","client","clyers","cliffy","cliffs","clifty","clifts","climax","climbs","climes","clinah","clinal","clinch","clines","clingy","clings","clinia","clinic","clinid","clinks","clinty","clints","cliona","clione","clipei","clypei","clipse","clique","cliquy","clyses","clysis","clysma","clitch","clites","clithe","clitia","clitic","clival","cliver","clivia","clivis","clivus","cloaca","cloaks","cloche","clocks","cloddy","cloggy","cloyed","cloyer","cloine","cloyne","clomps","clonal","cloned","cloner","clones","clonic","clonks","clonos","clonus","cloots","cloque","closed","closen","closer","closes","closet","closky","clothe","clothy","clotho","cloths","clotty","cloudy","clouds","clouee","clough","clours","clouty","clouts","cloven","clover","cloves","clower","clowns","clowre","clubby","clucky","clucks","cluing","clumpy","clumps","clumse","clumsy","clunch","clunks","clupea","cluppe","clusia","clutch","cnemic","cnemis","cnicin","cnicus","cnidae","coachy","coachs","coacts","coaged","coagel","coaita","coakum","coalas","coaled","coaler","coapts","coarct","coarse","coasts","coated","coatee","coater","coatie","coatis","coaxal","coaxed","coaxer","coaxes","cobaea","cobalt","cobang","cobbed","cobber","cobbin","cobble","cobbly","cobbra","cobcab","cobego","cobias","cobles","cobnut","cobola","coboss","cobras","coburg","cobweb","cocain","cocama","cocash","coccal","coccic","coccid","coccin","coccyx","coccus","cochal","cocher","cochin","cochon","cockal","cocked","cocker","cocket","cockie","cockle","cockly","cocksy","cockup","coclea","cocoas","cocona","cocoon","cocuyo","codded","codder","coddle","codecs","codeia","codein","codens","coders","codger","codify","coding","codist","codium","codlin","codman","codons","codrus","coecal","coecum","coedit","coelar","coelho","coelia","coelin","coelom","coempt","coenla","coerce","coetus","coeval","cofane","coffea","coffee","coffer","coffin","coffle","cogent","cogged","cogger","coggie","coggle","coggly","coghle","cogida","cogito","cogman","cogmen","cognac","cogons","cogway","cohead","coheir","cohens","cohere","cohert","cohoba","cohogs","cohorn","cohort","cohosh","cohost","cohune","coydog","coyest","coifed","coiffe","coigne","coigny","coigns","coigue","coying","coyish","coiled","coiler","coined","coiner","coynye","coyote","coypou","coypus","coisns","coital","coitus","coyure","cojoin","cokery","cokers","coking","colada","colage","colane","colate","colder","coldly","coleen","colent","colera","coleur","coleus","colfox","colias","colyba","colics","colies","colima","coling","colins","colyum","colius","collab","collar","collat","colley","collen","collet","collie","collin","collyr","collis","collop","colloq","collow","collum","collun","collut","colmar","cologs","colola","colomb","coloni","colony","colons","colory","colors","coloss","colour","colove","colpeo","colpus","colter","colugo","column","colure","colzas","comade","comake","comals","comart","comate","combat","combed","comber","combes","comble","comboy","combos","combre","comdia","comedy","comedo","comely","comers","cometh","comets","comfit","comics","comida","coming","comino","comism","comite","comity","commas","commem","commie","commis","commit","commix","common","commos","commot","comodo","comoid","comose","comous","compaa","compar","comped","compel","comply","compos","compot","compte","compts","comsat","comtes","comvia","conand","conant","concha","conche","conchy","concho","conchs","concio","concur","conder","condog","condom","condor","condos","condue","coneen","coneys","confab","confed","confer","confit","confix","congas","conged","congee","conger","conges","congii","congos","congou","conics","conies","conima","conine","coning","conins","conite","conium","conyza","conjee","conjon","conked","conker","conned","conner","connex","connie","conoid","conrad","conred","conrey","consol","constr","consul","contam","contek","conter","contes","contex","contin","contos","contra","conule","conure","convey","convex","convoy","coobah","cooboo","coodle","cooeed","cooees","cooeys","cooers","coohee","cooing","cooked","cookee","cookey","cooker","cookie","cooled","cooley","coolen","cooler","","coolly","coolth","coombe","coombs","cooner","cooped","coopee","cooper","coopts","cooree","coorie","cooser","coosuc","cootch","cooter","cootie","copain","copalm","copals","copart","copeck","copeia","copens","copers","copied","copier","copies","coping","copist","copita","coplot","copout","coppas","copped","copper","coppet","coppin","copple","coppra","coprah","copras","copses","copter","coptic","coptis","copula","coquet","coquin","corach","corage","coraji","corals","corban","corbed","corbel","corbet","corbie","corcir","corcle","cordal","cordax","corded","cordel","corder","cordia","cordyl","cordis","cordon","coreid","corema","corers","corgis","corial","coriin","corymb","coring","coryph","corita","corium","corixa","coryza","corked","corker","corkir","cormac","cormel","cormus","cornea","corned","cornel","corner","cornet","cornic","cornin","cornix","cornua","cornus","corody","corojo","coroll","corona","corone","coropo","coroun","corozo","corpse","corpsy","corpus","corral","correa","correl","correo","corrie","corrup","corsac","corsak","corser","corses","corset","corsie","corsos","cortes","cortex","cortez","cortin","corton","coruco","corved","corvee","corven","corver","corves","corvet","corvus","coscet","coseat","cosech","cosecs","coseys","cosets","coshed","cosher","coshes","cosier","cosies","cosign","cosily","cosine","cosing","cosins","cosmic","cosmos","cossas","cosset","cossic","cossid","cossie","costae","costal","costar","costed","coster","costly","cotans","coteau","coteen","cotele","cotery","cotham","cothon","cotice","cotyla","cotyle","coting","cotype","cotise","cotman","cotoin","cotoro","cotoxo","cotset","cottae","cottar","cottas","cotted","cotter","cottid","cotton","cottus","cotuit","cotula","cotwal","cotwin","coucal","couche","couchy","coudee","cougar","coughs","couldn","coulee","coulie","coulis","county","counts","couped","coupee","couper","coupes","couple","coupon","courap","courbe","courge","courie","couril","course","coursy","courty","courts","cousin","coutel","couter","coutet","couthe","couthy","couths","coutil","couxia","couxio","covado","covary","coveys","covens","covent","covers","covert","covets","covido","covine","coving","covite","cowage","coward","cowboy","cowdie","coween","cowers","cowier","cowing","cowish","cowled","cowman","cowmen","cowpat","cowpea","cowpen","cowper","cowpox","cowrie","cowson","coxier","coxing","coxite","cozeys","cozens","cozier","cozies","cozily","cozing","cozzes","craals","crabby","craber","crabit","crabut","cracca","cracky","cracks","craddy","cradge","cradle","crafty","crafts","craggy","crayer","crayon","craked","craker","crakes","crakow","crambe","crambo","cramel","crampy","cramps","crance","cranch","craned","craney","craner","cranes","cranet","crania","cranic","cranky","cranks","cranny","crants","craped","crapes","crapon","crappy","crappo","crapwa","crases","crasis","cratch","crated","crater","crates","craton","cravat","craved","craven","craver","craves","crawly","crawls","crazed","crazes","creach","creagh","creaky","creaks","creamy","creams","creant","crease","creasy","create","creaze","creche","credal","credit","credos","creeds","creeky","creeks","creels","creepy","creeps","creese","creesh","cremes","cremor","crenae","crenel","crenic","creole","creped","crepey","crepes","crepis","creply","crepon","cresyl","cresol","cressy","crests","cretan","cretic","cretin","crevet","crevis","crewed","crewel","crewer","crewet","criant","crible","cricke","cricks","criers","crying","crikey","crimea","crimes","crimmy","crimpy","crimps","crinal","crinch","crined","crinel","crinet","cringe","crinid","crinum","cripes","crypta","crypto","crypts","crises","crisic","crisis","crisle","crispy","crisps","crissa","crista","cryste","cristi","cristy","critch","critic","croaky","croaks","croape","croche","crocin","crocky","crocko","crocks","crocus","crofts","croiik","croise","crojik","croker","cromer","cromme","cronel","crones","cronet","cronie","cronus","crooch","crooks","croons","croose","croppa","croppy","crores","crosby","croset","crosne","crosse","crotal","crotch","crotyl","crotin","croton","crouch","crouke","croupe","croupy","croups","crouse","croute","crouth","crowdy","crowds","crowed","crower","crowns","crozed","crozer","crozes","crozle","cruces","cruche","crucis","cruddy","cruder","crudes","crudle","cruels","cruent","cruety","cruets","cruise","cruive","crumby","crumbs","crumen","crummy","crumpy","crumps","crunch","cruors","crural","crusca","cruses","cruset","crusie","crusta","crusty","crusts","crutch","cruxes","crwths","csects","ctenii","cuadra","cuarta","cuarto","cubage","cubane","cubans","cubbyu","cubdom","cubebs","cubera","cubers","cubica","cubics","cubing","cubism","cubist","cubiti","cubito","cubits","cuboid","cuchan","cuchia","cuckoo","cucuyo","cucule","cuculi","cucurb","cudava","cudden","cuddie","cuddle","cuddly","cudgel","cuecas","cueing","cueist","cueman","cuemen","cuerda","cuerpo","cuesta","cuffed","cuffer","cuffin","cuffle","cuiejo","cuinfo","cuirie","cuisse","cuitle","culbut","culdee","culets","culett","culeus","culgee","cullay","cullas","culled","cullen","culler","cullet","cullis","culmed","culmen","culpae","culpas","culpeo","culpon","cultch","culter","cultic","cultus","culver","cumara","cumaru","cumber","cumbha","cumble","cumbly","cumbre","cumene","cumhal","cumins","cummer","cummin","cumsha","cumuli","cundum","cuneal","cuneus","cunyie","cunila","cunili","cunjah","cunjer","cunner","cunzie","cuorin","cupels","cupful","cuphea","cupids","cupman","cupola","cuppas","cupped","cuppen","cupper","cuppin","cupric","cuprum","cupula","cupule","curace","curacy","curage","curagh","curara","curare","curari","curate","curbed","curber","curcas","curchy","curded","curdle","curdly","curdoo","curers","curets","curfew","curiae","curial","curiam","curies","curiet","curine","curing","curios","curite","curium","curled","curler","curlew","curney","curnie","curpel","curpin","curple","curran","curred","currie","cursal","cursed","cursen","curser","curses","cursor","cursus","curtal","curted","curter","curtis","curtly","curtsy","curuba","curule","cururo","curval","curved","curvey","curver","curves","curvet","curvle","cuscus","cusecs","cushag","cushat","cushaw","cushie","cuspal","cusped","cuspid","cuspis","cussed","cusser","cusses","cussos","custom","custos","cutcha","cuteys","cutely","cutesy","cutest","cuties","cutify","cutins","cutlas","cutler","cutlet","cutoff","cutose","cutout","cutset","cutted","cutter","cuttle","cuttoe","cuttoo","cutups","cutwal","cuvage","cuvies","cwierc","cwrite","czaric","czechs","dabbed","dabber","dabble","dablet","daboia","daboya","dacelo","dachas","dacian","dacite","dacker","dacoit","dacrya","dacryd","dacron","dactyl","dadder","daddle","dading","dadoed","dadoes","daedal","daekon","daemon","daffed","daffle","daftar","dafter","daftly","dagaba","dagame","dagesh","daggar","dagged","dagger","daggle","daggly","dagmar","dagoba","dagoes","dahlia","dahlin","dahoon","daybed","dayboy","daidle","daidly","dayfly","daying","daiker","daikon","daylit","dayman","daimen","daymen","daimio","daimyo","daimon","daynet","dainty","daised","daisee","daises","daitya","dayton","dakhma","dakoit","dakota","dalaga","dalasi","daledh","daleth","dallan","dallas","dalles","dallis","dallop","dalton","damage","damans","damara","damars","damask","damier","damine","dammar","dammed","dammer","dammit","damned","damner","damnii","damnit","damnum","damone","damped","dampen","damper","damply","dampne","damsel","damson","danaan","danaid","danais","danaro","danced","dancer","dances","dander","dandie","dandis","dandle","danged","danger","dangle","danian","daniel","danios","danish","danism","danite","danize","danker","dankly","danner","dannie","danton","danube","danuri","danzig","danzon","daoine","daphne","daphni","dapico","dapped","dapper","dapple","dapson","darbha","dardan","dardic","darers","dargah","darger","dargue","darics","darien","daring","darius","darked","","darken","darker","","darkle","darkly","darned","darnel","darner","darnex","darnix","daroga","darren","darryl","darted","darter","dartle","dartos","dartre","darvon","darwan","darwin","darzee","dasein","dasewe","dashed","dashee","dashel","dasher","dashes","dasyus","dassie","dastur","daswen","datana","datary","datcha","daters","dating","dation","datisi","datism","dative","datsun","dattos","datums","datura","daubed","dauber","daubes","daubry","daucus","dauded","daudit","daukin","daunch","dauncy","dauner","daunii","daunts","daurna","dauted","dautie","davach","davens","davies","davyne","davits","davyum","davoch","dawdle","dawing","dawish","dawkin","dawned","dawson","dawted","dawtet","dawtie","dawtit","dazing","dazzle","dclass","ddname","deacon","deaden","deader","deadly","deafen","deafer","deafly","deairs","dealer","deaned","deaner","dearer","dearie","dearly","dearth","deasil","deathy","deaths","deaved","deaves","debark","debars","debase","debate","debbie","debcle","debeak","debell","debyes","debile","debind","debite","debits","deblai","debone","debord","debosh","deboss","debout","debris","debted","debtee","debtor","debugs","debunk","deburr","debuts","decade","decadi","decays","decals","decamp","decane","decani","decant","decard","decare","decart","decast","decate","decede","deceit","decene","decent","decern","decerp","decess","decian","decide","decile","decima","decime","decine","decyne","decise","decius","decked","deckel","decken","decker","deckie","deckle","decnet","decoat","decoct","decode","decoic","decoys","decoke","decoll","decore","decors","decree","decrew","decury","decurt","decuss","dedans","deduce","deduct","deduit","deeded","deejay","deemed","deemer","deemie","deener","deepen","deeper","deeply","deeses","deesis","deevey","deewan","deface","defade","defail","defalk","defame","defamy","defang","defats","defeat","defect","defeit","defend","defers","defial","defied","defier","defies","defile","define","deflea","deflex","deflow","deflux","defoam","defogs","defoil","deform","defoul","defray","defter","deftly","defuse","defuze","degage","degame","degami","degass","degerm","degged","degger","deglut","degold","degras","degree","degums","degust","dehair","dehgan","dehkan","dehorn","dehors","dehort","dehull","dehusk","dehwar","deiced","deicer","deices","deific","deigns","deimos","deinos","deirid","deisin","deisms","deists","deixis","deject","dekare","deking","dekkos","delace","delays","delate","delawn","delead","delete","delfts","delian","delice","delict","delies","delime","deline","delint","delire","delisk","delist","deloul","deltal","deltas","deltic","deluce","delude","deluge","deluxe","delved","delver","delves","demain","demand","demark","demast","demean","demele","dement","demies","demiox","demise","demiss","demist","demits","demobs","demode","demoid","demons","demote","demove","dempne","demure","demurs","dename","denari","denary","denaro","dendra","dengue","denial","denied","denier","denyer","denies","denims","denize","denned","dennet","dennis","denote","densen","denser","densus","dental","dented","dentel","denter","dentes","dentex","dentil","dentin","denude","denver","deodar","depair","depark","depart","depass","depend","deperm","depict","deploy","depone","deport","depose","depots","depsid","depths","depure","depute","deputy","derail","derays","derate","derats","derere","derfly","derham","deride","derive","dermad","dermal","dermas","dermic","dermis","dermol","derned","derner","dernly","derobe","derout","derrid","derris","dertra","derust","desalt","desand","descry","deseam","deseed","desert","design","desilt","desire","desist","desize","desman","desmic","desmid","desmon","desole","desorb","despin","despot","desray","dessil","dessus","destin","destry","desume","detach","detail","detain","detant","detect","detent","detenu","determ","deters","detest","detick","detort","detour","detray","detune","deturb","deturn","deuced","deuces","deunam","deusan","deuton","deuzan","devall","devant","devast","devata","devaul","devein","devels","devest","device","devide","devily","devils","devise","devoid","devoir","devons","devota","devote","devoto","devour","devout","devove","devvel","dewani","dewans","dewata","dewcap","dewcup","dewier","dewily","dewing","dewitt","dewlap","dewool","deworm","dewret","dewrot","dewtry","dexies","dexter","dextro","dezinc","dfault","dhaman","dhamma","dhanuk","dharma","dharna","dhaura","dhauri","dheneb","dhyana","dhikrs","dhobee","dhobey","dhobie","dhobis","dholes","dhoney","dhooly","dhoora","dhooti","dhotee","dhotis","dhurna","dhurra","dhurry","dhutis","diable","dyable","diablo","diacid","diacle","diadem","diadic","dyadic","diaene","dialed","dialer","dialin","dialog","dialup","diamat","diamyl","diamin","dianil","diaper","diapir","diarch","diatom","diauli","diaxon","diazid","diazin","dibase","dibbed","dibber","dibble","dibbuk","dybbuk","dibrom","dicast","diccon","dicers","dichas","dicyan","dicier","dicing","dickey","dicker","dickie","dickty","dicots","dictic","dictum","didact","didder","diddle","didest","didies","didine","didler","didoes","didric","diduce","dieing","dyeing","dielec","diener","dienes","diesel","dieses","diesis","dietal","dieted","dieter","dietic","differ","digamy","digeny","digest","digged","digger","dights","digits","diglot","digram","dihalo","dihely","diiamb","dyings","diiodo","dikage","dykage","dikast","dikdik","dikers","diketo","diking","dyking","dikkop","diksha","diktat","dilate","dildoe","dildos","dilemi","dilker","dillis","dillue","dilogy","dilute","diluvy","dimane","dimber","dimble","dimera","dimers","dimiss","dimity","dimmed","dimmer","dimmet","dimmit","dimout","dimple","dimply","dimpsy","dimwit","dynamo","dinars","dynast","dinder","dindle","dindon","dinero","diners","dingar","dinged","dingee","dingey","dinger","dinghy","dingle","dingly","dingus","dining","dinked","dinkey","dinkly","dinkum","dinman","dinned","dinner","dynode","dinted","diobol","diodes","diodia","diodon","dioecy","dionym","diosma","diotic","dioxan","dioxid","dioxin","dipala","dipygi","dipyre","diplex","diploe","dipnoi","dipode","dipody","dipole","dipped","dipper","dipppy","dipsas","dipsey","dipsie","dipsos","dipter","diquat","dirdum","direct","direly","direst","dirged","dirges","dirgie","dirham","dirhem","dirian","dirige","dirigo","dirity","dirked","dirled","dirndl","dirten","disard","disarm","disawa","disazo","disbar","disbud","discal","disced","discos","discus","disdar","disdub","diseme","disert","diseur","disfen","disgig","dished","disher","dishes","disked","disker","diskos","dislip","dismay","dismal","disman","dismaw","dismes","dismit","disney","disnew","disorb","disour","disown","dispar","dispel","disple","disray","dissue","distad","distal","dister","distil","dysury","disuse","diswit","ditali","dither","diting","dition","ditone","dittay","ditted","ditton","dittos","diurna","diurne","diuron","divans","divast","divata","divell","diverb","divers","divert","divest","divide","divine","diving","divisa","divise","divisi","divort","divoto","divots","dyvour","diwani","diwans","diwata","dixain","dixies","dixits","dizain","dizdar","dizens","dizoic","dizzen","djebel","djehad","djelab","djelfa","djerib","djersa","djinni","djinny","djinns","doable","doated","doater","dobbed","dobber","dobbie","dobbin","dobies","doblas","doblon","dobrao","dobras","dobson","dobule","docent","docile","docity","docked","docken","docker","docket","docmac","doctor","doctus","dodded","dodder","doddie","doddle","dodged","dodger","dodges","dodkin","dodlet","dodman","dodoes","dodoma","dodona","dodunk","doesnt","doffed","doffer","dogana","dogate","dogdom","dogear","dogeys","dogged","dogger","dogget","doggie","doggle","dogies","dogleg","dogman","dogmas","dogmen","dognap","dogrib","dogtie","dohter","doyens","doigte","doiled","doyley","doings","doited","dokhma","dolcan","dolent","doless","dolina","doline","doling","dolite","dolium","dollar","dolled","dolley","dollia","dollie","dollin","dollop","dolman","dolmas","dolmen","dolors","dolose","dolour","dolous","dolven","domage","domain","domboc","doment","domett","domify","domina","domine","doming","domini","domino","domite","domnei","domoid","donack","donald","donary","donate","dondia","donees","dongon","donjon","donkey","donmeh","donnas","donned","donnee","donnie","donnot","donors","donsie","donsky","donuts","donzel","doocot","doodab","doodad","doodah","doodia","doodle","dooket","dookit","doolee","dooley","doolfu","doolie","doomed","doomer","doorba","doored","doover","doozer","dopant","dopers","dopier","doping","dopped","dopper","doppia","doppio","dorado","dorask","dorbel","dorbie","dorbug","dorcas","dorian","dories","dorine","dorism","dorize","dorlot","dormer","dormie","dormin","dornic","dorobo","dorper","dorsad","dorsal","dorsel","dorser","dorsum","dorter","doruck","dosadh","dosage","dosain","dosers","dosing","dossal","dossed","dossel","dosser","dosses","dossil","dotage","dotant","dotard","dotate","doters","dother","dotier","doting","dotish","dotkin","dotlet","dotted","dottel","dotter","dottle","douane","double","doubly","doubty","doubts","doucet","douche","doucin","doudle","doughy","doughs","dought","doulce","doumas","douper","dourah","douras","dourer","dourly","doused","douser","douses","douter","dovens","dovish","dowage","dowcet","dowels","dowery","dowers","dowily","dowing","dowlas","downby","downed","downer","dowsed","dowser","dowses","dowset","doxies","dozens","dozent","dozers","dozier","dozily","dozing","dozzle","drabby","drably","drachm","dracin","dracma","dradge","draffy","draffs","drafty","drafts","dragee","draggy","dragon","drayed","drails","draine","drains","drakes","dramas","dramme","draped","draper","drapes","drapet","dravya","drawee","drawer","drawly","drawls","drazel","dreads","dreamy","dreams","dreamt","dreary","dreche","drecks","dredge","dreegh","dreepy","dreggy","dreich","dreidl","dreigh","dreint","dreynt","drench","drengh","dressy","dretch","drevel","dryads","driech","driegh","driers","dryers","driest","dryest","dryfat","drifty","drifts","drying","dryish","drills","drylot","drimys","drinky","drinks","dryope","dryops","drippy","dryrot","drysne","drivel","driven","driver","drives","droger","drogue","droich","droits","drokpa","drolly","drolls","dromed","dromic","dromoi","dromon","dromos","droned","dronel","droner","drones","dronet","drongo","dronte","drooly","drools","droopy","droops","droopt","dropax","droppy","dropsy","drosky","drossy","drouks","droumy","drouth","droved","drover","droves","drownd","drowns","drowse","drowsy","drowte","drubly","drudge","druery","drugge","druggy","druids","druith","drukpa","drumly","drummy","drunks","drupal","drupel","drupes","drused","druses","druxey","dsects","dsname","dtente","duadic","dualin","dually","duarch","dubash","dubbah","dubbed","dubbeh","dubber","dubbin","dublin","ducape","ducato","ducats","duchan","ducked","ducker","duckie","ductal","ducted","ductor","ductus","ducula","dudaim","dudder","duddie","duddle","dudeen","dudgen","dudine","dudish","dudism","dudley","dudler","dudman","dueful","dueled","dueler","duelli","duello","duenas","duende","duenna","duessa","duetto","duffed","duffel","duffer","duffle","dufoil","dufter","duftry","dugdug","dugong","dugout","dugway","duiker","duyker","dukely","dukery","dukker","dukkha","dukuma","dulcet","dulcid","dulcin","dulcor","dulias","dulled","duller","dulses","dultie","duluth","dumbed","dumber","dumble","dumbly","dumdum","dummel","dumose","dumous","dumped","dumper","dumple","dumpty","dunair","duncan","dunces","dundee","dunder","dungan","dungas","dunged","dunger","dungol","dungon","dunite","dunked","dunker","dunkle","dunlap","dunlin","dunlop","dunned","dunner","dunted","dunter","duntle","duolog","duomos","duopod","dupery","dupers","duping","dupion","duplet","duplex","duplon","dupped","dupper","durain","durani","durant","durban","durbar","durdum","durene","duress","durgah","durgan","durgen","durham","durian","during","durion","durity","durned","durocs","durous","durras","durrie","durrin","durums","durwan","durzee","dusack","duscle","dusked","dusken","duskly","dusted","dustee","duster","dustin","dustuk","dustup","dutchy","dutied","duties","dvaita","dvorak","dwayne","dwarfy","dwarfs","dwells","dwight","dwined","dwines","dzeren","dzerin","dzeron","eadios","eadish","eagers","eagled","eagles","eaglet","eagres","eaning","earbob","earcap","earful","earing","earlap","earlet","earned","earner","earnie","earock","eartab","eartag","earthy","earths","earwax","earwig","easels","easers","easier","easies","easily","easing","eassel","easted","easter","eastre","eatage","eatche","eatery","eaters","eathly","eating","ebbets","ebbing","ebbman","ebcasc","ebcdic","ebulus","eburin","eburna","ecanda","ecarte","ecbole","eccles","ecesic","ecesis","echard","eching","echini","echium","echoed","echoey","echoer","echoes","echoic","echuca","eciton","eclair","eclats","eclegm","ecoles","ecorch","ecoute","ecrase","ectene","ectype","ectopy","ecurie","eczema","eddaic","eddied","eddies","eddish","eddoes","edemas","edemic","edenic","edgers","edgier","edgily","edging","edgrew","edgrow","edible","edicts","ediles","edison","edital","edited","editor","edmond","edmund","edplot","educed","educes","educts","edward","edwina","eebree","eeyuch","eeyuck","eelbob","eelery","eelier","eeling","eelpot","eerier","eerily","eerock","eesome","efecks","efface","effare","effate","effect","effeir","effete","effigy","efflux","efford","efform","effort","effray","effude","effume","effund","effuse","effuso","efreet","eftest","egally","egards","egbert","egence","egency","egeran","egeria","egesta","egests","eggars","eggcup","eggers","egghot","egging","eggler","eggnog","egipto","egises","egling","egoism","egoist","egoity","egoize","egress","egrets","egriot","ehlite","ehrman","ehuawa","eyalet","eyases","eident","eydent","eiders","eidola","eyebar","eyecup","eyedot","eyeful","eyeing","eyeish","eyelet","eyelid","eyepit","eiffel","eighth","eighty","eights","eikons","eileen","eyliad","eirack","eyrant","eirene","eyries","eisell","eysoge","either","ejecta","ejects","ejidal","ejidos","ekhimi","ektene","elabor","elaeis","elaine","elains","elance","elands","elanet","elanus","elaphe","elapid","elapse","elated","elater","elates","elatha","elator","elbert","elboic","elbowy","elbows","elbuck","elcaja","elchee","eldern","elders","eldest","elding","eldred","elechi","electo","elects","elegit","elemin","elemis","elemol","elench","elenge","eleuin","eleven","elevon","elfdom","elfins","elfish","elfkin","elicit","elided","elides","elijah","elymus","elinor","elysee","elisha","elysia","elisor","elissa","elites","elytra","elixed","elixir","elkdom","elkuma","elleck","ellice","ellick","elling","elliot","ellops","elmier","elodea","elodes","elohim","eloign","eloine","eloins","eloise","eloped","eloper","elopes","elrage","elshin","eltime","eltrot","eluant","eluate","elucid","eluded","eluder","eludes","eluent","eluted","elutes","elutor","eluvia","elvers","elvira","elvish","elwood","embace","embain","embays","embale","emball","embalm","embank","embark","embars","embase","embden","embeam","embeds","embers","embiid","embind","embira","emblem","emblic","embody","emboil","embole","emboli","emboly","embolo","embosk","emboss","embost","embowl","embows","embrew","embryo","embrue","embuia","embulk","embull","embush","embusy","embusk","emceed","emcees","emeers","emends","emeras","emerge","emeril","emerit","emerod","emerse","emeses","emesis","emetia","emetic","emetin","emeute","emydea","emydes","emigre","emilia","emissi","emmers","emmets","emmett","emmies","emmove","emodin","emoloa","emoted","emoter","emotes","empair","empale","empall","empark","emparl","empasm","empery","empest","empexa","empire","empiry","employ","empory","emptio","emptor","empusa","emraud","emrode","emulge","emunct","emunge","enable","enacts","enaena","enajim","enalid","enamel","enamor","enarch","enarme","enates","enatic","enbibe","enbloc","encage","encake","encamp","encase","encash","encave","encell","encycl","encina","encist","encyst","enclog","encode","encoil","encomy","encoop","encore","encowl","encurl","endark","endaze","endear","endebt","endent","endere","enders","endict","endyma","ending","endite","endive","endome","endore","endoss","endows","endrin","endued","endues","endura","endure","enduro","enemas","energy","enerve","eneuch","eneugh","enface","enfant","enfect","enfief","enfile","enfire","enfirm","enfoil","enfold","enfork","enform","enfort","enfoul","enfrai","enfree","enfume","engage","engaol","engarb","engaud","engaze","enghle","engild","engine","engird","engirt","englad","engler","englyn","englue","englut","engobe","engold","engore","engoue","engram","engrid","engulf","enhalo","enhelm","enhort","enhusk","enigma","enigua","enisle","enjail","enjamb","enjoin","enjoys","enkidu","enlace","enlard","enleaf","enleen","enlief","enlife","enlimn","enlink","enlist","enlive","enlock","enlure","enlute","enmask","enmass","enmesh","enmist","enmity","enmoss","enmove","ennage","ennead","ennoic","ennuye","ennuis","enodal","enoint","enolic","enopla","enosis","enough","enrace","enrage","enrail","enrank","enrapt","enrich","enring","enrive","enrobe","enroll","enrols","enroot","enruin","ensafe","ensand","ensate","enseal","enseam","ensear","enseat","enseel","enseem","enserf","ensete","ensign","ensile","ensnow","ensoul","enstar","ensued","ensuer","ensues","ensure","entach","entada","entail","entame","entera","enters","entete","entice","entier","enties","entify","entire","entity","entoil","entomb","entone","entour","entrap","entrec","entree","entrep","entrer","entrez","entria","entune","enukki","enured","enures","enurny","envaye","enveil","envied","envier","envies","envine","envire","envois","envoys","enwall","enwind","enwing","enwomb","enwood","enwove","enwrap","enzyme","enzyms","enzone","eocene","eogaea","eoiths","eolian","eolith","eonian","eonism","eosate","eoside","eosine","eosins","eozoic","eozoon","epacme","epacts","eparch","epaule","epeira","epenla","eperua","eperva","ephahs","ephebe","ephebi","ephete","ephyra","ephods","ephori","ephors","epical","epicly","epidia","epigee","epigne","epigon","epikia","epilog","epimer","epirot","epithi","epitra","epizoa","epocha","epoche","epochs","epodes","epodic","epoist","eponge","eponym","epopee","eposes","eprise","eprosy","epulis","epural","equals","equant","equate","equine","equips","equipt","equity","equoid","erased","eraser","erases","erbium","erebus","erects","eremic","erenow","ergane","ergate","ergots","ericad","erical","ericas","eringo","eryngo","erinys","eryops","ermani","ermine","ernest","eroded","erodes","eroses","erotic","errand","errant","errata","erring","errite","errors","errsyn","ersatz","erthen","erthly","erucic","erucin","eructs","erudit","erugos","erupts","ervils","escape","escarp","escars","eschar","eschel","eschew","escoba","escort","escots","escout","escrod","escrol","escrow","escudo","esdras","eserin","eskars","eskers","eskimo","esnecy","esodic","esopgi","esopus","espace","espada","espave","espece","espial","espied","espier","espies","espino","esprit","esrogs","essays","essang","essart","esseda","essede","essene","essera","essive","essoin","estado","estafa","estall","estamp","estang","estate","estats","esteem","esters","esther","estive","estocs","estoil","estops","estray","estral","estrif","estrin","estrum","estrus","estudy","estufa","esture","etagre","etalon","etamin","etapes","etched","etcher","etches","eterne","ethane","ethene","ethers","ethics","ethide","ethyls","ethine","ethyne","ethion","ethiop","ethize","ethnal","ethnic","ethnog","ethnol","ethnos","ethoxy","ethrog","etymic","etymol","etymon","etypic","etnean","etoffe","etoile","etrier","etrogs","ettled","etudes","etuvee","etwees","etwite","euboic","eucgia","euchre","euclea","euclid","eucone","eudeve","eudist","eudora","eugene","eugeny","eulima","eulogy","eundem","eunice","eunomy","eunuch","euodic","euonym","euouae","euphon","eupion","eupnea","eureka","euryon","euripi","eurite","euryte","europa","europe","eurous","eutaxy","eutony","euvrou","euxine","evacue","evaded","evader","evades","evadne","evalue","evanid","evejar","evelyn","evened","evener","evenly","evenoo","events","eveque","everly","evermo","everse","everts","evicke","evicts","eviler","evilly","evince","evited","evites","evodia","evoked","evoker","evokes","evolve","evomit","evovae","evulge","evulse","evviva","evzone","ewerer","ewound","exacta","exacts","exacum","exalte","exalts","examen","exarch","exaudi","excamb","excave","exceed","excels","except","excern","excerp","excess","excide","excise","excyst","excite","exclam","excoct","excuse","excuss","exedra","exempt","exequy","exerce","exerts","exeunt","exhale","exhort","exhume","exiled","exiler","exiles","exilic","exines","exists","exited","exitus","exmoor","exodic","exodoi","exodos","exodus","exogen","exolve","exomis","exoner","exonym","exopod","exotic","expand","expect","expede","expels","expend","expert","expire","expiry","explat","expone","export","expose","expugn","exsect","exsert","exship","extant","extend","extent","extern","extill","extima","extime","extine","extirp","extoll","extols","extort","extras","extund","exturb","exuded","exudes","exults","exurbs","exurge","exuvia","faailk","fabian","fabled","fabler","fables","fabric","fabula","facade","facers","facete","facets","faceup","facial","facias","facier","facies","facile","facily","facing","facsim","factor","factum","facula","facund","faddle","faders","fadged","fadges","fading","faecal","faeces","faenas","faence","faenus","faerie","faeroe","faffle","fafnir","fagald","fagara","fagged","fagger","faggot","fagine","fagins","fagoty","fagots","fagott","faying","faikes","failed","fayles","faille","fainer","fainly","fainty","faints","faired","fairer","fairly","faisan","faiths","faitor","fakeer","fakery","fakers","faking","fakirs","fakofo","falcer","falces","falcon","falern","fallal","fallen","faller","fallow","falsen","falser","falsie","falsum","falter","faluns","famble","family","famine","faming","famish","famose","famous","famuli","fandom","fanega","fangas","fanged","fanger","fangle","fangot","fanion","fanjet","fankle","fanman","fanned","fannel","fanner","fannia","fannon","fanons","fanout","fantad","fantee","fantod","fantom","fanums","faqirs","faquir","farads","farand","faraon","farced","farcer","farces","farcie","farcin","farded","fardel","farers","farfal","farfel","farfet","farina","farine","faring","farish","farley","farles","farleu","farmed","farmer","faroff","farouk","farrel","farris","farrow","farset","farted","fasces","fascet","fascia","fascio","fascis","fasels","fashed","fasher","fashes","fasola","fasted","fasten","faster","fastly","fastus","fatale","fatals","father","fathom","fatiha","fatima","fating","fatsia","fatsos","fatted","fatten","fatter","fatuus","faucal","fauces","faucet","faucre","faufel","faulds","faulty","faults","faunae","faunal","faunas","faunch","faunus","faured","fausen","fautor","fauves","favela","favism","favors","favose","favour","favous","fawned","fawner","faxing","fazing","fdname","fdtype","feague","feaked","fealty","feared","fearer","feased","feases","feasor","feasts","feater","featly","feazed","feazes","febres","febris","fecche","fecial","fecket","feckly","fecula","fecund","feddan","fedity","fedora","feeble","feebly","feeded","feeder","feeing","feeler","feerie","feezed","feezes","fegary","fehmic","feyest","feigns","feijoa","feints","feirie","feisty","feists","felids","feline","fellah","fellas","felled","fellen","feller","fellic","felloe","fellon","fellow","feloid","felony","felons","felsic","felted","felter","female","femcee","femmes","femora","fempty","femurs","fenced","fencer","fences","fended","fender","","fenite","fenman","fenmen","fennec","fennel","fenner","fennig","fenrir","fenter","feodal","feodum","feoffs","feower","ferash","ferbam","ferfel","ferfet","fergus","feriae","ferial","ferias","ferine","ferity","ferkin","ferlie","fermal","fermis","ferned","feroce","ferous","ferrel","ferren","ferrer","ferret","ferric","ferris","ferrum","ferter","fertil","ferula","ferule","fervid","fervor","fesapo","fescue","fesels","fessed","fesses","festae","festal","fester","festin","feston","fetial","fetich","feting","fetise","fetish","fetlow","fetors","fetted","fetter","fettle","feture","feuage","feuars","feucht","feudal","feuded","feudee","feuder","feudum","feuing","feuter","fevery","fevers","fewest","fewnes","fewter","fezzan","fezzed","fezzes","fiacre","fiador","fiance","fianna","fiants","fiasco","fiaunt","fibbed","fibber","fibdom","fibers","fibred","fibres","fibril","fibrin","fibula","ficary","ficche","fichat","fiches","fichus","ficins","fickle","fickly","ficoes","ficoid","fictil","fictor","ficula","fidate","fidawi","fidded","fiddle","fiddly","fidele","fideos","fidfad","fidged","fidges","fidget","fidley","fieldy","fields","fiends","fierce","fierte","fiesta","fifers","fifing","fifish","fifths","figary","figaro","figboy","figent","figged","figgle","figgum","fights","figura","figure","figury","fijian","fikery","fiking","filace","filago","filate","filaze","filers","filets","fylfot","fylgja","filial","filing","filite","filius","fylker","filled","filler","filles","fillet","fillip","filmed","filmer","filmet","filmic","filosa","filose","filter","filthy","filths","filtre","fimble","finale","finals","finary","fincas","findal","finder","findon","fineer","finely","finery","finest","fingal","fingan","finger","finial","finick","finify","fining","finish","finite","finity","finjan","finked","finkel","finlet","finnac","finnan","finned","finner","finnic","finnip","finnoc","fiords","fiorin","fipple","fiques","firers","firing","firked","firker","firkin","firlot","firman","firmed","firmer","firmly","firsts","firths","fiscal","fiscus","fished","fisher","fishes","fishet","fissle","fisted","fister","fistic","fistle","fitche","fitchy","fitful","fitout","fitted","fitten","fitter","fyttes","fittit","fiuman","fivers","fivish","fixage","fixate","fixers","fixgig","fixing","fixion","fixity","fixive","fixups","fixure","fizgig","fizzed","fizzer","fizzes","fizzle","fjelds","fjords","flabby","flabel","flabra","flacks","flacon","flaggy","flagon","flayed","flayer","flails","flairs","flaite","flaith","flaked","flaker","flakes","flambe","flamed","flamen","flamer","flames","flanch","flanes","flange","flanky","flanks","flappy","flared","flarer","flares","flaser","flashy","flasks","flated","flathe","flatly","flatus","flaunt","flauto","flavia","flavic","flavid","flavin","flavor","flawed","flaxen","flaxes","fleamy","fleams","fleche","flecky","flecks","fledge","fledgy","fleece","fleech","fleecy","fleers","fleets","fleyed","fleing","flemer","flench","flense","flerry","fleshy","fletch","fleury","flewed","flewit","flexed","flexes","flexor","flybys","flyboy","flicky","flicks","flidge","fliers","flyers","fliest","flight","flying","flyman","flymen","flimsy","flinch","flingy","flings","flinty","flints","flyoff","flioma","fliped","flirty","flirts","flysch","flisky","flitch","flited","flyted","flites","flytes","flitty","flyway","flneur","floaty","floats","flobby","flocci","flocky","flocks","flodge","flongs","floody","floods","flooey","floors","floosy","floozy","floppy","florae","floral","floran","floras","flores","floret","floria","florid","florin","flossa","flossy","flotas","floter","floury","flours","flouse","floush","flouts","flowed","flower","fluate","flucan","fluent","fluffy","fluffs","flugel","fluids","fluing","fluyts","fluked","flukey","flukes","flumed","flumes","flumps","flunky","flunks","fluors","flurry","flushy","fluted","flutey","fluter","flutes","fluvio","fluxed","fluxer","fluxes","foaled","foamed","foamer","fobbed","fockle","focsle","fodder","fodgel","foehns","foeish","foeman","foemen","foetal","foetid","foetor","foetus","fogbow","fogdog","fogdom","fogeys","fogged","fogger","fogies","fogman","fogmen","fogram","fogrum","foible","foyers","foiled","foiler","foined","foysen","foison","foisty","foists","foiter","fokker","folate","folded","folden","folder","foleye","folial","foliar","folies","folily","folios","foliot","folium","folksy","foller","folles","follis","follow","folsom","foment","fondak","fonded","fonder","fondle","fondly","fondon","fondue","fonduk","fondus","fontal","fonted","fontes","foobar","fooder","fooled","fooler","fooner","footed","footer","footie","footle","footsy","foozle","fopped","forage","forays","forams","forane","forbad","forbar","forbid","forbye","forbit","forbow","forcat","forced","forcer","forces","forcet","forche","forcut","fordam","forded","fordid","foreby","foredo","forego","forest","forfar","forfex","forfit","forgab","forgat","forged","forger","forges","forget","forgie","forgot","forhoo","forhow","forint","forked","forker","forlay","forlet","forlie","formal","format","formby","formed","formee","formel","former","formes","formic","formyl","formin","formly","formol","fornax","fornix","forold","forpet","forpit","forrad","forrel","forril","forrit","forrue","forsay","forsar","forsee","forset","fortes","forthy","fortin","fortis","forums","forvay","forwhy","fosite","fossae","fossed","fosses","fosset","fossil","fossor","foster","fother","fotive","fotmal","fouett","fought","fougue","fouled","fouler","foully","founce","founds","founte","founts","fourer","fourre","fourth","foussa","fouter","foutra","foutre","foveae","foveal","fovent","fowage","fowent","fowled","fowler","foxery","foxier","foxily","foxing","foxish","foxite","fozier","fracas","frache","fracid","fraela","fraena","fragor","frayed","fraile","frails","frayne","fraise","fraist","fraken","framea","framed","framer","frames","franca","france","franco","francs","frangi","franks","franzy","fraple","frappe","frasco","fraser","frasse","fratch","frater","fratry","frauds","frauen","fraxin","frazed","frazer","frazil","freaky","freaks","freath","freddy","freddo","freeby","freefd","freely","freend","freers","freesp","freest","freety","freeze","freezy","fregit","freyja","freijo","freith","freity","frenal","french","frenne","frenum","frenzy","freres","fresco","fresne","fresno","frette","fretty","fretum","friand","friary","friars","fribby","fricti","friday","fridge","frieda","friend","friers","fryers","friese","frieze","friezy","frigga","fright","frigid","frigor","frying","frijol","frilal","frilly","frills","fringe","fringy","frypan","frisca","frisch","frisco","frises","frisii","frisky","frisks","frison","frithy","friths","fritts","frivol","frized","frizel","frizer","frizes","frizzy","frocks","froggy","froise","frokin","frolic","fronde","fronds","fronts","froren","frosty","frosts","frothi","frothy","froths","frough","frousy","froust","frouze","frouzy","frower","frowny","frowns","frowsy","frowst","frowze","frowzy","frozen","frugal","fruity","fruits","frumpy","frumps","frusla","frusta","frutex","fsiest","fstore","ftncmd","ftnerr","fubbed","fucate","fucked","fucker","fucoid","fucose","fucous","fudder","fuddle","fudged","fudger","fudges","fueled","fueler","fuerte","fuffit","fuffle","fugacy","fugara","fugard","fugate","fugato","fugged","fugios","fugled","fugler","fugles","fugued","fugues","fuhrer","fulani","fulcra","fulfil","fulful","fulgid","fulgor","fulgur","fulham","fulica","fuligo","fulyie","fullam","fulldo","fulled","fuller","fullom","fulmar","fulmen","fulvid","fulzie","fumade","fumado","fumage","fumago","fumant","fumble","fumers","fumets","fumier","fumify","fumily","fuming","fumish","fummel","fummle","fumose","fumous","fumuli","funbre","fundal","funded","funder","fundic","fundus","funest","fungal","fungia","fungic","fungid","fungin","fungus","funked","funker","funkia","funned","funnel","funori","furane","furans","furcae","furcal","furdel","furdle","furfur","furial","furied","furies","furify","furile","furlan","furled","furler","furner","furnit","furoic","furoid","furoin","furole","furore","furors","furphy","furred","furrow","furthy","furtum","furzed","furzes","fusain","fusate","fuscin","fuseau","fusees","fusels","fusile","fusils","fusing","fusion","fusoid","fussed","fusser","fusses","fussle","fustee","fuster","fustet","fustic","fustie","fustin","fustle","fustoc","fusula","fusuma","fusure","futile","futtah","futter","future","futuro","fuzees","fuzils","fuzing","fuzzed","fuzzes","fuzzle","gaatch","gabari","gabbai","gabbed","gabber","gabble","gabbro","gabert","gabgab","gabies","gabion","gabled","gabler","gables","gablet","gaboon","gadaba","gadaea","gadbee","gadded","gadder","gaddis","gadean","gadfly","gadger","gadget","gadids","gadite","gadman","gadoid","gaduin","gaelic","gaffed","gaffer","gaffes","gaffle","gagaku","gagate","gagers","gagged","gagger","gaggle","gaging","gagman","gagmen","gayals","gaycat","gayest","gaiety","gayety","gayyou","gayish","gained","gainer","gainly","gainor","gainst","gaypoo","gaited","gaiter","gayway","galago","galahs","galany","galant","galaxy","galban","galcha","galeae","galeas","galega","galeid","galena","galeod","galera","galere","galeus","galgal","galyac","galyak","galibi","galiot","galium","gallah","galled","galley","galler","gallet","gallic","gallon","gallop","gallow","gallup","gallus","galoch","galoot","galops","galore","galosh","galuth","gamahe","gamari","gamash","gambas","gambes","gambet","gambia","gambir","gambit","gamble","gambol","gamdia","gamely","gamene","gamest","gamete","gamgee","gamgia","gamier","gamily","gamine","gaming","gamins","gammas","gammed","gammer","gammon","gamond","gamone","gamont","gamori","gamuts","gander","gandhi","gandul","gandum","ganefs","ganevs","gangan","ganged","ganger","ganges","gangly","gangsa","gangue","gangwa","ganyie","ganjas","ganner","gannet","ganofs","ganoid","ganoin","gansey","gansel","ganser","ganton","gantry","gantsl","ganzie","gaoled","gaoler","gaonic","gapers","gaping","gapped","gapper","garage","garava","garawi","garbed","garbel","garble","garcon","garden","gardon","gareth","garget","gargil","gargle","gargol","garial","gariba","garish","garlic","garnel","garner","garnet","garote","garous","garran","garrat","garred","garret","garrya","garron","garroo","garrot","garsil","garten","garter","garths","garuda","garvey","garvie","gasbag","gascon","gashed","gasher","gashes","gashly","gasify","gasket","gaskin","gaslit","gasman","gasmen","gaspar","gasped","gasper","gassed","gasser","gasses","gassit","gasted","gaster","gastly","gateau","gather","gathic","gating","gatsby","gatten","gatter","gauche","gaucho","gaucie","gaufer","gaufre","gauged","gauger","gauges","gauily","gaulic","gaulin","gaulsh","gaults","gaumed","gaunch","gaunty","gaupus","gauric","gaurie","gauzes","gavage","gavall","gavels","gaviae","gavial","gavots","gawain","gawcey","gawcie","gawgaw","gawish","gawked","gawker","gawney","gawsie","gazabo","gazebo","gazers","gazing","gazook","gazump","gdinfo","geared","geason","geatas","gebang","gebbie","gecked","geckos","gedact","gedder","gedunk","geegaw","geeing","geejee","geerah","geests","geezer","geggee","gegger","geiger","geikia","geyser","geisha","geison","gelada","gelant","gelate","gelded","gelder","geleem","gelees","gelled","gelong","gelose","gemara","gemels","gemini","gemmae","gemman","gemmed","gemmel","gemmer","gemote","gemots","gemses","gemuti","genapp","gender","geneal","genear","geneat","geneki","genepi","genera","genets","geneva","genial","genian","genies","genion","genipa","genips","genius","genoas","genome","genoms","genres","genros","genson","gentes","gentil","gentle","gently","gentoo","gentry","genual","geodal","geodes","geodic","geogen","geoids","geomys","geonic","geonim","george","geosid","geotic","gepeoo","gepoun","gerahs","gerald","gerara","gerard","gerate","geraty","gerbil","gerefa","gerent","gerful","geryon","gerkin","germal","german","germen","germin","germon","geront","gerres","gersum","gertie","gerund","gervao","gervas","gesith","gestae","gested","gesten","gester","gestes","gestic","gestio","gestor","gether","getspa","getsul","getter","getups","geulah","gewgaw","ghafir","ghaist","ghalva","gharri","gharry","ghatti","ghauts","ghazal","ghazel","ghazis","gheber","ghedda","gherao","ghetti","ghetto","ghibli","ghylls","ghosty","ghosts","ghouls","ghrush","ghurry","giants","giaour","giarra","giarre","gyassa","gibaro","gibbar","gibbed","gibber","gibbet","gibbol","gibbon","gibbus","gibers","gibier","gibing","gybing","gibleh","giblet","giboia","gibson","giddap","giddea","gideon","gidgea","gidgee","gidyea","gidjee","gieing","gienah","giesel","gifola","gifted","giftie","gigant","gigful","gigged","gigger","gigget","giggit","giggle","giggly","giglet","giglio","giglot","gigman","gigolo","gigots","gigues","gigunu","gilaki","gilded","gilden","gilder","gileno","gilgai","gilgie","gilguy","gilgul","giliak","gillar","gilled","giller","gilles","gillie","gillot","gilour","gilpey","gilten","gilver","gimbal","gimble","gimbri","gimels","gimlet","gimmal","gymmal","gimmer","gimmor","gymnic","gimped","gimper","gympie","gymsia","ginete","gingal","ginger","gingko","gingle","gynics","ginkgo","ginned","ginney","ginnel","ginner","ginnet","ginnle","gynura","gipons","gipped","gypped","gipper","gypper","gipser","gypsum","gyrant","gyrate","girded","girder","girdle","gyrene","gyring","girkin","girlie","girnal","girned","girnel","girnie","gyroma","girons","gyrons","gyrose","gyrous","girrit","girsle","girted","girths","gisant","gisler","gismos","gispin","gitana","gitano","gitter","gyttja","giulio","giunta","giusto","givens","givers","giveth","giving","gyving","gizmos","gizzen","glaces","glacis","glacon","gladdy","gladen","glades","gladii","gladys","gladly","glagah","glagol","glaiks","glaire","glairy","glairs","glaive","glaked","glamor","glance","glands","glanis","glared","glares","glarry","glassy","glauke","glaury","glaver","glazed","glazen","glazer","glazes","gleamy","gleams","gleans","gleary","gleave","glebae","glebal","glebes","gledes","gledge","gleeds","gleeks","gleety","gleets","glegly","gleyde","gletty","glibly","glycan","glycic","glycid","glycyl","glycin","glycol","glided","glider","glides","gliffy","gliffs","glimed","glimes","glinse","glints","glioma","gliosa","glyphs","glires","glisky","glitch","glitzy","gloams","gloats","global","globed","globes","globin","globus","gloeal","gloggs","glomus","gloomy","glooms","gloppy","gloria","glossa","glossy","glosts","glotum","glouts","gloved","glovey","glover","gloves","glowed","glower","glozed","glozer","glozes","glucic","glucid","glucke","gluers","gluier","gluily","gluing","gluish","glumal","glumes","glumly","glummy","glumpy","glunch","glusid","glutch","glutei","gluten","glutin","gnaeus","gnamma","gnarly","gnarls","gnarrs","gnatho","gnatoo","gnatty","gnawed","gnawer","gneiss","gnetum","gnomed","gnomes","gnomic","gnomon","gnoses","gnosis","goaded","goaled","goalee","goaler","goalie","goanna","goatee","goatly","goaves","goback","gobang","gobans","gobbed","gobber","gobbet","gobbin","gobble","gobian","gobies","gobiid","goblet","goblin","goboes","gobony","gocart","goddam","godded","godful","godiva","godkin","godlet","godown","godsib","godson","godwin","godwit","goemot","goetae","goethe","goetia","goetic","gofers","goffer","goffle","goggan","goggle","goggly","goglet","gohila","goyana","goidel","goyish","goings","goiter","goitre","golach","golden","golder","goldic","goldie","goldin","golems","golfed","golfer","goliad","gollar","goller","gollop","goloch","goloka","golosh","gomari","gomart","gombay","gombos","gomlah","gomuti","gonads","gonake","goners","gonged","goniac","gonial","gonifs","gonion","gonium","gonofs","gonoph","goober","goodby","gooder","goodie","goodly","goofah","goofed","goofer","googly","googol","googul","gooier","goolah","goolde","goonch","goonda","gooney","goonie","gooral","gooroo","goosed","goosey","gooses","gootee","goozle","gopher","gopura","gorals","gorbal","gorbet","gorbit","gorble","gordon","gorfly","gorged","gorger","gorges","gorget","gorgia","gorgio","gorgon","gorhen","gorier","gorily","goring","gorkun","gorlin","gorman","gormaw","gormed","gorraf","gorrel","gorses","gosain","goshen","goslet","gospel","gossan","gossep","gossip","goster","gotchy","gotham","gothic","gotten","gouged","gouger","gouges","goujay","goujat","goujon","goulan","gounau","goupen","goupin","gourde","gourdy","gourds","gousty","gouter","goutte","govern","gowany","gowans","gowdie","gowfer","gowked","gowkit","gowlan","gowned","gowpen","gowpin","gozell","gozill","gozzan","graals","grabby","graben","graced","gracer","graces","gradal","graded","grader","grades","gradin","gradus","graeae","graeme","grafts","grager","graham","graian","grayed","grayer","grayly","grails","graine","grainy","grains","graith","grakle","gramas","gramma","gramme","grammy","grampa","gramps","granam","granat","granch","grande","grando","grands","granes","granet","grange","granma","granny","granth","grants","granum","granza","graped","grapey","grapes","graphy","graphs","grappa","grapta","grasni","grasps","grassy","gratae","grated","grater","grates","gratia","gratin","gratis","graunt","gravat","graved","gravel","graven","graver","graves","gravic","gravid","grawls","grazed","grazer","grazes","grazie","grease","greasy","greats","greave","grebes","greece","greedy","greeds","greeks","greeny","greens","greese","greets","greeve","greffe","gregal","gregau","gregge","gregor","gregos","greyed","greyer","greige","greyly","greing","greith","grelot","gremio","gremmy","grenat","gresil","gretel","greund","grewia","grided","grides","griece","griefs","griege","grieko","grieve","griffe","griffs","grifts","grigri","grille","grylle","grilly","grylli","grills","grilse","grimed","grimes","grimly","grimme","grinch","grinds","gringo","grinny","griots","griped","gripey","griper","gripes","griphe","grippe","grippy","griqua","grisly","grison","gristy","grists","griths","gritty","grivet","grivna","grizel","groans","groats","grocer","groggy","groyne","groins","gromet","gromia","gromil","gromyl","groomy","grooms","groose","grooty","groove","groovy","groped","groper","gropes","groser","groset","grosse","grosso","groszy","groten","grotty","grotto","grouch","grough","ground","groups","grouse","grousy","grouty","grouts","grouze","groved","grovel","grover","groves","grovet","growan","growed","grower","growly","growls","growse","growth","growze","grozer","grozet","grubby","grudge","gruels","gruffy","gruffs","grugru","gruine","grulla","grumes","grumly","grumph","grumpy","grumps","grunch","grundy","grungy","grunth","grunts","gruppo","grutch","gthite","guacho","guacin","guacos","guadua","guaiac","guaiol","guanay","guango","guanyl","guanin","guanos","guaque","guardo","guards","guarea","guarri","guavas","guazzo","gubbin","gucked","gudame","guddle","gudget","gudrun","guebre","guelph","guemal","guemul","guenon","guerre","guests","guetar","guetre","guffaw","guffer","guffin","guggle","guglet","guglia","guglio","guiana","guyana","guided","guider","guides","guydom","guidon","guyers","guigne","guying","guilds","guiled","guiler","guiles","guilty","guilts","guimpe","guinde","","guinfo","guyots","guised","guiser","guises","guitar","guland","gulash","gulden","gulfed","gulgul","gulist","gullah","gulled","gulley","guller","gullet","gulose","gulped","gulper","gulpin","gumbos","gumhar","gumlah","gummas","gummed","gummer","gummic","gumpus","gunate","gundie","gundog","gunebo","gunyah","gunyeh","gunite","gunjah","gunman","gunmen","gunnar","gunned","gunnel","gunnen","gunner","gunong","gunsel","gunter","guntub","gunung","gurdle","gurged","gurges","gurgle","gurgly","gurian","gurish","gurjan","gurjun","gurkha","gurlet","gurney","gurnet","gurrah","gusain","gushed","gusher","gushes","gushet","guslee","gusset","gussie","gusted","gustus","gutium","gutnic","gutser","guttae","guttar","gutted","guttee","gutter","guttie","guttle","guttur","guttus","guzzle","gweduc","gweeon","habble","habbub","habeas","habena","habere","habile","habiri","habiru","habits","habnab","haboob","haboub","habuka","haceks","hachis","hacked","hackee","hacker","hackia","hackie","hackin","hackle","hackly","hadada","hadbot","hadden","hadder","haddie","haddin","hadean","hading","hadith","hadjee","hadjes","hadjis","hadrom","hadron","haeing","haemad","haemal","haemic","haemin","haeres","haffat","haffet","haffit","haffle","hafgan","haflin","hafnia","hafnyl","hafted","hafter","hagada","hagbut","hagden","hagdin","hagdon","hageen","hagein","haggai","hagged","hagger","haggis","haggle","haggly","haglet","haglin","hagrid","haiari","haybox","haycap","haidan","haidee","haiduk","hayers","haying","haikai","haikal","haikun","hailed","hailer","hailes","hailse","haymow","hainai","hainan","hainch","hained","hairdo","haired","hairen","hairif","hairof","hairse","hairst","hairup","haysel","haisla","haiver","hajjes","hajjis","hakdar","hakeem","hakims","halaka","halala","halawi","halebi","halely","halers","haleru","halerz","halest","halfen","halfer","halfly","halide","halids","haling","halite","hallah","hallan","hallel","hallex","halloa","halloo","hallos","hallot","hallow","hallux","haloed","haloes","haloid","halper","halsen","halser","halted","halter","halutz","halvah","halvas","halved","halver","halves","hamada","hamald","hamals","hamata","hamate","hamaul","hamber","hamble","hambro","hameil","hamelt","hametz","hamfat","hamilt","hamite","hamlah","hamlet","hammal","hammam","hammed","hammer","hamose","hamous","hamper","hamule","hamuli","hamzah","hamzas","hanafi","hanced","hances","handed","handel","hander","handle","hangar","hangby","hanged","hangee","hanger","hangie","hangle","hangul","hangup","hanked","hanker","hankie","hankle","hankul","hansel","hanses","hansom","hanted","hantle","haoles","haoris","hapale","happed","happen","happer","hapten","haptic","haptor","hapuku","harace","haraya","harang","harari","harass","harast","harbor","harden","harder","hardie","hardim","hardly","hareem","hareld","harems","harico","harier","haring","harish","harked","harkee","harken","harled","harlem","harlot","harmal","harman","harmed","harmel","harmer","harmin","harmon","harold","harped","harper","harpin","harrid","harris","harrow","hartal","harten","hartin","hartly","harvey","hasard","hashab","hashed","hasher","hashes","haslet","hasped","hassar","hassel","hassle","hasted","hasten","haster","hastes","hastif","hatbox","haters","hatful","hathor","hating","hatpin","hatred","hatted","hatter","hattic","hattie","haughs","haught","hauyne","hauled","hauler","haulmy","haulms","haulse","haunce","haunch","haunty","haunts","haupia","hausen","hausse","havage","havana","havens","havent","havers","havier","having","havior","havocs","hawaii","hawiya","hawing","hawked","hawkey","hawker","hawkie","hawsed","hawser","hawses","hazans","hazara","hazard","hazels","hazers","hazier","hazily","hazing","hazzan","headed","header","headle","headly","healed","healer","health","heaped","heaper","hearer","hearse","hearst","hearth","hearty","hearts","heated","heaten","heater","heathy","heaths","heaume","heaved","heaven","heaver","heaves","hebete","hebrew","hecate","heckle","hectar","hectic","hector","hecuba","heddle","hedebo","hedera","heders","hedged","hedger","hedges","heeded","heeder","heehaw","heeled","heeler","heezed","heezes","heezie","hefted","hefter","hegari","hegira","heyday","heydey","heifer","height","heikum","heiled","heimin","heinie","heynne","heypen","heyrat","heired","heirlo","heists","heized","hejazi","hejira","helbeh","helder","helena","helenn","heliac","helide","heling","helion","helios","helium","helled","hellen","heller","hellim","hellos","helluo","helmed","helmet","heloma","helots","helped","helper","helply","helved","helver","helves","helvin","helzel","hemase","hemera","hemina","hemine","hemins","hemmed","hemmel","hemmer","hemoid","hempen","hempie","hemule","henbit","hendly","henism","hennas","hennes","hennin","henpen","henrys","hented","henter","hepcat","heppen","hepper","heptad","heptal","heptyl","herald","heraud","heraus","herbal","herbar","herber","herbid","herded","herder","herdic","hereat","hereby","herein","hereof","hereon","herero","heresy","hereto","herile","heriot","hermae","hermai","herman","hermes","hermit","hernia","heroes","heroic","heroid","heroin","herola","herons","herpes","herpet","hersed","hersir","heruli","hesped","hespel","hesper","hester","hestia","hetero","hethen","hetman","hetter","hettie","heuchs","heughs","heuvel","hewers","hewgag","hewing","hexace","hexact","hexadd","hexade","hexads","hexane","hexdra","hexene","hexers","hexyls","hexine","hexyne","hexing","hexode","hexoic","hexone","hexose","hexsub","hezron","hyades","hyaena","hyahya","hyalin","hyalts","hiatal","hiatus","hibbin","hibito","hyblan","hybrid","hybris","hicaco","hiccup","hickey","hicket","hidage","hydage","hidden","hiders","hiding","hydnum","hydrae","hydras","hydria","hydric","hydrid","hydroa","hydrol","hydros","hydrus","hieder","hieing","hiemal","hyemal","hyenas","hyenia","hyenic","hieron","hieros","hyetal","higdon","hygeen","hygeia","higgle","higher","highly","highth","hights","hygric","hygrin","hijack","hikers","hiking","hikuli","hilary","hylean","hylids","hylism","hylist","hilled","hillel","hiller","hillet","hilloa","hillos","hyllus","hyloid","hilsah","hilted","himati","himene","hymens","hymnal","hymned","hymner","hymnic","himple","hinder","hynder","hindoo","hindus","hinged","hinger","hinges","hingle","hinney","hinner","hinoid","hinoki","hinted","hinter","hiodon","hyoids","hypate","hyphae","hyphal","hyphen","hyping","hypnic","hypnos","hypnum","hypoed","hypoid","hypoth","hipped","hypped","hippen","hipper","hippia","hippic","hippie","hipple","hippos","hippus","hyrate","hyrcan","hircic","hircin","hircus","hirers","hiring","hirmos","hirple","hirsel","hirsle","hirtch","hirudo","hysons","hispid","hissed","hissel","hisser","hisses","hyssop","histed","hister","histie","histon","hitchy","hither","hitler","hitter","hiving","hivite","hyzone","hizzie","hoagie","hoards","hoared","hoarse","hoaxed","hoaxee","hoaxer","hoaxes","hoazin","hobbed","hobber","hobbet","hobbil","hobbit","hobble","hobbly","hobits","hoblob","hobnob","hoboed","hoboes","hocked","hockey","hocker","hocket","hockle","hodads","hodden","hodder","hoddin","hoddle","hodful","hodman","hodmen","hodure","hoeful","hoeing","hogans","hogged","hoggee","hogger","hogget","hoggie","hoggin","hognut","hogpen","hogsty","hogtie","hogton","hoicks","hoiden","hoyden","hoyles","hoyman","hoised","hoises","hoists","hokier","hoking","hokums","holard","holcad","holcus","holden","holder","holdup","holier","holies","holily","holing","holism","holist","holked","hollas","holler","hollin","holloa","holloo","hollos","hollow","holmes","holmia","holmic","holmos","holoku","holour","holpen","holsom","homage","homard","hombre","homely","homers","homier","homily","homing","hominy","homish","homrai","honans","honcho","hondas","honeys","honers","honest","honied","honily","honing","honked","","honker","honkie","honora","honors","honour","hooded","hoodie","hoodle","hoodoo","hooeys","hoofed","hoofer","hookah","hookas","hooked","hookey","hooker","hookum","hookup","hoolee","hooley","hoolie","hoondi","hooped","hooper","hoopla","hoople","hoopoe","hoopoo","hoorah","hooray","hooroo","hootay","hootch","hooted","hooter","hooved","hoovey","hooven","hoover","hooves","hopers","hoping","hopoff","hopped","hopper","hoppet","hopple","horace","horahs","horary","horded","hordes","horkey","hormic","hormos","horned","horner","hornet","hornie","horrah","horray","horral","horrid","horror","horsed","horsey","horser","horses","horste","horsts","hosels","hosier","hosing","hostal","hosted","hostel","hoster","hostie","hostle","hostly","hostry","hotbed","hotbox","hotcha","hotdog","hotels","hotkey","hotpot","hotrod","hotted","hotter","hottie","hottle","houdah","houdan","houlet","hounce","houndy","hounds","houris","hourly","housal","housed","housel","houser","houses","housty","houtou","hovels","hovers","howard","howdah","howder","howdie","howffs","howish","howitz","howked","howker","howkit","howled","howler","howlet","hpital","hrdwre","huashi","hubbed","hubber","hubble","hubbly","hubbob","hubbub","hubcap","hubert","hubris","hubshi","huchen","huckle","huddle","huddup","hudson","hueful","huemul","huerta","huffed","huffer","huffle","hugely","hugest","hugged","hugger","huggin","huggle","hughes","hughoc","huipil","huitre","hulchy","huldah","huldee","hulked","hulled","huller","hulloa","hulloo","hullos","hulver","humane","humans","humate","humble","humbly","humbug","humean","humect","humeri","humhum","humify","humism","humist","humite","humlie","hummed","hummel","hummer","hummie","hummum","hummus","humors","humour","humous","humped","humphs","humpty","hunchy","hunder","hungar","hunger","hungry","hunyak","hunker","hunner","hunnic","hunted","hunter","huppah","huppot","hurden","hurdis","hurdle","hureek","hurkle","hurled","hurley","hurler","hurrah","hurray","hurrer","hurroo","hurted","hurter","hurtle","hushed","hushel","husher","hushes","husked","husker","huspel","huspil","hussar","hustle","hutlet","hutted","hutung","hutzpa","huxter","huzoor","huzzah","huzzas","yabber","yabbie","yabble","yacare","yacata","yachan","yachty","yachts","yacked","yadava","yaffed","yaffil","yaffle","yagers","yagger","yagnob","yaguas","yahgan","yahoos","yahuna","yahveh","yahweh","yairds","yajein","yakala","yakalo","yakima","yakked","yakker","yakmak","yakman","yakona","yaksha","yakshi","yallow","yamato","iambic","iambus","yamens","yammer","yampee","yamuns","yander","yanked","","yanker","yannam","yanqui","yantra","yaoort","yaourt","yapman","yapock","yapoks","yapons","yapped","yapper","yaqona","yarded","yarder","yarely","yarest","yareta","yarkee","yarned","yarnen","yarner","yarpha","yarran","yarrow","yarura","yaruro","yasmak","iatric","yatter","yauped","yauper","yaupon","yautia","yawing","yawled","yawler","yawned","yawney","yawner","yawped","yawper","yaxche","yazata","ibanag","iberes","iberia","iberic","iberis","ibexes","ibices","ibycus","ibidem","ibilao","ibises","yblent","icaria","icarus","icebox","icecap","iceman","icemen","icerya","ichebu","ichibu","ichors","icicle","iciest","icings","ickers","ickier","yclept","icones","iconic","idaean","idaein","idalia","ideaed","idealy","ideals","ideata","ideate","ideist","idence","idesia","idiasm","idigbo","idyler","idylls","idiocy","idioms","idiots","iditol","idleby","idlers","idlest","idlety","idling","idlish","idoism","idoist","idolet","idolon","idolum","idotea","yeaned","yeared","yearly","yearns","yearth","yeasty","yeasts","yecchy","yecchs","yeelin","yeeuch","yeeuck","yelled","yeller","yellow","yelmer","yelped","yelper","yelver","yemeni","yeming","yemsel","yender","yengee","yenite","yenned","yentas","yentes","yeoman","yeomen","yepely","yerava","yerbal","yerbas","yercum","yerked","yessed","yesses","yester","yetapa","yether","yetlin","yetter","yetzer","yeuked","yezidi","yfacks","ifecks","yferre","iffier","ifreal","ifugao","igbira","ygerne","igitur","igloos","igname","ignaro","ignify","ignite","ignore","ignote","igorot","iguana","ihrams","yieldy","yields","yildun","yipped","yippee","yippie","yirred","yirths","yizkor","ikhwan","ilexes","iliads","iliahi","ilicic","ilicin","ilysia","ilkane","illano","illeck","illect","illess","illest","illing","illipe","illish","illite","illium","illude","illume","illupi","illure","illust","imaged","imagen","imager","images","imamah","imamic","imaret","imaums","imbalm","imband","imbark","imbarn","imbase","imbeds","imbibe","imbody","imbosk","imbred","imbrex","imbrue","imbued","imbues","imbuia","imbute","imdtly","imelle","imides","imidic","imines","immane","immask","immerd","immesh","immies","immind","immiss","immixt","immote","immund","immune","immure","immute","imogen","impack","impact","impair","impala","impale","impall","impalm","impane","impark","imparl","impart","impave","impawn","impede","impels","impend","impent","imperf","impery","impers","impest","imphee","impies","imping","impish","implex","impofo","impone","impoor","import","impose","impost","impreg","impugn","impune","impure","impute","inable","ynambu","inamia","inaner","inanes","inanga","inarch","inarms","inaxon","inbent","inbits","inblow","inbody","inbond","inborn","inbred","inbush","incage","incaic","incamp","incant","incarn","incase","incask","incast","incave","incavo","incede","incend","incept","incest","inched","incher","inches","incide","incise","incite","inclip","incogs","income","incony","incord","incorp","incorr","incoup","inctri","incube","incubi","inculk","inculp","incult","incurs","incuse","incuss","incute","indaba","indane","indart","indear","indebt","indecl","indeed","indene","indent","indian","indice","indico","indict","indies","indign","indigo","indish","indite","indium","indoin","indole","indols","indone","indoor","indows","indris","induce","induct","indued","indues","indult","induna","indure","inermi","inerts","ineunt","inface","infair","infall","infame","infamy","infand","infang","infans","infant","infare","infect","infeed","infeft","infelt","infeof","infern","infers","infest","infile","infill","infilm","infima","infirm","inflex","inflow","influe","influx","infold","inform","infree","infula","infume","infund","infuse","ingang","ingate","ingene","ingeny","ingent","ingenu","ingest","ingine","ingirt","ingles","inglut","ingnue","ingots","ingram","ingrow","inguen","ingulf","ingush","inhale","inhame","inhaul","inhell","inhere","inhive","inhold","inhoop","inhume","inyala","inyoke","iniome","iniomi","inique","inisle","inital","initio","initis","inject","injoin","injure","injury","injust","inkers","inkier","inkies","inking","inkish","inkles","inkman","inknit","inknot","inkosi","inkpot","inlace","inlaid","inlaik","inlays","inlake","inland","inlard","inlaut","inleak","inless","inlets","inlier","inlike","inline","inlook","inmate","inmeat","inmesh","inmore","inmost","innage","innate","inners","inness","innest","inning","innuit","inodes","inogen","inosic","inosin","inower","inport","inpour","inpush","inputs","inrail","inring","inroad","inroll","inrush","insack","insame","insane","inseam","insect","inseer","insert","insets","inship","inshoe","inside","insist","insite","insole","insorb","insoul","inspan","instal","instar","instep","instil","instop","insula","insult","insume","insunk","insure","intact","intail","intake","intend","intens","intent","interj","intern","inters","intext","intice","intill","intima","intime","intine","intire","intisy","intoed","intomb","intone","intort","intown","intrap","introd","intros","intrus","intube","intuit","intune","inturn","intuse","inulin","inunct","inured","inures","inurns","invade","invars","invect","inveil","invein","invent","invert","invest","invict","invile","invite","invoke","inwale","inwall","inward","inweed","inwick","inwind","inwith","inwood","inwork","inworn","inwove","inwrap","inwrit","yobbos","yochel","yocked","yockel","iodate","yodels","iodide","iodids","iodine","iodins","iodism","iodite","iodize","yodled","yodler","yodles","iodols","iodoso","iodous","iodoxy","yogees","yogini","yogins","yogism","yogist","yogurt","yoicks","yojana","yokage","yokels","yoking","yokuts","yolden","yoldia","iolite","yolked","yonder","ionian","ionics","ionise","ionism","ionist","ionium","ionize","yonker","yonner","yonnie","ionone","yorker","yorlin","yoruba","iotize","youden","youngs","youpon","youthy","youths","iowans","yowden","yowies","yowing","yowled","yowley","yowler","ipecac","ipidae","ipomea","irades","iranic","iraqis","irater","irchin","ireful","irenic","iridal","irides","iridic","iridin","irised","irises","irishy","irisin","iritic","iritis","irking","ironed","ironer","irones","ironic","ironly","irrate","irreal","irride","irrite","irrupt","irving","isabel","isagon","isaiah","isaian","isamin","isaria","isatic","isatid","isatin","isatis","ischar","ischia","iscose","iseult","ishime","isicle","isidae","isidia","isinai","island","isleta","islets","isling","ismdom","isobar","isodef","isogam","isogen","isogon","isohel","isolde","isolex","isolog","isomer","isonym","isopag","isopod","isopor","isotac","israel","isseis","issite","issued","issuer","issues","istana","isthmi","istles","istoke","isuret","isurus","iswara","italic","italon","itauba","itaves","itched","itches","itemed","iterum","ithaca","ithand","ithiel","itylus","itoism","itoist","itonia","itself","ittria","yttria","yttric","itzebu","yuapin","yuccas","yucked","yuckel","yucker","yuckle","yuechi","yugada","yukata","yukian","yukked","yukkel","yulans","yuncan","yungan","yunker","yupons","yuppie","iurant","yuruna","yuzlik","yuzluk","yvonne","iwaiwa","iworth","iwound","iwwood","iwwort","ixiama","ixodes","ixodic","ixodid","ixtles","izafat","izchak","izzard","jaalin","jabbed","jabber","jabble","jabers","jabiru","jabots","jacals","jacami","jacana","jacare","jacate","jacens","jacent","jackal","jacked","jackey","jacker","jacket","jackie","jackye","jacoby","jactus","jadded","jadder","jadery","jading","jadish","jaeger","jagath","jageer","jagers","jaggar","jagged","jagger","jaghir","jagong","jagras","jaguar","jaguey","jahveh","jayant","jaycee","jayesh","jaygee","jailed","jailer","jailor","jaypie","jayvee","jajman","jalapa","jalaps","jalkar","jalopy","jalops","jambed","jambee","jamber","jambes","jamboy","jambon","jambos","jambul","jammed","jammer","jamnia","jamnut","jamoke","jampan","janapa","jangar","jangle","jangly","janice","janker","janner","jantee","japans","japery","japers","japing","japish","jarabe","jarana","jarble","jarbot","jardin","jardon","jareed","jarfly","jarful","jargle","jargon","jarina","jarnut","jarool","jarrah","jarred","jarret","jarvey","jarvie","jarvis","jaseys","jasies","jasmin","jasper","jaspis","jassid","jataco","jataka","jatoba","jaudie","jauked","jaunce","jauner","jaunty","jaunts","jauped","javali","jawans","jawing","jazeys","jazies","jazzed","jazzer","jazzes","jeames","jeanie","jeanne","jebels","jebusi","jeeing","jeered","jeerer","jeetee","jeffie","jehads","jejuna","jejune","jekyll","jelick","jellab","jelled","jellib","jelske","jemble","jemima","jenine","jenkin","jennet","jennie","jenoar","jenson","jerald","jerbil","jerboa","jereed","jeremy","jerids","jerked","jerker","jerkin","jernie","jerome","jerque","jerrid","jerrie","jersey","jervia","jervin","jesper","jessed","jesses","jessie","jessur","jested","jestee","jester","jesuit","jethro","jetons","jetsam","jetsom","jetted","jetter","jetton","jettru","jewdom","jewely","jewels","jewess","jewing","jewish","jewism","jezail","jeziah","jharal","jhuria","jibbah","jibbed","jibbeh","jibber","jibers","jibing","jibman","jibmen","jiboya","jicama","jicara","jiffle","jigged","","jigget","jiggit","jiggle","jiggly","jigman","jigmen","jigote","jigsaw","jihads","jillet","jilted","jiltee","jilter","jiminy","jimjam","jimmer","jymold","jimper","jimply","jimson","jincan","jinete","jingal","jingko","jingle","jingly","jinked","jinker","jinket","jinkle","jinnee","jinsha","jinxed","jinxes","jipper","jirble","jirgah","jissom","jitney","jitter","jivaro","jiving","jizyah","jizzen","jnanas","joanna","joanne","jobade","jobbed","jobber","jobbet","jobble","jobman","jobmen","jobson","jocant","jochen","jockey","jocker","jockos","jocose","jocote","jocuma","jocund","jocuno","jodelr","joeyes","jogged","jogger","joggle","joggly","johann","johnin","johnny","joyant","joyful","joyhop","joying","joylet","joined","joiner","jointy","joints","joyous","joypop","joists","jojoba","jokers","jokier","joking","jokish","jokist","jollop","jolted","jolter","jonahs","jondla","jonque","jonval","jorams","jordan","jorden","jorist","joropo","jorram","jorums","joseph","joshed","josher","joshes","joshua","josiah","joskin","josser","josses","jostle","jotisi","jotted","jotter","jotunn","jouals","jouked","joules","jounce","jouncy","journo","jousts","joutes","jovial","jovian","jovite","jowari","jowars","jowery","jowing","jowled","jowler","jowlop","jowser","jowter","jubarb","jubate","jubbah","jubhah","jubile","jubili","jucuna","judaic","judder","judean","judged","judger","judges","judica","judice","judith","judogi","judoka","jueces","juffer","jugale","jugate","jugful","jugged","jugger","juggle","juglar","jugula","jugums","juiced","juicer","juices","jujube","juking","juleps","julian","julien","julies","juliet","julius","juloid","julole","jumada","jumana","jumart","jumbal","jumbie","jumble","jumbly","jumbos","jument","jumfru","jumped","jumper","juncat","juncos","juncus","jundie","juneau","jungle","jungli","jungly","junior","junius","junked","junker","junket","junkie","juntas","juntos","jupard","jupati","jupons","jurane","jurant","jurara","jurare","jurata","jurats","jurels","juries","juring","jurisp","jurist","jurors","juslik","jussal","jussel","justed","justen","juster","justin","justle","justly","justus","jutish","jutted","juvent","juvite","juwise","jwahar","kababs","kabaya","kabaka","kabala","kabard","kabars","kaberu","kabiet","kabiki","kabyle","kabobs","kabuki","kabuli","kachin","kadaga","kadaya","kadder","kadein","kadine","kadish","","kafila","kafiri","kafirs","kaftan","kagura","kahala","kahili","kahuna","kaiaks","kayaks","kaibab","kayles","kaiman","kainah","kainga","kainyn","kainit","kainsi","kayoed","kayoes","kairin","kairos","kaiser","kaithi","kayvan","kakapo","kakkak","kalach","kalams","kalang","kalema","kalend","kalian","kalifs","kaliph","kalium","kallah","kalmia","kalmuk","kalong","kalpak","kalpas","kalpis","kalwar","kamahi","kamala","kamass","kambal","kamboh","kambou","kameel","kamian","kamias","kamiya","kamika","kamiks","kammeu","kamsin","kanaff","kanagi","","kanara","kanari","kandol","kangla","kangli","kangri","kanyaw","kanjis","kankie","kannen","kanone","kanoon","kanred","kansan","kansas","kantar","kanten","kantry","kanuka","kanuri","kanwar","kaolin","kapoks","kapote","kappas","kappie","kapuka","kaputt","karaya","karaka","karamu","karate","karats","kareao","kareau","karela","karewa","karyon","karite","kariti","karluk","karmas","karmic","karoos","kaross","karpas","karree","karren","karroo","karsha","karsts","kartel","kartos","karuna","karval","karvar","karwar","kasbah","kashan","kashas","kasher","kashga","kashim","kasida","kassak","katana","kathak","kathal","kation","katipo","katmon","katsup","katuka","kauris","kavaic","kavass","kavika","kawaka","kawika","kazoos","kebabs","kebars","kebbie","kebyar","keblah","kebobs","kechel","kecked","keckle","kecksy","keddah","kedged","kedger","kedges","keeked","keeker","keeled","keeler","keelie","keened","keener","keenly","keeper","keerie","keeves","keffel","kefirs","keftiu","kegful","kegler","kehaya","keyage","keyaki","keying","keylet","keyman","keymen","keypad","keyset","keyway","keywrd","kekchi","kekuna","kelder","kelebe","kelima","kelleg","kellet","kellia","kellys","keloid","kelped","kelper","kelpie","kelson","kelter","keltic","keltie","keltoi","kelvin","kempas","kemple","kempts","kenafs","kendal","kendir","kendyr","kendna","kendos","kenelm","kenema","kenyan","kenyte","kenmpy","kenned","kennel","kenner","kennet","kentia","kentle","kenton","kephir","kepped","keppen","keraci","kerana","kerbed","kerewa","kerfed","kerite","kerman","kermes","kermis","kerned","kernel","kerner","kernes","kernoi","kernos","kerria","kerrie","kerril","kersey","keslep","ketchy","ketene","kethib","ketine","ketmie","ketole","ketone","ketose","kettle","ketuba","ketupa","ketway","keuper","kevels","kevils","kewpie","khadis","khayal","khaiki","khajur","khakis","khalal","khalat","khalif","khalsa","khamal","khamti","khanda","khanga","khanum","kharaj","kharia","kharif","kharua","kharwa","khatib","khatin","khatri","khatti","khazar","khazen","khedah","khedas","khella","khilat","khirka","khitan","khivan","khodja","khojah","khotan","khowar","khulda","khutba","kyacks","kialee","kiangs","kyanol","kiaugh","kyaung","kibbeh","kibber","kibble","kybele","kibitz","kiblah","kiblas","kibosh","kibsey","kichel","kicked","kickee","kicker","kickup","kidang","kidded","kidder","kiddie","kiddle","kiddos","kidlet","kidnap","kidney","kidvid","kiekie","kieran","kikori","kikuel","kikuyu","kildee","kileys","kilerg","kilhig","kylies","kilims","kylite","killas","killcu","killed","killer","killig","killow","kilned","kilohm","kilted","kilter","kiltie","kiluba","kiluck","kimchi","kimmer","kimnel","kymnel","kimono","kymric","kimura","kinase","kinbot","kincob","kindal","kinder","kindle","kindly","kinema","kinged","kingly","kinhin","kinins","kinked","kinker","kinkle","kinkly","kinnor","kinone","kinoos","kinsen","kintar","kintra","kintry","kinura","kiosks","kioway","kiowan","kipage","kipfel","kipped","kippen","kipper","kippin","kippur","kipsey","kipuka","kyrial","kyries","kyrine","kyrios","kirker","kirman","kirmew","kirned","kirpan","kirsch","kirsen","kirsty","kirtle","kirver","kisang","kishen","kishka","kishke","kishon","kislev","kismat","kismet","kissar","kissed","kissel","kisser","kisses","kiswah","kitabi","kitbag","kitcat","kiters","kithed","kythed","kithes","kythes","kiting","kitish","kitman","kytoon","kitsch","kittar","kitted","kittel","kitten","kitter","kittie","kittle","kittly","kittul","kyurin","kiutle","kiwach","klatch","klaxon","klepht","klesha","klippe","klongs","klooch","kloofs","klosse","klowet","kludge","klutzy","kluxer","knacky","knacks","knaggy","knappe","knappy","knarle","knarry","knatch","knatte","knaves","knawel","kneads","kneels","knells","knetch","knevel","kniazi","knyazi","knifed","knifer","knifes","knight","knysna","knitch","knived","knivey","knives","knobby","knocks","knolly","knolls","knoppy","knosps","knotty","knouts","knower","knowns","knubby","knucks","knuffe","knurly","knurls","knurry","knutty","koalas","kobang","kobird","kobold","kobong","kochab","kochia","kodagu","kodiak","kodkod","kodogu","kohemp","kohens","kohlan","koiari","koibal","koilon","koines","koinon","kojang","kojiki","kojima","kojiri","kokako","kokama","kokila","koklas","kokoon","kokopu","kolach","kolami","kolhoz","kolkka","kolkoz","koller","kolsun","kolush","komati","kommos","kompow","komtok","konfyt","konyak","koniga","konini","konjak","konrad","koodoo","kookie","kookri","koolah","koolau","koonti","koorka","koosin","kopeck","kopeks","kopjes","koppas","koppen","koppie","korait","korana","korari","kordax","korean","koreci","korero","korhmn","koryak","korona","korova","korrel","koruna","koruny","korzec","kosher","kosimo","kosong","kotyle","kotoko","kotows","kotuku","kotwal","koulan","koumis","koumys","kouroi","kouros","kousin","kousso","kowhai","kowtow","kozuka","kpuesi","kraals","krafts","kraits","kraken","krantz","krasis","krater","krauts","kreese","krelos","krepis","krigia","krills","krises","kristi","kriton","kronen","kroner","kronor","kronos","kronur","krooni","kroons","krubis","krubut","kruman","kthibh","kubera","kubong","kuchen","kudize","kudrun","kudzus","kuhnia","kukang","kukeri","kukupa","kulack","kulaki","kulaks","kulang","kuldip","kulmet","kultur","kumara","kumari","kumbuk","kumhar","kumiss","kumkum","kummel","kumrah","kundry","kunkur","kuphar","kupper","kurgan","kursch","kurtas","kuruba","kurukh","kuruma","kurung","kurvey","kuskos","kuskus","kussos","kutcha","kuttab","kuttar","kuvasz","kuvera","kuwait","kvases","kvetch","kvutza","kwacha","kwamme","kwanza","kwarta","laager","labara","labber","labefy","labels","labial","labile","labite","labium","lablab","labors","labour","labral","labras","labret","labrid","labrys","labrum","labrus","laccic","laccin","laccol","lacery","lacers","lacert","laches","lachsa","lacier","lacily","lacing","lacked","lackey","lacker","lacmus","lacoca","lacrym","lactam","lactic","lactid","lactyl","lactim","lactol","lacuna","lacune","ladang","ladder","laddie","ladens","laders","ladies","ladify","ladyfy","ladyly","lading","ladino","ladkin","ladled","ladler","ladles","ladner","ladron","laelia","laetic","lafite","lagans","lagena","lagend","lagers","laggar","lagged","laggen","lagger","laggin","lagoon","laguna","lagune","lahnda","lahore","lahuli","layboy","laical","laichs","laidly","layery","layers","laighs","laying","layloc","layman","laymen","lainer","layner","layoff","laiose","layout","lairds","laired","laiser","laisse","laithe","lakers","lakier","laking","lakish","lakism","lakist","lakmus","lakota","lalang","lallan","lalled","lamaic","lamany","lamano","lambda","lambed","lamber","lambes","lambie","lambly","lamboy","lamdan","lamden","lamedh","lameds","lamely","lament","lamest","lamiae","lamias","lamiid","lamina","laming","lamish","lamium","lammas","lammed","lammer","lammie","lamnid","lampad","lampas","lamped","lamper","lampic","lanais","lanate","lanced","lancer","lances","lancet","lancha","landau","landed","lander","lanely","lanete","langca","langel","langka","langle","langue","langur","lanier","lanius","lanker","lanket","lankly","lanner","lanose","lansat","lanseh","lanson","lantum","lanugo","lanzon","laodah","lapdog","lapels","lapful","lapies","lapins","lapith","lapped","lapper","lappet","lappic","lapsed","lapser","lapses","lapsus","laptop","laputa","laquei","larcin","larded","larder","lardon","lardry","largen","larger","larges","larget","largos","lariat","larick","larigo","lariid","larine","larynx","larked","larker","larnax","larnyx","laroid","larree","larrup","larums","larvae","larval","larvas","lascar","lasers","lashed","lasher","lashes","lasing","lasius","lasket","lasque","lasses","lasset","lassie","lassos","lasted","laster","lastex","lastly","lastre","lateen","lately","latens","latent","latera","latest","latham","lathed","lathee","lathen","lather","lathes","lathie","latian","latigo","latino","latins","lation","latish","latite","lative","latomy","latona","latoun","latria","latris","latron","latten","latter","lattin","latuka","latvia","lauans","lauded","lauder","laudes","laughy","laughs","laulau","launce","launch","laurae","lauras","laurel","lauric","laurie","lauryl","laurin","laurus","lauter","lavabo","lavage","lavant","lavash","laveer","lavehr","lavers","laving","lavish","lawful","lawyer","lawine","lawing","lawish","lawman","lawmen","lawned","lawner","lawrie","lawson","lawter","lawton","laxate","laxest","laxism","laxist","laxity","lazary","lazars","lazied","lazier","lazies","lazily","lazing","lazule","lazuli","lbinit","ldinfo","leachy","leaded","leaden","leader","leadin","leafed","leafen","leafer","leafit","league","leaked","leaker","leally","lealty","leamer","leaned","leaner","leanly","leaped","leaper","learns","learnt","leased","leaser","leases","leasow","leasts","leaved","leaven","leaver","leaves","lebban","lebbek","lebens","lecama","lechea","lecher","leches","lechwe","lecyth","lecker","lecthi","lector","ledged","ledger","ledges","ledget","leeful","leegte","leepit","leered","leeser","leetle","leeway","leewan","lefsel","lefsen","lefter","legacy","legals","legate","legati","legato","legbar","legend","legers","legged","legger","leggin","legion","legist","legits","leglen","leglet","legman","legmen","legong","leguan","legume","lehmer","lehuas","leyden","leiger","leipoa","lekach","lekane","lekker","lelwel","lemans","lemmas","lemmon","lemmus","lemnad","lemony","lemons","lemosi","lemuel","lemurs","lenaea","lenape","lenard","lencan","lended","lendee","lender","lenger","length","lenify","lenity","lennow","lenora","lensed","lenses","lenten","lentic","lentil","lentor","lentos","lenvoi","lenvoy","leones","leonid","leonis","lepage","lepcha","lepero","lepers","lepric","leprid","leptid","lepton","leptus","lerret","lesath","lesbia","lesche","lesion","leskea","leslie","lessee","lessen","lesser","lesses","lesson","lessor","lester","letchy","lethal","lethes","letoff","letted","letten","letter","lettic","letups","leucic","leucyl","leucin","leucon","leudes","leukon","levade","levana","levant","leveed","levees","levels","levers","levied","levier","levies","levyne","levins","levite","levity","lewder","lewdly","lewing","lewist","lexeme","lexica","liable","liaise","liamba","lianas","lyance","lianes","liangs","liards","lyases","liason","libant","libard","libate","libbed","libber","libbet","libbra","libels","libera","libers","libget","libyan","libido","libken","libkin","librae","libral","libras","librid","libris","lyceal","lycees","lyceum","licham","lichee","lychee","lichen","lichis","lichts","lycian","lycine","lycium","licked","licker","licorn","lycosa","licour","lyctid","lictor","lyctus","licuri","licury","lidars","lidded","lidder","lydian","lidias","lydite","liebig","lieder","liefer","liefly","lieger","lieges","lienal","lienee","lienic","lienor","liepot","lierne","lierre","liever","lifers","lyfkie","liflod","lifted","lifter","ligand","ligans","ligase","ligate","lygeum","liggat","ligger","lighty","lights","ligyda","lignes","lignin","lignum","ligula","ligule","ligure","lyings","liyuan","likely","likens","likers","likest","liking","likker","liknon","likuta","lilacs","lilial","lilian","lilied","lilies","lilyfy","lilith","lilium","lilted","limace","limail","limans","limbal","limbas","limbat","limbec","limbed","limber","limbic","limbie","limbos","limbus","limean","limeys","limens","limier","limina","limine","liming","limity","limits","limmer","limnal","limned","limner","limnic","limoid","limosa","limose","limosi","limous","limped","limper","limpet","lymphy","lymphs","limpid","limpin","limply","limpsy","limuli","linacs","linaga","linage","lyncid","linden","linder","lyndon","lineal","linear","lineas","linene","lineny","linens","liners","lineup","lingam","lingas","lingel","linger","linget","lingle","lingoe","lingot","lingua","linhay","linier","liniya","lining","linins","linked","linker","linkup","linley","linnet","linous","linpin","linsey","lintel","linten","linter","lintie","lintol","linums","lynxes","lionel","lionet","lionly","lionne","lipase","lipide","lipids","lipins","liplet","lipoid","lipoma","lipped","lippen","lipper","lippia","lippie","liquer","liquet","liquid","liquor","lyraid","lirate","lyrate","lyrics","lyrism","lyrist","liroth","lysate","lisbon","lisere","lysine","lysing","lysins","lisles","lisped","lisper","lyssas","lisses","lyssic","lissom","listed","listel","listen","lister","litany","litatu","litchi","liters","lither","lithia","lithic","lithog","lithol","lithos","litmus","litres","litsea","lyttae","lyttas","litten","litter","little","lituus","litvak","liukiu","livedo","lively","livens","livery","livers","livest","liveth","livian","livier","livyer","living","livish","livres","lixive","lyxose","lizard","lizary","lizzie","llamas","llanos","llautu","loaded","loaden","loader","loadum","loafed","loafer","loamed","loammi","loaned","loaner","loange","loanin","loathe","loathy","loaves","lobale","lobata","lobate","lobbed","lobber","lobfig","lobing","lobola","lobolo","lobosa","lobose","lobule","lobuli","locale","locals","locate","lochan","lochia","lochus","locked","locker","locket","lockup","locoed","locoes","locule","loculi","locums","locust","lodens","lodged","lodger","lodges","loeing","lofted","lofter","logans","logeia","logeum","loggat","logged","logger","logget","loggia","loggie","loggin","logics","logier","logily","logins","logion","logium","logjam","loglet","loglog","logman","logoes","logoff","logout","logres","logria","logris","logway","lohana","lohoch","lohock","loimic","loined","loiter","lokiec","lokman","loligo","lolium","lolled","loller","lollop","lollup","lomata","lomboy","loment","lomita","london","lonely","loners","longan","longed","longee","longer","longes","longyi","longly","longue","longus","lonhyn","lontar","looeys","loofah","loofas","loofie","looies","looing","looked","lookee","looker","lookum","lookup","loomed","loomer","looney","looped","looper","loosed","loosen","looser","looses","looted","looten","looter","lootie","loover","lopers","lophin","loping","lopped","lopper","loppet","loquat","lorans","lorate","lorcha","lordan","lorded","lordly","loreal","lorica","lorien","lories","loring","loriot","lorius","losang","losels","losers","losing","losser","losses","lotahs","lotase","lothly","lotion","lotium","lotong","lotted","lotter","lottie","lottos","lotuko","louche","louden","louder","loudly","loughs","louies","louiqa","louisa","louise","loukas","lounge","loungy","louped","loupen","loupes","lourdy","loured","lourie","loused","louses","louted","louter","loutre","louvar","louver","louvre","lovage","lovely","lovery","lovers","lovier","loving","lowboy","lowdah","lowder","lowell","lowery","lowers","lowest","lowing","lowish","lowman","lowmen","lownly","lowrie","lowsed","lowser","lowsin","loxing","lubber","lubric","lucban","lucent","lucern","lucian","lucida","lucile","lucina","lucite","lucius","lucked","lucken","luckie","luckly","lucres","lucrum","lucule","lucuma","lucumo","ludden","ludian","ludlow","ludwig","luella","luetic","luffas","luffed","luffer","luggar","lugged","lugger","luggie","luging","lugnas","lujula","lukely","lulabs","lulavs","lullay","lulled","luller","luluai","lumbar","lumber","lumbus","lumens","lumina","lumine","lummox","lumped","lumpen","lumper","lumpet","lunacy","lunare","lunary","lunars","lunata","lunate","lunets","lungan","lunged","lungee","lunger","lunges","lungie","lungyi","lungis","lunier","lunies","lunyie","lunker","lunoid","lunted","lunula","lunule","lupeol","lupine","lupins","lupoid","lupoma","lupous","lurdan","lurers","luring","lurked","lurker","lushai","lushed","lushei","lusher","lushes","lushly","lusiad","lusian","lusory","lusted","luster","lustly","lustra","lustre","lutayo","lutany","luteal","luteic","lutein","luteum","luther","luting","lutist","lutose","lutrin","luvian","luvish","luwian","luxate","luxive","luxury","luzula","lvalue","mabble","mabela","mabyer","mabolo","mabuti","macabi","","macaco","macana","macaws","maccus","macers","machan","machar","machin","machos","macies","macing","mackle","macled","macles","maclib","macoma","macram","macrli","macron","macros","mactra","macuca","macula","macule","macupa","macupi","macusi","macuta","macute","madafu","madame","madams","madcap","madded","madden","madder","maddle","madefy","madhab","madhva","madiga","madman","madmen","madnep","madras","madres","madrid","madrih","madril","madroa","madtom","maduro","maeing","maenad","maffia","maffle","mafias","maftir","mafura","magahi","magani","magged","maggie","maggle","maggot","magian","magyar","magics","magilp","magism","magmas","magnes","magnet","magnon","magnum","magnus","magots","magpie","magrim","maguey","mahala","mahaly","mahant","mahbub","mahesh","mahewu","mahmal","mahoes","maholi","mahone","mahori","mahout","mahran","mahsir","mahsur","mahzor","mayaca","mayans","mayday","maidan","maiden","maidie","maidin","maidly","mayeye","mayest","mayfly","maigre","mayhap","maihem","mayhem","maying","mailed","mailer","mailes","mailie","maille","maills","maimed","maimer","maimon","maimul","mainan","mainly","mainor","maioid","maioli","mayors","maypop","mairie","maysin","maison","maists","mayten","maythe","maitre","mayvin","maizer","maizes","majlis","majoon","majora","majors","makale","makara","makari","makars","makers","makeup","making","makluk","makopa","makoua","makran","makuta","makutu","malade","malady","malaga","malaya","malays","malapi","malars","malate","malati","malawi","maleic","maleos","malfed","malgre","malice","malign","maliki","maline","malism","malist","malkin","mallam","malled","mallee","mallei","mallet","malloy","mallow","mallum","mallus","malmag","malmed","maloca","malope","malted","malter","maltha","malthe","maltol","malval","malvin","mamamu","mambas","mambos","mameys","mamers","mamies","mamluk","mammae","mammal","mammas","mammea","mammee","mammey","mammer","mammet","mammie","mammin","mammon","mammut","mamona","mamoty","mampus","mamzer","manace","manada","manage","manana","manati","manbot","manche","manchu","mancus","mandan","mandar","mandat","mandyi","mandil","mandir","mandom","mandra","mandua","manege","manent","maness","manful","","mangar","mangey","mangel","manger","manges","mangle","mangos","mangue","mangwe","maniac","manias","manics","manify","manila","manini","manioc","manism","manist","manito","manitu","manius","maniva","manjak","manjel","mankie","mankin","manlet","mannan","mannas","manned","manner","mannet","mannie","manobo","manoir","manors","manque","manred","manser","manses","mantal","mantas","mantel","manter","mantes","mantic","mantid","mantis","mantle","manton","mantra","mantua","mantzu","manual","manuao","manuel","manuka","manuma","manure","manway","manzas","manzil","maoism","maoist","maomao","maoris","mapach","maples","mapped","mappen","mapper","maquis","maraca","marage","marais","marang","marara","maraud","maravi","marble","marbly","marcan","marcel","marcia","marcid","marcor","marcos","marcot","mareca","marfik","margay","marged","marges","margie","margin","margot","marian","marica","maries","mariet","marina","marine","marion","mariou","marish","marist","marita","mariti","markab","markaz","markeb","marked","marker","market","markis","markka","markup","markus","marled","marler","marlet","marlin","marmar","marmit","marmor","marmot","marnix","maroon","marque","marram","marred","marree","marrer","marrys","marron","marrot","marrow","marses","marsha","marshy","marshs","marted","martel","marten","martes","martha","martin","martyn","martyr","marvel","marver","marvin","marwer","masais","mascle","mascon","mascot","masdeu","masers","mashak","mashal","masham","mashed","masher","mashes","mashie","mashru","masjid","masked","maskeg","masker","maskmv","maskoi","maslin","masons","masora","masque","massas","massed","massel","masser","masses","massif","massig","massoy","mastax","masted","master","mastic","mastix","mataco","matapi","matara","matchy","mateys","mately","maters","mather","mathes","matico","maties","matina","mating","matins","matipo","matkah","matlow","matman","matoke","matrah","matral","matres","matric","matris","matrix","matron","matsue","matted","matter","mattes","mattin","mature","matzah","matzas","matzoh","matzos","matzot","maudle","mauger","maught","maugis","maugre","maukin","mauled","mauley","mauler","maulvi","maumee","maumet","maunch","maundy","maunds","maunge","maungy","maunna","mauser","mauves","mavens","mavies","mavins","mawali","mawger","mawing","mawkin","mawsie","maxima","maxims","maxixe","mazama","mazame","mazard","mazdur","mazers","mazier","mazily","mazing","mazuca","mazuma","mbeuer","mbiras","mbunda","meable","meacon","meader","meadow","meager","meagre","mealed","mealer","mealie","meaned","meaner","meanie","meanly","measle","measly","meatal","meated","meathe","meatic","meatus","meazle","mecate","mecati","meccan","meccas","mechir","mecums","medaka","medals","meddle","mediad","mediae","medial","median","medias","medica","medici","medick","medico","medics","medimn","medina","medine","medino","medish","medism","medium","medius","medize","medlar","medley","medula","medusa","meebos","meehan","meeken","meeker","meekly","meered","meeten","meeter","meetly","megara","megass","megerg","megger","megilp","megmho","megohm","megrel","megrez","megrim","mehari","mehtar","meikle","meiler","meinie","meisje","meissa","mekong","melada","melano","melded","melder","melees","melena","melene","melian","melica","meline","melior","mellah","mellay","melled","meller","mellic","mellit","mellon","mellow","melody","meloid","melons","melosa","melote","melted","melter","melton","melvie","member","memnon","memoir","memory","menace","menads","menage","menald","mended","mendee","mendel","mender","menfra","mengwe","menhir","menial","menyie","meninx","menise","menkar","menkib","mennom","mennon","mensae","mensal","mensas","mensch","mensed","menses","mensis","mental","mentha","menthe","mentis","mentor","mentum","menuki","menura","menzie","meowed","mercal","mercat","mercer","merely","merels","merest","merged","merger","merges","mergus","meriah","merice","merida","merino","merism","merist","merits","merkin","merles","merlin","merlon","merman","mermen","mermis","merope","merops","merril","merrow","merton","meruit","merula","mesail","mescal","mesela","mesely","meshed","meshes","mesiad","mesial","mesian","mesion","mesked","meslen","mesode","mesole","mesons","mesore","mesost","mespil","mespot","messan","messed","messer","messes","messet","messin","messor","messrs","mestee","mester","metage","metall","metals","metaph","metate","metely","meteor","metepa","meters","mether","methid","methyl","method","methol","metier","meting","metoac","metope","metran","metred","metres","metria","metric","metron","metros","mettar","mettle","metump","meward","mewing","mewled","mewler","mexica","mexico","mexitl","mezail","mezair","mezcal","mezuza","mezzos","myacea","miacis","myalia","miamia","miaous","miaows","myaria","myases","myasis","miasma","miasms","miauer","miauls","micast","micate","mycele","micell","miched","michel","micher","mickey","mickle","micmac","mycoid","mycose","micron","micros","midair","mydaus","midday","midden","middes","middle","midges","midget","midgut","mydine","midleg","midpit","midrib","midsts","midtap","midway","myelic","myelin","myelon","miffed","migale","mygale","miggle","mighty","mights","miglio","mignon","miguel","mihrab","myitis","mikado","mikael","miking","mykiss","mikron","mikvah","mikveh","miladi","milady","milage","milchy","milden","milder","mildew","mildly","miledh","milers","milice","milieu","milium","miljee","milked","milken","milker","milled","miller","milles","millet","millie","milner","milord","milpas","milsey","milsie","milted","milter","milton","miltos","milvus","mimbar","mimble","mimeos","mimers","mimics","mimine","miming","mimish","mimmed","mimosa","mimpei","mimsey","mynahs","minbar","minced","mincer","minces","mincio","minded","mindel","minder","mindly","minery","miners","mingie","mingle","minhag","minhah","minyae","minyan","minyas","minify","minima","minimi","minims","mining","minion","minish","minium","minnie","minnow","minoan","minora","minors","minted","minter","minuet","minute","minxes","myodes","myogen","myomas","miombo","myopes","myopia","myopic","mioses","myoses","myosin","miosis","myosis","miotic","myotic","myowun","myoxus","mirach","mirage","miragy","mirana","mirate","myrcia","mirdha","mirfak","myriad","miriam","myrica","myrick","mirier","miriki","miring","mirish","mirker","mirkly","mirled","myrrhy","myrrhs","mirror","myrtal","mirths","myrtle","myrtol","myrtus","mirzas","misact","misadd","misaim","misate","miscal","miscue","miscut","misdid","miseat","myself","mysell","misere","misery","misers","misfit","misgye","mishap","mishit","mishmi","mysian","misima","miskal","misken","miskin","mislay","misled","mislen","mislie","mislin","mislit","mismet","mysoid","mysore","mysost","mispay","mispen","misput","misrun","missay","missal","missed","missel","misses","misset","missis","missit","missus","mistal","mystax","misted","mister","mystes","mistic","mystic","mistle","mistry","misura","misuse","misway","miswed","miters","mithan","mither","mythic","mythoi","mythol","mythos","mithra","mythus","mitier","miting","mitome","mitral","mitred","mitrer","mitres","mitten","mittle","miurus","mixers","myxine","mixing","mixite","myxoid","myxoma","mixtec","mixups","mizens","myzont","mizpah","mizrah","mizzen","mizzle","mizzly","mlange","mnemic","mnesic","mnevis","mnioid","moaned","moaria","moated","mobbed","mobber","mobbie","mobble","mobcap","mobile","mobula","mochas","mochel","mocked","mocker","mockup","mocoan","mocock","mocuck","modder","models","modems","modena","modern","modest","modica","modify","modili","modish","modist","modius","modred","modula","module","moduli","modulo","moeble","moeurs","moffle","mogdad","moggan","mogged","moggio","moghan","moghul","mogote","moguey","moguls","mohair","mohave","mohawk","mohels","mohism","mohock","mohurs","moider","moiest","moiety","moyite","moiled","moiley","moiler","moiles","moirai","moires","moison","moisty","mokihi","moksha","molala","molary","molars","molave","molded","molder","molest","molies","molify","moline","moling","mollah","molles","mollie","molman","molmen","moloch","moloid","molted","molten","molter","mombin","momble","moment","momish","momism","momist","mommas","mommer","mommet","momser","momzer","monach","monaco","monact","monads","monasa","monase","monaul","monday","mondes","mondos","moneys","moneme","monera","monest","moneth","monger","mongoe","mongol","mongos","mongst","monial","monias","monica","monied","monier","monies","monish","monism","monist","monkey","monkly","monody","monoid","monont","monose","monroe","monsia","montem","montes","months","montia","monton","montre","moocah","moocha","mooder","moodir","moodle","mooing","moolah","moolas","mooley","moolet","moolum","moolvi","moonal","mooned","mooner","moonet","moonie","moonja","moored","mooruk","moorup","moosey","mootch","mooted","mooter","mopane","mopani","mopeds","mopery","mopers","mopier","moping","mopish","moplah","mopoke","mopped","mopper","moppet","mopsey","morada","moraea","morays","morale","morals","morass","morate","morbid","morbus","morcha","mordva","moreen","morels","morena","morgay","morgan","morgen","morgue","morian","morice","morion","morish","morkin","morlop","mormal","mormyr","mormon","mornay","morned","morone","morong","morons","morose","morpho","morphs","morral","morris","morros","morrow","morsal","morsel","mortal","mortar","mortem","mortis","morton","morula","morule","morvin","mosaic","moschi","moscow","moseys","moshav","mosker","moslem","mosque","mossed","mosser","mosses","mossie","mostic","mostly","mostra","motels","motets","mothed","mother","motifs","motyka","motile","motion","motive","motivo","motley","motmot","motory","motors","mottes","mottle","mottos","mouche","moudie","mought","mouill","moujik","mouldy","moulds","moulin","moults","moulvi","moundy","mounds","mounty","mounts","mourne","mourns","moused","mousee","mousey","mouser","mouses","mousle","mousme","mousse","moutan","mouthe","mouthy","mouths","mouton","mouzah","movant","movent","movers","movies","moving","mowana","mowcht","mowers","mowhay","mowing","mowrah","moxies","mozart","mozing","mpondo","mtscmd","mucago","mucaro","mucate","muchel","muches","muchly","mucins","mucked","mucker","mucket","muckle","muckna","mucksy","mucluc","mucoid","mucors","mucosa","mucose","mucous","mucuna","mudcap","mudcat","mudded","mudden","mudder","muddle","mudfat","mudras","muermo","muesli","muette","muffed","muffer","muffet","muffin","muffle","muftis","mugful","muggar","mugged","mugger","mugget","muggur","muguet","mugwet","muilla","muysca","muyusa","mujiks","mukade","mukden","mukluk","muktar","muktuk","mulada","muladi","mulcts","mulder","muleys","muleta","mulier","muling","mulish","mulism","mulita","mullah","mullar","mullas","mulled","mulley","mullen","muller","mullet","mullid","mulmul","multum","mulvel","mumble","mummed","mummer","mummia","mumped","mumper","munchy","mundal","mundic","mundil","mundle","mungey","munger","mungos","munich","munify","munite","munity","munsee","munshi","munsif","muntin","muonic","murage","murals","murchy","murder","murein","murids","muriel","murine","muring","muriti","murium","murker","murkly","murlin","murmur","muroid","murphy","murrah","murray","murral","murras","murrey","murres","murrha","murthy","muruxi","murzim","musang","musard","muscae","muscat","muscid","muscle","muscly","muscot","muscow","musery","musers","museum","mushaa","mushed","musher","mushes","mushla","mushru","musica","musico","musics","musily","musing","musion","musive","musjid","muskat","musked","muskeg","musket","muskie","muskit","muskox","muslim","muslin","musmon","musnud","musrol","mussal","mussed","mussel","musses","mussuk","musted","mustee","muster","musths","mustnt","mutage","mutant","mutase","mutate","mutely","mutest","mutine","muting","mutiny","mutism","mutist","mutive","mutsje","mutten","mutter","mutton","mutual","mutuel","mutule","mutuum","muumuu","muvule","muzhik","muzjik","muzzle","mzungu","naaman","nabbed","nabber","nabbuk","nablas","nablus","nabobs","naboth","nachas","nachus","nacket","nacred","nacres","nadder","nadeem","nadirs","naevus","nagami","nagana","nagara","nagari","naggar","nagged","nagger","naggin","naggle","naggly","naging","nagman","nagnag","nagual","nahane","nahani","nahoor","nahuan","naiads","naiant","nayaur","naifly","naigie","naigue","nailed","nailer","naique","naysay","naitly","naiver","naives","nakhod","nakong","nakula","naleds","nalita","nallah","namare","namban","namely","namers","naming","nammad","nanako","nances","nandin","nandow","nangca","nanger","nangka","nanigo","nanism","nankin","nannie","nanoid","nanpie","nantle","napaea","napalm","napead","napery","napier","napkin","naples","napooh","napped","napper","nappes","nappie","napron","narcos","nardoo","nardus","naresh","nargil","narial","narica","narine","narked","narras","narrow","narwal","nasals","nasard","nascan","nashim","nashua","nasial","nasiei","nasion","naskhi","nasrol","nassau","nastic","nasute","nataka","natale","natals","natant","nathan","nather","natica","natick","nation","native","natraj","natrix","natron","natter","nattle","natura","nature","nauger","naught","naulum","nausea","nauset","nautch","nautic","navaho","navaid","navajo","navars","navely","navels","naveta","navete","navety","navies","navite","nawabs","nawies","nazard","nazify","nazism","neakes","neanic","neaped","nearby","neared","nearer","nearly","neaten","neater","neatly","neavil","neback","nebbed","nebbuk","nebiim","nebris","nebula","nebule","nebuly","neckar","necked","necker","nectar","necton","nedder","neebor","needed","needer","needle","needly","neednt","neeger","neemba","neetup","nefast","negara","negate","neglig","negoce","negros","neighs","neilah","neiper","nekkar","nekton","nelken","nellie","nelson","nemean","nemine","nempne","neoned","nepali","nepeta","nephew","nepman","nepmen","nepote","nereid","nereis","nerine","nerita","nerite","nerium","neroic","neroli","nerols","nerval","nerved","nerver","nerves","nervid","nervii","nervus","neshly","nesiot","neskhi","neslia","nesses","nessus","nested","nester","nestle","nestor","netcha","netful","nether","netman","netmen","netops","netted","netter","nettie","nettle","nettly","neumes","neumic","neurad","neural","neuric","neurin","neurol","neuron","neuter","nevada","nevell","nevoid","nevome","newari","newark","newcal","newels","newest","newing","newish","newton","nextly","nguyen","niacin","niagra","nyalas","nyanja","nyanza","nibbed","nibber","nibble","nybble","niblic","nibong","nibung","nicely","nicene","nicest","nicety","niched","nicher","niches","nichil","nichts","nickar","nicked","nickey","nickel","nicker","nickie","nickle","nickum","nicolo","nicols","nyctea","nidana","nidary","nidder","niddle","nidget","nidify","niding","nidiot","nidudi","niduli","nieces","nielli","niello","nieves","niffer","niggle","nighed","nigher","nighly","nighty","nights","nignay","nignye","nigori","nihils","niyama","niyoga","nikeno","nikkud","nylast","nilgai","nilgau","nylgau","nilled","nylons","nilous","nimbed","nimble","nimbly","nimbus","niminy","nimmed","nimmer","nympha","nympho","nymphs","nimrod","nimshi","nincom","nincum","ninety","ningle","ningpo","ninons","ninths","niobic","niobid","nipmuc","nipped","nipper","nipple","nippon","nipter","nirles","nyroca","niseis","nisnas","nitent","nitery","niters","nither","nitons","nitred","nitres","nitric","nitrid","nitril","nitryl","nytril","nitros","nitter","nitwit","niveau","nixies","nixing","nizams","noahic","noance","nobber","nobble","nobbut","nobled","nobley","nobler","nobles","nobody","nocake","nocent","nocive","nocked","nocket","nocten","noctis","noctua","nodded","nodder","noddle","nodiak","nodose","nodous","nodule","noduli","noebcd","noecho","noesis","noetic","nofile","nogada","nogaku","nogged","noggen","noggin","noyade","noyant","noyful","noiler","noyous","noires","noised","noises","nomade","nomads","nomeus","nomial","nomina","nomine","nominy","nomism","nomnem","nonact","nonage","nonaid","nonair","nonane","nonary","nonces","noncom","noncon","nonego","nonene","nonent","nonfat","nongas","nongod","nonion","nonius","nonman","nonmen","nonnat","nonoic","nonpar","nonrun","nontan","nontax","nonuse","nonwar","noodle","nooked","nookie","nooned","noosed","nooser","nooses","nootka","nopals","norard","norate","nordic","norias","norice","norite","norito","norkyn","normal","norman","normed","norroy","norsel","norths","norway","nosean","nosema","noshed","nosher","noshes","nosier","nosily","nosine","nosing","nosism","nosite","nossel","noster","nostic","nostoc","notary","notate","notchy","noters","nothal","nother","nothus","notice","notify","noting","notion","notist","notour","nouche","nougat","nought","noumea","nounal","nousel","nouses","novale","novate","novcic","novela","novels","novena","novene","novial","novice","novity","noways","nowder","nowhat","nowhen","nowhit","nowise","nowthe","noxial","nozzle","nritta","nuance","nubbin","nubble","nubbly","nubian","nubias","nubile","nuchae","nuchal","nuclei","nucula","nucule","nudate","nuddle","nudely","nudens","nudest","nudged","nudger","nudges","nudies","nudish","nudism","nudist","nudity","nudnik","nuggar","nugget","nugify","nullah","nulled","nullos","nullum","nullus","numbat","numbed","number","numble","numbly","numdah","numero","numida","numina","numine","nummus","numnah","nuncio","nuncle","nunlet","nunned","nuphar","nupson","nuragh","nurhag","nurled","nursed","nurser","nurses","nursle","nutant","nutate","nutlet","nutmeg","nutria","nutted","nutter","nuzzer","nuzzle","oafdom","oafish","oakboy","oaklet","oakums","oakweb","oannes","oarage","oarial","oaring","oarium","oarlop","oarman","oasean","oatbin","oatear","oaters","oathay","oathed","obarne","obarni","obduce","obdure","obeahs","obeche","obeyed","obeyeo","obeyer","obeish","obeism","obelia","obelus","oberon","obfirm","obfusk","obiism","obispo","obital","obiter","object","objure","oblast","oblata","oblate","oblige","oblong","oboist","oboles","obolet","obolos","obolus","obongo","oboval","obrien","obrize","obsede","obsess","obside","obsign","obstet","obtain","obtect","obtend","obtent","obtest","obtund","obtuse","obvert","occamy","occult","occupy","occurs","oceans","ocelli","ocelot","ochava","ochavo","ochery","ochers","ochymy","ochone","ochrea","ochred","ochres","ocimum","ocyroe","oclock","ocotea","ocracy","ocreae","octads","octane","octans","octant","octary","octavd","octave","octavo","octdra","octect","octene","octets","octile","octyls","octine","octyne","octoad","octode","octoic","octoid","octoyl","octoon","octopi","octose","octroi","octroy","octuor","ocular","oculli","oculus","oddest","oddish","oddity","oddman","odelet","odeons","odessa","odible","odyles","odylic","odinic","odious","odiums","odling","odored","odours","odwyer","oecist","oecoid","oedema","oekist","oenone","oesogi","oeuvre","offals","offcut","offend","offers","office","offing","offish","offlap","offlet","offpay","offset","oflete","oftens","oftest","ogaire","ogamic","ogboni","ogdoad","ogdoas","oghams","ogygia","ogival","ogived","ogives","oglala","oglers","ogling","ogress","ogrish","ogrism","ohioan","ohmage","oidium","oyelet","oilcan","oilcup","oildom","oilery","oilers","oilier","oilily","oiling","oilish","oillet","oilman","oilmen","oilway","oinked","oyster","oitava","ojibwa","okayed","okapia","okapis","okoume","okroog","okruzi","okuari","olacad","olamic","olders","oldest","oldies","oldish","oleana","oleary","olease","oleate","olefin","oleine","oleins","olenid","olenus","oleoyl","oleose","oleous","oleron","oleums","olfact","oliban","olinia","olived","oliver","olives","olivet","olivia","olivil","ollamh","ollock","olluck","olneya","olomao","omagra","omagua","omahas","omasum","ombers","ombres","omegas","omelet","omelie","omened","omenta","omitis","ommiad","omnify","omnist","omnium","onager","onagra","onagri","oncome","oncost","ondine","onding","ondule","onehow","oneida","oneyer","oneill","oneism","onethe","onfall","onflow","ongaro","onycha","onymal","oniony","onions","onyxes","onyxis","onlaid","onlepy","onless","online","onlook","ononis","onrush","onsets","onside","onuses","onward","oocyst","oocyte","oodles","ooecia","oofier","oogamy","oogeny","ooglea","oogone","oohing","ooidal","oolite","oolith","oology","oolong","oomiac","oomiak","oompah","oomphs","oopack","oorali","oorial","ootids","ootype","oozier","oozily","oozing","oozoid","opacus","opaion","opaled","opaque","opcode","opelet","opened","opener","openly","operae","operas","operla","operon","ophian","ophion","ophism","ophite","ophrys","opiane","opiate","opifex","opiism","opilia","opined","opiner","opines","opiums","oporto","oppian","oppida","oppone","oppose","oppugn","opsins","optant","optate","optics","optima","optime","opting","option","optive","opulus","opuses","orache","oracle","oraler","orally","orange","orangy","orangs","orante","oraria","orated","orates","orator","orbate","orbell","orbing","orbite","orbity","orbits","orblet","orcein","orchat","orchel","orchen","orchic","orchid","orchil","orchis","orcine","orcins","ordain","ordeal","ordene","orders","ordure","oreads","oregon","oreide","orejon","oreman","oremus","orenda","oretic","orexin","orexis","orfray","orgamy","organa","organy","organs","orgasm","orgeat","orgiac","orgies","orgyia","orgone","orguil","orians","oribis","oriels","orient","origan","origin","orihon","oriole","orison","oryxes","orkhon","orlage","orlean","orlops","ormazd","ormers","ormolu","ormond","ornary","ornate","ornery","ornify","ornith","orogen","oroide","orphan","orphic","orpinc","orpine","orpins","orrery","orrice","orsede","orthal","orthic","orthid","orthis","ortiga","ortive","ortman","ortrud","orwell","osages","osamin","oscars","oscine","oscula","oscule","osella","oselle","osiery","osiers","osiris","osmate","osmics","osmina","osmite","osmium","osmols","osmond","osmose","osmous","osmund","osophy","osperm","ospore","osprey","ossein","ossian","ossify","ostara","osteal","ostein","ostend","ostent","ostyak","ostial","ostium","ostler","ostmen","ostomy","ostrca","ostrea","ostrya","ostsis","oswald","oswego","otalgy","otaria","otello","othake","others","othman","otiant","otidae","otides","otidia","otiose","otitic","otitis","otosis","ototoi","ottars","ottava","ottave","ottawa","otters","oturia","ouanga","ouches","oughts","ouyezd","ounces","ouphes","ourali","ourang","ourari","ourebi","ouroub","oursel","ousels","ousted","oustee","ouster","outact","outadd","outage","outask","outate","outawe","outban","outbar","outbat","outbeg","outbid","outbye","outbow","outbox","outbud","outbuy","outcry","outcut","outdid","outeat","outeye","outers","outfed","outfit","outfly","outfox","outgas","outgun","outher","outhit","outhue","outhut","outing","outish","outjet","outjut","outlay","outlaw","outled","outler","outlet","outlie","outlip","outlot","outman","outmen","outpay","outpop","outpry","output","outray","outran","outrap","outrib","outrig","outrow","outrun","outsay","outsat","outsaw","outsea","outsee","outset","outsin","outsit","outspy","outsum","outtop","outvie","outway","outwar","outwin","outwit","outwoe","ouvert","ouzels","ovally","ovambo","ovampo","ovaria","ovarin","ovated","ovened","ovenly","overby","overdo","overed","overgo","overly","ovibos","ovidae","oviger","ovinae","ovines","ovinia","ovisac","ovoids","ovolos","ovonic","ovular","ovules","ovulum","owelty","owenia","owerby","owhere","owldom","owlery","owlets","owling","owlish","owlism","owners","owning","oxacid","oxalan","oxalic","oxalyl","oxalis","oxamic","oxamid","oxanic","oxazin","oxbane","oxbird","oxbows","oxcart","oxeate","oxeyes","oxeote","oxford","oxgall","oxgang","oxgate","oxgoad","oxhead","oxheal","oxherd","oxhide","oxhoft","oxhorn","oxyazo","oxides","oxidic","oxygas","oxygen","oxygon","oxymel","oximes","oxyopy","oxland","oxlike","oxlips","oxonic","oxreim","oxshoe","oxskin","oxtail","oxters","oxwort","ozaena","ozoena","ozoned","ozoner","ozones","ozonic","ozonid","pabble","pablum","pacaya","pacane","pacate","paccha","pacers","pachak","pachas","pacify","pacing","packed","packer","packet","packly","pacota","pactum","padang","padauk","padded","padder","paddle","padeye","padige","padina","padles","padnag","padouk","padres","padsaw","paduan","paeans","paegel","paegle","paella","paeony","paeons","paepae","pagans","pagers","paggle","pagina","pagine","paging","pagnes","pagoda","pagods","pagrus","paguma","pahari","paybox","paiche","payday","paidle","payees","payeny","payers","payess","paigle","paying","paiked","paiker","pailoo","pailou","pailow","painch","pained","paynim","painty","paints","paiock","payoff","payola","payong","payors","payout","paired","pairer","pairle","paisan","paisas","paiute","paized","pajama","pajero","pajock","pakawa","pakeha","palace","palach","palaic","palais","palaka","palala","palama","palame","palank","palate","paleae","paleal","palely","paleog","paleon","palest","palets","paletz","palfry","palgat","palier","palila","paling","palish","palkee","pallae","pallah","pallar","pallas","palled","pallet","pallia","pallid","pallor","palmad","palmae","palmar","palmed","palmer","palmic","palmin","palmus","palolo","paloma","palour","palpal","palped","palpon","palpus","palter","paltry","palude","palule","paluli","pamela","pament","pamiri","pampas","pamper","pampre","panace","panada","panade","panaka","panama","panary","pandal","pandan","pandar","pandas","pander","pandit","pandle","panela","panels","panfil","panfry","panful","pangas","panged","pangen","pangwe","panhas","panyar","panics","panier","panime","panini","panion","panisc","panisk","pankin","panman","panmug","pannag","pannam","panned","pannel","panner","pannes","pannum","pannus","panoan","pansit","pantas","panted","panter","pantie","pantle","pantod","panton","pantos","pantry","pantun","panung","panure","panzer","paopao","papacy","papago","papaya","papain","papaio","papane","papaws","papery","papern","papers","papess","papier","papion","papyri","papish","papism","papist","papize","pappea","pappox","pappus","papreg","papuan","papula","papule","paquet","parada","parade","parado","parage","parale","paramo","parang","paraph","parate","parava","parcae","parcel","parchy","pardah","pardal","pardao","parded","pardee","pardie","pardon","parecy","pareil","pareja","parens","parent","parers","pareus","pareve","parfey","parfum","parged","parges","parget","pargos","pariah","parial","parian","parica","paries","pariet","parify","parine","paring","parish","pariti","parity","parkas","parked","parkee","parker","parkin","parlay","parled","parley","parles","parlia","parlor","parmak","parnas","parnel","paroch","parode","parodi","parody","parole","paroli","parols","parous","parpal","parpen","parrah","parral","parred","parrel","parrot","parsec","parsed","parsee","parser","parses","parsic","parson","partan","parted","parten","parter","partes","partie","partim","partis","partly","parton","parura","parure","parvis","pasang","pascal","pascha","pasear","pasela","paseng","paseos","pasewa","pashas","pashed","pashes","pashim","pashka","pashto","passay","passed","passee","passel","passen","passer","passes","passim","passir","passus","pastas","pasted","pastel","paster","pastes","pastil","pastis","pastor","pastry","pataca","pataco","pataka","patana","patand","patart","patata","patchy","patefy","patens","patent","patera","paters","patesi","patgia","pathan","pathed","pathic","pathol","pathos","patina","patine","patins","patios","patise","patmos","patois","patola","patria","patrin","patrix","patrol","patron","patted","pattee","patten","patter","pattie","pattle","pattoo","patuca","patwin","paucal","paular","paulie","paulin","paulus","paunch","pauper","pausai","pausal","paused","pauser","pauses","pavade","pavage","pavane","pavans","paveed","pavers","pavier","pavies","paving","pavins","pavior","pavise","pavlov","pavois","pavone","pawers","pawing","pawned","pawnee","pawner","pawnie","pawnor","pawpaw","paxwax","pazend","peaced","peaces","peachy","peacod","peages","peahen","peaked","peaker","pealed","pealer","peanut","peapod","pearce","pearch","pearly","pearls","peasen","peases","peason","peavey","peavie","pebble","pebbly","pecans","pechay","pechan","peched","pechys","pecify","pecite","pecked","pecker","pecket","peckle","peckly","pecora","pecten","pectic","pectin","pectus","pedage","pedalo","pedals","pedant","pedary","pedata","pedate","pedder","peddle","pediad","pedial","pedion","pedlar","pedler","pedros","pedule","peeing","peeked","peeled","peeler","peened","peenge","peeped","peeper","peepul","peered","peerie","peerly","peeved","peever","peeves","peewee","peewit","pegall","pegbox","pegged","pegger","peggle","peglet","pegman","pegmen","peguan","peined","peyote","peyotl","peised","peiser","peises","peitho","peyton","pekans","peking","pekins","pekoes","pelade","pelado","pelage","pelean","peleng","peleus","pelham","pelias","pelick","pelike","peliom","pelite","pellar","pellas","peller","pellet","pelmet","peloid","pelops","pelota","peltae","pelted","pelter","peltry","peludo","pelure","pelves","pelvic","pelvis","penaea","penang","pencey","pencel","penche","pencil","pended","pendle","pendom","peneid","penest","penful","pengos","pengun","penial","penide","penile","penlop","penman","penmen","pennae","penned","penney","penner","pennet","pennia","pennis","pennon","penoun","pensee","pensil","pensum","pentad","pentyl","pentit","pentol","penult","penury","peones","people","peoria","pepful","pepino","peplos","peplum","peplus","pepped","pepper","peppin","pepsin","pepsis","peptic","peptid","pequot","peract","percha","perche","percid","percur","perdie","perdit","perdix","perdue","perdus","perean","pereia","perfay","perfin","perfix","pericu","perils","perine","period","perish","perite","perked","perkin","perlid","permit","permix","pernea","pernel","pernyi","pernio","pernis","pernod","pernor","peroba","perone","peroxy","perpet","perrie","perron","persae","persea","perses","persia","persic","persio","persis","person","persue","perten","perter","pertly","peruke","perula","perule","peruse","pesach","pesade","pesage","pescod","peseta","pesewa","peshwa","pester","pestis","pestle","petaly","petals","petara","petard","petary","petate","peteca","peters","petful","pether","petite","petits","petkin","petrea","petrel","petrie","petrog","petrol","pettah","petted","petter","pettle","petune","peucyl","peumus","pewage","pewdom","pewees","pewful","pewing","pewits","pewter","peziza","pfunde","phaedo","phages","phajus","phalli","phanar","phanic","phanos","pharos","phased","phaser","phases","phasic","phasis","phasma","phasor","phatic","phecda","pheeal","phemic","phemie","phenic","phenyl","phenin","phenix","phenol","phenom","phiale","phials","phycic","phylae","phylar","philia","philic","phylic","philip","philol","phylon","philos","phylum","phymas","phippe","physes","physic","physid","physis","phytic","phytyl","phytin","phytol","phyton","phizes","phizog","phlegm","phleum","phloem","phobia","phobic","phobos","phocal","phocid","phoebe","pholad","pholas","phonal","phoned","phoney","phoner","phones","phonet","phonic","phonol","phonon","phonos","phooey","phooka","phoria","phorid","phosis","phossy","photal","photic","photog","photom","photon","photos","phrase","phrasy","phryma","phthor","phulwa","piache","piacle","piaffe","pialyn","pyalla","pianet","pianic","pianka","pianos","piaroa","piatti","piazin","piazza","piazze","picara","picard","picary","picaro","picein","picene","pichey","picine","pickax","picked","pickee","pickel","picker","picket","pickin","pickle","pickup","pycnia","picnic","pycnic","pycnid","picoid","picong","picory","picote","picots","picric","picryl","picris","picrol","pictun","picuda","picudo","picule","piculs","piddle","pidgin","pieced","piecen","piecer","pieces","piedly","piedra","piegan","pieing","pielet","pyelic","pielum","piemag","pieman","pyemia","pyemic","piepan","pierce","pierid","pieris","pierre","pietas","pieter","pietic","pieton","pifero","piffle","pifine","pygarg","pigdan","pigdom","pigeon","pigful","pigged","piggie","piggin","piggle","piglet","pigman","pigmew","pignet","pignon","pignus","pignut","pigpen","pigsty","piitis","pyjama","pikake","pikers","piking","pyknic","pilaff","pilafs","pilage","pilary","pilate","pilaus","pilaws","pilers","pileum","pileup","pileus","pilfer","pilfre","pilger","pilies","piline","piling","pillar","pillas","pilled","piller","pillet","pillow","pylons","pilori","pylori","pilose","piloti","pilots","pilous","pilpai","pilpay","pilpul","pilula","pilule","piment","pimola","pimped","pimpla","pimple","pimply","pimplo","pinang","pinard","pinata","pincer","pinche","pindal","pinder","pineal","pinene","pinery","pineta","pinged","pinger","pingle","pingos","pingue","pinier","pinyin","pining","pinion","pinyon","pinite","pinjra","pinked","pinkey","pinken","pinker","pinkie","pinkly","pinkos","pinman","pinnae","pinnal","pinnas","pinned","pinnel","pinner","pinnet","pinole","pinons","pinson","pintas","pintid","pintle","pintos","pynung","pinups","pinxit","piolet","pioned","pionic","pyoses","pyosis","pioted","piotty","pioury","pipage","pipals","pipery","pipers","pipets","pipier","pipile","pipilo","piping","pipiri","pipits","pipkin","pipped","pippen","pipper","pippin","pipple","piqued","piques","piquet","piquia","piqure","piracy","piraya","pirana","pyrans","pirate","piraty","pyrena","pirene","pyrene","pyrgom","pyrite","pirlie","pirned","pirner","pirnie","pyrobi","pirogi","pyroid","pyrola","pyrone","piroot","pyrope","pyrrha","pirrie","pyrryl","pyrrol","pyrula","pyruwl","pisaca","pisang","pisces","piscid","piscis","pisgah","pished","pishes","piskun","pisote","pissed","pisses","pistia","pistic","pistil","pistle","pistol","piston","pitaya","pitchi","pitchy","pithed","pithes","pythia","pythic","pithoi","python","pithos","pitied","pitier","pities","pitman","pitmen","pitons","pitpan","pitpit","pitris","pitsaw","pitted","pitter","pituri","piupiu","pyuria","pivots","pixels","pixies","pyxies","pizazz","pizzas","pizzle","placed","placer","places","placet","placid","placit","placks","placus","plagae","plagal","plages","plague","plaguy","playas","plaice","plaidy","plaids","played","player","plainy","plains","plaint","playte","plaits","plakat","planar","planch","planed","planer","planes","planet","plangi","planky","planks","planta","plants","planum","plaque","plashy","plasma","plasms","platan","platch","platea","plated","platen","plater","plates","platic","platie","platys","platly","platty","plazas","pleach","pleads","please","pleats","plebby","plebes","pledge","pleiad","pleion","plenty","plenum","pleura","plevin","plewch","plewgh","plexal","plexor","plexus","pliant","plicae","plical","pliers","plyers","plight","plying","plinks","plinth","plisky","plisse","plitch","plodge","ploidy","ployed","ploima","plonko","plonks","plotch","plotty","plough","plouky","plover","plowed","plower","pltano","plucky","plucks","pluffy","pluggy","plumbs","plumed","plumer","plumes","plumet","plummy","plumpy","plumps","plunge","plungy","plunks","plural","plurel","pluses","plushy","plusia","plutei","pluton","plutus","pneuma","pneume","poachy","poales","pobedy","pochay","pocill","pocked","pocket","podded","podder","poddia","poddle","podeon","podger","podial","podite","podium","podley","podler","podsol","podtia","podunk","podura","podzol","poemet","poesie","poesis","poetic","poetly","poetry","poffle","pogeys","pogies","pogrom","poiana","poilus","poinds","pointe","pointy","points","poyous","poised","poiser","poises","poison","pokeys","pokers","pokier","pokies","pokily","poking","pokomo","pokunt","","poland","polary","polars","polder","poleax","poleyn","poleis","polers","poliad","polyad","polian","police","policy","polies","poling","polyol","polios","polypi","polyps","polish","polite","polity","polyve","polkas","pollam","pollan","polled","pollee","pollen","poller","pollet","pollex","polloi","pollux","polony","polska","pomace","pomada","pomade","pomane","pomard","pomary","pomate","pomato","pomeys","pomely","pomelo","pommee","pommey","pommel","pommer","pommet","pomolo","pomona","pompal","pompey","pompom","pompon","ponces","poncho","ponder","pondok","pondus","ponent","ponera","pongee","pongid","ponica","ponied","ponier","ponies","pontac","pontal","pontee","pontes","pontic","pontil","pontin","ponton","pontus","pooder","poodle","poogye","poohed","poojah","pookoo","pooled","pooler","poonac","poonah","poonce","poonga","pooped","poorer","poorga","pooris","poorly","popean","popeye","popely","popery","popess","popgun","popian","popify","popish","popjoy","poplar","poplet","poplin","popode","poppas","popped","poppel","popper","poppet","poppin","popple","popply","populi","porail","porett","porger","porina","poring","porion","porism","porite","porker","porket","porkin","pornos","poroma","porose","porous","porret","portal","portas","ported","porter","portia","portio","portly","portor","porule","posada","posers","poseur","posher","poshly","posied","posies","posing","posits","posnet","posole","posolo","posses","posset","possie","possum","postal","postea","posted","postel","poster","postic","postie","postil","postin","potage","potail","potash","potass","potate","potato","potboy","potdar","poteen","poteye","potent","potful","potgun","potgut","pother","pothos","potion","potleg","potlid","potman","potmen","potong","potoos","potpie","potsie","pottah","potted","potter","pottle","pottos","pottur","poucey","poucer","pouchy","poufed","pouffe","pouffs","poulet","poulpe","poults","pounce","pouncy","pounds","poured","pourer","pourie","pouser","pousse","pouted","pouter","powcat","powder","powdry","powers","pownie","powter","powwow","poxing","praams","prabhu","prague","praham","prahus","prayed","prayer","praise","praiss","prajna","prance","prancy","prangs","pranky","pranks","prankt","prases","pratal","pratap","prated","pratey","prater","prates","pratty","pravin","prawny","prawns","praxes","praxis","preace","preach","preact","preage","preamp","prearm","prebid","precel","preces","precis","precox","precut","preday","predry","preens","preeze","prefab","prefer","prefet","prefix","preyed","preyer","prelaw","prelim","preman","premed","premen","premia","premie","premio","premit","premix","prepay","preppy","presay","presaw","presee","preser","preses","preset","presto","prests","presul","pretan","pretax","preter","pretil","pretor","pretry","pretty","prevot","prevue","prewar","prexes","priapi","priced","pricey","pricer","prices","pricky","pricks","prided","prides","priers","pryers","priest","prying","pryler","prills","primal","primar","primas","primed","primer","primes","primly","primos","primps","primus","prince","prinky","prinks","prinos","prints","priori","priory","priors","prisal","prised","prises","prismy","prisms","prison","prissy","pritch","privet","prized","prizer","prizes","prlate","proach","proart","probal","probed","prober","probes","probit","procne","proems","profer","profit","profre","progne","projet","proker","prolan","proleg","proles","prolia","prolyl","prolin","prolix","prolog","promic","promit","prompt","prongy","prongs","pronic","pronpl","pronto","proode","proofy","proofs","propel","proper","propyl","propio","propos","propus","prorex","prorsa","prosal","prosar","prosed","proser","proses","prosit","prosos","prossy","protax","protea","protei","protid","protyl","proton","proved","proven","prover","proves","prowar","prowed","prower","prowls","prudes","pruigo","pruned","pruner","prunes","prunus","prutah","prutot","psalis","psalmy","psalms","psetta","pseudo","pshaws","psyche","psycho","psychs","psylla","psiloi","psywar","psocid","psoric","psovie","psuedo","ptelea","pteric","pterin","pteris","pterna","pteron","ptinid","ptinus","ptisan","ptyxis","ptoses","ptosis","ptotic","pubble","pubian","public","pucker","puckle","puddee","pudder","puddle","puddly","pudent","pudsey","pueblo","puerer","puerto","puffed","puffer","puffin","pufftn","pugdog","pugged","pugger","puggle","puggry","pugman","pugree","puisne","puisny","pujari","pukeka","pukeko","puking","pukish","pukras","pulaya","puleyn","pulers","pulian","puling","puliol","pulish","pulled","pulley","pullen","puller","pullet","pullus","pulpal","pulpar","pulped","pulper","pulpit","pulque","pulsar","pulsed","pulser","pulses","pulsus","pulton","pultun","pulvic","pulvil","pulwar","pumelo","pumice","pummel","pumped","pumper","pumpet","pumple","punamu","punchy","pundit","pundum","puneca","punese","pungar","pungey","punger","pungie","pungyi","pungle","punica","punier","punily","punish","punjum","punkah","punkas","punkey","punker","punkie","punkin","punlet","punned","punner","punnet","punnic","puntal","punted","puntel","punter","puntil","puntos","pupate","pupelo","pupils","pupoid","pupped","puppet","puppis","pupulo","purana","purdah","purdas","purdon","pureed","purees","purely","purest","purfle","purfly","purged","purger","purges","purify","purine","purins","puriri","purism","purist","purity","purled","purler","purlin","purpie","purple","purply","purrah","purred","purree","purrel","purrer","pursed","purser","purses","purset","pursue","puruha","purvey","purvoe","pusgut","pushed","pusher","pushes","pushtu","pushum","pushup","pusill","pusley","pusses","pussly","puszta","putage","putain","puteal","puteli","puther","puting","putlog","putoff","putois","putons","putout","putrid","putsch","puttan","putted","puttee","putter","puttie","puttoo","puture","puzzle","qanats","qantar","qasida","qindar","qintar","qiviut","quacky","quacks","quader","quadle","quadra","quaere","quaffs","quagga","quaggy","quahog","quaich","quayed","quaife","quaigh","quaily","quails","quaint","quaked","quaker","quakes","qualia","qually","qualmy","qualms","quandy","quando","quango","quanta","quanti","quants","quapaw","quarks","quarle","quarry","quarta","quarte","quarto","quarts","quartz","quasar","quashy","quasky","quatch","quatre","quatty","quaver","queach","queans","quease","queasy","queazy","quebec","quedly","queens","queery","queers","queest","queeve","queing","quelch","quelea","quells","quelme","quench","quenda","queres","querns","querre","quesal","quests","quetch","quethe","queued","queuer","queues","quezal","quiapo","quibus","quiche","quicks","quidae","quidam","quieta","quieti","quiets","quiffs","quiina","quiles","quilez","quilly","quills","quilts","quinas","quince","quinch","quincy","quinet","quinia","quinic","quinyl","quinin","quinoa","quinol","quinon","quinse","quinsy","quinta","quinte","quinto","quints","quinua","quinze","quippe","quippy","quippu","quipus","quired","quires","quirky","quirks","quirts","quisby","quisle","quitch","quiver","quizzy","quohog","quoins","quoits","quokka","quorum","quotas","quoted","quotee","quoter","quotes","quotha","quotid","quotum","qurush","raanan","raasch","raband","rabato","rabban","rabbet","rabbin","rabbis","rabbit","rabble","rabfak","rabies","rablin","racche","raceme","racers","rachel","raches","rachet","rachis","racial","racier","racily","racing","racion","racism","racist","rackan","racked","racker","racket","rackle","racons","racoon","radars","radded","raddle","radeau","radeur","radiac","radial","radian","radion","radios","radiov","radish","radium","radius","radman","radome","radons","radula","rafael","rafale","raffee","raffia","raffle","rafted","rafter","ragbag","ragees","ragery","ragged","raggee","ragger","raggil","raggle","raging","raglan","raglet","raglin","ragman","ragmen","ragnar","ragout","ragtag","ragule","raguly","rahdar","rayage","rayahs","raided","raider","rayful","raiyat","raying","railed","railer","raylet","railly","rained","rainer","raines","raioid","rayons","raised","raiser","raises","raisin","raison","rajahs","rajeev","rajesh","rajput","rakees","rakely","rakery","rakers","rakhal","rakija","rakily","raking","rakish","ralish","rallye","rallus","ramack","ramada","ramage","ramark","ramass","ramate","rambeh","rambla","ramble","rameal","ramean","ramees","rament","ramesh","ramets","ramies","ramify","ramiro","ramism","ramist","ramjet","rammed","rammel","rammer","ramnes","ramona","ramoon","ramose","ramous","ramped","ramper","ramrod","ramsch","ramsey","ramson","ramtil","ramule","ramusi","rancel","rancer","rances","ranche","rancho","rancid","rancio","rancor","randal","randan","randem","rander","randia","randie","randir","randle","random","randon","ranees","ranere","ranged","rangey","ranger","ranges","rangle","ranids","ranina","ranine","ranjit","ranked","ranker","ranket","rankle","rankly","rannel","ransel","ranses","ransom","rantan","ranted","ranter","ranula","rapeye","rapely","rapers","raphae","raphes","raphia","raphis","raphus","rapide","rapido","rapids","rapier","rapine","raping","rapist","raport","rapped","rappee","rappel","rappen","rapper","rapter","raptly","raptor","raptus","raquet","rarefy","rarely","rarest","rarety","rarify","raring","rarish","rarity","rasant","rascal","rasers","rasher","rashes","rashly","rashti","rasing","rasion","rasoir","rasour","rasped","rasper","raspis","rassle","raster","rastik","rastle","","rasure","ratals","ratany","ratans","ratbag","rateen","ratels","ratero","raters","rathed","rather","ratify","ratine","rating","ration","ratios","ratite","ratlin","ratoon","rattan","ratted","rattel","ratten","ratter","rattle","rattly","ratton","rattus","raucid","raught","raukle","raunge","rauque","ravage","ravels","ravens","ravery","ravers","ravine","raving","ravins","ravish","rawest","rawing","rawish","rawnie","raxing","razeed","razees","razers","razing","razors","razour","razzed","razzer","razzes","razzia","razzle","razzly","rbound","rclame","reable","reachy","reacts","readds","reader","reagan","reagin","realer","reales","realia","really","realms","realty","reamed","reamer","reaped","reaper","reared","rearer","rearii","rearly","rearms","reason","reasty","reatas","reatus","reaute","reaved","reaver","reaves","reavow","reback","rebait","rebake","rebale","rebank","rebase","rebate","rebato","rebawl","rebbes","rebear","rebeat","rebeck","rebecs","rebels","rebend","rebent","rebias","rebids","rebill","rebind","rebite","reblot","reblow","reblue","reboil","reboke","rebold","rebolt","rebone","rebook","reboot","rebops","rebore","reborn","rebosa","reboso","rebote","rebozo","rebred","rebrew","rebuff","rebuke","rebulk","rebuoy","rebury","reburn","rebush","rebusy","rebute","rebuts","recado","recage","recalk","recall","recane","recant","recaps","recart","recase","recash","recast","recche","recede","recent","recept","recess","rechal","rechar","rechaw","rechew","rechip","recide","recipe","recite","recked","reckla","reckon","reclad","recoal","recoat","recock","recoct","recode","recoil","recoin","recoke","recomb","recond","recons","recook","recool","recopy","record","recork","recost","recoup","recour","recrew","recrop","rectal","rector","rectos","rectum","rectus","recule","recumb","recure","recurl","recurs","recuse","recusf","recuts","redact","redame","redans","redare","redarn","redart","redate","redaub","redawn","redbay","redbud","redbug","redcap","redded","redden","redder","reddle","redeal","redear","redeck","redeed","redeem","redefy","redeye","redely","redeny","redfin","rediae","redial","redias","redyed","redyes","reding","redips","redipt","redive","redleg","redock","redoes","redone","redoom","redout","redowa","redrag","redraw","redrew","redrug","redtab","redtop","reduce","reduct","reduit","redupl","redust","redwud","reearn","reebok","reechy","reecho","reeded","reeden","reeder","reedit","reefed","reefer","reeked","reeker","reeled","reeler","reemit","reenge","reeper","reesle","reesty","reests","reetam","reetle","reeved","reeves","reface","refait","refall","refect","refeed","refeel","refell","refels","refelt","refers","refete","reffed","reffos","refile","refill","refilm","refind","refine","refire","refits","reflag","reflee","reflet","reflew","reflex","reflog","reflow","reflux","refold","refont","refool","refoot","reford","reform","refrig","refuel","refuge","refund","refurl","refuse","refute","regain","regald","regale","regalo","regard","regave","regear","regent","regest","reggae","reggie","regian","regift","regild","regill","regilt","regime","regina","region","regird","regius","regive","reglet","reglow","reglue","regnal","regnum","regrab","regret","regrew","regrip","regrow","regula","reguli","regush","rehair","rehale","rehang","reharm","rehash","rehaul","rehboc","rehead","reheal","reheap","rehear","reheat","reheel","rehems","rehete","rehide","rehire","rehone","rehood","rehook","rehoop","rehung","reiced","reigns","reined","reiner","reyoke","reyson","reiter","reived","reiver","reives","rejail","rejang","reject","rejerk","rejoin","rejolt","rekeys","rekhti","rekick","rekill","reking","rekiss","reknit","reknot","reknow","relace","relade","relaid","relais","relays","relamp","reland","relast","relata","relate","relbun","relead","releap","relend","relent","relets","releve","relevy","relick","relics","relict","relide","relied","relief","relier","relies","relift","relime","reline","relink","relish","relist","relive","reload","reloan","relock","relong","relook","relose","relost","relove","reluce","reluct","relume","remade","remail","remaim","remain","remake","remand","remans","remaps","remark","remask","remass","remast","remble","remede","remedy","remeet","remelt","remend","remene","remica","remill","remind","remint","remise","remiss","remits","remixt","remock","remold","remora","remord","remore","remote","remove","remuda","renail","rename","renate","rended","render","renege","renews","rengue","renigs","renins","renish","renner","rennet","rennin","renoir","renone","renove","renown","rental","rented","rentee","renter","rentes","renule","renvoi","renvoy","reoils","reomit","reopen","repace","repack","repage","repaid","repair","repays","repale","repand","repark","repart","repass","repast","repave","repawn","repeal","repeat","repels","repent","reperk","repick","repile","repine","repins","repipe","repkie","replay","replan","replod","replot","replow","replum","repoll","repone","repope","report","repose","repost","repour","repped","repray","repros","repuff","repugn","repump","repure","repute","requin","requit","requiz","rerack","rerail","rerake","rerank","rerate","reread","rereel","rerent","rering","rerise","rerobe","reroll","reroof","reroot","rerope","rerose","reruns","resaca","resack","resaid","resail","resays","resale","resalt","resave","resawn","resaws","rescan","rescue","reseal","reseam","reseat","reseau","resect","reseda","reseed","reseek","reseen","resees","reself","resell","resend","resene","resent","resets","resewn","resews","resgat","reshes","reshew","reship","reshod","reshoe","reshot","reshow","reshun","reshut","reside","resids","resift","resigh","resign","resile","resina","resing","resiny","resink","resins","resist","resize","reskew","reskin","reslay","reslot","resnap","resnub","resoak","resoap","resoil","resold","resole","resorb","resort","resown","resows","respan","respin","respot","respue","restab","rested","restem","restep","rester","restes","restio","restir","restis","restow","resuck","resuit","result","resume","reswim","retack","retail","retain","retake","retalk","retama","retame","retape","retard","retare","retear","retell","retems","retene","retent","retest","rethaw","rether","retial","retied","retier","reties","retile","retill","retime","retina","retint","retype","retire","retled","retold","retomb","retook","retool","retore","retorn","retort","retoss","retour","retrad","retral","retree","retrim","retrip","retrod","retros","retrot","retrue","retted","retter","retube","retuck","retund","retune","returf","return","retuse","reuben","reurge","reused","reuses","revamp","revary","reveal","reveil","revels","revend","revent","reverb","revere","revery","revers","revert","revest","revete","reveto","revets","review","revile","revise","revive","revoir","revoke","revolt","revote","revues","revved","rewade","rewake","rewall","reward","rewarm","rewarn","rewash","rewave","rewear","reweds","reweld","rewend","rewind","rewing","rewins","rewire","rewish","rewoke","rewood","reword","rewore","rework","rewove","rewrap","rexine","rezone","rfound","rhachi","rhagon","rhaphe","rhapis","rhason","rhebok","rhedae","rhedas","rhenea","rhenic","rhesis","rhesus","rhetor","rheumy","rheums","rhexes","rhexia","rhexis","rhibia","rhymed","rhymer","rhymes","rhymic","rhinal","rhynia","rhinos","rhyssa","rhythm","rhyton","rhytta","rhodes","rhodic","rhombi","rhombs","rhonda","rhotic","rhumba","rhumbs","rhuses","rialty","rialto","riancy","ryania","riatas","ribald","riband","ribbed","ribber","ribbet","ribble","ribbon","ribhus","ribibe","riblet","ribose","riboso","riboza","ribozo","riccia","ricers","richen","richer","riches","richly","ricine","ricing","ricins","ricked","rickey","ricker","ricket","rickle","ricrac","rictal","rictus","riddam","ridded","riddel","ridden","ridder","riddle","rideau","rident","riders","ridged","ridgel","ridger","ridges","ridgil","riding","ridley","riever","rifart","rifely","rifest","riffed","riffle","rifian","rifled","rifler","rifles","rifted","rifter","riggal","rigged","rigger","riggot","righty","righto","rights","riglet","rignum","rigole","rigors","rigour","rigsby","riyals","rikari","ryking","riksha","rilawa","riling","rilled","rilles","rillet","rillow","rimate","rimery","rimers","rimier","riming","rimmed","rimmer","rimose","rimous","rimple","rimula","rincon","rinded","rindle","ringed","ringer","ringle","rinker","rinner","rinsed","rinser","rinses","ryokan","rioted","rioter","riotry","rypeck","ripely","ripens","ripest","ripgut","ripier","riping","ripoff","ripost","ripped","ripper","rippet","rippit","ripple","ripply","rippon","riprap","ripsaw","risala","risers","rishis","rising","risked","risker","risper","risque","rissel","risser","rissle","rissoa","rissom","ritard","ritely","rytina","ritter","ritual","ritzes","ryukyu","rivage","rivals","rivell","rivery","rivers","rivets","rivina","riving","rivose","rizzar","rizzer","rizzle","rizzom","roaded","roader","roamed","roamer","roared","roarer","roasts","robalo","roband","robbed","robber","robbin","roberd","robert","robhah","robing","robins","robles","robomb","robots","robust","rochea","rocher","rochet","rockat","rocked","rocker","rocket","rococo","rocolo","rodded","rodden","rodder","roddin","rodent","rodeos","rodger","rodham","roding","rodlet","rodman","rodmen","rodney","roemer","rogero","rogers","roggle","rognon","rogued","rogues","rohuna","royale","royals","royena","roiled","roland","rolled","rolley","roller","rollix","romaic","romain","romaji","romana","romane","romany","romano","romans","romble","rombos","romero","romyko","romish","romney","romped","rompee","romper","ronald","roncet","roncho","roncos","rondel","rondle","rondos","ronier","ronion","ronyon","ronnel","roodle","roofed","roofer","rooing","rooked","rooker","rookie","rookus","roomed","roomer","roomie","roomth","roosed","rooser","rooses","roosty","roosts","rooted","rooter","rootle","rooved","ropand","ropani","ropery","ropers","ropier","ropily","roping","ropish","roquer","roques","roquet","roripa","rosace","rosary","rosbif","roscid","roscoe","roseal","rosery","rosety","rosets","rosied","rosier","rosily","rosine","rosing","rosiny","rosins","rosoli","rosser","rostel","roster","rostra","rotala","rotang","rotary","rotate","rotche","rotgut","rother","rotors","rottan","rotted","rotten","rotter","rottle","rotula","rotund","roture","rouble","rouche","roucou","roudas","rouens","rouged","rouges","roughy","roughs","rought","rouman","rounce","rouncy","roundy","rounds","rounge","rouped","rouper","roupet","roupie","roupit","roused","rouser","rouses","rousts","routed","router","routes","routhy","rouths","rovers","roving","rowans","rowels","rowena","rowens","rowers","rowing","rowley","rowlet","rowted","rowths","roxana","roxane","rozzer","rrhiza","rubace","rubato","rubbed","rubbee","rubber","rubbio","rubble","rubbly","rubefy","rubens","rubian","rubied","rubier","rubies","rubify","rubigo","rubine","rubles","rublis","rubout","rubric","ruches","rucked","rucker","ruckle","ruckus","rudder","ruddle","rudely","rudera","rudest","rudish","rudity","rudolf","rudous","rueful","ruelle","ruffed","ruffer","ruffes","ruffin","ruffle","ruffly","rufous","rufter","rugate","rugged","rugger","ruggle","rugine","rugosa","rugose","rugous","ruined","ruiner","rukbat","rulers","ruling","ruller","rumage","rumbas","rumble","rumbly","rumdum","rumens","rumina","rumkin","rummer","rummes","rummle","rumney","rumors","rumour","rumpad","rumper","rumple","rumply","rumpot","rumpus","rundel","rundle","runite","runkle","runkly","runlet","runman","runnel","runner","runnet","runoff","runout","runrig","runted","runtee","runway","rupees","rupert","rupiah","rupial","ruppia","rurban","ruscus","rushed","rushee","rushen","rusher","rushes","rusine","ruskin","russel","russet","russia","russud","rusted","rustic","rustle","rustly","rustre","ruswut","rutate","ruther","rutile","rutted","ruttee","rutter","ruttle","rutuli","rwound","saanen","sabalo","sabana","sabbat","sabbed","sabeca","sabers","sabian","sabicu","sabina","sabine","sabing","sabino","sabins","sabirs","sables","sabora","sabots","sabras","sabred","sabres","sabuja","sacate","sacbut","saccha","saccli","saccos","saccus","sacela","sachem","sachet","sacian","sacked","sacken","sacker","sacket","sacope","sacque","sacrad","sacral","sacred","sacrum","sadden","sadder","saddhu","saddik","saddle","sadhes","sadhus","sadism","sadist","sadite","saeima","saeter","saeume","safari","safavi","safely","safest","safety","safine","safini","safrol","saftly","sagaie","sagbut","sageer","sagely","sagene","sagest","saggar","sagged","sagger","saggon","sagier","sagina","saging","sagoin","sahara","sahibs","sahras","saices","sayers","sayest","saigas","saigon","sayids","saiyid","sayyid","saying","sailed","sailer","sailye","sailor","saynay","sained","sainte","saints","sairly","sairve","saithe","saitic","sajous","sakeen","sakell","sakers","sakieh","sakkoi","sakkos","salaam","salada","salade","salads","salago","salame","salami","salamo","salary","saldid","salele","salema","saleps","salian","salify","salina","saline","salish","salite","saliva","sallee","sallet","salloo","sallow","salmin","salmis","salmon","salols","salome","salons","saloon","saloop","salpae","salpas","salpid","salted","saltee","salten","salter","saltie","saltly","saltus","saluda","salugi","saluki","salung","salute","salved","salver","salves","salvia","salvor","salvos","salwey","salwin","samadh","samani","samara","sambal","sambar","sambas","sambel","sambos","sambuk","sambul","sambur","samech","samekh","sameks","samely","samfoo","samgha","samian","samiel","samiri","samish","samite","samiti","samlet","sammel","sammer","samoan","samohu","samory","sampan","sample","samsam","samshu","samson","samucu","samuel","samuin","samvat","sanand","sanche","sancho","sancta","sandak","sandal","sandan","sanded","sander","sandhi","sandia","sandip","sandix","sandyx","sandra","sanely","sanest","sangah","sangar","sangas","sangei","sanger","sangha","sangho","sanghs","sangil","sangir","sanies","sanify","saning","sanity","sanjay","sanjak","sanjib","sankha","sannop","sannup","sansar","sansei","santal","santar","santee","santii","santir","santol","santon","santos","sanzen","sapele","sapful","saphie","sapiao","sapium","saponi","sapors","sapota","sapote","sapour","sapped","sapper","sappho","saprin","sapsap","saraad","sarada","sarans","sarape","sarcel","sarcle","sardar","sardel","sarees","sarges","sargos","sargus","sarins","sarkar","sarkit","sarlac","sarlak","sarlyk","sarode","sarods","sarong","sarraf","sarrow","sarsar","sarsen","sarson","sartor","sarwan","sarzan","sasani","sashay","sashed","sashes","sasine","sasins","sassak","sassan","sassed","sasses","sastra","satang","satara","sateen","satine","sating","satiny","satins","sation","satire","satyrs","sativa","sative","satori","satrae","satrap","satron","satsop","sattar","sattie","sattle","sattva","satura","satury","saturn","sauced","saucer","sauces","sauchs","saudis","sauger","saughy","saughs","saught","saulge","saulie","saults","saumya","saumon","saumur","saunas","sauncy","sauqui","saurel","sauria","sauted","sauter","sautes","savacu","savage","savant","savara","savate","savery","savers","savile","savine","saving","savins","savior","savoys","savola","savory","savors","savour","sawali","sawbwa","sawder","sawers","sawfly","sawyer","sawing","sawish","sawlog","sawman","sawmon","sawneb","","sawnie","sawpit","sawway","saxaul","saxish","saxony","saxons","saxten","saxtie","sbirro","sblood","scabby","scabia","scabid","scaean","scaena","scaffy","scaife","scalae","scalar","scaldy","scalds","scaled","scaler","scales","scalet","scalfe","scalls","scalma","scalps","scampi","scamps","scance","scania","scanic","scanty","scants","scaped","scapel","scapes","scapha","scaphe","scapus","scarab","scarce","scarcy","scards","scared","scarey","scarer","scares","scarfe","scarfy","scarfs","scarid","scarpa","scarpe","scarph","scarps","scarry","scarth","scarts","scarus","scatch","scathe","scathy","scatty","scatts","scaups","scaurs","scavel","scazon","scenas","scends","scenes","scenic","scents","scerne","schanz","scharf","schavs","scheat","schelm","schema","scheme","schemy","schene","scherm","schick","schism","schist","schizy","schizo","schlep","schmoe","schnoz","schola","schone","school","schoon","schorl","schout","schouw","schrik","schuhe","schuit","schuyt","schule","schuln","schuss","schute","schwas","sciage","sciara","sciath","scient","scilla","scylla","scions","scious","scypha","scyphi","scythe","scivvy","sclaff","sclate","sclent","sclera","sclere","scliff","sclimb","scobby","scodgy","scoffs","scogie","scolds","scoley","scolex","scolia","scoloc","scolog","sconce","scones","scooch","scoops","scoots","scoped","scopes","scopet","scopic","scopus","scorce","scorch","scored","scorer","scores","scoria","scorny","scorns","scorse","scorza","scotal","scotch","scoter","scotia","scotic","scotty","scouch","scoury","scours","scouse","scouth","scouts","scovel","scowed","scowls","scrabe","scrags","scraye","scramb","scrams","scrank","scrape","scrapy","scraps","scrath","scrawk","scrawl","scrawm","scraze","screak","scream","screar","screed","screek","screel","screen","screes","screet","screve","screwy","screws","scribe","scride","scryer","scrike","scrime","scrimy","scrimp","scrims","scrine","scrips","script","scrite","scrive","scrobe","scrods","scroff","scrogs","scroll","scroop","scrota","scrout","scrubs","scruff","scruft","scrump","scrums","scrunt","scrush","scruto","scruze","scubas","scuddy","scuffy","scuffs","sculch","sculks","sculls","sculps","sculpt","sculsh","scummy","scunge","scungy","scurdy","scurfy","scurfs","scurry","scurvy","scusin","scutal","scutch","scutel","scutes","scutta","scutty","scutum","scuzzy","sdeath","sdeign","seabag","seabed","seabee","seadog","sealch","sealed","sealer","sealet","seaman","seamas","seamed","seamen","seamer","seamew","seamus","seance","searce","search","seared","searer","seasan","season","seated","seater","seathe","seaway","seawan","sebago","sebait","sebate","sebkha","sebums","secale","secant","seccos","secede","secern","secesh","secess","seckel","secohm","second","secpar","secque","secret","sector","secund","secure","sedang","sedans","sedate","sedent","seders","sedged","sedges","sedile","seduce","seduct","sedums","seeded","seeder","seeing","seeker","seeled","seemed","seemer","seemly","seenie","seenil","seeped","seesaw","seesee","seethe","seewee","sefton","seggar","segged","seggio","seghol","segnos","segued","segues","seiche","seidel","seimas","seined","seiner","seines","seiren","seised","seiser","seises","seisin","seisms","seisor","seized","seizer","seizes","seizin","seizor","sejant","sejero","sejoin","sejour","sekane","sekani","sekere","selago","selahs","selden","seldom","seldor","select","selena","selene","selety","selfed","selfly","selina","seling","selion","seljuk","sellar","seller","selles","sellie","selsyn","selter","selung","selves","semang","semble","semeed","semeia","sememe","semens","sement","semese","semian","semify","semina","semita","semite","semmel","semmet","semmit","semnae","semois","semola","semper","semple","sempre","semsem","semsen","senaah","senage","senary","senate","sencio","sendal","sendee","sender","sendle","seneca","senega","senhor","senile","senior","seniti","senium","senlac","sennas","sennet","sennit","senora","senors","sensal","sensed","senses","sensor","sensum","sensus","sentry","senufo","senusi","sepals","sepawn","sephen","sepiae","sepian","sepias","sepion","sepium","sepoys","sepone","sepose","sepses","sepsid","sepsin","sepsis","septal","septan","septet","septic","septum","sepult","seqrch","sequan","sequel","sequin","seracs","seraya","serail","serais","serang","serape","seraph","serbia","sercom","serdab","serdar","serean","serein","serena","serene","sereno","serest","sergei","serger","serges","sergio","sergiu","serial","serian","series","serifs","serine","sering","serins","sermon","seroon","seroot","serosa","serose","serous","serows","serrae","serrai","serran","sertum","serule","serums","serval","served","server","serves","servet","servos","servus","sesame","sesban","seseli","seshat","seskin","sesqui","sessed","sestet","sestia","seston","sesuto","sethic","setibo","setier","setnet","setoff","setons","setose","setous","setout","setpfx","settee","setter","settle","settos","setuid","setula","setule","setups","seudah","sevens","severe","severy","severs","sevier","sevres","sewage","sewans","sewars","sewery","sewers","sewing","sexern","sexfid","sexier","sexily","sexing","sexism","sexist","sexpot","sextan","sextar","sextet","sextic","sexton","sextos","sextry","sextur","sextus","sexual","shaban","shabby","shacky","shacko","shacks","shaded","shader","shades","shadow","shaduf","shafii","shafty","shafts","shaggy","shagia","shahee","shahid","shahin","shayed","shaikh","shaykh","shaird","shairn","shaiva","shaken","shaker","shakes","shakha","shakil","shakos","shakta","shakti","shaled","shalee","shales","shally","shallu","shalom","shamal","shaman","shamba","shambu","shamed","shamer","shames","shamim","shamir","shammy","shamoy","shamus","shandy","shangy","shanks","shanna","shanny","shansa","shanti","shanty","shaped","shapen","shaper","shapes","shapka","shapoo","sharan","shardy","shards","shared","sharer","shares","sharia","sharif","sharki","sharky","sharks","sharny","sharns","sharon","sharpy","sharps","sharra","sharry","shasta","shatan","shaugh","shaula","shauls","shauri","shauwe","shaved","shavee","shaven","shaver","shaves","shavie","shawed","shawls","shawms","shawny","shazam","sheafy","sheafs","sheals","sheard","shears","sheath","sheave","shebar","shebat","sheder","shedim","sheely","","sheens","sheepy","sheers","sheety","sheets","sheeve","sheikh","sheiks","sheila","sheyle","shekel","shelah","shelfy","shelly","shells","","shelty","shelve","shelvy","shends","sheols","sherds","sheria","sherif","sherpa","sherri","sherry","shesha","sheuch","sheugh","shevel","shevri","shewed","shewel","shewer","shfsep","shibah","shibar","shicer","shield","shiels","shiers","shyers","shiest","shyest","shifty","shifts","shying","shyish","shiism","shiite","shikar","shikii","shikra","","shikse","shilfa","shilha","shilla","shilly","shills","shiloh","shimal","shimei","shimmy","shindy","shined","shiner","shines","shinny","shinty","shinto","shinza","shypoo","shippy","shippo","shiraz","shires","shirky","shirks","shirra","shirrs","shirty","shirts","shists","shitty","shivah","shivas","shivey","shiver","shives","shivoo","shivvy","shlock","shmoes","shnaps","shnook","shoaly","shoals","shoats","shocks","shoddy","shoder","shoers","shofar","shoful","shogun","shohet","shohji","shojis","sholom","shonde","shooed","shoofa","shooks","shools","shoots","shoppe","shoppy","shoran","shorea","shored","shorer","shores","shorls","shorty","shorts","shotes","shotty","shotts","shough","should","shouse","shouts","shoval","shoved","shovel","shover","shoves","showed","shower","showup","shradd","shradh","shrame","shrank","shrape","shrave","shreds","shrend","shrewd","shrews","shride","shriek","shrift","shrike","shrill","shrimp","shrine","shrink","shrite","shrive","shroff","shrogs","shroud","shrove","shrovy","shrubs","shruff","shrugs","shrunk","shrups","shruti","shtetl","shtick","shucks","shudna","shufty","shuggy","shuler","shumac","shumal","shunts","shuted","shutes","shuvra","shwebo","sialia","sialic","sialid","sialis","sibbed","sibber","sibyls","syboes","sicana","sicani","siccan","siccar","sicced","sycees","sychee","sicily","sicyos","sycite","sicked","sicken","sicker","sicket","sickie","sickle","sickly","sycock","sycoma","sicsac","sicula","siculi","sidder","siddha","siddhi","syddir","siddow","siddur","sidest","siding","sidion","sidled","sidler","sidles","sidney","sydney","siecle","sieged","sieger","sieges","sienna","sierra","siesta","sieurs","sieved","siever","sieves","sifaka","siffle","sifted","sifter","sigger","sighed","sigher","sighty","sights","sigill","sigils","sigloi","siglos","siglum","sigmas","signal","signed","signee","signer","signet","signoi","signon","signor","signum","sigrim","sigurd","sijill","sikara","sikhra","sikimi","sikkim","silage","silane","silene","sylene","sileni","silent","siletz","silica","silico","syling","silked","silken","silker","silkie","syllab","sillar","siller","syllid","syllis","sillon","siloam","siloed","silpha","sylphy","sylphs","silted","silure","silvae","sylvae","silvan","sylvan","silvas","sylvas","silver","silvex","silvia","sylvia","sylvic","sylvin","simaba","simara","simars","simbil","symbol","simcon","simeon","simiad","simial","simian","simiid","simile","simity","simkin","simlin","simmer","simmon","simnel","simony","simool","simoom","simoon","simous","simpai","simper","simple","simply","sympus","simsim","simson","symtab","simula","simule","simurg","sinaic","sinawa","synced","synchs","syncom","sinder","syndet","sindhi","syndic","sindle","sindoc","syndoc","sindon","sindry","synema","sinewy","sinews","sinful","singed","singey","singer","singes","singfo","single","singly","sinian","sinico","sinify","sinism","sinite","sinjer","sinked","sinker","sinned","sinnen","sinner","sinnet","synods","syntan","syntax","sinter","sintoc","synura","sinzer","siouan","sipage","sipapu","sipers","siphac","sypher","siphon","syphon","sipibo","siping","sipped","sipper","sippet","sippio","sipple","sircar","sirdar","sirees","sirene","sireny","sirens","syrens","siress","syriac","sirian","siryan","syrian","siring","syrinx","sirius","sirkar","sirpea","sirple","sirrah","sirras","sirree","syrtic","syrtis","sirupy","syrupy","sirups","syrups","sisals","sisham","sisith","siskin","sisley","sysout","syssel","sissoo","system","sisten","sister","sistle","sistra","sitars","sitcom","sithen","sithes","siting","sitkan","sitrep","sittee","sitten","sitter","situal","situla","situps","sivers","siwash","siwens","sixain","sixgun","sixing","sixish","sixmos","sixtes","sixths","sixtus","sizars","sizers","sizier","syzygy","sizing","sizzle","sjomil","sjouke","skalds","skance","skanda","skated","skater","skates","skatol","skeane","skeans","skedge","skeech","skeely","skeens","skeery","skeets","skeich","skeigh","skeily","skeins","skeipp","skelet","skelic","skelly","skelps","skelvy","skenai","skenes","skeppe","skerry","sketch","skewed","skewer","skewly","skhian","skybal","skibby","skibob","skycap","skiddy","skidoo","skiech","skiegh","skiers","skieur","skiffs","skyfte","skyful","skiing","skying","skyish","skylab","skilly","skillo","skills","skilty","skilts","skyman","skymen","skimos","skimpy","skimps","skinch","skinks","skinny","","skyrin","skirls","skirrs","skirty","skirts","skited","skiter","skites","skitty","skived","skiver","skives","skivie","skivvy","skyway","sklate","sklent","skoals","skolly","skouth","skreel","skryer","skrike","skulks","skully","skulls","skunky","skunks","skurry","slabby","slacks","slaggy","slayed","slayer","slaked","slaker","slakes","slakin","slalom","slangy","slangs","slants","slappy","slarth","slashy","slatch","slated","slater","slates","slaved","slavey","slaver","slaves","slavic","slavin","sleave","sleazy","sledge","sleech","sleeky","sleeks","sleepy","sleeps","sleety","sleets","sleeve","sleezy","sleyed","sleyer","sleigh","slepez","sleuth","slewed","slewer","slewth","sliced","slicer","slices","slicht","slicks","slided","slider","slides","sliest","slyest","slight","slyish","slimed","slimer","slimes","slimly","slimsy","slinge","slings","slinky","slinks","slinte","sliped","slipes","slypes","slippy","slipup","slitch","slithy","slitty","sliver","sliwer","slobby","slodge","slogan","sloids","sloyds","slojds","sloked","sloken","sloomy","sloops","sloosh","sloped","sloper","slopes","sloppy","sloshy","sloted","sloths","slouch","slough","sloush","slovak","sloven","slowed","slower","slowly","slowup","slubby","sludge","sludgy","sluffs","sluggy","sluice","sluicy","sluing","slummy","slumpy","slumps","slunge","slurbs","slurps","slurry","slushy","slutch","slutty","smacks","smally","smalls","smalti","smalto","smalts","smaltz","smarmy","smarms","smarty","smarts","smatch","smazes","smeary","smears","smeath","smeech","smeeky","smeeks","smeeth","smegma","smelly","smells","smelts","smerks","smervy","smethe","smeuse","smeuth","smiddy","smidge","smilax","smiled","smiley","smiler","smiles","smilet","smirch","smiris","smirky","smirks","smyrna","smitch","smiter","smites","smithy","smiths","smocks","smoggy","smoked","smokey","smoker","smokes","smokos","smolts","smooch","smooge","smooth","smouch","smouse","smriti","smudge","smudgy","smugly","smurks","smurry","smutch","smutty","snabby","snacky","snacks","snafus","snaggy","snaily","snails","snaith","snaked","snakey","snaker","snakes","snaper","snappe","snappy","snapps","snared","snarer","snares","snarks","snarly","snarls","snaste","snasty","snatch","snathe","snaths","snavel","snawed","snawle","snazzy","sneaky","sneaks","sneaps","sneath","snecks","sneery","sneers","sneesh","sneest","sneeze","sneezy","snelly","snells","snibel","snicks","snider","sniffy","sniffs","snifty","snight","snying","sniped","sniper","snipes","snippy","snitch","snithe","snithy","snivey","snivel","snobby","snobol","snocat","snodly","snoods","snooks","snools","snoopy","snoops","snoose","snooty","snoots","snoove","snooze","snoozy","snored","snorer","snores","snorty","snorts","snotty","snouch","snouty","snouts","snowed","snowie","snubby","snudge","snuffy","snuffs","snugly","snurly","soaked","soaken","soaker","soally","soaped","soaper","soared","soarer","soaves","sobbed","sobber","sobeit","sobers","sobful","sobole","socage","soccer","social","socies","sociol","socius","socked","socker","socket","socles","socman","socmen","sodaic","sodded","sodden","sodium","sodoku","sodomy","soekoe","soever","sofane","sofars","soffit","sofkee","softas","soften","softer","softie","softly","sogged","soyate","soigne","soiled","soyled","soiree","sokoki","sokulk","solace","solach","soland","solano","solans","solary","solate","soldan","soldat","solder","soleas","soleil","solein","soleyn","solely","solemn","solent","solera","solert","soleus","solfge","solgel","solidi","solido","solids","solyma","soling","solion","solist","sollar","soller","sollya","solodi","soloed","solons","soloth","solums","solute","solved","solver","solves","solvus","somali","somalo","somata","somber","sombre","somdel","somers","somite","somler","somner","somnus","sompay","sompne","sonant","sonars","sonata","sonder","sondes","soneri","songer","songle","songoi","sonica","sonics","soning","soniou","sonnet","sonrai","sonsie","sontag","soodle","soodly","soogan","soogee","soojee","sookie","sooner","soonly","sooper","soorah","soorki","soorky","soorma","soosoo","sooted","sooter","soothe","sooths","sopher","sophia","sophic","sophta","sopite","sopors","sopped","sopper","sorage","sorbed","sorbet","sorbic","sorbin","sorbol","sorbus","sorcer","sordes","sordid","sordor","sorely","sorels","sorema","sorest","sorghe","sorgho","sorgos","sorite","sorned","sorner","sorose","sorrel","sorren","sorroa","sorrow","sortal","sorted","sorter","sortes","sortie","sortly","soshed","sossle","sothic","sothis","sotnia","sotnik","sotols","sotted","sotter","sottie","souari","soucar","souchy","soudan","soudge","soudgy","soueak","soueef","souffl","sougan","soughs","sought","souled","soumak","sounds","souped","souper","souple","soupon","source","soured","souren","sourer","sourly","soused","souser","souses","soushy","soutar","souter","souths","souush","soviet","sovite","sovran","sowans","sowars","sowcar","sowder","sowens","sowers","sowing","sowins","sowish","sowlth","sozine","sozins","sozzle","sozzly","spaced","spacer","spaces","spaded","spader","spades","spadix","spahee","spahis","spayad","spayed","spails","spaits","spaked","spalax","spales","spalls","spandy","spaned","spanky","spanks","sparch","spared","sparer","spares","sparge","sparid","sparky","sparks","sparry","sparse","sparta","sparth","sparus","spasms","spated","spates","spatha","spathe","spatio","spauld","spaver","spavie","spavin","spavit","spawny","spawns","speaks","speans","speary","spears","speave","specie","specif","specky","specks","specus","speece","speech","speedy","speedo","speeds","speels","speers","speils","speirs","speise","speiss","spells","spelts","speltz","spence","spency","spends","spense","sperma","spermy","sperms","speron","sperse","spetch","spewed","spewer","sphalm","sphene","sphere","sphery","sphinx","spicae","spical","spicas","spiced","spicey","spicer","spices","spicks","spider","spydom","spiels","spiers","spiffy","spigot","spying","spyism","spiked","spiker","spikes","spiled","spiler","spiles","spilly","spills","spilth","spilus","spinae","spinal","spined","spinel","spines","spinet","spinny","spinor","spirae","spiral","spiran","spirea","spired","spirem","spires","spirit","spirol","spyros","spirts","spissy","spital","spited","spites","spivvy","splays","splake","splash","splats","spleen","spleet","splent","splice","spline","splint","splite","splits","sploit","splore","splosh","splunt","splurt","spninx","spoach","spodes","spoffy","spogel","spoils","spoilt","spokan","spoked","spoken","spokes","spolia","sponge","spongy","spoofs","spooky","spooks","spools","spoony","spoons","spoorn","spoors","sporal","spored","spores","sporid","sporty","sports","sposhy","spotty","spouse","spousy","spouty","spouts","sprack","sprags","sprain","sprays","sprang","sprank","sprats","sprawl","spread","spreed","sprees","spreng","sprent","sprewl","spried","sprier","spryer","sprigs","spryly","spring","sprink","sprint","sprite","sprits","spritz","sproat","sproil","sprong","sprose","sproty","sprout","spruce","sprucy","spruer","sprues","sprugs","spruik","spruit","sprung","sprunk","sprunt","sprush","spuddy","spuggy","spuing","spumed","spumes","spunch","spunge","spunky","spunks","spunny","spurge","spuria","spurns","spurry","spurts","sputta","sputum","squabs","squads","squail","squali","squall","squalm","squama","squame","squamy","square","squary","squark","squash","squats","squawk","squawl","squaws","squdge","squdgy","squeak","squeal","squeam","squeel","squegs","squibs","squids","squill","squint","squire","squirk","squirl","squirm","squirr","squirt","squish","squiss","squoze","squshy","squush","sradha","sriram","stable","stably","staboy","stacey","stacks","stacte","stadda","stader","stades","stadia","stadic","stadie","stadle","staffs","staged","stagey","stager","stages","staggy","stagne","stayed","stayer","staigs","stains","stairy","stairs","staith","staked","staker","stakes","stalag","staled","staler","stales","stalin","stalky","stalko","stalks","stalls","stamba","stamen","stamin","stamps","stance","stanch","standi","stands","staned","stanek","stanes","stangs","stanks","stanly","stanno","stanza","stanze","stanzo","stapes","staphs","staple","staplf","starch","stared","staree","starer","stares","starik","starky","starny","starry","starty","starts","starve","starvy","stases","stasis","statal","stated","stater","states","static","stator","statua","statue","status","staved","staver","staves","staxis","stddmp","steady","steads","steaks","stealy","steals","steamy","steams","steeds","steeks","steele","steely","steels","steepy","steeps","steery","steers","steeve","stefan","steigh","steins","stekan","stelae","stelai","stelar","steles","stelic","stella","stemma","stemmy","stenar","stench","stenia","stenog","stenos","stephe","steppe","stepup","sterad","stereo","steres","steric","sterid","sterin","sterna","sterno","sterns","sterol","sterve","stetch","stethy","stevan","stevel","steven","stevia","stewed","sthene","styany","stibic","stichs","sticky","sticks","sticta","stiddy","stiffs","stifle","styful","stigma","stigme","stying","stylar","styled","styler","stiles","styles","stilet","stylet","stilly","stylli","stills","stilty","stilts","stylus","stimes","stymie","stinge","stingy","stingo","stings","stinky","stinko","stinks","stinty","stints","stiped","stipel","stipes","stipos","styrax","stiria","styryl","stirks","styrol","stirps","stirra","stitch","stithe","stythe","stithy","stiver","stoach","stoats","stocah","stocky","stocks","stodge","stodgy","stogey","stogie","stoics","stoked","stoker","stokes","stolae","stolas","stoled","stolen","stoles","stolid","stolon","stomal","stomas","stomps","stoned","stoney","stonen","stoner","stones","stooge","stooks","stools","stoond","stoops","stoory","stooth","stoped","stopen","stoper","stopes","storay","storax","stored","storey","storer","stores","storge","storks","stormy","storms","stoter","stound","stoups","stoure","stoury","stours","stoush","stouth","stouty","stouts","stoved","stoven","stover","stoves","stowce","stowed","stower","stowps","stowse","stowth","strack","stract","strade","stradl","strafe","strage","straik","strail","strain","strays","strait","straka","strake","straky","stramp","strand","strang","strany","straps","strass","strata","strate","strath","strati","strave","strawy","straws","streak","stream","streck","streek","streel","streen","streep","street","streit","streke","streng","strent","streps","stress","strewn","strews","striae","strial","strich","strych","strick","strict","stride","strife","strift","striga","strike","strind","string","stripe","strype","stripy","strips","stript","strive","strivy","stroam","strobe","strode","stroil","stroys","stroke","stroky","strold","stroll","stroma","stromb","strome","strond","strone","strong","strook","stroot","strops","stroth","stroud","stroup","strout","strove","strowd","strown","strows","struck","struct","strude","struis","struma","strums","strung","strunt","struse","struth","struts","stuart","stubby","stuber","stuboy","stucco","studdy","studia","studio","studys","stuffy","stuffs","stuggy","stulls","stulty","stumer","stummy","stumor","stumpy","stumps","stunty","stunts","stupas","stuped","stupes","stupex","stuphe","stupid","stupor","sturdy","sturin","sturte","sturty","sturts","suable","suably","suaeda","suaver","subact","subage","subahs","subaid","subaud","subbed","subdeb","subdie","subdit","subdue","subers","subeth","subfeu","subfix","subget","subgit","subgod","subgum","subiya","subito","subjee","sublet","sublid","sublot","subman","submen","submit","subnet","subnex","suborn","subpar","subsea","subset","subtle","subtly","suburb","subvii","subway","subwar","succah","succes","succin","succor","succub","succus","suchos","sucked","sucken","sucker","sucket","suckle","suclat","sucres","sucuri","sucury","sudani","sudary","sudate","sudden","sudder","suddle","sudors","sudsed","sudser","sudses","sueded","suedes","suegee","suerre","suerte","suevic","suffer","suffix","sufism","sugamo","sugann","sugary","sugars","sugent","suggan","suggil","sughed","suidae","suints","suisse","suited","suites","suitly","suitor","suivez","sukkah","sulaba","sulaib","sulcal","sulcar","sulcus","suldan","sulfas","sulfid","sulfur","suling","sulked","sulker","sullan","sullen","sullow","sulpha","sulpho","sultam","sultan","sultry","suluan","sulung","sumach","sumacs","sumage","sumass","sumbal","sumbul","sumdum","summae","summar","summas","summat","summed","summer","summit","summon","summut","sumner","sumper","sumphy","sumpit","sumple","sunbow","suncke","suncup","sundae","sunday","sundar","sundek","sunder","sundew","sundik","sundog","sundra","sundri","sundry","sungar","sungha","sunglo","sunhat","sunyie","sunken","sunket","sunkie","sunlet","sunlit","sunnas","sunned","sunnud","sunray","sunset","suntan","sunups","sunway","suomic","supari","supawn","superb","superi","superl","supers","supine","suplex","supped","supper","supple","supply","suppos","surahi","surahs","surbed","surcle","surely","suresh","surest","surety","surfed","surfer","surfie","surfle","surged","surger","surges","surhai","suriga","surmit","surnai","surnay","surnap","surrah","surras","surrey","surtax","survey","surwan","susans","susian","suslik","sussex","susumu","susurr","sutaio","suther","sutile","sutler","sutras","suttas","suttee","sutten","sutter","suttin","suttle","suture","suzuki","svamin","svante","svaraj","svelte","swabby","swaddy","swaged","swager","swages","swaggi","swaggy","swayed","swayer","swails","swains","swaird","swaler","swales","swallo","swamis","swampy","swamps","swangy","swanky","swanks","swanny","swaraj","swardy","swards","swarfs","swarga","swarmy","swarms","swarry","swarth","swarty","swarve","swashy","swatch","swathe","swathy","swaths","swatow","swaver","swears","sweath","sweaty","sweats","sweden","swedes","swedge","swedru","sweeny","sweens","sweepy","sweeps","sweert","sweese","sweety","sweets","swelly","swells","swelth","swelty","swerve","sweven","swidge","swifty","swifts","swills","swimmy","swiney","swinge","swingy","swings","swinks","swiped","swiper","swipes","swiple","swirly","swirls","swishy","switch","swithe","swythe","swived","swivel","swiver","swives","swivet","swiwet","swoony","swoons","swoops","swoose","swoosh","swords","swough","swound","swouns","taband","tabard","tabbed","tabber","tabbis","tabefy","tabers","tabira","tablas","tabled","tabler","tables","tablet","taboos","taboot","tabors","tabour","tabret","tabriz","tabued","tabula","tabule","tacana","taches","tacked","tackey","tacker","tacket","tackle","tacoma","tactic","tactor","tactus","tadjik","taenia","taffia","taffle","tafias","tafwiz","tagala","tagalo","tagaur","tagged","tagger","taggle","tagish","taglet","taglia","tagrag","taguan","tagula","tahali","tahami","taheen","tahina","tahiti","tahona","tahsil","tahsin","taiaha","taigas","taigle","taihoa","taiyal","taikih","taikun","tailed","tailer","tailet","tailge","tailye","taille","tailor","taylor","tailte","taimen","tainan","tainos","tainte","taints","tainui","taipan","taipei","tairge","taisch","taisho","taysmm","taiver","taiwan","tajiki","takahe","takers","taketh","taking","takins","talaje","talari","talars","talbot","talced","talcer","talcky","talcum","talent","talers","talion","talite","talked","talkee","talker","talkie","taller","talles","tallet","tallis","tallit","tallol","tallow","talmas","talmud","talons","talose","talpid","talter","taluka","taluks","taluto","talwar","talweg","tamale","tamals","tamanu","tamara","tambac","tamber","tamboo","tambor","tambur","tamein","tamely","tamers","tamest","tamias","tamine","taming","taminy","tamise","tammar","tammie","tammuz","tamoyo","tampan","tamped","tamper","tampin","tampoe","tampoy","tampon","tampur","tamure","tanach","tanaka","tanala","tanbur","tancel","tandan","tandem","tandle","tanega","tanged","tanger","tangie","tangka","tangle","tangly","tangos","tangue","tangum","tangun","tangut","tanica","tanier","taniko","tanist","tanite","tanjib","tankah","tankas","tanked","tanker","tankie","tankka","tankle","tanned","tanner","tannic","tannid","tannyl","tannin","tanoan","tanrec","tansey","tansel","tantle","tantra","tantum","tanzeb","tanzib","taoiya","taoyin","taoism","taoist","taotai","tapajo","tapalo","tapery","tapers","tapeta","tapete","tapeti","taping","tapiro","tapirs","tapism","tapist","taplet","tapnet","taposa","tapoun","tapped","tappen","tapper","tappet","tappit","tapuya","tapuyo","taqlid","tarage","tarand","taraph","tarasc","tarata","tarbet","tarble","tarboy","tarbox","tarcel","tardle","tarefa","targed","targer","targes","target","targum","taryba","tariff","taring","tariqa","tariri","tarish","tarmac","tarman","tarnal","tarocs","taroks","tarots","tarpan","tarpon","tarpot","tarpum","tarras","tarred","tarrer","tarres","tarrie","tarrow","tarsal","tarsia","tarsus","tartan","tartar","tarted","tarten","tarter","tartle","tartly","tartro","taruma","tarvia","tarzan","tasajo","tasbih","tascal","tashie","tasian","tasked","tasker","taskit","taslet","tassah","tassal","tassel","tasser","tasses","tasset","tassie","tassoo","tasted","tasten","taster","tastes","tatami","tatary","tatbeb","tatchy","taters","tatian","tatler","tatoos","tatted","tatter","tattie","tattle","tattoo","tattva","taught","taulch","taulia","taunts","taupes","taupou","tauric","taurid","tauryl","taurin","taurus","tauted","tauten","tauter","tautit","tautly","tautog","tavast","tavell","tavern","tavers","tavert","tavghi","tavola","tawdry","tawery","tawers","tawhai","tawhid","tawyer","tawing","tawite","tawkee","tawkin","tawney","tawnie","tawnle","tawpie","tawsed","tawses","tawtie","taxeme","taxers","taxied","taxies","taxine","taxing","taxite","taxman","taxmen","taxons","taxwax","tazeea","tazzas","tchast","tcheka","tchick","teaboy","teabox","teache","teachy","teacup","teagle","teague","teaing","teaish","teaism","teaman","teamed","teameo","teamer","teanal","teapoy","teapot","teared","tearer","teased","teasel","teaser","teases","teasle","teated","teathe","teazel","teazer","teazle","tebbad","tebbet","tebeth","tecali","teched","techie","techne","tecoma","tectal","tectum","tecuma","tecuna","tedded","tedder","tedium","teedle","teeing","teemed","teemer","teener","teenet","teenie","teensy","teenty","teepee","teerer","teetan","teetee","teeter","teethe","teethy","teevee","teflon","tegean","tegmen","teguas","tegula","tehsil","teihte","teiids","teinds","teioid","tejano","tekiah","tekken","tektos","telang","telary","teledu","telega","telegn","telegu","teleia","teleph","telesm","teleut","telfer","telial","telium","tellee","tellen","teller","tellin","tellus","telome","telson","telugu","temene","temiak","tempeh","temper","tempyo","temple","tempos","tempre","tempts","tempus","temser","tenace","tenacy","tenail","tenaim","tenant","tended","tender","tendon","tendre","tendry","tenent","tenets","teniae","tenias","tenino","tenner","tennis","tenons","tenore","tenors","tenour","tenpin","tenrec","tensas","tensaw","tensed","tenser","tenses","tenson","tensor","tented","tenter","tenths","tentie","tentor","tenues","tenuis","tenuit","tenure","tenury","tenuti","tenuto","tenzon","teopan","tepals","tepary","tepees","tepefy","tephra","terais","teraph","terass","terata","terbia","terbic","tercel","tercer","terces","tercet","tercia","tercio","teredo","teresa","terete","tereus","terfez","tergal","tergum","termal","terman","termed","termen","termer","termes","termin","termly","termon","termor","ternal","ternar","terned","terner","ternes","terpen","terpin","terrae","terral","terran","terrar","terras","terret","terrie","territ","terron","terror","terser","tertia","tertii","tertio","terton","teruah","tervee","terzet","terzio","tesack","teslas","tessel","testae","testao","testar","tested","testee","tester","testes","testis","teston","testor","tetany","tetard","tetchy","tether","tethys","tetrad","tetrao","tetras","tetric","tetryl","tetrix","tetrol","tetter","tettix","teucer","teucri","teufit","teuton","teviss","tewart","tewhit","tewing","tewtaw","tewter","texaco","texans","textus","thacks","thairm","thakur","thaler","thalia","thalli","thames","thamin","thamus","thanah","thanan","thanes","thanks","thapes","tharen","tharms","thatch","thatll","thawed","thawer","theave","theban","thecae","thecal","thecia","thecla","thefts","thegns","theyll","theine","theins","theyre","theirn","theirs","theism","theist","theyve","themed","themer","themes","themis","thenad","thenal","thenar","thence","thenne","theody","theory","therap","thered","theres","theria","therme","thermo","therms","theron","theses","thesis","thetas","thetch","thetic","thetin","thetis","thewed","thiasi","thibet","thible","thicke","thicky","thicks","thieve","thighs","thight","thyiad","thyine","thilly","thills","thymey","thymes","thymic","thymyl","thymin","thymol","thymus","thingy","things","thinks","thinly","thiols","thiram","thirds","thyris","thirls","thyrse","thyrsi","thirst","thirty","thisbe","thysel","thysen","thisll","thitka","thitsi","thivel","thixle","thocht","thoght","tholed","tholes","tholli","tholoi","tholos","tholus","thoman","thomas","thonga","thongy","thongs","thooid","thoral","thorax","thoria","thoric","thorny","thorns","thoron","thorpe","thorps","thoued","though","thouse","thowel","thrack","thraep","thrail","thrain","thrall","thrang","thrash","thraso","thrast","thrave","thrawn","thraws","thread","threap","threat","threep","threes","threip","threne","threpe","thresh","thrice","thrift","thrill","thrimp","thring","thrips","thrist","thrive","throat","throbs","throck","throed","throes","throne","throng","thrope","throve","thrown","throws","thrums","thrush","thrust","thsant","thuban","thuyas","thujas","thujyl","thujin","thulia","thulir","thumby","thumbs","thumps","thunar","thunge","thunor","thurgi","thurio","thurle","thurls","thurse","thurst","thushi","thusly","thwack","thwait","thwart","thwite","thworl","tiaras","tyauve","tybalt","tibbie","tibbit","tibert","tibiad","tibiae","tibial","tibias","tyburn","ticals","tichel","ticked","tickey","ticken","ticker","ticket","tickie","tickle","tickly","tycoon","tictac","tictic","tictoc","ticuna","tidbit","tydden","tidder","tyddyn","tiddle","tiddly","tidely","tydeus","tidied","tidier","tidies","tidife","tidily","tiding","tidley","tieboy","tiedog","tieing","tienda","tienta","tiento","tiepin","tierce","tiered","tierer","tiewig","tiffed","tiffie","tiffin","tiffle","tifter","tigery","tigers","tigger","tights","tiglic","tiglon","tignon","tignum","tigons","tigrai","tigris","tigtag","tyking","tikker","tikkun","tiklin","tikoor","tilaka","tilaks","tylari","tilden","tildes","tilery","tilers","tilyer","tiling","tylion","tilled","tilley","tiller","tillet","tillot","tilmus","tyloma","tylose","tylote","tilpah","tilsit","tilted","tilter","tilths","tiltup","timani","timaua","timawa","timbal","tymbal","timber","timbre","timely","timers","timias","timing","timish","timist","timmer","timote","tympan","tinage","tinaja","tincal","tincts","tindal","tinder","tineal","tinean","tineas","tineid","tinety","tinful","tinged","tinger","tinges","tingid","tingis","tingle","tingly","tinguy","tinier","tinily","tining","tyning","tinker","tinkle","tinkly","tinlet","tinman","tinmen","tinned","tinnen","tinner","tinnet","tinosa","tinpot","tinsel","tinted","tinter","tintie","tipcat","typees","tipful","tiphia","typhia","typhic","typhon","typhus","typica","typier","typify","typika","typing","typist","tipiti","tiplet","tipman","tipmen","tipoff","tiponi","tipped","tippee","tipper","tippet","tipple","tipply","tipree","tiptoe","tiptop","tipula","tipura","tirade","tirage","tyrant","tyrian","tiriba","tiring","tyring","tirled","tyroid","tyroma","tyrone","tirret","tirrit","tirwit","tisane","tishri","tissue","tystie","tiswin","titano","titans","titbit","titers","titfer","tithal","tithed","tythed","tither","tithes","tythes","titian","titien","tities","titled","titler","titles","titmal","titman","titmen","titoki","titres","titter","tittie","tittle","tittup","titule","tituli","tivoli","tizeur","tizwin","tjaele","tjandi","tmeses","tmesis","toader","toasty","toasts","toatoa","tobiah","tobias","tobies","tobine","tobira","tocher","tocome","tocsin","todays","todder","toddle","todies","toecap","toeing","toetoe","toffee","tofile","tofore","toforn","tofter","togaed","togata","togate","togged","toggel","togger","toggle","togues","tohome","toydom","toyers","toyful","toying","toyish","toiled","toiler","toiles","toilet","toyman","toymen","toyons","toyota","toised","toison","toited","toitoi","toivel","tokays","tokens","toking","tolane","tolans","toledo","tolyls","toling","tolite","tolled","toller","tollon","tolmen","tolowa","tolsey","tolsel","toltec","tolter","toluic","toluid","toluyl","toluol","tolzey","tomand","tomans","tomato","tombac","tombak","tombal","tombed","tombic","tomboy","tomcat","tomcod","toment","tomial","tomish","tomium","tomjon","tomkin","tommed","tommer","tomolo","tomorn","tompon","tomrig","tomtit","tonada","tonant","toneme","toners","tongan","tongas","tonged","tonger","tongue","tonguy","tonics","tonier","tonies","tonify","toning","tonish","tonite","tonjon","tonkin","tonlet","tonner","tonnes","tonous","tonsil","tonsor","tooart","toodle","tooken","tooled","tooler","toolsi","toolsy","toomly","toorie","tooroo","toosie","tooted","tooter","toothy","tooths","tootle","tootsy","toozle","toozoo","topass","topato","topazy","topcap","topees","topeka","topeng","topepo","topers","topful","tophes","tophet","tophus","topics","toping","topman","topmen","topnet","topped","topper","topple","topply","toques","toquet","torahs","toraja","torana","torcel","torchy","torero","torfel","torfle","torgot","tories","toryfy","tormae","tormen","tornal","torney","tornit","tornus","toroid","torose","toroth","torous","torpex","torpid","torpor","torque","torret","torrid","torsel","torses","torsks","torsos","torten","tortes","tortie","tortil","tortis","tortor","tortue","torula","toruli","torvid","tosher","toshes","toshly","tosily","tossed","tosser","tosses","tossup","tossut","tostao","toston","totals","totara","totemy","totems","totery","toters","tother","toting","totora","totoro","totted","totten","totter","tottie","tottle","tottum","touart","toucan","touche","touchy","toufic","toughy","toughs","tought","toupee","toupet","tourbe","toured","tourer","touret","tourne","tourte","toused","tousel","touser","touses","tousle","tously","touted","touter","touzle","towage","toward","towbar","towdie","towels","towery","towers","towght","towhee","towies","towing","towkay","towned","townee","towner","townet","townie","townly","towser","towson","towzie","toxify","toxine","toxins","toxity","toxoid","toxone","trabal","trabea","trabes","traced","tracey","tracer","traces","tracks","tracts","tradal","traded","trader","trades","tragal","tragia","tragic","tragus","traiky","traiks","traily","trails","trayne","trainy","trains","traist","traits","trajet","tramal","tramel","tramps","trance","tranfd","tranka","tranky","transe","transf","transl","transp","trapan","trapes","trappy","trashy","trauma","travel","traves","travis","travoy","trawls","trazia","treads","treasr","treaty","treats","treble","trebly","trefah","trefle","treget","tremex","tremie","tremor","trench","trendy","trends","trepak","trepan","trepid","treppe","treron","tresis","tressy","tretis","trevet","trevis","trevor","trewel","triace","triact","triads","triage","trials","triary","triazo","tribal","tribes","tricae","tricar","triced","trices","trichi","trichy","tricia","tricky","tricks","tricon","tricot","tridii","tridra","triduo","triene","triens","triers","trifid","trifle","trifly","trigae","trigyn","trigla","trigly","trigon","trygon","trigos","trying","trijet","triker","trikir","trilby","trilit","trilli","trillo","trills","trimer","trimly","trinal","trined","trines","tringa","trinil","trinol","triode","triole","triols","triops","triose","tryout","tripal","trypan","tripel","tripes","tripla","triple","triply","tripod","tripos","tripot","trisha","triste","tryste","trysts","trisul","triter","trityl","triton","tritor","triumf","triune","trivat","trivet","trivia","triwet","trixie","troaks","trocar","trocha","troche","trochi","trocks","troggs","trogon","trogue","troika","trojan","troked","troker","trokes","trolly","trolls","tromba","trombe","trompe","tromps","tronas","troner","trones","trooly","troops","tropal","troper","tropes","trophi","trophy","tropia","tropic","tropyl","tropin","troppo","troths","trotyl","trotol","trotty","trough","troupe","trouse","trouss","trouty","trouts","trover","troves","trowed","trowel","trowie","trowth","trpset","truant","truced","truces","trucha","trucks","truddo","trudge","truest","truffe","truing","truish","truism","trulli","trullo","trulls","truman","trumph","trumps","trunch","trunks","truong","trusty","trusts","truthy","truths","trutta","truvat","tsades","tsadik","tsadis","tsamba","tsetse","tsking","tsktsk","tsotsi","tsures","tsuris","tswana","tuareg","tubage","tubate","tubbal","tubbed","tubber","tubbie","tubboe","tubers","tubful","tubing","tublet","tubman","tubmen","tuboid","tubule","tubuli","tucana","tucano","tuchis","tuchit","tuchun","tucked","tucker","tucket","tucson","tucuma","tucuna","tuebor","tuffet","tufted","tufter","tugged","tugger","tughra","tugman","tugrik","tuyere","tuyers","tuille","tuinga","tuladi","tulare","tulasi","tulcan","tuliac","tulipa","tulipi","tulipy","tulips","tulles","tulnic","tulwar","tumain","tumbak","tumbek","tumble","tumbly","tumboa","tumefy","tumfie","tumion","tummed","tummel","tummer","tumors","tumour","tumphy","tumtum","tumuli","tumult","tunder","tundra","tundun","tunebo","tuners","tuneup","tunful","tungah","tungan","tungos","tungus","tunica","tunics","tuning","tunish","tunist","tunker","tunket","tunned","tunney","tunnel","tunner","tunnit","tunnor","tupaia","tupara","tupelo","tupian","tupiks","tuples","tupman","tupmen","tupped","tupuna","tuques","turaco","turban","turbeh","turbid","turbit","turble","turbos","turbot","turcic","turdus","tureen","turfed","turfen","turgid","turgor","turing","turion","turkey","turken","turkic","turkis","turkle","turmet","turmit","turmut","turned","turney","turnel","turner","turnip","turnix","turnor","turnup","turpid","turpis","turrel","turret","turrum","tursha","tursio","turtan","turtle","turtur","tururi","turves","turwar","tuscan","tusche","tushed","tusher","tushes","tushie","tuskar","tusked","tusker","tussah","tussal","tussar","tusseh","tusser","tussis","tussle","tussor","tussur","tutees","tutela","tutele","tutelo","tutler","tutman","tutmen","tutory","tutors","tutrix","tutsan","tutted","tuttis","tuxedo","tuzzle","twaddy","twains","twaite","twangy","twangs","twanky","twarly","twazzy","tweaky","tweaks","tweedy","tweeds","tweeny","tweese","tweesh","tweest","tweets","tweeze","twelve","twenty","twerps","twibil","twicer","twicet","twiers","twyers","twiggy","twilit","twilly","twills","twined","twiner","twines","twinge","twinly","twirly","twirls","twirps","twisel","twisty","twists","twitch","twitty","twyver","twofer","tzetse","tzetze","tzuris","uakari","ubangi","uberty","ubiety","ubique","ubound","ubussu","uchean","uckers","ucuuba","udaler","udders","uganda","ughten","uglier","uglify","uglily","ugrian","ugroid","ugsome","uhlans","uighur","uirina","ukases","ukiyoe","ulamas","ulaula","ulcery","ulcers","ulemas","uletic","ulicon","ulidia","ulitis","ullage","ulling","ulluco","ullucu","ulmate","ulmous","ulnage","ulnare","ulster","ultima","ultime","ultimo","ultion","ultras","umbels","umbers","umbles","umbone","umbrae","umbral","umbras","umbrel","umbret","umbril","umfaan","umgang","umiack","umiacs","umiaks","umiaqs","umland","umlaut","umload","umping","umpire","umpqua","umteen","unable","unably","unaged","unakin","unarch","unarms","unavid","unaway","unawed","unaxed","unbain","unbait","unbale","unbane","unbank","unbarb","unbare","unbark","unbars","unbase","unbear","unbell","unbelt","unbend","unbent","unbias","unbind","unbitt","unbled","unboat","unbody","unbold","unbolt","unbone","unboot","unborn","unbran","unbred","unbung","unbury","unburn","unbush","unbusy","unbusk","uncage","uncake","uncalk","uncall","uncalm","uncamp","uncaps","uncart","uncase","uncask","uncast","uncate","uncave","unchic","unchid","unciae","uncial","uncini","uncite","uncity","unclad","unclay","uncles","unclew","unclip","unclog","unclot","unclub","uncoat","uncock","uncoft","uncoif","uncoil","uncoin","uncoly","uncolt","uncome","uncool","uncoop","uncope","uncord","uncore","uncork","uncost","uncous","uncowl","uncram","uncrib","uncurb","uncurd","uncurl","uncute","uncuth","undamn","undark","undate","undaub","undead","undeaf","undean","undear","undeck","undeep","undeft","undern","undewy","undyed","undies","undine","undirk","undock","undoer","undoes","undone","undose","undrab","undrag","undraw","undrew","unduke","unduly","undull","undure","undust","unduty","unease","uneasy","uneath","unedge","unegal","uneyed","unempt","unepic","unesco","uneven","unevil","unface","unfact","unfain","unfair","unfast","unfeed","unfeel","unfele","unfelt","unfile","unfill","unfilm","unfine","unfirm","unfits","unfixt","unflag","unflat","unfold","unfond","unfool","unfork","unform","unfoul","unfoxy","unfree","unfret","unfull","unfurl","ungain","ungamy","ungaro","ungear","ungelt","ungift","ungild","ungill","ungilt","ungird","ungirt","ungive","ungyve","unglad","unglee","unglib","unglue","ungnaw","ungold","ungone","ungood","ungown","ungrid","ungrip","ungrow","ungual","ungues","unguis","ungula","ungull","ungulp","unhaft","unhair","unhale","unhand","unhang","unhard","unhasp","unhate","unhats","unhave","unhazy","unhead","unheal","unheed","unheld","unhele","unhelm","unhelp","unhent","unherd","unhero","unhewn","unhide","unhigh","unhive","unhoed","unhold","unholy","unhome","unhood","unhook","unhoop","unhope","unhose","unhued","unhull","unhung","unhurt","unhusk","uniate","unible","uniced","unicef","unicum","unidle","unidly","unific","unioid","unyoke","uniola","unions","uniped","unipod","unique","unisex","unison","unital","united","uniter","unites","unjoin","unjust","unkend","unkent","unkept","unkill","unkind","unking","unkink","unkirk","unkiss","unkist","unknew","unknit","unknot","unknow","unlace","unlade","unlaid","unlays","unlame","unland","unlash","unlath","unlead","unleaf","unleal","unlean","unleft","unlent","unless","unlike","unlimb","unlime","unlimp","unline","unlink","unlist","unlive","unload","unlock","unlook","unloop","unlord","unlost","unlove","unluck","unlush","unlust","unlute","unmade","unmaid","unmail","unmake","unmans","unmask","unmast","unmate","unmaze","unmeek","unmeet","unmelt","unmesh","unmete","unmeth","unmews","unmild","unmind","unmiry","unmist","unmixt","unmold","unmoor","unmown","unnail","unname","unnapt","unnear","unneat","unness","unnest","unneth","unnice","unnigh","unnose","unoily","unoped","unopen","unoral","unowed","unpack","unpaid","unpale","unpark","unpass","unpave","unpawn","unpeel","unpegs","unpens","unpent","unpick","unpile","unpins","unpity","unplan","unplat","unplow","unplug","unpope","unpray","unprim","unprop","unpuff","unpure","unquit","unquod","unrack","unrake","unrank","unrare","unrash","unread","unreal","unreel","unrein","unrent","unrest","unrich","unride","unrife","unrigs","unrind","unring","unripe","unrips","unrobe","unroll","unroof","unroot","unrope","unrout","unrove","unrude","unrued","unrufe","unrule","unruly","unrung","unrust","unruth","unsack","unsafe","unsage","unsaid","unsays","unsalt","unsame","unsane","unsash","unsawn","unseal","unseam","unseat","unseel","unseen","unself","unsely","unsell","unsent","unsere","unsets","unsewn","unsews","unshed","unship","unshod","unshoe","unshop","unshot","unshut","unsick","unsing","unskin","unslim","unslip","unslit","unslot","unslow","unsmug","unsnap","unsnib","unsnow","unsnug","unsoft","unsoil","unsold","unsole","unsome","unsoot","unsore","unsort","unsoul","unsour","unsown","unspan","unspar","unsped","unspin","unspit","unspot","unspun","unstar","unstep","unstop","unstow","unsued","unsuit","unsung","unsunk","unsure","untack","untall","untame","untaut","unteam","unteem","untell","untent","unthaw","untidy","untied","unties","untile","untill","untilt","untime","untine","untipt","untire","untold","untomb","untone","untorn","untown","untrig","untrim","untrod","untrue","untuck","untune","unturf","unturn","unugly","unured","unused","unvain","unveil","unvest","unvext","unvoid","unvote","unwall","unware","unwary","unwarm","unwarn","unwarp","unweal","unweel","unweft","unweld","unwell","unwept","unwhig","unwhip","unwild","unwily","unwill","unwind","unwink","unwire","unwise","unwish","unwist","unwits","unwive","unwomb","unwont","unwoof","unwork","unworn","unwove","unwrap","unwrit","unzips","unzone","uparch","uparna","upases","upband","upbank","upbear","upbeat","upbelt","upbend","upbind","upblow","upboil","upbolt","upbore","upbray","upbred","upbrim","upbrow","upbuoy","upburn","upcall","upcard","upcast","upcity","upcock","upcoil","upcome","upcrop","upcurl","updart","update","updeck","updive","updome","updove","updrag","updraw","upends","upfeed","upfill","upflee","upflow","upfold","upfurl","upgale","upgang","upgape","upgaze","upgird","upgirt","upgive","upgrew","upgrow","upgush","uphale","uphand","uphang","uphasp","upheal","upheap","upheld","uphelm","uphill","uphold","uphove","uphroe","uphung","uphurl","upyard","upyoke","upjerk","upkeep","upknit","uplaid","uplake","upland","uplane","uplead","uplean","upleap","uplick","uplift","uplimb","upline","uplink","upload","uplock","uplong","uplook","uploom","uploop","upmast","upmost","upmove","upness","uppard","uppbad","uppent","uppers","uppile","upping","uppish","uppity","upplow","uppour","upprop","uppuff","uppull","uppush","uprear","uprein","uprend","uprest","uprise","uprist","uprive","uproad","uproar","uproom","uproot","uprose","uprush","upseal","upseek","upsend","upsent","upsets","upshot","upshut","upside","upskip","upslip","upsoak","upsoar","upspew","upspin","upstay","upstem","upstep","upstir","upsuck","upsway","uptake","uptear","uptend","uptide","uptill","uptilt","uptime","uptore","uptorn","uptoss","uptown","uptree","uptube","uptuck","upturn","upwaft","upways","upwall","upward","upwarp","upwell","upwent","upwhir","upwind","upwith","upwork","upwrap","uracil","uraeus","uralic","uramil","urania","uranic","uranyl","uranin","uranus","urares","uraris","urases","urates","uratic","urazin","urbana","urbane","urbian","urbify","urceus","urchin","urease","uredia","uredos","ureide","ureido","uremia","uremic","uresis","uretal","ureter","uretic","urgent","urgers","urging","urheen","urinal","urines","urling","urluch","urnful","urning","urnism","urochs","uronic","urophi","uropod","urosis","uroxin","ursine","ursoid","ursone","ursula","urtext","urtica","urtite","urucum","uruisg","uruses","urushi","usable","usably","usager","usages","usance","usaron","usedly","usednt","useful","usenet","usheen","ushers","usings","uskara","usneas","uspoke","usques","usself","ussels","ustion","usuals","usuary","usurer","usurps","usward","utahan","uterus","utible","utinam","utmost","utopia","utrubi","utters","uvalha","uvella","uveous","uvitic","uvulae","uvular","uvulas","uxoris","uzarin","uzaron","vaadim","vacant","vacate","vacona","vacoua","vacouf","vacual","vacuit","vacuua","vacuum","vadium","vadose","vagant","vagary","vagile","vagina","vagous","vagrom","vaguer","vaguio","vahana","vahine","vahini","vaidic","vailed","vainer","vainly","vairee","vaisya","vakass","vakeel","vakils","valens","valent","valeta","valets","valeur","valewe","valgus","valine","valise","valium","valkyr","vallar","valley","vallis","vallum","valois","valors","valour","valses","valued","valuer","values","valure","valuta","valvae","valval","valvar","valved","valves","vamose","vamped","vampey","vamper","vamure","vandal","vandas","vangee","vanglo","vanish","vanist","vanity","vanlay","vanman","vanmen","vannai","vanned","vanner","vannet","vannic","vannus","vapory","vapors","vapour","varech","variac","variag","varied","varier","varies","varify","varing","varios","varkas","varlet","varnas","varsal","varsha","varuna","varved","varvel","varves","vascla","vascon","vassal","vassar","vassos","vaster","vastly","vastus","vatful","vatman","vatted","vatter","vaughn","vaulty","vaults","vaunce","vaunty","vaunts","vaward","veadar","vealed","vealer","vectis","vector","vedaic","vedana","vedika","vedism","vedist","veduis","veenas","veepee","veered","vegans","vegete","vehmic","veigle","veiled","veiler","veinal","veined","veiner","velary","velars","velate","velcro","veldts","veleta","velika","vellon","vellum","veloce","velour","velout","velure","velvet","venada","vended","vendee","vender","vendis","vendor","vendue","veneer","venene","venere","venery","venero","veneti","veneur","venged","venger","venges","venial","veniam","venice","venine","venins","venire","venise","venite","venlin","vennel","venner","venomy","venoms","venose","venous","vented","venter","ventil","ventin","ventoy","venues","venula","venule","venust","verbal","verbid","verbum","verdea","verdet","verdin","verdoy","verdun","verged","verger","verges","verier","verify","verily","verine","verism","verist","verite","verity","vermes","vermil","vermin","vermis","vermix","vernal","vernin","vernix","vernon","verona","verray","verrel","versal","versed","verser","verses","verset","versin","versor","versos","versta","verste","versts","versus","vertep","vertex","vertus","veruta","vervel","verver","verves","vervet","vesica","veskit","vespal","vesper","vespid","vessel","vesses","vestal","vestas","vested","vestee","vester","vestry","vetchy","vetoed","vetoer","vetoes","vetted","vetust","vexers","vexful","vexils","vexing","viable","viably","vialed","viande","viands","viasma","viatic","viator","vibist","vibrio","vicara","vicary","vicars","vicety","vicine","vicing","vickie","victal","victim","victor","victus","vicuda","vicuna","vidame","viddui","vidduy","videos","vidian","vidkid","vidual","vielle","vienna","viewed","viewer","viewly","viggle","vigias","vigils","vignin","vigone","vigors","vigour","vihara","viking","vildly","vilela","vilely","vilest","vilify","vility","villae","villan","villar","villas","villus","vimana","vimful","vimina","vinage","vinals","vinata","vincas","vindex","vineae","vineal","vinery","vinier","vinyls","vining","vinyon","vinose","vinous","vintem","vinter","vintry","violal","violan","violas","violer","violet","violin","violon","vipera","vipery","vipers","virago","virent","vireos","virgal","virgas","virger","virgil","virgin","virgos","virial","virify","virile","virion","virled","vyrnwy","virole","virose","virous","virtue","virtus","visaed","visage","visaya","visard","viscid","viscin","viscum","viscus","viseed","vishal","vishnu","visier","visile","vising","vision","visita","visite","visits","visive","visney","visory","visors","vistal","vistas","visual","vitals","vitial","vitita","vitium","vitric","vitrum","vittae","vittle","vivace","vivant","vivary","vively","vivers","viveur","vivian","vivify","vivres","vixens","vizard","vizier","vizirs","vizors","vizsla","vmsize","vocals","vocate","vocoid","vocule","vodkas","vodums","voeten","voguey","vogues","voyage","voiced","voicer","voices","voided","voidee","voider","voidly","voyeur","voiles","voivod","volage","volans","volant","volary","volata","volcae","volcan","volens","volent","volery","volyer","voling","volley","volost","volsci","voltes","volume","volupt","voluta","volute","volvas","volvox","vomers","vomica","vomity","vomito","vomits","voodoo","vorage","vorago","vorant","vorpal","vortex","votary","voteen","voters","votyak","voting","votish","votist","votive","voulge","vousty","vowely","vowels","vowers","vowess","vowing","vowson","vrille","vrocht","vrooms","vrouws","vucoms","vulcan","vulgar","vulgus","vulned","vulpes","vulpic","vultur","vulvae","vulval","vulvar","vulvas","wabayo","wabber","wabble","wabbly","wabena","wabeno","wabron","wabuma","wacago","wachna","wacken","wacker","wackes","wadded","wadder","waddie","waddle","waddly","waders","wadies","wading","wadmal","wadmel","wadmol","wadset","waeful","wafery","wafers","waffed","waffie","waffle","waffly","waflib","wafted","wafter","wagang","wagati","wagaun","wagers","wagged","waggel","wagger","waggie","waggle","waggly","waggon","waging","wagner","wagogo","wagoma","wagons","waguha","wagwag","wagwit","wahabi","wahahe","wahehe","wahima","wahine","wahoos","wahwah","wayaka","wayang","waiata","waifed","waying","waikly","waylay","wailed","wailer","wayman","waymen","wainer","wairch","waired","wairsh","waists","waited","waiter","waived","waiver","waives","waivod","waiwai","wajang","wakari","wakeel","wakens","wakers","wakeup","wakiki","waking","wakiup","wakken","wakore","walach","walers","walies","waling","walked","walker","walkie","walkup","wallah","wallas","walled","waller","wallet","wallie","wallon","wallop","wallow","walnut","walrus","walter","wamara","wamble","wambly","wamefu","wamfle","wammus","wampee","wample","wampum","wampus","wander","wandle","wandoo","wanely","wangan","wanger","wangle","wangun","wanhap","wanier","waning","wanion","wankel","wanker","wankle","wankly","wanlas","wanmol","wanned","wanner","wanted","wanter","wanton","wanwit","wapata","wapato","wapiti","wapped","wapper","wappet","warabi","waragi","warble","warbly","warday","warded","warden","warder","warely","warful","wargus","waried","warier","warily","warine","waring","warish","warked","warlow","warman","warmed","warmen","warmer","warmly","warmth","warmup","warmus","warned","warnel","warner","warori","warped","warper","warple","warray","warran","warrau","warred","warree","warren","warrer","warrin","warryn","warrok","warrty","warsaw","warsel","warsle","warted","wasabi","washed","washen","washer","washes","washin","washup","wasoga","waspen","wassie","wasted","wastel","waster","wastes","wastme","wastry","watala","watape","wataps","watery","waters","watfiv","wather","watson","watter","wattis","wattle","watusi","wauble","waucht","waufie","waughy","waught","wauked","wauken","waukit","wauled","waumle","wauner","waveys","wavery","wavers","wavier","wavies","wavily","waving","wavira","wawled","waxand","waxers","waxhaw","waxier","waxily","waxing","waxman","weaken","weaker","weakly","wealds","wealth","weaned","weanel","weaner","weanie","weanly","weanoc","weapon","weared","wearer","weasel","weaser","weason","weaved","weaver","weaves","weazen","webbed","webber","webeye","webers","webfed","wecche","wechts","wedana","wedbed","wedded","wedder","wedeln","wedels","wedfee","wedged","wedger","wedges","wedgie","wedset","weeble","weeded","weeder","weedow","weekly","weemen","weened","weenie","weensy","weenty","weeped","weeper","weeply","weeshy","weeted","weever","weevil","weewaw","weewee","weewow","weezle","wefted","wehner","weighs","weight","weiner","weirdy","weirdo","weirds","wejack","wekeen","welded","welder","weldor","welfic","welkin","wellat","welled","weller","welshy","welsom","welted","welter","wended","wendic","weneth","wentle","wenzel","wepman","werent","wergil","wering","werner","werste","wervel","weskit","wesley","wessel","wester","westme","wether","wetted","wetter","whabby","whacky","whacks","whaled","whaler","whales","whally","whammy","whammo","whangs","wharfe","wharfs","wharry","wharve","whasle","whatna","whatre","whatso","whaups","whauve","whealy","wheals","wheaty","wheats","wheely","wheels","wheens","wheeps","wheeze","wheezy","wheyey","whekau","whelky","whelks","whelms","whelps","whelve","whenas","whence","whenso","whered","wheres","wherry","wherve","whewer","whidah","whydah","whiffy","whiffs","whyfor","whiled","whiley","whiles","whilie","whilly","whilom","whilst","whimmy","whimsy","whined","whiney","whiner","whines","whinge","whinny","whippa","whippy","whirly","whirls","whirry","whirrs","whisht","whisky","whisks","whists","whited","","whiten","whiter","whites","whitin","wholes","wholly","whomps","whomso","whoope","whoops","whoosh","whoosy","whored","whores","whorle","whorly","whorls","whorry","whorts","whosen","whosis","whumps","wibble","wiches","wyches","wicked","wicken","wicker","wicket","wickup","wicopy","widbin","widder","widdie","widdle","widely","widens","widest","widget","widgie","widish","widowy","widows","widths","wieldy","wields","wiener","wienie","wifely","wifing","wifish","wifock","wigans","wigdom","wigeon","wigful","wigged","wiggen","","wiggle","wiggly","wigher","wights","wiglet","wigwag","wigwam","wikeno","wiking","wikiup","wilbur","wilded","wilder","wildly","wilful","wilier","wilily","wiling","wyling","wilkin","willed","willey","willer","willes","willet","willie","willow","wilmer","wilson","wilted","wilter","wilton","wimble","wimick","wymote","wimple","winare","winced","wincey","wincer","winces","windas","winded","windel","winder","windle","window","windup","winery","winers","winful","winged","winger","wingle","winier","wining","winish","winked","winkel","winker","winkle","winned","winnel","winner","winnie","winnle","winnow","winoes","winona","wynris","winrow","winter","wintle","wintry","wintun","winzes","wipers","wiping","wippen","wirble","wirers","wirier","wirily","wiring","wyrock","wirrah","wisdom","wisely","wisent","wisest","wished","wisher","wishes","wishly","wising","wisket","wisped","wissed","wissel","wisses","wisshe","wissle","wisted","wister","wistit","wistly","wisure","witchy","witess","witful","withal","witham","withed","withen","wither","withes","within","witing","wyting","witjar","witlet","witney","witoto","wittal","witted","witten","witter","wittol","wivern","wyvern","wivers","wiving","wizard","wizens","wizier","wizzen","wlench","woaded","woader","woalds","wobble","wobbly","wochua","woddie","woeful","woggle","wogiet","wohlac","woidre","woilie","wokowi","woldes","woleai","wolfed","wolfen","wolfer","wollop","wolter","wolver","wolves","womans","wombat","wombed","womble","womera","wonder","wondie","wongah","wongen","woning","wonned","wonner","wonnot","wonted","wonton","wooded","wooden","woodie","woodly","woodoo","woodsy","wooers","woofed","woofer","woohoo","wooing","wooled","woolen","wooler","woolie","woolly","woolwa","woomer","woozle","worble","worded","worden","worder","wordle","worked","worker","workup","worldy","worlds","wormed","wormer","wormil","wornil","worral","worrel","worrit","worsen","worser","worses","worset","worsle","worsts","worsum","worthy","worths","wortle","wosith","wosome","wotted","woubit","wouldn","woulfe","woundy","wounds","wovoka","wowing","wowser","wrabbe","wracks","wrager","wraist","wraith","wraker","wrangs","wranny","wraple","wrapup","wrasse","wrathy","wraths","wraxle","wreaks","wreath","wrecky","wrecks","wrench","wrests","wretch","wrible","wricht","wriest","wryest","wright","wrihte","wrying","wrings","wristy","wrists","writee","writer","writes","writhe","writhy","wrixle","wrocht","wroken","wrongs","wrothe","wrothy","wuddie","wulder","wullie","wumble","wumman","wummel","wungee","wunner","wuntee","wurley","wurmal","wurrup","wurrus","wurset","wursts","wurzel","wusser","wuther","wuzzer","wuzzle","xarque","xebecs","xenial","xenian","xenias","xenium","xenomi","xenons","xeriff","xeroma","xylans","xylate","xylems","xylene","xylyls","xylina","xylite","xyloid","xyloyl","xylols","xyloma","xylose","xyster","xystoi","xystos","xystum","xystus","xmases","xoanon","zabeta","zabian","zabism","zabtie","zacate","zachun","zaddik","zaffar","zaffer","zaffir","zaffre","zafree","zaftig","zagaie","zagged","zaguan","zayins","zaires","zaitha","zakkeu","zamang","zambac","zambal","zambia","zambra","zamias","zanana","zander","zaniah","zanier","zanies","zanily","zanjon","zanzas","zapara","zaparo","zapota","zapote","zapped","zapupe","zaqqum","zaramo","zareba","zarema","zariba","zarnec","zaurak","zazens","zealed","zealot","zeatin","zebeck","zebecs","zebras","zechin","zeekoe","zeguha","zehner","zeidae","zelant","zenaga","zenana","zendic","zendik","zendos","zenick","zenith","zephyr","zequin","zereba","zeroed","zeroes","zeroth","zested","zeugma","ziamet","ziarat","zibeth","zibets","ziczac","zydeco","zieger","zigged","zigger","zygion","zygite","zygoid","zygoma","zygose","zygote","zygous","zigzag","zillah","zilpah","zymase","zymite","zimmis","zymoid","zymome","zinced","zincic","zincid","zincke","zincky","zincum","zindiq","zinebs","zinged","zingel","zinger","zinked","zinnia","zinzar","zipped","zipper","zirams","zircon","zirian","zyrian","zyryan","zythem","zither","zythia","zythum","zitter","zitzit","zizany","zizith","zizzle","zlotys","zoacum","zoaria","zocalo","zodiac","zoetic","zoftig","zoilus","zoysia","zombie","zombis","zonary","zonate","zoners","zoning","zonite","zonked","zonnar","zonoid","zonula","zonule","zonure","zooids","zoomed","zoonal","zoonic","zoosis","zooter","zootic","zoozoo","zorils","zoster","zouave","zounds","zufolo","zuisin","zunian","zurich"],
        Ia = "present",
        Ma = "correct",
        Oa = "absent";
    var Ra = {
        unknown: 0,
        absent: 1,
        present: 2,
        correct: 3
    };
    function Pa(e, a) {
        var s = {};
        return e.forEach((function(e, t) {
            if (a[t])
                for (var o = 0; o < e.length; o++) {
                    var n = e[o],
                        r = a[t][o],
                        i = s[n] || "unknown";
                    Ra[r] > Ra[i] && (s[n] = r)
                }
        })), s
    }
    function $a(e) {
        var a = ["th", "st", "nd", "rd"],
            s = e % 100;
        return e + (a[(s - 20) % 10] || a[s] || a[0])
    }
    var Ha = new Date(2021, 5, 19, 0, 0, 0, 0);
    function Na(e, a) {
        var s = new Date(e),
            t = new Date(a).setHours(0, 0, 0, 0) - s.setHours(0, 0, 0, 0);
        return Math.round(t / 864e5)
    }
    function Da(e) {
        var a,
            s = Ga(e);
        return a = s % La.length, La[a]
    }
    function Ga(e) {
        return Na(Ha, e)
    }
    var Ba = "abcdefghijklmnopqrstuvwxyz",
        Fa = [].concat(g(Ba.split("").slice(13)), g(Ba.split("").slice(0, 13)));
    function Wa(e) {
        for (var a = "", s = 0; s < e.length; s++) {
            var t = Ba.indexOf(e[s]);
            a += t >= 0 ? Fa[t] : "_"
        }
        return a
    }
    var Ya = "statistics",
        Ja = "fail",
        Ua = {
            currentStreak: 0,
            maxStreak: 0,
            guesses: n({
                1: 0,
                2: 0,
                3: 0,
                4: 0,
                5: 0,
                6: 0
            }, Ja, 0),
            winPercentage: 0,
            gamesPlayed: 0,
            gamesWon: 0,
            averageGuesses: 0
        };
    function Xa() {
        var e = window.localStorage.getItem(Ya) || JSON.stringify(Ua);
        return JSON.parse(e)
    }
    function Va(e) {
        var a = e.isWin,
            s = e.isStreak,
            t = e.numGuesses,
            o = Xa();
        a ? (o.guesses[t] += 1, s ? o.currentStreak += 1 : o.currentStreak = 1) : (o.currentStreak = 0, o.guesses.fail += 1),
        o.maxStreak = Math.max(o.currentStreak, o.maxStreak),
        o.gamesPlayed += 1,
        o.gamesWon += a ? 1 : 0,
        o.winPercentage = Math.round(o.gamesWon / o.gamesPlayed * 100),
        o.averageGuesses = Math.round(Object.entries(o.guesses).reduce((function(e, a) {
            var s = y(a, 2),
                t = s[0],
                o = s[1];
            return t !== Ja ? e += t * o : e
        }), 0) / o.gamesWon),
        function(e) {
            window.localStorage.setItem(Ya, JSON.stringify(e))
        }(o)
    }
    var Ka = document.createElement("template");
    Ka.innerHTML = "\n  <style>\n  .toaster {\n    position: absolute;\n    top: 10%;\n    left: 50%;\n    transform: translate(-50%, 0);\n    pointer-events: none;\n    width: fit-content;\n  }\n  #game-toaster {\n    z-index: ".concat(1e3, ";\n  }\n  #system-toaster {\n    z-index: ").concat(4e3, ';\n  }\n\n  #game {\n    width: 100%;\n    max-width: var(--game-max-width);\n    margin: 0 auto;\n    height: 100%;\n    display: flex;\n    flex-direction: column;\n  }\n  header {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    height: var(--header-height);\n    color: var(--color-tone-1);\n    border-bottom: 1px solid var(--color-tone-4);\n  }\n  header .title {\n    font-weight: 700;\n    font-size: 36px;\n    letter-spacing: 0.2rem;\n    text-transform: uppercase;\n    text-align: center;\n    position: absolute;\n    left: 0;\n    right: 0;\n    pointer-events: none;\n  }\n\n  @media (max-width: 360px) {\n    header .title {\n      font-size: 22px;\n      letter-spacing: 0.1rem;\n    }\n  }\n\n  #board-container {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-grow: 1;\n    overflow: hidden;\n  }\n  #board {\n    display: grid;\n    grid-template-rows: repeat(6, 1fr);\n    grid-gap: 5px;\n    padding:10px;\n    box-sizing: border-box;\n  }\n  button.icon {\n    background: none;\n    border: none;\n    cursor: pointer;\n    padding: 0 4px;\n  }\n\n  #debug-tools {\n    position: absolute;\n    bottom: 0;\n  }\n\n  </style>\n  <game-theme-manager>\n    <div id="game">\n      <header>\n        <div class="menu">\n          <button id="help-button" class="icon" aria-label="help">\n            <game-icon icon="help"></game-icon>\n          </button>\n        </div>\n        <div class="title">\n         TURTLE\n        </div>\n        <div class="menu">\n          <button id="statistics-button" class="icon" aria-label="statistics">\n            <game-icon icon="statistics"></game-icon>\n          </button>\n          <button id="settings-button" class="icon" aria-label="settings">\n            <game-icon icon="settings"></game-icon>\n          </button>\n        </div>\n      </header>\n        <div id="board-container">\n          <div id="board"></div>\n        </div>\n        <game-keyboard></game-keyboard>\n        <game-modal></game-modal>\n        <game-page></game-page>\n        <div class="toaster" id="game-toaster"></div>\n        <div class="toaster" id="system-toaster"></div>\n    </div>\n  </game-theme-manager>\n  <div id="debug-tools"></div>\n');
    var Qa = document.createElement("template");
    Qa.innerHTML = '\n<button id="reveal">reveal</button>\n<button id="shake">shake</button>\n<button id="bounce">bounce</button>\n<button id="toast">toast</button>\n<button id="modal">modal</button>\n';
    var numberCells = 6; // this._length inaccessible here. possibly intentional data model choice but they should match
    var Za = "IN_PROGRESS",
        es = "WIN",
        as = "FAIL",
        ss = ["Genius 🐢", "Magnificent 🐢", "Impressive 🐢", "Splendid 🐢", "Great 🐢", "Phew 🐢"],
        ts = function(e) {
            r(t, e);
            var a = h(t);
            function t() {
                var e;
                s(this, t),
                n(p(e = a.call(this)), "tileIndex", 0),
                n(p(e), "rowIndex", 0),
                n(p(e), "solution", void 0),
                n(p(e), "boardState", void 0),
                n(p(e), "evaluations", void 0),
                n(p(e), "canInput", !0),
                n(p(e), "gameStatus", Za),
                n(p(e), "letterEvaluations", {}),
                n(p(e), "$board", void 0),
                n(p(e), "$keyboard", void 0),
                n(p(e), "$game", void 0),
                n(p(e), "today", void 0),
                n(p(e), "lastPlayedTs", void 0),
                n(p(e), "lastCompletedTs", void 0),
                n(p(e), "hardMode", void 0),
                n(p(e), "dayOffset", void 0),
                e.attachShadow({
                    mode: "open"
                }),
                e.today = new Date;
                var o = za();
                return e.lastPlayedTs = o.lastPlayedTs, !e.lastPlayedTs || Na(new Date(e.lastPlayedTs), e.today) >= 1 ? (e.boardState = new Array(6).fill(""), e.evaluations = new Array(6).fill(null), e.solution = Da(e.today), e.dayOffset = Ga(e.today), e.lastCompletedTs = o.lastCompletedTs, e.hardMode = o.hardMode, e.restoringFromLocalStorage = !1, ja({
                    rowIndex: e.rowIndex,
                    boardState: e.boardState,
                    evaluations: e.evaluations,
                    solution: e.solution,
                    gameStatus: e.gameStatus
                }), Ca("event", "level_start", {
                    level_name: Wa(e.solution)
                })) : (e.boardState = o.boardState, e.evaluations = o.evaluations, e.rowIndex = o.rowIndex, e.solution = o.solution, e.dayOffset = Ga(e.today), e.letterEvaluations = Pa(e.boardState, e.evaluations), e.gameStatus = o.gameStatus, e.lastCompletedTs = o.lastCompletedTs, e.hardMode = o.hardMode, e.gameStatus !== Za && (e.canInput = !1), e.restoringFromLocalStorage = !0), e
            }
            return o(t, [{
                key: "evaluateRow",
                value: function() {
                    console.log(this.boardState);
                    if (numberCells === this.tileIndex && !(this.rowIndex >= 6)) {
                        var e,
                            a = this.$board.querySelectorAll("game-row")[this.rowIndex],
                            s = this.boardState[this.rowIndex];
                        if (e = s, !Ta.includes(e) && !La.includes(e))
                            return a.setAttribute("invalid", ""), void this.addToast("Not in word list");
                        if (this.hardMode) {
                            var t = function(e, a, s) {
                                    if (!e || !a || !s)
                                        return {
                                            validGuess: !0
                                        };
                                    for (var t = 0; t < s.length; t++)
                                        if (s[t] === Ma && e[t] !== a[t])
                                            return {
                                                validGuess: !1,
                                                errorMessage: "".concat($a(t + 1), " letter must be ").concat(a[t].toUpperCase())
                                            };
                                    for (var o = {}, n = 0; n < s.length; n++)
                                        [Ma, Ia].includes(s[n]) && (o[a[n]] ? o[a[n]] += 1 : o[a[n]] = 1);
                                    var r = e.split("").reduce((function(e, a) {
                                        return e[a] ? e[a] += 1 : e[a] = 1, e
                                    }), {});
                                    for (var i in o)
                                        if ((r[i] || 0) < o[i])
                                            return {
                                                validGuess: !1,
                                                errorMessage: "Guess must contain ".concat(i.toUpperCase())
                                            };
                                    return {
                                        validGuess: !0
                                    }
                                }(s, this.boardState[this.rowIndex - 1], this.evaluations[this.rowIndex - 1]),
                                o = t.validGuess,
                                n = t.errorMessage;
                            if (!o)
                                return a.setAttribute("invalid", ""), void this.addToast(n || "Not valid in hard mode")
                        }
                        var r = function(e, a) {
                            for (var s = Array(a.length).fill(Oa), t = Array(a.length).fill(!0), o = Array(a.length).fill(!0), n = 0; n < e.length; n++)
                                e[n] === a[n] && o[n] && (s[n] = Ma, t[n] = !1, o[n] = !1);
                            for (var r = 0; r < e.length; r++) {
                                var i = e[r];
                                if (t[r])
                                    for (var l = 0; l < a.length; l++) {
                                        var d = a[l];
                                        if (o[l] && i === d) {
                                            s[r] = Ia,
                                            o[l] = !1;
                                            break
                                        }
                                    }
                            }
                            return s
                        }(s, this.solution);
                        this.evaluations[this.rowIndex] = r,
                        this.letterEvaluations = Pa(this.boardState, this.evaluations),
                        a.evaluation = this.evaluations[this.rowIndex],
                        this.rowIndex += 1;
                        var i = this.rowIndex >= 6,
                            l = r.every((function(e) {
                                return "correct" === e
                            }));
                        if (i || l)
                            Va({
                                isWin: l,
                                isStreak: !!this.lastCompletedTs && 1 === Na(new Date(this.lastCompletedTs), new Date),
                                numGuesses: this.rowIndex
                            }),
                            ja({
                                lastCompletedTs: Date.now()
                            }),
                            this.gameStatus = l ? es : as,
                            Ca("event", "level_end", {
                                level_name: Wa(this.solution),
                                num_guesses: this.rowIndex,
                                success: l
                            });
                        this.tileIndex = 0,
                        this.canInput = !1,
                        ja({
                            rowIndex: this.rowIndex,
                            boardState: this.boardState,
                            evaluations: this.evaluations,
                            solution: this.solution,
                            gameStatus: this.gameStatus,
                            lastPlayedTs: Date.now()
                        })
                    }
                }
            }, {
                key: "addLetter",
                value: function(e) {
                    this.gameStatus === Za && 
                    (this.canInput && 
                        (this.tileIndex >= numberCells || 
                            (this.boardState[this.rowIndex] += e, this.$board.querySelectorAll("game-row")[this.rowIndex].setAttribute("letters", this.boardState[this.rowIndex]), this.tileIndex += 1)
                            ))
                }
            }, {
                key: "removeLetter",
                value: function() {
                    if (this.gameStatus === Za && this.canInput && !(this.tileIndex <= 0)) {
                        this.boardState[this.rowIndex] = this.boardState[this.rowIndex].slice(0, this.boardState[this.rowIndex].length - 1);
                        var e = this.$board.querySelectorAll("game-row")[this.rowIndex];
                        this.boardState[this.rowIndex] ? e.setAttribute("letters", this.boardState[this.rowIndex]) : e.removeAttribute("letters"),
                        e.removeAttribute("invalid"),
                        this.tileIndex -= 1
                    }
                }
            }, {
                // AH HA
                key: "submitGuess",
                value: function() {
                    if (this.gameStatus === Za && this.canInput) {
                        if (numberCells !== this.tileIndex)
                            return this.$board.querySelectorAll("game-row")[this.rowIndex].setAttribute("invalid", ""), void this.addToast("Not enough letters");
                        this.evaluateRow()
                    }
                }
            }, {
                key: "addToast",
                value: function(e, a) {
                    var s = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                        t = document.createElement("game-toast");
                    t.setAttribute("text", e),
                    a && t.setAttribute("duration", a),
                    s ? this.shadowRoot.querySelector("#system-toaster").prepend(t) : this.shadowRoot.querySelector("#game-toaster").prepend(t)
                }
            }, {
                key: "sizeBoard",
                value: function() {
                    var e = this.shadowRoot.querySelector("#board-container"),
                        a = Math.min(Math.floor(e.clientHeight * (5 / 6)), 350),
                        s = 6 * Math.floor(a / 5);
                    this.$board.style.width = "".concat(a, "px"),
                    this.$board.style.height = "".concat(s, "px")
                }
            }, {
                key: "showStatsModal",
                value: function() {
                    var e = this.$game.querySelector("game-modal"),
                        a = document.createElement("game-stats");
                    this.gameStatus === es && this.rowIndex <= 6 && a.setAttribute("highlight-guess", this.rowIndex),
                    a.gameApp = this,
                    e.appendChild(a),
                    e.setAttribute("open", "")
                }
            }, {
                key: "showHelpModal",
                value: function() {
                    var e = this.$game.querySelector("game-modal");
                    e.appendChild(document.createElement("game-help")),
                    e.setAttribute("open", "")
                }
            }, {
                key: "connectedCallback",
                value: function() {
                    var e = this;
                    this.shadowRoot.appendChild(Ka.content.cloneNode(!0)),
                    this.$game = this.shadowRoot.querySelector("#game"),
                    this.$board = this.shadowRoot.querySelector("#board"),
                    this.$keyboard = this.shadowRoot.querySelector("game-keyboard"),
                    this.sizeBoard(),
                    this.lastPlayedTs || setTimeout((function() {
                        return e.showHelpModal()
                    }), 100);
                    for (var a = 0; a < 6; a++) {
                        var s = document.createElement("game-row");
                        s.setAttribute("letters", this.boardState[a]),
                        // ok nice this is where length is set. it is internal variable that drives render and some other stuff
                        // but weirdly its not used where we check if we have filled in letters?
                        s.setAttribute("length", 6),
                        this.evaluations[a] && (s.evaluation = this.evaluations[a]),
                        this.$board.appendChild(s)
                    }
                    this.$game.addEventListener("game-key-press", (function(a) {
                        var s = a.detail.key;
                        "←" === s || "Backspace" === s ? e.removeLetter() : "↵" === s || "Enter" === s ? e.submitGuess() : Ba.includes(s.toLowerCase()) && e.addLetter(s.toLowerCase())
                    })),
                    this.$game.addEventListener("game-last-tile-revealed-in-row", (function(a) {
                        e.$keyboard.letterEvaluations = e.letterEvaluations,
                        e.rowIndex < 6 && (e.canInput = !0);
                        var s = e.$board.querySelectorAll("game-row")[e.rowIndex - 1];
                        (a.path || a.composedPath && a.composedPath()).includes(s) && ([es, as].includes(e.gameStatus) && (e.restoringFromLocalStorage ? e.showStatsModal() : (e.gameStatus === es && (s.setAttribute("win", ""), e.addToast(ss[e.rowIndex - 1], 2e3)), e.gameStatus === as && e.addToast(e.solution.toUpperCase(), 1 / 0), setTimeout((function() {
                            e.showStatsModal()
                        }), 2500))), e.restoringFromLocalStorage = !1)
                    })),
                    this.shadowRoot.addEventListener("game-setting-change", (function(a) {
                        var s = a.detail,
                            t = s.name,
                            o = s.checked,
                            n = s.disabled;
                        switch (t) {
                        case "hard-mode":
                            return void (n ? e.addToast("Hard mode can only be enabled at the start of a round", 1500, !0) : (e.hardMode = o, ja({
                                hardMode: o
                            })))
                        }
                    })),
                    this.shadowRoot.getElementById("settings-button").addEventListener("click", (function(a) {
                        var s = e.$game.querySelector("game-page"),
                            t = document.createTextNode("Settings");
                        s.appendChild(t);
                        var o = document.createElement("game-settings");
                        o.setAttribute("slot", "content"),
                        o.gameApp = e,
                        s.appendChild(o),
                        s.setAttribute("open", "")
                    })),
                    this.shadowRoot.getElementById("help-button").addEventListener("click", (function(a) {
                        var s = e.$game.querySelector("game-page"),
                            t = document.createTextNode("How to play");
                        s.appendChild(t);
                        var o = document.createElement("game-help");
                        o.setAttribute("page", ""),
                        o.setAttribute("slot", "content"),
                        s.appendChild(o),
                        s.setAttribute("open", "")
                    })),
                    this.shadowRoot.getElementById("statistics-button").addEventListener("click", (function(a) {
                        e.showStatsModal()
                    })),
                    window.addEventListener("resize", this.sizeBoard.bind(this))
                }
            }, {
                key: "disconnectedCallback",
                value: function() {}
            }, {
                key: "debugTools",
                value: function() {
                    var e = this;
                    this.shadowRoot.getElementById("debug-tools").appendChild(Qa.content.cloneNode(!0)),
                    this.shadowRoot.getElementById("toast").addEventListener("click", (function(a) {
                        e.addToast("hello world")
                    })),
                    this.shadowRoot.getElementById("modal").addEventListener("click", (function(a) {
                        var s = e.$game.querySelector("game-modal");
                        s.textContent = "hello plz",
                        s.setAttribute("open", "")
                    })),
                    this.shadowRoot.getElementById("reveal").addEventListener("click", (function() {
                        e.evaluateRow()
                    })),
                    this.shadowRoot.getElementById("shake").addEventListener("click", (function() {
                        e.$board.querySelectorAll("game-row")[e.rowIndex].setAttribute("invalid", "")
                    })),
                    this.shadowRoot.getElementById("bounce").addEventListener("click", (function() {
                        var a = e.$board.querySelectorAll("game-row")[e.rowIndex - 1];
                        "" === a.getAttribute("win") ? a.removeAttribute("win") : a.setAttribute("win", "")
                    }))
                }
            }]), t
        }(c(HTMLElement));
    customElements.define("game-app", ts);
    var os = document.createElement("template");
    os.innerHTML = "\n  <style>\n    .overlay {\n      display: none;\n      position: absolute;\n      width: 100%;\n      height: 100%;\n      top: 0;\n      left: 0;\n      justify-content: center;\n      align-items: center;\n      background-color: var(--opacity-50);\n      z-index: ".concat(3e3, ';\n    }\n\n    :host([open]) .overlay {\n      display: flex;\n    }\n\n    .content {\n      position: relative;\n      border-radius: 8px;\n      border: 1px solid var(--color-tone-6);\n      background-color: var(--modal-content-bg);\n      color: var(--color-tone-1);\n      box-shadow: 0 4px 23px 0 rgba(0, 0, 0, 0.2);\n      width: 90%;\n      max-height: 90%;\n      overflow-y: auto;\n      animation: SlideIn 200ms;\n      max-width: var(--game-max-width);\n      padding: 16px;\n      box-sizing: border-box;\n    }\n\n    .content.closing {\n      animation: SlideOut 200ms;\n    }\n\n    .close-icon {\n      width: 24px;\n      height: 24px;\n      position: absolute;\n      top: 16px;\n      right: 16px;\n    }\n\n    game-icon {\n      position: fixed;\n      user-select: none;\n      cursor: pointer;\n    }\n\n    @keyframes SlideIn {\n      0% {\n        transform: translateY(30px);\n        opacity: 0;\n      }\n      100% {\n        transform: translateY(0px);\n        opacity: 1;\n      }\n    }\n    @keyframes SlideOut {\n      0% {\n        transform: translateY(0px);\n        opacity: 1;\n      }\n      90% {\n        opacity: 0;\n      }\n      100% {\n        opacity: 0;\n        transform: translateY(60px);\n      }\n    }\n  </style>\n  <div class="overlay">\n    <div class="content">\n      <slot></slot>\n      <div class="close-icon">\n        <game-icon icon="close"></game-icon>\n      </div>\n    </div>\n  </div>\n');
    var ns = function(e) {
        r(t, e);
        var a = h(t);
        function t() {
            var e;
            return s(this, t), (e = a.call(this)).attachShadow({
                mode: "open"
            }), e
        }
        return o(t, [{
            key: "connectedCallback",
            value: function() {
                var e = this;
                this.shadowRoot.appendChild(os.content.cloneNode(!0)),
                this.addEventListener("click", (function(a) {
                    e.shadowRoot.querySelector(".content").classList.add("closing")
                })),
                this.shadowRoot.addEventListener("animationend", (function(a) {
                    "SlideOut" === a.animationName && (e.shadowRoot.querySelector(".content").classList.remove("closing"), e.removeChild(e.firstChild), e.removeAttribute("open"))
                }))
            }
        }]), t
    }(c(HTMLElement));
    customElements.define("game-modal", ns);
    var rs = document.createElement("template");
    rs.innerHTML = "\n  <style>\n  :host {\n    height: var(--keyboard-height);\n  }\n  #keyboard {\n    margin: 0 8px;\n    user-select: none;\n  }\n  \n  .row {\n    display: flex;\n    width: 100%;\n    margin: 0 auto 8px;\n    /* https://stackoverflow.com/questions/46167604/ios-html-disable-double-tap-to-zoom */\n    touch-action: manipulation;\n  }\n  \n  button {\n    font-family: inherit;\n    font-weight: bold;\n    border: 0;\n    padding: 0;\n    margin: 0 6px 0 0;\n    height: 58px;\n    border-radius: 4px;\n    cursor: pointer;\n    user-select: none;\n    background-color: var(--key-bg);\n    color: var(--key-text-color);\n    flex: 1;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    text-transform: uppercase;\n    -webkit-tap-highlight-color: rgba(0,0,0,0.3);\n  }\n\n  button:focus {\n    outline: none;\n  }\n\n  button.fade {\n    transition: background-color 0.1s ease, color 0.1s ease;\n  }\n  \n  button:last-of-type {\n    margin: 0;\n  }\n  \n  .half {\n    flex: 0.5;\n  }\n  \n  .one {\n    flex: 1;\n  }\n\n  .one-and-a-half {\n    flex: 1.5;\n    font-size: 12px;\n  }\n  \n  .two {\n    flex: 2;\n  }\n\n  button[data-state='correct'] {\n    background-color: var(--key-bg-correct);\n    color: var(--key-evaluated-text-color);\n  }\n\n  button[data-state='present'] {\n    background-color: var(--key-bg-present);\n    color: var(--key-evaluated-text-color);\n  }\n\n  button[data-state='absent'] {\n    background-color: var(--key-bg-absent);\n    color: var(--key-evaluated-text-color);\n  }\n\n  </style>\n  <div id=\"keyboard\"></div>\n";
    var is = document.createElement("template");
    is.innerHTML = "\n  <button>key</button>\n";
    var ls = document.createElement("template");
    ls.innerHTML = '\n  <div class="spacer"></div>\n';
    var ds = [["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"], ["-", "a", "s", "d", "f", "g", "h", "j", "k", "l", "-"], ["↵", "z", "x", "c", "v", "b", "n", "m", "←"]],
        us = function(e) {
            r(t, e);
            var a = h(t);
            function t() {
                var e;
                return s(this, t), n(p(e = a.call(this)), "_letterEvaluations", {}), e.attachShadow({
                    mode: "open"
                }), e
            }
            return o(t, [{
                key: "letterEvaluations",
                set: function(e) {
                    this._letterEvaluations = e,
                    this._render()
                }
            }, {
                key: "dispatchKeyPressEvent",
                value: function(e) {
                    this.dispatchEvent(new CustomEvent("game-key-press", {
                        bubbles: !0,
                        composed: !0,
                        detail: {
                            key: e
                        }
                    }))
                }
            }, {
                key: "connectedCallback",
                value: function() {
                    var e = this;
                    this.shadowRoot.appendChild(rs.content.cloneNode(!0)),
                    this.$keyboard = this.shadowRoot.getElementById("keyboard"),
                    this.$keyboard.addEventListener("click", (function(a) {
                        var s = a.target.closest("button");
                        s && e.$keyboard.contains(s) && e.dispatchKeyPressEvent(s.dataset.key)
                    })),
                    window.addEventListener("keydown", (function(a) {
                        if (!0 !== a.repeat) {
                            var s = a.key,
                                t = a.metaKey,
                                o = a.ctrlKey;
                            t || o || (Ba.includes(s.toLowerCase()) || "Backspace" === s || "Enter" === s) && e.dispatchKeyPressEvent(s)
                        }
                    })),
                    this.$keyboard.addEventListener("transitionend", (function(a) {
                        var s = a.target.closest("button");
                        s && e.$keyboard.contains(s) && s.classList.remove("fade")
                    })),
                    ds.forEach((function(a) {
                        var s = document.createElement("div");
                        s.classList.add("row"),
                        a.forEach((function(e) {
                            var a;
                            if (e >= "a" && e <= "z" || "←" === e || "↵" === e) {
                                if ((a = is.content.cloneNode(!0).firstElementChild).dataset.key = e, a.textContent = e, "←" === e) {
                                    var t = document.createElement("game-icon");
                                    t.setAttribute("icon", "backspace"),
                                    a.textContent = "",
                                    a.appendChild(t),
                                    a.classList.add("one-and-a-half")
                                }
                                "↵" == e && (a.textContent = "enter", a.classList.add("one-and-a-half"))
                            } else
                                (a = ls.content.cloneNode(!0).firstElementChild).classList.add(1 === e.length ? "half" : "one");
                            s.appendChild(a)
                        })),
                        e.$keyboard.appendChild(s)
                    })),
                    this._render()
                }
            }, {
                key: "_render",
                value: function() {
                    for (var e in this._letterEvaluations) {
                        var a = this.$keyboard.querySelector('[data-key="'.concat(e, '"]'));
                        a.dataset.state = this._letterEvaluations[e],
                        a.classList.add("fade")
                    }
                }
            }]), t
        }(c(HTMLElement));
    /*! *****************************************************************************
      Copyright (c) Microsoft Corporation.

      Permission to use, copy, modify, and/or distribute this software for any
      purpose with or without fee is hereby granted.

      THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
      REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
      AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
      INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
      LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
      OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
      PERFORMANCE OF THIS SOFTWARE.
      ***************************************************************************** */
    function cs(e, a, s, t) {
        return new (s || (s = Promise))((function(o, n) {
            function r(e) {
                try {
                    l(t.next(e))
                } catch (e) {
                    n(e)
                }
            }
            function i(e) {
                try {
                    l(t.throw(e))
                } catch (e) {
                    n(e)
                }
            }
            function l(e) {
                var a;
                e.done ? o(e.value) : (a = e.value, a instanceof s ? a : new s((function(e) {
                    e(a)
                }))).then(r, i)
            }
            l((t = t.apply(e, a || [])).next())
        }))
    }
    function ps(e, a) {
        var s,
            t,
            o,
            n,
            r = {
                label: 0,
                sent: function() {
                    if (1 & o[0])
                        throw o[1];
                    return o[1]
                },
                trys: [],
                ops: []
            };
        return n = {
            next: i(0),
            throw: i(1),
            return: i(2)
        }, "function" == typeof Symbol && (n[Symbol.iterator] = function() {
            return this
        }), n;
        function i(n) {
            return function(i) {
                return function(n) {
                    if (s)
                        throw new TypeError("Generator is already executing.");
                    for (; r;)
                        try {
                            if (s = 1, t && (o = 2 & n[0] ? t.return : n[0] ? t.throw || ((o = t.return) && o.call(t), 0) : t.next) && !(o = o.call(t, n[1])).done)
                                return o;
                            switch (t = 0, o && (n = [2 & n[0], o.value]), n[0]) {
                            case 0:
                            case 1:
                                o = n;
                                break;
                            case 4:
                                return r.label++, {
                                    value: n[1],
                                    done: !1
                                };
                            case 5:
                                r.label++,
                                t = n[1],
                                n = [0];
                                continue;
                            case 7:
                                n = r.ops.pop(),
                                r.trys.pop();
                                continue;
                            default:
                                if (!((o = (o = r.trys).length > 0 && o[o.length - 1]) || 6 !== n[0] && 2 !== n[0])) {
                                    r = 0;
                                    continue
                                }
                                if (3 === n[0] && (!o || n[1] > o[0] && n[1] < o[3])) {
                                    r.label = n[1];
                                    break
                                }
                                if (6 === n[0] && r.label < o[1]) {
                                    r.label = o[1],
                                    o = n;
                                    break
                                }
                                if (o && r.label < o[2]) {
                                    r.label = o[2],
                                    r.ops.push(n);
                                    break
                                }
                                o[2] && r.ops.pop(),
                                r.trys.pop();
                                continue
                            }
                            n = a.call(e, r)
                        } catch (e) {
                            n = [6, e],
                            t = 0
                        } finally {
                            s = o = 0
                        }
                    if (5 & n[0])
                        throw n[1];
                    return {
                        value: n[0] ? n[1] : void 0,
                        done: !0
                    }
                }([n, i])
            }
        }
    }
    customElements.define("game-keyboard", us),
    function() {
        (console.warn || console.log).apply(console, arguments)
    }.bind("[clipboard-polyfill]");
    var ms,
        hs,
        ys,
        gs,
        bs = "undefined" == typeof navigator ? void 0 : navigator,
        fs = null == bs ? void 0 : bs.clipboard;
    null === (ms = null == fs ? void 0 : fs.read) || void 0 === ms || ms.bind(fs),
    null === (hs = null == fs ? void 0 : fs.readText) || void 0 === hs || hs.bind(fs);
    var ks = (null === (ys = null == fs ? void 0 : fs.write) || void 0 === ys || ys.bind(fs), null === (gs = null == fs ? void 0 : fs.writeText) || void 0 === gs ? void 0 : gs.bind(fs)),
        vs = "undefined" == typeof window ? void 0 : window,
        ws = (null == vs || vs.ClipboardItem, vs);
    var xs = function() {
        this.success = !1
    };
    function zs(e, a, s) {
        for (var t in e.success = !0, a) {
            var o = a[t],
                n = s.clipboardData;
            n.setData(t, o),
            "text/plain" === t && n.getData(t) !== o && (e.success = !1)
        }
        s.preventDefault()
    }
    function js(e) {
        var a = new xs,
            s = zs.bind(this, a, e);
        document.addEventListener("copy", s);
        try {
            document.execCommand("copy")
        } finally {
            document.removeEventListener("copy", s)
        }
        return a.success
    }
    function Ss(e, a) {
        _s(e);
        var s = js(a);
        return qs(), s
    }
    function _s(e) {
        var a = document.getSelection();
        if (a) {
            var s = document.createRange();
            s.selectNodeContents(e),
            a.removeAllRanges(),
            a.addRange(s)
        }
    }
    function qs() {
        var e = document.getSelection();
        e && e.removeAllRanges()
    }
    function Es(e) {
        return cs(this, void 0, void 0, (function() {
            var a;
            return ps(this, (function(s) {
                if (a = "text/plain" in e, "undefined" == typeof ClipboardEvent && void 0 !== ws.clipboardData && void 0 !== ws.clipboardData.setData) {
                    if (!a)
                        throw new Error("No `text/plain` value was specified.");
                    if (t = e["text/plain"], ws.clipboardData.setData("Text", t))
                        return [2, !0];
                    throw new Error("Copying failed, possibly because the user rejected it.")
                }
                var t;
                return js(e) || navigator.userAgent.indexOf("Edge") > -1 || Ss(document.body, e) || function(e) {
                    var a = document.createElement("div");
                    a.setAttribute("style", "-webkit-user-select: text !important"),
                    a.textContent = "temporary element",
                    document.body.appendChild(a);
                    var s = Ss(a, e);
                    return document.body.removeChild(a), s
                }(e) || function(e) {
                    var a = document.createElement("div");
                    a.setAttribute("style", "-webkit-user-select: text !important");
                    var s = a;
                    a.attachShadow && (s = a.attachShadow({
                        mode: "open"
                    }));
                    var t = document.createElement("span");
                    t.innerText = e,
                    s.appendChild(t),
                    document.body.appendChild(a),
                    _s(t);
                    var o = document.execCommand("copy");
                    return qs(), document.body.removeChild(a), o
                }(e["text/plain"]) ? [2, !0] : [2, !1]
            }))
        }))
    }
    function As(e, a, s) {
        try {
            t = navigator.userAgent || navigator.vendor || window.opera,
            !/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(t) && !/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(t.substr(0, 4)) || navigator.userAgent.toLowerCase().indexOf("firefox") > -1 || void 0 === navigator.share || !navigator.canShare || !navigator.canShare(e) ? function(e) {
                return cs(this, void 0, void 0, (function() {
                    return ps(this, (function(a) {
                        if (ks)
                            return [2, ks(e)];
                        if (!Es(function(e) {
                            var a = {};
                            return a["text/plain"] = e, a
                        }(e)))
                            throw new Error("writeText() failed");
                        return [2]
                    }))
                }))
            }(e.text).then(a, s) : navigator.share(e)
        } catch (e) {
            s()
        }
        var t
    }
    var Cs = document.createElement("template");
    Cs.innerHTML = '\n  <style>\n    .container {\n      display: flex;\n      flex-direction: column;\n      align-items: center;\n      justify-content: center;\n      padding: 16px 0; \n    }\n    h1 {\n      font-weight: 700;\n      font-size: 16px;\n      letter-spacing: 0.5px;\n      text-transform: uppercase;\n      text-align: center;\n      margin-bottom: 10px;\n    }\n  \n    #statistics {\n      display: flex;\n      margin-bottom: \n    }\n\n    .statistic-container {\n      flex: 1;\n    }\n\n    .statistic-container .statistic {\n      font-size: 36px;\n      font-weight: 400;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      text-align: center;\n      letter-spacing: 0.05em;\n      font-variant-numeric: proportional-nums;\n    }\n\n    .statistic.timer {\n      font-variant-numeric: initial;\n    }\n\n    .statistic-container .label {\n      font-size: 12px;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      text-align: center;\n    }\n\n    #guess-distribution {\n      width: 80%;\n    }\n\n    .graph-container {\n      width: 100%;\n      height: 20px;\n      display: flex;\n      align-items: center;\n      padding-bottom: 4px;\n      font-size: 14px;\n      line-height: 20px;\n    }\n\n    .graph-container .graph {\n      width: 100%;\n      height: 100%;\n      padding-left: 4px;\n    }\n\n    .graph-container .graph .graph-bar {\n      height: 100%;\n      /* Assume no wins */\n      width: 0%;\n      position: relative;\n      background-color: var(--color-absent);\n      display: flex;\n      justify-content: center;\n    }\n\n    .graph-container .graph .graph-bar.highlight {\n      background-color: var(--color-correct);\n    }\n\n    .graph-container .graph .graph-bar.align-right {\n      justify-content: flex-end;\n      padding-right: 8px;\n    }\n\n    .graph-container .graph .num-guesses {\n      font-weight: bold;\n      color: var(--tile-text-color);\n    }\n\n    #statistics,\n    #guess-distribution {\n      padding-bottom: 10px;\n    }\n\n    .footer {\n      display: flex;\n      width: 100%;\n    }\n\n    .countdown {\n      border-right: 1px solid var(--color-tone-1);\n      padding-right: 12px;\n      width: 50%;\n    }\n\n    .share {\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      padding-left: 12px;\n      width: 50%;\n    }\n\n    .no-data {\n      text-align: center;\n    }\n\n    button#share-button {\n      background-color: var(--key-bg-correct);\n      color: var(--key-evaluated-text-color);\n      font-family: inherit;\n      font-weight: bold;\n      border-radius: 4px;\n      cursor: pointer;\n      border: none;\n      user-select: none;\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      text-transform: uppercase;\n      -webkit-tap-highlight-color: rgba(0,0,0,0.3);\n      width: 80%;\n      font-size: 20px;\n      height: 52px;\n      -webkit-filter: brightness(100%);\n    }\n    button#share-button:hover {\n      opacity: 0.9;\n    }\n    button#share-button game-icon {\n      width: 24px;\n      height: 24px;\n      padding-left: 8px;\n    }\n  </style>\n\n  <div class="container">\n    <h1>Statistics</h1>\n    <div id="statistics"></div>\n    <h1>Guess Distribution</h1>\n    <div id="guess-distribution"></div>\n    <div class="footer"></div>\n  </div>\n';
    var Ls = document.createElement("template");
    Ls.innerHTML = '\n  <div class="statistic-container">\n    <div class="statistic"></div>\n    <div class="label"></div>\n  </div>\n';
    var Ts = document.createElement("template");
    Ts.innerHTML = '\n    <div class="graph-container">\n      <div class="guess"></div>\n      <div class="graph">\n        <div class="graph-bar">\n          <div class="num-guesses">\n        </div>\n      </div>\n      </div>\n    </div>\n';
    var Is = document.createElement("template");
    Is.innerHTML = '\n  <div class="countdown">\n    <h1>Next TURTLE</h1>\n    <div id="timer">\n      <div class="statistic-container">\n        <div class="statistic timer">\n          <countdown-timer></countdown-timer>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class="share">\n    <button id="share-button">\n      Share <game-icon icon="share"></game-icon>\n    </button>\n  </div>\n';
    var Ms = {
            currentStreak: "Current Streak",
            maxStreak: "Max Streak",
            winPercentage: "Win %",
            gamesPlayed: "Played",
            gamesWon: "Won",
            averageGuesses: "Av. Guesses"
        },
        Os = function(e) {
            r(t, e);
            var a = h(t);
            function t() {
                var e;
                return s(this, t), n(p(e = a.call(this)), "stats", {}), n(p(e), "gameApp", void 0), e.attachShadow({
                    mode: "open"
                }), e.stats = Xa(), e
            }
            return o(t, [{
                key: "connectedCallback",
                value: function() {
                    var e = this;
                    this.shadowRoot.appendChild(Cs.content.cloneNode(!0));
                    var a = this.shadowRoot.getElementById("statistics"),
                        s = this.shadowRoot.getElementById("guess-distribution"),
                        t = Math.max.apply(Math, g(Object.values(this.stats.guesses)));
                    if (Object.values(this.stats.guesses).every((function(e) {
                        return 0 === e
                    }))) {
                        var o = document.createElement("div");
                        o.classList.add("no-data"),
                        o.innerText = "No Data",
                        s.appendChild(o)
                    } else
                        for (var n = 1; n < Object.keys(this.stats.guesses).length; n++) {
                            var r = n,
                                i = this.stats.guesses[n],
                                l = Ts.content.cloneNode(!0),
                                d = Math.max(7, Math.round(i / t * 100));
                            l.querySelector(".guess").textContent = r;
                            var u = l.querySelector(".graph-bar");
                            if (u.style.width = "".concat(d, "%"), "number" == typeof i) {
                                l.querySelector(".num-guesses").textContent = i,
                                i > 0 && u.classList.add("align-right");
                                var c = parseInt(this.getAttribute("highlight-guess"), 10);
                                c && n === c && u.classList.add("highlight")
                            }
                            s.appendChild(l)
                        }
                    if (["gamesPlayed", "winPercentage", "currentStreak", "maxStreak"].forEach((function(s) {
                        var t = Ms[s],
                            o = e.stats[s],
                            n = Ls.content.cloneNode(!0);
                        n.querySelector(".label").textContent = t,
                        n.querySelector(".statistic").textContent = o,
                        a.appendChild(n)
                    })), this.gameApp.gameStatus !== Za) {
                        var p = this.shadowRoot.querySelector(".footer"),
                            m = Is.content.cloneNode(!0);
                        p.appendChild(m),
                        this.shadowRoot.querySelector("button#share-button").addEventListener("click", (function(a) {
                            a.preventDefault(),
                            a.stopPropagation();
                            As(function(e) {
                                var a = e.evaluations,
                                    s = e.dayOffset,
                                    t = e.rowIndex,
                                    o = e.isHardMode,
                                    n = e.isWin,
                                    r = JSON.parse(window.localStorage.getItem(j)),
                                    i = JSON.parse(window.localStorage.getItem(S)),
                                    l = "Turtle ".concat(s);
                                l += " ".concat(n ? t : "X", "/").concat(6),
                                o && (l += "*");
                                var d = "";
                                return a.forEach((function(e) {
                                    e && (e.forEach((function(e) {
                                        if (e) {
                                            var a = "";
                                            switch (e) {
                                            case Ma:
                                                a = function(e) {
                                                    return e ? "🟧" : "🐢"
                                                }(i);
                                                break;
                                            case Ia:
                                                a = function(e) {
                                                    return e ? "🟦" : "🟨"
                                                }(i);
                                                break;
                                            case Oa:
                                                a = function(e) {
                                                    return e ? "⬛" : "⬜"
                                                }(r)
                                            }
                                            d += a
                                        }
                                    })), d += "\n")
                                })), {
                                    text: "".concat(l, "\n\n").concat(d.trimEnd())
                                }
                            }({
                                evaluations: e.gameApp.evaluations,
                                dayOffset: e.gameApp.dayOffset,
                                rowIndex: e.gameApp.rowIndex,
                                isHardMode: e.gameApp.hardMode,
                                isWin: e.gameApp.gameStatus === es
                            }), (function() {
                                e.gameApp.addToast("Copied results to clipboard", 2e3, !0)
                            }), (function() {
                                e.gameApp.addToast("Share failed", 2e3, !0)
                            }))
                        }))
                    }
                }
            }]), t
        }(c(HTMLElement));
    customElements.define("game-stats", Os);
    var Rs = document.createElement("template");
    Rs.innerHTML = '\n  <style>\n    :host {\n    }\n    .container {\n      display: flex;\n      justify-content: space-between;\n    }\n    .switch {\n      height: 20px;\n      width: 32px;\n      vertical-align: middle;\n      /* not quite right */\n      background: var(--color-tone-3);\n      border-radius: 999px;\n      display: block;\n      position: relative;\n    }\n    .knob {\n      display: block;\n      position: absolute;\n      left: 2px;\n      top: 2px;\n      height: calc(100% - 4px);\n      width: 50%;\n      border-radius: 8px;\n      background: var(--white);\n      transform: translateX(0);\n      transition: transform 0.3s;\n    }\n    :host([checked]) .switch {\n      background: var(--color-correct);\n    }\n    :host([checked]) .knob {\n      transform: translateX(calc(100% - 4px));\n    }\n    :host([disabled]) .switch {\n      opacity: 0.5;\n    }\n  </style>\n  <div class="container">\n    <label><slot></slot></label>\n    <div class="switch">\n      <span class="knob"></div>\n    </div>\n  </div>\n';
    var Ps = function(e) {
        r(t, e);
        var a = h(t);
        function t() {
            var e;
            return s(this, t), (e = a.call(this)).attachShadow({
                mode: "open"
            }), e
        }
        return o(t, [{
            key: "connectedCallback",
            value: function() {
                var e = this;
                this.shadowRoot.appendChild(Rs.content.cloneNode(!0)),
                this.shadowRoot.querySelector(".container").addEventListener("click", (function(a) {
                    a.stopPropagation(),
                    e.hasAttribute("checked") ? e.removeAttribute("checked") : e.setAttribute("checked", ""),
                    e.dispatchEvent(new CustomEvent("game-switch-change", {
                        bubbles: !0,
                        composed: !0,
                        detail: {
                            name: e.getAttribute("name"),
                            checked: e.hasAttribute("checked"),
                            disabled: e.hasAttribute("disabled")
                        }
                    }))
                }))
            }
        }], [{
            key: "observedAttributes",
            get: function() {
                return ["checked"]
            }
        }]), t
    }(c(HTMLElement));
    customElements.define("game-switch", Ps);
    var $s = document.createElement("template");
    $s.innerHTML = '\n  <style>\n  .instructions {\n    font-size: 14px;\n    color: var(--color-tone-1)\n  }\n\n  .examples {\n    border-bottom: 1px solid var(--color-tone-4);\n    border-top: 1px solid var(--color-tone-4);\n  }\n\n  .example {\n    margin-top: 24px;\n    margin-bottom: 24px;\n  }\n\n  game-tile {\n    width: 40px;\n    height: 40px;\n  }\n\n  :host([page]) section {\n    padding: 16px;\n    padding-top: 0px;\n  }\n\n  </style>\n  <section>\n    <div class="instructions">\n      <p>Guess the <strong>TURTLE</strong> in 6 tries.</p>\n      <p>Each guess must be a valid 6 letter word. Hit the enter button to submit.</p>\n      <p>After each guess... well you know how it works!</p>\n      </div>\n      <p><strong>A new 🐢 will be available each day!<strong></p>\n    </div>\n  </section>\n';
    var Hs = function(e) {
        r(t, e);
        var a = h(t);
        function t() {
            var e;
            return s(this, t), (e = a.call(this)).attachShadow({
                mode: "open"
            }), e
        }
        return o(t, [{
            key: "connectedCallback",
            value: function() {
                this.shadowRoot.appendChild($s.content.cloneNode(!0))
            }
        }]), t
    }(c(HTMLElement));
    customElements.define("game-help", Hs);
    var Ns = document.createElement("template");
    Ns.innerHTML = "\n  <style>\n    .overlay {\n      display: none;\n      position: absolute;\n      width: 100%;\n      height: 100%;\n      top: 0;\n      left: 0;\n      justify-content: center;\n      background-color: var(--color-background);\n      animation: SlideIn 100ms linear;\n      z-index: ".concat(2e3, ';\n    }\n\n    :host([open]) .overlay {\n      display: flex;\n    }\n\n    .content {\n      position: relative;\n      color: var(--color-tone-1);\n      padding: 0 32px;\n      max-width: var(--game-max-width);\n      width: 100%;\n      overflow-y: auto;\n      height: 100%;\n      display: flex;\n      flex-direction: column;\n    }\n\n    .content-container {\n      height: 100%;\n    }\n\n    .overlay.closing {\n      animation: SlideOut 150ms linear;\n    }\n\n    header {\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      position: relative;\n    }\n\n    h1 {\n      font-weight: 700;\n      font-size: 16px;\n      letter-spacing: 0.5px;\n      text-transform: uppercase;\n      text-align: center;\n      margin-bottom: 10px;\n    }\n\n    game-icon {\n      position: absolute;\n      right: 0;\n      user-select: none;\n      cursor: pointer;\n    }\n\n    @media only screen and (min-device-width : 320px) and (max-device-width : 480px) {\n      .content {\n        max-width: 100%;\n        padding: 0;\n      }\n      game-icon {\n        padding: 0 16px;\n      }\n    }\n\n    @keyframes SlideIn {\n      0% {\n        transform: translateY(30px);\n        opacity: 0;\n      }\n      100% {\n        transform: translateY(0px);\n        opacity: 1;\n      }\n    }\n    @keyframes SlideOut {\n      0% {\n        transform: translateY(0px);\n        opacity: 1;\n      }\n      90% {\n        opacity: 0;\n      }\n      100% {\n        opacity: 0;\n        transform: translateY(60px);\n      }\n    }\n  </style>\n  <div class="overlay">\n    <div class="content">\n      <header>\n        <h1><slot></slot></h1>\n        <game-icon icon="close"></game-icon>\n      </header>\n      <div class="content-container">\n        <slot name="content"></slot>\n      </div>\n    </div>\n  </div>\n');
    var Ds = function(e) {
        r(t, e);
        var a = h(t);
        function t() {
            var e;
            return s(this, t), (e = a.call(this)).attachShadow({
                mode: "open"
            }), e
        }
        return o(t, [{
            key: "connectedCallback",
            value: function() {
                var e = this;
                this.shadowRoot.appendChild(Ns.content.cloneNode(!0)),
                this.shadowRoot.querySelector("game-icon").addEventListener("click", (function(a) {
                    e.shadowRoot.querySelector(".overlay").classList.add("closing")
                })),
                this.shadowRoot.addEventListener("animationend", (function(a) {
                    "SlideOut" === a.animationName && (e.shadowRoot.querySelector(".overlay").classList.remove("closing"), Array.from(e.childNodes).forEach((function(a) {
                        e.removeChild(a)
                    })), e.removeAttribute("open"))
                }))
            }
        }]), t
    }(c(HTMLElement));
    customElements.define("game-page", Ds);
    var Gs = document.createElement("template");
    Gs.innerHTML = '\n  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">\n    <path fill=var(--color-tone-3) />\n  </svg>\n';
    var Bs = {
            help: "M11 18h2v-2h-2v2zm1-16C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5 0-2.21-1.79-4-4-4z",
            settings: "M19.14,12.94c0.04-0.3,0.06-0.61,0.06-0.94c0-0.32-0.02-0.64-0.07-0.94l2.03-1.58c0.18-0.14,0.23-0.41,0.12-0.61 l-1.92-3.32c-0.12-0.22-0.37-0.29-0.59-0.22l-2.39,0.96c-0.5-0.38-1.03-0.7-1.62-0.94L14.4,2.81c-0.04-0.24-0.24-0.41-0.48-0.41 h-3.84c-0.24,0-0.43,0.17-0.47,0.41L9.25,5.35C8.66,5.59,8.12,5.92,7.63,6.29L5.24,5.33c-0.22-0.08-0.47,0-0.59,0.22L2.74,8.87 C2.62,9.08,2.66,9.34,2.86,9.48l2.03,1.58C4.84,11.36,4.8,11.69,4.8,12s0.02,0.64,0.07,0.94l-2.03,1.58 c-0.18,0.14-0.23,0.41-0.12,0.61l1.92,3.32c0.12,0.22,0.37,0.29,0.59,0.22l2.39-0.96c0.5,0.38,1.03,0.7,1.62,0.94l0.36,2.54 c0.05,0.24,0.24,0.41,0.48,0.41h3.84c0.24,0,0.44-0.17,0.47-0.41l0.36-2.54c0.59-0.24,1.13-0.56,1.62-0.94l2.39,0.96 c0.22,0.08,0.47,0,0.59-0.22l1.92-3.32c0.12-0.22,0.07-0.47-0.12-0.61L19.14,12.94z M12,15.6c-1.98,0-3.6-1.62-3.6-3.6 s1.62-3.6,3.6-3.6s3.6,1.62,3.6,3.6S13.98,15.6,12,15.6z",
            backspace: "M22 3H7c-.69 0-1.23.35-1.59.88L0 12l5.41 8.11c.36.53.9.89 1.59.89h15c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H7.07L2.4 12l4.66-7H22v14zm-11.59-2L14 13.41 17.59 17 19 15.59 15.41 12 19 8.41 17.59 7 14 10.59 10.41 7 9 8.41 12.59 12 9 15.59z",
            close: "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z",
            share: "M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92s2.92-1.31 2.92-2.92c0-1.61-1.31-2.92-2.92-2.92zM18 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM6 13c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm12 7.02c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z",
            statistics: "M16,11V3H8v6H2v12h20V11H16z M10,5h4v14h-4V5z M4,11h4v8H4V11z M20,19h-4v-6h4V19z"
        },
        Fs = function(e) {
            r(t, e);
            var a = h(t);
            function t() {
                var e;
                return s(this, t), (e = a.call(this)).attachShadow({
                    mode: "open"
                }), e
            }
            return o(t, [{
                key: "connectedCallback",
                value: function() {
                    this.shadowRoot.appendChild(Gs.content.cloneNode(!0));
                    var e = this.getAttribute("icon");
                    this.shadowRoot.querySelector("path").setAttribute("d", Bs[e]),
                    "backspace" === e && this.shadowRoot.querySelector("path").setAttribute("fill", "var(--color-tone-1)"),
                    "share" === e && this.shadowRoot.querySelector("path").setAttribute("fill", "var(--white)")
                }
            }]), t
        }(c(HTMLElement));
    customElements.define("game-icon", Fs);
    var Ws = document.createElement("template");
    Ws.innerHTML = '\n  <div id="timer"></div>\n';
    var Ys = 6e4,
        Js = 36e5,
        Us = function(e) {
            r(t, e);
            var a = h(t);
            function t() {
                var e;
                s(this, t),
                n(p(e = a.call(this)), "targetEpochMS", void 0),
                n(p(e), "intervalId", void 0),
                n(p(e), "$timer", void 0),
                e.attachShadow({
                    mode: "open"
                });
                var o = new Date;
                return o.setDate(o.getDate() + 1), o.setHours(0, 0, 0, 0), e.targetEpochMS = o.getTime(), e
            }
            return o(t, [{
                key: "padDigit",
                value: function(e) {
                    return e.toString().padStart(2, "0")
                }
            }, {
                key: "updateTimer",
                value: function() {
                    var e,
                        a = (new Date).getTime(),
                        s = Math.floor(this.targetEpochMS - a);
                    if (s <= 0)
                        e = "00:00:00";
                    else {
                        var t = Math.floor(s % 864e5 / Js),
                            o = Math.floor(s % Js / Ys),
                            n = Math.floor(s % Ys / 1e3);
                        e = "".concat(this.padDigit(t), ":").concat(this.padDigit(o), ":").concat(this.padDigit(n))
                    }
                    this.$timer.textContent = e
                }
            }, {
                key: "connectedCallback",
                value: function() {
                    var e = this;
                    this.shadowRoot.appendChild(Ws.content.cloneNode(!0)),
                    this.$timer = this.shadowRoot.querySelector("#timer"),
                    this.intervalId = setInterval((function() {
                        e.updateTimer()
                    }), 200)
                }
            }, {
                key: "disconnectedCallback",
                value: function() {
                    clearInterval(this.intervalId)
                }
            }]), t
        }(c(HTMLElement));
    return customElements.define("countdown-timer", Us), e.CountdownTimer = Us, e.GameApp = ts, e.GameHelp = Hs, e.GameIcon = Fs, e.GameKeyboard = us, e.GameModal = ns, e.GamePage = Ds, e.GameRow = x, e.GameSettings = _a, e.GameStats = Os, e.GameSwitch = Ps, e.GameThemeManager = _, e.GameTile = v, e.GameToast = Aa, Object.defineProperty(e, "__esModule", {
        value: !0
    }), e
}({});

