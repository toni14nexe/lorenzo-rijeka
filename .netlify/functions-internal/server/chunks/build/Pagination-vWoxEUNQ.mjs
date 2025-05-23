import { _ as _export_sfc, b as ElRow, e as ElIcon, b7 as d_arrow_left_default, b8 as d_arrow_right_default } from './server.mjs';
import { defineComponent, mergeModels, useModel, ref, watch, mergeProps, withCtx, unref, createVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';

function scrollToElementTop(element, offset) {
  if (element) {
    const elementOffset = offset;
    const top = element.getBoundingClientRect().top + (void 0).pageYOffset + elementOffset;
    (void 0).scrollTo({ top, behavior: "smooth" });
  }
}
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Pagination",
  __ssrInlineRender: true,
  props: /* @__PURE__ */ mergeModels(["loading", "scrollElementId"], {
    "modelValue": { required: true },
    "modelModifiers": {}
  }),
  emits: /* @__PURE__ */ mergeModels(["pageChange"], ["update:modelValue"]),
  setup(__props, { emit: __emit }) {
    const pagination = useModel(__props, "modelValue");
    const emit = __emit;
    const props = __props;
    const firstLoading = ref(true);
    watch(
      () => props.loading,
      (state) => {
        if (!state && !firstLoading.value) {
          const scrollTarget = (void 0).getElementById(props.scrollElementId);
          scrollToElementTop(scrollTarget, -60);
        } else firstLoading.value = false;
      }
    );
    function handlePerPageChange(option) {
      if (option === "prev") {
        if (pagination.value.page > 1) {
          pagination.value.page -= 1;
          emit("pageChange");
        }
      } else {
        if (pagination.value.page * pagination.value.perPage < pagination.value.total) {
          pagination.value.page += 1;
          emit("pageChange");
        }
      }
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ElRow = ElRow;
      const _component_ElIcon = ElIcon;
      _push(ssrRenderComponent(_component_ElRow, mergeProps({
        justify: "center",
        align: "middle",
        class: "pagination-container"
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_ElIcon, {
              size: 24,
              class: ["mr-4 pagination-icon", {
                "cursor-not-allowed": pagination.value.page <= 1
              }],
              onClick: ($event) => handlePerPageChange("prev")
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(d_arrow_left_default), null, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(d_arrow_left_default))
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<span class="pagination-text" data-v-576da69d${_scopeId}>${ssrInterpolate(`${pagination.value.page * pagination.value.perPage < pagination.value.total ? pagination.value.page * pagination.value.perPage : pagination.value.total} / ${pagination.value.total}`)}</span>`);
            _push2(ssrRenderComponent(_component_ElIcon, {
              size: 24,
              class: ["mr-4 pagination-icon", {
                "cursor-not-allowed": pagination.value.page * pagination.value.perPage >= pagination.value.total
              }],
              onClick: ($event) => handlePerPageChange("next")
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(d_arrow_right_default), null, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(d_arrow_right_default))
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_ElIcon, {
                size: 24,
                class: ["mr-4 pagination-icon", {
                  "cursor-not-allowed": pagination.value.page <= 1
                }],
                onClick: ($event) => handlePerPageChange("prev")
              }, {
                default: withCtx(() => [
                  createVNode(unref(d_arrow_left_default))
                ]),
                _: 1
              }, 8, ["class", "onClick"]),
              createVNode("span", { class: "pagination-text" }, toDisplayString(`${pagination.value.page * pagination.value.perPage < pagination.value.total ? pagination.value.page * pagination.value.perPage : pagination.value.total} / ${pagination.value.total}`), 1),
              createVNode(_component_ElIcon, {
                size: 24,
                class: ["mr-4 pagination-icon", {
                  "cursor-not-allowed": pagination.value.page * pagination.value.perPage >= pagination.value.total
                }],
                onClick: ($event) => handlePerPageChange("next")
              }, {
                default: withCtx(() => [
                  createVNode(unref(d_arrow_right_default))
                ]),
                _: 1
              }, 8, ["class", "onClick"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/shared/Pagination.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Pagination = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-576da69d"]]);

export { Pagination as P };
//# sourceMappingURL=Pagination-vWoxEUNQ.mjs.map
