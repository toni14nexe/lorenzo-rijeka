import { defineComponent, ref, reactive, mergeProps, withCtx, createVNode, unref, createBlock, openBlock, Fragment, renderList, createTextVNode, toDisplayString, createCommentVNode, withDirectives, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderAttrs, ssrRenderList, ssrInterpolate, ssrRenderAttr, ssrGetDirectiveProps } from 'vue/server-renderer';
import { v as useHead, _ as _export_sfc, u as useNuxtApp, bc as useRoute, b as ElRow, g as ElSkeleton, k as ElCard, h as ElSkeletonItem, Y as ElButton, e as ElIcon, be as shopping_cart_default, E as ElEmpty, X as ElInput, aQ as vLoading, n as navigateTo } from './server.mjs';
import { d as validateCountry, e as validateZipCode, f as validateAddress, v as validateEmail, g as validateFullname, E as ElForm, a as ElFormItem } from './validations-DTag85cS.mjs';
import { E as ElInputNumber } from './el-input-number-DXbXzZTK.mjs';
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
import 'async-validator';

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "OrderPage",
  __ssrInlineRender: true,
  setup(__props) {
    const { $axios } = useNuxtApp();
    useRoute();
    const isLoading = ref(true);
    const fullscreenLoading = ref(false);
    const product = ref();
    const ruleFormRef = ref();
    const form = reactive({
      productId: "",
      quantity: 0,
      totalPrice: 0,
      buyerFullname: "",
      buyerEmail: "",
      buyerNumber: "",
      buyerAddress: "",
      buyerPlace: "",
      buyerZipCode: "",
      buyerCountry: "",
      description: ""
    });
    const rules = reactive({
      quantity: [
        { required: true, message: "Odaberite akciju", trigger: "change" }
      ],
      buyerFullname: [
        { required: true, message: "Unesite ime i prezime", trigger: "change" },
        {
          validator: (_, value, callback) => {
            if (!validateFullname(value))
              callback(new Error("Ispravno unesite ime i prezime"));
            else callback();
          },
          trigger: "change"
        }
      ],
      buyerEmail: [
        { required: true, message: "Unesite email", trigger: "change" },
        {
          validator: (_, value, callback) => {
            if (!validateEmail(value)) callback(new Error("Unesite ispravni email"));
            else callback();
          },
          trigger: "change"
        }
      ],
      buyerAddress: [
        { required: true, message: "Unesite adresu", trigger: "change" },
        {
          validator: (_, value, callback) => {
            if (!validateAddress(value))
              callback(new Error("Unesite ispravnu adresu"));
            else callback();
          },
          trigger: "change"
        }
      ],
      buyerPlace: [
        { required: true, message: "Unesite mjesto", trigger: "change" },
        { min: 3, message: "Unesite ispravno mjesto", trigger: "change" }
      ],
      buyerZipCode: [
        { required: true, message: "Unesite po\u0161tanski broj", trigger: "change" },
        {
          validator: (_, value, callback) => {
            if (!validateZipCode(value))
              callback(new Error("Unesite ispravni po\u0161tanski broj"));
            else callback();
          },
          trigger: "change"
        }
      ],
      buyerCountry: [
        { required: true, message: "Unesite naziv dr\u017Eave", trigger: "change" },
        {
          validator: (_, value, callback) => {
            if (!validateCountry(value))
              callback(new Error("Unesite ispravni naziv dr\u017Eave"));
            else callback();
          },
          trigger: "change"
        }
      ],
      description: [
        {
          max: 300,
          message: "Maximalno 300 znakova",
          trigger: "change"
        }
      ]
    });
    async function placeOrder(formEl) {
      if (!formEl) return;
      await formEl.validate(async (valid) => {
        var _a;
        if (valid) {
          fullscreenLoading.value = true;
          try {
            const response = await $axios.post("/order", form);
            navigateTo(`/webshop/${(_a = product.value) == null ? void 0 : _a.id}/narudzba/${response.data.id}`);
          } catch (error) {
            console.error("API Error:", error);
          } finally {
            fullscreenLoading.value = false;
          }
        }
      });
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ElRow = ElRow;
      const _component_ElSkeleton = ElSkeleton;
      const _component_ElCard = ElCard;
      const _component_ElSkeletonItem = ElSkeletonItem;
      const _component_ElButton = ElButton;
      const _component_ElIcon = ElIcon;
      const _component_ElEmpty = ElEmpty;
      const _component_ElForm = ElForm;
      const _component_ElFormItem = ElFormItem;
      const _component_ElInputNumber = ElInputNumber;
      const _component_ElInput = ElInput;
      const _directive_loading = vLoading;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "page-container" }, _attrs))} data-v-26fc9d89>`);
      _push(ssrRenderComponent(_component_ElRow, {
        justify: "center",
        align: "middle"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h3 class="color-primary" data-v-26fc9d89${_scopeId}>Narud\u017Eba</h3>`);
          } else {
            return [
              createVNode("h3", { class: "color-primary" }, "Narud\u017Eba")
            ];
          }
        }),
        _: 1
      }, _parent));
      if (unref(isLoading)) {
        _push(ssrRenderComponent(_component_ElSkeleton, { animated: "" }, {
          template: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_ElRow, {
                justify: "center",
                align: "middle",
                class: "mb-24"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_ElCard, { class: "product-card" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<!--[-->`);
                          ssrRenderList(5, (_4, index) => {
                            _push4(ssrRenderComponent(_component_ElRow, {
                              align: "middle",
                              style: { "width": "200px", "height": "19px" },
                              class: { "mb-12": index === 1 }
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
                        } else {
                          return [
                            (openBlock(), createBlock(Fragment, null, renderList(5, (_4, index) => {
                              return createVNode(_component_ElRow, {
                                align: "middle",
                                style: { "width": "200px", "height": "19px" },
                                class: { "mb-12": index === 1 }
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_ElSkeletonItem, { variant: "text" })
                                ]),
                                _: 2
                              }, 1032, ["class"]);
                            }), 64))
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_ElCard, { class: "product-card" }, {
                        default: withCtx(() => [
                          (openBlock(), createBlock(Fragment, null, renderList(5, (_3, index) => {
                            return createVNode(_component_ElRow, {
                              align: "middle",
                              style: { "width": "200px", "height": "19px" },
                              class: { "mb-12": index === 1 }
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_ElSkeletonItem, { variant: "text" })
                              ]),
                              _: 2
                            }, 1032, ["class"]);
                          }), 64))
                        ]),
                        _: 1
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`<!--[-->`);
              ssrRenderList(10, (_2) => {
                _push2(ssrRenderComponent(_component_ElRow, {
                  justify: "center",
                  align: "middle",
                  style: { "width": "100%", "margin-bottom": "18px" }
                }, {
                  default: withCtx((_3, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(ssrRenderComponent(_component_ElSkeletonItem, {
                        variant: "text",
                        style: { "width": "145px", "height": "32px", "margin-right": "7px" }
                      }, null, _parent3, _scopeId2));
                      _push3(ssrRenderComponent(_component_ElSkeletonItem, {
                        variant: "text",
                        style: { "width": "204px", "height": "32px" }
                      }, null, _parent3, _scopeId2));
                    } else {
                      return [
                        createVNode(_component_ElSkeletonItem, {
                          variant: "text",
                          style: { "width": "145px", "height": "32px", "margin-right": "7px" }
                        }),
                        createVNode(_component_ElSkeletonItem, {
                          variant: "text",
                          style: { "width": "204px", "height": "32px" }
                        })
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
              });
              _push2(`<!--]-->`);
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
                          _push4(` Naru\u010Di `);
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
                            createTextVNode(" Naru\u010Di ")
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
                          createTextVNode(" Naru\u010Di ")
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
                  class: "mb-24"
                }, {
                  default: withCtx(() => [
                    createVNode(_component_ElCard, { class: "product-card" }, {
                      default: withCtx(() => [
                        (openBlock(), createBlock(Fragment, null, renderList(5, (_2, index) => {
                          return createVNode(_component_ElRow, {
                            align: "middle",
                            style: { "width": "200px", "height": "19px" },
                            class: { "mb-12": index === 1 }
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_ElSkeletonItem, { variant: "text" })
                            ]),
                            _: 2
                          }, 1032, ["class"]);
                        }), 64))
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                (openBlock(), createBlock(Fragment, null, renderList(10, (_2) => {
                  return createVNode(_component_ElRow, {
                    justify: "center",
                    align: "middle",
                    style: { "width": "100%", "margin-bottom": "18px" }
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_ElSkeletonItem, {
                        variant: "text",
                        style: { "width": "145px", "height": "32px", "margin-right": "7px" }
                      }),
                      createVNode(_component_ElSkeletonItem, {
                        variant: "text",
                        style: { "width": "204px", "height": "32px" }
                      })
                    ]),
                    _: 1
                  });
                }), 64)),
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
                        createTextVNode(" Naru\u010Di ")
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
        _push(ssrRenderComponent(_component_ElEmpty, { description: "Ups! Ovdje nema dostupnog proizvoda..." }, null, _parent));
      } else {
        _push(`<!--[-->`);
        _push(ssrRenderComponent(_component_ElRow, {
          justify: "center",
          align: "middle",
          class: "mb-24"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_ElCard, { class: "product-card" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_ElRow, { align: "middle" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(` Proizvod: ${ssrInterpolate(unref(product).name)}`);
                        } else {
                          return [
                            createTextVNode(" Proizvod: " + toDisplayString(unref(product).name), 1)
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(_component_ElRow, {
                      align: "middle",
                      class: "mb-12"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(` Cijena: ${ssrInterpolate(Number(unref(product).price).toFixed(2))} \u20AC `);
                        } else {
                          return [
                            createTextVNode(" Cijena: " + toDisplayString(Number(unref(product).price).toFixed(2)) + " \u20AC ", 1)
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(_component_ElRow, { align: "middle" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(` Lokacija: ${ssrInterpolate(`${unref(product).locationPlace}, ${unref(product).locationCountry}`)}`);
                        } else {
                          return [
                            createTextVNode(" Lokacija: " + toDisplayString(`${unref(product).locationPlace}, ${unref(product).locationCountry}`), 1)
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    if (unref(product).contactEmail) {
                      _push3(ssrRenderComponent(_component_ElRow, { align: "middle" }, {
                        default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(` Email: <a${ssrRenderAttr("href", `mailto:${unref(product).contactEmail}`)} class="ml-4" data-v-26fc9d89${_scopeId3}>${ssrInterpolate(unref(product).contactEmail)}</a>`);
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
                      }, _parent3, _scopeId2));
                    } else {
                      _push3(`<!---->`);
                    }
                    if (unref(product).contactNumber) {
                      _push3(ssrRenderComponent(_component_ElRow, { align: "middle" }, {
                        default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(` Broj: ${ssrInterpolate(unref(product).contactNumber)}`);
                          } else {
                            return [
                              createTextVNode(" Broj: " + toDisplayString(unref(product).contactNumber), 1)
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
                      createVNode(_component_ElRow, { align: "middle" }, {
                        default: withCtx(() => [
                          createTextVNode(" Proizvod: " + toDisplayString(unref(product).name), 1)
                        ]),
                        _: 1
                      }),
                      createVNode(_component_ElRow, {
                        align: "middle",
                        class: "mb-12"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" Cijena: " + toDisplayString(Number(unref(product).price).toFixed(2)) + " \u20AC ", 1)
                        ]),
                        _: 1
                      }),
                      createVNode(_component_ElRow, { align: "middle" }, {
                        default: withCtx(() => [
                          createTextVNode(" Lokacija: " + toDisplayString(`${unref(product).locationPlace}, ${unref(product).locationCountry}`), 1)
                        ]),
                        _: 1
                      }),
                      unref(product).contactEmail ? (openBlock(), createBlock(_component_ElRow, {
                        key: 0,
                        align: "middle"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" Email: "),
                          createVNode("a", {
                            href: `mailto:${unref(product).contactEmail}`,
                            class: "ml-4"
                          }, toDisplayString(unref(product).contactEmail), 9, ["href"])
                        ]),
                        _: 1
                      })) : createCommentVNode("", true),
                      unref(product).contactNumber ? (openBlock(), createBlock(_component_ElRow, {
                        key: 1,
                        align: "middle"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" Broj: " + toDisplayString(unref(product).contactNumber), 1)
                        ]),
                        _: 1
                      })) : createCommentVNode("", true)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_ElCard, { class: "product-card" }, {
                  default: withCtx(() => [
                    createVNode(_component_ElRow, { align: "middle" }, {
                      default: withCtx(() => [
                        createTextVNode(" Proizvod: " + toDisplayString(unref(product).name), 1)
                      ]),
                      _: 1
                    }),
                    createVNode(_component_ElRow, {
                      align: "middle",
                      class: "mb-12"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" Cijena: " + toDisplayString(Number(unref(product).price).toFixed(2)) + " \u20AC ", 1)
                      ]),
                      _: 1
                    }),
                    createVNode(_component_ElRow, { align: "middle" }, {
                      default: withCtx(() => [
                        createTextVNode(" Lokacija: " + toDisplayString(`${unref(product).locationPlace}, ${unref(product).locationCountry}`), 1)
                      ]),
                      _: 1
                    }),
                    unref(product).contactEmail ? (openBlock(), createBlock(_component_ElRow, {
                      key: 0,
                      align: "middle"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" Email: "),
                        createVNode("a", {
                          href: `mailto:${unref(product).contactEmail}`,
                          class: "ml-4"
                        }, toDisplayString(unref(product).contactEmail), 9, ["href"])
                      ]),
                      _: 1
                    })) : createCommentVNode("", true),
                    unref(product).contactNumber ? (openBlock(), createBlock(_component_ElRow, {
                      key: 1,
                      align: "middle"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" Broj: " + toDisplayString(unref(product).contactNumber), 1)
                      ]),
                      _: 1
                    })) : createCommentVNode("", true)
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
          align: "middle"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_ElForm, {
                "label-position": _ctx.$viewport.isLessThan("tablet") ? "top" : "left",
                "require-asterisk-position": "right",
                ref_key: "ruleFormRef",
                ref: ruleFormRef,
                model: unref(form),
                rules: unref(rules),
                "label-width": "auto",
                "status-icon": ""
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_ElFormItem, {
                      label: "Odaberite koli\u010Dinu",
                      prop: "quantity"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_ElInputNumber, {
                            modelValue: unref(form).quantity,
                            "onUpdate:modelValue": ($event) => unref(form).quantity = $event,
                            min: 1,
                            max: 100,
                            class: "ml-4 w-200",
                            onChange: ($event) => unref(form).totalPrice = unref(form).quantity * unref(product).price
                          }, null, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(_component_ElInputNumber, {
                              modelValue: unref(form).quantity,
                              "onUpdate:modelValue": ($event) => unref(form).quantity = $event,
                              min: 1,
                              max: 100,
                              class: "ml-4 w-200",
                              onChange: ($event) => unref(form).totalPrice = unref(form).quantity * unref(product).price
                            }, null, 8, ["modelValue", "onUpdate:modelValue", "onChange"])
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(_component_ElFormItem, {
                      label: "Ukupna cijena",
                      prop: "totalPrice"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<b class="ml-4" data-v-26fc9d89${_scopeId3}>${ssrInterpolate(unref(form).totalPrice.toFixed(2))} \u20AC</b>`);
                        } else {
                          return [
                            createVNode("b", { class: "ml-4" }, toDisplayString(unref(form).totalPrice.toFixed(2)) + " \u20AC", 1)
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(_component_ElFormItem, {
                      label: "Ime i prezime",
                      prop: "buyerFullname"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_ElInput, {
                            modelValue: unref(form).buyerFullname,
                            "onUpdate:modelValue": ($event) => unref(form).buyerFullname = $event,
                            placeholder: "Pero Peri\u0107",
                            autocomplete: "name"
                          }, null, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(_component_ElInput, {
                              modelValue: unref(form).buyerFullname,
                              "onUpdate:modelValue": ($event) => unref(form).buyerFullname = $event,
                              placeholder: "Pero Peri\u0107",
                              autocomplete: "name"
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(_component_ElFormItem, {
                      label: "Email",
                      prop: "buyerEmail"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_ElInput, {
                            modelValue: unref(form).buyerEmail,
                            "onUpdate:modelValue": ($event) => unref(form).buyerEmail = $event,
                            placeholder: "pero.peric@mail.com",
                            autocomplete: "email"
                          }, null, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(_component_ElInput, {
                              modelValue: unref(form).buyerEmail,
                              "onUpdate:modelValue": ($event) => unref(form).buyerEmail = $event,
                              placeholder: "pero.peric@mail.com",
                              autocomplete: "email"
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(_component_ElFormItem, {
                      label: "Broj mobitela",
                      prop: "buyerNumber"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_ElInput, {
                            modelValue: unref(form).buyerNumber,
                            "onUpdate:modelValue": ($event) => unref(form).buyerNumber = $event,
                            placeholder: "+385912345678",
                            autocomplete: "tel"
                          }, null, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(_component_ElInput, {
                              modelValue: unref(form).buyerNumber,
                              "onUpdate:modelValue": ($event) => unref(form).buyerNumber = $event,
                              placeholder: "+385912345678",
                              autocomplete: "tel"
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(_component_ElFormItem, {
                      label: "Adresa",
                      prop: "buyerAddress"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_ElInput, {
                            modelValue: unref(form).buyerAddress,
                            "onUpdate:modelValue": ($event) => unref(form).buyerAddress = $event,
                            placeholder: "Schulstra\xDFe 123A",
                            autocomplete: "street-address"
                          }, null, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(_component_ElInput, {
                              modelValue: unref(form).buyerAddress,
                              "onUpdate:modelValue": ($event) => unref(form).buyerAddress = $event,
                              placeholder: "Schulstra\xDFe 123A",
                              autocomplete: "street-address"
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(_component_ElFormItem, {
                      label: "Mjesto",
                      prop: "buyerPlace"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_ElInput, {
                            modelValue: unref(form).buyerPlace,
                            "onUpdate:modelValue": ($event) => unref(form).buyerPlace = $event,
                            placeholder: "Stuttgart",
                            autocomplete: "address-level2"
                          }, null, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(_component_ElInput, {
                              modelValue: unref(form).buyerPlace,
                              "onUpdate:modelValue": ($event) => unref(form).buyerPlace = $event,
                              placeholder: "Stuttgart",
                              autocomplete: "address-level2"
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(_component_ElFormItem, {
                      label: "Po\u0161tanski broj",
                      prop: "buyerZipCode"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_ElInput, {
                            modelValue: unref(form).buyerZipCode,
                            "onUpdate:modelValue": ($event) => unref(form).buyerZipCode = $event,
                            placeholder: "70178",
                            autocomplete: "postal-code"
                          }, null, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(_component_ElInput, {
                              modelValue: unref(form).buyerZipCode,
                              "onUpdate:modelValue": ($event) => unref(form).buyerZipCode = $event,
                              placeholder: "70178",
                              autocomplete: "postal-code"
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(_component_ElFormItem, {
                      label: "Dr\u017Eava",
                      prop: "buyerCountry"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_ElInput, {
                            modelValue: unref(form).buyerCountry,
                            "onUpdate:modelValue": ($event) => unref(form).buyerCountry = $event,
                            placeholder: "Njema\u010Dka",
                            autocomplete: "country"
                          }, null, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(_component_ElInput, {
                              modelValue: unref(form).buyerCountry,
                              "onUpdate:modelValue": ($event) => unref(form).buyerCountry = $event,
                              placeholder: "Njema\u010Dka",
                              autocomplete: "country"
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(_component_ElFormItem, {
                      label: "Napomena",
                      prop: "description"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_ElInput, {
                            modelValue: unref(form).description,
                            "onUpdate:modelValue": ($event) => unref(form).description = $event,
                            placeholder: "Napomena...",
                            type: "textarea",
                            autosize: "",
                            rows: 2
                          }, null, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(_component_ElInput, {
                              modelValue: unref(form).description,
                              "onUpdate:modelValue": ($event) => unref(form).description = $event,
                              placeholder: "Napomena...",
                              type: "textarea",
                              autosize: "",
                              rows: 2
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_ElFormItem, {
                        label: "Odaberite koli\u010Dinu",
                        prop: "quantity"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_ElInputNumber, {
                            modelValue: unref(form).quantity,
                            "onUpdate:modelValue": ($event) => unref(form).quantity = $event,
                            min: 1,
                            max: 100,
                            class: "ml-4 w-200",
                            onChange: ($event) => unref(form).totalPrice = unref(form).quantity * unref(product).price
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "onChange"])
                        ]),
                        _: 1
                      }),
                      createVNode(_component_ElFormItem, {
                        label: "Ukupna cijena",
                        prop: "totalPrice"
                      }, {
                        default: withCtx(() => [
                          createVNode("b", { class: "ml-4" }, toDisplayString(unref(form).totalPrice.toFixed(2)) + " \u20AC", 1)
                        ]),
                        _: 1
                      }),
                      createVNode(_component_ElFormItem, {
                        label: "Ime i prezime",
                        prop: "buyerFullname"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_ElInput, {
                            modelValue: unref(form).buyerFullname,
                            "onUpdate:modelValue": ($event) => unref(form).buyerFullname = $event,
                            placeholder: "Pero Peri\u0107",
                            autocomplete: "name"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        _: 1
                      }),
                      createVNode(_component_ElFormItem, {
                        label: "Email",
                        prop: "buyerEmail"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_ElInput, {
                            modelValue: unref(form).buyerEmail,
                            "onUpdate:modelValue": ($event) => unref(form).buyerEmail = $event,
                            placeholder: "pero.peric@mail.com",
                            autocomplete: "email"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        _: 1
                      }),
                      createVNode(_component_ElFormItem, {
                        label: "Broj mobitela",
                        prop: "buyerNumber"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_ElInput, {
                            modelValue: unref(form).buyerNumber,
                            "onUpdate:modelValue": ($event) => unref(form).buyerNumber = $event,
                            placeholder: "+385912345678",
                            autocomplete: "tel"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        _: 1
                      }),
                      createVNode(_component_ElFormItem, {
                        label: "Adresa",
                        prop: "buyerAddress"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_ElInput, {
                            modelValue: unref(form).buyerAddress,
                            "onUpdate:modelValue": ($event) => unref(form).buyerAddress = $event,
                            placeholder: "Schulstra\xDFe 123A",
                            autocomplete: "street-address"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        _: 1
                      }),
                      createVNode(_component_ElFormItem, {
                        label: "Mjesto",
                        prop: "buyerPlace"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_ElInput, {
                            modelValue: unref(form).buyerPlace,
                            "onUpdate:modelValue": ($event) => unref(form).buyerPlace = $event,
                            placeholder: "Stuttgart",
                            autocomplete: "address-level2"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        _: 1
                      }),
                      createVNode(_component_ElFormItem, {
                        label: "Po\u0161tanski broj",
                        prop: "buyerZipCode"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_ElInput, {
                            modelValue: unref(form).buyerZipCode,
                            "onUpdate:modelValue": ($event) => unref(form).buyerZipCode = $event,
                            placeholder: "70178",
                            autocomplete: "postal-code"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        _: 1
                      }),
                      createVNode(_component_ElFormItem, {
                        label: "Dr\u017Eava",
                        prop: "buyerCountry"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_ElInput, {
                            modelValue: unref(form).buyerCountry,
                            "onUpdate:modelValue": ($event) => unref(form).buyerCountry = $event,
                            placeholder: "Njema\u010Dka",
                            autocomplete: "country"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        _: 1
                      }),
                      createVNode(_component_ElFormItem, {
                        label: "Napomena",
                        prop: "description"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_ElInput, {
                            modelValue: unref(form).description,
                            "onUpdate:modelValue": ($event) => unref(form).description = $event,
                            placeholder: "Napomena...",
                            type: "textarea",
                            autosize: "",
                            rows: 2
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
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
                createVNode(_component_ElForm, {
                  "label-position": _ctx.$viewport.isLessThan("tablet") ? "top" : "left",
                  "require-asterisk-position": "right",
                  ref_key: "ruleFormRef",
                  ref: ruleFormRef,
                  model: unref(form),
                  rules: unref(rules),
                  "label-width": "auto",
                  "status-icon": ""
                }, {
                  default: withCtx(() => [
                    createVNode(_component_ElFormItem, {
                      label: "Odaberite koli\u010Dinu",
                      prop: "quantity"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_ElInputNumber, {
                          modelValue: unref(form).quantity,
                          "onUpdate:modelValue": ($event) => unref(form).quantity = $event,
                          min: 1,
                          max: 100,
                          class: "ml-4 w-200",
                          onChange: ($event) => unref(form).totalPrice = unref(form).quantity * unref(product).price
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "onChange"])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_ElFormItem, {
                      label: "Ukupna cijena",
                      prop: "totalPrice"
                    }, {
                      default: withCtx(() => [
                        createVNode("b", { class: "ml-4" }, toDisplayString(unref(form).totalPrice.toFixed(2)) + " \u20AC", 1)
                      ]),
                      _: 1
                    }),
                    createVNode(_component_ElFormItem, {
                      label: "Ime i prezime",
                      prop: "buyerFullname"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_ElInput, {
                          modelValue: unref(form).buyerFullname,
                          "onUpdate:modelValue": ($event) => unref(form).buyerFullname = $event,
                          placeholder: "Pero Peri\u0107",
                          autocomplete: "name"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_ElFormItem, {
                      label: "Email",
                      prop: "buyerEmail"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_ElInput, {
                          modelValue: unref(form).buyerEmail,
                          "onUpdate:modelValue": ($event) => unref(form).buyerEmail = $event,
                          placeholder: "pero.peric@mail.com",
                          autocomplete: "email"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_ElFormItem, {
                      label: "Broj mobitela",
                      prop: "buyerNumber"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_ElInput, {
                          modelValue: unref(form).buyerNumber,
                          "onUpdate:modelValue": ($event) => unref(form).buyerNumber = $event,
                          placeholder: "+385912345678",
                          autocomplete: "tel"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_ElFormItem, {
                      label: "Adresa",
                      prop: "buyerAddress"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_ElInput, {
                          modelValue: unref(form).buyerAddress,
                          "onUpdate:modelValue": ($event) => unref(form).buyerAddress = $event,
                          placeholder: "Schulstra\xDFe 123A",
                          autocomplete: "street-address"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_ElFormItem, {
                      label: "Mjesto",
                      prop: "buyerPlace"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_ElInput, {
                          modelValue: unref(form).buyerPlace,
                          "onUpdate:modelValue": ($event) => unref(form).buyerPlace = $event,
                          placeholder: "Stuttgart",
                          autocomplete: "address-level2"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_ElFormItem, {
                      label: "Po\u0161tanski broj",
                      prop: "buyerZipCode"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_ElInput, {
                          modelValue: unref(form).buyerZipCode,
                          "onUpdate:modelValue": ($event) => unref(form).buyerZipCode = $event,
                          placeholder: "70178",
                          autocomplete: "postal-code"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_ElFormItem, {
                      label: "Dr\u017Eava",
                      prop: "buyerCountry"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_ElInput, {
                          modelValue: unref(form).buyerCountry,
                          "onUpdate:modelValue": ($event) => unref(form).buyerCountry = $event,
                          placeholder: "Njema\u010Dka",
                          autocomplete: "country"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_ElFormItem, {
                      label: "Napomena",
                      prop: "description"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_ElInput, {
                          modelValue: unref(form).description,
                          "onUpdate:modelValue": ($event) => unref(form).description = $event,
                          placeholder: "Napomena...",
                          type: "textarea",
                          autosize: "",
                          rows: 2
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }, 8, ["label-position", "model", "rules"])
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
              _push2(ssrRenderComponent(_component_ElButton, mergeProps({
                type: "primary",
                plain: "",
                size: "large",
                loading: unref(isLoading),
                onClick: ($event) => placeOrder(unref(ruleFormRef))
              }, ssrGetDirectiveProps(_ctx, _directive_loading, unref(fullscreenLoading), void 0, {
                fullscreen: true,
                lock: true
              })), {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_ElIcon, {
                      size: 20,
                      class: "mr-8"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(unref(shopping_cart_default), null, null, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(unref(shopping_cart_default))
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(` Naru\u010Di `);
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
                      createTextVNode(" Naru\u010Di ")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              return [
                withDirectives((openBlock(), createBlock(_component_ElButton, {
                  type: "primary",
                  plain: "",
                  size: "large",
                  loading: unref(isLoading),
                  onClick: ($event) => placeOrder(unref(ruleFormRef))
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
                    createTextVNode(" Naru\u010Di ")
                  ]),
                  _: 1
                }, 8, ["loading", "onClick"])), [
                  [
                    _directive_loading,
                    unref(fullscreenLoading),
                    void 0,
                    {
                      fullscreen: true,
                      lock: true
                    }
                  ]
                ])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/webshop/OrderPage.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const OrderPage = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-26fc9d89"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const title = ref("Dovr\u0161ite narud\u017Ebu");
    useHead({
      title: title.value,
      meta: [
        {
          name: "description",
          content: `Ovdje mo\u017Eete dovr\u0161iti svoju narud\u017Ebu odabranog proizvoda. ${title.value}`
        },
        { property: "og:title", content: "Portal" },
        {
          property: "og:description",
          content: `Ovdje mo\u017Eete dovr\u0161iti svoju narud\u017Ebu odabranog proizvoda. ${title.value}`
        }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(OrderPage, _attrs, null, _parent));
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/webshop/[productId]/narudzba/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-BgRKiRkp.mjs.map
