var yt = Object.defineProperty;
var kt = (i, e, t) => e in i ? yt(i, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : i[e] = t;
var V = (i, e, t) => kt(i, typeof e != "symbol" ? e + "" : e, t);
function ae() {
}
function wt(i, e) {
  for (const t in e) i[t] = e[t];
  return (
    /** @type {T & S} */
    i
  );
}
function st(i) {
  return i();
}
function Ne() {
  return /* @__PURE__ */ Object.create(null);
}
function ne(i) {
  i.forEach(st);
}
function De(i) {
  return typeof i == "function";
}
function U(i, e) {
  return i != i ? e == e : i !== e || i && typeof i == "object" || typeof i == "function";
}
function St(i) {
  return Object.keys(i).length === 0;
}
function ce(i, e, t, n) {
  if (i) {
    const l = at(i, e, t, n);
    return i[0](l);
  }
}
function at(i, e, t, n) {
  return i[1] && n ? wt(t.ctx.slice(), i[1](n(e))) : t.ctx;
}
function fe(i, e, t, n) {
  if (i[2] && n) {
    const l = i[2](n(t));
    if (e.dirty === void 0)
      return l;
    if (typeof l == "object") {
      const r = [], s = Math.max(e.dirty.length, l.length);
      for (let c = 0; c < s; c += 1)
        r[c] = e.dirty[c] | l[c];
      return r;
    }
    return e.dirty | l;
  }
  return e.dirty;
}
function ue(i, e, t, n, l, r) {
  if (l) {
    const s = at(e, t, n, r);
    i.p(s, l);
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
function Mt(i) {
  return i && De(i.destroy) ? i.destroy : ae;
}
const zt = typeof window < "u" ? window : typeof globalThis < "u" ? globalThis : (
  // @ts-ignore Node typings have this
  global
);
function m(i, e) {
  i.appendChild(e);
}
function ge(i, e, t) {
  const n = xt(i);
  if (!n.getElementById(e)) {
    const l = T("style");
    l.id = e, l.textContent = t, Pt(n, l);
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
function Pt(i, e) {
  return m(
    /** @type {Document} */
    i.head || i,
    e
  ), e.sheet;
}
function v(i, e, t) {
  i.insertBefore(e, t || null);
}
function _(i) {
  i.parentNode && i.parentNode.removeChild(i);
}
function T(i) {
  return document.createElement(i);
}
function w(i) {
  return document.createElementNS("http://www.w3.org/2000/svg", i);
}
function G(i) {
  return document.createTextNode(i);
}
function q() {
  return G(" ");
}
function E() {
  return G("");
}
function K(i, e, t, n) {
  return i.addEventListener(e, t, n), () => i.removeEventListener(e, t, n);
}
function o(i, e, t) {
  t == null ? i.removeAttribute(e) : i.getAttribute(e) !== t && i.setAttribute(e, t);
}
function Bt(i) {
  return Array.from(i.childNodes);
}
function le(i, e) {
  e = "" + e, i.data !== e && (i.data = /** @type {string} */
  e);
}
function _e(i, e, t, n) {
  t == null ? i.style.removeProperty(e) : i.style.setProperty(e, t, "");
}
function $t(i, e, { bubbles: t = !1, cancelable: n = !1 } = {}) {
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
let ye;
function ve(i) {
  ye = i;
}
function Dt() {
  if (!ye) throw new Error("Function called outside component initialization");
  return ye;
}
function Ce() {
  const i = Dt();
  return (e, t, { cancelable: n = !1 } = {}) => {
    const l = i.$$.callbacks[e];
    if (l) {
      const r = $t(
        /** @type {string} */
        e,
        t,
        { cancelable: n }
      );
      return l.slice().forEach((s) => {
        s.call(i, r);
      }), !r.defaultPrevented;
    }
    return !0;
  };
}
function xe(i, e) {
  const t = i.$$.callbacks[e.type];
  t && t.slice().forEach((n) => n.call(this, e));
}
const oe = [], ze = [];
let se = [];
const Ae = [], ct = /* @__PURE__ */ Promise.resolve();
let $e = !1;
function ft() {
  $e || ($e = !0, ct.then(h));
}
function Ct() {
  return ft(), ct;
}
function Te(i) {
  se.push(i);
}
const Be = /* @__PURE__ */ new Set();
let re = 0;
function h() {
  if (re !== 0)
    return;
  const i = ye;
  do {
    try {
      for (; re < oe.length; ) {
        const e = oe[re];
        re++, ve(e), Nt(e.$$);
      }
    } catch (e) {
      throw oe.length = 0, re = 0, e;
    }
    for (ve(null), oe.length = 0, re = 0; ze.length; ) ze.pop()();
    for (let e = 0; e < se.length; e += 1) {
      const t = se[e];
      Be.has(t) || (Be.add(t), t());
    }
    se.length = 0;
  } while (oe.length);
  for (; Ae.length; )
    Ae.pop()();
  $e = !1, Be.clear(), ve(i);
}
function Nt(i) {
  if (i.fragment !== null) {
    i.update(), ne(i.before_update);
    const e = i.dirty;
    i.dirty = [-1], i.fragment && i.fragment.p(i.ctx, e), i.after_update.forEach(Te);
  }
}
function At(i) {
  const e = [], t = [];
  se.forEach((n) => i.indexOf(n) === -1 ? e.push(n) : t.push(n)), t.forEach((n) => n()), se = e;
}
const Se = /* @__PURE__ */ new Set();
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
function M(i, e) {
  i && i.i && (Se.delete(i), i.i(e));
}
function B(i, e, t, n) {
  if (i && i.o) {
    if (Se.has(i)) return;
    Se.add(i), ie.c.push(() => {
      Se.delete(i), n && (t && i.d(1), n());
    }), i.o(e);
  } else n && n();
}
function Fe(i) {
  return (i == null ? void 0 : i.length) !== void 0 ? i : Array.from(i);
}
function Ft(i, e) {
  i.d(1), e.delete(i.key);
}
function Et(i, e, t, n, l, r, s, c, a, f, u, d) {
  let g = i.length, p = r.length, y = g;
  const z = {};
  for (; y--; ) z[i[y].key] = y;
  const b = [], k = /* @__PURE__ */ new Map(), $ = /* @__PURE__ */ new Map(), I = [];
  for (y = p; y--; ) {
    const C = d(l, r, y), x = t(C);
    let S = s.get(x);
    S ? I.push(() => S.p(C, e)) : (S = f(x, C), S.c()), k.set(x, b[y] = S), x in z && $.set(x, Math.abs(y - z[x]));
  }
  const D = /* @__PURE__ */ new Set(), H = /* @__PURE__ */ new Set();
  function j(C) {
    M(C, 1), C.m(c, u), s.set(C.key, C), u = C.first, p--;
  }
  for (; g && p; ) {
    const C = b[p - 1], x = i[g - 1], S = C.key, Z = x.key;
    C === x ? (u = C.first, g--, p--) : k.has(Z) ? !s.has(S) || D.has(S) ? j(C) : H.has(Z) ? g-- : $.get(S) > $.get(Z) ? (H.add(S), j(C)) : (D.add(Z), g--) : (a(x, s), g--);
  }
  for (; g--; ) {
    const C = i[g];
    k.has(C.key) || a(C, s);
  }
  for (; p; ) j(b[p - 1]);
  return ne(I), b;
}
function F(i) {
  i && i.c();
}
function N(i, e, t) {
  const { fragment: n, after_update: l } = i.$$;
  n && n.m(e, t), Te(() => {
    const r = i.$$.on_mount.map(st).filter(De);
    i.$$.on_destroy ? i.$$.on_destroy.push(...r) : ne(r), i.$$.on_mount = [];
  }), l.forEach(Te);
}
function A(i, e) {
  const t = i.$$;
  t.fragment !== null && (At(t.after_update), ne(t.on_destroy), t.fragment && t.fragment.d(e), t.on_destroy = t.fragment = null, t.ctx = []);
}
function It(i, e) {
  i.$$.dirty[0] === -1 && (oe.push(i), ft(), i.$$.dirty.fill(0)), i.$$.dirty[e / 31 | 0] |= 1 << e % 31;
}
function Y(i, e, t, n, l, r, s = null, c = [-1]) {
  const a = ye;
  ve(i);
  const f = i.$$ = {
    fragment: null,
    ctx: [],
    // state
    props: r,
    update: ae,
    not_equal: l,
    bound: Ne(),
    // lifecycle
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(e.context || (a ? a.$$.context : [])),
    // everything else
    callbacks: Ne(),
    dirty: c,
    skip_bound: !1,
    root: e.target || a.$$.root
  };
  s && s(f.root);
  let u = !1;
  if (f.ctx = t ? t(i, e.props || {}, (d, g, ...p) => {
    const y = p.length ? p[0] : g;
    return f.ctx && l(f.ctx[d], f.ctx[d] = y) && (!f.skip_bound && f.bound[d] && f.bound[d](y), u && It(i, d)), g;
  }) : [], f.update(), u = !0, ne(f.before_update), f.fragment = n ? n(f.ctx) : !1, e.target) {
    if (e.hydrate) {
      const d = Bt(e.target);
      f.fragment && f.fragment.l(d), d.forEach(_);
    } else
      f.fragment && f.fragment.c();
    e.intro && M(i.$$.fragment), N(i, e.target, e.anchor), h();
  }
  ve(a);
}
let ut;
typeof HTMLElement == "function" && (ut = class extends HTMLElement {
  constructor(e, t, n) {
    super();
    /** The Svelte component constructor */
    V(this, "$$ctor");
    /** Slots */
    V(this, "$$s");
    /** The Svelte component instance */
    V(this, "$$c");
    /** Whether or not the custom element is connected */
    V(this, "$$cn", !1);
    /** Component props data */
    V(this, "$$d", {});
    /** `true` if currently in the process of reflecting component props back to attributes */
    V(this, "$$r", !1);
    /** @type {Record<string, CustomElementPropDefinition>} Props definition (name, reflected, type etc) */
    V(this, "$$p_d", {});
    /** @type {Record<string, Function[]>} Event listeners */
    V(this, "$$l", {});
    /** @type {Map<Function, Function>} Event listener unsubscribe functions */
    V(this, "$$l_u", /* @__PURE__ */ new Map());
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
      let t = function(s) {
        return () => {
          let c;
          return {
            c: function() {
              c = T("slot"), s !== "default" && o(c, "name", s);
            },
            /**
             * @param {HTMLElement} target
             * @param {HTMLElement} [anchor]
             */
            m: function(u, d) {
              v(u, c, d);
            },
            d: function(u) {
              u && _(c);
            }
          };
        };
      };
      var e = t;
      if (await Promise.resolve(), !this.$$cn || this.$$c)
        return;
      const n = {}, l = Tt(this);
      for (const s of this.$$s)
        s in l && (n[s] = [t(s)]);
      for (const s of this.attributes) {
        const c = this.$$g_p(s.name);
        c in this.$$d || (this.$$d[c] = Me(c, s.value, this.$$p_d, "toProp"));
      }
      for (const s in this.$$p_d)
        !(s in this.$$d) && this[s] !== void 0 && (this.$$d[s] = this[s], delete this[s]);
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
        for (const s in this.$$p_d)
          if (this.$$d[s] = this.$$c.$$.ctx[this.$$c.$$.props[s]], this.$$p_d[s].reflect) {
            const c = Me(
              s,
              this.$$d[s],
              this.$$p_d,
              "toAttribute"
            );
            c == null ? this.removeAttribute(this.$$p_d[s].attribute || s) : this.setAttribute(this.$$p_d[s].attribute || s, c);
          }
        this.$$r = !1;
      };
      this.$$c.$$.after_update.push(r), r();
      for (const s in this.$$l)
        for (const c of this.$$l[s]) {
          const a = this.$$c.$on(s, c);
          this.$$l_u.set(c, a);
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
  let s = class extends ut {
    constructor() {
      super(i, t, l), this.$$p_d = e;
    }
    static get observedAttributes() {
      return Object.keys(e).map(
        (c) => (e[c].attribute || c).toLowerCase()
      );
    }
  };
  return Object.keys(e).forEach((c) => {
    Object.defineProperty(s.prototype, c, {
      get() {
        return this.$$c && c in this.$$c ? this.$$c[c] : this.$$d[c];
      },
      set(a) {
        var f;
        a = Me(c, a, e), this.$$d[c] = a, (f = this.$$c) == null || f.$set({ [c]: a });
      }
    });
  }), n.forEach((c) => {
    Object.defineProperty(s.prototype, c, {
      get() {
        var a;
        return (a = this.$$c) == null ? void 0 : a[c];
      }
    });
  }), i.element = /** @type {any} */
  s, s;
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
    V(this, "$$");
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    V(this, "$$set");
  }
  /** @returns {void} */
  $destroy() {
    A(this, 1), this.$destroy = ae;
  }
  /**
   * @template {Extract<keyof Events, string>} K
   * @param {K} type
   * @param {((e: Events[K]) => void) | null | undefined} callback
   * @returns {() => void}
   */
  $on(e, t) {
    if (!De(t))
      return ae;
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
    this.$$set && !St(e) && (this.$$.skip_bound = !0, this.$$set(e), this.$$.skip_bound = !1);
  }
}
const Ot = "4";
typeof window < "u" && (window.__svelte || (window.__svelte = { v: /* @__PURE__ */ new Set() })).v.add(Ot);
const { window: Ee } = zt;
function Wt(i) {
  ge(i, "svelte-17syhza", ".tooltipWrap.svelte-17syhza{position:relative;display:inline-flex;align-items:center}.trigger.svelte-17syhza{display:inline-flex;align-items:center}.content.svelte-17syhza{display:block;width:100%}");
}
const jt = (i) => ({}), Ie = (i) => ({}), Lt = (i) => ({}), Oe = (i) => ({});
function Rt(i) {
  let e, t, n, l, r, s, c, a, f, u, d, g;
  const p = (
    /*#slots*/
    i[14].trigger
  ), y = ce(
    p,
    i,
    /*$$scope*/
    i[13],
    Oe
  ), z = (
    /*#slots*/
    i[14].content
  ), b = ce(
    z,
    i,
    /*$$scope*/
    i[13],
    Ie
  );
  return {
    c() {
      e = T("span"), t = T("span"), y && y.c(), n = q(), l = T("span"), r = T("div"), b && b.c(), s = q(), c = T("span"), o(t, "class", "trigger svelte-17syhza"), o(r, "class", "content svelte-17syhza"), o(c, "class", "bl_tooltipArrow"), o(c, "aria-hidden", "true"), o(
        c,
        "style",
        /*arrowStyle*/
        i[6]
      ), o(l, "class", "bl_tooltip"), o(l, "role", "tooltip"), o(l, "aria-hidden", a = !/*open*/
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
      ), o(l, "style", f = `${/*tooltipStyle*/
      i[5]}--bl-tooltip-max-width:${Math.max(
        120,
        /*maxWidthPx*/
        i[0]
      )}px;`), o(e, "class", "tooltipWrap svelte-17syhza"), o(e, "role", "group");
    },
    m(k, $) {
      v(k, e, $), m(e, t), y && y.m(t, null), i[15](t), m(e, n), m(e, l), m(l, r), b && b.m(r, null), m(l, s), m(l, c), i[16](l), u = !0, d || (g = [
        K(
          Ee,
          "resize",
          /*onWindowChange*/
          i[10]
        ),
        K(
          Ee,
          "scroll",
          /*onWindowChange*/
          i[10]
        ),
        Mt(
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
    p(k, [$]) {
      y && y.p && (!u || $ & /*$$scope*/
      8192) && ue(
        y,
        p,
        k,
        /*$$scope*/
        k[13],
        u ? fe(
          p,
          /*$$scope*/
          k[13],
          $,
          Lt
        ) : de(
          /*$$scope*/
          k[13]
        ),
        Oe
      ), b && b.p && (!u || $ & /*$$scope*/
      8192) && ue(
        b,
        z,
        k,
        /*$$scope*/
        k[13],
        u ? fe(
          z,
          /*$$scope*/
          k[13],
          $,
          jt
        ) : de(
          /*$$scope*/
          k[13]
        ),
        Ie
      ), (!u || $ & /*arrowStyle*/
      64) && o(
        c,
        "style",
        /*arrowStyle*/
        k[6]
      ), (!u || $ & /*open*/
      2 && a !== (a = !/*open*/
      k[1])) && o(l, "aria-hidden", a), (!u || $ & /*open*/
      2) && o(
        l,
        "data-open",
        /*open*/
        k[1]
      ), (!u || $ & /*effectivePlacement*/
      16) && o(
        l,
        "data-placement",
        /*effectivePlacement*/
        k[4]
      ), (!u || $ & /*tooltipStyle, maxWidthPx*/
      33 && f !== (f = `${/*tooltipStyle*/
      k[5]}--bl-tooltip-max-width:${Math.max(
        120,
        /*maxWidthPx*/
        k[0]
      )}px;`)) && o(l, "style", f);
    },
    i(k) {
      u || (M(y, k), M(b, k), u = !0);
    },
    o(k) {
      B(y, k), B(b, k), u = !1;
    },
    d(k) {
      k && _(e), y && y.d(k), i[15](null), b && b.d(k), i[16](null), d = !1, ne(g);
    }
  };
}
const Q = 10, ee = 8, We = "badge-lib-tooltip-global-v2";
function we(i, e, t) {
  return Math.max(e, Math.min(t, i));
}
function Vt(i, e, t) {
  const n = window.innerWidth, l = window.innerHeight, r = e.top - Q - t.height >= ee, s = e.bottom + Q + t.height <= l - ee, c = e.left - Q - t.width >= ee, a = e.right + Q + t.width <= n - ee;
  return i === "top" && !r && s ? "bottom" : i === "bottom" && !s && r ? "top" : i === "left" && !c && a ? "right" : i === "right" && !a && c ? "left" : i;
}
function Ht(i, e, t) {
  let { $$slots: n = {}, $$scope: l } = e, { placement: r = "top" } = e, { openDelayMs: s = 80 } = e, { maxWidthPx: c = 280 } = e, a = !1, f = null, u = null, d = null, g = r, p = "", y = "";
  const z = `
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
  font-size: var(--vis-badge-tooltip-font-size, 13px);
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
  margin-top: 0px;
  opacity: 1;
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
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 0.015em;
  opacity: 0.92;
  white-space: pre-line;
  overflow-wrap: anywhere;
  line-height: 1.15;
}

.bl_tooltipActionIcon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex: 0 0 13px;
  width: 13px;
  height: 13px;
  line-height: 0;
}

.bl_tooltipActionIcon svg {
  display: block;
  width: 13px;
  height: 13px;
}
`;
  function b() {
    if (typeof document > "u") return;
    const x = document.getElementById(We);
    if (x) {
      x.textContent !== z && (x.textContent = z);
      return;
    }
    const S = document.createElement("style");
    S.id = We, S.textContent = z, document.head.appendChild(S);
  }
  function k(x) {
    if (b(), !(typeof document > "u"))
      return document.body.appendChild(x), {
        destroy() {
          x.remove();
        }
      };
  }
  function $() {
    f && clearTimeout(f), f = setTimeout(() => t(1, a = !0), s);
  }
  function I() {
    f && clearTimeout(f), f = null, t(1, a = !1);
  }
  async function D() {
    if (!a || !u || !d) return;
    await Ct();
    const x = u.getBoundingClientRect(), S = d.getBoundingClientRect(), Z = window.innerWidth, pe = window.innerHeight;
    t(4, g = Vt(r, x, S));
    let L = 0, R = 0;
    g === "top" ? (R = x.top - Q - S.height, L = x.left + x.width / 2 - S.width / 2) : g === "bottom" ? (R = x.bottom + Q, L = x.left + x.width / 2 - S.width / 2) : g === "left" ? (R = x.top + x.height / 2 - S.height / 2, L = x.left - Q - S.width) : (R = x.top + x.height / 2 - S.height / 2, L = x.right + Q), L = we(L, ee, Z - S.width - ee), R = we(R, ee, pe - S.height - ee);
    const be = x.left + x.width / 2, Pe = x.top + x.height / 2, P = we(be - L - 4, 10, S.width - 10), vt = we(Pe - R - 4, 10, S.height - 10);
    t(6, y = g === "top" || g === "bottom" ? `left:${P}px;` : `top:${vt}px;`), t(5, p = `left:${Math.round(L)}px;top:${Math.round(R)}px;`);
  }
  function H() {
    D();
  }
  function j(x) {
    ze[x ? "unshift" : "push"](() => {
      u = x, t(2, u);
    });
  }
  function C(x) {
    ze[x ? "unshift" : "push"](() => {
      d = x, t(3, d);
    });
  }
  return i.$$set = (x) => {
    "placement" in x && t(11, r = x.placement), "openDelayMs" in x && t(12, s = x.openDelayMs), "maxWidthPx" in x && t(0, c = x.maxWidthPx), "$$scope" in x && t(13, l = x.$$scope);
  }, i.$$.update = () => {
    i.$$.dirty & /*open*/
    2 && a && D(), i.$$.dirty & /*open, placement*/
    2050 && (a || (t(5, p = ""), t(6, y = ""), t(4, g = r)));
  }, [
    c,
    a,
    u,
    d,
    g,
    p,
    y,
    k,
    $,
    I,
    H,
    r,
    s,
    l,
    n,
    j,
    C
  ];
}
class dt extends J {
  constructor(e) {
    super(), Y(
      this,
      e,
      Ht,
      Rt,
      U,
      {
        placement: 11,
        openDelayMs: 12,
        maxWidthPx: 0
      },
      Wt
    );
  }
  get placement() {
    return this.$$.ctx[11];
  }
  set placement(e) {
    this.$$set({ placement: e }), h();
  }
  get openDelayMs() {
    return this.$$.ctx[12];
  }
  set openDelayMs(e) {
    this.$$set({ openDelayMs: e }), h();
  }
  get maxWidthPx() {
    return this.$$.ctx[0];
  }
  set maxWidthPx(e) {
    this.$$set({ maxWidthPx: e }), h();
  }
}
X(dt, { placement: {}, openDelayMs: {}, maxWidthPx: {} }, ["trigger", "content"], [], !0);
function Zt(i) {
  let e;
  return {
    c() {
      e = T("span"), _e(e, "display", "inline-block"), _e(
        e,
        "width",
        /*size*/
        i[1] + "px"
      ), _e(
        e,
        "height",
        /*size*/
        i[1] + "px"
      ), o(e, "aria-hidden", "true");
    },
    m(t, n) {
      v(t, e, n);
    },
    p(t, n) {
      n & /*size*/
      2 && _e(
        e,
        "width",
        /*size*/
        t[1] + "px"
      ), n & /*size*/
      2 && _e(
        e,
        "height",
        /*size*/
        t[1] + "px"
      );
    },
    d(t) {
      t && _(e);
    }
  };
}
function qt(i) {
  let e, t, n, l, r, s, c = (
    /*bg*/
    i[2] && je(i)
  );
  return {
    c() {
      e = w("svg"), c && c.c(), t = w("g"), n = w("path"), l = w("path"), r = w("path"), o(n, "d", "M15 3h6v6"), o(l, "d", "M10 14 21 3"), o(r, "d", "M21 13v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7"), o(t, "transform", "translate(12 12) scale(0.68) translate(-12 -12)"), o(
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
    m(a, f) {
      v(a, e, f), c && c.m(e, null), m(e, t), m(t, n), m(t, l), m(t, r);
    },
    p(a, f) {
      /*bg*/
      a[2] ? c ? c.p(a, f) : (c = je(a), c.c(), c.m(e, t)) : c && (c.d(1), c = null), f & /*size*/
      2 && o(
        e,
        "width",
        /*size*/
        a[1]
      ), f & /*size*/
      2 && o(
        e,
        "height",
        /*size*/
        a[1]
      ), f & /*fg*/
      8 && s !== (s = /*fg*/
      a[3] ?? "currentColor") && o(e, "stroke", s);
    },
    d(a) {
      a && _(e), c && c.d();
    }
  };
}
function Ut(i) {
  let e, t, n, l, r, s, c = (
    /*bg*/
    i[2] && Le(i)
  );
  return {
    c() {
      e = w("svg"), c && c.c(), t = w("g"), n = w("path"), l = w("path"), r = w("path"), o(n, "d", "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"), o(l, "d", "M7 10l5 5 5-5"), o(r, "d", "M12 15V3"), o(t, "transform", "translate(12 12) scale(0.68) translate(-12 -12)"), o(
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
    m(a, f) {
      v(a, e, f), c && c.m(e, null), m(e, t), m(t, n), m(t, l), m(t, r);
    },
    p(a, f) {
      /*bg*/
      a[2] ? c ? c.p(a, f) : (c = Le(a), c.c(), c.m(e, t)) : c && (c.d(1), c = null), f & /*size*/
      2 && o(
        e,
        "width",
        /*size*/
        a[1]
      ), f & /*size*/
      2 && o(
        e,
        "height",
        /*size*/
        a[1]
      ), f & /*fg*/
      8 && s !== (s = /*fg*/
      a[3] ?? "currentColor") && o(e, "stroke", s);
    },
    d(a) {
      a && _(e), c && c.d();
    }
  };
}
function Gt(i) {
  let e, t, n, l, r, s;
  return {
    c() {
      e = w("svg"), t = w("g"), n = w("path"), r = w("path"), o(n, "d", "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"), o(n, "fill", l = /*bg*/
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
      ), o(e, "viewBox", "0 0 24 24"), o(e, "fill", "none"), o(e, "aria-hidden", "true"), o(e, "stroke", s = /*fg*/
      i[3] ?? "currentColor"), o(e, "stroke-width", "2"), o(e, "stroke-linecap", "round"), o(e, "stroke-linejoin", "round");
    },
    m(c, a) {
      v(c, e, a), m(e, t), m(t, n), m(t, r);
    },
    p(c, a) {
      a & /*bg*/
      4 && l !== (l = /*bg*/
      c[2] ?? "none") && o(n, "fill", l), a & /*bgOpacity*/
      16 && o(
        n,
        "opacity",
        /*bgOpacity*/
        c[4]
      ), a & /*size*/
      2 && o(
        e,
        "width",
        /*size*/
        c[1]
      ), a & /*size*/
      2 && o(
        e,
        "height",
        /*size*/
        c[1]
      ), a & /*fg*/
      8 && s !== (s = /*fg*/
      c[3] ?? "currentColor") && o(e, "stroke", s);
    },
    d(c) {
      c && _(e);
    }
  };
}
function Yt(i) {
  let e, t, n, l, r, s;
  function c(u, d) {
    return (
      /*bg*/
      u[2] ? si : oi
    );
  }
  let a = c(i), f = a(i);
  return {
    c() {
      e = w("svg"), f.c(), t = w("g"), n = w("ellipse"), l = w("path"), r = w("path"), o(n, "cx", "12"), o(n, "cy", "5"), o(n, "rx", "9"), o(n, "ry", "3"), o(l, "d", "M3 5v14c0 1.7 4 3 9 3s9-1.3 9-3V5"), o(r, "d", "M3 12c0 1.7 4 3 9 3s9-1.3 9-3"), o(t, "transform", "translate(12 12) scale(0.68) translate(-12 -12)"), o(
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
    m(u, d) {
      v(u, e, d), f.m(e, null), m(e, t), m(t, n), m(t, l), m(t, r);
    },
    p(u, d) {
      a === (a = c(u)) && f ? f.p(u, d) : (f.d(1), f = a(u), f && (f.c(), f.m(e, t))), d & /*size*/
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
      8 && s !== (s = /*fg*/
      u[3] ?? "currentColor") && o(e, "stroke", s);
    },
    d(u) {
      u && _(e), f.d();
    }
  };
}
function Xt(i) {
  let e, t, n, l, r, s, c;
  function a(d, g) {
    return (
      /*bg*/
      d[2] ? ui : fi
    );
  }
  let f = a(i), u = f(i);
  return {
    c() {
      e = w("svg"), u.c(), t = w("g"), n = w("polyline"), l = w("polyline"), r = w("line"), s = w("line"), o(n, "points", "15 3 21 3 21 9"), o(l, "points", "9 21 3 21 3 15"), o(r, "x1", "21"), o(r, "y1", "3"), o(r, "x2", "14"), o(r, "y2", "10"), o(s, "x1", "3"), o(s, "y1", "21"), o(s, "x2", "10"), o(s, "y2", "14"), o(t, "transform", "translate(12 12) scale(0.68) translate(-12 -12)"), o(
        e,
        "width",
        /*size*/
        i[1]
      ), o(
        e,
        "height",
        /*size*/
        i[1]
      ), o(e, "viewBox", "0 0 24 24"), o(e, "fill", "none"), o(e, "aria-hidden", "true"), o(e, "stroke", c = /*fg*/
      i[3] ?? "currentColor"), o(e, "stroke-width", "2"), o(e, "stroke-linecap", "round"), o(e, "stroke-linejoin", "round");
    },
    m(d, g) {
      v(d, e, g), u.m(e, null), m(e, t), m(t, n), m(t, l), m(t, r), m(t, s);
    },
    p(d, g) {
      f === (f = a(d)) && u ? u.p(d, g) : (u.d(1), u = f(d), u && (u.c(), u.m(e, t))), g & /*size*/
      2 && o(
        e,
        "width",
        /*size*/
        d[1]
      ), g & /*size*/
      2 && o(
        e,
        "height",
        /*size*/
        d[1]
      ), g & /*fg*/
      8 && c !== (c = /*fg*/
      d[3] ?? "currentColor") && o(e, "stroke", c);
    },
    d(d) {
      d && _(e), u.d();
    }
  };
}
function Jt(i) {
  let e, t, n, l, r, s, c, a;
  function f(g, p) {
    return (
      /*bg*/
      g[2] ? pi : hi
    );
  }
  let u = f(i), d = u(i);
  return {
    c() {
      e = w("svg"), d.c(), t = w("g"), n = w("path"), l = w("path"), r = w("path"), s = w("path"), c = w("path"), o(n, "d", "M14 4.1 12 6"), o(l, "d", "m5.1 8-2.9-.8"), o(r, "d", "m6 12-1.9 2"), o(s, "d", "M7.2 2.2 8 5.1"), o(c, "d", "M9.037 9.69a.498.498 0 0 1 .653-.653l11 4.5a.5.5 0 0 1-.074.949l-4.349 1.041a1 1 0 0 0-.74.739l-1.04 4.35a.5.5 0 0 1-.95.074z"), o(t, "transform", "translate(12 12) scale(0.68) translate(-12 -12)"), o(
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
    m(g, p) {
      v(g, e, p), d.m(e, null), m(e, t), m(t, n), m(t, l), m(t, r), m(t, s), m(t, c);
    },
    p(g, p) {
      u === (u = f(g)) && d ? d.p(g, p) : (d.d(1), d = u(g), d && (d.c(), d.m(e, t))), p & /*size*/
      2 && o(
        e,
        "width",
        /*size*/
        g[1]
      ), p & /*size*/
      2 && o(
        e,
        "height",
        /*size*/
        g[1]
      ), p & /*fg*/
      8 && a !== (a = /*fg*/
      g[3] ?? "currentColor") && o(e, "stroke", a);
    },
    d(g) {
      g && _(e), d.d();
    }
  };
}
function Kt(i) {
  let e, t, n, l, r;
  function s(f, u) {
    return (
      /*bg*/
      f[2] ? vi : mi
    );
  }
  let c = s(i), a = c(i);
  return {
    c() {
      e = w("svg"), a.c(), t = w("path"), l = w("path"), o(t, "d", "M12 10.2a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"), o(t, "fill", n = /*fg*/
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
    m(f, u) {
      v(f, e, u), a.m(e, null), m(e, t), m(e, l);
    },
    p(f, u) {
      c === (c = s(f)) && a ? a.p(f, u) : (a.d(1), a = c(f), a && (a.c(), a.m(e, t))), u & /*fg*/
      8 && n !== (n = /*fg*/
      f[3] ?? "currentColor") && o(t, "fill", n), u & /*fg*/
      8 && r !== (r = /*fg*/
      f[3] ?? "currentColor") && o(l, "fill", r), u & /*size*/
      2 && o(
        e,
        "width",
        /*size*/
        f[1]
      ), u & /*size*/
      2 && o(
        e,
        "height",
        /*size*/
        f[1]
      );
    },
    d(f) {
      f && _(e), a.d();
    }
  };
}
function Qt(i) {
  let e, t, n, l, r;
  function s(f, u) {
    return (
      /*bg*/
      f[2] ? Si : wi
    );
  }
  let c = s(i), a = c(i);
  return {
    c() {
      e = w("svg"), a.c(), t = w("path"), l = w("path"), o(t, "d", "M12 10.2a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"), o(t, "fill", n = /*fg*/
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
    m(f, u) {
      v(f, e, u), a.m(e, null), m(e, t), m(e, l);
    },
    p(f, u) {
      c === (c = s(f)) && a ? a.p(f, u) : (a.d(1), a = c(f), a && (a.c(), a.m(e, t))), u & /*fg*/
      8 && n !== (n = /*fg*/
      f[3] ?? "currentColor") && o(t, "fill", n), u & /*fg*/
      8 && r !== (r = /*fg*/
      f[3] ?? "currentColor") && o(l, "fill", r), u & /*size*/
      2 && o(
        e,
        "width",
        /*size*/
        f[1]
      ), u & /*size*/
      2 && o(
        e,
        "height",
        /*size*/
        f[1]
      );
    },
    d(f) {
      f && _(e), a.d();
    }
  };
}
function ei(i) {
  let e, t, n, l, r, s, c;
  return {
    c() {
      e = w("svg"), t = w("path"), l = w("path"), s = w("path"), o(t, "d", "M12 3.5c.4 0 .8.2 1 .6l9 15.6c.4.7-.1 1.6-1 1.6H3c-.9 0-1.4-.9-1-1.6l9-15.6c.2-.4.6-.6 1-.6Z"), o(t, "fill", n = /*bg*/
      i[2] ?? "currentColor"), o(
        t,
        "opacity",
        /*bgOpacity*/
        i[4]
      ), o(l, "d", "M12 8a1 1 0 0 1 1 1l-.3 5.5a.7.7 0 0 1-1.4 0L11 9a1 1 0 0 1 1-1Z"), o(l, "fill", r = /*fg*/
      i[3] ?? "currentColor"), o(s, "d", "M12 18a1.25 1.25 0 1 1 0-2.5A1.25 1.25 0 0 1 12 18Z"), o(s, "fill", c = /*fg*/
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
    m(a, f) {
      v(a, e, f), m(e, t), m(e, l), m(e, s);
    },
    p(a, f) {
      f & /*bg*/
      4 && n !== (n = /*bg*/
      a[2] ?? "currentColor") && o(t, "fill", n), f & /*bgOpacity*/
      16 && o(
        t,
        "opacity",
        /*bgOpacity*/
        a[4]
      ), f & /*fg*/
      8 && r !== (r = /*fg*/
      a[3] ?? "currentColor") && o(l, "fill", r), f & /*fg*/
      8 && c !== (c = /*fg*/
      a[3] ?? "currentColor") && o(s, "fill", c), f & /*size*/
      2 && o(
        e,
        "width",
        /*size*/
        a[1]
      ), f & /*size*/
      2 && o(
        e,
        "height",
        /*size*/
        a[1]
      );
    },
    d(a) {
      a && _(e);
    }
  };
}
function ti(i) {
  let e, t, n;
  function l(c, a) {
    return (
      /*bg*/
      c[2] ? Pi : xi
    );
  }
  let r = l(i), s = r(i);
  return {
    c() {
      e = w("svg"), s.c(), t = w("path"), o(t, "d", "M9.2 12.5 7.5 10.8a1 1 0 0 0-1.4 1.4l2.4 2.4a1 1 0 0 0 1.4 0l7-7a1 1 0 1 0-1.4-1.4l-6.3 6.3Z"), o(t, "fill", n = /*fg*/
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
    m(c, a) {
      v(c, e, a), s.m(e, null), m(e, t);
    },
    p(c, a) {
      r === (r = l(c)) && s ? s.p(c, a) : (s.d(1), s = r(c), s && (s.c(), s.m(e, t))), a & /*fg*/
      8 && n !== (n = /*fg*/
      c[3] ?? "currentColor") && o(t, "fill", n), a & /*size*/
      2 && o(
        e,
        "width",
        /*size*/
        c[1]
      ), a & /*size*/
      2 && o(
        e,
        "height",
        /*size*/
        c[1]
      );
    },
    d(c) {
      c && _(e), s.d();
    }
  };
}
function je(i) {
  let e;
  function t(r, s) {
    return (
      /*bgShape*/
      r[5] === "square" ? ni : ii
    );
  }
  let n = t(i), l = n(i);
  return {
    c() {
      l.c(), e = E();
    },
    m(r, s) {
      l.m(r, s), v(r, e, s);
    },
    p(r, s) {
      n === (n = t(r)) && l ? l.p(r, s) : (l.d(1), l = n(r), l && (l.c(), l.m(e.parentNode, e)));
    },
    d(r) {
      r && _(e), l.d(r);
    }
  };
}
function ii(i) {
  let e;
  return {
    c() {
      e = w("circle"), o(e, "cx", "12"), o(e, "cy", "12"), o(e, "r", "10"), o(
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
      v(t, e, n);
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
      t && _(e);
    }
  };
}
function ni(i) {
  let e;
  return {
    c() {
      e = w("rect"), o(e, "x", "3"), o(e, "y", "3"), o(e, "width", "18"), o(e, "height", "18"), o(e, "rx", "0"), o(
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
      v(t, e, n);
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
      t && _(e);
    }
  };
}
function Le(i) {
  let e;
  function t(r, s) {
    return (
      /*bgShape*/
      r[5] === "square" ? ri : li
    );
  }
  let n = t(i), l = n(i);
  return {
    c() {
      l.c(), e = E();
    },
    m(r, s) {
      l.m(r, s), v(r, e, s);
    },
    p(r, s) {
      n === (n = t(r)) && l ? l.p(r, s) : (l.d(1), l = n(r), l && (l.c(), l.m(e.parentNode, e)));
    },
    d(r) {
      r && _(e), l.d(r);
    }
  };
}
function li(i) {
  let e;
  return {
    c() {
      e = w("circle"), o(e, "cx", "12"), o(e, "cy", "12"), o(e, "r", "10"), o(
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
      v(t, e, n);
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
      t && _(e);
    }
  };
}
function ri(i) {
  let e;
  return {
    c() {
      e = w("rect"), o(e, "x", "3"), o(e, "y", "3"), o(e, "width", "18"), o(e, "height", "18"), o(e, "rx", "0"), o(
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
      v(t, e, n);
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
      t && _(e);
    }
  };
}
function oi(i) {
  let e;
  return {
    c() {
      e = w("path"), o(e, "d", "M3 3h18v18H3V3Z"), o(e, "fill", "currentColor"), o(
        e,
        "opacity",
        /*bgOpacity*/
        i[4]
      ), o(e, "stroke", "none");
    },
    m(t, n) {
      v(t, e, n);
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
      t && _(e);
    }
  };
}
function si(i) {
  let e;
  function t(r, s) {
    return (
      /*bgShape*/
      r[5] === "square" ? ci : ai
    );
  }
  let n = t(i), l = n(i);
  return {
    c() {
      l.c(), e = E();
    },
    m(r, s) {
      l.m(r, s), v(r, e, s);
    },
    p(r, s) {
      n === (n = t(r)) && l ? l.p(r, s) : (l.d(1), l = n(r), l && (l.c(), l.m(e.parentNode, e)));
    },
    d(r) {
      r && _(e), l.d(r);
    }
  };
}
function ai(i) {
  let e;
  return {
    c() {
      e = w("circle"), o(e, "cx", "12"), o(e, "cy", "12"), o(e, "r", "10"), o(
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
      v(t, e, n);
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
      t && _(e);
    }
  };
}
function ci(i) {
  let e;
  return {
    c() {
      e = w("rect"), o(e, "x", "3"), o(e, "y", "3"), o(e, "width", "18"), o(e, "height", "18"), o(e, "rx", "0"), o(
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
      v(t, e, n);
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
      t && _(e);
    }
  };
}
function fi(i) {
  let e;
  return {
    c() {
      e = w("path"), o(e, "d", "M3 3h18v18H3V3Z"), o(e, "fill", "currentColor"), o(
        e,
        "opacity",
        /*bgOpacity*/
        i[4]
      ), o(e, "stroke", "none");
    },
    m(t, n) {
      v(t, e, n);
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
      t && _(e);
    }
  };
}
function ui(i) {
  let e;
  function t(r, s) {
    return (
      /*bgShape*/
      r[5] === "square" ? gi : di
    );
  }
  let n = t(i), l = n(i);
  return {
    c() {
      l.c(), e = E();
    },
    m(r, s) {
      l.m(r, s), v(r, e, s);
    },
    p(r, s) {
      n === (n = t(r)) && l ? l.p(r, s) : (l.d(1), l = n(r), l && (l.c(), l.m(e.parentNode, e)));
    },
    d(r) {
      r && _(e), l.d(r);
    }
  };
}
function di(i) {
  let e;
  return {
    c() {
      e = w("circle"), o(e, "cx", "12"), o(e, "cy", "12"), o(e, "r", "10"), o(
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
      v(t, e, n);
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
      t && _(e);
    }
  };
}
function gi(i) {
  let e;
  return {
    c() {
      e = w("rect"), o(e, "x", "3"), o(e, "y", "3"), o(e, "width", "18"), o(e, "height", "18"), o(e, "rx", "0"), o(
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
      v(t, e, n);
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
      t && _(e);
    }
  };
}
function hi(i) {
  let e;
  return {
    c() {
      e = w("path"), o(e, "d", "M3 3h18v18H3V3Z"), o(e, "fill", "currentColor"), o(
        e,
        "opacity",
        /*bgOpacity*/
        i[4]
      ), o(e, "stroke", "none");
    },
    m(t, n) {
      v(t, e, n);
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
      t && _(e);
    }
  };
}
function pi(i) {
  let e;
  function t(r, s) {
    return (
      /*bgShape*/
      r[5] === "square" ? _i : bi
    );
  }
  let n = t(i), l = n(i);
  return {
    c() {
      l.c(), e = E();
    },
    m(r, s) {
      l.m(r, s), v(r, e, s);
    },
    p(r, s) {
      n === (n = t(r)) && l ? l.p(r, s) : (l.d(1), l = n(r), l && (l.c(), l.m(e.parentNode, e)));
    },
    d(r) {
      r && _(e), l.d(r);
    }
  };
}
function bi(i) {
  let e;
  return {
    c() {
      e = w("circle"), o(e, "cx", "12"), o(e, "cy", "12"), o(e, "r", "10"), o(
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
      v(t, e, n);
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
      t && _(e);
    }
  };
}
function _i(i) {
  let e;
  return {
    c() {
      e = w("rect"), o(e, "x", "3"), o(e, "y", "3"), o(e, "width", "18"), o(e, "height", "18"), o(e, "rx", "0"), o(
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
      v(t, e, n);
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
      t && _(e);
    }
  };
}
function mi(i) {
  let e;
  return {
    c() {
      e = w("path"), o(e, "d", "M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20Z"), o(e, "fill", "currentColor"), o(
        e,
        "opacity",
        /*bgOpacity*/
        i[4]
      );
    },
    m(t, n) {
      v(t, e, n);
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
      t && _(e);
    }
  };
}
function vi(i) {
  let e;
  function t(r, s) {
    return (
      /*bgShape*/
      r[5] === "square" ? ki : yi
    );
  }
  let n = t(i), l = n(i);
  return {
    c() {
      l.c(), e = E();
    },
    m(r, s) {
      l.m(r, s), v(r, e, s);
    },
    p(r, s) {
      n === (n = t(r)) && l ? l.p(r, s) : (l.d(1), l = n(r), l && (l.c(), l.m(e.parentNode, e)));
    },
    d(r) {
      r && _(e), l.d(r);
    }
  };
}
function yi(i) {
  let e;
  return {
    c() {
      e = w("circle"), o(e, "cx", "12"), o(e, "cy", "12"), o(e, "r", "10"), o(
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
      v(t, e, n);
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
      t && _(e);
    }
  };
}
function ki(i) {
  let e;
  return {
    c() {
      e = w("rect"), o(e, "x", "3"), o(e, "y", "3"), o(e, "width", "18"), o(e, "height", "18"), o(e, "rx", "0"), o(
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
      v(t, e, n);
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
      t && _(e);
    }
  };
}
function wi(i) {
  let e;
  return {
    c() {
      e = w("path"), o(e, "d", "M3 3h18v18H3V3Z"), o(e, "fill", "currentColor"), o(
        e,
        "opacity",
        /*bgOpacity*/
        i[4]
      );
    },
    m(t, n) {
      v(t, e, n);
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
      t && _(e);
    }
  };
}
function Si(i) {
  let e;
  function t(r, s) {
    return (
      /*bgShape*/
      r[5] === "square" ? zi : Mi
    );
  }
  let n = t(i), l = n(i);
  return {
    c() {
      l.c(), e = E();
    },
    m(r, s) {
      l.m(r, s), v(r, e, s);
    },
    p(r, s) {
      n === (n = t(r)) && l ? l.p(r, s) : (l.d(1), l = n(r), l && (l.c(), l.m(e.parentNode, e)));
    },
    d(r) {
      r && _(e), l.d(r);
    }
  };
}
function Mi(i) {
  let e;
  return {
    c() {
      e = w("circle"), o(e, "cx", "12"), o(e, "cy", "12"), o(e, "r", "10"), o(
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
      v(t, e, n);
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
      t && _(e);
    }
  };
}
function zi(i) {
  let e;
  return {
    c() {
      e = w("rect"), o(e, "x", "3"), o(e, "y", "3"), o(e, "width", "18"), o(e, "height", "18"), o(e, "rx", "0"), o(
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
      v(t, e, n);
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
      t && _(e);
    }
  };
}
function xi(i) {
  let e;
  return {
    c() {
      e = w("path"), o(e, "d", "M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20Z"), o(e, "fill", "currentColor"), o(
        e,
        "opacity",
        /*bgOpacity*/
        i[4]
      );
    },
    m(t, n) {
      v(t, e, n);
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
      t && _(e);
    }
  };
}
function Pi(i) {
  let e;
  function t(r, s) {
    return (
      /*bgShape*/
      r[5] === "square" ? $i : Bi
    );
  }
  let n = t(i), l = n(i);
  return {
    c() {
      l.c(), e = E();
    },
    m(r, s) {
      l.m(r, s), v(r, e, s);
    },
    p(r, s) {
      n === (n = t(r)) && l ? l.p(r, s) : (l.d(1), l = n(r), l && (l.c(), l.m(e.parentNode, e)));
    },
    d(r) {
      r && _(e), l.d(r);
    }
  };
}
function Bi(i) {
  let e;
  return {
    c() {
      e = w("circle"), o(e, "cx", "12"), o(e, "cy", "12"), o(e, "r", "10"), o(
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
      v(t, e, n);
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
      t && _(e);
    }
  };
}
function $i(i) {
  let e;
  return {
    c() {
      e = w("rect"), o(e, "x", "3"), o(e, "y", "3"), o(e, "width", "18"), o(e, "height", "18"), o(e, "rx", "0"), o(
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
      v(t, e, n);
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
      t && _(e);
    }
  };
}
function Ti(i) {
  let e;
  function t(r, s) {
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
                        r[0] === "ExternalLink" ? qt : Zt
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
      l.c(), e = E();
    },
    m(r, s) {
      l.m(r, s), v(r, e, s);
    },
    p(r, [s]) {
      n === (n = t(r)) && l ? l.p(r, s) : (l.d(1), l = n(r), l && (l.c(), l.m(e.parentNode, e)));
    },
    i: ae,
    o: ae,
    d(r) {
      r && _(e), l.d(r);
    }
  };
}
function Di(i, e, t) {
  let { name: n } = e, { size: l = 0 } = e, { bg: r = null } = e, { fg: s = null } = e, { bgOpacity: c = 0.14 } = e, { bgShape: a = "round" } = e;
  return i.$$set = (f) => {
    "name" in f && t(0, n = f.name), "size" in f && t(1, l = f.size), "bg" in f && t(2, r = f.bg), "fg" in f && t(3, s = f.fg), "bgOpacity" in f && t(4, c = f.bgOpacity), "bgShape" in f && t(5, a = f.bgShape);
  }, [n, l, r, s, c, a];
}
class he extends J {
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
    this.$$set({ name: e }), h();
  }
  get size() {
    return this.$$.ctx[1];
  }
  set size(e) {
    this.$$set({ size: e }), h();
  }
  get bg() {
    return this.$$.ctx[2];
  }
  set bg(e) {
    this.$$set({ bg: e }), h();
  }
  get fg() {
    return this.$$.ctx[3];
  }
  set fg(e) {
    this.$$set({ fg: e }), h();
  }
  get bgOpacity() {
    return this.$$.ctx[4];
  }
  set bgOpacity(e) {
    this.$$set({ bgOpacity: e }), h();
  }
  get bgShape() {
    return this.$$.ctx[5];
  }
  set bgShape(e) {
    this.$$set({ bgShape: e }), h();
  }
}
X(he, { name: {}, size: {}, bg: {}, fg: {}, bgOpacity: {}, bgShape: {} }, [], [], !0);
function Ci(i) {
  ge(i, "svelte-13r27b2", ".triggerButton.svelte-13r27b2{all:unset;display:inline-flex;align-items:center}.interactive.svelte-13r27b2{cursor:pointer}");
}
const Ni = (i) => ({}), Re = (i) => ({}), Ai = (i) => ({}), Ve = (i) => ({}), Fi = (i) => ({}), He = (i) => ({}), Ei = (i) => ({}), Ze = (i) => ({});
function Ii(i) {
  let e, t;
  const n = (
    /*#slots*/
    i[11].trigger
  ), l = ce(
    n,
    i,
    /*$$scope*/
    i[12],
    Re
  );
  return {
    c() {
      e = T("span"), l && l.c();
    },
    m(r, s) {
      v(r, e, s), l && l.m(e, null), t = !0;
    },
    p(r, s) {
      l && l.p && (!t || s & /*$$scope*/
      4096) && ue(
        l,
        n,
        r,
        /*$$scope*/
        r[12],
        t ? fe(
          n,
          /*$$scope*/
          r[12],
          s,
          Ni
        ) : de(
          /*$$scope*/
          r[12]
        ),
        Re
      );
    },
    i(r) {
      t || (M(l, r), t = !0);
    },
    o(r) {
      B(l, r), t = !1;
    },
    d(r) {
      r && _(e), l && l.d(r);
    }
  };
}
function Oi(i) {
  let e, t, n, l, r;
  const s = (
    /*#slots*/
    i[11].trigger
  ), c = ce(
    s,
    i,
    /*$$scope*/
    i[12],
    Ve
  );
  return {
    c() {
      var a;
      e = T("button"), c && c.c(), o(e, "class", "triggerButton interactive svelte-13r27b2"), o(e, "type", "button"), o(e, "aria-label", t = /*badge*/
      (a = i[0]) == null ? void 0 : a.label);
    },
    m(a, f) {
      v(a, e, f), c && c.m(e, null), n = !0, l || (r = K(
        e,
        "click",
        /*onTriggerClick*/
        i[8]
      ), l = !0);
    },
    p(a, f) {
      var u;
      c && c.p && (!n || f & /*$$scope*/
      4096) && ue(
        c,
        s,
        a,
        /*$$scope*/
        a[12],
        n ? fe(
          s,
          /*$$scope*/
          a[12],
          f,
          Ai
        ) : de(
          /*$$scope*/
          a[12]
        ),
        Ve
      ), (!n || f & /*badge*/
      1 && t !== (t = /*badge*/
      (u = a[0]) == null ? void 0 : u.label)) && o(e, "aria-label", t);
    },
    i(a) {
      n || (M(c, a), n = !0);
    },
    o(a) {
      B(c, a), n = !1;
    },
    d(a) {
      a && _(e), c && c.d(a), l = !1, r();
    }
  };
}
function Wi(i) {
  let e, t;
  return e = new dt({
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
        content: [Vi],
        trigger: [Ri]
      },
      $$scope: { ctx: i }
    }
  }), {
    c() {
      F(e.$$.fragment);
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
      t || (M(e.$$.fragment, n), t = !0);
    },
    o(n) {
      B(e.$$.fragment, n), t = !1;
    },
    d(n) {
      A(e, n);
    }
  };
}
function ji(i) {
  let e;
  const t = (
    /*#slots*/
    i[11].trigger
  ), n = ce(
    t,
    i,
    /*$$scope*/
    i[12],
    He
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
        e ? fe(
          t,
          /*$$scope*/
          l[12],
          r,
          Fi
        ) : de(
          /*$$scope*/
          l[12]
        ),
        He
      );
    },
    i(l) {
      e || (M(n, l), e = !0);
    },
    o(l) {
      B(n, l), e = !1;
    },
    d(l) {
      n && n.d(l);
    }
  };
}
function Li(i) {
  let e, t, n, l, r;
  const s = (
    /*#slots*/
    i[11].trigger
  ), c = ce(
    s,
    i,
    /*$$scope*/
    i[12],
    Ze
  );
  return {
    c() {
      var a;
      e = T("button"), c && c.c(), o(e, "class", "triggerButton interactive svelte-13r27b2"), o(e, "type", "button"), o(e, "aria-label", t = /*badge*/
      (a = i[0]) == null ? void 0 : a.label);
    },
    m(a, f) {
      v(a, e, f), c && c.m(e, null), n = !0, l || (r = K(
        e,
        "click",
        /*onTriggerClick*/
        i[8]
      ), l = !0);
    },
    p(a, f) {
      var u;
      c && c.p && (!n || f & /*$$scope*/
      4096) && ue(
        c,
        s,
        a,
        /*$$scope*/
        a[12],
        n ? fe(
          s,
          /*$$scope*/
          a[12],
          f,
          Ei
        ) : de(
          /*$$scope*/
          a[12]
        ),
        Ze
      ), (!n || f & /*badge*/
      1 && t !== (t = /*badge*/
      (u = a[0]) == null ? void 0 : u.label)) && o(e, "aria-label", t);
    },
    i(a) {
      n || (M(c, a), n = !0);
    },
    o(a) {
      B(c, a), n = !1;
    },
    d(a) {
      a && _(e), c && c.d(a), l = !1, r();
    }
  };
}
function Ri(i) {
  let e, t, n, l;
  const r = [Li, ji], s = [];
  function c(a, f) {
    return (
      /*interactive*/
      a[1] ? 0 : 1
    );
  }
  return t = c(i), n = s[t] = r[t](i), {
    c() {
      e = T("span"), n.c(), o(e, "slot", "trigger");
    },
    m(a, f) {
      v(a, e, f), s[t].m(e, null), l = !0;
    },
    p(a, f) {
      let u = t;
      t = c(a), t === u ? s[t].p(a, f) : (O(), B(s[u], 1, 1, () => {
        s[u] = null;
      }), W(), n = s[t], n ? n.p(a, f) : (n = s[t] = r[t](a), n.c()), M(n, 1), n.m(e, null));
    },
    i(a) {
      l || (M(n), l = !0);
    },
    o(a) {
      B(n), l = !1;
    },
    d(a) {
      a && _(e), s[t].d();
    }
  };
}
function qe(i) {
  let e, t = (
    /*badge*/
    i[0].label + ""
  ), n;
  return {
    c() {
      e = T("strong"), n = G(t);
    },
    m(l, r) {
      v(l, e, r), m(e, n);
    },
    p(l, r) {
      r & /*badge*/
      1 && t !== (t = /*badge*/
      l[0].label + "") && le(n, t);
    },
    d(l) {
      l && _(e);
    }
  };
}
function Ue(i) {
  let e, t = (
    /*badge*/
    i[0].description + ""
  ), n;
  return {
    c() {
      e = T("span"), n = G(t), o(e, "class", "bl_tooltipDesc");
    },
    m(l, r) {
      v(l, e, r), m(e, n);
    },
    p(l, r) {
      r & /*badge*/
      1 && t !== (t = /*badge*/
      l[0].description + "") && le(n, t);
    },
    d(l) {
      l && _(e);
    }
  };
}
function Ge(i) {
  let e, t, n, l, r = (
    /*badge*/
    i[0].actionText + ""
  ), s, c, a = (
    /*hintIcon*/
    i[2] && Ye(i)
  );
  return {
    c() {
      e = T("div"), t = T("div"), a && a.c(), n = q(), l = T("span"), s = G(r), o(l, "class", "bl_tooltipActionText"), o(t, "class", "bl_tooltipActionRow"), o(e, "class", "bl_tooltipActionHint"), o(e, "aria-hidden", "true");
    },
    m(f, u) {
      v(f, e, u), m(e, t), a && a.m(t, null), m(t, n), m(t, l), m(l, s), c = !0;
    },
    p(f, u) {
      /*hintIcon*/
      f[2] ? a ? (a.p(f, u), u & /*hintIcon*/
      4 && M(a, 1)) : (a = Ye(f), a.c(), M(a, 1), a.m(t, n)) : a && (O(), B(a, 1, 1, () => {
        a = null;
      }), W()), (!c || u & /*badge*/
      1) && r !== (r = /*badge*/
      f[0].actionText + "") && le(s, r);
    },
    i(f) {
      c || (M(a), c = !0);
    },
    o(f) {
      B(a), c = !1;
    },
    d(f) {
      f && _(e), a && a.d();
    }
  };
}
function Ye(i) {
  let e, t, n;
  return t = new he({
    props: {
      name: (
        /*hintIcon*/
        i[2]
      ),
      size: 13,
      fg: "rgba(255, 255, 255, 0.92)",
      bg: null,
      bgOpacity: 0
    }
  }), {
    c() {
      e = T("span"), F(t.$$.fragment), o(e, "class", "bl_tooltipActionIcon");
    },
    m(l, r) {
      v(l, e, r), N(t, e, null), n = !0;
    },
    p(l, r) {
      const s = {};
      r & /*hintIcon*/
      4 && (s.name = /*hintIcon*/
      l[2]), t.$set(s);
    },
    i(l) {
      n || (M(t.$$.fragment, l), n = !0);
    },
    o(l) {
      B(t.$$.fragment, l), n = !1;
    },
    d(l) {
      l && _(e), A(t);
    }
  };
}
function Vi(i) {
  let e, t, n, l, r = (
    /*contentMode*/
    i[4] === "labelAndDescription" && qe(i)
  ), s = (
    /*badge*/
    i[0].description && Ue(i)
  ), c = (
    /*badge*/
    i[0].actionText && Ge(i)
  );
  return {
    c() {
      e = T("div"), r && r.c(), t = q(), s && s.c(), n = q(), c && c.c(), o(e, "slot", "content"), o(e, "class", "bl_tooltipContent");
    },
    m(a, f) {
      v(a, e, f), r && r.m(e, null), m(e, t), s && s.m(e, null), m(e, n), c && c.m(e, null), l = !0;
    },
    p(a, f) {
      /*contentMode*/
      a[4] === "labelAndDescription" ? r ? r.p(a, f) : (r = qe(a), r.c(), r.m(e, t)) : r && (r.d(1), r = null), /*badge*/
      a[0].description ? s ? s.p(a, f) : (s = Ue(a), s.c(), s.m(e, n)) : s && (s.d(1), s = null), /*badge*/
      a[0].actionText ? c ? (c.p(a, f), f & /*badge*/
      1 && M(c, 1)) : (c = Ge(a), c.c(), M(c, 1), c.m(e, null)) : c && (O(), B(c, 1, 1, () => {
        c = null;
      }), W());
    },
    i(a) {
      l || (M(c), l = !0);
    },
    o(a) {
      B(c), l = !1;
    },
    d(a) {
      a && _(e), r && r.d(), s && s.d(), c && c.d();
    }
  };
}
function Hi(i) {
  let e, t, n, l;
  const r = [Wi, Oi, Ii], s = [];
  function c(a, f) {
    return (
      /*showTooltip*/
      a[3] ? 0 : (
        /*interactive*/
        a[1] ? 1 : 2
      )
    );
  }
  return e = c(i), t = s[e] = r[e](i), {
    c() {
      t.c(), n = E();
    },
    m(a, f) {
      s[e].m(a, f), v(a, n, f), l = !0;
    },
    p(a, [f]) {
      let u = e;
      e = c(a), e === u ? s[e].p(a, f) : (O(), B(s[u], 1, 1, () => {
        s[u] = null;
      }), W(), t = s[e], t ? t.p(a, f) : (t = s[e] = r[e](a), t.c()), M(t, 1), t.m(n.parentNode, n));
    },
    i(a) {
      l || (M(t), l = !0);
    },
    o(a) {
      B(t), l = !1;
    },
    d(a) {
      a && _(n), s[e].d(a);
    }
  };
}
function Zi(i, e, t) {
  let n, l, r, s, c, a, f, { $$slots: u = {}, $$scope: d } = e, { badge: g } = e, { options: p = void 0 } = e, { interactive: y = !1 } = e;
  const z = Ce();
  function b($) {
    !y || !g || z("activate", { badge: g, source: $ });
  }
  function k($) {
    b($.detail === 0 ? "keyboard" : "pointer");
  }
  return i.$$set = ($) => {
    "badge" in $ && t(0, g = $.badge), "options" in $ && t(9, p = $.options), "interactive" in $ && t(1, y = $.interactive), "$$scope" in $ && t(12, d = $.$$scope);
  }, i.$$.update = () => {
    i.$$.dirty & /*options*/
    512 && t(7, n = (p == null ? void 0 : p.placement) ?? "top"), i.$$.dirty & /*options*/
    512 && t(6, l = Number.isFinite(p == null ? void 0 : p.openDelayMs) ? Number(p == null ? void 0 : p.openDelayMs) : 80), i.$$.dirty & /*options*/
    512 && t(5, r = Number.isFinite(p == null ? void 0 : p.maxWidthPx) ? Number(p == null ? void 0 : p.maxWidthPx) : 280), i.$$.dirty & /*options*/
    512 && t(4, s = (p == null ? void 0 : p.contentMode) === "labelAndDescription" ? "labelAndDescription" : "description"), i.$$.dirty & /*options*/
    512 && t(10, c = (p == null ? void 0 : p.enabled) ?? !0), i.$$.dirty & /*enabled, badge*/
    1025 && t(3, a = c && !!(g != null && g.description || g != null && g.actionText)), i.$$.dirty & /*badge*/
    1 && t(2, f = (g == null ? void 0 : g.actionIcon) ?? null);
  }, [
    g,
    y,
    f,
    a,
    s,
    r,
    l,
    n,
    k,
    p,
    c,
    u,
    d
  ];
}
class ke extends J {
  constructor(e) {
    super(), Y(this, e, Zi, Hi, U, { badge: 0, options: 9, interactive: 1 }, Ci);
  }
  get badge() {
    return this.$$.ctx[0];
  }
  set badge(e) {
    this.$$set({ badge: e }), h();
  }
  get options() {
    return this.$$.ctx[9];
  }
  set options(e) {
    this.$$set({ options: e }), h();
  }
  get interactive() {
    return this.$$.ctx[1];
  }
  set interactive(e) {
    this.$$set({ interactive: e }), h();
  }
}
X(ke, { badge: {}, options: {}, interactive: { type: "Boolean" } }, ["trigger"], [], !0);
function qi(i) {
  ge(i, "svelte-181fogp", `.badge.svelte-181fogp{display:inline-flex;align-items:center;gap:var(--badge-gap);padding:var(--badge-pad-y) var(--badge-pad-x);border-radius:var(--badge-radius, 16px);border:var(--badge-border-w) solid transparent;font-weight:550;font-size:12px;line-height:1;font-family:var(
      --vis-badge-tooltip-font-family,
      ui-sans-serif,
      system-ui,
      -apple-system,
      'Segoe UI',
      Roboto,
      'Helvetica Neue',
      Arial,
      sans-serif
    );user-select:none;outline:none;transition:background-color 120ms ease, border-color 120ms ease, color 120ms ease;--badge-solid:rgb(17, 24, 39);--badge-border:color-mix(in srgb, var(--badge-solid) 65%, transparent);--badge-fg:color-mix(in srgb, var(--badge-solid) 72%, black);--badge-bg:color-mix(in srgb, var(--badge-solid) 14%, transparent);--badge-gap:3px;--badge-pad-y:3px;--badge-pad-x:6px;--badge-border-w:1px}.badge.filled.svelte-181fogp{background:var(--badge-solid);border-color:transparent;color:#ffffff}.badge.outlined.svelte-181fogp{background:transparent;border-color:var(--badge-border);color:var(--badge-fg)}.icon.svelte-181fogp{display:inline-flex;align-items:center;justify-content:center;width:20px;height:20px}.icon.svelte-181fogp svg,.icon.svelte-181fogp img,.icon.svelte-181fogp ion-icon,.icon.svelte-181fogp iconify-icon{width:100%;height:100%;display:block}.label.svelte-181fogp{white-space:nowrap}`);
}
function Xe(i) {
  let e, t;
  return e = new ke({
    props: {
      badge: (
        /*badge*/
        i[0]
      ),
      options: (
        /*tooltip*/
        i[3]
      ),
      interactive: (
        /*interactive*/
        i[4]
      ),
      $$slots: { trigger: [Ui] },
      $$scope: { ctx: i }
    }
  }), e.$on(
    "activate",
    /*activate_handler*/
    i[8]
  ), {
    c() {
      F(e.$$.fragment);
    },
    m(n, l) {
      N(e, n, l), t = !0;
    },
    p(n, l) {
      const r = {};
      l & /*badge*/
      1 && (r.badge = /*badge*/
      n[0]), l & /*tooltip*/
      8 && (r.options = /*tooltip*/
      n[3]), l & /*interactive*/
      16 && (r.interactive = /*interactive*/
      n[4]), l & /*$$scope, variant, badgeColor, corners, badge, iconName, iconBgShape*/
      743 && (r.$$scope = { dirty: l, ctx: n }), e.$set(r);
    },
    i(n) {
      t || (M(e.$$.fragment, n), t = !0);
    },
    o(n) {
      B(e.$$.fragment, n), t = !1;
    },
    d(n) {
      A(e, n);
    }
  };
}
function Je(i) {
  let e, t, n;
  return t = new he({
    props: {
      name: (
        /*iconName*/
        i[5]
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
        i[6]
      )
    }
  }), {
    c() {
      e = T("span"), F(t.$$.fragment), o(e, "class", "icon svelte-181fogp"), o(e, "aria-hidden", "true");
    },
    m(l, r) {
      v(l, e, r), N(t, e, null), n = !0;
    },
    p(l, r) {
      const s = {};
      r & /*iconName*/
      32 && (s.name = /*iconName*/
      l[5]), r & /*variant*/
      2 && (s.bg = /*variant*/
      l[1] === "outlined" ? "var(--badge-solid)" : "#ffffff"), r & /*variant*/
      2 && (s.fg = /*variant*/
      l[1] === "outlined" ? "#ffffff" : "var(--badge-solid)"), r & /*iconBgShape*/
      64 && (s.bgShape = /*iconBgShape*/
      l[6]), t.$set(s);
    },
    i(l) {
      n || (M(t.$$.fragment, l), n = !0);
    },
    o(l) {
      B(t.$$.fragment, l), n = !1;
    },
    d(l) {
      l && _(e), A(t);
    }
  };
}
function Ui(i) {
  let e, t, n, l, r = (
    /*badge*/
    i[0].label + ""
  ), s, c, a, f, u = (
    /*iconName*/
    i[5] && Je(i)
  );
  return {
    c() {
      e = T("span"), t = T("span"), u && u.c(), n = q(), l = T("span"), s = G(r), o(l, "class", "label svelte-181fogp"), o(t, "class", c = "badge " + /*variant*/
      i[1] + " svelte-181fogp"), o(t, "style", a = `--badge-solid:${/*badgeColor*/
      i[7]};--badge-radius:${/*corners*/
      i[2] === "rectangular" ? "4px" : "16px"};`), o(e, "slot", "trigger");
    },
    m(d, g) {
      v(d, e, g), m(e, t), u && u.m(t, null), m(t, n), m(t, l), m(l, s), f = !0;
    },
    p(d, g) {
      /*iconName*/
      d[5] ? u ? (u.p(d, g), g & /*iconName*/
      32 && M(u, 1)) : (u = Je(d), u.c(), M(u, 1), u.m(t, n)) : u && (O(), B(u, 1, 1, () => {
        u = null;
      }), W()), (!f || g & /*badge*/
      1) && r !== (r = /*badge*/
      d[0].label + "") && le(s, r), (!f || g & /*variant*/
      2 && c !== (c = "badge " + /*variant*/
      d[1] + " svelte-181fogp")) && o(t, "class", c), (!f || g & /*badgeColor, corners*/
      132 && a !== (a = `--badge-solid:${/*badgeColor*/
      d[7]};--badge-radius:${/*corners*/
      d[2] === "rectangular" ? "4px" : "16px"};`)) && o(t, "style", a);
    },
    i(d) {
      f || (M(u), f = !0);
    },
    o(d) {
      B(u), f = !1;
    },
    d(d) {
      d && _(e), u && u.d();
    }
  };
}
function Gi(i) {
  let e, t, n = (
    /*badge*/
    i[0] && Xe(i)
  );
  return {
    c() {
      n && n.c(), e = E();
    },
    m(l, r) {
      n && n.m(l, r), v(l, e, r), t = !0;
    },
    p(l, [r]) {
      /*badge*/
      l[0] ? n ? (n.p(l, r), r & /*badge*/
      1 && M(n, 1)) : (n = Xe(l), n.c(), M(n, 1), n.m(e.parentNode, e)) : n && (O(), B(n, 1, 1, () => {
        n = null;
      }), W());
    },
    i(l) {
      t || (M(n), t = !0);
    },
    o(l) {
      B(n), t = !1;
    },
    d(l) {
      l && _(e), n && n.d(l);
    }
  };
}
const Yi = 20;
function Xi(i, e, t) {
  let n, l, r, { badge: s } = e, { variant: c = "filled" } = e, { corners: a = "rounded" } = e, { tooltip: f = void 0 } = e, { interactive: u = !1 } = e;
  function d(g) {
    xe.call(this, i, g);
  }
  return i.$$set = (g) => {
    "badge" in g && t(0, s = g.badge), "variant" in g && t(1, c = g.variant), "corners" in g && t(2, a = g.corners), "tooltip" in g && t(3, f = g.tooltip), "interactive" in g && t(4, u = g.interactive);
  }, i.$$.update = () => {
    i.$$.dirty & /*badge*/
    1 && t(5, n = (s == null ? void 0 : s.icon) ?? null), i.$$.dirty & /*badge*/
    1 && t(7, l = String((s == null ? void 0 : s.color) ?? "").trim() || "rgb(17, 24, 39)"), i.$$.dirty & /*iconName*/
    32 && t(6, r = n === "Info" ? "square" : "round");
  }, [
    s,
    c,
    a,
    f,
    u,
    n,
    r,
    l,
    d
  ];
}
class gt extends J {
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
        corners: 2,
        tooltip: 3,
        interactive: 4
      },
      qi
    );
  }
  get badge() {
    return this.$$.ctx[0];
  }
  set badge(e) {
    this.$$set({ badge: e }), h();
  }
  get variant() {
    return this.$$.ctx[1];
  }
  set variant(e) {
    this.$$set({ variant: e }), h();
  }
  get corners() {
    return this.$$.ctx[2];
  }
  set corners(e) {
    this.$$set({ corners: e }), h();
  }
  get tooltip() {
    return this.$$.ctx[3];
  }
  set tooltip(e) {
    this.$$set({ tooltip: e }), h();
  }
  get interactive() {
    return this.$$.ctx[4];
  }
  set interactive(e) {
    this.$$set({ interactive: e }), h();
  }
}
X(gt, { badge: {}, variant: {}, corners: {}, tooltip: {}, interactive: { type: "Boolean" } }, [], [], !0);
function Ji(i) {
  ge(i, "svelte-se4m15", `.wrap.fixed.svelte-se4m15.svelte-se4m15{position:fixed;z-index:50}.wrap.svelte-se4m15.svelte-se4m15{display:inline-flex;align-items:center;justify-content:flex-end;pointer-events:auto}.wrap.left.svelte-se4m15 .badge.mini{flex-direction:row-reverse}.badge.svelte-se4m15.svelte-se4m15{display:inline-flex;align-items:center;gap:var(--badge-gap);padding:var(--badge-pad-y) var(--badge-pad-x);border-radius:var(--badge-radius, 16px);border:var(--badge-border-w) solid transparent;font-weight:550;font-size:12px;line-height:1;font-family:var(
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
      padding 420ms cubic-bezier(0.2, 0, 0, 1);--badge-solid:rgb(17, 24, 39);--badge-border:color-mix(in srgb, var(--badge-solid) 65%, transparent);--badge-fg:color-mix(in srgb, var(--badge-solid) 72%, black);--badge-gap:3px;--badge-pad-y:3px;--badge-pad-x:6px;--badge-border-w:1px;--mini-icon-bg:var(--badge-solid);--mini-icon-fg:#ffffff}.badge.filled.svelte-se4m15.svelte-se4m15{background:var(--badge-solid);border-color:transparent;color:#ffffff}.badge.outlined.svelte-se4m15.svelte-se4m15{background:transparent;border-color:var(--badge-border);color:var(--badge-fg)}.icon.svelte-se4m15.svelte-se4m15{display:inline-flex;align-items:center;justify-content:center;width:24px;height:24px}.icon.svelte-se4m15 svg,.icon.svelte-se4m15 img,.icon.svelte-se4m15 ion-icon,.icon.svelte-se4m15 iconify-icon{width:100%;height:100%;display:block}.label.svelte-se4m15.svelte-se4m15{white-space:nowrap}.badge.mini.svelte-se4m15.svelte-se4m15{--badge-gap:0px;--badge-pad-y:0px;--badge-pad-x:0px;--badge-border-w:0px;border-color:transparent;background:transparent;font-size:11px}.badge.mini.svelte-se4m15 .label.svelte-se4m15{max-width:0;opacity:0;overflow:hidden;line-height:1.2;padding-bottom:1px;transition:max-width 420ms cubic-bezier(0.2, 0, 0, 1), opacity 260ms ease}.badge.mini.svelte-se4m15.svelte-se4m15:hover,.badge.mini.svelte-se4m15.svelte-se4m15:focus-visible{--badge-gap:2px;--badge-pad-y:2px;--badge-pad-x:5px;--badge-border-w:1px}.badge.mini.outlined.svelte-se4m15.svelte-se4m15:hover,.badge.mini.outlined.svelte-se4m15.svelte-se4m15:focus-visible{border-color:var(--badge-border)}.badge.mini.filled.svelte-se4m15.svelte-se4m15:hover,.badge.mini.filled.svelte-se4m15.svelte-se4m15:focus-visible{background:var(--badge-solid);border-color:transparent;color:#ffffff;--mini-icon-bg:#ffffff;--mini-icon-fg:var(--badge-solid)}.badge.mini.svelte-se4m15:hover .label.svelte-se4m15,.badge.mini.svelte-se4m15:focus-visible .label.svelte-se4m15{max-width:220px;opacity:1}`);
}
function Ke(i) {
  let e, t;
  return e = new ke({
    props: {
      badge: (
        /*badge*/
        i[0]
      ),
      options: (
        /*tooltip*/
        i[3]
      ),
      interactive: (
        /*interactive*/
        i[4]
      ),
      $$slots: { trigger: [Ki] },
      $$scope: { ctx: i }
    }
  }), e.$on(
    "activate",
    /*activate_handler*/
    i[12]
  ), {
    c() {
      F(e.$$.fragment);
    },
    m(n, l) {
      N(e, n, l), t = !0;
    },
    p(n, l) {
      const r = {};
      l & /*badge*/
      1 && (r.badge = /*badge*/
      n[0]), l & /*tooltip*/
      8 && (r.options = /*tooltip*/
      n[3]), l & /*interactive*/
      16 && (r.interactive = /*interactive*/
      n[4]), l & /*$$scope, variant, badgeColor, corners, badge, iconName, iconBgShapeFinal*/
      9991 && (r.$$scope = { dirty: l, ctx: n }), e.$set(r);
    },
    i(n) {
      t || (M(e.$$.fragment, n), t = !0);
    },
    o(n) {
      B(e.$$.fragment, n), t = !1;
    },
    d(n) {
      A(e, n);
    }
  };
}
function Qe(i) {
  let e, t, n;
  return t = new he({
    props: {
      name: (
        /*iconName*/
        i[8]
      ),
      size: en,
      bg: "var(--mini-icon-bg)",
      fg: "var(--mini-icon-fg)",
      bgOpacity: 1,
      bgShape: (
        /*iconBgShapeFinal*/
        i[9]
      )
    }
  }), {
    c() {
      e = T("span"), F(t.$$.fragment), o(e, "class", "icon svelte-se4m15"), o(e, "aria-hidden", "true");
    },
    m(l, r) {
      v(l, e, r), N(t, e, null), n = !0;
    },
    p(l, r) {
      const s = {};
      r & /*iconName*/
      256 && (s.name = /*iconName*/
      l[8]), r & /*iconBgShapeFinal*/
      512 && (s.bgShape = /*iconBgShapeFinal*/
      l[9]), t.$set(s);
    },
    i(l) {
      n || (M(t.$$.fragment, l), n = !0);
    },
    o(l) {
      B(t.$$.fragment, l), n = !1;
    },
    d(l) {
      l && _(e), A(t);
    }
  };
}
function Ki(i) {
  let e, t, n, l, r = (
    /*badge*/
    i[0].label + ""
  ), s, c, a, f, u = (
    /*iconName*/
    i[8] && Qe(i)
  );
  return {
    c() {
      e = T("span"), t = T("span"), u && u.c(), n = q(), l = T("span"), s = G(r), o(l, "class", "label svelte-se4m15"), o(t, "class", c = "badge mini " + /*variant*/
      i[1] + " svelte-se4m15"), o(t, "style", a = `--badge-solid:${/*badgeColor*/
      i[10]};--badge-radius:${/*corners*/
      i[2] === "rectangular" ? "4px" : "16px"};`), o(e, "slot", "trigger");
    },
    m(d, g) {
      v(d, e, g), m(e, t), u && u.m(t, null), m(t, n), m(t, l), m(l, s), f = !0;
    },
    p(d, g) {
      /*iconName*/
      d[8] ? u ? (u.p(d, g), g & /*iconName*/
      256 && M(u, 1)) : (u = Qe(d), u.c(), M(u, 1), u.m(t, n)) : u && (O(), B(u, 1, 1, () => {
        u = null;
      }), W()), (!f || g & /*badge*/
      1) && r !== (r = /*badge*/
      d[0].label + "") && le(s, r), (!f || g & /*variant*/
      2 && c !== (c = "badge mini " + /*variant*/
      d[1] + " svelte-se4m15")) && o(t, "class", c), (!f || g & /*badgeColor, corners*/
      1028 && a !== (a = `--badge-solid:${/*badgeColor*/
      d[10]};--badge-radius:${/*corners*/
      d[2] === "rectangular" ? "4px" : "16px"};`)) && o(t, "style", a);
    },
    i(d) {
      f || (M(u), f = !0);
    },
    o(d) {
      B(u), f = !1;
    },
    d(d) {
      d && _(e), u && u.d();
    }
  };
}
function Qi(i) {
  let e, t, n, l, r = (
    /*badge*/
    i[0] && Ke(i)
  );
  return {
    c() {
      e = T("div"), r && r.c(), o(e, "class", t = "wrap " + /*fixed*/
      (i[5] ? "fixed" : "") + " " + /*expandDirection*/
      i[7] + " svelte-se4m15"), o(e, "style", n = /*fixed*/
      i[5] ? `right:${/*offsetPx*/
      i[6]}px;bottom:${/*offsetPx*/
      i[6]}px;` : void 0), o(e, "aria-label", "Mini badge");
    },
    m(s, c) {
      v(s, e, c), r && r.m(e, null), l = !0;
    },
    p(s, [c]) {
      /*badge*/
      s[0] ? r ? (r.p(s, c), c & /*badge*/
      1 && M(r, 1)) : (r = Ke(s), r.c(), M(r, 1), r.m(e, null)) : r && (O(), B(r, 1, 1, () => {
        r = null;
      }), W()), (!l || c & /*fixed, expandDirection*/
      160 && t !== (t = "wrap " + /*fixed*/
      (s[5] ? "fixed" : "") + " " + /*expandDirection*/
      s[7] + " svelte-se4m15")) && o(e, "class", t), (!l || c & /*fixed, offsetPx*/
      96 && n !== (n = /*fixed*/
      s[5] ? `right:${/*offsetPx*/
      s[6]}px;bottom:${/*offsetPx*/
      s[6]}px;` : void 0)) && o(e, "style", n);
    },
    i(s) {
      l || (M(r), l = !0);
    },
    o(s) {
      B(r), l = !1;
    },
    d(s) {
      s && _(e), r && r.d();
    }
  };
}
const en = 24;
function tn(i, e, t) {
  let n, l, r, { badge: s } = e, { variant: c = "outlined" } = e, { corners: a = "rounded" } = e, { iconBgShape: f = "round" } = e, { tooltip: u = void 0 } = e, { interactive: d = !1 } = e, { fixed: g = !1 } = e, { offsetPx: p = 16 } = e, { expandDirection: y = "right" } = e;
  function z(b) {
    xe.call(this, i, b);
  }
  return i.$$set = (b) => {
    "badge" in b && t(0, s = b.badge), "variant" in b && t(1, c = b.variant), "corners" in b && t(2, a = b.corners), "iconBgShape" in b && t(11, f = b.iconBgShape), "tooltip" in b && t(3, u = b.tooltip), "interactive" in b && t(4, d = b.interactive), "fixed" in b && t(5, g = b.fixed), "offsetPx" in b && t(6, p = b.offsetPx), "expandDirection" in b && t(7, y = b.expandDirection);
  }, i.$$.update = () => {
    i.$$.dirty & /*badge*/
    1 && t(8, n = (s == null ? void 0 : s.icon) ?? null), i.$$.dirty & /*badge*/
    1 && t(10, l = String((s == null ? void 0 : s.color) ?? "").trim() || "rgb(17, 24, 39)"), i.$$.dirty & /*iconName, iconBgShape*/
    2304 && t(9, r = n === "Info" ? "square" : f);
  }, [
    s,
    c,
    a,
    u,
    d,
    g,
    p,
    y,
    n,
    r,
    l,
    f,
    z
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
        corners: 2,
        iconBgShape: 11,
        tooltip: 3,
        interactive: 4,
        fixed: 5,
        offsetPx: 6,
        expandDirection: 7
      },
      Ji
    );
  }
  get badge() {
    return this.$$.ctx[0];
  }
  set badge(e) {
    this.$$set({ badge: e }), h();
  }
  get variant() {
    return this.$$.ctx[1];
  }
  set variant(e) {
    this.$$set({ variant: e }), h();
  }
  get corners() {
    return this.$$.ctx[2];
  }
  set corners(e) {
    this.$$set({ corners: e }), h();
  }
  get iconBgShape() {
    return this.$$.ctx[11];
  }
  set iconBgShape(e) {
    this.$$set({ iconBgShape: e }), h();
  }
  get tooltip() {
    return this.$$.ctx[3];
  }
  set tooltip(e) {
    this.$$set({ tooltip: e }), h();
  }
  get interactive() {
    return this.$$.ctx[4];
  }
  set interactive(e) {
    this.$$set({ interactive: e }), h();
  }
  get fixed() {
    return this.$$.ctx[5];
  }
  set fixed(e) {
    this.$$set({ fixed: e }), h();
  }
  get offsetPx() {
    return this.$$.ctx[6];
  }
  set offsetPx(e) {
    this.$$set({ offsetPx: e }), h();
  }
  get expandDirection() {
    return this.$$.ctx[7];
  }
  set expandDirection(e) {
    this.$$set({ expandDirection: e }), h();
  }
}
X(ht, { badge: {}, variant: {}, corners: {}, iconBgShape: {}, tooltip: {}, interactive: { type: "Boolean" }, fixed: { type: "Boolean" }, offsetPx: {}, expandDirection: {} }, [], [], !0);
function nn(i) {
  ge(i, "svelte-1h18cih", `.prio.svelte-1h18cih.svelte-1h18cih{width:var(--prio-size);height:var(--prio-size);border-radius:999px;display:inline-flex;align-items:center;justify-content:center;cursor:default;outline:none;user-select:none;transition:transform 160ms cubic-bezier(0.2, 0, 0, 1), box-shadow 160ms cubic-bezier(0.2, 0, 0, 1);font-family:var(
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
function et(i) {
  let e, t;
  return e = new ke({
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
      F(e.$$.fragment);
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
      t || (M(e.$$.fragment, n), t = !0);
    },
    o(n) {
      B(e.$$.fragment, n), t = !1;
    },
    d(n) {
      A(e, n);
    }
  };
}
function tt(i) {
  let e, t, n;
  return t = new he({
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
      e = T("span"), F(t.$$.fragment), o(e, "class", "icon svelte-1h18cih"), o(e, "aria-hidden", "true");
    },
    m(l, r) {
      v(l, e, r), N(t, e, null), n = !0;
    },
    p(l, r) {
      const s = {};
      r & /*iconName*/
      64 && (s.name = /*iconName*/
      l[6]), r & /*iconSize*/
      256 && (s.size = /*iconSize*/
      l[8]), r & /*variant*/
      2 && (s.bg = /*variant*/
      l[1] === "solid" ? "#ffffff" : "var(--prio-solid)"), r & /*variant*/
      2 && (s.fg = /*variant*/
      l[1] === "solid" ? "var(--prio-solid)" : "#ffffff"), r & /*iconBgShape*/
      512 && (s.bgShape = /*iconBgShape*/
      l[9]), t.$set(s);
    },
    i(l) {
      n || (M(t.$$.fragment, l), n = !0);
    },
    o(l) {
      B(t.$$.fragment, l), n = !1;
    },
    d(l) {
      l && _(e), A(t);
    }
  };
}
function ln(i) {
  let e, t, n, l, r, s, c, a, f, u = (
    /*iconName*/
    i[6] && tt(i)
  );
  return {
    c() {
      e = T("span"), t = T("span"), n = T("span"), u && u.c(), l = q(), r = T("span"), s = G(
        /*rawLabel*/
        i[5]
      ), o(r, "class", "prio-text svelte-1h18cih"), o(n, "class", "prio-inner svelte-1h18cih"), o(n, "aria-hidden", "true"), o(t, "class", c = "prio " + /*variant*/
      i[1] + " with-label svelte-1h18cih"), o(t, "style", a = `--prio-solid:${/*badgeColor*/
      i[10]}; --prio-size:${/*renderSize*/
      i[4]}px; --prio-text-size:${/*textSize*/
      i[7]}px; --prio-icon-size:${/*iconSize*/
      i[8]}px;`), o(e, "slot", "trigger");
    },
    m(d, g) {
      v(d, e, g), m(e, t), m(t, n), u && u.m(n, null), m(n, l), m(n, r), m(r, s), f = !0;
    },
    p(d, g) {
      /*iconName*/
      d[6] ? u ? (u.p(d, g), g & /*iconName*/
      64 && M(u, 1)) : (u = tt(d), u.c(), M(u, 1), u.m(n, l)) : u && (O(), B(u, 1, 1, () => {
        u = null;
      }), W()), (!f || g & /*rawLabel*/
      32) && le(
        s,
        /*rawLabel*/
        d[5]
      ), (!f || g & /*variant*/
      2 && c !== (c = "prio " + /*variant*/
      d[1] + " with-label svelte-1h18cih")) && o(t, "class", c), (!f || g & /*badgeColor, renderSize, textSize, iconSize*/
      1424 && a !== (a = `--prio-solid:${/*badgeColor*/
      d[10]}; --prio-size:${/*renderSize*/
      d[4]}px; --prio-text-size:${/*textSize*/
      d[7]}px; --prio-icon-size:${/*iconSize*/
      d[8]}px;`)) && o(t, "style", a);
    },
    i(d) {
      f || (M(u), f = !0);
    },
    o(d) {
      B(u), f = !1;
    },
    d(d) {
      d && _(e), u && u.d();
    }
  };
}
function rn(i) {
  let e, t, n = (
    /*badge*/
    i[0] && et(i)
  );
  return {
    c() {
      n && n.c(), e = E();
    },
    m(l, r) {
      n && n.m(l, r), v(l, e, r), t = !0;
    },
    p(l, [r]) {
      /*badge*/
      l[0] ? n ? (n.p(l, r), r & /*badge*/
      1 && M(n, 1)) : (n = et(l), n.c(), M(n, 1), n.m(e.parentNode, e)) : n && (O(), B(n, 1, 1, () => {
        n = null;
      }), W());
    },
    i(l) {
      t || (M(n), t = !0);
    },
    o(l) {
      B(n), t = !1;
    },
    d(l) {
      l && _(e), n && n.d(l);
    }
  };
}
function on(i) {
  return String(i ?? "").trim() || "—";
}
function sn(i, e, t) {
  let n, l, r, s, c, a, f, u, { badge: d } = e, { variant: g = "solid" } = e, { size: p = 44 } = e, { tooltip: y = void 0 } = e, { interactive: z = !1 } = e;
  function b(k) {
    xe.call(this, i, k);
  }
  return i.$$set = (k) => {
    "badge" in k && t(0, d = k.badge), "variant" in k && t(1, g = k.variant), "size" in k && t(11, p = k.size), "tooltip" in k && t(2, y = k.tooltip), "interactive" in k && t(3, z = k.interactive);
  }, i.$$.update = () => {
    i.$$.dirty & /*badge*/
    1 && t(6, n = (d == null ? void 0 : d.icon) ?? null), i.$$.dirty & /*badge*/
    1 && t(10, l = String((d == null ? void 0 : d.color) ?? "").trim() || "rgb(17, 24, 39)"), i.$$.dirty & /*iconName*/
    64 && t(9, r = n === "Info" ? "square" : "round"), i.$$.dirty & /*badge*/
    1 && t(5, s = on(d == null ? void 0 : d.label)), i.$$.dirty & /*rawLabel*/
    32 && t(12, c = s.length), i.$$.dirty & /*size, labelLen*/
    6144 && t(4, a = Math.min(104, Math.max(p, 70 + Math.max(0, c - 12) * 1.4))), i.$$.dirty & /*renderSize*/
    16 && t(8, f = Math.round(a * 0.34)), i.$$.dirty & /*labelLen*/
    4096 && t(7, u = c <= 12 ? 12 : c <= 18 ? 11 : c <= 26 ? 10 : 9);
  }, [
    d,
    g,
    y,
    z,
    a,
    s,
    n,
    u,
    f,
    r,
    l,
    p,
    c,
    b
  ];
}
class pt extends J {
  constructor(e) {
    super(), Y(
      this,
      e,
      sn,
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
    this.$$set({ badge: e }), h();
  }
  get variant() {
    return this.$$.ctx[1];
  }
  set variant(e) {
    this.$$set({ variant: e }), h();
  }
  get size() {
    return this.$$.ctx[11];
  }
  set size(e) {
    this.$$set({ size: e }), h();
  }
  get tooltip() {
    return this.$$.ctx[2];
  }
  set tooltip(e) {
    this.$$set({ tooltip: e }), h();
  }
  get interactive() {
    return this.$$.ctx[3];
  }
  set interactive(e) {
    this.$$set({ interactive: e }), h();
  }
}
X(pt, { badge: {}, variant: {}, size: {}, tooltip: {}, interactive: { type: "Boolean" } }, [], [], !0);
function an(i) {
  ge(i, "svelte-1rs0hrt", `.seal.svelte-1rs0hrt.svelte-1rs0hrt{position:relative;width:var(--seal-size);height:var(--seal-size);border-radius:999px;display:inline-grid;place-items:center;outline:none;cursor:default;user-select:none;background:transparent;--seal-solid:rgb(17, 24, 39);--seal-ring:color-mix(in srgb, var(--seal-solid) 55%, transparent);--seal-line:color-mix(in srgb, var(--seal-solid) 18%, transparent);--seal-ring-fg:var(--seal-solid)}.seal.filled.svelte-1rs0hrt.svelte-1rs0hrt{background:var(--seal-solid);--seal-ring-fg:rgba(255, 255, 255, 0.92)}.ring.svelte-1rs0hrt.svelte-1rs0hrt{position:absolute;inset:0;border-radius:999px;font-size:var(--seal-font);font-family:var(
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
function it(i, e, t) {
  const n = i.slice();
  return n[17] = e[t], n[19] = t, n;
}
function nt(i) {
  let e, t;
  return e = new ke({
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
      $$slots: { trigger: [cn] },
      $$scope: { ctx: i }
    }
  }), e.$on(
    "activate",
    /*activate_handler*/
    i[16]
  ), {
    c() {
      F(e.$$.fragment);
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
      t || (M(e.$$.fragment, n), t = !0);
    },
    o(n) {
      B(e.$$.fragment, n), t = !1;
    },
    d(n) {
      A(e, n);
    }
  };
}
function lt(i, e) {
  let t, n = (
    /*char*/
    e[17] + ""
  ), l, r;
  return {
    key: i,
    first: null,
    c() {
      t = T("span"), l = G(n), o(t, "class", "char svelte-1rs0hrt"), o(t, "style", r = `--angle:${1 / /*chars*/
      e[7].length * /*index*/
      e[19]}turn;`), this.first = t;
    },
    m(s, c) {
      v(s, t, c), m(t, l);
    },
    p(s, c) {
      e = s, c & /*chars*/
      128 && n !== (n = /*char*/
      e[17] + "") && le(l, n), c & /*chars*/
      128 && r !== (r = `--angle:${1 / /*chars*/
      e[7].length * /*index*/
      e[19]}turn;`) && o(t, "style", r);
    },
    d(s) {
      s && _(t);
    }
  };
}
function rt(i) {
  let e, t, n, l;
  return t = new he({
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
      e = T("span"), F(t.$$.fragment), o(e, "class", "icon svelte-1rs0hrt"), o(e, "aria-hidden", "true"), o(e, "style", n = `--seal-icon-size:${/*centerIcon*/
      i[5]}px;`);
    },
    m(r, s) {
      v(r, e, s), N(t, e, null), l = !0;
    },
    p(r, s) {
      const c = {};
      s & /*iconName*/
      512 && (c.name = /*iconName*/
      r[9]), s & /*centerIcon*/
      32 && (c.size = /*centerIcon*/
      r[5]), t.$set(c), (!l || s & /*centerIcon*/
      32 && n !== (n = `--seal-icon-size:${/*centerIcon*/
      r[5]}px;`)) && o(e, "style", n);
    },
    i(r) {
      l || (M(t.$$.fragment, r), l = !0);
    },
    o(r) {
      B(t.$$.fragment, r), l = !1;
    },
    d(r) {
      r && _(e), A(t);
    }
  };
}
function cn(i) {
  let e, t, n, l = [], r = /* @__PURE__ */ new Map(), s, c, a, f, u, d, g = Fe(
    /*chars*/
    i[7]
  );
  const p = (z) => (
    /*index*/
    z[19]
  );
  for (let z = 0; z < g.length; z += 1) {
    let b = it(i, g, z), k = p(b);
    r.set(k, l[z] = lt(k, b));
  }
  let y = (
    /*iconName*/
    i[9] && rt(i)
  );
  return {
    c() {
      e = T("span"), t = T("span"), n = T("span");
      for (let z = 0; z < l.length; z += 1)
        l[z].c();
      s = q(), c = T("span"), a = T("span"), y && y.c(), o(n, "class", "ring svelte-1rs0hrt"), o(n, "aria-hidden", "true"), o(a, "class", "center-pill svelte-1rs0hrt"), o(c, "class", "center svelte-1rs0hrt"), o(c, "aria-hidden", "true"), o(t, "class", f = "seal " + /*variant*/
      i[1] + " svelte-1rs0hrt"), o(t, "style", u = `--seal-solid:${/*badgeColor*/
      i[8]}; --seal-size:${/*size*/
      i[4]}px; --seal-font:${/*ringFontPx*/
      i[6]}px;`), o(e, "slot", "trigger");
    },
    m(z, b) {
      v(z, e, b), m(e, t), m(t, n);
      for (let k = 0; k < l.length; k += 1)
        l[k] && l[k].m(n, null);
      m(t, s), m(t, c), m(c, a), y && y.m(a, null), d = !0;
    },
    p(z, b) {
      b & /*chars*/
      128 && (g = Fe(
        /*chars*/
        z[7]
      ), l = Et(l, b, p, 1, z, g, r, n, Ft, lt, null, it)), /*iconName*/
      z[9] ? y ? (y.p(z, b), b & /*iconName*/
      512 && M(y, 1)) : (y = rt(z), y.c(), M(y, 1), y.m(a, null)) : y && (O(), B(y, 1, 1, () => {
        y = null;
      }), W()), (!d || b & /*variant*/
      2 && f !== (f = "seal " + /*variant*/
      z[1] + " svelte-1rs0hrt")) && o(t, "class", f), (!d || b & /*badgeColor, size, ringFontPx*/
      336 && u !== (u = `--seal-solid:${/*badgeColor*/
      z[8]}; --seal-size:${/*size*/
      z[4]}px; --seal-font:${/*ringFontPx*/
      z[6]}px;`)) && o(t, "style", u);
    },
    i(z) {
      d || (M(y), d = !0);
    },
    o(z) {
      B(y), d = !1;
    },
    d(z) {
      z && _(e);
      for (let b = 0; b < l.length; b += 1)
        l[b].d();
      y && y.d();
    }
  };
}
function fn(i) {
  let e, t, n = (
    /*badge*/
    i[0] && nt(i)
  );
  return {
    c() {
      n && n.c(), e = E();
    },
    m(l, r) {
      n && n.m(l, r), v(l, e, r), t = !0;
    },
    p(l, [r]) {
      /*badge*/
      l[0] ? n ? (n.p(l, r), r & /*badge*/
      1 && M(n, 1)) : (n = nt(l), n.c(), M(n, 1), n.m(e.parentNode, e)) : n && (O(), B(n, 1, 1, () => {
        n = null;
      }), W());
    },
    i(l) {
      t || (M(n), t = !0);
    },
    o(l) {
      B(n), t = !1;
    },
    d(l) {
      l && _(e), n && n.d(l);
    }
  };
}
function un(i, e, t) {
  return Math.max(e, Math.min(t, i));
}
function dn(i, e, t) {
  let n, l, r, s, c, a, f, { badge: u } = e, { variant: d = "outlined" } = e, { tooltip: g = void 0 } = e, { interactive: p = !1 } = e, { ringText: y = null } = e, { repeat: z = 2 } = e, { separator: b = " • " } = e, { size: k = 76 } = e, { sealFontScale: $ = 0.12 } = e;
  function I(D) {
    xe.call(this, i, D);
  }
  return i.$$set = (D) => {
    "badge" in D && t(0, u = D.badge), "variant" in D && t(1, d = D.variant), "tooltip" in D && t(2, g = D.tooltip), "interactive" in D && t(3, p = D.interactive), "ringText" in D && t(10, y = D.ringText), "repeat" in D && t(11, z = D.repeat), "separator" in D && t(12, b = D.separator), "size" in D && t(4, k = D.size), "sealFontScale" in D && t(13, $ = D.sealFontScale);
  }, i.$$.update = () => {
    i.$$.dirty & /*badge*/
    1 && t(9, n = (u == null ? void 0 : u.icon) ?? null), i.$$.dirty & /*badge*/
    1 && t(8, l = String((u == null ? void 0 : u.color) ?? "").trim() || "rgb(17, 24, 39)"), i.$$.dirty & /*ringText, badge*/
    1025 && t(14, r = (y ?? (u == null ? void 0 : u.label) ?? "").trim() || "—"), i.$$.dirty & /*repeat*/
    2048 && t(15, s = un(Math.floor(z || 1), 1, 10)), i.$$.dirty & /*repeatSafe, displayText, separator*/
    53248 && t(7, c = [...Array(s)].map(() => [...r.toUpperCase()].concat([...b.toUpperCase()])).flat()), i.$$.dirty & /*size, sealFontScale*/
    8208 && t(6, a = Math.round(k * $)), i.$$.dirty & /*size*/
    16 && t(5, f = Math.round(k * 0.3));
  }, [
    u,
    d,
    g,
    p,
    k,
    f,
    a,
    c,
    l,
    n,
    y,
    z,
    b,
    $,
    r,
    s,
    I
  ];
}
class bt extends J {
  constructor(e) {
    super(), Y(
      this,
      e,
      dn,
      fn,
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
      an
    );
  }
  get badge() {
    return this.$$.ctx[0];
  }
  set badge(e) {
    this.$$set({ badge: e }), h();
  }
  get variant() {
    return this.$$.ctx[1];
  }
  set variant(e) {
    this.$$set({ variant: e }), h();
  }
  get tooltip() {
    return this.$$.ctx[2];
  }
  set tooltip(e) {
    this.$$set({ tooltip: e }), h();
  }
  get interactive() {
    return this.$$.ctx[3];
  }
  set interactive(e) {
    this.$$set({ interactive: e }), h();
  }
  get ringText() {
    return this.$$.ctx[10];
  }
  set ringText(e) {
    this.$$set({ ringText: e }), h();
  }
  get repeat() {
    return this.$$.ctx[11];
  }
  set repeat(e) {
    this.$$set({ repeat: e }), h();
  }
  get separator() {
    return this.$$.ctx[12];
  }
  set separator(e) {
    this.$$set({ separator: e }), h();
  }
  get size() {
    return this.$$.ctx[4];
  }
  set size(e) {
    this.$$set({ size: e }), h();
  }
  get sealFontScale() {
    return this.$$.ctx[13];
  }
  set sealFontScale(e) {
    this.$$set({ sealFontScale: e }), h();
  }
}
X(bt, { badge: {}, variant: {}, tooltip: {}, interactive: { type: "Boolean" }, ringText: {}, repeat: {}, separator: {}, size: {}, sealFontScale: {} }, [], [], !0);
const gn = {
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
function hn(i, e) {
  const t = gn[i], n = {
    ...t,
    ...e ?? {}
  };
  return n.contentMode === "auto" && (n.contentMode = t.contentMode), Number.isFinite(n.openDelayMs) || (n.openDelayMs = t.openDelayMs), (!Number.isFinite(n.maxWidthPx) || n.maxWidthPx < 120) && (n.maxWidthPx = t.maxWidthPx), n;
}
function pn(i) {
  let e, t;
  return e = new bt({
    props: {
      badge: (
        /*badge*/
        i[0]
      ),
      variant: (
        /*roundCircularTextVariant*/
        i[14]
      ),
      tooltip: (
        /*tooltipOptions*/
        i[13]
      ),
      interactive: (
        /*interactive*/
        i[2]
      ),
      ringText: (
        /*ringText*/
        i[9]
      ),
      repeat: (
        /*repeat*/
        i[10]
      ),
      separator: (
        /*separator*/
        i[11]
      ),
      size: (
        /*size*/
        i[4] ?? 76
      ),
      sealFontScale: (
        /*sealFontScale*/
        i[12]
      )
    }
  }), e.$on(
    "activate",
    /*onActivate*/
    i[18]
  ), {
    c() {
      F(e.$$.fragment);
    },
    m(n, l) {
      N(e, n, l), t = !0;
    },
    p(n, l) {
      const r = {};
      l & /*badge*/
      1 && (r.badge = /*badge*/
      n[0]), l & /*roundCircularTextVariant*/
      16384 && (r.variant = /*roundCircularTextVariant*/
      n[14]), l & /*tooltipOptions*/
      8192 && (r.tooltip = /*tooltipOptions*/
      n[13]), l & /*interactive*/
      4 && (r.interactive = /*interactive*/
      n[2]), l & /*ringText*/
      512 && (r.ringText = /*ringText*/
      n[9]), l & /*repeat*/
      1024 && (r.repeat = /*repeat*/
      n[10]), l & /*separator*/
      2048 && (r.separator = /*separator*/
      n[11]), l & /*size*/
      16 && (r.size = /*size*/
      n[4] ?? 76), l & /*sealFontScale*/
      4096 && (r.sealFontScale = /*sealFontScale*/
      n[12]), e.$set(r);
    },
    i(n) {
      t || (M(e.$$.fragment, n), t = !0);
    },
    o(n) {
      B(e.$$.fragment, n), t = !1;
    },
    d(n) {
      A(e, n);
    }
  };
}
function bn(i) {
  let e, t;
  return e = new pt({
    props: {
      badge: (
        /*badge*/
        i[0]
      ),
      variant: (
        /*roundVariant*/
        i[15]
      ),
      size: (
        /*size*/
        i[4] ?? 44
      ),
      tooltip: (
        /*tooltipOptions*/
        i[13]
      ),
      interactive: (
        /*interactive*/
        i[2]
      )
    }
  }), e.$on(
    "activate",
    /*onActivate*/
    i[18]
  ), {
    c() {
      F(e.$$.fragment);
    },
    m(n, l) {
      N(e, n, l), t = !0;
    },
    p(n, l) {
      const r = {};
      l & /*badge*/
      1 && (r.badge = /*badge*/
      n[0]), l & /*roundVariant*/
      32768 && (r.variant = /*roundVariant*/
      n[15]), l & /*size*/
      16 && (r.size = /*size*/
      n[4] ?? 44), l & /*tooltipOptions*/
      8192 && (r.tooltip = /*tooltipOptions*/
      n[13]), l & /*interactive*/
      4 && (r.interactive = /*interactive*/
      n[2]), e.$set(r);
    },
    i(n) {
      t || (M(e.$$.fragment, n), t = !0);
    },
    o(n) {
      B(e.$$.fragment, n), t = !1;
    },
    d(n) {
      A(e, n);
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
        i[16]
      ),
      corners: (
        /*corners*/
        i[3]
      ),
      interactive: (
        /*interactive*/
        i[2]
      ),
      fixed: (
        /*fixed*/
        i[5]
      ),
      offsetPx: (
        /*offsetPx*/
        i[6]
      ),
      expandDirection: (
        /*expandDirection*/
        i[7]
      ),
      iconBgShape: (
        /*iconBgShape*/
        i[8] ?? "round"
      ),
      tooltip: (
        /*tooltipOptions*/
        i[13]
      )
    }
  }), e.$on(
    "activate",
    /*onActivate*/
    i[18]
  ), {
    c() {
      F(e.$$.fragment);
    },
    m(n, l) {
      N(e, n, l), t = !0;
    },
    p(n, l) {
      const r = {};
      l & /*badge*/
      1 && (r.badge = /*badge*/
      n[0]), l & /*miniVariant*/
      65536 && (r.variant = /*miniVariant*/
      n[16]), l & /*corners*/
      8 && (r.corners = /*corners*/
      n[3]), l & /*interactive*/
      4 && (r.interactive = /*interactive*/
      n[2]), l & /*fixed*/
      32 && (r.fixed = /*fixed*/
      n[5]), l & /*offsetPx*/
      64 && (r.offsetPx = /*offsetPx*/
      n[6]), l & /*expandDirection*/
      128 && (r.expandDirection = /*expandDirection*/
      n[7]), l & /*iconBgShape*/
      256 && (r.iconBgShape = /*iconBgShape*/
      n[8] ?? "round"), l & /*tooltipOptions*/
      8192 && (r.tooltip = /*tooltipOptions*/
      n[13]), e.$set(r);
    },
    i(n) {
      t || (M(e.$$.fragment, n), t = !0);
    },
    o(n) {
      B(e.$$.fragment, n), t = !1;
    },
    d(n) {
      A(e, n);
    }
  };
}
function mn(i) {
  let e, t;
  return e = new gt({
    props: {
      badge: (
        /*badge*/
        i[0]
      ),
      variant: (
        /*monoVariant*/
        i[17]
      ),
      corners: (
        /*corners*/
        i[3]
      ),
      tooltip: (
        /*tooltipOptions*/
        i[13]
      ),
      interactive: (
        /*interactive*/
        i[2]
      )
    }
  }), e.$on(
    "activate",
    /*onActivate*/
    i[18]
  ), {
    c() {
      F(e.$$.fragment);
    },
    m(n, l) {
      N(e, n, l), t = !0;
    },
    p(n, l) {
      const r = {};
      l & /*badge*/
      1 && (r.badge = /*badge*/
      n[0]), l & /*monoVariant*/
      131072 && (r.variant = /*monoVariant*/
      n[17]), l & /*corners*/
      8 && (r.corners = /*corners*/
      n[3]), l & /*tooltipOptions*/
      8192 && (r.tooltip = /*tooltipOptions*/
      n[13]), l & /*interactive*/
      4 && (r.interactive = /*interactive*/
      n[2]), e.$set(r);
    },
    i(n) {
      t || (M(e.$$.fragment, n), t = !0);
    },
    o(n) {
      B(e.$$.fragment, n), t = !1;
    },
    d(n) {
      A(e, n);
    }
  };
}
function vn(i) {
  let e, t, n, l;
  const r = [mn, _n, bn, pn], s = [];
  function c(a, f) {
    return (
      /*type*/
      a[1] === "mono" ? 0 : (
        /*type*/
        a[1] === "mini" ? 1 : (
          /*type*/
          a[1] === "round" ? 2 : 3
        )
      )
    );
  }
  return e = c(i), t = s[e] = r[e](i), {
    c() {
      t.c(), n = E();
    },
    m(a, f) {
      s[e].m(a, f), v(a, n, f), l = !0;
    },
    p(a, [f]) {
      let u = e;
      e = c(a), e === u ? s[e].p(a, f) : (O(), B(s[u], 1, 1, () => {
        s[u] = null;
      }), W(), t = s[e], t ? t.p(a, f) : (t = s[e] = r[e](a), t.c()), M(t, 1), t.m(n.parentNode, n));
    },
    i(a) {
      l || (M(t), l = !0);
    },
    o(a) {
      B(t), l = !1;
    },
    d(a) {
      a && _(n), s[e].d(a);
    }
  };
}
function yn(i) {
  return i === "ring" || i === "double-ring" ? i : "solid";
}
function kn(i, e, t) {
  let n, l, r, s, c;
  const a = Ce();
  let { badge: f } = e, { type: u = "mono" } = e, { interactive: d = !1 } = e, { corners: g = "rounded" } = e, { variant: p = void 0 } = e, { size: y = void 0 } = e, { fixed: z = !1 } = e, { offsetPx: b = 16 } = e, { expandDirection: k = "right" } = e, { iconBgShape: $ = void 0 } = e, { ringText: I = null } = e, { repeat: D = 2 } = e, { separator: H = " • " } = e, { sealFontScale: j = 0.12 } = e, { tooltip: C = void 0 } = e;
  function x(S) {
    a("activate", S.detail);
  }
  return i.$$set = (S) => {
    "badge" in S && t(0, f = S.badge), "type" in S && t(1, u = S.type), "interactive" in S && t(2, d = S.interactive), "corners" in S && t(3, g = S.corners), "variant" in S && t(19, p = S.variant), "size" in S && t(4, y = S.size), "fixed" in S && t(5, z = S.fixed), "offsetPx" in S && t(6, b = S.offsetPx), "expandDirection" in S && t(7, k = S.expandDirection), "iconBgShape" in S && t(8, $ = S.iconBgShape), "ringText" in S && t(9, I = S.ringText), "repeat" in S && t(10, D = S.repeat), "separator" in S && t(11, H = S.separator), "sealFontScale" in S && t(12, j = S.sealFontScale), "tooltip" in S && t(20, C = S.tooltip);
  }, i.$$.update = () => {
    i.$$.dirty & /*variant*/
    524288 && t(17, n = p ?? "filled"), i.$$.dirty & /*variant*/
    524288 && t(16, l = p ?? "outlined"), i.$$.dirty & /*variant*/
    524288 && t(15, r = yn(p)), i.$$.dirty & /*variant*/
    524288 && t(14, s = p ?? "outlined"), i.$$.dirty & /*type, tooltip*/
    1048578 && t(13, c = hn(u, C));
  }, [
    f,
    u,
    d,
    g,
    y,
    z,
    b,
    k,
    $,
    I,
    D,
    H,
    j,
    c,
    s,
    r,
    l,
    n,
    x,
    p,
    C
  ];
}
class _t extends J {
  constructor(e) {
    super(), Y(this, e, kn, vn, U, {
      badge: 0,
      type: 1,
      interactive: 2,
      corners: 3,
      variant: 19,
      size: 4,
      fixed: 5,
      offsetPx: 6,
      expandDirection: 7,
      iconBgShape: 8,
      ringText: 9,
      repeat: 10,
      separator: 11,
      sealFontScale: 12,
      tooltip: 20
    });
  }
  get badge() {
    return this.$$.ctx[0];
  }
  set badge(e) {
    this.$$set({ badge: e }), h();
  }
  get type() {
    return this.$$.ctx[1];
  }
  set type(e) {
    this.$$set({ type: e }), h();
  }
  get interactive() {
    return this.$$.ctx[2];
  }
  set interactive(e) {
    this.$$set({ interactive: e }), h();
  }
  get corners() {
    return this.$$.ctx[3];
  }
  set corners(e) {
    this.$$set({ corners: e }), h();
  }
  get variant() {
    return this.$$.ctx[19];
  }
  set variant(e) {
    this.$$set({ variant: e }), h();
  }
  get size() {
    return this.$$.ctx[4];
  }
  set size(e) {
    this.$$set({ size: e }), h();
  }
  get fixed() {
    return this.$$.ctx[5];
  }
  set fixed(e) {
    this.$$set({ fixed: e }), h();
  }
  get offsetPx() {
    return this.$$.ctx[6];
  }
  set offsetPx(e) {
    this.$$set({ offsetPx: e }), h();
  }
  get expandDirection() {
    return this.$$.ctx[7];
  }
  set expandDirection(e) {
    this.$$set({ expandDirection: e }), h();
  }
  get iconBgShape() {
    return this.$$.ctx[8];
  }
  set iconBgShape(e) {
    this.$$set({ iconBgShape: e }), h();
  }
  get ringText() {
    return this.$$.ctx[9];
  }
  set ringText(e) {
    this.$$set({ ringText: e }), h();
  }
  get repeat() {
    return this.$$.ctx[10];
  }
  set repeat(e) {
    this.$$set({ repeat: e }), h();
  }
  get separator() {
    return this.$$.ctx[11];
  }
  set separator(e) {
    this.$$set({ separator: e }), h();
  }
  get sealFontScale() {
    return this.$$.ctx[12];
  }
  set sealFontScale(e) {
    this.$$set({ sealFontScale: e }), h();
  }
  get tooltip() {
    return this.$$.ctx[20];
  }
  set tooltip(e) {
    this.$$set({ tooltip: e }), h();
  }
}
X(_t, { badge: {}, type: {}, interactive: { type: "Boolean" }, corners: {}, variant: {}, size: {}, fixed: { type: "Boolean" }, offsetPx: {}, expandDirection: {}, iconBgShape: {}, ringText: {}, repeat: {}, separator: {}, sealFontScale: {}, tooltip: {} }, [], [], !0);
const ot = {
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
function me(i) {
  const e = String(i ?? "").replace(/\r\n?/g, `
`).replace(/\\n/g, `
`).trim();
  return e.length ? e : void 0;
}
function wn(i) {
  const e = String(i ?? "").trim();
  return e === "mini" || e === "round" || e === "roundcirculartext" ? e : "mono";
}
function Sn(i) {
  return String(i ?? "").trim().toLowerCase() === "rectangular" ? "rectangular" : "rounded";
}
function Mn(i) {
  return /\bdownload\b/i.test(i) || /\bopen[-\s]*data\b/i.test(i) ? "Click to download" : "Click to interact";
}
function zn(i) {
  return /\bdownload\b/i.test(i) || /\bopen[-\s]*data\b/i.test(i) ? "Download" : "Interactive";
}
function xn(i) {
  const e = {};
  return i.tooltipMode && (i.tooltipMode === "off" ? e.enabled = !1 : i.tooltipMode === "description" ? (e.contentMode = "description", e.enabled = e.enabled ?? !0) : i.tooltipMode === "full" ? (e.contentMode = "labelAndDescription", e.enabled = e.enabled ?? !0) : e.contentMode = "auto"), i.tooltipPlacement && (e.placement = i.tooltipPlacement), Number.isFinite(i.tooltipDelayMs) && (e.openDelayMs = Number(i.tooltipDelayMs)), Number.isFinite(i.tooltipMaxWidthPx) && (e.maxWidthPx = Number(i.tooltipMaxWidthPx)), Object.keys(e).length ? e : void 0;
}
function Pn(i) {
  const e = i.badge ?? {}, t = wn(i.type), n = te(i.color) ?? te(e.color) ?? (i.tone ? ot[i.tone] : void 0) ?? ot.neutral, l = te(i.label) ?? te(e.label) ?? "—", r = me(i.description) ?? me(e.description), s = me(i.hint), c = me(i.actionText) ?? me(e.actionText) ?? s, a = i.actionIcon ?? e.actionIcon ?? null, f = i.icon ?? e.icon ?? null, u = !!i.interactive, d = {
    ...e,
    label: l,
    color: n,
    icon: f ?? void 0,
    description: r,
    actionText: c ?? (u ? Mn(l) : void 0),
    actionIcon: a ?? (u ? zn(l) : void 0)
  }, g = te(e.category) ?? te(e.type);
  return g && (d.category = g, d.type = e.type), {
    badge: d,
    type: t,
    variant: i.variant ?? void 0,
    corners: Sn(i.corners),
    size: Number.isFinite(i.size) ? Number(i.size) : void 0,
    fixed: !!(i.fixed ?? !1),
    offsetPx: Number.isFinite(i.offsetPx) ? Number(i.offsetPx) : 16,
    expandDirection: i.expandDirection || "right",
    iconBgShape: i.iconBgShape ?? void 0,
    ringText: i.ringText ?? null,
    repeat: Number.isFinite(i.repeat) ? Number(i.repeat) : 2,
    separator: te(i.separator) ?? " • ",
    sealFontScale: Number.isFinite(i.sealFontScale) ? Number(i.sealFontScale) : 0.12,
    tooltip: xn(i)
  };
}
function Bn(i) {
  let e, t;
  return e = new _t({
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
      corners: (
        /*normalized*/
        i[1].corners
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
      F(e.$$.fragment);
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
      2 && (r.corners = /*normalized*/
      n[1].corners), l & /*normalized*/
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
      t || (M(e.$$.fragment, n), t = !0);
    },
    o(n) {
      B(e.$$.fragment, n), t = !1;
    },
    d(n) {
      A(e, n);
    }
  };
}
function $n(i, e, t) {
  let n;
  const l = Ce();
  let { badge: r = null } = e, { label: s = null } = e, { tone: c = null } = e, { color: a = null } = e, { icon: f = null } = e, { description: u = null } = e, { hint: d = null } = e, { interactive: g = !1 } = e, { actionText: p = null } = e, { actionIcon: y = null } = e, { type: z = null } = e, { variant: b = null } = e, { corners: k = null } = e, { size: $ = null } = e, { fixed: I = null } = e, { offsetPx: D = null } = e, { expandDirection: H = null } = e, { iconBgShape: j = null } = e, { ringText: C = null } = e, { repeat: x = null } = e, { separator: S = null } = e, { sealFontScale: Z = null } = e, { tooltipMode: pe = null } = e, { tooltipPlacement: L = null } = e, { tooltipDelayMs: R = null } = e, { tooltipMaxWidthPx: be = null } = e;
  function Pe(P) {
    l("badge-activate", P.detail);
  }
  return i.$$set = (P) => {
    "badge" in P && t(3, r = P.badge), "label" in P && t(4, s = P.label), "tone" in P && t(5, c = P.tone), "color" in P && t(6, a = P.color), "icon" in P && t(7, f = P.icon), "description" in P && t(8, u = P.description), "hint" in P && t(9, d = P.hint), "interactive" in P && t(0, g = P.interactive), "actionText" in P && t(10, p = P.actionText), "actionIcon" in P && t(11, y = P.actionIcon), "type" in P && t(12, z = P.type), "variant" in P && t(13, b = P.variant), "corners" in P && t(14, k = P.corners), "size" in P && t(15, $ = P.size), "fixed" in P && t(16, I = P.fixed), "offsetPx" in P && t(17, D = P.offsetPx), "expandDirection" in P && t(18, H = P.expandDirection), "iconBgShape" in P && t(19, j = P.iconBgShape), "ringText" in P && t(20, C = P.ringText), "repeat" in P && t(21, x = P.repeat), "separator" in P && t(22, S = P.separator), "sealFontScale" in P && t(23, Z = P.sealFontScale), "tooltipMode" in P && t(24, pe = P.tooltipMode), "tooltipPlacement" in P && t(25, L = P.tooltipPlacement), "tooltipDelayMs" in P && t(26, R = P.tooltipDelayMs), "tooltipMaxWidthPx" in P && t(27, be = P.tooltipMaxWidthPx);
  }, i.$$.update = () => {
    i.$$.dirty & /*badge, label, tone, color, icon, description, hint, interactive, actionText, actionIcon, type, variant, corners, size, fixed, offsetPx, expandDirection, iconBgShape, ringText, repeat, separator, sealFontScale, tooltipMode, tooltipPlacement, tooltipDelayMs, tooltipMaxWidthPx*/
    268435449 && t(1, n = Pn({
      badge: r,
      label: s,
      tone: c,
      color: a,
      icon: f,
      description: u,
      hint: d,
      interactive: g,
      actionText: p,
      actionIcon: y,
      type: z,
      variant: b,
      corners: k,
      size: $,
      fixed: I,
      offsetPx: D,
      expandDirection: H,
      iconBgShape: j,
      ringText: C,
      repeat: x,
      separator: S,
      sealFontScale: Z,
      tooltipMode: pe,
      tooltipPlacement: L,
      tooltipDelayMs: R,
      tooltipMaxWidthPx: be
    }));
  }, [
    g,
    n,
    Pe,
    r,
    s,
    c,
    a,
    f,
    u,
    d,
    p,
    y,
    z,
    b,
    k,
    $,
    I,
    D,
    H,
    j,
    C,
    x,
    S,
    Z,
    pe,
    L,
    R,
    be
  ];
}
class mt extends J {
  constructor(e) {
    super(), Y(this, e, $n, Bn, U, {
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
      corners: 14,
      size: 15,
      fixed: 16,
      offsetPx: 17,
      expandDirection: 18,
      iconBgShape: 19,
      ringText: 20,
      repeat: 21,
      separator: 22,
      sealFontScale: 23,
      tooltipMode: 24,
      tooltipPlacement: 25,
      tooltipDelayMs: 26,
      tooltipMaxWidthPx: 27
    });
  }
  get badge() {
    return this.$$.ctx[3];
  }
  set badge(e) {
    this.$$set({ badge: e }), h();
  }
  get label() {
    return this.$$.ctx[4];
  }
  set label(e) {
    this.$$set({ label: e }), h();
  }
  get tone() {
    return this.$$.ctx[5];
  }
  set tone(e) {
    this.$$set({ tone: e }), h();
  }
  get color() {
    return this.$$.ctx[6];
  }
  set color(e) {
    this.$$set({ color: e }), h();
  }
  get icon() {
    return this.$$.ctx[7];
  }
  set icon(e) {
    this.$$set({ icon: e }), h();
  }
  get description() {
    return this.$$.ctx[8];
  }
  set description(e) {
    this.$$set({ description: e }), h();
  }
  get hint() {
    return this.$$.ctx[9];
  }
  set hint(e) {
    this.$$set({ hint: e }), h();
  }
  get interactive() {
    return this.$$.ctx[0];
  }
  set interactive(e) {
    this.$$set({ interactive: e }), h();
  }
  get actionText() {
    return this.$$.ctx[10];
  }
  set actionText(e) {
    this.$$set({ actionText: e }), h();
  }
  get actionIcon() {
    return this.$$.ctx[11];
  }
  set actionIcon(e) {
    this.$$set({ actionIcon: e }), h();
  }
  get type() {
    return this.$$.ctx[12];
  }
  set type(e) {
    this.$$set({ type: e }), h();
  }
  get variant() {
    return this.$$.ctx[13];
  }
  set variant(e) {
    this.$$set({ variant: e }), h();
  }
  get corners() {
    return this.$$.ctx[14];
  }
  set corners(e) {
    this.$$set({ corners: e }), h();
  }
  get size() {
    return this.$$.ctx[15];
  }
  set size(e) {
    this.$$set({ size: e }), h();
  }
  get fixed() {
    return this.$$.ctx[16];
  }
  set fixed(e) {
    this.$$set({ fixed: e }), h();
  }
  get offsetPx() {
    return this.$$.ctx[17];
  }
  set offsetPx(e) {
    this.$$set({ offsetPx: e }), h();
  }
  get expandDirection() {
    return this.$$.ctx[18];
  }
  set expandDirection(e) {
    this.$$set({ expandDirection: e }), h();
  }
  get iconBgShape() {
    return this.$$.ctx[19];
  }
  set iconBgShape(e) {
    this.$$set({ iconBgShape: e }), h();
  }
  get ringText() {
    return this.$$.ctx[20];
  }
  set ringText(e) {
    this.$$set({ ringText: e }), h();
  }
  get repeat() {
    return this.$$.ctx[21];
  }
  set repeat(e) {
    this.$$set({ repeat: e }), h();
  }
  get separator() {
    return this.$$.ctx[22];
  }
  set separator(e) {
    this.$$set({ separator: e }), h();
  }
  get sealFontScale() {
    return this.$$.ctx[23];
  }
  set sealFontScale(e) {
    this.$$set({ sealFontScale: e }), h();
  }
  get tooltipMode() {
    return this.$$.ctx[24];
  }
  set tooltipMode(e) {
    this.$$set({ tooltipMode: e }), h();
  }
  get tooltipPlacement() {
    return this.$$.ctx[25];
  }
  set tooltipPlacement(e) {
    this.$$set({ tooltipPlacement: e }), h();
  }
  get tooltipDelayMs() {
    return this.$$.ctx[26];
  }
  set tooltipDelayMs(e) {
    this.$$set({ tooltipDelayMs: e }), h();
  }
  get tooltipMaxWidthPx() {
    return this.$$.ctx[27];
  }
  set tooltipMaxWidthPx(e) {
    this.$$set({ tooltipMaxWidthPx: e }), h();
  }
}
customElements.define("vis-badge", X(mt, { badge: { type: "Object" }, label: {}, tone: {}, color: {}, icon: {}, description: {}, hint: {}, interactive: { type: "Boolean" }, actionText: {}, actionIcon: {}, type: {}, variant: {}, corners: { type: "String" }, size: { type: "Number" }, fixed: { type: "Boolean" }, offsetPx: { type: "Number" }, expandDirection: {}, iconBgShape: { type: "String", attribute: "icon-bg-shape" }, ringText: {}, repeat: { type: "Number" }, separator: {}, sealFontScale: { type: "Number" }, tooltipMode: {}, tooltipPlacement: {}, tooltipDelayMs: { type: "Number", attribute: "tooltip-delay-ms" }, tooltipMaxWidthPx: { type: "Number", attribute: "tooltip-max-width-px" } }, [], [], !0));
if (!customElements.get("vis-badge")) {
  const i = mt.element;
  customElements.define("vis-badge", i);
}
