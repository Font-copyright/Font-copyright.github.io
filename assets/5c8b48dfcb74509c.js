! function(e) {
    function t(t) {
        for (var r, o, i = t[0], s = t[1], u = t[2], f = 0, p = []; f < i.length; f++) o = i[f], a[o] && p.push(a[o][0]), a[o] = 0;
        for (r in s) Object.prototype.hasOwnProperty.call(s, r) && (e[r] = s[r]);
        for (l && l(t); p.length;) p.shift()();
        return c.push.apply(c, u || []), n() }

    function n() {
        for (var e, t = 0; t < c.length; t++) {
            for (var n = c[t], o = !0, i = 1; i < n.length; i++) {
                var s = n[i];
                0 !== a[s] && (o = !1) }
            o && (c.splice(t--, 1), e = r(r.s = n[0])) }
        return e }

    function r(t) {
        if (o[t]) return o[t].exports;
        var n = o[t] = { i: t, l: !1, exports: {} };
        return e[t].call(n.exports, n, n.exports, r), n.l = !0, n.exports }
    var o = {},
        a = { 0: 0 },
        c = [];
    r.m = e, r.c = o, r.d = function(e, t, n) { r.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: n }) }, r.r = function(e) { "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: !0 }) }, r.t = function(e, t) {
        if (1 & t && (e = r(e)), 8 & t) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var n = Object.create(null);
        if (r.r(n), Object.defineProperty(n, "default", { enumerable: !0, value: e }), 2 & t && "string" != typeof e)
            for (var o in e) r.d(n, o, function(t) {
                return e[t] }.bind(null, o));
        return n }, r.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e["default"] } : function() {
            return e };
        return r.d(t, "a", t), t }, r.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t) }, r.p = "";
    var i = window.webpackJsonp = window.webpackJsonp || [],
        s = i.push.bind(i);
    i.push = t, i = i.slice();
    for (var u = 0; u < i.length; u++) t(i[u]);
    var l = s;
    c.push([170, 1]), n() }({ 134: function(e, t, n) {}, 169: function(e, t, n) {}, 170: function(e, t, n) { "use strict";

        function r(e) {
            return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e })(e) }

        function o(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }

        function a(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r) } }

        function c(e, t, n) {
            return t && a(e.prototype, t), n && a(e, n), e }

        function i(e, t) {
            return !t || "object" !== r(t) && "function" != typeof t ? f(e) : t }

        function s(e) {
            return (s = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e) })(e) }

        function u(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && l(e, t) }

        function l(e, t) {
            return (l = Object.setPrototypeOf || function(e, t) {
                return e.__proto__ = t, e })(e, t) }

        function f(e) {
            if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e }

        function p(e, t, n) {
            return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e }

        function m(e) {
            return (m = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e })(e) }

        function h(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }

        function y(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r) } }

        function b(e, t, n) {
            return t && y(e.prototype, t), n && y(e, n), e }

        function d(e, t) {
            return !t || "object" !== m(t) && "function" != typeof t ? O(e) : t }

        function g(e) {
            return (g = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e) })(e) }

        function v(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && w(e, t) }

        function w(e, t) {
            return (w = Object.setPrototypeOf || function(e, t) {
                return e.__proto__ = t, e })(e, t) }

        function O(e) {
            if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e }

        function E(e, t, n) {
            return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e }

        function S(e) {
            return (S = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e })(e) }

        function j(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }

        function _(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r) } }

        function T(e, t, n) {
            return t && _(e.prototype, t), n && _(e, n), e }

        function x(e, t) {
            return !t || "object" !== S(t) && "function" != typeof t ? C(e) : t }

        function C(e) {
            if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e }

        function N(e) {
            return (N = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e) })(e) }

        function P(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && k(e, t) }

        function k(e, t) {
            return (k = Object.setPrototypeOf || function(e, t) {
                return e.__proto__ = t, e })(e, t) }
        var M = (n(21), n(25), n(88), n(0)),
            L = n.n(M),
            D = n(4),
            R = n(41),
            A = n(20),
            q = n.n(A),
            B = n(70),
            I = (n(121), n(123), n(127), n(134), function(e) {
                function t() {
                    var e, n;
                    o(this, t);
                    for (var r = arguments.length, a = new Array(r), c = 0; c < r; c++) a[c] = arguments[c];
                    return n = i(this, (e = s(t)).call.apply(e, [this].concat(a))), p(f(f(n)), "state", { fontList: window.front, listInit: ["\u601d\u6e90\u9ed1\u4f53", "\u601d\u6e90\u771f\u9ed1\u4f53", "\u601d\u6e90\u67d4\u9ed1\u4f53", "\u7ad9\u9177\u9ad8\u7aef\u9ed1", "\u7ad9\u9177\u9177\u9ed1", "\u601d\u6e90\u5b8b\u4f53", "\u6e90\u6d41\u660e\u4f53", "\u6e90\u6f3e\u660e\u4f53", "\u6e90\u4e91\u660e\u4f53", "\u7ad9\u9177\u5e86\u79d1\u9ec4\u6cb9\u4f53", "\u7ad9\u9177\u5feb\u4e50\u4f53", "\u7ad9\u9177\u5feb\u4e50\u4f53\u65b0\u7248", "\u88c5\u7532\u660e\u671d\u4f53"], searchText: "", searchList: [], searched: !1 }), p(f(f(n)), "onChange", function(e) { n.setState({ searchText: e.target.value }) }), p(f(f(n)), "onClean", function() { n.setState({ searchText: "", searched: !1 }), n.search.blur() }), p(f(f(n)), "onSearch", function(e) {
                        var t = n.state,
                            r = t.searchText,
                            o = t.fontList;
                        if (e.preventDefault(), n.search.blur(), "" === r) n.setState({ searched: !1 });
                        else {
                            var a = o.filter(function(e) {
                                return e.cn_name.includes(r) });
                            n.setState({ searched: !0, searchList: a }) } }), n }
                return u(t, e), c(t, [{ key: "render", value: function() {
                        var e = this,
                            t = this.state,
                            n = t.fontList,
                            r = t.listInit,
                            o = t.searchList,
                            a = t.searchText,
                            c = t.searched,
                            i = [];
                        i = c ? o : n.filter(function(e) {
                            return r.includes(e.cn_name) });
                        var s = i.map(function(e, t) {
                            var n = "\u672a\u77e5",
                                r = "";
                            return 1 === e.is_pay ? (n = "\u5546\u7528\u9700\u6388\u6743", r = "notfree") : 0 === e.is_pay && (n = "\u514d\u8d39\u53ef\u5546\u7528", r = "free"), L.a.createElement("li", { className: "font-item", key: t }, e.cn_name, L.a.createElement("div", { className: "font-info ".concat(r) }, n)) });
                        return 0 === s.length && s.push(L.a.createElement("div", { className: "no-font", key: -1 }, "\u6682\u65e0\u6b64\u5b57\u4f53\uff0c\u60a8\u53ef\u4ee5\u53cd\u9988\u7ed9\u6211\u4eec", L.a.createElement(D.Link, { to: "/suggest" }, L.a.createElement("span", { className: "suggest" }, "")))), L.a.createElement("div", null, L.a.createElement("div", { className: "title" }), L.a.createElement("form", { className: "search-warp", action: "", onSubmit: this.onSearch }, a.length > 0 ? L.a.createElement("div", { className: "search-clean", onClick: this.onClean }) : null, L.a.createElement("input", { type: "search", ref: function(t) { e.search = t }, autoCorrect: "off", autoComplete: "off", maxLength: "64", name: "text", className: "font-search", placeholder: "\u8f93\u5165\u4f60\u60f3\u67e5\u7684\u5b57\u4f53", value: a, onChange: this.onChange }), L.a.createElement("button", { type: "submit", className: "icon-search" })), L.a.createElement("ul", { className: "font-list" }, s), L.a.createElement("div", { className: "contact" }, "\u6ce8\uff1a\u672c\u9875\u7ed3\u679c\u4ec5\u4f9b\u53c2\u8003", L.a.createElement("span", { className: "" }), L.a.createElement(D.Link, { to: "/suggest" }, L.a.createElement("span", { className: "suggest" }, ""))), L.a.createElement("div", { className: "tip" }, L.a.createElement("span", { className: "logo" }), L.a.createElement("span", null, "\u7535\u8111\u6253\u5f00\u6b64\u7f51\u9875\uff0c\u770b\u4f60\u7535\u8111\u91cc\u6709\u54ea\u4e9b\u514d\u8d39\u5b57\u4f53"))) } }]), t }(L.a.Component)),
                        // return 0 === s.length && s.push(L.a.createElement("div", { className: "no-font", key: -1 }, "\u6682\u65e0\u6b64\u5b57\u4f53\uff0c\u60a8\u53ef\u4ee5\u53cd\u9988\u7ed9\u6211\u4eec", L.a.createElement(D.Link, { to: "/suggest" }, L.a.createElement("span", { className: "suggest" }, "\u6211\u8981\u53cd\u9988")))), L.a.createElement("div", null, L.a.createElement("div", { className: "title" }), L.a.createElement("form", { className: "search-warp", action: "", onSubmit: this.onSearch }, a.length > 0 ? L.a.createElement("div", { className: "search-clean", onClick: this.onClean }) : null, L.a.createElement("input", { type: "search", ref: function(t) { e.search = t }, autoCorrect: "off", autoComplete: "off", maxLength: "64", name: "text", className: "font-search", placeholder: "\u8f93\u5165\u4f60\u60f3\u67e5\u7684\u5b57\u4f53", value: a, onChange: this.onChange }), L.a.createElement("button", { type: "submit", className: "icon-search" })), L.a.createElement("ul", { className: "font-list" }, s), L.a.createElement("div", { className: "contact" }, "\u6ce8\uff1a\u672c\u9875\u7ed3\u679c\u4ec5\u4f9b\u53c2\u8003", L.a.createElement("span", { className: "split" }), L.a.createElement(D.Link, { to: "/suggest" }, L.a.createElement("span", { className: "suggest" }, "\u7ea0\u9519\u4e0e\u53cd\u9988"))), L.a.createElement("div", { className: "tip" }, L.a.createElement("span", { className: "logo" }), L.a.createElement("span", null, "\u7535\u8111\u6253\u5f00\u6b64\u7f51\u9875\uff0c\u770b\u4f60\u7535\u8111\u91cc\u6709\u54ea\u4e9b\u514d\u8d39\u5b57\u4f53"))) } }]), t }(L.a.Component)),
            F = n(71),
            J = n(74),
            Q = n.n(J),
            z = (n(169), function(e) {
                function t() {
                    var e, n;
                    h(this, t);
                    for (var r = arguments.length, o = new Array(r), a = 0; a < r; a++) o[a] = arguments[a];
                    return n = d(this, (e = g(t)).call.apply(e, [this].concat(o))), E(O(O(n)), "state", { disc: "", contact: "", showToast: !1, toastText: "" }), E(O(O(n)), "handleChangeDisc", function(e) { n.setState({ disc: e.target.value }) }), E(O(O(n)), "handleChangeContact", function(e) { n.setState({ contact: e.target.value }) }), E(O(O(n)), "handleSubmit", function() {
                        var e = n.state,
                            t = e.disc,
                            r = e.contact,
                            o = n.props.history,
                            a = (new Date).getTime();
                        if ("" === t) n.setState({ showToast: !0, toastText: "\u5185\u5bb9\u4e0d\u80fd\u4e3a\u7a7a\u54e6" }), setTimeout(function() { n.setState({ showToast: !1, toastText: "" }) }, 2e3);
                        else {
                            var c = "",
                                i = "";
                            r.length < 11 ? c = r : i = r, q()({ url: "https://feedbackfont.safe.360.cn/feedback/addFeedback", adapter: Q.a, params: { content: t, mobile: i, qq: c, timestamp: a, sign: Object(F.sign)("hOrlB9LEzgtgZ0GjCRjv7marKf1yiFov")({ content: t, mobile: i, qq: c, timestamp: a }) } }).then(function(e) { e.data && 0 === e.data.errno && (n.setState({ showToast: !0, toastText: "\u63d0\u4ea4\u6210\u529f" }), setTimeout(function() { n.setState({ showToast: !1, toastText: "" }), o.push("/") }, 2e3)) }) } }), n }
                return v(t, e), b(t, [{ key: "render", value: function() {
                        var e = this.state,
                            t = e.disc,
                            n = e.contact,
                            r = e.toastText,
                            o = e.showToast;
                        return L.a.createElement("div", { className: "suggest-wrap" }, o ? L.a.createElement("div", { className: "toast" }, r) : "", L.a.createElement("div", { className: "disc" }, L.a.createElement("div", { className: "disc-name" }, "\u95ee\u9898\u63cf\u8ff0"), L.a.createElement("textarea", { onChange: this.handleChangeDisc, value: t, className: "disc-txt", placeholder: "\u8bf7\u5199\u4e0b\u4f60\u9047\u5230\u7684\u95ee\u9898" })), L.a.createElement("div", { className: "address" }, L.a.createElement("div", { className: "address-name" }, "\u8054\u7cfb\u65b9\u5f0f"), L.a.createElement("input", { onChange: this.handleChangeContact, value: n, className: "address-txt", placeholder: "\u8bf7\u7559\u4e0b\u4f60\u7684\u8054\u7cfb\u65b9\u5f0f\uff0c\u624b\u673a\u53f7/QQ\u53f7\u5747\u53ef" })), L.a.createElement("button", { onClick: this.handleSubmit, className: "submit" }, "\u63d0\u4ea4")) } }]), t }(L.a.Component));
        Object(B.isMobile)() || (window.location.href = "http://www.360.cn/activity/font.html");
        var G = function(e) {
            function t() {
                return j(this, t), x(this, N(t).apply(this, arguments)) }
            return P(t, e), T(t, [{ key: "wxConfig", value: function() {
                    var e = window.wx,
                        t = { title: "360\u67e5\u5b57\u4f53 - \u514d\u8d39\u5b57\u4f53\u79d2\u77e5\u9053", desc: "\u628a\u5b57\u4f53\u7248\u6743\uff0c\u770b\u7684\u660e\u660e\u767d\u767d", imgUrl: "https://p3.ssl.qhimg.com/t0190ef7390999cea8b.png", success: function() {} };
                    q.a.get("/safeBrain/getConf", { params: { url: window.location.href } }).then(function(n) {
                        var r = n.data;
                        0 === r.errno && (e.config(Object.assign(r.data, { jsApiList: ["updateAppMessageShareData", "updateTimelineShareData", "onMenuShareTimeline", "onMenuShareAppMessage"] })), e.ready(function() { e.onMenuShareAppMessage(t), e.onMenuShareTimeline(t) })) }) } }, { key: "componentDidMount", value: function() { this.wxConfig() } }, { key: "render", value: function() {
                    return L.a.createElement(D.HashRouter, null, L.a.createElement("div", { className: "wrap" }, L.a.createElement(D.Route, { exact: !0, path: "/", component: I }), L.a.createElement(D.Route, { path: "/suggest", component: z }))) } }]), t }(L.a.Component);
        Object(R.render)(L.a.createElement(G, null), document.getElementById("app")) } });
