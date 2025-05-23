import { v as useHead, _ as _export_sfc, u as useNuxtApp, a as useComStore, s as storeToRefs, g as ElSkeleton, b as ElRow, d as ElCol, h as ElSkeletonItem, j as ElDivider, p as promotion_default, l as connection_default, m as picture_default, q as share_default, r as document_checked_default, t as money_default, e as ElIcon, M as MegafoneIcon, o as office_building_default, f as shop_default, k as ElCard, E as ElEmpty, n as navigateTo } from './server.mjs';
import { E as ElTabs, a as ElTabPane } from './el-tab-pane-C-X7kpj3.mjs';
import { defineComponent, ref, mergeProps, unref, withCtx, createVNode, createBlock, openBlock, Fragment, renderList, createCommentVNode, isRef, createTextVNode, resolveDynamicComponent, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderAttrs, ssrRenderList, ssrRenderAttr, ssrRenderVNode, ssrInterpolate, ssrRenderClass, ssrRenderStyle } from 'vue/server-renderer';
import { N as NewsWidget } from './NewsWidget-Bgnk5vzn.mjs';
import { J as JobWidget } from './JobWidget-BoMDVV_I.mjs';
import { P as ProductWidget } from './ProductWidget-DppY-Wgi.mjs';
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
import './strings-D1uxkXhq.mjs';
import './truncate-BSRTn-4H.mjs';
import './formatDate-BE2FzR0K.mjs';

const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  __name: "ComWidget",
  __ssrInlineRender: true,
  props: ["com"],
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ElEmpty = ElEmpty;
      if (__props.com && __props.com.imageUrl) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "active-component-wrapper" }, _attrs))} data-v-2234d93f><div class="${ssrRenderClass([{ "cursor-pointer": __props.com.url }, "component component-hover-opacity"])}" style="${ssrRenderStyle(`background-image: url(${__props.com.imageUrl})`)}" data-v-2234d93f></div></div>`);
      } else {
        _push(ssrRenderComponent(_component_ElEmpty, mergeProps({
          class: "empty-component",
          description: "Ovdje mo\u017Ee biti va\u0161a reklama!",
          onClick: ($event) => ("navigateTo" in _ctx ? _ctx.navigateTo : unref(navigateTo))("/reklamiranje")
        }, _attrs), null, _parent));
      }
    };
  }
});
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/shared/ComWidget.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const ComWidget = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["__scopeId", "data-v-2234d93f"]]);
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "DashboardCategorizedNews",
  __ssrInlineRender: true,
  props: ["propNews"],
  setup(__props) {
    const { $viewport, $axios } = useNuxtApp();
    const comStore = useComStore();
    const { comsLoading, comSettings, dashboardSide } = storeToRefs(comStore);
    const data = ref();
    const isLoading = ref(true);
    const tab = ref("portal");
    async function getCategorizedData(value) {
      isLoading.value = true;
      try {
        const response = await $axios.get(`/dashboard-categorized?type=${value}`);
        data.value = response.data;
      } catch (error) {
        console.error("API Error:", error);
      } finally {
        isLoading.value = false;
      }
    }
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      const _component_ElRow = ElRow;
      const _component_ElCol = ElCol;
      const _component_ElTabs = ElTabs;
      const _component_ElTabPane = ElTabPane;
      const _component_ElIcon = ElIcon;
      const _component_ElSkeleton = ElSkeleton;
      const _component_ElSkeletonItem = ElSkeletonItem;
      const _component_ElDivider = ElDivider;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_ElRow, { justify: "center" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h3 class="color-primary" data-v-33460fb6${_scopeId}>Najnovije</h3>`);
          } else {
            return [
              createVNode("h3", { class: "color-primary" }, "Najnovije")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_ElRow, {
        gutter: 24,
        class: "mb-24",
        style: `${unref($viewport).match("tablet") ? "margin-left: -9px; margin-right: -9px" : unref($viewport).isLessThan("tablet") ? "margin-left: -6px; margin-right: -18px" : void 0}`
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a2, _b, _c, _d, _e, _f;
          if (_push2) {
            if (!unref(comsLoading) && ((_a2 = unref(comSettings)[0]) == null ? void 0 : _a2.show) && unref($viewport).isGreaterThan("tablet")) {
              _push2(ssrRenderComponent(_component_ElCol, { span: 5 }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  var _a3, _b2;
                  if (_push3) {
                    _push3(ssrRenderComponent(ComWidget, {
                      class: "side-com",
                      com: (_a3 = unref(dashboardSide)) == null ? void 0 : _a3.left
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(ComWidget, {
                        class: "side-com",
                        com: (_b2 = unref(dashboardSide)) == null ? void 0 : _b2.left
                      }, null, 8, ["com"])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            _push2(ssrRenderComponent(_component_ElCol, {
              span: !((_b = unref(comSettings)[0]) == null ? void 0 : _b.show) || unref($viewport).isLessOrEquals("tablet") ? 24 : 14
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_ElRow, { gutter: 12 }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_ElRow, {
                          gutter: 12,
                          justify: "center",
                          class: "w-100"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_ElTabs, {
                                onTabChange: (value) => getCategorizedData(value),
                                modelValue: unref(tab),
                                "onUpdate:modelValue": ($event) => isRef(tab) ? tab.value = $event : null
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_ElTabPane, { name: "portal" }, {
                                      label: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(_component_ElIcon, {
                                            size: 18,
                                            class: "mr-4"
                                          }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(MegafoneIcon, null, null, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(MegafoneIcon)
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(` Portal `);
                                        } else {
                                          return [
                                            createVNode(_component_ElIcon, {
                                              size: 18,
                                              class: "mr-4"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(MegafoneIcon)
                                              ]),
                                              _: 1
                                            }),
                                            createTextVNode(" Portal ")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(_component_ElTabPane, { name: "jobs" }, {
                                      label: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(_component_ElIcon, {
                                            size: 22,
                                            class: "mr-4"
                                          }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(unref(office_building_default), null, null, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(unref(office_building_default))
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(` Poslovi `);
                                        } else {
                                          return [
                                            createVNode(_component_ElIcon, {
                                              size: 22,
                                              class: "mr-4"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(unref(office_building_default))
                                              ]),
                                              _: 1
                                            }),
                                            createTextVNode(" Poslovi ")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(_component_ElTabPane, { name: "webshop" }, {
                                      label: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(_component_ElIcon, {
                                            size: 22,
                                            class: "mr-4"
                                          }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(unref(shop_default), null, null, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(unref(shop_default))
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(` Webshop `);
                                        } else {
                                          return [
                                            createVNode(_component_ElIcon, {
                                              size: 22,
                                              class: "mr-4"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(unref(shop_default))
                                              ]),
                                              _: 1
                                            }),
                                            createTextVNode(" Webshop ")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_ElTabPane, { name: "portal" }, {
                                        label: withCtx(() => [
                                          createVNode(_component_ElIcon, {
                                            size: 18,
                                            class: "mr-4"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(MegafoneIcon)
                                            ]),
                                            _: 1
                                          }),
                                          createTextVNode(" Portal ")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_ElTabPane, { name: "jobs" }, {
                                        label: withCtx(() => [
                                          createVNode(_component_ElIcon, {
                                            size: 22,
                                            class: "mr-4"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(unref(office_building_default))
                                            ]),
                                            _: 1
                                          }),
                                          createTextVNode(" Poslovi ")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_ElTabPane, { name: "webshop" }, {
                                        label: withCtx(() => [
                                          createVNode(_component_ElIcon, {
                                            size: 22,
                                            class: "mr-4"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(unref(shop_default))
                                            ]),
                                            _: 1
                                          }),
                                          createTextVNode(" Webshop ")
                                        ]),
                                        _: 1
                                      })
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_ElTabs, {
                                  onTabChange: (value) => getCategorizedData(value),
                                  modelValue: unref(tab),
                                  "onUpdate:modelValue": ($event) => isRef(tab) ? tab.value = $event : null
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_ElTabPane, { name: "portal" }, {
                                      label: withCtx(() => [
                                        createVNode(_component_ElIcon, {
                                          size: 18,
                                          class: "mr-4"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(MegafoneIcon)
                                          ]),
                                          _: 1
                                        }),
                                        createTextVNode(" Portal ")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_ElTabPane, { name: "jobs" }, {
                                      label: withCtx(() => [
                                        createVNode(_component_ElIcon, {
                                          size: 22,
                                          class: "mr-4"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(unref(office_building_default))
                                          ]),
                                          _: 1
                                        }),
                                        createTextVNode(" Poslovi ")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_ElTabPane, { name: "webshop" }, {
                                      label: withCtx(() => [
                                        createVNode(_component_ElIcon, {
                                          size: 22,
                                          class: "mr-4"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(unref(shop_default))
                                          ]),
                                          _: 1
                                        }),
                                        createTextVNode(" Webshop ")
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }, 8, ["onTabChange", "modelValue", "onUpdate:modelValue"])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_ElRow, {
                          class: "w-100",
                          style: `${unref($viewport).isGreaterOrEquals("tablet") ? "margin-left: -3px;" : "height: calc(90dvh + 24px)"}`,
                          gutter: 12
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_ElCol, {
                                span: unref($viewport).isLessThan("tablet") ? 24 : 14,
                                class: {
                                  "large-news-mobile": unref($viewport).isLessThan("tablet"),
                                  "large-news-desktop": unref($viewport).isGreaterOrEquals("tablet")
                                }
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    if (unref(isLoading)) {
                                      _push6(ssrRenderComponent(_component_ElSkeleton, { animated: "" }, {
                                        template: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(ssrRenderComponent(_component_ElSkeletonItem, {
                                              variant: "image",
                                              style: `border-radius: 4px; ${unref($viewport).isLessThan("tablet") ? "height: 30dvh" : "height: 40dvh"}`
                                            }, null, _parent7, _scopeId6));
                                            if (unref($viewport).isLessThan("tablet")) {
                                              _push7(ssrRenderComponent(_component_ElSkeletonItem, {
                                                variant: "image",
                                                style: { "border-radius": "4px", "height": "30dvh", "margin-top": "12px" }
                                              }, null, _parent7, _scopeId6));
                                            } else {
                                              _push7(`<!---->`);
                                            }
                                            if (unref($viewport).isLessThan("tablet")) {
                                              _push7(ssrRenderComponent(_component_ElSkeletonItem, {
                                                variant: "image",
                                                style: { "border-radius": "4px", "height": "30dvh", "margin-top": "12px" }
                                              }, null, _parent7, _scopeId6));
                                            } else {
                                              _push7(`<!---->`);
                                            }
                                          } else {
                                            return [
                                              createVNode(_component_ElSkeletonItem, {
                                                variant: "image",
                                                style: `border-radius: 4px; ${unref($viewport).isLessThan("tablet") ? "height: 30dvh" : "height: 40dvh"}`
                                              }, null, 8, ["style"]),
                                              unref($viewport).isLessThan("tablet") ? (openBlock(), createBlock(_component_ElSkeletonItem, {
                                                key: 0,
                                                variant: "image",
                                                style: { "border-radius": "4px", "height": "30dvh", "margin-top": "12px" }
                                              })) : createCommentVNode("", true),
                                              unref($viewport).isLessThan("tablet") ? (openBlock(), createBlock(_component_ElSkeletonItem, {
                                                key: 1,
                                                variant: "image",
                                                style: { "border-radius": "4px", "height": "30dvh", "margin-top": "12px" }
                                              })) : createCommentVNode("", true)
                                            ];
                                          }
                                        }),
                                        _: 1
                                      }, _parent6, _scopeId5));
                                    } else {
                                      _push6(`<!--[-->`);
                                      if (unref(tab) === "portal") {
                                        _push6(ssrRenderComponent(NewsWidget, {
                                          news: unref(data)[0]
                                        }, null, _parent6, _scopeId5));
                                      } else if (unref(tab) === "jobs") {
                                        _push6(ssrRenderComponent(JobWidget, {
                                          job: unref(data)[0]
                                        }, null, _parent6, _scopeId5));
                                      } else if (unref(tab) === "webshop") {
                                        _push6(ssrRenderComponent(ProductWidget, {
                                          product: unref(data)[0]
                                        }, null, _parent6, _scopeId5));
                                      } else {
                                        _push6(`<!---->`);
                                      }
                                      _push6(`<!--]-->`);
                                    }
                                  } else {
                                    return [
                                      unref(isLoading) ? (openBlock(), createBlock(_component_ElSkeleton, {
                                        key: 0,
                                        animated: ""
                                      }, {
                                        template: withCtx(() => [
                                          createVNode(_component_ElSkeletonItem, {
                                            variant: "image",
                                            style: `border-radius: 4px; ${unref($viewport).isLessThan("tablet") ? "height: 30dvh" : "height: 40dvh"}`
                                          }, null, 8, ["style"]),
                                          unref($viewport).isLessThan("tablet") ? (openBlock(), createBlock(_component_ElSkeletonItem, {
                                            key: 0,
                                            variant: "image",
                                            style: { "border-radius": "4px", "height": "30dvh", "margin-top": "12px" }
                                          })) : createCommentVNode("", true),
                                          unref($viewport).isLessThan("tablet") ? (openBlock(), createBlock(_component_ElSkeletonItem, {
                                            key: 1,
                                            variant: "image",
                                            style: { "border-radius": "4px", "height": "30dvh", "margin-top": "12px" }
                                          })) : createCommentVNode("", true)
                                        ]),
                                        _: 1
                                      })) : (openBlock(), createBlock(Fragment, { key: 1 }, [
                                        unref(tab) === "portal" ? (openBlock(), createBlock(NewsWidget, {
                                          key: 0,
                                          news: unref(data)[0]
                                        }, null, 8, ["news"])) : unref(tab) === "jobs" ? (openBlock(), createBlock(JobWidget, {
                                          key: 1,
                                          job: unref(data)[0]
                                        }, null, 8, ["job"])) : unref(tab) === "webshop" ? (openBlock(), createBlock(ProductWidget, {
                                          key: 2,
                                          product: unref(data)[0]
                                        }, null, 8, ["product"])) : createCommentVNode("", true)
                                      ], 64))
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_ElCol, {
                                span: unref($viewport).isLessThan("tablet") ? 24 : 10,
                                class: "small-news-container"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_ElRow, {
                                      class: "small-news-row",
                                      gutter: 12
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          if (unref(isLoading) && unref($viewport).isGreaterOrEquals("tablet")) {
                                            _push7(ssrRenderComponent(_component_ElSkeleton, { animated: "" }, {
                                              template: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                if (_push8) {
                                                  _push8(ssrRenderComponent(_component_ElSkeletonItem, {
                                                    variant: "image",
                                                    style: { "border-radius": "4px", "width": "100%", "height": "calc(20dvh - 3px)" }
                                                  }, null, _parent8, _scopeId7));
                                                } else {
                                                  return [
                                                    createVNode(_component_ElSkeletonItem, {
                                                      variant: "image",
                                                      style: { "border-radius": "4px", "width": "100%", "height": "calc(20dvh - 3px)" }
                                                    })
                                                  ];
                                                }
                                              }),
                                              _: 1
                                            }, _parent7, _scopeId6));
                                          } else if (!unref(isLoading) && unref(data)) {
                                            _push7(`<!--[-->`);
                                            if (unref(tab) === "portal") {
                                              _push7(ssrRenderComponent(NewsWidget, {
                                                news: unref(data)[1],
                                                class: ["small-news", { "mx-6 mt-8": unref($viewport).isLessThan("tablet") }]
                                              }, null, _parent7, _scopeId6));
                                            } else if (unref(tab) === "jobs") {
                                              _push7(ssrRenderComponent(JobWidget, {
                                                job: unref(data)[1],
                                                class: ["small-news", { "mx-6 mt-8": unref($viewport).isLessThan("tablet") }]
                                              }, null, _parent7, _scopeId6));
                                            } else if (unref(tab) === "webshop") {
                                              _push7(ssrRenderComponent(ProductWidget, {
                                                product: unref(data)[1],
                                                class: ["small-news", { "mx-6 mt-8": unref($viewport).isLessThan("tablet") }]
                                              }, null, _parent7, _scopeId6));
                                            } else {
                                              _push7(`<!---->`);
                                            }
                                            _push7(`<!--]-->`);
                                          } else {
                                            _push7(`<!---->`);
                                          }
                                        } else {
                                          return [
                                            unref(isLoading) && unref($viewport).isGreaterOrEquals("tablet") ? (openBlock(), createBlock(_component_ElSkeleton, {
                                              key: 0,
                                              animated: ""
                                            }, {
                                              template: withCtx(() => [
                                                createVNode(_component_ElSkeletonItem, {
                                                  variant: "image",
                                                  style: { "border-radius": "4px", "width": "100%", "height": "calc(20dvh - 3px)" }
                                                })
                                              ]),
                                              _: 1
                                            })) : !unref(isLoading) && unref(data) ? (openBlock(), createBlock(Fragment, { key: 1 }, [
                                              unref(tab) === "portal" ? (openBlock(), createBlock(NewsWidget, {
                                                key: 0,
                                                news: unref(data)[1],
                                                class: ["small-news", { "mx-6 mt-8": unref($viewport).isLessThan("tablet") }]
                                              }, null, 8, ["news", "class"])) : unref(tab) === "jobs" ? (openBlock(), createBlock(JobWidget, {
                                                key: 1,
                                                job: unref(data)[1],
                                                class: ["small-news", { "mx-6 mt-8": unref($viewport).isLessThan("tablet") }]
                                              }, null, 8, ["job", "class"])) : unref(tab) === "webshop" ? (openBlock(), createBlock(ProductWidget, {
                                                key: 2,
                                                product: unref(data)[1],
                                                class: ["small-news", { "mx-6 mt-8": unref($viewport).isLessThan("tablet") }]
                                              }, null, 8, ["product", "class"])) : createCommentVNode("", true)
                                            ], 64)) : createCommentVNode("", true)
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(_component_ElRow, {
                                      class: "small-news-row mt-6",
                                      gutter: 12
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          if (unref(isLoading) && unref($viewport).isGreaterOrEquals("tablet")) {
                                            _push7(ssrRenderComponent(_component_ElSkeleton, { animated: "" }, {
                                              template: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                if (_push8) {
                                                  _push8(ssrRenderComponent(_component_ElSkeletonItem, {
                                                    variant: "image",
                                                    style: { "border-radius": "4px", "width": "100%", "height": "calc(20dvh - 3px)" }
                                                  }, null, _parent8, _scopeId7));
                                                } else {
                                                  return [
                                                    createVNode(_component_ElSkeletonItem, {
                                                      variant: "image",
                                                      style: { "border-radius": "4px", "width": "100%", "height": "calc(20dvh - 3px)" }
                                                    })
                                                  ];
                                                }
                                              }),
                                              _: 1
                                            }, _parent7, _scopeId6));
                                          } else if (!unref(isLoading) && unref(data)) {
                                            _push7(`<!--[-->`);
                                            if (unref(tab) === "portal") {
                                              _push7(ssrRenderComponent(NewsWidget, {
                                                news: unref(data)[2],
                                                class: ["small-news", { "mx-6": unref($viewport).isLessThan("tablet") }]
                                              }, null, _parent7, _scopeId6));
                                            } else if (unref(tab) === "jobs") {
                                              _push7(ssrRenderComponent(JobWidget, {
                                                job: unref(data)[2],
                                                class: ["small-news", { "mx-6": unref($viewport).isLessThan("tablet") }]
                                              }, null, _parent7, _scopeId6));
                                            } else if (unref(tab) === "webshop") {
                                              _push7(ssrRenderComponent(ProductWidget, {
                                                product: unref(data)[2],
                                                class: ["small-news", { "mx-6": unref($viewport).isLessThan("tablet") }]
                                              }, null, _parent7, _scopeId6));
                                            } else {
                                              _push7(`<!---->`);
                                            }
                                            _push7(`<!--]-->`);
                                          } else {
                                            _push7(`<!---->`);
                                          }
                                        } else {
                                          return [
                                            unref(isLoading) && unref($viewport).isGreaterOrEquals("tablet") ? (openBlock(), createBlock(_component_ElSkeleton, {
                                              key: 0,
                                              animated: ""
                                            }, {
                                              template: withCtx(() => [
                                                createVNode(_component_ElSkeletonItem, {
                                                  variant: "image",
                                                  style: { "border-radius": "4px", "width": "100%", "height": "calc(20dvh - 3px)" }
                                                })
                                              ]),
                                              _: 1
                                            })) : !unref(isLoading) && unref(data) ? (openBlock(), createBlock(Fragment, { key: 1 }, [
                                              unref(tab) === "portal" ? (openBlock(), createBlock(NewsWidget, {
                                                key: 0,
                                                news: unref(data)[2],
                                                class: ["small-news", { "mx-6": unref($viewport).isLessThan("tablet") }]
                                              }, null, 8, ["news", "class"])) : unref(tab) === "jobs" ? (openBlock(), createBlock(JobWidget, {
                                                key: 1,
                                                job: unref(data)[2],
                                                class: ["small-news", { "mx-6": unref($viewport).isLessThan("tablet") }]
                                              }, null, 8, ["job", "class"])) : unref(tab) === "webshop" ? (openBlock(), createBlock(ProductWidget, {
                                                key: 2,
                                                product: unref(data)[2],
                                                class: ["small-news", { "mx-6": unref($viewport).isLessThan("tablet") }]
                                              }, null, 8, ["product", "class"])) : createCommentVNode("", true)
                                            ], 64)) : createCommentVNode("", true)
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_ElRow, {
                                        class: "small-news-row",
                                        gutter: 12
                                      }, {
                                        default: withCtx(() => [
                                          unref(isLoading) && unref($viewport).isGreaterOrEquals("tablet") ? (openBlock(), createBlock(_component_ElSkeleton, {
                                            key: 0,
                                            animated: ""
                                          }, {
                                            template: withCtx(() => [
                                              createVNode(_component_ElSkeletonItem, {
                                                variant: "image",
                                                style: { "border-radius": "4px", "width": "100%", "height": "calc(20dvh - 3px)" }
                                              })
                                            ]),
                                            _: 1
                                          })) : !unref(isLoading) && unref(data) ? (openBlock(), createBlock(Fragment, { key: 1 }, [
                                            unref(tab) === "portal" ? (openBlock(), createBlock(NewsWidget, {
                                              key: 0,
                                              news: unref(data)[1],
                                              class: ["small-news", { "mx-6 mt-8": unref($viewport).isLessThan("tablet") }]
                                            }, null, 8, ["news", "class"])) : unref(tab) === "jobs" ? (openBlock(), createBlock(JobWidget, {
                                              key: 1,
                                              job: unref(data)[1],
                                              class: ["small-news", { "mx-6 mt-8": unref($viewport).isLessThan("tablet") }]
                                            }, null, 8, ["job", "class"])) : unref(tab) === "webshop" ? (openBlock(), createBlock(ProductWidget, {
                                              key: 2,
                                              product: unref(data)[1],
                                              class: ["small-news", { "mx-6 mt-8": unref($viewport).isLessThan("tablet") }]
                                            }, null, 8, ["product", "class"])) : createCommentVNode("", true)
                                          ], 64)) : createCommentVNode("", true)
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_ElRow, {
                                        class: "small-news-row mt-6",
                                        gutter: 12
                                      }, {
                                        default: withCtx(() => [
                                          unref(isLoading) && unref($viewport).isGreaterOrEquals("tablet") ? (openBlock(), createBlock(_component_ElSkeleton, {
                                            key: 0,
                                            animated: ""
                                          }, {
                                            template: withCtx(() => [
                                              createVNode(_component_ElSkeletonItem, {
                                                variant: "image",
                                                style: { "border-radius": "4px", "width": "100%", "height": "calc(20dvh - 3px)" }
                                              })
                                            ]),
                                            _: 1
                                          })) : !unref(isLoading) && unref(data) ? (openBlock(), createBlock(Fragment, { key: 1 }, [
                                            unref(tab) === "portal" ? (openBlock(), createBlock(NewsWidget, {
                                              key: 0,
                                              news: unref(data)[2],
                                              class: ["small-news", { "mx-6": unref($viewport).isLessThan("tablet") }]
                                            }, null, 8, ["news", "class"])) : unref(tab) === "jobs" ? (openBlock(), createBlock(JobWidget, {
                                              key: 1,
                                              job: unref(data)[2],
                                              class: ["small-news", { "mx-6": unref($viewport).isLessThan("tablet") }]
                                            }, null, 8, ["job", "class"])) : unref(tab) === "webshop" ? (openBlock(), createBlock(ProductWidget, {
                                              key: 2,
                                              product: unref(data)[2],
                                              class: ["small-news", { "mx-6": unref($viewport).isLessThan("tablet") }]
                                            }, null, 8, ["product", "class"])) : createCommentVNode("", true)
                                          ], 64)) : createCommentVNode("", true)
                                        ]),
                                        _: 1
                                      })
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_ElCol, {
                                  span: unref($viewport).isLessThan("tablet") ? 24 : 14,
                                  class: {
                                    "large-news-mobile": unref($viewport).isLessThan("tablet"),
                                    "large-news-desktop": unref($viewport).isGreaterOrEquals("tablet")
                                  }
                                }, {
                                  default: withCtx(() => [
                                    unref(isLoading) ? (openBlock(), createBlock(_component_ElSkeleton, {
                                      key: 0,
                                      animated: ""
                                    }, {
                                      template: withCtx(() => [
                                        createVNode(_component_ElSkeletonItem, {
                                          variant: "image",
                                          style: `border-radius: 4px; ${unref($viewport).isLessThan("tablet") ? "height: 30dvh" : "height: 40dvh"}`
                                        }, null, 8, ["style"]),
                                        unref($viewport).isLessThan("tablet") ? (openBlock(), createBlock(_component_ElSkeletonItem, {
                                          key: 0,
                                          variant: "image",
                                          style: { "border-radius": "4px", "height": "30dvh", "margin-top": "12px" }
                                        })) : createCommentVNode("", true),
                                        unref($viewport).isLessThan("tablet") ? (openBlock(), createBlock(_component_ElSkeletonItem, {
                                          key: 1,
                                          variant: "image",
                                          style: { "border-radius": "4px", "height": "30dvh", "margin-top": "12px" }
                                        })) : createCommentVNode("", true)
                                      ]),
                                      _: 1
                                    })) : (openBlock(), createBlock(Fragment, { key: 1 }, [
                                      unref(tab) === "portal" ? (openBlock(), createBlock(NewsWidget, {
                                        key: 0,
                                        news: unref(data)[0]
                                      }, null, 8, ["news"])) : unref(tab) === "jobs" ? (openBlock(), createBlock(JobWidget, {
                                        key: 1,
                                        job: unref(data)[0]
                                      }, null, 8, ["job"])) : unref(tab) === "webshop" ? (openBlock(), createBlock(ProductWidget, {
                                        key: 2,
                                        product: unref(data)[0]
                                      }, null, 8, ["product"])) : createCommentVNode("", true)
                                    ], 64))
                                  ]),
                                  _: 1
                                }, 8, ["span", "class"]),
                                createVNode(_component_ElCol, {
                                  span: unref($viewport).isLessThan("tablet") ? 24 : 10,
                                  class: "small-news-container"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_ElRow, {
                                      class: "small-news-row",
                                      gutter: 12
                                    }, {
                                      default: withCtx(() => [
                                        unref(isLoading) && unref($viewport).isGreaterOrEquals("tablet") ? (openBlock(), createBlock(_component_ElSkeleton, {
                                          key: 0,
                                          animated: ""
                                        }, {
                                          template: withCtx(() => [
                                            createVNode(_component_ElSkeletonItem, {
                                              variant: "image",
                                              style: { "border-radius": "4px", "width": "100%", "height": "calc(20dvh - 3px)" }
                                            })
                                          ]),
                                          _: 1
                                        })) : !unref(isLoading) && unref(data) ? (openBlock(), createBlock(Fragment, { key: 1 }, [
                                          unref(tab) === "portal" ? (openBlock(), createBlock(NewsWidget, {
                                            key: 0,
                                            news: unref(data)[1],
                                            class: ["small-news", { "mx-6 mt-8": unref($viewport).isLessThan("tablet") }]
                                          }, null, 8, ["news", "class"])) : unref(tab) === "jobs" ? (openBlock(), createBlock(JobWidget, {
                                            key: 1,
                                            job: unref(data)[1],
                                            class: ["small-news", { "mx-6 mt-8": unref($viewport).isLessThan("tablet") }]
                                          }, null, 8, ["job", "class"])) : unref(tab) === "webshop" ? (openBlock(), createBlock(ProductWidget, {
                                            key: 2,
                                            product: unref(data)[1],
                                            class: ["small-news", { "mx-6 mt-8": unref($viewport).isLessThan("tablet") }]
                                          }, null, 8, ["product", "class"])) : createCommentVNode("", true)
                                        ], 64)) : createCommentVNode("", true)
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_ElRow, {
                                      class: "small-news-row mt-6",
                                      gutter: 12
                                    }, {
                                      default: withCtx(() => [
                                        unref(isLoading) && unref($viewport).isGreaterOrEquals("tablet") ? (openBlock(), createBlock(_component_ElSkeleton, {
                                          key: 0,
                                          animated: ""
                                        }, {
                                          template: withCtx(() => [
                                            createVNode(_component_ElSkeletonItem, {
                                              variant: "image",
                                              style: { "border-radius": "4px", "width": "100%", "height": "calc(20dvh - 3px)" }
                                            })
                                          ]),
                                          _: 1
                                        })) : !unref(isLoading) && unref(data) ? (openBlock(), createBlock(Fragment, { key: 1 }, [
                                          unref(tab) === "portal" ? (openBlock(), createBlock(NewsWidget, {
                                            key: 0,
                                            news: unref(data)[2],
                                            class: ["small-news", { "mx-6": unref($viewport).isLessThan("tablet") }]
                                          }, null, 8, ["news", "class"])) : unref(tab) === "jobs" ? (openBlock(), createBlock(JobWidget, {
                                            key: 1,
                                            job: unref(data)[2],
                                            class: ["small-news", { "mx-6": unref($viewport).isLessThan("tablet") }]
                                          }, null, 8, ["job", "class"])) : unref(tab) === "webshop" ? (openBlock(), createBlock(ProductWidget, {
                                            key: 2,
                                            product: unref(data)[2],
                                            class: ["small-news", { "mx-6": unref($viewport).isLessThan("tablet") }]
                                          }, null, 8, ["product", "class"])) : createCommentVNode("", true)
                                        ], 64)) : createCommentVNode("", true)
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }, 8, ["span"])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_ElRow, {
                            gutter: 12,
                            justify: "center",
                            class: "w-100"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_ElTabs, {
                                onTabChange: (value) => getCategorizedData(value),
                                modelValue: unref(tab),
                                "onUpdate:modelValue": ($event) => isRef(tab) ? tab.value = $event : null
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_ElTabPane, { name: "portal" }, {
                                    label: withCtx(() => [
                                      createVNode(_component_ElIcon, {
                                        size: 18,
                                        class: "mr-4"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(MegafoneIcon)
                                        ]),
                                        _: 1
                                      }),
                                      createTextVNode(" Portal ")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_ElTabPane, { name: "jobs" }, {
                                    label: withCtx(() => [
                                      createVNode(_component_ElIcon, {
                                        size: 22,
                                        class: "mr-4"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(unref(office_building_default))
                                        ]),
                                        _: 1
                                      }),
                                      createTextVNode(" Poslovi ")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_ElTabPane, { name: "webshop" }, {
                                    label: withCtx(() => [
                                      createVNode(_component_ElIcon, {
                                        size: 22,
                                        class: "mr-4"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(unref(shop_default))
                                        ]),
                                        _: 1
                                      }),
                                      createTextVNode(" Webshop ")
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }, 8, ["onTabChange", "modelValue", "onUpdate:modelValue"])
                            ]),
                            _: 1
                          }),
                          createVNode(_component_ElRow, {
                            class: "w-100",
                            style: `${unref($viewport).isGreaterOrEquals("tablet") ? "margin-left: -3px;" : "height: calc(90dvh + 24px)"}`,
                            gutter: 12
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_ElCol, {
                                span: unref($viewport).isLessThan("tablet") ? 24 : 14,
                                class: {
                                  "large-news-mobile": unref($viewport).isLessThan("tablet"),
                                  "large-news-desktop": unref($viewport).isGreaterOrEquals("tablet")
                                }
                              }, {
                                default: withCtx(() => [
                                  unref(isLoading) ? (openBlock(), createBlock(_component_ElSkeleton, {
                                    key: 0,
                                    animated: ""
                                  }, {
                                    template: withCtx(() => [
                                      createVNode(_component_ElSkeletonItem, {
                                        variant: "image",
                                        style: `border-radius: 4px; ${unref($viewport).isLessThan("tablet") ? "height: 30dvh" : "height: 40dvh"}`
                                      }, null, 8, ["style"]),
                                      unref($viewport).isLessThan("tablet") ? (openBlock(), createBlock(_component_ElSkeletonItem, {
                                        key: 0,
                                        variant: "image",
                                        style: { "border-radius": "4px", "height": "30dvh", "margin-top": "12px" }
                                      })) : createCommentVNode("", true),
                                      unref($viewport).isLessThan("tablet") ? (openBlock(), createBlock(_component_ElSkeletonItem, {
                                        key: 1,
                                        variant: "image",
                                        style: { "border-radius": "4px", "height": "30dvh", "margin-top": "12px" }
                                      })) : createCommentVNode("", true)
                                    ]),
                                    _: 1
                                  })) : (openBlock(), createBlock(Fragment, { key: 1 }, [
                                    unref(tab) === "portal" ? (openBlock(), createBlock(NewsWidget, {
                                      key: 0,
                                      news: unref(data)[0]
                                    }, null, 8, ["news"])) : unref(tab) === "jobs" ? (openBlock(), createBlock(JobWidget, {
                                      key: 1,
                                      job: unref(data)[0]
                                    }, null, 8, ["job"])) : unref(tab) === "webshop" ? (openBlock(), createBlock(ProductWidget, {
                                      key: 2,
                                      product: unref(data)[0]
                                    }, null, 8, ["product"])) : createCommentVNode("", true)
                                  ], 64))
                                ]),
                                _: 1
                              }, 8, ["span", "class"]),
                              createVNode(_component_ElCol, {
                                span: unref($viewport).isLessThan("tablet") ? 24 : 10,
                                class: "small-news-container"
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_ElRow, {
                                    class: "small-news-row",
                                    gutter: 12
                                  }, {
                                    default: withCtx(() => [
                                      unref(isLoading) && unref($viewport).isGreaterOrEquals("tablet") ? (openBlock(), createBlock(_component_ElSkeleton, {
                                        key: 0,
                                        animated: ""
                                      }, {
                                        template: withCtx(() => [
                                          createVNode(_component_ElSkeletonItem, {
                                            variant: "image",
                                            style: { "border-radius": "4px", "width": "100%", "height": "calc(20dvh - 3px)" }
                                          })
                                        ]),
                                        _: 1
                                      })) : !unref(isLoading) && unref(data) ? (openBlock(), createBlock(Fragment, { key: 1 }, [
                                        unref(tab) === "portal" ? (openBlock(), createBlock(NewsWidget, {
                                          key: 0,
                                          news: unref(data)[1],
                                          class: ["small-news", { "mx-6 mt-8": unref($viewport).isLessThan("tablet") }]
                                        }, null, 8, ["news", "class"])) : unref(tab) === "jobs" ? (openBlock(), createBlock(JobWidget, {
                                          key: 1,
                                          job: unref(data)[1],
                                          class: ["small-news", { "mx-6 mt-8": unref($viewport).isLessThan("tablet") }]
                                        }, null, 8, ["job", "class"])) : unref(tab) === "webshop" ? (openBlock(), createBlock(ProductWidget, {
                                          key: 2,
                                          product: unref(data)[1],
                                          class: ["small-news", { "mx-6 mt-8": unref($viewport).isLessThan("tablet") }]
                                        }, null, 8, ["product", "class"])) : createCommentVNode("", true)
                                      ], 64)) : createCommentVNode("", true)
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_ElRow, {
                                    class: "small-news-row mt-6",
                                    gutter: 12
                                  }, {
                                    default: withCtx(() => [
                                      unref(isLoading) && unref($viewport).isGreaterOrEquals("tablet") ? (openBlock(), createBlock(_component_ElSkeleton, {
                                        key: 0,
                                        animated: ""
                                      }, {
                                        template: withCtx(() => [
                                          createVNode(_component_ElSkeletonItem, {
                                            variant: "image",
                                            style: { "border-radius": "4px", "width": "100%", "height": "calc(20dvh - 3px)" }
                                          })
                                        ]),
                                        _: 1
                                      })) : !unref(isLoading) && unref(data) ? (openBlock(), createBlock(Fragment, { key: 1 }, [
                                        unref(tab) === "portal" ? (openBlock(), createBlock(NewsWidget, {
                                          key: 0,
                                          news: unref(data)[2],
                                          class: ["small-news", { "mx-6": unref($viewport).isLessThan("tablet") }]
                                        }, null, 8, ["news", "class"])) : unref(tab) === "jobs" ? (openBlock(), createBlock(JobWidget, {
                                          key: 1,
                                          job: unref(data)[2],
                                          class: ["small-news", { "mx-6": unref($viewport).isLessThan("tablet") }]
                                        }, null, 8, ["job", "class"])) : unref(tab) === "webshop" ? (openBlock(), createBlock(ProductWidget, {
                                          key: 2,
                                          product: unref(data)[2],
                                          class: ["small-news", { "mx-6": unref($viewport).isLessThan("tablet") }]
                                        }, null, 8, ["product", "class"])) : createCommentVNode("", true)
                                      ], 64)) : createCommentVNode("", true)
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }, 8, ["span"])
                            ]),
                            _: 1
                          }, 8, ["style"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_ElRow, { gutter: 12 }, {
                      default: withCtx(() => [
                        createVNode(_component_ElRow, {
                          gutter: 12,
                          justify: "center",
                          class: "w-100"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_ElTabs, {
                              onTabChange: (value) => getCategorizedData(value),
                              modelValue: unref(tab),
                              "onUpdate:modelValue": ($event) => isRef(tab) ? tab.value = $event : null
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_ElTabPane, { name: "portal" }, {
                                  label: withCtx(() => [
                                    createVNode(_component_ElIcon, {
                                      size: 18,
                                      class: "mr-4"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(MegafoneIcon)
                                      ]),
                                      _: 1
                                    }),
                                    createTextVNode(" Portal ")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_ElTabPane, { name: "jobs" }, {
                                  label: withCtx(() => [
                                    createVNode(_component_ElIcon, {
                                      size: 22,
                                      class: "mr-4"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(unref(office_building_default))
                                      ]),
                                      _: 1
                                    }),
                                    createTextVNode(" Poslovi ")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_ElTabPane, { name: "webshop" }, {
                                  label: withCtx(() => [
                                    createVNode(_component_ElIcon, {
                                      size: 22,
                                      class: "mr-4"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(unref(shop_default))
                                      ]),
                                      _: 1
                                    }),
                                    createTextVNode(" Webshop ")
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }, 8, ["onTabChange", "modelValue", "onUpdate:modelValue"])
                          ]),
                          _: 1
                        }),
                        createVNode(_component_ElRow, {
                          class: "w-100",
                          style: `${unref($viewport).isGreaterOrEquals("tablet") ? "margin-left: -3px;" : "height: calc(90dvh + 24px)"}`,
                          gutter: 12
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_ElCol, {
                              span: unref($viewport).isLessThan("tablet") ? 24 : 14,
                              class: {
                                "large-news-mobile": unref($viewport).isLessThan("tablet"),
                                "large-news-desktop": unref($viewport).isGreaterOrEquals("tablet")
                              }
                            }, {
                              default: withCtx(() => [
                                unref(isLoading) ? (openBlock(), createBlock(_component_ElSkeleton, {
                                  key: 0,
                                  animated: ""
                                }, {
                                  template: withCtx(() => [
                                    createVNode(_component_ElSkeletonItem, {
                                      variant: "image",
                                      style: `border-radius: 4px; ${unref($viewport).isLessThan("tablet") ? "height: 30dvh" : "height: 40dvh"}`
                                    }, null, 8, ["style"]),
                                    unref($viewport).isLessThan("tablet") ? (openBlock(), createBlock(_component_ElSkeletonItem, {
                                      key: 0,
                                      variant: "image",
                                      style: { "border-radius": "4px", "height": "30dvh", "margin-top": "12px" }
                                    })) : createCommentVNode("", true),
                                    unref($viewport).isLessThan("tablet") ? (openBlock(), createBlock(_component_ElSkeletonItem, {
                                      key: 1,
                                      variant: "image",
                                      style: { "border-radius": "4px", "height": "30dvh", "margin-top": "12px" }
                                    })) : createCommentVNode("", true)
                                  ]),
                                  _: 1
                                })) : (openBlock(), createBlock(Fragment, { key: 1 }, [
                                  unref(tab) === "portal" ? (openBlock(), createBlock(NewsWidget, {
                                    key: 0,
                                    news: unref(data)[0]
                                  }, null, 8, ["news"])) : unref(tab) === "jobs" ? (openBlock(), createBlock(JobWidget, {
                                    key: 1,
                                    job: unref(data)[0]
                                  }, null, 8, ["job"])) : unref(tab) === "webshop" ? (openBlock(), createBlock(ProductWidget, {
                                    key: 2,
                                    product: unref(data)[0]
                                  }, null, 8, ["product"])) : createCommentVNode("", true)
                                ], 64))
                              ]),
                              _: 1
                            }, 8, ["span", "class"]),
                            createVNode(_component_ElCol, {
                              span: unref($viewport).isLessThan("tablet") ? 24 : 10,
                              class: "small-news-container"
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_ElRow, {
                                  class: "small-news-row",
                                  gutter: 12
                                }, {
                                  default: withCtx(() => [
                                    unref(isLoading) && unref($viewport).isGreaterOrEquals("tablet") ? (openBlock(), createBlock(_component_ElSkeleton, {
                                      key: 0,
                                      animated: ""
                                    }, {
                                      template: withCtx(() => [
                                        createVNode(_component_ElSkeletonItem, {
                                          variant: "image",
                                          style: { "border-radius": "4px", "width": "100%", "height": "calc(20dvh - 3px)" }
                                        })
                                      ]),
                                      _: 1
                                    })) : !unref(isLoading) && unref(data) ? (openBlock(), createBlock(Fragment, { key: 1 }, [
                                      unref(tab) === "portal" ? (openBlock(), createBlock(NewsWidget, {
                                        key: 0,
                                        news: unref(data)[1],
                                        class: ["small-news", { "mx-6 mt-8": unref($viewport).isLessThan("tablet") }]
                                      }, null, 8, ["news", "class"])) : unref(tab) === "jobs" ? (openBlock(), createBlock(JobWidget, {
                                        key: 1,
                                        job: unref(data)[1],
                                        class: ["small-news", { "mx-6 mt-8": unref($viewport).isLessThan("tablet") }]
                                      }, null, 8, ["job", "class"])) : unref(tab) === "webshop" ? (openBlock(), createBlock(ProductWidget, {
                                        key: 2,
                                        product: unref(data)[1],
                                        class: ["small-news", { "mx-6 mt-8": unref($viewport).isLessThan("tablet") }]
                                      }, null, 8, ["product", "class"])) : createCommentVNode("", true)
                                    ], 64)) : createCommentVNode("", true)
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_ElRow, {
                                  class: "small-news-row mt-6",
                                  gutter: 12
                                }, {
                                  default: withCtx(() => [
                                    unref(isLoading) && unref($viewport).isGreaterOrEquals("tablet") ? (openBlock(), createBlock(_component_ElSkeleton, {
                                      key: 0,
                                      animated: ""
                                    }, {
                                      template: withCtx(() => [
                                        createVNode(_component_ElSkeletonItem, {
                                          variant: "image",
                                          style: { "border-radius": "4px", "width": "100%", "height": "calc(20dvh - 3px)" }
                                        })
                                      ]),
                                      _: 1
                                    })) : !unref(isLoading) && unref(data) ? (openBlock(), createBlock(Fragment, { key: 1 }, [
                                      unref(tab) === "portal" ? (openBlock(), createBlock(NewsWidget, {
                                        key: 0,
                                        news: unref(data)[2],
                                        class: ["small-news", { "mx-6": unref($viewport).isLessThan("tablet") }]
                                      }, null, 8, ["news", "class"])) : unref(tab) === "jobs" ? (openBlock(), createBlock(JobWidget, {
                                        key: 1,
                                        job: unref(data)[2],
                                        class: ["small-news", { "mx-6": unref($viewport).isLessThan("tablet") }]
                                      }, null, 8, ["job", "class"])) : unref(tab) === "webshop" ? (openBlock(), createBlock(ProductWidget, {
                                        key: 2,
                                        product: unref(data)[2],
                                        class: ["small-news", { "mx-6": unref($viewport).isLessThan("tablet") }]
                                      }, null, 8, ["product", "class"])) : createCommentVNode("", true)
                                    ], 64)) : createCommentVNode("", true)
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }, 8, ["span"])
                          ]),
                          _: 1
                        }, 8, ["style"])
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            if (!unref(comsLoading) && ((_c = unref(comSettings)[0]) == null ? void 0 : _c.show) && unref($viewport).isGreaterThan("tablet")) {
              _push2(ssrRenderComponent(_component_ElCol, { span: 5 }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  var _a3, _b2;
                  if (_push3) {
                    _push3(ssrRenderComponent(ComWidget, {
                      class: "side-com",
                      com: (_a3 = unref(dashboardSide)) == null ? void 0 : _a3.right
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(ComWidget, {
                        class: "side-com",
                        com: (_b2 = unref(dashboardSide)) == null ? void 0 : _b2.right
                      }, null, 8, ["com"])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              !unref(comsLoading) && ((_d = unref(comSettings)[0]) == null ? void 0 : _d.show) && unref($viewport).isGreaterThan("tablet") ? (openBlock(), createBlock(_component_ElCol, {
                key: 0,
                span: 5
              }, {
                default: withCtx(() => {
                  var _a3;
                  return [
                    createVNode(ComWidget, {
                      class: "side-com",
                      com: (_a3 = unref(dashboardSide)) == null ? void 0 : _a3.left
                    }, null, 8, ["com"])
                  ];
                }),
                _: 1
              })) : createCommentVNode("", true),
              createVNode(_component_ElCol, {
                span: !((_e = unref(comSettings)[0]) == null ? void 0 : _e.show) || unref($viewport).isLessOrEquals("tablet") ? 24 : 14
              }, {
                default: withCtx(() => [
                  createVNode(_component_ElRow, { gutter: 12 }, {
                    default: withCtx(() => [
                      createVNode(_component_ElRow, {
                        gutter: 12,
                        justify: "center",
                        class: "w-100"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_ElTabs, {
                            onTabChange: (value) => getCategorizedData(value),
                            modelValue: unref(tab),
                            "onUpdate:modelValue": ($event) => isRef(tab) ? tab.value = $event : null
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_ElTabPane, { name: "portal" }, {
                                label: withCtx(() => [
                                  createVNode(_component_ElIcon, {
                                    size: 18,
                                    class: "mr-4"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(MegafoneIcon)
                                    ]),
                                    _: 1
                                  }),
                                  createTextVNode(" Portal ")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_ElTabPane, { name: "jobs" }, {
                                label: withCtx(() => [
                                  createVNode(_component_ElIcon, {
                                    size: 22,
                                    class: "mr-4"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(unref(office_building_default))
                                    ]),
                                    _: 1
                                  }),
                                  createTextVNode(" Poslovi ")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_ElTabPane, { name: "webshop" }, {
                                label: withCtx(() => [
                                  createVNode(_component_ElIcon, {
                                    size: 22,
                                    class: "mr-4"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(unref(shop_default))
                                    ]),
                                    _: 1
                                  }),
                                  createTextVNode(" Webshop ")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }, 8, ["onTabChange", "modelValue", "onUpdate:modelValue"])
                        ]),
                        _: 1
                      }),
                      createVNode(_component_ElRow, {
                        class: "w-100",
                        style: `${unref($viewport).isGreaterOrEquals("tablet") ? "margin-left: -3px;" : "height: calc(90dvh + 24px)"}`,
                        gutter: 12
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_ElCol, {
                            span: unref($viewport).isLessThan("tablet") ? 24 : 14,
                            class: {
                              "large-news-mobile": unref($viewport).isLessThan("tablet"),
                              "large-news-desktop": unref($viewport).isGreaterOrEquals("tablet")
                            }
                          }, {
                            default: withCtx(() => [
                              unref(isLoading) ? (openBlock(), createBlock(_component_ElSkeleton, {
                                key: 0,
                                animated: ""
                              }, {
                                template: withCtx(() => [
                                  createVNode(_component_ElSkeletonItem, {
                                    variant: "image",
                                    style: `border-radius: 4px; ${unref($viewport).isLessThan("tablet") ? "height: 30dvh" : "height: 40dvh"}`
                                  }, null, 8, ["style"]),
                                  unref($viewport).isLessThan("tablet") ? (openBlock(), createBlock(_component_ElSkeletonItem, {
                                    key: 0,
                                    variant: "image",
                                    style: { "border-radius": "4px", "height": "30dvh", "margin-top": "12px" }
                                  })) : createCommentVNode("", true),
                                  unref($viewport).isLessThan("tablet") ? (openBlock(), createBlock(_component_ElSkeletonItem, {
                                    key: 1,
                                    variant: "image",
                                    style: { "border-radius": "4px", "height": "30dvh", "margin-top": "12px" }
                                  })) : createCommentVNode("", true)
                                ]),
                                _: 1
                              })) : (openBlock(), createBlock(Fragment, { key: 1 }, [
                                unref(tab) === "portal" ? (openBlock(), createBlock(NewsWidget, {
                                  key: 0,
                                  news: unref(data)[0]
                                }, null, 8, ["news"])) : unref(tab) === "jobs" ? (openBlock(), createBlock(JobWidget, {
                                  key: 1,
                                  job: unref(data)[0]
                                }, null, 8, ["job"])) : unref(tab) === "webshop" ? (openBlock(), createBlock(ProductWidget, {
                                  key: 2,
                                  product: unref(data)[0]
                                }, null, 8, ["product"])) : createCommentVNode("", true)
                              ], 64))
                            ]),
                            _: 1
                          }, 8, ["span", "class"]),
                          createVNode(_component_ElCol, {
                            span: unref($viewport).isLessThan("tablet") ? 24 : 10,
                            class: "small-news-container"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_ElRow, {
                                class: "small-news-row",
                                gutter: 12
                              }, {
                                default: withCtx(() => [
                                  unref(isLoading) && unref($viewport).isGreaterOrEquals("tablet") ? (openBlock(), createBlock(_component_ElSkeleton, {
                                    key: 0,
                                    animated: ""
                                  }, {
                                    template: withCtx(() => [
                                      createVNode(_component_ElSkeletonItem, {
                                        variant: "image",
                                        style: { "border-radius": "4px", "width": "100%", "height": "calc(20dvh - 3px)" }
                                      })
                                    ]),
                                    _: 1
                                  })) : !unref(isLoading) && unref(data) ? (openBlock(), createBlock(Fragment, { key: 1 }, [
                                    unref(tab) === "portal" ? (openBlock(), createBlock(NewsWidget, {
                                      key: 0,
                                      news: unref(data)[1],
                                      class: ["small-news", { "mx-6 mt-8": unref($viewport).isLessThan("tablet") }]
                                    }, null, 8, ["news", "class"])) : unref(tab) === "jobs" ? (openBlock(), createBlock(JobWidget, {
                                      key: 1,
                                      job: unref(data)[1],
                                      class: ["small-news", { "mx-6 mt-8": unref($viewport).isLessThan("tablet") }]
                                    }, null, 8, ["job", "class"])) : unref(tab) === "webshop" ? (openBlock(), createBlock(ProductWidget, {
                                      key: 2,
                                      product: unref(data)[1],
                                      class: ["small-news", { "mx-6 mt-8": unref($viewport).isLessThan("tablet") }]
                                    }, null, 8, ["product", "class"])) : createCommentVNode("", true)
                                  ], 64)) : createCommentVNode("", true)
                                ]),
                                _: 1
                              }),
                              createVNode(_component_ElRow, {
                                class: "small-news-row mt-6",
                                gutter: 12
                              }, {
                                default: withCtx(() => [
                                  unref(isLoading) && unref($viewport).isGreaterOrEquals("tablet") ? (openBlock(), createBlock(_component_ElSkeleton, {
                                    key: 0,
                                    animated: ""
                                  }, {
                                    template: withCtx(() => [
                                      createVNode(_component_ElSkeletonItem, {
                                        variant: "image",
                                        style: { "border-radius": "4px", "width": "100%", "height": "calc(20dvh - 3px)" }
                                      })
                                    ]),
                                    _: 1
                                  })) : !unref(isLoading) && unref(data) ? (openBlock(), createBlock(Fragment, { key: 1 }, [
                                    unref(tab) === "portal" ? (openBlock(), createBlock(NewsWidget, {
                                      key: 0,
                                      news: unref(data)[2],
                                      class: ["small-news", { "mx-6": unref($viewport).isLessThan("tablet") }]
                                    }, null, 8, ["news", "class"])) : unref(tab) === "jobs" ? (openBlock(), createBlock(JobWidget, {
                                      key: 1,
                                      job: unref(data)[2],
                                      class: ["small-news", { "mx-6": unref($viewport).isLessThan("tablet") }]
                                    }, null, 8, ["job", "class"])) : unref(tab) === "webshop" ? (openBlock(), createBlock(ProductWidget, {
                                      key: 2,
                                      product: unref(data)[2],
                                      class: ["small-news", { "mx-6": unref($viewport).isLessThan("tablet") }]
                                    }, null, 8, ["product", "class"])) : createCommentVNode("", true)
                                  ], 64)) : createCommentVNode("", true)
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }, 8, ["span"])
                        ]),
                        _: 1
                      }, 8, ["style"])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["span"]),
              !unref(comsLoading) && ((_f = unref(comSettings)[0]) == null ? void 0 : _f.show) && unref($viewport).isGreaterThan("tablet") ? (openBlock(), createBlock(_component_ElCol, {
                key: 1,
                span: 5
              }, {
                default: withCtx(() => {
                  var _a3;
                  return [
                    createVNode(ComWidget, {
                      class: "side-com",
                      com: (_a3 = unref(dashboardSide)) == null ? void 0 : _a3.right
                    }, null, 8, ["com"])
                  ];
                }),
                _: 1
              })) : createCommentVNode("", true)
            ];
          }
        }),
        _: 1
      }, _parent));
      if (!unref(comsLoading) && ((_a = unref(comSettings)[0]) == null ? void 0 : _a.show) && unref($viewport).isLessOrEquals("tablet")) {
        _push(`<div${ssrRenderAttr("span", 5)} class="mb-24" data-v-33460fb6>`);
        _push(ssrRenderComponent(_component_ElDivider, null, null, _parent));
        _push(ssrRenderComponent(_component_ElRow, {
          class: "mt-24",
          gutter: 12
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_ElCol, {
                span: unref($viewport).isLessThan("mobileWide") ? 24 : 12
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  var _a2, _b;
                  if (_push3) {
                    _push3(ssrRenderComponent(ComWidget, {
                      class: "side-com",
                      com: (_a2 = unref(dashboardSide)) == null ? void 0 : _a2.left
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(ComWidget, {
                        class: "side-com",
                        com: (_b = unref(dashboardSide)) == null ? void 0 : _b.left
                      }, null, 8, ["com"])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_ElCol, {
                span: unref($viewport).isLessThan("mobileWide") ? 24 : 12,
                class: { "mt-8": unref($viewport).isLessThan("mobileWide") }
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  var _a2, _b;
                  if (_push3) {
                    _push3(ssrRenderComponent(ComWidget, {
                      class: "side-com",
                      com: (_a2 = unref(dashboardSide)) == null ? void 0 : _a2.right
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(ComWidget, {
                        class: "side-com",
                        com: (_b = unref(dashboardSide)) == null ? void 0 : _b.right
                      }, null, 8, ["com"])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_ElCol, {
                  span: unref($viewport).isLessThan("mobileWide") ? 24 : 12
                }, {
                  default: withCtx(() => {
                    var _a2;
                    return [
                      createVNode(ComWidget, {
                        class: "side-com",
                        com: (_a2 = unref(dashboardSide)) == null ? void 0 : _a2.left
                      }, null, 8, ["com"])
                    ];
                  }),
                  _: 1
                }, 8, ["span"]),
                createVNode(_component_ElCol, {
                  span: unref($viewport).isLessThan("mobileWide") ? 24 : 12,
                  class: { "mt-8": unref($viewport).isLessThan("mobileWide") }
                }, {
                  default: withCtx(() => {
                    var _a2;
                    return [
                      createVNode(ComWidget, {
                        class: "side-com",
                        com: (_a2 = unref(dashboardSide)) == null ? void 0 : _a2.right
                      }, null, 8, ["com"])
                    ];
                  }),
                  _: 1
                }, 8, ["span", "class"])
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/dashboard/DashboardCategorizedNews.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const __nuxt_component_5 = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["__scopeId", "data-v-33460fb6"]]);
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "DashboardInfoCard",
  __ssrInlineRender: true,
  props: {
    cardInfo: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ElCard = ElCard;
      const _component_ElIcon = ElIcon;
      _push(ssrRenderComponent(_component_ElCard, mergeProps({ class: "info-card" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="info-card-header" data-v-b457cc08${_scopeId}>`);
            _push2(ssrRenderComponent(_component_ElIcon, {
              size: "24",
              class: "color-primary"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  ssrRenderVNode(_push3, createVNode(resolveDynamicComponent(_ctx.cardInfo.icon), null, null), _parent3, _scopeId2);
                } else {
                  return [
                    (openBlock(), createBlock(resolveDynamicComponent(_ctx.cardInfo.icon)))
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<span class="info-card-title" data-v-b457cc08${_scopeId}>${ssrInterpolate(_ctx.cardInfo.title)}</span></div><!--[-->`);
            ssrRenderList(_ctx.cardInfo.infos, (info) => {
              _push2(`<p data-v-b457cc08${_scopeId}>${ssrInterpolate(info)}</p>`);
            });
            _push2(`<!--]-->`);
          } else {
            return [
              createVNode("div", { class: "info-card-header" }, [
                createVNode(_component_ElIcon, {
                  size: "24",
                  class: "color-primary"
                }, {
                  default: withCtx(() => [
                    (openBlock(), createBlock(resolveDynamicComponent(_ctx.cardInfo.icon)))
                  ]),
                  _: 1
                }),
                createVNode("span", { class: "info-card-title" }, toDisplayString(_ctx.cardInfo.title), 1)
              ]),
              (openBlock(true), createBlock(Fragment, null, renderList(_ctx.cardInfo.infos, (info) => {
                return openBlock(), createBlock("p", null, toDisplayString(info), 1);
              }), 256))
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/dashboard/DashboardInfoCard.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const DashboardInfoCard = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["__scopeId", "data-v-b457cc08"]]);
const _sfc_main$4 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    width: "800",
    height: "800",
    viewBox: "0 0 800 800",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, _attrs))}><g><path d="M400 0C179.232 0 0 179.232 0 400C0 620.768 179.232 800 400 800C620.368 800 799.288 621.408 799.936 401.184C799.977 400.791 799.998 400.395 800 400C800 399.644 799.984 399.289 799.952 398.936C799.376 178.656 620.416 0 400 0ZM400 24C422.208 24 443.92 26.032 465.064 29.72C470.168 40.888 497.888 43.288 468.504 41.328C457.176 57.488 412.352 24.344 382.504 41.704C373.552 54.312 316.904 67.88 338.184 88.328C368.48 82.832 334.848 87.792 335.752 102.832C320.264 108.192 298.264 133.792 298.576 107.592C294.736 88.408 315.872 70.736 281.656 85.112C279.776 95.56 228.264 115.672 254.032 120.296C281.128 106.696 243.208 141.88 274.752 128C253.224 137.76 269.552 148.408 259.672 169.92C224.848 153.64 208.8 184.496 201.512 214.08C209.768 214.856 212.568 219.168 211.768 224.32C215.944 224.728 221.848 225.304 224.512 225.544C241.976 224.208 258.056 212.76 266.392 196.08C286.256 180.936 302.512 172.24 326.576 173.376C315.032 171.416 299.632 222.032 323.032 202.872C312.968 159.952 367.672 207.016 355.688 207.28C335.584 210.256 329.128 215.408 346.44 229.92C358.496 239.096 365.904 194.784 380.64 202.504C378.68 194.064 344.216 166.904 349.312 168.328C350.488 168.656 353.768 170.52 360.048 174.472C388.416 183.4 383.768 219.992 409.528 232.856C427.448 256.16 455.176 219.344 474.768 230.512C475.44 245.888 492.784 244.328 492.112 227.856C511.672 242.832 490.032 279.752 462.872 264.984C437.08 279.848 400.208 229.68 384.592 267.736C377.632 285.688 353.8 253.84 343.936 253.16C309.496 256.976 342.56 219.496 318.704 215.48C287.96 215.216 256.328 228.12 226.72 226.2C210.616 231.152 200.512 237.76 190.888 243.704C181.648 257.496 163.488 267.336 144.808 293.736C141.384 299.016 135.432 305.56 128.344 313.496C118.648 346.48 106.768 379.496 108.64 413.816C129.784 436.12 134.744 489.992 176.28 485.72C203.72 499.896 224.504 475.416 250.232 483.64C254.976 510.368 305.152 499.24 291.624 526C277.504 557.968 318.768 573.384 325.512 602.48C343.128 631.568 298.936 661.888 334.424 686.92C354.072 719.48 376.84 768.944 423.864 749.704C460.448 747.36 482.824 716.504 505.672 695.456C503.6 656.848 573.344 661.056 557.736 611.968C548.536 606.176 558.312 582.968 553.256 574.752C558.488 563.992 576.92 533.344 594.752 518.344C622.088 497.144 633.552 463.976 642.576 431.888C636.992 404.904 624.256 431.312 608.032 430.168C564.864 446.176 609.048 411.608 625.296 401.768C648.224 388.256 670.528 365.208 675.576 340.648C696.824 317.688 624.272 295.384 669.856 302.888C698.68 297.264 713.464 293.84 720.84 321.44C749.08 332.608 746.832 383.784 762.736 411.656C770.976 401.496 767.68 409.392 771.184 421.608C780.384 395.232 761 352.728 767.024 318.44C772.97 345.22 775.98 372.568 776 400C776 607.8 607.8 776 400 776C192.2 776 24 607.8 24 400C24 238.448 125.68 100.88 268.56 47.624C282.432 43.656 296.32 39.728 309.904 34.92C339.387 27.6674 369.638 24.0008 400 24C400 24 400 24 400 24ZM482.344 33.144C486.336 34.024 490.344 34.888 494.28 35.904C493.368 41.944 488.296 38.2 482.344 33.144ZM281.344 49.752C272.16 49.92 261.688 53.328 264.408 61.84C269.448 63.696 274.688 62.32 279.624 61.112C302.84 54.648 293.152 49.528 281.344 49.752ZM394.248 79.816C406.472 78.016 394.928 113.28 376 104.184C344.976 107.392 380.672 102.224 381.8 87.984C387.352 82.624 391.432 80.224 394.248 79.816ZM566.168 149.64C568.488 149.92 569.192 152.744 565.984 159.472C563.368 168.096 605.424 196.024 602.816 213.816C565.472 223.616 588.816 187.208 564.496 179.8C537.8 170.96 559.216 148.816 566.176 149.64C566.176 149.64 566.168 149.64 566.168 149.64ZM457.856 156.624C471.728 175.208 493.376 160.632 513.592 175.72C538.328 200.68 474.6 172.44 463.528 186.832C430.48 197 446.704 166.752 457.856 156.624C457.856 156.624 457.856 156.624 457.856 156.624ZM134.688 270.032C132.336 269.68 130.408 271.312 128.704 277.952C134.384 278.248 138.624 278.888 141.672 279.856C141.672 279.856 143.528 274.112 143.528 274.112C139.984 272.832 137.104 270.392 134.688 270.032C134.688 270.032 134.688 270.032 134.688 270.032ZM601.72 274.096C607.16 292.968 649.44 289.976 639.2 307.656C639.2 307.656 634.376 311.064 634.376 311.064C626.12 305.664 591.776 282.904 601.72 274.096ZM501.424 298.32C520.928 311.624 534.904 338.88 547.376 360.24C564.512 372.432 565.056 392.024 576.176 407.432C571.632 413.192 562.752 402.688 560.936 398.952C546.08 388.56 533.816 362.152 523.312 341.056C516.712 326.432 500.608 313.096 501.424 298.32ZM618.112 609.552C616.336 609.432 613.632 611.512 609.816 616.744C582.272 637.04 560.408 661.192 558.776 696.024C577.856 704.696 594.024 669.744 604.28 657.544C616.032 651.856 625.792 610.072 618.112 609.552C618.112 609.552 618.112 609.552 618.112 609.552Z" fill="currentColor"></path></g></svg>`);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("assets/icons/earth.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const EarthIcon = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main$3 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    width: "800",
    height: "800",
    viewBox: "0 0 800 800",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, _attrs))}><g><path d="M533.333 0C570.153 0 600 29.8477 600 66.6667C600 66.6667 600 400 600 400C600 436.82 570.153 466.667 533.333 466.667C533.333 466.667 66.6667 466.667 66.6667 466.667C29.8477 466.667 0 436.82 0 400C0 400 0 66.6667 0 66.6667C0 29.8477 29.8477 0 66.6667 0C66.6667 0 533.333 0 533.333 0Z" fill="none" stroke-width="67" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" transform="translate(100 166.667)"></path><path d="M0 200C0 200 0 66.6667 0 66.6667C0 29.8477 29.8477 0 66.6667 0C66.6667 0 66.6667 0 66.6667 0C103.487 0 133.333 29.8477 133.333 66.6667C133.333 66.6667 133.333 200 133.333 200" fill="none" stroke-width="67" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" transform="translate(233.333 300)"></path><path d="M0 0L0 200" fill="none" stroke-width="67" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" transform="translate(566.667 300)"></path><path d="M100 0C100 0 50 0 50 0C-16.6667 0 -16.6667 100 50 100C50 100 100 100 100 100" fill="none" stroke-width="67" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" transform="translate(466.667 400)"></path><path d="M0 0L133.333 0" fill="none" stroke-width="67" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" transform="translate(233.333 433.333)"></path></g></svg>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("assets/icons/ad.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const AdIcon = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "DashboardInfoCardContainer",
  __ssrInlineRender: true,
  setup(__props) {
    const infoCardsData = [
      {
        title: "Informativni sadr\u017Eaj za dijasporu",
        infos: [
          "Vodi\u010Di za \u017Eivot i rad u Njema\u010Dkoj (stanovanje, zdravstvo, administracija)",
          "Prava radnika, ugovori, osiguranja, prijava boravka",
          "Obavijesti o zakonima, promjenama i novostima koje utje\u010Du na strance"
        ],
        icon: EarthIcon
      },
      {
        title: "Oglasi i promocija",
        infos: [
          "Poslovni oglasi (auto saloni, servisi, kafi\u0107i, firme koje tra\u017Ee radnike)",
          "Privatni oglasi (kupoprodaja auta, stanova, tra\u017Eenje posla/sobe)",
          "Digitalni marketing za firme u dijaspori ili iz regije koje ciljaju tu klijentelu"
        ],
        icon: promotion_default
      },
      {
        title: "Zajednica i mre\u017Ea",
        infos: [
          "Povezivanje ljudi (pomo\u0107 novoprido\u0161lima, dijeljenje iskustava)",
          "Grupe podr\u0161ke \u2013 posebno za \u017Eene, samohrane roditelje, studente, radnike",
          "Organizacija doga\u0111anja, turnira, okupljanja"
        ],
        icon: connection_default
      },
      {
        title: "Zabavni i viralni sadr\u017Eaj",
        infos: [
          "Meme, ske\u010Devi, TikTok videi iz dijaspore",
          "Balkanski humor u kontekstu \u017Eivota vani",
          'Ankete, komentari, klipovi s "bau\u0161tele" ili svakodnevice u Njema\u010Dkoj'
        ],
        icon: picture_default
      },
      {
        title: "Kanal kao platforma za monetizaciju",
        infos: [
          "Napla\u0107eni oglasi (mjese\u010Dne objave, video promid\u017Eba, istaknute objave)",
          "Affiliate marketing (preporuke usluga poput transfera novca, slanja paketa)",
          "Suradnje s firmama iz regije koje tra\u017Ee pristup dijaspori"
        ],
        icon: share_default
      },
      {
        title: "Platforma za nostrifikaciju i priznavanje diploma",
        infos: [
          "Za\u0161to: mnogi se mu\u010De s priznavanjem kvalifikacija u Njema\u010Dkoj",
          'Kako: Detaljni vodi\u010Di + automatizirani "step-by-step" asistenti po zanimanju i pokrajini povezanost s prevoditeljima i agencijama'
        ],
        icon: document_checked_default
      },
      {
        title: "Dijaspora Invest",
        infos: [
          "Platforma za ulaganje u domovinu",
          "Za\u0161to: Mnogi \u017Eele investirati u domovinu, ali ne znaju gdje i kako",
          "Kako: Projekt koji mapira sigurne projekte, nekretnine, startupe u BiH, Srbiji, Hrvatskoj i ostalima \u2013 s ocjenama, iskustvima i verifikacijom"
        ],
        icon: money_default
      },
      {
        title: "Reklamiranje",
        infos: [
          "Reklamiranje na na\u0161oj platformi",
          "Objava svojih oglasa, proizvoda ili reklama na na\u0161u web stranicu",
          'Dostupno pod uslugama "Poslovi", "Webshop" i "Reklamiranje"'
        ],
        icon: AdIcon
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ElDivider = ElDivider;
      const _component_ElRow = ElRow;
      const _component_ElCol = ElCol;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "mb-12" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_ElDivider, { style: { "padding-top": "24px" } }, null, _parent));
      _push(ssrRenderComponent(_component_ElRow, {
        justify: "center",
        align: "middle",
        gutter: 12
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(infoCardsData, (info) => {
              _push2(ssrRenderComponent(_component_ElCol, {
                span: _ctx.$viewport.isLessThan("tablet") ? 24 : _ctx.$viewport.isLessThan("desktopMedium") ? 8 : 6
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(DashboardInfoCard, { "card-info": info }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(DashboardInfoCard, { "card-info": info }, null, 8, ["card-info"])
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(), createBlock(Fragment, null, renderList(infoCardsData, (info) => {
                return createVNode(_component_ElCol, {
                  span: _ctx.$viewport.isLessThan("tablet") ? 24 : _ctx.$viewport.isLessThan("desktopMedium") ? 8 : 6
                }, {
                  default: withCtx(() => [
                    createVNode(DashboardInfoCard, { "card-info": info }, null, 8, ["card-info"])
                  ]),
                  _: 2
                }, 1032, ["span"]);
              }), 64))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/dashboard/DashboardInfoCardContainer.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "DashboardPage",
  __ssrInlineRender: true,
  setup(__props) {
    const { $viewport, $axios } = useNuxtApp();
    const comStore = useComStore();
    const { comSettings } = storeToRefs(comStore);
    const isLoading = ref(true);
    const newestLargeNews = ref();
    const newestSmallNews = ref();
    const categorizedNews = ref();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ElSkeleton = ElSkeleton;
      const _component_ElRow = ElRow;
      const _component_ElCol = ElCol;
      const _component_ElSkeletonItem = ElSkeletonItem;
      const _component_ElDivider = ElDivider;
      const _component_DashboardCategorizedNews = __nuxt_component_5;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "page-container" }, _attrs))} data-v-908a3805>`);
      if (unref(isLoading)) {
        _push(ssrRenderComponent(_component_ElSkeleton, { animated: "" }, {
          template: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_ElRow, {
                gutter: 12,
                class: "mb-24"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<!--[-->`);
                    ssrRenderList(3, (_3) => {
                      _push3(ssrRenderComponent(_component_ElCol, {
                        xs: 24,
                        sm: 8,
                        class: ["news-container", { "mt-12": unref($viewport).isLessOrEquals("tablet") }]
                      }, {
                        default: withCtx((_4, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(ssrRenderComponent(_component_ElSkeletonItem, {
                              variant: "image",
                              style: { "height": "100%", "border-radius": "4px" }
                            }, null, _parent4, _scopeId3));
                          } else {
                            return [
                              createVNode(_component_ElSkeletonItem, {
                                variant: "image",
                                style: { "height": "100%", "border-radius": "4px" }
                              })
                            ];
                          }
                        }),
                        _: 2
                      }, _parent3, _scopeId2));
                    });
                    _push3(`<!--]--><!--[-->`);
                    ssrRenderList(4, (_3) => {
                      _push3(ssrRenderComponent(_component_ElCol, {
                        xs: 24,
                        sm: 6,
                        class: "news-container mt-12"
                      }, {
                        default: withCtx((_4, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(ssrRenderComponent(_component_ElSkeletonItem, {
                              variant: "image",
                              style: { "height": "100%", "border-radius": "4px" }
                            }, null, _parent4, _scopeId3));
                          } else {
                            return [
                              createVNode(_component_ElSkeletonItem, {
                                variant: "image",
                                style: { "height": "100%", "border-radius": "4px" }
                              })
                            ];
                          }
                        }),
                        _: 2
                      }, _parent3, _scopeId2));
                    });
                    _push3(`<!--]-->`);
                  } else {
                    return [
                      (openBlock(), createBlock(Fragment, null, renderList(3, (_3) => {
                        return createVNode(_component_ElCol, {
                          xs: 24,
                          sm: 8,
                          class: ["news-container", { "mt-12": unref($viewport).isLessOrEquals("tablet") }]
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_ElSkeletonItem, {
                              variant: "image",
                              style: { "height": "100%", "border-radius": "4px" }
                            })
                          ]),
                          _: 1
                        }, 8, ["class"]);
                      }), 64)),
                      (openBlock(), createBlock(Fragment, null, renderList(4, (_3) => {
                        return createVNode(_component_ElCol, {
                          xs: 24,
                          sm: 6,
                          class: "news-container mt-12"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_ElSkeletonItem, {
                              variant: "image",
                              style: { "height": "100%", "border-radius": "4px" }
                            })
                          ]),
                          _: 1
                        });
                      }), 64))
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_sfc_main$2, null, null, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_ElDivider, null, null, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_ElRow, { justify: "center" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<h3 class="color-primary" data-v-908a3805${_scopeId2}>Najnovije</h3>`);
                  } else {
                    return [
                      createVNode("h3", { class: "color-primary" }, "Najnovije")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_ElRow, {
                gutter: 24,
                class: "mb-24",
                style: `${unref($viewport).match("tablet") ? "margin-left: -9px; margin-right: -9px" : unref($viewport).isLessThan("tablet") ? "margin-left: -6px; margin-right: -18px" : void 0}`
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    if (unref($viewport).isGreaterThan("tablet")) {
                      _push3(ssrRenderComponent(_component_ElCol, { span: 5 }, {
                        default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(ssrRenderComponent(_component_ElSkeletonItem, {
                              variant: "image",
                              style: { "height": "100%", "border-radius": "4px" }
                            }, null, _parent4, _scopeId3));
                          } else {
                            return [
                              createVNode(_component_ElSkeletonItem, {
                                variant: "image",
                                style: { "height": "100%", "border-radius": "4px" }
                              })
                            ];
                          }
                        }),
                        _: 1
                      }, _parent3, _scopeId2));
                    } else {
                      _push3(`<!---->`);
                    }
                    _push3(ssrRenderComponent(_component_ElCol, {
                      span: unref($viewport).isLessOrEquals("tablet") ? 24 : 14
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_ElRow, { gutter: 12 }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(_component_ElRow, {
                                  gutter: 12,
                                  justify: "center",
                                  class: "w-100"
                                }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(ssrRenderComponent(_component_ElSkeletonItem, {
                                        variant: "text",
                                        style: { "height": "40px", "width": "296px", "border-radius": "4px", "margin-bottom": "14px" }
                                      }, null, _parent6, _scopeId5));
                                    } else {
                                      return [
                                        createVNode(_component_ElSkeletonItem, {
                                          variant: "text",
                                          style: { "height": "40px", "width": "296px", "border-radius": "4px", "margin-bottom": "14px" }
                                        })
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent5, _scopeId4));
                                _push5(ssrRenderComponent(_component_ElRow, {
                                  class: "w-100",
                                  style: `${unref($viewport).isGreaterOrEquals("tablet") ? "margin-left: -3px" : void 0}`,
                                  gutter: 12
                                }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(ssrRenderComponent(_component_ElCol, {
                                        span: unref($viewport).isLessThan("tablet") ? 24 : 14,
                                        class: {
                                          "large-news-mobile": unref($viewport).isLessThan("tablet"),
                                          "large-news-desktop": unref($viewport).isGreaterOrEquals("tablet")
                                        }
                                      }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(ssrRenderComponent(_component_ElSkeletonItem, {
                                              variant: "image",
                                              style: `border-radius: 4px; ${unref($viewport).isLessThan("tablet") ? "height: 30dvh" : "height: 40dvh"}`
                                            }, null, _parent7, _scopeId6));
                                            if (unref($viewport).isLessThan("tablet")) {
                                              _push7(ssrRenderComponent(_component_ElSkeletonItem, {
                                                variant: "image",
                                                style: { "border-radius": "4px", "height": "30dvh", "margin-top": "12px" }
                                              }, null, _parent7, _scopeId6));
                                            } else {
                                              _push7(`<!---->`);
                                            }
                                            if (unref($viewport).isLessThan("tablet")) {
                                              _push7(ssrRenderComponent(_component_ElSkeletonItem, {
                                                variant: "image",
                                                style: { "border-radius": "4px", "height": "30dvh", "margin-top": "12px" }
                                              }, null, _parent7, _scopeId6));
                                            } else {
                                              _push7(`<!---->`);
                                            }
                                          } else {
                                            return [
                                              createVNode(_component_ElSkeletonItem, {
                                                variant: "image",
                                                style: `border-radius: 4px; ${unref($viewport).isLessThan("tablet") ? "height: 30dvh" : "height: 40dvh"}`
                                              }, null, 8, ["style"]),
                                              unref($viewport).isLessThan("tablet") ? (openBlock(), createBlock(_component_ElSkeletonItem, {
                                                key: 0,
                                                variant: "image",
                                                style: { "border-radius": "4px", "height": "30dvh", "margin-top": "12px" }
                                              })) : createCommentVNode("", true),
                                              unref($viewport).isLessThan("tablet") ? (openBlock(), createBlock(_component_ElSkeletonItem, {
                                                key: 1,
                                                variant: "image",
                                                style: { "border-radius": "4px", "height": "30dvh", "margin-top": "12px" }
                                              })) : createCommentVNode("", true)
                                            ];
                                          }
                                        }),
                                        _: 1
                                      }, _parent6, _scopeId5));
                                      if (!unref($viewport).isLessThan("tablet")) {
                                        _push6(ssrRenderComponent(_component_ElCol, {
                                          span: unref($viewport).isLessThan("tablet") ? 24 : 10
                                        }, {
                                          default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                            if (_push7) {
                                              _push7(ssrRenderComponent(_component_ElRow, {
                                                class: "categorized-news",
                                                gutter: 12
                                              }, {
                                                default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                  if (_push8) {
                                                    _push8(ssrRenderComponent(_component_ElSkeletonItem, {
                                                      variant: "image",
                                                      style: { "border-radius": "4px", "width": "100%", "height": "calc(20dvh - 3px)" }
                                                    }, null, _parent8, _scopeId7));
                                                  } else {
                                                    return [
                                                      createVNode(_component_ElSkeletonItem, {
                                                        variant: "image",
                                                        style: { "border-radius": "4px", "width": "100%", "height": "calc(20dvh - 3px)" }
                                                      })
                                                    ];
                                                  }
                                                }),
                                                _: 1
                                              }, _parent7, _scopeId6));
                                              _push7(ssrRenderComponent(_component_ElRow, {
                                                class: "categorized-news mt-6",
                                                gutter: 12
                                              }, {
                                                default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                  if (_push8) {
                                                    _push8(ssrRenderComponent(_component_ElSkeletonItem, {
                                                      variant: "image",
                                                      style: { "height": "calc(20dvh - 3px)", "border-radius": "4px", "width": "100%" }
                                                    }, null, _parent8, _scopeId7));
                                                  } else {
                                                    return [
                                                      createVNode(_component_ElSkeletonItem, {
                                                        variant: "image",
                                                        style: { "height": "calc(20dvh - 3px)", "border-radius": "4px", "width": "100%" }
                                                      })
                                                    ];
                                                  }
                                                }),
                                                _: 1
                                              }, _parent7, _scopeId6));
                                            } else {
                                              return [
                                                createVNode(_component_ElRow, {
                                                  class: "categorized-news",
                                                  gutter: 12
                                                }, {
                                                  default: withCtx(() => [
                                                    createVNode(_component_ElSkeletonItem, {
                                                      variant: "image",
                                                      style: { "border-radius": "4px", "width": "100%", "height": "calc(20dvh - 3px)" }
                                                    })
                                                  ]),
                                                  _: 1
                                                }),
                                                createVNode(_component_ElRow, {
                                                  class: "categorized-news mt-6",
                                                  gutter: 12
                                                }, {
                                                  default: withCtx(() => [
                                                    createVNode(_component_ElSkeletonItem, {
                                                      variant: "image",
                                                      style: { "height": "calc(20dvh - 3px)", "border-radius": "4px", "width": "100%" }
                                                    })
                                                  ]),
                                                  _: 1
                                                })
                                              ];
                                            }
                                          }),
                                          _: 1
                                        }, _parent6, _scopeId5));
                                      } else {
                                        _push6(`<!---->`);
                                      }
                                    } else {
                                      return [
                                        createVNode(_component_ElCol, {
                                          span: unref($viewport).isLessThan("tablet") ? 24 : 14,
                                          class: {
                                            "large-news-mobile": unref($viewport).isLessThan("tablet"),
                                            "large-news-desktop": unref($viewport).isGreaterOrEquals("tablet")
                                          }
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(_component_ElSkeletonItem, {
                                              variant: "image",
                                              style: `border-radius: 4px; ${unref($viewport).isLessThan("tablet") ? "height: 30dvh" : "height: 40dvh"}`
                                            }, null, 8, ["style"]),
                                            unref($viewport).isLessThan("tablet") ? (openBlock(), createBlock(_component_ElSkeletonItem, {
                                              key: 0,
                                              variant: "image",
                                              style: { "border-radius": "4px", "height": "30dvh", "margin-top": "12px" }
                                            })) : createCommentVNode("", true),
                                            unref($viewport).isLessThan("tablet") ? (openBlock(), createBlock(_component_ElSkeletonItem, {
                                              key: 1,
                                              variant: "image",
                                              style: { "border-radius": "4px", "height": "30dvh", "margin-top": "12px" }
                                            })) : createCommentVNode("", true)
                                          ]),
                                          _: 1
                                        }, 8, ["span", "class"]),
                                        !unref($viewport).isLessThan("tablet") ? (openBlock(), createBlock(_component_ElCol, {
                                          key: 0,
                                          span: unref($viewport).isLessThan("tablet") ? 24 : 10
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(_component_ElRow, {
                                              class: "categorized-news",
                                              gutter: 12
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(_component_ElSkeletonItem, {
                                                  variant: "image",
                                                  style: { "border-radius": "4px", "width": "100%", "height": "calc(20dvh - 3px)" }
                                                })
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(_component_ElRow, {
                                              class: "categorized-news mt-6",
                                              gutter: 12
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(_component_ElSkeletonItem, {
                                                  variant: "image",
                                                  style: { "height": "calc(20dvh - 3px)", "border-radius": "4px", "width": "100%" }
                                                })
                                              ]),
                                              _: 1
                                            })
                                          ]),
                                          _: 1
                                        }, 8, ["span"])) : createCommentVNode("", true)
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(_component_ElRow, {
                                    gutter: 12,
                                    justify: "center",
                                    class: "w-100"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_ElSkeletonItem, {
                                        variant: "text",
                                        style: { "height": "40px", "width": "296px", "border-radius": "4px", "margin-bottom": "14px" }
                                      })
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_ElRow, {
                                    class: "w-100",
                                    style: `${unref($viewport).isGreaterOrEquals("tablet") ? "margin-left: -3px" : void 0}`,
                                    gutter: 12
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_ElCol, {
                                        span: unref($viewport).isLessThan("tablet") ? 24 : 14,
                                        class: {
                                          "large-news-mobile": unref($viewport).isLessThan("tablet"),
                                          "large-news-desktop": unref($viewport).isGreaterOrEquals("tablet")
                                        }
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_component_ElSkeletonItem, {
                                            variant: "image",
                                            style: `border-radius: 4px; ${unref($viewport).isLessThan("tablet") ? "height: 30dvh" : "height: 40dvh"}`
                                          }, null, 8, ["style"]),
                                          unref($viewport).isLessThan("tablet") ? (openBlock(), createBlock(_component_ElSkeletonItem, {
                                            key: 0,
                                            variant: "image",
                                            style: { "border-radius": "4px", "height": "30dvh", "margin-top": "12px" }
                                          })) : createCommentVNode("", true),
                                          unref($viewport).isLessThan("tablet") ? (openBlock(), createBlock(_component_ElSkeletonItem, {
                                            key: 1,
                                            variant: "image",
                                            style: { "border-radius": "4px", "height": "30dvh", "margin-top": "12px" }
                                          })) : createCommentVNode("", true)
                                        ]),
                                        _: 1
                                      }, 8, ["span", "class"]),
                                      !unref($viewport).isLessThan("tablet") ? (openBlock(), createBlock(_component_ElCol, {
                                        key: 0,
                                        span: unref($viewport).isLessThan("tablet") ? 24 : 10
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_component_ElRow, {
                                            class: "categorized-news",
                                            gutter: 12
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(_component_ElSkeletonItem, {
                                                variant: "image",
                                                style: { "border-radius": "4px", "width": "100%", "height": "calc(20dvh - 3px)" }
                                              })
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(_component_ElRow, {
                                            class: "categorized-news mt-6",
                                            gutter: 12
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(_component_ElSkeletonItem, {
                                                variant: "image",
                                                style: { "height": "calc(20dvh - 3px)", "border-radius": "4px", "width": "100%" }
                                              })
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 1
                                      }, 8, ["span"])) : createCommentVNode("", true)
                                    ]),
                                    _: 1
                                  }, 8, ["style"])
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(_component_ElRow, { gutter: 12 }, {
                              default: withCtx(() => [
                                createVNode(_component_ElRow, {
                                  gutter: 12,
                                  justify: "center",
                                  class: "w-100"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_ElSkeletonItem, {
                                      variant: "text",
                                      style: { "height": "40px", "width": "296px", "border-radius": "4px", "margin-bottom": "14px" }
                                    })
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_ElRow, {
                                  class: "w-100",
                                  style: `${unref($viewport).isGreaterOrEquals("tablet") ? "margin-left: -3px" : void 0}`,
                                  gutter: 12
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_ElCol, {
                                      span: unref($viewport).isLessThan("tablet") ? 24 : 14,
                                      class: {
                                        "large-news-mobile": unref($viewport).isLessThan("tablet"),
                                        "large-news-desktop": unref($viewport).isGreaterOrEquals("tablet")
                                      }
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(_component_ElSkeletonItem, {
                                          variant: "image",
                                          style: `border-radius: 4px; ${unref($viewport).isLessThan("tablet") ? "height: 30dvh" : "height: 40dvh"}`
                                        }, null, 8, ["style"]),
                                        unref($viewport).isLessThan("tablet") ? (openBlock(), createBlock(_component_ElSkeletonItem, {
                                          key: 0,
                                          variant: "image",
                                          style: { "border-radius": "4px", "height": "30dvh", "margin-top": "12px" }
                                        })) : createCommentVNode("", true),
                                        unref($viewport).isLessThan("tablet") ? (openBlock(), createBlock(_component_ElSkeletonItem, {
                                          key: 1,
                                          variant: "image",
                                          style: { "border-radius": "4px", "height": "30dvh", "margin-top": "12px" }
                                        })) : createCommentVNode("", true)
                                      ]),
                                      _: 1
                                    }, 8, ["span", "class"]),
                                    !unref($viewport).isLessThan("tablet") ? (openBlock(), createBlock(_component_ElCol, {
                                      key: 0,
                                      span: unref($viewport).isLessThan("tablet") ? 24 : 10
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(_component_ElRow, {
                                          class: "categorized-news",
                                          gutter: 12
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(_component_ElSkeletonItem, {
                                              variant: "image",
                                              style: { "border-radius": "4px", "width": "100%", "height": "calc(20dvh - 3px)" }
                                            })
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(_component_ElRow, {
                                          class: "categorized-news mt-6",
                                          gutter: 12
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(_component_ElSkeletonItem, {
                                              variant: "image",
                                              style: { "height": "calc(20dvh - 3px)", "border-radius": "4px", "width": "100%" }
                                            })
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 1
                                    }, 8, ["span"])) : createCommentVNode("", true)
                                  ]),
                                  _: 1
                                }, 8, ["style"])
                              ]),
                              _: 1
                            })
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    if (unref($viewport).isGreaterThan("tablet")) {
                      _push3(ssrRenderComponent(_component_ElCol, { span: 5 }, {
                        default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(ssrRenderComponent(_component_ElSkeletonItem, {
                              variant: "image",
                              style: { "height": "100%", "border-radius": "4px" }
                            }, null, _parent4, _scopeId3));
                          } else {
                            return [
                              createVNode(_component_ElSkeletonItem, {
                                variant: "image",
                                style: { "height": "100%", "border-radius": "4px" }
                              })
                            ];
                          }
                        }),
                        _: 1
                      }, _parent3, _scopeId2));
                    } else {
                      _push3(`<!---->`);
                    }
                  } else {
                    return [
                      unref($viewport).isGreaterThan("tablet") ? (openBlock(), createBlock(_component_ElCol, {
                        key: 0,
                        span: 5
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_ElSkeletonItem, {
                            variant: "image",
                            style: { "height": "100%", "border-radius": "4px" }
                          })
                        ]),
                        _: 1
                      })) : createCommentVNode("", true),
                      createVNode(_component_ElCol, {
                        span: unref($viewport).isLessOrEquals("tablet") ? 24 : 14
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_ElRow, { gutter: 12 }, {
                            default: withCtx(() => [
                              createVNode(_component_ElRow, {
                                gutter: 12,
                                justify: "center",
                                class: "w-100"
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_ElSkeletonItem, {
                                    variant: "text",
                                    style: { "height": "40px", "width": "296px", "border-radius": "4px", "margin-bottom": "14px" }
                                  })
                                ]),
                                _: 1
                              }),
                              createVNode(_component_ElRow, {
                                class: "w-100",
                                style: `${unref($viewport).isGreaterOrEquals("tablet") ? "margin-left: -3px" : void 0}`,
                                gutter: 12
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_ElCol, {
                                    span: unref($viewport).isLessThan("tablet") ? 24 : 14,
                                    class: {
                                      "large-news-mobile": unref($viewport).isLessThan("tablet"),
                                      "large-news-desktop": unref($viewport).isGreaterOrEquals("tablet")
                                    }
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_ElSkeletonItem, {
                                        variant: "image",
                                        style: `border-radius: 4px; ${unref($viewport).isLessThan("tablet") ? "height: 30dvh" : "height: 40dvh"}`
                                      }, null, 8, ["style"]),
                                      unref($viewport).isLessThan("tablet") ? (openBlock(), createBlock(_component_ElSkeletonItem, {
                                        key: 0,
                                        variant: "image",
                                        style: { "border-radius": "4px", "height": "30dvh", "margin-top": "12px" }
                                      })) : createCommentVNode("", true),
                                      unref($viewport).isLessThan("tablet") ? (openBlock(), createBlock(_component_ElSkeletonItem, {
                                        key: 1,
                                        variant: "image",
                                        style: { "border-radius": "4px", "height": "30dvh", "margin-top": "12px" }
                                      })) : createCommentVNode("", true)
                                    ]),
                                    _: 1
                                  }, 8, ["span", "class"]),
                                  !unref($viewport).isLessThan("tablet") ? (openBlock(), createBlock(_component_ElCol, {
                                    key: 0,
                                    span: unref($viewport).isLessThan("tablet") ? 24 : 10
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_ElRow, {
                                        class: "categorized-news",
                                        gutter: 12
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_component_ElSkeletonItem, {
                                            variant: "image",
                                            style: { "border-radius": "4px", "width": "100%", "height": "calc(20dvh - 3px)" }
                                          })
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_ElRow, {
                                        class: "categorized-news mt-6",
                                        gutter: 12
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_component_ElSkeletonItem, {
                                            variant: "image",
                                            style: { "height": "calc(20dvh - 3px)", "border-radius": "4px", "width": "100%" }
                                          })
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  }, 8, ["span"])) : createCommentVNode("", true)
                                ]),
                                _: 1
                              }, 8, ["style"])
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }, 8, ["span"]),
                      unref($viewport).isGreaterThan("tablet") ? (openBlock(), createBlock(_component_ElCol, {
                        key: 1,
                        span: 5
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_ElSkeletonItem, {
                            variant: "image",
                            style: { "height": "100%", "border-radius": "4px" }
                          })
                        ]),
                        _: 1
                      })) : createCommentVNode("", true)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              if (unref($viewport).isLessOrEquals("tablet")) {
                _push2(`<div${ssrRenderAttr("span", 5)} class="mb-24" data-v-908a3805${_scopeId}>`);
                _push2(ssrRenderComponent(_component_ElDivider, null, null, _parent2, _scopeId));
                _push2(ssrRenderComponent(_component_ElRow, {
                  class: "mt-24",
                  gutter: 12
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(ssrRenderComponent(_component_ElCol, {
                        span: unref($viewport).isLessThan("mobileWide") ? 24 : 12
                      }, {
                        default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(ssrRenderComponent(_component_ElSkeletonItem, {
                              variant: "image",
                              style: { "height": "40dvh", "border-radius": "4px" }
                            }, null, _parent4, _scopeId3));
                          } else {
                            return [
                              createVNode(_component_ElSkeletonItem, {
                                variant: "image",
                                style: { "height": "40dvh", "border-radius": "4px" }
                              })
                            ];
                          }
                        }),
                        _: 1
                      }, _parent3, _scopeId2));
                      _push3(ssrRenderComponent(_component_ElCol, {
                        span: unref($viewport).isLessThan("mobileWide") ? 24 : 12,
                        class: { "mt-8": unref($viewport).isLessThan("mobileWide") }
                      }, {
                        default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(ssrRenderComponent(_component_ElSkeletonItem, {
                              variant: "image",
                              style: { "height": "40dvh", "border-radius": "4px" }
                            }, null, _parent4, _scopeId3));
                          } else {
                            return [
                              createVNode(_component_ElSkeletonItem, {
                                variant: "image",
                                style: { "height": "40dvh", "border-radius": "4px" }
                              })
                            ];
                          }
                        }),
                        _: 1
                      }, _parent3, _scopeId2));
                    } else {
                      return [
                        createVNode(_component_ElCol, {
                          span: unref($viewport).isLessThan("mobileWide") ? 24 : 12
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_ElSkeletonItem, {
                              variant: "image",
                              style: { "height": "40dvh", "border-radius": "4px" }
                            })
                          ]),
                          _: 1
                        }, 8, ["span"]),
                        createVNode(_component_ElCol, {
                          span: unref($viewport).isLessThan("mobileWide") ? 24 : 12,
                          class: { "mt-8": unref($viewport).isLessThan("mobileWide") }
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_ElSkeletonItem, {
                              variant: "image",
                              style: { "height": "40dvh", "border-radius": "4px" }
                            })
                          ]),
                          _: 1
                        }, 8, ["span", "class"])
                      ];
                    }
                  }),
                  _: 1
                }, _parent2, _scopeId));
                _push2(`</div>`);
              } else {
                _push2(`<!---->`);
              }
            } else {
              return [
                createVNode(_component_ElRow, {
                  gutter: 12,
                  class: "mb-24"
                }, {
                  default: withCtx(() => [
                    (openBlock(), createBlock(Fragment, null, renderList(3, (_2) => {
                      return createVNode(_component_ElCol, {
                        xs: 24,
                        sm: 8,
                        class: ["news-container", { "mt-12": unref($viewport).isLessOrEquals("tablet") }]
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_ElSkeletonItem, {
                            variant: "image",
                            style: { "height": "100%", "border-radius": "4px" }
                          })
                        ]),
                        _: 1
                      }, 8, ["class"]);
                    }), 64)),
                    (openBlock(), createBlock(Fragment, null, renderList(4, (_2) => {
                      return createVNode(_component_ElCol, {
                        xs: 24,
                        sm: 6,
                        class: "news-container mt-12"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_ElSkeletonItem, {
                            variant: "image",
                            style: { "height": "100%", "border-radius": "4px" }
                          })
                        ]),
                        _: 1
                      });
                    }), 64))
                  ]),
                  _: 1
                }),
                createVNode(_sfc_main$2),
                createVNode(_component_ElDivider),
                createVNode(_component_ElRow, { justify: "center" }, {
                  default: withCtx(() => [
                    createVNode("h3", { class: "color-primary" }, "Najnovije")
                  ]),
                  _: 1
                }),
                createVNode(_component_ElRow, {
                  gutter: 24,
                  class: "mb-24",
                  style: `${unref($viewport).match("tablet") ? "margin-left: -9px; margin-right: -9px" : unref($viewport).isLessThan("tablet") ? "margin-left: -6px; margin-right: -18px" : void 0}`
                }, {
                  default: withCtx(() => [
                    unref($viewport).isGreaterThan("tablet") ? (openBlock(), createBlock(_component_ElCol, {
                      key: 0,
                      span: 5
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_ElSkeletonItem, {
                          variant: "image",
                          style: { "height": "100%", "border-radius": "4px" }
                        })
                      ]),
                      _: 1
                    })) : createCommentVNode("", true),
                    createVNode(_component_ElCol, {
                      span: unref($viewport).isLessOrEquals("tablet") ? 24 : 14
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_ElRow, { gutter: 12 }, {
                          default: withCtx(() => [
                            createVNode(_component_ElRow, {
                              gutter: 12,
                              justify: "center",
                              class: "w-100"
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_ElSkeletonItem, {
                                  variant: "text",
                                  style: { "height": "40px", "width": "296px", "border-radius": "4px", "margin-bottom": "14px" }
                                })
                              ]),
                              _: 1
                            }),
                            createVNode(_component_ElRow, {
                              class: "w-100",
                              style: `${unref($viewport).isGreaterOrEquals("tablet") ? "margin-left: -3px" : void 0}`,
                              gutter: 12
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_ElCol, {
                                  span: unref($viewport).isLessThan("tablet") ? 24 : 14,
                                  class: {
                                    "large-news-mobile": unref($viewport).isLessThan("tablet"),
                                    "large-news-desktop": unref($viewport).isGreaterOrEquals("tablet")
                                  }
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_ElSkeletonItem, {
                                      variant: "image",
                                      style: `border-radius: 4px; ${unref($viewport).isLessThan("tablet") ? "height: 30dvh" : "height: 40dvh"}`
                                    }, null, 8, ["style"]),
                                    unref($viewport).isLessThan("tablet") ? (openBlock(), createBlock(_component_ElSkeletonItem, {
                                      key: 0,
                                      variant: "image",
                                      style: { "border-radius": "4px", "height": "30dvh", "margin-top": "12px" }
                                    })) : createCommentVNode("", true),
                                    unref($viewport).isLessThan("tablet") ? (openBlock(), createBlock(_component_ElSkeletonItem, {
                                      key: 1,
                                      variant: "image",
                                      style: { "border-radius": "4px", "height": "30dvh", "margin-top": "12px" }
                                    })) : createCommentVNode("", true)
                                  ]),
                                  _: 1
                                }, 8, ["span", "class"]),
                                !unref($viewport).isLessThan("tablet") ? (openBlock(), createBlock(_component_ElCol, {
                                  key: 0,
                                  span: unref($viewport).isLessThan("tablet") ? 24 : 10
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_ElRow, {
                                      class: "categorized-news",
                                      gutter: 12
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(_component_ElSkeletonItem, {
                                          variant: "image",
                                          style: { "border-radius": "4px", "width": "100%", "height": "calc(20dvh - 3px)" }
                                        })
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_ElRow, {
                                      class: "categorized-news mt-6",
                                      gutter: 12
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(_component_ElSkeletonItem, {
                                          variant: "image",
                                          style: { "height": "calc(20dvh - 3px)", "border-radius": "4px", "width": "100%" }
                                        })
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }, 8, ["span"])) : createCommentVNode("", true)
                              ]),
                              _: 1
                            }, 8, ["style"])
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }, 8, ["span"]),
                    unref($viewport).isGreaterThan("tablet") ? (openBlock(), createBlock(_component_ElCol, {
                      key: 1,
                      span: 5
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_ElSkeletonItem, {
                          variant: "image",
                          style: { "height": "100%", "border-radius": "4px" }
                        })
                      ]),
                      _: 1
                    })) : createCommentVNode("", true)
                  ]),
                  _: 1
                }, 8, ["style"]),
                unref($viewport).isLessOrEquals("tablet") ? (openBlock(), createBlock("div", {
                  key: 0,
                  span: 5,
                  class: "mb-24"
                }, [
                  createVNode(_component_ElDivider),
                  createVNode(_component_ElRow, {
                    class: "mt-24",
                    gutter: 12
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_ElCol, {
                        span: unref($viewport).isLessThan("mobileWide") ? 24 : 12
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_ElSkeletonItem, {
                            variant: "image",
                            style: { "height": "40dvh", "border-radius": "4px" }
                          })
                        ]),
                        _: 1
                      }, 8, ["span"]),
                      createVNode(_component_ElCol, {
                        span: unref($viewport).isLessThan("mobileWide") ? 24 : 12,
                        class: { "mt-8": unref($viewport).isLessThan("mobileWide") }
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_ElSkeletonItem, {
                            variant: "image",
                            style: { "height": "40dvh", "border-radius": "4px" }
                          })
                        ]),
                        _: 1
                      }, 8, ["span", "class"])
                    ]),
                    _: 1
                  })
                ])) : createCommentVNode("", true)
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!--[-->`);
        _push(ssrRenderComponent(_component_ElRow, {
          gutter: 12,
          class: "mb-24"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<!--[-->`);
              ssrRenderList(unref(newestLargeNews), (news) => {
                _push2(ssrRenderComponent(_component_ElCol, {
                  xs: 24,
                  sm: 8,
                  class: ["news-container", { "mt-12": unref($viewport).isLessOrEquals("tablet") }]
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(ssrRenderComponent(NewsWidget, { news }, null, _parent3, _scopeId2));
                    } else {
                      return [
                        createVNode(NewsWidget, { news }, null, 8, ["news"])
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
              });
              _push2(`<!--]--><!--[-->`);
              ssrRenderList(unref(newestSmallNews), (news) => {
                _push2(ssrRenderComponent(_component_ElCol, {
                  xs: 24,
                  sm: 6,
                  class: "news-container mt-12"
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(ssrRenderComponent(NewsWidget, { news }, null, _parent3, _scopeId2));
                    } else {
                      return [
                        createVNode(NewsWidget, { news }, null, 8, ["news"])
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
              });
              _push2(`<!--]-->`);
            } else {
              return [
                (openBlock(true), createBlock(Fragment, null, renderList(unref(newestLargeNews), (news) => {
                  return openBlock(), createBlock(_component_ElCol, {
                    xs: 24,
                    sm: 8,
                    class: ["news-container", { "mt-12": unref($viewport).isLessOrEquals("tablet") }]
                  }, {
                    default: withCtx(() => [
                      createVNode(NewsWidget, { news }, null, 8, ["news"])
                    ]),
                    _: 2
                  }, 1032, ["class"]);
                }), 256)),
                (openBlock(true), createBlock(Fragment, null, renderList(unref(newestSmallNews), (news) => {
                  return openBlock(), createBlock(_component_ElCol, {
                    xs: 24,
                    sm: 6,
                    class: "news-container mt-12"
                  }, {
                    default: withCtx(() => [
                      createVNode(NewsWidget, { news }, null, 8, ["news"])
                    ]),
                    _: 2
                  }, 1024);
                }), 256))
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(_sfc_main$2, null, null, _parent));
        _push(ssrRenderComponent(_component_ElDivider, null, null, _parent));
        if (unref(comSettings)) {
          _push(ssrRenderComponent(_component_DashboardCategorizedNews, { "prop-news": unref(categorizedNews) }, null, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`<!--]-->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/dashboard/DashboardPage.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-908a3805"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "Naslovnica",
      meta: [
        {
          name: "description",
          content: "Po\u010Detna stranica Gastarbajter.de portala. Ovdje mo\u017Eete prona\u0107i sve o \u017Eivotu izvan Hrvatske, upute za \u017Eivot izvan Hrvatske, poslove izvan Hrvatske i na\u0161u web trgovinu koja omogu\u0107ava internacionalne narud\u017Ebe."
        },
        { property: "og:title", content: "Naslovnica" },
        {
          property: "og:description",
          content: "Po\u010Detna stranica Gastarbajter.de portala. Ovdje mo\u017Eete prona\u0107i sve o \u017Eivotu izvan Hrvatske, upute za \u017Eivot izvan Hrvatske, poslove izvan Hrvatske i na\u0161u web trgovinu koja omogu\u0107ava internacionalne narud\u017Ebe."
        }
      ],
      link: [
        {
          rel: "icon",
          type: "image/png",
          href: "https://res.cloudinary.com/dhaa1aobr/image/upload/v1747342582/favicon-32x32_avu6vh.png"
        },
        {
          rel: "apple-touch-icon",
          href: "https://res.cloudinary.com/dhaa1aobr/image/upload/v1747342580/apple-touch-icon_di9mgd.png"
        }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_DashboardPage = __nuxt_component_0;
      _push(ssrRenderComponent(_component_DashboardPage, _attrs, null, _parent));
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-CbMK1uLo.mjs.map
