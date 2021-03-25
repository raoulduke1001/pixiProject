!function (t, e) {
    "object" == typeof exports && "undefined" != typeof module ? e(exports) : "function" == typeof define && define.amd ? define(["exports"], e) : e((t = t || self).Ease = {})
}(this, function (t) {
    "use strict";
    var e = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};

    function s(t, e) {
        return t(e = {exports: {}}, e.exports), e.exports
    }

    var n = s(function (t, s) {
        (function () {
            var e;
            (function (e) {
                t.exports = e
            })(e = {
                linear: function (t, e, s, n) {
                    return s * t / n + e
                }, easeInQuad: function (t, e, s, n) {
                    return s * (t /= n) * t + e
                }, easeOutQuad: function (t, e, s, n) {
                    return -s * (t /= n) * (t - 2) + e
                }, easeInOutQuad: function (t, e, s, n) {
                    return (t /= n / 2) < 1 ? s / 2 * t * t + e : -s / 2 * (--t * (t - 2) - 1) + e
                }, easeInCubic: function (t, e, s, n) {
                    return s * (t /= n) * t * t + e
                }, easeOutCubic: function (t, e, s, n) {
                    return s * ((t = t / n - 1) * t * t + 1) + e
                }, easeInOutCubic: function (t, e, s, n) {
                    return (t /= n / 2) < 1 ? s / 2 * t * t * t + e : s / 2 * ((t -= 2) * t * t + 2) + e
                }, easeInQuart: function (t, e, s, n) {
                    return s * (t /= n) * t * t * t + e
                }, easeOutQuart: function (t, e, s, n) {
                    return -s * ((t = t / n - 1) * t * t * t - 1) + e
                }, easeInOutQuart: function (t, e, s, n) {
                    return (t /= n / 2) < 1 ? s / 2 * t * t * t * t + e : -s / 2 * ((t -= 2) * t * t * t - 2) + e
                }, easeInQuint: function (t, e, s, n) {
                    return s * (t /= n) * t * t * t * t + e
                }, easeOutQuint: function (t, e, s, n) {
                    return s * ((t = t / n - 1) * t * t * t * t + 1) + e
                }, easeInOutQuint: function (t, e, s, n) {
                    return (t /= n / 2) < 1 ? s / 2 * t * t * t * t * t + e : s / 2 * ((t -= 2) * t * t * t * t + 2) + e
                }, easeInSine: function (t, e, s, n) {
                    return -s * Math.cos(t / n * (Math.PI / 2)) + s + e
                }, easeOutSine: function (t, e, s, n) {
                    return s * Math.sin(t / n * (Math.PI / 2)) + e
                }, easeInOutSine: function (t, e, s, n) {
                    return -s / 2 * (Math.cos(Math.PI * t / n) - 1) + e
                }, easeInExpo: function (t, e, s, n) {
                    return 0 === t ? e : s * Math.pow(2, 10 * (t / n - 1)) + e
                }, easeOutExpo: function (t, e, s, n) {
                    return t === n ? e + s : s * (1 - Math.pow(2, -10 * t / n)) + e
                }, easeInOutExpo: function (t, e, s, n) {
                    return (t /= n / 2) < 1 ? s / 2 * Math.pow(2, 10 * (t - 1)) + e : s / 2 * (2 - Math.pow(2, -10 * --t)) + e
                }, easeInCirc: function (t, e, s, n) {
                    return -s * (Math.sqrt(1 - (t /= n) * t) - 1) + e
                }, easeOutCirc: function (t, e, s, n) {
                    return s * Math.sqrt(1 - (t = t / n - 1) * t) + e
                }, easeInOutCirc: function (t, e, s, n) {
                    return (t /= n / 2) < 1 ? -s / 2 * (Math.sqrt(1 - t * t) - 1) + e : s / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + e
                }, easeInElastic: function (t, e, s, n) {
                    var i, a, o;
                    return o = 1.70158, 0 === t || (t /= n), (a = 0) || (a = .3 * n), (i = s) < Math.abs(s) ? (i = s, o = a / 4) : o = a / (2 * Math.PI) * Math.asin(s / i), -i * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * n - o) * (2 * Math.PI) / a) + e
                }, easeOutElastic: function (t, e, s, n) {
                    var i, a, o;
                    return o = 1.70158, 0 === t || (t /= n), (a = 0) || (a = .3 * n), (i = s) < Math.abs(s) ? (i = s, o = a / 4) : o = a / (2 * Math.PI) * Math.asin(s / i), i * Math.pow(2, -10 * t) * Math.sin((t * n - o) * (2 * Math.PI) / a) + s + e
                }, easeInOutElastic: function (t, e, s, n) {
                    var i, a, o;
                    return o = 1.70158, 0 === t || (t /= n / 2), (a = 0) || (a = n * (.3 * 1.5)), (i = s) < Math.abs(s) ? (i = s, o = a / 4) : o = a / (2 * Math.PI) * Math.asin(s / i), t < 1 ? i * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * n - o) * (2 * Math.PI) / a) * -.5 + e : i * Math.pow(2, -10 * (t -= 1)) * Math.sin((t * n - o) * (2 * Math.PI) / a) * .5 + s + e
                }, easeInBack: function (t, e, s, n, i) {
                    return void 0 === i && (i = 1.70158), s * (t /= n) * t * ((i + 1) * t - i) + e
                }, easeOutBack: function (t, e, s, n, i) {
                    return void 0 === i && (i = 1.70158), s * ((t = t / n - 1) * t * ((i + 1) * t + i) + 1) + e
                }, easeInOutBack: function (t, e, s, n, i) {
                    return void 0 === i && (i = 1.70158), (t /= n / 2) < 1 ? s / 2 * (t * t * ((1 + (i *= 1.525)) * t - i)) + e : s / 2 * ((t -= 2) * t * ((1 + (i *= 1.525)) * t + i) + 2) + e
                }, easeInBounce: function (t, s, n, i) {
                    return n - e.easeOutBounce(i - t, 0, n, i) + s
                }, easeOutBounce: function (t, e, s, n) {
                    return (t /= n) < 1 / 2.75 ? s * (7.5625 * t * t) + e : t < 2 / 2.75 ? s * (7.5625 * (t -= 1.5 / 2.75) * t + .75) + e : t < 2.5 / 2.75 ? s * (7.5625 * (t -= 2.25 / 2.75) * t + .9375) + e : s * (7.5625 * (t -= 2.625 / 2.75) * t + .984375) + e
                }, easeInOutBounce: function (t, s, n, i) {
                    return t < i / 2 ? .5 * e.easeInBounce(2 * t, 0, n, i) + s : .5 * e.easeOutBounce(2 * t - i, 0, n, i) + .5 * n + s
                }
            })
        }).call(e)
    }), i = s(function (t) {
        var e = Object.prototype.hasOwnProperty, s = "~";

        function n() {
        }

        function i(t, e, s) {
            this.fn = t, this.context = e, this.once = s || !1
        }

        function a(t, e, n, a, o) {
            if ("function" != typeof n) throw new TypeError("The listener must be a function");
            var r = new i(n, a || t, o), h = s ? s + e : e;
            return t._events[h] ? t._events[h].fn ? t._events[h] = [t._events[h], r] : t._events[h].push(r) : (t._events[h] = r, t._eventsCount++), t
        }

        function o(t, e) {
            0 == --t._eventsCount ? t._events = new n : delete t._events[e]
        }

        function r() {
            this._events = new n, this._eventsCount = 0
        }

        Object.create && (n.prototype = Object.create(null), (new n).__proto__ || (s = !1)), r.prototype.eventNames = function () {
            var t, n, i = [];
            if (0 === this._eventsCount) return i;
            for (n in t = this._events) e.call(t, n) && i.push(s ? n.slice(1) : n);
            return Object.getOwnPropertySymbols ? i.concat(Object.getOwnPropertySymbols(t)) : i
        }, r.prototype.listeners = function (t) {
            var e = s ? s + t : t, n = this._events[e];
            if (!n) return [];
            if (n.fn) return [n.fn];
            for (var i = 0, a = n.length, o = new Array(a); i < a; i++) o[i] = n[i].fn;
            return o
        }, r.prototype.listenerCount = function (t) {
            var e = s ? s + t : t, n = this._events[e];
            return n ? n.fn ? 1 : n.length : 0
        }, r.prototype.emit = function (t, e, n, i, a, o) {
            var r = s ? s + t : t;
            if (!this._events[r]) return !1;
            var h, u, c = this._events[r], l = arguments.length;
            if (c.fn) {
                switch (c.once && this.removeListener(t, c.fn, void 0, !0), l) {
                    case 1:
                        return c.fn.call(c.context), !0;
                    case 2:
                        return c.fn.call(c.context, e), !0;
                    case 3:
                        return c.fn.call(c.context, e, n), !0;
                    case 4:
                        return c.fn.call(c.context, e, n, i), !0;
                    case 5:
                        return c.fn.call(c.context, e, n, i, a), !0;
                    case 6:
                        return c.fn.call(c.context, e, n, i, a, o), !0
                }
                for (u = 1, h = new Array(l - 1); u < l; u++) h[u - 1] = arguments[u];
                c.fn.apply(c.context, h)
            } else {
                var p, f = c.length;
                for (u = 0; u < f; u++) switch (c[u].once && this.removeListener(t, c[u].fn, void 0, !0), l) {
                    case 1:
                        c[u].fn.call(c[u].context);
                        break;
                    case 2:
                        c[u].fn.call(c[u].context, e);
                        break;
                    case 3:
                        c[u].fn.call(c[u].context, e, n);
                        break;
                    case 4:
                        c[u].fn.call(c[u].context, e, n, i);
                        break;
                    default:
                        if (!h) for (p = 1, h = new Array(l - 1); p < l; p++) h[p - 1] = arguments[p];
                        c[u].fn.apply(c[u].context, h)
                }
            }
            return !0
        }, r.prototype.on = function (t, e, s) {
            return a(this, t, e, s, !1)
        }, r.prototype.once = function (t, e, s) {
            return a(this, t, e, s, !0)
        }, r.prototype.removeListener = function (t, e, n, i) {
            var a = s ? s + t : t;
            if (!this._events[a]) return this;
            if (!e) return o(this, a), this;
            var r = this._events[a];
            if (r.fn) r.fn !== e || i && !r.once || n && r.context !== n || o(this, a); else {
                for (var h = 0, u = [], c = r.length; h < c; h++) (r[h].fn !== e || i && !r[h].once || n && r[h].context !== n) && u.push(r[h]);
                u.length ? this._events[a] = 1 === u.length ? u[0] : u : o(this, a)
            }
            return this
        }, r.prototype.removeAllListeners = function (t) {
            var e;
            return t ? (e = s ? s + t : t, this._events[e] && o(this, e)) : (this._events = new n, this._eventsCount = 0), this
        }, r.prototype.off = r.prototype.removeListener, r.prototype.addListener = r.prototype.on, r.prefixed = s, r.EventEmitter = r, t.exports = r
    });

    class a extends i {
        constructor(t, e, s) {
            super(), this.elements = Array.isArray(t) ? t : [t], this.eases = [], this.options = s || {}, this.time = 0;
            for (let t in e) for (let s of this.elements) this.addParam(s, t, e[t])
        }

        addParam(t, e, s) {
            let n, i, o, r, h = e;
            switch (e) {
                case"scaleX":
                case"skewX":
                    i = s, o = s - (n = t[h = e.substr(0, e.length - 1)].x), r = t => this.updateCoord(t, h, "x");
                    break;
                case"scaleY":
                case"skewY":
                    i = s, o = s - (n = t[h = e.substr(0, e.length - 1)].y), r = t => this.updateCoord(t, h, "y");
                    break;
                case"tint":
                case"blend":
                    const u = Array.isArray(s) ? s : [t.tint, s];
                    n = 0, o = i = u.length, r = "tint" === e ? t => this.updateTint(t, u) : t => this.updateBlend(t, u);
                    break;
                case"shake":
                    n = {x: t.x, y: t.y}, i = s, r = t => this.updateShake(t);
                    break;
                case"position":
                    n = {x: t.x, y: t.y}, o = {
                        x: (i = {x: s.x, y: s.y}).x - n.x,
                        y: i.y - n.y
                    }, r = t => this.updatePosition(t);
                    break;
                case"skew":
                case"scale":
                    i = s, o = s - (n = t[e].x), r = t => this.updatePoint(t, e);
                    break;
                case"face":
                    n = t.rotation, o = (i = a.shortestAngle(n, Math.atan2(s.y - t.y, s.x - t.x))) - n, r = t => this.updateOne(t, "rotation");
                    break;
                default:
                    i = s, o = s - (n = t[e]), r = t => this.updateOne(t, e)
            }
            this.eases.push({element: t, entry: e, update: r, start: n, to: i, delta: o})
        }

        static shortestAngle(t, e) {
            const s = 2 * Math.PI;
            let n = Math.abs(t - e) % s;
            var i;
            return (n = n > Math.PI ? s - n : n) * (((e - t + Math.PI) % (i = s) + i) % i - Math.PI > 0 ? 1 : -1)
        }

        remove(t, e) {
            if (0 === arguments.length) this.eases = []; else {
                "string" == typeof e && (e = [e]);
                for (let s = 0; s < this.eases.length; s++) {
                    const n = this.eases[s];
                    t && n.element !== t || e && -1 === e.indexOf(n.entry) || (this.eases.splice(s, 1), s--)
                }
            }
            if (0 === this.eases.length) return !0
        }

        updateOne(t, e) {
            t.element[e] = this.options.ease(this.time, t.start, t.delta, this.options.duration)
        }

        updatePoint(t, e) {
            t.element[e].x = t.element[e].y = this.options.ease(this.time, t.start, t.delta, this.options.duration)
        }

        updatePosition(t) {
            t.element.x = this.options.ease(this.time, t.start.x, t.delta.x, this.options.duration), t.element.y = this.options.ease(this.time, t.start.y, t.delta.y, this.options.duration)
        }

        updateCoord(t, e, s) {
            t.element[e][s] = this.options.ease(this.time, t.start, t.delta, this.options.duration)
        }

        updateTint(t, e) {
            let s = Math.floor(this.options.ease(this.time, t.start, t.delta, this.options.duration));
            s === e.length && (s = e.length - 1), t.element.tint = e[s]
        }

        updateBlend(t, e) {
            const s = this.options.ease(this.time, t.start, t.delta, this.options.duration);
            let n = Math.floor(s);
            n === e.length && (n = e.length - 1);
            let i = n + 1;
            i === e.length && (i = this.options.reverse ? n - 1 : this.options.repeat ? 0 : n);
            const a = s - n, o = e[n], r = e[i], h = 1 - a, u = h * (o >> 16) + a * (r >> 16),
                c = h * (o >> 8 & 255) + a * (r >> 8 & 255), l = h * (255 & o) + a * (255 & r);
            t.element.tint = u << 16 | c << 8 | l
        }

        updateShake(t) {
            function e(t) {
                return Math.floor(Math.random() * t) - Math.floor(t / 2)
            }

            t.element.x = t.start.x + e(t.to), t.element.y = t.start.y + e(t.to)
        }

        complete(t) {
            "shake" === t.entry && (t.element.x = t.start.x, t.element.y = t.start.y)
        }

        reverse(t) {
            if ("position" === t.entry) {
                const e = t.to.x, s = t.to.y;
                t.to.x = t.start.x, t.to.y = t.start.y, t.start.x = e, t.start.y = s, t.delta.x = -t.delta.x, t.delta.y = -t.delta.y
            } else {
                const e = t.to;
                t.to = t.start, t.start = e, t.delta = -t.delta
            }
        }

        repeat(t) {
            switch (t.entry) {
                case"skewX":
                    t.element.skew.x = t.start;
                    break;
                case"skewY":
                    t.element.skew.y = t.start;
                    break;
                case"skew":
                    t.element.skew.x = t.start, t.element.skew.y = t.start;
                    break;
                case"scaleX":
                    t.element.scale.x = t.start;
                    break;
                case"scaleY":
                    t.element.scale.y = t.start;
                    break;
                case"scale":
                    t.element.scale.x = t.start, t.element.scale.y = t.start;
                    break;
                case"position":
                    t.element.x = t.start.x, t.element.y = t.start.y;
                    break;
                default:
                    t.element[t.entry] = t.start
            }
        }

        update(t) {
            if (0 === this.eases.length) return !0;
            if (this.options.wait) {
                if (this.options.wait -= t, this.options.wait > 0) return void this.emit("wait", this);
                t = -this.options.wait, this.options.wait = 0, this.emit("wait-end", this)
            }
            this.time += t;
            let e = 0;
            this.time >= this.options.duration && (e = this.time - this.options.duration, this.time = this.options.duration);
            for (let t = 0; t < this.eases.length; t++) {
                const e = this.eases[t];
                e.element._destroyed ? (this.eases.splice(t, 1), t--) : e.update(e)
            }
            if (this.emit("each", this), this.time >= this.options.duration) if (this.options.reverse) this.eases.forEach(t => this.reverse(t)), this.time = e, e && this.eases.forEach(t => t.update(t)), this.emit("reverse", this), this.options.repeat ? !0 !== this.options.repeat && this.options.repeat-- : this.options.reverse = !1; else {
                if (!this.options.repeat) return this.eases.forEach(t => this.complete(t)), this.emit("complete", this), !0;
                this.eases.forEach(t => this.repeat(t)), this.time = e, e && this.eases.forEach(t => t.update(t)), !0 !== this.options.repeat && this.options.repeat--, this.emit("repeat", this)
            }
        }

        get count() {
            return this.eases.length
        }
    }

    const o = {duration: 1e3, ease: n.easeInOutSine, maxFrame: 1e3 / 60, ticker: null, useRAF: !0};

    class r extends i {
        constructor(t) {
            super(), this.options = Object.assign({}, o, t), this.easings = [], this.empty = !0, this.options.ticker && this.options.ticker.add(this.update, this)
        }

        destroy() {
            this.removeAll(), this.options.useTicker ? this.ticker.remove(this.update, this) : this.options.useRAF && (cancelAnimationFrame(this.handleRAF), this.handleRAF = null)
        }

        add(t, e, s) {
            (s = s || {}).duration = void 0 !== s.duration ? s.duration : this.options.duration, s.ease = s.ease || this.options.ease, "string" == typeof s.ease && (s.ease = n[s.ease]);
            const i = new a(t, e, s);
            return this.easings.push(i), this.empty && this.options.useRAF && (this.handleRAF = requestAnimationFrame(() => this.update()), this.lastTime = Date.now()), this.empty = !1, i
        }

        target(t, e, s, n) {
            const i = Math.sqrt(Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2)) / s;
            return (n = n || {}).duration = i, this.add(t, {x: e.x, y: e.y}, n)
        }

        face(t, e, s, n) {
            const i = a.shortestAngle(t.rotation, Math.atan2(e.y - t.y, e.x - t.x)), o = Math.abs(i - t.rotation) / s;
            return (n = n || {}).duration = o, this.add(t, {rotation: i}, n)
        }

        removeEase(t, e) {
            for (let s = 0; s < this.easings.length; s++) this.easings[s].remove(t, e) && (this.easings.splice(s, 1), s--);
            0 === this.easings.length && (this.empty = !0, this.options.useRAF && this.handleRAF && (cancelAnimationFrame(this.handleRAF), this.handleRAF = null))
        }

        removeAll() {
            this.easings = [], this.empty = !0, this.options.useRAF && this.handleRAF && (cancelAnimationFrame(this.handleRAF), this.handleRAF = null)
        }

        update(t) {
            if (this.options.useTicker) t = this.ticker.elapsedMS; else if (this.options.useRAF) {
                const e = Date.now();
                t = e - this.lastTime, this.lastTime = e
            }
            if (t = Math.min(t, this.options.maxFrame), !this.empty) {
                const e = this.easings.slice(0);
                for (let s of e) s.update(t) && this.easings.splice(this.easings.indexOf(s), 1);
                this.emit("each", this), 0 === this.easings.length && (this.empty = !0, this.emit("complete", this))
            }
            this.options.useRAF && this.easings.length ? this.handleRAF = requestAnimationFrame(() => this.update()) : this.handleRAF = null
        }

        get count() {
            return this.easings.length
        }

        countRunning() {
            let t = 0;
            for (let e of this.easings) t += e.count;
            return t
        }

        set duration(t) {
            this.options.duration = t
        }

        get duration() {
            return this.options.duration
        }

        set ease(t) {
            this.options.ease = t
        }

        get ease() {
            return this.options.ease
        }
    }

    r.id = 0;
    let h = new r;
    r.ease = h;
    t.Ease = r, t.List = class {
        constructor() {
            console.warn("Ease.List was deprecated. Use new Ease() instead.")
        }
    }, t.ease = h, Object.defineProperty(t, "__esModule", {value: !0})
});
//# sourceMappingURL=ease.js.map
