var qe = Object.defineProperty;
var We = (n, e, t) => e in n ? qe(n, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : n[e] = t;
var O = (n, e, t) => We(n, typeof e != "symbol" ? e + "" : e, t);
function ne() {
}
function Je(n, e) {
  for (const t in e) n[t] = e[t];
  return (
    /** @type {T & S} */
    n
  );
}
function Be(n) {
  return n();
}
function _e() {
  return /* @__PURE__ */ Object.create(null);
}
function U(n) {
  n.forEach(Be);
}
function Ae(n) {
  return typeof n == "function";
}
function L(n, e) {
  return n != n ? e == e : n !== e || n && typeof n == "object" || typeof n == "function";
}
function Ge(n) {
  return Object.keys(n).length === 0;
}
function oe(n, e, t, i) {
  if (n) {
    const r = Le(n, e, t, i);
    return n[0](r);
  }
}
function Le(n, e, t, i) {
  return n[1] && i ? Je(t.ctx.slice(), n[1](i(e))) : t.ctx;
}
function fe(n, e, t, i) {
  if (n[2] && i) {
    const r = n[2](i(t));
    if (e.dirty === void 0)
      return r;
    if (typeof r == "object") {
      const l = [], s = Math.max(e.dirty.length, r.length);
      for (let o = 0; o < s; o += 1)
        l[o] = e.dirty[o] | r[o];
      return l;
    }
    return e.dirty | r;
  }
  return e.dirty;
}
function ce(n, e, t, i, r, l) {
  if (r) {
    const s = Le(e, t, i, l);
    n.p(s, r);
  }
}
function ue(n) {
  if (n.ctx.length > 32) {
    const e = [], t = n.ctx.length / 32;
    for (let i = 0; i < t; i++)
      e[i] = -1;
    return e;
  }
  return -1;
}
function w(n, e) {
  n.appendChild(e);
}
function G(n, e, t) {
  const i = Ke(n);
  if (!i.getElementById(e)) {
    const r = y("style");
    r.id = e, r.textContent = t, Qe(i, r);
  }
}
function Ke(n) {
  if (!n) return document;
  const e = n.getRootNode ? n.getRootNode() : n.ownerDocument;
  return e && /** @type {ShadowRoot} */
  e.host ? (
    /** @type {ShadowRoot} */
    e
  ) : n.ownerDocument;
}
function Qe(n, e) {
  return w(
    /** @type {Document} */
    n.head || n,
    e
  ), e.sheet;
}
function M(n, e, t) {
  n.insertBefore(e, t || null);
}
function j(n) {
  n.parentNode && n.parentNode.removeChild(n);
}
function y(n) {
  return document.createElement(n);
}
function D(n) {
  return document.createElementNS("http://www.w3.org/2000/svg", n);
}
function I(n) {
  return document.createTextNode(n);
}
function H() {
  return I(" ");
}
function K() {
  return I("");
}
function X(n, e, t, i) {
  return n.addEventListener(e, t, i), () => n.removeEventListener(e, t, i);
}
function a(n, e, t) {
  t == null ? n.removeAttribute(e) : n.getAttribute(e) !== t && n.setAttribute(e, t);
}
function et(n) {
  return Array.from(n.childNodes);
}
function Q(n, e) {
  e = "" + e, n.data !== e && (n.data = /** @type {string} */
  e);
}
function ee(n, e, t, i) {
  t == null ? n.style.removeProperty(e) : n.style.setProperty(e, t, "");
}
function tt(n) {
  const e = {};
  return n.childNodes.forEach(
    /** @param {Element} node */
    (t) => {
      e[t.slot || "default"] = !0;
    }
  ), e;
}
let be;
function te(n) {
  be = n;
}
const W = [], ve = [];
let J = [];
const $e = [], nt = /* @__PURE__ */ Promise.resolve();
let he = !1;
function it() {
  he || (he = !0, nt.then(m));
}
function pe(n) {
  J.push(n);
}
const ge = /* @__PURE__ */ new Set();
let q = 0;
function m() {
  if (q !== 0)
    return;
  const n = be;
  do {
    try {
      for (; q < W.length; ) {
        const e = W[q];
        q++, te(e), rt(e.$$);
      }
    } catch (e) {
      throw W.length = 0, q = 0, e;
    }
    for (te(null), W.length = 0, q = 0; ve.length; ) ve.pop()();
    for (let e = 0; e < J.length; e += 1) {
      const t = J[e];
      ge.has(t) || (ge.add(t), t());
    }
    J.length = 0;
  } while (W.length);
  for (; $e.length; )
    $e.pop()();
  he = !1, ge.clear(), te(n);
}
function rt(n) {
  if (n.fragment !== null) {
    n.update(), U(n.before_update);
    const e = n.dirty;
    n.dirty = [-1], n.fragment && n.fragment.p(n.ctx, e), n.after_update.forEach(pe);
  }
}
function lt(n) {
  const e = [], t = [];
  J.forEach((i) => n.indexOf(i) === -1 ? e.push(i) : t.push(i)), t.forEach((i) => i()), J = e;
}
const se = /* @__PURE__ */ new Set();
let R;
function B() {
  R = {
    r: 0,
    c: [],
    p: R
    // parent group
  };
}
function A() {
  R.r || U(R.c), R = R.p;
}
function x(n, e) {
  n && n.i && (se.delete(n), n.i(e));
}
function k(n, e, t, i) {
  if (n && n.o) {
    if (se.has(n)) return;
    se.add(n), R.c.push(() => {
      se.delete(n), i && (t && n.d(1), i());
    }), n.o(e);
  } else i && i();
}
function we(n) {
  return (n == null ? void 0 : n.length) !== void 0 ? n : Array.from(n);
}
function st(n, e) {
  n.d(1), e.delete(n.key);
}
function at(n, e, t, i, r, l, s, o, f, u, c, b) {
  let _ = n.length, d = l.length, g = _;
  const v = {};
  for (; g--; ) v[n[g].key] = g;
  const z = [], h = /* @__PURE__ */ new Map(), p = /* @__PURE__ */ new Map(), $ = [];
  for (g = d; g--; ) {
    const S = b(r, l, g), F = t(S);
    let N = s.get(F);
    N ? $.push(() => N.p(S, e)) : (N = u(F, S), N.c()), h.set(F, z[g] = N), F in v && p.set(F, Math.abs(g - v[F]));
  }
  const E = /* @__PURE__ */ new Set(), me = /* @__PURE__ */ new Set();
  function de(S) {
    x(S, 1), S.m(o, c), s.set(S.key, S), c = S.first, d--;
  }
  for (; _ && d; ) {
    const S = z[d - 1], F = n[_ - 1], N = S.key, le = F.key;
    S === F ? (c = S.first, _--, d--) : h.has(le) ? !s.has(N) || E.has(N) ? de(S) : me.has(le) ? _-- : p.get(N) > p.get(le) ? (me.add(N), de(S)) : (E.add(le), _--) : (f(F, s), _--);
  }
  for (; _--; ) {
    const S = n[_];
    h.has(S.key) || f(S, s);
  }
  for (; d; ) de(z[d - 1]);
  return U($), z;
}
function P(n) {
  n && n.c();
}
function C(n, e, t) {
  const { fragment: i, after_update: r } = n.$$;
  i && i.m(e, t), pe(() => {
    const l = n.$$.on_mount.map(Be).filter(Ae);
    n.$$.on_destroy ? n.$$.on_destroy.push(...l) : U(l), n.$$.on_mount = [];
  }), r.forEach(pe);
}
function T(n, e) {
  const t = n.$$;
  t.fragment !== null && (lt(t.after_update), U(t.on_destroy), t.fragment && t.fragment.d(e), t.on_destroy = t.fragment = null, t.ctx = []);
}
function ot(n, e) {
  n.$$.dirty[0] === -1 && (W.push(n), it(), n.$$.dirty.fill(0)), n.$$.dirty[e / 31 | 0] |= 1 << e % 31;
}
function Y(n, e, t, i, r, l, s = null, o = [-1]) {
  const f = be;
  te(n);
  const u = n.$$ = {
    fragment: null,
    ctx: [],
    // state
    props: l,
    update: ne,
    not_equal: r,
    bound: _e(),
    // lifecycle
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(e.context || (f ? f.$$.context : [])),
    // everything else
    callbacks: _e(),
    dirty: o,
    skip_bound: !1,
    root: e.target || f.$$.root
  };
  s && s(u.root);
  let c = !1;
  if (u.ctx = t ? t(n, e.props || {}, (b, _, ...d) => {
    const g = d.length ? d[0] : _;
    return u.ctx && r(u.ctx[b], u.ctx[b] = g) && (!u.skip_bound && u.bound[b] && u.bound[b](g), c && ot(n, b)), _;
  }) : [], u.update(), c = !0, U(u.before_update), u.fragment = i ? i(u.ctx) : !1, e.target) {
    if (e.hydrate) {
      const b = et(e.target);
      u.fragment && u.fragment.l(b), b.forEach(j);
    } else
      u.fragment && u.fragment.c();
    e.intro && x(n.$$.fragment), C(n, e.target, e.anchor), m();
  }
  te(f);
}
let Ye;
typeof HTMLElement == "function" && (Ye = class extends HTMLElement {
  constructor(e, t, i) {
    super();
    /** The Svelte component constructor */
    O(this, "$$ctor");
    /** Slots */
    O(this, "$$s");
    /** The Svelte component instance */
    O(this, "$$c");
    /** Whether or not the custom element is connected */
    O(this, "$$cn", !1);
    /** Component props data */
    O(this, "$$d", {});
    /** `true` if currently in the process of reflecting component props back to attributes */
    O(this, "$$r", !1);
    /** @type {Record<string, CustomElementPropDefinition>} Props definition (name, reflected, type etc) */
    O(this, "$$p_d", {});
    /** @type {Record<string, Function[]>} Event listeners */
    O(this, "$$l", {});
    /** @type {Map<Function, Function>} Event listener unsubscribe functions */
    O(this, "$$l_u", /* @__PURE__ */ new Map());
    this.$$ctor = e, this.$$s = t, i && this.attachShadow({ mode: "open" });
  }
  addEventListener(e, t, i) {
    if (this.$$l[e] = this.$$l[e] || [], this.$$l[e].push(t), this.$$c) {
      const r = this.$$c.$on(e, t);
      this.$$l_u.set(t, r);
    }
    super.addEventListener(e, t, i);
  }
  removeEventListener(e, t, i) {
    if (super.removeEventListener(e, t, i), this.$$c) {
      const r = this.$$l_u.get(t);
      r && (r(), this.$$l_u.delete(t));
    }
    if (this.$$l[e]) {
      const r = this.$$l[e].indexOf(t);
      r >= 0 && this.$$l[e].splice(r, 1);
    }
  }
  async connectedCallback() {
    if (this.$$cn = !0, !this.$$c) {
      let t = function(s) {
        return () => {
          let o;
          return {
            c: function() {
              o = y("slot"), s !== "default" && a(o, "name", s);
            },
            /**
             * @param {HTMLElement} target
             * @param {HTMLElement} [anchor]
             */
            m: function(c, b) {
              M(c, o, b);
            },
            d: function(c) {
              c && j(o);
            }
          };
        };
      };
      var e = t;
      if (await Promise.resolve(), !this.$$cn || this.$$c)
        return;
      const i = {}, r = tt(this);
      for (const s of this.$$s)
        s in r && (i[s] = [t(s)]);
      for (const s of this.attributes) {
        const o = this.$$g_p(s.name);
        o in this.$$d || (this.$$d[o] = ae(o, s.value, this.$$p_d, "toProp"));
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
      const l = () => {
        this.$$r = !0;
        for (const s in this.$$p_d)
          if (this.$$d[s] = this.$$c.$$.ctx[this.$$c.$$.props[s]], this.$$p_d[s].reflect) {
            const o = ae(
              s,
              this.$$d[s],
              this.$$p_d,
              "toAttribute"
            );
            o == null ? this.removeAttribute(this.$$p_d[s].attribute || s) : this.setAttribute(this.$$p_d[s].attribute || s, o);
          }
        this.$$r = !1;
      };
      this.$$c.$$.after_update.push(l), l();
      for (const s in this.$$l)
        for (const o of this.$$l[s]) {
          const f = this.$$c.$on(s, o);
          this.$$l_u.set(o, f);
        }
      this.$$l = {};
    }
  }
  // We don't need this when working within Svelte code, but for compatibility of people using this outside of Svelte
  // and setting attributes through setAttribute etc, this is helpful
  attributeChangedCallback(e, t, i) {
    var r;
    this.$$r || (e = this.$$g_p(e), this.$$d[e] = ae(e, i, this.$$p_d, "toProp"), (r = this.$$c) == null || r.$set({ [e]: this.$$d[e] }));
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
function ae(n, e, t, i) {
  var l;
  const r = (l = t[n]) == null ? void 0 : l.type;
  if (e = r === "Boolean" && typeof e != "boolean" ? e != null : e, !i || !t[n])
    return e;
  if (i === "toAttribute")
    switch (r) {
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
    switch (r) {
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
function Z(n, e, t, i, r, l) {
  let s = class extends Ye {
    constructor() {
      super(n, t, r), this.$$p_d = e;
    }
    static get observedAttributes() {
      return Object.keys(e).map(
        (o) => (e[o].attribute || o).toLowerCase()
      );
    }
  };
  return Object.keys(e).forEach((o) => {
    Object.defineProperty(s.prototype, o, {
      get() {
        return this.$$c && o in this.$$c ? this.$$c[o] : this.$$d[o];
      },
      set(f) {
        var u;
        f = ae(o, f, e), this.$$d[o] = f, (u = this.$$c) == null || u.$set({ [o]: f });
      }
    });
  }), i.forEach((o) => {
    Object.defineProperty(s.prototype, o, {
      get() {
        var f;
        return (f = this.$$c) == null ? void 0 : f[o];
      }
    });
  }), n.element = /** @type {any} */
  s, s;
}
class V {
  constructor() {
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    O(this, "$$");
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    O(this, "$$set");
  }
  /** @returns {void} */
  $destroy() {
    T(this, 1), this.$destroy = ne;
  }
  /**
   * @template {Extract<keyof Events, string>} K
   * @param {K} type
   * @param {((e: Events[K]) => void) | null | undefined} callback
   * @returns {() => void}
   */
  $on(e, t) {
    if (!Ae(t))
      return ne;
    const i = this.$$.callbacks[e] || (this.$$.callbacks[e] = []);
    return i.push(t), () => {
      const r = i.indexOf(t);
      r !== -1 && i.splice(r, 1);
    };
  }
  /**
   * @param {Partial<Props>} props
   * @returns {void}
   */
  $set(e) {
    this.$$set && !Ge(e) && (this.$$.skip_bound = !0, this.$$set(e), this.$$.skip_bound = !1);
  }
}
const ft = "4";
typeof window < "u" && (window.__svelte || (window.__svelte = { v: /* @__PURE__ */ new Set() })).v.add(ft);
function ct(n) {
  G(n, "svelte-13ccxme", ".tooltipWrap.svelte-13ccxme.svelte-13ccxme{position:relative;display:inline-flex;align-items:center}.trigger.svelte-13ccxme.svelte-13ccxme{display:inline-flex;align-items:center}.tooltip.svelte-13ccxme.svelte-13ccxme{display:none;position:absolute;z-index:2000;width:max-content;max-width:min(280px, 64vw);padding:7px 9px;border-radius:9px;border:1px solid rgba(17, 24, 39, 0.14);background:rgba(17, 24, 39, 0.96);color:#ffffff;box-shadow:0 10px 24px rgba(17, 24, 39, 0.2);font-size:12px;line-height:1.3;opacity:0;transform:translateY(-6px);pointer-events:none;transition:opacity 130ms ease, transform 130ms ease}.tooltip.open.svelte-13ccxme.svelte-13ccxme{display:block;opacity:1;transform:translateY(0);pointer-events:auto}.tooltip.top.svelte-13ccxme.svelte-13ccxme{left:50%;bottom:calc(100% + 10px);transform:translateX(-50%) translateY(-6px)}.tooltip.top.open.svelte-13ccxme.svelte-13ccxme{transform:translateX(-50%) translateY(0)}.tooltip.bottom.svelte-13ccxme.svelte-13ccxme{left:50%;top:calc(100% + 10px);transform:translateX(-50%) translateY(6px)}.tooltip.bottom.open.svelte-13ccxme.svelte-13ccxme{transform:translateX(-50%) translateY(0)}.tooltip.left.svelte-13ccxme.svelte-13ccxme{right:calc(100% + 10px);top:50%;transform:translateY(-50%) translateX(-6px)}.tooltip.left.open.svelte-13ccxme.svelte-13ccxme{transform:translateY(-50%) translateX(0)}.tooltip.right.svelte-13ccxme.svelte-13ccxme{left:calc(100% + 10px);top:50%;transform:translateY(-50%) translateX(6px)}.tooltip.right.open.svelte-13ccxme.svelte-13ccxme{transform:translateY(-50%) translateX(0)}.arrow.svelte-13ccxme.svelte-13ccxme{position:absolute;width:8px;height:8px;background:rgba(17, 24, 39, 0.96);border-left:1px solid rgba(17, 24, 39, 0.14);border-top:1px solid rgba(17, 24, 39, 0.14);transform:rotate(45deg)}.tooltip.top.svelte-13ccxme .arrow.svelte-13ccxme{left:50%;bottom:-4px;margin-left:-4px}.tooltip.bottom.svelte-13ccxme .arrow.svelte-13ccxme{left:50%;top:-4px;margin-left:-4px;transform:rotate(225deg)}.tooltip.left.svelte-13ccxme .arrow.svelte-13ccxme{top:50%;right:-4px;margin-top:-4px;transform:rotate(135deg)}.tooltip.right.svelte-13ccxme .arrow.svelte-13ccxme{top:50%;left:-4px;margin-top:-4px;transform:rotate(-45deg)}");
}
const ut = (n) => ({}), xe = (n) => ({}), dt = (n) => ({}), ke = (n) => ({});
function gt(n) {
  let e, t, i, r, l, s, o, f, u, c, b, _;
  const d = (
    /*#slots*/
    n[6].trigger
  ), g = oe(
    d,
    n,
    /*$$scope*/
    n[5],
    ke
  ), v = (
    /*#slots*/
    n[6].content
  ), z = oe(
    v,
    n,
    /*$$scope*/
    n[5],
    xe
  );
  return {
    c() {
      e = y("span"), t = y("span"), g && g.c(), i = H(), r = y("span"), l = y("span"), z && z.c(), s = H(), o = y("span"), a(t, "class", "trigger svelte-13ccxme"), a(l, "class", "content"), a(o, "class", "arrow svelte-13ccxme"), a(o, "aria-hidden", "true"), a(r, "class", f = "tooltip " + /*open*/
      (n[1] ? "open" : "") + " " + /*placement*/
      n[0] + " svelte-13ccxme"), a(r, "role", "tooltip"), a(r, "aria-hidden", u = !/*open*/
      n[1]), a(e, "class", "tooltipWrap svelte-13ccxme"), a(e, "role", "group");
    },
    m(h, p) {
      M(h, e, p), w(e, t), g && g.m(t, null), w(e, i), w(e, r), w(r, l), z && z.m(l, null), w(r, s), w(r, o), c = !0, b || (_ = [
        X(
          e,
          "mouseenter",
          /*onEnter*/
          n[2]
        ),
        X(
          e,
          "mouseleave",
          /*onLeave*/
          n[3]
        ),
        X(
          e,
          "focusin",
          /*onEnter*/
          n[2]
        ),
        X(
          e,
          "focusout",
          /*onLeave*/
          n[3]
        )
      ], b = !0);
    },
    p(h, [p]) {
      g && g.p && (!c || p & /*$$scope*/
      32) && ce(
        g,
        d,
        h,
        /*$$scope*/
        h[5],
        c ? fe(
          d,
          /*$$scope*/
          h[5],
          p,
          dt
        ) : ue(
          /*$$scope*/
          h[5]
        ),
        ke
      ), z && z.p && (!c || p & /*$$scope*/
      32) && ce(
        z,
        v,
        h,
        /*$$scope*/
        h[5],
        c ? fe(
          v,
          /*$$scope*/
          h[5],
          p,
          ut
        ) : ue(
          /*$$scope*/
          h[5]
        ),
        xe
      ), (!c || p & /*open, placement*/
      3 && f !== (f = "tooltip " + /*open*/
      (h[1] ? "open" : "") + " " + /*placement*/
      h[0] + " svelte-13ccxme")) && a(r, "class", f), (!c || p & /*open*/
      2 && u !== (u = !/*open*/
      h[1])) && a(r, "aria-hidden", u);
    },
    i(h) {
      c || (x(g, h), x(z, h), c = !0);
    },
    o(h) {
      k(g, h), k(z, h), c = !1;
    },
    d(h) {
      h && j(e), g && g.d(h), z && z.d(h), b = !1, U(_);
    }
  };
}
function ht(n, e, t) {
  let { $$slots: i = {}, $$scope: r } = e, { placement: l = "top" } = e, { openDelayMs: s = 80 } = e, o = !1, f = null;
  function u() {
    f && clearTimeout(f), f = setTimeout(() => t(1, o = !0), s);
  }
  function c() {
    f && clearTimeout(f), f = null, t(1, o = !1);
  }
  return n.$$set = (b) => {
    "placement" in b && t(0, l = b.placement), "openDelayMs" in b && t(4, s = b.openDelayMs), "$$scope" in b && t(5, r = b.$$scope);
  }, [l, o, u, c, s, r, i];
}
class Ze extends V {
  constructor(e) {
    super(), Y(this, e, ht, gt, L, { placement: 0, openDelayMs: 4 }, ct);
  }
  get placement() {
    return this.$$.ctx[0];
  }
  set placement(e) {
    this.$$set({ placement: e }), m();
  }
  get openDelayMs() {
    return this.$$.ctx[4];
  }
  set openDelayMs(e) {
    this.$$set({ openDelayMs: e }), m();
  }
}
Z(Ze, { placement: {}, openDelayMs: {} }, ["trigger", "content"], [], !0);
function pt(n) {
  G(n, "svelte-17e38qg", ".desc.svelte-17e38qg{display:block}");
}
const bt = (n) => ({}), ye = (n) => ({}), mt = (n) => ({}), ze = (n) => ({});
function _t(n) {
  let e;
  const t = (
    /*#slots*/
    n[5].trigger
  ), i = oe(
    t,
    n,
    /*$$scope*/
    n[6],
    ye
  );
  return {
    c() {
      i && i.c();
    },
    m(r, l) {
      i && i.m(r, l), e = !0;
    },
    p(r, l) {
      i && i.p && (!e || l & /*$$scope*/
      64) && ce(
        i,
        t,
        r,
        /*$$scope*/
        r[6],
        e ? fe(
          t,
          /*$$scope*/
          r[6],
          l,
          bt
        ) : ue(
          /*$$scope*/
          r[6]
        ),
        ye
      );
    },
    i(r) {
      e || (x(i, r), e = !0);
    },
    o(r) {
      k(i, r), e = !1;
    },
    d(r) {
      i && i.d(r);
    }
  };
}
function vt(n) {
  let e, t;
  return e = new Ze({
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
        content: [wt],
        trigger: [$t]
      },
      $$scope: { ctx: n }
    }
  }), {
    c() {
      P(e.$$.fragment);
    },
    m(i, r) {
      C(e, i, r), t = !0;
    },
    p(i, r) {
      const l = {};
      r & /*placement*/
      2 && (l.placement = /*placement*/
      i[1]), r & /*openDelayMs*/
      4 && (l.openDelayMs = /*openDelayMs*/
      i[2]), r & /*$$scope, badge, contentMode*/
      73 && (l.$$scope = { dirty: r, ctx: i }), e.$set(l);
    },
    i(i) {
      t || (x(e.$$.fragment, i), t = !0);
    },
    o(i) {
      k(e.$$.fragment, i), t = !1;
    },
    d(i) {
      T(e, i);
    }
  };
}
function $t(n) {
  let e, t;
  const i = (
    /*#slots*/
    n[5].trigger
  ), r = oe(
    i,
    n,
    /*$$scope*/
    n[6],
    ze
  );
  return {
    c() {
      e = y("span"), r && r.c(), a(e, "slot", "trigger");
    },
    m(l, s) {
      M(l, e, s), r && r.m(e, null), t = !0;
    },
    p(l, s) {
      r && r.p && (!t || s & /*$$scope*/
      64) && ce(
        r,
        i,
        l,
        /*$$scope*/
        l[6],
        t ? fe(
          i,
          /*$$scope*/
          l[6],
          s,
          mt
        ) : ue(
          /*$$scope*/
          l[6]
        ),
        ze
      );
    },
    i(l) {
      t || (x(r, l), t = !0);
    },
    o(l) {
      k(r, l), t = !1;
    },
    d(l) {
      l && j(e), r && r.d(l);
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
      e = y("strong"), i = I(t);
    },
    m(r, l) {
      M(r, e, l), w(e, i);
    },
    p(r, l) {
      l & /*badge*/
      1 && t !== (t = /*badge*/
      r[0].label + "") && Q(i, t);
    },
    d(r) {
      r && j(e);
    }
  };
}
function wt(n) {
  let e, t, i, r = (
    /*badge*/
    n[0].description + ""
  ), l, s = (
    /*contentMode*/
    n[3] === "labelAndDescription" && je(n)
  );
  return {
    c() {
      e = y("span"), s && s.c(), t = H(), i = y("span"), l = I(r), a(i, "class", "desc svelte-17e38qg"), a(e, "slot", "content");
    },
    m(o, f) {
      M(o, e, f), s && s.m(e, null), w(e, t), w(e, i), w(i, l);
    },
    p(o, f) {
      /*contentMode*/
      o[3] === "labelAndDescription" ? s ? s.p(o, f) : (s = je(o), s.c(), s.m(e, t)) : s && (s.d(1), s = null), f & /*badge*/
      1 && r !== (r = /*badge*/
      o[0].description + "") && Q(l, r);
    },
    d(o) {
      o && j(e), s && s.d();
    }
  };
}
function xt(n) {
  let e, t, i, r;
  const l = [vt, _t], s = [];
  function o(f, u) {
    return (
      /*showTooltip*/
      f[4] ? 0 : 1
    );
  }
  return e = o(n), t = s[e] = l[e](n), {
    c() {
      t.c(), i = K();
    },
    m(f, u) {
      s[e].m(f, u), M(f, i, u), r = !0;
    },
    p(f, [u]) {
      let c = e;
      e = o(f), e === c ? s[e].p(f, u) : (B(), k(s[c], 1, 1, () => {
        s[c] = null;
      }), A(), t = s[e], t ? t.p(f, u) : (t = s[e] = l[e](f), t.c()), x(t, 1), t.m(i.parentNode, i));
    },
    i(f) {
      r || (x(t), r = !0);
    },
    o(f) {
      k(t), r = !1;
    },
    d(f) {
      f && j(i), s[e].d(f);
    }
  };
}
function kt(n, e, t) {
  let i, { $$slots: r = {}, $$scope: l } = e, { badge: s } = e, { placement: o = "top" } = e, { openDelayMs: f = 80 } = e, { contentMode: u = "description" } = e;
  return n.$$set = (c) => {
    "badge" in c && t(0, s = c.badge), "placement" in c && t(1, o = c.placement), "openDelayMs" in c && t(2, f = c.openDelayMs), "contentMode" in c && t(3, u = c.contentMode), "$$scope" in c && t(6, l = c.$$scope);
  }, n.$$.update = () => {
    n.$$.dirty & /*badge*/
    1 && t(4, i = !!(s != null && s.description));
  }, [s, o, f, u, i, r, l];
}
class ie extends V {
  constructor(e) {
    super(), Y(
      this,
      e,
      kt,
      xt,
      L,
      {
        badge: 0,
        placement: 1,
        openDelayMs: 2,
        contentMode: 3
      },
      pt
    );
  }
  get badge() {
    return this.$$.ctx[0];
  }
  set badge(e) {
    this.$$set({ badge: e }), m();
  }
  get placement() {
    return this.$$.ctx[1];
  }
  set placement(e) {
    this.$$set({ placement: e }), m();
  }
  get openDelayMs() {
    return this.$$.ctx[2];
  }
  set openDelayMs(e) {
    this.$$set({ openDelayMs: e }), m();
  }
  get contentMode() {
    return this.$$.ctx[3];
  }
  set contentMode(e) {
    this.$$set({ contentMode: e }), m();
  }
}
Z(ie, { badge: {}, placement: {}, openDelayMs: {}, contentMode: {} }, ["trigger"], [], !0);
function yt(n) {
  let e;
  return {
    c() {
      e = y("span"), ee(e, "display", "inline-block"), ee(
        e,
        "width",
        /*size*/
        n[1] + "px"
      ), ee(
        e,
        "height",
        /*size*/
        n[1] + "px"
      ), a(e, "aria-hidden", "true");
    },
    m(t, i) {
      M(t, e, i);
    },
    p(t, i) {
      i & /*size*/
      2 && ee(
        e,
        "width",
        /*size*/
        t[1] + "px"
      ), i & /*size*/
      2 && ee(
        e,
        "height",
        /*size*/
        t[1] + "px"
      );
    },
    d(t) {
      t && j(e);
    }
  };
}
function zt(n) {
  let e, t, i, r, l, s;
  return {
    c() {
      e = D("svg"), t = D("g"), i = D("path"), l = D("path"), a(i, "d", "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"), a(i, "fill", r = /*bg*/
      n[2] ?? "none"), a(
        i,
        "opacity",
        /*bgOpacity*/
        n[4]
      ), a(l, "d", "m9 12 2 2 4-4"), a(t, "transform", "translate(12 12) scale(0.86) translate(-12 -12)"), a(
        e,
        "width",
        /*size*/
        n[1]
      ), a(
        e,
        "height",
        /*size*/
        n[1]
      ), a(e, "viewBox", "0 0 24 24"), a(e, "fill", "none"), a(e, "aria-hidden", "true"), a(e, "stroke", s = /*fg*/
      n[3] ?? "currentColor"), a(e, "stroke-width", "2"), a(e, "stroke-linecap", "round"), a(e, "stroke-linejoin", "round");
    },
    m(o, f) {
      M(o, e, f), w(e, t), w(t, i), w(t, l);
    },
    p(o, f) {
      f & /*bg*/
      4 && r !== (r = /*bg*/
      o[2] ?? "none") && a(i, "fill", r), f & /*bgOpacity*/
      16 && a(
        i,
        "opacity",
        /*bgOpacity*/
        o[4]
      ), f & /*size*/
      2 && a(
        e,
        "width",
        /*size*/
        o[1]
      ), f & /*size*/
      2 && a(
        e,
        "height",
        /*size*/
        o[1]
      ), f & /*fg*/
      8 && s !== (s = /*fg*/
      o[3] ?? "currentColor") && a(e, "stroke", s);
    },
    d(o) {
      o && j(e);
    }
  };
}
function jt(n) {
  let e, t, i, r, l, s, o, f, u, c;
  return {
    c() {
      e = D("svg"), t = D("path"), r = D("g"), l = D("path"), s = D("path"), o = D("path"), f = D("path"), u = D("path"), a(t, "d", "M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20Z"), a(t, "fill", i = /*bg*/
      n[2] ?? "currentColor"), a(
        t,
        "opacity",
        /*bgOpacity*/
        n[4]
      ), a(t, "stroke", "none"), a(l, "d", "M14 4.1 12 6"), a(s, "d", "m5.1 8-2.9-.8"), a(o, "d", "m6 12-1.9 2"), a(f, "d", "M7.2 2.2 8 5.1"), a(u, "d", "M9.037 9.69a.498.498 0 0 1 .653-.653l11 4.5a.5.5 0 0 1-.074.949l-4.349 1.041a1 1 0 0 0-.74.739l-1.04 4.35a.5.5 0 0 1-.95.074z"), a(r, "transform", "translate(12 12) scale(0.86) translate(-12 -12)"), a(
        e,
        "width",
        /*size*/
        n[1]
      ), a(
        e,
        "height",
        /*size*/
        n[1]
      ), a(e, "viewBox", "0 0 24 24"), a(e, "fill", "none"), a(e, "aria-hidden", "true"), a(e, "stroke", c = /*fg*/
      n[3] ?? "currentColor"), a(e, "stroke-width", "2"), a(e, "stroke-linecap", "round"), a(e, "stroke-linejoin", "round");
    },
    m(b, _) {
      M(b, e, _), w(e, t), w(e, r), w(r, l), w(r, s), w(r, o), w(r, f), w(r, u);
    },
    p(b, _) {
      _ & /*bg*/
      4 && i !== (i = /*bg*/
      b[2] ?? "currentColor") && a(t, "fill", i), _ & /*bgOpacity*/
      16 && a(
        t,
        "opacity",
        /*bgOpacity*/
        b[4]
      ), _ & /*size*/
      2 && a(
        e,
        "width",
        /*size*/
        b[1]
      ), _ & /*size*/
      2 && a(
        e,
        "height",
        /*size*/
        b[1]
      ), _ & /*fg*/
      8 && c !== (c = /*fg*/
      b[3] ?? "currentColor") && a(e, "stroke", c);
    },
    d(b) {
      b && j(e);
    }
  };
}
function Mt(n) {
  let e, t, i, r, l, s, o;
  return {
    c() {
      e = D("svg"), t = D("path"), r = D("path"), s = D("path"), a(t, "d", "M3 3h18v18H3V3Z"), a(t, "fill", i = /*bg*/
      n[2] ?? "currentColor"), a(
        t,
        "opacity",
        /*bgOpacity*/
        n[4]
      ), a(r, "d", "M12 10.2a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"), a(r, "fill", l = /*fg*/
      n[3] ?? "currentColor"), a(s, "d", "M11 11.5h2V18h-2v-6.5Z"), a(s, "fill", o = /*fg*/
      n[3] ?? "currentColor"), a(
        e,
        "width",
        /*size*/
        n[1]
      ), a(
        e,
        "height",
        /*size*/
        n[1]
      ), a(e, "viewBox", "0 0 24 24"), a(e, "fill", "none"), a(e, "aria-hidden", "true");
    },
    m(f, u) {
      M(f, e, u), w(e, t), w(e, r), w(e, s);
    },
    p(f, u) {
      u & /*bg*/
      4 && i !== (i = /*bg*/
      f[2] ?? "currentColor") && a(t, "fill", i), u & /*bgOpacity*/
      16 && a(
        t,
        "opacity",
        /*bgOpacity*/
        f[4]
      ), u & /*fg*/
      8 && l !== (l = /*fg*/
      f[3] ?? "currentColor") && a(r, "fill", l), u & /*fg*/
      8 && o !== (o = /*fg*/
      f[3] ?? "currentColor") && a(s, "fill", o), u & /*size*/
      2 && a(
        e,
        "width",
        /*size*/
        f[1]
      ), u & /*size*/
      2 && a(
        e,
        "height",
        /*size*/
        f[1]
      );
    },
    d(f) {
      f && j(e);
    }
  };
}
function Dt(n) {
  let e, t, i, r, l, s, o;
  return {
    c() {
      e = D("svg"), t = D("path"), r = D("path"), s = D("path"), a(t, "d", "M12 3.5c.4 0 .8.2 1 .6l9 15.6c.4.7-.1 1.6-1 1.6H3c-.9 0-1.4-.9-1-1.6l9-15.6c.2-.4.6-.6 1-.6Z"), a(t, "fill", i = /*bg*/
      n[2] ?? "currentColor"), a(
        t,
        "opacity",
        /*bgOpacity*/
        n[4]
      ), a(r, "d", "M12 8a1 1 0 0 1 1 1l-.3 5.5a.7.7 0 0 1-1.4 0L11 9a1 1 0 0 1 1-1Z"), a(r, "fill", l = /*fg*/
      n[3] ?? "currentColor"), a(s, "d", "M12 18a1.25 1.25 0 1 1 0-2.5A1.25 1.25 0 0 1 12 18Z"), a(s, "fill", o = /*fg*/
      n[3] ?? "currentColor"), a(
        e,
        "width",
        /*size*/
        n[1]
      ), a(
        e,
        "height",
        /*size*/
        n[1]
      ), a(e, "viewBox", "0 0 24 24"), a(e, "fill", "none"), a(e, "aria-hidden", "true");
    },
    m(f, u) {
      M(f, e, u), w(e, t), w(e, r), w(e, s);
    },
    p(f, u) {
      u & /*bg*/
      4 && i !== (i = /*bg*/
      f[2] ?? "currentColor") && a(t, "fill", i), u & /*bgOpacity*/
      16 && a(
        t,
        "opacity",
        /*bgOpacity*/
        f[4]
      ), u & /*fg*/
      8 && l !== (l = /*fg*/
      f[3] ?? "currentColor") && a(r, "fill", l), u & /*fg*/
      8 && o !== (o = /*fg*/
      f[3] ?? "currentColor") && a(s, "fill", o), u & /*size*/
      2 && a(
        e,
        "width",
        /*size*/
        f[1]
      ), u & /*size*/
      2 && a(
        e,
        "height",
        /*size*/
        f[1]
      );
    },
    d(f) {
      f && j(e);
    }
  };
}
function St(n) {
  let e, t, i, r, l;
  return {
    c() {
      e = D("svg"), t = D("path"), r = D("path"), a(t, "d", "M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20Z"), a(t, "fill", i = /*bg*/
      n[2] ?? "currentColor"), a(
        t,
        "opacity",
        /*bgOpacity*/
        n[4]
      ), a(r, "d", "M9.2 12.5 7.5 10.8a1 1 0 0 0-1.4 1.4l2.4 2.4a1 1 0 0 0 1.4 0l7-7a1 1 0 1 0-1.4-1.4l-6.3 6.3Z"), a(r, "fill", l = /*fg*/
      n[3] ?? "currentColor"), a(
        e,
        "width",
        /*size*/
        n[1]
      ), a(
        e,
        "height",
        /*size*/
        n[1]
      ), a(e, "viewBox", "0 0 24 24"), a(e, "fill", "none"), a(e, "aria-hidden", "true");
    },
    m(s, o) {
      M(s, e, o), w(e, t), w(e, r);
    },
    p(s, o) {
      o & /*bg*/
      4 && i !== (i = /*bg*/
      s[2] ?? "currentColor") && a(t, "fill", i), o & /*bgOpacity*/
      16 && a(
        t,
        "opacity",
        /*bgOpacity*/
        s[4]
      ), o & /*fg*/
      8 && l !== (l = /*fg*/
      s[3] ?? "currentColor") && a(r, "fill", l), o & /*size*/
      2 && a(
        e,
        "width",
        /*size*/
        s[1]
      ), o & /*size*/
      2 && a(
        e,
        "height",
        /*size*/
        s[1]
      );
    },
    d(s) {
      s && j(e);
    }
  };
}
function Ct(n) {
  let e;
  function t(l, s) {
    return (
      /*name*/
      l[0] === "Confirmation" ? St : (
        /*name*/
        l[0] === "Warning" ? Dt : (
          /*name*/
          l[0] === "Info" ? Mt : (
            /*name*/
            l[0] === "Interactive" ? jt : (
              /*name*/
              l[0] === "badge-check" ? zt : yt
            )
          )
        )
      )
    );
  }
  let i = t(n), r = i(n);
  return {
    c() {
      r.c(), e = K();
    },
    m(l, s) {
      r.m(l, s), M(l, e, s);
    },
    p(l, [s]) {
      i === (i = t(l)) && r ? r.p(l, s) : (r.d(1), r = i(l), r && (r.c(), r.m(e.parentNode, e)));
    },
    i: ne,
    o: ne,
    d(l) {
      l && j(e), r.d(l);
    }
  };
}
function Tt(n, e, t) {
  let { name: i } = e, { size: r = 0 } = e, { bg: l = null } = e, { fg: s = null } = e, { bgOpacity: o = 0.14 } = e;
  return n.$$set = (f) => {
    "name" in f && t(0, i = f.name), "size" in f && t(1, r = f.size), "bg" in f && t(2, l = f.bg), "fg" in f && t(3, s = f.fg), "bgOpacity" in f && t(4, o = f.bgOpacity);
  }, [i, r, l, s, o];
}
class re extends V {
  constructor(e) {
    super(), Y(this, e, Tt, Ct, L, {
      name: 0,
      size: 1,
      bg: 2,
      fg: 3,
      bgOpacity: 4
    });
  }
  get name() {
    return this.$$.ctx[0];
  }
  set name(e) {
    this.$$set({ name: e }), m();
  }
  get size() {
    return this.$$.ctx[1];
  }
  set size(e) {
    this.$$set({ size: e }), m();
  }
  get bg() {
    return this.$$.ctx[2];
  }
  set bg(e) {
    this.$$set({ bg: e }), m();
  }
  get fg() {
    return this.$$.ctx[3];
  }
  set fg(e) {
    this.$$set({ fg: e }), m();
  }
  get bgOpacity() {
    return this.$$.ctx[4];
  }
  set bgOpacity(e) {
    this.$$set({ bgOpacity: e }), m();
  }
}
Z(re, { name: {}, size: {}, bg: {}, fg: {}, bgOpacity: {} }, [], [], !0);
function Pt(n) {
  G(n, "svelte-jjnksu", ".badge.svelte-jjnksu{display:inline-flex;align-items:center;gap:var(--badge-gap);padding:var(--badge-pad-y) var(--badge-pad-x);border-radius:16px;border:var(--badge-border-w) solid transparent;font-weight:550;font-size:12px;line-height:1;user-select:none;outline:none;transition:background-color 120ms ease, border-color 120ms ease, color 120ms ease;--badge-solid:rgb(17, 24, 39);--badge-border:color-mix(in srgb, var(--badge-solid) 65%, transparent);--badge-fg:color-mix(in srgb, var(--badge-solid) 72%, black);--badge-bg:color-mix(in srgb, var(--badge-solid) 14%, transparent);--badge-gap:3px;--badge-pad-y:3px;--badge-pad-x:6px;--badge-border-w:1px}.badge.filled.svelte-jjnksu{background:var(--badge-solid);border-color:transparent;color:#ffffff}.badge.outlined.svelte-jjnksu{background:transparent;border-color:var(--badge-border);color:var(--badge-fg)}.icon.svelte-jjnksu{display:inline-flex;align-items:center;justify-content:center}.label.svelte-jjnksu{white-space:nowrap}");
}
function Me(n) {
  let e, t;
  return e = new ie({
    props: {
      badge: (
        /*badge*/
        n[0]
      ),
      placement: "top",
      openDelayMs: 80,
      contentMode: "description",
      $$slots: { trigger: [Ot] },
      $$scope: { ctx: n }
    }
  }), {
    c() {
      P(e.$$.fragment);
    },
    m(i, r) {
      C(e, i, r), t = !0;
    },
    p(i, r) {
      const l = {};
      r & /*badge*/
      1 && (l.badge = /*badge*/
      i[0]), r & /*$$scope, variant, badgeColor, badge, iconName*/
      31 && (l.$$scope = { dirty: r, ctx: i }), e.$set(l);
    },
    i(i) {
      t || (x(e.$$.fragment, i), t = !0);
    },
    o(i) {
      k(e.$$.fragment, i), t = !1;
    },
    d(i) {
      T(e, i);
    }
  };
}
function De(n) {
  let e, t, i;
  return t = new re({
    props: {
      name: (
        /*iconName*/
        n[3]
      ),
      size: Ft,
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
      e = y("span"), P(t.$$.fragment), a(e, "class", "icon svelte-jjnksu"), a(e, "aria-hidden", "true");
    },
    m(r, l) {
      M(r, e, l), C(t, e, null), i = !0;
    },
    p(r, l) {
      const s = {};
      l & /*iconName*/
      8 && (s.name = /*iconName*/
      r[3]), l & /*variant*/
      2 && (s.bg = /*variant*/
      r[1] === "outlined" ? "var(--badge-solid)" : "#ffffff"), l & /*variant*/
      2 && (s.fg = /*variant*/
      r[1] === "outlined" ? "#ffffff" : "var(--badge-solid)"), t.$set(s);
    },
    i(r) {
      i || (x(t.$$.fragment, r), i = !0);
    },
    o(r) {
      k(t.$$.fragment, r), i = !1;
    },
    d(r) {
      r && j(e), T(t);
    }
  };
}
function Ot(n) {
  let e, t, i, r, l = (
    /*badge*/
    n[0].label + ""
  ), s, o, f, u, c, b, _, d = (
    /*iconName*/
    n[3] && De(n)
  );
  return {
    c() {
      e = y("span"), t = y("span"), d && d.c(), i = H(), r = y("span"), s = I(l), a(r, "class", "label svelte-jjnksu"), a(t, "class", o = "badge " + /*variant*/
      n[1] + " svelte-jjnksu"), a(t, "style", f = `--badge-solid:${/*badgeColor*/
      n[2]};`), a(t, "role", "note"), a(t, "aria-label", u = /*badge*/
      n[0].label), a(e, "slot", "trigger"), a(e, "role", "presentation");
    },
    m(g, v) {
      M(g, e, v), w(e, t), d && d.m(t, null), w(t, i), w(t, r), w(r, s), c = !0, b || (_ = X(e, "keydown", Nt), b = !0);
    },
    p(g, v) {
      /*iconName*/
      g[3] ? d ? (d.p(g, v), v & /*iconName*/
      8 && x(d, 1)) : (d = De(g), d.c(), x(d, 1), d.m(t, i)) : d && (B(), k(d, 1, 1, () => {
        d = null;
      }), A()), (!c || v & /*badge*/
      1) && l !== (l = /*badge*/
      g[0].label + "") && Q(s, l), (!c || v & /*variant*/
      2 && o !== (o = "badge " + /*variant*/
      g[1] + " svelte-jjnksu")) && a(t, "class", o), (!c || v & /*badgeColor*/
      4 && f !== (f = `--badge-solid:${/*badgeColor*/
      g[2]};`)) && a(t, "style", f), (!c || v & /*badge*/
      1 && u !== (u = /*badge*/
      g[0].label)) && a(t, "aria-label", u);
    },
    i(g) {
      c || (x(d), c = !0);
    },
    o(g) {
      k(d), c = !1;
    },
    d(g) {
      g && j(e), d && d.d(), b = !1, _();
    }
  };
}
function Et(n) {
  let e, t, i = (
    /*badge*/
    n[0] && Me(n)
  );
  return {
    c() {
      i && i.c(), e = K();
    },
    m(r, l) {
      i && i.m(r, l), M(r, e, l), t = !0;
    },
    p(r, [l]) {
      /*badge*/
      r[0] ? i ? (i.p(r, l), l & /*badge*/
      1 && x(i, 1)) : (i = Me(r), i.c(), x(i, 1), i.m(e.parentNode, e)) : i && (B(), k(i, 1, 1, () => {
        i = null;
      }), A());
    },
    i(r) {
      t || (x(i), t = !0);
    },
    o(r) {
      k(i), t = !1;
    },
    d(r) {
      r && j(e), i && i.d(r);
    }
  };
}
const Ft = 20, Nt = () => {
};
function Bt(n, e, t) {
  let i, r, { badge: l } = e, { variant: s = "filled" } = e;
  return n.$$set = (o) => {
    "badge" in o && t(0, l = o.badge), "variant" in o && t(1, s = o.variant);
  }, n.$$.update = () => {
    n.$$.dirty & /*badge*/
    1 && t(3, i = (l == null ? void 0 : l.icon) ?? null), n.$$.dirty & /*badge*/
    1 && t(2, r = String((l == null ? void 0 : l.color) ?? "").trim() || "rgb(17, 24, 39)");
  }, [l, s, r, i];
}
class Ve extends V {
  constructor(e) {
    super(), Y(this, e, Bt, Et, L, { badge: 0, variant: 1 }, Pt);
  }
  get badge() {
    return this.$$.ctx[0];
  }
  set badge(e) {
    this.$$set({ badge: e }), m();
  }
  get variant() {
    return this.$$.ctx[1];
  }
  set variant(e) {
    this.$$set({ variant: e }), m();
  }
}
Z(Ve, { badge: {}, variant: {} }, [], [], !0);
function At(n) {
  G(n, "svelte-bj5eke", `.wrap.fixed.svelte-bj5eke.svelte-bj5eke{position:fixed;z-index:50}.wrap.svelte-bj5eke.svelte-bj5eke{display:inline-flex;align-items:center;justify-content:flex-end;pointer-events:auto}.wrap.left.svelte-bj5eke .badge.mini{flex-direction:row-reverse}.badge.svelte-bj5eke.svelte-bj5eke{display:inline-flex;align-items:center;gap:var(--badge-gap);padding:var(--badge-pad-y) var(--badge-pad-x);border-radius:16px;border:var(--badge-border-w) solid transparent;font-weight:550;font-size:12px;line-height:1;user-select:none;outline:none;transition:background-color 160ms ease, border-color 160ms ease, color 160ms ease, box-shadow 160ms ease,
      padding 320ms cubic-bezier(0.2, 0, 0, 1);--badge-solid:rgb(17, 24, 39);--badge-border:color-mix(in srgb, var(--badge-solid) 65%, transparent);--badge-fg:color-mix(in srgb, var(--badge-solid) 72%, black);--badge-gap:3px;--badge-pad-y:3px;--badge-pad-x:6px;--badge-border-w:1px}.badge.filled.svelte-bj5eke.svelte-bj5eke{background:var(--badge-solid);border-color:transparent;color:#ffffff}.badge.outlined.svelte-bj5eke.svelte-bj5eke{background:transparent;border-color:var(--badge-border);color:var(--badge-fg)}.icon.svelte-bj5eke.svelte-bj5eke{display:inline-flex;align-items:center;justify-content:center}.label.svelte-bj5eke.svelte-bj5eke{white-space:nowrap}.badge.mini.svelte-bj5eke.svelte-bj5eke{--badge-gap:0px;--badge-pad-y:0px;--badge-pad-x:0px;--badge-border-w:0px;border-color:transparent;background:transparent;font-size:11px}.badge.mini.svelte-bj5eke .label.svelte-bj5eke{max-width:0;opacity:0;overflow:hidden;line-height:1.2;padding-bottom:1px;transition:max-width 320ms cubic-bezier(0.2, 0, 0, 1), opacity 200ms ease}.badge.mini.svelte-bj5eke.svelte-bj5eke:hover,.badge.mini.svelte-bj5eke.svelte-bj5eke:focus-visible{--badge-gap:2px;--badge-pad-y:2px;--badge-pad-x:5px;--badge-border-w:1px}.badge.mini.outlined.svelte-bj5eke.svelte-bj5eke:hover,.badge.mini.outlined.svelte-bj5eke.svelte-bj5eke:focus-visible{border-color:var(--badge-border)}.badge.mini.svelte-bj5eke:hover .label.svelte-bj5eke,.badge.mini.svelte-bj5eke:focus-visible .label.svelte-bj5eke{max-width:220px;opacity:1}`);
}
function Se(n) {
  let e, t;
  return e = new ie({
    props: {
      badge: (
        /*badge*/
        n[0]
      ),
      placement: "top",
      openDelayMs: 420,
      contentMode: "description",
      $$slots: { trigger: [Lt] },
      $$scope: { ctx: n }
    }
  }), {
    c() {
      P(e.$$.fragment);
    },
    m(i, r) {
      C(e, i, r), t = !0;
    },
    p(i, r) {
      const l = {};
      r & /*badge*/
      1 && (l.badge = /*badge*/
      i[0]), r & /*$$scope, variant, badgeColor, badge, iconName*/
      227 && (l.$$scope = { dirty: r, ctx: i }), e.$set(l);
    },
    i(i) {
      t || (x(e.$$.fragment, i), t = !0);
    },
    o(i) {
      k(e.$$.fragment, i), t = !1;
    },
    d(i) {
      T(e, i);
    }
  };
}
function Ce(n) {
  let e, t, i;
  return t = new re({
    props: {
      name: (
        /*iconName*/
        n[6]
      ),
      size: Zt,
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
      e = y("span"), P(t.$$.fragment), a(e, "class", "icon svelte-bj5eke"), a(e, "aria-hidden", "true");
    },
    m(r, l) {
      M(r, e, l), C(t, e, null), i = !0;
    },
    p(r, l) {
      const s = {};
      l & /*iconName*/
      64 && (s.name = /*iconName*/
      r[6]), l & /*variant*/
      2 && (s.bg = /*variant*/
      r[1] === "outlined" ? "var(--badge-solid)" : "#ffffff"), l & /*variant*/
      2 && (s.fg = /*variant*/
      r[1] === "outlined" ? "#ffffff" : "var(--badge-solid)"), t.$set(s);
    },
    i(r) {
      i || (x(t.$$.fragment, r), i = !0);
    },
    o(r) {
      k(t.$$.fragment, r), i = !1;
    },
    d(r) {
      r && j(e), T(t);
    }
  };
}
function Lt(n) {
  let e, t, i, r, l = (
    /*badge*/
    n[0].label + ""
  ), s, o, f, u, c, b, _, d = (
    /*iconName*/
    n[6] && Ce(n)
  );
  return {
    c() {
      e = y("span"), t = y("span"), d && d.c(), i = H(), r = y("span"), s = I(l), a(r, "class", "label svelte-bj5eke"), a(t, "class", o = "badge mini " + /*variant*/
      n[1] + " svelte-bj5eke"), a(t, "style", f = `--badge-solid:${/*badgeColor*/
      n[5]};`), a(t, "role", "note"), a(t, "aria-label", u = /*badge*/
      n[0].label), a(e, "slot", "trigger"), a(e, "role", "presentation");
    },
    m(g, v) {
      M(g, e, v), w(e, t), d && d.m(t, null), w(t, i), w(t, r), w(r, s), c = !0, b || (_ = X(e, "keydown", Vt), b = !0);
    },
    p(g, v) {
      /*iconName*/
      g[6] ? d ? (d.p(g, v), v & /*iconName*/
      64 && x(d, 1)) : (d = Ce(g), d.c(), x(d, 1), d.m(t, i)) : d && (B(), k(d, 1, 1, () => {
        d = null;
      }), A()), (!c || v & /*badge*/
      1) && l !== (l = /*badge*/
      g[0].label + "") && Q(s, l), (!c || v & /*variant*/
      2 && o !== (o = "badge mini " + /*variant*/
      g[1] + " svelte-bj5eke")) && a(t, "class", o), (!c || v & /*badgeColor*/
      32 && f !== (f = `--badge-solid:${/*badgeColor*/
      g[5]};`)) && a(t, "style", f), (!c || v & /*badge*/
      1 && u !== (u = /*badge*/
      g[0].label)) && a(t, "aria-label", u);
    },
    i(g) {
      c || (x(d), c = !0);
    },
    o(g) {
      k(d), c = !1;
    },
    d(g) {
      g && j(e), d && d.d(), b = !1, _();
    }
  };
}
function Yt(n) {
  let e, t, i, r, l = (
    /*badge*/
    n[0] && Se(n)
  );
  return {
    c() {
      e = y("div"), l && l.c(), a(e, "class", t = "wrap " + /*fixed*/
      (n[2] ? "fixed" : "") + " " + /*expandDirection*/
      n[4] + " svelte-bj5eke"), a(e, "style", i = /*fixed*/
      n[2] ? `right:${/*offsetPx*/
      n[3]}px;bottom:${/*offsetPx*/
      n[3]}px;` : void 0), a(e, "aria-label", "Mini badge");
    },
    m(s, o) {
      M(s, e, o), l && l.m(e, null), r = !0;
    },
    p(s, [o]) {
      /*badge*/
      s[0] ? l ? (l.p(s, o), o & /*badge*/
      1 && x(l, 1)) : (l = Se(s), l.c(), x(l, 1), l.m(e, null)) : l && (B(), k(l, 1, 1, () => {
        l = null;
      }), A()), (!r || o & /*fixed, expandDirection*/
      20 && t !== (t = "wrap " + /*fixed*/
      (s[2] ? "fixed" : "") + " " + /*expandDirection*/
      s[4] + " svelte-bj5eke")) && a(e, "class", t), (!r || o & /*fixed, offsetPx*/
      12 && i !== (i = /*fixed*/
      s[2] ? `right:${/*offsetPx*/
      s[3]}px;bottom:${/*offsetPx*/
      s[3]}px;` : void 0)) && a(e, "style", i);
    },
    i(s) {
      r || (x(l), r = !0);
    },
    o(s) {
      k(l), r = !1;
    },
    d(s) {
      s && j(e), l && l.d();
    }
  };
}
const Zt = 22, Vt = () => {
};
function Xt(n, e, t) {
  let i, r, { badge: l } = e, { variant: s = "outlined" } = e, { fixed: o = !1 } = e, { offsetPx: f = 16 } = e, { expandDirection: u = "right" } = e;
  return n.$$set = (c) => {
    "badge" in c && t(0, l = c.badge), "variant" in c && t(1, s = c.variant), "fixed" in c && t(2, o = c.fixed), "offsetPx" in c && t(3, f = c.offsetPx), "expandDirection" in c && t(4, u = c.expandDirection);
  }, n.$$.update = () => {
    n.$$.dirty & /*badge*/
    1 && t(6, i = (l == null ? void 0 : l.icon) ?? null), n.$$.dirty & /*badge*/
    1 && t(5, r = String((l == null ? void 0 : l.color) ?? "").trim() || "rgb(17, 24, 39)");
  }, [l, s, o, f, u, r, i];
}
class Xe extends V {
  constructor(e) {
    super(), Y(
      this,
      e,
      Xt,
      Yt,
      L,
      {
        badge: 0,
        variant: 1,
        fixed: 2,
        offsetPx: 3,
        expandDirection: 4
      },
      At
    );
  }
  get badge() {
    return this.$$.ctx[0];
  }
  set badge(e) {
    this.$$set({ badge: e }), m();
  }
  get variant() {
    return this.$$.ctx[1];
  }
  set variant(e) {
    this.$$set({ variant: e }), m();
  }
  get fixed() {
    return this.$$.ctx[2];
  }
  set fixed(e) {
    this.$$set({ fixed: e }), m();
  }
  get offsetPx() {
    return this.$$.ctx[3];
  }
  set offsetPx(e) {
    this.$$set({ offsetPx: e }), m();
  }
  get expandDirection() {
    return this.$$.ctx[4];
  }
  set expandDirection(e) {
    this.$$set({ expandDirection: e }), m();
  }
}
Z(Xe, { badge: {}, variant: {}, fixed: { type: "Boolean" }, offsetPx: {}, expandDirection: {} }, [], [], !0);
function It(n) {
  G(n, "svelte-1achwnm", `.prio.svelte-1achwnm.svelte-1achwnm{width:var(--prio-size);height:var(--prio-size);border-radius:999px;display:inline-flex;align-items:center;justify-content:center;cursor:default;outline:none;user-select:none;transition:transform 160ms cubic-bezier(0.2, 0, 0, 1), box-shadow 160ms cubic-bezier(0.2, 0, 0, 1),
      filter 160ms cubic-bezier(0.2, 0, 0, 1);--prio-solid:rgb(17, 24, 39);--prio-border:color-mix(in srgb, var(--prio-solid) 65%, transparent);--prio-text:#ffffff}.prio-inner.svelte-1achwnm.svelte-1achwnm{width:100%;height:100%;border-radius:999px;display:inline-flex;align-items:center;justify-content:center}.prio.with-label.svelte-1achwnm .prio-inner.svelte-1achwnm{flex-direction:column;gap:2px;padding:3px 5px 5px 5px;box-sizing:border-box}.prio-text.svelte-1achwnm.svelte-1achwnm{font-size:var(--prio-text-size, 10px);font-weight:550;letter-spacing:0.02em;line-height:1.05;color:var(--prio-text);text-align:center;white-space:normal;overflow-wrap:anywhere;opacity:0.95}.prio.solid.svelte-1achwnm.svelte-1achwnm{background:var(--prio-solid)}.prio.ring.svelte-1achwnm.svelte-1achwnm{background:#ffffff;box-shadow:inset 0 0 0 2px var(--prio-solid);--prio-text:var(--prio-solid)}.prio.double-ring.svelte-1achwnm.svelte-1achwnm{background:var(--prio-solid);box-shadow:inset 0 0 0 3px rgba(255, 255, 255, 0.95), 0 0 0 2px var(--prio-solid)}.prio.stamp.svelte-1achwnm.svelte-1achwnm{background:var(--prio-solid);box-shadow:inset 0 0 0 2px rgba(255, 255, 255, 0.85);filter:saturate(1.05)}.prio.stamp.svelte-1achwnm .prio-inner.svelte-1achwnm{background-image:radial-gradient(rgba(255, 255, 255, 0.08) 1px, transparent 0);background-size:6px 6px;background-position:0 0}.prio.glow.svelte-1achwnm.svelte-1achwnm{background:var(--prio-solid);box-shadow:0 10px 22px rgba(17, 24, 39, 0.16), 0 0 0 3px rgba(255, 255, 255, 0.92)}`);
}
function Te(n) {
  let e, t;
  return e = new ie({
    props: {
      badge: (
        /*badge*/
        n[0]
      ),
      placement: "top",
      openDelayMs: 120,
      contentMode: "labelAndDescription",
      $$slots: { trigger: [Rt] },
      $$scope: { ctx: n }
    }
  }), {
    c() {
      P(e.$$.fragment);
    },
    m(i, r) {
      C(e, i, r), t = !0;
    },
    p(i, r) {
      const l = {};
      r & /*badge*/
      1 && (l.badge = /*badge*/
      i[0]), r & /*$$scope, variant, badgeColor, renderSize, textSize, badge, rawLabel, iconName, iconSize*/
      1279 && (l.$$scope = { dirty: r, ctx: i }), e.$set(l);
    },
    i(i) {
      t || (x(e.$$.fragment, i), t = !0);
    },
    o(i) {
      k(e.$$.fragment, i), t = !1;
    },
    d(i) {
      T(e, i);
    }
  };
}
function Pe(n) {
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
      P(e.$$.fragment);
    },
    m(i, r) {
      C(e, i, r), t = !0;
    },
    p(i, r) {
      const l = {};
      r & /*iconName*/
      128 && (l.name = /*iconName*/
      i[7]), r & /*iconSize*/
      32 && (l.size = /*iconSize*/
      i[5]), r & /*variant*/
      2 && (l.bg = /*variant*/
      i[1] === "solid" ? "#ffffff" : "var(--prio-solid)"), r & /*variant*/
      2 && (l.fg = /*variant*/
      i[1] === "solid" ? "var(--prio-solid)" : "#ffffff"), e.$set(l);
    },
    i(i) {
      t || (x(e.$$.fragment, i), t = !0);
    },
    o(i) {
      k(e.$$.fragment, i), t = !1;
    },
    d(i) {
      T(e, i);
    }
  };
}
function Rt(n) {
  let e, t, i, r, l, s, o, f, u, c, b, _, d = (
    /*iconName*/
    n[7] && Pe(n)
  );
  return {
    c() {
      e = y("span"), t = y("span"), i = y("span"), d && d.c(), r = H(), l = y("span"), s = I(
        /*rawLabel*/
        n[3]
      ), a(l, "class", "prio-text svelte-1achwnm"), a(i, "class", "prio-inner svelte-1achwnm"), a(i, "aria-hidden", "true"), a(t, "class", o = "prio " + /*variant*/
      n[1] + " with-label svelte-1achwnm"), a(t, "style", f = `--prio-solid:${/*badgeColor*/
      n[6]}; --prio-size:${/*renderSize*/
      n[2]}px; --prio-text-size:${/*textSize*/
      n[4]}px;`), a(t, "role", "note"), a(t, "aria-label", u = /*badge*/
      n[0].label), a(e, "slot", "trigger"), a(e, "role", "presentation");
    },
    m(g, v) {
      M(g, e, v), w(e, t), w(t, i), d && d.m(i, null), w(i, r), w(i, l), w(l, s), c = !0, b || (_ = X(e, "keydown", qt), b = !0);
    },
    p(g, v) {
      /*iconName*/
      g[7] ? d ? (d.p(g, v), v & /*iconName*/
      128 && x(d, 1)) : (d = Pe(g), d.c(), x(d, 1), d.m(i, r)) : d && (B(), k(d, 1, 1, () => {
        d = null;
      }), A()), (!c || v & /*rawLabel*/
      8) && Q(
        s,
        /*rawLabel*/
        g[3]
      ), (!c || v & /*variant*/
      2 && o !== (o = "prio " + /*variant*/
      g[1] + " with-label svelte-1achwnm")) && a(t, "class", o), (!c || v & /*badgeColor, renderSize, textSize*/
      84 && f !== (f = `--prio-solid:${/*badgeColor*/
      g[6]}; --prio-size:${/*renderSize*/
      g[2]}px; --prio-text-size:${/*textSize*/
      g[4]}px;`)) && a(t, "style", f), (!c || v & /*badge*/
      1 && u !== (u = /*badge*/
      g[0].label)) && a(t, "aria-label", u);
    },
    i(g) {
      c || (x(d), c = !0);
    },
    o(g) {
      k(d), c = !1;
    },
    d(g) {
      g && j(e), d && d.d(), b = !1, _();
    }
  };
}
function Ht(n) {
  let e, t, i = (
    /*badge*/
    n[0] && Te(n)
  );
  return {
    c() {
      i && i.c(), e = K();
    },
    m(r, l) {
      i && i.m(r, l), M(r, e, l), t = !0;
    },
    p(r, [l]) {
      /*badge*/
      r[0] ? i ? (i.p(r, l), l & /*badge*/
      1 && x(i, 1)) : (i = Te(r), i.c(), x(i, 1), i.m(e.parentNode, e)) : i && (B(), k(i, 1, 1, () => {
        i = null;
      }), A());
    },
    i(r) {
      t || (x(i), t = !0);
    },
    o(r) {
      k(i), t = !1;
    },
    d(r) {
      r && j(e), i && i.d(r);
    }
  };
}
function Ut(n) {
  return String(n ?? "").trim() || "—";
}
const qt = () => {
};
function Wt(n, e, t) {
  let i, r, l, s, o, f, u, { badge: c } = e, { variant: b = "solid" } = e, { size: _ = 44 } = e;
  return n.$$set = (d) => {
    "badge" in d && t(0, c = d.badge), "variant" in d && t(1, b = d.variant), "size" in d && t(8, _ = d.size);
  }, n.$$.update = () => {
    n.$$.dirty & /*badge*/
    1 && t(7, i = (c == null ? void 0 : c.icon) ?? null), n.$$.dirty & /*badge*/
    1 && t(6, r = String((c == null ? void 0 : c.color) ?? "").trim() || "rgb(17, 24, 39)"), n.$$.dirty & /*badge*/
    1 && t(3, l = Ut(c == null ? void 0 : c.label)), n.$$.dirty & /*rawLabel*/
    8 && t(9, s = l.length), n.$$.dirty & /*size, labelLen*/
    768 && t(2, o = Math.min(104, Math.max(_, 70 + Math.max(0, s - 12) * 1.4))), n.$$.dirty & /*renderSize*/
    4 && t(5, f = Math.round(o * 0.34)), n.$$.dirty & /*labelLen*/
    512 && t(4, u = s <= 12 ? 12 : s <= 18 ? 11 : s <= 26 ? 10 : 9);
  }, [
    c,
    b,
    o,
    l,
    u,
    f,
    r,
    i,
    _,
    s
  ];
}
class Ie extends V {
  constructor(e) {
    super(), Y(this, e, Wt, Ht, L, { badge: 0, variant: 1, size: 8 }, It);
  }
  get badge() {
    return this.$$.ctx[0];
  }
  set badge(e) {
    this.$$set({ badge: e }), m();
  }
  get variant() {
    return this.$$.ctx[1];
  }
  set variant(e) {
    this.$$set({ variant: e }), m();
  }
  get size() {
    return this.$$.ctx[8];
  }
  set size(e) {
    this.$$set({ size: e }), m();
  }
}
Z(Ie, { badge: {}, variant: {}, size: {} }, [], [], !0);
function Jt(n) {
  G(n, "svelte-1wx095d", ".seal.svelte-1wx095d.svelte-1wx095d{position:relative;width:var(--seal-size);height:var(--seal-size);border-radius:999px;display:inline-grid;place-items:center;outline:none;cursor:default;user-select:none;background:transparent;--seal-solid:rgb(17, 24, 39);--seal-ring:color-mix(in srgb, var(--seal-solid) 55%, transparent);--seal-line:color-mix(in srgb, var(--seal-solid) 18%, transparent);--seal-ring-fg:var(--seal-solid)}.seal.filled.svelte-1wx095d.svelte-1wx095d{background:var(--seal-solid);--seal-ring-fg:rgba(255, 255, 255, 0.92)}.ring.svelte-1wx095d.svelte-1wx095d{position:absolute;inset:0;border-radius:999px;font-size:var(--seal-font);color:var(--seal-ring-fg);opacity:0.92;text-transform:uppercase;letter-spacing:0.1em;font-weight:550}.char.svelte-1wx095d.svelte-1wx095d{width:1em;height:100%;position:absolute;top:0;left:50%;transform:translateX(-50%) rotate(var(--angle));text-align:center}.center.svelte-1wx095d.svelte-1wx095d{position:absolute;inset:0;display:grid;place-items:center}.center-pill.svelte-1wx095d.svelte-1wx095d{width:calc(var(--seal-size) * 0.64);height:calc(var(--seal-size) * 0.64);border-radius:999px;background:rgba(255, 255, 255, 0.96);border:1px solid var(--seal-line);display:grid;place-items:center;opacity:0.95}.seal.filled.svelte-1wx095d .center-pill.svelte-1wx095d{border-color:rgba(255, 255, 255, 0.35);background:#ffffff;opacity:1}");
}
function Oe(n, e, t) {
  const i = n.slice();
  return i[14] = e[t], i[16] = t, i;
}
function Ee(n) {
  let e, t;
  return e = new ie({
    props: {
      badge: (
        /*badge*/
        n[0]
      ),
      placement: "top",
      openDelayMs: 120,
      contentMode: "labelAndDescription",
      $$slots: { trigger: [Gt] },
      $$scope: { ctx: n }
    }
  }), {
    c() {
      P(e.$$.fragment);
    },
    m(i, r) {
      C(e, i, r), t = !0;
    },
    p(i, r) {
      const l = {};
      r & /*badge*/
      1 && (l.badge = /*badge*/
      i[0]), r & /*$$scope, variant, badgeColor, size, ringFontPx, badge, iconName, centerIcon, chars*/
      131327 && (l.$$scope = { dirty: r, ctx: i }), e.$set(l);
    },
    i(i) {
      t || (x(e.$$.fragment, i), t = !0);
    },
    o(i) {
      k(e.$$.fragment, i), t = !1;
    },
    d(i) {
      T(e, i);
    }
  };
}
function Fe(n, e) {
  let t, i = (
    /*char*/
    e[14] + ""
  ), r, l;
  return {
    key: n,
    first: null,
    c() {
      t = y("span"), r = I(i), a(t, "class", "char svelte-1wx095d"), a(t, "style", l = `--angle:${1 / /*chars*/
      e[5].length * /*index*/
      e[16]}turn;`), this.first = t;
    },
    m(s, o) {
      M(s, t, o), w(t, r);
    },
    p(s, o) {
      e = s, o & /*chars*/
      32 && i !== (i = /*char*/
      e[14] + "") && Q(r, i), o & /*chars*/
      32 && l !== (l = `--angle:${1 / /*chars*/
      e[5].length * /*index*/
      e[16]}turn;`) && a(t, "style", l);
    },
    d(s) {
      s && j(t);
    }
  };
}
function Ne(n) {
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
      P(e.$$.fragment);
    },
    m(i, r) {
      C(e, i, r), t = !0;
    },
    p(i, r) {
      const l = {};
      r & /*iconName*/
      128 && (l.name = /*iconName*/
      i[7]), r & /*centerIcon*/
      8 && (l.size = /*centerIcon*/
      i[3]), e.$set(l);
    },
    i(i) {
      t || (x(e.$$.fragment, i), t = !0);
    },
    o(i) {
      k(e.$$.fragment, i), t = !1;
    },
    d(i) {
      T(e, i);
    }
  };
}
function Gt(n) {
  let e, t, i, r = [], l = /* @__PURE__ */ new Map(), s, o, f, u, c, b, _, d, g, v = we(
    /*chars*/
    n[5]
  );
  const z = (p) => (
    /*index*/
    p[16]
  );
  for (let p = 0; p < v.length; p += 1) {
    let $ = Oe(n, v, p), E = z($);
    l.set(E, r[p] = Fe(E, $));
  }
  let h = (
    /*iconName*/
    n[7] && Ne(n)
  );
  return {
    c() {
      e = y("span"), t = y("span"), i = y("span");
      for (let p = 0; p < r.length; p += 1)
        r[p].c();
      s = H(), o = y("span"), f = y("span"), h && h.c(), a(i, "class", "ring svelte-1wx095d"), a(i, "aria-hidden", "true"), a(f, "class", "center-pill svelte-1wx095d"), a(o, "class", "center svelte-1wx095d"), a(o, "aria-hidden", "true"), a(t, "class", u = "seal " + /*variant*/
      n[1] + " svelte-1wx095d"), a(t, "style", c = `--seal-solid:${/*badgeColor*/
      n[6]}; --seal-size:${/*size*/
      n[2]}px; --seal-font:${/*ringFontPx*/
      n[4]}px;`), a(t, "role", "note"), a(t, "aria-label", b = /*badge*/
      n[0].label), a(e, "slot", "trigger"), a(e, "role", "presentation");
    },
    m(p, $) {
      M(p, e, $), w(e, t), w(t, i);
      for (let E = 0; E < r.length; E += 1)
        r[E] && r[E].m(i, null);
      w(t, s), w(t, o), w(o, f), h && h.m(f, null), _ = !0, d || (g = X(e, "keydown", en), d = !0);
    },
    p(p, $) {
      $ & /*chars*/
      32 && (v = we(
        /*chars*/
        p[5]
      ), r = at(r, $, z, 1, p, v, l, i, st, Fe, null, Oe)), /*iconName*/
      p[7] ? h ? (h.p(p, $), $ & /*iconName*/
      128 && x(h, 1)) : (h = Ne(p), h.c(), x(h, 1), h.m(f, null)) : h && (B(), k(h, 1, 1, () => {
        h = null;
      }), A()), (!_ || $ & /*variant*/
      2 && u !== (u = "seal " + /*variant*/
      p[1] + " svelte-1wx095d")) && a(t, "class", u), (!_ || $ & /*badgeColor, size, ringFontPx*/
      84 && c !== (c = `--seal-solid:${/*badgeColor*/
      p[6]}; --seal-size:${/*size*/
      p[2]}px; --seal-font:${/*ringFontPx*/
      p[4]}px;`)) && a(t, "style", c), (!_ || $ & /*badge*/
      1 && b !== (b = /*badge*/
      p[0].label)) && a(t, "aria-label", b);
    },
    i(p) {
      _ || (x(h), _ = !0);
    },
    o(p) {
      k(h), _ = !1;
    },
    d(p) {
      p && j(e);
      for (let $ = 0; $ < r.length; $ += 1)
        r[$].d();
      h && h.d(), d = !1, g();
    }
  };
}
function Kt(n) {
  let e, t, i = (
    /*badge*/
    n[0] && Ee(n)
  );
  return {
    c() {
      i && i.c(), e = K();
    },
    m(r, l) {
      i && i.m(r, l), M(r, e, l), t = !0;
    },
    p(r, [l]) {
      /*badge*/
      r[0] ? i ? (i.p(r, l), l & /*badge*/
      1 && x(i, 1)) : (i = Ee(r), i.c(), x(i, 1), i.m(e.parentNode, e)) : i && (B(), k(i, 1, 1, () => {
        i = null;
      }), A());
    },
    i(r) {
      t || (x(i), t = !0);
    },
    o(r) {
      k(i), t = !1;
    },
    d(r) {
      r && j(e), i && i.d(r);
    }
  };
}
function Qt(n, e, t) {
  return Math.max(e, Math.min(t, n));
}
const en = () => {
};
function tn(n, e, t) {
  let i, r, l, s, o, f, u, { badge: c } = e, { variant: b = "outlined" } = e, { ringText: _ = null } = e, { repeat: d = 2 } = e, { separator: g = " • " } = e, { size: v = 76 } = e, { sealFontScale: z = 0.12 } = e;
  return n.$$set = (h) => {
    "badge" in h && t(0, c = h.badge), "variant" in h && t(1, b = h.variant), "ringText" in h && t(8, _ = h.ringText), "repeat" in h && t(9, d = h.repeat), "separator" in h && t(10, g = h.separator), "size" in h && t(2, v = h.size), "sealFontScale" in h && t(11, z = h.sealFontScale);
  }, n.$$.update = () => {
    n.$$.dirty & /*badge*/
    1 && t(7, i = (c == null ? void 0 : c.icon) ?? null), n.$$.dirty & /*badge*/
    1 && t(6, r = String((c == null ? void 0 : c.color) ?? "").trim() || "rgb(17, 24, 39)"), n.$$.dirty & /*ringText, badge*/
    257 && t(12, l = (_ ?? (c == null ? void 0 : c.label) ?? "").trim() || "—"), n.$$.dirty & /*repeat*/
    512 && t(13, s = Qt(Math.floor(d || 1), 1, 10)), n.$$.dirty & /*repeatSafe, displayText, separator*/
    13312 && t(5, o = [...Array(s)].map(() => [...l.toUpperCase()].concat([...g.toUpperCase()])).flat()), n.$$.dirty & /*size, sealFontScale*/
    2052 && t(4, f = Math.round(v * z)), n.$$.dirty & /*size*/
    4 && t(3, u = Math.round(v * 0.3));
  }, [
    c,
    b,
    v,
    u,
    f,
    o,
    r,
    i,
    _,
    d,
    g,
    z,
    l,
    s
  ];
}
class Re extends V {
  constructor(e) {
    super(), Y(
      this,
      e,
      tn,
      Kt,
      L,
      {
        badge: 0,
        variant: 1,
        ringText: 8,
        repeat: 9,
        separator: 10,
        size: 2,
        sealFontScale: 11
      },
      Jt
    );
  }
  get badge() {
    return this.$$.ctx[0];
  }
  set badge(e) {
    this.$$set({ badge: e }), m();
  }
  get variant() {
    return this.$$.ctx[1];
  }
  set variant(e) {
    this.$$set({ variant: e }), m();
  }
  get ringText() {
    return this.$$.ctx[8];
  }
  set ringText(e) {
    this.$$set({ ringText: e }), m();
  }
  get repeat() {
    return this.$$.ctx[9];
  }
  set repeat(e) {
    this.$$set({ repeat: e }), m();
  }
  get separator() {
    return this.$$.ctx[10];
  }
  set separator(e) {
    this.$$set({ separator: e }), m();
  }
  get size() {
    return this.$$.ctx[2];
  }
  set size(e) {
    this.$$set({ size: e }), m();
  }
  get sealFontScale() {
    return this.$$.ctx[11];
  }
  set sealFontScale(e) {
    this.$$set({ sealFontScale: e }), m();
  }
}
Z(Re, { badge: {}, variant: {}, ringText: {}, repeat: {}, separator: {}, size: {}, sealFontScale: {} }, [], [], !0);
function nn(n) {
  let e, t;
  return e = new Re({
    props: {
      badge: (
        /*badge*/
        n[0]
      ),
      variant: (
        /*roundCircularTextVariant*/
        n[10]
      ),
      ringText: (
        /*ringText*/
        n[6]
      ),
      repeat: (
        /*repeat*/
        n[7]
      ),
      separator: (
        /*separator*/
        n[8]
      ),
      size: (
        /*size*/
        n[2] ?? 76
      ),
      sealFontScale: (
        /*sealFontScale*/
        n[9]
      )
    }
  }), {
    c() {
      P(e.$$.fragment);
    },
    m(i, r) {
      C(e, i, r), t = !0;
    },
    p(i, r) {
      const l = {};
      r & /*badge*/
      1 && (l.badge = /*badge*/
      i[0]), r & /*roundCircularTextVariant*/
      1024 && (l.variant = /*roundCircularTextVariant*/
      i[10]), r & /*ringText*/
      64 && (l.ringText = /*ringText*/
      i[6]), r & /*repeat*/
      128 && (l.repeat = /*repeat*/
      i[7]), r & /*separator*/
      256 && (l.separator = /*separator*/
      i[8]), r & /*size*/
      4 && (l.size = /*size*/
      i[2] ?? 76), r & /*sealFontScale*/
      512 && (l.sealFontScale = /*sealFontScale*/
      i[9]), e.$set(l);
    },
    i(i) {
      t || (x(e.$$.fragment, i), t = !0);
    },
    o(i) {
      k(e.$$.fragment, i), t = !1;
    },
    d(i) {
      T(e, i);
    }
  };
}
function rn(n) {
  let e, t;
  return e = new Ie({
    props: {
      badge: (
        /*badge*/
        n[0]
      ),
      variant: (
        /*roundVariant*/
        n[11]
      ),
      size: (
        /*size*/
        n[2] ?? 44
      )
    }
  }), {
    c() {
      P(e.$$.fragment);
    },
    m(i, r) {
      C(e, i, r), t = !0;
    },
    p(i, r) {
      const l = {};
      r & /*badge*/
      1 && (l.badge = /*badge*/
      i[0]), r & /*roundVariant*/
      2048 && (l.variant = /*roundVariant*/
      i[11]), r & /*size*/
      4 && (l.size = /*size*/
      i[2] ?? 44), e.$set(l);
    },
    i(i) {
      t || (x(e.$$.fragment, i), t = !0);
    },
    o(i) {
      k(e.$$.fragment, i), t = !1;
    },
    d(i) {
      T(e, i);
    }
  };
}
function ln(n) {
  let e, t;
  return e = new Xe({
    props: {
      badge: (
        /*badge*/
        n[0]
      ),
      variant: (
        /*miniVariant*/
        n[12]
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
      )
    }
  }), {
    c() {
      P(e.$$.fragment);
    },
    m(i, r) {
      C(e, i, r), t = !0;
    },
    p(i, r) {
      const l = {};
      r & /*badge*/
      1 && (l.badge = /*badge*/
      i[0]), r & /*miniVariant*/
      4096 && (l.variant = /*miniVariant*/
      i[12]), r & /*fixed*/
      8 && (l.fixed = /*fixed*/
      i[3]), r & /*offsetPx*/
      16 && (l.offsetPx = /*offsetPx*/
      i[4]), r & /*expandDirection*/
      32 && (l.expandDirection = /*expandDirection*/
      i[5]), e.$set(l);
    },
    i(i) {
      t || (x(e.$$.fragment, i), t = !0);
    },
    o(i) {
      k(e.$$.fragment, i), t = !1;
    },
    d(i) {
      T(e, i);
    }
  };
}
function sn(n) {
  let e, t;
  return e = new Ve({
    props: {
      badge: (
        /*badge*/
        n[0]
      ),
      variant: (
        /*monoVariant*/
        n[13]
      )
    }
  }), {
    c() {
      P(e.$$.fragment);
    },
    m(i, r) {
      C(e, i, r), t = !0;
    },
    p(i, r) {
      const l = {};
      r & /*badge*/
      1 && (l.badge = /*badge*/
      i[0]), r & /*monoVariant*/
      8192 && (l.variant = /*monoVariant*/
      i[13]), e.$set(l);
    },
    i(i) {
      t || (x(e.$$.fragment, i), t = !0);
    },
    o(i) {
      k(e.$$.fragment, i), t = !1;
    },
    d(i) {
      T(e, i);
    }
  };
}
function an(n) {
  let e, t, i, r;
  const l = [sn, ln, rn, nn], s = [];
  function o(f, u) {
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
  return e = o(n), t = s[e] = l[e](n), {
    c() {
      t.c(), i = K();
    },
    m(f, u) {
      s[e].m(f, u), M(f, i, u), r = !0;
    },
    p(f, [u]) {
      let c = e;
      e = o(f), e === c ? s[e].p(f, u) : (B(), k(s[c], 1, 1, () => {
        s[c] = null;
      }), A(), t = s[e], t ? t.p(f, u) : (t = s[e] = l[e](f), t.c()), x(t, 1), t.m(i.parentNode, i));
    },
    i(f) {
      r || (x(t), r = !0);
    },
    o(f) {
      k(t), r = !1;
    },
    d(f) {
      f && j(i), s[e].d(f);
    }
  };
}
function on(n, e, t) {
  let i, r, l, s, { badge: o } = e, { type: f = "mono" } = e, { variant: u = void 0 } = e, { size: c = void 0 } = e, { fixed: b = !1 } = e, { offsetPx: _ = 16 } = e, { expandDirection: d = "right" } = e, { ringText: g = null } = e, { repeat: v = 2 } = e, { separator: z = " • " } = e, { sealFontScale: h = 0.12 } = e;
  return n.$$set = (p) => {
    "badge" in p && t(0, o = p.badge), "type" in p && t(1, f = p.type), "variant" in p && t(14, u = p.variant), "size" in p && t(2, c = p.size), "fixed" in p && t(3, b = p.fixed), "offsetPx" in p && t(4, _ = p.offsetPx), "expandDirection" in p && t(5, d = p.expandDirection), "ringText" in p && t(6, g = p.ringText), "repeat" in p && t(7, v = p.repeat), "separator" in p && t(8, z = p.separator), "sealFontScale" in p && t(9, h = p.sealFontScale);
  }, n.$$.update = () => {
    n.$$.dirty & /*variant*/
    16384 && t(13, i = u ?? "filled"), n.$$.dirty & /*variant*/
    16384 && t(12, r = u ?? "outlined"), n.$$.dirty & /*variant*/
    16384 && t(11, l = u ?? "solid"), n.$$.dirty & /*variant*/
    16384 && t(10, s = u ?? "outlined");
  }, [
    o,
    f,
    c,
    b,
    _,
    d,
    g,
    v,
    z,
    h,
    s,
    l,
    r,
    i,
    u
  ];
}
class He extends V {
  constructor(e) {
    super(), Y(this, e, on, an, L, {
      badge: 0,
      type: 1,
      variant: 14,
      size: 2,
      fixed: 3,
      offsetPx: 4,
      expandDirection: 5,
      ringText: 6,
      repeat: 7,
      separator: 8,
      sealFontScale: 9
    });
  }
  get badge() {
    return this.$$.ctx[0];
  }
  set badge(e) {
    this.$$set({ badge: e }), m();
  }
  get type() {
    return this.$$.ctx[1];
  }
  set type(e) {
    this.$$set({ type: e }), m();
  }
  get variant() {
    return this.$$.ctx[14];
  }
  set variant(e) {
    this.$$set({ variant: e }), m();
  }
  get size() {
    return this.$$.ctx[2];
  }
  set size(e) {
    this.$$set({ size: e }), m();
  }
  get fixed() {
    return this.$$.ctx[3];
  }
  set fixed(e) {
    this.$$set({ fixed: e }), m();
  }
  get offsetPx() {
    return this.$$.ctx[4];
  }
  set offsetPx(e) {
    this.$$set({ offsetPx: e }), m();
  }
  get expandDirection() {
    return this.$$.ctx[5];
  }
  set expandDirection(e) {
    this.$$set({ expandDirection: e }), m();
  }
  get ringText() {
    return this.$$.ctx[6];
  }
  set ringText(e) {
    this.$$set({ ringText: e }), m();
  }
  get repeat() {
    return this.$$.ctx[7];
  }
  set repeat(e) {
    this.$$set({ repeat: e }), m();
  }
  get separator() {
    return this.$$.ctx[8];
  }
  set separator(e) {
    this.$$set({ separator: e }), m();
  }
  get sealFontScale() {
    return this.$$.ctx[9];
  }
  set sealFontScale(e) {
    this.$$set({ sealFontScale: e }), m();
  }
}
Z(He, { badge: {}, type: {}, variant: {}, size: {}, fixed: { type: "Boolean" }, offsetPx: {}, expandDirection: {}, ringText: {}, repeat: {}, separator: {}, sealFontScale: {} }, [], [], !0);
function fn(n) {
  let e, t;
  return e = new He({
    props: {
      badge: (
        /*computedBadge*/
        n[10]
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
      ringText: (
        /*ringText*/
        n[6]
      ),
      repeat: (
        /*repeat*/
        n[7]
      ),
      separator: (
        /*separator*/
        n[8]
      ),
      sealFontScale: (
        /*sealFontScale*/
        n[9]
      )
    }
  }), {
    c() {
      P(e.$$.fragment);
    },
    m(i, r) {
      C(e, i, r), t = !0;
    },
    p(i, [r]) {
      const l = {};
      r & /*computedBadge*/
      1024 && (l.badge = /*computedBadge*/
      i[10]), r & /*type*/
      1 && (l.type = /*type*/
      i[0]), r & /*variant*/
      2 && (l.variant = /*variant*/
      i[1]), r & /*size*/
      4 && (l.size = /*size*/
      i[2]), r & /*fixed*/
      8 && (l.fixed = /*fixed*/
      i[3]), r & /*offsetPx*/
      16 && (l.offsetPx = /*offsetPx*/
      i[4]), r & /*expandDirection*/
      32 && (l.expandDirection = /*expandDirection*/
      i[5]), r & /*ringText*/
      64 && (l.ringText = /*ringText*/
      i[6]), r & /*repeat*/
      128 && (l.repeat = /*repeat*/
      i[7]), r & /*separator*/
      256 && (l.separator = /*separator*/
      i[8]), r & /*sealFontScale*/
      512 && (l.sealFontScale = /*sealFontScale*/
      i[9]), e.$set(l);
    },
    i(i) {
      t || (x(e.$$.fragment, i), t = !0);
    },
    o(i) {
      k(e.$$.fragment, i), t = !1;
    },
    d(i) {
      T(e, i);
    }
  };
}
const cn = "rgb(17, 24, 39)";
function un(n, e, t) {
  let i, { badge: r = null } = e, { label: l = null } = e, { color: s = null } = e, { icon: o = null } = e, { description: f = null } = e, { type: u = "mono" } = e, { variant: c = void 0 } = e, { size: b = void 0 } = e, { fixed: _ = !1 } = e, { offsetPx: d = 16 } = e, { expandDirection: g = "right" } = e, { ringText: v = null } = e, { repeat: z = 2 } = e, { separator: h = " • " } = e, { sealFontScale: p = 0.12 } = e;
  return n.$$set = ($) => {
    "badge" in $ && t(11, r = $.badge), "label" in $ && t(12, l = $.label), "color" in $ && t(13, s = $.color), "icon" in $ && t(14, o = $.icon), "description" in $ && t(15, f = $.description), "type" in $ && t(0, u = $.type), "variant" in $ && t(1, c = $.variant), "size" in $ && t(2, b = $.size), "fixed" in $ && t(3, _ = $.fixed), "offsetPx" in $ && t(4, d = $.offsetPx), "expandDirection" in $ && t(5, g = $.expandDirection), "ringText" in $ && t(6, v = $.ringText), "repeat" in $ && t(7, z = $.repeat), "separator" in $ && t(8, h = $.separator), "sealFontScale" in $ && t(9, p = $.sealFontScale);
  }, n.$$.update = () => {
    n.$$.dirty & /*badge, label, color, icon, description*/
    63488 && t(10, i = r ?? {
      label: (l ?? "").trim() || "—",
      color: (s ?? "").trim() || cn,
      icon: o ?? void 0,
      description: (f ?? "").trim() || void 0
    });
  }, [
    u,
    c,
    b,
    _,
    d,
    g,
    v,
    z,
    h,
    p,
    i,
    r,
    l,
    s,
    o,
    f
  ];
}
class Ue extends V {
  constructor(e) {
    super(), Y(this, e, un, fn, L, {
      badge: 11,
      label: 12,
      color: 13,
      icon: 14,
      description: 15,
      type: 0,
      variant: 1,
      size: 2,
      fixed: 3,
      offsetPx: 4,
      expandDirection: 5,
      ringText: 6,
      repeat: 7,
      separator: 8,
      sealFontScale: 9
    });
  }
  get badge() {
    return this.$$.ctx[11];
  }
  set badge(e) {
    this.$$set({ badge: e }), m();
  }
  get label() {
    return this.$$.ctx[12];
  }
  set label(e) {
    this.$$set({ label: e }), m();
  }
  get color() {
    return this.$$.ctx[13];
  }
  set color(e) {
    this.$$set({ color: e }), m();
  }
  get icon() {
    return this.$$.ctx[14];
  }
  set icon(e) {
    this.$$set({ icon: e }), m();
  }
  get description() {
    return this.$$.ctx[15];
  }
  set description(e) {
    this.$$set({ description: e }), m();
  }
  get type() {
    return this.$$.ctx[0];
  }
  set type(e) {
    this.$$set({ type: e }), m();
  }
  get variant() {
    return this.$$.ctx[1];
  }
  set variant(e) {
    this.$$set({ variant: e }), m();
  }
  get size() {
    return this.$$.ctx[2];
  }
  set size(e) {
    this.$$set({ size: e }), m();
  }
  get fixed() {
    return this.$$.ctx[3];
  }
  set fixed(e) {
    this.$$set({ fixed: e }), m();
  }
  get offsetPx() {
    return this.$$.ctx[4];
  }
  set offsetPx(e) {
    this.$$set({ offsetPx: e }), m();
  }
  get expandDirection() {
    return this.$$.ctx[5];
  }
  set expandDirection(e) {
    this.$$set({ expandDirection: e }), m();
  }
  get ringText() {
    return this.$$.ctx[6];
  }
  set ringText(e) {
    this.$$set({ ringText: e }), m();
  }
  get repeat() {
    return this.$$.ctx[7];
  }
  set repeat(e) {
    this.$$set({ repeat: e }), m();
  }
  get separator() {
    return this.$$.ctx[8];
  }
  set separator(e) {
    this.$$set({ separator: e }), m();
  }
  get sealFontScale() {
    return this.$$.ctx[9];
  }
  set sealFontScale(e) {
    this.$$set({ sealFontScale: e }), m();
  }
}
customElements.define("vis-badge", Z(Ue, { badge: { type: "Object" }, label: {}, color: {}, icon: {}, description: {}, type: {}, variant: {}, size: { type: "Number" }, fixed: { type: "Boolean" }, offsetPx: { type: "Number" }, expandDirection: {}, ringText: {}, repeat: { type: "Number" }, separator: {}, sealFontScale: { type: "Number" } }, [], [], !0));
if (!customElements.get("vis-badge")) {
  const n = Ue.element;
  customElements.define("vis-badge", n);
}
