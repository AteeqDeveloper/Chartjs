!function t(e, i, s) {
    function n(a, r) {
        if (!i[a]) {
            if (!e[a]) {
                var l = "function" == typeof require && require;
                if (!r && l)
                    return l(a, !0);
                if (o)
                    return o(a, !0);
                var h = new Error("Cannot find module '" + a + "'");
                throw h.code = "MODULE_NOT_FOUND",
                h
            }
            var c = i[a] = {
                exports: {}
            };
            e[a][0].call(c.exports, (function(t) {
                return n(e[a][1][t] || t)
            }
            ), c, c.exports, t, e, i, s)
        }
        return i[a].exports
    }
    for (var o = "function" == typeof require && require, a = 0; a < s.length; a++)
        n(s[a]);
    return n
}({
    1: [function(t, e, i) {
        /*!
 * @kurkle/color v0.3.2
 * https://github.com/kurkle/color#readme
 * (c) 2023 Jukka Kurkela
 * Released under the MIT License
 */
        var s, n;
        s = this,
        n = function() {
            "use strict";
            function t(t) {
                return t + .5 | 0
            }
            const e = (t, e, i) => Math.max(Math.min(t, i), e);
            function i(i) {
                return e(t(2.55 * i), 0, 255)
            }
            function s(i) {
                return e(t(255 * i), 0, 255)
            }
            function n(i) {
                return e(t(i / 2.55) / 100, 0, 1)
            }
            function o(i) {
                return e(t(100 * i), 0, 100)
            }
            const a = {
                0: 0,
                1: 1,
                2: 2,
                3: 3,
                4: 4,
                5: 5,
                6: 6,
                7: 7,
                8: 8,
                9: 9,
                A: 10,
                B: 11,
                C: 12,
                D: 13,
                E: 14,
                F: 15,
                a: 10,
                b: 11,
                c: 12,
                d: 13,
                e: 14,
                f: 15
            }
              , r = [..."0123456789ABCDEF"]
              , l = t => r[15 & t]
              , h = t => r[(240 & t) >> 4] + r[15 & t]
              , c = t => (240 & t) >> 4 == (15 & t);
            function d(t) {
                var e, i = t.length;
                return "#" === t[0] && (4 === i || 5 === i ? e = {
                    r: 255 & 17 * a[t[1]],
                    g: 255 & 17 * a[t[2]],
                    b: 255 & 17 * a[t[3]],
                    a: 5 === i ? 17 * a[t[4]] : 255
                } : 7 !== i && 9 !== i || (e = {
                    r: a[t[1]] << 4 | a[t[2]],
                    g: a[t[3]] << 4 | a[t[4]],
                    b: a[t[5]] << 4 | a[t[6]],
                    a: 9 === i ? a[t[7]] << 4 | a[t[8]] : 255
                })),
                e
            }
            function u(t) {
                var e = (t => c(t.r) && c(t.g) && c(t.b) && c(t.a))(t) ? l : h;
                return t ? "#" + e(t.r) + e(t.g) + e(t.b) + ( (t, e) => t < 255 ? e(t) : "")(t.a, e) : void 0
            }
            const f = /^(hsla?|hwb|hsv)\(\s*([-+.e\d]+)(?:deg)?[\s,]+([-+.e\d]+)%[\s,]+([-+.e\d]+)%(?:[\s,]+([-+.e\d]+)(%)?)?\s*\)$/;
            function g(t, e, i) {
                const s = e * Math.min(i, 1 - i)
                  , n = (e, n=(e + t / 30) % 12) => i - s * Math.max(Math.min(n - 3, 9 - n, 1), -1);
                return [n(0), n(8), n(4)]
            }
            function p(t, e, i) {
                const s = (s, n=(s + t / 60) % 6) => i - i * e * Math.max(Math.min(n, 4 - n, 1), 0);
                return [s(5), s(3), s(1)]
            }
            function m(t, e, i) {
                const s = g(t, 1, .5);
                let n;
                for (e + i > 1 && (n = 1 / (e + i),
                e *= n,
                i *= n),
                n = 0; n < 3; n++)
                    s[n] *= 1 - e - i,
                    s[n] += e;
                return s
            }
            function b(t) {
                const e = t.r / 255
                  , i = t.g / 255
                  , s = t.b / 255
                  , n = Math.max(e, i, s)
                  , o = Math.min(e, i, s)
                  , a = (n + o) / 2;
                let r, l, h;
                return n !== o && (h = n - o,
                l = a > .5 ? h / (2 - n - o) : h / (n + o),
                r = function(t, e, i, s, n) {
                    return t === n ? (e - i) / s + (e < i ? 6 : 0) : e === n ? (i - t) / s + 2 : (t - e) / s + 4
                }(e, i, s, h, n),
                r = 60 * r + .5),
                [0 | r, l || 0, a]
            }
            function x(t, e, i, n) {
                return (Array.isArray(e) ? t(e[0], e[1], e[2]) : t(e, i, n)).map(s)
            }
            function _(t, e, i) {
                return x(g, t, e, i)
            }
            function y(t, e, i) {
                return x(m, t, e, i)
            }
            function v(t, e, i) {
                return x(p, t, e, i)
            }
            function w(t) {
                return (t % 360 + 360) % 360
            }
            function M(t) {
                const e = f.exec(t);
                let n, o = 255;
                if (!e)
                    return;
                e[5] !== n && (o = e[6] ? i(+e[5]) : s(+e[5]));
                const a = w(+e[2])
                  , r = +e[3] / 100
                  , l = +e[4] / 100;
                return n = "hwb" === e[1] ? y(a, r, l) : "hsv" === e[1] ? v(a, r, l) : _(a, r, l),
                {
                    r: n[0],
                    g: n[1],
                    b: n[2],
                    a: o
                }
            }
            function k(t, e) {
                var i = b(t);
                i[0] = w(i[0] + e),
                i = _(i),
                t.r = i[0],
                t.g = i[1],
                t.b = i[2]
            }
            function P(t) {
                if (!t)
                    return;
                const e = b(t)
                  , i = e[0]
                  , s = o(e[1])
                  , a = o(e[2]);
                return t.a < 255 ? `hsla(${i}, ${s}%, ${a}%, ${n(t.a)})` : `hsl(${i}, ${s}%, ${a}%)`
            }
            const S = {
                x: "dark",
                Z: "light",
                Y: "re",
                X: "blu",
                W: "gr",
                V: "medium",
                U: "slate",
                A: "ee",
                T: "ol",
                S: "or",
                B: "ra",
                C: "lateg",
                D: "ights",
                R: "in",
                Q: "turquois",
                E: "hi",
                P: "ro",
                O: "al",
                N: "le",
                M: "de",
                L: "yello",
                F: "en",
                K: "ch",
                G: "arks",
                H: "ea",
                I: "ightg",
                J: "wh"
            }
              , O = {
                OiceXe: "f0f8ff",
                antiquewEte: "faebd7",
                aqua: "ffff",
                aquamarRe: "7fffd4",
                azuY: "f0ffff",
                beige: "f5f5dc",
                bisque: "ffe4c4",
                black: "0",
                blanKedOmond: "ffebcd",
                Xe: "ff",
                XeviTet: "8a2be2",
                bPwn: "a52a2a",
                burlywood: "deb887",
                caMtXe: "5f9ea0",
                KartYuse: "7fff00",
                KocTate: "d2691e",
                cSO: "ff7f50",
                cSnflowerXe: "6495ed",
                cSnsilk: "fff8dc",
                crimson: "dc143c",
                cyan: "ffff",
                xXe: "8b",
                xcyan: "8b8b",
                xgTMnPd: "b8860b",
                xWay: "a9a9a9",
                xgYF: "6400",
                xgYy: "a9a9a9",
                xkhaki: "bdb76b",
                xmagFta: "8b008b",
                xTivegYF: "556b2f",
                xSange: "ff8c00",
                xScEd: "9932cc",
                xYd: "8b0000",
                xsOmon: "e9967a",
                xsHgYF: "8fbc8f",
                xUXe: "483d8b",
                xUWay: "2f4f4f",
                xUgYy: "2f4f4f",
                xQe: "ced1",
                xviTet: "9400d3",
                dAppRk: "ff1493",
                dApskyXe: "bfff",
                dimWay: "696969",
                dimgYy: "696969",
                dodgerXe: "1e90ff",
                fiYbrick: "b22222",
                flSOwEte: "fffaf0",
                foYstWAn: "228b22",
                fuKsia: "ff00ff",
                gaRsbSo: "dcdcdc",
                ghostwEte: "f8f8ff",
                gTd: "ffd700",
                gTMnPd: "daa520",
                Way: "808080",
                gYF: "8000",
                gYFLw: "adff2f",
                gYy: "808080",
                honeyMw: "f0fff0",
                hotpRk: "ff69b4",
                RdianYd: "cd5c5c",
                Rdigo: "4b0082",
                ivSy: "fffff0",
                khaki: "f0e68c",
                lavFMr: "e6e6fa",
                lavFMrXsh: "fff0f5",
                lawngYF: "7cfc00",
                NmoncEffon: "fffacd",
                ZXe: "add8e6",
                ZcSO: "f08080",
                Zcyan: "e0ffff",
                ZgTMnPdLw: "fafad2",
                ZWay: "d3d3d3",
                ZgYF: "90ee90",
                ZgYy: "d3d3d3",
                ZpRk: "ffb6c1",
                ZsOmon: "ffa07a",
                ZsHgYF: "20b2aa",
                ZskyXe: "87cefa",
                ZUWay: "778899",
                ZUgYy: "778899",
                ZstAlXe: "b0c4de",
                ZLw: "ffffe0",
                lime: "ff00",
                limegYF: "32cd32",
                lRF: "faf0e6",
                magFta: "ff00ff",
                maPon: "800000",
                VaquamarRe: "66cdaa",
                VXe: "cd",
                VScEd: "ba55d3",
                VpurpN: "9370db",
                VsHgYF: "3cb371",
                VUXe: "7b68ee",
                VsprRggYF: "fa9a",
                VQe: "48d1cc",
                VviTetYd: "c71585",
                midnightXe: "191970",
                mRtcYam: "f5fffa",
                mistyPse: "ffe4e1",
                moccasR: "ffe4b5",
                navajowEte: "ffdead",
                navy: "80",
                Tdlace: "fdf5e6",
                Tive: "808000",
                TivedBb: "6b8e23",
                Sange: "ffa500",
                SangeYd: "ff4500",
                ScEd: "da70d6",
                pOegTMnPd: "eee8aa",
                pOegYF: "98fb98",
                pOeQe: "afeeee",
                pOeviTetYd: "db7093",
                papayawEp: "ffefd5",
                pHKpuff: "ffdab9",
                peru: "cd853f",
                pRk: "ffc0cb",
                plum: "dda0dd",
                powMrXe: "b0e0e6",
                purpN: "800080",
                YbeccapurpN: "663399",
                Yd: "ff0000",
                Psybrown: "bc8f8f",
                PyOXe: "4169e1",
                saddNbPwn: "8b4513",
                sOmon: "fa8072",
                sandybPwn: "f4a460",
                sHgYF: "2e8b57",
                sHshell: "fff5ee",
                siFna: "a0522d",
                silver: "c0c0c0",
                skyXe: "87ceeb",
                UXe: "6a5acd",
                UWay: "708090",
                UgYy: "708090",
                snow: "fffafa",
                sprRggYF: "ff7f",
                stAlXe: "4682b4",
                tan: "d2b48c",
                teO: "8080",
                tEstN: "d8bfd8",
                tomato: "ff6347",
                Qe: "40e0d0",
                viTet: "ee82ee",
                JHt: "f5deb3",
                wEte: "ffffff",
                wEtesmoke: "f5f5f5",
                Lw: "ffff00",
                LwgYF: "9acd32"
            };
            let D;
            function C(t) {
                D || (D = function() {
                    const t = {}
                      , e = Object.keys(O)
                      , i = Object.keys(S);
                    let s, n, o, a, r;
                    for (s = 0; s < e.length; s++) {
                        for (a = r = e[s],
                        n = 0; n < i.length; n++)
                            o = i[n],
                            r = r.replace(o, S[o]);
                        o = parseInt(O[a], 16),
                        t[r] = [o >> 16 & 255, o >> 8 & 255, 255 & o]
                    }
                    return t
                }(),
                D.transparent = [0, 0, 0, 0]);
                const e = D[t.toLowerCase()];
                return e && {
                    r: e[0],
                    g: e[1],
                    b: e[2],
                    a: 4 === e.length ? e[3] : 255
                }
            }
            const A = /^rgba?\(\s*([-+.\d]+)(%)?[\s,]+([-+.e\d]+)(%)?[\s,]+([-+.e\d]+)(%)?(?:[\s,/]+([-+.e\d]+)(%)?)?\s*\)$/;
            function T(t) {
                const s = A.exec(t);
                let n, o, a, r = 255;
                if (s) {
                    if (s[7] !== n) {
                        const t = +s[7];
                        r = s[8] ? i(t) : e(255 * t, 0, 255)
                    }
                    return n = +s[1],
                    o = +s[3],
                    a = +s[5],
                    n = 255 & (s[2] ? i(n) : e(n, 0, 255)),
                    o = 255 & (s[4] ? i(o) : e(o, 0, 255)),
                    a = 255 & (s[6] ? i(a) : e(a, 0, 255)),
                    {
                        r: n,
                        g: o,
                        b: a,
                        a: r
                    }
                }
            }
            function R(t) {
                return t && (t.a < 255 ? `rgba(${t.r}, ${t.g}, ${t.b}, ${n(t.a)})` : `rgb(${t.r}, ${t.g}, ${t.b})`)
            }
            const L = t => t <= .0031308 ? 12.92 * t : 1.055 * Math.pow(t, 1 / 2.4) - .055
              , E = t => t <= .04045 ? t / 12.92 : Math.pow((t + .055) / 1.055, 2.4);
            function I(t, e, i) {
                if (t) {
                    let s = b(t);
                    s[e] = Math.max(0, Math.min(s[e] + s[e] * i, 0 === e ? 360 : 1)),
                    s = _(s),
                    t.r = s[0],
                    t.g = s[1],
                    t.b = s[2]
                }
            }
            function F(t, e) {
                return t ? Object.assign(e || {}, t) : t
            }
            function z(t) {
                var e = {
                    r: 0,
                    g: 0,
                    b: 0,
                    a: 255
                };
                return Array.isArray(t) ? t.length >= 3 && (e = {
                    r: t[0],
                    g: t[1],
                    b: t[2],
                    a: 255
                },
                t.length > 3 && (e.a = s(t[3]))) : (e = F(t, {
                    r: 0,
                    g: 0,
                    b: 0,
                    a: 1
                })).a = s(e.a),
                e
            }
            class N {
                constructor(t) {
                    if (t instanceof N)
                        return t;
                    const e = typeof t;
                    let i;
                    var s;
                    "object" === e ? i = z(t) : "string" === e && (i = d(t) || C(t) || ("r" === (s = t).charAt(0) ? T(s) : M(s))),
                    this._rgb = i,
                    this._valid = !!i
                }
                get valid() {
                    return this._valid
                }
                get rgb() {
                    var t = F(this._rgb);
                    return t && (t.a = n(t.a)),
                    t
                }
                set rgb(t) {
                    this._rgb = z(t)
                }
                rgbString() {
                    return this._valid ? R(this._rgb) : void 0
                }
                hexString() {
                    return this._valid ? u(this._rgb) : void 0
                }
                hslString() {
                    return this._valid ? P(this._rgb) : void 0
                }
                mix(t, e) {
                    if (t) {
                        const i = this.rgb
                          , s = t.rgb;
                        let n;
                        const o = e === n ? .5 : e
                          , a = 2 * o - 1
                          , r = i.a - s.a
                          , l = ((a * r == -1 ? a : (a + r) / (1 + a * r)) + 1) / 2;
                        n = 1 - l,
                        i.r = 255 & l * i.r + n * s.r + .5,
                        i.g = 255 & l * i.g + n * s.g + .5,
                        i.b = 255 & l * i.b + n * s.b + .5,
                        i.a = o * i.a + (1 - o) * s.a,
                        this.rgb = i
                    }
                    return this
                }
                interpolate(t, e) {
                    return t && (this._rgb = function(t, e, i) {
                        const o = E(n(t.r))
                          , a = E(n(t.g))
                          , r = E(n(t.b));
                        return {
                            r: s(L(o + i * (E(n(e.r)) - o))),
                            g: s(L(a + i * (E(n(e.g)) - a))),
                            b: s(L(r + i * (E(n(e.b)) - r))),
                            a: t.a + i * (e.a - t.a)
                        }
                    }(this._rgb, t._rgb, e)),
                    this
                }
                clone() {
                    return new N(this.rgb)
                }
                alpha(t) {
                    return this._rgb.a = s(t),
                    this
                }
                clearer(t) {
                    return this._rgb.a *= 1 - t,
                    this
                }
                greyscale() {
                    const e = this._rgb
                      , i = t(.3 * e.r + .59 * e.g + .11 * e.b);
                    return e.r = e.g = e.b = i,
                    this
                }
                opaquer(t) {
                    return this._rgb.a *= 1 + t,
                    this
                }
                negate() {
                    const t = this._rgb;
                    return t.r = 255 - t.r,
                    t.g = 255 - t.g,
                    t.b = 255 - t.b,
                    this
                }
                lighten(t) {
                    return I(this._rgb, 2, t),
                    this
                }
                darken(t) {
                    return I(this._rgb, 2, -t),
                    this
                }
                saturate(t) {
                    return I(this._rgb, 1, t),
                    this
                }
                desaturate(t) {
                    return I(this._rgb, 1, -t),
                    this
                }
                rotate(t) {
                    return k(this._rgb, t),
                    this
                }
            }
            function B(t) {
                return new N(t)
            }
            var j = Object.freeze({
                __proto__: null,
                Color: N,
                default: B,
                round: t,
                lim: e,
                p2b: i,
                b2p: function(i) {
                    return e(t(i / 2.55), 0, 100)
                },
                n2b: s,
                b2n: n,
                n2p: o,
                hexParse: d,
                hexString: u,
                rgb2hsl: b,
                hsl2rgb: _,
                hwb2rgb: y,
                hsv2rgb: v,
                hueParse: M,
                rotate: k,
                hslString: P,
                nameParse: C,
                rgbParse: T,
                rgbString: R
            });
            return Object.assign(B, j)
        }
        ,
        "object" == typeof i && void 0 !== e ? e.exports = n() : "function" == typeof define && define.amd ? define(n) : (s = "undefined" != typeof globalThis ? globalThis : s || self)["@kurkle/color"] = n()
    }
    , {}],
    2: [function(t, e, i) {
        "use strict";
        const s = t("../dist/chart.cjs")
          , {Chart: n, registerables: o} = s;
        n.register(...o),
        e.exports = Object.assign(n, s)
    }
    , {
        "../dist/chart.cjs": 3
    }],
    3: [function(t, e, i) {
        /*!
 * Chart.js v4.2.1
 * https://www.chartjs.org
 * (c) 2023 Chart.js Contributors
 * Released under the MIT License
 */
        "use strict";
        var s = t("./chunks/helpers.segment.cjs");
        t("@kurkle/color");
        class n {
            constructor() {
                this._request = null,
                this._charts = new Map,
                this._running = !1,
                this._lastDate = void 0
            }
            _notify(t, e, i, s) {
                const n = e.listeners[s]
                  , o = e.duration;
                n.forEach((s => s({
                    chart: t,
                    initial: e.initial,
                    numSteps: o,
                    currentStep: Math.min(i - e.start, o)
                })))
            }
            _refresh() {
                this._request || (this._running = !0,
                this._request = s.requestAnimFrame.call(window, ( () => {
                    this._update(),
                    this._request = null,
                    this._running && this._refresh()
                }
                )))
            }
            _update() {
                let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Date.now()
                  , e = 0;
                this._charts.forEach(( (i, s) => {
                    if (!i.running || !i.items.length)
                        return;
                    const n = i.items;
                    let o, a = n.length - 1, r = !1;
                    for (; a >= 0; --a)
                        o = n[a],
                        o._active ? (o._total > i.duration && (i.duration = o._total),
                        o.tick(t),
                        r = !0) : (n[a] = n[n.length - 1],
                        n.pop());
                    r && (s.draw(),
                    this._notify(s, i, t, "progress")),
                    n.length || (i.running = !1,
                    this._notify(s, i, t, "complete"),
                    i.initial = !1),
                    e += n.length
                }
                )),
                this._lastDate = t,
                0 === e && (this._running = !1)
            }
            _getAnims(t) {
                const e = this._charts;
                let i = e.get(t);
                return i || (i = {
                    running: !1,
                    initial: !0,
                    items: [],
                    listeners: {
                        complete: [],
                        progress: []
                    }
                },
                e.set(t, i)),
                i
            }
            listen(t, e, i) {
                this._getAnims(t).listeners[e].push(i)
            }
            add(t, e) {
                e && e.length && this._getAnims(t).items.push(...e)
            }
            has(t) {
                return this._getAnims(t).items.length > 0
            }
            start(t) {
                const e = this._charts.get(t);
                e && (e.running = !0,
                e.start = Date.now(),
                e.duration = e.items.reduce(( (t, e) => Math.max(t, e._duration)), 0),
                this._refresh())
            }
            running(t) {
                if (!this._running)
                    return !1;
                const e = this._charts.get(t);
                return !!(e && e.running && e.items.length)
            }
            stop(t) {
                const e = this._charts.get(t);
                if (!e || !e.items.length)
                    return;
                const i = e.items;
                let s = i.length - 1;
                for (; s >= 0; --s)
                    i[s].cancel();
                e.items = [],
                this._notify(t, e, Date.now(), "complete")
            }
            remove(t) {
                return this._charts.delete(t)
            }
        }
        var o = new n;
        const a = "transparent"
          , r = {
            boolean: (t, e, i) => i > .5 ? e : t,
            color(t, e, i) {
                const n = s.color(t || a)
                  , o = n.valid && s.color(e || a);
                return o && o.valid ? o.mix(n, i).hexString() : e
            },
            number: (t, e, i) => t + (e - t) * i
        };
        class l {
            constructor(t, e, i, n) {
                const o = e[i];
                n = s.resolve([t.to, n, o, t.from]);
                const a = s.resolve([t.from, o, n]);
                this._active = !0,
                this._fn = t.fn || r[t.type || typeof a],
                this._easing = s.effects[t.easing] || s.effects.linear,
                this._start = Math.floor(Date.now() + (t.delay || 0)),
                this._duration = this._total = Math.floor(t.duration),
                this._loop = !!t.loop,
                this._target = e,
                this._prop = i,
                this._from = a,
                this._to = n,
                this._promises = void 0
            }
            active() {
                return this._active
            }
            update(t, e, i) {
                if (this._active) {
                    this._notify(!1);
                    const n = this._target[this._prop]
                      , o = i - this._start
                      , a = this._duration - o;
                    this._start = i,
                    this._duration = Math.floor(Math.max(a, t.duration)),
                    this._total += o,
                    this._loop = !!t.loop,
                    this._to = s.resolve([t.to, e, n, t.from]),
                    this._from = s.resolve([t.from, n, e])
                }
            }
            cancel() {
                this._active && (this.tick(Date.now()),
                this._active = !1,
                this._notify(!1))
            }
            tick(t) {
                const e = t - this._start
                  , i = this._duration
                  , s = this._prop
                  , n = this._from
                  , o = this._loop
                  , a = this._to;
                let r;
                if (this._active = n !== a && (o || e < i),
                !this._active)
                    return this._target[s] = a,
                    void this._notify(!0);
                e < 0 ? this._target[s] = n : (r = e / i % 2,
                r = o && r > 1 ? 2 - r : r,
                r = this._easing(Math.min(1, Math.max(0, r))),
                this._target[s] = this._fn(n, a, r))
            }
            wait() {
                const t = this._promises || (this._promises = []);
                return new Promise(( (e, i) => {
                    t.push({
                        res: e,
                        rej: i
                    })
                }
                ))
            }
            _notify(t) {
                const e = t ? "res" : "rej"
                  , i = this._promises || [];
                for (let t = 0; t < i.length; t++)
                    i[t][e]()
            }
        }
        class h {
            constructor(t, e) {
                this._chart = t,
                this._properties = new Map,
                this.configure(e)
            }
            configure(t) {
                if (!s.isObject(t))
                    return;
                const e = Object.keys(s.defaults.animation)
                  , i = this._properties;
                Object.getOwnPropertyNames(t).forEach((n => {
                    const o = t[n];
                    if (!s.isObject(o))
                        return;
                    const a = {};
                    for (const t of e)
                        a[t] = o[t];
                    (s.isArray(o.properties) && o.properties || [n]).forEach((t => {
                        t !== n && i.has(t) || i.set(t, a)
                    }
                    ))
                }
                ))
            }
            _animateOptions(t, e) {
                const i = e.options
                  , s = function(t, e) {
                    if (!e)
                        return;
                    let i = t.options;
                    if (!i)
                        return void (t.options = e);
                    i.$shared && (t.options = i = Object.assign({}, i, {
                        $shared: !1,
                        $animations: {}
                    }));
                    return i
                }(t, i);
                if (!s)
                    return [];
                const n = this._createAnimations(s, i);
                return i.$shared && function(t, e) {
                    const i = []
                      , s = Object.keys(e);
                    for (let e = 0; e < s.length; e++) {
                        const n = t[s[e]];
                        n && n.active() && i.push(n.wait())
                    }
                    return Promise.all(i)
                }(t.options.$animations, i).then(( () => {
                    t.options = i
                }
                ), ( () => {}
                )),
                n
            }
            _createAnimations(t, e) {
                const i = this._properties
                  , s = []
                  , n = t.$animations || (t.$animations = {})
                  , o = Object.keys(e)
                  , a = Date.now();
                let r;
                for (r = o.length - 1; r >= 0; --r) {
                    const h = o[r];
                    if ("$" === h.charAt(0))
                        continue;
                    if ("options" === h) {
                        s.push(...this._animateOptions(t, e));
                        continue
                    }
                    const c = e[h];
                    let d = n[h];
                    const u = i.get(h);
                    if (d) {
                        if (u && d.active()) {
                            d.update(u, c, a);
                            continue
                        }
                        d.cancel()
                    }
                    u && u.duration ? (n[h] = d = new l(u,t,h,c),
                    s.push(d)) : t[h] = c
                }
                return s
            }
            update(t, e) {
                if (0 === this._properties.size)
                    return void Object.assign(t, e);
                const i = this._createAnimations(t, e);
                return i.length ? (o.add(this._chart, i),
                !0) : void 0
            }
        }
        function c(t, e) {
            const i = t && t.options || {}
              , s = i.reverse
              , n = void 0 === i.min ? e : 0
              , o = void 0 === i.max ? e : 0;
            return {
                start: s ? o : n,
                end: s ? n : o
            }
        }
        function d(t, e) {
            const i = []
              , s = t._getSortedDatasetMetas(e);
            let n, o;
            for (n = 0,
            o = s.length; n < o; ++n)
                i.push(s[n].index);
            return i
        }
        function u(t, e, i) {
            let n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
            const o = t.keys
              , a = "single" === n.mode;
            let r, l, h, c;
            if (null !== e) {
                for (r = 0,
                l = o.length; r < l; ++r) {
                    if (h = +o[r],
                    h === i) {
                        if (n.all)
                            continue;
                        break
                    }
                    c = t.values[h],
                    s.isNumberFinite(c) && (a || 0 === e || s.sign(e) === s.sign(c)) && (e += c)
                }
                return e
            }
        }
        function f(t, e) {
            const i = t && t.options.stacked;
            return i || void 0 === i && void 0 !== e.stack
        }
        function g(t, e, i) {
            const s = t[e] || (t[e] = {});
            return s[i] || (s[i] = {})
        }
        function p(t, e, i, s) {
            for (const n of e.getMatchingVisibleMetas(s).reverse()) {
                const e = t[n.index];
                if (i && e > 0 || !i && e < 0)
                    return n.index
            }
            return null
        }
        function m(t, e) {
            const {chart: i, _cachedMeta: s} = t
              , n = i._stacks || (i._stacks = {})
              , {iScale: o, vScale: a, index: r} = s
              , l = o.axis
              , h = a.axis
              , c = function(t, e, i) {
                return `${t.id}.${e.id}.${i.stack || i.type}`
            }(o, a, s)
              , d = e.length;
            let u;
            for (let t = 0; t < d; ++t) {
                const i = e[t]
                  , {[l]: o, [h]: d} = i;
                u = (i._stacks || (i._stacks = {}))[h] = g(n, c, o),
                u[r] = d,
                u._top = p(u, a, !0, s.type),
                u._bottom = p(u, a, !1, s.type);
                (u._visualValues || (u._visualValues = {}))[r] = d
            }
        }
        function b(t, e) {
            const i = t.scales;
            return Object.keys(i).filter((t => i[t].axis === e)).shift()
        }
        function x(t, e) {
            const i = t.controller.index
              , s = t.vScale && t.vScale.axis;
            if (s) {
                e = e || t._parsed;
                for (const t of e) {
                    const e = t._stacks;
                    if (!e || void 0 === e[s] || void 0 === e[s][i])
                        return;
                    delete e[s][i],
                    void 0 !== e[s]._visualValues && void 0 !== e[s]._visualValues[i] && delete e[s]._visualValues[i]
                }
            }
        }
        const _ = t => "reset" === t || "none" === t
          , y = (t, e) => e ? t : Object.assign({}, t);
        class v {
            static defaults = {};
            static datasetElementType = null;
            static dataElementType = null;
            constructor(t, e) {
                this.chart = t,
                this._ctx = t.ctx,
                this.index = e,
                this._cachedDataOpts = {},
                this._cachedMeta = this.getMeta(),
                this._type = this._cachedMeta.type,
                this.options = void 0,
                this._parsing = !1,
                this._data = void 0,
                this._objectData = void 0,
                this._sharedOptions = void 0,
                this._drawStart = void 0,
                this._drawCount = void 0,
                this.enableOptionSharing = !1,
                this.supportsDecimation = !1,
                this.$context = void 0,
                this._syncList = [],
                this.datasetElementType = new.target.datasetElementType,
                this.dataElementType = new.target.dataElementType,
                this.initialize()
            }
            initialize() {
                const t = this._cachedMeta;
                this.configure(),
                this.linkScales(),
                t._stacked = f(t.vScale, t),
                this.addElements(),
                this.options.fill && !this.chart.isPluginEnabled("filler") && console.warn("Tried to use the 'fill' option without the 'Filler' plugin enabled. Please import and register the 'Filler' plugin and make sure it is not disabled in the options")
            }
            updateIndex(t) {
                this.index !== t && x(this._cachedMeta),
                this.index = t
            }
            linkScales() {
                const t = this.chart
                  , e = this._cachedMeta
                  , i = this.getDataset()
                  , n = (t, e, i, s) => "x" === t ? e : "r" === t ? s : i
                  , o = e.xAxisID = s.valueOrDefault(i.xAxisID, b(t, "x"))
                  , a = e.yAxisID = s.valueOrDefault(i.yAxisID, b(t, "y"))
                  , r = e.rAxisID = s.valueOrDefault(i.rAxisID, b(t, "r"))
                  , l = e.indexAxis
                  , h = e.iAxisID = n(l, o, a, r)
                  , c = e.vAxisID = n(l, a, o, r);
                e.xScale = this.getScaleForId(o),
                e.yScale = this.getScaleForId(a),
                e.rScale = this.getScaleForId(r),
                e.iScale = this.getScaleForId(h),
                e.vScale = this.getScaleForId(c)
            }
            getDataset() {
                return this.chart.data.datasets[this.index]
            }
            getMeta() {
                return this.chart.getDatasetMeta(this.index)
            }
            getScaleForId(t) {
                return this.chart.scales[t]
            }
            _getOtherScale(t) {
                const e = this._cachedMeta;
                return t === e.iScale ? e.vScale : e.iScale
            }
            reset() {
                this._update("reset")
            }
            _destroy() {
                const t = this._cachedMeta;
                this._data && s.unlistenArrayEvents(this._data, this),
                t._stacked && x(t)
            }
            _dataCheck() {
                const t = this.getDataset()
                  , e = t.data || (t.data = [])
                  , i = this._data;
                if (s.isObject(e))
                    this._data = function(t) {
                        const e = Object.keys(t)
                          , i = new Array(e.length);
                        let s, n, o;
                        for (s = 0,
                        n = e.length; s < n; ++s)
                            o = e[s],
                            i[s] = {
                                x: o,
                                y: t[o]
                            };
                        return i
                    }(e);
                else if (i !== e) {
                    if (i) {
                        s.unlistenArrayEvents(i, this);
                        const t = this._cachedMeta;
                        x(t),
                        t._parsed = []
                    }
                    e && Object.isExtensible(e) && s.listenArrayEvents(e, this),
                    this._syncList = [],
                    this._data = e
                }
            }
            addElements() {
                const t = this._cachedMeta;
                this._dataCheck(),
                this.datasetElementType && (t.dataset = new this.datasetElementType)
            }
            buildOrUpdateElements(t) {
                const e = this._cachedMeta
                  , i = this.getDataset();
                let s = !1;
                this._dataCheck();
                const n = e._stacked;
                e._stacked = f(e.vScale, e),
                e.stack !== i.stack && (s = !0,
                x(e),
                e.stack = i.stack),
                this._resyncElements(t),
                (s || n !== e._stacked) && m(this, e._parsed)
            }
            configure() {
                const t = this.chart.config
                  , e = t.datasetScopeKeys(this._type)
                  , i = t.getOptionScopes(this.getDataset(), e, !0);
                this.options = t.createResolver(i, this.getContext()),
                this._parsing = this.options.parsing,
                this._cachedDataOpts = {}
            }
            parse(t, e) {
                const {_cachedMeta: i, _data: n} = this
                  , {iScale: o, _stacked: a} = i
                  , r = o.axis;
                let l, h, c, d = 0 === t && e === n.length || i._sorted, u = t > 0 && i._parsed[t - 1];
                if (!1 === this._parsing)
                    i._parsed = n,
                    i._sorted = !0,
                    c = n;
                else {
                    c = s.isArray(n[t]) ? this.parseArrayData(i, n, t, e) : s.isObject(n[t]) ? this.parseObjectData(i, n, t, e) : this.parsePrimitiveData(i, n, t, e);
                    const o = () => null === h[r] || u && h[r] < u[r];
                    for (l = 0; l < e; ++l)
                        i._parsed[l + t] = h = c[l],
                        d && (o() && (d = !1),
                        u = h);
                    i._sorted = d
                }
                a && m(this, c)
            }
            parsePrimitiveData(t, e, i, s) {
                const {iScale: n, vScale: o} = t
                  , a = n.axis
                  , r = o.axis
                  , l = n.getLabels()
                  , h = n === o
                  , c = new Array(s);
                let d, u, f;
                for (d = 0,
                u = s; d < u; ++d)
                    f = d + i,
                    c[d] = {
                        [a]: h || n.parse(l[f], f),
                        [r]: o.parse(e[f], f)
                    };
                return c
            }
            parseArrayData(t, e, i, s) {
                const {xScale: n, yScale: o} = t
                  , a = new Array(s);
                let r, l, h, c;
                for (r = 0,
                l = s; r < l; ++r)
                    h = r + i,
                    c = e[h],
                    a[r] = {
                        x: n.parse(c[0], h),
                        y: o.parse(c[1], h)
                    };
                return a
            }
            parseObjectData(t, e, i, n) {
                const {xScale: o, yScale: a} = t
                  , {xAxisKey: r="x", yAxisKey: l="y"} = this._parsing
                  , h = new Array(n);
                let c, d, u, f;
                for (c = 0,
                d = n; c < d; ++c)
                    u = c + i,
                    f = e[u],
                    h[c] = {
                        x: o.parse(s.resolveObjectKey(f, r), u),
                        y: a.parse(s.resolveObjectKey(f, l), u)
                    };
                return h
            }
            getParsed(t) {
                return this._cachedMeta._parsed[t]
            }
            getDataElement(t) {
                return this._cachedMeta.data[t]
            }
            applyStack(t, e, i) {
                const s = this.chart
                  , n = this._cachedMeta
                  , o = e[t.axis];
                return u({
                    keys: d(s, !0),
                    values: e._stacks[t.axis]._visualValues
                }, o, n.index, {
                    mode: i
                })
            }
            updateRangeFromParsed(t, e, i, s) {
                const n = i[e.axis];
                let o = null === n ? NaN : n;
                const a = s && i._stacks[e.axis];
                s && a && (s.values = a,
                o = u(s, n, this._cachedMeta.index)),
                t.min = Math.min(t.min, o),
                t.max = Math.max(t.max, o)
            }
            getMinMax(t, e) {
                const i = this._cachedMeta
                  , n = i._parsed
                  , o = i._sorted && t === i.iScale
                  , a = n.length
                  , r = this._getOtherScale(t)
                  , l = ( (t, e, i) => t && !e.hidden && e._stacked && {
                    keys: d(i, !0),
                    values: null
                })(e, i, this.chart)
                  , h = {
                    min: Number.POSITIVE_INFINITY,
                    max: Number.NEGATIVE_INFINITY
                }
                  , {min: c, max: u} = function(t) {
                    const {min: e, max: i, minDefined: s, maxDefined: n} = t.getUserBounds();
                    return {
                        min: s ? e : Number.NEGATIVE_INFINITY,
                        max: n ? i : Number.POSITIVE_INFINITY
                    }
                }(r);
                let f, g;
                function p() {
                    g = n[f];
                    const e = g[r.axis];
                    return !s.isNumberFinite(g[t.axis]) || c > e || u < e
                }
                for (f = 0; f < a && (p() || (this.updateRangeFromParsed(h, t, g, l),
                !o)); ++f)
                    ;
                if (o)
                    for (f = a - 1; f >= 0; --f)
                        if (!p()) {
                            this.updateRangeFromParsed(h, t, g, l);
                            break
                        }
                return h
            }
            getAllParsedValues(t) {
                const e = this._cachedMeta._parsed
                  , i = [];
                let n, o, a;
                for (n = 0,
                o = e.length; n < o; ++n)
                    a = e[n][t.axis],
                    s.isNumberFinite(a) && i.push(a);
                return i
            }
            getMaxOverflow() {
                return !1
            }
            getLabelAndValue(t) {
                const e = this._cachedMeta
                  , i = e.iScale
                  , s = e.vScale
                  , n = this.getParsed(t);
                return {
                    label: i ? "" + i.getLabelForValue(n[i.axis]) : "",
                    value: s ? "" + s.getLabelForValue(n[s.axis]) : ""
                }
            }
            _update(t) {
                const e = this._cachedMeta;
                this.update(t || "default"),
                e._clip = function(t) {
                    let e, i, n, o;
                    return s.isObject(t) ? (e = t.top,
                    i = t.right,
                    n = t.bottom,
                    o = t.left) : e = i = n = o = t,
                    {
                        top: e,
                        right: i,
                        bottom: n,
                        left: o,
                        disabled: !1 === t
                    }
                }(s.valueOrDefault(this.options.clip, function(t, e, i) {
                    if (!1 === i)
                        return !1;
                    const s = c(t, i)
                      , n = c(e, i);
                    return {
                        top: n.end,
                        right: s.end,
                        bottom: n.start,
                        left: s.start
                    }
                }(e.xScale, e.yScale, this.getMaxOverflow())))
            }
            update(t) {}
            draw() {
                const t = this._ctx
                  , e = this.chart
                  , i = this._cachedMeta
                  , s = i.data || []
                  , n = e.chartArea
                  , o = []
                  , a = this._drawStart || 0
                  , r = this._drawCount || s.length - a
                  , l = this.options.drawActiveElementsOnTop;
                let h;
                for (i.dataset && i.dataset.draw(t, n, a, r),
                h = a; h < a + r; ++h) {
                    const e = s[h];
                    e.hidden || (e.active && l ? o.push(e) : e.draw(t, n))
                }
                for (h = 0; h < o.length; ++h)
                    o[h].draw(t, n)
            }
            getStyle(t, e) {
                const i = e ? "active" : "default";
                return void 0 === t && this._cachedMeta.dataset ? this.resolveDatasetElementOptions(i) : this.resolveDataElementOptions(t || 0, i)
            }
            getContext(t, e, i) {
                const n = this.getDataset();
                let o;
                if (t >= 0 && t < this._cachedMeta.data.length) {
                    const e = this._cachedMeta.data[t];
                    o = e.$context || (e.$context = function(t, e, i) {
                        return s.createContext(t, {
                            active: !1,
                            dataIndex: e,
                            parsed: void 0,
                            raw: void 0,
                            element: i,
                            index: e,
                            mode: "default",
                            type: "data"
                        })
                    }(this.getContext(), t, e)),
                    o.parsed = this.getParsed(t),
                    o.raw = n.data[t],
                    o.index = o.dataIndex = t
                } else
                    o = this.$context || (this.$context = function(t, e) {
                        return s.createContext(t, {
                            active: !1,
                            dataset: void 0,
                            datasetIndex: e,
                            index: e,
                            mode: "default",
                            type: "dataset"
                        })
                    }(this.chart.getContext(), this.index)),
                    o.dataset = n,
                    o.index = o.datasetIndex = this.index;
                return o.active = !!e,
                o.mode = i,
                o
            }
            resolveDatasetElementOptions(t) {
                return this._resolveElementOptions(this.datasetElementType.id, t)
            }
            resolveDataElementOptions(t, e) {
                return this._resolveElementOptions(this.dataElementType.id, e, t)
            }
            _resolveElementOptions(t) {
                let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "default"
                  , i = arguments.length > 2 ? arguments[2] : void 0;
                const n = "active" === e
                  , o = this._cachedDataOpts
                  , a = t + "-" + e
                  , r = o[a]
                  , l = this.enableOptionSharing && s.defined(i);
                if (r)
                    return y(r, l);
                const h = this.chart.config
                  , c = h.datasetElementScopeKeys(this._type, t)
                  , d = n ? [`${t}Hover`, "hover", t, ""] : [t, ""]
                  , u = h.getOptionScopes(this.getDataset(), c)
                  , f = Object.keys(s.defaults.elements[t])
                  , g = h.resolveNamedOptions(u, f, ( () => this.getContext(i, n, e)), d);
                return g.$shared && (g.$shared = l,
                o[a] = Object.freeze(y(g, l))),
                g
            }
            _resolveAnimations(t, e, i) {
                const s = this.chart
                  , n = this._cachedDataOpts
                  , o = `animation-${e}`
                  , a = n[o];
                if (a)
                    return a;
                let r;
                if (!1 !== s.options.animation) {
                    const s = this.chart.config
                      , n = s.datasetAnimationScopeKeys(this._type, e)
                      , o = s.getOptionScopes(this.getDataset(), n);
                    r = s.createResolver(o, this.getContext(t, i, e))
                }
                const l = new h(s,r && r.animations);
                return r && r._cacheable && (n[o] = Object.freeze(l)),
                l
            }
            getSharedOptions(t) {
                if (t.$shared)
                    return this._sharedOptions || (this._sharedOptions = Object.assign({}, t))
            }
            includeOptions(t, e) {
                return !e || _(t) || this.chart._animationsDisabled
            }
            _getSharedOptions(t, e) {
                const i = this.resolveDataElementOptions(t, e)
                  , s = this._sharedOptions
                  , n = this.getSharedOptions(i)
                  , o = this.includeOptions(e, n) || n !== s;
                return this.updateSharedOptions(n, e, i),
                {
                    sharedOptions: n,
                    includeOptions: o
                }
            }
            updateElement(t, e, i, s) {
                _(s) ? Object.assign(t, i) : this._resolveAnimations(e, s).update(t, i)
            }
            updateSharedOptions(t, e, i) {
                t && !_(e) && this._resolveAnimations(void 0, e).update(t, i)
            }
            _setStyle(t, e, i, s) {
                t.active = s;
                const n = this.getStyle(e, s);
                this._resolveAnimations(e, i, s).update(t, {
                    options: !s && this.getSharedOptions(n) || n
                })
            }
            removeHoverStyle(t, e, i) {
                this._setStyle(t, i, "active", !1)
            }
            setHoverStyle(t, e, i) {
                this._setStyle(t, i, "active", !0)
            }
            _removeDatasetHoverStyle() {
                const t = this._cachedMeta.dataset;
                t && this._setStyle(t, void 0, "active", !1)
            }
            _setDatasetHoverStyle() {
                const t = this._cachedMeta.dataset;
                t && this._setStyle(t, void 0, "active", !0)
            }
            _resyncElements(t) {
                const e = this._data
                  , i = this._cachedMeta.data;
                for (const [t,e,i] of this._syncList)
                    this[t](e, i);
                this._syncList = [];
                const s = i.length
                  , n = e.length
                  , o = Math.min(n, s);
                o && this.parse(0, o),
                n > s ? this._insertElements(s, n - s, t) : n < s && this._removeElements(n, s - n)
            }
            _insertElements(t, e) {
                let i = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
                const s = this._cachedMeta
                  , n = s.data
                  , o = t + e;
                let a;
                const r = t => {
                    for (t.length += e,
                    a = t.length - 1; a >= o; a--)
                        t[a] = t[a - e]
                }
                ;
                for (r(n),
                a = t; a < o; ++a)
                    n[a] = new this.dataElementType;
                this._parsing && r(s._parsed),
                this.parse(t, e),
                i && this.updateElements(n, t, e, "reset")
            }
            updateElements(t, e, i, s) {}
            _removeElements(t, e) {
                const i = this._cachedMeta;
                if (this._parsing) {
                    const s = i._parsed.splice(t, e);
                    i._stacked && x(i, s)
                }
                i.data.splice(t, e)
            }
            _sync(t) {
                if (this._parsing)
                    this._syncList.push(t);
                else {
                    const [e,i,s] = t;
                    this[e](i, s)
                }
                this.chart._dataChanges.push([this.index, ...t])
            }
            _onDataPush() {
                const t = arguments.length;
                this._sync(["_insertElements", this.getDataset().data.length - t, t])
            }
            _onDataPop() {
                this._sync(["_removeElements", this._cachedMeta.data.length - 1, 1])
            }
            _onDataShift() {
                this._sync(["_removeElements", 0, 1])
            }
            _onDataSplice(t, e) {
                e && this._sync(["_removeElements", t, e]);
                const i = arguments.length - 2;
                i && this._sync(["_insertElements", t, i])
            }
            _onDataUnshift() {
                this._sync(["_insertElements", 0, arguments.length])
            }
        }
        function w(t) {
            const e = t.iScale
              , i = function(t, e) {
                if (!t._cache.$bar) {
                    const i = t.getMatchingVisibleMetas(e);
                    let n = [];
                    for (let e = 0, s = i.length; e < s; e++)
                        n = n.concat(i[e].controller.getAllParsedValues(t));
                    t._cache.$bar = s._arrayUnique(n.sort(( (t, e) => t - e)))
                }
                return t._cache.$bar
            }(e, t.type);
            let n, o, a, r, l = e._length;
            const h = () => {
                32767 !== a && -32768 !== a && (s.defined(r) && (l = Math.min(l, Math.abs(a - r) || l)),
                r = a)
            }
            ;
            for (n = 0,
            o = i.length; n < o; ++n)
                a = e.getPixelForValue(i[n]),
                h();
            for (r = void 0,
            n = 0,
            o = e.ticks.length; n < o; ++n)
                a = e.getPixelForTick(n),
                h();
            return l
        }
        function M(t, e, i, n) {
            return s.isArray(t) ? function(t, e, i, s) {
                const n = i.parse(t[0], s)
                  , o = i.parse(t[1], s)
                  , a = Math.min(n, o)
                  , r = Math.max(n, o);
                let l = a
                  , h = r;
                Math.abs(a) > Math.abs(r) && (l = r,
                h = a),
                e[i.axis] = h,
                e._custom = {
                    barStart: l,
                    barEnd: h,
                    start: n,
                    end: o,
                    min: a,
                    max: r
                }
            }(t, e, i, n) : e[i.axis] = i.parse(t, n),
            e
        }
        function k(t, e, i, s) {
            const n = t.iScale
              , o = t.vScale
              , a = n.getLabels()
              , r = n === o
              , l = [];
            let h, c, d, u;
            for (h = i,
            c = i + s; h < c; ++h)
                u = e[h],
                d = {},
                d[n.axis] = r || n.parse(a[h], h),
                l.push(M(u, d, o, h));
            return l
        }
        function P(t) {
            return t && void 0 !== t.barStart && void 0 !== t.barEnd
        }
        function S(t, e, i, s) {
            let n = e.borderSkipped;
            const o = {};
            if (!n)
                return void (t.borderSkipped = o);
            if (!0 === n)
                return void (t.borderSkipped = {
                    top: !0,
                    right: !0,
                    bottom: !0,
                    left: !0
                });
            const {start: a, end: r, reverse: l, top: h, bottom: c} = function(t) {
                let e, i, s, n, o;
                return t.horizontal ? (e = t.base > t.x,
                i = "left",
                s = "right") : (e = t.base < t.y,
                i = "bottom",
                s = "top"),
                e ? (n = "end",
                o = "start") : (n = "start",
                o = "end"),
                {
                    start: i,
                    end: s,
                    reverse: e,
                    top: n,
                    bottom: o
                }
            }(t);
            "middle" === n && i && (t.enableBorderRadius = !0,
            (i._top || 0) === s ? n = h : (i._bottom || 0) === s ? n = c : (o[O(c, a, r, l)] = !0,
            n = h)),
            o[O(n, a, r, l)] = !0,
            t.borderSkipped = o
        }
        function O(t, e, i, s) {
            var n, o, a;
            return s ? (a = i,
            t = D(t = (n = t) === (o = e) ? a : n === a ? o : n, i, e)) : t = D(t, e, i),
            t
        }
        function D(t, e, i) {
            return "start" === t ? e : "end" === t ? i : t
        }
        function C(t, e, i) {
            let {inflateAmount: s} = e;
            t.inflateAmount = "auto" === s ? 1 === i ? .33 : 0 : s
        }
        class A extends v {
            static id = "bar";
            static defaults = {
                datasetElementType: !1,
                dataElementType: "bar",
                categoryPercentage: .8,
                barPercentage: .9,
                grouped: !0,
                animations: {
                    numbers: {
                        type: "number",
                        properties: ["x", "y", "base", "width", "height"]
                    }
                }
            };
            static overrides = {
                scales: {
                    _index_: {
                        type: "category",
                        offset: !0,
                        grid: {
                            offset: !0
                        }
                    },
                    _value_: {
                        type: "linear",
                        beginAtZero: !0
                    }
                }
            };
            parsePrimitiveData(t, e, i, s) {
                return k(t, e, i, s)
            }
            parseArrayData(t, e, i, s) {
                return k(t, e, i, s)
            }
            parseObjectData(t, e, i, n) {
                const {iScale: o, vScale: a} = t
                  , {xAxisKey: r="x", yAxisKey: l="y"} = this._parsing
                  , h = "x" === o.axis ? r : l
                  , c = "x" === a.axis ? r : l
                  , d = [];
                let u, f, g, p;
                for (u = i,
                f = i + n; u < f; ++u)
                    p = e[u],
                    g = {},
                    g[o.axis] = o.parse(s.resolveObjectKey(p, h), u),
                    d.push(M(s.resolveObjectKey(p, c), g, a, u));
                return d
            }
            updateRangeFromParsed(t, e, i, s) {
                super.updateRangeFromParsed(t, e, i, s);
                const n = i._custom;
                n && e === this._cachedMeta.vScale && (t.min = Math.min(t.min, n.min),
                t.max = Math.max(t.max, n.max))
            }
            getMaxOverflow() {
                return 0
            }
            getLabelAndValue(t) {
                const e = this._cachedMeta
                  , {iScale: i, vScale: s} = e
                  , n = this.getParsed(t)
                  , o = n._custom
                  , a = P(o) ? "[" + o.start + ", " + o.end + "]" : "" + s.getLabelForValue(n[s.axis]);
                return {
                    label: "" + i.getLabelForValue(n[i.axis]),
                    value: a
                }
            }
            initialize() {
                this.enableOptionSharing = !0,
                super.initialize();
                this._cachedMeta.stack = this.getDataset().stack
            }
            update(t) {
                const e = this._cachedMeta;
                this.updateElements(e.data, 0, e.data.length, t)
            }
            updateElements(t, e, i, n) {
                const o = "reset" === n
                  , {index: a, _cachedMeta: {vScale: r}} = this
                  , l = r.getBasePixel()
                  , h = r.isHorizontal()
                  , c = this._getRuler()
                  , {sharedOptions: d, includeOptions: u} = this._getSharedOptions(e, n);
                for (let f = e; f < e + i; f++) {
                    const e = this.getParsed(f)
                      , i = o || s.isNullOrUndef(e[r.axis]) ? {
                        base: l,
                        head: l
                    } : this._calculateBarValuePixels(f)
                      , g = this._calculateBarIndexPixels(f, c)
                      , p = (e._stacks || {})[r.axis]
                      , m = {
                        horizontal: h,
                        base: i.base,
                        enableBorderRadius: !p || P(e._custom) || a === p._top || a === p._bottom,
                        x: h ? i.head : g.center,
                        y: h ? g.center : i.head,
                        height: h ? g.size : Math.abs(i.size),
                        width: h ? Math.abs(i.size) : g.size
                    };
                    u && (m.options = d || this.resolveDataElementOptions(f, t[f].active ? "active" : n));
                    const b = m.options || t[f].options;
                    S(m, b, p, a),
                    C(m, b, c.ratio),
                    this.updateElement(t[f], f, m, n)
                }
            }
            _getStacks(t, e) {
                const {iScale: i} = this._cachedMeta
                  , n = i.getMatchingVisibleMetas(this._type).filter((t => t.controller.options.grouped))
                  , o = i.options.stacked
                  , a = []
                  , r = t => {
                    const i = t.controller.getParsed(e)
                      , n = i && i[t.vScale.axis];
                    if (s.isNullOrUndef(n) || isNaN(n))
                        return !0
                }
                ;
                for (const i of n)
                    if ((void 0 === e || !r(i)) && ((!1 === o || -1 === a.indexOf(i.stack) || void 0 === o && void 0 === i.stack) && a.push(i.stack),
                    i.index === t))
                        break;
                return a.length || a.push(void 0),
                a
            }
            _getStackCount(t) {
                return this._getStacks(void 0, t).length
            }
            _getStackIndex(t, e, i) {
                const s = this._getStacks(t, i)
                  , n = void 0 !== e ? s.indexOf(e) : -1;
                return -1 === n ? s.length - 1 : n
            }
            _getRuler() {
                const t = this.options
                  , e = this._cachedMeta
                  , i = e.iScale
                  , s = [];
                let n, o;
                for (n = 0,
                o = e.data.length; n < o; ++n)
                    s.push(i.getPixelForValue(this.getParsed(n)[i.axis], n));
                const a = t.barThickness;
                return {
                    min: a || w(e),
                    pixels: s,
                    start: i._startPixel,
                    end: i._endPixel,
                    stackCount: this._getStackCount(),
                    scale: i,
                    grouped: t.grouped,
                    ratio: a ? 1 : t.categoryPercentage * t.barPercentage
                }
            }
            _calculateBarValuePixels(t) {
                const {_cachedMeta: {vScale: e, _stacked: i, index: n}, options: {base: o, minBarLength: a}} = this
                  , r = o || 0
                  , l = this.getParsed(t)
                  , h = l._custom
                  , c = P(h);
                let d, u, f = l[e.axis], g = 0, p = i ? this.applyStack(e, l, i) : f;
                p !== f && (g = p - f,
                p = f),
                c && (f = h.barStart,
                p = h.barEnd - h.barStart,
                0 !== f && s.sign(f) !== s.sign(h.barEnd) && (g = 0),
                g += f);
                const m = s.isNullOrUndef(o) || c ? g : o;
                let b = e.getPixelForValue(m);
                if (d = this.chart.getDataVisibility(t) ? e.getPixelForValue(g + p) : b,
                u = d - b,
                Math.abs(u) < a) {
                    u = function(t, e, i) {
                        return 0 !== t ? s.sign(t) : (e.isHorizontal() ? 1 : -1) * (e.min >= i ? 1 : -1)
                    }(u, e, r) * a,
                    f === r && (b -= u / 2);
                    const t = e.getPixelForDecimal(0)
                      , o = e.getPixelForDecimal(1)
                      , h = Math.min(t, o)
                      , g = Math.max(t, o);
                    b = Math.max(Math.min(b, g), h),
                    d = b + u,
                    i && !c && (l._stacks[e.axis]._visualValues[n] = e.getValueForPixel(d) - e.getValueForPixel(b))
                }
                if (b === e.getPixelForValue(r)) {
                    const t = s.sign(u) * e.getLineWidthForValue(r) / 2;
                    b += t,
                    u -= t
                }
                return {
                    size: u,
                    base: b,
                    head: d,
                    center: d + u / 2
                }
            }
            _calculateBarIndexPixels(t, e) {
                const i = e.scale
                  , n = this.options
                  , o = n.skipNull
                  , a = s.valueOrDefault(n.maxBarThickness, 1 / 0);
                let r, l;
                if (e.grouped) {
                    const i = o ? this._getStackCount(t) : e.stackCount
                      , h = "flex" === n.barThickness ? function(t, e, i, s) {
                        const n = e.pixels
                          , o = n[t];
                        let a = t > 0 ? n[t - 1] : null
                          , r = t < n.length - 1 ? n[t + 1] : null;
                        const l = i.categoryPercentage;
                        null === a && (a = o - (null === r ? e.end - e.start : r - o)),
                        null === r && (r = o + o - a);
                        const h = o - (o - Math.min(a, r)) / 2 * l;
                        return {
                            chunk: Math.abs(r - a) / 2 * l / s,
                            ratio: i.barPercentage,
                            start: h
                        }
                    }(t, e, n, i) : function(t, e, i, n) {
                        const o = i.barThickness;
                        let a, r;
                        return s.isNullOrUndef(o) ? (a = e.min * i.categoryPercentage,
                        r = i.barPercentage) : (a = o * n,
                        r = 1),
                        {
                            chunk: a / n,
                            ratio: r,
                            start: e.pixels[t] - a / 2
                        }
                    }(t, e, n, i)
                      , c = this._getStackIndex(this.index, this._cachedMeta.stack, o ? t : void 0);
                    r = h.start + h.chunk * c + h.chunk / 2,
                    l = Math.min(a, h.chunk * h.ratio)
                } else
                    r = i.getPixelForValue(this.getParsed(t)[i.axis], t),
                    l = Math.min(a, e.min * e.ratio);
                return {
                    base: r - l / 2,
                    head: r + l / 2,
                    center: r,
                    size: l
                }
            }
            draw() {
                const t = this._cachedMeta
                  , e = t.vScale
                  , i = t.data
                  , s = i.length;
                let n = 0;
                for (; n < s; ++n)
                    null !== this.getParsed(n)[e.axis] && i[n].draw(this._ctx)
            }
        }
        class T extends v {
            static id = "bubble";
            static defaults = {
                datasetElementType: !1,
                dataElementType: "point",
                animations: {
                    numbers: {
                        type: "number",
                        properties: ["x", "y", "borderWidth", "radius"]
                    }
                }
            };
            static overrides = {
                scales: {
                    x: {
                        type: "linear"
                    },
                    y: {
                        type: "linear"
                    }
                }
            };
            initialize() {
                this.enableOptionSharing = !0,
                super.initialize()
            }
            parsePrimitiveData(t, e, i, s) {
                const n = super.parsePrimitiveData(t, e, i, s);
                for (let t = 0; t < n.length; t++)
                    n[t]._custom = this.resolveDataElementOptions(t + i).radius;
                return n
            }
            parseArrayData(t, e, i, n) {
                const o = super.parseArrayData(t, e, i, n);
                for (let t = 0; t < o.length; t++) {
                    const n = e[i + t];
                    o[t]._custom = s.valueOrDefault(n[2], this.resolveDataElementOptions(t + i).radius)
                }
                return o
            }
            parseObjectData(t, e, i, n) {
                const o = super.parseObjectData(t, e, i, n);
                for (let t = 0; t < o.length; t++) {
                    const n = e[i + t];
                    o[t]._custom = s.valueOrDefault(n && n.r && +n.r, this.resolveDataElementOptions(t + i).radius)
                }
                return o
            }
            getMaxOverflow() {
                const t = this._cachedMeta.data;
                let e = 0;
                for (let i = t.length - 1; i >= 0; --i)
                    e = Math.max(e, t[i].size(this.resolveDataElementOptions(i)) / 2);
                return e > 0 && e
            }
            getLabelAndValue(t) {
                const e = this._cachedMeta
                  , i = this.chart.data.labels || []
                  , {xScale: s, yScale: n} = e
                  , o = this.getParsed(t)
                  , a = s.getLabelForValue(o.x)
                  , r = n.getLabelForValue(o.y)
                  , l = o._custom;
                return {
                    label: i[t] || "",
                    value: "(" + a + ", " + r + (l ? ", " + l : "") + ")"
                }
            }
            update(t) {
                const e = this._cachedMeta.data;
                this.updateElements(e, 0, e.length, t)
            }
            updateElements(t, e, i, s) {
                const n = "reset" === s
                  , {iScale: o, vScale: a} = this._cachedMeta
                  , {sharedOptions: r, includeOptions: l} = this._getSharedOptions(e, s)
                  , h = o.axis
                  , c = a.axis;
                for (let d = e; d < e + i; d++) {
                    const e = t[d]
                      , i = !n && this.getParsed(d)
                      , u = {}
                      , f = u[h] = n ? o.getPixelForDecimal(.5) : o.getPixelForValue(i[h])
                      , g = u[c] = n ? a.getBasePixel() : a.getPixelForValue(i[c]);
                    u.skip = isNaN(f) || isNaN(g),
                    l && (u.options = r || this.resolveDataElementOptions(d, e.active ? "active" : s),
                    n && (u.options.radius = 0)),
                    this.updateElement(e, d, u, s)
                }
            }
            resolveDataElementOptions(t, e) {
                const i = this.getParsed(t);
                let n = super.resolveDataElementOptions(t, e);
                n.$shared && (n = Object.assign({}, n, {
                    $shared: !1
                }));
                const o = n.radius;
                return "active" !== e && (n.radius = 0),
                n.radius += s.valueOrDefault(i && i._custom, o),
                n
            }
        }
        class R extends v {
            static id = "doughnut";
            static defaults = {
                datasetElementType: !1,
                dataElementType: "arc",
                animation: {
                    animateRotate: !0,
                    animateScale: !1
                },
                animations: {
                    numbers: {
                        type: "number",
                        properties: ["circumference", "endAngle", "innerRadius", "outerRadius", "startAngle", "x", "y", "offset", "borderWidth", "spacing"]
                    }
                },
                cutout: "50%",
                rotation: 0,
                circumference: 360,
                radius: "100%",
                spacing: 0,
                indexAxis: "r"
            };
            static descriptors = {
                _scriptable: t => "spacing" !== t,
                _indexable: t => "spacing" !== t
            };
            static overrides = {
                aspectRatio: 1,
                plugins: {
                    legend: {
                        labels: {
                            generateLabels(t) {
                                const e = t.data;
                                if (e.labels.length && e.datasets.length) {
                                    const {labels: {pointStyle: i, color: s}} = t.legend.options;
                                    return e.labels.map(( (e, n) => {
                                        const o = t.getDatasetMeta(0).controller.getStyle(n);
                                        return {
                                            text: e,
                                            fillStyle: o.backgroundColor,
                                            strokeStyle: o.borderColor,
                                            fontColor: s,
                                            lineWidth: o.borderWidth,
                                            pointStyle: i,
                                            hidden: !t.getDataVisibility(n),
                                            index: n
                                        }
                                    }
                                    ))
                                }
                                return []
                            }
                        },
                        onClick(t, e, i) {
                            i.chart.toggleDataVisibility(e.index),
                            i.chart.update()
                        }
                    }
                }
            };
            constructor(t, e) {
                super(t, e),
                this.enableOptionSharing = !0,
                this.innerRadius = void 0,
                this.outerRadius = void 0,
                this.offsetX = void 0,
                this.offsetY = void 0
            }
            linkScales() {}
            parse(t, e) {
                const i = this.getDataset().data
                  , n = this._cachedMeta;
                if (!1 === this._parsing)
                    n._parsed = i;
                else {
                    let o, a, r = t => +i[t];
                    if (s.isObject(i[t])) {
                        const {key: t="value"} = this._parsing;
                        r = e => +s.resolveObjectKey(i[e], t)
                    }
                    for (o = t,
                    a = t + e; o < a; ++o)
                        n._parsed[o] = r(o)
                }
            }
            _getRotation() {
                return s.toRadians(this.options.rotation - 90)
            }
            _getCircumference() {
                return s.toRadians(this.options.circumference)
            }
            _getRotationExtents() {
                let t = s.TAU
                  , e = -s.TAU;
                for (let i = 0; i < this.chart.data.datasets.length; ++i)
                    if (this.chart.isDatasetVisible(i) && this.chart.getDatasetMeta(i).type === this._type) {
                        const s = this.chart.getDatasetMeta(i).controller
                          , n = s._getRotation()
                          , o = s._getCircumference();
                        t = Math.min(t, n),
                        e = Math.max(e, n + o)
                    }
                return {
                    rotation: t,
                    circumference: e - t
                }
            }
            update(t) {
                const e = this.chart
                  , {chartArea: i} = e
                  , n = this._cachedMeta
                  , o = n.data
                  , a = this.getMaxBorderWidth() + this.getMaxOffset(o) + this.options.spacing
                  , r = Math.max((Math.min(i.width, i.height) - a) / 2, 0)
                  , l = Math.min(s.toPercentage(this.options.cutout, r), 1)
                  , h = this._getRingWeight(this.index)
                  , {circumference: c, rotation: d} = this._getRotationExtents()
                  , {ratioX: u, ratioY: f, offsetX: g, offsetY: p} = function(t, e, i) {
                    let n = 1
                      , o = 1
                      , a = 0
                      , r = 0;
                    if (e < s.TAU) {
                        const l = t
                          , h = l + e
                          , c = Math.cos(l)
                          , d = Math.sin(l)
                          , u = Math.cos(h)
                          , f = Math.sin(h)
                          , g = (t, e, n) => s._angleBetween(t, l, h, !0) ? 1 : Math.max(e, e * i, n, n * i)
                          , p = (t, e, n) => s._angleBetween(t, l, h, !0) ? -1 : Math.min(e, e * i, n, n * i)
                          , m = g(0, c, u)
                          , b = g(s.HALF_PI, d, f)
                          , x = p(s.PI, c, u)
                          , _ = p(s.PI + s.HALF_PI, d, f);
                        n = (m - x) / 2,
                        o = (b - _) / 2,
                        a = -(m + x) / 2,
                        r = -(b + _) / 2
                    }
                    return {
                        ratioX: n,
                        ratioY: o,
                        offsetX: a,
                        offsetY: r
                    }
                }(d, c, l)
                  , m = (i.width - a) / u
                  , b = (i.height - a) / f
                  , x = Math.max(Math.min(m, b) / 2, 0)
                  , _ = s.toDimension(this.options.radius, x)
                  , y = (_ - Math.max(_ * l, 0)) / this._getVisibleDatasetWeightTotal();
                this.offsetX = g * _,
                this.offsetY = p * _,
                n.total = this.calculateTotal(),
                this.outerRadius = _ - y * this._getRingWeightOffset(this.index),
                this.innerRadius = Math.max(this.outerRadius - y * h, 0),
                this.updateElements(o, 0, o.length, t)
            }
            _circumference(t, e) {
                const i = this.options
                  , n = this._cachedMeta
                  , o = this._getCircumference();
                return e && i.animation.animateRotate || !this.chart.getDataVisibility(t) || null === n._parsed[t] || n.data[t].hidden ? 0 : this.calculateCircumference(n._parsed[t] * o / s.TAU)
            }
            updateElements(t, e, i, s) {
                const n = "reset" === s
                  , o = this.chart
                  , a = o.chartArea
                  , r = o.options.animation
                  , l = (a.left + a.right) / 2
                  , h = (a.top + a.bottom) / 2
                  , c = n && r.animateScale
                  , d = c ? 0 : this.innerRadius
                  , u = c ? 0 : this.outerRadius
                  , {sharedOptions: f, includeOptions: g} = this._getSharedOptions(e, s);
                let p, m = this._getRotation();
                for (p = 0; p < e; ++p)
                    m += this._circumference(p, n);
                for (p = e; p < e + i; ++p) {
                    const e = this._circumference(p, n)
                      , i = t[p]
                      , o = {
                        x: l + this.offsetX,
                        y: h + this.offsetY,
                        startAngle: m,
                        endAngle: m + e,
                        circumference: e,
                        outerRadius: u,
                        innerRadius: d
                    };
                    g && (o.options = f || this.resolveDataElementOptions(p, i.active ? "active" : s)),
                    m += e,
                    this.updateElement(i, p, o, s)
                }
            }
            calculateTotal() {
                const t = this._cachedMeta
                  , e = t.data;
                let i, s = 0;
                for (i = 0; i < e.length; i++) {
                    const n = t._parsed[i];
                    null === n || isNaN(n) || !this.chart.getDataVisibility(i) || e[i].hidden || (s += Math.abs(n))
                }
                return s
            }
            calculateCircumference(t) {
                const e = this._cachedMeta.total;
                return e > 0 && !isNaN(t) ? s.TAU * (Math.abs(t) / e) : 0
            }
            getLabelAndValue(t) {
                const e = this._cachedMeta
                  , i = this.chart
                  , n = i.data.labels || []
                  , o = s.formatNumber(e._parsed[t], i.options.locale);
                return {
                    label: n[t] || "",
                    value: o
                }
            }
            getMaxBorderWidth(t) {
                let e = 0;
                const i = this.chart;
                let s, n, o, a, r;
                if (!t)
                    for (s = 0,
                    n = i.data.datasets.length; s < n; ++s)
                        if (i.isDatasetVisible(s)) {
                            o = i.getDatasetMeta(s),
                            t = o.data,
                            a = o.controller;
                            break
                        }
                if (!t)
                    return 0;
                for (s = 0,
                n = t.length; s < n; ++s)
                    r = a.resolveDataElementOptions(s),
                    "inner" !== r.borderAlign && (e = Math.max(e, r.borderWidth || 0, r.hoverBorderWidth || 0));
                return e
            }
            getMaxOffset(t) {
                let e = 0;
                for (let i = 0, s = t.length; i < s; ++i) {
                    const t = this.resolveDataElementOptions(i);
                    e = Math.max(e, t.offset || 0, t.hoverOffset || 0)
                }
                return e
            }
            _getRingWeightOffset(t) {
                let e = 0;
                for (let i = 0; i < t; ++i)
                    this.chart.isDatasetVisible(i) && (e += this._getRingWeight(i));
                return e
            }
            _getRingWeight(t) {
                return Math.max(s.valueOrDefault(this.chart.data.datasets[t].weight, 1), 0)
            }
            _getVisibleDatasetWeightTotal() {
                return this._getRingWeightOffset(this.chart.data.datasets.length) || 1
            }
        }
        class L extends v {
            static id = "line";
            static defaults = {
                datasetElementType: "line",
                dataElementType: "point",
                showLine: !0,
                spanGaps: !1
            };
            static overrides = {
                scales: {
                    _index_: {
                        type: "category"
                    },
                    _value_: {
                        type: "linear"
                    }
                }
            };
            initialize() {
                this.enableOptionSharing = !0,
                this.supportsDecimation = !0,
                super.initialize()
            }
            update(t) {
                const e = this._cachedMeta
                  , {dataset: i, data: n=[], _dataset: o} = e
                  , a = this.chart._animationsDisabled;
                let {start: r, count: l} = s._getStartAndCountOfVisiblePoints(e, n, a);
                this._drawStart = r,
                this._drawCount = l,
                s._scaleRangesChanged(e) && (r = 0,
                l = n.length),
                i._chart = this.chart,
                i._datasetIndex = this.index,
                i._decimated = !!o._decimated,
                i.points = n;
                const h = this.resolveDatasetElementOptions(t);
                this.options.showLine || (h.borderWidth = 0),
                h.segment = this.options.segment,
                this.updateElement(i, void 0, {
                    animated: !a,
                    options: h
                }, t),
                this.updateElements(n, r, l, t)
            }
            updateElements(t, e, i, n) {
                const o = "reset" === n
                  , {iScale: a, vScale: r, _stacked: l, _dataset: h} = this._cachedMeta
                  , {sharedOptions: c, includeOptions: d} = this._getSharedOptions(e, n)
                  , u = a.axis
                  , f = r.axis
                  , {spanGaps: g, segment: p} = this.options
                  , m = s.isNumber(g) ? g : Number.POSITIVE_INFINITY
                  , b = this.chart._animationsDisabled || o || "none" === n
                  , x = e + i
                  , _ = t.length;
                let y = e > 0 && this.getParsed(e - 1);
                for (let i = 0; i < _; ++i) {
                    const g = t[i]
                      , _ = b ? g : {};
                    if (i < e || i >= x) {
                        _.skip = !0;
                        continue
                    }
                    const v = this.getParsed(i)
                      , w = s.isNullOrUndef(v[f])
                      , M = _[u] = a.getPixelForValue(v[u], i)
                      , k = _[f] = o || w ? r.getBasePixel() : r.getPixelForValue(l ? this.applyStack(r, v, l) : v[f], i);
                    _.skip = isNaN(M) || isNaN(k) || w,
                    _.stop = i > 0 && Math.abs(v[u] - y[u]) > m,
                    p && (_.parsed = v,
                    _.raw = h.data[i]),
                    d && (_.options = c || this.resolveDataElementOptions(i, g.active ? "active" : n)),
                    b || this.updateElement(g, i, _, n),
                    y = v
                }
            }
            getMaxOverflow() {
                const t = this._cachedMeta
                  , e = t.dataset
                  , i = e.options && e.options.borderWidth || 0
                  , s = t.data || [];
                if (!s.length)
                    return i;
                const n = s[0].size(this.resolveDataElementOptions(0))
                  , o = s[s.length - 1].size(this.resolveDataElementOptions(s.length - 1));
                return Math.max(i, n, o) / 2
            }
            draw() {
                const t = this._cachedMeta;
                t.dataset.updateControlPoints(this.chart.chartArea, t.iScale.axis),
                super.draw()
            }
        }
        class E extends v {
            static id = "polarArea";
            static defaults = {
                dataElementType: "arc",
                animation: {
                    animateRotate: !0,
                    animateScale: !0
                },
                animations: {
                    numbers: {
                        type: "number",
                        properties: ["x", "y", "startAngle", "endAngle", "innerRadius", "outerRadius"]
                    }
                },
                indexAxis: "r",
                startAngle: 0
            };
            static overrides = {
                aspectRatio: 1,
                plugins: {
                    legend: {
                        labels: {
                            generateLabels(t) {
                                const e = t.data;
                                if (e.labels.length && e.datasets.length) {
                                    const {labels: {pointStyle: i, color: s}} = t.legend.options;
                                    return e.labels.map(( (e, n) => {
                                        const o = t.getDatasetMeta(0).controller.getStyle(n);
                                        return {
                                            text: e,
                                            fillStyle: o.backgroundColor,
                                            strokeStyle: o.borderColor,
                                            fontColor: s,
                                            lineWidth: o.borderWidth,
                                            pointStyle: i,
                                            hidden: !t.getDataVisibility(n),
                                            index: n
                                        }
                                    }
                                    ))
                                }
                                return []
                            }
                        },
                        onClick(t, e, i) {
                            i.chart.toggleDataVisibility(e.index),
                            i.chart.update()
                        }
                    }
                },
                scales: {
                    r: {
                        type: "radialLinear",
                        angleLines: {
                            display: !1
                        },
                        beginAtZero: !0,
                        grid: {
                            circular: !0
                        },
                        pointLabels: {
                            display: !1
                        },
                        startAngle: 0
                    }
                }
            };
            constructor(t, e) {
                super(t, e),
                this.innerRadius = void 0,
                this.outerRadius = void 0
            }
            getLabelAndValue(t) {
                const e = this._cachedMeta
                  , i = this.chart
                  , n = i.data.labels || []
                  , o = s.formatNumber(e._parsed[t].r, i.options.locale);
                return {
                    label: n[t] || "",
                    value: o
                }
            }
            parseObjectData(t, e, i, n) {
                return s._parseObjectDataRadialScale.bind(this)(t, e, i, n)
            }
            update(t) {
                const e = this._cachedMeta.data;
                this._updateRadius(),
                this.updateElements(e, 0, e.length, t)
            }
            getMinMax() {
                const t = this._cachedMeta
                  , e = {
                    min: Number.POSITIVE_INFINITY,
                    max: Number.NEGATIVE_INFINITY
                };
                return t.data.forEach(( (t, i) => {
                    const s = this.getParsed(i).r;
                    !isNaN(s) && this.chart.getDataVisibility(i) && (s < e.min && (e.min = s),
                    s > e.max && (e.max = s))
                }
                )),
                e
            }
            _updateRadius() {
                const t = this.chart
                  , e = t.chartArea
                  , i = t.options
                  , s = Math.min(e.right - e.left, e.bottom - e.top)
                  , n = Math.max(s / 2, 0)
                  , o = (n - Math.max(i.cutoutPercentage ? n / 100 * i.cutoutPercentage : 1, 0)) / t.getVisibleDatasetCount();
                this.outerRadius = n - o * this.index,
                this.innerRadius = this.outerRadius - o
            }
            updateElements(t, e, i, n) {
                const o = "reset" === n
                  , a = this.chart
                  , r = a.options.animation
                  , l = this._cachedMeta.rScale
                  , h = l.xCenter
                  , c = l.yCenter
                  , d = l.getIndexAngle(0) - .5 * s.PI;
                let u, f = d;
                const g = 360 / this.countVisibleElements();
                for (u = 0; u < e; ++u)
                    f += this._computeAngle(u, n, g);
                for (u = e; u < e + i; u++) {
                    const e = t[u];
                    let i = f
                      , s = f + this._computeAngle(u, n, g)
                      , p = a.getDataVisibility(u) ? l.getDistanceFromCenterForValue(this.getParsed(u).r) : 0;
                    f = s,
                    o && (r.animateScale && (p = 0),
                    r.animateRotate && (i = s = d));
                    const m = {
                        x: h,
                        y: c,
                        innerRadius: 0,
                        outerRadius: p,
                        startAngle: i,
                        endAngle: s,
                        options: this.resolveDataElementOptions(u, e.active ? "active" : n)
                    };
                    this.updateElement(e, u, m, n)
                }
            }
            countVisibleElements() {
                const t = this._cachedMeta;
                let e = 0;
                return t.data.forEach(( (t, i) => {
                    !isNaN(this.getParsed(i).r) && this.chart.getDataVisibility(i) && e++
                }
                )),
                e
            }
            _computeAngle(t, e, i) {
                return this.chart.getDataVisibility(t) ? s.toRadians(this.resolveDataElementOptions(t, e).angle || i) : 0
            }
        }
        class I extends R {
            static id = "pie";
            static defaults = {
                cutout: 0,
                rotation: 0,
                circumference: 360,
                radius: "100%"
            }
        }
        class F extends v {
            static id = "radar";
            static defaults = {
                datasetElementType: "line",
                dataElementType: "point",
                indexAxis: "r",
                showLine: !0,
                elements: {
                    line: {
                        fill: "start"
                    }
                }
            };
            static overrides = {
                aspectRatio: 1,
                scales: {
                    r: {
                        type: "radialLinear"
                    }
                }
            };
            getLabelAndValue(t) {
                const e = this._cachedMeta.vScale
                  , i = this.getParsed(t);
                return {
                    label: e.getLabels()[t],
                    value: "" + e.getLabelForValue(i[e.axis])
                }
            }
            parseObjectData(t, e, i, n) {
                return s._parseObjectDataRadialScale.bind(this)(t, e, i, n)
            }
            update(t) {
                const e = this._cachedMeta
                  , i = e.dataset
                  , s = e.data || []
                  , n = e.iScale.getLabels();
                if (i.points = s,
                "resize" !== t) {
                    const e = this.resolveDatasetElementOptions(t);
                    this.options.showLine || (e.borderWidth = 0);
                    const o = {
                        _loop: !0,
                        _fullLoop: n.length === s.length,
                        options: e
                    };
                    this.updateElement(i, void 0, o, t)
                }
                this.updateElements(s, 0, s.length, t)
            }
            updateElements(t, e, i, s) {
                const n = this._cachedMeta.rScale
                  , o = "reset" === s;
                for (let a = e; a < e + i; a++) {
                    const e = t[a]
                      , i = this.resolveDataElementOptions(a, e.active ? "active" : s)
                      , r = n.getPointPositionForValue(a, this.getParsed(a).r)
                      , l = o ? n.xCenter : r.x
                      , h = o ? n.yCenter : r.y
                      , c = {
                        x: l,
                        y: h,
                        angle: r.angle,
                        skip: isNaN(l) || isNaN(h),
                        options: i
                    };
                    this.updateElement(e, a, c, s)
                }
            }
        }
        class z extends v {
            static id = "scatter";
            static defaults = {
                datasetElementType: !1,
                dataElementType: "point",
                showLine: !1,
                fill: !1
            };
            static overrides = {
                interaction: {
                    mode: "point"
                },
                scales: {
                    x: {
                        type: "linear"
                    },
                    y: {
                        type: "linear"
                    }
                }
            };
            getLabelAndValue(t) {
                const e = this._cachedMeta
                  , i = this.chart.data.labels || []
                  , {xScale: s, yScale: n} = e
                  , o = this.getParsed(t)
                  , a = s.getLabelForValue(o.x)
                  , r = n.getLabelForValue(o.y);
                return {
                    label: i[t] || "",
                    value: "(" + a + ", " + r + ")"
                }
            }
            update(t) {
                const e = this._cachedMeta
                  , {data: i=[]} = e
                  , n = this.chart._animationsDisabled;
                let {start: o, count: a} = s._getStartAndCountOfVisiblePoints(e, i, n);
                if (this._drawStart = o,
                this._drawCount = a,
                s._scaleRangesChanged(e) && (o = 0,
                a = i.length),
                this.options.showLine) {
                    const {dataset: s, _dataset: o} = e;
                    s._chart = this.chart,
                    s._datasetIndex = this.index,
                    s._decimated = !!o._decimated,
                    s.points = i;
                    const a = this.resolveDatasetElementOptions(t);
                    a.segment = this.options.segment,
                    this.updateElement(s, void 0, {
                        animated: !n,
                        options: a
                    }, t)
                }
                this.updateElements(i, o, a, t)
            }
            addElements() {
                const {showLine: t} = this.options;
                !this.datasetElementType && t && (this.datasetElementType = this.chart.registry.getElement("line")),
                super.addElements()
            }
            updateElements(t, e, i, n) {
                const o = "reset" === n
                  , {iScale: a, vScale: r, _stacked: l, _dataset: h} = this._cachedMeta
                  , c = this.resolveDataElementOptions(e, n)
                  , d = this.getSharedOptions(c)
                  , u = this.includeOptions(n, d)
                  , f = a.axis
                  , g = r.axis
                  , {spanGaps: p, segment: m} = this.options
                  , b = s.isNumber(p) ? p : Number.POSITIVE_INFINITY
                  , x = this.chart._animationsDisabled || o || "none" === n;
                let _ = e > 0 && this.getParsed(e - 1);
                for (let c = e; c < e + i; ++c) {
                    const e = t[c]
                      , i = this.getParsed(c)
                      , p = x ? e : {}
                      , y = s.isNullOrUndef(i[g])
                      , v = p[f] = a.getPixelForValue(i[f], c)
                      , w = p[g] = o || y ? r.getBasePixel() : r.getPixelForValue(l ? this.applyStack(r, i, l) : i[g], c);
                    p.skip = isNaN(v) || isNaN(w) || y,
                    p.stop = c > 0 && Math.abs(i[f] - _[f]) > b,
                    m && (p.parsed = i,
                    p.raw = h.data[c]),
                    u && (p.options = d || this.resolveDataElementOptions(c, e.active ? "active" : n)),
                    x || this.updateElement(e, c, p, n),
                    _ = i
                }
                this.updateSharedOptions(d, n, c)
            }
            getMaxOverflow() {
                const t = this._cachedMeta
                  , e = t.data || [];
                if (!this.options.showLine) {
                    let t = 0;
                    for (let i = e.length - 1; i >= 0; --i)
                        t = Math.max(t, e[i].size(this.resolveDataElementOptions(i)) / 2);
                    return t > 0 && t
                }
                const i = t.dataset
                  , s = i.options && i.options.borderWidth || 0;
                if (!e.length)
                    return s;
                const n = e[0].size(this.resolveDataElementOptions(0))
                  , o = e[e.length - 1].size(this.resolveDataElementOptions(e.length - 1));
                return Math.max(s, n, o) / 2
            }
        }
        var N = Object.freeze({
            __proto__: null,
            BarController: A,
            BubbleController: T,
            DoughnutController: R,
            LineController: L,
            PolarAreaController: E,
            PieController: I,
            RadarController: F,
            ScatterController: z
        });
        function B() {
            throw new Error("This method is not implemented: Check that a complete date adapter is provided.")
        }
        class j {
            static override(t) {
                Object.assign(j.prototype, t)
            }
            constructor(t) {
                this.options = t || {}
            }
            init() {}
            formats() {
                return B()
            }
            parse() {
                return B()
            }
            format() {
                return B()
            }
            add() {
                return B()
            }
            diff() {
                return B()
            }
            startOf() {
                return B()
            }
            endOf() {
                return B()
            }
        }
        var V = {
            _date: j
        };
        function W(t, e, i, n) {
            const {controller: o, data: a, _sorted: r} = t
              , l = o._cachedMeta.iScale;
            if (l && e === l.axis && "r" !== e && r && a.length) {
                const t = l._reversePixels ? s._rlookupByKey : s._lookupByKey;
                if (!n)
                    return t(a, e, i);
                if (o._sharedOptions) {
                    const s = a[0]
                      , n = "function" == typeof s.getRange && s.getRange(e);
                    if (n) {
                        const s = t(a, e, i - n)
                          , o = t(a, e, i + n);
                        return {
                            lo: s.lo,
                            hi: o.hi
                        }
                    }
                }
            }
            return {
                lo: 0,
                hi: a.length - 1
            }
        }
        function H(t, e, i, s, n) {
            const o = t.getSortedVisibleDatasetMetas()
              , a = i[e];
            for (let t = 0, i = o.length; t < i; ++t) {
                const {index: i, data: r} = o[t]
                  , {lo: l, hi: h} = W(o[t], e, a, n);
                for (let t = l; t <= h; ++t) {
                    const e = r[t];
                    e.skip || s(e, i, t)
                }
            }
        }
        function U(t, e, i, n, o) {
            const a = [];
            if (!o && !t.isPointInArea(e))
                return a;
            return H(t, i, e, (function(i, r, l) {
                (o || s._isPointInArea(i, t.chartArea, 0)) && i.inRange(e.x, e.y, n) && a.push({
                    element: i,
                    datasetIndex: r,
                    index: l
                })
            }
            ), !0),
            a
        }
        function $(t, e, i, s, n, o) {
            let a = [];
            const r = function(t) {
                const e = -1 !== t.indexOf("x")
                  , i = -1 !== t.indexOf("y");
                return function(t, s) {
                    const n = e ? Math.abs(t.x - s.x) : 0
                      , o = i ? Math.abs(t.y - s.y) : 0;
                    return Math.sqrt(Math.pow(n, 2) + Math.pow(o, 2))
                }
            }(i);
            let l = Number.POSITIVE_INFINITY;
            return H(t, i, e, (function(i, h, c) {
                const d = i.inRange(e.x, e.y, n);
                if (s && !d)
                    return;
                const u = i.getCenterPoint(n);
                if (!(!!o || t.isPointInArea(u)) && !d)
                    return;
                const f = r(e, u);
                f < l ? (a = [{
                    element: i,
                    datasetIndex: h,
                    index: c
                }],
                l = f) : f === l && a.push({
                    element: i,
                    datasetIndex: h,
                    index: c
                })
            }
            )),
            a
        }
        function Y(t, e, i, n, o, a) {
            return a || t.isPointInArea(e) ? "r" !== i || n ? $(t, e, i, n, o, a) : function(t, e, i, n) {
                let o = [];
                return H(t, i, e, (function(t, i, a) {
                    const {startAngle: r, endAngle: l} = t.getProps(["startAngle", "endAngle"], n)
                      , {angle: h} = s.getAngleFromPoint(t, {
                        x: e.x,
                        y: e.y
                    });
                    s._angleBetween(h, r, l) && o.push({
                        element: t,
                        datasetIndex: i,
                        index: a
                    })
                }
                )),
                o
            }(t, e, i, o) : []
        }
        function q(t, e, i, s, n) {
            const o = []
              , a = "x" === i ? "inXRange" : "inYRange";
            let r = !1;
            return H(t, i, e, ( (t, s, l) => {
                t[a](e[i], n) && (o.push({
                    element: t,
                    datasetIndex: s,
                    index: l
                }),
                r = r || t.inRange(e.x, e.y, n))
            }
            )),
            s && !r ? [] : o
        }
        var K = {
            evaluateInteractionItems: H,
            modes: {
                index(t, e, i, n) {
                    const o = s.getRelativePosition(e, t)
                      , a = i.axis || "x"
                      , r = i.includeInvisible || !1
                      , l = i.intersect ? U(t, o, a, n, r) : Y(t, o, a, !1, n, r)
                      , h = [];
                    return l.length ? (t.getSortedVisibleDatasetMetas().forEach((t => {
                        const e = l[0].index
                          , i = t.data[e];
                        i && !i.skip && h.push({
                            element: i,
                            datasetIndex: t.index,
                            index: e
                        })
                    }
                    )),
                    h) : []
                },
                dataset(t, e, i, n) {
                    const o = s.getRelativePosition(e, t)
                      , a = i.axis || "xy"
                      , r = i.includeInvisible || !1;
                    let l = i.intersect ? U(t, o, a, n, r) : Y(t, o, a, !1, n, r);
                    if (l.length > 0) {
                        const e = l[0].datasetIndex
                          , i = t.getDatasetMeta(e).data;
                        l = [];
                        for (let t = 0; t < i.length; ++t)
                            l.push({
                                element: i[t],
                                datasetIndex: e,
                                index: t
                            })
                    }
                    return l
                },
                point: (t, e, i, n) => U(t, s.getRelativePosition(e, t), i.axis || "xy", n, i.includeInvisible || !1),
                nearest(t, e, i, n) {
                    const o = s.getRelativePosition(e, t)
                      , a = i.axis || "xy"
                      , r = i.includeInvisible || !1;
                    return Y(t, o, a, i.intersect, n, r)
                },
                x: (t, e, i, n) => q(t, s.getRelativePosition(e, t), "x", i.intersect, n),
                y: (t, e, i, n) => q(t, s.getRelativePosition(e, t), "y", i.intersect, n)
            }
        };
        const X = ["left", "top", "right", "bottom"];
        function G(t, e) {
            return t.filter((t => t.pos === e))
        }
        function J(t, e) {
            return t.filter((t => -1 === X.indexOf(t.pos) && t.box.axis === e))
        }
        function Z(t, e) {
            return t.sort(( (t, i) => {
                const s = e ? i : t
                  , n = e ? t : i;
                return s.weight === n.weight ? s.index - n.index : s.weight - n.weight
            }
            ))
        }
        function Q(t, e) {
            const i = function(t) {
                const e = {};
                for (const i of t) {
                    const {stack: t, pos: s, stackWeight: n} = i;
                    if (!t || !X.includes(s))
                        continue;
                    const o = e[t] || (e[t] = {
                        count: 0,
                        placed: 0,
                        weight: 0,
                        size: 0
                    });
                    o.count++,
                    o.weight += n
                }
                return e
            }(t)
              , {vBoxMaxWidth: s, hBoxMaxHeight: n} = e;
            let o, a, r;
            for (o = 0,
            a = t.length; o < a; ++o) {
                r = t[o];
                const {fullSize: a} = r.box
                  , l = i[r.stack]
                  , h = l && r.stackWeight / l.weight;
                r.horizontal ? (r.width = h ? h * s : a && e.availableWidth,
                r.height = n) : (r.width = s,
                r.height = h ? h * n : a && e.availableHeight)
            }
            return i
        }
        function tt(t, e, i, s) {
            return Math.max(t[i], e[i]) + Math.max(t[s], e[s])
        }
        function et(t, e) {
            t.top = Math.max(t.top, e.top),
            t.left = Math.max(t.left, e.left),
            t.bottom = Math.max(t.bottom, e.bottom),
            t.right = Math.max(t.right, e.right)
        }
        function it(t, e, i, n) {
            const {pos: o, box: a} = i
              , r = t.maxPadding;
            if (!s.isObject(o)) {
                i.size && (t[o] -= i.size);
                const e = n[i.stack] || {
                    size: 0,
                    count: 1
                };
                e.size = Math.max(e.size, i.horizontal ? a.height : a.width),
                i.size = e.size / e.count,
                t[o] += i.size
            }
            a.getPadding && et(r, a.getPadding());
            const l = Math.max(0, e.outerWidth - tt(r, t, "left", "right"))
              , h = Math.max(0, e.outerHeight - tt(r, t, "top", "bottom"))
              , c = l !== t.w
              , d = h !== t.h;
            return t.w = l,
            t.h = h,
            i.horizontal ? {
                same: c,
                other: d
            } : {
                same: d,
                other: c
            }
        }
        function st(t, e) {
            const i = e.maxPadding;
            function s(t) {
                const s = {
                    left: 0,
                    top: 0,
                    right: 0,
                    bottom: 0
                };
                return t.forEach((t => {
                    s[t] = Math.max(e[t], i[t])
                }
                )),
                s
            }
            return s(t ? ["left", "right"] : ["top", "bottom"])
        }
        function nt(t, e, i, s) {
            const n = [];
            let o, a, r, l, h, c;
            for (o = 0,
            a = t.length,
            h = 0; o < a; ++o) {
                r = t[o],
                l = r.box,
                l.update(r.width || e.w, r.height || e.h, st(r.horizontal, e));
                const {same: a, other: d} = it(e, i, r, s);
                h |= a && n.length,
                c = c || d,
                l.fullSize || n.push(r)
            }
            return h && nt(n, e, i, s) || c
        }
        function ot(t, e, i, s, n) {
            t.top = i,
            t.left = e,
            t.right = e + s,
            t.bottom = i + n,
            t.width = s,
            t.height = n
        }
        function at(t, e, i, n) {
            const o = i.padding;
            let {x: a, y: r} = e;
            for (const l of t) {
                const t = l.box
                  , h = n[l.stack] || {
                    count: 1,
                    placed: 0,
                    weight: 1
                }
                  , c = l.stackWeight / h.weight || 1;
                if (l.horizontal) {
                    const n = e.w * c
                      , a = h.size || t.height;
                    s.defined(h.start) && (r = h.start),
                    t.fullSize ? ot(t, o.left, r, i.outerWidth - o.right - o.left, a) : ot(t, e.left + h.placed, r, n, a),
                    h.start = r,
                    h.placed += n,
                    r = t.bottom
                } else {
                    const n = e.h * c
                      , r = h.size || t.width;
                    s.defined(h.start) && (a = h.start),
                    t.fullSize ? ot(t, a, o.top, r, i.outerHeight - o.bottom - o.top) : ot(t, a, e.top + h.placed, r, n),
                    h.start = a,
                    h.placed += n,
                    a = t.right
                }
            }
            e.x = a,
            e.y = r
        }
        var rt = {
            addBox(t, e) {
                t.boxes || (t.boxes = []),
                e.fullSize = e.fullSize || !1,
                e.position = e.position || "top",
                e.weight = e.weight || 0,
                e._layers = e._layers || function() {
                    return [{
                        z: 0,
                        draw(t) {
                            e.draw(t)
                        }
                    }]
                }
                ,
                t.boxes.push(e)
            },
            removeBox(t, e) {
                const i = t.boxes ? t.boxes.indexOf(e) : -1;
                -1 !== i && t.boxes.splice(i, 1)
            },
            configure(t, e, i) {
                e.fullSize = i.fullSize,
                e.position = i.position,
                e.weight = i.weight
            },
            update(t, e, i, n) {
                if (!t)
                    return;
                const o = s.toPadding(t.options.layout.padding)
                  , a = Math.max(e - o.width, 0)
                  , r = Math.max(i - o.height, 0)
                  , l = function(t) {
                    const e = function(t) {
                        const e = [];
                        let i, s, n, o, a, r;
                        for (i = 0,
                        s = (t || []).length; i < s; ++i)
                            n = t[i],
                            ({position: o, options: {stack: a, stackWeight: r=1}} = n),
                            e.push({
                                index: i,
                                box: n,
                                pos: o,
                                horizontal: n.isHorizontal(),
                                weight: n.weight,
                                stack: a && o + a,
                                stackWeight: r
                            });
                        return e
                    }(t)
                      , i = Z(e.filter((t => t.box.fullSize)), !0)
                      , s = Z(G(e, "left"), !0)
                      , n = Z(G(e, "right"))
                      , o = Z(G(e, "top"), !0)
                      , a = Z(G(e, "bottom"))
                      , r = J(e, "x")
                      , l = J(e, "y");
                    return {
                        fullSize: i,
                        leftAndTop: s.concat(o),
                        rightAndBottom: n.concat(l).concat(a).concat(r),
                        chartArea: G(e, "chartArea"),
                        vertical: s.concat(n).concat(l),
                        horizontal: o.concat(a).concat(r)
                    }
                }(t.boxes)
                  , h = l.vertical
                  , c = l.horizontal;
                s.each(t.boxes, (t => {
                    "function" == typeof t.beforeLayout && t.beforeLayout()
                }
                ));
                const d = h.reduce(( (t, e) => e.box.options && !1 === e.box.options.display ? t : t + 1), 0) || 1
                  , u = Object.freeze({
                    outerWidth: e,
                    outerHeight: i,
                    padding: o,
                    availableWidth: a,
                    availableHeight: r,
                    vBoxMaxWidth: a / 2 / d,
                    hBoxMaxHeight: r / 2
                })
                  , f = Object.assign({}, o);
                et(f, s.toPadding(n));
                const g = Object.assign({
                    maxPadding: f,
                    w: a,
                    h: r,
                    x: o.left,
                    y: o.top
                }, o)
                  , p = Q(h.concat(c), u);
                nt(l.fullSize, g, u, p),
                nt(h, g, u, p),
                nt(c, g, u, p) && nt(h, g, u, p),
                function(t) {
                    const e = t.maxPadding;
                    function i(i) {
                        const s = Math.max(e[i] - t[i], 0);
                        return t[i] += s,
                        s
                    }
                    t.y += i("top"),
                    t.x += i("left"),
                    i("right"),
                    i("bottom")
                }(g),
                at(l.leftAndTop, g, u, p),
                g.x += g.w,
                g.y += g.h,
                at(l.rightAndBottom, g, u, p),
                t.chartArea = {
                    left: g.left,
                    top: g.top,
                    right: g.left + g.w,
                    bottom: g.top + g.h,
                    height: g.h,
                    width: g.w
                },
                s.each(l.chartArea, (e => {
                    const i = e.box;
                    Object.assign(i, t.chartArea),
                    i.update(g.w, g.h, {
                        left: 0,
                        top: 0,
                        right: 0,
                        bottom: 0
                    })
                }
                ))
            }
        };
        class lt {
            acquireContext(t, e) {}
            releaseContext(t) {
                return !1
            }
            addEventListener(t, e, i) {}
            removeEventListener(t, e, i) {}
            getDevicePixelRatio() {
                return 1
            }
            getMaximumSize(t, e, i, s) {
                return e = Math.max(0, e || t.width),
                i = i || t.height,
                {
                    width: e,
                    height: Math.max(0, s ? Math.floor(e / s) : i)
                }
            }
            isAttached(t) {
                return !0
            }
            updateConfig(t) {}
        }
        class ht extends lt {
            acquireContext(t) {
                return t && t.getContext && t.getContext("2d") || null
            }
            updateConfig(t) {
                t.options.animation = !1
            }
        }
        const ct = "$chartjs"
          , dt = {
            touchstart: "mousedown",
            touchmove: "mousemove",
            touchend: "mouseup",
            pointerenter: "mouseenter",
            pointerdown: "mousedown",
            pointermove: "mousemove",
            pointerup: "mouseup",
            pointerleave: "mouseout",
            pointerout: "mouseout"
        }
          , ut = t => null === t || "" === t;
        const ft = !!s.supportsEventListenerOptions && {
            passive: !0
        };
        function gt(t, e, i) {
            t.canvas.removeEventListener(e, i, ft)
        }
        function pt(t, e) {
            for (const i of t)
                if (i === e || i.contains(e))
                    return !0
        }
        function mt(t, e, i) {
            const s = t.canvas
              , n = new MutationObserver((t => {
                let e = !1;
                for (const i of t)
                    e = e || pt(i.addedNodes, s),
                    e = e && !pt(i.removedNodes, s);
                e && i()
            }
            ));
            return n.observe(document, {
                childList: !0,
                subtree: !0
            }),
            n
        }
        function bt(t, e, i) {
            const s = t.canvas
              , n = new MutationObserver((t => {
                let e = !1;
                for (const i of t)
                    e = e || pt(i.removedNodes, s),
                    e = e && !pt(i.addedNodes, s);
                e && i()
            }
            ));
            return n.observe(document, {
                childList: !0,
                subtree: !0
            }),
            n
        }
        const xt = new Map;
        let _t = 0;
        function yt() {
            const t = window.devicePixelRatio;
            t !== _t && (_t = t,
            xt.forEach(( (e, i) => {
                i.currentDevicePixelRatio !== t && e()
            }
            )))
        }
        function vt(t, e, i) {
            const n = t.canvas
              , o = n && s._getParentNode(n);
            if (!o)
                return;
            const a = s.throttled(( (t, e) => {
                const s = o.clientWidth;
                i(t, e),
                s < o.clientWidth && i()
            }
            ), window)
              , r = new ResizeObserver((t => {
                const e = t[0]
                  , i = e.contentRect.width
                  , s = e.contentRect.height;
                0 === i && 0 === s || a(i, s)
            }
            ));
            return r.observe(o),
            function(t, e) {
                xt.size || window.addEventListener("resize", yt),
                xt.set(t, e)
            }(t, a),
            r
        }
        function wt(t, e, i) {
            i && i.disconnect(),
            "resize" === e && function(t) {
                xt.delete(t),
                xt.size || window.removeEventListener("resize", yt)
            }(t)
        }
        function Mt(t, e, i) {
            const n = t.canvas
              , o = s.throttled((e => {
                null !== t.ctx && i(function(t, e) {
                    const i = dt[t.type] || t.type
                      , {x: n, y: o} = s.getRelativePosition(t, e);
                    return {
                        type: i,
                        chart: e,
                        native: t,
                        x: void 0 !== n ? n : null,
                        y: void 0 !== o ? o : null
                    }
                }(e, t))
            }
            ), t);
            return function(t, e, i) {
                t.addEventListener(e, i, ft)
            }(n, e, o),
            o
        }
        class kt extends lt {
            acquireContext(t, e) {
                const i = t && t.getContext && t.getContext("2d");
                return i && i.canvas === t ? (function(t, e) {
                    const i = t.style
                      , n = t.getAttribute("height")
                      , o = t.getAttribute("width");
                    if (t[ct] = {
                        initial: {
                            height: n,
                            width: o,
                            style: {
                                display: i.display,
                                height: i.height,
                                width: i.width
                            }
                        }
                    },
                    i.display = i.display || "block",
                    i.boxSizing = i.boxSizing || "border-box",
                    ut(o)) {
                        const e = s.readUsedSize(t, "width");
                        void 0 !== e && (t.width = e)
                    }
                    if (ut(n))
                        if ("" === t.style.height)
                            t.height = t.width / (e || 2);
                        else {
                            const e = s.readUsedSize(t, "height");
                            void 0 !== e && (t.height = e)
                        }
                }(t, e),
                i) : null
            }
            releaseContext(t) {
                const e = t.canvas;
                if (!e[ct])
                    return !1;
                const i = e[ct].initial;
                ["height", "width"].forEach((t => {
                    const n = i[t];
                    s.isNullOrUndef(n) ? e.removeAttribute(t) : e.setAttribute(t, n)
                }
                ));
                const n = i.style || {};
                return Object.keys(n).forEach((t => {
                    e.style[t] = n[t]
                }
                )),
                e.width = e.width,
                delete e[ct],
                !0
            }
            addEventListener(t, e, i) {
                this.removeEventListener(t, e);
                const s = t.$proxies || (t.$proxies = {})
                  , n = {
                    attach: mt,
                    detach: bt,
                    resize: vt
                }[e] || Mt;
                s[e] = n(t, e, i)
            }
            removeEventListener(t, e) {
                const i = t.$proxies || (t.$proxies = {})
                  , s = i[e];
                if (!s)
                    return;
                ({
                    attach: wt,
                    detach: wt,
                    resize: wt
                }[e] || gt)(t, e, s),
                i[e] = void 0
            }
            getDevicePixelRatio() {
                return window.devicePixelRatio
            }
            getMaximumSize(t, e, i, n) {
                return s.getMaximumSize(t, e, i, n)
            }
            isAttached(t) {
                const e = s._getParentNode(t);
                return !(!e || !e.isConnected)
            }
        }
        function Pt(t) {
            return !s._isDomSupported() || "undefined" != typeof OffscreenCanvas && t instanceof OffscreenCanvas ? ht : kt
        }
        class St {
            static defaults = {};
            static defaultRoutes = void 0;
            active = !1;
            tooltipPosition(t) {
                const {x: e, y: i} = this.getProps(["x", "y"], t);
                return {
                    x: e,
                    y: i
                }
            }
            hasValue() {
                return s.isNumber(this.x) && s.isNumber(this.y)
            }
            getProps(t, e) {
                const i = this.$animations;
                if (!e || !i)
                    return this;
                const s = {};
                return t.forEach((t => {
                    s[t] = i[t] && i[t].active() ? i[t]._to : this[t]
                }
                )),
                s
            }
        }
        function Ot(t, e) {
            const i = t.options.ticks
              , n = function(t) {
                const e = t.options.offset
                  , i = t._tickSize()
                  , s = t._length / i + (e ? 0 : 1)
                  , n = t._maxLength / i;
                return Math.floor(Math.min(s, n))
            }(t)
              , o = Math.min(i.maxTicksLimit || n, n)
              , a = i.major.enabled ? function(t) {
                const e = [];
                let i, s;
                for (i = 0,
                s = t.length; i < s; i++)
                    t[i].major && e.push(i);
                return e
            }(e) : []
              , r = a.length
              , l = a[0]
              , h = a[r - 1]
              , c = [];
            if (r > o)
                return function(t, e, i, s) {
                    let n, o = 0, a = i[0];
                    for (s = Math.ceil(s),
                    n = 0; n < t.length; n++)
                        n === a && (e.push(t[n]),
                        o++,
                        a = i[o * s])
                }(e, c, a, r / o),
                c;
            const d = function(t, e, i) {
                const n = function(t) {
                    const e = t.length;
                    let i, s;
                    if (e < 2)
                        return !1;
                    for (s = t[0],
                    i = 1; i < e; ++i)
                        if (t[i] - t[i - 1] !== s)
                            return !1;
                    return s
                }(t)
                  , o = e.length / i;
                if (!n)
                    return Math.max(o, 1);
                const a = s._factorize(n);
                for (let t = 0, e = a.length - 1; t < e; t++) {
                    const e = a[t];
                    if (e > o)
                        return e
                }
                return Math.max(o, 1)
            }(a, e, o);
            if (r > 0) {
                let t, i;
                const n = r > 1 ? Math.round((h - l) / (r - 1)) : null;
                for (Dt(e, c, d, s.isNullOrUndef(n) ? 0 : l - n, l),
                t = 0,
                i = r - 1; t < i; t++)
                    Dt(e, c, d, a[t], a[t + 1]);
                return Dt(e, c, d, h, s.isNullOrUndef(n) ? e.length : h + n),
                c
            }
            return Dt(e, c, d),
            c
        }
        function Dt(t, e, i, n, o) {
            const a = s.valueOrDefault(n, 0)
              , r = Math.min(s.valueOrDefault(o, t.length), t.length);
            let l, h, c, d = 0;
            for (i = Math.ceil(i),
            o && (l = o - n,
            i = l / Math.floor(l / i)),
            c = a; c < 0; )
                d++,
                c = Math.round(a + d * i);
            for (h = Math.max(a, 0); h < r; h++)
                h === c && (e.push(t[h]),
                d++,
                c = Math.round(a + d * i))
        }
        const Ct = (t, e, i) => "top" === e || "left" === e ? t[e] + i : t[e] - i
          , At = (t, e) => Math.min(e || t, t);
        function Tt(t, e) {
            const i = []
              , s = t.length / e
              , n = t.length;
            let o = 0;
            for (; o < n; o += s)
                i.push(t[Math.floor(o)]);
            return i
        }
        function Rt(t, e, i) {
            const s = t.ticks.length
              , n = Math.min(e, s - 1)
              , o = t._startPixel
              , a = t._endPixel
              , r = 1e-6;
            let l, h = t.getPixelForTick(n);
            if (!(i && (l = 1 === s ? Math.max(h - o, a - h) : 0 === e ? (t.getPixelForTick(1) - h) / 2 : (h - t.getPixelForTick(n - 1)) / 2,
            h += n < e ? l : -l,
            h < o - r || h > a + r)))
                return h
        }
        function Lt(t) {
            return t.drawTicks ? t.tickLength : 0
        }
        function Et(t, e) {
            if (!t.display)
                return 0;
            const i = s.toFont(t.font, e)
              , n = s.toPadding(t.padding);
            return (s.isArray(t.text) ? t.text.length : 1) * i.lineHeight + n.height
        }
        function It(t, e, i) {
            let n = s._toLeftRightCenter(t);
            return (i && "right" !== e || !i && "right" === e) && (n = (t => "left" === t ? "right" : "right" === t ? "left" : t)(n)),
            n
        }
        class Ft extends St {
            constructor(t) {
                super(),
                this.id = t.id,
                this.type = t.type,
                this.options = void 0,
                this.ctx = t.ctx,
                this.chart = t.chart,
                this.top = void 0,
                this.bottom = void 0,
                this.left = void 0,
                this.right = void 0,
                this.width = void 0,
                this.height = void 0,
                this._margins = {
                    left: 0,
                    right: 0,
                    top: 0,
                    bottom: 0
                },
                this.maxWidth = void 0,
                this.maxHeight = void 0,
                this.paddingTop = void 0,
                this.paddingBottom = void 0,
                this.paddingLeft = void 0,
                this.paddingRight = void 0,
                this.axis = void 0,
                this.labelRotation = void 0,
                this.min = void 0,
                this.max = void 0,
                this._range = void 0,
                this.ticks = [],
                this._gridLineItems = null,
                this._labelItems = null,
                this._labelSizes = null,
                this._length = 0,
                this._maxLength = 0,
                this._longestTextCache = {},
                this._startPixel = void 0,
                this._endPixel = void 0,
                this._reversePixels = !1,
                this._userMax = void 0,
                this._userMin = void 0,
                this._suggestedMax = void 0,
                this._suggestedMin = void 0,
                this._ticksLength = 0,
                this._borderValue = 0,
                this._cache = {},
                this._dataLimitsCached = !1,
                this.$context = void 0
            }
            init(t) {
                this.options = t.setContext(this.getContext()),
                this.axis = t.axis,
                this._userMin = this.parse(t.min),
                this._userMax = this.parse(t.max),
                this._suggestedMin = this.parse(t.suggestedMin),
                this._suggestedMax = this.parse(t.suggestedMax)
            }
            parse(t, e) {
                return t
            }
            getUserBounds() {
                let {_userMin: t, _userMax: e, _suggestedMin: i, _suggestedMax: n} = this;
                return t = s.finiteOrDefault(t, Number.POSITIVE_INFINITY),
                e = s.finiteOrDefault(e, Number.NEGATIVE_INFINITY),
                i = s.finiteOrDefault(i, Number.POSITIVE_INFINITY),
                n = s.finiteOrDefault(n, Number.NEGATIVE_INFINITY),
                {
                    min: s.finiteOrDefault(t, i),
                    max: s.finiteOrDefault(e, n),
                    minDefined: s.isNumberFinite(t),
                    maxDefined: s.isNumberFinite(e)
                }
            }
            getMinMax(t) {
                let e, {min: i, max: n, minDefined: o, maxDefined: a} = this.getUserBounds();
                if (o && a)
                    return {
                        min: i,
                        max: n
                    };
                const r = this.getMatchingVisibleMetas();
                for (let s = 0, l = r.length; s < l; ++s)
                    e = r[s].controller.getMinMax(this, t),
                    o || (i = Math.min(i, e.min)),
                    a || (n = Math.max(n, e.max));
                return i = a && i > n ? n : i,
                n = o && i > n ? i : n,
                {
                    min: s.finiteOrDefault(i, s.finiteOrDefault(n, i)),
                    max: s.finiteOrDefault(n, s.finiteOrDefault(i, n))
                }
            }
            getPadding() {
                return {
                    left: this.paddingLeft || 0,
                    top: this.paddingTop || 0,
                    right: this.paddingRight || 0,
                    bottom: this.paddingBottom || 0
                }
            }
            getTicks() {
                return this.ticks
            }
            getLabels() {
                const t = this.chart.data;
                return this.options.labels || (this.isHorizontal() ? t.xLabels : t.yLabels) || t.labels || []
            }
            getLabelItems() {
                let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.chart.chartArea;
                return this._labelItems || (this._labelItems = this._computeLabelItems(t))
            }
            beforeLayout() {
                this._cache = {},
                this._dataLimitsCached = !1
            }
            beforeUpdate() {
                s.callback(this.options.beforeUpdate, [this])
            }
            update(t, e, i) {
                const {beginAtZero: n, grace: o, ticks: a} = this.options
                  , r = a.sampleSize;
                this.beforeUpdate(),
                this.maxWidth = t,
                this.maxHeight = e,
                this._margins = i = Object.assign({
                    left: 0,
                    right: 0,
                    top: 0,
                    bottom: 0
                }, i),
                this.ticks = null,
                this._labelSizes = null,
                this._gridLineItems = null,
                this._labelItems = null,
                this.beforeSetDimensions(),
                this.setDimensions(),
                this.afterSetDimensions(),
                this._maxLength = this.isHorizontal() ? this.width + i.left + i.right : this.height + i.top + i.bottom,
                this._dataLimitsCached || (this.beforeDataLimits(),
                this.determineDataLimits(),
                this.afterDataLimits(),
                this._range = s._addGrace(this, o, n),
                this._dataLimitsCached = !0),
                this.beforeBuildTicks(),
                this.ticks = this.buildTicks() || [],
                this.afterBuildTicks();
                const l = r < this.ticks.length;
                this._convertTicksToLabels(l ? Tt(this.ticks, r) : this.ticks),
                this.configure(),
                this.beforeCalculateLabelRotation(),
                this.calculateLabelRotation(),
                this.afterCalculateLabelRotation(),
                a.display && (a.autoSkip || "auto" === a.source) && (this.ticks = Ot(this, this.ticks),
                this._labelSizes = null,
                this.afterAutoSkip()),
                l && this._convertTicksToLabels(this.ticks),
                this.beforeFit(),
                this.fit(),
                this.afterFit(),
                this.afterUpdate()
            }
            configure() {
                let t, e, i = this.options.reverse;
                this.isHorizontal() ? (t = this.left,
                e = this.right) : (t = this.top,
                e = this.bottom,
                i = !i),
                this._startPixel = t,
                this._endPixel = e,
                this._reversePixels = i,
                this._length = e - t,
                this._alignToPixels = this.options.alignToPixels
            }
            afterUpdate() {
                s.callback(this.options.afterUpdate, [this])
            }
            beforeSetDimensions() {
                s.callback(this.options.beforeSetDimensions, [this])
            }
            setDimensions() {
                this.isHorizontal() ? (this.width = this.maxWidth,
                this.left = 0,
                this.right = this.width) : (this.height = this.maxHeight,
                this.top = 0,
                this.bottom = this.height),
                this.paddingLeft = 0,
                this.paddingTop = 0,
                this.paddingRight = 0,
                this.paddingBottom = 0
            }
            afterSetDimensions() {
                s.callback(this.options.afterSetDimensions, [this])
            }
            _callHooks(t) {
                this.chart.notifyPlugins(t, this.getContext()),
                s.callback(this.options[t], [this])
            }
            beforeDataLimits() {
                this._callHooks("beforeDataLimits")
            }
            determineDataLimits() {}
            afterDataLimits() {
                this._callHooks("afterDataLimits")
            }
            beforeBuildTicks() {
                this._callHooks("beforeBuildTicks")
            }
            buildTicks() {
                return []
            }
            afterBuildTicks() {
                this._callHooks("afterBuildTicks")
            }
            beforeTickToLabelConversion() {
                s.callback(this.options.beforeTickToLabelConversion, [this])
            }
            generateTickLabels(t) {
                const e = this.options.ticks;
                let i, n, o;
                for (i = 0,
                n = t.length; i < n; i++)
                    o = t[i],
                    o.label = s.callback(e.callback, [o.value, i, t], this)
            }
            afterTickToLabelConversion() {
                s.callback(this.options.afterTickToLabelConversion, [this])
            }
            beforeCalculateLabelRotation() {
                s.callback(this.options.beforeCalculateLabelRotation, [this])
            }
            calculateLabelRotation() {
                const t = this.options
                  , e = t.ticks
                  , i = At(this.ticks.length, t.ticks.maxTicksLimit)
                  , n = e.minRotation || 0
                  , o = e.maxRotation;
                let a, r, l, h = n;
                if (!this._isVisible() || !e.display || n >= o || i <= 1 || !this.isHorizontal())
                    return void (this.labelRotation = n);
                const c = this._getLabelSizes()
                  , d = c.widest.width
                  , u = c.highest.height
                  , f = s._limitValue(this.chart.width - d, 0, this.maxWidth);
                a = t.offset ? this.maxWidth / i : f / (i - 1),
                d + 6 > a && (a = f / (i - (t.offset ? .5 : 1)),
                r = this.maxHeight - Lt(t.grid) - e.padding - Et(t.title, this.chart.options.font),
                l = Math.sqrt(d * d + u * u),
                h = s.toDegrees(Math.min(Math.asin(s._limitValue((c.highest.height + 6) / a, -1, 1)), Math.asin(s._limitValue(r / l, -1, 1)) - Math.asin(s._limitValue(u / l, -1, 1)))),
                h = Math.max(n, Math.min(o, h))),
                this.labelRotation = h
            }
            afterCalculateLabelRotation() {
                s.callback(this.options.afterCalculateLabelRotation, [this])
            }
            afterAutoSkip() {}
            beforeFit() {
                s.callback(this.options.beforeFit, [this])
            }
            fit() {
                const t = {
                    width: 0,
                    height: 0
                }
                  , {chart: e, options: {ticks: i, title: n, grid: o}} = this
                  , a = this._isVisible()
                  , r = this.isHorizontal();
                if (a) {
                    const a = Et(n, e.options.font);
                    if (r ? (t.width = this.maxWidth,
                    t.height = Lt(o) + a) : (t.height = this.maxHeight,
                    t.width = Lt(o) + a),
                    i.display && this.ticks.length) {
                        const {first: e, last: n, widest: o, highest: a} = this._getLabelSizes()
                          , l = 2 * i.padding
                          , h = s.toRadians(this.labelRotation)
                          , c = Math.cos(h)
                          , d = Math.sin(h);
                        if (r) {
                            const e = i.mirror ? 0 : d * o.width + c * a.height;
                            t.height = Math.min(this.maxHeight, t.height + e + l)
                        } else {
                            const e = i.mirror ? 0 : c * o.width + d * a.height;
                            t.width = Math.min(this.maxWidth, t.width + e + l)
                        }
                        this._calculatePadding(e, n, d, c)
                    }
                }
                this._handleMargins(),
                r ? (this.width = this._length = e.width - this._margins.left - this._margins.right,
                this.height = t.height) : (this.width = t.width,
                this.height = this._length = e.height - this._margins.top - this._margins.bottom)
            }
            _calculatePadding(t, e, i, s) {
                const {ticks: {align: n, padding: o}, position: a} = this.options
                  , r = 0 !== this.labelRotation
                  , l = "top" !== a && "x" === this.axis;
                if (this.isHorizontal()) {
                    const a = this.getPixelForTick(0) - this.left
                      , h = this.right - this.getPixelForTick(this.ticks.length - 1);
                    let c = 0
                      , d = 0;
                    r ? l ? (c = s * t.width,
                    d = i * e.height) : (c = i * t.height,
                    d = s * e.width) : "start" === n ? d = e.width : "end" === n ? c = t.width : "inner" !== n && (c = t.width / 2,
                    d = e.width / 2),
                    this.paddingLeft = Math.max((c - a + o) * this.width / (this.width - a), 0),
                    this.paddingRight = Math.max((d - h + o) * this.width / (this.width - h), 0)
                } else {
                    let i = e.height / 2
                      , s = t.height / 2;
                    "start" === n ? (i = 0,
                    s = t.height) : "end" === n && (i = e.height,
                    s = 0),
                    this.paddingTop = i + o,
                    this.paddingBottom = s + o
                }
            }
            _handleMargins() {
                this._margins && (this._margins.left = Math.max(this.paddingLeft, this._margins.left),
                this._margins.top = Math.max(this.paddingTop, this._margins.top),
                this._margins.right = Math.max(this.paddingRight, this._margins.right),
                this._margins.bottom = Math.max(this.paddingBottom, this._margins.bottom))
            }
            afterFit() {
                s.callback(this.options.afterFit, [this])
            }
            isHorizontal() {
                const {axis: t, position: e} = this.options;
                return "top" === e || "bottom" === e || "x" === t
            }
            isFullSize() {
                return this.options.fullSize
            }
            _convertTicksToLabels(t) {
                let e, i;
                for (this.beforeTickToLabelConversion(),
                this.generateTickLabels(t),
                e = 0,
                i = t.length; e < i; e++)
                    s.isNullOrUndef(t[e].label) && (t.splice(e, 1),
                    i--,
                    e--);
                this.afterTickToLabelConversion()
            }
            _getLabelSizes() {
                let t = this._labelSizes;
                if (!t) {
                    const e = this.options.ticks.sampleSize;
                    let i = this.ticks;
                    e < i.length && (i = Tt(i, e)),
                    this._labelSizes = t = this._computeLabelSizes(i, i.length, this.options.ticks.maxTicksLimit)
                }
                return t
            }
            _computeLabelSizes(t, e, i) {
                const {ctx: n, _longestTextCache: o} = this
                  , a = []
                  , r = []
                  , l = Math.floor(e / At(e, i));
                let h, c, d, u, f, g, p, m, b, x, _, y = 0, v = 0;
                for (h = 0; h < e; h += l) {
                    if (u = t[h].label,
                    f = this._resolveTickFontOptions(h),
                    n.font = g = f.string,
                    p = o[g] = o[g] || {
                        data: {},
                        gc: []
                    },
                    m = f.lineHeight,
                    b = x = 0,
                    s.isNullOrUndef(u) || s.isArray(u)) {
                        if (s.isArray(u))
                            for (c = 0,
                            d = u.length; c < d; ++c)
                                _ = u[c],
                                s.isNullOrUndef(_) || s.isArray(_) || (b = s._measureText(n, p.data, p.gc, b, _),
                                x += m)
                    } else
                        b = s._measureText(n, p.data, p.gc, b, u),
                        x = m;
                    a.push(b),
                    r.push(x),
                    y = Math.max(b, y),
                    v = Math.max(x, v)
                }
                !function(t, e) {
                    s.each(t, (t => {
                        const i = t.gc
                          , s = i.length / 2;
                        let n;
                        if (s > e) {
                            for (n = 0; n < s; ++n)
                                delete t.data[i[n]];
                            i.splice(0, s)
                        }
                    }
                    ))
                }(o, e);
                const w = a.indexOf(y)
                  , M = r.indexOf(v)
                  , k = t => ({
                    width: a[t] || 0,
                    height: r[t] || 0
                });
                return {
                    first: k(0),
                    last: k(e - 1),
                    widest: k(w),
                    highest: k(M),
                    widths: a,
                    heights: r
                }
            }
            getLabelForValue(t) {
                return t
            }
            getPixelForValue(t, e) {
                return NaN
            }
            getValueForPixel(t) {}
            getPixelForTick(t) {
                const e = this.ticks;
                return t < 0 || t > e.length - 1 ? null : this.getPixelForValue(e[t].value)
            }
            getPixelForDecimal(t) {
                this._reversePixels && (t = 1 - t);
                const e = this._startPixel + t * this._length;
                return s._int16Range(this._alignToPixels ? s._alignPixel(this.chart, e, 0) : e)
            }
            getDecimalForPixel(t) {
                const e = (t - this._startPixel) / this._length;
                return this._reversePixels ? 1 - e : e
            }
            getBasePixel() {
                return this.getPixelForValue(this.getBaseValue())
            }
            getBaseValue() {
                const {min: t, max: e} = this;
                return t < 0 && e < 0 ? e : t > 0 && e > 0 ? t : 0
            }
            getContext(t) {
                const e = this.ticks || [];
                if (t >= 0 && t < e.length) {
                    const i = e[t];
                    return i.$context || (i.$context = function(t, e, i) {
                        return s.createContext(t, {
                            tick: i,
                            index: e,
                            type: "tick"
                        })
                    }(this.getContext(), t, i))
                }
                return this.$context || (this.$context = (i = this.chart.getContext(),
                n = this,
                s.createContext(i, {
                    scale: n,
                    type: "scale"
                })));
                var i, n
            }
            _tickSize() {
                const t = this.options.ticks
                  , e = s.toRadians(this.labelRotation)
                  , i = Math.abs(Math.cos(e))
                  , n = Math.abs(Math.sin(e))
                  , o = this._getLabelSizes()
                  , a = t.autoSkipPadding || 0
                  , r = o ? o.widest.width + a : 0
                  , l = o ? o.highest.height + a : 0;
                return this.isHorizontal() ? l * i > r * n ? r / i : l / n : l * n < r * i ? l / i : r / n
            }
            _isVisible() {
                const t = this.options.display;
                return "auto" !== t ? !!t : this.getMatchingVisibleMetas().length > 0
            }
            _computeGridLineItems(t) {
                const e = this.axis
                  , i = this.chart
                  , n = this.options
                  , {grid: o, position: a, border: r} = n
                  , l = o.offset
                  , h = this.isHorizontal()
                  , c = this.ticks.length + (l ? 1 : 0)
                  , d = Lt(o)
                  , u = []
                  , f = r.setContext(this.getContext())
                  , g = f.display ? f.width : 0
                  , p = g / 2
                  , m = function(t) {
                    return s._alignPixel(i, t, g)
                };
                let b, x, _, y, v, w, M, k, P, S, O, D;
                if ("top" === a)
                    b = m(this.bottom),
                    w = this.bottom - d,
                    k = b - p,
                    S = m(t.top) + p,
                    D = t.bottom;
                else if ("bottom" === a)
                    b = m(this.top),
                    S = t.top,
                    D = m(t.bottom) - p,
                    w = b + p,
                    k = this.top + d;
                else if ("left" === a)
                    b = m(this.right),
                    v = this.right - d,
                    M = b - p,
                    P = m(t.left) + p,
                    O = t.right;
                else if ("right" === a)
                    b = m(this.left),
                    P = t.left,
                    O = m(t.right) - p,
                    v = b + p,
                    M = this.left + d;
                else if ("x" === e) {
                    if ("center" === a)
                        b = m((t.top + t.bottom) / 2 + .5);
                    else if (s.isObject(a)) {
                        const t = Object.keys(a)[0]
                          , e = a[t];
                        b = m(this.chart.scales[t].getPixelForValue(e))
                    }
                    S = t.top,
                    D = t.bottom,
                    w = b + p,
                    k = w + d
                } else if ("y" === e) {
                    if ("center" === a)
                        b = m((t.left + t.right) / 2);
                    else if (s.isObject(a)) {
                        const t = Object.keys(a)[0]
                          , e = a[t];
                        b = m(this.chart.scales[t].getPixelForValue(e))
                    }
                    v = b - p,
                    M = v - d,
                    P = t.left,
                    O = t.right
                }
                const C = s.valueOrDefault(n.ticks.maxTicksLimit, c)
                  , A = Math.max(1, Math.ceil(c / C));
                for (x = 0; x < c; x += A) {
                    const t = this.getContext(x)
                      , e = o.setContext(t)
                      , n = r.setContext(t)
                      , a = e.lineWidth
                      , c = e.color
                      , d = n.dash || []
                      , f = n.dashOffset
                      , g = e.tickWidth
                      , p = e.tickColor
                      , m = e.tickBorderDash || []
                      , b = e.tickBorderDashOffset;
                    _ = Rt(this, x, l),
                    void 0 !== _ && (y = s._alignPixel(i, _, a),
                    h ? v = M = P = O = y : w = k = S = D = y,
                    u.push({
                        tx1: v,
                        ty1: w,
                        tx2: M,
                        ty2: k,
                        x1: P,
                        y1: S,
                        x2: O,
                        y2: D,
                        width: a,
                        color: c,
                        borderDash: d,
                        borderDashOffset: f,
                        tickWidth: g,
                        tickColor: p,
                        tickBorderDash: m,
                        tickBorderDashOffset: b
                    }))
                }
                return this._ticksLength = c,
                this._borderValue = b,
                u
            }
            _computeLabelItems(t) {
                const e = this.axis
                  , i = this.options
                  , {position: n, ticks: o} = i
                  , a = this.isHorizontal()
                  , r = this.ticks
                  , {align: l, crossAlign: h, padding: c, mirror: d} = o
                  , u = Lt(i.grid)
                  , f = u + c
                  , g = d ? -c : f
                  , p = -s.toRadians(this.labelRotation)
                  , m = [];
                let b, x, _, y, v, w, M, k, P, S, O, D, C = "middle";
                if ("top" === n)
                    w = this.bottom - g,
                    M = this._getXAxisLabelAlignment();
                else if ("bottom" === n)
                    w = this.top + g,
                    M = this._getXAxisLabelAlignment();
                else if ("left" === n) {
                    const t = this._getYAxisLabelAlignment(u);
                    M = t.textAlign,
                    v = t.x
                } else if ("right" === n) {
                    const t = this._getYAxisLabelAlignment(u);
                    M = t.textAlign,
                    v = t.x
                } else if ("x" === e) {
                    if ("center" === n)
                        w = (t.top + t.bottom) / 2 + f;
                    else if (s.isObject(n)) {
                        const t = Object.keys(n)[0]
                          , e = n[t];
                        w = this.chart.scales[t].getPixelForValue(e) + f
                    }
                    M = this._getXAxisLabelAlignment()
                } else if ("y" === e) {
                    if ("center" === n)
                        v = (t.left + t.right) / 2 - f;
                    else if (s.isObject(n)) {
                        const t = Object.keys(n)[0]
                          , e = n[t];
                        v = this.chart.scales[t].getPixelForValue(e)
                    }
                    M = this._getYAxisLabelAlignment(u).textAlign
                }
                "y" === e && ("start" === l ? C = "top" : "end" === l && (C = "bottom"));
                const A = this._getLabelSizes();
                for (b = 0,
                x = r.length; b < x; ++b) {
                    _ = r[b],
                    y = _.label;
                    const t = o.setContext(this.getContext(b));
                    k = this.getPixelForTick(b) + o.labelOffset,
                    P = this._resolveTickFontOptions(b),
                    S = P.lineHeight,
                    O = s.isArray(y) ? y.length : 1;
                    const e = O / 2
                      , i = t.color
                      , l = t.textStrokeColor
                      , c = t.textStrokeWidth;
                    let u, f = M;
                    if (a ? (v = k,
                    "inner" === M && (f = b === x - 1 ? this.options.reverse ? "left" : "right" : 0 === b ? this.options.reverse ? "right" : "left" : "center"),
                    D = "top" === n ? "near" === h || 0 !== p ? -O * S + S / 2 : "center" === h ? -A.highest.height / 2 - e * S + S : -A.highest.height + S / 2 : "near" === h || 0 !== p ? S / 2 : "center" === h ? A.highest.height / 2 - e * S : A.highest.height - O * S,
                    d && (D *= -1),
                    0 === p || t.showLabelBackdrop || (v += S / 2 * Math.sin(p))) : (w = k,
                    D = (1 - O) * S / 2),
                    t.showLabelBackdrop) {
                        const e = s.toPadding(t.backdropPadding)
                          , i = A.heights[b]
                          , n = A.widths[b];
                        let o = D - e.top
                          , a = 0 - e.left;
                        switch (C) {
                        case "middle":
                            o -= i / 2;
                            break;
                        case "bottom":
                            o -= i
                        }
                        switch (M) {
                        case "center":
                            a -= n / 2;
                            break;
                        case "right":
                            a -= n
                        }
                        u = {
                            left: a,
                            top: o,
                            width: n + e.width,
                            height: i + e.height,
                            color: t.backdropColor
                        }
                    }
                    m.push({
                        label: y,
                        font: P,
                        textOffset: D,
                        options: {
                            rotation: p,
                            color: i,
                            strokeColor: l,
                            strokeWidth: c,
                            textAlign: f,
                            textBaseline: C,
                            translation: [v, w],
                            backdrop: u
                        }
                    })
                }
                return m
            }
            _getXAxisLabelAlignment() {
                const {position: t, ticks: e} = this.options;
                if (-s.toRadians(this.labelRotation))
                    return "top" === t ? "left" : "right";
                let i = "center";
                return "start" === e.align ? i = "left" : "end" === e.align ? i = "right" : "inner" === e.align && (i = "inner"),
                i
            }
            _getYAxisLabelAlignment(t) {
                const {position: e, ticks: {crossAlign: i, mirror: s, padding: n}} = this.options
                  , o = t + n
                  , a = this._getLabelSizes().widest.width;
                let r, l;
                return "left" === e ? s ? (l = this.right + n,
                "near" === i ? r = "left" : "center" === i ? (r = "center",
                l += a / 2) : (r = "right",
                l += a)) : (l = this.right - o,
                "near" === i ? r = "right" : "center" === i ? (r = "center",
                l -= a / 2) : (r = "left",
                l = this.left)) : "right" === e ? s ? (l = this.left + n,
                "near" === i ? r = "right" : "center" === i ? (r = "center",
                l -= a / 2) : (r = "left",
                l -= a)) : (l = this.left + o,
                "near" === i ? r = "left" : "center" === i ? (r = "center",
                l += a / 2) : (r = "right",
                l = this.right)) : r = "right",
                {
                    textAlign: r,
                    x: l
                }
            }
            _computeLabelArea() {
                if (this.options.ticks.mirror)
                    return;
                const t = this.chart
                  , e = this.options.position;
                return "left" === e || "right" === e ? {
                    top: 0,
                    left: this.left,
                    bottom: t.height,
                    right: this.right
                } : "top" === e || "bottom" === e ? {
                    top: this.top,
                    left: 0,
                    bottom: this.bottom,
                    right: t.width
                } : void 0
            }
            drawBackground() {
                const {ctx: t, options: {backgroundColor: e}, left: i, top: s, width: n, height: o} = this;
                e && (t.save(),
                t.fillStyle = e,
                t.fillRect(i, s, n, o),
                t.restore())
            }
            getLineWidthForValue(t) {
                const e = this.options.grid;
                if (!this._isVisible() || !e.display)
                    return 0;
                const i = this.ticks.findIndex((e => e.value === t));
                if (i >= 0) {
                    return e.setContext(this.getContext(i)).lineWidth
                }
                return 0
            }
            drawGrid(t) {
                const e = this.options.grid
                  , i = this.ctx
                  , s = this._gridLineItems || (this._gridLineItems = this._computeGridLineItems(t));
                let n, o;
                const a = (t, e, s) => {
                    s.width && s.color && (i.save(),
                    i.lineWidth = s.width,
                    i.strokeStyle = s.color,
                    i.setLineDash(s.borderDash || []),
                    i.lineDashOffset = s.borderDashOffset,
                    i.beginPath(),
                    i.moveTo(t.x, t.y),
                    i.lineTo(e.x, e.y),
                    i.stroke(),
                    i.restore())
                }
                ;
                if (e.display)
                    for (n = 0,
                    o = s.length; n < o; ++n) {
                        const t = s[n];
                        e.drawOnChartArea && a({
                            x: t.x1,
                            y: t.y1
                        }, {
                            x: t.x2,
                            y: t.y2
                        }, t),
                        e.drawTicks && a({
                            x: t.tx1,
                            y: t.ty1
                        }, {
                            x: t.tx2,
                            y: t.ty2
                        }, {
                            color: t.tickColor,
                            width: t.tickWidth,
                            borderDash: t.tickBorderDash,
                            borderDashOffset: t.tickBorderDashOffset
                        })
                    }
            }
            drawBorder() {
                const {chart: t, ctx: e, options: {border: i, grid: n}} = this
                  , o = i.setContext(this.getContext())
                  , a = i.display ? o.width : 0;
                if (!a)
                    return;
                const r = n.setContext(this.getContext(0)).lineWidth
                  , l = this._borderValue;
                let h, c, d, u;
                this.isHorizontal() ? (h = s._alignPixel(t, this.left, a) - a / 2,
                c = s._alignPixel(t, this.right, r) + r / 2,
                d = u = l) : (d = s._alignPixel(t, this.top, a) - a / 2,
                u = s._alignPixel(t, this.bottom, r) + r / 2,
                h = c = l),
                e.save(),
                e.lineWidth = o.width,
                e.strokeStyle = o.color,
                e.beginPath(),
                e.moveTo(h, d),
                e.lineTo(c, u),
                e.stroke(),
                e.restore()
            }
            drawLabels(t) {
                if (!this.options.ticks.display)
                    return;
                const e = this.ctx
                  , i = this._computeLabelArea();
                i && s.clipArea(e, i);
                const n = this.getLabelItems(t);
                for (const t of n) {
                    const i = t.options
                      , n = t.font
                      , o = t.label
                      , a = t.textOffset;
                    s.renderText(e, o, 0, a, n, i)
                }
                i && s.unclipArea(e)
            }
            drawTitle() {
                const {ctx: t, options: {position: e, title: i, reverse: n}} = this;
                if (!i.display)
                    return;
                const o = s.toFont(i.font)
                  , a = s.toPadding(i.padding)
                  , r = i.align;
                let l = o.lineHeight / 2;
                "bottom" === e || "center" === e || s.isObject(e) ? (l += a.bottom,
                s.isArray(i.text) && (l += o.lineHeight * (i.text.length - 1))) : l += a.top;
                const {titleX: h, titleY: c, maxWidth: d, rotation: u} = function(t, e, i, n) {
                    const {top: o, left: a, bottom: r, right: l, chart: h} = t
                      , {chartArea: c, scales: d} = h;
                    let u, f, g, p = 0;
                    const m = r - o
                      , b = l - a;
                    if (t.isHorizontal()) {
                        if (f = s._alignStartEnd(n, a, l),
                        s.isObject(i)) {
                            const t = Object.keys(i)[0]
                              , s = i[t];
                            g = d[t].getPixelForValue(s) + m - e
                        } else
                            g = "center" === i ? (c.bottom + c.top) / 2 + m - e : Ct(t, i, e);
                        u = l - a
                    } else {
                        if (s.isObject(i)) {
                            const t = Object.keys(i)[0]
                              , s = i[t];
                            f = d[t].getPixelForValue(s) - b + e
                        } else
                            f = "center" === i ? (c.left + c.right) / 2 - b + e : Ct(t, i, e);
                        g = s._alignStartEnd(n, r, o),
                        p = "left" === i ? -s.HALF_PI : s.HALF_PI
                    }
                    return {
                        titleX: f,
                        titleY: g,
                        maxWidth: u,
                        rotation: p
                    }
                }(this, l, e, r);
                s.renderText(t, i.text, 0, 0, o, {
                    color: i.color,
                    maxWidth: d,
                    rotation: u,
                    textAlign: It(r, e, n),
                    textBaseline: "middle",
                    translation: [h, c]
                })
            }
            draw(t) {
                this._isVisible() && (this.drawBackground(),
                this.drawGrid(t),
                this.drawBorder(),
                this.drawTitle(),
                this.drawLabels(t))
            }
            _layers() {
                const t = this.options
                  , e = t.ticks && t.ticks.z || 0
                  , i = s.valueOrDefault(t.grid && t.grid.z, -1)
                  , n = s.valueOrDefault(t.border && t.border.z, 0);
                return this._isVisible() && this.draw === Ft.prototype.draw ? [{
                    z: i,
                    draw: t => {
                        this.drawBackground(),
                        this.drawGrid(t),
                        this.drawTitle()
                    }
                }, {
                    z: n,
                    draw: () => {
                        this.drawBorder()
                    }
                }, {
                    z: e,
                    draw: t => {
                        this.drawLabels(t)
                    }
                }] : [{
                    z: e,
                    draw: t => {
                        this.draw(t)
                    }
                }]
            }
            getMatchingVisibleMetas(t) {
                const e = this.chart.getSortedVisibleDatasetMetas()
                  , i = this.axis + "AxisID"
                  , s = [];
                let n, o;
                for (n = 0,
                o = e.length; n < o; ++n) {
                    const o = e[n];
                    o[i] !== this.id || t && o.type !== t || s.push(o)
                }
                return s
            }
            _resolveTickFontOptions(t) {
                const e = this.options.ticks.setContext(this.getContext(t));
                return s.toFont(e.font)
            }
            _maxDigits() {
                const t = this._resolveTickFontOptions(0).lineHeight;
                return (this.isHorizontal() ? this.width : this.height) / t
            }
        }
        class zt {
            constructor(t, e, i) {
                this.type = t,
                this.scope = e,
                this.override = i,
                this.items = Object.create(null)
            }
            isForType(t) {
                return Object.prototype.isPrototypeOf.call(this.type.prototype, t.prototype)
            }
            register(t) {
                const e = Object.getPrototypeOf(t);
                let i;
                (function(t) {
                    return "id"in t && "defaults"in t
                }
                )(e) && (i = this.register(e));
                const n = this.items
                  , o = t.id
                  , a = this.scope + "." + o;
                if (!o)
                    throw new Error("class does not have id: " + t);
                return o in n || (n[o] = t,
                function(t, e, i) {
                    const n = s.merge(Object.create(null), [i ? s.defaults.get(i) : {}, s.defaults.get(e), t.defaults]);
                    s.defaults.set(e, n),
                    t.defaultRoutes && function(t, e) {
                        Object.keys(e).forEach((i => {
                            const n = i.split(".")
                              , o = n.pop()
                              , a = [t].concat(n).join(".")
                              , r = e[i].split(".")
                              , l = r.pop()
                              , h = r.join(".");
                            s.defaults.route(a, o, h, l)
                        }
                        ))
                    }(e, t.defaultRoutes);
                    t.descriptors && s.defaults.describe(e, t.descriptors)
                }(t, a, i),
                this.override && s.defaults.override(t.id, t.overrides)),
                a
            }
            get(t) {
                return this.items[t]
            }
            unregister(t) {
                const e = this.items
                  , i = t.id
                  , n = this.scope;
                i in e && delete e[i],
                n && i in s.defaults[n] && (delete s.defaults[n][i],
                this.override && delete s.overrides[i])
            }
        }
        class Nt {
            constructor() {
                this.controllers = new zt(v,"datasets",!0),
                this.elements = new zt(St,"elements"),
                this.plugins = new zt(Object,"plugins"),
                this.scales = new zt(Ft,"scales"),
                this._typedRegistries = [this.controllers, this.scales, this.elements]
            }
            add() {
                for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++)
                    e[i] = arguments[i];
                this._each("register", e)
            }
            remove() {
                for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++)
                    e[i] = arguments[i];
                this._each("unregister", e)
            }
            addControllers() {
                for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++)
                    e[i] = arguments[i];
                this._each("register", e, this.controllers)
            }
            addElements() {
                for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++)
                    e[i] = arguments[i];
                this._each("register", e, this.elements)
            }
            addPlugins() {
                for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++)
                    e[i] = arguments[i];
                this._each("register", e, this.plugins)
            }
            addScales() {
                for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++)
                    e[i] = arguments[i];
                this._each("register", e, this.scales)
            }
            getController(t) {
                return this._get(t, this.controllers, "controller")
            }
            getElement(t) {
                return this._get(t, this.elements, "element")
            }
            getPlugin(t) {
                return this._get(t, this.plugins, "plugin")
            }
            getScale(t) {
                return this._get(t, this.scales, "scale")
            }
            removeControllers() {
                for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++)
                    e[i] = arguments[i];
                this._each("unregister", e, this.controllers)
            }
            removeElements() {
                for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++)
                    e[i] = arguments[i];
                this._each("unregister", e, this.elements)
            }
            removePlugins() {
                for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++)
                    e[i] = arguments[i];
                this._each("unregister", e, this.plugins)
            }
            removeScales() {
                for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++)
                    e[i] = arguments[i];
                this._each("unregister", e, this.scales)
            }
            _each(t, e, i) {
                [...e].forEach((e => {
                    const n = i || this._getRegistryForType(e);
                    i || n.isForType(e) || n === this.plugins && e.id ? this._exec(t, n, e) : s.each(e, (e => {
                        const s = i || this._getRegistryForType(e);
                        this._exec(t, s, e)
                    }
                    ))
                }
                ))
            }
            _exec(t, e, i) {
                const n = s._capitalize(t);
                s.callback(i["before" + n], [], i),
                e[t](i),
                s.callback(i["after" + n], [], i)
            }
            _getRegistryForType(t) {
                for (let e = 0; e < this._typedRegistries.length; e++) {
                    const i = this._typedRegistries[e];
                    if (i.isForType(t))
                        return i
                }
                return this.plugins
            }
            _get(t, e, i) {
                const s = e.get(t);
                if (void 0 === s)
                    throw new Error('"' + t + '" is not a registered ' + i + ".");
                return s
            }
        }
        var Bt = new Nt;
        class jt {
            constructor() {
                this._init = []
            }
            notify(t, e, i, s) {
                "beforeInit" === e && (this._init = this._createDescriptors(t, !0),
                this._notify(this._init, t, "install"));
                const n = s ? this._descriptors(t).filter(s) : this._descriptors(t)
                  , o = this._notify(n, t, e, i);
                return "afterDestroy" === e && (this._notify(n, t, "stop"),
                this._notify(this._init, t, "uninstall")),
                o
            }
            _notify(t, e, i, n) {
                n = n || {};
                for (const o of t) {
                    const t = o.plugin
                      , a = t[i]
                      , r = [e, n, o.options];
                    if (!1 === s.callback(a, r, t) && n.cancelable)
                        return !1
                }
                return !0
            }
            invalidate() {
                s.isNullOrUndef(this._cache) || (this._oldCache = this._cache,
                this._cache = void 0)
            }
            _descriptors(t) {
                if (this._cache)
                    return this._cache;
                const e = this._cache = this._createDescriptors(t);
                return this._notifyStateChanges(t),
                e
            }
            _createDescriptors(t, e) {
                const i = t && t.config
                  , n = s.valueOrDefault(i.options && i.options.plugins, {})
                  , o = function(t) {
                    const e = {}
                      , i = []
                      , s = Object.keys(Bt.plugins.items);
                    for (let t = 0; t < s.length; t++)
                        i.push(Bt.getPlugin(s[t]));
                    const n = t.plugins || [];
                    for (let t = 0; t < n.length; t++) {
                        const s = n[t];
                        -1 === i.indexOf(s) && (i.push(s),
                        e[s.id] = !0)
                    }
                    return {
                        plugins: i,
                        localIds: e
                    }
                }(i);
                return !1 !== n || e ? function(t, e, i, s) {
                    let {plugins: n, localIds: o} = e;
                    const a = []
                      , r = t.getContext();
                    for (const e of n) {
                        const n = e.id
                          , l = Vt(i[n], s);
                        null !== l && a.push({
                            plugin: e,
                            options: Wt(t.config, {
                                plugin: e,
                                local: o[n]
                            }, l, r)
                        })
                    }
                    return a
                }(t, o, n, e) : []
            }
            _notifyStateChanges(t) {
                const e = this._oldCache || []
                  , i = this._cache
                  , s = (t, e) => t.filter((t => !e.some((e => t.plugin.id === e.plugin.id))));
                this._notify(s(e, i), t, "stop"),
                this._notify(s(i, e), t, "start")
            }
        }
        function Vt(t, e) {
            return e || !1 !== t ? !0 === t ? {} : t : null
        }
        function Wt(t, e, i, s) {
            let {plugin: n, local: o} = e;
            const a = t.pluginScopeKeys(n)
              , r = t.getOptionScopes(i, a);
            return o && n.defaults && r.push(n.defaults),
            t.createResolver(r, s, [""], {
                scriptable: !1,
                indexable: !1,
                allKeys: !0
            })
        }
        function Ht(t, e) {
            const i = s.defaults.datasets[t] || {};
            return ((e.datasets || {})[t] || {}).indexAxis || e.indexAxis || i.indexAxis || "x"
        }
        function Ut(t, e) {
            if ("x" === t || "y" === t || "r" === t)
                return t;
            var i;
            if (t = e.axis || ("top" === (i = e.position) || "bottom" === i ? "x" : "left" === i || "right" === i ? "y" : void 0) || t.length > 1 && Ut(t[0].toLowerCase(), e))
                return t;
            throw new Error(`Cannot determine type of '${name}' axis. Please provide 'axis' or 'position' option.`)
        }
        function $t(t) {
            const e = t.options || (t.options = {});
            e.plugins = s.valueOrDefault(e.plugins, {}),
            e.scales = function(t, e) {
                const i = s.overrides[t.type] || {
                    scales: {}
                }
                  , n = e.scales || {}
                  , o = Ht(t.type, e)
                  , a = Object.create(null);
                return Object.keys(n).forEach((t => {
                    const e = n[t];
                    if (!s.isObject(e))
                        return console.error(`Invalid scale configuration for scale: ${t}`);
                    if (e._proxy)
                        return console.warn(`Ignoring resolver passed as options for scale: ${t}`);
                    const r = Ut(t, e)
                      , l = function(t, e) {
                        return t === e ? "_index_" : "_value_"
                    }(r, o)
                      , h = i.scales || {};
                    a[t] = s.mergeIf(Object.create(null), [{
                        axis: r
                    }, e, h[r], h[l]])
                }
                )),
                t.data.datasets.forEach((i => {
                    const o = i.type || t.type
                      , r = i.indexAxis || Ht(o, e)
                      , l = (s.overrides[o] || {}).scales || {};
                    Object.keys(l).forEach((t => {
                        const e = function(t, e) {
                            let i = t;
                            return "_index_" === t ? i = e : "_value_" === t && (i = "x" === e ? "y" : "x"),
                            i
                        }(t, r)
                          , o = i[e + "AxisID"] || e;
                        a[o] = a[o] || Object.create(null),
                        s.mergeIf(a[o], [{
                            axis: e
                        }, n[o], l[t]])
                    }
                    ))
                }
                )),
                Object.keys(a).forEach((t => {
                    const e = a[t];
                    s.mergeIf(e, [s.defaults.scales[e.type], s.defaults.scale])
                }
                )),
                a
            }(t, e)
        }
        function Yt(t) {
            return (t = t || {}).datasets = t.datasets || [],
            t.labels = t.labels || [],
            t
        }
        const qt = new Map
          , Kt = new Set;
        function Xt(t, e) {
            let i = qt.get(t);
            return i || (i = e(),
            qt.set(t, i),
            Kt.add(i)),
            i
        }
        const Gt = (t, e, i) => {
            const n = s.resolveObjectKey(e, i);
            void 0 !== n && t.add(n)
        }
        ;
        class Jt {
            constructor(t) {
                this._config = function(t) {
                    return (t = t || {}).data = Yt(t.data),
                    $t(t),
                    t
                }(t),
                this._scopeCache = new Map,
                this._resolverCache = new Map
            }
            get platform() {
                return this._config.platform
            }
            get type() {
                return this._config.type
            }
            set type(t) {
                this._config.type = t
            }
            get data() {
                return this._config.data
            }
            set data(t) {
                this._config.data = Yt(t)
            }
            get options() {
                return this._config.options
            }
            set options(t) {
                this._config.options = t
            }
            get plugins() {
                return this._config.plugins
            }
            update() {
                const t = this._config;
                this.clearCache(),
                $t(t)
            }
            clearCache() {
                this._scopeCache.clear(),
                this._resolverCache.clear()
            }
            datasetScopeKeys(t) {
                return Xt(t, ( () => [[`datasets.${t}`, ""]]))
            }
            datasetAnimationScopeKeys(t, e) {
                return Xt(`${t}.transition.${e}`, ( () => [[`datasets.${t}.transitions.${e}`, `transitions.${e}`], [`datasets.${t}`, ""]]))
            }
            datasetElementScopeKeys(t, e) {
                return Xt(`${t}-${e}`, ( () => [[`datasets.${t}.elements.${e}`, `datasets.${t}`, `elements.${e}`, ""]]))
            }
            pluginScopeKeys(t) {
                const e = t.id;
                return Xt(`${this.type}-plugin-${e}`, ( () => [[`plugins.${e}`, ...t.additionalOptionScopes || []]]))
            }
            _cachedScopes(t, e) {
                const i = this._scopeCache;
                let s = i.get(t);
                return s && !e || (s = new Map,
                i.set(t, s)),
                s
            }
            getOptionScopes(t, e, i) {
                const {options: n, type: o} = this
                  , a = this._cachedScopes(t, i)
                  , r = a.get(e);
                if (r)
                    return r;
                const l = new Set;
                e.forEach((e => {
                    t && (l.add(t),
                    e.forEach((e => Gt(l, t, e)))),
                    e.forEach((t => Gt(l, n, t))),
                    e.forEach((t => Gt(l, s.overrides[o] || {}, t))),
                    e.forEach((t => Gt(l, s.defaults, t))),
                    e.forEach((t => Gt(l, s.descriptors, t)))
                }
                ));
                const h = Array.from(l);
                return 0 === h.length && h.push(Object.create(null)),
                Kt.has(e) && a.set(e, h),
                h
            }
            chartOptionScopes() {
                const {options: t, type: e} = this;
                return [t, s.overrides[e] || {}, s.defaults.datasets[e] || {}, {
                    type: e
                }, s.defaults, s.descriptors]
            }
            resolveNamedOptions(t, e, i) {
                let n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : [""];
                const o = {
                    $shared: !0
                }
                  , {resolver: a, subPrefixes: r} = Zt(this._resolverCache, t, n);
                let l = a;
                if (function(t, e) {
                    const {isScriptable: i, isIndexable: n} = s._descriptors(t);
                    for (const o of e) {
                        const e = i(o)
                          , a = n(o)
                          , r = (a || e) && t[o];
                        if (e && (s.isFunction(r) || Qt(r)) || a && s.isArray(r))
                            return !0
                    }
                    return !1
                }(a, e)) {
                    o.$shared = !1,
                    i = s.isFunction(i) ? i() : i;
                    const e = this.createResolver(t, i, r);
                    l = s._attachContext(a, i, e)
                }
                for (const t of e)
                    o[t] = l[t];
                return o
            }
            createResolver(t, e) {
                let i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [""]
                  , n = arguments.length > 3 ? arguments[3] : void 0;
                const {resolver: o} = Zt(this._resolverCache, t, i);
                return s.isObject(e) ? s._attachContext(o, e, void 0, n) : o
            }
        }
        function Zt(t, e, i) {
            let n = t.get(e);
            n || (n = new Map,
            t.set(e, n));
            const o = i.join();
            let a = n.get(o);
            if (!a) {
                a = {
                    resolver: s._createResolver(e, i),
                    subPrefixes: i.filter((t => !t.toLowerCase().includes("hover")))
                },
                n.set(o, a)
            }
            return a
        }
        const Qt = t => s.isObject(t) && Object.getOwnPropertyNames(t).reduce(( (e, i) => e || s.isFunction(t[i])), !1);
        const te = ["top", "bottom", "left", "right", "chartArea"];
        function ee(t, e) {
            return "top" === t || "bottom" === t || -1 === te.indexOf(t) && "x" === e
        }
        function ie(t, e) {
            return function(i, s) {
                return i[t] === s[t] ? i[e] - s[e] : i[t] - s[t]
            }
        }
        function se(t) {
            const e = t.chart
              , i = e.options.animation;
            e.notifyPlugins("afterRender"),
            s.callback(i && i.onComplete, [t], e)
        }
        function ne(t) {
            const e = t.chart
              , i = e.options.animation;
            s.callback(i && i.onProgress, [t], e)
        }
        function oe(t) {
            return s._isDomSupported() && "string" == typeof t ? t = document.getElementById(t) : t && t.length && (t = t[0]),
            t && t.canvas && (t = t.canvas),
            t
        }
        const ae = {}
          , re = t => {
            const e = oe(t);
            return Object.values(ae).filter((t => t.canvas === e)).pop()
        }
        ;
        function le(t, e, i) {
            const s = Object.keys(t);
            for (const n of s) {
                const s = +n;
                if (s >= e) {
                    const o = t[n];
                    delete t[n],
                    (i > 0 || s > e) && (t[s + i] = o)
                }
            }
        }
        class he {
            static defaults = s.defaults;
            static instances = ae;
            static overrides = s.overrides;
            static registry = Bt;
            static version = "4.2.1";
            static getChart = re;
            static register() {
                Bt.add(...arguments),
                ce()
            }
            static unregister() {
                Bt.remove(...arguments),
                ce()
            }
            constructor(t, e) {
                const i = this.config = new Jt(e)
                  , n = oe(t)
                  , a = re(n);
                if (a)
                    throw new Error("Canvas is already in use. Chart with ID '" + a.id + "' must be destroyed before the canvas with ID '" + a.canvas.id + "' can be reused.");
                const r = i.createResolver(i.chartOptionScopes(), this.getContext());
                this.platform = new (i.platform || Pt(n)),
                this.platform.updateConfig(i);
                const l = this.platform.acquireContext(n, r.aspectRatio)
                  , h = l && l.canvas
                  , c = h && h.height
                  , d = h && h.width;
                this.id = s.uid(),
                this.ctx = l,
                this.canvas = h,
                this.width = d,
                this.height = c,
                this._options = r,
                this._aspectRatio = this.aspectRatio,
                this._layers = [],
                this._metasets = [],
                this._stacks = void 0,
                this.boxes = [],
                this.currentDevicePixelRatio = void 0,
                this.chartArea = void 0,
                this._active = [],
                this._lastEvent = void 0,
                this._listeners = {},
                this._responsiveListeners = void 0,
                this._sortedMetasets = [],
                this.scales = {},
                this._plugins = new jt,
                this.$proxies = {},
                this._hiddenIndices = {},
                this.attached = !1,
                this._animationsDisabled = void 0,
                this.$context = void 0,
                this._doResize = s.debounce((t => this.update(t)), r.resizeDelay || 0),
                this._dataChanges = [],
                ae[this.id] = this,
                l && h ? (o.listen(this, "complete", se),
                o.listen(this, "progress", ne),
                this._initialize(),
                this.attached && this.update()) : console.error("Failed to create chart: can't acquire context from the given item")
            }
            get aspectRatio() {
                const {options: {aspectRatio: t, maintainAspectRatio: e}, width: i, height: n, _aspectRatio: o} = this;
                return s.isNullOrUndef(t) ? e && o ? o : n ? i / n : null : t
            }
            get data() {
                return this.config.data
            }
            set data(t) {
                this.config.data = t
            }
            get options() {
                return this._options
            }
            set options(t) {
                this.config.options = t
            }
            get registry() {
                return Bt
            }
            _initialize() {
                return this.notifyPlugins("beforeInit"),
                this.options.responsive ? this.resize() : s.retinaScale(this, this.options.devicePixelRatio),
                this.bindEvents(),
                this.notifyPlugins("afterInit"),
                this
            }
            clear() {
                return s.clearCanvas(this.canvas, this.ctx),
                this
            }
            stop() {
                return o.stop(this),
                this
            }
            resize(t, e) {
                o.running(this) ? this._resizeBeforeDraw = {
                    width: t,
                    height: e
                } : this._resize(t, e)
            }
            _resize(t, e) {
                const i = this.options
                  , n = this.canvas
                  , o = i.maintainAspectRatio && this.aspectRatio
                  , a = this.platform.getMaximumSize(n, t, e, o)
                  , r = i.devicePixelRatio || this.platform.getDevicePixelRatio()
                  , l = this.width ? "resize" : "attach";
                this.width = a.width,
                this.height = a.height,
                this._aspectRatio = this.aspectRatio,
                s.retinaScale(this, r, !0) && (this.notifyPlugins("resize", {
                    size: a
                }),
                s.callback(i.onResize, [this, a], this),
                this.attached && this._doResize(l) && this.render())
            }
            ensureScalesHaveIDs() {
                const t = this.options.scales || {};
                s.each(t, ( (t, e) => {
                    t.id = e
                }
                ))
            }
            buildOrUpdateScales() {
                const t = this.options
                  , e = t.scales
                  , i = this.scales
                  , n = Object.keys(i).reduce(( (t, e) => (t[e] = !1,
                t)), {});
                let o = [];
                e && (o = o.concat(Object.keys(e).map((t => {
                    const i = e[t]
                      , s = Ut(t, i)
                      , n = "r" === s
                      , o = "x" === s;
                    return {
                        options: i,
                        dposition: n ? "chartArea" : o ? "bottom" : "left",
                        dtype: n ? "radialLinear" : o ? "category" : "linear"
                    }
                }
                )))),
                s.each(o, (e => {
                    const o = e.options
                      , a = o.id
                      , r = Ut(a, o)
                      , l = s.valueOrDefault(o.type, e.dtype);
                    void 0 !== o.position && ee(o.position, r) === ee(e.dposition) || (o.position = e.dposition),
                    n[a] = !0;
                    let h = null;
                    if (a in i && i[a].type === l)
                        h = i[a];
                    else {
                        h = new (Bt.getScale(l))({
                            id: a,
                            type: l,
                            ctx: this.ctx,
                            chart: this
                        }),
                        i[h.id] = h
                    }
                    h.init(o, t)
                }
                )),
                s.each(n, ( (t, e) => {
                    t || delete i[e]
                }
                )),
                s.each(i, (t => {
                    rt.configure(this, t, t.options),
                    rt.addBox(this, t)
                }
                ))
            }
            _updateMetasets() {
                const t = this._metasets
                  , e = this.data.datasets.length
                  , i = t.length;
                if (t.sort(( (t, e) => t.index - e.index)),
                i > e) {
                    for (let t = e; t < i; ++t)
                        this._destroyDatasetMeta(t);
                    t.splice(e, i - e)
                }
                this._sortedMetasets = t.slice(0).sort(ie("order", "index"))
            }
            _removeUnreferencedMetasets() {
                const {_metasets: t, data: {datasets: e}} = this;
                t.length > e.length && delete this._stacks,
                t.forEach(( (t, i) => {
                    0 === e.filter((e => e === t._dataset)).length && this._destroyDatasetMeta(i)
                }
                ))
            }
            buildOrUpdateControllers() {
                const t = []
                  , e = this.data.datasets;
                let i, n;
                for (this._removeUnreferencedMetasets(),
                i = 0,
                n = e.length; i < n; i++) {
                    const n = e[i];
                    let o = this.getDatasetMeta(i);
                    const a = n.type || this.config.type;
                    if (o.type && o.type !== a && (this._destroyDatasetMeta(i),
                    o = this.getDatasetMeta(i)),
                    o.type = a,
                    o.indexAxis = n.indexAxis || Ht(a, this.options),
                    o.order = n.order || 0,
                    o.index = i,
                    o.label = "" + n.label,
                    o.visible = this.isDatasetVisible(i),
                    o.controller)
                        o.controller.updateIndex(i),
                        o.controller.linkScales();
                    else {
                        const e = Bt.getController(a)
                          , {datasetElementType: n, dataElementType: r} = s.defaults.datasets[a];
                        Object.assign(e, {
                            dataElementType: Bt.getElement(r),
                            datasetElementType: n && Bt.getElement(n)
                        }),
                        o.controller = new e(this,i),
                        t.push(o.controller)
                    }
                }
                return this._updateMetasets(),
                t
            }
            _resetElements() {
                s.each(this.data.datasets, ( (t, e) => {
                    this.getDatasetMeta(e).controller.reset()
                }
                ), this)
            }
            reset() {
                this._resetElements(),
                this.notifyPlugins("reset")
            }
            update(t) {
                const e = this.config;
                e.update();
                const i = this._options = e.createResolver(e.chartOptionScopes(), this.getContext())
                  , n = this._animationsDisabled = !i.animation;
                if (this._updateScales(),
                this._checkEventBindings(),
                this._updateHiddenIndices(),
                this._plugins.invalidate(),
                !1 === this.notifyPlugins("beforeUpdate", {
                    mode: t,
                    cancelable: !0
                }))
                    return;
                const o = this.buildOrUpdateControllers();
                this.notifyPlugins("beforeElementsUpdate");
                let a = 0;
                for (let t = 0, e = this.data.datasets.length; t < e; t++) {
                    const {controller: e} = this.getDatasetMeta(t)
                      , i = !n && -1 === o.indexOf(e);
                    e.buildOrUpdateElements(i),
                    a = Math.max(+e.getMaxOverflow(), a)
                }
                a = this._minPadding = i.layout.autoPadding ? a : 0,
                this._updateLayout(a),
                n || s.each(o, (t => {
                    t.reset()
                }
                )),
                this._updateDatasets(t),
                this.notifyPlugins("afterUpdate", {
                    mode: t
                }),
                this._layers.sort(ie("z", "_idx"));
                const {_active: r, _lastEvent: l} = this;
                l ? this._eventHandler(l, !0) : r.length && this._updateHoverStyles(r, r, !0),
                this.render()
            }
            _updateScales() {
                s.each(this.scales, (t => {
                    rt.removeBox(this, t)
                }
                )),
                this.ensureScalesHaveIDs(),
                this.buildOrUpdateScales()
            }
            _checkEventBindings() {
                const t = this.options
                  , e = new Set(Object.keys(this._listeners))
                  , i = new Set(t.events);
                s.setsEqual(e, i) && !!this._responsiveListeners === t.responsive || (this.unbindEvents(),
                this.bindEvents())
            }
            _updateHiddenIndices() {
                const {_hiddenIndices: t} = this
                  , e = this._getUniformDataChanges() || [];
                for (const {method: i, start: s, count: n} of e) {
                    le(t, s, "_removeElements" === i ? -n : n)
                }
            }
            _getUniformDataChanges() {
                const t = this._dataChanges;
                if (!t || !t.length)
                    return;
                this._dataChanges = [];
                const e = this.data.datasets.length
                  , i = e => new Set(t.filter((t => t[0] === e)).map(( (t, e) => e + "," + t.splice(1).join(","))))
                  , n = i(0);
                for (let t = 1; t < e; t++)
                    if (!s.setsEqual(n, i(t)))
                        return;
                return Array.from(n).map((t => t.split(","))).map((t => ({
                    method: t[1],
                    start: +t[2],
                    count: +t[3]
                })))
            }
            _updateLayout(t) {
                if (!1 === this.notifyPlugins("beforeLayout", {
                    cancelable: !0
                }))
                    return;
                rt.update(this, this.width, this.height, t);
                const e = this.chartArea
                  , i = e.width <= 0 || e.height <= 0;
                this._layers = [],
                s.each(this.boxes, (t => {
                    i && "chartArea" === t.position || (t.configure && t.configure(),
                    this._layers.push(...t._layers()))
                }
                ), this),
                this._layers.forEach(( (t, e) => {
                    t._idx = e
                }
                )),
                this.notifyPlugins("afterLayout")
            }
            _updateDatasets(t) {
                if (!1 !== this.notifyPlugins("beforeDatasetsUpdate", {
                    mode: t,
                    cancelable: !0
                })) {
                    for (let t = 0, e = this.data.datasets.length; t < e; ++t)
                        this.getDatasetMeta(t).controller.configure();
                    for (let e = 0, i = this.data.datasets.length; e < i; ++e)
                        this._updateDataset(e, s.isFunction(t) ? t({
                            datasetIndex: e
                        }) : t);
                    this.notifyPlugins("afterDatasetsUpdate", {
                        mode: t
                    })
                }
            }
            _updateDataset(t, e) {
                const i = this.getDatasetMeta(t)
                  , s = {
                    meta: i,
                    index: t,
                    mode: e,
                    cancelable: !0
                };
                !1 !== this.notifyPlugins("beforeDatasetUpdate", s) && (i.controller._update(e),
                s.cancelable = !1,
                this.notifyPlugins("afterDatasetUpdate", s))
            }
            render() {
                !1 !== this.notifyPlugins("beforeRender", {
                    cancelable: !0
                }) && (o.has(this) ? this.attached && !o.running(this) && o.start(this) : (this.draw(),
                se({
                    chart: this
                })))
            }
            draw() {
                let t;
                if (this._resizeBeforeDraw) {
                    const {width: t, height: e} = this._resizeBeforeDraw;
                    this._resize(t, e),
                    this._resizeBeforeDraw = null
                }
                if (this.clear(),
                this.width <= 0 || this.height <= 0)
                    return;
                if (!1 === this.notifyPlugins("beforeDraw", {
                    cancelable: !0
                }))
                    return;
                const e = this._layers;
                for (t = 0; t < e.length && e[t].z <= 0; ++t)
                    e[t].draw(this.chartArea);
                for (this._drawDatasets(); t < e.length; ++t)
                    e[t].draw(this.chartArea);
                this.notifyPlugins("afterDraw")
            }
            _getSortedDatasetMetas(t) {
                const e = this._sortedMetasets
                  , i = [];
                let s, n;
                for (s = 0,
                n = e.length; s < n; ++s) {
                    const n = e[s];
                    t && !n.visible || i.push(n)
                }
                return i
            }
            getSortedVisibleDatasetMetas() {
                return this._getSortedDatasetMetas(!0)
            }
            _drawDatasets() {
                if (!1 === this.notifyPlugins("beforeDatasetsDraw", {
                    cancelable: !0
                }))
                    return;
                const t = this.getSortedVisibleDatasetMetas();
                for (let e = t.length - 1; e >= 0; --e)
                    this._drawDataset(t[e]);
                this.notifyPlugins("afterDatasetsDraw")
            }
            _drawDataset(t) {
                const e = this.ctx
                  , i = t._clip
                  , n = !i.disabled
                  , o = function(t) {
                    const {xScale: e, yScale: i} = t;
                    if (e && i)
                        return {
                            left: e.left,
                            right: e.right,
                            top: i.top,
                            bottom: i.bottom
                        }
                }(t) || this.chartArea
                  , a = {
                    meta: t,
                    index: t.index,
                    cancelable: !0
                };
                !1 !== this.notifyPlugins("beforeDatasetDraw", a) && (n && s.clipArea(e, {
                    left: !1 === i.left ? 0 : o.left - i.left,
                    right: !1 === i.right ? this.width : o.right + i.right,
                    top: !1 === i.top ? 0 : o.top - i.top,
                    bottom: !1 === i.bottom ? this.height : o.bottom + i.bottom
                }),
                t.controller.draw(),
                n && s.unclipArea(e),
                a.cancelable = !1,
                this.notifyPlugins("afterDatasetDraw", a))
            }
            isPointInArea(t) {
                return s._isPointInArea(t, this.chartArea, this._minPadding)
            }
            getElementsAtEventForMode(t, e, i, s) {
                const n = K.modes[e];
                return "function" == typeof n ? n(this, t, i, s) : []
            }
            getDatasetMeta(t) {
                const e = this.data.datasets[t]
                  , i = this._metasets;
                let s = i.filter((t => t && t._dataset === e)).pop();
                return s || (s = {
                    type: null,
                    data: [],
                    dataset: null,
                    controller: null,
                    hidden: null,
                    xAxisID: null,
                    yAxisID: null,
                    order: e && e.order || 0,
                    index: t,
                    _dataset: e,
                    _parsed: [],
                    _sorted: !1
                },
                i.push(s)),
                s
            }
            getContext() {
                return this.$context || (this.$context = s.createContext(null, {
                    chart: this,
                    type: "chart"
                }))
            }
            getVisibleDatasetCount() {
                return this.getSortedVisibleDatasetMetas().length
            }
            isDatasetVisible(t) {
                const e = this.data.datasets[t];
                if (!e)
                    return !1;
                const i = this.getDatasetMeta(t);
                return "boolean" == typeof i.hidden ? !i.hidden : !e.hidden
            }
            setDatasetVisibility(t, e) {
                this.getDatasetMeta(t).hidden = !e
            }
            toggleDataVisibility(t) {
                this._hiddenIndices[t] = !this._hiddenIndices[t]
            }
            getDataVisibility(t) {
                return !this._hiddenIndices[t]
            }
            _updateVisibility(t, e, i) {
                const n = i ? "show" : "hide"
                  , o = this.getDatasetMeta(t)
                  , a = o.controller._resolveAnimations(void 0, n);
                s.defined(e) ? (o.data[e].hidden = !i,
                this.update()) : (this.setDatasetVisibility(t, i),
                a.update(o, {
                    visible: i
                }),
                this.update((e => e.datasetIndex === t ? n : void 0)))
            }
            hide(t, e) {
                this._updateVisibility(t, e, !1)
            }
            show(t, e) {
                this._updateVisibility(t, e, !0)
            }
            _destroyDatasetMeta(t) {
                const e = this._metasets[t];
                e && e.controller && e.controller._destroy(),
                delete this._metasets[t]
            }
            _stop() {
                let t, e;
                for (this.stop(),
                o.remove(this),
                t = 0,
                e = this.data.datasets.length; t < e; ++t)
                    this._destroyDatasetMeta(t)
            }
            destroy() {
                this.notifyPlugins("beforeDestroy");
                const {canvas: t, ctx: e} = this;
                this._stop(),
                this.config.clearCache(),
                t && (this.unbindEvents(),
                s.clearCanvas(t, e),
                this.platform.releaseContext(e),
                this.canvas = null,
                this.ctx = null),
                delete ae[this.id],
                this.notifyPlugins("afterDestroy")
            }
            toBase64Image() {
                return this.canvas.toDataURL(...arguments)
            }
            bindEvents() {
                this.bindUserEvents(),
                this.options.responsive ? this.bindResponsiveEvents() : this.attached = !0
            }
            bindUserEvents() {
                const t = this._listeners
                  , e = this.platform
                  , i = (i, s) => {
                    e.addEventListener(this, i, s),
                    t[i] = s
                }
                  , n = (t, e, i) => {
                    t.offsetX = e,
                    t.offsetY = i,
                    this._eventHandler(t)
                }
                ;
                s.each(this.options.events, (t => i(t, n)))
            }
            bindResponsiveEvents() {
                this._responsiveListeners || (this._responsiveListeners = {});
                const t = this._responsiveListeners
                  , e = this.platform
                  , i = (i, s) => {
                    e.addEventListener(this, i, s),
                    t[i] = s
                }
                  , s = (i, s) => {
                    t[i] && (e.removeEventListener(this, i, s),
                    delete t[i])
                }
                  , n = (t, e) => {
                    this.canvas && this.resize(t, e)
                }
                ;
                let o;
                const a = () => {
                    s("attach", a),
                    this.attached = !0,
                    this.resize(),
                    i("resize", n),
                    i("detach", o)
                }
                ;
                o = () => {
                    this.attached = !1,
                    s("resize", n),
                    this._stop(),
                    this._resize(0, 0),
                    i("attach", a)
                }
                ,
                e.isAttached(this.canvas) ? a() : o()
            }
            unbindEvents() {
                s.each(this._listeners, ( (t, e) => {
                    this.platform.removeEventListener(this, e, t)
                }
                )),
                this._listeners = {},
                s.each(this._responsiveListeners, ( (t, e) => {
                    this.platform.removeEventListener(this, e, t)
                }
                )),
                this._responsiveListeners = void 0
            }
            updateHoverStyle(t, e, i) {
                const s = i ? "set" : "remove";
                let n, o, a, r;
                for ("dataset" === e && (n = this.getDatasetMeta(t[0].datasetIndex),
                n.controller["_" + s + "DatasetHoverStyle"]()),
                a = 0,
                r = t.length; a < r; ++a) {
                    o = t[a];
                    const e = o && this.getDatasetMeta(o.datasetIndex).controller;
                    e && e[s + "HoverStyle"](o.element, o.datasetIndex, o.index)
                }
            }
            getActiveElements() {
                return this._active || []
            }
            setActiveElements(t) {
                const e = this._active || []
                  , i = t.map((t => {
                    let {datasetIndex: e, index: i} = t;
                    const s = this.getDatasetMeta(e);
                    if (!s)
                        throw new Error("No dataset found at index " + e);
                    return {
                        datasetIndex: e,
                        element: s.data[i],
                        index: i
                    }
                }
                ));
                !s._elementsEqual(i, e) && (this._active = i,
                this._lastEvent = null,
                this._updateHoverStyles(i, e))
            }
            notifyPlugins(t, e, i) {
                return this._plugins.notify(this, t, e, i)
            }
            isPluginEnabled(t) {
                return 1 === this._plugins._cache.filter((e => e.plugin.id === t)).length
            }
            _updateHoverStyles(t, e, i) {
                const s = this.options.hover
                  , n = (t, e) => t.filter((t => !e.some((e => t.datasetIndex === e.datasetIndex && t.index === e.index))))
                  , o = n(e, t)
                  , a = i ? t : n(t, e);
                o.length && this.updateHoverStyle(o, s.mode, !1),
                a.length && s.mode && this.updateHoverStyle(a, s.mode, !0)
            }
            _eventHandler(t, e) {
                const i = {
                    event: t,
                    replay: e,
                    cancelable: !0,
                    inChartArea: this.isPointInArea(t)
                }
                  , s = e => (e.options.events || this.options.events).includes(t.native.type);
                if (!1 === this.notifyPlugins("beforeEvent", i, s))
                    return;
                const n = this._handleEvent(t, e, i.inChartArea);
                return i.cancelable = !1,
                this.notifyPlugins("afterEvent", i, s),
                (n || i.changed) && this.render(),
                this
            }
            _handleEvent(t, e, i) {
                const {_active: n=[], options: o} = this
                  , a = e
                  , r = this._getActiveElements(t, n, i, a)
                  , l = s._isClickEvent(t)
                  , h = function(t, e, i, s) {
                    return i && "mouseout" !== t.type ? s ? e : t : null
                }(t, this._lastEvent, i, l);
                i && (this._lastEvent = null,
                s.callback(o.onHover, [t, r, this], this),
                l && s.callback(o.onClick, [t, r, this], this));
                const c = !s._elementsEqual(r, n);
                return (c || e) && (this._active = r,
                this._updateHoverStyles(r, n, e)),
                this._lastEvent = h,
                c
            }
            _getActiveElements(t, e, i, s) {
                if ("mouseout" === t.type)
                    return [];
                if (!i)
                    return e;
                const n = this.options.hover;
                return this.getElementsAtEventForMode(t, n.mode, n, s)
            }
        }
        function ce() {
            return s.each(he.instances, (t => t._plugins.invalidate()))
        }
        function de(t, e, i, n) {
            const o = (a = t.options.borderRadius,
            s._readValueToProps(a, ["outerStart", "outerEnd", "innerStart", "innerEnd"]));
            var a;
            const r = (i - e) / 2
              , l = Math.min(r, n * e / 2)
              , h = t => {
                const e = (i - Math.min(r, t)) * n / 2;
                return s._limitValue(t, 0, Math.min(r, e))
            }
            ;
            return {
                outerStart: h(o.outerStart),
                outerEnd: h(o.outerEnd),
                innerStart: s._limitValue(o.innerStart, 0, l),
                innerEnd: s._limitValue(o.innerEnd, 0, l)
            }
        }
        function ue(t, e, i, s) {
            return {
                x: i + t * Math.cos(e),
                y: s + t * Math.sin(e)
            }
        }
        function fe(t, e, i, n, o, a) {
            const {x: r, y: l, startAngle: h, pixelMargin: c, innerRadius: d} = e
              , u = Math.max(e.outerRadius + n + i - c, 0)
              , f = d > 0 ? d + n + i + c : 0;
            let g = 0;
            const p = o - h;
            if (n) {
                const t = ((d > 0 ? d - n : 0) + (u > 0 ? u - n : 0)) / 2;
                g = (p - (0 !== t ? p * t / (t + n) : p)) / 2
            }
            const m = (p - Math.max(.001, p * u - i / s.PI) / u) / 2
              , b = h + m + g
              , x = o - m - g
              , {outerStart: _, outerEnd: y, innerStart: v, innerEnd: w} = de(e, f, u, x - b)
              , M = u - _
              , k = u - y
              , P = b + _ / M
              , S = x - y / k
              , O = f + v
              , D = f + w
              , C = b + v / O
              , A = x - w / D;
            if (t.beginPath(),
            a) {
                const e = (P + S) / 2;
                if (t.arc(r, l, u, P, e),
                t.arc(r, l, u, e, S),
                y > 0) {
                    const e = ue(k, S, r, l);
                    t.arc(e.x, e.y, y, S, x + s.HALF_PI)
                }
                const i = ue(D, x, r, l);
                if (t.lineTo(i.x, i.y),
                w > 0) {
                    const e = ue(D, A, r, l);
                    t.arc(e.x, e.y, w, x + s.HALF_PI, A + Math.PI)
                }
                const n = (x - w / f + (b + v / f)) / 2;
                if (t.arc(r, l, f, x - w / f, n, !0),
                t.arc(r, l, f, n, b + v / f, !0),
                v > 0) {
                    const e = ue(O, C, r, l);
                    t.arc(e.x, e.y, v, C + Math.PI, b - s.HALF_PI)
                }
                const o = ue(M, b, r, l);
                if (t.lineTo(o.x, o.y),
                _ > 0) {
                    const e = ue(M, P, r, l);
                    t.arc(e.x, e.y, _, b - s.HALF_PI, P)
                }
            } else {
                t.moveTo(r, l);
                const e = Math.cos(P) * u + r
                  , i = Math.sin(P) * u + l;
                t.lineTo(e, i);
                const s = Math.cos(S) * u + r
                  , n = Math.sin(S) * u + l;
                t.lineTo(s, n)
            }
            t.closePath()
        }
        function ge(t, e, i, n, o) {
            const {fullCircles: a, startAngle: r, circumference: l, options: h} = e
              , {borderWidth: c, borderJoinStyle: d} = h
              , u = "inner" === h.borderAlign;
            if (!c)
                return;
            u ? (t.lineWidth = 2 * c,
            t.lineJoin = d || "round") : (t.lineWidth = c,
            t.lineJoin = d || "bevel");
            let f = e.endAngle;
            if (a) {
                fe(t, e, i, n, f, o);
                for (let e = 0; e < a; ++e)
                    t.stroke();
                isNaN(l) || (f = r + (l % s.TAU || s.TAU))
            }
            u && function(t, e, i) {
                const {startAngle: n, pixelMargin: o, x: a, y: r, outerRadius: l, innerRadius: h} = e;
                let c = o / l;
                t.beginPath(),
                t.arc(a, r, l, n - c, i + c),
                h > o ? (c = o / h,
                t.arc(a, r, h, i + c, n - c, !0)) : t.arc(a, r, o, i + s.HALF_PI, n - s.HALF_PI),
                t.closePath(),
                t.clip()
            }(t, e, f),
            a || (fe(t, e, i, n, f, o),
            t.stroke())
        }
        class pe extends St {
            static id = "arc";
            static defaults = {
                borderAlign: "center",
                borderColor: "#fff",
                borderJoinStyle: void 0,
                borderRadius: 0,
                borderWidth: 2,
                offset: 0,
                spacing: 0,
                angle: void 0,
                circular: !0
            };
            static defaultRoutes = {
                backgroundColor: "backgroundColor"
            };
            constructor(t) {
                super(),
                this.options = void 0,
                this.circumference = void 0,
                this.startAngle = void 0,
                this.endAngle = void 0,
                this.innerRadius = void 0,
                this.outerRadius = void 0,
                this.pixelMargin = 0,
                this.fullCircles = 0,
                t && Object.assign(this, t)
            }
            inRange(t, e, i) {
                const n = this.getProps(["x", "y"], i)
                  , {angle: o, distance: a} = s.getAngleFromPoint(n, {
                    x: t,
                    y: e
                })
                  , {startAngle: r, endAngle: l, innerRadius: h, outerRadius: c, circumference: d} = this.getProps(["startAngle", "endAngle", "innerRadius", "outerRadius", "circumference"], i)
                  , u = this.options.spacing / 2
                  , f = s.valueOrDefault(d, l - r) >= s.TAU || s._angleBetween(o, r, l)
                  , g = s._isBetween(a, h + u, c + u);
                return f && g
            }
            getCenterPoint(t) {
                const {x: e, y: i, startAngle: s, endAngle: n, innerRadius: o, outerRadius: a} = this.getProps(["x", "y", "startAngle", "endAngle", "innerRadius", "outerRadius"], t)
                  , {offset: r, spacing: l} = this.options
                  , h = (s + n) / 2
                  , c = (o + a + l + r) / 2;
                return {
                    x: e + Math.cos(h) * c,
                    y: i + Math.sin(h) * c
                }
            }
            tooltipPosition(t) {
                return this.getCenterPoint(t)
            }
            draw(t) {
                const {options: e, circumference: i} = this
                  , n = (e.offset || 0) / 4
                  , o = (e.spacing || 0) / 2
                  , a = e.circular;
                if (this.pixelMargin = "inner" === e.borderAlign ? .33 : 0,
                this.fullCircles = i > s.TAU ? Math.floor(i / s.TAU) : 0,
                0 === i || this.innerRadius < 0 || this.outerRadius < 0)
                    return;
                t.save();
                const r = (this.startAngle + this.endAngle) / 2;
                t.translate(Math.cos(r) * n, Math.sin(r) * n);
                const l = n * (1 - Math.sin(Math.min(s.PI, i || 0)));
                t.fillStyle = e.backgroundColor,
                t.strokeStyle = e.borderColor,
                function(t, e, i, n, o) {
                    const {fullCircles: a, startAngle: r, circumference: l} = e;
                    let h = e.endAngle;
                    if (a) {
                        fe(t, e, i, n, h, o);
                        for (let e = 0; e < a; ++e)
                            t.fill();
                        isNaN(l) || (h = r + (l % s.TAU || s.TAU))
                    }
                    fe(t, e, i, n, h, o),
                    t.fill()
                }(t, this, l, o, a),
                ge(t, this, l, o, a),
                t.restore()
            }
        }
        function me(t, e) {
            let i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : e;
            t.lineCap = s.valueOrDefault(i.borderCapStyle, e.borderCapStyle),
            t.setLineDash(s.valueOrDefault(i.borderDash, e.borderDash)),
            t.lineDashOffset = s.valueOrDefault(i.borderDashOffset, e.borderDashOffset),
            t.lineJoin = s.valueOrDefault(i.borderJoinStyle, e.borderJoinStyle),
            t.lineWidth = s.valueOrDefault(i.borderWidth, e.borderWidth),
            t.strokeStyle = s.valueOrDefault(i.borderColor, e.borderColor)
        }
        function be(t, e, i) {
            t.lineTo(i.x, i.y)
        }
        function xe(t, e) {
            let i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            const s = t.length
              , {start: n=0, end: o=s - 1} = i
              , {start: a, end: r} = e
              , l = Math.max(n, a)
              , h = Math.min(o, r)
              , c = n < a && o < a || n > r && o > r;
            return {
                count: s,
                start: l,
                loop: e.loop,
                ilen: h < l && !c ? s + h - l : h - l
            }
        }
        function _e(t, e, i, n) {
            const {points: o, options: a} = e
              , {count: r, start: l, loop: h, ilen: c} = xe(o, i, n)
              , d = function(t) {
                return t.stepped ? s._steppedLineTo : t.tension || "monotone" === t.cubicInterpolationMode ? s._bezierCurveTo : be
            }(a);
            let u, f, g, {move: p=!0, reverse: m} = n || {};
            for (u = 0; u <= c; ++u)
                f = o[(l + (m ? c - u : u)) % r],
                f.skip || (p ? (t.moveTo(f.x, f.y),
                p = !1) : d(t, g, f, m, a.stepped),
                g = f);
            return h && (f = o[(l + (m ? c : 0)) % r],
            d(t, g, f, m, a.stepped)),
            !!h
        }
        function ye(t, e, i, s) {
            const n = e.points
              , {count: o, start: a, ilen: r} = xe(n, i, s)
              , {move: l=!0, reverse: h} = s || {};
            let c, d, u, f, g, p, m = 0, b = 0;
            const x = t => (a + (h ? r - t : t)) % o
              , _ = () => {
                f !== g && (t.lineTo(m, g),
                t.lineTo(m, f),
                t.lineTo(m, p))
            }
            ;
            for (l && (d = n[x(0)],
            t.moveTo(d.x, d.y)),
            c = 0; c <= r; ++c) {
                if (d = n[x(c)],
                d.skip)
                    continue;
                const e = d.x
                  , i = d.y
                  , s = 0 | e;
                s === u ? (i < f ? f = i : i > g && (g = i),
                m = (b * m + e) / ++b) : (_(),
                t.lineTo(e, i),
                u = s,
                b = 0,
                f = g = i),
                p = i
            }
            _()
        }
        function ve(t) {
            const e = t.options
              , i = e.borderDash && e.borderDash.length;
            return !(t._decimated || t._loop || e.tension || "monotone" === e.cubicInterpolationMode || e.stepped || i) ? ye : _e
        }
        const we = "function" == typeof Path2D;
        function Me(t, e, i, s) {
            we && !e.options.segment ? function(t, e, i, s) {
                let n = e._path;
                n || (n = e._path = new Path2D,
                e.path(n, i, s) && n.closePath()),
                me(t, e.options),
                t.stroke(n)
            }(t, e, i, s) : function(t, e, i, s) {
                const {segments: n, options: o} = e
                  , a = ve(e);
                for (const r of n)
                    me(t, o, r.style),
                    t.beginPath(),
                    a(t, e, r, {
                        start: i,
                        end: i + s - 1
                    }) && t.closePath(),
                    t.stroke()
            }(t, e, i, s)
        }
        class ke extends St {
            static id = "line";
            static defaults = {
                borderCapStyle: "butt",
                borderDash: [],
                borderDashOffset: 0,
                borderJoinStyle: "miter",
                borderWidth: 3,
                capBezierPoints: !0,
                cubicInterpolationMode: "default",
                fill: !1,
                spanGaps: !1,
                stepped: !1,
                tension: 0
            };
            static defaultRoutes = {
                backgroundColor: "backgroundColor",
                borderColor: "borderColor"
            };
            static descriptors = {
                _scriptable: !0,
                _indexable: t => "borderDash" !== t && "fill" !== t
            };
            constructor(t) {
                super(),
                this.animated = !0,
                this.options = void 0,
                this._chart = void 0,
                this._loop = void 0,
                this._fullLoop = void 0,
                this._path = void 0,
                this._points = void 0,
                this._segments = void 0,
                this._decimated = !1,
                this._pointsUpdated = !1,
                this._datasetIndex = void 0,
                t && Object.assign(this, t)
            }
            updateControlPoints(t, e) {
                const i = this.options;
                if ((i.tension || "monotone" === i.cubicInterpolationMode) && !i.stepped && !this._pointsUpdated) {
                    const n = i.spanGaps ? this._loop : this._fullLoop;
                    s._updateBezierControlPoints(this._points, i, t, n, e),
                    this._pointsUpdated = !0
                }
            }
            set points(t) {
                this._points = t,
                delete this._segments,
                delete this._path,
                this._pointsUpdated = !1
            }
            get points() {
                return this._points
            }
            get segments() {
                return this._segments || (this._segments = s._computeSegments(this, this.options.segment))
            }
            first() {
                const t = this.segments
                  , e = this.points;
                return t.length && e[t[0].start]
            }
            last() {
                const t = this.segments
                  , e = this.points
                  , i = t.length;
                return i && e[t[i - 1].end]
            }
            interpolate(t, e) {
                const i = this.options
                  , n = t[e]
                  , o = this.points
                  , a = s._boundSegments(this, {
                    property: e,
                    start: n,
                    end: n
                });
                if (!a.length)
                    return;
                const r = []
                  , l = function(t) {
                    return t.stepped ? s._steppedInterpolation : t.tension || "monotone" === t.cubicInterpolationMode ? s._bezierInterpolation : s._pointInLine
                }(i);
                let h, c;
                for (h = 0,
                c = a.length; h < c; ++h) {
                    const {start: s, end: c} = a[h]
                      , d = o[s]
                      , u = o[c];
                    if (d === u) {
                        r.push(d);
                        continue
                    }
                    const f = l(d, u, Math.abs((n - d[e]) / (u[e] - d[e])), i.stepped);
                    f[e] = t[e],
                    r.push(f)
                }
                return 1 === r.length ? r[0] : r
            }
            pathSegment(t, e, i) {
                return ve(this)(t, this, e, i)
            }
            path(t, e, i) {
                const s = this.segments
                  , n = ve(this);
                let o = this._loop;
                e = e || 0,
                i = i || this.points.length - e;
                for (const a of s)
                    o &= n(t, this, a, {
                        start: e,
                        end: e + i - 1
                    });
                return !!o
            }
            draw(t, e, i, s) {
                const n = this.options || {};
                (this.points || []).length && n.borderWidth && (t.save(),
                Me(t, this, i, s),
                t.restore()),
                this.animated && (this._pointsUpdated = !1,
                this._path = void 0)
            }
        }
        function Pe(t, e, i, s) {
            const n = t.options
              , {[i]: o} = t.getProps([i], s);
            return Math.abs(e - o) < n.radius + n.hitRadius
        }
        class Se extends St {
            static id = "point";
            static defaults = {
                borderWidth: 1,
                hitRadius: 1,
                hoverBorderWidth: 1,
                hoverRadius: 4,
                pointStyle: "circle",
                radius: 3,
                rotation: 0
            };
            static defaultRoutes = {
                backgroundColor: "backgroundColor",
                borderColor: "borderColor"
            };
            constructor(t) {
                super(),
                this.options = void 0,
                this.parsed = void 0,
                this.skip = void 0,
                this.stop = void 0,
                t && Object.assign(this, t)
            }
            inRange(t, e, i) {
                const s = this.options
                  , {x: n, y: o} = this.getProps(["x", "y"], i);
                return Math.pow(t - n, 2) + Math.pow(e - o, 2) < Math.pow(s.hitRadius + s.radius, 2)
            }
            inXRange(t, e) {
                return Pe(this, t, "x", e)
            }
            inYRange(t, e) {
                return Pe(this, t, "y", e)
            }
            getCenterPoint(t) {
                const {x: e, y: i} = this.getProps(["x", "y"], t);
                return {
                    x: e,
                    y: i
                }
            }
            size(t) {
                let e = (t = t || this.options || {}).radius || 0;
                e = Math.max(e, e && t.hoverRadius || 0);
                return 2 * (e + (e && t.borderWidth || 0))
            }
            draw(t, e) {
                const i = this.options;
                this.skip || i.radius < .1 || !s._isPointInArea(this, e, this.size(i) / 2) || (t.strokeStyle = i.borderColor,
                t.lineWidth = i.borderWidth,
                t.fillStyle = i.backgroundColor,
                s.drawPoint(t, i, this.x, this.y))
            }
            getRange() {
                const t = this.options || {};
                return t.radius + t.hitRadius
            }
        }
        function Oe(t, e) {
            const {x: i, y: s, base: n, width: o, height: a} = t.getProps(["x", "y", "base", "width", "height"], e);
            let r, l, h, c, d;
            return t.horizontal ? (d = a / 2,
            r = Math.min(i, n),
            l = Math.max(i, n),
            h = s - d,
            c = s + d) : (d = o / 2,
            r = i - d,
            l = i + d,
            h = Math.min(s, n),
            c = Math.max(s, n)),
            {
                left: r,
                top: h,
                right: l,
                bottom: c
            }
        }
        function De(t, e, i, n) {
            return t ? 0 : s._limitValue(e, i, n)
        }
        function Ce(t) {
            const e = Oe(t)
              , i = e.right - e.left
              , n = e.bottom - e.top
              , o = function(t, e, i) {
                const n = t.options.borderWidth
                  , o = t.borderSkipped
                  , a = s.toTRBL(n);
                return {
                    t: De(o.top, a.top, 0, i),
                    r: De(o.right, a.right, 0, e),
                    b: De(o.bottom, a.bottom, 0, i),
                    l: De(o.left, a.left, 0, e)
                }
            }(t, i / 2, n / 2)
              , a = function(t, e, i) {
                const {enableBorderRadius: n} = t.getProps(["enableBorderRadius"])
                  , o = t.options.borderRadius
                  , a = s.toTRBLCorners(o)
                  , r = Math.min(e, i)
                  , l = t.borderSkipped
                  , h = n || s.isObject(o);
                return {
                    topLeft: De(!h || l.top || l.left, a.topLeft, 0, r),
                    topRight: De(!h || l.top || l.right, a.topRight, 0, r),
                    bottomLeft: De(!h || l.bottom || l.left, a.bottomLeft, 0, r),
                    bottomRight: De(!h || l.bottom || l.right, a.bottomRight, 0, r)
                }
            }(t, i / 2, n / 2);
            return {
                outer: {
                    x: e.left,
                    y: e.top,
                    w: i,
                    h: n,
                    radius: a
                },
                inner: {
                    x: e.left + o.l,
                    y: e.top + o.t,
                    w: i - o.l - o.r,
                    h: n - o.t - o.b,
                    radius: {
                        topLeft: Math.max(0, a.topLeft - Math.max(o.t, o.l)),
                        topRight: Math.max(0, a.topRight - Math.max(o.t, o.r)),
                        bottomLeft: Math.max(0, a.bottomLeft - Math.max(o.b, o.l)),
                        bottomRight: Math.max(0, a.bottomRight - Math.max(o.b, o.r))
                    }
                }
            }
        }
        function Ae(t, e, i, n) {
            const o = null === e
              , a = null === i
              , r = t && !(o && a) && Oe(t, n);
            return r && (o || s._isBetween(e, r.left, r.right)) && (a || s._isBetween(i, r.top, r.bottom))
        }
        function Te(t, e) {
            t.rect(e.x, e.y, e.w, e.h)
        }
        function Re(t, e) {
            let i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            const s = t.x !== i.x ? -e : 0
              , n = t.y !== i.y ? -e : 0
              , o = (t.x + t.w !== i.x + i.w ? e : 0) - s
              , a = (t.y + t.h !== i.y + i.h ? e : 0) - n;
            return {
                x: t.x + s,
                y: t.y + n,
                w: t.w + o,
                h: t.h + a,
                radius: t.radius
            }
        }
        class Le extends St {
            static id = "bar";
            static defaults = {
                borderSkipped: "start",
                borderWidth: 0,
                borderRadius: 0,
                inflateAmount: "auto",
                pointStyle: void 0
            };
            static defaultRoutes = {
                backgroundColor: "backgroundColor",
                borderColor: "borderColor"
            };
            constructor(t) {
                super(),
                this.options = void 0,
                this.horizontal = void 0,
                this.base = void 0,
                this.width = void 0,
                this.height = void 0,
                this.inflateAmount = void 0,
                t && Object.assign(this, t)
            }
            draw(t) {
                const {inflateAmount: e, options: {borderColor: i, backgroundColor: n}} = this
                  , {inner: o, outer: a} = Ce(this)
                  , r = (l = a.radius).topLeft || l.topRight || l.bottomLeft || l.bottomRight ? s.addRoundedRectPath : Te;
                var l;
                t.save(),
                a.w === o.w && a.h === o.h || (t.beginPath(),
                r(t, Re(a, e, o)),
                t.clip(),
                r(t, Re(o, -e, a)),
                t.fillStyle = i,
                t.fill("evenodd")),
                t.beginPath(),
                r(t, Re(o, e)),
                t.fillStyle = n,
                t.fill(),
                t.restore()
            }
            inRange(t, e, i) {
                return Ae(this, t, e, i)
            }
            inXRange(t, e) {
                return Ae(this, t, null, e)
            }
            inYRange(t, e) {
                return Ae(this, null, t, e)
            }
            getCenterPoint(t) {
                const {x: e, y: i, base: s, horizontal: n} = this.getProps(["x", "y", "base", "horizontal"], t);
                return {
                    x: n ? (e + s) / 2 : e,
                    y: n ? i : (i + s) / 2
                }
            }
            getRange(t) {
                return "x" === t ? this.width / 2 : this.height / 2
            }
        }
        var Ee = Object.freeze({
            __proto__: null,
            ArcElement: pe,
            LineElement: ke,
            PointElement: Se,
            BarElement: Le
        });
        const Ie = ["rgb(54, 162, 235)", "rgb(255, 99, 132)", "rgb(255, 159, 64)", "rgb(255, 205, 86)", "rgb(75, 192, 192)", "rgb(153, 102, 255)", "rgb(201, 203, 207)"]
          , Fe = Ie.map((t => t.replace("rgb(", "rgba(").replace(")", ", 0.5)")));
        function ze(t) {
            return Ie[t % Ie.length]
        }
        function Ne(t) {
            return Fe[t % Fe.length]
        }
        function Be(t) {
            let e = 0;
            return (i, s) => {
                const n = t.getDatasetMeta(s).controller;
                n instanceof R ? e = function(t, e) {
                    return t.backgroundColor = t.data.map(( () => ze(e++))),
                    e
                }(i, e) : n instanceof E ? e = function(t, e) {
                    return t.backgroundColor = t.data.map(( () => Ne(e++))),
                    e
                }(i, e) : n && (e = function(t, e) {
                    return t.borderColor = ze(e),
                    t.backgroundColor = Ne(e),
                    ++e
                }(i, e))
            }
        }
        function je(t) {
            let e;
            for (e in t)
                if (t[e].borderColor || t[e].backgroundColor)
                    return !0;
            return !1
        }
        var Ve = {
            id: "colors",
            defaults: {
                enabled: !0,
                forceOverride: !1
            },
            beforeLayout(t, e, i) {
                if (!i.enabled)
                    return;
                const {data: {datasets: s}, options: n} = t.config
                  , {elements: o} = n;
                if (!i.forceOverride && (je(s) || (a = n) && (a.borderColor || a.backgroundColor) || o && je(o)))
                    return;
                var a;
                const r = Be(t);
                s.forEach(r)
            }
        };
        function We(t) {
            if (t._decimated) {
                const e = t._data;
                delete t._decimated,
                delete t._data,
                Object.defineProperty(t, "data", {
                    configurable: !0,
                    enumerable: !0,
                    writable: !0,
                    value: e
                })
            }
        }
        function He(t) {
            t.data.datasets.forEach((t => {
                We(t)
            }
            ))
        }
        var Ue = {
            id: "decimation",
            defaults: {
                algorithm: "min-max",
                enabled: !1
            },
            beforeElementsUpdate: (t, e, i) => {
                if (!i.enabled)
                    return void He(t);
                const n = t.width;
                t.data.datasets.forEach(( (e, o) => {
                    const {_data: a, indexAxis: r} = e
                      , l = t.getDatasetMeta(o)
                      , h = a || e.data;
                    if ("y" === s.resolve([r, t.options.indexAxis]))
                        return;
                    if (!l.controller.supportsDecimation)
                        return;
                    const c = t.scales[l.xAxisID];
                    if ("linear" !== c.type && "time" !== c.type)
                        return;
                    if (t.options.parsing)
                        return;
                    let {start: d, count: u} = function(t, e) {
                        const i = e.length;
                        let n, o = 0;
                        const {iScale: a} = t
                          , {min: r, max: l, minDefined: h, maxDefined: c} = a.getUserBounds();
                        return h && (o = s._limitValue(s._lookupByKey(e, a.axis, r).lo, 0, i - 1)),
                        n = c ? s._limitValue(s._lookupByKey(e, a.axis, l).hi + 1, o, i) - o : i - o,
                        {
                            start: o,
                            count: n
                        }
                    }(l, h);
                    if (u <= (i.threshold || 4 * n))
                        return void We(e);
                    let f;
                    switch (s.isNullOrUndef(a) && (e._data = h,
                    delete e.data,
                    Object.defineProperty(e, "data", {
                        configurable: !0,
                        enumerable: !0,
                        get: function() {
                            return this._decimated
                        },
                        set: function(t) {
                            this._data = t
                        }
                    })),
                    i.algorithm) {
                    case "lttb":
                        f = function(t, e, i, s, n) {
                            const o = n.samples || s;
                            if (o >= i)
                                return t.slice(e, e + i);
                            const a = []
                              , r = (i - 2) / (o - 2);
                            let l = 0;
                            const h = e + i - 1;
                            let c, d, u, f, g, p = e;
                            for (a[l++] = t[p],
                            c = 0; c < o - 2; c++) {
                                let s, n = 0, o = 0;
                                const h = Math.floor((c + 1) * r) + 1 + e
                                  , m = Math.min(Math.floor((c + 2) * r) + 1, i) + e
                                  , b = m - h;
                                for (s = h; s < m; s++)
                                    n += t[s].x,
                                    o += t[s].y;
                                n /= b,
                                o /= b;
                                const x = Math.floor(c * r) + 1 + e
                                  , _ = Math.min(Math.floor((c + 1) * r) + 1, i) + e
                                  , {x: y, y: v} = t[p];
                                for (u = f = -1,
                                s = x; s < _; s++)
                                    f = .5 * Math.abs((y - n) * (t[s].y - v) - (y - t[s].x) * (o - v)),
                                    f > u && (u = f,
                                    d = t[s],
                                    g = s);
                                a[l++] = d,
                                p = g
                            }
                            return a[l++] = t[h],
                            a
                        }(h, d, u, n, i);
                        break;
                    case "min-max":
                        f = function(t, e, i, n) {
                            let o, a, r, l, h, c, d, u, f, g, p = 0, m = 0;
                            const b = []
                              , x = e + i - 1
                              , _ = t[e].x
                              , y = t[x].x - _;
                            for (o = e; o < e + i; ++o) {
                                a = t[o],
                                r = (a.x - _) / y * n,
                                l = a.y;
                                const e = 0 | r;
                                if (e === h)
                                    l < f ? (f = l,
                                    c = o) : l > g && (g = l,
                                    d = o),
                                    p = (m * p + a.x) / ++m;
                                else {
                                    const i = o - 1;
                                    if (!s.isNullOrUndef(c) && !s.isNullOrUndef(d)) {
                                        const e = Math.min(c, d)
                                          , s = Math.max(c, d);
                                        e !== u && e !== i && b.push({
                                            ...t[e],
                                            x: p
                                        }),
                                        s !== u && s !== i && b.push({
                                            ...t[s],
                                            x: p
                                        })
                                    }
                                    o > 0 && i !== u && b.push(t[i]),
                                    b.push(a),
                                    h = e,
                                    m = 0,
                                    f = g = l,
                                    c = d = u = o
                                }
                            }
                            return b
                        }(h, d, u, n);
                        break;
                    default:
                        throw new Error(`Unsupported decimation algorithm '${i.algorithm}'`)
                    }
                    e._decimated = f
                }
                ))
            }
            ,
            destroy(t) {
                He(t)
            }
        };
        function $e(t, e, i, n) {
            if (n)
                return;
            let o = e[t]
              , a = i[t];
            return "angle" === t && (o = s._normalizeAngle(o),
            a = s._normalizeAngle(a)),
            {
                property: t,
                start: o,
                end: a
            }
        }
        function Ye(t, e, i) {
            for (; e > t; e--) {
                const t = i[e];
                if (!isNaN(t.x) && !isNaN(t.y))
                    break
            }
            return e
        }
        function qe(t, e, i, s) {
            return t && e ? s(t[i], e[i]) : t ? t[i] : e ? e[i] : 0
        }
        function Ke(t, e) {
            let i = []
              , n = !1;
            return s.isArray(t) ? (n = !0,
            i = t) : i = function(t, e) {
                const {x: i=null, y: s=null} = t || {}
                  , n = e.points
                  , o = [];
                return e.segments.forEach((t => {
                    let {start: e, end: a} = t;
                    a = Ye(e, a, n);
                    const r = n[e]
                      , l = n[a];
                    null !== s ? (o.push({
                        x: r.x,
                        y: s
                    }),
                    o.push({
                        x: l.x,
                        y: s
                    })) : null !== i && (o.push({
                        x: i,
                        y: r.y
                    }),
                    o.push({
                        x: i,
                        y: l.y
                    }))
                }
                )),
                o
            }(t, e),
            i.length ? new ke({
                points: i,
                options: {
                    tension: 0
                },
                _loop: n,
                _fullLoop: n
            }) : null
        }
        function Xe(t) {
            return t && !1 !== t.fill
        }
        function Ge(t, e, i) {
            let n = t[e].fill;
            const o = [e];
            let a;
            if (!i)
                return n;
            for (; !1 !== n && -1 === o.indexOf(n); ) {
                if (!s.isNumberFinite(n))
                    return n;
                if (a = t[n],
                !a)
                    return !1;
                if (a.visible)
                    return n;
                o.push(n),
                n = a.fill
            }
            return !1
        }
        function Je(t, e, i) {
            const n = function(t) {
                const e = t.options
                  , i = e.fill;
                let n = s.valueOrDefault(i && i.target, i);
                void 0 === n && (n = !!e.backgroundColor);
                if (!1 === n || null === n)
                    return !1;
                if (!0 === n)
                    return "origin";
                return n
            }(t);
            if (s.isObject(n))
                return !isNaN(n.value) && n;
            let o = parseFloat(n);
            return s.isNumberFinite(o) && Math.floor(o) === o ? function(t, e, i, s) {
                "-" !== t && "+" !== t || (i = e + i);
                if (i === e || i < 0 || i >= s)
                    return !1;
                return i
            }(n[0], e, o, i) : ["origin", "start", "end", "stack", "shape"].indexOf(n) >= 0 && n
        }
        function Ze(t, e, i) {
            const s = [];
            for (let n = 0; n < i.length; n++) {
                const o = i[n]
                  , {first: a, last: r, point: l} = Qe(o, e, "x");
                if (!(!l || a && r))
                    if (a)
                        s.unshift(l);
                    else if (t.push(l),
                    !r)
                        break
            }
            t.push(...s)
        }
        function Qe(t, e, i) {
            const n = t.interpolate(e, i);
            if (!n)
                return {};
            const o = n[i]
              , a = t.segments
              , r = t.points;
            let l = !1
              , h = !1;
            for (let t = 0; t < a.length; t++) {
                const e = a[t]
                  , n = r[e.start][i]
                  , c = r[e.end][i];
                if (s._isBetween(o, n, c)) {
                    l = o === n,
                    h = o === c;
                    break
                }
            }
            return {
                first: l,
                last: h,
                point: n
            }
        }
        class ti {
            constructor(t) {
                this.x = t.x,
                this.y = t.y,
                this.radius = t.radius
            }
            pathSegment(t, e, i) {
                const {x: n, y: o, radius: a} = this;
                return e = e || {
                    start: 0,
                    end: s.TAU
                },
                t.arc(n, o, a, e.end, e.start, !0),
                !i.bounds
            }
            interpolate(t) {
                const {x: e, y: i, radius: s} = this
                  , n = t.angle;
                return {
                    x: e + Math.cos(n) * s,
                    y: i + Math.sin(n) * s,
                    angle: n
                }
            }
        }
        function ei(t) {
            const {chart: e, fill: i, line: n} = t;
            if (s.isNumberFinite(i))
                return function(t, e) {
                    const i = t.getDatasetMeta(e)
                      , s = i && t.isDatasetVisible(e);
                    return s ? i.dataset : null
                }(e, i);
            if ("stack" === i)
                return function(t) {
                    const {scale: e, index: i, line: s} = t
                      , n = []
                      , o = s.segments
                      , a = s.points
                      , r = function(t, e) {
                        const i = []
                          , s = t.getMatchingVisibleMetas("line");
                        for (let t = 0; t < s.length; t++) {
                            const n = s[t];
                            if (n.index === e)
                                break;
                            n.hidden || i.unshift(n.dataset)
                        }
                        return i
                    }(e, i);
                    r.push(Ke({
                        x: null,
                        y: e.bottom
                    }, s));
                    for (let t = 0; t < o.length; t++) {
                        const e = o[t];
                        for (let t = e.start; t <= e.end; t++)
                            Ze(n, a[t], r)
                    }
                    return new ke({
                        points: n,
                        options: {}
                    })
                }(t);
            if ("shape" === i)
                return !0;
            const o = function(t) {
                const e = t.scale || {};
                if (e.getPointPositionForValue)
                    return function(t) {
                        const {scale: e, fill: i} = t
                          , n = e.options
                          , o = e.getLabels().length
                          , a = n.reverse ? e.max : e.min
                          , r = function(t, e, i) {
                            let n;
                            return n = "start" === t ? i : "end" === t ? e.options.reverse ? e.min : e.max : s.isObject(t) ? t.value : e.getBaseValue(),
                            n
                        }(i, e, a)
                          , l = [];
                        if (n.grid.circular) {
                            const t = e.getPointPositionForValue(0, a);
                            return new ti({
                                x: t.x,
                                y: t.y,
                                radius: e.getDistanceFromCenterForValue(r)
                            })
                        }
                        for (let t = 0; t < o; ++t)
                            l.push(e.getPointPositionForValue(t, r));
                        return l
                    }(t);
                return function(t) {
                    const {scale: e={}, fill: i} = t
                      , n = function(t, e) {
                        let i = null;
                        return "start" === t ? i = e.bottom : "end" === t ? i = e.top : s.isObject(t) ? i = e.getPixelForValue(t.value) : e.getBasePixel && (i = e.getBasePixel()),
                        i
                    }(i, e);
                    if (s.isNumberFinite(n)) {
                        const t = e.isHorizontal();
                        return {
                            x: t ? n : null,
                            y: t ? null : n
                        }
                    }
                    return null
                }(t)
            }(t);
            return o instanceof ti ? o : Ke(o, n)
        }
        function ii(t, e, i) {
            const n = ei(e)
              , {line: o, scale: a, axis: r} = e
              , l = o.options
              , h = l.fill
              , c = l.backgroundColor
              , {above: d=c, below: u=c} = h || {};
            n && o.points.length && (s.clipArea(t, i),
            function(t, e) {
                const {line: i, target: s, above: n, below: o, area: a, scale: r} = e
                  , l = i._loop ? "angle" : e.axis;
                t.save(),
                "x" === l && o !== n && (si(t, s, a.top),
                ni(t, {
                    line: i,
                    target: s,
                    color: n,
                    scale: r,
                    property: l
                }),
                t.restore(),
                t.save(),
                si(t, s, a.bottom));
                ni(t, {
                    line: i,
                    target: s,
                    color: o,
                    scale: r,
                    property: l
                }),
                t.restore()
            }(t, {
                line: o,
                target: n,
                above: d,
                below: u,
                area: i,
                scale: a,
                axis: r
            }),
            s.unclipArea(t))
        }
        function si(t, e, i) {
            const {segments: s, points: n} = e;
            let o = !0
              , a = !1;
            t.beginPath();
            for (const r of s) {
                const {start: s, end: l} = r
                  , h = n[s]
                  , c = n[Ye(s, l, n)];
                o ? (t.moveTo(h.x, h.y),
                o = !1) : (t.lineTo(h.x, i),
                t.lineTo(h.x, h.y)),
                a = !!e.pathSegment(t, r, {
                    move: a
                }),
                a ? t.closePath() : t.lineTo(c.x, i)
            }
            t.lineTo(e.first().x, i),
            t.closePath(),
            t.clip()
        }
        function ni(t, e) {
            const {line: i, target: n, property: o, color: a, scale: r} = e
              , l = function(t, e, i) {
                const n = t.segments
                  , o = t.points
                  , a = e.points
                  , r = [];
                for (const t of n) {
                    let {start: n, end: l} = t;
                    l = Ye(n, l, o);
                    const h = $e(i, o[n], o[l], t.loop);
                    if (!e.segments) {
                        r.push({
                            source: t,
                            target: h,
                            start: o[n],
                            end: o[l]
                        });
                        continue
                    }
                    const c = s._boundSegments(e, h);
                    for (const e of c) {
                        const n = $e(i, a[e.start], a[e.end], e.loop)
                          , l = s._boundSegment(t, o, n);
                        for (const t of l)
                            r.push({
                                source: t,
                                target: e,
                                start: {
                                    [i]: qe(h, n, "start", Math.max)
                                },
                                end: {
                                    [i]: qe(h, n, "end", Math.min)
                                }
                            })
                    }
                }
                return r
            }(i, n, o);
            for (const {source: e, target: s, start: h, end: c} of l) {
                const {style: {backgroundColor: l=a}={}} = e
                  , d = !0 !== n;
                t.save(),
                t.fillStyle = l,
                oi(t, r, d && $e(o, h, c)),
                t.beginPath();
                const u = !!i.pathSegment(t, e);
                let f;
                if (d) {
                    u ? t.closePath() : ai(t, n, c, o);
                    const e = !!n.pathSegment(t, s, {
                        move: u,
                        reverse: !0
                    });
                    f = u && e,
                    f || ai(t, n, h, o)
                }
                t.closePath(),
                t.fill(f ? "evenodd" : "nonzero"),
                t.restore()
            }
        }
        function oi(t, e, i) {
            const {top: s, bottom: n} = e.chart.chartArea
              , {property: o, start: a, end: r} = i || {};
            "x" === o && (t.beginPath(),
            t.rect(a, s, r - a, n - s),
            t.clip())
        }
        function ai(t, e, i, s) {
            const n = e.interpolate(i, s);
            n && t.lineTo(n.x, n.y)
        }
        var ri = {
            id: "filler",
            afterDatasetsUpdate(t, e, i) {
                const s = (t.data.datasets || []).length
                  , n = [];
                let o, a, r, l;
                for (a = 0; a < s; ++a)
                    o = t.getDatasetMeta(a),
                    r = o.dataset,
                    l = null,
                    r && r.options && r instanceof ke && (l = {
                        visible: t.isDatasetVisible(a),
                        index: a,
                        fill: Je(r, a, s),
                        chart: t,
                        axis: o.controller.options.indexAxis,
                        scale: o.vScale,
                        line: r
                    }),
                    o.$filler = l,
                    n.push(l);
                for (a = 0; a < s; ++a)
                    l = n[a],
                    l && !1 !== l.fill && (l.fill = Ge(n, a, i.propagate))
            },
            beforeDraw(t, e, i) {
                const s = "beforeDraw" === i.drawTime
                  , n = t.getSortedVisibleDatasetMetas()
                  , o = t.chartArea;
                for (let e = n.length - 1; e >= 0; --e) {
                    const i = n[e].$filler;
                    i && (i.line.updateControlPoints(o, i.axis),
                    s && i.fill && ii(t.ctx, i, o))
                }
            },
            beforeDatasetsDraw(t, e, i) {
                if ("beforeDatasetsDraw" !== i.drawTime)
                    return;
                const s = t.getSortedVisibleDatasetMetas();
                for (let e = s.length - 1; e >= 0; --e) {
                    const i = s[e].$filler;
                    Xe(i) && ii(t.ctx, i, t.chartArea)
                }
            },
            beforeDatasetDraw(t, e, i) {
                const s = e.meta.$filler;
                Xe(s) && "beforeDatasetDraw" === i.drawTime && ii(t.ctx, s, t.chartArea)
            },
            defaults: {
                propagate: !0,
                drawTime: "beforeDatasetDraw"
            }
        };
        const li = (t, e) => {
            let {boxHeight: i=e, boxWidth: s=e} = t;
            return t.usePointStyle && (i = Math.min(i, e),
            s = t.pointStyleWidth || Math.min(s, e)),
            {
                boxWidth: s,
                boxHeight: i,
                itemHeight: Math.max(e, i)
            }
        }
        ;
        class hi extends St {
            constructor(t) {
                super(),
                this._added = !1,
                this.legendHitBoxes = [],
                this._hoveredItem = null,
                this.doughnutMode = !1,
                this.chart = t.chart,
                this.options = t.options,
                this.ctx = t.ctx,
                this.legendItems = void 0,
                this.columnSizes = void 0,
                this.lineWidths = void 0,
                this.maxHeight = void 0,
                this.maxWidth = void 0,
                this.top = void 0,
                this.bottom = void 0,
                this.left = void 0,
                this.right = void 0,
                this.height = void 0,
                this.width = void 0,
                this._margins = void 0,
                this.position = void 0,
                this.weight = void 0,
                this.fullSize = void 0
            }
            update(t, e, i) {
                this.maxWidth = t,
                this.maxHeight = e,
                this._margins = i,
                this.setDimensions(),
                this.buildLabels(),
                this.fit()
            }
            setDimensions() {
                this.isHorizontal() ? (this.width = this.maxWidth,
                this.left = this._margins.left,
                this.right = this.width) : (this.height = this.maxHeight,
                this.top = this._margins.top,
                this.bottom = this.height)
            }
            buildLabels() {
                const t = this.options.labels || {};
                let e = s.callback(t.generateLabels, [this.chart], this) || [];
                t.filter && (e = e.filter((e => t.filter(e, this.chart.data)))),
                t.sort && (e = e.sort(( (e, i) => t.sort(e, i, this.chart.data)))),
                this.options.reverse && e.reverse(),
                this.legendItems = e
            }
            fit() {
                const {options: t, ctx: e} = this;
                if (!t.display)
                    return void (this.width = this.height = 0);
                const i = t.labels
                  , n = s.toFont(i.font)
                  , o = n.size
                  , a = this._computeTitleHeight()
                  , {boxWidth: r, itemHeight: l} = li(i, o);
                let h, c;
                e.font = n.string,
                this.isHorizontal() ? (h = this.maxWidth,
                c = this._fitRows(a, o, r, l) + 10) : (c = this.maxHeight,
                h = this._fitCols(a, n, r, l) + 10),
                this.width = Math.min(h, t.maxWidth || this.maxWidth),
                this.height = Math.min(c, t.maxHeight || this.maxHeight)
            }
            _fitRows(t, e, i, s) {
                const {ctx: n, maxWidth: o, options: {labels: {padding: a}}} = this
                  , r = this.legendHitBoxes = []
                  , l = this.lineWidths = [0]
                  , h = s + a;
                let c = t;
                n.textAlign = "left",
                n.textBaseline = "middle";
                let d = -1
                  , u = -h;
                return this.legendItems.forEach(( (t, f) => {
                    const g = i + e / 2 + n.measureText(t.text).width;
                    (0 === f || l[l.length - 1] + g + 2 * a > o) && (c += h,
                    l[l.length - (f > 0 ? 0 : 1)] = 0,
                    u += h,
                    d++),
                    r[f] = {
                        left: 0,
                        top: u,
                        row: d,
                        width: g,
                        height: s
                    },
                    l[l.length - 1] += g + a
                }
                )),
                c
            }
            _fitCols(t, e, i, s) {
                const {ctx: n, maxHeight: o, options: {labels: {padding: a}}} = this
                  , r = this.legendHitBoxes = []
                  , l = this.columnSizes = []
                  , h = o - t;
                let c = a
                  , d = 0
                  , u = 0
                  , f = 0
                  , g = 0;
                return this.legendItems.forEach(( (t, o) => {
                    const {itemWidth: p, itemHeight: m} = function(t, e, i, s, n) {
                        const o = function(t, e, i, s) {
                            let n = t.text;
                            n && "string" != typeof n && (n = n.reduce(( (t, e) => t.length > e.length ? t : e)));
                            return e + i.size / 2 + s.measureText(n).width
                        }(s, t, e, i)
                          , a = function(t, e, i) {
                            let s = t;
                            "string" != typeof e.text && (s = ci(e, i));
                            return s
                        }(n, s, e.lineHeight);
                        return {
                            itemWidth: o,
                            itemHeight: a
                        }
                    }(i, e, n, t, s);
                    o > 0 && u + m + 2 * a > h && (c += d + a,
                    l.push({
                        width: d,
                        height: u
                    }),
                    f += d + a,
                    g++,
                    d = u = 0),
                    r[o] = {
                        left: f,
                        top: u,
                        col: g,
                        width: p,
                        height: m
                    },
                    d = Math.max(d, p),
                    u += m + a
                }
                )),
                c += d,
                l.push({
                    width: d,
                    height: u
                }),
                c
            }
            adjustHitBoxes() {
                if (!this.options.display)
                    return;
                const t = this._computeTitleHeight()
                  , {legendHitBoxes: e, options: {align: i, labels: {padding: n}, rtl: o}} = this
                  , a = s.getRtlAdapter(o, this.left, this.width);
                if (this.isHorizontal()) {
                    let o = 0
                      , r = s._alignStartEnd(i, this.left + n, this.right - this.lineWidths[o]);
                    for (const l of e)
                        o !== l.row && (o = l.row,
                        r = s._alignStartEnd(i, this.left + n, this.right - this.lineWidths[o])),
                        l.top += this.top + t + n,
                        l.left = a.leftForLtr(a.x(r), l.width),
                        r += l.width + n
                } else {
                    let o = 0
                      , r = s._alignStartEnd(i, this.top + t + n, this.bottom - this.columnSizes[o].height);
                    for (const l of e)
                        l.col !== o && (o = l.col,
                        r = s._alignStartEnd(i, this.top + t + n, this.bottom - this.columnSizes[o].height)),
                        l.top = r,
                        l.left += this.left + n,
                        l.left = a.leftForLtr(a.x(l.left), l.width),
                        r += l.height + n
                }
            }
            isHorizontal() {
                return "top" === this.options.position || "bottom" === this.options.position
            }
            draw() {
                if (this.options.display) {
                    const t = this.ctx;
                    s.clipArea(t, this),
                    this._draw(),
                    s.unclipArea(t)
                }
            }
            _draw() {
                const {options: t, columnSizes: e, lineWidths: i, ctx: n} = this
                  , {align: o, labels: a} = t
                  , r = s.defaults.color
                  , l = s.getRtlAdapter(t.rtl, this.left, this.width)
                  , h = s.toFont(a.font)
                  , {padding: c} = a
                  , d = h.size
                  , u = d / 2;
                let f;
                this.drawTitle(),
                n.textAlign = l.textAlign("left"),
                n.textBaseline = "middle",
                n.lineWidth = .5,
                n.font = h.string;
                const {boxWidth: g, boxHeight: p, itemHeight: m} = li(a, d)
                  , b = this.isHorizontal()
                  , x = this._computeTitleHeight();
                f = b ? {
                    x: s._alignStartEnd(o, this.left + c, this.right - i[0]),
                    y: this.top + c + x,
                    line: 0
                } : {
                    x: this.left + c,
                    y: s._alignStartEnd(o, this.top + x + c, this.bottom - e[0].height),
                    line: 0
                },
                s.overrideTextDirection(this.ctx, t.textDirection);
                const _ = m + c;
                this.legendItems.forEach(( (y, v) => {
                    n.strokeStyle = y.fontColor,
                    n.fillStyle = y.fontColor;
                    const w = n.measureText(y.text).width
                      , M = l.textAlign(y.textAlign || (y.textAlign = a.textAlign))
                      , k = g + u + w;
                    let P = f.x
                      , S = f.y;
                    l.setWidth(this.width),
                    b ? v > 0 && P + k + c > this.right && (S = f.y += _,
                    f.line++,
                    P = f.x = s._alignStartEnd(o, this.left + c, this.right - i[f.line])) : v > 0 && S + _ > this.bottom && (P = f.x = P + e[f.line].width + c,
                    f.line++,
                    S = f.y = s._alignStartEnd(o, this.top + x + c, this.bottom - e[f.line].height));
                    if (function(t, e, i) {
                        if (isNaN(g) || g <= 0 || isNaN(p) || p < 0)
                            return;
                        n.save();
                        const o = s.valueOrDefault(i.lineWidth, 1);
                        if (n.fillStyle = s.valueOrDefault(i.fillStyle, r),
                        n.lineCap = s.valueOrDefault(i.lineCap, "butt"),
                        n.lineDashOffset = s.valueOrDefault(i.lineDashOffset, 0),
                        n.lineJoin = s.valueOrDefault(i.lineJoin, "miter"),
                        n.lineWidth = o,
                        n.strokeStyle = s.valueOrDefault(i.strokeStyle, r),
                        n.setLineDash(s.valueOrDefault(i.lineDash, [])),
                        a.usePointStyle) {
                            const r = {
                                radius: p * Math.SQRT2 / 2,
                                pointStyle: i.pointStyle,
                                rotation: i.rotation,
                                borderWidth: o
                            }
                              , h = l.xPlus(t, g / 2)
                              , c = e + u;
                            s.drawPointLegend(n, r, h, c, a.pointStyleWidth && g)
                        } else {
                            const a = e + Math.max((d - p) / 2, 0)
                              , r = l.leftForLtr(t, g)
                              , h = s.toTRBLCorners(i.borderRadius);
                            n.beginPath(),
                            Object.values(h).some((t => 0 !== t)) ? s.addRoundedRectPath(n, {
                                x: r,
                                y: a,
                                w: g,
                                h: p,
                                radius: h
                            }) : n.rect(r, a, g, p),
                            n.fill(),
                            0 !== o && n.stroke()
                        }
                        n.restore()
                    }(l.x(P), S, y),
                    P = s._textX(M, P + g + u, b ? P + k : this.right, t.rtl),
                    function(t, e, i) {
                        s.renderText(n, i.text, t, e + m / 2, h, {
                            strikethrough: i.hidden,
                            textAlign: l.textAlign(i.textAlign)
                        })
                    }(l.x(P), S, y),
                    b)
                        f.x += k + c;
                    else if ("string" != typeof y.text) {
                        const t = h.lineHeight;
                        f.y += ci(y, t)
                    } else
                        f.y += _
                }
                )),
                s.restoreTextDirection(this.ctx, t.textDirection)
            }
            drawTitle() {
                const t = this.options
                  , e = t.title
                  , i = s.toFont(e.font)
                  , n = s.toPadding(e.padding);
                if (!e.display)
                    return;
                const o = s.getRtlAdapter(t.rtl, this.left, this.width)
                  , a = this.ctx
                  , r = e.position
                  , l = i.size / 2
                  , h = n.top + l;
                let c, d = this.left, u = this.width;
                if (this.isHorizontal())
                    u = Math.max(...this.lineWidths),
                    c = this.top + h,
                    d = s._alignStartEnd(t.align, d, this.right - u);
                else {
                    const e = this.columnSizes.reduce(( (t, e) => Math.max(t, e.height)), 0);
                    c = h + s._alignStartEnd(t.align, this.top, this.bottom - e - t.labels.padding - this._computeTitleHeight())
                }
                const f = s._alignStartEnd(r, d, d + u);
                a.textAlign = o.textAlign(s._toLeftRightCenter(r)),
                a.textBaseline = "middle",
                a.strokeStyle = e.color,
                a.fillStyle = e.color,
                a.font = i.string,
                s.renderText(a, e.text, f, c, i)
            }
            _computeTitleHeight() {
                const t = this.options.title
                  , e = s.toFont(t.font)
                  , i = s.toPadding(t.padding);
                return t.display ? e.lineHeight + i.height : 0
            }
            _getLegendItemAt(t, e) {
                let i, n, o;
                if (s._isBetween(t, this.left, this.right) && s._isBetween(e, this.top, this.bottom))
                    for (o = this.legendHitBoxes,
                    i = 0; i < o.length; ++i)
                        if (n = o[i],
                        s._isBetween(t, n.left, n.left + n.width) && s._isBetween(e, n.top, n.top + n.height))
                            return this.legendItems[i];
                return null
            }
            handleEvent(t) {
                const e = this.options;
                if (!function(t, e) {
                    if (("mousemove" === t || "mouseout" === t) && (e.onHover || e.onLeave))
                        return !0;
                    if (e.onClick && ("click" === t || "mouseup" === t))
                        return !0;
                    return !1
                }(t.type, e))
                    return;
                const i = this._getLegendItemAt(t.x, t.y);
                if ("mousemove" === t.type || "mouseout" === t.type) {
                    const a = this._hoveredItem
                      , r = (o = i,
                    null !== (n = a) && null !== o && n.datasetIndex === o.datasetIndex && n.index === o.index);
                    a && !r && s.callback(e.onLeave, [t, a, this], this),
                    this._hoveredItem = i,
                    i && !r && s.callback(e.onHover, [t, i, this], this)
                } else
                    i && s.callback(e.onClick, [t, i, this], this);
                var n, o
            }
        }
        function ci(t, e) {
            return e * (t.text ? t.text.length + .5 : 0)
        }
        var di = {
            id: "legend",
            _element: hi,
            start(t, e, i) {
                const s = t.legend = new hi({
                    ctx: t.ctx,
                    options: i,
                    chart: t
                });
                rt.configure(t, s, i),
                rt.addBox(t, s)
            },
            stop(t) {
                rt.removeBox(t, t.legend),
                delete t.legend
            },
            beforeUpdate(t, e, i) {
                const s = t.legend;
                rt.configure(t, s, i),
                s.options = i
            },
            afterUpdate(t) {
                const e = t.legend;
                e.buildLabels(),
                e.adjustHitBoxes()
            },
            afterEvent(t, e) {
                e.replay || t.legend.handleEvent(e.event)
            },
            defaults: {
                display: !0,
                position: "top",
                align: "center",
                fullSize: !0,
                reverse: !1,
                weight: 1e3,
                onClick(t, e, i) {
                    const s = e.datasetIndex
                      , n = i.chart;
                    n.isDatasetVisible(s) ? (n.hide(s),
                    e.hidden = !0) : (n.show(s),
                    e.hidden = !1)
                },
                onHover: null,
                onLeave: null,
                labels: {
                    color: t => t.chart.options.color,
                    boxWidth: 40,
                    padding: 10,
                    generateLabels(t) {
                        const e = t.data.datasets
                          , {labels: {usePointStyle: i, pointStyle: n, textAlign: o, color: a, useBorderRadius: r, borderRadius: l}} = t.legend.options;
                        return t._getSortedDatasetMetas().map((t => {
                            const h = t.controller.getStyle(i ? 0 : void 0)
                              , c = s.toPadding(h.borderWidth);
                            return {
                                text: e[t.index].label,
                                fillStyle: h.backgroundColor,
                                fontColor: a,
                                hidden: !t.visible,
                                lineCap: h.borderCapStyle,
                                lineDash: h.borderDash,
                                lineDashOffset: h.borderDashOffset,
                                lineJoin: h.borderJoinStyle,
                                lineWidth: (c.width + c.height) / 4,
                                strokeStyle: h.borderColor,
                                pointStyle: n || h.pointStyle,
                                rotation: h.rotation,
                                textAlign: o || h.textAlign,
                                borderRadius: r && (l || h.borderRadius),
                                datasetIndex: t.index
                            }
                        }
                        ), this)
                    }
                },
                title: {
                    color: t => t.chart.options.color,
                    display: !1,
                    position: "center",
                    text: ""
                }
            },
            descriptors: {
                _scriptable: t => !t.startsWith("on"),
                labels: {
                    _scriptable: t => !["generateLabels", "filter", "sort"].includes(t)
                }
            }
        };
        class ui extends St {
            constructor(t) {
                super(),
                this.chart = t.chart,
                this.options = t.options,
                this.ctx = t.ctx,
                this._padding = void 0,
                this.top = void 0,
                this.bottom = void 0,
                this.left = void 0,
                this.right = void 0,
                this.width = void 0,
                this.height = void 0,
                this.position = void 0,
                this.weight = void 0,
                this.fullSize = void 0
            }
            update(t, e) {
                const i = this.options;
                if (this.left = 0,
                this.top = 0,
                !i.display)
                    return void (this.width = this.height = this.right = this.bottom = 0);
                this.width = this.right = t,
                this.height = this.bottom = e;
                const n = s.isArray(i.text) ? i.text.length : 1;
                this._padding = s.toPadding(i.padding);
                const o = n * s.toFont(i.font).lineHeight + this._padding.height;
                this.isHorizontal() ? this.height = o : this.width = o
            }
            isHorizontal() {
                const t = this.options.position;
                return "top" === t || "bottom" === t
            }
            _drawArgs(t) {
                const {top: e, left: i, bottom: n, right: o, options: a} = this
                  , r = a.align;
                let l, h, c, d = 0;
                return this.isHorizontal() ? (h = s._alignStartEnd(r, i, o),
                c = e + t,
                l = o - i) : ("left" === a.position ? (h = i + t,
                c = s._alignStartEnd(r, n, e),
                d = -.5 * s.PI) : (h = o - t,
                c = s._alignStartEnd(r, e, n),
                d = .5 * s.PI),
                l = n - e),
                {
                    titleX: h,
                    titleY: c,
                    maxWidth: l,
                    rotation: d
                }
            }
            draw() {
                const t = this.ctx
                  , e = this.options;
                if (!e.display)
                    return;
                const i = s.toFont(e.font)
                  , n = i.lineHeight / 2 + this._padding.top
                  , {titleX: o, titleY: a, maxWidth: r, rotation: l} = this._drawArgs(n);
                s.renderText(t, e.text, 0, 0, i, {
                    color: e.color,
                    maxWidth: r,
                    rotation: l,
                    textAlign: s._toLeftRightCenter(e.align),
                    textBaseline: "middle",
                    translation: [o, a]
                })
            }
        }
        var fi = {
            id: "title",
            _element: ui,
            start(t, e, i) {
                !function(t, e) {
                    const i = new ui({
                        ctx: t.ctx,
                        options: e,
                        chart: t
                    });
                    rt.configure(t, i, e),
                    rt.addBox(t, i),
                    t.titleBlock = i
                }(t, i)
            },
            stop(t) {
                const e = t.titleBlock;
                rt.removeBox(t, e),
                delete t.titleBlock
            },
            beforeUpdate(t, e, i) {
                const s = t.titleBlock;
                rt.configure(t, s, i),
                s.options = i
            },
            defaults: {
                align: "center",
                display: !1,
                font: {
                    weight: "bold"
                },
                fullSize: !0,
                padding: 10,
                position: "top",
                text: "",
                weight: 2e3
            },
            defaultRoutes: {
                color: "color"
            },
            descriptors: {
                _scriptable: !0,
                _indexable: !1
            }
        };
        const gi = new WeakMap;
        var pi = {
            id: "subtitle",
            start(t, e, i) {
                const s = new ui({
                    ctx: t.ctx,
                    options: i,
                    chart: t
                });
                rt.configure(t, s, i),
                rt.addBox(t, s),
                gi.set(t, s)
            },
            stop(t) {
                rt.removeBox(t, gi.get(t)),
                gi.delete(t)
            },
            beforeUpdate(t, e, i) {
                const s = gi.get(t);
                rt.configure(t, s, i),
                s.options = i
            },
            defaults: {
                align: "center",
                display: !1,
                font: {
                    weight: "normal"
                },
                fullSize: !0,
                padding: 0,
                position: "top",
                text: "",
                weight: 1500
            },
            defaultRoutes: {
                color: "color"
            },
            descriptors: {
                _scriptable: !0,
                _indexable: !1
            }
        };
        const mi = {
            average(t) {
                if (!t.length)
                    return !1;
                let e, i, s = 0, n = 0, o = 0;
                for (e = 0,
                i = t.length; e < i; ++e) {
                    const i = t[e].element;
                    if (i && i.hasValue()) {
                        const t = i.tooltipPosition();
                        s += t.x,
                        n += t.y,
                        ++o
                    }
                }
                return {
                    x: s / o,
                    y: n / o
                }
            },
            nearest(t, e) {
                if (!t.length)
                    return !1;
                let i, n, o, a = e.x, r = e.y, l = Number.POSITIVE_INFINITY;
                for (i = 0,
                n = t.length; i < n; ++i) {
                    const n = t[i].element;
                    if (n && n.hasValue()) {
                        const t = n.getCenterPoint()
                          , i = s.distanceBetweenPoints(e, t);
                        i < l && (l = i,
                        o = n)
                    }
                }
                if (o) {
                    const t = o.tooltipPosition();
                    a = t.x,
                    r = t.y
                }
                return {
                    x: a,
                    y: r
                }
            }
        };
        function bi(t, e) {
            return e && (s.isArray(e) ? Array.prototype.push.apply(t, e) : t.push(e)),
            t
        }
        function xi(t) {
            return ("string" == typeof t || t instanceof String) && t.indexOf("\n") > -1 ? t.split("\n") : t
        }
        function _i(t, e) {
            const {element: i, datasetIndex: s, index: n} = e
              , o = t.getDatasetMeta(s).controller
              , {label: a, value: r} = o.getLabelAndValue(n);
            return {
                chart: t,
                label: a,
                parsed: o.getParsed(n),
                raw: t.data.datasets[s].data[n],
                formattedValue: r,
                dataset: o.getDataset(),
                dataIndex: n,
                datasetIndex: s,
                element: i
            }
        }
        function yi(t, e) {
            const i = t.chart.ctx
              , {body: n, footer: o, title: a} = t
              , {boxWidth: r, boxHeight: l} = e
              , h = s.toFont(e.bodyFont)
              , c = s.toFont(e.titleFont)
              , d = s.toFont(e.footerFont)
              , u = a.length
              , f = o.length
              , g = n.length
              , p = s.toPadding(e.padding);
            let m = p.height
              , b = 0
              , x = n.reduce(( (t, e) => t + e.before.length + e.lines.length + e.after.length), 0);
            if (x += t.beforeBody.length + t.afterBody.length,
            u && (m += u * c.lineHeight + (u - 1) * e.titleSpacing + e.titleMarginBottom),
            x) {
                m += g * (e.displayColors ? Math.max(l, h.lineHeight) : h.lineHeight) + (x - g) * h.lineHeight + (x - 1) * e.bodySpacing
            }
            f && (m += e.footerMarginTop + f * d.lineHeight + (f - 1) * e.footerSpacing);
            let _ = 0;
            const y = function(t) {
                b = Math.max(b, i.measureText(t).width + _)
            };
            return i.save(),
            i.font = c.string,
            s.each(t.title, y),
            i.font = h.string,
            s.each(t.beforeBody.concat(t.afterBody), y),
            _ = e.displayColors ? r + 2 + e.boxPadding : 0,
            s.each(n, (t => {
                s.each(t.before, y),
                s.each(t.lines, y),
                s.each(t.after, y)
            }
            )),
            _ = 0,
            i.font = d.string,
            s.each(t.footer, y),
            i.restore(),
            b += p.width,
            {
                width: b,
                height: m
            }
        }
        function vi(t, e, i, s) {
            const {x: n, width: o} = i
              , {width: a, chartArea: {left: r, right: l}} = t;
            let h = "center";
            return "center" === s ? h = n <= (r + l) / 2 ? "left" : "right" : n <= o / 2 ? h = "left" : n >= a - o / 2 && (h = "right"),
            function(t, e, i, s) {
                const {x: n, width: o} = s
                  , a = i.caretSize + i.caretPadding;
                return "left" === t && n + o + a > e.width || "right" === t && n - o - a < 0 || void 0
            }(h, t, e, i) && (h = "center"),
            h
        }
        function wi(t, e, i) {
            const s = i.yAlign || e.yAlign || function(t, e) {
                const {y: i, height: s} = e;
                return i < s / 2 ? "top" : i > t.height - s / 2 ? "bottom" : "center"
            }(t, i);
            return {
                xAlign: i.xAlign || e.xAlign || vi(t, e, i, s),
                yAlign: s
            }
        }
        function Mi(t, e, i, n) {
            const {caretSize: o, caretPadding: a, cornerRadius: r} = t
              , {xAlign: l, yAlign: h} = i
              , c = o + a
              , {topLeft: d, topRight: u, bottomLeft: f, bottomRight: g} = s.toTRBLCorners(r);
            let p = function(t, e) {
                let {x: i, width: s} = t;
                return "right" === e ? i -= s : "center" === e && (i -= s / 2),
                i
            }(e, l);
            const m = function(t, e, i) {
                let {y: s, height: n} = t;
                return "top" === e ? s += i : s -= "bottom" === e ? n + i : n / 2,
                s
            }(e, h, c);
            return "center" === h ? "left" === l ? p += c : "right" === l && (p -= c) : "left" === l ? p -= Math.max(d, f) + o : "right" === l && (p += Math.max(u, g) + o),
            {
                x: s._limitValue(p, 0, n.width - e.width),
                y: s._limitValue(m, 0, n.height - e.height)
            }
        }
        function ki(t, e, i) {
            const n = s.toPadding(i.padding);
            return "center" === e ? t.x + t.width / 2 : "right" === e ? t.x + t.width - n.right : t.x + n.left
        }
        function Pi(t) {
            return bi([], xi(t))
        }
        function Si(t, e) {
            const i = e && e.dataset && e.dataset.tooltip && e.dataset.tooltip.callbacks;
            return i ? t.override(i) : t
        }
        const Oi = {
            beforeTitle: s.noop,
            title(t) {
                if (t.length > 0) {
                    const e = t[0]
                      , i = e.chart.data.labels
                      , s = i ? i.length : 0;
                    if (this && this.options && "dataset" === this.options.mode)
                        return e.dataset.label || "";
                    if (e.label)
                        return e.label;
                    if (s > 0 && e.dataIndex < s)
                        return i[e.dataIndex]
                }
                return ""
            },
            afterTitle: s.noop,
            beforeBody: s.noop,
            beforeLabel: s.noop,
            label(t) {
                if (this && this.options && "dataset" === this.options.mode)
                    return t.label + ": " + t.formattedValue || t.formattedValue;
                let e = t.dataset.label || "";
                e && (e += ": ");
                const i = t.formattedValue;
                return s.isNullOrUndef(i) || (e += i),
                e
            },
            labelColor(t) {
                const e = t.chart.getDatasetMeta(t.datasetIndex).controller.getStyle(t.dataIndex);
                return {
                    borderColor: e.borderColor,
                    backgroundColor: e.backgroundColor,
                    borderWidth: e.borderWidth,
                    borderDash: e.borderDash,
                    borderDashOffset: e.borderDashOffset,
                    borderRadius: 0
                }
            },
            labelTextColor() {
                return this.options.bodyColor
            },
            labelPointStyle(t) {
                const e = t.chart.getDatasetMeta(t.datasetIndex).controller.getStyle(t.dataIndex);
                return {
                    pointStyle: e.pointStyle,
                    rotation: e.rotation
                }
            },
            afterLabel: s.noop,
            afterBody: s.noop,
            beforeFooter: s.noop,
            footer: s.noop,
            afterFooter: s.noop
        };
        function Di(t, e, i, s) {
            const n = t[e].call(i, s);
            return void 0 === n ? Oi[e].call(i, s) : n
        }
        class Ci extends St {
            static positioners = mi;
            constructor(t) {
                super(),
                this.opacity = 0,
                this._active = [],
                this._eventPosition = void 0,
                this._size = void 0,
                this._cachedAnimations = void 0,
                this._tooltipItems = [],
                this.$animations = void 0,
                this.$context = void 0,
                this.chart = t.chart,
                this.options = t.options,
                this.dataPoints = void 0,
                this.title = void 0,
                this.beforeBody = void 0,
                this.body = void 0,
                this.afterBody = void 0,
                this.footer = void 0,
                this.xAlign = void 0,
                this.yAlign = void 0,
                this.x = void 0,
                this.y = void 0,
                this.height = void 0,
                this.width = void 0,
                this.caretX = void 0,
                this.caretY = void 0,
                this.labelColors = void 0,
                this.labelPointStyles = void 0,
                this.labelTextColors = void 0
            }
            initialize(t) {
                this.options = t,
                this._cachedAnimations = void 0,
                this.$context = void 0
            }
            _resolveAnimations() {
                const t = this._cachedAnimations;
                if (t)
                    return t;
                const e = this.chart
                  , i = this.options.setContext(this.getContext())
                  , s = i.enabled && e.options.animation && i.animations
                  , n = new h(this.chart,s);
                return s._cacheable && (this._cachedAnimations = Object.freeze(n)),
                n
            }
            getContext() {
                return this.$context || (this.$context = (t = this.chart.getContext(),
                e = this,
                i = this._tooltipItems,
                s.createContext(t, {
                    tooltip: e,
                    tooltipItems: i,
                    type: "tooltip"
                })));
                var t, e, i
            }
            getTitle(t, e) {
                const {callbacks: i} = e
                  , s = Di(i, "beforeTitle", this, t)
                  , n = Di(i, "title", this, t)
                  , o = Di(i, "afterTitle", this, t);
                let a = [];
                return a = bi(a, xi(s)),
                a = bi(a, xi(n)),
                a = bi(a, xi(o)),
                a
            }
            getBeforeBody(t, e) {
                return Pi(Di(e.callbacks, "beforeBody", this, t))
            }
            getBody(t, e) {
                const {callbacks: i} = e
                  , n = [];
                return s.each(t, (t => {
                    const e = {
                        before: [],
                        lines: [],
                        after: []
                    }
                      , s = Si(i, t);
                    bi(e.before, xi(Di(s, "beforeLabel", this, t))),
                    bi(e.lines, Di(s, "label", this, t)),
                    bi(e.after, xi(Di(s, "afterLabel", this, t))),
                    n.push(e)
                }
                )),
                n
            }
            getAfterBody(t, e) {
                return Pi(Di(e.callbacks, "afterBody", this, t))
            }
            getFooter(t, e) {
                const {callbacks: i} = e
                  , s = Di(i, "beforeFooter", this, t)
                  , n = Di(i, "footer", this, t)
                  , o = Di(i, "afterFooter", this, t);
                let a = [];
                return a = bi(a, xi(s)),
                a = bi(a, xi(n)),
                a = bi(a, xi(o)),
                a
            }
            _createItems(t) {
                const e = this._active
                  , i = this.chart.data
                  , n = []
                  , o = []
                  , a = [];
                let r, l, h = [];
                for (r = 0,
                l = e.length; r < l; ++r)
                    h.push(_i(this.chart, e[r]));
                return t.filter && (h = h.filter(( (e, s, n) => t.filter(e, s, n, i)))),
                t.itemSort && (h = h.sort(( (e, s) => t.itemSort(e, s, i)))),
                s.each(h, (e => {
                    const i = Si(t.callbacks, e);
                    n.push(Di(i, "labelColor", this, e)),
                    o.push(Di(i, "labelPointStyle", this, e)),
                    a.push(Di(i, "labelTextColor", this, e))
                }
                )),
                this.labelColors = n,
                this.labelPointStyles = o,
                this.labelTextColors = a,
                this.dataPoints = h,
                h
            }
            update(t, e) {
                const i = this.options.setContext(this.getContext())
                  , s = this._active;
                let n, o = [];
                if (s.length) {
                    const t = mi[i.position].call(this, s, this._eventPosition);
                    o = this._createItems(i),
                    this.title = this.getTitle(o, i),
                    this.beforeBody = this.getBeforeBody(o, i),
                    this.body = this.getBody(o, i),
                    this.afterBody = this.getAfterBody(o, i),
                    this.footer = this.getFooter(o, i);
                    const e = this._size = yi(this, i)
                      , a = Object.assign({}, t, e)
                      , r = wi(this.chart, i, a)
                      , l = Mi(i, a, r, this.chart);
                    this.xAlign = r.xAlign,
                    this.yAlign = r.yAlign,
                    n = {
                        opacity: 1,
                        x: l.x,
                        y: l.y,
                        width: e.width,
                        height: e.height,
                        caretX: t.x,
                        caretY: t.y
                    }
                } else
                    0 !== this.opacity && (n = {
                        opacity: 0
                    });
                this._tooltipItems = o,
                this.$context = void 0,
                n && this._resolveAnimations().update(this, n),
                t && i.external && i.external.call(this, {
                    chart: this.chart,
                    tooltip: this,
                    replay: e
                })
            }
            drawCaret(t, e, i, s) {
                const n = this.getCaretPosition(t, i, s);
                e.lineTo(n.x1, n.y1),
                e.lineTo(n.x2, n.y2),
                e.lineTo(n.x3, n.y3)
            }
            getCaretPosition(t, e, i) {
                const {xAlign: n, yAlign: o} = this
                  , {caretSize: a, cornerRadius: r} = i
                  , {topLeft: l, topRight: h, bottomLeft: c, bottomRight: d} = s.toTRBLCorners(r)
                  , {x: u, y: f} = t
                  , {width: g, height: p} = e;
                let m, b, x, _, y, v;
                return "center" === o ? (y = f + p / 2,
                "left" === n ? (m = u,
                b = m - a,
                _ = y + a,
                v = y - a) : (m = u + g,
                b = m + a,
                _ = y - a,
                v = y + a),
                x = m) : (b = "left" === n ? u + Math.max(l, c) + a : "right" === n ? u + g - Math.max(h, d) - a : this.caretX,
                "top" === o ? (_ = f,
                y = _ - a,
                m = b - a,
                x = b + a) : (_ = f + p,
                y = _ + a,
                m = b + a,
                x = b - a),
                v = _),
                {
                    x1: m,
                    x2: b,
                    x3: x,
                    y1: _,
                    y2: y,
                    y3: v
                }
            }
            drawTitle(t, e, i) {
                const n = this.title
                  , o = n.length;
                let a, r, l;
                if (o) {
                    const h = s.getRtlAdapter(i.rtl, this.x, this.width);
                    for (t.x = ki(this, i.titleAlign, i),
                    e.textAlign = h.textAlign(i.titleAlign),
                    e.textBaseline = "middle",
                    a = s.toFont(i.titleFont),
                    r = i.titleSpacing,
                    e.fillStyle = i.titleColor,
                    e.font = a.string,
                    l = 0; l < o; ++l)
                        e.fillText(n[l], h.x(t.x), t.y + a.lineHeight / 2),
                        t.y += a.lineHeight + r,
                        l + 1 === o && (t.y += i.titleMarginBottom - r)
                }
            }
            _drawColorBox(t, e, i, n, o) {
                const a = this.labelColors[i]
                  , r = this.labelPointStyles[i]
                  , {boxHeight: l, boxWidth: h, boxPadding: c} = o
                  , d = s.toFont(o.bodyFont)
                  , u = ki(this, "left", o)
                  , f = n.x(u)
                  , g = l < d.lineHeight ? (d.lineHeight - l) / 2 : 0
                  , p = e.y + g;
                if (o.usePointStyle) {
                    const e = {
                        radius: Math.min(h, l) / 2,
                        pointStyle: r.pointStyle,
                        rotation: r.rotation,
                        borderWidth: 1
                    }
                      , i = n.leftForLtr(f, h) + h / 2
                      , c = p + l / 2;
                    t.strokeStyle = o.multiKeyBackground,
                    t.fillStyle = o.multiKeyBackground,
                    s.drawPoint(t, e, i, c),
                    t.strokeStyle = a.borderColor,
                    t.fillStyle = a.backgroundColor,
                    s.drawPoint(t, e, i, c)
                } else {
                    t.lineWidth = s.isObject(a.borderWidth) ? Math.max(...Object.values(a.borderWidth)) : a.borderWidth || 1,
                    t.strokeStyle = a.borderColor,
                    t.setLineDash(a.borderDash || []),
                    t.lineDashOffset = a.borderDashOffset || 0;
                    const e = n.leftForLtr(f, h - c)
                      , i = n.leftForLtr(n.xPlus(f, 1), h - c - 2)
                      , r = s.toTRBLCorners(a.borderRadius);
                    Object.values(r).some((t => 0 !== t)) ? (t.beginPath(),
                    t.fillStyle = o.multiKeyBackground,
                    s.addRoundedRectPath(t, {
                        x: e,
                        y: p,
                        w: h,
                        h: l,
                        radius: r
                    }),
                    t.fill(),
                    t.stroke(),
                    t.fillStyle = a.backgroundColor,
                    t.beginPath(),
                    s.addRoundedRectPath(t, {
                        x: i,
                        y: p + 1,
                        w: h - 2,
                        h: l - 2,
                        radius: r
                    }),
                    t.fill()) : (t.fillStyle = o.multiKeyBackground,
                    t.fillRect(e, p, h, l),
                    t.strokeRect(e, p, h, l),
                    t.fillStyle = a.backgroundColor,
                    t.fillRect(i, p + 1, h - 2, l - 2))
                }
                t.fillStyle = this.labelTextColors[i]
            }
            drawBody(t, e, i) {
                const {body: n} = this
                  , {bodySpacing: o, bodyAlign: a, displayColors: r, boxHeight: l, boxWidth: h, boxPadding: c} = i
                  , d = s.toFont(i.bodyFont);
                let u = d.lineHeight
                  , f = 0;
                const g = s.getRtlAdapter(i.rtl, this.x, this.width)
                  , p = function(i) {
                    e.fillText(i, g.x(t.x + f), t.y + u / 2),
                    t.y += u + o
                }
                  , m = g.textAlign(a);
                let b, x, _, y, v, w, M;
                for (e.textAlign = a,
                e.textBaseline = "middle",
                e.font = d.string,
                t.x = ki(this, m, i),
                e.fillStyle = i.bodyColor,
                s.each(this.beforeBody, p),
                f = r && "right" !== m ? "center" === a ? h / 2 + c : h + 2 + c : 0,
                y = 0,
                w = n.length; y < w; ++y) {
                    for (b = n[y],
                    x = this.labelTextColors[y],
                    e.fillStyle = x,
                    s.each(b.before, p),
                    _ = b.lines,
                    r && _.length && (this._drawColorBox(e, t, y, g, i),
                    u = Math.max(d.lineHeight, l)),
                    v = 0,
                    M = _.length; v < M; ++v)
                        p(_[v]),
                        u = d.lineHeight;
                    s.each(b.after, p)
                }
                f = 0,
                u = d.lineHeight,
                s.each(this.afterBody, p),
                t.y -= o
            }
            drawFooter(t, e, i) {
                const n = this.footer
                  , o = n.length;
                let a, r;
                if (o) {
                    const l = s.getRtlAdapter(i.rtl, this.x, this.width);
                    for (t.x = ki(this, i.footerAlign, i),
                    t.y += i.footerMarginTop,
                    e.textAlign = l.textAlign(i.footerAlign),
                    e.textBaseline = "middle",
                    a = s.toFont(i.footerFont),
                    e.fillStyle = i.footerColor,
                    e.font = a.string,
                    r = 0; r < o; ++r)
                        e.fillText(n[r], l.x(t.x), t.y + a.lineHeight / 2),
                        t.y += a.lineHeight + i.footerSpacing
                }
            }
            drawBackground(t, e, i, n) {
                const {xAlign: o, yAlign: a} = this
                  , {x: r, y: l} = t
                  , {width: h, height: c} = i
                  , {topLeft: d, topRight: u, bottomLeft: f, bottomRight: g} = s.toTRBLCorners(n.cornerRadius);
                e.fillStyle = n.backgroundColor,
                e.strokeStyle = n.borderColor,
                e.lineWidth = n.borderWidth,
                e.beginPath(),
                e.moveTo(r + d, l),
                "top" === a && this.drawCaret(t, e, i, n),
                e.lineTo(r + h - u, l),
                e.quadraticCurveTo(r + h, l, r + h, l + u),
                "center" === a && "right" === o && this.drawCaret(t, e, i, n),
                e.lineTo(r + h, l + c - g),
                e.quadraticCurveTo(r + h, l + c, r + h - g, l + c),
                "bottom" === a && this.drawCaret(t, e, i, n),
                e.lineTo(r + f, l + c),
                e.quadraticCurveTo(r, l + c, r, l + c - f),
                "center" === a && "left" === o && this.drawCaret(t, e, i, n),
                e.lineTo(r, l + d),
                e.quadraticCurveTo(r, l, r + d, l),
                e.closePath(),
                e.fill(),
                n.borderWidth > 0 && e.stroke()
            }
            _updateAnimationTarget(t) {
                const e = this.chart
                  , i = this.$animations
                  , s = i && i.x
                  , n = i && i.y;
                if (s || n) {
                    const i = mi[t.position].call(this, this._active, this._eventPosition);
                    if (!i)
                        return;
                    const o = this._size = yi(this, t)
                      , a = Object.assign({}, i, this._size)
                      , r = wi(e, t, a)
                      , l = Mi(t, a, r, e);
                    s._to === l.x && n._to === l.y || (this.xAlign = r.xAlign,
                    this.yAlign = r.yAlign,
                    this.width = o.width,
                    this.height = o.height,
                    this.caretX = i.x,
                    this.caretY = i.y,
                    this._resolveAnimations().update(this, l))
                }
            }
            _willRender() {
                return !!this.opacity
            }
            draw(t) {
                const e = this.options.setContext(this.getContext());
                let i = this.opacity;
                if (!i)
                    return;
                this._updateAnimationTarget(e);
                const n = {
                    width: this.width,
                    height: this.height
                }
                  , o = {
                    x: this.x,
                    y: this.y
                };
                i = Math.abs(i) < .001 ? 0 : i;
                const a = s.toPadding(e.padding)
                  , r = this.title.length || this.beforeBody.length || this.body.length || this.afterBody.length || this.footer.length;
                e.enabled && r && (t.save(),
                t.globalAlpha = i,
                this.drawBackground(o, t, n, e),
                s.overrideTextDirection(t, e.textDirection),
                o.y += a.top,
                this.drawTitle(o, t, e),
                this.drawBody(o, t, e),
                this.drawFooter(o, t, e),
                s.restoreTextDirection(t, e.textDirection),
                t.restore())
            }
            getActiveElements() {
                return this._active || []
            }
            setActiveElements(t, e) {
                const i = this._active
                  , n = t.map((t => {
                    let {datasetIndex: e, index: i} = t;
                    const s = this.chart.getDatasetMeta(e);
                    if (!s)
                        throw new Error("Cannot find a dataset at index " + e);
                    return {
                        datasetIndex: e,
                        element: s.data[i],
                        index: i
                    }
                }
                ))
                  , o = !s._elementsEqual(i, n)
                  , a = this._positionChanged(n, e);
                (o || a) && (this._active = n,
                this._eventPosition = e,
                this._ignoreReplayEvents = !0,
                this.update(!0))
            }
            handleEvent(t, e) {
                let i = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
                if (e && this._ignoreReplayEvents)
                    return !1;
                this._ignoreReplayEvents = !1;
                const n = this.options
                  , o = this._active || []
                  , a = this._getActiveElements(t, o, e, i)
                  , r = this._positionChanged(a, t)
                  , l = e || !s._elementsEqual(a, o) || r;
                return l && (this._active = a,
                (n.enabled || n.external) && (this._eventPosition = {
                    x: t.x,
                    y: t.y
                },
                this.update(!0, e))),
                l
            }
            _getActiveElements(t, e, i, s) {
                const n = this.options;
                if ("mouseout" === t.type)
                    return [];
                if (!s)
                    return e;
                const o = this.chart.getElementsAtEventForMode(t, n.mode, n, i);
                return n.reverse && o.reverse(),
                o
            }
            _positionChanged(t, e) {
                const {caretX: i, caretY: s, options: n} = this
                  , o = mi[n.position].call(this, t, e);
                return !1 !== o && (i !== o.x || s !== o.y)
            }
        }
        var Ai = {
            id: "tooltip",
            _element: Ci,
            positioners: mi,
            afterInit(t, e, i) {
                i && (t.tooltip = new Ci({
                    chart: t,
                    options: i
                }))
            },
            beforeUpdate(t, e, i) {
                t.tooltip && t.tooltip.initialize(i)
            },
            reset(t, e, i) {
                t.tooltip && t.tooltip.initialize(i)
            },
            afterDraw(t) {
                const e = t.tooltip;
                if (e && e._willRender()) {
                    const i = {
                        tooltip: e
                    };
                    if (!1 === t.notifyPlugins("beforeTooltipDraw", {
                        ...i,
                        cancelable: !0
                    }))
                        return;
                    e.draw(t.ctx),
                    t.notifyPlugins("afterTooltipDraw", i)
                }
            },
            afterEvent(t, e) {
                if (t.tooltip) {
                    const i = e.replay;
                    t.tooltip.handleEvent(e.event, i, e.inChartArea) && (e.changed = !0)
                }
            },
            defaults: {
                enabled: !0,
                external: null,
                position: "average",
                backgroundColor: "rgba(0,0,0,0.8)",
                titleColor: "#fff",
                titleFont: {
                    weight: "bold"
                },
                titleSpacing: 2,
                titleMarginBottom: 6,
                titleAlign: "left",
                bodyColor: "#fff",
                bodySpacing: 2,
                bodyFont: {},
                bodyAlign: "left",
                footerColor: "#fff",
                footerSpacing: 2,
                footerMarginTop: 6,
                footerFont: {
                    weight: "bold"
                },
                footerAlign: "left",
                padding: 6,
                caretPadding: 2,
                caretSize: 5,
                cornerRadius: 6,
                boxHeight: (t, e) => e.bodyFont.size,
                boxWidth: (t, e) => e.bodyFont.size,
                multiKeyBackground: "#fff",
                displayColors: !0,
                boxPadding: 0,
                borderColor: "rgba(0,0,0,0)",
                borderWidth: 0,
                animation: {
                    duration: 400,
                    easing: "easeOutQuart"
                },
                animations: {
                    numbers: {
                        type: "number",
                        properties: ["x", "y", "width", "height", "caretX", "caretY"]
                    },
                    opacity: {
                        easing: "linear",
                        duration: 200
                    }
                },
                callbacks: Oi
            },
            defaultRoutes: {
                bodyFont: "font",
                footerFont: "font",
                titleFont: "font"
            },
            descriptors: {
                _scriptable: t => "filter" !== t && "itemSort" !== t && "external" !== t,
                _indexable: !1,
                callbacks: {
                    _scriptable: !1,
                    _indexable: !1
                },
                animation: {
                    _fallback: !1
                },
                animations: {
                    _fallback: "animation"
                }
            },
            additionalOptionScopes: ["interaction"]
        }
          , Ti = Object.freeze({
            __proto__: null,
            Colors: Ve,
            Decimation: Ue,
            Filler: ri,
            Legend: di,
            SubTitle: pi,
            Title: fi,
            Tooltip: Ai
        });
        function Ri(t, e, i, s) {
            const n = t.indexOf(e);
            if (-1 === n)
                return ( (t, e, i, s) => ("string" == typeof e ? (i = t.push(e) - 1,
                s.unshift({
                    index: i,
                    label: e
                })) : isNaN(e) && (i = null),
                i))(t, e, i, s);
            return n !== t.lastIndexOf(e) ? i : n
        }
        function Li(t) {
            const e = this.getLabels();
            return t >= 0 && t < e.length ? e[t] : t
        }
        class Ei extends Ft {
            static id = "category";
            static defaults = {
                ticks: {
                    callback: Li
                }
            };
            constructor(t) {
                super(t),
                this._startValue = void 0,
                this._valueRange = 0,
                this._addedLabels = []
            }
            init(t) {
                const e = this._addedLabels;
                if (e.length) {
                    const t = this.getLabels();
                    for (const {index: i, label: s} of e)
                        t[i] === s && t.splice(i, 1);
                    this._addedLabels = []
                }
                super.init(t)
            }
            parse(t, e) {
                if (s.isNullOrUndef(t))
                    return null;
                const i = this.getLabels();
                return ( (t, e) => null === t ? null : s._limitValue(Math.round(t), 0, e))(e = isFinite(e) && i[e] === t ? e : Ri(i, t, s.valueOrDefault(e, t), this._addedLabels), i.length - 1)
            }
            determineDataLimits() {
                const {minDefined: t, maxDefined: e} = this.getUserBounds();
                let {min: i, max: s} = this.getMinMax(!0);
                "ticks" === this.options.bounds && (t || (i = 0),
                e || (s = this.getLabels().length - 1)),
                this.min = i,
                this.max = s
            }
            buildTicks() {
                const t = this.min
                  , e = this.max
                  , i = this.options.offset
                  , s = [];
                let n = this.getLabels();
                n = 0 === t && e === n.length - 1 ? n : n.slice(t, e + 1),
                this._valueRange = Math.max(n.length - (i ? 0 : 1), 1),
                this._startValue = this.min - (i ? .5 : 0);
                for (let i = t; i <= e; i++)
                    s.push({
                        value: i
                    });
                return s
            }
            getLabelForValue(t) {
                return Li.call(this, t)
            }
            configure() {
                super.configure(),
                this.isHorizontal() || (this._reversePixels = !this._reversePixels)
            }
            getPixelForValue(t) {
                return "number" != typeof t && (t = this.parse(t)),
                null === t ? NaN : this.getPixelForDecimal((t - this._startValue) / this._valueRange)
            }
            getPixelForTick(t) {
                const e = this.ticks;
                return t < 0 || t > e.length - 1 ? null : this.getPixelForValue(e[t].value)
            }
            getValueForPixel(t) {
                return Math.round(this._startValue + this.getDecimalForPixel(t) * this._valueRange)
            }
            getBasePixel() {
                return this.bottom
            }
        }
        function Ii(t, e, i) {
            let {horizontal: n, minRotation: o} = i;
            const a = s.toRadians(o)
              , r = (n ? Math.sin(a) : Math.cos(a)) || .001
              , l = .75 * e * ("" + t).length;
            return Math.min(e / r, l)
        }
        class Fi extends Ft {
            constructor(t) {
                super(t),
                this.start = void 0,
                this.end = void 0,
                this._startValue = void 0,
                this._endValue = void 0,
                this._valueRange = 0
            }
            parse(t, e) {
                return s.isNullOrUndef(t) || ("number" == typeof t || t instanceof Number) && !isFinite(+t) ? null : +t
            }
            handleTickRangeOptions() {
                const {beginAtZero: t} = this.options
                  , {minDefined: e, maxDefined: i} = this.getUserBounds();
                let {min: n, max: o} = this;
                const a = t => n = e ? n : t
                  , r = t => o = i ? o : t;
                if (t) {
                    const t = s.sign(n)
                      , e = s.sign(o);
                    t < 0 && e < 0 ? r(0) : t > 0 && e > 0 && a(0)
                }
                if (n === o) {
                    let e = 0 === o ? 1 : Math.abs(.05 * o);
                    r(o + e),
                    t || a(n - e)
                }
                this.min = n,
                this.max = o
            }
            getTickLimit() {
                const t = this.options.ticks;
                let e, {maxTicksLimit: i, stepSize: s} = t;
                return s ? (e = Math.ceil(this.max / s) - Math.floor(this.min / s) + 1,
                e > 1e3 && (console.warn(`scales.${this.id}.ticks.stepSize: ${s} would result generating up to ${e} ticks. Limiting to 1000.`),
                e = 1e3)) : (e = this.computeTickLimit(),
                i = i || 11),
                i && (e = Math.min(i, e)),
                e
            }
            computeTickLimit() {
                return Number.POSITIVE_INFINITY
            }
            buildTicks() {
                const t = this.options
                  , e = t.ticks;
                let i = this.getTickLimit();
                i = Math.max(2, i);
                const n = function(t, e) {
                    const i = []
                      , {bounds: n, step: o, min: a, max: r, precision: l, count: h, maxTicks: c, maxDigits: d, includeBounds: u} = t
                      , f = o || 1
                      , g = c - 1
                      , {min: p, max: m} = e
                      , b = !s.isNullOrUndef(a)
                      , x = !s.isNullOrUndef(r)
                      , _ = !s.isNullOrUndef(h)
                      , y = (m - p) / (d + 1);
                    let v, w, M, k, P = s.niceNum((m - p) / g / f) * f;
                    if (P < 1e-14 && !b && !x)
                        return [{
                            value: p
                        }, {
                            value: m
                        }];
                    k = Math.ceil(m / P) - Math.floor(p / P),
                    k > g && (P = s.niceNum(k * P / g / f) * f),
                    s.isNullOrUndef(l) || (v = Math.pow(10, l),
                    P = Math.ceil(P * v) / v),
                    "ticks" === n ? (w = Math.floor(p / P) * P,
                    M = Math.ceil(m / P) * P) : (w = p,
                    M = m),
                    b && x && o && s.almostWhole((r - a) / o, P / 1e3) ? (k = Math.round(Math.min((r - a) / P, c)),
                    P = (r - a) / k,
                    w = a,
                    M = r) : _ ? (w = b ? a : w,
                    M = x ? r : M,
                    k = h - 1,
                    P = (M - w) / k) : (k = (M - w) / P,
                    k = s.almostEquals(k, Math.round(k), P / 1e3) ? Math.round(k) : Math.ceil(k));
                    const S = Math.max(s._decimalPlaces(P), s._decimalPlaces(w));
                    v = Math.pow(10, s.isNullOrUndef(l) ? S : l),
                    w = Math.round(w * v) / v,
                    M = Math.round(M * v) / v;
                    let O = 0;
                    for (b && (u && w !== a ? (i.push({
                        value: a
                    }),
                    w < a && O++,
                    s.almostEquals(Math.round((w + O * P) * v) / v, a, Ii(a, y, t)) && O++) : w < a && O++); O < k; ++O)
                        i.push({
                            value: Math.round((w + O * P) * v) / v
                        });
                    return x && u && M !== r ? i.length && s.almostEquals(i[i.length - 1].value, r, Ii(r, y, t)) ? i[i.length - 1].value = r : i.push({
                        value: r
                    }) : x && M !== r || i.push({
                        value: M
                    }),
                    i
                }({
                    maxTicks: i,
                    bounds: t.bounds,
                    min: t.min,
                    max: t.max,
                    precision: e.precision,
                    step: e.stepSize,
                    count: e.count,
                    maxDigits: this._maxDigits(),
                    horizontal: this.isHorizontal(),
                    minRotation: e.minRotation || 0,
                    includeBounds: !1 !== e.includeBounds
                }, this._range || this);
                return "ticks" === t.bounds && s._setMinAndMaxByKey(n, this, "value"),
                t.reverse ? (n.reverse(),
                this.start = this.max,
                this.end = this.min) : (this.start = this.min,
                this.end = this.max),
                n
            }
            configure() {
                const t = this.ticks;
                let e = this.min
                  , i = this.max;
                if (super.configure(),
                this.options.offset && t.length) {
                    const s = (i - e) / Math.max(t.length - 1, 1) / 2;
                    e -= s,
                    i += s
                }
                this._startValue = e,
                this._endValue = i,
                this._valueRange = i - e
            }
            getLabelForValue(t) {
                return s.formatNumber(t, this.chart.options.locale, this.options.ticks.format)
            }
        }
        class zi extends Fi {
            static id = "linear";
            static defaults = {
                ticks: {
                    callback: s.Ticks.formatters.numeric
                }
            };
            determineDataLimits() {
                const {min: t, max: e} = this.getMinMax(!0);
                this.min = s.isNumberFinite(t) ? t : 0,
                this.max = s.isNumberFinite(e) ? e : 1,
                this.handleTickRangeOptions()
            }
            computeTickLimit() {
                const t = this.isHorizontal()
                  , e = t ? this.width : this.height
                  , i = s.toRadians(this.options.ticks.minRotation)
                  , n = (t ? Math.sin(i) : Math.cos(i)) || .001
                  , o = this._resolveTickFontOptions(0);
                return Math.ceil(e / Math.min(40, o.lineHeight / n))
            }
            getPixelForValue(t) {
                return null === t ? NaN : this.getPixelForDecimal((t - this._startValue) / this._valueRange)
            }
            getValueForPixel(t) {
                return this._startValue + this.getDecimalForPixel(t) * this._valueRange
            }
        }
        const Ni = t => Math.floor(s.log10(t))
          , Bi = (t, e) => Math.pow(10, Ni(t) + e);
        function ji(t) {
            return 1 === t / Math.pow(10, Ni(t))
        }
        function Vi(t, e, i) {
            const s = Math.pow(10, i)
              , n = Math.floor(t / s);
            return Math.ceil(e / s) - n
        }
        function Wi(t, e) {
            let {min: i, max: n} = e;
            i = s.finiteOrDefault(t.min, i);
            const o = []
              , a = Ni(i);
            let r = function(t, e) {
                let i = Ni(e - t);
                for (; Vi(t, e, i) > 10; )
                    i++;
                for (; Vi(t, e, i) < 10; )
                    i--;
                return Math.min(i, Ni(t))
            }(i, n)
              , l = r < 0 ? Math.pow(10, Math.abs(r)) : 1;
            const h = Math.pow(10, r)
              , c = a > r ? Math.pow(10, a) : 0
              , d = Math.round((i - c) * l) / l
              , u = Math.floor((i - c) / h / 10) * h * 10;
            let f = Math.floor((d - u) / Math.pow(10, r))
              , g = s.finiteOrDefault(t.min, Math.round((c + u + f * Math.pow(10, r)) * l) / l);
            for (; g < n; )
                o.push({
                    value: g,
                    major: ji(g),
                    significand: f
                }),
                f >= 10 ? f = f < 15 ? 15 : 20 : f++,
                f >= 20 && (r++,
                f = 2,
                l = r >= 0 ? 1 : l),
                g = Math.round((c + u + f * Math.pow(10, r)) * l) / l;
            const p = s.finiteOrDefault(t.max, g);
            return o.push({
                value: p,
                major: ji(p),
                significand: f
            }),
            o
        }
        class Hi extends Ft {
            static id = "logarithmic";
            static defaults = {
                ticks: {
                    callback: s.Ticks.formatters.logarithmic,
                    major: {
                        enabled: !0
                    }
                }
            };
            constructor(t) {
                super(t),
                this.start = void 0,
                this.end = void 0,
                this._startValue = void 0,
                this._valueRange = 0
            }
            parse(t, e) {
                const i = Fi.prototype.parse.apply(this, [t, e]);
                if (0 !== i)
                    return s.isNumberFinite(i) && i > 0 ? i : null;
                this._zero = !0
            }
            determineDataLimits() {
                const {min: t, max: e} = this.getMinMax(!0);
                this.min = s.isNumberFinite(t) ? Math.max(0, t) : null,
                this.max = s.isNumberFinite(e) ? Math.max(0, e) : null,
                this.options.beginAtZero && (this._zero = !0),
                this._zero && this.min !== this._suggestedMin && !s.isNumberFinite(this._userMin) && (this.min = t === Bi(this.min, 0) ? Bi(this.min, -1) : Bi(this.min, 0)),
                this.handleTickRangeOptions()
            }
            handleTickRangeOptions() {
                const {minDefined: t, maxDefined: e} = this.getUserBounds();
                let i = this.min
                  , s = this.max;
                const n = e => i = t ? i : e
                  , o = t => s = e ? s : t;
                i === s && (i <= 0 ? (n(1),
                o(10)) : (n(Bi(i, -1)),
                o(Bi(s, 1)))),
                i <= 0 && n(Bi(s, -1)),
                s <= 0 && o(Bi(i, 1)),
                this.min = i,
                this.max = s
            }
            buildTicks() {
                const t = this.options
                  , e = Wi({
                    min: this._userMin,
                    max: this._userMax
                }, this);
                return "ticks" === t.bounds && s._setMinAndMaxByKey(e, this, "value"),
                t.reverse ? (e.reverse(),
                this.start = this.max,
                this.end = this.min) : (this.start = this.min,
                this.end = this.max),
                e
            }
            getLabelForValue(t) {
                return void 0 === t ? "0" : s.formatNumber(t, this.chart.options.locale, this.options.ticks.format)
            }
            configure() {
                const t = this.min;
                super.configure(),
                this._startValue = s.log10(t),
                this._valueRange = s.log10(this.max) - s.log10(t)
            }
            getPixelForValue(t) {
                return void 0 !== t && 0 !== t || (t = this.min),
                null === t || isNaN(t) ? NaN : this.getPixelForDecimal(t === this.min ? 0 : (s.log10(t) - this._startValue) / this._valueRange)
            }
            getValueForPixel(t) {
                const e = this.getDecimalForPixel(t);
                return Math.pow(10, this._startValue + e * this._valueRange)
            }
        }
        function Ui(t) {
            const e = t.ticks;
            if (e.display && t.display) {
                const t = s.toPadding(e.backdropPadding);
                return s.valueOrDefault(e.font && e.font.size, s.defaults.font.size) + t.height
            }
            return 0
        }
        function $i(t, e, i, s, n) {
            return t === s || t === n ? {
                start: e - i / 2,
                end: e + i / 2
            } : t < s || t > n ? {
                start: e - i,
                end: e
            } : {
                start: e,
                end: e + i
            }
        }
        function Yi(t) {
            const e = {
                l: t.left + t._padding.left,
                r: t.right - t._padding.right,
                t: t.top + t._padding.top,
                b: t.bottom - t._padding.bottom
            }
              , i = Object.assign({}, e)
              , n = []
              , o = []
              , a = t._pointLabels.length
              , r = t.options.pointLabels
              , l = r.centerPointLabels ? s.PI / a : 0;
            for (let u = 0; u < a; u++) {
                const a = r.setContext(t.getPointLabelContext(u));
                o[u] = a.padding;
                const f = t.getPointPosition(u, t.drawingArea + o[u], l)
                  , g = s.toFont(a.font)
                  , p = (h = t.ctx,
                c = g,
                d = t._pointLabels[u],
                d = s.isArray(d) ? d : [d],
                {
                    w: s._longestText(h, c.string, d),
                    h: d.length * c.lineHeight
                });
                n[u] = p;
                const m = s._normalizeAngle(t.getIndexAngle(u) + l)
                  , b = Math.round(s.toDegrees(m));
                qi(i, e, m, $i(b, f.x, p.w, 0, 180), $i(b, f.y, p.h, 90, 270))
            }
            var h, c, d;
            t.setCenterPoint(e.l - i.l, i.r - e.r, e.t - i.t, i.b - e.b),
            t._pointLabelItems = function(t, e, i) {
                const n = []
                  , o = t._pointLabels.length
                  , a = t.options
                  , r = Ui(a) / 2
                  , l = t.drawingArea
                  , h = a.pointLabels.centerPointLabels ? s.PI / o : 0;
                for (let a = 0; a < o; a++) {
                    const o = t.getPointPosition(a, l + r + i[a], h)
                      , c = Math.round(s.toDegrees(s._normalizeAngle(o.angle + s.HALF_PI)))
                      , d = e[a]
                      , u = Gi(o.y, d.h, c)
                      , f = Ki(c)
                      , g = Xi(o.x, d.w, f);
                    n.push({
                        x: o.x,
                        y: u,
                        textAlign: f,
                        left: g,
                        top: u,
                        right: g + d.w,
                        bottom: u + d.h
                    })
                }
                return n
            }(t, n, o)
        }
        function qi(t, e, i, s, n) {
            const o = Math.abs(Math.sin(i))
              , a = Math.abs(Math.cos(i));
            let r = 0
              , l = 0;
            s.start < e.l ? (r = (e.l - s.start) / o,
            t.l = Math.min(t.l, e.l - r)) : s.end > e.r && (r = (s.end - e.r) / o,
            t.r = Math.max(t.r, e.r + r)),
            n.start < e.t ? (l = (e.t - n.start) / a,
            t.t = Math.min(t.t, e.t - l)) : n.end > e.b && (l = (n.end - e.b) / a,
            t.b = Math.max(t.b, e.b + l))
        }
        function Ki(t) {
            return 0 === t || 180 === t ? "center" : t < 180 ? "left" : "right"
        }
        function Xi(t, e, i) {
            return "right" === i ? t -= e : "center" === i && (t -= e / 2),
            t
        }
        function Gi(t, e, i) {
            return 90 === i || 270 === i ? t -= e / 2 : (i > 270 || i < 90) && (t -= e),
            t
        }
        function Ji(t, e, i, n) {
            const {ctx: o} = t;
            if (i)
                o.arc(t.xCenter, t.yCenter, e, 0, s.TAU);
            else {
                let i = t.getPointPosition(0, e);
                o.moveTo(i.x, i.y);
                for (let s = 1; s < n; s++)
                    i = t.getPointPosition(s, e),
                    o.lineTo(i.x, i.y)
            }
        }
        class Zi extends Fi {
            static id = "radialLinear";
            static defaults = {
                display: !0,
                animate: !0,
                position: "chartArea",
                angleLines: {
                    display: !0,
                    lineWidth: 1,
                    borderDash: [],
                    borderDashOffset: 0
                },
                grid: {
                    circular: !1
                },
                startAngle: 0,
                ticks: {
                    showLabelBackdrop: !0,
                    callback: s.Ticks.formatters.numeric
                },
                pointLabels: {
                    backdropColor: void 0,
                    backdropPadding: 2,
                    display: !0,
                    font: {
                        size: 10
                    },
                    callback: t => t,
                    padding: 5,
                    centerPointLabels: !1
                }
            };
            static defaultRoutes = {
                "angleLines.color": "borderColor",
                "pointLabels.color": "color",
                "ticks.color": "color"
            };
            static descriptors = {
                angleLines: {
                    _fallback: "grid"
                }
            };
            constructor(t) {
                super(t),
                this.xCenter = void 0,
                this.yCenter = void 0,
                this.drawingArea = void 0,
                this._pointLabels = [],
                this._pointLabelItems = []
            }
            setDimensions() {
                const t = this._padding = s.toPadding(Ui(this.options) / 2)
                  , e = this.width = this.maxWidth - t.width
                  , i = this.height = this.maxHeight - t.height;
                this.xCenter = Math.floor(this.left + e / 2 + t.left),
                this.yCenter = Math.floor(this.top + i / 2 + t.top),
                this.drawingArea = Math.floor(Math.min(e, i) / 2)
            }
            determineDataLimits() {
                const {min: t, max: e} = this.getMinMax(!1);
                this.min = s.isNumberFinite(t) && !isNaN(t) ? t : 0,
                this.max = s.isNumberFinite(e) && !isNaN(e) ? e : 0,
                this.handleTickRangeOptions()
            }
            computeTickLimit() {
                return Math.ceil(this.drawingArea / Ui(this.options))
            }
            generateTickLabels(t) {
                Fi.prototype.generateTickLabels.call(this, t),
                this._pointLabels = this.getLabels().map(( (t, e) => {
                    const i = s.callback(this.options.pointLabels.callback, [t, e], this);
                    return i || 0 === i ? i : ""
                }
                )).filter(( (t, e) => this.chart.getDataVisibility(e)))
            }
            fit() {
                const t = this.options;
                t.display && t.pointLabels.display ? Yi(this) : this.setCenterPoint(0, 0, 0, 0)
            }
            setCenterPoint(t, e, i, s) {
                this.xCenter += Math.floor((t - e) / 2),
                this.yCenter += Math.floor((i - s) / 2),
                this.drawingArea -= Math.min(this.drawingArea / 2, Math.max(t, e, i, s))
            }
            getIndexAngle(t) {
                const e = s.TAU / (this._pointLabels.length || 1)
                  , i = this.options.startAngle || 0;
                return s._normalizeAngle(t * e + s.toRadians(i))
            }
            getDistanceFromCenterForValue(t) {
                if (s.isNullOrUndef(t))
                    return NaN;
                const e = this.drawingArea / (this.max - this.min);
                return this.options.reverse ? (this.max - t) * e : (t - this.min) * e
            }
            getValueForDistanceFromCenter(t) {
                if (s.isNullOrUndef(t))
                    return NaN;
                const e = t / (this.drawingArea / (this.max - this.min));
                return this.options.reverse ? this.max - e : this.min + e
            }
            getPointLabelContext(t) {
                const e = this._pointLabels || [];
                if (t >= 0 && t < e.length) {
                    const i = e[t];
                    return function(t, e, i) {
                        return s.createContext(t, {
                            label: i,
                            index: e,
                            type: "pointLabel"
                        })
                    }(this.getContext(), t, i)
                }
            }
            getPointPosition(t, e) {
                let i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
                const n = this.getIndexAngle(t) - s.HALF_PI + i;
                return {
                    x: Math.cos(n) * e + this.xCenter,
                    y: Math.sin(n) * e + this.yCenter,
                    angle: n
                }
            }
            getPointPositionForValue(t, e) {
                return this.getPointPosition(t, this.getDistanceFromCenterForValue(e))
            }
            getBasePosition(t) {
                return this.getPointPositionForValue(t || 0, this.getBaseValue())
            }
            getPointLabelPosition(t) {
                const {left: e, top: i, right: s, bottom: n} = this._pointLabelItems[t];
                return {
                    left: e,
                    top: i,
                    right: s,
                    bottom: n
                }
            }
            drawBackground() {
                const {backgroundColor: t, grid: {circular: e}} = this.options;
                if (t) {
                    const i = this.ctx;
                    i.save(),
                    i.beginPath(),
                    Ji(this, this.getDistanceFromCenterForValue(this._endValue), e, this._pointLabels.length),
                    i.closePath(),
                    i.fillStyle = t,
                    i.fill(),
                    i.restore()
                }
            }
            drawGrid() {
                const t = this.ctx
                  , e = this.options
                  , {angleLines: i, grid: n, border: o} = e
                  , a = this._pointLabels.length;
                let r, l, h;
                if (e.pointLabels.display && function(t, e) {
                    const {ctx: i, options: {pointLabels: n}} = t;
                    for (let o = e - 1; o >= 0; o--) {
                        const e = n.setContext(t.getPointLabelContext(o))
                          , a = s.toFont(e.font)
                          , {x: r, y: l, textAlign: h, left: c, top: d, right: u, bottom: f} = t._pointLabelItems[o]
                          , {backdropColor: g} = e;
                        if (!s.isNullOrUndef(g)) {
                            const t = s.toTRBLCorners(e.borderRadius)
                              , n = s.toPadding(e.backdropPadding);
                            i.fillStyle = g;
                            const o = c - n.left
                              , a = d - n.top
                              , r = u - c + n.width
                              , l = f - d + n.height;
                            Object.values(t).some((t => 0 !== t)) ? (i.beginPath(),
                            s.addRoundedRectPath(i, {
                                x: o,
                                y: a,
                                w: r,
                                h: l,
                                radius: t
                            }),
                            i.fill()) : i.fillRect(o, a, r, l)
                        }
                        s.renderText(i, t._pointLabels[o], r, l + a.lineHeight / 2, a, {
                            color: e.color,
                            textAlign: h,
                            textBaseline: "middle"
                        })
                    }
                }(this, a),
                n.display && this.ticks.forEach(( (t, e) => {
                    if (0 !== e) {
                        l = this.getDistanceFromCenterForValue(t.value);
                        const i = this.getContext(e)
                          , s = n.setContext(i)
                          , r = o.setContext(i);
                        !function(t, e, i, s, n) {
                            const o = t.ctx
                              , a = e.circular
                              , {color: r, lineWidth: l} = e;
                            !a && !s || !r || !l || i < 0 || (o.save(),
                            o.strokeStyle = r,
                            o.lineWidth = l,
                            o.setLineDash(n.dash),
                            o.lineDashOffset = n.dashOffset,
                            o.beginPath(),
                            Ji(t, i, a, s),
                            o.closePath(),
                            o.stroke(),
                            o.restore())
                        }(this, s, l, a, r)
                    }
                }
                )),
                i.display) {
                    for (t.save(),
                    r = a - 1; r >= 0; r--) {
                        const s = i.setContext(this.getPointLabelContext(r))
                          , {color: n, lineWidth: o} = s;
                        o && n && (t.lineWidth = o,
                        t.strokeStyle = n,
                        t.setLineDash(s.borderDash),
                        t.lineDashOffset = s.borderDashOffset,
                        l = this.getDistanceFromCenterForValue(e.ticks.reverse ? this.min : this.max),
                        h = this.getPointPosition(r, l),
                        t.beginPath(),
                        t.moveTo(this.xCenter, this.yCenter),
                        t.lineTo(h.x, h.y),
                        t.stroke())
                    }
                    t.restore()
                }
            }
            drawBorder() {}
            drawLabels() {
                const t = this.ctx
                  , e = this.options
                  , i = e.ticks;
                if (!i.display)
                    return;
                const n = this.getIndexAngle(0);
                let o, a;
                t.save(),
                t.translate(this.xCenter, this.yCenter),
                t.rotate(n),
                t.textAlign = "center",
                t.textBaseline = "middle",
                this.ticks.forEach(( (n, r) => {
                    if (0 === r && !e.reverse)
                        return;
                    const l = i.setContext(this.getContext(r))
                      , h = s.toFont(l.font);
                    if (o = this.getDistanceFromCenterForValue(this.ticks[r].value),
                    l.showLabelBackdrop) {
                        t.font = h.string,
                        a = t.measureText(n.label).width,
                        t.fillStyle = l.backdropColor;
                        const e = s.toPadding(l.backdropPadding);
                        t.fillRect(-a / 2 - e.left, -o - h.size / 2 - e.top, a + e.width, h.size + e.height)
                    }
                    s.renderText(t, n.label, 0, -o, h, {
                        color: l.color
                    })
                }
                )),
                t.restore()
            }
            drawTitle() {}
        }
        const Qi = {
            millisecond: {
                common: !0,
                size: 1,
                steps: 1e3
            },
            second: {
                common: !0,
                size: 1e3,
                steps: 60
            },
            minute: {
                common: !0,
                size: 6e4,
                steps: 60
            },
            hour: {
                common: !0,
                size: 36e5,
                steps: 24
            },
            day: {
                common: !0,
                size: 864e5,
                steps: 30
            },
            week: {
                common: !1,
                size: 6048e5,
                steps: 4
            },
            month: {
                common: !0,
                size: 2628e6,
                steps: 12
            },
            quarter: {
                common: !1,
                size: 7884e6,
                steps: 4
            },
            year: {
                common: !0,
                size: 3154e7
            }
        }
          , ts = Object.keys(Qi);
        function es(t, e) {
            return t - e
        }
        function is(t, e) {
            if (s.isNullOrUndef(e))
                return null;
            const i = t._adapter
              , {parser: n, round: o, isoWeekday: a} = t._parseOpts;
            let r = e;
            return "function" == typeof n && (r = n(r)),
            s.isNumberFinite(r) || (r = "string" == typeof n ? i.parse(r, n) : i.parse(r)),
            null === r ? null : (o && (r = "week" !== o || !s.isNumber(a) && !0 !== a ? i.startOf(r, o) : i.startOf(r, "isoWeek", a)),
            +r)
        }
        function ss(t, e, i, s) {
            const n = ts.length;
            for (let o = ts.indexOf(t); o < n - 1; ++o) {
                const t = Qi[ts[o]]
                  , n = t.steps ? t.steps : Number.MAX_SAFE_INTEGER;
                if (t.common && Math.ceil((i - e) / (n * t.size)) <= s)
                    return ts[o]
            }
            return ts[n - 1]
        }
        function ns(t, e, i) {
            if (i) {
                if (i.length) {
                    const {lo: n, hi: o} = s._lookup(i, e);
                    t[i[n] >= e ? i[n] : i[o]] = !0
                }
            } else
                t[e] = !0
        }
        function os(t, e, i) {
            const s = []
              , n = {}
              , o = e.length;
            let a, r;
            for (a = 0; a < o; ++a)
                r = e[a],
                n[r] = a,
                s.push({
                    value: r,
                    major: !1
                });
            return 0 !== o && i ? function(t, e, i, s) {
                const n = t._adapter
                  , o = +n.startOf(e[0].value, s)
                  , a = e[e.length - 1].value;
                let r, l;
                for (r = o; r <= a; r = +n.add(r, 1, s))
                    l = i[r],
                    l >= 0 && (e[l].major = !0);
                return e
            }(t, s, n, i) : s
        }
        class as extends Ft {
            static id = "time";
            static defaults = {
                bounds: "data",
                adapters: {},
                time: {
                    parser: !1,
                    unit: !1,
                    round: !1,
                    isoWeekday: !1,
                    minUnit: "millisecond",
                    displayFormats: {}
                },
                ticks: {
                    source: "auto",
                    callback: !1,
                    major: {
                        enabled: !1
                    }
                }
            };
            constructor(t) {
                super(t),
                this._cache = {
                    data: [],
                    labels: [],
                    all: []
                },
                this._unit = "day",
                this._majorUnit = void 0,
                this._offsets = {},
                this._normalized = !1,
                this._parseOpts = void 0
            }
            init(t) {
                let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                const i = t.time || (t.time = {})
                  , n = this._adapter = new V._date(t.adapters.date);
                n.init(e),
                s.mergeIf(i.displayFormats, n.formats()),
                this._parseOpts = {
                    parser: i.parser,
                    round: i.round,
                    isoWeekday: i.isoWeekday
                },
                super.init(t),
                this._normalized = e.normalized
            }
            parse(t, e) {
                return void 0 === t ? null : is(this, t)
            }
            beforeLayout() {
                super.beforeLayout(),
                this._cache = {
                    data: [],
                    labels: [],
                    all: []
                }
            }
            determineDataLimits() {
                const t = this.options
                  , e = this._adapter
                  , i = t.time.unit || "day";
                let {min: n, max: o, minDefined: a, maxDefined: r} = this.getUserBounds();
                function l(t) {
                    a || isNaN(t.min) || (n = Math.min(n, t.min)),
                    r || isNaN(t.max) || (o = Math.max(o, t.max))
                }
                a && r || (l(this._getLabelBounds()),
                "ticks" === t.bounds && "labels" === t.ticks.source || l(this.getMinMax(!1))),
                n = s.isNumberFinite(n) && !isNaN(n) ? n : +e.startOf(Date.now(), i),
                o = s.isNumberFinite(o) && !isNaN(o) ? o : +e.endOf(Date.now(), i) + 1,
                this.min = Math.min(n, o - 1),
                this.max = Math.max(n + 1, o)
            }
            _getLabelBounds() {
                const t = this.getLabelTimestamps();
                let e = Number.POSITIVE_INFINITY
                  , i = Number.NEGATIVE_INFINITY;
                return t.length && (e = t[0],
                i = t[t.length - 1]),
                {
                    min: e,
                    max: i
                }
            }
            buildTicks() {
                const t = this.options
                  , e = t.time
                  , i = t.ticks
                  , n = "labels" === i.source ? this.getLabelTimestamps() : this._generate();
                "ticks" === t.bounds && n.length && (this.min = this._userMin || n[0],
                this.max = this._userMax || n[n.length - 1]);
                const o = this.min
                  , a = this.max
                  , r = s._filterBetween(n, o, a);
                return this._unit = e.unit || (i.autoSkip ? ss(e.minUnit, this.min, this.max, this._getLabelCapacity(o)) : function(t, e, i, s, n) {
                    for (let o = ts.length - 1; o >= ts.indexOf(i); o--) {
                        const i = ts[o];
                        if (Qi[i].common && t._adapter.diff(n, s, i) >= e - 1)
                            return i
                    }
                    return ts[i ? ts.indexOf(i) : 0]
                }(this, r.length, e.minUnit, this.min, this.max)),
                this._majorUnit = i.major.enabled && "year" !== this._unit ? function(t) {
                    for (let e = ts.indexOf(t) + 1, i = ts.length; e < i; ++e)
                        if (Qi[ts[e]].common)
                            return ts[e]
                }(this._unit) : void 0,
                this.initOffsets(n),
                t.reverse && r.reverse(),
                os(this, r, this._majorUnit)
            }
            afterAutoSkip() {
                this.options.offsetAfterAutoskip && this.initOffsets(this.ticks.map((t => +t.value)))
            }
            initOffsets() {
                let t, e, i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [], n = 0, o = 0;
                this.options.offset && i.length && (t = this.getDecimalForValue(i[0]),
                n = 1 === i.length ? 1 - t : (this.getDecimalForValue(i[1]) - t) / 2,
                e = this.getDecimalForValue(i[i.length - 1]),
                o = 1 === i.length ? e : (e - this.getDecimalForValue(i[i.length - 2])) / 2);
                const a = i.length < 3 ? .5 : .25;
                n = s._limitValue(n, 0, a),
                o = s._limitValue(o, 0, a),
                this._offsets = {
                    start: n,
                    end: o,
                    factor: 1 / (n + 1 + o)
                }
            }
            _generate() {
                const t = this._adapter
                  , e = this.min
                  , i = this.max
                  , n = this.options
                  , o = n.time
                  , a = o.unit || ss(o.minUnit, e, i, this._getLabelCapacity(e))
                  , r = s.valueOrDefault(n.ticks.stepSize, 1)
                  , l = "week" === a && o.isoWeekday
                  , h = s.isNumber(l) || !0 === l
                  , c = {};
                let d, u, f = e;
                if (h && (f = +t.startOf(f, "isoWeek", l)),
                f = +t.startOf(f, h ? "day" : a),
                t.diff(i, e, a) > 1e5 * r)
                    throw new Error(e + " and " + i + " are too far apart with stepSize of " + r + " " + a);
                const g = "data" === n.ticks.source && this.getDataTimestamps();
                for (d = f,
                u = 0; d < i; d = +t.add(d, r, a),
                u++)
                    ns(c, d, g);
                return d !== i && "ticks" !== n.bounds && 1 !== u || ns(c, d, g),
                Object.keys(c).sort(( (t, e) => t - e)).map((t => +t))
            }
            getLabelForValue(t) {
                const e = this._adapter
                  , i = this.options.time;
                return i.tooltipFormat ? e.format(t, i.tooltipFormat) : e.format(t, i.displayFormats.datetime)
            }
            format(t, e) {
                const i = this.options.time.displayFormats
                  , s = this._unit
                  , n = e || i[s];
                return this._adapter.format(t, n)
            }
            _tickFormatFunction(t, e, i, n) {
                const o = this.options
                  , a = o.ticks.callback;
                if (a)
                    return s.callback(a, [t, e, i], this);
                const r = o.time.displayFormats
                  , l = this._unit
                  , h = this._majorUnit
                  , c = l && r[l]
                  , d = h && r[h]
                  , u = i[e]
                  , f = h && d && u && u.major;
                return this._adapter.format(t, n || (f ? d : c))
            }
            generateTickLabels(t) {
                let e, i, s;
                for (e = 0,
                i = t.length; e < i; ++e)
                    s = t[e],
                    s.label = this._tickFormatFunction(s.value, e, t)
            }
            getDecimalForValue(t) {
                return null === t ? NaN : (t - this.min) / (this.max - this.min)
            }
            getPixelForValue(t) {
                const e = this._offsets
                  , i = this.getDecimalForValue(t);
                return this.getPixelForDecimal((e.start + i) * e.factor)
            }
            getValueForPixel(t) {
                const e = this._offsets
                  , i = this.getDecimalForPixel(t) / e.factor - e.end;
                return this.min + i * (this.max - this.min)
            }
            _getLabelSize(t) {
                const e = this.options.ticks
                  , i = this.ctx.measureText(t).width
                  , n = s.toRadians(this.isHorizontal() ? e.maxRotation : e.minRotation)
                  , o = Math.cos(n)
                  , a = Math.sin(n)
                  , r = this._resolveTickFontOptions(0).size;
                return {
                    w: i * o + r * a,
                    h: i * a + r * o
                }
            }
            _getLabelCapacity(t) {
                const e = this.options.time
                  , i = e.displayFormats
                  , s = i[e.unit] || i.millisecond
                  , n = this._tickFormatFunction(t, 0, os(this, [t], this._majorUnit), s)
                  , o = this._getLabelSize(n)
                  , a = Math.floor(this.isHorizontal() ? this.width / o.w : this.height / o.h) - 1;
                return a > 0 ? a : 1
            }
            getDataTimestamps() {
                let t, e, i = this._cache.data || [];
                if (i.length)
                    return i;
                const s = this.getMatchingVisibleMetas();
                if (this._normalized && s.length)
                    return this._cache.data = s[0].controller.getAllParsedValues(this);
                for (t = 0,
                e = s.length; t < e; ++t)
                    i = i.concat(s[t].controller.getAllParsedValues(this));
                return this._cache.data = this.normalize(i)
            }
            getLabelTimestamps() {
                const t = this._cache.labels || [];
                let e, i;
                if (t.length)
                    return t;
                const s = this.getLabels();
                for (e = 0,
                i = s.length; e < i; ++e)
                    t.push(is(this, s[e]));
                return this._cache.labels = this._normalized ? t : this.normalize(t)
            }
            normalize(t) {
                return s._arrayUnique(t.sort(es))
            }
        }
        function rs(t, e, i) {
            let n, o, a, r, l = 0, h = t.length - 1;
            i ? (e >= t[l].pos && e <= t[h].pos && ({lo: l, hi: h} = s._lookupByKey(t, "pos", e)),
            ({pos: n, time: a} = t[l]),
            ({pos: o, time: r} = t[h])) : (e >= t[l].time && e <= t[h].time && ({lo: l, hi: h} = s._lookupByKey(t, "time", e)),
            ({time: n, pos: a} = t[l]),
            ({time: o, pos: r} = t[h]));
            const c = o - n;
            return c ? a + (r - a) * (e - n) / c : a
        }
        class ls extends as {
            static id = "timeseries";
            static defaults = as.defaults;
            constructor(t) {
                super(t),
                this._table = [],
                this._minPos = void 0,
                this._tableRange = void 0
            }
            initOffsets() {
                const t = this._getTimestampsForTable()
                  , e = this._table = this.buildLookupTable(t);
                this._minPos = rs(e, this.min),
                this._tableRange = rs(e, this.max) - this._minPos,
                super.initOffsets(t)
            }
            buildLookupTable(t) {
                const {min: e, max: i} = this
                  , s = []
                  , n = [];
                let o, a, r, l, h;
                for (o = 0,
                a = t.length; o < a; ++o)
                    l = t[o],
                    l >= e && l <= i && s.push(l);
                if (s.length < 2)
                    return [{
                        time: e,
                        pos: 0
                    }, {
                        time: i,
                        pos: 1
                    }];
                for (o = 0,
                a = s.length; o < a; ++o)
                    h = s[o + 1],
                    r = s[o - 1],
                    l = s[o],
                    Math.round((h + r) / 2) !== l && n.push({
                        time: l,
                        pos: o / (a - 1)
                    });
                return n
            }
            _getTimestampsForTable() {
                let t = this._cache.all || [];
                if (t.length)
                    return t;
                const e = this.getDataTimestamps()
                  , i = this.getLabelTimestamps();
                return t = e.length && i.length ? this.normalize(e.concat(i)) : e.length ? e : i,
                t = this._cache.all = t,
                t
            }
            getDecimalForValue(t) {
                return (rs(this._table, t) - this._minPos) / this._tableRange
            }
            getValueForPixel(t) {
                const e = this._offsets
                  , i = this.getDecimalForPixel(t) / e.factor - e.end;
                return rs(this._table, i * this._tableRange + this._minPos, !0)
            }
        }
        var hs = Object.freeze({
            __proto__: null,
            CategoryScale: Ei,
            LinearScale: zi,
            LogarithmicScale: Hi,
            RadialLinearScale: Zi,
            TimeScale: as,
            TimeSeriesScale: ls
        });
        const cs = [N, Ee, Ti, hs];
        i.Ticks = s.Ticks,
        i.defaults = s.defaults,
        i.Animation = l,
        i.Animations = h,
        i.ArcElement = pe,
        i.BarController = A,
        i.BarElement = Le,
        i.BasePlatform = lt,
        i.BasicPlatform = ht,
        i.BubbleController = T,
        i.CategoryScale = Ei,
        i.Chart = he,
        i.Colors = Ve,
        i.DatasetController = v,
        i.Decimation = Ue,
        i.DomPlatform = kt,
        i.DoughnutController = R,
        i.Element = St,
        i.Filler = ri,
        i.Interaction = K,
        i.Legend = di,
        i.LineController = L,
        i.LineElement = ke,
        i.LinearScale = zi,
        i.LogarithmicScale = Hi,
        i.PieController = I,
        i.PointElement = Se,
        i.PolarAreaController = E,
        i.RadarController = F,
        i.RadialLinearScale = Zi,
        i.Scale = Ft,
        i.ScatterController = z,
        i.SubTitle = pi,
        i.TimeScale = as,
        i.TimeSeriesScale = ls,
        i.Title = fi,
        i.Tooltip = Ai,
        i._adapters = V,
        i._detectPlatform = Pt,
        i.animator = o,
        i.controllers = N,
        i.elements = Ee,
        i.layouts = rt,
        i.plugins = Ti,
        i.registerables = cs,
        i.registry = Bt,
        i.scales = hs
    }
    , {
        "./chunks/helpers.segment.cjs": 4,
        "@kurkle/color": 1
    }],
    4: [function(t, e, i) {
        /*!
 * Chart.js v4.2.1
 * https://www.chartjs.org
 * (c) 2023 Chart.js Contributors
 * Released under the MIT License
 */
        "use strict";
        var s = t("@kurkle/color");
        const n = ( () => {
            let t = 0;
            return () => t++
        }
        )();
        function o(t) {
            return null == t
        }
        function a(t) {
            if (Array.isArray && Array.isArray(t))
                return !0;
            const e = Object.prototype.toString.call(t);
            return "[object" === e.slice(0, 7) && "Array]" === e.slice(-6)
        }
        function r(t) {
            return null !== t && "[object Object]" === Object.prototype.toString.call(t)
        }
        function l(t) {
            return ("number" == typeof t || t instanceof Number) && isFinite(+t)
        }
        function h(t, e) {
            return void 0 === t ? e : t
        }
        const c = (t, e) => "string" == typeof t && t.endsWith("%") ? parseFloat(t) / 100 * e : +t;
        function d(t) {
            if (a(t))
                return t.map(d);
            if (r(t)) {
                const e = Object.create(null)
                  , i = Object.keys(t)
                  , s = i.length;
                let n = 0;
                for (; n < s; ++n)
                    e[i[n]] = d(t[i[n]]);
                return e
            }
            return t
        }
        function u(t) {
            return -1 === ["__proto__", "prototype", "constructor"].indexOf(t)
        }
        function f(t, e, i, s) {
            if (!u(t))
                return;
            const n = e[t]
              , o = i[t];
            r(n) && r(o) ? g(n, o, s) : e[t] = d(o)
        }
        function g(t, e, i) {
            const s = a(e) ? e : [e]
              , n = s.length;
            if (!r(t))
                return t;
            const o = (i = i || {}).merger || f;
            let l;
            for (let e = 0; e < n; ++e) {
                if (l = s[e],
                !r(l))
                    continue;
                const n = Object.keys(l);
                for (let e = 0, s = n.length; e < s; ++e)
                    o(n[e], t, l, i)
            }
            return t
        }
        function p(t, e) {
            return g(t, e, {
                merger: m
            })
        }
        function m(t, e, i) {
            if (!u(t))
                return;
            const s = e[t]
              , n = i[t];
            r(s) && r(n) ? p(s, n) : Object.prototype.hasOwnProperty.call(e, t) || (e[t] = d(n))
        }
        const b = {
            "": t => t,
            x: t => t.x,
            y: t => t.y
        };
        function x(t) {
            const e = t.split(".")
              , i = [];
            let s = "";
            for (const t of e)
                s += t,
                s.endsWith("\\") ? s = s.slice(0, -1) + "." : (i.push(s),
                s = "");
            return i
        }
        function _(t, e) {
            const i = b[e] || (b[e] = function(t) {
                const e = x(t);
                return t => {
                    for (const i of e) {
                        if ("" === i)
                            break;
                        t = t && t[i]
                    }
                    return t
                }
            }(e));
            return i(t)
        }
        function y(t) {
            return t.charAt(0).toUpperCase() + t.slice(1)
        }
        const v = t => void 0 !== t
          , w = t => "function" == typeof t;
        const M = Math.PI
          , k = 2 * M
          , P = k + M
          , S = Number.POSITIVE_INFINITY
          , O = M / 180
          , D = M / 2
          , C = M / 4
          , A = 2 * M / 3
          , T = Math.log10
          , R = Math.sign;
        function L(t, e, i) {
            return Math.abs(t - e) < i
        }
        function E(t, e) {
            return Math.sqrt(Math.pow(e.x - t.x, 2) + Math.pow(e.y - t.y, 2))
        }
        function I(t, e) {
            return (t - e + P) % k - M
        }
        function F(t) {
            return (t % k + k) % k
        }
        function z(t, e, i, s) {
            const n = F(t)
              , o = F(e)
              , a = F(i)
              , r = F(o - n)
              , l = F(a - n)
              , h = F(n - o)
              , c = F(n - a);
            return n === o || n === a || s && o === a || r > l && h < c
        }
        function N(t, e, i) {
            return Math.max(e, Math.min(i, t))
        }
        function B(t, e, i) {
            let s = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1e-6;
            return t >= Math.min(e, i) - s && t <= Math.max(e, i) + s
        }
        function j(t, e, i) {
            i = i || (i => t[i] < e);
            let s, n = t.length - 1, o = 0;
            for (; n - o > 1; )
                s = o + n >> 1,
                i(s) ? o = s : n = s;
            return {
                lo: o,
                hi: n
            }
        }
        const V = (t, e, i, s) => j(t, i, s ? s => {
            const n = t[s][e];
            return n < i || n === i && t[s + 1][e] === i
        }
        : s => t[s][e] < i);
        const W = ["push", "pop", "shift", "splice", "unshift"];
        const H = "undefined" == typeof window ? function(t) {
            return t()
        }
        : window.requestAnimationFrame;
        const U = t => 0 === t || 1 === t
          , $ = (t, e, i) => -Math.pow(2, 10 * (t -= 1)) * Math.sin((t - e) * k / i)
          , Y = (t, e, i) => Math.pow(2, -10 * t) * Math.sin((t - e) * k / i) + 1
          , q = {
            linear: t => t,
            easeInQuad: t => t * t,
            easeOutQuad: t => -t * (t - 2),
            easeInOutQuad: t => (t /= .5) < 1 ? .5 * t * t : -.5 * (--t * (t - 2) - 1),
            easeInCubic: t => t * t * t,
            easeOutCubic: t => (t -= 1) * t * t + 1,
            easeInOutCubic: t => (t /= .5) < 1 ? .5 * t * t * t : .5 * ((t -= 2) * t * t + 2),
            easeInQuart: t => t * t * t * t,
            easeOutQuart: t => -((t -= 1) * t * t * t - 1),
            easeInOutQuart: t => (t /= .5) < 1 ? .5 * t * t * t * t : -.5 * ((t -= 2) * t * t * t - 2),
            easeInQuint: t => t * t * t * t * t,
            easeOutQuint: t => (t -= 1) * t * t * t * t + 1,
            easeInOutQuint: t => (t /= .5) < 1 ? .5 * t * t * t * t * t : .5 * ((t -= 2) * t * t * t * t + 2),
            easeInSine: t => 1 - Math.cos(t * D),
            easeOutSine: t => Math.sin(t * D),
            easeInOutSine: t => -.5 * (Math.cos(M * t) - 1),
            easeInExpo: t => 0 === t ? 0 : Math.pow(2, 10 * (t - 1)),
            easeOutExpo: t => 1 === t ? 1 : 1 - Math.pow(2, -10 * t),
            easeInOutExpo: t => U(t) ? t : t < .5 ? .5 * Math.pow(2, 10 * (2 * t - 1)) : .5 * (2 - Math.pow(2, -10 * (2 * t - 1))),
            easeInCirc: t => t >= 1 ? t : -(Math.sqrt(1 - t * t) - 1),
            easeOutCirc: t => Math.sqrt(1 - (t -= 1) * t),
            easeInOutCirc: t => (t /= .5) < 1 ? -.5 * (Math.sqrt(1 - t * t) - 1) : .5 * (Math.sqrt(1 - (t -= 2) * t) + 1),
            easeInElastic: t => U(t) ? t : $(t, .075, .3),
            easeOutElastic: t => U(t) ? t : Y(t, .075, .3),
            easeInOutElastic(t) {
                const e = .1125;
                return U(t) ? t : t < .5 ? .5 * $(2 * t, e, .45) : .5 + .5 * Y(2 * t - 1, e, .45)
            },
            easeInBack(t) {
                const e = 1.70158;
                return t * t * ((e + 1) * t - e)
            },
            easeOutBack(t) {
                const e = 1.70158;
                return (t -= 1) * t * ((e + 1) * t + e) + 1
            },
            easeInOutBack(t) {
                let e = 1.70158;
                return (t /= .5) < 1 ? t * t * ((1 + (e *= 1.525)) * t - e) * .5 : .5 * ((t -= 2) * t * ((1 + (e *= 1.525)) * t + e) + 2)
            },
            easeInBounce: t => 1 - q.easeOutBounce(1 - t),
            easeOutBounce(t) {
                const e = 7.5625
                  , i = 2.75;
                return t < 1 / i ? e * t * t : t < 2 / i ? e * (t -= 1.5 / i) * t + .75 : t < 2.5 / i ? e * (t -= 2.25 / i) * t + .9375 : e * (t -= 2.625 / i) * t + .984375
            },
            easeInOutBounce: t => t < .5 ? .5 * q.easeInBounce(2 * t) : .5 * q.easeOutBounce(2 * t - 1) + .5
        };
        function K(t) {
            if (t && "object" == typeof t) {
                const e = t.toString();
                return "[object CanvasPattern]" === e || "[object CanvasGradient]" === e
            }
            return !1
        }
        function X(t) {
            return K(t) ? t : new s.Color(t).saturate(.5).darken(.1).hexString()
        }
        const G = ["x", "y", "borderWidth", "radius", "tension"]
          , J = ["color", "borderColor", "backgroundColor"];
        const Z = new Map;
        function Q(t, e, i) {
            return function(t, e) {
                e = e || {};
                const i = t + JSON.stringify(e);
                let s = Z.get(i);
                return s || (s = new Intl.NumberFormat(t,e),
                Z.set(i, s)),
                s
            }(e, i).format(t)
        }
        const tt = {
            values: t => a(t) ? t : "" + t,
            numeric(t, e, i) {
                if (0 === t)
                    return "0";
                const s = this.chart.options.locale;
                let n, o = t;
                if (i.length > 1) {
                    const e = Math.max(Math.abs(i[0].value), Math.abs(i[i.length - 1].value));
                    (e < 1e-4 || e > 1e15) && (n = "scientific"),
                    o = function(t, e) {
                        let i = e.length > 3 ? e[2].value - e[1].value : e[1].value - e[0].value;
                        Math.abs(i) >= 1 && t !== Math.floor(t) && (i = t - Math.floor(t));
                        return i
                    }(t, i)
                }
                const a = T(Math.abs(o))
                  , r = Math.max(Math.min(-1 * Math.floor(a), 20), 0)
                  , l = {
                    notation: n,
                    minimumFractionDigits: r,
                    maximumFractionDigits: r
                };
                return Object.assign(l, this.options.ticks.format),
                Q(t, s, l)
            },
            logarithmic(t, e, i) {
                if (0 === t)
                    return "0";
                const s = i[e].significand || t / Math.pow(10, Math.floor(T(t)));
                return [1, 2, 3, 5, 10, 15].includes(s) || e > .8 * i.length ? tt.numeric.call(this, t, e, i) : ""
            }
        };
        var et = {
            formatters: tt
        };
        const it = Object.create(null)
          , st = Object.create(null);
        function nt(t, e) {
            if (!e)
                return t;
            const i = e.split(".");
            for (let e = 0, s = i.length; e < s; ++e) {
                const s = i[e];
                t = t[s] || (t[s] = Object.create(null))
            }
            return t
        }
        function ot(t, e, i) {
            return "string" == typeof e ? g(nt(t, e), i) : g(nt(t, ""), e)
        }
        class at {
            constructor(t, e) {
                this.animation = void 0,
                this.backgroundColor = "rgba(0,0,0,0.1)",
                this.borderColor = "rgba(0,0,0,0.1)",
                this.color = "#666",
                this.datasets = {},
                this.devicePixelRatio = t => t.chart.platform.getDevicePixelRatio(),
                this.elements = {},
                this.events = ["mousemove", "mouseout", "click", "touchstart", "touchmove"],
                this.font = {
                    family: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
                    size: 12,
                    style: "normal",
                    lineHeight: 1.2,
                    weight: null
                },
                this.hover = {},
                this.hoverBackgroundColor = (t, e) => X(e.backgroundColor),
                this.hoverBorderColor = (t, e) => X(e.borderColor),
                this.hoverColor = (t, e) => X(e.color),
                this.indexAxis = "x",
                this.interaction = {
                    mode: "nearest",
                    intersect: !0,
                    includeInvisible: !1
                },
                this.maintainAspectRatio = !0,
                this.onHover = null,
                this.onClick = null,
                this.parsing = !0,
                this.plugins = {},
                this.responsive = !0,
                this.scale = void 0,
                this.scales = {},
                this.showLine = !0,
                this.drawActiveElementsOnTop = !0,
                this.describe(t),
                this.apply(e)
            }
            set(t, e) {
                return ot(this, t, e)
            }
            get(t) {
                return nt(this, t)
            }
            describe(t, e) {
                return ot(st, t, e)
            }
            override(t, e) {
                return ot(it, t, e)
            }
            route(t, e, i, s) {
                const n = nt(this, t)
                  , o = nt(this, i)
                  , a = "_" + e;
                Object.defineProperties(n, {
                    [a]: {
                        value: n[e],
                        writable: !0
                    },
                    [e]: {
                        enumerable: !0,
                        get() {
                            const t = this[a]
                              , e = o[s];
                            return r(t) ? Object.assign({}, e, t) : h(t, e)
                        },
                        set(t) {
                            this[a] = t
                        }
                    }
                })
            }
            apply(t) {
                t.forEach((t => t(this)))
            }
        }
        var rt = new at({
            _scriptable: t => !t.startsWith("on"),
            _indexable: t => "events" !== t,
            hover: {
                _fallback: "interaction"
            },
            interaction: {
                _scriptable: !1,
                _indexable: !1
            }
        },[function(t) {
            t.set("animation", {
                delay: void 0,
                duration: 1e3,
                easing: "easeOutQuart",
                fn: void 0,
                from: void 0,
                loop: void 0,
                to: void 0,
                type: void 0
            }),
            t.describe("animation", {
                _fallback: !1,
                _indexable: !1,
                _scriptable: t => "onProgress" !== t && "onComplete" !== t && "fn" !== t
            }),
            t.set("animations", {
                colors: {
                    type: "color",
                    properties: J
                },
                numbers: {
                    type: "number",
                    properties: G
                }
            }),
            t.describe("animations", {
                _fallback: "animation"
            }),
            t.set("transitions", {
                active: {
                    animation: {
                        duration: 400
                    }
                },
                resize: {
                    animation: {
                        duration: 0
                    }
                },
                show: {
                    animations: {
                        colors: {
                            from: "transparent"
                        },
                        visible: {
                            type: "boolean",
                            duration: 0
                        }
                    }
                },
                hide: {
                    animations: {
                        colors: {
                            to: "transparent"
                        },
                        visible: {
                            type: "boolean",
                            easing: "linear",
                            fn: t => 0 | t
                        }
                    }
                }
            })
        }
        , function(t) {
            t.set("layout", {
                autoPadding: !0,
                padding: {
                    top: 0,
                    right: 0,
                    bottom: 0,
                    left: 0
                }
            })
        }
        , function(t) {
            t.set("scale", {
                display: !0,
                offset: !1,
                reverse: !1,
                beginAtZero: !1,
                bounds: "ticks",
                grace: 0,
                grid: {
                    display: !0,
                    lineWidth: 1,
                    drawOnChartArea: !0,
                    drawTicks: !0,
                    tickLength: 8,
                    tickWidth: (t, e) => e.lineWidth,
                    tickColor: (t, e) => e.color,
                    offset: !1
                },
                border: {
                    display: !0,
                    dash: [],
                    dashOffset: 0,
                    width: 1
                },
                title: {
                    display: !1,
                    text: "",
                    padding: {
                        top: 4,
                        bottom: 4
                    }
                },
                ticks: {
                    minRotation: 0,
                    maxRotation: 50,
                    mirror: !1,
                    textStrokeWidth: 0,
                    textStrokeColor: "",
                    padding: 3,
                    display: !0,
                    autoSkip: !0,
                    autoSkipPadding: 3,
                    labelOffset: 0,
                    callback: et.formatters.values,
                    minor: {},
                    major: {},
                    align: "center",
                    crossAlign: "near",
                    showLabelBackdrop: !1,
                    backdropColor: "rgba(255, 255, 255, 0.75)",
                    backdropPadding: 2
                }
            }),
            t.route("scale.ticks", "color", "", "color"),
            t.route("scale.grid", "color", "", "borderColor"),
            t.route("scale.border", "color", "", "borderColor"),
            t.route("scale.title", "color", "", "color"),
            t.describe("scale", {
                _fallback: !1,
                _scriptable: t => !t.startsWith("before") && !t.startsWith("after") && "callback" !== t && "parser" !== t,
                _indexable: t => "borderDash" !== t && "tickBorderDash" !== t && "dash" !== t
            }),
            t.describe("scales", {
                _fallback: "scale"
            }),
            t.describe("scale.ticks", {
                _scriptable: t => "backdropPadding" !== t && "callback" !== t,
                _indexable: t => "backdropPadding" !== t
            })
        }
        ]);
        function lt(t) {
            return !t || o(t.size) || o(t.family) ? null : (t.style ? t.style + " " : "") + (t.weight ? t.weight + " " : "") + t.size + "px " + t.family
        }
        function ht(t, e, i, s, n) {
            let o = e[n];
            return o || (o = e[n] = t.measureText(n).width,
            i.push(n)),
            o > s && (s = o),
            s
        }
        function ct(t, e, i, s, n) {
            let o, a, r, l, h, c, d, u;
            const f = e.pointStyle
              , g = e.rotation
              , p = e.radius;
            let m = (g || 0) * O;
            if (f && "object" == typeof f && (o = f.toString(),
            "[object HTMLImageElement]" === o || "[object HTMLCanvasElement]" === o))
                return t.save(),
                t.translate(i, s),
                t.rotate(m),
                t.drawImage(f, -f.width / 2, -f.height / 2, f.width, f.height),
                void t.restore();
            if (!(isNaN(p) || p <= 0)) {
                switch (t.beginPath(),
                f) {
                default:
                    n ? t.ellipse(i, s, n / 2, p, 0, 0, k) : t.arc(i, s, p, 0, k),
                    t.closePath();
                    break;
                case "triangle":
                    c = n ? n / 2 : p,
                    t.moveTo(i + Math.sin(m) * c, s - Math.cos(m) * p),
                    m += A,
                    t.lineTo(i + Math.sin(m) * c, s - Math.cos(m) * p),
                    m += A,
                    t.lineTo(i + Math.sin(m) * c, s - Math.cos(m) * p),
                    t.closePath();
                    break;
                case "rectRounded":
                    h = .516 * p,
                    l = p - h,
                    a = Math.cos(m + C) * l,
                    d = Math.cos(m + C) * (n ? n / 2 - h : l),
                    r = Math.sin(m + C) * l,
                    u = Math.sin(m + C) * (n ? n / 2 - h : l),
                    t.arc(i - d, s - r, h, m - M, m - D),
                    t.arc(i + u, s - a, h, m - D, m),
                    t.arc(i + d, s + r, h, m, m + D),
                    t.arc(i - u, s + a, h, m + D, m + M),
                    t.closePath();
                    break;
                case "rect":
                    if (!g) {
                        l = Math.SQRT1_2 * p,
                        c = n ? n / 2 : l,
                        t.rect(i - c, s - l, 2 * c, 2 * l);
                        break
                    }
                    m += C;
                case "rectRot":
                    d = Math.cos(m) * (n ? n / 2 : p),
                    a = Math.cos(m) * p,
                    r = Math.sin(m) * p,
                    u = Math.sin(m) * (n ? n / 2 : p),
                    t.moveTo(i - d, s - r),
                    t.lineTo(i + u, s - a),
                    t.lineTo(i + d, s + r),
                    t.lineTo(i - u, s + a),
                    t.closePath();
                    break;
                case "crossRot":
                    m += C;
                case "cross":
                    d = Math.cos(m) * (n ? n / 2 : p),
                    a = Math.cos(m) * p,
                    r = Math.sin(m) * p,
                    u = Math.sin(m) * (n ? n / 2 : p),
                    t.moveTo(i - d, s - r),
                    t.lineTo(i + d, s + r),
                    t.moveTo(i + u, s - a),
                    t.lineTo(i - u, s + a);
                    break;
                case "star":
                    d = Math.cos(m) * (n ? n / 2 : p),
                    a = Math.cos(m) * p,
                    r = Math.sin(m) * p,
                    u = Math.sin(m) * (n ? n / 2 : p),
                    t.moveTo(i - d, s - r),
                    t.lineTo(i + d, s + r),
                    t.moveTo(i + u, s - a),
                    t.lineTo(i - u, s + a),
                    m += C,
                    d = Math.cos(m) * (n ? n / 2 : p),
                    a = Math.cos(m) * p,
                    r = Math.sin(m) * p,
                    u = Math.sin(m) * (n ? n / 2 : p),
                    t.moveTo(i - d, s - r),
                    t.lineTo(i + d, s + r),
                    t.moveTo(i + u, s - a),
                    t.lineTo(i - u, s + a);
                    break;
                case "line":
                    a = n ? n / 2 : Math.cos(m) * p,
                    r = Math.sin(m) * p,
                    t.moveTo(i - a, s - r),
                    t.lineTo(i + a, s + r);
                    break;
                case "dash":
                    t.moveTo(i, s),
                    t.lineTo(i + Math.cos(m) * (n ? n / 2 : p), s + Math.sin(m) * p);
                    break;
                case !1:
                    t.closePath()
                }
                t.fill(),
                e.borderWidth > 0 && t.stroke()
            }
        }
        function dt(t, e, i) {
            return i = i || .5,
            !e || t && t.x > e.left - i && t.x < e.right + i && t.y > e.top - i && t.y < e.bottom + i
        }
        function ut(t, e, i, s, n) {
            if (n.strikethrough || n.underline) {
                const o = t.measureText(s)
                  , a = e - o.actualBoundingBoxLeft
                  , r = e + o.actualBoundingBoxRight
                  , l = i - o.actualBoundingBoxAscent
                  , h = i + o.actualBoundingBoxDescent
                  , c = n.strikethrough ? (l + h) / 2 : h;
                t.strokeStyle = t.fillStyle,
                t.beginPath(),
                t.lineWidth = n.decorationWidth || 2,
                t.moveTo(a, c),
                t.lineTo(r, c),
                t.stroke()
            }
        }
        function ft(t, e) {
            const i = t.fillStyle;
            t.fillStyle = e.color,
            t.fillRect(e.left, e.top, e.width, e.height),
            t.fillStyle = i
        }
        const gt = /^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/
          , pt = /^(normal|italic|initial|inherit|unset|(oblique( -?[0-9]?[0-9]deg)?))$/;
        function mt(t, e) {
            const i = ("" + t).match(gt);
            if (!i || "normal" === i[1])
                return 1.2 * e;
            switch (t = +i[2],
            i[3]) {
            case "px":
                return t;
            case "%":
                t /= 100
            }
            return e * t
        }
        const bt = t => +t || 0;
        function xt(t, e) {
            const i = {}
              , s = r(e)
              , n = s ? Object.keys(e) : e
              , o = r(t) ? s ? i => h(t[i], t[e[i]]) : e => t[e] : () => t;
            for (const t of n)
                i[t] = bt(o(t));
            return i
        }
        function _t(t) {
            return xt(t, {
                top: "y",
                right: "x",
                bottom: "y",
                left: "x"
            })
        }
        function yt(t, e) {
            return Object.assign(Object.create(t), e)
        }
        function vt(t) {
            let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [""]
              , i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : t
              , s = arguments.length > 3 ? arguments[3] : void 0
              , n = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : () => t[0];
            v(s) || (s = Rt("_fallback", t));
            const o = {
                [Symbol.toStringTag]: "Object",
                _cacheable: !0,
                _scopes: t,
                _rootScopes: i,
                _fallback: s,
                _getTarget: n,
                override: n => vt([n, ...t], e, i, s)
            };
            return new Proxy(o,{
                deleteProperty: (e, i) => (delete e[i],
                delete e._keys,
                delete t[0][i],
                !0),
                get: (i, s) => St(i, s, ( () => function(t, e, i, s) {
                    let n;
                    for (const o of e)
                        if (n = Rt(kt(o, t), i),
                        v(n))
                            return Pt(t, n) ? At(i, s, t, n) : n
                }(s, e, t, i))),
                getOwnPropertyDescriptor: (t, e) => Reflect.getOwnPropertyDescriptor(t._scopes[0], e),
                getPrototypeOf: () => Reflect.getPrototypeOf(t[0]),
                has: (t, e) => Lt(t).includes(e),
                ownKeys: t => Lt(t),
                set(t, e, i) {
                    const s = t._storage || (t._storage = n());
                    return t[e] = s[e] = i,
                    delete t._keys,
                    !0
                }
            })
        }
        function wt(t, e, i, s) {
            const n = {
                _cacheable: !1,
                _proxy: t,
                _context: e,
                _subProxy: i,
                _stack: new Set,
                _descriptors: Mt(t, s),
                setContext: e => wt(t, e, i, s),
                override: n => wt(t.override(n), e, i, s)
            };
            return new Proxy(n,{
                deleteProperty: (e, i) => (delete e[i],
                delete t[i],
                !0),
                get: (t, e, i) => St(t, e, ( () => function(t, e, i) {
                    const {_proxy: s, _context: n, _subProxy: o, _descriptors: l} = t;
                    let h = s[e];
                    w(h) && l.isScriptable(e) && (h = function(t, e, i, s) {
                        const {_proxy: n, _context: o, _subProxy: a, _stack: r} = i;
                        if (r.has(t))
                            throw new Error("Recursion detected: " + Array.from(r).join("->") + "->" + t);
                        r.add(t),
                        e = e(o, a || s),
                        r.delete(t),
                        Pt(t, e) && (e = At(n._scopes, n, t, e));
                        return e
                    }(e, h, t, i));
                    a(h) && h.length && (h = function(t, e, i, s) {
                        const {_proxy: n, _context: o, _subProxy: a, _descriptors: l} = i;
                        if (v(o.index) && s(t))
                            e = e[o.index % e.length];
                        else if (r(e[0])) {
                            const i = e
                              , s = n._scopes.filter((t => t !== i));
                            e = [];
                            for (const r of i) {
                                const i = At(s, n, t, r);
                                e.push(wt(i, o, a && a[t], l))
                            }
                        }
                        return e
                    }(e, h, t, l.isIndexable));
                    Pt(e, h) && (h = wt(h, n, o && o[e], l));
                    return h
                }(t, e, i))),
                getOwnPropertyDescriptor: (e, i) => e._descriptors.allKeys ? Reflect.has(t, i) ? {
                    enumerable: !0,
                    configurable: !0
                } : void 0 : Reflect.getOwnPropertyDescriptor(t, i),
                getPrototypeOf: () => Reflect.getPrototypeOf(t),
                has: (e, i) => Reflect.has(t, i),
                ownKeys: () => Reflect.ownKeys(t),
                set: (e, i, s) => (t[i] = s,
                delete e[i],
                !0)
            })
        }
        function Mt(t) {
            let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
                scriptable: !0,
                indexable: !0
            };
            const {_scriptable: i=e.scriptable, _indexable: s=e.indexable, _allKeys: n=e.allKeys} = t;
            return {
                allKeys: n,
                scriptable: i,
                indexable: s,
                isScriptable: w(i) ? i : () => i,
                isIndexable: w(s) ? s : () => s
            }
        }
        const kt = (t, e) => t ? t + y(e) : e
          , Pt = (t, e) => r(e) && "adapters" !== t && (null === Object.getPrototypeOf(e) || e.constructor === Object);
        function St(t, e, i) {
            if (Object.prototype.hasOwnProperty.call(t, e))
                return t[e];
            const s = i();
            return t[e] = s,
            s
        }
        function Ot(t, e, i) {
            return w(t) ? t(e, i) : t
        }
        const Dt = (t, e) => !0 === t ? e : "string" == typeof t ? _(e, t) : void 0;
        function Ct(t, e, i, s, n) {
            for (const o of e) {
                const e = Dt(i, o);
                if (e) {
                    t.add(e);
                    const o = Ot(e._fallback, i, n);
                    if (v(o) && o !== i && o !== s)
                        return o
                } else if (!1 === e && v(s) && i !== s)
                    return null
            }
            return !1
        }
        function At(t, e, i, s) {
            const n = e._rootScopes
              , o = Ot(e._fallback, i, s)
              , l = [...t, ...n]
              , h = new Set;
            h.add(s);
            let c = Tt(h, l, i, o || i, s);
            return null !== c && ((!v(o) || o === i || (c = Tt(h, l, o, c, s),
            null !== c)) && vt(Array.from(h), [""], n, o, ( () => function(t, e, i) {
                const s = t._getTarget();
                e in s || (s[e] = {});
                const n = s[e];
                if (a(n) && r(i))
                    return i;
                return n || {}
            }(e, i, s))))
        }
        function Tt(t, e, i, s, n) {
            for (; i; )
                i = Ct(t, e, i, s, n);
            return i
        }
        function Rt(t, e) {
            for (const i of e) {
                if (!i)
                    continue;
                const e = i[t];
                if (v(e))
                    return e
            }
        }
        function Lt(t) {
            let e = t._keys;
            return e || (e = t._keys = function(t) {
                const e = new Set;
                for (const i of t)
                    for (const t of Object.keys(i).filter((t => !t.startsWith("_"))))
                        e.add(t);
                return Array.from(e)
            }(t._scopes)),
            e
        }
        const Et = Number.EPSILON || 1e-14
          , It = (t, e) => e < t.length && !t[e].skip && t[e]
          , Ft = t => "x" === t ? "y" : "x";
        function zt(t, e, i, s) {
            const n = t.skip ? e : t
              , o = e
              , a = i.skip ? e : i
              , r = E(o, n)
              , l = E(a, o);
            let h = r / (r + l)
              , c = l / (r + l);
            h = isNaN(h) ? 0 : h,
            c = isNaN(c) ? 0 : c;
            const d = s * h
              , u = s * c;
            return {
                previous: {
                    x: o.x - d * (a.x - n.x),
                    y: o.y - d * (a.y - n.y)
                },
                next: {
                    x: o.x + u * (a.x - n.x),
                    y: o.y + u * (a.y - n.y)
                }
            }
        }
        function Nt(t) {
            let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "x";
            const i = Ft(e)
              , s = t.length
              , n = Array(s).fill(0)
              , o = Array(s);
            let a, r, l, h = It(t, 0);
            for (a = 0; a < s; ++a)
                if (r = l,
                l = h,
                h = It(t, a + 1),
                l) {
                    if (h) {
                        const t = h[e] - l[e];
                        n[a] = 0 !== t ? (h[i] - l[i]) / t : 0
                    }
                    o[a] = r ? h ? R(n[a - 1]) !== R(n[a]) ? 0 : (n[a - 1] + n[a]) / 2 : n[a - 1] : n[a]
                }
            !function(t, e, i) {
                const s = t.length;
                let n, o, a, r, l, h = It(t, 0);
                for (let c = 0; c < s - 1; ++c)
                    l = h,
                    h = It(t, c + 1),
                    l && h && (L(e[c], 0, Et) ? i[c] = i[c + 1] = 0 : (n = i[c] / e[c],
                    o = i[c + 1] / e[c],
                    r = Math.pow(n, 2) + Math.pow(o, 2),
                    r <= 9 || (a = 3 / Math.sqrt(r),
                    i[c] = n * a * e[c],
                    i[c + 1] = o * a * e[c])))
            }(t, n, o),
            function(t, e) {
                let i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "x";
                const s = Ft(i)
                  , n = t.length;
                let o, a, r, l = It(t, 0);
                for (let h = 0; h < n; ++h) {
                    if (a = r,
                    r = l,
                    l = It(t, h + 1),
                    !r)
                        continue;
                    const n = r[i]
                      , c = r[s];
                    a && (o = (n - a[i]) / 3,
                    r[`cp1${i}`] = n - o,
                    r[`cp1${s}`] = c - o * e[h]),
                    l && (o = (l[i] - n) / 3,
                    r[`cp2${i}`] = n + o,
                    r[`cp2${s}`] = c + o * e[h])
                }
            }(t, o, e)
        }
        function Bt(t, e, i) {
            return Math.max(Math.min(t, i), e)
        }
        function jt(t) {
            let e = t.parentNode;
            return e && "[object ShadowRoot]" === e.toString() && (e = e.host),
            e
        }
        function Vt(t, e, i) {
            let s;
            return "string" == typeof t ? (s = parseInt(t, 10),
            -1 !== t.indexOf("%") && (s = s / 100 * e.parentNode[i])) : s = t,
            s
        }
        const Wt = t => t.ownerDocument.defaultView.getComputedStyle(t, null);
        function Ht(t, e) {
            return Wt(t).getPropertyValue(e)
        }
        const Ut = ["top", "right", "bottom", "left"];
        function $t(t, e, i) {
            const s = {};
            i = i ? "-" + i : "";
            for (let n = 0; n < 4; n++) {
                const o = Ut[n];
                s[o] = parseFloat(t[e + "-" + o + i]) || 0
            }
            return s.width = s.left + s.right,
            s.height = s.top + s.bottom,
            s
        }
        const Yt = (t, e, i) => (t > 0 || e > 0) && (!i || !i.shadowRoot);
        const qt = t => Math.round(10 * t) / 10;
        const Kt = function() {
            let t = !1;
            try {
                const e = {
                    get passive() {
                        return t = !0,
                        !1
                    }
                };
                window.addEventListener("test", null, e),
                window.removeEventListener("test", null, e)
            } catch (t) {}
            return t
        }();
        function Xt(t, e, i, s) {
            return {
                x: t.x + i * (e.x - t.x),
                y: t.y + i * (e.y - t.y)
            }
        }
        function Gt(t) {
            return "angle" === t ? {
                between: z,
                compare: I,
                normalize: F
            } : {
                between: B,
                compare: (t, e) => t - e,
                normalize: t => t
            }
        }
        function Jt(t) {
            let {start: e, end: i, count: s, loop: n, style: o} = t;
            return {
                start: e % s,
                end: i % s,
                loop: n && (i - e + 1) % s == 0,
                style: o
            }
        }
        function Zt(t, e, i) {
            if (!i)
                return [t];
            const {property: s, start: n, end: o} = i
              , a = e.length
              , {compare: r, between: l, normalize: h} = Gt(s)
              , {start: c, end: d, loop: u, style: f} = function(t, e, i) {
                const {property: s, start: n, end: o} = i
                  , {between: a, normalize: r} = Gt(s)
                  , l = e.length;
                let h, c, {start: d, end: u, loop: f} = t;
                if (f) {
                    for (d += l,
                    u += l,
                    h = 0,
                    c = l; h < c && a(r(e[d % l][s]), n, o); ++h)
                        d--,
                        u--;
                    d %= l,
                    u %= l
                }
                return u < d && (u += l),
                {
                    start: d,
                    end: u,
                    loop: f,
                    style: t.style
                }
            }(t, e, i)
              , g = [];
            let p, m, b, x = !1, _ = null;
            const y = () => x || l(n, b, p) && 0 !== r(n, b)
              , v = () => !x || 0 === r(o, p) || l(o, b, p);
            for (let t = c, i = c; t <= d; ++t)
                m = e[t % a],
                m.skip || (p = h(m[s]),
                p !== b && (x = l(p, n, o),
                null === _ && y() && (_ = 0 === r(p, n) ? t : i),
                null !== _ && v() && (g.push(Jt({
                    start: _,
                    end: t,
                    loop: u,
                    count: a,
                    style: f
                })),
                _ = null),
                i = t,
                b = p));
            return null !== _ && g.push(Jt({
                start: _,
                end: d,
                loop: u,
                count: a,
                style: f
            })),
            g
        }
        function Qt(t, e, i, s) {
            return s && s.setContext && i ? function(t, e, i, s) {
                const n = t._chart.getContext()
                  , o = te(t.options)
                  , {_datasetIndex: a, options: {spanGaps: r}} = t
                  , l = i.length
                  , h = [];
                let c = o
                  , d = e[0].start
                  , u = d;
                function f(t, e, s, n) {
                    const o = r ? -1 : 1;
                    if (t !== e) {
                        for (t += l; i[t % l].skip; )
                            t -= o;
                        for (; i[e % l].skip; )
                            e += o;
                        t % l != e % l && (h.push({
                            start: t % l,
                            end: e % l,
                            loop: s,
                            style: n
                        }),
                        c = n,
                        d = e % l)
                    }
                }
                for (const t of e) {
                    d = r ? d : t.start;
                    let e, o = i[d % l];
                    for (u = d + 1; u <= t.end; u++) {
                        const r = i[u % l];
                        e = te(s.setContext(yt(n, {
                            type: "segment",
                            p0: o,
                            p1: r,
                            p0DataIndex: (u - 1) % l,
                            p1DataIndex: u % l,
                            datasetIndex: a
                        }))),
                        ee(e, c) && f(d, u - 1, t.loop, c),
                        o = r,
                        c = e
                    }
                    d < u - 1 && f(d, u - 1, t.loop, c)
                }
                return h
            }(t, e, i, s) : e
        }
        function te(t) {
            return {
                backgroundColor: t.backgroundColor,
                borderCapStyle: t.borderCapStyle,
                borderDash: t.borderDash,
                borderDashOffset: t.borderDashOffset,
                borderJoinStyle: t.borderJoinStyle,
                borderWidth: t.borderWidth,
                borderColor: t.borderColor
            }
        }
        function ee(t, e) {
            return e && JSON.stringify(t) !== JSON.stringify(e)
        }
        i.HALF_PI = D,
        i.INFINITY = S,
        i.PI = M,
        i.PITAU = P,
        i.QUARTER_PI = C,
        i.RAD_PER_DEG = O,
        i.TAU = k,
        i.TWO_THIRDS_PI = A,
        i.Ticks = et,
        i._addGrace = function(t, e, i) {
            const {min: s, max: n} = t
              , o = c(e, (n - s) / 2)
              , a = (t, e) => i && 0 === t ? 0 : t + e;
            return {
                min: a(s, -Math.abs(o)),
                max: a(n, o)
            }
        }
        ,
        i._alignPixel = function(t, e, i) {
            const s = t.currentDevicePixelRatio
              , n = 0 !== i ? Math.max(i / 2, .5) : 0;
            return Math.round((e - n) * s) / s + n
        }
        ,
        i._alignStartEnd = (t, e, i) => "start" === t ? e : "end" === t ? i : (e + i) / 2,
        i._angleBetween = z,
        i._angleDiff = I,
        i._arrayUnique = function(t) {
            const e = new Set;
            let i, s;
            for (i = 0,
            s = t.length; i < s; ++i)
                e.add(t[i]);
            return e.size === s ? t : Array.from(e)
        }
        ,
        i._attachContext = wt,
        i._bezierCurveTo = function(t, e, i, s) {
            if (!e)
                return t.lineTo(i.x, i.y);
            t.bezierCurveTo(s ? e.cp1x : e.cp2x, s ? e.cp1y : e.cp2y, s ? i.cp2x : i.cp1x, s ? i.cp2y : i.cp1y, i.x, i.y)
        }
        ,
        i._bezierInterpolation = function(t, e, i, s) {
            const n = {
                x: t.cp2x,
                y: t.cp2y
            }
              , o = {
                x: e.cp1x,
                y: e.cp1y
            }
              , a = Xt(t, n, i)
              , r = Xt(n, o, i)
              , l = Xt(o, e, i)
              , h = Xt(a, r, i)
              , c = Xt(r, l, i);
            return Xt(h, c, i)
        }
        ,
        i._boundSegment = Zt,
        i._boundSegments = function(t, e) {
            const i = []
              , s = t.segments;
            for (let n = 0; n < s.length; n++) {
                const o = Zt(s[n], t.points, e);
                o.length && i.push(...o)
            }
            return i
        }
        ,
        i._capitalize = y,
        i._computeSegments = function(t, e) {
            const i = t.points
              , s = t.options.spanGaps
              , n = i.length;
            if (!n)
                return [];
            const o = !!t._loop
              , {start: a, end: r} = function(t, e, i, s) {
                let n = 0
                  , o = e - 1;
                if (i && !s)
                    for (; n < e && !t[n].skip; )
                        n++;
                for (; n < e && t[n].skip; )
                    n++;
                for (n %= e,
                i && (o += n); o > n && t[o % e].skip; )
                    o--;
                return o %= e,
                {
                    start: n,
                    end: o
                }
            }(i, n, o, s);
            return Qt(t, !0 === s ? [{
                start: a,
                end: r,
                loop: o
            }] : function(t, e, i, s) {
                const n = t.length
                  , o = [];
                let a, r = e, l = t[e];
                for (a = e + 1; a <= i; ++a) {
                    const i = t[a % n];
                    i.skip || i.stop ? l.skip || (s = !1,
                    o.push({
                        start: e % n,
                        end: (a - 1) % n,
                        loop: s
                    }),
                    e = r = i.stop ? a : null) : (r = a,
                    l.skip && (e = a)),
                    l = i
                }
                return null !== r && o.push({
                    start: e % n,
                    end: r % n,
                    loop: s
                }),
                o
            }(i, a, r < a ? r + n : r, !!t._fullLoop && 0 === a && r === n - 1), i, e)
        }
        ,
        i._createResolver = vt,
        i._decimalPlaces = function(t) {
            if (!l(t))
                return;
            let e = 1
              , i = 0;
            for (; Math.round(t * e) / e !== t; )
                e *= 10,
                i++;
            return i
        }
        ,
        i._deprecated = function(t, e, i, s) {
            void 0 !== e && console.warn(t + ': "' + i + '" is deprecated. Please use "' + s + '" instead')
        }
        ,
        i._descriptors = Mt,
        i._elementsEqual = function(t, e) {
            let i, s, n, o;
            if (!t || !e || t.length !== e.length)
                return !1;
            for (i = 0,
            s = t.length; i < s; ++i)
                if (n = t[i],
                o = e[i],
                n.datasetIndex !== o.datasetIndex || n.index !== o.index)
                    return !1;
            return !0
        }
        ,
        i._factorize = function(t) {
            const e = []
              , i = Math.sqrt(t);
            let s;
            for (s = 1; s < i; s++)
                t % s == 0 && (e.push(s),
                e.push(t / s));
            return i === (0 | i) && e.push(i),
            e.sort(( (t, e) => t - e)).pop(),
            e
        }
        ,
        i._filterBetween = function(t, e, i) {
            let s = 0
              , n = t.length;
            for (; s < n && t[s] < e; )
                s++;
            for (; n > s && t[n - 1] > i; )
                n--;
            return s > 0 || n < t.length ? t.slice(s, n) : t
        }
        ,
        i._getParentNode = jt,
        i._getStartAndCountOfVisiblePoints = function(t, e, i) {
            const s = e.length;
            let n = 0
              , o = s;
            if (t._sorted) {
                const {iScale: a, _parsed: r} = t
                  , l = a.axis
                  , {min: h, max: c, minDefined: d, maxDefined: u} = a.getUserBounds();
                d && (n = N(Math.min(V(r, a.axis, h).lo, i ? s : V(e, l, a.getPixelForValue(h)).lo), 0, s - 1)),
                o = u ? N(Math.max(V(r, a.axis, c, !0).hi + 1, i ? 0 : V(e, l, a.getPixelForValue(c), !0).hi + 1), n, s) - n : s - n
            }
            return {
                start: n,
                count: o
            }
        }
        ,
        i._int16Range = function(t) {
            return N(t, -32768, 32767)
        }
        ,
        i._isBetween = B,
        i._isClickEvent = function(t) {
            return "mouseup" === t.type || "click" === t.type || "contextmenu" === t.type
        }
        ,
        i._isDomSupported = function() {
            return "undefined" != typeof window && "undefined" != typeof document
        }
        ,
        i._isPointInArea = dt,
        i._limitValue = N,
        i._longestText = function(t, e, i, s) {
            let n = (s = s || {}).data = s.data || {}
              , o = s.garbageCollect = s.garbageCollect || [];
            s.font !== e && (n = s.data = {},
            o = s.garbageCollect = [],
            s.font = e),
            t.save(),
            t.font = e;
            let r = 0;
            const l = i.length;
            let h, c, d, u, f;
            for (h = 0; h < l; h++)
                if (u = i[h],
                null != u && !0 !== a(u))
                    r = ht(t, n, o, r, u);
                else if (a(u))
                    for (c = 0,
                    d = u.length; c < d; c++)
                        f = u[c],
                        null == f || a(f) || (r = ht(t, n, o, r, f));
            t.restore();
            const g = o.length / 2;
            if (g > i.length) {
                for (h = 0; h < g; h++)
                    delete n[o[h]];
                o.splice(0, g)
            }
            return r
        }
        ,
        i._lookup = j,
        i._lookupByKey = V,
        i._measureText = ht,
        i._merger = f,
        i._mergerIf = m,
        i._normalizeAngle = F,
        i._parseObjectDataRadialScale = function(t, e, i, s) {
            const {iScale: n} = t
              , {key: o="r"} = this._parsing
              , a = new Array(s);
            let r, l, h, c;
            for (r = 0,
            l = s; r < l; ++r)
                h = r + i,
                c = e[h],
                a[r] = {
                    r: n.parse(_(c, o), h)
                };
            return a
        }
        ,
        i._pointInLine = Xt,
        i._readValueToProps = xt,
        i._rlookupByKey = (t, e, i) => j(t, i, (s => t[s][e] >= i)),
        i._scaleRangesChanged = function(t) {
            const {xScale: e, yScale: i, _scaleRanges: s} = t
              , n = {
                xmin: e.min,
                xmax: e.max,
                ymin: i.min,
                ymax: i.max
            };
            if (!s)
                return t._scaleRanges = n,
                !0;
            const o = s.xmin !== e.min || s.xmax !== e.max || s.ymin !== i.min || s.ymax !== i.max;
            return Object.assign(s, n),
            o
        }
        ,
        i._setMinAndMaxByKey = function(t, e, i) {
            let s, n, o;
            for (s = 0,
            n = t.length; s < n; s++)
                o = t[s][i],
                isNaN(o) || (e.min = Math.min(e.min, o),
                e.max = Math.max(e.max, o))
        }
        ,
        i._splitKey = x,
        i._steppedInterpolation = function(t, e, i, s) {
            return {
                x: t.x + i * (e.x - t.x),
                y: "middle" === s ? i < .5 ? t.y : e.y : "after" === s ? i < 1 ? t.y : e.y : i > 0 ? e.y : t.y
            }
        }
        ,
        i._steppedLineTo = function(t, e, i, s, n) {
            if (!e)
                return t.lineTo(i.x, i.y);
            if ("middle" === n) {
                const s = (e.x + i.x) / 2;
                t.lineTo(s, e.y),
                t.lineTo(s, i.y)
            } else
                "after" === n != !!s ? t.lineTo(e.x, i.y) : t.lineTo(i.x, e.y);
            t.lineTo(i.x, i.y)
        }
        ,
        i._textX = (t, e, i, s) => t === (s ? "left" : "right") ? i : "center" === t ? (e + i) / 2 : e,
        i._toLeftRightCenter = t => "start" === t ? "left" : "end" === t ? "right" : "center",
        i._updateBezierControlPoints = function(t, e, i, s, n) {
            let o, a, r, l;
            if (e.spanGaps && (t = t.filter((t => !t.skip))),
            "monotone" === e.cubicInterpolationMode)
                Nt(t, n);
            else {
                let i = s ? t[t.length - 1] : t[0];
                for (o = 0,
                a = t.length; o < a; ++o)
                    r = t[o],
                    l = zt(i, r, t[Math.min(o + 1, a - (s ? 0 : 1)) % a], e.tension),
                    r.cp1x = l.previous.x,
                    r.cp1y = l.previous.y,
                    r.cp2x = l.next.x,
                    r.cp2y = l.next.y,
                    i = r
            }
            e.capBezierPoints && function(t, e) {
                let i, s, n, o, a, r = dt(t[0], e);
                for (i = 0,
                s = t.length; i < s; ++i)
                    a = o,
                    o = r,
                    r = i < s - 1 && dt(t[i + 1], e),
                    o && (n = t[i],
                    a && (n.cp1x = Bt(n.cp1x, e.left, e.right),
                    n.cp1y = Bt(n.cp1y, e.top, e.bottom)),
                    r && (n.cp2x = Bt(n.cp2x, e.left, e.right),
                    n.cp2y = Bt(n.cp2y, e.top, e.bottom)))
            }(t, i)
        }
        ,
        i.addRoundedRectPath = function(t, e) {
            const {x: i, y: s, w: n, h: o, radius: a} = e;
            t.arc(i + a.topLeft, s + a.topLeft, a.topLeft, -D, M, !0),
            t.lineTo(i, s + o - a.bottomLeft),
            t.arc(i + a.bottomLeft, s + o - a.bottomLeft, a.bottomLeft, M, D, !0),
            t.lineTo(i + n - a.bottomRight, s + o),
            t.arc(i + n - a.bottomRight, s + o - a.bottomRight, a.bottomRight, D, 0, !0),
            t.lineTo(i + n, s + a.topRight),
            t.arc(i + n - a.topRight, s + a.topRight, a.topRight, 0, -D, !0),
            t.lineTo(i + a.topLeft, s)
        }
        ,
        i.almostEquals = L,
        i.almostWhole = function(t, e) {
            const i = Math.round(t);
            return i - e <= t && i + e >= t
        }
        ,
        i.callback = function(t, e, i) {
            if (t && "function" == typeof t.call)
                return t.apply(i, e)
        }
        ,
        i.clearCanvas = function(t, e) {
            (e = e || t.getContext("2d")).save(),
            e.resetTransform(),
            e.clearRect(0, 0, t.width, t.height),
            e.restore()
        }
        ,
        i.clipArea = function(t, e) {
            t.save(),
            t.beginPath(),
            t.rect(e.left, e.top, e.right - e.left, e.bottom - e.top),
            t.clip()
        }
        ,
        i.clone = d,
        i.color = function(t) {
            return K(t) ? t : new s.Color(t)
        }
        ,
        i.createContext = yt,
        i.debounce = function(t, e) {
            let i;
            return function() {
                for (var s = arguments.length, n = new Array(s), o = 0; o < s; o++)
                    n[o] = arguments[o];
                return e ? (clearTimeout(i),
                i = setTimeout(t, e, n)) : t.apply(this, n),
                e
            }
        }
        ,
        i.defaults = rt,
        i.defined = v,
        i.descriptors = st,
        i.distanceBetweenPoints = E,
        i.drawPoint = function(t, e, i, s) {
            ct(t, e, i, s, null)
        }
        ,
        i.drawPointLegend = ct,
        i.each = function(t, e, i, s) {
            let n, o, l;
            if (a(t))
                if (o = t.length,
                s)
                    for (n = o - 1; n >= 0; n--)
                        e.call(i, t[n], n);
                else
                    for (n = 0; n < o; n++)
                        e.call(i, t[n], n);
            else if (r(t))
                for (l = Object.keys(t),
                o = l.length,
                n = 0; n < o; n++)
                    e.call(i, t[l[n]], l[n])
        }
        ,
        i.effects = q,
        i.finiteOrDefault = function(t, e) {
            return l(t) ? t : e
        }
        ,
        i.fontString = function(t, e, i) {
            return e + " " + t + "px " + i
        }
        ,
        i.formatNumber = Q,
        i.getAngleFromPoint = function(t, e) {
            const i = e.x - t.x
              , s = e.y - t.y
              , n = Math.sqrt(i * i + s * s);
            let o = Math.atan2(s, i);
            return o < -.5 * M && (o += k),
            {
                angle: o,
                distance: n
            }
        }
        ,
        i.getHoverColor = X,
        i.getMaximumSize = function(t, e, i, s) {
            const n = Wt(t)
              , o = $t(n, "margin")
              , a = Vt(n.maxWidth, t, "clientWidth") || S
              , r = Vt(n.maxHeight, t, "clientHeight") || S
              , l = function(t, e, i) {
                let s, n;
                if (void 0 === e || void 0 === i) {
                    const o = jt(t);
                    if (o) {
                        const t = o.getBoundingClientRect()
                          , a = Wt(o)
                          , r = $t(a, "border", "width")
                          , l = $t(a, "padding");
                        e = t.width - l.width - r.width,
                        i = t.height - l.height - r.height,
                        s = Vt(a.maxWidth, o, "clientWidth"),
                        n = Vt(a.maxHeight, o, "clientHeight")
                    } else
                        e = t.clientWidth,
                        i = t.clientHeight
                }
                return {
                    width: e,
                    height: i,
                    maxWidth: s || S,
                    maxHeight: n || S
                }
            }(t, e, i);
            let {width: h, height: c} = l;
            if ("content-box" === n.boxSizing) {
                const t = $t(n, "border", "width")
                  , e = $t(n, "padding");
                h -= e.width + t.width,
                c -= e.height + t.height
            }
            return h = Math.max(0, h - o.width),
            c = Math.max(0, s ? h / s : c - o.height),
            h = qt(Math.min(h, a, l.maxWidth)),
            c = qt(Math.min(c, r, l.maxHeight)),
            h && !c && (c = qt(h / 2)),
            (void 0 !== e || void 0 !== i) && s && l.height && c > l.height && (c = l.height,
            h = qt(Math.floor(c * s))),
            {
                width: h,
                height: c
            }
        }
        ,
        i.getRelativePosition = function(t, e) {
            if ("native"in t)
                return t;
            const {canvas: i, currentDevicePixelRatio: s} = e
              , n = Wt(i)
              , o = "border-box" === n.boxSizing
              , a = $t(n, "padding")
              , r = $t(n, "border", "width")
              , {x: l, y: h, box: c} = function(t, e) {
                const i = t.touches
                  , s = i && i.length ? i[0] : t
                  , {offsetX: n, offsetY: o} = s;
                let a, r, l = !1;
                if (Yt(n, o, t.target))
                    a = n,
                    r = o;
                else {
                    const t = e.getBoundingClientRect();
                    a = s.clientX - t.left,
                    r = s.clientY - t.top,
                    l = !0
                }
                return {
                    x: a,
                    y: r,
                    box: l
                }
            }(t, i)
              , d = a.left + (c && r.left)
              , u = a.top + (c && r.top);
            let {width: f, height: g} = e;
            return o && (f -= a.width + r.width,
            g -= a.height + r.height),
            {
                x: Math.round((l - d) / f * i.width / s),
                y: Math.round((h - u) / g * i.height / s)
            }
        }
        ,
        i.getRtlAdapter = function(t, e, i) {
            return t ? function(t, e) {
                return {
                    x: i => t + t + e - i,
                    setWidth(t) {
                        e = t
                    },
                    textAlign: t => "center" === t ? t : "right" === t ? "left" : "right",
                    xPlus: (t, e) => t - e,
                    leftForLtr: (t, e) => t - e
                }
            }(e, i) : {
                x: t => t,
                setWidth(t) {},
                textAlign: t => t,
                xPlus: (t, e) => t + e,
                leftForLtr: (t, e) => t
            }
        }
        ,
        i.getStyle = Ht,
        i.isArray = a,
        i.isFunction = w,
        i.isNullOrUndef = o,
        i.isNumber = function(t) {
            return !isNaN(parseFloat(t)) && isFinite(t)
        }
        ,
        i.isNumberFinite = l,
        i.isObject = r,
        i.isPatternOrGradient = K,
        i.listenArrayEvents = function(t, e) {
            t._chartjs ? t._chartjs.listeners.push(e) : (Object.defineProperty(t, "_chartjs", {
                configurable: !0,
                enumerable: !1,
                value: {
                    listeners: [e]
                }
            }),
            W.forEach((e => {
                const i = "_onData" + y(e)
                  , s = t[e];
                Object.defineProperty(t, e, {
                    configurable: !0,
                    enumerable: !1,
                    value() {
                        for (var e = arguments.length, n = new Array(e), o = 0; o < e; o++)
                            n[o] = arguments[o];
                        const a = s.apply(this, n);
                        return t._chartjs.listeners.forEach((t => {
                            "function" == typeof t[i] && t[i](...n)
                        }
                        )),
                        a
                    }
                })
            }
            )))
        }
        ,
        i.log10 = T,
        i.merge = g,
        i.mergeIf = p,
        i.niceNum = function(t) {
            const e = Math.round(t);
            t = L(t, e, t / 1e3) ? e : t;
            const i = Math.pow(10, Math.floor(T(t)))
              , s = t / i;
            return (s <= 1 ? 1 : s <= 2 ? 2 : s <= 5 ? 5 : 10) * i
        }
        ,
        i.noop = function() {}
        ,
        i.overrideTextDirection = function(t, e) {
            let i, s;
            "ltr" !== e && "rtl" !== e || (i = t.canvas.style,
            s = [i.getPropertyValue("direction"), i.getPropertyPriority("direction")],
            i.setProperty("direction", e, "important"),
            t.prevTextDirection = s)
        }
        ,
        i.overrides = it,
        i.readUsedSize = function(t, e) {
            const i = Ht(t, e)
              , s = i && i.match(/^(\d+)(\.\d+)?px$/);
            return s ? +s[1] : void 0
        }
        ,
        i.renderText = function(t, e, i, s, n) {
            let r = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : {};
            const l = a(e) ? e : [e]
              , h = r.strokeWidth > 0 && "" !== r.strokeColor;
            let c, d;
            for (t.save(),
            t.font = n.string,
            function(t, e) {
                e.translation && t.translate(e.translation[0], e.translation[1]);
                o(e.rotation) || t.rotate(e.rotation);
                e.color && (t.fillStyle = e.color);
                e.textAlign && (t.textAlign = e.textAlign);
                e.textBaseline && (t.textBaseline = e.textBaseline)
            }(t, r),
            c = 0; c < l.length; ++c)
                d = l[c],
                r.backdrop && ft(t, r.backdrop),
                h && (r.strokeColor && (t.strokeStyle = r.strokeColor),
                o(r.strokeWidth) || (t.lineWidth = r.strokeWidth),
                t.strokeText(d, i, s, r.maxWidth)),
                t.fillText(d, i, s, r.maxWidth),
                ut(t, i, s, d, r),
                s += n.lineHeight;
            t.restore()
        }
        ,
        i.requestAnimFrame = H,
        i.resolve = function(t, e, i, s) {
            let n, o, r, l = !0;
            for (n = 0,
            o = t.length; n < o; ++n)
                if (r = t[n],
                void 0 !== r && (void 0 !== e && "function" == typeof r && (r = r(e),
                l = !1),
                void 0 !== i && a(r) && (r = r[i % r.length],
                l = !1),
                void 0 !== r))
                    return s && !l && (s.cacheable = !1),
                    r
        }
        ,
        i.resolveObjectKey = _,
        i.restoreTextDirection = function(t, e) {
            void 0 !== e && (delete t.prevTextDirection,
            t.canvas.style.setProperty("direction", e[0], e[1]))
        }
        ,
        i.retinaScale = function(t, e, i) {
            const s = e || 1
              , n = Math.floor(t.height * s)
              , o = Math.floor(t.width * s);
            t.height = Math.floor(t.height),
            t.width = Math.floor(t.width);
            const a = t.canvas;
            return a.style && (i || !a.style.height && !a.style.width) && (a.style.height = `${t.height}px`,
            a.style.width = `${t.width}px`),
            (t.currentDevicePixelRatio !== s || a.height !== n || a.width !== o) && (t.currentDevicePixelRatio = s,
            a.height = n,
            a.width = o,
            t.ctx.setTransform(s, 0, 0, s, 0, 0),
            !0)
        }
        ,
        i.setsEqual = (t, e) => {
            if (t.size !== e.size)
                return !1;
            for (const i of t)
                if (!e.has(i))
                    return !1;
            return !0
        }
        ,
        i.sign = R,
        i.splineCurve = zt,
        i.splineCurveMonotone = Nt,
        i.supportsEventListenerOptions = Kt,
        i.throttled = function(t, e) {
            let i = []
              , s = !1;
            return function() {
                for (var n = arguments.length, o = new Array(n), a = 0; a < n; a++)
                    o[a] = arguments[a];
                i = o,
                s || (s = !0,
                H.call(window, ( () => {
                    s = !1,
                    t.apply(e, i)
                }
                )))
            }
        }
        ,
        i.toDegrees = function(t) {
            return t * (180 / M)
        }
        ,
        i.toDimension = c,
        i.toFont = function(t, e) {
            t = t || {},
            e = e || rt.font;
            let i = h(t.size, e.size);
            "string" == typeof i && (i = parseInt(i, 10));
            let s = h(t.style, e.style);
            s && !("" + s).match(pt) && (console.warn('Invalid font style specified: "' + s + '"'),
            s = void 0);
            const n = {
                family: h(t.family, e.family),
                lineHeight: mt(h(t.lineHeight, e.lineHeight), i),
                size: i,
                style: s,
                weight: h(t.weight, e.weight),
                string: ""
            };
            return n.string = lt(n),
            n
        }
        ,
        i.toFontString = lt,
        i.toLineHeight = mt,
        i.toPadding = function(t) {
            const e = _t(t);
            return e.width = e.left + e.right,
            e.height = e.top + e.bottom,
            e
        }
        ,
        i.toPercentage = (t, e) => "string" == typeof t && t.endsWith("%") ? parseFloat(t) / 100 : +t / e,
        i.toRadians = function(t) {
            return t * (M / 180)
        }
        ,
        i.toTRBL = _t,
        i.toTRBLCorners = function(t) {
            return xt(t, ["topLeft", "topRight", "bottomLeft", "bottomRight"])
        }
        ,
        i.uid = n,
        i.unclipArea = function(t) {
            t.restore()
        }
        ,
        i.unlistenArrayEvents = function(t, e) {
            const i = t._chartjs;
            if (!i)
                return;
            const s = i.listeners
              , n = s.indexOf(e);
            -1 !== n && s.splice(n, 1),
            s.length > 0 || (W.forEach((e => {
                delete t[e]
            }
            )),
            delete t._chartjs)
        }
        ,
        i.valueOrDefault = h
    }
    , {
        "@kurkle/color": 1
    }],
    5: [function(t, e, i) {
        /*!
 * Chart.js v4.2.1
 * https://www.chartjs.org
 * (c) 2023 Chart.js Contributors
 * Released under the MIT License
 */
        "use strict";
        var s = t("./chunks/helpers.segment.cjs");
        t("@kurkle/color"),
        i.HALF_PI = s.HALF_PI,
        i.INFINITY = s.INFINITY,
        i.PI = s.PI,
        i.PITAU = s.PITAU,
        i.QUARTER_PI = s.QUARTER_PI,
        i.RAD_PER_DEG = s.RAD_PER_DEG,
        i.TAU = s.TAU,
        i.TWO_THIRDS_PI = s.TWO_THIRDS_PI,
        i._addGrace = s._addGrace,
        i._alignPixel = s._alignPixel,
        i._alignStartEnd = s._alignStartEnd,
        i._angleBetween = s._angleBetween,
        i._angleDiff = s._angleDiff,
        i._arrayUnique = s._arrayUnique,
        i._attachContext = s._attachContext,
        i._bezierCurveTo = s._bezierCurveTo,
        i._bezierInterpolation = s._bezierInterpolation,
        i._boundSegment = s._boundSegment,
        i._boundSegments = s._boundSegments,
        i._capitalize = s._capitalize,
        i._computeSegments = s._computeSegments,
        i._createResolver = s._createResolver,
        i._decimalPlaces = s._decimalPlaces,
        i._deprecated = s._deprecated,
        i._descriptors = s._descriptors,
        i._elementsEqual = s._elementsEqual,
        i._factorize = s._factorize,
        i._filterBetween = s._filterBetween,
        i._getParentNode = s._getParentNode,
        i._getStartAndCountOfVisiblePoints = s._getStartAndCountOfVisiblePoints,
        i._int16Range = s._int16Range,
        i._isBetween = s._isBetween,
        i._isClickEvent = s._isClickEvent,
        i._isDomSupported = s._isDomSupported,
        i._isPointInArea = s._isPointInArea,
        i._limitValue = s._limitValue,
        i._longestText = s._longestText,
        i._lookup = s._lookup,
        i._lookupByKey = s._lookupByKey,
        i._measureText = s._measureText,
        i._merger = s._merger,
        i._mergerIf = s._mergerIf,
        i._normalizeAngle = s._normalizeAngle,
        i._parseObjectDataRadialScale = s._parseObjectDataRadialScale,
        i._pointInLine = s._pointInLine,
        i._readValueToProps = s._readValueToProps,
        i._rlookupByKey = s._rlookupByKey,
        i._scaleRangesChanged = s._scaleRangesChanged,
        i._setMinAndMaxByKey = s._setMinAndMaxByKey,
        i._splitKey = s._splitKey,
        i._steppedInterpolation = s._steppedInterpolation,
        i._steppedLineTo = s._steppedLineTo,
        i._textX = s._textX,
        i._toLeftRightCenter = s._toLeftRightCenter,
        i._updateBezierControlPoints = s._updateBezierControlPoints,
        i.addRoundedRectPath = s.addRoundedRectPath,
        i.almostEquals = s.almostEquals,
        i.almostWhole = s.almostWhole,
        i.callback = s.callback,
        i.clearCanvas = s.clearCanvas,
        i.clipArea = s.clipArea,
        i.clone = s.clone,
        i.color = s.color,
        i.createContext = s.createContext,
        i.debounce = s.debounce,
        i.defined = s.defined,
        i.distanceBetweenPoints = s.distanceBetweenPoints,
        i.drawPoint = s.drawPoint,
        i.drawPointLegend = s.drawPointLegend,
        i.each = s.each,
        i.easingEffects = s.effects,
        i.finiteOrDefault = s.finiteOrDefault,
        i.fontString = s.fontString,
        i.formatNumber = s.formatNumber,
        i.getAngleFromPoint = s.getAngleFromPoint,
        i.getHoverColor = s.getHoverColor,
        i.getMaximumSize = s.getMaximumSize,
        i.getRelativePosition = s.getRelativePosition,
        i.getRtlAdapter = s.getRtlAdapter,
        i.getStyle = s.getStyle,
        i.isArray = s.isArray,
        i.isFinite = s.isNumberFinite,
        i.isFunction = s.isFunction,
        i.isNullOrUndef = s.isNullOrUndef,
        i.isNumber = s.isNumber,
        i.isObject = s.isObject,
        i.isPatternOrGradient = s.isPatternOrGradient,
        i.listenArrayEvents = s.listenArrayEvents,
        i.log10 = s.log10,
        i.merge = s.merge,
        i.mergeIf = s.mergeIf,
        i.niceNum = s.niceNum,
        i.noop = s.noop,
        i.overrideTextDirection = s.overrideTextDirection,
        i.readUsedSize = s.readUsedSize,
        i.renderText = s.renderText,
        i.requestAnimFrame = s.requestAnimFrame,
        i.resolve = s.resolve,
        i.resolveObjectKey = s.resolveObjectKey,
        i.restoreTextDirection = s.restoreTextDirection,
        i.retinaScale = s.retinaScale,
        i.setsEqual = s.setsEqual,
        i.sign = s.sign,
        i.splineCurve = s.splineCurve,
        i.splineCurveMonotone = s.splineCurveMonotone,
        i.supportsEventListenerOptions = s.supportsEventListenerOptions,
        i.throttled = s.throttled,
        i.toDegrees = s.toDegrees,
        i.toDimension = s.toDimension,
        i.toFont = s.toFont,
        i.toFontString = s.toFontString,
        i.toLineHeight = s.toLineHeight,
        i.toPadding = s.toPadding,
        i.toPercentage = s.toPercentage,
        i.toRadians = s.toRadians,
        i.toTRBL = s.toTRBL,
        i.toTRBLCorners = s.toTRBLCorners,
        i.uid = s.uid,
        i.unclipArea = s.unclipArea,
        i.unlistenArrayEvents = s.unlistenArrayEvents,
        i.valueOrDefault = s.valueOrDefault
    }
    , {
        "./chunks/helpers.segment.cjs": 4,
        "@kurkle/color": 1
    }],
    6: [function(t, e, i) {
        "use strict";
        e.exports = t("../dist/helpers.cjs")
    }
    , {
        "../dist/helpers.cjs": 5
    }],
    7: [function(t, e, i) {
        "use strict";
        Object.defineProperty(i, "__esModule", {
            value: !0
        }),
        i.default = function(t) {
            var e, i = new n.default(t,{
                type: "bubble",
                data: {
                    datasets: d
                },
                options: {
                    plugins: {
                        legend: !1
                    },
                    elements: {
                        point: {
                            borderColor: "rgba(0,0,0,0)",
                            hoverRadius: 0
                        }
                    },
                    animation: {
                        onComplete: () => {
                            e && clearTimeout(e),
                            e = setTimeout(( () => {
                                !function() {
                                    const t = h(c);
                                    d.forEach(( (e, i) => {
                                        e.data = l(),
                                        e.backgroundColor = t[i]
                                    }
                                    ))
                                }(),
                                i.update()
                            }
                            ), 1e3)
                        }
                    },
                    scales: {
                        x: {
                            display: !1,
                            min: -100,
                            max: 100
                        },
                        y: {
                            display: !1,
                            min: -100,
                            max: 100
                        }
                    }
                }
            })
        }
        ;
        var s, n = (s = t("chart.js/auto")) && s.__esModule ? s : {
            default: s
        }, o = t("../colours.js");
        const a = function() {
            return (Math.random() > .5 ? 1 : -1) * Math.round(85 * Math.random())
        }
          , r = function() {
            const t = Math.abs(a()) / 5;
            return {
                x: a(),
                y: a(),
                r: t
            }
        }
          , l = function() {
            var t = [];
            for (let e = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 10) - 1; e >= 0; e--)
                t.push(r());
            return t
        }
          , h = function(t) {
            let e = t.length;
            for (; e > 0; ) {
                let i = Math.floor(Math.random() * e);
                e--;
                let s = t[e];
                t[e] = t[i],
                t[i] = s
            }
            return t
        }
          , c = [o.grey, o.red, o.yellow, o.blue, o.green];
        var d = [{
            backgroundColor: o.grey,
            data: l()
        }, {
            backgroundColor: o.red,
            data: l()
        }, {
            backgroundColor: o.blue,
            data: l()
        }, {
            backgroundColor: o.yellow,
            data: l()
        }, {
            backgroundColor: o.green,
            data: l()
        }]
    }
    , {
        "../colours.js": 17,
        "chart.js/auto": 2
    }],
    8: [function(t, e, i) {
        "use strict";
        Object.defineProperty(i, "__esModule", {
            value: !0
        }),
        i.default = function(t) {
            let e = o.color(a.red);
            var i = {
                datasets: [{
                    borderColor: e.alpha(1).rgbString(),
                    backgroundColor: e.alpha(.5).rgbString(),
                    pointBorderColor: e.alpha(1).rgbString(),
                    pointBackgroundColor: "#FFFFFF",
                    pointBorderWidth: 2,
                    showLine: !0,
                    fill: !0,
                    data: [{
                        x: 1,
                        y: -.01711
                    }, {
                        x: 1.58,
                        y: -.04285
                    }, {
                        x: 2.51,
                        y: -.1068
                    }, {
                        x: 3.98,
                        y: -.2635
                    }, {
                        x: 6.31,
                        y: -.6339
                    }, {
                        x: 10,
                        y: -1.445
                    }, {
                        x: 15.8,
                        y: -2.992
                    }, {
                        x: 25.1,
                        y: -5.429
                    }, {
                        x: 39.8,
                        y: -8.607
                    }, {
                        x: 63.1,
                        y: -12.23
                    }, {
                        x: 100,
                        y: -16.07
                    }]
                }]
            };
            return new n.default(t,{
                type: "scatter",
                data: i,
                options: {
                    plugins: {
                        legend: !1
                    },
                    elements: {
                        point: {
                            radius: 4
                        }
                    },
                    scales: {
                        x: {
                            type: "logarithmic",
                            position: "top",
                            grid: {
                                color: "rgba(231,233,237,0.5)",
                                borderColor: "rgba(231,233,237,1)"
                            },
                            ticks: {
                                autoSkip: !1,
                                callback: function(t) {
                                    var e = t / Math.pow(10, Math.floor(o.log10(t)));
                                    return 1 === e || 2 === e || 5 === e ? t.toString() : ""
                                }
                            }
                        },
                        y: {
                            type: "linear",
                            grid: {
                                color: "rgba(231,233,237,0.5)",
                                borderColor: "rgba(231,233,237,1)"
                            },
                            ticks: {
                                display: !1
                            }
                        }
                    }
                }
            })
        }
        ;
        var s, n = (s = t("chart.js/auto")) && s.__esModule ? s : {
            default: s
        }, o = l(t("chart.js/helpers")), a = l(t("../colours.js"));
        function r(t) {
            if ("function" != typeof WeakMap)
                return null;
            var e = new WeakMap
              , i = new WeakMap;
            return (r = function(t) {
                return t ? i : e
            }
            )(t)
        }
        function l(t, e) {
            if (!e && t && t.__esModule)
                return t;
            if (null === t || "object" != typeof t && "function" != typeof t)
                return {
                    default: t
                };
            var i = r(e);
            if (i && i.has(t))
                return i.get(t);
            var s = {}
              , n = Object.defineProperty && Object.getOwnPropertyDescriptor;
            for (var o in t)
                if ("default" !== o && Object.prototype.hasOwnProperty.call(t, o)) {
                    var a = n ? Object.getOwnPropertyDescriptor(t, o) : null;
                    a && (a.get || a.set) ? Object.defineProperty(s, o, a) : s[o] = t[o]
                }
            return s.default = t,
            i && i.set(t, s),
            s
        }
    }
    , {
        "../colours.js": 17,
        "chart.js/auto": 2,
        "chart.js/helpers": 6
    }],
    9: [function(t, e, i) {
        "use strict";
        Object.defineProperty(i, "__esModule", {
            value: !0
        }),
        i.default = function(t) {
            const e = function() {
                return 80 * Math.random() + 20
            }
              , i = function() {
                return Math.min(99, Math.round(100 * Math.random()))
            };
            var s, o, a = [];
            for (let t = 99; t >= 0; t--)
                a.push({
                    x: "lbl" + t,
                    y: e()
                });
            var r = {
                type: "bar",
                options: {
                    responsive: !0,
                    maintainAspectRatio: !1,
                    plugins: {
                        legend: !1
                    },
                    scales: {
                        y: {
                            display: !1,
                            beginAtZero: !0
                        },
                        x: {
                            display: !1
                        }
                    },
                    animation: {
                        onComplete: () => {
                            s && clearTimeout(s),
                            s = setTimeout(( () => {
                                for (let t = i() - 1; t >= 0; t--)
                                    a[i()].y = e();
                                o.update()
                            }
                            ), 2e3)
                        }
                    }
                },
                data: {
                    datasets: [{
                        backgroundColor: "rgba(0,0,0,0.05)",
                        hoverBackgroundColor: "rgba(0,0,0,0.1)",
                        data: a
                    }]
                }
            };
            o = new n.default(t,r)
        }
        ;
        var s, n = (s = t("chart.js/auto")) && s.__esModule ? s : {
            default: s
        }
    }
    , {
        "chart.js/auto": 2
    }],
    10: [function(t, e, i) {
        "use strict";
        Object.defineProperty(i, "__esModule", {
            value: !0
        }),
        i.default = function(t) {
            var e = {
                labels: ["A", "B", "C", "D", "E", "F", "G"],
                datasets: [{
                    type: "bar",
                    backgroundColor: a.mauve,
                    data: [h(), h(), h(), h(), h(), h(), h()],
                    borderColor: "white",
                    borderWidth: 2
                }, {
                    type: "bar",
                    backgroundColor: a.blue,
                    data: [h(), h(), h(), h(), h(), h(), h()],
                    borderColor: "white",
                    borderWidth: 2
                }, {
                    type: "line",
                    backgroundColor: o.color(a.yellow).alpha(.5).rgbString(),
                    data: [h(), h(), h(), h(), h(), h(), h()],
                    borderColor: o.color(a.yellow).alpha(1).rgbString(),
                    borderWidth: 1,
                    pointBorderColor: o.color(a.yellow).alpha(1).rgbString(),
                    pointBorderWidth: 2,
                    pointBackgroundColor: "white",
                    fill: !0
                }]
            };
            const i = o.color(a.grey).alpha(.5).rgbString()
              , s = o.color(a.grey).alpha(1).rgbString();
            return new n.default(t,{
                type: "bar",
                data: e,
                options: {
                    radius: 4,
                    barPercentage: .75,
                    interaction: {
                        mode: "index",
                        intersect: !1
                    },
                    scales: {
                        x: {
                            grid: {
                                color: i,
                                borderColor: s
                            }
                        },
                        y: {
                            grid: {
                                color: i,
                                borderColor: s
                            },
                            ticks: {
                                display: !1
                            }
                        }
                    },
                    responsive: !0,
                    plugins: {
                        legend: !1,
                        tooltip: !1
                    }
                }
            })
        }
        ;
        var s, n = (s = t("chart.js/auto")) && s.__esModule ? s : {
            default: s
        }, o = l(t("chart.js/helpers")), a = l(t("../colours.js"));
        function r(t) {
            if ("function" != typeof WeakMap)
                return null;
            var e = new WeakMap
              , i = new WeakMap;
            return (r = function(t) {
                return t ? i : e
            }
            )(t)
        }
        function l(t, e) {
            if (!e && t && t.__esModule)
                return t;
            if (null === t || "object" != typeof t && "function" != typeof t)
                return {
                    default: t
                };
            var i = r(e);
            if (i && i.has(t))
                return i.get(t);
            var s = {}
              , n = Object.defineProperty && Object.getOwnPropertyDescriptor;
            for (var o in t)
                if ("default" !== o && Object.prototype.hasOwnProperty.call(t, o)) {
                    var a = n ? Object.getOwnPropertyDescriptor(t, o) : null;
                    a && (a.get || a.set) ? Object.defineProperty(s, o, a) : s[o] = t[o]
                }
            return s.default = t,
            i && i.set(t, s),
            s
        }
        const h = function() {
            return Math.round(100 * Math.random())
        }
    }
    , {
        "../colours.js": 17,
        "chart.js/auto": 2,
        "chart.js/helpers": 6
    }],
    11: [function(t, e, i) {
        "use strict";
        Object.defineProperty(i, "__esModule", {
            value: !0
        }),
        i.default = function(t) {
            return new n.default(t,{
                type: "line",
                data: {
                    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
                    datasets: [{
                        data: [65, 59, NaN, 48, 56, 57],
                        borderColor: o.green,
                        segment: {
                            borderColor: t => a(t, o.grey) || r(t, o.red),
                            borderDash: t => a(t, [6, 6])
                        }
                    }]
                },
                options: {
                    radius: 0,
                    plugins: {
                        legend: !1
                    },
                    scales: {
                        x: {
                            display: !1
                        },
                        y: {
                            display: !1
                        }
                    }
                }
            })
        }
        ;
        var s, n = (s = t("chart.js/auto")) && s.__esModule ? s : {
            default: s
        }, o = t("../colours.js");
        const a = (t, e) => t.p0.skip || t.p1.skip ? e : void 0
          , r = (t, e) => t.p0.parsed.y > t.p1.parsed.y ? e : void 0
    }
    , {
        "../colours.js": 17,
        "chart.js/auto": 2
    }],
    12: [function(t, e, i) {
        "use strict";
        Object.defineProperty(i, "__esModule", {
            value: !0
        }),
        i.default = function(t) {
            return new n.default(t,{
                type: "doughnut",
                data: {
                    datasets: [{
                        data: [65, 59, 20, 48],
                        backgroundColor: [o.red, o.yellow, o.blue, o.green],
                        borderWidth: 0
                    }]
                },
                options: {
                    responsive: !1,
                    plugins: {
                        legend: !1,
                        title: {
                            display: !0,
                            text: "Main title"
                        },
                        subtitle: {
                            display: !0,
                            text: "Secondary title",
                            padding: {
                                bottom: 10
                            }
                        }
                    }
                }
            })
        }
        ;
        var s, n = (s = t("chart.js/auto")) && s.__esModule ? s : {
            default: s
        }, o = t("../colours.js")
    }
    , {
        "../colours.js": 17,
        "chart.js/auto": 2
    }],
    13: [function(t, e, i) {
        "use strict";
        Object.defineProperty(i, "__esModule", {
            value: !0
        }),
        i.default = function(t) {
            return new n.default(t,{
                type: "bar",
                data: {
                    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
                    datasets: [{
                        data: [10, 30, 50, 20, 25, 44, 15],
                        backgroundColor: [o.red, o.yellow, o.green],
                        borderWidth: 0
                    }, {
                        type: "line",
                        borderColor: o.blue,
                        data: ["ON", "ON", "OFF", "ON", "OFF", "OFF", "ON"],
                        radius: 0,
                        stepped: !0,
                        yAxisID: "y2"
                    }]
                },
                options: {
                    plugins: {
                        legend: !1
                    },
                    scales: {
                        x: {
                            display: !1
                        },
                        y: {
                            type: "linear",
                            position: "left",
                            stack: "demo",
                            stackWeight: 2,
                            grid: {
                                borderColor: o.red,
                                drawOnChartArea: !1,
                                drawTicks: !1
                            },
                            ticks: {
                                color: o.red
                            }
                        },
                        y2: {
                            type: "category",
                            labels: ["ON", "OFF"],
                            offset: !0,
                            position: "left",
                            stack: "demo",
                            stackWeight: 1,
                            grid: {
                                borderColor: o.blue,
                                drawOnChartArea: !1,
                                drawTicks: !1
                            },
                            ticks: {
                                color: o.blue
                            }
                        }
                    }
                }
            })
        }
        ;
        var s, n = (s = t("chart.js/auto")) && s.__esModule ? s : {
            default: s
        }, o = t("../colours.js")
    }
    , {
        "../colours.js": 17,
        "chart.js/auto": 2
    }],
    14: [function(t, e, i) {
        "use strict";
        Object.defineProperty(i, "__esModule", {
            value: !0
        }),
        i.default = function(t) {
            const e = new n.default(t,{
                type: "line",
                data: {
                    datasets: h
                },
                options: {
                    radius: 0,
                    animations: {
                        y: {
                            delay: t => 1e3 * t.datasetIndex,
                            easing: "easeInOutElastic",
                            from: t => {
                                if ("data" === t.type && "default" === t.mode && !t.dropped)
                                    return t.dropped = !0,
                                    -10
                            }
                        }
                    },
                    interaction: {
                        mode: "x",
                        intersect: !1
                    },
                    plugins: {
                        legend: !1
                    },
                    scales: {
                        x: {
                            type: "linear",
                            display: !1,
                            bounds: "data"
                        },
                        y: {
                            type: "linear",
                            display: !1
                        }
                    }
                }
            });
            setInterval(( () => {
                for (const t of e.data.datasets)
                    t.data = a();
                e.update()
            }
            ), 1e4)
        }
        ;
        var s, n = (s = t("chart.js/auto")) && s.__esModule ? s : {
            default: s
        }, o = t("../colours.js");
        const a = function() {
            var t = [];
            let e = 100 * Math.random();
            for (let i = 0; i < 100; i++)
                e += 5 - 10 * Math.random(),
                t.push({
                    x: i,
                    y: e
                });
            return t
        }
          , r = 50
          , l = t => 0 === t.index ? t.chart.scales.y.getPixelForValue(100) : t.chart.getDatasetMeta(t.datasetIndex).data[t.index - 1].getProps(["y"], !0).y;
        var h = [{
            borderColor: o.red,
            data: a(),
            animations: {
                x: {
                    type: "number",
                    easing: "linear",
                    duration: r,
                    from: NaN,
                    delay: t => "data" !== t.type ? 0 : t.index * r
                },
                y: {
                    type: "number",
                    easing: "linear",
                    duration: r,
                    from: l,
                    delay: t => "data" !== t.type ? 0 : t.index * r
                }
            }
        }, {
            borderColor: o.blue,
            data: a(),
            animations: {
                borderWidth: {
                    easing: "linear",
                    from: 1,
                    loop: !0
                }
            }
        }, {
            borderColor: o.yellow,
            borderWidth: 1,
            data: a(),
            tension: 1,
            animations: {
                tension: {
                    type: "number",
                    duration: 1e3,
                    easing: "linear",
                    from: 0,
                    to: 1,
                    loop: !0
                }
            }
        }, {
            borderColor: o.green,
            data: a(),
            animations: {
                x: {
                    type: "number",
                    easing: "linear",
                    duration: r,
                    from: NaN,
                    delay: t => "data" !== t.type ? 0 : (100 - t.index) * r
                },
                y: {
                    type: "number",
                    easing: "linear",
                    duration: r,
                    from: l,
                    delay: t => "data" !== t.type ? 0 : (100 - t.index) * r
                }
            }
        }]
    }
    , {
        "../colours.js": 17,
        "chart.js/auto": 2
    }],
    15: [function(t, e, i) {
        "use strict";
        Object.defineProperty(i, "__esModule", {
            value: !0
        }),
        i.default = function(t) {
            return new n.default(t,{
                type: "line",
                data: {
                    datasets: r
                },
                options: {
                    radius: 0,
                    borderWidth: 1,
                    parsing: !1,
                    normalized: !0,
                    animation: !1,
                    interaction: {
                        mode: "nearest",
                        axis: "x",
                        intersect: !1
                    },
                    plugins: {
                        legend: !1,
                        decimation: {
                            enabled: !0
                        }
                    },
                    scales: {
                        x: {
                            type: "linear",
                            display: !1,
                            bounds: "data"
                        },
                        y: {
                            type: "linear",
                            display: !1
                        }
                    }
                }
            })
        }
        ;
        var s, n = (s = t("chart.js/auto")) && s.__esModule ? s : {
            default: s
        }, o = t("../colours.js");
        const a = function() {
            var t = [];
            let e = 100 * Math.random();
            for (let i = 0; i < 5e5; i++)
                e += 5 - 10 * Math.random(),
                t.push({
                    x: i,
                    y: e
                });
            return t
        };
        var r = [{
            borderColor: o.red,
            data: a()
        }, {
            borderColor: o.blue,
            data: a()
        }]
    }
    , {
        "../colours.js": 17,
        "chart.js/auto": 2
    }],
    16: [function(t, e, i) {
        "use strict";
        Object.defineProperty(i, "__esModule", {
            value: !0
        }),
        i.default = function(t) {
            return new n.default(t,{
                type: "line",
                data: {
                    datasets: a
                },
                options: {
                    radius: 0,
                    plugins: {
                        legend: !1
                    },
                    scales: {
                        x: {
                            type: "linear",
                            display: !1,
                            bounds: "data"
                        },
                        y: {
                            type: "linear",
                            display: !1
                        }
                    }
                }
            })
        }
        ;
        var s, n = (s = t("chart.js/auto")) && s.__esModule ? s : {
            default: s
        };
        const o = function(t) {
            var e = [];
            let i = -10 * t;
            for (let t = 0; t < 100; t++)
                i -= 1,
                e.push({
                    x: t,
                    y: i
                });
            return e
        };
        var a = new Array(7).fill(0).map(( (t, e) => ({
            data: o(e)
        })))
    }
    , {
        "chart.js/auto": 2
    }],
    17: [function(t, e, i) {
        "use strict";
        Object.defineProperty(i, "__esModule", {
            value: !0
        }),
        i.yellow = i.red = i.mauve = i.grey = i.green = i.blue = void 0;
        i.red = "rgba(255,99,132,0.8)";
        i.yellow = "rgba(255,205,86,0.8)";
        i.blue = "rgba(54,162,235,0.8)";
        i.green = "rgba(75,192,192,0.8)";
        i.grey = "rgba(231,233,237,0.8)";
        i.mauve = "rgba(179,181,198,0.8)"
    }
    , {}],
    18: [function(t, e, i) {
        "use strict";
        var s = g(t("chart.js/auto"))
          , n = g(t("./charts/backgroundBars"))
          , o = g(t("./charts/mixedTypes"))
          , a = g(t("./charts/axisTypes"))
          , r = g(t("./charts/animatedChart"))
          , l = g(t("./charts/v3anims"))
          , h = g(t("./charts/v3perf"))
          , c = g(t("./charts/v31segments"))
          , d = g(t("./charts/v34subtitle"))
          , u = g(t("./charts/v35box"))
          , f = g(t("./charts/v4colors"));
        function g(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }
        s.default.defaults.plugins.tooltip.enabled = !1,
        (0,
        n.default)(document.getElementById("background-bar").getContext("2d")),
        (0,
        o.default)(document.getElementById("mixed-chart").getContext("2d")),
        (0,
        a.default)(document.getElementById("axis-chart").getContext("2d")),
        (0,
        r.default)(document.getElementById("animate-chart").getContext("2d")),
        (0,
        l.default)("v3anims"),
        (0,
        h.default)("v3perf"),
        (0,
        c.default)("v31segments"),
        (0,
        d.default)("v34subtitle"),
        (0,
        u.default)("v35box"),
        (0,
        f.default)("v4colors")
    }
    , {
        "./charts/animatedChart": 7,
        "./charts/axisTypes": 8,
        "./charts/backgroundBars": 9,
        "./charts/mixedTypes": 10,
        "./charts/v31segments": 11,
        "./charts/v34subtitle": 12,
        "./charts/v35box": 13,
        "./charts/v3anims": 14,
        "./charts/v3perf": 15,
        "./charts/v4colors": 16,
        "chart.js/auto": 2
    }]
}, {}, [18]);
