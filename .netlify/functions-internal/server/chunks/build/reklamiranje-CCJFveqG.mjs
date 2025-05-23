import { defineComponent, ref, reactive, mergeProps, withCtx, createVNode, unref, createBlock, openBlock, Fragment, renderList, createCommentVNode, toDisplayString, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderAttrs, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import { v as useHead, _ as _export_sfc, u as useNuxtApp, a as useComStore, s as storeToRefs, b as ElRow, d as ElCol, g as ElSkeleton, h as ElSkeletonItem, X as ElInput, Y as ElButton, Z as ElNotification } from './server.mjs';
import { v as validateEmail, E as ElForm, a as ElFormItem } from './validations-DTag85cS.mjs';
import { E as ElSelect, a as ElOption } from './el-select-C7_MxKHv.mjs';
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
import './strings-D1uxkXhq.mjs';

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "ComsPage",
  __ssrInlineRender: true,
  setup(__props) {
    const { $axios } = useNuxtApp();
    const comStore = useComStore();
    const { comsLoading, dashboardSide, footerSlider, footerLarge } = storeToRefs(comStore);
    const ruleFormRef = ref();
    const loading = ref({ submit: false });
    const form = reactive({
      email: "",
      adId: "",
      message: ""
    });
    const rules = reactive({
      email: [
        { required: true, message: "Unesite email adresu", trigger: "blur" },
        {
          validator: (_, value, callback) => {
            if (!validateEmail(value)) callback(new Error("Neto\u010Dna email adresa"));
            else callback();
          },
          trigger: "blur"
        }
      ],
      adId: [{ required: true, message: "Unesite email adresu", trigger: "blur" }],
      message: [
        { max: 1e4, message: "Maximalno 10,000 znakova", trigger: "change" }
      ]
    });
    async function sendEmail(formEl) {
      if (!formEl) return;
      await formEl.validate(async (valid) => {
        if (valid) {
          loading.value.submit = true;
          try {
            await $axios.post(`/ad/email`, form);
            ElNotification({
              type: "success",
              message: "Email je uspje\u0161no poslan.",
              duration: 3e3
            });
            form.email = "";
            form.adId = "";
            form.message = "";
          } catch (error) {
            console.error("API Error:", error);
          } finally {
            loading.value.submit = false;
          }
        }
      });
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ElRow = ElRow;
      const _component_ElCol = ElCol;
      const _component_ElSkeleton = ElSkeleton;
      const _component_ElSkeletonItem = ElSkeletonItem;
      const _component_ElForm = ElForm;
      const _component_ElFormItem = ElFormItem;
      const _component_ElInput = ElInput;
      const _component_ElSelect = ElSelect;
      const _component_ElOption = ElOption;
      const _component_ElButton = ElButton;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "page-container mb-24" }, _attrs))} data-v-3eff968a>`);
      _push(ssrRenderComponent(_component_ElRow, {
        align: "middle",
        justify: "center"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h1 class="color-primary" data-v-3eff968a${_scopeId}>Reklamiranje</h1>`);
          } else {
            return [
              createVNode("h1", { class: "color-primary" }, "Reklamiranje")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_ElRow, {
        align: "middle",
        justify: "center"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_ElCol, {
              span: 24,
              align: "middle"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<h3 class="color-primary" data-v-3eff968a${_scopeId2}>Ponuda na naslovnici</h3>`);
                } else {
                  return [
                    createVNode("h3", { class: "color-primary" }, "Ponuda na naslovnici")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_ElCol, { span: 24 }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<img src="https://res.cloudinary.com/dtp08anpy/image/upload/v1746656871/1_rqrx5b.png" class="offer-image" data-v-3eff968a${_scopeId2}>`);
                } else {
                  return [
                    createVNode("img", {
                      src: "https://res.cloudinary.com/dtp08anpy/image/upload/v1746656871/1_rqrx5b.png",
                      class: "offer-image"
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_ElCol, {
                span: 24,
                align: "middle"
              }, {
                default: withCtx(() => [
                  createVNode("h3", { class: "color-primary" }, "Ponuda na naslovnici")
                ]),
                _: 1
              }),
              createVNode(_component_ElCol, { span: 24 }, {
                default: withCtx(() => [
                  createVNode("img", {
                    src: "https://res.cloudinary.com/dtp08anpy/image/upload/v1746656871/1_rqrx5b.png",
                    class: "offer-image"
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
        align: "middle",
        justify: "center"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_ElCol, {
              span: 24,
              align: "middle"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<h3 class="color-primary" data-v-3eff968a${_scopeId2}>Ponuda u podno\u017Eju</h3>`);
                } else {
                  return [
                    createVNode("h3", { class: "color-primary" }, "Ponuda u podno\u017Eju")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_ElCol, { span: 24 }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<img src="https://res.cloudinary.com/dtp08anpy/image/upload/v1746656871/2_o3xcor.png" class="offer-image" data-v-3eff968a${_scopeId2}>`);
                } else {
                  return [
                    createVNode("img", {
                      src: "https://res.cloudinary.com/dtp08anpy/image/upload/v1746656871/2_o3xcor.png",
                      class: "offer-image"
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_ElCol, {
                span: 24,
                align: "middle"
              }, {
                default: withCtx(() => [
                  createVNode("h3", { class: "color-primary" }, "Ponuda u podno\u017Eju")
                ]),
                _: 1
              }),
              createVNode(_component_ElCol, { span: 24 }, {
                default: withCtx(() => [
                  createVNode("img", {
                    src: "https://res.cloudinary.com/dtp08anpy/image/upload/v1746656871/2_o3xcor.png",
                    class: "offer-image"
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
        align: "middle",
        justify: "center"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_ElCol, {
              span: 24,
              align: "middle"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<h3 class="color-primary" data-v-3eff968a${_scopeId2}>Cijene</h3>`);
                } else {
                  return [
                    createVNode("h3", { class: "color-primary" }, "Cijene")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            if (unref(comsLoading)) {
              _push2(ssrRenderComponent(_component_ElSkeleton, { animated: "" }, {
                template: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<!--[-->`);
                    ssrRenderList(7, (_3) => {
                      _push3(ssrRenderComponent(_component_ElCol, { align: "middle" }, {
                        default: withCtx((_4, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(ssrRenderComponent(_component_ElSkeletonItem, {
                              variant: "text",
                              style: { "height": "21px", "margin": "7px 0", "width": "150px" }
                            }, null, _parent4, _scopeId3));
                          } else {
                            return [
                              createVNode(_component_ElSkeletonItem, {
                                variant: "text",
                                style: { "height": "21px", "margin": "7px 0", "width": "150px" }
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
                      (openBlock(), createBlock(Fragment, null, renderList(7, (_3) => {
                        return createVNode(_component_ElCol, { align: "middle" }, {
                          default: withCtx(() => [
                            createVNode(_component_ElSkeletonItem, {
                              variant: "text",
                              style: { "height": "21px", "margin": "7px 0", "width": "150px" }
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
              _push2(ssrRenderComponent(_component_ElCol, {
                span: 24,
                align: "middle"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  var _a, _b, _c, _d, _e, _f;
                  if (_push3) {
                    if (((_a = unref(dashboardSide)) == null ? void 0 : _a.left) && ((_b = unref(dashboardSide)) == null ? void 0 : _b.right)) {
                      _push3(`<!--[-->`);
                      ssrRenderList(unref(dashboardSide), (ad) => {
                        _push3(`<p data-v-3eff968a${_scopeId2}> Reklama ${ssrInterpolate(ad.id)} - ${ssrInterpolate(ad.price ? `${Number(ad.price).toFixed(2)} \u20AC` : "???.?? \u20AC")}</p>`);
                      });
                      _push3(`<!--]-->`);
                    } else {
                      _push3(`<!---->`);
                    }
                    if ((_c = unref(footerSlider)) == null ? void 0 : _c.length) {
                      _push3(`<!--[-->`);
                      ssrRenderList(unref(footerSlider), (ad) => {
                        _push3(`<p data-v-3eff968a${_scopeId2}> Reklama ${ssrInterpolate(ad.id)} - ${ssrInterpolate(ad.price ? `${Number(ad.price).toFixed(2)} \u20AC` : "???.?? \u20AC")}</p>`);
                      });
                      _push3(`<!--]-->`);
                    } else {
                      _push3(`<!---->`);
                    }
                    if (unref(footerLarge)) {
                      _push3(`<p data-v-3eff968a${_scopeId2}> Reklama ${ssrInterpolate(unref(footerLarge).id)} - ${ssrInterpolate(unref(footerLarge).price ? `${Number(unref(footerLarge).price).toFixed(2)} \u20AC` : "???.?? \u20AC")}</p>`);
                    } else {
                      _push3(`<!---->`);
                    }
                  } else {
                    return [
                      ((_d = unref(dashboardSide)) == null ? void 0 : _d.left) && ((_e = unref(dashboardSide)) == null ? void 0 : _e.right) ? (openBlock(true), createBlock(Fragment, { key: 0 }, renderList(unref(dashboardSide), (ad) => {
                        return openBlock(), createBlock("p", null, " Reklama " + toDisplayString(ad.id) + " - " + toDisplayString(ad.price ? `${Number(ad.price).toFixed(2)} \u20AC` : "???.?? \u20AC"), 1);
                      }), 256)) : createCommentVNode("", true),
                      ((_f = unref(footerSlider)) == null ? void 0 : _f.length) ? (openBlock(true), createBlock(Fragment, { key: 1 }, renderList(unref(footerSlider), (ad) => {
                        return openBlock(), createBlock("p", null, " Reklama " + toDisplayString(ad.id) + " - " + toDisplayString(ad.price ? `${Number(ad.price).toFixed(2)} \u20AC` : "???.?? \u20AC"), 1);
                      }), 256)) : createCommentVNode("", true),
                      unref(footerLarge) ? (openBlock(), createBlock("p", { key: 2 }, " Reklama " + toDisplayString(unref(footerLarge).id) + " - " + toDisplayString(unref(footerLarge).price ? `${Number(unref(footerLarge).price).toFixed(2)} \u20AC` : "???.?? \u20AC"), 1)) : createCommentVNode("", true)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            }
          } else {
            return [
              createVNode(_component_ElCol, {
                span: 24,
                align: "middle"
              }, {
                default: withCtx(() => [
                  createVNode("h3", { class: "color-primary" }, "Cijene")
                ]),
                _: 1
              }),
              unref(comsLoading) ? (openBlock(), createBlock(_component_ElSkeleton, {
                key: 0,
                animated: ""
              }, {
                template: withCtx(() => [
                  (openBlock(), createBlock(Fragment, null, renderList(7, (_2) => {
                    return createVNode(_component_ElCol, { align: "middle" }, {
                      default: withCtx(() => [
                        createVNode(_component_ElSkeletonItem, {
                          variant: "text",
                          style: { "height": "21px", "margin": "7px 0", "width": "150px" }
                        })
                      ]),
                      _: 1
                    });
                  }), 64))
                ]),
                _: 1
              })) : (openBlock(), createBlock(_component_ElCol, {
                key: 1,
                span: 24,
                align: "middle"
              }, {
                default: withCtx(() => {
                  var _a, _b, _c;
                  return [
                    ((_a = unref(dashboardSide)) == null ? void 0 : _a.left) && ((_b = unref(dashboardSide)) == null ? void 0 : _b.right) ? (openBlock(true), createBlock(Fragment, { key: 0 }, renderList(unref(dashboardSide), (ad) => {
                      return openBlock(), createBlock("p", null, " Reklama " + toDisplayString(ad.id) + " - " + toDisplayString(ad.price ? `${Number(ad.price).toFixed(2)} \u20AC` : "???.?? \u20AC"), 1);
                    }), 256)) : createCommentVNode("", true),
                    ((_c = unref(footerSlider)) == null ? void 0 : _c.length) ? (openBlock(true), createBlock(Fragment, { key: 1 }, renderList(unref(footerSlider), (ad) => {
                      return openBlock(), createBlock("p", null, " Reklama " + toDisplayString(ad.id) + " - " + toDisplayString(ad.price ? `${Number(ad.price).toFixed(2)} \u20AC` : "???.?? \u20AC"), 1);
                    }), 256)) : createCommentVNode("", true),
                    unref(footerLarge) ? (openBlock(), createBlock("p", { key: 2 }, " Reklama " + toDisplayString(unref(footerLarge).id) + " - " + toDisplayString(unref(footerLarge).price ? `${Number(unref(footerLarge).price).toFixed(2)} \u20AC` : "???.?? \u20AC"), 1)) : createCommentVNode("", true)
                  ];
                }),
                _: 1
              }))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_ElRow, {
        align: "middle",
        justify: "center"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h3 class="color-primary" data-v-3eff968a${_scopeId}>Zatra\u017Eite reklamu</h3>`);
          } else {
            return [
              createVNode("h3", { class: "color-primary" }, "Zatra\u017Eite reklamu")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_ElRow, { align: "middle" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<p data-v-3eff968a${_scopeId}>Odaberite reklamu, po\u0161aljite zahtijev i sa\u010Dekajte na\u0161 odgovor!</p>`);
          } else {
            return [
              createVNode("p", null, "Odaberite reklamu, po\u0161aljite zahtijev i sa\u010Dekajte na\u0161 odgovor!")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_ElRow, { justify: "center" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_ElForm, {
              "label-position": _ctx.$viewport.isLessThan("tablet") ? "top" : "left",
              "require-asterisk-position": "right",
              ref_key: "ruleFormRef",
              ref: ruleFormRef,
              class: "form",
              model: unref(form),
              rules: unref(rules),
              "label-width": "auto",
              "status-icon": "",
              style: { "width": "100%" }
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_ElFormItem, {
                    label: "Va\u0161 email",
                    prop: "email"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_ElInput, {
                          modelValue: unref(form).email,
                          "onUpdate:modelValue": ($event) => unref(form).email = $event,
                          type: "text",
                          placeholder: "pero.peric@mail.com",
                          class: "max-w-250"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_ElInput, {
                            modelValue: unref(form).email,
                            "onUpdate:modelValue": ($event) => unref(form).email = $event,
                            type: "text",
                            placeholder: "pero.peric@mail.com",
                            class: "max-w-250"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_ElFormItem, {
                    label: "Reklama",
                    prop: "adId"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_ElSelect, {
                          modelValue: unref(form).adId,
                          "onUpdate:modelValue": ($event) => unref(form).adId = $event,
                          placeholder: "Odaberite reklamu",
                          loading: unref(comsLoading),
                          class: "max-w-250"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            var _a, _b, _c, _d, _e, _f;
                            if (_push5) {
                              if (((_a = unref(dashboardSide)) == null ? void 0 : _a.left) && ((_b = unref(dashboardSide)) == null ? void 0 : _b.right)) {
                                _push5(`<!--[-->`);
                                ssrRenderList(unref(dashboardSide), (ad) => {
                                  _push5(ssrRenderComponent(_component_ElOption, {
                                    label: String(ad.id),
                                    value: String(ad.id)
                                  }, null, _parent5, _scopeId4));
                                });
                                _push5(`<!--]-->`);
                              } else {
                                _push5(`<!---->`);
                              }
                              if ((_c = unref(footerSlider)) == null ? void 0 : _c.length) {
                                _push5(`<!--[-->`);
                                ssrRenderList(unref(footerSlider), (ad) => {
                                  _push5(ssrRenderComponent(_component_ElOption, {
                                    label: String(ad.id),
                                    value: String(ad.id)
                                  }, null, _parent5, _scopeId4));
                                });
                                _push5(`<!--]-->`);
                              } else {
                                _push5(`<!---->`);
                              }
                              if (unref(footerLarge)) {
                                _push5(ssrRenderComponent(_component_ElOption, {
                                  label: String(unref(footerLarge).id),
                                  value: unref(footerLarge).id
                                }, null, _parent5, _scopeId4));
                              } else {
                                _push5(`<!---->`);
                              }
                            } else {
                              return [
                                ((_d = unref(dashboardSide)) == null ? void 0 : _d.left) && ((_e = unref(dashboardSide)) == null ? void 0 : _e.right) ? (openBlock(true), createBlock(Fragment, { key: 0 }, renderList(unref(dashboardSide), (ad) => {
                                  return openBlock(), createBlock(_component_ElOption, {
                                    label: String(ad.id),
                                    value: String(ad.id)
                                  }, null, 8, ["label", "value"]);
                                }), 256)) : createCommentVNode("", true),
                                ((_f = unref(footerSlider)) == null ? void 0 : _f.length) ? (openBlock(true), createBlock(Fragment, { key: 1 }, renderList(unref(footerSlider), (ad) => {
                                  return openBlock(), createBlock(_component_ElOption, {
                                    label: String(ad.id),
                                    value: String(ad.id)
                                  }, null, 8, ["label", "value"]);
                                }), 256)) : createCommentVNode("", true),
                                unref(footerLarge) ? (openBlock(), createBlock(_component_ElOption, {
                                  key: 2,
                                  label: String(unref(footerLarge).id),
                                  value: unref(footerLarge).id
                                }, null, 8, ["label", "value"])) : createCommentVNode("", true)
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_ElSelect, {
                            modelValue: unref(form).adId,
                            "onUpdate:modelValue": ($event) => unref(form).adId = $event,
                            placeholder: "Odaberite reklamu",
                            loading: unref(comsLoading),
                            class: "max-w-250"
                          }, {
                            default: withCtx(() => {
                              var _a, _b, _c;
                              return [
                                ((_a = unref(dashboardSide)) == null ? void 0 : _a.left) && ((_b = unref(dashboardSide)) == null ? void 0 : _b.right) ? (openBlock(true), createBlock(Fragment, { key: 0 }, renderList(unref(dashboardSide), (ad) => {
                                  return openBlock(), createBlock(_component_ElOption, {
                                    label: String(ad.id),
                                    value: String(ad.id)
                                  }, null, 8, ["label", "value"]);
                                }), 256)) : createCommentVNode("", true),
                                ((_c = unref(footerSlider)) == null ? void 0 : _c.length) ? (openBlock(true), createBlock(Fragment, { key: 1 }, renderList(unref(footerSlider), (ad) => {
                                  return openBlock(), createBlock(_component_ElOption, {
                                    label: String(ad.id),
                                    value: String(ad.id)
                                  }, null, 8, ["label", "value"]);
                                }), 256)) : createCommentVNode("", true),
                                unref(footerLarge) ? (openBlock(), createBlock(_component_ElOption, {
                                  key: 2,
                                  label: String(unref(footerLarge).id),
                                  value: unref(footerLarge).id
                                }, null, 8, ["label", "value"])) : createCommentVNode("", true)
                              ];
                            }),
                            _: 1
                          }, 8, ["modelValue", "onUpdate:modelValue", "loading"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_ElFormItem, { prop: "message" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_ElInput, {
                          modelValue: unref(form).message,
                          "onUpdate:modelValue": ($event) => unref(form).message = $event,
                          autosize: { minRows: 6 },
                          type: "textarea",
                          placeholder: "Poruka..."
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_ElInput, {
                            modelValue: unref(form).message,
                            "onUpdate:modelValue": ($event) => unref(form).message = $event,
                            autosize: { minRows: 6 },
                            type: "textarea",
                            placeholder: "Poruka..."
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_ElRow, {
                    align: "middle",
                    justify: _ctx.$viewport.isLessThan("tablet") ? "center" : "end",
                    class: "mt-16"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_ElButton, {
                          type: "primary",
                          loading: unref(loading).submit,
                          onClick: ($event) => sendEmail(unref(ruleFormRef)),
                          size: "large"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`Po\u0161alji `);
                            } else {
                              return [
                                createTextVNode("Po\u0161alji ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_ElButton, {
                            type: "primary",
                            loading: unref(loading).submit,
                            onClick: ($event) => sendEmail(unref(ruleFormRef)),
                            size: "large"
                          }, {
                            default: withCtx(() => [
                              createTextVNode("Po\u0161alji ")
                            ]),
                            _: 1
                          }, 8, ["loading", "onClick"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_ElFormItem, {
                      label: "Va\u0161 email",
                      prop: "email"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_ElInput, {
                          modelValue: unref(form).email,
                          "onUpdate:modelValue": ($event) => unref(form).email = $event,
                          type: "text",
                          placeholder: "pero.peric@mail.com",
                          class: "max-w-250"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_ElFormItem, {
                      label: "Reklama",
                      prop: "adId"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_ElSelect, {
                          modelValue: unref(form).adId,
                          "onUpdate:modelValue": ($event) => unref(form).adId = $event,
                          placeholder: "Odaberite reklamu",
                          loading: unref(comsLoading),
                          class: "max-w-250"
                        }, {
                          default: withCtx(() => {
                            var _a, _b, _c;
                            return [
                              ((_a = unref(dashboardSide)) == null ? void 0 : _a.left) && ((_b = unref(dashboardSide)) == null ? void 0 : _b.right) ? (openBlock(true), createBlock(Fragment, { key: 0 }, renderList(unref(dashboardSide), (ad) => {
                                return openBlock(), createBlock(_component_ElOption, {
                                  label: String(ad.id),
                                  value: String(ad.id)
                                }, null, 8, ["label", "value"]);
                              }), 256)) : createCommentVNode("", true),
                              ((_c = unref(footerSlider)) == null ? void 0 : _c.length) ? (openBlock(true), createBlock(Fragment, { key: 1 }, renderList(unref(footerSlider), (ad) => {
                                return openBlock(), createBlock(_component_ElOption, {
                                  label: String(ad.id),
                                  value: String(ad.id)
                                }, null, 8, ["label", "value"]);
                              }), 256)) : createCommentVNode("", true),
                              unref(footerLarge) ? (openBlock(), createBlock(_component_ElOption, {
                                key: 2,
                                label: String(unref(footerLarge).id),
                                value: unref(footerLarge).id
                              }, null, 8, ["label", "value"])) : createCommentVNode("", true)
                            ];
                          }),
                          _: 1
                        }, 8, ["modelValue", "onUpdate:modelValue", "loading"])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_ElFormItem, { prop: "message" }, {
                      default: withCtx(() => [
                        createVNode(_component_ElInput, {
                          modelValue: unref(form).message,
                          "onUpdate:modelValue": ($event) => unref(form).message = $event,
                          autosize: { minRows: 6 },
                          type: "textarea",
                          placeholder: "Poruka..."
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_ElRow, {
                      align: "middle",
                      justify: _ctx.$viewport.isLessThan("tablet") ? "center" : "end",
                      class: "mt-16"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_ElButton, {
                          type: "primary",
                          loading: unref(loading).submit,
                          onClick: ($event) => sendEmail(unref(ruleFormRef)),
                          size: "large"
                        }, {
                          default: withCtx(() => [
                            createTextVNode("Po\u0161alji ")
                          ]),
                          _: 1
                        }, 8, ["loading", "onClick"])
                      ]),
                      _: 1
                    }, 8, ["justify"])
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
                class: "form",
                model: unref(form),
                rules: unref(rules),
                "label-width": "auto",
                "status-icon": "",
                style: { "width": "100%" }
              }, {
                default: withCtx(() => [
                  createVNode(_component_ElFormItem, {
                    label: "Va\u0161 email",
                    prop: "email"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_ElInput, {
                        modelValue: unref(form).email,
                        "onUpdate:modelValue": ($event) => unref(form).email = $event,
                        type: "text",
                        placeholder: "pero.peric@mail.com",
                        class: "max-w-250"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 1
                  }),
                  createVNode(_component_ElFormItem, {
                    label: "Reklama",
                    prop: "adId"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_ElSelect, {
                        modelValue: unref(form).adId,
                        "onUpdate:modelValue": ($event) => unref(form).adId = $event,
                        placeholder: "Odaberite reklamu",
                        loading: unref(comsLoading),
                        class: "max-w-250"
                      }, {
                        default: withCtx(() => {
                          var _a, _b, _c;
                          return [
                            ((_a = unref(dashboardSide)) == null ? void 0 : _a.left) && ((_b = unref(dashboardSide)) == null ? void 0 : _b.right) ? (openBlock(true), createBlock(Fragment, { key: 0 }, renderList(unref(dashboardSide), (ad) => {
                              return openBlock(), createBlock(_component_ElOption, {
                                label: String(ad.id),
                                value: String(ad.id)
                              }, null, 8, ["label", "value"]);
                            }), 256)) : createCommentVNode("", true),
                            ((_c = unref(footerSlider)) == null ? void 0 : _c.length) ? (openBlock(true), createBlock(Fragment, { key: 1 }, renderList(unref(footerSlider), (ad) => {
                              return openBlock(), createBlock(_component_ElOption, {
                                label: String(ad.id),
                                value: String(ad.id)
                              }, null, 8, ["label", "value"]);
                            }), 256)) : createCommentVNode("", true),
                            unref(footerLarge) ? (openBlock(), createBlock(_component_ElOption, {
                              key: 2,
                              label: String(unref(footerLarge).id),
                              value: unref(footerLarge).id
                            }, null, 8, ["label", "value"])) : createCommentVNode("", true)
                          ];
                        }),
                        _: 1
                      }, 8, ["modelValue", "onUpdate:modelValue", "loading"])
                    ]),
                    _: 1
                  }),
                  createVNode(_component_ElFormItem, { prop: "message" }, {
                    default: withCtx(() => [
                      createVNode(_component_ElInput, {
                        modelValue: unref(form).message,
                        "onUpdate:modelValue": ($event) => unref(form).message = $event,
                        autosize: { minRows: 6 },
                        type: "textarea",
                        placeholder: "Poruka..."
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 1
                  }),
                  createVNode(_component_ElRow, {
                    align: "middle",
                    justify: _ctx.$viewport.isLessThan("tablet") ? "center" : "end",
                    class: "mt-16"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_ElButton, {
                        type: "primary",
                        loading: unref(loading).submit,
                        onClick: ($event) => sendEmail(unref(ruleFormRef)),
                        size: "large"
                      }, {
                        default: withCtx(() => [
                          createTextVNode("Po\u0161alji ")
                        ]),
                        _: 1
                      }, 8, ["loading", "onClick"])
                    ]),
                    _: 1
                  }, 8, ["justify"])
                ]),
                _: 1
              }, 8, ["label-position", "model", "rules"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ads/ComsPage.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const ComsPage = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-3eff968a"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "reklamiranje",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "Reklamiranje",
      meta: [
        {
          name: "description",
          content: "Postavite svoju reklamu na na\u0161u stranicu."
        },
        { property: "og:title", content: "Reklamiranje" },
        {
          property: "og:description",
          content: "Postavite svoju reklamu na na\u0161u stranicu."
        }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(ComsPage, _attrs, null, _parent));
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/reklamiranje.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=reklamiranje-CCJFveqG.mjs.map
