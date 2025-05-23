import { defineComponent, ref, computed, mergeProps, unref, withCtx, createVNode, createBlock, openBlock, Fragment, renderList, createTextVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderAttrs, ssrRenderStyle, ssrRenderList, ssrInterpolate, ssrRenderAttr } from 'vue/server-renderer';
import { v as useHead, _ as _export_sfc, u as useNuxtApp, bc as useRoute, g as ElSkeleton, b as ElRow, h as ElSkeletonItem, Y as ElButton, e as ElIcon, be as shopping_cart_default, E as ElEmpty, w as __nuxt_component_6 } from './server.mjs';
import { f as formatISOToDatetime } from './formatDate-BE2FzR0K.mjs';
import { G as Gallery } from './Gallery-BxfMQDUy.mjs';
import { _ as _sfc_main$2 } from './FacebookShareButton-Ctlw5bf6.mjs';
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

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "ProductPage",
  __ssrInlineRender: true,
  setup(__props) {
    const { $axios } = useNuxtApp();
    useRoute();
    const isLoading = ref(true);
    const product = ref();
    const parsedHtml = computed(
      () => {
        var _a;
        return ((_a = product.value) == null ? void 0 : _a.description) ? product.value.description.replace(/&nbsp;/g, " ") : "";
      }
    );
    return (_ctx, _push, _parent, _attrs) => {
      var _a2, _b2, _c;
      var _a, _b;
      const _component_ElSkeleton = ElSkeleton;
      const _component_ElRow = ElRow;
      const _component_ElSkeletonItem = ElSkeletonItem;
      const _component_ElButton = ElButton;
      const _component_ElIcon = ElIcon;
      const _component_ElEmpty = ElEmpty;
      const _component_NuxtLink = __nuxt_component_6;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "page-container" }, _attrs))} data-v-1d81e029>`);
      if (unref(isLoading)) {
        _push(ssrRenderComponent(_component_ElSkeleton, { animated: "" }, {
          template: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_ElRow, { justify: "center" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<h3 style="${ssrRenderStyle({ "width": "30%" })}" data-v-1d81e029${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_ElSkeletonItem, { variant: "h3" }, null, _parent3, _scopeId2));
                    _push3(`</h3>`);
                  } else {
                    return [
                      createVNode("h3", { style: { "width": "30%" } }, [
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
              _push2(`<!--[-->`);
              ssrRenderList(5, (_2, index) => {
                _push2(ssrRenderComponent(_component_ElRow, {
                  justify: "space-between",
                  align: "middle",
                  class: { "mb-12": index === 1, "mb-24": index === 4 },
                  style: { "height": "21px" }
                }, {
                  default: withCtx((_3, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(ssrRenderComponent(_component_ElSkeletonItem, {
                        variant: "text",
                        style: { "width": "30%" }
                      }, null, _parent3, _scopeId2));
                    } else {
                      return [
                        createVNode(_component_ElSkeletonItem, {
                          variant: "text",
                          style: { "width": "30%" }
                        })
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
              });
              _push2(`<!--]-->`);
              _push2(ssrRenderComponent(_component_ElRow, { class: "mb-24" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<!--[-->`);
                    ssrRenderList(5, (_3) => {
                      _push3(ssrRenderComponent(_component_ElSkeletonItem, {
                        variant: "text",
                        style: { "width": "100%", "margin-bottom": "12px" }
                      }, null, _parent3, _scopeId2));
                    });
                    _push3(`<!--]-->`);
                  } else {
                    return [
                      (openBlock(), createBlock(Fragment, null, renderList(5, (_3) => {
                        return createVNode(_component_ElSkeletonItem, {
                          variant: "text",
                          style: { "width": "100%", "margin-bottom": "12px" }
                        });
                      }), 64))
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_ElRow, { class: "mb-24" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_ElSkeletonItem, {
                      variant: "text",
                      style: { "width": "20%", "height": "21.5px" }
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_ElSkeletonItem, {
                        variant: "text",
                        style: { "width": "20%", "height": "21.5px" }
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_ElRow, {
                justify: "center",
                align: "middle",
                class: "mb-24"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_ElButton, {
                      type: "primary",
                      plain: "",
                      size: "large",
                      disabled: ""
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_ElIcon, {
                            size: 20,
                            class: "mr-8"
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(unref(shopping_cart_default), null, null, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(unref(shopping_cart_default))
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                          _push4(` Kupi `);
                        } else {
                          return [
                            createVNode(_component_ElIcon, {
                              size: 20,
                              class: "mr-8"
                            }, {
                              default: withCtx(() => [
                                createVNode(unref(shopping_cart_default))
                              ]),
                              _: 1
                            }),
                            createTextVNode(" Kupi ")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_ElButton, {
                        type: "primary",
                        plain: "",
                        size: "large",
                        disabled: ""
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_ElIcon, {
                            size: 20,
                            class: "mr-8"
                          }, {
                            default: withCtx(() => [
                              createVNode(unref(shopping_cart_default))
                            ]),
                            _: 1
                          }),
                          createTextVNode(" Kupi ")
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
                createVNode(_component_ElRow, { justify: "center" }, {
                  default: withCtx(() => [
                    createVNode("h3", { style: { "width": "30%" } }, [
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
                (openBlock(), createBlock(Fragment, null, renderList(5, (_2, index) => {
                  return createVNode(_component_ElRow, {
                    justify: "space-between",
                    align: "middle",
                    class: { "mb-12": index === 1, "mb-24": index === 4 },
                    style: { "height": "21px" }
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_ElSkeletonItem, {
                        variant: "text",
                        style: { "width": "30%" }
                      })
                    ]),
                    _: 2
                  }, 1032, ["class"]);
                }), 64)),
                createVNode(_component_ElRow, { class: "mb-24" }, {
                  default: withCtx(() => [
                    (openBlock(), createBlock(Fragment, null, renderList(5, (_2) => {
                      return createVNode(_component_ElSkeletonItem, {
                        variant: "text",
                        style: { "width": "100%", "margin-bottom": "12px" }
                      });
                    }), 64))
                  ]),
                  _: 1
                }),
                createVNode(_component_ElRow, { class: "mb-24" }, {
                  default: withCtx(() => [
                    createVNode(_component_ElSkeletonItem, {
                      variant: "text",
                      style: { "width": "20%", "height": "21.5px" }
                    })
                  ]),
                  _: 1
                }),
                createVNode(_component_ElRow, {
                  justify: "center",
                  align: "middle",
                  class: "mb-24"
                }, {
                  default: withCtx(() => [
                    createVNode(_component_ElButton, {
                      type: "primary",
                      plain: "",
                      size: "large",
                      disabled: ""
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_ElIcon, {
                          size: 20,
                          class: "mr-8"
                        }, {
                          default: withCtx(() => [
                            createVNode(unref(shopping_cart_default))
                          ]),
                          _: 1
                        }),
                        createTextVNode(" Kupi ")
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
      } else if (!unref(product)) {
        _push(ssrRenderComponent(_component_ElEmpty, { description: "Ups! Nema dostupnih proizvoda..." }, null, _parent));
      } else {
        _push(`<!--[-->`);
        _push(ssrRenderComponent(_component_ElRow, {
          justify: "center",
          align: "middle"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            var _a22, _b22;
            if (_push2) {
              _push2(`<h3 class="color-primary" data-v-1d81e029${_scopeId}>${ssrInterpolate((_a22 = unref(product)) == null ? void 0 : _a22.name)}</h3>`);
            } else {
              return [
                createVNode("h3", { class: "color-primary" }, toDisplayString((_b22 = unref(product)) == null ? void 0 : _b22.name), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
        if (((_a = unref(product).images) == null ? void 0 : _a.length) || ((_b = unref(product).videos) == null ? void 0 : _b.length)) {
          _push(ssrRenderComponent(Gallery, {
            links: [...(_a2 = unref(product).images) != null ? _a2 : [], ...(_b2 = unref(product).videos) != null ? _b2 : []]
          }, null, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(ssrRenderComponent(_component_ElRow, {
          align: "middle",
          class: "color-zinc"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` Proizvod objavljen: ${ssrInterpolate(("formatISOToDatetime" in _ctx ? _ctx.formatISOToDatetime : unref(formatISOToDatetime))(unref(product).createdAt))}`);
            } else {
              return [
                createTextVNode(" Proizvod objavljen: " + toDisplayString(("formatISOToDatetime" in _ctx ? _ctx.formatISOToDatetime : unref(formatISOToDatetime))(unref(product).createdAt)), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(_component_ElRow, {
          align: "middle",
          class: "color-zinc mb-12"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` Kategorija: ${ssrInterpolate(unref(product).productCategory.name)}`);
            } else {
              return [
                createTextVNode(" Kategorija: " + toDisplayString(unref(product).productCategory.name), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(_component_ElRow, {
          align: "middle",
          class: "font-weight-500"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` Lokacija: ${ssrInterpolate(`${unref(product).locationPlace}, ${unref(product).locationCountry}`)}`);
            } else {
              return [
                createTextVNode(" Lokacija: " + toDisplayString(`${unref(product).locationPlace}, ${unref(product).locationCountry}`), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
        if (unref(product).contactEmail) {
          _push(ssrRenderComponent(_component_ElRow, {
            align: "middle",
            class: "font-weight-500"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(` Email: <a${ssrRenderAttr("href", `mailto:${unref(product).contactEmail}`)} class="ml-4" data-v-1d81e029${_scopeId}>${ssrInterpolate(unref(product).contactEmail)}</a>`);
              } else {
                return [
                  createTextVNode(" Email: "),
                  createVNode("a", {
                    href: `mailto:${unref(product).contactEmail}`,
                    class: "ml-4"
                  }, toDisplayString(unref(product).contactEmail), 9, ["href"])
                ];
              }
            }),
            _: 1
          }, _parent));
        } else {
          _push(`<!---->`);
        }
        if (unref(product).contactNumber) {
          _push(ssrRenderComponent(_component_ElRow, {
            align: "middle",
            class: "font-weight-500 mb-24"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(` Broj: ${ssrInterpolate(unref(product).contactNumber)}`);
              } else {
                return [
                  createTextVNode(" Broj: " + toDisplayString(unref(product).contactNumber), 1)
                ];
              }
            }),
            _: 1
          }, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`<div class="product-content mb-24" data-v-1d81e029>${(_c = unref(parsedHtml)) != null ? _c : ""}</div>`);
        _push(ssrRenderComponent(_component_ElRow, {
          align: "middle",
          class: "mb-24 product-price"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` Cijena: <b class="ml-4" data-v-1d81e029${_scopeId}>${ssrInterpolate(Number(unref(product).price).toFixed(2))} \u20AC</b>`);
            } else {
              return [
                createTextVNode(" Cijena: "),
                createVNode("b", { class: "ml-4" }, toDisplayString(Number(unref(product).price).toFixed(2)) + " \u20AC", 1)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(_component_ElRow, { class: "mb-12 social-share-buttons" }, {
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
        _push(ssrRenderComponent(_component_ElRow, {
          justify: "center",
          align: "middle",
          class: "mb-24"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_NuxtLink, {
                to: `/webshop/${unref(product).id}/narudzba`
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_ElButton, {
                      type: "primary",
                      plain: "",
                      size: "large"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_ElIcon, {
                            size: 20,
                            class: "mr-8"
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(unref(shopping_cart_default), null, null, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(unref(shopping_cart_default))
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                          _push4(` Kupi `);
                        } else {
                          return [
                            createVNode(_component_ElIcon, {
                              size: 20,
                              class: "mr-8"
                            }, {
                              default: withCtx(() => [
                                createVNode(unref(shopping_cart_default))
                              ]),
                              _: 1
                            }),
                            createTextVNode(" Kupi ")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_ElButton, {
                        type: "primary",
                        plain: "",
                        size: "large"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_ElIcon, {
                            size: 20,
                            class: "mr-8"
                          }, {
                            default: withCtx(() => [
                              createVNode(unref(shopping_cart_default))
                            ]),
                            _: 1
                          }),
                          createTextVNode(" Kupi ")
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
                  to: `/webshop/${unref(product).id}/narudzba`
                }, {
                  default: withCtx(() => [
                    createVNode(_component_ElButton, {
                      type: "primary",
                      plain: "",
                      size: "large"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_ElIcon, {
                          size: 20,
                          class: "mr-8"
                        }, {
                          default: withCtx(() => [
                            createVNode(unref(shopping_cart_default))
                          ]),
                          _: 1
                        }),
                        createTextVNode(" Kupi ")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/webshop/ProductPage.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const ProductPage = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-1d81e029"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const title = ref("Proizvod");
    useHead({
      title: title.value,
      meta: [
        {
          name: "description",
          content: `Ovdje mo\u017Eete prona\u0107i sve o na\u0161em proizvodu. ${title.value}`
        },
        { property: "og:title", content: "Portal" },
        {
          property: "og:description",
          content: `Ovdje mo\u017Eete prona\u0107i sve o na\u0161em proizvodu. ${title.value}`
        }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(ProductPage, _attrs, null, _parent));
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/webshop/[productId]/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-DWRqg_kq.mjs.map
