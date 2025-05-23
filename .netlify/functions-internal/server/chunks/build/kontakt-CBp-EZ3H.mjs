import { v as useHead, u as useNuxtApp, b as ElRow, w as __nuxt_component_6, X as ElInput, Y as ElButton, Z as ElNotification } from './server.mjs';
import { v as validateEmail, E as ElForm, a as ElFormItem } from './validations-DTag85cS.mjs';
import { defineComponent, ref, reactive, mergeProps, withCtx, createVNode, createTextVNode, unref, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderAttrs } from 'vue/server-renderer';
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
  __name: "ContactPage",
  __ssrInlineRender: true,
  setup(__props) {
    const { $axios } = useNuxtApp();
    const ruleFormRef = ref();
    const loading = ref({ submit: false });
    const form = reactive({
      fullname: "",
      email: "",
      message: ""
    });
    const rules = reactive({
      fullname: [{ max: 100, message: "Maximalno 100 znakova", trigger: "change" }],
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
      message: [
        { min: 10, message: "Minimalno 10 znakova", trigger: "change" },
        { max: 1e4, message: "Maximalno 10,000 znakova", trigger: "change" }
      ]
    });
    async function sendMessage(formEl) {
      if (!formEl) return;
      await formEl.validate(async (valid) => {
        if (valid) {
          loading.value.submit = true;
          try {
            await $axios.post(`/contact/email`, form);
            ElNotification({
              type: "success",
              message: "Email je uspje\u0161no poslan.",
              duration: 3e3
            });
            form.fullname = "";
            form.email = "";
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
      const _component_NuxtLink = __nuxt_component_6;
      const _component_ElForm = ElForm;
      const _component_ElFormItem = ElFormItem;
      const _component_ElInput = ElInput;
      const _component_ElButton = ElButton;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "page-container mb-24" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_ElRow, {
        align: "middle",
        justify: "center"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h1 class="color-primary"${_scopeId}>Kontaktirajte nas</h1>`);
          } else {
            return [
              createVNode("h1", { class: "color-primary" }, "Kontaktirajte nas")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_ElRow, { align: "middle" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<p${_scopeId}><b${_scopeId}>Imate pitanje?</b></p>`);
          } else {
            return [
              createVNode("p", null, [
                createVNode("b", null, "Imate pitanje?")
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_ElRow, { align: "middle" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<p${_scopeId}> Ukoliko imate bilo kakvih pitanja ili prijedloga slobodno nas kontaktirajte. Tu smo da vam pomognemo i pru\u017Eimo podr\u0161ku kako bismo unaprijedili na\u0161e zajedni\u010Dko iskustvo. </p>`);
          } else {
            return [
              createVNode("p", null, " Ukoliko imate bilo kakvih pitanja ili prijedloga slobodno nas kontaktirajte. Tu smo da vam pomognemo i pru\u017Eimo podr\u0161ku kako bismo unaprijedili na\u0161e zajedni\u010Dko iskustvo. ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_ElRow, { align: "middle" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<p${_scopeId}> Tako\u0111er, ako imate odre\u0111enu ideju ili \u017Eelite dodati ne\u0161to novo, bit \u0107emo zahvalni na va\u0161im prijedlozima! </p>`);
          } else {
            return [
              createVNode("p", null, " Tako\u0111er, ako imate odre\u0111enu ideju ili \u017Eelite dodati ne\u0161to novo, bit \u0107emo zahvalni na va\u0161im prijedlozima! ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_ElRow, { align: "middle" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<p${_scopeId}> Na\u0161 tim \u0107e se potruditi odgovoriti u \u0161to kra\u0107em roku i osigurati da va\u0161a iskustva s aplikacijom budu \u0161to bolja. </p>`);
          } else {
            return [
              createVNode("p", null, " Na\u0161 tim \u0107e se potruditi odgovoriti u \u0161to kra\u0107em roku i osigurati da va\u0161a iskustva s aplikacijom budu \u0161to bolja. ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_ElRow, { align: "middle" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<p${_scopeId}> Kontaktirajte nas putem obrasca ispod ili na na\u0161u email adresu: <a href="mailto:toni.kolaric@innova-tech.live"${_scopeId}> kontakt@gastarbajter.de </a></p>`);
          } else {
            return [
              createVNode("p", null, [
                createTextVNode(" Kontaktirajte nas putem obrasca ispod ili na na\u0161u email adresu: "),
                createVNode("a", { href: "mailto:toni.kolaric@innova-tech.live" }, " kontakt@gastarbajter.de ")
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_ElRow, { align: "middle" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<p${_scopeId}> \u017Delite postaviti svoju reklamu na na\u0161u web stranicu, u\u010Dinite od ovdje: `);
            _push2(ssrRenderComponent(_component_NuxtLink, { to: "/reklamiranje" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Gastarbajter Reklamiranje `);
                } else {
                  return [
                    createTextVNode(" Gastarbajter Reklamiranje ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</p>`);
          } else {
            return [
              createVNode("p", null, [
                createTextVNode(" \u017Delite postaviti svoju reklamu na na\u0161u web stranicu, u\u010Dinite od ovdje: "),
                createVNode(_component_NuxtLink, { to: "/reklamiranje" }, {
                  default: withCtx(() => [
                    createTextVNode(" Gastarbajter Reklamiranje ")
                  ]),
                  _: 1
                })
              ])
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
            _push2(`<h1 class="color-primary"${_scopeId}>Poruka</h1>`);
          } else {
            return [
              createVNode("h1", { class: "color-primary" }, "Poruka")
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
                    label: "Ime i prezime",
                    prop: "fullname"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_ElInput, {
                          modelValue: unref(form).fullname,
                          "onUpdate:modelValue": ($event) => unref(form).fullname = $event,
                          type: "text",
                          placeholder: "Pero Peri\u0107",
                          class: "max-w-250"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_ElInput, {
                            modelValue: unref(form).fullname,
                            "onUpdate:modelValue": ($event) => unref(form).fullname = $event,
                            type: "text",
                            placeholder: "Pero Peri\u0107",
                            class: "max-w-250"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
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
                          onClick: ($event) => sendMessage(unref(ruleFormRef)),
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
                            onClick: ($event) => sendMessage(unref(ruleFormRef)),
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
                      label: "Ime i prezime",
                      prop: "fullname"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_ElInput, {
                          modelValue: unref(form).fullname,
                          "onUpdate:modelValue": ($event) => unref(form).fullname = $event,
                          type: "text",
                          placeholder: "Pero Peri\u0107",
                          class: "max-w-250"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 1
                    }),
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
                          onClick: ($event) => sendMessage(unref(ruleFormRef)),
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
                    label: "Ime i prezime",
                    prop: "fullname"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_ElInput, {
                        modelValue: unref(form).fullname,
                        "onUpdate:modelValue": ($event) => unref(form).fullname = $event,
                        type: "text",
                        placeholder: "Pero Peri\u0107",
                        class: "max-w-250"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 1
                  }),
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
                        onClick: ($event) => sendMessage(unref(ruleFormRef)),
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/contact/ContactPage.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "kontakt",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "Kontakt",
      meta: [
        {
          name: "description",
          content: "Za bilo kakva pitanja, kontakt, prijedloge ili prijavu pogre\u0161aka u aplikaciji."
        },
        { property: "og:title", content: "Kontakt" },
        {
          property: "og:description",
          content: "Za bilo kakva pitanja, kontakt, prijedloge ili prijavu pogre\u0161aka u aplikaciji."
        }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ContactPage = _sfc_main$1;
      _push(ssrRenderComponent(_component_ContactPage, _attrs, null, _parent));
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/kontakt.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=kontakt-CBp-EZ3H.mjs.map
