import { defineComponent, watch, ref, createElementBlock, openBlock, createElementVNode, shallowRef, watchEffect, readonly, inject, computed, unref, getCurrentInstance, isVNode, nextTick, createVNode, h, renderSlot, hasInjectionContext, resolveComponent, toRaw, isRef, isReactive, toRef, getCurrentScope, onScopeDispose, warn, mergeProps, withCtx, createBlock, toDisplayString, Fragment, renderList, createTextVNode, resolveDirective, withKeys, withDirectives, createCommentVNode, resolveDynamicComponent, vModelText, useAttrs as useAttrs$1, useSlots, normalizeStyle, normalizeClass, withModifiers, provide, reactive, effectScope, onMounted, Teleport as Teleport$1, normalizeProps, Text, toRefs, markRaw, Transition, vShow, cloneVNode, Comment, defineAsyncComponent, Suspense, useSSRContext, createApp, shallowReactive, onErrorCaptured, onServerPrefetch, isReadonly, isShallow, toValue as toValue$1 } from 'vue';
import { y as destr, z as klona, c as createError$1, A as headSymbol, B as useHead$1, C as useSeoMeta$1, D as hasProtocol, E as isScriptProtocol, F as joinURL, G as parseQuery, H as getRequestHeader, I as withQuery, J as sanitizeStatusCode, K as setCookie, L as getCookie, M as deleteCookie, N as getContext, O as withTrailingSlash, P as withoutTrailingSlash, $ as $fetch, Q as baseURL, R as defu, S as createHooks, T as executeAsync, U as toRouteMatcher, V as createRouter$1 } from '../nitro/nitro.mjs';
import { useRoute as useRoute$1, RouterView, createMemoryHistory, createRouter, START_LOCATION } from 'vue-router';
import { PrismaClient } from '@prisma/client';
import { Theme, dt, ThemeService } from '@primeuix/styled';
import { mergeKeys } from '@primeuix/utils';
import { resolve, minifyCSS, isNotEmpty } from '@primeuix/utils/object';
import { style } from '@primeuix/styles/base';
import { isClient as isClient$1, setAttributes, setAttribute, isExist } from '@primeuix/utils/dom';
import { EventBus } from '@primeuix/utils/eventbus';
import sync, { getFrameData } from 'framesync';
import { inertia, animate, velocityPerSecond, cubicBezier, bounceOut, bounceInOut, bounceIn, anticipate, backOut, backInOut, backIn, circOut, circInOut, circIn, easeOut, easeInOut, easeIn, linear } from 'popmotion';
import { number, complex, alpha, filter, px, progressPercentage, degrees, scale, color } from 'style-value-types';
import { NOOP, isString as isString$1, isObject as isObject$2, hasOwn, isFunction as isFunction$1, camelize, isArray as isArray$1, hyphenate } from '@vue/shared';
import { isNil, fromPairs, set, get, pick, isUndefined as isUndefined$1 } from 'lodash-unified';
import axios from 'axios';
import { ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderAttrs, ssrGetDirectiveProps, ssrRenderVNode, ssrRenderAttr, ssrRenderStyle, ssrRenderSuspense } from 'vue/server-renderer';
import { TinyColor } from '@ctrl/tinycolor';
import { placements, createPopper } from '@popperjs/core';
import '@prisma/extension-accelerate';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import '@primevue/core/base/style';
import '@primeuix/styles/tooltip';
import '@primeuix/styles/ripple';
import 'jsonwebtoken';
import 'unhead/server';
import 'unhead/plugins';
import 'unhead/utils';
import 'vue-bundle-renderer/runtime';

function parse(str, options) {
  if (typeof str !== "string") {
    throw new TypeError("argument str must be a string");
  }
  const obj = {};
  const opt = options || {};
  const dec = opt.decode || decode;
  let index = 0;
  while (index < str.length) {
    const eqIdx = str.indexOf("=", index);
    if (eqIdx === -1) {
      break;
    }
    let endIdx = str.indexOf(";", index);
    if (endIdx === -1) {
      endIdx = str.length;
    } else if (endIdx < eqIdx) {
      index = str.lastIndexOf(";", eqIdx - 1) + 1;
      continue;
    }
    const key = str.slice(index, eqIdx).trim();
    if (opt?.filter && !opt?.filter(key)) {
      index = endIdx + 1;
      continue;
    }
    if (void 0 === obj[key]) {
      let val = str.slice(eqIdx + 1, endIdx).trim();
      if (val.codePointAt(0) === 34) {
        val = val.slice(1, -1);
      }
      obj[key] = tryDecode(val, dec);
    }
    index = endIdx + 1;
  }
  return obj;
}
function decode(str) {
  return str.includes("%") ? decodeURIComponent(str) : str;
}
function tryDecode(str, decode2) {
  try {
    return decode2(str);
  } catch {
    return str;
  }
}

function serialize(o){return typeof o=="string"?`'${o}'`:new c().serialize(o)}const c=/*@__PURE__*/function(){class o{#t=new Map;compare(t,r){const e=typeof t,n=typeof r;return e==="string"&&n==="string"?t.localeCompare(r):e==="number"&&n==="number"?t-r:String.prototype.localeCompare.call(this.serialize(t,true),this.serialize(r,true))}serialize(t,r){if(t===null)return "null";switch(typeof t){case "string":return r?t:`'${t}'`;case "bigint":return `${t}n`;case "object":return this.$object(t);case "function":return this.$function(t)}return String(t)}serializeObject(t){const r=Object.prototype.toString.call(t);if(r!=="[object Object]")return this.serializeBuiltInType(r.length<10?`unknown:${r}`:r.slice(8,-1),t);const e=t.constructor,n=e===Object||e===void 0?"":e.name;if(n!==""&&globalThis[n]===e)return this.serializeBuiltInType(n,t);if(typeof t.toJSON=="function"){const i=t.toJSON();return n+(i!==null&&typeof i=="object"?this.$object(i):`(${this.serialize(i)})`)}return this.serializeObjectEntries(n,Object.entries(t))}serializeBuiltInType(t,r){const e=this["$"+t];if(e)return e.call(this,r);if(typeof r?.entries=="function")return this.serializeObjectEntries(t,r.entries());throw new Error(`Cannot serialize ${t}`)}serializeObjectEntries(t,r){const e=Array.from(r).sort((i,a)=>this.compare(i[0],a[0]));let n=`${t}{`;for(let i=0;i<e.length;i++){const[a,l]=e[i];n+=`${this.serialize(a,true)}:${this.serialize(l)}`,i<e.length-1&&(n+=",");}return n+"}"}$object(t){let r=this.#t.get(t);return r===void 0&&(this.#t.set(t,`#${this.#t.size}`),r=this.serializeObject(t),this.#t.set(t,r)),r}$function(t){const r=Function.prototype.toString.call(t);return r.slice(-15)==="[native code] }"?`${t.name||""}()[native]`:`${t.name}(${t.length})${r.replace(/\s*\n\s*/g,"")}`}$Array(t){let r="[";for(let e=0;e<t.length;e++)r+=this.serialize(t[e]),e<t.length-1&&(r+=",");return r+"]"}$Date(t){try{return `Date(${t.toISOString()})`}catch{return "Date(null)"}}$ArrayBuffer(t){return `ArrayBuffer[${new Uint8Array(t).join(",")}]`}$Set(t){return `Set${this.$Array(Array.from(t).sort((r,e)=>this.compare(r,e)))}`}$Map(t){return this.serializeObjectEntries("Map",t.entries())}}for(const s of ["Error","RegExp","URL"])o.prototype["$"+s]=function(t){return `${s}(${t})`};for(const s of ["Int8Array","Uint8Array","Uint8ClampedArray","Int16Array","Uint16Array","Int32Array","Uint32Array","Float32Array","Float64Array"])o.prototype["$"+s]=function(t){return `${s}[${t.join(",")}]`};for(const s of ["BigInt64Array","BigUint64Array"])o.prototype["$"+s]=function(t){return `${s}[${t.join("n,")}${t.length>0?"n":""}]`};return o}();

function isEqual(object1, object2) {
  if (object1 === object2) {
    return true;
  }
  if (serialize(object1) === serialize(object2)) {
    return true;
  }
  return false;
}

if (!globalThis.$fetch) {
  globalThis.$fetch = $fetch.create({
    baseURL: baseURL()
  });
}
const appLayoutTransition = false;
const nuxtLinkDefaults = { "componentName": "NuxtLink" };
const asyncDataDefaults = { "value": null, "errorValue": null, "deep": true };
const appId = "nuxt-app";
function getNuxtAppCtx(id = appId) {
  return getContext(id, {
    asyncContext: false
  });
}
const NuxtPluginIndicator = "__nuxt_plugin";
function createNuxtApp(options) {
  var _a;
  let hydratingCount = 0;
  const nuxtApp = {
    _id: options.id || appId || "nuxt-app",
    _scope: effectScope(),
    provide: void 0,
    globalName: "nuxt",
    versions: {
      get nuxt() {
        return "3.17.3";
      },
      get vue() {
        return nuxtApp.vueApp.version;
      }
    },
    payload: shallowReactive({
      ...((_a = options.ssrContext) == null ? void 0 : _a.payload) || {},
      data: shallowReactive({}),
      state: reactive({}),
      once: /* @__PURE__ */ new Set(),
      _errors: shallowReactive({})
    }),
    static: {
      data: {}
    },
    runWithContext(fn) {
      if (nuxtApp._scope.active && !getCurrentScope()) {
        return nuxtApp._scope.run(() => callWithNuxt(nuxtApp, fn));
      }
      return callWithNuxt(nuxtApp, fn);
    },
    isHydrating: false,
    deferHydration() {
      if (!nuxtApp.isHydrating) {
        return () => {
        };
      }
      hydratingCount++;
      let called = false;
      return () => {
        if (called) {
          return;
        }
        called = true;
        hydratingCount--;
        if (hydratingCount === 0) {
          nuxtApp.isHydrating = false;
          return nuxtApp.callHook("app:suspense:resolve");
        }
      };
    },
    _asyncDataPromises: {},
    _asyncData: shallowReactive({}),
    _payloadRevivers: {},
    ...options
  };
  {
    nuxtApp.payload.serverRendered = true;
  }
  if (nuxtApp.ssrContext) {
    nuxtApp.payload.path = nuxtApp.ssrContext.url;
    nuxtApp.ssrContext.nuxt = nuxtApp;
    nuxtApp.ssrContext.payload = nuxtApp.payload;
    nuxtApp.ssrContext.config = {
      public: nuxtApp.ssrContext.runtimeConfig.public,
      app: nuxtApp.ssrContext.runtimeConfig.app
    };
  }
  nuxtApp.hooks = createHooks();
  nuxtApp.hook = nuxtApp.hooks.hook;
  {
    const contextCaller = async function(hooks, args) {
      for (const hook of hooks) {
        await nuxtApp.runWithContext(() => hook(...args));
      }
    };
    nuxtApp.hooks.callHook = (name, ...args) => nuxtApp.hooks.callHookWith(contextCaller, name, ...args);
  }
  nuxtApp.callHook = nuxtApp.hooks.callHook;
  nuxtApp.provide = (name, value) => {
    const $name = "$" + name;
    defineGetter(nuxtApp, $name, value);
    defineGetter(nuxtApp.vueApp.config.globalProperties, $name, value);
  };
  defineGetter(nuxtApp.vueApp, "$nuxt", nuxtApp);
  defineGetter(nuxtApp.vueApp.config.globalProperties, "$nuxt", nuxtApp);
  const runtimeConfig = options.ssrContext.runtimeConfig;
  nuxtApp.provide("config", runtimeConfig);
  return nuxtApp;
}
function registerPluginHooks(nuxtApp, plugin2) {
  if (plugin2.hooks) {
    nuxtApp.hooks.addHooks(plugin2.hooks);
  }
}
async function applyPlugin(nuxtApp, plugin2) {
  if (typeof plugin2 === "function") {
    const { provide: provide2 } = await nuxtApp.runWithContext(() => plugin2(nuxtApp)) || {};
    if (provide2 && typeof provide2 === "object") {
      for (const key in provide2) {
        nuxtApp.provide(key, provide2[key]);
      }
    }
  }
}
async function applyPlugins(nuxtApp, plugins2) {
  var _a, _b, _c, _d;
  const resolvedPlugins = [];
  const unresolvedPlugins = [];
  const parallels = [];
  const errors = [];
  let promiseDepth = 0;
  async function executePlugin(plugin2) {
    var _a2;
    const unresolvedPluginsForThisPlugin = ((_a2 = plugin2.dependsOn) == null ? void 0 : _a2.filter((name) => plugins2.some((p) => p._name === name) && !resolvedPlugins.includes(name))) ?? [];
    if (unresolvedPluginsForThisPlugin.length > 0) {
      unresolvedPlugins.push([new Set(unresolvedPluginsForThisPlugin), plugin2]);
    } else {
      const promise = applyPlugin(nuxtApp, plugin2).then(async () => {
        if (plugin2._name) {
          resolvedPlugins.push(plugin2._name);
          await Promise.all(unresolvedPlugins.map(async ([dependsOn, unexecutedPlugin]) => {
            if (dependsOn.has(plugin2._name)) {
              dependsOn.delete(plugin2._name);
              if (dependsOn.size === 0) {
                promiseDepth++;
                await executePlugin(unexecutedPlugin);
              }
            }
          }));
        }
      });
      if (plugin2.parallel) {
        parallels.push(promise.catch((e) => errors.push(e)));
      } else {
        await promise;
      }
    }
  }
  for (const plugin2 of plugins2) {
    if (((_a = nuxtApp.ssrContext) == null ? void 0 : _a.islandContext) && ((_b = plugin2.env) == null ? void 0 : _b.islands) === false) {
      continue;
    }
    registerPluginHooks(nuxtApp, plugin2);
  }
  for (const plugin2 of plugins2) {
    if (((_c = nuxtApp.ssrContext) == null ? void 0 : _c.islandContext) && ((_d = plugin2.env) == null ? void 0 : _d.islands) === false) {
      continue;
    }
    await executePlugin(plugin2);
  }
  await Promise.all(parallels);
  if (promiseDepth) {
    for (let i = 0; i < promiseDepth; i++) {
      await Promise.all(parallels);
    }
  }
  if (errors.length) {
    throw errors[0];
  }
}
// @__NO_SIDE_EFFECTS__
function defineNuxtPlugin(plugin2) {
  if (typeof plugin2 === "function") {
    return plugin2;
  }
  const _name = plugin2._name || plugin2.name;
  delete plugin2.name;
  return Object.assign(plugin2.setup || (() => {
  }), plugin2, { [NuxtPluginIndicator]: true, _name });
}
function callWithNuxt(nuxt, setup2, args) {
  const fn = () => setup2();
  const nuxtAppCtx = getNuxtAppCtx(nuxt._id);
  {
    return nuxt.vueApp.runWithContext(() => nuxtAppCtx.callAsync(nuxt, fn));
  }
}
function tryUseNuxtApp(id) {
  var _a;
  let nuxtAppInstance;
  if (hasInjectionContext()) {
    nuxtAppInstance = (_a = getCurrentInstance()) == null ? void 0 : _a.appContext.app.$nuxt;
  }
  nuxtAppInstance || (nuxtAppInstance = getNuxtAppCtx(id).tryUse());
  return nuxtAppInstance || null;
}
function useNuxtApp(id) {
  const nuxtAppInstance = tryUseNuxtApp(id);
  if (!nuxtAppInstance) {
    {
      throw new Error("[nuxt] instance unavailable");
    }
  }
  return nuxtAppInstance;
}
// @__NO_SIDE_EFFECTS__
function useRuntimeConfig(_event2) {
  return useNuxtApp().$config;
}
function defineGetter(obj, key, val) {
  Object.defineProperty(obj, key, { get: () => val });
}
const LayoutMetaSymbol = Symbol("layout-meta");
const PageRouteSymbol = Symbol("route");
const useRouter = () => {
  var _a;
  return (_a = useNuxtApp()) == null ? void 0 : _a.$router;
};
const useRoute = () => {
  if (hasInjectionContext()) {
    return inject(PageRouteSymbol, useNuxtApp()._route);
  }
  return useNuxtApp()._route;
};
// @__NO_SIDE_EFFECTS__
function defineNuxtRouteMiddleware(middleware) {
  return middleware;
}
const isProcessingMiddleware = () => {
  try {
    if (useNuxtApp()._processingMiddleware) {
      return true;
    }
  } catch {
    return false;
  }
  return false;
};
const URL_QUOTE_RE = /"/g;
const navigateTo = (to, options) => {
  to || (to = "/");
  const toPath = typeof to === "string" ? to : "path" in to ? resolveRouteObject(to) : useRouter().resolve(to).href;
  const isExternalHost = hasProtocol(toPath, { acceptRelative: true });
  const isExternal = (options == null ? void 0 : options.external) || isExternalHost;
  if (isExternal) {
    if (!(options == null ? void 0 : options.external)) {
      throw new Error("Navigating to an external URL is not allowed by default. Use `navigateTo(url, { external: true })`.");
    }
    const { protocol } = new URL(toPath, "http://localhost");
    if (protocol && isScriptProtocol(protocol)) {
      throw new Error(`Cannot navigate to a URL with '${protocol}' protocol.`);
    }
  }
  const inMiddleware = isProcessingMiddleware();
  const router = useRouter();
  const nuxtApp = useNuxtApp();
  {
    if (nuxtApp.ssrContext) {
      const fullPath = typeof to === "string" || isExternal ? toPath : router.resolve(to).fullPath || "/";
      const location2 = isExternal ? toPath : joinURL((/* @__PURE__ */ useRuntimeConfig()).app.baseURL, fullPath);
      const redirect = async function(response) {
        await nuxtApp.callHook("app:redirected");
        const encodedLoc = location2.replace(URL_QUOTE_RE, "%22");
        const encodedHeader = encodeURL(location2, isExternalHost);
        nuxtApp.ssrContext._renderResponse = {
          statusCode: sanitizeStatusCode((options == null ? void 0 : options.redirectCode) || 302, 302),
          body: `<!DOCTYPE html><html><head><meta http-equiv="refresh" content="0; url=${encodedLoc}"></head></html>`,
          headers: { location: encodedHeader }
        };
        return response;
      };
      if (!isExternal && inMiddleware) {
        router.afterEach((final) => final.fullPath === fullPath ? redirect(false) : void 0);
        return to;
      }
      return redirect(!inMiddleware ? void 0 : (
        /* abort route navigation */
        false
      ));
    }
  }
  if (isExternal) {
    nuxtApp._scope.stop();
    if (options == null ? void 0 : options.replace) {
      (void 0).replace(toPath);
    } else {
      (void 0).href = toPath;
    }
    if (inMiddleware) {
      if (!nuxtApp.isHydrating) {
        return false;
      }
      return new Promise(() => {
      });
    }
    return Promise.resolve();
  }
  return (options == null ? void 0 : options.replace) ? router.replace(to) : router.push(to);
};
function resolveRouteObject(to) {
  return withQuery(to.path || "", to.query || {}) + (to.hash || "");
}
function encodeURL(location2, isExternalHost = false) {
  const url = new URL(location2, "http://localhost");
  if (!isExternalHost) {
    return url.pathname + url.search + url.hash;
  }
  if (location2.startsWith("//")) {
    return url.toString().replace(url.protocol, "");
  }
  return url.toString();
}
const NUXT_ERROR_SIGNATURE = "__nuxt_error";
const useError = () => toRef(useNuxtApp().payload, "error");
const showError = (error) => {
  const nuxtError = createError(error);
  try {
    const nuxtApp = useNuxtApp();
    const error2 = useError();
    if (false) ;
    error2.value || (error2.value = nuxtError);
  } catch {
    throw nuxtError;
  }
  return nuxtError;
};
const isNuxtError = (error) => !!error && typeof error === "object" && NUXT_ERROR_SIGNATURE in error;
const createError = (error) => {
  const nuxtError = createError$1(error);
  Object.defineProperty(nuxtError, NUXT_ERROR_SIGNATURE, {
    value: true,
    configurable: false,
    writable: false
  });
  return nuxtError;
};
const unhead_k2P3m_ZDyjlr2mMYnoDPwavjsDN8hBlk9cFai0bbopU = /* @__PURE__ */ defineNuxtPlugin({
  name: "nuxt:head",
  enforce: "pre",
  setup(nuxtApp) {
    const head = nuxtApp.ssrContext.head;
    nuxtApp.vueApp.use(head);
  }
});
function toArray(value) {
  return Array.isArray(value) ? value : [value];
}
async function getRouteRules(arg) {
  const path = typeof arg === "string" ? arg : arg.path;
  {
    useNuxtApp().ssrContext._preloadManifest = true;
    const _routeRulesMatcher = toRouteMatcher(
      createRouter$1({ routes: (/* @__PURE__ */ useRuntimeConfig()).nitro.routeRules })
    );
    return defu({}, ..._routeRulesMatcher.matchAll(path).reverse());
  }
}
const __nuxt_page_meta = {
  layout: "backoffice"
};
const _routes = [
  {
    name: "index",
    path: "/",
    component: () => import('./index-Dy5rps2-.mjs')
  },
  {
    name: "kontakt",
    path: "/kontakt",
    component: () => import('./kontakt-D4cpumll.mjs')
  },
  {
    name: "backoffice",
    path: "/backoffice",
    meta: __nuxt_page_meta || {},
    component: () => import('./backoffice-6OxQocvU.mjs')
  },
  {
    name: "portal",
    path: "/portal",
    component: () => import('./index-DvKE1aMf.mjs')
  },
  {
    name: "reklamiranje",
    path: "/reklamiranje",
    component: () => import('./reklamiranje-D0UOhzhm.mjs')
  },
  {
    name: "poslovi",
    path: "/poslovi",
    component: () => import('./index-Dj2SJDhg.mjs')
  },
  {
    name: "pretrazivanje",
    path: "/pretrazivanje",
    component: () => import('./pretrazivanje-qGTaOAoT.mjs')
  },
  {
    name: "webshop",
    path: "/webshop",
    component: () => import('./index-T9ls54Vx.mjs')
  },
  {
    name: "poslovi-jobId",
    path: "/poslovi/:jobId()",
    component: () => import('./_jobId_-DQWZFejh.mjs')
  },
  {
    name: "webshop-productId",
    path: "/webshop/:productId()",
    component: () => import('./index-DMG3KwH_.mjs')
  },
  {
    name: "portal-categoryName",
    path: "/portal/:categoryName()",
    component: () => import('./index-BsigiE7d.mjs')
  },
  {
    name: "portal-categoryName-newsId",
    path: "/portal/:categoryName()/:newsId()",
    component: () => import('./_newsId_-BnzjgV3e.mjs')
  },
  {
    name: "webshop-productId-narudzba",
    path: "/webshop/:productId()/narudzba",
    component: () => import('./index-jATg8l0A.mjs')
  },
  {
    name: "webshop-productId-narudzba-orderId",
    path: "/webshop/:productId()/narudzba/:orderId()",
    component: () => import('./_orderId_-CROOG4ao.mjs')
  }
];
const _wrapInTransition = (props, children) => {
  return { default: () => {
    var _a;
    return (_a = children.default) == null ? void 0 : _a.call(children);
  } };
};
const ROUTE_KEY_PARENTHESES_RE = /(:\w+)\([^)]+\)/g;
const ROUTE_KEY_SYMBOLS_RE = /(:\w+)[?+*]/g;
const ROUTE_KEY_NORMAL_RE = /:\w+/g;
function generateRouteKey(route) {
  const source = (route == null ? void 0 : route.meta.key) ?? route.path.replace(ROUTE_KEY_PARENTHESES_RE, "$1").replace(ROUTE_KEY_SYMBOLS_RE, "$1").replace(ROUTE_KEY_NORMAL_RE, (r) => {
    var _a;
    return ((_a = route.params[r.slice(1)]) == null ? void 0 : _a.toString()) || "";
  });
  return typeof source === "function" ? source(route) : source;
}
function isChangingPage(to, from) {
  if (to === from || from === START_LOCATION) {
    return false;
  }
  if (generateRouteKey(to) !== generateRouteKey(from)) {
    return true;
  }
  const areComponentsSame = to.matched.every(
    (comp, index) => {
      var _a, _b;
      return comp.components && comp.components.default === ((_b = (_a = from.matched[index]) == null ? void 0 : _a.components) == null ? void 0 : _b.default);
    }
  );
  if (areComponentsSame) {
    return false;
  }
  return true;
}
const routerOptions0 = {
  scrollBehavior(to, from, savedPosition) {
    var _a;
    const nuxtApp = useNuxtApp();
    const behavior = ((_a = useRouter().options) == null ? void 0 : _a.scrollBehaviorType) ?? "auto";
    if (to.path === from.path) {
      if (from.hash && !to.hash) {
        return { left: 0, top: 0 };
      }
      if (to.hash) {
        return { el: to.hash, top: _getHashElementScrollMarginTop(to.hash), behavior };
      }
      return false;
    }
    const routeAllowsScrollToTop = typeof to.meta.scrollToTop === "function" ? to.meta.scrollToTop(to, from) : to.meta.scrollToTop;
    if (routeAllowsScrollToTop === false) {
      return false;
    }
    let position = savedPosition || void 0;
    if (!position && isChangingPage(to, from)) {
      position = { left: 0, top: 0 };
    }
    const hookToWait = nuxtApp._runningTransition ? "page:transition:finish" : "page:loading:end";
    return new Promise((resolve2) => {
      if (from === START_LOCATION) {
        resolve2(_calculatePosition(to, "instant", position));
        return;
      }
      nuxtApp.hooks.hookOnce(hookToWait, () => {
        requestAnimationFrame(() => resolve2(_calculatePosition(to, "instant", position)));
      });
    });
  }
};
function _getHashElementScrollMarginTop(selector) {
  try {
    const elem = (void 0).querySelector(selector);
    if (elem) {
      return (Number.parseFloat(getComputedStyle(elem).scrollMarginTop) || 0) + (Number.parseFloat(getComputedStyle((void 0).documentElement).scrollPaddingTop) || 0);
    }
  } catch {
  }
  return 0;
}
function _calculatePosition(to, scrollBehaviorType, position) {
  if (position) {
    return position;
  }
  if (to.hash) {
    return {
      el: to.hash,
      top: _getHashElementScrollMarginTop(to.hash),
      behavior: scrollBehaviorType
    };
  }
  return { left: 0, top: 0, behavior: scrollBehaviorType };
}
const configRouterOptions = {
  hashMode: false,
  scrollBehaviorType: "auto"
};
const routerOptions = {
  ...configRouterOptions,
  ...routerOptions0
};
const validate = /* @__PURE__ */ defineNuxtRouteMiddleware(async (to, from) => {
  var _a;
  let __temp, __restore;
  if (!((_a = to.meta) == null ? void 0 : _a.validate)) {
    return;
  }
  const result = ([__temp, __restore] = executeAsync(() => Promise.resolve(to.meta.validate(to))), __temp = await __temp, __restore(), __temp);
  if (result === true) {
    return;
  }
  const error = createError({
    fatal: false,
    statusCode: result && result.statusCode || 404,
    statusMessage: result && result.statusMessage || `Page Not Found: ${to.fullPath}`,
    data: {
      path: to.fullPath
    }
  });
  return error;
});
function injectHead(nuxtApp) {
  var _a;
  const nuxt = nuxtApp || tryUseNuxtApp();
  return ((_a = nuxt == null ? void 0 : nuxt.ssrContext) == null ? void 0 : _a.head) || (nuxt == null ? void 0 : nuxt.runWithContext(() => {
    if (hasInjectionContext()) {
      return inject(headSymbol);
    }
  }));
}
function useHead(input, options = {}) {
  const head = injectHead(options.nuxt);
  if (head) {
    return useHead$1(input, { head, ...options });
  }
}
function useSeoMeta(input, options = {}) {
  const head = injectHead(options.nuxt);
  if (head) {
    return useSeoMeta$1(input, { head, ...options });
  }
}
defineComponent({
  name: "ServerPlaceholder",
  render() {
    return createElementBlock("div");
  }
});
const clientOnlySymbol = Symbol.for("nuxt:client-only");
const __nuxt_component_0 = defineComponent({
  name: "ClientOnly",
  inheritAttrs: false,
  props: ["fallback", "placeholder", "placeholderTag", "fallbackTag"],
  setup(_, { slots, attrs }) {
    const mounted = ref(false);
    const vm = getCurrentInstance();
    if (vm) {
      vm._nuxtClientOnly = true;
    }
    provide(clientOnlySymbol, true);
    return (props) => {
      var _a;
      if (mounted.value) {
        return (_a = slots.default) == null ? void 0 : _a.call(slots);
      }
      const slot = slots.fallback || slots.placeholder;
      if (slot) {
        return slot();
      }
      const fallbackStr = props.fallback || props.placeholder || "";
      const fallbackTag = props.fallbackTag || props.placeholderTag || "span";
      return createElementBlock(fallbackTag, attrs, fallbackStr);
    };
  }
});
const useStateKeyPrefix = "$s";
function useState(...args) {
  const autoKey = typeof args[args.length - 1] === "string" ? args.pop() : void 0;
  if (typeof args[0] !== "string") {
    args.unshift(autoKey);
  }
  const [_key, init] = args;
  if (!_key || typeof _key !== "string") {
    throw new TypeError("[nuxt] [useState] key must be a string: " + _key);
  }
  if (init !== void 0 && typeof init !== "function") {
    throw new Error("[nuxt] [useState] init must be a function: " + init);
  }
  const key = useStateKeyPrefix + _key;
  const nuxtApp = useNuxtApp();
  const state = toRef(nuxtApp.payload.state, key);
  if (state.value === void 0 && init) {
    const initialValue = init();
    if (isRef(initialValue)) {
      nuxtApp.payload.state[key] = initialValue;
      return initialValue;
    }
    state.value = initialValue;
  }
  return state;
}
function useRequestEvent(nuxtApp) {
  var _a;
  nuxtApp || (nuxtApp = useNuxtApp());
  return (_a = nuxtApp.ssrContext) == null ? void 0 : _a.event;
}
const CookieDefaults = {
  path: "/",
  watch: true,
  decode: (val) => destr(decodeURIComponent(val)),
  encode: (val) => encodeURIComponent(typeof val === "string" ? val : JSON.stringify(val))
};
function useCookie(name, _opts) {
  var _a;
  const opts = { ...CookieDefaults, ..._opts };
  opts.filter ?? (opts.filter = (key) => key === name);
  const cookies = readRawCookies(opts) || {};
  let delay;
  if (opts.maxAge !== void 0) {
    delay = opts.maxAge * 1e3;
  } else if (opts.expires) {
    delay = opts.expires.getTime() - Date.now();
  }
  const hasExpired = delay !== void 0 && delay <= 0;
  const cookieValue = klona(hasExpired ? void 0 : cookies[name] ?? ((_a = opts.default) == null ? void 0 : _a.call(opts)));
  const cookie = ref(cookieValue);
  {
    const nuxtApp = useNuxtApp();
    const writeFinalCookieValue = () => {
      if (opts.readonly || isEqual(cookie.value, cookies[name])) {
        return;
      }
      nuxtApp._cookies || (nuxtApp._cookies = {});
      if (name in nuxtApp._cookies) {
        if (isEqual(cookie.value, nuxtApp._cookies[name])) {
          return;
        }
      }
      nuxtApp._cookies[name] = cookie.value;
      writeServerCookie(useRequestEvent(nuxtApp), name, cookie.value, opts);
    };
    const unhook = nuxtApp.hooks.hookOnce("app:rendered", writeFinalCookieValue);
    nuxtApp.hooks.hookOnce("app:error", () => {
      unhook();
      return writeFinalCookieValue();
    });
  }
  return cookie;
}
function readRawCookies(opts = {}) {
  {
    return parse(getRequestHeader(useRequestEvent(), "cookie") || "", opts);
  }
}
function writeServerCookie(event, name, value, opts = {}) {
  if (event) {
    if (value !== null && value !== void 0) {
      return setCookie(event, name, value, opts);
    }
    if (getCookie(event, name) !== void 0) {
      return deleteCookie(event, name, opts);
    }
  }
}
function definePayloadReducer(name, reduce) {
  {
    useNuxtApp().ssrContext._payloadReducers[name] = reduce;
  }
}
const firstNonUndefined = (...args) => args.find((arg) => arg !== void 0);
// @__NO_SIDE_EFFECTS__
function defineNuxtLink(options) {
  const componentName = options.componentName || "NuxtLink";
  function isHashLinkWithoutHashMode(link) {
    return typeof link === "string" && link.startsWith("#");
  }
  function resolveTrailingSlashBehavior(to, resolve2, trailingSlash) {
    const effectiveTrailingSlash = trailingSlash ?? options.trailingSlash;
    if (!to || effectiveTrailingSlash !== "append" && effectiveTrailingSlash !== "remove") {
      return to;
    }
    if (typeof to === "string") {
      return applyTrailingSlashBehavior(to, effectiveTrailingSlash);
    }
    const path = "path" in to && to.path !== void 0 ? to.path : resolve2(to).path;
    const resolvedPath = {
      ...to,
      name: void 0,
      // named routes would otherwise always override trailing slash behavior
      path: applyTrailingSlashBehavior(path, effectiveTrailingSlash)
    };
    return resolvedPath;
  }
  function useNuxtLink(props) {
    const router = useRouter();
    const config = /* @__PURE__ */ useRuntimeConfig();
    const hasTarget = computed(() => !!props.target && props.target !== "_self");
    const isAbsoluteUrl = computed(() => {
      const path = props.to || props.href || "";
      return typeof path === "string" && hasProtocol(path, { acceptRelative: true });
    });
    const builtinRouterLink = resolveComponent("RouterLink");
    const useBuiltinLink = builtinRouterLink && typeof builtinRouterLink !== "string" ? builtinRouterLink.useLink : void 0;
    const isExternal = computed(() => {
      if (props.external) {
        return true;
      }
      const path = props.to || props.href || "";
      if (typeof path === "object") {
        return false;
      }
      return path === "" || isAbsoluteUrl.value;
    });
    const to = computed(() => {
      const path = props.to || props.href || "";
      if (isExternal.value) {
        return path;
      }
      return resolveTrailingSlashBehavior(path, router.resolve, props.trailingSlash);
    });
    const link = isExternal.value ? void 0 : useBuiltinLink == null ? void 0 : useBuiltinLink({ ...props, to });
    const href = computed(() => {
      var _a;
      const effectiveTrailingSlash = props.trailingSlash ?? options.trailingSlash;
      if (!to.value || isAbsoluteUrl.value || isHashLinkWithoutHashMode(to.value)) {
        return to.value;
      }
      if (isExternal.value) {
        const path = typeof to.value === "object" && "path" in to.value ? resolveRouteObject(to.value) : to.value;
        const href2 = typeof path === "object" ? router.resolve(path).href : path;
        return applyTrailingSlashBehavior(href2, effectiveTrailingSlash);
      }
      if (typeof to.value === "object") {
        return ((_a = router.resolve(to.value)) == null ? void 0 : _a.href) ?? null;
      }
      return applyTrailingSlashBehavior(joinURL(config.app.baseURL, to.value), effectiveTrailingSlash);
    });
    return {
      to,
      hasTarget,
      isAbsoluteUrl,
      isExternal,
      //
      href,
      isActive: (link == null ? void 0 : link.isActive) ?? computed(() => to.value === router.currentRoute.value.path),
      isExactActive: (link == null ? void 0 : link.isExactActive) ?? computed(() => to.value === router.currentRoute.value.path),
      route: (link == null ? void 0 : link.route) ?? computed(() => router.resolve(to.value)),
      async navigate(_e) {
        await navigateTo(href.value, { replace: props.replace, external: isExternal.value || hasTarget.value });
      }
    };
  }
  return defineComponent({
    name: componentName,
    props: {
      // Routing
      to: {
        type: [String, Object],
        default: void 0,
        required: false
      },
      href: {
        type: [String, Object],
        default: void 0,
        required: false
      },
      // Attributes
      target: {
        type: String,
        default: void 0,
        required: false
      },
      rel: {
        type: String,
        default: void 0,
        required: false
      },
      noRel: {
        type: Boolean,
        default: void 0,
        required: false
      },
      // Prefetching
      prefetch: {
        type: Boolean,
        default: void 0,
        required: false
      },
      prefetchOn: {
        type: [String, Object],
        default: void 0,
        required: false
      },
      noPrefetch: {
        type: Boolean,
        default: void 0,
        required: false
      },
      // Styling
      activeClass: {
        type: String,
        default: void 0,
        required: false
      },
      exactActiveClass: {
        type: String,
        default: void 0,
        required: false
      },
      prefetchedClass: {
        type: String,
        default: void 0,
        required: false
      },
      // Vue Router's `<RouterLink>` additional props
      replace: {
        type: Boolean,
        default: void 0,
        required: false
      },
      ariaCurrentValue: {
        type: String,
        default: void 0,
        required: false
      },
      // Edge cases handling
      external: {
        type: Boolean,
        default: void 0,
        required: false
      },
      // Slot API
      custom: {
        type: Boolean,
        default: void 0,
        required: false
      },
      // Behavior
      trailingSlash: {
        type: String,
        default: void 0,
        required: false
      }
    },
    useLink: useNuxtLink,
    setup(props, { slots }) {
      useRouter();
      const { to, href, navigate, isExternal, hasTarget, isAbsoluteUrl } = useNuxtLink(props);
      ref(false);
      const el = void 0;
      const elRef = void 0;
      async function prefetch(nuxtApp = useNuxtApp()) {
        {
          return;
        }
      }
      return () => {
        var _a;
        if (!isExternal.value && !hasTarget.value && !isHashLinkWithoutHashMode(to.value)) {
          const routerLinkProps = {
            ref: elRef,
            to: to.value,
            activeClass: props.activeClass || options.activeClass,
            exactActiveClass: props.exactActiveClass || options.exactActiveClass,
            replace: props.replace,
            ariaCurrentValue: props.ariaCurrentValue,
            custom: props.custom
          };
          if (!props.custom) {
            routerLinkProps.rel = props.rel || void 0;
          }
          return h(
            resolveComponent("RouterLink"),
            routerLinkProps,
            slots.default
          );
        }
        const target = props.target || null;
        const rel = firstNonUndefined(
          // converts `""` to `null` to prevent the attribute from being added as empty (`rel=""`)
          props.noRel ? "" : props.rel,
          options.externalRelAttribute,
          /*
          * A fallback rel of `noopener noreferrer` is applied for external links or links that open in a new tab.
          * This solves a reverse tabnapping security flaw in browsers pre-2021 as well as improving privacy.
          */
          isAbsoluteUrl.value || hasTarget.value ? "noopener noreferrer" : ""
        ) || null;
        if (props.custom) {
          if (!slots.default) {
            return null;
          }
          return slots.default({
            href: href.value,
            navigate,
            prefetch,
            get route() {
              if (!href.value) {
                return void 0;
              }
              const url = new URL(href.value, "http://localhost");
              return {
                path: url.pathname,
                fullPath: url.pathname,
                get query() {
                  return parseQuery(url.search);
                },
                hash: url.hash,
                params: {},
                name: void 0,
                matched: [],
                redirectedFrom: void 0,
                meta: {},
                href: href.value
              };
            },
            rel,
            target,
            isExternal: isExternal.value || hasTarget.value,
            isActive: false,
            isExactActive: false
          });
        }
        return h("a", { ref: el, href: href.value || null, rel, target }, (_a = slots.default) == null ? void 0 : _a.call(slots));
      };
    }
    // }) as unknown as DefineComponent<NuxtLinkProps, object, object, ComputedOptions, MethodOptions, object, object, EmitsOptions, string, object, NuxtLinkProps, object, SlotsType<NuxtLinkSlots>>
  });
}
const __nuxt_component_6 = /* @__PURE__ */ defineNuxtLink(nuxtLinkDefaults);
function applyTrailingSlashBehavior(to, trailingSlash) {
  const normalizeFn = trailingSlash === "append" ? withTrailingSlash : withoutTrailingSlash;
  const hasProtocolDifferentFromHttp = hasProtocol(to) && !to.startsWith("http");
  if (hasProtocolDifferentFromHttp) {
    return to;
  }
  return normalizeFn(to, true);
}
/*!
 * pinia v2.3.1
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */
let activePinia;
const setActivePinia = (pinia) => activePinia = pinia;
const piniaSymbol = (
  /* istanbul ignore next */
  Symbol()
);
function isPlainObject(o) {
  return o && typeof o === "object" && Object.prototype.toString.call(o) === "[object Object]" && typeof o.toJSON !== "function";
}
var MutationType;
(function(MutationType2) {
  MutationType2["direct"] = "direct";
  MutationType2["patchObject"] = "patch object";
  MutationType2["patchFunction"] = "patch function";
})(MutationType || (MutationType = {}));
function createPinia() {
  const scope = effectScope(true);
  const state = scope.run(() => ref({}));
  let _p = [];
  let toBeInstalled = [];
  const pinia = markRaw({
    install(app) {
      setActivePinia(pinia);
      {
        pinia._a = app;
        app.provide(piniaSymbol, pinia);
        app.config.globalProperties.$pinia = pinia;
        toBeInstalled.forEach((plugin2) => _p.push(plugin2));
        toBeInstalled = [];
      }
    },
    use(plugin2) {
      if (!this._a && true) {
        toBeInstalled.push(plugin2);
      } else {
        _p.push(plugin2);
      }
      return this;
    },
    _p,
    // it's actually undefined here
    // @ts-expect-error
    _a: null,
    _e: scope,
    _s: /* @__PURE__ */ new Map(),
    state
  });
  return pinia;
}
const noop$2 = () => {
};
function addSubscription(subscriptions, callback, detached, onCleanup = noop$2) {
  subscriptions.push(callback);
  const removeSubscription = () => {
    const idx = subscriptions.indexOf(callback);
    if (idx > -1) {
      subscriptions.splice(idx, 1);
      onCleanup();
    }
  };
  if (!detached && getCurrentScope()) {
    onScopeDispose(removeSubscription);
  }
  return removeSubscription;
}
function triggerSubscriptions(subscriptions, ...args) {
  subscriptions.slice().forEach((callback) => {
    callback(...args);
  });
}
const fallbackRunWithContext = (fn) => fn();
const ACTION_MARKER = Symbol();
const ACTION_NAME = Symbol();
function mergeReactiveObjects(target, patchToApply) {
  if (target instanceof Map && patchToApply instanceof Map) {
    patchToApply.forEach((value, key) => target.set(key, value));
  } else if (target instanceof Set && patchToApply instanceof Set) {
    patchToApply.forEach(target.add, target);
  }
  for (const key in patchToApply) {
    if (!patchToApply.hasOwnProperty(key))
      continue;
    const subPatch = patchToApply[key];
    const targetValue = target[key];
    if (isPlainObject(targetValue) && isPlainObject(subPatch) && target.hasOwnProperty(key) && !isRef(subPatch) && !isReactive(subPatch)) {
      target[key] = mergeReactiveObjects(targetValue, subPatch);
    } else {
      target[key] = subPatch;
    }
  }
  return target;
}
const skipHydrateSymbol = (
  /* istanbul ignore next */
  Symbol()
);
function shouldHydrate(obj) {
  return !isPlainObject(obj) || !obj.hasOwnProperty(skipHydrateSymbol);
}
const { assign } = Object;
function isComputed(o) {
  return !!(isRef(o) && o.effect);
}
function createOptionsStore(id, options, pinia, hot) {
  const { state, actions, getters } = options;
  const initialState = pinia.state.value[id];
  let store;
  function setup2() {
    if (!initialState && (true)) {
      {
        pinia.state.value[id] = state ? state() : {};
      }
    }
    const localState = toRefs(pinia.state.value[id]);
    return assign(localState, actions, Object.keys(getters || {}).reduce((computedGetters, name) => {
      computedGetters[name] = markRaw(computed(() => {
        setActivePinia(pinia);
        const store2 = pinia._s.get(id);
        return getters[name].call(store2, store2);
      }));
      return computedGetters;
    }, {}));
  }
  store = createSetupStore(id, setup2, options, pinia, hot, true);
  return store;
}
function createSetupStore($id, setup2, options = {}, pinia, hot, isOptionsStore) {
  let scope;
  const optionsForPlugin = assign({ actions: {} }, options);
  const $subscribeOptions = { deep: true };
  let isListening;
  let isSyncListening;
  let subscriptions = [];
  let actionSubscriptions = [];
  let debuggerEvents;
  const initialState = pinia.state.value[$id];
  if (!isOptionsStore && !initialState && (true)) {
    {
      pinia.state.value[$id] = {};
    }
  }
  ref({});
  let activeListener;
  function $patch(partialStateOrMutator) {
    let subscriptionMutation;
    isListening = isSyncListening = false;
    if (typeof partialStateOrMutator === "function") {
      partialStateOrMutator(pinia.state.value[$id]);
      subscriptionMutation = {
        type: MutationType.patchFunction,
        storeId: $id,
        events: debuggerEvents
      };
    } else {
      mergeReactiveObjects(pinia.state.value[$id], partialStateOrMutator);
      subscriptionMutation = {
        type: MutationType.patchObject,
        payload: partialStateOrMutator,
        storeId: $id,
        events: debuggerEvents
      };
    }
    const myListenerId = activeListener = Symbol();
    nextTick().then(() => {
      if (activeListener === myListenerId) {
        isListening = true;
      }
    });
    isSyncListening = true;
    triggerSubscriptions(subscriptions, subscriptionMutation, pinia.state.value[$id]);
  }
  const $reset = isOptionsStore ? function $reset2() {
    const { state } = options;
    const newState = state ? state() : {};
    this.$patch(($state) => {
      assign($state, newState);
    });
  } : (
    /* istanbul ignore next */
    noop$2
  );
  function $dispose() {
    scope.stop();
    subscriptions = [];
    actionSubscriptions = [];
    pinia._s.delete($id);
  }
  const action = (fn, name = "") => {
    if (ACTION_MARKER in fn) {
      fn[ACTION_NAME] = name;
      return fn;
    }
    const wrappedAction = function() {
      setActivePinia(pinia);
      const args = Array.from(arguments);
      const afterCallbackList = [];
      const onErrorCallbackList = [];
      function after(callback) {
        afterCallbackList.push(callback);
      }
      function onError(callback) {
        onErrorCallbackList.push(callback);
      }
      triggerSubscriptions(actionSubscriptions, {
        args,
        name: wrappedAction[ACTION_NAME],
        store,
        after,
        onError
      });
      let ret;
      try {
        ret = fn.apply(this && this.$id === $id ? this : store, args);
      } catch (error) {
        triggerSubscriptions(onErrorCallbackList, error);
        throw error;
      }
      if (ret instanceof Promise) {
        return ret.then((value) => {
          triggerSubscriptions(afterCallbackList, value);
          return value;
        }).catch((error) => {
          triggerSubscriptions(onErrorCallbackList, error);
          return Promise.reject(error);
        });
      }
      triggerSubscriptions(afterCallbackList, ret);
      return ret;
    };
    wrappedAction[ACTION_MARKER] = true;
    wrappedAction[ACTION_NAME] = name;
    return wrappedAction;
  };
  const partialStore = {
    _p: pinia,
    // _s: scope,
    $id,
    $onAction: addSubscription.bind(null, actionSubscriptions),
    $patch,
    $reset,
    $subscribe(callback, options2 = {}) {
      const removeSubscription = addSubscription(subscriptions, callback, options2.detached, () => stopWatcher());
      const stopWatcher = scope.run(() => watch(() => pinia.state.value[$id], (state) => {
        if (options2.flush === "sync" ? isSyncListening : isListening) {
          callback({
            storeId: $id,
            type: MutationType.direct,
            events: debuggerEvents
          }, state);
        }
      }, assign({}, $subscribeOptions, options2)));
      return removeSubscription;
    },
    $dispose
  };
  const store = reactive(partialStore);
  pinia._s.set($id, store);
  const runWithContext = pinia._a && pinia._a.runWithContext || fallbackRunWithContext;
  const setupStore = runWithContext(() => pinia._e.run(() => (scope = effectScope()).run(() => setup2({ action }))));
  for (const key in setupStore) {
    const prop = setupStore[key];
    if (isRef(prop) && !isComputed(prop) || isReactive(prop)) {
      if (!isOptionsStore) {
        if (initialState && shouldHydrate(prop)) {
          if (isRef(prop)) {
            prop.value = initialState[key];
          } else {
            mergeReactiveObjects(prop, initialState[key]);
          }
        }
        {
          pinia.state.value[$id][key] = prop;
        }
      }
    } else if (typeof prop === "function") {
      const actionValue = action(prop, key);
      {
        setupStore[key] = actionValue;
      }
      optionsForPlugin.actions[key] = prop;
    } else ;
  }
  {
    assign(store, setupStore);
    assign(toRaw(store), setupStore);
  }
  Object.defineProperty(store, "$state", {
    get: () => pinia.state.value[$id],
    set: (state) => {
      $patch(($state) => {
        assign($state, state);
      });
    }
  });
  pinia._p.forEach((extender) => {
    {
      assign(store, scope.run(() => extender({
        store,
        app: pinia._a,
        pinia,
        options: optionsForPlugin
      })));
    }
  });
  if (initialState && isOptionsStore && options.hydrate) {
    options.hydrate(store.$state, initialState);
  }
  isListening = true;
  isSyncListening = true;
  return store;
}
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function defineStore(idOrOptions, setup2, setupOptions) {
  let id;
  let options;
  const isSetupStore = typeof setup2 === "function";
  if (typeof idOrOptions === "string") {
    id = idOrOptions;
    options = isSetupStore ? setupOptions : setup2;
  } else {
    options = idOrOptions;
    id = idOrOptions.id;
  }
  function useStore(pinia, hot) {
    const hasContext = hasInjectionContext();
    pinia = // in test mode, ignore the argument provided as we can always retrieve a
    // pinia instance with getActivePinia()
    (pinia) || (hasContext ? inject(piniaSymbol, null) : null);
    if (pinia)
      setActivePinia(pinia);
    pinia = activePinia;
    if (!pinia._s.has(id)) {
      if (isSetupStore) {
        createSetupStore(id, setup2, options, pinia);
      } else {
        createOptionsStore(id, options, pinia);
      }
    }
    const store = pinia._s.get(id);
    return store;
  }
  useStore.$id = id;
  return useStore;
}
function storeToRefs(store) {
  {
    const rawStore = toRaw(store);
    const refs = {};
    for (const key in rawStore) {
      const value = rawStore[key];
      if (value.effect) {
        refs[key] = // ...
        computed({
          get: () => store[key],
          set(value2) {
            store[key] = value2;
          }
        });
      } else if (isRef(value) || isReactive(value)) {
        refs[key] = // ---
        toRef(store, key);
      }
    }
    return refs;
  }
}
const useUserStore = /* @__PURE__ */ defineStore("user", {
  state: () => ({
    isAdminLogged: ref(false)
  }),
  actions: {
    logout() {
      this.isAdminLogged = false;
      const bearerCookie = useCookie("bearer_token");
      bearerCookie.value = null;
      const roleCookie = useCookie("role");
      roleCookie.value = null;
      const activitiesCookie = useCookie(" activities");
      activitiesCookie.value = null;
    }
  }
});
const refresh_45global = /* @__PURE__ */ defineNuxtRouteMiddleware(async (to, from) => {
  return;
});
const manifest_45route_45rule = /* @__PURE__ */ defineNuxtRouteMiddleware(async (to) => {
  {
    return;
  }
});
const globalMiddleware = [
  validate,
  refresh_45global,
  manifest_45route_45rule
];
const namedMiddleware = {};
const plugin$1 = /* @__PURE__ */ defineNuxtPlugin({
  name: "nuxt:router",
  enforce: "pre",
  async setup(nuxtApp) {
    var _a, _b, _c;
    let __temp, __restore;
    let routerBase = (/* @__PURE__ */ useRuntimeConfig()).app.baseURL;
    const history = ((_a = routerOptions.history) == null ? void 0 : _a.call(routerOptions, routerBase)) ?? createMemoryHistory(routerBase);
    const routes = routerOptions.routes ? ([__temp, __restore] = executeAsync(() => routerOptions.routes(_routes)), __temp = await __temp, __restore(), __temp) ?? _routes : _routes;
    let startPosition;
    const router = createRouter({
      ...routerOptions,
      scrollBehavior: (to, from, savedPosition) => {
        if (from === START_LOCATION) {
          startPosition = savedPosition;
          return;
        }
        if (routerOptions.scrollBehavior) {
          router.options.scrollBehavior = routerOptions.scrollBehavior;
          if ("scrollRestoration" in (void 0).history) {
            const unsub = router.beforeEach(() => {
              unsub();
              (void 0).history.scrollRestoration = "manual";
            });
          }
          return routerOptions.scrollBehavior(to, START_LOCATION, startPosition || savedPosition);
        }
      },
      history,
      routes
    });
    nuxtApp.vueApp.use(router);
    const previousRoute = shallowRef(router.currentRoute.value);
    router.afterEach((_to, from) => {
      previousRoute.value = from;
    });
    Object.defineProperty(nuxtApp.vueApp.config.globalProperties, "previousRoute", {
      get: () => previousRoute.value
    });
    const initialURL = nuxtApp.ssrContext.url;
    const _route = shallowRef(router.currentRoute.value);
    const syncCurrentRoute = () => {
      _route.value = router.currentRoute.value;
    };
    nuxtApp.hook("page:finish", syncCurrentRoute);
    router.afterEach((to, from) => {
      var _a2, _b2, _c2, _d;
      if (((_b2 = (_a2 = to.matched[0]) == null ? void 0 : _a2.components) == null ? void 0 : _b2.default) === ((_d = (_c2 = from.matched[0]) == null ? void 0 : _c2.components) == null ? void 0 : _d.default)) {
        syncCurrentRoute();
      }
    });
    const route = {};
    for (const key in _route.value) {
      Object.defineProperty(route, key, {
        get: () => _route.value[key],
        enumerable: true
      });
    }
    nuxtApp._route = shallowReactive(route);
    nuxtApp._middleware || (nuxtApp._middleware = {
      global: [],
      named: {}
    });
    useError();
    if (!((_b = nuxtApp.ssrContext) == null ? void 0 : _b.islandContext)) {
      router.afterEach(async (to, _from, failure) => {
        delete nuxtApp._processingMiddleware;
        if (failure) {
          await nuxtApp.callHook("page:loading:end");
        }
        if ((failure == null ? void 0 : failure.type) === 4) {
          return;
        }
        if (to.redirectedFrom && to.fullPath !== initialURL) {
          await nuxtApp.runWithContext(() => navigateTo(to.fullPath || "/"));
        }
      });
    }
    try {
      if (true) {
        ;
        [__temp, __restore] = executeAsync(() => router.push(initialURL)), await __temp, __restore();
        ;
      }
      ;
      [__temp, __restore] = executeAsync(() => router.isReady()), await __temp, __restore();
      ;
    } catch (error2) {
      [__temp, __restore] = executeAsync(() => nuxtApp.runWithContext(() => showError(error2))), await __temp, __restore();
    }
    const resolvedInitialRoute = router.currentRoute.value;
    syncCurrentRoute();
    if ((_c = nuxtApp.ssrContext) == null ? void 0 : _c.islandContext) {
      return { provide: { router } };
    }
    const initialLayout = nuxtApp.payload.state._layout;
    router.beforeEach(async (to, from) => {
      var _a2, _b2;
      await nuxtApp.callHook("page:loading:start");
      to.meta = reactive(to.meta);
      if (nuxtApp.isHydrating && initialLayout && !isReadonly(to.meta.layout)) {
        to.meta.layout = initialLayout;
      }
      nuxtApp._processingMiddleware = true;
      if (!((_a2 = nuxtApp.ssrContext) == null ? void 0 : _a2.islandContext)) {
        const middlewareEntries = /* @__PURE__ */ new Set([...globalMiddleware, ...nuxtApp._middleware.global]);
        for (const component of to.matched) {
          const componentMiddleware = component.meta.middleware;
          if (!componentMiddleware) {
            continue;
          }
          for (const entry2 of toArray(componentMiddleware)) {
            middlewareEntries.add(entry2);
          }
        }
        {
          const routeRules = await nuxtApp.runWithContext(() => getRouteRules({ path: to.path }));
          if (routeRules.appMiddleware) {
            for (const key in routeRules.appMiddleware) {
              if (routeRules.appMiddleware[key]) {
                middlewareEntries.add(key);
              } else {
                middlewareEntries.delete(key);
              }
            }
          }
        }
        for (const entry2 of middlewareEntries) {
          const middleware = typeof entry2 === "string" ? nuxtApp._middleware.named[entry2] || await ((_b2 = namedMiddleware[entry2]) == null ? void 0 : _b2.call(namedMiddleware).then((r) => r.default || r)) : entry2;
          if (!middleware) {
            throw new Error(`Unknown route middleware: '${entry2}'.`);
          }
          try {
            const result = await nuxtApp.runWithContext(() => middleware(to, from));
            if (true) {
              if (result === false || result instanceof Error) {
                const error2 = result || createError({
                  statusCode: 404,
                  statusMessage: `Page Not Found: ${initialURL}`
                });
                await nuxtApp.runWithContext(() => showError(error2));
                return false;
              }
            }
            if (result === true) {
              continue;
            }
            if (result === false) {
              return result;
            }
            if (result) {
              if (isNuxtError(result) && result.fatal) {
                await nuxtApp.runWithContext(() => showError(result));
              }
              return result;
            }
          } catch (err) {
            const error2 = createError(err);
            if (error2.fatal) {
              await nuxtApp.runWithContext(() => showError(error2));
            }
            return error2;
          }
        }
      }
    });
    router.onError(async () => {
      delete nuxtApp._processingMiddleware;
      await nuxtApp.callHook("page:loading:end");
    });
    router.afterEach(async (to, _from) => {
      if (to.matched.length === 0) {
        await nuxtApp.runWithContext(() => showError(createError({
          statusCode: 404,
          fatal: false,
          statusMessage: `Page not found: ${to.fullPath}`,
          data: {
            path: to.fullPath
          }
        })));
      }
    });
    nuxtApp.hooks.hookOnce("app:created", async () => {
      try {
        if ("name" in resolvedInitialRoute) {
          resolvedInitialRoute.name = void 0;
        }
        await router.replace({
          ...resolvedInitialRoute,
          force: true
        });
        router.options.scrollBehavior = routerOptions.scrollBehavior;
      } catch (error2) {
        await nuxtApp.runWithContext(() => showError(error2));
      }
    });
    return { provide: { router } };
  }
});
const _0_siteConfig_hxpx9TAykM4St_ybsPIAJmhOKQmae5Yd749dL71wvC8 = /* @__PURE__ */ defineNuxtPlugin({
  name: "nuxt-site-config:init",
  enforce: "pre",
  async setup(nuxtApp) {
    var _a;
    const state = useState("site-config");
    {
      const context = (_a = useRequestEvent()) == null ? void 0 : _a.context;
      nuxtApp.hooks.hook("app:rendered", () => {
        state.value = context == null ? void 0 : context.siteConfig.get({
          debug: (/* @__PURE__ */ useRuntimeConfig())["nuxt-site-config"].debug,
          resolveRefs: true
        });
      });
    }
    let stack = {};
    return {
      provide: {
        nuxtSiteConfig: stack
      }
    };
  }
});
const prismaClientSingleton = () => {
  return new PrismaClient();
};
const prisma = globalThis.prismaGlobal ?? prismaClientSingleton();
const plugin_9RP0IG4IZsdQGtc6t7gn_tuFRgHqjDGAVBd8w_WCy6s = /* @__PURE__ */ defineNuxtPlugin({
  name: "prisma-client",
  enforce: "pre",
  async setup() {
    return {
      provide: {
        prisma
      }
    };
  },
  env: {
    islands: true
  }
});
const reducers = [
  ["NuxtError", (data) => isNuxtError(data) && data.toJSON()],
  ["EmptyShallowRef", (data) => isRef(data) && isShallow(data) && !data.value && (typeof data.value === "bigint" ? "0n" : JSON.stringify(data.value) || "_")],
  ["EmptyRef", (data) => isRef(data) && !data.value && (typeof data.value === "bigint" ? "0n" : JSON.stringify(data.value) || "_")],
  ["ShallowRef", (data) => isRef(data) && isShallow(data) && data.value],
  ["ShallowReactive", (data) => isReactive(data) && isShallow(data) && toRaw(data)],
  ["Ref", (data) => isRef(data) && data.value],
  ["Reactive", (data) => isReactive(data) && toRaw(data)]
];
{
  reducers.push(["Island", (data) => data && (data == null ? void 0 : data.__nuxt_island)]);
}
const revive_payload_server_MVtmlZaQpj6ApFmshWfUWl5PehCebzaBf2NuRMiIbms = /* @__PURE__ */ defineNuxtPlugin({
  name: "nuxt:revive-payload:server",
  setup() {
    for (const [reducer, fn] of reducers) {
      definePayloadReducer(reducer, fn);
    }
  }
});
const plugin = /* @__PURE__ */ defineNuxtPlugin({
  name: "pinia",
  setup(nuxtApp) {
    const pinia = createPinia();
    nuxtApp.vueApp.use(pinia);
    setActivePinia(pinia);
    {
      nuxtApp.payload.pinia = pinia.state.value;
    }
    return {
      provide: {
        pinia
      }
    };
  }
});
const components_plugin_z4hgvsiddfKkfXTP6M8M4zG5Cb7sGnDhcryKVM45Di4 = /* @__PURE__ */ defineNuxtPlugin({
  name: "nuxt:global-components"
});
var FilterMatchMode = {
  STARTS_WITH: "startsWith",
  CONTAINS: "contains",
  NOT_CONTAINS: "notContains",
  ENDS_WITH: "endsWith",
  EQUALS: "equals",
  NOT_EQUALS: "notEquals",
  LESS_THAN: "lt",
  LESS_THAN_OR_EQUAL_TO: "lte",
  GREATER_THAN: "gt",
  GREATER_THAN_OR_EQUAL_TO: "gte",
  DATE_IS: "dateIs",
  DATE_IS_NOT: "dateIsNot",
  DATE_BEFORE: "dateBefore",
  DATE_AFTER: "dateAfter"
};
function _typeof$2(o) {
  "@babel/helpers - typeof";
  return _typeof$2 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o2) {
    return typeof o2;
  } : function(o2) {
    return o2 && "function" == typeof Symbol && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
  }, _typeof$2(o);
}
function ownKeys$2(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function(r2) {
      return Object.getOwnPropertyDescriptor(e, r2).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread$2(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys$2(Object(t), true).forEach(function(r2) {
      _defineProperty$2(e, r2, t[r2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$2(Object(t)).forEach(function(r2) {
      Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
    });
  }
  return e;
}
function _defineProperty$2(e, r, t) {
  return (r = _toPropertyKey$2(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: true, configurable: true, writable: true }) : e[r] = t, e;
}
function _toPropertyKey$2(t) {
  var i = _toPrimitive$2(t, "string");
  return "symbol" == _typeof$2(i) ? i : i + "";
}
function _toPrimitive$2(t, r) {
  if ("object" != _typeof$2(t) || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r);
    if ("object" != _typeof$2(i)) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
function tryOnMounted$1(fn) {
  var sync2 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true;
  if (getCurrentInstance() && getCurrentInstance().components) onMounted(fn);
  else if (sync2) fn();
  else nextTick(fn);
}
var _id = 0;
function useStyle(css3) {
  var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  var isLoaded = ref(false);
  var cssRef = ref(css3);
  var styleRef = ref(null);
  var defaultDocument2 = isClient$1() ? (void 0).document : void 0;
  var _options$document = options.document, document = _options$document === void 0 ? defaultDocument2 : _options$document, _options$immediate = options.immediate, immediate = _options$immediate === void 0 ? true : _options$immediate, _options$manual = options.manual, manual = _options$manual === void 0 ? false : _options$manual, _options$name = options.name, name = _options$name === void 0 ? "style_".concat(++_id) : _options$name, _options$id = options.id, id = _options$id === void 0 ? void 0 : _options$id, _options$media = options.media, media = _options$media === void 0 ? void 0 : _options$media, _options$nonce = options.nonce, nonce = _options$nonce === void 0 ? void 0 : _options$nonce, _options$first = options.first, first = _options$first === void 0 ? false : _options$first, _options$onMounted = options.onMounted, onStyleMounted = _options$onMounted === void 0 ? void 0 : _options$onMounted, _options$onUpdated = options.onUpdated, onStyleUpdated = _options$onUpdated === void 0 ? void 0 : _options$onUpdated, _options$onLoad = options.onLoad, onStyleLoaded = _options$onLoad === void 0 ? void 0 : _options$onLoad, _options$props = options.props, props = _options$props === void 0 ? {} : _options$props;
  var stop = function stop2() {
  };
  var load2 = function load22(_css) {
    var _props = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (!document) return;
    var _styleProps = _objectSpread$2(_objectSpread$2({}, props), _props);
    var _name = _styleProps.name || name, _id2 = _styleProps.id || id, _nonce = _styleProps.nonce || nonce;
    styleRef.value = document.querySelector('style[data-primevue-style-id="'.concat(_name, '"]')) || document.getElementById(_id2) || document.createElement("style");
    if (!styleRef.value.isConnected) {
      cssRef.value = _css || css3;
      setAttributes(styleRef.value, {
        type: "text/css",
        id: _id2,
        media,
        nonce: _nonce
      });
      first ? document.head.prepend(styleRef.value) : document.head.appendChild(styleRef.value);
      setAttribute(styleRef.value, "data-primevue-style-id", _name);
      setAttributes(styleRef.value, _styleProps);
      styleRef.value.onload = function(event) {
        return onStyleLoaded === null || onStyleLoaded === void 0 ? void 0 : onStyleLoaded(event, {
          name: _name
        });
      };
      onStyleMounted === null || onStyleMounted === void 0 || onStyleMounted(_name);
    }
    if (isLoaded.value) return;
    stop = watch(cssRef, function(value) {
      styleRef.value.textContent = value;
      onStyleUpdated === null || onStyleUpdated === void 0 || onStyleUpdated(_name);
    }, {
      immediate: true
    });
    isLoaded.value = true;
  };
  var unload = function unload2() {
    if (!document || !isLoaded.value) return;
    stop();
    isExist(styleRef.value) && document.head.removeChild(styleRef.value);
    isLoaded.value = false;
    styleRef.value = null;
  };
  if (immediate && !manual) tryOnMounted$1(load2);
  return {
    id,
    name,
    el: styleRef,
    css: cssRef,
    unload,
    load: load2,
    isLoaded: readonly(isLoaded)
  };
}
function _typeof$1(o) {
  "@babel/helpers - typeof";
  return _typeof$1 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o2) {
    return typeof o2;
  } : function(o2) {
    return o2 && "function" == typeof Symbol && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
  }, _typeof$1(o);
}
function _slicedToArray(r, e) {
  return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest();
}
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray(r, a) {
  if (r) {
    if ("string" == typeof r) return _arrayLikeToArray(r, a);
    var t = {}.toString.call(r).slice(8, -1);
    return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0;
  }
}
function _arrayLikeToArray(r, a) {
  (null == a || a > r.length) && (a = r.length);
  for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
  return n;
}
function _iterableToArrayLimit(r, l) {
  var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (null != t) {
    var e, n, i, u, a = [], f = true, o = false;
    try {
      if (i = (t = t.call(r)).next, 0 === l) ;
      else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = true) ;
    } catch (r2) {
      o = true, n = r2;
    } finally {
      try {
        if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return;
      } finally {
        if (o) throw n;
      }
    }
    return a;
  }
}
function _arrayWithHoles(r) {
  if (Array.isArray(r)) return r;
}
function ownKeys$1(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function(r2) {
      return Object.getOwnPropertyDescriptor(e, r2).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread$1(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys$1(Object(t), true).forEach(function(r2) {
      _defineProperty$1(e, r2, t[r2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$1(Object(t)).forEach(function(r2) {
      Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
    });
  }
  return e;
}
function _defineProperty$1(e, r, t) {
  return (r = _toPropertyKey$1(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: true, configurable: true, writable: true }) : e[r] = t, e;
}
function _toPropertyKey$1(t) {
  var i = _toPrimitive$1(t, "string");
  return "symbol" == _typeof$1(i) ? i : i + "";
}
function _toPrimitive$1(t, r) {
  if ("object" != _typeof$1(t) || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r);
    if ("object" != _typeof$1(i)) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
var css = function css2(_ref) {
  var dt2 = _ref.dt;
  return "\n.p-hidden-accessible {\n    border: 0;\n    clip: rect(0 0 0 0);\n    height: 1px;\n    margin: -1px;\n    opacity: 0;\n    overflow: hidden;\n    padding: 0;\n    pointer-events: none;\n    position: absolute;\n    white-space: nowrap;\n    width: 1px;\n}\n\n.p-overflow-hidden {\n    overflow: hidden;\n    padding-right: ".concat(dt2("scrollbar.width"), ";\n}\n");
};
var classes = {};
var inlineStyles = {};
var BaseStyle = {
  name: "base",
  css,
  style,
  classes,
  inlineStyles,
  load: function load(style2) {
    var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    var transform = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : function(cs) {
      return cs;
    };
    var computedStyle = transform(resolve(style2, {
      dt
    }));
    return isNotEmpty(computedStyle) ? useStyle(minifyCSS(computedStyle), _objectSpread$1({
      name: this.name
    }, options)) : {};
  },
  loadCSS: function loadCSS() {
    var options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    return this.load(this.css, options);
  },
  loadStyle: function loadStyle() {
    var _this = this;
    var options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    var style2 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
    return this.load(this.style, options, function() {
      var computedStyle = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
      return Theme.transformCSS(options.name || _this.name, "".concat(computedStyle).concat(style2));
    });
  },
  getCommonTheme: function getCommonTheme(params) {
    return Theme.getCommon(this.name, params);
  },
  getComponentTheme: function getComponentTheme(params) {
    return Theme.getComponent(this.name, params);
  },
  getDirectiveTheme: function getDirectiveTheme(params) {
    return Theme.getDirective(this.name, params);
  },
  getPresetTheme: function getPresetTheme(preset, selector, params) {
    return Theme.getCustomPreset(this.name, preset, selector, params);
  },
  getLayerOrderThemeCSS: function getLayerOrderThemeCSS() {
    return Theme.getLayerOrderCSS(this.name);
  },
  getStyleSheet: function getStyleSheet() {
    var extendedCSS = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
    var props = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (this.css) {
      var _css = resolve(this.css, {
        dt
      }) || "";
      var _style = minifyCSS("".concat(_css).concat(extendedCSS));
      var _props = Object.entries(props).reduce(function(acc, _ref2) {
        var _ref3 = _slicedToArray(_ref2, 2), k = _ref3[0], v = _ref3[1];
        return acc.push("".concat(k, '="').concat(v, '"')) && acc;
      }, []).join(" ");
      return isNotEmpty(_style) ? '<style type="text/css" data-primevue-style-id="'.concat(this.name, '" ').concat(_props, ">").concat(_style, "</style>") : "";
    }
    return "";
  },
  getCommonThemeStyleSheet: function getCommonThemeStyleSheet(params) {
    var props = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    return Theme.getCommonStyleSheet(this.name, params, props);
  },
  getThemeStyleSheet: function getThemeStyleSheet(params) {
    var props = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    var css3 = [Theme.getStyleSheet(this.name, params, props)];
    if (this.style) {
      var name = this.name === "base" ? "global-style" : "".concat(this.name, "-style");
      var _css = resolve(this.style, {
        dt
      });
      var _style = minifyCSS(Theme.transformCSS(name, _css));
      var _props = Object.entries(props).reduce(function(acc, _ref4) {
        var _ref5 = _slicedToArray(_ref4, 2), k = _ref5[0], v = _ref5[1];
        return acc.push("".concat(k, '="').concat(v, '"')) && acc;
      }, []).join(" ");
      isNotEmpty(_style) && css3.push('<style type="text/css" data-primevue-style-id="'.concat(name, '" ').concat(_props, ">").concat(_style, "</style>"));
    }
    return css3.join("");
  },
  extend: function extend(inStyle) {
    return _objectSpread$1(_objectSpread$1({}, this), {}, {
      css: void 0,
      style: void 0
    }, inStyle);
  }
};
var PrimeVueService = EventBus();
function _typeof(o) {
  "@babel/helpers - typeof";
  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o2) {
    return typeof o2;
  } : function(o2) {
    return o2 && "function" == typeof Symbol && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
  }, _typeof(o);
}
function ownKeys(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function(r2) {
      return Object.getOwnPropertyDescriptor(e, r2).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys(Object(t), true).forEach(function(r2) {
      _defineProperty(e, r2, t[r2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function(r2) {
      Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
    });
  }
  return e;
}
function _defineProperty(e, r, t) {
  return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: true, configurable: true, writable: true }) : e[r] = t, e;
}
function _toPropertyKey(t) {
  var i = _toPrimitive(t, "string");
  return "symbol" == _typeof(i) ? i : i + "";
}
function _toPrimitive(t, r) {
  if ("object" != _typeof(t) || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r);
    if ("object" != _typeof(i)) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
var defaultOptions = {
  ripple: false,
  inputStyle: null,
  inputVariant: null,
  locale: {
    startsWith: "Starts with",
    contains: "Contains",
    notContains: "Not contains",
    endsWith: "Ends with",
    equals: "Equals",
    notEquals: "Not equals",
    noFilter: "No Filter",
    lt: "Less than",
    lte: "Less than or equal to",
    gt: "Greater than",
    gte: "Greater than or equal to",
    dateIs: "Date is",
    dateIsNot: "Date is not",
    dateBefore: "Date is before",
    dateAfter: "Date is after",
    clear: "Clear",
    apply: "Apply",
    matchAll: "Match All",
    matchAny: "Match Any",
    addRule: "Add Rule",
    removeRule: "Remove Rule",
    accept: "Yes",
    reject: "No",
    choose: "Choose",
    upload: "Upload",
    cancel: "Cancel",
    completed: "Completed",
    pending: "Pending",
    fileSizeTypes: ["B", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"],
    dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    dayNamesMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
    monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
    monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    chooseYear: "Choose Year",
    chooseMonth: "Choose Month",
    chooseDate: "Choose Date",
    prevDecade: "Previous Decade",
    nextDecade: "Next Decade",
    prevYear: "Previous Year",
    nextYear: "Next Year",
    prevMonth: "Previous Month",
    nextMonth: "Next Month",
    prevHour: "Previous Hour",
    nextHour: "Next Hour",
    prevMinute: "Previous Minute",
    nextMinute: "Next Minute",
    prevSecond: "Previous Second",
    nextSecond: "Next Second",
    am: "am",
    pm: "pm",
    today: "Today",
    weekHeader: "Wk",
    firstDayOfWeek: 0,
    showMonthAfterYear: false,
    dateFormat: "mm/dd/yy",
    weak: "Weak",
    medium: "Medium",
    strong: "Strong",
    passwordPrompt: "Enter a password",
    emptyFilterMessage: "No results found",
    searchMessage: "{0} results are available",
    selectionMessage: "{0} items selected",
    emptySelectionMessage: "No selected item",
    emptySearchMessage: "No results found",
    fileChosenMessage: "{0} files",
    noFileChosenMessage: "No file chosen",
    emptyMessage: "No available options",
    aria: {
      trueLabel: "True",
      falseLabel: "False",
      nullLabel: "Not Selected",
      star: "1 star",
      stars: "{star} stars",
      selectAll: "All items selected",
      unselectAll: "All items unselected",
      close: "Close",
      previous: "Previous",
      next: "Next",
      navigation: "Navigation",
      scrollTop: "Scroll Top",
      moveTop: "Move Top",
      moveUp: "Move Up",
      moveDown: "Move Down",
      moveBottom: "Move Bottom",
      moveToTarget: "Move to Target",
      moveToSource: "Move to Source",
      moveAllToTarget: "Move All to Target",
      moveAllToSource: "Move All to Source",
      pageLabel: "Page {page}",
      firstPageLabel: "First Page",
      lastPageLabel: "Last Page",
      nextPageLabel: "Next Page",
      prevPageLabel: "Previous Page",
      rowsPerPageLabel: "Rows per page",
      jumpToPageDropdownLabel: "Jump to Page Dropdown",
      jumpToPageInputLabel: "Jump to Page Input",
      selectRow: "Row Selected",
      unselectRow: "Row Unselected",
      expandRow: "Row Expanded",
      collapseRow: "Row Collapsed",
      showFilterMenu: "Show Filter Menu",
      hideFilterMenu: "Hide Filter Menu",
      filterOperator: "Filter Operator",
      filterConstraint: "Filter Constraint",
      editRow: "Row Edit",
      saveEdit: "Save Edit",
      cancelEdit: "Cancel Edit",
      listView: "List View",
      gridView: "Grid View",
      slide: "Slide",
      slideNumber: "{slideNumber}",
      zoomImage: "Zoom Image",
      zoomIn: "Zoom In",
      zoomOut: "Zoom Out",
      rotateRight: "Rotate Right",
      rotateLeft: "Rotate Left",
      listLabel: "Option List"
    }
  },
  filterMatchModeOptions: {
    text: [FilterMatchMode.STARTS_WITH, FilterMatchMode.CONTAINS, FilterMatchMode.NOT_CONTAINS, FilterMatchMode.ENDS_WITH, FilterMatchMode.EQUALS, FilterMatchMode.NOT_EQUALS],
    numeric: [FilterMatchMode.EQUALS, FilterMatchMode.NOT_EQUALS, FilterMatchMode.LESS_THAN, FilterMatchMode.LESS_THAN_OR_EQUAL_TO, FilterMatchMode.GREATER_THAN, FilterMatchMode.GREATER_THAN_OR_EQUAL_TO],
    date: [FilterMatchMode.DATE_IS, FilterMatchMode.DATE_IS_NOT, FilterMatchMode.DATE_BEFORE, FilterMatchMode.DATE_AFTER]
  },
  zIndex: {
    modal: 1100,
    overlay: 1e3,
    menu: 1e3,
    tooltip: 1100
  },
  theme: void 0,
  unstyled: false,
  pt: void 0,
  ptOptions: {
    mergeSections: true,
    mergeProps: false
  },
  csp: {
    nonce: void 0
  }
};
var PrimeVueSymbol = Symbol();
function setup(app, options) {
  var PrimeVue2 = {
    config: reactive(options)
  };
  app.config.globalProperties.$primevue = PrimeVue2;
  app.provide(PrimeVueSymbol, PrimeVue2);
  clearConfig();
  setupConfig(app, PrimeVue2);
  return PrimeVue2;
}
var stopWatchers = [];
function clearConfig() {
  ThemeService.clear();
  stopWatchers.forEach(function(fn) {
    return fn === null || fn === void 0 ? void 0 : fn();
  });
  stopWatchers = [];
}
function setupConfig(app, PrimeVue2) {
  var isThemeChanged = ref(false);
  var loadCommonTheme = function loadCommonTheme2() {
    var _PrimeVue$config;
    if (((_PrimeVue$config = PrimeVue2.config) === null || _PrimeVue$config === void 0 ? void 0 : _PrimeVue$config.theme) === "none") return;
    if (!Theme.isStyleNameLoaded("common")) {
      var _BaseStyle$getCommonT, _PrimeVue$config2;
      var _ref = ((_BaseStyle$getCommonT = BaseStyle.getCommonTheme) === null || _BaseStyle$getCommonT === void 0 ? void 0 : _BaseStyle$getCommonT.call(BaseStyle)) || {}, primitive = _ref.primitive, semantic = _ref.semantic, global2 = _ref.global, style2 = _ref.style;
      var styleOptions = {
        nonce: (_PrimeVue$config2 = PrimeVue2.config) === null || _PrimeVue$config2 === void 0 || (_PrimeVue$config2 = _PrimeVue$config2.csp) === null || _PrimeVue$config2 === void 0 ? void 0 : _PrimeVue$config2.nonce
      };
      BaseStyle.load(primitive === null || primitive === void 0 ? void 0 : primitive.css, _objectSpread({
        name: "primitive-variables"
      }, styleOptions));
      BaseStyle.load(semantic === null || semantic === void 0 ? void 0 : semantic.css, _objectSpread({
        name: "semantic-variables"
      }, styleOptions));
      BaseStyle.load(global2 === null || global2 === void 0 ? void 0 : global2.css, _objectSpread({
        name: "global-variables"
      }, styleOptions));
      BaseStyle.loadStyle(_objectSpread({
        name: "global-style"
      }, styleOptions), style2);
      Theme.setLoadedStyleName("common");
    }
  };
  ThemeService.on("theme:change", function(newTheme) {
    if (!isThemeChanged.value) {
      app.config.globalProperties.$primevue.config.theme = newTheme;
      isThemeChanged.value = true;
    }
  });
  var stopConfigWatcher = watch(PrimeVue2.config, function(newValue, oldValue) {
    PrimeVueService.emit("config:change", {
      newValue,
      oldValue
    });
  }, {
    immediate: true,
    deep: true
  });
  var stopRippleWatcher = watch(function() {
    return PrimeVue2.config.ripple;
  }, function(newValue, oldValue) {
    PrimeVueService.emit("config:ripple:change", {
      newValue,
      oldValue
    });
  }, {
    immediate: true,
    deep: true
  });
  var stopThemeWatcher = watch(function() {
    return PrimeVue2.config.theme;
  }, function(newValue, oldValue) {
    if (!isThemeChanged.value) {
      Theme.setTheme(newValue);
    }
    if (!PrimeVue2.config.unstyled) {
      loadCommonTheme();
    }
    isThemeChanged.value = false;
    PrimeVueService.emit("config:theme:change", {
      newValue,
      oldValue
    });
  }, {
    immediate: true,
    deep: false
  });
  var stopUnstyledWatcher = watch(function() {
    return PrimeVue2.config.unstyled;
  }, function(newValue, oldValue) {
    if (!newValue && PrimeVue2.config.theme) {
      loadCommonTheme();
    }
    PrimeVueService.emit("config:unstyled:change", {
      newValue,
      oldValue
    });
  }, {
    immediate: true,
    deep: true
  });
  stopWatchers.push(stopConfigWatcher);
  stopWatchers.push(stopRippleWatcher);
  stopWatchers.push(stopThemeWatcher);
  stopWatchers.push(stopUnstyledWatcher);
}
var PrimeVue = {
  install: function install(app, options) {
    var configOptions = mergeKeys(defaultOptions, options);
    setup(app, configOptions);
  }
};
const primevue_plugin_0tbz5Y3Ab_H50qf9PQhqyN3k7XWjmG9dWGLJNwEfVI0 = /* @__PURE__ */ defineNuxtPlugin(({ vueApp }) => {
  var _a;
  const runtimeConfig = /* @__PURE__ */ useRuntimeConfig();
  const config = ((_a = runtimeConfig == null ? void 0 : runtimeConfig.public) == null ? void 0 : _a.primevue) ?? {};
  const { usePrimeVue = true, options = {} } = config;
  const pt = {};
  const theme = { theme: options == null ? void 0 : options.theme };
  usePrimeVue && vueApp.use(PrimeVue, { ...options, ...pt, ...theme });
});
function tryOnScopeDispose$1(fn) {
  if (getCurrentScope()) {
    onScopeDispose(fn);
    return true;
  }
  return false;
}
function toValue(r) {
  return typeof r === "function" ? r() : unref(r);
}
typeof WorkerGlobalScope !== "undefined" && globalThis instanceof WorkerGlobalScope;
const notNullish = (val) => val != null;
const toString = Object.prototype.toString;
const isObject$1 = (val) => toString.call(val) === "[object Object]";
const noop$1 = () => {
};
function getLifeCycleTarget(target) {
  return getCurrentInstance();
}
function tryOnUnmounted(fn, target) {
  getLifeCycleTarget();
}
function unrefElement$1(elRef) {
  var _a;
  const plain = toValue(elRef);
  return (_a = plain == null ? void 0 : plain.$el) != null ? _a : plain;
}
const defaultWindow$1 = void 0;
function useEventListener$1(...args) {
  let target;
  let events2;
  let listeners;
  let options;
  if (typeof args[0] === "string" || Array.isArray(args[0])) {
    [events2, listeners, options] = args;
    target = defaultWindow$1;
  } else {
    [target, events2, listeners, options] = args;
  }
  if (!target)
    return noop$1;
  if (!Array.isArray(events2))
    events2 = [events2];
  if (!Array.isArray(listeners))
    listeners = [listeners];
  const cleanups = [];
  const cleanup = () => {
    cleanups.forEach((fn) => fn());
    cleanups.length = 0;
  };
  const register = (el, event, listener, options2) => {
    el.addEventListener(event, listener, options2);
    return () => el.removeEventListener(event, listener, options2);
  };
  const stopWatch = watch(
    () => [unrefElement$1(target), toValue(options)],
    ([el, options2]) => {
      cleanup();
      if (!el)
        return;
      const optionsClone = isObject$1(options2) ? { ...options2 } : options2;
      cleanups.push(
        ...events2.flatMap((event) => {
          return listeners.map((listener) => register(el, event, listener, optionsClone));
        })
      );
    },
    { immediate: true, flush: "post" }
  );
  const stop = () => {
    stopWatch();
    cleanup();
  };
  tryOnScopeDispose$1(stop);
  return stop;
}
function useMounted() {
  const isMounted = ref(false);
  getCurrentInstance();
  return isMounted;
}
function useSupported$1(callback) {
  const isMounted = useMounted();
  return computed(() => {
    isMounted.value;
    return Boolean(callback());
  });
}
function useIntersectionObserver(target, callback, options = {}) {
  const {
    root,
    rootMargin = "0px",
    threshold = 0.1,
    window: window2 = defaultWindow$1,
    immediate = true
  } = options;
  const isSupported = useSupported$1(() => window2 && "IntersectionObserver" in window2);
  const targets = computed(() => {
    const _target = toValue(target);
    return (Array.isArray(_target) ? _target : [_target]).map(unrefElement$1).filter(notNullish);
  });
  let cleanup = noop$1;
  const isActive = ref(immediate);
  const stopWatch = isSupported.value ? watch(
    () => [targets.value, unrefElement$1(root), isActive.value],
    ([targets2, root2]) => {
      cleanup();
      if (!isActive.value)
        return;
      if (!targets2.length)
        return;
      const observer = new IntersectionObserver(
        callback,
        {
          root: unrefElement$1(root2),
          rootMargin,
          threshold
        }
      );
      targets2.forEach((el) => el && observer.observe(el));
      cleanup = () => {
        observer.disconnect();
        cleanup = noop$1;
      };
    },
    { immediate, flush: "post" }
  ) : noop$1;
  const stop = () => {
    cleanup();
    stopWatch();
    isActive.value = false;
  };
  tryOnScopeDispose$1(stop);
  return {
    isSupported,
    isActive,
    pause() {
      cleanup();
      isActive.value = false;
    },
    resume() {
      isActive.value = true;
    },
    stop
  };
}
const motionState = {};
var __defProp$1 = Object.defineProperty;
var __defNormalProp$1 = (obj, key, value) => key in obj ? __defProp$1(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField$1 = (obj, key, value) => {
  __defNormalProp$1(obj, key + "", value);
  return value;
};
class SubscriptionManager {
  constructor() {
    __publicField$1(this, "subscriptions", /* @__PURE__ */ new Set());
  }
  add(handler) {
    this.subscriptions.add(handler);
    return () => this.subscriptions.delete(handler);
  }
  notify(a, b, c) {
    if (!this.subscriptions.size)
      return;
    for (const handler of this.subscriptions)
      handler(a, b, c);
  }
  clear() {
    this.subscriptions.clear();
  }
}
var __defProp$2 = Object.defineProperty;
var __defNormalProp$2 = (obj, key, value) => key in obj ? __defProp$2(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp$2(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
function isFloat(value) {
  return !Number.isNaN(Number.parseFloat(value));
}
class MotionValue {
  /**
   * init - The initiating value
   * config - Optional configuration options
   */
  constructor(init) {
    __publicField(this, "current");
    __publicField(this, "prev");
    __publicField(this, "timeDelta", 0);
    __publicField(this, "lastUpdated", 0);
    __publicField(this, "updateSubscribers", new SubscriptionManager());
    __publicField(this, "stopAnimation");
    __publicField(this, "canTrackVelocity", false);
    __publicField(this, "updateAndNotify", (v) => {
      this.prev = this.current;
      this.current = v;
      const { delta, timestamp } = getFrameData();
      if (this.lastUpdated !== timestamp) {
        this.timeDelta = delta;
        this.lastUpdated = timestamp;
      }
      sync.postRender(this.scheduleVelocityCheck);
      this.updateSubscribers.notify(this.current);
    });
    __publicField(this, "scheduleVelocityCheck", () => sync.postRender(this.velocityCheck));
    __publicField(this, "velocityCheck", ({ timestamp }) => {
      if (!this.canTrackVelocity)
        this.canTrackVelocity = isFloat(this.current);
      if (timestamp !== this.lastUpdated)
        this.prev = this.current;
    });
    this.prev = this.current = init;
    this.canTrackVelocity = isFloat(this.current);
  }
  /**
   * Adds a function that will be notified when the `MotionValue` is updated.
   *
   * It returns a function that, when called, will cancel the subscription.
   */
  onChange(subscription) {
    return this.updateSubscribers.add(subscription);
  }
  clearListeners() {
    this.updateSubscribers.clear();
  }
  /**
   * Sets the state of the `MotionValue`.
   *
   * @param v
   * @param render
   */
  set(v) {
    this.updateAndNotify(v);
  }
  /**
   * Returns the latest state of `MotionValue`
   *
   * @returns - The latest state of `MotionValue`
   */
  get() {
    return this.current;
  }
  /**
   * Get previous value.
   *
   * @returns - The previous latest state of `MotionValue`
   */
  getPrevious() {
    return this.prev;
  }
  /**
   * Returns the latest velocity of `MotionValue`
   *
   * @returns - The latest velocity of `MotionValue`. Returns `0` if the state is non-numerical.
   */
  getVelocity() {
    return this.canTrackVelocity ? velocityPerSecond(Number.parseFloat(this.current) - Number.parseFloat(this.prev), this.timeDelta) : 0;
  }
  /**
   * Registers a new animation to control this `MotionValue`. Only one
   * animation can drive a `MotionValue` at one time.
   */
  start(animation) {
    this.stop();
    return new Promise((resolve2) => {
      const { stop } = animation(resolve2);
      this.stopAnimation = stop;
    }).then(() => this.clearAnimation());
  }
  /**
   * Stop the currently active animation.
   */
  stop() {
    if (this.stopAnimation)
      this.stopAnimation();
    this.clearAnimation();
  }
  /**
   * Returns `true` if this value is currently animating.
   */
  isAnimating() {
    return !!this.stopAnimation;
  }
  /**
   * Clear the current animation reference.
   */
  clearAnimation() {
    this.stopAnimation = null;
  }
  /**
   * Destroy and clean up subscribers to this `MotionValue`.
   */
  destroy() {
    this.updateSubscribers.clear();
    this.stop();
  }
}
function getMotionValue(init) {
  return new MotionValue(init);
}
const { isArray } = Array;
function useMotionValues() {
  const motionValues = ref({});
  const stop = (keys) => {
    const destroyKey = (key) => {
      if (!motionValues.value[key])
        return;
      motionValues.value[key].stop();
      motionValues.value[key].destroy();
      delete motionValues.value[key];
    };
    if (keys) {
      if (isArray(keys)) {
        keys.forEach(destroyKey);
      } else {
        destroyKey(keys);
      }
    } else {
      Object.keys(motionValues.value).forEach(destroyKey);
    }
  };
  const get2 = (key, from, target) => {
    if (motionValues.value[key])
      return motionValues.value[key];
    const motionValue = getMotionValue(from);
    motionValue.onChange((v) => target[key] = v);
    motionValues.value[key] = motionValue;
    return motionValue;
  };
  tryOnUnmounted();
  return {
    motionValues,
    get: get2,
    stop
  };
}
function isKeyframesTarget(v) {
  return Array.isArray(v);
}
function underDampedSpring() {
  return {
    type: "spring",
    stiffness: 500,
    damping: 25,
    restDelta: 0.5,
    restSpeed: 10
  };
}
function criticallyDampedSpring(to) {
  return {
    type: "spring",
    stiffness: 550,
    damping: to === 0 ? 2 * Math.sqrt(550) : 30,
    restDelta: 0.01,
    restSpeed: 10
  };
}
function overDampedSpring(to) {
  return {
    type: "spring",
    stiffness: 550,
    damping: to === 0 ? 100 : 30,
    restDelta: 0.01,
    restSpeed: 10
  };
}
function linearTween() {
  return {
    type: "keyframes",
    ease: "linear",
    duration: 300
  };
}
function keyframes(values) {
  return {
    type: "keyframes",
    duration: 800,
    values
  };
}
const defaultTransitions = {
  default: overDampedSpring,
  x: underDampedSpring,
  y: underDampedSpring,
  z: underDampedSpring,
  rotate: underDampedSpring,
  rotateX: underDampedSpring,
  rotateY: underDampedSpring,
  rotateZ: underDampedSpring,
  scaleX: criticallyDampedSpring,
  scaleY: criticallyDampedSpring,
  scale: criticallyDampedSpring,
  backgroundColor: linearTween,
  color: linearTween,
  opacity: linearTween
};
function getDefaultTransition(valueKey, to) {
  let transitionFactory;
  if (isKeyframesTarget(to)) {
    transitionFactory = keyframes;
  } else {
    transitionFactory = defaultTransitions[valueKey] || defaultTransitions.default;
  }
  return { to, ...transitionFactory(to) };
}
const int = {
  ...number,
  transform: Math.round
};
const valueTypes = {
  // Color props
  color,
  backgroundColor: color,
  outlineColor: color,
  fill: color,
  stroke: color,
  // Border props
  borderColor: color,
  borderTopColor: color,
  borderRightColor: color,
  borderBottomColor: color,
  borderLeftColor: color,
  borderWidth: px,
  borderTopWidth: px,
  borderRightWidth: px,
  borderBottomWidth: px,
  borderLeftWidth: px,
  borderRadius: px,
  radius: px,
  borderTopLeftRadius: px,
  borderTopRightRadius: px,
  borderBottomRightRadius: px,
  borderBottomLeftRadius: px,
  // Positioning props
  width: px,
  maxWidth: px,
  height: px,
  maxHeight: px,
  size: px,
  top: px,
  right: px,
  bottom: px,
  left: px,
  // Spacing props
  padding: px,
  paddingTop: px,
  paddingRight: px,
  paddingBottom: px,
  paddingLeft: px,
  margin: px,
  marginTop: px,
  marginRight: px,
  marginBottom: px,
  marginLeft: px,
  // Transform props
  rotate: degrees,
  rotateX: degrees,
  rotateY: degrees,
  rotateZ: degrees,
  scale,
  scaleX: scale,
  scaleY: scale,
  scaleZ: scale,
  skew: degrees,
  skewX: degrees,
  skewY: degrees,
  distance: px,
  translateX: px,
  translateY: px,
  translateZ: px,
  x: px,
  y: px,
  z: px,
  perspective: px,
  transformPerspective: px,
  opacity: alpha,
  originX: progressPercentage,
  originY: progressPercentage,
  originZ: px,
  // Misc
  zIndex: int,
  filter,
  WebkitFilter: filter,
  // SVG
  fillOpacity: alpha,
  strokeOpacity: alpha,
  numOctaves: int
};
const getValueType = (key) => valueTypes[key];
function getValueAsType(value, type) {
  return type && typeof value === "number" && type.transform ? type.transform(value) : value;
}
function getAnimatableNone(key, value) {
  let defaultValueType = getValueType(key);
  if (defaultValueType !== filter)
    defaultValueType = complex;
  return defaultValueType.getAnimatableNone ? defaultValueType.getAnimatableNone(value) : void 0;
}
const easingLookup = {
  linear,
  easeIn,
  easeInOut,
  easeOut,
  circIn,
  circInOut,
  circOut,
  backIn,
  backInOut,
  backOut,
  anticipate,
  bounceIn,
  bounceInOut,
  bounceOut
};
function easingDefinitionToFunction(definition) {
  if (Array.isArray(definition)) {
    const [x1, y1, x2, y2] = definition;
    return cubicBezier(x1, y1, x2, y2);
  } else if (typeof definition === "string") {
    return easingLookup[definition];
  }
  return definition;
}
function isEasingArray(ease) {
  return Array.isArray(ease) && typeof ease[0] !== "number";
}
function isAnimatable(key, value) {
  if (key === "zIndex")
    return false;
  if (typeof value === "number" || Array.isArray(value))
    return true;
  if (typeof value === "string" && complex.test(value) && !value.startsWith("url(")) {
    return true;
  }
  return false;
}
function hydrateKeyframes(options) {
  if (Array.isArray(options.to) && options.to[0] === null) {
    options.to = [...options.to];
    options.to[0] = options.from;
  }
  return options;
}
function convertTransitionToAnimationOptions({ ease, times, delay, ...transition }) {
  const options = { ...transition };
  if (times)
    options.offset = times;
  if (ease) {
    options.ease = isEasingArray(ease) ? ease.map(easingDefinitionToFunction) : easingDefinitionToFunction(ease);
  }
  if (delay)
    options.elapsed = -delay;
  return options;
}
function getPopmotionAnimationOptions(transition, options, key) {
  if (Array.isArray(options.to)) {
    if (!transition.duration)
      transition.duration = 800;
  }
  hydrateKeyframes(options);
  if (!isTransitionDefined(transition)) {
    transition = {
      ...transition,
      ...getDefaultTransition(key, options.to)
    };
  }
  return {
    ...options,
    ...convertTransitionToAnimationOptions(transition)
  };
}
function isTransitionDefined({ delay, repeat, repeatType, repeatDelay, from, ...transition }) {
  return !!Object.keys(transition).length;
}
function getValueTransition(transition, key) {
  return transition[key] || transition.default || transition;
}
function getAnimation(key, value, target, transition, onComplete) {
  const valueTransition = getValueTransition(transition, key);
  let origin = valueTransition.from === null || valueTransition.from === void 0 ? value.get() : valueTransition.from;
  const isTargetAnimatable = isAnimatable(key, target);
  if (origin === "none" && isTargetAnimatable && typeof target === "string")
    origin = getAnimatableNone(key, target);
  const isOriginAnimatable = isAnimatable(key, origin);
  function start(complete) {
    const options = {
      from: origin,
      to: target,
      velocity: transition.velocity ? transition.velocity : value.getVelocity(),
      onUpdate: (v) => value.set(v)
    };
    return valueTransition.type === "inertia" || valueTransition.type === "decay" ? inertia({ ...options, ...valueTransition }) : animate({
      ...getPopmotionAnimationOptions(valueTransition, options, key),
      onUpdate: (v) => {
        options.onUpdate(v);
        if (valueTransition.onUpdate)
          valueTransition.onUpdate(v);
      },
      onComplete: () => {
        if (onComplete)
          onComplete();
        if (complete)
          complete();
      }
    });
  }
  function set2(complete) {
    value.set(target);
    if (onComplete)
      onComplete();
    if (complete)
      complete();
    return { stop: () => {
    } };
  }
  return !isOriginAnimatable || !isTargetAnimatable || valueTransition.type === false ? set2 : start;
}
function useMotionTransitions() {
  const { motionValues, stop, get: get2 } = useMotionValues();
  const push = (key, value, target, transition = {}, onComplete) => {
    const from = target[key];
    const motionValue = get2(key, from, target);
    if (transition && transition.immediate) {
      motionValue.set(value);
      return;
    }
    const animation = getAnimation(key, motionValue, value, transition, onComplete);
    motionValue.start(animation);
  };
  return { motionValues, stop, push };
}
function useMotionControls(motionProperties, variants = {}, { motionValues, push, stop } = useMotionTransitions()) {
  const _variants = unref(variants);
  const isAnimating = ref(false);
  watch(
    motionValues,
    (newVal) => {
      isAnimating.value = Object.values(newVal).filter((value) => value.isAnimating()).length > 0;
    },
    {
      immediate: true,
      deep: true
    }
  );
  const getVariantFromKey = (variant) => {
    if (!_variants || !_variants[variant])
      throw new Error(`The variant ${variant} does not exist.`);
    return _variants[variant];
  };
  const apply = (variant) => {
    if (typeof variant === "string")
      variant = getVariantFromKey(variant);
    const animations = Object.entries(variant).map(([key, value]) => {
      if (key === "transition")
        return void 0;
      return new Promise(
        (resolve2) => (
          // @ts-expect-error - Fix errors later for typescript 5
          push(key, value, motionProperties, variant.transition || getDefaultTransition(key, variant[key]), resolve2)
        )
      );
    }).filter(Boolean);
    async function waitForComplete() {
      var _a, _b;
      await Promise.all(animations);
      (_b = (_a = variant.transition) == null ? void 0 : _a.onComplete) == null ? void 0 : _b.call(_a);
    }
    return Promise.all([waitForComplete()]);
  };
  const set2 = (variant) => {
    const variantData = isObject$1(variant) ? variant : getVariantFromKey(variant);
    Object.entries(variantData).forEach(([key, value]) => {
      if (key === "transition")
        return;
      push(key, value, motionProperties, {
        immediate: true
      });
    });
  };
  const leave = async (done) => {
    let leaveVariant;
    if (_variants) {
      if (_variants.leave)
        leaveVariant = _variants.leave;
      if (!_variants.leave && _variants.initial)
        leaveVariant = _variants.initial;
    }
    if (!leaveVariant) {
      done();
      return;
    }
    await apply(leaveVariant);
    done();
  };
  return {
    isAnimating,
    apply,
    set: set2,
    leave,
    stop
  };
}
function registerEventListeners({ target, state, variants, apply }) {
  const _variants = unref(variants);
  const hovered = ref(false);
  const tapped = ref(false);
  const focused = ref(false);
  const mutableKeys = computed(() => {
    let result = [...Object.keys(state.value || {})];
    if (!_variants)
      return result;
    if (_variants.hovered)
      result = [...result, ...Object.keys(_variants.hovered)];
    if (_variants.tapped)
      result = [...result, ...Object.keys(_variants.tapped)];
    if (_variants.focused)
      result = [...result, ...Object.keys(_variants.focused)];
    return result;
  });
  const computedProperties = computed(() => {
    const result = {};
    Object.assign(result, state.value);
    if (hovered.value && _variants.hovered)
      Object.assign(result, _variants.hovered);
    if (tapped.value && _variants.tapped)
      Object.assign(result, _variants.tapped);
    if (focused.value && _variants.focused)
      Object.assign(result, _variants.focused);
    for (const key in result) {
      if (!mutableKeys.value.includes(key))
        delete result[key];
    }
    return result;
  });
  if (_variants.hovered) {
    useEventListener$1(target, "mouseenter", () => hovered.value = true);
    useEventListener$1(target, "mouseleave", () => {
      hovered.value = false;
      tapped.value = false;
    });
  }
  if (_variants.tapped) ;
  if (_variants.focused) {
    useEventListener$1(target, "focus", () => focused.value = true);
    useEventListener$1(target, "blur", () => focused.value = false);
  }
  watch([hovered, tapped, focused], () => {
    apply(computedProperties.value);
  });
}
function registerLifeCycleHooks({ set: set2, target, variants, variant }) {
  const _variants = unref(variants);
  watch(
    () => target,
    () => {
      if (!_variants)
        return;
      if (_variants.initial) {
        set2("initial");
        variant.value = "initial";
      }
      if (_variants.enter)
        variant.value = "enter";
    },
    {
      immediate: true,
      flush: "pre"
    }
  );
}
function registerVariantsSync({ state, apply }) {
  watch(
    state,
    (newVal) => {
      if (newVal)
        apply(newVal);
    },
    {
      immediate: true
    }
  );
}
function registerVisibilityHooks({ target, variants, variant }) {
  const _variants = unref(variants);
  if (_variants && (_variants.visible || _variants.visibleOnce)) {
    useIntersectionObserver(target, ([{ isIntersecting }]) => {
      if (_variants.visible) {
        if (isIntersecting)
          variant.value = "visible";
        else
          variant.value = "initial";
      } else if (_variants.visibleOnce) {
        if (isIntersecting && variant.value !== "visibleOnce")
          variant.value = "visibleOnce";
        else if (!variant.value)
          variant.value = "initial";
      }
    });
  }
}
function useMotionFeatures(instance, options = {
  syncVariants: true,
  lifeCycleHooks: true,
  visibilityHooks: true,
  eventListeners: true
}) {
  if (options.lifeCycleHooks)
    registerLifeCycleHooks(instance);
  if (options.syncVariants)
    registerVariantsSync(instance);
  if (options.visibilityHooks)
    registerVisibilityHooks(instance);
  if (options.eventListeners)
    registerEventListeners(instance);
}
function reactiveStyle(props = {}) {
  const state = reactive({
    ...props
  });
  const style2 = ref({});
  watch(
    state,
    () => {
      const result = {};
      for (const [key, value] of Object.entries(state)) {
        const valueType = getValueType(key);
        const valueAsType = getValueAsType(value, valueType);
        result[key] = valueAsType;
      }
      style2.value = result;
    },
    {
      immediate: true,
      deep: true
    }
  );
  return {
    state,
    style: style2
  };
}
function usePermissiveTarget(target, onTarget) {
  watch(
    () => unrefElement$1(target),
    (el) => {
      if (!el)
        return;
      onTarget(el);
    },
    {
      immediate: true
    }
  );
}
const translateAlias = {
  x: "translateX",
  y: "translateY",
  z: "translateZ"
};
function reactiveTransform(props = {}, enableHardwareAcceleration = true) {
  const state = reactive({ ...props });
  const transform = ref("");
  watch(
    state,
    (newVal) => {
      let result = "";
      let hasHardwareAcceleration = false;
      if (enableHardwareAcceleration && (newVal.x || newVal.y || newVal.z)) {
        const str = [newVal.x || 0, newVal.y || 0, newVal.z || 0].map((val) => getValueAsType(val, px)).join(",");
        result += `translate3d(${str}) `;
        hasHardwareAcceleration = true;
      }
      for (const [key, value] of Object.entries(newVal)) {
        if (enableHardwareAcceleration && (key === "x" || key === "y" || key === "z"))
          continue;
        const valueType = getValueType(key);
        const valueAsType = getValueAsType(value, valueType);
        result += `${translateAlias[key] || key}(${valueAsType}) `;
      }
      if (enableHardwareAcceleration && !hasHardwareAcceleration)
        result += "translateZ(0px) ";
      transform.value = result.trim();
    },
    {
      immediate: true,
      deep: true
    }
  );
  return {
    state,
    transform
  };
}
const transformAxes = ["", "X", "Y", "Z"];
const order = ["perspective", "translate", "scale", "rotate", "skew"];
const transformProps = ["transformPerspective", "x", "y", "z"];
order.forEach((operationKey) => {
  transformAxes.forEach((axesKey) => {
    const key = operationKey + axesKey;
    transformProps.push(key);
  });
});
const transformPropSet = new Set(transformProps);
function isTransformProp(key) {
  return transformPropSet.has(key);
}
const transformOriginProps = /* @__PURE__ */ new Set(["originX", "originY", "originZ"]);
function isTransformOriginProp(key) {
  return transformOriginProps.has(key);
}
function splitValues(variant) {
  const transform = {};
  const style2 = {};
  Object.entries(variant).forEach(([key, value]) => {
    if (isTransformProp(key) || isTransformOriginProp(key))
      transform[key] = value;
    else
      style2[key] = value;
  });
  return { transform, style: style2 };
}
function variantToStyle(variant) {
  const { transform: _transform, style: _style } = splitValues(variant);
  const { transform } = reactiveTransform(_transform);
  const { style: style2 } = reactiveStyle(_style);
  if (transform.value)
    style2.value.transform = transform.value;
  return style2.value;
}
function useElementStyle(target, onInit) {
  let _cache;
  let _target;
  const { state, style: style2 } = reactiveStyle();
  usePermissiveTarget(target, (el) => {
    _target = el;
    for (const key of Object.keys(valueTypes)) {
      if (el.style[key] === null || el.style[key] === "" || isTransformProp(key) || isTransformOriginProp(key))
        continue;
      state[key] = el.style[key];
    }
    if (_cache) {
      Object.entries(_cache).forEach(([key, value]) => el.style[key] = value);
    }
    if (onInit)
      onInit(state);
  });
  watch(
    style2,
    (newVal) => {
      if (!_target) {
        _cache = newVal;
        return;
      }
      for (const key in newVal)
        _target.style[key] = newVal[key];
    },
    {
      immediate: true
    }
  );
  return {
    style: state
  };
}
function parseTransform(transform) {
  const transforms = transform.trim().split(/\) |\)/);
  if (transforms.length === 1)
    return {};
  const parseValues = (value) => {
    if (value.endsWith("px") || value.endsWith("deg"))
      return Number.parseFloat(value);
    if (Number.isNaN(Number(value)))
      return Number(value);
    return value;
  };
  return transforms.reduce((acc, transform2) => {
    if (!transform2)
      return acc;
    const [name, transformValue] = transform2.split("(");
    const valueArray = transformValue.split(",");
    const values = valueArray.map((val) => {
      return parseValues(val.endsWith(")") ? val.replace(")", "") : val.trim());
    });
    const value = values.length === 1 ? values[0] : values;
    return {
      ...acc,
      [name]: value
    };
  }, {});
}
function stateFromTransform(state, transform) {
  Object.entries(parseTransform(transform)).forEach(([key, value]) => {
    const axes = ["x", "y", "z"];
    if (key === "translate3d") {
      if (value === 0) {
        axes.forEach((axis) => state[axis] = 0);
        return;
      }
      value.forEach((axisValue, index) => state[axes[index]] = axisValue);
      return;
    }
    value = Number.parseFloat(`${value}`);
    if (key === "translateX") {
      state.x = value;
      return;
    }
    if (key === "translateY") {
      state.y = value;
      return;
    }
    if (key === "translateZ") {
      state.z = value;
      return;
    }
    state[key] = value;
  });
}
function useElementTransform(target, onInit) {
  let _cache;
  let _target;
  const { state, transform } = reactiveTransform();
  usePermissiveTarget(target, (el) => {
    _target = el;
    if (el.style.transform)
      stateFromTransform(state, el.style.transform);
    if (_cache)
      el.style.transform = _cache;
    if (onInit)
      onInit(state);
  });
  watch(
    transform,
    (newValue) => {
      if (!_target) {
        _cache = newValue;
        return;
      }
      _target.style.transform = newValue;
    },
    {
      immediate: true
    }
  );
  return {
    transform: state
  };
}
function objectEntries(obj) {
  return Object.entries(obj);
}
function useMotionProperties(target, defaultValues) {
  const motionProperties = reactive({});
  const apply = (values) => Object.entries(values).forEach(([key, value]) => motionProperties[key] = value);
  const { style: style2 } = useElementStyle(target, apply);
  const { transform } = useElementTransform(target, apply);
  watch(
    motionProperties,
    (newVal) => {
      objectEntries(newVal).forEach(([key, value]) => {
        const target2 = isTransformProp(key) ? transform : style2;
        if (target2[key] && target2[key] === value)
          return;
        target2[key] = value;
      });
    },
    {
      immediate: true,
      deep: true
    }
  );
  usePermissiveTarget(target, () => defaultValues);
  return {
    motionProperties,
    style: style2,
    transform
  };
}
function useMotionVariants(variants = {}) {
  const _variants = unref(variants);
  const variant = ref();
  const state = computed(() => {
    if (!variant.value)
      return;
    return _variants[variant.value];
  });
  return {
    state,
    variant
  };
}
function useMotion(target, variants = {}, options) {
  const { motionProperties } = useMotionProperties(target);
  const { variant, state } = useMotionVariants(variants);
  const controls = useMotionControls(motionProperties, variants);
  const instance = {
    target,
    variant,
    variants,
    state,
    motionProperties,
    ...controls
  };
  useMotionFeatures(instance, options);
  return instance;
}
const transitionKeys = ["delay", "duration"];
const directivePropsKeys = ["initial", "enter", "leave", "visible", "visible-once", "visibleOnce", "hovered", "tapped", "focused", ...transitionKeys];
function isTransitionKey(val) {
  return transitionKeys.includes(val);
}
function resolveVariants(node, variantsRef) {
  const target = node.props ? node.props : node.data && node.data.attrs ? node.data.attrs : {};
  if (target) {
    if (target.variants && isObject$1(target.variants)) {
      variantsRef.value = {
        ...variantsRef.value,
        ...target.variants
      };
    }
    for (let key of directivePropsKeys) {
      if (!target || !target[key])
        continue;
      if (isTransitionKey(key) && typeof target[key] === "number") {
        for (const variantKey of ["enter", "visible", "visibleOnce"]) {
          const variantConfig = variantsRef.value[variantKey];
          if (variantConfig == null)
            continue;
          variantConfig.transition ?? (variantConfig.transition = {});
          variantConfig.transition[key] = target[key];
        }
        continue;
      }
      if (isObject$1(target[key])) {
        const prop = target[key];
        if (key === "visible-once")
          key = "visibleOnce";
        variantsRef.value[key] = prop;
      }
    }
  }
}
function directive(variants, isPreset = false) {
  const register = (el, binding, node) => {
    const key = binding.value && typeof binding.value === "string" ? binding.value : node.key;
    if (key && motionState[key])
      motionState[key].stop();
    const variantsObject = isPreset ? structuredClone(toRaw(variants) || {}) : variants || {};
    const variantsRef = ref(variantsObject);
    if (typeof binding.value === "object")
      variantsRef.value = binding.value;
    resolveVariants(node, variantsRef);
    const motionOptions = { eventListeners: true, lifeCycleHooks: true, syncVariants: true, visibilityHooks: false };
    const motionInstance = useMotion(el, variantsRef, motionOptions);
    el.motionInstance = motionInstance;
    if (key)
      motionState[key] = motionInstance;
  };
  const mounted = (el, _binding, _node) => {
    el.motionInstance && registerVisibilityHooks(el.motionInstance);
  };
  return {
    created: register,
    mounted,
    getSSRProps(binding, node) {
      let { initial: bindingInitial } = binding.value || node && (node == null ? void 0 : node.props) || {};
      bindingInitial = unref(bindingInitial);
      const initial2 = defu({}, (variants == null ? void 0 : variants.initial) || {}, bindingInitial || {});
      if (!initial2 || Object.keys(initial2).length === 0)
        return;
      const style2 = variantToStyle(initial2);
      return {
        style: style2
      };
    }
  };
}
const fade = {
  initial: {
    opacity: 0
  },
  enter: {
    opacity: 1
  }
};
const fadeVisible = {
  initial: {
    opacity: 0
  },
  visible: {
    opacity: 1
  }
};
const fadeVisibleOnce = {
  initial: {
    opacity: 0
  },
  visibleOnce: {
    opacity: 1
  }
};
const pop = {
  initial: {
    scale: 0,
    opacity: 0
  },
  enter: {
    scale: 1,
    opacity: 1
  }
};
const popVisible = {
  initial: {
    scale: 0,
    opacity: 0
  },
  visible: {
    scale: 1,
    opacity: 1
  }
};
const popVisibleOnce = {
  initial: {
    scale: 0,
    opacity: 0
  },
  visibleOnce: {
    scale: 1,
    opacity: 1
  }
};
const rollLeft = {
  initial: {
    x: -100,
    rotate: 90,
    opacity: 0
  },
  enter: {
    x: 0,
    rotate: 0,
    opacity: 1
  }
};
const rollVisibleLeft = {
  initial: {
    x: -100,
    rotate: 90,
    opacity: 0
  },
  visible: {
    x: 0,
    rotate: 0,
    opacity: 1
  }
};
const rollVisibleOnceLeft = {
  initial: {
    x: -100,
    rotate: 90,
    opacity: 0
  },
  visibleOnce: {
    x: 0,
    rotate: 0,
    opacity: 1
  }
};
const rollRight = {
  initial: {
    x: 100,
    rotate: -90,
    opacity: 0
  },
  enter: {
    x: 0,
    rotate: 0,
    opacity: 1
  }
};
const rollVisibleRight = {
  initial: {
    x: 100,
    rotate: -90,
    opacity: 0
  },
  visible: {
    x: 0,
    rotate: 0,
    opacity: 1
  }
};
const rollVisibleOnceRight = {
  initial: {
    x: 100,
    rotate: -90,
    opacity: 0
  },
  visibleOnce: {
    x: 0,
    rotate: 0,
    opacity: 1
  }
};
const rollTop = {
  initial: {
    y: -100,
    rotate: -90,
    opacity: 0
  },
  enter: {
    y: 0,
    rotate: 0,
    opacity: 1
  }
};
const rollVisibleTop = {
  initial: {
    y: -100,
    rotate: -90,
    opacity: 0
  },
  visible: {
    y: 0,
    rotate: 0,
    opacity: 1
  }
};
const rollVisibleOnceTop = {
  initial: {
    y: -100,
    rotate: -90,
    opacity: 0
  },
  visibleOnce: {
    y: 0,
    rotate: 0,
    opacity: 1
  }
};
const rollBottom = {
  initial: {
    y: 100,
    rotate: 90,
    opacity: 0
  },
  enter: {
    y: 0,
    rotate: 0,
    opacity: 1
  }
};
const rollVisibleBottom = {
  initial: {
    y: 100,
    rotate: 90,
    opacity: 0
  },
  visible: {
    y: 0,
    rotate: 0,
    opacity: 1
  }
};
const rollVisibleOnceBottom = {
  initial: {
    y: 100,
    rotate: 90,
    opacity: 0
  },
  visibleOnce: {
    y: 0,
    rotate: 0,
    opacity: 1
  }
};
const slideLeft = {
  initial: {
    x: -100,
    opacity: 0
  },
  enter: {
    x: 0,
    opacity: 1
  }
};
const slideVisibleLeft = {
  initial: {
    x: -100,
    opacity: 0
  },
  visible: {
    x: 0,
    opacity: 1
  }
};
const slideVisibleOnceLeft = {
  initial: {
    x: -100,
    opacity: 0
  },
  visibleOnce: {
    x: 0,
    opacity: 1
  }
};
const slideRight = {
  initial: {
    x: 100,
    opacity: 0
  },
  enter: {
    x: 0,
    opacity: 1
  }
};
const slideVisibleRight = {
  initial: {
    x: 100,
    opacity: 0
  },
  visible: {
    x: 0,
    opacity: 1
  }
};
const slideVisibleOnceRight = {
  initial: {
    x: 100,
    opacity: 0
  },
  visibleOnce: {
    x: 0,
    opacity: 1
  }
};
const slideTop = {
  initial: {
    y: -100,
    opacity: 0
  },
  enter: {
    y: 0,
    opacity: 1
  }
};
const slideVisibleTop = {
  initial: {
    y: -100,
    opacity: 0
  },
  visible: {
    y: 0,
    opacity: 1
  }
};
const slideVisibleOnceTop = {
  initial: {
    y: -100,
    opacity: 0
  },
  visibleOnce: {
    y: 0,
    opacity: 1
  }
};
const slideBottom = {
  initial: {
    y: 100,
    opacity: 0
  },
  enter: {
    y: 0,
    opacity: 1
  }
};
const slideVisibleBottom = {
  initial: {
    y: 100,
    opacity: 0
  },
  visible: {
    y: 0,
    opacity: 1
  }
};
const slideVisibleOnceBottom = {
  initial: {
    y: 100,
    opacity: 0
  },
  visibleOnce: {
    y: 0,
    opacity: 1
  }
};
const presets = {
  __proto__: null,
  fade,
  fadeVisible,
  fadeVisibleOnce,
  pop,
  popVisible,
  popVisibleOnce,
  rollBottom,
  rollLeft,
  rollRight,
  rollTop,
  rollVisibleBottom,
  rollVisibleLeft,
  rollVisibleOnceBottom,
  rollVisibleOnceLeft,
  rollVisibleOnceRight,
  rollVisibleOnceTop,
  rollVisibleRight,
  rollVisibleTop,
  slideBottom,
  slideLeft,
  slideRight,
  slideTop,
  slideVisibleBottom,
  slideVisibleLeft,
  slideVisibleOnceBottom,
  slideVisibleOnceLeft,
  slideVisibleOnceRight,
  slideVisibleOnceTop,
  slideVisibleRight,
  slideVisibleTop
};
function slugify(str) {
  const a = "àáâäæãåāăąçćčđďèéêëēėęěğǵḧîïíīįìłḿñńǹňôöòóœøōõőṕŕřßśšşșťțûüùúūǘůűųẃẍÿýžźż·/_,:;";
  const b = "aaaaaaaaaacccddeeeeeeeegghiiiiiilmnnnnoooooooooprrsssssttuuuuuuuuuwxyyzzz------";
  const p = new RegExp(a.split("").join("|"), "g");
  return str.toString().replace(/[A-Z]/g, (s) => `-${s}`).toLowerCase().replace(/\s+/g, "-").replace(p, (c) => b.charAt(a.indexOf(c))).replace(/&/g, "-and-").replace(/[^\w\-]+/g, "").replace(/-{2,}/g, "-").replace(/^-+/, "").replace(/-+$/, "");
}
const CUSTOM_PRESETS = Symbol(
  ""
);
const MotionComponentProps = {
  // Preset to be loaded
  preset: {
    type: String,
    required: false
  },
  // Instance
  instance: {
    type: Object,
    required: false
  },
  // Variants
  variants: {
    type: Object,
    required: false
  },
  // Initial variant
  initial: {
    type: Object,
    required: false
  },
  // Lifecycle hooks variants
  enter: {
    type: Object,
    required: false
  },
  leave: {
    type: Object,
    required: false
  },
  // Intersection observer variants
  visible: {
    type: Object,
    required: false
  },
  visibleOnce: {
    type: Object,
    required: false
  },
  // Event listeners variants
  hovered: {
    type: Object,
    required: false
  },
  tapped: {
    type: Object,
    required: false
  },
  focused: {
    type: Object,
    required: false
  },
  // Helpers
  delay: {
    type: [Number, String],
    required: false
  },
  duration: {
    type: [Number, String],
    required: false
  }
};
function isObject(val) {
  return Object.prototype.toString.call(val) === "[object Object]";
}
function clone(v) {
  if (Array.isArray(v)) {
    return v.map(clone);
  }
  if (isObject(v)) {
    const res = {};
    for (const key in v) {
      res[key] = clone(v[key]);
    }
    return res;
  }
  return v;
}
function setupMotionComponent(props) {
  const instances = reactive({});
  const customPresets = inject(CUSTOM_PRESETS, {});
  const preset = computed(() => {
    if (props.preset == null) {
      return {};
    }
    if (customPresets != null && props.preset in customPresets) {
      return structuredClone(toRaw(customPresets)[props.preset]);
    }
    if (props.preset in presets) {
      return structuredClone(presets[props.preset]);
    }
    return {};
  });
  const propsConfig = computed(() => ({
    initial: props.initial,
    enter: props.enter,
    leave: props.leave,
    visible: props.visible,
    visibleOnce: props.visibleOnce,
    hovered: props.hovered,
    tapped: props.tapped,
    focused: props.focused
  }));
  function applyTransitionHelpers(config, values) {
    for (const transitionKey of ["delay", "duration"]) {
      if (values[transitionKey] == null)
        continue;
      const transitionValueParsed = Number.parseInt(
        values[transitionKey]
      );
      for (const variantKey of ["enter", "visible", "visibleOnce"]) {
        const variantConfig = config[variantKey];
        if (variantConfig == null)
          continue;
        variantConfig.transition ?? (variantConfig.transition = {});
        variantConfig.transition[transitionKey] = transitionValueParsed;
      }
    }
    return config;
  }
  const motionConfig = computed(() => {
    const config = defu(
      {},
      propsConfig.value,
      preset.value,
      props.variants || {}
    );
    return applyTransitionHelpers({ ...config }, props);
  });
  function setNodeInstance(node, index, style2) {
    var _a;
    node.props ?? (node.props = {});
    (_a = node.props).style ?? (_a.style = {});
    node.props.style = { ...node.props.style, ...style2 };
    const elementMotionConfig = applyTransitionHelpers(
      clone(motionConfig.value),
      node.props
    );
    node.props.onVnodeMounted = ({ el }) => {
      instances[index] = useMotion(
        el,
        elementMotionConfig
      );
    };
    node.props.onVnodeUpdated = ({ el }) => {
      const styles = variantToStyle(instances[index].state);
      for (const [key, val] of Object.entries(styles)) {
        el.style[key] = val;
      }
    };
    return node;
  }
  return {
    motionConfig,
    setNodeInstance
  };
}
const MotionComponent = defineComponent({
  name: "Motion",
  props: {
    ...MotionComponentProps,
    is: {
      type: [String, Object],
      default: "div"
    }
  },
  setup(props) {
    const slots = useSlots();
    const { motionConfig, setNodeInstance } = setupMotionComponent(props);
    return () => {
      const style2 = variantToStyle(motionConfig.value.initial || {});
      const node = h(props.is, void 0, slots);
      setNodeInstance(node, 0, style2);
      return node;
    };
  }
});
const MotionGroupComponent = defineComponent({
  name: "MotionGroup",
  props: {
    ...MotionComponentProps,
    is: {
      type: [String, Object],
      required: false
    }
  },
  setup(props) {
    const slots = useSlots();
    const { motionConfig, setNodeInstance } = setupMotionComponent(props);
    return () => {
      var _a;
      const style2 = variantToStyle(motionConfig.value.initial || {});
      const nodes = ((_a = slots.default) == null ? void 0 : _a.call(slots)) || [];
      for (let i = 0; i < nodes.length; i++) {
        const n = nodes[i];
        if (n.type === Fragment && Array.isArray(n.children)) {
          n.children.forEach(function setChildInstance(child, index) {
            if (child == null)
              return;
            if (Array.isArray(child)) {
              setChildInstance(child, index);
              return;
            }
            if (typeof child === "object") {
              setNodeInstance(child, index, style2);
            }
          });
        } else {
          setNodeInstance(n, i, style2);
        }
      }
      if (props.is) {
        return h(props.is, void 0, nodes);
      }
      return nodes;
    };
  }
});
const MotionPlugin = {
  install(app, options) {
    app.directive("motion", directive());
    if (!options || options && !options.excludePresets) {
      for (const key in presets) {
        const preset = presets[key];
        app.directive(`motion-${slugify(key)}`, directive(preset, true));
      }
    }
    if (options && options.directives) {
      for (const key in options.directives) {
        const variants = options.directives[key];
        if (!variants.initial && false) ;
        app.directive(`motion-${key}`, directive(variants, true));
      }
    }
    app.provide(CUSTOM_PRESETS, options == null ? void 0 : options.directives);
    app.component("Motion", MotionComponent);
    app.component("MotionGroup", MotionGroupComponent);
  }
};
const motion_F8atB0kBNE8FIgT_ajBXU_q0VzJ7X_J9WFqahA8C37U = /* @__PURE__ */ defineNuxtPlugin(
  (nuxtApp) => {
    const config = /* @__PURE__ */ useRuntimeConfig();
    nuxtApp.vueApp.use(MotionPlugin, config.public.motion);
  }
);
const STATE_KEY = "viewportState";
function createViewportManager(options, state) {
  options = toRef(options);
  const breakpoint = computed({
    get() {
      return state.value || options.value.fallbackBreakpoint;
    },
    set(newBreakpoint) {
      state.value = newBreakpoint;
    }
  });
  const queries = computed(() => {
    const delta = 0.1;
    const breakpoints = options.value.breakpoints || {};
    const breakpointsKeys = Object.keys(breakpoints).sort((a, b) => breakpoints[a] - breakpoints[b]);
    const output = {};
    let i = breakpointsKeys.length;
    while (i--) {
      const currentKey = breakpointsKeys[i];
      const size = breakpoints[currentKey];
      const nextSize = breakpoints[breakpointsKeys[i + 1]];
      const prevSize = breakpoints[breakpointsKeys[i - 1]];
      let mediaQuery = "";
      if (options.value.feature === "minWidth") {
        if (i > 0) {
          mediaQuery = `(min-width: ${size}px)`;
        } else {
          mediaQuery = "(min-width: 1px)";
        }
        if (nextSize) {
          mediaQuery += ` and (max-width: ${nextSize - delta}px)`;
        }
      } else {
        mediaQuery = `(max-width: ${size}px)`;
        if (prevSize) {
          mediaQuery = `(min-width: ${prevSize + delta}px) and ${mediaQuery}`;
        }
      }
      output[currentKey] = {
        mediaQuery,
        size
      };
    }
    return output;
  });
  const queriesKeys = computed(() => Object.keys(queries.value));
  return {
    breakpoint,
    breakpointValue,
    isGreaterThan,
    isGreaterOrEquals,
    isLessThan,
    isLessOrEquals,
    match,
    matches,
    queries
  };
  function breakpointValue(searchBreakpoint) {
    const breakpoints = toValue$1(options).breakpoints || {};
    return breakpoints[searchBreakpoint];
  }
  function isGreaterThan(searchBreakpoint) {
    const currentIndex = queriesKeys.value.indexOf(breakpoint.value);
    const breakpointIndex = queriesKeys.value.indexOf(searchBreakpoint);
    if (breakpointIndex === -1) {
      return false;
    }
    return breakpointIndex > currentIndex;
  }
  function isGreaterOrEquals(searchBreakpoint) {
    return isGreaterThan(searchBreakpoint) || match(searchBreakpoint);
  }
  function isLessThan(searchBreakpoint) {
    const currentIndex = queriesKeys.value.indexOf(breakpoint.value);
    const breakpointIndex = queriesKeys.value.indexOf(searchBreakpoint);
    if (breakpointIndex === -1) {
      return false;
    }
    return breakpointIndex < currentIndex;
  }
  function isLessOrEquals(searchBreakpoint) {
    return isLessThan(searchBreakpoint) || match(searchBreakpoint);
  }
  function match(breakpointToMatch) {
    return breakpoint.value === breakpointToMatch;
  }
  function matches(...breakpointsToMatch) {
    return breakpointsToMatch.includes(breakpoint.value);
  }
}
const COOKIE_EXPIRES_IN_DAYS = 365;
const DEFAULT_OPTIONS = {
  breakpoints: {
    desktop: 1024,
    desktopMedium: 1280,
    desktopWide: 1600,
    mobile: 320,
    mobileMedium: 375,
    mobileWide: 425,
    tablet: 768
  },
  cookie: {
    expires: COOKIE_EXPIRES_IN_DAYS,
    name: "viewport",
    path: "/",
    sameSite: "Strict",
    secure: true
  },
  defaultBreakpoints: {
    desktop: "desktop",
    mobile: "mobile",
    tablet: "tablet"
  },
  fallbackBreakpoint: "desktop",
  feature: "minWidth"
};
async function detectBreakpoint(options, input) {
  var _a;
  try {
    if (input.cookie && input.cookie in options.breakpoints) {
      return input.cookie;
    }
    const userAgent = (_a = input.headers) == null ? void 0 : _a["user-agent"];
    if (!userAgent) {
      return options.fallbackBreakpoint;
    }
    let deviceType = "";
    if (input.headers) {
      if (userAgent === "Amazon CloudFront") {
        const types = {
          "cloudfront-is-android-viewer": "mobile",
          "cloudfront-is-desktop-viewer": "desktop",
          "cloudfront-is-ios-viewer": "mobile",
          "cloudfront-is-mobile-viewer": "mobile",
          "cloudfront-is-smarttv-viewer": "tv",
          "cloudfront-is-tablet-viewer": "tablet"
        };
        for (const key in types) {
          if (input.headers[key] === "true") {
            deviceType = types[key];
            break;
          }
        }
      } else if (input.headers["cf-device-type"]) {
        deviceType = input.headers["cf-device-type"];
      }
    }
    if (!deviceType) {
      const { default: Bowser } = await import(
        /* webpackChunkName: "bowser" */
        'bowser'
      );
      const parser = Bowser.getParser(userAgent);
      deviceType = parser.getPlatformType();
    }
    if (deviceType in options.defaultBreakpoints) {
      return options.defaultBreakpoints[deviceType];
    }
    return options.fallbackBreakpoint;
  } catch (error) {
    console.error(error);
    return options.fallbackBreakpoint;
  }
}
function parseCookie(input) {
  if (!input.length) {
    return {};
  }
  return Object.fromEntries(input.split(/; */).map((cookie) => cookie.split("=", 2)));
}
function extendOptions(options = {}, extendFrom = DEFAULT_OPTIONS) {
  return {
    ...extendFrom,
    ...options,
    cookie: {
      ...extendFrom.cookie,
      ...options.cookie
    }
  };
}
const globalOptions = { "breakpoints": { "desktop": 1024, "desktopMedium": 1280, "desktopWide": 1600, "mobile": 320, "mobileMedium": 375, "mobileWide": 425, "tablet": 768 }, "cookie": { "expires": 365, "name": "viewport", "path": "/", "sameSite": "Strict", "secure": true }, "defaultBreakpoints": { "desktop": "desktop", "mobile": "mobile", "tablet": "tablet" }, "fallbackBreakpoint": "desktop", "feature": "minWidth" };
function useViewportOptions() {
  const route = useRoute();
  return computed(() => extendOptions(route.meta.viewport, globalOptions));
}
const plugin_server_IUyhGOnRXEptzJ0Pnw9GNDmvDf1veDMvYBqcZhjs6eY = /* @__PURE__ */ defineNuxtPlugin(async (nuxtApp) => {
  var _a, _b, _c;
  let __temp, __restore;
  const viewportOptions = useViewportOptions();
  const state = useState(STATE_KEY, "$fgGnBVmjMO");
  const manager = createViewportManager(viewportOptions, state);
  let cookie = "";
  const headers = (_c = (_b = (_a = nuxtApp == null ? void 0 : nuxtApp.ssrContext) == null ? void 0 : _a.event) == null ? void 0 : _b.req) == null ? void 0 : _c.headers;
  if (headers != null) {
    cookie = headers.cookie;
    headers["user-agent"];
  }
  if (typeof cookie !== "string") {
    cookie = "";
  }
  state.value = ([__temp, __restore] = executeAsync(() => {
    var _a2;
    return detectBreakpoint(viewportOptions.value, {
      cookie: ((_a2 = viewportOptions.value.cookie) == null ? void 0 : _a2.name) ? parseCookie(cookie)[viewportOptions.value.cookie.name] : void 0,
      headers
    });
  }), __temp = await __temp, __restore(), __temp);
  return nuxtApp.provide("viewport", manager);
});
const element_plus_teleports_plugin_3k7A_fjEiCzFRl6aN3qftblOS_EZCmhIb_4gXrhvbuY = /* @__PURE__ */ defineNuxtPlugin((nuxtApp) => {
  nuxtApp.hook("app:rendered", (ctx) => {
    var _a;
    if ((_a = ctx.ssrContext) == null ? void 0 : _a.teleports) {
      ctx.ssrContext.teleports = renderTeleports(ctx.ssrContext.teleports);
    }
  });
});
function renderTeleports(teleports) {
  const body = Object.entries(teleports).reduce((all, [key, value]) => {
    if (key.startsWith("#el-popper-container-") || [].includes(key)) {
      return `${all}<div id="${key.slice(1)}">${value}</div>`;
    }
    return all;
  }, teleports.body || "");
  return { ...teleports, body };
}
var __defProp$9 = Object.defineProperty;
var __defProps$6 = Object.defineProperties;
var __getOwnPropDescs$6 = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols$b = Object.getOwnPropertySymbols;
var __hasOwnProp$b = Object.prototype.hasOwnProperty;
var __propIsEnum$b = Object.prototype.propertyIsEnumerable;
var __defNormalProp$9 = (obj, key, value) => key in obj ? __defProp$9(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$9 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$b.call(b, prop))
      __defNormalProp$9(a, prop, b[prop]);
  if (__getOwnPropSymbols$b)
    for (var prop of __getOwnPropSymbols$b(b)) {
      if (__propIsEnum$b.call(b, prop))
        __defNormalProp$9(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps$6 = (a, b) => __defProps$6(a, __getOwnPropDescs$6(b));
function computedEager(fn, options) {
  var _a2;
  const result = shallowRef();
  watchEffect(() => {
    result.value = fn();
  }, __spreadProps$6(__spreadValues$9({}, options), {
    flush: (_a2 = void 0) != null ? _a2 : "sync"
  }));
  return readonly(result);
}
const isClient = false;
const isDef = (val) => typeof val !== "undefined";
const isFunction = (val) => typeof val === "function";
const isString = (val) => typeof val === "string";
const noop = () => {
};
function resolveUnref(r) {
  return typeof r === "function" ? r() : unref(r);
}
function createFilterWrapper(filter2, fn) {
  function wrapper(...args) {
    return new Promise((resolve2, reject) => {
      Promise.resolve(filter2(() => fn.apply(this, args), { fn, thisArg: this, args })).then(resolve2).catch(reject);
    });
  }
  return wrapper;
}
function debounceFilter(ms, options = {}) {
  let timer;
  let maxTimer;
  let lastRejector = noop;
  const _clearTimeout = (timer2) => {
    clearTimeout(timer2);
    lastRejector();
    lastRejector = noop;
  };
  const filter2 = (invoke2) => {
    const duration = resolveUnref(ms);
    const maxDuration = resolveUnref(options.maxWait);
    if (timer)
      _clearTimeout(timer);
    if (duration <= 0 || maxDuration !== void 0 && maxDuration <= 0) {
      if (maxTimer) {
        _clearTimeout(maxTimer);
        maxTimer = null;
      }
      return Promise.resolve(invoke2());
    }
    return new Promise((resolve2, reject) => {
      lastRejector = options.rejectOnCancel ? reject : resolve2;
      if (maxDuration && !maxTimer) {
        maxTimer = setTimeout(() => {
          if (timer)
            _clearTimeout(timer);
          maxTimer = null;
          resolve2(invoke2());
        }, maxDuration);
      }
      timer = setTimeout(() => {
        if (maxTimer)
          _clearTimeout(maxTimer);
        maxTimer = null;
        resolve2(invoke2());
      }, duration);
    });
  };
  return filter2;
}
function identity(arg) {
  return arg;
}
function tryOnScopeDispose(fn) {
  if (getCurrentScope()) {
    onScopeDispose(fn);
    return true;
  }
  return false;
}
function useDebounceFn(fn, ms = 200, options = {}) {
  return createFilterWrapper(debounceFilter(ms, options), fn);
}
function refDebounced(value, ms = 200, options = {}) {
  const debounced = ref(value.value);
  const updater = useDebounceFn(() => {
    debounced.value = value.value;
  }, ms, options);
  watch(value, () => updater());
  return debounced;
}
function tryOnMounted(fn, sync2 = true) {
  if (getCurrentInstance())
    ;
  else if (sync2)
    fn();
  else
    nextTick(fn);
}
function useTimeoutFn(cb, interval, options = {}) {
  const {
    immediate = true
  } = options;
  const isPending = ref(false);
  let timer = null;
  function clear() {
    if (timer) {
      clearTimeout(timer);
      timer = null;
    }
  }
  function stop() {
    isPending.value = false;
    clear();
  }
  function start(...args) {
    clear();
    isPending.value = true;
    timer = setTimeout(() => {
      isPending.value = false;
      timer = null;
      cb(...args);
    }, resolveUnref(interval));
  }
  if (immediate) {
    isPending.value = true;
  }
  tryOnScopeDispose(stop);
  return {
    isPending: readonly(isPending),
    start,
    stop
  };
}
function unrefElement(elRef) {
  var _a;
  const plain = resolveUnref(elRef);
  return (_a = plain == null ? void 0 : plain.$el) != null ? _a : plain;
}
const defaultWindow = void 0;
const defaultDocument = void 0;
function useEventListener(...args) {
  let target;
  let events2;
  let listeners;
  let options;
  if (isString(args[0]) || Array.isArray(args[0])) {
    [events2, listeners, options] = args;
    target = defaultWindow;
  } else {
    [target, events2, listeners, options] = args;
  }
  if (!target)
    return noop;
  if (!Array.isArray(events2))
    events2 = [events2];
  if (!Array.isArray(listeners))
    listeners = [listeners];
  const cleanups = [];
  const cleanup = () => {
    cleanups.forEach((fn) => fn());
    cleanups.length = 0;
  };
  const register = (el, event, listener, options2) => {
    el.addEventListener(event, listener, options2);
    return () => el.removeEventListener(event, listener, options2);
  };
  const stopWatch = watch(() => [unrefElement(target), resolveUnref(options)], ([el, options2]) => {
    cleanup();
    if (!el)
      return;
    cleanups.push(...events2.flatMap((event) => {
      return listeners.map((listener) => register(el, event, listener, options2));
    }));
  }, { immediate: true, flush: "post" });
  const stop = () => {
    stopWatch();
    cleanup();
  };
  tryOnScopeDispose(stop);
  return stop;
}
function onClickOutside(target, handler, options = {}) {
  const { window: window2 = defaultWindow, ignore = [], capture = true, detectIframe = false } = options;
  if (!window2)
    return;
  let shouldListen = true;
  const shouldIgnore = (event) => {
    return ignore.some((target2) => {
      if (typeof target2 === "string") {
        return Array.from(window2.document.querySelectorAll(target2)).some((el) => el === event.target || event.composedPath().includes(el));
      } else {
        const el = unrefElement(target2);
        return el && (event.target === el || event.composedPath().includes(el));
      }
    });
  };
  const listener = (event) => {
    const el = unrefElement(target);
    if (!el || el === event.target || event.composedPath().includes(el))
      return;
    if (event.detail === 0)
      shouldListen = !shouldIgnore(event);
    if (!shouldListen) {
      shouldListen = true;
      return;
    }
    handler(event);
  };
  const cleanup = [
    useEventListener(window2, "click", listener, { passive: true, capture }),
    useEventListener(window2, "pointerdown", (e) => {
      const el = unrefElement(target);
      if (el)
        shouldListen = !e.composedPath().includes(el) && !shouldIgnore(e);
    }, { passive: true }),
    detectIframe && useEventListener(window2, "blur", (event) => {
      var _a;
      const el = unrefElement(target);
      if (((_a = window2.document.activeElement) == null ? void 0 : _a.tagName) === "IFRAME" && !(el == null ? void 0 : el.contains(window2.document.activeElement)))
        handler(event);
    })
  ].filter(Boolean);
  const stop = () => cleanup.forEach((fn) => fn());
  return stop;
}
function useSupported(callback, sync2 = false) {
  const isSupported = ref();
  const update = () => isSupported.value = Boolean(callback());
  update();
  tryOnMounted(update, sync2);
  return isSupported;
}
function cloneFnJSON(source) {
  return JSON.parse(JSON.stringify(source));
}
const _global = typeof globalThis !== "undefined" ? globalThis : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
const globalKey = "__vueuse_ssr_handlers__";
_global[globalKey] = _global[globalKey] || {};
function useDocumentVisibility({ document: document2 = defaultDocument } = {}) {
  if (!document2)
    return ref("visible");
  const visibility = ref(document2.visibilityState);
  useEventListener(document2, "visibilitychange", () => {
    visibility.value = document2.visibilityState;
  });
  return visibility;
}
var __getOwnPropSymbols$g = Object.getOwnPropertySymbols;
var __hasOwnProp$g = Object.prototype.hasOwnProperty;
var __propIsEnum$g = Object.prototype.propertyIsEnumerable;
var __objRest$2 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp$g.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols$g)
    for (var prop of __getOwnPropSymbols$g(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum$g.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
function useResizeObserver(target, callback, options = {}) {
  const _a = options, { window: window2 = defaultWindow } = _a, observerOptions = __objRest$2(_a, ["window"]);
  let observer;
  const isSupported = useSupported(() => window2 && "ResizeObserver" in window2);
  const cleanup = () => {
    if (observer) {
      observer.disconnect();
      observer = void 0;
    }
  };
  const stopWatch = watch(() => unrefElement(target), (el) => {
    cleanup();
    if (isSupported.value && window2 && el) {
      observer = new ResizeObserver(callback);
      observer.observe(el, observerOptions);
    }
  }, { immediate: true, flush: "post" });
  const stop = () => {
    cleanup();
    stopWatch();
  };
  tryOnScopeDispose(stop);
  return {
    isSupported,
    stop
  };
}
var __getOwnPropSymbols$8 = Object.getOwnPropertySymbols;
var __hasOwnProp$8 = Object.prototype.hasOwnProperty;
var __propIsEnum$8 = Object.prototype.propertyIsEnumerable;
var __objRest$1 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp$8.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols$8)
    for (var prop of __getOwnPropSymbols$8(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum$8.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
function useMutationObserver(target, callback, options = {}) {
  const _a = options, { window: window2 = defaultWindow } = _a, mutationOptions = __objRest$1(_a, ["window"]);
  let observer;
  const isSupported = useSupported(() => window2 && "MutationObserver" in window2);
  const cleanup = () => {
    if (observer) {
      observer.disconnect();
      observer = void 0;
    }
  };
  const stopWatch = watch(() => unrefElement(target), (el) => {
    cleanup();
    if (isSupported.value && window2 && el) {
      observer = new MutationObserver(callback);
      observer.observe(el, mutationOptions);
    }
  }, { immediate: true });
  const stop = () => {
    cleanup();
    stopWatch();
  };
  tryOnScopeDispose(stop);
  return {
    isSupported,
    stop
  };
}
var SwipeDirection;
(function(SwipeDirection2) {
  SwipeDirection2["UP"] = "UP";
  SwipeDirection2["RIGHT"] = "RIGHT";
  SwipeDirection2["DOWN"] = "DOWN";
  SwipeDirection2["LEFT"] = "LEFT";
  SwipeDirection2["NONE"] = "NONE";
})(SwipeDirection || (SwipeDirection = {}));
var __defProp = Object.defineProperty;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
const _TransitionPresets = {
  easeInSine: [0.12, 0, 0.39, 0],
  easeOutSine: [0.61, 1, 0.88, 1],
  easeInOutSine: [0.37, 0, 0.63, 1],
  easeInQuad: [0.11, 0, 0.5, 0],
  easeOutQuad: [0.5, 1, 0.89, 1],
  easeInOutQuad: [0.45, 0, 0.55, 1],
  easeInCubic: [0.32, 0, 0.67, 0],
  easeOutCubic: [0.33, 1, 0.68, 1],
  easeInOutCubic: [0.65, 0, 0.35, 1],
  easeInQuart: [0.5, 0, 0.75, 0],
  easeOutQuart: [0.25, 1, 0.5, 1],
  easeInOutQuart: [0.76, 0, 0.24, 1],
  easeInQuint: [0.64, 0, 0.78, 0],
  easeOutQuint: [0.22, 1, 0.36, 1],
  easeInOutQuint: [0.83, 0, 0.17, 1],
  easeInExpo: [0.7, 0, 0.84, 0],
  easeOutExpo: [0.16, 1, 0.3, 1],
  easeInOutExpo: [0.87, 0, 0.13, 1],
  easeInCirc: [0.55, 0, 1, 0.45],
  easeOutCirc: [0, 0.55, 0.45, 1],
  easeInOutCirc: [0.85, 0, 0.15, 1],
  easeInBack: [0.36, 0, 0.66, -0.56],
  easeOutBack: [0.34, 1.56, 0.64, 1],
  easeInOutBack: [0.68, -0.6, 0.32, 1.6]
};
__spreadValues({
  linear: identity
}, _TransitionPresets);
function useVModel(props, key, emit, options = {}) {
  var _a, _b, _c;
  const {
    clone: clone2 = false,
    passive = false,
    eventName,
    deep = false,
    defaultValue
  } = options;
  const vm = getCurrentInstance();
  const _emit = (vm == null ? void 0 : vm.emit) || ((_a = vm == null ? void 0 : vm.$emit) == null ? void 0 : _a.bind(vm)) || ((_c = (_b = vm == null ? void 0 : vm.proxy) == null ? void 0 : _b.$emit) == null ? void 0 : _c.bind(vm == null ? void 0 : vm.proxy));
  let event = eventName;
  event = eventName || event || `update:${key.toString()}`;
  const cloneFn = (val) => !clone2 ? val : isFunction(clone2) ? clone2(val) : cloneFnJSON(val);
  const getValue2 = () => isDef(props[key]) ? cloneFn(props[key]) : defaultValue;
  if (passive) {
    const initialValue = getValue2();
    const proxy = ref(initialValue);
    watch(() => props[key], (v) => proxy.value = cloneFn(v));
    watch(proxy, (v) => {
      if (v !== props[key] || deep)
        _emit(event, v);
    }, { deep });
    return proxy;
  } else {
    return computed({
      get() {
        return getValue2();
      },
      set(value) {
        _emit(event, value);
      }
    });
  }
}
function useWindowFocus({ window: window2 = defaultWindow } = {}) {
  if (!window2)
    return ref(false);
  const focused = ref(window2.document.hasFocus());
  useEventListener(window2, "blur", () => {
    focused.value = false;
  });
  useEventListener(window2, "focus", () => {
    focused.value = true;
  });
  return focused;
}
const defaultNamespace = "el";
const statePrefix = "is-";
const _bem = (namespace, block, blockSuffix, element, modifier) => {
  let cls = `${namespace}-${block}`;
  if (blockSuffix) {
    cls += `-${blockSuffix}`;
  }
  if (element) {
    cls += `__${element}`;
  }
  if (modifier) {
    cls += `--${modifier}`;
  }
  return cls;
};
const namespaceContextKey = Symbol("namespaceContextKey");
const useGetDerivedNamespace = (namespaceOverrides) => {
  const derivedNamespace = getCurrentInstance() ? inject(namespaceContextKey, ref(defaultNamespace)) : ref(defaultNamespace);
  const namespace = computed(() => {
    return unref(derivedNamespace) || defaultNamespace;
  });
  return namespace;
};
const useNamespace = (block, namespaceOverrides) => {
  const namespace = useGetDerivedNamespace();
  const b = (blockSuffix = "") => _bem(namespace.value, block, blockSuffix, "", "");
  const e = (element) => element ? _bem(namespace.value, block, "", element, "") : "";
  const m = (modifier) => modifier ? _bem(namespace.value, block, "", "", modifier) : "";
  const be = (blockSuffix, element) => blockSuffix && element ? _bem(namespace.value, block, blockSuffix, element, "") : "";
  const em = (element, modifier) => element && modifier ? _bem(namespace.value, block, "", element, modifier) : "";
  const bm = (blockSuffix, modifier) => blockSuffix && modifier ? _bem(namespace.value, block, blockSuffix, "", modifier) : "";
  const bem = (blockSuffix, element, modifier) => blockSuffix && element && modifier ? _bem(namespace.value, block, blockSuffix, element, modifier) : "";
  const is = (name, ...args) => {
    const state = args.length >= 1 ? args[0] : true;
    return name && state ? `${statePrefix}${name}` : "";
  };
  const cssVar = (object) => {
    const styles = {};
    for (const key in object) {
      if (object[key]) {
        styles[`--${namespace.value}-${key}`] = object[key];
      }
    }
    return styles;
  };
  const cssVarBlock = (object) => {
    const styles = {};
    for (const key in object) {
      if (object[key]) {
        styles[`--${namespace.value}-${block}-${key}`] = object[key];
      }
    }
    return styles;
  };
  const cssVarName = (name) => `--${namespace.value}-${name}`;
  const cssVarBlockName = (name) => `--${namespace.value}-${block}-${name}`;
  return {
    namespace,
    b,
    e,
    m,
    be,
    em,
    bm,
    bem,
    is,
    cssVar,
    cssVarName,
    cssVarBlock,
    cssVarBlockName
  };
};
class ElementPlusError extends Error {
  constructor(m) {
    super(m);
    this.name = "ElementPlusError";
  }
}
function throwError(scope, m) {
  throw new ElementPlusError(`[${scope}] ${m}`);
}
function debugWarn(scope, message) {
}
const defaultIdInjection = {
  prefix: Math.floor(Math.random() * 1e4),
  current: 0
};
const ID_INJECTION_KEY = Symbol("elIdInjection");
const useIdInjection = () => {
  return getCurrentInstance() ? inject(ID_INJECTION_KEY, defaultIdInjection) : defaultIdInjection;
};
const useId = (deterministicId) => {
  const idInjection = useIdInjection();
  const namespace = useGetDerivedNamespace();
  const idRef = computedEager(() => unref(deterministicId) || `${namespace.value}-id-${idInjection.prefix}-${idInjection.current++}`);
  return idRef;
};
const isUndefined = (val) => val === void 0;
const isBoolean = (val) => typeof val === "boolean";
const isNumber = (val) => typeof val === "number";
const isElement = (e) => {
  if (typeof Element === "undefined")
    return false;
  return e instanceof Element;
};
const isPropAbsent = (prop) => isNil(prop);
const isStringNumber = (val) => {
  if (!isString$1(val)) {
    return false;
  }
  return !Number.isNaN(Number(val));
};
const initial = {
  current: 0
};
const zIndex = ref(0);
const defaultInitialZIndex = 2e3;
const ZINDEX_INJECTION_KEY = Symbol("elZIndexContextKey");
const zIndexContextKey = Symbol("zIndexContextKey");
const useZIndex = (zIndexOverrides) => {
  const increasingInjection = getCurrentInstance() ? inject(ZINDEX_INJECTION_KEY, initial) : initial;
  const zIndexInjection = getCurrentInstance() ? inject(zIndexContextKey, void 0) : void 0;
  const initialZIndex = computed(() => {
    const zIndexFromInjection = unref(zIndexInjection);
    return isNumber(zIndexFromInjection) ? zIndexFromInjection : defaultInitialZIndex;
  });
  const currentZIndex = computed(() => initialZIndex.value + zIndex.value);
  const nextZIndex = () => {
    increasingInjection.current++;
    zIndex.value = increasingInjection.current;
    return currentZIndex.value;
  };
  if (!inject(ZINDEX_INJECTION_KEY)) ;
  return {
    initialZIndex,
    currentZIndex,
    nextZIndex
  };
};
const element_plus_injection_plugin_LfLkpoHjV8s4Q4lRVuq_y_LbzJB5vFvehZzxqpiP_nk = /* @__PURE__ */ defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.provide(ID_INJECTION_KEY, { "prefix": 1024, "current": 0 }).provide(ZINDEX_INJECTION_KEY, { "current": 0 });
});
const configProviderContextKey = Symbol();
var English = {
  name: "en",
  el: {
    breadcrumb: {
      label: "Breadcrumb"
    },
    colorpicker: {
      confirm: "OK",
      clear: "Clear",
      defaultLabel: "color picker",
      description: "current color is {color}. press enter to select a new color.",
      alphaLabel: "pick alpha value"
    },
    datepicker: {
      now: "Now",
      today: "Today",
      cancel: "Cancel",
      clear: "Clear",
      confirm: "OK",
      dateTablePrompt: "Use the arrow keys and enter to select the day of the month",
      monthTablePrompt: "Use the arrow keys and enter to select the month",
      yearTablePrompt: "Use the arrow keys and enter to select the year",
      selectedDate: "Selected date",
      selectDate: "Select date",
      selectTime: "Select time",
      startDate: "Start Date",
      startTime: "Start Time",
      endDate: "End Date",
      endTime: "End Time",
      prevYear: "Previous Year",
      nextYear: "Next Year",
      prevMonth: "Previous Month",
      nextMonth: "Next Month",
      year: "",
      month1: "January",
      month2: "February",
      month3: "March",
      month4: "April",
      month5: "May",
      month6: "June",
      month7: "July",
      month8: "August",
      month9: "September",
      month10: "October",
      month11: "November",
      month12: "December",
      week: "week",
      weeks: {
        sun: "Sun",
        mon: "Mon",
        tue: "Tue",
        wed: "Wed",
        thu: "Thu",
        fri: "Fri",
        sat: "Sat"
      },
      weeksFull: {
        sun: "Sunday",
        mon: "Monday",
        tue: "Tuesday",
        wed: "Wednesday",
        thu: "Thursday",
        fri: "Friday",
        sat: "Saturday"
      },
      months: {
        jan: "Jan",
        feb: "Feb",
        mar: "Mar",
        apr: "Apr",
        may: "May",
        jun: "Jun",
        jul: "Jul",
        aug: "Aug",
        sep: "Sep",
        oct: "Oct",
        nov: "Nov",
        dec: "Dec"
      }
    },
    inputNumber: {
      decrease: "decrease number",
      increase: "increase number"
    },
    select: {
      loading: "Loading",
      noMatch: "No matching data",
      noData: "No data",
      placeholder: "Select"
    },
    mention: {
      loading: "Loading"
    },
    dropdown: {
      toggleDropdown: "Toggle Dropdown"
    },
    cascader: {
      noMatch: "No matching data",
      loading: "Loading",
      placeholder: "Select",
      noData: "No data"
    },
    pagination: {
      goto: "Go to",
      pagesize: "/page",
      total: "Total {total}",
      pageClassifier: "",
      page: "Page",
      prev: "Go to previous page",
      next: "Go to next page",
      currentPage: "page {pager}",
      prevPages: "Previous {pager} pages",
      nextPages: "Next {pager} pages",
      deprecationWarning: "Deprecated usages detected, please refer to the el-pagination documentation for more details"
    },
    dialog: {
      close: "Close this dialog"
    },
    drawer: {
      close: "Close this dialog"
    },
    messagebox: {
      title: "Message",
      confirm: "OK",
      cancel: "Cancel",
      error: "Illegal input",
      close: "Close this dialog"
    },
    upload: {
      deleteTip: "press delete to remove",
      delete: "Delete",
      preview: "Preview",
      continue: "Continue"
    },
    slider: {
      defaultLabel: "slider between {min} and {max}",
      defaultRangeStartLabel: "pick start value",
      defaultRangeEndLabel: "pick end value"
    },
    table: {
      emptyText: "No Data",
      confirmFilter: "Confirm",
      resetFilter: "Reset",
      clearFilter: "All",
      sumText: "Sum"
    },
    tour: {
      next: "Next",
      previous: "Previous",
      finish: "Finish"
    },
    tree: {
      emptyText: "No Data"
    },
    transfer: {
      noMatch: "No matching data",
      noData: "No data",
      titles: ["List 1", "List 2"],
      filterPlaceholder: "Enter keyword",
      noCheckedFormat: "{total} items",
      hasCheckedFormat: "{checked}/{total} checked"
    },
    image: {
      error: "FAILED"
    },
    pageHeader: {
      title: "Back"
    },
    popconfirm: {
      confirmButtonText: "Yes",
      cancelButtonText: "No"
    },
    carousel: {
      leftArrow: "Carousel arrow left",
      rightArrow: "Carousel arrow right",
      indicator: "Carousel switch to index {index}"
    }
  }
};
const buildTranslator = (locale) => (path, option) => translate(path, option, unref(locale));
const translate = (path, option, locale) => get(locale, path, path).replace(/\{(\w+)\}/g, (_, key) => {
  var _a;
  return `${(_a = option == null ? void 0 : option[key]) != null ? _a : `{${key}}`}`;
});
const buildLocaleContext = (locale) => {
  const lang = computed(() => unref(locale).name);
  const localeRef = isRef(locale) ? locale : ref(locale);
  return {
    lang,
    locale: localeRef,
    t: buildTranslator(locale)
  };
};
const localeContextKey = Symbol("localeContextKey");
const useLocale = (localeOverrides) => {
  const locale = inject(localeContextKey, ref());
  return buildLocaleContext(computed(() => locale.value || English));
};
const epPropKey = "__epPropKey";
const definePropType = (val) => val;
const isEpProp = (val) => isObject$2(val) && !!val[epPropKey];
const buildProp = (prop, key) => {
  if (!isObject$2(prop) || isEpProp(prop))
    return prop;
  const { values, required, default: defaultValue, type, validator } = prop;
  const _validator = values || validator ? (val) => {
    let valid = false;
    let allowedValues = [];
    if (values) {
      allowedValues = Array.from(values);
      if (hasOwn(prop, "default")) {
        allowedValues.push(defaultValue);
      }
      valid || (valid = allowedValues.includes(val));
    }
    if (validator)
      valid || (valid = validator(val));
    if (!valid && allowedValues.length > 0) {
      const allowValuesText = [...new Set(allowedValues)].map((value) => JSON.stringify(value)).join(", ");
      warn(`Invalid prop: validation failed${key ? ` for prop "${key}"` : ""}. Expected one of [${allowValuesText}], got value ${JSON.stringify(val)}.`);
    }
    return valid;
  } : void 0;
  const epProp = {
    type,
    required: !!required,
    validator: _validator,
    [epPropKey]: true
  };
  if (hasOwn(prop, "default"))
    epProp.default = defaultValue;
  return epProp;
};
const buildProps = (props) => fromPairs(Object.entries(props).map(([key, option]) => [
  key,
  buildProp(option, key)
]));
const componentSizes = ["", "default", "small", "large"];
const useSizeProp = buildProp({
  type: String,
  values: componentSizes,
  required: false
});
const SIZE_INJECTION_KEY = Symbol("size");
const useGlobalSize = () => {
  const injectedSize = inject(SIZE_INJECTION_KEY, {});
  return computed(() => {
    return unref(injectedSize.size) || "";
  });
};
const emptyValuesContextKey = Symbol("emptyValuesContextKey");
const DEFAULT_EMPTY_VALUES = ["", void 0, null];
const DEFAULT_VALUE_ON_CLEAR = void 0;
const useEmptyValuesProps = buildProps({
  emptyValues: Array,
  valueOnClear: {
    type: [String, Number, Boolean, Function],
    default: void 0,
    validator: (val) => isFunction$1(val) ? !val() : !val
  }
});
const useEmptyValues = (props, defaultValue) => {
  const config = getCurrentInstance() ? inject(emptyValuesContextKey, ref({})) : ref({});
  const emptyValues = computed(() => props.emptyValues || config.value.emptyValues || DEFAULT_EMPTY_VALUES);
  const valueOnClear = computed(() => {
    if (isFunction$1(props.valueOnClear)) {
      return props.valueOnClear();
    } else if (props.valueOnClear !== void 0) {
      return props.valueOnClear;
    } else if (isFunction$1(config.value.valueOnClear)) {
      return config.value.valueOnClear();
    } else if (config.value.valueOnClear !== void 0) {
      return config.value.valueOnClear;
    }
    return DEFAULT_VALUE_ON_CLEAR;
  });
  const isEmptyValue = (value) => {
    return emptyValues.value.includes(value);
  };
  if (!emptyValues.value.includes(valueOnClear.value)) ;
  return {
    emptyValues,
    valueOnClear,
    isEmptyValue
  };
};
const keysOf = (arr) => Object.keys(arr);
const entriesOf = (arr) => Object.entries(arr);
const getProp = (obj, path, defaultValue) => {
  return {
    get value() {
      return get(obj, path, defaultValue);
    },
    set value(val) {
      set(obj, path, val);
    }
  };
};
const globalConfig = ref();
function useGlobalConfig(key, defaultValue = void 0) {
  const config = getCurrentInstance() ? inject(configProviderContextKey, globalConfig) : globalConfig;
  if (key) {
    return computed(() => {
      var _a, _b;
      return (_b = (_a = config.value) == null ? void 0 : _a[key]) != null ? _b : defaultValue;
    });
  } else {
    return config;
  }
}
const provideGlobalConfig = (config, app, global2 = false) => {
  var _a;
  const inSetup = !!getCurrentInstance();
  const oldConfig = inSetup ? useGlobalConfig() : void 0;
  const provideFn = (_a = void 0) != null ? _a : inSetup ? provide : void 0;
  if (!provideFn) {
    return;
  }
  const context = computed(() => {
    const cfg = unref(config);
    if (!(oldConfig == null ? void 0 : oldConfig.value))
      return cfg;
    return mergeConfig(oldConfig.value, cfg);
  });
  provideFn(configProviderContextKey, context);
  provideFn(localeContextKey, computed(() => context.value.locale));
  provideFn(namespaceContextKey, computed(() => context.value.namespace));
  provideFn(zIndexContextKey, computed(() => context.value.zIndex));
  provideFn(SIZE_INJECTION_KEY, {
    size: computed(() => context.value.size || "")
  });
  provideFn(emptyValuesContextKey, computed(() => ({
    emptyValues: context.value.emptyValues,
    valueOnClear: context.value.valueOnClear
  })));
  if (global2 || !globalConfig.value) {
    globalConfig.value = context.value;
  }
  return context;
};
const mergeConfig = (a, b) => {
  const keys = [.../* @__PURE__ */ new Set([...keysOf(a), ...keysOf(b)])];
  const obj = {};
  for (const key of keys) {
    obj[key] = b[key] !== void 0 ? b[key] : a[key];
  }
  return obj;
};
const UPDATE_MODEL_EVENT = "update:modelValue";
const CHANGE_EVENT = "change";
const INPUT_EVENT = "input";
var _export_sfc$1 = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const classNameToArray = (cls = "") => cls.split(" ").filter((item) => !!item.trim());
const hasClass = (el, cls) => {
  if (!el || !cls)
    return false;
  if (cls.includes(" "))
    throw new Error("className should not contain space.");
  return el.classList.contains(cls);
};
const addClass = (el, cls) => {
  if (!el || !cls.trim())
    return;
  el.classList.add(...classNameToArray(cls));
};
const removeClass = (el, cls) => {
  if (!el || !cls.trim())
    return;
  el.classList.remove(...classNameToArray(cls));
};
function addUnit(value, defaultUnit = "px") {
  if (!value)
    return "";
  if (isNumber(value) || isStringNumber(value)) {
    return `${value}${defaultUnit}`;
  } else if (isString$1(value)) {
    return value;
  }
}
const withInstall = (main, extra) => {
  main.install = (app) => {
    for (const comp of [main, ...Object.values(extra != null ? extra : {})]) {
      app.component(comp.name, comp);
    }
  };
  if (extra) {
    for (const [key, comp] of Object.entries(extra)) {
      main[key] = comp;
    }
  }
  return main;
};
const withInstallFunction = (fn, name) => {
  fn.install = (app) => {
    fn._context = app._context;
    app.config.globalProperties[name] = fn;
  };
  return fn;
};
const withInstallDirective = (directive2, name) => {
  directive2.install = (app) => {
    app.directive(name, directive2);
  };
  return directive2;
};
const withNoopInstall = (component) => {
  component.install = NOOP;
  return component;
};
const iconProps = buildProps({
  size: {
    type: definePropType([Number, String])
  },
  color: {
    type: String
  }
});
const __default__$p = defineComponent({
  name: "ElIcon",
  inheritAttrs: false
});
const _sfc_main$H = /* @__PURE__ */ defineComponent({
  ...__default__$p,
  props: iconProps,
  setup(__props) {
    const props = __props;
    const ns = useNamespace("icon");
    const style2 = computed(() => {
      const { size, color: color2 } = props;
      if (!size && !color2)
        return {};
      return {
        fontSize: isUndefined(size) ? void 0 : addUnit(size),
        "--color": color2
      };
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("i", mergeProps({
        class: unref(ns).b(),
        style: unref(style2)
      }, _ctx.$attrs), [
        renderSlot(_ctx.$slots, "default")
      ], 16);
    };
  }
});
var Icon = /* @__PURE__ */ _export_sfc$1(_sfc_main$H, [["__file", "icon.vue"]]);
const ElIcon = withInstall(Icon);
/*! Element Plus Icons Vue v2.3.1 */
var arrow_down_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
  name: "ArrowDown",
  __name: "arrow-down",
  setup(__props) {
    return (_ctx, _cache) => (openBlock(), createElementBlock("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      createElementVNode("path", {
        fill: "currentColor",
        d: "M831.872 340.864 512 652.672 192.128 340.864a30.592 30.592 0 0 0-42.752 0 29.12 29.12 0 0 0 0 41.6L489.664 714.24a32 32 0 0 0 44.672 0l340.288-331.712a29.12 29.12 0 0 0 0-41.728 30.592 30.592 0 0 0-42.752 0z"
      })
    ]));
  }
});
var arrow_down_default = arrow_down_vue_vue_type_script_setup_true_lang_default;
var arrow_left_bold_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
  name: "ArrowLeftBold",
  __name: "arrow-left-bold",
  setup(__props) {
    return (_ctx, _cache) => (openBlock(), createElementBlock("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      createElementVNode("path", {
        fill: "currentColor",
        d: "M685.248 104.704a64 64 0 0 1 0 90.496L368.448 512l316.8 316.8a64 64 0 0 1-90.496 90.496L232.704 557.248a64 64 0 0 1 0-90.496l362.048-362.048a64 64 0 0 1 90.496 0z"
      })
    ]));
  }
});
var arrow_left_bold_default = arrow_left_bold_vue_vue_type_script_setup_true_lang_default;
var arrow_left_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
  name: "ArrowLeft",
  __name: "arrow-left",
  setup(__props) {
    return (_ctx, _cache) => (openBlock(), createElementBlock("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      createElementVNode("path", {
        fill: "currentColor",
        d: "M609.408 149.376 277.76 489.6a32 32 0 0 0 0 44.672l331.648 340.352a29.12 29.12 0 0 0 41.728 0 30.592 30.592 0 0 0 0-42.752L339.264 511.936l311.872-319.872a30.592 30.592 0 0 0 0-42.688 29.12 29.12 0 0 0-41.728 0z"
      })
    ]));
  }
});
var arrow_left_default = arrow_left_vue_vue_type_script_setup_true_lang_default;
var arrow_right_bold_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
  name: "ArrowRightBold",
  __name: "arrow-right-bold",
  setup(__props) {
    return (_ctx, _cache) => (openBlock(), createElementBlock("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      createElementVNode("path", {
        fill: "currentColor",
        d: "M338.752 104.704a64 64 0 0 0 0 90.496l316.8 316.8-316.8 316.8a64 64 0 0 0 90.496 90.496l362.048-362.048a64 64 0 0 0 0-90.496L429.248 104.704a64 64 0 0 0-90.496 0z"
      })
    ]));
  }
});
var arrow_right_bold_default = arrow_right_bold_vue_vue_type_script_setup_true_lang_default;
var arrow_right_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
  name: "ArrowRight",
  __name: "arrow-right",
  setup(__props) {
    return (_ctx, _cache) => (openBlock(), createElementBlock("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      createElementVNode("path", {
        fill: "currentColor",
        d: "M340.864 149.312a30.592 30.592 0 0 0 0 42.752L652.736 512 340.864 831.872a30.592 30.592 0 0 0 0 42.752 29.12 29.12 0 0 0 41.728 0L714.24 534.336a32 32 0 0 0 0-44.672L382.592 149.376a29.12 29.12 0 0 0-41.728 0z"
      })
    ]));
  }
});
var arrow_right_default = arrow_right_vue_vue_type_script_setup_true_lang_default;
var arrow_up_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
  name: "ArrowUp",
  __name: "arrow-up",
  setup(__props) {
    return (_ctx, _cache) => (openBlock(), createElementBlock("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      createElementVNode("path", {
        fill: "currentColor",
        d: "m488.832 344.32-339.84 356.672a32 32 0 0 0 0 44.16l.384.384a29.44 29.44 0 0 0 42.688 0l320-335.872 319.872 335.872a29.44 29.44 0 0 0 42.688 0l.384-.384a32 32 0 0 0 0-44.16L535.168 344.32a32 32 0 0 0-46.336 0"
      })
    ]));
  }
});
var arrow_up_default = arrow_up_vue_vue_type_script_setup_true_lang_default;
var check_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
  name: "Check",
  __name: "check",
  setup(__props) {
    return (_ctx, _cache) => (openBlock(), createElementBlock("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      createElementVNode("path", {
        fill: "currentColor",
        d: "M406.656 706.944 195.84 496.256a32 32 0 1 0-45.248 45.248l256 256 512-512a32 32 0 0 0-45.248-45.248L406.592 706.944z"
      })
    ]));
  }
});
var check_default = check_vue_vue_type_script_setup_true_lang_default;
var circle_check_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
  name: "CircleCheck",
  __name: "circle-check",
  setup(__props) {
    return (_ctx, _cache) => (openBlock(), createElementBlock("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      createElementVNode("path", {
        fill: "currentColor",
        d: "M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768m0 64a448 448 0 1 1 0-896 448 448 0 0 1 0 896"
      }),
      createElementVNode("path", {
        fill: "currentColor",
        d: "M745.344 361.344a32 32 0 0 1 45.312 45.312l-288 288a32 32 0 0 1-45.312 0l-160-160a32 32 0 1 1 45.312-45.312L480 626.752l265.344-265.408z"
      })
    ]));
  }
});
var circle_check_default = circle_check_vue_vue_type_script_setup_true_lang_default;
var circle_close_filled_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
  name: "CircleCloseFilled",
  __name: "circle-close-filled",
  setup(__props) {
    return (_ctx, _cache) => (openBlock(), createElementBlock("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      createElementVNode("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m0 393.664L407.936 353.6a38.4 38.4 0 1 0-54.336 54.336L457.664 512 353.6 616.064a38.4 38.4 0 1 0 54.336 54.336L512 566.336 616.064 670.4a38.4 38.4 0 1 0 54.336-54.336L566.336 512 670.4 407.936a38.4 38.4 0 1 0-54.336-54.336z"
      })
    ]));
  }
});
var circle_close_filled_default = circle_close_filled_vue_vue_type_script_setup_true_lang_default;
var circle_close_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
  name: "CircleClose",
  __name: "circle-close",
  setup(__props) {
    return (_ctx, _cache) => (openBlock(), createElementBlock("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      createElementVNode("path", {
        fill: "currentColor",
        d: "m466.752 512-90.496-90.496a32 32 0 0 1 45.248-45.248L512 466.752l90.496-90.496a32 32 0 1 1 45.248 45.248L557.248 512l90.496 90.496a32 32 0 1 1-45.248 45.248L512 557.248l-90.496 90.496a32 32 0 0 1-45.248-45.248z"
      }),
      createElementVNode("path", {
        fill: "currentColor",
        d: "M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768m0 64a448 448 0 1 1 0-896 448 448 0 0 1 0 896"
      })
    ]));
  }
});
var circle_close_default = circle_close_vue_vue_type_script_setup_true_lang_default;
var circle_plus_filled_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
  name: "CirclePlusFilled",
  __name: "circle-plus-filled",
  setup(__props) {
    return (_ctx, _cache) => (openBlock(), createElementBlock("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      createElementVNode("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m-38.4 409.6H326.4a38.4 38.4 0 1 0 0 76.8h147.2v147.2a38.4 38.4 0 0 0 76.8 0V550.4h147.2a38.4 38.4 0 0 0 0-76.8H550.4V326.4a38.4 38.4 0 1 0-76.8 0v147.2z"
      })
    ]));
  }
});
var circle_plus_filled_default = circle_plus_filled_vue_vue_type_script_setup_true_lang_default;
var clock_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
  name: "Clock",
  __name: "clock",
  setup(__props) {
    return (_ctx, _cache) => (openBlock(), createElementBlock("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      createElementVNode("path", {
        fill: "currentColor",
        d: "M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768m0 64a448 448 0 1 1 0-896 448 448 0 0 1 0 896"
      }),
      createElementVNode("path", {
        fill: "currentColor",
        d: "M480 256a32 32 0 0 1 32 32v256a32 32 0 0 1-64 0V288a32 32 0 0 1 32-32"
      }),
      createElementVNode("path", {
        fill: "currentColor",
        d: "M480 512h256q32 0 32 32t-32 32H480q-32 0-32-32t32-32"
      })
    ]));
  }
});
var clock_default = clock_vue_vue_type_script_setup_true_lang_default;
var close_bold_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
  name: "CloseBold",
  __name: "close-bold",
  setup(__props) {
    return (_ctx, _cache) => (openBlock(), createElementBlock("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      createElementVNode("path", {
        fill: "currentColor",
        d: "M195.2 195.2a64 64 0 0 1 90.496 0L512 421.504 738.304 195.2a64 64 0 0 1 90.496 90.496L602.496 512 828.8 738.304a64 64 0 0 1-90.496 90.496L512 602.496 285.696 828.8a64 64 0 0 1-90.496-90.496L421.504 512 195.2 285.696a64 64 0 0 1 0-90.496z"
      })
    ]));
  }
});
var close_bold_default = close_bold_vue_vue_type_script_setup_true_lang_default;
var close_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
  name: "Close",
  __name: "close",
  setup(__props) {
    return (_ctx, _cache) => (openBlock(), createElementBlock("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      createElementVNode("path", {
        fill: "currentColor",
        d: "M764.288 214.592 512 466.88 259.712 214.592a31.936 31.936 0 0 0-45.12 45.12L466.752 512 214.528 764.224a31.936 31.936 0 1 0 45.12 45.184L512 557.184l252.288 252.288a31.936 31.936 0 0 0 45.12-45.12L557.12 512.064l252.288-252.352a31.936 31.936 0 1 0-45.12-45.184z"
      })
    ]));
  }
});
var close_default = close_vue_vue_type_script_setup_true_lang_default;
var copy_document_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
  name: "CopyDocument",
  __name: "copy-document",
  setup(__props) {
    return (_ctx, _cache) => (openBlock(), createElementBlock("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      createElementVNode("path", {
        fill: "currentColor",
        d: "M768 832a128 128 0 0 1-128 128H192A128 128 0 0 1 64 832V384a128 128 0 0 1 128-128v64a64 64 0 0 0-64 64v448a64 64 0 0 0 64 64h448a64 64 0 0 0 64-64z"
      }),
      createElementVNode("path", {
        fill: "currentColor",
        d: "M384 128a64 64 0 0 0-64 64v448a64 64 0 0 0 64 64h448a64 64 0 0 0 64-64V192a64 64 0 0 0-64-64zm0-64h448a128 128 0 0 1 128 128v448a128 128 0 0 1-128 128H384a128 128 0 0 1-128-128V192A128 128 0 0 1 384 64"
      })
    ]));
  }
});
var copy_document_default = copy_document_vue_vue_type_script_setup_true_lang_default;
var d_arrow_left_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
  name: "DArrowLeft",
  __name: "d-arrow-left",
  setup(__props) {
    return (_ctx, _cache) => (openBlock(), createElementBlock("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      createElementVNode("path", {
        fill: "currentColor",
        d: "M529.408 149.376a29.12 29.12 0 0 1 41.728 0 30.592 30.592 0 0 1 0 42.688L259.264 511.936l311.872 319.936a30.592 30.592 0 0 1-.512 43.264 29.12 29.12 0 0 1-41.216-.512L197.76 534.272a32 32 0 0 1 0-44.672l331.648-340.224zm256 0a29.12 29.12 0 0 1 41.728 0 30.592 30.592 0 0 1 0 42.688L515.264 511.936l311.872 319.936a30.592 30.592 0 0 1-.512 43.264 29.12 29.12 0 0 1-41.216-.512L453.76 534.272a32 32 0 0 1 0-44.672l331.648-340.224z"
      })
    ]));
  }
});
var d_arrow_left_default = d_arrow_left_vue_vue_type_script_setup_true_lang_default;
var d_arrow_right_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
  name: "DArrowRight",
  __name: "d-arrow-right",
  setup(__props) {
    return (_ctx, _cache) => (openBlock(), createElementBlock("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      createElementVNode("path", {
        fill: "currentColor",
        d: "M452.864 149.312a29.12 29.12 0 0 1 41.728.064L826.24 489.664a32 32 0 0 1 0 44.672L494.592 874.624a29.12 29.12 0 0 1-41.728 0 30.592 30.592 0 0 1 0-42.752L764.736 512 452.864 192a30.592 30.592 0 0 1 0-42.688m-256 0a29.12 29.12 0 0 1 41.728.064L570.24 489.664a32 32 0 0 1 0 44.672L238.592 874.624a29.12 29.12 0 0 1-41.728 0 30.592 30.592 0 0 1 0-42.752L508.736 512 196.864 192a30.592 30.592 0 0 1 0-42.688z"
      })
    ]));
  }
});
var d_arrow_right_default = d_arrow_right_vue_vue_type_script_setup_true_lang_default;
var delete_filled_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
  name: "DeleteFilled",
  __name: "delete-filled",
  setup(__props) {
    return (_ctx, _cache) => (openBlock(), createElementBlock("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      createElementVNode("path", {
        fill: "currentColor",
        d: "M352 192V95.936a32 32 0 0 1 32-32h256a32 32 0 0 1 32 32V192h256a32 32 0 1 1 0 64H96a32 32 0 0 1 0-64zm64 0h192v-64H416zM192 960a32 32 0 0 1-32-32V256h704v672a32 32 0 0 1-32 32zm224-192a32 32 0 0 0 32-32V416a32 32 0 0 0-64 0v320a32 32 0 0 0 32 32m192 0a32 32 0 0 0 32-32V416a32 32 0 0 0-64 0v320a32 32 0 0 0 32 32"
      })
    ]));
  }
});
var delete_filled_default = delete_filled_vue_vue_type_script_setup_true_lang_default;
var delete_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
  name: "Delete",
  __name: "delete",
  setup(__props) {
    return (_ctx, _cache) => (openBlock(), createElementBlock("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      createElementVNode("path", {
        fill: "currentColor",
        d: "M160 256H96a32 32 0 0 1 0-64h256V95.936a32 32 0 0 1 32-32h256a32 32 0 0 1 32 32V192h256a32 32 0 1 1 0 64h-64v672a32 32 0 0 1-32 32H192a32 32 0 0 1-32-32zm448-64v-64H416v64zM224 896h576V256H224zm192-128a32 32 0 0 1-32-32V416a32 32 0 0 1 64 0v320a32 32 0 0 1-32 32m192 0a32 32 0 0 1-32-32V416a32 32 0 0 1 64 0v320a32 32 0 0 1-32 32"
      })
    ]));
  }
});
var delete_default = delete_vue_vue_type_script_setup_true_lang_default;
var document_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
  name: "Document",
  __name: "document",
  setup(__props) {
    return (_ctx, _cache) => (openBlock(), createElementBlock("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      createElementVNode("path", {
        fill: "currentColor",
        d: "M832 384H576V128H192v768h640zm-26.496-64L640 154.496V320zM160 64h480l256 256v608a32 32 0 0 1-32 32H160a32 32 0 0 1-32-32V96a32 32 0 0 1 32-32m160 448h384v64H320zm0-192h160v64H320zm0 384h384v64H320z"
      })
    ]));
  }
});
var document_default = document_vue_vue_type_script_setup_true_lang_default;
var download_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
  name: "Download",
  __name: "download",
  setup(__props) {
    return (_ctx, _cache) => (openBlock(), createElementBlock("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      createElementVNode("path", {
        fill: "currentColor",
        d: "M160 832h704a32 32 0 1 1 0 64H160a32 32 0 1 1 0-64m384-253.696 236.288-236.352 45.248 45.248L508.8 704 192 387.2l45.248-45.248L480 584.704V128h64z"
      })
    ]));
  }
});
var download_default = download_vue_vue_type_script_setup_true_lang_default;
var edit_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
  name: "Edit",
  __name: "edit",
  setup(__props) {
    return (_ctx, _cache) => (openBlock(), createElementBlock("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      createElementVNode("path", {
        fill: "currentColor",
        d: "M832 512a32 32 0 1 1 64 0v352a32 32 0 0 1-32 32H160a32 32 0 0 1-32-32V160a32 32 0 0 1 32-32h352a32 32 0 0 1 0 64H192v640h640z"
      }),
      createElementVNode("path", {
        fill: "currentColor",
        d: "m469.952 554.24 52.8-7.552L847.104 222.4a32 32 0 1 0-45.248-45.248L477.44 501.44l-7.552 52.8zm422.4-422.4a96 96 0 0 1 0 135.808l-331.84 331.84a32 32 0 0 1-18.112 9.088L436.8 623.68a32 32 0 0 1-36.224-36.224l15.104-105.6a32 32 0 0 1 9.024-18.112l331.904-331.84a96 96 0 0 1 135.744 0z"
      })
    ]));
  }
});
var edit_default = edit_vue_vue_type_script_setup_true_lang_default;
var gold_medal_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
  name: "GoldMedal",
  __name: "gold-medal",
  setup(__props) {
    return (_ctx, _cache) => (openBlock(), createElementBlock("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      "xml:space": "preserve",
      style: { "enable-background": "new 0 0 1024 1024" },
      viewBox: "0 0 1024 1024"
    }, [
      createElementVNode("path", {
        fill: "currentColor",
        d: "m772.13 452.84 53.86-351.81c1.32-10.01-1.17-18.68-7.49-26.02S804.35 64 795.01 64H228.99v-.01h-.06c-9.33 0-17.15 3.67-23.49 11.01s-8.83 16.01-7.49 26.02l53.87 351.89C213.54 505.73 193.59 568.09 192 640c2 90.67 33.17 166.17 93.5 226.5S421.33 957.99 512 960c90.67-2 166.17-33.17 226.5-93.5 60.33-60.34 91.49-135.83 93.5-226.5-1.59-71.94-21.56-134.32-59.87-187.16zM640.01 128h117.02l-39.01 254.02c-20.75-10.64-40.74-19.73-59.94-27.28-5.92-3-11.95-5.8-18.08-8.41V128h.01zM576 128v198.76c-13.18-2.58-26.74-4.43-40.67-5.55-8.07-.8-15.85-1.2-23.33-1.2-10.54 0-21.09.66-31.64 1.96a359.844 359.844 0 0 0-32.36 4.79V128zm-192 0h.04v218.3c-6.22 2.66-12.34 5.5-18.36 8.56-19.13 7.54-39.02 16.6-59.66 27.16L267.01 128zm308.99 692.99c-48 48-108.33 73-180.99 75.01-72.66-2.01-132.99-27.01-180.99-75.01S258.01 712.66 256 640c2.01-72.66 27.01-132.99 75.01-180.99 19.67-19.67 41.41-35.47 65.22-47.41 38.33-15.04 71.15-23.92 98.44-26.65 5.07-.41 10.2-.7 15.39-.88.63-.01 1.28-.03 1.91-.03.66 0 1.35.03 2.02.04 5.11.17 10.15.46 15.13.86 27.4 2.71 60.37 11.65 98.91 26.79 23.71 11.93 45.36 27.69 64.96 47.29 48 48 73 108.33 75.01 180.99-2.01 72.65-27.01 132.98-75.01 180.98z"
      }),
      createElementVNode("path", {
        fill: "currentColor",
        d: "M544 480H416v64h64v192h-64v64h192v-64h-64z"
      })
    ]));
  }
});
var gold_medal_default = gold_medal_vue_vue_type_script_setup_true_lang_default;
var hide_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
  name: "Hide",
  __name: "hide",
  setup(__props) {
    return (_ctx, _cache) => (openBlock(), createElementBlock("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      createElementVNode("path", {
        fill: "currentColor",
        d: "M876.8 156.8c0-9.6-3.2-16-9.6-22.4-6.4-6.4-12.8-9.6-22.4-9.6-9.6 0-16 3.2-22.4 9.6L736 220.8c-64-32-137.6-51.2-224-60.8-160 16-288 73.6-377.6 176C44.8 438.4 0 496 0 512s48 73.6 134.4 176c22.4 25.6 44.8 48 73.6 67.2l-86.4 89.6c-6.4 6.4-9.6 12.8-9.6 22.4 0 9.6 3.2 16 9.6 22.4 6.4 6.4 12.8 9.6 22.4 9.6 9.6 0 16-3.2 22.4-9.6l704-710.4c3.2-6.4 6.4-12.8 6.4-22.4Zm-646.4 528c-76.8-70.4-128-128-153.6-172.8 28.8-48 80-105.6 153.6-172.8C304 272 400 230.4 512 224c64 3.2 124.8 19.2 176 44.8l-54.4 54.4C598.4 300.8 560 288 512 288c-64 0-115.2 22.4-160 64s-64 96-64 160c0 48 12.8 89.6 35.2 124.8L256 707.2c-9.6-6.4-19.2-16-25.6-22.4Zm140.8-96c-12.8-22.4-19.2-48-19.2-76.8 0-44.8 16-83.2 48-112 32-28.8 67.2-48 112-48 28.8 0 54.4 6.4 73.6 19.2zM889.599 336c-12.8-16-28.8-28.8-41.6-41.6l-48 48c73.6 67.2 124.8 124.8 150.4 169.6-28.8 48-80 105.6-153.6 172.8-73.6 67.2-172.8 108.8-284.8 115.2-51.2-3.2-99.2-12.8-140.8-28.8l-48 48c57.6 22.4 118.4 38.4 188.8 44.8 160-16 288-73.6 377.6-176C979.199 585.6 1024 528 1024 512s-48.001-73.6-134.401-176Z"
      }),
      createElementVNode("path", {
        fill: "currentColor",
        d: "M511.998 672c-12.8 0-25.6-3.2-38.4-6.4l-51.2 51.2c28.8 12.8 57.6 19.2 89.6 19.2 64 0 115.2-22.4 160-64 41.6-41.6 64-96 64-160 0-32-6.4-64-19.2-89.6l-51.2 51.2c3.2 12.8 6.4 25.6 6.4 38.4 0 44.8-16 83.2-48 112-32 28.8-67.2 48-112 48Z"
      })
    ]));
  }
});
var hide_default = hide_vue_vue_type_script_setup_true_lang_default;
var home_filled_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
  name: "HomeFilled",
  __name: "home-filled",
  setup(__props) {
    return (_ctx, _cache) => (openBlock(), createElementBlock("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      createElementVNode("path", {
        fill: "currentColor",
        d: "M512 128 128 447.936V896h255.936V640H640v256h255.936V447.936z"
      })
    ]));
  }
});
var home_filled_default = home_filled_vue_vue_type_script_setup_true_lang_default;
var info_filled_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
  name: "InfoFilled",
  __name: "info-filled",
  setup(__props) {
    return (_ctx, _cache) => (openBlock(), createElementBlock("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      createElementVNode("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896.064A448 448 0 0 1 512 64m67.2 275.072c33.28 0 60.288-23.104 60.288-57.344s-27.072-57.344-60.288-57.344c-33.28 0-60.16 23.104-60.16 57.344s26.88 57.344 60.16 57.344M590.912 699.2c0-6.848 2.368-24.64 1.024-34.752l-52.608 60.544c-10.88 11.456-24.512 19.392-30.912 17.28a12.992 12.992 0 0 1-8.256-14.72l87.68-276.992c7.168-35.136-12.544-67.2-54.336-71.296-44.096 0-108.992 44.736-148.48 101.504 0 6.784-1.28 23.68.064 33.792l52.544-60.608c10.88-11.328 23.552-19.328 29.952-17.152a12.8 12.8 0 0 1 7.808 16.128L388.48 728.576c-10.048 32.256 8.96 63.872 55.04 71.04 67.84 0 107.904-43.648 147.456-100.416z"
      })
    ]));
  }
});
var info_filled_default = info_filled_vue_vue_type_script_setup_true_lang_default;
var loading_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
  name: "Loading",
  __name: "loading",
  setup(__props) {
    return (_ctx, _cache) => (openBlock(), createElementBlock("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      createElementVNode("path", {
        fill: "currentColor",
        d: "M512 64a32 32 0 0 1 32 32v192a32 32 0 0 1-64 0V96a32 32 0 0 1 32-32m0 640a32 32 0 0 1 32 32v192a32 32 0 1 1-64 0V736a32 32 0 0 1 32-32m448-192a32 32 0 0 1-32 32H736a32 32 0 1 1 0-64h192a32 32 0 0 1 32 32m-640 0a32 32 0 0 1-32 32H96a32 32 0 0 1 0-64h192a32 32 0 0 1 32 32M195.2 195.2a32 32 0 0 1 45.248 0L376.32 331.008a32 32 0 0 1-45.248 45.248L195.2 240.448a32 32 0 0 1 0-45.248zm452.544 452.544a32 32 0 0 1 45.248 0L828.8 783.552a32 32 0 0 1-45.248 45.248L647.744 692.992a32 32 0 0 1 0-45.248zM828.8 195.264a32 32 0 0 1 0 45.184L692.992 376.32a32 32 0 0 1-45.248-45.248l135.808-135.808a32 32 0 0 1 45.248 0m-452.544 452.48a32 32 0 0 1 0 45.248L240.448 828.8a32 32 0 0 1-45.248-45.248l135.808-135.808a32 32 0 0 1 45.248 0z"
      })
    ]));
  }
});
var loading_default = loading_vue_vue_type_script_setup_true_lang_default;
var location_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
  name: "Location",
  __name: "location",
  setup(__props) {
    return (_ctx, _cache) => (openBlock(), createElementBlock("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      createElementVNode("path", {
        fill: "currentColor",
        d: "M800 416a288 288 0 1 0-576 0c0 118.144 94.528 272.128 288 456.576C705.472 688.128 800 534.144 800 416M512 960C277.312 746.688 160 565.312 160 416a352 352 0 0 1 704 0c0 149.312-117.312 330.688-352 544"
      }),
      createElementVNode("path", {
        fill: "currentColor",
        d: "M512 512a96 96 0 1 0 0-192 96 96 0 0 0 0 192m0 64a160 160 0 1 1 0-320 160 160 0 0 1 0 320"
      })
    ]));
  }
});
var location_default = location_vue_vue_type_script_setup_true_lang_default;
var minus_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
  name: "Minus",
  __name: "minus",
  setup(__props) {
    return (_ctx, _cache) => (openBlock(), createElementBlock("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      createElementVNode("path", {
        fill: "currentColor",
        d: "M128 544h768a32 32 0 1 0 0-64H128a32 32 0 0 0 0 64"
      })
    ]));
  }
});
var minus_default = minus_vue_vue_type_script_setup_true_lang_default;
var office_building_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
  name: "OfficeBuilding",
  __name: "office-building",
  setup(__props) {
    return (_ctx, _cache) => (openBlock(), createElementBlock("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      createElementVNode("path", {
        fill: "currentColor",
        d: "M192 128v704h384V128zm-32-64h448a32 32 0 0 1 32 32v768a32 32 0 0 1-32 32H160a32 32 0 0 1-32-32V96a32 32 0 0 1 32-32"
      }),
      createElementVNode("path", {
        fill: "currentColor",
        d: "M256 256h256v64H256zm0 192h256v64H256zm0 192h256v64H256zm384-128h128v64H640zm0 128h128v64H640zM64 832h896v64H64z"
      }),
      createElementVNode("path", {
        fill: "currentColor",
        d: "M640 384v448h192V384zm-32-64h256a32 32 0 0 1 32 32v512a32 32 0 0 1-32 32H608a32 32 0 0 1-32-32V352a32 32 0 0 1 32-32"
      })
    ]));
  }
});
var office_building_default = office_building_vue_vue_type_script_setup_true_lang_default;
var picture_filled_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
  name: "PictureFilled",
  __name: "picture-filled",
  setup(__props) {
    return (_ctx, _cache) => (openBlock(), createElementBlock("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      createElementVNode("path", {
        fill: "currentColor",
        d: "M96 896a32 32 0 0 1-32-32V160a32 32 0 0 1 32-32h832a32 32 0 0 1 32 32v704a32 32 0 0 1-32 32zm315.52-228.48-68.928-68.928a32 32 0 0 0-45.248 0L128 768.064h778.688l-242.112-290.56a32 32 0 0 0-49.216 0L458.752 665.408a32 32 0 0 1-47.232 2.112M256 384a96 96 0 1 0 192.064-.064A96 96 0 0 0 256 384"
      })
    ]));
  }
});
var picture_filled_default = picture_filled_vue_vue_type_script_setup_true_lang_default;
var plus_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
  name: "Plus",
  __name: "plus",
  setup(__props) {
    return (_ctx, _cache) => (openBlock(), createElementBlock("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      createElementVNode("path", {
        fill: "currentColor",
        d: "M480 480V128a32 32 0 0 1 64 0v352h352a32 32 0 1 1 0 64H544v352a32 32 0 1 1-64 0V544H128a32 32 0 0 1 0-64z"
      })
    ]));
  }
});
var plus_default = plus_vue_vue_type_script_setup_true_lang_default;
var postcard_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
  name: "Postcard",
  __name: "postcard",
  setup(__props) {
    return (_ctx, _cache) => (openBlock(), createElementBlock("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      createElementVNode("path", {
        fill: "currentColor",
        d: "M160 224a32 32 0 0 0-32 32v512a32 32 0 0 0 32 32h704a32 32 0 0 0 32-32V256a32 32 0 0 0-32-32zm0-64h704a96 96 0 0 1 96 96v512a96 96 0 0 1-96 96H160a96 96 0 0 1-96-96V256a96 96 0 0 1 96-96"
      }),
      createElementVNode("path", {
        fill: "currentColor",
        d: "M704 320a64 64 0 1 1 0 128 64 64 0 0 1 0-128M288 448h256q32 0 32 32t-32 32H288q-32 0-32-32t32-32m0 128h256q32 0 32 32t-32 32H288q-32 0-32-32t32-32"
      })
    ]));
  }
});
var postcard_default = postcard_vue_vue_type_script_setup_true_lang_default;
var price_tag_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
  name: "PriceTag",
  __name: "price-tag",
  setup(__props) {
    return (_ctx, _cache) => (openBlock(), createElementBlock("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      createElementVNode("path", {
        fill: "currentColor",
        d: "M224 318.336V896h576V318.336L552.512 115.84a64 64 0 0 0-81.024 0zM593.024 66.304l259.2 212.096A32 32 0 0 1 864 303.168V928a32 32 0 0 1-32 32H192a32 32 0 0 1-32-32V303.168a32 32 0 0 1 11.712-24.768l259.2-212.096a128 128 0 0 1 162.112 0z"
      }),
      createElementVNode("path", {
        fill: "currentColor",
        d: "M512 448a64 64 0 1 0 0-128 64 64 0 0 0 0 128m0 64a128 128 0 1 1 0-256 128 128 0 0 1 0 256"
      })
    ]));
  }
});
var price_tag_default = price_tag_vue_vue_type_script_setup_true_lang_default;
var refresh_left_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
  name: "RefreshLeft",
  __name: "refresh-left",
  setup(__props) {
    return (_ctx, _cache) => (openBlock(), createElementBlock("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      createElementVNode("path", {
        fill: "currentColor",
        d: "M289.088 296.704h92.992a32 32 0 0 1 0 64H232.96a32 32 0 0 1-32-32V179.712a32 32 0 0 1 64 0v50.56a384 384 0 0 1 643.84 282.88 384 384 0 0 1-383.936 384 384 384 0 0 1-384-384h64a320 320 0 1 0 640 0 320 320 0 0 0-555.712-216.448z"
      })
    ]));
  }
});
var refresh_left_default = refresh_left_vue_vue_type_script_setup_true_lang_default;
var search_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
  name: "Search",
  __name: "search",
  setup(__props) {
    return (_ctx, _cache) => (openBlock(), createElementBlock("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      createElementVNode("path", {
        fill: "currentColor",
        d: "m795.904 750.72 124.992 124.928a32 32 0 0 1-45.248 45.248L750.656 795.904a416 416 0 1 1 45.248-45.248zM480 832a352 352 0 1 0 0-704 352 352 0 0 0 0 704"
      })
    ]));
  }
});
var search_default = search_vue_vue_type_script_setup_true_lang_default;
var shop_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
  name: "Shop",
  __name: "shop",
  setup(__props) {
    return (_ctx, _cache) => (openBlock(), createElementBlock("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      createElementVNode("path", {
        fill: "currentColor",
        d: "M704 704h64v192H256V704h64v64h384zm188.544-152.192C894.528 559.616 896 567.616 896 576a96 96 0 1 1-192 0 96 96 0 1 1-192 0 96 96 0 1 1-192 0 96 96 0 1 1-192 0c0-8.384 1.408-16.384 3.392-24.192L192 128h640z"
      })
    ]));
  }
});
var shop_default = shop_vue_vue_type_script_setup_true_lang_default;
var shopping_cart_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
  name: "ShoppingCart",
  __name: "shopping-cart",
  setup(__props) {
    return (_ctx, _cache) => (openBlock(), createElementBlock("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      createElementVNode("path", {
        fill: "currentColor",
        d: "M432 928a48 48 0 1 1 0-96 48 48 0 0 1 0 96m320 0a48 48 0 1 1 0-96 48 48 0 0 1 0 96M96 128a32 32 0 0 1 0-64h160a32 32 0 0 1 31.36 25.728L320.64 256H928a32 32 0 0 1 31.296 38.72l-96 448A32 32 0 0 1 832 768H384a32 32 0 0 1-31.36-25.728L229.76 128zm314.24 576h395.904l82.304-384H333.44l76.8 384z"
      })
    ]));
  }
});
var shopping_cart_default = shopping_cart_vue_vue_type_script_setup_true_lang_default;
var success_filled_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
  name: "SuccessFilled",
  __name: "success-filled",
  setup(__props) {
    return (_ctx, _cache) => (openBlock(), createElementBlock("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      createElementVNode("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m-55.808 536.384-99.52-99.584a38.4 38.4 0 1 0-54.336 54.336l126.72 126.72a38.272 38.272 0 0 0 54.336 0l262.4-262.464a38.4 38.4 0 1 0-54.272-54.336z"
      })
    ]));
  }
});
var success_filled_default = success_filled_vue_vue_type_script_setup_true_lang_default;
var switch_button_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
  name: "SwitchButton",
  __name: "switch-button",
  setup(__props) {
    return (_ctx, _cache) => (openBlock(), createElementBlock("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      createElementVNode("path", {
        fill: "currentColor",
        d: "M352 159.872V230.4a352 352 0 1 0 320 0v-70.528A416.128 416.128 0 0 1 512 960a416 416 0 0 1-160-800.128z"
      }),
      createElementVNode("path", {
        fill: "currentColor",
        d: "M512 64q32 0 32 32v320q0 32-32 32t-32-32V96q0-32 32-32"
      })
    ]));
  }
});
var switch_button_default = switch_button_vue_vue_type_script_setup_true_lang_default;
var view_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
  name: "View",
  __name: "view",
  setup(__props) {
    return (_ctx, _cache) => (openBlock(), createElementBlock("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      createElementVNode("path", {
        fill: "currentColor",
        d: "M512 160c320 0 512 352 512 352S832 864 512 864 0 512 0 512s192-352 512-352m0 64c-225.28 0-384.128 208.064-436.8 288 52.608 79.872 211.456 288 436.8 288 225.28 0 384.128-208.064 436.8-288-52.608-79.872-211.456-288-436.8-288zm0 64a224 224 0 1 1 0 448 224 224 0 0 1 0-448m0 64a160.192 160.192 0 0 0-160 160c0 88.192 71.744 160 160 160s160-71.808 160-160-71.744-160-160-160"
      })
    ]));
  }
});
var view_default = view_vue_vue_type_script_setup_true_lang_default;
var warning_filled_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
  name: "WarningFilled",
  __name: "warning-filled",
  setup(__props) {
    return (_ctx, _cache) => (openBlock(), createElementBlock("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      createElementVNode("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m0 192a58.432 58.432 0 0 0-58.24 63.744l23.36 256.384a35.072 35.072 0 0 0 69.76 0l23.296-256.384A58.432 58.432 0 0 0 512 256m0 512a51.2 51.2 0 1 0 0-102.4 51.2 51.2 0 0 0 0 102.4"
      })
    ]));
  }
});
var warning_filled_default = warning_filled_vue_vue_type_script_setup_true_lang_default;
var zoom_in_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
  name: "ZoomIn",
  __name: "zoom-in",
  setup(__props) {
    return (_ctx, _cache) => (openBlock(), createElementBlock("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      createElementVNode("path", {
        fill: "currentColor",
        d: "m795.904 750.72 124.992 124.928a32 32 0 0 1-45.248 45.248L750.656 795.904a416 416 0 1 1 45.248-45.248zM480 832a352 352 0 1 0 0-704 352 352 0 0 0 0 704m-32-384v-96a32 32 0 0 1 64 0v96h96a32 32 0 0 1 0 64h-96v96a32 32 0 0 1-64 0v-96h-96a32 32 0 0 1 0-64z"
      })
    ]));
  }
});
var zoom_in_default = zoom_in_vue_vue_type_script_setup_true_lang_default;
const iconPropType = definePropType([
  String,
  Object,
  Function
]);
const CloseComponents = {
  Close: close_default
};
const ValidateComponentsMap = {
  validating: loading_default,
  success: circle_check_default,
  error: circle_close_default
};
const mutable = (val) => val;
const ariaProps = buildProps({
  ariaLabel: String,
  ariaOrientation: {
    type: String,
    values: ["horizontal", "vertical", "undefined"]
  },
  ariaControls: String
});
const useAriaProps = (arias) => {
  return pick(ariaProps, arias);
};
const inputProps = buildProps({
  id: {
    type: String,
    default: void 0
  },
  size: useSizeProp,
  disabled: Boolean,
  modelValue: {
    type: definePropType([
      String,
      Number,
      Object
    ]),
    default: ""
  },
  maxlength: {
    type: [String, Number]
  },
  minlength: {
    type: [String, Number]
  },
  type: {
    type: String,
    default: "text"
  },
  resize: {
    type: String,
    values: ["none", "both", "horizontal", "vertical"]
  },
  autosize: {
    type: definePropType([Boolean, Object]),
    default: false
  },
  autocomplete: {
    type: String,
    default: "off"
  },
  formatter: {
    type: Function
  },
  parser: {
    type: Function
  },
  placeholder: {
    type: String
  },
  form: {
    type: String
  },
  readonly: Boolean,
  clearable: Boolean,
  showPassword: Boolean,
  showWordLimit: Boolean,
  suffixIcon: {
    type: iconPropType
  },
  prefixIcon: {
    type: iconPropType
  },
  containerRole: {
    type: String,
    default: void 0
  },
  tabindex: {
    type: [String, Number],
    default: 0
  },
  validateEvent: {
    type: Boolean,
    default: true
  },
  inputStyle: {
    type: definePropType([Object, Array, String]),
    default: () => mutable({})
  },
  autofocus: Boolean,
  rows: {
    type: Number,
    default: 2
  },
  ...useAriaProps(["ariaLabel"])
});
const inputEmits = {
  [UPDATE_MODEL_EVENT]: (value) => isString$1(value),
  input: (value) => isString$1(value),
  change: (value) => isString$1(value),
  focus: (evt) => evt instanceof FocusEvent,
  blur: (evt) => evt instanceof FocusEvent,
  clear: () => true,
  mouseleave: (evt) => evt instanceof MouseEvent,
  mouseenter: (evt) => evt instanceof MouseEvent,
  keydown: (evt) => evt instanceof Event,
  compositionstart: (evt) => evt instanceof CompositionEvent,
  compositionupdate: (evt) => evt instanceof CompositionEvent,
  compositionend: (evt) => evt instanceof CompositionEvent
};
const DEFAULT_EXCLUDE_KEYS = ["class", "style"];
const LISTENER_PREFIX = /^on[A-Z]/;
const useAttrs = (params = {}) => {
  const { excludeListeners = false, excludeKeys } = params;
  const allExcludeKeys = computed(() => {
    return ((excludeKeys == null ? void 0 : excludeKeys.value) || []).concat(DEFAULT_EXCLUDE_KEYS);
  });
  const instance = getCurrentInstance();
  if (!instance) {
    return computed(() => ({}));
  }
  return computed(() => {
    var _a;
    return fromPairs(Object.entries((_a = instance.proxy) == null ? void 0 : _a.$attrs).filter(([key]) => !allExcludeKeys.value.includes(key) && !(excludeListeners && LISTENER_PREFIX.test(key))));
  });
};
const formContextKey = Symbol("formContextKey");
const formItemContextKey = Symbol("formItemContextKey");
const useFormItem = () => {
  const form = inject(formContextKey, void 0);
  const formItem = inject(formItemContextKey, void 0);
  return {
    form,
    formItem
  };
};
const useFormItemInputId = (props, {
  formItemContext,
  disableIdGeneration,
  disableIdManagement
}) => {
  if (!disableIdGeneration) {
    disableIdGeneration = ref(false);
  }
  if (!disableIdManagement) {
    disableIdManagement = ref(false);
  }
  const inputId = ref();
  const isLabeledByFormItem = computed(() => {
    var _a;
    return !!(!(props.label || props.ariaLabel) && formItemContext && formItemContext.inputIds && ((_a = formItemContext.inputIds) == null ? void 0 : _a.length) <= 1);
  });
  return {
    isLabeledByFormItem,
    inputId
  };
};
const useProp = (name) => {
  const vm = getCurrentInstance();
  return computed(() => {
    var _a, _b;
    return (_b = (_a = vm == null ? void 0 : vm.proxy) == null ? void 0 : _a.$props) == null ? void 0 : _b[name];
  });
};
const useFormSize = (fallback, ignore = {}) => {
  const emptyRef = ref(void 0);
  const size = ignore.prop ? emptyRef : useProp("size");
  const globalConfig2 = ignore.global ? emptyRef : useGlobalSize();
  const form = ignore.form ? { size: void 0 } : inject(formContextKey, void 0);
  const formItem = ignore.formItem ? { size: void 0 } : inject(formItemContextKey, void 0);
  return computed(() => size.value || unref(fallback) || (formItem == null ? void 0 : formItem.size) || (form == null ? void 0 : form.size) || globalConfig2.value || "");
};
const useFormDisabled = (fallback) => {
  const disabled = useProp("disabled");
  const form = inject(formContextKey, void 0);
  return computed(() => disabled.value || unref(fallback) || (form == null ? void 0 : form.disabled) || false);
};
function useFocusController(target, {
  beforeFocus,
  afterFocus,
  beforeBlur,
  afterBlur
} = {}) {
  const instance = getCurrentInstance();
  const { emit } = instance;
  const wrapperRef = shallowRef();
  const disabled = useProp("disabled");
  const isFocused = ref(false);
  const handleFocus = (event) => {
    const cancelFocus = isFunction$1(beforeFocus) ? beforeFocus(event) : false;
    if (cancelFocus || isFocused.value)
      return;
    isFocused.value = true;
    emit("focus", event);
    afterFocus == null ? void 0 : afterFocus();
  };
  const handleBlur = (event) => {
    var _a;
    const cancelBlur = isFunction$1(beforeBlur) ? beforeBlur(event) : false;
    if (cancelBlur || event.relatedTarget && ((_a = wrapperRef.value) == null ? void 0 : _a.contains(event.relatedTarget)))
      return;
    isFocused.value = false;
    emit("blur", event);
    afterBlur == null ? void 0 : afterBlur();
  };
  const handleClick = () => {
    var _a, _b;
    if (((_a = wrapperRef.value) == null ? void 0 : _a.contains((void 0).activeElement)) && wrapperRef.value !== (void 0).activeElement || disabled.value)
      return;
    (_b = target.value) == null ? void 0 : _b.focus();
  };
  watch([wrapperRef, disabled], ([el, disabled2]) => {
    if (!el)
      return;
    if (disabled2) {
      el.removeAttribute("tabindex");
    } else {
      el.setAttribute("tabindex", "-1");
    }
  });
  useEventListener(wrapperRef, "focus", handleFocus, true);
  useEventListener(wrapperRef, "blur", handleBlur, true);
  useEventListener(wrapperRef, "click", handleClick, true);
  return {
    isFocused,
    wrapperRef,
    handleFocus,
    handleBlur
  };
}
const isKorean = (text) => /([\uAC00-\uD7AF\u3130-\u318F])+/gi.test(text);
function useComposition({
  afterComposition,
  emit
}) {
  const isComposing = ref(false);
  const handleCompositionStart = (event) => {
    emit == null ? void 0 : emit("compositionstart", event);
    isComposing.value = true;
  };
  const handleCompositionUpdate = (event) => {
    var _a;
    emit == null ? void 0 : emit("compositionupdate", event);
    const text = (_a = event.target) == null ? void 0 : _a.value;
    const lastCharacter = text[text.length - 1] || "";
    isComposing.value = !isKorean(lastCharacter);
  };
  const handleCompositionEnd = (event) => {
    emit == null ? void 0 : emit("compositionend", event);
    if (isComposing.value) {
      isComposing.value = false;
      nextTick(() => afterComposition(event));
    }
  };
  const handleComposition = (event) => {
    event.type === "compositionend" ? handleCompositionEnd(event) : handleCompositionUpdate(event);
  };
  return {
    isComposing,
    handleComposition,
    handleCompositionStart,
    handleCompositionUpdate,
    handleCompositionEnd
  };
}
function useCursor(input) {
  let selectionInfo;
  function recordCursor() {
    if (input.value == void 0)
      return;
    const { selectionStart, selectionEnd, value } = input.value;
    if (selectionStart == null || selectionEnd == null)
      return;
    const beforeTxt = value.slice(0, Math.max(0, selectionStart));
    const afterTxt = value.slice(Math.max(0, selectionEnd));
    selectionInfo = {
      selectionStart,
      selectionEnd,
      value,
      beforeTxt,
      afterTxt
    };
  }
  function setCursor() {
    if (input.value == void 0 || selectionInfo == void 0)
      return;
    const { value } = input.value;
    const { beforeTxt, afterTxt, selectionStart } = selectionInfo;
    if (beforeTxt == void 0 || afterTxt == void 0 || selectionStart == void 0)
      return;
    let startPos = value.length;
    if (value.endsWith(afterTxt)) {
      startPos = value.length - afterTxt.length;
    } else if (value.startsWith(beforeTxt)) {
      startPos = beforeTxt.length;
    } else {
      const beforeLastChar = beforeTxt[selectionStart - 1];
      const newIndex = value.indexOf(beforeLastChar, selectionStart - 1);
      if (newIndex !== -1) {
        startPos = newIndex + 1;
      }
    }
    input.value.setSelectionRange(startPos, startPos);
  }
  return [recordCursor, setCursor];
}
const COMPONENT_NAME = "ElInput";
const __default__$o = defineComponent({
  name: COMPONENT_NAME,
  inheritAttrs: false
});
const _sfc_main$G = /* @__PURE__ */ defineComponent({
  ...__default__$o,
  props: inputProps,
  emits: inputEmits,
  setup(__props, { expose, emit }) {
    const props = __props;
    const rawAttrs = useAttrs$1();
    const attrs = useAttrs();
    const slots = useSlots();
    const containerKls = computed(() => [
      props.type === "textarea" ? nsTextarea.b() : nsInput.b(),
      nsInput.m(inputSize.value),
      nsInput.is("disabled", inputDisabled.value),
      nsInput.is("exceed", inputExceed.value),
      {
        [nsInput.b("group")]: slots.prepend || slots.append,
        [nsInput.m("prefix")]: slots.prefix || props.prefixIcon,
        [nsInput.m("suffix")]: slots.suffix || props.suffixIcon || props.clearable || props.showPassword,
        [nsInput.bm("suffix", "password-clear")]: showClear.value && showPwdVisible.value,
        [nsInput.b("hidden")]: props.type === "hidden"
      },
      rawAttrs.class
    ]);
    const wrapperKls = computed(() => [
      nsInput.e("wrapper"),
      nsInput.is("focus", isFocused.value)
    ]);
    const { form: elForm, formItem: elFormItem } = useFormItem();
    const { inputId } = useFormItemInputId(props, {
      formItemContext: elFormItem
    });
    const inputSize = useFormSize();
    const inputDisabled = useFormDisabled();
    const nsInput = useNamespace("input");
    const nsTextarea = useNamespace("textarea");
    const input = shallowRef();
    const textarea = shallowRef();
    const hovering = ref(false);
    const passwordVisible = ref(false);
    const countStyle = ref();
    const textareaCalcStyle = shallowRef(props.inputStyle);
    const _ref = computed(() => input.value || textarea.value);
    const { wrapperRef, isFocused, handleFocus, handleBlur } = useFocusController(_ref, {
      beforeFocus() {
        return inputDisabled.value;
      },
      afterBlur() {
        var _a;
        if (props.validateEvent) {
          (_a = elFormItem == null ? void 0 : elFormItem.validate) == null ? void 0 : _a.call(elFormItem, "blur").catch((err) => debugWarn());
        }
      }
    });
    const needStatusIcon = computed(() => {
      var _a;
      return (_a = elForm == null ? void 0 : elForm.statusIcon) != null ? _a : false;
    });
    const validateState = computed(() => (elFormItem == null ? void 0 : elFormItem.validateState) || "");
    const validateIcon = computed(() => validateState.value && ValidateComponentsMap[validateState.value]);
    const passwordIcon = computed(() => passwordVisible.value ? view_default : hide_default);
    const containerStyle = computed(() => [
      rawAttrs.style
    ]);
    const textareaStyle = computed(() => [
      props.inputStyle,
      textareaCalcStyle.value,
      { resize: props.resize }
    ]);
    const nativeInputValue = computed(() => isNil(props.modelValue) ? "" : String(props.modelValue));
    const showClear = computed(() => props.clearable && !inputDisabled.value && !props.readonly && !!nativeInputValue.value && (isFocused.value || hovering.value));
    const showPwdVisible = computed(() => props.showPassword && !inputDisabled.value && !!nativeInputValue.value && (!!nativeInputValue.value || isFocused.value));
    const isWordLimitVisible = computed(() => props.showWordLimit && !!props.maxlength && (props.type === "text" || props.type === "textarea") && !inputDisabled.value && !props.readonly && !props.showPassword);
    const textLength = computed(() => nativeInputValue.value.length);
    const inputExceed = computed(() => !!isWordLimitVisible.value && textLength.value > Number(props.maxlength));
    const suffixVisible = computed(() => !!slots.suffix || !!props.suffixIcon || showClear.value || props.showPassword || isWordLimitVisible.value || !!validateState.value && needStatusIcon.value);
    const [recordCursor, setCursor] = useCursor(input);
    useResizeObserver(textarea, (entries) => {
      onceInitSizeTextarea();
      if (!isWordLimitVisible.value || props.resize !== "both")
        return;
      const entry2 = entries[0];
      const { width } = entry2.contentRect;
      countStyle.value = {
        right: `calc(100% - ${width + 15 + 6}px)`
      };
    });
    const resizeTextarea = () => {
      const { type, autosize } = props;
      return;
    };
    const createOnceInitResize = (resizeTextarea2) => {
      let isInit = false;
      return () => {
        var _a;
        if (isInit || !props.autosize)
          return;
        const isElHidden = ((_a = textarea.value) == null ? void 0 : _a.offsetParent) === null;
        if (!isElHidden) {
          resizeTextarea2();
          isInit = true;
        }
      };
    };
    const onceInitSizeTextarea = createOnceInitResize(resizeTextarea);
    const setNativeInputValue = () => {
      const input2 = _ref.value;
      const formatterValue = props.formatter ? props.formatter(nativeInputValue.value) : nativeInputValue.value;
      if (!input2 || input2.value === formatterValue)
        return;
      input2.value = formatterValue;
    };
    const handleInput = async (event) => {
      recordCursor();
      let { value } = event.target;
      if (props.formatter && props.parser) {
        value = props.parser(value);
      }
      if (isComposing.value)
        return;
      if (value === nativeInputValue.value) {
        setNativeInputValue();
        return;
      }
      emit(UPDATE_MODEL_EVENT, value);
      emit(INPUT_EVENT, value);
      await nextTick();
      setNativeInputValue();
      setCursor();
    };
    const handleChange = (event) => {
      let { value } = event.target;
      if (props.formatter && props.parser) {
        value = props.parser(value);
      }
      emit(CHANGE_EVENT, value);
    };
    const {
      isComposing,
      handleCompositionStart,
      handleCompositionUpdate,
      handleCompositionEnd
    } = useComposition({ emit, afterComposition: handleInput });
    const handlePasswordVisible = () => {
      recordCursor();
      passwordVisible.value = !passwordVisible.value;
      setTimeout(setCursor);
    };
    const focus = () => {
      var _a;
      return (_a = _ref.value) == null ? void 0 : _a.focus();
    };
    const blur = () => {
      var _a;
      return (_a = _ref.value) == null ? void 0 : _a.blur();
    };
    const handleMouseLeave = (evt) => {
      hovering.value = false;
      emit("mouseleave", evt);
    };
    const handleMouseEnter = (evt) => {
      hovering.value = true;
      emit("mouseenter", evt);
    };
    const handleKeydown = (evt) => {
      emit("keydown", evt);
    };
    const select = () => {
      var _a;
      (_a = _ref.value) == null ? void 0 : _a.select();
    };
    const clear = () => {
      emit(UPDATE_MODEL_EVENT, "");
      emit(CHANGE_EVENT, "");
      emit("clear");
      emit(INPUT_EVENT, "");
    };
    watch(() => props.modelValue, () => {
      var _a;
      nextTick(() => resizeTextarea());
      if (props.validateEvent) {
        (_a = elFormItem == null ? void 0 : elFormItem.validate) == null ? void 0 : _a.call(elFormItem, "change").catch((err) => debugWarn());
      }
    });
    watch(nativeInputValue, () => setNativeInputValue());
    watch(() => props.type, async () => {
      await nextTick();
      setNativeInputValue();
      resizeTextarea();
    });
    expose({
      input,
      textarea,
      ref: _ref,
      textareaStyle,
      autosize: toRef(props, "autosize"),
      isComposing,
      focus,
      blur,
      select,
      clear,
      resizeTextarea
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass([
          unref(containerKls),
          {
            [unref(nsInput).bm("group", "append")]: _ctx.$slots.append,
            [unref(nsInput).bm("group", "prepend")]: _ctx.$slots.prepend
          }
        ]),
        style: normalizeStyle(unref(containerStyle)),
        onMouseenter: handleMouseEnter,
        onMouseleave: handleMouseLeave
      }, [
        createCommentVNode(" input "),
        _ctx.type !== "textarea" ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
          createCommentVNode(" prepend slot "),
          _ctx.$slots.prepend ? (openBlock(), createElementBlock("div", {
            key: 0,
            class: normalizeClass(unref(nsInput).be("group", "prepend"))
          }, [
            renderSlot(_ctx.$slots, "prepend")
          ], 2)) : createCommentVNode("v-if", true),
          createElementVNode("div", {
            ref_key: "wrapperRef",
            ref: wrapperRef,
            class: normalizeClass(unref(wrapperKls))
          }, [
            createCommentVNode(" prefix slot "),
            _ctx.$slots.prefix || _ctx.prefixIcon ? (openBlock(), createElementBlock("span", {
              key: 0,
              class: normalizeClass(unref(nsInput).e("prefix"))
            }, [
              createElementVNode("span", {
                class: normalizeClass(unref(nsInput).e("prefix-inner"))
              }, [
                renderSlot(_ctx.$slots, "prefix"),
                _ctx.prefixIcon ? (openBlock(), createBlock(unref(ElIcon), {
                  key: 0,
                  class: normalizeClass(unref(nsInput).e("icon"))
                }, {
                  default: withCtx(() => [
                    (openBlock(), createBlock(resolveDynamicComponent(_ctx.prefixIcon)))
                  ]),
                  _: 1
                }, 8, ["class"])) : createCommentVNode("v-if", true)
              ], 2)
            ], 2)) : createCommentVNode("v-if", true),
            createElementVNode("input", mergeProps({
              id: unref(inputId),
              ref_key: "input",
              ref: input,
              class: unref(nsInput).e("inner")
            }, unref(attrs), {
              minlength: _ctx.minlength,
              maxlength: _ctx.maxlength,
              type: _ctx.showPassword ? passwordVisible.value ? "text" : "password" : _ctx.type,
              disabled: unref(inputDisabled),
              readonly: _ctx.readonly,
              autocomplete: _ctx.autocomplete,
              tabindex: _ctx.tabindex,
              "aria-label": _ctx.ariaLabel,
              placeholder: _ctx.placeholder,
              style: _ctx.inputStyle,
              form: _ctx.form,
              autofocus: _ctx.autofocus,
              role: _ctx.containerRole,
              onCompositionstart: unref(handleCompositionStart),
              onCompositionupdate: unref(handleCompositionUpdate),
              onCompositionend: unref(handleCompositionEnd),
              onInput: handleInput,
              onChange: handleChange,
              onKeydown: handleKeydown
            }), null, 16, ["id", "minlength", "maxlength", "type", "disabled", "readonly", "autocomplete", "tabindex", "aria-label", "placeholder", "form", "autofocus", "role", "onCompositionstart", "onCompositionupdate", "onCompositionend"]),
            createCommentVNode(" suffix slot "),
            unref(suffixVisible) ? (openBlock(), createElementBlock("span", {
              key: 1,
              class: normalizeClass(unref(nsInput).e("suffix"))
            }, [
              createElementVNode("span", {
                class: normalizeClass(unref(nsInput).e("suffix-inner"))
              }, [
                !unref(showClear) || !unref(showPwdVisible) || !unref(isWordLimitVisible) ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
                  renderSlot(_ctx.$slots, "suffix"),
                  _ctx.suffixIcon ? (openBlock(), createBlock(unref(ElIcon), {
                    key: 0,
                    class: normalizeClass(unref(nsInput).e("icon"))
                  }, {
                    default: withCtx(() => [
                      (openBlock(), createBlock(resolveDynamicComponent(_ctx.suffixIcon)))
                    ]),
                    _: 1
                  }, 8, ["class"])) : createCommentVNode("v-if", true)
                ], 64)) : createCommentVNode("v-if", true),
                unref(showClear) ? (openBlock(), createBlock(unref(ElIcon), {
                  key: 1,
                  class: normalizeClass([unref(nsInput).e("icon"), unref(nsInput).e("clear")]),
                  onMousedown: withModifiers(unref(NOOP), ["prevent"]),
                  onClick: clear
                }, {
                  default: withCtx(() => [
                    createVNode(unref(circle_close_default))
                  ]),
                  _: 1
                }, 8, ["class", "onMousedown"])) : createCommentVNode("v-if", true),
                unref(showPwdVisible) ? (openBlock(), createBlock(unref(ElIcon), {
                  key: 2,
                  class: normalizeClass([unref(nsInput).e("icon"), unref(nsInput).e("password")]),
                  onClick: handlePasswordVisible
                }, {
                  default: withCtx(() => [
                    (openBlock(), createBlock(resolveDynamicComponent(unref(passwordIcon))))
                  ]),
                  _: 1
                }, 8, ["class"])) : createCommentVNode("v-if", true),
                unref(isWordLimitVisible) ? (openBlock(), createElementBlock("span", {
                  key: 3,
                  class: normalizeClass(unref(nsInput).e("count"))
                }, [
                  createElementVNode("span", {
                    class: normalizeClass(unref(nsInput).e("count-inner"))
                  }, toDisplayString(unref(textLength)) + " / " + toDisplayString(_ctx.maxlength), 3)
                ], 2)) : createCommentVNode("v-if", true),
                unref(validateState) && unref(validateIcon) && unref(needStatusIcon) ? (openBlock(), createBlock(unref(ElIcon), {
                  key: 4,
                  class: normalizeClass([
                    unref(nsInput).e("icon"),
                    unref(nsInput).e("validateIcon"),
                    unref(nsInput).is("loading", unref(validateState) === "validating")
                  ])
                }, {
                  default: withCtx(() => [
                    (openBlock(), createBlock(resolveDynamicComponent(unref(validateIcon))))
                  ]),
                  _: 1
                }, 8, ["class"])) : createCommentVNode("v-if", true)
              ], 2)
            ], 2)) : createCommentVNode("v-if", true)
          ], 2),
          createCommentVNode(" append slot "),
          _ctx.$slots.append ? (openBlock(), createElementBlock("div", {
            key: 1,
            class: normalizeClass(unref(nsInput).be("group", "append"))
          }, [
            renderSlot(_ctx.$slots, "append")
          ], 2)) : createCommentVNode("v-if", true)
        ], 64)) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
          createCommentVNode(" textarea "),
          createElementVNode("textarea", mergeProps({
            id: unref(inputId),
            ref_key: "textarea",
            ref: textarea,
            class: [unref(nsTextarea).e("inner"), unref(nsInput).is("focus", unref(isFocused))]
          }, unref(attrs), {
            minlength: _ctx.minlength,
            maxlength: _ctx.maxlength,
            tabindex: _ctx.tabindex,
            disabled: unref(inputDisabled),
            readonly: _ctx.readonly,
            autocomplete: _ctx.autocomplete,
            style: unref(textareaStyle),
            "aria-label": _ctx.ariaLabel,
            placeholder: _ctx.placeholder,
            form: _ctx.form,
            autofocus: _ctx.autofocus,
            rows: _ctx.rows,
            role: _ctx.containerRole,
            onCompositionstart: unref(handleCompositionStart),
            onCompositionupdate: unref(handleCompositionUpdate),
            onCompositionend: unref(handleCompositionEnd),
            onInput: handleInput,
            onFocus: unref(handleFocus),
            onBlur: unref(handleBlur),
            onChange: handleChange,
            onKeydown: handleKeydown
          }), null, 16, ["id", "minlength", "maxlength", "tabindex", "disabled", "readonly", "autocomplete", "aria-label", "placeholder", "form", "autofocus", "rows", "role", "onCompositionstart", "onCompositionupdate", "onCompositionend", "onFocus", "onBlur"]),
          unref(isWordLimitVisible) ? (openBlock(), createElementBlock("span", {
            key: 0,
            style: normalizeStyle(countStyle.value),
            class: normalizeClass(unref(nsInput).e("count"))
          }, toDisplayString(unref(textLength)) + " / " + toDisplayString(_ctx.maxlength), 7)) : createCommentVNode("v-if", true)
        ], 64))
      ], 38);
    };
  }
});
var Input = /* @__PURE__ */ _export_sfc$1(_sfc_main$G, [["__file", "input.vue"]]);
const ElInput = withInstall(Input);
const POPPER_INJECTION_KEY = Symbol("popper");
const POPPER_CONTENT_INJECTION_KEY = Symbol("popperContent");
const roleTypes = [
  "dialog",
  "grid",
  "group",
  "listbox",
  "menu",
  "navigation",
  "tooltip",
  "tree"
];
const popperProps = buildProps({
  role: {
    type: String,
    values: roleTypes,
    default: "tooltip"
  }
});
const __default__$n = defineComponent({
  name: "ElPopper",
  inheritAttrs: false
});
const _sfc_main$F = /* @__PURE__ */ defineComponent({
  ...__default__$n,
  props: popperProps,
  setup(__props, { expose }) {
    const props = __props;
    const triggerRef = ref();
    const popperInstanceRef = ref();
    const contentRef = ref();
    const referenceRef = ref();
    const role = computed(() => props.role);
    const popperProvides = {
      triggerRef,
      popperInstanceRef,
      contentRef,
      referenceRef,
      role
    };
    expose(popperProvides);
    provide(POPPER_INJECTION_KEY, popperProvides);
    return (_ctx, _cache) => {
      return renderSlot(_ctx.$slots, "default");
    };
  }
});
var Popper = /* @__PURE__ */ _export_sfc$1(_sfc_main$F, [["__file", "popper.vue"]]);
const __default__$m = defineComponent({
  name: "ElPopperArrow",
  inheritAttrs: false
});
const _sfc_main$E = /* @__PURE__ */ defineComponent({
  ...__default__$m,
  setup(__props, { expose }) {
    const ns = useNamespace("popper");
    const { arrowRef, arrowStyle } = inject(POPPER_CONTENT_INJECTION_KEY, void 0);
    expose({
      arrowRef
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("span", {
        ref_key: "arrowRef",
        ref: arrowRef,
        class: normalizeClass(unref(ns).e("arrow")),
        style: normalizeStyle(unref(arrowStyle)),
        "data-popper-arrow": ""
      }, null, 6);
    };
  }
});
var ElPopperArrow = /* @__PURE__ */ _export_sfc$1(_sfc_main$E, [["__file", "arrow.vue"]]);
const popperTriggerProps = buildProps({
  virtualRef: {
    type: definePropType(Object)
  },
  virtualTriggering: Boolean,
  onMouseenter: {
    type: definePropType(Function)
  },
  onMouseleave: {
    type: definePropType(Function)
  },
  onClick: {
    type: definePropType(Function)
  },
  onKeydown: {
    type: definePropType(Function)
  },
  onFocus: {
    type: definePropType(Function)
  },
  onBlur: {
    type: definePropType(Function)
  },
  onContextmenu: {
    type: definePropType(Function)
  },
  id: String,
  open: Boolean
});
const FORWARD_REF_INJECTION_KEY = Symbol("elForwardRef");
const useForwardRef = (forwardRef) => {
  const setForwardRef = (el) => {
    forwardRef.value = el;
  };
  provide(FORWARD_REF_INJECTION_KEY, {
    setForwardRef
  });
};
const useForwardRefDirective = (setForwardRef) => {
  return {
    mounted(el) {
      setForwardRef(el);
    },
    updated(el) {
      setForwardRef(el);
    },
    unmounted() {
      setForwardRef(null);
    }
  };
};
const isFocusable = (element) => {
  if (element.tabIndex > 0 || element.tabIndex === 0 && element.getAttribute("tabIndex") !== null) {
    return true;
  }
  if (element.tabIndex < 0 || element.hasAttribute("disabled") || element.getAttribute("aria-disabled") === "true") {
    return false;
  }
  switch (element.nodeName) {
    case "A": {
      return !!element.href && element.rel !== "ignore";
    }
    case "INPUT": {
      return !(element.type === "hidden" || element.type === "file");
    }
    case "BUTTON":
    case "SELECT":
    case "TEXTAREA": {
      return true;
    }
    default: {
      return false;
    }
  }
};
const NAME = "ElOnlyChild";
const OnlyChild = defineComponent({
  name: NAME,
  setup(_, {
    slots,
    attrs
  }) {
    var _a;
    const forwardRefInjection = inject(FORWARD_REF_INJECTION_KEY);
    const forwardRefDirective = useForwardRefDirective((_a = forwardRefInjection == null ? void 0 : forwardRefInjection.setForwardRef) != null ? _a : NOOP);
    return () => {
      var _a2;
      const defaultSlot = (_a2 = slots.default) == null ? void 0 : _a2.call(slots, attrs);
      if (!defaultSlot)
        return null;
      if (defaultSlot.length > 1) {
        return null;
      }
      const firstLegitNode = findFirstLegitChild(defaultSlot);
      if (!firstLegitNode) {
        return null;
      }
      return withDirectives(cloneVNode(firstLegitNode, attrs), [[forwardRefDirective]]);
    };
  }
});
function findFirstLegitChild(node) {
  if (!node)
    return null;
  const children = node;
  for (const child of children) {
    if (isObject$2(child)) {
      switch (child.type) {
        case Comment:
          continue;
        case Text:
        case "svg":
          return wrapTextContent(child);
        case Fragment:
          return findFirstLegitChild(child.children);
        default:
          return child;
      }
    }
    return wrapTextContent(child);
  }
  return null;
}
function wrapTextContent(s) {
  const ns = useNamespace("only-child");
  return createVNode("span", {
    "class": ns.e("content")
  }, [s]);
}
const __default__$l = defineComponent({
  name: "ElPopperTrigger",
  inheritAttrs: false
});
const _sfc_main$D = /* @__PURE__ */ defineComponent({
  ...__default__$l,
  props: popperTriggerProps,
  setup(__props, { expose }) {
    const props = __props;
    const { role, triggerRef } = inject(POPPER_INJECTION_KEY, void 0);
    useForwardRef(triggerRef);
    const ariaControls = computed(() => {
      return ariaHaspopup.value ? props.id : void 0;
    });
    const ariaDescribedby = computed(() => {
      if (role && role.value === "tooltip") {
        return props.open && props.id ? props.id : void 0;
      }
      return void 0;
    });
    const ariaHaspopup = computed(() => {
      if (role && role.value !== "tooltip") {
        return role.value;
      }
      return void 0;
    });
    const ariaExpanded = computed(() => {
      return ariaHaspopup.value ? `${props.open}` : void 0;
    });
    expose({
      triggerRef
    });
    return (_ctx, _cache) => {
      return !_ctx.virtualTriggering ? (openBlock(), createBlock(unref(OnlyChild), mergeProps({ key: 0 }, _ctx.$attrs, {
        "aria-controls": unref(ariaControls),
        "aria-describedby": unref(ariaDescribedby),
        "aria-expanded": unref(ariaExpanded),
        "aria-haspopup": unref(ariaHaspopup)
      }), {
        default: withCtx(() => [
          renderSlot(_ctx.$slots, "default")
        ]),
        _: 3
      }, 16, ["aria-controls", "aria-describedby", "aria-expanded", "aria-haspopup"])) : createCommentVNode("v-if", true);
    };
  }
});
var ElPopperTrigger = /* @__PURE__ */ _export_sfc$1(_sfc_main$D, [["__file", "trigger.vue"]]);
const FOCUSOUT_PREVENTED = "focus-trap.focusout-prevented";
const FOCUSOUT_PREVENTED_OPTS = {
  cancelable: true,
  bubbles: false
};
const ON_TRAP_FOCUS_EVT = "focusAfterTrapped";
const ON_RELEASE_FOCUS_EVT = "focusAfterReleased";
const FOCUS_TRAP_INJECTION_KEY = Symbol("elFocusTrap");
const focusReason = ref();
const lastUserFocusTimestamp = ref(0);
const lastAutomatedFocusTimestamp = ref(0);
const obtainAllFocusableElements = (element) => {
  const nodes = [];
  const walker = (void 0).createTreeWalker(element, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (node) => {
      const isHiddenInput = node.tagName === "INPUT" && node.type === "hidden";
      if (node.disabled || node.hidden || isHiddenInput)
        return NodeFilter.FILTER_SKIP;
      return node.tabIndex >= 0 || node === (void 0).activeElement ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  while (walker.nextNode())
    nodes.push(walker.currentNode);
  return nodes;
};
const getVisibleElement = (elements, container) => {
  for (const element of elements) {
    if (!isHidden(element, container))
      return element;
  }
};
const isHidden = (element, container) => {
  if (getComputedStyle(element).visibility === "hidden")
    return true;
  while (element) {
    if (container && element === container)
      return false;
    if (getComputedStyle(element).display === "none")
      return true;
    element = element.parentElement;
  }
  return false;
};
const getEdges = (container) => {
  const focusable = obtainAllFocusableElements(container);
  const first = getVisibleElement(focusable, container);
  const last = getVisibleElement(focusable.reverse(), container);
  return [first, last];
};
const isSelectable = (element) => {
  return element instanceof HTMLInputElement && "select" in element;
};
const tryFocus = (element, shouldSelect) => {
  if (element && element.focus) {
    const prevFocusedElement = (void 0).activeElement;
    let cleanup = false;
    if (isElement(element) && !isFocusable(element) && !element.getAttribute("tabindex")) {
      element.setAttribute("tabindex", "-1");
      cleanup = true;
    }
    element.focus({ preventScroll: true });
    lastAutomatedFocusTimestamp.value = (void 0).performance.now();
    if (element !== prevFocusedElement && isSelectable(element) && shouldSelect) {
      element.select();
    }
    if (isElement(element) && cleanup) {
      element.removeAttribute("tabindex");
    }
  }
};
const useFocusReason = () => {
  return {
    focusReason,
    lastUserFocusTimestamp,
    lastAutomatedFocusTimestamp
  };
};
const createFocusOutPreventedEvent = (detail) => {
  return new CustomEvent(FOCUSOUT_PREVENTED, {
    ...FOCUSOUT_PREVENTED_OPTS,
    detail
  });
};
const EVENT_CODE = {
  tab: "Tab",
  enter: "Enter",
  space: "Space",
  left: "ArrowLeft",
  up: "ArrowUp",
  right: "ArrowRight",
  down: "ArrowDown",
  delete: "Delete",
  backspace: "Backspace",
  numpadEnter: "NumpadEnter"
};
const _sfc_main$C = defineComponent({
  name: "ElFocusTrap",
  inheritAttrs: false,
  props: {
    loop: Boolean,
    trapped: Boolean,
    focusTrapEl: Object,
    focusStartEl: {
      type: [Object, String],
      default: "first"
    }
  },
  emits: [
    ON_TRAP_FOCUS_EVT,
    ON_RELEASE_FOCUS_EVT,
    "focusin",
    "focusout",
    "focusout-prevented",
    "release-requested"
  ],
  setup(props, { emit }) {
    const forwardRef = ref();
    let lastFocusAfterTrapped;
    const { focusReason: focusReason2 } = useFocusReason();
    const onKeydown = (e) => {
      if (!props.loop && !props.trapped)
        return;
      const { code, altKey, ctrlKey, metaKey, currentTarget, shiftKey } = e;
      const { loop } = props;
      const isTabbing = code === EVENT_CODE.tab && !altKey && !ctrlKey && !metaKey;
      const currentFocusingEl = (void 0).activeElement;
      if (isTabbing && currentFocusingEl) {
        const container = currentTarget;
        const [first, last] = getEdges(container);
        const isTabbable = first && last;
        if (!isTabbable) {
          if (currentFocusingEl === container) {
            const focusoutPreventedEvent = createFocusOutPreventedEvent({
              focusReason: focusReason2.value
            });
            emit("focusout-prevented", focusoutPreventedEvent);
            if (!focusoutPreventedEvent.defaultPrevented) {
              e.preventDefault();
            }
          }
        } else {
          if (!shiftKey && currentFocusingEl === last) {
            const focusoutPreventedEvent = createFocusOutPreventedEvent({
              focusReason: focusReason2.value
            });
            emit("focusout-prevented", focusoutPreventedEvent);
            if (!focusoutPreventedEvent.defaultPrevented) {
              e.preventDefault();
              if (loop)
                tryFocus(first, true);
            }
          } else if (shiftKey && [first, container].includes(currentFocusingEl)) {
            const focusoutPreventedEvent = createFocusOutPreventedEvent({
              focusReason: focusReason2.value
            });
            emit("focusout-prevented", focusoutPreventedEvent);
            if (!focusoutPreventedEvent.defaultPrevented) {
              e.preventDefault();
              if (loop)
                tryFocus(last, true);
            }
          }
        }
      }
    };
    provide(FOCUS_TRAP_INJECTION_KEY, {
      focusTrapRef: forwardRef,
      onKeydown
    });
    watch(() => props.focusTrapEl, (focusTrapEl) => {
      if (focusTrapEl) {
        forwardRef.value = focusTrapEl;
      }
    }, { immediate: true });
    watch([forwardRef], ([forwardRef2], [oldForwardRef]) => {
      if (forwardRef2) {
        forwardRef2.addEventListener("keydown", onKeydown);
        forwardRef2.addEventListener("focusin", onFocusIn);
        forwardRef2.addEventListener("focusout", onFocusOut);
      }
      if (oldForwardRef) {
        oldForwardRef.removeEventListener("keydown", onKeydown);
        oldForwardRef.removeEventListener("focusin", onFocusIn);
        oldForwardRef.removeEventListener("focusout", onFocusOut);
      }
    });
    const onFocusIn = (e) => {
      const trapContainer = unref(forwardRef);
      if (!trapContainer)
        return;
      const target = e.target;
      const relatedTarget = e.relatedTarget;
      const isFocusedInTrap = target && trapContainer.contains(target);
      if (!props.trapped) {
        relatedTarget && trapContainer.contains(relatedTarget);
      }
      if (isFocusedInTrap)
        emit("focusin", e);
      if (props.trapped) {
        if (isFocusedInTrap) {
          lastFocusAfterTrapped = target;
        } else {
          tryFocus(lastFocusAfterTrapped, true);
        }
      }
    };
    const onFocusOut = (e) => {
      const trapContainer = unref(forwardRef);
      if (!trapContainer)
        return;
      if (props.trapped) {
        const relatedTarget = e.relatedTarget;
        if (!isNil(relatedTarget) && !trapContainer.contains(relatedTarget)) {
          setTimeout(() => {
            if (props.trapped) {
              const focusoutPreventedEvent = createFocusOutPreventedEvent({
                focusReason: focusReason2.value
              });
              emit("focusout-prevented", focusoutPreventedEvent);
              if (!focusoutPreventedEvent.defaultPrevented) {
                tryFocus(lastFocusAfterTrapped, true);
              }
            }
          }, 0);
        }
      } else {
        const target = e.target;
        const isFocusedInTrap = target && trapContainer.contains(target);
        if (!isFocusedInTrap)
          emit("focusout", e);
      }
    };
    return {
      onKeydown
    };
  }
});
function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
  return renderSlot(_ctx.$slots, "default", { handleKeydown: _ctx.onKeydown });
}
var ElFocusTrap = /* @__PURE__ */ _export_sfc$1(_sfc_main$C, [["render", _sfc_render$2], ["__file", "focus-trap.vue"]]);
const popperArrowProps = buildProps({
  arrowOffset: {
    type: Number,
    default: 5
  }
});
const POSITIONING_STRATEGIES = ["fixed", "absolute"];
const popperCoreConfigProps = buildProps({
  boundariesPadding: {
    type: Number,
    default: 0
  },
  fallbackPlacements: {
    type: definePropType(Array),
    default: void 0
  },
  gpuAcceleration: {
    type: Boolean,
    default: true
  },
  offset: {
    type: Number,
    default: 12
  },
  placement: {
    type: String,
    values: placements,
    default: "bottom"
  },
  popperOptions: {
    type: definePropType(Object),
    default: () => ({})
  },
  strategy: {
    type: String,
    values: POSITIONING_STRATEGIES,
    default: "absolute"
  }
});
const popperContentProps = buildProps({
  ...popperCoreConfigProps,
  ...popperArrowProps,
  id: String,
  style: {
    type: definePropType([String, Array, Object])
  },
  className: {
    type: definePropType([String, Array, Object])
  },
  effect: {
    type: definePropType(String),
    default: "dark"
  },
  visible: Boolean,
  enterable: {
    type: Boolean,
    default: true
  },
  pure: Boolean,
  focusOnShow: {
    type: Boolean,
    default: false
  },
  trapping: {
    type: Boolean,
    default: false
  },
  popperClass: {
    type: definePropType([String, Array, Object])
  },
  popperStyle: {
    type: definePropType([String, Array, Object])
  },
  referenceEl: {
    type: definePropType(Object)
  },
  triggerTargetEl: {
    type: definePropType(Object)
  },
  stopPopperMouseEvent: {
    type: Boolean,
    default: true
  },
  virtualTriggering: Boolean,
  zIndex: Number,
  ...useAriaProps(["ariaLabel"])
});
const popperContentEmits = {
  mouseenter: (evt) => evt instanceof MouseEvent,
  mouseleave: (evt) => evt instanceof MouseEvent,
  focus: () => true,
  blur: () => true,
  close: () => true
};
const usePopperContentFocusTrap = (props, emit) => {
  const trapped = ref(false);
  const focusStartRef = ref();
  const onFocusAfterTrapped = () => {
    emit("focus");
  };
  const onFocusAfterReleased = (event) => {
    var _a;
    if (((_a = event.detail) == null ? void 0 : _a.focusReason) !== "pointer") {
      focusStartRef.value = "first";
      emit("blur");
    }
  };
  const onFocusInTrap = (event) => {
    if (props.visible && !trapped.value) {
      if (event.target) {
        focusStartRef.value = event.target;
      }
      trapped.value = true;
    }
  };
  const onFocusoutPrevented = (event) => {
    if (!props.trapping) {
      if (event.detail.focusReason === "pointer") {
        event.preventDefault();
      }
      trapped.value = false;
    }
  };
  const onReleaseRequested = () => {
    trapped.value = false;
    emit("close");
  };
  return {
    focusStartRef,
    trapped,
    onFocusAfterReleased,
    onFocusAfterTrapped,
    onFocusInTrap,
    onFocusoutPrevented,
    onReleaseRequested
  };
};
const buildPopperOptions = (props, modifiers = []) => {
  const { placement, strategy, popperOptions } = props;
  const options = {
    placement,
    strategy,
    ...popperOptions,
    modifiers: [...genModifiers(props), ...modifiers]
  };
  deriveExtraModifiers(options, popperOptions == null ? void 0 : popperOptions.modifiers);
  return options;
};
const unwrapMeasurableEl = ($el) => {
  return;
};
function genModifiers(options) {
  const { offset, gpuAcceleration, fallbackPlacements } = options;
  return [
    {
      name: "offset",
      options: {
        offset: [0, offset != null ? offset : 12]
      }
    },
    {
      name: "preventOverflow",
      options: {
        padding: {
          top: 2,
          bottom: 2,
          left: 5,
          right: 5
        }
      }
    },
    {
      name: "flip",
      options: {
        padding: 5,
        fallbackPlacements
      }
    },
    {
      name: "computeStyles",
      options: {
        gpuAcceleration
      }
    }
  ];
}
function deriveExtraModifiers(options, modifiers) {
  if (modifiers) {
    options.modifiers = [...options.modifiers, ...modifiers != null ? modifiers : []];
  }
}
const usePopper = (referenceElementRef, popperElementRef, opts = {}) => {
  const stateUpdater = {
    name: "updateState",
    enabled: true,
    phase: "write",
    fn: ({ state }) => {
      const derivedState = deriveState(state);
      Object.assign(states.value, derivedState);
    },
    requires: ["computeStyles"]
  };
  const options = computed(() => {
    const { onFirstUpdate, placement, strategy, modifiers } = unref(opts);
    return {
      onFirstUpdate,
      placement: placement || "bottom",
      strategy: strategy || "absolute",
      modifiers: [
        ...modifiers || [],
        stateUpdater,
        { name: "applyStyles", enabled: false }
      ]
    };
  });
  const instanceRef = shallowRef();
  const states = ref({
    styles: {
      popper: {
        position: unref(options).strategy,
        left: "0",
        top: "0"
      },
      arrow: {
        position: "absolute"
      }
    },
    attributes: {}
  });
  const destroy = () => {
    if (!instanceRef.value)
      return;
    instanceRef.value.destroy();
    instanceRef.value = void 0;
  };
  watch(options, (newOptions) => {
    const instance = unref(instanceRef);
    if (instance) {
      instance.setOptions(newOptions);
    }
  }, {
    deep: true
  });
  watch([referenceElementRef, popperElementRef], ([referenceElement, popperElement]) => {
    destroy();
    if (!referenceElement || !popperElement)
      return;
    instanceRef.value = createPopper(referenceElement, popperElement, unref(options));
  });
  return {
    state: computed(() => {
      var _a;
      return { ...((_a = unref(instanceRef)) == null ? void 0 : _a.state) || {} };
    }),
    styles: computed(() => unref(states).styles),
    attributes: computed(() => unref(states).attributes),
    update: () => {
      var _a;
      return (_a = unref(instanceRef)) == null ? void 0 : _a.update();
    },
    forceUpdate: () => {
      var _a;
      return (_a = unref(instanceRef)) == null ? void 0 : _a.forceUpdate();
    },
    instanceRef: computed(() => unref(instanceRef))
  };
};
function deriveState(state) {
  const elements = Object.keys(state.elements);
  const styles = fromPairs(elements.map((element) => [element, state.styles[element] || {}]));
  const attributes = fromPairs(elements.map((element) => [element, state.attributes[element]]));
  return {
    styles,
    attributes
  };
}
const DEFAULT_ARROW_OFFSET = 0;
const usePopperContent = (props) => {
  const { popperInstanceRef, contentRef, triggerRef, role } = inject(POPPER_INJECTION_KEY, void 0);
  const arrowRef = ref();
  const arrowOffset = computed(() => props.arrowOffset);
  const eventListenerModifier = computed(() => {
    return {
      name: "eventListeners",
      enabled: !!props.visible
    };
  });
  const arrowModifier = computed(() => {
    var _a;
    const arrowEl = unref(arrowRef);
    const offset = (_a = unref(arrowOffset)) != null ? _a : DEFAULT_ARROW_OFFSET;
    return {
      name: "arrow",
      enabled: !isUndefined$1(arrowEl),
      options: {
        element: arrowEl,
        padding: offset
      }
    };
  });
  const options = computed(() => {
    return {
      onFirstUpdate: () => {
        update();
      },
      ...buildPopperOptions(props, [
        unref(arrowModifier),
        unref(eventListenerModifier)
      ])
    };
  });
  const computedReference = computed(() => unwrapMeasurableEl(props.referenceEl) || unref(triggerRef));
  const { attributes, state, styles, update, forceUpdate, instanceRef } = usePopper(computedReference, contentRef, options);
  watch(instanceRef, (instance) => popperInstanceRef.value = instance, {
    flush: "sync"
  });
  return {
    attributes,
    arrowRef,
    contentRef,
    instanceRef,
    state,
    styles,
    role,
    forceUpdate,
    update
  };
};
const usePopperContentDOM = (props, {
  attributes,
  styles,
  role
}) => {
  const { nextZIndex } = useZIndex();
  const ns = useNamespace("popper");
  const contentAttrs = computed(() => unref(attributes).popper);
  const contentZIndex = ref(isNumber(props.zIndex) ? props.zIndex : nextZIndex());
  const contentClass = computed(() => [
    ns.b(),
    ns.is("pure", props.pure),
    ns.is(props.effect),
    props.popperClass
  ]);
  const contentStyle = computed(() => {
    return [
      { zIndex: unref(contentZIndex) },
      unref(styles).popper,
      props.popperStyle || {}
    ];
  });
  const ariaModal = computed(() => role.value === "dialog" ? "false" : void 0);
  const arrowStyle = computed(() => unref(styles).arrow || {});
  const updateZIndex = () => {
    contentZIndex.value = isNumber(props.zIndex) ? props.zIndex : nextZIndex();
  };
  return {
    ariaModal,
    arrowStyle,
    contentAttrs,
    contentClass,
    contentStyle,
    contentZIndex,
    updateZIndex
  };
};
const __default__$k = defineComponent({
  name: "ElPopperContent"
});
const _sfc_main$B = /* @__PURE__ */ defineComponent({
  ...__default__$k,
  props: popperContentProps,
  emits: popperContentEmits,
  setup(__props, { expose, emit }) {
    const props = __props;
    const {
      focusStartRef,
      trapped,
      onFocusAfterReleased,
      onFocusAfterTrapped,
      onFocusInTrap,
      onFocusoutPrevented,
      onReleaseRequested
    } = usePopperContentFocusTrap(props, emit);
    const { attributes, arrowRef, contentRef, styles, instanceRef, role, update } = usePopperContent(props);
    const {
      arrowStyle,
      contentAttrs,
      contentClass,
      contentStyle,
      updateZIndex
    } = usePopperContentDOM(props, {
      styles,
      attributes,
      role
    });
    const formItemContext = inject(formItemContextKey, void 0);
    provide(POPPER_CONTENT_INJECTION_KEY, {
      arrowStyle,
      arrowRef
    });
    if (formItemContext) {
      provide(formItemContextKey, {
        ...formItemContext,
        addInputId: NOOP,
        removeInputId: NOOP
      });
    }
    const updatePopper = (shouldUpdateZIndex = true) => {
      update();
      shouldUpdateZIndex && updateZIndex();
    };
    expose({
      popperContentRef: contentRef,
      popperInstanceRef: instanceRef,
      updatePopper,
      contentStyle
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", mergeProps({
        ref_key: "contentRef",
        ref: contentRef
      }, unref(contentAttrs), {
        style: unref(contentStyle),
        class: unref(contentClass),
        tabindex: "-1",
        onMouseenter: (e) => _ctx.$emit("mouseenter", e),
        onMouseleave: (e) => _ctx.$emit("mouseleave", e)
      }), [
        createVNode(unref(ElFocusTrap), {
          trapped: unref(trapped),
          "trap-on-focus-in": true,
          "focus-trap-el": unref(contentRef),
          "focus-start-el": unref(focusStartRef),
          onFocusAfterTrapped: unref(onFocusAfterTrapped),
          onFocusAfterReleased: unref(onFocusAfterReleased),
          onFocusin: unref(onFocusInTrap),
          onFocusoutPrevented: unref(onFocusoutPrevented),
          onReleaseRequested: unref(onReleaseRequested)
        }, {
          default: withCtx(() => [
            renderSlot(_ctx.$slots, "default")
          ]),
          _: 3
        }, 8, ["trapped", "focus-trap-el", "focus-start-el", "onFocusAfterTrapped", "onFocusAfterReleased", "onFocusin", "onFocusoutPrevented", "onReleaseRequested"])
      ], 16, ["onMouseenter", "onMouseleave"]);
    };
  }
});
var ElPopperContent = /* @__PURE__ */ _export_sfc$1(_sfc_main$B, [["__file", "content.vue"]]);
const ElPopper = withInstall(Popper);
const TOOLTIP_INJECTION_KEY = Symbol("elTooltip");
function useTimeout() {
  let timeoutHandle;
  const registerTimeout = (fn, delay) => {
    cancelTimeout();
    timeoutHandle = (void 0).setTimeout(fn, delay);
  };
  const cancelTimeout = () => (void 0).clearTimeout(timeoutHandle);
  tryOnScopeDispose(() => cancelTimeout());
  return {
    registerTimeout,
    cancelTimeout
  };
}
const useDelayedToggleProps = buildProps({
  showAfter: {
    type: Number,
    default: 0
  },
  hideAfter: {
    type: Number,
    default: 200
  },
  autoClose: {
    type: Number,
    default: 0
  }
});
const useDelayedToggle = ({
  showAfter,
  hideAfter,
  autoClose,
  open,
  close
}) => {
  const { registerTimeout } = useTimeout();
  const {
    registerTimeout: registerTimeoutForAutoClose,
    cancelTimeout: cancelTimeoutForAutoClose
  } = useTimeout();
  const onOpen = (event) => {
    registerTimeout(() => {
      open(event);
      const _autoClose = unref(autoClose);
      if (isNumber(_autoClose) && _autoClose > 0) {
        registerTimeoutForAutoClose(() => {
          close(event);
        }, _autoClose);
      }
    }, unref(showAfter));
  };
  const onClose = (event) => {
    cancelTimeoutForAutoClose();
    registerTimeout(() => {
      close(event);
    }, unref(hideAfter));
  };
  return {
    onOpen,
    onClose
  };
};
const teleportProps = buildProps({
  to: {
    type: definePropType([String, Object]),
    required: true
  },
  disabled: Boolean
});
const useTooltipContentProps = buildProps({
  ...useDelayedToggleProps,
  ...popperContentProps,
  appendTo: {
    type: teleportProps.to.type
  },
  content: {
    type: String,
    default: ""
  },
  rawContent: Boolean,
  persistent: Boolean,
  visible: {
    type: definePropType(Boolean),
    default: null
  },
  transition: String,
  teleported: {
    type: Boolean,
    default: true
  },
  disabled: Boolean,
  ...useAriaProps(["ariaLabel"])
});
const useTooltipTriggerProps = buildProps({
  ...popperTriggerProps,
  disabled: Boolean,
  trigger: {
    type: definePropType([String, Array]),
    default: "hover"
  },
  triggerKeys: {
    type: definePropType(Array),
    default: () => [EVENT_CODE.enter, EVENT_CODE.numpadEnter, EVENT_CODE.space]
  }
});
const _prop = buildProp({
  type: definePropType(Boolean),
  default: null
});
const _event = buildProp({
  type: definePropType(Function)
});
const createModelToggleComposable = (name) => {
  const updateEventKey = `update:${name}`;
  const updateEventKeyRaw2 = `onUpdate:${name}`;
  const useModelToggleEmits2 = [updateEventKey];
  const useModelToggleProps2 = {
    [name]: _prop,
    [updateEventKeyRaw2]: _event
  };
  const useModelToggle2 = ({
    indicator,
    toggleReason,
    shouldHideWhenRouteChanges,
    shouldProceed,
    onShow,
    onHide
  }) => {
    const instance = getCurrentInstance();
    const { emit } = instance;
    const props = instance.props;
    const hasUpdateHandler = computed(() => isFunction$1(props[updateEventKeyRaw2]));
    const isModelBindingAbsent = computed(() => props[name] === null);
    const doShow = (event) => {
      if (indicator.value === true) {
        return;
      }
      indicator.value = true;
      if (toggleReason) {
        toggleReason.value = event;
      }
      if (isFunction$1(onShow)) {
        onShow(event);
      }
    };
    const doHide = (event) => {
      if (indicator.value === false) {
        return;
      }
      indicator.value = false;
      if (toggleReason) {
        toggleReason.value = event;
      }
      if (isFunction$1(onHide)) {
        onHide(event);
      }
    };
    const show = (event) => {
      if (props.disabled === true || isFunction$1(shouldProceed) && !shouldProceed())
        return;
      hasUpdateHandler.value && isClient;
      if (isModelBindingAbsent.value || true) {
        doShow(event);
      }
    };
    const hide = (event) => {
      if (props.disabled === true || true)
        return;
    };
    const onChange = (val) => {
      if (!isBoolean(val))
        return;
      if (props.disabled && val) {
        if (hasUpdateHandler.value) {
          emit(updateEventKey, false);
        }
      } else if (indicator.value !== val) {
        if (val) {
          doShow();
        } else {
          doHide();
        }
      }
    };
    const toggle = () => {
      if (indicator.value) {
        hide();
      } else {
        show();
      }
    };
    watch(() => props[name], onChange);
    if (shouldHideWhenRouteChanges && instance.appContext.config.globalProperties.$route !== void 0) {
      watch(() => ({
        ...instance.proxy.$route
      }), () => {
        if (shouldHideWhenRouteChanges.value && indicator.value) {
          hide();
        }
      });
    }
    return {
      hide,
      show,
      toggle,
      hasUpdateHandler
    };
  };
  return {
    useModelToggle: useModelToggle2,
    useModelToggleProps: useModelToggleProps2,
    useModelToggleEmits: useModelToggleEmits2
  };
};
const {
  useModelToggleProps: useTooltipModelToggleProps,
  useModelToggleEmits: useTooltipModelToggleEmits,
  useModelToggle: useTooltipModelToggle
} = createModelToggleComposable("visible");
const useTooltipProps = buildProps({
  ...popperProps,
  ...useTooltipModelToggleProps,
  ...useTooltipContentProps,
  ...useTooltipTriggerProps,
  ...popperArrowProps,
  showArrow: {
    type: Boolean,
    default: true
  }
});
const tooltipEmits = [
  ...useTooltipModelToggleEmits,
  "before-show",
  "before-hide",
  "show",
  "hide",
  "open",
  "close"
];
const isTriggerType = (trigger, type) => {
  if (isArray$1(trigger)) {
    return trigger.includes(type);
  }
  return trigger === type;
};
const whenTrigger = (trigger, type, handler) => {
  return (e) => {
    isTriggerType(unref(trigger), type) && handler(e);
  };
};
const composeEventHandlers = (theirsHandler, oursHandler, { checkForDefaultPrevented = true } = {}) => {
  const handleEvent = (event) => {
    const shouldPrevent = theirsHandler == null ? void 0 : theirsHandler(event);
    if (checkForDefaultPrevented === false || !shouldPrevent) {
      return oursHandler == null ? void 0 : oursHandler(event);
    }
  };
  return handleEvent;
};
const __default__$j = defineComponent({
  name: "ElTooltipTrigger"
});
const _sfc_main$A = /* @__PURE__ */ defineComponent({
  ...__default__$j,
  props: useTooltipTriggerProps,
  setup(__props, { expose }) {
    const props = __props;
    const ns = useNamespace("tooltip");
    const { controlled, id, open, onOpen, onClose, onToggle } = inject(TOOLTIP_INJECTION_KEY, void 0);
    const triggerRef = ref(null);
    const stopWhenControlledOrDisabled = () => {
      if (unref(controlled) || props.disabled) {
        return true;
      }
    };
    const trigger = toRef(props, "trigger");
    const onMouseenter = composeEventHandlers(stopWhenControlledOrDisabled, whenTrigger(trigger, "hover", onOpen));
    const onMouseleave = composeEventHandlers(stopWhenControlledOrDisabled, whenTrigger(trigger, "hover", onClose));
    const onClick = composeEventHandlers(stopWhenControlledOrDisabled, whenTrigger(trigger, "click", (e) => {
      if (e.button === 0) {
        onToggle(e);
      }
    }));
    const onFocus = composeEventHandlers(stopWhenControlledOrDisabled, whenTrigger(trigger, "focus", onOpen));
    const onBlur = composeEventHandlers(stopWhenControlledOrDisabled, whenTrigger(trigger, "focus", onClose));
    const onContextMenu = composeEventHandlers(stopWhenControlledOrDisabled, whenTrigger(trigger, "contextmenu", (e) => {
      e.preventDefault();
      onToggle(e);
    }));
    const onKeydown = composeEventHandlers(stopWhenControlledOrDisabled, (e) => {
      const { code } = e;
      if (props.triggerKeys.includes(code)) {
        e.preventDefault();
        onToggle(e);
      }
    });
    expose({
      triggerRef
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(ElPopperTrigger), {
        id: unref(id),
        "virtual-ref": _ctx.virtualRef,
        open: unref(open),
        "virtual-triggering": _ctx.virtualTriggering,
        class: normalizeClass(unref(ns).e("trigger")),
        onBlur: unref(onBlur),
        onClick: unref(onClick),
        onContextmenu: unref(onContextMenu),
        onFocus: unref(onFocus),
        onMouseenter: unref(onMouseenter),
        onMouseleave: unref(onMouseleave),
        onKeydown: unref(onKeydown)
      }, {
        default: withCtx(() => [
          renderSlot(_ctx.$slots, "default")
        ]),
        _: 3
      }, 8, ["id", "virtual-ref", "open", "virtual-triggering", "class", "onBlur", "onClick", "onContextmenu", "onFocus", "onMouseenter", "onMouseleave", "onKeydown"]);
    };
  }
});
var ElTooltipTrigger = /* @__PURE__ */ _export_sfc$1(_sfc_main$A, [["__file", "trigger.vue"]]);
const _sfc_main$z = /* @__PURE__ */ defineComponent({
  __name: "teleport",
  props: teleportProps,
  setup(__props) {
    return (_ctx, _cache) => {
      return _ctx.disabled ? renderSlot(_ctx.$slots, "default", { key: 0 }) : (openBlock(), createBlock(Teleport$1, {
        key: 1,
        to: _ctx.to
      }, [
        renderSlot(_ctx.$slots, "default")
      ], 8, ["to"]));
    };
  }
});
var Teleport = /* @__PURE__ */ _export_sfc$1(_sfc_main$z, [["__file", "teleport.vue"]]);
const ElTeleport = withInstall(Teleport);
const usePopperContainerId = () => {
  const namespace = useGetDerivedNamespace();
  const idInjection = useIdInjection();
  const id = computed(() => {
    return `${namespace.value}-popper-container-${idInjection.prefix}`;
  });
  const selector = computed(() => `#${id.value}`);
  return {
    id,
    selector
  };
};
const usePopperContainer = () => {
  const { id, selector } = usePopperContainerId();
  return {
    id,
    selector
  };
};
const __default__$i = defineComponent({
  name: "ElTooltipContent",
  inheritAttrs: false
});
const _sfc_main$y = /* @__PURE__ */ defineComponent({
  ...__default__$i,
  props: useTooltipContentProps,
  setup(__props, { expose }) {
    const props = __props;
    const { selector } = usePopperContainerId();
    const ns = useNamespace("tooltip");
    const contentRef = ref();
    const popperContentRef = computedEager(() => {
      var _a;
      return (_a = contentRef.value) == null ? void 0 : _a.popperContentRef;
    });
    let stopHandle;
    const {
      controlled,
      id,
      open,
      trigger,
      onClose,
      onOpen,
      onShow,
      onHide,
      onBeforeShow,
      onBeforeHide
    } = inject(TOOLTIP_INJECTION_KEY, void 0);
    const transitionClass = computed(() => {
      return props.transition || `${ns.namespace.value}-fade-in-linear`;
    });
    const persistentRef = computed(() => {
      return props.persistent;
    });
    const shouldRender = computed(() => {
      return unref(persistentRef) ? true : unref(open);
    });
    const shouldShow = computed(() => {
      return props.disabled ? false : unref(open);
    });
    const appendTo = computed(() => {
      return props.appendTo || selector.value;
    });
    const contentStyle = computed(() => {
      var _a;
      return (_a = props.style) != null ? _a : {};
    });
    const ariaHidden = ref(true);
    const onTransitionLeave = () => {
      onHide();
      isFocusInsideContent() && tryFocus((void 0).body);
      ariaHidden.value = true;
    };
    const stopWhenControlled = () => {
      if (unref(controlled))
        return true;
    };
    const onContentEnter = composeEventHandlers(stopWhenControlled, () => {
      if (props.enterable && unref(trigger) === "hover") {
        onOpen();
      }
    });
    const onContentLeave = composeEventHandlers(stopWhenControlled, () => {
      if (unref(trigger) === "hover") {
        onClose();
      }
    });
    const onBeforeEnter = () => {
      var _a, _b;
      (_b = (_a = contentRef.value) == null ? void 0 : _a.updatePopper) == null ? void 0 : _b.call(_a);
      onBeforeShow == null ? void 0 : onBeforeShow();
    };
    const onBeforeLeave = () => {
      onBeforeHide == null ? void 0 : onBeforeHide();
    };
    const onAfterShow = () => {
      onShow();
    };
    const onBlur = () => {
      if (!props.virtualTriggering) {
        onClose();
      }
    };
    const isFocusInsideContent = (event) => {
      var _a;
      const popperContent = (_a = contentRef.value) == null ? void 0 : _a.popperContentRef;
      const activeElement = (event == null ? void 0 : event.relatedTarget) || (void 0).activeElement;
      return popperContent == null ? void 0 : popperContent.contains(activeElement);
    };
    watch(() => unref(open), (val) => {
      if (!val) {
        stopHandle == null ? void 0 : stopHandle();
      } else {
        ariaHidden.value = false;
        stopHandle = onClickOutside(popperContentRef, () => {
          if (unref(controlled))
            return;
          const $trigger = unref(trigger);
          if ($trigger !== "hover") {
            onClose();
          }
        });
      }
    }, {
      flush: "post"
    });
    watch(() => props.content, () => {
      var _a, _b;
      (_b = (_a = contentRef.value) == null ? void 0 : _a.updatePopper) == null ? void 0 : _b.call(_a);
    });
    expose({
      contentRef,
      isFocusInsideContent
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(ElTeleport), {
        disabled: !_ctx.teleported,
        to: unref(appendTo)
      }, {
        default: withCtx(() => [
          createVNode(Transition, {
            name: unref(transitionClass),
            onAfterLeave: onTransitionLeave,
            onBeforeEnter,
            onAfterEnter: onAfterShow,
            onBeforeLeave
          }, {
            default: withCtx(() => [
              unref(shouldRender) ? withDirectives((openBlock(), createBlock(unref(ElPopperContent), mergeProps({
                key: 0,
                id: unref(id),
                ref_key: "contentRef",
                ref: contentRef
              }, _ctx.$attrs, {
                "aria-label": _ctx.ariaLabel,
                "aria-hidden": ariaHidden.value,
                "boundaries-padding": _ctx.boundariesPadding,
                "fallback-placements": _ctx.fallbackPlacements,
                "gpu-acceleration": _ctx.gpuAcceleration,
                offset: _ctx.offset,
                placement: _ctx.placement,
                "popper-options": _ctx.popperOptions,
                "arrow-offset": _ctx.arrowOffset,
                strategy: _ctx.strategy,
                effect: _ctx.effect,
                enterable: _ctx.enterable,
                pure: _ctx.pure,
                "popper-class": _ctx.popperClass,
                "popper-style": [_ctx.popperStyle, unref(contentStyle)],
                "reference-el": _ctx.referenceEl,
                "trigger-target-el": _ctx.triggerTargetEl,
                visible: unref(shouldShow),
                "z-index": _ctx.zIndex,
                onMouseenter: unref(onContentEnter),
                onMouseleave: unref(onContentLeave),
                onBlur,
                onClose: unref(onClose)
              }), {
                default: withCtx(() => [
                  renderSlot(_ctx.$slots, "default")
                ]),
                _: 3
              }, 16, ["id", "aria-label", "aria-hidden", "boundaries-padding", "fallback-placements", "gpu-acceleration", "offset", "placement", "popper-options", "arrow-offset", "strategy", "effect", "enterable", "pure", "popper-class", "popper-style", "reference-el", "trigger-target-el", "visible", "z-index", "onMouseenter", "onMouseleave", "onClose"])), [
                [vShow, unref(shouldShow)]
              ]) : createCommentVNode("v-if", true)
            ]),
            _: 3
          }, 8, ["name"])
        ]),
        _: 3
      }, 8, ["disabled", "to"]);
    };
  }
});
var ElTooltipContent = /* @__PURE__ */ _export_sfc$1(_sfc_main$y, [["__file", "content.vue"]]);
const __default__$h = defineComponent({
  name: "ElTooltip"
});
const _sfc_main$x = /* @__PURE__ */ defineComponent({
  ...__default__$h,
  props: useTooltipProps,
  emits: tooltipEmits,
  setup(__props, { expose, emit }) {
    const props = __props;
    usePopperContainer();
    const ns = useNamespace("tooltip");
    const id = useId();
    const popperRef = ref();
    const contentRef = ref();
    const updatePopper = () => {
      var _a;
      const popperComponent = unref(popperRef);
      if (popperComponent) {
        (_a = popperComponent.popperInstanceRef) == null ? void 0 : _a.update();
      }
    };
    const open = ref(false);
    const toggleReason = ref();
    const { show, hide, hasUpdateHandler } = useTooltipModelToggle({
      indicator: open,
      toggleReason
    });
    const { onOpen, onClose } = useDelayedToggle({
      showAfter: toRef(props, "showAfter"),
      hideAfter: toRef(props, "hideAfter"),
      autoClose: toRef(props, "autoClose"),
      open: show,
      close: hide
    });
    const controlled = computed(() => isBoolean(props.visible) && !hasUpdateHandler.value);
    const kls = computed(() => {
      return [ns.b(), props.popperClass];
    });
    provide(TOOLTIP_INJECTION_KEY, {
      controlled,
      id,
      open: readonly(open),
      trigger: toRef(props, "trigger"),
      onOpen: (event) => {
        onOpen(event);
      },
      onClose: (event) => {
        onClose(event);
      },
      onToggle: (event) => {
        if (unref(open)) {
          onClose(event);
        } else {
          onOpen(event);
        }
      },
      onShow: () => {
        emit("show", toggleReason.value);
      },
      onHide: () => {
        emit("hide", toggleReason.value);
      },
      onBeforeShow: () => {
        emit("before-show", toggleReason.value);
      },
      onBeforeHide: () => {
        emit("before-hide", toggleReason.value);
      },
      updatePopper
    });
    watch(() => props.disabled, (disabled) => {
      if (disabled && open.value) {
        open.value = false;
      }
    });
    const isFocusInsideContent = (event) => {
      var _a;
      return (_a = contentRef.value) == null ? void 0 : _a.isFocusInsideContent(event);
    };
    expose({
      popperRef,
      contentRef,
      isFocusInsideContent,
      updatePopper,
      onOpen,
      onClose,
      hide
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(ElPopper), {
        ref_key: "popperRef",
        ref: popperRef,
        role: _ctx.role
      }, {
        default: withCtx(() => [
          createVNode(ElTooltipTrigger, {
            disabled: _ctx.disabled,
            trigger: _ctx.trigger,
            "trigger-keys": _ctx.triggerKeys,
            "virtual-ref": _ctx.virtualRef,
            "virtual-triggering": _ctx.virtualTriggering
          }, {
            default: withCtx(() => [
              _ctx.$slots.default ? renderSlot(_ctx.$slots, "default", { key: 0 }) : createCommentVNode("v-if", true)
            ]),
            _: 3
          }, 8, ["disabled", "trigger", "trigger-keys", "virtual-ref", "virtual-triggering"]),
          createVNode(ElTooltipContent, {
            ref_key: "contentRef",
            ref: contentRef,
            "aria-label": _ctx.ariaLabel,
            "boundaries-padding": _ctx.boundariesPadding,
            content: _ctx.content,
            disabled: _ctx.disabled,
            effect: _ctx.effect,
            enterable: _ctx.enterable,
            "fallback-placements": _ctx.fallbackPlacements,
            "hide-after": _ctx.hideAfter,
            "gpu-acceleration": _ctx.gpuAcceleration,
            offset: _ctx.offset,
            persistent: _ctx.persistent,
            "popper-class": unref(kls),
            "popper-style": _ctx.popperStyle,
            placement: _ctx.placement,
            "popper-options": _ctx.popperOptions,
            "arrow-offset": _ctx.arrowOffset,
            pure: _ctx.pure,
            "raw-content": _ctx.rawContent,
            "reference-el": _ctx.referenceEl,
            "trigger-target-el": _ctx.triggerTargetEl,
            "show-after": _ctx.showAfter,
            strategy: _ctx.strategy,
            teleported: _ctx.teleported,
            transition: _ctx.transition,
            "virtual-triggering": _ctx.virtualTriggering,
            "z-index": _ctx.zIndex,
            "append-to": _ctx.appendTo
          }, {
            default: withCtx(() => [
              renderSlot(_ctx.$slots, "content", {}, () => [
                _ctx.rawContent ? (openBlock(), createElementBlock("span", {
                  key: 0,
                  innerHTML: _ctx.content
                }, null, 8, ["innerHTML"])) : (openBlock(), createElementBlock("span", { key: 1 }, toDisplayString(_ctx.content), 1))
              ]),
              _ctx.showArrow ? (openBlock(), createBlock(unref(ElPopperArrow), { key: 0 })) : createCommentVNode("v-if", true)
            ]),
            _: 3
          }, 8, ["aria-label", "boundaries-padding", "content", "disabled", "effect", "enterable", "fallback-placements", "hide-after", "gpu-acceleration", "offset", "persistent", "popper-class", "popper-style", "placement", "popper-options", "arrow-offset", "pure", "raw-content", "reference-el", "trigger-target-el", "show-after", "strategy", "teleported", "transition", "virtual-triggering", "z-index", "append-to"])
        ]),
        _: 3
      }, 8, ["role"]);
    };
  }
});
var Tooltip = /* @__PURE__ */ _export_sfc$1(_sfc_main$x, [["__file", "tooltip.vue"]]);
const ElTooltip = withInstall(Tooltip);
const buttonGroupContextKey = Symbol("buttonGroupContextKey");
const useDeprecated = ({ from, replacement, scope, version, ref: ref2, type = "API" }, condition) => {
  watch(() => unref(condition), (val) => {
  }, {
    immediate: true
  });
};
const useButton = (props, emit) => {
  useDeprecated({
    from: "type.text",
    replacement: "link",
    version: "3.0.0",
    scope: "props",
    ref: "https://element-plus.org/en-US/component/button.html#button-attributes"
  }, computed(() => props.type === "text"));
  const buttonGroupContext = inject(buttonGroupContextKey, void 0);
  const globalConfig2 = useGlobalConfig("button");
  const { form } = useFormItem();
  const _size = useFormSize(computed(() => buttonGroupContext == null ? void 0 : buttonGroupContext.size));
  const _disabled = useFormDisabled();
  const _ref = ref();
  const slots = useSlots();
  const _type = computed(() => props.type || (buttonGroupContext == null ? void 0 : buttonGroupContext.type) || "");
  const autoInsertSpace = computed(() => {
    var _a, _b, _c;
    return (_c = (_b = props.autoInsertSpace) != null ? _b : (_a = globalConfig2.value) == null ? void 0 : _a.autoInsertSpace) != null ? _c : false;
  });
  const _props = computed(() => {
    if (props.tag === "button") {
      return {
        ariaDisabled: _disabled.value || props.loading,
        disabled: _disabled.value || props.loading,
        autofocus: props.autofocus,
        type: props.nativeType
      };
    }
    return {};
  });
  const shouldAddSpace = computed(() => {
    var _a;
    const defaultSlot = (_a = slots.default) == null ? void 0 : _a.call(slots);
    if (autoInsertSpace.value && (defaultSlot == null ? void 0 : defaultSlot.length) === 1) {
      const slot = defaultSlot[0];
      if ((slot == null ? void 0 : slot.type) === Text) {
        const text = slot.children;
        return new RegExp("^\\p{Unified_Ideograph}{2}$", "u").test(text.trim());
      }
    }
    return false;
  });
  const handleClick = (evt) => {
    if (_disabled.value || props.loading) {
      evt.stopPropagation();
      return;
    }
    if (props.nativeType === "reset") {
      form == null ? void 0 : form.resetFields();
    }
    emit("click", evt);
  };
  return {
    _disabled,
    _size,
    _type,
    _ref,
    _props,
    shouldAddSpace,
    handleClick
  };
};
const buttonTypes = [
  "default",
  "primary",
  "success",
  "warning",
  "info",
  "danger",
  "text",
  ""
];
const buttonNativeTypes = ["button", "submit", "reset"];
const buttonProps = buildProps({
  size: useSizeProp,
  disabled: Boolean,
  type: {
    type: String,
    values: buttonTypes,
    default: ""
  },
  icon: {
    type: iconPropType
  },
  nativeType: {
    type: String,
    values: buttonNativeTypes,
    default: "button"
  },
  loading: Boolean,
  loadingIcon: {
    type: iconPropType,
    default: () => loading_default
  },
  plain: Boolean,
  text: Boolean,
  link: Boolean,
  bg: Boolean,
  autofocus: Boolean,
  round: Boolean,
  circle: Boolean,
  color: String,
  dark: Boolean,
  autoInsertSpace: {
    type: Boolean,
    default: void 0
  },
  tag: {
    type: definePropType([String, Object]),
    default: "button"
  }
});
const buttonEmits = {
  click: (evt) => evt instanceof MouseEvent
};
function darken(color2, amount = 20) {
  return color2.mix("#141414", amount).toString();
}
function useButtonCustomStyle(props) {
  const _disabled = useFormDisabled();
  const ns = useNamespace("button");
  return computed(() => {
    let styles = {};
    let buttonColor = props.color;
    if (buttonColor) {
      const match = buttonColor.match(/var\((.*?)\)/);
      if (match) {
        buttonColor = (void 0).getComputedStyle((void 0).document.documentElement).getPropertyValue(match[1]);
      }
      const color2 = new TinyColor(buttonColor);
      const activeBgColor = props.dark ? color2.tint(20).toString() : darken(color2, 20);
      if (props.plain) {
        styles = ns.cssVarBlock({
          "bg-color": props.dark ? darken(color2, 90) : color2.tint(90).toString(),
          "text-color": buttonColor,
          "border-color": props.dark ? darken(color2, 50) : color2.tint(50).toString(),
          "hover-text-color": `var(${ns.cssVarName("color-white")})`,
          "hover-bg-color": buttonColor,
          "hover-border-color": buttonColor,
          "active-bg-color": activeBgColor,
          "active-text-color": `var(${ns.cssVarName("color-white")})`,
          "active-border-color": activeBgColor
        });
        if (_disabled.value) {
          styles[ns.cssVarBlockName("disabled-bg-color")] = props.dark ? darken(color2, 90) : color2.tint(90).toString();
          styles[ns.cssVarBlockName("disabled-text-color")] = props.dark ? darken(color2, 50) : color2.tint(50).toString();
          styles[ns.cssVarBlockName("disabled-border-color")] = props.dark ? darken(color2, 80) : color2.tint(80).toString();
        }
      } else {
        const hoverBgColor = props.dark ? darken(color2, 30) : color2.tint(30).toString();
        const textColor = color2.isDark() ? `var(${ns.cssVarName("color-white")})` : `var(${ns.cssVarName("color-black")})`;
        styles = ns.cssVarBlock({
          "bg-color": buttonColor,
          "text-color": textColor,
          "border-color": buttonColor,
          "hover-bg-color": hoverBgColor,
          "hover-text-color": textColor,
          "hover-border-color": hoverBgColor,
          "active-bg-color": activeBgColor,
          "active-border-color": activeBgColor
        });
        if (_disabled.value) {
          const disabledButtonColor = props.dark ? darken(color2, 50) : color2.tint(50).toString();
          styles[ns.cssVarBlockName("disabled-bg-color")] = disabledButtonColor;
          styles[ns.cssVarBlockName("disabled-text-color")] = props.dark ? "rgba(255, 255, 255, 0.5)" : `var(${ns.cssVarName("color-white")})`;
          styles[ns.cssVarBlockName("disabled-border-color")] = disabledButtonColor;
        }
      }
    }
    return styles;
  });
}
const __default__$g = defineComponent({
  name: "ElButton"
});
const _sfc_main$w = /* @__PURE__ */ defineComponent({
  ...__default__$g,
  props: buttonProps,
  emits: buttonEmits,
  setup(__props, { expose, emit }) {
    const props = __props;
    const buttonStyle = useButtonCustomStyle(props);
    const ns = useNamespace("button");
    const { _ref, _size, _type, _disabled, _props, shouldAddSpace, handleClick } = useButton(props, emit);
    const buttonKls = computed(() => [
      ns.b(),
      ns.m(_type.value),
      ns.m(_size.value),
      ns.is("disabled", _disabled.value),
      ns.is("loading", props.loading),
      ns.is("plain", props.plain),
      ns.is("round", props.round),
      ns.is("circle", props.circle),
      ns.is("text", props.text),
      ns.is("link", props.link),
      ns.is("has-bg", props.bg)
    ]);
    expose({
      ref: _ref,
      size: _size,
      type: _type,
      disabled: _disabled,
      shouldAddSpace
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(resolveDynamicComponent(_ctx.tag), mergeProps({
        ref_key: "_ref",
        ref: _ref
      }, unref(_props), {
        class: unref(buttonKls),
        style: unref(buttonStyle),
        onClick: unref(handleClick)
      }), {
        default: withCtx(() => [
          _ctx.loading ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
            _ctx.$slots.loading ? renderSlot(_ctx.$slots, "loading", { key: 0 }) : (openBlock(), createBlock(unref(ElIcon), {
              key: 1,
              class: normalizeClass(unref(ns).is("loading"))
            }, {
              default: withCtx(() => [
                (openBlock(), createBlock(resolveDynamicComponent(_ctx.loadingIcon)))
              ]),
              _: 1
            }, 8, ["class"]))
          ], 64)) : _ctx.icon || _ctx.$slots.icon ? (openBlock(), createBlock(unref(ElIcon), { key: 1 }, {
            default: withCtx(() => [
              _ctx.icon ? (openBlock(), createBlock(resolveDynamicComponent(_ctx.icon), { key: 0 })) : renderSlot(_ctx.$slots, "icon", { key: 1 })
            ]),
            _: 3
          })) : createCommentVNode("v-if", true),
          _ctx.$slots.default ? (openBlock(), createElementBlock("span", {
            key: 2,
            class: normalizeClass({ [unref(ns).em("text", "expand")]: unref(shouldAddSpace) })
          }, [
            renderSlot(_ctx.$slots, "default")
          ], 2)) : createCommentVNode("v-if", true)
        ]),
        _: 3
      }, 16, ["class", "style", "onClick"]);
    };
  }
});
var Button = /* @__PURE__ */ _export_sfc$1(_sfc_main$w, [["__file", "button.vue"]]);
const buttonGroupProps = {
  size: buttonProps.size,
  type: buttonProps.type
};
const __default__$f = defineComponent({
  name: "ElButtonGroup"
});
const _sfc_main$v = /* @__PURE__ */ defineComponent({
  ...__default__$f,
  props: buttonGroupProps,
  setup(__props) {
    const props = __props;
    provide(buttonGroupContextKey, reactive({
      size: toRef(props, "size"),
      type: toRef(props, "type")
    }));
    const ns = useNamespace("button");
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(unref(ns).b("group"))
      }, [
        renderSlot(_ctx.$slots, "default")
      ], 2);
    };
  }
});
var ButtonGroup = /* @__PURE__ */ _export_sfc$1(_sfc_main$v, [["__file", "button-group.vue"]]);
const ElButton = withInstall(Button, {
  ButtonGroup
});
withNoopInstall(ButtonGroup);
const cardProps = buildProps({
  header: {
    type: String,
    default: ""
  },
  footer: {
    type: String,
    default: ""
  },
  bodyStyle: {
    type: definePropType([String, Object, Array]),
    default: ""
  },
  headerClass: String,
  bodyClass: String,
  footerClass: String,
  shadow: {
    type: String,
    values: ["always", "hover", "never"],
    default: "always"
  }
});
const __default__$e = defineComponent({
  name: "ElCard"
});
const _sfc_main$u = /* @__PURE__ */ defineComponent({
  ...__default__$e,
  props: cardProps,
  setup(__props) {
    const ns = useNamespace("card");
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass([unref(ns).b(), unref(ns).is(`${_ctx.shadow}-shadow`)])
      }, [
        _ctx.$slots.header || _ctx.header ? (openBlock(), createElementBlock("div", {
          key: 0,
          class: normalizeClass([unref(ns).e("header"), _ctx.headerClass])
        }, [
          renderSlot(_ctx.$slots, "header", {}, () => [
            createTextVNode(toDisplayString(_ctx.header), 1)
          ])
        ], 2)) : createCommentVNode("v-if", true),
        createElementVNode("div", {
          class: normalizeClass([unref(ns).e("body"), _ctx.bodyClass]),
          style: normalizeStyle(_ctx.bodyStyle)
        }, [
          renderSlot(_ctx.$slots, "default")
        ], 6),
        _ctx.$slots.footer || _ctx.footer ? (openBlock(), createElementBlock("div", {
          key: 1,
          class: normalizeClass([unref(ns).e("footer"), _ctx.footerClass])
        }, [
          renderSlot(_ctx.$slots, "footer", {}, () => [
            createTextVNode(toDisplayString(_ctx.footer), 1)
          ])
        ], 2)) : createCommentVNode("v-if", true)
      ], 2);
    };
  }
});
var Card = /* @__PURE__ */ _export_sfc$1(_sfc_main$u, [["__file", "card.vue"]]);
const ElCard = withInstall(Card);
var PatchFlags = /* @__PURE__ */ ((PatchFlags2) => {
  PatchFlags2[PatchFlags2["TEXT"] = 1] = "TEXT";
  PatchFlags2[PatchFlags2["CLASS"] = 2] = "CLASS";
  PatchFlags2[PatchFlags2["STYLE"] = 4] = "STYLE";
  PatchFlags2[PatchFlags2["PROPS"] = 8] = "PROPS";
  PatchFlags2[PatchFlags2["FULL_PROPS"] = 16] = "FULL_PROPS";
  PatchFlags2[PatchFlags2["HYDRATE_EVENTS"] = 32] = "HYDRATE_EVENTS";
  PatchFlags2[PatchFlags2["STABLE_FRAGMENT"] = 64] = "STABLE_FRAGMENT";
  PatchFlags2[PatchFlags2["KEYED_FRAGMENT"] = 128] = "KEYED_FRAGMENT";
  PatchFlags2[PatchFlags2["UNKEYED_FRAGMENT"] = 256] = "UNKEYED_FRAGMENT";
  PatchFlags2[PatchFlags2["NEED_PATCH"] = 512] = "NEED_PATCH";
  PatchFlags2[PatchFlags2["DYNAMIC_SLOTS"] = 1024] = "DYNAMIC_SLOTS";
  PatchFlags2[PatchFlags2["HOISTED"] = -1] = "HOISTED";
  PatchFlags2[PatchFlags2["BAIL"] = -2] = "BAIL";
  return PatchFlags2;
})(PatchFlags || {});
const getNormalizedProps = (node) => {
  if (!isVNode(node)) {
    return {};
  }
  const raw = node.props || {};
  const type = (isVNode(node.type) ? node.type.props : void 0) || {};
  const props = {};
  Object.keys(type).forEach((key) => {
    if (hasOwn(type[key], "default")) {
      props[key] = type[key].default;
    }
  });
  Object.keys(raw).forEach((key) => {
    props[camelize(key)] = raw[key];
  });
  return props;
};
const flattedChildren = (children) => {
  const vNodes = isArray$1(children) ? children : [children];
  const result = [];
  vNodes.forEach((child) => {
    var _a;
    if (isArray$1(child)) {
      result.push(...flattedChildren(child));
    } else if (isVNode(child) && ((_a = child.component) == null ? void 0 : _a.subTree)) {
      result.push(child, ...flattedChildren(child.component.subTree));
    } else if (isVNode(child) && isArray$1(child.children)) {
      result.push(...flattedChildren(child.children));
    } else if (isVNode(child) && child.shapeFlag === 2) {
      result.push(...flattedChildren(child.type()));
    } else {
      result.push(child);
    }
  });
  return result;
};
const colProps = buildProps({
  tag: {
    type: String,
    default: "div"
  },
  span: {
    type: Number,
    default: 24
  },
  offset: {
    type: Number,
    default: 0
  },
  pull: {
    type: Number,
    default: 0
  },
  push: {
    type: Number,
    default: 0
  },
  xs: {
    type: definePropType([Number, Object]),
    default: () => mutable({})
  },
  sm: {
    type: definePropType([Number, Object]),
    default: () => mutable({})
  },
  md: {
    type: definePropType([Number, Object]),
    default: () => mutable({})
  },
  lg: {
    type: definePropType([Number, Object]),
    default: () => mutable({})
  },
  xl: {
    type: definePropType([Number, Object]),
    default: () => mutable({})
  }
});
const rowContextKey = Symbol("rowContextKey");
const __default__$d = defineComponent({
  name: "ElCol"
});
const _sfc_main$t = /* @__PURE__ */ defineComponent({
  ...__default__$d,
  props: colProps,
  setup(__props) {
    const props = __props;
    const { gutter } = inject(rowContextKey, { gutter: computed(() => 0) });
    const ns = useNamespace("col");
    const style2 = computed(() => {
      const styles = {};
      if (gutter.value) {
        styles.paddingLeft = styles.paddingRight = `${gutter.value / 2}px`;
      }
      return styles;
    });
    const colKls = computed(() => {
      const classes2 = [];
      const pos = ["span", "offset", "pull", "push"];
      pos.forEach((prop) => {
        const size = props[prop];
        if (isNumber(size)) {
          if (prop === "span")
            classes2.push(ns.b(`${props[prop]}`));
          else if (size > 0)
            classes2.push(ns.b(`${prop}-${props[prop]}`));
        }
      });
      const sizes = ["xs", "sm", "md", "lg", "xl"];
      sizes.forEach((size) => {
        if (isNumber(props[size])) {
          classes2.push(ns.b(`${size}-${props[size]}`));
        } else if (isObject$2(props[size])) {
          Object.entries(props[size]).forEach(([prop, sizeProp]) => {
            classes2.push(prop !== "span" ? ns.b(`${size}-${prop}-${sizeProp}`) : ns.b(`${size}-${sizeProp}`));
          });
        }
      });
      if (gutter.value) {
        classes2.push(ns.is("guttered"));
      }
      return [ns.b(), classes2];
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(resolveDynamicComponent(_ctx.tag), {
        class: normalizeClass(unref(colKls)),
        style: normalizeStyle(unref(style2))
      }, {
        default: withCtx(() => [
          renderSlot(_ctx.$slots, "default")
        ]),
        _: 3
      }, 8, ["class", "style"]);
    };
  }
});
var Col = /* @__PURE__ */ _export_sfc$1(_sfc_main$t, [["__file", "col.vue"]]);
const ElCol = withInstall(Col);
const configProviderProps = buildProps({
  a11y: {
    type: Boolean,
    default: true
  },
  locale: {
    type: definePropType(Object)
  },
  size: useSizeProp,
  button: {
    type: definePropType(Object)
  },
  experimentalFeatures: {
    type: definePropType(Object)
  },
  keyboardNavigation: {
    type: Boolean,
    default: true
  },
  message: {
    type: definePropType(Object)
  },
  zIndex: Number,
  namespace: {
    type: String,
    default: "el"
  },
  ...useEmptyValuesProps
});
const messageConfig = {};
const ConfigProvider = defineComponent({
  name: "ElConfigProvider",
  props: configProviderProps,
  setup(props, { slots }) {
    watch(() => props.message, (val) => {
      Object.assign(messageConfig, val != null ? val : {});
    }, { immediate: true, deep: true });
    const config = provideGlobalConfig(props);
    return () => renderSlot(slots, "default", { config: config == null ? void 0 : config.value });
  }
});
const ElConfigProvider = withInstall(ConfigProvider);
const __default__$c = defineComponent({
  name: "ElContainer"
});
const _sfc_main$s = /* @__PURE__ */ defineComponent({
  ...__default__$c,
  props: {
    direction: {
      type: String
    }
  },
  setup(__props) {
    const props = __props;
    const slots = useSlots();
    const ns = useNamespace("container");
    const isVertical = computed(() => {
      if (props.direction === "vertical") {
        return true;
      } else if (props.direction === "horizontal") {
        return false;
      }
      if (slots && slots.default) {
        const vNodes = slots.default();
        return vNodes.some((vNode) => {
          const tag = vNode.type.name;
          return tag === "ElHeader" || tag === "ElFooter";
        });
      } else {
        return false;
      }
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("section", {
        class: normalizeClass([unref(ns).b(), unref(ns).is("vertical", unref(isVertical))])
      }, [
        renderSlot(_ctx.$slots, "default")
      ], 2);
    };
  }
});
var Container = /* @__PURE__ */ _export_sfc$1(_sfc_main$s, [["__file", "container.vue"]]);
const __default__$b = defineComponent({
  name: "ElAside"
});
const _sfc_main$r = /* @__PURE__ */ defineComponent({
  ...__default__$b,
  props: {
    width: {
      type: String,
      default: null
    }
  },
  setup(__props) {
    const props = __props;
    const ns = useNamespace("aside");
    const style2 = computed(() => props.width ? ns.cssVarBlock({ width: props.width }) : {});
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("aside", {
        class: normalizeClass(unref(ns).b()),
        style: normalizeStyle(unref(style2))
      }, [
        renderSlot(_ctx.$slots, "default")
      ], 6);
    };
  }
});
var Aside = /* @__PURE__ */ _export_sfc$1(_sfc_main$r, [["__file", "aside.vue"]]);
const __default__$a = defineComponent({
  name: "ElFooter"
});
const _sfc_main$q = /* @__PURE__ */ defineComponent({
  ...__default__$a,
  props: {
    height: {
      type: String,
      default: null
    }
  },
  setup(__props) {
    const props = __props;
    const ns = useNamespace("footer");
    const style2 = computed(() => props.height ? ns.cssVarBlock({ height: props.height }) : {});
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("footer", {
        class: normalizeClass(unref(ns).b()),
        style: normalizeStyle(unref(style2))
      }, [
        renderSlot(_ctx.$slots, "default")
      ], 6);
    };
  }
});
var Footer$1 = /* @__PURE__ */ _export_sfc$1(_sfc_main$q, [["__file", "footer.vue"]]);
const __default__$9 = defineComponent({
  name: "ElHeader"
});
const _sfc_main$p = /* @__PURE__ */ defineComponent({
  ...__default__$9,
  props: {
    height: {
      type: String,
      default: null
    }
  },
  setup(__props) {
    const props = __props;
    const ns = useNamespace("header");
    const style2 = computed(() => {
      return props.height ? ns.cssVarBlock({
        height: props.height
      }) : {};
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("header", {
        class: normalizeClass(unref(ns).b()),
        style: normalizeStyle(unref(style2))
      }, [
        renderSlot(_ctx.$slots, "default")
      ], 6);
    };
  }
});
var Header$1 = /* @__PURE__ */ _export_sfc$1(_sfc_main$p, [["__file", "header.vue"]]);
const __default__$8 = defineComponent({
  name: "ElMain"
});
const _sfc_main$o = /* @__PURE__ */ defineComponent({
  ...__default__$8,
  setup(__props) {
    const ns = useNamespace("main");
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("main", {
        class: normalizeClass(unref(ns).b())
      }, [
        renderSlot(_ctx.$slots, "default")
      ], 2);
    };
  }
});
var Main = /* @__PURE__ */ _export_sfc$1(_sfc_main$o, [["__file", "main.vue"]]);
withInstall(Container, {
  Aside,
  Footer: Footer$1,
  Header: Header$1,
  Main
});
withNoopInstall(Aside);
withNoopInstall(Footer$1);
const ElHeader = withNoopInstall(Header$1);
const ElMain = withNoopInstall(Main);
const useSameTarget = (handleClick) => {
  if (!handleClick) {
    return { onClick: NOOP, onMousedown: NOOP, onMouseup: NOOP };
  }
  let mousedownTarget = false;
  let mouseupTarget = false;
  const onClick = (e) => {
    if (mousedownTarget && mouseupTarget) {
      handleClick(e);
    }
    mousedownTarget = mouseupTarget = false;
  };
  const onMousedown = (e) => {
    mousedownTarget = e.target === e.currentTarget;
  };
  const onMouseup = (e) => {
    mouseupTarget = e.target === e.currentTarget;
  };
  return { onClick, onMousedown, onMouseup };
};
const overlayProps = buildProps({
  mask: {
    type: Boolean,
    default: true
  },
  customMaskEvent: Boolean,
  overlayClass: {
    type: definePropType([
      String,
      Array,
      Object
    ])
  },
  zIndex: {
    type: definePropType([String, Number])
  }
});
const overlayEmits = {
  click: (evt) => evt instanceof MouseEvent
};
const BLOCK = "overlay";
var Overlay = defineComponent({
  name: "ElOverlay",
  props: overlayProps,
  emits: overlayEmits,
  setup(props, { slots, emit }) {
    const ns = useNamespace(BLOCK);
    const onMaskClick = (e) => {
      emit("click", e);
    };
    const { onClick, onMousedown, onMouseup } = useSameTarget(props.customMaskEvent ? void 0 : onMaskClick);
    return () => {
      return props.mask ? createVNode("div", {
        class: [ns.b(), props.overlayClass],
        style: {
          zIndex: props.zIndex
        },
        onClick,
        onMousedown,
        onMouseup
      }, [renderSlot(slots, "default")], PatchFlags.STYLE | PatchFlags.CLASS | PatchFlags.PROPS, ["onClick", "onMouseup", "onMousedown"]) : h("div", {
        class: props.overlayClass,
        style: {
          zIndex: props.zIndex,
          position: "fixed",
          top: "0px",
          right: "0px",
          bottom: "0px",
          left: "0px"
        }
      }, [renderSlot(slots, "default")]);
    };
  }
});
const ElOverlay = Overlay;
const dialogContentProps = buildProps({
  center: Boolean,
  alignCenter: Boolean,
  closeIcon: {
    type: iconPropType
  },
  draggable: Boolean,
  overflow: Boolean,
  fullscreen: Boolean,
  headerClass: String,
  bodyClass: String,
  footerClass: String,
  showClose: {
    type: Boolean,
    default: true
  },
  title: {
    type: String,
    default: ""
  },
  ariaLevel: {
    type: String,
    default: "2"
  }
});
const dialogContentEmits = {
  close: () => true
};
const dialogProps = buildProps({
  ...dialogContentProps,
  appendToBody: Boolean,
  appendTo: {
    type: teleportProps.to.type,
    default: "body"
  },
  beforeClose: {
    type: definePropType(Function)
  },
  destroyOnClose: Boolean,
  closeOnClickModal: {
    type: Boolean,
    default: true
  },
  closeOnPressEscape: {
    type: Boolean,
    default: true
  },
  lockScroll: {
    type: Boolean,
    default: true
  },
  modal: {
    type: Boolean,
    default: true
  },
  openDelay: {
    type: Number,
    default: 0
  },
  closeDelay: {
    type: Number,
    default: 0
  },
  top: {
    type: String
  },
  modelValue: Boolean,
  modalClass: String,
  headerClass: String,
  bodyClass: String,
  footerClass: String,
  width: {
    type: [String, Number]
  },
  zIndex: {
    type: Number
  },
  trapFocus: Boolean,
  headerAriaLevel: {
    type: String,
    default: "2"
  }
});
const dialogEmits = {
  open: () => true,
  opened: () => true,
  close: () => true,
  closed: () => true,
  [UPDATE_MODEL_EVENT]: (value) => isBoolean(value),
  openAutoFocus: () => true,
  closeAutoFocus: () => true
};
const useLockscreen = (trigger, options = {}) => {
  if (!isRef(trigger)) {
    throwError("[useLockscreen]", "You need to pass a ref param to this function");
  }
  const ns = options.ns || useNamespace("popup");
  computed(() => ns.bm("parent", "hidden"));
  {
    return;
  }
};
const useDialog = (props, targetRef) => {
  var _a;
  const instance = getCurrentInstance();
  const emit = instance.emit;
  const { nextZIndex } = useZIndex();
  let lastPosition = "";
  const titleId = useId();
  const bodyId = useId();
  const visible = ref(false);
  const closed = ref(false);
  const rendered = ref(false);
  const zIndex2 = ref((_a = props.zIndex) != null ? _a : nextZIndex());
  let openTimer = void 0;
  let closeTimer = void 0;
  const namespace = useGlobalConfig("namespace", defaultNamespace);
  const style2 = computed(() => {
    const style22 = {};
    const varPrefix = `--${namespace.value}-dialog`;
    if (!props.fullscreen) {
      if (props.top) {
        style22[`${varPrefix}-margin-top`] = props.top;
      }
      if (props.width) {
        style22[`${varPrefix}-width`] = addUnit(props.width);
      }
    }
    return style22;
  });
  const overlayDialogStyle = computed(() => {
    if (props.alignCenter) {
      return { display: "flex" };
    }
    return {};
  });
  function afterEnter() {
    emit("opened");
  }
  function afterLeave() {
    emit("closed");
    emit(UPDATE_MODEL_EVENT, false);
    if (props.destroyOnClose) {
      rendered.value = false;
    }
  }
  function beforeLeave() {
    emit("close");
  }
  function open() {
    closeTimer == null ? void 0 : closeTimer();
    openTimer == null ? void 0 : openTimer();
    if (props.openDelay && props.openDelay > 0) {
      ({ stop: openTimer } = useTimeoutFn(() => doOpen(), props.openDelay));
    }
  }
  function close() {
    openTimer == null ? void 0 : openTimer();
    closeTimer == null ? void 0 : closeTimer();
    if (props.closeDelay && props.closeDelay > 0) {
      ({ stop: closeTimer } = useTimeoutFn(() => doClose(), props.closeDelay));
    } else {
      doClose();
    }
  }
  function handleClose() {
    function hide(shouldCancel) {
      if (shouldCancel)
        return;
      closed.value = true;
      visible.value = false;
    }
    if (props.beforeClose) {
      props.beforeClose(hide);
    } else {
      close();
    }
  }
  function onModalClick() {
    if (props.closeOnClickModal) {
      handleClose();
    }
  }
  function doOpen() {
    return;
  }
  function doClose() {
    visible.value = false;
  }
  function onOpenAutoFocus() {
    emit("openAutoFocus");
  }
  function onCloseAutoFocus() {
    emit("closeAutoFocus");
  }
  function onFocusoutPrevented(event) {
    var _a2;
    if (((_a2 = event.detail) == null ? void 0 : _a2.focusReason) === "pointer") {
      event.preventDefault();
    }
  }
  if (props.lockScroll) {
    useLockscreen(visible);
  }
  function onCloseRequested() {
    if (props.closeOnPressEscape) {
      handleClose();
    }
  }
  watch(() => props.modelValue, (val) => {
    if (val) {
      closed.value = false;
      open();
      rendered.value = true;
      zIndex2.value = isUndefined$1(props.zIndex) ? nextZIndex() : zIndex2.value++;
      nextTick(() => {
        emit("open");
        if (targetRef.value) {
          targetRef.value.parentElement.scrollTop = 0;
          targetRef.value.parentElement.scrollLeft = 0;
          targetRef.value.scrollTop = 0;
        }
      });
    } else {
      if (visible.value) {
        close();
      }
    }
  });
  watch(() => props.fullscreen, (val) => {
    if (!targetRef.value)
      return;
    if (val) {
      lastPosition = targetRef.value.style.transform;
      targetRef.value.style.transform = "";
    } else {
      targetRef.value.style.transform = lastPosition;
    }
  });
  return {
    afterEnter,
    afterLeave,
    beforeLeave,
    handleClose,
    onModalClick,
    close,
    doClose,
    onOpenAutoFocus,
    onCloseAutoFocus,
    onCloseRequested,
    onFocusoutPrevented,
    titleId,
    bodyId,
    closed,
    style: style2,
    overlayDialogStyle,
    rendered,
    visible,
    zIndex: zIndex2
  };
};
const dividerProps = buildProps({
  direction: {
    type: String,
    values: ["horizontal", "vertical"],
    default: "horizontal"
  },
  contentPosition: {
    type: String,
    values: ["left", "center", "right"],
    default: "center"
  },
  borderStyle: {
    type: definePropType(String),
    default: "solid"
  }
});
const __default__$7 = defineComponent({
  name: "ElDivider"
});
const _sfc_main$n = /* @__PURE__ */ defineComponent({
  ...__default__$7,
  props: dividerProps,
  setup(__props) {
    const props = __props;
    const ns = useNamespace("divider");
    const dividerStyle = computed(() => {
      return ns.cssVar({
        "border-style": props.borderStyle
      });
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass([unref(ns).b(), unref(ns).m(_ctx.direction)]),
        style: normalizeStyle(unref(dividerStyle)),
        role: "separator"
      }, [
        _ctx.$slots.default && _ctx.direction !== "vertical" ? (openBlock(), createElementBlock("div", {
          key: 0,
          class: normalizeClass([unref(ns).e("text"), unref(ns).is(_ctx.contentPosition)])
        }, [
          renderSlot(_ctx.$slots, "default")
        ], 2)) : createCommentVNode("v-if", true)
      ], 6);
    };
  }
});
var Divider = /* @__PURE__ */ _export_sfc$1(_sfc_main$n, [["__file", "divider.vue"]]);
const ElDivider = withInstall(Divider);
const drawerProps = buildProps({
  ...dialogProps,
  direction: {
    type: String,
    default: "rtl",
    values: ["ltr", "rtl", "ttb", "btt"]
  },
  size: {
    type: [String, Number],
    default: "30%"
  },
  withHeader: {
    type: Boolean,
    default: true
  },
  modalFade: {
    type: Boolean,
    default: true
  },
  headerAriaLevel: {
    type: String,
    default: "2"
  }
});
const drawerEmits = dialogEmits;
const __default__$6 = defineComponent({
  name: "ElDrawer",
  inheritAttrs: false
});
const _sfc_main$m = /* @__PURE__ */ defineComponent({
  ...__default__$6,
  props: drawerProps,
  emits: drawerEmits,
  setup(__props, { expose }) {
    const props = __props;
    const slots = useSlots();
    useDeprecated({
      scope: "el-drawer",
      from: "the title slot",
      replacement: "the header slot",
      version: "3.0.0",
      ref: "https://element-plus.org/en-US/component/drawer.html#slots"
    }, computed(() => !!slots.title));
    const drawerRef = ref();
    const focusStartRef = ref();
    const ns = useNamespace("drawer");
    const { t } = useLocale();
    const {
      afterEnter,
      afterLeave,
      beforeLeave,
      visible,
      rendered,
      titleId,
      bodyId,
      zIndex: zIndex2,
      onModalClick,
      onOpenAutoFocus,
      onCloseAutoFocus,
      onFocusoutPrevented,
      onCloseRequested,
      handleClose
    } = useDialog(props, drawerRef);
    const isHorizontal = computed(() => props.direction === "rtl" || props.direction === "ltr");
    const drawerSize = computed(() => addUnit(props.size));
    expose({
      handleClose,
      afterEnter,
      afterLeave
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(ElTeleport), {
        to: _ctx.appendTo,
        disabled: _ctx.appendTo !== "body" ? false : !_ctx.appendToBody
      }, {
        default: withCtx(() => [
          createVNode(Transition, {
            name: unref(ns).b("fade"),
            onAfterEnter: unref(afterEnter),
            onAfterLeave: unref(afterLeave),
            onBeforeLeave: unref(beforeLeave),
            persisted: ""
          }, {
            default: withCtx(() => [
              withDirectives(createVNode(unref(ElOverlay), {
                mask: _ctx.modal,
                "overlay-class": _ctx.modalClass,
                "z-index": unref(zIndex2),
                onClick: unref(onModalClick)
              }, {
                default: withCtx(() => [
                  createVNode(unref(ElFocusTrap), {
                    loop: "",
                    trapped: unref(visible),
                    "focus-trap-el": drawerRef.value,
                    "focus-start-el": focusStartRef.value,
                    onFocusAfterTrapped: unref(onOpenAutoFocus),
                    onFocusAfterReleased: unref(onCloseAutoFocus),
                    onFocusoutPrevented: unref(onFocusoutPrevented),
                    onReleaseRequested: unref(onCloseRequested)
                  }, {
                    default: withCtx(() => [
                      createElementVNode("div", mergeProps({
                        ref_key: "drawerRef",
                        ref: drawerRef,
                        "aria-modal": "true",
                        "aria-label": _ctx.title || void 0,
                        "aria-labelledby": !_ctx.title ? unref(titleId) : void 0,
                        "aria-describedby": unref(bodyId)
                      }, _ctx.$attrs, {
                        class: [unref(ns).b(), _ctx.direction, unref(visible) && "open"],
                        style: unref(isHorizontal) ? "width: " + unref(drawerSize) : "height: " + unref(drawerSize),
                        role: "dialog",
                        onClick: withModifiers(() => {
                        }, ["stop"])
                      }), [
                        createElementVNode("span", {
                          ref_key: "focusStartRef",
                          ref: focusStartRef,
                          class: normalizeClass(unref(ns).e("sr-focus")),
                          tabindex: "-1"
                        }, null, 2),
                        _ctx.withHeader ? (openBlock(), createElementBlock("header", {
                          key: 0,
                          class: normalizeClass([unref(ns).e("header"), _ctx.headerClass])
                        }, [
                          !_ctx.$slots.title ? renderSlot(_ctx.$slots, "header", {
                            key: 0,
                            close: unref(handleClose),
                            titleId: unref(titleId),
                            titleClass: unref(ns).e("title")
                          }, () => [
                            !_ctx.$slots.title ? (openBlock(), createElementBlock("span", {
                              key: 0,
                              id: unref(titleId),
                              role: "heading",
                              "aria-level": _ctx.headerAriaLevel,
                              class: normalizeClass(unref(ns).e("title"))
                            }, toDisplayString(_ctx.title), 11, ["id", "aria-level"])) : createCommentVNode("v-if", true)
                          ]) : renderSlot(_ctx.$slots, "title", { key: 1 }, () => [
                            createCommentVNode(" DEPRECATED SLOT ")
                          ]),
                          _ctx.showClose ? (openBlock(), createElementBlock("button", {
                            key: 2,
                            "aria-label": unref(t)("el.drawer.close"),
                            class: normalizeClass(unref(ns).e("close-btn")),
                            type: "button",
                            onClick: unref(handleClose)
                          }, [
                            createVNode(unref(ElIcon), {
                              class: normalizeClass(unref(ns).e("close"))
                            }, {
                              default: withCtx(() => [
                                createVNode(unref(close_default))
                              ]),
                              _: 1
                            }, 8, ["class"])
                          ], 10, ["aria-label", "onClick"])) : createCommentVNode("v-if", true)
                        ], 2)) : createCommentVNode("v-if", true),
                        unref(rendered) ? (openBlock(), createElementBlock("div", {
                          key: 1,
                          id: unref(bodyId),
                          class: normalizeClass([unref(ns).e("body"), _ctx.bodyClass])
                        }, [
                          renderSlot(_ctx.$slots, "default")
                        ], 10, ["id"])) : createCommentVNode("v-if", true),
                        _ctx.$slots.footer ? (openBlock(), createElementBlock("div", {
                          key: 2,
                          class: normalizeClass([unref(ns).e("footer"), _ctx.footerClass])
                        }, [
                          renderSlot(_ctx.$slots, "footer")
                        ], 2)) : createCommentVNode("v-if", true)
                      ], 16, ["aria-label", "aria-labelledby", "aria-describedby", "onClick"])
                    ]),
                    _: 3
                  }, 8, ["trapped", "focus-trap-el", "focus-start-el", "onFocusAfterTrapped", "onFocusAfterReleased", "onFocusoutPrevented", "onReleaseRequested"])
                ]),
                _: 3
              }, 8, ["mask", "overlay-class", "z-index", "onClick"]), [
                [vShow, unref(visible)]
              ])
            ]),
            _: 3
          }, 8, ["name", "onAfterEnter", "onAfterLeave", "onBeforeLeave"])
        ]),
        _: 3
      }, 8, ["to", "disabled"]);
    };
  }
});
var Drawer = /* @__PURE__ */ _export_sfc$1(_sfc_main$m, [["__file", "drawer.vue"]]);
const ElDrawer = withInstall(Drawer);
const _sfc_main$l = /* @__PURE__ */ defineComponent({
  inheritAttrs: false
});
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return renderSlot(_ctx.$slots, "default");
}
var Collection = /* @__PURE__ */ _export_sfc$1(_sfc_main$l, [["render", _sfc_render$1], ["__file", "collection.vue"]]);
const _sfc_main$k = /* @__PURE__ */ defineComponent({
  name: "ElCollectionItem",
  inheritAttrs: false
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return renderSlot(_ctx.$slots, "default");
}
var CollectionItem = /* @__PURE__ */ _export_sfc$1(_sfc_main$k, [["render", _sfc_render], ["__file", "collection-item.vue"]]);
const COLLECTION_ITEM_SIGN = `data-el-collection-item`;
const createCollectionWithScope = (name) => {
  const COLLECTION_NAME = `El${name}Collection`;
  const COLLECTION_ITEM_NAME = `${COLLECTION_NAME}Item`;
  const COLLECTION_INJECTION_KEY = Symbol(COLLECTION_NAME);
  const COLLECTION_ITEM_INJECTION_KEY = Symbol(COLLECTION_ITEM_NAME);
  const ElCollection = {
    ...Collection,
    name: COLLECTION_NAME,
    setup() {
      const collectionRef = ref();
      const itemMap = /* @__PURE__ */ new Map();
      const getItems = () => {
        const collectionEl = unref(collectionRef);
        if (!collectionEl)
          return [];
        const orderedNodes = Array.from(collectionEl.querySelectorAll(`[${COLLECTION_ITEM_SIGN}]`));
        const items = [...itemMap.values()];
        return items.sort((a, b) => orderedNodes.indexOf(a.ref) - orderedNodes.indexOf(b.ref));
      };
      provide(COLLECTION_INJECTION_KEY, {
        itemMap,
        getItems,
        collectionRef
      });
    }
  };
  const ElCollectionItem = {
    ...CollectionItem,
    name: COLLECTION_ITEM_NAME,
    setup(_, { attrs }) {
      const collectionItemRef = ref();
      inject(COLLECTION_INJECTION_KEY, void 0);
      provide(COLLECTION_ITEM_INJECTION_KEY, {
        collectionItemRef
      });
    }
  };
  return {
    COLLECTION_INJECTION_KEY,
    COLLECTION_ITEM_INJECTION_KEY,
    ElCollection,
    ElCollectionItem
  };
};
const dropdownProps = buildProps({
  trigger: useTooltipTriggerProps.trigger,
  triggerKeys: {
    type: definePropType(Array),
    default: () => [
      EVENT_CODE.enter,
      EVENT_CODE.numpadEnter,
      EVENT_CODE.space,
      EVENT_CODE.down
    ]
  },
  effect: {
    ...useTooltipContentProps.effect,
    default: "light"
  },
  type: {
    type: definePropType(String)
  },
  placement: {
    type: definePropType(String),
    default: "bottom"
  },
  popperOptions: {
    type: definePropType(Object),
    default: () => ({})
  },
  id: String,
  size: {
    type: String,
    default: ""
  },
  splitButton: Boolean,
  hideOnClick: {
    type: Boolean,
    default: true
  },
  loop: {
    type: Boolean,
    default: true
  },
  showTimeout: {
    type: Number,
    default: 150
  },
  hideTimeout: {
    type: Number,
    default: 150
  },
  tabindex: {
    type: definePropType([Number, String]),
    default: 0
  },
  maxHeight: {
    type: definePropType([Number, String]),
    default: ""
  },
  popperClass: {
    type: String,
    default: ""
  },
  disabled: Boolean,
  role: {
    type: String,
    values: roleTypes,
    default: "menu"
  },
  buttonProps: {
    type: definePropType(Object)
  },
  teleported: useTooltipContentProps.teleported,
  persistent: {
    type: Boolean,
    default: true
  }
});
buildProps({
  command: {
    type: [Object, String, Number],
    default: () => ({})
  },
  disabled: Boolean,
  divided: Boolean,
  textValue: String,
  icon: {
    type: iconPropType
  }
});
buildProps({
  onKeydown: { type: definePropType(Function) }
});
createCollectionWithScope("Dropdown");
const __default__$5 = defineComponent({
  name: "ImgEmpty"
});
const _sfc_main$j = /* @__PURE__ */ defineComponent({
  ...__default__$5,
  setup(__props) {
    const ns = useNamespace("empty");
    const id = useId();
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("svg", {
        viewBox: "0 0 79 86",
        version: "1.1",
        xmlns: "http://www.w3.org/2000/svg",
        "xmlns:xlink": "http://www.w3.org/1999/xlink"
      }, [
        createElementVNode("defs", null, [
          createElementVNode("linearGradient", {
            id: `linearGradient-1-${unref(id)}`,
            x1: "38.8503086%",
            y1: "0%",
            x2: "61.1496914%",
            y2: "100%"
          }, [
            createElementVNode("stop", {
              "stop-color": `var(${unref(ns).cssVarBlockName("fill-color-1")})`,
              offset: "0%"
            }, null, 8, ["stop-color"]),
            createElementVNode("stop", {
              "stop-color": `var(${unref(ns).cssVarBlockName("fill-color-4")})`,
              offset: "100%"
            }, null, 8, ["stop-color"])
          ], 8, ["id"]),
          createElementVNode("linearGradient", {
            id: `linearGradient-2-${unref(id)}`,
            x1: "0%",
            y1: "9.5%",
            x2: "100%",
            y2: "90.5%"
          }, [
            createElementVNode("stop", {
              "stop-color": `var(${unref(ns).cssVarBlockName("fill-color-1")})`,
              offset: "0%"
            }, null, 8, ["stop-color"]),
            createElementVNode("stop", {
              "stop-color": `var(${unref(ns).cssVarBlockName("fill-color-6")})`,
              offset: "100%"
            }, null, 8, ["stop-color"])
          ], 8, ["id"]),
          createElementVNode("rect", {
            id: `path-3-${unref(id)}`,
            x: "0",
            y: "0",
            width: "17",
            height: "36"
          }, null, 8, ["id"])
        ]),
        createElementVNode("g", {
          stroke: "none",
          "stroke-width": "1",
          fill: "none",
          "fill-rule": "evenodd"
        }, [
          createElementVNode("g", { transform: "translate(-1268.000000, -535.000000)" }, [
            createElementVNode("g", { transform: "translate(1268.000000, 535.000000)" }, [
              createElementVNode("path", {
                d: "M39.5,86 C61.3152476,86 79,83.9106622 79,81.3333333 C79,78.7560045 57.3152476,78 35.5,78 C13.6847524,78 0,78.7560045 0,81.3333333 C0,83.9106622 17.6847524,86 39.5,86 Z",
                fill: `var(${unref(ns).cssVarBlockName("fill-color-3")})`
              }, null, 8, ["fill"]),
              createElementVNode("polygon", {
                fill: `var(${unref(ns).cssVarBlockName("fill-color-7")})`,
                transform: "translate(27.500000, 51.500000) scale(1, -1) translate(-27.500000, -51.500000) ",
                points: "13 58 53 58 42 45 2 45"
              }, null, 8, ["fill"]),
              createElementVNode("g", { transform: "translate(34.500000, 31.500000) scale(-1, 1) rotate(-25.000000) translate(-34.500000, -31.500000) translate(7.000000, 10.000000)" }, [
                createElementVNode("polygon", {
                  fill: `var(${unref(ns).cssVarBlockName("fill-color-7")})`,
                  transform: "translate(11.500000, 5.000000) scale(1, -1) translate(-11.500000, -5.000000) ",
                  points: "2.84078316e-14 3 18 3 23 7 5 7"
                }, null, 8, ["fill"]),
                createElementVNode("polygon", {
                  fill: `var(${unref(ns).cssVarBlockName("fill-color-5")})`,
                  points: "-3.69149156e-15 7 38 7 38 43 -3.69149156e-15 43"
                }, null, 8, ["fill"]),
                createElementVNode("rect", {
                  fill: `url(#linearGradient-1-${unref(id)})`,
                  transform: "translate(46.500000, 25.000000) scale(-1, 1) translate(-46.500000, -25.000000) ",
                  x: "38",
                  y: "7",
                  width: "17",
                  height: "36"
                }, null, 8, ["fill"]),
                createElementVNode("polygon", {
                  fill: `var(${unref(ns).cssVarBlockName("fill-color-2")})`,
                  transform: "translate(39.500000, 3.500000) scale(-1, 1) translate(-39.500000, -3.500000) ",
                  points: "24 7 41 7 55 -3.63806207e-12 38 -3.63806207e-12"
                }, null, 8, ["fill"])
              ]),
              createElementVNode("rect", {
                fill: `url(#linearGradient-2-${unref(id)})`,
                x: "13",
                y: "45",
                width: "40",
                height: "36"
              }, null, 8, ["fill"]),
              createElementVNode("g", { transform: "translate(53.000000, 45.000000)" }, [
                createElementVNode("use", {
                  fill: `var(${unref(ns).cssVarBlockName("fill-color-8")})`,
                  transform: "translate(8.500000, 18.000000) scale(-1, 1) translate(-8.500000, -18.000000) ",
                  "xlink:href": `#path-3-${unref(id)}`
                }, null, 8, ["fill", "xlink:href"]),
                createElementVNode("polygon", {
                  fill: `var(${unref(ns).cssVarBlockName("fill-color-9")})`,
                  mask: `url(#mask-4-${unref(id)})`,
                  transform: "translate(12.000000, 9.000000) scale(-1, 1) translate(-12.000000, -9.000000) ",
                  points: "7 0 24 0 20 18 7 16.5"
                }, null, 8, ["fill", "mask"])
              ]),
              createElementVNode("polygon", {
                fill: `var(${unref(ns).cssVarBlockName("fill-color-2")})`,
                transform: "translate(66.000000, 51.500000) scale(-1, 1) translate(-66.000000, -51.500000) ",
                points: "62 45 79 45 70 58 53 58"
              }, null, 8, ["fill"])
            ])
          ])
        ])
      ]);
    };
  }
});
var ImgEmpty = /* @__PURE__ */ _export_sfc$1(_sfc_main$j, [["__file", "img-empty.vue"]]);
const emptyProps = buildProps({
  image: {
    type: String,
    default: ""
  },
  imageSize: Number,
  description: {
    type: String,
    default: ""
  }
});
const __default__$4 = defineComponent({
  name: "ElEmpty"
});
const _sfc_main$i = /* @__PURE__ */ defineComponent({
  ...__default__$4,
  props: emptyProps,
  setup(__props) {
    const props = __props;
    const { t } = useLocale();
    const ns = useNamespace("empty");
    const emptyDescription = computed(() => props.description || t("el.table.emptyText"));
    const imageStyle = computed(() => ({
      width: addUnit(props.imageSize)
    }));
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(unref(ns).b())
      }, [
        createElementVNode("div", {
          class: normalizeClass(unref(ns).e("image")),
          style: normalizeStyle(unref(imageStyle))
        }, [
          _ctx.image ? (openBlock(), createElementBlock("img", {
            key: 0,
            src: _ctx.image,
            ondragstart: "return false"
          }, null, 8, ["src"])) : renderSlot(_ctx.$slots, "image", { key: 1 }, () => [
            createVNode(ImgEmpty)
          ])
        ], 6),
        createElementVNode("div", {
          class: normalizeClass(unref(ns).e("description"))
        }, [
          _ctx.$slots.description ? renderSlot(_ctx.$slots, "description", { key: 0 }) : (openBlock(), createElementBlock("p", { key: 1 }, toDisplayString(unref(emptyDescription)), 1))
        ], 2),
        _ctx.$slots.default ? (openBlock(), createElementBlock("div", {
          key: 0,
          class: normalizeClass(unref(ns).e("bottom"))
        }, [
          renderSlot(_ctx.$slots, "default")
        ], 2)) : createCommentVNode("v-if", true)
      ], 2);
    };
  }
});
var Empty = /* @__PURE__ */ _export_sfc$1(_sfc_main$i, [["__file", "empty.vue"]]);
const ElEmpty = withInstall(Empty);
const popoverProps = buildProps({
  trigger: useTooltipTriggerProps.trigger,
  triggerKeys: useTooltipTriggerProps.triggerKeys,
  placement: dropdownProps.placement,
  disabled: useTooltipTriggerProps.disabled,
  visible: useTooltipContentProps.visible,
  transition: useTooltipContentProps.transition,
  popperOptions: dropdownProps.popperOptions,
  tabindex: dropdownProps.tabindex,
  content: useTooltipContentProps.content,
  popperStyle: useTooltipContentProps.popperStyle,
  popperClass: useTooltipContentProps.popperClass,
  enterable: {
    ...useTooltipContentProps.enterable,
    default: true
  },
  effect: {
    ...useTooltipContentProps.effect,
    default: "light"
  },
  teleported: useTooltipContentProps.teleported,
  appendTo: useTooltipContentProps.appendTo,
  title: String,
  width: {
    type: [String, Number],
    default: 150
  },
  offset: {
    type: Number,
    default: void 0
  },
  showAfter: {
    type: Number,
    default: 0
  },
  hideAfter: {
    type: Number,
    default: 200
  },
  autoClose: {
    type: Number,
    default: 0
  },
  showArrow: {
    type: Boolean,
    default: true
  },
  persistent: {
    type: Boolean,
    default: true
  },
  "onUpdate:visible": {
    type: Function
  }
});
const popoverEmits = {
  "update:visible": (value) => isBoolean(value),
  "before-enter": () => true,
  "before-leave": () => true,
  "after-enter": () => true,
  "after-leave": () => true
};
const updateEventKeyRaw = `onUpdate:visible`;
const __default__$3 = defineComponent({
  name: "ElPopover"
});
const _sfc_main$h = /* @__PURE__ */ defineComponent({
  ...__default__$3,
  props: popoverProps,
  emits: popoverEmits,
  setup(__props, { expose, emit }) {
    const props = __props;
    const onUpdateVisible = computed(() => {
      return props[updateEventKeyRaw];
    });
    const ns = useNamespace("popover");
    const tooltipRef = ref();
    const popperRef = computed(() => {
      var _a;
      return (_a = unref(tooltipRef)) == null ? void 0 : _a.popperRef;
    });
    const style2 = computed(() => {
      return [
        {
          width: addUnit(props.width)
        },
        props.popperStyle
      ];
    });
    const kls = computed(() => {
      return [ns.b(), props.popperClass, { [ns.m("plain")]: !!props.content }];
    });
    const gpuAcceleration = computed(() => {
      return props.transition === `${ns.namespace.value}-fade-in-linear`;
    });
    const hide = () => {
      var _a;
      (_a = tooltipRef.value) == null ? void 0 : _a.hide();
    };
    const beforeEnter = () => {
      emit("before-enter");
    };
    const beforeLeave = () => {
      emit("before-leave");
    };
    const afterEnter = () => {
      emit("after-enter");
    };
    const afterLeave = () => {
      emit("update:visible", false);
      emit("after-leave");
    };
    expose({
      popperRef,
      hide
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(ElTooltip), mergeProps({
        ref_key: "tooltipRef",
        ref: tooltipRef
      }, _ctx.$attrs, {
        trigger: _ctx.trigger,
        "trigger-keys": _ctx.triggerKeys,
        placement: _ctx.placement,
        disabled: _ctx.disabled,
        visible: _ctx.visible,
        transition: _ctx.transition,
        "popper-options": _ctx.popperOptions,
        tabindex: _ctx.tabindex,
        content: _ctx.content,
        offset: _ctx.offset,
        "show-after": _ctx.showAfter,
        "hide-after": _ctx.hideAfter,
        "auto-close": _ctx.autoClose,
        "show-arrow": _ctx.showArrow,
        "aria-label": _ctx.title,
        effect: _ctx.effect,
        enterable: _ctx.enterable,
        "popper-class": unref(kls),
        "popper-style": unref(style2),
        teleported: _ctx.teleported,
        "append-to": _ctx.appendTo,
        persistent: _ctx.persistent,
        "gpu-acceleration": unref(gpuAcceleration),
        "onUpdate:visible": unref(onUpdateVisible),
        onBeforeShow: beforeEnter,
        onBeforeHide: beforeLeave,
        onShow: afterEnter,
        onHide: afterLeave
      }), {
        content: withCtx(() => [
          _ctx.title ? (openBlock(), createElementBlock("div", {
            key: 0,
            class: normalizeClass(unref(ns).e("title")),
            role: "title"
          }, toDisplayString(_ctx.title), 3)) : createCommentVNode("v-if", true),
          renderSlot(_ctx.$slots, "default", {}, () => [
            createTextVNode(toDisplayString(_ctx.content), 1)
          ])
        ]),
        default: withCtx(() => [
          _ctx.$slots.reference ? renderSlot(_ctx.$slots, "reference", { key: 0 }) : createCommentVNode("v-if", true)
        ]),
        _: 3
      }, 16, ["trigger", "trigger-keys", "placement", "disabled", "visible", "transition", "popper-options", "tabindex", "content", "offset", "show-after", "hide-after", "auto-close", "show-arrow", "aria-label", "effect", "enterable", "popper-class", "popper-style", "teleported", "append-to", "persistent", "gpu-acceleration", "onUpdate:visible"]);
    };
  }
});
var Popover = /* @__PURE__ */ _export_sfc$1(_sfc_main$h, [["__file", "popover.vue"]]);
const attachEvents = (el, binding) => {
  const popperComponent = binding.arg || binding.value;
  const popover = popperComponent == null ? void 0 : popperComponent.popperRef;
  if (popover) {
    popover.triggerRef = el;
  }
};
var PopoverDirective = {
  mounted(el, binding) {
    attachEvents(el, binding);
  },
  updated(el, binding) {
    attachEvents(el, binding);
  }
};
const VPopover = "popover";
const ElPopoverDirective = withInstallDirective(PopoverDirective, VPopover);
const ElPopover = withInstall(Popover, {
  directive: ElPopoverDirective
});
const RowJustify = [
  "start",
  "center",
  "end",
  "space-around",
  "space-between",
  "space-evenly"
];
const RowAlign = ["top", "middle", "bottom"];
const rowProps = buildProps({
  tag: {
    type: String,
    default: "div"
  },
  gutter: {
    type: Number,
    default: 0
  },
  justify: {
    type: String,
    values: RowJustify,
    default: "start"
  },
  align: {
    type: String,
    values: RowAlign
  }
});
const __default__$2 = defineComponent({
  name: "ElRow"
});
const _sfc_main$g = /* @__PURE__ */ defineComponent({
  ...__default__$2,
  props: rowProps,
  setup(__props) {
    const props = __props;
    const ns = useNamespace("row");
    const gutter = computed(() => props.gutter);
    provide(rowContextKey, {
      gutter
    });
    const style2 = computed(() => {
      const styles = {};
      if (!props.gutter) {
        return styles;
      }
      styles.marginRight = styles.marginLeft = `-${props.gutter / 2}px`;
      return styles;
    });
    const rowKls = computed(() => [
      ns.b(),
      ns.is(`justify-${props.justify}`, props.justify !== "start"),
      ns.is(`align-${props.align}`, !!props.align)
    ]);
    return (_ctx, _cache) => {
      return openBlock(), createBlock(resolveDynamicComponent(_ctx.tag), {
        class: normalizeClass(unref(rowKls)),
        style: normalizeStyle(unref(style2))
      }, {
        default: withCtx(() => [
          renderSlot(_ctx.$slots, "default")
        ]),
        _: 3
      }, 8, ["class", "style"]);
    };
  }
});
var Row = /* @__PURE__ */ _export_sfc$1(_sfc_main$g, [["__file", "row.vue"]]);
const ElRow = withInstall(Row);
const skeletonProps = buildProps({
  animated: {
    type: Boolean,
    default: false
  },
  count: {
    type: Number,
    default: 1
  },
  rows: {
    type: Number,
    default: 3
  },
  loading: {
    type: Boolean,
    default: true
  },
  throttle: {
    type: definePropType([Number, Object])
  }
});
const skeletonItemProps = buildProps({
  variant: {
    type: String,
    values: [
      "circle",
      "rect",
      "h1",
      "h3",
      "text",
      "caption",
      "p",
      "image",
      "button"
    ],
    default: "text"
  }
});
const __default__$1 = defineComponent({
  name: "ElSkeletonItem"
});
const _sfc_main$f = /* @__PURE__ */ defineComponent({
  ...__default__$1,
  props: skeletonItemProps,
  setup(__props) {
    const ns = useNamespace("skeleton");
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass([unref(ns).e("item"), unref(ns).e(_ctx.variant)])
      }, [
        _ctx.variant === "image" ? (openBlock(), createBlock(unref(picture_filled_default), { key: 0 })) : createCommentVNode("v-if", true)
      ], 2);
    };
  }
});
var SkeletonItem = /* @__PURE__ */ _export_sfc$1(_sfc_main$f, [["__file", "skeleton-item.vue"]]);
const useThrottleRender = (loading, throttle = 0) => {
  if (throttle === 0)
    return loading;
  const initVal = isObject$2(throttle) && Boolean(throttle.initVal);
  const throttled = ref(initVal);
  let timeoutHandle = null;
  const dispatchThrottling = (timer) => {
    if (isUndefined(timer)) {
      throttled.value = loading.value;
      return;
    }
    if (timeoutHandle) {
      clearTimeout(timeoutHandle);
    }
    timeoutHandle = setTimeout(() => {
      throttled.value = loading.value;
    }, timer);
  };
  const dispatcher = (type) => {
    if (type === "leading") {
      if (isNumber(throttle)) {
        dispatchThrottling(throttle);
      } else {
        dispatchThrottling(throttle.leading);
      }
    } else {
      if (isObject$2(throttle)) {
        dispatchThrottling(throttle.trailing);
      } else {
        throttled.value = false;
      }
    }
  };
  watch(() => loading.value, (val) => {
    dispatcher(val ? "leading" : "trailing");
  });
  return throttled;
};
const __default__ = defineComponent({
  name: "ElSkeleton"
});
const _sfc_main$e = /* @__PURE__ */ defineComponent({
  ...__default__,
  props: skeletonProps,
  setup(__props, { expose }) {
    const props = __props;
    const ns = useNamespace("skeleton");
    const uiLoading = useThrottleRender(toRef(props, "loading"), props.throttle);
    expose({
      uiLoading
    });
    return (_ctx, _cache) => {
      return unref(uiLoading) ? (openBlock(), createElementBlock("div", mergeProps({
        key: 0,
        class: [unref(ns).b(), unref(ns).is("animated", _ctx.animated)]
      }, _ctx.$attrs), [
        (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.count, (i) => {
          return openBlock(), createElementBlock(Fragment, { key: i }, [
            unref(uiLoading) ? renderSlot(_ctx.$slots, "template", { key: i }, () => [
              createVNode(SkeletonItem, {
                class: normalizeClass(unref(ns).is("first")),
                variant: "p"
              }, null, 8, ["class"]),
              (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.rows, (item) => {
                return openBlock(), createBlock(SkeletonItem, {
                  key: item,
                  class: normalizeClass([
                    unref(ns).e("paragraph"),
                    unref(ns).is("last", item === _ctx.rows && _ctx.rows > 1)
                  ]),
                  variant: "p"
                }, null, 8, ["class"]);
              }), 128))
            ]) : createCommentVNode("v-if", true)
          ], 64);
        }), 128))
      ], 16)) : renderSlot(_ctx.$slots, "default", normalizeProps(mergeProps({ key: 1 }, _ctx.$attrs)));
    };
  }
});
var Skeleton = /* @__PURE__ */ _export_sfc$1(_sfc_main$e, [["__file", "skeleton.vue"]]);
const ElSkeleton = withInstall(Skeleton, {
  SkeletonItem
});
const ElSkeletonItem = withNoopInstall(SkeletonItem);
const Loading = function(options = {}) {
  return void 0;
};
Loading._context = null;
const INSTANCE_KEY = Symbol("ElLoading");
const createInstance = (el, binding) => {
  var _a, _b, _c, _d;
  const vm = binding.instance;
  const getBindingProp = (key) => isObject$2(binding.value) ? binding.value[key] : void 0;
  const resolveExpression = (key) => {
    const data = isString$1(key) && (vm == null ? void 0 : vm[key]) || key;
    if (data)
      return ref(data);
    else
      return data;
  };
  const getProp2 = (name) => resolveExpression(getBindingProp(name) || el.getAttribute(`element-loading-${hyphenate(name)}`));
  const fullscreen = (_a = getBindingProp("fullscreen")) != null ? _a : binding.modifiers.fullscreen;
  const options = {
    text: getProp2("text"),
    svg: getProp2("svg"),
    svgViewBox: getProp2("svgViewBox"),
    spinner: getProp2("spinner"),
    background: getProp2("background"),
    customClass: getProp2("customClass"),
    fullscreen,
    target: (_b = getBindingProp("target")) != null ? _b : fullscreen ? void 0 : el,
    body: (_c = getBindingProp("body")) != null ? _c : binding.modifiers.body,
    lock: (_d = getBindingProp("lock")) != null ? _d : binding.modifiers.lock
  };
  const instance = Loading(options);
  instance._context = vLoading._context;
  el[INSTANCE_KEY] = {
    options,
    instance
  };
};
const updateOptions = (newOptions, originalOptions) => {
  for (const key of Object.keys(originalOptions)) {
    if (isRef(originalOptions[key]))
      originalOptions[key].value = newOptions[key];
  }
};
const vLoading = {
  mounted(el, binding) {
    if (binding.value) {
      createInstance(el, binding);
    }
  },
  updated(el, binding) {
    const instance = el[INSTANCE_KEY];
    if (binding.oldValue !== binding.value) {
      if (binding.value && !binding.oldValue) {
        createInstance(el, binding);
      } else if (binding.value && binding.oldValue) {
        if (isObject$2(binding.value))
          updateOptions(binding.value, instance.options);
      } else {
        instance == null ? void 0 : instance.instance.close();
      }
    }
  },
  unmounted(el) {
    var _a;
    (_a = el[INSTANCE_KEY]) == null ? void 0 : _a.instance.close();
    el[INSTANCE_KEY] = null;
  }
};
vLoading._context = null;
const notificationTypes = [
  "success",
  "info",
  "warning",
  "error"
];
buildProps({
  customClass: {
    type: String,
    default: ""
  },
  dangerouslyUseHTMLString: Boolean,
  duration: {
    type: Number,
    default: 4500
  },
  icon: {
    type: iconPropType
  },
  id: {
    type: String,
    default: ""
  },
  message: {
    type: definePropType([
      String,
      Object,
      Function
    ]),
    default: ""
  },
  offset: {
    type: Number,
    default: 0
  },
  onClick: {
    type: definePropType(Function),
    default: () => void 0
  },
  onClose: {
    type: definePropType(Function),
    required: true
  },
  position: {
    type: String,
    values: ["top-right", "top-left", "bottom-right", "bottom-left"],
    default: "top-right"
  },
  showClose: {
    type: Boolean,
    default: true
  },
  title: {
    type: String,
    default: ""
  },
  type: {
    type: String,
    values: [...notificationTypes, ""],
    default: ""
  },
  zIndex: Number,
  closeIcon: {
    type: iconPropType,
    default: close_default
  }
});
const notifications = {
  "top-left": [],
  "top-right": [],
  "bottom-left": [],
  "bottom-right": []
};
const notify = function(options = {}, context) {
  return { close: () => void 0 };
};
notificationTypes.forEach((type) => {
  notify[type] = (options = {}, appContext) => {
    if (isString$1(options) || isVNode(options)) {
      options = {
        message: options
      };
    }
    return notify({ ...options });
  };
});
function closeAll() {
  for (const orientedNotifications of Object.values(notifications)) {
    orientedNotifications.forEach(({ vm }) => {
      vm.component.exposed.visible.value = false;
    });
  }
}
notify.closeAll = closeAll;
notify._context = null;
const ElNotification = withInstallFunction(notify, "$notify");
const axios_h2M1FtYjeSFPSH7J5DAjImIp94qVPOHt4ieBS52EkMg = /* @__PURE__ */ defineNuxtPlugin((nuxtApp) => {
  const config = /* @__PURE__ */ useRuntimeConfig();
  const baseURL2 = config.public.axiosApiBaseUrl;
  const userStore = useUserStore();
  const route = useRoute();
  const apiClient = axios.create({
    baseURL: baseURL2,
    headers: {
      "Content-Type": "application/json"
    }
  });
  apiClient.interceptors.request.use(
    (config2) => {
      const token = useCookie("bearer_token").value;
      if (token) config2.headers.authorization = `Bearer ${token}`;
      return config2;
    },
    (error) => {
      return Promise.reject(error);
    }
  );
  apiClient.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      const status = error.response ? error.response.status : null;
      switch (status) {
        case 400:
          break;
        case 401:
          if (error.response.data.message === "Invalid email or password")
            ;
          userStore.logout();
          if (route.name !== "login")
            setTimeout(() => (void 0).location.href = "/", 3e3);
          break;
        case 403:
          if (error.response.data.message === "Account is not verified yet")
            break;
          userStore.logout();
          if (route.name !== "login")
            setTimeout(() => (void 0).location.href = "/", 3e3);
          break;
        case 404:
          if (error.response.data.message === "Invalid forget password email")
            ;
          break;
      }
      console.error(
        "API Error:",
        error.response ? error.response.data : error.message
      );
      return Promise.reject(error);
    }
  );
  nuxtApp.provide("axios", apiClient);
});
const plugins = [
  unhead_k2P3m_ZDyjlr2mMYnoDPwavjsDN8hBlk9cFai0bbopU,
  plugin$1,
  _0_siteConfig_hxpx9TAykM4St_ybsPIAJmhOKQmae5Yd749dL71wvC8,
  plugin_9RP0IG4IZsdQGtc6t7gn_tuFRgHqjDGAVBd8w_WCy6s,
  revive_payload_server_MVtmlZaQpj6ApFmshWfUWl5PehCebzaBf2NuRMiIbms,
  plugin,
  components_plugin_z4hgvsiddfKkfXTP6M8M4zG5Cb7sGnDhcryKVM45Di4,
  primevue_plugin_0tbz5Y3Ab_H50qf9PQhqyN3k7XWjmG9dWGLJNwEfVI0,
  motion_F8atB0kBNE8FIgT_ajBXU_q0VzJ7X_J9WFqahA8C37U,
  plugin_server_IUyhGOnRXEptzJ0Pnw9GNDmvDf1veDMvYBqcZhjs6eY,
  element_plus_teleports_plugin_3k7A_fjEiCzFRl6aN3qftblOS_EZCmhIb_4gXrhvbuY,
  element_plus_injection_plugin_LfLkpoHjV8s4Q4lRVuq_y_LbzJB5vFvehZzxqpiP_nk,
  axios_h2M1FtYjeSFPSH7J5DAjImIp94qVPOHt4ieBS52EkMg
];
const layouts = {
  backoffice: defineAsyncComponent(() => import('./backoffice-NUcfYMeT.mjs').then((m) => m.default || m)),
  default: defineAsyncComponent(() => import('./default-BDureoLf.mjs').then((m) => m.default || m))
};
const LayoutLoader = defineComponent({
  name: "LayoutLoader",
  inheritAttrs: false,
  props: {
    name: String,
    layoutProps: Object
  },
  setup(props, context) {
    return () => h(layouts[props.name], props.layoutProps, context.slots);
  }
});
const nuxtLayoutProps = {
  name: {
    type: [String, Boolean, Object],
    default: null
  },
  fallback: {
    type: [String, Object],
    default: null
  }
};
const __nuxt_component_2 = defineComponent({
  name: "NuxtLayout",
  inheritAttrs: false,
  props: nuxtLayoutProps,
  setup(props, context) {
    const nuxtApp = useNuxtApp();
    const injectedRoute = inject(PageRouteSymbol);
    const route = injectedRoute === useRoute() ? useRoute$1() : injectedRoute;
    const layout = computed(() => {
      let layout2 = unref(props.name) ?? route.meta.layout ?? "default";
      if (layout2 && !(layout2 in layouts)) {
        if (props.fallback) {
          layout2 = unref(props.fallback);
        }
      }
      return layout2;
    });
    const layoutRef = ref();
    context.expose({ layoutRef });
    const done = nuxtApp.deferHydration();
    return () => {
      const hasLayout = layout.value && layout.value in layouts;
      const transitionProps = route.meta.layoutTransition ?? appLayoutTransition;
      return _wrapInTransition(hasLayout && transitionProps, {
        default: () => h(Suspense, { suspensible: true, onResolve: () => {
          nextTick(done);
        } }, {
          default: () => h(
            LayoutProvider,
            {
              layoutProps: mergeProps(context.attrs, { ref: layoutRef }),
              key: layout.value || void 0,
              name: layout.value,
              shouldProvide: !props.name,
              hasTransition: !!transitionProps
            },
            context.slots
          )
        })
      }).default();
    };
  }
});
const LayoutProvider = defineComponent({
  name: "NuxtLayoutProvider",
  inheritAttrs: false,
  props: {
    name: {
      type: [String, Boolean]
    },
    layoutProps: {
      type: Object
    },
    hasTransition: {
      type: Boolean
    },
    shouldProvide: {
      type: Boolean
    }
  },
  setup(props, context) {
    const name = props.name;
    if (props.shouldProvide) {
      provide(LayoutMetaSymbol, {
        isCurrent: (route) => name === (route.meta.layout ?? "default")
      });
    }
    return () => {
      var _a, _b;
      if (!name || typeof name === "string" && !(name in layouts)) {
        return (_b = (_a = context.slots).default) == null ? void 0 : _b.call(_a);
      }
      return h(
        LayoutLoader,
        { key: name, layoutProps: props.layoutProps, name },
        context.slots
      );
    };
  }
});
const defineRouteProvider = (name = "RouteProvider") => defineComponent({
  name,
  props: {
    vnode: {
      type: Object,
      required: true
    },
    route: {
      type: Object,
      required: true
    },
    vnodeRef: Object,
    renderKey: String,
    trackRootNodes: Boolean
  },
  setup(props) {
    const previousKey = props.renderKey;
    const previousRoute = props.route;
    const route = {};
    for (const key in props.route) {
      Object.defineProperty(route, key, {
        get: () => previousKey === props.renderKey ? props.route[key] : previousRoute[key],
        enumerable: true
      });
    }
    provide(PageRouteSymbol, shallowReactive(route));
    return () => {
      return h(props.vnode, { ref: props.vnodeRef });
    };
  }
});
const RouteProvider = defineRouteProvider();
const __nuxt_component_3 = defineComponent({
  name: "NuxtPage",
  inheritAttrs: false,
  props: {
    name: {
      type: String
    },
    transition: {
      type: [Boolean, Object],
      default: void 0
    },
    keepalive: {
      type: [Boolean, Object],
      default: void 0
    },
    route: {
      type: Object
    },
    pageKey: {
      type: [Function, String],
      default: null
    }
  },
  setup(props, { attrs, slots, expose }) {
    const nuxtApp = useNuxtApp();
    const pageRef = ref();
    inject(PageRouteSymbol, null);
    expose({ pageRef });
    inject(LayoutMetaSymbol, null);
    nuxtApp.deferHydration();
    return () => {
      return h(RouterView, { name: props.name, route: props.route, ...attrs }, {
        default: (routeProps) => {
          return h(Suspense, { suspensible: true }, {
            default() {
              return h(RouteProvider, {
                vnode: slots.default ? normalizeSlot(slots.default, routeProps) : routeProps.Component,
                route: routeProps.route,
                vnodeRef: pageRef
              });
            }
          });
        }
      });
    };
  }
});
function normalizeSlot(slot, data) {
  const slotContent = slot(data);
  return slotContent.length === 1 ? h(slotContent[0]) : h(Fragment, void 0, slotContent);
}
var hr = {
  name: "hr",
  el: {
    breadcrumb: {
      label: "Breadcrumb"
    },
    colorpicker: {
      confirm: "OK",
      clear: "Očisti"
    },
    datepicker: {
      now: "Sada",
      today: "Danas",
      cancel: "Otkaži",
      clear: "Očisti",
      confirm: "OK",
      selectDate: "Odaberi datum",
      selectTime: "Odaberi vrijeme",
      startDate: "Datum početka",
      startTime: "Vrijeme početka",
      endDate: "Datum završetka",
      endTime: "Vrijeme završetka",
      prevYear: "Prethodna godina",
      nextYear: "Sljedeća godina",
      prevMonth: "Prethodni mjesec",
      nextMonth: "Sljedeći mjesec",
      year: "",
      month1: "Siječanj",
      month2: "Veljača",
      month3: "Ožujak",
      month4: "Travanj",
      month5: "Svibanj",
      month6: "Lipanj",
      month7: "Srpanj",
      month8: "Kolovoz",
      month9: "Rujan",
      month10: "Listopad",
      month11: "Studeni",
      month12: "Prosinac",
      week: "tjedan",
      weeks: {
        sun: "Ned",
        mon: "Pon",
        tue: "Uto",
        wed: "Sri",
        thu: "Čet",
        fri: "Pet",
        sat: "Sub"
      },
      months: {
        jan: "Jan",
        feb: "Feb",
        mar: "Mar",
        apr: "Apr",
        may: "May",
        jun: "Jun",
        jul: "Jul",
        aug: "Aug",
        sep: "Sep",
        oct: "Oct",
        nov: "Nov",
        dec: "Dec"
      }
    },
    select: {
      loading: "Učitavanje",
      noMatch: "Nema pronađenih podataka",
      noData: "Nema podataka",
      placeholder: "Izaberi"
    },
    mention: {
      loading: "Učitavanje"
    },
    cascader: {
      noMatch: "Nema pronađenih podataka",
      loading: "Učitavanje",
      placeholder: "Izaberi",
      noData: "Nema podataka"
    },
    pagination: {
      goto: "Idi na",
      pagesize: "/stranica",
      total: "Ukupno {total}",
      pageClassifier: "",
      page: "Page",
      prev: "Go to previous page",
      next: "Go to next page",
      currentPage: "page {pager}",
      prevPages: "Previous {pager} pages",
      nextPages: "Next {pager} pages"
    },
    messagebox: {
      title: "Poruka",
      confirm: "OK",
      cancel: "Otkaži",
      error: "Pogrešan unos"
    },
    upload: {
      deleteTip: "pritisnite izbriši za brisanje",
      delete: "Izbriši",
      preview: "Pregled",
      continue: "Nastavak"
    },
    table: {
      emptyText: "Nema podataka",
      confirmFilter: "Potvrdi",
      resetFilter: "Resetiraj",
      clearFilter: "Sve",
      sumText: "Suma"
    },
    tree: {
      emptyText: "Nema podataka"
    },
    transfer: {
      noMatch: "Nema pronađenih podataka",
      noData: "Nema podataka",
      titles: ["Lista 1", "Lista 2"],
      filterPlaceholder: "Unesite ključnu riječ",
      noCheckedFormat: "{total} stavki",
      hasCheckedFormat: "{checked}/{total} checked"
    },
    image: {
      error: "FAILED"
    },
    pageHeader: {
      title: "Back"
    },
    popconfirm: {
      confirmButtonText: "Yes",
      cancelButtonText: "No"
    },
    carousel: {
      leftArrow: "Carousel arrow left",
      rightArrow: "Carousel arrow right",
      indicator: "Carousel switch to index {index}"
    }
  }
};
const _sfc_main$d = /* @__PURE__ */ defineComponent({
  __name: "app",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      titleTemplate: (title) => title ? `Gastarbajter.de - ${title}` : "Gastarbajter.de",
      meta: [
        {
          name: "keywords",
          content: "platforma, gastrabajtere, gastabajter, gastabajteri, gastrabajter, gastrajabjteri, gastabajtere, poslovi, oglasnik, posao, webshop, trgovina, proizvodi, domaće, domaći"
        },
        { name: "author", content: "InnovaTech obrt za informatičke usluge" },
        { property: "og:type", content: "website" },
        // Image
        {
          property: "og:image",
          content: "https://res.cloudinary.com/dhaa1aobr/image/upload/v1748519861/180_lm9wut.png"
        },
        { property: "og:image:width", content: "1200" },
        { property: "og:image:height", content: "630" },
        { property: "og:url", content: process.env.APP_BASE_URL },
        { name: "twitter:card", content: "summary_large_image" },
        {
          name: "twitter:image",
          content: "https://res.cloudinary.com/dhaa1aobr/image/upload/v1748519861/180_lm9wut.png"
        },
        {
          name: "google-site-verification",
          content: "XcMEZOdux3Ig-o3E4zproRBhHJiC-7GhdOnmmAogY7Q"
        }
      ],
      link: [
        {
          rel: "icon",
          type: "image/png",
          href: "https://res.cloudinary.com/dhaa1aobr/image/upload/v1748519809/96_oreti5.png"
        },
        {
          rel: "apple-touch-icon",
          href: "https://res.cloudinary.com/dhaa1aobr/image/upload/v1748519861/180_lm9wut.png"
        }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ClientOnly = __nuxt_component_0;
      const _component_ElConfigProvider = ElConfigProvider;
      const _component_NuxtLayout = __nuxt_component_2;
      const _component_NuxtPage = __nuxt_component_3;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_ClientOnly, null, {}, _parent));
      _push(ssrRenderComponent(_component_ElConfigProvider, { locale: unref(hr) }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_NuxtLayout, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_NuxtPage, null, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_NuxtPage)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_NuxtLayout, null, {
                default: withCtx(() => [
                  createVNode(_component_NuxtPage)
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup$d = _sfc_main$d.setup;
_sfc_main$d.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("app.vue");
  return _sfc_setup$d ? _sfc_setup$d(props, ctx) : void 0;
};
const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_main$c = {};
function _sfc_ssrRender$5(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    width: "1100",
    height: "800",
    viewBox: "0 0 1100 800",
    fill: "currentColor",
    xmlns: "http://www.w3.org/2000/svg"
  }, _attrs))}><g id="SingleElement"><path id="hamburger" d="M990 0C990 0 110 0 110 0C49.2798 0 0 35.8398 0 80C0 124.16 49.2798 160 110 160C110 160 990 160 990 160C1050.72 160 1100 124.16 1100 80C1100 35.8398 1050.72 0 990 0C990 0 990 0 990 0L990 0Z" transform="translate(0 640)"></path><path id="hamburger" d="M990 0C990 0 110 0 110 0C49.2798 0 0 35.8398 0 80C0 124.16 49.2798 160 110 160C110 160 990 160 990 160C1050.72 160 1100 124.16 1100 80C1100 35.8398 1050.72 0 990 0C990 0 990 0 990 0L990 0Z" transform="translate(0 320)"></path><path id="hamburger" d="M110 160C110 160 990 160 990 160C1050.72 160 1100 124.16 1100 80C1100 35.8398 1050.72 0 990 0C990 0 110 0 110 0C49.2798 0 0 35.8398 0 80C0 124.16 49.2798 160 110 160C110 160 110 160 110 160L110 160Z"></path></g></svg>`);
}
const _sfc_setup$c = _sfc_main$c.setup;
_sfc_main$c.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("assets/icons/hamburger.vue");
  return _sfc_setup$c ? _sfc_setup$c(props, ctx) : void 0;
};
const HamburgerIcon = /* @__PURE__ */ _export_sfc(_sfc_main$c, [["ssrRender", _sfc_ssrRender$5]]);
const _sfc_main$b = {};
function _sfc_ssrRender$4(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    width: "800",
    height: "800",
    viewBox: "0 0 800 800",
    fill: "currentColor",
    xmlns: "http://www.w3.org/2000/svg"
  }, _attrs))}><g><path d="M62.5 0C27.9688 0 0 27.9687 0 62.5C0 62.5 0 737.5 0 737.5C0 772.031 27.9688 800 62.5 800C62.5 800 737.5 800 737.5 800C772.031 800 800 772.031 800 737.5C800 737.5 800 62.5 800 62.5C800 27.9687 772.031 0 737.5 0C737.5 0 62.5 0 62.5 0ZM488.281 332.188C488.281 332.188 483.75 392.031 483.75 392.031L422.344 392.031L422.344 599.844L344.844 599.844L344.844 392.031L303.438 392.031L303.438 332.188L344.844 332.188C344.844 332.188 344.844 292.031 344.844 292.031C344.844 274.375 345.312 247.031 358.125 230C371.719 212.031 390.312 199.844 422.344 199.844C474.531 199.844 496.406 207.344 496.406 207.344C496.406 207.344 486.094 268.594 486.094 268.594C486.094 268.594 468.906 263.594 452.812 263.594C436.719 263.594 422.344 269.375 422.344 285.469C422.344 285.469 422.344 332.188 422.344 332.188C422.344 332.188 488.281 332.188 488.281 332.188Z" fill="currentColor"></path></g></svg>`);
}
const _sfc_setup$b = _sfc_main$b.setup;
_sfc_main$b.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("assets/icons/facebook.vue");
  return _sfc_setup$b ? _sfc_setup$b(props, ctx) : void 0;
};
const FacebookIcon = /* @__PURE__ */ _export_sfc(_sfc_main$b, [["ssrRender", _sfc_ssrRender$4]]);
const _sfc_main$a = {};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    width: "800",
    height: "800",
    viewBox: "0 0 800 800",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, _attrs))}><g><g><path d="M70.1568 140.937C108.907 140.937 140.626 109.375 140.626 70.4687C140.626 55.1562 135.626 40.9375 127.344 29.375C114.532 11.7188 93.7506 0 70.3131 0C46.8756 0 26.0943 11.5625 13.2818 29.375C5.00058 40.9375 0.000579834 55.1562 0.000579834 70.4687C-0.155701 109.375 31.4068 140.937 70.1568 140.937Z" fill="currentColor" transform="translate(329.843 329.375)"></path><path d="M67.8125 67.8125L67.8125 8.75002L67.8125 0L59.0625 0L0 0.156265L0.3125 67.9688L67.8125 67.8125Z" fill="currentColor" fill-rule="evenodd" transform="translate(485.938 246.094)"></path><path d="M62.5 0C27.9688 0 0 27.9687 0 62.5C0 62.5 0 737.5 0 737.5C0 772.031 27.9688 800 62.5 800C62.5 800 737.5 800 737.5 800C772.031 800 800 772.031 800 737.5C800 737.5 800 62.5 800 62.5C800 27.9687 772.031 0 737.5 0C737.5 0 62.5 0 62.5 0ZM600 358.906C600 358.906 600 522.656 600 522.656C600 565.312 565.312 600 522.656 600C522.656 600 277.344 600 277.344 600C234.688 600 200 565.312 200 522.656C200 522.656 200 358.906 200 358.906C200 358.906 200 277.188 200 277.188C200 234.531 234.688 199.844 277.344 199.844C277.344 199.844 522.656 199.844 522.656 199.844C565.312 199.844 600 234.531 600 277.188C600 277.188 600 358.906 600 358.906Z" fill="currentColor"></path><path d="M270.312 41.0937C270.312 101.406 221.25 150.469 160.938 150.469C100.625 150.469 51.5625 101.406 51.5625 41.0937C51.5625 26.5625 54.5312 12.6562 59.6875 0C59.6875 0 0 0 0 0C0 0 0 163.75 0 163.75C0 184.844 17.1875 202.031 38.2812 202.031C38.2812 202.031 283.594 202.031 283.594 202.031C304.688 202.031 321.875 184.844 321.875 163.75C321.875 163.75 321.875 0 321.875 0C321.875 0 262.188 0 262.188 0C267.5 12.6562 270.312 26.5625 270.312 41.0937Z" fill="currentColor" transform="translate(239.063 358.906)"></path></g></g></svg>`);
}
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("assets/icons/instagram.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
const InstagramIcon = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["ssrRender", _sfc_ssrRender$3]]);
const _sfc_main$9 = {};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    width: "666.667",
    height: "666.667",
    viewBox: "0 0 666.667 666.667",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, _attrs))}><path id="Shape" d="M633.333 0C633.333 0 33.3333 0 33.3333 0C14.9238 0 0 14.9238 0 33.3333C0 33.3333 0 633.333 0 633.333C0 651.743 14.9238 666.667 33.3333 666.667C33.3333 666.667 633.333 666.667 633.333 666.667C651.743 666.667 666.667 651.743 666.667 633.333C666.667 633.333 666.667 33.3333 666.667 33.3333C666.667 14.9238 651.743 0 633.333 0C633.333 0 633.333 0 633.333 0ZM523.967 290.833C523.967 290.833 523.967 290.833 523.967 290.833C520.333 291.2 516.667 291.367 513.033 291.4C472.856 291.452 435.363 271.233 413.333 237.633C413.333 237.633 413.333 420.733 413.333 420.733C413.333 475.523 380.345 524.887 329.754 545.836C279.163 566.784 220.934 555.19 182.224 516.462C143.515 477.733 131.95 419.499 152.923 368.918C173.897 318.337 223.277 285.373 278.033 285.4C280.867 285.4 283.6 285.667 286.4 285.833C286.4 285.833 286.4 352.5 286.4 352.5C260.988 349.422 235.965 360.686 221.419 381.749C206.874 402.813 205.205 430.203 217.085 452.877C228.965 475.551 252.436 489.77 278.033 489.8C316.588 490.48 348.589 460.168 350 421.633C350 421.633 350.667 110.6 350.667 110.6C350.667 110.6 414.467 110.6 414.467 110.6C420.479 167.801 466.604 212.479 523.967 216.667C523.967 216.667 523.967 290.833 523.967 290.833Z" fill="currentColor"></path></svg>`);
}
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("assets/icons/tiktok.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const TikTokIcon = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["ssrRender", _sfc_ssrRender$2]]);
const _sfc_main$8 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    width: "666.663",
    height: "600",
    viewBox: "0 0 666.663 600",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, _attrs))}><path d="M4.57764e-05 199.8C-0.0365906 146.769 21.0287 95.8974 58.5486 58.4134C96.0686 20.9294 146.96 -0.0871658 199.996 0.000267029C199.996 0.000267029 466.662 0.000267029 466.662 0.000267029C577.096 0.000267029 666.662 89.8336 666.662 199.8C666.662 199.8 666.662 600 666.662 600C666.662 600 200 600 200 600C89.5667 600 4.57764e-05 510.167 4.57764e-05 400.2C4.57764e-05 400.2 4.57764e-05 199.8 4.57764e-05 199.8ZM400 266.667C400 266.667 400 333.334 400 333.334L466.667 333.334L466.667 266.667C466.667 266.667 400 266.667 400 266.667ZM200 266.667C200 266.667 200 333.334 200 333.334L266.667 333.334L266.667 266.667C266.667 266.667 200 266.667 200 266.667Z" fill="currentColor"></path></svg>`);
}
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("assets/icons/message.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const MessageIcon = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main$7 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    width: "800",
    height: "800",
    viewBox: "0 0 800 800",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, _attrs))}><g><path d="M750 250C750 250 750 50 750 50C750 20 730 0 700 0C670 0 650 20 650 50C650 50 650 75 650 75C550 120 400 200 250 200C250 200 125 200 125 200C55 200 0 260 0 325C0 370 25 410 60 430C60 430 115 725 115 725C115 740 130 750 150 750C155 750 155 750 160 750C160 750 340 715 340 715C360 710 370 695 365 680C350 650 325 605 305 590C295 585 280 545 270 500C270 500 300 500 300 500C300 500 300 455 300 455C435 470 600 535 650 575C650 575 650 600 650 600C650 630 670 650 700 650C730 650 750 630 750 600C750 600 750 400 750 400C750 400 770 385 770 385C790 370 800 350 800 330C800 330 800 320 800 320C800 300 790 285 775 270C775 270 750 250 750 250ZM100 250C100 250 250 250 250 250L250 300L100 300C100 300 100 250 100 250ZM280 630C285 630 295 645 305 665C305 665 165 700 165 700L115 450C115 450 210 450 210 450C220 515 240 610 280 630ZM650 515C570 475 430 415 300 400C300 400 300 250 300 250C430 235 570 180 650 135C650 135 650 515 650 515Z" fill="currentColor"></path></g></svg>`);
}
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("assets/icons/megafone.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const MegafoneIcon = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "HeaderPortalDrawerItem",
  __ssrInlineRender: true,
  props: ["category", "treeDeep"],
  emits: ["closeMenu"],
  setup(__props, { emit: __emit }) {
    const emit = __emit;
    const route = useRoute();
    const isOpen = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ElRow = ElRow;
      const _component_ElCol = ElCol;
      const _component_NuxtLink = __nuxt_component_6;
      const _component_ElButton = ElButton;
      const _component_ElIcon = ElIcon;
      const _component_HeaderPortalDrawerItem = resolveComponent("HeaderPortalDrawerItem", true);
      const _directive_motion_slide_left = resolveDirective("motion-slide-left");
      if (__props.category.children.length) {
        _push(`<!--[-->`);
        _push(ssrRenderComponent(_component_ElRow, mergeProps({
          style: { "display": "flex" },
          duration: 150
        }, ssrGetDirectiveProps(_ctx, _directive_motion_slide_left)), {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_ElCol, { span: 21 }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_NuxtLink, {
                      to: `/portal/${__props.category.name}`,
                      class: ["el-button button-with-childs", {
                        "el-button--primary": `/portal/${__props.category.name}` === unref(route).path
                      }],
                      style: `margin-left: ${30 * __props.treeDeep}px; width: calc(100% - ${30 * __props.treeDeep}px`,
                      onClick: ($event) => emit("closeMenu")
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_ElRow, {
                            class: "button-text-wrapper",
                            align: "middle"
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`${ssrInterpolate(__props.category.name)}`);
                              } else {
                                return [
                                  createTextVNode(toDisplayString(__props.category.name), 1)
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(_component_ElRow, {
                              class: "button-text-wrapper",
                              align: "middle"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(__props.category.name), 1)
                              ]),
                              _: 1
                            })
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_NuxtLink, {
                        to: `/portal/${__props.category.name}`,
                        class: ["el-button button-with-childs", {
                          "el-button--primary": `/portal/${__props.category.name}` === unref(route).path
                        }],
                        style: `margin-left: ${30 * __props.treeDeep}px; width: calc(100% - ${30 * __props.treeDeep}px`,
                        onClick: ($event) => emit("closeMenu")
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_ElRow, {
                            class: "button-text-wrapper",
                            align: "middle"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(__props.category.name), 1)
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }, 8, ["to", "class", "style", "onClick"])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_ElCol, { span: 3 }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_ElButton, {
                      class: "portal-more-button",
                      onClick: ($event) => isOpen.value = !unref(isOpen)
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_ElIcon, {
                            size: 20,
                            class: [{
                              "rotate-90": unref(isOpen),
                              "rotate-0": !unref(isOpen)
                            }, "transition-transform"]
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(unref(arrow_right_default), null, null, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(unref(arrow_right_default))
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(_component_ElIcon, {
                              size: 20,
                              class: [{
                                "rotate-90": unref(isOpen),
                                "rotate-0": !unref(isOpen)
                              }, "transition-transform"]
                            }, {
                              default: withCtx(() => [
                                createVNode(unref(arrow_right_default))
                              ]),
                              _: 1
                            }, 8, ["class"])
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_ElButton, {
                        class: "portal-more-button",
                        onClick: ($event) => isOpen.value = !unref(isOpen)
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_ElIcon, {
                            size: 20,
                            class: [{
                              "rotate-90": unref(isOpen),
                              "rotate-0": !unref(isOpen)
                            }, "transition-transform"]
                          }, {
                            default: withCtx(() => [
                              createVNode(unref(arrow_right_default))
                            ]),
                            _: 1
                          }, 8, ["class"])
                        ]),
                        _: 1
                      }, 8, ["onClick"])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_ElCol, { span: 21 }, {
                  default: withCtx(() => [
                    createVNode(_component_NuxtLink, {
                      to: `/portal/${__props.category.name}`,
                      class: ["el-button button-with-childs", {
                        "el-button--primary": `/portal/${__props.category.name}` === unref(route).path
                      }],
                      style: `margin-left: ${30 * __props.treeDeep}px; width: calc(100% - ${30 * __props.treeDeep}px`,
                      onClick: ($event) => emit("closeMenu")
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_ElRow, {
                          class: "button-text-wrapper",
                          align: "middle"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(__props.category.name), 1)
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }, 8, ["to", "class", "style", "onClick"])
                  ]),
                  _: 1
                }),
                createVNode(_component_ElCol, { span: 3 }, {
                  default: withCtx(() => [
                    createVNode(_component_ElButton, {
                      class: "portal-more-button",
                      onClick: ($event) => isOpen.value = !unref(isOpen)
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_ElIcon, {
                          size: 20,
                          class: [{
                            "rotate-90": unref(isOpen),
                            "rotate-0": !unref(isOpen)
                          }, "transition-transform"]
                        }, {
                          default: withCtx(() => [
                            createVNode(unref(arrow_right_default))
                          ]),
                          _: 1
                        }, 8, ["class"])
                      ]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 1
                })
              ];
            }
          }),
          _: 1
        }, _parent));
        if (unref(isOpen)) {
          _push(`<!--[-->`);
          ssrRenderList(__props.category.children, (category) => {
            _push(ssrRenderComponent(_component_HeaderPortalDrawerItem, mergeProps({
              key: category.name,
              duration: 150,
              category,
              "tree-deep": __props.treeDeep + 1,
              onCloseMenu: ($event) => emit("closeMenu")
            }, ssrGetDirectiveProps(_ctx, _directive_motion_slide_left)), null, _parent));
          });
          _push(`<!--]-->`);
        } else {
          _push(`<!---->`);
        }
        _push(`<!--]-->`);
      } else {
        _push(ssrRenderComponent(_component_NuxtLink, mergeProps({
          duration: 150,
          to: `/portal/${__props.category.name}`,
          class: ["el-button button", {
            "el-button--primary": `/portal/${__props.category.name}` === unref(route).path
          }],
          style: `margin-left: ${30 * __props.treeDeep}px`,
          onClick: ($event) => emit("closeMenu")
        }, _attrs, ssrGetDirectiveProps(_ctx, _directive_motion_slide_left)), {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_ElRow, {
                class: "button-text-wrapper",
                align: "middle"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(__props.category.name)}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(__props.category.name), 1)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_ElRow, {
                  class: "button-text-wrapper",
                  align: "middle"
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(__props.category.name), 1)
                  ]),
                  _: 1
                })
              ];
            }
          }),
          _: 1
        }, _parent));
      }
    };
  }
});
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/layout/HeaderPortalDrawerItem.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const HeaderPortalDrawerItem = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["__scopeId", "data-v-6cda43cf"]]);
function setLocalItem(key, value, ttl = 6e5) {
  const data = {
    value,
    expiresAt: Date.now() + ttl
  };
  localStorage.setItem(key, JSON.stringify(data));
}
function getLocalItem(key) {
  return null;
}
const useComStore = /* @__PURE__ */ defineStore("com", {
  state: () => ({
    comsLoading: true,
    comSettings: null,
    dashboardSide: null,
    footerSlider: null,
    footerLarge: null
  }),
  actions: {
    async setComDetails() {
      var _a, _b, _c;
      this.comsLoading = true;
      this.comSettings = getLocalItem();
      this.dashboardSide = getLocalItem();
      this.footerSlider = getLocalItem();
      this.footerLarge = getLocalItem();
      if (!this.comSettings || ((_a = this.comSettings[0]) == null ? void 0 : _a.show) && !this.dashboardSide || ((_b = this.comSettings[1]) == null ? void 0 : _b.show) && !this.footerSlider || ((_c = this.comSettings[2]) == null ? void 0 : _c.show) && !this.footerLarge) {
        try {
          const response = await useNuxtApp().$axios.get(`/ad`);
          this.comSettings = response.data.adSettings;
          setLocalItem("comSettings", this.comSettings, 6e5);
          if (this.comSettings[0].show) this.setDashboardSide(response.data);
          if (this.comSettings[1].show) this.setFooterSlider(response.data);
          if (this.comSettings[2].show) this.setFooterLarge(response.data);
        } catch (error) {
          console.error("API Error:", error);
        } finally {
          this.comsLoading = false;
        }
      } else {
        this.comsLoading = false;
      }
    },
    setDashboardSide(data) {
      this.dashboardSide = {
        left: data.ads[0],
        right: data.ads[1]
      };
      setLocalItem("dashboardSide", this.dashboardSide, 6e5);
    },
    setFooterSlider(data) {
      this.footerSlider = [data.ads[2], data.ads[3], data.ads[4], data.ads[5]];
      setLocalItem("footerSlider", this.footerSlider, 6e5);
    },
    setFooterLarge(data) {
      this.footerLarge = data.ads[6];
      setLocalItem("footerLarge", this.footerLarge, 6e5);
    }
  }
});
const useCategoriesStore = /* @__PURE__ */ defineStore("categories", {
  state: () => ({
    categoriesLoading: true,
    portalCategories: [],
    jobsCategories: [],
    webshopCategories: []
  }),
  actions: {
    async getCategories() {
      this.categoriesLoading = true;
      try {
        const response = await useNuxtApp().$axios.get(`/categories`);
        this.portalCategories = response.data.portal;
        this.jobsCategories = response.data.jobs;
        this.webshopCategories = response.data.webshop;
      } catch (error) {
        console.error("API Error:", error);
      } finally {
        this.categoriesLoading = false;
      }
    }
  }
});
function getFacebookLinks() {
  return [
    {
      name: "Gastarbajteri Augsburg",
      url: "https://web.facebook.com/groups/4514677221883340/?ref=share_group_link&rdid=Enio5L6EOGKu8aCC&share_url=https%3A%2F%2Fweb.facebook.com%2Fshare%2Fg%2F15FKRKfRsh%2F%3F_rdc%3D1%26_rdr#"
    },
    {
      name: "Promotim Augsburg",
      url: "https://web.facebook.com/profile.php?id=100089637561897&rdid=gqoM5ju38zbbaZjl&share_url=https%3A%2F%2Fweb.facebook.com%2Fshare%2F1YNTH2meso%2F%3F_rdc%3D1%26_rdr#"
    },
    {
      name: "Augsburg/Minhen-Info",
      url: "https://web.facebook.com/groups/190469302056049/?ref=share_group_link&rdid=huwlSAver2HYma9m&share_url=https%3A%2F%2Fweb.facebook.com%2Fshare%2Fg%2F12L1c2HHRpt%2F%3F_rdc%3D1%26_rdr#"
    },
    {
      name: "Žene u Augsburgu i okolici",
      url: "https://web.facebook.com/groups/543935633318546/?ref=share&_rdc=1&_rdr#"
    },
    {
      name: "Posao EU",
      url: "https://web.facebook.com/posaoeude?rdid=FsP3iKusk7eR4TqV&share_url=https%3A%2F%2Fweb.facebook.com%2Fshare%2F1DNiXdsXpE%2F%3F_rdc%3D1%26_rdr#"
    }
  ];
}
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "Header",
  __ssrInlineRender: true,
  setup(__props) {
    const { $viewport } = useNuxtApp();
    useComStore();
    const categoriesStore = useCategoriesStore();
    const { portalCategories, categoriesLoading } = storeToRefs(categoriesStore);
    const route = useRoute();
    const mobileSearchPopoverRef = ref();
    const searchValue = ref("");
    const isMobileDrawerMenuOpen = ref(false);
    const isPortalDrawerMenuOpen = ref(false);
    const isMobilePortalOpen = ref(false);
    const facebookLinks = getFacebookLinks();
    const categories = shallowRef([
      { name: "Poslovi", icon: office_building_default, iconSize: 24 },
      { name: "Webshop", icon: shop_default, iconSize: 24 },
      { name: "Kontakt", icon: MessageIcon, iconSize: 18 }
    ]);
    watch(
      () => route.path,
      () => {
        isMobileDrawerMenuOpen.value = false;
        if (route.name !== "pretrazivanje") searchValue.value = "";
      }
    );
    function handleSearch() {
      if (searchValue.value.trim().length < 3)
        ;
      else if (searchValue.value.trim().length > 100)
        ;
      else {
        navigateTo(`/pretrazivanje?value=${searchValue.value}`);
        if (mobileSearchPopoverRef.value) mobileSearchPopoverRef.value.hide();
      }
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ElHeader = ElHeader;
      const _component_ElRow = ElRow;
      const _component_ElCol = ElCol;
      const _component_ElIcon = ElIcon;
      const _component_NuxtLink = __nuxt_component_6;
      const _component_ElPopover = ElPopover;
      const _component_ElInput = ElInput;
      const _component_ElButton = ElButton;
      const _component_ElTooltip = ElTooltip;
      const _component_ElDrawer = ElDrawer;
      const _directive_motion_slide_top = resolveDirective("motion-slide-top");
      const _directive_loading = vLoading;
      let _temp0, _temp1;
      _push(`<!--[--><div class="sticky" data-v-05c49246>`);
      _push(ssrRenderComponent(_component_ElHeader, mergeProps({ duration: 400 }, ssrGetDirectiveProps(_ctx, _directive_motion_slide_top)), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (unref($viewport).isLessThan("tablet")) {
              _push2(ssrRenderComponent(_component_ElRow, { class: "header-container" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_ElCol, mergeProps({
                      span: 4,
                      style: { "margin": "auto" },
                      duration: 400,
                      delay: 200
                    }, ssrGetDirectiveProps(_ctx, _directive_motion_slide_top)), {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_ElIcon, {
                            size: 28,
                            color: "var(--el-color-primary)",
                            class: "cursor-pointer",
                            onClick: ($event) => isMobileDrawerMenuOpen.value = true
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(HamburgerIcon, null, null, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(HamburgerIcon)
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(_component_ElIcon, {
                              size: 28,
                              color: "var(--el-color-primary)",
                              class: "cursor-pointer",
                              onClick: ($event) => isMobileDrawerMenuOpen.value = true
                            }, {
                              default: withCtx(() => [
                                createVNode(HamburgerIcon)
                              ]),
                              _: 1
                            }, 8, ["onClick"])
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(_component_ElCol, mergeProps({
                      span: 16,
                      align: "center",
                      duration: 400,
                      delay: 400
                    }, ssrGetDirectiveProps(_ctx, _directive_motion_slide_top)), {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_NuxtLink, {
                            to: "/",
                            class: "mobile-title"
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`<h3 class="color-primary" data-v-05c49246${_scopeId4}>Gastarbajter.de</h3>`);
                              } else {
                                return [
                                  createVNode("h3", { class: "color-primary" }, "Gastarbajter.de")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(_component_NuxtLink, {
                              to: "/",
                              class: "mobile-title"
                            }, {
                              default: withCtx(() => [
                                createVNode("h3", { class: "color-primary" }, "Gastarbajter.de")
                              ]),
                              _: 1
                            })
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(_component_ElCol, mergeProps({
                      span: 4,
                      style: { "margin": "auto" },
                      align: "end",
                      duration: 400,
                      delay: 600
                    }, ssrGetDirectiveProps(_ctx, _directive_motion_slide_top)), {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_ElPopover, {
                            ref_key: "mobileSearchPopoverRef",
                            ref: mobileSearchPopoverRef,
                            placement: "bottom-start",
                            trigger: "click",
                            width: 300
                          }, {
                            reference: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(_component_ElIcon, {
                                  size: 28,
                                  color: "var(--el-color-primary)",
                                  class: "cursor-pointer"
                                }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(ssrRenderComponent(unref(search_default), null, null, _parent6, _scopeId5));
                                    } else {
                                      return [
                                        createVNode(unref(search_default))
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(_component_ElIcon, {
                                    size: 28,
                                    color: "var(--el-color-primary)",
                                    class: "cursor-pointer"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(unref(search_default))
                                    ]),
                                    _: 1
                                  })
                                ];
                              }
                            }),
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(_component_ElRow, null, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(ssrRenderComponent(_component_ElInput, {
                                        modelValue: unref(searchValue),
                                        "onUpdate:modelValue": ($event) => isRef(searchValue) ? searchValue.value = $event : null,
                                        placeholder: "Traži...",
                                        onKeyup: handleSearch
                                      }, {
                                        suffix: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(ssrRenderComponent(_component_NuxtLink, {
                                              to: unref(searchValue) ? `/pretrazivanje?value=${unref(searchValue)}` : ""
                                            }, {
                                              default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                if (_push8) {
                                                  _push8(ssrRenderComponent(_component_ElIcon, {
                                                    size: 20,
                                                    class: "search-icon mt-8"
                                                  }, {
                                                    default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                      if (_push9) {
                                                        _push9(ssrRenderComponent(unref(search_default), null, null, _parent9, _scopeId8));
                                                      } else {
                                                        return [
                                                          createVNode(unref(search_default))
                                                        ];
                                                      }
                                                    }),
                                                    _: 1
                                                  }, _parent8, _scopeId7));
                                                } else {
                                                  return [
                                                    createVNode(_component_ElIcon, {
                                                      size: 20,
                                                      class: "search-icon mt-8"
                                                    }, {
                                                      default: withCtx(() => [
                                                        createVNode(unref(search_default))
                                                      ]),
                                                      _: 1
                                                    })
                                                  ];
                                                }
                                              }),
                                              _: 1
                                            }, _parent7, _scopeId6));
                                          } else {
                                            return [
                                              createVNode(_component_NuxtLink, {
                                                to: unref(searchValue) ? `/pretrazivanje?value=${unref(searchValue)}` : ""
                                              }, {
                                                default: withCtx(() => [
                                                  createVNode(_component_ElIcon, {
                                                    size: 20,
                                                    class: "search-icon mt-8"
                                                  }, {
                                                    default: withCtx(() => [
                                                      createVNode(unref(search_default))
                                                    ]),
                                                    _: 1
                                                  })
                                                ]),
                                                _: 1
                                              }, 8, ["to"])
                                            ];
                                          }
                                        }),
                                        _: 1
                                      }, _parent6, _scopeId5));
                                    } else {
                                      return [
                                        createVNode(_component_ElInput, {
                                          modelValue: unref(searchValue),
                                          "onUpdate:modelValue": ($event) => isRef(searchValue) ? searchValue.value = $event : null,
                                          placeholder: "Traži...",
                                          onKeyup: withKeys(handleSearch, ["enter"])
                                        }, {
                                          suffix: withCtx(() => [
                                            createVNode(_component_NuxtLink, {
                                              to: unref(searchValue) ? `/pretrazivanje?value=${unref(searchValue)}` : ""
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(_component_ElIcon, {
                                                  size: 20,
                                                  class: "search-icon mt-8"
                                                }, {
                                                  default: withCtx(() => [
                                                    createVNode(unref(search_default))
                                                  ]),
                                                  _: 1
                                                })
                                              ]),
                                              _: 1
                                            }, 8, ["to"])
                                          ]),
                                          _: 1
                                        }, 8, ["modelValue", "onUpdate:modelValue"])
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent5, _scopeId4));
                                _push5(ssrRenderComponent(_component_ElRow, {
                                  class: "mt-12",
                                  justify: "end"
                                }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(ssrRenderComponent(_component_NuxtLink, {
                                        to: unref(searchValue) ? `/pretrazivanje?value=${unref(searchValue)}` : ""
                                      }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(ssrRenderComponent(_component_ElButton, { type: "primary" }, {
                                              default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                if (_push8) {
                                                  _push8(` Traži `);
                                                } else {
                                                  return [
                                                    createTextVNode(" Traži ")
                                                  ];
                                                }
                                              }),
                                              _: 1
                                            }, _parent7, _scopeId6));
                                          } else {
                                            return [
                                              createVNode(_component_ElButton, { type: "primary" }, {
                                                default: withCtx(() => [
                                                  createTextVNode(" Traži ")
                                                ]),
                                                _: 1
                                              })
                                            ];
                                          }
                                        }),
                                        _: 1
                                      }, _parent6, _scopeId5));
                                    } else {
                                      return [
                                        createVNode(_component_NuxtLink, {
                                          to: unref(searchValue) ? `/pretrazivanje?value=${unref(searchValue)}` : ""
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(_component_ElButton, { type: "primary" }, {
                                              default: withCtx(() => [
                                                createTextVNode(" Traži ")
                                              ]),
                                              _: 1
                                            })
                                          ]),
                                          _: 1
                                        }, 8, ["to"])
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(_component_ElRow, null, {
                                    default: withCtx(() => [
                                      createVNode(_component_ElInput, {
                                        modelValue: unref(searchValue),
                                        "onUpdate:modelValue": ($event) => isRef(searchValue) ? searchValue.value = $event : null,
                                        placeholder: "Traži...",
                                        onKeyup: withKeys(handleSearch, ["enter"])
                                      }, {
                                        suffix: withCtx(() => [
                                          createVNode(_component_NuxtLink, {
                                            to: unref(searchValue) ? `/pretrazivanje?value=${unref(searchValue)}` : ""
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(_component_ElIcon, {
                                                size: 20,
                                                class: "search-icon mt-8"
                                              }, {
                                                default: withCtx(() => [
                                                  createVNode(unref(search_default))
                                                ]),
                                                _: 1
                                              })
                                            ]),
                                            _: 1
                                          }, 8, ["to"])
                                        ]),
                                        _: 1
                                      }, 8, ["modelValue", "onUpdate:modelValue"])
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_ElRow, {
                                    class: "mt-12",
                                    justify: "end"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_NuxtLink, {
                                        to: unref(searchValue) ? `/pretrazivanje?value=${unref(searchValue)}` : ""
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_component_ElButton, { type: "primary" }, {
                                            default: withCtx(() => [
                                              createTextVNode(" Traži ")
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 1
                                      }, 8, ["to"])
                                    ]),
                                    _: 1
                                  })
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(_component_ElPopover, {
                              ref_key: "mobileSearchPopoverRef",
                              ref: mobileSearchPopoverRef,
                              placement: "bottom-start",
                              trigger: "click",
                              width: 300
                            }, {
                              reference: withCtx(() => [
                                createVNode(_component_ElIcon, {
                                  size: 28,
                                  color: "var(--el-color-primary)",
                                  class: "cursor-pointer"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(unref(search_default))
                                  ]),
                                  _: 1
                                })
                              ]),
                              default: withCtx(() => [
                                createVNode(_component_ElRow, null, {
                                  default: withCtx(() => [
                                    createVNode(_component_ElInput, {
                                      modelValue: unref(searchValue),
                                      "onUpdate:modelValue": ($event) => isRef(searchValue) ? searchValue.value = $event : null,
                                      placeholder: "Traži...",
                                      onKeyup: withKeys(handleSearch, ["enter"])
                                    }, {
                                      suffix: withCtx(() => [
                                        createVNode(_component_NuxtLink, {
                                          to: unref(searchValue) ? `/pretrazivanje?value=${unref(searchValue)}` : ""
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(_component_ElIcon, {
                                              size: 20,
                                              class: "search-icon mt-8"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(unref(search_default))
                                              ]),
                                              _: 1
                                            })
                                          ]),
                                          _: 1
                                        }, 8, ["to"])
                                      ]),
                                      _: 1
                                    }, 8, ["modelValue", "onUpdate:modelValue"])
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_ElRow, {
                                  class: "mt-12",
                                  justify: "end"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_NuxtLink, {
                                      to: unref(searchValue) ? `/pretrazivanje?value=${unref(searchValue)}` : ""
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(_component_ElButton, { type: "primary" }, {
                                          default: withCtx(() => [
                                            createTextVNode(" Traži ")
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 1
                                    }, 8, ["to"])
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }, 512)
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      withDirectives((openBlock(), createBlock(_component_ElCol, {
                        span: 4,
                        style: { "margin": "auto" },
                        duration: 400,
                        delay: 200
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_ElIcon, {
                            size: 28,
                            color: "var(--el-color-primary)",
                            class: "cursor-pointer",
                            onClick: ($event) => isMobileDrawerMenuOpen.value = true
                          }, {
                            default: withCtx(() => [
                              createVNode(HamburgerIcon)
                            ]),
                            _: 1
                          }, 8, ["onClick"])
                        ]),
                        _: 1
                      })), [
                        [_directive_motion_slide_top]
                      ]),
                      withDirectives((openBlock(), createBlock(_component_ElCol, {
                        span: 16,
                        align: "center",
                        duration: 400,
                        delay: 400
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_NuxtLink, {
                            to: "/",
                            class: "mobile-title"
                          }, {
                            default: withCtx(() => [
                              createVNode("h3", { class: "color-primary" }, "Gastarbajter.de")
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })), [
                        [_directive_motion_slide_top]
                      ]),
                      withDirectives((openBlock(), createBlock(_component_ElCol, {
                        span: 4,
                        style: { "margin": "auto" },
                        align: "end",
                        duration: 400,
                        delay: 600
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_ElPopover, {
                            ref_key: "mobileSearchPopoverRef",
                            ref: mobileSearchPopoverRef,
                            placement: "bottom-start",
                            trigger: "click",
                            width: 300
                          }, {
                            reference: withCtx(() => [
                              createVNode(_component_ElIcon, {
                                size: 28,
                                color: "var(--el-color-primary)",
                                class: "cursor-pointer"
                              }, {
                                default: withCtx(() => [
                                  createVNode(unref(search_default))
                                ]),
                                _: 1
                              })
                            ]),
                            default: withCtx(() => [
                              createVNode(_component_ElRow, null, {
                                default: withCtx(() => [
                                  createVNode(_component_ElInput, {
                                    modelValue: unref(searchValue),
                                    "onUpdate:modelValue": ($event) => isRef(searchValue) ? searchValue.value = $event : null,
                                    placeholder: "Traži...",
                                    onKeyup: withKeys(handleSearch, ["enter"])
                                  }, {
                                    suffix: withCtx(() => [
                                      createVNode(_component_NuxtLink, {
                                        to: unref(searchValue) ? `/pretrazivanje?value=${unref(searchValue)}` : ""
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_component_ElIcon, {
                                            size: 20,
                                            class: "search-icon mt-8"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(unref(search_default))
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 1
                                      }, 8, ["to"])
                                    ]),
                                    _: 1
                                  }, 8, ["modelValue", "onUpdate:modelValue"])
                                ]),
                                _: 1
                              }),
                              createVNode(_component_ElRow, {
                                class: "mt-12",
                                justify: "end"
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_NuxtLink, {
                                    to: unref(searchValue) ? `/pretrazivanje?value=${unref(searchValue)}` : ""
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_ElButton, { type: "primary" }, {
                                        default: withCtx(() => [
                                          createTextVNode(" Traži ")
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  }, 8, ["to"])
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }, 512)
                        ]),
                        _: 1
                      })), [
                        [_directive_motion_slide_top]
                      ])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              _push2(ssrRenderComponent(_component_ElRow, { class: "header-container" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_ElCol, mergeProps({
                      span: 5,
                      align: "center",
                      duration: 400
                    }, ssrGetDirectiveProps(_ctx, _directive_motion_slide_top)), {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_NuxtLink, {
                            to: "/",
                            class: "title"
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`<h3 class="color-primary" data-v-05c49246${_scopeId4}>Gastarbajter.de</h3>`);
                              } else {
                                return [
                                  createVNode("h3", { class: "color-primary" }, "Gastarbajter.de")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(_component_NuxtLink, {
                              to: "/",
                              class: "title"
                            }, {
                              default: withCtx(() => [
                                createVNode("h3", { class: "color-primary" }, "Gastarbajter.de")
                              ]),
                              _: 1
                            })
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(_component_ElCol, mergeProps({
                      span: 3,
                      duration: 400,
                      delay: 200
                    }, ssrGetDirectiveProps(_ctx, _directive_motion_slide_top)), {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_NuxtLink, {
                            to: "/",
                            class: ["el-button header-button", {
                              "el-button--primary": "index" === unref(route).name
                            }]
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                if (unref($viewport).isGreaterOrEquals("desktop")) {
                                  _push5(ssrRenderComponent(_component_ElIcon, {
                                    size: 24,
                                    class: "home-icon"
                                  }, {
                                    default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                      if (_push6) {
                                        _push6(ssrRenderComponent(unref(home_filled_default), null, null, _parent6, _scopeId5));
                                      } else {
                                        return [
                                          createVNode(unref(home_filled_default))
                                        ];
                                      }
                                    }),
                                    _: 1
                                  }, _parent5, _scopeId4));
                                } else {
                                  _push5(`<!---->`);
                                }
                                _push5(` ${ssrInterpolate(unref($viewport).match("tablet") ? "POČETNA" : "NASLOVNICA")}`);
                              } else {
                                return [
                                  unref($viewport).isGreaterOrEquals("desktop") ? (openBlock(), createBlock(_component_ElIcon, {
                                    key: 0,
                                    size: 24,
                                    class: "home-icon"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(unref(home_filled_default))
                                    ]),
                                    _: 1
                                  })) : createCommentVNode("", true),
                                  createTextVNode(" " + toDisplayString(unref($viewport).match("tablet") ? "POČETNA" : "NASLOVNICA"), 1)
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(_component_NuxtLink, {
                              to: "/",
                              class: ["el-button header-button", {
                                "el-button--primary": "index" === unref(route).name
                              }]
                            }, {
                              default: withCtx(() => [
                                unref($viewport).isGreaterOrEquals("desktop") ? (openBlock(), createBlock(_component_ElIcon, {
                                  key: 0,
                                  size: 24,
                                  class: "home-icon"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(unref(home_filled_default))
                                  ]),
                                  _: 1
                                })) : createCommentVNode("", true),
                                createTextVNode(" " + toDisplayString(unref($viewport).match("tablet") ? "POČETNA" : "NASLOVNICA"), 1)
                              ]),
                              _: 1
                            }, 8, ["class"])
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(_component_ElCol, mergeProps({
                      span: 3,
                      duration: 400,
                      delay: 400
                    }, ssrGetDirectiveProps(_ctx, _directive_motion_slide_top)), {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<div class="portal-btn-wrapper" justify="center" align="middle" data-v-05c49246${_scopeId3}>`);
                          _push4(ssrRenderComponent(_component_ElCol, {
                            span: 18,
                            align: "middle"
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(_component_NuxtLink, {
                                  to: "/portal",
                                  class: ["el-button header-button portal-button", {
                                    "el-button--primary": "portal" === unref(route).name
                                  }]
                                }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      if (unref($viewport).isGreaterOrEquals("desktop")) {
                                        _push6(ssrRenderComponent(_component_ElIcon, {
                                          size: 24,
                                          class: "home-icon"
                                        }, {
                                          default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                            if (_push7) {
                                              _push7(ssrRenderComponent(MegafoneIcon, null, null, _parent7, _scopeId6));
                                            } else {
                                              return [
                                                createVNode(MegafoneIcon)
                                              ];
                                            }
                                          }),
                                          _: 1
                                        }, _parent6, _scopeId5));
                                      } else {
                                        _push6(`<!---->`);
                                      }
                                      _push6(` PORTAL `);
                                    } else {
                                      return [
                                        unref($viewport).isGreaterOrEquals("desktop") ? (openBlock(), createBlock(_component_ElIcon, {
                                          key: 0,
                                          size: 24,
                                          class: "home-icon"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(MegafoneIcon)
                                          ]),
                                          _: 1
                                        })) : createCommentVNode("", true),
                                        createTextVNode(" PORTAL ")
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(_component_NuxtLink, {
                                    to: "/portal",
                                    class: ["el-button header-button portal-button", {
                                      "el-button--primary": "portal" === unref(route).name
                                    }]
                                  }, {
                                    default: withCtx(() => [
                                      unref($viewport).isGreaterOrEquals("desktop") ? (openBlock(), createBlock(_component_ElIcon, {
                                        key: 0,
                                        size: 24,
                                        class: "home-icon"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(MegafoneIcon)
                                        ]),
                                        _: 1
                                      })) : createCommentVNode("", true),
                                      createTextVNode(" PORTAL ")
                                    ]),
                                    _: 1
                                  }, 8, ["class"])
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(_component_ElCol, {
                            span: 6,
                            align: "middle"
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(_component_ElTooltip, {
                                  effect: "dark",
                                  content: "Otvorite izbornik Portala",
                                  placement: "top",
                                  "show-after": 1e3
                                }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(ssrRenderComponent(_component_ElButton, {
                                        class: "portal-more-button",
                                        onClick: ($event) => isPortalDrawerMenuOpen.value = true
                                      }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(ssrRenderComponent(_component_ElIcon, {
                                              size: unref($viewport).isLessOrEquals("tablet") ? 18 : 24,
                                              class: [{
                                                "rotate-minus-90": unref(isPortalDrawerMenuOpen),
                                                "rotate-0": !unref(isPortalDrawerMenuOpen)
                                              }, "transition-transform"]
                                            }, {
                                              default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                if (_push8) {
                                                  _push8(ssrRenderComponent(unref(arrow_down_default), null, null, _parent8, _scopeId7));
                                                } else {
                                                  return [
                                                    createVNode(unref(arrow_down_default))
                                                  ];
                                                }
                                              }),
                                              _: 1
                                            }, _parent7, _scopeId6));
                                          } else {
                                            return [
                                              createVNode(_component_ElIcon, {
                                                size: unref($viewport).isLessOrEquals("tablet") ? 18 : 24,
                                                class: [{
                                                  "rotate-minus-90": unref(isPortalDrawerMenuOpen),
                                                  "rotate-0": !unref(isPortalDrawerMenuOpen)
                                                }, "transition-transform"]
                                              }, {
                                                default: withCtx(() => [
                                                  createVNode(unref(arrow_down_default))
                                                ]),
                                                _: 1
                                              }, 8, ["size", "class"])
                                            ];
                                          }
                                        }),
                                        _: 1
                                      }, _parent6, _scopeId5));
                                    } else {
                                      return [
                                        createVNode(_component_ElButton, {
                                          class: "portal-more-button",
                                          onClick: ($event) => isPortalDrawerMenuOpen.value = true
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(_component_ElIcon, {
                                              size: unref($viewport).isLessOrEquals("tablet") ? 18 : 24,
                                              class: [{
                                                "rotate-minus-90": unref(isPortalDrawerMenuOpen),
                                                "rotate-0": !unref(isPortalDrawerMenuOpen)
                                              }, "transition-transform"]
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(unref(arrow_down_default))
                                              ]),
                                              _: 1
                                            }, 8, ["size", "class"])
                                          ]),
                                          _: 1
                                        }, 8, ["onClick"])
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(_component_ElTooltip, {
                                    effect: "dark",
                                    content: "Otvorite izbornik Portala",
                                    placement: "top",
                                    "show-after": 1e3
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_ElButton, {
                                        class: "portal-more-button",
                                        onClick: ($event) => isPortalDrawerMenuOpen.value = true
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_component_ElIcon, {
                                            size: unref($viewport).isLessOrEquals("tablet") ? 18 : 24,
                                            class: [{
                                              "rotate-minus-90": unref(isPortalDrawerMenuOpen),
                                              "rotate-0": !unref(isPortalDrawerMenuOpen)
                                            }, "transition-transform"]
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(unref(arrow_down_default))
                                            ]),
                                            _: 1
                                          }, 8, ["size", "class"])
                                        ]),
                                        _: 1
                                      }, 8, ["onClick"])
                                    ]),
                                    _: 1
                                  })
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                          _push4(`</div>`);
                        } else {
                          return [
                            createVNode("div", {
                              class: "portal-btn-wrapper",
                              justify: "center",
                              align: "middle"
                            }, [
                              createVNode(_component_ElCol, {
                                span: 18,
                                align: "middle"
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_NuxtLink, {
                                    to: "/portal",
                                    class: ["el-button header-button portal-button", {
                                      "el-button--primary": "portal" === unref(route).name
                                    }]
                                  }, {
                                    default: withCtx(() => [
                                      unref($viewport).isGreaterOrEquals("desktop") ? (openBlock(), createBlock(_component_ElIcon, {
                                        key: 0,
                                        size: 24,
                                        class: "home-icon"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(MegafoneIcon)
                                        ]),
                                        _: 1
                                      })) : createCommentVNode("", true),
                                      createTextVNode(" PORTAL ")
                                    ]),
                                    _: 1
                                  }, 8, ["class"])
                                ]),
                                _: 1
                              }),
                              createVNode(_component_ElCol, {
                                span: 6,
                                align: "middle"
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_ElTooltip, {
                                    effect: "dark",
                                    content: "Otvorite izbornik Portala",
                                    placement: "top",
                                    "show-after": 1e3
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_ElButton, {
                                        class: "portal-more-button",
                                        onClick: ($event) => isPortalDrawerMenuOpen.value = true
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_component_ElIcon, {
                                            size: unref($viewport).isLessOrEquals("tablet") ? 18 : 24,
                                            class: [{
                                              "rotate-minus-90": unref(isPortalDrawerMenuOpen),
                                              "rotate-0": !unref(isPortalDrawerMenuOpen)
                                            }, "transition-transform"]
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(unref(arrow_down_default))
                                            ]),
                                            _: 1
                                          }, 8, ["size", "class"])
                                        ]),
                                        _: 1
                                      }, 8, ["onClick"])
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              })
                            ])
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(`<!--[-->`);
                    ssrRenderList(unref(categories), (category, index) => {
                      _push3(ssrRenderComponent(_component_ElCol, mergeProps({
                        key: category.name,
                        span: 3,
                        duration: 400,
                        delay: 600 + index * 200
                      }, ssrGetDirectiveProps(_ctx, _directive_motion_slide_top)), {
                        default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(ssrRenderComponent(_component_NuxtLink, {
                              to: category.name === "Naslovnica" ? "/" : `/${category.name}`,
                              class: ["el-button header-button", {
                                "el-button--primary": category.name.toLowerCase() === unref(route).name || unref(route).name === "index" && category.name === "Naslovnica"
                              }]
                            }, {
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  if (unref($viewport).isGreaterOrEquals("desktop")) {
                                    _push5(ssrRenderComponent(_component_ElIcon, {
                                      size: 24,
                                      class: "home-icon"
                                    }, {
                                      default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                        if (_push6) {
                                          ssrRenderVNode(_push6, createVNode(resolveDynamicComponent(category.icon), null, null), _parent6, _scopeId5);
                                        } else {
                                          return [
                                            (openBlock(), createBlock(resolveDynamicComponent(category.icon)))
                                          ];
                                        }
                                      }),
                                      _: 2
                                    }, _parent5, _scopeId4));
                                  } else {
                                    _push5(`<!---->`);
                                  }
                                  _push5(` ${ssrInterpolate(category.name.toUpperCase())}`);
                                } else {
                                  return [
                                    unref($viewport).isGreaterOrEquals("desktop") ? (openBlock(), createBlock(_component_ElIcon, {
                                      key: 0,
                                      size: 24,
                                      class: "home-icon"
                                    }, {
                                      default: withCtx(() => [
                                        (openBlock(), createBlock(resolveDynamicComponent(category.icon)))
                                      ]),
                                      _: 2
                                    }, 1024)) : createCommentVNode("", true),
                                    createTextVNode(" " + toDisplayString(category.name.toUpperCase()), 1)
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent4, _scopeId3));
                          } else {
                            return [
                              createVNode(_component_NuxtLink, {
                                to: category.name === "Naslovnica" ? "/" : `/${category.name}`,
                                class: ["el-button header-button", {
                                  "el-button--primary": category.name.toLowerCase() === unref(route).name || unref(route).name === "index" && category.name === "Naslovnica"
                                }]
                              }, {
                                default: withCtx(() => [
                                  unref($viewport).isGreaterOrEquals("desktop") ? (openBlock(), createBlock(_component_ElIcon, {
                                    key: 0,
                                    size: 24,
                                    class: "home-icon"
                                  }, {
                                    default: withCtx(() => [
                                      (openBlock(), createBlock(resolveDynamicComponent(category.icon)))
                                    ]),
                                    _: 2
                                  }, 1024)) : createCommentVNode("", true),
                                  createTextVNode(" " + toDisplayString(category.name.toUpperCase()), 1)
                                ]),
                                _: 2
                              }, 1032, ["to", "class"])
                            ];
                          }
                        }),
                        _: 2
                      }, _parent3, _scopeId2));
                    });
                    _push3(`<!--]-->`);
                    _push3(ssrRenderComponent(_component_ElCol, mergeProps({
                      span: 4,
                      duration: 400,
                      delay: 1200
                    }, ssrGetDirectiveProps(_ctx, _directive_motion_slide_top)), {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_ElRow, {
                            class: "desktop-search-wrapper",
                            align: "middle"
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(_component_ElCol, {
                                  span: 20,
                                  align: "middle",
                                  justify: "center"
                                }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(`<input${ssrRenderAttr("value", unref(searchValue))} placeholder="Traži..." class="desktop-search" data-v-05c49246${_scopeId5}>`);
                                    } else {
                                      return [
                                        withDirectives(createVNode("input", {
                                          "onUpdate:modelValue": ($event) => isRef(searchValue) ? searchValue.value = $event : null,
                                          placeholder: "Traži...",
                                          class: "desktop-search",
                                          onKeyup: withKeys(handleSearch, ["enter"])
                                        }, null, 40, ["onUpdate:modelValue"]), [
                                          [vModelText, unref(searchValue)]
                                        ])
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent5, _scopeId4));
                                _push5(ssrRenderComponent(_component_ElCol, {
                                  span: 4,
                                  align: "end"
                                }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(ssrRenderComponent(_component_NuxtLink, {
                                        to: unref(searchValue) ? `/pretrazivanje?value=${unref(searchValue)}` : ""
                                      }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(ssrRenderComponent(_component_ElIcon, {
                                              size: 22,
                                              class: "search-icon mt-8"
                                            }, {
                                              default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                if (_push8) {
                                                  _push8(ssrRenderComponent(unref(search_default), null, null, _parent8, _scopeId7));
                                                } else {
                                                  return [
                                                    createVNode(unref(search_default))
                                                  ];
                                                }
                                              }),
                                              _: 1
                                            }, _parent7, _scopeId6));
                                          } else {
                                            return [
                                              createVNode(_component_ElIcon, {
                                                size: 22,
                                                class: "search-icon mt-8"
                                              }, {
                                                default: withCtx(() => [
                                                  createVNode(unref(search_default))
                                                ]),
                                                _: 1
                                              })
                                            ];
                                          }
                                        }),
                                        _: 1
                                      }, _parent6, _scopeId5));
                                    } else {
                                      return [
                                        createVNode(_component_NuxtLink, {
                                          to: unref(searchValue) ? `/pretrazivanje?value=${unref(searchValue)}` : ""
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(_component_ElIcon, {
                                              size: 22,
                                              class: "search-icon mt-8"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(unref(search_default))
                                              ]),
                                              _: 1
                                            })
                                          ]),
                                          _: 1
                                        }, 8, ["to"])
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(_component_ElCol, {
                                    span: 20,
                                    align: "middle",
                                    justify: "center"
                                  }, {
                                    default: withCtx(() => [
                                      withDirectives(createVNode("input", {
                                        "onUpdate:modelValue": ($event) => isRef(searchValue) ? searchValue.value = $event : null,
                                        placeholder: "Traži...",
                                        class: "desktop-search",
                                        onKeyup: withKeys(handleSearch, ["enter"])
                                      }, null, 40, ["onUpdate:modelValue"]), [
                                        [vModelText, unref(searchValue)]
                                      ])
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_ElCol, {
                                    span: 4,
                                    align: "end"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_NuxtLink, {
                                        to: unref(searchValue) ? `/pretrazivanje?value=${unref(searchValue)}` : ""
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_component_ElIcon, {
                                            size: 22,
                                            class: "search-icon mt-8"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(unref(search_default))
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 1
                                      }, 8, ["to"])
                                    ]),
                                    _: 1
                                  })
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(_component_ElRow, {
                              class: "desktop-search-wrapper",
                              align: "middle"
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_ElCol, {
                                  span: 20,
                                  align: "middle",
                                  justify: "center"
                                }, {
                                  default: withCtx(() => [
                                    withDirectives(createVNode("input", {
                                      "onUpdate:modelValue": ($event) => isRef(searchValue) ? searchValue.value = $event : null,
                                      placeholder: "Traži...",
                                      class: "desktop-search",
                                      onKeyup: withKeys(handleSearch, ["enter"])
                                    }, null, 40, ["onUpdate:modelValue"]), [
                                      [vModelText, unref(searchValue)]
                                    ])
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_ElCol, {
                                  span: 4,
                                  align: "end"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_NuxtLink, {
                                      to: unref(searchValue) ? `/pretrazivanje?value=${unref(searchValue)}` : ""
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(_component_ElIcon, {
                                          size: 22,
                                          class: "search-icon mt-8"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(unref(search_default))
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 1
                                    }, 8, ["to"])
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            })
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      withDirectives((openBlock(), createBlock(_component_ElCol, {
                        span: 5,
                        align: "center",
                        duration: 400
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_NuxtLink, {
                            to: "/",
                            class: "title"
                          }, {
                            default: withCtx(() => [
                              createVNode("h3", { class: "color-primary" }, "Gastarbajter.de")
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })), [
                        [_directive_motion_slide_top]
                      ]),
                      withDirectives((openBlock(), createBlock(_component_ElCol, {
                        span: 3,
                        duration: 400,
                        delay: 200
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_NuxtLink, {
                            to: "/",
                            class: ["el-button header-button", {
                              "el-button--primary": "index" === unref(route).name
                            }]
                          }, {
                            default: withCtx(() => [
                              unref($viewport).isGreaterOrEquals("desktop") ? (openBlock(), createBlock(_component_ElIcon, {
                                key: 0,
                                size: 24,
                                class: "home-icon"
                              }, {
                                default: withCtx(() => [
                                  createVNode(unref(home_filled_default))
                                ]),
                                _: 1
                              })) : createCommentVNode("", true),
                              createTextVNode(" " + toDisplayString(unref($viewport).match("tablet") ? "POČETNA" : "NASLOVNICA"), 1)
                            ]),
                            _: 1
                          }, 8, ["class"])
                        ]),
                        _: 1
                      })), [
                        [_directive_motion_slide_top]
                      ]),
                      withDirectives((openBlock(), createBlock(_component_ElCol, {
                        span: 3,
                        duration: 400,
                        delay: 400
                      }, {
                        default: withCtx(() => [
                          createVNode("div", {
                            class: "portal-btn-wrapper",
                            justify: "center",
                            align: "middle"
                          }, [
                            createVNode(_component_ElCol, {
                              span: 18,
                              align: "middle"
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_NuxtLink, {
                                  to: "/portal",
                                  class: ["el-button header-button portal-button", {
                                    "el-button--primary": "portal" === unref(route).name
                                  }]
                                }, {
                                  default: withCtx(() => [
                                    unref($viewport).isGreaterOrEquals("desktop") ? (openBlock(), createBlock(_component_ElIcon, {
                                      key: 0,
                                      size: 24,
                                      class: "home-icon"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(MegafoneIcon)
                                      ]),
                                      _: 1
                                    })) : createCommentVNode("", true),
                                    createTextVNode(" PORTAL ")
                                  ]),
                                  _: 1
                                }, 8, ["class"])
                              ]),
                              _: 1
                            }),
                            createVNode(_component_ElCol, {
                              span: 6,
                              align: "middle"
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_ElTooltip, {
                                  effect: "dark",
                                  content: "Otvorite izbornik Portala",
                                  placement: "top",
                                  "show-after": 1e3
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_ElButton, {
                                      class: "portal-more-button",
                                      onClick: ($event) => isPortalDrawerMenuOpen.value = true
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(_component_ElIcon, {
                                          size: unref($viewport).isLessOrEquals("tablet") ? 18 : 24,
                                          class: [{
                                            "rotate-minus-90": unref(isPortalDrawerMenuOpen),
                                            "rotate-0": !unref(isPortalDrawerMenuOpen)
                                          }, "transition-transform"]
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(unref(arrow_down_default))
                                          ]),
                                          _: 1
                                        }, 8, ["size", "class"])
                                      ]),
                                      _: 1
                                    }, 8, ["onClick"])
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            })
                          ])
                        ]),
                        _: 1
                      })), [
                        [_directive_motion_slide_top]
                      ]),
                      (openBlock(true), createBlock(Fragment, null, renderList(unref(categories), (category, index) => {
                        return withDirectives((openBlock(), createBlock(_component_ElCol, {
                          key: category.name,
                          span: 3,
                          duration: 400,
                          delay: 600 + index * 200
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_NuxtLink, {
                              to: category.name === "Naslovnica" ? "/" : `/${category.name}`,
                              class: ["el-button header-button", {
                                "el-button--primary": category.name.toLowerCase() === unref(route).name || unref(route).name === "index" && category.name === "Naslovnica"
                              }]
                            }, {
                              default: withCtx(() => [
                                unref($viewport).isGreaterOrEquals("desktop") ? (openBlock(), createBlock(_component_ElIcon, {
                                  key: 0,
                                  size: 24,
                                  class: "home-icon"
                                }, {
                                  default: withCtx(() => [
                                    (openBlock(), createBlock(resolveDynamicComponent(category.icon)))
                                  ]),
                                  _: 2
                                }, 1024)) : createCommentVNode("", true),
                                createTextVNode(" " + toDisplayString(category.name.toUpperCase()), 1)
                              ]),
                              _: 2
                            }, 1032, ["to", "class"])
                          ]),
                          _: 2
                        }, 1032, ["delay"])), [
                          [_directive_motion_slide_top]
                        ]);
                      }), 128)),
                      withDirectives((openBlock(), createBlock(_component_ElCol, {
                        span: 4,
                        duration: 400,
                        delay: 1200
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_ElRow, {
                            class: "desktop-search-wrapper",
                            align: "middle"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_ElCol, {
                                span: 20,
                                align: "middle",
                                justify: "center"
                              }, {
                                default: withCtx(() => [
                                  withDirectives(createVNode("input", {
                                    "onUpdate:modelValue": ($event) => isRef(searchValue) ? searchValue.value = $event : null,
                                    placeholder: "Traži...",
                                    class: "desktop-search",
                                    onKeyup: withKeys(handleSearch, ["enter"])
                                  }, null, 40, ["onUpdate:modelValue"]), [
                                    [vModelText, unref(searchValue)]
                                  ])
                                ]),
                                _: 1
                              }),
                              createVNode(_component_ElCol, {
                                span: 4,
                                align: "end"
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_NuxtLink, {
                                    to: unref(searchValue) ? `/pretrazivanje?value=${unref(searchValue)}` : ""
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_ElIcon, {
                                        size: 22,
                                        class: "search-icon mt-8"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(unref(search_default))
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  }, 8, ["to"])
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })), [
                        [_directive_motion_slide_top]
                      ])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            }
          } else {
            return [
              unref($viewport).isLessThan("tablet") ? (openBlock(), createBlock(_component_ElRow, {
                key: 0,
                class: "header-container"
              }, {
                default: withCtx(() => [
                  withDirectives((openBlock(), createBlock(_component_ElCol, {
                    span: 4,
                    style: { "margin": "auto" },
                    duration: 400,
                    delay: 200
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_ElIcon, {
                        size: 28,
                        color: "var(--el-color-primary)",
                        class: "cursor-pointer",
                        onClick: ($event) => isMobileDrawerMenuOpen.value = true
                      }, {
                        default: withCtx(() => [
                          createVNode(HamburgerIcon)
                        ]),
                        _: 1
                      }, 8, ["onClick"])
                    ]),
                    _: 1
                  })), [
                    [_directive_motion_slide_top]
                  ]),
                  withDirectives((openBlock(), createBlock(_component_ElCol, {
                    span: 16,
                    align: "center",
                    duration: 400,
                    delay: 400
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_NuxtLink, {
                        to: "/",
                        class: "mobile-title"
                      }, {
                        default: withCtx(() => [
                          createVNode("h3", { class: "color-primary" }, "Gastarbajter.de")
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })), [
                    [_directive_motion_slide_top]
                  ]),
                  withDirectives((openBlock(), createBlock(_component_ElCol, {
                    span: 4,
                    style: { "margin": "auto" },
                    align: "end",
                    duration: 400,
                    delay: 600
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_ElPopover, {
                        ref_key: "mobileSearchPopoverRef",
                        ref: mobileSearchPopoverRef,
                        placement: "bottom-start",
                        trigger: "click",
                        width: 300
                      }, {
                        reference: withCtx(() => [
                          createVNode(_component_ElIcon, {
                            size: 28,
                            color: "var(--el-color-primary)",
                            class: "cursor-pointer"
                          }, {
                            default: withCtx(() => [
                              createVNode(unref(search_default))
                            ]),
                            _: 1
                          })
                        ]),
                        default: withCtx(() => [
                          createVNode(_component_ElRow, null, {
                            default: withCtx(() => [
                              createVNode(_component_ElInput, {
                                modelValue: unref(searchValue),
                                "onUpdate:modelValue": ($event) => isRef(searchValue) ? searchValue.value = $event : null,
                                placeholder: "Traži...",
                                onKeyup: withKeys(handleSearch, ["enter"])
                              }, {
                                suffix: withCtx(() => [
                                  createVNode(_component_NuxtLink, {
                                    to: unref(searchValue) ? `/pretrazivanje?value=${unref(searchValue)}` : ""
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_ElIcon, {
                                        size: 20,
                                        class: "search-icon mt-8"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(unref(search_default))
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  }, 8, ["to"])
                                ]),
                                _: 1
                              }, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            _: 1
                          }),
                          createVNode(_component_ElRow, {
                            class: "mt-12",
                            justify: "end"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_NuxtLink, {
                                to: unref(searchValue) ? `/pretrazivanje?value=${unref(searchValue)}` : ""
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_ElButton, { type: "primary" }, {
                                    default: withCtx(() => [
                                      createTextVNode(" Traži ")
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }, 8, ["to"])
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }, 512)
                    ]),
                    _: 1
                  })), [
                    [_directive_motion_slide_top]
                  ])
                ]),
                _: 1
              })) : (openBlock(), createBlock(_component_ElRow, {
                key: 1,
                class: "header-container"
              }, {
                default: withCtx(() => [
                  withDirectives((openBlock(), createBlock(_component_ElCol, {
                    span: 5,
                    align: "center",
                    duration: 400
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_NuxtLink, {
                        to: "/",
                        class: "title"
                      }, {
                        default: withCtx(() => [
                          createVNode("h3", { class: "color-primary" }, "Gastarbajter.de")
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })), [
                    [_directive_motion_slide_top]
                  ]),
                  withDirectives((openBlock(), createBlock(_component_ElCol, {
                    span: 3,
                    duration: 400,
                    delay: 200
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_NuxtLink, {
                        to: "/",
                        class: ["el-button header-button", {
                          "el-button--primary": "index" === unref(route).name
                        }]
                      }, {
                        default: withCtx(() => [
                          unref($viewport).isGreaterOrEquals("desktop") ? (openBlock(), createBlock(_component_ElIcon, {
                            key: 0,
                            size: 24,
                            class: "home-icon"
                          }, {
                            default: withCtx(() => [
                              createVNode(unref(home_filled_default))
                            ]),
                            _: 1
                          })) : createCommentVNode("", true),
                          createTextVNode(" " + toDisplayString(unref($viewport).match("tablet") ? "POČETNA" : "NASLOVNICA"), 1)
                        ]),
                        _: 1
                      }, 8, ["class"])
                    ]),
                    _: 1
                  })), [
                    [_directive_motion_slide_top]
                  ]),
                  withDirectives((openBlock(), createBlock(_component_ElCol, {
                    span: 3,
                    duration: 400,
                    delay: 400
                  }, {
                    default: withCtx(() => [
                      createVNode("div", {
                        class: "portal-btn-wrapper",
                        justify: "center",
                        align: "middle"
                      }, [
                        createVNode(_component_ElCol, {
                          span: 18,
                          align: "middle"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_NuxtLink, {
                              to: "/portal",
                              class: ["el-button header-button portal-button", {
                                "el-button--primary": "portal" === unref(route).name
                              }]
                            }, {
                              default: withCtx(() => [
                                unref($viewport).isGreaterOrEquals("desktop") ? (openBlock(), createBlock(_component_ElIcon, {
                                  key: 0,
                                  size: 24,
                                  class: "home-icon"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(MegafoneIcon)
                                  ]),
                                  _: 1
                                })) : createCommentVNode("", true),
                                createTextVNode(" PORTAL ")
                              ]),
                              _: 1
                            }, 8, ["class"])
                          ]),
                          _: 1
                        }),
                        createVNode(_component_ElCol, {
                          span: 6,
                          align: "middle"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_ElTooltip, {
                              effect: "dark",
                              content: "Otvorite izbornik Portala",
                              placement: "top",
                              "show-after": 1e3
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_ElButton, {
                                  class: "portal-more-button",
                                  onClick: ($event) => isPortalDrawerMenuOpen.value = true
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_ElIcon, {
                                      size: unref($viewport).isLessOrEquals("tablet") ? 18 : 24,
                                      class: [{
                                        "rotate-minus-90": unref(isPortalDrawerMenuOpen),
                                        "rotate-0": !unref(isPortalDrawerMenuOpen)
                                      }, "transition-transform"]
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(unref(arrow_down_default))
                                      ]),
                                      _: 1
                                    }, 8, ["size", "class"])
                                  ]),
                                  _: 1
                                }, 8, ["onClick"])
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        })
                      ])
                    ]),
                    _: 1
                  })), [
                    [_directive_motion_slide_top]
                  ]),
                  (openBlock(true), createBlock(Fragment, null, renderList(unref(categories), (category, index) => {
                    return withDirectives((openBlock(), createBlock(_component_ElCol, {
                      key: category.name,
                      span: 3,
                      duration: 400,
                      delay: 600 + index * 200
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_NuxtLink, {
                          to: category.name === "Naslovnica" ? "/" : `/${category.name}`,
                          class: ["el-button header-button", {
                            "el-button--primary": category.name.toLowerCase() === unref(route).name || unref(route).name === "index" && category.name === "Naslovnica"
                          }]
                        }, {
                          default: withCtx(() => [
                            unref($viewport).isGreaterOrEquals("desktop") ? (openBlock(), createBlock(_component_ElIcon, {
                              key: 0,
                              size: 24,
                              class: "home-icon"
                            }, {
                              default: withCtx(() => [
                                (openBlock(), createBlock(resolveDynamicComponent(category.icon)))
                              ]),
                              _: 2
                            }, 1024)) : createCommentVNode("", true),
                            createTextVNode(" " + toDisplayString(category.name.toUpperCase()), 1)
                          ]),
                          _: 2
                        }, 1032, ["to", "class"])
                      ]),
                      _: 2
                    }, 1032, ["delay"])), [
                      [_directive_motion_slide_top]
                    ]);
                  }), 128)),
                  withDirectives((openBlock(), createBlock(_component_ElCol, {
                    span: 4,
                    duration: 400,
                    delay: 1200
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_ElRow, {
                        class: "desktop-search-wrapper",
                        align: "middle"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_ElCol, {
                            span: 20,
                            align: "middle",
                            justify: "center"
                          }, {
                            default: withCtx(() => [
                              withDirectives(createVNode("input", {
                                "onUpdate:modelValue": ($event) => isRef(searchValue) ? searchValue.value = $event : null,
                                placeholder: "Traži...",
                                class: "desktop-search",
                                onKeyup: withKeys(handleSearch, ["enter"])
                              }, null, 40, ["onUpdate:modelValue"]), [
                                [vModelText, unref(searchValue)]
                              ])
                            ]),
                            _: 1
                          }),
                          createVNode(_component_ElCol, {
                            span: 4,
                            align: "end"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_NuxtLink, {
                                to: unref(searchValue) ? `/pretrazivanje?value=${unref(searchValue)}` : ""
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_ElIcon, {
                                    size: 22,
                                    class: "search-icon mt-8"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(unref(search_default))
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }, 8, ["to"])
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })), [
                    [_directive_motion_slide_top]
                  ])
                ]),
                _: 1
              }))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(_component_ElDrawer, {
        modelValue: unref(isMobileDrawerMenuOpen),
        "onUpdate:modelValue": ($event) => isRef(isMobileDrawerMenuOpen) ? isMobileDrawerMenuOpen.value = $event : null,
        direction: "ltr",
        size: "100%"
      }, {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_ElRow, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<h3 class="color-primary" data-v-05c49246${_scopeId2}>Gastarbajter.de</h3>`);
                } else {
                  return [
                    createVNode("h3", { class: "color-primary" }, "Gastarbajter.de")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_ElRow, null, {
                default: withCtx(() => [
                  createVNode("h3", { class: "color-primary" }, "Gastarbajter.de")
                ]),
                _: 1
              })
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="drawer-container" data-v-05c49246${_scopeId}>`);
            _push2(ssrRenderComponent(_component_NuxtLink, {
              to: "/",
              class: ["el-button drawer-button", {
                "el-button--primary": "index" === unref(route).name
              }]
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_ElRow, {
                    class: "drawer-button-text-wrapper",
                    align: "middle"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_ElIcon, {
                          class: "home-icon",
                          size: 48
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(unref(home_filled_default), null, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(unref(home_filled_default))
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(` NASLOVNICA `);
                      } else {
                        return [
                          createVNode(_component_ElIcon, {
                            class: "home-icon",
                            size: 48
                          }, {
                            default: withCtx(() => [
                              createVNode(unref(home_filled_default))
                            ]),
                            _: 1
                          }),
                          createTextVNode(" NASLOVNICA ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_ElRow, {
                      class: "drawer-button-text-wrapper",
                      align: "middle"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_ElIcon, {
                          class: "home-icon",
                          size: 48
                        }, {
                          default: withCtx(() => [
                            createVNode(unref(home_filled_default))
                          ]),
                          _: 1
                        }),
                        createTextVNode(" NASLOVNICA ")
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_ElRow, { align: "middle" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_ElCol, { span: 21 }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_NuxtLink, {
                          to: "/portal",
                          class: ["el-button mobile-portal-drawer-button w-100", {
                            "el-button--primary": "portal" === unref(route).name
                          }]
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_ElRow, {
                                class: "drawer-button-text-wrapper",
                                align: "middle"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_ElIcon, {
                                      class: "home-icon",
                                      size: 48
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(MegafoneIcon, null, null, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(MegafoneIcon)
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(` PORTAL `);
                                  } else {
                                    return [
                                      createVNode(_component_ElIcon, {
                                        class: "home-icon",
                                        size: 48
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(MegafoneIcon)
                                        ]),
                                        _: 1
                                      }),
                                      createTextVNode(" PORTAL ")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_ElRow, {
                                  class: "drawer-button-text-wrapper",
                                  align: "middle"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_ElIcon, {
                                      class: "home-icon",
                                      size: 48
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(MegafoneIcon)
                                      ]),
                                      _: 1
                                    }),
                                    createTextVNode(" PORTAL ")
                                  ]),
                                  _: 1
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_NuxtLink, {
                            to: "/portal",
                            class: ["el-button mobile-portal-drawer-button w-100", {
                              "el-button--primary": "portal" === unref(route).name
                            }]
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_ElRow, {
                                class: "drawer-button-text-wrapper",
                                align: "middle"
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_ElIcon, {
                                    class: "home-icon",
                                    size: 48
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(MegafoneIcon)
                                    ]),
                                    _: 1
                                  }),
                                  createTextVNode(" PORTAL ")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }, 8, ["class"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_ElCol, { span: 3 }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_ElButton, {
                          class: "mobile-portal-more-button",
                          onClick: ($event) => isMobilePortalOpen.value = !unref(isMobilePortalOpen)
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_ElIcon, {
                                size: 20,
                                class: [{
                                  "rotate-90": unref(isMobilePortalOpen),
                                  "rotate-0": !unref(isMobilePortalOpen)
                                }, "transition-transform"]
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(unref(arrow_right_default), null, null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(unref(arrow_right_default))
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_ElIcon, {
                                  size: 20,
                                  class: [{
                                    "rotate-90": unref(isMobilePortalOpen),
                                    "rotate-0": !unref(isMobilePortalOpen)
                                  }, "transition-transform"]
                                }, {
                                  default: withCtx(() => [
                                    createVNode(unref(arrow_right_default))
                                  ]),
                                  _: 1
                                }, 8, ["class"])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_ElButton, {
                            class: "mobile-portal-more-button",
                            onClick: ($event) => isMobilePortalOpen.value = !unref(isMobilePortalOpen)
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_ElIcon, {
                                size: 20,
                                class: [{
                                  "rotate-90": unref(isMobilePortalOpen),
                                  "rotate-0": !unref(isMobilePortalOpen)
                                }, "transition-transform"]
                              }, {
                                default: withCtx(() => [
                                  createVNode(unref(arrow_right_default))
                                ]),
                                _: 1
                              }, 8, ["class"])
                            ]),
                            _: 1
                          }, 8, ["onClick"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_ElCol, { span: 21 }, {
                      default: withCtx(() => [
                        createVNode(_component_NuxtLink, {
                          to: "/portal",
                          class: ["el-button mobile-portal-drawer-button w-100", {
                            "el-button--primary": "portal" === unref(route).name
                          }]
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_ElRow, {
                              class: "drawer-button-text-wrapper",
                              align: "middle"
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_ElIcon, {
                                  class: "home-icon",
                                  size: 48
                                }, {
                                  default: withCtx(() => [
                                    createVNode(MegafoneIcon)
                                  ]),
                                  _: 1
                                }),
                                createTextVNode(" PORTAL ")
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }, 8, ["class"])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_ElCol, { span: 3 }, {
                      default: withCtx(() => [
                        createVNode(_component_ElButton, {
                          class: "mobile-portal-more-button",
                          onClick: ($event) => isMobilePortalOpen.value = !unref(isMobilePortalOpen)
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_ElIcon, {
                              size: 20,
                              class: [{
                                "rotate-90": unref(isMobilePortalOpen),
                                "rotate-0": !unref(isMobilePortalOpen)
                              }, "transition-transform"]
                            }, {
                              default: withCtx(() => [
                                createVNode(unref(arrow_right_default))
                              ]),
                              _: 1
                            }, 8, ["class"])
                          ]),
                          _: 1
                        }, 8, ["onClick"])
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            if (unref(isMobilePortalOpen)) {
              _push2(`<!--[-->`);
              if (unref(categoriesLoading)) {
                _push2(`<div${ssrRenderAttrs(_temp0 = mergeProps({
                  "element-loading-text": "Učitavanje kategorija...",
                  style: { "height": "100px", "margin-bottom": "40px" }
                }, ssrGetDirectiveProps(_ctx, _directive_loading, true)))} data-v-05c49246${_scopeId}>${"textContent" in _temp0 ? ssrInterpolate(_temp0.textContent) : _temp0.innerHTML ?? ""}</div>`);
              } else if (unref(isMobilePortalOpen)) {
                _push2(`<!--[-->`);
                ssrRenderList(unref(portalCategories), (category) => {
                  _push2(ssrRenderComponent(HeaderPortalDrawerItem, {
                    key: category.id,
                    category,
                    "tree-deep": 1,
                    onCloseMenu: ($event) => isPortalDrawerMenuOpen.value = false
                  }, null, _parent2, _scopeId));
                });
                _push2(`<!--]-->`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`<!--]-->`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<!--[-->`);
            ssrRenderList(unref(categories), (category) => {
              _push2(ssrRenderComponent(_component_NuxtLink, {
                key: category.name,
                to: category.name === "Naslovnica" ? "/" : `/${category.name}`,
                class: ["el-button drawer-button", {
                  "el-button--primary": category.name.toLowerCase() === unref(route).name || unref(route).name === "index" && category.name === "Naslovnica"
                }]
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_ElRow, {
                      class: "drawer-button-text-wrapper",
                      align: "middle"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_ElIcon, {
                            class: "home-icon",
                            size: 48
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                ssrRenderVNode(_push5, createVNode(resolveDynamicComponent(category.icon), null, null), _parent5, _scopeId4);
                              } else {
                                return [
                                  (openBlock(), createBlock(resolveDynamicComponent(category.icon)))
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                          _push4(` ${ssrInterpolate(category.name.toUpperCase())}`);
                        } else {
                          return [
                            createVNode(_component_ElIcon, {
                              class: "home-icon",
                              size: 48
                            }, {
                              default: withCtx(() => [
                                (openBlock(), createBlock(resolveDynamicComponent(category.icon)))
                              ]),
                              _: 2
                            }, 1024),
                            createTextVNode(" " + toDisplayString(category.name.toUpperCase()), 1)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_ElRow, {
                        class: "drawer-button-text-wrapper",
                        align: "middle"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_ElIcon, {
                            class: "home-icon",
                            size: 48
                          }, {
                            default: withCtx(() => [
                              (openBlock(), createBlock(resolveDynamicComponent(category.icon)))
                            ]),
                            _: 2
                          }, 1024),
                          createTextVNode(" " + toDisplayString(category.name.toUpperCase()), 1)
                        ]),
                        _: 2
                      }, 1024)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
            _push2(ssrRenderComponent(_component_NuxtLink, {
              to: "/reklamiranje",
              class: ["el-button drawer-button", { "el-button--primary": "reklamiranje" === unref(route).name }]
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_ElRow, {
                    class: "drawer-button-text-wrapper",
                    align: "middle"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_ElIcon, {
                          class: "home-icon",
                          size: 48
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(unref(postcard_default), null, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(unref(postcard_default))
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(` REKLAMIRANJE `);
                      } else {
                        return [
                          createVNode(_component_ElIcon, {
                            class: "home-icon",
                            size: 48
                          }, {
                            default: withCtx(() => [
                              createVNode(unref(postcard_default))
                            ]),
                            _: 1
                          }),
                          createTextVNode(" REKLAMIRANJE ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_ElRow, {
                      class: "drawer-button-text-wrapper",
                      align: "middle"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_ElIcon, {
                          class: "home-icon",
                          size: 48
                        }, {
                          default: withCtx(() => [
                            createVNode(unref(postcard_default))
                          ]),
                          _: 1
                        }),
                        createTextVNode(" REKLAMIRANJE ")
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "drawer-container" }, [
                createVNode(_component_NuxtLink, {
                  to: "/",
                  class: ["el-button drawer-button", {
                    "el-button--primary": "index" === unref(route).name
                  }]
                }, {
                  default: withCtx(() => [
                    createVNode(_component_ElRow, {
                      class: "drawer-button-text-wrapper",
                      align: "middle"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_ElIcon, {
                          class: "home-icon",
                          size: 48
                        }, {
                          default: withCtx(() => [
                            createVNode(unref(home_filled_default))
                          ]),
                          _: 1
                        }),
                        createTextVNode(" NASLOVNICA ")
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }, 8, ["class"]),
                createVNode(_component_ElRow, { align: "middle" }, {
                  default: withCtx(() => [
                    createVNode(_component_ElCol, { span: 21 }, {
                      default: withCtx(() => [
                        createVNode(_component_NuxtLink, {
                          to: "/portal",
                          class: ["el-button mobile-portal-drawer-button w-100", {
                            "el-button--primary": "portal" === unref(route).name
                          }]
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_ElRow, {
                              class: "drawer-button-text-wrapper",
                              align: "middle"
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_ElIcon, {
                                  class: "home-icon",
                                  size: 48
                                }, {
                                  default: withCtx(() => [
                                    createVNode(MegafoneIcon)
                                  ]),
                                  _: 1
                                }),
                                createTextVNode(" PORTAL ")
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }, 8, ["class"])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_ElCol, { span: 3 }, {
                      default: withCtx(() => [
                        createVNode(_component_ElButton, {
                          class: "mobile-portal-more-button",
                          onClick: ($event) => isMobilePortalOpen.value = !unref(isMobilePortalOpen)
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_ElIcon, {
                              size: 20,
                              class: [{
                                "rotate-90": unref(isMobilePortalOpen),
                                "rotate-0": !unref(isMobilePortalOpen)
                              }, "transition-transform"]
                            }, {
                              default: withCtx(() => [
                                createVNode(unref(arrow_right_default))
                              ]),
                              _: 1
                            }, 8, ["class"])
                          ]),
                          _: 1
                        }, 8, ["onClick"])
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                unref(isMobilePortalOpen) ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                  unref(categoriesLoading) ? withDirectives((openBlock(), createBlock("div", {
                    key: 0,
                    "element-loading-text": "Učitavanje kategorija...",
                    style: { "height": "100px", "margin-bottom": "40px" }
                  }, null, 512)), [
                    [_directive_loading, true]
                  ]) : unref(isMobilePortalOpen) ? (openBlock(true), createBlock(Fragment, { key: 1 }, renderList(unref(portalCategories), (category) => {
                    return openBlock(), createBlock(HeaderPortalDrawerItem, {
                      key: category.id,
                      category,
                      "tree-deep": 1,
                      onCloseMenu: ($event) => isPortalDrawerMenuOpen.value = false
                    }, null, 8, ["category", "onCloseMenu"]);
                  }), 128)) : createCommentVNode("", true)
                ], 64)) : createCommentVNode("", true),
                (openBlock(true), createBlock(Fragment, null, renderList(unref(categories), (category) => {
                  return openBlock(), createBlock(_component_NuxtLink, {
                    key: category.name,
                    to: category.name === "Naslovnica" ? "/" : `/${category.name}`,
                    class: ["el-button drawer-button", {
                      "el-button--primary": category.name.toLowerCase() === unref(route).name || unref(route).name === "index" && category.name === "Naslovnica"
                    }]
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_ElRow, {
                        class: "drawer-button-text-wrapper",
                        align: "middle"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_ElIcon, {
                            class: "home-icon",
                            size: 48
                          }, {
                            default: withCtx(() => [
                              (openBlock(), createBlock(resolveDynamicComponent(category.icon)))
                            ]),
                            _: 2
                          }, 1024),
                          createTextVNode(" " + toDisplayString(category.name.toUpperCase()), 1)
                        ]),
                        _: 2
                      }, 1024)
                    ]),
                    _: 2
                  }, 1032, ["to", "class"]);
                }), 128)),
                createVNode(_component_NuxtLink, {
                  to: "/reklamiranje",
                  class: ["el-button drawer-button", { "el-button--primary": "reklamiranje" === unref(route).name }]
                }, {
                  default: withCtx(() => [
                    createVNode(_component_ElRow, {
                      class: "drawer-button-text-wrapper",
                      align: "middle"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_ElIcon, {
                          class: "home-icon",
                          size: 48
                        }, {
                          default: withCtx(() => [
                            createVNode(unref(postcard_default))
                          ]),
                          _: 1
                        }),
                        createTextVNode(" REKLAMIRANJE ")
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }, 8, ["class"])
              ])
            ];
          }
        }),
        footer: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_ElRow, {
              justify: "center",
              align: "middle",
              class: "w-100 color-zinc text-align-center"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_ElButton, {
                    class: "w-100 drawer-button",
                    type: "danger",
                    plain: "",
                    onClick: ($event) => isMobileDrawerMenuOpen.value = false
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_ElRow, { align: "middle" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_ElIcon, {
                                size: 18,
                                class: "mr-8"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(unref(close_bold_default), null, null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(unref(close_bold_default))
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(` Zatvori `);
                            } else {
                              return [
                                createVNode(_component_ElIcon, {
                                  size: 18,
                                  class: "mr-8"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(unref(close_bold_default))
                                  ]),
                                  _: 1
                                }),
                                createTextVNode(" Zatvori ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_ElRow, { align: "middle" }, {
                            default: withCtx(() => [
                              createVNode(_component_ElIcon, {
                                size: 18,
                                class: "mr-8"
                              }, {
                                default: withCtx(() => [
                                  createVNode(unref(close_bold_default))
                                ]),
                                _: 1
                              }),
                              createTextVNode(" Zatvori ")
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_ElButton, {
                      class: "w-100 drawer-button",
                      type: "danger",
                      plain: "",
                      onClick: ($event) => isMobileDrawerMenuOpen.value = false
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_ElRow, { align: "middle" }, {
                          default: withCtx(() => [
                            createVNode(_component_ElIcon, {
                              size: 18,
                              class: "mr-8"
                            }, {
                              default: withCtx(() => [
                                createVNode(unref(close_bold_default))
                              ]),
                              _: 1
                            }),
                            createTextVNode(" Zatvori ")
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }, 8, ["onClick"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_ElRow, {
              justify: "center",
              align: "middle",
              class: "w-100 color-zinc text-align-center mt-16"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_NuxtLink, {
                    to: "/kontakt",
                    class: "icon-link mr-4",
                    onClick: ($event) => isPortalDrawerMenuOpen.value = false
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_ElIcon, { size: 32 }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(MessageIcon, null, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(MessageIcon)
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_ElIcon, { size: 32 }, {
                            default: withCtx(() => [
                              createVNode(MessageIcon)
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_ElPopover, {
                    placement: "top",
                    trigger: "click",
                    width: "300"
                  }, {
                    reference: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_ElIcon, {
                          size: 32,
                          class: "icon-link cursor-pointer mb-4"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(FacebookIcon, null, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(FacebookIcon)
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_ElIcon, {
                            size: 32,
                            class: "icon-link cursor-pointer mb-4"
                          }, {
                            default: withCtx(() => [
                              createVNode(FacebookIcon)
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_ElRow, { justify: "center" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<p style="${ssrRenderStyle({ "font-size": "larger" })}" data-v-05c49246${_scopeId4}>Facebook grupe</p>`);
                            } else {
                              return [
                                createVNode("p", { style: { "font-size": "larger" } }, "Facebook grupe")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(`<!--[-->`);
                        ssrRenderList(unref(facebookLinks), (item) => {
                          _push4(`<div class="mb-4" data-v-05c49246${_scopeId3}> - `);
                          _push4(ssrRenderComponent(_component_NuxtLink, {
                            to: item.url,
                            target: "_blank"
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`${ssrInterpolate(item.name)}`);
                              } else {
                                return [
                                  createTextVNode(toDisplayString(item.name), 1)
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                          _push4(`</div>`);
                        });
                        _push4(`<!--]-->`);
                      } else {
                        return [
                          createVNode(_component_ElRow, { justify: "center" }, {
                            default: withCtx(() => [
                              createVNode("p", { style: { "font-size": "larger" } }, "Facebook grupe")
                            ]),
                            _: 1
                          }),
                          (openBlock(true), createBlock(Fragment, null, renderList(unref(facebookLinks), (item) => {
                            return openBlock(), createBlock("div", { class: "mb-4" }, [
                              createTextVNode(" - "),
                              createVNode(_component_NuxtLink, {
                                to: item.url,
                                target: "_blank"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(item.name), 1)
                                ]),
                                _: 2
                              }, 1032, ["to"])
                            ]);
                          }), 256))
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_NuxtLink, {
                    to: "https://www.instagram.com/promotim_augsburg/?utm_source=qr&igsh=MXNrenN6aDNlNGI3eQ%3D%3D#",
                    class: "icon-link ml-4",
                    target: "_blank"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_ElIcon, { size: 32 }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(InstagramIcon, null, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(InstagramIcon)
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_ElIcon, { size: 32 }, {
                            default: withCtx(() => [
                              createVNode(InstagramIcon)
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_NuxtLink, {
                    to: "https://www.tiktok.com/@gastarbajteri_augsburg?_t=ZN-8vwIsWxNLok&_r=1",
                    class: "icon-link ml-8",
                    target: "_blank"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_ElIcon, { size: 32 }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(TikTokIcon, null, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(TikTokIcon)
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_ElIcon, { size: 32 }, {
                            default: withCtx(() => [
                              createVNode(TikTokIcon)
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_NuxtLink, {
                      to: "/kontakt",
                      class: "icon-link mr-4",
                      onClick: ($event) => isPortalDrawerMenuOpen.value = false
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_ElIcon, { size: 32 }, {
                          default: withCtx(() => [
                            createVNode(MessageIcon)
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }, 8, ["onClick"]),
                    createVNode(_component_ElPopover, {
                      placement: "top",
                      trigger: "click",
                      width: "300"
                    }, {
                      reference: withCtx(() => [
                        createVNode(_component_ElIcon, {
                          size: 32,
                          class: "icon-link cursor-pointer mb-4"
                        }, {
                          default: withCtx(() => [
                            createVNode(FacebookIcon)
                          ]),
                          _: 1
                        })
                      ]),
                      default: withCtx(() => [
                        createVNode(_component_ElRow, { justify: "center" }, {
                          default: withCtx(() => [
                            createVNode("p", { style: { "font-size": "larger" } }, "Facebook grupe")
                          ]),
                          _: 1
                        }),
                        (openBlock(true), createBlock(Fragment, null, renderList(unref(facebookLinks), (item) => {
                          return openBlock(), createBlock("div", { class: "mb-4" }, [
                            createTextVNode(" - "),
                            createVNode(_component_NuxtLink, {
                              to: item.url,
                              target: "_blank"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(item.name), 1)
                              ]),
                              _: 2
                            }, 1032, ["to"])
                          ]);
                        }), 256))
                      ]),
                      _: 1
                    }),
                    createVNode(_component_NuxtLink, {
                      to: "https://www.instagram.com/promotim_augsburg/?utm_source=qr&igsh=MXNrenN6aDNlNGI3eQ%3D%3D#",
                      class: "icon-link ml-4",
                      target: "_blank"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_ElIcon, { size: 32 }, {
                          default: withCtx(() => [
                            createVNode(InstagramIcon)
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(_component_NuxtLink, {
                      to: "https://www.tiktok.com/@gastarbajteri_augsburg?_t=ZN-8vwIsWxNLok&_r=1",
                      class: "icon-link ml-8",
                      target: "_blank"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_ElIcon, { size: 32 }, {
                          default: withCtx(() => [
                            createVNode(TikTokIcon)
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_ElRow, {
                justify: "center",
                align: "middle",
                class: "w-100 color-zinc text-align-center"
              }, {
                default: withCtx(() => [
                  createVNode(_component_ElButton, {
                    class: "w-100 drawer-button",
                    type: "danger",
                    plain: "",
                    onClick: ($event) => isMobileDrawerMenuOpen.value = false
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_ElRow, { align: "middle" }, {
                        default: withCtx(() => [
                          createVNode(_component_ElIcon, {
                            size: 18,
                            class: "mr-8"
                          }, {
                            default: withCtx(() => [
                              createVNode(unref(close_bold_default))
                            ]),
                            _: 1
                          }),
                          createTextVNode(" Zatvori ")
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }, 8, ["onClick"])
                ]),
                _: 1
              }),
              createVNode(_component_ElRow, {
                justify: "center",
                align: "middle",
                class: "w-100 color-zinc text-align-center mt-16"
              }, {
                default: withCtx(() => [
                  createVNode(_component_NuxtLink, {
                    to: "/kontakt",
                    class: "icon-link mr-4",
                    onClick: ($event) => isPortalDrawerMenuOpen.value = false
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_ElIcon, { size: 32 }, {
                        default: withCtx(() => [
                          createVNode(MessageIcon)
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }, 8, ["onClick"]),
                  createVNode(_component_ElPopover, {
                    placement: "top",
                    trigger: "click",
                    width: "300"
                  }, {
                    reference: withCtx(() => [
                      createVNode(_component_ElIcon, {
                        size: 32,
                        class: "icon-link cursor-pointer mb-4"
                      }, {
                        default: withCtx(() => [
                          createVNode(FacebookIcon)
                        ]),
                        _: 1
                      })
                    ]),
                    default: withCtx(() => [
                      createVNode(_component_ElRow, { justify: "center" }, {
                        default: withCtx(() => [
                          createVNode("p", { style: { "font-size": "larger" } }, "Facebook grupe")
                        ]),
                        _: 1
                      }),
                      (openBlock(true), createBlock(Fragment, null, renderList(unref(facebookLinks), (item) => {
                        return openBlock(), createBlock("div", { class: "mb-4" }, [
                          createTextVNode(" - "),
                          createVNode(_component_NuxtLink, {
                            to: item.url,
                            target: "_blank"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(item.name), 1)
                            ]),
                            _: 2
                          }, 1032, ["to"])
                        ]);
                      }), 256))
                    ]),
                    _: 1
                  }),
                  createVNode(_component_NuxtLink, {
                    to: "https://www.instagram.com/promotim_augsburg/?utm_source=qr&igsh=MXNrenN6aDNlNGI3eQ%3D%3D#",
                    class: "icon-link ml-4",
                    target: "_blank"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_ElIcon, { size: 32 }, {
                        default: withCtx(() => [
                          createVNode(InstagramIcon)
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(_component_NuxtLink, {
                    to: "https://www.tiktok.com/@gastarbajteri_augsburg?_t=ZN-8vwIsWxNLok&_r=1",
                    class: "icon-link ml-8",
                    target: "_blank"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_ElIcon, { size: 32 }, {
                        default: withCtx(() => [
                          createVNode(TikTokIcon)
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_ElDrawer, {
        modelValue: unref(isPortalDrawerMenuOpen),
        "onUpdate:modelValue": ($event) => isRef(isPortalDrawerMenuOpen) ? isPortalDrawerMenuOpen.value = $event : null,
        direction: "ltr",
        size: "500px"
      }, {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_ElRow, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<h3 class="color-primary" data-v-05c49246${_scopeId2}>Portal izbornik</h3>`);
                } else {
                  return [
                    createVNode("h3", { class: "color-primary" }, "Portal izbornik")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_ElRow, null, {
                default: withCtx(() => [
                  createVNode("h3", { class: "color-primary" }, "Portal izbornik")
                ]),
                _: 1
              })
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (unref(categoriesLoading)) {
              _push2(`<div${ssrRenderAttrs(_temp1 = mergeProps({
                "element-loading-text": "Učitavanje kategorija...",
                style: { "height": "100%" }
              }, ssrGetDirectiveProps(_ctx, _directive_loading, true)))} data-v-05c49246${_scopeId}>${"textContent" in _temp1 ? ssrInterpolate(_temp1.textContent) : _temp1.innerHTML ?? ""}</div>`);
            } else {
              _push2(`<div class="drawer-container" data-v-05c49246${_scopeId}><!--[-->`);
              ssrRenderList(unref(portalCategories), (category) => {
                _push2(ssrRenderComponent(HeaderPortalDrawerItem, {
                  key: category.name,
                  category,
                  "tree-deep": 0,
                  onCloseMenu: ($event) => isPortalDrawerMenuOpen.value = false
                }, null, _parent2, _scopeId));
              });
              _push2(`<!--]--></div>`);
            }
          } else {
            return [
              unref(categoriesLoading) ? withDirectives((openBlock(), createBlock("div", {
                key: 0,
                "element-loading-text": "Učitavanje kategorija...",
                style: { "height": "100%" }
              }, null, 512)), [
                [_directive_loading, true]
              ]) : (openBlock(), createBlock("div", {
                key: 1,
                class: "drawer-container"
              }, [
                (openBlock(true), createBlock(Fragment, null, renderList(unref(portalCategories), (category) => {
                  return openBlock(), createBlock(HeaderPortalDrawerItem, {
                    key: category.name,
                    category,
                    "tree-deep": 0,
                    onCloseMenu: ($event) => isPortalDrawerMenuOpen.value = false
                  }, null, 8, ["category", "onCloseMenu"]);
                }), 128))
              ]))
            ];
          }
        }),
        footer: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_ElRow, {
              justify: "center",
              align: "middle",
              class: "w-100 color-zinc text-align-center mt-16"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_NuxtLink, {
                    to: "/kontakt",
                    class: "icon-link mr-4",
                    onClick: ($event) => isPortalDrawerMenuOpen.value = false
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_ElIcon, { size: 32 }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(MessageIcon, null, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(MessageIcon)
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_ElIcon, { size: 32 }, {
                            default: withCtx(() => [
                              createVNode(MessageIcon)
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_ElPopover, {
                    placement: "top",
                    trigger: "click",
                    width: "300"
                  }, {
                    reference: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_ElIcon, {
                          size: 32,
                          class: "icon-link cursor-pointer mb-4"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(FacebookIcon, null, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(FacebookIcon)
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_ElIcon, {
                            size: 32,
                            class: "icon-link cursor-pointer mb-4"
                          }, {
                            default: withCtx(() => [
                              createVNode(FacebookIcon)
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_ElRow, { justify: "center" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<p style="${ssrRenderStyle({ "font-size": "larger" })}" data-v-05c49246${_scopeId4}>Facebook grupe</p>`);
                            } else {
                              return [
                                createVNode("p", { style: { "font-size": "larger" } }, "Facebook grupe")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(`<!--[-->`);
                        ssrRenderList(unref(facebookLinks), (item) => {
                          _push4(`<div class="mb-4" data-v-05c49246${_scopeId3}> - `);
                          _push4(ssrRenderComponent(_component_NuxtLink, {
                            to: item.url,
                            target: "_blank"
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`${ssrInterpolate(item.name)}`);
                              } else {
                                return [
                                  createTextVNode(toDisplayString(item.name), 1)
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                          _push4(`</div>`);
                        });
                        _push4(`<!--]-->`);
                      } else {
                        return [
                          createVNode(_component_ElRow, { justify: "center" }, {
                            default: withCtx(() => [
                              createVNode("p", { style: { "font-size": "larger" } }, "Facebook grupe")
                            ]),
                            _: 1
                          }),
                          (openBlock(true), createBlock(Fragment, null, renderList(unref(facebookLinks), (item) => {
                            return openBlock(), createBlock("div", { class: "mb-4" }, [
                              createTextVNode(" - "),
                              createVNode(_component_NuxtLink, {
                                to: item.url,
                                target: "_blank"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(item.name), 1)
                                ]),
                                _: 2
                              }, 1032, ["to"])
                            ]);
                          }), 256))
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_NuxtLink, {
                    to: "https://www.instagram.com/promotim_augsburg/?utm_source=qr&igsh=MXNrenN6aDNlNGI3eQ%3D%3D#",
                    class: "icon-link ml-4",
                    target: "_blank"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_ElIcon, { size: 32 }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(InstagramIcon, null, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(InstagramIcon)
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_ElIcon, { size: 32 }, {
                            default: withCtx(() => [
                              createVNode(InstagramIcon)
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_NuxtLink, {
                    to: "https://www.tiktok.com/@gastarbajteri_augsburg?_t=ZN-8vwIsWxNLok&_r=1",
                    class: "icon-link ml-8",
                    target: "_blank"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_ElIcon, { size: 32 }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(TikTokIcon, null, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(TikTokIcon)
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_ElIcon, { size: 32 }, {
                            default: withCtx(() => [
                              createVNode(TikTokIcon)
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_NuxtLink, {
                      to: "/kontakt",
                      class: "icon-link mr-4",
                      onClick: ($event) => isPortalDrawerMenuOpen.value = false
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_ElIcon, { size: 32 }, {
                          default: withCtx(() => [
                            createVNode(MessageIcon)
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }, 8, ["onClick"]),
                    createVNode(_component_ElPopover, {
                      placement: "top",
                      trigger: "click",
                      width: "300"
                    }, {
                      reference: withCtx(() => [
                        createVNode(_component_ElIcon, {
                          size: 32,
                          class: "icon-link cursor-pointer mb-4"
                        }, {
                          default: withCtx(() => [
                            createVNode(FacebookIcon)
                          ]),
                          _: 1
                        })
                      ]),
                      default: withCtx(() => [
                        createVNode(_component_ElRow, { justify: "center" }, {
                          default: withCtx(() => [
                            createVNode("p", { style: { "font-size": "larger" } }, "Facebook grupe")
                          ]),
                          _: 1
                        }),
                        (openBlock(true), createBlock(Fragment, null, renderList(unref(facebookLinks), (item) => {
                          return openBlock(), createBlock("div", { class: "mb-4" }, [
                            createTextVNode(" - "),
                            createVNode(_component_NuxtLink, {
                              to: item.url,
                              target: "_blank"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(item.name), 1)
                              ]),
                              _: 2
                            }, 1032, ["to"])
                          ]);
                        }), 256))
                      ]),
                      _: 1
                    }),
                    createVNode(_component_NuxtLink, {
                      to: "https://www.instagram.com/promotim_augsburg/?utm_source=qr&igsh=MXNrenN6aDNlNGI3eQ%3D%3D#",
                      class: "icon-link ml-4",
                      target: "_blank"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_ElIcon, { size: 32 }, {
                          default: withCtx(() => [
                            createVNode(InstagramIcon)
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(_component_NuxtLink, {
                      to: "https://www.tiktok.com/@gastarbajteri_augsburg?_t=ZN-8vwIsWxNLok&_r=1",
                      class: "icon-link ml-8",
                      target: "_blank"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_ElIcon, { size: 32 }, {
                          default: withCtx(() => [
                            createVNode(TikTokIcon)
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_ElRow, {
                justify: "center",
                align: "middle",
                class: "w-100 color-zinc text-align-center mt-16"
              }, {
                default: withCtx(() => [
                  createVNode(_component_NuxtLink, {
                    to: "/kontakt",
                    class: "icon-link mr-4",
                    onClick: ($event) => isPortalDrawerMenuOpen.value = false
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_ElIcon, { size: 32 }, {
                        default: withCtx(() => [
                          createVNode(MessageIcon)
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }, 8, ["onClick"]),
                  createVNode(_component_ElPopover, {
                    placement: "top",
                    trigger: "click",
                    width: "300"
                  }, {
                    reference: withCtx(() => [
                      createVNode(_component_ElIcon, {
                        size: 32,
                        class: "icon-link cursor-pointer mb-4"
                      }, {
                        default: withCtx(() => [
                          createVNode(FacebookIcon)
                        ]),
                        _: 1
                      })
                    ]),
                    default: withCtx(() => [
                      createVNode(_component_ElRow, { justify: "center" }, {
                        default: withCtx(() => [
                          createVNode("p", { style: { "font-size": "larger" } }, "Facebook grupe")
                        ]),
                        _: 1
                      }),
                      (openBlock(true), createBlock(Fragment, null, renderList(unref(facebookLinks), (item) => {
                        return openBlock(), createBlock("div", { class: "mb-4" }, [
                          createTextVNode(" - "),
                          createVNode(_component_NuxtLink, {
                            to: item.url,
                            target: "_blank"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(item.name), 1)
                            ]),
                            _: 2
                          }, 1032, ["to"])
                        ]);
                      }), 256))
                    ]),
                    _: 1
                  }),
                  createVNode(_component_NuxtLink, {
                    to: "https://www.instagram.com/promotim_augsburg/?utm_source=qr&igsh=MXNrenN6aDNlNGI3eQ%3D%3D#",
                    class: "icon-link ml-4",
                    target: "_blank"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_ElIcon, { size: 32 }, {
                        default: withCtx(() => [
                          createVNode(InstagramIcon)
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(_component_NuxtLink, {
                    to: "https://www.tiktok.com/@gastarbajteri_augsburg?_t=ZN-8vwIsWxNLok&_r=1",
                    class: "icon-link ml-8",
                    target: "_blank"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_ElIcon, { size: 32 }, {
                        default: withCtx(() => [
                          createVNode(TikTokIcon)
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/layout/Header.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const Header = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["__scopeId", "data-v-05c49246"]]);
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "FooterMenuCard",
  __ssrInlineRender: true,
  props: ["categories", "title", "urlPrefix", "loading", "h3Title"],
  setup(__props) {
    const { $viewport } = useNuxtApp();
    const colSpan = computed(() => {
      return $viewport.isLessOrEquals("mobileMedium") ? 24 : $viewport.isLessOrEquals("mobileWide") ? 12 : $viewport.isLessOrEquals("tablet") ? 8 : 4;
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ElCard = ElCard;
      const _component_ElRow = ElRow;
      const _component_ElSkeleton = ElSkeleton;
      const _component_ElCol = ElCol;
      const _component_ElSkeletonItem = ElSkeletonItem;
      const _component_NuxtLink = __nuxt_component_6;
      _push(ssrRenderComponent(_component_ElCard, mergeProps({ class: "mt-24 mb-24" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_ElRow, {
              class: "footer",
              justify: "center",
              align: "middle"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  if (__props.h3Title) {
                    _push3(`<h3 class="color-primary" data-v-dd7106ce${_scopeId2}>${ssrInterpolate(__props.title)}</h3>`);
                  } else {
                    _push3(`<span class="color-primary" data-v-dd7106ce${_scopeId2}>${ssrInterpolate(__props.title)}</span>`);
                  }
                } else {
                  return [
                    __props.h3Title ? (openBlock(), createBlock("h3", {
                      key: 0,
                      class: "color-primary"
                    }, toDisplayString(__props.title), 1)) : (openBlock(), createBlock("span", {
                      key: 1,
                      class: "color-primary"
                    }, toDisplayString(__props.title), 1))
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            if (__props.loading) {
              _push2(ssrRenderComponent(_component_ElSkeleton, { animated: "" }, {
                template: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_ElRow, {
                      justify: "center",
                      align: "middle",
                      class: "row-gap-4 mt-8"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<!--[-->`);
                          ssrRenderList(6, (_4) => {
                            _push4(ssrRenderComponent(_component_ElCol, {
                              span: unref(colSpan),
                              align: "center"
                            }, {
                              default: withCtx((_5, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(ssrRenderComponent(_component_ElSkeletonItem, {
                                    variant: "h3",
                                    style: { "width": "50%" }
                                  }, null, _parent5, _scopeId4));
                                } else {
                                  return [
                                    createVNode(_component_ElSkeletonItem, {
                                      variant: "h3",
                                      style: { "width": "50%" }
                                    })
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent4, _scopeId3));
                          });
                          _push4(`<!--]-->`);
                        } else {
                          return [
                            (openBlock(), createBlock(Fragment, null, renderList(6, (_4) => {
                              return createVNode(_component_ElCol, {
                                span: unref(colSpan),
                                align: "center"
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_ElSkeletonItem, {
                                    variant: "h3",
                                    style: { "width": "50%" }
                                  })
                                ]),
                                _: 1
                              }, 8, ["span"]);
                            }), 64))
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_ElRow, {
                        justify: "center",
                        align: "middle",
                        class: "row-gap-4 mt-8"
                      }, {
                        default: withCtx(() => [
                          (openBlock(), createBlock(Fragment, null, renderList(6, (_3) => {
                            return createVNode(_component_ElCol, {
                              span: unref(colSpan),
                              align: "center"
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_ElSkeletonItem, {
                                  variant: "h3",
                                  style: { "width": "50%" }
                                })
                              ]),
                              _: 1
                            }, 8, ["span"]);
                          }), 64))
                        ]),
                        _: 1
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              _push2(ssrRenderComponent(_component_ElRow, {
                justify: "center",
                align: "middle",
                class: "row-gap-4 mt-8"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<!--[-->`);
                    ssrRenderList(__props.categories, (category) => {
                      _push3(ssrRenderComponent(_component_ElCol, {
                        key: category.id,
                        span: unref(colSpan),
                        align: "center"
                      }, {
                        default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(ssrRenderComponent(_component_NuxtLink, {
                              to: `${__props.urlPrefix ? __props.urlPrefix : "/"}${category.name === "Naslovnica" ? "" : category.name}`,
                              class: "link"
                            }, {
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(`${ssrInterpolate(category.name)}`);
                                } else {
                                  return [
                                    createTextVNode(toDisplayString(category.name), 1)
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent4, _scopeId3));
                          } else {
                            return [
                              createVNode(_component_NuxtLink, {
                                to: `${__props.urlPrefix ? __props.urlPrefix : "/"}${category.name === "Naslovnica" ? "" : category.name}`,
                                class: "link"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(category.name), 1)
                                ]),
                                _: 2
                              }, 1032, ["to"])
                            ];
                          }
                        }),
                        _: 2
                      }, _parent3, _scopeId2));
                    });
                    _push3(`<!--]-->`);
                  } else {
                    return [
                      (openBlock(true), createBlock(Fragment, null, renderList(__props.categories, (category) => {
                        return openBlock(), createBlock(_component_ElCol, {
                          key: category.id,
                          span: unref(colSpan),
                          align: "center"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_NuxtLink, {
                              to: `${__props.urlPrefix ? __props.urlPrefix : "/"}${category.name === "Naslovnica" ? "" : category.name}`,
                              class: "link"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(category.name), 1)
                              ]),
                              _: 2
                            }, 1032, ["to"])
                          ]),
                          _: 2
                        }, 1032, ["span"]);
                      }), 128))
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            }
          } else {
            return [
              createVNode(_component_ElRow, {
                class: "footer",
                justify: "center",
                align: "middle"
              }, {
                default: withCtx(() => [
                  __props.h3Title ? (openBlock(), createBlock("h3", {
                    key: 0,
                    class: "color-primary"
                  }, toDisplayString(__props.title), 1)) : (openBlock(), createBlock("span", {
                    key: 1,
                    class: "color-primary"
                  }, toDisplayString(__props.title), 1))
                ]),
                _: 1
              }),
              __props.loading ? (openBlock(), createBlock(_component_ElSkeleton, {
                key: 0,
                animated: ""
              }, {
                template: withCtx(() => [
                  createVNode(_component_ElRow, {
                    justify: "center",
                    align: "middle",
                    class: "row-gap-4 mt-8"
                  }, {
                    default: withCtx(() => [
                      (openBlock(), createBlock(Fragment, null, renderList(6, (_2) => {
                        return createVNode(_component_ElCol, {
                          span: unref(colSpan),
                          align: "center"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_ElSkeletonItem, {
                              variant: "h3",
                              style: { "width": "50%" }
                            })
                          ]),
                          _: 1
                        }, 8, ["span"]);
                      }), 64))
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })) : (openBlock(), createBlock(_component_ElRow, {
                key: 1,
                justify: "center",
                align: "middle",
                class: "row-gap-4 mt-8"
              }, {
                default: withCtx(() => [
                  (openBlock(true), createBlock(Fragment, null, renderList(__props.categories, (category) => {
                    return openBlock(), createBlock(_component_ElCol, {
                      key: category.id,
                      span: unref(colSpan),
                      align: "center"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_NuxtLink, {
                          to: `${__props.urlPrefix ? __props.urlPrefix : "/"}${category.name === "Naslovnica" ? "" : category.name}`,
                          class: "link"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(category.name), 1)
                          ]),
                          _: 2
                        }, 1032, ["to"])
                      ]),
                      _: 2
                    }, 1032, ["span"]);
                  }), 128))
                ]),
                _: 1
              }))
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/layout/FooterMenuCard.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const FooterMenuCard = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__scopeId", "data-v-dd7106ce"]]);
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "Footer",
  __ssrInlineRender: true,
  props: ["dividerMarginTop"],
  setup(__props) {
    const categoriesStore = useCategoriesStore();
    const { categoriesLoading, portalCategories } = storeToRefs(categoriesStore);
    const facebookLinks = getFacebookLinks();
    const mainCategories = ref([
      { id: 1, name: "Naslovnica" },
      { id: 2, name: "Portal" },
      { id: 3, name: "Poslovi" },
      { id: 4, name: "Webshop" },
      { id: 5, name: "Kontakt" },
      { id: 6, name: "Reklamiranje" }
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ElDivider = ElDivider;
      const _component_ElRow = ElRow;
      const _component_NuxtLink = __nuxt_component_6;
      const _component_ElIcon = ElIcon;
      const _component_ElPopover = ElPopover;
      _push(`<!--[--><div class="footer-top" data-v-40682579>`);
      _push(ssrRenderComponent(_component_ElDivider, {
        class: "divider",
        style: `margin-top: ${__props.dividerMarginTop ? `${__props.dividerMarginTop}px` : "4px"} !important`
      }, null, _parent));
      _push(ssrRenderComponent(FooterMenuCard, {
        categories: unref(mainCategories),
        title: "Glavni izbornik"
      }, null, _parent));
      _push(ssrRenderComponent(FooterMenuCard, {
        categories: unref(portalCategories),
        title: "Portal",
        urlPrefix: "/portal/",
        loading: unref(categoriesLoading)
      }, null, _parent));
      _push(ssrRenderComponent(_component_ElRow, {
        justify: "center",
        align: "middle",
        class: "w-100 color-zinc text-align-center"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_NuxtLink, {
              to: "/kontakt",
              class: "icon-link mr-4"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_ElIcon, { size: 44.45 }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(MessageIcon, null, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(MessageIcon)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_ElIcon, { size: 44.45 }, {
                      default: withCtx(() => [
                        createVNode(MessageIcon)
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_ElPopover, {
              placement: "top",
              trigger: "click",
              width: "300"
            }, {
              reference: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_ElIcon, {
                    size: 40,
                    class: "icon-link cursor-pointer mb-4"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(FacebookIcon, null, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(FacebookIcon)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_ElIcon, {
                      size: 40,
                      class: "icon-link cursor-pointer mb-4"
                    }, {
                      default: withCtx(() => [
                        createVNode(FacebookIcon)
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_ElRow, { justify: "center" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<p style="${ssrRenderStyle({ "font-size": "larger" })}" data-v-40682579${_scopeId3}>Facebook grupe</p>`);
                      } else {
                        return [
                          createVNode("p", { style: { "font-size": "larger" } }, "Facebook grupe")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`<!--[-->`);
                  ssrRenderList(unref(facebookLinks), (item) => {
                    _push3(`<div class="mb-4" data-v-40682579${_scopeId2}> - `);
                    _push3(ssrRenderComponent(_component_NuxtLink, {
                      to: item.url,
                      target: "_blank"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`${ssrInterpolate(item.name)}`);
                        } else {
                          return [
                            createTextVNode(toDisplayString(item.name), 1)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                    _push3(`</div>`);
                  });
                  _push3(`<!--]-->`);
                } else {
                  return [
                    createVNode(_component_ElRow, { justify: "center" }, {
                      default: withCtx(() => [
                        createVNode("p", { style: { "font-size": "larger" } }, "Facebook grupe")
                      ]),
                      _: 1
                    }),
                    (openBlock(true), createBlock(Fragment, null, renderList(unref(facebookLinks), (item) => {
                      return openBlock(), createBlock("div", { class: "mb-4" }, [
                        createTextVNode(" - "),
                        createVNode(_component_NuxtLink, {
                          to: item.url,
                          target: "_blank"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(item.name), 1)
                          ]),
                          _: 2
                        }, 1032, ["to"])
                      ]);
                    }), 256))
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_NuxtLink, {
              to: "https://www.instagram.com/promotim_augsburg/?utm_source=qr&igsh=MXNrenN6aDNlNGI3eQ%3D%3D#",
              class: "icon-link ml-4",
              target: "_blank"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_ElIcon, { size: 40 }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(InstagramIcon, null, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(InstagramIcon)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_ElIcon, { size: 40 }, {
                      default: withCtx(() => [
                        createVNode(InstagramIcon)
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_NuxtLink, {
              to: "https://www.tiktok.com/@gastarbajteri_augsburg?_t=ZN-8vwIsWxNLok&_r=1",
              class: "icon-link ml-4",
              target: "_blank"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_ElIcon, { size: 40 }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(TikTokIcon, null, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(TikTokIcon)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_ElIcon, { size: 40 }, {
                      default: withCtx(() => [
                        createVNode(TikTokIcon)
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_NuxtLink, {
                to: "/kontakt",
                class: "icon-link mr-4"
              }, {
                default: withCtx(() => [
                  createVNode(_component_ElIcon, { size: 44.45 }, {
                    default: withCtx(() => [
                      createVNode(MessageIcon)
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(_component_ElPopover, {
                placement: "top",
                trigger: "click",
                width: "300"
              }, {
                reference: withCtx(() => [
                  createVNode(_component_ElIcon, {
                    size: 40,
                    class: "icon-link cursor-pointer mb-4"
                  }, {
                    default: withCtx(() => [
                      createVNode(FacebookIcon)
                    ]),
                    _: 1
                  })
                ]),
                default: withCtx(() => [
                  createVNode(_component_ElRow, { justify: "center" }, {
                    default: withCtx(() => [
                      createVNode("p", { style: { "font-size": "larger" } }, "Facebook grupe")
                    ]),
                    _: 1
                  }),
                  (openBlock(true), createBlock(Fragment, null, renderList(unref(facebookLinks), (item) => {
                    return openBlock(), createBlock("div", { class: "mb-4" }, [
                      createTextVNode(" - "),
                      createVNode(_component_NuxtLink, {
                        to: item.url,
                        target: "_blank"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(item.name), 1)
                        ]),
                        _: 2
                      }, 1032, ["to"])
                    ]);
                  }), 256))
                ]),
                _: 1
              }),
              createVNode(_component_NuxtLink, {
                to: "https://www.instagram.com/promotim_augsburg/?utm_source=qr&igsh=MXNrenN6aDNlNGI3eQ%3D%3D#",
                class: "icon-link ml-4",
                target: "_blank"
              }, {
                default: withCtx(() => [
                  createVNode(_component_ElIcon, { size: 40 }, {
                    default: withCtx(() => [
                      createVNode(InstagramIcon)
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(_component_NuxtLink, {
                to: "https://www.tiktok.com/@gastarbajteri_augsburg?_t=ZN-8vwIsWxNLok&_r=1",
                class: "icon-link ml-4",
                target: "_blank"
              }, {
                default: withCtx(() => [
                  createVNode(_component_ElIcon, { size: 40 }, {
                    default: withCtx(() => [
                      createVNode(TikTokIcon)
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_ElRow, {
        justify: "center",
        align: "middle",
        class: "w-100 color-zinc mt-8 text-align-center"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Sva prava pridržana, Gatstrabajter.de `);
          } else {
            return [
              createTextVNode(" Sva prava pridržana, Gatstrabajter.de ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_ElRow, {
        justify: "center",
        align: "middle",
        class: "w-100 color-zinc mt-8 text-align-center"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_NuxtLink, {
              to: "https://innova-tech.live/",
              class: "link",
              target: "_blank"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Web aplikaciju izradio Innovatech obrt za informatičke usluge `);
                } else {
                  return [
                    createTextVNode(" Web aplikaciju izradio Innovatech obrt za informatičke usluge ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_NuxtLink, {
                to: "https://innova-tech.live/",
                class: "link",
                target: "_blank"
              }, {
                default: withCtx(() => [
                  createTextVNode(" Web aplikaciju izradio Innovatech obrt za informatičke usluge ")
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(_component_ElRow, {
        justify: "center",
        align: "middle",
        class: "w-100 bottom-line mt-8"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Copyright © 2025 Gatstrabajter.de `);
          } else {
            return [
              createTextVNode(" Copyright © 2025 Gatstrabajter.de ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/layout/Footer.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const Footer = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-40682579"]]);
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "ComsFooter",
  __ssrInlineRender: true,
  setup(__props) {
    const comStore = useComStore();
    const { comsLoading, comSettings, footerSlider, footerLarge } = storeToRefs(comStore);
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b;
      const _component_ClientOnly = __nuxt_component_0;
      if (unref(comSettings) && (((_a = unref(comSettings)[1]) == null ? void 0 : _a.show) || ((_b = unref(comSettings)[2]) == null ? void 0 : _b.show))) {
        _push(ssrRenderComponent(_component_ClientOnly, _attrs, {}, _parent));
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/shared/ComsFooter.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const ComsFooter = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-d336a6ef"]]);
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "error",
  __ssrInlineRender: true,
  setup(__props) {
    var _a;
    const route = useRoute$1();
    const errorCode = ((_a = route.params) == null ? void 0 : _a.code) || 404;
    ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ElRow = ElRow;
      const _component_ElCol = ElCol;
      const _component_ElEmpty = ElEmpty;
      const _component_NuxtLink = __nuxt_component_6;
      const _component_ElButton = ElButton;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(Header, null, null, _parent));
      _push(`<div class="main" data-v-2700498b>`);
      _push(ssrRenderComponent(_component_ElRow, {
        justify: "center",
        align: "middle",
        class: "mb-16"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_ElCol, { align: "center" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<h1 data-v-2700498b${_scopeId2}>Ups! Stranica nije dostupna ili nešto nije u redu s njom.</h1>`);
                } else {
                  return [
                    createVNode("h1", null, "Ups! Stranica nije dostupna ili nešto nije u redu s njom.")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_ElEmpty, null, {
              description: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<p class="error-code" data-v-2700498b${_scopeId2}>Ups! Error ${ssrInterpolate(unref(errorCode))}...</p>`);
                } else {
                  return [
                    createVNode("p", { class: "error-code" }, "Ups! Error " + toDisplayString(unref(errorCode)) + "...", 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_ElCol, { align: "center" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_NuxtLink, { to: "/" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_ElButton, {
                          type: "primary",
                          size: "large",
                          plain: ""
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` Natrag na naslovnicu `);
                            } else {
                              return [
                                createTextVNode(" Natrag na naslovnicu ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_ElButton, {
                            type: "primary",
                            size: "large",
                            plain: ""
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" Natrag na naslovnicu ")
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_NuxtLink, { to: "/" }, {
                      default: withCtx(() => [
                        createVNode(_component_ElButton, {
                          type: "primary",
                          size: "large",
                          plain: ""
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" Natrag na naslovnicu ")
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_ElCol, { align: "center" }, {
                default: withCtx(() => [
                  createVNode("h1", null, "Ups! Stranica nije dostupna ili nešto nije u redu s njom.")
                ]),
                _: 1
              }),
              createVNode(_component_ElEmpty, null, {
                description: withCtx(() => [
                  createVNode("p", { class: "error-code" }, "Ups! Error " + toDisplayString(unref(errorCode)) + "...", 1)
                ]),
                _: 1
              }),
              createVNode(_component_ElCol, { align: "center" }, {
                default: withCtx(() => [
                  createVNode(_component_NuxtLink, { to: "/" }, {
                    default: withCtx(() => [
                      createVNode(_component_ElButton, {
                        type: "primary",
                        size: "large",
                        plain: ""
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" Natrag na naslovnicu ")
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(ComsFooter, null, null, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(Footer, { "divider-margin-top": 24 }, null, _parent));
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("error.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const ErrorComponent = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-2700498b"]]);
const _sfc_main = {
  __name: "nuxt-root",
  __ssrInlineRender: true,
  setup(__props) {
    const IslandRenderer = defineAsyncComponent(() => import('./island-renderer-BLE4hwp4.mjs').then((r) => r.default || r));
    const nuxtApp = useNuxtApp();
    nuxtApp.deferHydration();
    nuxtApp.ssrContext.url;
    const SingleRenderer = false;
    provide(PageRouteSymbol, useRoute());
    nuxtApp.hooks.callHookWith((hooks) => hooks.map((hook) => hook()), "vue:setup");
    const error = useError();
    const abortRender = error.value && !nuxtApp.ssrContext.error;
    onErrorCaptured((err, target, info) => {
      nuxtApp.hooks.callHook("vue:error", err, target, info).catch((hookError) => console.error("[nuxt] Error in `vue:error` hook", hookError));
      {
        const p = nuxtApp.runWithContext(() => showError(err));
        onServerPrefetch(() => p);
        return false;
      }
    });
    const islandContext = nuxtApp.ssrContext.islandContext;
    return (_ctx, _push, _parent, _attrs) => {
      ssrRenderSuspense(_push, {
        default: () => {
          if (unref(abortRender)) {
            _push(`<div></div>`);
          } else if (unref(error)) {
            _push(ssrRenderComponent(unref(ErrorComponent), { error: unref(error) }, null, _parent));
          } else if (unref(islandContext)) {
            _push(ssrRenderComponent(unref(IslandRenderer), { context: unref(islandContext) }, null, _parent));
          } else if (unref(SingleRenderer)) {
            ssrRenderVNode(_push, createVNode(resolveDynamicComponent(unref(SingleRenderer)), null, null), _parent);
          } else {
            _push(ssrRenderComponent(unref(_sfc_main$d), null, null, _parent));
          }
        },
        _: 1
      });
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/nuxt/dist/app/components/nuxt-root.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
let entry;
{
  entry = async function createNuxtAppServer(ssrContext) {
    var _a;
    const vueApp = createApp(_sfc_main);
    const nuxt = createNuxtApp({ vueApp, ssrContext });
    try {
      await applyPlugins(nuxt, plugins);
      await nuxt.hooks.callHook("app:created", vueApp);
    } catch (error) {
      await nuxt.hooks.callHook("app:error", error);
      (_a = nuxt.payload).error || (_a.error = createError(error));
    }
    if (ssrContext == null ? void 0 : ssrContext._renderResponse) {
      throw new Error("skipping render");
    }
    return vueApp;
  };
}
const entry$1 = (ssrContext) => entry(ssrContext);

export { formItemContextKey as $, useResizeObserver as A, useDocumentVisibility as B, useWindowFocus as C, arrow_left_default as D, ElEmpty as E, arrow_right_default as F, close_default as G, EVENT_CODE as H, isNumber as I, plus_default as J, isUndefined as K, computedEager as L, MegafoneIcon as M, withInstall as N, withNoopInstall as O, location_default as P, price_tag_default as Q, ElInput as R, ElButton as S, ElNotification as T, UPDATE_MODEL_EVENT as U, isBoolean as V, componentSizes as W, debugWarn as X, useFormSize as Y, formContextKey as Z, _export_sfc as _, useComStore as a, ValidateComponentsMap as a$, useId as a0, refDebounced as a1, addUnit as a2, getProp as a3, useAriaProps as a4, useSizeProp as a5, useFormDisabled as a6, useFormItem as a7, CHANGE_EVENT as a8, isPropAbsent as a9, hasClass as aA, removeClass as aB, isElement as aC, addClass as aD, document_default as aE, zoom_in_default as aF, delete_default as aG, entriesOf as aH, useVModel as aI, circle_plus_filled_default as aJ, search_default as aK, vLoading as aL, edit_default as aM, delete_filled_default as aN, refresh_left_default as aO, BaseStyle as aP, useRuntimeConfig as aQ, gold_medal_default as aR, download_default as aS, info_filled_default as aT, useUserStore as aU, switch_button_default as aV, useCookie as aW, useEventListener as aX, useComposition as aY, useFocusController as aZ, useEmptyValues as a_, useFormItemInputId as aa, useDeprecated as ab, getNormalizedProps as ac, dialogContentEmits as ad, dialogContentProps as ae, useLocale as af, FOCUS_TRAP_INJECTION_KEY as ag, CloseComponents as ah, dialogEmits as ai, dialogProps as aj, useDialog as ak, ElTeleport as al, ElOverlay as am, useSameTarget as an, ElFocusTrap as ao, warning_filled_default as ap, circle_check_default as aq, circle_close_default as ar, check_default as as, INPUT_EVENT as at, iconPropType as au, loading_default as av, ElTooltip as aw, useTooltipContentProps as ax, arrow_up_default as ay, arrow_down_default as az, ElRow as b, useEmptyValuesProps as b0, useMutationObserver as b1, d_arrow_left_default as b2, d_arrow_right_default as b3, minus_default as b4, useCategoriesStore as b5, FooterMenuCard as b6, useRoute as b7, asyncDataDefaults as b8, FacebookIcon as b9, copy_document_default as ba, shopping_cart_default as bb, close_bold_default as bc, arrow_left_bold_default as bd, arrow_right_bold_default as be, circle_close_filled_default as bf, success_filled_default as bg, ElMain as bh, Header as bi, ComsFooter as bj, Footer as bk, createError as c, ElCol as d, entry$1 as default, ElIcon as e, shop_default as f, ElSkeleton as g, ElSkeletonItem as h, injectHead as i, ElDivider as j, ElCard as k, useHead as l, useSeoMeta as m, navigateTo as n, office_building_default as o, __nuxt_component_6 as p, clock_default as q, flattedChildren as r, storeToRefs as s, buildProps as t, useNuxtApp as u, mutable as v, definePropType as w, _export_sfc$1 as x, throwError as y, useNamespace as z };
//# sourceMappingURL=server.mjs.map
