import { defineComponent, ref, computed, mergeProps, unref, withCtx, createVNode, createBlock, openBlock, Fragment, renderList, toDisplayString, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderAttrs, ssrRenderStyle, ssrRenderList, ssrInterpolate, ssrRenderAttr } from 'vue/server-renderer';
import { v as useHead, _ as _export_sfc, u as useNuxtApp, bc as useRoute, g as ElSkeleton, b as ElRow, h as ElSkeletonItem, E as ElEmpty } from './server.mjs';
import { f as formatISOToDatetime } from './formatDate-BE2FzR0K.mjs';
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
  __name: "JobPage",
  __ssrInlineRender: true,
  setup(__props) {
    const { $axios } = useNuxtApp();
    useRoute();
    const isLoading = ref(true);
    const job = ref();
    const parsedHtml = computed(
      () => {
        var _a;
        return ((_a = job.value) == null ? void 0 : _a.description) ? job.value.description.replace(/&nbsp;/g, " ") : "";
      }
    );
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      const _component_ElSkeleton = ElSkeleton;
      const _component_ElRow = ElRow;
      const _component_ElSkeletonItem = ElSkeletonItem;
      const _component_ElEmpty = ElEmpty;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "page-container" }, _attrs))} data-v-679e204b>`);
      if (unref(isLoading)) {
        _push(ssrRenderComponent(_component_ElSkeleton, { animated: "" }, {
          template: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_ElRow, { justify: "center" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<h3 style="${ssrRenderStyle({ "width": "30%" })}" data-v-679e204b${_scopeId2}>`);
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
              _push2(`<!--[-->`);
              ssrRenderList(6, (_2, index) => {
                _push2(ssrRenderComponent(_component_ElRow, {
                  justify: "space-between",
                  align: "middle",
                  class: { "mb-12": index === 1, "mb-24": index === 5 },
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
                    ssrRenderList(10, (_3) => {
                      _push3(ssrRenderComponent(_component_ElSkeletonItem, {
                        variant: "text",
                        style: { "width": "100%", "margin-bottom": "12px" }
                      }, null, _parent3, _scopeId2));
                    });
                    _push3(`<!--]-->`);
                  } else {
                    return [
                      (openBlock(), createBlock(Fragment, null, renderList(10, (_3) => {
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
                (openBlock(), createBlock(Fragment, null, renderList(6, (_2, index) => {
                  return createVNode(_component_ElRow, {
                    justify: "space-between",
                    align: "middle",
                    class: { "mb-12": index === 1, "mb-24": index === 5 },
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
                    (openBlock(), createBlock(Fragment, null, renderList(10, (_2) => {
                      return createVNode(_component_ElSkeletonItem, {
                        variant: "text",
                        style: { "width": "100%", "margin-bottom": "12px" }
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
      } else if (!unref(job)) {
        _push(ssrRenderComponent(_component_ElEmpty, { description: "Ups! Nema dostupnih poslova..." }, null, _parent));
      } else {
        _push(`<!--[-->`);
        _push(ssrRenderComponent(_component_ElRow, {
          justify: "center",
          align: "middle"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            var _a2, _b;
            if (_push2) {
              _push2(`<h3 class="color-primary" data-v-679e204b${_scopeId}>${ssrInterpolate((_a2 = unref(job)) == null ? void 0 : _a2.name)}</h3>`);
            } else {
              return [
                createVNode("h3", { class: "color-primary" }, toDisplayString((_b = unref(job)) == null ? void 0 : _b.name), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(_component_ElRow, {
          align: "middle",
          class: "color-zinc"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` Oglas objavljen: ${ssrInterpolate(("formatISOToDatetime" in _ctx ? _ctx.formatISOToDatetime : unref(formatISOToDatetime))(unref(job).createdAt))}`);
            } else {
              return [
                createTextVNode(" Oglas objavljen: " + toDisplayString(("formatISOToDatetime" in _ctx ? _ctx.formatISOToDatetime : unref(formatISOToDatetime))(unref(job).createdAt)), 1)
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
              _push2(` Kategorija: ${ssrInterpolate(unref(job).jobCategory.name)}`);
            } else {
              return [
                createTextVNode(" Kategorija: " + toDisplayString(unref(job).jobCategory.name), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
        if (unref(job).location) {
          _push(ssrRenderComponent(_component_ElRow, {
            align: "middle",
            class: "font-weight-500"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(` Lokacija: ${ssrInterpolate(unref(job).location)}`);
              } else {
                return [
                  createTextVNode(" Lokacija: " + toDisplayString(unref(job).location), 1)
                ];
              }
            }),
            _: 1
          }, _parent));
        } else {
          _push(`<!---->`);
        }
        if (unref(job).contactEmail) {
          _push(ssrRenderComponent(_component_ElRow, {
            align: "middle",
            class: "font-weight-500"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(` Email: <a${ssrRenderAttr("href", `mailto:${unref(job).contactEmail}`)} class="ml-4" data-v-679e204b${_scopeId}>${ssrInterpolate(unref(job).contactEmail)}</a>`);
              } else {
                return [
                  createTextVNode(" Email: "),
                  createVNode("a", {
                    href: `mailto:${unref(job).contactEmail}`,
                    class: "ml-4"
                  }, toDisplayString(unref(job).contactEmail), 9, ["href"])
                ];
              }
            }),
            _: 1
          }, _parent));
        } else {
          _push(`<!---->`);
        }
        if (unref(job).contactNumber) {
          _push(ssrRenderComponent(_component_ElRow, {
            align: "middle",
            class: "font-weight-500"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(` Broj: ${ssrInterpolate(unref(job).contactNumber)}`);
              } else {
                return [
                  createTextVNode(" Broj: " + toDisplayString(unref(job).contactNumber), 1)
                ];
              }
            }),
            _: 1
          }, _parent));
        } else {
          _push(`<!---->`);
        }
        if (unref(job).salary) {
          _push(ssrRenderComponent(_component_ElRow, {
            align: "middle",
            class: "mb-24 font-weight-500"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(` Pla\u0107a: ${ssrInterpolate(Number(unref(job).salary).toFixed(2))} \u20AC `);
              } else {
                return [
                  createTextVNode(" Pla\u0107a: " + toDisplayString(Number(unref(job).salary).toFixed(2)) + " \u20AC ", 1)
                ];
              }
            }),
            _: 1
          }, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`<div class="job-content" data-v-679e204b>${(_a = unref(parsedHtml)) != null ? _a : ""}</div>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/jobs/JobPage.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const JobPage = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-679e204b"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "[jobId]",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "Gastabajter.de - Oglas za posao",
      meta: [
        {
          name: "description",
          content: `Ovdje mo\u017Eete prona\u0107i oglas za posao.}`
        },
        { property: "og:title", content: "Gastabajter.de - Oglas za posao" },
        {
          property: "og:description",
          content: `Ovdje mo\u017Eete prona\u0107i oglas za posao.`
        }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(JobPage, _attrs, null, _parent));
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/poslovi/[jobId].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=_jobId_-Be-5FJgC.mjs.map
