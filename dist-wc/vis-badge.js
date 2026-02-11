var at = Object.defineProperty;
var ft = (n, e, t) => e in n ? at(n, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : n[e] = t;
var F = (n, e, t) => ft(n, typeof e != "symbol" ? e + "" : e, t);
function ae() {
}
function ct(n, e) {
  for (const t in e) n[t] = e[t];
  return (
    /** @type {T & S} */
    n
  );
}
function We(n) {
  return n();
}
function ye() {
  return /* @__PURE__ */ Object.create(null);
}
function K(n) {
  n.forEach(We);
}
function Ue(n) {
  return typeof n == "function";
}
function Z(n, e) {
  return n != n ? e == e : n !== e || n && typeof n == "object" || typeof n == "function";
}
function ut(n) {
  return Object.keys(n).length === 0;
}
function he(n, e, t, i) {
  if (n) {
    const l = Xe(n, e, t, i);
    return n[0](l);
  }
}
function Xe(n, e, t, i) {
  return n[1] && i ? ct(t.ctx.slice(), n[1](i(e))) : t.ctx;
}
function ge(n, e, t, i) {
  if (n[2] && i) {
    const l = n[2](i(t));
    if (e.dirty === void 0)
      return l;
    if (typeof l == "object") {
      const r = [], o = Math.max(e.dirty.length, l.length);
      for (let a = 0; a < o; a += 1)
        r[a] = e.dirty[a] | l[a];
      return r;
    }
    return e.dirty | l;
  }
  return e.dirty;
}
function pe(n, e, t, i, l, r) {
  if (l) {
    const o = Xe(e, t, i, r);
    n.p(o, l);
  }
}
function be(n) {
  if (n.ctx.length > 32) {
    const e = [], t = n.ctx.length / 32;
    for (let i = 0; i < t; i++)
      e[i] = -1;
    return e;
  }
  return -1;
}
const dt = typeof window < "u" ? window : typeof globalThis < "u" ? globalThis : (
  // @ts-ignore Node typings have this
  global
);
function m(n, e) {
  n.appendChild(e);
}
function le(n, e, t) {
  const i = ht(n);
  if (!i.getElementById(e)) {
    const l = B("style");
    l.id = e, l.textContent = t, gt(i, l);
  }
}
function ht(n) {
  if (!n) return document;
  const e = n.getRootNode ? n.getRootNode() : n.ownerDocument;
  return e && /** @type {ShadowRoot} */
  e.host ? (
    /** @type {ShadowRoot} */
    e
  ) : n.ownerDocument;
}
function gt(n, e) {
  return m(
    /** @type {Document} */
    n.head || n,
    e
  ), e.sheet;
}
function y(n, e, t) {
  n.insertBefore(e, t || null);
}
function v(n) {
  n.parentNode && n.parentNode.removeChild(n);
}
function B(n) {
  return document.createElement(n);
}
function k(n) {
  return document.createElementNS("http://www.w3.org/2000/svg", n);
}
function H(n) {
  return document.createTextNode(n);
}
function V() {
  return H(" ");
}
function O() {
  return H("");
}
function A(n, e, t, i) {
  return n.addEventListener(e, t, i), () => n.removeEventListener(e, t, i);
}
function s(n, e, t) {
  t == null ? n.removeAttribute(e) : n.getAttribute(e) !== t && n.setAttribute(e, t);
}
function pt(n) {
  return Array.from(n.childNodes);
}
function Q(n, e) {
  e = "" + e, n.data !== e && (n.data = /** @type {string} */
  e);
}
function se(n, e, t, i) {
  t == null ? n.style.removeProperty(e) : n.style.setProperty(e, t, "");
}
function bt(n) {
  const e = {};
  return n.childNodes.forEach(
    /** @param {Element} node */
    (t) => {
      e[t.slot || "default"] = !0;
    }
  ), e;
}
let ke;
function oe(n) {
  ke = n;
}
const ie = [], _e = [];
let ne = [];
const $e = [], Ge = /* @__PURE__ */ Promise.resolve();
let ve = !1;
function Je() {
  ve || (ve = !0, Ge.then(_));
}
function _t() {
  return Je(), Ge;
}
function we(n) {
  ne.push(n);
}
const me = /* @__PURE__ */ new Set();
let te = 0;
function _() {
  if (te !== 0)
    return;
  const n = ke;
  do {
    try {
      for (; te < ie.length; ) {
        const e = ie[te];
        te++, oe(e), mt(e.$$);
      }
    } catch (e) {
      throw ie.length = 0, te = 0, e;
    }
    for (oe(null), ie.length = 0, te = 0; _e.length; ) _e.pop()();
    for (let e = 0; e < ne.length; e += 1) {
      const t = ne[e];
      me.has(t) || (me.add(t), t());
    }
    ne.length = 0;
  } while (ie.length);
  for (; $e.length; )
    $e.pop()();
  ve = !1, me.clear(), oe(n);
}
function mt(n) {
  if (n.fragment !== null) {
    n.update(), K(n.before_update);
    const e = n.dirty;
    n.dirty = [-1], n.fragment && n.fragment.p(n.ctx, e), n.after_update.forEach(we);
  }
}
function vt(n) {
  const e = [], t = [];
  ne.forEach((i) => n.indexOf(i) === -1 ? e.push(i) : t.push(i)), t.forEach((i) => i()), ne = e;
}
const ue = /* @__PURE__ */ new Set();
let Y;
function I() {
  Y = {
    r: 0,
    c: [],
    p: Y
    // parent group
  };
}
function L() {
  Y.r || K(Y.c), Y = Y.p;
}
function $(n, e) {
  n && n.i && (ue.delete(n), n.i(e));
}
function C(n, e, t, i) {
  if (n && n.o) {
    if (ue.has(n)) return;
    ue.add(n), Y.c.push(() => {
      ue.delete(n), i && (t && n.d(1), i());
    }), n.o(e);
  } else i && i();
}
function xe(n) {
  return (n == null ? void 0 : n.length) !== void 0 ? n : Array.from(n);
}
function wt(n, e) {
  n.d(1), e.delete(n.key);
}
function kt(n, e, t, i, l, r, o, a, f, c, u, d) {
  let p = n.length, h = r.length, g = p;
  const x = {};
  for (; g--; ) x[n[g].key] = g;
  const T = [], b = /* @__PURE__ */ new Map(), S = /* @__PURE__ */ new Map(), z = [];
  for (g = h; g--; ) {
    const w = d(l, r, g), D = t(w);
    let j = o.get(D);
    j ? z.push(() => j.p(w, e)) : (j = c(D, w), j.c()), b.set(D, T[g] = j), D in x && S.set(D, Math.abs(g - x[D]));
  }
  const M = /* @__PURE__ */ new Set(), q = /* @__PURE__ */ new Set();
  function X(w) {
    $(w, 1), w.m(a, u), o.set(w.key, w), u = w.first, h--;
  }
  for (; p && h; ) {
    const w = T[h - 1], D = n[p - 1], j = w.key, ee = D.key;
    w === D ? (u = w.first, p--, h--) : b.has(ee) ? !o.has(j) || M.has(j) ? X(w) : q.has(ee) ? p-- : S.get(j) > S.get(ee) ? (q.add(j), X(w)) : (M.add(ee), p--) : (f(D, o), p--);
  }
  for (; p--; ) {
    const w = n[p];
    b.has(w.key) || f(w, o);
  }
  for (; h; ) X(T[h - 1]);
  return K(z), T;
}
function E(n) {
  n && n.c();
}
function P(n, e, t) {
  const { fragment: i, after_update: l } = n.$$;
  i && i.m(e, t), we(() => {
    const r = n.$$.on_mount.map(We).filter(Ue);
    n.$$.on_destroy ? n.$$.on_destroy.push(...r) : K(r), n.$$.on_mount = [];
  }), l.forEach(we);
}
function N(n, e) {
  const t = n.$$;
  t.fragment !== null && (vt(t.after_update), K(t.on_destroy), t.fragment && t.fragment.d(e), t.on_destroy = t.fragment = null, t.ctx = []);
}
function yt(n, e) {
  n.$$.dirty[0] === -1 && (ie.push(n), Je(), n.$$.dirty.fill(0)), n.$$.dirty[e / 31 | 0] |= 1 << e % 31;
}
function R(n, e, t, i, l, r, o = null, a = [-1]) {
  const f = ke;
  oe(n);
  const c = n.$$ = {
    fragment: null,
    ctx: [],
    // state
    props: r,
    update: ae,
    not_equal: l,
    bound: ye(),
    // lifecycle
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(e.context || (f ? f.$$.context : [])),
    // everything else
    callbacks: ye(),
    dirty: a,
    skip_bound: !1,
    root: e.target || f.$$.root
  };
  o && o(c.root);
  let u = !1;
  if (c.ctx = t ? t(n, e.props || {}, (d, p, ...h) => {
    const g = h.length ? h[0] : p;
    return c.ctx && l(c.ctx[d], c.ctx[d] = g) && (!c.skip_bound && c.bound[d] && c.bound[d](g), u && yt(n, d)), p;
  }) : [], c.update(), u = !0, K(c.before_update), c.fragment = i ? i(c.ctx) : !1, e.target) {
    if (e.hydrate) {
      const d = pt(e.target);
      c.fragment && c.fragment.l(d), d.forEach(v);
    } else
      c.fragment && c.fragment.c();
    e.intro && $(n.$$.fragment), P(n, e.target, e.anchor), _();
  }
  oe(f);
}
let Ye;
typeof HTMLElement == "function" && (Ye = class extends HTMLElement {
  constructor(e, t, i) {
    super();
    /** The Svelte component constructor */
    F(this, "$$ctor");
    /** Slots */
    F(this, "$$s");
    /** The Svelte component instance */
    F(this, "$$c");
    /** Whether or not the custom element is connected */
    F(this, "$$cn", !1);
    /** Component props data */
    F(this, "$$d", {});
    /** `true` if currently in the process of reflecting component props back to attributes */
    F(this, "$$r", !1);
    /** @type {Record<string, CustomElementPropDefinition>} Props definition (name, reflected, type etc) */
    F(this, "$$p_d", {});
    /** @type {Record<string, Function[]>} Event listeners */
    F(this, "$$l", {});
    /** @type {Map<Function, Function>} Event listener unsubscribe functions */
    F(this, "$$l_u", /* @__PURE__ */ new Map());
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
      let t = function(o) {
        return () => {
          let a;
          return {
            c: function() {
              a = B("slot"), o !== "default" && s(a, "name", o);
            },
            /**
             * @param {HTMLElement} target
             * @param {HTMLElement} [anchor]
             */
            m: function(u, d) {
              y(u, a, d);
            },
            d: function(u) {
              u && v(a);
            }
          };
        };
      };
      var e = t;
      if (await Promise.resolve(), !this.$$cn || this.$$c)
        return;
      const i = {}, l = bt(this);
      for (const o of this.$$s)
        o in l && (i[o] = [t(o)]);
      for (const o of this.attributes) {
        const a = this.$$g_p(o.name);
        a in this.$$d || (this.$$d[a] = de(a, o.value, this.$$p_d, "toProp"));
      }
      for (const o in this.$$p_d)
        !(o in this.$$d) && this[o] !== void 0 && (this.$$d[o] = this[o], delete this[o]);
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
        for (const o in this.$$p_d)
          if (this.$$d[o] = this.$$c.$$.ctx[this.$$c.$$.props[o]], this.$$p_d[o].reflect) {
            const a = de(
              o,
              this.$$d[o],
              this.$$p_d,
              "toAttribute"
            );
            a == null ? this.removeAttribute(this.$$p_d[o].attribute || o) : this.setAttribute(this.$$p_d[o].attribute || o, a);
          }
        this.$$r = !1;
      };
      this.$$c.$$.after_update.push(r), r();
      for (const o in this.$$l)
        for (const a of this.$$l[o]) {
          const f = this.$$c.$on(o, a);
          this.$$l_u.set(a, f);
        }
      this.$$l = {};
    }
  }
  // We don't need this when working within Svelte code, but for compatibility of people using this outside of Svelte
  // and setting attributes through setAttribute etc, this is helpful
  attributeChangedCallback(e, t, i) {
    var l;
    this.$$r || (e = this.$$g_p(e), this.$$d[e] = de(e, i, this.$$p_d, "toProp"), (l = this.$$c) == null || l.$set({ [e]: this.$$d[e] }));
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
function de(n, e, t, i) {
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
function W(n, e, t, i, l, r) {
  let o = class extends Ye {
    constructor() {
      super(n, t, l), this.$$p_d = e;
    }
    static get observedAttributes() {
      return Object.keys(e).map(
        (a) => (e[a].attribute || a).toLowerCase()
      );
    }
  };
  return Object.keys(e).forEach((a) => {
    Object.defineProperty(o.prototype, a, {
      get() {
        return this.$$c && a in this.$$c ? this.$$c[a] : this.$$d[a];
      },
      set(f) {
        var c;
        f = de(a, f, e), this.$$d[a] = f, (c = this.$$c) == null || c.$set({ [a]: f });
      }
    });
  }), i.forEach((a) => {
    Object.defineProperty(o.prototype, a, {
      get() {
        var f;
        return (f = this.$$c) == null ? void 0 : f[a];
      }
    });
  }), r && (o = r(o)), n.element = /** @type {any} */
  o, o;
}
class U {
  constructor() {
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    F(this, "$$");
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    F(this, "$$set");
  }
  /** @returns {void} */
  $destroy() {
    N(this, 1), this.$destroy = ae;
  }
  /**
   * @template {Extract<keyof Events, string>} K
   * @param {K} type
   * @param {((e: Events[K]) => void) | null | undefined} callback
   * @returns {() => void}
   */
  $on(e, t) {
    if (!Ue(t))
      return ae;
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
    this.$$set && !ut(e) && (this.$$.skip_bound = !0, this.$$set(e), this.$$.skip_bound = !1);
  }
}
const $t = "4";
typeof window < "u" && (window.__svelte || (window.__svelte = { v: /* @__PURE__ */ new Set() })).v.add($t);
const { window: Se } = dt;
function xt(n) {
  le(n, "svelte-10mh9hx", ".tooltipWrap.svelte-10mh9hx.svelte-10mh9hx{position:relative;display:inline-flex;align-items:center}.trigger.svelte-10mh9hx.svelte-10mh9hx{display:inline-flex;align-items:center}.tooltip.svelte-10mh9hx.svelte-10mh9hx{display:block;position:fixed;z-index:2000;width:max-content;max-width:min(280px, 64vw);padding:7px 9px;border-radius:9px;border:1px solid rgba(17, 24, 39, 0.14);background:rgba(17, 24, 39, 0.96);color:#ffffff;box-shadow:0 10px 24px rgba(17, 24, 39, 0.2);font-size:12px;line-height:1.3;opacity:0;visibility:hidden;transform:translateY(-6px);pointer-events:none;transition:opacity 130ms ease, transform 130ms ease}.tooltip.open.svelte-10mh9hx.svelte-10mh9hx{opacity:1;visibility:visible;transform:translateY(0);pointer-events:auto}.arrow.svelte-10mh9hx.svelte-10mh9hx{position:absolute;width:8px;height:8px;background:rgba(17, 24, 39, 0.96);border-left:1px solid rgba(17, 24, 39, 0.14);border-top:1px solid rgba(17, 24, 39, 0.14);transform:rotate(45deg)}.tooltip.top.svelte-10mh9hx .arrow.svelte-10mh9hx{bottom:-4px}.tooltip.bottom.svelte-10mh9hx .arrow.svelte-10mh9hx{top:-4px;transform:rotate(225deg)}.tooltip.left.svelte-10mh9hx .arrow.svelte-10mh9hx{right:-4px;transform:rotate(135deg)}.tooltip.right.svelte-10mh9hx .arrow.svelte-10mh9hx{left:-4px;transform:rotate(-45deg)}");
}
const St = (n) => ({}), ze = (n) => ({}), zt = (n) => ({}), Me = (n) => ({});
function Mt(n) {
  let e, t, i, l, r, o, a, f, c, u, d, p;
  const h = (
    /*#slots*/
    n[12].trigger
  ), g = he(
    h,
    n,
    /*$$scope*/
    n[11],
    Me
  ), x = (
    /*#slots*/
    n[12].content
  ), T = he(
    x,
    n,
    /*$$scope*/
    n[11],
    ze
  );
  return {
    c() {
      e = B("span"), t = B("span"), g && g.c(), i = V(), l = B("span"), r = B("span"), T && T.c(), o = V(), a = B("span"), s(t, "class", "trigger svelte-10mh9hx"), s(r, "class", "content"), s(a, "class", "arrow svelte-10mh9hx"), s(a, "aria-hidden", "true"), s(
        a,
        "style",
        /*arrowStyle*/
        n[5]
      ), s(l, "class", f = "tooltip " + /*open*/
      (n[0] ? "open" : "") + " " + /*effectivePlacement*/
      n[3] + " svelte-10mh9hx"), s(l, "role", "tooltip"), s(l, "aria-hidden", c = !/*open*/
      n[0]), s(
        l,
        "style",
        /*tooltipStyle*/
        n[4]
      ), s(e, "class", "tooltipWrap svelte-10mh9hx"), s(e, "role", "group");
    },
    m(b, S) {
      y(b, e, S), m(e, t), g && g.m(t, null), n[13](t), m(e, i), m(e, l), m(l, r), T && T.m(r, null), m(l, o), m(l, a), n[14](l), u = !0, d || (p = [
        A(
          Se,
          "resize",
          /*onWindowChange*/
          n[8]
        ),
        A(
          Se,
          "scroll",
          /*onWindowChange*/
          n[8]
        ),
        A(
          e,
          "mouseenter",
          /*onEnter*/
          n[6]
        ),
        A(
          e,
          "mouseleave",
          /*onLeave*/
          n[7]
        ),
        A(
          e,
          "focusin",
          /*onEnter*/
          n[6]
        ),
        A(
          e,
          "focusout",
          /*onLeave*/
          n[7]
        )
      ], d = !0);
    },
    p(b, [S]) {
      g && g.p && (!u || S & /*$$scope*/
      2048) && pe(
        g,
        h,
        b,
        /*$$scope*/
        b[11],
        u ? ge(
          h,
          /*$$scope*/
          b[11],
          S,
          zt
        ) : be(
          /*$$scope*/
          b[11]
        ),
        Me
      ), T && T.p && (!u || S & /*$$scope*/
      2048) && pe(
        T,
        x,
        b,
        /*$$scope*/
        b[11],
        u ? ge(
          x,
          /*$$scope*/
          b[11],
          S,
          St
        ) : be(
          /*$$scope*/
          b[11]
        ),
        ze
      ), (!u || S & /*arrowStyle*/
      32) && s(
        a,
        "style",
        /*arrowStyle*/
        b[5]
      ), (!u || S & /*open, effectivePlacement*/
      9 && f !== (f = "tooltip " + /*open*/
      (b[0] ? "open" : "") + " " + /*effectivePlacement*/
      b[3] + " svelte-10mh9hx")) && s(l, "class", f), (!u || S & /*open*/
      1 && c !== (c = !/*open*/
      b[0])) && s(l, "aria-hidden", c), (!u || S & /*tooltipStyle*/
      16) && s(
        l,
        "style",
        /*tooltipStyle*/
        b[4]
      );
    },
    i(b) {
      u || ($(g, b), $(T, b), u = !0);
    },
    o(b) {
      C(g, b), C(T, b), u = !1;
    },
    d(b) {
      b && v(e), g && g.d(b), n[13](null), T && T.d(b), n[14](null), d = !1, K(p);
    }
  };
}
const G = 10, J = 8;
function ce(n, e, t) {
  return Math.max(e, Math.min(t, n));
}
function Ct(n, e, t) {
  const i = window.innerWidth, l = window.innerHeight, r = e.top - G - t.height >= J, o = e.bottom + G + t.height <= l - J, a = e.left - G - t.width >= J, f = e.right + G + t.width <= i - J;
  return n === "top" && !r && o ? "bottom" : n === "bottom" && !o && r ? "top" : n === "left" && !a && f ? "right" : n === "right" && !f && a ? "left" : n;
}
function Bt(n, e, t) {
  let { $$slots: i = {}, $$scope: l } = e, { placement: r = "top" } = e, { openDelayMs: o = 80 } = e, a = !1, f = null, c = null, u = null, d = r, p = "", h = "";
  function g() {
    f && clearTimeout(f), f = setTimeout(() => t(0, a = !0), o);
  }
  function x() {
    f && clearTimeout(f), f = null, t(0, a = !1);
  }
  async function T() {
    if (!a || !c || !u) return;
    await _t();
    const M = c.getBoundingClientRect(), q = u.getBoundingClientRect(), X = window.innerWidth, w = window.innerHeight;
    t(3, d = Ct(r, M, q));
    let D = 0, j = 0;
    d === "top" ? (j = M.top - G - q.height, D = M.left + M.width / 2 - q.width / 2) : d === "bottom" ? (j = M.bottom + G, D = M.left + M.width / 2 - q.width / 2) : d === "left" ? (j = M.top + M.height / 2 - q.height / 2, D = M.left - G - q.width) : (j = M.top + M.height / 2 - q.height / 2, D = M.right + G), D = ce(D, J, X - q.width - J), j = ce(j, J, w - q.height - J);
    const ee = M.left + M.width / 2, rt = M.top + M.height / 2, st = ce(ee - D - 4, 10, q.width - 10), ot = ce(rt - j - 4, 10, q.height - 10);
    t(5, h = d === "top" || d === "bottom" ? `left:${st}px;` : `top:${ot}px;`), t(4, p = `left:${Math.round(D)}px;top:${Math.round(j)}px;`);
  }
  function b() {
    T();
  }
  function S(M) {
    _e[M ? "unshift" : "push"](() => {
      c = M, t(1, c);
    });
  }
  function z(M) {
    _e[M ? "unshift" : "push"](() => {
      u = M, t(2, u);
    });
  }
  return n.$$set = (M) => {
    "placement" in M && t(9, r = M.placement), "openDelayMs" in M && t(10, o = M.openDelayMs), "$$scope" in M && t(11, l = M.$$scope);
  }, n.$$.update = () => {
    n.$$.dirty & /*open*/
    1 && a && T(), n.$$.dirty & /*open, placement*/
    513 && (a || (t(4, p = ""), t(5, h = ""), t(3, d = r)));
  }, [
    a,
    c,
    u,
    d,
    p,
    h,
    g,
    x,
    b,
    r,
    o,
    l,
    i,
    S,
    z
  ];
}
class Ke extends U {
  constructor(e) {
    super(), R(this, e, Bt, Mt, Z, { placement: 9, openDelayMs: 10 }, xt);
  }
  get placement() {
    return this.$$.ctx[9];
  }
  set placement(e) {
    this.$$set({ placement: e }), _();
  }
  get openDelayMs() {
    return this.$$.ctx[10];
  }
  set openDelayMs(e) {
    this.$$set({ openDelayMs: e }), _();
  }
}
W(Ke, { placement: {}, openDelayMs: {} }, ["trigger", "content"], [], !0);
function Tt(n) {
  let e;
  return {
    c() {
      e = B("span"), se(e, "display", "inline-block"), se(
        e,
        "width",
        /*size*/
        n[1] + "px"
      ), se(
        e,
        "height",
        /*size*/
        n[1] + "px"
      ), s(e, "aria-hidden", "true");
    },
    m(t, i) {
      y(t, e, i);
    },
    p(t, i) {
      i & /*size*/
      2 && se(
        e,
        "width",
        /*size*/
        t[1] + "px"
      ), i & /*size*/
      2 && se(
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
function Dt(n) {
  let e, t, i, l, r, o, a = (
    /*bg*/
    n[2] && Ce(n)
  );
  return {
    c() {
      e = k("svg"), a && a.c(), t = k("g"), i = k("path"), l = k("path"), r = k("path"), s(i, "d", "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"), s(l, "d", "M7 10l5 5 5-5"), s(r, "d", "M12 15V3"), s(t, "transform", "translate(12 12) scale(0.68) translate(-12 -12)"), s(
        e,
        "width",
        /*size*/
        n[1]
      ), s(
        e,
        "height",
        /*size*/
        n[1]
      ), s(e, "viewBox", "0 0 24 24"), s(e, "fill", "none"), s(e, "aria-hidden", "true"), s(e, "stroke", o = /*fg*/
      n[3] ?? "currentColor"), s(e, "stroke-width", "2"), s(e, "stroke-linecap", "round"), s(e, "stroke-linejoin", "round");
    },
    m(f, c) {
      y(f, e, c), a && a.m(e, null), m(e, t), m(t, i), m(t, l), m(t, r);
    },
    p(f, c) {
      /*bg*/
      f[2] ? a ? a.p(f, c) : (a = Ce(f), a.c(), a.m(e, t)) : a && (a.d(1), a = null), c & /*size*/
      2 && s(
        e,
        "width",
        /*size*/
        f[1]
      ), c & /*size*/
      2 && s(
        e,
        "height",
        /*size*/
        f[1]
      ), c & /*fg*/
      8 && o !== (o = /*fg*/
      f[3] ?? "currentColor") && s(e, "stroke", o);
    },
    d(f) {
      f && v(e), a && a.d();
    }
  };
}
function jt(n) {
  let e, t, i, l, r, o;
  return {
    c() {
      e = k("svg"), t = k("g"), i = k("path"), r = k("path"), s(i, "d", "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"), s(i, "fill", l = /*bg*/
      n[2] ?? "none"), s(
        i,
        "opacity",
        /*bgOpacity*/
        n[4]
      ), s(r, "d", "m9 12 2 2 4-4"), s(t, "transform", "translate(12 12) scale(0.86) translate(-12 -12)"), s(
        e,
        "width",
        /*size*/
        n[1]
      ), s(
        e,
        "height",
        /*size*/
        n[1]
      ), s(e, "viewBox", "0 0 24 24"), s(e, "fill", "none"), s(e, "aria-hidden", "true"), s(e, "stroke", o = /*fg*/
      n[3] ?? "currentColor"), s(e, "stroke-width", "2"), s(e, "stroke-linecap", "round"), s(e, "stroke-linejoin", "round");
    },
    m(a, f) {
      y(a, e, f), m(e, t), m(t, i), m(t, r);
    },
    p(a, f) {
      f & /*bg*/
      4 && l !== (l = /*bg*/
      a[2] ?? "none") && s(i, "fill", l), f & /*bgOpacity*/
      16 && s(
        i,
        "opacity",
        /*bgOpacity*/
        a[4]
      ), f & /*size*/
      2 && s(
        e,
        "width",
        /*size*/
        a[1]
      ), f & /*size*/
      2 && s(
        e,
        "height",
        /*size*/
        a[1]
      ), f & /*fg*/
      8 && o !== (o = /*fg*/
      a[3] ?? "currentColor") && s(e, "stroke", o);
    },
    d(a) {
      a && v(e);
    }
  };
}
function qt(n) {
  let e, t, i, l, r, o;
  function a(u, d) {
    return (
      /*bg*/
      u[2] ? Zt : Vt
    );
  }
  let f = a(n), c = f(n);
  return {
    c() {
      e = k("svg"), c.c(), t = k("g"), i = k("ellipse"), l = k("path"), r = k("path"), s(i, "cx", "12"), s(i, "cy", "5"), s(i, "rx", "9"), s(i, "ry", "3"), s(l, "d", "M3 5v14c0 1.7 4 3 9 3s9-1.3 9-3V5"), s(r, "d", "M3 12c0 1.7 4 3 9 3s9-1.3 9-3"), s(t, "transform", "translate(12 12) scale(0.68) translate(-12 -12)"), s(
        e,
        "width",
        /*size*/
        n[1]
      ), s(
        e,
        "height",
        /*size*/
        n[1]
      ), s(e, "viewBox", "0 0 24 24"), s(e, "fill", "none"), s(e, "aria-hidden", "true"), s(e, "stroke", o = /*fg*/
      n[3] ?? "currentColor"), s(e, "stroke-width", "2"), s(e, "stroke-linecap", "round"), s(e, "stroke-linejoin", "round");
    },
    m(u, d) {
      y(u, e, d), c.m(e, null), m(e, t), m(t, i), m(t, l), m(t, r);
    },
    p(u, d) {
      f === (f = a(u)) && c ? c.p(u, d) : (c.d(1), c = f(u), c && (c.c(), c.m(e, t))), d & /*size*/
      2 && s(
        e,
        "width",
        /*size*/
        u[1]
      ), d & /*size*/
      2 && s(
        e,
        "height",
        /*size*/
        u[1]
      ), d & /*fg*/
      8 && o !== (o = /*fg*/
      u[3] ?? "currentColor") && s(e, "stroke", o);
    },
    d(u) {
      u && v(e), c.d();
    }
  };
}
function Pt(n) {
  let e, t, i, l, r, o, a;
  function f(d, p) {
    return (
      /*bg*/
      d[2] ? Ut : Wt
    );
  }
  let c = f(n), u = c(n);
  return {
    c() {
      e = k("svg"), u.c(), t = k("g"), i = k("polyline"), l = k("polyline"), r = k("line"), o = k("line"), s(i, "points", "15 3 21 3 21 9"), s(l, "points", "9 21 3 21 3 15"), s(r, "x1", "21"), s(r, "y1", "3"), s(r, "x2", "14"), s(r, "y2", "10"), s(o, "x1", "3"), s(o, "y1", "21"), s(o, "x2", "10"), s(o, "y2", "14"), s(t, "transform", "translate(12 12) scale(0.68) translate(-12 -12)"), s(
        e,
        "width",
        /*size*/
        n[1]
      ), s(
        e,
        "height",
        /*size*/
        n[1]
      ), s(e, "viewBox", "0 0 24 24"), s(e, "fill", "none"), s(e, "aria-hidden", "true"), s(e, "stroke", a = /*fg*/
      n[3] ?? "currentColor"), s(e, "stroke-width", "2"), s(e, "stroke-linecap", "round"), s(e, "stroke-linejoin", "round");
    },
    m(d, p) {
      y(d, e, p), u.m(e, null), m(e, t), m(t, i), m(t, l), m(t, r), m(t, o);
    },
    p(d, p) {
      c === (c = f(d)) && u ? u.p(d, p) : (u.d(1), u = c(d), u && (u.c(), u.m(e, t))), p & /*size*/
      2 && s(
        e,
        "width",
        /*size*/
        d[1]
      ), p & /*size*/
      2 && s(
        e,
        "height",
        /*size*/
        d[1]
      ), p & /*fg*/
      8 && a !== (a = /*fg*/
      d[3] ?? "currentColor") && s(e, "stroke", a);
    },
    d(d) {
      d && v(e), u.d();
    }
  };
}
function Nt(n) {
  let e, t, i, l, r, o, a, f;
  function c(p, h) {
    return (
      /*bg*/
      p[2] ? Yt : Jt
    );
  }
  let u = c(n), d = u(n);
  return {
    c() {
      e = k("svg"), d.c(), t = k("g"), i = k("path"), l = k("path"), r = k("path"), o = k("path"), a = k("path"), s(i, "d", "M14 4.1 12 6"), s(l, "d", "m5.1 8-2.9-.8"), s(r, "d", "m6 12-1.9 2"), s(o, "d", "M7.2 2.2 8 5.1"), s(a, "d", "M9.037 9.69a.498.498 0 0 1 .653-.653l11 4.5a.5.5 0 0 1-.074.949l-4.349 1.041a1 1 0 0 0-.74.739l-1.04 4.35a.5.5 0 0 1-.95.074z"), s(t, "transform", "translate(12 12) scale(0.68) translate(-12 -12)"), s(
        e,
        "width",
        /*size*/
        n[1]
      ), s(
        e,
        "height",
        /*size*/
        n[1]
      ), s(e, "viewBox", "0 0 24 24"), s(e, "fill", "none"), s(e, "aria-hidden", "true"), s(e, "stroke", f = /*fg*/
      n[3] ?? "currentColor"), s(e, "stroke-width", "2"), s(e, "stroke-linecap", "round"), s(e, "stroke-linejoin", "round");
    },
    m(p, h) {
      y(p, e, h), d.m(e, null), m(e, t), m(t, i), m(t, l), m(t, r), m(t, o), m(t, a);
    },
    p(p, h) {
      u === (u = c(p)) && d ? d.p(p, h) : (d.d(1), d = u(p), d && (d.c(), d.m(e, t))), h & /*size*/
      2 && s(
        e,
        "width",
        /*size*/
        p[1]
      ), h & /*size*/
      2 && s(
        e,
        "height",
        /*size*/
        p[1]
      ), h & /*fg*/
      8 && f !== (f = /*fg*/
      p[3] ?? "currentColor") && s(e, "stroke", f);
    },
    d(p) {
      p && v(e), d.d();
    }
  };
}
function Et(n) {
  let e, t, i, l, r;
  function o(c, u) {
    return (
      /*bg*/
      c[2] ? ti : ei
    );
  }
  let a = o(n), f = a(n);
  return {
    c() {
      e = k("svg"), f.c(), t = k("path"), l = k("path"), s(t, "d", "M12 10.2a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"), s(t, "fill", i = /*fg*/
      n[3] ?? "currentColor"), s(l, "d", "M11 11.5h2V18h-2v-6.5Z"), s(l, "fill", r = /*fg*/
      n[3] ?? "currentColor"), s(
        e,
        "width",
        /*size*/
        n[1]
      ), s(
        e,
        "height",
        /*size*/
        n[1]
      ), s(e, "viewBox", "0 0 24 24"), s(e, "fill", "none"), s(e, "aria-hidden", "true");
    },
    m(c, u) {
      y(c, e, u), f.m(e, null), m(e, t), m(e, l);
    },
    p(c, u) {
      a === (a = o(c)) && f ? f.p(c, u) : (f.d(1), f = a(c), f && (f.c(), f.m(e, t))), u & /*fg*/
      8 && i !== (i = /*fg*/
      c[3] ?? "currentColor") && s(t, "fill", i), u & /*fg*/
      8 && r !== (r = /*fg*/
      c[3] ?? "currentColor") && s(l, "fill", r), u & /*size*/
      2 && s(
        e,
        "width",
        /*size*/
        c[1]
      ), u & /*size*/
      2 && s(
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
function Ot(n) {
  let e, t, i, l, r;
  function o(c, u) {
    return (
      /*bg*/
      c[2] ? ri : li
    );
  }
  let a = o(n), f = a(n);
  return {
    c() {
      e = k("svg"), f.c(), t = k("path"), l = k("path"), s(t, "d", "M12 10.2a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"), s(t, "fill", i = /*fg*/
      n[3] ?? "currentColor"), s(l, "d", "M11 11.5h2V18h-2v-6.5Z"), s(l, "fill", r = /*fg*/
      n[3] ?? "currentColor"), s(
        e,
        "width",
        /*size*/
        n[1]
      ), s(
        e,
        "height",
        /*size*/
        n[1]
      ), s(e, "viewBox", "0 0 24 24"), s(e, "fill", "none"), s(e, "aria-hidden", "true");
    },
    m(c, u) {
      y(c, e, u), f.m(e, null), m(e, t), m(e, l);
    },
    p(c, u) {
      a === (a = o(c)) && f ? f.p(c, u) : (f.d(1), f = a(c), f && (f.c(), f.m(e, t))), u & /*fg*/
      8 && i !== (i = /*fg*/
      c[3] ?? "currentColor") && s(t, "fill", i), u & /*fg*/
      8 && r !== (r = /*fg*/
      c[3] ?? "currentColor") && s(l, "fill", r), u & /*size*/
      2 && s(
        e,
        "width",
        /*size*/
        c[1]
      ), u & /*size*/
      2 && s(
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
function Ft(n) {
  let e, t, i, l, r, o, a;
  return {
    c() {
      e = k("svg"), t = k("path"), l = k("path"), o = k("path"), s(t, "d", "M12 3.5c.4 0 .8.2 1 .6l9 15.6c.4.7-.1 1.6-1 1.6H3c-.9 0-1.4-.9-1-1.6l9-15.6c.2-.4.6-.6 1-.6Z"), s(t, "fill", i = /*bg*/
      n[2] ?? "currentColor"), s(
        t,
        "opacity",
        /*bgOpacity*/
        n[4]
      ), s(l, "d", "M12 8a1 1 0 0 1 1 1l-.3 5.5a.7.7 0 0 1-1.4 0L11 9a1 1 0 0 1 1-1Z"), s(l, "fill", r = /*fg*/
      n[3] ?? "currentColor"), s(o, "d", "M12 18a1.25 1.25 0 1 1 0-2.5A1.25 1.25 0 0 1 12 18Z"), s(o, "fill", a = /*fg*/
      n[3] ?? "currentColor"), s(
        e,
        "width",
        /*size*/
        n[1]
      ), s(
        e,
        "height",
        /*size*/
        n[1]
      ), s(e, "viewBox", "0 0 24 24"), s(e, "fill", "none"), s(e, "aria-hidden", "true");
    },
    m(f, c) {
      y(f, e, c), m(e, t), m(e, l), m(e, o);
    },
    p(f, c) {
      c & /*bg*/
      4 && i !== (i = /*bg*/
      f[2] ?? "currentColor") && s(t, "fill", i), c & /*bgOpacity*/
      16 && s(
        t,
        "opacity",
        /*bgOpacity*/
        f[4]
      ), c & /*fg*/
      8 && r !== (r = /*fg*/
      f[3] ?? "currentColor") && s(l, "fill", r), c & /*fg*/
      8 && a !== (a = /*fg*/
      f[3] ?? "currentColor") && s(o, "fill", a), c & /*size*/
      2 && s(
        e,
        "width",
        /*size*/
        f[1]
      ), c & /*size*/
      2 && s(
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
function It(n) {
  let e, t, i;
  function l(a, f) {
    return (
      /*bg*/
      a[2] ? fi : ai
    );
  }
  let r = l(n), o = r(n);
  return {
    c() {
      e = k("svg"), o.c(), t = k("path"), s(t, "d", "M9.2 12.5 7.5 10.8a1 1 0 0 0-1.4 1.4l2.4 2.4a1 1 0 0 0 1.4 0l7-7a1 1 0 1 0-1.4-1.4l-6.3 6.3Z"), s(t, "fill", i = /*fg*/
      n[3] ?? "currentColor"), s(
        e,
        "width",
        /*size*/
        n[1]
      ), s(
        e,
        "height",
        /*size*/
        n[1]
      ), s(e, "viewBox", "0 0 24 24"), s(e, "fill", "none"), s(e, "aria-hidden", "true");
    },
    m(a, f) {
      y(a, e, f), o.m(e, null), m(e, t);
    },
    p(a, f) {
      r === (r = l(a)) && o ? o.p(a, f) : (o.d(1), o = r(a), o && (o.c(), o.m(e, t))), f & /*fg*/
      8 && i !== (i = /*fg*/
      a[3] ?? "currentColor") && s(t, "fill", i), f & /*size*/
      2 && s(
        e,
        "width",
        /*size*/
        a[1]
      ), f & /*size*/
      2 && s(
        e,
        "height",
        /*size*/
        a[1]
      );
    },
    d(a) {
      a && v(e), o.d();
    }
  };
}
function Ce(n) {
  let e;
  function t(r, o) {
    return (
      /*bgShape*/
      r[5] === "square" ? At : Lt
    );
  }
  let i = t(n), l = i(n);
  return {
    c() {
      l.c(), e = O();
    },
    m(r, o) {
      l.m(r, o), y(r, e, o);
    },
    p(r, o) {
      i === (i = t(r)) && l ? l.p(r, o) : (l.d(1), l = i(r), l && (l.c(), l.m(e.parentNode, e)));
    },
    d(r) {
      r && v(e), l.d(r);
    }
  };
}
function Lt(n) {
  let e;
  return {
    c() {
      e = k("circle"), s(e, "cx", "12"), s(e, "cy", "12"), s(e, "r", "10"), s(
        e,
        "fill",
        /*bg*/
        n[2]
      ), s(
        e,
        "opacity",
        /*bgOpacity*/
        n[4]
      ), s(e, "stroke", "none");
    },
    m(t, i) {
      y(t, e, i);
    },
    p(t, i) {
      i & /*bg*/
      4 && s(
        e,
        "fill",
        /*bg*/
        t[2]
      ), i & /*bgOpacity*/
      16 && s(
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
function At(n) {
  let e;
  return {
    c() {
      e = k("rect"), s(e, "x", "3"), s(e, "y", "3"), s(e, "width", "18"), s(e, "height", "18"), s(e, "rx", "0"), s(
        e,
        "fill",
        /*bg*/
        n[2]
      ), s(
        e,
        "opacity",
        /*bgOpacity*/
        n[4]
      ), s(e, "stroke", "none");
    },
    m(t, i) {
      y(t, e, i);
    },
    p(t, i) {
      i & /*bg*/
      4 && s(
        e,
        "fill",
        /*bg*/
        t[2]
      ), i & /*bgOpacity*/
      16 && s(
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
function Vt(n) {
  let e;
  return {
    c() {
      e = k("path"), s(e, "d", "M3 3h18v18H3V3Z"), s(e, "fill", "currentColor"), s(
        e,
        "opacity",
        /*bgOpacity*/
        n[4]
      ), s(e, "stroke", "none");
    },
    m(t, i) {
      y(t, e, i);
    },
    p(t, i) {
      i & /*bgOpacity*/
      16 && s(
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
function Zt(n) {
  let e;
  function t(r, o) {
    return (
      /*bgShape*/
      r[5] === "square" ? Rt : Ht
    );
  }
  let i = t(n), l = i(n);
  return {
    c() {
      l.c(), e = O();
    },
    m(r, o) {
      l.m(r, o), y(r, e, o);
    },
    p(r, o) {
      i === (i = t(r)) && l ? l.p(r, o) : (l.d(1), l = i(r), l && (l.c(), l.m(e.parentNode, e)));
    },
    d(r) {
      r && v(e), l.d(r);
    }
  };
}
function Ht(n) {
  let e;
  return {
    c() {
      e = k("circle"), s(e, "cx", "12"), s(e, "cy", "12"), s(e, "r", "10"), s(
        e,
        "fill",
        /*bg*/
        n[2]
      ), s(
        e,
        "opacity",
        /*bgOpacity*/
        n[4]
      ), s(e, "stroke", "none");
    },
    m(t, i) {
      y(t, e, i);
    },
    p(t, i) {
      i & /*bg*/
      4 && s(
        e,
        "fill",
        /*bg*/
        t[2]
      ), i & /*bgOpacity*/
      16 && s(
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
function Rt(n) {
  let e;
  return {
    c() {
      e = k("rect"), s(e, "x", "3"), s(e, "y", "3"), s(e, "width", "18"), s(e, "height", "18"), s(e, "rx", "0"), s(
        e,
        "fill",
        /*bg*/
        n[2]
      ), s(
        e,
        "opacity",
        /*bgOpacity*/
        n[4]
      ), s(e, "stroke", "none");
    },
    m(t, i) {
      y(t, e, i);
    },
    p(t, i) {
      i & /*bg*/
      4 && s(
        e,
        "fill",
        /*bg*/
        t[2]
      ), i & /*bgOpacity*/
      16 && s(
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
function Wt(n) {
  let e;
  return {
    c() {
      e = k("path"), s(e, "d", "M3 3h18v18H3V3Z"), s(e, "fill", "currentColor"), s(
        e,
        "opacity",
        /*bgOpacity*/
        n[4]
      ), s(e, "stroke", "none");
    },
    m(t, i) {
      y(t, e, i);
    },
    p(t, i) {
      i & /*bgOpacity*/
      16 && s(
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
  function t(r, o) {
    return (
      /*bgShape*/
      r[5] === "square" ? Gt : Xt
    );
  }
  let i = t(n), l = i(n);
  return {
    c() {
      l.c(), e = O();
    },
    m(r, o) {
      l.m(r, o), y(r, e, o);
    },
    p(r, o) {
      i === (i = t(r)) && l ? l.p(r, o) : (l.d(1), l = i(r), l && (l.c(), l.m(e.parentNode, e)));
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
      e = k("circle"), s(e, "cx", "12"), s(e, "cy", "12"), s(e, "r", "10"), s(
        e,
        "fill",
        /*bg*/
        n[2]
      ), s(
        e,
        "opacity",
        /*bgOpacity*/
        n[4]
      ), s(e, "stroke", "none");
    },
    m(t, i) {
      y(t, e, i);
    },
    p(t, i) {
      i & /*bg*/
      4 && s(
        e,
        "fill",
        /*bg*/
        t[2]
      ), i & /*bgOpacity*/
      16 && s(
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
function Gt(n) {
  let e;
  return {
    c() {
      e = k("rect"), s(e, "x", "3"), s(e, "y", "3"), s(e, "width", "18"), s(e, "height", "18"), s(e, "rx", "0"), s(
        e,
        "fill",
        /*bg*/
        n[2]
      ), s(
        e,
        "opacity",
        /*bgOpacity*/
        n[4]
      ), s(e, "stroke", "none");
    },
    m(t, i) {
      y(t, e, i);
    },
    p(t, i) {
      i & /*bg*/
      4 && s(
        e,
        "fill",
        /*bg*/
        t[2]
      ), i & /*bgOpacity*/
      16 && s(
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
      e = k("path"), s(e, "d", "M3 3h18v18H3V3Z"), s(e, "fill", "currentColor"), s(
        e,
        "opacity",
        /*bgOpacity*/
        n[4]
      ), s(e, "stroke", "none");
    },
    m(t, i) {
      y(t, e, i);
    },
    p(t, i) {
      i & /*bgOpacity*/
      16 && s(
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
  function t(r, o) {
    return (
      /*bgShape*/
      r[5] === "square" ? Qt : Kt
    );
  }
  let i = t(n), l = i(n);
  return {
    c() {
      l.c(), e = O();
    },
    m(r, o) {
      l.m(r, o), y(r, e, o);
    },
    p(r, o) {
      i === (i = t(r)) && l ? l.p(r, o) : (l.d(1), l = i(r), l && (l.c(), l.m(e.parentNode, e)));
    },
    d(r) {
      r && v(e), l.d(r);
    }
  };
}
function Kt(n) {
  let e;
  return {
    c() {
      e = k("circle"), s(e, "cx", "12"), s(e, "cy", "12"), s(e, "r", "10"), s(
        e,
        "fill",
        /*bg*/
        n[2]
      ), s(
        e,
        "opacity",
        /*bgOpacity*/
        n[4]
      ), s(e, "stroke", "none");
    },
    m(t, i) {
      y(t, e, i);
    },
    p(t, i) {
      i & /*bg*/
      4 && s(
        e,
        "fill",
        /*bg*/
        t[2]
      ), i & /*bgOpacity*/
      16 && s(
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
function Qt(n) {
  let e;
  return {
    c() {
      e = k("rect"), s(e, "x", "3"), s(e, "y", "3"), s(e, "width", "18"), s(e, "height", "18"), s(e, "rx", "0"), s(
        e,
        "fill",
        /*bg*/
        n[2]
      ), s(
        e,
        "opacity",
        /*bgOpacity*/
        n[4]
      ), s(e, "stroke", "none");
    },
    m(t, i) {
      y(t, e, i);
    },
    p(t, i) {
      i & /*bg*/
      4 && s(
        e,
        "fill",
        /*bg*/
        t[2]
      ), i & /*bgOpacity*/
      16 && s(
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
      e = k("path"), s(e, "d", "M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20Z"), s(e, "fill", "currentColor"), s(
        e,
        "opacity",
        /*bgOpacity*/
        n[4]
      );
    },
    m(t, i) {
      y(t, e, i);
    },
    p(t, i) {
      i & /*bgOpacity*/
      16 && s(
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
  function t(r, o) {
    return (
      /*bgShape*/
      r[5] === "square" ? ni : ii
    );
  }
  let i = t(n), l = i(n);
  return {
    c() {
      l.c(), e = O();
    },
    m(r, o) {
      l.m(r, o), y(r, e, o);
    },
    p(r, o) {
      i === (i = t(r)) && l ? l.p(r, o) : (l.d(1), l = i(r), l && (l.c(), l.m(e.parentNode, e)));
    },
    d(r) {
      r && v(e), l.d(r);
    }
  };
}
function ii(n) {
  let e;
  return {
    c() {
      e = k("circle"), s(e, "cx", "12"), s(e, "cy", "12"), s(e, "r", "10"), s(
        e,
        "fill",
        /*bg*/
        n[2]
      ), s(
        e,
        "opacity",
        /*bgOpacity*/
        n[4]
      );
    },
    m(t, i) {
      y(t, e, i);
    },
    p(t, i) {
      i & /*bg*/
      4 && s(
        e,
        "fill",
        /*bg*/
        t[2]
      ), i & /*bgOpacity*/
      16 && s(
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
function ni(n) {
  let e;
  return {
    c() {
      e = k("rect"), s(e, "x", "3"), s(e, "y", "3"), s(e, "width", "18"), s(e, "height", "18"), s(e, "rx", "0"), s(
        e,
        "fill",
        /*bg*/
        n[2]
      ), s(
        e,
        "opacity",
        /*bgOpacity*/
        n[4]
      );
    },
    m(t, i) {
      y(t, e, i);
    },
    p(t, i) {
      i & /*bg*/
      4 && s(
        e,
        "fill",
        /*bg*/
        t[2]
      ), i & /*bgOpacity*/
      16 && s(
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
      e = k("path"), s(e, "d", "M3 3h18v18H3V3Z"), s(e, "fill", "currentColor"), s(
        e,
        "opacity",
        /*bgOpacity*/
        n[4]
      );
    },
    m(t, i) {
      y(t, e, i);
    },
    p(t, i) {
      i & /*bgOpacity*/
      16 && s(
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
  function t(r, o) {
    return (
      /*bgShape*/
      r[5] === "square" ? oi : si
    );
  }
  let i = t(n), l = i(n);
  return {
    c() {
      l.c(), e = O();
    },
    m(r, o) {
      l.m(r, o), y(r, e, o);
    },
    p(r, o) {
      i === (i = t(r)) && l ? l.p(r, o) : (l.d(1), l = i(r), l && (l.c(), l.m(e.parentNode, e)));
    },
    d(r) {
      r && v(e), l.d(r);
    }
  };
}
function si(n) {
  let e;
  return {
    c() {
      e = k("circle"), s(e, "cx", "12"), s(e, "cy", "12"), s(e, "r", "10"), s(
        e,
        "fill",
        /*bg*/
        n[2]
      ), s(
        e,
        "opacity",
        /*bgOpacity*/
        n[4]
      );
    },
    m(t, i) {
      y(t, e, i);
    },
    p(t, i) {
      i & /*bg*/
      4 && s(
        e,
        "fill",
        /*bg*/
        t[2]
      ), i & /*bgOpacity*/
      16 && s(
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
  return {
    c() {
      e = k("rect"), s(e, "x", "3"), s(e, "y", "3"), s(e, "width", "18"), s(e, "height", "18"), s(e, "rx", "0"), s(
        e,
        "fill",
        /*bg*/
        n[2]
      ), s(
        e,
        "opacity",
        /*bgOpacity*/
        n[4]
      );
    },
    m(t, i) {
      y(t, e, i);
    },
    p(t, i) {
      i & /*bg*/
      4 && s(
        e,
        "fill",
        /*bg*/
        t[2]
      ), i & /*bgOpacity*/
      16 && s(
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
function ai(n) {
  let e;
  return {
    c() {
      e = k("path"), s(e, "d", "M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20Z"), s(e, "fill", "currentColor"), s(
        e,
        "opacity",
        /*bgOpacity*/
        n[4]
      );
    },
    m(t, i) {
      y(t, e, i);
    },
    p(t, i) {
      i & /*bgOpacity*/
      16 && s(
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
  function t(r, o) {
    return (
      /*bgShape*/
      r[5] === "square" ? ui : ci
    );
  }
  let i = t(n), l = i(n);
  return {
    c() {
      l.c(), e = O();
    },
    m(r, o) {
      l.m(r, o), y(r, e, o);
    },
    p(r, o) {
      i === (i = t(r)) && l ? l.p(r, o) : (l.d(1), l = i(r), l && (l.c(), l.m(e.parentNode, e)));
    },
    d(r) {
      r && v(e), l.d(r);
    }
  };
}
function ci(n) {
  let e;
  return {
    c() {
      e = k("circle"), s(e, "cx", "12"), s(e, "cy", "12"), s(e, "r", "10"), s(
        e,
        "fill",
        /*bg*/
        n[2]
      ), s(
        e,
        "opacity",
        /*bgOpacity*/
        n[4]
      );
    },
    m(t, i) {
      y(t, e, i);
    },
    p(t, i) {
      i & /*bg*/
      4 && s(
        e,
        "fill",
        /*bg*/
        t[2]
      ), i & /*bgOpacity*/
      16 && s(
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
function ui(n) {
  let e;
  return {
    c() {
      e = k("rect"), s(e, "x", "3"), s(e, "y", "3"), s(e, "width", "18"), s(e, "height", "18"), s(e, "rx", "0"), s(
        e,
        "fill",
        /*bg*/
        n[2]
      ), s(
        e,
        "opacity",
        /*bgOpacity*/
        n[4]
      );
    },
    m(t, i) {
      y(t, e, i);
    },
    p(t, i) {
      i & /*bg*/
      4 && s(
        e,
        "fill",
        /*bg*/
        t[2]
      ), i & /*bgOpacity*/
      16 && s(
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
  function t(r, o) {
    return (
      /*name*/
      r[0] === "Confirmation" ? It : (
        /*name*/
        r[0] === "Warning" ? Ft : (
          /*name*/
          r[0] === "Info" ? Ot : (
            /*name*/
            r[0] === "InfoCircle" ? Et : (
              /*name*/
              r[0] === "Interactive" ? Nt : (
                /*name*/
                r[0] === "Expand" ? Pt : (
                  /*name*/
                  r[0] === "OpenData" ? qt : (
                    /*name*/
                    r[0] === "badge-check" ? jt : (
                      /*name*/
                      r[0] === "Download" ? Dt : Tt
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
      l.c(), e = O();
    },
    m(r, o) {
      l.m(r, o), y(r, e, o);
    },
    p(r, [o]) {
      i === (i = t(r)) && l ? l.p(r, o) : (l.d(1), l = i(r), l && (l.c(), l.m(e.parentNode, e)));
    },
    i: ae,
    o: ae,
    d(r) {
      r && v(e), l.d(r);
    }
  };
}
function hi(n, e, t) {
  let { name: i } = e, { size: l = 0 } = e, { bg: r = null } = e, { fg: o = null } = e, { bgOpacity: a = 0.14 } = e, { bgShape: f = "round" } = e;
  return n.$$set = (c) => {
    "name" in c && t(0, i = c.name), "size" in c && t(1, l = c.size), "bg" in c && t(2, r = c.bg), "fg" in c && t(3, o = c.fg), "bgOpacity" in c && t(4, a = c.bgOpacity), "bgShape" in c && t(5, f = c.bgShape);
  }, [i, l, r, o, a, f];
}
class re extends U {
  constructor(e) {
    super(), R(this, e, hi, di, Z, {
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
    this.$$set({ name: e }), _();
  }
  get size() {
    return this.$$.ctx[1];
  }
  set size(e) {
    this.$$set({ size: e }), _();
  }
  get bg() {
    return this.$$.ctx[2];
  }
  set bg(e) {
    this.$$set({ bg: e }), _();
  }
  get fg() {
    return this.$$.ctx[3];
  }
  set fg(e) {
    this.$$set({ fg: e }), _();
  }
  get bgOpacity() {
    return this.$$.ctx[4];
  }
  set bgOpacity(e) {
    this.$$set({ bgOpacity: e }), _();
  }
  get bgShape() {
    return this.$$.ctx[5];
  }
  set bgShape(e) {
    this.$$set({ bgShape: e }), _();
  }
}
W(re, { name: {}, size: {}, bg: {}, fg: {}, bgOpacity: {}, bgShape: {} }, [], [], !0);
function gi(n) {
  le(n, "svelte-1r1mjkg", ".desc.svelte-1r1mjkg{display:block}.actionHint.svelte-1r1mjkg{display:flex;align-items:center;justify-content:center;gap:6px;margin-top:7px;padding-top:7px;border-top:1px solid rgba(255, 255, 255, 0.18);opacity:0.92;font-size:11px;line-height:1.2;width:100%;text-align:center;font-weight:650;letter-spacing:0.06em;text-transform:uppercase}.actionIcon.svelte-1r1mjkg{display:inline-flex;align-items:center;justify-content:center}");
}
const pi = (n) => ({}), Be = (n) => ({}), bi = (n) => ({}), Te = (n) => ({});
function _i(n) {
  let e;
  const t = (
    /*#slots*/
    n[6].trigger
  ), i = he(
    t,
    n,
    /*$$scope*/
    n[7],
    Be
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
      128) && pe(
        i,
        t,
        l,
        /*$$scope*/
        l[7],
        e ? ge(
          t,
          /*$$scope*/
          l[7],
          r,
          pi
        ) : be(
          /*$$scope*/
          l[7]
        ),
        Be
      );
    },
    i(l) {
      e || ($(i, l), e = !0);
    },
    o(l) {
      C(i, l), e = !1;
    },
    d(l) {
      i && i.d(l);
    }
  };
}
function mi(n) {
  let e, t;
  return e = new Ke({
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
        content: [wi],
        trigger: [vi]
      },
      $$scope: { ctx: n }
    }
  }), {
    c() {
      E(e.$$.fragment);
    },
    m(i, l) {
      P(e, i, l), t = !0;
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
      t || ($(e.$$.fragment, i), t = !0);
    },
    o(i) {
      C(e.$$.fragment, i), t = !1;
    },
    d(i) {
      N(e, i);
    }
  };
}
function vi(n) {
  let e, t;
  const i = (
    /*#slots*/
    n[6].trigger
  ), l = he(
    i,
    n,
    /*$$scope*/
    n[7],
    Te
  );
  return {
    c() {
      e = B("span"), l && l.c(), s(e, "slot", "trigger");
    },
    m(r, o) {
      y(r, e, o), l && l.m(e, null), t = !0;
    },
    p(r, o) {
      l && l.p && (!t || o & /*$$scope*/
      128) && pe(
        l,
        i,
        r,
        /*$$scope*/
        r[7],
        t ? ge(
          i,
          /*$$scope*/
          r[7],
          o,
          bi
        ) : be(
          /*$$scope*/
          r[7]
        ),
        Te
      );
    },
    i(r) {
      t || ($(l, r), t = !0);
    },
    o(r) {
      C(l, r), t = !1;
    },
    d(r) {
      r && v(e), l && l.d(r);
    }
  };
}
function De(n) {
  let e, t = (
    /*badge*/
    n[0].label + ""
  ), i;
  return {
    c() {
      e = B("strong"), i = H(t);
    },
    m(l, r) {
      y(l, e, r), m(e, i);
    },
    p(l, r) {
      r & /*badge*/
      1 && t !== (t = /*badge*/
      l[0].label + "") && Q(i, t);
    },
    d(l) {
      l && v(e);
    }
  };
}
function je(n) {
  let e, t = (
    /*badge*/
    n[0].description + ""
  ), i;
  return {
    c() {
      e = B("span"), i = H(t), s(e, "class", "desc svelte-1r1mjkg");
    },
    m(l, r) {
      y(l, e, r), m(e, i);
    },
    p(l, r) {
      r & /*badge*/
      1 && t !== (t = /*badge*/
      l[0].description + "") && Q(i, t);
    },
    d(l) {
      l && v(e);
    }
  };
}
function qe(n) {
  let e, t, i, l = (
    /*badge*/
    n[0].actionText + ""
  ), r, o, a = (
    /*hintIcon*/
    n[4] && Pe(n)
  );
  return {
    c() {
      e = B("span"), a && a.c(), t = V(), i = B("span"), r = H(l), s(i, "class", "actionText"), s(e, "class", "actionHint svelte-1r1mjkg"), s(e, "aria-hidden", "true");
    },
    m(f, c) {
      y(f, e, c), a && a.m(e, null), m(e, t), m(e, i), m(i, r), o = !0;
    },
    p(f, c) {
      /*hintIcon*/
      f[4] ? a ? (a.p(f, c), c & /*hintIcon*/
      16 && $(a, 1)) : (a = Pe(f), a.c(), $(a, 1), a.m(e, t)) : a && (I(), C(a, 1, 1, () => {
        a = null;
      }), L()), (!o || c & /*badge*/
      1) && l !== (l = /*badge*/
      f[0].actionText + "") && Q(r, l);
    },
    i(f) {
      o || ($(a), o = !0);
    },
    o(f) {
      C(a), o = !1;
    },
    d(f) {
      f && v(e), a && a.d();
    }
  };
}
function Pe(n) {
  let e, t, i;
  return t = new re({
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
      e = B("span"), E(t.$$.fragment), s(e, "class", "actionIcon svelte-1r1mjkg");
    },
    m(l, r) {
      y(l, e, r), P(t, e, null), i = !0;
    },
    p(l, r) {
      const o = {};
      r & /*hintIcon*/
      16 && (o.name = /*hintIcon*/
      l[4]), t.$set(o);
    },
    i(l) {
      i || ($(t.$$.fragment, l), i = !0);
    },
    o(l) {
      C(t.$$.fragment, l), i = !1;
    },
    d(l) {
      l && v(e), N(t);
    }
  };
}
function wi(n) {
  let e, t, i, l, r = (
    /*contentMode*/
    n[3] === "labelAndDescription" && De(n)
  ), o = (
    /*badge*/
    n[0].description && je(n)
  ), a = (
    /*badge*/
    n[0].actionText && qe(n)
  );
  return {
    c() {
      e = B("span"), r && r.c(), t = V(), o && o.c(), i = V(), a && a.c(), s(e, "slot", "content");
    },
    m(f, c) {
      y(f, e, c), r && r.m(e, null), m(e, t), o && o.m(e, null), m(e, i), a && a.m(e, null), l = !0;
    },
    p(f, c) {
      /*contentMode*/
      f[3] === "labelAndDescription" ? r ? r.p(f, c) : (r = De(f), r.c(), r.m(e, t)) : r && (r.d(1), r = null), /*badge*/
      f[0].description ? o ? o.p(f, c) : (o = je(f), o.c(), o.m(e, i)) : o && (o.d(1), o = null), /*badge*/
      f[0].actionText ? a ? (a.p(f, c), c & /*badge*/
      1 && $(a, 1)) : (a = qe(f), a.c(), $(a, 1), a.m(e, null)) : a && (I(), C(a, 1, 1, () => {
        a = null;
      }), L());
    },
    i(f) {
      l || ($(a), l = !0);
    },
    o(f) {
      C(a), l = !1;
    },
    d(f) {
      f && v(e), r && r.d(), o && o.d(), a && a.d();
    }
  };
}
function ki(n) {
  let e, t, i, l;
  const r = [mi, _i], o = [];
  function a(f, c) {
    return (
      /*showTooltip*/
      f[5] ? 0 : 1
    );
  }
  return e = a(n), t = o[e] = r[e](n), {
    c() {
      t.c(), i = O();
    },
    m(f, c) {
      o[e].m(f, c), y(f, i, c), l = !0;
    },
    p(f, [c]) {
      let u = e;
      e = a(f), e === u ? o[e].p(f, c) : (I(), C(o[u], 1, 1, () => {
        o[u] = null;
      }), L(), t = o[e], t ? t.p(f, c) : (t = o[e] = r[e](f), t.c()), $(t, 1), t.m(i.parentNode, i));
    },
    i(f) {
      l || ($(t), l = !0);
    },
    o(f) {
      C(t), l = !1;
    },
    d(f) {
      f && v(i), o[e].d(f);
    }
  };
}
function yi(n, e, t) {
  let i, l, { $$slots: r = {}, $$scope: o } = e, { badge: a } = e, { placement: f = "top" } = e, { openDelayMs: c = 80 } = e, { contentMode: u = "description" } = e;
  return n.$$set = (d) => {
    "badge" in d && t(0, a = d.badge), "placement" in d && t(1, f = d.placement), "openDelayMs" in d && t(2, c = d.openDelayMs), "contentMode" in d && t(3, u = d.contentMode), "$$scope" in d && t(7, o = d.$$scope);
  }, n.$$.update = () => {
    n.$$.dirty & /*badge*/
    1 && t(5, i = !!(a != null && a.description || a != null && a.actionText)), n.$$.dirty & /*badge*/
    1 && t(4, l = (a == null ? void 0 : a.actionIcon) ?? null);
  }, [
    a,
    f,
    c,
    u,
    l,
    i,
    r,
    o
  ];
}
class fe extends U {
  constructor(e) {
    super(), R(
      this,
      e,
      yi,
      ki,
      Z,
      {
        badge: 0,
        placement: 1,
        openDelayMs: 2,
        contentMode: 3
      },
      gi
    );
  }
  get badge() {
    return this.$$.ctx[0];
  }
  set badge(e) {
    this.$$set({ badge: e }), _();
  }
  get placement() {
    return this.$$.ctx[1];
  }
  set placement(e) {
    this.$$set({ placement: e }), _();
  }
  get openDelayMs() {
    return this.$$.ctx[2];
  }
  set openDelayMs(e) {
    this.$$set({ openDelayMs: e }), _();
  }
  get contentMode() {
    return this.$$.ctx[3];
  }
  set contentMode(e) {
    this.$$set({ contentMode: e }), _();
  }
}
W(fe, { badge: {}, placement: {}, openDelayMs: {}, contentMode: {} }, ["trigger"], [], !0);
function $i(n) {
  le(n, "svelte-jjnksu", ".badge.svelte-jjnksu{display:inline-flex;align-items:center;gap:var(--badge-gap);padding:var(--badge-pad-y) var(--badge-pad-x);border-radius:16px;border:var(--badge-border-w) solid transparent;font-weight:550;font-size:12px;line-height:1;user-select:none;outline:none;transition:background-color 120ms ease, border-color 120ms ease, color 120ms ease;--badge-solid:rgb(17, 24, 39);--badge-border:color-mix(in srgb, var(--badge-solid) 65%, transparent);--badge-fg:color-mix(in srgb, var(--badge-solid) 72%, black);--badge-bg:color-mix(in srgb, var(--badge-solid) 14%, transparent);--badge-gap:3px;--badge-pad-y:3px;--badge-pad-x:6px;--badge-border-w:1px}.badge.filled.svelte-jjnksu{background:var(--badge-solid);border-color:transparent;color:#ffffff}.badge.outlined.svelte-jjnksu{background:transparent;border-color:var(--badge-border);color:var(--badge-fg)}.icon.svelte-jjnksu{display:inline-flex;align-items:center;justify-content:center}.label.svelte-jjnksu{white-space:nowrap}");
}
function Ne(n) {
  let e, t;
  return e = new fe({
    props: {
      badge: (
        /*badge*/
        n[0]
      ),
      placement: "top",
      openDelayMs: 80,
      contentMode: "description",
      $$slots: { trigger: [xi] },
      $$scope: { ctx: n }
    }
  }), {
    c() {
      E(e.$$.fragment);
    },
    m(i, l) {
      P(e, i, l), t = !0;
    },
    p(i, l) {
      const r = {};
      l & /*badge*/
      1 && (r.badge = /*badge*/
      i[0]), l & /*$$scope, variant, badgeColor, badge, iconName*/
      31 && (r.$$scope = { dirty: l, ctx: i }), e.$set(r);
    },
    i(i) {
      t || ($(e.$$.fragment, i), t = !0);
    },
    o(i) {
      C(e.$$.fragment, i), t = !1;
    },
    d(i) {
      N(e, i);
    }
  };
}
function Ee(n) {
  let e, t, i;
  return t = new re({
    props: {
      name: (
        /*iconName*/
        n[3]
      ),
      size: zi,
      bg: (
        /*variant*/
        n[1] === "outlined" ? "var(--badge-solid)" : "#ffffff"
      ),
      fg: (
        /*variant*/
        n[1] === "outlined" ? "#ffffff" : "var(--badge-solid)"
      ),
      bgOpacity: 1
    }
  }), {
    c() {
      e = B("span"), E(t.$$.fragment), s(e, "class", "icon svelte-jjnksu"), s(e, "aria-hidden", "true");
    },
    m(l, r) {
      y(l, e, r), P(t, e, null), i = !0;
    },
    p(l, r) {
      const o = {};
      r & /*iconName*/
      8 && (o.name = /*iconName*/
      l[3]), r & /*variant*/
      2 && (o.bg = /*variant*/
      l[1] === "outlined" ? "var(--badge-solid)" : "#ffffff"), r & /*variant*/
      2 && (o.fg = /*variant*/
      l[1] === "outlined" ? "#ffffff" : "var(--badge-solid)"), t.$set(o);
    },
    i(l) {
      i || ($(t.$$.fragment, l), i = !0);
    },
    o(l) {
      C(t.$$.fragment, l), i = !1;
    },
    d(l) {
      l && v(e), N(t);
    }
  };
}
function xi(n) {
  let e, t, i, l, r = (
    /*badge*/
    n[0].label + ""
  ), o, a, f, c, u, d, p, h = (
    /*iconName*/
    n[3] && Ee(n)
  );
  return {
    c() {
      e = B("span"), t = B("span"), h && h.c(), i = V(), l = B("span"), o = H(r), s(l, "class", "label svelte-jjnksu"), s(t, "class", a = "badge " + /*variant*/
      n[1] + " svelte-jjnksu"), s(t, "style", f = `--badge-solid:${/*badgeColor*/
      n[2]};`), s(t, "role", "note"), s(t, "aria-label", c = /*badge*/
      n[0].label), s(e, "slot", "trigger"), s(e, "role", "presentation");
    },
    m(g, x) {
      y(g, e, x), m(e, t), h && h.m(t, null), m(t, i), m(t, l), m(l, o), u = !0, d || (p = A(e, "keydown", Mi), d = !0);
    },
    p(g, x) {
      /*iconName*/
      g[3] ? h ? (h.p(g, x), x & /*iconName*/
      8 && $(h, 1)) : (h = Ee(g), h.c(), $(h, 1), h.m(t, i)) : h && (I(), C(h, 1, 1, () => {
        h = null;
      }), L()), (!u || x & /*badge*/
      1) && r !== (r = /*badge*/
      g[0].label + "") && Q(o, r), (!u || x & /*variant*/
      2 && a !== (a = "badge " + /*variant*/
      g[1] + " svelte-jjnksu")) && s(t, "class", a), (!u || x & /*badgeColor*/
      4 && f !== (f = `--badge-solid:${/*badgeColor*/
      g[2]};`)) && s(t, "style", f), (!u || x & /*badge*/
      1 && c !== (c = /*badge*/
      g[0].label)) && s(t, "aria-label", c);
    },
    i(g) {
      u || ($(h), u = !0);
    },
    o(g) {
      C(h), u = !1;
    },
    d(g) {
      g && v(e), h && h.d(), d = !1, p();
    }
  };
}
function Si(n) {
  let e, t, i = (
    /*badge*/
    n[0] && Ne(n)
  );
  return {
    c() {
      i && i.c(), e = O();
    },
    m(l, r) {
      i && i.m(l, r), y(l, e, r), t = !0;
    },
    p(l, [r]) {
      /*badge*/
      l[0] ? i ? (i.p(l, r), r & /*badge*/
      1 && $(i, 1)) : (i = Ne(l), i.c(), $(i, 1), i.m(e.parentNode, e)) : i && (I(), C(i, 1, 1, () => {
        i = null;
      }), L());
    },
    i(l) {
      t || ($(i), t = !0);
    },
    o(l) {
      C(i), t = !1;
    },
    d(l) {
      l && v(e), i && i.d(l);
    }
  };
}
const zi = 20, Mi = () => {
};
function Ci(n, e, t) {
  let i, l, { badge: r } = e, { variant: o = "filled" } = e;
  return n.$$set = (a) => {
    "badge" in a && t(0, r = a.badge), "variant" in a && t(1, o = a.variant);
  }, n.$$.update = () => {
    n.$$.dirty & /*badge*/
    1 && t(3, i = (r == null ? void 0 : r.icon) ?? null), n.$$.dirty & /*badge*/
    1 && t(2, l = String((r == null ? void 0 : r.color) ?? "").trim() || "rgb(17, 24, 39)");
  }, [r, o, l, i];
}
class Qe extends U {
  constructor(e) {
    super(), R(this, e, Ci, Si, Z, { badge: 0, variant: 1 }, $i);
  }
  get badge() {
    return this.$$.ctx[0];
  }
  set badge(e) {
    this.$$set({ badge: e }), _();
  }
  get variant() {
    return this.$$.ctx[1];
  }
  set variant(e) {
    this.$$set({ variant: e }), _();
  }
}
W(Qe, { badge: {}, variant: {} }, [], [], !0);
function Bi(n) {
  le(n, "svelte-bhqsp8", `.wrap.fixed.svelte-bhqsp8.svelte-bhqsp8{position:fixed;z-index:50}.wrap.svelte-bhqsp8.svelte-bhqsp8{display:inline-flex;align-items:center;justify-content:flex-end;pointer-events:auto}.wrap.left.svelte-bhqsp8 .badge.mini{flex-direction:row-reverse}.badge.svelte-bhqsp8.svelte-bhqsp8{display:inline-flex;align-items:center;gap:var(--badge-gap);padding:var(--badge-pad-y) var(--badge-pad-x);border-radius:16px;border:var(--badge-border-w) solid transparent;font-weight:550;font-size:12px;line-height:1;user-select:none;outline:none;transition:background-color 160ms ease, border-color 160ms ease, color 160ms ease, box-shadow 160ms ease,
      padding 320ms cubic-bezier(0.2, 0, 0, 1);--badge-solid:rgb(17, 24, 39);--badge-border:color-mix(in srgb, var(--badge-solid) 65%, transparent);--badge-fg:color-mix(in srgb, var(--badge-solid) 72%, black);--badge-gap:3px;--badge-pad-y:3px;--badge-pad-x:6px;--badge-border-w:1px;--mini-icon-bg:var(--badge-solid);--mini-icon-fg:#ffffff}.badge.filled.svelte-bhqsp8.svelte-bhqsp8{background:var(--badge-solid);border-color:transparent;color:#ffffff}.badge.outlined.svelte-bhqsp8.svelte-bhqsp8{background:transparent;border-color:var(--badge-border);color:var(--badge-fg)}.icon.svelte-bhqsp8.svelte-bhqsp8{display:inline-flex;align-items:center;justify-content:center}.label.svelte-bhqsp8.svelte-bhqsp8{white-space:nowrap}.badge.mini.svelte-bhqsp8.svelte-bhqsp8{--badge-gap:0px;--badge-pad-y:0px;--badge-pad-x:0px;--badge-border-w:0px;border-color:transparent;background:transparent;font-size:11px}.badge.mini.svelte-bhqsp8 .label.svelte-bhqsp8{max-width:0;opacity:0;overflow:hidden;line-height:1.2;padding-bottom:1px;transition:max-width 320ms cubic-bezier(0.2, 0, 0, 1), opacity 200ms ease}.badge.mini.svelte-bhqsp8.svelte-bhqsp8:hover,.badge.mini.svelte-bhqsp8.svelte-bhqsp8:focus-visible{--badge-gap:2px;--badge-pad-y:2px;--badge-pad-x:5px;--badge-border-w:1px}.badge.mini.outlined.svelte-bhqsp8.svelte-bhqsp8:hover,.badge.mini.outlined.svelte-bhqsp8.svelte-bhqsp8:focus-visible{border-color:var(--badge-border)}.badge.mini.filled.svelte-bhqsp8.svelte-bhqsp8:hover,.badge.mini.filled.svelte-bhqsp8.svelte-bhqsp8:focus-visible{background:var(--badge-solid);border-color:transparent;color:#ffffff;--mini-icon-bg:#ffffff;--mini-icon-fg:var(--badge-solid)}.badge.mini.svelte-bhqsp8:hover .label.svelte-bhqsp8,.badge.mini.svelte-bhqsp8:focus-visible .label.svelte-bhqsp8{max-width:220px;opacity:1}`);
}
function Oe(n) {
  let e, t;
  return e = new fe({
    props: {
      badge: (
        /*badge*/
        n[0]
      ),
      placement: "top",
      openDelayMs: 420,
      contentMode: "description",
      $$slots: { trigger: [Ti] },
      $$scope: { ctx: n }
    }
  }), {
    c() {
      E(e.$$.fragment);
    },
    m(i, l) {
      P(e, i, l), t = !0;
    },
    p(i, l) {
      const r = {};
      l & /*badge*/
      1 && (r.badge = /*badge*/
      i[0]), l & /*$$scope, variant, badgeColor, badge, iconName, iconBgShape*/
      455 && (r.$$scope = { dirty: l, ctx: i }), e.$set(r);
    },
    i(i) {
      t || ($(e.$$.fragment, i), t = !0);
    },
    o(i) {
      C(e.$$.fragment, i), t = !1;
    },
    d(i) {
      N(e, i);
    }
  };
}
function Fe(n) {
  let e, t, i;
  return t = new re({
    props: {
      name: (
        /*iconName*/
        n[7]
      ),
      size: ji,
      bg: "var(--mini-icon-bg)",
      fg: "var(--mini-icon-fg)",
      bgOpacity: 1,
      bgShape: (
        /*iconBgShape*/
        n[2]
      )
    }
  }), {
    c() {
      e = B("span"), E(t.$$.fragment), s(e, "class", "icon svelte-bhqsp8"), s(e, "aria-hidden", "true");
    },
    m(l, r) {
      y(l, e, r), P(t, e, null), i = !0;
    },
    p(l, r) {
      const o = {};
      r & /*iconName*/
      128 && (o.name = /*iconName*/
      l[7]), r & /*iconBgShape*/
      4 && (o.bgShape = /*iconBgShape*/
      l[2]), t.$set(o);
    },
    i(l) {
      i || ($(t.$$.fragment, l), i = !0);
    },
    o(l) {
      C(t.$$.fragment, l), i = !1;
    },
    d(l) {
      l && v(e), N(t);
    }
  };
}
function Ti(n) {
  let e, t, i, l, r = (
    /*badge*/
    n[0].label + ""
  ), o, a, f, c, u, d, p, h = (
    /*iconName*/
    n[7] && Fe(n)
  );
  return {
    c() {
      e = B("span"), t = B("span"), h && h.c(), i = V(), l = B("span"), o = H(r), s(l, "class", "label svelte-bhqsp8"), s(t, "class", a = "badge mini " + /*variant*/
      n[1] + " svelte-bhqsp8"), s(t, "style", f = `--badge-solid:${/*badgeColor*/
      n[6]};`), s(t, "role", "note"), s(t, "aria-label", c = /*badge*/
      n[0].label), s(e, "slot", "trigger"), s(e, "role", "presentation");
    },
    m(g, x) {
      y(g, e, x), m(e, t), h && h.m(t, null), m(t, i), m(t, l), m(l, o), u = !0, d || (p = A(e, "keydown", qi), d = !0);
    },
    p(g, x) {
      /*iconName*/
      g[7] ? h ? (h.p(g, x), x & /*iconName*/
      128 && $(h, 1)) : (h = Fe(g), h.c(), $(h, 1), h.m(t, i)) : h && (I(), C(h, 1, 1, () => {
        h = null;
      }), L()), (!u || x & /*badge*/
      1) && r !== (r = /*badge*/
      g[0].label + "") && Q(o, r), (!u || x & /*variant*/
      2 && a !== (a = "badge mini " + /*variant*/
      g[1] + " svelte-bhqsp8")) && s(t, "class", a), (!u || x & /*badgeColor*/
      64 && f !== (f = `--badge-solid:${/*badgeColor*/
      g[6]};`)) && s(t, "style", f), (!u || x & /*badge*/
      1 && c !== (c = /*badge*/
      g[0].label)) && s(t, "aria-label", c);
    },
    i(g) {
      u || ($(h), u = !0);
    },
    o(g) {
      C(h), u = !1;
    },
    d(g) {
      g && v(e), h && h.d(), d = !1, p();
    }
  };
}
function Di(n) {
  let e, t, i, l, r = (
    /*badge*/
    n[0] && Oe(n)
  );
  return {
    c() {
      e = B("div"), r && r.c(), s(e, "class", t = "wrap " + /*fixed*/
      (n[3] ? "fixed" : "") + " " + /*expandDirection*/
      n[5] + " svelte-bhqsp8"), s(e, "style", i = /*fixed*/
      n[3] ? `right:${/*offsetPx*/
      n[4]}px;bottom:${/*offsetPx*/
      n[4]}px;` : void 0), s(e, "aria-label", "Mini badge");
    },
    m(o, a) {
      y(o, e, a), r && r.m(e, null), l = !0;
    },
    p(o, [a]) {
      /*badge*/
      o[0] ? r ? (r.p(o, a), a & /*badge*/
      1 && $(r, 1)) : (r = Oe(o), r.c(), $(r, 1), r.m(e, null)) : r && (I(), C(r, 1, 1, () => {
        r = null;
      }), L()), (!l || a & /*fixed, expandDirection*/
      40 && t !== (t = "wrap " + /*fixed*/
      (o[3] ? "fixed" : "") + " " + /*expandDirection*/
      o[5] + " svelte-bhqsp8")) && s(e, "class", t), (!l || a & /*fixed, offsetPx*/
      24 && i !== (i = /*fixed*/
      o[3] ? `right:${/*offsetPx*/
      o[4]}px;bottom:${/*offsetPx*/
      o[4]}px;` : void 0)) && s(e, "style", i);
    },
    i(o) {
      l || ($(r), l = !0);
    },
    o(o) {
      C(r), l = !1;
    },
    d(o) {
      o && v(e), r && r.d();
    }
  };
}
const ji = 24, qi = () => {
};
function Pi(n, e, t) {
  let i, l, { badge: r } = e, { variant: o = "outlined" } = e, { iconBgShape: a = "round" } = e, { fixed: f = !1 } = e, { offsetPx: c = 16 } = e, { expandDirection: u = "right" } = e;
  return n.$$set = (d) => {
    "badge" in d && t(0, r = d.badge), "variant" in d && t(1, o = d.variant), "iconBgShape" in d && t(2, a = d.iconBgShape), "fixed" in d && t(3, f = d.fixed), "offsetPx" in d && t(4, c = d.offsetPx), "expandDirection" in d && t(5, u = d.expandDirection);
  }, n.$$.update = () => {
    n.$$.dirty & /*badge*/
    1 && t(7, i = (r == null ? void 0 : r.icon) ?? null), n.$$.dirty & /*badge*/
    1 && t(6, l = String((r == null ? void 0 : r.color) ?? "").trim() || "rgb(17, 24, 39)");
  }, [
    r,
    o,
    a,
    f,
    c,
    u,
    l,
    i
  ];
}
class et extends U {
  constructor(e) {
    super(), R(
      this,
      e,
      Pi,
      Di,
      Z,
      {
        badge: 0,
        variant: 1,
        iconBgShape: 2,
        fixed: 3,
        offsetPx: 4,
        expandDirection: 5
      },
      Bi
    );
  }
  get badge() {
    return this.$$.ctx[0];
  }
  set badge(e) {
    this.$$set({ badge: e }), _();
  }
  get variant() {
    return this.$$.ctx[1];
  }
  set variant(e) {
    this.$$set({ variant: e }), _();
  }
  get iconBgShape() {
    return this.$$.ctx[2];
  }
  set iconBgShape(e) {
    this.$$set({ iconBgShape: e }), _();
  }
  get fixed() {
    return this.$$.ctx[3];
  }
  set fixed(e) {
    this.$$set({ fixed: e }), _();
  }
  get offsetPx() {
    return this.$$.ctx[4];
  }
  set offsetPx(e) {
    this.$$set({ offsetPx: e }), _();
  }
  get expandDirection() {
    return this.$$.ctx[5];
  }
  set expandDirection(e) {
    this.$$set({ expandDirection: e }), _();
  }
}
W(et, { badge: {}, variant: {}, iconBgShape: {}, fixed: { type: "Boolean" }, offsetPx: {}, expandDirection: {} }, [], [], !0);
function Ni(n) {
  le(n, "svelte-1achwnm", `.prio.svelte-1achwnm.svelte-1achwnm{width:var(--prio-size);height:var(--prio-size);border-radius:999px;display:inline-flex;align-items:center;justify-content:center;cursor:default;outline:none;user-select:none;transition:transform 160ms cubic-bezier(0.2, 0, 0, 1), box-shadow 160ms cubic-bezier(0.2, 0, 0, 1),
      filter 160ms cubic-bezier(0.2, 0, 0, 1);--prio-solid:rgb(17, 24, 39);--prio-border:color-mix(in srgb, var(--prio-solid) 65%, transparent);--prio-text:#ffffff}.prio-inner.svelte-1achwnm.svelte-1achwnm{width:100%;height:100%;border-radius:999px;display:inline-flex;align-items:center;justify-content:center}.prio.with-label.svelte-1achwnm .prio-inner.svelte-1achwnm{flex-direction:column;gap:2px;padding:3px 5px 5px 5px;box-sizing:border-box}.prio-text.svelte-1achwnm.svelte-1achwnm{font-size:var(--prio-text-size, 10px);font-weight:550;letter-spacing:0.02em;line-height:1.05;color:var(--prio-text);text-align:center;white-space:normal;overflow-wrap:anywhere;opacity:0.95}.prio.solid.svelte-1achwnm.svelte-1achwnm{background:var(--prio-solid)}.prio.ring.svelte-1achwnm.svelte-1achwnm{background:#ffffff;box-shadow:inset 0 0 0 2px var(--prio-solid);--prio-text:var(--prio-solid)}.prio.double-ring.svelte-1achwnm.svelte-1achwnm{background:var(--prio-solid);box-shadow:inset 0 0 0 3px rgba(255, 255, 255, 0.95), 0 0 0 2px var(--prio-solid)}.prio.stamp.svelte-1achwnm.svelte-1achwnm{background:var(--prio-solid);box-shadow:inset 0 0 0 2px rgba(255, 255, 255, 0.85);filter:saturate(1.05)}.prio.stamp.svelte-1achwnm .prio-inner.svelte-1achwnm{background-image:radial-gradient(rgba(255, 255, 255, 0.08) 1px, transparent 0);background-size:6px 6px;background-position:0 0}.prio.glow.svelte-1achwnm.svelte-1achwnm{background:var(--prio-solid);box-shadow:0 10px 22px rgba(17, 24, 39, 0.16), 0 0 0 3px rgba(255, 255, 255, 0.92)}`);
}
function Ie(n) {
  let e, t;
  return e = new fe({
    props: {
      badge: (
        /*badge*/
        n[0]
      ),
      placement: "top",
      openDelayMs: 120,
      contentMode: "labelAndDescription",
      $$slots: { trigger: [Ei] },
      $$scope: { ctx: n }
    }
  }), {
    c() {
      E(e.$$.fragment);
    },
    m(i, l) {
      P(e, i, l), t = !0;
    },
    p(i, l) {
      const r = {};
      l & /*badge*/
      1 && (r.badge = /*badge*/
      i[0]), l & /*$$scope, variant, badgeColor, renderSize, textSize, badge, rawLabel, iconName, iconSize*/
      1279 && (r.$$scope = { dirty: l, ctx: i }), e.$set(r);
    },
    i(i) {
      t || ($(e.$$.fragment, i), t = !0);
    },
    o(i) {
      C(e.$$.fragment, i), t = !1;
    },
    d(i) {
      N(e, i);
    }
  };
}
function Le(n) {
  let e, t;
  return e = new re({
    props: {
      name: (
        /*iconName*/
        n[7]
      ),
      size: (
        /*iconSize*/
        n[5]
      ),
      bg: (
        /*variant*/
        n[1] === "solid" ? "#ffffff" : "var(--prio-solid)"
      ),
      bgOpacity: 1,
      fg: (
        /*variant*/
        n[1] === "solid" ? "var(--prio-solid)" : "#ffffff"
      )
    }
  }), {
    c() {
      E(e.$$.fragment);
    },
    m(i, l) {
      P(e, i, l), t = !0;
    },
    p(i, l) {
      const r = {};
      l & /*iconName*/
      128 && (r.name = /*iconName*/
      i[7]), l & /*iconSize*/
      32 && (r.size = /*iconSize*/
      i[5]), l & /*variant*/
      2 && (r.bg = /*variant*/
      i[1] === "solid" ? "#ffffff" : "var(--prio-solid)"), l & /*variant*/
      2 && (r.fg = /*variant*/
      i[1] === "solid" ? "var(--prio-solid)" : "#ffffff"), e.$set(r);
    },
    i(i) {
      t || ($(e.$$.fragment, i), t = !0);
    },
    o(i) {
      C(e.$$.fragment, i), t = !1;
    },
    d(i) {
      N(e, i);
    }
  };
}
function Ei(n) {
  let e, t, i, l, r, o, a, f, c, u, d, p, h = (
    /*iconName*/
    n[7] && Le(n)
  );
  return {
    c() {
      e = B("span"), t = B("span"), i = B("span"), h && h.c(), l = V(), r = B("span"), o = H(
        /*rawLabel*/
        n[3]
      ), s(r, "class", "prio-text svelte-1achwnm"), s(i, "class", "prio-inner svelte-1achwnm"), s(i, "aria-hidden", "true"), s(t, "class", a = "prio " + /*variant*/
      n[1] + " with-label svelte-1achwnm"), s(t, "style", f = `--prio-solid:${/*badgeColor*/
      n[6]}; --prio-size:${/*renderSize*/
      n[2]}px; --prio-text-size:${/*textSize*/
      n[4]}px;`), s(t, "role", "note"), s(t, "aria-label", c = /*badge*/
      n[0].label), s(e, "slot", "trigger"), s(e, "role", "presentation");
    },
    m(g, x) {
      y(g, e, x), m(e, t), m(t, i), h && h.m(i, null), m(i, l), m(i, r), m(r, o), u = !0, d || (p = A(e, "keydown", Ii), d = !0);
    },
    p(g, x) {
      /*iconName*/
      g[7] ? h ? (h.p(g, x), x & /*iconName*/
      128 && $(h, 1)) : (h = Le(g), h.c(), $(h, 1), h.m(i, l)) : h && (I(), C(h, 1, 1, () => {
        h = null;
      }), L()), (!u || x & /*rawLabel*/
      8) && Q(
        o,
        /*rawLabel*/
        g[3]
      ), (!u || x & /*variant*/
      2 && a !== (a = "prio " + /*variant*/
      g[1] + " with-label svelte-1achwnm")) && s(t, "class", a), (!u || x & /*badgeColor, renderSize, textSize*/
      84 && f !== (f = `--prio-solid:${/*badgeColor*/
      g[6]}; --prio-size:${/*renderSize*/
      g[2]}px; --prio-text-size:${/*textSize*/
      g[4]}px;`)) && s(t, "style", f), (!u || x & /*badge*/
      1 && c !== (c = /*badge*/
      g[0].label)) && s(t, "aria-label", c);
    },
    i(g) {
      u || ($(h), u = !0);
    },
    o(g) {
      C(h), u = !1;
    },
    d(g) {
      g && v(e), h && h.d(), d = !1, p();
    }
  };
}
function Oi(n) {
  let e, t, i = (
    /*badge*/
    n[0] && Ie(n)
  );
  return {
    c() {
      i && i.c(), e = O();
    },
    m(l, r) {
      i && i.m(l, r), y(l, e, r), t = !0;
    },
    p(l, [r]) {
      /*badge*/
      l[0] ? i ? (i.p(l, r), r & /*badge*/
      1 && $(i, 1)) : (i = Ie(l), i.c(), $(i, 1), i.m(e.parentNode, e)) : i && (I(), C(i, 1, 1, () => {
        i = null;
      }), L());
    },
    i(l) {
      t || ($(i), t = !0);
    },
    o(l) {
      C(i), t = !1;
    },
    d(l) {
      l && v(e), i && i.d(l);
    }
  };
}
function Fi(n) {
  return String(n ?? "").trim() || "—";
}
const Ii = () => {
};
function Li(n, e, t) {
  let i, l, r, o, a, f, c, { badge: u } = e, { variant: d = "solid" } = e, { size: p = 44 } = e;
  return n.$$set = (h) => {
    "badge" in h && t(0, u = h.badge), "variant" in h && t(1, d = h.variant), "size" in h && t(8, p = h.size);
  }, n.$$.update = () => {
    n.$$.dirty & /*badge*/
    1 && t(7, i = (u == null ? void 0 : u.icon) ?? null), n.$$.dirty & /*badge*/
    1 && t(6, l = String((u == null ? void 0 : u.color) ?? "").trim() || "rgb(17, 24, 39)"), n.$$.dirty & /*badge*/
    1 && t(3, r = Fi(u == null ? void 0 : u.label)), n.$$.dirty & /*rawLabel*/
    8 && t(9, o = r.length), n.$$.dirty & /*size, labelLen*/
    768 && t(2, a = Math.min(104, Math.max(p, 70 + Math.max(0, o - 12) * 1.4))), n.$$.dirty & /*renderSize*/
    4 && t(5, f = Math.round(a * 0.34)), n.$$.dirty & /*labelLen*/
    512 && t(4, c = o <= 12 ? 12 : o <= 18 ? 11 : o <= 26 ? 10 : 9);
  }, [
    u,
    d,
    a,
    r,
    c,
    f,
    l,
    i,
    p,
    o
  ];
}
class tt extends U {
  constructor(e) {
    super(), R(this, e, Li, Oi, Z, { badge: 0, variant: 1, size: 8 }, Ni);
  }
  get badge() {
    return this.$$.ctx[0];
  }
  set badge(e) {
    this.$$set({ badge: e }), _();
  }
  get variant() {
    return this.$$.ctx[1];
  }
  set variant(e) {
    this.$$set({ variant: e }), _();
  }
  get size() {
    return this.$$.ctx[8];
  }
  set size(e) {
    this.$$set({ size: e }), _();
  }
}
W(tt, { badge: {}, variant: {}, size: {} }, [], [], !0);
function Ai(n) {
  le(n, "svelte-1wx095d", ".seal.svelte-1wx095d.svelte-1wx095d{position:relative;width:var(--seal-size);height:var(--seal-size);border-radius:999px;display:inline-grid;place-items:center;outline:none;cursor:default;user-select:none;background:transparent;--seal-solid:rgb(17, 24, 39);--seal-ring:color-mix(in srgb, var(--seal-solid) 55%, transparent);--seal-line:color-mix(in srgb, var(--seal-solid) 18%, transparent);--seal-ring-fg:var(--seal-solid)}.seal.filled.svelte-1wx095d.svelte-1wx095d{background:var(--seal-solid);--seal-ring-fg:rgba(255, 255, 255, 0.92)}.ring.svelte-1wx095d.svelte-1wx095d{position:absolute;inset:0;border-radius:999px;font-size:var(--seal-font);color:var(--seal-ring-fg);opacity:0.92;text-transform:uppercase;letter-spacing:0.1em;font-weight:550}.char.svelte-1wx095d.svelte-1wx095d{width:1em;height:100%;position:absolute;top:0;left:50%;transform:translateX(-50%) rotate(var(--angle));text-align:center}.center.svelte-1wx095d.svelte-1wx095d{position:absolute;inset:0;display:grid;place-items:center}.center-pill.svelte-1wx095d.svelte-1wx095d{width:calc(var(--seal-size) * 0.64);height:calc(var(--seal-size) * 0.64);border-radius:999px;background:rgba(255, 255, 255, 0.96);border:1px solid var(--seal-line);display:grid;place-items:center;opacity:0.95}.seal.filled.svelte-1wx095d .center-pill.svelte-1wx095d{border-color:rgba(255, 255, 255, 0.35);background:#ffffff;opacity:1}");
}
function Ae(n, e, t) {
  const i = n.slice();
  return i[14] = e[t], i[16] = t, i;
}
function Ve(n) {
  let e, t;
  return e = new fe({
    props: {
      badge: (
        /*badge*/
        n[0]
      ),
      placement: "top",
      openDelayMs: 120,
      contentMode: "labelAndDescription",
      $$slots: { trigger: [Vi] },
      $$scope: { ctx: n }
    }
  }), {
    c() {
      E(e.$$.fragment);
    },
    m(i, l) {
      P(e, i, l), t = !0;
    },
    p(i, l) {
      const r = {};
      l & /*badge*/
      1 && (r.badge = /*badge*/
      i[0]), l & /*$$scope, variant, badgeColor, size, ringFontPx, badge, iconName, centerIcon, chars*/
      131327 && (r.$$scope = { dirty: l, ctx: i }), e.$set(r);
    },
    i(i) {
      t || ($(e.$$.fragment, i), t = !0);
    },
    o(i) {
      C(e.$$.fragment, i), t = !1;
    },
    d(i) {
      N(e, i);
    }
  };
}
function Ze(n, e) {
  let t, i = (
    /*char*/
    e[14] + ""
  ), l, r;
  return {
    key: n,
    first: null,
    c() {
      t = B("span"), l = H(i), s(t, "class", "char svelte-1wx095d"), s(t, "style", r = `--angle:${1 / /*chars*/
      e[5].length * /*index*/
      e[16]}turn;`), this.first = t;
    },
    m(o, a) {
      y(o, t, a), m(t, l);
    },
    p(o, a) {
      e = o, a & /*chars*/
      32 && i !== (i = /*char*/
      e[14] + "") && Q(l, i), a & /*chars*/
      32 && r !== (r = `--angle:${1 / /*chars*/
      e[5].length * /*index*/
      e[16]}turn;`) && s(t, "style", r);
    },
    d(o) {
      o && v(t);
    }
  };
}
function He(n) {
  let e, t;
  return e = new re({
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
      P(e, i, l), t = !0;
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
      t || ($(e.$$.fragment, i), t = !0);
    },
    o(i) {
      C(e.$$.fragment, i), t = !1;
    },
    d(i) {
      N(e, i);
    }
  };
}
function Vi(n) {
  let e, t, i, l = [], r = /* @__PURE__ */ new Map(), o, a, f, c, u, d, p, h, g, x = xe(
    /*chars*/
    n[5]
  );
  const T = (S) => (
    /*index*/
    S[16]
  );
  for (let S = 0; S < x.length; S += 1) {
    let z = Ae(n, x, S), M = T(z);
    r.set(M, l[S] = Ze(M, z));
  }
  let b = (
    /*iconName*/
    n[7] && He(n)
  );
  return {
    c() {
      e = B("span"), t = B("span"), i = B("span");
      for (let S = 0; S < l.length; S += 1)
        l[S].c();
      o = V(), a = B("span"), f = B("span"), b && b.c(), s(i, "class", "ring svelte-1wx095d"), s(i, "aria-hidden", "true"), s(f, "class", "center-pill svelte-1wx095d"), s(a, "class", "center svelte-1wx095d"), s(a, "aria-hidden", "true"), s(t, "class", c = "seal " + /*variant*/
      n[1] + " svelte-1wx095d"), s(t, "style", u = `--seal-solid:${/*badgeColor*/
      n[6]}; --seal-size:${/*size*/
      n[2]}px; --seal-font:${/*ringFontPx*/
      n[4]}px;`), s(t, "role", "note"), s(t, "aria-label", d = /*badge*/
      n[0].label), s(e, "slot", "trigger"), s(e, "role", "presentation");
    },
    m(S, z) {
      y(S, e, z), m(e, t), m(t, i);
      for (let M = 0; M < l.length; M += 1)
        l[M] && l[M].m(i, null);
      m(t, o), m(t, a), m(a, f), b && b.m(f, null), p = !0, h || (g = A(e, "keydown", Ri), h = !0);
    },
    p(S, z) {
      z & /*chars*/
      32 && (x = xe(
        /*chars*/
        S[5]
      ), l = kt(l, z, T, 1, S, x, r, i, wt, Ze, null, Ae)), /*iconName*/
      S[7] ? b ? (b.p(S, z), z & /*iconName*/
      128 && $(b, 1)) : (b = He(S), b.c(), $(b, 1), b.m(f, null)) : b && (I(), C(b, 1, 1, () => {
        b = null;
      }), L()), (!p || z & /*variant*/
      2 && c !== (c = "seal " + /*variant*/
      S[1] + " svelte-1wx095d")) && s(t, "class", c), (!p || z & /*badgeColor, size, ringFontPx*/
      84 && u !== (u = `--seal-solid:${/*badgeColor*/
      S[6]}; --seal-size:${/*size*/
      S[2]}px; --seal-font:${/*ringFontPx*/
      S[4]}px;`)) && s(t, "style", u), (!p || z & /*badge*/
      1 && d !== (d = /*badge*/
      S[0].label)) && s(t, "aria-label", d);
    },
    i(S) {
      p || ($(b), p = !0);
    },
    o(S) {
      C(b), p = !1;
    },
    d(S) {
      S && v(e);
      for (let z = 0; z < l.length; z += 1)
        l[z].d();
      b && b.d(), h = !1, g();
    }
  };
}
function Zi(n) {
  let e, t, i = (
    /*badge*/
    n[0] && Ve(n)
  );
  return {
    c() {
      i && i.c(), e = O();
    },
    m(l, r) {
      i && i.m(l, r), y(l, e, r), t = !0;
    },
    p(l, [r]) {
      /*badge*/
      l[0] ? i ? (i.p(l, r), r & /*badge*/
      1 && $(i, 1)) : (i = Ve(l), i.c(), $(i, 1), i.m(e.parentNode, e)) : i && (I(), C(i, 1, 1, () => {
        i = null;
      }), L());
    },
    i(l) {
      t || ($(i), t = !0);
    },
    o(l) {
      C(i), t = !1;
    },
    d(l) {
      l && v(e), i && i.d(l);
    }
  };
}
function Hi(n, e, t) {
  return Math.max(e, Math.min(t, n));
}
const Ri = () => {
};
function Wi(n, e, t) {
  let i, l, r, o, a, f, c, { badge: u } = e, { variant: d = "outlined" } = e, { ringText: p = null } = e, { repeat: h = 2 } = e, { separator: g = " • " } = e, { size: x = 76 } = e, { sealFontScale: T = 0.12 } = e;
  return n.$$set = (b) => {
    "badge" in b && t(0, u = b.badge), "variant" in b && t(1, d = b.variant), "ringText" in b && t(8, p = b.ringText), "repeat" in b && t(9, h = b.repeat), "separator" in b && t(10, g = b.separator), "size" in b && t(2, x = b.size), "sealFontScale" in b && t(11, T = b.sealFontScale);
  }, n.$$.update = () => {
    n.$$.dirty & /*badge*/
    1 && t(7, i = (u == null ? void 0 : u.icon) ?? null), n.$$.dirty & /*badge*/
    1 && t(6, l = String((u == null ? void 0 : u.color) ?? "").trim() || "rgb(17, 24, 39)"), n.$$.dirty & /*ringText, badge*/
    257 && t(12, r = (p ?? (u == null ? void 0 : u.label) ?? "").trim() || "—"), n.$$.dirty & /*repeat*/
    512 && t(13, o = Hi(Math.floor(h || 1), 1, 10)), n.$$.dirty & /*repeatSafe, displayText, separator*/
    13312 && t(5, a = [...Array(o)].map(() => [...r.toUpperCase()].concat([...g.toUpperCase()])).flat()), n.$$.dirty & /*size, sealFontScale*/
    2052 && t(4, f = Math.round(x * T)), n.$$.dirty & /*size*/
    4 && t(3, c = Math.round(x * 0.3));
  }, [
    u,
    d,
    x,
    c,
    f,
    a,
    l,
    i,
    p,
    h,
    g,
    T,
    r,
    o
  ];
}
class it extends U {
  constructor(e) {
    super(), R(
      this,
      e,
      Wi,
      Zi,
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
      Ai
    );
  }
  get badge() {
    return this.$$.ctx[0];
  }
  set badge(e) {
    this.$$set({ badge: e }), _();
  }
  get variant() {
    return this.$$.ctx[1];
  }
  set variant(e) {
    this.$$set({ variant: e }), _();
  }
  get ringText() {
    return this.$$.ctx[8];
  }
  set ringText(e) {
    this.$$set({ ringText: e }), _();
  }
  get repeat() {
    return this.$$.ctx[9];
  }
  set repeat(e) {
    this.$$set({ repeat: e }), _();
  }
  get separator() {
    return this.$$.ctx[10];
  }
  set separator(e) {
    this.$$set({ separator: e }), _();
  }
  get size() {
    return this.$$.ctx[2];
  }
  set size(e) {
    this.$$set({ size: e }), _();
  }
  get sealFontScale() {
    return this.$$.ctx[11];
  }
  set sealFontScale(e) {
    this.$$set({ sealFontScale: e }), _();
  }
}
W(it, { badge: {}, variant: {}, ringText: {}, repeat: {}, separator: {}, size: {}, sealFontScale: {} }, [], [], !0);
function Ui(n) {
  let e, t;
  return e = new it({
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
      P(e, i, l), t = !0;
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
      t || ($(e.$$.fragment, i), t = !0);
    },
    o(i) {
      C(e.$$.fragment, i), t = !1;
    },
    d(i) {
      N(e, i);
    }
  };
}
function Xi(n) {
  let e, t;
  return e = new tt({
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
      P(e, i, l), t = !0;
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
      t || ($(e.$$.fragment, i), t = !0);
    },
    o(i) {
      C(e.$$.fragment, i), t = !1;
    },
    d(i) {
      N(e, i);
    }
  };
}
function Gi(n) {
  let e, t;
  return e = new et({
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
      P(e, i, l), t = !0;
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
      t || ($(e.$$.fragment, i), t = !0);
    },
    o(i) {
      C(e.$$.fragment, i), t = !1;
    },
    d(i) {
      N(e, i);
    }
  };
}
function Ji(n) {
  let e, t;
  return e = new Qe({
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
      P(e, i, l), t = !0;
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
      t || ($(e.$$.fragment, i), t = !0);
    },
    o(i) {
      C(e.$$.fragment, i), t = !1;
    },
    d(i) {
      N(e, i);
    }
  };
}
function Yi(n) {
  let e, t, i, l;
  const r = [Ji, Gi, Xi, Ui], o = [];
  function a(f, c) {
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
  return e = a(n), t = o[e] = r[e](n), {
    c() {
      t.c(), i = O();
    },
    m(f, c) {
      o[e].m(f, c), y(f, i, c), l = !0;
    },
    p(f, [c]) {
      let u = e;
      e = a(f), e === u ? o[e].p(f, c) : (I(), C(o[u], 1, 1, () => {
        o[u] = null;
      }), L(), t = o[e], t ? t.p(f, c) : (t = o[e] = r[e](f), t.c()), $(t, 1), t.m(i.parentNode, i));
    },
    i(f) {
      l || ($(t), l = !0);
    },
    o(f) {
      C(t), l = !1;
    },
    d(f) {
      f && v(i), o[e].d(f);
    }
  };
}
function Ki(n, e, t) {
  let i, l, r, o, { badge: a } = e, { type: f = "mono" } = e, { variant: c = void 0 } = e, { size: u = void 0 } = e, { fixed: d = !1 } = e, { offsetPx: p = 16 } = e, { expandDirection: h = "right" } = e, { iconBgShape: g = void 0 } = e, { ringText: x = null } = e, { repeat: T = 2 } = e, { separator: b = " • " } = e, { sealFontScale: S = 0.12 } = e;
  return n.$$set = (z) => {
    "badge" in z && t(0, a = z.badge), "type" in z && t(1, f = z.type), "variant" in z && t(15, c = z.variant), "size" in z && t(2, u = z.size), "fixed" in z && t(3, d = z.fixed), "offsetPx" in z && t(4, p = z.offsetPx), "expandDirection" in z && t(5, h = z.expandDirection), "iconBgShape" in z && t(6, g = z.iconBgShape), "ringText" in z && t(7, x = z.ringText), "repeat" in z && t(8, T = z.repeat), "separator" in z && t(9, b = z.separator), "sealFontScale" in z && t(10, S = z.sealFontScale);
  }, n.$$.update = () => {
    n.$$.dirty & /*variant*/
    32768 && t(14, i = c ?? "filled"), n.$$.dirty & /*variant*/
    32768 && t(13, l = c ?? "outlined"), n.$$.dirty & /*variant*/
    32768 && t(12, r = c ?? "solid"), n.$$.dirty & /*variant*/
    32768 && t(11, o = c ?? "outlined");
  }, [
    a,
    f,
    u,
    d,
    p,
    h,
    g,
    x,
    T,
    b,
    S,
    o,
    r,
    l,
    i,
    c
  ];
}
class nt extends U {
  constructor(e) {
    super(), R(this, e, Ki, Yi, Z, {
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
    this.$$set({ badge: e }), _();
  }
  get type() {
    return this.$$.ctx[1];
  }
  set type(e) {
    this.$$set({ type: e }), _();
  }
  get variant() {
    return this.$$.ctx[15];
  }
  set variant(e) {
    this.$$set({ variant: e }), _();
  }
  get size() {
    return this.$$.ctx[2];
  }
  set size(e) {
    this.$$set({ size: e }), _();
  }
  get fixed() {
    return this.$$.ctx[3];
  }
  set fixed(e) {
    this.$$set({ fixed: e }), _();
  }
  get offsetPx() {
    return this.$$.ctx[4];
  }
  set offsetPx(e) {
    this.$$set({ offsetPx: e }), _();
  }
  get expandDirection() {
    return this.$$.ctx[5];
  }
  set expandDirection(e) {
    this.$$set({ expandDirection: e }), _();
  }
  get iconBgShape() {
    return this.$$.ctx[6];
  }
  set iconBgShape(e) {
    this.$$set({ iconBgShape: e }), _();
  }
  get ringText() {
    return this.$$.ctx[7];
  }
  set ringText(e) {
    this.$$set({ ringText: e }), _();
  }
  get repeat() {
    return this.$$.ctx[8];
  }
  set repeat(e) {
    this.$$set({ repeat: e }), _();
  }
  get separator() {
    return this.$$.ctx[9];
  }
  set separator(e) {
    this.$$set({ separator: e }), _();
  }
  get sealFontScale() {
    return this.$$.ctx[10];
  }
  set sealFontScale(e) {
    this.$$set({ sealFontScale: e }), _();
  }
}
W(nt, { badge: {}, type: {}, variant: {}, size: {}, fixed: { type: "Boolean" }, offsetPx: {}, expandDirection: {}, iconBgShape: {}, ringText: {}, repeat: {}, separator: {}, sealFontScale: {} }, [], [], !0);
function Qi(n) {
  let e, t;
  return e = new nt({
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
      P(e, i, l), t = !0;
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
      t || ($(e.$$.fragment, i), t = !0);
    },
    o(i) {
      C(e.$$.fragment, i), t = !1;
    },
    d(i) {
      N(e, i);
    }
  };
}
const en = "rgb(17, 24, 39)";
function Re(n) {
  return /\bdownload\b/i.test(n);
}
function tn(n, e, t) {
  let i, { badge: l = null } = e, { label: r = null } = e, { color: o = null } = e, { icon: a = null } = e, { description: f = null } = e, { actionText: c = null } = e, { actionIcon: u = null } = e, { interactive: d = !1 } = e, { type: p = "mono" } = e, { variant: h = void 0 } = e, { size: g = void 0 } = e, { fixed: x = !1 } = e, { offsetPx: T = 16 } = e, { expandDirection: b = "right" } = e, { iconBgShape: S = null } = e, { ringText: z = null } = e, { repeat: M = 2 } = e, { separator: q = " • " } = e, { sealFontScale: X = 0.12 } = e;
  return n.$$set = (w) => {
    "badge" in w && t(12, l = w.badge), "label" in w && t(13, r = w.label), "color" in w && t(14, o = w.color), "icon" in w && t(15, a = w.icon), "description" in w && t(16, f = w.description), "actionText" in w && t(17, c = w.actionText), "actionIcon" in w && t(18, u = w.actionIcon), "interactive" in w && t(19, d = w.interactive), "type" in w && t(0, p = w.type), "variant" in w && t(1, h = w.variant), "size" in w && t(2, g = w.size), "fixed" in w && t(3, x = w.fixed), "offsetPx" in w && t(4, T = w.offsetPx), "expandDirection" in w && t(5, b = w.expandDirection), "iconBgShape" in w && t(6, S = w.iconBgShape), "ringText" in w && t(7, z = w.ringText), "repeat" in w && t(8, M = w.repeat), "separator" in w && t(9, q = w.separator), "sealFontScale" in w && t(10, X = w.sealFontScale);
  }, n.$$.update = () => {
    n.$$.dirty & /*badge, label, color, icon, description, actionText, interactive, actionIcon*/
    1044480 && t(11, i = l ?? {
      label: (r ?? "").trim() || "—",
      color: (o ?? "").trim() || en,
      icon: a ?? void 0,
      description: (f ?? "").trim() || void 0,
      actionText: (c ?? "").trim() || (d ? Re((r ?? "").trim()) ? "Click to download" : "Click to interact" : void 0),
      actionIcon: u ?? (d ? Re((r ?? "").trim()) ? "Download" : "Interactive" : void 0)
    });
  }, [
    p,
    h,
    g,
    x,
    T,
    b,
    S,
    z,
    M,
    q,
    X,
    i,
    l,
    r,
    o,
    a,
    f,
    c,
    u,
    d
  ];
}
class lt extends U {
  constructor(e) {
    super(), R(this, e, tn, Qi, Z, {
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
    this.$$set({ badge: e }), _();
  }
  get label() {
    return this.$$.ctx[13];
  }
  set label(e) {
    this.$$set({ label: e }), _();
  }
  get color() {
    return this.$$.ctx[14];
  }
  set color(e) {
    this.$$set({ color: e }), _();
  }
  get icon() {
    return this.$$.ctx[15];
  }
  set icon(e) {
    this.$$set({ icon: e }), _();
  }
  get description() {
    return this.$$.ctx[16];
  }
  set description(e) {
    this.$$set({ description: e }), _();
  }
  get actionText() {
    return this.$$.ctx[17];
  }
  set actionText(e) {
    this.$$set({ actionText: e }), _();
  }
  get actionIcon() {
    return this.$$.ctx[18];
  }
  set actionIcon(e) {
    this.$$set({ actionIcon: e }), _();
  }
  get interactive() {
    return this.$$.ctx[19];
  }
  set interactive(e) {
    this.$$set({ interactive: e }), _();
  }
  get type() {
    return this.$$.ctx[0];
  }
  set type(e) {
    this.$$set({ type: e }), _();
  }
  get variant() {
    return this.$$.ctx[1];
  }
  set variant(e) {
    this.$$set({ variant: e }), _();
  }
  get size() {
    return this.$$.ctx[2];
  }
  set size(e) {
    this.$$set({ size: e }), _();
  }
  get fixed() {
    return this.$$.ctx[3];
  }
  set fixed(e) {
    this.$$set({ fixed: e }), _();
  }
  get offsetPx() {
    return this.$$.ctx[4];
  }
  set offsetPx(e) {
    this.$$set({ offsetPx: e }), _();
  }
  get expandDirection() {
    return this.$$.ctx[5];
  }
  set expandDirection(e) {
    this.$$set({ expandDirection: e }), _();
  }
  get iconBgShape() {
    return this.$$.ctx[6];
  }
  set iconBgShape(e) {
    this.$$set({ iconBgShape: e }), _();
  }
  get ringText() {
    return this.$$.ctx[7];
  }
  set ringText(e) {
    this.$$set({ ringText: e }), _();
  }
  get repeat() {
    return this.$$.ctx[8];
  }
  set repeat(e) {
    this.$$set({ repeat: e }), _();
  }
  get separator() {
    return this.$$.ctx[9];
  }
  set separator(e) {
    this.$$set({ separator: e }), _();
  }
  get sealFontScale() {
    return this.$$.ctx[10];
  }
  set sealFontScale(e) {
    this.$$set({ sealFontScale: e }), _();
  }
}
customElements.define("vis-badge", W(lt, { badge: { type: "Object" }, label: {}, color: {}, icon: {}, description: {}, actionText: {}, actionIcon: {}, interactive: { type: "Boolean" }, type: {}, variant: {}, size: { type: "Number" }, fixed: { type: "Boolean" }, offsetPx: { type: "Number" }, expandDirection: {}, iconBgShape: { type: "String", attribute: "icon-bg-shape" }, ringText: {}, repeat: { type: "Number" }, separator: {}, sealFontScale: { type: "Number" } }, [], [], !0, (n) => class extends n {
  addEventListener(e, t, i) {
    return e === "click" && (this.interactive = !0), super.addEventListener(e, t, i);
  }
}));
if (!customElements.get("vis-badge")) {
  const n = lt.element;
  customElements.define("vis-badge", n);
}
