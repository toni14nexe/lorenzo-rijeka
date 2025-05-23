import { _ as _export_sfc, b as ElRow, Y as ElButton, e as ElIcon, bf as close_bold_default, bg as arrow_left_bold_default, bh as arrow_right_bold_default } from './server.mjs';
import { defineComponent, ref, mergeProps, withCtx, unref, createVNode, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrRenderClass } from 'vue/server-renderer';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Gallery",
  __ssrInlineRender: true,
  props: {
    links: {}
  },
  setup(__props) {
    const props = __props;
    const currentIndex = ref(0);
    const sliderRef = ref(null);
    const isFullscreen = ref(false);
    function next() {
      currentIndex.value = (currentIndex.value + 1) % props.links.length;
    }
    function prev() {
      currentIndex.value = (currentIndex.value - 1 + props.links.length) % props.links.length;
    }
    function enterFullscreen() {
      var _a;
      if ((_a = sliderRef.value) == null ? void 0 : _a.requestFullscreen) sliderRef.value.requestFullscreen();
    }
    function exitFullscreen() {
      if ((void 0).fullscreenElement && (void 0).exitFullscreen)
        (void 0).exitFullscreen();
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ElRow = ElRow;
      const _component_ElButton = ElButton;
      const _component_ElIcon = ElIcon;
      _push(`<div${ssrRenderAttrs(mergeProps({
        ref_key: "sliderRef",
        ref: sliderRef,
        class: "slider-container"
      }, _attrs))} data-v-c3538d55>`);
      if (isFullscreen.value) {
        _push(ssrRenderComponent(_component_ElRow, { justify: "end" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_ElButton, {
                onClick: exitFullscreen,
                size: "large",
                class: "exit-button"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_ElIcon, null, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(unref(close_bold_default), null, null, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(unref(close_bold_default))
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_ElIcon, null, {
                        default: withCtx(() => [
                          createVNode(unref(close_bold_default))
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
                createVNode(_component_ElButton, {
                  onClick: exitFullscreen,
                  size: "large",
                  class: "exit-button"
                }, {
                  default: withCtx(() => [
                    createVNode(_component_ElIcon, null, {
                      default: withCtx(() => [
                        createVNode(unref(close_bold_default))
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
        _push(`<!---->`);
      }
      _push(`<div class="media-display" data-v-c3538d55>`);
      if (_ctx.links[currentIndex.value].includes("/image/")) {
        _push(`<img${ssrRenderAttr("src", _ctx.links[currentIndex.value])} class="media-item" data-v-c3538d55>`);
      } else {
        _push(`<video${ssrRenderAttr("src", _ctx.links[currentIndex.value])} controls class="media-item" data-v-c3538d55></video>`);
      }
      _push(`</div><div class="${ssrRenderClass([_ctx.links.length > 1 ? "space-between" : "center", "controls"])}" data-v-c3538d55>`);
      if (_ctx.links.length > 1) {
        _push(ssrRenderComponent(_component_ElButton, {
          onClick: prev,
          size: "large"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_ElIcon, null, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(unref(arrow_left_bold_default), null, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(unref(arrow_left_bold_default))
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_ElIcon, null, {
                  default: withCtx(() => [
                    createVNode(unref(arrow_left_bold_default))
                  ]),
                  _: 1
                })
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      if (!isFullscreen.value) {
        _push(ssrRenderComponent(_component_ElButton, {
          onClick: enterFullscreen,
          size: "large"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` \u26F6 `);
            } else {
              return [
                createTextVNode(" \u26F6 ")
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      if (_ctx.links.length > 1) {
        _push(ssrRenderComponent(_component_ElButton, {
          onClick: next,
          size: "large"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_ElIcon, null, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(unref(arrow_right_bold_default), null, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(unref(arrow_right_bold_default))
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_ElIcon, null, {
                  default: withCtx(() => [
                    createVNode(unref(arrow_right_bold_default))
                  ]),
                  _: 1
                })
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/shared/Gallery.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Gallery = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-c3538d55"]]);

export { Gallery as G };
//# sourceMappingURL=Gallery-BxfMQDUy.mjs.map
