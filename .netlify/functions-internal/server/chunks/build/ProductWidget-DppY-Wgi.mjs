import { _ as _export_sfc, w as __nuxt_component_6, b as ElRow, e as ElIcon, W as price_tag_default, E as ElEmpty } from './server.mjs';
import { t as truncateText } from './truncate-BSRTn-4H.mjs';
import { defineComponent, mergeProps, withCtx, unref, createVNode, createTextVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "ProductWidget",
  __ssrInlineRender: true,
  props: ["product"],
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_6;
      const _component_ElRow = ElRow;
      const _component_ElIcon = ElIcon;
      const _component_ElEmpty = ElEmpty;
      if (__props.product) {
        _push(`<div${ssrRenderAttrs(mergeProps({
          class: "product cursor-pointer",
          style: `background-image: url(${__props.product.images.length ? __props.product.images[0] : ""})`
        }, _attrs))} data-v-13110305>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: `/webshop/${__props.product.id}`
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="product-opacity-container" data-v-13110305${_scopeId}></div><div class="product-text-container" data-v-13110305${_scopeId}><h3 data-v-13110305${_scopeId}>${ssrInterpolate(("truncateText" in _ctx ? _ctx.truncateText : unref(truncateText))(__props.product.name, 105))}</h3>`);
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
                          _push4(ssrRenderComponent(unref(price_tag_default), null, null, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(unref(price_tag_default))
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(` ${ssrInterpolate(Number(__props.product.price).toFixed(2))} \u20AC `);
                  } else {
                    return [
                      createVNode(_component_ElIcon, {
                        size: 18,
                        class: "mr-8"
                      }, {
                        default: withCtx(() => [
                          createVNode(unref(price_tag_default))
                        ]),
                        _: 1
                      }),
                      createTextVNode(" " + toDisplayString(Number(__props.product.price).toFixed(2)) + " \u20AC ", 1)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div>`);
            } else {
              return [
                createVNode("div", { class: "product-opacity-container" }),
                createVNode("div", { class: "product-text-container" }, [
                  createVNode("h3", null, toDisplayString(("truncateText" in _ctx ? _ctx.truncateText : unref(truncateText))(__props.product.name, 105)), 1),
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
                          createVNode(unref(price_tag_default))
                        ]),
                        _: 1
                      }),
                      createTextVNode(" " + toDisplayString(Number(__props.product.price).toFixed(2)) + " \u20AC ", 1)
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
          class: "product",
          description: "Trenutno nedostupno!"
        }, _attrs), null, _parent));
      }
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/shared/ProductWidget.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ProductWidget = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-13110305"]]);

export { ProductWidget as P };
//# sourceMappingURL=ProductWidget-DppY-Wgi.mjs.map
