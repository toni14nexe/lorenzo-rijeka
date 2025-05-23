import { Y as ElButton, e as ElIcon, bd as FacebookIcon } from './server.mjs';
import { defineComponent, mergeProps, withCtx, createVNode, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderComponent } from 'vue/server-renderer';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "FacebookShareButton",
  __ssrInlineRender: true,
  setup(__props) {
    function shareOnFacebook() {
      const facebookShareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent((void 0).location.href)}`;
      (void 0).open(facebookShareUrl, "_blank");
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ElButton = ElButton;
      const _component_ElIcon = ElIcon;
      _push(ssrRenderComponent(_component_ElButton, mergeProps({
        type: "primary",
        plain: "",
        onClick: shareOnFacebook
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_ElIcon, {
              size: 24,
              class: "mr-8"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(FacebookIcon, null, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(FacebookIcon)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(` Podijeli `);
          } else {
            return [
              createVNode(_component_ElIcon, {
                size: 24,
                class: "mr-8"
              }, {
                default: withCtx(() => [
                  createVNode(FacebookIcon)
                ]),
                _: 1
              }),
              createTextVNode(" Podijeli ")
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/shared/FacebookShareButton.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
//# sourceMappingURL=FacebookShareButton-Ctlw5bf6.mjs.map
