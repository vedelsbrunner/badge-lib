var ft = Object.defineProperty;
var ct = (i, e, t) => e in i ? ft(i, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : i[e] = t;
var I = (i, e, t) => ct(i, typeof e != "symbol" ? e + "" : e, t);
function ae() {
}
function ut(i, e) {
  for (const t in e) i[t] = e[t];
  return (
    /** @type {T & S} */
    i
  );
}
function Ue(i) {
  return i();
}
function ye() {
  return /* @__PURE__ */ Object.create(null);
}
function K(i) {
  i.forEach(Ue);
}
function Xe(i) {
  return typeof i == "function";
}
function H(i, e) {
  return i != i ? e == e : i !== e || i && typeof i == "object" || typeof i == "function";
}
function dt(i) {
  return Object.keys(i).length === 0;
}
function ge(i, e, t, n) {
  if (i) {
    const l = Ge(i, e, t, n);
    return i[0](l);
  }
}
function Ge(i, e, t, n) {
  return i[1] && n ? ut(t.ctx.slice(), i[1](n(e))) : t.ctx;
}
function he(i, e, t, n) {
  if (i[2] && n) {
    const l = i[2](n(t));
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
function pe(i, e, t, n, l, r) {
  if (l) {
    const s = Ge(e, t, n, r);
    i.p(s, l);
  }
}
function be(i) {
  if (i.ctx.length > 32) {
    const e = [], t = i.ctx.length / 32;
    for (let n = 0; n < t; n++)
      e[n] = -1;
    return e;
  }
  return -1;
}
const gt = typeof window < "u" ? window : typeof globalThis < "u" ? globalThis : (
  // @ts-ignore Node typings have this
  global
);
function _(i, e) {
  i.appendChild(e);
}
function le(i, e, t) {
  const n = ht(i);
  if (!n.getElementById(e)) {
    const l = x("style");
    l.id = e, l.textContent = t, pt(n, l);
  }
}
function ht(i) {
  if (!i) return document;
  const e = i.getRootNode ? i.getRootNode() : i.ownerDocument;
  return e && /** @type {ShadowRoot} */
  e.host ? (
    /** @type {ShadowRoot} */
    e
  ) : i.ownerDocument;
}
function pt(i, e) {
  return _(
    /** @type {Document} */
    i.head || i,
    e
  ), e.sheet;
}
function w(i, e, t) {
  i.insertBefore(e, t || null);
}
function v(i) {
  i.parentNode && i.parentNode.removeChild(i);
}
function x(i) {
  return document.createElement(i);
}
function m(i) {
  return document.createElementNS("http://www.w3.org/2000/svg", i);
}
function R(i) {
  return document.createTextNode(i);
}
function Z() {
  return R(" ");
}
function F() {
  return R("");
}
function V(i, e, t, n) {
  return i.addEventListener(e, t, n), () => i.removeEventListener(e, t, n);
}
function o(i, e, t) {
  t == null ? i.removeAttribute(e) : i.getAttribute(e) !== t && i.setAttribute(e, t);
}
function bt(i) {
  return Array.from(i.childNodes);
}
function Q(i, e) {
  e = "" + e, i.data !== e && (i.data = /** @type {string} */
  e);
}
function oe(i, e, t, n) {
  t == null ? i.style.removeProperty(e) : i.style.setProperty(e, t, "");
}
function _t(i) {
  const e = {};
  return i.childNodes.forEach(
    /** @param {Element} node */
    (t) => {
      e[t.slot || "default"] = !0;
    }
  ), e;
}
let we;
function se(i) {
  we = i;
}
const ne = [], _e = [];
let ie = [];
const $e = [], Je = /* @__PURE__ */ Promise.resolve();
let ve = !1;
function Ye() {
  ve || (ve = !0, Je.then(k));
}
function mt() {
  return Ye(), Je;
}
function ke(i) {
  ie.push(i);
}
const me = /* @__PURE__ */ new Set();
let te = 0;
function k() {
  if (te !== 0)
    return;
  const i = we;
  do {
    try {
      for (; te < ne.length; ) {
        const e = ne[te];
        te++, se(e), vt(e.$$);
      }
    } catch (e) {
      throw ne.length = 0, te = 0, e;
    }
    for (se(null), ne.length = 0, te = 0; _e.length; ) _e.pop()();
    for (let e = 0; e < ie.length; e += 1) {
      const t = ie[e];
      me.has(t) || (me.add(t), t());
    }
    ie.length = 0;
  } while (ne.length);
  for (; $e.length; )
    $e.pop()();
  ve = !1, me.clear(), se(i);
}
function vt(i) {
  if (i.fragment !== null) {
    i.update(), K(i.before_update);
    const e = i.dirty;
    i.dirty = [-1], i.fragment && i.fragment.p(i.ctx, e), i.after_update.forEach(ke);
  }
}
function kt(i) {
  const e = [], t = [];
  ie.forEach((n) => i.indexOf(n) === -1 ? e.push(n) : t.push(n)), t.forEach((n) => n()), ie = e;
}
const ue = /* @__PURE__ */ new Set();
let Y;
function L() {
  Y = {
    r: 0,
    c: [],
    p: Y
    // parent group
  };
}
function A() {
  Y.r || K(Y.c), Y = Y.p;
}
function $(i, e) {
  i && i.i && (ue.delete(i), i.i(e));
}
function C(i, e, t, n) {
  if (i && i.o) {
    if (ue.has(i)) return;
    ue.add(i), Y.c.push(() => {
      ue.delete(i), n && (t && i.d(1), n());
    }), i.o(e);
  } else n && n();
}
function Se(i) {
  return (i == null ? void 0 : i.length) !== void 0 ? i : Array.from(i);
}
function wt(i, e) {
  i.d(1), e.delete(i.key);
}
function yt(i, e, t, n, l, r, s, a, f, c, u, d) {
  let p = i.length, g = r.length, h = p;
  const S = {};
  for (; h--; ) S[i[h].key] = h;
  const T = [], b = /* @__PURE__ */ new Map(), z = /* @__PURE__ */ new Map(), M = [];
  for (h = g; h--; ) {
    const y = d(l, r, h), D = t(y);
    let j = s.get(D);
    j ? M.push(() => j.p(y, e)) : (j = c(D, y), j.c()), b.set(D, T[h] = j), D in S && z.set(D, Math.abs(h - S[D]));
  }
  const B = /* @__PURE__ */ new Set(), P = /* @__PURE__ */ new Set();
  function X(y) {
    $(y, 1), y.m(a, u), s.set(y.key, y), u = y.first, g--;
  }
  for (; p && g; ) {
    const y = T[g - 1], D = i[p - 1], j = y.key, ee = D.key;
    y === D ? (u = y.first, p--, g--) : b.has(ee) ? !s.has(j) || B.has(j) ? X(y) : P.has(ee) ? p-- : z.get(j) > z.get(ee) ? (P.add(j), X(y)) : (B.add(ee), p--) : (f(D, s), p--);
  }
  for (; p--; ) {
    const y = i[p];
    b.has(y.key) || f(y, s);
  }
  for (; g; ) X(T[g - 1]);
  return K(M), T;
}
function O(i) {
  i && i.c();
}
function N(i, e, t) {
  const { fragment: n, after_update: l } = i.$$;
  n && n.m(e, t), ke(() => {
    const r = i.$$.on_mount.map(Ue).filter(Xe);
    i.$$.on_destroy ? i.$$.on_destroy.push(...r) : K(r), i.$$.on_mount = [];
  }), l.forEach(ke);
}
function E(i, e) {
  const t = i.$$;
  t.fragment !== null && (kt(t.after_update), K(t.on_destroy), t.fragment && t.fragment.d(e), t.on_destroy = t.fragment = null, t.ctx = []);
}
function $t(i, e) {
  i.$$.dirty[0] === -1 && (ne.push(i), Ye(), i.$$.dirty.fill(0)), i.$$.dirty[e / 31 | 0] |= 1 << e % 31;
}
function q(i, e, t, n, l, r, s = null, a = [-1]) {
  const f = we;
  se(i);
  const c = i.$$ = {
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
  if (c.ctx = t ? t(i, e.props || {}, (d, p, ...g) => {
    const h = g.length ? g[0] : p;
    return c.ctx && l(c.ctx[d], c.ctx[d] = h) && (!c.skip_bound && c.bound[d] && c.bound[d](h), u && $t(i, d)), p;
  }) : [], c.update(), u = !0, K(c.before_update), c.fragment = n ? n(c.ctx) : !1, e.target) {
    if (e.hydrate) {
      const d = bt(e.target);
      c.fragment && c.fragment.l(d), d.forEach(v);
    } else
      c.fragment && c.fragment.c();
    e.intro && $(i.$$.fragment), N(i, e.target, e.anchor), k();
  }
  se(f);
}
let Ke;
typeof HTMLElement == "function" && (Ke = class extends HTMLElement {
  constructor(e, t, n) {
    super();
    /** The Svelte component constructor */
    I(this, "$$ctor");
    /** Slots */
    I(this, "$$s");
    /** The Svelte component instance */
    I(this, "$$c");
    /** Whether or not the custom element is connected */
    I(this, "$$cn", !1);
    /** Component props data */
    I(this, "$$d", {});
    /** `true` if currently in the process of reflecting component props back to attributes */
    I(this, "$$r", !1);
    /** @type {Record<string, CustomElementPropDefinition>} Props definition (name, reflected, type etc) */
    I(this, "$$p_d", {});
    /** @type {Record<string, Function[]>} Event listeners */
    I(this, "$$l", {});
    /** @type {Map<Function, Function>} Event listener unsubscribe functions */
    I(this, "$$l_u", /* @__PURE__ */ new Map());
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
          let a;
          return {
            c: function() {
              a = x("slot"), s !== "default" && o(a, "name", s);
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
      const n = {}, l = _t(this);
      for (const s of this.$$s)
        s in l && (n[s] = [t(s)]);
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
  attributeChangedCallback(e, t, n) {
    var l;
    this.$$r || (e = this.$$g_p(e), this.$$d[e] = de(e, n, this.$$p_d, "toProp"), (l = this.$$c) == null || l.$set({ [e]: this.$$d[e] }));
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
function de(i, e, t, n) {
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
function W(i, e, t, n, l, r) {
  let s = class extends Ke {
    constructor() {
      super(i, t, l), this.$$p_d = e;
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
  }), n.forEach((a) => {
    Object.defineProperty(s.prototype, a, {
      get() {
        var f;
        return (f = this.$$c) == null ? void 0 : f[a];
      }
    });
  }), r && (s = r(s)), i.element = /** @type {any} */
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
    I(this, "$$");
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    I(this, "$$set");
  }
  /** @returns {void} */
  $destroy() {
    E(this, 1), this.$destroy = ae;
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
    this.$$set && !dt(e) && (this.$$.skip_bound = !0, this.$$set(e), this.$$.skip_bound = !1);
  }
}
const St = "4";
typeof window < "u" && (window.__svelte || (window.__svelte = { v: /* @__PURE__ */ new Set() })).v.add(St);
const { window: ze } = gt;
function zt(i) {
  le(i, "svelte-1nychkl", ".tooltipWrap.svelte-1nychkl.svelte-1nychkl{position:relative;display:inline-flex;align-items:center}.trigger.svelte-1nychkl.svelte-1nychkl{display:inline-flex;align-items:center}.tooltip.svelte-1nychkl.svelte-1nychkl{display:block;position:fixed;z-index:2000;width:max-content;max-width:min(280px, 64vw);padding:7px 9px;border-radius:9px;border:1px solid rgba(17, 24, 39, 0.14);background:rgba(17, 24, 39, 0.96);color:#ffffff;box-shadow:0 10px 24px rgba(17, 24, 39, 0.2);font-size:12px;line-height:1.3;opacity:0;visibility:hidden;transform:translateY(-6px);pointer-events:none;transition:opacity 180ms ease, transform 180ms ease}.tooltip.open.svelte-1nychkl.svelte-1nychkl{opacity:1;visibility:visible;transform:translateY(0);pointer-events:auto}.arrow.svelte-1nychkl.svelte-1nychkl{position:absolute;width:8px;height:8px;background:rgba(17, 24, 39, 0.96);border-left:1px solid rgba(17, 24, 39, 0.14);border-top:1px solid rgba(17, 24, 39, 0.14);transform:rotate(45deg)}.tooltip.top.svelte-1nychkl .arrow.svelte-1nychkl{bottom:-4px}.tooltip.bottom.svelte-1nychkl .arrow.svelte-1nychkl{top:-4px;transform:rotate(225deg)}.tooltip.left.svelte-1nychkl .arrow.svelte-1nychkl{right:-4px;transform:rotate(135deg)}.tooltip.right.svelte-1nychkl .arrow.svelte-1nychkl{left:-4px;transform:rotate(-45deg)}");
}
const Mt = (i) => ({}), Me = (i) => ({}), Bt = (i) => ({}), Be = (i) => ({});
function Ct(i) {
  let e, t, n, l, r, s, a, f, c, u, d, p;
  const g = (
    /*#slots*/
    i[12].trigger
  ), h = ge(
    g,
    i,
    /*$$scope*/
    i[11],
    Be
  ), S = (
    /*#slots*/
    i[12].content
  ), T = ge(
    S,
    i,
    /*$$scope*/
    i[11],
    Me
  );
  return {
    c() {
      e = x("span"), t = x("span"), h && h.c(), n = Z(), l = x("span"), r = x("span"), T && T.c(), s = Z(), a = x("span"), o(t, "class", "trigger svelte-1nychkl"), o(r, "class", "content"), o(a, "class", "arrow svelte-1nychkl"), o(a, "aria-hidden", "true"), o(
        a,
        "style",
        /*arrowStyle*/
        i[5]
      ), o(l, "class", f = "tooltip " + /*open*/
      (i[0] ? "open" : "") + " " + /*effectivePlacement*/
      i[3] + " svelte-1nychkl"), o(l, "role", "tooltip"), o(l, "aria-hidden", c = !/*open*/
      i[0]), o(
        l,
        "style",
        /*tooltipStyle*/
        i[4]
      ), o(e, "class", "tooltipWrap svelte-1nychkl"), o(e, "role", "group");
    },
    m(b, z) {
      w(b, e, z), _(e, t), h && h.m(t, null), i[13](t), _(e, n), _(e, l), _(l, r), T && T.m(r, null), _(l, s), _(l, a), i[14](l), u = !0, d || (p = [
        V(
          ze,
          "resize",
          /*onWindowChange*/
          i[8]
        ),
        V(
          ze,
          "scroll",
          /*onWindowChange*/
          i[8]
        ),
        V(
          e,
          "mouseenter",
          /*onEnter*/
          i[6]
        ),
        V(
          e,
          "mouseleave",
          /*onLeave*/
          i[7]
        ),
        V(
          e,
          "focusin",
          /*onEnter*/
          i[6]
        ),
        V(
          e,
          "focusout",
          /*onLeave*/
          i[7]
        )
      ], d = !0);
    },
    p(b, [z]) {
      h && h.p && (!u || z & /*$$scope*/
      2048) && pe(
        h,
        g,
        b,
        /*$$scope*/
        b[11],
        u ? he(
          g,
          /*$$scope*/
          b[11],
          z,
          Bt
        ) : be(
          /*$$scope*/
          b[11]
        ),
        Be
      ), T && T.p && (!u || z & /*$$scope*/
      2048) && pe(
        T,
        S,
        b,
        /*$$scope*/
        b[11],
        u ? he(
          S,
          /*$$scope*/
          b[11],
          z,
          Mt
        ) : be(
          /*$$scope*/
          b[11]
        ),
        Me
      ), (!u || z & /*arrowStyle*/
      32) && o(
        a,
        "style",
        /*arrowStyle*/
        b[5]
      ), (!u || z & /*open, effectivePlacement*/
      9 && f !== (f = "tooltip " + /*open*/
      (b[0] ? "open" : "") + " " + /*effectivePlacement*/
      b[3] + " svelte-1nychkl")) && o(l, "class", f), (!u || z & /*open*/
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
      u || ($(h, b), $(T, b), u = !0);
    },
    o(b) {
      C(h, b), C(T, b), u = !1;
    },
    d(b) {
      b && v(e), h && h.d(b), i[13](null), T && T.d(b), i[14](null), d = !1, K(p);
    }
  };
}
const G = 10, J = 8;
function ce(i, e, t) {
  return Math.max(e, Math.min(t, i));
}
function xt(i, e, t) {
  const n = window.innerWidth, l = window.innerHeight, r = e.top - G - t.height >= J, s = e.bottom + G + t.height <= l - J, a = e.left - G - t.width >= J, f = e.right + G + t.width <= n - J;
  return i === "top" && !r && s ? "bottom" : i === "bottom" && !s && r ? "top" : i === "left" && !a && f ? "right" : i === "right" && !f && a ? "left" : i;
}
function Tt(i, e, t) {
  let { $$slots: n = {}, $$scope: l } = e, { placement: r = "top" } = e, { openDelayMs: s = 80 } = e, a = !1, f = null, c = null, u = null, d = r, p = "", g = "";
  function h() {
    f && clearTimeout(f), f = setTimeout(() => t(0, a = !0), s);
  }
  function S() {
    f && clearTimeout(f), f = null, t(0, a = !1);
  }
  async function T() {
    if (!a || !c || !u) return;
    await mt();
    const B = c.getBoundingClientRect(), P = u.getBoundingClientRect(), X = window.innerWidth, y = window.innerHeight;
    t(3, d = xt(r, B, P));
    let D = 0, j = 0;
    d === "top" ? (j = B.top - G - P.height, D = B.left + B.width / 2 - P.width / 2) : d === "bottom" ? (j = B.bottom + G, D = B.left + B.width / 2 - P.width / 2) : d === "left" ? (j = B.top + B.height / 2 - P.height / 2, D = B.left - G - P.width) : (j = B.top + B.height / 2 - P.height / 2, D = B.right + G), D = ce(D, J, X - P.width - J), j = ce(j, J, y - P.height - J);
    const ee = B.left + B.width / 2, ot = B.top + B.height / 2, st = ce(ee - D - 4, 10, P.width - 10), at = ce(ot - j - 4, 10, P.height - 10);
    t(5, g = d === "top" || d === "bottom" ? `left:${st}px;` : `top:${at}px;`), t(4, p = `left:${Math.round(D)}px;top:${Math.round(j)}px;`);
  }
  function b() {
    T();
  }
  function z(B) {
    _e[B ? "unshift" : "push"](() => {
      c = B, t(1, c);
    });
  }
  function M(B) {
    _e[B ? "unshift" : "push"](() => {
      u = B, t(2, u);
    });
  }
  return i.$$set = (B) => {
    "placement" in B && t(9, r = B.placement), "openDelayMs" in B && t(10, s = B.openDelayMs), "$$scope" in B && t(11, l = B.$$scope);
  }, i.$$.update = () => {
    i.$$.dirty & /*open*/
    1 && a && T(), i.$$.dirty & /*open, placement*/
    513 && (a || (t(4, p = ""), t(5, g = ""), t(3, d = r)));
  }, [
    a,
    c,
    u,
    d,
    p,
    g,
    h,
    S,
    b,
    r,
    s,
    l,
    n,
    z,
    M
  ];
}
class Qe extends U {
  constructor(e) {
    super(), q(this, e, Tt, Ct, H, { placement: 9, openDelayMs: 10 }, zt);
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
function Dt(i) {
  let e;
  return {
    c() {
      e = x("span"), oe(e, "display", "inline-block"), oe(
        e,
        "width",
        /*size*/
        i[1] + "px"
      ), oe(
        e,
        "height",
        /*size*/
        i[1] + "px"
      ), o(e, "aria-hidden", "true");
    },
    m(t, n) {
      w(t, e, n);
    },
    p(t, n) {
      n & /*size*/
      2 && oe(
        e,
        "width",
        /*size*/
        t[1] + "px"
      ), n & /*size*/
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
function jt(i) {
  let e, t, n, l, r, s, a = (
    /*bg*/
    i[2] && Ce(i)
  );
  return {
    c() {
      e = m("svg"), a && a.c(), t = m("g"), n = m("path"), l = m("path"), r = m("path"), o(n, "d", "M15 3h6v6"), o(l, "d", "M10 14 21 3"), o(r, "d", "M21 13v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7"), o(t, "transform", "translate(12 12) scale(0.68) translate(-12 -12)"), o(
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
    m(f, c) {
      w(f, e, c), a && a.m(e, null), _(e, t), _(t, n), _(t, l), _(t, r);
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
function Pt(i) {
  let e, t, n, l, r, s, a = (
    /*bg*/
    i[2] && xe(i)
  );
  return {
    c() {
      e = m("svg"), a && a.c(), t = m("g"), n = m("path"), l = m("path"), r = m("path"), o(n, "d", "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"), o(l, "d", "M7 10l5 5 5-5"), o(r, "d", "M12 15V3"), o(t, "transform", "translate(12 12) scale(0.68) translate(-12 -12)"), o(
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
    m(f, c) {
      w(f, e, c), a && a.m(e, null), _(e, t), _(t, n), _(t, l), _(t, r);
    },
    p(f, c) {
      /*bg*/
      f[2] ? a ? a.p(f, c) : (a = xe(f), a.c(), a.m(e, t)) : a && (a.d(1), a = null), c & /*size*/
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
function Nt(i) {
  let e, t, n, l, r, s;
  return {
    c() {
      e = m("svg"), t = m("g"), n = m("path"), r = m("path"), o(n, "d", "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"), o(n, "fill", l = /*bg*/
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
    m(a, f) {
      w(a, e, f), _(e, t), _(t, n), _(t, r);
    },
    p(a, f) {
      f & /*bg*/
      4 && l !== (l = /*bg*/
      a[2] ?? "none") && o(n, "fill", l), f & /*bgOpacity*/
      16 && o(
        n,
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
function Et(i) {
  let e, t, n, l, r, s;
  function a(u, d) {
    return (
      /*bg*/
      u[2] ? Ut : Wt
    );
  }
  let f = a(i), c = f(i);
  return {
    c() {
      e = m("svg"), c.c(), t = m("g"), n = m("ellipse"), l = m("path"), r = m("path"), o(n, "cx", "12"), o(n, "cy", "5"), o(n, "rx", "9"), o(n, "ry", "3"), o(l, "d", "M3 5v14c0 1.7 4 3 9 3s9-1.3 9-3V5"), o(r, "d", "M3 12c0 1.7 4 3 9 3s9-1.3 9-3"), o(t, "transform", "translate(12 12) scale(0.68) translate(-12 -12)"), o(
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
      w(u, e, d), c.m(e, null), _(e, t), _(t, n), _(t, l), _(t, r);
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
function Ot(i) {
  let e, t, n, l, r, s, a;
  function f(d, p) {
    return (
      /*bg*/
      d[2] ? Yt : Jt
    );
  }
  let c = f(i), u = c(i);
  return {
    c() {
      e = m("svg"), u.c(), t = m("g"), n = m("polyline"), l = m("polyline"), r = m("line"), s = m("line"), o(n, "points", "15 3 21 3 21 9"), o(l, "points", "9 21 3 21 3 15"), o(r, "x1", "21"), o(r, "y1", "3"), o(r, "x2", "14"), o(r, "y2", "10"), o(s, "x1", "3"), o(s, "y1", "21"), o(s, "x2", "10"), o(s, "y2", "14"), o(t, "transform", "translate(12 12) scale(0.68) translate(-12 -12)"), o(
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
    m(d, p) {
      w(d, e, p), u.m(e, null), _(e, t), _(t, n), _(t, l), _(t, r), _(t, s);
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
function Ft(i) {
  let e, t, n, l, r, s, a, f;
  function c(p, g) {
    return (
      /*bg*/
      p[2] ? tn : en
    );
  }
  let u = c(i), d = u(i);
  return {
    c() {
      e = m("svg"), d.c(), t = m("g"), n = m("path"), l = m("path"), r = m("path"), s = m("path"), a = m("path"), o(n, "d", "M14 4.1 12 6"), o(l, "d", "m5.1 8-2.9-.8"), o(r, "d", "m6 12-1.9 2"), o(s, "d", "M7.2 2.2 8 5.1"), o(a, "d", "M9.037 9.69a.498.498 0 0 1 .653-.653l11 4.5a.5.5 0 0 1-.074.949l-4.349 1.041a1 1 0 0 0-.74.739l-1.04 4.35a.5.5 0 0 1-.95.074z"), o(t, "transform", "translate(12 12) scale(0.68) translate(-12 -12)"), o(
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
    m(p, g) {
      w(p, e, g), d.m(e, null), _(e, t), _(t, n), _(t, l), _(t, r), _(t, s), _(t, a);
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
function It(i) {
  let e, t, n, l, r;
  function s(c, u) {
    return (
      /*bg*/
      c[2] ? on : rn
    );
  }
  let a = s(i), f = a(i);
  return {
    c() {
      e = m("svg"), f.c(), t = m("path"), l = m("path"), o(t, "d", "M12 10.2a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"), o(t, "fill", n = /*fg*/
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
      w(c, e, u), f.m(e, null), _(e, t), _(e, l);
    },
    p(c, u) {
      a === (a = s(c)) && f ? f.p(c, u) : (f.d(1), f = a(c), f && (f.c(), f.m(e, t))), u & /*fg*/
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
      c && v(e), f.d();
    }
  };
}
function Lt(i) {
  let e, t, n, l, r;
  function s(c, u) {
    return (
      /*bg*/
      c[2] ? cn : fn
    );
  }
  let a = s(i), f = a(i);
  return {
    c() {
      e = m("svg"), f.c(), t = m("path"), l = m("path"), o(t, "d", "M12 10.2a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"), o(t, "fill", n = /*fg*/
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
      w(c, e, u), f.m(e, null), _(e, t), _(e, l);
    },
    p(c, u) {
      a === (a = s(c)) && f ? f.p(c, u) : (f.d(1), f = a(c), f && (f.c(), f.m(e, t))), u & /*fg*/
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
      c && v(e), f.d();
    }
  };
}
function At(i) {
  let e, t, n, l, r, s, a;
  return {
    c() {
      e = m("svg"), t = m("path"), l = m("path"), s = m("path"), o(t, "d", "M12 3.5c.4 0 .8.2 1 .6l9 15.6c.4.7-.1 1.6-1 1.6H3c-.9 0-1.4-.9-1-1.6l9-15.6c.2-.4.6-.6 1-.6Z"), o(t, "fill", n = /*bg*/
      i[2] ?? "currentColor"), o(
        t,
        "opacity",
        /*bgOpacity*/
        i[4]
      ), o(l, "d", "M12 8a1 1 0 0 1 1 1l-.3 5.5a.7.7 0 0 1-1.4 0L11 9a1 1 0 0 1 1-1Z"), o(l, "fill", r = /*fg*/
      i[3] ?? "currentColor"), o(s, "d", "M12 18a1.25 1.25 0 1 1 0-2.5A1.25 1.25 0 0 1 12 18Z"), o(s, "fill", a = /*fg*/
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
    m(f, c) {
      w(f, e, c), _(e, t), _(e, l), _(e, s);
    },
    p(f, c) {
      c & /*bg*/
      4 && n !== (n = /*bg*/
      f[2] ?? "currentColor") && o(t, "fill", n), c & /*bgOpacity*/
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
function Vt(i) {
  let e, t, n;
  function l(a, f) {
    return (
      /*bg*/
      a[2] ? hn : gn
    );
  }
  let r = l(i), s = r(i);
  return {
    c() {
      e = m("svg"), s.c(), t = m("path"), o(t, "d", "M9.2 12.5 7.5 10.8a1 1 0 0 0-1.4 1.4l2.4 2.4a1 1 0 0 0 1.4 0l7-7a1 1 0 1 0-1.4-1.4l-6.3 6.3Z"), o(t, "fill", n = /*fg*/
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
      w(a, e, f), s.m(e, null), _(e, t);
    },
    p(a, f) {
      r === (r = l(a)) && s ? s.p(a, f) : (s.d(1), s = r(a), s && (s.c(), s.m(e, t))), f & /*fg*/
      8 && n !== (n = /*fg*/
      a[3] ?? "currentColor") && o(t, "fill", n), f & /*size*/
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
function Ce(i) {
  let e;
  function t(r, s) {
    return (
      /*bgShape*/
      r[5] === "square" ? Ht : Zt
    );
  }
  let n = t(i), l = n(i);
  return {
    c() {
      l.c(), e = F();
    },
    m(r, s) {
      l.m(r, s), w(r, e, s);
    },
    p(r, s) {
      n === (n = t(r)) && l ? l.p(r, s) : (l.d(1), l = n(r), l && (l.c(), l.m(e.parentNode, e)));
    },
    d(r) {
      r && v(e), l.d(r);
    }
  };
}
function Zt(i) {
  let e;
  return {
    c() {
      e = m("circle"), o(e, "cx", "12"), o(e, "cy", "12"), o(e, "r", "10"), o(
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
      w(t, e, n);
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
      t && v(e);
    }
  };
}
function Ht(i) {
  let e;
  return {
    c() {
      e = m("rect"), o(e, "x", "3"), o(e, "y", "3"), o(e, "width", "18"), o(e, "height", "18"), o(e, "rx", "0"), o(
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
      w(t, e, n);
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
      t && v(e);
    }
  };
}
function xe(i) {
  let e;
  function t(r, s) {
    return (
      /*bgShape*/
      r[5] === "square" ? qt : Rt
    );
  }
  let n = t(i), l = n(i);
  return {
    c() {
      l.c(), e = F();
    },
    m(r, s) {
      l.m(r, s), w(r, e, s);
    },
    p(r, s) {
      n === (n = t(r)) && l ? l.p(r, s) : (l.d(1), l = n(r), l && (l.c(), l.m(e.parentNode, e)));
    },
    d(r) {
      r && v(e), l.d(r);
    }
  };
}
function Rt(i) {
  let e;
  return {
    c() {
      e = m("circle"), o(e, "cx", "12"), o(e, "cy", "12"), o(e, "r", "10"), o(
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
      w(t, e, n);
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
      t && v(e);
    }
  };
}
function qt(i) {
  let e;
  return {
    c() {
      e = m("rect"), o(e, "x", "3"), o(e, "y", "3"), o(e, "width", "18"), o(e, "height", "18"), o(e, "rx", "0"), o(
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
      w(t, e, n);
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
      t && v(e);
    }
  };
}
function Wt(i) {
  let e;
  return {
    c() {
      e = m("path"), o(e, "d", "M3 3h18v18H3V3Z"), o(e, "fill", "currentColor"), o(
        e,
        "opacity",
        /*bgOpacity*/
        i[4]
      ), o(e, "stroke", "none");
    },
    m(t, n) {
      w(t, e, n);
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
      t && v(e);
    }
  };
}
function Ut(i) {
  let e;
  function t(r, s) {
    return (
      /*bgShape*/
      r[5] === "square" ? Gt : Xt
    );
  }
  let n = t(i), l = n(i);
  return {
    c() {
      l.c(), e = F();
    },
    m(r, s) {
      l.m(r, s), w(r, e, s);
    },
    p(r, s) {
      n === (n = t(r)) && l ? l.p(r, s) : (l.d(1), l = n(r), l && (l.c(), l.m(e.parentNode, e)));
    },
    d(r) {
      r && v(e), l.d(r);
    }
  };
}
function Xt(i) {
  let e;
  return {
    c() {
      e = m("circle"), o(e, "cx", "12"), o(e, "cy", "12"), o(e, "r", "10"), o(
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
      w(t, e, n);
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
      t && v(e);
    }
  };
}
function Gt(i) {
  let e;
  return {
    c() {
      e = m("rect"), o(e, "x", "3"), o(e, "y", "3"), o(e, "width", "18"), o(e, "height", "18"), o(e, "rx", "0"), o(
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
      w(t, e, n);
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
      t && v(e);
    }
  };
}
function Jt(i) {
  let e;
  return {
    c() {
      e = m("path"), o(e, "d", "M3 3h18v18H3V3Z"), o(e, "fill", "currentColor"), o(
        e,
        "opacity",
        /*bgOpacity*/
        i[4]
      ), o(e, "stroke", "none");
    },
    m(t, n) {
      w(t, e, n);
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
      t && v(e);
    }
  };
}
function Yt(i) {
  let e;
  function t(r, s) {
    return (
      /*bgShape*/
      r[5] === "square" ? Qt : Kt
    );
  }
  let n = t(i), l = n(i);
  return {
    c() {
      l.c(), e = F();
    },
    m(r, s) {
      l.m(r, s), w(r, e, s);
    },
    p(r, s) {
      n === (n = t(r)) && l ? l.p(r, s) : (l.d(1), l = n(r), l && (l.c(), l.m(e.parentNode, e)));
    },
    d(r) {
      r && v(e), l.d(r);
    }
  };
}
function Kt(i) {
  let e;
  return {
    c() {
      e = m("circle"), o(e, "cx", "12"), o(e, "cy", "12"), o(e, "r", "10"), o(
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
      w(t, e, n);
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
      t && v(e);
    }
  };
}
function Qt(i) {
  let e;
  return {
    c() {
      e = m("rect"), o(e, "x", "3"), o(e, "y", "3"), o(e, "width", "18"), o(e, "height", "18"), o(e, "rx", "0"), o(
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
      w(t, e, n);
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
      t && v(e);
    }
  };
}
function en(i) {
  let e;
  return {
    c() {
      e = m("path"), o(e, "d", "M3 3h18v18H3V3Z"), o(e, "fill", "currentColor"), o(
        e,
        "opacity",
        /*bgOpacity*/
        i[4]
      ), o(e, "stroke", "none");
    },
    m(t, n) {
      w(t, e, n);
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
      t && v(e);
    }
  };
}
function tn(i) {
  let e;
  function t(r, s) {
    return (
      /*bgShape*/
      r[5] === "square" ? ln : nn
    );
  }
  let n = t(i), l = n(i);
  return {
    c() {
      l.c(), e = F();
    },
    m(r, s) {
      l.m(r, s), w(r, e, s);
    },
    p(r, s) {
      n === (n = t(r)) && l ? l.p(r, s) : (l.d(1), l = n(r), l && (l.c(), l.m(e.parentNode, e)));
    },
    d(r) {
      r && v(e), l.d(r);
    }
  };
}
function nn(i) {
  let e;
  return {
    c() {
      e = m("circle"), o(e, "cx", "12"), o(e, "cy", "12"), o(e, "r", "10"), o(
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
      w(t, e, n);
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
      t && v(e);
    }
  };
}
function ln(i) {
  let e;
  return {
    c() {
      e = m("rect"), o(e, "x", "3"), o(e, "y", "3"), o(e, "width", "18"), o(e, "height", "18"), o(e, "rx", "0"), o(
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
      w(t, e, n);
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
      t && v(e);
    }
  };
}
function rn(i) {
  let e;
  return {
    c() {
      e = m("path"), o(e, "d", "M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20Z"), o(e, "fill", "currentColor"), o(
        e,
        "opacity",
        /*bgOpacity*/
        i[4]
      );
    },
    m(t, n) {
      w(t, e, n);
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
      t && v(e);
    }
  };
}
function on(i) {
  let e;
  function t(r, s) {
    return (
      /*bgShape*/
      r[5] === "square" ? an : sn
    );
  }
  let n = t(i), l = n(i);
  return {
    c() {
      l.c(), e = F();
    },
    m(r, s) {
      l.m(r, s), w(r, e, s);
    },
    p(r, s) {
      n === (n = t(r)) && l ? l.p(r, s) : (l.d(1), l = n(r), l && (l.c(), l.m(e.parentNode, e)));
    },
    d(r) {
      r && v(e), l.d(r);
    }
  };
}
function sn(i) {
  let e;
  return {
    c() {
      e = m("circle"), o(e, "cx", "12"), o(e, "cy", "12"), o(e, "r", "10"), o(
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
      w(t, e, n);
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
      t && v(e);
    }
  };
}
function an(i) {
  let e;
  return {
    c() {
      e = m("rect"), o(e, "x", "3"), o(e, "y", "3"), o(e, "width", "18"), o(e, "height", "18"), o(e, "rx", "0"), o(
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
      w(t, e, n);
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
      t && v(e);
    }
  };
}
function fn(i) {
  let e;
  return {
    c() {
      e = m("path"), o(e, "d", "M3 3h18v18H3V3Z"), o(e, "fill", "currentColor"), o(
        e,
        "opacity",
        /*bgOpacity*/
        i[4]
      );
    },
    m(t, n) {
      w(t, e, n);
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
      t && v(e);
    }
  };
}
function cn(i) {
  let e;
  function t(r, s) {
    return (
      /*bgShape*/
      r[5] === "square" ? dn : un
    );
  }
  let n = t(i), l = n(i);
  return {
    c() {
      l.c(), e = F();
    },
    m(r, s) {
      l.m(r, s), w(r, e, s);
    },
    p(r, s) {
      n === (n = t(r)) && l ? l.p(r, s) : (l.d(1), l = n(r), l && (l.c(), l.m(e.parentNode, e)));
    },
    d(r) {
      r && v(e), l.d(r);
    }
  };
}
function un(i) {
  let e;
  return {
    c() {
      e = m("circle"), o(e, "cx", "12"), o(e, "cy", "12"), o(e, "r", "10"), o(
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
      w(t, e, n);
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
      t && v(e);
    }
  };
}
function dn(i) {
  let e;
  return {
    c() {
      e = m("rect"), o(e, "x", "3"), o(e, "y", "3"), o(e, "width", "18"), o(e, "height", "18"), o(e, "rx", "0"), o(
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
      w(t, e, n);
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
      t && v(e);
    }
  };
}
function gn(i) {
  let e;
  return {
    c() {
      e = m("path"), o(e, "d", "M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20Z"), o(e, "fill", "currentColor"), o(
        e,
        "opacity",
        /*bgOpacity*/
        i[4]
      );
    },
    m(t, n) {
      w(t, e, n);
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
      t && v(e);
    }
  };
}
function hn(i) {
  let e;
  function t(r, s) {
    return (
      /*bgShape*/
      r[5] === "square" ? bn : pn
    );
  }
  let n = t(i), l = n(i);
  return {
    c() {
      l.c(), e = F();
    },
    m(r, s) {
      l.m(r, s), w(r, e, s);
    },
    p(r, s) {
      n === (n = t(r)) && l ? l.p(r, s) : (l.d(1), l = n(r), l && (l.c(), l.m(e.parentNode, e)));
    },
    d(r) {
      r && v(e), l.d(r);
    }
  };
}
function pn(i) {
  let e;
  return {
    c() {
      e = m("circle"), o(e, "cx", "12"), o(e, "cy", "12"), o(e, "r", "10"), o(
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
      w(t, e, n);
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
      t && v(e);
    }
  };
}
function bn(i) {
  let e;
  return {
    c() {
      e = m("rect"), o(e, "x", "3"), o(e, "y", "3"), o(e, "width", "18"), o(e, "height", "18"), o(e, "rx", "0"), o(
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
      w(t, e, n);
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
      t && v(e);
    }
  };
}
function _n(i) {
  let e;
  function t(r, s) {
    return (
      /*name*/
      r[0] === "Confirmation" ? Vt : (
        /*name*/
        r[0] === "Warning" ? At : (
          /*name*/
          r[0] === "Info" ? Lt : (
            /*name*/
            r[0] === "InfoCircle" ? It : (
              /*name*/
              r[0] === "Interactive" ? Ft : (
                /*name*/
                r[0] === "Expand" ? Ot : (
                  /*name*/
                  r[0] === "OpenData" ? Et : (
                    /*name*/
                    r[0] === "badge-check" ? Nt : (
                      /*name*/
                      r[0] === "Download" ? Pt : (
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
  let n = t(i), l = n(i);
  return {
    c() {
      l.c(), e = F();
    },
    m(r, s) {
      l.m(r, s), w(r, e, s);
    },
    p(r, [s]) {
      n === (n = t(r)) && l ? l.p(r, s) : (l.d(1), l = n(r), l && (l.c(), l.m(e.parentNode, e)));
    },
    i: ae,
    o: ae,
    d(r) {
      r && v(e), l.d(r);
    }
  };
}
function mn(i, e, t) {
  let { name: n } = e, { size: l = 0 } = e, { bg: r = null } = e, { fg: s = null } = e, { bgOpacity: a = 0.14 } = e, { bgShape: f = "round" } = e;
  return i.$$set = (c) => {
    "name" in c && t(0, n = c.name), "size" in c && t(1, l = c.size), "bg" in c && t(2, r = c.bg), "fg" in c && t(3, s = c.fg), "bgOpacity" in c && t(4, a = c.bgOpacity), "bgShape" in c && t(5, f = c.bgShape);
  }, [n, l, r, s, a, f];
}
class re extends U {
  constructor(e) {
    super(), q(this, e, mn, _n, H, {
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
function vn(i) {
  le(i, "svelte-1r1mjkg", ".desc.svelte-1r1mjkg{display:block}.actionHint.svelte-1r1mjkg{display:flex;align-items:center;justify-content:center;gap:6px;margin-top:7px;padding-top:7px;border-top:1px solid rgba(255, 255, 255, 0.18);opacity:0.92;font-size:11px;line-height:1.2;width:100%;text-align:center;font-weight:650;letter-spacing:0.06em;text-transform:uppercase}.actionIcon.svelte-1r1mjkg{display:inline-flex;align-items:center;justify-content:center}");
}
const kn = (i) => ({}), Te = (i) => ({}), wn = (i) => ({}), De = (i) => ({});
function yn(i) {
  let e;
  const t = (
    /*#slots*/
    i[6].trigger
  ), n = ge(
    t,
    i,
    /*$$scope*/
    i[7],
    Te
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
      128) && pe(
        n,
        t,
        l,
        /*$$scope*/
        l[7],
        e ? he(
          t,
          /*$$scope*/
          l[7],
          r,
          kn
        ) : be(
          /*$$scope*/
          l[7]
        ),
        Te
      );
    },
    i(l) {
      e || ($(n, l), e = !0);
    },
    o(l) {
      C(n, l), e = !1;
    },
    d(l) {
      n && n.d(l);
    }
  };
}
function $n(i) {
  let e, t;
  return e = new Qe({
    props: {
      placement: (
        /*placement*/
        i[1]
      ),
      openDelayMs: (
        /*openDelayMs*/
        i[2]
      ),
      $$slots: {
        content: [zn],
        trigger: [Sn]
      },
      $$scope: { ctx: i }
    }
  }), {
    c() {
      O(e.$$.fragment);
    },
    m(n, l) {
      N(e, n, l), t = !0;
    },
    p(n, l) {
      const r = {};
      l & /*placement*/
      2 && (r.placement = /*placement*/
      n[1]), l & /*openDelayMs*/
      4 && (r.openDelayMs = /*openDelayMs*/
      n[2]), l & /*$$scope, badge, hintIcon, contentMode*/
      153 && (r.$$scope = { dirty: l, ctx: n }), e.$set(r);
    },
    i(n) {
      t || ($(e.$$.fragment, n), t = !0);
    },
    o(n) {
      C(e.$$.fragment, n), t = !1;
    },
    d(n) {
      E(e, n);
    }
  };
}
function Sn(i) {
  let e, t;
  const n = (
    /*#slots*/
    i[6].trigger
  ), l = ge(
    n,
    i,
    /*$$scope*/
    i[7],
    De
  );
  return {
    c() {
      e = x("span"), l && l.c(), o(e, "slot", "trigger");
    },
    m(r, s) {
      w(r, e, s), l && l.m(e, null), t = !0;
    },
    p(r, s) {
      l && l.p && (!t || s & /*$$scope*/
      128) && pe(
        l,
        n,
        r,
        /*$$scope*/
        r[7],
        t ? he(
          n,
          /*$$scope*/
          r[7],
          s,
          wn
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
      C(l, r), t = !1;
    },
    d(r) {
      r && v(e), l && l.d(r);
    }
  };
}
function je(i) {
  let e, t = (
    /*badge*/
    i[0].label + ""
  ), n;
  return {
    c() {
      e = x("strong"), n = R(t);
    },
    m(l, r) {
      w(l, e, r), _(e, n);
    },
    p(l, r) {
      r & /*badge*/
      1 && t !== (t = /*badge*/
      l[0].label + "") && Q(n, t);
    },
    d(l) {
      l && v(e);
    }
  };
}
function Pe(i) {
  let e, t = (
    /*badge*/
    i[0].description + ""
  ), n;
  return {
    c() {
      e = x("span"), n = R(t), o(e, "class", "desc svelte-1r1mjkg");
    },
    m(l, r) {
      w(l, e, r), _(e, n);
    },
    p(l, r) {
      r & /*badge*/
      1 && t !== (t = /*badge*/
      l[0].description + "") && Q(n, t);
    },
    d(l) {
      l && v(e);
    }
  };
}
function Ne(i) {
  let e, t, n, l = (
    /*badge*/
    i[0].actionText + ""
  ), r, s, a = (
    /*hintIcon*/
    i[4] && Ee(i)
  );
  return {
    c() {
      e = x("span"), a && a.c(), t = Z(), n = x("span"), r = R(l), o(n, "class", "actionText"), o(e, "class", "actionHint svelte-1r1mjkg"), o(e, "aria-hidden", "true");
    },
    m(f, c) {
      w(f, e, c), a && a.m(e, null), _(e, t), _(e, n), _(n, r), s = !0;
    },
    p(f, c) {
      /*hintIcon*/
      f[4] ? a ? (a.p(f, c), c & /*hintIcon*/
      16 && $(a, 1)) : (a = Ee(f), a.c(), $(a, 1), a.m(e, t)) : a && (L(), C(a, 1, 1, () => {
        a = null;
      }), A()), (!s || c & /*badge*/
      1) && l !== (l = /*badge*/
      f[0].actionText + "") && Q(r, l);
    },
    i(f) {
      s || ($(a), s = !0);
    },
    o(f) {
      C(a), s = !1;
    },
    d(f) {
      f && v(e), a && a.d();
    }
  };
}
function Ee(i) {
  let e, t, n;
  return t = new re({
    props: {
      name: (
        /*hintIcon*/
        i[4]
      ),
      size: 14,
      fg: "rgba(255, 255, 255, 0.92)",
      bg: null,
      bgOpacity: 0
    }
  }), {
    c() {
      e = x("span"), O(t.$$.fragment), o(e, "class", "actionIcon svelte-1r1mjkg");
    },
    m(l, r) {
      w(l, e, r), N(t, e, null), n = !0;
    },
    p(l, r) {
      const s = {};
      r & /*hintIcon*/
      16 && (s.name = /*hintIcon*/
      l[4]), t.$set(s);
    },
    i(l) {
      n || ($(t.$$.fragment, l), n = !0);
    },
    o(l) {
      C(t.$$.fragment, l), n = !1;
    },
    d(l) {
      l && v(e), E(t);
    }
  };
}
function zn(i) {
  let e, t, n, l, r = (
    /*contentMode*/
    i[3] === "labelAndDescription" && je(i)
  ), s = (
    /*badge*/
    i[0].description && Pe(i)
  ), a = (
    /*badge*/
    i[0].actionText && Ne(i)
  );
  return {
    c() {
      e = x("span"), r && r.c(), t = Z(), s && s.c(), n = Z(), a && a.c(), o(e, "slot", "content");
    },
    m(f, c) {
      w(f, e, c), r && r.m(e, null), _(e, t), s && s.m(e, null), _(e, n), a && a.m(e, null), l = !0;
    },
    p(f, c) {
      /*contentMode*/
      f[3] === "labelAndDescription" ? r ? r.p(f, c) : (r = je(f), r.c(), r.m(e, t)) : r && (r.d(1), r = null), /*badge*/
      f[0].description ? s ? s.p(f, c) : (s = Pe(f), s.c(), s.m(e, n)) : s && (s.d(1), s = null), /*badge*/
      f[0].actionText ? a ? (a.p(f, c), c & /*badge*/
      1 && $(a, 1)) : (a = Ne(f), a.c(), $(a, 1), a.m(e, null)) : a && (L(), C(a, 1, 1, () => {
        a = null;
      }), A());
    },
    i(f) {
      l || ($(a), l = !0);
    },
    o(f) {
      C(a), l = !1;
    },
    d(f) {
      f && v(e), r && r.d(), s && s.d(), a && a.d();
    }
  };
}
function Mn(i) {
  let e, t, n, l;
  const r = [$n, yn], s = [];
  function a(f, c) {
    return (
      /*showTooltip*/
      f[5] ? 0 : 1
    );
  }
  return e = a(i), t = s[e] = r[e](i), {
    c() {
      t.c(), n = F();
    },
    m(f, c) {
      s[e].m(f, c), w(f, n, c), l = !0;
    },
    p(f, [c]) {
      let u = e;
      e = a(f), e === u ? s[e].p(f, c) : (L(), C(s[u], 1, 1, () => {
        s[u] = null;
      }), A(), t = s[e], t ? t.p(f, c) : (t = s[e] = r[e](f), t.c()), $(t, 1), t.m(n.parentNode, n));
    },
    i(f) {
      l || ($(t), l = !0);
    },
    o(f) {
      C(t), l = !1;
    },
    d(f) {
      f && v(n), s[e].d(f);
    }
  };
}
function Bn(i, e, t) {
  let n, l, { $$slots: r = {}, $$scope: s } = e, { badge: a } = e, { placement: f = "top" } = e, { openDelayMs: c = 80 } = e, { contentMode: u = "description" } = e;
  return i.$$set = (d) => {
    "badge" in d && t(0, a = d.badge), "placement" in d && t(1, f = d.placement), "openDelayMs" in d && t(2, c = d.openDelayMs), "contentMode" in d && t(3, u = d.contentMode), "$$scope" in d && t(7, s = d.$$scope);
  }, i.$$.update = () => {
    i.$$.dirty & /*badge*/
    1 && t(5, n = !!(a != null && a.description || a != null && a.actionText)), i.$$.dirty & /*badge*/
    1 && t(4, l = (a == null ? void 0 : a.actionIcon) ?? null);
  }, [
    a,
    f,
    c,
    u,
    l,
    n,
    r,
    s
  ];
}
class fe extends U {
  constructor(e) {
    super(), q(
      this,
      e,
      Bn,
      Mn,
      H,
      {
        badge: 0,
        placement: 1,
        openDelayMs: 2,
        contentMode: 3
      },
      vn
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
function Cn(i) {
  le(i, "svelte-jjnksu", ".badge.svelte-jjnksu{display:inline-flex;align-items:center;gap:var(--badge-gap);padding:var(--badge-pad-y) var(--badge-pad-x);border-radius:16px;border:var(--badge-border-w) solid transparent;font-weight:550;font-size:12px;line-height:1;user-select:none;outline:none;transition:background-color 120ms ease, border-color 120ms ease, color 120ms ease;--badge-solid:rgb(17, 24, 39);--badge-border:color-mix(in srgb, var(--badge-solid) 65%, transparent);--badge-fg:color-mix(in srgb, var(--badge-solid) 72%, black);--badge-bg:color-mix(in srgb, var(--badge-solid) 14%, transparent);--badge-gap:3px;--badge-pad-y:3px;--badge-pad-x:6px;--badge-border-w:1px}.badge.filled.svelte-jjnksu{background:var(--badge-solid);border-color:transparent;color:#ffffff}.badge.outlined.svelte-jjnksu{background:transparent;border-color:var(--badge-border);color:var(--badge-fg)}.icon.svelte-jjnksu{display:inline-flex;align-items:center;justify-content:center}.label.svelte-jjnksu{white-space:nowrap}");
}
function Oe(i) {
  let e, t;
  return e = new fe({
    props: {
      badge: (
        /*badge*/
        i[0]
      ),
      placement: "top",
      openDelayMs: 80,
      contentMode: "description",
      $$slots: { trigger: [xn] },
      $$scope: { ctx: i }
    }
  }), {
    c() {
      O(e.$$.fragment);
    },
    m(n, l) {
      N(e, n, l), t = !0;
    },
    p(n, l) {
      const r = {};
      l & /*badge*/
      1 && (r.badge = /*badge*/
      n[0]), l & /*$$scope, variant, badgeColor, badge, iconName, iconBgShape*/
      63 && (r.$$scope = { dirty: l, ctx: n }), e.$set(r);
    },
    i(n) {
      t || ($(e.$$.fragment, n), t = !0);
    },
    o(n) {
      C(e.$$.fragment, n), t = !1;
    },
    d(n) {
      E(e, n);
    }
  };
}
function Fe(i) {
  let e, t, n;
  return t = new re({
    props: {
      name: (
        /*iconName*/
        i[2]
      ),
      size: Dn,
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
        i[3]
      )
    }
  }), {
    c() {
      e = x("span"), O(t.$$.fragment), o(e, "class", "icon svelte-jjnksu"), o(e, "aria-hidden", "true");
    },
    m(l, r) {
      w(l, e, r), N(t, e, null), n = !0;
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
      n || ($(t.$$.fragment, l), n = !0);
    },
    o(l) {
      C(t.$$.fragment, l), n = !1;
    },
    d(l) {
      l && v(e), E(t);
    }
  };
}
function xn(i) {
  let e, t, n, l, r = (
    /*badge*/
    i[0].label + ""
  ), s, a, f, c, u, d, p, g = (
    /*iconName*/
    i[2] && Fe(i)
  );
  return {
    c() {
      e = x("span"), t = x("span"), g && g.c(), n = Z(), l = x("span"), s = R(r), o(l, "class", "label svelte-jjnksu"), o(t, "class", a = "badge " + /*variant*/
      i[1] + " svelte-jjnksu"), o(t, "style", f = `--badge-solid:${/*badgeColor*/
      i[4]};`), o(t, "role", "note"), o(t, "aria-label", c = /*badge*/
      i[0].label), o(e, "slot", "trigger"), o(e, "role", "presentation");
    },
    m(h, S) {
      w(h, e, S), _(e, t), g && g.m(t, null), _(t, n), _(t, l), _(l, s), u = !0, d || (p = V(e, "keydown", jn), d = !0);
    },
    p(h, S) {
      /*iconName*/
      h[2] ? g ? (g.p(h, S), S & /*iconName*/
      4 && $(g, 1)) : (g = Fe(h), g.c(), $(g, 1), g.m(t, n)) : g && (L(), C(g, 1, 1, () => {
        g = null;
      }), A()), (!u || S & /*badge*/
      1) && r !== (r = /*badge*/
      h[0].label + "") && Q(s, r), (!u || S & /*variant*/
      2 && a !== (a = "badge " + /*variant*/
      h[1] + " svelte-jjnksu")) && o(t, "class", a), (!u || S & /*badgeColor*/
      16 && f !== (f = `--badge-solid:${/*badgeColor*/
      h[4]};`)) && o(t, "style", f), (!u || S & /*badge*/
      1 && c !== (c = /*badge*/
      h[0].label)) && o(t, "aria-label", c);
    },
    i(h) {
      u || ($(g), u = !0);
    },
    o(h) {
      C(g), u = !1;
    },
    d(h) {
      h && v(e), g && g.d(), d = !1, p();
    }
  };
}
function Tn(i) {
  let e, t, n = (
    /*badge*/
    i[0] && Oe(i)
  );
  return {
    c() {
      n && n.c(), e = F();
    },
    m(l, r) {
      n && n.m(l, r), w(l, e, r), t = !0;
    },
    p(l, [r]) {
      /*badge*/
      l[0] ? n ? (n.p(l, r), r & /*badge*/
      1 && $(n, 1)) : (n = Oe(l), n.c(), $(n, 1), n.m(e.parentNode, e)) : n && (L(), C(n, 1, 1, () => {
        n = null;
      }), A());
    },
    i(l) {
      t || ($(n), t = !0);
    },
    o(l) {
      C(n), t = !1;
    },
    d(l) {
      l && v(e), n && n.d(l);
    }
  };
}
const Dn = 20, jn = () => {
};
function Pn(i, e, t) {
  let n, l, r, { badge: s } = e, { variant: a = "filled" } = e;
  return i.$$set = (f) => {
    "badge" in f && t(0, s = f.badge), "variant" in f && t(1, a = f.variant);
  }, i.$$.update = () => {
    i.$$.dirty & /*badge*/
    1 && t(2, n = (s == null ? void 0 : s.icon) ?? null), i.$$.dirty & /*badge*/
    1 && t(4, l = String((s == null ? void 0 : s.color) ?? "").trim() || "rgb(17, 24, 39)"), i.$$.dirty & /*iconName*/
    4 && t(3, r = n === "Info" ? "square" : "round");
  }, [s, a, n, r, l];
}
class et extends U {
  constructor(e) {
    super(), q(this, e, Pn, Tn, H, { badge: 0, variant: 1 }, Cn);
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
function Nn(i) {
  le(i, "svelte-467e52", `.wrap.fixed.svelte-467e52.svelte-467e52{position:fixed;z-index:50}.wrap.svelte-467e52.svelte-467e52{display:inline-flex;align-items:center;justify-content:flex-end;pointer-events:auto}.wrap.left.svelte-467e52 .badge.mini{flex-direction:row-reverse}.badge.svelte-467e52.svelte-467e52{display:inline-flex;align-items:center;gap:var(--badge-gap);padding:var(--badge-pad-y) var(--badge-pad-x);border-radius:16px;border:var(--badge-border-w) solid transparent;font-weight:550;font-size:12px;line-height:1;user-select:none;outline:none;transition:background-color 220ms ease, border-color 220ms ease, color 220ms ease, box-shadow 220ms ease,
      padding 420ms cubic-bezier(0.2, 0, 0, 1);--badge-solid:rgb(17, 24, 39);--badge-border:color-mix(in srgb, var(--badge-solid) 65%, transparent);--badge-fg:color-mix(in srgb, var(--badge-solid) 72%, black);--badge-gap:3px;--badge-pad-y:3px;--badge-pad-x:6px;--badge-border-w:1px;--mini-icon-bg:var(--badge-solid);--mini-icon-fg:#ffffff}.badge.filled.svelte-467e52.svelte-467e52{background:var(--badge-solid);border-color:transparent;color:#ffffff}.badge.outlined.svelte-467e52.svelte-467e52{background:transparent;border-color:var(--badge-border);color:var(--badge-fg)}.icon.svelte-467e52.svelte-467e52{display:inline-flex;align-items:center;justify-content:center}.label.svelte-467e52.svelte-467e52{white-space:nowrap}.badge.mini.svelte-467e52.svelte-467e52{--badge-gap:0px;--badge-pad-y:0px;--badge-pad-x:0px;--badge-border-w:0px;border-color:transparent;background:transparent;font-size:11px}.badge.mini.svelte-467e52 .label.svelte-467e52{max-width:0;opacity:0;overflow:hidden;line-height:1.2;padding-bottom:1px;transition:max-width 420ms cubic-bezier(0.2, 0, 0, 1), opacity 260ms ease}.badge.mini.svelte-467e52.svelte-467e52:hover,.badge.mini.svelte-467e52.svelte-467e52:focus-visible{--badge-gap:2px;--badge-pad-y:2px;--badge-pad-x:5px;--badge-border-w:1px}.badge.mini.outlined.svelte-467e52.svelte-467e52:hover,.badge.mini.outlined.svelte-467e52.svelte-467e52:focus-visible{border-color:var(--badge-border)}.badge.mini.filled.svelte-467e52.svelte-467e52:hover,.badge.mini.filled.svelte-467e52.svelte-467e52:focus-visible{background:var(--badge-solid);border-color:transparent;color:#ffffff;--mini-icon-bg:#ffffff;--mini-icon-fg:var(--badge-solid)}.badge.mini.svelte-467e52:hover .label.svelte-467e52,.badge.mini.svelte-467e52:focus-visible .label.svelte-467e52{max-width:220px;opacity:1}`);
}
function Ie(i) {
  let e, t;
  return e = new fe({
    props: {
      badge: (
        /*badge*/
        i[0]
      ),
      placement: "top",
      openDelayMs: 420,
      contentMode: "description",
      $$slots: { trigger: [En] },
      $$scope: { ctx: i }
    }
  }), {
    c() {
      O(e.$$.fragment);
    },
    m(n, l) {
      N(e, n, l), t = !0;
    },
    p(n, l) {
      const r = {};
      l & /*badge*/
      1 && (r.badge = /*badge*/
      n[0]), l & /*$$scope, variant, badgeColor, badge, iconName, iconBgShapeFinal*/
      739 && (r.$$scope = { dirty: l, ctx: n }), e.$set(r);
    },
    i(n) {
      t || ($(e.$$.fragment, n), t = !0);
    },
    o(n) {
      C(e.$$.fragment, n), t = !1;
    },
    d(n) {
      E(e, n);
    }
  };
}
function Le(i) {
  let e, t, n;
  return t = new re({
    props: {
      name: (
        /*iconName*/
        i[5]
      ),
      size: Fn,
      bg: "var(--mini-icon-bg)",
      fg: "var(--mini-icon-fg)",
      bgOpacity: 1,
      bgShape: (
        /*iconBgShapeFinal*/
        i[6]
      )
    }
  }), {
    c() {
      e = x("span"), O(t.$$.fragment), o(e, "class", "icon svelte-467e52"), o(e, "aria-hidden", "true");
    },
    m(l, r) {
      w(l, e, r), N(t, e, null), n = !0;
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
      n || ($(t.$$.fragment, l), n = !0);
    },
    o(l) {
      C(t.$$.fragment, l), n = !1;
    },
    d(l) {
      l && v(e), E(t);
    }
  };
}
function En(i) {
  let e, t, n, l, r = (
    /*badge*/
    i[0].label + ""
  ), s, a, f, c, u, d, p, g = (
    /*iconName*/
    i[5] && Le(i)
  );
  return {
    c() {
      e = x("span"), t = x("span"), g && g.c(), n = Z(), l = x("span"), s = R(r), o(l, "class", "label svelte-467e52"), o(t, "class", a = "badge mini " + /*variant*/
      i[1] + " svelte-467e52"), o(t, "style", f = `--badge-solid:${/*badgeColor*/
      i[7]};`), o(t, "role", "note"), o(t, "aria-label", c = /*badge*/
      i[0].label), o(e, "slot", "trigger"), o(e, "role", "presentation");
    },
    m(h, S) {
      w(h, e, S), _(e, t), g && g.m(t, null), _(t, n), _(t, l), _(l, s), u = !0, d || (p = V(e, "keydown", In), d = !0);
    },
    p(h, S) {
      /*iconName*/
      h[5] ? g ? (g.p(h, S), S & /*iconName*/
      32 && $(g, 1)) : (g = Le(h), g.c(), $(g, 1), g.m(t, n)) : g && (L(), C(g, 1, 1, () => {
        g = null;
      }), A()), (!u || S & /*badge*/
      1) && r !== (r = /*badge*/
      h[0].label + "") && Q(s, r), (!u || S & /*variant*/
      2 && a !== (a = "badge mini " + /*variant*/
      h[1] + " svelte-467e52")) && o(t, "class", a), (!u || S & /*badgeColor*/
      128 && f !== (f = `--badge-solid:${/*badgeColor*/
      h[7]};`)) && o(t, "style", f), (!u || S & /*badge*/
      1 && c !== (c = /*badge*/
      h[0].label)) && o(t, "aria-label", c);
    },
    i(h) {
      u || ($(g), u = !0);
    },
    o(h) {
      C(g), u = !1;
    },
    d(h) {
      h && v(e), g && g.d(), d = !1, p();
    }
  };
}
function On(i) {
  let e, t, n, l, r = (
    /*badge*/
    i[0] && Ie(i)
  );
  return {
    c() {
      e = x("div"), r && r.c(), o(e, "class", t = "wrap " + /*fixed*/
      (i[2] ? "fixed" : "") + " " + /*expandDirection*/
      i[4] + " svelte-467e52"), o(e, "style", n = /*fixed*/
      i[2] ? `right:${/*offsetPx*/
      i[3]}px;bottom:${/*offsetPx*/
      i[3]}px;` : void 0), o(e, "aria-label", "Mini badge");
    },
    m(s, a) {
      w(s, e, a), r && r.m(e, null), l = !0;
    },
    p(s, [a]) {
      /*badge*/
      s[0] ? r ? (r.p(s, a), a & /*badge*/
      1 && $(r, 1)) : (r = Ie(s), r.c(), $(r, 1), r.m(e, null)) : r && (L(), C(r, 1, 1, () => {
        r = null;
      }), A()), (!l || a & /*fixed, expandDirection*/
      20 && t !== (t = "wrap " + /*fixed*/
      (s[2] ? "fixed" : "") + " " + /*expandDirection*/
      s[4] + " svelte-467e52")) && o(e, "class", t), (!l || a & /*fixed, offsetPx*/
      12 && n !== (n = /*fixed*/
      s[2] ? `right:${/*offsetPx*/
      s[3]}px;bottom:${/*offsetPx*/
      s[3]}px;` : void 0)) && o(e, "style", n);
    },
    i(s) {
      l || ($(r), l = !0);
    },
    o(s) {
      C(r), l = !1;
    },
    d(s) {
      s && v(e), r && r.d();
    }
  };
}
const Fn = 24, In = () => {
};
function Ln(i, e, t) {
  let n, l, r, { badge: s } = e, { variant: a = "outlined" } = e, { iconBgShape: f = "round" } = e, { fixed: c = !1 } = e, { offsetPx: u = 16 } = e, { expandDirection: d = "right" } = e;
  return i.$$set = (p) => {
    "badge" in p && t(0, s = p.badge), "variant" in p && t(1, a = p.variant), "iconBgShape" in p && t(8, f = p.iconBgShape), "fixed" in p && t(2, c = p.fixed), "offsetPx" in p && t(3, u = p.offsetPx), "expandDirection" in p && t(4, d = p.expandDirection);
  }, i.$$.update = () => {
    i.$$.dirty & /*badge*/
    1 && t(5, n = (s == null ? void 0 : s.icon) ?? null), i.$$.dirty & /*badge*/
    1 && t(7, l = String((s == null ? void 0 : s.color) ?? "").trim() || "rgb(17, 24, 39)"), i.$$.dirty & /*iconName, iconBgShape*/
    288 && t(6, r = n === "Info" ? "square" : f);
  }, [
    s,
    a,
    c,
    u,
    d,
    n,
    r,
    l,
    f
  ];
}
class tt extends U {
  constructor(e) {
    super(), q(
      this,
      e,
      Ln,
      On,
      H,
      {
        badge: 0,
        variant: 1,
        iconBgShape: 8,
        fixed: 2,
        offsetPx: 3,
        expandDirection: 4
      },
      Nn
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
function An(i) {
  le(i, "svelte-1achwnm", `.prio.svelte-1achwnm.svelte-1achwnm{width:var(--prio-size);height:var(--prio-size);border-radius:999px;display:inline-flex;align-items:center;justify-content:center;cursor:default;outline:none;user-select:none;transition:transform 160ms cubic-bezier(0.2, 0, 0, 1), box-shadow 160ms cubic-bezier(0.2, 0, 0, 1),
      filter 160ms cubic-bezier(0.2, 0, 0, 1);--prio-solid:rgb(17, 24, 39);--prio-border:color-mix(in srgb, var(--prio-solid) 65%, transparent);--prio-text:#ffffff}.prio-inner.svelte-1achwnm.svelte-1achwnm{width:100%;height:100%;border-radius:999px;display:inline-flex;align-items:center;justify-content:center}.prio.with-label.svelte-1achwnm .prio-inner.svelte-1achwnm{flex-direction:column;gap:2px;padding:3px 5px 5px 5px;box-sizing:border-box}.prio-text.svelte-1achwnm.svelte-1achwnm{font-size:var(--prio-text-size, 10px);font-weight:550;letter-spacing:0.02em;line-height:1.05;color:var(--prio-text);text-align:center;white-space:normal;overflow-wrap:anywhere;opacity:0.95}.prio.solid.svelte-1achwnm.svelte-1achwnm{background:var(--prio-solid)}.prio.ring.svelte-1achwnm.svelte-1achwnm{background:#ffffff;box-shadow:inset 0 0 0 2px var(--prio-solid);--prio-text:var(--prio-solid)}.prio.double-ring.svelte-1achwnm.svelte-1achwnm{background:var(--prio-solid);box-shadow:inset 0 0 0 3px rgba(255, 255, 255, 0.95), 0 0 0 2px var(--prio-solid)}.prio.stamp.svelte-1achwnm.svelte-1achwnm{background:var(--prio-solid);box-shadow:inset 0 0 0 2px rgba(255, 255, 255, 0.85);filter:saturate(1.05)}.prio.stamp.svelte-1achwnm .prio-inner.svelte-1achwnm{background-image:radial-gradient(rgba(255, 255, 255, 0.08) 1px, transparent 0);background-size:6px 6px;background-position:0 0}.prio.glow.svelte-1achwnm.svelte-1achwnm{background:var(--prio-solid);box-shadow:0 10px 22px rgba(17, 24, 39, 0.16), 0 0 0 3px rgba(255, 255, 255, 0.92)}`);
}
function Ae(i) {
  let e, t;
  return e = new fe({
    props: {
      badge: (
        /*badge*/
        i[0]
      ),
      placement: "top",
      openDelayMs: 120,
      contentMode: "labelAndDescription",
      $$slots: { trigger: [Vn] },
      $$scope: { ctx: i }
    }
  }), {
    c() {
      O(e.$$.fragment);
    },
    m(n, l) {
      N(e, n, l), t = !0;
    },
    p(n, l) {
      const r = {};
      l & /*badge*/
      1 && (r.badge = /*badge*/
      n[0]), l & /*$$scope, variant, badgeColor, renderSize, textSize, badge, rawLabel, iconName, iconSize, iconBgShape*/
      2559 && (r.$$scope = { dirty: l, ctx: n }), e.$set(r);
    },
    i(n) {
      t || ($(e.$$.fragment, n), t = !0);
    },
    o(n) {
      C(e.$$.fragment, n), t = !1;
    },
    d(n) {
      E(e, n);
    }
  };
}
function Ve(i) {
  let e, t;
  return e = new re({
    props: {
      name: (
        /*iconName*/
        i[4]
      ),
      size: (
        /*iconSize*/
        i[6]
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
        i[7]
      )
    }
  }), {
    c() {
      O(e.$$.fragment);
    },
    m(n, l) {
      N(e, n, l), t = !0;
    },
    p(n, l) {
      const r = {};
      l & /*iconName*/
      16 && (r.name = /*iconName*/
      n[4]), l & /*iconSize*/
      64 && (r.size = /*iconSize*/
      n[6]), l & /*variant*/
      2 && (r.bg = /*variant*/
      n[1] === "solid" ? "#ffffff" : "var(--prio-solid)"), l & /*variant*/
      2 && (r.fg = /*variant*/
      n[1] === "solid" ? "var(--prio-solid)" : "#ffffff"), l & /*iconBgShape*/
      128 && (r.bgShape = /*iconBgShape*/
      n[7]), e.$set(r);
    },
    i(n) {
      t || ($(e.$$.fragment, n), t = !0);
    },
    o(n) {
      C(e.$$.fragment, n), t = !1;
    },
    d(n) {
      E(e, n);
    }
  };
}
function Vn(i) {
  let e, t, n, l, r, s, a, f, c, u, d, p, g = (
    /*iconName*/
    i[4] && Ve(i)
  );
  return {
    c() {
      e = x("span"), t = x("span"), n = x("span"), g && g.c(), l = Z(), r = x("span"), s = R(
        /*rawLabel*/
        i[3]
      ), o(r, "class", "prio-text svelte-1achwnm"), o(n, "class", "prio-inner svelte-1achwnm"), o(n, "aria-hidden", "true"), o(t, "class", a = "prio " + /*variant*/
      i[1] + " with-label svelte-1achwnm"), o(t, "style", f = `--prio-solid:${/*badgeColor*/
      i[8]}; --prio-size:${/*renderSize*/
      i[2]}px; --prio-text-size:${/*textSize*/
      i[5]}px;`), o(t, "role", "note"), o(t, "aria-label", c = /*badge*/
      i[0].label), o(e, "slot", "trigger"), o(e, "role", "presentation");
    },
    m(h, S) {
      w(h, e, S), _(e, t), _(t, n), g && g.m(n, null), _(n, l), _(n, r), _(r, s), u = !0, d || (p = V(e, "keydown", Rn), d = !0);
    },
    p(h, S) {
      /*iconName*/
      h[4] ? g ? (g.p(h, S), S & /*iconName*/
      16 && $(g, 1)) : (g = Ve(h), g.c(), $(g, 1), g.m(n, l)) : g && (L(), C(g, 1, 1, () => {
        g = null;
      }), A()), (!u || S & /*rawLabel*/
      8) && Q(
        s,
        /*rawLabel*/
        h[3]
      ), (!u || S & /*variant*/
      2 && a !== (a = "prio " + /*variant*/
      h[1] + " with-label svelte-1achwnm")) && o(t, "class", a), (!u || S & /*badgeColor, renderSize, textSize*/
      292 && f !== (f = `--prio-solid:${/*badgeColor*/
      h[8]}; --prio-size:${/*renderSize*/
      h[2]}px; --prio-text-size:${/*textSize*/
      h[5]}px;`)) && o(t, "style", f), (!u || S & /*badge*/
      1 && c !== (c = /*badge*/
      h[0].label)) && o(t, "aria-label", c);
    },
    i(h) {
      u || ($(g), u = !0);
    },
    o(h) {
      C(g), u = !1;
    },
    d(h) {
      h && v(e), g && g.d(), d = !1, p();
    }
  };
}
function Zn(i) {
  let e, t, n = (
    /*badge*/
    i[0] && Ae(i)
  );
  return {
    c() {
      n && n.c(), e = F();
    },
    m(l, r) {
      n && n.m(l, r), w(l, e, r), t = !0;
    },
    p(l, [r]) {
      /*badge*/
      l[0] ? n ? (n.p(l, r), r & /*badge*/
      1 && $(n, 1)) : (n = Ae(l), n.c(), $(n, 1), n.m(e.parentNode, e)) : n && (L(), C(n, 1, 1, () => {
        n = null;
      }), A());
    },
    i(l) {
      t || ($(n), t = !0);
    },
    o(l) {
      C(n), t = !1;
    },
    d(l) {
      l && v(e), n && n.d(l);
    }
  };
}
function Hn(i) {
  return String(i ?? "").trim() || "—";
}
const Rn = () => {
};
function qn(i, e, t) {
  let n, l, r, s, a, f, c, u, { badge: d } = e, { variant: p = "solid" } = e, { size: g = 44 } = e;
  return i.$$set = (h) => {
    "badge" in h && t(0, d = h.badge), "variant" in h && t(1, p = h.variant), "size" in h && t(9, g = h.size);
  }, i.$$.update = () => {
    i.$$.dirty & /*badge*/
    1 && t(4, n = (d == null ? void 0 : d.icon) ?? null), i.$$.dirty & /*badge*/
    1 && t(8, l = String((d == null ? void 0 : d.color) ?? "").trim() || "rgb(17, 24, 39)"), i.$$.dirty & /*iconName*/
    16 && t(7, r = n === "Info" ? "square" : "round"), i.$$.dirty & /*badge*/
    1 && t(3, s = Hn(d == null ? void 0 : d.label)), i.$$.dirty & /*rawLabel*/
    8 && t(10, a = s.length), i.$$.dirty & /*size, labelLen*/
    1536 && t(2, f = Math.min(104, Math.max(g, 70 + Math.max(0, a - 12) * 1.4))), i.$$.dirty & /*renderSize*/
    4 && t(6, c = Math.round(f * 0.34)), i.$$.dirty & /*labelLen*/
    1024 && t(5, u = a <= 12 ? 12 : a <= 18 ? 11 : a <= 26 ? 10 : 9);
  }, [
    d,
    p,
    f,
    s,
    n,
    u,
    c,
    r,
    l,
    g,
    a
  ];
}
class nt extends U {
  constructor(e) {
    super(), q(this, e, qn, Zn, H, { badge: 0, variant: 1, size: 9 }, An);
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
W(nt, { badge: {}, variant: {}, size: {} }, [], [], !0);
function Wn(i) {
  le(i, "svelte-1wx095d", ".seal.svelte-1wx095d.svelte-1wx095d{position:relative;width:var(--seal-size);height:var(--seal-size);border-radius:999px;display:inline-grid;place-items:center;outline:none;cursor:default;user-select:none;background:transparent;--seal-solid:rgb(17, 24, 39);--seal-ring:color-mix(in srgb, var(--seal-solid) 55%, transparent);--seal-line:color-mix(in srgb, var(--seal-solid) 18%, transparent);--seal-ring-fg:var(--seal-solid)}.seal.filled.svelte-1wx095d.svelte-1wx095d{background:var(--seal-solid);--seal-ring-fg:rgba(255, 255, 255, 0.92)}.ring.svelte-1wx095d.svelte-1wx095d{position:absolute;inset:0;border-radius:999px;font-size:var(--seal-font);color:var(--seal-ring-fg);opacity:0.92;text-transform:uppercase;letter-spacing:0.1em;font-weight:550}.char.svelte-1wx095d.svelte-1wx095d{width:1em;height:100%;position:absolute;top:0;left:50%;transform:translateX(-50%) rotate(var(--angle));text-align:center}.center.svelte-1wx095d.svelte-1wx095d{position:absolute;inset:0;display:grid;place-items:center}.center-pill.svelte-1wx095d.svelte-1wx095d{width:calc(var(--seal-size) * 0.64);height:calc(var(--seal-size) * 0.64);border-radius:999px;background:rgba(255, 255, 255, 0.96);border:1px solid var(--seal-line);display:grid;place-items:center;opacity:0.95}.seal.filled.svelte-1wx095d .center-pill.svelte-1wx095d{border-color:rgba(255, 255, 255, 0.35);background:#ffffff;opacity:1}");
}
function Ze(i, e, t) {
  const n = i.slice();
  return n[14] = e[t], n[16] = t, n;
}
function He(i) {
  let e, t;
  return e = new fe({
    props: {
      badge: (
        /*badge*/
        i[0]
      ),
      placement: "top",
      openDelayMs: 120,
      contentMode: "labelAndDescription",
      $$slots: { trigger: [Un] },
      $$scope: { ctx: i }
    }
  }), {
    c() {
      O(e.$$.fragment);
    },
    m(n, l) {
      N(e, n, l), t = !0;
    },
    p(n, l) {
      const r = {};
      l & /*badge*/
      1 && (r.badge = /*badge*/
      n[0]), l & /*$$scope, variant, badgeColor, size, ringFontPx, badge, iconName, centerIcon, chars*/
      131327 && (r.$$scope = { dirty: l, ctx: n }), e.$set(r);
    },
    i(n) {
      t || ($(e.$$.fragment, n), t = !0);
    },
    o(n) {
      C(e.$$.fragment, n), t = !1;
    },
    d(n) {
      E(e, n);
    }
  };
}
function Re(i, e) {
  let t, n = (
    /*char*/
    e[14] + ""
  ), l, r;
  return {
    key: i,
    first: null,
    c() {
      t = x("span"), l = R(n), o(t, "class", "char svelte-1wx095d"), o(t, "style", r = `--angle:${1 / /*chars*/
      e[5].length * /*index*/
      e[16]}turn;`), this.first = t;
    },
    m(s, a) {
      w(s, t, a), _(t, l);
    },
    p(s, a) {
      e = s, a & /*chars*/
      32 && n !== (n = /*char*/
      e[14] + "") && Q(l, n), a & /*chars*/
      32 && r !== (r = `--angle:${1 / /*chars*/
      e[5].length * /*index*/
      e[16]}turn;`) && o(t, "style", r);
    },
    d(s) {
      s && v(t);
    }
  };
}
function qe(i) {
  let e, t;
  return e = new re({
    props: {
      name: (
        /*iconName*/
        i[7]
      ),
      size: (
        /*centerIcon*/
        i[3]
      ),
      bg: "var(--seal-solid)",
      fg: "#ffffff",
      bgOpacity: 1
    }
  }), {
    c() {
      O(e.$$.fragment);
    },
    m(n, l) {
      N(e, n, l), t = !0;
    },
    p(n, l) {
      const r = {};
      l & /*iconName*/
      128 && (r.name = /*iconName*/
      n[7]), l & /*centerIcon*/
      8 && (r.size = /*centerIcon*/
      n[3]), e.$set(r);
    },
    i(n) {
      t || ($(e.$$.fragment, n), t = !0);
    },
    o(n) {
      C(e.$$.fragment, n), t = !1;
    },
    d(n) {
      E(e, n);
    }
  };
}
function Un(i) {
  let e, t, n, l = [], r = /* @__PURE__ */ new Map(), s, a, f, c, u, d, p, g, h, S = Se(
    /*chars*/
    i[5]
  );
  const T = (z) => (
    /*index*/
    z[16]
  );
  for (let z = 0; z < S.length; z += 1) {
    let M = Ze(i, S, z), B = T(M);
    r.set(B, l[z] = Re(B, M));
  }
  let b = (
    /*iconName*/
    i[7] && qe(i)
  );
  return {
    c() {
      e = x("span"), t = x("span"), n = x("span");
      for (let z = 0; z < l.length; z += 1)
        l[z].c();
      s = Z(), a = x("span"), f = x("span"), b && b.c(), o(n, "class", "ring svelte-1wx095d"), o(n, "aria-hidden", "true"), o(f, "class", "center-pill svelte-1wx095d"), o(a, "class", "center svelte-1wx095d"), o(a, "aria-hidden", "true"), o(t, "class", c = "seal " + /*variant*/
      i[1] + " svelte-1wx095d"), o(t, "style", u = `--seal-solid:${/*badgeColor*/
      i[6]}; --seal-size:${/*size*/
      i[2]}px; --seal-font:${/*ringFontPx*/
      i[4]}px;`), o(t, "role", "note"), o(t, "aria-label", d = /*badge*/
      i[0].label), o(e, "slot", "trigger"), o(e, "role", "presentation");
    },
    m(z, M) {
      w(z, e, M), _(e, t), _(t, n);
      for (let B = 0; B < l.length; B += 1)
        l[B] && l[B].m(n, null);
      _(t, s), _(t, a), _(a, f), b && b.m(f, null), p = !0, g || (h = V(e, "keydown", Jn), g = !0);
    },
    p(z, M) {
      M & /*chars*/
      32 && (S = Se(
        /*chars*/
        z[5]
      ), l = yt(l, M, T, 1, z, S, r, n, wt, Re, null, Ze)), /*iconName*/
      z[7] ? b ? (b.p(z, M), M & /*iconName*/
      128 && $(b, 1)) : (b = qe(z), b.c(), $(b, 1), b.m(f, null)) : b && (L(), C(b, 1, 1, () => {
        b = null;
      }), A()), (!p || M & /*variant*/
      2 && c !== (c = "seal " + /*variant*/
      z[1] + " svelte-1wx095d")) && o(t, "class", c), (!p || M & /*badgeColor, size, ringFontPx*/
      84 && u !== (u = `--seal-solid:${/*badgeColor*/
      z[6]}; --seal-size:${/*size*/
      z[2]}px; --seal-font:${/*ringFontPx*/
      z[4]}px;`)) && o(t, "style", u), (!p || M & /*badge*/
      1 && d !== (d = /*badge*/
      z[0].label)) && o(t, "aria-label", d);
    },
    i(z) {
      p || ($(b), p = !0);
    },
    o(z) {
      C(b), p = !1;
    },
    d(z) {
      z && v(e);
      for (let M = 0; M < l.length; M += 1)
        l[M].d();
      b && b.d(), g = !1, h();
    }
  };
}
function Xn(i) {
  let e, t, n = (
    /*badge*/
    i[0] && He(i)
  );
  return {
    c() {
      n && n.c(), e = F();
    },
    m(l, r) {
      n && n.m(l, r), w(l, e, r), t = !0;
    },
    p(l, [r]) {
      /*badge*/
      l[0] ? n ? (n.p(l, r), r & /*badge*/
      1 && $(n, 1)) : (n = He(l), n.c(), $(n, 1), n.m(e.parentNode, e)) : n && (L(), C(n, 1, 1, () => {
        n = null;
      }), A());
    },
    i(l) {
      t || ($(n), t = !0);
    },
    o(l) {
      C(n), t = !1;
    },
    d(l) {
      l && v(e), n && n.d(l);
    }
  };
}
function Gn(i, e, t) {
  return Math.max(e, Math.min(t, i));
}
const Jn = () => {
};
function Yn(i, e, t) {
  let n, l, r, s, a, f, c, { badge: u } = e, { variant: d = "outlined" } = e, { ringText: p = null } = e, { repeat: g = 2 } = e, { separator: h = " • " } = e, { size: S = 76 } = e, { sealFontScale: T = 0.12 } = e;
  return i.$$set = (b) => {
    "badge" in b && t(0, u = b.badge), "variant" in b && t(1, d = b.variant), "ringText" in b && t(8, p = b.ringText), "repeat" in b && t(9, g = b.repeat), "separator" in b && t(10, h = b.separator), "size" in b && t(2, S = b.size), "sealFontScale" in b && t(11, T = b.sealFontScale);
  }, i.$$.update = () => {
    i.$$.dirty & /*badge*/
    1 && t(7, n = (u == null ? void 0 : u.icon) ?? null), i.$$.dirty & /*badge*/
    1 && t(6, l = String((u == null ? void 0 : u.color) ?? "").trim() || "rgb(17, 24, 39)"), i.$$.dirty & /*ringText, badge*/
    257 && t(12, r = (p ?? (u == null ? void 0 : u.label) ?? "").trim() || "—"), i.$$.dirty & /*repeat*/
    512 && t(13, s = Gn(Math.floor(g || 1), 1, 10)), i.$$.dirty & /*repeatSafe, displayText, separator*/
    13312 && t(5, a = [...Array(s)].map(() => [...r.toUpperCase()].concat([...h.toUpperCase()])).flat()), i.$$.dirty & /*size, sealFontScale*/
    2052 && t(4, f = Math.round(S * T)), i.$$.dirty & /*size*/
    4 && t(3, c = Math.round(S * 0.3));
  }, [
    u,
    d,
    S,
    c,
    f,
    a,
    l,
    n,
    p,
    g,
    h,
    T,
    r,
    s
  ];
}
class it extends U {
  constructor(e) {
    super(), q(
      this,
      e,
      Yn,
      Xn,
      H,
      {
        badge: 0,
        variant: 1,
        ringText: 8,
        repeat: 9,
        separator: 10,
        size: 2,
        sealFontScale: 11
      },
      Wn
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
W(it, { badge: {}, variant: {}, ringText: {}, repeat: {}, separator: {}, size: {}, sealFontScale: {} }, [], [], !0);
function Kn(i) {
  let e, t;
  return e = new it({
    props: {
      badge: (
        /*badge*/
        i[0]
      ),
      variant: (
        /*roundCircularTextVariant*/
        i[11]
      ),
      ringText: (
        /*ringText*/
        i[7]
      ),
      repeat: (
        /*repeat*/
        i[8]
      ),
      separator: (
        /*separator*/
        i[9]
      ),
      size: (
        /*size*/
        i[2] ?? 76
      ),
      sealFontScale: (
        /*sealFontScale*/
        i[10]
      )
    }
  }), {
    c() {
      O(e.$$.fragment);
    },
    m(n, l) {
      N(e, n, l), t = !0;
    },
    p(n, l) {
      const r = {};
      l & /*badge*/
      1 && (r.badge = /*badge*/
      n[0]), l & /*roundCircularTextVariant*/
      2048 && (r.variant = /*roundCircularTextVariant*/
      n[11]), l & /*ringText*/
      128 && (r.ringText = /*ringText*/
      n[7]), l & /*repeat*/
      256 && (r.repeat = /*repeat*/
      n[8]), l & /*separator*/
      512 && (r.separator = /*separator*/
      n[9]), l & /*size*/
      4 && (r.size = /*size*/
      n[2] ?? 76), l & /*sealFontScale*/
      1024 && (r.sealFontScale = /*sealFontScale*/
      n[10]), e.$set(r);
    },
    i(n) {
      t || ($(e.$$.fragment, n), t = !0);
    },
    o(n) {
      C(e.$$.fragment, n), t = !1;
    },
    d(n) {
      E(e, n);
    }
  };
}
function Qn(i) {
  let e, t;
  return e = new nt({
    props: {
      badge: (
        /*badge*/
        i[0]
      ),
      variant: (
        /*roundVariant*/
        i[12]
      ),
      size: (
        /*size*/
        i[2] ?? 44
      )
    }
  }), {
    c() {
      O(e.$$.fragment);
    },
    m(n, l) {
      N(e, n, l), t = !0;
    },
    p(n, l) {
      const r = {};
      l & /*badge*/
      1 && (r.badge = /*badge*/
      n[0]), l & /*roundVariant*/
      4096 && (r.variant = /*roundVariant*/
      n[12]), l & /*size*/
      4 && (r.size = /*size*/
      n[2] ?? 44), e.$set(r);
    },
    i(n) {
      t || ($(e.$$.fragment, n), t = !0);
    },
    o(n) {
      C(e.$$.fragment, n), t = !1;
    },
    d(n) {
      E(e, n);
    }
  };
}
function ei(i) {
  let e, t;
  return e = new tt({
    props: {
      badge: (
        /*badge*/
        i[0]
      ),
      variant: (
        /*miniVariant*/
        i[13]
      ),
      fixed: (
        /*fixed*/
        i[3]
      ),
      offsetPx: (
        /*offsetPx*/
        i[4]
      ),
      expandDirection: (
        /*expandDirection*/
        i[5]
      ),
      iconBgShape: (
        /*iconBgShape*/
        i[6] ?? "round"
      )
    }
  }), {
    c() {
      O(e.$$.fragment);
    },
    m(n, l) {
      N(e, n, l), t = !0;
    },
    p(n, l) {
      const r = {};
      l & /*badge*/
      1 && (r.badge = /*badge*/
      n[0]), l & /*miniVariant*/
      8192 && (r.variant = /*miniVariant*/
      n[13]), l & /*fixed*/
      8 && (r.fixed = /*fixed*/
      n[3]), l & /*offsetPx*/
      16 && (r.offsetPx = /*offsetPx*/
      n[4]), l & /*expandDirection*/
      32 && (r.expandDirection = /*expandDirection*/
      n[5]), l & /*iconBgShape*/
      64 && (r.iconBgShape = /*iconBgShape*/
      n[6] ?? "round"), e.$set(r);
    },
    i(n) {
      t || ($(e.$$.fragment, n), t = !0);
    },
    o(n) {
      C(e.$$.fragment, n), t = !1;
    },
    d(n) {
      E(e, n);
    }
  };
}
function ti(i) {
  let e, t;
  return e = new et({
    props: {
      badge: (
        /*badge*/
        i[0]
      ),
      variant: (
        /*monoVariant*/
        i[14]
      )
    }
  }), {
    c() {
      O(e.$$.fragment);
    },
    m(n, l) {
      N(e, n, l), t = !0;
    },
    p(n, l) {
      const r = {};
      l & /*badge*/
      1 && (r.badge = /*badge*/
      n[0]), l & /*monoVariant*/
      16384 && (r.variant = /*monoVariant*/
      n[14]), e.$set(r);
    },
    i(n) {
      t || ($(e.$$.fragment, n), t = !0);
    },
    o(n) {
      C(e.$$.fragment, n), t = !1;
    },
    d(n) {
      E(e, n);
    }
  };
}
function ni(i) {
  let e, t, n, l;
  const r = [ti, ei, Qn, Kn], s = [];
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
  return e = a(i), t = s[e] = r[e](i), {
    c() {
      t.c(), n = F();
    },
    m(f, c) {
      s[e].m(f, c), w(f, n, c), l = !0;
    },
    p(f, [c]) {
      let u = e;
      e = a(f), e === u ? s[e].p(f, c) : (L(), C(s[u], 1, 1, () => {
        s[u] = null;
      }), A(), t = s[e], t ? t.p(f, c) : (t = s[e] = r[e](f), t.c()), $(t, 1), t.m(n.parentNode, n));
    },
    i(f) {
      l || ($(t), l = !0);
    },
    o(f) {
      C(t), l = !1;
    },
    d(f) {
      f && v(n), s[e].d(f);
    }
  };
}
function ii(i, e, t) {
  let n, l, r, s, { badge: a } = e, { type: f = "mono" } = e, { variant: c = void 0 } = e, { size: u = void 0 } = e, { fixed: d = !1 } = e, { offsetPx: p = 16 } = e, { expandDirection: g = "right" } = e, { iconBgShape: h = void 0 } = e, { ringText: S = null } = e, { repeat: T = 2 } = e, { separator: b = " • " } = e, { sealFontScale: z = 0.12 } = e;
  return i.$$set = (M) => {
    "badge" in M && t(0, a = M.badge), "type" in M && t(1, f = M.type), "variant" in M && t(15, c = M.variant), "size" in M && t(2, u = M.size), "fixed" in M && t(3, d = M.fixed), "offsetPx" in M && t(4, p = M.offsetPx), "expandDirection" in M && t(5, g = M.expandDirection), "iconBgShape" in M && t(6, h = M.iconBgShape), "ringText" in M && t(7, S = M.ringText), "repeat" in M && t(8, T = M.repeat), "separator" in M && t(9, b = M.separator), "sealFontScale" in M && t(10, z = M.sealFontScale);
  }, i.$$.update = () => {
    i.$$.dirty & /*variant*/
    32768 && t(14, n = c ?? "filled"), i.$$.dirty & /*variant*/
    32768 && t(13, l = c ?? "outlined"), i.$$.dirty & /*variant*/
    32768 && t(12, r = c ?? "solid"), i.$$.dirty & /*variant*/
    32768 && t(11, s = c ?? "outlined");
  }, [
    a,
    f,
    u,
    d,
    p,
    g,
    h,
    S,
    T,
    b,
    z,
    s,
    r,
    l,
    n,
    c
  ];
}
class lt extends U {
  constructor(e) {
    super(), q(this, e, ii, ni, H, {
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
function li(i) {
  let e, t;
  return e = new lt({
    props: {
      badge: (
        /*computedBadge*/
        i[11]
      ),
      type: (
        /*type*/
        i[0]
      ),
      variant: (
        /*variant*/
        i[1]
      ),
      size: (
        /*size*/
        i[2]
      ),
      fixed: (
        /*fixed*/
        i[3]
      ),
      offsetPx: (
        /*offsetPx*/
        i[4]
      ),
      expandDirection: (
        /*expandDirection*/
        i[5]
      ),
      iconBgShape: (
        /*iconBgShape*/
        i[6] ?? void 0
      ),
      ringText: (
        /*ringText*/
        i[7]
      ),
      repeat: (
        /*repeat*/
        i[8]
      ),
      separator: (
        /*separator*/
        i[9]
      ),
      sealFontScale: (
        /*sealFontScale*/
        i[10]
      )
    }
  }), {
    c() {
      O(e.$$.fragment);
    },
    m(n, l) {
      N(e, n, l), t = !0;
    },
    p(n, [l]) {
      const r = {};
      l & /*computedBadge*/
      2048 && (r.badge = /*computedBadge*/
      n[11]), l & /*type*/
      1 && (r.type = /*type*/
      n[0]), l & /*variant*/
      2 && (r.variant = /*variant*/
      n[1]), l & /*size*/
      4 && (r.size = /*size*/
      n[2]), l & /*fixed*/
      8 && (r.fixed = /*fixed*/
      n[3]), l & /*offsetPx*/
      16 && (r.offsetPx = /*offsetPx*/
      n[4]), l & /*expandDirection*/
      32 && (r.expandDirection = /*expandDirection*/
      n[5]), l & /*iconBgShape*/
      64 && (r.iconBgShape = /*iconBgShape*/
      n[6] ?? void 0), l & /*ringText*/
      128 && (r.ringText = /*ringText*/
      n[7]), l & /*repeat*/
      256 && (r.repeat = /*repeat*/
      n[8]), l & /*separator*/
      512 && (r.separator = /*separator*/
      n[9]), l & /*sealFontScale*/
      1024 && (r.sealFontScale = /*sealFontScale*/
      n[10]), e.$set(r);
    },
    i(n) {
      t || ($(e.$$.fragment, n), t = !0);
    },
    o(n) {
      C(e.$$.fragment, n), t = !1;
    },
    d(n) {
      E(e, n);
    }
  };
}
const ri = "rgb(17, 24, 39)";
function We(i) {
  return /\bdownload\b/i.test(i) || /\bopen[-\s]*data\b/i.test(i);
}
function oi(i, e, t) {
  let n, { badge: l = null } = e, { label: r = null } = e, { color: s = null } = e, { icon: a = null } = e, { description: f = null } = e, { actionText: c = null } = e, { actionIcon: u = null } = e, { interactive: d = !1 } = e, { type: p = "mono" } = e, { variant: g = void 0 } = e, { size: h = void 0 } = e, { fixed: S = !1 } = e, { offsetPx: T = 16 } = e, { expandDirection: b = "right" } = e, { iconBgShape: z = null } = e, { ringText: M = null } = e, { repeat: B = 2 } = e, { separator: P = " • " } = e, { sealFontScale: X = 0.12 } = e;
  return i.$$set = (y) => {
    "badge" in y && t(12, l = y.badge), "label" in y && t(13, r = y.label), "color" in y && t(14, s = y.color), "icon" in y && t(15, a = y.icon), "description" in y && t(16, f = y.description), "actionText" in y && t(17, c = y.actionText), "actionIcon" in y && t(18, u = y.actionIcon), "interactive" in y && t(19, d = y.interactive), "type" in y && t(0, p = y.type), "variant" in y && t(1, g = y.variant), "size" in y && t(2, h = y.size), "fixed" in y && t(3, S = y.fixed), "offsetPx" in y && t(4, T = y.offsetPx), "expandDirection" in y && t(5, b = y.expandDirection), "iconBgShape" in y && t(6, z = y.iconBgShape), "ringText" in y && t(7, M = y.ringText), "repeat" in y && t(8, B = y.repeat), "separator" in y && t(9, P = y.separator), "sealFontScale" in y && t(10, X = y.sealFontScale);
  }, i.$$.update = () => {
    i.$$.dirty & /*badge, label, color, icon, description, actionText, interactive, actionIcon*/
    1044480 && t(11, n = l ?? {
      label: (r ?? "").trim() || "—",
      color: (s ?? "").trim() || ri,
      icon: a ?? void 0,
      description: (f ?? "").trim() || void 0,
      actionText: (c ?? "").trim() || (d ? We((r ?? "").trim()) ? "Click to download" : "Click to interact" : void 0),
      actionIcon: u ?? (d ? We((r ?? "").trim()) ? "Download" : "Interactive" : void 0)
    });
  }, [
    p,
    g,
    h,
    S,
    T,
    b,
    z,
    M,
    B,
    P,
    X,
    n,
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
    super(), q(this, e, oi, li, H, {
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
customElements.define("vis-badge", W(rt, { badge: { type: "Object" }, label: {}, color: {}, icon: {}, description: {}, actionText: {}, actionIcon: {}, interactive: { type: "Boolean" }, type: {}, variant: {}, size: { type: "Number" }, fixed: { type: "Boolean" }, offsetPx: { type: "Number" }, expandDirection: {}, iconBgShape: { type: "String", attribute: "icon-bg-shape" }, ringText: {}, repeat: { type: "Number" }, separator: {}, sealFontScale: { type: "Number" } }, [], [], !0, (i) => class extends i {
  addEventListener(e, t, n) {
    return e === "click" && (this.interactive = !0), super.addEventListener(e, t, n);
  }
}));
if (!customElements.get("vis-badge")) {
  const i = rt.element;
  customElements.define("vis-badge", i);
}
