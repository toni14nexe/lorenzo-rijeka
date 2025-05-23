import { _ as _export_sfc, w as __nuxt_component_6, b as ElRow, e as ElIcon, V as location_default, x as clock_default, E as ElEmpty } from './server.mjs';
import { t as truncateText } from './truncate-BSRTn-4H.mjs';
import { f as formatISOToDatetime } from './formatDate-BE2FzR0K.mjs';
import { defineComponent, mergeProps, withCtx, unref, createVNode, createTextVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "JobWidget",
  __ssrInlineRender: true,
  props: ["job"],
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_6;
      const _component_ElRow = ElRow;
      const _component_ElIcon = ElIcon;
      const _component_ElEmpty = ElEmpty;
      if (__props.job) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "job cursor-pointer" }, _attrs))} data-v-e5795a95>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: `/poslovi/${__props.job.id}`
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="job-opacity-container" data-v-e5795a95${_scopeId}></div><div class="job-text-container" data-v-e5795a95${_scopeId}><h3 data-v-e5795a95${_scopeId}>${ssrInterpolate(("truncateText" in _ctx ? _ctx.truncateText : unref(truncateText))(__props.job.name, 40))}</h3>`);
              _push2(ssrRenderComponent(_component_ElRow, {
                class: "datetime mb-16",
                align: "middle",
                justify: "center"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_ElIcon, {
                      size: 18,
                      class: "mr-8"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(unref(location_default), null, null, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(unref(location_default))
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(` ${ssrInterpolate(("truncateText" in _ctx ? _ctx.truncateText : unref(truncateText))(__props.job.location, 60))}`);
                  } else {
                    return [
                      createVNode(_component_ElIcon, {
                        size: 18,
                        class: "mr-8"
                      }, {
                        default: withCtx(() => [
                          createVNode(unref(location_default))
                        ]),
                        _: 1
                      }),
                      createTextVNode(" " + toDisplayString(("truncateText" in _ctx ? _ctx.truncateText : unref(truncateText))(__props.job.location, 60)), 1)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_ElRow, {
                class: "datetime mb-16",
                align: "middle"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_ElIcon, {
                      size: 18,
                      class: "mr-8"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(unref(clock_default), null, null, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(unref(clock_default))
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(` ${ssrInterpolate(("formatISOToDatetime" in _ctx ? _ctx.formatISOToDatetime : unref(formatISOToDatetime))(__props.job.createdAt))}`);
                  } else {
                    return [
                      createVNode(_component_ElIcon, {
                        size: 18,
                        class: "mr-8"
                      }, {
                        default: withCtx(() => [
                          createVNode(unref(clock_default))
                        ]),
                        _: 1
                      }),
                      createTextVNode(" " + toDisplayString(("formatISOToDatetime" in _ctx ? _ctx.formatISOToDatetime : unref(formatISOToDatetime))(__props.job.createdAt)), 1)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div>`);
            } else {
              return [
                createVNode("div", { class: "job-opacity-container" }),
                createVNode("div", { class: "job-text-container" }, [
                  createVNode("h3", null, toDisplayString(("truncateText" in _ctx ? _ctx.truncateText : unref(truncateText))(__props.job.name, 40)), 1),
                  createVNode(_component_ElRow, {
                    class: "datetime mb-16",
                    align: "middle",
                    justify: "center"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_ElIcon, {
                        size: 18,
                        class: "mr-8"
                      }, {
                        default: withCtx(() => [
                          createVNode(unref(location_default))
                        ]),
                        _: 1
                      }),
                      createTextVNode(" " + toDisplayString(("truncateText" in _ctx ? _ctx.truncateText : unref(truncateText))(__props.job.location, 60)), 1)
                    ]),
                    _: 1
                  }),
                  createVNode(_component_ElRow, {
                    class: "datetime mb-16",
                    align: "middle"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_ElIcon, {
                        size: 18,
                        class: "mr-8"
                      }, {
                        default: withCtx(() => [
                          createVNode(unref(clock_default))
                        ]),
                        _: 1
                      }),
                      createTextVNode(" " + toDisplayString(("formatISOToDatetime" in _ctx ? _ctx.formatISOToDatetime : unref(formatISOToDatetime))(__props.job.createdAt)), 1)
                    ]),
                    _: 1
                  })
                ])
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      } else {
        _push(ssrRenderComponent(_component_ElEmpty, mergeProps({
          class: "job",
          description: "Trenutno nedostupno!"
        }, _attrs), null, _parent));
      }
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/shared/JobWidget.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const JobWidget = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-e5795a95"]]);

export { JobWidget as J };
//# sourceMappingURL=JobWidget-BoMDVV_I.mjs.map
