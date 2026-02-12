var ft = Object.defineProperty;
var ct = (n, e, t) => e in n ? ft(n, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : n[e] = t;
var F = (n, e, t) => ct(n, typeof e != "symbol" ? e + "" : e, t);
function ae() {
}
function ut(n, e) {
  for (const t in e) n[t] = e[t];
  return (
    /** @type {T & S} */
    n
  );
}
function Ue(n) {
  return n();
}
function ye() {
  return /* @__PURE__ */ Object.create(null);
}
function K(n) {
  n.forEach(Ue);
}
function Xe(n) {
  return typeof n == "function";
}
function Z(n, e) {
  return n != n ? e == e : n !== e || n && typeof n == "object" || typeof n == "function";
}
function dt(n) {
  return Object.keys(n).length === 0;
}
function he(n, e, t, i) {
  if (n) {
    const l = Ge(n, e, t, i);
    return n[0](l);
  }
}
function Ge(n, e, t, i) {
  return n[1] && i ? ut(t.ctx.slice(), n[1](i(e))) : t.ctx;
}
function ge(n, e, t, i) {
  if (n[2] && i) {
    const l = n[2](i(t));
    if (e.dirty === void 0)
      return l;
    if (typeof l == "object") {
      const r = [], s = Math.max(e.dirty.length, l.length);
      for (let a = 0; a < s; a += 1)
        r[a] = e.dirty[a] | l[a];
      return r;
    }
    return e.dirty | l;
  }
  return e.dirty;
}
function pe(n, e, t, i, l, r) {
  if (l) {
    const s = Ge(e, t, i, r);
    n.p(s, l);
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
const ht = typeof window < "u" ? window : typeof globalThis < "u" ? globalThis : (
  // @ts-ignore Node typings have this
  global
);
function _(n, e) {
  n.appendChild(e);
}
function le(n, e, t) {
  const i = gt(n);
  if (!i.getElementById(e)) {
    const l = C("style");
    l.id = e, l.textContent = t, pt(i, l);
  }
}
function gt(n) {
  if (!n) return document;
  const e = n.getRootNode ? n.getRootNode() : n.ownerDocument;
  return e && /** @type {ShadowRoot} */
  e.host ? (
    /** @type {ShadowRoot} */
    e
  ) : n.ownerDocument;
}
function pt(n, e) {
  return _(
    /** @type {Document} */
    n.head || n,
    e
  ), e.sheet;
}
function w(n, e, t) {
  n.insertBefore(e, t || null);
}
function v(n) {
  n.parentNode && n.parentNode.removeChild(n);
}
function C(n) {
  return document.createElement(n);
}
function m(n) {
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
function o(n, e, t) {
  t == null ? n.removeAttribute(e) : n.getAttribute(e) !== t && n.setAttribute(e, t);
}
function bt(n) {
  return Array.from(n.childNodes);
}
function Q(n, e) {
  e = "" + e, n.data !== e && (n.data = /** @type {string} */
  e);
}
function oe(n, e, t, i) {
  t == null ? n.style.removeProperty(e) : n.style.setProperty(e, t, "");
}
function _t(n) {
  const e = {};
  return n.childNodes.forEach(
    /** @param {Element} node */
    (t) => {
      e[t.slot || "default"] = !0;
    }
  ), e;
}
let we;
function se(n) {
  we = n;
}
const ie = [], _e = [];
let ne = [];
const $e = [], Je = /* @__PURE__ */ Promise.resolve();
let ve = !1;
function Ye() {
  ve || (ve = !0, Je.then(k));
}
function mt() {
  return Ye(), Je;
}
function ke(n) {
  ne.push(n);
}
const me = /* @__PURE__ */ new Set();
let te = 0;
function k() {
  if (te !== 0)
    return;
  const n = we;
  do {
    try {
      for (; te < ie.length; ) {
        const e = ie[te];
        te++, se(e), vt(e.$$);
      }
    } catch (e) {
      throw ie.length = 0, te = 0, e;
    }
    for (se(null), ie.length = 0, te = 0; _e.length; ) _e.pop()();
    for (let e = 0; e < ne.length; e += 1) {
      const t = ne[e];
      me.has(t) || (me.add(t), t());
    }
    ne.length = 0;
  } while (ie.length);
  for (; $e.length; )
    $e.pop()();
  ve = !1, me.clear(), se(n);
}
function vt(n) {
  if (n.fragment !== null) {
    n.update(), K(n.before_update);
    const e = n.dirty;
    n.dirty = [-1], n.fragment && n.fragment.p(n.ctx, e), n.after_update.forEach(ke);
  }
}
function kt(n) {
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
function B(n, e, t, i) {
  if (n && n.o) {
    if (ue.has(n)) return;
    ue.add(n), Y.c.push(() => {
      ue.delete(n), i && (t && n.d(1), i());
    }), n.o(e);
  } else i && i();
}
function Se(n) {
  return (n == null ? void 0 : n.length) !== void 0 ? n : Array.from(n);
}
function wt(n, e) {
  n.d(1), e.delete(n.key);
}
function yt(n, e, t, i, l, r, s, a, f, c, u, d) {
  let p = n.length, h = r.length, g = p;
  const S = {};
  for (; g--; ) S[n[g].key] = g;
  const T = [], b = /* @__PURE__ */ new Map(), z = /* @__PURE__ */ new Map(), x = [];
  for (g = h; g--; ) {
    const y = d(l, r, g), D = t(y);
    let j = s.get(D);
    j ? x.push(() => j.p(y, e)) : (j = c(D, y), j.c()), b.set(D, T[g] = j), D in S && z.set(D, Math.abs(g - S[D]));
  }
  const M = /* @__PURE__ */ new Set(), q = /* @__PURE__ */ new Set();
  function X(y) {
    $(y, 1), y.m(a, u), s.set(y.key, y), u = y.first, h--;
  }
  for (; p && h; ) {
    const y = T[h - 1], D = n[p - 1], j = y.key, ee = D.key;
    y === D ? (u = y.first, p--, h--) : b.has(ee) ? !s.has(j) || M.has(j) ? X(y) : q.has(ee) ? p-- : z.get(j) > z.get(ee) ? (q.add(j), X(y)) : (M.add(ee), p--) : (f(D, s), p--);
  }
  for (; p--; ) {
    const y = n[p];
    b.has(y.key) || f(y, s);
  }
  for (; h; ) X(T[h - 1]);
  return K(x), T;
}
function E(n) {
  n && n.c();
}
function P(n, e, t) {
  const { fragment: i, after_update: l } = n.$$;
  i && i.m(e, t), ke(() => {
    const r = n.$$.on_mount.map(Ue).filter(Xe);
    n.$$.on_destroy ? n.$$.on_destroy.push(...r) : K(r), n.$$.on_mount = [];
  }), l.forEach(ke);
}
function N(n, e) {
  const t = n.$$;
  t.fragment !== null && (kt(t.after_update), K(t.on_destroy), t.fragment && t.fragment.d(e), t.on_destroy = t.fragment = null, t.ctx = []);
}
function $t(n, e) {
  n.$$.dirty[0] === -1 && (ie.push(n), Ye(), n.$$.dirty.fill(0)), n.$$.dirty[e / 31 | 0] |= 1 << e % 31;
}
function R(n, e, t, i, l, r, s = null, a = [-1]) {
  const f = we;
  se(n);
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
  s && s(c.root);
  let u = !1;
  if (c.ctx = t ? t(n, e.props || {}, (d, p, ...h) => {
    const g = h.length ? h[0] : p;
    return c.ctx && l(c.ctx[d], c.ctx[d] = g) && (!c.skip_bound && c.bound[d] && c.bound[d](g), u && $t(n, d)), p;
  }) : [], c.update(), u = !0, K(c.before_update), c.fragment = i ? i(c.ctx) : !1, e.target) {
    if (e.hydrate) {
      const d = bt(e.target);
      c.fragment && c.fragment.l(d), d.forEach(v);
    } else
      c.fragment && c.fragment.c();
    e.intro && $(n.$$.fragment), P(n, e.target, e.anchor), k();
  }
  se(f);
}
let Ke;
typeof HTMLElement == "function" && (Ke = class extends HTMLElement {
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
      let t = function(s) {
        return () => {
          let a;
          return {
            c: function() {
              a = C("slot"), s !== "default" && o(a, "name", s);
            },
            /**
             * @param {HTMLElement} target
             * @param {HTMLElement} [anchor]
             */
            m: function(u, d) {
              w(u, a, d);
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
      const i = {}, l = _t(this);
      for (const s of this.$$s)
        s in l && (i[s] = [t(s)]);
      for (const s of this.attributes) {
        const a = this.$$g_p(s.name);
        a in this.$$d || (this.$$d[a] = de(a, s.value, this.$$p_d, "toProp"));
      }
      for (const s in this.$$p_d)
        !(s in this.$$d) && this[s] !== void 0 && (this.$$d[s] = this[s], delete this[s]);
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
        for (const s in this.$$p_d)
          if (this.$$d[s] = this.$$c.$$.ctx[this.$$c.$$.props[s]], this.$$p_d[s].reflect) {
            const a = de(
              s,
              this.$$d[s],
              this.$$p_d,
              "toAttribute"
            );
            a == null ? this.removeAttribute(this.$$p_d[s].attribute || s) : this.setAttribute(this.$$p_d[s].attribute || s, a);
          }
        this.$$r = !1;
      };
      this.$$c.$$.after_update.push(r), r();
      for (const s in this.$$l)
        for (const a of this.$$l[s]) {
          const f = this.$$c.$on(s, a);
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
  let s = class extends Ke {
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
    Object.defineProperty(s.prototype, a, {
      get() {
        return this.$$c && a in this.$$c ? this.$$c[a] : this.$$d[a];
      },
      set(f) {
        var c;
        f = de(a, f, e), this.$$d[a] = f, (c = this.$$c) == null || c.$set({ [a]: f });
      }
    });
  }), i.forEach((a) => {
    Object.defineProperty(s.prototype, a, {
      get() {
        var f;
        return (f = this.$$c) == null ? void 0 : f[a];
      }
    });
  }), r && (s = r(s)), n.element = /** @type {any} */
  s, s;
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
    if (!Xe(t))
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
    this.$$set && !dt(e) && (this.$$.skip_bound = !0, this.$$set(e), this.$$.skip_bound = !1);
  }
}
const St = "4";
typeof window < "u" && (window.__svelte || (window.__svelte = { v: /* @__PURE__ */ new Set() })).v.add(St);
const { window: ze } = ht;
function zt(n) {
  le(n, "svelte-10mh9hx", ".tooltipWrap.svelte-10mh9hx.svelte-10mh9hx{position:relative;display:inline-flex;align-items:center}.trigger.svelte-10mh9hx.svelte-10mh9hx{display:inline-flex;align-items:center}.tooltip.svelte-10mh9hx.svelte-10mh9hx{display:block;position:fixed;z-index:2000;width:max-content;max-width:min(280px, 64vw);padding:7px 9px;border-radius:9px;border:1px solid rgba(17, 24, 39, 0.14);background:rgba(17, 24, 39, 0.96);color:#ffffff;box-shadow:0 10px 24px rgba(17, 24, 39, 0.2);font-size:12px;line-height:1.3;opacity:0;visibility:hidden;transform:translateY(-6px);pointer-events:none;transition:opacity 130ms ease, transform 130ms ease}.tooltip.open.svelte-10mh9hx.svelte-10mh9hx{opacity:1;visibility:visible;transform:translateY(0);pointer-events:auto}.arrow.svelte-10mh9hx.svelte-10mh9hx{position:absolute;width:8px;height:8px;background:rgba(17, 24, 39, 0.96);border-left:1px solid rgba(17, 24, 39, 0.14);border-top:1px solid rgba(17, 24, 39, 0.14);transform:rotate(45deg)}.tooltip.top.svelte-10mh9hx .arrow.svelte-10mh9hx{bottom:-4px}.tooltip.bottom.svelte-10mh9hx .arrow.svelte-10mh9hx{top:-4px;transform:rotate(225deg)}.tooltip.left.svelte-10mh9hx .arrow.svelte-10mh9hx{right:-4px;transform:rotate(135deg)}.tooltip.right.svelte-10mh9hx .arrow.svelte-10mh9hx{left:-4px;transform:rotate(-45deg)}");
}
const xt = (n) => ({}), xe = (n) => ({}), Mt = (n) => ({}), Me = (n) => ({});
function Bt(n) {
  let e, t, i, l, r, s, a, f, c, u, d, p;
  const h = (
    /*#slots*/
    n[12].trigger
  ), g = he(
    h,
    n,
    /*$$scope*/
    n[11],
    Me
  ), S = (
    /*#slots*/
    n[12].content
  ), T = he(
    S,
    n,
    /*$$scope*/
    n[11],
    xe
  );
  return {
    c() {
      e = C("span"), t = C("span"), g && g.c(), i = V(), l = C("span"), r = C("span"), T && T.c(), s = V(), a = C("span"), o(t, "class", "trigger svelte-10mh9hx"), o(r, "class", "content"), o(a, "class", "arrow svelte-10mh9hx"), o(a, "aria-hidden", "true"), o(
        a,
        "style",
        /*arrowStyle*/
        n[5]
      ), o(l, "class", f = "tooltip " + /*open*/
      (n[0] ? "open" : "") + " " + /*effectivePlacement*/
      n[3] + " svelte-10mh9hx"), o(l, "role", "tooltip"), o(l, "aria-hidden", c = !/*open*/
      n[0]), o(
        l,
        "style",
        /*tooltipStyle*/
        n[4]
      ), o(e, "class", "tooltipWrap svelte-10mh9hx"), o(e, "role", "group");
    },
    m(b, z) {
      w(b, e, z), _(e, t), g && g.m(t, null), n[13](t), _(e, i), _(e, l), _(l, r), T && T.m(r, null), _(l, s), _(l, a), n[14](l), u = !0, d || (p = [
        A(
          ze,
          "resize",
          /*onWindowChange*/
          n[8]
        ),
        A(
          ze,
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
    p(b, [z]) {
      g && g.p && (!u || z & /*$$scope*/
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
          z,
          Mt
        ) : be(
          /*$$scope*/
          b[11]
        ),
        Me
      ), T && T.p && (!u || z & /*$$scope*/
      2048) && pe(
        T,
        S,
        b,
        /*$$scope*/
        b[11],
        u ? ge(
          S,
          /*$$scope*/
          b[11],
          z,
          xt
        ) : be(
          /*$$scope*/
          b[11]
        ),
        xe
      ), (!u || z & /*arrowStyle*/
      32) && o(
        a,
        "style",
        /*arrowStyle*/
        b[5]
      ), (!u || z & /*open, effectivePlacement*/
      9 && f !== (f = "tooltip " + /*open*/
      (b[0] ? "open" : "") + " " + /*effectivePlacement*/
      b[3] + " svelte-10mh9hx")) && o(l, "class", f), (!u || z & /*open*/
      1 && c !== (c = !/*open*/
      b[0])) && o(l, "aria-hidden", c), (!u || z & /*tooltipStyle*/
      16) && o(
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
      B(g, b), B(T, b), u = !1;
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
  const i = window.innerWidth, l = window.innerHeight, r = e.top - G - t.height >= J, s = e.bottom + G + t.height <= l - J, a = e.left - G - t.width >= J, f = e.right + G + t.width <= i - J;
  return n === "top" && !r && s ? "bottom" : n === "bottom" && !s && r ? "top" : n === "left" && !a && f ? "right" : n === "right" && !f && a ? "left" : n;
}
function Tt(n, e, t) {
  let { $$slots: i = {}, $$scope: l } = e, { placement: r = "top" } = e, { openDelayMs: s = 80 } = e, a = !1, f = null, c = null, u = null, d = r, p = "", h = "";
  function g() {
    f && clearTimeout(f), f = setTimeout(() => t(0, a = !0), s);
  }
  function S() {
    f && clearTimeout(f), f = null, t(0, a = !1);
  }
  async function T() {
    if (!a || !c || !u) return;
    await mt();
    const M = c.getBoundingClientRect(), q = u.getBoundingClientRect(), X = window.innerWidth, y = window.innerHeight;
    t(3, d = Ct(r, M, q));
    let D = 0, j = 0;
    d === "top" ? (j = M.top - G - q.height, D = M.left + M.width / 2 - q.width / 2) : d === "bottom" ? (j = M.bottom + G, D = M.left + M.width / 2 - q.width / 2) : d === "left" ? (j = M.top + M.height / 2 - q.height / 2, D = M.left - G - q.width) : (j = M.top + M.height / 2 - q.height / 2, D = M.right + G), D = ce(D, J, X - q.width - J), j = ce(j, J, y - q.height - J);
    const ee = M.left + M.width / 2, ot = M.top + M.height / 2, st = ce(ee - D - 4, 10, q.width - 10), at = ce(ot - j - 4, 10, q.height - 10);
    t(5, h = d === "top" || d === "bottom" ? `left:${st}px;` : `top:${at}px;`), t(4, p = `left:${Math.round(D)}px;top:${Math.round(j)}px;`);
  }
  function b() {
    T();
  }
  function z(M) {
    _e[M ? "unshift" : "push"](() => {
      c = M, t(1, c);
    });
  }
  function x(M) {
    _e[M ? "unshift" : "push"](() => {
      u = M, t(2, u);
    });
  }
  return n.$$set = (M) => {
    "placement" in M && t(9, r = M.placement), "openDelayMs" in M && t(10, s = M.openDelayMs), "$$scope" in M && t(11, l = M.$$scope);
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
    S,
    b,
    r,
    s,
    l,
    i,
    z,
    x
  ];
}
class Qe extends U {
  constructor(e) {
    super(), R(this, e, Tt, Bt, Z, { placement: 9, openDelayMs: 10 }, zt);
  }
  get placement() {
    return this.$$.ctx[9];
  }
  set placement(e) {
    this.$$set({ placement: e }), k();
  }
  get openDelayMs() {
    return this.$$.ctx[10];
  }
  set openDelayMs(e) {
    this.$$set({ openDelayMs: e }), k();
  }
}
W(Qe, { placement: {}, openDelayMs: {} }, ["trigger", "content"], [], !0);
function Dt(n) {
  let e;
  return {
    c() {
      e = C("span"), oe(e, "display", "inline-block"), oe(
        e,
        "width",
        /*size*/
        n[1] + "px"
      ), oe(
        e,
        "height",
        /*size*/
        n[1] + "px"
      ), o(e, "aria-hidden", "true");
    },
    m(t, i) {
      w(t, e, i);
    },
    p(t, i) {
      i & /*size*/
      2 && oe(
        e,
        "width",
        /*size*/
        t[1] + "px"
      ), i & /*size*/
      2 && oe(
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
function jt(n) {
  let e, t, i, l, r, s, a = (
    /*bg*/
    n[2] && Be(n)
  );
  return {
    c() {
      e = m("svg"), a && a.c(), t = m("g"), i = m("path"), l = m("path"), r = m("path"), o(i, "d", "M15 3h6v6"), o(l, "d", "M10 14 21 3"), o(r, "d", "M21 13v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7"), o(t, "transform", "translate(12 12) scale(0.68) translate(-12 -12)"), o(
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
    m(f, c) {
      w(f, e, c), a && a.m(e, null), _(e, t), _(t, i), _(t, l), _(t, r);
    },
    p(f, c) {
      /*bg*/
      f[2] ? a ? a.p(f, c) : (a = Be(f), a.c(), a.m(e, t)) : a && (a.d(1), a = null), c & /*size*/
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
      8 && s !== (s = /*fg*/
      f[3] ?? "currentColor") && o(e, "stroke", s);
    },
    d(f) {
      f && v(e), a && a.d();
    }
  };
}
function qt(n) {
  let e, t, i, l, r, s, a = (
    /*bg*/
    n[2] && Ce(n)
  );
  return {
    c() {
      e = m("svg"), a && a.c(), t = m("g"), i = m("path"), l = m("path"), r = m("path"), o(i, "d", "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"), o(l, "d", "M7 10l5 5 5-5"), o(r, "d", "M12 15V3"), o(t, "transform", "translate(12 12) scale(0.68) translate(-12 -12)"), o(
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
    m(f, c) {
      w(f, e, c), a && a.m(e, null), _(e, t), _(t, i), _(t, l), _(t, r);
    },
    p(f, c) {
      /*bg*/
      f[2] ? a ? a.p(f, c) : (a = Ce(f), a.c(), a.m(e, t)) : a && (a.d(1), a = null), c & /*size*/
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
      8 && s !== (s = /*fg*/
      f[3] ?? "currentColor") && o(e, "stroke", s);
    },
    d(f) {
      f && v(e), a && a.d();
    }
  };
}
function Pt(n) {
  let e, t, i, l, r, s;
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
      ), o(e, "viewBox", "0 0 24 24"), o(e, "fill", "none"), o(e, "aria-hidden", "true"), o(e, "stroke", s = /*fg*/
      n[3] ?? "currentColor"), o(e, "stroke-width", "2"), o(e, "stroke-linecap", "round"), o(e, "stroke-linejoin", "round");
    },
    m(a, f) {
      w(a, e, f), _(e, t), _(t, i), _(t, r);
    },
    p(a, f) {
      f & /*bg*/
      4 && l !== (l = /*bg*/
      a[2] ?? "none") && o(i, "fill", l), f & /*bgOpacity*/
      16 && o(
        i,
        "opacity",
        /*bgOpacity*/
        a[4]
      ), f & /*size*/
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
      a && v(e);
    }
  };
}
function Nt(n) {
  let e, t, i, l, r, s;
  function a(u, d) {
    return (
      /*bg*/
      u[2] ? Ut : Wt
    );
  }
  let f = a(n), c = f(n);
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
      ), o(e, "viewBox", "0 0 24 24"), o(e, "fill", "none"), o(e, "aria-hidden", "true"), o(e, "stroke", s = /*fg*/
      n[3] ?? "currentColor"), o(e, "stroke-width", "2"), o(e, "stroke-linecap", "round"), o(e, "stroke-linejoin", "round");
    },
    m(u, d) {
      w(u, e, d), c.m(e, null), _(e, t), _(t, i), _(t, l), _(t, r);
    },
    p(u, d) {
      f === (f = a(u)) && c ? c.p(u, d) : (c.d(1), c = f(u), c && (c.c(), c.m(e, t))), d & /*size*/
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
      u && v(e), c.d();
    }
  };
}
function Et(n) {
  let e, t, i, l, r, s, a;
  function f(d, p) {
    return (
      /*bg*/
      d[2] ? Yt : Jt
    );
  }
  let c = f(n), u = c(n);
  return {
    c() {
      e = m("svg"), u.c(), t = m("g"), i = m("polyline"), l = m("polyline"), r = m("line"), s = m("line"), o(i, "points", "15 3 21 3 21 9"), o(l, "points", "9 21 3 21 3 15"), o(r, "x1", "21"), o(r, "y1", "3"), o(r, "x2", "14"), o(r, "y2", "10"), o(s, "x1", "3"), o(s, "y1", "21"), o(s, "x2", "10"), o(s, "y2", "14"), o(t, "transform", "translate(12 12) scale(0.68) translate(-12 -12)"), o(
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
    m(d, p) {
      w(d, e, p), u.m(e, null), _(e, t), _(t, i), _(t, l), _(t, r), _(t, s);
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
      8 && a !== (a = /*fg*/
      d[3] ?? "currentColor") && o(e, "stroke", a);
    },
    d(d) {
      d && v(e), u.d();
    }
  };
}
function Ot(n) {
  let e, t, i, l, r, s, a, f;
  function c(p, h) {
    return (
      /*bg*/
      p[2] ? ti : ei
    );
  }
  let u = c(n), d = u(n);
  return {
    c() {
      e = m("svg"), d.c(), t = m("g"), i = m("path"), l = m("path"), r = m("path"), s = m("path"), a = m("path"), o(i, "d", "M14 4.1 12 6"), o(l, "d", "m5.1 8-2.9-.8"), o(r, "d", "m6 12-1.9 2"), o(s, "d", "M7.2 2.2 8 5.1"), o(a, "d", "M9.037 9.69a.498.498 0 0 1 .653-.653l11 4.5a.5.5 0 0 1-.074.949l-4.349 1.041a1 1 0 0 0-.74.739l-1.04 4.35a.5.5 0 0 1-.95.074z"), o(t, "transform", "translate(12 12) scale(0.68) translate(-12 -12)"), o(
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
    m(p, h) {
      w(p, e, h), d.m(e, null), _(e, t), _(t, i), _(t, l), _(t, r), _(t, s), _(t, a);
    },
    p(p, h) {
      u === (u = c(p)) && d ? d.p(p, h) : (d.d(1), d = u(p), d && (d.c(), d.m(e, t))), h & /*size*/
      2 && o(
        e,
        "width",
        /*size*/
        p[1]
      ), h & /*size*/
      2 && o(
        e,
        "height",
        /*size*/
        p[1]
      ), h & /*fg*/
      8 && f !== (f = /*fg*/
      p[3] ?? "currentColor") && o(e, "stroke", f);
    },
    d(p) {
      p && v(e), d.d();
    }
  };
}
function Ft(n) {
  let e, t, i, l, r;
  function s(c, u) {
    return (
      /*bg*/
      c[2] ? ri : li
    );
  }
  let a = s(n), f = a(n);
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
      w(c, e, u), f.m(e, null), _(e, t), _(e, l);
    },
    p(c, u) {
      a === (a = s(c)) && f ? f.p(c, u) : (f.d(1), f = a(c), f && (f.c(), f.m(e, t))), u & /*fg*/
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
function It(n) {
  let e, t, i, l, r;
  function s(c, u) {
    return (
      /*bg*/
      c[2] ? fi : ai
    );
  }
  let a = s(n), f = a(n);
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
      w(c, e, u), f.m(e, null), _(e, t), _(e, l);
    },
    p(c, u) {
      a === (a = s(c)) && f ? f.p(c, u) : (f.d(1), f = a(c), f && (f.c(), f.m(e, t))), u & /*fg*/
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
function Lt(n) {
  let e, t, i, l, r, s, a;
  return {
    c() {
      e = m("svg"), t = m("path"), l = m("path"), s = m("path"), o(t, "d", "M12 3.5c.4 0 .8.2 1 .6l9 15.6c.4.7-.1 1.6-1 1.6H3c-.9 0-1.4-.9-1-1.6l9-15.6c.2-.4.6-.6 1-.6Z"), o(t, "fill", i = /*bg*/
      n[2] ?? "currentColor"), o(
        t,
        "opacity",
        /*bgOpacity*/
        n[4]
      ), o(l, "d", "M12 8a1 1 0 0 1 1 1l-.3 5.5a.7.7 0 0 1-1.4 0L11 9a1 1 0 0 1 1-1Z"), o(l, "fill", r = /*fg*/
      n[3] ?? "currentColor"), o(s, "d", "M12 18a1.25 1.25 0 1 1 0-2.5A1.25 1.25 0 0 1 12 18Z"), o(s, "fill", a = /*fg*/
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
      w(f, e, c), _(e, t), _(e, l), _(e, s);
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
      8 && a !== (a = /*fg*/
      f[3] ?? "currentColor") && o(s, "fill", a), c & /*size*/
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
function At(n) {
  let e, t, i;
  function l(a, f) {
    return (
      /*bg*/
      a[2] ? hi : di
    );
  }
  let r = l(n), s = r(n);
  return {
    c() {
      e = m("svg"), s.c(), t = m("path"), o(t, "d", "M9.2 12.5 7.5 10.8a1 1 0 0 0-1.4 1.4l2.4 2.4a1 1 0 0 0 1.4 0l7-7a1 1 0 1 0-1.4-1.4l-6.3 6.3Z"), o(t, "fill", i = /*fg*/
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
    m(a, f) {
      w(a, e, f), s.m(e, null), _(e, t);
    },
    p(a, f) {
      r === (r = l(a)) && s ? s.p(a, f) : (s.d(1), s = r(a), s && (s.c(), s.m(e, t))), f & /*fg*/
      8 && i !== (i = /*fg*/
      a[3] ?? "currentColor") && o(t, "fill", i), f & /*size*/
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
      a && v(e), s.d();
    }
  };
}
function Be(n) {
  let e;
  function t(r, s) {
    return (
      /*bgShape*/
      r[5] === "square" ? Zt : Vt
    );
  }
  let i = t(n), l = i(n);
  return {
    c() {
      l.c(), e = O();
    },
    m(r, s) {
      l.m(r, s), w(r, e, s);
    },
    p(r, s) {
      i === (i = t(r)) && l ? l.p(r, s) : (l.d(1), l = i(r), l && (l.c(), l.m(e.parentNode, e)));
    },
    d(r) {
      r && v(e), l.d(r);
    }
  };
}
function Vt(n) {
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
      w(t, e, i);
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
function Zt(n) {
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
      w(t, e, i);
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
function Ce(n) {
  let e;
  function t(r, s) {
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
    m(r, s) {
      l.m(r, s), w(r, e, s);
    },
    p(r, s) {
      i === (i = t(r)) && l ? l.p(r, s) : (l.d(1), l = i(r), l && (l.c(), l.m(e.parentNode, e)));
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
      w(t, e, i);
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
function Rt(n) {
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
      w(t, e, i);
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
function Wt(n) {
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
      w(t, e, i);
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
function Ut(n) {
  let e;
  function t(r, s) {
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
    m(r, s) {
      l.m(r, s), w(r, e, s);
    },
    p(r, s) {
      i === (i = t(r)) && l ? l.p(r, s) : (l.d(1), l = i(r), l && (l.c(), l.m(e.parentNode, e)));
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
      w(t, e, i);
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
function Gt(n) {
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
      w(t, e, i);
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
      w(t, e, i);
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
function Yt(n) {
  let e;
  function t(r, s) {
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
    m(r, s) {
      l.m(r, s), w(r, e, s);
    },
    p(r, s) {
      i === (i = t(r)) && l ? l.p(r, s) : (l.d(1), l = i(r), l && (l.c(), l.m(e.parentNode, e)));
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
      w(t, e, i);
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
function Qt(n) {
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
      w(t, e, i);
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
      e = m("path"), o(e, "d", "M3 3h18v18H3V3Z"), o(e, "fill", "currentColor"), o(
        e,
        "opacity",
        /*bgOpacity*/
        n[4]
      ), o(e, "stroke", "none");
    },
    m(t, i) {
      w(t, e, i);
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
function ti(n) {
  let e;
  function t(r, s) {
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
    m(r, s) {
      l.m(r, s), w(r, e, s);
    },
    p(r, s) {
      i === (i = t(r)) && l ? l.p(r, s) : (l.d(1), l = i(r), l && (l.c(), l.m(e.parentNode, e)));
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
      w(t, e, i);
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
function ni(n) {
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
      w(t, e, i);
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
      e = m("path"), o(e, "d", "M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20Z"), o(e, "fill", "currentColor"), o(
        e,
        "opacity",
        /*bgOpacity*/
        n[4]
      );
    },
    m(t, i) {
      w(t, e, i);
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
function ri(n) {
  let e;
  function t(r, s) {
    return (
      /*bgShape*/
      r[5] === "square" ? si : oi
    );
  }
  let i = t(n), l = i(n);
  return {
    c() {
      l.c(), e = O();
    },
    m(r, s) {
      l.m(r, s), w(r, e, s);
    },
    p(r, s) {
      i === (i = t(r)) && l ? l.p(r, s) : (l.d(1), l = i(r), l && (l.c(), l.m(e.parentNode, e)));
    },
    d(r) {
      r && v(e), l.d(r);
    }
  };
}
function oi(n) {
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
      w(t, e, i);
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
      );
    },
    m(t, i) {
      w(t, e, i);
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
function ai(n) {
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
      w(t, e, i);
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
function fi(n) {
  let e;
  function t(r, s) {
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
    m(r, s) {
      l.m(r, s), w(r, e, s);
    },
    p(r, s) {
      i === (i = t(r)) && l ? l.p(r, s) : (l.d(1), l = i(r), l && (l.c(), l.m(e.parentNode, e)));
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
      w(t, e, i);
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
function ui(n) {
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
      w(t, e, i);
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
      e = m("path"), o(e, "d", "M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20Z"), o(e, "fill", "currentColor"), o(
        e,
        "opacity",
        /*bgOpacity*/
        n[4]
      );
    },
    m(t, i) {
      w(t, e, i);
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
  function t(r, s) {
    return (
      /*bgShape*/
      r[5] === "square" ? pi : gi
    );
  }
  let i = t(n), l = i(n);
  return {
    c() {
      l.c(), e = O();
    },
    m(r, s) {
      l.m(r, s), w(r, e, s);
    },
    p(r, s) {
      i === (i = t(r)) && l ? l.p(r, s) : (l.d(1), l = i(r), l && (l.c(), l.m(e.parentNode, e)));
    },
    d(r) {
      r && v(e), l.d(r);
    }
  };
}
function gi(n) {
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
      w(t, e, i);
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
function pi(n) {
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
      w(t, e, i);
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
  function t(r, s) {
    return (
      /*name*/
      r[0] === "Confirmation" ? At : (
        /*name*/
        r[0] === "Warning" ? Lt : (
          /*name*/
          r[0] === "Info" ? It : (
            /*name*/
            r[0] === "InfoCircle" ? Ft : (
              /*name*/
              r[0] === "Interactive" ? Ot : (
                /*name*/
                r[0] === "Expand" ? Et : (
                  /*name*/
                  r[0] === "OpenData" ? Nt : (
                    /*name*/
                    r[0] === "badge-check" ? Pt : (
                      /*name*/
                      r[0] === "Download" ? qt : (
                        /*name*/
                        r[0] === "ExternalLink" ? jt : Dt
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
      l.c(), e = O();
    },
    m(r, s) {
      l.m(r, s), w(r, e, s);
    },
    p(r, [s]) {
      i === (i = t(r)) && l ? l.p(r, s) : (l.d(1), l = i(r), l && (l.c(), l.m(e.parentNode, e)));
    },
    i: ae,
    o: ae,
    d(r) {
      r && v(e), l.d(r);
    }
  };
}
function _i(n, e, t) {
  let { name: i } = e, { size: l = 0 } = e, { bg: r = null } = e, { fg: s = null } = e, { bgOpacity: a = 0.14 } = e, { bgShape: f = "round" } = e;
  return n.$$set = (c) => {
    "name" in c && t(0, i = c.name), "size" in c && t(1, l = c.size), "bg" in c && t(2, r = c.bg), "fg" in c && t(3, s = c.fg), "bgOpacity" in c && t(4, a = c.bgOpacity), "bgShape" in c && t(5, f = c.bgShape);
  }, [i, l, r, s, a, f];
}
class re extends U {
  constructor(e) {
    super(), R(this, e, _i, bi, Z, {
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
    this.$$set({ name: e }), k();
  }
  get size() {
    return this.$$.ctx[1];
  }
  set size(e) {
    this.$$set({ size: e }), k();
  }
  get bg() {
    return this.$$.ctx[2];
  }
  set bg(e) {
    this.$$set({ bg: e }), k();
  }
  get fg() {
    return this.$$.ctx[3];
  }
  set fg(e) {
    this.$$set({ fg: e }), k();
  }
  get bgOpacity() {
    return this.$$.ctx[4];
  }
  set bgOpacity(e) {
    this.$$set({ bgOpacity: e }), k();
  }
  get bgShape() {
    return this.$$.ctx[5];
  }
  set bgShape(e) {
    this.$$set({ bgShape: e }), k();
  }
}
W(re, { name: {}, size: {}, bg: {}, fg: {}, bgOpacity: {}, bgShape: {} }, [], [], !0);
function mi(n) {
  le(n, "svelte-1r1mjkg", ".desc.svelte-1r1mjkg{display:block}.actionHint.svelte-1r1mjkg{display:flex;align-items:center;justify-content:center;gap:6px;margin-top:7px;padding-top:7px;border-top:1px solid rgba(255, 255, 255, 0.18);opacity:0.92;font-size:11px;line-height:1.2;width:100%;text-align:center;font-weight:650;letter-spacing:0.06em;text-transform:uppercase}.actionIcon.svelte-1r1mjkg{display:inline-flex;align-items:center;justify-content:center}");
}
const vi = (n) => ({}), Te = (n) => ({}), ki = (n) => ({}), De = (n) => ({});
function wi(n) {
  let e;
  const t = (
    /*#slots*/
    n[6].trigger
  ), i = he(
    t,
    n,
    /*$$scope*/
    n[7],
    Te
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
          vi
        ) : be(
          /*$$scope*/
          l[7]
        ),
        Te
      );
    },
    i(l) {
      e || ($(i, l), e = !0);
    },
    o(l) {
      B(i, l), e = !1;
    },
    d(l) {
      i && i.d(l);
    }
  };
}
function yi(n) {
  let e, t;
  return e = new Qe({
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
        content: [Si],
        trigger: [$i]
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
      B(e.$$.fragment, i), t = !1;
    },
    d(i) {
      N(e, i);
    }
  };
}
function $i(n) {
  let e, t;
  const i = (
    /*#slots*/
    n[6].trigger
  ), l = he(
    i,
    n,
    /*$$scope*/
    n[7],
    De
  );
  return {
    c() {
      e = C("span"), l && l.c(), o(e, "slot", "trigger");
    },
    m(r, s) {
      w(r, e, s), l && l.m(e, null), t = !0;
    },
    p(r, s) {
      l && l.p && (!t || s & /*$$scope*/
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
          s,
          ki
        ) : be(
          /*$$scope*/
          r[7]
        ),
        De
      );
    },
    i(r) {
      t || ($(l, r), t = !0);
    },
    o(r) {
      B(l, r), t = !1;
    },
    d(r) {
      r && v(e), l && l.d(r);
    }
  };
}
function je(n) {
  let e, t = (
    /*badge*/
    n[0].label + ""
  ), i;
  return {
    c() {
      e = C("strong"), i = H(t);
    },
    m(l, r) {
      w(l, e, r), _(e, i);
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
function qe(n) {
  let e, t = (
    /*badge*/
    n[0].description + ""
  ), i;
  return {
    c() {
      e = C("span"), i = H(t), o(e, "class", "desc svelte-1r1mjkg");
    },
    m(l, r) {
      w(l, e, r), _(e, i);
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
function Pe(n) {
  let e, t, i, l = (
    /*badge*/
    n[0].actionText + ""
  ), r, s, a = (
    /*hintIcon*/
    n[4] && Ne(n)
  );
  return {
    c() {
      e = C("span"), a && a.c(), t = V(), i = C("span"), r = H(l), o(i, "class", "actionText"), o(e, "class", "actionHint svelte-1r1mjkg"), o(e, "aria-hidden", "true");
    },
    m(f, c) {
      w(f, e, c), a && a.m(e, null), _(e, t), _(e, i), _(i, r), s = !0;
    },
    p(f, c) {
      /*hintIcon*/
      f[4] ? a ? (a.p(f, c), c & /*hintIcon*/
      16 && $(a, 1)) : (a = Ne(f), a.c(), $(a, 1), a.m(e, t)) : a && (I(), B(a, 1, 1, () => {
        a = null;
      }), L()), (!s || c & /*badge*/
      1) && l !== (l = /*badge*/
      f[0].actionText + "") && Q(r, l);
    },
    i(f) {
      s || ($(a), s = !0);
    },
    o(f) {
      B(a), s = !1;
    },
    d(f) {
      f && v(e), a && a.d();
    }
  };
}
function Ne(n) {
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
      e = C("span"), E(t.$$.fragment), o(e, "class", "actionIcon svelte-1r1mjkg");
    },
    m(l, r) {
      w(l, e, r), P(t, e, null), i = !0;
    },
    p(l, r) {
      const s = {};
      r & /*hintIcon*/
      16 && (s.name = /*hintIcon*/
      l[4]), t.$set(s);
    },
    i(l) {
      i || ($(t.$$.fragment, l), i = !0);
    },
    o(l) {
      B(t.$$.fragment, l), i = !1;
    },
    d(l) {
      l && v(e), N(t);
    }
  };
}
function Si(n) {
  let e, t, i, l, r = (
    /*contentMode*/
    n[3] === "labelAndDescription" && je(n)
  ), s = (
    /*badge*/
    n[0].description && qe(n)
  ), a = (
    /*badge*/
    n[0].actionText && Pe(n)
  );
  return {
    c() {
      e = C("span"), r && r.c(), t = V(), s && s.c(), i = V(), a && a.c(), o(e, "slot", "content");
    },
    m(f, c) {
      w(f, e, c), r && r.m(e, null), _(e, t), s && s.m(e, null), _(e, i), a && a.m(e, null), l = !0;
    },
    p(f, c) {
      /*contentMode*/
      f[3] === "labelAndDescription" ? r ? r.p(f, c) : (r = je(f), r.c(), r.m(e, t)) : r && (r.d(1), r = null), /*badge*/
      f[0].description ? s ? s.p(f, c) : (s = qe(f), s.c(), s.m(e, i)) : s && (s.d(1), s = null), /*badge*/
      f[0].actionText ? a ? (a.p(f, c), c & /*badge*/
      1 && $(a, 1)) : (a = Pe(f), a.c(), $(a, 1), a.m(e, null)) : a && (I(), B(a, 1, 1, () => {
        a = null;
      }), L());
    },
    i(f) {
      l || ($(a), l = !0);
    },
    o(f) {
      B(a), l = !1;
    },
    d(f) {
      f && v(e), r && r.d(), s && s.d(), a && a.d();
    }
  };
}
function zi(n) {
  let e, t, i, l;
  const r = [yi, wi], s = [];
  function a(f, c) {
    return (
      /*showTooltip*/
      f[5] ? 0 : 1
    );
  }
  return e = a(n), t = s[e] = r[e](n), {
    c() {
      t.c(), i = O();
    },
    m(f, c) {
      s[e].m(f, c), w(f, i, c), l = !0;
    },
    p(f, [c]) {
      let u = e;
      e = a(f), e === u ? s[e].p(f, c) : (I(), B(s[u], 1, 1, () => {
        s[u] = null;
      }), L(), t = s[e], t ? t.p(f, c) : (t = s[e] = r[e](f), t.c()), $(t, 1), t.m(i.parentNode, i));
    },
    i(f) {
      l || ($(t), l = !0);
    },
    o(f) {
      B(t), l = !1;
    },
    d(f) {
      f && v(i), s[e].d(f);
    }
  };
}
function xi(n, e, t) {
  let i, l, { $$slots: r = {}, $$scope: s } = e, { badge: a } = e, { placement: f = "top" } = e, { openDelayMs: c = 80 } = e, { contentMode: u = "description" } = e;
  return n.$$set = (d) => {
    "badge" in d && t(0, a = d.badge), "placement" in d && t(1, f = d.placement), "openDelayMs" in d && t(2, c = d.openDelayMs), "contentMode" in d && t(3, u = d.contentMode), "$$scope" in d && t(7, s = d.$$scope);
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
    s
  ];
}
class fe extends U {
  constructor(e) {
    super(), R(
      this,
      e,
      xi,
      zi,
      Z,
      {
        badge: 0,
        placement: 1,
        openDelayMs: 2,
        contentMode: 3
      },
      mi
    );
  }
  get badge() {
    return this.$$.ctx[0];
  }
  set badge(e) {
    this.$$set({ badge: e }), k();
  }
  get placement() {
    return this.$$.ctx[1];
  }
  set placement(e) {
    this.$$set({ placement: e }), k();
  }
  get openDelayMs() {
    return this.$$.ctx[2];
  }
  set openDelayMs(e) {
    this.$$set({ openDelayMs: e }), k();
  }
  get contentMode() {
    return this.$$.ctx[3];
  }
  set contentMode(e) {
    this.$$set({ contentMode: e }), k();
  }
}
W(fe, { badge: {}, placement: {}, openDelayMs: {}, contentMode: {} }, ["trigger"], [], !0);
function Mi(n) {
  le(n, "svelte-jjnksu", ".badge.svelte-jjnksu{display:inline-flex;align-items:center;gap:var(--badge-gap);padding:var(--badge-pad-y) var(--badge-pad-x);border-radius:16px;border:var(--badge-border-w) solid transparent;font-weight:550;font-size:12px;line-height:1;user-select:none;outline:none;transition:background-color 120ms ease, border-color 120ms ease, color 120ms ease;--badge-solid:rgb(17, 24, 39);--badge-border:color-mix(in srgb, var(--badge-solid) 65%, transparent);--badge-fg:color-mix(in srgb, var(--badge-solid) 72%, black);--badge-bg:color-mix(in srgb, var(--badge-solid) 14%, transparent);--badge-gap:3px;--badge-pad-y:3px;--badge-pad-x:6px;--badge-border-w:1px}.badge.filled.svelte-jjnksu{background:var(--badge-solid);border-color:transparent;color:#ffffff}.badge.outlined.svelte-jjnksu{background:transparent;border-color:var(--badge-border);color:var(--badge-fg)}.icon.svelte-jjnksu{display:inline-flex;align-items:center;justify-content:center}.label.svelte-jjnksu{white-space:nowrap}");
}
function Ee(n) {
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
      $$slots: { trigger: [Bi] },
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
      63 && (r.$$scope = { dirty: l, ctx: i }), e.$set(r);
    },
    i(i) {
      t || ($(e.$$.fragment, i), t = !0);
    },
    o(i) {
      B(e.$$.fragment, i), t = !1;
    },
    d(i) {
      N(e, i);
    }
  };
}
function Oe(n) {
  let e, t, i;
  return t = new re({
    props: {
      name: (
        /*iconName*/
        n[2]
      ),
      size: Ti,
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
      e = C("span"), E(t.$$.fragment), o(e, "class", "icon svelte-jjnksu"), o(e, "aria-hidden", "true");
    },
    m(l, r) {
      w(l, e, r), P(t, e, null), i = !0;
    },
    p(l, r) {
      const s = {};
      r & /*iconName*/
      4 && (s.name = /*iconName*/
      l[2]), r & /*variant*/
      2 && (s.bg = /*variant*/
      l[1] === "outlined" ? "var(--badge-solid)" : "#ffffff"), r & /*variant*/
      2 && (s.fg = /*variant*/
      l[1] === "outlined" ? "#ffffff" : "var(--badge-solid)"), r & /*iconBgShape*/
      8 && (s.bgShape = /*iconBgShape*/
      l[3]), t.$set(s);
    },
    i(l) {
      i || ($(t.$$.fragment, l), i = !0);
    },
    o(l) {
      B(t.$$.fragment, l), i = !1;
    },
    d(l) {
      l && v(e), N(t);
    }
  };
}
function Bi(n) {
  let e, t, i, l, r = (
    /*badge*/
    n[0].label + ""
  ), s, a, f, c, u, d, p, h = (
    /*iconName*/
    n[2] && Oe(n)
  );
  return {
    c() {
      e = C("span"), t = C("span"), h && h.c(), i = V(), l = C("span"), s = H(r), o(l, "class", "label svelte-jjnksu"), o(t, "class", a = "badge " + /*variant*/
      n[1] + " svelte-jjnksu"), o(t, "style", f = `--badge-solid:${/*badgeColor*/
      n[4]};`), o(t, "role", "note"), o(t, "aria-label", c = /*badge*/
      n[0].label), o(e, "slot", "trigger"), o(e, "role", "presentation");
    },
    m(g, S) {
      w(g, e, S), _(e, t), h && h.m(t, null), _(t, i), _(t, l), _(l, s), u = !0, d || (p = A(e, "keydown", Di), d = !0);
    },
    p(g, S) {
      /*iconName*/
      g[2] ? h ? (h.p(g, S), S & /*iconName*/
      4 && $(h, 1)) : (h = Oe(g), h.c(), $(h, 1), h.m(t, i)) : h && (I(), B(h, 1, 1, () => {
        h = null;
      }), L()), (!u || S & /*badge*/
      1) && r !== (r = /*badge*/
      g[0].label + "") && Q(s, r), (!u || S & /*variant*/
      2 && a !== (a = "badge " + /*variant*/
      g[1] + " svelte-jjnksu")) && o(t, "class", a), (!u || S & /*badgeColor*/
      16 && f !== (f = `--badge-solid:${/*badgeColor*/
      g[4]};`)) && o(t, "style", f), (!u || S & /*badge*/
      1 && c !== (c = /*badge*/
      g[0].label)) && o(t, "aria-label", c);
    },
    i(g) {
      u || ($(h), u = !0);
    },
    o(g) {
      B(h), u = !1;
    },
    d(g) {
      g && v(e), h && h.d(), d = !1, p();
    }
  };
}
function Ci(n) {
  let e, t, i = (
    /*badge*/
    n[0] && Ee(n)
  );
  return {
    c() {
      i && i.c(), e = O();
    },
    m(l, r) {
      i && i.m(l, r), w(l, e, r), t = !0;
    },
    p(l, [r]) {
      /*badge*/
      l[0] ? i ? (i.p(l, r), r & /*badge*/
      1 && $(i, 1)) : (i = Ee(l), i.c(), $(i, 1), i.m(e.parentNode, e)) : i && (I(), B(i, 1, 1, () => {
        i = null;
      }), L());
    },
    i(l) {
      t || ($(i), t = !0);
    },
    o(l) {
      B(i), t = !1;
    },
    d(l) {
      l && v(e), i && i.d(l);
    }
  };
}
const Ti = 20, Di = () => {
};
function ji(n, e, t) {
  let i, l, r, { badge: s } = e, { variant: a = "filled" } = e;
  return n.$$set = (f) => {
    "badge" in f && t(0, s = f.badge), "variant" in f && t(1, a = f.variant);
  }, n.$$.update = () => {
    n.$$.dirty & /*badge*/
    1 && t(2, i = (s == null ? void 0 : s.icon) ?? null), n.$$.dirty & /*badge*/
    1 && t(4, l = String((s == null ? void 0 : s.color) ?? "").trim() || "rgb(17, 24, 39)"), n.$$.dirty & /*iconName*/
    4 && t(3, r = i === "Info" ? "square" : "round");
  }, [s, a, i, r, l];
}
class et extends U {
  constructor(e) {
    super(), R(this, e, ji, Ci, Z, { badge: 0, variant: 1 }, Mi);
  }
  get badge() {
    return this.$$.ctx[0];
  }
  set badge(e) {
    this.$$set({ badge: e }), k();
  }
  get variant() {
    return this.$$.ctx[1];
  }
  set variant(e) {
    this.$$set({ variant: e }), k();
  }
}
W(et, { badge: {}, variant: {} }, [], [], !0);
function qi(n) {
  le(n, "svelte-bhqsp8", `.wrap.fixed.svelte-bhqsp8.svelte-bhqsp8{position:fixed;z-index:50}.wrap.svelte-bhqsp8.svelte-bhqsp8{display:inline-flex;align-items:center;justify-content:flex-end;pointer-events:auto}.wrap.left.svelte-bhqsp8 .badge.mini{flex-direction:row-reverse}.badge.svelte-bhqsp8.svelte-bhqsp8{display:inline-flex;align-items:center;gap:var(--badge-gap);padding:var(--badge-pad-y) var(--badge-pad-x);border-radius:16px;border:var(--badge-border-w) solid transparent;font-weight:550;font-size:12px;line-height:1;user-select:none;outline:none;transition:background-color 160ms ease, border-color 160ms ease, color 160ms ease, box-shadow 160ms ease,
      padding 320ms cubic-bezier(0.2, 0, 0, 1);--badge-solid:rgb(17, 24, 39);--badge-border:color-mix(in srgb, var(--badge-solid) 65%, transparent);--badge-fg:color-mix(in srgb, var(--badge-solid) 72%, black);--badge-gap:3px;--badge-pad-y:3px;--badge-pad-x:6px;--badge-border-w:1px;--mini-icon-bg:var(--badge-solid);--mini-icon-fg:#ffffff}.badge.filled.svelte-bhqsp8.svelte-bhqsp8{background:var(--badge-solid);border-color:transparent;color:#ffffff}.badge.outlined.svelte-bhqsp8.svelte-bhqsp8{background:transparent;border-color:var(--badge-border);color:var(--badge-fg)}.icon.svelte-bhqsp8.svelte-bhqsp8{display:inline-flex;align-items:center;justify-content:center}.label.svelte-bhqsp8.svelte-bhqsp8{white-space:nowrap}.badge.mini.svelte-bhqsp8.svelte-bhqsp8{--badge-gap:0px;--badge-pad-y:0px;--badge-pad-x:0px;--badge-border-w:0px;border-color:transparent;background:transparent;font-size:11px}.badge.mini.svelte-bhqsp8 .label.svelte-bhqsp8{max-width:0;opacity:0;overflow:hidden;line-height:1.2;padding-bottom:1px;transition:max-width 320ms cubic-bezier(0.2, 0, 0, 1), opacity 200ms ease}.badge.mini.svelte-bhqsp8.svelte-bhqsp8:hover,.badge.mini.svelte-bhqsp8.svelte-bhqsp8:focus-visible{--badge-gap:2px;--badge-pad-y:2px;--badge-pad-x:5px;--badge-border-w:1px}.badge.mini.outlined.svelte-bhqsp8.svelte-bhqsp8:hover,.badge.mini.outlined.svelte-bhqsp8.svelte-bhqsp8:focus-visible{border-color:var(--badge-border)}.badge.mini.filled.svelte-bhqsp8.svelte-bhqsp8:hover,.badge.mini.filled.svelte-bhqsp8.svelte-bhqsp8:focus-visible{background:var(--badge-solid);border-color:transparent;color:#ffffff;--mini-icon-bg:#ffffff;--mini-icon-fg:var(--badge-solid)}.badge.mini.svelte-bhqsp8:hover .label.svelte-bhqsp8,.badge.mini.svelte-bhqsp8:focus-visible .label.svelte-bhqsp8{max-width:220px;opacity:1}`);
}
function Fe(n) {
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
      $$slots: { trigger: [Pi] },
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
      i[0]), l & /*$$scope, variant, badgeColor, badge, iconName, iconBgShapeFinal*/
      739 && (r.$$scope = { dirty: l, ctx: i }), e.$set(r);
    },
    i(i) {
      t || ($(e.$$.fragment, i), t = !0);
    },
    o(i) {
      B(e.$$.fragment, i), t = !1;
    },
    d(i) {
      N(e, i);
    }
  };
}
function Ie(n) {
  let e, t, i;
  return t = new re({
    props: {
      name: (
        /*iconName*/
        n[5]
      ),
      size: Ei,
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
      e = C("span"), E(t.$$.fragment), o(e, "class", "icon svelte-bhqsp8"), o(e, "aria-hidden", "true");
    },
    m(l, r) {
      w(l, e, r), P(t, e, null), i = !0;
    },
    p(l, r) {
      const s = {};
      r & /*iconName*/
      32 && (s.name = /*iconName*/
      l[5]), r & /*iconBgShapeFinal*/
      64 && (s.bgShape = /*iconBgShapeFinal*/
      l[6]), t.$set(s);
    },
    i(l) {
      i || ($(t.$$.fragment, l), i = !0);
    },
    o(l) {
      B(t.$$.fragment, l), i = !1;
    },
    d(l) {
      l && v(e), N(t);
    }
  };
}
function Pi(n) {
  let e, t, i, l, r = (
    /*badge*/
    n[0].label + ""
  ), s, a, f, c, u, d, p, h = (
    /*iconName*/
    n[5] && Ie(n)
  );
  return {
    c() {
      e = C("span"), t = C("span"), h && h.c(), i = V(), l = C("span"), s = H(r), o(l, "class", "label svelte-bhqsp8"), o(t, "class", a = "badge mini " + /*variant*/
      n[1] + " svelte-bhqsp8"), o(t, "style", f = `--badge-solid:${/*badgeColor*/
      n[7]};`), o(t, "role", "note"), o(t, "aria-label", c = /*badge*/
      n[0].label), o(e, "slot", "trigger"), o(e, "role", "presentation");
    },
    m(g, S) {
      w(g, e, S), _(e, t), h && h.m(t, null), _(t, i), _(t, l), _(l, s), u = !0, d || (p = A(e, "keydown", Oi), d = !0);
    },
    p(g, S) {
      /*iconName*/
      g[5] ? h ? (h.p(g, S), S & /*iconName*/
      32 && $(h, 1)) : (h = Ie(g), h.c(), $(h, 1), h.m(t, i)) : h && (I(), B(h, 1, 1, () => {
        h = null;
      }), L()), (!u || S & /*badge*/
      1) && r !== (r = /*badge*/
      g[0].label + "") && Q(s, r), (!u || S & /*variant*/
      2 && a !== (a = "badge mini " + /*variant*/
      g[1] + " svelte-bhqsp8")) && o(t, "class", a), (!u || S & /*badgeColor*/
      128 && f !== (f = `--badge-solid:${/*badgeColor*/
      g[7]};`)) && o(t, "style", f), (!u || S & /*badge*/
      1 && c !== (c = /*badge*/
      g[0].label)) && o(t, "aria-label", c);
    },
    i(g) {
      u || ($(h), u = !0);
    },
    o(g) {
      B(h), u = !1;
    },
    d(g) {
      g && v(e), h && h.d(), d = !1, p();
    }
  };
}
function Ni(n) {
  let e, t, i, l, r = (
    /*badge*/
    n[0] && Fe(n)
  );
  return {
    c() {
      e = C("div"), r && r.c(), o(e, "class", t = "wrap " + /*fixed*/
      (n[2] ? "fixed" : "") + " " + /*expandDirection*/
      n[4] + " svelte-bhqsp8"), o(e, "style", i = /*fixed*/
      n[2] ? `right:${/*offsetPx*/
      n[3]}px;bottom:${/*offsetPx*/
      n[3]}px;` : void 0), o(e, "aria-label", "Mini badge");
    },
    m(s, a) {
      w(s, e, a), r && r.m(e, null), l = !0;
    },
    p(s, [a]) {
      /*badge*/
      s[0] ? r ? (r.p(s, a), a & /*badge*/
      1 && $(r, 1)) : (r = Fe(s), r.c(), $(r, 1), r.m(e, null)) : r && (I(), B(r, 1, 1, () => {
        r = null;
      }), L()), (!l || a & /*fixed, expandDirection*/
      20 && t !== (t = "wrap " + /*fixed*/
      (s[2] ? "fixed" : "") + " " + /*expandDirection*/
      s[4] + " svelte-bhqsp8")) && o(e, "class", t), (!l || a & /*fixed, offsetPx*/
      12 && i !== (i = /*fixed*/
      s[2] ? `right:${/*offsetPx*/
      s[3]}px;bottom:${/*offsetPx*/
      s[3]}px;` : void 0)) && o(e, "style", i);
    },
    i(s) {
      l || ($(r), l = !0);
    },
    o(s) {
      B(r), l = !1;
    },
    d(s) {
      s && v(e), r && r.d();
    }
  };
}
const Ei = 24, Oi = () => {
};
function Fi(n, e, t) {
  let i, l, r, { badge: s } = e, { variant: a = "outlined" } = e, { iconBgShape: f = "round" } = e, { fixed: c = !1 } = e, { offsetPx: u = 16 } = e, { expandDirection: d = "right" } = e;
  return n.$$set = (p) => {
    "badge" in p && t(0, s = p.badge), "variant" in p && t(1, a = p.variant), "iconBgShape" in p && t(8, f = p.iconBgShape), "fixed" in p && t(2, c = p.fixed), "offsetPx" in p && t(3, u = p.offsetPx), "expandDirection" in p && t(4, d = p.expandDirection);
  }, n.$$.update = () => {
    n.$$.dirty & /*badge*/
    1 && t(5, i = (s == null ? void 0 : s.icon) ?? null), n.$$.dirty & /*badge*/
    1 && t(7, l = String((s == null ? void 0 : s.color) ?? "").trim() || "rgb(17, 24, 39)"), n.$$.dirty & /*iconName, iconBgShape*/
    288 && t(6, r = i === "Info" ? "square" : f);
  }, [
    s,
    a,
    c,
    u,
    d,
    i,
    r,
    l,
    f
  ];
}
class tt extends U {
  constructor(e) {
    super(), R(
      this,
      e,
      Fi,
      Ni,
      Z,
      {
        badge: 0,
        variant: 1,
        iconBgShape: 8,
        fixed: 2,
        offsetPx: 3,
        expandDirection: 4
      },
      qi
    );
  }
  get badge() {
    return this.$$.ctx[0];
  }
  set badge(e) {
    this.$$set({ badge: e }), k();
  }
  get variant() {
    return this.$$.ctx[1];
  }
  set variant(e) {
    this.$$set({ variant: e }), k();
  }
  get iconBgShape() {
    return this.$$.ctx[8];
  }
  set iconBgShape(e) {
    this.$$set({ iconBgShape: e }), k();
  }
  get fixed() {
    return this.$$.ctx[2];
  }
  set fixed(e) {
    this.$$set({ fixed: e }), k();
  }
  get offsetPx() {
    return this.$$.ctx[3];
  }
  set offsetPx(e) {
    this.$$set({ offsetPx: e }), k();
  }
  get expandDirection() {
    return this.$$.ctx[4];
  }
  set expandDirection(e) {
    this.$$set({ expandDirection: e }), k();
  }
}
W(tt, { badge: {}, variant: {}, iconBgShape: {}, fixed: { type: "Boolean" }, offsetPx: {}, expandDirection: {} }, [], [], !0);
function Ii(n) {
  le(n, "svelte-1achwnm", `.prio.svelte-1achwnm.svelte-1achwnm{width:var(--prio-size);height:var(--prio-size);border-radius:999px;display:inline-flex;align-items:center;justify-content:center;cursor:default;outline:none;user-select:none;transition:transform 160ms cubic-bezier(0.2, 0, 0, 1), box-shadow 160ms cubic-bezier(0.2, 0, 0, 1),
      filter 160ms cubic-bezier(0.2, 0, 0, 1);--prio-solid:rgb(17, 24, 39);--prio-border:color-mix(in srgb, var(--prio-solid) 65%, transparent);--prio-text:#ffffff}.prio-inner.svelte-1achwnm.svelte-1achwnm{width:100%;height:100%;border-radius:999px;display:inline-flex;align-items:center;justify-content:center}.prio.with-label.svelte-1achwnm .prio-inner.svelte-1achwnm{flex-direction:column;gap:2px;padding:3px 5px 5px 5px;box-sizing:border-box}.prio-text.svelte-1achwnm.svelte-1achwnm{font-size:var(--prio-text-size, 10px);font-weight:550;letter-spacing:0.02em;line-height:1.05;color:var(--prio-text);text-align:center;white-space:normal;overflow-wrap:anywhere;opacity:0.95}.prio.solid.svelte-1achwnm.svelte-1achwnm{background:var(--prio-solid)}.prio.ring.svelte-1achwnm.svelte-1achwnm{background:#ffffff;box-shadow:inset 0 0 0 2px var(--prio-solid);--prio-text:var(--prio-solid)}.prio.double-ring.svelte-1achwnm.svelte-1achwnm{background:var(--prio-solid);box-shadow:inset 0 0 0 3px rgba(255, 255, 255, 0.95), 0 0 0 2px var(--prio-solid)}.prio.stamp.svelte-1achwnm.svelte-1achwnm{background:var(--prio-solid);box-shadow:inset 0 0 0 2px rgba(255, 255, 255, 0.85);filter:saturate(1.05)}.prio.stamp.svelte-1achwnm .prio-inner.svelte-1achwnm{background-image:radial-gradient(rgba(255, 255, 255, 0.08) 1px, transparent 0);background-size:6px 6px;background-position:0 0}.prio.glow.svelte-1achwnm.svelte-1achwnm{background:var(--prio-solid);box-shadow:0 10px 22px rgba(17, 24, 39, 0.16), 0 0 0 3px rgba(255, 255, 255, 0.92)}`);
}
function Le(n) {
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
      $$slots: { trigger: [Li] },
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
      i[0]), l & /*$$scope, variant, badgeColor, renderSize, textSize, badge, rawLabel, iconName, iconSize, iconBgShape*/
      2559 && (r.$$scope = { dirty: l, ctx: i }), e.$set(r);
    },
    i(i) {
      t || ($(e.$$.fragment, i), t = !0);
    },
    o(i) {
      B(e.$$.fragment, i), t = !1;
    },
    d(i) {
      N(e, i);
    }
  };
}
function Ae(n) {
  let e, t;
  return e = new re({
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
      P(e, i, l), t = !0;
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
      t || ($(e.$$.fragment, i), t = !0);
    },
    o(i) {
      B(e.$$.fragment, i), t = !1;
    },
    d(i) {
      N(e, i);
    }
  };
}
function Li(n) {
  let e, t, i, l, r, s, a, f, c, u, d, p, h = (
    /*iconName*/
    n[4] && Ae(n)
  );
  return {
    c() {
      e = C("span"), t = C("span"), i = C("span"), h && h.c(), l = V(), r = C("span"), s = H(
        /*rawLabel*/
        n[3]
      ), o(r, "class", "prio-text svelte-1achwnm"), o(i, "class", "prio-inner svelte-1achwnm"), o(i, "aria-hidden", "true"), o(t, "class", a = "prio " + /*variant*/
      n[1] + " with-label svelte-1achwnm"), o(t, "style", f = `--prio-solid:${/*badgeColor*/
      n[8]}; --prio-size:${/*renderSize*/
      n[2]}px; --prio-text-size:${/*textSize*/
      n[5]}px;`), o(t, "role", "note"), o(t, "aria-label", c = /*badge*/
      n[0].label), o(e, "slot", "trigger"), o(e, "role", "presentation");
    },
    m(g, S) {
      w(g, e, S), _(e, t), _(t, i), h && h.m(i, null), _(i, l), _(i, r), _(r, s), u = !0, d || (p = A(e, "keydown", Zi), d = !0);
    },
    p(g, S) {
      /*iconName*/
      g[4] ? h ? (h.p(g, S), S & /*iconName*/
      16 && $(h, 1)) : (h = Ae(g), h.c(), $(h, 1), h.m(i, l)) : h && (I(), B(h, 1, 1, () => {
        h = null;
      }), L()), (!u || S & /*rawLabel*/
      8) && Q(
        s,
        /*rawLabel*/
        g[3]
      ), (!u || S & /*variant*/
      2 && a !== (a = "prio " + /*variant*/
      g[1] + " with-label svelte-1achwnm")) && o(t, "class", a), (!u || S & /*badgeColor, renderSize, textSize*/
      292 && f !== (f = `--prio-solid:${/*badgeColor*/
      g[8]}; --prio-size:${/*renderSize*/
      g[2]}px; --prio-text-size:${/*textSize*/
      g[5]}px;`)) && o(t, "style", f), (!u || S & /*badge*/
      1 && c !== (c = /*badge*/
      g[0].label)) && o(t, "aria-label", c);
    },
    i(g) {
      u || ($(h), u = !0);
    },
    o(g) {
      B(h), u = !1;
    },
    d(g) {
      g && v(e), h && h.d(), d = !1, p();
    }
  };
}
function Ai(n) {
  let e, t, i = (
    /*badge*/
    n[0] && Le(n)
  );
  return {
    c() {
      i && i.c(), e = O();
    },
    m(l, r) {
      i && i.m(l, r), w(l, e, r), t = !0;
    },
    p(l, [r]) {
      /*badge*/
      l[0] ? i ? (i.p(l, r), r & /*badge*/
      1 && $(i, 1)) : (i = Le(l), i.c(), $(i, 1), i.m(e.parentNode, e)) : i && (I(), B(i, 1, 1, () => {
        i = null;
      }), L());
    },
    i(l) {
      t || ($(i), t = !0);
    },
    o(l) {
      B(i), t = !1;
    },
    d(l) {
      l && v(e), i && i.d(l);
    }
  };
}
function Vi(n) {
  return String(n ?? "").trim() || "—";
}
const Zi = () => {
};
function Hi(n, e, t) {
  let i, l, r, s, a, f, c, u, { badge: d } = e, { variant: p = "solid" } = e, { size: h = 44 } = e;
  return n.$$set = (g) => {
    "badge" in g && t(0, d = g.badge), "variant" in g && t(1, p = g.variant), "size" in g && t(9, h = g.size);
  }, n.$$.update = () => {
    n.$$.dirty & /*badge*/
    1 && t(4, i = (d == null ? void 0 : d.icon) ?? null), n.$$.dirty & /*badge*/
    1 && t(8, l = String((d == null ? void 0 : d.color) ?? "").trim() || "rgb(17, 24, 39)"), n.$$.dirty & /*iconName*/
    16 && t(7, r = i === "Info" ? "square" : "round"), n.$$.dirty & /*badge*/
    1 && t(3, s = Vi(d == null ? void 0 : d.label)), n.$$.dirty & /*rawLabel*/
    8 && t(10, a = s.length), n.$$.dirty & /*size, labelLen*/
    1536 && t(2, f = Math.min(104, Math.max(h, 70 + Math.max(0, a - 12) * 1.4))), n.$$.dirty & /*renderSize*/
    4 && t(6, c = Math.round(f * 0.34)), n.$$.dirty & /*labelLen*/
    1024 && t(5, u = a <= 12 ? 12 : a <= 18 ? 11 : a <= 26 ? 10 : 9);
  }, [
    d,
    p,
    f,
    s,
    i,
    u,
    c,
    r,
    l,
    h,
    a
  ];
}
class it extends U {
  constructor(e) {
    super(), R(this, e, Hi, Ai, Z, { badge: 0, variant: 1, size: 9 }, Ii);
  }
  get badge() {
    return this.$$.ctx[0];
  }
  set badge(e) {
    this.$$set({ badge: e }), k();
  }
  get variant() {
    return this.$$.ctx[1];
  }
  set variant(e) {
    this.$$set({ variant: e }), k();
  }
  get size() {
    return this.$$.ctx[9];
  }
  set size(e) {
    this.$$set({ size: e }), k();
  }
}
W(it, { badge: {}, variant: {}, size: {} }, [], [], !0);
function Ri(n) {
  le(n, "svelte-1wx095d", ".seal.svelte-1wx095d.svelte-1wx095d{position:relative;width:var(--seal-size);height:var(--seal-size);border-radius:999px;display:inline-grid;place-items:center;outline:none;cursor:default;user-select:none;background:transparent;--seal-solid:rgb(17, 24, 39);--seal-ring:color-mix(in srgb, var(--seal-solid) 55%, transparent);--seal-line:color-mix(in srgb, var(--seal-solid) 18%, transparent);--seal-ring-fg:var(--seal-solid)}.seal.filled.svelte-1wx095d.svelte-1wx095d{background:var(--seal-solid);--seal-ring-fg:rgba(255, 255, 255, 0.92)}.ring.svelte-1wx095d.svelte-1wx095d{position:absolute;inset:0;border-radius:999px;font-size:var(--seal-font);color:var(--seal-ring-fg);opacity:0.92;text-transform:uppercase;letter-spacing:0.1em;font-weight:550}.char.svelte-1wx095d.svelte-1wx095d{width:1em;height:100%;position:absolute;top:0;left:50%;transform:translateX(-50%) rotate(var(--angle));text-align:center}.center.svelte-1wx095d.svelte-1wx095d{position:absolute;inset:0;display:grid;place-items:center}.center-pill.svelte-1wx095d.svelte-1wx095d{width:calc(var(--seal-size) * 0.64);height:calc(var(--seal-size) * 0.64);border-radius:999px;background:rgba(255, 255, 255, 0.96);border:1px solid var(--seal-line);display:grid;place-items:center;opacity:0.95}.seal.filled.svelte-1wx095d .center-pill.svelte-1wx095d{border-color:rgba(255, 255, 255, 0.35);background:#ffffff;opacity:1}");
}
function Ve(n, e, t) {
  const i = n.slice();
  return i[14] = e[t], i[16] = t, i;
}
function Ze(n) {
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
      $$slots: { trigger: [Wi] },
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
      B(e.$$.fragment, i), t = !1;
    },
    d(i) {
      N(e, i);
    }
  };
}
function He(n, e) {
  let t, i = (
    /*char*/
    e[14] + ""
  ), l, r;
  return {
    key: n,
    first: null,
    c() {
      t = C("span"), l = H(i), o(t, "class", "char svelte-1wx095d"), o(t, "style", r = `--angle:${1 / /*chars*/
      e[5].length * /*index*/
      e[16]}turn;`), this.first = t;
    },
    m(s, a) {
      w(s, t, a), _(t, l);
    },
    p(s, a) {
      e = s, a & /*chars*/
      32 && i !== (i = /*char*/
      e[14] + "") && Q(l, i), a & /*chars*/
      32 && r !== (r = `--angle:${1 / /*chars*/
      e[5].length * /*index*/
      e[16]}turn;`) && o(t, "style", r);
    },
    d(s) {
      s && v(t);
    }
  };
}
function Re(n) {
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
      B(e.$$.fragment, i), t = !1;
    },
    d(i) {
      N(e, i);
    }
  };
}
function Wi(n) {
  let e, t, i, l = [], r = /* @__PURE__ */ new Map(), s, a, f, c, u, d, p, h, g, S = Se(
    /*chars*/
    n[5]
  );
  const T = (z) => (
    /*index*/
    z[16]
  );
  for (let z = 0; z < S.length; z += 1) {
    let x = Ve(n, S, z), M = T(x);
    r.set(M, l[z] = He(M, x));
  }
  let b = (
    /*iconName*/
    n[7] && Re(n)
  );
  return {
    c() {
      e = C("span"), t = C("span"), i = C("span");
      for (let z = 0; z < l.length; z += 1)
        l[z].c();
      s = V(), a = C("span"), f = C("span"), b && b.c(), o(i, "class", "ring svelte-1wx095d"), o(i, "aria-hidden", "true"), o(f, "class", "center-pill svelte-1wx095d"), o(a, "class", "center svelte-1wx095d"), o(a, "aria-hidden", "true"), o(t, "class", c = "seal " + /*variant*/
      n[1] + " svelte-1wx095d"), o(t, "style", u = `--seal-solid:${/*badgeColor*/
      n[6]}; --seal-size:${/*size*/
      n[2]}px; --seal-font:${/*ringFontPx*/
      n[4]}px;`), o(t, "role", "note"), o(t, "aria-label", d = /*badge*/
      n[0].label), o(e, "slot", "trigger"), o(e, "role", "presentation");
    },
    m(z, x) {
      w(z, e, x), _(e, t), _(t, i);
      for (let M = 0; M < l.length; M += 1)
        l[M] && l[M].m(i, null);
      _(t, s), _(t, a), _(a, f), b && b.m(f, null), p = !0, h || (g = A(e, "keydown", Gi), h = !0);
    },
    p(z, x) {
      x & /*chars*/
      32 && (S = Se(
        /*chars*/
        z[5]
      ), l = yt(l, x, T, 1, z, S, r, i, wt, He, null, Ve)), /*iconName*/
      z[7] ? b ? (b.p(z, x), x & /*iconName*/
      128 && $(b, 1)) : (b = Re(z), b.c(), $(b, 1), b.m(f, null)) : b && (I(), B(b, 1, 1, () => {
        b = null;
      }), L()), (!p || x & /*variant*/
      2 && c !== (c = "seal " + /*variant*/
      z[1] + " svelte-1wx095d")) && o(t, "class", c), (!p || x & /*badgeColor, size, ringFontPx*/
      84 && u !== (u = `--seal-solid:${/*badgeColor*/
      z[6]}; --seal-size:${/*size*/
      z[2]}px; --seal-font:${/*ringFontPx*/
      z[4]}px;`)) && o(t, "style", u), (!p || x & /*badge*/
      1 && d !== (d = /*badge*/
      z[0].label)) && o(t, "aria-label", d);
    },
    i(z) {
      p || ($(b), p = !0);
    },
    o(z) {
      B(b), p = !1;
    },
    d(z) {
      z && v(e);
      for (let x = 0; x < l.length; x += 1)
        l[x].d();
      b && b.d(), h = !1, g();
    }
  };
}
function Ui(n) {
  let e, t, i = (
    /*badge*/
    n[0] && Ze(n)
  );
  return {
    c() {
      i && i.c(), e = O();
    },
    m(l, r) {
      i && i.m(l, r), w(l, e, r), t = !0;
    },
    p(l, [r]) {
      /*badge*/
      l[0] ? i ? (i.p(l, r), r & /*badge*/
      1 && $(i, 1)) : (i = Ze(l), i.c(), $(i, 1), i.m(e.parentNode, e)) : i && (I(), B(i, 1, 1, () => {
        i = null;
      }), L());
    },
    i(l) {
      t || ($(i), t = !0);
    },
    o(l) {
      B(i), t = !1;
    },
    d(l) {
      l && v(e), i && i.d(l);
    }
  };
}
function Xi(n, e, t) {
  return Math.max(e, Math.min(t, n));
}
const Gi = () => {
};
function Ji(n, e, t) {
  let i, l, r, s, a, f, c, { badge: u } = e, { variant: d = "outlined" } = e, { ringText: p = null } = e, { repeat: h = 2 } = e, { separator: g = " • " } = e, { size: S = 76 } = e, { sealFontScale: T = 0.12 } = e;
  return n.$$set = (b) => {
    "badge" in b && t(0, u = b.badge), "variant" in b && t(1, d = b.variant), "ringText" in b && t(8, p = b.ringText), "repeat" in b && t(9, h = b.repeat), "separator" in b && t(10, g = b.separator), "size" in b && t(2, S = b.size), "sealFontScale" in b && t(11, T = b.sealFontScale);
  }, n.$$.update = () => {
    n.$$.dirty & /*badge*/
    1 && t(7, i = (u == null ? void 0 : u.icon) ?? null), n.$$.dirty & /*badge*/
    1 && t(6, l = String((u == null ? void 0 : u.color) ?? "").trim() || "rgb(17, 24, 39)"), n.$$.dirty & /*ringText, badge*/
    257 && t(12, r = (p ?? (u == null ? void 0 : u.label) ?? "").trim() || "—"), n.$$.dirty & /*repeat*/
    512 && t(13, s = Xi(Math.floor(h || 1), 1, 10)), n.$$.dirty & /*repeatSafe, displayText, separator*/
    13312 && t(5, a = [...Array(s)].map(() => [...r.toUpperCase()].concat([...g.toUpperCase()])).flat()), n.$$.dirty & /*size, sealFontScale*/
    2052 && t(4, f = Math.round(S * T)), n.$$.dirty & /*size*/
    4 && t(3, c = Math.round(S * 0.3));
  }, [
    u,
    d,
    S,
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
    s
  ];
}
class nt extends U {
  constructor(e) {
    super(), R(
      this,
      e,
      Ji,
      Ui,
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
      Ri
    );
  }
  get badge() {
    return this.$$.ctx[0];
  }
  set badge(e) {
    this.$$set({ badge: e }), k();
  }
  get variant() {
    return this.$$.ctx[1];
  }
  set variant(e) {
    this.$$set({ variant: e }), k();
  }
  get ringText() {
    return this.$$.ctx[8];
  }
  set ringText(e) {
    this.$$set({ ringText: e }), k();
  }
  get repeat() {
    return this.$$.ctx[9];
  }
  set repeat(e) {
    this.$$set({ repeat: e }), k();
  }
  get separator() {
    return this.$$.ctx[10];
  }
  set separator(e) {
    this.$$set({ separator: e }), k();
  }
  get size() {
    return this.$$.ctx[2];
  }
  set size(e) {
    this.$$set({ size: e }), k();
  }
  get sealFontScale() {
    return this.$$.ctx[11];
  }
  set sealFontScale(e) {
    this.$$set({ sealFontScale: e }), k();
  }
}
W(nt, { badge: {}, variant: {}, ringText: {}, repeat: {}, separator: {}, size: {}, sealFontScale: {} }, [], [], !0);
function Yi(n) {
  let e, t;
  return e = new nt({
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
      B(e.$$.fragment, i), t = !1;
    },
    d(i) {
      N(e, i);
    }
  };
}
function Ki(n) {
  let e, t;
  return e = new it({
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
      B(e.$$.fragment, i), t = !1;
    },
    d(i) {
      N(e, i);
    }
  };
}
function Qi(n) {
  let e, t;
  return e = new tt({
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
      B(e.$$.fragment, i), t = !1;
    },
    d(i) {
      N(e, i);
    }
  };
}
function en(n) {
  let e, t;
  return e = new et({
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
      B(e.$$.fragment, i), t = !1;
    },
    d(i) {
      N(e, i);
    }
  };
}
function tn(n) {
  let e, t, i, l;
  const r = [en, Qi, Ki, Yi], s = [];
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
  return e = a(n), t = s[e] = r[e](n), {
    c() {
      t.c(), i = O();
    },
    m(f, c) {
      s[e].m(f, c), w(f, i, c), l = !0;
    },
    p(f, [c]) {
      let u = e;
      e = a(f), e === u ? s[e].p(f, c) : (I(), B(s[u], 1, 1, () => {
        s[u] = null;
      }), L(), t = s[e], t ? t.p(f, c) : (t = s[e] = r[e](f), t.c()), $(t, 1), t.m(i.parentNode, i));
    },
    i(f) {
      l || ($(t), l = !0);
    },
    o(f) {
      B(t), l = !1;
    },
    d(f) {
      f && v(i), s[e].d(f);
    }
  };
}
function nn(n, e, t) {
  let i, l, r, s, { badge: a } = e, { type: f = "mono" } = e, { variant: c = void 0 } = e, { size: u = void 0 } = e, { fixed: d = !1 } = e, { offsetPx: p = 16 } = e, { expandDirection: h = "right" } = e, { iconBgShape: g = void 0 } = e, { ringText: S = null } = e, { repeat: T = 2 } = e, { separator: b = " • " } = e, { sealFontScale: z = 0.12 } = e;
  return n.$$set = (x) => {
    "badge" in x && t(0, a = x.badge), "type" in x && t(1, f = x.type), "variant" in x && t(15, c = x.variant), "size" in x && t(2, u = x.size), "fixed" in x && t(3, d = x.fixed), "offsetPx" in x && t(4, p = x.offsetPx), "expandDirection" in x && t(5, h = x.expandDirection), "iconBgShape" in x && t(6, g = x.iconBgShape), "ringText" in x && t(7, S = x.ringText), "repeat" in x && t(8, T = x.repeat), "separator" in x && t(9, b = x.separator), "sealFontScale" in x && t(10, z = x.sealFontScale);
  }, n.$$.update = () => {
    n.$$.dirty & /*variant*/
    32768 && t(14, i = c ?? "filled"), n.$$.dirty & /*variant*/
    32768 && t(13, l = c ?? "outlined"), n.$$.dirty & /*variant*/
    32768 && t(12, r = c ?? "solid"), n.$$.dirty & /*variant*/
    32768 && t(11, s = c ?? "outlined");
  }, [
    a,
    f,
    u,
    d,
    p,
    h,
    g,
    S,
    T,
    b,
    z,
    s,
    r,
    l,
    i,
    c
  ];
}
class lt extends U {
  constructor(e) {
    super(), R(this, e, nn, tn, Z, {
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
    this.$$set({ badge: e }), k();
  }
  get type() {
    return this.$$.ctx[1];
  }
  set type(e) {
    this.$$set({ type: e }), k();
  }
  get variant() {
    return this.$$.ctx[15];
  }
  set variant(e) {
    this.$$set({ variant: e }), k();
  }
  get size() {
    return this.$$.ctx[2];
  }
  set size(e) {
    this.$$set({ size: e }), k();
  }
  get fixed() {
    return this.$$.ctx[3];
  }
  set fixed(e) {
    this.$$set({ fixed: e }), k();
  }
  get offsetPx() {
    return this.$$.ctx[4];
  }
  set offsetPx(e) {
    this.$$set({ offsetPx: e }), k();
  }
  get expandDirection() {
    return this.$$.ctx[5];
  }
  set expandDirection(e) {
    this.$$set({ expandDirection: e }), k();
  }
  get iconBgShape() {
    return this.$$.ctx[6];
  }
  set iconBgShape(e) {
    this.$$set({ iconBgShape: e }), k();
  }
  get ringText() {
    return this.$$.ctx[7];
  }
  set ringText(e) {
    this.$$set({ ringText: e }), k();
  }
  get repeat() {
    return this.$$.ctx[8];
  }
  set repeat(e) {
    this.$$set({ repeat: e }), k();
  }
  get separator() {
    return this.$$.ctx[9];
  }
  set separator(e) {
    this.$$set({ separator: e }), k();
  }
  get sealFontScale() {
    return this.$$.ctx[10];
  }
  set sealFontScale(e) {
    this.$$set({ sealFontScale: e }), k();
  }
}
W(lt, { badge: {}, type: {}, variant: {}, size: {}, fixed: { type: "Boolean" }, offsetPx: {}, expandDirection: {}, iconBgShape: {}, ringText: {}, repeat: {}, separator: {}, sealFontScale: {} }, [], [], !0);
function ln(n) {
  let e, t;
  return e = new lt({
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
      B(e.$$.fragment, i), t = !1;
    },
    d(i) {
      N(e, i);
    }
  };
}
const rn = "rgb(17, 24, 39)";
function We(n) {
  return /\bdownload\b/i.test(n) || /\bopen[-\s]*data\b/i.test(n);
}
function on(n, e, t) {
  let i, { badge: l = null } = e, { label: r = null } = e, { color: s = null } = e, { icon: a = null } = e, { description: f = null } = e, { actionText: c = null } = e, { actionIcon: u = null } = e, { interactive: d = !1 } = e, { type: p = "mono" } = e, { variant: h = void 0 } = e, { size: g = void 0 } = e, { fixed: S = !1 } = e, { offsetPx: T = 16 } = e, { expandDirection: b = "right" } = e, { iconBgShape: z = null } = e, { ringText: x = null } = e, { repeat: M = 2 } = e, { separator: q = " • " } = e, { sealFontScale: X = 0.12 } = e;
  return n.$$set = (y) => {
    "badge" in y && t(12, l = y.badge), "label" in y && t(13, r = y.label), "color" in y && t(14, s = y.color), "icon" in y && t(15, a = y.icon), "description" in y && t(16, f = y.description), "actionText" in y && t(17, c = y.actionText), "actionIcon" in y && t(18, u = y.actionIcon), "interactive" in y && t(19, d = y.interactive), "type" in y && t(0, p = y.type), "variant" in y && t(1, h = y.variant), "size" in y && t(2, g = y.size), "fixed" in y && t(3, S = y.fixed), "offsetPx" in y && t(4, T = y.offsetPx), "expandDirection" in y && t(5, b = y.expandDirection), "iconBgShape" in y && t(6, z = y.iconBgShape), "ringText" in y && t(7, x = y.ringText), "repeat" in y && t(8, M = y.repeat), "separator" in y && t(9, q = y.separator), "sealFontScale" in y && t(10, X = y.sealFontScale);
  }, n.$$.update = () => {
    n.$$.dirty & /*badge, label, color, icon, description, actionText, interactive, actionIcon*/
    1044480 && t(11, i = l ?? {
      label: (r ?? "").trim() || "—",
      color: (s ?? "").trim() || rn,
      icon: a ?? void 0,
      description: (f ?? "").trim() || void 0,
      actionText: (c ?? "").trim() || (d ? We((r ?? "").trim()) ? "Click to download" : "Click to interact" : void 0),
      actionIcon: u ?? (d ? We((r ?? "").trim()) ? "Download" : "Interactive" : void 0)
    });
  }, [
    p,
    h,
    g,
    S,
    T,
    b,
    z,
    x,
    M,
    q,
    X,
    i,
    l,
    r,
    s,
    a,
    f,
    c,
    u,
    d
  ];
}
class rt extends U {
  constructor(e) {
    super(), R(this, e, on, ln, Z, {
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
    this.$$set({ badge: e }), k();
  }
  get label() {
    return this.$$.ctx[13];
  }
  set label(e) {
    this.$$set({ label: e }), k();
  }
  get color() {
    return this.$$.ctx[14];
  }
  set color(e) {
    this.$$set({ color: e }), k();
  }
  get icon() {
    return this.$$.ctx[15];
  }
  set icon(e) {
    this.$$set({ icon: e }), k();
  }
  get description() {
    return this.$$.ctx[16];
  }
  set description(e) {
    this.$$set({ description: e }), k();
  }
  get actionText() {
    return this.$$.ctx[17];
  }
  set actionText(e) {
    this.$$set({ actionText: e }), k();
  }
  get actionIcon() {
    return this.$$.ctx[18];
  }
  set actionIcon(e) {
    this.$$set({ actionIcon: e }), k();
  }
  get interactive() {
    return this.$$.ctx[19];
  }
  set interactive(e) {
    this.$$set({ interactive: e }), k();
  }
  get type() {
    return this.$$.ctx[0];
  }
  set type(e) {
    this.$$set({ type: e }), k();
  }
  get variant() {
    return this.$$.ctx[1];
  }
  set variant(e) {
    this.$$set({ variant: e }), k();
  }
  get size() {
    return this.$$.ctx[2];
  }
  set size(e) {
    this.$$set({ size: e }), k();
  }
  get fixed() {
    return this.$$.ctx[3];
  }
  set fixed(e) {
    this.$$set({ fixed: e }), k();
  }
  get offsetPx() {
    return this.$$.ctx[4];
  }
  set offsetPx(e) {
    this.$$set({ offsetPx: e }), k();
  }
  get expandDirection() {
    return this.$$.ctx[5];
  }
  set expandDirection(e) {
    this.$$set({ expandDirection: e }), k();
  }
  get iconBgShape() {
    return this.$$.ctx[6];
  }
  set iconBgShape(e) {
    this.$$set({ iconBgShape: e }), k();
  }
  get ringText() {
    return this.$$.ctx[7];
  }
  set ringText(e) {
    this.$$set({ ringText: e }), k();
  }
  get repeat() {
    return this.$$.ctx[8];
  }
  set repeat(e) {
    this.$$set({ repeat: e }), k();
  }
  get separator() {
    return this.$$.ctx[9];
  }
  set separator(e) {
    this.$$set({ separator: e }), k();
  }
  get sealFontScale() {
    return this.$$.ctx[10];
  }
  set sealFontScale(e) {
    this.$$set({ sealFontScale: e }), k();
  }
}
customElements.define("vis-badge", W(rt, { badge: { type: "Object" }, label: {}, color: {}, icon: {}, description: {}, actionText: {}, actionIcon: {}, interactive: { type: "Boolean" }, type: {}, variant: {}, size: { type: "Number" }, fixed: { type: "Boolean" }, offsetPx: { type: "Number" }, expandDirection: {}, iconBgShape: { type: "String", attribute: "icon-bg-shape" }, ringText: {}, repeat: { type: "Number" }, separator: {}, sealFontScale: { type: "Number" } }, [], [], !0, (n) => class extends n {
  addEventListener(e, t, i) {
    return e === "click" && (this.interactive = !0), super.addEventListener(e, t, i);
  }
}));
if (!customElements.get("vis-badge")) {
  const n = rt.element;
  customElements.define("vis-badge", n);
}
