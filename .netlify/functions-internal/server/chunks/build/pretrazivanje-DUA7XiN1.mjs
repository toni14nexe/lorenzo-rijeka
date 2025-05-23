import { defineComponent, ref, watch, mergeProps, withCtx, unref, createVNode, toDisplayString, createBlock, openBlock, Fragment, renderList, isRef, createTextVNode, createCommentVNode, computed, createElementBlock, normalizeStyle, normalizeClass, renderSlot, resolveDynamicComponent, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderAttrs, ssrInterpolate, ssrRenderList } from 'vue/server-renderer';
import { bc as useRoute, v as useHead, _ as _export_sfc, u as useNuxtApp, b as ElRow, g as ElSkeleton, h as ElSkeletonItem, d as ElCol, E as ElEmpty, e as ElIcon, M as MegafoneIcon, S as withInstall, o as office_building_default, f as shop_default, C as _export_sfc$1, z as buildProps, F as useNamespace, O as isNumber, a7 as addUnit, B as definePropType, az as iconPropType, a0 as componentSizes } from './server.mjs';
import { E as ElTabs, a as ElTabPane } from './el-tab-pane-C-X7kpj3.mjs';
import { isString } from '@vue/shared';
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
import 'lodash-unified';
import 'axios';
import '@ctrl/tinycolor';
import '@popperjs/core';
import './strings-D1uxkXhq.mjs';
import './truncate-BSRTn-4H.mjs';
import './formatDate-BE2FzR0K.mjs';

const avatarProps = buildProps({
  size: {
    type: [Number, String],
    values: componentSizes,
    default: "",
    validator: (val) => isNumber(val)
  },
  shape: {
    type: String,
    values: ["circle", "square"],
    default: "circle"
  },
  icon: {
    type: iconPropType
  },
  src: {
    type: String,
    default: ""
  },
  alt: String,
  srcSet: String,
  fit: {
    type: definePropType(String),
    default: "cover"
  }
});
const avatarEmits = {
  error: (evt) => evt instanceof Event
};
const __default__ = defineComponent({
  name: "ElAvatar"
});
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  ...__default__,
  props: avatarProps,
  emits: avatarEmits,
  setup(__props, { emit }) {
    const props = __props;
    const ns = useNamespace("avatar");
    const hasLoadError = ref(false);
    const avatarClass = computed(() => {
      const { size, icon, shape } = props;
      const classList = [ns.b()];
      if (isString(size))
        classList.push(ns.m(size));
      if (icon)
        classList.push(ns.m("icon"));
      if (shape)
        classList.push(ns.m(shape));
      return classList;
    });
    const sizeStyle = computed(() => {
      const { size } = props;
      return isNumber(size) ? ns.cssVarBlock({
        size: addUnit(size) || ""
      }) : void 0;
    });
    const fitStyle = computed(() => ({
      objectFit: props.fit
    }));
    watch(() => props.src, () => hasLoadError.value = false);
    function handleError(e) {
      hasLoadError.value = true;
      emit("error", e);
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("span", {
        class: normalizeClass(unref(avatarClass)),
        style: normalizeStyle(unref(sizeStyle))
      }, [
        (_ctx.src || _ctx.srcSet) && !hasLoadError.value ? (openBlock(), createElementBlock("img", {
          key: 0,
          src: _ctx.src,
          alt: _ctx.alt,
          srcset: _ctx.srcSet,
          style: normalizeStyle(unref(fitStyle)),
          onError: handleError
        }, null, 44, ["src", "alt", "srcset"])) : _ctx.icon ? (openBlock(), createBlock(unref(ElIcon), { key: 1 }, {
          default: withCtx(() => [
            (openBlock(), createBlock(resolveDynamicComponent(_ctx.icon)))
          ]),
          _: 1
        })) : renderSlot(_ctx.$slots, "default", { key: 2 })
      ], 6);
    };
  }
});
var Avatar = /* @__PURE__ */ _export_sfc$1(_sfc_main$2, [["__file", "avatar.vue"]]);
const ElAvatar = withInstall(Avatar);
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "SearchPage",
  __ssrInlineRender: true,
  setup(__props) {
    const { $axios } = useNuxtApp();
    const route = useRoute();
    const searchValue = ref(route.query.value);
    const isLoading = ref(true);
    const selectedTab = ref();
    const emptySearch = ref(false);
    const data = ref();
    watch(
      () => route.query.value,
      (newSearchValue) => {
        searchValue.value = newSearchValue;
        getSearchData();
      }
    );
    async function getSearchData() {
      var _a, _b, _c;
      isLoading.value = true;
      emptySearch.value = false;
      try {
        const response = await $axios.get(`/search?value=${searchValue.value}`);
        data.value = response.data;
        if ((_a = data.value) == null ? void 0 : _a.totalNews) selectedTab.value = "0";
        else if ((_b = data.value) == null ? void 0 : _b.totalJobs) selectedTab.value = "1";
        else if ((_c = data.value) == null ? void 0 : _c.totalProducts) selectedTab.value = "2";
        else emptySearch.value = true;
      } catch (error) {
        console.error("API Error:", error);
      } finally {
        isLoading.value = false;
      }
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ElRow = ElRow;
      const _component_ElSkeleton = ElSkeleton;
      const _component_ElSkeletonItem = ElSkeletonItem;
      const _component_ElCol = ElCol;
      const _component_ElEmpty = ElEmpty;
      const _component_ElTabs = ElTabs;
      const _component_ElTabPane = ElTabPane;
      const _component_ElIcon = ElIcon;
      const _component_ElAvatar = ElAvatar;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "page-container mb-12" }, _attrs))} data-v-ddeba4ce>`);
      _push(ssrRenderComponent(_component_ElRow, { justify: "center" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h3 class="color-primary" data-v-ddeba4ce${_scopeId}>Pretra\u017Eivanje: ${ssrInterpolate(unref(searchValue))}</h3>`);
          } else {
            return [
              createVNode("h3", { class: "color-primary" }, "Pretra\u017Eivanje: " + toDisplayString(unref(searchValue)), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      if (unref(isLoading)) {
        _push(ssrRenderComponent(_component_ElSkeleton, { animated: "" }, {
          template: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_ElRow, { justify: "center" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_ElSkeletonItem, {
                      variant: "text",
                      style: [{ "height": "40px", "margin-bottom": "14px" }, `width: ${_ctx.$viewport.isLessThan("mobileMedium") ? 228 : _ctx.$viewport.isLessThan("mobileWide") ? 300 : 374}px`]
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_ElSkeletonItem, {
                        variant: "text",
                        style: [{ "height": "40px", "margin-bottom": "14px" }, `width: ${_ctx.$viewport.isLessThan("mobileMedium") ? 228 : _ctx.$viewport.isLessThan("mobileWide") ? 300 : 374}px`]
                      }, null, 8, ["style"])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_ElRow, {
                align: "middle",
                gutter: 12
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<!--[-->`);
                    ssrRenderList(10, (_3) => {
                      _push3(ssrRenderComponent(_component_ElCol, {
                        xs: 24,
                        sm: 12,
                        style: { "height": "30dvh" },
                        class: "mb-12"
                      }, {
                        default: withCtx((_4, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(ssrRenderComponent(_component_ElSkeletonItem, {
                              variant: "image",
                              style: { "height": "30dvh", "border-radius": "4px" }
                            }, null, _parent4, _scopeId3));
                          } else {
                            return [
                              createVNode(_component_ElSkeletonItem, {
                                variant: "image",
                                style: { "height": "30dvh", "border-radius": "4px" }
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
                      (openBlock(), createBlock(Fragment, null, renderList(10, (_3) => {
                        return createVNode(_component_ElCol, {
                          xs: 24,
                          sm: 12,
                          style: { "height": "30dvh" },
                          class: "mb-12"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_ElSkeletonItem, {
                              variant: "image",
                              style: { "height": "30dvh", "border-radius": "4px" }
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
            } else {
              return [
                createVNode(_component_ElRow, { justify: "center" }, {
                  default: withCtx(() => [
                    createVNode(_component_ElSkeletonItem, {
                      variant: "text",
                      style: [{ "height": "40px", "margin-bottom": "14px" }, `width: ${_ctx.$viewport.isLessThan("mobileMedium") ? 228 : _ctx.$viewport.isLessThan("mobileWide") ? 300 : 374}px`]
                    }, null, 8, ["style"])
                  ]),
                  _: 1
                }),
                createVNode(_component_ElRow, {
                  align: "middle",
                  gutter: 12
                }, {
                  default: withCtx(() => [
                    (openBlock(), createBlock(Fragment, null, renderList(10, (_2) => {
                      return createVNode(_component_ElCol, {
                        xs: 24,
                        sm: 12,
                        style: { "height": "30dvh" },
                        class: "mb-12"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_ElSkeletonItem, {
                            variant: "image",
                            style: { "height": "30dvh", "border-radius": "4px" }
                          })
                        ]),
                        _: 1
                      });
                    }), 64))
                  ]),
                  _: 1
                })
              ];
            }
          }),
          _: 1
        }, _parent));
      } else if (!unref(data) || unref(emptySearch)) {
        _push(ssrRenderComponent(_component_ElEmpty, { description: "Ups! Ne mo\u017Eemo ni\u0161ta prona\u0107i..." }, null, _parent));
      } else {
        _push(`<!--[-->`);
        _push(ssrRenderComponent(_component_ElRow, {
          justify: "center",
          class: "w-100",
          align: "middle"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_ElTabs, {
                modelValue: unref(selectedTab),
                "onUpdate:modelValue": ($event) => isRef(selectedTab) ? selectedTab.value = $event : null
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_ElTabPane, null, {
                      label: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          if (_ctx.$viewport.isGreaterOrEquals("mobileWide")) {
                            _push4(ssrRenderComponent(_component_ElIcon, {
                              size: 18,
                              class: "mr-4"
                            }, {
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(ssrRenderComponent(MegafoneIcon, null, null, _parent5, _scopeId4));
                                } else {
                                  return [
                                    createVNode(MegafoneIcon)
                                  ];
                                }
                              }),
                              _: 1
                            }, _parent4, _scopeId3));
                          } else {
                            _push4(`<!---->`);
                          }
                          _push4(` Portal `);
                          if (_ctx.$viewport.isGreaterOrEquals("mobileMedium")) {
                            _push4(ssrRenderComponent(_component_ElAvatar, {
                              size: 20,
                              class: ["ml-4", {
                                "font-9": unref(data).totalNews >= 100,
                                "bc-primary": unref(selectedTab) == 0
                              }]
                            }, {
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(`${ssrInterpolate(unref(data).totalNews < 100 ? unref(data).totalNews : "99+")}`);
                                } else {
                                  return [
                                    createTextVNode(toDisplayString(unref(data).totalNews < 100 ? unref(data).totalNews : "99+"), 1)
                                  ];
                                }
                              }),
                              _: 1
                            }, _parent4, _scopeId3));
                          } else {
                            _push4(`<!---->`);
                          }
                        } else {
                          return [
                            _ctx.$viewport.isGreaterOrEquals("mobileWide") ? (openBlock(), createBlock(_component_ElIcon, {
                              key: 0,
                              size: 18,
                              class: "mr-4"
                            }, {
                              default: withCtx(() => [
                                createVNode(MegafoneIcon)
                              ]),
                              _: 1
                            })) : createCommentVNode("", true),
                            createTextVNode(" Portal "),
                            _ctx.$viewport.isGreaterOrEquals("mobileMedium") ? (openBlock(), createBlock(_component_ElAvatar, {
                              key: 1,
                              size: 20,
                              class: ["ml-4", {
                                "font-9": unref(data).totalNews >= 100,
                                "bc-primary": unref(selectedTab) == 0
                              }]
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(unref(data).totalNews < 100 ? unref(data).totalNews : "99+"), 1)
                              ]),
                              _: 1
                            }, 8, ["class"])) : createCommentVNode("", true)
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(_component_ElTabPane, null, {
                      label: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          if (_ctx.$viewport.isGreaterOrEquals("mobileWide")) {
                            _push4(ssrRenderComponent(_component_ElIcon, {
                              size: 22,
                              class: "mr-4"
                            }, {
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(ssrRenderComponent(unref(office_building_default), null, null, _parent5, _scopeId4));
                                } else {
                                  return [
                                    createVNode(unref(office_building_default))
                                  ];
                                }
                              }),
                              _: 1
                            }, _parent4, _scopeId3));
                          } else {
                            _push4(`<!---->`);
                          }
                          _push4(` Poslovi `);
                          if (_ctx.$viewport.isGreaterOrEquals("mobileMedium")) {
                            _push4(ssrRenderComponent(_component_ElAvatar, {
                              size: 20,
                              class: ["ml-4", {
                                "font-9": unref(data).totalJobs >= 100,
                                "bc-primary": unref(selectedTab) == 1
                              }]
                            }, {
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(`${ssrInterpolate(unref(data).totalJobs < 100 ? unref(data).totalJobs : "99+")}`);
                                } else {
                                  return [
                                    createTextVNode(toDisplayString(unref(data).totalJobs < 100 ? unref(data).totalJobs : "99+"), 1)
                                  ];
                                }
                              }),
                              _: 1
                            }, _parent4, _scopeId3));
                          } else {
                            _push4(`<!---->`);
                          }
                        } else {
                          return [
                            _ctx.$viewport.isGreaterOrEquals("mobileWide") ? (openBlock(), createBlock(_component_ElIcon, {
                              key: 0,
                              size: 22,
                              class: "mr-4"
                            }, {
                              default: withCtx(() => [
                                createVNode(unref(office_building_default))
                              ]),
                              _: 1
                            })) : createCommentVNode("", true),
                            createTextVNode(" Poslovi "),
                            _ctx.$viewport.isGreaterOrEquals("mobileMedium") ? (openBlock(), createBlock(_component_ElAvatar, {
                              key: 1,
                              size: 20,
                              class: ["ml-4", {
                                "font-9": unref(data).totalJobs >= 100,
                                "bc-primary": unref(selectedTab) == 1
                              }]
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(unref(data).totalJobs < 100 ? unref(data).totalJobs : "99+"), 1)
                              ]),
                              _: 1
                            }, 8, ["class"])) : createCommentVNode("", true)
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(_component_ElTabPane, null, {
                      label: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          if (_ctx.$viewport.isGreaterOrEquals("mobileWide")) {
                            _push4(ssrRenderComponent(_component_ElIcon, {
                              size: 22,
                              class: "mr-4"
                            }, {
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(ssrRenderComponent(unref(shop_default), null, null, _parent5, _scopeId4));
                                } else {
                                  return [
                                    createVNode(unref(shop_default))
                                  ];
                                }
                              }),
                              _: 1
                            }, _parent4, _scopeId3));
                          } else {
                            _push4(`<!---->`);
                          }
                          _push4(` Webshop `);
                          if (_ctx.$viewport.isGreaterOrEquals("mobileMedium")) {
                            _push4(ssrRenderComponent(_component_ElAvatar, {
                              size: 20,
                              class: ["ml-4", {
                                "font-9": unref(data).totalProducts >= 100,
                                "bc-primary": unref(selectedTab) == 2
                              }]
                            }, {
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(`${ssrInterpolate(unref(data).totalProducts < 100 ? unref(data).totalProducts : "99+")}`);
                                } else {
                                  return [
                                    createTextVNode(toDisplayString(unref(data).totalProducts < 100 ? unref(data).totalProducts : "99+"), 1)
                                  ];
                                }
                              }),
                              _: 1
                            }, _parent4, _scopeId3));
                          } else {
                            _push4(`<!---->`);
                          }
                        } else {
                          return [
                            _ctx.$viewport.isGreaterOrEquals("mobileWide") ? (openBlock(), createBlock(_component_ElIcon, {
                              key: 0,
                              size: 22,
                              class: "mr-4"
                            }, {
                              default: withCtx(() => [
                                createVNode(unref(shop_default))
                              ]),
                              _: 1
                            })) : createCommentVNode("", true),
                            createTextVNode(" Webshop "),
                            _ctx.$viewport.isGreaterOrEquals("mobileMedium") ? (openBlock(), createBlock(_component_ElAvatar, {
                              key: 1,
                              size: 20,
                              class: ["ml-4", {
                                "font-9": unref(data).totalProducts >= 100,
                                "bc-primary": unref(selectedTab) == 2
                              }]
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(unref(data).totalProducts < 100 ? unref(data).totalProducts : "99+"), 1)
                              ]),
                              _: 1
                            }, 8, ["class"])) : createCommentVNode("", true)
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_ElTabPane, null, {
                        label: withCtx(() => [
                          _ctx.$viewport.isGreaterOrEquals("mobileWide") ? (openBlock(), createBlock(_component_ElIcon, {
                            key: 0,
                            size: 18,
                            class: "mr-4"
                          }, {
                            default: withCtx(() => [
                              createVNode(MegafoneIcon)
                            ]),
                            _: 1
                          })) : createCommentVNode("", true),
                          createTextVNode(" Portal "),
                          _ctx.$viewport.isGreaterOrEquals("mobileMedium") ? (openBlock(), createBlock(_component_ElAvatar, {
                            key: 1,
                            size: 20,
                            class: ["ml-4", {
                              "font-9": unref(data).totalNews >= 100,
                              "bc-primary": unref(selectedTab) == 0
                            }]
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(unref(data).totalNews < 100 ? unref(data).totalNews : "99+"), 1)
                            ]),
                            _: 1
                          }, 8, ["class"])) : createCommentVNode("", true)
                        ]),
                        _: 1
                      }),
                      createVNode(_component_ElTabPane, null, {
                        label: withCtx(() => [
                          _ctx.$viewport.isGreaterOrEquals("mobileWide") ? (openBlock(), createBlock(_component_ElIcon, {
                            key: 0,
                            size: 22,
                            class: "mr-4"
                          }, {
                            default: withCtx(() => [
                              createVNode(unref(office_building_default))
                            ]),
                            _: 1
                          })) : createCommentVNode("", true),
                          createTextVNode(" Poslovi "),
                          _ctx.$viewport.isGreaterOrEquals("mobileMedium") ? (openBlock(), createBlock(_component_ElAvatar, {
                            key: 1,
                            size: 20,
                            class: ["ml-4", {
                              "font-9": unref(data).totalJobs >= 100,
                              "bc-primary": unref(selectedTab) == 1
                            }]
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(unref(data).totalJobs < 100 ? unref(data).totalJobs : "99+"), 1)
                            ]),
                            _: 1
                          }, 8, ["class"])) : createCommentVNode("", true)
                        ]),
                        _: 1
                      }),
                      createVNode(_component_ElTabPane, null, {
                        label: withCtx(() => [
                          _ctx.$viewport.isGreaterOrEquals("mobileWide") ? (openBlock(), createBlock(_component_ElIcon, {
                            key: 0,
                            size: 22,
                            class: "mr-4"
                          }, {
                            default: withCtx(() => [
                              createVNode(unref(shop_default))
                            ]),
                            _: 1
                          })) : createCommentVNode("", true),
                          createTextVNode(" Webshop "),
                          _ctx.$viewport.isGreaterOrEquals("mobileMedium") ? (openBlock(), createBlock(_component_ElAvatar, {
                            key: 1,
                            size: 20,
                            class: ["ml-4", {
                              "font-9": unref(data).totalProducts >= 100,
                              "bc-primary": unref(selectedTab) == 2
                            }]
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(unref(data).totalProducts < 100 ? unref(data).totalProducts : "99+"), 1)
                            ]),
                            _: 1
                          }, 8, ["class"])) : createCommentVNode("", true)
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
                createVNode(_component_ElTabs, {
                  modelValue: unref(selectedTab),
                  "onUpdate:modelValue": ($event) => isRef(selectedTab) ? selectedTab.value = $event : null
                }, {
                  default: withCtx(() => [
                    createVNode(_component_ElTabPane, null, {
                      label: withCtx(() => [
                        _ctx.$viewport.isGreaterOrEquals("mobileWide") ? (openBlock(), createBlock(_component_ElIcon, {
                          key: 0,
                          size: 18,
                          class: "mr-4"
                        }, {
                          default: withCtx(() => [
                            createVNode(MegafoneIcon)
                          ]),
                          _: 1
                        })) : createCommentVNode("", true),
                        createTextVNode(" Portal "),
                        _ctx.$viewport.isGreaterOrEquals("mobileMedium") ? (openBlock(), createBlock(_component_ElAvatar, {
                          key: 1,
                          size: 20,
                          class: ["ml-4", {
                            "font-9": unref(data).totalNews >= 100,
                            "bc-primary": unref(selectedTab) == 0
                          }]
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(unref(data).totalNews < 100 ? unref(data).totalNews : "99+"), 1)
                          ]),
                          _: 1
                        }, 8, ["class"])) : createCommentVNode("", true)
                      ]),
                      _: 1
                    }),
                    createVNode(_component_ElTabPane, null, {
                      label: withCtx(() => [
                        _ctx.$viewport.isGreaterOrEquals("mobileWide") ? (openBlock(), createBlock(_component_ElIcon, {
                          key: 0,
                          size: 22,
                          class: "mr-4"
                        }, {
                          default: withCtx(() => [
                            createVNode(unref(office_building_default))
                          ]),
                          _: 1
                        })) : createCommentVNode("", true),
                        createTextVNode(" Poslovi "),
                        _ctx.$viewport.isGreaterOrEquals("mobileMedium") ? (openBlock(), createBlock(_component_ElAvatar, {
                          key: 1,
                          size: 20,
                          class: ["ml-4", {
                            "font-9": unref(data).totalJobs >= 100,
                            "bc-primary": unref(selectedTab) == 1
                          }]
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(unref(data).totalJobs < 100 ? unref(data).totalJobs : "99+"), 1)
                          ]),
                          _: 1
                        }, 8, ["class"])) : createCommentVNode("", true)
                      ]),
                      _: 1
                    }),
                    createVNode(_component_ElTabPane, null, {
                      label: withCtx(() => [
                        _ctx.$viewport.isGreaterOrEquals("mobileWide") ? (openBlock(), createBlock(_component_ElIcon, {
                          key: 0,
                          size: 22,
                          class: "mr-4"
                        }, {
                          default: withCtx(() => [
                            createVNode(unref(shop_default))
                          ]),
                          _: 1
                        })) : createCommentVNode("", true),
                        createTextVNode(" Webshop "),
                        _ctx.$viewport.isGreaterOrEquals("mobileMedium") ? (openBlock(), createBlock(_component_ElAvatar, {
                          key: 1,
                          size: 20,
                          class: ["ml-4", {
                            "font-9": unref(data).totalProducts >= 100,
                            "bc-primary": unref(selectedTab) == 2
                          }]
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(unref(data).totalProducts < 100 ? unref(data).totalProducts : "99+"), 1)
                          ]),
                          _: 1
                        }, 8, ["class"])) : createCommentVNode("", true)
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }, 8, ["modelValue", "onUpdate:modelValue"])
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`<div class="w-100" data-v-ddeba4ce>`);
        if (unref(selectedTab) == 0) {
          _push(`<!--[-->`);
          if (unref(data).news.length) {
            _push(ssrRenderComponent(_component_ElRow, {
              align: "middle",
              gutter: 12
            }, {
              default: withCtx((_, _push2, _parent2, _scopeId) => {
                if (_push2) {
                  _push2(`<!--[-->`);
                  ssrRenderList(unref(data).news, (news) => {
                    _push2(ssrRenderComponent(_component_ElCol, {
                      key: String(news.id),
                      xs: 24,
                      sm: 12,
                      class: "mb-12"
                    }, {
                      default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                        if (_push3) {
                          _push3(ssrRenderComponent(NewsWidget, {
                            news,
                            class: "news-widget"
                          }, null, _parent3, _scopeId2));
                        } else {
                          return [
                            createVNode(NewsWidget, {
                              news,
                              class: "news-widget"
                            }, null, 8, ["news"])
                          ];
                        }
                      }),
                      _: 2
                    }, _parent2, _scopeId));
                  });
                  _push2(`<!--]-->`);
                } else {
                  return [
                    (openBlock(true), createBlock(Fragment, null, renderList(unref(data).news, (news) => {
                      return openBlock(), createBlock(_component_ElCol, {
                        key: String(news.id),
                        xs: 24,
                        sm: 12,
                        class: "mb-12"
                      }, {
                        default: withCtx(() => [
                          createVNode(NewsWidget, {
                            news,
                            class: "news-widget"
                          }, null, 8, ["news"])
                        ]),
                        _: 2
                      }, 1024);
                    }), 128))
                  ];
                }
              }),
              _: 1
            }, _parent));
          } else {
            _push(ssrRenderComponent(_component_ElEmpty, { description: "Ups! Nema dostupnih vijesti..." }, null, _parent));
          }
          _push(`<!--]-->`);
        } else if (unref(selectedTab) == 1) {
          _push(`<!--[-->`);
          if (unref(data).jobs.length) {
            _push(ssrRenderComponent(_component_ElRow, {
              align: "middle",
              gutter: 12
            }, {
              default: withCtx((_, _push2, _parent2, _scopeId) => {
                if (_push2) {
                  _push2(`<!--[-->`);
                  ssrRenderList(unref(data).jobs, (job) => {
                    _push2(ssrRenderComponent(_component_ElCol, {
                      key: String(job.id),
                      xs: 24,
                      sm: 12,
                      class: "mb-12"
                    }, {
                      default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                        if (_push3) {
                          _push3(ssrRenderComponent(JobWidget, {
                            job,
                            class: "job-widget"
                          }, null, _parent3, _scopeId2));
                        } else {
                          return [
                            createVNode(JobWidget, {
                              job,
                              class: "job-widget"
                            }, null, 8, ["job"])
                          ];
                        }
                      }),
                      _: 2
                    }, _parent2, _scopeId));
                  });
                  _push2(`<!--]-->`);
                } else {
                  return [
                    (openBlock(true), createBlock(Fragment, null, renderList(unref(data).jobs, (job) => {
                      return openBlock(), createBlock(_component_ElCol, {
                        key: String(job.id),
                        xs: 24,
                        sm: 12,
                        class: "mb-12"
                      }, {
                        default: withCtx(() => [
                          createVNode(JobWidget, {
                            job,
                            class: "job-widget"
                          }, null, 8, ["job"])
                        ]),
                        _: 2
                      }, 1024);
                    }), 128))
                  ];
                }
              }),
              _: 1
            }, _parent));
          } else {
            _push(ssrRenderComponent(_component_ElEmpty, { description: "Ups! Nema dostupnih poslova..." }, null, _parent));
          }
          _push(`<!--]-->`);
        } else {
          _push(`<!--[-->`);
          if (unref(data).products.length) {
            _push(ssrRenderComponent(_component_ElRow, {
              align: "middle",
              gutter: 12
            }, {
              default: withCtx((_, _push2, _parent2, _scopeId) => {
                if (_push2) {
                  _push2(`<!--[-->`);
                  ssrRenderList(unref(data).products, (product) => {
                    _push2(ssrRenderComponent(_component_ElCol, {
                      key: String(product.id),
                      xs: 24,
                      sm: 12,
                      class: "mb-12"
                    }, {
                      default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                        if (_push3) {
                          _push3(ssrRenderComponent(ProductWidget, {
                            product,
                            class: "product-widget"
                          }, null, _parent3, _scopeId2));
                        } else {
                          return [
                            createVNode(ProductWidget, {
                              product,
                              class: "product-widget"
                            }, null, 8, ["product"])
                          ];
                        }
                      }),
                      _: 2
                    }, _parent2, _scopeId));
                  });
                  _push2(`<!--]-->`);
                } else {
                  return [
                    (openBlock(true), createBlock(Fragment, null, renderList(unref(data).products, (product) => {
                      return openBlock(), createBlock(_component_ElCol, {
                        key: String(product.id),
                        xs: 24,
                        sm: 12,
                        class: "mb-12"
                      }, {
                        default: withCtx(() => [
                          createVNode(ProductWidget, {
                            product,
                            class: "product-widget"
                          }, null, 8, ["product"])
                        ]),
                        _: 2
                      }, 1024);
                    }), 128))
                  ];
                }
              }),
              _: 1
            }, _parent));
          } else {
            _push(ssrRenderComponent(_component_ElEmpty, { description: "Ups! Nema dostupnih proizvoda..." }, null, _parent));
          }
          _push(`<!--]-->`);
        }
        _push(`</div><!--]-->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/search/SearchPage.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const SearchPage = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-ddeba4ce"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "pretrazivanje",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    useHead({
      title: `Pretra\u017Eivanje ${route.query.value}`,
      meta: [
        {
          name: "description",
          content: ""
        },
        { property: "og:title", content: `Pretra\u017Eivanje ${route.query.value}` },
        {
          property: "og:description",
          content: ""
        }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(SearchPage, _attrs, null, _parent));
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/pretrazivanje.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=pretrazivanje-DUA7XiN1.mjs.map
