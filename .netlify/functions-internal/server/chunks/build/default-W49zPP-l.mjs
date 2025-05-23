import { _ as _export_sfc, bm as Header, bl as ElMain, bn as ComsFooter, bo as Footer } from './server.mjs';
import { defineComponent, resolveDirective, mergeProps, withCtx, renderSlot, createVNode, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrGetDirectiveProps, ssrRenderSlot, ssrRenderAttrs } from 'vue/server-renderer';
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

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "default",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ElMain = ElMain;
      const _directive_motion_slide_top = resolveDirective("motion-slide-top");
      _push(`<!--[-->`);
      _push(ssrRenderComponent(Header, null, null, _parent));
      _push(ssrRenderComponent(_component_ElMain, mergeProps({
        class: "main",
        duration: 1e3,
        delay: 400
      }, ssrGetDirectiveProps(_ctx, _directive_motion_slide_top)), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
            _push2(ssrRenderComponent(ComsFooter, null, null, _parent2, _scopeId));
          } else {
            return [
              renderSlot(_ctx.$slots, "default", {}, void 0, true),
              createVNode(ComsFooter)
            ];
          }
        }),
        _: 3
      }, _parent));
      _push(`<footer${ssrRenderAttrs(mergeProps({
        duration: 1e3,
        delay: 400
      }, ssrGetDirectiveProps(_ctx, _directive_motion_slide_top)))} data-v-7e60a3f5>`);
      _push(ssrRenderComponent(Footer, null, null, _parent));
      _push(`</footer><!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _default = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-7e60a3f5"]]);

export { _default as default };
//# sourceMappingURL=default-W49zPP-l.mjs.map
