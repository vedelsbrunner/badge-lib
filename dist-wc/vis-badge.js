var gt = Object.defineProperty;
var ht = (n, e, t) => e in n ? gt(n, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : n[e] = t;
var L = (n, e, t) => ht(n, typeof e != "symbol" ? e + "" : e, t);
function oe() {
}
function pt(n, e) {
  for (const t in e) n[t] = e[t];
  return (
    /** @type {T & S} */
    n
  );
}
function Je(n) {
  return n();
}
function ze() {
  return /* @__PURE__ */ Object.create(null);
}
function ee(n) {
  n.forEach(Je);
}
function $e(n) {
  return typeof n == "function";
}
function Z(n, e) {
  return n != n ? e == e : n !== e || n && typeof n == "object" || typeof n == "function";
}
function bt(n) {
  return Object.keys(n).length === 0;
}
function pe(n, e, t, i) {
  if (n) {
    const l = Ke(n, e, t, i);
    return n[0](l);
  }
}
function Ke(n, e, t, i) {
  return n[1] && i ? pt(t.ctx.slice(), n[1](i(e))) : t.ctx;
}
function be(n, e, t, i) {
  if (n[2] && i) {
    const l = n[2](i(t));
    if (e.dirty === void 0)
      return l;
    if (typeof l == "object") {
      const r = [], a = Math.max(e.dirty.length, l.length);
      for (let s = 0; s < a; s += 1)
        r[s] = e.dirty[s] | l[s];
      return r;
    }
    return e.dirty | l;
  }
  return e.dirty;
}
function _e(n, e, t, i, l, r) {
  if (l) {
    const a = Ke(e, t, i, r);
    n.p(a, l);
  }
}
function me(n) {
  if (n.ctx.length > 32) {
    const e = [], t = n.ctx.length / 32;
    for (let i = 0; i < t; i++)
      e[i] = -1;
    return e;
  }
  return -1;
}
function _t(n) {
  return n && $e(n.destroy) ? n.destroy : oe;
}
const mt = typeof window < "u" ? window : typeof globalThis < "u" ? globalThis : (
  // @ts-ignore Node typings have this
  global
);
function _(n, e) {
  n.appendChild(e);
}
function ae(n, e, t) {
  const i = vt(n);
  if (!i.getElementById(e)) {
    const l = x("style");
    l.id = e, l.textContent = t, wt(i, l);
  }
}
function vt(n) {
  if (!n) return document;
  const e = n.getRootNode ? n.getRootNode() : n.ownerDocument;
  return e && /** @type {ShadowRoot} */
  e.host ? (
    /** @type {ShadowRoot} */
    e
  ) : n.ownerDocument;
}
function wt(n, e) {
  return _(
    /** @type {Document} */
    n.head || n,
    e
  ), e.sheet;
}
function k(n, e, t) {
  n.insertBefore(e, t || null);
}
function v(n) {
  n.parentNode && n.parentNode.removeChild(n);
}
function x(n) {
  return document.createElement(n);
}
function m(n) {
  return document.createElementNS("http://www.w3.org/2000/svg", n);
}
function R(n) {
  return document.createTextNode(n);
}
function V() {
  return R(" ");
}
function N() {
  return R("");
}
function I(n, e, t, i) {
  return n.addEventListener(e, t, i), () => n.removeEventListener(e, t, i);
}
function o(n, e, t) {
  t == null ? n.removeAttribute(e) : n.getAttribute(e) !== t && n.setAttribute(e, t);
}
function kt(n) {
  return Array.from(n.childNodes);
}
function te(n, e) {
  e = "" + e, n.data !== e && (n.data = /** @type {string} */
  e);
}
function fe(n, e, t, i) {
  t == null ? n.style.removeProperty(e) : n.style.setProperty(e, t, "");
}
function yt(n) {
  const e = {};
  return n.childNodes.forEach(
    /** @param {Element} node */
    (t) => {
      e[t.slot || "default"] = !0;
    }
  ), e;
}
let Se;
function ce(n) {
  Se = n;
}
const le = [], ve = [];
let re = [];
const Me = [], Qe = /* @__PURE__ */ Promise.resolve();
let ke = !1;
function et() {
  ke || (ke = !0, Qe.then(w));
}
function $t() {
  return et(), Qe;
}
function ye(n) {
  re.push(n);
}
const we = /* @__PURE__ */ new Set();
let ne = 0;
function w() {
  if (ne !== 0)
    return;
  const n = Se;
  do {
    try {
      for (; ne < le.length; ) {
        const e = le[ne];
        ne++, ce(e), St(e.$$);
      }
    } catch (e) {
      throw le.length = 0, ne = 0, e;
    }
    for (ce(null), le.length = 0, ne = 0; ve.length; ) ve.pop()();
    for (let e = 0; e < re.length; e += 1) {
      const t = re[e];
      we.has(t) || (we.add(t), t());
    }
    re.length = 0;
  } while (le.length);
  for (; Me.length; )
    Me.pop()();
  ke = !1, we.clear(), ce(n);
}
function St(n) {
  if (n.fragment !== null) {
    n.update(), ee(n.before_update);
    const e = n.dirty;
    n.dirty = [-1], n.fragment && n.fragment.p(n.ctx, e), n.after_update.forEach(ye);
  }
}
function zt(n) {
  const e = [], t = [];
  re.forEach((i) => n.indexOf(i) === -1 ? e.push(i) : t.push(i)), t.forEach((i) => i()), re = e;
}
const ge = /* @__PURE__ */ new Set();
let Q;
function A() {
  Q = {
    r: 0,
    c: [],
    p: Q
    // parent group
  };
}
function F() {
  Q.r || ee(Q.c), Q = Q.p;
}
function S(n, e) {
  n && n.i && (ge.delete(n), n.i(e));
}
function B(n, e, t, i) {
  if (n && n.o) {
    if (ge.has(n)) return;
    ge.add(n), Q.c.push(() => {
      ge.delete(n), i && (t && n.d(1), i());
    }), n.o(e);
  } else i && i();
}
function Be(n) {
  return (n == null ? void 0 : n.length) !== void 0 ? n : Array.from(n);
}
function Mt(n, e) {
  n.d(1), e.delete(n.key);
}
function Bt(n, e, t, i, l, r, a, s, f, c, u, d) {
  let p = n.length, g = r.length, b = p;
  const y = {};
  for (; b--; ) y[n[b].key] = b;
  const M = [], $ = /* @__PURE__ */ new Map(), C = /* @__PURE__ */ new Map(), z = [];
  for (b = g; b--; ) {
    const h = d(l, r, b), T = t(h);
    let O = a.get(T);
    O ? z.push(() => O.p(h, e)) : (O = c(T, h), O.c()), $.set(T, M[b] = O), T in y && C.set(T, Math.abs(b - y[T]));
  }
  const P = /* @__PURE__ */ new Set(), K = /* @__PURE__ */ new Set();
  function G(h) {
    S(h, 1), h.m(s, u), a.set(h.key, h), u = h.first, g--;
  }
  for (; p && g; ) {
    const h = M[g - 1], T = n[p - 1], O = h.key, ie = T.key;
    h === T ? (u = h.first, p--, g--) : $.has(ie) ? !a.has(O) || P.has(O) ? G(h) : K.has(ie) ? p-- : C.get(O) > C.get(ie) ? (K.add(O), G(h)) : (P.add(ie), p--) : (f(T, a), p--);
  }
  for (; p--; ) {
    const h = n[p];
    $.has(h.key) || f(h, a);
  }
  for (; g; ) G(M[g - 1]);
  return ee(z), M;
}
function E(n) {
  n && n.c();
}
function j(n, e, t) {
  const { fragment: i, after_update: l } = n.$$;
  i && i.m(e, t), ye(() => {
    const r = n.$$.on_mount.map(Je).filter($e);
    n.$$.on_destroy ? n.$$.on_destroy.push(...r) : ee(r), n.$$.on_mount = [];
  }), l.forEach(ye);
}
function D(n, e) {
  const t = n.$$;
  t.fragment !== null && (zt(t.after_update), ee(t.on_destroy), t.fragment && t.fragment.d(e), t.on_destroy = t.fragment = null, t.ctx = []);
}
function Ct(n, e) {
  n.$$.dirty[0] === -1 && (le.push(n), et(), n.$$.dirty.fill(0)), n.$$.dirty[e / 31 | 0] |= 1 << e % 31;
}
function H(n, e, t, i, l, r, a = null, s = [-1]) {
  const f = Se;
  ce(n);
  const c = n.$$ = {
    fragment: null,
    ctx: [],
    // state
    props: r,
    update: oe,
    not_equal: l,
    bound: ze(),
    // lifecycle
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(e.context || (f ? f.$$.context : [])),
    // everything else
    callbacks: ze(),
    dirty: s,
    skip_bound: !1,
    root: e.target || f.$$.root
  };
  a && a(c.root);
  let u = !1;
  if (c.ctx = t ? t(n, e.props || {}, (d, p, ...g) => {
    const b = g.length ? g[0] : p;
    return c.ctx && l(c.ctx[d], c.ctx[d] = b) && (!c.skip_bound && c.bound[d] && c.bound[d](b), u && Ct(n, d)), p;
  }) : [], c.update(), u = !0, ee(c.before_update), c.fragment = i ? i(c.ctx) : !1, e.target) {
    if (e.hydrate) {
      const d = kt(e.target);
      c.fragment && c.fragment.l(d), d.forEach(v);
    } else
      c.fragment && c.fragment.c();
    e.intro && S(n.$$.fragment), j(n, e.target, e.anchor), w();
  }
  ce(f);
}
let tt;
typeof HTMLElement == "function" && (tt = class extends HTMLElement {
  constructor(e, t, i) {
    super();
    /** The Svelte component constructor */
    L(this, "$$ctor");
    /** Slots */
    L(this, "$$s");
    /** The Svelte component instance */
    L(this, "$$c");
    /** Whether or not the custom element is connected */
    L(this, "$$cn", !1);
    /** Component props data */
    L(this, "$$d", {});
    /** `true` if currently in the process of reflecting component props back to attributes */
    L(this, "$$r", !1);
    /** @type {Record<string, CustomElementPropDefinition>} Props definition (name, reflected, type etc) */
    L(this, "$$p_d", {});
    /** @type {Record<string, Function[]>} Event listeners */
    L(this, "$$l", {});
    /** @type {Map<Function, Function>} Event listener unsubscribe functions */
    L(this, "$$l_u", /* @__PURE__ */ new Map());
    this.$$ctor = e, this.$$s = t, i && this.attachShadow({ mode: "open" });
  }
  addEventListener(e, t, i) {
    if (this.$$l[e] = this.$$l[e] || [], this.$$l[e].push(t), this.$$c) {
      const l = this.$$c.$on(e, t);
      this.$$l_u.set(t, l);
    }
    super.addEventListener(e, t, i);
  }
  removeEventListener(e, t, i) {
    if (super.removeEventListener(e, t, i), this.$$c) {
      const l = this.$$l_u.get(t);
      l && (l(), this.$$l_u.delete(t));
    }
    if (this.$$l[e]) {
      const l = this.$$l[e].indexOf(t);
      l >= 0 && this.$$l[e].splice(l, 1);
    }
  }
  async connectedCallback() {
    if (this.$$cn = !0, !this.$$c) {
      let t = function(a) {
        return () => {
          let s;
          return {
            c: function() {
              s = x("slot"), a !== "default" && o(s, "name", a);
            },
            /**
             * @param {HTMLElement} target
             * @param {HTMLElement} [anchor]
             */
            m: function(u, d) {
              k(u, s, d);
            },
            d: function(u) {
              u && v(s);
            }
          };
        };
      };
      var e = t;
      if (await Promise.resolve(), !this.$$cn || this.$$c)
        return;
      const i = {}, l = yt(this);
      for (const a of this.$$s)
        a in l && (i[a] = [t(a)]);
      for (const a of this.attributes) {
        const s = this.$$g_p(a.name);
        s in this.$$d || (this.$$d[s] = he(s, a.value, this.$$p_d, "toProp"));
      }
      for (const a in this.$$p_d)
        !(a in this.$$d) && this[a] !== void 0 && (this.$$d[a] = this[a], delete this[a]);
      this.$$c = new this.$$ctor({
        target: this.shadowRoot || this,
        props: {
          ...this.$$d,
          $$slots: i,
          $$scope: {
            ctx: []
          }
        }
      });
      const r = () => {
        this.$$r = !0;
        for (const a in this.$$p_d)
          if (this.$$d[a] = this.$$c.$$.ctx[this.$$c.$$.props[a]], this.$$p_d[a].reflect) {
            const s = he(
              a,
              this.$$d[a],
              this.$$p_d,
              "toAttribute"
            );
            s == null ? this.removeAttribute(this.$$p_d[a].attribute || a) : this.setAttribute(this.$$p_d[a].attribute || a, s);
          }
        this.$$r = !1;
      };
      this.$$c.$$.after_update.push(r), r();
      for (const a in this.$$l)
        for (const s of this.$$l[a]) {
          const f = this.$$c.$on(a, s);
          this.$$l_u.set(s, f);
        }
      this.$$l = {};
    }
  }
  // We don't need this when working within Svelte code, but for compatibility of people using this outside of Svelte
  // and setting attributes through setAttribute etc, this is helpful
  attributeChangedCallback(e, t, i) {
    var l;
    this.$$r || (e = this.$$g_p(e), this.$$d[e] = he(e, i, this.$$p_d, "toProp"), (l = this.$$c) == null || l.$set({ [e]: this.$$d[e] }));
  }
  disconnectedCallback() {
    this.$$cn = !1, Promise.resolve().then(() => {
      !this.$$cn && this.$$c && (this.$$c.$destroy(), this.$$c = void 0);
    });
  }
  $$g_p(e) {
    return Object.keys(this.$$p_d).find(
      (t) => this.$$p_d[t].attribute === e || !this.$$p_d[t].attribute && t.toLowerCase() === e
    ) || e;
  }
});
function he(n, e, t, i) {
  var r;
  const l = (r = t[n]) == null ? void 0 : r.type;
  if (e = l === "Boolean" && typeof e != "boolean" ? e != null : e, !i || !t[n])
    return e;
  if (i === "toAttribute")
    switch (l) {
      case "Object":
      case "Array":
        return e == null ? null : JSON.stringify(e);
      case "Boolean":
        return e ? "" : null;
      case "Number":
        return e ?? null;
      default:
        return e;
    }
  else
    switch (l) {
      case "Object":
      case "Array":
        return e && JSON.parse(e);
      case "Boolean":
        return e;
      case "Number":
        return e != null ? +e : e;
      default:
        return e;
    }
}
function q(n, e, t, i, l, r) {
  let a = class extends tt {
    constructor() {
      super(n, t, l), this.$$p_d = e;
    }
    static get observedAttributes() {
      return Object.keys(e).map(
        (s) => (e[s].attribute || s).toLowerCase()
      );
    }
  };
  return Object.keys(e).forEach((s) => {
    Object.defineProperty(a.prototype, s, {
      get() {
        return this.$$c && s in this.$$c ? this.$$c[s] : this.$$d[s];
      },
      set(f) {
        var c;
        f = he(s, f, e), this.$$d[s] = f, (c = this.$$c) == null || c.$set({ [s]: f });
      }
    });
  }), i.forEach((s) => {
    Object.defineProperty(a.prototype, s, {
      get() {
        var f;
        return (f = this.$$c) == null ? void 0 : f[s];
      }
    });
  }), r && (a = r(a)), n.element = /** @type {any} */
  a, a;
}
class W {
  constructor() {
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    L(this, "$$");
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    L(this, "$$set");
  }
  /** @returns {void} */
  $destroy() {
    D(this, 1), this.$destroy = oe;
  }
  /**
   * @template {Extract<keyof Events, string>} K
   * @param {K} type
   * @param {((e: Events[K]) => void) | null | undefined} callback
   * @returns {() => void}
   */
  $on(e, t) {
    if (!$e(t))
      return oe;
    const i = this.$$.callbacks[e] || (this.$$.callbacks[e] = []);
    return i.push(t), () => {
      const l = i.indexOf(t);
      l !== -1 && i.splice(l, 1);
    };
  }
  /**
   * @param {Partial<Props>} props
   * @returns {void}
   */
  $set(e) {
    this.$$set && !bt(e) && (this.$$.skip_bound = !0, this.$$set(e), this.$$.skip_bound = !1);
  }
}
const xt = "4";
typeof window < "u" && (window.__svelte || (window.__svelte = { v: /* @__PURE__ */ new Set() })).v.add(xt);
const { window: Ce } = mt;
function Tt(n) {
  ae(n, "svelte-33ch74", ".tooltipWrap.svelte-33ch74{position:relative;display:inline-flex;align-items:center}.trigger.svelte-33ch74{display:inline-flex;align-items:center}");
}
const jt = (n) => ({}), xe = (n) => ({}), Dt = (n) => ({}), Te = (n) => ({});
function Pt(n) {
  let e, t, i, l, r, a, s, f, c, u, d;
  const p = (
    /*#slots*/
    n[13].trigger
  ), g = pe(
    p,
    n,
    /*$$scope*/
    n[12],
    Te
  ), b = (
    /*#slots*/
    n[13].content
  ), y = pe(
    b,
    n,
    /*$$scope*/
    n[12],
    xe
  );
  return {
    c() {
      e = x("span"), t = x("span"), g && g.c(), i = V(), l = x("span"), r = x("span"), y && y.c(), a = V(), s = x("span"), o(t, "class", "trigger svelte-33ch74"), o(r, "class", "content"), o(s, "class", "bl_tooltipArrow"), o(s, "aria-hidden", "true"), o(
        s,
        "style",
        /*arrowStyle*/
        n[5]
      ), o(l, "class", "bl_tooltip"), o(l, "role", "tooltip"), o(l, "aria-hidden", f = !/*open*/
      n[0]), o(
        l,
        "data-open",
        /*open*/
        n[0]
      ), o(
        l,
        "data-placement",
        /*effectivePlacement*/
        n[3]
      ), o(
        l,
        "style",
        /*tooltipStyle*/
        n[4]
      ), o(e, "class", "tooltipWrap svelte-33ch74"), o(e, "role", "group");
    },
    m(M, $) {
      k(M, e, $), _(e, t), g && g.m(t, null), n[14](t), _(e, i), _(e, l), _(l, r), y && y.m(r, null), _(l, a), _(l, s), n[15](l), c = !0, u || (d = [
        I(
          Ce,
          "resize",
          /*onWindowChange*/
          n[9]
        ),
        I(
          Ce,
          "scroll",
          /*onWindowChange*/
          n[9]
        ),
        _t(
          /*portalToBody*/
          n[6].call(null, l)
        ),
        I(
          e,
          "mouseenter",
          /*onEnter*/
          n[7]
        ),
        I(
          e,
          "mouseleave",
          /*onLeave*/
          n[8]
        ),
        I(
          e,
          "focusin",
          /*onEnter*/
          n[7]
        ),
        I(
          e,
          "focusout",
          /*onLeave*/
          n[8]
        )
      ], u = !0);
    },
    p(M, [$]) {
      g && g.p && (!c || $ & /*$$scope*/
      4096) && _e(
        g,
        p,
        M,
        /*$$scope*/
        M[12],
        c ? be(
          p,
          /*$$scope*/
          M[12],
          $,
          Dt
        ) : me(
          /*$$scope*/
          M[12]
        ),
        Te
      ), y && y.p && (!c || $ & /*$$scope*/
      4096) && _e(
        y,
        b,
        M,
        /*$$scope*/
        M[12],
        c ? be(
          b,
          /*$$scope*/
          M[12],
          $,
          jt
        ) : me(
          /*$$scope*/
          M[12]
        ),
        xe
      ), (!c || $ & /*arrowStyle*/
      32) && o(
        s,
        "style",
        /*arrowStyle*/
        M[5]
      ), (!c || $ & /*open*/
      1 && f !== (f = !/*open*/
      M[0])) && o(l, "aria-hidden", f), (!c || $ & /*open*/
      1) && o(
        l,
        "data-open",
        /*open*/
        M[0]
      ), (!c || $ & /*effectivePlacement*/
      8) && o(
        l,
        "data-placement",
        /*effectivePlacement*/
        M[3]
      ), (!c || $ & /*tooltipStyle*/
      16) && o(
        l,
        "style",
        /*tooltipStyle*/
        M[4]
      );
    },
    i(M) {
      c || (S(g, M), S(y, M), c = !0);
    },
    o(M) {
      B(g, M), B(y, M), c = !1;
    },
    d(M) {
      M && v(e), g && g.d(M), n[14](null), y && y.d(M), n[15](null), u = !1, ee(d);
    }
  };
}
const Y = 10, J = 8, je = "badge-lib-tooltip-global-v1";
function de(n, e, t) {
  return Math.max(e, Math.min(t, n));
}
function Et(n, e, t) {
  const i = window.innerWidth, l = window.innerHeight, r = e.top - Y - t.height >= J, a = e.bottom + Y + t.height <= l - J, s = e.left - Y - t.width >= J, f = e.right + Y + t.width <= i - J;
  return n === "top" && !r && a ? "bottom" : n === "bottom" && !a && r ? "top" : n === "left" && !s && f ? "right" : n === "right" && !f && s ? "left" : n;
}
function Nt(n, e, t) {
  let { $$slots: i = {}, $$scope: l } = e, { placement: r = "top" } = e, { openDelayMs: a = 80 } = e, s = !1, f = null, c = null, u = null, d = r, p = "", g = "";
  const b = `
.bl_tooltip {
  display: block;
  position: fixed;
  z-index: 2000;
  width: max-content;
  max-width: min(280px, 64vw);
  padding: 7px 9px;
  border-radius: 9px;
  border: 1px solid rgba(17, 24, 39, 0.14);
  background: rgba(17, 24, 39, 0.96);
  color: #ffffff;
  box-shadow: 0 10px 24px rgba(17, 24, 39, 0.2);
  font-size: 12px;
  line-height: 1.3;
  opacity: 0;
  visibility: hidden;
  transform: translateY(-6px);
  pointer-events: none;
  transition: opacity 180ms ease, transform 180ms ease;
}

.bl_tooltip[data-open='true'] {
  opacity: 1;
  visibility: visible;
  transform: translateY(0);
}

.bl_tooltipArrow {
  position: absolute;
  width: 8px;
  height: 8px;
  background: rgba(17, 24, 39, 0.96);
  border-left: 1px solid rgba(17, 24, 39, 0.14);
  border-top: 1px solid rgba(17, 24, 39, 0.14);
  transform: rotate(45deg);
}

.bl_tooltip[data-placement='top'] .bl_tooltipArrow {
  bottom: -4px;
}

.bl_tooltip[data-placement='bottom'] .bl_tooltipArrow {
  top: -4px;
  transform: rotate(225deg);
}

.bl_tooltip[data-placement='left'] .bl_tooltipArrow {
  right: -4px;
  transform: rotate(135deg);
}

.bl_tooltip[data-placement='right'] .bl_tooltipArrow {
  left: -4px;
  transform: rotate(-45deg);
}
`;
  function y() {
    if (typeof document > "u" || document.getElementById(je)) return;
    const h = document.createElement("style");
    h.id = je, h.textContent = b, document.head.appendChild(h);
  }
  function M(h) {
    if (y(), !(typeof document > "u"))
      return document.body.appendChild(h), {
        destroy() {
          h.remove();
        }
      };
  }
  function $() {
    f && clearTimeout(f), f = setTimeout(() => t(0, s = !0), a);
  }
  function C() {
    f && clearTimeout(f), f = null, t(0, s = !1);
  }
  async function z() {
    if (!s || !c || !u) return;
    await $t();
    const h = c.getBoundingClientRect(), T = u.getBoundingClientRect(), O = window.innerWidth, ie = window.innerHeight;
    t(3, d = Et(r, h, T));
    let U = 0, X = 0;
    d === "top" ? (X = h.top - Y - T.height, U = h.left + h.width / 2 - T.width / 2) : d === "bottom" ? (X = h.bottom + Y, U = h.left + h.width / 2 - T.width / 2) : d === "left" ? (X = h.top + h.height / 2 - T.height / 2, U = h.left - Y - T.width) : (X = h.top + h.height / 2 - T.height / 2, U = h.right + Y), U = de(U, J, O - T.width - J), X = de(X, J, ie - T.height - J);
    const ft = h.left + h.width / 2, ct = h.top + h.height / 2, ut = de(ft - U - 4, 10, T.width - 10), dt = de(ct - X - 4, 10, T.height - 10);
    t(5, g = d === "top" || d === "bottom" ? `left:${ut}px;` : `top:${dt}px;`), t(4, p = `left:${Math.round(U)}px;top:${Math.round(X)}px;`);
  }
  function P() {
    z();
  }
  function K(h) {
    ve[h ? "unshift" : "push"](() => {
      c = h, t(1, c);
    });
  }
  function G(h) {
    ve[h ? "unshift" : "push"](() => {
      u = h, t(2, u);
    });
  }
  return n.$$set = (h) => {
    "placement" in h && t(10, r = h.placement), "openDelayMs" in h && t(11, a = h.openDelayMs), "$$scope" in h && t(12, l = h.$$scope);
  }, n.$$.update = () => {
    n.$$.dirty & /*open*/
    1 && s && z(), n.$$.dirty & /*open, placement*/
    1025 && (s || (t(4, p = ""), t(5, g = ""), t(3, d = r)));
  }, [
    s,
    c,
    u,
    d,
    p,
    g,
    M,
    $,
    C,
    P,
    r,
    a,
    l,
    i,
    K,
    G
  ];
}
class it extends W {
  constructor(e) {
    super(), H(this, e, Nt, Pt, Z, { placement: 10, openDelayMs: 11 }, Tt);
  }
  get placement() {
    return this.$$.ctx[10];
  }
  set placement(e) {
    this.$$set({ placement: e }), w();
  }
  get openDelayMs() {
    return this.$$.ctx[11];
  }
  set openDelayMs(e) {
    this.$$set({ openDelayMs: e }), w();
  }
}
q(it, { placement: {}, openDelayMs: {} }, ["trigger", "content"], [], !0);
function Ot(n) {
  let e;
  return {
    c() {
      e = x("span"), fe(e, "display", "inline-block"), fe(
        e,
        "width",
        /*size*/
        n[1] + "px"
      ), fe(
        e,
        "height",
        /*size*/
        n[1] + "px"
      ), o(e, "aria-hidden", "true");
    },
    m(t, i) {
      k(t, e, i);
    },
    p(t, i) {
      i & /*size*/
      2 && fe(
        e,
        "width",
        /*size*/
        t[1] + "px"
      ), i & /*size*/
      2 && fe(
        e,
        "height",
        /*size*/
        t[1] + "px"
      );
    },
    d(t) {
      t && v(e);
    }
  };
}
function Lt(n) {
  let e, t, i, l, r, a, s = (
    /*bg*/
    n[2] && De(n)
  );
  return {
    c() {
      e = m("svg"), s && s.c(), t = m("g"), i = m("path"), l = m("path"), r = m("path"), o(i, "d", "M15 3h6v6"), o(l, "d", "M10 14 21 3"), o(r, "d", "M21 13v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7"), o(t, "transform", "translate(12 12) scale(0.68) translate(-12 -12)"), o(
        e,
        "width",
        /*size*/
        n[1]
      ), o(
        e,
        "height",
        /*size*/
        n[1]
      ), o(e, "viewBox", "0 0 24 24"), o(e, "fill", "none"), o(e, "aria-hidden", "true"), o(e, "stroke", a = /*fg*/
      n[3] ?? "currentColor"), o(e, "stroke-width", "2"), o(e, "stroke-linecap", "round"), o(e, "stroke-linejoin", "round");
    },
    m(f, c) {
      k(f, e, c), s && s.m(e, null), _(e, t), _(t, i), _(t, l), _(t, r);
    },
    p(f, c) {
      /*bg*/
      f[2] ? s ? s.p(f, c) : (s = De(f), s.c(), s.m(e, t)) : s && (s.d(1), s = null), c & /*size*/
      2 && o(
        e,
        "width",
        /*size*/
        f[1]
      ), c & /*size*/
      2 && o(
        e,
        "height",
        /*size*/
        f[1]
      ), c & /*fg*/
      8 && a !== (a = /*fg*/
      f[3] ?? "currentColor") && o(e, "stroke", a);
    },
    d(f) {
      f && v(e), s && s.d();
    }
  };
}
function At(n) {
  let e, t, i, l, r, a, s = (
    /*bg*/
    n[2] && Pe(n)
  );
  return {
    c() {
      e = m("svg"), s && s.c(), t = m("g"), i = m("path"), l = m("path"), r = m("path"), o(i, "d", "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"), o(l, "d", "M7 10l5 5 5-5"), o(r, "d", "M12 15V3"), o(t, "transform", "translate(12 12) scale(0.68) translate(-12 -12)"), o(
        e,
        "width",
        /*size*/
        n[1]
      ), o(
        e,
        "height",
        /*size*/
        n[1]
      ), o(e, "viewBox", "0 0 24 24"), o(e, "fill", "none"), o(e, "aria-hidden", "true"), o(e, "stroke", a = /*fg*/
      n[3] ?? "currentColor"), o(e, "stroke-width", "2"), o(e, "stroke-linecap", "round"), o(e, "stroke-linejoin", "round");
    },
    m(f, c) {
      k(f, e, c), s && s.m(e, null), _(e, t), _(t, i), _(t, l), _(t, r);
    },
    p(f, c) {
      /*bg*/
      f[2] ? s ? s.p(f, c) : (s = Pe(f), s.c(), s.m(e, t)) : s && (s.d(1), s = null), c & /*size*/
      2 && o(
        e,
        "width",
        /*size*/
        f[1]
      ), c & /*size*/
      2 && o(
        e,
        "height",
        /*size*/
        f[1]
      ), c & /*fg*/
      8 && a !== (a = /*fg*/
      f[3] ?? "currentColor") && o(e, "stroke", a);
    },
    d(f) {
      f && v(e), s && s.d();
    }
  };
}
function Ft(n) {
  let e, t, i, l, r, a;
  return {
    c() {
      e = m("svg"), t = m("g"), i = m("path"), r = m("path"), o(i, "d", "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"), o(i, "fill", l = /*bg*/
      n[2] ?? "none"), o(
        i,
        "opacity",
        /*bgOpacity*/
        n[4]
      ), o(r, "d", "m9 12 2 2 4-4"), o(t, "transform", "translate(12 12) scale(0.86) translate(-12 -12)"), o(
        e,
        "width",
        /*size*/
        n[1]
      ), o(
        e,
        "height",
        /*size*/
        n[1]
      ), o(e, "viewBox", "0 0 24 24"), o(e, "fill", "none"), o(e, "aria-hidden", "true"), o(e, "stroke", a = /*fg*/
      n[3] ?? "currentColor"), o(e, "stroke-width", "2"), o(e, "stroke-linecap", "round"), o(e, "stroke-linejoin", "round");
    },
    m(s, f) {
      k(s, e, f), _(e, t), _(t, i), _(t, r);
    },
    p(s, f) {
      f & /*bg*/
      4 && l !== (l = /*bg*/
      s[2] ?? "none") && o(i, "fill", l), f & /*bgOpacity*/
      16 && o(
        i,
        "opacity",
        /*bgOpacity*/
        s[4]
      ), f & /*size*/
      2 && o(
        e,
        "width",
        /*size*/
        s[1]
      ), f & /*size*/
      2 && o(
        e,
        "height",
        /*size*/
        s[1]
      ), f & /*fg*/
      8 && a !== (a = /*fg*/
      s[3] ?? "currentColor") && o(e, "stroke", a);
    },
    d(s) {
      s && v(e);
    }
  };
}
function It(n) {
  let e, t, i, l, r, a;
  function s(u, d) {
    return (
      /*bg*/
      u[2] ? Kt : Jt
    );
  }
  let f = s(n), c = f(n);
  return {
    c() {
      e = m("svg"), c.c(), t = m("g"), i = m("ellipse"), l = m("path"), r = m("path"), o(i, "cx", "12"), o(i, "cy", "5"), o(i, "rx", "9"), o(i, "ry", "3"), o(l, "d", "M3 5v14c0 1.7 4 3 9 3s9-1.3 9-3V5"), o(r, "d", "M3 12c0 1.7 4 3 9 3s9-1.3 9-3"), o(t, "transform", "translate(12 12) scale(0.68) translate(-12 -12)"), o(
        e,
        "width",
        /*size*/
        n[1]
      ), o(
        e,
        "height",
        /*size*/
        n[1]
      ), o(e, "viewBox", "0 0 24 24"), o(e, "fill", "none"), o(e, "aria-hidden", "true"), o(e, "stroke", a = /*fg*/
      n[3] ?? "currentColor"), o(e, "stroke-width", "2"), o(e, "stroke-linecap", "round"), o(e, "stroke-linejoin", "round");
    },
    m(u, d) {
      k(u, e, d), c.m(e, null), _(e, t), _(t, i), _(t, l), _(t, r);
    },
    p(u, d) {
      f === (f = s(u)) && c ? c.p(u, d) : (c.d(1), c = f(u), c && (c.c(), c.m(e, t))), d & /*size*/
      2 && o(
        e,
        "width",
        /*size*/
        u[1]
      ), d & /*size*/
      2 && o(
        e,
        "height",
        /*size*/
        u[1]
      ), d & /*fg*/
      8 && a !== (a = /*fg*/
      u[3] ?? "currentColor") && o(e, "stroke", a);
    },
    d(u) {
      u && v(e), c.d();
    }
  };
}
function Vt(n) {
  let e, t, i, l, r, a, s;
  function f(d, p) {
    return (
      /*bg*/
      d[2] ? ii : ti
    );
  }
  let c = f(n), u = c(n);
  return {
    c() {
      e = m("svg"), u.c(), t = m("g"), i = m("polyline"), l = m("polyline"), r = m("line"), a = m("line"), o(i, "points", "15 3 21 3 21 9"), o(l, "points", "9 21 3 21 3 15"), o(r, "x1", "21"), o(r, "y1", "3"), o(r, "x2", "14"), o(r, "y2", "10"), o(a, "x1", "3"), o(a, "y1", "21"), o(a, "x2", "10"), o(a, "y2", "14"), o(t, "transform", "translate(12 12) scale(0.68) translate(-12 -12)"), o(
        e,
        "width",
        /*size*/
        n[1]
      ), o(
        e,
        "height",
        /*size*/
        n[1]
      ), o(e, "viewBox", "0 0 24 24"), o(e, "fill", "none"), o(e, "aria-hidden", "true"), o(e, "stroke", s = /*fg*/
      n[3] ?? "currentColor"), o(e, "stroke-width", "2"), o(e, "stroke-linecap", "round"), o(e, "stroke-linejoin", "round");
    },
    m(d, p) {
      k(d, e, p), u.m(e, null), _(e, t), _(t, i), _(t, l), _(t, r), _(t, a);
    },
    p(d, p) {
      c === (c = f(d)) && u ? u.p(d, p) : (u.d(1), u = c(d), u && (u.c(), u.m(e, t))), p & /*size*/
      2 && o(
        e,
        "width",
        /*size*/
        d[1]
      ), p & /*size*/
      2 && o(
        e,
        "height",
        /*size*/
        d[1]
      ), p & /*fg*/
      8 && s !== (s = /*fg*/
      d[3] ?? "currentColor") && o(e, "stroke", s);
    },
    d(d) {
      d && v(e), u.d();
    }
  };
}
function Zt(n) {
  let e, t, i, l, r, a, s, f;
  function c(p, g) {
    return (
      /*bg*/
      p[2] ? oi : ri
    );
  }
  let u = c(n), d = u(n);
  return {
    c() {
      e = m("svg"), d.c(), t = m("g"), i = m("path"), l = m("path"), r = m("path"), a = m("path"), s = m("path"), o(i, "d", "M14 4.1 12 6"), o(l, "d", "m5.1 8-2.9-.8"), o(r, "d", "m6 12-1.9 2"), o(a, "d", "M7.2 2.2 8 5.1"), o(s, "d", "M9.037 9.69a.498.498 0 0 1 .653-.653l11 4.5a.5.5 0 0 1-.074.949l-4.349 1.041a1 1 0 0 0-.74.739l-1.04 4.35a.5.5 0 0 1-.95.074z"), o(t, "transform", "translate(12 12) scale(0.68) translate(-12 -12)"), o(
        e,
        "width",
        /*size*/
        n[1]
      ), o(
        e,
        "height",
        /*size*/
        n[1]
      ), o(e, "viewBox", "0 0 24 24"), o(e, "fill", "none"), o(e, "aria-hidden", "true"), o(e, "stroke", f = /*fg*/
      n[3] ?? "currentColor"), o(e, "stroke-width", "2"), o(e, "stroke-linecap", "round"), o(e, "stroke-linejoin", "round");
    },
    m(p, g) {
      k(p, e, g), d.m(e, null), _(e, t), _(t, i), _(t, l), _(t, r), _(t, a), _(t, s);
    },
    p(p, g) {
      u === (u = c(p)) && d ? d.p(p, g) : (d.d(1), d = u(p), d && (d.c(), d.m(e, t))), g & /*size*/
      2 && o(
        e,
        "width",
        /*size*/
        p[1]
      ), g & /*size*/
      2 && o(
        e,
        "height",
        /*size*/
        p[1]
      ), g & /*fg*/
      8 && f !== (f = /*fg*/
      p[3] ?? "currentColor") && o(e, "stroke", f);
    },
    d(p) {
      p && v(e), d.d();
    }
  };
}
function Rt(n) {
  let e, t, i, l, r;
  function a(c, u) {
    return (
      /*bg*/
      c[2] ? ci : fi
    );
  }
  let s = a(n), f = s(n);
  return {
    c() {
      e = m("svg"), f.c(), t = m("path"), l = m("path"), o(t, "d", "M12 10.2a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"), o(t, "fill", i = /*fg*/
      n[3] ?? "currentColor"), o(l, "d", "M11 11.5h2V18h-2v-6.5Z"), o(l, "fill", r = /*fg*/
      n[3] ?? "currentColor"), o(
        e,
        "width",
        /*size*/
        n[1]
      ), o(
        e,
        "height",
        /*size*/
        n[1]
      ), o(e, "viewBox", "0 0 24 24"), o(e, "fill", "none"), o(e, "aria-hidden", "true");
    },
    m(c, u) {
      k(c, e, u), f.m(e, null), _(e, t), _(e, l);
    },
    p(c, u) {
      s === (s = a(c)) && f ? f.p(c, u) : (f.d(1), f = s(c), f && (f.c(), f.m(e, t))), u & /*fg*/
      8 && i !== (i = /*fg*/
      c[3] ?? "currentColor") && o(t, "fill", i), u & /*fg*/
      8 && r !== (r = /*fg*/
      c[3] ?? "currentColor") && o(l, "fill", r), u & /*size*/
      2 && o(
        e,
        "width",
        /*size*/
        c[1]
      ), u & /*size*/
      2 && o(
        e,
        "height",
        /*size*/
        c[1]
      );
    },
    d(c) {
      c && v(e), f.d();
    }
  };
}
function Ht(n) {
  let e, t, i, l, r;
  function a(c, u) {
    return (
      /*bg*/
      c[2] ? hi : gi
    );
  }
  let s = a(n), f = s(n);
  return {
    c() {
      e = m("svg"), f.c(), t = m("path"), l = m("path"), o(t, "d", "M12 10.2a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"), o(t, "fill", i = /*fg*/
      n[3] ?? "currentColor"), o(l, "d", "M11 11.5h2V18h-2v-6.5Z"), o(l, "fill", r = /*fg*/
      n[3] ?? "currentColor"), o(
        e,
        "width",
        /*size*/
        n[1]
      ), o(
        e,
        "height",
        /*size*/
        n[1]
      ), o(e, "viewBox", "0 0 24 24"), o(e, "fill", "none"), o(e, "aria-hidden", "true");
    },
    m(c, u) {
      k(c, e, u), f.m(e, null), _(e, t), _(e, l);
    },
    p(c, u) {
      s === (s = a(c)) && f ? f.p(c, u) : (f.d(1), f = s(c), f && (f.c(), f.m(e, t))), u & /*fg*/
      8 && i !== (i = /*fg*/
      c[3] ?? "currentColor") && o(t, "fill", i), u & /*fg*/
      8 && r !== (r = /*fg*/
      c[3] ?? "currentColor") && o(l, "fill", r), u & /*size*/
      2 && o(
        e,
        "width",
        /*size*/
        c[1]
      ), u & /*size*/
      2 && o(
        e,
        "height",
        /*size*/
        c[1]
      );
    },
    d(c) {
      c && v(e), f.d();
    }
  };
}
function qt(n) {
  let e, t, i, l, r, a, s;
  return {
    c() {
      e = m("svg"), t = m("path"), l = m("path"), a = m("path"), o(t, "d", "M12 3.5c.4 0 .8.2 1 .6l9 15.6c.4.7-.1 1.6-1 1.6H3c-.9 0-1.4-.9-1-1.6l9-15.6c.2-.4.6-.6 1-.6Z"), o(t, "fill", i = /*bg*/
      n[2] ?? "currentColor"), o(
        t,
        "opacity",
        /*bgOpacity*/
        n[4]
      ), o(l, "d", "M12 8a1 1 0 0 1 1 1l-.3 5.5a.7.7 0 0 1-1.4 0L11 9a1 1 0 0 1 1-1Z"), o(l, "fill", r = /*fg*/
      n[3] ?? "currentColor"), o(a, "d", "M12 18a1.25 1.25 0 1 1 0-2.5A1.25 1.25 0 0 1 12 18Z"), o(a, "fill", s = /*fg*/
      n[3] ?? "currentColor"), o(
        e,
        "width",
        /*size*/
        n[1]
      ), o(
        e,
        "height",
        /*size*/
        n[1]
      ), o(e, "viewBox", "0 0 24 24"), o(e, "fill", "none"), o(e, "aria-hidden", "true");
    },
    m(f, c) {
      k(f, e, c), _(e, t), _(e, l), _(e, a);
    },
    p(f, c) {
      c & /*bg*/
      4 && i !== (i = /*bg*/
      f[2] ?? "currentColor") && o(t, "fill", i), c & /*bgOpacity*/
      16 && o(
        t,
        "opacity",
        /*bgOpacity*/
        f[4]
      ), c & /*fg*/
      8 && r !== (r = /*fg*/
      f[3] ?? "currentColor") && o(l, "fill", r), c & /*fg*/
      8 && s !== (s = /*fg*/
      f[3] ?? "currentColor") && o(a, "fill", s), c & /*size*/
      2 && o(
        e,
        "width",
        /*size*/
        f[1]
      ), c & /*size*/
      2 && o(
        e,
        "height",
        /*size*/
        f[1]
      );
    },
    d(f) {
      f && v(e);
    }
  };
}
function Wt(n) {
  let e, t, i;
  function l(s, f) {
    return (
      /*bg*/
      s[2] ? mi : _i
    );
  }
  let r = l(n), a = r(n);
  return {
    c() {
      e = m("svg"), a.c(), t = m("path"), o(t, "d", "M9.2 12.5 7.5 10.8a1 1 0 0 0-1.4 1.4l2.4 2.4a1 1 0 0 0 1.4 0l7-7a1 1 0 1 0-1.4-1.4l-6.3 6.3Z"), o(t, "fill", i = /*fg*/
      n[3] ?? "currentColor"), o(
        e,
        "width",
        /*size*/
        n[1]
      ), o(
        e,
        "height",
        /*size*/
        n[1]
      ), o(e, "viewBox", "0 0 24 24"), o(e, "fill", "none"), o(e, "aria-hidden", "true");
    },
    m(s, f) {
      k(s, e, f), a.m(e, null), _(e, t);
    },
    p(s, f) {
      r === (r = l(s)) && a ? a.p(s, f) : (a.d(1), a = r(s), a && (a.c(), a.m(e, t))), f & /*fg*/
      8 && i !== (i = /*fg*/
      s[3] ?? "currentColor") && o(t, "fill", i), f & /*size*/
      2 && o(
        e,
        "width",
        /*size*/
        s[1]
      ), f & /*size*/
      2 && o(
        e,
        "height",
        /*size*/
        s[1]
      );
    },
    d(s) {
      s && v(e), a.d();
    }
  };
}
function De(n) {
  let e;
  function t(r, a) {
    return (
      /*bgShape*/
      r[5] === "square" ? Ut : Gt
    );
  }
  let i = t(n), l = i(n);
  return {
    c() {
      l.c(), e = N();
    },
    m(r, a) {
      l.m(r, a), k(r, e, a);
    },
    p(r, a) {
      i === (i = t(r)) && l ? l.p(r, a) : (l.d(1), l = i(r), l && (l.c(), l.m(e.parentNode, e)));
    },
    d(r) {
      r && v(e), l.d(r);
    }
  };
}
function Gt(n) {
  let e;
  return {
    c() {
      e = m("circle"), o(e, "cx", "12"), o(e, "cy", "12"), o(e, "r", "10"), o(
        e,
        "fill",
        /*bg*/
        n[2]
      ), o(
        e,
        "opacity",
        /*bgOpacity*/
        n[4]
      ), o(e, "stroke", "none");
    },
    m(t, i) {
      k(t, e, i);
    },
    p(t, i) {
      i & /*bg*/
      4 && o(
        e,
        "fill",
        /*bg*/
        t[2]
      ), i & /*bgOpacity*/
      16 && o(
        e,
        "opacity",
        /*bgOpacity*/
        t[4]
      );
    },
    d(t) {
      t && v(e);
    }
  };
}
function Ut(n) {
  let e;
  return {
    c() {
      e = m("rect"), o(e, "x", "3"), o(e, "y", "3"), o(e, "width", "18"), o(e, "height", "18"), o(e, "rx", "0"), o(
        e,
        "fill",
        /*bg*/
        n[2]
      ), o(
        e,
        "opacity",
        /*bgOpacity*/
        n[4]
      ), o(e, "stroke", "none");
    },
    m(t, i) {
      k(t, e, i);
    },
    p(t, i) {
      i & /*bg*/
      4 && o(
        e,
        "fill",
        /*bg*/
        t[2]
      ), i & /*bgOpacity*/
      16 && o(
        e,
        "opacity",
        /*bgOpacity*/
        t[4]
      );
    },
    d(t) {
      t && v(e);
    }
  };
}
function Pe(n) {
  let e;
  function t(r, a) {
    return (
      /*bgShape*/
      r[5] === "square" ? Yt : Xt
    );
  }
  let i = t(n), l = i(n);
  return {
    c() {
      l.c(), e = N();
    },
    m(r, a) {
      l.m(r, a), k(r, e, a);
    },
    p(r, a) {
      i === (i = t(r)) && l ? l.p(r, a) : (l.d(1), l = i(r), l && (l.c(), l.m(e.parentNode, e)));
    },
    d(r) {
      r && v(e), l.d(r);
    }
  };
}
function Xt(n) {
  let e;
  return {
    c() {
      e = m("circle"), o(e, "cx", "12"), o(e, "cy", "12"), o(e, "r", "10"), o(
        e,
        "fill",
        /*bg*/
        n[2]
      ), o(
        e,
        "opacity",
        /*bgOpacity*/
        n[4]
      ), o(e, "stroke", "none");
    },
    m(t, i) {
      k(t, e, i);
    },
    p(t, i) {
      i & /*bg*/
      4 && o(
        e,
        "fill",
        /*bg*/
        t[2]
      ), i & /*bgOpacity*/
      16 && o(
        e,
        "opacity",
        /*bgOpacity*/
        t[4]
      );
    },
    d(t) {
      t && v(e);
    }
  };
}
function Yt(n) {
  let e;
  return {
    c() {
      e = m("rect"), o(e, "x", "3"), o(e, "y", "3"), o(e, "width", "18"), o(e, "height", "18"), o(e, "rx", "0"), o(
        e,
        "fill",
        /*bg*/
        n[2]
      ), o(
        e,
        "opacity",
        /*bgOpacity*/
        n[4]
      ), o(e, "stroke", "none");
    },
    m(t, i) {
      k(t, e, i);
    },
    p(t, i) {
      i & /*bg*/
      4 && o(
        e,
        "fill",
        /*bg*/
        t[2]
      ), i & /*bgOpacity*/
      16 && o(
        e,
        "opacity",
        /*bgOpacity*/
        t[4]
      );
    },
    d(t) {
      t && v(e);
    }
  };
}
function Jt(n) {
  let e;
  return {
    c() {
      e = m("path"), o(e, "d", "M3 3h18v18H3V3Z"), o(e, "fill", "currentColor"), o(
        e,
        "opacity",
        /*bgOpacity*/
        n[4]
      ), o(e, "stroke", "none");
    },
    m(t, i) {
      k(t, e, i);
    },
    p(t, i) {
      i & /*bgOpacity*/
      16 && o(
        e,
        "opacity",
        /*bgOpacity*/
        t[4]
      );
    },
    d(t) {
      t && v(e);
    }
  };
}
function Kt(n) {
  let e;
  function t(r, a) {
    return (
      /*bgShape*/
      r[5] === "square" ? ei : Qt
    );
  }
  let i = t(n), l = i(n);
  return {
    c() {
      l.c(), e = N();
    },
    m(r, a) {
      l.m(r, a), k(r, e, a);
    },
    p(r, a) {
      i === (i = t(r)) && l ? l.p(r, a) : (l.d(1), l = i(r), l && (l.c(), l.m(e.parentNode, e)));
    },
    d(r) {
      r && v(e), l.d(r);
    }
  };
}
function Qt(n) {
  let e;
  return {
    c() {
      e = m("circle"), o(e, "cx", "12"), o(e, "cy", "12"), o(e, "r", "10"), o(
        e,
        "fill",
        /*bg*/
        n[2]
      ), o(
        e,
        "opacity",
        /*bgOpacity*/
        n[4]
      ), o(e, "stroke", "none");
    },
    m(t, i) {
      k(t, e, i);
    },
    p(t, i) {
      i & /*bg*/
      4 && o(
        e,
        "fill",
        /*bg*/
        t[2]
      ), i & /*bgOpacity*/
      16 && o(
        e,
        "opacity",
        /*bgOpacity*/
        t[4]
      );
    },
    d(t) {
      t && v(e);
    }
  };
}
function ei(n) {
  let e;
  return {
    c() {
      e = m("rect"), o(e, "x", "3"), o(e, "y", "3"), o(e, "width", "18"), o(e, "height", "18"), o(e, "rx", "0"), o(
        e,
        "fill",
        /*bg*/
        n[2]
      ), o(
        e,
        "opacity",
        /*bgOpacity*/
        n[4]
      ), o(e, "stroke", "none");
    },
    m(t, i) {
      k(t, e, i);
    },
    p(t, i) {
      i & /*bg*/
      4 && o(
        e,
        "fill",
        /*bg*/
        t[2]
      ), i & /*bgOpacity*/
      16 && o(
        e,
        "opacity",
        /*bgOpacity*/
        t[4]
      );
    },
    d(t) {
      t && v(e);
    }
  };
}
function ti(n) {
  let e;
  return {
    c() {
      e = m("path"), o(e, "d", "M3 3h18v18H3V3Z"), o(e, "fill", "currentColor"), o(
        e,
        "opacity",
        /*bgOpacity*/
        n[4]
      ), o(e, "stroke", "none");
    },
    m(t, i) {
      k(t, e, i);
    },
    p(t, i) {
      i & /*bgOpacity*/
      16 && o(
        e,
        "opacity",
        /*bgOpacity*/
        t[4]
      );
    },
    d(t) {
      t && v(e);
    }
  };
}
function ii(n) {
  let e;
  function t(r, a) {
    return (
      /*bgShape*/
      r[5] === "square" ? li : ni
    );
  }
  let i = t(n), l = i(n);
  return {
    c() {
      l.c(), e = N();
    },
    m(r, a) {
      l.m(r, a), k(r, e, a);
    },
    p(r, a) {
      i === (i = t(r)) && l ? l.p(r, a) : (l.d(1), l = i(r), l && (l.c(), l.m(e.parentNode, e)));
    },
    d(r) {
      r && v(e), l.d(r);
    }
  };
}
function ni(n) {
  let e;
  return {
    c() {
      e = m("circle"), o(e, "cx", "12"), o(e, "cy", "12"), o(e, "r", "10"), o(
        e,
        "fill",
        /*bg*/
        n[2]
      ), o(
        e,
        "opacity",
        /*bgOpacity*/
        n[4]
      ), o(e, "stroke", "none");
    },
    m(t, i) {
      k(t, e, i);
    },
    p(t, i) {
      i & /*bg*/
      4 && o(
        e,
        "fill",
        /*bg*/
        t[2]
      ), i & /*bgOpacity*/
      16 && o(
        e,
        "opacity",
        /*bgOpacity*/
        t[4]
      );
    },
    d(t) {
      t && v(e);
    }
  };
}
function li(n) {
  let e;
  return {
    c() {
      e = m("rect"), o(e, "x", "3"), o(e, "y", "3"), o(e, "width", "18"), o(e, "height", "18"), o(e, "rx", "0"), o(
        e,
        "fill",
        /*bg*/
        n[2]
      ), o(
        e,
        "opacity",
        /*bgOpacity*/
        n[4]
      ), o(e, "stroke", "none");
    },
    m(t, i) {
      k(t, e, i);
    },
    p(t, i) {
      i & /*bg*/
      4 && o(
        e,
        "fill",
        /*bg*/
        t[2]
      ), i & /*bgOpacity*/
      16 && o(
        e,
        "opacity",
        /*bgOpacity*/
        t[4]
      );
    },
    d(t) {
      t && v(e);
    }
  };
}
function ri(n) {
  let e;
  return {
    c() {
      e = m("path"), o(e, "d", "M3 3h18v18H3V3Z"), o(e, "fill", "currentColor"), o(
        e,
        "opacity",
        /*bgOpacity*/
        n[4]
      ), o(e, "stroke", "none");
    },
    m(t, i) {
      k(t, e, i);
    },
    p(t, i) {
      i & /*bgOpacity*/
      16 && o(
        e,
        "opacity",
        /*bgOpacity*/
        t[4]
      );
    },
    d(t) {
      t && v(e);
    }
  };
}
function oi(n) {
  let e;
  function t(r, a) {
    return (
      /*bgShape*/
      r[5] === "square" ? si : ai
    );
  }
  let i = t(n), l = i(n);
  return {
    c() {
      l.c(), e = N();
    },
    m(r, a) {
      l.m(r, a), k(r, e, a);
    },
    p(r, a) {
      i === (i = t(r)) && l ? l.p(r, a) : (l.d(1), l = i(r), l && (l.c(), l.m(e.parentNode, e)));
    },
    d(r) {
      r && v(e), l.d(r);
    }
  };
}
function ai(n) {
  let e;
  return {
    c() {
      e = m("circle"), o(e, "cx", "12"), o(e, "cy", "12"), o(e, "r", "10"), o(
        e,
        "fill",
        /*bg*/
        n[2]
      ), o(
        e,
        "opacity",
        /*bgOpacity*/
        n[4]
      ), o(e, "stroke", "none");
    },
    m(t, i) {
      k(t, e, i);
    },
    p(t, i) {
      i & /*bg*/
      4 && o(
        e,
        "fill",
        /*bg*/
        t[2]
      ), i & /*bgOpacity*/
      16 && o(
        e,
        "opacity",
        /*bgOpacity*/
        t[4]
      );
    },
    d(t) {
      t && v(e);
    }
  };
}
function si(n) {
  let e;
  return {
    c() {
      e = m("rect"), o(e, "x", "3"), o(e, "y", "3"), o(e, "width", "18"), o(e, "height", "18"), o(e, "rx", "0"), o(
        e,
        "fill",
        /*bg*/
        n[2]
      ), o(
        e,
        "opacity",
        /*bgOpacity*/
        n[4]
      ), o(e, "stroke", "none");
    },
    m(t, i) {
      k(t, e, i);
    },
    p(t, i) {
      i & /*bg*/
      4 && o(
        e,
        "fill",
        /*bg*/
        t[2]
      ), i & /*bgOpacity*/
      16 && o(
        e,
        "opacity",
        /*bgOpacity*/
        t[4]
      );
    },
    d(t) {
      t && v(e);
    }
  };
}
function fi(n) {
  let e;
  return {
    c() {
      e = m("path"), o(e, "d", "M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20Z"), o(e, "fill", "currentColor"), o(
        e,
        "opacity",
        /*bgOpacity*/
        n[4]
      );
    },
    m(t, i) {
      k(t, e, i);
    },
    p(t, i) {
      i & /*bgOpacity*/
      16 && o(
        e,
        "opacity",
        /*bgOpacity*/
        t[4]
      );
    },
    d(t) {
      t && v(e);
    }
  };
}
function ci(n) {
  let e;
  function t(r, a) {
    return (
      /*bgShape*/
      r[5] === "square" ? di : ui
    );
  }
  let i = t(n), l = i(n);
  return {
    c() {
      l.c(), e = N();
    },
    m(r, a) {
      l.m(r, a), k(r, e, a);
    },
    p(r, a) {
      i === (i = t(r)) && l ? l.p(r, a) : (l.d(1), l = i(r), l && (l.c(), l.m(e.parentNode, e)));
    },
    d(r) {
      r && v(e), l.d(r);
    }
  };
}
function ui(n) {
  let e;
  return {
    c() {
      e = m("circle"), o(e, "cx", "12"), o(e, "cy", "12"), o(e, "r", "10"), o(
        e,
        "fill",
        /*bg*/
        n[2]
      ), o(
        e,
        "opacity",
        /*bgOpacity*/
        n[4]
      );
    },
    m(t, i) {
      k(t, e, i);
    },
    p(t, i) {
      i & /*bg*/
      4 && o(
        e,
        "fill",
        /*bg*/
        t[2]
      ), i & /*bgOpacity*/
      16 && o(
        e,
        "opacity",
        /*bgOpacity*/
        t[4]
      );
    },
    d(t) {
      t && v(e);
    }
  };
}
function di(n) {
  let e;
  return {
    c() {
      e = m("rect"), o(e, "x", "3"), o(e, "y", "3"), o(e, "width", "18"), o(e, "height", "18"), o(e, "rx", "0"), o(
        e,
        "fill",
        /*bg*/
        n[2]
      ), o(
        e,
        "opacity",
        /*bgOpacity*/
        n[4]
      );
    },
    m(t, i) {
      k(t, e, i);
    },
    p(t, i) {
      i & /*bg*/
      4 && o(
        e,
        "fill",
        /*bg*/
        t[2]
      ), i & /*bgOpacity*/
      16 && o(
        e,
        "opacity",
        /*bgOpacity*/
        t[4]
      );
    },
    d(t) {
      t && v(e);
    }
  };
}
function gi(n) {
  let e;
  return {
    c() {
      e = m("path"), o(e, "d", "M3 3h18v18H3V3Z"), o(e, "fill", "currentColor"), o(
        e,
        "opacity",
        /*bgOpacity*/
        n[4]
      );
    },
    m(t, i) {
      k(t, e, i);
    },
    p(t, i) {
      i & /*bgOpacity*/
      16 && o(
        e,
        "opacity",
        /*bgOpacity*/
        t[4]
      );
    },
    d(t) {
      t && v(e);
    }
  };
}
function hi(n) {
  let e;
  function t(r, a) {
    return (
      /*bgShape*/
      r[5] === "square" ? bi : pi
    );
  }
  let i = t(n), l = i(n);
  return {
    c() {
      l.c(), e = N();
    },
    m(r, a) {
      l.m(r, a), k(r, e, a);
    },
    p(r, a) {
      i === (i = t(r)) && l ? l.p(r, a) : (l.d(1), l = i(r), l && (l.c(), l.m(e.parentNode, e)));
    },
    d(r) {
      r && v(e), l.d(r);
    }
  };
}
function pi(n) {
  let e;
  return {
    c() {
      e = m("circle"), o(e, "cx", "12"), o(e, "cy", "12"), o(e, "r", "10"), o(
        e,
        "fill",
        /*bg*/
        n[2]
      ), o(
        e,
        "opacity",
        /*bgOpacity*/
        n[4]
      );
    },
    m(t, i) {
      k(t, e, i);
    },
    p(t, i) {
      i & /*bg*/
      4 && o(
        e,
        "fill",
        /*bg*/
        t[2]
      ), i & /*bgOpacity*/
      16 && o(
        e,
        "opacity",
        /*bgOpacity*/
        t[4]
      );
    },
    d(t) {
      t && v(e);
    }
  };
}
function bi(n) {
  let e;
  return {
    c() {
      e = m("rect"), o(e, "x", "3"), o(e, "y", "3"), o(e, "width", "18"), o(e, "height", "18"), o(e, "rx", "0"), o(
        e,
        "fill",
        /*bg*/
        n[2]
      ), o(
        e,
        "opacity",
        /*bgOpacity*/
        n[4]
      );
    },
    m(t, i) {
      k(t, e, i);
    },
    p(t, i) {
      i & /*bg*/
      4 && o(
        e,
        "fill",
        /*bg*/
        t[2]
      ), i & /*bgOpacity*/
      16 && o(
        e,
        "opacity",
        /*bgOpacity*/
        t[4]
      );
    },
    d(t) {
      t && v(e);
    }
  };
}
function _i(n) {
  let e;
  return {
    c() {
      e = m("path"), o(e, "d", "M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20Z"), o(e, "fill", "currentColor"), o(
        e,
        "opacity",
        /*bgOpacity*/
        n[4]
      );
    },
    m(t, i) {
      k(t, e, i);
    },
    p(t, i) {
      i & /*bgOpacity*/
      16 && o(
        e,
        "opacity",
        /*bgOpacity*/
        t[4]
      );
    },
    d(t) {
      t && v(e);
    }
  };
}
function mi(n) {
  let e;
  function t(r, a) {
    return (
      /*bgShape*/
      r[5] === "square" ? wi : vi
    );
  }
  let i = t(n), l = i(n);
  return {
    c() {
      l.c(), e = N();
    },
    m(r, a) {
      l.m(r, a), k(r, e, a);
    },
    p(r, a) {
      i === (i = t(r)) && l ? l.p(r, a) : (l.d(1), l = i(r), l && (l.c(), l.m(e.parentNode, e)));
    },
    d(r) {
      r && v(e), l.d(r);
    }
  };
}
function vi(n) {
  let e;
  return {
    c() {
      e = m("circle"), o(e, "cx", "12"), o(e, "cy", "12"), o(e, "r", "10"), o(
        e,
        "fill",
        /*bg*/
        n[2]
      ), o(
        e,
        "opacity",
        /*bgOpacity*/
        n[4]
      );
    },
    m(t, i) {
      k(t, e, i);
    },
    p(t, i) {
      i & /*bg*/
      4 && o(
        e,
        "fill",
        /*bg*/
        t[2]
      ), i & /*bgOpacity*/
      16 && o(
        e,
        "opacity",
        /*bgOpacity*/
        t[4]
      );
    },
    d(t) {
      t && v(e);
    }
  };
}
function wi(n) {
  let e;
  return {
    c() {
      e = m("rect"), o(e, "x", "3"), o(e, "y", "3"), o(e, "width", "18"), o(e, "height", "18"), o(e, "rx", "0"), o(
        e,
        "fill",
        /*bg*/
        n[2]
      ), o(
        e,
        "opacity",
        /*bgOpacity*/
        n[4]
      );
    },
    m(t, i) {
      k(t, e, i);
    },
    p(t, i) {
      i & /*bg*/
      4 && o(
        e,
        "fill",
        /*bg*/
        t[2]
      ), i & /*bgOpacity*/
      16 && o(
        e,
        "opacity",
        /*bgOpacity*/
        t[4]
      );
    },
    d(t) {
      t && v(e);
    }
  };
}
function ki(n) {
  let e;
  function t(r, a) {
    return (
      /*name*/
      r[0] === "Confirmation" ? Wt : (
        /*name*/
        r[0] === "Warning" ? qt : (
          /*name*/
          r[0] === "Info" ? Ht : (
            /*name*/
            r[0] === "InfoCircle" ? Rt : (
              /*name*/
              r[0] === "Interactive" ? Zt : (
                /*name*/
                r[0] === "Expand" ? Vt : (
                  /*name*/
                  r[0] === "OpenData" ? It : (
                    /*name*/
                    r[0] === "badge-check" ? Ft : (
                      /*name*/
                      r[0] === "Download" ? At : (
                        /*name*/
                        r[0] === "ExternalLink" ? Lt : Ot
                      )
                    )
                  )
                )
              )
            )
          )
        )
      )
    );
  }
  let i = t(n), l = i(n);
  return {
    c() {
      l.c(), e = N();
    },
    m(r, a) {
      l.m(r, a), k(r, e, a);
    },
    p(r, [a]) {
      i === (i = t(r)) && l ? l.p(r, a) : (l.d(1), l = i(r), l && (l.c(), l.m(e.parentNode, e)));
    },
    i: oe,
    o: oe,
    d(r) {
      r && v(e), l.d(r);
    }
  };
}
function yi(n, e, t) {
  let { name: i } = e, { size: l = 0 } = e, { bg: r = null } = e, { fg: a = null } = e, { bgOpacity: s = 0.14 } = e, { bgShape: f = "round" } = e;
  return n.$$set = (c) => {
    "name" in c && t(0, i = c.name), "size" in c && t(1, l = c.size), "bg" in c && t(2, r = c.bg), "fg" in c && t(3, a = c.fg), "bgOpacity" in c && t(4, s = c.bgOpacity), "bgShape" in c && t(5, f = c.bgShape);
  }, [i, l, r, a, s, f];
}
class se extends W {
  constructor(e) {
    super(), H(this, e, yi, ki, Z, {
      name: 0,
      size: 1,
      bg: 2,
      fg: 3,
      bgOpacity: 4,
      bgShape: 5
    });
  }
  get name() {
    return this.$$.ctx[0];
  }
  set name(e) {
    this.$$set({ name: e }), w();
  }
  get size() {
    return this.$$.ctx[1];
  }
  set size(e) {
    this.$$set({ size: e }), w();
  }
  get bg() {
    return this.$$.ctx[2];
  }
  set bg(e) {
    this.$$set({ bg: e }), w();
  }
  get fg() {
    return this.$$.ctx[3];
  }
  set fg(e) {
    this.$$set({ fg: e }), w();
  }
  get bgOpacity() {
    return this.$$.ctx[4];
  }
  set bgOpacity(e) {
    this.$$set({ bgOpacity: e }), w();
  }
  get bgShape() {
    return this.$$.ctx[5];
  }
  set bgShape(e) {
    this.$$set({ bgShape: e }), w();
  }
}
q(se, { name: {}, size: {}, bg: {}, fg: {}, bgOpacity: {}, bgShape: {} }, [], [], !0);
function $i(n) {
  ae(n, "svelte-6djow9", ".desc.svelte-6djow9{display:block;white-space:pre-line}.actionHint.svelte-6djow9{display:block;margin-top:7px;padding-top:7px;border-top:1px solid rgba(255, 255, 255, 0.18);opacity:0.92;font-size:11px;line-height:1.2;width:100%;text-align:center;font-weight:650;letter-spacing:0.06em;text-transform:uppercase}.actionRow.svelte-6djow9{display:inline-flex;align-items:center;justify-content:center;gap:6px}.actionText.svelte-6djow9{display:inline-block;text-align:center;white-space:normal}.actionIcon.svelte-6djow9{display:inline-flex;align-items:center;justify-content:center}");
}
const Si = (n) => ({}), Ee = (n) => ({}), zi = (n) => ({}), Ne = (n) => ({});
function Mi(n) {
  let e;
  const t = (
    /*#slots*/
    n[6].trigger
  ), i = pe(
    t,
    n,
    /*$$scope*/
    n[7],
    Ee
  );
  return {
    c() {
      i && i.c();
    },
    m(l, r) {
      i && i.m(l, r), e = !0;
    },
    p(l, r) {
      i && i.p && (!e || r & /*$$scope*/
      128) && _e(
        i,
        t,
        l,
        /*$$scope*/
        l[7],
        e ? be(
          t,
          /*$$scope*/
          l[7],
          r,
          Si
        ) : me(
          /*$$scope*/
          l[7]
        ),
        Ee
      );
    },
    i(l) {
      e || (S(i, l), e = !0);
    },
    o(l) {
      B(i, l), e = !1;
    },
    d(l) {
      i && i.d(l);
    }
  };
}
function Bi(n) {
  let e, t;
  return e = new it({
    props: {
      placement: (
        /*placement*/
        n[1]
      ),
      openDelayMs: (
        /*openDelayMs*/
        n[2]
      ),
      $$slots: {
        content: [xi],
        trigger: [Ci]
      },
      $$scope: { ctx: n }
    }
  }), {
    c() {
      E(e.$$.fragment);
    },
    m(i, l) {
      j(e, i, l), t = !0;
    },
    p(i, l) {
      const r = {};
      l & /*placement*/
      2 && (r.placement = /*placement*/
      i[1]), l & /*openDelayMs*/
      4 && (r.openDelayMs = /*openDelayMs*/
      i[2]), l & /*$$scope, badge, hintIcon, contentMode*/
      153 && (r.$$scope = { dirty: l, ctx: i }), e.$set(r);
    },
    i(i) {
      t || (S(e.$$.fragment, i), t = !0);
    },
    o(i) {
      B(e.$$.fragment, i), t = !1;
    },
    d(i) {
      D(e, i);
    }
  };
}
function Ci(n) {
  let e, t;
  const i = (
    /*#slots*/
    n[6].trigger
  ), l = pe(
    i,
    n,
    /*$$scope*/
    n[7],
    Ne
  );
  return {
    c() {
      e = x("span"), l && l.c(), o(e, "slot", "trigger");
    },
    m(r, a) {
      k(r, e, a), l && l.m(e, null), t = !0;
    },
    p(r, a) {
      l && l.p && (!t || a & /*$$scope*/
      128) && _e(
        l,
        i,
        r,
        /*$$scope*/
        r[7],
        t ? be(
          i,
          /*$$scope*/
          r[7],
          a,
          zi
        ) : me(
          /*$$scope*/
          r[7]
        ),
        Ne
      );
    },
    i(r) {
      t || (S(l, r), t = !0);
    },
    o(r) {
      B(l, r), t = !1;
    },
    d(r) {
      r && v(e), l && l.d(r);
    }
  };
}
function Oe(n) {
  let e, t = (
    /*badge*/
    n[0].label + ""
  ), i;
  return {
    c() {
      e = x("strong"), i = R(t);
    },
    m(l, r) {
      k(l, e, r), _(e, i);
    },
    p(l, r) {
      r & /*badge*/
      1 && t !== (t = /*badge*/
      l[0].label + "") && te(i, t);
    },
    d(l) {
      l && v(e);
    }
  };
}
function Le(n) {
  let e, t = (
    /*badge*/
    n[0].description + ""
  ), i;
  return {
    c() {
      e = x("span"), i = R(t), o(e, "class", "desc svelte-6djow9");
    },
    m(l, r) {
      k(l, e, r), _(e, i);
    },
    p(l, r) {
      r & /*badge*/
      1 && t !== (t = /*badge*/
      l[0].description + "") && te(i, t);
    },
    d(l) {
      l && v(e);
    }
  };
}
function Ae(n) {
  let e, t, i, l, r = (
    /*badge*/
    n[0].actionText + ""
  ), a, s, f = (
    /*hintIcon*/
    n[4] && Fe(n)
  );
  return {
    c() {
      e = x("div"), t = x("span"), f && f.c(), i = V(), l = x("span"), a = R(r), o(l, "class", "actionText svelte-6djow9"), o(t, "class", "actionRow svelte-6djow9"), o(e, "class", "actionHint svelte-6djow9"), o(e, "aria-hidden", "true");
    },
    m(c, u) {
      k(c, e, u), _(e, t), f && f.m(t, null), _(t, i), _(t, l), _(l, a), s = !0;
    },
    p(c, u) {
      /*hintIcon*/
      c[4] ? f ? (f.p(c, u), u & /*hintIcon*/
      16 && S(f, 1)) : (f = Fe(c), f.c(), S(f, 1), f.m(t, i)) : f && (A(), B(f, 1, 1, () => {
        f = null;
      }), F()), (!s || u & /*badge*/
      1) && r !== (r = /*badge*/
      c[0].actionText + "") && te(a, r);
    },
    i(c) {
      s || (S(f), s = !0);
    },
    o(c) {
      B(f), s = !1;
    },
    d(c) {
      c && v(e), f && f.d();
    }
  };
}
function Fe(n) {
  let e, t, i;
  return t = new se({
    props: {
      name: (
        /*hintIcon*/
        n[4]
      ),
      size: 14,
      fg: "rgba(255, 255, 255, 0.92)",
      bg: null,
      bgOpacity: 0
    }
  }), {
    c() {
      e = x("span"), E(t.$$.fragment), o(e, "class", "actionIcon svelte-6djow9");
    },
    m(l, r) {
      k(l, e, r), j(t, e, null), i = !0;
    },
    p(l, r) {
      const a = {};
      r & /*hintIcon*/
      16 && (a.name = /*hintIcon*/
      l[4]), t.$set(a);
    },
    i(l) {
      i || (S(t.$$.fragment, l), i = !0);
    },
    o(l) {
      B(t.$$.fragment, l), i = !1;
    },
    d(l) {
      l && v(e), D(t);
    }
  };
}
function xi(n) {
  let e, t, i, l, r = (
    /*contentMode*/
    n[3] === "labelAndDescription" && Oe(n)
  ), a = (
    /*badge*/
    n[0].description && Le(n)
  ), s = (
    /*badge*/
    n[0].actionText && Ae(n)
  );
  return {
    c() {
      e = x("span"), r && r.c(), t = V(), a && a.c(), i = V(), s && s.c(), o(e, "slot", "content");
    },
    m(f, c) {
      k(f, e, c), r && r.m(e, null), _(e, t), a && a.m(e, null), _(e, i), s && s.m(e, null), l = !0;
    },
    p(f, c) {
      /*contentMode*/
      f[3] === "labelAndDescription" ? r ? r.p(f, c) : (r = Oe(f), r.c(), r.m(e, t)) : r && (r.d(1), r = null), /*badge*/
      f[0].description ? a ? a.p(f, c) : (a = Le(f), a.c(), a.m(e, i)) : a && (a.d(1), a = null), /*badge*/
      f[0].actionText ? s ? (s.p(f, c), c & /*badge*/
      1 && S(s, 1)) : (s = Ae(f), s.c(), S(s, 1), s.m(e, null)) : s && (A(), B(s, 1, 1, () => {
        s = null;
      }), F());
    },
    i(f) {
      l || (S(s), l = !0);
    },
    o(f) {
      B(s), l = !1;
    },
    d(f) {
      f && v(e), r && r.d(), a && a.d(), s && s.d();
    }
  };
}
function Ti(n) {
  let e, t, i, l;
  const r = [Bi, Mi], a = [];
  function s(f, c) {
    return (
      /*showTooltip*/
      f[5] ? 0 : 1
    );
  }
  return e = s(n), t = a[e] = r[e](n), {
    c() {
      t.c(), i = N();
    },
    m(f, c) {
      a[e].m(f, c), k(f, i, c), l = !0;
    },
    p(f, [c]) {
      let u = e;
      e = s(f), e === u ? a[e].p(f, c) : (A(), B(a[u], 1, 1, () => {
        a[u] = null;
      }), F(), t = a[e], t ? t.p(f, c) : (t = a[e] = r[e](f), t.c()), S(t, 1), t.m(i.parentNode, i));
    },
    i(f) {
      l || (S(t), l = !0);
    },
    o(f) {
      B(t), l = !1;
    },
    d(f) {
      f && v(i), a[e].d(f);
    }
  };
}
function ji(n, e, t) {
  let i, l, { $$slots: r = {}, $$scope: a } = e, { badge: s } = e, { placement: f = "top" } = e, { openDelayMs: c = 80 } = e, { contentMode: u = "description" } = e;
  return n.$$set = (d) => {
    "badge" in d && t(0, s = d.badge), "placement" in d && t(1, f = d.placement), "openDelayMs" in d && t(2, c = d.openDelayMs), "contentMode" in d && t(3, u = d.contentMode), "$$scope" in d && t(7, a = d.$$scope);
  }, n.$$.update = () => {
    n.$$.dirty & /*badge*/
    1 && t(5, i = !!(s != null && s.description || s != null && s.actionText)), n.$$.dirty & /*badge*/
    1 && t(4, l = (s == null ? void 0 : s.actionIcon) ?? null);
  }, [
    s,
    f,
    c,
    u,
    l,
    i,
    r,
    a
  ];
}
class ue extends W {
  constructor(e) {
    super(), H(
      this,
      e,
      ji,
      Ti,
      Z,
      {
        badge: 0,
        placement: 1,
        openDelayMs: 2,
        contentMode: 3
      },
      $i
    );
  }
  get badge() {
    return this.$$.ctx[0];
  }
  set badge(e) {
    this.$$set({ badge: e }), w();
  }
  get placement() {
    return this.$$.ctx[1];
  }
  set placement(e) {
    this.$$set({ placement: e }), w();
  }
  get openDelayMs() {
    return this.$$.ctx[2];
  }
  set openDelayMs(e) {
    this.$$set({ openDelayMs: e }), w();
  }
  get contentMode() {
    return this.$$.ctx[3];
  }
  set contentMode(e) {
    this.$$set({ contentMode: e }), w();
  }
}
q(ue, { badge: {}, placement: {}, openDelayMs: {}, contentMode: {} }, ["trigger"], [], !0);
function Di(n) {
  ae(n, "svelte-jjnksu", ".badge.svelte-jjnksu{display:inline-flex;align-items:center;gap:var(--badge-gap);padding:var(--badge-pad-y) var(--badge-pad-x);border-radius:16px;border:var(--badge-border-w) solid transparent;font-weight:550;font-size:12px;line-height:1;user-select:none;outline:none;transition:background-color 120ms ease, border-color 120ms ease, color 120ms ease;--badge-solid:rgb(17, 24, 39);--badge-border:color-mix(in srgb, var(--badge-solid) 65%, transparent);--badge-fg:color-mix(in srgb, var(--badge-solid) 72%, black);--badge-bg:color-mix(in srgb, var(--badge-solid) 14%, transparent);--badge-gap:3px;--badge-pad-y:3px;--badge-pad-x:6px;--badge-border-w:1px}.badge.filled.svelte-jjnksu{background:var(--badge-solid);border-color:transparent;color:#ffffff}.badge.outlined.svelte-jjnksu{background:transparent;border-color:var(--badge-border);color:var(--badge-fg)}.icon.svelte-jjnksu{display:inline-flex;align-items:center;justify-content:center}.label.svelte-jjnksu{white-space:nowrap}");
}
function Ie(n) {
  let e, t;
  return e = new ue({
    props: {
      badge: (
        /*badge*/
        n[0]
      ),
      placement: "top",
      openDelayMs: 80,
      contentMode: "description",
      $$slots: { trigger: [Pi] },
      $$scope: { ctx: n }
    }
  }), {
    c() {
      E(e.$$.fragment);
    },
    m(i, l) {
      j(e, i, l), t = !0;
    },
    p(i, l) {
      const r = {};
      l & /*badge*/
      1 && (r.badge = /*badge*/
      i[0]), l & /*$$scope, variant, badgeColor, badge, iconName, iconBgShape*/
      63 && (r.$$scope = { dirty: l, ctx: i }), e.$set(r);
    },
    i(i) {
      t || (S(e.$$.fragment, i), t = !0);
    },
    o(i) {
      B(e.$$.fragment, i), t = !1;
    },
    d(i) {
      D(e, i);
    }
  };
}
function Ve(n) {
  let e, t, i;
  return t = new se({
    props: {
      name: (
        /*iconName*/
        n[2]
      ),
      size: Ni,
      bg: (
        /*variant*/
        n[1] === "outlined" ? "var(--badge-solid)" : "#ffffff"
      ),
      fg: (
        /*variant*/
        n[1] === "outlined" ? "#ffffff" : "var(--badge-solid)"
      ),
      bgOpacity: 1,
      bgShape: (
        /*iconBgShape*/
        n[3]
      )
    }
  }), {
    c() {
      e = x("span"), E(t.$$.fragment), o(e, "class", "icon svelte-jjnksu"), o(e, "aria-hidden", "true");
    },
    m(l, r) {
      k(l, e, r), j(t, e, null), i = !0;
    },
    p(l, r) {
      const a = {};
      r & /*iconName*/
      4 && (a.name = /*iconName*/
      l[2]), r & /*variant*/
      2 && (a.bg = /*variant*/
      l[1] === "outlined" ? "var(--badge-solid)" : "#ffffff"), r & /*variant*/
      2 && (a.fg = /*variant*/
      l[1] === "outlined" ? "#ffffff" : "var(--badge-solid)"), r & /*iconBgShape*/
      8 && (a.bgShape = /*iconBgShape*/
      l[3]), t.$set(a);
    },
    i(l) {
      i || (S(t.$$.fragment, l), i = !0);
    },
    o(l) {
      B(t.$$.fragment, l), i = !1;
    },
    d(l) {
      l && v(e), D(t);
    }
  };
}
function Pi(n) {
  let e, t, i, l, r = (
    /*badge*/
    n[0].label + ""
  ), a, s, f, c, u, d, p, g = (
    /*iconName*/
    n[2] && Ve(n)
  );
  return {
    c() {
      e = x("span"), t = x("span"), g && g.c(), i = V(), l = x("span"), a = R(r), o(l, "class", "label svelte-jjnksu"), o(t, "class", s = "badge " + /*variant*/
      n[1] + " svelte-jjnksu"), o(t, "style", f = `--badge-solid:${/*badgeColor*/
      n[4]};`), o(t, "role", "note"), o(t, "aria-label", c = /*badge*/
      n[0].label), o(e, "slot", "trigger"), o(e, "role", "presentation");
    },
    m(b, y) {
      k(b, e, y), _(e, t), g && g.m(t, null), _(t, i), _(t, l), _(l, a), u = !0, d || (p = I(e, "keydown", Oi), d = !0);
    },
    p(b, y) {
      /*iconName*/
      b[2] ? g ? (g.p(b, y), y & /*iconName*/
      4 && S(g, 1)) : (g = Ve(b), g.c(), S(g, 1), g.m(t, i)) : g && (A(), B(g, 1, 1, () => {
        g = null;
      }), F()), (!u || y & /*badge*/
      1) && r !== (r = /*badge*/
      b[0].label + "") && te(a, r), (!u || y & /*variant*/
      2 && s !== (s = "badge " + /*variant*/
      b[1] + " svelte-jjnksu")) && o(t, "class", s), (!u || y & /*badgeColor*/
      16 && f !== (f = `--badge-solid:${/*badgeColor*/
      b[4]};`)) && o(t, "style", f), (!u || y & /*badge*/
      1 && c !== (c = /*badge*/
      b[0].label)) && o(t, "aria-label", c);
    },
    i(b) {
      u || (S(g), u = !0);
    },
    o(b) {
      B(g), u = !1;
    },
    d(b) {
      b && v(e), g && g.d(), d = !1, p();
    }
  };
}
function Ei(n) {
  let e, t, i = (
    /*badge*/
    n[0] && Ie(n)
  );
  return {
    c() {
      i && i.c(), e = N();
    },
    m(l, r) {
      i && i.m(l, r), k(l, e, r), t = !0;
    },
    p(l, [r]) {
      /*badge*/
      l[0] ? i ? (i.p(l, r), r & /*badge*/
      1 && S(i, 1)) : (i = Ie(l), i.c(), S(i, 1), i.m(e.parentNode, e)) : i && (A(), B(i, 1, 1, () => {
        i = null;
      }), F());
    },
    i(l) {
      t || (S(i), t = !0);
    },
    o(l) {
      B(i), t = !1;
    },
    d(l) {
      l && v(e), i && i.d(l);
    }
  };
}
const Ni = 20, Oi = () => {
};
function Li(n, e, t) {
  let i, l, r, { badge: a } = e, { variant: s = "filled" } = e;
  return n.$$set = (f) => {
    "badge" in f && t(0, a = f.badge), "variant" in f && t(1, s = f.variant);
  }, n.$$.update = () => {
    n.$$.dirty & /*badge*/
    1 && t(2, i = (a == null ? void 0 : a.icon) ?? null), n.$$.dirty & /*badge*/
    1 && t(4, l = String((a == null ? void 0 : a.color) ?? "").trim() || "rgb(17, 24, 39)"), n.$$.dirty & /*iconName*/
    4 && t(3, r = i === "Info" ? "square" : "round");
  }, [a, s, i, r, l];
}
class nt extends W {
  constructor(e) {
    super(), H(this, e, Li, Ei, Z, { badge: 0, variant: 1 }, Di);
  }
  get badge() {
    return this.$$.ctx[0];
  }
  set badge(e) {
    this.$$set({ badge: e }), w();
  }
  get variant() {
    return this.$$.ctx[1];
  }
  set variant(e) {
    this.$$set({ variant: e }), w();
  }
}
q(nt, { badge: {}, variant: {} }, [], [], !0);
function Ai(n) {
  ae(n, "svelte-467e52", `.wrap.fixed.svelte-467e52.svelte-467e52{position:fixed;z-index:50}.wrap.svelte-467e52.svelte-467e52{display:inline-flex;align-items:center;justify-content:flex-end;pointer-events:auto}.wrap.left.svelte-467e52 .badge.mini{flex-direction:row-reverse}.badge.svelte-467e52.svelte-467e52{display:inline-flex;align-items:center;gap:var(--badge-gap);padding:var(--badge-pad-y) var(--badge-pad-x);border-radius:16px;border:var(--badge-border-w) solid transparent;font-weight:550;font-size:12px;line-height:1;user-select:none;outline:none;transition:background-color 220ms ease, border-color 220ms ease, color 220ms ease, box-shadow 220ms ease,
      padding 420ms cubic-bezier(0.2, 0, 0, 1);--badge-solid:rgb(17, 24, 39);--badge-border:color-mix(in srgb, var(--badge-solid) 65%, transparent);--badge-fg:color-mix(in srgb, var(--badge-solid) 72%, black);--badge-gap:3px;--badge-pad-y:3px;--badge-pad-x:6px;--badge-border-w:1px;--mini-icon-bg:var(--badge-solid);--mini-icon-fg:#ffffff}.badge.filled.svelte-467e52.svelte-467e52{background:var(--badge-solid);border-color:transparent;color:#ffffff}.badge.outlined.svelte-467e52.svelte-467e52{background:transparent;border-color:var(--badge-border);color:var(--badge-fg)}.icon.svelte-467e52.svelte-467e52{display:inline-flex;align-items:center;justify-content:center}.label.svelte-467e52.svelte-467e52{white-space:nowrap}.badge.mini.svelte-467e52.svelte-467e52{--badge-gap:0px;--badge-pad-y:0px;--badge-pad-x:0px;--badge-border-w:0px;border-color:transparent;background:transparent;font-size:11px}.badge.mini.svelte-467e52 .label.svelte-467e52{max-width:0;opacity:0;overflow:hidden;line-height:1.2;padding-bottom:1px;transition:max-width 420ms cubic-bezier(0.2, 0, 0, 1), opacity 260ms ease}.badge.mini.svelte-467e52.svelte-467e52:hover,.badge.mini.svelte-467e52.svelte-467e52:focus-visible{--badge-gap:2px;--badge-pad-y:2px;--badge-pad-x:5px;--badge-border-w:1px}.badge.mini.outlined.svelte-467e52.svelte-467e52:hover,.badge.mini.outlined.svelte-467e52.svelte-467e52:focus-visible{border-color:var(--badge-border)}.badge.mini.filled.svelte-467e52.svelte-467e52:hover,.badge.mini.filled.svelte-467e52.svelte-467e52:focus-visible{background:var(--badge-solid);border-color:transparent;color:#ffffff;--mini-icon-bg:#ffffff;--mini-icon-fg:var(--badge-solid)}.badge.mini.svelte-467e52:hover .label.svelte-467e52,.badge.mini.svelte-467e52:focus-visible .label.svelte-467e52{max-width:220px;opacity:1}`);
}
function Ze(n) {
  let e, t;
  return e = new ue({
    props: {
      badge: (
        /*badge*/
        n[0]
      ),
      placement: "top",
      openDelayMs: 420,
      contentMode: "description",
      $$slots: { trigger: [Fi] },
      $$scope: { ctx: n }
    }
  }), {
    c() {
      E(e.$$.fragment);
    },
    m(i, l) {
      j(e, i, l), t = !0;
    },
    p(i, l) {
      const r = {};
      l & /*badge*/
      1 && (r.badge = /*badge*/
      i[0]), l & /*$$scope, variant, badgeColor, badge, iconName, iconBgShapeFinal*/
      739 && (r.$$scope = { dirty: l, ctx: i }), e.$set(r);
    },
    i(i) {
      t || (S(e.$$.fragment, i), t = !0);
    },
    o(i) {
      B(e.$$.fragment, i), t = !1;
    },
    d(i) {
      D(e, i);
    }
  };
}
function Re(n) {
  let e, t, i;
  return t = new se({
    props: {
      name: (
        /*iconName*/
        n[5]
      ),
      size: Vi,
      bg: "var(--mini-icon-bg)",
      fg: "var(--mini-icon-fg)",
      bgOpacity: 1,
      bgShape: (
        /*iconBgShapeFinal*/
        n[6]
      )
    }
  }), {
    c() {
      e = x("span"), E(t.$$.fragment), o(e, "class", "icon svelte-467e52"), o(e, "aria-hidden", "true");
    },
    m(l, r) {
      k(l, e, r), j(t, e, null), i = !0;
    },
    p(l, r) {
      const a = {};
      r & /*iconName*/
      32 && (a.name = /*iconName*/
      l[5]), r & /*iconBgShapeFinal*/
      64 && (a.bgShape = /*iconBgShapeFinal*/
      l[6]), t.$set(a);
    },
    i(l) {
      i || (S(t.$$.fragment, l), i = !0);
    },
    o(l) {
      B(t.$$.fragment, l), i = !1;
    },
    d(l) {
      l && v(e), D(t);
    }
  };
}
function Fi(n) {
  let e, t, i, l, r = (
    /*badge*/
    n[0].label + ""
  ), a, s, f, c, u, d, p, g = (
    /*iconName*/
    n[5] && Re(n)
  );
  return {
    c() {
      e = x("span"), t = x("span"), g && g.c(), i = V(), l = x("span"), a = R(r), o(l, "class", "label svelte-467e52"), o(t, "class", s = "badge mini " + /*variant*/
      n[1] + " svelte-467e52"), o(t, "style", f = `--badge-solid:${/*badgeColor*/
      n[7]};`), o(t, "role", "note"), o(t, "aria-label", c = /*badge*/
      n[0].label), o(e, "slot", "trigger"), o(e, "role", "presentation");
    },
    m(b, y) {
      k(b, e, y), _(e, t), g && g.m(t, null), _(t, i), _(t, l), _(l, a), u = !0, d || (p = I(e, "keydown", Zi), d = !0);
    },
    p(b, y) {
      /*iconName*/
      b[5] ? g ? (g.p(b, y), y & /*iconName*/
      32 && S(g, 1)) : (g = Re(b), g.c(), S(g, 1), g.m(t, i)) : g && (A(), B(g, 1, 1, () => {
        g = null;
      }), F()), (!u || y & /*badge*/
      1) && r !== (r = /*badge*/
      b[0].label + "") && te(a, r), (!u || y & /*variant*/
      2 && s !== (s = "badge mini " + /*variant*/
      b[1] + " svelte-467e52")) && o(t, "class", s), (!u || y & /*badgeColor*/
      128 && f !== (f = `--badge-solid:${/*badgeColor*/
      b[7]};`)) && o(t, "style", f), (!u || y & /*badge*/
      1 && c !== (c = /*badge*/
      b[0].label)) && o(t, "aria-label", c);
    },
    i(b) {
      u || (S(g), u = !0);
    },
    o(b) {
      B(g), u = !1;
    },
    d(b) {
      b && v(e), g && g.d(), d = !1, p();
    }
  };
}
function Ii(n) {
  let e, t, i, l, r = (
    /*badge*/
    n[0] && Ze(n)
  );
  return {
    c() {
      e = x("div"), r && r.c(), o(e, "class", t = "wrap " + /*fixed*/
      (n[2] ? "fixed" : "") + " " + /*expandDirection*/
      n[4] + " svelte-467e52"), o(e, "style", i = /*fixed*/
      n[2] ? `right:${/*offsetPx*/
      n[3]}px;bottom:${/*offsetPx*/
      n[3]}px;` : void 0), o(e, "aria-label", "Mini badge");
    },
    m(a, s) {
      k(a, e, s), r && r.m(e, null), l = !0;
    },
    p(a, [s]) {
      /*badge*/
      a[0] ? r ? (r.p(a, s), s & /*badge*/
      1 && S(r, 1)) : (r = Ze(a), r.c(), S(r, 1), r.m(e, null)) : r && (A(), B(r, 1, 1, () => {
        r = null;
      }), F()), (!l || s & /*fixed, expandDirection*/
      20 && t !== (t = "wrap " + /*fixed*/
      (a[2] ? "fixed" : "") + " " + /*expandDirection*/
      a[4] + " svelte-467e52")) && o(e, "class", t), (!l || s & /*fixed, offsetPx*/
      12 && i !== (i = /*fixed*/
      a[2] ? `right:${/*offsetPx*/
      a[3]}px;bottom:${/*offsetPx*/
      a[3]}px;` : void 0)) && o(e, "style", i);
    },
    i(a) {
      l || (S(r), l = !0);
    },
    o(a) {
      B(r), l = !1;
    },
    d(a) {
      a && v(e), r && r.d();
    }
  };
}
const Vi = 24, Zi = () => {
};
function Ri(n, e, t) {
  let i, l, r, { badge: a } = e, { variant: s = "outlined" } = e, { iconBgShape: f = "round" } = e, { fixed: c = !1 } = e, { offsetPx: u = 16 } = e, { expandDirection: d = "right" } = e;
  return n.$$set = (p) => {
    "badge" in p && t(0, a = p.badge), "variant" in p && t(1, s = p.variant), "iconBgShape" in p && t(8, f = p.iconBgShape), "fixed" in p && t(2, c = p.fixed), "offsetPx" in p && t(3, u = p.offsetPx), "expandDirection" in p && t(4, d = p.expandDirection);
  }, n.$$.update = () => {
    n.$$.dirty & /*badge*/
    1 && t(5, i = (a == null ? void 0 : a.icon) ?? null), n.$$.dirty & /*badge*/
    1 && t(7, l = String((a == null ? void 0 : a.color) ?? "").trim() || "rgb(17, 24, 39)"), n.$$.dirty & /*iconName, iconBgShape*/
    288 && t(6, r = i === "Info" ? "square" : f);
  }, [
    a,
    s,
    c,
    u,
    d,
    i,
    r,
    l,
    f
  ];
}
class lt extends W {
  constructor(e) {
    super(), H(
      this,
      e,
      Ri,
      Ii,
      Z,
      {
        badge: 0,
        variant: 1,
        iconBgShape: 8,
        fixed: 2,
        offsetPx: 3,
        expandDirection: 4
      },
      Ai
    );
  }
  get badge() {
    return this.$$.ctx[0];
  }
  set badge(e) {
    this.$$set({ badge: e }), w();
  }
  get variant() {
    return this.$$.ctx[1];
  }
  set variant(e) {
    this.$$set({ variant: e }), w();
  }
  get iconBgShape() {
    return this.$$.ctx[8];
  }
  set iconBgShape(e) {
    this.$$set({ iconBgShape: e }), w();
  }
  get fixed() {
    return this.$$.ctx[2];
  }
  set fixed(e) {
    this.$$set({ fixed: e }), w();
  }
  get offsetPx() {
    return this.$$.ctx[3];
  }
  set offsetPx(e) {
    this.$$set({ offsetPx: e }), w();
  }
  get expandDirection() {
    return this.$$.ctx[4];
  }
  set expandDirection(e) {
    this.$$set({ expandDirection: e }), w();
  }
}
q(lt, { badge: {}, variant: {}, iconBgShape: {}, fixed: { type: "Boolean" }, offsetPx: {}, expandDirection: {} }, [], [], !0);
function Hi(n) {
  ae(n, "svelte-1achwnm", `.prio.svelte-1achwnm.svelte-1achwnm{width:var(--prio-size);height:var(--prio-size);border-radius:999px;display:inline-flex;align-items:center;justify-content:center;cursor:default;outline:none;user-select:none;transition:transform 160ms cubic-bezier(0.2, 0, 0, 1), box-shadow 160ms cubic-bezier(0.2, 0, 0, 1),
      filter 160ms cubic-bezier(0.2, 0, 0, 1);--prio-solid:rgb(17, 24, 39);--prio-border:color-mix(in srgb, var(--prio-solid) 65%, transparent);--prio-text:#ffffff}.prio-inner.svelte-1achwnm.svelte-1achwnm{width:100%;height:100%;border-radius:999px;display:inline-flex;align-items:center;justify-content:center}.prio.with-label.svelte-1achwnm .prio-inner.svelte-1achwnm{flex-direction:column;gap:2px;padding:3px 5px 5px 5px;box-sizing:border-box}.prio-text.svelte-1achwnm.svelte-1achwnm{font-size:var(--prio-text-size, 10px);font-weight:550;letter-spacing:0.02em;line-height:1.05;color:var(--prio-text);text-align:center;white-space:normal;overflow-wrap:anywhere;opacity:0.95}.prio.solid.svelte-1achwnm.svelte-1achwnm{background:var(--prio-solid)}.prio.ring.svelte-1achwnm.svelte-1achwnm{background:#ffffff;box-shadow:inset 0 0 0 2px var(--prio-solid);--prio-text:var(--prio-solid)}.prio.double-ring.svelte-1achwnm.svelte-1achwnm{background:var(--prio-solid);box-shadow:inset 0 0 0 3px rgba(255, 255, 255, 0.95), 0 0 0 2px var(--prio-solid)}.prio.stamp.svelte-1achwnm.svelte-1achwnm{background:var(--prio-solid);box-shadow:inset 0 0 0 2px rgba(255, 255, 255, 0.85);filter:saturate(1.05)}.prio.stamp.svelte-1achwnm .prio-inner.svelte-1achwnm{background-image:radial-gradient(rgba(255, 255, 255, 0.08) 1px, transparent 0);background-size:6px 6px;background-position:0 0}.prio.glow.svelte-1achwnm.svelte-1achwnm{background:var(--prio-solid);box-shadow:0 10px 22px rgba(17, 24, 39, 0.16), 0 0 0 3px rgba(255, 255, 255, 0.92)}`);
}
function He(n) {
  let e, t;
  return e = new ue({
    props: {
      badge: (
        /*badge*/
        n[0]
      ),
      placement: "top",
      openDelayMs: 120,
      contentMode: "labelAndDescription",
      $$slots: { trigger: [qi] },
      $$scope: { ctx: n }
    }
  }), {
    c() {
      E(e.$$.fragment);
    },
    m(i, l) {
      j(e, i, l), t = !0;
    },
    p(i, l) {
      const r = {};
      l & /*badge*/
      1 && (r.badge = /*badge*/
      i[0]), l & /*$$scope, variant, badgeColor, renderSize, textSize, badge, rawLabel, iconName, iconSize, iconBgShape*/
      2559 && (r.$$scope = { dirty: l, ctx: i }), e.$set(r);
    },
    i(i) {
      t || (S(e.$$.fragment, i), t = !0);
    },
    o(i) {
      B(e.$$.fragment, i), t = !1;
    },
    d(i) {
      D(e, i);
    }
  };
}
function qe(n) {
  let e, t;
  return e = new se({
    props: {
      name: (
        /*iconName*/
        n[4]
      ),
      size: (
        /*iconSize*/
        n[6]
      ),
      bg: (
        /*variant*/
        n[1] === "solid" ? "#ffffff" : "var(--prio-solid)"
      ),
      bgOpacity: 1,
      fg: (
        /*variant*/
        n[1] === "solid" ? "var(--prio-solid)" : "#ffffff"
      ),
      bgShape: (
        /*iconBgShape*/
        n[7]
      )
    }
  }), {
    c() {
      E(e.$$.fragment);
    },
    m(i, l) {
      j(e, i, l), t = !0;
    },
    p(i, l) {
      const r = {};
      l & /*iconName*/
      16 && (r.name = /*iconName*/
      i[4]), l & /*iconSize*/
      64 && (r.size = /*iconSize*/
      i[6]), l & /*variant*/
      2 && (r.bg = /*variant*/
      i[1] === "solid" ? "#ffffff" : "var(--prio-solid)"), l & /*variant*/
      2 && (r.fg = /*variant*/
      i[1] === "solid" ? "var(--prio-solid)" : "#ffffff"), l & /*iconBgShape*/
      128 && (r.bgShape = /*iconBgShape*/
      i[7]), e.$set(r);
    },
    i(i) {
      t || (S(e.$$.fragment, i), t = !0);
    },
    o(i) {
      B(e.$$.fragment, i), t = !1;
    },
    d(i) {
      D(e, i);
    }
  };
}
function qi(n) {
  let e, t, i, l, r, a, s, f, c, u, d, p, g = (
    /*iconName*/
    n[4] && qe(n)
  );
  return {
    c() {
      e = x("span"), t = x("span"), i = x("span"), g && g.c(), l = V(), r = x("span"), a = R(
        /*rawLabel*/
        n[3]
      ), o(r, "class", "prio-text svelte-1achwnm"), o(i, "class", "prio-inner svelte-1achwnm"), o(i, "aria-hidden", "true"), o(t, "class", s = "prio " + /*variant*/
      n[1] + " with-label svelte-1achwnm"), o(t, "style", f = `--prio-solid:${/*badgeColor*/
      n[8]}; --prio-size:${/*renderSize*/
      n[2]}px; --prio-text-size:${/*textSize*/
      n[5]}px;`), o(t, "role", "note"), o(t, "aria-label", c = /*badge*/
      n[0].label), o(e, "slot", "trigger"), o(e, "role", "presentation");
    },
    m(b, y) {
      k(b, e, y), _(e, t), _(t, i), g && g.m(i, null), _(i, l), _(i, r), _(r, a), u = !0, d || (p = I(e, "keydown", Ui), d = !0);
    },
    p(b, y) {
      /*iconName*/
      b[4] ? g ? (g.p(b, y), y & /*iconName*/
      16 && S(g, 1)) : (g = qe(b), g.c(), S(g, 1), g.m(i, l)) : g && (A(), B(g, 1, 1, () => {
        g = null;
      }), F()), (!u || y & /*rawLabel*/
      8) && te(
        a,
        /*rawLabel*/
        b[3]
      ), (!u || y & /*variant*/
      2 && s !== (s = "prio " + /*variant*/
      b[1] + " with-label svelte-1achwnm")) && o(t, "class", s), (!u || y & /*badgeColor, renderSize, textSize*/
      292 && f !== (f = `--prio-solid:${/*badgeColor*/
      b[8]}; --prio-size:${/*renderSize*/
      b[2]}px; --prio-text-size:${/*textSize*/
      b[5]}px;`)) && o(t, "style", f), (!u || y & /*badge*/
      1 && c !== (c = /*badge*/
      b[0].label)) && o(t, "aria-label", c);
    },
    i(b) {
      u || (S(g), u = !0);
    },
    o(b) {
      B(g), u = !1;
    },
    d(b) {
      b && v(e), g && g.d(), d = !1, p();
    }
  };
}
function Wi(n) {
  let e, t, i = (
    /*badge*/
    n[0] && He(n)
  );
  return {
    c() {
      i && i.c(), e = N();
    },
    m(l, r) {
      i && i.m(l, r), k(l, e, r), t = !0;
    },
    p(l, [r]) {
      /*badge*/
      l[0] ? i ? (i.p(l, r), r & /*badge*/
      1 && S(i, 1)) : (i = He(l), i.c(), S(i, 1), i.m(e.parentNode, e)) : i && (A(), B(i, 1, 1, () => {
        i = null;
      }), F());
    },
    i(l) {
      t || (S(i), t = !0);
    },
    o(l) {
      B(i), t = !1;
    },
    d(l) {
      l && v(e), i && i.d(l);
    }
  };
}
function Gi(n) {
  return String(n ?? "").trim() || "—";
}
const Ui = () => {
};
function Xi(n, e, t) {
  let i, l, r, a, s, f, c, u, { badge: d } = e, { variant: p = "solid" } = e, { size: g = 44 } = e;
  return n.$$set = (b) => {
    "badge" in b && t(0, d = b.badge), "variant" in b && t(1, p = b.variant), "size" in b && t(9, g = b.size);
  }, n.$$.update = () => {
    n.$$.dirty & /*badge*/
    1 && t(4, i = (d == null ? void 0 : d.icon) ?? null), n.$$.dirty & /*badge*/
    1 && t(8, l = String((d == null ? void 0 : d.color) ?? "").trim() || "rgb(17, 24, 39)"), n.$$.dirty & /*iconName*/
    16 && t(7, r = i === "Info" ? "square" : "round"), n.$$.dirty & /*badge*/
    1 && t(3, a = Gi(d == null ? void 0 : d.label)), n.$$.dirty & /*rawLabel*/
    8 && t(10, s = a.length), n.$$.dirty & /*size, labelLen*/
    1536 && t(2, f = Math.min(104, Math.max(g, 70 + Math.max(0, s - 12) * 1.4))), n.$$.dirty & /*renderSize*/
    4 && t(6, c = Math.round(f * 0.34)), n.$$.dirty & /*labelLen*/
    1024 && t(5, u = s <= 12 ? 12 : s <= 18 ? 11 : s <= 26 ? 10 : 9);
  }, [
    d,
    p,
    f,
    a,
    i,
    u,
    c,
    r,
    l,
    g,
    s
  ];
}
class rt extends W {
  constructor(e) {
    super(), H(this, e, Xi, Wi, Z, { badge: 0, variant: 1, size: 9 }, Hi);
  }
  get badge() {
    return this.$$.ctx[0];
  }
  set badge(e) {
    this.$$set({ badge: e }), w();
  }
  get variant() {
    return this.$$.ctx[1];
  }
  set variant(e) {
    this.$$set({ variant: e }), w();
  }
  get size() {
    return this.$$.ctx[9];
  }
  set size(e) {
    this.$$set({ size: e }), w();
  }
}
q(rt, { badge: {}, variant: {}, size: {} }, [], [], !0);
function Yi(n) {
  ae(n, "svelte-1wx095d", ".seal.svelte-1wx095d.svelte-1wx095d{position:relative;width:var(--seal-size);height:var(--seal-size);border-radius:999px;display:inline-grid;place-items:center;outline:none;cursor:default;user-select:none;background:transparent;--seal-solid:rgb(17, 24, 39);--seal-ring:color-mix(in srgb, var(--seal-solid) 55%, transparent);--seal-line:color-mix(in srgb, var(--seal-solid) 18%, transparent);--seal-ring-fg:var(--seal-solid)}.seal.filled.svelte-1wx095d.svelte-1wx095d{background:var(--seal-solid);--seal-ring-fg:rgba(255, 255, 255, 0.92)}.ring.svelte-1wx095d.svelte-1wx095d{position:absolute;inset:0;border-radius:999px;font-size:var(--seal-font);color:var(--seal-ring-fg);opacity:0.92;text-transform:uppercase;letter-spacing:0.1em;font-weight:550}.char.svelte-1wx095d.svelte-1wx095d{width:1em;height:100%;position:absolute;top:0;left:50%;transform:translateX(-50%) rotate(var(--angle));text-align:center}.center.svelte-1wx095d.svelte-1wx095d{position:absolute;inset:0;display:grid;place-items:center}.center-pill.svelte-1wx095d.svelte-1wx095d{width:calc(var(--seal-size) * 0.64);height:calc(var(--seal-size) * 0.64);border-radius:999px;background:rgba(255, 255, 255, 0.96);border:1px solid var(--seal-line);display:grid;place-items:center;opacity:0.95}.seal.filled.svelte-1wx095d .center-pill.svelte-1wx095d{border-color:rgba(255, 255, 255, 0.35);background:#ffffff;opacity:1}");
}
function We(n, e, t) {
  const i = n.slice();
  return i[14] = e[t], i[16] = t, i;
}
function Ge(n) {
  let e, t;
  return e = new ue({
    props: {
      badge: (
        /*badge*/
        n[0]
      ),
      placement: "top",
      openDelayMs: 120,
      contentMode: "labelAndDescription",
      $$slots: { trigger: [Ji] },
      $$scope: { ctx: n }
    }
  }), {
    c() {
      E(e.$$.fragment);
    },
    m(i, l) {
      j(e, i, l), t = !0;
    },
    p(i, l) {
      const r = {};
      l & /*badge*/
      1 && (r.badge = /*badge*/
      i[0]), l & /*$$scope, variant, badgeColor, size, ringFontPx, badge, iconName, centerIcon, chars*/
      131327 && (r.$$scope = { dirty: l, ctx: i }), e.$set(r);
    },
    i(i) {
      t || (S(e.$$.fragment, i), t = !0);
    },
    o(i) {
      B(e.$$.fragment, i), t = !1;
    },
    d(i) {
      D(e, i);
    }
  };
}
function Ue(n, e) {
  let t, i = (
    /*char*/
    e[14] + ""
  ), l, r;
  return {
    key: n,
    first: null,
    c() {
      t = x("span"), l = R(i), o(t, "class", "char svelte-1wx095d"), o(t, "style", r = `--angle:${1 / /*chars*/
      e[5].length * /*index*/
      e[16]}turn;`), this.first = t;
    },
    m(a, s) {
      k(a, t, s), _(t, l);
    },
    p(a, s) {
      e = a, s & /*chars*/
      32 && i !== (i = /*char*/
      e[14] + "") && te(l, i), s & /*chars*/
      32 && r !== (r = `--angle:${1 / /*chars*/
      e[5].length * /*index*/
      e[16]}turn;`) && o(t, "style", r);
    },
    d(a) {
      a && v(t);
    }
  };
}
function Xe(n) {
  let e, t;
  return e = new se({
    props: {
      name: (
        /*iconName*/
        n[7]
      ),
      size: (
        /*centerIcon*/
        n[3]
      ),
      bg: "var(--seal-solid)",
      fg: "#ffffff",
      bgOpacity: 1
    }
  }), {
    c() {
      E(e.$$.fragment);
    },
    m(i, l) {
      j(e, i, l), t = !0;
    },
    p(i, l) {
      const r = {};
      l & /*iconName*/
      128 && (r.name = /*iconName*/
      i[7]), l & /*centerIcon*/
      8 && (r.size = /*centerIcon*/
      i[3]), e.$set(r);
    },
    i(i) {
      t || (S(e.$$.fragment, i), t = !0);
    },
    o(i) {
      B(e.$$.fragment, i), t = !1;
    },
    d(i) {
      D(e, i);
    }
  };
}
function Ji(n) {
  let e, t, i, l = [], r = /* @__PURE__ */ new Map(), a, s, f, c, u, d, p, g, b, y = Be(
    /*chars*/
    n[5]
  );
  const M = (C) => (
    /*index*/
    C[16]
  );
  for (let C = 0; C < y.length; C += 1) {
    let z = We(n, y, C), P = M(z);
    r.set(P, l[C] = Ue(P, z));
  }
  let $ = (
    /*iconName*/
    n[7] && Xe(n)
  );
  return {
    c() {
      e = x("span"), t = x("span"), i = x("span");
      for (let C = 0; C < l.length; C += 1)
        l[C].c();
      a = V(), s = x("span"), f = x("span"), $ && $.c(), o(i, "class", "ring svelte-1wx095d"), o(i, "aria-hidden", "true"), o(f, "class", "center-pill svelte-1wx095d"), o(s, "class", "center svelte-1wx095d"), o(s, "aria-hidden", "true"), o(t, "class", c = "seal " + /*variant*/
      n[1] + " svelte-1wx095d"), o(t, "style", u = `--seal-solid:${/*badgeColor*/
      n[6]}; --seal-size:${/*size*/
      n[2]}px; --seal-font:${/*ringFontPx*/
      n[4]}px;`), o(t, "role", "note"), o(t, "aria-label", d = /*badge*/
      n[0].label), o(e, "slot", "trigger"), o(e, "role", "presentation");
    },
    m(C, z) {
      k(C, e, z), _(e, t), _(t, i);
      for (let P = 0; P < l.length; P += 1)
        l[P] && l[P].m(i, null);
      _(t, a), _(t, s), _(s, f), $ && $.m(f, null), p = !0, g || (b = I(e, "keydown", en), g = !0);
    },
    p(C, z) {
      z & /*chars*/
      32 && (y = Be(
        /*chars*/
        C[5]
      ), l = Bt(l, z, M, 1, C, y, r, i, Mt, Ue, null, We)), /*iconName*/
      C[7] ? $ ? ($.p(C, z), z & /*iconName*/
      128 && S($, 1)) : ($ = Xe(C), $.c(), S($, 1), $.m(f, null)) : $ && (A(), B($, 1, 1, () => {
        $ = null;
      }), F()), (!p || z & /*variant*/
      2 && c !== (c = "seal " + /*variant*/
      C[1] + " svelte-1wx095d")) && o(t, "class", c), (!p || z & /*badgeColor, size, ringFontPx*/
      84 && u !== (u = `--seal-solid:${/*badgeColor*/
      C[6]}; --seal-size:${/*size*/
      C[2]}px; --seal-font:${/*ringFontPx*/
      C[4]}px;`)) && o(t, "style", u), (!p || z & /*badge*/
      1 && d !== (d = /*badge*/
      C[0].label)) && o(t, "aria-label", d);
    },
    i(C) {
      p || (S($), p = !0);
    },
    o(C) {
      B($), p = !1;
    },
    d(C) {
      C && v(e);
      for (let z = 0; z < l.length; z += 1)
        l[z].d();
      $ && $.d(), g = !1, b();
    }
  };
}
function Ki(n) {
  let e, t, i = (
    /*badge*/
    n[0] && Ge(n)
  );
  return {
    c() {
      i && i.c(), e = N();
    },
    m(l, r) {
      i && i.m(l, r), k(l, e, r), t = !0;
    },
    p(l, [r]) {
      /*badge*/
      l[0] ? i ? (i.p(l, r), r & /*badge*/
      1 && S(i, 1)) : (i = Ge(l), i.c(), S(i, 1), i.m(e.parentNode, e)) : i && (A(), B(i, 1, 1, () => {
        i = null;
      }), F());
    },
    i(l) {
      t || (S(i), t = !0);
    },
    o(l) {
      B(i), t = !1;
    },
    d(l) {
      l && v(e), i && i.d(l);
    }
  };
}
function Qi(n, e, t) {
  return Math.max(e, Math.min(t, n));
}
const en = () => {
};
function tn(n, e, t) {
  let i, l, r, a, s, f, c, { badge: u } = e, { variant: d = "outlined" } = e, { ringText: p = null } = e, { repeat: g = 2 } = e, { separator: b = " • " } = e, { size: y = 76 } = e, { sealFontScale: M = 0.12 } = e;
  return n.$$set = ($) => {
    "badge" in $ && t(0, u = $.badge), "variant" in $ && t(1, d = $.variant), "ringText" in $ && t(8, p = $.ringText), "repeat" in $ && t(9, g = $.repeat), "separator" in $ && t(10, b = $.separator), "size" in $ && t(2, y = $.size), "sealFontScale" in $ && t(11, M = $.sealFontScale);
  }, n.$$.update = () => {
    n.$$.dirty & /*badge*/
    1 && t(7, i = (u == null ? void 0 : u.icon) ?? null), n.$$.dirty & /*badge*/
    1 && t(6, l = String((u == null ? void 0 : u.color) ?? "").trim() || "rgb(17, 24, 39)"), n.$$.dirty & /*ringText, badge*/
    257 && t(12, r = (p ?? (u == null ? void 0 : u.label) ?? "").trim() || "—"), n.$$.dirty & /*repeat*/
    512 && t(13, a = Qi(Math.floor(g || 1), 1, 10)), n.$$.dirty & /*repeatSafe, displayText, separator*/
    13312 && t(5, s = [...Array(a)].map(() => [...r.toUpperCase()].concat([...b.toUpperCase()])).flat()), n.$$.dirty & /*size, sealFontScale*/
    2052 && t(4, f = Math.round(y * M)), n.$$.dirty & /*size*/
    4 && t(3, c = Math.round(y * 0.3));
  }, [
    u,
    d,
    y,
    c,
    f,
    s,
    l,
    i,
    p,
    g,
    b,
    M,
    r,
    a
  ];
}
class ot extends W {
  constructor(e) {
    super(), H(
      this,
      e,
      tn,
      Ki,
      Z,
      {
        badge: 0,
        variant: 1,
        ringText: 8,
        repeat: 9,
        separator: 10,
        size: 2,
        sealFontScale: 11
      },
      Yi
    );
  }
  get badge() {
    return this.$$.ctx[0];
  }
  set badge(e) {
    this.$$set({ badge: e }), w();
  }
  get variant() {
    return this.$$.ctx[1];
  }
  set variant(e) {
    this.$$set({ variant: e }), w();
  }
  get ringText() {
    return this.$$.ctx[8];
  }
  set ringText(e) {
    this.$$set({ ringText: e }), w();
  }
  get repeat() {
    return this.$$.ctx[9];
  }
  set repeat(e) {
    this.$$set({ repeat: e }), w();
  }
  get separator() {
    return this.$$.ctx[10];
  }
  set separator(e) {
    this.$$set({ separator: e }), w();
  }
  get size() {
    return this.$$.ctx[2];
  }
  set size(e) {
    this.$$set({ size: e }), w();
  }
  get sealFontScale() {
    return this.$$.ctx[11];
  }
  set sealFontScale(e) {
    this.$$set({ sealFontScale: e }), w();
  }
}
q(ot, { badge: {}, variant: {}, ringText: {}, repeat: {}, separator: {}, size: {}, sealFontScale: {} }, [], [], !0);
function nn(n) {
  let e, t;
  return e = new ot({
    props: {
      badge: (
        /*badge*/
        n[0]
      ),
      variant: (
        /*roundCircularTextVariant*/
        n[11]
      ),
      ringText: (
        /*ringText*/
        n[7]
      ),
      repeat: (
        /*repeat*/
        n[8]
      ),
      separator: (
        /*separator*/
        n[9]
      ),
      size: (
        /*size*/
        n[2] ?? 76
      ),
      sealFontScale: (
        /*sealFontScale*/
        n[10]
      )
    }
  }), {
    c() {
      E(e.$$.fragment);
    },
    m(i, l) {
      j(e, i, l), t = !0;
    },
    p(i, l) {
      const r = {};
      l & /*badge*/
      1 && (r.badge = /*badge*/
      i[0]), l & /*roundCircularTextVariant*/
      2048 && (r.variant = /*roundCircularTextVariant*/
      i[11]), l & /*ringText*/
      128 && (r.ringText = /*ringText*/
      i[7]), l & /*repeat*/
      256 && (r.repeat = /*repeat*/
      i[8]), l & /*separator*/
      512 && (r.separator = /*separator*/
      i[9]), l & /*size*/
      4 && (r.size = /*size*/
      i[2] ?? 76), l & /*sealFontScale*/
      1024 && (r.sealFontScale = /*sealFontScale*/
      i[10]), e.$set(r);
    },
    i(i) {
      t || (S(e.$$.fragment, i), t = !0);
    },
    o(i) {
      B(e.$$.fragment, i), t = !1;
    },
    d(i) {
      D(e, i);
    }
  };
}
function ln(n) {
  let e, t;
  return e = new rt({
    props: {
      badge: (
        /*badge*/
        n[0]
      ),
      variant: (
        /*roundVariant*/
        n[12]
      ),
      size: (
        /*size*/
        n[2] ?? 44
      )
    }
  }), {
    c() {
      E(e.$$.fragment);
    },
    m(i, l) {
      j(e, i, l), t = !0;
    },
    p(i, l) {
      const r = {};
      l & /*badge*/
      1 && (r.badge = /*badge*/
      i[0]), l & /*roundVariant*/
      4096 && (r.variant = /*roundVariant*/
      i[12]), l & /*size*/
      4 && (r.size = /*size*/
      i[2] ?? 44), e.$set(r);
    },
    i(i) {
      t || (S(e.$$.fragment, i), t = !0);
    },
    o(i) {
      B(e.$$.fragment, i), t = !1;
    },
    d(i) {
      D(e, i);
    }
  };
}
function rn(n) {
  let e, t;
  return e = new lt({
    props: {
      badge: (
        /*badge*/
        n[0]
      ),
      variant: (
        /*miniVariant*/
        n[13]
      ),
      fixed: (
        /*fixed*/
        n[3]
      ),
      offsetPx: (
        /*offsetPx*/
        n[4]
      ),
      expandDirection: (
        /*expandDirection*/
        n[5]
      ),
      iconBgShape: (
        /*iconBgShape*/
        n[6] ?? "round"
      )
    }
  }), {
    c() {
      E(e.$$.fragment);
    },
    m(i, l) {
      j(e, i, l), t = !0;
    },
    p(i, l) {
      const r = {};
      l & /*badge*/
      1 && (r.badge = /*badge*/
      i[0]), l & /*miniVariant*/
      8192 && (r.variant = /*miniVariant*/
      i[13]), l & /*fixed*/
      8 && (r.fixed = /*fixed*/
      i[3]), l & /*offsetPx*/
      16 && (r.offsetPx = /*offsetPx*/
      i[4]), l & /*expandDirection*/
      32 && (r.expandDirection = /*expandDirection*/
      i[5]), l & /*iconBgShape*/
      64 && (r.iconBgShape = /*iconBgShape*/
      i[6] ?? "round"), e.$set(r);
    },
    i(i) {
      t || (S(e.$$.fragment, i), t = !0);
    },
    o(i) {
      B(e.$$.fragment, i), t = !1;
    },
    d(i) {
      D(e, i);
    }
  };
}
function on(n) {
  let e, t;
  return e = new nt({
    props: {
      badge: (
        /*badge*/
        n[0]
      ),
      variant: (
        /*monoVariant*/
        n[14]
      )
    }
  }), {
    c() {
      E(e.$$.fragment);
    },
    m(i, l) {
      j(e, i, l), t = !0;
    },
    p(i, l) {
      const r = {};
      l & /*badge*/
      1 && (r.badge = /*badge*/
      i[0]), l & /*monoVariant*/
      16384 && (r.variant = /*monoVariant*/
      i[14]), e.$set(r);
    },
    i(i) {
      t || (S(e.$$.fragment, i), t = !0);
    },
    o(i) {
      B(e.$$.fragment, i), t = !1;
    },
    d(i) {
      D(e, i);
    }
  };
}
function an(n) {
  let e, t, i, l;
  const r = [on, rn, ln, nn], a = [];
  function s(f, c) {
    return (
      /*type*/
      f[1] === "mono" ? 0 : (
        /*type*/
        f[1] === "mini" ? 1 : (
          /*type*/
          f[1] === "round" ? 2 : 3
        )
      )
    );
  }
  return e = s(n), t = a[e] = r[e](n), {
    c() {
      t.c(), i = N();
    },
    m(f, c) {
      a[e].m(f, c), k(f, i, c), l = !0;
    },
    p(f, [c]) {
      let u = e;
      e = s(f), e === u ? a[e].p(f, c) : (A(), B(a[u], 1, 1, () => {
        a[u] = null;
      }), F(), t = a[e], t ? t.p(f, c) : (t = a[e] = r[e](f), t.c()), S(t, 1), t.m(i.parentNode, i));
    },
    i(f) {
      l || (S(t), l = !0);
    },
    o(f) {
      B(t), l = !1;
    },
    d(f) {
      f && v(i), a[e].d(f);
    }
  };
}
function sn(n, e, t) {
  let i, l, r, a, { badge: s } = e, { type: f = "mono" } = e, { variant: c = void 0 } = e, { size: u = void 0 } = e, { fixed: d = !1 } = e, { offsetPx: p = 16 } = e, { expandDirection: g = "right" } = e, { iconBgShape: b = void 0 } = e, { ringText: y = null } = e, { repeat: M = 2 } = e, { separator: $ = " • " } = e, { sealFontScale: C = 0.12 } = e;
  return n.$$set = (z) => {
    "badge" in z && t(0, s = z.badge), "type" in z && t(1, f = z.type), "variant" in z && t(15, c = z.variant), "size" in z && t(2, u = z.size), "fixed" in z && t(3, d = z.fixed), "offsetPx" in z && t(4, p = z.offsetPx), "expandDirection" in z && t(5, g = z.expandDirection), "iconBgShape" in z && t(6, b = z.iconBgShape), "ringText" in z && t(7, y = z.ringText), "repeat" in z && t(8, M = z.repeat), "separator" in z && t(9, $ = z.separator), "sealFontScale" in z && t(10, C = z.sealFontScale);
  }, n.$$.update = () => {
    n.$$.dirty & /*variant*/
    32768 && t(14, i = c ?? "filled"), n.$$.dirty & /*variant*/
    32768 && t(13, l = c ?? "outlined"), n.$$.dirty & /*variant*/
    32768 && t(12, r = c ?? "solid"), n.$$.dirty & /*variant*/
    32768 && t(11, a = c ?? "outlined");
  }, [
    s,
    f,
    u,
    d,
    p,
    g,
    b,
    y,
    M,
    $,
    C,
    a,
    r,
    l,
    i,
    c
  ];
}
class at extends W {
  constructor(e) {
    super(), H(this, e, sn, an, Z, {
      badge: 0,
      type: 1,
      variant: 15,
      size: 2,
      fixed: 3,
      offsetPx: 4,
      expandDirection: 5,
      iconBgShape: 6,
      ringText: 7,
      repeat: 8,
      separator: 9,
      sealFontScale: 10
    });
  }
  get badge() {
    return this.$$.ctx[0];
  }
  set badge(e) {
    this.$$set({ badge: e }), w();
  }
  get type() {
    return this.$$.ctx[1];
  }
  set type(e) {
    this.$$set({ type: e }), w();
  }
  get variant() {
    return this.$$.ctx[15];
  }
  set variant(e) {
    this.$$set({ variant: e }), w();
  }
  get size() {
    return this.$$.ctx[2];
  }
  set size(e) {
    this.$$set({ size: e }), w();
  }
  get fixed() {
    return this.$$.ctx[3];
  }
  set fixed(e) {
    this.$$set({ fixed: e }), w();
  }
  get offsetPx() {
    return this.$$.ctx[4];
  }
  set offsetPx(e) {
    this.$$set({ offsetPx: e }), w();
  }
  get expandDirection() {
    return this.$$.ctx[5];
  }
  set expandDirection(e) {
    this.$$set({ expandDirection: e }), w();
  }
  get iconBgShape() {
    return this.$$.ctx[6];
  }
  set iconBgShape(e) {
    this.$$set({ iconBgShape: e }), w();
  }
  get ringText() {
    return this.$$.ctx[7];
  }
  set ringText(e) {
    this.$$set({ ringText: e }), w();
  }
  get repeat() {
    return this.$$.ctx[8];
  }
  set repeat(e) {
    this.$$set({ repeat: e }), w();
  }
  get separator() {
    return this.$$.ctx[9];
  }
  set separator(e) {
    this.$$set({ separator: e }), w();
  }
  get sealFontScale() {
    return this.$$.ctx[10];
  }
  set sealFontScale(e) {
    this.$$set({ sealFontScale: e }), w();
  }
}
q(at, { badge: {}, type: {}, variant: {}, size: {}, fixed: { type: "Boolean" }, offsetPx: {}, expandDirection: {}, iconBgShape: {}, ringText: {}, repeat: {}, separator: {}, sealFontScale: {} }, [], [], !0);
function fn(n) {
  let e, t;
  return e = new at({
    props: {
      badge: (
        /*computedBadge*/
        n[11]
      ),
      type: (
        /*type*/
        n[0]
      ),
      variant: (
        /*variant*/
        n[1]
      ),
      size: (
        /*size*/
        n[2]
      ),
      fixed: (
        /*fixed*/
        n[3]
      ),
      offsetPx: (
        /*offsetPx*/
        n[4]
      ),
      expandDirection: (
        /*expandDirection*/
        n[5]
      ),
      iconBgShape: (
        /*iconBgShape*/
        n[6] ?? void 0
      ),
      ringText: (
        /*ringText*/
        n[7]
      ),
      repeat: (
        /*repeat*/
        n[8]
      ),
      separator: (
        /*separator*/
        n[9]
      ),
      sealFontScale: (
        /*sealFontScale*/
        n[10]
      )
    }
  }), {
    c() {
      E(e.$$.fragment);
    },
    m(i, l) {
      j(e, i, l), t = !0;
    },
    p(i, [l]) {
      const r = {};
      l & /*computedBadge*/
      2048 && (r.badge = /*computedBadge*/
      i[11]), l & /*type*/
      1 && (r.type = /*type*/
      i[0]), l & /*variant*/
      2 && (r.variant = /*variant*/
      i[1]), l & /*size*/
      4 && (r.size = /*size*/
      i[2]), l & /*fixed*/
      8 && (r.fixed = /*fixed*/
      i[3]), l & /*offsetPx*/
      16 && (r.offsetPx = /*offsetPx*/
      i[4]), l & /*expandDirection*/
      32 && (r.expandDirection = /*expandDirection*/
      i[5]), l & /*iconBgShape*/
      64 && (r.iconBgShape = /*iconBgShape*/
      i[6] ?? void 0), l & /*ringText*/
      128 && (r.ringText = /*ringText*/
      i[7]), l & /*repeat*/
      256 && (r.repeat = /*repeat*/
      i[8]), l & /*separator*/
      512 && (r.separator = /*separator*/
      i[9]), l & /*sealFontScale*/
      1024 && (r.sealFontScale = /*sealFontScale*/
      i[10]), e.$set(r);
    },
    i(i) {
      t || (S(e.$$.fragment, i), t = !0);
    },
    o(i) {
      B(e.$$.fragment, i), t = !1;
    },
    d(i) {
      D(e, i);
    }
  };
}
const cn = "rgb(17, 24, 39)";
function Ye(n) {
  return /\bdownload\b/i.test(n) || /\bopen[-\s]*data\b/i.test(n);
}
function un(n, e, t) {
  let i, { badge: l = null } = e, { label: r = null } = e, { color: a = null } = e, { icon: s = null } = e, { description: f = null } = e, { actionText: c = null } = e, { actionIcon: u = null } = e, { interactive: d = !1 } = e, { type: p = "mono" } = e, { variant: g = void 0 } = e, { size: b = void 0 } = e, { fixed: y = !1 } = e, { offsetPx: M = 16 } = e, { expandDirection: $ = "right" } = e, { iconBgShape: C = null } = e, { ringText: z = null } = e, { repeat: P = 2 } = e, { separator: K = " • " } = e, { sealFontScale: G = 0.12 } = e;
  return n.$$set = (h) => {
    "badge" in h && t(12, l = h.badge), "label" in h && t(13, r = h.label), "color" in h && t(14, a = h.color), "icon" in h && t(15, s = h.icon), "description" in h && t(16, f = h.description), "actionText" in h && t(17, c = h.actionText), "actionIcon" in h && t(18, u = h.actionIcon), "interactive" in h && t(19, d = h.interactive), "type" in h && t(0, p = h.type), "variant" in h && t(1, g = h.variant), "size" in h && t(2, b = h.size), "fixed" in h && t(3, y = h.fixed), "offsetPx" in h && t(4, M = h.offsetPx), "expandDirection" in h && t(5, $ = h.expandDirection), "iconBgShape" in h && t(6, C = h.iconBgShape), "ringText" in h && t(7, z = h.ringText), "repeat" in h && t(8, P = h.repeat), "separator" in h && t(9, K = h.separator), "sealFontScale" in h && t(10, G = h.sealFontScale);
  }, n.$$.update = () => {
    n.$$.dirty & /*badge, label, color, icon, description, actionText, interactive, actionIcon*/
    1044480 && t(11, i = l ?? {
      label: (r ?? "").trim() || "—",
      color: (a ?? "").trim() || cn,
      icon: s ?? void 0,
      description: (f ?? "").trim() || void 0,
      actionText: (c ?? "").trim() || (d ? Ye((r ?? "").trim()) ? "Click to download" : "Click to interact" : void 0),
      actionIcon: u ?? (d ? Ye((r ?? "").trim()) ? "Download" : "Interactive" : void 0)
    });
  }, [
    p,
    g,
    b,
    y,
    M,
    $,
    C,
    z,
    P,
    K,
    G,
    i,
    l,
    r,
    a,
    s,
    f,
    c,
    u,
    d
  ];
}
class st extends W {
  constructor(e) {
    super(), H(this, e, un, fn, Z, {
      badge: 12,
      label: 13,
      color: 14,
      icon: 15,
      description: 16,
      actionText: 17,
      actionIcon: 18,
      interactive: 19,
      type: 0,
      variant: 1,
      size: 2,
      fixed: 3,
      offsetPx: 4,
      expandDirection: 5,
      iconBgShape: 6,
      ringText: 7,
      repeat: 8,
      separator: 9,
      sealFontScale: 10
    });
  }
  get badge() {
    return this.$$.ctx[12];
  }
  set badge(e) {
    this.$$set({ badge: e }), w();
  }
  get label() {
    return this.$$.ctx[13];
  }
  set label(e) {
    this.$$set({ label: e }), w();
  }
  get color() {
    return this.$$.ctx[14];
  }
  set color(e) {
    this.$$set({ color: e }), w();
  }
  get icon() {
    return this.$$.ctx[15];
  }
  set icon(e) {
    this.$$set({ icon: e }), w();
  }
  get description() {
    return this.$$.ctx[16];
  }
  set description(e) {
    this.$$set({ description: e }), w();
  }
  get actionText() {
    return this.$$.ctx[17];
  }
  set actionText(e) {
    this.$$set({ actionText: e }), w();
  }
  get actionIcon() {
    return this.$$.ctx[18];
  }
  set actionIcon(e) {
    this.$$set({ actionIcon: e }), w();
  }
  get interactive() {
    return this.$$.ctx[19];
  }
  set interactive(e) {
    this.$$set({ interactive: e }), w();
  }
  get type() {
    return this.$$.ctx[0];
  }
  set type(e) {
    this.$$set({ type: e }), w();
  }
  get variant() {
    return this.$$.ctx[1];
  }
  set variant(e) {
    this.$$set({ variant: e }), w();
  }
  get size() {
    return this.$$.ctx[2];
  }
  set size(e) {
    this.$$set({ size: e }), w();
  }
  get fixed() {
    return this.$$.ctx[3];
  }
  set fixed(e) {
    this.$$set({ fixed: e }), w();
  }
  get offsetPx() {
    return this.$$.ctx[4];
  }
  set offsetPx(e) {
    this.$$set({ offsetPx: e }), w();
  }
  get expandDirection() {
    return this.$$.ctx[5];
  }
  set expandDirection(e) {
    this.$$set({ expandDirection: e }), w();
  }
  get iconBgShape() {
    return this.$$.ctx[6];
  }
  set iconBgShape(e) {
    this.$$set({ iconBgShape: e }), w();
  }
  get ringText() {
    return this.$$.ctx[7];
  }
  set ringText(e) {
    this.$$set({ ringText: e }), w();
  }
  get repeat() {
    return this.$$.ctx[8];
  }
  set repeat(e) {
    this.$$set({ repeat: e }), w();
  }
  get separator() {
    return this.$$.ctx[9];
  }
  set separator(e) {
    this.$$set({ separator: e }), w();
  }
  get sealFontScale() {
    return this.$$.ctx[10];
  }
  set sealFontScale(e) {
    this.$$set({ sealFontScale: e }), w();
  }
}
customElements.define("vis-badge", q(st, { badge: { type: "Object" }, label: {}, color: {}, icon: {}, description: {}, actionText: {}, actionIcon: {}, interactive: { type: "Boolean" }, type: {}, variant: {}, size: { type: "Number" }, fixed: { type: "Boolean" }, offsetPx: { type: "Number" }, expandDirection: {}, iconBgShape: { type: "String", attribute: "icon-bg-shape" }, ringText: {}, repeat: { type: "Number" }, separator: {}, sealFontScale: { type: "Number" } }, [], [], !0, (n) => class extends n {
  addEventListener(e, t, i) {
    return e === "click" && (this.interactive = !0), super.addEventListener(e, t, i);
  }
}));
if (!customElements.get("vis-badge")) {
  const n = st.element;
  customElements.define("vis-badge", n);
}
