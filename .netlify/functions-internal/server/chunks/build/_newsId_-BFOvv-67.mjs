import { defineComponent, watchEffect, mergeProps, unref, computed, toValue, getCurrentInstance, onServerPrefetch, ref, shallowRef, toRef, withCtx, createVNode, createBlock, openBlock, Fragment, renderList, toDisplayString, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderAttrs, ssrRenderStyle, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import { bc as useRoute, v as useHead, _ as _export_sfc, u as useNuxtApp, bi as asyncDataDefaults, aV as useRuntimeConfig, c as createError, g as ElSkeleton, b as ElRow, h as ElSkeletonItem, d as ElCol, E as ElEmpty } from './server.mjs';
import { f as formatISOToDatetime } from './formatDate-BE2FzR0K.mjs';
import { G as Gallery } from './Gallery-BxfMQDUy.mjs';
import { _ as _sfc_main$2 } from './FacebookShareButton-Ctlw5bf6.mjs';
import { debounce } from 'perfect-debounce';
import '../nitro/nitro.mjs';
import '@prisma/client';
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
import '@primeuix/styled';
import 'jsonwebtoken';
import 'consola';
import 'unhead/server';
import 'unhead/plugins';
import 'unhead/utils';
import 'vue-bundle-renderer/runtime';
import 'vue-router';
import '@primeuix/utils';
import '@primeuix/utils/object';
import '@primeuix/styles/base';
import '@primeuix/utils/dom';
import '@primeuix/utils/eventbus';
import 'framesync';
import 'popmotion';
import 'style-value-types';
import '@vue/shared';
import 'lodash-unified';
import 'axios';
import '@ctrl/tinycolor';
import '@popperjs/core';

const isDefer = (dedupe) => dedupe === "defer" || dedupe === false;
function useAsyncData(...args) {
  var _a2, _b, _c, _d, _e, _f, _g;
  var _a;
  const autoKey = typeof args[args.length - 1] === "string" ? args.pop() : void 0;
  if (typeof args[0] !== "string" && typeof args[0] !== "object" && !(typeof args[0] === "function" && typeof args[1] === "function")) {
    args.unshift(autoKey);
  }
  let [_key, _handler, options = {}] = args;
  const key = computed(() => toValue(_key));
  if (typeof key.value !== "string") {
    throw new TypeError("[nuxt] [useAsyncData] key must be a string.");
  }
  if (typeof _handler !== "function") {
    throw new TypeError("[nuxt] [useAsyncData] handler must be a function.");
  }
  const nuxtApp = useNuxtApp();
  (_a2 = options.server) != null ? _a2 : options.server = true;
  (_b = options.default) != null ? _b : options.default = getDefault;
  (_c = options.getCachedData) != null ? _c : options.getCachedData = getDefaultCachedData;
  (_d = options.lazy) != null ? _d : options.lazy = false;
  (_e = options.immediate) != null ? _e : options.immediate = true;
  (_f = options.deep) != null ? _f : options.deep = asyncDataDefaults.deep;
  (_g = options.dedupe) != null ? _g : options.dedupe = "cancel";
  options._functionName || "useAsyncData";
  nuxtApp._asyncData[key.value];
  const initialCachedData = options.getCachedData(key.value, nuxtApp, { cause: "initial" });
  if (!((_a = nuxtApp._asyncData[key.value]) == null ? void 0 : _a._init)) {
    nuxtApp._asyncData[key.value] = createAsyncData(nuxtApp, key.value, _handler, options, initialCachedData);
  }
  const asyncData = nuxtApp._asyncData[key.value];
  asyncData._deps++;
  const initialFetch = () => nuxtApp._asyncData[key.value].execute({ cause: "initial", dedupe: options.dedupe });
  const fetchOnServer = options.server !== false && nuxtApp.payload.serverRendered;
  if (fetchOnServer && options.immediate) {
    const promise = initialFetch();
    if (getCurrentInstance()) {
      onServerPrefetch(() => promise);
    } else {
      nuxtApp.hook("app:created", async () => {
        await promise;
      });
    }
  }
  const asyncReturn = {
    data: writableComputedRef(() => {
      var _a22;
      return (_a22 = nuxtApp._asyncData[key.value]) == null ? void 0 : _a22.data;
    }),
    pending: writableComputedRef(() => {
      var _a22;
      return (_a22 = nuxtApp._asyncData[key.value]) == null ? void 0 : _a22.pending;
    }),
    status: writableComputedRef(() => {
      var _a22;
      return (_a22 = nuxtApp._asyncData[key.value]) == null ? void 0 : _a22.status;
    }),
    error: writableComputedRef(() => {
      var _a22;
      return (_a22 = nuxtApp._asyncData[key.value]) == null ? void 0 : _a22.error;
    }),
    refresh: (...args2) => nuxtApp._asyncData[key.value].execute(...args2),
    execute: (...args2) => nuxtApp._asyncData[key.value].execute(...args2),
    clear: () => clearNuxtDataByKey(nuxtApp, key.value)
  };
  const asyncDataPromise = Promise.resolve(nuxtApp._asyncDataPromises[key.value]).then(() => asyncReturn);
  Object.assign(asyncDataPromise, asyncReturn);
  return asyncDataPromise;
}
function writableComputedRef(getter) {
  return computed({
    get() {
      var _a;
      return (_a = getter()) == null ? void 0 : _a.value;
    },
    set(value) {
      const ref2 = getter();
      if (ref2) {
        ref2.value = value;
      }
    }
  });
}
function clearNuxtDataByKey(nuxtApp, key) {
  if (key in nuxtApp.payload.data) {
    nuxtApp.payload.data[key] = void 0;
  }
  if (key in nuxtApp.payload._errors) {
    nuxtApp.payload._errors[key] = asyncDataDefaults.errorValue;
  }
  if (nuxtApp._asyncData[key]) {
    nuxtApp._asyncData[key].data.value = void 0;
    nuxtApp._asyncData[key].error.value = asyncDataDefaults.errorValue;
    {
      nuxtApp._asyncData[key].pending.value = false;
    }
    nuxtApp._asyncData[key].status.value = "idle";
  }
  if (key in nuxtApp._asyncDataPromises) {
    if (nuxtApp._asyncDataPromises[key]) {
      nuxtApp._asyncDataPromises[key].cancelled = true;
    }
    nuxtApp._asyncDataPromises[key] = void 0;
  }
}
function pick(obj, keys) {
  const newObj = {};
  for (const key of keys) {
    newObj[key] = obj[key];
  }
  return newObj;
}
function createAsyncData(nuxtApp, key, _handler, options, initialCachedData) {
  var _a2;
  var _a;
  (_a2 = (_a = nuxtApp.payload._errors)[key]) != null ? _a2 : _a[key] = asyncDataDefaults.errorValue;
  const hasCustomGetCachedData = options.getCachedData !== getDefaultCachedData;
  const handler = _handler ;
  const _ref = options.deep ? ref : shallowRef;
  const hasCachedData = initialCachedData != null;
  const unsubRefreshAsyncData = nuxtApp.hook("app:data:refresh", async (keys) => {
    if (!keys || keys.includes(key)) {
      await asyncData.execute({ cause: "refresh:hook" });
    }
  });
  const asyncData = {
    data: _ref(hasCachedData ? initialCachedData : options.default()),
    pending: shallowRef(!hasCachedData),
    error: toRef(nuxtApp.payload._errors, key),
    status: shallowRef("idle"),
    execute: (opts = {}) => {
      var _a3, _b2;
      if (nuxtApp._asyncDataPromises[key]) {
        if (isDefer((_a3 = opts.dedupe) != null ? _a3 : options.dedupe)) {
          return nuxtApp._asyncDataPromises[key];
        }
        nuxtApp._asyncDataPromises[key].cancelled = true;
      }
      if (opts.cause === "initial" || nuxtApp.isHydrating) {
        const cachedData = opts.cause === "initial" ? initialCachedData : options.getCachedData(key, nuxtApp, { cause: (_b2 = opts.cause) != null ? _b2 : "refresh:manual" });
        if (cachedData != null) {
          nuxtApp.payload.data[key] = asyncData.data.value = cachedData;
          asyncData.error.value = asyncDataDefaults.errorValue;
          asyncData.status.value = "success";
          return Promise.resolve(cachedData);
        }
      }
      {
        asyncData.pending.value = true;
      }
      asyncData.status.value = "pending";
      const promise = new Promise(
        (resolve, reject) => {
          try {
            resolve(handler(nuxtApp));
          } catch (err) {
            reject(err);
          }
        }
      ).then(async (_result) => {
        if (promise.cancelled) {
          return nuxtApp._asyncDataPromises[key];
        }
        let result = _result;
        if (options.transform) {
          result = await options.transform(_result);
        }
        if (options.pick) {
          result = pick(result, options.pick);
        }
        nuxtApp.payload.data[key] = result;
        asyncData.data.value = result;
        asyncData.error.value = asyncDataDefaults.errorValue;
        asyncData.status.value = "success";
      }).catch((error) => {
        if (promise.cancelled) {
          return nuxtApp._asyncDataPromises[key];
        }
        asyncData.error.value = createError(error);
        asyncData.data.value = unref(options.default());
        asyncData.status.value = "error";
      }).finally(() => {
        if (promise.cancelled) {
          return;
        }
        {
          asyncData.pending.value = false;
        }
        delete nuxtApp._asyncDataPromises[key];
      });
      nuxtApp._asyncDataPromises[key] = promise;
      return nuxtApp._asyncDataPromises[key];
    },
    _execute: debounce((...args) => asyncData.execute(...args), 0, { leading: true }),
    _default: options.default,
    _deps: 0,
    _init: true,
    _hash: void 0,
    _off: () => {
      unsubRefreshAsyncData();
      asyncData._init = false;
      if (!hasCustomGetCachedData) {
        clearNuxtDataByKey(nuxtApp, key);
        asyncData.execute = () => Promise.resolve();
        asyncData.data.value = asyncDataDefaults.value;
      }
    }
  };
  return asyncData;
}
const getDefault = () => asyncDataDefaults.value;
const getDefaultCachedData = (key, nuxtApp, ctx) => {
  if (nuxtApp.isHydrating) {
    return nuxtApp.payload.data[key];
  }
  if (ctx.cause !== "refresh:manual" && ctx.cause !== "refresh:hook") {
    return nuxtApp.static.data[key];
  }
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "PortalNewsPage",
  __ssrInlineRender: true,
  props: {
    news: {},
    isLoading: { type: Boolean }
  },
  setup(__props) {
    const props = __props;
    const { $viewport } = useNuxtApp();
    const parsedHtml = computed(
      () => {
        var _a;
        return ((_a = props.news) == null ? void 0 : _a.text) ? props.news.text.replace(/&nbsp;/g, " ") : "";
      }
    );
    return (_ctx, _push, _parent, _attrs) => {
      var _a2, _b2, _c;
      var _a, _b;
      const _component_ElSkeleton = ElSkeleton;
      const _component_ElRow = ElRow;
      const _component_ElSkeletonItem = ElSkeletonItem;
      const _component_ElCol = ElCol;
      const _component_ElEmpty = ElEmpty;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "page-container" }, _attrs))} data-v-8eecc824>`);
      if (_ctx.isLoading) {
        _push(ssrRenderComponent(_component_ElSkeleton, { animated: "" }, {
          template: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_ElRow, { justify: "center" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<h3 style="${ssrRenderStyle({ "width": "50%" })}" data-v-8eecc824${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_ElSkeletonItem, { variant: "h3" }, null, _parent3, _scopeId2));
                    _push3(`</h3>`);
                  } else {
                    return [
                      createVNode("h3", { style: { "width": "50%" } }, [
                        createVNode(_component_ElSkeletonItem, { variant: "h3" })
                      ])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_ElRow, { justify: "center" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_ElSkeletonItem, {
                      variant: "image",
                      style: { "height": "calc(60dvh + 2rem)", "width": "100%", "border-radius": "8px" }
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_ElSkeletonItem, {
                        variant: "image",
                        style: { "height": "calc(60dvh + 2rem)", "width": "100%", "border-radius": "8px" }
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_ElRow, {
                justify: "space-between",
                align: "middle",
                class: "mb-24"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_ElCol, {
                      span: unref($viewport).isLessOrEquals("mobileWide") ? 24 : 12
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_ElSkeletonItem, {
                            variant: "text",
                            style: { "width": "50%" }
                          }, null, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(_component_ElSkeletonItem, {
                              variant: "text",
                              style: { "width": "50%" }
                            })
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(_component_ElCol, {
                      span: unref($viewport).isLessOrEquals("mobileWide") ? 24 : 12,
                      align: unref($viewport).isLessOrEquals("mobileWide") ? "start" : "end"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_ElSkeletonItem, {
                            variant: "text",
                            style: { "width": "100%" }
                          }, null, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(_component_ElSkeletonItem, {
                              variant: "text",
                              style: { "width": "100%" }
                            })
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_ElCol, {
                        span: unref($viewport).isLessOrEquals("mobileWide") ? 24 : 12
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_ElSkeletonItem, {
                            variant: "text",
                            style: { "width": "50%" }
                          })
                        ]),
                        _: 1
                      }, 8, ["span"]),
                      createVNode(_component_ElCol, {
                        span: unref($viewport).isLessOrEquals("mobileWide") ? 24 : 12,
                        align: unref($viewport).isLessOrEquals("mobileWide") ? "start" : "end"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_ElSkeletonItem, {
                            variant: "text",
                            style: { "width": "100%" }
                          })
                        ]),
                        _: 1
                      }, 8, ["span", "align"])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`<!--[-->`);
              ssrRenderList(2, (_2) => {
                _push2(ssrRenderComponent(_component_ElRow, { class: "mb-24" }, {
                  default: withCtx((_3, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`<!--[-->`);
                      ssrRenderList(10, (_4) => {
                        _push3(ssrRenderComponent(_component_ElSkeletonItem, {
                          variant: "text",
                          style: { "width": "100%", "margin-bottom": "12px" }
                        }, null, _parent3, _scopeId2));
                      });
                      _push3(`<!--]-->`);
                    } else {
                      return [
                        (openBlock(), createBlock(Fragment, null, renderList(10, (_4) => {
                          return createVNode(_component_ElSkeletonItem, {
                            variant: "text",
                            style: { "width": "100%", "margin-bottom": "12px" }
                          });
                        }), 64))
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
              });
              _push2(`<!--]-->`);
            } else {
              return [
                createVNode(_component_ElRow, { justify: "center" }, {
                  default: withCtx(() => [
                    createVNode("h3", { style: { "width": "50%" } }, [
                      createVNode(_component_ElSkeletonItem, { variant: "h3" })
                    ])
                  ]),
                  _: 1
                }),
                createVNode(_component_ElRow, { justify: "center" }, {
                  default: withCtx(() => [
                    createVNode(_component_ElSkeletonItem, {
                      variant: "image",
                      style: { "height": "calc(60dvh + 2rem)", "width": "100%", "border-radius": "8px" }
                    })
                  ]),
                  _: 1
                }),
                createVNode(_component_ElRow, {
                  justify: "space-between",
                  align: "middle",
                  class: "mb-24"
                }, {
                  default: withCtx(() => [
                    createVNode(_component_ElCol, {
                      span: unref($viewport).isLessOrEquals("mobileWide") ? 24 : 12
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_ElSkeletonItem, {
                          variant: "text",
                          style: { "width": "50%" }
                        })
                      ]),
                      _: 1
                    }, 8, ["span"]),
                    createVNode(_component_ElCol, {
                      span: unref($viewport).isLessOrEquals("mobileWide") ? 24 : 12,
                      align: unref($viewport).isLessOrEquals("mobileWide") ? "start" : "end"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_ElSkeletonItem, {
                          variant: "text",
                          style: { "width": "100%" }
                        })
                      ]),
                      _: 1
                    }, 8, ["span", "align"])
                  ]),
                  _: 1
                }),
                (openBlock(), createBlock(Fragment, null, renderList(2, (_2) => {
                  return createVNode(_component_ElRow, { class: "mb-24" }, {
                    default: withCtx(() => [
                      (openBlock(), createBlock(Fragment, null, renderList(10, (_3) => {
                        return createVNode(_component_ElSkeletonItem, {
                          variant: "text",
                          style: { "width": "100%", "margin-bottom": "12px" }
                        });
                      }), 64))
                    ]),
                    _: 1
                  });
                }), 64))
              ];
            }
          }),
          _: 1
        }, _parent));
      } else if (!_ctx.news) {
        _push(ssrRenderComponent(_component_ElEmpty, { description: "Ups! Ovdje nema dostupnih vijesti..." }, null, _parent));
      } else {
        _push(`<!--[-->`);
        _push(ssrRenderComponent(_component_ElRow, {
          justify: "center",
          align: "middle"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            var _a22, _b22;
            if (_push2) {
              _push2(`<h3 class="color-primary" data-v-8eecc824${_scopeId}>${ssrInterpolate((_a22 = _ctx.news) == null ? void 0 : _a22.title)}</h3>`);
            } else {
              return [
                createVNode("h3", { class: "color-primary" }, toDisplayString((_b22 = _ctx.news) == null ? void 0 : _b22.title), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
        if (((_a = _ctx.news.images) == null ? void 0 : _a.length) || ((_b = _ctx.news.videos) == null ? void 0 : _b.length)) {
          _push(ssrRenderComponent(Gallery, {
            links: [...(_a2 = _ctx.news.images) != null ? _a2 : [], ...(_b2 = _ctx.news.videos) != null ? _b2 : []]
          }, null, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(ssrRenderComponent(_component_ElRow, {
          justify: "space-between",
          align: "middle",
          class: "color-zinc mb-12"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_ElCol, {
                span: unref($viewport).isLessOrEquals("mobileWide") ? 24 : 12
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(("formatISOToDatetime" in _ctx ? _ctx.formatISOToDatetime : unref(formatISOToDatetime))(_ctx.news.createdAt))}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(("formatISOToDatetime" in _ctx ? _ctx.formatISOToDatetime : unref(formatISOToDatetime))(_ctx.news.createdAt)), 1)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_ElCol, {
                span: unref($viewport).isLessOrEquals("mobileWide") ? 24 : 12,
                align: unref($viewport).isLessOrEquals("mobileWide") ? "start" : "end"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(` Autor: ${ssrInterpolate(_ctx.news.author)} - Kategorija: ${ssrInterpolate(_ctx.news.category.name)}`);
                  } else {
                    return [
                      createTextVNode(" Autor: " + toDisplayString(_ctx.news.author) + " - Kategorija: " + toDisplayString(_ctx.news.category.name), 1)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_ElCol, {
                  span: unref($viewport).isLessOrEquals("mobileWide") ? 24 : 12
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(("formatISOToDatetime" in _ctx ? _ctx.formatISOToDatetime : unref(formatISOToDatetime))(_ctx.news.createdAt)), 1)
                  ]),
                  _: 1
                }, 8, ["span"]),
                createVNode(_component_ElCol, {
                  span: unref($viewport).isLessOrEquals("mobileWide") ? 24 : 12,
                  align: unref($viewport).isLessOrEquals("mobileWide") ? "start" : "end"
                }, {
                  default: withCtx(() => [
                    createTextVNode(" Autor: " + toDisplayString(_ctx.news.author) + " - Kategorija: " + toDisplayString(_ctx.news.category.name), 1)
                  ]),
                  _: 1
                }, 8, ["span", "align"])
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`<div class="news-content" data-v-8eecc824>${(_c = unref(parsedHtml)) != null ? _c : ""}</div>`);
        _push(ssrRenderComponent(_component_ElRow, {
          justify: "center",
          class: "mb-12 social-share-buttons"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_sfc_main$2, null, null, _parent2, _scopeId));
            } else {
              return [
                createVNode(_sfc_main$2)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`<!--]-->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/portal/PortalNewsPage.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const PortalNewsPage = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-8eecc824"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "[newsId]",
  __ssrInlineRender: true,
  setup(__props) {
    const config = useRuntimeConfig();
    const newsId = useRoute().params.newsId;
    const {
      data: news,
      pending: isLoading,
      error
    } = useAsyncData(
      `news-${newsId}`,
      () => $fetch(`${config.public.axiosApiBaseUrl}/portal-news/${newsId}`)
    );
    watchEffect(() => {
      var _a, _b, _c;
      if (news.value) {
        useHead({
          title: news.value.title,
          meta: [
            {
              name: "description",
              content: (_a = news.value.text) == null ? void 0 : _a.slice(0, 160)
            },
            {
              property: "og:title",
              content: news.value.title
            },
            {
              property: "og:description",
              content: (_b = news.value.text) == null ? void 0 : _b.slice(0, 160)
            },
            {
              property: "og:image",
              content: ((_c = news.value.images) == null ? void 0 : _c[0]) || "https://res.cloudinary.com/dhaa1aobr/image/upload/v1747342417/favicon-96x96_xfuydm.png"
            },
            {
              property: "og:url",
              content: `${(void 0).location.href}/${newsId}`
            }
          ]
        });
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(PortalNewsPage, mergeProps({
        news: unref(news),
        "is-loading": unref(isLoading)
      }, _attrs), null, _parent));
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/portal/[categoryName]/[newsId].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=_newsId_-BFOvv-67.mjs.map
