var yt = Object.defineProperty;
var kt = (i, e, t) => e in i ? yt(i, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : i[e] = t;
var R = (i, e, t) => kt(i, typeof e != "symbol" ? e + "" : e, t);
function se() {
}
function wt(i, e) {
  for (const t in e) i[t] = e[t];
  return (
    /** @type {T & S} */
    i
  );
}
function ot(i) {
  return i();
}
function Ce() {
  return /* @__PURE__ */ Object.create(null);
}
function ne(i) {
  i.forEach(ot);
}
function Te(i) {
  return typeof i == "function";
}
function U(i, e) {
  return i != i ? e == e : i !== e || i && typeof i == "object" || typeof i == "function";
}
function Mt(i) {
  return Object.keys(i).length === 0;
}
function fe(i, e, t, n) {
  if (i) {
    const l = at(i, e, t, n);
    return i[0](l);
  }
}
function at(i, e, t, n) {
  return i[1] && n ? wt(t.ctx.slice(), i[1](n(e))) : t.ctx;
}
function ce(i, e, t, n) {
  if (i[2] && n) {
    const l = i[2](n(t));
    if (e.dirty === void 0)
      return l;
    if (typeof l == "object") {
      const r = [], a = Math.max(e.dirty.length, l.length);
      for (let f = 0; f < a; f += 1)
        r[f] = e.dirty[f] | l[f];
      return r;
    }
    return e.dirty | l;
  }
  return e.dirty;
}
function ue(i, e, t, n, l, r) {
  if (l) {
    const a = at(e, t, n, r);
    i.p(a, l);
  }
}
function de(i) {
  if (i.ctx.length > 32) {
    const e = [], t = i.ctx.length / 32;
    for (let n = 0; n < t; n++)
      e[n] = -1;
    return e;
  }
  return -1;
}
function St(i) {
  return i && Te(i.destroy) ? i.destroy : se;
}
const zt = typeof window < "u" ? window : typeof globalThis < "u" ? globalThis : (
  // @ts-ignore Node typings have this
  global
);
function v(i, e) {
  i.appendChild(e);
}
function he(i, e, t) {
  const n = xt(i);
  if (!n.getElementById(e)) {
    const l = B("style");
    l.id = e, l.textContent = t, $t(n, l);
  }
}
function xt(i) {
  if (!i) return document;
  const e = i.getRootNode ? i.getRootNode() : i.ownerDocument;
  return e && /** @type {ShadowRoot} */
  e.host ? (
    /** @type {ShadowRoot} */
    e
  ) : i.ownerDocument;
}
function $t(i, e) {
  return v(
    /** @type {Document} */
    i.head || i,
    e
  ), e.sheet;
}
function y(i, e, t) {
  i.insertBefore(e, t || null);
}
function m(i) {
  i.parentNode && i.parentNode.removeChild(i);
}
function B(i) {
  return document.createElement(i);
}
function M(i) {
  return document.createElementNS("http://www.w3.org/2000/svg", i);
}
function G(i) {
  return document.createTextNode(i);
}
function Z() {
  return G(" ");
}
function F() {
  return G("");
}
function K(i, e, t, n) {
  return i.addEventListener(e, t, n), () => i.removeEventListener(e, t, n);
}
function o(i, e, t) {
  t == null ? i.removeAttribute(e) : i.getAttribute(e) !== t && i.setAttribute(e, t);
}
function Pt(i) {
  return Array.from(i.childNodes);
}
function le(i, e) {
  e = "" + e, i.data !== e && (i.data = /** @type {string} */
  e);
}
function be(i, e, t, n) {
  t == null ? i.style.removeProperty(e) : i.style.setProperty(e, t, "");
}
function Bt(i, e, { bubbles: t = !1, cancelable: n = !1 } = {}) {
  return new CustomEvent(i, { detail: e, bubbles: t, cancelable: n });
}
function Tt(i) {
  const e = {};
  return i.childNodes.forEach(
    /** @param {Element} node */
    (t) => {
      e[t.slot || "default"] = !0;
    }
  ), e;
}
let ve;
function me(i) {
  ve = i;
}
function Dt() {
  if (!ve) throw new Error("Function called outside component initialization");
  return ve;
}
function De() {
  const i = Dt();
  return (e, t, { cancelable: n = !1 } = {}) => {
    const l = i.$$.callbacks[e];
    if (l) {
      const r = Bt(
        /** @type {string} */
        e,
        t,
        { cancelable: n }
      );
      return l.slice().forEach((a) => {
        a.call(i, r);
      }), !r.defaultPrevented;
    }
    return !0;
  };
}
function ze(i, e) {
  const t = i.$$.callbacks[e.type];
  t && t.slice().forEach((n) => n.call(this, e));
}
const oe = [], Se = [];
let ae = [];
const Ne = [], st = /* @__PURE__ */ Promise.resolve();
let Pe = !1;
function ft() {
  Pe || (Pe = !0, st.then(p));
}
function Ct() {
  return ft(), st;
}
function Be(i) {
  ae.push(i);
}
const $e = /* @__PURE__ */ new Set();
let re = 0;
function p() {
  if (re !== 0)
    return;
  const i = ve;
  do {
    try {
      for (; re < oe.length; ) {
        const e = oe[re];
        re++, me(e), Nt(e.$$);
      }
    } catch (e) {
      throw oe.length = 0, re = 0, e;
    }
    for (me(null), oe.length = 0, re = 0; Se.length; ) Se.pop()();
    for (let e = 0; e < ae.length; e += 1) {
      const t = ae[e];
      $e.has(t) || ($e.add(t), t());
    }
    ae.length = 0;
  } while (oe.length);
  for (; Ne.length; )
    Ne.pop()();
  Pe = !1, $e.clear(), me(i);
}
function Nt(i) {
  if (i.fragment !== null) {
    i.update(), ne(i.before_update);
    const e = i.dirty;
    i.dirty = [-1], i.fragment && i.fragment.p(i.ctx, e), i.after_update.forEach(Be);
  }
}
function qt(i) {
  const e = [], t = [];
  ae.forEach((n) => i.indexOf(n) === -1 ? e.push(n) : t.push(n)), t.forEach((n) => n()), ae = e;
}
const we = /* @__PURE__ */ new Set();
let ie;
function O() {
  ie = {
    r: 0,
    c: [],
    p: ie
    // parent group
  };
}
function W() {
  ie.r || ne(ie.c), ie = ie.p;
}
function S(i, e) {
  i && i.i && (we.delete(i), i.i(e));
}
function $(i, e, t, n) {
  if (i && i.o) {
    if (we.has(i)) return;
    we.add(i), ie.c.push(() => {
      we.delete(i), n && (t && i.d(1), n());
    }), i.o(e);
  } else n && n();
}
function qe(i) {
  return (i == null ? void 0 : i.length) !== void 0 ? i : Array.from(i);
}
function At(i, e) {
  i.d(1), e.delete(i.key);
}
function Ft(i, e, t, n, l, r, a, f, s, c, u, d) {
  let h = i.length, _ = r.length, w = h;
  const b = {};
  for (; w--; ) b[i[w].key] = w;
  const x = [], k = /* @__PURE__ */ new Map(), P = /* @__PURE__ */ new Map(), E = [];
  for (w = _; w--; ) {
    const C = d(l, r, w), g = t(C);
    let D = a.get(g);
    D ? E.push(() => D.p(C, e)) : (D = c(g, C), D.c()), k.set(g, x[w] = D), g in b && P.set(g, Math.abs(w - b[g]));
  }
  const T = /* @__PURE__ */ new Set(), V = /* @__PURE__ */ new Set();
  function I(C) {
    S(C, 1), C.m(f, u), a.set(C.key, C), u = C.first, _--;
  }
  for (; h && _; ) {
    const C = x[_ - 1], g = i[h - 1], D = C.key, H = g.key;
    C === g ? (u = C.first, h--, _--) : k.has(H) ? !a.has(D) || T.has(D) ? I(C) : V.has(H) ? h-- : P.get(D) > P.get(H) ? (V.add(D), I(C)) : (T.add(H), h--) : (s(g, a), h--);
  }
  for (; h--; ) {
    const C = i[h];
    k.has(C.key) || s(C, a);
  }
  for (; _; ) I(x[_ - 1]);
  return ne(E), x;
}
function A(i) {
  i && i.c();
}
function N(i, e, t) {
  const { fragment: n, after_update: l } = i.$$;
  n && n.m(e, t), Be(() => {
    const r = i.$$.on_mount.map(ot).filter(Te);
    i.$$.on_destroy ? i.$$.on_destroy.push(...r) : ne(r), i.$$.on_mount = [];
  }), l.forEach(Be);
}
function q(i, e) {
  const t = i.$$;
  t.fragment !== null && (qt(t.after_update), ne(t.on_destroy), t.fragment && t.fragment.d(e), t.on_destroy = t.fragment = null, t.ctx = []);
}
function Et(i, e) {
  i.$$.dirty[0] === -1 && (oe.push(i), ft(), i.$$.dirty.fill(0)), i.$$.dirty[e / 31 | 0] |= 1 << e % 31;
}
function Y(i, e, t, n, l, r, a = null, f = [-1]) {
  const s = ve;
  me(i);
  const c = i.$$ = {
    fragment: null,
    ctx: [],
    // state
    props: r,
    update: se,
    not_equal: l,
    bound: Ce(),
    // lifecycle
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(e.context || (s ? s.$$.context : [])),
    // everything else
    callbacks: Ce(),
    dirty: f,
    skip_bound: !1,
    root: e.target || s.$$.root
  };
  a && a(c.root);
  let u = !1;
  if (c.ctx = t ? t(i, e.props || {}, (d, h, ..._) => {
    const w = _.length ? _[0] : h;
    return c.ctx && l(c.ctx[d], c.ctx[d] = w) && (!c.skip_bound && c.bound[d] && c.bound[d](w), u && Et(i, d)), h;
  }) : [], c.update(), u = !0, ne(c.before_update), c.fragment = n ? n(c.ctx) : !1, e.target) {
    if (e.hydrate) {
      const d = Pt(e.target);
      c.fragment && c.fragment.l(d), d.forEach(m);
    } else
      c.fragment && c.fragment.c();
    e.intro && S(i.$$.fragment), N(i, e.target, e.anchor), p();
  }
  me(s);
}
let ct;
typeof HTMLElement == "function" && (ct = class extends HTMLElement {
  constructor(e, t, n) {
    super();
    /** The Svelte component constructor */
    R(this, "$$ctor");
    /** Slots */
    R(this, "$$s");
    /** The Svelte component instance */
    R(this, "$$c");
    /** Whether or not the custom element is connected */
    R(this, "$$cn", !1);
    /** Component props data */
    R(this, "$$d", {});
    /** `true` if currently in the process of reflecting component props back to attributes */
    R(this, "$$r", !1);
    /** @type {Record<string, CustomElementPropDefinition>} Props definition (name, reflected, type etc) */
    R(this, "$$p_d", {});
    /** @type {Record<string, Function[]>} Event listeners */
    R(this, "$$l", {});
    /** @type {Map<Function, Function>} Event listener unsubscribe functions */
    R(this, "$$l_u", /* @__PURE__ */ new Map());
    this.$$ctor = e, this.$$s = t, n && this.attachShadow({ mode: "open" });
  }
  addEventListener(e, t, n) {
    if (this.$$l[e] = this.$$l[e] || [], this.$$l[e].push(t), this.$$c) {
      const l = this.$$c.$on(e, t);
      this.$$l_u.set(t, l);
    }
    super.addEventListener(e, t, n);
  }
  removeEventListener(e, t, n) {
    if (super.removeEventListener(e, t, n), this.$$c) {
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
          let f;
          return {
            c: function() {
              f = B("slot"), a !== "default" && o(f, "name", a);
            },
            /**
             * @param {HTMLElement} target
             * @param {HTMLElement} [anchor]
             */
            m: function(u, d) {
              y(u, f, d);
            },
            d: function(u) {
              u && m(f);
            }
          };
        };
      };
      var e = t;
      if (await Promise.resolve(), !this.$$cn || this.$$c)
        return;
      const n = {}, l = Tt(this);
      for (const a of this.$$s)
        a in l && (n[a] = [t(a)]);
      for (const a of this.attributes) {
        const f = this.$$g_p(a.name);
        f in this.$$d || (this.$$d[f] = Me(f, a.value, this.$$p_d, "toProp"));
      }
      for (const a in this.$$p_d)
        !(a in this.$$d) && this[a] !== void 0 && (this.$$d[a] = this[a], delete this[a]);
      this.$$c = new this.$$ctor({
        target: this.shadowRoot || this,
        props: {
          ...this.$$d,
          $$slots: n,
          $$scope: {
            ctx: []
          }
        }
      });
      const r = () => {
        this.$$r = !0;
        for (const a in this.$$p_d)
          if (this.$$d[a] = this.$$c.$$.ctx[this.$$c.$$.props[a]], this.$$p_d[a].reflect) {
            const f = Me(
              a,
              this.$$d[a],
              this.$$p_d,
              "toAttribute"
            );
            f == null ? this.removeAttribute(this.$$p_d[a].attribute || a) : this.setAttribute(this.$$p_d[a].attribute || a, f);
          }
        this.$$r = !1;
      };
      this.$$c.$$.after_update.push(r), r();
      for (const a in this.$$l)
        for (const f of this.$$l[a]) {
          const s = this.$$c.$on(a, f);
          this.$$l_u.set(f, s);
        }
      this.$$l = {};
    }
  }
  // We don't need this when working within Svelte code, but for compatibility of people using this outside of Svelte
  // and setting attributes through setAttribute etc, this is helpful
  attributeChangedCallback(e, t, n) {
    var l;
    this.$$r || (e = this.$$g_p(e), this.$$d[e] = Me(e, n, this.$$p_d, "toProp"), (l = this.$$c) == null || l.$set({ [e]: this.$$d[e] }));
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
function Me(i, e, t, n) {
  var r;
  const l = (r = t[i]) == null ? void 0 : r.type;
  if (e = l === "Boolean" && typeof e != "boolean" ? e != null : e, !n || !t[i])
    return e;
  if (n === "toAttribute")
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
function X(i, e, t, n, l, r) {
  let a = class extends ct {
    constructor() {
      super(i, t, l), this.$$p_d = e;
    }
    static get observedAttributes() {
      return Object.keys(e).map(
        (f) => (e[f].attribute || f).toLowerCase()
      );
    }
  };
  return Object.keys(e).forEach((f) => {
    Object.defineProperty(a.prototype, f, {
      get() {
        return this.$$c && f in this.$$c ? this.$$c[f] : this.$$d[f];
      },
      set(s) {
        var c;
        s = Me(f, s, e), this.$$d[f] = s, (c = this.$$c) == null || c.$set({ [f]: s });
      }
    });
  }), n.forEach((f) => {
    Object.defineProperty(a.prototype, f, {
      get() {
        var s;
        return (s = this.$$c) == null ? void 0 : s[f];
      }
    });
  }), i.element = /** @type {any} */
  a, a;
}
class J {
  constructor() {
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    R(this, "$$");
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    R(this, "$$set");
  }
  /** @returns {void} */
  $destroy() {
    q(this, 1), this.$destroy = se;
  }
  /**
   * @template {Extract<keyof Events, string>} K
   * @param {K} type
   * @param {((e: Events[K]) => void) | null | undefined} callback
   * @returns {() => void}
   */
  $on(e, t) {
    if (!Te(t))
      return se;
    const n = this.$$.callbacks[e] || (this.$$.callbacks[e] = []);
    return n.push(t), () => {
      const l = n.indexOf(t);
      l !== -1 && n.splice(l, 1);
    };
  }
  /**
   * @param {Partial<Props>} props
   * @returns {void}
   */
  $set(e) {
    this.$$set && !Mt(e) && (this.$$.skip_bound = !0, this.$$set(e), this.$$.skip_bound = !1);
  }
}
const It = "4";
typeof window < "u" && (window.__svelte || (window.__svelte = { v: /* @__PURE__ */ new Set() })).v.add(It);
const { window: Ae } = zt;
function Ot(i) {
  he(i, "svelte-17syhza", ".tooltipWrap.svelte-17syhza{position:relative;display:inline-flex;align-items:center}.trigger.svelte-17syhza{display:inline-flex;align-items:center}.content.svelte-17syhza{display:block;width:100%}");
}
const Wt = (i) => ({}), Fe = (i) => ({}), jt = (i) => ({}), Ee = (i) => ({});
function Lt(i) {
  let e, t, n, l, r, a, f, s, c, u, d, h;
  const _ = (
    /*#slots*/
    i[14].trigger
  ), w = fe(
    _,
    i,
    /*$$scope*/
    i[13],
    Ee
  ), b = (
    /*#slots*/
    i[14].content
  ), x = fe(
    b,
    i,
    /*$$scope*/
    i[13],
    Fe
  );
  return {
    c() {
      e = B("span"), t = B("span"), w && w.c(), n = Z(), l = B("span"), r = B("div"), x && x.c(), a = Z(), f = B("span"), o(t, "class", "trigger svelte-17syhza"), o(r, "class", "content svelte-17syhza"), o(f, "class", "bl_tooltipArrow"), o(f, "aria-hidden", "true"), o(
        f,
        "style",
        /*arrowStyle*/
        i[6]
      ), o(l, "class", "bl_tooltip"), o(l, "role", "tooltip"), o(l, "aria-hidden", s = !/*open*/
      i[1]), o(
        l,
        "data-open",
        /*open*/
        i[1]
      ), o(
        l,
        "data-placement",
        /*effectivePlacement*/
        i[4]
      ), o(l, "style", c = `${/*tooltipStyle*/
      i[5]}--bl-tooltip-max-width:${Math.max(
        120,
        /*maxWidthPx*/
        i[0]
      )}px;`), o(e, "class", "tooltipWrap svelte-17syhza"), o(e, "role", "group");
    },
    m(k, P) {
      y(k, e, P), v(e, t), w && w.m(t, null), i[15](t), v(e, n), v(e, l), v(l, r), x && x.m(r, null), v(l, a), v(l, f), i[16](l), u = !0, d || (h = [
        K(
          Ae,
          "resize",
          /*onWindowChange*/
          i[10]
        ),
        K(
          Ae,
          "scroll",
          /*onWindowChange*/
          i[10]
        ),
        St(
          /*portalToBody*/
          i[7].call(null, l)
        ),
        K(
          e,
          "mouseenter",
          /*onEnter*/
          i[8]
        ),
        K(
          e,
          "mouseleave",
          /*onLeave*/
          i[9]
        ),
        K(
          e,
          "focusin",
          /*onEnter*/
          i[8]
        ),
        K(
          e,
          "focusout",
          /*onLeave*/
          i[9]
        )
      ], d = !0);
    },
    p(k, [P]) {
      w && w.p && (!u || P & /*$$scope*/
      8192) && ue(
        w,
        _,
        k,
        /*$$scope*/
        k[13],
        u ? ce(
          _,
          /*$$scope*/
          k[13],
          P,
          jt
        ) : de(
          /*$$scope*/
          k[13]
        ),
        Ee
      ), x && x.p && (!u || P & /*$$scope*/
      8192) && ue(
        x,
        b,
        k,
        /*$$scope*/
        k[13],
        u ? ce(
          b,
          /*$$scope*/
          k[13],
          P,
          Wt
        ) : de(
          /*$$scope*/
          k[13]
        ),
        Fe
      ), (!u || P & /*arrowStyle*/
      64) && o(
        f,
        "style",
        /*arrowStyle*/
        k[6]
      ), (!u || P & /*open*/
      2 && s !== (s = !/*open*/
      k[1])) && o(l, "aria-hidden", s), (!u || P & /*open*/
      2) && o(
        l,
        "data-open",
        /*open*/
        k[1]
      ), (!u || P & /*effectivePlacement*/
      16) && o(
        l,
        "data-placement",
        /*effectivePlacement*/
        k[4]
      ), (!u || P & /*tooltipStyle, maxWidthPx*/
      33 && c !== (c = `${/*tooltipStyle*/
      k[5]}--bl-tooltip-max-width:${Math.max(
        120,
        /*maxWidthPx*/
        k[0]
      )}px;`)) && o(l, "style", c);
    },
    i(k) {
      u || (S(w, k), S(x, k), u = !0);
    },
    o(k) {
      $(w, k), $(x, k), u = !1;
    },
    d(k) {
      k && m(e), w && w.d(k), i[15](null), x && x.d(k), i[16](null), d = !1, ne(h);
    }
  };
}
const Q = 10, ee = 8, Ie = "badge-lib-tooltip-global-v2";
function ke(i, e, t) {
  return Math.max(e, Math.min(t, i));
}
function Rt(i, e, t) {
  const n = window.innerWidth, l = window.innerHeight, r = e.top - Q - t.height >= ee, a = e.bottom + Q + t.height <= l - ee, f = e.left - Q - t.width >= ee, s = e.right + Q + t.width <= n - ee;
  return i === "top" && !r && a ? "bottom" : i === "bottom" && !a && r ? "top" : i === "left" && !f && s ? "right" : i === "right" && !s && f ? "left" : i;
}
function Vt(i, e, t) {
  let { $$slots: n = {}, $$scope: l } = e, { placement: r = "top" } = e, { openDelayMs: a = 80 } = e, { maxWidthPx: f = 280 } = e, s = !1, c = null, u = null, d = null, h = r, _ = "", w = "";
  const b = `
.bl_tooltip {
  display: block;
  position: fixed;
  z-index: var(--vis-badge-tooltip-z-index, 2000);
  width: max-content;
  max-width: min(var(--bl-tooltip-max-width, 280px), 64vw);
  padding: var(--vis-badge-tooltip-padding, 7px 9px);
  border-radius: var(--vis-badge-tooltip-radius, 9px);
  border: 1px solid var(--vis-badge-tooltip-border, rgba(17, 24, 39, 0.14));
  background: var(--vis-badge-tooltip-bg, rgba(17, 24, 39, 0.96));
  color: var(--vis-badge-tooltip-fg, #ffffff);
  box-shadow: var(--vis-badge-tooltip-shadow, 0 10px 24px rgba(17, 24, 39, 0.2));
  font-family: var(
    --vis-badge-tooltip-font-family,
    ui-sans-serif,
    system-ui,
    -apple-system,
    "Segoe UI",
    Roboto,
    "Helvetica Neue",
    Arial,
    sans-serif
  );
  font-size: var(--vis-badge-tooltip-font-size, 12px);
  line-height: var(--vis-badge-tooltip-line-height, 1.3);
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
  background: var(--vis-badge-tooltip-bg, rgba(17, 24, 39, 0.96));
  border-left: 1px solid var(--vis-badge-tooltip-border, rgba(17, 24, 39, 0.14));
  border-top: 1px solid var(--vis-badge-tooltip-border, rgba(17, 24, 39, 0.14));
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

.bl_tooltipContent {
  display: grid;
  row-gap: 4px;
  width: 100%;
  text-align: center;
}

.bl_tooltipDesc {
  display: block;
  text-align: left;
  white-space: pre-line;
  overflow-wrap: anywhere;
}

.bl_tooltipActionHint {
  display: grid;
  place-items: center;
  width: 100%;
  margin-top: 7px;
  opacity: 0.95;
}

.bl_tooltipActionRow {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  max-width: 100%;
  margin: 0 auto;
  text-align: center;
  line-height: 1;
}

.bl_tooltipActionText {
  display: inline-block;
  text-align: center;
  font-size: 9.5px;
  font-weight: 500;
  letter-spacing: 0.015em;
  opacity: 0.92;
  white-space: pre-line;
  overflow-wrap: anywhere;
  line-height: 1.1;
}

.bl_tooltipActionIcon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex: 0 0 10px;
  width: 10px;
  height: 10px;
  line-height: 0;
}

.bl_tooltipActionIcon svg {
  display: block;
  width: 10px;
  height: 10px;
}
`;
  function x() {
    if (typeof document > "u") return;
    const g = document.getElementById(Ie);
    if (g) {
      g.textContent !== b && (g.textContent = b);
      return;
    }
    const D = document.createElement("style");
    D.id = Ie, D.textContent = b, document.head.appendChild(D);
  }
  function k(g) {
    if (x(), !(typeof document > "u"))
      return document.body.appendChild(g), {
        destroy() {
          g.remove();
        }
      };
  }
  function P() {
    c && clearTimeout(c), c = setTimeout(() => t(1, s = !0), a);
  }
  function E() {
    c && clearTimeout(c), c = null, t(1, s = !1);
  }
  async function T() {
    if (!s || !u || !d) return;
    await Ct();
    const g = u.getBoundingClientRect(), D = d.getBoundingClientRect(), H = window.innerWidth, pe = window.innerHeight;
    t(4, h = Rt(r, g, D));
    let j = 0, L = 0;
    h === "top" ? (L = g.top - Q - D.height, j = g.left + g.width / 2 - D.width / 2) : h === "bottom" ? (L = g.bottom + Q, j = g.left + g.width / 2 - D.width / 2) : h === "left" ? (L = g.top + g.height / 2 - D.height / 2, j = g.left - Q - D.width) : (L = g.top + g.height / 2 - D.height / 2, j = g.right + Q), j = ke(j, ee, H - D.width - ee), L = ke(L, ee, pe - D.height - ee);
    const xe = g.left + g.width / 2, z = g.top + g.height / 2, mt = ke(xe - j - 4, 10, D.width - 10), vt = ke(z - L - 4, 10, D.height - 10);
    t(6, w = h === "top" || h === "bottom" ? `left:${mt}px;` : `top:${vt}px;`), t(5, _ = `left:${Math.round(j)}px;top:${Math.round(L)}px;`);
  }
  function V() {
    T();
  }
  function I(g) {
    Se[g ? "unshift" : "push"](() => {
      u = g, t(2, u);
    });
  }
  function C(g) {
    Se[g ? "unshift" : "push"](() => {
      d = g, t(3, d);
    });
  }
  return i.$$set = (g) => {
    "placement" in g && t(11, r = g.placement), "openDelayMs" in g && t(12, a = g.openDelayMs), "maxWidthPx" in g && t(0, f = g.maxWidthPx), "$$scope" in g && t(13, l = g.$$scope);
  }, i.$$.update = () => {
    i.$$.dirty & /*open*/
    2 && s && T(), i.$$.dirty & /*open, placement*/
    2050 && (s || (t(5, _ = ""), t(6, w = ""), t(4, h = r)));
  }, [
    f,
    s,
    u,
    d,
    h,
    _,
    w,
    k,
    P,
    E,
    V,
    r,
    a,
    l,
    n,
    I,
    C
  ];
}
class ut extends J {
  constructor(e) {
    super(), Y(
      this,
      e,
      Vt,
      Lt,
      U,
      {
        placement: 11,
        openDelayMs: 12,
        maxWidthPx: 0
      },
      Ot
    );
  }
  get placement() {
    return this.$$.ctx[11];
  }
  set placement(e) {
    this.$$set({ placement: e }), p();
  }
  get openDelayMs() {
    return this.$$.ctx[12];
  }
  set openDelayMs(e) {
    this.$$set({ openDelayMs: e }), p();
  }
  get maxWidthPx() {
    return this.$$.ctx[0];
  }
  set maxWidthPx(e) {
    this.$$set({ maxWidthPx: e }), p();
  }
}
X(ut, { placement: {}, openDelayMs: {}, maxWidthPx: {} }, ["trigger", "content"], [], !0);
function Ht(i) {
  let e;
  return {
    c() {
      e = B("span"), be(e, "display", "inline-block"), be(
        e,
        "width",
        /*size*/
        i[1] + "px"
      ), be(
        e,
        "height",
        /*size*/
        i[1] + "px"
      ), o(e, "aria-hidden", "true");
    },
    m(t, n) {
      y(t, e, n);
    },
    p(t, n) {
      n & /*size*/
      2 && be(
        e,
        "width",
        /*size*/
        t[1] + "px"
      ), n & /*size*/
      2 && be(
        e,
        "height",
        /*size*/
        t[1] + "px"
      );
    },
    d(t) {
      t && m(e);
    }
  };
}
function Zt(i) {
  let e, t, n, l, r, a, f = (
    /*bg*/
    i[2] && Oe(i)
  );
  return {
    c() {
      e = M("svg"), f && f.c(), t = M("g"), n = M("path"), l = M("path"), r = M("path"), o(n, "d", "M15 3h6v6"), o(l, "d", "M10 14 21 3"), o(r, "d", "M21 13v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7"), o(t, "transform", "translate(12 12) scale(0.68) translate(-12 -12)"), o(
        e,
        "width",
        /*size*/
        i[1]
      ), o(
        e,
        "height",
        /*size*/
        i[1]
      ), o(e, "viewBox", "0 0 24 24"), o(e, "fill", "none"), o(e, "aria-hidden", "true"), o(e, "stroke", a = /*fg*/
      i[3] ?? "currentColor"), o(e, "stroke-width", "2"), o(e, "stroke-linecap", "round"), o(e, "stroke-linejoin", "round");
    },
    m(s, c) {
      y(s, e, c), f && f.m(e, null), v(e, t), v(t, n), v(t, l), v(t, r);
    },
    p(s, c) {
      /*bg*/
      s[2] ? f ? f.p(s, c) : (f = Oe(s), f.c(), f.m(e, t)) : f && (f.d(1), f = null), c & /*size*/
      2 && o(
        e,
        "width",
        /*size*/
        s[1]
      ), c & /*size*/
      2 && o(
        e,
        "height",
        /*size*/
        s[1]
      ), c & /*fg*/
      8 && a !== (a = /*fg*/
      s[3] ?? "currentColor") && o(e, "stroke", a);
    },
    d(s) {
      s && m(e), f && f.d();
    }
  };
}
function Ut(i) {
  let e, t, n, l, r, a, f = (
    /*bg*/
    i[2] && We(i)
  );
  return {
    c() {
      e = M("svg"), f && f.c(), t = M("g"), n = M("path"), l = M("path"), r = M("path"), o(n, "d", "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"), o(l, "d", "M7 10l5 5 5-5"), o(r, "d", "M12 15V3"), o(t, "transform", "translate(12 12) scale(0.68) translate(-12 -12)"), o(
        e,
        "width",
        /*size*/
        i[1]
      ), o(
        e,
        "height",
        /*size*/
        i[1]
      ), o(e, "viewBox", "0 0 24 24"), o(e, "fill", "none"), o(e, "aria-hidden", "true"), o(e, "stroke", a = /*fg*/
      i[3] ?? "currentColor"), o(e, "stroke-width", "2"), o(e, "stroke-linecap", "round"), o(e, "stroke-linejoin", "round");
    },
    m(s, c) {
      y(s, e, c), f && f.m(e, null), v(e, t), v(t, n), v(t, l), v(t, r);
    },
    p(s, c) {
      /*bg*/
      s[2] ? f ? f.p(s, c) : (f = We(s), f.c(), f.m(e, t)) : f && (f.d(1), f = null), c & /*size*/
      2 && o(
        e,
        "width",
        /*size*/
        s[1]
      ), c & /*size*/
      2 && o(
        e,
        "height",
        /*size*/
        s[1]
      ), c & /*fg*/
      8 && a !== (a = /*fg*/
      s[3] ?? "currentColor") && o(e, "stroke", a);
    },
    d(s) {
      s && m(e), f && f.d();
    }
  };
}
function Gt(i) {
  let e, t, n, l, r, a;
  return {
    c() {
      e = M("svg"), t = M("g"), n = M("path"), r = M("path"), o(n, "d", "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"), o(n, "fill", l = /*bg*/
      i[2] ?? "none"), o(
        n,
        "opacity",
        /*bgOpacity*/
        i[4]
      ), o(r, "d", "m9 12 2 2 4-4"), o(t, "transform", "translate(12 12) scale(0.86) translate(-12 -12)"), o(
        e,
        "width",
        /*size*/
        i[1]
      ), o(
        e,
        "height",
        /*size*/
        i[1]
      ), o(e, "viewBox", "0 0 24 24"), o(e, "fill", "none"), o(e, "aria-hidden", "true"), o(e, "stroke", a = /*fg*/
      i[3] ?? "currentColor"), o(e, "stroke-width", "2"), o(e, "stroke-linecap", "round"), o(e, "stroke-linejoin", "round");
    },
    m(f, s) {
      y(f, e, s), v(e, t), v(t, n), v(t, r);
    },
    p(f, s) {
      s & /*bg*/
      4 && l !== (l = /*bg*/
      f[2] ?? "none") && o(n, "fill", l), s & /*bgOpacity*/
      16 && o(
        n,
        "opacity",
        /*bgOpacity*/
        f[4]
      ), s & /*size*/
      2 && o(
        e,
        "width",
        /*size*/
        f[1]
      ), s & /*size*/
      2 && o(
        e,
        "height",
        /*size*/
        f[1]
      ), s & /*fg*/
      8 && a !== (a = /*fg*/
      f[3] ?? "currentColor") && o(e, "stroke", a);
    },
    d(f) {
      f && m(e);
    }
  };
}
function Yt(i) {
  let e, t, n, l, r, a;
  function f(u, d) {
    return (
      /*bg*/
      u[2] ? ai : oi
    );
  }
  let s = f(i), c = s(i);
  return {
    c() {
      e = M("svg"), c.c(), t = M("g"), n = M("ellipse"), l = M("path"), r = M("path"), o(n, "cx", "12"), o(n, "cy", "5"), o(n, "rx", "9"), o(n, "ry", "3"), o(l, "d", "M3 5v14c0 1.7 4 3 9 3s9-1.3 9-3V5"), o(r, "d", "M3 12c0 1.7 4 3 9 3s9-1.3 9-3"), o(t, "transform", "translate(12 12) scale(0.68) translate(-12 -12)"), o(
        e,
        "width",
        /*size*/
        i[1]
      ), o(
        e,
        "height",
        /*size*/
        i[1]
      ), o(e, "viewBox", "0 0 24 24"), o(e, "fill", "none"), o(e, "aria-hidden", "true"), o(e, "stroke", a = /*fg*/
      i[3] ?? "currentColor"), o(e, "stroke-width", "2"), o(e, "stroke-linecap", "round"), o(e, "stroke-linejoin", "round");
    },
    m(u, d) {
      y(u, e, d), c.m(e, null), v(e, t), v(t, n), v(t, l), v(t, r);
    },
    p(u, d) {
      s === (s = f(u)) && c ? c.p(u, d) : (c.d(1), c = s(u), c && (c.c(), c.m(e, t))), d & /*size*/
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
      u && m(e), c.d();
    }
  };
}
function Xt(i) {
  let e, t, n, l, r, a, f;
  function s(d, h) {
    return (
      /*bg*/
      d[2] ? ui : ci
    );
  }
  let c = s(i), u = c(i);
  return {
    c() {
      e = M("svg"), u.c(), t = M("g"), n = M("polyline"), l = M("polyline"), r = M("line"), a = M("line"), o(n, "points", "15 3 21 3 21 9"), o(l, "points", "9 21 3 21 3 15"), o(r, "x1", "21"), o(r, "y1", "3"), o(r, "x2", "14"), o(r, "y2", "10"), o(a, "x1", "3"), o(a, "y1", "21"), o(a, "x2", "10"), o(a, "y2", "14"), o(t, "transform", "translate(12 12) scale(0.68) translate(-12 -12)"), o(
        e,
        "width",
        /*size*/
        i[1]
      ), o(
        e,
        "height",
        /*size*/
        i[1]
      ), o(e, "viewBox", "0 0 24 24"), o(e, "fill", "none"), o(e, "aria-hidden", "true"), o(e, "stroke", f = /*fg*/
      i[3] ?? "currentColor"), o(e, "stroke-width", "2"), o(e, "stroke-linecap", "round"), o(e, "stroke-linejoin", "round");
    },
    m(d, h) {
      y(d, e, h), u.m(e, null), v(e, t), v(t, n), v(t, l), v(t, r), v(t, a);
    },
    p(d, h) {
      c === (c = s(d)) && u ? u.p(d, h) : (u.d(1), u = c(d), u && (u.c(), u.m(e, t))), h & /*size*/
      2 && o(
        e,
        "width",
        /*size*/
        d[1]
      ), h & /*size*/
      2 && o(
        e,
        "height",
        /*size*/
        d[1]
      ), h & /*fg*/
      8 && f !== (f = /*fg*/
      d[3] ?? "currentColor") && o(e, "stroke", f);
    },
    d(d) {
      d && m(e), u.d();
    }
  };
}
function Jt(i) {
  let e, t, n, l, r, a, f, s;
  function c(h, _) {
    return (
      /*bg*/
      h[2] ? pi : gi
    );
  }
  let u = c(i), d = u(i);
  return {
    c() {
      e = M("svg"), d.c(), t = M("g"), n = M("path"), l = M("path"), r = M("path"), a = M("path"), f = M("path"), o(n, "d", "M14 4.1 12 6"), o(l, "d", "m5.1 8-2.9-.8"), o(r, "d", "m6 12-1.9 2"), o(a, "d", "M7.2 2.2 8 5.1"), o(f, "d", "M9.037 9.69a.498.498 0 0 1 .653-.653l11 4.5a.5.5 0 0 1-.074.949l-4.349 1.041a1 1 0 0 0-.74.739l-1.04 4.35a.5.5 0 0 1-.95.074z"), o(t, "transform", "translate(12 12) scale(0.68) translate(-12 -12)"), o(
        e,
        "width",
        /*size*/
        i[1]
      ), o(
        e,
        "height",
        /*size*/
        i[1]
      ), o(e, "viewBox", "0 0 24 24"), o(e, "fill", "none"), o(e, "aria-hidden", "true"), o(e, "stroke", s = /*fg*/
      i[3] ?? "currentColor"), o(e, "stroke-width", "2"), o(e, "stroke-linecap", "round"), o(e, "stroke-linejoin", "round");
    },
    m(h, _) {
      y(h, e, _), d.m(e, null), v(e, t), v(t, n), v(t, l), v(t, r), v(t, a), v(t, f);
    },
    p(h, _) {
      u === (u = c(h)) && d ? d.p(h, _) : (d.d(1), d = u(h), d && (d.c(), d.m(e, t))), _ & /*size*/
      2 && o(
        e,
        "width",
        /*size*/
        h[1]
      ), _ & /*size*/
      2 && o(
        e,
        "height",
        /*size*/
        h[1]
      ), _ & /*fg*/
      8 && s !== (s = /*fg*/
      h[3] ?? "currentColor") && o(e, "stroke", s);
    },
    d(h) {
      h && m(e), d.d();
    }
  };
}
function Kt(i) {
  let e, t, n, l, r;
  function a(c, u) {
    return (
      /*bg*/
      c[2] ? vi : mi
    );
  }
  let f = a(i), s = f(i);
  return {
    c() {
      e = M("svg"), s.c(), t = M("path"), l = M("path"), o(t, "d", "M12 10.2a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"), o(t, "fill", n = /*fg*/
      i[3] ?? "currentColor"), o(l, "d", "M11 11.5h2V18h-2v-6.5Z"), o(l, "fill", r = /*fg*/
      i[3] ?? "currentColor"), o(
        e,
        "width",
        /*size*/
        i[1]
      ), o(
        e,
        "height",
        /*size*/
        i[1]
      ), o(e, "viewBox", "0 0 24 24"), o(e, "fill", "none"), o(e, "aria-hidden", "true");
    },
    m(c, u) {
      y(c, e, u), s.m(e, null), v(e, t), v(e, l);
    },
    p(c, u) {
      f === (f = a(c)) && s ? s.p(c, u) : (s.d(1), s = f(c), s && (s.c(), s.m(e, t))), u & /*fg*/
      8 && n !== (n = /*fg*/
      c[3] ?? "currentColor") && o(t, "fill", n), u & /*fg*/
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
      c && m(e), s.d();
    }
  };
}
function Qt(i) {
  let e, t, n, l, r;
  function a(c, u) {
    return (
      /*bg*/
      c[2] ? Mi : wi
    );
  }
  let f = a(i), s = f(i);
  return {
    c() {
      e = M("svg"), s.c(), t = M("path"), l = M("path"), o(t, "d", "M12 10.2a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"), o(t, "fill", n = /*fg*/
      i[3] ?? "currentColor"), o(l, "d", "M11 11.5h2V18h-2v-6.5Z"), o(l, "fill", r = /*fg*/
      i[3] ?? "currentColor"), o(
        e,
        "width",
        /*size*/
        i[1]
      ), o(
        e,
        "height",
        /*size*/
        i[1]
      ), o(e, "viewBox", "0 0 24 24"), o(e, "fill", "none"), o(e, "aria-hidden", "true");
    },
    m(c, u) {
      y(c, e, u), s.m(e, null), v(e, t), v(e, l);
    },
    p(c, u) {
      f === (f = a(c)) && s ? s.p(c, u) : (s.d(1), s = f(c), s && (s.c(), s.m(e, t))), u & /*fg*/
      8 && n !== (n = /*fg*/
      c[3] ?? "currentColor") && o(t, "fill", n), u & /*fg*/
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
      c && m(e), s.d();
    }
  };
}
function ei(i) {
  let e, t, n, l, r, a, f;
  return {
    c() {
      e = M("svg"), t = M("path"), l = M("path"), a = M("path"), o(t, "d", "M12 3.5c.4 0 .8.2 1 .6l9 15.6c.4.7-.1 1.6-1 1.6H3c-.9 0-1.4-.9-1-1.6l9-15.6c.2-.4.6-.6 1-.6Z"), o(t, "fill", n = /*bg*/
      i[2] ?? "currentColor"), o(
        t,
        "opacity",
        /*bgOpacity*/
        i[4]
      ), o(l, "d", "M12 8a1 1 0 0 1 1 1l-.3 5.5a.7.7 0 0 1-1.4 0L11 9a1 1 0 0 1 1-1Z"), o(l, "fill", r = /*fg*/
      i[3] ?? "currentColor"), o(a, "d", "M12 18a1.25 1.25 0 1 1 0-2.5A1.25 1.25 0 0 1 12 18Z"), o(a, "fill", f = /*fg*/
      i[3] ?? "currentColor"), o(
        e,
        "width",
        /*size*/
        i[1]
      ), o(
        e,
        "height",
        /*size*/
        i[1]
      ), o(e, "viewBox", "0 0 24 24"), o(e, "fill", "none"), o(e, "aria-hidden", "true");
    },
    m(s, c) {
      y(s, e, c), v(e, t), v(e, l), v(e, a);
    },
    p(s, c) {
      c & /*bg*/
      4 && n !== (n = /*bg*/
      s[2] ?? "currentColor") && o(t, "fill", n), c & /*bgOpacity*/
      16 && o(
        t,
        "opacity",
        /*bgOpacity*/
        s[4]
      ), c & /*fg*/
      8 && r !== (r = /*fg*/
      s[3] ?? "currentColor") && o(l, "fill", r), c & /*fg*/
      8 && f !== (f = /*fg*/
      s[3] ?? "currentColor") && o(a, "fill", f), c & /*size*/
      2 && o(
        e,
        "width",
        /*size*/
        s[1]
      ), c & /*size*/
      2 && o(
        e,
        "height",
        /*size*/
        s[1]
      );
    },
    d(s) {
      s && m(e);
    }
  };
}
function ti(i) {
  let e, t, n;
  function l(f, s) {
    return (
      /*bg*/
      f[2] ? $i : xi
    );
  }
  let r = l(i), a = r(i);
  return {
    c() {
      e = M("svg"), a.c(), t = M("path"), o(t, "d", "M9.2 12.5 7.5 10.8a1 1 0 0 0-1.4 1.4l2.4 2.4a1 1 0 0 0 1.4 0l7-7a1 1 0 1 0-1.4-1.4l-6.3 6.3Z"), o(t, "fill", n = /*fg*/
      i[3] ?? "currentColor"), o(
        e,
        "width",
        /*size*/
        i[1]
      ), o(
        e,
        "height",
        /*size*/
        i[1]
      ), o(e, "viewBox", "0 0 24 24"), o(e, "fill", "none"), o(e, "aria-hidden", "true");
    },
    m(f, s) {
      y(f, e, s), a.m(e, null), v(e, t);
    },
    p(f, s) {
      r === (r = l(f)) && a ? a.p(f, s) : (a.d(1), a = r(f), a && (a.c(), a.m(e, t))), s & /*fg*/
      8 && n !== (n = /*fg*/
      f[3] ?? "currentColor") && o(t, "fill", n), s & /*size*/
      2 && o(
        e,
        "width",
        /*size*/
        f[1]
      ), s & /*size*/
      2 && o(
        e,
        "height",
        /*size*/
        f[1]
      );
    },
    d(f) {
      f && m(e), a.d();
    }
  };
}
function Oe(i) {
  let e;
  function t(r, a) {
    return (
      /*bgShape*/
      r[5] === "square" ? ni : ii
    );
  }
  let n = t(i), l = n(i);
  return {
    c() {
      l.c(), e = F();
    },
    m(r, a) {
      l.m(r, a), y(r, e, a);
    },
    p(r, a) {
      n === (n = t(r)) && l ? l.p(r, a) : (l.d(1), l = n(r), l && (l.c(), l.m(e.parentNode, e)));
    },
    d(r) {
      r && m(e), l.d(r);
    }
  };
}
function ii(i) {
  let e;
  return {
    c() {
      e = M("circle"), o(e, "cx", "12"), o(e, "cy", "12"), o(e, "r", "10"), o(
        e,
        "fill",
        /*bg*/
        i[2]
      ), o(
        e,
        "opacity",
        /*bgOpacity*/
        i[4]
      ), o(e, "stroke", "none");
    },
    m(t, n) {
      y(t, e, n);
    },
    p(t, n) {
      n & /*bg*/
      4 && o(
        e,
        "fill",
        /*bg*/
        t[2]
      ), n & /*bgOpacity*/
      16 && o(
        e,
        "opacity",
        /*bgOpacity*/
        t[4]
      );
    },
    d(t) {
      t && m(e);
    }
  };
}
function ni(i) {
  let e;
  return {
    c() {
      e = M("rect"), o(e, "x", "3"), o(e, "y", "3"), o(e, "width", "18"), o(e, "height", "18"), o(e, "rx", "0"), o(
        e,
        "fill",
        /*bg*/
        i[2]
      ), o(
        e,
        "opacity",
        /*bgOpacity*/
        i[4]
      ), o(e, "stroke", "none");
    },
    m(t, n) {
      y(t, e, n);
    },
    p(t, n) {
      n & /*bg*/
      4 && o(
        e,
        "fill",
        /*bg*/
        t[2]
      ), n & /*bgOpacity*/
      16 && o(
        e,
        "opacity",
        /*bgOpacity*/
        t[4]
      );
    },
    d(t) {
      t && m(e);
    }
  };
}
function We(i) {
  let e;
  function t(r, a) {
    return (
      /*bgShape*/
      r[5] === "square" ? ri : li
    );
  }
  let n = t(i), l = n(i);
  return {
    c() {
      l.c(), e = F();
    },
    m(r, a) {
      l.m(r, a), y(r, e, a);
    },
    p(r, a) {
      n === (n = t(r)) && l ? l.p(r, a) : (l.d(1), l = n(r), l && (l.c(), l.m(e.parentNode, e)));
    },
    d(r) {
      r && m(e), l.d(r);
    }
  };
}
function li(i) {
  let e;
  return {
    c() {
      e = M("circle"), o(e, "cx", "12"), o(e, "cy", "12"), o(e, "r", "10"), o(
        e,
        "fill",
        /*bg*/
        i[2]
      ), o(
        e,
        "opacity",
        /*bgOpacity*/
        i[4]
      ), o(e, "stroke", "none");
    },
    m(t, n) {
      y(t, e, n);
    },
    p(t, n) {
      n & /*bg*/
      4 && o(
        e,
        "fill",
        /*bg*/
        t[2]
      ), n & /*bgOpacity*/
      16 && o(
        e,
        "opacity",
        /*bgOpacity*/
        t[4]
      );
    },
    d(t) {
      t && m(e);
    }
  };
}
function ri(i) {
  let e;
  return {
    c() {
      e = M("rect"), o(e, "x", "3"), o(e, "y", "3"), o(e, "width", "18"), o(e, "height", "18"), o(e, "rx", "0"), o(
        e,
        "fill",
        /*bg*/
        i[2]
      ), o(
        e,
        "opacity",
        /*bgOpacity*/
        i[4]
      ), o(e, "stroke", "none");
    },
    m(t, n) {
      y(t, e, n);
    },
    p(t, n) {
      n & /*bg*/
      4 && o(
        e,
        "fill",
        /*bg*/
        t[2]
      ), n & /*bgOpacity*/
      16 && o(
        e,
        "opacity",
        /*bgOpacity*/
        t[4]
      );
    },
    d(t) {
      t && m(e);
    }
  };
}
function oi(i) {
  let e;
  return {
    c() {
      e = M("path"), o(e, "d", "M3 3h18v18H3V3Z"), o(e, "fill", "currentColor"), o(
        e,
        "opacity",
        /*bgOpacity*/
        i[4]
      ), o(e, "stroke", "none");
    },
    m(t, n) {
      y(t, e, n);
    },
    p(t, n) {
      n & /*bgOpacity*/
      16 && o(
        e,
        "opacity",
        /*bgOpacity*/
        t[4]
      );
    },
    d(t) {
      t && m(e);
    }
  };
}
function ai(i) {
  let e;
  function t(r, a) {
    return (
      /*bgShape*/
      r[5] === "square" ? fi : si
    );
  }
  let n = t(i), l = n(i);
  return {
    c() {
      l.c(), e = F();
    },
    m(r, a) {
      l.m(r, a), y(r, e, a);
    },
    p(r, a) {
      n === (n = t(r)) && l ? l.p(r, a) : (l.d(1), l = n(r), l && (l.c(), l.m(e.parentNode, e)));
    },
    d(r) {
      r && m(e), l.d(r);
    }
  };
}
function si(i) {
  let e;
  return {
    c() {
      e = M("circle"), o(e, "cx", "12"), o(e, "cy", "12"), o(e, "r", "10"), o(
        e,
        "fill",
        /*bg*/
        i[2]
      ), o(
        e,
        "opacity",
        /*bgOpacity*/
        i[4]
      ), o(e, "stroke", "none");
    },
    m(t, n) {
      y(t, e, n);
    },
    p(t, n) {
      n & /*bg*/
      4 && o(
        e,
        "fill",
        /*bg*/
        t[2]
      ), n & /*bgOpacity*/
      16 && o(
        e,
        "opacity",
        /*bgOpacity*/
        t[4]
      );
    },
    d(t) {
      t && m(e);
    }
  };
}
function fi(i) {
  let e;
  return {
    c() {
      e = M("rect"), o(e, "x", "3"), o(e, "y", "3"), o(e, "width", "18"), o(e, "height", "18"), o(e, "rx", "0"), o(
        e,
        "fill",
        /*bg*/
        i[2]
      ), o(
        e,
        "opacity",
        /*bgOpacity*/
        i[4]
      ), o(e, "stroke", "none");
    },
    m(t, n) {
      y(t, e, n);
    },
    p(t, n) {
      n & /*bg*/
      4 && o(
        e,
        "fill",
        /*bg*/
        t[2]
      ), n & /*bgOpacity*/
      16 && o(
        e,
        "opacity",
        /*bgOpacity*/
        t[4]
      );
    },
    d(t) {
      t && m(e);
    }
  };
}
function ci(i) {
  let e;
  return {
    c() {
      e = M("path"), o(e, "d", "M3 3h18v18H3V3Z"), o(e, "fill", "currentColor"), o(
        e,
        "opacity",
        /*bgOpacity*/
        i[4]
      ), o(e, "stroke", "none");
    },
    m(t, n) {
      y(t, e, n);
    },
    p(t, n) {
      n & /*bgOpacity*/
      16 && o(
        e,
        "opacity",
        /*bgOpacity*/
        t[4]
      );
    },
    d(t) {
      t && m(e);
    }
  };
}
function ui(i) {
  let e;
  function t(r, a) {
    return (
      /*bgShape*/
      r[5] === "square" ? hi : di
    );
  }
  let n = t(i), l = n(i);
  return {
    c() {
      l.c(), e = F();
    },
    m(r, a) {
      l.m(r, a), y(r, e, a);
    },
    p(r, a) {
      n === (n = t(r)) && l ? l.p(r, a) : (l.d(1), l = n(r), l && (l.c(), l.m(e.parentNode, e)));
    },
    d(r) {
      r && m(e), l.d(r);
    }
  };
}
function di(i) {
  let e;
  return {
    c() {
      e = M("circle"), o(e, "cx", "12"), o(e, "cy", "12"), o(e, "r", "10"), o(
        e,
        "fill",
        /*bg*/
        i[2]
      ), o(
        e,
        "opacity",
        /*bgOpacity*/
        i[4]
      ), o(e, "stroke", "none");
    },
    m(t, n) {
      y(t, e, n);
    },
    p(t, n) {
      n & /*bg*/
      4 && o(
        e,
        "fill",
        /*bg*/
        t[2]
      ), n & /*bgOpacity*/
      16 && o(
        e,
        "opacity",
        /*bgOpacity*/
        t[4]
      );
    },
    d(t) {
      t && m(e);
    }
  };
}
function hi(i) {
  let e;
  return {
    c() {
      e = M("rect"), o(e, "x", "3"), o(e, "y", "3"), o(e, "width", "18"), o(e, "height", "18"), o(e, "rx", "0"), o(
        e,
        "fill",
        /*bg*/
        i[2]
      ), o(
        e,
        "opacity",
        /*bgOpacity*/
        i[4]
      ), o(e, "stroke", "none");
    },
    m(t, n) {
      y(t, e, n);
    },
    p(t, n) {
      n & /*bg*/
      4 && o(
        e,
        "fill",
        /*bg*/
        t[2]
      ), n & /*bgOpacity*/
      16 && o(
        e,
        "opacity",
        /*bgOpacity*/
        t[4]
      );
    },
    d(t) {
      t && m(e);
    }
  };
}
function gi(i) {
  let e;
  return {
    c() {
      e = M("path"), o(e, "d", "M3 3h18v18H3V3Z"), o(e, "fill", "currentColor"), o(
        e,
        "opacity",
        /*bgOpacity*/
        i[4]
      ), o(e, "stroke", "none");
    },
    m(t, n) {
      y(t, e, n);
    },
    p(t, n) {
      n & /*bgOpacity*/
      16 && o(
        e,
        "opacity",
        /*bgOpacity*/
        t[4]
      );
    },
    d(t) {
      t && m(e);
    }
  };
}
function pi(i) {
  let e;
  function t(r, a) {
    return (
      /*bgShape*/
      r[5] === "square" ? _i : bi
    );
  }
  let n = t(i), l = n(i);
  return {
    c() {
      l.c(), e = F();
    },
    m(r, a) {
      l.m(r, a), y(r, e, a);
    },
    p(r, a) {
      n === (n = t(r)) && l ? l.p(r, a) : (l.d(1), l = n(r), l && (l.c(), l.m(e.parentNode, e)));
    },
    d(r) {
      r && m(e), l.d(r);
    }
  };
}
function bi(i) {
  let e;
  return {
    c() {
      e = M("circle"), o(e, "cx", "12"), o(e, "cy", "12"), o(e, "r", "10"), o(
        e,
        "fill",
        /*bg*/
        i[2]
      ), o(
        e,
        "opacity",
        /*bgOpacity*/
        i[4]
      ), o(e, "stroke", "none");
    },
    m(t, n) {
      y(t, e, n);
    },
    p(t, n) {
      n & /*bg*/
      4 && o(
        e,
        "fill",
        /*bg*/
        t[2]
      ), n & /*bgOpacity*/
      16 && o(
        e,
        "opacity",
        /*bgOpacity*/
        t[4]
      );
    },
    d(t) {
      t && m(e);
    }
  };
}
function _i(i) {
  let e;
  return {
    c() {
      e = M("rect"), o(e, "x", "3"), o(e, "y", "3"), o(e, "width", "18"), o(e, "height", "18"), o(e, "rx", "0"), o(
        e,
        "fill",
        /*bg*/
        i[2]
      ), o(
        e,
        "opacity",
        /*bgOpacity*/
        i[4]
      ), o(e, "stroke", "none");
    },
    m(t, n) {
      y(t, e, n);
    },
    p(t, n) {
      n & /*bg*/
      4 && o(
        e,
        "fill",
        /*bg*/
        t[2]
      ), n & /*bgOpacity*/
      16 && o(
        e,
        "opacity",
        /*bgOpacity*/
        t[4]
      );
    },
    d(t) {
      t && m(e);
    }
  };
}
function mi(i) {
  let e;
  return {
    c() {
      e = M("path"), o(e, "d", "M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20Z"), o(e, "fill", "currentColor"), o(
        e,
        "opacity",
        /*bgOpacity*/
        i[4]
      );
    },
    m(t, n) {
      y(t, e, n);
    },
    p(t, n) {
      n & /*bgOpacity*/
      16 && o(
        e,
        "opacity",
        /*bgOpacity*/
        t[4]
      );
    },
    d(t) {
      t && m(e);
    }
  };
}
function vi(i) {
  let e;
  function t(r, a) {
    return (
      /*bgShape*/
      r[5] === "square" ? ki : yi
    );
  }
  let n = t(i), l = n(i);
  return {
    c() {
      l.c(), e = F();
    },
    m(r, a) {
      l.m(r, a), y(r, e, a);
    },
    p(r, a) {
      n === (n = t(r)) && l ? l.p(r, a) : (l.d(1), l = n(r), l && (l.c(), l.m(e.parentNode, e)));
    },
    d(r) {
      r && m(e), l.d(r);
    }
  };
}
function yi(i) {
  let e;
  return {
    c() {
      e = M("circle"), o(e, "cx", "12"), o(e, "cy", "12"), o(e, "r", "10"), o(
        e,
        "fill",
        /*bg*/
        i[2]
      ), o(
        e,
        "opacity",
        /*bgOpacity*/
        i[4]
      );
    },
    m(t, n) {
      y(t, e, n);
    },
    p(t, n) {
      n & /*bg*/
      4 && o(
        e,
        "fill",
        /*bg*/
        t[2]
      ), n & /*bgOpacity*/
      16 && o(
        e,
        "opacity",
        /*bgOpacity*/
        t[4]
      );
    },
    d(t) {
      t && m(e);
    }
  };
}
function ki(i) {
  let e;
  return {
    c() {
      e = M("rect"), o(e, "x", "3"), o(e, "y", "3"), o(e, "width", "18"), o(e, "height", "18"), o(e, "rx", "0"), o(
        e,
        "fill",
        /*bg*/
        i[2]
      ), o(
        e,
        "opacity",
        /*bgOpacity*/
        i[4]
      );
    },
    m(t, n) {
      y(t, e, n);
    },
    p(t, n) {
      n & /*bg*/
      4 && o(
        e,
        "fill",
        /*bg*/
        t[2]
      ), n & /*bgOpacity*/
      16 && o(
        e,
        "opacity",
        /*bgOpacity*/
        t[4]
      );
    },
    d(t) {
      t && m(e);
    }
  };
}
function wi(i) {
  let e;
  return {
    c() {
      e = M("path"), o(e, "d", "M3 3h18v18H3V3Z"), o(e, "fill", "currentColor"), o(
        e,
        "opacity",
        /*bgOpacity*/
        i[4]
      );
    },
    m(t, n) {
      y(t, e, n);
    },
    p(t, n) {
      n & /*bgOpacity*/
      16 && o(
        e,
        "opacity",
        /*bgOpacity*/
        t[4]
      );
    },
    d(t) {
      t && m(e);
    }
  };
}
function Mi(i) {
  let e;
  function t(r, a) {
    return (
      /*bgShape*/
      r[5] === "square" ? zi : Si
    );
  }
  let n = t(i), l = n(i);
  return {
    c() {
      l.c(), e = F();
    },
    m(r, a) {
      l.m(r, a), y(r, e, a);
    },
    p(r, a) {
      n === (n = t(r)) && l ? l.p(r, a) : (l.d(1), l = n(r), l && (l.c(), l.m(e.parentNode, e)));
    },
    d(r) {
      r && m(e), l.d(r);
    }
  };
}
function Si(i) {
  let e;
  return {
    c() {
      e = M("circle"), o(e, "cx", "12"), o(e, "cy", "12"), o(e, "r", "10"), o(
        e,
        "fill",
        /*bg*/
        i[2]
      ), o(
        e,
        "opacity",
        /*bgOpacity*/
        i[4]
      );
    },
    m(t, n) {
      y(t, e, n);
    },
    p(t, n) {
      n & /*bg*/
      4 && o(
        e,
        "fill",
        /*bg*/
        t[2]
      ), n & /*bgOpacity*/
      16 && o(
        e,
        "opacity",
        /*bgOpacity*/
        t[4]
      );
    },
    d(t) {
      t && m(e);
    }
  };
}
function zi(i) {
  let e;
  return {
    c() {
      e = M("rect"), o(e, "x", "3"), o(e, "y", "3"), o(e, "width", "18"), o(e, "height", "18"), o(e, "rx", "0"), o(
        e,
        "fill",
        /*bg*/
        i[2]
      ), o(
        e,
        "opacity",
        /*bgOpacity*/
        i[4]
      );
    },
    m(t, n) {
      y(t, e, n);
    },
    p(t, n) {
      n & /*bg*/
      4 && o(
        e,
        "fill",
        /*bg*/
        t[2]
      ), n & /*bgOpacity*/
      16 && o(
        e,
        "opacity",
        /*bgOpacity*/
        t[4]
      );
    },
    d(t) {
      t && m(e);
    }
  };
}
function xi(i) {
  let e;
  return {
    c() {
      e = M("path"), o(e, "d", "M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20Z"), o(e, "fill", "currentColor"), o(
        e,
        "opacity",
        /*bgOpacity*/
        i[4]
      );
    },
    m(t, n) {
      y(t, e, n);
    },
    p(t, n) {
      n & /*bgOpacity*/
      16 && o(
        e,
        "opacity",
        /*bgOpacity*/
        t[4]
      );
    },
    d(t) {
      t && m(e);
    }
  };
}
function $i(i) {
  let e;
  function t(r, a) {
    return (
      /*bgShape*/
      r[5] === "square" ? Bi : Pi
    );
  }
  let n = t(i), l = n(i);
  return {
    c() {
      l.c(), e = F();
    },
    m(r, a) {
      l.m(r, a), y(r, e, a);
    },
    p(r, a) {
      n === (n = t(r)) && l ? l.p(r, a) : (l.d(1), l = n(r), l && (l.c(), l.m(e.parentNode, e)));
    },
    d(r) {
      r && m(e), l.d(r);
    }
  };
}
function Pi(i) {
  let e;
  return {
    c() {
      e = M("circle"), o(e, "cx", "12"), o(e, "cy", "12"), o(e, "r", "10"), o(
        e,
        "fill",
        /*bg*/
        i[2]
      ), o(
        e,
        "opacity",
        /*bgOpacity*/
        i[4]
      );
    },
    m(t, n) {
      y(t, e, n);
    },
    p(t, n) {
      n & /*bg*/
      4 && o(
        e,
        "fill",
        /*bg*/
        t[2]
      ), n & /*bgOpacity*/
      16 && o(
        e,
        "opacity",
        /*bgOpacity*/
        t[4]
      );
    },
    d(t) {
      t && m(e);
    }
  };
}
function Bi(i) {
  let e;
  return {
    c() {
      e = M("rect"), o(e, "x", "3"), o(e, "y", "3"), o(e, "width", "18"), o(e, "height", "18"), o(e, "rx", "0"), o(
        e,
        "fill",
        /*bg*/
        i[2]
      ), o(
        e,
        "opacity",
        /*bgOpacity*/
        i[4]
      );
    },
    m(t, n) {
      y(t, e, n);
    },
    p(t, n) {
      n & /*bg*/
      4 && o(
        e,
        "fill",
        /*bg*/
        t[2]
      ), n & /*bgOpacity*/
      16 && o(
        e,
        "opacity",
        /*bgOpacity*/
        t[4]
      );
    },
    d(t) {
      t && m(e);
    }
  };
}
function Ti(i) {
  let e;
  function t(r, a) {
    return (
      /*name*/
      r[0] === "Confirmation" ? ti : (
        /*name*/
        r[0] === "Warning" ? ei : (
          /*name*/
          r[0] === "Info" ? Qt : (
            /*name*/
            r[0] === "InfoCircle" ? Kt : (
              /*name*/
              r[0] === "Interactive" ? Jt : (
                /*name*/
                r[0] === "Expand" ? Xt : (
                  /*name*/
                  r[0] === "OpenData" ? Yt : (
                    /*name*/
                    r[0] === "badge-check" ? Gt : (
                      /*name*/
                      r[0] === "Download" ? Ut : (
                        /*name*/
                        r[0] === "ExternalLink" ? Zt : Ht
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
  let n = t(i), l = n(i);
  return {
    c() {
      l.c(), e = F();
    },
    m(r, a) {
      l.m(r, a), y(r, e, a);
    },
    p(r, [a]) {
      n === (n = t(r)) && l ? l.p(r, a) : (l.d(1), l = n(r), l && (l.c(), l.m(e.parentNode, e)));
    },
    i: se,
    o: se,
    d(r) {
      r && m(e), l.d(r);
    }
  };
}
function Di(i, e, t) {
  let { name: n } = e, { size: l = 0 } = e, { bg: r = null } = e, { fg: a = null } = e, { bgOpacity: f = 0.14 } = e, { bgShape: s = "round" } = e;
  return i.$$set = (c) => {
    "name" in c && t(0, n = c.name), "size" in c && t(1, l = c.size), "bg" in c && t(2, r = c.bg), "fg" in c && t(3, a = c.fg), "bgOpacity" in c && t(4, f = c.bgOpacity), "bgShape" in c && t(5, s = c.bgShape);
  }, [n, l, r, a, f, s];
}
class ge extends J {
  constructor(e) {
    super(), Y(this, e, Di, Ti, U, {
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
    this.$$set({ name: e }), p();
  }
  get size() {
    return this.$$.ctx[1];
  }
  set size(e) {
    this.$$set({ size: e }), p();
  }
  get bg() {
    return this.$$.ctx[2];
  }
  set bg(e) {
    this.$$set({ bg: e }), p();
  }
  get fg() {
    return this.$$.ctx[3];
  }
  set fg(e) {
    this.$$set({ fg: e }), p();
  }
  get bgOpacity() {
    return this.$$.ctx[4];
  }
  set bgOpacity(e) {
    this.$$set({ bgOpacity: e }), p();
  }
  get bgShape() {
    return this.$$.ctx[5];
  }
  set bgShape(e) {
    this.$$set({ bgShape: e }), p();
  }
}
X(ge, { name: {}, size: {}, bg: {}, fg: {}, bgOpacity: {}, bgShape: {} }, [], [], !0);
function Ci(i) {
  he(i, "svelte-13r27b2", ".triggerButton.svelte-13r27b2{all:unset;display:inline-flex;align-items:center}.interactive.svelte-13r27b2{cursor:pointer}");
}
const Ni = (i) => ({}), je = (i) => ({}), qi = (i) => ({}), Le = (i) => ({}), Ai = (i) => ({}), Re = (i) => ({}), Fi = (i) => ({}), Ve = (i) => ({});
function Ei(i) {
  let e, t;
  const n = (
    /*#slots*/
    i[11].trigger
  ), l = fe(
    n,
    i,
    /*$$scope*/
    i[12],
    je
  );
  return {
    c() {
      e = B("span"), l && l.c();
    },
    m(r, a) {
      y(r, e, a), l && l.m(e, null), t = !0;
    },
    p(r, a) {
      l && l.p && (!t || a & /*$$scope*/
      4096) && ue(
        l,
        n,
        r,
        /*$$scope*/
        r[12],
        t ? ce(
          n,
          /*$$scope*/
          r[12],
          a,
          Ni
        ) : de(
          /*$$scope*/
          r[12]
        ),
        je
      );
    },
    i(r) {
      t || (S(l, r), t = !0);
    },
    o(r) {
      $(l, r), t = !1;
    },
    d(r) {
      r && m(e), l && l.d(r);
    }
  };
}
function Ii(i) {
  let e, t, n, l, r;
  const a = (
    /*#slots*/
    i[11].trigger
  ), f = fe(
    a,
    i,
    /*$$scope*/
    i[12],
    Le
  );
  return {
    c() {
      var s;
      e = B("button"), f && f.c(), o(e, "class", "triggerButton interactive svelte-13r27b2"), o(e, "type", "button"), o(e, "aria-label", t = /*badge*/
      (s = i[0]) == null ? void 0 : s.label);
    },
    m(s, c) {
      y(s, e, c), f && f.m(e, null), n = !0, l || (r = K(
        e,
        "click",
        /*onTriggerClick*/
        i[8]
      ), l = !0);
    },
    p(s, c) {
      var u;
      f && f.p && (!n || c & /*$$scope*/
      4096) && ue(
        f,
        a,
        s,
        /*$$scope*/
        s[12],
        n ? ce(
          a,
          /*$$scope*/
          s[12],
          c,
          qi
        ) : de(
          /*$$scope*/
          s[12]
        ),
        Le
      ), (!n || c & /*badge*/
      1 && t !== (t = /*badge*/
      (u = s[0]) == null ? void 0 : u.label)) && o(e, "aria-label", t);
    },
    i(s) {
      n || (S(f, s), n = !0);
    },
    o(s) {
      $(f, s), n = !1;
    },
    d(s) {
      s && m(e), f && f.d(s), l = !1, r();
    }
  };
}
function Oi(i) {
  let e, t;
  return e = new ut({
    props: {
      placement: (
        /*placement*/
        i[7]
      ),
      openDelayMs: (
        /*openDelayMs*/
        i[6]
      ),
      maxWidthPx: (
        /*maxWidthPx*/
        i[5]
      ),
      $$slots: {
        content: [Ri],
        trigger: [Li]
      },
      $$scope: { ctx: i }
    }
  }), {
    c() {
      A(e.$$.fragment);
    },
    m(n, l) {
      N(e, n, l), t = !0;
    },
    p(n, l) {
      const r = {};
      l & /*placement*/
      128 && (r.placement = /*placement*/
      n[7]), l & /*openDelayMs*/
      64 && (r.openDelayMs = /*openDelayMs*/
      n[6]), l & /*maxWidthPx*/
      32 && (r.maxWidthPx = /*maxWidthPx*/
      n[5]), l & /*$$scope, badge, hintIcon, contentMode, interactive*/
      4119 && (r.$$scope = { dirty: l, ctx: n }), e.$set(r);
    },
    i(n) {
      t || (S(e.$$.fragment, n), t = !0);
    },
    o(n) {
      $(e.$$.fragment, n), t = !1;
    },
    d(n) {
      q(e, n);
    }
  };
}
function Wi(i) {
  let e;
  const t = (
    /*#slots*/
    i[11].trigger
  ), n = fe(
    t,
    i,
    /*$$scope*/
    i[12],
    Re
  );
  return {
    c() {
      n && n.c();
    },
    m(l, r) {
      n && n.m(l, r), e = !0;
    },
    p(l, r) {
      n && n.p && (!e || r & /*$$scope*/
      4096) && ue(
        n,
        t,
        l,
        /*$$scope*/
        l[12],
        e ? ce(
          t,
          /*$$scope*/
          l[12],
          r,
          Ai
        ) : de(
          /*$$scope*/
          l[12]
        ),
        Re
      );
    },
    i(l) {
      e || (S(n, l), e = !0);
    },
    o(l) {
      $(n, l), e = !1;
    },
    d(l) {
      n && n.d(l);
    }
  };
}
function ji(i) {
  let e, t, n, l, r;
  const a = (
    /*#slots*/
    i[11].trigger
  ), f = fe(
    a,
    i,
    /*$$scope*/
    i[12],
    Ve
  );
  return {
    c() {
      var s;
      e = B("button"), f && f.c(), o(e, "class", "triggerButton interactive svelte-13r27b2"), o(e, "type", "button"), o(e, "aria-label", t = /*badge*/
      (s = i[0]) == null ? void 0 : s.label);
    },
    m(s, c) {
      y(s, e, c), f && f.m(e, null), n = !0, l || (r = K(
        e,
        "click",
        /*onTriggerClick*/
        i[8]
      ), l = !0);
    },
    p(s, c) {
      var u;
      f && f.p && (!n || c & /*$$scope*/
      4096) && ue(
        f,
        a,
        s,
        /*$$scope*/
        s[12],
        n ? ce(
          a,
          /*$$scope*/
          s[12],
          c,
          Fi
        ) : de(
          /*$$scope*/
          s[12]
        ),
        Ve
      ), (!n || c & /*badge*/
      1 && t !== (t = /*badge*/
      (u = s[0]) == null ? void 0 : u.label)) && o(e, "aria-label", t);
    },
    i(s) {
      n || (S(f, s), n = !0);
    },
    o(s) {
      $(f, s), n = !1;
    },
    d(s) {
      s && m(e), f && f.d(s), l = !1, r();
    }
  };
}
function Li(i) {
  let e, t, n, l;
  const r = [ji, Wi], a = [];
  function f(s, c) {
    return (
      /*interactive*/
      s[1] ? 0 : 1
    );
  }
  return t = f(i), n = a[t] = r[t](i), {
    c() {
      e = B("span"), n.c(), o(e, "slot", "trigger");
    },
    m(s, c) {
      y(s, e, c), a[t].m(e, null), l = !0;
    },
    p(s, c) {
      let u = t;
      t = f(s), t === u ? a[t].p(s, c) : (O(), $(a[u], 1, 1, () => {
        a[u] = null;
      }), W(), n = a[t], n ? n.p(s, c) : (n = a[t] = r[t](s), n.c()), S(n, 1), n.m(e, null));
    },
    i(s) {
      l || (S(n), l = !0);
    },
    o(s) {
      $(n), l = !1;
    },
    d(s) {
      s && m(e), a[t].d();
    }
  };
}
function He(i) {
  let e, t = (
    /*badge*/
    i[0].label + ""
  ), n;
  return {
    c() {
      e = B("strong"), n = G(t);
    },
    m(l, r) {
      y(l, e, r), v(e, n);
    },
    p(l, r) {
      r & /*badge*/
      1 && t !== (t = /*badge*/
      l[0].label + "") && le(n, t);
    },
    d(l) {
      l && m(e);
    }
  };
}
function Ze(i) {
  let e, t = (
    /*badge*/
    i[0].description + ""
  ), n;
  return {
    c() {
      e = B("span"), n = G(t), o(e, "class", "bl_tooltipDesc");
    },
    m(l, r) {
      y(l, e, r), v(e, n);
    },
    p(l, r) {
      r & /*badge*/
      1 && t !== (t = /*badge*/
      l[0].description + "") && le(n, t);
    },
    d(l) {
      l && m(e);
    }
  };
}
function Ue(i) {
  let e, t, n, l, r = (
    /*badge*/
    i[0].actionText + ""
  ), a, f, s = (
    /*hintIcon*/
    i[2] && Ge(i)
  );
  return {
    c() {
      e = B("div"), t = B("div"), s && s.c(), n = Z(), l = B("span"), a = G(r), o(l, "class", "bl_tooltipActionText"), o(t, "class", "bl_tooltipActionRow"), o(e, "class", "bl_tooltipActionHint"), o(e, "aria-hidden", "true");
    },
    m(c, u) {
      y(c, e, u), v(e, t), s && s.m(t, null), v(t, n), v(t, l), v(l, a), f = !0;
    },
    p(c, u) {
      /*hintIcon*/
      c[2] ? s ? (s.p(c, u), u & /*hintIcon*/
      4 && S(s, 1)) : (s = Ge(c), s.c(), S(s, 1), s.m(t, n)) : s && (O(), $(s, 1, 1, () => {
        s = null;
      }), W()), (!f || u & /*badge*/
      1) && r !== (r = /*badge*/
      c[0].actionText + "") && le(a, r);
    },
    i(c) {
      f || (S(s), f = !0);
    },
    o(c) {
      $(s), f = !1;
    },
    d(c) {
      c && m(e), s && s.d();
    }
  };
}
function Ge(i) {
  let e, t, n;
  return t = new ge({
    props: {
      name: (
        /*hintIcon*/
        i[2]
      ),
      size: 10,
      fg: "rgba(255, 255, 255, 0.92)",
      bg: null,
      bgOpacity: 0
    }
  }), {
    c() {
      e = B("span"), A(t.$$.fragment), o(e, "class", "bl_tooltipActionIcon");
    },
    m(l, r) {
      y(l, e, r), N(t, e, null), n = !0;
    },
    p(l, r) {
      const a = {};
      r & /*hintIcon*/
      4 && (a.name = /*hintIcon*/
      l[2]), t.$set(a);
    },
    i(l) {
      n || (S(t.$$.fragment, l), n = !0);
    },
    o(l) {
      $(t.$$.fragment, l), n = !1;
    },
    d(l) {
      l && m(e), q(t);
    }
  };
}
function Ri(i) {
  let e, t, n, l, r = (
    /*contentMode*/
    i[4] === "labelAndDescription" && He(i)
  ), a = (
    /*badge*/
    i[0].description && Ze(i)
  ), f = (
    /*badge*/
    i[0].actionText && Ue(i)
  );
  return {
    c() {
      e = B("div"), r && r.c(), t = Z(), a && a.c(), n = Z(), f && f.c(), o(e, "slot", "content"), o(e, "class", "bl_tooltipContent");
    },
    m(s, c) {
      y(s, e, c), r && r.m(e, null), v(e, t), a && a.m(e, null), v(e, n), f && f.m(e, null), l = !0;
    },
    p(s, c) {
      /*contentMode*/
      s[4] === "labelAndDescription" ? r ? r.p(s, c) : (r = He(s), r.c(), r.m(e, t)) : r && (r.d(1), r = null), /*badge*/
      s[0].description ? a ? a.p(s, c) : (a = Ze(s), a.c(), a.m(e, n)) : a && (a.d(1), a = null), /*badge*/
      s[0].actionText ? f ? (f.p(s, c), c & /*badge*/
      1 && S(f, 1)) : (f = Ue(s), f.c(), S(f, 1), f.m(e, null)) : f && (O(), $(f, 1, 1, () => {
        f = null;
      }), W());
    },
    i(s) {
      l || (S(f), l = !0);
    },
    o(s) {
      $(f), l = !1;
    },
    d(s) {
      s && m(e), r && r.d(), a && a.d(), f && f.d();
    }
  };
}
function Vi(i) {
  let e, t, n, l;
  const r = [Oi, Ii, Ei], a = [];
  function f(s, c) {
    return (
      /*showTooltip*/
      s[3] ? 0 : (
        /*interactive*/
        s[1] ? 1 : 2
      )
    );
  }
  return e = f(i), t = a[e] = r[e](i), {
    c() {
      t.c(), n = F();
    },
    m(s, c) {
      a[e].m(s, c), y(s, n, c), l = !0;
    },
    p(s, [c]) {
      let u = e;
      e = f(s), e === u ? a[e].p(s, c) : (O(), $(a[u], 1, 1, () => {
        a[u] = null;
      }), W(), t = a[e], t ? t.p(s, c) : (t = a[e] = r[e](s), t.c()), S(t, 1), t.m(n.parentNode, n));
    },
    i(s) {
      l || (S(t), l = !0);
    },
    o(s) {
      $(t), l = !1;
    },
    d(s) {
      s && m(n), a[e].d(s);
    }
  };
}
function Hi(i, e, t) {
  let n, l, r, a, f, s, c, { $$slots: u = {}, $$scope: d } = e, { badge: h } = e, { options: _ = void 0 } = e, { interactive: w = !1 } = e;
  const b = De();
  function x(P) {
    !w || !h || b("activate", { badge: h, source: P });
  }
  function k(P) {
    x(P.detail === 0 ? "keyboard" : "pointer");
  }
  return i.$$set = (P) => {
    "badge" in P && t(0, h = P.badge), "options" in P && t(9, _ = P.options), "interactive" in P && t(1, w = P.interactive), "$$scope" in P && t(12, d = P.$$scope);
  }, i.$$.update = () => {
    i.$$.dirty & /*options*/
    512 && t(7, n = (_ == null ? void 0 : _.placement) ?? "top"), i.$$.dirty & /*options*/
    512 && t(6, l = Number.isFinite(_ == null ? void 0 : _.openDelayMs) ? Number(_ == null ? void 0 : _.openDelayMs) : 80), i.$$.dirty & /*options*/
    512 && t(5, r = Number.isFinite(_ == null ? void 0 : _.maxWidthPx) ? Number(_ == null ? void 0 : _.maxWidthPx) : 280), i.$$.dirty & /*options*/
    512 && t(4, a = (_ == null ? void 0 : _.contentMode) === "labelAndDescription" ? "labelAndDescription" : "description"), i.$$.dirty & /*options*/
    512 && t(10, f = (_ == null ? void 0 : _.enabled) ?? !0), i.$$.dirty & /*enabled, badge*/
    1025 && t(3, s = f && !!(h != null && h.description || h != null && h.actionText)), i.$$.dirty & /*badge*/
    1 && t(2, c = (h == null ? void 0 : h.actionIcon) ?? null);
  }, [
    h,
    w,
    c,
    s,
    a,
    r,
    l,
    n,
    k,
    _,
    f,
    u,
    d
  ];
}
class ye extends J {
  constructor(e) {
    super(), Y(this, e, Hi, Vi, U, { badge: 0, options: 9, interactive: 1 }, Ci);
  }
  get badge() {
    return this.$$.ctx[0];
  }
  set badge(e) {
    this.$$set({ badge: e }), p();
  }
  get options() {
    return this.$$.ctx[9];
  }
  set options(e) {
    this.$$set({ options: e }), p();
  }
  get interactive() {
    return this.$$.ctx[1];
  }
  set interactive(e) {
    this.$$set({ interactive: e }), p();
  }
}
X(ye, { badge: {}, options: {}, interactive: { type: "Boolean" } }, ["trigger"], [], !0);
function Zi(i) {
  he(i, "svelte-1qqk5q7", `.badge.svelte-1qqk5q7{display:inline-flex;align-items:center;gap:var(--badge-gap);padding:var(--badge-pad-y) var(--badge-pad-x);border-radius:16px;border:var(--badge-border-w) solid transparent;font-weight:550;font-size:12px;line-height:1;font-family:var(
      --vis-badge-tooltip-font-family,
      ui-sans-serif,
      system-ui,
      -apple-system,
      'Segoe UI',
      Roboto,
      'Helvetica Neue',
      Arial,
      sans-serif
    );user-select:none;outline:none;transition:background-color 120ms ease, border-color 120ms ease, color 120ms ease;--badge-solid:rgb(17, 24, 39);--badge-border:color-mix(in srgb, var(--badge-solid) 65%, transparent);--badge-fg:color-mix(in srgb, var(--badge-solid) 72%, black);--badge-bg:color-mix(in srgb, var(--badge-solid) 14%, transparent);--badge-gap:3px;--badge-pad-y:3px;--badge-pad-x:6px;--badge-border-w:1px}.badge.filled.svelte-1qqk5q7{background:var(--badge-solid);border-color:transparent;color:#ffffff}.badge.outlined.svelte-1qqk5q7{background:transparent;border-color:var(--badge-border);color:var(--badge-fg)}.icon.svelte-1qqk5q7{display:inline-flex;align-items:center;justify-content:center;width:20px;height:20px}.icon.svelte-1qqk5q7 svg,.icon.svelte-1qqk5q7 img,.icon.svelte-1qqk5q7 ion-icon,.icon.svelte-1qqk5q7 iconify-icon{width:100%;height:100%;display:block}.label.svelte-1qqk5q7{white-space:nowrap}`);
}
function Ye(i) {
  let e, t;
  return e = new ye({
    props: {
      badge: (
        /*badge*/
        i[0]
      ),
      options: (
        /*tooltip*/
        i[2]
      ),
      interactive: (
        /*interactive*/
        i[3]
      ),
      $$slots: { trigger: [Ui] },
      $$scope: { ctx: i }
    }
  }), e.$on(
    "activate",
    /*activate_handler*/
    i[7]
  ), {
    c() {
      A(e.$$.fragment);
    },
    m(n, l) {
      N(e, n, l), t = !0;
    },
    p(n, l) {
      const r = {};
      l & /*badge*/
      1 && (r.badge = /*badge*/
      n[0]), l & /*tooltip*/
      4 && (r.options = /*tooltip*/
      n[2]), l & /*interactive*/
      8 && (r.interactive = /*interactive*/
      n[3]), l & /*$$scope, variant, badgeColor, badge, iconName, iconBgShape*/
      371 && (r.$$scope = { dirty: l, ctx: n }), e.$set(r);
    },
    i(n) {
      t || (S(e.$$.fragment, n), t = !0);
    },
    o(n) {
      $(e.$$.fragment, n), t = !1;
    },
    d(n) {
      q(e, n);
    }
  };
}
function Xe(i) {
  let e, t, n;
  return t = new ge({
    props: {
      name: (
        /*iconName*/
        i[4]
      ),
      size: Yi,
      bg: (
        /*variant*/
        i[1] === "outlined" ? "var(--badge-solid)" : "#ffffff"
      ),
      fg: (
        /*variant*/
        i[1] === "outlined" ? "#ffffff" : "var(--badge-solid)"
      ),
      bgOpacity: 1,
      bgShape: (
        /*iconBgShape*/
        i[5]
      )
    }
  }), {
    c() {
      e = B("span"), A(t.$$.fragment), o(e, "class", "icon svelte-1qqk5q7"), o(e, "aria-hidden", "true");
    },
    m(l, r) {
      y(l, e, r), N(t, e, null), n = !0;
    },
    p(l, r) {
      const a = {};
      r & /*iconName*/
      16 && (a.name = /*iconName*/
      l[4]), r & /*variant*/
      2 && (a.bg = /*variant*/
      l[1] === "outlined" ? "var(--badge-solid)" : "#ffffff"), r & /*variant*/
      2 && (a.fg = /*variant*/
      l[1] === "outlined" ? "#ffffff" : "var(--badge-solid)"), r & /*iconBgShape*/
      32 && (a.bgShape = /*iconBgShape*/
      l[5]), t.$set(a);
    },
    i(l) {
      n || (S(t.$$.fragment, l), n = !0);
    },
    o(l) {
      $(t.$$.fragment, l), n = !1;
    },
    d(l) {
      l && m(e), q(t);
    }
  };
}
function Ui(i) {
  let e, t, n, l, r = (
    /*badge*/
    i[0].label + ""
  ), a, f, s, c, u = (
    /*iconName*/
    i[4] && Xe(i)
  );
  return {
    c() {
      e = B("span"), t = B("span"), u && u.c(), n = Z(), l = B("span"), a = G(r), o(l, "class", "label svelte-1qqk5q7"), o(t, "class", f = "badge " + /*variant*/
      i[1] + " svelte-1qqk5q7"), o(t, "style", s = `--badge-solid:${/*badgeColor*/
      i[6]};`), o(e, "slot", "trigger");
    },
    m(d, h) {
      y(d, e, h), v(e, t), u && u.m(t, null), v(t, n), v(t, l), v(l, a), c = !0;
    },
    p(d, h) {
      /*iconName*/
      d[4] ? u ? (u.p(d, h), h & /*iconName*/
      16 && S(u, 1)) : (u = Xe(d), u.c(), S(u, 1), u.m(t, n)) : u && (O(), $(u, 1, 1, () => {
        u = null;
      }), W()), (!c || h & /*badge*/
      1) && r !== (r = /*badge*/
      d[0].label + "") && le(a, r), (!c || h & /*variant*/
      2 && f !== (f = "badge " + /*variant*/
      d[1] + " svelte-1qqk5q7")) && o(t, "class", f), (!c || h & /*badgeColor*/
      64 && s !== (s = `--badge-solid:${/*badgeColor*/
      d[6]};`)) && o(t, "style", s);
    },
    i(d) {
      c || (S(u), c = !0);
    },
    o(d) {
      $(u), c = !1;
    },
    d(d) {
      d && m(e), u && u.d();
    }
  };
}
function Gi(i) {
  let e, t, n = (
    /*badge*/
    i[0] && Ye(i)
  );
  return {
    c() {
      n && n.c(), e = F();
    },
    m(l, r) {
      n && n.m(l, r), y(l, e, r), t = !0;
    },
    p(l, [r]) {
      /*badge*/
      l[0] ? n ? (n.p(l, r), r & /*badge*/
      1 && S(n, 1)) : (n = Ye(l), n.c(), S(n, 1), n.m(e.parentNode, e)) : n && (O(), $(n, 1, 1, () => {
        n = null;
      }), W());
    },
    i(l) {
      t || (S(n), t = !0);
    },
    o(l) {
      $(n), t = !1;
    },
    d(l) {
      l && m(e), n && n.d(l);
    }
  };
}
const Yi = 20;
function Xi(i, e, t) {
  let n, l, r, { badge: a } = e, { variant: f = "filled" } = e, { tooltip: s = void 0 } = e, { interactive: c = !1 } = e;
  function u(d) {
    ze.call(this, i, d);
  }
  return i.$$set = (d) => {
    "badge" in d && t(0, a = d.badge), "variant" in d && t(1, f = d.variant), "tooltip" in d && t(2, s = d.tooltip), "interactive" in d && t(3, c = d.interactive);
  }, i.$$.update = () => {
    i.$$.dirty & /*badge*/
    1 && t(4, n = (a == null ? void 0 : a.icon) ?? null), i.$$.dirty & /*badge*/
    1 && t(6, l = String((a == null ? void 0 : a.color) ?? "").trim() || "rgb(17, 24, 39)"), i.$$.dirty & /*iconName*/
    16 && t(5, r = n === "Info" ? "square" : "round");
  }, [
    a,
    f,
    s,
    c,
    n,
    r,
    l,
    u
  ];
}
class dt extends J {
  constructor(e) {
    super(), Y(
      this,
      e,
      Xi,
      Gi,
      U,
      {
        badge: 0,
        variant: 1,
        tooltip: 2,
        interactive: 3
      },
      Zi
    );
  }
  get badge() {
    return this.$$.ctx[0];
  }
  set badge(e) {
    this.$$set({ badge: e }), p();
  }
  get variant() {
    return this.$$.ctx[1];
  }
  set variant(e) {
    this.$$set({ variant: e }), p();
  }
  get tooltip() {
    return this.$$.ctx[2];
  }
  set tooltip(e) {
    this.$$set({ tooltip: e }), p();
  }
  get interactive() {
    return this.$$.ctx[3];
  }
  set interactive(e) {
    this.$$set({ interactive: e }), p();
  }
}
X(dt, { badge: {}, variant: {}, tooltip: {}, interactive: { type: "Boolean" } }, [], [], !0);
function Ji(i) {
  he(i, "svelte-1v590r9", `.wrap.fixed.svelte-1v590r9.svelte-1v590r9{position:fixed;z-index:50}.wrap.svelte-1v590r9.svelte-1v590r9{display:inline-flex;align-items:center;justify-content:flex-end;pointer-events:auto}.wrap.left.svelte-1v590r9 .badge.mini{flex-direction:row-reverse}.badge.svelte-1v590r9.svelte-1v590r9{display:inline-flex;align-items:center;gap:var(--badge-gap);padding:var(--badge-pad-y) var(--badge-pad-x);border-radius:16px;border:var(--badge-border-w) solid transparent;font-weight:550;font-size:12px;line-height:1;font-family:var(
      --vis-badge-tooltip-font-family,
      ui-sans-serif,
      system-ui,
      -apple-system,
      'Segoe UI',
      Roboto,
      'Helvetica Neue',
      Arial,
      sans-serif
    );user-select:none;outline:none;transition:background-color 220ms ease, border-color 220ms ease, color 220ms ease, box-shadow 220ms ease,
      padding 420ms cubic-bezier(0.2, 0, 0, 1);--badge-solid:rgb(17, 24, 39);--badge-border:color-mix(in srgb, var(--badge-solid) 65%, transparent);--badge-fg:color-mix(in srgb, var(--badge-solid) 72%, black);--badge-gap:3px;--badge-pad-y:3px;--badge-pad-x:6px;--badge-border-w:1px;--mini-icon-bg:var(--badge-solid);--mini-icon-fg:#ffffff}.badge.filled.svelte-1v590r9.svelte-1v590r9{background:var(--badge-solid);border-color:transparent;color:#ffffff}.badge.outlined.svelte-1v590r9.svelte-1v590r9{background:transparent;border-color:var(--badge-border);color:var(--badge-fg)}.icon.svelte-1v590r9.svelte-1v590r9{display:inline-flex;align-items:center;justify-content:center;width:24px;height:24px}.icon.svelte-1v590r9 svg,.icon.svelte-1v590r9 img,.icon.svelte-1v590r9 ion-icon,.icon.svelte-1v590r9 iconify-icon{width:100%;height:100%;display:block}.label.svelte-1v590r9.svelte-1v590r9{white-space:nowrap}.badge.mini.svelte-1v590r9.svelte-1v590r9{--badge-gap:0px;--badge-pad-y:0px;--badge-pad-x:0px;--badge-border-w:0px;border-color:transparent;background:transparent;font-size:11px}.badge.mini.svelte-1v590r9 .label.svelte-1v590r9{max-width:0;opacity:0;overflow:hidden;line-height:1.2;padding-bottom:1px;transition:max-width 420ms cubic-bezier(0.2, 0, 0, 1), opacity 260ms ease}.badge.mini.svelte-1v590r9.svelte-1v590r9:hover,.badge.mini.svelte-1v590r9.svelte-1v590r9:focus-visible{--badge-gap:2px;--badge-pad-y:2px;--badge-pad-x:5px;--badge-border-w:1px}.badge.mini.outlined.svelte-1v590r9.svelte-1v590r9:hover,.badge.mini.outlined.svelte-1v590r9.svelte-1v590r9:focus-visible{border-color:var(--badge-border)}.badge.mini.filled.svelte-1v590r9.svelte-1v590r9:hover,.badge.mini.filled.svelte-1v590r9.svelte-1v590r9:focus-visible{background:var(--badge-solid);border-color:transparent;color:#ffffff;--mini-icon-bg:#ffffff;--mini-icon-fg:var(--badge-solid)}.badge.mini.svelte-1v590r9:hover .label.svelte-1v590r9,.badge.mini.svelte-1v590r9:focus-visible .label.svelte-1v590r9{max-width:220px;opacity:1}`);
}
function Je(i) {
  let e, t;
  return e = new ye({
    props: {
      badge: (
        /*badge*/
        i[0]
      ),
      options: (
        /*tooltip*/
        i[2]
      ),
      interactive: (
        /*interactive*/
        i[3]
      ),
      $$slots: { trigger: [Ki] },
      $$scope: { ctx: i }
    }
  }), e.$on(
    "activate",
    /*activate_handler*/
    i[11]
  ), {
    c() {
      A(e.$$.fragment);
    },
    m(n, l) {
      N(e, n, l), t = !0;
    },
    p(n, l) {
      const r = {};
      l & /*badge*/
      1 && (r.badge = /*badge*/
      n[0]), l & /*tooltip*/
      4 && (r.options = /*tooltip*/
      n[2]), l & /*interactive*/
      8 && (r.interactive = /*interactive*/
      n[3]), l & /*$$scope, variant, badgeColor, badge, iconName, iconBgShapeFinal*/
      4995 && (r.$$scope = { dirty: l, ctx: n }), e.$set(r);
    },
    i(n) {
      t || (S(e.$$.fragment, n), t = !0);
    },
    o(n) {
      $(e.$$.fragment, n), t = !1;
    },
    d(n) {
      q(e, n);
    }
  };
}
function Ke(i) {
  let e, t, n;
  return t = new ge({
    props: {
      name: (
        /*iconName*/
        i[7]
      ),
      size: en,
      bg: "var(--mini-icon-bg)",
      fg: "var(--mini-icon-fg)",
      bgOpacity: 1,
      bgShape: (
        /*iconBgShapeFinal*/
        i[8]
      )
    }
  }), {
    c() {
      e = B("span"), A(t.$$.fragment), o(e, "class", "icon svelte-1v590r9"), o(e, "aria-hidden", "true");
    },
    m(l, r) {
      y(l, e, r), N(t, e, null), n = !0;
    },
    p(l, r) {
      const a = {};
      r & /*iconName*/
      128 && (a.name = /*iconName*/
      l[7]), r & /*iconBgShapeFinal*/
      256 && (a.bgShape = /*iconBgShapeFinal*/
      l[8]), t.$set(a);
    },
    i(l) {
      n || (S(t.$$.fragment, l), n = !0);
    },
    o(l) {
      $(t.$$.fragment, l), n = !1;
    },
    d(l) {
      l && m(e), q(t);
    }
  };
}
function Ki(i) {
  let e, t, n, l, r = (
    /*badge*/
    i[0].label + ""
  ), a, f, s, c, u = (
    /*iconName*/
    i[7] && Ke(i)
  );
  return {
    c() {
      e = B("span"), t = B("span"), u && u.c(), n = Z(), l = B("span"), a = G(r), o(l, "class", "label svelte-1v590r9"), o(t, "class", f = "badge mini " + /*variant*/
      i[1] + " svelte-1v590r9"), o(t, "style", s = `--badge-solid:${/*badgeColor*/
      i[9]};`), o(e, "slot", "trigger");
    },
    m(d, h) {
      y(d, e, h), v(e, t), u && u.m(t, null), v(t, n), v(t, l), v(l, a), c = !0;
    },
    p(d, h) {
      /*iconName*/
      d[7] ? u ? (u.p(d, h), h & /*iconName*/
      128 && S(u, 1)) : (u = Ke(d), u.c(), S(u, 1), u.m(t, n)) : u && (O(), $(u, 1, 1, () => {
        u = null;
      }), W()), (!c || h & /*badge*/
      1) && r !== (r = /*badge*/
      d[0].label + "") && le(a, r), (!c || h & /*variant*/
      2 && f !== (f = "badge mini " + /*variant*/
      d[1] + " svelte-1v590r9")) && o(t, "class", f), (!c || h & /*badgeColor*/
      512 && s !== (s = `--badge-solid:${/*badgeColor*/
      d[9]};`)) && o(t, "style", s);
    },
    i(d) {
      c || (S(u), c = !0);
    },
    o(d) {
      $(u), c = !1;
    },
    d(d) {
      d && m(e), u && u.d();
    }
  };
}
function Qi(i) {
  let e, t, n, l, r = (
    /*badge*/
    i[0] && Je(i)
  );
  return {
    c() {
      e = B("div"), r && r.c(), o(e, "class", t = "wrap " + /*fixed*/
      (i[4] ? "fixed" : "") + " " + /*expandDirection*/
      i[6] + " svelte-1v590r9"), o(e, "style", n = /*fixed*/
      i[4] ? `right:${/*offsetPx*/
      i[5]}px;bottom:${/*offsetPx*/
      i[5]}px;` : void 0), o(e, "aria-label", "Mini badge");
    },
    m(a, f) {
      y(a, e, f), r && r.m(e, null), l = !0;
    },
    p(a, [f]) {
      /*badge*/
      a[0] ? r ? (r.p(a, f), f & /*badge*/
      1 && S(r, 1)) : (r = Je(a), r.c(), S(r, 1), r.m(e, null)) : r && (O(), $(r, 1, 1, () => {
        r = null;
      }), W()), (!l || f & /*fixed, expandDirection*/
      80 && t !== (t = "wrap " + /*fixed*/
      (a[4] ? "fixed" : "") + " " + /*expandDirection*/
      a[6] + " svelte-1v590r9")) && o(e, "class", t), (!l || f & /*fixed, offsetPx*/
      48 && n !== (n = /*fixed*/
      a[4] ? `right:${/*offsetPx*/
      a[5]}px;bottom:${/*offsetPx*/
      a[5]}px;` : void 0)) && o(e, "style", n);
    },
    i(a) {
      l || (S(r), l = !0);
    },
    o(a) {
      $(r), l = !1;
    },
    d(a) {
      a && m(e), r && r.d();
    }
  };
}
const en = 24;
function tn(i, e, t) {
  let n, l, r, { badge: a } = e, { variant: f = "outlined" } = e, { iconBgShape: s = "round" } = e, { tooltip: c = void 0 } = e, { interactive: u = !1 } = e, { fixed: d = !1 } = e, { offsetPx: h = 16 } = e, { expandDirection: _ = "right" } = e;
  function w(b) {
    ze.call(this, i, b);
  }
  return i.$$set = (b) => {
    "badge" in b && t(0, a = b.badge), "variant" in b && t(1, f = b.variant), "iconBgShape" in b && t(10, s = b.iconBgShape), "tooltip" in b && t(2, c = b.tooltip), "interactive" in b && t(3, u = b.interactive), "fixed" in b && t(4, d = b.fixed), "offsetPx" in b && t(5, h = b.offsetPx), "expandDirection" in b && t(6, _ = b.expandDirection);
  }, i.$$.update = () => {
    i.$$.dirty & /*badge*/
    1 && t(7, n = (a == null ? void 0 : a.icon) ?? null), i.$$.dirty & /*badge*/
    1 && t(9, l = String((a == null ? void 0 : a.color) ?? "").trim() || "rgb(17, 24, 39)"), i.$$.dirty & /*iconName, iconBgShape*/
    1152 && t(8, r = n === "Info" ? "square" : s);
  }, [
    a,
    f,
    c,
    u,
    d,
    h,
    _,
    n,
    r,
    l,
    s,
    w
  ];
}
class ht extends J {
  constructor(e) {
    super(), Y(
      this,
      e,
      tn,
      Qi,
      U,
      {
        badge: 0,
        variant: 1,
        iconBgShape: 10,
        tooltip: 2,
        interactive: 3,
        fixed: 4,
        offsetPx: 5,
        expandDirection: 6
      },
      Ji
    );
  }
  get badge() {
    return this.$$.ctx[0];
  }
  set badge(e) {
    this.$$set({ badge: e }), p();
  }
  get variant() {
    return this.$$.ctx[1];
  }
  set variant(e) {
    this.$$set({ variant: e }), p();
  }
  get iconBgShape() {
    return this.$$.ctx[10];
  }
  set iconBgShape(e) {
    this.$$set({ iconBgShape: e }), p();
  }
  get tooltip() {
    return this.$$.ctx[2];
  }
  set tooltip(e) {
    this.$$set({ tooltip: e }), p();
  }
  get interactive() {
    return this.$$.ctx[3];
  }
  set interactive(e) {
    this.$$set({ interactive: e }), p();
  }
  get fixed() {
    return this.$$.ctx[4];
  }
  set fixed(e) {
    this.$$set({ fixed: e }), p();
  }
  get offsetPx() {
    return this.$$.ctx[5];
  }
  set offsetPx(e) {
    this.$$set({ offsetPx: e }), p();
  }
  get expandDirection() {
    return this.$$.ctx[6];
  }
  set expandDirection(e) {
    this.$$set({ expandDirection: e }), p();
  }
}
X(ht, { badge: {}, variant: {}, iconBgShape: {}, tooltip: {}, interactive: { type: "Boolean" }, fixed: { type: "Boolean" }, offsetPx: {}, expandDirection: {} }, [], [], !0);
function nn(i) {
  he(i, "svelte-1h18cih", `.prio.svelte-1h18cih.svelte-1h18cih{width:var(--prio-size);height:var(--prio-size);border-radius:999px;display:inline-flex;align-items:center;justify-content:center;cursor:default;outline:none;user-select:none;transition:transform 160ms cubic-bezier(0.2, 0, 0, 1), box-shadow 160ms cubic-bezier(0.2, 0, 0, 1);font-family:var(
      --vis-badge-tooltip-font-family,
      ui-sans-serif,
      system-ui,
      -apple-system,
      'Segoe UI',
      Roboto,
      'Helvetica Neue',
      Arial,
      sans-serif
    );--prio-solid:rgb(17, 24, 39);--prio-border:color-mix(in srgb, var(--prio-solid) 65%, transparent);--prio-text:#ffffff}.prio-inner.svelte-1h18cih.svelte-1h18cih{width:100%;height:100%;border-radius:999px;display:inline-flex;align-items:center;justify-content:center}.prio.with-label.svelte-1h18cih .prio-inner.svelte-1h18cih{flex-direction:column;gap:2px;padding:3px 5px 5px 5px;box-sizing:border-box}.prio-text.svelte-1h18cih.svelte-1h18cih{font-size:var(--prio-text-size, 10px);font-weight:550;letter-spacing:0.02em;line-height:1.05;color:var(--prio-text);text-align:center;white-space:normal;overflow-wrap:anywhere;opacity:0.95}.icon.svelte-1h18cih.svelte-1h18cih{display:inline-flex;align-items:center;justify-content:center;width:var(--prio-icon-size);height:var(--prio-icon-size)}.icon.svelte-1h18cih svg,.icon.svelte-1h18cih img,.icon.svelte-1h18cih ion-icon,.icon.svelte-1h18cih iconify-icon{width:100%;height:100%;display:block}.prio.solid.svelte-1h18cih.svelte-1h18cih{background:var(--prio-solid)}.prio.ring.svelte-1h18cih.svelte-1h18cih{background:#ffffff;box-shadow:inset 0 0 0 2px var(--prio-solid);--prio-text:var(--prio-solid)}.prio.double-ring.svelte-1h18cih.svelte-1h18cih{background:var(--prio-solid);box-shadow:inset 0 0 0 3px rgba(255, 255, 255, 0.95), 0 0 0 2px var(--prio-solid)}`);
}
function Qe(i) {
  let e, t;
  return e = new ye({
    props: {
      badge: (
        /*badge*/
        i[0]
      ),
      options: (
        /*tooltip*/
        i[2]
      ),
      interactive: (
        /*interactive*/
        i[3]
      ),
      $$slots: { trigger: [ln] },
      $$scope: { ctx: i }
    }
  }), e.$on(
    "activate",
    /*activate_handler*/
    i[13]
  ), {
    c() {
      A(e.$$.fragment);
    },
    m(n, l) {
      N(e, n, l), t = !0;
    },
    p(n, l) {
      const r = {};
      l & /*badge*/
      1 && (r.badge = /*badge*/
      n[0]), l & /*tooltip*/
      4 && (r.options = /*tooltip*/
      n[2]), l & /*interactive*/
      8 && (r.interactive = /*interactive*/
      n[3]), l & /*$$scope, variant, badgeColor, renderSize, textSize, iconSize, rawLabel, iconName, iconBgShape*/
      18418 && (r.$$scope = { dirty: l, ctx: n }), e.$set(r);
    },
    i(n) {
      t || (S(e.$$.fragment, n), t = !0);
    },
    o(n) {
      $(e.$$.fragment, n), t = !1;
    },
    d(n) {
      q(e, n);
    }
  };
}
function et(i) {
  let e, t, n;
  return t = new ge({
    props: {
      name: (
        /*iconName*/
        i[6]
      ),
      size: (
        /*iconSize*/
        i[8]
      ),
      bg: (
        /*variant*/
        i[1] === "solid" ? "#ffffff" : "var(--prio-solid)"
      ),
      bgOpacity: 1,
      fg: (
        /*variant*/
        i[1] === "solid" ? "var(--prio-solid)" : "#ffffff"
      ),
      bgShape: (
        /*iconBgShape*/
        i[9]
      )
    }
  }), {
    c() {
      e = B("span"), A(t.$$.fragment), o(e, "class", "icon svelte-1h18cih"), o(e, "aria-hidden", "true");
    },
    m(l, r) {
      y(l, e, r), N(t, e, null), n = !0;
    },
    p(l, r) {
      const a = {};
      r & /*iconName*/
      64 && (a.name = /*iconName*/
      l[6]), r & /*iconSize*/
      256 && (a.size = /*iconSize*/
      l[8]), r & /*variant*/
      2 && (a.bg = /*variant*/
      l[1] === "solid" ? "#ffffff" : "var(--prio-solid)"), r & /*variant*/
      2 && (a.fg = /*variant*/
      l[1] === "solid" ? "var(--prio-solid)" : "#ffffff"), r & /*iconBgShape*/
      512 && (a.bgShape = /*iconBgShape*/
      l[9]), t.$set(a);
    },
    i(l) {
      n || (S(t.$$.fragment, l), n = !0);
    },
    o(l) {
      $(t.$$.fragment, l), n = !1;
    },
    d(l) {
      l && m(e), q(t);
    }
  };
}
function ln(i) {
  let e, t, n, l, r, a, f, s, c, u = (
    /*iconName*/
    i[6] && et(i)
  );
  return {
    c() {
      e = B("span"), t = B("span"), n = B("span"), u && u.c(), l = Z(), r = B("span"), a = G(
        /*rawLabel*/
        i[5]
      ), o(r, "class", "prio-text svelte-1h18cih"), o(n, "class", "prio-inner svelte-1h18cih"), o(n, "aria-hidden", "true"), o(t, "class", f = "prio " + /*variant*/
      i[1] + " with-label svelte-1h18cih"), o(t, "style", s = `--prio-solid:${/*badgeColor*/
      i[10]}; --prio-size:${/*renderSize*/
      i[4]}px; --prio-text-size:${/*textSize*/
      i[7]}px; --prio-icon-size:${/*iconSize*/
      i[8]}px;`), o(e, "slot", "trigger");
    },
    m(d, h) {
      y(d, e, h), v(e, t), v(t, n), u && u.m(n, null), v(n, l), v(n, r), v(r, a), c = !0;
    },
    p(d, h) {
      /*iconName*/
      d[6] ? u ? (u.p(d, h), h & /*iconName*/
      64 && S(u, 1)) : (u = et(d), u.c(), S(u, 1), u.m(n, l)) : u && (O(), $(u, 1, 1, () => {
        u = null;
      }), W()), (!c || h & /*rawLabel*/
      32) && le(
        a,
        /*rawLabel*/
        d[5]
      ), (!c || h & /*variant*/
      2 && f !== (f = "prio " + /*variant*/
      d[1] + " with-label svelte-1h18cih")) && o(t, "class", f), (!c || h & /*badgeColor, renderSize, textSize, iconSize*/
      1424 && s !== (s = `--prio-solid:${/*badgeColor*/
      d[10]}; --prio-size:${/*renderSize*/
      d[4]}px; --prio-text-size:${/*textSize*/
      d[7]}px; --prio-icon-size:${/*iconSize*/
      d[8]}px;`)) && o(t, "style", s);
    },
    i(d) {
      c || (S(u), c = !0);
    },
    o(d) {
      $(u), c = !1;
    },
    d(d) {
      d && m(e), u && u.d();
    }
  };
}
function rn(i) {
  let e, t, n = (
    /*badge*/
    i[0] && Qe(i)
  );
  return {
    c() {
      n && n.c(), e = F();
    },
    m(l, r) {
      n && n.m(l, r), y(l, e, r), t = !0;
    },
    p(l, [r]) {
      /*badge*/
      l[0] ? n ? (n.p(l, r), r & /*badge*/
      1 && S(n, 1)) : (n = Qe(l), n.c(), S(n, 1), n.m(e.parentNode, e)) : n && (O(), $(n, 1, 1, () => {
        n = null;
      }), W());
    },
    i(l) {
      t || (S(n), t = !0);
    },
    o(l) {
      $(n), t = !1;
    },
    d(l) {
      l && m(e), n && n.d(l);
    }
  };
}
function on(i) {
  return String(i ?? "").trim() || "—";
}
function an(i, e, t) {
  let n, l, r, a, f, s, c, u, { badge: d } = e, { variant: h = "solid" } = e, { size: _ = 44 } = e, { tooltip: w = void 0 } = e, { interactive: b = !1 } = e;
  function x(k) {
    ze.call(this, i, k);
  }
  return i.$$set = (k) => {
    "badge" in k && t(0, d = k.badge), "variant" in k && t(1, h = k.variant), "size" in k && t(11, _ = k.size), "tooltip" in k && t(2, w = k.tooltip), "interactive" in k && t(3, b = k.interactive);
  }, i.$$.update = () => {
    i.$$.dirty & /*badge*/
    1 && t(6, n = (d == null ? void 0 : d.icon) ?? null), i.$$.dirty & /*badge*/
    1 && t(10, l = String((d == null ? void 0 : d.color) ?? "").trim() || "rgb(17, 24, 39)"), i.$$.dirty & /*iconName*/
    64 && t(9, r = n === "Info" ? "square" : "round"), i.$$.dirty & /*badge*/
    1 && t(5, a = on(d == null ? void 0 : d.label)), i.$$.dirty & /*rawLabel*/
    32 && t(12, f = a.length), i.$$.dirty & /*size, labelLen*/
    6144 && t(4, s = Math.min(104, Math.max(_, 70 + Math.max(0, f - 12) * 1.4))), i.$$.dirty & /*renderSize*/
    16 && t(8, c = Math.round(s * 0.34)), i.$$.dirty & /*labelLen*/
    4096 && t(7, u = f <= 12 ? 12 : f <= 18 ? 11 : f <= 26 ? 10 : 9);
  }, [
    d,
    h,
    w,
    b,
    s,
    a,
    n,
    u,
    c,
    r,
    l,
    _,
    f,
    x
  ];
}
class gt extends J {
  constructor(e) {
    super(), Y(
      this,
      e,
      an,
      rn,
      U,
      {
        badge: 0,
        variant: 1,
        size: 11,
        tooltip: 2,
        interactive: 3
      },
      nn
    );
  }
  get badge() {
    return this.$$.ctx[0];
  }
  set badge(e) {
    this.$$set({ badge: e }), p();
  }
  get variant() {
    return this.$$.ctx[1];
  }
  set variant(e) {
    this.$$set({ variant: e }), p();
  }
  get size() {
    return this.$$.ctx[11];
  }
  set size(e) {
    this.$$set({ size: e }), p();
  }
  get tooltip() {
    return this.$$.ctx[2];
  }
  set tooltip(e) {
    this.$$set({ tooltip: e }), p();
  }
  get interactive() {
    return this.$$.ctx[3];
  }
  set interactive(e) {
    this.$$set({ interactive: e }), p();
  }
}
X(gt, { badge: {}, variant: {}, size: {}, tooltip: {}, interactive: { type: "Boolean" } }, [], [], !0);
function sn(i) {
  he(i, "svelte-1rs0hrt", `.seal.svelte-1rs0hrt.svelte-1rs0hrt{position:relative;width:var(--seal-size);height:var(--seal-size);border-radius:999px;display:inline-grid;place-items:center;outline:none;cursor:default;user-select:none;background:transparent;--seal-solid:rgb(17, 24, 39);--seal-ring:color-mix(in srgb, var(--seal-solid) 55%, transparent);--seal-line:color-mix(in srgb, var(--seal-solid) 18%, transparent);--seal-ring-fg:var(--seal-solid)}.seal.filled.svelte-1rs0hrt.svelte-1rs0hrt{background:var(--seal-solid);--seal-ring-fg:rgba(255, 255, 255, 0.92)}.ring.svelte-1rs0hrt.svelte-1rs0hrt{position:absolute;inset:0;border-radius:999px;font-size:var(--seal-font);font-family:var(
      --vis-badge-tooltip-font-family,
      ui-sans-serif,
      system-ui,
      -apple-system,
      'Segoe UI',
      Roboto,
      'Helvetica Neue',
      Arial,
      sans-serif
    );color:var(--seal-ring-fg);opacity:0.92;text-transform:uppercase;letter-spacing:0.1em;font-weight:550}.char.svelte-1rs0hrt.svelte-1rs0hrt{width:1em;height:100%;position:absolute;top:0;left:50%;transform:translateX(-50%) rotate(var(--angle));text-align:center}.center.svelte-1rs0hrt.svelte-1rs0hrt{position:absolute;inset:0;display:grid;place-items:center}.center-pill.svelte-1rs0hrt.svelte-1rs0hrt{width:calc(var(--seal-size) * 0.64);height:calc(var(--seal-size) * 0.64);border-radius:999px;background:rgba(255, 255, 255, 0.96);border:1px solid var(--seal-line);display:grid;place-items:center;opacity:0.95}.icon.svelte-1rs0hrt.svelte-1rs0hrt{display:inline-flex;align-items:center;justify-content:center;width:var(--seal-icon-size);height:var(--seal-icon-size)}.icon.svelte-1rs0hrt svg,.icon.svelte-1rs0hrt img,.icon.svelte-1rs0hrt ion-icon,.icon.svelte-1rs0hrt iconify-icon{width:100%;height:100%;display:block}.seal.filled.svelte-1rs0hrt .center-pill.svelte-1rs0hrt{border-color:rgba(255, 255, 255, 0.35);background:#ffffff;opacity:1}`);
}
function tt(i, e, t) {
  const n = i.slice();
  return n[17] = e[t], n[19] = t, n;
}
function it(i) {
  let e, t;
  return e = new ye({
    props: {
      badge: (
        /*badge*/
        i[0]
      ),
      options: (
        /*tooltip*/
        i[2]
      ),
      interactive: (
        /*interactive*/
        i[3]
      ),
      $$slots: { trigger: [fn] },
      $$scope: { ctx: i }
    }
  }), e.$on(
    "activate",
    /*activate_handler*/
    i[16]
  ), {
    c() {
      A(e.$$.fragment);
    },
    m(n, l) {
      N(e, n, l), t = !0;
    },
    p(n, l) {
      const r = {};
      l & /*badge*/
      1 && (r.badge = /*badge*/
      n[0]), l & /*tooltip*/
      4 && (r.options = /*tooltip*/
      n[2]), l & /*interactive*/
      8 && (r.interactive = /*interactive*/
      n[3]), l & /*$$scope, variant, badgeColor, size, ringFontPx, centerIcon, iconName, chars*/
      1049586 && (r.$$scope = { dirty: l, ctx: n }), e.$set(r);
    },
    i(n) {
      t || (S(e.$$.fragment, n), t = !0);
    },
    o(n) {
      $(e.$$.fragment, n), t = !1;
    },
    d(n) {
      q(e, n);
    }
  };
}
function nt(i, e) {
  let t, n = (
    /*char*/
    e[17] + ""
  ), l, r;
  return {
    key: i,
    first: null,
    c() {
      t = B("span"), l = G(n), o(t, "class", "char svelte-1rs0hrt"), o(t, "style", r = `--angle:${1 / /*chars*/
      e[7].length * /*index*/
      e[19]}turn;`), this.first = t;
    },
    m(a, f) {
      y(a, t, f), v(t, l);
    },
    p(a, f) {
      e = a, f & /*chars*/
      128 && n !== (n = /*char*/
      e[17] + "") && le(l, n), f & /*chars*/
      128 && r !== (r = `--angle:${1 / /*chars*/
      e[7].length * /*index*/
      e[19]}turn;`) && o(t, "style", r);
    },
    d(a) {
      a && m(t);
    }
  };
}
function lt(i) {
  let e, t, n, l;
  return t = new ge({
    props: {
      name: (
        /*iconName*/
        i[9]
      ),
      size: (
        /*centerIcon*/
        i[5]
      ),
      bg: "var(--seal-solid)",
      fg: "#ffffff",
      bgOpacity: 1
    }
  }), {
    c() {
      e = B("span"), A(t.$$.fragment), o(e, "class", "icon svelte-1rs0hrt"), o(e, "aria-hidden", "true"), o(e, "style", n = `--seal-icon-size:${/*centerIcon*/
      i[5]}px;`);
    },
    m(r, a) {
      y(r, e, a), N(t, e, null), l = !0;
    },
    p(r, a) {
      const f = {};
      a & /*iconName*/
      512 && (f.name = /*iconName*/
      r[9]), a & /*centerIcon*/
      32 && (f.size = /*centerIcon*/
      r[5]), t.$set(f), (!l || a & /*centerIcon*/
      32 && n !== (n = `--seal-icon-size:${/*centerIcon*/
      r[5]}px;`)) && o(e, "style", n);
    },
    i(r) {
      l || (S(t.$$.fragment, r), l = !0);
    },
    o(r) {
      $(t.$$.fragment, r), l = !1;
    },
    d(r) {
      r && m(e), q(t);
    }
  };
}
function fn(i) {
  let e, t, n, l = [], r = /* @__PURE__ */ new Map(), a, f, s, c, u, d, h = qe(
    /*chars*/
    i[7]
  );
  const _ = (b) => (
    /*index*/
    b[19]
  );
  for (let b = 0; b < h.length; b += 1) {
    let x = tt(i, h, b), k = _(x);
    r.set(k, l[b] = nt(k, x));
  }
  let w = (
    /*iconName*/
    i[9] && lt(i)
  );
  return {
    c() {
      e = B("span"), t = B("span"), n = B("span");
      for (let b = 0; b < l.length; b += 1)
        l[b].c();
      a = Z(), f = B("span"), s = B("span"), w && w.c(), o(n, "class", "ring svelte-1rs0hrt"), o(n, "aria-hidden", "true"), o(s, "class", "center-pill svelte-1rs0hrt"), o(f, "class", "center svelte-1rs0hrt"), o(f, "aria-hidden", "true"), o(t, "class", c = "seal " + /*variant*/
      i[1] + " svelte-1rs0hrt"), o(t, "style", u = `--seal-solid:${/*badgeColor*/
      i[8]}; --seal-size:${/*size*/
      i[4]}px; --seal-font:${/*ringFontPx*/
      i[6]}px;`), o(e, "slot", "trigger");
    },
    m(b, x) {
      y(b, e, x), v(e, t), v(t, n);
      for (let k = 0; k < l.length; k += 1)
        l[k] && l[k].m(n, null);
      v(t, a), v(t, f), v(f, s), w && w.m(s, null), d = !0;
    },
    p(b, x) {
      x & /*chars*/
      128 && (h = qe(
        /*chars*/
        b[7]
      ), l = Ft(l, x, _, 1, b, h, r, n, At, nt, null, tt)), /*iconName*/
      b[9] ? w ? (w.p(b, x), x & /*iconName*/
      512 && S(w, 1)) : (w = lt(b), w.c(), S(w, 1), w.m(s, null)) : w && (O(), $(w, 1, 1, () => {
        w = null;
      }), W()), (!d || x & /*variant*/
      2 && c !== (c = "seal " + /*variant*/
      b[1] + " svelte-1rs0hrt")) && o(t, "class", c), (!d || x & /*badgeColor, size, ringFontPx*/
      336 && u !== (u = `--seal-solid:${/*badgeColor*/
      b[8]}; --seal-size:${/*size*/
      b[4]}px; --seal-font:${/*ringFontPx*/
      b[6]}px;`)) && o(t, "style", u);
    },
    i(b) {
      d || (S(w), d = !0);
    },
    o(b) {
      $(w), d = !1;
    },
    d(b) {
      b && m(e);
      for (let x = 0; x < l.length; x += 1)
        l[x].d();
      w && w.d();
    }
  };
}
function cn(i) {
  let e, t, n = (
    /*badge*/
    i[0] && it(i)
  );
  return {
    c() {
      n && n.c(), e = F();
    },
    m(l, r) {
      n && n.m(l, r), y(l, e, r), t = !0;
    },
    p(l, [r]) {
      /*badge*/
      l[0] ? n ? (n.p(l, r), r & /*badge*/
      1 && S(n, 1)) : (n = it(l), n.c(), S(n, 1), n.m(e.parentNode, e)) : n && (O(), $(n, 1, 1, () => {
        n = null;
      }), W());
    },
    i(l) {
      t || (S(n), t = !0);
    },
    o(l) {
      $(n), t = !1;
    },
    d(l) {
      l && m(e), n && n.d(l);
    }
  };
}
function un(i, e, t) {
  return Math.max(e, Math.min(t, i));
}
function dn(i, e, t) {
  let n, l, r, a, f, s, c, { badge: u } = e, { variant: d = "outlined" } = e, { tooltip: h = void 0 } = e, { interactive: _ = !1 } = e, { ringText: w = null } = e, { repeat: b = 2 } = e, { separator: x = " • " } = e, { size: k = 76 } = e, { sealFontScale: P = 0.12 } = e;
  function E(T) {
    ze.call(this, i, T);
  }
  return i.$$set = (T) => {
    "badge" in T && t(0, u = T.badge), "variant" in T && t(1, d = T.variant), "tooltip" in T && t(2, h = T.tooltip), "interactive" in T && t(3, _ = T.interactive), "ringText" in T && t(10, w = T.ringText), "repeat" in T && t(11, b = T.repeat), "separator" in T && t(12, x = T.separator), "size" in T && t(4, k = T.size), "sealFontScale" in T && t(13, P = T.sealFontScale);
  }, i.$$.update = () => {
    i.$$.dirty & /*badge*/
    1 && t(9, n = (u == null ? void 0 : u.icon) ?? null), i.$$.dirty & /*badge*/
    1 && t(8, l = String((u == null ? void 0 : u.color) ?? "").trim() || "rgb(17, 24, 39)"), i.$$.dirty & /*ringText, badge*/
    1025 && t(14, r = (w ?? (u == null ? void 0 : u.label) ?? "").trim() || "—"), i.$$.dirty & /*repeat*/
    2048 && t(15, a = un(Math.floor(b || 1), 1, 10)), i.$$.dirty & /*repeatSafe, displayText, separator*/
    53248 && t(7, f = [...Array(a)].map(() => [...r.toUpperCase()].concat([...x.toUpperCase()])).flat()), i.$$.dirty & /*size, sealFontScale*/
    8208 && t(6, s = Math.round(k * P)), i.$$.dirty & /*size*/
    16 && t(5, c = Math.round(k * 0.3));
  }, [
    u,
    d,
    h,
    _,
    k,
    c,
    s,
    f,
    l,
    n,
    w,
    b,
    x,
    P,
    r,
    a,
    E
  ];
}
class pt extends J {
  constructor(e) {
    super(), Y(
      this,
      e,
      dn,
      cn,
      U,
      {
        badge: 0,
        variant: 1,
        tooltip: 2,
        interactive: 3,
        ringText: 10,
        repeat: 11,
        separator: 12,
        size: 4,
        sealFontScale: 13
      },
      sn
    );
  }
  get badge() {
    return this.$$.ctx[0];
  }
  set badge(e) {
    this.$$set({ badge: e }), p();
  }
  get variant() {
    return this.$$.ctx[1];
  }
  set variant(e) {
    this.$$set({ variant: e }), p();
  }
  get tooltip() {
    return this.$$.ctx[2];
  }
  set tooltip(e) {
    this.$$set({ tooltip: e }), p();
  }
  get interactive() {
    return this.$$.ctx[3];
  }
  set interactive(e) {
    this.$$set({ interactive: e }), p();
  }
  get ringText() {
    return this.$$.ctx[10];
  }
  set ringText(e) {
    this.$$set({ ringText: e }), p();
  }
  get repeat() {
    return this.$$.ctx[11];
  }
  set repeat(e) {
    this.$$set({ repeat: e }), p();
  }
  get separator() {
    return this.$$.ctx[12];
  }
  set separator(e) {
    this.$$set({ separator: e }), p();
  }
  get size() {
    return this.$$.ctx[4];
  }
  set size(e) {
    this.$$set({ size: e }), p();
  }
  get sealFontScale() {
    return this.$$.ctx[13];
  }
  set sealFontScale(e) {
    this.$$set({ sealFontScale: e }), p();
  }
}
X(pt, { badge: {}, variant: {}, tooltip: {}, interactive: { type: "Boolean" }, ringText: {}, repeat: {}, separator: {}, size: {}, sealFontScale: {} }, [], [], !0);
const hn = {
  mono: {
    enabled: !0,
    placement: "top",
    openDelayMs: 80,
    contentMode: "description",
    maxWidthPx: 280
  },
  mini: {
    enabled: !0,
    placement: "top",
    openDelayMs: 420,
    contentMode: "description",
    maxWidthPx: 280
  },
  round: {
    enabled: !0,
    placement: "top",
    openDelayMs: 120,
    contentMode: "description",
    maxWidthPx: 300
  },
  roundcirculartext: {
    enabled: !0,
    placement: "top",
    openDelayMs: 120,
    contentMode: "description",
    maxWidthPx: 300
  }
};
function gn(i, e) {
  const t = hn[i], n = {
    ...t,
    ...e ?? {}
  };
  return n.contentMode === "auto" && (n.contentMode = t.contentMode), Number.isFinite(n.openDelayMs) || (n.openDelayMs = t.openDelayMs), (!Number.isFinite(n.maxWidthPx) || n.maxWidthPx < 120) && (n.maxWidthPx = t.maxWidthPx), n;
}
function pn(i) {
  let e, t;
  return e = new pt({
    props: {
      badge: (
        /*badge*/
        i[0]
      ),
      variant: (
        /*roundCircularTextVariant*/
        i[13]
      ),
      tooltip: (
        /*tooltipOptions*/
        i[12]
      ),
      interactive: (
        /*interactive*/
        i[2]
      ),
      ringText: (
        /*ringText*/
        i[8]
      ),
      repeat: (
        /*repeat*/
        i[9]
      ),
      separator: (
        /*separator*/
        i[10]
      ),
      size: (
        /*size*/
        i[3] ?? 76
      ),
      sealFontScale: (
        /*sealFontScale*/
        i[11]
      )
    }
  }), e.$on(
    "activate",
    /*onActivate*/
    i[17]
  ), {
    c() {
      A(e.$$.fragment);
    },
    m(n, l) {
      N(e, n, l), t = !0;
    },
    p(n, l) {
      const r = {};
      l & /*badge*/
      1 && (r.badge = /*badge*/
      n[0]), l & /*roundCircularTextVariant*/
      8192 && (r.variant = /*roundCircularTextVariant*/
      n[13]), l & /*tooltipOptions*/
      4096 && (r.tooltip = /*tooltipOptions*/
      n[12]), l & /*interactive*/
      4 && (r.interactive = /*interactive*/
      n[2]), l & /*ringText*/
      256 && (r.ringText = /*ringText*/
      n[8]), l & /*repeat*/
      512 && (r.repeat = /*repeat*/
      n[9]), l & /*separator*/
      1024 && (r.separator = /*separator*/
      n[10]), l & /*size*/
      8 && (r.size = /*size*/
      n[3] ?? 76), l & /*sealFontScale*/
      2048 && (r.sealFontScale = /*sealFontScale*/
      n[11]), e.$set(r);
    },
    i(n) {
      t || (S(e.$$.fragment, n), t = !0);
    },
    o(n) {
      $(e.$$.fragment, n), t = !1;
    },
    d(n) {
      q(e, n);
    }
  };
}
function bn(i) {
  let e, t;
  return e = new gt({
    props: {
      badge: (
        /*badge*/
        i[0]
      ),
      variant: (
        /*roundVariant*/
        i[14]
      ),
      size: (
        /*size*/
        i[3] ?? 44
      ),
      tooltip: (
        /*tooltipOptions*/
        i[12]
      ),
      interactive: (
        /*interactive*/
        i[2]
      )
    }
  }), e.$on(
    "activate",
    /*onActivate*/
    i[17]
  ), {
    c() {
      A(e.$$.fragment);
    },
    m(n, l) {
      N(e, n, l), t = !0;
    },
    p(n, l) {
      const r = {};
      l & /*badge*/
      1 && (r.badge = /*badge*/
      n[0]), l & /*roundVariant*/
      16384 && (r.variant = /*roundVariant*/
      n[14]), l & /*size*/
      8 && (r.size = /*size*/
      n[3] ?? 44), l & /*tooltipOptions*/
      4096 && (r.tooltip = /*tooltipOptions*/
      n[12]), l & /*interactive*/
      4 && (r.interactive = /*interactive*/
      n[2]), e.$set(r);
    },
    i(n) {
      t || (S(e.$$.fragment, n), t = !0);
    },
    o(n) {
      $(e.$$.fragment, n), t = !1;
    },
    d(n) {
      q(e, n);
    }
  };
}
function _n(i) {
  let e, t;
  return e = new ht({
    props: {
      badge: (
        /*badge*/
        i[0]
      ),
      variant: (
        /*miniVariant*/
        i[15]
      ),
      interactive: (
        /*interactive*/
        i[2]
      ),
      fixed: (
        /*fixed*/
        i[4]
      ),
      offsetPx: (
        /*offsetPx*/
        i[5]
      ),
      expandDirection: (
        /*expandDirection*/
        i[6]
      ),
      iconBgShape: (
        /*iconBgShape*/
        i[7] ?? "round"
      ),
      tooltip: (
        /*tooltipOptions*/
        i[12]
      )
    }
  }), e.$on(
    "activate",
    /*onActivate*/
    i[17]
  ), {
    c() {
      A(e.$$.fragment);
    },
    m(n, l) {
      N(e, n, l), t = !0;
    },
    p(n, l) {
      const r = {};
      l & /*badge*/
      1 && (r.badge = /*badge*/
      n[0]), l & /*miniVariant*/
      32768 && (r.variant = /*miniVariant*/
      n[15]), l & /*interactive*/
      4 && (r.interactive = /*interactive*/
      n[2]), l & /*fixed*/
      16 && (r.fixed = /*fixed*/
      n[4]), l & /*offsetPx*/
      32 && (r.offsetPx = /*offsetPx*/
      n[5]), l & /*expandDirection*/
      64 && (r.expandDirection = /*expandDirection*/
      n[6]), l & /*iconBgShape*/
      128 && (r.iconBgShape = /*iconBgShape*/
      n[7] ?? "round"), l & /*tooltipOptions*/
      4096 && (r.tooltip = /*tooltipOptions*/
      n[12]), e.$set(r);
    },
    i(n) {
      t || (S(e.$$.fragment, n), t = !0);
    },
    o(n) {
      $(e.$$.fragment, n), t = !1;
    },
    d(n) {
      q(e, n);
    }
  };
}
function mn(i) {
  let e, t;
  return e = new dt({
    props: {
      badge: (
        /*badge*/
        i[0]
      ),
      variant: (
        /*monoVariant*/
        i[16]
      ),
      tooltip: (
        /*tooltipOptions*/
        i[12]
      ),
      interactive: (
        /*interactive*/
        i[2]
      )
    }
  }), e.$on(
    "activate",
    /*onActivate*/
    i[17]
  ), {
    c() {
      A(e.$$.fragment);
    },
    m(n, l) {
      N(e, n, l), t = !0;
    },
    p(n, l) {
      const r = {};
      l & /*badge*/
      1 && (r.badge = /*badge*/
      n[0]), l & /*monoVariant*/
      65536 && (r.variant = /*monoVariant*/
      n[16]), l & /*tooltipOptions*/
      4096 && (r.tooltip = /*tooltipOptions*/
      n[12]), l & /*interactive*/
      4 && (r.interactive = /*interactive*/
      n[2]), e.$set(r);
    },
    i(n) {
      t || (S(e.$$.fragment, n), t = !0);
    },
    o(n) {
      $(e.$$.fragment, n), t = !1;
    },
    d(n) {
      q(e, n);
    }
  };
}
function vn(i) {
  let e, t, n, l;
  const r = [mn, _n, bn, pn], a = [];
  function f(s, c) {
    return (
      /*type*/
      s[1] === "mono" ? 0 : (
        /*type*/
        s[1] === "mini" ? 1 : (
          /*type*/
          s[1] === "round" ? 2 : 3
        )
      )
    );
  }
  return e = f(i), t = a[e] = r[e](i), {
    c() {
      t.c(), n = F();
    },
    m(s, c) {
      a[e].m(s, c), y(s, n, c), l = !0;
    },
    p(s, [c]) {
      let u = e;
      e = f(s), e === u ? a[e].p(s, c) : (O(), $(a[u], 1, 1, () => {
        a[u] = null;
      }), W(), t = a[e], t ? t.p(s, c) : (t = a[e] = r[e](s), t.c()), S(t, 1), t.m(n.parentNode, n));
    },
    i(s) {
      l || (S(t), l = !0);
    },
    o(s) {
      $(t), l = !1;
    },
    d(s) {
      s && m(n), a[e].d(s);
    }
  };
}
function yn(i) {
  return i === "ring" || i === "double-ring" ? i : "solid";
}
function kn(i, e, t) {
  let n, l, r, a, f;
  const s = De();
  let { badge: c } = e, { type: u = "mono" } = e, { interactive: d = !1 } = e, { variant: h = void 0 } = e, { size: _ = void 0 } = e, { fixed: w = !1 } = e, { offsetPx: b = 16 } = e, { expandDirection: x = "right" } = e, { iconBgShape: k = void 0 } = e, { ringText: P = null } = e, { repeat: E = 2 } = e, { separator: T = " • " } = e, { sealFontScale: V = 0.12 } = e, { tooltip: I = void 0 } = e;
  function C(g) {
    s("activate", g.detail);
  }
  return i.$$set = (g) => {
    "badge" in g && t(0, c = g.badge), "type" in g && t(1, u = g.type), "interactive" in g && t(2, d = g.interactive), "variant" in g && t(18, h = g.variant), "size" in g && t(3, _ = g.size), "fixed" in g && t(4, w = g.fixed), "offsetPx" in g && t(5, b = g.offsetPx), "expandDirection" in g && t(6, x = g.expandDirection), "iconBgShape" in g && t(7, k = g.iconBgShape), "ringText" in g && t(8, P = g.ringText), "repeat" in g && t(9, E = g.repeat), "separator" in g && t(10, T = g.separator), "sealFontScale" in g && t(11, V = g.sealFontScale), "tooltip" in g && t(19, I = g.tooltip);
  }, i.$$.update = () => {
    i.$$.dirty & /*variant*/
    262144 && t(16, n = h ?? "filled"), i.$$.dirty & /*variant*/
    262144 && t(15, l = h ?? "outlined"), i.$$.dirty & /*variant*/
    262144 && t(14, r = yn(h)), i.$$.dirty & /*variant*/
    262144 && t(13, a = h ?? "outlined"), i.$$.dirty & /*type, tooltip*/
    524290 && t(12, f = gn(u, I));
  }, [
    c,
    u,
    d,
    _,
    w,
    b,
    x,
    k,
    P,
    E,
    T,
    V,
    f,
    a,
    r,
    l,
    n,
    C,
    h,
    I
  ];
}
class bt extends J {
  constructor(e) {
    super(), Y(this, e, kn, vn, U, {
      badge: 0,
      type: 1,
      interactive: 2,
      variant: 18,
      size: 3,
      fixed: 4,
      offsetPx: 5,
      expandDirection: 6,
      iconBgShape: 7,
      ringText: 8,
      repeat: 9,
      separator: 10,
      sealFontScale: 11,
      tooltip: 19
    });
  }
  get badge() {
    return this.$$.ctx[0];
  }
  set badge(e) {
    this.$$set({ badge: e }), p();
  }
  get type() {
    return this.$$.ctx[1];
  }
  set type(e) {
    this.$$set({ type: e }), p();
  }
  get interactive() {
    return this.$$.ctx[2];
  }
  set interactive(e) {
    this.$$set({ interactive: e }), p();
  }
  get variant() {
    return this.$$.ctx[18];
  }
  set variant(e) {
    this.$$set({ variant: e }), p();
  }
  get size() {
    return this.$$.ctx[3];
  }
  set size(e) {
    this.$$set({ size: e }), p();
  }
  get fixed() {
    return this.$$.ctx[4];
  }
  set fixed(e) {
    this.$$set({ fixed: e }), p();
  }
  get offsetPx() {
    return this.$$.ctx[5];
  }
  set offsetPx(e) {
    this.$$set({ offsetPx: e }), p();
  }
  get expandDirection() {
    return this.$$.ctx[6];
  }
  set expandDirection(e) {
    this.$$set({ expandDirection: e }), p();
  }
  get iconBgShape() {
    return this.$$.ctx[7];
  }
  set iconBgShape(e) {
    this.$$set({ iconBgShape: e }), p();
  }
  get ringText() {
    return this.$$.ctx[8];
  }
  set ringText(e) {
    this.$$set({ ringText: e }), p();
  }
  get repeat() {
    return this.$$.ctx[9];
  }
  set repeat(e) {
    this.$$set({ repeat: e }), p();
  }
  get separator() {
    return this.$$.ctx[10];
  }
  set separator(e) {
    this.$$set({ separator: e }), p();
  }
  get sealFontScale() {
    return this.$$.ctx[11];
  }
  set sealFontScale(e) {
    this.$$set({ sealFontScale: e }), p();
  }
  get tooltip() {
    return this.$$.ctx[19];
  }
  set tooltip(e) {
    this.$$set({ tooltip: e }), p();
  }
}
X(bt, { badge: {}, type: {}, interactive: { type: "Boolean" }, variant: {}, size: {}, fixed: { type: "Boolean" }, offsetPx: {}, expandDirection: {}, iconBgShape: {}, ringText: {}, repeat: {}, separator: {}, sealFontScale: {}, tooltip: {} }, [], [], !0);
const rt = {
  neutral: "rgb(17, 24, 39)",
  info: "rgb(2, 136, 209)",
  success: "rgb(46, 125, 50)",
  warning: "rgb(237, 108, 2)",
  danger: "rgb(198, 40, 40)"
};
function te(i) {
  const e = String(i ?? "").trim();
  return e.length ? e : void 0;
}
function _e(i) {
  const e = String(i ?? "").replace(/\r\n?/g, `
`).replace(/\\n/g, `
`).trim();
  return e.length ? e : void 0;
}
function wn(i) {
  const e = String(i ?? "").trim();
  return e === "mini" || e === "round" || e === "roundcirculartext" ? e : "mono";
}
function Mn(i) {
  return /\bdownload\b/i.test(i) || /\bopen[-\s]*data\b/i.test(i) ? "Click to download" : "Click to interact";
}
function Sn(i) {
  return /\bdownload\b/i.test(i) || /\bopen[-\s]*data\b/i.test(i) ? "Download" : "Interactive";
}
function zn(i) {
  const e = {};
  return i.tooltipMode && (i.tooltipMode === "off" ? e.enabled = !1 : i.tooltipMode === "description" ? (e.contentMode = "description", e.enabled = e.enabled ?? !0) : i.tooltipMode === "full" ? (e.contentMode = "labelAndDescription", e.enabled = e.enabled ?? !0) : e.contentMode = "auto"), i.tooltipPlacement && (e.placement = i.tooltipPlacement), Number.isFinite(i.tooltipDelayMs) && (e.openDelayMs = Number(i.tooltipDelayMs)), Number.isFinite(i.tooltipMaxWidthPx) && (e.maxWidthPx = Number(i.tooltipMaxWidthPx)), Object.keys(e).length ? e : void 0;
}
function xn(i) {
  const e = i.badge ?? {}, t = wn(i.type), n = te(i.color) ?? te(e.color) ?? (i.tone ? rt[i.tone] : void 0) ?? rt.neutral, l = te(i.label) ?? te(e.label) ?? "—", r = _e(i.description) ?? _e(e.description), a = _e(i.hint), f = _e(i.actionText) ?? _e(e.actionText) ?? a, s = i.actionIcon ?? e.actionIcon ?? null, c = i.icon ?? e.icon ?? null, u = !!i.interactive, d = {
    ...e,
    label: l,
    color: n,
    icon: c ?? void 0,
    description: r,
    actionText: f ?? (u ? Mn(l) : void 0),
    actionIcon: s ?? (u ? Sn(l) : void 0)
  }, h = te(e.category) ?? te(e.type);
  return h && (d.category = h, d.type = e.type), {
    badge: d,
    type: t,
    variant: i.variant ?? void 0,
    size: Number.isFinite(i.size) ? Number(i.size) : void 0,
    fixed: !!(i.fixed ?? !1),
    offsetPx: Number.isFinite(i.offsetPx) ? Number(i.offsetPx) : 16,
    expandDirection: i.expandDirection || "right",
    iconBgShape: i.iconBgShape ?? void 0,
    ringText: i.ringText ?? null,
    repeat: Number.isFinite(i.repeat) ? Number(i.repeat) : 2,
    separator: te(i.separator) ?? " • ",
    sealFontScale: Number.isFinite(i.sealFontScale) ? Number(i.sealFontScale) : 0.12,
    tooltip: zn(i)
  };
}
function $n(i) {
  let e, t;
  return e = new bt({
    props: {
      badge: (
        /*normalized*/
        i[1].badge
      ),
      interactive: (
        /*interactive*/
        i[0]
      ),
      type: (
        /*normalized*/
        i[1].type
      ),
      variant: (
        /*normalized*/
        i[1].variant
      ),
      size: (
        /*normalized*/
        i[1].size
      ),
      fixed: (
        /*normalized*/
        i[1].fixed
      ),
      offsetPx: (
        /*normalized*/
        i[1].offsetPx
      ),
      expandDirection: (
        /*normalized*/
        i[1].expandDirection
      ),
      iconBgShape: (
        /*normalized*/
        i[1].iconBgShape
      ),
      ringText: (
        /*normalized*/
        i[1].ringText
      ),
      repeat: (
        /*normalized*/
        i[1].repeat
      ),
      separator: (
        /*normalized*/
        i[1].separator
      ),
      sealFontScale: (
        /*normalized*/
        i[1].sealFontScale
      ),
      tooltip: (
        /*normalized*/
        i[1].tooltip
      )
    }
  }), e.$on(
    "activate",
    /*onActivate*/
    i[2]
  ), {
    c() {
      A(e.$$.fragment);
    },
    m(n, l) {
      N(e, n, l), t = !0;
    },
    p(n, [l]) {
      const r = {};
      l & /*normalized*/
      2 && (r.badge = /*normalized*/
      n[1].badge), l & /*interactive*/
      1 && (r.interactive = /*interactive*/
      n[0]), l & /*normalized*/
      2 && (r.type = /*normalized*/
      n[1].type), l & /*normalized*/
      2 && (r.variant = /*normalized*/
      n[1].variant), l & /*normalized*/
      2 && (r.size = /*normalized*/
      n[1].size), l & /*normalized*/
      2 && (r.fixed = /*normalized*/
      n[1].fixed), l & /*normalized*/
      2 && (r.offsetPx = /*normalized*/
      n[1].offsetPx), l & /*normalized*/
      2 && (r.expandDirection = /*normalized*/
      n[1].expandDirection), l & /*normalized*/
      2 && (r.iconBgShape = /*normalized*/
      n[1].iconBgShape), l & /*normalized*/
      2 && (r.ringText = /*normalized*/
      n[1].ringText), l & /*normalized*/
      2 && (r.repeat = /*normalized*/
      n[1].repeat), l & /*normalized*/
      2 && (r.separator = /*normalized*/
      n[1].separator), l & /*normalized*/
      2 && (r.sealFontScale = /*normalized*/
      n[1].sealFontScale), l & /*normalized*/
      2 && (r.tooltip = /*normalized*/
      n[1].tooltip), e.$set(r);
    },
    i(n) {
      t || (S(e.$$.fragment, n), t = !0);
    },
    o(n) {
      $(e.$$.fragment, n), t = !1;
    },
    d(n) {
      q(e, n);
    }
  };
}
function Pn(i, e, t) {
  let n;
  const l = De();
  let { badge: r = null } = e, { label: a = null } = e, { tone: f = null } = e, { color: s = null } = e, { icon: c = null } = e, { description: u = null } = e, { hint: d = null } = e, { interactive: h = !1 } = e, { actionText: _ = null } = e, { actionIcon: w = null } = e, { type: b = null } = e, { variant: x = null } = e, { size: k = null } = e, { fixed: P = null } = e, { offsetPx: E = null } = e, { expandDirection: T = null } = e, { iconBgShape: V = null } = e, { ringText: I = null } = e, { repeat: C = null } = e, { separator: g = null } = e, { sealFontScale: D = null } = e, { tooltipMode: H = null } = e, { tooltipPlacement: pe = null } = e, { tooltipDelayMs: j = null } = e, { tooltipMaxWidthPx: L = null } = e;
  function xe(z) {
    l("badge-activate", z.detail);
  }
  return i.$$set = (z) => {
    "badge" in z && t(3, r = z.badge), "label" in z && t(4, a = z.label), "tone" in z && t(5, f = z.tone), "color" in z && t(6, s = z.color), "icon" in z && t(7, c = z.icon), "description" in z && t(8, u = z.description), "hint" in z && t(9, d = z.hint), "interactive" in z && t(0, h = z.interactive), "actionText" in z && t(10, _ = z.actionText), "actionIcon" in z && t(11, w = z.actionIcon), "type" in z && t(12, b = z.type), "variant" in z && t(13, x = z.variant), "size" in z && t(14, k = z.size), "fixed" in z && t(15, P = z.fixed), "offsetPx" in z && t(16, E = z.offsetPx), "expandDirection" in z && t(17, T = z.expandDirection), "iconBgShape" in z && t(18, V = z.iconBgShape), "ringText" in z && t(19, I = z.ringText), "repeat" in z && t(20, C = z.repeat), "separator" in z && t(21, g = z.separator), "sealFontScale" in z && t(22, D = z.sealFontScale), "tooltipMode" in z && t(23, H = z.tooltipMode), "tooltipPlacement" in z && t(24, pe = z.tooltipPlacement), "tooltipDelayMs" in z && t(25, j = z.tooltipDelayMs), "tooltipMaxWidthPx" in z && t(26, L = z.tooltipMaxWidthPx);
  }, i.$$.update = () => {
    i.$$.dirty & /*badge, label, tone, color, icon, description, hint, interactive, actionText, actionIcon, type, variant, size, fixed, offsetPx, expandDirection, iconBgShape, ringText, repeat, separator, sealFontScale, tooltipMode, tooltipPlacement, tooltipDelayMs, tooltipMaxWidthPx*/
    134217721 && t(1, n = xn({
      badge: r,
      label: a,
      tone: f,
      color: s,
      icon: c,
      description: u,
      hint: d,
      interactive: h,
      actionText: _,
      actionIcon: w,
      type: b,
      variant: x,
      size: k,
      fixed: P,
      offsetPx: E,
      expandDirection: T,
      iconBgShape: V,
      ringText: I,
      repeat: C,
      separator: g,
      sealFontScale: D,
      tooltipMode: H,
      tooltipPlacement: pe,
      tooltipDelayMs: j,
      tooltipMaxWidthPx: L
    }));
  }, [
    h,
    n,
    xe,
    r,
    a,
    f,
    s,
    c,
    u,
    d,
    _,
    w,
    b,
    x,
    k,
    P,
    E,
    T,
    V,
    I,
    C,
    g,
    D,
    H,
    pe,
    j,
    L
  ];
}
class _t extends J {
  constructor(e) {
    super(), Y(this, e, Pn, $n, U, {
      badge: 3,
      label: 4,
      tone: 5,
      color: 6,
      icon: 7,
      description: 8,
      hint: 9,
      interactive: 0,
      actionText: 10,
      actionIcon: 11,
      type: 12,
      variant: 13,
      size: 14,
      fixed: 15,
      offsetPx: 16,
      expandDirection: 17,
      iconBgShape: 18,
      ringText: 19,
      repeat: 20,
      separator: 21,
      sealFontScale: 22,
      tooltipMode: 23,
      tooltipPlacement: 24,
      tooltipDelayMs: 25,
      tooltipMaxWidthPx: 26
    });
  }
  get badge() {
    return this.$$.ctx[3];
  }
  set badge(e) {
    this.$$set({ badge: e }), p();
  }
  get label() {
    return this.$$.ctx[4];
  }
  set label(e) {
    this.$$set({ label: e }), p();
  }
  get tone() {
    return this.$$.ctx[5];
  }
  set tone(e) {
    this.$$set({ tone: e }), p();
  }
  get color() {
    return this.$$.ctx[6];
  }
  set color(e) {
    this.$$set({ color: e }), p();
  }
  get icon() {
    return this.$$.ctx[7];
  }
  set icon(e) {
    this.$$set({ icon: e }), p();
  }
  get description() {
    return this.$$.ctx[8];
  }
  set description(e) {
    this.$$set({ description: e }), p();
  }
  get hint() {
    return this.$$.ctx[9];
  }
  set hint(e) {
    this.$$set({ hint: e }), p();
  }
  get interactive() {
    return this.$$.ctx[0];
  }
  set interactive(e) {
    this.$$set({ interactive: e }), p();
  }
  get actionText() {
    return this.$$.ctx[10];
  }
  set actionText(e) {
    this.$$set({ actionText: e }), p();
  }
  get actionIcon() {
    return this.$$.ctx[11];
  }
  set actionIcon(e) {
    this.$$set({ actionIcon: e }), p();
  }
  get type() {
    return this.$$.ctx[12];
  }
  set type(e) {
    this.$$set({ type: e }), p();
  }
  get variant() {
    return this.$$.ctx[13];
  }
  set variant(e) {
    this.$$set({ variant: e }), p();
  }
  get size() {
    return this.$$.ctx[14];
  }
  set size(e) {
    this.$$set({ size: e }), p();
  }
  get fixed() {
    return this.$$.ctx[15];
  }
  set fixed(e) {
    this.$$set({ fixed: e }), p();
  }
  get offsetPx() {
    return this.$$.ctx[16];
  }
  set offsetPx(e) {
    this.$$set({ offsetPx: e }), p();
  }
  get expandDirection() {
    return this.$$.ctx[17];
  }
  set expandDirection(e) {
    this.$$set({ expandDirection: e }), p();
  }
  get iconBgShape() {
    return this.$$.ctx[18];
  }
  set iconBgShape(e) {
    this.$$set({ iconBgShape: e }), p();
  }
  get ringText() {
    return this.$$.ctx[19];
  }
  set ringText(e) {
    this.$$set({ ringText: e }), p();
  }
  get repeat() {
    return this.$$.ctx[20];
  }
  set repeat(e) {
    this.$$set({ repeat: e }), p();
  }
  get separator() {
    return this.$$.ctx[21];
  }
  set separator(e) {
    this.$$set({ separator: e }), p();
  }
  get sealFontScale() {
    return this.$$.ctx[22];
  }
  set sealFontScale(e) {
    this.$$set({ sealFontScale: e }), p();
  }
  get tooltipMode() {
    return this.$$.ctx[23];
  }
  set tooltipMode(e) {
    this.$$set({ tooltipMode: e }), p();
  }
  get tooltipPlacement() {
    return this.$$.ctx[24];
  }
  set tooltipPlacement(e) {
    this.$$set({ tooltipPlacement: e }), p();
  }
  get tooltipDelayMs() {
    return this.$$.ctx[25];
  }
  set tooltipDelayMs(e) {
    this.$$set({ tooltipDelayMs: e }), p();
  }
  get tooltipMaxWidthPx() {
    return this.$$.ctx[26];
  }
  set tooltipMaxWidthPx(e) {
    this.$$set({ tooltipMaxWidthPx: e }), p();
  }
}
customElements.define("vis-badge", X(_t, { badge: { type: "Object" }, label: {}, tone: {}, color: {}, icon: {}, description: {}, hint: {}, interactive: { type: "Boolean" }, actionText: {}, actionIcon: {}, type: {}, variant: {}, size: { type: "Number" }, fixed: { type: "Boolean" }, offsetPx: { type: "Number" }, expandDirection: {}, iconBgShape: { type: "String", attribute: "icon-bg-shape" }, ringText: {}, repeat: { type: "Number" }, separator: {}, sealFontScale: { type: "Number" }, tooltipMode: {}, tooltipPlacement: {}, tooltipDelayMs: { type: "Number", attribute: "tooltip-delay-ms" }, tooltipMaxWidthPx: { type: "Number", attribute: "tooltip-max-width-px" } }, [], [], !0));
if (!customElements.get("vis-badge")) {
  const i = _t.element;
  customElements.define("vis-badge", i);
}
