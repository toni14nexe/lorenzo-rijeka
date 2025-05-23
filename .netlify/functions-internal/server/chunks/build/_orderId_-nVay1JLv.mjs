import { defineComponent, ref, mergeProps, withCtx, unref, createVNode, createTextVNode, createBlock, openBlock, Fragment, renderList, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderAttrs, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import { v as useHead, _ as _export_sfc, u as useNuxtApp, bc as useRoute, b as ElRow, e as ElIcon, be as shopping_cart_default, g as ElSkeleton, k as ElCard, h as ElSkeletonItem, Y as ElButton, bj as circle_close_filled_default, bk as success_filled_default, w as __nuxt_component_6 } from './server.mjs';
import { f as formatISOToDatetime } from './formatDate-BE2FzR0K.mjs';
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
  __name: "OrderStatePage",
  __ssrInlineRender: true,
  setup(__props) {
    const { $axios } = useNuxtApp();
    const route = useRoute();
    const orderId = ref(route.params.orderId);
    const state = ref("loading");
    const order = ref();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ElRow = ElRow;
      const _component_ElIcon = ElIcon;
      const _component_ElSkeleton = ElSkeleton;
      const _component_ElCard = ElCard;
      const _component_ElSkeletonItem = ElSkeletonItem;
      const _component_ElButton = ElButton;
      const _component_NuxtLink = __nuxt_component_6;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "page-container mb-24" }, _attrs))} data-v-b0d83a68>`);
      _push(ssrRenderComponent(_component_ElRow, {
        justify: "center",
        align: "middle",
        class: "color-primary"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_ElIcon, {
              size: 24,
              class: "mr-8"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(shopping_cart_default), null, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(shopping_cart_default))
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<h3 data-v-b0d83a68${_scopeId}>Narud\u017Eba</h3>`);
          } else {
            return [
              createVNode(_component_ElIcon, {
                size: 24,
                class: "mr-8"
              }, {
                default: withCtx(() => [
                  createVNode(unref(shopping_cart_default))
                ]),
                _: 1
              }),
              createVNode("h3", null, "Narud\u017Eba")
            ];
          }
        }),
        _: 1
      }, _parent));
      if (unref(state) === "loading") {
        _push(ssrRenderComponent(_component_ElSkeleton, { animated: "" }, {
          template: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_ElRow, {
                justify: "center",
                align: "middle"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_ElCard, { class: "order-state-skeleton-card" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_ElRow, {
                            justify: "center",
                            class: "mb-20"
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(_component_ElSkeletonItem, {
                                  variant: "text",
                                  style: { "width": "200px" }
                                }, null, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(_component_ElSkeletonItem, {
                                    variant: "text",
                                    style: { "width": "200px" }
                                  })
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(_component_ElRow, {
                            justify: "center",
                            class: "mb-12"
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(_component_ElSkeletonItem, {
                                  variant: "image",
                                  style: { "width": "100px", "height": "100px", "border-radius": "100%" }
                                }, null, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(_component_ElSkeletonItem, {
                                    variant: "image",
                                    style: { "width": "100px", "height": "100px", "border-radius": "100%" }
                                  })
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                          _push4(`<!--[-->`);
                          ssrRenderList(14, (_4, index) => {
                            _push4(ssrRenderComponent(_component_ElRow, {
                              justify: "start",
                              style: { "height": "19px" },
                              class: {
                                "mb-12": index === 2 || index === 6 || index === 10,
                                "w-80px": index === 0 || index === 3 || index === 7 || index === 11
                              }
                            }, {
                              default: withCtx((_5, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(ssrRenderComponent(_component_ElSkeletonItem, { variant: "text" }, null, _parent5, _scopeId4));
                                } else {
                                  return [
                                    createVNode(_component_ElSkeletonItem, { variant: "text" })
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent4, _scopeId3));
                          });
                          _push4(`<!--]-->`);
                          _push4(ssrRenderComponent(_component_ElRow, {
                            justify: "center",
                            class: "mt-12"
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(_component_ElButton, {
                                  type: "primary",
                                  plain: "",
                                  disabled: ""
                                }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(` Natrag na Webshop `);
                                    } else {
                                      return [
                                        createTextVNode(" Natrag na Webshop ")
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(_component_ElButton, {
                                    type: "primary",
                                    plain: "",
                                    disabled: ""
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(" Natrag na Webshop ")
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
                              justify: "center",
                              class: "mb-20"
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_ElSkeletonItem, {
                                  variant: "text",
                                  style: { "width": "200px" }
                                })
                              ]),
                              _: 1
                            }),
                            createVNode(_component_ElRow, {
                              justify: "center",
                              class: "mb-12"
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_ElSkeletonItem, {
                                  variant: "image",
                                  style: { "width": "100px", "height": "100px", "border-radius": "100%" }
                                })
                              ]),
                              _: 1
                            }),
                            (openBlock(), createBlock(Fragment, null, renderList(14, (_4, index) => {
                              return createVNode(_component_ElRow, {
                                justify: "start",
                                style: { "height": "19px" },
                                class: {
                                  "mb-12": index === 2 || index === 6 || index === 10,
                                  "w-80px": index === 0 || index === 3 || index === 7 || index === 11
                                }
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_ElSkeletonItem, { variant: "text" })
                                ]),
                                _: 2
                              }, 1032, ["class"]);
                            }), 64)),
                            createVNode(_component_ElRow, {
                              justify: "center",
                              class: "mt-12"
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_ElButton, {
                                  type: "primary",
                                  plain: "",
                                  disabled: ""
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" Natrag na Webshop ")
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
                      createVNode(_component_ElCard, { class: "order-state-skeleton-card" }, {
                        default: withCtx(() => [
                          createVNode(_component_ElRow, {
                            justify: "center",
                            class: "mb-20"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_ElSkeletonItem, {
                                variant: "text",
                                style: { "width": "200px" }
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_ElRow, {
                            justify: "center",
                            class: "mb-12"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_ElSkeletonItem, {
                                variant: "image",
                                style: { "width": "100px", "height": "100px", "border-radius": "100%" }
                              })
                            ]),
                            _: 1
                          }),
                          (openBlock(), createBlock(Fragment, null, renderList(14, (_3, index) => {
                            return createVNode(_component_ElRow, {
                              justify: "start",
                              style: { "height": "19px" },
                              class: {
                                "mb-12": index === 2 || index === 6 || index === 10,
                                "w-80px": index === 0 || index === 3 || index === 7 || index === 11
                              }
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_ElSkeletonItem, { variant: "text" })
                              ]),
                              _: 2
                            }, 1032, ["class"]);
                          }), 64)),
                          createVNode(_component_ElRow, {
                            justify: "center",
                            class: "mt-12"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_ElButton, {
                                type: "primary",
                                plain: "",
                                disabled: ""
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" Natrag na Webshop ")
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
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_ElRow, {
                  justify: "center",
                  align: "middle"
                }, {
                  default: withCtx(() => [
                    createVNode(_component_ElCard, { class: "order-state-skeleton-card" }, {
                      default: withCtx(() => [
                        createVNode(_component_ElRow, {
                          justify: "center",
                          class: "mb-20"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_ElSkeletonItem, {
                              variant: "text",
                              style: { "width": "200px" }
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(_component_ElRow, {
                          justify: "center",
                          class: "mb-12"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_ElSkeletonItem, {
                              variant: "image",
                              style: { "width": "100px", "height": "100px", "border-radius": "100%" }
                            })
                          ]),
                          _: 1
                        }),
                        (openBlock(), createBlock(Fragment, null, renderList(14, (_2, index) => {
                          return createVNode(_component_ElRow, {
                            justify: "start",
                            style: { "height": "19px" },
                            class: {
                              "mb-12": index === 2 || index === 6 || index === 10,
                              "w-80px": index === 0 || index === 3 || index === 7 || index === 11
                            }
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_ElSkeletonItem, { variant: "text" })
                            ]),
                            _: 2
                          }, 1032, ["class"]);
                        }), 64)),
                        createVNode(_component_ElRow, {
                          justify: "center",
                          class: "mt-12"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_ElButton, {
                              type: "primary",
                              plain: "",
                              disabled: ""
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" Natrag na Webshop ")
                              ]),
                              _: 1
                            })
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
      } else if (unref(state) === "error") {
        _push(ssrRenderComponent(_component_ElRow, {
          justify: "center",
          align: "middle"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_ElCard, { class: "order-state-card" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_ElRow, {
                      justify: "center",
                      class: "mb-12 color-danger"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(` Narud\u017Eba nije uspje\u0161na `);
                        } else {
                          return [
                            createTextVNode(" Narud\u017Eba nije uspje\u0161na ")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(_component_ElRow, {
                      justify: "center",
                      class: "mb-12 color-danger"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_ElIcon, { size: 100 }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(unref(circle_close_filled_default), null, null, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(unref(circle_close_filled_default))
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(_component_ElIcon, { size: 100 }, {
                              default: withCtx(() => [
                                createVNode(unref(circle_close_filled_default))
                              ]),
                              _: 1
                            })
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(_component_ElRow, { class: "text-underline" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(` Narud\u017Eba `);
                        } else {
                          return [
                            createTextVNode(" Narud\u017Eba ")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(_component_ElRow, null, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(` ID: ${ssrInterpolate(unref(orderId))}`);
                        } else {
                          return [
                            createTextVNode(" ID: " + toDisplayString(unref(orderId)), 1)
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_ElRow, {
                        justify: "center",
                        class: "mb-12 color-danger"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" Narud\u017Eba nije uspje\u0161na ")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_ElRow, {
                        justify: "center",
                        class: "mb-12 color-danger"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_ElIcon, { size: 100 }, {
                            default: withCtx(() => [
                              createVNode(unref(circle_close_filled_default))
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(_component_ElRow, { class: "text-underline" }, {
                        default: withCtx(() => [
                          createTextVNode(" Narud\u017Eba ")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_ElRow, null, {
                        default: withCtx(() => [
                          createTextVNode(" ID: " + toDisplayString(unref(orderId)), 1)
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
                createVNode(_component_ElCard, { class: "order-state-card" }, {
                  default: withCtx(() => [
                    createVNode(_component_ElRow, {
                      justify: "center",
                      class: "mb-12 color-danger"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" Narud\u017Eba nije uspje\u0161na ")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_ElRow, {
                      justify: "center",
                      class: "mb-12 color-danger"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_ElIcon, { size: 100 }, {
                          default: withCtx(() => [
                            createVNode(unref(circle_close_filled_default))
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(_component_ElRow, { class: "text-underline" }, {
                      default: withCtx(() => [
                        createTextVNode(" Narud\u017Eba ")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_ElRow, null, {
                      default: withCtx(() => [
                        createTextVNode(" ID: " + toDisplayString(unref(orderId)), 1)
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
      } else {
        _push(ssrRenderComponent(_component_ElRow, {
          justify: "center",
          align: "middle"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_ElCard, { class: "order-state-card" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_ElRow, {
                      justify: "center",
                      class: "mb-12 color-success"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(` Narud\u017Eba je uspje\u0161na `);
                        } else {
                          return [
                            createTextVNode(" Narud\u017Eba je uspje\u0161na ")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(_component_ElRow, {
                      justify: "center",
                      class: "mb-12 color-success"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_ElIcon, { size: 100 }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(unref(success_filled_default), null, null, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(unref(success_filled_default))
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(_component_ElIcon, { size: 100 }, {
                              default: withCtx(() => [
                                createVNode(unref(success_filled_default))
                              ]),
                              _: 1
                            })
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(_component_ElRow, { class: "text-underline" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(` Narud\u017Eba `);
                        } else {
                          return [
                            createTextVNode(" Narud\u017Eba ")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(_component_ElRow, null, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(` ID: ${ssrInterpolate(unref(orderId))}`);
                        } else {
                          return [
                            createTextVNode(" ID: " + toDisplayString(unref(orderId)), 1)
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(_component_ElRow, { class: "mb-12" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        var _a, _b;
                        if (_push4) {
                          _push4(` Vrijeme: ${ssrInterpolate(("formatISOToDatetime" in _ctx ? _ctx.formatISOToDatetime : unref(formatISOToDatetime))((_a = unref(order)) == null ? void 0 : _a.createdAt))}`);
                        } else {
                          return [
                            createTextVNode(" Vrijeme: " + toDisplayString(("formatISOToDatetime" in _ctx ? _ctx.formatISOToDatetime : unref(formatISOToDatetime))((_b = unref(order)) == null ? void 0 : _b.createdAt)), 1)
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(_component_ElRow, { class: "text-underline" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(` Proizvod `);
                        } else {
                          return [
                            createTextVNode(" Proizvod ")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(_component_ElRow, null, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        var _a, _b;
                        if (_push4) {
                          _push4(`ID: ${ssrInterpolate((_a = unref(order)) == null ? void 0 : _a.product.id)}`);
                        } else {
                          return [
                            createTextVNode("ID: " + toDisplayString((_b = unref(order)) == null ? void 0 : _b.product.id), 1)
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(_component_ElRow, null, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        var _a, _b;
                        if (_push4) {
                          _push4(`Naziv: ${ssrInterpolate((_a = unref(order)) == null ? void 0 : _a.product.name)}`);
                        } else {
                          return [
                            createTextVNode("Naziv: " + toDisplayString((_b = unref(order)) == null ? void 0 : _b.product.name), 1)
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(_component_ElRow, { class: "mb-12" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        var _a, _b;
                        if (_push4) {
                          _push4(`Price: ${ssrInterpolate((_a = unref(order)) == null ? void 0 : _a.product.price)} \u20AC`);
                        } else {
                          return [
                            createTextVNode("Price: " + toDisplayString((_b = unref(order)) == null ? void 0 : _b.product.price) + " \u20AC", 1)
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(_component_ElRow, { class: "text-underline" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(` Kupac `);
                        } else {
                          return [
                            createTextVNode(" Kupac ")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(_component_ElRow, null, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        var _a, _b;
                        if (_push4) {
                          _push4(`Ime i prezime: ${ssrInterpolate((_a = unref(order)) == null ? void 0 : _a.buyerFullname)}`);
                        } else {
                          return [
                            createTextVNode("Ime i prezime: " + toDisplayString((_b = unref(order)) == null ? void 0 : _b.buyerFullname), 1)
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(_component_ElRow, null, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        var _a, _b;
                        if (_push4) {
                          _push4(`Mjesto: ${ssrInterpolate((_a = unref(order)) == null ? void 0 : _a.buyerPlace)}`);
                        } else {
                          return [
                            createTextVNode("Mjesto: " + toDisplayString((_b = unref(order)) == null ? void 0 : _b.buyerPlace), 1)
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(_component_ElRow, { class: "mb-12" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        var _a, _b;
                        if (_push4) {
                          _push4(`Dr\u017Eava: ${ssrInterpolate((_a = unref(order)) == null ? void 0 : _a.buyerCountry)}`);
                        } else {
                          return [
                            createTextVNode("Dr\u017Eava: " + toDisplayString((_b = unref(order)) == null ? void 0 : _b.buyerCountry), 1)
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(_component_ElRow, { class: "text-underline" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(` Prodava\u010D `);
                        } else {
                          return [
                            createTextVNode(" Prodava\u010D ")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(_component_ElRow, null, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        var _a, _b;
                        if (_push4) {
                          _push4(`Mjesto: ${ssrInterpolate((_a = unref(order)) == null ? void 0 : _a.product.locationPlace)}`);
                        } else {
                          return [
                            createTextVNode("Mjesto: " + toDisplayString((_b = unref(order)) == null ? void 0 : _b.product.locationPlace), 1)
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(_component_ElRow, { class: "mb-12" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        var _a, _b;
                        if (_push4) {
                          _push4(` Dr\u017Eava: ${ssrInterpolate((_a = unref(order)) == null ? void 0 : _a.product.locationCountry)}`);
                        } else {
                          return [
                            createTextVNode(" Dr\u017Eava: " + toDisplayString((_b = unref(order)) == null ? void 0 : _b.product.locationCountry), 1)
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(_component_ElRow, { justify: "center" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_NuxtLink, {
                            to: "/webshop",
                            class: "link-fix"
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(_component_ElButton, {
                                  type: "primary",
                                  plain: ""
                                }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(`Natrag na Webshop`);
                                    } else {
                                      return [
                                        createTextVNode("Natrag na Webshop")
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(_component_ElButton, {
                                    type: "primary",
                                    plain: ""
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode("Natrag na Webshop")
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
                              to: "/webshop",
                              class: "link-fix"
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_ElButton, {
                                  type: "primary",
                                  plain: ""
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("Natrag na Webshop")
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
                      createVNode(_component_ElRow, {
                        justify: "center",
                        class: "mb-12 color-success"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" Narud\u017Eba je uspje\u0161na ")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_ElRow, {
                        justify: "center",
                        class: "mb-12 color-success"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_ElIcon, { size: 100 }, {
                            default: withCtx(() => [
                              createVNode(unref(success_filled_default))
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(_component_ElRow, { class: "text-underline" }, {
                        default: withCtx(() => [
                          createTextVNode(" Narud\u017Eba ")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_ElRow, null, {
                        default: withCtx(() => [
                          createTextVNode(" ID: " + toDisplayString(unref(orderId)), 1)
                        ]),
                        _: 1
                      }),
                      createVNode(_component_ElRow, { class: "mb-12" }, {
                        default: withCtx(() => {
                          var _a;
                          return [
                            createTextVNode(" Vrijeme: " + toDisplayString(("formatISOToDatetime" in _ctx ? _ctx.formatISOToDatetime : unref(formatISOToDatetime))((_a = unref(order)) == null ? void 0 : _a.createdAt)), 1)
                          ];
                        }),
                        _: 1
                      }),
                      createVNode(_component_ElRow, { class: "text-underline" }, {
                        default: withCtx(() => [
                          createTextVNode(" Proizvod ")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_ElRow, null, {
                        default: withCtx(() => {
                          var _a;
                          return [
                            createTextVNode("ID: " + toDisplayString((_a = unref(order)) == null ? void 0 : _a.product.id), 1)
                          ];
                        }),
                        _: 1
                      }),
                      createVNode(_component_ElRow, null, {
                        default: withCtx(() => {
                          var _a;
                          return [
                            createTextVNode("Naziv: " + toDisplayString((_a = unref(order)) == null ? void 0 : _a.product.name), 1)
                          ];
                        }),
                        _: 1
                      }),
                      createVNode(_component_ElRow, { class: "mb-12" }, {
                        default: withCtx(() => {
                          var _a;
                          return [
                            createTextVNode("Price: " + toDisplayString((_a = unref(order)) == null ? void 0 : _a.product.price) + " \u20AC", 1)
                          ];
                        }),
                        _: 1
                      }),
                      createVNode(_component_ElRow, { class: "text-underline" }, {
                        default: withCtx(() => [
                          createTextVNode(" Kupac ")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_ElRow, null, {
                        default: withCtx(() => {
                          var _a;
                          return [
                            createTextVNode("Ime i prezime: " + toDisplayString((_a = unref(order)) == null ? void 0 : _a.buyerFullname), 1)
                          ];
                        }),
                        _: 1
                      }),
                      createVNode(_component_ElRow, null, {
                        default: withCtx(() => {
                          var _a;
                          return [
                            createTextVNode("Mjesto: " + toDisplayString((_a = unref(order)) == null ? void 0 : _a.buyerPlace), 1)
                          ];
                        }),
                        _: 1
                      }),
                      createVNode(_component_ElRow, { class: "mb-12" }, {
                        default: withCtx(() => {
                          var _a;
                          return [
                            createTextVNode("Dr\u017Eava: " + toDisplayString((_a = unref(order)) == null ? void 0 : _a.buyerCountry), 1)
                          ];
                        }),
                        _: 1
                      }),
                      createVNode(_component_ElRow, { class: "text-underline" }, {
                        default: withCtx(() => [
                          createTextVNode(" Prodava\u010D ")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_ElRow, null, {
                        default: withCtx(() => {
                          var _a;
                          return [
                            createTextVNode("Mjesto: " + toDisplayString((_a = unref(order)) == null ? void 0 : _a.product.locationPlace), 1)
                          ];
                        }),
                        _: 1
                      }),
                      createVNode(_component_ElRow, { class: "mb-12" }, {
                        default: withCtx(() => {
                          var _a;
                          return [
                            createTextVNode(" Dr\u017Eava: " + toDisplayString((_a = unref(order)) == null ? void 0 : _a.product.locationCountry), 1)
                          ];
                        }),
                        _: 1
                      }),
                      createVNode(_component_ElRow, { justify: "center" }, {
                        default: withCtx(() => [
                          createVNode(_component_NuxtLink, {
                            to: "/webshop",
                            class: "link-fix"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_ElButton, {
                                type: "primary",
                                plain: ""
                              }, {
                                default: withCtx(() => [
                                  createTextVNode("Natrag na Webshop")
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
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_ElCard, { class: "order-state-card" }, {
                  default: withCtx(() => [
                    createVNode(_component_ElRow, {
                      justify: "center",
                      class: "mb-12 color-success"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" Narud\u017Eba je uspje\u0161na ")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_ElRow, {
                      justify: "center",
                      class: "mb-12 color-success"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_ElIcon, { size: 100 }, {
                          default: withCtx(() => [
                            createVNode(unref(success_filled_default))
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(_component_ElRow, { class: "text-underline" }, {
                      default: withCtx(() => [
                        createTextVNode(" Narud\u017Eba ")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_ElRow, null, {
                      default: withCtx(() => [
                        createTextVNode(" ID: " + toDisplayString(unref(orderId)), 1)
                      ]),
                      _: 1
                    }),
                    createVNode(_component_ElRow, { class: "mb-12" }, {
                      default: withCtx(() => {
                        var _a;
                        return [
                          createTextVNode(" Vrijeme: " + toDisplayString(("formatISOToDatetime" in _ctx ? _ctx.formatISOToDatetime : unref(formatISOToDatetime))((_a = unref(order)) == null ? void 0 : _a.createdAt)), 1)
                        ];
                      }),
                      _: 1
                    }),
                    createVNode(_component_ElRow, { class: "text-underline" }, {
                      default: withCtx(() => [
                        createTextVNode(" Proizvod ")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_ElRow, null, {
                      default: withCtx(() => {
                        var _a;
                        return [
                          createTextVNode("ID: " + toDisplayString((_a = unref(order)) == null ? void 0 : _a.product.id), 1)
                        ];
                      }),
                      _: 1
                    }),
                    createVNode(_component_ElRow, null, {
                      default: withCtx(() => {
                        var _a;
                        return [
                          createTextVNode("Naziv: " + toDisplayString((_a = unref(order)) == null ? void 0 : _a.product.name), 1)
                        ];
                      }),
                      _: 1
                    }),
                    createVNode(_component_ElRow, { class: "mb-12" }, {
                      default: withCtx(() => {
                        var _a;
                        return [
                          createTextVNode("Price: " + toDisplayString((_a = unref(order)) == null ? void 0 : _a.product.price) + " \u20AC", 1)
                        ];
                      }),
                      _: 1
                    }),
                    createVNode(_component_ElRow, { class: "text-underline" }, {
                      default: withCtx(() => [
                        createTextVNode(" Kupac ")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_ElRow, null, {
                      default: withCtx(() => {
                        var _a;
                        return [
                          createTextVNode("Ime i prezime: " + toDisplayString((_a = unref(order)) == null ? void 0 : _a.buyerFullname), 1)
                        ];
                      }),
                      _: 1
                    }),
                    createVNode(_component_ElRow, null, {
                      default: withCtx(() => {
                        var _a;
                        return [
                          createTextVNode("Mjesto: " + toDisplayString((_a = unref(order)) == null ? void 0 : _a.buyerPlace), 1)
                        ];
                      }),
                      _: 1
                    }),
                    createVNode(_component_ElRow, { class: "mb-12" }, {
                      default: withCtx(() => {
                        var _a;
                        return [
                          createTextVNode("Dr\u017Eava: " + toDisplayString((_a = unref(order)) == null ? void 0 : _a.buyerCountry), 1)
                        ];
                      }),
                      _: 1
                    }),
                    createVNode(_component_ElRow, { class: "text-underline" }, {
                      default: withCtx(() => [
                        createTextVNode(" Prodava\u010D ")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_ElRow, null, {
                      default: withCtx(() => {
                        var _a;
                        return [
                          createTextVNode("Mjesto: " + toDisplayString((_a = unref(order)) == null ? void 0 : _a.product.locationPlace), 1)
                        ];
                      }),
                      _: 1
                    }),
                    createVNode(_component_ElRow, { class: "mb-12" }, {
                      default: withCtx(() => {
                        var _a;
                        return [
                          createTextVNode(" Dr\u017Eava: " + toDisplayString((_a = unref(order)) == null ? void 0 : _a.product.locationCountry), 1)
                        ];
                      }),
                      _: 1
                    }),
                    createVNode(_component_ElRow, { justify: "center" }, {
                      default: withCtx(() => [
                        createVNode(_component_NuxtLink, {
                          to: "/webshop",
                          class: "link-fix"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_ElButton, {
                              type: "primary",
                              plain: ""
                            }, {
                              default: withCtx(() => [
                                createTextVNode("Natrag na Webshop")
                              ]),
                              _: 1
                            })
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
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/webshop/OrderStatePage.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const OrderStatePage = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-b0d83a68"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "[orderId]",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "Narud\u017Eba",
      meta: [
        {
          name: "description",
          content: `Stanje va\u0161e narud\u017Ebe mo\u017Eete provjeriti ovdje.`
        },
        { property: "og:title", content: "Portal" },
        {
          property: "og:description",
          content: `Stanje va\u0161e narud\u017Ebe mo\u017Eete provjeriti ovdje.`
        }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(OrderStatePage, _attrs, null, _parent));
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/webshop/[productId]/narudzba/[orderId].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=_orderId_-nVay1JLv.mjs.map
