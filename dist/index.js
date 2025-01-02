/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function tu(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const r of e.split(",")) t[r] = 1;
  return (r) => r in t;
}
const ot = process.env.NODE_ENV !== "production" ? Object.freeze({}) : {}, ru = process.env.NODE_ENV !== "production" ? Object.freeze([]) : [], Wr = () => {
}, nu = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), tt = Object.assign, ou = Object.prototype.hasOwnProperty, we = (e, t) => ou.call(e, t), ee = Array.isArray, Sr = (e) => An(e) === "[object Map]", yo = (e) => An(e) === "[object Set]", Bs = (e) => An(e) === "[object Date]", fe = (e) => typeof e == "function", at = (e) => typeof e == "string", It = (e) => typeof e == "symbol", Se = (e) => e !== null && typeof e == "object", iu = (e) => (Se(e) || fe(e)) && fe(e.then) && fe(e.catch), ml = Object.prototype.toString, An = (e) => ml.call(e), gl = (e) => An(e).slice(8, -1), vl = (e) => An(e) === "[object Object]", ws = (e) => at(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, bl = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (r) => t[r] || (t[r] = e(r));
}, wl = bl((e) => e.charAt(0).toUpperCase() + e.slice(1)), su = bl(
  (e) => e ? `on${wl(e)}` : ""
), ir = (e, t) => !Object.is(e, t), au = (e, ...t) => {
  for (let r = 0; r < e.length; r++)
    e[r](...t);
}, lu = (e, t, r, n = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: n,
    value: r
  });
}, es = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
};
let js;
const mo = () => js || (js = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function go(e) {
  if (ee(e)) {
    const t = {};
    for (let r = 0; r < e.length; r++) {
      const n = e[r], o = at(n) ? pu(n) : go(n);
      if (o)
        for (const s in o)
          t[s] = o[s];
    }
    return t;
  } else if (at(e) || Se(e))
    return e;
}
const cu = /;(?![^(]*\))/g, uu = /:([^]+)/, fu = /\/\*[^]*?\*\//g;
function pu(e) {
  const t = {};
  return e.replace(fu, "").split(cu).forEach((r) => {
    if (r) {
      const n = r.split(uu);
      n.length > 1 && (t[n[0].trim()] = n[1].trim());
    }
  }), t;
}
function zr(e) {
  let t = "";
  if (at(e))
    t = e;
  else if (ee(e))
    for (let r = 0; r < e.length; r++) {
      const n = zr(e[r]);
      n && (t += n + " ");
    }
  else if (Se(e))
    for (const r in e)
      e[r] && (t += r + " ");
  return t.trim();
}
function du(e, t) {
  if (e.length !== t.length) return !1;
  let r = !0;
  for (let n = 0; r && n < e.length; n++)
    r = vo(e[n], t[n]);
  return r;
}
function vo(e, t) {
  if (e === t) return !0;
  let r = Bs(e), n = Bs(t);
  if (r || n)
    return r && n ? e.getTime() === t.getTime() : !1;
  if (r = It(e), n = It(t), r || n)
    return e === t;
  if (r = ee(e), n = ee(t), r || n)
    return r && n ? du(e, t) : !1;
  if (r = Se(e), n = Se(t), r || n) {
    if (!r || !n)
      return !1;
    const o = Object.keys(e).length, s = Object.keys(t).length;
    if (o !== s)
      return !1;
    for (const a in e) {
      const l = e.hasOwnProperty(a), u = t.hasOwnProperty(a);
      if (l && !u || !l && u || !vo(e[a], t[a]))
        return !1;
    }
  }
  return String(e) === String(t);
}
function hu(e, t) {
  return e.findIndex((r) => vo(r, t));
}
const Sl = (e) => !!(e && e.__v_isRef === !0), Tt = (e) => at(e) ? e : e == null ? "" : ee(e) || Se(e) && (e.toString === ml || !fe(e.toString)) ? Sl(e) ? Tt(e.value) : JSON.stringify(e, _l, 2) : String(e), _l = (e, t) => Sl(t) ? _l(e, t.value) : Sr(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (r, [n, o], s) => (r[ei(n, s) + " =>"] = o, r),
    {}
  )
} : yo(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((r) => ei(r))
} : It(t) ? ei(t) : Se(t) && !ee(t) && !vl(t) ? String(t) : t, ei = (e, t = "") => {
  var r;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    It(e) ? `Symbol(${(r = e.description) != null ? r : t})` : e
  );
};
/**
* @vue/reactivity v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function zt(e, ...t) {
  console.warn(`[Vue warn] ${e}`, ...t);
}
let ie;
const ti = /* @__PURE__ */ new WeakSet();
class yu {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0;
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, ti.has(this) && (ti.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || Ol(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, Us(this), xl(this);
    const t = ie, r = wt;
    ie = this, wt = !0;
    try {
      return this.fn();
    } finally {
      process.env.NODE_ENV !== "production" && ie !== this && zt(
        "Active effect was not restored correctly - this is likely a Vue internal bug."
      ), Al(this), ie = t, wt = r, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        Es(t);
      this.deps = this.depsTail = void 0, Us(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? ti.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    ts(this) && this.run();
  }
  get dirty() {
    return ts(this);
  }
}
let El = 0, yn, mn;
function Ol(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = mn, mn = e;
    return;
  }
  e.next = yn, yn = e;
}
function Ss() {
  El++;
}
function _s() {
  if (--El > 0)
    return;
  if (mn) {
    let t = mn;
    for (mn = void 0; t; ) {
      const r = t.next;
      t.next = void 0, t.flags &= -9, t = r;
    }
  }
  let e;
  for (; yn; ) {
    let t = yn;
    for (yn = void 0; t; ) {
      const r = t.next;
      if (t.next = void 0, t.flags &= -9, t.flags & 1)
        try {
          t.trigger();
        } catch (n) {
          e || (e = n);
        }
      t = r;
    }
  }
  if (e) throw e;
}
function xl(e) {
  for (let t = e.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function Al(e) {
  let t, r = e.depsTail, n = r;
  for (; n; ) {
    const o = n.prevDep;
    n.version === -1 ? (n === r && (r = o), Es(n), mu(n)) : t = n, n.dep.activeLink = n.prevActiveLink, n.prevActiveLink = void 0, n = o;
  }
  e.deps = t, e.depsTail = r;
}
function ts(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (Pl(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function Pl(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === bn))
    return;
  e.globalVersion = bn;
  const t = e.dep;
  if (e.flags |= 2, t.version > 0 && !e.isSSR && e.deps && !ts(e)) {
    e.flags &= -3;
    return;
  }
  const r = ie, n = wt;
  ie = e, wt = !0;
  try {
    xl(e);
    const o = e.fn(e._value);
    (t.version === 0 || ir(o, e._value)) && (e._value = o, t.version++);
  } catch (o) {
    throw t.version++, o;
  } finally {
    ie = r, wt = n, Al(e), e.flags &= -3;
  }
}
function Es(e, t = !1) {
  const { dep: r, prevSub: n, nextSub: o } = e;
  if (n && (n.nextSub = o, e.prevSub = void 0), o && (o.prevSub = n, e.nextSub = void 0), process.env.NODE_ENV !== "production" && r.subsHead === e && (r.subsHead = o), r.subs === e && (r.subs = n, !n && r.computed)) {
    r.computed.flags &= -5;
    for (let s = r.computed.deps; s; s = s.nextDep)
      Es(s, !0);
  }
  !t && !--r.sc && r.map && r.map.delete(r.key);
}
function mu(e) {
  const { prevDep: t, nextDep: r } = e;
  t && (t.nextDep = r, e.prevDep = void 0), r && (r.prevDep = t, e.nextDep = void 0);
}
let wt = !0;
const Rl = [];
function Pn() {
  Rl.push(wt), wt = !1;
}
function Rn() {
  const e = Rl.pop();
  wt = e === void 0 ? !0 : e;
}
function Us(e) {
  const { cleanup: t } = e;
  if (e.cleanup = void 0, t) {
    const r = ie;
    ie = void 0;
    try {
      t();
    } finally {
      ie = r;
    }
  }
}
let bn = 0;
class gu {
  constructor(t, r) {
    this.sub = t, this.dep = r, this.version = r.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class Os {
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, process.env.NODE_ENV !== "production" && (this.subsHead = void 0);
  }
  track(t) {
    if (!ie || !wt || ie === this.computed)
      return;
    let r = this.activeLink;
    if (r === void 0 || r.sub !== ie)
      r = this.activeLink = new gu(ie, this), ie.deps ? (r.prevDep = ie.depsTail, ie.depsTail.nextDep = r, ie.depsTail = r) : ie.deps = ie.depsTail = r, Tl(r);
    else if (r.version === -1 && (r.version = this.version, r.nextDep)) {
      const n = r.nextDep;
      n.prevDep = r.prevDep, r.prevDep && (r.prevDep.nextDep = n), r.prevDep = ie.depsTail, r.nextDep = void 0, ie.depsTail.nextDep = r, ie.depsTail = r, ie.deps === r && (ie.deps = n);
    }
    return process.env.NODE_ENV !== "production" && ie.onTrack && ie.onTrack(
      tt(
        {
          effect: ie
        },
        t
      )
    ), r;
  }
  trigger(t) {
    this.version++, bn++, this.notify(t);
  }
  notify(t) {
    Ss();
    try {
      if (process.env.NODE_ENV !== "production")
        for (let r = this.subsHead; r; r = r.nextSub)
          r.sub.onTrigger && !(r.sub.flags & 8) && r.sub.onTrigger(
            tt(
              {
                effect: r.sub
              },
              t
            )
          );
      for (let r = this.subs; r; r = r.prevSub)
        r.sub.notify() && r.sub.dep.notify();
    } finally {
      _s();
    }
  }
}
function Tl(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let n = t.deps; n; n = n.nextDep)
        Tl(n);
    }
    const r = e.dep.subs;
    r !== e && (e.prevSub = r, r && (r.nextSub = e)), process.env.NODE_ENV !== "production" && e.dep.subsHead === void 0 && (e.dep.subsHead = e), e.dep.subs = e;
  }
}
const rs = /* @__PURE__ */ new WeakMap(), _r = Symbol(
  process.env.NODE_ENV !== "production" ? "Object iterate" : ""
), ns = Symbol(
  process.env.NODE_ENV !== "production" ? "Map keys iterate" : ""
), wn = Symbol(
  process.env.NODE_ENV !== "production" ? "Array iterate" : ""
);
function Re(e, t, r) {
  if (wt && ie) {
    let n = rs.get(e);
    n || rs.set(e, n = /* @__PURE__ */ new Map());
    let o = n.get(r);
    o || (n.set(r, o = new Os()), o.map = n, o.key = r), process.env.NODE_ENV !== "production" ? o.track({
      target: e,
      type: t,
      key: r
    }) : o.track();
  }
}
function er(e, t, r, n, o, s) {
  const a = rs.get(e);
  if (!a) {
    bn++;
    return;
  }
  const l = (u) => {
    u && (process.env.NODE_ENV !== "production" ? u.trigger({
      target: e,
      type: t,
      key: r,
      newValue: n,
      oldValue: o,
      oldTarget: s
    }) : u.trigger());
  };
  if (Ss(), t === "clear")
    a.forEach(l);
  else {
    const u = ee(e), h = u && ws(r);
    if (u && r === "length") {
      const m = Number(n);
      a.forEach((p, E) => {
        (E === "length" || E === wn || !It(E) && E >= m) && l(p);
      });
    } else
      switch ((r !== void 0 || a.has(void 0)) && l(a.get(r)), h && l(a.get(wn)), t) {
        case "add":
          u ? h && l(a.get("length")) : (l(a.get(_r)), Sr(e) && l(a.get(ns)));
          break;
        case "delete":
          u || (l(a.get(_r)), Sr(e) && l(a.get(ns)));
          break;
        case "set":
          Sr(e) && l(a.get(_r));
          break;
      }
  }
  _s();
}
function Ur(e) {
  const t = K(e);
  return t === e ? t : (Re(t, "iterate", wn), Ge(e) ? t : t.map(Le));
}
function bo(e) {
  return Re(e = K(e), "iterate", wn), e;
}
const vu = {
  __proto__: null,
  [Symbol.iterator]() {
    return ri(this, Symbol.iterator, Le);
  },
  concat(...e) {
    return Ur(this).concat(
      ...e.map((t) => ee(t) ? Ur(t) : t)
    );
  },
  entries() {
    return ri(this, "entries", (e) => (e[1] = Le(e[1]), e));
  },
  every(e, t) {
    return jt(this, "every", e, t, void 0, arguments);
  },
  filter(e, t) {
    return jt(this, "filter", e, t, (r) => r.map(Le), arguments);
  },
  find(e, t) {
    return jt(this, "find", e, t, Le, arguments);
  },
  findIndex(e, t) {
    return jt(this, "findIndex", e, t, void 0, arguments);
  },
  findLast(e, t) {
    return jt(this, "findLast", e, t, Le, arguments);
  },
  findLastIndex(e, t) {
    return jt(this, "findLastIndex", e, t, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(e, t) {
    return jt(this, "forEach", e, t, void 0, arguments);
  },
  includes(...e) {
    return ni(this, "includes", e);
  },
  indexOf(...e) {
    return ni(this, "indexOf", e);
  },
  join(e) {
    return Ur(this).join(e);
  },
  // keys() iterator only reads `length`, no optimisation required
  lastIndexOf(...e) {
    return ni(this, "lastIndexOf", e);
  },
  map(e, t) {
    return jt(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return cn(this, "pop");
  },
  push(...e) {
    return cn(this, "push", e);
  },
  reduce(e, ...t) {
    return Vs(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return Vs(this, "reduceRight", e, t);
  },
  shift() {
    return cn(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, t) {
    return jt(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return cn(this, "splice", e);
  },
  toReversed() {
    return Ur(this).toReversed();
  },
  toSorted(e) {
    return Ur(this).toSorted(e);
  },
  toSpliced(...e) {
    return Ur(this).toSpliced(...e);
  },
  unshift(...e) {
    return cn(this, "unshift", e);
  },
  values() {
    return ri(this, "values", Le);
  }
};
function ri(e, t, r) {
  const n = bo(e), o = n[t]();
  return n !== e && !Ge(e) && (o._next = o.next, o.next = () => {
    const s = o._next();
    return s.value && (s.value = r(s.value)), s;
  }), o;
}
const bu = Array.prototype;
function jt(e, t, r, n, o, s) {
  const a = bo(e), l = a !== e && !Ge(e), u = a[t];
  if (u !== bu[t]) {
    const p = u.apply(e, s);
    return l ? Le(p) : p;
  }
  let h = r;
  a !== e && (l ? h = function(p, E) {
    return r.call(this, Le(p), E, e);
  } : r.length > 2 && (h = function(p, E) {
    return r.call(this, p, E, e);
  }));
  const m = u.call(a, h, n);
  return l && o ? o(m) : m;
}
function Vs(e, t, r, n) {
  const o = bo(e);
  let s = r;
  return o !== e && (Ge(e) ? r.length > 3 && (s = function(a, l, u) {
    return r.call(this, a, l, u, e);
  }) : s = function(a, l, u) {
    return r.call(this, a, Le(l), u, e);
  }), o[t](s, ...n);
}
function ni(e, t, r) {
  const n = K(e);
  Re(n, "iterate", wn);
  const o = n[t](...r);
  return (o === -1 || o === !1) && eo(r[0]) ? (r[0] = K(r[0]), n[t](...r)) : o;
}
function cn(e, t, r = []) {
  Pn(), Ss();
  const n = K(e)[t].apply(e, r);
  return _s(), Rn(), n;
}
const wu = /* @__PURE__ */ tu("__proto__,__v_isRef,__isVue"), Cl = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(It)
);
function Su(e) {
  It(e) || (e = String(e));
  const t = K(this);
  return Re(t, "has", e), t.hasOwnProperty(e);
}
class Nl {
  constructor(t = !1, r = !1) {
    this._isReadonly = t, this._isShallow = r;
  }
  get(t, r, n) {
    if (r === "__v_skip") return t.__v_skip;
    const o = this._isReadonly, s = this._isShallow;
    if (r === "__v_isReactive")
      return !o;
    if (r === "__v_isReadonly")
      return o;
    if (r === "__v_isShallow")
      return s;
    if (r === "__v_raw")
      return n === (o ? s ? ql : Fl : s ? Nu : Dl).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(n) ? t : void 0;
    const a = ee(t);
    if (!o) {
      let u;
      if (a && (u = vu[r]))
        return u;
      if (r === "hasOwnProperty")
        return Su;
    }
    const l = Reflect.get(
      t,
      r,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      Je(t) ? t : n
    );
    return (It(r) ? Cl.has(r) : wu(r)) || (o || Re(t, "get", r), s) ? l : Je(l) ? a && ws(r) ? l : l.value : Se(l) ? o ? $l(l) : Ml(l) : l;
  }
}
class _u extends Nl {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, r, n, o) {
    let s = t[r];
    if (!this._isShallow) {
      const u = Kt(s);
      if (!Ge(n) && !Kt(n) && (s = K(s), n = K(n)), !ee(t) && Je(s) && !Je(n))
        return u ? !1 : (s.value = n, !0);
    }
    const a = ee(t) && ws(r) ? Number(r) < t.length : we(t, r), l = Reflect.set(
      t,
      r,
      n,
      Je(t) ? t : o
    );
    return t === K(o) && (a ? ir(n, s) && er(t, "set", r, n, s) : er(t, "add", r, n)), l;
  }
  deleteProperty(t, r) {
    const n = we(t, r), o = t[r], s = Reflect.deleteProperty(t, r);
    return s && n && er(t, "delete", r, void 0, o), s;
  }
  has(t, r) {
    const n = Reflect.has(t, r);
    return (!It(r) || !Cl.has(r)) && Re(t, "has", r), n;
  }
  ownKeys(t) {
    return Re(
      t,
      "iterate",
      ee(t) ? "length" : _r
    ), Reflect.ownKeys(t);
  }
}
class Il extends Nl {
  constructor(t = !1) {
    super(!0, t);
  }
  set(t, r) {
    return process.env.NODE_ENV !== "production" && zt(
      `Set operation on key "${String(r)}" failed: target is readonly.`,
      t
    ), !0;
  }
  deleteProperty(t, r) {
    return process.env.NODE_ENV !== "production" && zt(
      `Delete operation on key "${String(r)}" failed: target is readonly.`,
      t
    ), !0;
  }
}
const Eu = /* @__PURE__ */ new _u(), Ou = /* @__PURE__ */ new Il(), xu = /* @__PURE__ */ new Il(!0), os = (e) => e, Un = (e) => Reflect.getPrototypeOf(e);
function Au(e, t, r) {
  return function(...n) {
    const o = this.__v_raw, s = K(o), a = Sr(s), l = e === "entries" || e === Symbol.iterator && a, u = e === "keys" && a, h = o[e](...n), m = r ? os : t ? is : Le;
    return !t && Re(
      s,
      "iterate",
      u ? ns : _r
    ), {
      // iterator protocol
      next() {
        const { value: p, done: E } = h.next();
        return E ? { value: p, done: E } : {
          value: l ? [m(p[0]), m(p[1])] : m(p),
          done: E
        };
      },
      // iterable protocol
      [Symbol.iterator]() {
        return this;
      }
    };
  };
}
function Vn(e) {
  return function(...t) {
    if (process.env.NODE_ENV !== "production") {
      const r = t[0] ? `on key "${t[0]}" ` : "";
      zt(
        `${wl(e)} operation ${r}failed: target is readonly.`,
        K(this)
      );
    }
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function Pu(e, t) {
  const r = {
    get(o) {
      const s = this.__v_raw, a = K(s), l = K(o);
      e || (ir(o, l) && Re(a, "get", o), Re(a, "get", l));
      const { has: u } = Un(a), h = t ? os : e ? is : Le;
      if (u.call(a, o))
        return h(s.get(o));
      if (u.call(a, l))
        return h(s.get(l));
      s !== a && s.get(o);
    },
    get size() {
      const o = this.__v_raw;
      return !e && Re(K(o), "iterate", _r), Reflect.get(o, "size", o);
    },
    has(o) {
      const s = this.__v_raw, a = K(s), l = K(o);
      return e || (ir(o, l) && Re(a, "has", o), Re(a, "has", l)), o === l ? s.has(o) : s.has(o) || s.has(l);
    },
    forEach(o, s) {
      const a = this, l = a.__v_raw, u = K(l), h = t ? os : e ? is : Le;
      return !e && Re(u, "iterate", _r), l.forEach((m, p) => o.call(s, h(m), h(p), a));
    }
  };
  return tt(
    r,
    e ? {
      add: Vn("add"),
      set: Vn("set"),
      delete: Vn("delete"),
      clear: Vn("clear")
    } : {
      add(o) {
        !t && !Ge(o) && !Kt(o) && (o = K(o));
        const s = K(this);
        return Un(s).has.call(s, o) || (s.add(o), er(s, "add", o, o)), this;
      },
      set(o, s) {
        !t && !Ge(s) && !Kt(s) && (s = K(s));
        const a = K(this), { has: l, get: u } = Un(a);
        let h = l.call(a, o);
        h ? process.env.NODE_ENV !== "production" && Hs(a, l, o) : (o = K(o), h = l.call(a, o));
        const m = u.call(a, o);
        return a.set(o, s), h ? ir(s, m) && er(a, "set", o, s, m) : er(a, "add", o, s), this;
      },
      delete(o) {
        const s = K(this), { has: a, get: l } = Un(s);
        let u = a.call(s, o);
        u ? process.env.NODE_ENV !== "production" && Hs(s, a, o) : (o = K(o), u = a.call(s, o));
        const h = l ? l.call(s, o) : void 0, m = s.delete(o);
        return u && er(s, "delete", o, void 0, h), m;
      },
      clear() {
        const o = K(this), s = o.size !== 0, a = process.env.NODE_ENV !== "production" ? Sr(o) ? new Map(o) : new Set(o) : void 0, l = o.clear();
        return s && er(
          o,
          "clear",
          void 0,
          void 0,
          a
        ), l;
      }
    }
  ), [
    "keys",
    "values",
    "entries",
    Symbol.iterator
  ].forEach((o) => {
    r[o] = Au(o, e, t);
  }), r;
}
function xs(e, t) {
  const r = Pu(e, t);
  return (n, o, s) => o === "__v_isReactive" ? !e : o === "__v_isReadonly" ? e : o === "__v_raw" ? n : Reflect.get(
    we(r, o) && o in n ? r : n,
    o,
    s
  );
}
const Ru = {
  get: /* @__PURE__ */ xs(!1, !1)
}, Tu = {
  get: /* @__PURE__ */ xs(!0, !1)
}, Cu = {
  get: /* @__PURE__ */ xs(!0, !0)
};
function Hs(e, t, r) {
  const n = K(r);
  if (n !== r && t.call(e, n)) {
    const o = gl(e);
    zt(
      `Reactive ${o} contains both the raw and reactive versions of the same object${o === "Map" ? " as keys" : ""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`
    );
  }
}
const Dl = /* @__PURE__ */ new WeakMap(), Nu = /* @__PURE__ */ new WeakMap(), Fl = /* @__PURE__ */ new WeakMap(), ql = /* @__PURE__ */ new WeakMap();
function Iu(e) {
  switch (e) {
    case "Object":
    case "Array":
      return 1;
    case "Map":
    case "Set":
    case "WeakMap":
    case "WeakSet":
      return 2;
    default:
      return 0;
  }
}
function Du(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : Iu(gl(e));
}
function Ml(e) {
  return Kt(e) ? e : As(
    e,
    !1,
    Eu,
    Ru,
    Dl
  );
}
function $l(e) {
  return As(
    e,
    !0,
    Ou,
    Tu,
    Fl
  );
}
function Hn(e) {
  return As(
    e,
    !0,
    xu,
    Cu,
    ql
  );
}
function As(e, t, r, n, o) {
  if (!Se(e))
    return process.env.NODE_ENV !== "production" && zt(
      `value cannot be made ${t ? "readonly" : "reactive"}: ${String(
        e
      )}`
    ), e;
  if (e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const s = o.get(e);
  if (s)
    return s;
  const a = Du(e);
  if (a === 0)
    return e;
  const l = new Proxy(
    e,
    a === 2 ? n : r
  );
  return o.set(e, l), l;
}
function Er(e) {
  return Kt(e) ? Er(e.__v_raw) : !!(e && e.__v_isReactive);
}
function Kt(e) {
  return !!(e && e.__v_isReadonly);
}
function Ge(e) {
  return !!(e && e.__v_isShallow);
}
function eo(e) {
  return e ? !!e.__v_raw : !1;
}
function K(e) {
  const t = e && e.__v_raw;
  return t ? K(t) : e;
}
function Fu(e) {
  return !we(e, "__v_skip") && Object.isExtensible(e) && lu(e, "__v_skip", !0), e;
}
const Le = (e) => Se(e) ? Ml(e) : e, is = (e) => Se(e) ? $l(e) : e;
function Je(e) {
  return e ? e.__v_isRef === !0 : !1;
}
function Ct(e) {
  return Ll(e, !1);
}
function qu(e) {
  return Ll(e, !0);
}
function Ll(e, t) {
  return Je(e) ? e : new Mu(e, t);
}
class Mu {
  constructor(t, r) {
    this.dep = new Os(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = r ? t : K(t), this._value = r ? t : Le(t), this.__v_isShallow = r;
  }
  get value() {
    return process.env.NODE_ENV !== "production" ? this.dep.track({
      target: this,
      type: "get",
      key: "value"
    }) : this.dep.track(), this._value;
  }
  set value(t) {
    const r = this._rawValue, n = this.__v_isShallow || Ge(t) || Kt(t);
    t = n ? t : K(t), ir(t, r) && (this._rawValue = t, this._value = n ? t : Le(t), process.env.NODE_ENV !== "production" ? this.dep.trigger({
      target: this,
      type: "set",
      key: "value",
      newValue: t,
      oldValue: r
    }) : this.dep.trigger());
  }
}
function ss(e) {
  return Je(e) ? e.value : e;
}
const $u = {
  get: (e, t, r) => t === "__v_raw" ? e : ss(Reflect.get(e, t, r)),
  set: (e, t, r, n) => {
    const o = e[t];
    return Je(o) && !Je(r) ? (o.value = r, !0) : Reflect.set(e, t, r, n);
  }
};
function Lu(e) {
  return Er(e) ? e : new Proxy(e, $u);
}
class ku {
  constructor(t, r, n) {
    this.fn = t, this.setter = r, this._value = void 0, this.dep = new Os(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = bn - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !r, this.isSSR = n;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    ie !== this)
      return Ol(this, !0), !0;
    process.env.NODE_ENV;
  }
  get value() {
    const t = process.env.NODE_ENV !== "production" ? this.dep.track({
      target: this,
      type: "get",
      key: "value"
    }) : this.dep.track();
    return Pl(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter ? this.setter(t) : process.env.NODE_ENV !== "production" && zt("Write operation failed: computed value is readonly");
  }
}
function Bu(e, t, r = !1) {
  let n, o;
  fe(e) ? n = e : (n = e.get, o = e.set);
  const s = new ku(n, o, r);
  return process.env.NODE_ENV, s;
}
const Wn = {}, to = /* @__PURE__ */ new WeakMap();
let vr;
function ju(e, t = !1, r = vr) {
  if (r) {
    let n = to.get(r);
    n || to.set(r, n = []), n.push(e);
  } else process.env.NODE_ENV !== "production" && !t && zt(
    "onWatcherCleanup() was called when there was no active watcher to associate with."
  );
}
function Uu(e, t, r = ot) {
  const { immediate: n, deep: o, once: s, scheduler: a, augmentJob: l, call: u } = r, h = (A) => {
    (r.onWarn || zt)(
      "Invalid watch source: ",
      A,
      "A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types."
    );
  }, m = (A) => o ? A : Ge(A) || o === !1 || o === 0 ? Ht(A, 1) : Ht(A);
  let p, E, v, b, S = !1, d = !1;
  if (Je(e) ? (E = () => e.value, S = Ge(e)) : Er(e) ? (E = () => m(e), S = !0) : ee(e) ? (d = !0, S = e.some((A) => Er(A) || Ge(A)), E = () => e.map((A) => {
    if (Je(A))
      return A.value;
    if (Er(A))
      return m(A);
    if (fe(A))
      return u ? u(A, 2) : A();
    process.env.NODE_ENV !== "production" && h(A);
  })) : fe(e) ? t ? E = u ? () => u(e, 2) : e : E = () => {
    if (v) {
      Pn();
      try {
        v();
      } finally {
        Rn();
      }
    }
    const A = vr;
    vr = p;
    try {
      return u ? u(e, 3, [b]) : e(b);
    } finally {
      vr = A;
    }
  } : (E = Wr, process.env.NODE_ENV !== "production" && h(e)), t && o) {
    const A = E, R = o === !0 ? 1 / 0 : o;
    E = () => Ht(A(), R);
  }
  const f = () => {
    p.stop();
  };
  if (s && t) {
    const A = t;
    t = (...R) => {
      A(...R), f();
    };
  }
  let g = d ? new Array(e.length).fill(Wn) : Wn;
  const _ = (A) => {
    if (!(!(p.flags & 1) || !p.dirty && !A))
      if (t) {
        const R = p.run();
        if (o || S || (d ? R.some((T, F) => ir(T, g[F])) : ir(R, g))) {
          v && v();
          const T = vr;
          vr = p;
          try {
            const F = [
              R,
              // pass undefined as the old value when it's changed for the first time
              g === Wn ? void 0 : d && g[0] === Wn ? [] : g,
              b
            ];
            u ? u(t, 3, F) : (
              // @ts-expect-error
              t(...F)
            ), g = R;
          } finally {
            vr = T;
          }
        }
      } else
        p.run();
  };
  return l && l(_), p = new yu(E), p.scheduler = a ? () => a(_, !1) : _, b = (A) => ju(A, !1, p), v = p.onStop = () => {
    const A = to.get(p);
    if (A) {
      if (u)
        u(A, 4);
      else
        for (const R of A) R();
      to.delete(p);
    }
  }, process.env.NODE_ENV !== "production" && (p.onTrack = r.onTrack, p.onTrigger = r.onTrigger), t ? n ? _(!0) : g = p.run() : a ? a(_.bind(null, !0), !0) : p.run(), f.pause = p.pause.bind(p), f.resume = p.resume.bind(p), f.stop = f, f;
}
function Ht(e, t = 1 / 0, r) {
  if (t <= 0 || !Se(e) || e.__v_skip || (r = r || /* @__PURE__ */ new Set(), r.has(e)))
    return e;
  if (r.add(e), t--, Je(e))
    Ht(e.value, t, r);
  else if (ee(e))
    for (let n = 0; n < e.length; n++)
      Ht(e[n], t, r);
  else if (yo(e) || Sr(e))
    e.forEach((n) => {
      Ht(n, t, r);
    });
  else if (vl(e)) {
    for (const n in e)
      Ht(e[n], t, r);
    for (const n of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, n) && Ht(e[n], t, r);
  }
  return e;
}
/**
* @vue/runtime-core v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
const Or = [];
function Vu(e) {
  Or.push(e);
}
function Hu() {
  Or.pop();
}
let oi = !1;
function ae(e, ...t) {
  if (oi) return;
  oi = !0, Pn();
  const r = Or.length ? Or[Or.length - 1].component : null, n = r && r.appContext.config.warnHandler, o = Wu();
  if (n)
    wo(
      n,
      r,
      11,
      [
        // eslint-disable-next-line no-restricted-syntax
        e + t.map((s) => {
          var a, l;
          return (l = (a = s.toString) == null ? void 0 : a.call(s)) != null ? l : JSON.stringify(s);
        }).join(""),
        r && r.proxy,
        o.map(
          ({ vnode: s }) => `at <${ac(r, s.type)}>`
        ).join(`
`),
        o
      ]
    );
  else {
    const s = [`[Vue warn]: ${e}`, ...t];
    o.length && s.push(`
`, ...zu(o)), console.warn(...s);
  }
  Rn(), oi = !1;
}
function Wu() {
  let e = Or[Or.length - 1];
  if (!e)
    return [];
  const t = [];
  for (; e; ) {
    const r = t[0];
    r && r.vnode === e ? r.recurseCount++ : t.push({
      vnode: e,
      recurseCount: 0
    });
    const n = e.component && e.component.parent;
    e = n && n.vnode;
  }
  return t;
}
function zu(e) {
  const t = [];
  return e.forEach((r, n) => {
    t.push(...n === 0 ? [] : [`
`], ...Ku(r));
  }), t;
}
function Ku({ vnode: e, recurseCount: t }) {
  const r = t > 0 ? `... (${t} recursive calls)` : "", n = e.component ? e.component.parent == null : !1, o = ` at <${ac(
    e.component,
    e.type,
    n
  )}`, s = ">" + r;
  return e.props ? [o, ...Gu(e.props), s] : [o + s];
}
function Gu(e) {
  const t = [], r = Object.keys(e);
  return r.slice(0, 3).forEach((n) => {
    t.push(...kl(n, e[n]));
  }), r.length > 3 && t.push(" ..."), t;
}
function kl(e, t, r) {
  return at(t) ? (t = JSON.stringify(t), r ? t : [`${e}=${t}`]) : typeof t == "number" || typeof t == "boolean" || t == null ? r ? t : [`${e}=${t}`] : Je(t) ? (t = kl(e, K(t.value), !0), r ? t : [`${e}=Ref<`, t, ">"]) : fe(t) ? [`${e}=fn${t.name ? `<${t.name}>` : ""}`] : (t = K(t), r ? t : [`${e}=`, t]);
}
const Ps = {
  sp: "serverPrefetch hook",
  bc: "beforeCreate hook",
  c: "created hook",
  bm: "beforeMount hook",
  m: "mounted hook",
  bu: "beforeUpdate hook",
  u: "updated",
  bum: "beforeUnmount hook",
  um: "unmounted hook",
  a: "activated hook",
  da: "deactivated hook",
  ec: "errorCaptured hook",
  rtc: "renderTracked hook",
  rtg: "renderTriggered hook",
  0: "setup function",
  1: "render function",
  2: "watcher getter",
  3: "watcher callback",
  4: "watcher cleanup function",
  5: "native event handler",
  6: "component event handler",
  7: "vnode hook",
  8: "directive hook",
  9: "transition hook",
  10: "app errorHandler",
  11: "app warnHandler",
  12: "ref function",
  13: "async component loader",
  14: "scheduler flush",
  15: "component update",
  16: "app unmount cleanup function"
};
function wo(e, t, r, n) {
  try {
    return n ? e(...n) : e();
  } catch (o) {
    Ts(o, t, r);
  }
}
function Rs(e, t, r, n) {
  if (fe(e)) {
    const o = wo(e, t, r, n);
    return o && iu(o) && o.catch((s) => {
      Ts(s, t, r);
    }), o;
  }
  if (ee(e)) {
    const o = [];
    for (let s = 0; s < e.length; s++)
      o.push(Rs(e[s], t, r, n));
    return o;
  } else process.env.NODE_ENV !== "production" && ae(
    `Invalid value type passed to callWithAsyncErrorHandling(): ${typeof e}`
  );
}
function Ts(e, t, r, n = !0) {
  const o = t ? t.vnode : null, { errorHandler: s, throwUnhandledErrorInProduction: a } = t && t.appContext.config || ot;
  if (t) {
    let l = t.parent;
    const u = t.proxy, h = process.env.NODE_ENV !== "production" ? Ps[r] : `https://vuejs.org/error-reference/#runtime-${r}`;
    for (; l; ) {
      const m = l.ec;
      if (m) {
        for (let p = 0; p < m.length; p++)
          if (m[p](e, u, h) === !1)
            return;
      }
      l = l.parent;
    }
    if (s) {
      Pn(), wo(s, null, 10, [
        e,
        u,
        h
      ]), Rn();
      return;
    }
  }
  Ju(e, r, o, n, a);
}
function Ju(e, t, r, n = !0, o = !1) {
  if (process.env.NODE_ENV !== "production") {
    const s = Ps[t];
    if (r && Vu(r), ae(`Unhandled error${s ? ` during execution of ${s}` : ""}`), r && Hu(), n)
      throw e;
    console.error(e);
  } else {
    if (o)
      throw e;
    console.error(e);
  }
}
const ht = [];
let Ut = -1;
const Kr = [];
let Zt = null, Vr = 0;
const Bl = /* @__PURE__ */ Promise.resolve();
let ro = null;
const Qu = 100;
function jl(e) {
  const t = ro || Bl;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function Xu(e) {
  let t = Ut + 1, r = ht.length;
  for (; t < r; ) {
    const n = t + r >>> 1, o = ht[n], s = Sn(o);
    s < e || s === e && o.flags & 2 ? t = n + 1 : r = n;
  }
  return t;
}
function Cs(e) {
  if (!(e.flags & 1)) {
    const t = Sn(e), r = ht[ht.length - 1];
    !r || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= Sn(r) ? ht.push(e) : ht.splice(Xu(t), 0, e), e.flags |= 1, Ul();
  }
}
function Ul() {
  ro || (ro = Bl.then(Hl));
}
function Vl(e) {
  ee(e) ? Kr.push(...e) : Zt && e.id === -1 ? Zt.splice(Vr + 1, 0, e) : e.flags & 1 || (Kr.push(e), e.flags |= 1), Ul();
}
function Yu(e) {
  if (Kr.length) {
    const t = [...new Set(Kr)].sort(
      (r, n) => Sn(r) - Sn(n)
    );
    if (Kr.length = 0, Zt) {
      Zt.push(...t);
      return;
    }
    for (Zt = t, process.env.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map()), Vr = 0; Vr < Zt.length; Vr++) {
      const r = Zt[Vr];
      process.env.NODE_ENV !== "production" && Wl(e, r) || (r.flags & 4 && (r.flags &= -2), r.flags & 8 || r(), r.flags &= -2);
    }
    Zt = null, Vr = 0;
  }
}
const Sn = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function Hl(e) {
  process.env.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map());
  const t = process.env.NODE_ENV !== "production" ? (r) => Wl(e, r) : Wr;
  try {
    for (Ut = 0; Ut < ht.length; Ut++) {
      const r = ht[Ut];
      if (r && !(r.flags & 8)) {
        if (process.env.NODE_ENV !== "production" && t(r))
          continue;
        r.flags & 4 && (r.flags &= -2), wo(
          r,
          r.i,
          r.i ? 15 : 14
        ), r.flags & 4 || (r.flags &= -2);
      }
    }
  } finally {
    for (; Ut < ht.length; Ut++) {
      const r = ht[Ut];
      r && (r.flags &= -2);
    }
    Ut = -1, ht.length = 0, Yu(e), ro = null, (ht.length || Kr.length) && Hl(e);
  }
}
function Wl(e, t) {
  const r = e.get(t) || 0;
  if (r > Qu) {
    const n = t.i, o = n && sc(n.type);
    return Ts(
      `Maximum recursive updates exceeded${o ? ` in component <${o}>` : ""}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`,
      null,
      10
    ), !0;
  }
  return e.set(t, r + 1), !1;
}
const ii = /* @__PURE__ */ new Map();
process.env.NODE_ENV !== "production" && (mo().__VUE_HMR_RUNTIME__ = {
  createRecord: si(Zu),
  rerender: si(ef),
  reload: si(tf)
});
const no = /* @__PURE__ */ new Map();
function Zu(e, t) {
  return no.has(e) ? !1 : (no.set(e, {
    initialDef: oo(t),
    instances: /* @__PURE__ */ new Set()
  }), !0);
}
function oo(e) {
  return lc(e) ? e.__vccOpts : e;
}
function ef(e, t) {
  const r = no.get(e);
  r && (r.initialDef.render = t, [...r.instances].forEach((n) => {
    t && (n.render = t, oo(n.type).render = t), n.renderCache = [], n.update();
  }));
}
function tf(e, t) {
  const r = no.get(e);
  if (!r) return;
  t = oo(t), Ws(r.initialDef, t);
  const n = [...r.instances];
  for (let o = 0; o < n.length; o++) {
    const s = n[o], a = oo(s.type);
    let l = ii.get(a);
    l || (a !== r.initialDef && Ws(a, t), ii.set(a, l = /* @__PURE__ */ new Set())), l.add(s), s.appContext.propsCache.delete(s.type), s.appContext.emitsCache.delete(s.type), s.appContext.optionsCache.delete(s.type), s.ceReload ? (l.add(s), s.ceReload(t.styles), l.delete(s)) : s.parent ? Cs(() => {
      s.parent.update(), l.delete(s);
    }) : s.appContext.reload ? s.appContext.reload() : typeof window < "u" ? window.location.reload() : console.warn(
      "[HMR] Root or manually mounted instance modified. Full reload required."
    ), s.root.ce && s !== s.root && s.root.ce._removeChildStyle(a);
  }
  Vl(() => {
    ii.clear();
  });
}
function Ws(e, t) {
  tt(e, t);
  for (const r in e)
    r !== "__file" && !(r in t) && delete e[r];
}
function si(e) {
  return (t, r) => {
    try {
      return e(t, r);
    } catch (n) {
      console.error(n), console.warn(
        "[HMR] Something went wrong during Vue component hot-reload. Full reload required."
      );
    }
  };
}
let tr, fn = [], as = !1;
function rf(e, ...t) {
  tr ? tr.emit(e, ...t) : as || fn.push({ event: e, args: t });
}
function zl(e, t) {
  var r, n;
  tr = e, tr ? (tr.enabled = !0, fn.forEach(({ event: o, args: s }) => tr.emit(o, ...s)), fn = []) : /* handle late devtools injection - only do this if we are in an actual */ /* browser environment to avoid the timer handle stalling test runner exit */ /* (#4815) */ typeof window < "u" && // some envs mock window but not fully
  window.HTMLElement && // also exclude jsdom
  // eslint-disable-next-line no-restricted-syntax
  !((n = (r = window.navigator) == null ? void 0 : r.userAgent) != null && n.includes("jsdom")) ? ((t.__VUE_DEVTOOLS_HOOK_REPLAY__ = t.__VUE_DEVTOOLS_HOOK_REPLAY__ || []).push((s) => {
    zl(s, t);
  }), setTimeout(() => {
    tr || (t.__VUE_DEVTOOLS_HOOK_REPLAY__ = null, as = !0, fn = []);
  }, 3e3)) : (as = !0, fn = []);
}
const nf = /* @__PURE__ */ of(
  "component:updated"
  /* COMPONENT_UPDATED */
);
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function of(e) {
  return (t) => {
    rf(
      e,
      t.appContext.app,
      t.uid,
      t.parent ? t.parent.uid : void 0,
      t
    );
  };
}
let xe = null, Kl = null;
function zs(e) {
  const t = xe;
  return xe = e, Kl = e && e.type.__scopeId || null, t;
}
function Ks(e, t = xe, r) {
  if (!t || e._n)
    return e;
  const n = (...o) => {
    n._d && Zs(-1);
    const s = zs(t);
    let a;
    try {
      a = e(...o);
    } finally {
      zs(s), n._d && Zs(1);
    }
    return process.env.NODE_ENV !== "production" && nf(t), a;
  };
  return n._n = !0, n._c = !0, n._d = !0, n;
}
function Gs(e, t) {
  if (xe === null)
    return process.env.NODE_ENV !== "production" && ae("withDirectives can only be used inside render functions."), e;
  const r = ic(xe), n = e.dirs || (e.dirs = []);
  for (let o = 0; o < t.length; o++) {
    let [s, a, l, u = ot] = t[o];
    s && (fe(s) && (s = {
      mounted: s,
      updated: s
    }), s.deep && Ht(a), n.push({
      dir: s,
      instance: r,
      value: a,
      oldValue: void 0,
      arg: l,
      modifiers: u
    }));
  }
  return e;
}
const sf = (e) => e.__isTeleport;
function Gl(e, t) {
  e.shapeFlag & 6 && e.component ? (e.transition = t, Gl(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function Jl(e, t) {
  return fe(e) ? (
    // #8236: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    tt({ name: e.name }, t, { setup: e })
  ) : e;
}
mo().requestIdleCallback;
mo().cancelIdleCallback;
const af = (e) => !!e.type.__asyncLoader;
function lf(e, t, r = Pr, n = !1) {
  if (r) {
    const o = r[e] || (r[e] = []), s = t.__weh || (t.__weh = (...a) => {
      Pn();
      const l = oc(r), u = Rs(t, r, e, a);
      return l(), Rn(), u;
    });
    return n ? o.unshift(s) : o.push(s), s;
  } else if (process.env.NODE_ENV !== "production") {
    const o = su(Ps[e].replace(/ hook$/, ""));
    ae(
      `${o} is called when there is no active component instance to be associated with. Lifecycle injection APIs can only be used during execution of setup(). If you are using async setup(), make sure to register lifecycle hooks before the first await statement.`
    );
  }
}
const Ql = (e) => (t, r = Pr) => {
  (!On || e === "sp") && lf(e, (...n) => t(...n), r);
}, cf = Ql("m"), uf = Ql("um"), ff = Symbol.for("v-ndc");
function mr(e, t, r, n) {
  let o;
  const s = r, a = ee(e);
  if (a || at(e)) {
    const l = a && Er(e);
    let u = !1;
    l && (u = !Ge(e), e = bo(e)), o = new Array(e.length);
    for (let h = 0, m = e.length; h < m; h++)
      o[h] = t(
        u ? Le(e[h]) : e[h],
        h,
        void 0,
        s
      );
  } else if (typeof e == "number") {
    process.env.NODE_ENV !== "production" && !Number.isInteger(e) && ae(`The v-for range expect an integer value but got ${e}.`), o = new Array(e);
    for (let l = 0; l < e; l++)
      o[l] = t(l + 1, l, void 0, s);
  } else if (Se(e))
    if (e[Symbol.iterator])
      o = Array.from(
        e,
        (l, u) => t(l, u, void 0, s)
      );
    else {
      const l = Object.keys(e);
      o = new Array(l.length);
      for (let u = 0, h = l.length; u < h; u++) {
        const m = l[u];
        o[u] = t(e[m], m, u, s);
      }
    }
  else
    o = [];
  return o;
}
function ai(e, t, r = {}, n, o) {
  if (xe.ce || xe.parent && af(xe.parent) && xe.parent.ce)
    return t !== "default" && (r.name = t), Q(), En(
      De,
      null,
      [rr("slot", r, n && n())],
      64
    );
  let s = e[t];
  process.env.NODE_ENV !== "production" && s && s.length > 1 && (ae(
    "SSR-optimized slot function detected in a non-SSR-optimized render function. You need to mark this component with $dynamic-slots in the parent template."
  ), s = () => []), s && s._c && (s._d = !1), Q();
  const a = s && Xl(s(r)), l = r.key || // slot content array of a dynamic conditional slot may have a branch
  // key attached in the `createSlots` helper, respect that
  a && a.key, u = En(
    De,
    {
      key: (l && !It(l) ? l : `_${t}`) + // #7256 force differentiate fallback content from actual content
      (!a && n ? "_fb" : "")
    },
    a || (n ? n() : []),
    a && e._ === 1 ? 64 : -2
  );
  return s && s._c && (s._d = !0), u;
}
function Xl(e) {
  return e.some((t) => ao(t) ? !(t.type === so || t.type === De && !Xl(t.children)) : !0) ? e : null;
}
const ls = (e) => e ? qf(e) ? ic(e) : ls(e.parent) : null, gn = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ tt(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => process.env.NODE_ENV !== "production" ? Hn(e.props) : e.props,
    $attrs: (e) => process.env.NODE_ENV !== "production" ? Hn(e.attrs) : e.attrs,
    $slots: (e) => process.env.NODE_ENV !== "production" ? Hn(e.slots) : e.slots,
    $refs: (e) => process.env.NODE_ENV !== "production" ? Hn(e.refs) : e.refs,
    $parent: (e) => ls(e.parent),
    $root: (e) => ls(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => hf(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      Cs(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = jl.bind(e.proxy)),
    $watch: (e) => xf.bind(e)
  })
), pf = (e) => e === "_" || e === "$", li = (e, t) => e !== ot && !e.__isScriptSetup && we(e, t), df = {
  get({ _: e }, t) {
    if (t === "__v_skip")
      return !0;
    const { ctx: r, setupState: n, data: o, props: s, accessCache: a, type: l, appContext: u } = e;
    if (process.env.NODE_ENV !== "production" && t === "__isVue")
      return !0;
    let h;
    if (t[0] !== "$") {
      const v = a[t];
      if (v !== void 0)
        switch (v) {
          case 1:
            return n[t];
          case 2:
            return o[t];
          case 4:
            return r[t];
          case 3:
            return s[t];
        }
      else {
        if (li(n, t))
          return a[t] = 1, n[t];
        if (o !== ot && we(o, t))
          return a[t] = 2, o[t];
        if (
          // only cache other properties when instance has declared (thus stable)
          // props
          (h = e.propsOptions[0]) && we(h, t)
        )
          return a[t] = 3, s[t];
        if (r !== ot && we(r, t))
          return a[t] = 4, r[t];
        a[t] = 0;
      }
    }
    const m = gn[t];
    let p, E;
    if (m)
      return t === "$attrs" ? (Re(e.attrs, "get", ""), process.env.NODE_ENV !== "production" && void 0) : process.env.NODE_ENV !== "production" && t === "$slots" && Re(e, "get", t), m(e);
    if (
      // css module (injected by vue-loader)
      (p = l.__cssModules) && (p = p[t])
    )
      return p;
    if (r !== ot && we(r, t))
      return a[t] = 4, r[t];
    if (
      // global properties
      E = u.config.globalProperties, we(E, t)
    )
      return E[t];
    process.env.NODE_ENV !== "production" && xe && (!at(t) || // #1091 avoid internal isRef/isVNode checks on component instance leading
    // to infinite warning loop
    t.indexOf("__v") !== 0) && (o !== ot && pf(t[0]) && we(o, t) ? ae(
      `Property ${JSON.stringify(
        t
      )} must be accessed via $data because it starts with a reserved character ("$" or "_") and is not proxied on the render context.`
    ) : e === xe && ae(
      `Property ${JSON.stringify(t)} was accessed during render but is not defined on instance.`
    ));
  },
  set({ _: e }, t, r) {
    const { data: n, setupState: o, ctx: s } = e;
    return li(o, t) ? (o[t] = r, !0) : process.env.NODE_ENV !== "production" && o.__isScriptSetup && we(o, t) ? (ae(`Cannot mutate <script setup> binding "${t}" from Options API.`), !1) : n !== ot && we(n, t) ? (n[t] = r, !0) : we(e.props, t) ? (process.env.NODE_ENV !== "production" && ae(`Attempting to mutate prop "${t}". Props are readonly.`), !1) : t[0] === "$" && t.slice(1) in e ? (process.env.NODE_ENV !== "production" && ae(
      `Attempting to mutate public property "${t}". Properties starting with $ are reserved and readonly.`
    ), !1) : (process.env.NODE_ENV !== "production" && t in e.appContext.config.globalProperties ? Object.defineProperty(s, t, {
      enumerable: !0,
      configurable: !0,
      value: r
    }) : s[t] = r, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: r, ctx: n, appContext: o, propsOptions: s }
  }, a) {
    let l;
    return !!r[a] || e !== ot && we(e, a) || li(t, a) || (l = s[0]) && we(l, a) || we(n, a) || we(gn, a) || we(o.config.globalProperties, a);
  },
  defineProperty(e, t, r) {
    return r.get != null ? e._.accessCache[t] = 0 : we(r, "value") && this.set(e, t, r.value, null), Reflect.defineProperty(e, t, r);
  }
};
process.env.NODE_ENV !== "production" && (df.ownKeys = (e) => (ae(
  "Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead."
), Reflect.ownKeys(e)));
function Js(e) {
  return ee(e) ? e.reduce(
    (t, r) => (t[r] = null, t),
    {}
  ) : e;
}
function hf(e) {
  const t = e.type, { mixins: r, extends: n } = t, {
    mixins: o,
    optionsCache: s,
    config: { optionMergeStrategies: a }
  } = e.appContext, l = s.get(t);
  let u;
  return l ? u = l : !o.length && !r && !n ? u = t : (u = {}, o.length && o.forEach(
    (h) => io(u, h, a, !0)
  ), io(u, t, a)), Se(t) && s.set(t, u), u;
}
function io(e, t, r, n = !1) {
  const { mixins: o, extends: s } = t;
  s && io(e, s, r, !0), o && o.forEach(
    (a) => io(e, a, r, !0)
  );
  for (const a in t)
    if (n && a === "expose")
      process.env.NODE_ENV !== "production" && ae(
        '"expose" option is ignored when declared in mixins or extends. It should only be declared in the base component itself.'
      );
    else {
      const l = yf[a] || r && r[a];
      e[a] = l ? l(e[a], t[a]) : t[a];
    }
  return e;
}
const yf = {
  data: Qs,
  props: Ys,
  emits: Ys,
  // objects
  methods: pn,
  computed: pn,
  // lifecycle
  beforeCreate: ze,
  created: ze,
  beforeMount: ze,
  mounted: ze,
  beforeUpdate: ze,
  updated: ze,
  beforeDestroy: ze,
  beforeUnmount: ze,
  destroyed: ze,
  unmounted: ze,
  activated: ze,
  deactivated: ze,
  errorCaptured: ze,
  serverPrefetch: ze,
  // assets
  components: pn,
  directives: pn,
  // watch
  watch: gf,
  // provide / inject
  provide: Qs,
  inject: mf
};
function Qs(e, t) {
  return t ? e ? function() {
    return tt(
      fe(e) ? e.call(this, this) : e,
      fe(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function mf(e, t) {
  return pn(Xs(e), Xs(t));
}
function Xs(e) {
  if (ee(e)) {
    const t = {};
    for (let r = 0; r < e.length; r++)
      t[e[r]] = e[r];
    return t;
  }
  return e;
}
function ze(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function pn(e, t) {
  return e ? tt(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function Ys(e, t) {
  return e ? ee(e) && ee(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : tt(
    /* @__PURE__ */ Object.create(null),
    Js(e),
    Js(t ?? {})
  ) : t;
}
function gf(e, t) {
  if (!e) return t;
  if (!t) return e;
  const r = tt(/* @__PURE__ */ Object.create(null), e);
  for (const n in t)
    r[n] = ze(e[n], t[n]);
  return r;
}
let vf = null;
function bf(e, t, r = !1) {
  const n = Pr || xe;
  if (n || vf) {
    const o = n ? n.parent == null ? n.vnode.appContext && n.vnode.appContext.provides : n.parent.provides : void 0;
    if (o && e in o)
      return o[e];
    if (arguments.length > 1)
      return r && fe(t) ? t.call(n && n.proxy) : t;
    process.env.NODE_ENV !== "production" && ae(`injection "${String(e)}" not found.`);
  } else process.env.NODE_ENV !== "production" && ae("inject() can only be used inside setup() or functional components.");
}
const wf = {}, Yl = (e) => Object.getPrototypeOf(e) === wf, Sf = Rf, _f = Symbol.for("v-scx"), Ef = () => {
  {
    const e = bf(_f);
    return e || process.env.NODE_ENV !== "production" && ae(
      "Server rendering context not provided. Make sure to only call useSSRContext() conditionally in the server build."
    ), e;
  }
};
function Of(e, t, r) {
  return process.env.NODE_ENV !== "production" && !fe(t) && ae(
    "`watch(fn, options?)` signature has been moved to a separate API. Use `watchEffect(fn, options?)` instead. `watch` now only supports `watch(source, cb, options?) signature."
  ), Zl(e, t, r);
}
function Zl(e, t, r = ot) {
  const { immediate: n, deep: o, flush: s, once: a } = r;
  process.env.NODE_ENV !== "production" && !t && (n !== void 0 && ae(
    'watch() "immediate" option is only respected when using the watch(source, callback, options?) signature.'
  ), o !== void 0 && ae(
    'watch() "deep" option is only respected when using the watch(source, callback, options?) signature.'
  ), a !== void 0 && ae(
    'watch() "once" option is only respected when using the watch(source, callback, options?) signature.'
  ));
  const l = tt({}, r);
  process.env.NODE_ENV !== "production" && (l.onWarn = ae);
  const u = t && n || !t && s !== "post";
  let h;
  if (On) {
    if (s === "sync") {
      const v = Ef();
      h = v.__watcherHandles || (v.__watcherHandles = []);
    } else if (!u) {
      const v = () => {
      };
      return v.stop = Wr, v.resume = Wr, v.pause = Wr, v;
    }
  }
  const m = Pr;
  l.call = (v, b, S) => Rs(v, m, b, S);
  let p = !1;
  s === "post" ? l.scheduler = (v) => {
    Sf(v, m && m.suspense);
  } : s !== "sync" && (p = !0, l.scheduler = (v, b) => {
    b ? v() : Cs(v);
  }), l.augmentJob = (v) => {
    t && (v.flags |= 4), p && (v.flags |= 2, m && (v.id = m.uid, v.i = m));
  };
  const E = Uu(e, t, l);
  return On && (h ? h.push(E) : u && E()), E;
}
function xf(e, t, r) {
  const n = this.proxy, o = at(e) ? e.includes(".") ? Af(n, e) : () => n[e] : e.bind(n, n);
  let s;
  fe(t) ? s = t : (s = t.handler, r = t);
  const a = oc(this), l = Zl(o, s.bind(n), r);
  return a(), l;
}
function Af(e, t) {
  const r = t.split(".");
  return () => {
    let n = e;
    for (let o = 0; o < r.length && n; o++)
      n = n[r[o]];
    return n;
  };
}
const Pf = (e) => e.__isSuspense;
function Rf(e, t) {
  t && t.pendingBranch ? ee(e) ? t.effects.push(...e) : t.effects.push(e) : Vl(e);
}
const De = Symbol.for("v-fgt"), Tf = Symbol.for("v-txt"), so = Symbol.for("v-cmt"), Kn = [];
let it = null;
function Q(e = !1) {
  Kn.push(it = e ? null : []);
}
function Cf() {
  Kn.pop(), it = Kn[Kn.length - 1] || null;
}
let _n = 1;
function Zs(e, t = !1) {
  _n += e, e < 0 && it && t && (it.hasOnce = !0);
}
function ec(e) {
  return e.dynamicChildren = _n > 0 ? it || ru : null, Cf(), _n > 0 && it && it.push(e), e;
}
function se(e, t, r, n, o, s) {
  return ec(
    q(
      e,
      t,
      r,
      n,
      o,
      s,
      !0
    )
  );
}
function En(e, t, r, n, o) {
  return ec(
    rr(
      e,
      t,
      r,
      n,
      o,
      !0
    )
  );
}
function ao(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
const Nf = (...e) => rc(
  ...e
), tc = ({ key: e }) => e ?? null, Gn = ({
  ref: e,
  ref_key: t,
  ref_for: r
}) => (typeof e == "number" && (e = "" + e), e != null ? at(e) || Je(e) || fe(e) ? { i: xe, r: e, k: t, f: !!r } : e : null);
function q(e, t = null, r = null, n = 0, o = null, s = e === De ? 0 : 1, a = !1, l = !1) {
  const u = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && tc(t),
    ref: t && Gn(t),
    scopeId: Kl,
    slotScopeIds: null,
    children: r,
    component: null,
    suspense: null,
    ssContent: null,
    ssFallback: null,
    dirs: null,
    transition: null,
    el: null,
    anchor: null,
    target: null,
    targetStart: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag: s,
    patchFlag: n,
    dynamicProps: o,
    dynamicChildren: null,
    appContext: null,
    ctx: xe
  };
  return l ? (Ns(u, r), s & 128 && e.normalize(u)) : r && (u.shapeFlag |= at(r) ? 8 : 16), process.env.NODE_ENV !== "production" && u.key !== u.key && ae("VNode created with invalid key (NaN). VNode type:", u.type), _n > 0 && // avoid a block node from tracking itself
  !a && // has current parent block
  it && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (u.patchFlag > 0 || s & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  u.patchFlag !== 32 && it.push(u), u;
}
const rr = process.env.NODE_ENV !== "production" ? Nf : rc;
function rc(e, t = null, r = null, n = 0, o = null, s = !1) {
  if ((!e || e === ff) && (process.env.NODE_ENV !== "production" && !e && ae(`Invalid vnode type when creating vnode: ${e}.`), e = so), ao(e)) {
    const l = lo(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return r && Ns(l, r), _n > 0 && !s && it && (l.shapeFlag & 6 ? it[it.indexOf(e)] = l : it.push(l)), l.patchFlag = -2, l;
  }
  if (lc(e) && (e = e.__vccOpts), t) {
    t = If(t);
    let { class: l, style: u } = t;
    l && !at(l) && (t.class = zr(l)), Se(u) && (eo(u) && !ee(u) && (u = tt({}, u)), t.style = go(u));
  }
  const a = at(e) ? 1 : Pf(e) ? 128 : sf(e) ? 64 : Se(e) ? 4 : fe(e) ? 2 : 0;
  return process.env.NODE_ENV !== "production" && a & 4 && eo(e) && (e = K(e), ae(
    "Vue received a Component that was made a reactive object. This can lead to unnecessary performance overhead and should be avoided by marking the component with `markRaw` or using `shallowRef` instead of `ref`.",
    `
Component that was made reactive: `,
    e
  )), q(
    e,
    t,
    r,
    n,
    o,
    a,
    s,
    !0
  );
}
function If(e) {
  return e ? eo(e) || Yl(e) ? tt({}, e) : e : null;
}
function lo(e, t, r = !1, n = !1) {
  const { props: o, ref: s, patchFlag: a, children: l, transition: u } = e, h = t ? Df(o || {}, t) : o, m = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: h,
    key: h && tc(h),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      r && s ? ee(s) ? s.concat(Gn(t)) : [s, Gn(t)] : Gn(t)
    ) : s,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: process.env.NODE_ENV !== "production" && a === -1 && ee(l) ? l.map(nc) : l,
    target: e.target,
    targetStart: e.targetStart,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    // if the vnode is cloned with extra props, we can no longer assume its
    // existing patch flag to be reliable and need to add the FULL_PROPS flag.
    // note: preserve flag for fragments since they use the flag for children
    // fast paths only.
    patchFlag: t && e.type !== De ? a === -1 ? 16 : a | 16 : a,
    dynamicProps: e.dynamicProps,
    dynamicChildren: e.dynamicChildren,
    appContext: e.appContext,
    dirs: e.dirs,
    transition: u,
    // These should technically only be non-null on mounted VNodes. However,
    // they *should* be copied for kept-alive vnodes. So we just always copy
    // them since them being non-null during a mount doesn't affect the logic as
    // they will simply be overwritten.
    component: e.component,
    suspense: e.suspense,
    ssContent: e.ssContent && lo(e.ssContent),
    ssFallback: e.ssFallback && lo(e.ssFallback),
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
  return u && n && Gl(
    m,
    u.clone(m)
  ), m;
}
function nc(e) {
  const t = lo(e);
  return ee(e.children) && (t.children = e.children.map(nc)), t;
}
function Vt(e = " ", t = 0) {
  return rr(Tf, null, e, t);
}
function ea(e = "", t = !1) {
  return t ? (Q(), En(so, null, e)) : rr(so, null, e);
}
function Ns(e, t) {
  let r = 0;
  const { shapeFlag: n } = e;
  if (t == null)
    t = null;
  else if (ee(t))
    r = 16;
  else if (typeof t == "object")
    if (n & 65) {
      const o = t.default;
      o && (o._c && (o._d = !1), Ns(e, o()), o._c && (o._d = !0));
      return;
    } else {
      r = 32;
      const o = t._;
      !o && !Yl(t) ? t._ctx = xe : o === 3 && xe && (xe.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else fe(t) ? (t = { default: t, _ctx: xe }, r = 32) : (t = String(t), n & 64 ? (r = 16, t = [Vt(t)]) : r = 8);
  e.children = t, e.shapeFlag |= r;
}
function Df(...e) {
  const t = {};
  for (let r = 0; r < e.length; r++) {
    const n = e[r];
    for (const o in n)
      if (o === "class")
        t.class !== n.class && (t.class = zr([t.class, n.class]));
      else if (o === "style")
        t.style = go([t.style, n.style]);
      else if (nu(o)) {
        const s = t[o], a = n[o];
        a && s !== a && !(ee(s) && s.includes(a)) && (t[o] = s ? [].concat(s, a) : a);
      } else o !== "" && (t[o] = n[o]);
  }
  return t;
}
let Pr = null;
const Ff = () => Pr || xe;
let cs;
{
  const e = mo(), t = (r, n) => {
    let o;
    return (o = e[r]) || (o = e[r] = []), o.push(n), (s) => {
      o.length > 1 ? o.forEach((a) => a(s)) : o[0](s);
    };
  };
  cs = t(
    "__VUE_INSTANCE_SETTERS__",
    (r) => Pr = r
  ), t(
    "__VUE_SSR_SETTERS__",
    (r) => On = r
  );
}
const oc = (e) => {
  const t = Pr;
  return cs(e), e.scope.on(), () => {
    e.scope.off(), cs(t);
  };
};
function qf(e) {
  return e.vnode.shapeFlag & 4;
}
let On = !1;
process.env.NODE_ENV;
function ic(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(Lu(Fu(e.exposed)), {
    get(t, r) {
      if (r in t)
        return t[r];
      if (r in gn)
        return gn[r](e);
    },
    has(t, r) {
      return r in t || r in gn;
    }
  })) : e.proxy;
}
const Mf = /(?:^|[-_])(\w)/g, $f = (e) => e.replace(Mf, (t) => t.toUpperCase()).replace(/[-_]/g, "");
function sc(e, t = !0) {
  return fe(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function ac(e, t, r = !1) {
  let n = sc(t);
  if (!n && t.__file) {
    const o = t.__file.match(/([^/\\]+)\.\w+$/);
    o && (n = o[1]);
  }
  if (!n && e && e.parent) {
    const o = (s) => {
      for (const a in s)
        if (s[a] === t)
          return a;
    };
    n = o(
      e.components || e.parent.type.components
    ) || o(e.appContext.components);
  }
  return n ? $f(n) : r ? "App" : "Anonymous";
}
function lc(e) {
  return fe(e) && "__vccOpts" in e;
}
const Wt = (e, t) => {
  const r = Bu(e, t, On);
  if (process.env.NODE_ENV !== "production") {
    const n = Ff();
    n && n.appContext.config.warnRecursiveComputed && (r._warnRecursive = !0);
  }
  return r;
};
function Lf(e, t, r) {
  const n = arguments.length;
  return n === 2 ? Se(t) && !ee(t) ? ao(t) ? rr(e, null, [t]) : rr(e, t) : rr(e, null, t) : (n > 3 ? r = Array.prototype.slice.call(arguments, 2) : n === 3 && ao(r) && (r = [r]), rr(e, t, r));
}
function kf() {
  if (process.env.NODE_ENV === "production" || typeof window > "u")
    return;
  const e = { style: "color:#3ba776" }, t = { style: "color:#1677ff" }, r = { style: "color:#f5222d" }, n = { style: "color:#eb2f96" }, o = {
    __vue_custom_formatter: !0,
    header(p) {
      return Se(p) ? p.__isVue ? ["div", e, "VueInstance"] : Je(p) ? [
        "div",
        {},
        ["span", e, m(p)],
        "<",
        // avoid debugger accessing value affecting behavior
        l("_value" in p ? p._value : p),
        ">"
      ] : Er(p) ? [
        "div",
        {},
        ["span", e, Ge(p) ? "ShallowReactive" : "Reactive"],
        "<",
        l(p),
        `>${Kt(p) ? " (readonly)" : ""}`
      ] : Kt(p) ? [
        "div",
        {},
        ["span", e, Ge(p) ? "ShallowReadonly" : "Readonly"],
        "<",
        l(p),
        ">"
      ] : null : null;
    },
    hasBody(p) {
      return p && p.__isVue;
    },
    body(p) {
      if (p && p.__isVue)
        return [
          "div",
          {},
          ...s(p.$)
        ];
    }
  };
  function s(p) {
    const E = [];
    p.type.props && p.props && E.push(a("props", K(p.props))), p.setupState !== ot && E.push(a("setup", p.setupState)), p.data !== ot && E.push(a("data", K(p.data)));
    const v = u(p, "computed");
    v && E.push(a("computed", v));
    const b = u(p, "inject");
    return b && E.push(a("injected", b)), E.push([
      "div",
      {},
      [
        "span",
        {
          style: n.style + ";opacity:0.66"
        },
        "$ (internal): "
      ],
      ["object", { object: p }]
    ]), E;
  }
  function a(p, E) {
    return E = tt({}, E), Object.keys(E).length ? [
      "div",
      { style: "line-height:1.25em;margin-bottom:0.6em" },
      [
        "div",
        {
          style: "color:#476582"
        },
        p
      ],
      [
        "div",
        {
          style: "padding-left:1.25em"
        },
        ...Object.keys(E).map((v) => [
          "div",
          {},
          ["span", n, v + ": "],
          l(E[v], !1)
        ])
      ]
    ] : ["span", {}];
  }
  function l(p, E = !0) {
    return typeof p == "number" ? ["span", t, p] : typeof p == "string" ? ["span", r, JSON.stringify(p)] : typeof p == "boolean" ? ["span", n, p] : Se(p) ? ["object", { object: E ? K(p) : p }] : ["span", r, String(p)];
  }
  function u(p, E) {
    const v = p.type;
    if (fe(v))
      return;
    const b = {};
    for (const S in p.ctx)
      h(v, S, E) && (b[S] = p.ctx[S]);
    return b;
  }
  function h(p, E, v) {
    const b = p[v];
    if (ee(b) && b.includes(E) || Se(b) && E in b || p.extends && h(p.extends, E, v) || p.mixins && p.mixins.some((S) => h(S, E, v)))
      return !0;
  }
  function m(p) {
    return Ge(p) ? "ShallowRef" : p.effect ? "ComputedRef" : "Ref";
  }
  window.devtoolsFormatters ? window.devtoolsFormatters.push(o) : window.devtoolsFormatters = [o];
}
const cc = process.env.NODE_ENV !== "production" ? ae : Wr;
process.env.NODE_ENV;
process.env.NODE_ENV;
/**
* @vue/runtime-dom v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let Bf;
const ta = typeof window < "u" && window.trustedTypes;
if (ta)
  try {
    Bf = /* @__PURE__ */ ta.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch (e) {
    process.env.NODE_ENV !== "production" && cc(`Error creating trusted types policy: ${e}`);
  }
process.env.NODE_ENV;
Symbol(process.env.NODE_ENV !== "production" ? "CSS_VAR_TEXT" : "");
function Hr(e, t, r, n) {
  e.addEventListener(t, r, n);
}
const co = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return ee(t) ? (r) => au(t, r) : t;
};
function jf(e) {
  e.target.composing = !0;
}
function ra(e) {
  const t = e.target;
  t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
const Gr = Symbol("_assign"), Uf = {
  created(e, { modifiers: { lazy: t, trim: r, number: n } }, o) {
    e[Gr] = co(o);
    const s = n || o.props && o.props.type === "number";
    Hr(e, t ? "change" : "input", (a) => {
      if (a.target.composing) return;
      let l = e.value;
      r && (l = l.trim()), s && (l = es(l)), e[Gr](l);
    }), r && Hr(e, "change", () => {
      e.value = e.value.trim();
    }), t || (Hr(e, "compositionstart", jf), Hr(e, "compositionend", ra), Hr(e, "change", ra));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(e, { value: t }) {
    e.value = t ?? "";
  },
  beforeUpdate(e, { value: t, oldValue: r, modifiers: { lazy: n, trim: o, number: s } }, a) {
    if (e[Gr] = co(a), e.composing) return;
    const l = (s || e.type === "number") && !/^0\d/.test(e.value) ? es(e.value) : e.value, u = t ?? "";
    l !== u && (document.activeElement === e && e.type !== "range" && (n && t === r || o && e.value.trim() === u) || (e.value = u));
  }
}, Vf = {
  // <select multiple> value need to be deep traversed
  deep: !0,
  created(e, { value: t, modifiers: { number: r } }, n) {
    const o = yo(t);
    Hr(e, "change", () => {
      const s = Array.prototype.filter.call(e.options, (a) => a.selected).map(
        (a) => r ? es(uo(a)) : uo(a)
      );
      e[Gr](
        e.multiple ? o ? new Set(s) : s : s[0]
      ), e._assigning = !0, jl(() => {
        e._assigning = !1;
      });
    }), e[Gr] = co(n);
  },
  // set value in mounted & updated because <select> relies on its children
  // <option>s.
  mounted(e, { value: t }) {
    na(e, t);
  },
  beforeUpdate(e, t, r) {
    e[Gr] = co(r);
  },
  updated(e, { value: t }) {
    e._assigning || na(e, t);
  }
};
function na(e, t) {
  const r = e.multiple, n = ee(t);
  if (r && !n && !yo(t)) {
    process.env.NODE_ENV !== "production" && cc(
      `<select multiple v-model> expects an Array or Set value for its binding, but got ${Object.prototype.toString.call(t).slice(8, -1)}.`
    );
    return;
  }
  for (let o = 0, s = e.options.length; o < s; o++) {
    const a = e.options[o], l = uo(a);
    if (r)
      if (n) {
        const u = typeof l;
        u === "string" || u === "number" ? a.selected = t.some((h) => String(h) === String(l)) : a.selected = hu(t, l) > -1;
      } else
        a.selected = t.has(l);
    else if (vo(uo(a), t)) {
      e.selectedIndex !== o && (e.selectedIndex = o);
      return;
    }
  }
  !r && e.selectedIndex !== -1 && (e.selectedIndex = -1);
}
function uo(e) {
  return "_value" in e ? e._value : e.value;
}
/**
* vue v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function Hf() {
  kf();
}
process.env.NODE_ENV !== "production" && Hf();
var Nt = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Wf(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
function zf(e) {
  if (e.__esModule) return e;
  var t = e.default;
  if (typeof t == "function") {
    var r = function n() {
      return this instanceof n ? Reflect.construct(t, arguments, this.constructor) : t.apply(this, arguments);
    };
    r.prototype = t.prototype;
  } else r = {};
  return Object.defineProperty(r, "__esModule", { value: !0 }), Object.keys(e).forEach(function(n) {
    var o = Object.getOwnPropertyDescriptor(e, n);
    Object.defineProperty(r, n, o.get ? o : {
      enumerable: !0,
      get: function() {
        return e[n];
      }
    });
  }), r;
}
var ci, oa;
function Kf() {
  if (oa) return ci;
  oa = 1;
  var e = function(g) {
    return t(g) && !r(g);
  };
  function t(f) {
    return !!f && typeof f == "object";
  }
  function r(f) {
    var g = Object.prototype.toString.call(f);
    return g === "[object RegExp]" || g === "[object Date]" || s(f);
  }
  var n = typeof Symbol == "function" && Symbol.for, o = n ? Symbol.for("react.element") : 60103;
  function s(f) {
    return f.$$typeof === o;
  }
  function a(f) {
    return Array.isArray(f) ? [] : {};
  }
  function l(f, g) {
    return g.clone !== !1 && g.isMergeableObject(f) ? S(a(f), f, g) : f;
  }
  function u(f, g, _) {
    return f.concat(g).map(function(A) {
      return l(A, _);
    });
  }
  function h(f, g) {
    if (!g.customMerge)
      return S;
    var _ = g.customMerge(f);
    return typeof _ == "function" ? _ : S;
  }
  function m(f) {
    return Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(f).filter(function(g) {
      return Object.propertyIsEnumerable.call(f, g);
    }) : [];
  }
  function p(f) {
    return Object.keys(f).concat(m(f));
  }
  function E(f, g) {
    try {
      return g in f;
    } catch {
      return !1;
    }
  }
  function v(f, g) {
    return E(f, g) && !(Object.hasOwnProperty.call(f, g) && Object.propertyIsEnumerable.call(f, g));
  }
  function b(f, g, _) {
    var A = {};
    return _.isMergeableObject(f) && p(f).forEach(function(R) {
      A[R] = l(f[R], _);
    }), p(g).forEach(function(R) {
      v(f, R) || (E(f, R) && _.isMergeableObject(g[R]) ? A[R] = h(R, _)(f[R], g[R], _) : A[R] = l(g[R], _));
    }), A;
  }
  function S(f, g, _) {
    _ = _ || {}, _.arrayMerge = _.arrayMerge || u, _.isMergeableObject = _.isMergeableObject || e, _.cloneUnlessOtherwiseSpecified = l;
    var A = Array.isArray(g), R = Array.isArray(f), T = A === R;
    return T ? A ? _.arrayMerge(f, g, _) : b(f, g, _) : l(g, _);
  }
  S.all = function(g, _) {
    if (!Array.isArray(g))
      throw new Error("first argument should be an array");
    return g.reduce(function(A, R) {
      return S(A, R, _);
    }, {});
  };
  var d = S;
  return ci = d, ci;
}
var Gf = Kf();
const Jf = /* @__PURE__ */ Wf(Gf);
var ui, ia;
function Yr() {
  return ia || (ia = 1, ui = TypeError), ui;
}
const Qf = {}, Xf = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Qf
}, Symbol.toStringTag, { value: "Module" })), Yf = /* @__PURE__ */ zf(Xf);
var fi, sa;
function So() {
  if (sa) return fi;
  sa = 1;
  var e = typeof Map == "function" && Map.prototype, t = Object.getOwnPropertyDescriptor && e ? Object.getOwnPropertyDescriptor(Map.prototype, "size") : null, r = e && t && typeof t.get == "function" ? t.get : null, n = e && Map.prototype.forEach, o = typeof Set == "function" && Set.prototype, s = Object.getOwnPropertyDescriptor && o ? Object.getOwnPropertyDescriptor(Set.prototype, "size") : null, a = o && s && typeof s.get == "function" ? s.get : null, l = o && Set.prototype.forEach, u = typeof WeakMap == "function" && WeakMap.prototype, h = u ? WeakMap.prototype.has : null, m = typeof WeakSet == "function" && WeakSet.prototype, p = m ? WeakSet.prototype.has : null, E = typeof WeakRef == "function" && WeakRef.prototype, v = E ? WeakRef.prototype.deref : null, b = Boolean.prototype.valueOf, S = Object.prototype.toString, d = Function.prototype.toString, f = String.prototype.match, g = String.prototype.slice, _ = String.prototype.replace, A = String.prototype.toUpperCase, R = String.prototype.toLowerCase, T = RegExp.prototype.test, F = Array.prototype.concat, I = Array.prototype.join, B = Array.prototype.slice, M = Math.floor, G = typeof BigInt == "function" ? BigInt.prototype.valueOf : null, N = Object.getOwnPropertySymbols, pe = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Symbol.prototype.toString : null, me = typeof Symbol == "function" && typeof Symbol.iterator == "object", X = typeof Symbol == "function" && Symbol.toStringTag && (typeof Symbol.toStringTag === me || !0) ? Symbol.toStringTag : null, Fe = Object.prototype.propertyIsEnumerable, lt = (typeof Reflect == "function" ? Reflect.getPrototypeOf : Object.getPrototypeOf) || ([].__proto__ === Array.prototype ? function(w) {
    return w.__proto__;
  } : null);
  function H(w, O) {
    if (w === 1 / 0 || w === -1 / 0 || w !== w || w && w > -1e3 && w < 1e3 || T.call(/e/, O))
      return O;
    var V = /[0-9](?=(?:[0-9]{3})+(?![0-9]))/g;
    if (typeof w == "number") {
      var J = w < 0 ? -M(-w) : M(w);
      if (J !== w) {
        var W = String(J), $ = g.call(O, W.length + 1);
        return _.call(W, V, "$&_") + "." + _.call(_.call($, /([0-9]{3})/g, "$&_"), /_$/, "");
      }
    }
    return _.call(O, V, "$&_");
  }
  var Be = Yf, j = Be.custom, yt = ce(j) ? j : null, mt = {
    __proto__: null,
    double: '"',
    single: "'"
  }, Ce = {
    __proto__: null,
    double: /(["\\])/g,
    single: /(['\\])/g
  };
  fi = function w(O, V, J, W) {
    var $ = V || {};
    if (ge($, "quoteStyle") && !ge(mt, $.quoteStyle))
      throw new TypeError('option "quoteStyle" must be "single" or "double"');
    if (ge($, "maxStringLength") && (typeof $.maxStringLength == "number" ? $.maxStringLength < 0 && $.maxStringLength !== 1 / 0 : $.maxStringLength !== null))
      throw new TypeError('option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`');
    var Xe = ge($, "customInspect") ? $.customInspect : !0;
    if (typeof Xe != "boolean" && Xe !== "symbol")
      throw new TypeError("option \"customInspect\", if provided, must be `true`, `false`, or `'symbol'`");
    if (ge($, "indent") && $.indent !== null && $.indent !== "	" && !(parseInt($.indent, 10) === $.indent && $.indent > 0))
      throw new TypeError('option "indent" must be "\\t", an integer > 0, or `null`');
    if (ge($, "numericSeparator") && typeof $.numericSeparator != "boolean")
      throw new TypeError('option "numericSeparator", if provided, must be `true` or `false`');
    var He = $.numericSeparator;
    if (typeof O > "u")
      return "undefined";
    if (O === null)
      return "null";
    if (typeof O == "boolean")
      return O ? "true" : "false";
    if (typeof O == "string")
      return Cr(O, $);
    if (typeof O == "number") {
      if (O === 0)
        return 1 / 0 / O > 0 ? "0" : "-0";
      var Ee = String(O);
      return He ? H(O, Ee) : Ee;
    }
    if (typeof O == "bigint") {
      var qe = String(O) + "n";
      return He ? H(O, qe) : qe;
    }
    var qt = typeof $.depth > "u" ? 5 : $.depth;
    if (typeof J > "u" && (J = 0), J >= qt && qt > 0 && typeof O == "object")
      return ue(O) ? "[Array]" : "[Object]";
    var pt = Ir($, J);
    if (typeof W > "u")
      W = [];
    else if (gt(W, O) >= 0)
      return "[Circular]";
    function Ne(Ot, Xt, tn) {
      if (Xt && (W = B.call(W), W.push(Xt)), tn) {
        var Mr = {
          depth: $.depth
        };
        return ge($, "quoteStyle") && (Mr.quoteStyle = $.quoteStyle), w(Ot, Mr, J + 1, W);
      }
      return w(Ot, $, J + 1, W);
    }
    if (typeof O == "function" && !z(O)) {
      var vt = Ue(O), lr = Et(O, Ne);
      return "[Function" + (vt ? ": " + vt : " (anonymous)") + "]" + (lr.length > 0 ? " { " + I.call(lr, ", ") + " }" : "");
    }
    if (ce(O)) {
      var dt = me ? _.call(String(O), /^(Symbol\(.*\))_[^)]*$/, "$1") : pe.call(O);
      return typeof O == "object" && !me ? ft(dt) : dt;
    }
    if (Gt(O)) {
      for (var Mt = "<" + R.call(String(O.nodeName)), cr = O.attributes || [], Jt = 0; Jt < cr.length; Jt++)
        Mt += " " + cr[Jt].name + "=" + rt(U(cr[Jt].value), "double", $);
      return Mt += ">", O.childNodes && O.childNodes.length && (Mt += "..."), Mt += "</" + R.call(String(O.nodeName)) + ">", Mt;
    }
    if (ue(O)) {
      if (O.length === 0)
        return "[]";
      var Qt = Et(O, Ne);
      return pt && !Nr(Qt) ? "[" + ar(Qt, pt) + "]" : "[ " + I.call(Qt, ", ") + " ]";
    }
    if (re(O)) {
      var $t = Et(O, Ne);
      return !("cause" in Error.prototype) && "cause" in O && !Fe.call(O, "cause") ? "{ [" + String(O) + "] " + I.call(F.call("[cause]: " + Ne(O.cause), $t), ", ") + " }" : $t.length === 0 ? "[" + String(O) + "]" : "{ [" + String(O) + "] " + I.call($t, ", ") + " }";
    }
    if (typeof O == "object" && Xe) {
      if (yt && typeof O[yt] == "function" && Be)
        return Be(O, { depth: qt - J });
      if (Xe !== "symbol" && typeof O.inspect == "function")
        return O.inspect();
    }
    if (nt(O)) {
      var ve = [];
      return n && n.call(O, function(Ot, Xt) {
        ve.push(Ne(Xt, O, !0) + " => " + Ne(Ot, O));
      }), Ve("Map", r.call(O), ve, pt);
    }
    if (Tr(O)) {
      var Dr = [];
      return l && l.call(O, function(Ot) {
        Dr.push(Ne(Ot, O));
      }), Ve("Set", a.call(O), Dr, pt);
    }
    if (ct(O))
      return Ft("WeakMap");
    if (ut(O))
      return Ft("WeakSet");
    if (Rr(O))
      return Ft("WeakRef");
    if (de(O))
      return ft(Ne(Number(O)));
    if (je(O))
      return ft(Ne(G.call(O)));
    if (Ae(O))
      return ft(b.call(O));
    if (ne(O))
      return ft(Ne(String(O)));
    if (typeof window < "u" && O === window)
      return "{ [object Window] }";
    if (typeof globalThis < "u" && O === globalThis || typeof Nt < "u" && O === Nt)
      return "{ [object globalThis] }";
    if (!te(O) && !z(O)) {
      var ur = Et(O, Ne), Fr = lt ? lt(O) === Object.prototype : O instanceof Object || O.constructor === Object, fr = O instanceof Object ? "" : "null prototype", qr = !Fr && X && Object(O) === O && X in O ? g.call(_e(O), 8, -1) : fr ? "Object" : "", Pe = Fr || typeof O.constructor != "function" ? "" : O.constructor.name ? O.constructor.name + " " : "", pr = Pe + (qr || fr ? "[" + I.call(F.call([], qr || [], fr || []), ": ") + "] " : "");
      return ur.length === 0 ? pr + "{}" : pt ? pr + "{" + ar(ur, pt) + "}" : pr + "{ " + I.call(ur, ", ") + " }";
    }
    return String(O);
  };
  function rt(w, O, V) {
    var J = V.quoteStyle || O, W = mt[J];
    return W + w + W;
  }
  function U(w) {
    return _.call(String(w), /"/g, "&quot;");
  }
  function ue(w) {
    return _e(w) === "[object Array]" && (!X || !(typeof w == "object" && X in w));
  }
  function te(w) {
    return _e(w) === "[object Date]" && (!X || !(typeof w == "object" && X in w));
  }
  function z(w) {
    return _e(w) === "[object RegExp]" && (!X || !(typeof w == "object" && X in w));
  }
  function re(w) {
    return _e(w) === "[object Error]" && (!X || !(typeof w == "object" && X in w));
  }
  function ne(w) {
    return _e(w) === "[object String]" && (!X || !(typeof w == "object" && X in w));
  }
  function de(w) {
    return _e(w) === "[object Number]" && (!X || !(typeof w == "object" && X in w));
  }
  function Ae(w) {
    return _e(w) === "[object Boolean]" && (!X || !(typeof w == "object" && X in w));
  }
  function ce(w) {
    if (me)
      return w && typeof w == "object" && w instanceof Symbol;
    if (typeof w == "symbol")
      return !0;
    if (!w || typeof w != "object" || !pe)
      return !1;
    try {
      return pe.call(w), !0;
    } catch {
    }
    return !1;
  }
  function je(w) {
    if (!w || typeof w != "object" || !G)
      return !1;
    try {
      return G.call(w), !0;
    } catch {
    }
    return !1;
  }
  var Qe = Object.prototype.hasOwnProperty || function(w) {
    return w in this;
  };
  function ge(w, O) {
    return Qe.call(w, O);
  }
  function _e(w) {
    return S.call(w);
  }
  function Ue(w) {
    if (w.name)
      return w.name;
    var O = f.call(d.call(w), /^function\s*([\w$]+)/);
    return O ? O[1] : null;
  }
  function gt(w, O) {
    if (w.indexOf)
      return w.indexOf(O);
    for (var V = 0, J = w.length; V < J; V++)
      if (w[V] === O)
        return V;
    return -1;
  }
  function nt(w) {
    if (!r || !w || typeof w != "object")
      return !1;
    try {
      r.call(w);
      try {
        a.call(w);
      } catch {
        return !0;
      }
      return w instanceof Map;
    } catch {
    }
    return !1;
  }
  function ct(w) {
    if (!h || !w || typeof w != "object")
      return !1;
    try {
      h.call(w, h);
      try {
        p.call(w, p);
      } catch {
        return !0;
      }
      return w instanceof WeakMap;
    } catch {
    }
    return !1;
  }
  function Rr(w) {
    if (!v || !w || typeof w != "object")
      return !1;
    try {
      return v.call(w), !0;
    } catch {
    }
    return !1;
  }
  function Tr(w) {
    if (!a || !w || typeof w != "object")
      return !1;
    try {
      a.call(w);
      try {
        r.call(w);
      } catch {
        return !0;
      }
      return w instanceof Set;
    } catch {
    }
    return !1;
  }
  function ut(w) {
    if (!p || !w || typeof w != "object")
      return !1;
    try {
      p.call(w, p);
      try {
        h.call(w, h);
      } catch {
        return !0;
      }
      return w instanceof WeakSet;
    } catch {
    }
    return !1;
  }
  function Gt(w) {
    return !w || typeof w != "object" ? !1 : typeof HTMLElement < "u" && w instanceof HTMLElement ? !0 : typeof w.nodeName == "string" && typeof w.getAttribute == "function";
  }
  function Cr(w, O) {
    if (w.length > O.maxStringLength) {
      var V = w.length - O.maxStringLength, J = "... " + V + " more character" + (V > 1 ? "s" : "");
      return Cr(g.call(w, 0, O.maxStringLength), O) + J;
    }
    var W = Ce[O.quoteStyle || "single"];
    W.lastIndex = 0;
    var $ = _.call(_.call(w, W, "\\$1"), /[\x00-\x1f]/g, Dt);
    return rt($, "single", O);
  }
  function Dt(w) {
    var O = w.charCodeAt(0), V = {
      8: "b",
      9: "t",
      10: "n",
      12: "f",
      13: "r"
    }[O];
    return V ? "\\" + V : "\\x" + (O < 16 ? "0" : "") + A.call(O.toString(16));
  }
  function ft(w) {
    return "Object(" + w + ")";
  }
  function Ft(w) {
    return w + " { ? }";
  }
  function Ve(w, O, V, J) {
    var W = J ? ar(V, J) : I.call(V, ", ");
    return w + " (" + O + ") {" + W + "}";
  }
  function Nr(w) {
    for (var O = 0; O < w.length; O++)
      if (gt(w[O], `
`) >= 0)
        return !1;
    return !0;
  }
  function Ir(w, O) {
    var V;
    if (w.indent === "	")
      V = "	";
    else if (typeof w.indent == "number" && w.indent > 0)
      V = I.call(Array(w.indent + 1), " ");
    else
      return null;
    return {
      base: V,
      prev: I.call(Array(O + 1), V)
    };
  }
  function ar(w, O) {
    if (w.length === 0)
      return "";
    var V = `
` + O.prev + O.base;
    return V + I.call(w, "," + V) + `
` + O.prev;
  }
  function Et(w, O) {
    var V = ue(w), J = [];
    if (V) {
      J.length = w.length;
      for (var W = 0; W < w.length; W++)
        J[W] = ge(w, W) ? O(w[W], w) : "";
    }
    var $ = typeof N == "function" ? N(w) : [], Xe;
    if (me) {
      Xe = {};
      for (var He = 0; He < $.length; He++)
        Xe["$" + $[He]] = $[He];
    }
    for (var Ee in w)
      ge(w, Ee) && (V && String(Number(Ee)) === Ee && Ee < w.length || me && Xe["$" + Ee] instanceof Symbol || (T.call(/[^\w$]/, Ee) ? J.push(O(Ee, w) + ": " + O(w[Ee], w)) : J.push(Ee + ": " + O(w[Ee], w))));
    if (typeof N == "function")
      for (var qe = 0; qe < $.length; qe++)
        Fe.call(w, $[qe]) && J.push("[" + O($[qe]) + "]: " + O(w[$[qe]], w));
    return J;
  }
  return fi;
}
var pi, aa;
function Zf() {
  if (aa) return pi;
  aa = 1;
  var e = /* @__PURE__ */ So(), t = /* @__PURE__ */ Yr(), r = function(l, u, h) {
    for (var m = l, p; (p = m.next) != null; m = p)
      if (p.key === u)
        return m.next = p.next, h || (p.next = /** @type {NonNullable<typeof list.next>} */
        l.next, l.next = p), p;
  }, n = function(l, u) {
    if (l) {
      var h = r(l, u);
      return h && h.value;
    }
  }, o = function(l, u, h) {
    var m = r(l, u);
    m ? m.value = h : l.next = /** @type {import('./list.d.ts').ListNode<typeof value, typeof key>} */
    {
      // eslint-disable-line no-param-reassign, no-extra-parens
      key: u,
      next: l.next,
      value: h
    };
  }, s = function(l, u) {
    return l ? !!r(l, u) : !1;
  }, a = function(l, u) {
    if (l)
      return r(l, u, !0);
  };
  return pi = function() {
    var u, h = {
      assert: function(m) {
        if (!h.has(m))
          throw new t("Side channel does not contain " + e(m));
      },
      delete: function(m) {
        var p = u && u.next, E = a(u, m);
        return E && p && p === E && (u = void 0), !!E;
      },
      get: function(m) {
        return n(u, m);
      },
      has: function(m) {
        return s(u, m);
      },
      set: function(m, p) {
        u || (u = {
          next: void 0
        }), o(
          /** @type {NonNullable<typeof $o>} */
          u,
          m,
          p
        );
      }
    };
    return h;
  }, pi;
}
var di, la;
function ep() {
  return la || (la = 1, di = Object), di;
}
var hi, ca;
function tp() {
  return ca || (ca = 1, hi = Error), hi;
}
var yi, ua;
function rp() {
  return ua || (ua = 1, yi = EvalError), yi;
}
var mi, fa;
function np() {
  return fa || (fa = 1, mi = RangeError), mi;
}
var gi, pa;
function op() {
  return pa || (pa = 1, gi = ReferenceError), gi;
}
var vi, da;
function ip() {
  return da || (da = 1, vi = SyntaxError), vi;
}
var bi, ha;
function sp() {
  return ha || (ha = 1, bi = URIError), bi;
}
var wi, ya;
function ap() {
  return ya || (ya = 1, wi = Math.abs), wi;
}
var Si, ma;
function lp() {
  return ma || (ma = 1, Si = Math.floor), Si;
}
var _i, ga;
function cp() {
  return ga || (ga = 1, _i = Math.max), _i;
}
var Ei, va;
function up() {
  return va || (va = 1, Ei = Math.min), Ei;
}
var Oi, ba;
function fp() {
  return ba || (ba = 1, Oi = Math.pow), Oi;
}
var xi, wa;
function pp() {
  return wa || (wa = 1, xi = Object.getOwnPropertyDescriptor), xi;
}
var Ai, Sa;
function uc() {
  if (Sa) return Ai;
  Sa = 1;
  var e = /* @__PURE__ */ pp();
  if (e)
    try {
      e([], "length");
    } catch {
      e = null;
    }
  return Ai = e, Ai;
}
var Pi, _a;
function dp() {
  if (_a) return Pi;
  _a = 1;
  var e = Object.defineProperty || !1;
  if (e)
    try {
      e({}, "a", { value: 1 });
    } catch {
      e = !1;
    }
  return Pi = e, Pi;
}
var Ri, Ea;
function hp() {
  return Ea || (Ea = 1, Ri = function() {
    if (typeof Symbol != "function" || typeof Object.getOwnPropertySymbols != "function")
      return !1;
    if (typeof Symbol.iterator == "symbol")
      return !0;
    var t = {}, r = Symbol("test"), n = Object(r);
    if (typeof r == "string" || Object.prototype.toString.call(r) !== "[object Symbol]" || Object.prototype.toString.call(n) !== "[object Symbol]")
      return !1;
    var o = 42;
    t[r] = o;
    for (var s in t)
      return !1;
    if (typeof Object.keys == "function" && Object.keys(t).length !== 0 || typeof Object.getOwnPropertyNames == "function" && Object.getOwnPropertyNames(t).length !== 0)
      return !1;
    var a = Object.getOwnPropertySymbols(t);
    if (a.length !== 1 || a[0] !== r || !Object.prototype.propertyIsEnumerable.call(t, r))
      return !1;
    if (typeof Object.getOwnPropertyDescriptor == "function") {
      var l = (
        /** @type {PropertyDescriptor} */
        Object.getOwnPropertyDescriptor(t, r)
      );
      if (l.value !== o || l.enumerable !== !0)
        return !1;
    }
    return !0;
  }), Ri;
}
var Ti, Oa;
function yp() {
  if (Oa) return Ti;
  Oa = 1;
  var e = typeof Symbol < "u" && Symbol, t = hp();
  return Ti = function() {
    return typeof e != "function" || typeof Symbol != "function" || typeof e("foo") != "symbol" || typeof Symbol("bar") != "symbol" ? !1 : t();
  }, Ti;
}
var Ci, xa;
function mp() {
  if (xa) return Ci;
  xa = 1;
  var e = "Function.prototype.bind called on incompatible ", t = Object.prototype.toString, r = Math.max, n = "[object Function]", o = function(u, h) {
    for (var m = [], p = 0; p < u.length; p += 1)
      m[p] = u[p];
    for (var E = 0; E < h.length; E += 1)
      m[E + u.length] = h[E];
    return m;
  }, s = function(u, h) {
    for (var m = [], p = h, E = 0; p < u.length; p += 1, E += 1)
      m[E] = u[p];
    return m;
  }, a = function(l, u) {
    for (var h = "", m = 0; m < l.length; m += 1)
      h += l[m], m + 1 < l.length && (h += u);
    return h;
  };
  return Ci = function(u) {
    var h = this;
    if (typeof h != "function" || t.apply(h) !== n)
      throw new TypeError(e + h);
    for (var m = s(arguments, 1), p, E = function() {
      if (this instanceof p) {
        var f = h.apply(
          this,
          o(m, arguments)
        );
        return Object(f) === f ? f : this;
      }
      return h.apply(
        u,
        o(m, arguments)
      );
    }, v = r(0, h.length - m.length), b = [], S = 0; S < v; S++)
      b[S] = "$" + S;
    if (p = Function("binder", "return function (" + a(b, ",") + "){ return binder.apply(this,arguments); }")(E), h.prototype) {
      var d = function() {
      };
      d.prototype = h.prototype, p.prototype = new d(), d.prototype = null;
    }
    return p;
  }, Ci;
}
var Ni, Aa;
function _o() {
  if (Aa) return Ni;
  Aa = 1;
  var e = mp();
  return Ni = Function.prototype.bind || e, Ni;
}
var Ii, Pa;
function Is() {
  return Pa || (Pa = 1, Ii = Function.prototype.call), Ii;
}
var Di, Ra;
function fc() {
  return Ra || (Ra = 1, Di = Function.prototype.apply), Di;
}
var Fi, Ta;
function gp() {
  return Ta || (Ta = 1, Fi = typeof Reflect < "u" && Reflect && Reflect.apply), Fi;
}
var qi, Ca;
function vp() {
  if (Ca) return qi;
  Ca = 1;
  var e = _o(), t = fc(), r = Is(), n = gp();
  return qi = n || e.call(r, t), qi;
}
var Mi, Na;
function pc() {
  if (Na) return Mi;
  Na = 1;
  var e = _o(), t = /* @__PURE__ */ Yr(), r = Is(), n = vp();
  return Mi = function(s) {
    if (s.length < 1 || typeof s[0] != "function")
      throw new t("a function is required");
    return n(e, r, s);
  }, Mi;
}
var $i, Ia;
function bp() {
  if (Ia) return $i;
  Ia = 1;
  var e = pc(), t = /* @__PURE__ */ uc(), r;
  try {
    r = /** @type {{ __proto__?: typeof Array.prototype }} */
    [].__proto__ === Array.prototype;
  } catch (a) {
    if (!a || typeof a != "object" || !("code" in a) || a.code !== "ERR_PROTO_ACCESS")
      throw a;
  }
  var n = !!r && t && t(
    Object.prototype,
    /** @type {keyof typeof Object.prototype} */
    "__proto__"
  ), o = Object, s = o.getPrototypeOf;
  return $i = n && typeof n.get == "function" ? e([n.get]) : typeof s == "function" ? (
    /** @type {import('./get')} */
    function(l) {
      return s(l == null ? l : o(l));
    }
  ) : !1, $i;
}
var Li, Da;
function wp() {
  if (Da) return Li;
  Da = 1;
  var e = Function.prototype.call, t = Object.prototype.hasOwnProperty, r = _o();
  return Li = r.call(e, t), Li;
}
var ki, Fa;
function Ds() {
  if (Fa) return ki;
  Fa = 1;
  var e, t = /* @__PURE__ */ ep(), r = /* @__PURE__ */ tp(), n = /* @__PURE__ */ rp(), o = /* @__PURE__ */ np(), s = /* @__PURE__ */ op(), a = /* @__PURE__ */ ip(), l = /* @__PURE__ */ Yr(), u = /* @__PURE__ */ sp(), h = /* @__PURE__ */ ap(), m = /* @__PURE__ */ lp(), p = /* @__PURE__ */ cp(), E = /* @__PURE__ */ up(), v = /* @__PURE__ */ fp(), b = Function, S = function(ue) {
    try {
      return b('"use strict"; return (' + ue + ").constructor;")();
    } catch {
    }
  }, d = /* @__PURE__ */ uc(), f = /* @__PURE__ */ dp(), g = function() {
    throw new l();
  }, _ = d ? function() {
    try {
      return arguments.callee, g;
    } catch {
      try {
        return d(arguments, "callee").get;
      } catch {
        return g;
      }
    }
  }() : g, A = yp()(), R = /* @__PURE__ */ bp(), T = typeof Reflect == "function" && Reflect.getPrototypeOf || t.getPrototypeOf || R, F = fc(), I = Is(), B = {}, M = typeof Uint8Array > "u" || !T ? e : T(Uint8Array), G = {
    __proto__: null,
    "%AggregateError%": typeof AggregateError > "u" ? e : AggregateError,
    "%Array%": Array,
    "%ArrayBuffer%": typeof ArrayBuffer > "u" ? e : ArrayBuffer,
    "%ArrayIteratorPrototype%": A && T ? T([][Symbol.iterator]()) : e,
    "%AsyncFromSyncIteratorPrototype%": e,
    "%AsyncFunction%": B,
    "%AsyncGenerator%": B,
    "%AsyncGeneratorFunction%": B,
    "%AsyncIteratorPrototype%": B,
    "%Atomics%": typeof Atomics > "u" ? e : Atomics,
    "%BigInt%": typeof BigInt > "u" ? e : BigInt,
    "%BigInt64Array%": typeof BigInt64Array > "u" ? e : BigInt64Array,
    "%BigUint64Array%": typeof BigUint64Array > "u" ? e : BigUint64Array,
    "%Boolean%": Boolean,
    "%DataView%": typeof DataView > "u" ? e : DataView,
    "%Date%": Date,
    "%decodeURI%": decodeURI,
    "%decodeURIComponent%": decodeURIComponent,
    "%encodeURI%": encodeURI,
    "%encodeURIComponent%": encodeURIComponent,
    "%Error%": r,
    "%eval%": eval,
    // eslint-disable-line no-eval
    "%EvalError%": n,
    "%Float32Array%": typeof Float32Array > "u" ? e : Float32Array,
    "%Float64Array%": typeof Float64Array > "u" ? e : Float64Array,
    "%FinalizationRegistry%": typeof FinalizationRegistry > "u" ? e : FinalizationRegistry,
    "%Function%": b,
    "%GeneratorFunction%": B,
    "%Int8Array%": typeof Int8Array > "u" ? e : Int8Array,
    "%Int16Array%": typeof Int16Array > "u" ? e : Int16Array,
    "%Int32Array%": typeof Int32Array > "u" ? e : Int32Array,
    "%isFinite%": isFinite,
    "%isNaN%": isNaN,
    "%IteratorPrototype%": A && T ? T(T([][Symbol.iterator]())) : e,
    "%JSON%": typeof JSON == "object" ? JSON : e,
    "%Map%": typeof Map > "u" ? e : Map,
    "%MapIteratorPrototype%": typeof Map > "u" || !A || !T ? e : T((/* @__PURE__ */ new Map())[Symbol.iterator]()),
    "%Math%": Math,
    "%Number%": Number,
    "%Object%": t,
    "%Object.getOwnPropertyDescriptor%": d,
    "%parseFloat%": parseFloat,
    "%parseInt%": parseInt,
    "%Promise%": typeof Promise > "u" ? e : Promise,
    "%Proxy%": typeof Proxy > "u" ? e : Proxy,
    "%RangeError%": o,
    "%ReferenceError%": s,
    "%Reflect%": typeof Reflect > "u" ? e : Reflect,
    "%RegExp%": RegExp,
    "%Set%": typeof Set > "u" ? e : Set,
    "%SetIteratorPrototype%": typeof Set > "u" || !A || !T ? e : T((/* @__PURE__ */ new Set())[Symbol.iterator]()),
    "%SharedArrayBuffer%": typeof SharedArrayBuffer > "u" ? e : SharedArrayBuffer,
    "%String%": String,
    "%StringIteratorPrototype%": A && T ? T(""[Symbol.iterator]()) : e,
    "%Symbol%": A ? Symbol : e,
    "%SyntaxError%": a,
    "%ThrowTypeError%": _,
    "%TypedArray%": M,
    "%TypeError%": l,
    "%Uint8Array%": typeof Uint8Array > "u" ? e : Uint8Array,
    "%Uint8ClampedArray%": typeof Uint8ClampedArray > "u" ? e : Uint8ClampedArray,
    "%Uint16Array%": typeof Uint16Array > "u" ? e : Uint16Array,
    "%Uint32Array%": typeof Uint32Array > "u" ? e : Uint32Array,
    "%URIError%": u,
    "%WeakMap%": typeof WeakMap > "u" ? e : WeakMap,
    "%WeakRef%": typeof WeakRef > "u" ? e : WeakRef,
    "%WeakSet%": typeof WeakSet > "u" ? e : WeakSet,
    "%Function.prototype.call%": I,
    "%Function.prototype.apply%": F,
    "%Object.defineProperty%": f,
    "%Math.abs%": h,
    "%Math.floor%": m,
    "%Math.max%": p,
    "%Math.min%": E,
    "%Math.pow%": v
  };
  if (T)
    try {
      null.error;
    } catch (ue) {
      var N = T(T(ue));
      G["%Error.prototype%"] = N;
    }
  var pe = function ue(te) {
    var z;
    if (te === "%AsyncFunction%")
      z = S("async function () {}");
    else if (te === "%GeneratorFunction%")
      z = S("function* () {}");
    else if (te === "%AsyncGeneratorFunction%")
      z = S("async function* () {}");
    else if (te === "%AsyncGenerator%") {
      var re = ue("%AsyncGeneratorFunction%");
      re && (z = re.prototype);
    } else if (te === "%AsyncIteratorPrototype%") {
      var ne = ue("%AsyncGenerator%");
      ne && T && (z = T(ne.prototype));
    }
    return G[te] = z, z;
  }, me = {
    __proto__: null,
    "%ArrayBufferPrototype%": ["ArrayBuffer", "prototype"],
    "%ArrayPrototype%": ["Array", "prototype"],
    "%ArrayProto_entries%": ["Array", "prototype", "entries"],
    "%ArrayProto_forEach%": ["Array", "prototype", "forEach"],
    "%ArrayProto_keys%": ["Array", "prototype", "keys"],
    "%ArrayProto_values%": ["Array", "prototype", "values"],
    "%AsyncFunctionPrototype%": ["AsyncFunction", "prototype"],
    "%AsyncGenerator%": ["AsyncGeneratorFunction", "prototype"],
    "%AsyncGeneratorPrototype%": ["AsyncGeneratorFunction", "prototype", "prototype"],
    "%BooleanPrototype%": ["Boolean", "prototype"],
    "%DataViewPrototype%": ["DataView", "prototype"],
    "%DatePrototype%": ["Date", "prototype"],
    "%ErrorPrototype%": ["Error", "prototype"],
    "%EvalErrorPrototype%": ["EvalError", "prototype"],
    "%Float32ArrayPrototype%": ["Float32Array", "prototype"],
    "%Float64ArrayPrototype%": ["Float64Array", "prototype"],
    "%FunctionPrototype%": ["Function", "prototype"],
    "%Generator%": ["GeneratorFunction", "prototype"],
    "%GeneratorPrototype%": ["GeneratorFunction", "prototype", "prototype"],
    "%Int8ArrayPrototype%": ["Int8Array", "prototype"],
    "%Int16ArrayPrototype%": ["Int16Array", "prototype"],
    "%Int32ArrayPrototype%": ["Int32Array", "prototype"],
    "%JSONParse%": ["JSON", "parse"],
    "%JSONStringify%": ["JSON", "stringify"],
    "%MapPrototype%": ["Map", "prototype"],
    "%NumberPrototype%": ["Number", "prototype"],
    "%ObjectPrototype%": ["Object", "prototype"],
    "%ObjProto_toString%": ["Object", "prototype", "toString"],
    "%ObjProto_valueOf%": ["Object", "prototype", "valueOf"],
    "%PromisePrototype%": ["Promise", "prototype"],
    "%PromiseProto_then%": ["Promise", "prototype", "then"],
    "%Promise_all%": ["Promise", "all"],
    "%Promise_reject%": ["Promise", "reject"],
    "%Promise_resolve%": ["Promise", "resolve"],
    "%RangeErrorPrototype%": ["RangeError", "prototype"],
    "%ReferenceErrorPrototype%": ["ReferenceError", "prototype"],
    "%RegExpPrototype%": ["RegExp", "prototype"],
    "%SetPrototype%": ["Set", "prototype"],
    "%SharedArrayBufferPrototype%": ["SharedArrayBuffer", "prototype"],
    "%StringPrototype%": ["String", "prototype"],
    "%SymbolPrototype%": ["Symbol", "prototype"],
    "%SyntaxErrorPrototype%": ["SyntaxError", "prototype"],
    "%TypedArrayPrototype%": ["TypedArray", "prototype"],
    "%TypeErrorPrototype%": ["TypeError", "prototype"],
    "%Uint8ArrayPrototype%": ["Uint8Array", "prototype"],
    "%Uint8ClampedArrayPrototype%": ["Uint8ClampedArray", "prototype"],
    "%Uint16ArrayPrototype%": ["Uint16Array", "prototype"],
    "%Uint32ArrayPrototype%": ["Uint32Array", "prototype"],
    "%URIErrorPrototype%": ["URIError", "prototype"],
    "%WeakMapPrototype%": ["WeakMap", "prototype"],
    "%WeakSetPrototype%": ["WeakSet", "prototype"]
  }, X = _o(), Fe = /* @__PURE__ */ wp(), lt = X.call(I, Array.prototype.concat), H = X.call(F, Array.prototype.splice), Be = X.call(I, String.prototype.replace), j = X.call(I, String.prototype.slice), yt = X.call(I, RegExp.prototype.exec), mt = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g, Ce = /\\(\\)?/g, rt = function(te) {
    var z = j(te, 0, 1), re = j(te, -1);
    if (z === "%" && re !== "%")
      throw new a("invalid intrinsic syntax, expected closing `%`");
    if (re === "%" && z !== "%")
      throw new a("invalid intrinsic syntax, expected opening `%`");
    var ne = [];
    return Be(te, mt, function(de, Ae, ce, je) {
      ne[ne.length] = ce ? Be(je, Ce, "$1") : Ae || de;
    }), ne;
  }, U = function(te, z) {
    var re = te, ne;
    if (Fe(me, re) && (ne = me[re], re = "%" + ne[0] + "%"), Fe(G, re)) {
      var de = G[re];
      if (de === B && (de = pe(re)), typeof de > "u" && !z)
        throw new l("intrinsic " + te + " exists, but is not available. Please file an issue!");
      return {
        alias: ne,
        name: re,
        value: de
      };
    }
    throw new a("intrinsic " + te + " does not exist!");
  };
  return ki = function(te, z) {
    if (typeof te != "string" || te.length === 0)
      throw new l("intrinsic name must be a non-empty string");
    if (arguments.length > 1 && typeof z != "boolean")
      throw new l('"allowMissing" argument must be a boolean');
    if (yt(/^%?[^%]*%?$/, te) === null)
      throw new a("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
    var re = rt(te), ne = re.length > 0 ? re[0] : "", de = U("%" + ne + "%", z), Ae = de.name, ce = de.value, je = !1, Qe = de.alias;
    Qe && (ne = Qe[0], H(re, lt([0, 1], Qe)));
    for (var ge = 1, _e = !0; ge < re.length; ge += 1) {
      var Ue = re[ge], gt = j(Ue, 0, 1), nt = j(Ue, -1);
      if ((gt === '"' || gt === "'" || gt === "`" || nt === '"' || nt === "'" || nt === "`") && gt !== nt)
        throw new a("property names with quotes must have matching quotes");
      if ((Ue === "constructor" || !_e) && (je = !0), ne += "." + Ue, Ae = "%" + ne + "%", Fe(G, Ae))
        ce = G[Ae];
      else if (ce != null) {
        if (!(Ue in ce)) {
          if (!z)
            throw new l("base intrinsic for " + te + " exists, but the property is not available.");
          return;
        }
        if (d && ge + 1 >= re.length) {
          var ct = d(ce, Ue);
          _e = !!ct, _e && "get" in ct && !("originalValue" in ct.get) ? ce = ct.get : ce = ce[Ue];
        } else
          _e = Fe(ce, Ue), ce = ce[Ue];
        _e && !je && (G[Ae] = ce);
      }
    }
    return ce;
  }, ki;
}
var Bi, qa;
function dc() {
  if (qa) return Bi;
  qa = 1;
  var e = /* @__PURE__ */ Ds(), t = pc(), r = t([e("%String.prototype.indexOf%")]);
  return Bi = function(o, s) {
    var a = (
      /** @type {Parameters<typeof callBindBasic>[0][0]} */
      e(o, !!s)
    );
    return typeof a == "function" && r(o, ".prototype.") > -1 ? t([a]) : a;
  }, Bi;
}
var ji, Ma;
function hc() {
  if (Ma) return ji;
  Ma = 1;
  var e = /* @__PURE__ */ Ds(), t = /* @__PURE__ */ dc(), r = /* @__PURE__ */ So(), n = /* @__PURE__ */ Yr(), o = e("%Map%", !0), s = t("Map.prototype.get", !0), a = t("Map.prototype.set", !0), l = t("Map.prototype.has", !0), u = t("Map.prototype.delete", !0), h = t("Map.prototype.size", !0);
  return ji = !!o && /** @type {Exclude<import('.'), false>} */
  function() {
    var p, E = {
      assert: function(v) {
        if (!E.has(v))
          throw new n("Side channel does not contain " + r(v));
      },
      delete: function(v) {
        if (p) {
          var b = u(p, v);
          return h(p) === 0 && (p = void 0), b;
        }
        return !1;
      },
      get: function(v) {
        if (p)
          return s(p, v);
      },
      has: function(v) {
        return p ? l(p, v) : !1;
      },
      set: function(v, b) {
        p || (p = new o()), a(p, v, b);
      }
    };
    return E;
  }, ji;
}
var Ui, $a;
function Sp() {
  if ($a) return Ui;
  $a = 1;
  var e = /* @__PURE__ */ Ds(), t = /* @__PURE__ */ dc(), r = /* @__PURE__ */ So(), n = hc(), o = /* @__PURE__ */ Yr(), s = e("%WeakMap%", !0), a = t("WeakMap.prototype.get", !0), l = t("WeakMap.prototype.set", !0), u = t("WeakMap.prototype.has", !0), h = t("WeakMap.prototype.delete", !0);
  return Ui = s ? (
    /** @type {Exclude<import('.'), false>} */
    function() {
      var p, E, v = {
        assert: function(b) {
          if (!v.has(b))
            throw new o("Side channel does not contain " + r(b));
        },
        delete: function(b) {
          if (s && b && (typeof b == "object" || typeof b == "function")) {
            if (p)
              return h(p, b);
          } else if (n && E)
            return E.delete(b);
          return !1;
        },
        get: function(b) {
          return s && b && (typeof b == "object" || typeof b == "function") && p ? a(p, b) : E && E.get(b);
        },
        has: function(b) {
          return s && b && (typeof b == "object" || typeof b == "function") && p ? u(p, b) : !!E && E.has(b);
        },
        set: function(b, S) {
          s && b && (typeof b == "object" || typeof b == "function") ? (p || (p = new s()), l(p, b, S)) : n && (E || (E = n()), E.set(b, S));
        }
      };
      return v;
    }
  ) : n, Ui;
}
var Vi, La;
function _p() {
  if (La) return Vi;
  La = 1;
  var e = /* @__PURE__ */ Yr(), t = /* @__PURE__ */ So(), r = Zf(), n = hc(), o = Sp(), s = o || n || r;
  return Vi = function() {
    var l, u = {
      assert: function(h) {
        if (!u.has(h))
          throw new e("Side channel does not contain " + t(h));
      },
      delete: function(h) {
        return !!l && l.delete(h);
      },
      get: function(h) {
        return l && l.get(h);
      },
      has: function(h) {
        return !!l && l.has(h);
      },
      set: function(h, m) {
        l || (l = s()), l.set(h, m);
      }
    };
    return u;
  }, Vi;
}
var Hi, ka;
function Fs() {
  if (ka) return Hi;
  ka = 1;
  var e = String.prototype.replace, t = /%20/g, r = {
    RFC1738: "RFC1738",
    RFC3986: "RFC3986"
  };
  return Hi = {
    default: r.RFC3986,
    formatters: {
      RFC1738: function(n) {
        return e.call(n, t, "+");
      },
      RFC3986: function(n) {
        return String(n);
      }
    },
    RFC1738: r.RFC1738,
    RFC3986: r.RFC3986
  }, Hi;
}
var Wi, Ba;
function yc() {
  if (Ba) return Wi;
  Ba = 1;
  var e = /* @__PURE__ */ Fs(), t = Object.prototype.hasOwnProperty, r = Array.isArray, n = function() {
    for (var d = [], f = 0; f < 256; ++f)
      d.push("%" + ((f < 16 ? "0" : "") + f.toString(16)).toUpperCase());
    return d;
  }(), o = function(f) {
    for (; f.length > 1; ) {
      var g = f.pop(), _ = g.obj[g.prop];
      if (r(_)) {
        for (var A = [], R = 0; R < _.length; ++R)
          typeof _[R] < "u" && A.push(_[R]);
        g.obj[g.prop] = A;
      }
    }
  }, s = function(f, g) {
    for (var _ = g && g.plainObjects ? { __proto__: null } : {}, A = 0; A < f.length; ++A)
      typeof f[A] < "u" && (_[A] = f[A]);
    return _;
  }, a = function d(f, g, _) {
    if (!g)
      return f;
    if (typeof g != "object" && typeof g != "function") {
      if (r(f))
        f.push(g);
      else if (f && typeof f == "object")
        (_ && (_.plainObjects || _.allowPrototypes) || !t.call(Object.prototype, g)) && (f[g] = !0);
      else
        return [f, g];
      return f;
    }
    if (!f || typeof f != "object")
      return [f].concat(g);
    var A = f;
    return r(f) && !r(g) && (A = s(f, _)), r(f) && r(g) ? (g.forEach(function(R, T) {
      if (t.call(f, T)) {
        var F = f[T];
        F && typeof F == "object" && R && typeof R == "object" ? f[T] = d(F, R, _) : f.push(R);
      } else
        f[T] = R;
    }), f) : Object.keys(g).reduce(function(R, T) {
      var F = g[T];
      return t.call(R, T) ? R[T] = d(R[T], F, _) : R[T] = F, R;
    }, A);
  }, l = function(f, g) {
    return Object.keys(g).reduce(function(_, A) {
      return _[A] = g[A], _;
    }, f);
  }, u = function(d, f, g) {
    var _ = d.replace(/\+/g, " ");
    if (g === "iso-8859-1")
      return _.replace(/%[0-9a-f]{2}/gi, unescape);
    try {
      return decodeURIComponent(_);
    } catch {
      return _;
    }
  }, h = 1024, m = function(f, g, _, A, R) {
    if (f.length === 0)
      return f;
    var T = f;
    if (typeof f == "symbol" ? T = Symbol.prototype.toString.call(f) : typeof f != "string" && (T = String(f)), _ === "iso-8859-1")
      return escape(T).replace(/%u[0-9a-f]{4}/gi, function(pe) {
        return "%26%23" + parseInt(pe.slice(2), 16) + "%3B";
      });
    for (var F = "", I = 0; I < T.length; I += h) {
      for (var B = T.length >= h ? T.slice(I, I + h) : T, M = [], G = 0; G < B.length; ++G) {
        var N = B.charCodeAt(G);
        if (N === 45 || N === 46 || N === 95 || N === 126 || N >= 48 && N <= 57 || N >= 65 && N <= 90 || N >= 97 && N <= 122 || R === e.RFC1738 && (N === 40 || N === 41)) {
          M[M.length] = B.charAt(G);
          continue;
        }
        if (N < 128) {
          M[M.length] = n[N];
          continue;
        }
        if (N < 2048) {
          M[M.length] = n[192 | N >> 6] + n[128 | N & 63];
          continue;
        }
        if (N < 55296 || N >= 57344) {
          M[M.length] = n[224 | N >> 12] + n[128 | N >> 6 & 63] + n[128 | N & 63];
          continue;
        }
        G += 1, N = 65536 + ((N & 1023) << 10 | B.charCodeAt(G) & 1023), M[M.length] = n[240 | N >> 18] + n[128 | N >> 12 & 63] + n[128 | N >> 6 & 63] + n[128 | N & 63];
      }
      F += M.join("");
    }
    return F;
  }, p = function(f) {
    for (var g = [{ obj: { o: f }, prop: "o" }], _ = [], A = 0; A < g.length; ++A)
      for (var R = g[A], T = R.obj[R.prop], F = Object.keys(T), I = 0; I < F.length; ++I) {
        var B = F[I], M = T[B];
        typeof M == "object" && M !== null && _.indexOf(M) === -1 && (g.push({ obj: T, prop: B }), _.push(M));
      }
    return o(g), f;
  }, E = function(f) {
    return Object.prototype.toString.call(f) === "[object RegExp]";
  }, v = function(f) {
    return !f || typeof f != "object" ? !1 : !!(f.constructor && f.constructor.isBuffer && f.constructor.isBuffer(f));
  }, b = function(f, g) {
    return [].concat(f, g);
  }, S = function(f, g) {
    if (r(f)) {
      for (var _ = [], A = 0; A < f.length; A += 1)
        _.push(g(f[A]));
      return _;
    }
    return g(f);
  };
  return Wi = {
    arrayToObject: s,
    assign: l,
    combine: b,
    compact: p,
    decode: u,
    encode: m,
    isBuffer: v,
    isRegExp: E,
    maybeMap: S,
    merge: a
  }, Wi;
}
var zi, ja;
function Ep() {
  if (ja) return zi;
  ja = 1;
  var e = _p(), t = /* @__PURE__ */ yc(), r = /* @__PURE__ */ Fs(), n = Object.prototype.hasOwnProperty, o = {
    brackets: function(d) {
      return d + "[]";
    },
    comma: "comma",
    indices: function(d, f) {
      return d + "[" + f + "]";
    },
    repeat: function(d) {
      return d;
    }
  }, s = Array.isArray, a = Array.prototype.push, l = function(S, d) {
    a.apply(S, s(d) ? d : [d]);
  }, u = Date.prototype.toISOString, h = r.default, m = {
    addQueryPrefix: !1,
    allowDots: !1,
    allowEmptyArrays: !1,
    arrayFormat: "indices",
    charset: "utf-8",
    charsetSentinel: !1,
    commaRoundTrip: !1,
    delimiter: "&",
    encode: !0,
    encodeDotInKeys: !1,
    encoder: t.encode,
    encodeValuesOnly: !1,
    filter: void 0,
    format: h,
    formatter: r.formatters[h],
    // deprecated
    indices: !1,
    serializeDate: function(d) {
      return u.call(d);
    },
    skipNulls: !1,
    strictNullHandling: !1
  }, p = function(d) {
    return typeof d == "string" || typeof d == "number" || typeof d == "boolean" || typeof d == "symbol" || typeof d == "bigint";
  }, E = {}, v = function S(d, f, g, _, A, R, T, F, I, B, M, G, N, pe, me, X, Fe, lt) {
    for (var H = d, Be = lt, j = 0, yt = !1; (Be = Be.get(E)) !== void 0 && !yt; ) {
      var mt = Be.get(d);
      if (j += 1, typeof mt < "u") {
        if (mt === j)
          throw new RangeError("Cyclic object value");
        yt = !0;
      }
      typeof Be.get(E) > "u" && (j = 0);
    }
    if (typeof B == "function" ? H = B(f, H) : H instanceof Date ? H = N(H) : g === "comma" && s(H) && (H = t.maybeMap(H, function(Qe) {
      return Qe instanceof Date ? N(Qe) : Qe;
    })), H === null) {
      if (R)
        return I && !X ? I(f, m.encoder, Fe, "key", pe) : f;
      H = "";
    }
    if (p(H) || t.isBuffer(H)) {
      if (I) {
        var Ce = X ? f : I(f, m.encoder, Fe, "key", pe);
        return [me(Ce) + "=" + me(I(H, m.encoder, Fe, "value", pe))];
      }
      return [me(f) + "=" + me(String(H))];
    }
    var rt = [];
    if (typeof H > "u")
      return rt;
    var U;
    if (g === "comma" && s(H))
      X && I && (H = t.maybeMap(H, I)), U = [{ value: H.length > 0 ? H.join(",") || null : void 0 }];
    else if (s(B))
      U = B;
    else {
      var ue = Object.keys(H);
      U = M ? ue.sort(M) : ue;
    }
    var te = F ? String(f).replace(/\./g, "%2E") : String(f), z = _ && s(H) && H.length === 1 ? te + "[]" : te;
    if (A && s(H) && H.length === 0)
      return z + "[]";
    for (var re = 0; re < U.length; ++re) {
      var ne = U[re], de = typeof ne == "object" && ne && typeof ne.value < "u" ? ne.value : H[ne];
      if (!(T && de === null)) {
        var Ae = G && F ? String(ne).replace(/\./g, "%2E") : String(ne), ce = s(H) ? typeof g == "function" ? g(z, Ae) : z : z + (G ? "." + Ae : "[" + Ae + "]");
        lt.set(d, j);
        var je = e();
        je.set(E, lt), l(rt, S(
          de,
          ce,
          g,
          _,
          A,
          R,
          T,
          F,
          g === "comma" && X && s(H) ? null : I,
          B,
          M,
          G,
          N,
          pe,
          me,
          X,
          Fe,
          je
        ));
      }
    }
    return rt;
  }, b = function(d) {
    if (!d)
      return m;
    if (typeof d.allowEmptyArrays < "u" && typeof d.allowEmptyArrays != "boolean")
      throw new TypeError("`allowEmptyArrays` option can only be `true` or `false`, when provided");
    if (typeof d.encodeDotInKeys < "u" && typeof d.encodeDotInKeys != "boolean")
      throw new TypeError("`encodeDotInKeys` option can only be `true` or `false`, when provided");
    if (d.encoder !== null && typeof d.encoder < "u" && typeof d.encoder != "function")
      throw new TypeError("Encoder has to be a function.");
    var f = d.charset || m.charset;
    if (typeof d.charset < "u" && d.charset !== "utf-8" && d.charset !== "iso-8859-1")
      throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
    var g = r.default;
    if (typeof d.format < "u") {
      if (!n.call(r.formatters, d.format))
        throw new TypeError("Unknown format option provided.");
      g = d.format;
    }
    var _ = r.formatters[g], A = m.filter;
    (typeof d.filter == "function" || s(d.filter)) && (A = d.filter);
    var R;
    if (d.arrayFormat in o ? R = d.arrayFormat : "indices" in d ? R = d.indices ? "indices" : "repeat" : R = m.arrayFormat, "commaRoundTrip" in d && typeof d.commaRoundTrip != "boolean")
      throw new TypeError("`commaRoundTrip` must be a boolean, or absent");
    var T = typeof d.allowDots > "u" ? d.encodeDotInKeys === !0 ? !0 : m.allowDots : !!d.allowDots;
    return {
      addQueryPrefix: typeof d.addQueryPrefix == "boolean" ? d.addQueryPrefix : m.addQueryPrefix,
      allowDots: T,
      allowEmptyArrays: typeof d.allowEmptyArrays == "boolean" ? !!d.allowEmptyArrays : m.allowEmptyArrays,
      arrayFormat: R,
      charset: f,
      charsetSentinel: typeof d.charsetSentinel == "boolean" ? d.charsetSentinel : m.charsetSentinel,
      commaRoundTrip: !!d.commaRoundTrip,
      delimiter: typeof d.delimiter > "u" ? m.delimiter : d.delimiter,
      encode: typeof d.encode == "boolean" ? d.encode : m.encode,
      encodeDotInKeys: typeof d.encodeDotInKeys == "boolean" ? d.encodeDotInKeys : m.encodeDotInKeys,
      encoder: typeof d.encoder == "function" ? d.encoder : m.encoder,
      encodeValuesOnly: typeof d.encodeValuesOnly == "boolean" ? d.encodeValuesOnly : m.encodeValuesOnly,
      filter: A,
      format: g,
      formatter: _,
      serializeDate: typeof d.serializeDate == "function" ? d.serializeDate : m.serializeDate,
      skipNulls: typeof d.skipNulls == "boolean" ? d.skipNulls : m.skipNulls,
      sort: typeof d.sort == "function" ? d.sort : null,
      strictNullHandling: typeof d.strictNullHandling == "boolean" ? d.strictNullHandling : m.strictNullHandling
    };
  };
  return zi = function(S, d) {
    var f = S, g = b(d), _, A;
    typeof g.filter == "function" ? (A = g.filter, f = A("", f)) : s(g.filter) && (A = g.filter, _ = A);
    var R = [];
    if (typeof f != "object" || f === null)
      return "";
    var T = o[g.arrayFormat], F = T === "comma" && g.commaRoundTrip;
    _ || (_ = Object.keys(f)), g.sort && _.sort(g.sort);
    for (var I = e(), B = 0; B < _.length; ++B) {
      var M = _[B], G = f[M];
      g.skipNulls && G === null || l(R, v(
        G,
        M,
        T,
        F,
        g.allowEmptyArrays,
        g.strictNullHandling,
        g.skipNulls,
        g.encodeDotInKeys,
        g.encode ? g.encoder : null,
        g.filter,
        g.sort,
        g.allowDots,
        g.serializeDate,
        g.format,
        g.formatter,
        g.encodeValuesOnly,
        g.charset,
        I
      ));
    }
    var N = R.join(g.delimiter), pe = g.addQueryPrefix === !0 ? "?" : "";
    return g.charsetSentinel && (g.charset === "iso-8859-1" ? pe += "utf8=%26%2310003%3B&" : pe += "utf8=%E2%9C%93&"), N.length > 0 ? pe + N : "";
  }, zi;
}
var Ki, Ua;
function Op() {
  if (Ua) return Ki;
  Ua = 1;
  var e = /* @__PURE__ */ yc(), t = Object.prototype.hasOwnProperty, r = Array.isArray, n = {
    allowDots: !1,
    allowEmptyArrays: !1,
    allowPrototypes: !1,
    allowSparse: !1,
    arrayLimit: 20,
    charset: "utf-8",
    charsetSentinel: !1,
    comma: !1,
    decodeDotInKeys: !1,
    decoder: e.decode,
    delimiter: "&",
    depth: 5,
    duplicates: "combine",
    ignoreQueryPrefix: !1,
    interpretNumericEntities: !1,
    parameterLimit: 1e3,
    parseArrays: !0,
    plainObjects: !1,
    strictDepth: !1,
    strictNullHandling: !1
  }, o = function(E) {
    return E.replace(/&#(\d+);/g, function(v, b) {
      return String.fromCharCode(parseInt(b, 10));
    });
  }, s = function(E, v) {
    return E && typeof E == "string" && v.comma && E.indexOf(",") > -1 ? E.split(",") : E;
  }, a = "utf8=%26%2310003%3B", l = "utf8=%E2%9C%93", u = function(v, b) {
    var S = { __proto__: null }, d = b.ignoreQueryPrefix ? v.replace(/^\?/, "") : v;
    d = d.replace(/%5B/gi, "[").replace(/%5D/gi, "]");
    var f = b.parameterLimit === 1 / 0 ? void 0 : b.parameterLimit, g = d.split(b.delimiter, f), _ = -1, A, R = b.charset;
    if (b.charsetSentinel)
      for (A = 0; A < g.length; ++A)
        g[A].indexOf("utf8=") === 0 && (g[A] === l ? R = "utf-8" : g[A] === a && (R = "iso-8859-1"), _ = A, A = g.length);
    for (A = 0; A < g.length; ++A)
      if (A !== _) {
        var T = g[A], F = T.indexOf("]="), I = F === -1 ? T.indexOf("=") : F + 1, B, M;
        I === -1 ? (B = b.decoder(T, n.decoder, R, "key"), M = b.strictNullHandling ? null : "") : (B = b.decoder(T.slice(0, I), n.decoder, R, "key"), M = e.maybeMap(
          s(T.slice(I + 1), b),
          function(N) {
            return b.decoder(N, n.decoder, R, "value");
          }
        )), M && b.interpretNumericEntities && R === "iso-8859-1" && (M = o(String(M))), T.indexOf("[]=") > -1 && (M = r(M) ? [M] : M);
        var G = t.call(S, B);
        G && b.duplicates === "combine" ? S[B] = e.combine(S[B], M) : (!G || b.duplicates === "last") && (S[B] = M);
      }
    return S;
  }, h = function(E, v, b, S) {
    for (var d = S ? v : s(v, b), f = E.length - 1; f >= 0; --f) {
      var g, _ = E[f];
      if (_ === "[]" && b.parseArrays)
        g = b.allowEmptyArrays && (d === "" || b.strictNullHandling && d === null) ? [] : [].concat(d);
      else {
        g = b.plainObjects ? { __proto__: null } : {};
        var A = _.charAt(0) === "[" && _.charAt(_.length - 1) === "]" ? _.slice(1, -1) : _, R = b.decodeDotInKeys ? A.replace(/%2E/g, ".") : A, T = parseInt(R, 10);
        !b.parseArrays && R === "" ? g = { 0: d } : !isNaN(T) && _ !== R && String(T) === R && T >= 0 && b.parseArrays && T <= b.arrayLimit ? (g = [], g[T] = d) : R !== "__proto__" && (g[R] = d);
      }
      d = g;
    }
    return d;
  }, m = function(v, b, S, d) {
    if (v) {
      var f = S.allowDots ? v.replace(/\.([^.[]+)/g, "[$1]") : v, g = /(\[[^[\]]*])/, _ = /(\[[^[\]]*])/g, A = S.depth > 0 && g.exec(f), R = A ? f.slice(0, A.index) : f, T = [];
      if (R) {
        if (!S.plainObjects && t.call(Object.prototype, R) && !S.allowPrototypes)
          return;
        T.push(R);
      }
      for (var F = 0; S.depth > 0 && (A = _.exec(f)) !== null && F < S.depth; ) {
        if (F += 1, !S.plainObjects && t.call(Object.prototype, A[1].slice(1, -1)) && !S.allowPrototypes)
          return;
        T.push(A[1]);
      }
      if (A) {
        if (S.strictDepth === !0)
          throw new RangeError("Input depth exceeded depth option of " + S.depth + " and strictDepth is true");
        T.push("[" + f.slice(A.index) + "]");
      }
      return h(T, b, S, d);
    }
  }, p = function(v) {
    if (!v)
      return n;
    if (typeof v.allowEmptyArrays < "u" && typeof v.allowEmptyArrays != "boolean")
      throw new TypeError("`allowEmptyArrays` option can only be `true` or `false`, when provided");
    if (typeof v.decodeDotInKeys < "u" && typeof v.decodeDotInKeys != "boolean")
      throw new TypeError("`decodeDotInKeys` option can only be `true` or `false`, when provided");
    if (v.decoder !== null && typeof v.decoder < "u" && typeof v.decoder != "function")
      throw new TypeError("Decoder has to be a function.");
    if (typeof v.charset < "u" && v.charset !== "utf-8" && v.charset !== "iso-8859-1")
      throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
    var b = typeof v.charset > "u" ? n.charset : v.charset, S = typeof v.duplicates > "u" ? n.duplicates : v.duplicates;
    if (S !== "combine" && S !== "first" && S !== "last")
      throw new TypeError("The duplicates option must be either combine, first, or last");
    var d = typeof v.allowDots > "u" ? v.decodeDotInKeys === !0 ? !0 : n.allowDots : !!v.allowDots;
    return {
      allowDots: d,
      allowEmptyArrays: typeof v.allowEmptyArrays == "boolean" ? !!v.allowEmptyArrays : n.allowEmptyArrays,
      allowPrototypes: typeof v.allowPrototypes == "boolean" ? v.allowPrototypes : n.allowPrototypes,
      allowSparse: typeof v.allowSparse == "boolean" ? v.allowSparse : n.allowSparse,
      arrayLimit: typeof v.arrayLimit == "number" ? v.arrayLimit : n.arrayLimit,
      charset: b,
      charsetSentinel: typeof v.charsetSentinel == "boolean" ? v.charsetSentinel : n.charsetSentinel,
      comma: typeof v.comma == "boolean" ? v.comma : n.comma,
      decodeDotInKeys: typeof v.decodeDotInKeys == "boolean" ? v.decodeDotInKeys : n.decodeDotInKeys,
      decoder: typeof v.decoder == "function" ? v.decoder : n.decoder,
      delimiter: typeof v.delimiter == "string" || e.isRegExp(v.delimiter) ? v.delimiter : n.delimiter,
      // eslint-disable-next-line no-implicit-coercion, no-extra-parens
      depth: typeof v.depth == "number" || v.depth === !1 ? +v.depth : n.depth,
      duplicates: S,
      ignoreQueryPrefix: v.ignoreQueryPrefix === !0,
      interpretNumericEntities: typeof v.interpretNumericEntities == "boolean" ? v.interpretNumericEntities : n.interpretNumericEntities,
      parameterLimit: typeof v.parameterLimit == "number" ? v.parameterLimit : n.parameterLimit,
      parseArrays: v.parseArrays !== !1,
      plainObjects: typeof v.plainObjects == "boolean" ? v.plainObjects : n.plainObjects,
      strictDepth: typeof v.strictDepth == "boolean" ? !!v.strictDepth : n.strictDepth,
      strictNullHandling: typeof v.strictNullHandling == "boolean" ? v.strictNullHandling : n.strictNullHandling
    };
  };
  return Ki = function(E, v) {
    var b = p(v);
    if (E === "" || E === null || typeof E > "u")
      return b.plainObjects ? { __proto__: null } : {};
    for (var S = typeof E == "string" ? u(E, b) : E, d = b.plainObjects ? { __proto__: null } : {}, f = Object.keys(S), g = 0; g < f.length; ++g) {
      var _ = f[g], A = m(_, S[_], b, typeof E == "string");
      d = e.merge(d, A, b);
    }
    return b.allowSparse === !0 ? d : e.compact(d);
  }, Ki;
}
var Gi, Va;
function xp() {
  if (Va) return Gi;
  Va = 1;
  var e = /* @__PURE__ */ Ep(), t = /* @__PURE__ */ Op(), r = /* @__PURE__ */ Fs();
  return Gi = {
    formats: r,
    parse: t,
    stringify: e
  }, Gi;
}
var Ha = /* @__PURE__ */ xp();
function mc(e, t) {
  return function() {
    return e.apply(t, arguments);
  };
}
const { toString: Ap } = Object.prototype, { getPrototypeOf: qs } = Object, Eo = /* @__PURE__ */ ((e) => (t) => {
  const r = Ap.call(t);
  return e[r] || (e[r] = r.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), St = (e) => (e = e.toLowerCase(), (t) => Eo(t) === e), Oo = (e) => (t) => typeof t === e, { isArray: Zr } = Array, xn = Oo("undefined");
function Pp(e) {
  return e !== null && !xn(e) && e.constructor !== null && !xn(e.constructor) && st(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}
const gc = St("ArrayBuffer");
function Rp(e) {
  let t;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && gc(e.buffer), t;
}
const Tp = Oo("string"), st = Oo("function"), vc = Oo("number"), xo = (e) => e !== null && typeof e == "object", Cp = (e) => e === !0 || e === !1, Jn = (e) => {
  if (Eo(e) !== "object")
    return !1;
  const t = qs(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}, Np = St("Date"), Ip = St("File"), Dp = St("Blob"), Fp = St("FileList"), qp = (e) => xo(e) && st(e.pipe), Mp = (e) => {
  let t;
  return e && (typeof FormData == "function" && e instanceof FormData || st(e.append) && ((t = Eo(e)) === "formdata" || // detect form-data instance
  t === "object" && st(e.toString) && e.toString() === "[object FormData]"));
}, $p = St("URLSearchParams"), [Lp, kp, Bp, jp] = ["ReadableStream", "Request", "Response", "Headers"].map(St), Up = (e) => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function Tn(e, t, { allOwnKeys: r = !1 } = {}) {
  if (e === null || typeof e > "u")
    return;
  let n, o;
  if (typeof e != "object" && (e = [e]), Zr(e))
    for (n = 0, o = e.length; n < o; n++)
      t.call(null, e[n], n, e);
  else {
    const s = r ? Object.getOwnPropertyNames(e) : Object.keys(e), a = s.length;
    let l;
    for (n = 0; n < a; n++)
      l = s[n], t.call(null, e[l], l, e);
  }
}
function bc(e, t) {
  t = t.toLowerCase();
  const r = Object.keys(e);
  let n = r.length, o;
  for (; n-- > 0; )
    if (o = r[n], t === o.toLowerCase())
      return o;
  return null;
}
const br = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global, wc = (e) => !xn(e) && e !== br;
function us() {
  const { caseless: e } = wc(this) && this || {}, t = {}, r = (n, o) => {
    const s = e && bc(t, o) || o;
    Jn(t[s]) && Jn(n) ? t[s] = us(t[s], n) : Jn(n) ? t[s] = us({}, n) : Zr(n) ? t[s] = n.slice() : t[s] = n;
  };
  for (let n = 0, o = arguments.length; n < o; n++)
    arguments[n] && Tn(arguments[n], r);
  return t;
}
const Vp = (e, t, r, { allOwnKeys: n } = {}) => (Tn(t, (o, s) => {
  r && st(o) ? e[s] = mc(o, r) : e[s] = o;
}, { allOwnKeys: n }), e), Hp = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e), Wp = (e, t, r, n) => {
  e.prototype = Object.create(t.prototype, n), e.prototype.constructor = e, Object.defineProperty(e, "super", {
    value: t.prototype
  }), r && Object.assign(e.prototype, r);
}, zp = (e, t, r, n) => {
  let o, s, a;
  const l = {};
  if (t = t || {}, e == null) return t;
  do {
    for (o = Object.getOwnPropertyNames(e), s = o.length; s-- > 0; )
      a = o[s], (!n || n(a, e, t)) && !l[a] && (t[a] = e[a], l[a] = !0);
    e = r !== !1 && qs(e);
  } while (e && (!r || r(e, t)) && e !== Object.prototype);
  return t;
}, Kp = (e, t, r) => {
  e = String(e), (r === void 0 || r > e.length) && (r = e.length), r -= t.length;
  const n = e.indexOf(t, r);
  return n !== -1 && n === r;
}, Gp = (e) => {
  if (!e) return null;
  if (Zr(e)) return e;
  let t = e.length;
  if (!vc(t)) return null;
  const r = new Array(t);
  for (; t-- > 0; )
    r[t] = e[t];
  return r;
}, Jp = /* @__PURE__ */ ((e) => (t) => e && t instanceof e)(typeof Uint8Array < "u" && qs(Uint8Array)), Qp = (e, t) => {
  const n = (e && e[Symbol.iterator]).call(e);
  let o;
  for (; (o = n.next()) && !o.done; ) {
    const s = o.value;
    t.call(e, s[0], s[1]);
  }
}, Xp = (e, t) => {
  let r;
  const n = [];
  for (; (r = e.exec(t)) !== null; )
    n.push(r);
  return n;
}, Yp = St("HTMLFormElement"), Zp = (e) => e.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(r, n, o) {
    return n.toUpperCase() + o;
  }
), Wa = (({ hasOwnProperty: e }) => (t, r) => e.call(t, r))(Object.prototype), ed = St("RegExp"), Sc = (e, t) => {
  const r = Object.getOwnPropertyDescriptors(e), n = {};
  Tn(r, (o, s) => {
    let a;
    (a = t(o, s, e)) !== !1 && (n[s] = a || o);
  }), Object.defineProperties(e, n);
}, td = (e) => {
  Sc(e, (t, r) => {
    if (st(e) && ["arguments", "caller", "callee"].indexOf(r) !== -1)
      return !1;
    const n = e[r];
    if (st(n)) {
      if (t.enumerable = !1, "writable" in t) {
        t.writable = !1;
        return;
      }
      t.set || (t.set = () => {
        throw Error("Can not rewrite read-only method '" + r + "'");
      });
    }
  });
}, rd = (e, t) => {
  const r = {}, n = (o) => {
    o.forEach((s) => {
      r[s] = !0;
    });
  };
  return Zr(e) ? n(e) : n(String(e).split(t)), r;
}, nd = () => {
}, od = (e, t) => e != null && Number.isFinite(e = +e) ? e : t, Ji = "abcdefghijklmnopqrstuvwxyz", za = "0123456789", _c = {
  DIGIT: za,
  ALPHA: Ji,
  ALPHA_DIGIT: Ji + Ji.toUpperCase() + za
}, id = (e = 16, t = _c.ALPHA_DIGIT) => {
  let r = "";
  const { length: n } = t;
  for (; e--; )
    r += t[Math.random() * n | 0];
  return r;
};
function sd(e) {
  return !!(e && st(e.append) && e[Symbol.toStringTag] === "FormData" && e[Symbol.iterator]);
}
const ad = (e) => {
  const t = new Array(10), r = (n, o) => {
    if (xo(n)) {
      if (t.indexOf(n) >= 0)
        return;
      if (!("toJSON" in n)) {
        t[o] = n;
        const s = Zr(n) ? [] : {};
        return Tn(n, (a, l) => {
          const u = r(a, o + 1);
          !xn(u) && (s[l] = u);
        }), t[o] = void 0, s;
      }
    }
    return n;
  };
  return r(e, 0);
}, ld = St("AsyncFunction"), cd = (e) => e && (xo(e) || st(e)) && st(e.then) && st(e.catch), Ec = ((e, t) => e ? setImmediate : t ? ((r, n) => (br.addEventListener("message", ({ source: o, data: s }) => {
  o === br && s === r && n.length && n.shift()();
}, !1), (o) => {
  n.push(o), br.postMessage(r, "*");
}))(`axios@${Math.random()}`, []) : (r) => setTimeout(r))(
  typeof setImmediate == "function",
  st(br.postMessage)
), ud = typeof queueMicrotask < "u" ? queueMicrotask.bind(br) : typeof process < "u" && process.nextTick || Ec, x = {
  isArray: Zr,
  isArrayBuffer: gc,
  isBuffer: Pp,
  isFormData: Mp,
  isArrayBufferView: Rp,
  isString: Tp,
  isNumber: vc,
  isBoolean: Cp,
  isObject: xo,
  isPlainObject: Jn,
  isReadableStream: Lp,
  isRequest: kp,
  isResponse: Bp,
  isHeaders: jp,
  isUndefined: xn,
  isDate: Np,
  isFile: Ip,
  isBlob: Dp,
  isRegExp: ed,
  isFunction: st,
  isStream: qp,
  isURLSearchParams: $p,
  isTypedArray: Jp,
  isFileList: Fp,
  forEach: Tn,
  merge: us,
  extend: Vp,
  trim: Up,
  stripBOM: Hp,
  inherits: Wp,
  toFlatObject: zp,
  kindOf: Eo,
  kindOfTest: St,
  endsWith: Kp,
  toArray: Gp,
  forEachEntry: Qp,
  matchAll: Xp,
  isHTMLForm: Yp,
  hasOwnProperty: Wa,
  hasOwnProp: Wa,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: Sc,
  freezeMethods: td,
  toObjectSet: rd,
  toCamelCase: Zp,
  noop: nd,
  toFiniteNumber: od,
  findKey: bc,
  global: br,
  isContextDefined: wc,
  ALPHABET: _c,
  generateString: id,
  isSpecCompliantForm: sd,
  toJSONObject: ad,
  isAsyncFn: ld,
  isThenable: cd,
  setImmediate: Ec,
  asap: ud
};
function k(e, t, r, n, o) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = e, this.name = "AxiosError", t && (this.code = t), r && (this.config = r), n && (this.request = n), o && (this.response = o, this.status = o.status ? o.status : null);
}
x.inherits(k, Error, {
  toJSON: function() {
    return {
      // Standard
      message: this.message,
      name: this.name,
      // Microsoft
      description: this.description,
      number: this.number,
      // Mozilla
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      // Axios
      config: x.toJSONObject(this.config),
      code: this.code,
      status: this.status
    };
  }
});
const Oc = k.prototype, xc = {};
[
  "ERR_BAD_OPTION_VALUE",
  "ERR_BAD_OPTION",
  "ECONNABORTED",
  "ETIMEDOUT",
  "ERR_NETWORK",
  "ERR_FR_TOO_MANY_REDIRECTS",
  "ERR_DEPRECATED",
  "ERR_BAD_RESPONSE",
  "ERR_BAD_REQUEST",
  "ERR_CANCELED",
  "ERR_NOT_SUPPORT",
  "ERR_INVALID_URL"
  // eslint-disable-next-line func-names
].forEach((e) => {
  xc[e] = { value: e };
});
Object.defineProperties(k, xc);
Object.defineProperty(Oc, "isAxiosError", { value: !0 });
k.from = (e, t, r, n, o, s) => {
  const a = Object.create(Oc);
  return x.toFlatObject(e, a, function(u) {
    return u !== Error.prototype;
  }, (l) => l !== "isAxiosError"), k.call(a, e.message, t, r, n, o), a.cause = e, a.name = e.name, s && Object.assign(a, s), a;
};
const fd = null;
function fs(e) {
  return x.isPlainObject(e) || x.isArray(e);
}
function Ac(e) {
  return x.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function Ka(e, t, r) {
  return e ? e.concat(t).map(function(o, s) {
    return o = Ac(o), !r && s ? "[" + o + "]" : o;
  }).join(r ? "." : "") : t;
}
function pd(e) {
  return x.isArray(e) && !e.some(fs);
}
const dd = x.toFlatObject(x, {}, null, function(t) {
  return /^is[A-Z]/.test(t);
});
function Ao(e, t, r) {
  if (!x.isObject(e))
    throw new TypeError("target must be an object");
  t = t || new FormData(), r = x.toFlatObject(r, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(S, d) {
    return !x.isUndefined(d[S]);
  });
  const n = r.metaTokens, o = r.visitor || m, s = r.dots, a = r.indexes, u = (r.Blob || typeof Blob < "u" && Blob) && x.isSpecCompliantForm(t);
  if (!x.isFunction(o))
    throw new TypeError("visitor must be a function");
  function h(b) {
    if (b === null) return "";
    if (x.isDate(b))
      return b.toISOString();
    if (!u && x.isBlob(b))
      throw new k("Blob is not supported. Use a Buffer instead.");
    return x.isArrayBuffer(b) || x.isTypedArray(b) ? u && typeof Blob == "function" ? new Blob([b]) : Buffer.from(b) : b;
  }
  function m(b, S, d) {
    let f = b;
    if (b && !d && typeof b == "object") {
      if (x.endsWith(S, "{}"))
        S = n ? S : S.slice(0, -2), b = JSON.stringify(b);
      else if (x.isArray(b) && pd(b) || (x.isFileList(b) || x.endsWith(S, "[]")) && (f = x.toArray(b)))
        return S = Ac(S), f.forEach(function(_, A) {
          !(x.isUndefined(_) || _ === null) && t.append(
            // eslint-disable-next-line no-nested-ternary
            a === !0 ? Ka([S], A, s) : a === null ? S : S + "[]",
            h(_)
          );
        }), !1;
    }
    return fs(b) ? !0 : (t.append(Ka(d, S, s), h(b)), !1);
  }
  const p = [], E = Object.assign(dd, {
    defaultVisitor: m,
    convertValue: h,
    isVisitable: fs
  });
  function v(b, S) {
    if (!x.isUndefined(b)) {
      if (p.indexOf(b) !== -1)
        throw Error("Circular reference detected in " + S.join("."));
      p.push(b), x.forEach(b, function(f, g) {
        (!(x.isUndefined(f) || f === null) && o.call(
          t,
          f,
          x.isString(g) ? g.trim() : g,
          S,
          E
        )) === !0 && v(f, S ? S.concat(g) : [g]);
      }), p.pop();
    }
  }
  if (!x.isObject(e))
    throw new TypeError("data must be an object");
  return v(e), t;
}
function Ga(e) {
  const t = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0"
  };
  return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function(n) {
    return t[n];
  });
}
function Ms(e, t) {
  this._pairs = [], e && Ao(e, this, t);
}
const Pc = Ms.prototype;
Pc.append = function(t, r) {
  this._pairs.push([t, r]);
};
Pc.toString = function(t) {
  const r = t ? function(n) {
    return t.call(this, n, Ga);
  } : Ga;
  return this._pairs.map(function(o) {
    return r(o[0]) + "=" + r(o[1]);
  }, "").join("&");
};
function hd(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function Rc(e, t, r) {
  if (!t)
    return e;
  const n = r && r.encode || hd;
  x.isFunction(r) && (r = {
    serialize: r
  });
  const o = r && r.serialize;
  let s;
  if (o ? s = o(t, r) : s = x.isURLSearchParams(t) ? t.toString() : new Ms(t, r).toString(n), s) {
    const a = e.indexOf("#");
    a !== -1 && (e = e.slice(0, a)), e += (e.indexOf("?") === -1 ? "?" : "&") + s;
  }
  return e;
}
class Ja {
  constructor() {
    this.handlers = [];
  }
  /**
   * Add a new interceptor to the stack
   *
   * @param {Function} fulfilled The function to handle `then` for a `Promise`
   * @param {Function} rejected The function to handle `reject` for a `Promise`
   *
   * @return {Number} An ID used to remove interceptor later
   */
  use(t, r, n) {
    return this.handlers.push({
      fulfilled: t,
      rejected: r,
      synchronous: n ? n.synchronous : !1,
      runWhen: n ? n.runWhen : null
    }), this.handlers.length - 1;
  }
  /**
   * Remove an interceptor from the stack
   *
   * @param {Number} id The ID that was returned by `use`
   *
   * @returns {Boolean} `true` if the interceptor was removed, `false` otherwise
   */
  eject(t) {
    this.handlers[t] && (this.handlers[t] = null);
  }
  /**
   * Clear all interceptors from the stack
   *
   * @returns {void}
   */
  clear() {
    this.handlers && (this.handlers = []);
  }
  /**
   * Iterate over all the registered interceptors
   *
   * This method is particularly useful for skipping over any
   * interceptors that may have become `null` calling `eject`.
   *
   * @param {Function} fn The function to call for each interceptor
   *
   * @returns {void}
   */
  forEach(t) {
    x.forEach(this.handlers, function(n) {
      n !== null && t(n);
    });
  }
}
const Tc = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, yd = typeof URLSearchParams < "u" ? URLSearchParams : Ms, md = typeof FormData < "u" ? FormData : null, gd = typeof Blob < "u" ? Blob : null, vd = {
  isBrowser: !0,
  classes: {
    URLSearchParams: yd,
    FormData: md,
    Blob: gd
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, $s = typeof window < "u" && typeof document < "u", ps = typeof navigator == "object" && navigator || void 0, bd = $s && (!ps || ["ReactNative", "NativeScript", "NS"].indexOf(ps.product) < 0), wd = typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function", Sd = $s && window.location.href || "http://localhost", _d = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: $s,
  hasStandardBrowserEnv: bd,
  hasStandardBrowserWebWorkerEnv: wd,
  navigator: ps,
  origin: Sd
}, Symbol.toStringTag, { value: "Module" })), ke = {
  ..._d,
  ...vd
};
function Ed(e, t) {
  return Ao(e, new ke.classes.URLSearchParams(), Object.assign({
    visitor: function(r, n, o, s) {
      return ke.isNode && x.isBuffer(r) ? (this.append(n, r.toString("base64")), !1) : s.defaultVisitor.apply(this, arguments);
    }
  }, t));
}
function Od(e) {
  return x.matchAll(/\w+|\[(\w*)]/g, e).map((t) => t[0] === "[]" ? "" : t[1] || t[0]);
}
function xd(e) {
  const t = {}, r = Object.keys(e);
  let n;
  const o = r.length;
  let s;
  for (n = 0; n < o; n++)
    s = r[n], t[s] = e[s];
  return t;
}
function Cc(e) {
  function t(r, n, o, s) {
    let a = r[s++];
    if (a === "__proto__") return !0;
    const l = Number.isFinite(+a), u = s >= r.length;
    return a = !a && x.isArray(o) ? o.length : a, u ? (x.hasOwnProp(o, a) ? o[a] = [o[a], n] : o[a] = n, !l) : ((!o[a] || !x.isObject(o[a])) && (o[a] = []), t(r, n, o[a], s) && x.isArray(o[a]) && (o[a] = xd(o[a])), !l);
  }
  if (x.isFormData(e) && x.isFunction(e.entries)) {
    const r = {};
    return x.forEachEntry(e, (n, o) => {
      t(Od(n), o, r, 0);
    }), r;
  }
  return null;
}
function Ad(e, t, r) {
  if (x.isString(e))
    try {
      return (t || JSON.parse)(e), x.trim(e);
    } catch (n) {
      if (n.name !== "SyntaxError")
        throw n;
    }
  return (0, JSON.stringify)(e);
}
const Cn = {
  transitional: Tc,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [function(t, r) {
    const n = r.getContentType() || "", o = n.indexOf("application/json") > -1, s = x.isObject(t);
    if (s && x.isHTMLForm(t) && (t = new FormData(t)), x.isFormData(t))
      return o ? JSON.stringify(Cc(t)) : t;
    if (x.isArrayBuffer(t) || x.isBuffer(t) || x.isStream(t) || x.isFile(t) || x.isBlob(t) || x.isReadableStream(t))
      return t;
    if (x.isArrayBufferView(t))
      return t.buffer;
    if (x.isURLSearchParams(t))
      return r.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), t.toString();
    let l;
    if (s) {
      if (n.indexOf("application/x-www-form-urlencoded") > -1)
        return Ed(t, this.formSerializer).toString();
      if ((l = x.isFileList(t)) || n.indexOf("multipart/form-data") > -1) {
        const u = this.env && this.env.FormData;
        return Ao(
          l ? { "files[]": t } : t,
          u && new u(),
          this.formSerializer
        );
      }
    }
    return s || o ? (r.setContentType("application/json", !1), Ad(t)) : t;
  }],
  transformResponse: [function(t) {
    const r = this.transitional || Cn.transitional, n = r && r.forcedJSONParsing, o = this.responseType === "json";
    if (x.isResponse(t) || x.isReadableStream(t))
      return t;
    if (t && x.isString(t) && (n && !this.responseType || o)) {
      const a = !(r && r.silentJSONParsing) && o;
      try {
        return JSON.parse(t);
      } catch (l) {
        if (a)
          throw l.name === "SyntaxError" ? k.from(l, k.ERR_BAD_RESPONSE, this, null, this.response) : l;
      }
    }
    return t;
  }],
  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: {
    FormData: ke.classes.FormData,
    Blob: ke.classes.Blob
  },
  validateStatus: function(t) {
    return t >= 200 && t < 300;
  },
  headers: {
    common: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": void 0
    }
  }
};
x.forEach(["delete", "get", "head", "post", "put", "patch"], (e) => {
  Cn.headers[e] = {};
});
const Pd = x.toObjectSet([
  "age",
  "authorization",
  "content-length",
  "content-type",
  "etag",
  "expires",
  "from",
  "host",
  "if-modified-since",
  "if-unmodified-since",
  "last-modified",
  "location",
  "max-forwards",
  "proxy-authorization",
  "referer",
  "retry-after",
  "user-agent"
]), Rd = (e) => {
  const t = {};
  let r, n, o;
  return e && e.split(`
`).forEach(function(a) {
    o = a.indexOf(":"), r = a.substring(0, o).trim().toLowerCase(), n = a.substring(o + 1).trim(), !(!r || t[r] && Pd[r]) && (r === "set-cookie" ? t[r] ? t[r].push(n) : t[r] = [n] : t[r] = t[r] ? t[r] + ", " + n : n);
  }), t;
}, Qa = Symbol("internals");
function un(e) {
  return e && String(e).trim().toLowerCase();
}
function Qn(e) {
  return e === !1 || e == null ? e : x.isArray(e) ? e.map(Qn) : String(e);
}
function Td(e) {
  const t = /* @__PURE__ */ Object.create(null), r = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let n;
  for (; n = r.exec(e); )
    t[n[1]] = n[2];
  return t;
}
const Cd = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function Qi(e, t, r, n, o) {
  if (x.isFunction(n))
    return n.call(this, t, r);
  if (o && (t = r), !!x.isString(t)) {
    if (x.isString(n))
      return t.indexOf(n) !== -1;
    if (x.isRegExp(n))
      return n.test(t);
  }
}
function Nd(e) {
  return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t, r, n) => r.toUpperCase() + n);
}
function Id(e, t) {
  const r = x.toCamelCase(" " + t);
  ["get", "set", "has"].forEach((n) => {
    Object.defineProperty(e, n + r, {
      value: function(o, s, a) {
        return this[n].call(this, t, o, s, a);
      },
      configurable: !0
    });
  });
}
class et {
  constructor(t) {
    t && this.set(t);
  }
  set(t, r, n) {
    const o = this;
    function s(l, u, h) {
      const m = un(u);
      if (!m)
        throw new Error("header name must be a non-empty string");
      const p = x.findKey(o, m);
      (!p || o[p] === void 0 || h === !0 || h === void 0 && o[p] !== !1) && (o[p || u] = Qn(l));
    }
    const a = (l, u) => x.forEach(l, (h, m) => s(h, m, u));
    if (x.isPlainObject(t) || t instanceof this.constructor)
      a(t, r);
    else if (x.isString(t) && (t = t.trim()) && !Cd(t))
      a(Rd(t), r);
    else if (x.isHeaders(t))
      for (const [l, u] of t.entries())
        s(u, l, n);
    else
      t != null && s(r, t, n);
    return this;
  }
  get(t, r) {
    if (t = un(t), t) {
      const n = x.findKey(this, t);
      if (n) {
        const o = this[n];
        if (!r)
          return o;
        if (r === !0)
          return Td(o);
        if (x.isFunction(r))
          return r.call(this, o, n);
        if (x.isRegExp(r))
          return r.exec(o);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, r) {
    if (t = un(t), t) {
      const n = x.findKey(this, t);
      return !!(n && this[n] !== void 0 && (!r || Qi(this, this[n], n, r)));
    }
    return !1;
  }
  delete(t, r) {
    const n = this;
    let o = !1;
    function s(a) {
      if (a = un(a), a) {
        const l = x.findKey(n, a);
        l && (!r || Qi(n, n[l], l, r)) && (delete n[l], o = !0);
      }
    }
    return x.isArray(t) ? t.forEach(s) : s(t), o;
  }
  clear(t) {
    const r = Object.keys(this);
    let n = r.length, o = !1;
    for (; n--; ) {
      const s = r[n];
      (!t || Qi(this, this[s], s, t, !0)) && (delete this[s], o = !0);
    }
    return o;
  }
  normalize(t) {
    const r = this, n = {};
    return x.forEach(this, (o, s) => {
      const a = x.findKey(n, s);
      if (a) {
        r[a] = Qn(o), delete r[s];
        return;
      }
      const l = t ? Nd(s) : String(s).trim();
      l !== s && delete r[s], r[l] = Qn(o), n[l] = !0;
    }), this;
  }
  concat(...t) {
    return this.constructor.concat(this, ...t);
  }
  toJSON(t) {
    const r = /* @__PURE__ */ Object.create(null);
    return x.forEach(this, (n, o) => {
      n != null && n !== !1 && (r[o] = t && x.isArray(n) ? n.join(", ") : n);
    }), r;
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([t, r]) => t + ": " + r).join(`
`);
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(t) {
    return t instanceof this ? t : new this(t);
  }
  static concat(t, ...r) {
    const n = new this(t);
    return r.forEach((o) => n.set(o)), n;
  }
  static accessor(t) {
    const n = (this[Qa] = this[Qa] = {
      accessors: {}
    }).accessors, o = this.prototype;
    function s(a) {
      const l = un(a);
      n[l] || (Id(o, a), n[l] = !0);
    }
    return x.isArray(t) ? t.forEach(s) : s(t), this;
  }
}
et.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
x.reduceDescriptors(et.prototype, ({ value: e }, t) => {
  let r = t[0].toUpperCase() + t.slice(1);
  return {
    get: () => e,
    set(n) {
      this[r] = n;
    }
  };
});
x.freezeMethods(et);
function Xi(e, t) {
  const r = this || Cn, n = t || r, o = et.from(n.headers);
  let s = n.data;
  return x.forEach(e, function(l) {
    s = l.call(r, s, o.normalize(), t ? t.status : void 0);
  }), o.normalize(), s;
}
function Nc(e) {
  return !!(e && e.__CANCEL__);
}
function en(e, t, r) {
  k.call(this, e ?? "canceled", k.ERR_CANCELED, t, r), this.name = "CanceledError";
}
x.inherits(en, k, {
  __CANCEL__: !0
});
function Ic(e, t, r) {
  const n = r.config.validateStatus;
  !r.status || !n || n(r.status) ? e(r) : t(new k(
    "Request failed with status code " + r.status,
    [k.ERR_BAD_REQUEST, k.ERR_BAD_RESPONSE][Math.floor(r.status / 100) - 4],
    r.config,
    r.request,
    r
  ));
}
function Dd(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return t && t[1] || "";
}
function Fd(e, t) {
  e = e || 10;
  const r = new Array(e), n = new Array(e);
  let o = 0, s = 0, a;
  return t = t !== void 0 ? t : 1e3, function(u) {
    const h = Date.now(), m = n[s];
    a || (a = h), r[o] = u, n[o] = h;
    let p = s, E = 0;
    for (; p !== o; )
      E += r[p++], p = p % e;
    if (o = (o + 1) % e, o === s && (s = (s + 1) % e), h - a < t)
      return;
    const v = m && h - m;
    return v ? Math.round(E * 1e3 / v) : void 0;
  };
}
function qd(e, t) {
  let r = 0, n = 1e3 / t, o, s;
  const a = (h, m = Date.now()) => {
    r = m, o = null, s && (clearTimeout(s), s = null), e.apply(null, h);
  };
  return [(...h) => {
    const m = Date.now(), p = m - r;
    p >= n ? a(h, m) : (o = h, s || (s = setTimeout(() => {
      s = null, a(o);
    }, n - p)));
  }, () => o && a(o)];
}
const fo = (e, t, r = 3) => {
  let n = 0;
  const o = Fd(50, 250);
  return qd((s) => {
    const a = s.loaded, l = s.lengthComputable ? s.total : void 0, u = a - n, h = o(u), m = a <= l;
    n = a;
    const p = {
      loaded: a,
      total: l,
      progress: l ? a / l : void 0,
      bytes: u,
      rate: h || void 0,
      estimated: h && l && m ? (l - a) / h : void 0,
      event: s,
      lengthComputable: l != null,
      [t ? "download" : "upload"]: !0
    };
    e(p);
  }, r);
}, Xa = (e, t) => {
  const r = e != null;
  return [(n) => t[0]({
    lengthComputable: r,
    total: e,
    loaded: n
  }), t[1]];
}, Ya = (e) => (...t) => x.asap(() => e(...t)), Md = ke.hasStandardBrowserEnv ? /* @__PURE__ */ ((e, t) => (r) => (r = new URL(r, ke.origin), e.protocol === r.protocol && e.host === r.host && (t || e.port === r.port)))(
  new URL(ke.origin),
  ke.navigator && /(msie|trident)/i.test(ke.navigator.userAgent)
) : () => !0, $d = ke.hasStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  {
    write(e, t, r, n, o, s) {
      const a = [e + "=" + encodeURIComponent(t)];
      x.isNumber(r) && a.push("expires=" + new Date(r).toGMTString()), x.isString(n) && a.push("path=" + n), x.isString(o) && a.push("domain=" + o), s === !0 && a.push("secure"), document.cookie = a.join("; ");
    },
    read(e) {
      const t = document.cookie.match(new RegExp("(^|;\\s*)(" + e + ")=([^;]*)"));
      return t ? decodeURIComponent(t[3]) : null;
    },
    remove(e) {
      this.write(e, "", Date.now() - 864e5);
    }
  }
) : (
  // Non-standard browser env (web workers, react-native) lack needed support.
  {
    write() {
    },
    read() {
      return null;
    },
    remove() {
    }
  }
);
function Ld(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function kd(e, t) {
  return t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function Dc(e, t) {
  return e && !Ld(t) ? kd(e, t) : t;
}
const Za = (e) => e instanceof et ? { ...e } : e;
function Ar(e, t) {
  t = t || {};
  const r = {};
  function n(h, m, p, E) {
    return x.isPlainObject(h) && x.isPlainObject(m) ? x.merge.call({ caseless: E }, h, m) : x.isPlainObject(m) ? x.merge({}, m) : x.isArray(m) ? m.slice() : m;
  }
  function o(h, m, p, E) {
    if (x.isUndefined(m)) {
      if (!x.isUndefined(h))
        return n(void 0, h, p, E);
    } else return n(h, m, p, E);
  }
  function s(h, m) {
    if (!x.isUndefined(m))
      return n(void 0, m);
  }
  function a(h, m) {
    if (x.isUndefined(m)) {
      if (!x.isUndefined(h))
        return n(void 0, h);
    } else return n(void 0, m);
  }
  function l(h, m, p) {
    if (p in t)
      return n(h, m);
    if (p in e)
      return n(void 0, h);
  }
  const u = {
    url: s,
    method: s,
    data: s,
    baseURL: a,
    transformRequest: a,
    transformResponse: a,
    paramsSerializer: a,
    timeout: a,
    timeoutMessage: a,
    withCredentials: a,
    withXSRFToken: a,
    adapter: a,
    responseType: a,
    xsrfCookieName: a,
    xsrfHeaderName: a,
    onUploadProgress: a,
    onDownloadProgress: a,
    decompress: a,
    maxContentLength: a,
    maxBodyLength: a,
    beforeRedirect: a,
    transport: a,
    httpAgent: a,
    httpsAgent: a,
    cancelToken: a,
    socketPath: a,
    responseEncoding: a,
    validateStatus: l,
    headers: (h, m, p) => o(Za(h), Za(m), p, !0)
  };
  return x.forEach(Object.keys(Object.assign({}, e, t)), function(m) {
    const p = u[m] || o, E = p(e[m], t[m], m);
    x.isUndefined(E) && p !== l || (r[m] = E);
  }), r;
}
const Fc = (e) => {
  const t = Ar({}, e);
  let { data: r, withXSRFToken: n, xsrfHeaderName: o, xsrfCookieName: s, headers: a, auth: l } = t;
  t.headers = a = et.from(a), t.url = Rc(Dc(t.baseURL, t.url), e.params, e.paramsSerializer), l && a.set(
    "Authorization",
    "Basic " + btoa((l.username || "") + ":" + (l.password ? unescape(encodeURIComponent(l.password)) : ""))
  );
  let u;
  if (x.isFormData(r)) {
    if (ke.hasStandardBrowserEnv || ke.hasStandardBrowserWebWorkerEnv)
      a.setContentType(void 0);
    else if ((u = a.getContentType()) !== !1) {
      const [h, ...m] = u ? u.split(";").map((p) => p.trim()).filter(Boolean) : [];
      a.setContentType([h || "multipart/form-data", ...m].join("; "));
    }
  }
  if (ke.hasStandardBrowserEnv && (n && x.isFunction(n) && (n = n(t)), n || n !== !1 && Md(t.url))) {
    const h = o && s && $d.read(s);
    h && a.set(o, h);
  }
  return t;
}, Bd = typeof XMLHttpRequest < "u", jd = Bd && function(e) {
  return new Promise(function(r, n) {
    const o = Fc(e);
    let s = o.data;
    const a = et.from(o.headers).normalize();
    let { responseType: l, onUploadProgress: u, onDownloadProgress: h } = o, m, p, E, v, b;
    function S() {
      v && v(), b && b(), o.cancelToken && o.cancelToken.unsubscribe(m), o.signal && o.signal.removeEventListener("abort", m);
    }
    let d = new XMLHttpRequest();
    d.open(o.method.toUpperCase(), o.url, !0), d.timeout = o.timeout;
    function f() {
      if (!d)
        return;
      const _ = et.from(
        "getAllResponseHeaders" in d && d.getAllResponseHeaders()
      ), R = {
        data: !l || l === "text" || l === "json" ? d.responseText : d.response,
        status: d.status,
        statusText: d.statusText,
        headers: _,
        config: e,
        request: d
      };
      Ic(function(F) {
        r(F), S();
      }, function(F) {
        n(F), S();
      }, R), d = null;
    }
    "onloadend" in d ? d.onloadend = f : d.onreadystatechange = function() {
      !d || d.readyState !== 4 || d.status === 0 && !(d.responseURL && d.responseURL.indexOf("file:") === 0) || setTimeout(f);
    }, d.onabort = function() {
      d && (n(new k("Request aborted", k.ECONNABORTED, e, d)), d = null);
    }, d.onerror = function() {
      n(new k("Network Error", k.ERR_NETWORK, e, d)), d = null;
    }, d.ontimeout = function() {
      let A = o.timeout ? "timeout of " + o.timeout + "ms exceeded" : "timeout exceeded";
      const R = o.transitional || Tc;
      o.timeoutErrorMessage && (A = o.timeoutErrorMessage), n(new k(
        A,
        R.clarifyTimeoutError ? k.ETIMEDOUT : k.ECONNABORTED,
        e,
        d
      )), d = null;
    }, s === void 0 && a.setContentType(null), "setRequestHeader" in d && x.forEach(a.toJSON(), function(A, R) {
      d.setRequestHeader(R, A);
    }), x.isUndefined(o.withCredentials) || (d.withCredentials = !!o.withCredentials), l && l !== "json" && (d.responseType = o.responseType), h && ([E, b] = fo(h, !0), d.addEventListener("progress", E)), u && d.upload && ([p, v] = fo(u), d.upload.addEventListener("progress", p), d.upload.addEventListener("loadend", v)), (o.cancelToken || o.signal) && (m = (_) => {
      d && (n(!_ || _.type ? new en(null, e, d) : _), d.abort(), d = null);
    }, o.cancelToken && o.cancelToken.subscribe(m), o.signal && (o.signal.aborted ? m() : o.signal.addEventListener("abort", m)));
    const g = Dd(o.url);
    if (g && ke.protocols.indexOf(g) === -1) {
      n(new k("Unsupported protocol " + g + ":", k.ERR_BAD_REQUEST, e));
      return;
    }
    d.send(s || null);
  });
}, Ud = (e, t) => {
  const { length: r } = e = e ? e.filter(Boolean) : [];
  if (t || r) {
    let n = new AbortController(), o;
    const s = function(h) {
      if (!o) {
        o = !0, l();
        const m = h instanceof Error ? h : this.reason;
        n.abort(m instanceof k ? m : new en(m instanceof Error ? m.message : m));
      }
    };
    let a = t && setTimeout(() => {
      a = null, s(new k(`timeout ${t} of ms exceeded`, k.ETIMEDOUT));
    }, t);
    const l = () => {
      e && (a && clearTimeout(a), a = null, e.forEach((h) => {
        h.unsubscribe ? h.unsubscribe(s) : h.removeEventListener("abort", s);
      }), e = null);
    };
    e.forEach((h) => h.addEventListener("abort", s));
    const { signal: u } = n;
    return u.unsubscribe = () => x.asap(l), u;
  }
}, Vd = function* (e, t) {
  let r = e.byteLength;
  if (r < t) {
    yield e;
    return;
  }
  let n = 0, o;
  for (; n < r; )
    o = n + t, yield e.slice(n, o), n = o;
}, Hd = async function* (e, t) {
  for await (const r of Wd(e))
    yield* Vd(r, t);
}, Wd = async function* (e) {
  if (e[Symbol.asyncIterator]) {
    yield* e;
    return;
  }
  const t = e.getReader();
  try {
    for (; ; ) {
      const { done: r, value: n } = await t.read();
      if (r)
        break;
      yield n;
    }
  } finally {
    await t.cancel();
  }
}, el = (e, t, r, n) => {
  const o = Hd(e, t);
  let s = 0, a, l = (u) => {
    a || (a = !0, n && n(u));
  };
  return new ReadableStream({
    async pull(u) {
      try {
        const { done: h, value: m } = await o.next();
        if (h) {
          l(), u.close();
          return;
        }
        let p = m.byteLength;
        if (r) {
          let E = s += p;
          r(E);
        }
        u.enqueue(new Uint8Array(m));
      } catch (h) {
        throw l(h), h;
      }
    },
    cancel(u) {
      return l(u), o.return();
    }
  }, {
    highWaterMark: 2
  });
}, Po = typeof fetch == "function" && typeof Request == "function" && typeof Response == "function", qc = Po && typeof ReadableStream == "function", zd = Po && (typeof TextEncoder == "function" ? /* @__PURE__ */ ((e) => (t) => e.encode(t))(new TextEncoder()) : async (e) => new Uint8Array(await new Response(e).arrayBuffer())), Mc = (e, ...t) => {
  try {
    return !!e(...t);
  } catch {
    return !1;
  }
}, Kd = qc && Mc(() => {
  let e = !1;
  const t = new Request(ke.origin, {
    body: new ReadableStream(),
    method: "POST",
    get duplex() {
      return e = !0, "half";
    }
  }).headers.has("Content-Type");
  return e && !t;
}), tl = 64 * 1024, ds = qc && Mc(() => x.isReadableStream(new Response("").body)), po = {
  stream: ds && ((e) => e.body)
};
Po && ((e) => {
  ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((t) => {
    !po[t] && (po[t] = x.isFunction(e[t]) ? (r) => r[t]() : (r, n) => {
      throw new k(`Response type '${t}' is not supported`, k.ERR_NOT_SUPPORT, n);
    });
  });
})(new Response());
const Gd = async (e) => {
  if (e == null)
    return 0;
  if (x.isBlob(e))
    return e.size;
  if (x.isSpecCompliantForm(e))
    return (await new Request(ke.origin, {
      method: "POST",
      body: e
    }).arrayBuffer()).byteLength;
  if (x.isArrayBufferView(e) || x.isArrayBuffer(e))
    return e.byteLength;
  if (x.isURLSearchParams(e) && (e = e + ""), x.isString(e))
    return (await zd(e)).byteLength;
}, Jd = async (e, t) => {
  const r = x.toFiniteNumber(e.getContentLength());
  return r ?? Gd(t);
}, Qd = Po && (async (e) => {
  let {
    url: t,
    method: r,
    data: n,
    signal: o,
    cancelToken: s,
    timeout: a,
    onDownloadProgress: l,
    onUploadProgress: u,
    responseType: h,
    headers: m,
    withCredentials: p = "same-origin",
    fetchOptions: E
  } = Fc(e);
  h = h ? (h + "").toLowerCase() : "text";
  let v = Ud([o, s && s.toAbortSignal()], a), b;
  const S = v && v.unsubscribe && (() => {
    v.unsubscribe();
  });
  let d;
  try {
    if (u && Kd && r !== "get" && r !== "head" && (d = await Jd(m, n)) !== 0) {
      let R = new Request(t, {
        method: "POST",
        body: n,
        duplex: "half"
      }), T;
      if (x.isFormData(n) && (T = R.headers.get("content-type")) && m.setContentType(T), R.body) {
        const [F, I] = Xa(
          d,
          fo(Ya(u))
        );
        n = el(R.body, tl, F, I);
      }
    }
    x.isString(p) || (p = p ? "include" : "omit");
    const f = "credentials" in Request.prototype;
    b = new Request(t, {
      ...E,
      signal: v,
      method: r.toUpperCase(),
      headers: m.normalize().toJSON(),
      body: n,
      duplex: "half",
      credentials: f ? p : void 0
    });
    let g = await fetch(b);
    const _ = ds && (h === "stream" || h === "response");
    if (ds && (l || _ && S)) {
      const R = {};
      ["status", "statusText", "headers"].forEach((B) => {
        R[B] = g[B];
      });
      const T = x.toFiniteNumber(g.headers.get("content-length")), [F, I] = l && Xa(
        T,
        fo(Ya(l), !0)
      ) || [];
      g = new Response(
        el(g.body, tl, F, () => {
          I && I(), S && S();
        }),
        R
      );
    }
    h = h || "text";
    let A = await po[x.findKey(po, h) || "text"](g, e);
    return !_ && S && S(), await new Promise((R, T) => {
      Ic(R, T, {
        data: A,
        headers: et.from(g.headers),
        status: g.status,
        statusText: g.statusText,
        config: e,
        request: b
      });
    });
  } catch (f) {
    throw S && S(), f && f.name === "TypeError" && /fetch/i.test(f.message) ? Object.assign(
      new k("Network Error", k.ERR_NETWORK, e, b),
      {
        cause: f.cause || f
      }
    ) : k.from(f, f && f.code, e, b);
  }
}), hs = {
  http: fd,
  xhr: jd,
  fetch: Qd
};
x.forEach(hs, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch {
    }
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
const rl = (e) => `- ${e}`, Xd = (e) => x.isFunction(e) || e === null || e === !1, $c = {
  getAdapter: (e) => {
    e = x.isArray(e) ? e : [e];
    const { length: t } = e;
    let r, n;
    const o = {};
    for (let s = 0; s < t; s++) {
      r = e[s];
      let a;
      if (n = r, !Xd(r) && (n = hs[(a = String(r)).toLowerCase()], n === void 0))
        throw new k(`Unknown adapter '${a}'`);
      if (n)
        break;
      o[a || "#" + s] = n;
    }
    if (!n) {
      const s = Object.entries(o).map(
        ([l, u]) => `adapter ${l} ` + (u === !1 ? "is not supported by the environment" : "is not available in the build")
      );
      let a = t ? s.length > 1 ? `since :
` + s.map(rl).join(`
`) : " " + rl(s[0]) : "as no adapter specified";
      throw new k(
        "There is no suitable adapter to dispatch the request " + a,
        "ERR_NOT_SUPPORT"
      );
    }
    return n;
  },
  adapters: hs
};
function Yi(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new en(null, e);
}
function nl(e) {
  return Yi(e), e.headers = et.from(e.headers), e.data = Xi.call(
    e,
    e.transformRequest
  ), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), $c.getAdapter(e.adapter || Cn.adapter)(e).then(function(n) {
    return Yi(e), n.data = Xi.call(
      e,
      e.transformResponse,
      n
    ), n.headers = et.from(n.headers), n;
  }, function(n) {
    return Nc(n) || (Yi(e), n && n.response && (n.response.data = Xi.call(
      e,
      e.transformResponse,
      n.response
    ), n.response.headers = et.from(n.response.headers))), Promise.reject(n);
  });
}
const Lc = "1.7.9", Ro = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, t) => {
  Ro[e] = function(n) {
    return typeof n === e || "a" + (t < 1 ? "n " : " ") + e;
  };
});
const ol = {};
Ro.transitional = function(t, r, n) {
  function o(s, a) {
    return "[Axios v" + Lc + "] Transitional option '" + s + "'" + a + (n ? ". " + n : "");
  }
  return (s, a, l) => {
    if (t === !1)
      throw new k(
        o(a, " has been removed" + (r ? " in " + r : "")),
        k.ERR_DEPRECATED
      );
    return r && !ol[a] && (ol[a] = !0, console.warn(
      o(
        a,
        " has been deprecated since v" + r + " and will be removed in the near future"
      )
    )), t ? t(s, a, l) : !0;
  };
};
Ro.spelling = function(t) {
  return (r, n) => (console.warn(`${n} is likely a misspelling of ${t}`), !0);
};
function Yd(e, t, r) {
  if (typeof e != "object")
    throw new k("options must be an object", k.ERR_BAD_OPTION_VALUE);
  const n = Object.keys(e);
  let o = n.length;
  for (; o-- > 0; ) {
    const s = n[o], a = t[s];
    if (a) {
      const l = e[s], u = l === void 0 || a(l, s, e);
      if (u !== !0)
        throw new k("option " + s + " must be " + u, k.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (r !== !0)
      throw new k("Unknown option " + s, k.ERR_BAD_OPTION);
  }
}
const Xn = {
  assertOptions: Yd,
  validators: Ro
}, Rt = Xn.validators;
class xr {
  constructor(t) {
    this.defaults = t, this.interceptors = {
      request: new Ja(),
      response: new Ja()
    };
  }
  /**
   * Dispatch a request
   *
   * @param {String|Object} configOrUrl The config specific for this request (merged with this.defaults)
   * @param {?Object} config
   *
   * @returns {Promise} The Promise to be fulfilled
   */
  async request(t, r) {
    try {
      return await this._request(t, r);
    } catch (n) {
      if (n instanceof Error) {
        let o = {};
        Error.captureStackTrace ? Error.captureStackTrace(o) : o = new Error();
        const s = o.stack ? o.stack.replace(/^.+\n/, "") : "";
        try {
          n.stack ? s && !String(n.stack).endsWith(s.replace(/^.+\n.+\n/, "")) && (n.stack += `
` + s) : n.stack = s;
        } catch {
        }
      }
      throw n;
    }
  }
  _request(t, r) {
    typeof t == "string" ? (r = r || {}, r.url = t) : r = t || {}, r = Ar(this.defaults, r);
    const { transitional: n, paramsSerializer: o, headers: s } = r;
    n !== void 0 && Xn.assertOptions(n, {
      silentJSONParsing: Rt.transitional(Rt.boolean),
      forcedJSONParsing: Rt.transitional(Rt.boolean),
      clarifyTimeoutError: Rt.transitional(Rt.boolean)
    }, !1), o != null && (x.isFunction(o) ? r.paramsSerializer = {
      serialize: o
    } : Xn.assertOptions(o, {
      encode: Rt.function,
      serialize: Rt.function
    }, !0)), Xn.assertOptions(r, {
      baseUrl: Rt.spelling("baseURL"),
      withXsrfToken: Rt.spelling("withXSRFToken")
    }, !0), r.method = (r.method || this.defaults.method || "get").toLowerCase();
    let a = s && x.merge(
      s.common,
      s[r.method]
    );
    s && x.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (b) => {
        delete s[b];
      }
    ), r.headers = et.concat(a, s);
    const l = [];
    let u = !0;
    this.interceptors.request.forEach(function(S) {
      typeof S.runWhen == "function" && S.runWhen(r) === !1 || (u = u && S.synchronous, l.unshift(S.fulfilled, S.rejected));
    });
    const h = [];
    this.interceptors.response.forEach(function(S) {
      h.push(S.fulfilled, S.rejected);
    });
    let m, p = 0, E;
    if (!u) {
      const b = [nl.bind(this), void 0];
      for (b.unshift.apply(b, l), b.push.apply(b, h), E = b.length, m = Promise.resolve(r); p < E; )
        m = m.then(b[p++], b[p++]);
      return m;
    }
    E = l.length;
    let v = r;
    for (p = 0; p < E; ) {
      const b = l[p++], S = l[p++];
      try {
        v = b(v);
      } catch (d) {
        S.call(this, d);
        break;
      }
    }
    try {
      m = nl.call(this, v);
    } catch (b) {
      return Promise.reject(b);
    }
    for (p = 0, E = h.length; p < E; )
      m = m.then(h[p++], h[p++]);
    return m;
  }
  getUri(t) {
    t = Ar(this.defaults, t);
    const r = Dc(t.baseURL, t.url);
    return Rc(r, t.params, t.paramsSerializer);
  }
}
x.forEach(["delete", "get", "head", "options"], function(t) {
  xr.prototype[t] = function(r, n) {
    return this.request(Ar(n || {}, {
      method: t,
      url: r,
      data: (n || {}).data
    }));
  };
});
x.forEach(["post", "put", "patch"], function(t) {
  function r(n) {
    return function(s, a, l) {
      return this.request(Ar(l || {}, {
        method: t,
        headers: n ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: s,
        data: a
      }));
    };
  }
  xr.prototype[t] = r(), xr.prototype[t + "Form"] = r(!0);
});
class Ls {
  constructor(t) {
    if (typeof t != "function")
      throw new TypeError("executor must be a function.");
    let r;
    this.promise = new Promise(function(s) {
      r = s;
    });
    const n = this;
    this.promise.then((o) => {
      if (!n._listeners) return;
      let s = n._listeners.length;
      for (; s-- > 0; )
        n._listeners[s](o);
      n._listeners = null;
    }), this.promise.then = (o) => {
      let s;
      const a = new Promise((l) => {
        n.subscribe(l), s = l;
      }).then(o);
      return a.cancel = function() {
        n.unsubscribe(s);
      }, a;
    }, t(function(s, a, l) {
      n.reason || (n.reason = new en(s, a, l), r(n.reason));
    });
  }
  /**
   * Throws a `CanceledError` if cancellation has been requested.
   */
  throwIfRequested() {
    if (this.reason)
      throw this.reason;
  }
  /**
   * Subscribe to the cancel signal
   */
  subscribe(t) {
    if (this.reason) {
      t(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(t) : this._listeners = [t];
  }
  /**
   * Unsubscribe from the cancel signal
   */
  unsubscribe(t) {
    if (!this._listeners)
      return;
    const r = this._listeners.indexOf(t);
    r !== -1 && this._listeners.splice(r, 1);
  }
  toAbortSignal() {
    const t = new AbortController(), r = (n) => {
      t.abort(n);
    };
    return this.subscribe(r), t.signal.unsubscribe = () => this.unsubscribe(r), t.signal;
  }
  /**
   * Returns an object that contains a new `CancelToken` and a function that, when called,
   * cancels the `CancelToken`.
   */
  static source() {
    let t;
    return {
      token: new Ls(function(o) {
        t = o;
      }),
      cancel: t
    };
  }
}
function Zd(e) {
  return function(r) {
    return e.apply(null, r);
  };
}
function eh(e) {
  return x.isObject(e) && e.isAxiosError === !0;
}
const ys = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511
};
Object.entries(ys).forEach(([e, t]) => {
  ys[t] = e;
});
function kc(e) {
  const t = new xr(e), r = mc(xr.prototype.request, t);
  return x.extend(r, xr.prototype, t, { allOwnKeys: !0 }), x.extend(r, t, null, { allOwnKeys: !0 }), r.create = function(o) {
    return kc(Ar(e, o));
  }, r;
}
const ye = kc(Cn);
ye.Axios = xr;
ye.CanceledError = en;
ye.CancelToken = Ls;
ye.isCancel = Nc;
ye.VERSION = Lc;
ye.toFormData = Ao;
ye.AxiosError = k;
ye.Cancel = ye.CanceledError;
ye.all = function(t) {
  return Promise.all(t);
};
ye.spread = Zd;
ye.isAxiosError = eh;
ye.mergeConfig = Ar;
ye.AxiosHeaders = et;
ye.formToJSON = (e) => Cc(x.isHTMLForm(e) ? new FormData(e) : e);
ye.getAdapter = $c.getAdapter;
ye.HttpStatusCode = ys;
ye.default = ye;
function th(e, t) {
  let r;
  return function(...n) {
    clearTimeout(r), r = setTimeout(() => e.apply(this, n), t);
  };
}
function _t(e, t) {
  return document.dispatchEvent(new CustomEvent(`inertia:${e}`, t));
}
var il = (e) => _t("before", { cancelable: !0, detail: { visit: e } }), rh = (e) => _t("error", { detail: { errors: e } }), nh = (e) => _t("exception", { cancelable: !0, detail: { exception: e } }), oh = (e) => _t("finish", { detail: { visit: e } }), ih = (e) => _t("invalid", { cancelable: !0, detail: { response: e } }), vn = (e) => _t("navigate", { detail: { page: e } }), sh = (e) => _t("progress", { detail: { progress: e } }), ah = (e) => _t("start", { detail: { visit: e } }), lh = (e) => _t("success", { detail: { page: e } }), ch = (e, t) => _t("prefetched", { detail: { fetchedAt: Date.now(), response: e.data, visit: t } }), uh = (e) => _t("prefetching", { detail: { visit: e } }), Ke = class {
  static set(e, t) {
    typeof window < "u" && window.sessionStorage.setItem(e, JSON.stringify(t));
  }
  static get(e) {
    if (typeof window < "u") return JSON.parse(window.sessionStorage.getItem(e) || "null");
  }
  static merge(e, t) {
    let r = this.get(e);
    r === null ? this.set(e, t) : this.set(e, { ...r, ...t });
  }
  static remove(e) {
    typeof window < "u" && window.sessionStorage.removeItem(e);
  }
  static removeNested(e, t) {
    let r = this.get(e);
    r !== null && (delete r[t], this.set(e, r));
  }
  static exists(e) {
    try {
      return this.get(e) !== null;
    } catch {
      return !1;
    }
  }
  static clear() {
    typeof window < "u" && window.sessionStorage.clear();
  }
};
Ke.locationVisitKey = "inertiaLocationVisit";
var fh = async (e) => {
  if (typeof window > "u") throw new Error("Unable to encrypt history");
  let t = Bc(), r = await jc(), n = await gh(r);
  if (!n) throw new Error("Unable to encrypt history");
  return await dh(t, n, e);
}, Xr = { key: "historyKey", iv: "historyIv" }, ph = async (e) => {
  let t = Bc(), r = await jc();
  if (!r) throw new Error("Unable to decrypt history");
  return await hh(t, r, e);
}, dh = async (e, t, r) => {
  if (typeof window > "u") throw new Error("Unable to encrypt history");
  if (typeof window.crypto.subtle > "u") return console.warn("Encryption is not supported in this environment. SSL is required."), Promise.resolve(r);
  let n = new TextEncoder(), o = JSON.stringify(r), s = new Uint8Array(o.length * 3), a = n.encodeInto(o, s);
  return window.crypto.subtle.encrypt({ name: "AES-GCM", iv: e }, t, s.subarray(0, a.written));
}, hh = async (e, t, r) => {
  if (typeof window.crypto.subtle > "u") return console.warn("Decryption is not supported in this environment. SSL is required."), Promise.resolve(r);
  let n = await window.crypto.subtle.decrypt({ name: "AES-GCM", iv: e }, t, r);
  return JSON.parse(new TextDecoder().decode(n));
}, Bc = () => {
  let e = Ke.get(Xr.iv);
  if (e) return new Uint8Array(e);
  let t = window.crypto.getRandomValues(new Uint8Array(12));
  return Ke.set(Xr.iv, Array.from(t)), t;
}, yh = async () => typeof window.crypto.subtle > "u" ? (console.warn("Encryption is not supported in this environment. SSL is required."), Promise.resolve(null)) : window.crypto.subtle.generateKey({ name: "AES-GCM", length: 256 }, !0, ["encrypt", "decrypt"]), mh = async (e) => {
  if (typeof window.crypto.subtle > "u") return console.warn("Encryption is not supported in this environment. SSL is required."), Promise.resolve();
  let t = await window.crypto.subtle.exportKey("raw", e);
  Ke.set(Xr.key, Array.from(new Uint8Array(t)));
}, gh = async (e) => {
  if (e) return e;
  let t = await yh();
  return t ? (await mh(t), t) : null;
}, jc = async () => {
  let e = Ke.get(Xr.key);
  return e ? await window.crypto.subtle.importKey("raw", new Uint8Array(e), { name: "AES-GCM", length: 256 }, !0, ["encrypt", "decrypt"]) : null;
}, nr = class {
  static save(e) {
    le.replaceState({ ...e, scrollRegions: Array.from(this.regions()).map((t) => ({ top: t.scrollTop, left: t.scrollLeft })) });
  }
  static regions() {
    return document.querySelectorAll("[scroll-region]");
  }
  static reset(e) {
    typeof window < "u" && window.scrollTo(0, 0), this.regions().forEach((t) => {
      typeof t.scrollTo == "function" ? t.scrollTo(0, 0) : (t.scrollTop = 0, t.scrollLeft = 0);
    }), this.save(e), window.location.hash && setTimeout(() => {
      var t;
      return (t = document.getElementById(window.location.hash.slice(1))) == null ? void 0 : t.scrollIntoView();
    });
  }
  static restore(e) {
    e.scrollRegions && this.regions().forEach((t, r) => {
      let n = e.scrollRegions[r];
      n && (typeof t.scrollTo == "function" ? t.scrollTo(n.left, n.top) : (t.scrollTop = n.top, t.scrollLeft = n.left));
    });
  }
  static onScroll(e) {
    let t = e.target;
    typeof t.hasAttribute == "function" && t.hasAttribute("scroll-region") && this.save(D.get());
  }
};
function ms(e) {
  return e instanceof File || e instanceof Blob || e instanceof FileList && e.length > 0 || e instanceof FormData && Array.from(e.values()).some((t) => ms(t)) || typeof e == "object" && e !== null && Object.values(e).some((t) => ms(t));
}
var sl = (e) => e instanceof FormData;
function Uc(e, t = new FormData(), r = null) {
  e = e || {};
  for (let n in e) Object.prototype.hasOwnProperty.call(e, n) && Hc(t, Vc(r, n), e[n]);
  return t;
}
function Vc(e, t) {
  return e ? e + "[" + t + "]" : t;
}
function Hc(e, t, r) {
  if (Array.isArray(r)) return Array.from(r.keys()).forEach((n) => Hc(e, Vc(t, n.toString()), r[n]));
  if (r instanceof Date) return e.append(t, r.toISOString());
  if (r instanceof File) return e.append(t, r, r.name);
  if (r instanceof Blob) return e.append(t, r);
  if (typeof r == "boolean") return e.append(t, r ? "1" : "0");
  if (typeof r == "string") return e.append(t, r);
  if (typeof r == "number") return e.append(t, `${r}`);
  if (r == null) return e.append(t, "");
  Uc(r, e, t);
}
function or(e) {
  return new URL(e.toString(), typeof window > "u" ? void 0 : window.location.toString());
}
var vh = (e, t, r, n, o) => {
  let s = typeof e == "string" ? or(e) : e;
  if ((ms(t) || n) && !sl(t) && (t = Uc(t)), sl(t)) return [s, t];
  let [a, l] = Wc(r, s, t, o);
  return [or(a), l];
};
function Wc(e, t, r, n = "brackets") {
  let o = /^https?:\/\//.test(t.toString()), s = o || t.toString().startsWith("/"), a = !s && !t.toString().startsWith("#") && !t.toString().startsWith("?"), l = t.toString().includes("?") || e === "get" && Object.keys(r).length, u = t.toString().includes("#"), h = new URL(t.toString(), "http://localhost");
  return e === "get" && Object.keys(r).length && (h.search = Ha.stringify(Jf(Ha.parse(h.search, { ignoreQueryPrefix: !0 }), r), { encodeValuesOnly: !0, arrayFormat: n }), r = {}), [[o ? `${h.protocol}//${h.host}` : "", s ? h.pathname : "", a ? h.pathname.substring(1) : "", l ? h.search : "", u ? h.hash : ""].join(""), r];
}
function ho(e) {
  return e = new URL(e.href), e.hash = "", e;
}
var al = (e, t) => {
  e.hash && !t.hash && ho(e).href === t.href && (t.hash = e.hash);
}, gs = (e, t) => ho(e).href === ho(t).href, bh = class {
  constructor() {
    this.componentId = {}, this.listeners = [], this.isFirstPageLoad = !0, this.cleared = !1;
  }
  init({ initialPage: e, swapComponent: t, resolveComponent: r }) {
    return this.page = e, this.swapComponent = t, this.resolveComponent = r, this;
  }
  set(e, { replace: t = !1, preserveScroll: r = !1, preserveState: n = !1 } = {}) {
    this.componentId = {};
    let o = this.componentId;
    return e.clearHistory && le.clear(), this.resolve(e.component).then((s) => {
      if (o !== this.componentId) return;
      e.scrollRegions ?? (e.scrollRegions = []), e.rememberedState ?? (e.rememberedState = {});
      let a = typeof window < "u" ? window.location : new URL(e.url);
      return t = t || gs(or(e.url), a), new Promise((l) => {
        t ? le.replaceState(e, () => l(null)) : le.pushState(e, () => l(null));
      }).then(() => {
        let l = !this.isTheSame(e);
        return this.page = e, this.cleared = !1, l && this.fireEventsFor("newComponent"), this.isFirstPageLoad && this.fireEventsFor("firstLoad"), this.isFirstPageLoad = !1, this.swap({ component: s, page: e, preserveState: n }).then(() => {
          r || nr.reset(e), wr.fireInternalEvent("loadDeferredProps"), t || vn(e);
        });
      });
    });
  }
  setQuietly(e, { preserveState: t = !1 } = {}) {
    return this.resolve(e.component).then((r) => (this.page = e, this.cleared = !1, this.swap({ component: r, page: e, preserveState: t })));
  }
  clear() {
    this.cleared = !0;
  }
  isCleared() {
    return this.cleared;
  }
  get() {
    return this.page;
  }
  merge(e) {
    this.page = { ...this.page, ...e };
  }
  setUrlHash(e) {
    this.page.url += e;
  }
  remember(e) {
    this.page.rememberedState = e;
  }
  scrollRegions(e) {
    this.page.scrollRegions = e;
  }
  swap({ component: e, page: t, preserveState: r }) {
    return this.swapComponent({ component: e, page: t, preserveState: r });
  }
  resolve(e) {
    return Promise.resolve(this.resolveComponent(e));
  }
  isTheSame(e) {
    return this.page.component === e.component;
  }
  on(e, t) {
    return this.listeners.push({ event: e, callback: t }), () => {
      this.listeners = this.listeners.filter((r) => r.event !== e && r.callback !== t);
    };
  }
  fireEventsFor(e) {
    this.listeners.filter((t) => t.event === e).forEach((t) => t.callback());
  }
}, D = new bh(), zn = typeof window > "u", wh = class {
  constructor() {
    this.rememberedState = "rememberedState", this.scrollRegions = "scrollRegions", this.preserveUrl = !1, this.current = {}, this.queue = [], this.initialState = null;
  }
  remember(e, t) {
    var r;
    this.replaceState({ ...D.get(), rememberedState: { ...((r = D.get()) == null ? void 0 : r.rememberedState) ?? {}, [t]: e } });
  }
  restore(e) {
    var t, r;
    if (!zn) return (r = (t = this.initialState) == null ? void 0 : t[this.rememberedState]) == null ? void 0 : r[e];
  }
  pushState(e, t = null) {
    zn || this.preserveUrl || (this.current = e, this.addToQueue(() => this.getPageData(e).then((r) => {
      window.history.pushState({ page: r, timestamp: Date.now() }, "", e.url), t && t();
    })));
  }
  getPageData(e) {
    return new Promise((t) => e.encryptHistory ? fh(e).then(t) : t(e));
  }
  processQueue() {
    let e = this.queue.shift();
    return e ? e().then(() => this.processQueue()) : Promise.resolve();
  }
  decrypt(e = null) {
    var r;
    if (zn) return Promise.resolve(e ?? D.get());
    let t = e ?? ((r = window.history.state) == null ? void 0 : r.page);
    return this.decryptPageData(t).then((n) => {
      if (!n) throw new Error("Unable to decrypt history");
      return this.initialState === null ? this.initialState = n ?? void 0 : this.current = n ?? {}, n;
    });
  }
  decryptPageData(e) {
    return e instanceof ArrayBuffer ? ph(e) : Promise.resolve(e);
  }
  replaceState(e, t = null) {
    D.merge(e), !(zn || this.preserveUrl) && (this.current = e, this.addToQueue(() => this.getPageData(e).then((r) => {
      window.history.replaceState({ page: r, timestamp: Date.now() }, "", e.url), t && t();
    })));
  }
  addToQueue(e) {
    this.queue.push(e), this.processQueue();
  }
  getState(e, t) {
    var r;
    return ((r = this.current) == null ? void 0 : r[e]) ?? t;
  }
  deleteState(e) {
    this.current[e] !== void 0 && (delete this.current[e], this.replaceState(this.current));
  }
  hasAnyState() {
    return !!this.getAllState();
  }
  clear() {
    Ke.remove(Xr.key), Ke.remove(Xr.iv);
  }
  isValidState(e) {
    return !!e.page;
  }
  getAllState() {
    return this.current;
  }
}, le = new wh(), Sh = class {
  constructor() {
    this.internalListeners = [];
  }
  init() {
    typeof window < "u" && window.addEventListener("popstate", this.handlePopstateEvent.bind(this)), typeof document < "u" && document.addEventListener("scroll", th(nr.onScroll.bind(nr), 100), !0);
  }
  onGlobalEvent(e, t) {
    let r = (n) => {
      let o = t(n);
      n.cancelable && !n.defaultPrevented && o === !1 && n.preventDefault();
    };
    return this.registerListener(`inertia:${e}`, r);
  }
  on(e, t) {
    return this.internalListeners.push({ event: e, listener: t }), () => {
      this.internalListeners = this.internalListeners.filter((r) => r.listener !== t);
    };
  }
  onMissingHistoryItem() {
    D.clear(), this.fireInternalEvent("missingHistoryItem");
  }
  fireInternalEvent(e) {
    this.internalListeners.filter((t) => t.event === e).forEach((t) => t.listener());
  }
  registerListener(e, t) {
    return document.addEventListener(e, t), () => document.removeEventListener(e, t);
  }
  handlePopstateEvent(e) {
    let t = e.state || null;
    if (t === null) {
      let r = or(D.get().url);
      r.hash = window.location.hash, le.replaceState({ ...D.get(), url: r.href }), nr.reset(D.get());
      return;
    }
    if (le.isValidState(t)) {
      le.decrypt(t.page).then((r) => {
        D.setQuietly(r, { preserveState: !1 }).then(() => {
          nr.restore(D.get()), vn(D.get());
        });
      }).catch(() => {
        this.onMissingHistoryItem();
      });
      return;
    }
    this.onMissingHistoryItem();
  }
}, wr = new Sh(), _h = class {
  constructor() {
    typeof window < "u" && (window == null ? void 0 : window.performance.getEntriesByType("navigation").length) > 0 ? this.type = window.performance.getEntriesByType("navigation")[0].type : this.type = "navigate";
  }
  get() {
    return this.type;
  }
  isBackForward() {
    return this.type === "back_forward";
  }
  isReload() {
    return this.type === "reload";
  }
}, ll = new _h(), Eh = class {
  static handle() {
    this.clearRememberedStateOnReload(), [this.handleBackForward, this.handleLocation, this.handleDefault].find((e) => e.bind(this)());
  }
  static clearRememberedStateOnReload() {
    ll.isReload() && le.deleteState(le.rememberedState);
  }
  static handleBackForward() {
    return !ll.isBackForward() || !le.hasAnyState() ? !1 : (le.decrypt().then((e) => {
      D.set(e, { preserveScroll: !0, preserveState: !0 }).then(() => {
        nr.restore(D.get()), vn(D.get());
      });
    }).catch(() => {
      wr.onMissingHistoryItem();
    }), !0);
  }
  static handleLocation() {
    if (!Ke.exists(Ke.locationVisitKey)) return !1;
    let e = Ke.get(Ke.locationVisitKey) || {};
    return Ke.remove(Ke.locationVisitKey), typeof window < "u" && D.setUrlHash(window.location.hash), le.decrypt().then(() => {
      let t = le.getState(le.rememberedState, {}), r = le.getState(le.scrollRegions, []);
      D.remember(t), D.scrollRegions(r), D.set(D.get(), { preserveScroll: e.preserveScroll, preserveState: !0 }).then(() => {
        e.preserveScroll && nr.restore(D.get()), vn(D.get());
      });
    }).catch(() => {
      wr.onMissingHistoryItem();
    }), !0;
  }
  static handleDefault() {
    typeof window < "u" && D.setUrlHash(window.location.hash), D.set(D.get(), { preserveState: !0 }).then(() => {
      vn(D.get());
    });
  }
}, Oh = class {
  constructor(e, t, r) {
    this.id = null, this.throttle = !1, this.keepAlive = !1, this.cbCount = 0, this.keepAlive = r.keepAlive ?? !1, this.cb = t, this.interval = e, (r.autoStart ?? !0) && this.start();
  }
  stop() {
    this.id && clearInterval(this.id);
  }
  start() {
    typeof window > "u" || (this.stop(), this.id = window.setInterval(() => {
      (!this.throttle || this.cbCount % 10 === 0) && this.cb(), this.throttle && this.cbCount++;
    }, this.interval));
  }
  isInBackground(e) {
    this.throttle = this.keepAlive ? !1 : e, this.throttle && (this.cbCount = 0);
  }
}, xh = class {
  constructor() {
    this.polls = [], this.setupVisibilityListener();
  }
  add(e, t, r) {
    let n = new Oh(e, t, r);
    return this.polls.push(n), { stop: () => n.stop(), start: () => n.start() };
  }
  clear() {
    this.polls.forEach((e) => e.stop()), this.polls = [];
  }
  setupVisibilityListener() {
    typeof document > "u" || document.addEventListener("visibilitychange", () => {
      this.polls.forEach((e) => e.isInBackground(document.hidden));
    }, !1);
  }
}, Ah = new xh(), zc = (e, t, r) => {
  if (e === t) return !0;
  for (let n in e) if (!r.includes(n) && e[n] !== t[n] && !Ph(e[n], t[n])) return !1;
  return !0;
}, Ph = (e, t) => {
  switch (typeof e) {
    case "object":
      return zc(e, t, []);
    case "function":
      return e.toString() === t.toString();
    default:
      return e === t;
  }
}, Rh = { ms: 1, s: 1e3, m: 6e4, h: 36e5, d: 864e5 }, cl = (e) => {
  if (typeof e == "number") return e;
  for (let [t, r] of Object.entries(Rh)) if (e.endsWith(t)) return parseFloat(e) * r;
  return parseInt(e);
}, Th = class {
  constructor() {
    this.cached = [], this.inFlightRequests = [], this.removalTimers = [], this.currentUseId = null;
  }
  add(e, t, { cacheFor: r }) {
    if (this.findInFlight(e)) return Promise.resolve();
    let n = this.findCached(e);
    if (!e.fresh && n && n.staleTimestamp > Date.now()) return Promise.resolve();
    let [o, s] = this.extractStaleValues(r), a = new Promise((l, u) => {
      t({ ...e, onCancel: () => {
        this.remove(e), e.onCancel(), u();
      }, onError: (h) => {
        this.remove(e), e.onError(h), u();
      }, onPrefetching(h) {
        e.onPrefetching(h);
      }, onPrefetched(h, m) {
        e.onPrefetched(h, m);
      }, onPrefetchResponse(h) {
        l(h);
      } });
    }).then((l) => (this.remove(e), this.cached.push({ params: { ...e }, staleTimestamp: Date.now() + o, response: a, singleUse: r === 0, timestamp: Date.now(), inFlight: !1 }), this.scheduleForRemoval(e, s), this.inFlightRequests = this.inFlightRequests.filter((u) => !this.paramsAreEqual(u.params, e)), l.handlePrefetch(), l));
    return this.inFlightRequests.push({ params: { ...e }, response: a, staleTimestamp: null, inFlight: !0 }), a;
  }
  removeAll() {
    this.cached = [], this.removalTimers.forEach((e) => {
      clearTimeout(e.timer);
    }), this.removalTimers = [];
  }
  remove(e) {
    this.cached = this.cached.filter((t) => !this.paramsAreEqual(t.params, e)), this.clearTimer(e);
  }
  extractStaleValues(e) {
    let [t, r] = this.cacheForToStaleAndExpires(e);
    return [cl(t), cl(r)];
  }
  cacheForToStaleAndExpires(e) {
    if (!Array.isArray(e)) return [e, e];
    switch (e.length) {
      case 0:
        return [0, 0];
      case 1:
        return [e[0], e[0]];
      default:
        return [e[0], e[1]];
    }
  }
  clearTimer(e) {
    let t = this.removalTimers.find((r) => this.paramsAreEqual(r.params, e));
    t && (clearTimeout(t.timer), this.removalTimers = this.removalTimers.filter((r) => r !== t));
  }
  scheduleForRemoval(e, t) {
    if (!(typeof window > "u") && (this.clearTimer(e), t > 0)) {
      let r = window.setTimeout(() => this.remove(e), t);
      this.removalTimers.push({ params: e, timer: r });
    }
  }
  get(e) {
    return this.findCached(e) || this.findInFlight(e);
  }
  use(e, t) {
    let r = `${t.url.pathname}-${Date.now()}-${Math.random().toString(36).substring(7)}`;
    return this.currentUseId = r, e.response.then((n) => {
      if (this.currentUseId === r) return n.mergeParams({ ...t, onPrefetched: () => {
      } }), this.removeSingleUseItems(t), n.handle();
    });
  }
  removeSingleUseItems(e) {
    this.cached = this.cached.filter((t) => this.paramsAreEqual(t.params, e) ? !t.singleUse : !0);
  }
  findCached(e) {
    return this.cached.find((t) => this.paramsAreEqual(t.params, e)) || null;
  }
  findInFlight(e) {
    return this.inFlightRequests.find((t) => this.paramsAreEqual(t.params, e)) || null;
  }
  paramsAreEqual(e, t) {
    return zc(e, t, ["showProgress", "replace", "prefetch", "onBefore", "onStart", "onProgress", "onFinish", "onCancel", "onSuccess", "onError", "onPrefetched", "onCancelToken", "onPrefetching", "async"]);
  }
}, gr = new Th(), Kc = class {
  constructor(e) {
    if (this.callbacks = [], !e.prefetch) this.params = e;
    else {
      let t = { onBefore: this.wrapCallback(e, "onBefore"), onStart: this.wrapCallback(e, "onStart"), onProgress: this.wrapCallback(e, "onProgress"), onFinish: this.wrapCallback(e, "onFinish"), onCancel: this.wrapCallback(e, "onCancel"), onSuccess: this.wrapCallback(e, "onSuccess"), onError: this.wrapCallback(e, "onError"), onCancelToken: this.wrapCallback(e, "onCancelToken"), onPrefetched: this.wrapCallback(e, "onPrefetched"), onPrefetching: this.wrapCallback(e, "onPrefetching") };
      this.params = { ...e, ...t, onPrefetchResponse: e.onPrefetchResponse || (() => {
      }) };
    }
  }
  static create(e) {
    return new Kc(e);
  }
  data() {
    return this.params.method === "get" ? {} : this.params.data;
  }
  queryParams() {
    return this.params.method === "get" ? this.params.data : {};
  }
  isPartial() {
    return this.params.only.length > 0 || this.params.except.length > 0 || this.params.reset.length > 0;
  }
  onCancelToken(e) {
    this.params.onCancelToken({ cancel: e });
  }
  markAsFinished() {
    this.params.completed = !0, this.params.cancelled = !1, this.params.interrupted = !1;
  }
  markAsCancelled({ cancelled: e = !0, interrupted: t = !1 }) {
    this.params.onCancel(), this.params.completed = !1, this.params.cancelled = e, this.params.interrupted = t;
  }
  wasCancelledAtAll() {
    return this.params.cancelled || this.params.interrupted;
  }
  onFinish() {
    this.params.onFinish(this.params);
  }
  onStart() {
    this.params.onStart(this.params);
  }
  onPrefetching() {
    this.params.onPrefetching(this.params);
  }
  onPrefetchResponse(e) {
    this.params.onPrefetchResponse && this.params.onPrefetchResponse(e);
  }
  all() {
    return this.params;
  }
  headers() {
    let e = { ...this.params.headers };
    this.isPartial() && (e["X-Inertia-Partial-Component"] = D.get().component);
    let t = this.params.only.concat(this.params.reset);
    return t.length > 0 && (e["X-Inertia-Partial-Data"] = t.join(",")), this.params.except.length > 0 && (e["X-Inertia-Partial-Except"] = this.params.except.join(",")), this.params.reset.length > 0 && (e["X-Inertia-Reset"] = this.params.reset.join(",")), this.params.errorBag && this.params.errorBag.length > 0 && (e["X-Inertia-Error-Bag"] = this.params.errorBag), e;
  }
  setPreserveOptions(e) {
    this.params.preserveScroll = this.resolvePreserveOption(this.params.preserveScroll, e), this.params.preserveState = this.resolvePreserveOption(this.params.preserveState, e);
  }
  runCallbacks() {
    this.callbacks.forEach(({ name: e, args: t }) => {
      this.params[e](...t);
    });
  }
  merge(e) {
    this.params = { ...this.params, ...e };
  }
  wrapCallback(e, t) {
    return (...r) => {
      this.recordCallback(t, r), e[t](...r);
    };
  }
  recordCallback(e, t) {
    this.callbacks.push({ name: e, args: t });
  }
  resolvePreserveOption(e, t) {
    return typeof e == "function" ? e(t) : e === "errors" ? Object.keys(t.props.errors || {}).length > 0 : e;
  }
}, Ch = { modal: null, listener: null, show(e) {
  typeof e == "object" && (e = `All Inertia requests must receive a valid Inertia response, however a plain JSON response was received.<hr>${JSON.stringify(e)}`);
  let t = document.createElement("html");
  t.innerHTML = e, t.querySelectorAll("a").forEach((n) => n.setAttribute("target", "_top")), this.modal = document.createElement("div"), this.modal.style.position = "fixed", this.modal.style.width = "100vw", this.modal.style.height = "100vh", this.modal.style.padding = "50px", this.modal.style.boxSizing = "border-box", this.modal.style.backgroundColor = "rgba(0, 0, 0, .6)", this.modal.style.zIndex = 2e5, this.modal.addEventListener("click", () => this.hide());
  let r = document.createElement("iframe");
  if (r.style.backgroundColor = "white", r.style.borderRadius = "5px", r.style.width = "100%", r.style.height = "100%", this.modal.appendChild(r), document.body.prepend(this.modal), document.body.style.overflow = "hidden", !r.contentWindow) throw new Error("iframe not yet ready.");
  r.contentWindow.document.open(), r.contentWindow.document.write(t.outerHTML), r.contentWindow.document.close(), this.listener = this.hideOnEscape.bind(this), document.addEventListener("keydown", this.listener);
}, hide() {
  this.modal.outerHTML = "", this.modal = null, document.body.style.overflow = "visible", document.removeEventListener("keydown", this.listener);
}, hideOnEscape(e) {
  e.keyCode === 27 && this.hide();
} }, Nh = class {
  constructor() {
    this.queue = [], this.processing = !1;
  }
  add(e) {
    this.queue.push(e);
  }
  async process() {
    return this.processing || (this.processing = !0, await this.processQueue(), this.processing = !1), Promise.resolve();
  }
  async processQueue() {
    let e = this.queue.shift();
    return e ? (await e.process(), this.processQueue()) : Promise.resolve();
  }
}, ul = new Nh(), vs = class {
  constructor(e, t, r) {
    this.requestParams = e, this.response = t, this.originatingPage = r;
  }
  static create(e, t, r) {
    return new vs(e, t, r);
  }
  async handlePrefetch() {
    gs(this.requestParams.all().url, window.location) && this.handle();
  }
  async handle() {
    return ul.add(this), ul.process();
  }
  async process() {
    if (this.requestParams.all().prefetch) return this.requestParams.all().prefetch = !1, this.requestParams.all().onPrefetched(this.response, this.requestParams.all()), ch(this.response, this.requestParams.all()), Promise.resolve();
    if (this.requestParams.runCallbacks(), !this.isInertiaResponse()) return this.handleNonInertiaResponse();
    await le.processQueue(), le.preserveUrl = this.requestParams.all().preserveUrl, await this.setPage();
    let e = D.get().props.errors || {};
    if (Object.keys(e).length > 0) {
      let t = this.getScopedErrors(e);
      return rh(t), this.requestParams.all().onError(t);
    }
    lh(D.get()), await this.requestParams.all().onSuccess(D.get()), le.preserveUrl = !1;
  }
  mergeParams(e) {
    this.requestParams.merge(e);
  }
  async handleNonInertiaResponse() {
    if (this.isLocationVisit()) {
      let t = or(this.getHeader("x-inertia-location"));
      return al(this.requestParams.all().url, t), this.locationVisit(t);
    }
    let e = { ...this.response, data: this.getDataFromResponse(this.response.data) };
    if (ih(e)) return Ch.show(e.data);
  }
  isInertiaResponse() {
    return this.hasHeader("x-inertia");
  }
  hasStatus(e) {
    return this.response.status === e;
  }
  getHeader(e) {
    return this.response.headers[e];
  }
  hasHeader(e) {
    return this.getHeader(e) !== void 0;
  }
  isLocationVisit() {
    return this.hasStatus(409) && this.hasHeader("x-inertia-location");
  }
  locationVisit(e) {
    try {
      if (Ke.set(Ke.locationVisitKey, { preserveScroll: this.requestParams.all().preserveScroll === !0 }), typeof window > "u") return;
      gs(window.location, e) ? window.location.reload() : window.location.href = e.href;
    } catch {
      return !1;
    }
  }
  async setPage() {
    let e = this.getDataFromResponse(this.response.data);
    return this.shouldSetPage(e) ? (this.mergeProps(e), await this.setRememberedState(e), this.requestParams.setPreserveOptions(e), e.url = le.preserveUrl ? D.get().url : this.pageUrl(e), D.set(e, { replace: this.requestParams.all().replace, preserveScroll: this.requestParams.all().preserveScroll, preserveState: this.requestParams.all().preserveState })) : Promise.resolve();
  }
  getDataFromResponse(e) {
    if (typeof e != "string") return e;
    try {
      return JSON.parse(e);
    } catch {
      return e;
    }
  }
  shouldSetPage(e) {
    if (!this.requestParams.all().async || this.originatingPage.component !== e.component) return !0;
    if (this.originatingPage.component !== D.get().component) return !1;
    let t = or(this.originatingPage.url), r = or(D.get().url);
    return t.origin === r.origin && t.pathname === r.pathname;
  }
  pageUrl(e) {
    let t = or(e.url);
    return al(this.requestParams.all().url, t), t.href.split(t.host).pop();
  }
  mergeProps(e) {
    this.requestParams.isPartial() && e.component === D.get().component && ((e.mergeProps || []).forEach((t) => {
      let r = e.props[t];
      Array.isArray(r) ? e.props[t] = [...D.get().props[t] || [], ...r] : typeof r == "object" && (e.props[t] = { ...D.get().props[t] || [], ...r });
    }), e.props = { ...D.get().props, ...e.props });
  }
  async setRememberedState(e) {
    let t = await le.getState(le.rememberedState, {});
    this.requestParams.all().preserveState && t && e.component === D.get().component && (e.rememberedState = t);
  }
  getScopedErrors(e) {
    return this.requestParams.all().errorBag ? e[this.requestParams.all().errorBag || ""] || {} : e;
  }
}, bs = class {
  constructor(e, t) {
    this.page = t, this.requestHasFinished = !1, this.requestParams = Kc.create(e), this.cancelToken = new AbortController();
  }
  static create(e, t) {
    return new bs(e, t);
  }
  async send() {
    this.requestParams.onCancelToken(() => this.cancel({ cancelled: !0 })), ah(this.requestParams.all()), this.requestParams.onStart(), this.requestParams.all().prefetch && (this.requestParams.onPrefetching(), uh(this.requestParams.all()));
    let e = this.requestParams.all().prefetch;
    return ye({ method: this.requestParams.all().method, url: ho(this.requestParams.all().url).href, data: this.requestParams.data(), params: this.requestParams.queryParams(), signal: this.cancelToken.signal, headers: this.getHeaders(), onUploadProgress: this.onProgress.bind(this), responseType: "text" }).then((t) => (this.response = vs.create(this.requestParams, t, this.page), this.response.handle())).catch((t) => t != null && t.response ? (this.response = vs.create(this.requestParams, t.response, this.page), this.response.handle()) : Promise.reject(t)).catch((t) => {
      if (!ye.isCancel(t) && nh(t)) return Promise.reject(t);
    }).finally(() => {
      this.finish(), e && this.response && this.requestParams.onPrefetchResponse(this.response);
    });
  }
  finish() {
    this.requestParams.wasCancelledAtAll() || (this.requestParams.markAsFinished(), this.fireFinishEvents());
  }
  fireFinishEvents() {
    this.requestHasFinished || (this.requestHasFinished = !0, oh(this.requestParams.all()), this.requestParams.onFinish());
  }
  cancel({ cancelled: e = !1, interrupted: t = !1 }) {
    this.requestHasFinished || (this.cancelToken.abort(), this.requestParams.markAsCancelled({ cancelled: e, interrupted: t }), this.fireFinishEvents());
  }
  onProgress(e) {
    this.requestParams.data() instanceof FormData && (e.percentage = e.progress ? Math.round(e.progress * 100) : 0, sh(e), this.requestParams.all().onProgress(e));
  }
  getHeaders() {
    let e = { ...this.requestParams.headers(), Accept: "text/html, application/xhtml+xml", "X-Requested-With": "XMLHttpRequest", "X-Inertia": !0 };
    return D.get().version && (e["X-Inertia-Version"] = D.get().version), e;
  }
}, fl = class {
  constructor({ maxConcurrent: e, interruptible: t }) {
    this.requests = [], this.maxConcurrent = e, this.interruptible = t;
  }
  send(e) {
    this.requests.push(e), e.send().then(() => {
      this.requests = this.requests.filter((t) => t !== e);
    });
  }
  interruptInFlight() {
    this.cancel({ interrupted: !0 }, !1);
  }
  cancelInFlight() {
    this.cancel({ cancelled: !0 }, !0);
  }
  cancel({ cancelled: e = !1, interrupted: t = !1 } = {}, r) {
    var n;
    this.shouldCancel(r) && ((n = this.requests.shift()) == null || n.cancel({ interrupted: t, cancelled: e }));
  }
  shouldCancel(e) {
    return e ? !0 : this.interruptible && this.requests.length >= this.maxConcurrent;
  }
}, Ih = class {
  constructor() {
    this.syncRequestStream = new fl({ maxConcurrent: 1, interruptible: !0 }), this.asyncRequestStream = new fl({ maxConcurrent: 1 / 0, interruptible: !1 });
  }
  init({ initialPage: e, resolveComponent: t, swapComponent: r }) {
    D.init({ initialPage: e, resolveComponent: t, swapComponent: r }), Eh.handle(), wr.init(), wr.on("missingHistoryItem", () => {
      typeof window < "u" && this.visit(window.location.href, { preserveState: !0, preserveScroll: !0, replace: !0 });
    }), wr.on("loadDeferredProps", () => {
      this.loadDeferredProps();
    });
  }
  get(e, t = {}, r = {}) {
    return this.visit(e, { ...r, method: "get", data: t });
  }
  post(e, t = {}, r = {}) {
    return this.visit(e, { preserveState: !0, ...r, method: "post", data: t });
  }
  put(e, t = {}, r = {}) {
    return this.visit(e, { preserveState: !0, ...r, method: "put", data: t });
  }
  patch(e, t = {}, r = {}) {
    return this.visit(e, { preserveState: !0, ...r, method: "patch", data: t });
  }
  delete(e, t = {}) {
    return this.visit(e, { preserveState: !0, ...t, method: "delete" });
  }
  reload(e = {}) {
    if (!(typeof window > "u")) return this.visit(window.location.href, { ...e, preserveScroll: !0, preserveState: !0, async: !0, headers: { ...e.headers || {}, "Cache-Control": "no-cache" } });
  }
  remember(e, t = "default") {
    le.remember(e, t);
  }
  restore(e = "default") {
    return le.restore(e);
  }
  on(e, t) {
    return wr.onGlobalEvent(e, t);
  }
  cancel() {
    this.syncRequestStream.cancelInFlight();
  }
  cancelAll() {
    this.asyncRequestStream.cancelInFlight(), this.syncRequestStream.cancelInFlight();
  }
  poll(e, t = {}, r = {}) {
    return Ah.add(e, () => this.reload(t), { autoStart: r.autoStart ?? !0, keepAlive: r.keepAlive ?? !1 });
  }
  visit(e, t = {}) {
    let r = this.getPendingVisit(e, { ...t, showProgress: t.showProgress ?? !t.async }), n = this.getVisitEvents(t);
    if (n.onBefore(r) === !1 || !il(r)) return;
    let o = r.async ? this.asyncRequestStream : this.syncRequestStream;
    o.interruptInFlight(), !D.isCleared() && !r.preserveUrl && nr.save(D.get());
    let s = { ...r, ...n }, a = gr.get(s);
    a ? (pl(a.inFlight), gr.use(a, s)) : (pl(!0), o.send(bs.create(s, D.get())));
  }
  getCached(e, t = {}) {
    return gr.findCached(this.getPrefetchParams(e, t));
  }
  flush(e, t = {}) {
    gr.remove(this.getPrefetchParams(e, t));
  }
  flushAll() {
    gr.removeAll();
  }
  getPrefetching(e, t = {}) {
    return gr.findInFlight(this.getPrefetchParams(e, t));
  }
  prefetch(e, t = {}, { cacheFor: r }) {
    if (t.method !== "get") throw new Error("Prefetch requests must use the GET method");
    let n = this.getPendingVisit(e, { ...t, async: !0, showProgress: !1, prefetch: !0 }), o = n.url.origin + n.url.pathname + n.url.search, s = window.location.origin + window.location.pathname + window.location.search;
    if (o === s) return;
    let a = this.getVisitEvents(t);
    if (a.onBefore(n) === !1 || !il(n)) return;
    Uh(), this.asyncRequestStream.interruptInFlight();
    let l = { ...n, ...a };
    new Promise((u) => {
      let h = () => {
        D.get() ? u() : setTimeout(h, 50);
      };
      h();
    }).then(() => {
      gr.add(l, (u) => {
        this.asyncRequestStream.send(bs.create(u, D.get()));
      }, { cacheFor: r });
    });
  }
  clearHistory() {
    le.clear();
  }
  decryptHistory() {
    return le.decrypt();
  }
  replace(e) {
    this.clientVisit(e, { replace: !0 });
  }
  push(e) {
    this.clientVisit(e);
  }
  clientVisit(e, { replace: t = !1 } = {}) {
    let r = D.get(), n = typeof e.props == "function" ? e.props(r.props) : e.props ?? r.props;
    D.set({ ...r, ...e, props: n }, { replace: t, preserveScroll: e.preserveScroll, preserveState: e.preserveState });
  }
  getPrefetchParams(e, t) {
    return { ...this.getPendingVisit(e, { ...t, async: !0, showProgress: !1, prefetch: !0 }), ...this.getVisitEvents(t) };
  }
  getPendingVisit(e, t, r = {}) {
    let n = { method: "get", data: {}, replace: !1, preserveScroll: !1, preserveState: !1, only: [], except: [], headers: {}, errorBag: "", forceFormData: !1, queryStringArrayFormat: "brackets", async: !1, showProgress: !0, fresh: !1, reset: [], preserveUrl: !1, prefetch: !1, ...t }, [o, s] = vh(e, n.data, n.method, n.forceFormData, n.queryStringArrayFormat);
    return { cancelled: !1, completed: !1, interrupted: !1, ...n, ...r, url: o, data: s };
  }
  getVisitEvents(e) {
    return { onCancelToken: e.onCancelToken || (() => {
    }), onBefore: e.onBefore || (() => {
    }), onStart: e.onStart || (() => {
    }), onProgress: e.onProgress || (() => {
    }), onFinish: e.onFinish || (() => {
    }), onCancel: e.onCancel || (() => {
    }), onSuccess: e.onSuccess || (() => {
    }), onError: e.onError || (() => {
    }), onPrefetched: e.onPrefetched || (() => {
    }), onPrefetching: e.onPrefetching || (() => {
    }) };
  }
  loadDeferredProps() {
    var t;
    let e = (t = D.get()) == null ? void 0 : t.deferredProps;
    e && Object.entries(e).forEach(([r, n]) => {
      this.reload({ only: n });
    });
  }
}, he = "nprogress", Te = { minimum: 0.08, easing: "linear", positionUsing: "translate3d", speed: 200, trickle: !0, trickleSpeed: 200, showSpinner: !0, barSelector: '[role="bar"]', spinnerSelector: '[role="spinner"]', parent: "body", color: "#29d", includeCSS: !0, template: ['<div class="bar" role="bar">', '<div class="peg"></div>', "</div>", '<div class="spinner" role="spinner">', '<div class="spinner-icon"></div>', "</div>"].join("") }, sr = null, Dh = (e) => {
  Object.assign(Te, e), Te.includeCSS && kh(Te.color);
}, To = (e) => {
  let t = Gc();
  e = Zc(e, Te.minimum, 1), sr = e === 1 ? null : e;
  let r = qh(!t), n = r.querySelector(Te.barSelector), o = Te.speed, s = Te.easing;
  r.offsetWidth, Lh((a) => {
    let l = Te.positionUsing === "translate3d" ? { transition: `all ${o}ms ${s}`, transform: `translate3d(${Yn(e)}%,0,0)` } : Te.positionUsing === "translate" ? { transition: `all ${o}ms ${s}`, transform: `translate(${Yn(e)}%,0)` } : { marginLeft: `${Yn(e)}%` };
    for (let u in l) n.style[u] = l[u];
    if (e !== 1) return setTimeout(a, o);
    r.style.transition = "none", r.style.opacity = "1", r.offsetWidth, setTimeout(() => {
      r.style.transition = `all ${o}ms linear`, r.style.opacity = "0", setTimeout(() => {
        Yc(), a();
      }, o);
    }, o);
  });
}, Gc = () => typeof sr == "number", Jc = () => {
  sr || To(0);
  let e = function() {
    setTimeout(function() {
      sr && (Qc(), e());
    }, Te.trickleSpeed);
  };
  Te.trickle && e();
}, Fh = (e) => {
  !e && !sr || (Qc(0.3 + 0.5 * Math.random()), To(1));
}, Qc = (e) => {
  let t = sr;
  if (t === null) return Jc();
  if (!(t > 1)) return e = typeof e == "number" ? e : (() => {
    let r = { 0.1: [0, 0.2], 0.04: [0.2, 0.5], 0.02: [0.5, 0.8], 5e-3: [0.8, 0.99] };
    for (let n in r) if (t >= r[n][0] && t < r[n][1]) return parseFloat(n);
    return 0;
  })(), To(Zc(t + e, 0, 0.994));
}, qh = (e) => {
  var s;
  if (Mh()) return document.getElementById(he);
  document.documentElement.classList.add(`${he}-busy`);
  let t = document.createElement("div");
  t.id = he, t.innerHTML = Te.template;
  let r = t.querySelector(Te.barSelector), n = e ? "-100" : Yn(sr || 0), o = Xc();
  return r.style.transition = "all 0 linear", r.style.transform = `translate3d(${n}%,0,0)`, Te.showSpinner || ((s = t.querySelector(Te.spinnerSelector)) == null || s.remove()), o !== document.body && o.classList.add(`${he}-custom-parent`), o.appendChild(t), t;
}, Xc = () => $h(Te.parent) ? Te.parent : document.querySelector(Te.parent), Yc = () => {
  var e;
  document.documentElement.classList.remove(`${he}-busy`), Xc().classList.remove(`${he}-custom-parent`), (e = document.getElementById(he)) == null || e.remove();
}, Mh = () => document.getElementById(he) !== null, $h = (e) => typeof HTMLElement == "object" ? e instanceof HTMLElement : e && typeof e == "object" && e.nodeType === 1 && typeof e.nodeName == "string";
function Zc(e, t, r) {
  return e < t ? t : e > r ? r : e;
}
var Yn = (e) => (-1 + e) * 100, Lh = /* @__PURE__ */ (() => {
  let e = [], t = () => {
    let r = e.shift();
    r && r(t);
  };
  return (r) => {
    e.push(r), e.length === 1 && t();
  };
})(), kh = (e) => {
  let t = document.createElement("style");
  t.textContent = `
    #${he} {
      pointer-events: none;
    }

    #${he} .bar {
      background: ${e};

      position: fixed;
      z-index: 1031;
      top: 0;
      left: 0;

      width: 100%;
      height: 2px;
    }

    #${he} .peg {
      display: block;
      position: absolute;
      right: 0px;
      width: 100px;
      height: 100%;
      box-shadow: 0 0 10px ${e}, 0 0 5px ${e};
      opacity: 1.0;

      transform: rotate(3deg) translate(0px, -4px);
    }

    #${he} .spinner {
      display: block;
      position: fixed;
      z-index: 1031;
      top: 15px;
      right: 15px;
    }

    #${he} .spinner-icon {
      width: 18px;
      height: 18px;
      box-sizing: border-box;

      border: solid 2px transparent;
      border-top-color: ${e};
      border-left-color: ${e};
      border-radius: 50%;

      animation: ${he}-spinner 400ms linear infinite;
    }

    .${he}-custom-parent {
      overflow: hidden;
      position: relative;
    }

    .${he}-custom-parent #${he} .spinner,
    .${he}-custom-parent #${he} .bar {
      position: absolute;
    }

    @keyframes ${he}-spinner {
      0%   { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }
  `, document.head.appendChild(t);
}, Jr = (() => {
  if (typeof document > "u") return null;
  let e = document.createElement("style");
  return e.innerHTML = `#${he} { display: none; }`, e;
})(), Bh = () => {
  if (Jr && document.head.contains(Jr)) return document.head.removeChild(Jr);
}, jh = () => {
  Jr && !document.head.contains(Jr) && document.head.appendChild(Jr);
}, eu = { configure: Dh, isStarted: Gc, done: Fh, set: To, remove: Yc, start: Jc, status: sr, show: Bh, hide: jh }, Zn = 0, pl = (e = !1) => {
  Zn = Math.max(0, Zn - 1), (e || Zn === 0) && eu.show();
}, Uh = () => {
  Zn++, eu.hide();
};
function Zi(e) {
  let t = e.currentTarget.tagName.toLowerCase() === "a";
  return !(e.target && (e == null ? void 0 : e.target).isContentEditable || e.defaultPrevented || t && e.which > 1 || t && e.altKey || t && e.ctrlKey || t && e.metaKey || t && e.shiftKey || t && "button" in e && e.button !== 0);
}
var Qr = new Ih();
/* NProgress, (c) 2013, 2014 Rico Sta. Cruz - http://ricostacruz.com/nprogress
* @license MIT */
var dn = { exports: {} };
dn.exports;
var dl;
function Vh() {
  return dl || (dl = 1, function(e, t) {
    var r = 200, n = "__lodash_hash_undefined__", o = 9007199254740991, s = "[object Arguments]", a = "[object Array]", l = "[object Boolean]", u = "[object Date]", h = "[object Error]", m = "[object Function]", p = "[object GeneratorFunction]", E = "[object Map]", v = "[object Number]", b = "[object Object]", S = "[object Promise]", d = "[object RegExp]", f = "[object Set]", g = "[object String]", _ = "[object Symbol]", A = "[object WeakMap]", R = "[object ArrayBuffer]", T = "[object DataView]", F = "[object Float32Array]", I = "[object Float64Array]", B = "[object Int8Array]", M = "[object Int16Array]", G = "[object Int32Array]", N = "[object Uint8Array]", pe = "[object Uint8ClampedArray]", me = "[object Uint16Array]", X = "[object Uint32Array]", Fe = /[\\^$.*+?()[\]{}|]/g, lt = /\w*$/, H = /^\[object .+?Constructor\]$/, Be = /^(?:0|[1-9]\d*)$/, j = {};
    j[s] = j[a] = j[R] = j[T] = j[l] = j[u] = j[F] = j[I] = j[B] = j[M] = j[G] = j[E] = j[v] = j[b] = j[d] = j[f] = j[g] = j[_] = j[N] = j[pe] = j[me] = j[X] = !0, j[h] = j[m] = j[A] = !1;
    var yt = typeof Nt == "object" && Nt && Nt.Object === Object && Nt, mt = typeof self == "object" && self && self.Object === Object && self, Ce = yt || mt || Function("return this")(), rt = t && !t.nodeType && t, U = rt && !0 && e && !e.nodeType && e, ue = U && U.exports === rt;
    function te(i, c) {
      return i.set(c[0], c[1]), i;
    }
    function z(i, c) {
      return i.add(c), i;
    }
    function re(i, c) {
      for (var y = -1, P = i ? i.length : 0; ++y < P && c(i[y], y, i) !== !1; )
        ;
      return i;
    }
    function ne(i, c) {
      for (var y = -1, P = c.length, L = i.length; ++y < P; )
        i[L + y] = c[y];
      return i;
    }
    function de(i, c, y, P) {
      for (var L = -1, C = i ? i.length : 0; ++L < C; )
        y = c(y, i[L], L, i);
      return y;
    }
    function Ae(i, c) {
      for (var y = -1, P = Array(i); ++y < i; )
        P[y] = c(y);
      return P;
    }
    function ce(i, c) {
      return i == null ? void 0 : i[c];
    }
    function je(i) {
      var c = !1;
      if (i != null && typeof i.toString != "function")
        try {
          c = !!(i + "");
        } catch {
        }
      return c;
    }
    function Qe(i) {
      var c = -1, y = Array(i.size);
      return i.forEach(function(P, L) {
        y[++c] = [L, P];
      }), y;
    }
    function ge(i, c) {
      return function(y) {
        return i(c(y));
      };
    }
    function _e(i) {
      var c = -1, y = Array(i.size);
      return i.forEach(function(P) {
        y[++c] = P;
      }), y;
    }
    var Ue = Array.prototype, gt = Function.prototype, nt = Object.prototype, ct = Ce["__core-js_shared__"], Rr = function() {
      var i = /[^.]+$/.exec(ct && ct.keys && ct.keys.IE_PROTO || "");
      return i ? "Symbol(src)_1." + i : "";
    }(), Tr = gt.toString, ut = nt.hasOwnProperty, Gt = nt.toString, Cr = RegExp(
      "^" + Tr.call(ut).replace(Fe, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
    ), Dt = ue ? Ce.Buffer : void 0, ft = Ce.Symbol, Ft = Ce.Uint8Array, Ve = ge(Object.getPrototypeOf, Object), Nr = Object.create, Ir = nt.propertyIsEnumerable, ar = Ue.splice, Et = Object.getOwnPropertySymbols, w = Dt ? Dt.isBuffer : void 0, O = ge(Object.keys, Object), V = bt(Ce, "DataView"), J = bt(Ce, "Map"), W = bt(Ce, "Promise"), $ = bt(Ce, "Set"), Xe = bt(Ce, "WeakMap"), He = bt(Object, "create"), Ee = We(V), qe = We(J), qt = We(W), pt = We($), Ne = We(Xe), vt = ft ? ft.prototype : void 0, lr = vt ? vt.valueOf : void 0;
    function dt(i) {
      var c = -1, y = i ? i.length : 0;
      for (this.clear(); ++c < y; ) {
        var P = i[c];
        this.set(P[0], P[1]);
      }
    }
    function Mt() {
      this.__data__ = He ? He(null) : {};
    }
    function cr(i) {
      return this.has(i) && delete this.__data__[i];
    }
    function Jt(i) {
      var c = this.__data__;
      if (He) {
        var y = c[i];
        return y === n ? void 0 : y;
      }
      return ut.call(c, i) ? c[i] : void 0;
    }
    function Qt(i) {
      var c = this.__data__;
      return He ? c[i] !== void 0 : ut.call(c, i);
    }
    function $t(i, c) {
      var y = this.__data__;
      return y[i] = He && c === void 0 ? n : c, this;
    }
    dt.prototype.clear = Mt, dt.prototype.delete = cr, dt.prototype.get = Jt, dt.prototype.has = Qt, dt.prototype.set = $t;
    function ve(i) {
      var c = -1, y = i ? i.length : 0;
      for (this.clear(); ++c < y; ) {
        var P = i[c];
        this.set(P[0], P[1]);
      }
    }
    function Dr() {
      this.__data__ = [];
    }
    function ur(i) {
      var c = this.__data__, y = Lr(c, i);
      if (y < 0)
        return !1;
      var P = c.length - 1;
      return y == P ? c.pop() : ar.call(c, y, 1), !0;
    }
    function Fr(i) {
      var c = this.__data__, y = Lr(c, i);
      return y < 0 ? void 0 : c[y][1];
    }
    function fr(i) {
      return Lr(this.__data__, i) > -1;
    }
    function qr(i, c) {
      var y = this.__data__, P = Lr(y, i);
      return P < 0 ? y.push([i, c]) : y[P][1] = c, this;
    }
    ve.prototype.clear = Dr, ve.prototype.delete = ur, ve.prototype.get = Fr, ve.prototype.has = fr, ve.prototype.set = qr;
    function Pe(i) {
      var c = -1, y = i ? i.length : 0;
      for (this.clear(); ++c < y; ) {
        var P = i[c];
        this.set(P[0], P[1]);
      }
    }
    function pr() {
      this.__data__ = {
        hash: new dt(),
        map: new (J || ve)(),
        string: new dt()
      };
    }
    function Ot(i) {
      return hr(this, i).delete(i);
    }
    function Xt(i) {
      return hr(this, i).get(i);
    }
    function tn(i) {
      return hr(this, i).has(i);
    }
    function Mr(i, c) {
      return hr(this, i).set(i, c), this;
    }
    Pe.prototype.clear = pr, Pe.prototype.delete = Ot, Pe.prototype.get = Xt, Pe.prototype.has = tn, Pe.prototype.set = Mr;
    function Ye(i) {
      this.__data__ = new ve(i);
    }
    function Co() {
      this.__data__ = new ve();
    }
    function No(i) {
      return this.__data__.delete(i);
    }
    function Io(i) {
      return this.__data__.get(i);
    }
    function Do(i) {
      return this.__data__.has(i);
    }
    function Fo(i, c) {
      var y = this.__data__;
      if (y instanceof ve) {
        var P = y.__data__;
        if (!J || P.length < r - 1)
          return P.push([i, c]), this;
        y = this.__data__ = new Pe(P);
      }
      return y.set(i, c), this;
    }
    Ye.prototype.clear = Co, Ye.prototype.delete = No, Ye.prototype.get = Io, Ye.prototype.has = Do, Ye.prototype.set = Fo;
    function $r(i, c) {
      var y = sn(i) || Br(i) ? Ae(i.length, String) : [], P = y.length, L = !!P;
      for (var C in i)
        ut.call(i, C) && !(L && (C == "length" || Go(C, P))) && y.push(C);
      return y;
    }
    function Nn(i, c, y) {
      var P = i[c];
      (!(ut.call(i, c) && Mn(P, y)) || y === void 0 && !(c in i)) && (i[c] = y);
    }
    function Lr(i, c) {
      for (var y = i.length; y--; )
        if (Mn(i[y][0], c))
          return y;
      return -1;
    }
    function xt(i, c) {
      return i && on(c, ln(c), i);
    }
    function rn(i, c, y, P, L, C, Z) {
      var Y;
      if (P && (Y = C ? P(i, L, C, Z) : P(i)), Y !== void 0)
        return Y;
      if (!Pt(i))
        return i;
      var be = sn(i);
      if (be) {
        if (Y = zo(i), !c)
          return Vo(i, Y);
      } else {
        var oe = kt(i), Me = oe == m || oe == p;
        if ($n(i))
          return kr(i, c);
        if (oe == b || oe == s || Me && !C) {
          if (je(i))
            return C ? i : {};
          if (Y = At(Me ? {} : i), !c)
            return Ho(i, xt(Y, i));
        } else {
          if (!j[oe])
            return C ? i : {};
          Y = Ko(i, oe, rn, c);
        }
      }
      Z || (Z = new Ye());
      var Ze = Z.get(i);
      if (Ze)
        return Ze;
      if (Z.set(i, Y), !be)
        var Oe = y ? Wo(i) : ln(i);
      return re(Oe || i, function($e, Ie) {
        Oe && (Ie = $e, $e = i[Ie]), Nn(Y, Ie, rn($e, c, y, P, Ie, i, Z));
      }), Y;
    }
    function qo(i) {
      return Pt(i) ? Nr(i) : {};
    }
    function Mo(i, c, y) {
      var P = c(i);
      return sn(i) ? P : ne(P, y(i));
    }
    function $o(i) {
      return Gt.call(i);
    }
    function Lo(i) {
      if (!Pt(i) || Qo(i))
        return !1;
      var c = an(i) || je(i) ? Cr : H;
      return c.test(We(i));
    }
    function ko(i) {
      if (!Fn(i))
        return O(i);
      var c = [];
      for (var y in Object(i))
        ut.call(i, y) && y != "constructor" && c.push(y);
      return c;
    }
    function kr(i, c) {
      if (c)
        return i.slice();
      var y = new i.constructor(i.length);
      return i.copy(y), y;
    }
    function nn(i) {
      var c = new i.constructor(i.byteLength);
      return new Ft(c).set(new Ft(i)), c;
    }
    function dr(i, c) {
      var y = c ? nn(i.buffer) : i.buffer;
      return new i.constructor(y, i.byteOffset, i.byteLength);
    }
    function In(i, c, y) {
      var P = c ? y(Qe(i), !0) : Qe(i);
      return de(P, te, new i.constructor());
    }
    function Dn(i) {
      var c = new i.constructor(i.source, lt.exec(i));
      return c.lastIndex = i.lastIndex, c;
    }
    function Bo(i, c, y) {
      var P = c ? y(_e(i), !0) : _e(i);
      return de(P, z, new i.constructor());
    }
    function jo(i) {
      return lr ? Object(lr.call(i)) : {};
    }
    function Uo(i, c) {
      var y = c ? nn(i.buffer) : i.buffer;
      return new i.constructor(y, i.byteOffset, i.length);
    }
    function Vo(i, c) {
      var y = -1, P = i.length;
      for (c || (c = Array(P)); ++y < P; )
        c[y] = i[y];
      return c;
    }
    function on(i, c, y, P) {
      y || (y = {});
      for (var L = -1, C = c.length; ++L < C; ) {
        var Z = c[L], Y = void 0;
        Nn(y, Z, Y === void 0 ? i[Z] : Y);
      }
      return y;
    }
    function Ho(i, c) {
      return on(i, Lt(i), c);
    }
    function Wo(i) {
      return Mo(i, ln, Lt);
    }
    function hr(i, c) {
      var y = i.__data__;
      return Jo(c) ? y[typeof c == "string" ? "string" : "hash"] : y.map;
    }
    function bt(i, c) {
      var y = ce(i, c);
      return Lo(y) ? y : void 0;
    }
    var Lt = Et ? ge(Et, Object) : Yo, kt = $o;
    (V && kt(new V(new ArrayBuffer(1))) != T || J && kt(new J()) != E || W && kt(W.resolve()) != S || $ && kt(new $()) != f || Xe && kt(new Xe()) != A) && (kt = function(i) {
      var c = Gt.call(i), y = c == b ? i.constructor : void 0, P = y ? We(y) : void 0;
      if (P)
        switch (P) {
          case Ee:
            return T;
          case qe:
            return E;
          case qt:
            return S;
          case pt:
            return f;
          case Ne:
            return A;
        }
      return c;
    });
    function zo(i) {
      var c = i.length, y = i.constructor(c);
      return c && typeof i[0] == "string" && ut.call(i, "index") && (y.index = i.index, y.input = i.input), y;
    }
    function At(i) {
      return typeof i.constructor == "function" && !Fn(i) ? qo(Ve(i)) : {};
    }
    function Ko(i, c, y, P) {
      var L = i.constructor;
      switch (c) {
        case R:
          return nn(i);
        case l:
        case u:
          return new L(+i);
        case T:
          return dr(i, P);
        case F:
        case I:
        case B:
        case M:
        case G:
        case N:
        case pe:
        case me:
        case X:
          return Uo(i, P);
        case E:
          return In(i, P, y);
        case v:
        case g:
          return new L(i);
        case d:
          return Dn(i);
        case f:
          return Bo(i, P, y);
        case _:
          return jo(i);
      }
    }
    function Go(i, c) {
      return c = c ?? o, !!c && (typeof i == "number" || Be.test(i)) && i > -1 && i % 1 == 0 && i < c;
    }
    function Jo(i) {
      var c = typeof i;
      return c == "string" || c == "number" || c == "symbol" || c == "boolean" ? i !== "__proto__" : i === null;
    }
    function Qo(i) {
      return !!Rr && Rr in i;
    }
    function Fn(i) {
      var c = i && i.constructor, y = typeof c == "function" && c.prototype || nt;
      return i === y;
    }
    function We(i) {
      if (i != null) {
        try {
          return Tr.call(i);
        } catch {
        }
        try {
          return i + "";
        } catch {
        }
      }
      return "";
    }
    function qn(i) {
      return rn(i, !0, !0);
    }
    function Mn(i, c) {
      return i === c || i !== i && c !== c;
    }
    function Br(i) {
      return Xo(i) && ut.call(i, "callee") && (!Ir.call(i, "callee") || Gt.call(i) == s);
    }
    var sn = Array.isArray;
    function jr(i) {
      return i != null && Ln(i.length) && !an(i);
    }
    function Xo(i) {
      return kn(i) && jr(i);
    }
    var $n = w || Zo;
    function an(i) {
      var c = Pt(i) ? Gt.call(i) : "";
      return c == m || c == p;
    }
    function Ln(i) {
      return typeof i == "number" && i > -1 && i % 1 == 0 && i <= o;
    }
    function Pt(i) {
      var c = typeof i;
      return !!i && (c == "object" || c == "function");
    }
    function kn(i) {
      return !!i && typeof i == "object";
    }
    function ln(i) {
      return jr(i) ? $r(i) : ko(i);
    }
    function Yo() {
      return [];
    }
    function Zo() {
      return !1;
    }
    e.exports = qn;
  }(dn, dn.exports)), dn.exports;
}
Vh();
var hn = { exports: {} };
hn.exports;
var hl;
function Hh() {
  return hl || (hl = 1, function(e, t) {
    var r = 200, n = "__lodash_hash_undefined__", o = 1, s = 2, a = 9007199254740991, l = "[object Arguments]", u = "[object Array]", h = "[object AsyncFunction]", m = "[object Boolean]", p = "[object Date]", E = "[object Error]", v = "[object Function]", b = "[object GeneratorFunction]", S = "[object Map]", d = "[object Number]", f = "[object Null]", g = "[object Object]", _ = "[object Promise]", A = "[object Proxy]", R = "[object RegExp]", T = "[object Set]", F = "[object String]", I = "[object Symbol]", B = "[object Undefined]", M = "[object WeakMap]", G = "[object ArrayBuffer]", N = "[object DataView]", pe = "[object Float32Array]", me = "[object Float64Array]", X = "[object Int8Array]", Fe = "[object Int16Array]", lt = "[object Int32Array]", H = "[object Uint8Array]", Be = "[object Uint8ClampedArray]", j = "[object Uint16Array]", yt = "[object Uint32Array]", mt = /[\\^$.*+?()[\]{}|]/g, Ce = /^\[object .+?Constructor\]$/, rt = /^(?:0|[1-9]\d*)$/, U = {};
    U[pe] = U[me] = U[X] = U[Fe] = U[lt] = U[H] = U[Be] = U[j] = U[yt] = !0, U[l] = U[u] = U[G] = U[m] = U[N] = U[p] = U[E] = U[v] = U[S] = U[d] = U[g] = U[R] = U[T] = U[F] = U[M] = !1;
    var ue = typeof Nt == "object" && Nt && Nt.Object === Object && Nt, te = typeof self == "object" && self && self.Object === Object && self, z = ue || te || Function("return this")(), re = t && !t.nodeType && t, ne = re && !0 && e && !e.nodeType && e, de = ne && ne.exports === re, Ae = de && ue.process, ce = function() {
      try {
        return Ae && Ae.binding && Ae.binding("util");
      } catch {
      }
    }(), je = ce && ce.isTypedArray;
    function Qe(i, c) {
      for (var y = -1, P = i == null ? 0 : i.length, L = 0, C = []; ++y < P; ) {
        var Z = i[y];
        c(Z, y, i) && (C[L++] = Z);
      }
      return C;
    }
    function ge(i, c) {
      for (var y = -1, P = c.length, L = i.length; ++y < P; )
        i[L + y] = c[y];
      return i;
    }
    function _e(i, c) {
      for (var y = -1, P = i == null ? 0 : i.length; ++y < P; )
        if (c(i[y], y, i))
          return !0;
      return !1;
    }
    function Ue(i, c) {
      for (var y = -1, P = Array(i); ++y < i; )
        P[y] = c(y);
      return P;
    }
    function gt(i) {
      return function(c) {
        return i(c);
      };
    }
    function nt(i, c) {
      return i.has(c);
    }
    function ct(i, c) {
      return i == null ? void 0 : i[c];
    }
    function Rr(i) {
      var c = -1, y = Array(i.size);
      return i.forEach(function(P, L) {
        y[++c] = [L, P];
      }), y;
    }
    function Tr(i, c) {
      return function(y) {
        return i(c(y));
      };
    }
    function ut(i) {
      var c = -1, y = Array(i.size);
      return i.forEach(function(P) {
        y[++c] = P;
      }), y;
    }
    var Gt = Array.prototype, Cr = Function.prototype, Dt = Object.prototype, ft = z["__core-js_shared__"], Ft = Cr.toString, Ve = Dt.hasOwnProperty, Nr = function() {
      var i = /[^.]+$/.exec(ft && ft.keys && ft.keys.IE_PROTO || "");
      return i ? "Symbol(src)_1." + i : "";
    }(), Ir = Dt.toString, ar = RegExp(
      "^" + Ft.call(Ve).replace(mt, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
    ), Et = de ? z.Buffer : void 0, w = z.Symbol, O = z.Uint8Array, V = Dt.propertyIsEnumerable, J = Gt.splice, W = w ? w.toStringTag : void 0, $ = Object.getOwnPropertySymbols, Xe = Et ? Et.isBuffer : void 0, He = Tr(Object.keys, Object), Ee = Lt(z, "DataView"), qe = Lt(z, "Map"), qt = Lt(z, "Promise"), pt = Lt(z, "Set"), Ne = Lt(z, "WeakMap"), vt = Lt(Object, "create"), lr = We(Ee), dt = We(qe), Mt = We(qt), cr = We(pt), Jt = We(Ne), Qt = w ? w.prototype : void 0, $t = Qt ? Qt.valueOf : void 0;
    function ve(i) {
      var c = -1, y = i == null ? 0 : i.length;
      for (this.clear(); ++c < y; ) {
        var P = i[c];
        this.set(P[0], P[1]);
      }
    }
    function Dr() {
      this.__data__ = vt ? vt(null) : {}, this.size = 0;
    }
    function ur(i) {
      var c = this.has(i) && delete this.__data__[i];
      return this.size -= c ? 1 : 0, c;
    }
    function Fr(i) {
      var c = this.__data__;
      if (vt) {
        var y = c[i];
        return y === n ? void 0 : y;
      }
      return Ve.call(c, i) ? c[i] : void 0;
    }
    function fr(i) {
      var c = this.__data__;
      return vt ? c[i] !== void 0 : Ve.call(c, i);
    }
    function qr(i, c) {
      var y = this.__data__;
      return this.size += this.has(i) ? 0 : 1, y[i] = vt && c === void 0 ? n : c, this;
    }
    ve.prototype.clear = Dr, ve.prototype.delete = ur, ve.prototype.get = Fr, ve.prototype.has = fr, ve.prototype.set = qr;
    function Pe(i) {
      var c = -1, y = i == null ? 0 : i.length;
      for (this.clear(); ++c < y; ) {
        var P = i[c];
        this.set(P[0], P[1]);
      }
    }
    function pr() {
      this.__data__ = [], this.size = 0;
    }
    function Ot(i) {
      var c = this.__data__, y = kr(c, i);
      if (y < 0)
        return !1;
      var P = c.length - 1;
      return y == P ? c.pop() : J.call(c, y, 1), --this.size, !0;
    }
    function Xt(i) {
      var c = this.__data__, y = kr(c, i);
      return y < 0 ? void 0 : c[y][1];
    }
    function tn(i) {
      return kr(this.__data__, i) > -1;
    }
    function Mr(i, c) {
      var y = this.__data__, P = kr(y, i);
      return P < 0 ? (++this.size, y.push([i, c])) : y[P][1] = c, this;
    }
    Pe.prototype.clear = pr, Pe.prototype.delete = Ot, Pe.prototype.get = Xt, Pe.prototype.has = tn, Pe.prototype.set = Mr;
    function Ye(i) {
      var c = -1, y = i == null ? 0 : i.length;
      for (this.clear(); ++c < y; ) {
        var P = i[c];
        this.set(P[0], P[1]);
      }
    }
    function Co() {
      this.size = 0, this.__data__ = {
        hash: new ve(),
        map: new (qe || Pe)(),
        string: new ve()
      };
    }
    function No(i) {
      var c = bt(this, i).delete(i);
      return this.size -= c ? 1 : 0, c;
    }
    function Io(i) {
      return bt(this, i).get(i);
    }
    function Do(i) {
      return bt(this, i).has(i);
    }
    function Fo(i, c) {
      var y = bt(this, i), P = y.size;
      return y.set(i, c), this.size += y.size == P ? 0 : 1, this;
    }
    Ye.prototype.clear = Co, Ye.prototype.delete = No, Ye.prototype.get = Io, Ye.prototype.has = Do, Ye.prototype.set = Fo;
    function $r(i) {
      var c = -1, y = i == null ? 0 : i.length;
      for (this.__data__ = new Ye(); ++c < y; )
        this.add(i[c]);
    }
    function Nn(i) {
      return this.__data__.set(i, n), this;
    }
    function Lr(i) {
      return this.__data__.has(i);
    }
    $r.prototype.add = $r.prototype.push = Nn, $r.prototype.has = Lr;
    function xt(i) {
      var c = this.__data__ = new Pe(i);
      this.size = c.size;
    }
    function rn() {
      this.__data__ = new Pe(), this.size = 0;
    }
    function qo(i) {
      var c = this.__data__, y = c.delete(i);
      return this.size = c.size, y;
    }
    function Mo(i) {
      return this.__data__.get(i);
    }
    function $o(i) {
      return this.__data__.has(i);
    }
    function Lo(i, c) {
      var y = this.__data__;
      if (y instanceof Pe) {
        var P = y.__data__;
        if (!qe || P.length < r - 1)
          return P.push([i, c]), this.size = ++y.size, this;
        y = this.__data__ = new Ye(P);
      }
      return y.set(i, c), this.size = y.size, this;
    }
    xt.prototype.clear = rn, xt.prototype.delete = qo, xt.prototype.get = Mo, xt.prototype.has = $o, xt.prototype.set = Lo;
    function ko(i, c) {
      var y = Br(i), P = !y && Mn(i), L = !y && !P && jr(i), C = !y && !P && !L && kn(i), Z = y || P || L || C, Y = Z ? Ue(i.length, String) : [], be = Y.length;
      for (var oe in i)
        Ve.call(i, oe) && !(Z && // Safari 9 has enumerable `arguments.length` in strict mode.
        (oe == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
        L && (oe == "offset" || oe == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
        C && (oe == "buffer" || oe == "byteLength" || oe == "byteOffset") || // Skip index properties.
        Ko(oe, be))) && Y.push(oe);
      return Y;
    }
    function kr(i, c) {
      for (var y = i.length; y--; )
        if (qn(i[y][0], c))
          return y;
      return -1;
    }
    function nn(i, c, y) {
      var P = c(i);
      return Br(i) ? P : ge(P, y(i));
    }
    function dr(i) {
      return i == null ? i === void 0 ? B : f : W && W in Object(i) ? kt(i) : Fn(i);
    }
    function In(i) {
      return Pt(i) && dr(i) == l;
    }
    function Dn(i, c, y, P, L) {
      return i === c ? !0 : i == null || c == null || !Pt(i) && !Pt(c) ? i !== i && c !== c : Bo(i, c, y, P, Dn, L);
    }
    function Bo(i, c, y, P, L, C) {
      var Z = Br(i), Y = Br(c), be = Z ? u : At(i), oe = Y ? u : At(c);
      be = be == l ? g : be, oe = oe == l ? g : oe;
      var Me = be == g, Ze = oe == g, Oe = be == oe;
      if (Oe && jr(i)) {
        if (!jr(c))
          return !1;
        Z = !0, Me = !1;
      }
      if (Oe && !Me)
        return C || (C = new xt()), Z || kn(i) ? on(i, c, y, P, L, C) : Ho(i, c, be, y, P, L, C);
      if (!(y & o)) {
        var $e = Me && Ve.call(i, "__wrapped__"), Ie = Ze && Ve.call(c, "__wrapped__");
        if ($e || Ie) {
          var Yt = $e ? i.value() : i, Bt = Ie ? c.value() : c;
          return C || (C = new xt()), L(Yt, Bt, y, P, C);
        }
      }
      return Oe ? (C || (C = new xt()), Wo(i, c, y, P, L, C)) : !1;
    }
    function jo(i) {
      if (!Ln(i) || Jo(i))
        return !1;
      var c = $n(i) ? ar : Ce;
      return c.test(We(i));
    }
    function Uo(i) {
      return Pt(i) && an(i.length) && !!U[dr(i)];
    }
    function Vo(i) {
      if (!Qo(i))
        return He(i);
      var c = [];
      for (var y in Object(i))
        Ve.call(i, y) && y != "constructor" && c.push(y);
      return c;
    }
    function on(i, c, y, P, L, C) {
      var Z = y & o, Y = i.length, be = c.length;
      if (Y != be && !(Z && be > Y))
        return !1;
      var oe = C.get(i);
      if (oe && C.get(c))
        return oe == c;
      var Me = -1, Ze = !0, Oe = y & s ? new $r() : void 0;
      for (C.set(i, c), C.set(c, i); ++Me < Y; ) {
        var $e = i[Me], Ie = c[Me];
        if (P)
          var Yt = Z ? P(Ie, $e, Me, c, i, C) : P($e, Ie, Me, i, c, C);
        if (Yt !== void 0) {
          if (Yt)
            continue;
          Ze = !1;
          break;
        }
        if (Oe) {
          if (!_e(c, function(Bt, yr) {
            if (!nt(Oe, yr) && ($e === Bt || L($e, Bt, y, P, C)))
              return Oe.push(yr);
          })) {
            Ze = !1;
            break;
          }
        } else if (!($e === Ie || L($e, Ie, y, P, C))) {
          Ze = !1;
          break;
        }
      }
      return C.delete(i), C.delete(c), Ze;
    }
    function Ho(i, c, y, P, L, C, Z) {
      switch (y) {
        case N:
          if (i.byteLength != c.byteLength || i.byteOffset != c.byteOffset)
            return !1;
          i = i.buffer, c = c.buffer;
        case G:
          return !(i.byteLength != c.byteLength || !C(new O(i), new O(c)));
        case m:
        case p:
        case d:
          return qn(+i, +c);
        case E:
          return i.name == c.name && i.message == c.message;
        case R:
        case F:
          return i == c + "";
        case S:
          var Y = Rr;
        case T:
          var be = P & o;
          if (Y || (Y = ut), i.size != c.size && !be)
            return !1;
          var oe = Z.get(i);
          if (oe)
            return oe == c;
          P |= s, Z.set(i, c);
          var Me = on(Y(i), Y(c), P, L, C, Z);
          return Z.delete(i), Me;
        case I:
          if ($t)
            return $t.call(i) == $t.call(c);
      }
      return !1;
    }
    function Wo(i, c, y, P, L, C) {
      var Z = y & o, Y = hr(i), be = Y.length, oe = hr(c), Me = oe.length;
      if (be != Me && !Z)
        return !1;
      for (var Ze = be; Ze--; ) {
        var Oe = Y[Ze];
        if (!(Z ? Oe in c : Ve.call(c, Oe)))
          return !1;
      }
      var $e = C.get(i);
      if ($e && C.get(c))
        return $e == c;
      var Ie = !0;
      C.set(i, c), C.set(c, i);
      for (var Yt = Z; ++Ze < be; ) {
        Oe = Y[Ze];
        var Bt = i[Oe], yr = c[Oe];
        if (P)
          var ks = Z ? P(yr, Bt, Oe, c, i, C) : P(Bt, yr, Oe, i, c, C);
        if (!(ks === void 0 ? Bt === yr || L(Bt, yr, y, P, C) : ks)) {
          Ie = !1;
          break;
        }
        Yt || (Yt = Oe == "constructor");
      }
      if (Ie && !Yt) {
        var Bn = i.constructor, jn = c.constructor;
        Bn != jn && "constructor" in i && "constructor" in c && !(typeof Bn == "function" && Bn instanceof Bn && typeof jn == "function" && jn instanceof jn) && (Ie = !1);
      }
      return C.delete(i), C.delete(c), Ie;
    }
    function hr(i) {
      return nn(i, ln, zo);
    }
    function bt(i, c) {
      var y = i.__data__;
      return Go(c) ? y[typeof c == "string" ? "string" : "hash"] : y.map;
    }
    function Lt(i, c) {
      var y = ct(i, c);
      return jo(y) ? y : void 0;
    }
    function kt(i) {
      var c = Ve.call(i, W), y = i[W];
      try {
        i[W] = void 0;
        var P = !0;
      } catch {
      }
      var L = Ir.call(i);
      return P && (c ? i[W] = y : delete i[W]), L;
    }
    var zo = $ ? function(i) {
      return i == null ? [] : (i = Object(i), Qe($(i), function(c) {
        return V.call(i, c);
      }));
    } : Yo, At = dr;
    (Ee && At(new Ee(new ArrayBuffer(1))) != N || qe && At(new qe()) != S || qt && At(qt.resolve()) != _ || pt && At(new pt()) != T || Ne && At(new Ne()) != M) && (At = function(i) {
      var c = dr(i), y = c == g ? i.constructor : void 0, P = y ? We(y) : "";
      if (P)
        switch (P) {
          case lr:
            return N;
          case dt:
            return S;
          case Mt:
            return _;
          case cr:
            return T;
          case Jt:
            return M;
        }
      return c;
    });
    function Ko(i, c) {
      return c = c ?? a, !!c && (typeof i == "number" || rt.test(i)) && i > -1 && i % 1 == 0 && i < c;
    }
    function Go(i) {
      var c = typeof i;
      return c == "string" || c == "number" || c == "symbol" || c == "boolean" ? i !== "__proto__" : i === null;
    }
    function Jo(i) {
      return !!Nr && Nr in i;
    }
    function Qo(i) {
      var c = i && i.constructor, y = typeof c == "function" && c.prototype || Dt;
      return i === y;
    }
    function Fn(i) {
      return Ir.call(i);
    }
    function We(i) {
      if (i != null) {
        try {
          return Ft.call(i);
        } catch {
        }
        try {
          return i + "";
        } catch {
        }
      }
      return "";
    }
    function qn(i, c) {
      return i === c || i !== i && c !== c;
    }
    var Mn = In(/* @__PURE__ */ function() {
      return arguments;
    }()) ? In : function(i) {
      return Pt(i) && Ve.call(i, "callee") && !V.call(i, "callee");
    }, Br = Array.isArray;
    function sn(i) {
      return i != null && an(i.length) && !$n(i);
    }
    var jr = Xe || Zo;
    function Xo(i, c) {
      return Dn(i, c);
    }
    function $n(i) {
      if (!Ln(i))
        return !1;
      var c = dr(i);
      return c == v || c == b || c == h || c == A;
    }
    function an(i) {
      return typeof i == "number" && i > -1 && i % 1 == 0 && i <= a;
    }
    function Ln(i) {
      var c = typeof i;
      return i != null && (c == "object" || c == "function");
    }
    function Pt(i) {
      return i != null && typeof i == "object";
    }
    var kn = je ? gt(je) : Uo;
    function ln(i) {
      return sn(i) ? ko(i) : Vo(i);
    }
    function Yo() {
      return [];
    }
    function Zo() {
      return !1;
    }
    e.exports = Xo;
  }(hn, hn.exports)), hn.exports;
}
Hh();
Ct(null);
Ct(null);
qu(null);
Ct(null);
var Wh = /* @__PURE__ */ Jl({ name: "Link", props: { as: { type: String, default: "a" }, data: { type: Object, default: () => ({}) }, href: { type: String, required: !0 }, method: { type: String, default: "get" }, replace: { type: Boolean, default: !1 }, preserveScroll: { type: Boolean, default: !1 }, preserveState: { type: Boolean, default: null }, only: { type: Array, default: () => [] }, except: { type: Array, default: () => [] }, headers: { type: Object, default: () => ({}) }, queryStringArrayFormat: { type: String, default: "brackets" }, async: { type: Boolean, default: !1 }, prefetch: { type: [Boolean, String, Array], default: !1 }, cacheFor: { type: [Number, String, Array], default: 0 }, onStart: { type: Function, default: (e) => {
} }, onProgress: { type: Function, default: () => {
} }, onFinish: { type: Function, default: () => {
} }, onBefore: { type: Function, default: () => {
} }, onCancel: { type: Function, default: () => {
} }, onSuccess: { type: Function, default: () => {
} }, onError: { type: Function, default: () => {
} }, onCancelToken: { type: Function, default: () => {
} } }, setup(e, { slots: t, attrs: r }) {
  let n = Ct(0), o = Ct(null), s = e.prefetch === !0 ? ["hover"] : e.prefetch === !1 ? [] : Array.isArray(e.prefetch) ? e.prefetch : [e.prefetch], a = e.cacheFor !== 0 ? e.cacheFor : s.length === 1 && s[0] === "click" ? 0 : 3e4;
  cf(() => {
    s.includes("mount") && S();
  }), uf(() => {
    clearTimeout(o.value);
  });
  let l = e.method.toLowerCase(), u = l !== "get" ? "button" : e.as.toLowerCase(), h = Wt(() => Wc(l, e.href || "", e.data, e.queryStringArrayFormat)), m = Wt(() => h.value[0]), p = Wt(() => h.value[1]), E = Wt(() => ({ a: { href: m.value }, button: { type: "button" } })), v = { data: p.value, method: l, replace: e.replace, preserveScroll: e.preserveScroll, preserveState: e.preserveState ?? l !== "get", only: e.only, except: e.except, headers: e.headers, async: e.async }, b = { ...v, onCancelToken: e.onCancelToken, onBefore: e.onBefore, onStart: (_) => {
    n.value++, e.onStart(_);
  }, onProgress: e.onProgress, onFinish: (_) => {
    n.value--, e.onFinish(_);
  }, onCancel: e.onCancel, onSuccess: e.onSuccess, onError: e.onError }, S = () => {
    Qr.prefetch(m.value, v, { cacheFor: a });
  }, d = { onClick: (_) => {
    Zi(_) && (_.preventDefault(), Qr.visit(m.value, b));
  } }, f = { onMouseenter: () => {
    o.value = setTimeout(() => {
      S();
    }, 75);
  }, onMouseleave: () => {
    clearTimeout(o.value);
  }, onClick: d.onClick }, g = { onMousedown: (_) => {
    Zi(_) && (_.preventDefault(), S());
  }, onMouseup: (_) => {
    _.preventDefault(), Qr.visit(m.value, b);
  }, onClick: (_) => {
    Zi(_) && _.preventDefault();
  } };
  return () => Lf(u, { ...r, ...E.value[u] || {}, "data-loading": n.value > 0 ? "" : void 0, ...s.includes("hover") ? f : s.includes("click") ? g : d }, t);
} }), yl = Wh;
const zh = { class: "from-white dark:from-gray-800 dark:to-gray-900 overflow-hidden dark:border-gray-700 transition-all duration-300" }, Kh = { class: "mb-6 flex flex-col sm:flex-row justify-between items-center gap-4" }, Gh = { class: "relative w-full sm:w-64" }, Jh = ["placeholder"], Qh = { class: "w-full sm:w-auto" }, Xh = { class: "hidden sm:block overflow-x-auto rounded-lg" }, Yh = {
  key: 0,
  class: "min-w-full divide-y divide-gray-200 dark:divide-gray-700"
}, Zh = { class: "bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-800" }, ey = ["onClick"], ty = { class: "flex items-center space-x-2" }, ry = { class: "bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700" }, ny = ["onClick"], oy = {
  key: 1,
  class: "flex flex-col items-center justify-center py-12 bg-white dark:bg-gray-800 rounded-lg"
}, iy = { class: "sm:hidden space-y-4" }, sy = ["onClick"], ay = { class: "font-medium text-gray-500 dark:text-gray-400" }, ly = { class: "text-gray-800 dark:text-gray-200" }, cy = {
  key: 1,
  class: "flex flex-col items-center justify-center py-8 bg-white dark:bg-gray-800 rounded-lg"
}, uy = { class: "mt-8 flex flex-col items-center justify-between gap-4 sm:gap-6" }, fy = { class: "w-full flex flex-col sm:flex-row items-center justify-between gap-4" }, py = { class: "text-center sm:text-left" }, dy = { class: "text-sm text-gray-600 dark:text-gray-300" }, hy = { class: "font-bold text-blue-600 dark:text-blue-400" }, yy = { class: "font-bold text-blue-600 dark:text-blue-400" }, my = { class: "font-bold text-blue-600 dark:text-blue-400" }, gy = { class: "w-full flex justify-center px-4 sm:px-0" }, vy = {
  key: 0,
  class: "isolate inline-flex flex-wrap justify-center gap-1 sm:gap-2",
  "aria-label": "Pagination"
}, by = {
  key: 0,
  class: "h-4 w-4 sm:h-5 sm:w-5",
  viewBox: "0 0 20 20",
  fill: "currentColor",
  "aria-hidden": "true"
}, wy = {
  key: 1,
  class: "h-4 w-4 sm:h-5 sm:w-5",
  viewBox: "0 0 20 20",
  fill: "currentColor",
  "aria-hidden": "true"
}, Sy = {
  key: 1,
  class: "isolate inline-flex flex-wrap justify-center gap-1 sm:gap-2",
  "aria-label": "Pagination"
}, _y = {
  key: 0,
  class: "h-4 w-4 sm:h-5 sm:w-5",
  viewBox: "0 0 20 20",
  fill: "currentColor",
  "aria-hidden": "true"
}, Ey = {
  key: 1,
  class: "h-4 w-4 sm:h-5 sm:w-5",
  viewBox: "0 0 20 20",
  fill: "currentColor",
  "aria-hidden": "true"
}, Oy = { class: "w-full sm:w-48 flex items-center gap-2" }, xy = /* @__PURE__ */ Jl({
  __name: "MainTable",
  props: {
    items: {
      type: Object,
      required: !0
    },
    columns: {
      type: Array,
      required: !0
    },
    searchPlaceholder: {
      type: String,
      required: !1
    },
    searchKey: {
      type: String,
      default: "search"
    },
    enableAddItem: {
      type: Boolean,
      default: !1
    }
  },
  emits: ["add-item", "row-click"],
  setup(e, { emit: t }) {
    const r = Ct(null), n = Ct(null), o = e, s = Ct(null), a = Wt(() => `filter[${o.searchKey}]` || "filter[search]"), l = Ct(route().params.filter ? route().params.filter[o.searchKey] : "");
    Of(l, (S) => {
      s.value && clearTimeout(s.value), s.value = setTimeout(() => {
        var f;
        const d = ((f = o.items.meta) == null ? void 0 : f.path) || o.items.path;
        Qr.get(d, {
          [a.value]: S
        }, {
          preserveScroll: !0,
          preserveState: !0
        });
      }, 300);
    });
    const u = Ct(10);
    function h() {
      var S;
      Qr.get(((S = o.items.meta) == null ? void 0 : S.path) || o.items.path, {
        [a.value]: l.value,
        per_page: u.value
      }, {
        preserveScroll: !0,
        preserveState: !0
      });
    }
    const m = Wt(() => o.items.data), p = Wt(() => {
      var S;
      return ((S = o.items.meta) == null ? void 0 : S.from) || o.items.from;
    }), E = Wt(() => {
      var S;
      return ((S = o.items.meta) == null ? void 0 : S.to) || o.items.to;
    }), v = Wt(() => {
      var S;
      return ((S = o.items.meta) == null ? void 0 : S.total) || o.items.total;
    }), b = (S) => {
      var f;
      r.value === S ? n.value = n.value === "asc" ? "desc" : "asc" : (r.value = S, n.value = "asc");
      const d = n.value === "desc" ? `-${S}` : S;
      Qr.get(((f = o.items.meta) == null ? void 0 : f.path) || o.items.path, {
        ...route().params,
        sort: d
      }, {
        preserveScroll: !0,
        preserveState: !0
      });
    };
    return (S, d) => (Q(), se("div", zh, [
      q("div", null, [
        q("div", Kh, [
          q("div", Gh, [
            Gs(q("input", {
              type: "text",
              class: "w-full pl-10 pr-4 py-2 rounded-lg border-2 border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200 bg-white dark:bg-gray-800 dark:border-gray-600 dark:text-gray-100 dark:focus:border-blue-400",
              placeholder: e.searchPlaceholder ?? "Search...",
              "onUpdate:modelValue": d[0] || (d[0] = (f) => l.value = f)
            }, null, 8, Jh), [
              [Uf, l.value]
            ]),
            d[3] || (d[3] = q("div", { class: "absolute left-3 top-2.5 text-gray-400" }, [
              q("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                class: "h-5 w-5",
                fill: "none",
                viewBox: "0 0 24 24",
                stroke: "currentColor"
              }, [
                q("path", {
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round",
                  "stroke-width": "2",
                  d: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                })
              ])
            ], -1))
          ]),
          q("div", Qh, [
            ai(S.$slots, "add-item", { enableAddItem: e.enableAddItem }, () => [
              e.enableAddItem ? (Q(), se("button", {
                key: 0,
                onClick: d[1] || (d[1] = (f) => S.$emit("add-item")),
                class: "w-full sm:w-auto group inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 rounded-lg font-semibold text-sm text-white shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200"
              }, d[4] || (d[4] = [
                q("svg", {
                  xmlns: "http://www.w3.org/2000/svg",
                  class: "h-5 w-5 mr-2 group-hover:scale-110 transition-transform duration-200",
                  fill: "none",
                  viewBox: "0 0 24 24",
                  stroke: "currentColor"
                }, [
                  q("path", {
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round",
                    "stroke-width": "2",
                    d: "M12 4v16m8-8H4"
                  })
                ], -1),
                Vt(" Add New Item ")
              ]))) : ea("", !0)
            ])
          ])
        ]),
        q("div", Xh, [
          m.value.length > 0 ? (Q(), se("table", Yh, [
            q("thead", Zh, [
              q("tr", null, [
                (Q(!0), se(De, null, mr(e.columns, (f) => (Q(), se("th", {
                  key: f.key,
                  scope: "col",
                  class: "px-6 py-4 text-left text-xs font-bold text-gray-600 dark:text-gray-300 uppercase tracking-wider cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-200",
                  style: go(f.width ? { width: f.width } : {}),
                  onClick: (g) => b(f.key)
                }, [
                  q("div", ty, [
                    q("span", null, Tt(f.label), 1),
                    (Q(), se("svg", {
                      xmlns: "http://www.w3.org/2000/svg",
                      class: zr(["h-4 w-4 transition-transform duration-200", { "rotate-180": r.value === f.key && n.value === "desc" }]),
                      fill: "none",
                      viewBox: "0 0 24 24",
                      stroke: "currentColor"
                    }, d[5] || (d[5] = [
                      q("path", {
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round",
                        "stroke-width": "2",
                        d: "M5 15l7-7 7 7"
                      }, null, -1)
                    ]), 2))
                  ])
                ], 12, ey))), 128))
              ])
            ]),
            q("tbody", ry, [
              (Q(!0), se(De, null, mr(m.value, (f, g) => (Q(), se(De, {
                key: f.id || g
              }, [
                f ? (Q(), se("tr", {
                  key: 0,
                  class: "hover:bg-blue-50 dark:hover:bg-gray-700 transition-colors duration-200 cursor-pointer",
                  onClick: (_) => S.$emit("row-click", f)
                }, [
                  (Q(!0), se(De, null, mr(e.columns, (_) => (Q(), se("td", {
                    key: _.key,
                    class: "px-6 py-4 whitespace-nowrap text-sm text-gray-700 dark:text-gray-200"
                  }, [
                    S.$slots[_.key] ? ai(S.$slots, _.key, {
                      key: 0,
                      item: f,
                      column: _
                    }, void 0) : (Q(), se(De, { key: 1 }, [
                      Vt(Tt(f == null ? void 0 : f[_.key]), 1)
                    ], 64))
                  ]))), 128))
                ], 8, ny)) : ea("", !0)
              ], 64))), 128))
            ])
          ])) : (Q(), se("div", oy, d[6] || (d[6] = [
            q("svg", {
              class: "w-16 h-16 text-gray-400 dark:text-gray-600 mb-4",
              fill: "none",
              stroke: "currentColor",
              viewBox: "0 0 24 24"
            }, [
              q("path", {
                "stroke-linecap": "round",
                "stroke-linejoin": "round",
                "stroke-width": "2",
                d: "M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              })
            ], -1),
            q("p", { class: "text-lg font-medium text-gray-600 dark:text-gray-400" }, "No data found", -1),
            q("p", { class: "text-sm text-gray-500 dark:text-gray-500" }, "Try adjusting your search or filters", -1)
          ])))
        ]),
        q("div", iy, [
          m.value.length > 0 ? (Q(!0), se(De, { key: 0 }, mr(m.value, (f, g) => (Q(), se("div", {
            key: (f == null ? void 0 : f.id) || g,
            class: "bg-white dark:bg-gray-800 shadow-md rounded-lg p-4 space-y-3 hover:shadow-lg transition-shadow duration-200 border border-gray-200 dark:border-gray-700 cursor-pointer",
            onClick: (_) => S.$emit("row-click", f)
          }, [
            (Q(!0), se(De, null, mr(e.columns, (_) => (Q(), se("div", {
              key: _.key,
              class: "flex justify-between items-center"
            }, [
              q("span", ay, Tt(_.label) + ":", 1),
              q("div", ly, [
                S.$slots[_.key] ? ai(S.$slots, _.key, {
                  key: 0,
                  item: f,
                  column: _
                }, void 0) : (Q(), se(De, { key: 1 }, [
                  Vt(Tt(f == null ? void 0 : f[_.key]), 1)
                ], 64))
              ])
            ]))), 128))
          ], 8, sy))), 128)) : (Q(), se("div", cy, d[7] || (d[7] = [
            q("svg", {
              class: "w-12 h-12 text-gray-400 dark:text-gray-600 mb-3",
              fill: "none",
              stroke: "currentColor",
              viewBox: "0 0 24 24"
            }, [
              q("path", {
                "stroke-linecap": "round",
                "stroke-linejoin": "round",
                "stroke-width": "2",
                d: "M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              })
            ], -1),
            q("p", { class: "text-base font-medium text-gray-600 dark:text-gray-400" }, "No data found", -1),
            q("p", { class: "text-sm text-gray-500 dark:text-gray-500" }, "Try adjusting your search or filters", -1)
          ])))
        ]),
        q("div", uy, [
          q("div", fy, [
            q("div", py, [
              q("p", dy, [
                d[8] || (d[8] = Vt(" Showing ")),
                q("span", hy, Tt(p.value), 1),
                d[9] || (d[9] = Vt(" to ")),
                q("span", yy, Tt(E.value), 1),
                d[10] || (d[10] = Vt(" of ")),
                q("span", my, Tt(v.value), 1)
              ])
            ]),
            q("div", gy, [
              o.items.meta ? (Q(), se("nav", vy, [
                (Q(!0), se(De, null, mr(o.items.meta.links, (f) => (Q(), En(ss(yl), {
                  key: f.label,
                  href: f.url || "#",
                  "preserve-scroll": "",
                  "preserve-state": "",
                  class: zr([
                    "relative inline-flex items-center px-2 sm:px-4 py-2 text-xs sm:text-sm font-medium transition-all duration-200",
                    f.active ? "z-10 bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-md hover:from-blue-600 hover:to-blue-700" : "text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 border-2 border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700",
                    f.url ? "cursor-pointer hover:shadow-md" : "opacity-50 cursor-not-allowed",
                    "rounded-lg transform hover:-translate-y-0.5"
                  ]),
                  disabled: !f.url
                }, {
                  default: Ks(() => [
                    f.label.includes("Previous") ? (Q(), se("svg", by, d[11] || (d[11] = [
                      q("path", {
                        "fill-rule": "evenodd",
                        d: "M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z",
                        "clip-rule": "evenodd"
                      }, null, -1)
                    ]))) : f.label.includes("Next") ? (Q(), se("svg", wy, d[12] || (d[12] = [
                      q("path", {
                        "fill-rule": "evenodd",
                        d: "M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z",
                        "clip-rule": "evenodd"
                      }, null, -1)
                    ]))) : (Q(), se(De, { key: 2 }, [
                      Vt(Tt(f.label), 1)
                    ], 64))
                  ]),
                  _: 2
                }, 1032, ["href", "class", "disabled"]))), 128))
              ])) : (Q(), se("nav", Sy, [
                (Q(!0), se(De, null, mr(o.items.links, (f) => (Q(), En(ss(yl), {
                  key: f.label,
                  href: f.url || "#",
                  "preserve-scroll": "",
                  "preserve-state": "",
                  class: zr([
                    "relative inline-flex items-center px-2 sm:px-4 py-2 text-xs sm:text-sm font-medium transition-all duration-200",
                    f.active ? "z-10 bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-md hover:from-blue-600 hover:to-blue-700" : "text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 border-2 border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700",
                    f.url ? "cursor-pointer hover:shadow-md" : "opacity-50 cursor-not-allowed",
                    "rounded-lg transform hover:-translate-y-0.5"
                  ]),
                  disabled: !f.url
                }, {
                  default: Ks(() => [
                    f.label.includes("Previous") ? (Q(), se("svg", _y, d[13] || (d[13] = [
                      q("path", {
                        "fill-rule": "evenodd",
                        d: "M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z",
                        "clip-rule": "evenodd"
                      }, null, -1)
                    ]))) : f.label.includes("Next") ? (Q(), se("svg", Ey, d[14] || (d[14] = [
                      q("path", {
                        "fill-rule": "evenodd",
                        d: "M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z",
                        "clip-rule": "evenodd"
                      }, null, -1)
                    ]))) : (Q(), se(De, { key: 2 }, [
                      Vt(Tt(f.label), 1)
                    ], 64))
                  ]),
                  _: 2
                }, 1032, ["href", "class", "disabled"]))), 128))
              ]))
            ]),
            q("div", Oy, [
              d[16] || (d[16] = q("label", { class: "text-gray-700 dark:text-gray-300 font-medium" }, "Show:", -1)),
              Gs(q("select", {
                "onUpdate:modelValue": d[2] || (d[2] = (f) => u.value = f),
                onChange: h,
                class: "flex-1 rounded-lg border-2 border-gray-300 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-100 px-4 py-2 shadow-sm hover:shadow-lg transition-all duration-300 ease-in-out focus:border-blue-500 focus:ring-4 focus:ring-blue-300 focus:ring-opacity-50 dark:border-gray-600 dark:hover:border-blue-400 appearance-none bg-no-repeat bg-right cursor-pointer hover:-translate-y-0.5 transform bg-gradient-to-r from-white to-gray-50 dark:from-gray-800 dark:to-gray-700 font-medium"
              }, d[15] || (d[15] = [
                q("option", {
                  value: "10",
                  class: "py-2 px-4 hover:bg-blue-50 dark:hover:bg-gray-700"
                }, "10 items ", -1),
                q("option", {
                  value: "25",
                  class: "py-2 px-4 hover:bg-blue-50 dark:hover:bg-gray-700"
                }, "25 items ", -1),
                q("option", {
                  value: "50",
                  class: "py-2 px-4 hover:bg-blue-50 dark:hover:bg-gray-700"
                }, "50 items ", -1),
                q("option", {
                  value: "100",
                  class: "py-2 px-4 hover:bg-blue-50 dark:hover:bg-gray-700"
                }, "100 items ", -1)
              ]), 544), [
                [Vf, u.value]
              ])
            ])
          ])
        ])
      ])
    ]));
  }
}), Ay = (e, t) => {
  const r = e.__vccOpts || e;
  for (const [n, o] of t)
    r[n] = o;
  return r;
}, Py = /* @__PURE__ */ Ay(xy, [["__scopeId", "data-v-7f93e310"]]), Ry = {
  install: (e) => {
    e.component("LaraTable", Py);
  }
};
export {
  Ry as default
};