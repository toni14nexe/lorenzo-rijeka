import { defineComponent, ref, unref, mergeProps, withCtx, createVNode, isRef, createBlock, createCommentVNode, openBlock, reactive, createTextVNode, toDisplayString, Fragment, renderList, withKeys, h, getCurrentInstance, computed, watchEffect, resolveComponent, resolveDirective, createElementBlock, normalizeStyle, normalizeClass, createElementVNode, withDirectives, renderSlot, vShow, provide, useSlots, Transition, createSlots, useId, watch, Comment, inject, shallowRef, toRef, toRefs, resolveDynamicComponent, withModifiers, vModelCheckbox, nextTick, TransitionGroup, toRaw, render as render$1, isVNode, useSSRContext, normalizeProps, guardReactiveProps } from 'vue';
import { ssrRenderComponent, ssrRenderAttrs, ssrGetDirectiveProps, ssrInterpolate, ssrRenderList, ssrRenderStyle, ssrRenderAttr } from 'vue/server-renderer';
import { v as useHead, aZ as useUserStore, s as storeToRefs, _ as _export_sfc, b as ElRow, d as ElCol, Y as ElButton, e as ElIcon, a_ as switch_button_default, j as ElDivider, u as useNuxtApp, aO as circle_plus_filled_default, X as ElInput, aP as search_default, S as withInstall, aQ as vLoading, T as withNoopInstall, aR as edit_default, aS as delete_filled_default, aT as refresh_left_default, aY as info_filled_default, C as _export_sfc$1, aV as useRuntimeConfig, aU as BaseStyle, P as plus_default, aB as ElTooltip, aW as gold_medal_default, aK as zoom_in_default, aL as delete_default, aX as download_default, Z as ElNotification, a$ as useCookie, z as buildProps, F as useNamespace, aa as useSizeProp, ak as useLocale, an as dialogEmits, ao as dialogProps, ag as useDeprecated, ap as useDialog, aq as ElTeleport, ar as ElOverlay, as as useSameTarget, at as ElFocusTrap, a2 as useFormSize, Q as isUndefined, aI as addClass, aG as removeClass, ab as useFormDisabled, y as flattedChildren, ac as useFormItem, af as useFormItemInputId, a1 as debugWarn, O as isNumber, $ as isBoolean, a9 as useAriaProps, a8 as getProp, K as arrow_right_default, ai as dialogContentEmits, aj as dialogContentProps, am as CloseComponents, al as FOCUS_TRAP_INJECTION_KEY, B as definePropType, aN as useVModel, a7 as addUnit, U as UPDATE_MODEL_EVENT, ad as CHANGE_EVENT, ay as INPUT_EVENT, aA as loading_default, ae as isPropAbsent, aC as useTooltipContentProps, aD as arrow_up_default, aE as arrow_down_default, aF as hasClass, aH as isElement$1, A as mutable, D as throwError, aJ as document_default, av as circle_check_default, ax as check_default, L as close_default, ah as getNormalizedProps, az as iconPropType, a0 as componentSizes, aM as entriesOf, au as warning_filled_default, aw as circle_close_default } from './server.mjs';
import { E as ElTabs, a as ElTabPane } from './el-tab-pane-C-X7kpj3.mjs';
import { E as ElForm, a as ElFormItem, i as isValuesEqual, b as validatePassword, v as validateEmail, c as validateMobileNumber } from './validations-DTag85cS.mjs';
import { debounce as debounce$1, isNull, pick, isNil, isEqual, merge, cloneDeep, flatMap, get } from 'lodash-unified';
import { E as ElSelect, a as ElOption, b as ElTag, c as ElScrollbar, C as ClickOutside } from './el-select-C7_MxKHv.mjs';
import { isArray, isString, hasOwn, isFunction as isFunction$1, isObject, NOOP, isPromise, isPlainObject } from '@vue/shared';
import normalizeWheel from 'normalize-wheel-es';
import { P as Pagination } from './Pagination-vWoxEUNQ.mjs';
import { isExist, findSingle, isElement } from '@primeuix/utils/dom';
import { isNotEmpty } from '@primeuix/utils';
import { ThemeService, Theme } from '@primeuix/styled';
import { resolve, isString as isString$1, isArray as isArray$1, isNotEmpty as isNotEmpty$1, toFlatCase, getKeyValue, isFunction } from '@primeuix/utils/object';
import { style } from '@primeuix/styles/editor';
import { E as ElInputNumber } from './el-input-number-DXbXzZTK.mjs';
import { f as formatISOToDatetime } from './formatDate-BE2FzR0K.mjs';
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
import 'jsonwebtoken';
import 'consola';
import 'unhead/server';
import 'unhead/plugins';
import 'unhead/utils';
import 'vue-bundle-renderer/runtime';
import 'vue-router';
import '@primeuix/styles/base';
import '@primeuix/utils/eventbus';
import 'framesync';
import 'popmotion';
import 'style-value-types';
import 'axios';
import '@ctrl/tinycolor';
import '@popperjs/core';
import './strings-D1uxkXhq.mjs';
import 'async-validator';

const checkboxProps = {
  modelValue: {
    type: [Number, String, Boolean],
    default: void 0
  },
  label: {
    type: [String, Boolean, Number, Object],
    default: void 0
  },
  value: {
    type: [String, Boolean, Number, Object],
    default: void 0
  },
  indeterminate: Boolean,
  disabled: Boolean,
  checked: Boolean,
  name: {
    type: String,
    default: void 0
  },
  trueValue: {
    type: [String, Number],
    default: void 0
  },
  falseValue: {
    type: [String, Number],
    default: void 0
  },
  trueLabel: {
    type: [String, Number],
    default: void 0
  },
  falseLabel: {
    type: [String, Number],
    default: void 0
  },
  id: {
    type: String,
    default: void 0
  },
  border: Boolean,
  size: useSizeProp,
  tabindex: [String, Number],
  validateEvent: {
    type: Boolean,
    default: true
  },
  ...useAriaProps(["ariaControls"])
};
const checkboxEmits = {
  [UPDATE_MODEL_EVENT]: (val) => isString(val) || isNumber(val) || isBoolean(val),
  change: (val) => isString(val) || isNumber(val) || isBoolean(val)
};
const checkboxGroupContextKey = Symbol("checkboxGroupContextKey");
const useCheckboxDisabled = ({
  model,
  isChecked
}) => {
  const checkboxGroup = inject(checkboxGroupContextKey, void 0);
  const isLimitDisabled = computed(() => {
    var _a, _b;
    const max = (_a = checkboxGroup == null ? void 0 : checkboxGroup.max) == null ? void 0 : _a.value;
    const min = (_b = checkboxGroup == null ? void 0 : checkboxGroup.min) == null ? void 0 : _b.value;
    return !isUndefined(max) && model.value.length >= max && !isChecked.value || !isUndefined(min) && model.value.length <= min && isChecked.value;
  });
  const isDisabled = useFormDisabled(computed(() => (checkboxGroup == null ? void 0 : checkboxGroup.disabled.value) || isLimitDisabled.value));
  return {
    isDisabled,
    isLimitDisabled
  };
};
const useCheckboxEvent = (props, {
  model,
  isLimitExceeded,
  hasOwnLabel,
  isDisabled,
  isLabeledByFormItem
}) => {
  const checkboxGroup = inject(checkboxGroupContextKey, void 0);
  const { formItem } = useFormItem();
  const { emit } = getCurrentInstance();
  function getLabeledValue(value) {
    var _a, _b, _c, _d;
    return [true, props.trueValue, props.trueLabel].includes(value) ? (_b = (_a = props.trueValue) != null ? _a : props.trueLabel) != null ? _b : true : (_d = (_c = props.falseValue) != null ? _c : props.falseLabel) != null ? _d : false;
  }
  function emitChangeEvent(checked, e) {
    emit(CHANGE_EVENT, getLabeledValue(checked), e);
  }
  function handleChange(e) {
    if (isLimitExceeded.value)
      return;
    const target = e.target;
    emit(CHANGE_EVENT, getLabeledValue(target.checked), e);
  }
  async function onClickRoot(e) {
    if (isLimitExceeded.value)
      return;
    if (!hasOwnLabel.value && !isDisabled.value && isLabeledByFormItem.value) {
      const eventTargets = e.composedPath();
      const hasLabel = eventTargets.some((item) => item.tagName === "LABEL");
      if (!hasLabel) {
        model.value = getLabeledValue([false, props.falseValue, props.falseLabel].includes(model.value));
        await nextTick();
        emitChangeEvent(model.value, e);
      }
    }
  }
  const validateEvent = computed(() => (checkboxGroup == null ? void 0 : checkboxGroup.validateEvent) || props.validateEvent);
  watch(() => props.modelValue, () => {
    if (validateEvent.value) {
      formItem == null ? void 0 : formItem.validate("change").catch((err) => debugWarn());
    }
  });
  return {
    handleChange,
    onClickRoot
  };
};
const useCheckboxModel = (props) => {
  const selfModel = ref(false);
  const { emit } = getCurrentInstance();
  const checkboxGroup = inject(checkboxGroupContextKey, void 0);
  const isGroup = computed(() => isUndefined(checkboxGroup) === false);
  const isLimitExceeded = ref(false);
  const model = computed({
    get() {
      var _a, _b;
      return isGroup.value ? (_a = checkboxGroup == null ? void 0 : checkboxGroup.modelValue) == null ? void 0 : _a.value : (_b = props.modelValue) != null ? _b : selfModel.value;
    },
    set(val) {
      var _a, _b;
      if (isGroup.value && isArray(val)) {
        isLimitExceeded.value = ((_a = checkboxGroup == null ? void 0 : checkboxGroup.max) == null ? void 0 : _a.value) !== void 0 && val.length > (checkboxGroup == null ? void 0 : checkboxGroup.max.value) && val.length > model.value.length;
        isLimitExceeded.value === false && ((_b = checkboxGroup == null ? void 0 : checkboxGroup.changeEvent) == null ? void 0 : _b.call(checkboxGroup, val));
      } else {
        emit(UPDATE_MODEL_EVENT, val);
        selfModel.value = val;
      }
    }
  });
  return {
    model,
    isGroup,
    isLimitExceeded
  };
};
const useCheckboxStatus = (props, slots, { model }) => {
  const checkboxGroup = inject(checkboxGroupContextKey, void 0);
  const isFocused = ref(false);
  const actualValue = computed(() => {
    if (!isPropAbsent(props.value)) {
      return props.value;
    }
    return props.label;
  });
  const isChecked = computed(() => {
    const value = model.value;
    if (isBoolean(value)) {
      return value;
    } else if (isArray(value)) {
      if (isObject(actualValue.value)) {
        return value.map(toRaw).some((o) => isEqual(o, actualValue.value));
      } else {
        return value.map(toRaw).includes(actualValue.value);
      }
    } else if (value !== null && value !== void 0) {
      return value === props.trueValue || value === props.trueLabel;
    } else {
      return !!value;
    }
  });
  const checkboxButtonSize = useFormSize(computed(() => {
    var _a;
    return (_a = checkboxGroup == null ? void 0 : checkboxGroup.size) == null ? void 0 : _a.value;
  }), {
    prop: true
  });
  const checkboxSize = useFormSize(computed(() => {
    var _a;
    return (_a = checkboxGroup == null ? void 0 : checkboxGroup.size) == null ? void 0 : _a.value;
  }));
  const hasOwnLabel = computed(() => {
    return !!slots.default || !isPropAbsent(actualValue.value);
  });
  return {
    checkboxButtonSize,
    isChecked,
    isFocused,
    checkboxSize,
    hasOwnLabel,
    actualValue
  };
};
const useCheckbox = (props, slots) => {
  const { formItem: elFormItem } = useFormItem();
  const { model, isGroup, isLimitExceeded } = useCheckboxModel(props);
  const {
    isFocused,
    isChecked,
    checkboxButtonSize,
    checkboxSize,
    hasOwnLabel,
    actualValue
  } = useCheckboxStatus(props, slots, { model });
  const { isDisabled } = useCheckboxDisabled({ model, isChecked });
  const { inputId, isLabeledByFormItem } = useFormItemInputId(props, {
    formItemContext: elFormItem,
    disableIdGeneration: hasOwnLabel,
    disableIdManagement: isGroup
  });
  const { handleChange, onClickRoot } = useCheckboxEvent(props, {
    model,
    isLimitExceeded,
    hasOwnLabel,
    isDisabled,
    isLabeledByFormItem
  });
  const setStoreValue = () => {
    function addToStore() {
      var _a, _b;
      if (isArray(model.value) && !model.value.includes(actualValue.value)) {
        model.value.push(actualValue.value);
      } else {
        model.value = (_b = (_a = props.trueValue) != null ? _a : props.trueLabel) != null ? _b : true;
      }
    }
    props.checked && addToStore();
  };
  setStoreValue();
  useDeprecated({
    from: "label act as value",
    replacement: "value",
    version: "3.0.0",
    scope: "el-checkbox",
    ref: "https://element-plus.org/en-US/component/checkbox.html"
  }, computed(() => isGroup.value && isPropAbsent(props.value)));
  useDeprecated({
    from: "true-label",
    replacement: "true-value",
    version: "3.0.0",
    scope: "el-checkbox",
    ref: "https://element-plus.org/en-US/component/checkbox.html"
  }, computed(() => !!props.trueLabel));
  useDeprecated({
    from: "false-label",
    replacement: "false-value",
    version: "3.0.0",
    scope: "el-checkbox",
    ref: "https://element-plus.org/en-US/component/checkbox.html"
  }, computed(() => !!props.falseLabel));
  return {
    inputId,
    isLabeledByFormItem,
    isChecked,
    isDisabled,
    isFocused,
    checkboxButtonSize,
    checkboxSize,
    hasOwnLabel,
    model,
    actualValue,
    handleChange,
    onClickRoot
  };
};
const __default__$d = defineComponent({
  name: "ElCheckbox"
});
const _sfc_main$u = /* @__PURE__ */ defineComponent({
  ...__default__$d,
  props: checkboxProps,
  emits: checkboxEmits,
  setup(__props) {
    const props = __props;
    const slots = useSlots();
    const {
      inputId,
      isLabeledByFormItem,
      isChecked,
      isDisabled,
      isFocused,
      checkboxSize,
      hasOwnLabel,
      model,
      actualValue,
      handleChange,
      onClickRoot
    } = useCheckbox(props, slots);
    const ns = useNamespace("checkbox");
    const compKls = computed(() => {
      return [
        ns.b(),
        ns.m(checkboxSize.value),
        ns.is("disabled", isDisabled.value),
        ns.is("bordered", props.border),
        ns.is("checked", isChecked.value)
      ];
    });
    const spanKls = computed(() => {
      return [
        ns.e("input"),
        ns.is("disabled", isDisabled.value),
        ns.is("checked", isChecked.value),
        ns.is("indeterminate", props.indeterminate),
        ns.is("focus", isFocused.value)
      ];
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(resolveDynamicComponent(!unref(hasOwnLabel) && unref(isLabeledByFormItem) ? "span" : "label"), {
        class: normalizeClass(unref(compKls)),
        "aria-controls": _ctx.indeterminate ? _ctx.ariaControls : null,
        onClick: unref(onClickRoot)
      }, {
        default: withCtx(() => {
          var _a, _b, _c, _d;
          return [
            createElementVNode("span", {
              class: normalizeClass(unref(spanKls))
            }, [
              _ctx.trueValue || _ctx.falseValue || _ctx.trueLabel || _ctx.falseLabel ? withDirectives((openBlock(), createElementBlock("input", {
                key: 0,
                id: unref(inputId),
                "onUpdate:modelValue": ($event) => isRef(model) ? model.value = $event : null,
                class: normalizeClass(unref(ns).e("original")),
                type: "checkbox",
                indeterminate: _ctx.indeterminate,
                name: _ctx.name,
                tabindex: _ctx.tabindex,
                disabled: unref(isDisabled),
                "true-value": (_b = (_a = _ctx.trueValue) != null ? _a : _ctx.trueLabel) != null ? _b : true,
                "false-value": (_d = (_c = _ctx.falseValue) != null ? _c : _ctx.falseLabel) != null ? _d : false,
                onChange: unref(handleChange),
                onFocus: ($event) => isFocused.value = true,
                onBlur: ($event) => isFocused.value = false,
                onClick: withModifiers(() => {
                }, ["stop"])
              }, null, 42, ["id", "onUpdate:modelValue", "indeterminate", "name", "tabindex", "disabled", "true-value", "false-value", "onChange", "onFocus", "onBlur", "onClick"])), [
                [vModelCheckbox, unref(model)]
              ]) : withDirectives((openBlock(), createElementBlock("input", {
                key: 1,
                id: unref(inputId),
                "onUpdate:modelValue": ($event) => isRef(model) ? model.value = $event : null,
                class: normalizeClass(unref(ns).e("original")),
                type: "checkbox",
                indeterminate: _ctx.indeterminate,
                disabled: unref(isDisabled),
                value: unref(actualValue),
                name: _ctx.name,
                tabindex: _ctx.tabindex,
                onChange: unref(handleChange),
                onFocus: ($event) => isFocused.value = true,
                onBlur: ($event) => isFocused.value = false,
                onClick: withModifiers(() => {
                }, ["stop"])
              }, null, 42, ["id", "onUpdate:modelValue", "indeterminate", "disabled", "value", "name", "tabindex", "onChange", "onFocus", "onBlur", "onClick"])), [
                [vModelCheckbox, unref(model)]
              ]),
              createElementVNode("span", {
                class: normalizeClass(unref(ns).e("inner"))
              }, null, 2)
            ], 2),
            unref(hasOwnLabel) ? (openBlock(), createElementBlock("span", {
              key: 0,
              class: normalizeClass(unref(ns).e("label"))
            }, [
              renderSlot(_ctx.$slots, "default"),
              !_ctx.$slots.default ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
                createTextVNode(toDisplayString(_ctx.label), 1)
              ], 64)) : createCommentVNode("v-if", true)
            ], 2)) : createCommentVNode("v-if", true)
          ];
        }),
        _: 3
      }, 8, ["class", "aria-controls", "onClick"]);
    };
  }
});
var Checkbox = /* @__PURE__ */ _export_sfc$1(_sfc_main$u, [["__file", "checkbox.vue"]]);
const __default__$c = defineComponent({
  name: "ElCheckboxButton"
});
const _sfc_main$t = /* @__PURE__ */ defineComponent({
  ...__default__$c,
  props: checkboxProps,
  emits: checkboxEmits,
  setup(__props) {
    const props = __props;
    const slots = useSlots();
    const {
      isFocused,
      isChecked,
      isDisabled,
      checkboxButtonSize,
      model,
      actualValue,
      handleChange
    } = useCheckbox(props, slots);
    const checkboxGroup = inject(checkboxGroupContextKey, void 0);
    const ns = useNamespace("checkbox");
    const activeStyle = computed(() => {
      var _a, _b, _c, _d;
      const fillValue = (_b = (_a = checkboxGroup == null ? void 0 : checkboxGroup.fill) == null ? void 0 : _a.value) != null ? _b : "";
      return {
        backgroundColor: fillValue,
        borderColor: fillValue,
        color: (_d = (_c = checkboxGroup == null ? void 0 : checkboxGroup.textColor) == null ? void 0 : _c.value) != null ? _d : "",
        boxShadow: fillValue ? `-1px 0 0 0 ${fillValue}` : void 0
      };
    });
    const labelKls = computed(() => {
      return [
        ns.b("button"),
        ns.bm("button", checkboxButtonSize.value),
        ns.is("disabled", isDisabled.value),
        ns.is("checked", isChecked.value),
        ns.is("focus", isFocused.value)
      ];
    });
    return (_ctx, _cache) => {
      var _a, _b, _c, _d;
      return openBlock(), createElementBlock("label", {
        class: normalizeClass(unref(labelKls))
      }, [
        _ctx.trueValue || _ctx.falseValue || _ctx.trueLabel || _ctx.falseLabel ? withDirectives((openBlock(), createElementBlock("input", {
          key: 0,
          "onUpdate:modelValue": ($event) => isRef(model) ? model.value = $event : null,
          class: normalizeClass(unref(ns).be("button", "original")),
          type: "checkbox",
          name: _ctx.name,
          tabindex: _ctx.tabindex,
          disabled: unref(isDisabled),
          "true-value": (_b = (_a = _ctx.trueValue) != null ? _a : _ctx.trueLabel) != null ? _b : true,
          "false-value": (_d = (_c = _ctx.falseValue) != null ? _c : _ctx.falseLabel) != null ? _d : false,
          onChange: unref(handleChange),
          onFocus: ($event) => isFocused.value = true,
          onBlur: ($event) => isFocused.value = false,
          onClick: withModifiers(() => {
          }, ["stop"])
        }, null, 42, ["onUpdate:modelValue", "name", "tabindex", "disabled", "true-value", "false-value", "onChange", "onFocus", "onBlur", "onClick"])), [
          [vModelCheckbox, unref(model)]
        ]) : withDirectives((openBlock(), createElementBlock("input", {
          key: 1,
          "onUpdate:modelValue": ($event) => isRef(model) ? model.value = $event : null,
          class: normalizeClass(unref(ns).be("button", "original")),
          type: "checkbox",
          name: _ctx.name,
          tabindex: _ctx.tabindex,
          disabled: unref(isDisabled),
          value: unref(actualValue),
          onChange: unref(handleChange),
          onFocus: ($event) => isFocused.value = true,
          onBlur: ($event) => isFocused.value = false,
          onClick: withModifiers(() => {
          }, ["stop"])
        }, null, 42, ["onUpdate:modelValue", "name", "tabindex", "disabled", "value", "onChange", "onFocus", "onBlur", "onClick"])), [
          [vModelCheckbox, unref(model)]
        ]),
        _ctx.$slots.default || _ctx.label ? (openBlock(), createElementBlock("span", {
          key: 2,
          class: normalizeClass(unref(ns).be("button", "inner")),
          style: normalizeStyle(unref(isChecked) ? unref(activeStyle) : void 0)
        }, [
          renderSlot(_ctx.$slots, "default", {}, () => [
            createTextVNode(toDisplayString(_ctx.label), 1)
          ])
        ], 6)) : createCommentVNode("v-if", true)
      ], 2);
    };
  }
});
var CheckboxButton = /* @__PURE__ */ _export_sfc$1(_sfc_main$t, [["__file", "checkbox-button.vue"]]);
const checkboxGroupProps = buildProps({
  modelValue: {
    type: definePropType(Array),
    default: () => []
  },
  disabled: Boolean,
  min: Number,
  max: Number,
  size: useSizeProp,
  fill: String,
  textColor: String,
  tag: {
    type: String,
    default: "div"
  },
  validateEvent: {
    type: Boolean,
    default: true
  },
  ...useAriaProps(["ariaLabel"])
});
const checkboxGroupEmits = {
  [UPDATE_MODEL_EVENT]: (val) => isArray(val),
  change: (val) => isArray(val)
};
const __default__$b = defineComponent({
  name: "ElCheckboxGroup"
});
const _sfc_main$s = /* @__PURE__ */ defineComponent({
  ...__default__$b,
  props: checkboxGroupProps,
  emits: checkboxGroupEmits,
  setup(__props, { emit }) {
    const props = __props;
    const ns = useNamespace("checkbox");
    const { formItem } = useFormItem();
    const { inputId: groupId, isLabeledByFormItem } = useFormItemInputId(props, {
      formItemContext: formItem
    });
    const changeEvent = async (value) => {
      emit(UPDATE_MODEL_EVENT, value);
      await nextTick();
      emit(CHANGE_EVENT, value);
    };
    const modelValue3 = computed({
      get() {
        return props.modelValue;
      },
      set(val) {
        changeEvent(val);
      }
    });
    provide(checkboxGroupContextKey, {
      ...pick(toRefs(props), [
        "size",
        "min",
        "max",
        "disabled",
        "validateEvent",
        "fill",
        "textColor"
      ]),
      modelValue: modelValue3,
      changeEvent
    });
    watch(() => props.modelValue, () => {
      if (props.validateEvent) {
        formItem == null ? void 0 : formItem.validate("change").catch((err) => debugWarn());
      }
    });
    return (_ctx, _cache) => {
      var _a;
      return openBlock(), createBlock(resolveDynamicComponent(_ctx.tag), {
        id: unref(groupId),
        class: normalizeClass(unref(ns).b("group")),
        role: "group",
        "aria-label": !unref(isLabeledByFormItem) ? _ctx.ariaLabel || "checkbox-group" : void 0,
        "aria-labelledby": unref(isLabeledByFormItem) ? (_a = unref(formItem)) == null ? void 0 : _a.labelId : void 0
      }, {
        default: withCtx(() => [
          renderSlot(_ctx.$slots, "default")
        ]),
        _: 3
      }, 8, ["id", "class", "aria-label", "aria-labelledby"]);
    };
  }
});
var CheckboxGroup = /* @__PURE__ */ _export_sfc$1(_sfc_main$s, [["__file", "checkbox-group.vue"]]);
const ElCheckbox = withInstall(Checkbox, {
  CheckboxButton,
  CheckboxGroup
});
withNoopInstall(CheckboxButton);
withNoopInstall(CheckboxGroup);
const descriptionsKey = Symbol("elDescriptions");
var ElDescriptionsCell = defineComponent({
  name: "ElDescriptionsCell",
  props: {
    cell: {
      type: Object
    },
    tag: {
      type: String,
      default: "td"
    },
    type: {
      type: String
    }
  },
  setup() {
    const descriptions = inject(descriptionsKey, {});
    return {
      descriptions
    };
  },
  render() {
    var _a;
    const item = getNormalizedProps(this.cell);
    const directives = (((_a = this.cell) == null ? void 0 : _a.dirs) || []).map((dire) => {
      const { dir, arg, modifiers, value } = dire;
      return [dir, value, arg, modifiers];
    });
    const { border, direction } = this.descriptions;
    const isVertical = direction === "vertical";
    const renderLabel = () => {
      var _a2, _b, _c;
      return ((_c = (_b = (_a2 = this.cell) == null ? void 0 : _a2.children) == null ? void 0 : _b.label) == null ? void 0 : _c.call(_b)) || item.label;
    };
    const renderContent = () => {
      var _a2, _b, _c;
      return (_c = (_b = (_a2 = this.cell) == null ? void 0 : _a2.children) == null ? void 0 : _b.default) == null ? void 0 : _c.call(_b);
    };
    const span = item.span;
    const rowspan = item.rowspan;
    const align = item.align ? `is-${item.align}` : "";
    const labelAlign = item.labelAlign ? `is-${item.labelAlign}` : align;
    const className = item.className;
    const labelClassName = item.labelClassName;
    const width = this.type === "label" ? item.labelWidth || this.descriptions.labelWidth || item.width : item.width;
    const style2 = {
      width: addUnit(width),
      minWidth: addUnit(item.minWidth)
    };
    const ns = useNamespace("descriptions");
    switch (this.type) {
      case "label":
        return withDirectives(h(this.tag, {
          style: style2,
          class: [
            ns.e("cell"),
            ns.e("label"),
            ns.is("bordered-label", border),
            ns.is("vertical-label", isVertical),
            labelAlign,
            labelClassName
          ],
          colSpan: isVertical ? span : 1,
          rowspan: isVertical ? 1 : rowspan
        }, renderLabel()), directives);
      case "content":
        return withDirectives(h(this.tag, {
          style: style2,
          class: [
            ns.e("cell"),
            ns.e("content"),
            ns.is("bordered-content", border),
            ns.is("vertical-content", isVertical),
            align,
            className
          ],
          colSpan: isVertical ? span : span * 2 - 1,
          rowspan: isVertical ? rowspan * 2 - 1 : rowspan
        }, renderContent()), directives);
      default: {
        const label = renderLabel();
        const labelStyle = {};
        const width2 = addUnit(item.labelWidth || this.descriptions.labelWidth);
        if (width2) {
          labelStyle.width = width2;
          labelStyle.display = "inline-block";
        }
        return withDirectives(h("td", {
          style: style2,
          class: [ns.e("cell"), align],
          colSpan: span,
          rowspan
        }, [
          !isNil(label) ? h("span", {
            style: labelStyle,
            class: [ns.e("label"), labelClassName]
          }, label) : void 0,
          h("span", {
            class: [ns.e("content"), className]
          }, renderContent())
        ]), directives);
      }
    }
  }
});
const descriptionsRowProps = buildProps({
  row: {
    type: definePropType(Array),
    default: () => []
  }
});
const __default__$a = defineComponent({
  name: "ElDescriptionsRow"
});
const _sfc_main$r = /* @__PURE__ */ defineComponent({
  ...__default__$a,
  props: descriptionsRowProps,
  setup(__props) {
    const descriptions = inject(descriptionsKey, {});
    return (_ctx, _cache) => {
      return unref(descriptions).direction === "vertical" ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
        createElementVNode("tr", null, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.row, (cell, _index) => {
            return openBlock(), createBlock(unref(ElDescriptionsCell), {
              key: `tr1-${_index}`,
              cell,
              tag: "th",
              type: "label"
            }, null, 8, ["cell"]);
          }), 128))
        ]),
        createElementVNode("tr", null, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.row, (cell, _index) => {
            return openBlock(), createBlock(unref(ElDescriptionsCell), {
              key: `tr2-${_index}`,
              cell,
              tag: "td",
              type: "content"
            }, null, 8, ["cell"]);
          }), 128))
        ])
      ], 64)) : (openBlock(), createElementBlock("tr", { key: 1 }, [
        (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.row, (cell, _index) => {
          return openBlock(), createElementBlock(Fragment, {
            key: `tr3-${_index}`
          }, [
            unref(descriptions).border ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
              createVNode(unref(ElDescriptionsCell), {
                cell,
                tag: "td",
                type: "label"
              }, null, 8, ["cell"]),
              createVNode(unref(ElDescriptionsCell), {
                cell,
                tag: "td",
                type: "content"
              }, null, 8, ["cell"])
            ], 64)) : (openBlock(), createBlock(unref(ElDescriptionsCell), {
              key: 1,
              cell,
              tag: "td",
              type: "both"
            }, null, 8, ["cell"]))
          ], 64);
        }), 128))
      ]));
    };
  }
});
var ElDescriptionsRow = /* @__PURE__ */ _export_sfc$1(_sfc_main$r, [["__file", "descriptions-row.vue"]]);
const descriptionProps = buildProps({
  border: Boolean,
  column: {
    type: Number,
    default: 3
  },
  direction: {
    type: String,
    values: ["horizontal", "vertical"],
    default: "horizontal"
  },
  size: useSizeProp,
  title: {
    type: String,
    default: ""
  },
  extra: {
    type: String,
    default: ""
  },
  labelWidth: {
    type: [String, Number],
    default: ""
  }
});
const COMPONENT_NAME$2 = "ElDescriptionsItem";
const __default__$9 = defineComponent({
  name: "ElDescriptions"
});
const _sfc_main$q = /* @__PURE__ */ defineComponent({
  ...__default__$9,
  props: descriptionProps,
  setup(__props) {
    const props = __props;
    const ns = useNamespace("descriptions");
    const descriptionsSize = useFormSize();
    const slots = useSlots();
    provide(descriptionsKey, props);
    const descriptionKls = computed(() => [ns.b(), ns.m(descriptionsSize.value)]);
    const filledNode = (node, span, count, isLast = false) => {
      if (!node.props) {
        node.props = {};
      }
      if (span > count) {
        node.props.span = count;
      }
      if (isLast) {
        node.props.span = span;
      }
      return node;
    };
    const getRows = () => {
      if (!slots.default)
        return [];
      const children = flattedChildren(slots.default()).filter((node) => {
        var _a;
        return ((_a = node == null ? void 0 : node.type) == null ? void 0 : _a.name) === COMPONENT_NAME$2;
      });
      const rows = [];
      let temp = [];
      let count = props.column;
      let totalSpan = 0;
      const rowspanTemp = [];
      children.forEach((node, index) => {
        var _a, _b, _c;
        const span = ((_a = node.props) == null ? void 0 : _a.span) || 1;
        const rowspan = ((_b = node.props) == null ? void 0 : _b.rowspan) || 1;
        const rowNo = rows.length;
        rowspanTemp[rowNo] || (rowspanTemp[rowNo] = 0);
        if (rowspan > 1) {
          for (let i = 1; i < rowspan; i++) {
            rowspanTemp[_c = rowNo + i] || (rowspanTemp[_c] = 0);
            rowspanTemp[rowNo + i]++;
            totalSpan++;
          }
        }
        if (rowspanTemp[rowNo] > 0) {
          count -= rowspanTemp[rowNo];
          rowspanTemp[rowNo] = 0;
        }
        if (index < children.length - 1) {
          totalSpan += span > count ? count : span;
        }
        if (index === children.length - 1) {
          const lastSpan = props.column - totalSpan % props.column;
          temp.push(filledNode(node, lastSpan, count, true));
          rows.push(temp);
          return;
        }
        if (span < count) {
          count -= span;
          temp.push(node);
        } else {
          temp.push(filledNode(node, span, count));
          rows.push(temp);
          count = props.column;
          temp = [];
        }
      });
      return rows;
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(unref(descriptionKls))
      }, [
        _ctx.title || _ctx.extra || _ctx.$slots.title || _ctx.$slots.extra ? (openBlock(), createElementBlock("div", {
          key: 0,
          class: normalizeClass(unref(ns).e("header"))
        }, [
          createElementVNode("div", {
            class: normalizeClass(unref(ns).e("title"))
          }, [
            renderSlot(_ctx.$slots, "title", {}, () => [
              createTextVNode(toDisplayString(_ctx.title), 1)
            ])
          ], 2),
          createElementVNode("div", {
            class: normalizeClass(unref(ns).e("extra"))
          }, [
            renderSlot(_ctx.$slots, "extra", {}, () => [
              createTextVNode(toDisplayString(_ctx.extra), 1)
            ])
          ], 2)
        ], 2)) : createCommentVNode("v-if", true),
        createElementVNode("div", {
          class: normalizeClass(unref(ns).e("body"))
        }, [
          createElementVNode("table", {
            class: normalizeClass([unref(ns).e("table"), unref(ns).is("bordered", _ctx.border)])
          }, [
            createElementVNode("tbody", null, [
              (openBlock(true), createElementBlock(Fragment, null, renderList(getRows(), (row, _index) => {
                return openBlock(), createBlock(ElDescriptionsRow, {
                  key: _index,
                  row
                }, null, 8, ["row"]);
              }), 128))
            ])
          ], 2)
        ], 2)
      ], 2);
    };
  }
});
var Descriptions = /* @__PURE__ */ _export_sfc$1(_sfc_main$q, [["__file", "description.vue"]]);
const descriptionItemProps = buildProps({
  label: {
    type: String,
    default: ""
  },
  span: {
    type: Number,
    default: 1
  },
  rowspan: {
    type: Number,
    default: 1
  },
  width: {
    type: [String, Number],
    default: ""
  },
  minWidth: {
    type: [String, Number],
    default: ""
  },
  labelWidth: {
    type: [String, Number],
    default: ""
  },
  align: {
    type: String,
    default: "left"
  },
  labelAlign: {
    type: String,
    default: ""
  },
  className: {
    type: String,
    default: ""
  },
  labelClassName: {
    type: String,
    default: ""
  }
});
const DescriptionItem = defineComponent({
  name: COMPONENT_NAME$2,
  props: descriptionItemProps
});
const ElDescriptions = withInstall(Descriptions, {
  DescriptionsItem: DescriptionItem
});
const ElDescriptionsItem = withNoopInstall(DescriptionItem);
const dialogInjectionKey = Symbol("dialogInjectionKey");
const useDraggable = (targetRef, dragRef, draggable, overflow) => {
  const transform = {
    offsetX: 0,
    offsetY: 0
  };
  const adjustPosition = (moveX, moveY) => {
    if (targetRef.value) {
      const { offsetX, offsetY } = transform;
      const targetRect = targetRef.value.getBoundingClientRect();
      const targetLeft = targetRect.left;
      const targetTop = targetRect.top;
      const targetWidth = targetRect.width;
      const targetHeight = targetRect.height;
      const clientWidth = (void 0).documentElement.clientWidth;
      const clientHeight = (void 0).documentElement.clientHeight;
      const minLeft = -targetLeft + offsetX;
      const minTop = -targetTop + offsetY;
      const maxLeft = clientWidth - targetLeft - targetWidth + offsetX;
      const maxTop = clientHeight - targetTop - targetHeight + offsetY;
      if (!(overflow == null ? void 0 : overflow.value)) {
        moveX = Math.min(Math.max(moveX, minLeft), maxLeft);
        moveY = Math.min(Math.max(moveY, minTop), maxTop);
      }
      transform.offsetX = moveX;
      transform.offsetY = moveY;
      targetRef.value.style.transform = `translate(${addUnit(moveX)}, ${addUnit(moveY)})`;
    }
  };
  const resetPosition = () => {
    transform.offsetX = 0;
    transform.offsetY = 0;
    if (targetRef.value) {
      targetRef.value.style.transform = "";
    }
  };
  const updatePosition = () => {
    const { offsetX, offsetY } = transform;
    adjustPosition(offsetX, offsetY);
  };
  return {
    resetPosition,
    updatePosition
  };
};
const composeRefs = (...refs) => {
  return (el) => {
    refs.forEach((ref2) => {
      if (isFunction$1(ref2)) {
        ref2(el);
      } else {
        ref2.value = el;
      }
    });
  };
};
const __default__$8 = defineComponent({ name: "ElDialogContent" });
const _sfc_main$p = /* @__PURE__ */ defineComponent({
  ...__default__$8,
  props: dialogContentProps,
  emits: dialogContentEmits,
  setup(__props, { expose }) {
    const props = __props;
    const { t } = useLocale();
    const { Close } = CloseComponents;
    const { dialogRef, headerRef, bodyId, ns, style: style2 } = inject(dialogInjectionKey);
    const { focusTrapRef } = inject(FOCUS_TRAP_INJECTION_KEY);
    const dialogKls = computed(() => [
      ns.b(),
      ns.is("fullscreen", props.fullscreen),
      ns.is("draggable", props.draggable),
      ns.is("align-center", props.alignCenter),
      { [ns.m("center")]: props.center }
    ]);
    const composedDialogRef = composeRefs(focusTrapRef, dialogRef);
    const draggable = computed(() => props.draggable);
    const overflow = computed(() => props.overflow);
    const { resetPosition, updatePosition } = useDraggable(dialogRef, headerRef, draggable, overflow);
    expose({
      resetPosition,
      updatePosition
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        ref: unref(composedDialogRef),
        class: normalizeClass(unref(dialogKls)),
        style: normalizeStyle(unref(style2)),
        tabindex: "-1"
      }, [
        createElementVNode("header", {
          ref_key: "headerRef",
          ref: headerRef,
          class: normalizeClass([unref(ns).e("header"), _ctx.headerClass, { "show-close": _ctx.showClose }])
        }, [
          renderSlot(_ctx.$slots, "header", {}, () => [
            createElementVNode("span", {
              role: "heading",
              "aria-level": _ctx.ariaLevel,
              class: normalizeClass(unref(ns).e("title"))
            }, toDisplayString(_ctx.title), 11, ["aria-level"])
          ]),
          _ctx.showClose ? (openBlock(), createElementBlock("button", {
            key: 0,
            "aria-label": unref(t)("el.dialog.close"),
            class: normalizeClass(unref(ns).e("headerbtn")),
            type: "button",
            onClick: ($event) => _ctx.$emit("close")
          }, [
            createVNode(unref(ElIcon), {
              class: normalizeClass(unref(ns).e("close"))
            }, {
              default: withCtx(() => [
                (openBlock(), createBlock(resolveDynamicComponent(_ctx.closeIcon || unref(Close))))
              ]),
              _: 1
            }, 8, ["class"])
          ], 10, ["aria-label", "onClick"])) : createCommentVNode("v-if", true)
        ], 2),
        createElementVNode("div", {
          id: unref(bodyId),
          class: normalizeClass([unref(ns).e("body"), _ctx.bodyClass])
        }, [
          renderSlot(_ctx.$slots, "default")
        ], 10, ["id"]),
        _ctx.$slots.footer ? (openBlock(), createElementBlock("footer", {
          key: 0,
          class: normalizeClass([unref(ns).e("footer"), _ctx.footerClass])
        }, [
          renderSlot(_ctx.$slots, "footer")
        ], 2)) : createCommentVNode("v-if", true)
      ], 6);
    };
  }
});
var ElDialogContent = /* @__PURE__ */ _export_sfc$1(_sfc_main$p, [["__file", "dialog-content.vue"]]);
const __default__$7 = defineComponent({
  name: "ElDialog",
  inheritAttrs: false
});
const _sfc_main$o = /* @__PURE__ */ defineComponent({
  ...__default__$7,
  props: dialogProps,
  emits: dialogEmits,
  setup(__props, { expose }) {
    const props = __props;
    const slots = useSlots();
    useDeprecated({
      scope: "el-dialog",
      from: "the title slot",
      replacement: "the header slot",
      version: "3.0.0",
      ref: "https://element-plus.org/en-US/component/dialog.html#slots"
    }, computed(() => !!slots.title));
    const ns = useNamespace("dialog");
    const dialogRef = ref();
    const headerRef = ref();
    const dialogContentRef = ref();
    const {
      visible,
      titleId,
      bodyId,
      style: style2,
      overlayDialogStyle,
      rendered,
      zIndex,
      afterEnter,
      afterLeave,
      beforeLeave,
      handleClose,
      onModalClick,
      onOpenAutoFocus,
      onCloseAutoFocus,
      onCloseRequested,
      onFocusoutPrevented
    } = useDialog(props, dialogRef);
    provide(dialogInjectionKey, {
      dialogRef,
      headerRef,
      bodyId,
      ns,
      rendered,
      style: style2
    });
    const overlayEvent = useSameTarget(onModalClick);
    const draggable = computed(() => props.draggable && !props.fullscreen);
    const resetPosition = () => {
      var _a;
      (_a = dialogContentRef.value) == null ? void 0 : _a.resetPosition();
    };
    expose({
      visible,
      dialogContentRef,
      resetPosition,
      handleClose
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(ElTeleport), {
        to: _ctx.appendTo,
        disabled: _ctx.appendTo !== "body" ? false : !_ctx.appendToBody
      }, {
        default: withCtx(() => [
          createVNode(Transition, {
            name: "dialog-fade",
            onAfterEnter: unref(afterEnter),
            onAfterLeave: unref(afterLeave),
            onBeforeLeave: unref(beforeLeave),
            persisted: ""
          }, {
            default: withCtx(() => [
              withDirectives(createVNode(unref(ElOverlay), {
                "custom-mask-event": "",
                mask: _ctx.modal,
                "overlay-class": _ctx.modalClass,
                "z-index": unref(zIndex)
              }, {
                default: withCtx(() => [
                  createElementVNode("div", {
                    role: "dialog",
                    "aria-modal": "true",
                    "aria-label": _ctx.title || void 0,
                    "aria-labelledby": !_ctx.title ? unref(titleId) : void 0,
                    "aria-describedby": unref(bodyId),
                    class: normalizeClass(`${unref(ns).namespace.value}-overlay-dialog`),
                    style: normalizeStyle(unref(overlayDialogStyle)),
                    onClick: unref(overlayEvent).onClick,
                    onMousedown: unref(overlayEvent).onMousedown,
                    onMouseup: unref(overlayEvent).onMouseup
                  }, [
                    createVNode(unref(ElFocusTrap), {
                      loop: "",
                      trapped: unref(visible),
                      "focus-start-el": "container",
                      onFocusAfterTrapped: unref(onOpenAutoFocus),
                      onFocusAfterReleased: unref(onCloseAutoFocus),
                      onFocusoutPrevented: unref(onFocusoutPrevented),
                      onReleaseRequested: unref(onCloseRequested)
                    }, {
                      default: withCtx(() => [
                        unref(rendered) ? (openBlock(), createBlock(ElDialogContent, mergeProps({
                          key: 0,
                          ref_key: "dialogContentRef",
                          ref: dialogContentRef
                        }, _ctx.$attrs, {
                          center: _ctx.center,
                          "align-center": _ctx.alignCenter,
                          "close-icon": _ctx.closeIcon,
                          draggable: unref(draggable),
                          overflow: _ctx.overflow,
                          fullscreen: _ctx.fullscreen,
                          "header-class": _ctx.headerClass,
                          "body-class": _ctx.bodyClass,
                          "footer-class": _ctx.footerClass,
                          "show-close": _ctx.showClose,
                          title: _ctx.title,
                          "aria-level": _ctx.headerAriaLevel,
                          onClose: unref(handleClose)
                        }), createSlots({
                          header: withCtx(() => [
                            !_ctx.$slots.title ? renderSlot(_ctx.$slots, "header", {
                              key: 0,
                              close: unref(handleClose),
                              titleId: unref(titleId),
                              titleClass: unref(ns).e("title")
                            }) : renderSlot(_ctx.$slots, "title", { key: 1 })
                          ]),
                          default: withCtx(() => [
                            renderSlot(_ctx.$slots, "default")
                          ]),
                          _: 2
                        }, [
                          _ctx.$slots.footer ? {
                            name: "footer",
                            fn: withCtx(() => [
                              renderSlot(_ctx.$slots, "footer")
                            ])
                          } : void 0
                        ]), 1040, ["center", "align-center", "close-icon", "draggable", "overflow", "fullscreen", "header-class", "body-class", "footer-class", "show-close", "title", "aria-level", "onClose"])) : createCommentVNode("v-if", true)
                      ]),
                      _: 3
                    }, 8, ["trapped", "onFocusAfterTrapped", "onFocusAfterReleased", "onFocusoutPrevented", "onReleaseRequested"])
                  ], 46, ["aria-label", "aria-labelledby", "aria-describedby", "onClick", "onMousedown", "onMouseup"])
                ]),
                _: 3
              }, 8, ["mask", "overlay-class", "z-index"]), [
                [vShow, unref(visible)]
              ])
            ]),
            _: 3
          }, 8, ["onAfterEnter", "onAfterLeave", "onBeforeLeave"])
        ]),
        _: 3
      }, 8, ["to", "disabled"]);
    };
  }
});
var Dialog = /* @__PURE__ */ _export_sfc$1(_sfc_main$o, [["__file", "dialog.vue"]]);
const ElDialog = withInstall(Dialog);
const progressProps = buildProps({
  type: {
    type: String,
    default: "line",
    values: ["line", "circle", "dashboard"]
  },
  percentage: {
    type: Number,
    default: 0,
    validator: (val) => val >= 0 && val <= 100
  },
  status: {
    type: String,
    default: "",
    values: ["", "success", "exception", "warning"]
  },
  indeterminate: Boolean,
  duration: {
    type: Number,
    default: 3
  },
  strokeWidth: {
    type: Number,
    default: 6
  },
  strokeLinecap: {
    type: definePropType(String),
    default: "round"
  },
  textInside: Boolean,
  width: {
    type: Number,
    default: 126
  },
  showText: {
    type: Boolean,
    default: true
  },
  color: {
    type: definePropType([
      String,
      Array,
      Function
    ]),
    default: ""
  },
  striped: Boolean,
  stripedFlow: Boolean,
  format: {
    type: definePropType(Function),
    default: (percentage) => `${percentage}%`
  }
});
const __default__$6 = defineComponent({
  name: "ElProgress"
});
const _sfc_main$n = /* @__PURE__ */ defineComponent({
  ...__default__$6,
  props: progressProps,
  setup(__props) {
    const props = __props;
    const STATUS_COLOR_MAP = {
      success: "#13ce66",
      exception: "#ff4949",
      warning: "#e6a23c",
      default: "#20a0ff"
    };
    const ns = useNamespace("progress");
    const barStyle = computed(() => {
      const barStyle2 = {
        width: `${props.percentage}%`,
        animationDuration: `${props.duration}s`
      };
      const color = getCurrentColor(props.percentage);
      if (color.includes("gradient")) {
        barStyle2.background = color;
      } else {
        barStyle2.backgroundColor = color;
      }
      return barStyle2;
    });
    const relativeStrokeWidth = computed(() => (props.strokeWidth / props.width * 100).toFixed(1));
    const radius = computed(() => {
      if (["circle", "dashboard"].includes(props.type)) {
        return Number.parseInt(`${50 - Number.parseFloat(relativeStrokeWidth.value) / 2}`, 10);
      }
      return 0;
    });
    const trackPath = computed(() => {
      const r = radius.value;
      const isDashboard = props.type === "dashboard";
      return `
          M 50 50
          m 0 ${isDashboard ? "" : "-"}${r}
          a ${r} ${r} 0 1 1 0 ${isDashboard ? "-" : ""}${r * 2}
          a ${r} ${r} 0 1 1 0 ${isDashboard ? "" : "-"}${r * 2}
          `;
    });
    const perimeter = computed(() => 2 * Math.PI * radius.value);
    const rate = computed(() => props.type === "dashboard" ? 0.75 : 1);
    const strokeDashoffset = computed(() => {
      const offset = -1 * perimeter.value * (1 - rate.value) / 2;
      return `${offset}px`;
    });
    const trailPathStyle = computed(() => ({
      strokeDasharray: `${perimeter.value * rate.value}px, ${perimeter.value}px`,
      strokeDashoffset: strokeDashoffset.value
    }));
    const circlePathStyle = computed(() => ({
      strokeDasharray: `${perimeter.value * rate.value * (props.percentage / 100)}px, ${perimeter.value}px`,
      strokeDashoffset: strokeDashoffset.value,
      transition: "stroke-dasharray 0.6s ease 0s, stroke 0.6s ease, opacity ease 0.6s"
    }));
    const stroke = computed(() => {
      let ret;
      if (props.color) {
        ret = getCurrentColor(props.percentage);
      } else {
        ret = STATUS_COLOR_MAP[props.status] || STATUS_COLOR_MAP.default;
      }
      return ret;
    });
    const statusIcon = computed(() => {
      if (props.status === "warning") {
        return warning_filled_default;
      }
      if (props.type === "line") {
        return props.status === "success" ? circle_check_default : circle_close_default;
      } else {
        return props.status === "success" ? check_default : close_default;
      }
    });
    const progressTextSize = computed(() => {
      return props.type === "line" ? 12 + props.strokeWidth * 0.4 : props.width * 0.111111 + 2;
    });
    const content = computed(() => props.format(props.percentage));
    function getColors(color) {
      const span = 100 / color.length;
      const seriesColors = color.map((seriesColor, index) => {
        if (isString(seriesColor)) {
          return {
            color: seriesColor,
            percentage: (index + 1) * span
          };
        }
        return seriesColor;
      });
      return seriesColors.sort((a, b) => a.percentage - b.percentage);
    }
    const getCurrentColor = (percentage) => {
      var _a;
      const { color } = props;
      if (isFunction$1(color)) {
        return color(percentage);
      } else if (isString(color)) {
        return color;
      } else {
        const colors = getColors(color);
        for (const color2 of colors) {
          if (color2.percentage > percentage)
            return color2.color;
        }
        return (_a = colors[colors.length - 1]) == null ? void 0 : _a.color;
      }
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass([
          unref(ns).b(),
          unref(ns).m(_ctx.type),
          unref(ns).is(_ctx.status),
          {
            [unref(ns).m("without-text")]: !_ctx.showText,
            [unref(ns).m("text-inside")]: _ctx.textInside
          }
        ]),
        role: "progressbar",
        "aria-valuenow": _ctx.percentage,
        "aria-valuemin": "0",
        "aria-valuemax": "100"
      }, [
        _ctx.type === "line" ? (openBlock(), createElementBlock("div", {
          key: 0,
          class: normalizeClass(unref(ns).b("bar"))
        }, [
          createElementVNode("div", {
            class: normalizeClass(unref(ns).be("bar", "outer")),
            style: normalizeStyle({ height: `${_ctx.strokeWidth}px` })
          }, [
            createElementVNode("div", {
              class: normalizeClass([
                unref(ns).be("bar", "inner"),
                { [unref(ns).bem("bar", "inner", "indeterminate")]: _ctx.indeterminate },
                { [unref(ns).bem("bar", "inner", "striped")]: _ctx.striped },
                { [unref(ns).bem("bar", "inner", "striped-flow")]: _ctx.stripedFlow }
              ]),
              style: normalizeStyle(unref(barStyle))
            }, [
              (_ctx.showText || _ctx.$slots.default) && _ctx.textInside ? (openBlock(), createElementBlock("div", {
                key: 0,
                class: normalizeClass(unref(ns).be("bar", "innerText"))
              }, [
                renderSlot(_ctx.$slots, "default", { percentage: _ctx.percentage }, () => [
                  createElementVNode("span", null, toDisplayString(unref(content)), 1)
                ])
              ], 2)) : createCommentVNode("v-if", true)
            ], 6)
          ], 6)
        ], 2)) : (openBlock(), createElementBlock("div", {
          key: 1,
          class: normalizeClass(unref(ns).b("circle")),
          style: normalizeStyle({ height: `${_ctx.width}px`, width: `${_ctx.width}px` })
        }, [
          (openBlock(), createElementBlock("svg", { viewBox: "0 0 100 100" }, [
            createElementVNode("path", {
              class: normalizeClass(unref(ns).be("circle", "track")),
              d: unref(trackPath),
              stroke: `var(${unref(ns).cssVarName("fill-color-light")}, #e5e9f2)`,
              "stroke-linecap": _ctx.strokeLinecap,
              "stroke-width": unref(relativeStrokeWidth),
              fill: "none",
              style: normalizeStyle(unref(trailPathStyle))
            }, null, 14, ["d", "stroke", "stroke-linecap", "stroke-width"]),
            createElementVNode("path", {
              class: normalizeClass(unref(ns).be("circle", "path")),
              d: unref(trackPath),
              stroke: unref(stroke),
              fill: "none",
              opacity: _ctx.percentage ? 1 : 0,
              "stroke-linecap": _ctx.strokeLinecap,
              "stroke-width": unref(relativeStrokeWidth),
              style: normalizeStyle(unref(circlePathStyle))
            }, null, 14, ["d", "stroke", "opacity", "stroke-linecap", "stroke-width"])
          ]))
        ], 6)),
        (_ctx.showText || _ctx.$slots.default) && !_ctx.textInside ? (openBlock(), createElementBlock("div", {
          key: 2,
          class: normalizeClass(unref(ns).e("text")),
          style: normalizeStyle({ fontSize: `${unref(progressTextSize)}px` })
        }, [
          renderSlot(_ctx.$slots, "default", { percentage: _ctx.percentage }, () => [
            !_ctx.status ? (openBlock(), createElementBlock("span", { key: 0 }, toDisplayString(unref(content)), 1)) : (openBlock(), createBlock(unref(ElIcon), { key: 1 }, {
              default: withCtx(() => [
                (openBlock(), createBlock(resolveDynamicComponent(unref(statusIcon))))
              ]),
              _: 1
            }))
          ])
        ], 6)) : createCommentVNode("v-if", true)
      ], 10, ["aria-valuenow"]);
    };
  }
});
var Progress = /* @__PURE__ */ _export_sfc$1(_sfc_main$n, [["__file", "progress.vue"]]);
const ElProgress = withInstall(Progress);
const isValidComponentSize = (val) => ["", ...componentSizes].includes(val);
const switchProps = buildProps({
  modelValue: {
    type: [Boolean, String, Number],
    default: false
  },
  disabled: Boolean,
  loading: Boolean,
  size: {
    type: String,
    validator: isValidComponentSize
  },
  width: {
    type: [String, Number],
    default: ""
  },
  inlinePrompt: Boolean,
  inactiveActionIcon: {
    type: iconPropType
  },
  activeActionIcon: {
    type: iconPropType
  },
  activeIcon: {
    type: iconPropType
  },
  inactiveIcon: {
    type: iconPropType
  },
  activeText: {
    type: String,
    default: ""
  },
  inactiveText: {
    type: String,
    default: ""
  },
  activeValue: {
    type: [Boolean, String, Number],
    default: true
  },
  inactiveValue: {
    type: [Boolean, String, Number],
    default: false
  },
  name: {
    type: String,
    default: ""
  },
  validateEvent: {
    type: Boolean,
    default: true
  },
  beforeChange: {
    type: definePropType(Function)
  },
  id: String,
  tabindex: {
    type: [String, Number]
  },
  ...useAriaProps(["ariaLabel"])
});
const switchEmits = {
  [UPDATE_MODEL_EVENT]: (val) => isBoolean(val) || isString(val) || isNumber(val),
  [CHANGE_EVENT]: (val) => isBoolean(val) || isString(val) || isNumber(val),
  [INPUT_EVENT]: (val) => isBoolean(val) || isString(val) || isNumber(val)
};
const COMPONENT_NAME$1 = "ElSwitch";
const __default__$5 = defineComponent({
  name: COMPONENT_NAME$1
});
const _sfc_main$m = /* @__PURE__ */ defineComponent({
  ...__default__$5,
  props: switchProps,
  emits: switchEmits,
  setup(__props, { expose, emit }) {
    const props = __props;
    const { formItem } = useFormItem();
    const switchSize = useFormSize();
    const ns = useNamespace("switch");
    const { inputId } = useFormItemInputId(props, {
      formItemContext: formItem
    });
    const switchDisabled = useFormDisabled(computed(() => props.loading));
    const isControlled = ref(props.modelValue !== false);
    const input = ref();
    const core = ref();
    const switchKls = computed(() => [
      ns.b(),
      ns.m(switchSize.value),
      ns.is("disabled", switchDisabled.value),
      ns.is("checked", checked.value)
    ]);
    const labelLeftKls = computed(() => [
      ns.e("label"),
      ns.em("label", "left"),
      ns.is("active", !checked.value)
    ]);
    const labelRightKls = computed(() => [
      ns.e("label"),
      ns.em("label", "right"),
      ns.is("active", checked.value)
    ]);
    const coreStyle = computed(() => ({
      width: addUnit(props.width)
    }));
    watch(() => props.modelValue, () => {
      isControlled.value = true;
    });
    const actualValue = computed(() => {
      return isControlled.value ? props.modelValue : false;
    });
    const checked = computed(() => actualValue.value === props.activeValue);
    if (![props.activeValue, props.inactiveValue].includes(actualValue.value)) {
      emit(UPDATE_MODEL_EVENT, props.inactiveValue);
      emit(CHANGE_EVENT, props.inactiveValue);
      emit(INPUT_EVENT, props.inactiveValue);
    }
    watch(checked, (val) => {
      var _a;
      input.value.checked = val;
      if (props.validateEvent) {
        (_a = formItem == null ? void 0 : formItem.validate) == null ? void 0 : _a.call(formItem, "change").catch((err) => debugWarn());
      }
    });
    const handleChange = () => {
      const val = checked.value ? props.inactiveValue : props.activeValue;
      emit(UPDATE_MODEL_EVENT, val);
      emit(CHANGE_EVENT, val);
      emit(INPUT_EVENT, val);
      nextTick(() => {
        input.value.checked = checked.value;
      });
    };
    const switchValue = () => {
      if (switchDisabled.value)
        return;
      const { beforeChange } = props;
      if (!beforeChange) {
        handleChange();
        return;
      }
      const shouldChange = beforeChange();
      const isPromiseOrBool = [
        isPromise(shouldChange),
        isBoolean(shouldChange)
      ].includes(true);
      if (!isPromiseOrBool) {
        throwError(COMPONENT_NAME$1, "beforeChange must return type `Promise<boolean>` or `boolean`");
      }
      if (isPromise(shouldChange)) {
        shouldChange.then((result) => {
          if (result) {
            handleChange();
          }
        }).catch((e) => {
        });
      } else if (shouldChange) {
        handleChange();
      }
    };
    const focus = () => {
      var _a, _b;
      (_b = (_a = input.value) == null ? void 0 : _a.focus) == null ? void 0 : _b.call(_a);
    };
    expose({
      focus,
      checked
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(unref(switchKls)),
        onClick: withModifiers(switchValue, ["prevent"])
      }, [
        createElementVNode("input", {
          id: unref(inputId),
          ref_key: "input",
          ref: input,
          class: normalizeClass(unref(ns).e("input")),
          type: "checkbox",
          role: "switch",
          "aria-checked": unref(checked),
          "aria-disabled": unref(switchDisabled),
          "aria-label": _ctx.ariaLabel,
          name: _ctx.name,
          "true-value": _ctx.activeValue,
          "false-value": _ctx.inactiveValue,
          disabled: unref(switchDisabled),
          tabindex: _ctx.tabindex,
          onChange: handleChange,
          onKeydown: withKeys(switchValue, ["enter"])
        }, null, 42, ["id", "aria-checked", "aria-disabled", "aria-label", "name", "true-value", "false-value", "disabled", "tabindex", "onKeydown"]),
        !_ctx.inlinePrompt && (_ctx.inactiveIcon || _ctx.inactiveText) ? (openBlock(), createElementBlock("span", {
          key: 0,
          class: normalizeClass(unref(labelLeftKls))
        }, [
          _ctx.inactiveIcon ? (openBlock(), createBlock(unref(ElIcon), { key: 0 }, {
            default: withCtx(() => [
              (openBlock(), createBlock(resolveDynamicComponent(_ctx.inactiveIcon)))
            ]),
            _: 1
          })) : createCommentVNode("v-if", true),
          !_ctx.inactiveIcon && _ctx.inactiveText ? (openBlock(), createElementBlock("span", {
            key: 1,
            "aria-hidden": unref(checked)
          }, toDisplayString(_ctx.inactiveText), 9, ["aria-hidden"])) : createCommentVNode("v-if", true)
        ], 2)) : createCommentVNode("v-if", true),
        createElementVNode("span", {
          ref_key: "core",
          ref: core,
          class: normalizeClass(unref(ns).e("core")),
          style: normalizeStyle(unref(coreStyle))
        }, [
          _ctx.inlinePrompt ? (openBlock(), createElementBlock("div", {
            key: 0,
            class: normalizeClass(unref(ns).e("inner"))
          }, [
            _ctx.activeIcon || _ctx.inactiveIcon ? (openBlock(), createBlock(unref(ElIcon), {
              key: 0,
              class: normalizeClass(unref(ns).is("icon"))
            }, {
              default: withCtx(() => [
                (openBlock(), createBlock(resolveDynamicComponent(unref(checked) ? _ctx.activeIcon : _ctx.inactiveIcon)))
              ]),
              _: 1
            }, 8, ["class"])) : _ctx.activeText || _ctx.inactiveText ? (openBlock(), createElementBlock("span", {
              key: 1,
              class: normalizeClass(unref(ns).is("text")),
              "aria-hidden": !unref(checked)
            }, toDisplayString(unref(checked) ? _ctx.activeText : _ctx.inactiveText), 11, ["aria-hidden"])) : createCommentVNode("v-if", true)
          ], 2)) : createCommentVNode("v-if", true),
          createElementVNode("div", {
            class: normalizeClass(unref(ns).e("action"))
          }, [
            _ctx.loading ? (openBlock(), createBlock(unref(ElIcon), {
              key: 0,
              class: normalizeClass(unref(ns).is("loading"))
            }, {
              default: withCtx(() => [
                createVNode(unref(loading_default))
              ]),
              _: 1
            }, 8, ["class"])) : unref(checked) ? renderSlot(_ctx.$slots, "active-action", { key: 1 }, () => [
              _ctx.activeActionIcon ? (openBlock(), createBlock(unref(ElIcon), { key: 0 }, {
                default: withCtx(() => [
                  (openBlock(), createBlock(resolveDynamicComponent(_ctx.activeActionIcon)))
                ]),
                _: 1
              })) : createCommentVNode("v-if", true)
            ]) : !unref(checked) ? renderSlot(_ctx.$slots, "inactive-action", { key: 2 }, () => [
              _ctx.inactiveActionIcon ? (openBlock(), createBlock(unref(ElIcon), { key: 0 }, {
                default: withCtx(() => [
                  (openBlock(), createBlock(resolveDynamicComponent(_ctx.inactiveActionIcon)))
                ]),
                _: 1
              })) : createCommentVNode("v-if", true)
            ]) : createCommentVNode("v-if", true)
          ], 2)
        ], 6),
        !_ctx.inlinePrompt && (_ctx.activeIcon || _ctx.activeText) ? (openBlock(), createElementBlock("span", {
          key: 1,
          class: normalizeClass(unref(labelRightKls))
        }, [
          _ctx.activeIcon ? (openBlock(), createBlock(unref(ElIcon), { key: 0 }, {
            default: withCtx(() => [
              (openBlock(), createBlock(resolveDynamicComponent(_ctx.activeIcon)))
            ]),
            _: 1
          })) : createCommentVNode("v-if", true),
          !_ctx.activeIcon && _ctx.activeText ? (openBlock(), createElementBlock("span", {
            key: 1,
            "aria-hidden": !unref(checked)
          }, toDisplayString(_ctx.activeText), 9, ["aria-hidden"])) : createCommentVNode("v-if", true)
        ], 2)) : createCommentVNode("v-if", true)
      ], 10, ["onClick"]);
    };
  }
});
var Switch = /* @__PURE__ */ _export_sfc$1(_sfc_main$m, [["__file", "switch.vue"]]);
const ElSwitch = withInstall(Switch);
const getCell = function(event) {
  var _a;
  return (_a = event.target) == null ? void 0 : _a.closest("td");
};
const orderBy = function(array, sortKey, reverse, sortMethod, sortBy) {
  if (!sortKey && !sortMethod && (!sortBy || isArray(sortBy) && !sortBy.length)) {
    return array;
  }
  if (isString(reverse)) {
    reverse = reverse === "descending" ? -1 : 1;
  } else {
    reverse = reverse && reverse < 0 ? -1 : 1;
  }
  const getKey = sortMethod ? null : function(value, index) {
    if (sortBy) {
      if (!isArray(sortBy)) {
        sortBy = [sortBy];
      }
      return sortBy.map((by) => {
        if (isString(by)) {
          return get(value, by);
        } else {
          return by(value, index, array);
        }
      });
    }
    if (sortKey !== "$key") {
      if (isObject(value) && "$value" in value)
        value = value.$value;
    }
    return [isObject(value) ? get(value, sortKey) : value];
  };
  const compare = function(a, b) {
    if (sortMethod) {
      return sortMethod(a.value, b.value);
    }
    for (let i = 0, len = a.key.length; i < len; i++) {
      if (a.key[i] < b.key[i]) {
        return -1;
      }
      if (a.key[i] > b.key[i]) {
        return 1;
      }
    }
    return 0;
  };
  return array.map((value, index) => {
    return {
      value,
      index,
      key: getKey ? getKey(value, index) : null
    };
  }).sort((a, b) => {
    let order = compare(a, b);
    if (!order) {
      order = a.index - b.index;
    }
    return order * +reverse;
  }).map((item) => item.value);
};
const getColumnById = function(table, columnId) {
  let column = null;
  table.columns.forEach((item) => {
    if (item.id === columnId) {
      column = item;
    }
  });
  return column;
};
const getColumnByKey = function(table, columnKey) {
  let column = null;
  for (let i = 0; i < table.columns.length; i++) {
    const item = table.columns[i];
    if (item.columnKey === columnKey) {
      column = item;
      break;
    }
  }
  if (!column)
    throwError("ElTable", `No column matching with column-key: ${columnKey}`);
  return column;
};
const getColumnByCell = function(table, cell, namespace) {
  const matches = (cell.className || "").match(new RegExp(`${namespace}-table_[^\\s]+`, "gm"));
  if (matches) {
    return getColumnById(table, matches[0]);
  }
  return null;
};
const getRowIdentity = (row, rowKey) => {
  if (!row)
    throw new Error("Row is required when get row identity");
  if (isString(rowKey)) {
    if (!rowKey.includes(".")) {
      return `${row[rowKey]}`;
    }
    const key = rowKey.split(".");
    let current = row;
    for (const element of key) {
      current = current[element];
    }
    return `${current}`;
  } else if (isFunction$1(rowKey)) {
    return rowKey.call(null, row);
  }
};
const getKeysMap = function(array, rowKey, flatten = false, childrenKey = "children") {
  const data2 = array || [];
  const arrayMap = {};
  data2.forEach((row, index) => {
    arrayMap[getRowIdentity(row, rowKey)] = { row, index };
    if (flatten) {
      const children = row[childrenKey];
      if (isArray(children)) {
        Object.assign(arrayMap, getKeysMap(children, rowKey, true, childrenKey));
      }
    }
  });
  return arrayMap;
};
function parseWidth(width) {
  if (width === "")
    return width;
  if (!isUndefined(width)) {
    width = Number.parseInt(width, 10);
    if (Number.isNaN(width)) {
      width = "";
    }
  }
  return width;
}
function parseMinWidth(minWidth) {
  if (minWidth === "")
    return minWidth;
  if (!isUndefined(minWidth)) {
    minWidth = parseWidth(minWidth);
    if (Number.isNaN(minWidth)) {
      minWidth = 80;
    }
  }
  return minWidth;
}
function toggleRowStatus(statusArr, row, newVal, tableTreeProps, selectable, rowIndex) {
  let _rowIndex = rowIndex != null ? rowIndex : 0;
  let changed = false;
  const index = statusArr.indexOf(row);
  const included = index !== -1;
  const isRowSelectable = selectable == null ? void 0 : selectable.call(null, row, _rowIndex);
  const toggleStatus = (type) => {
    if (type === "add") {
      statusArr.push(row);
    } else {
      statusArr.splice(index, 1);
    }
    changed = true;
  };
  const getChildrenCount = (row2) => {
    let count = 0;
    const children = (tableTreeProps == null ? void 0 : tableTreeProps.children) && row2[tableTreeProps.children];
    if (children && isArray(children)) {
      count += children.length;
      children.forEach((item) => {
        count += getChildrenCount(item);
      });
    }
    return count;
  };
  if (!selectable || isRowSelectable) {
    if (isBoolean(newVal)) {
      if (newVal && !included) {
        toggleStatus("add");
      } else if (!newVal && included) {
        toggleStatus("remove");
      }
    } else {
      included ? toggleStatus("remove") : toggleStatus("add");
    }
  }
  if (!(tableTreeProps == null ? void 0 : tableTreeProps.checkStrictly) && (tableTreeProps == null ? void 0 : tableTreeProps.children) && isArray(row[tableTreeProps.children])) {
    row[tableTreeProps.children].forEach((item) => {
      const childChanged = toggleRowStatus(statusArr, item, newVal != null ? newVal : !included, tableTreeProps, selectable, _rowIndex + 1);
      _rowIndex += getChildrenCount(item) + 1;
      if (childChanged) {
        changed = childChanged;
      }
    });
  }
  return changed;
}
function walkTreeNode(root2, cb, childrenKey = "children", lazyKey = "hasChildren") {
  const isNil2 = (array) => !(isArray(array) && array.length);
  function _walker(parent, children, level) {
    cb(parent, children, level);
    children.forEach((item) => {
      if (item[lazyKey]) {
        cb(item, null, level + 1);
        return;
      }
      const children2 = item[childrenKey];
      if (!isNil2(children2)) {
        _walker(item, children2, level + 1);
      }
    });
  }
  root2.forEach((item) => {
    if (item[lazyKey]) {
      cb(item, null, 0);
      return;
    }
    const children = item[childrenKey];
    if (!isNil2(children)) {
      _walker(item, children, 0);
    }
  });
}
const getTableOverflowTooltipProps = (props, innerText, row, column) => {
  const popperOptions = {
    strategy: "fixed",
    ...props.popperOptions
  };
  const tooltipFormatterContent = isFunction$1(column.tooltipFormatter) ? column.tooltipFormatter({
    row,
    column,
    cellValue: getProp(row, column.property).value
  }) : void 0;
  if (isVNode(tooltipFormatterContent)) {
    return {
      slotContent: tooltipFormatterContent,
      content: null,
      ...props,
      popperOptions
    };
  }
  return {
    slotContent: null,
    content: tooltipFormatterContent != null ? tooltipFormatterContent : innerText,
    ...props,
    popperOptions
  };
};
let removePopper = null;
function createTablePopper(props, popperContent, row, column, trigger, table) {
  const tableOverflowTooltipProps = getTableOverflowTooltipProps(props, popperContent, row, column);
  const mergedProps = {
    ...tableOverflowTooltipProps,
    slotContent: void 0
  };
  if ((removePopper == null ? void 0 : removePopper.trigger) === trigger) {
    const comp = removePopper.vm.component;
    merge(comp.props, mergedProps);
    if (tableOverflowTooltipProps.slotContent) {
      comp.slots.content = () => [tableOverflowTooltipProps.slotContent];
    }
    return;
  }
  removePopper == null ? void 0 : removePopper();
  const parentNode = table == null ? void 0 : table.refs.tableWrapper;
  const ns = parentNode == null ? void 0 : parentNode.dataset.prefix;
  const vm = createVNode(ElTooltip, {
    virtualTriggering: true,
    virtualRef: trigger,
    appendTo: parentNode,
    placement: "top",
    transition: "none",
    offset: 0,
    hideAfter: 0,
    ...mergedProps
  }, tableOverflowTooltipProps.slotContent ? {
    content: () => tableOverflowTooltipProps.slotContent
  } : void 0);
  vm.appContext = { ...table.appContext, ...table };
  const container = (void 0).createElement("div");
  render$1(vm, container);
  vm.component.exposed.onOpen();
  const scrollContainer = parentNode == null ? void 0 : parentNode.querySelector(`.${ns}-scrollbar__wrap`);
  removePopper = () => {
    render$1(null, container);
    scrollContainer == null ? void 0 : scrollContainer.removeEventListener("scroll", removePopper);
    removePopper = null;
  };
  removePopper.trigger = trigger;
  removePopper.vm = vm;
  scrollContainer == null ? void 0 : scrollContainer.addEventListener("scroll", removePopper);
}
function getCurrentColumns(column) {
  if (column.children) {
    return flatMap(column.children, getCurrentColumns);
  } else {
    return [column];
  }
}
function getColSpan(colSpan, column) {
  return colSpan + column.colSpan;
}
const isFixedColumn = (index, fixed, store, realColumns) => {
  let start = 0;
  let after = index;
  const columns = store.states.columns.value;
  if (realColumns) {
    const curColumns = getCurrentColumns(realColumns[index]);
    const preColumns = columns.slice(0, columns.indexOf(curColumns[0]));
    start = preColumns.reduce(getColSpan, 0);
    after = start + curColumns.reduce(getColSpan, 0) - 1;
  } else {
    start = index;
  }
  let fixedLayout;
  switch (fixed) {
    case "left":
      if (after < store.states.fixedLeafColumnsLength.value) {
        fixedLayout = "left";
      }
      break;
    case "right":
      if (start >= columns.length - store.states.rightFixedLeafColumnsLength.value) {
        fixedLayout = "right";
      }
      break;
    default:
      if (after < store.states.fixedLeafColumnsLength.value) {
        fixedLayout = "left";
      } else if (start >= columns.length - store.states.rightFixedLeafColumnsLength.value) {
        fixedLayout = "right";
      }
  }
  return fixedLayout ? {
    direction: fixedLayout,
    start,
    after
  } : {};
};
const getFixedColumnsClass = (namespace, index, fixed, store, realColumns, offset = 0) => {
  const classes2 = [];
  const { direction, start, after } = isFixedColumn(index, fixed, store, realColumns);
  if (direction) {
    const isLeft = direction === "left";
    classes2.push(`${namespace}-fixed-column--${direction}`);
    if (isLeft && after + offset === store.states.fixedLeafColumnsLength.value - 1) {
      classes2.push("is-last-column");
    } else if (!isLeft && start - offset === store.states.columns.value.length - store.states.rightFixedLeafColumnsLength.value) {
      classes2.push("is-first-column");
    }
  }
  return classes2;
};
function getOffset(offset, column) {
  return offset + (isNull(column.realWidth) || Number.isNaN(column.realWidth) ? Number(column.width) : column.realWidth);
}
const getFixedColumnOffset = (index, fixed, store, realColumns) => {
  const {
    direction,
    start = 0,
    after = 0
  } = isFixedColumn(index, fixed, store, realColumns);
  if (!direction) {
    return;
  }
  const styles = {};
  const isLeft = direction === "left";
  const columns = store.states.columns.value;
  if (isLeft) {
    styles.left = columns.slice(0, start).reduce(getOffset, 0);
  } else {
    styles.right = columns.slice(after + 1).reverse().reduce(getOffset, 0);
  }
  return styles;
};
const ensurePosition = (style2, key) => {
  if (!style2)
    return;
  if (!Number.isNaN(style2[key])) {
    style2[key] = `${style2[key]}px`;
  }
};
function useExpand(watcherData) {
  const instance = getCurrentInstance();
  const defaultExpandAll = ref(false);
  const expandRows = ref([]);
  const updateExpandRows = () => {
    const data2 = watcherData.data.value || [];
    const rowKey = watcherData.rowKey.value;
    if (defaultExpandAll.value) {
      expandRows.value = data2.slice();
    } else if (rowKey) {
      const expandRowsMap = getKeysMap(expandRows.value, rowKey);
      expandRows.value = data2.reduce((prev, row) => {
        const rowId = getRowIdentity(row, rowKey);
        const rowInfo = expandRowsMap[rowId];
        if (rowInfo) {
          prev.push(row);
        }
        return prev;
      }, []);
    } else {
      expandRows.value = [];
    }
  };
  const toggleRowExpansion = (row, expanded) => {
    const changed = toggleRowStatus(expandRows.value, row, expanded);
    if (changed) {
      instance.emit("expand-change", row, expandRows.value.slice());
    }
  };
  const setExpandRowKeys = (rowKeys) => {
    instance.store.assertRowKey();
    const data2 = watcherData.data.value || [];
    const rowKey = watcherData.rowKey.value;
    const keysMap = getKeysMap(data2, rowKey);
    expandRows.value = rowKeys.reduce((prev, cur) => {
      const info = keysMap[cur];
      if (info) {
        prev.push(info.row);
      }
      return prev;
    }, []);
  };
  const isRowExpanded = (row) => {
    const rowKey = watcherData.rowKey.value;
    if (rowKey) {
      const expandMap = getKeysMap(expandRows.value, rowKey);
      return !!expandMap[getRowIdentity(row, rowKey)];
    }
    return expandRows.value.includes(row);
  };
  return {
    updateExpandRows,
    toggleRowExpansion,
    setExpandRowKeys,
    isRowExpanded,
    states: {
      expandRows,
      defaultExpandAll
    }
  };
}
function useCurrent(watcherData) {
  const instance = getCurrentInstance();
  const _currentRowKey = ref(null);
  const currentRow = ref(null);
  const setCurrentRowKey = (key) => {
    instance.store.assertRowKey();
    _currentRowKey.value = key;
    setCurrentRowByKey(key);
  };
  const restoreCurrentRowKey = () => {
    _currentRowKey.value = null;
  };
  const setCurrentRowByKey = (key) => {
    const { data: data2, rowKey } = watcherData;
    let _currentRow = null;
    if (rowKey.value) {
      _currentRow = (unref(data2) || []).find((item) => getRowIdentity(item, rowKey.value) === key);
    }
    currentRow.value = _currentRow;
    instance.emit("current-change", currentRow.value, null);
  };
  const updateCurrentRow = (_currentRow) => {
    const oldCurrentRow = currentRow.value;
    if (_currentRow && _currentRow !== oldCurrentRow) {
      currentRow.value = _currentRow;
      instance.emit("current-change", currentRow.value, oldCurrentRow);
      return;
    }
    if (!_currentRow && oldCurrentRow) {
      currentRow.value = null;
      instance.emit("current-change", null, oldCurrentRow);
    }
  };
  const updateCurrentRowData = () => {
    const rowKey = watcherData.rowKey.value;
    const data2 = watcherData.data.value || [];
    const oldCurrentRow = currentRow.value;
    if (!data2.includes(oldCurrentRow) && oldCurrentRow) {
      if (rowKey) {
        const currentRowKey = getRowIdentity(oldCurrentRow, rowKey);
        setCurrentRowByKey(currentRowKey);
      } else {
        currentRow.value = null;
      }
      if (isNull(currentRow.value)) {
        instance.emit("current-change", null, oldCurrentRow);
      }
    } else if (_currentRowKey.value) {
      setCurrentRowByKey(_currentRowKey.value);
      restoreCurrentRowKey();
    }
  };
  return {
    setCurrentRowKey,
    restoreCurrentRowKey,
    setCurrentRowByKey,
    updateCurrentRow,
    updateCurrentRowData,
    states: {
      _currentRowKey,
      currentRow
    }
  };
}
function useTree(watcherData) {
  const expandRowKeys = ref([]);
  const treeData = ref({});
  const indent = ref(16);
  const lazy = ref(false);
  const lazyTreeNodeMap = ref({});
  const lazyColumnIdentifier = ref("hasChildren");
  const childrenColumnName = ref("children");
  const checkStrictly = ref(false);
  const instance = getCurrentInstance();
  const normalizedData = computed(() => {
    if (!watcherData.rowKey.value)
      return {};
    const data2 = watcherData.data.value || [];
    return normalize(data2);
  });
  const normalizedLazyNode = computed(() => {
    const rowKey = watcherData.rowKey.value;
    const keys = Object.keys(lazyTreeNodeMap.value);
    const res = {};
    if (!keys.length)
      return res;
    keys.forEach((key) => {
      if (lazyTreeNodeMap.value[key].length) {
        const item = { children: [] };
        lazyTreeNodeMap.value[key].forEach((row) => {
          const currentRowKey = getRowIdentity(row, rowKey);
          item.children.push(currentRowKey);
          if (row[lazyColumnIdentifier.value] && !res[currentRowKey]) {
            res[currentRowKey] = { children: [] };
          }
        });
        res[key] = item;
      }
    });
    return res;
  });
  const normalize = (data2) => {
    const rowKey = watcherData.rowKey.value;
    const res = {};
    walkTreeNode(data2, (parent, children, level) => {
      const parentId = getRowIdentity(parent, rowKey);
      if (isArray(children)) {
        res[parentId] = {
          children: children.map((row) => getRowIdentity(row, rowKey)),
          level
        };
      } else if (lazy.value) {
        res[parentId] = {
          children: [],
          lazy: true,
          level
        };
      }
    }, childrenColumnName.value, lazyColumnIdentifier.value);
    return res;
  };
  let isInitTree = true;
  const updateTreeData = (ifChangeExpandRowKeys = false) => {
    var _a, _b;
    const nested = normalizedData.value;
    const normalizedLazyNode_ = normalizedLazyNode.value;
    const keys = Object.keys(nested);
    const newTreeData = {};
    const ifExpandAll = ((_a = instance.store) == null ? void 0 : _a.states.defaultExpandAll.value) && isInitTree;
    isInitTree = false;
    if (keys.length) {
      const oldTreeData = unref(treeData);
      const rootLazyRowKeys = [];
      const getExpanded = (oldValue, key) => {
        if (ifChangeExpandRowKeys) {
          if (expandRowKeys.value.length) {
            return ifExpandAll || expandRowKeys.value.includes(key);
          } else {
            return !!(ifExpandAll || (oldValue == null ? void 0 : oldValue.expanded));
          }
        } else {
          const included = ifExpandAll || expandRowKeys.value && expandRowKeys.value.includes(key);
          return !!((oldValue == null ? void 0 : oldValue.expanded) || included);
        }
      };
      keys.forEach((key) => {
        const oldValue = oldTreeData[key];
        const newValue = { ...nested[key] };
        newValue.expanded = getExpanded(oldValue, key);
        if (newValue.lazy) {
          const { loaded = false, loading = false } = oldValue || {};
          newValue.loaded = !!loaded;
          newValue.loading = !!loading;
          rootLazyRowKeys.push(key);
        }
        newTreeData[key] = newValue;
      });
      const lazyKeys = Object.keys(normalizedLazyNode_);
      if (lazy.value && lazyKeys.length && rootLazyRowKeys.length) {
        lazyKeys.forEach((key) => {
          const oldValue = oldTreeData[key];
          const lazyNodeChildren = normalizedLazyNode_[key].children;
          if (rootLazyRowKeys.includes(key)) {
            if (newTreeData[key].children.length !== 0) {
              throw new Error("[ElTable]children must be an empty array.");
            }
            newTreeData[key].children = lazyNodeChildren;
          } else {
            const { loaded = false, loading = false } = oldValue || {};
            newTreeData[key] = {
              lazy: true,
              loaded: !!loaded,
              loading: !!loading,
              expanded: getExpanded(oldValue, key),
              children: lazyNodeChildren,
              level: ""
            };
          }
        });
      }
    }
    treeData.value = newTreeData;
    (_b = instance.store) == null ? void 0 : _b.updateTableScrollY();
  };
  watch(() => expandRowKeys.value, () => {
    updateTreeData(true);
  });
  watch(() => normalizedData.value, () => {
    updateTreeData();
  });
  watch(() => normalizedLazyNode.value, () => {
    updateTreeData();
  });
  const updateTreeExpandKeys = (value) => {
    expandRowKeys.value = value;
    updateTreeData();
  };
  const isUseLazy = (data2) => {
    return lazy.value && data2 && "loaded" in data2 && !data2.loaded;
  };
  const toggleTreeExpansion = (row, expanded) => {
    instance.store.assertRowKey();
    const rowKey = watcherData.rowKey.value;
    const id = getRowIdentity(row, rowKey);
    const data2 = id && treeData.value[id];
    if (id && data2 && "expanded" in data2) {
      const oldExpanded = data2.expanded;
      expanded = isUndefined(expanded) ? !data2.expanded : expanded;
      treeData.value[id].expanded = expanded;
      if (oldExpanded !== expanded) {
        instance.emit("expand-change", row, expanded);
      }
      isUseLazy(data2) && loadData(row, id, data2);
      instance.store.updateTableScrollY();
    }
  };
  const loadOrToggle = (row) => {
    instance.store.assertRowKey();
    const rowKey = watcherData.rowKey.value;
    const id = getRowIdentity(row, rowKey);
    const data2 = treeData.value[id];
    if (isUseLazy(data2)) {
      loadData(row, id, data2);
    } else {
      toggleTreeExpansion(row, void 0);
    }
  };
  const loadData = (row, key, treeNode) => {
    const { load } = instance.props;
    if (load && !treeData.value[key].loaded) {
      treeData.value[key].loading = true;
      load(row, treeNode, (data2) => {
        if (!isArray(data2)) {
          throw new TypeError("[ElTable] data must be an array");
        }
        treeData.value[key].loading = false;
        treeData.value[key].loaded = true;
        treeData.value[key].expanded = true;
        if (data2.length) {
          lazyTreeNodeMap.value[key] = data2;
        }
        instance.emit("expand-change", row, true);
      });
    }
  };
  const updateKeyChildren = (key, data2) => {
    const { lazy: lazy2, rowKey } = instance.props;
    if (!lazy2)
      return;
    if (!rowKey)
      throw new Error("[Table] rowKey is required in updateKeyChild");
    if (lazyTreeNodeMap.value[key]) {
      lazyTreeNodeMap.value[key] = data2;
    }
  };
  return {
    loadData,
    loadOrToggle,
    toggleTreeExpansion,
    updateTreeExpandKeys,
    updateTreeData,
    updateKeyChildren,
    normalize,
    states: {
      expandRowKeys,
      treeData,
      indent,
      lazy,
      lazyTreeNodeMap,
      lazyColumnIdentifier,
      childrenColumnName,
      checkStrictly
    }
  };
}
const sortData = (data2, states) => {
  const sortingColumn = states.sortingColumn;
  if (!sortingColumn || isString(sortingColumn.sortable)) {
    return data2;
  }
  return orderBy(data2, states.sortProp, states.sortOrder, sortingColumn.sortMethod, sortingColumn.sortBy);
};
const doFlattenColumns = (columns) => {
  const result = [];
  columns.forEach((column) => {
    if (column.children && column.children.length > 0) {
      result.push.apply(result, doFlattenColumns(column.children));
    } else {
      result.push(column);
    }
  });
  return result;
};
function useWatcher$1() {
  var _a;
  const instance = getCurrentInstance();
  const { size: tableSize } = toRefs((_a = instance.proxy) == null ? void 0 : _a.$props);
  const rowKey = ref(null);
  const data2 = ref([]);
  const _data = ref([]);
  const isComplex = ref(false);
  const _columns = ref([]);
  const originColumns = ref([]);
  const columns = ref([]);
  const fixedColumns = ref([]);
  const rightFixedColumns = ref([]);
  const leafColumns = ref([]);
  const fixedLeafColumns = ref([]);
  const rightFixedLeafColumns = ref([]);
  const updateOrderFns = [];
  const leafColumnsLength = ref(0);
  const fixedLeafColumnsLength = ref(0);
  const rightFixedLeafColumnsLength = ref(0);
  const isAllSelected = ref(false);
  const selection = ref([]);
  const reserveSelection = ref(false);
  const selectOnIndeterminate = ref(false);
  const selectable = ref(null);
  const filters = ref({});
  const filteredData = ref(null);
  const sortingColumn = ref(null);
  const sortProp = ref(null);
  const sortOrder = ref(null);
  const hoverRow = ref(null);
  const selectedMap = computed(() => {
    return rowKey.value ? getKeysMap(selection.value, rowKey.value) : void 0;
  });
  watch(data2, () => {
    var _a2;
    if (instance.state) {
      scheduleLayout(false);
      const needUpdateFixed = instance.props.tableLayout === "auto";
      if (needUpdateFixed) {
        (_a2 = instance.refs.tableHeaderRef) == null ? void 0 : _a2.updateFixedColumnStyle();
      }
    }
  }, {
    deep: true
  });
  const assertRowKey = () => {
    if (!rowKey.value)
      throw new Error("[ElTable] prop row-key is required");
  };
  const updateChildFixed = (column) => {
    var _a2;
    (_a2 = column.children) == null ? void 0 : _a2.forEach((childColumn) => {
      childColumn.fixed = column.fixed;
      updateChildFixed(childColumn);
    });
  };
  const updateColumns = () => {
    var _a2, _b;
    _columns.value.forEach((column) => {
      updateChildFixed(column);
    });
    fixedColumns.value = _columns.value.filter((column) => column.type !== "selection" && [true, "left"].includes(column.fixed));
    let selectColFixLeft;
    if (((_b = (_a2 = _columns.value) == null ? void 0 : _a2[0]) == null ? void 0 : _b.type) === "selection") {
      const selectColumn = _columns.value[0];
      selectColFixLeft = [true, "left"].includes(selectColumn.fixed) || fixedColumns.value.length && selectColumn.fixed !== "right";
      if (selectColFixLeft) {
        fixedColumns.value.unshift(selectColumn);
      }
    }
    rightFixedColumns.value = _columns.value.filter((column) => column.fixed === "right");
    const notFixedColumns = _columns.value.filter((column) => (selectColFixLeft ? column.type !== "selection" : true) && !column.fixed);
    originColumns.value = [].concat(fixedColumns.value).concat(notFixedColumns).concat(rightFixedColumns.value);
    const leafColumns2 = doFlattenColumns(notFixedColumns);
    const fixedLeafColumns2 = doFlattenColumns(fixedColumns.value);
    const rightFixedLeafColumns2 = doFlattenColumns(rightFixedColumns.value);
    leafColumnsLength.value = leafColumns2.length;
    fixedLeafColumnsLength.value = fixedLeafColumns2.length;
    rightFixedLeafColumnsLength.value = rightFixedLeafColumns2.length;
    columns.value = [].concat(fixedLeafColumns2).concat(leafColumns2).concat(rightFixedLeafColumns2);
    isComplex.value = fixedColumns.value.length > 0 || rightFixedColumns.value.length > 0;
  };
  const scheduleLayout = (needUpdateColumns, immediate = false) => {
    if (needUpdateColumns) {
      updateColumns();
    }
    if (immediate) {
      instance.state.doLayout();
    } else {
      instance.state.debouncedUpdateLayout();
    }
  };
  const isSelected = (row) => {
    if (selectedMap.value) {
      return !!selectedMap.value[getRowIdentity(row, rowKey.value)];
    } else {
      return selection.value.includes(row);
    }
  };
  const clearSelection = () => {
    isAllSelected.value = false;
    const oldSelection = selection.value;
    selection.value = [];
    if (oldSelection.length) {
      instance.emit("selection-change", []);
    }
  };
  const cleanSelection = () => {
    var _a2, _b;
    let deleted;
    if (rowKey.value) {
      deleted = [];
      const childrenKey = (_b = (_a2 = instance == null ? void 0 : instance.store) == null ? void 0 : _a2.states) == null ? void 0 : _b.childrenColumnName.value;
      const dataMap = getKeysMap(data2.value, rowKey.value, true, childrenKey);
      for (const key in selectedMap.value) {
        if (hasOwn(selectedMap.value, key) && !dataMap[key]) {
          deleted.push(selectedMap.value[key].row);
        }
      }
    } else {
      deleted = selection.value.filter((item) => !data2.value.includes(item));
    }
    if (deleted.length) {
      const newSelection = selection.value.filter((item) => !deleted.includes(item));
      selection.value = newSelection;
      instance.emit("selection-change", newSelection.slice());
    }
  };
  const getSelectionRows = () => {
    return (selection.value || []).slice();
  };
  const toggleRowSelection = (row, selected, emitChange = true, ignoreSelectable = false) => {
    var _a2, _b, _c, _d;
    const treeProps = {
      children: (_b = (_a2 = instance == null ? void 0 : instance.store) == null ? void 0 : _a2.states) == null ? void 0 : _b.childrenColumnName.value,
      checkStrictly: (_d = (_c = instance == null ? void 0 : instance.store) == null ? void 0 : _c.states) == null ? void 0 : _d.checkStrictly.value
    };
    const changed = toggleRowStatus(selection.value, row, selected, treeProps, ignoreSelectable ? void 0 : selectable.value, data2.value.indexOf(row));
    if (changed) {
      const newSelection = (selection.value || []).slice();
      if (emitChange) {
        instance.emit("select", newSelection, row);
      }
      instance.emit("selection-change", newSelection);
    }
  };
  const _toggleAllSelection = () => {
    var _a2, _b;
    const value = selectOnIndeterminate.value ? !isAllSelected.value : !(isAllSelected.value || selection.value.length);
    isAllSelected.value = value;
    let selectionChanged = false;
    let childrenCount = 0;
    const rowKey2 = (_b = (_a2 = instance == null ? void 0 : instance.store) == null ? void 0 : _a2.states) == null ? void 0 : _b.rowKey.value;
    const { childrenColumnName } = instance.store.states;
    const treeProps = {
      children: childrenColumnName.value,
      checkStrictly: false
    };
    data2.value.forEach((row, index) => {
      const rowIndex = index + childrenCount;
      if (toggleRowStatus(selection.value, row, value, treeProps, selectable.value, rowIndex)) {
        selectionChanged = true;
      }
      childrenCount += getChildrenCount(getRowIdentity(row, rowKey2));
    });
    if (selectionChanged) {
      instance.emit("selection-change", selection.value ? selection.value.slice() : []);
    }
    instance.emit("select-all", (selection.value || []).slice());
  };
  const updateSelectionByRowKey = () => {
    data2.value.forEach((row) => {
      const rowId = getRowIdentity(row, rowKey.value);
      const rowInfo = selectedMap.value[rowId];
      if (rowInfo) {
        selection.value[rowInfo.index] = row;
      }
    });
  };
  const updateAllSelected = () => {
    var _a2;
    if (((_a2 = data2.value) == null ? void 0 : _a2.length) === 0) {
      isAllSelected.value = false;
      return;
    }
    const { childrenColumnName } = instance.store.states;
    let rowIndex = 0;
    let selectedCount = 0;
    const checkSelectedStatus = (data22) => {
      var _a3;
      for (const row of data22) {
        const isRowSelectable = selectable.value && selectable.value.call(null, row, rowIndex);
        if (!isSelected(row)) {
          if (!selectable.value || isRowSelectable) {
            return false;
          }
        } else {
          selectedCount++;
        }
        rowIndex++;
        if (((_a3 = row[childrenColumnName.value]) == null ? void 0 : _a3.length) && !checkSelectedStatus(row[childrenColumnName.value])) {
          return false;
        }
      }
      return true;
    };
    const isAllSelected_ = checkSelectedStatus(data2.value || []);
    isAllSelected.value = selectedCount === 0 ? false : isAllSelected_;
  };
  const getChildrenCount = (rowKey2) => {
    var _a2;
    if (!instance || !instance.store)
      return 0;
    const { treeData } = instance.store.states;
    let count = 0;
    const children = (_a2 = treeData.value[rowKey2]) == null ? void 0 : _a2.children;
    if (children) {
      count += children.length;
      children.forEach((childKey) => {
        count += getChildrenCount(childKey);
      });
    }
    return count;
  };
  const updateFilters = (columns2, values) => {
    if (!isArray(columns2)) {
      columns2 = [columns2];
    }
    const filters_ = {};
    columns2.forEach((col) => {
      filters.value[col.id] = values;
      filters_[col.columnKey || col.id] = values;
    });
    return filters_;
  };
  const updateSort = (column, prop, order) => {
    if (sortingColumn.value && sortingColumn.value !== column) {
      sortingColumn.value.order = null;
    }
    sortingColumn.value = column;
    sortProp.value = prop;
    sortOrder.value = order;
  };
  const execFilter = () => {
    let sourceData = unref(_data);
    Object.keys(filters.value).forEach((columnId) => {
      const values = filters.value[columnId];
      if (!values || values.length === 0)
        return;
      const column = getColumnById({
        columns: columns.value
      }, columnId);
      if (column && column.filterMethod) {
        sourceData = sourceData.filter((row) => {
          return values.some((value) => column.filterMethod.call(null, value, row, column));
        });
      }
    });
    filteredData.value = sourceData;
  };
  const execSort = () => {
    data2.value = sortData(filteredData.value, {
      sortingColumn: sortingColumn.value,
      sortProp: sortProp.value,
      sortOrder: sortOrder.value
    });
  };
  const execQuery = (ignore = void 0) => {
    if (!(ignore && ignore.filter)) {
      execFilter();
    }
    execSort();
  };
  const clearFilter = (columnKeys) => {
    const { tableHeaderRef } = instance.refs;
    if (!tableHeaderRef)
      return;
    const panels = Object.assign({}, tableHeaderRef.filterPanels);
    const keys = Object.keys(panels);
    if (!keys.length)
      return;
    if (isString(columnKeys)) {
      columnKeys = [columnKeys];
    }
    if (isArray(columnKeys)) {
      const columns_ = columnKeys.map((key) => getColumnByKey({
        columns: columns.value
      }, key));
      keys.forEach((key) => {
        const column = columns_.find((col) => col.id === key);
        if (column) {
          column.filteredValue = [];
        }
      });
      instance.store.commit("filterChange", {
        column: columns_,
        values: [],
        silent: true,
        multi: true
      });
    } else {
      keys.forEach((key) => {
        const column = columns.value.find((col) => col.id === key);
        if (column) {
          column.filteredValue = [];
        }
      });
      filters.value = {};
      instance.store.commit("filterChange", {
        column: {},
        values: [],
        silent: true
      });
    }
  };
  const clearSort = () => {
    if (!sortingColumn.value)
      return;
    updateSort(null, null, null);
    instance.store.commit("changeSortCondition", {
      silent: true
    });
  };
  const {
    setExpandRowKeys,
    toggleRowExpansion,
    updateExpandRows,
    states: expandStates,
    isRowExpanded
  } = useExpand({
    data: data2,
    rowKey
  });
  const {
    updateTreeExpandKeys,
    toggleTreeExpansion,
    updateTreeData,
    updateKeyChildren,
    loadOrToggle,
    states: treeStates
  } = useTree({
    data: data2,
    rowKey
  });
  const {
    updateCurrentRowData,
    updateCurrentRow,
    setCurrentRowKey,
    states: currentData
  } = useCurrent({
    data: data2,
    rowKey
  });
  const setExpandRowKeysAdapter = (val) => {
    setExpandRowKeys(val);
    updateTreeExpandKeys(val);
  };
  const toggleRowExpansionAdapter = (row, expanded) => {
    const hasExpandColumn = columns.value.some(({ type }) => type === "expand");
    if (hasExpandColumn) {
      toggleRowExpansion(row, expanded);
    } else {
      toggleTreeExpansion(row, expanded);
    }
  };
  return {
    assertRowKey,
    updateColumns,
    scheduleLayout,
    isSelected,
    clearSelection,
    cleanSelection,
    getSelectionRows,
    toggleRowSelection,
    _toggleAllSelection,
    toggleAllSelection: null,
    updateSelectionByRowKey,
    updateAllSelected,
    updateFilters,
    updateCurrentRow,
    updateSort,
    execFilter,
    execSort,
    execQuery,
    clearFilter,
    clearSort,
    toggleRowExpansion,
    setExpandRowKeysAdapter,
    setCurrentRowKey,
    toggleRowExpansionAdapter,
    isRowExpanded,
    updateExpandRows,
    updateCurrentRowData,
    loadOrToggle,
    updateTreeData,
    updateKeyChildren,
    states: {
      tableSize,
      rowKey,
      data: data2,
      _data,
      isComplex,
      _columns,
      originColumns,
      columns,
      fixedColumns,
      rightFixedColumns,
      leafColumns,
      fixedLeafColumns,
      rightFixedLeafColumns,
      updateOrderFns,
      leafColumnsLength,
      fixedLeafColumnsLength,
      rightFixedLeafColumnsLength,
      isAllSelected,
      selection,
      reserveSelection,
      selectOnIndeterminate,
      selectable,
      filters,
      filteredData,
      sortingColumn,
      sortProp,
      sortOrder,
      hoverRow,
      ...expandStates,
      ...treeStates,
      ...currentData
    }
  };
}
function replaceColumn(array, column) {
  return array.map((item) => {
    var _a;
    if (item.id === column.id) {
      return column;
    } else if ((_a = item.children) == null ? void 0 : _a.length) {
      item.children = replaceColumn(item.children, column);
    }
    return item;
  });
}
function sortColumn(array) {
  array.forEach((item) => {
    var _a, _b;
    item.no = (_a = item.getColumnIndex) == null ? void 0 : _a.call(item);
    if ((_b = item.children) == null ? void 0 : _b.length) {
      sortColumn(item.children);
    }
  });
  array.sort((cur, pre) => cur.no - pre.no);
}
function useStore() {
  const instance = getCurrentInstance();
  const watcher = useWatcher$1();
  const ns = useNamespace("table");
  const mutations = {
    setData(states, data2) {
      const dataInstanceChanged = unref(states._data) !== data2;
      states.data.value = data2;
      states._data.value = data2;
      instance.store.execQuery();
      instance.store.updateCurrentRowData();
      instance.store.updateExpandRows();
      instance.store.updateTreeData(instance.store.states.defaultExpandAll.value);
      if (unref(states.reserveSelection)) {
        instance.store.assertRowKey();
        instance.store.updateSelectionByRowKey();
      } else {
        if (dataInstanceChanged) {
          instance.store.clearSelection();
        } else {
          instance.store.cleanSelection();
        }
      }
      instance.store.updateAllSelected();
      if (instance.$ready) {
        instance.store.scheduleLayout();
      }
    },
    insertColumn(states, column, parent, updateColumnOrder) {
      const array = unref(states._columns);
      let newColumns = [];
      if (!parent) {
        array.push(column);
        newColumns = array;
      } else {
        if (parent && !parent.children) {
          parent.children = [];
        }
        parent.children.push(column);
        newColumns = replaceColumn(array, parent);
      }
      sortColumn(newColumns);
      states._columns.value = newColumns;
      states.updateOrderFns.push(updateColumnOrder);
      if (column.type === "selection") {
        states.selectable.value = column.selectable;
        states.reserveSelection.value = column.reserveSelection;
      }
      if (instance.$ready) {
        instance.store.updateColumns();
        instance.store.scheduleLayout();
      }
    },
    updateColumnOrder(states, column) {
      var _a;
      const newColumnIndex = (_a = column.getColumnIndex) == null ? void 0 : _a.call(column);
      if (newColumnIndex === column.no)
        return;
      sortColumn(states._columns.value);
      if (instance.$ready) {
        instance.store.updateColumns();
      }
    },
    removeColumn(states, column, parent, updateColumnOrder) {
      const array = unref(states._columns) || [];
      if (parent) {
        parent.children.splice(parent.children.findIndex((item) => item.id === column.id), 1);
        nextTick(() => {
          var _a;
          if (((_a = parent.children) == null ? void 0 : _a.length) === 0) {
            delete parent.children;
          }
        });
        states._columns.value = replaceColumn(array, parent);
      } else {
        const index = array.indexOf(column);
        if (index > -1) {
          array.splice(index, 1);
          states._columns.value = array;
        }
      }
      const updateFnIndex = states.updateOrderFns.indexOf(updateColumnOrder);
      updateFnIndex > -1 && states.updateOrderFns.splice(updateFnIndex, 1);
      if (instance.$ready) {
        instance.store.updateColumns();
        instance.store.scheduleLayout();
      }
    },
    sort(states, options) {
      const { prop, order, init } = options;
      if (prop) {
        const column = unref(states.columns).find((column2) => column2.property === prop);
        if (column) {
          column.order = order;
          instance.store.updateSort(column, prop, order);
          instance.store.commit("changeSortCondition", { init });
        }
      }
    },
    changeSortCondition(states, options) {
      const { sortingColumn, sortProp, sortOrder } = states;
      const columnValue = unref(sortingColumn), propValue = unref(sortProp), orderValue = unref(sortOrder);
      if (isNull(orderValue)) {
        states.sortingColumn.value = null;
        states.sortProp.value = null;
      }
      const ignore = { filter: true };
      instance.store.execQuery(ignore);
      if (!options || !(options.silent || options.init)) {
        instance.emit("sort-change", {
          column: columnValue,
          prop: propValue,
          order: orderValue
        });
      }
      instance.store.updateTableScrollY();
    },
    filterChange(_states, options) {
      const { column, values, silent } = options;
      const newFilters = instance.store.updateFilters(column, values);
      instance.store.execQuery();
      if (!silent) {
        instance.emit("filter-change", newFilters);
      }
      instance.store.updateTableScrollY();
    },
    toggleAllSelection() {
      instance.store.toggleAllSelection();
    },
    rowSelectedChanged(_states, row) {
      instance.store.toggleRowSelection(row);
      instance.store.updateAllSelected();
    },
    setHoverRow(states, row) {
      states.hoverRow.value = row;
    },
    setCurrentRow(_states, row) {
      instance.store.updateCurrentRow(row);
    }
  };
  const commit = function(name, ...args) {
    const mutations2 = instance.store.mutations;
    if (mutations2[name]) {
      mutations2[name].apply(instance, [instance.store.states].concat(args));
    } else {
      throw new Error(`Action not found: ${name}`);
    }
  };
  const updateTableScrollY = function() {
    nextTick(() => instance.layout.updateScrollY.apply(instance.layout));
  };
  return {
    ns,
    ...watcher,
    mutations,
    commit,
    updateTableScrollY
  };
}
const InitialStateMap = {
  rowKey: "rowKey",
  defaultExpandAll: "defaultExpandAll",
  selectOnIndeterminate: "selectOnIndeterminate",
  indent: "indent",
  lazy: "lazy",
  data: "data",
  ["treeProps.hasChildren"]: {
    key: "lazyColumnIdentifier",
    default: "hasChildren"
  },
  ["treeProps.children"]: {
    key: "childrenColumnName",
    default: "children"
  },
  ["treeProps.checkStrictly"]: {
    key: "checkStrictly",
    default: false
  }
};
function createStore(table, props) {
  if (!table) {
    throw new Error("Table is required.");
  }
  const store = useStore();
  store.toggleAllSelection = debounce$1(store._toggleAllSelection, 10);
  Object.keys(InitialStateMap).forEach((key) => {
    handleValue(getArrKeysValue(props, key), key, store);
  });
  proxyTableProps(store, props);
  return store;
}
function proxyTableProps(store, props) {
  Object.keys(InitialStateMap).forEach((key) => {
    watch(() => getArrKeysValue(props, key), (value) => {
      handleValue(value, key, store);
    });
  });
}
function handleValue(value, propsKey, store) {
  let newVal = value;
  let storeKey = InitialStateMap[propsKey];
  if (isObject(InitialStateMap[propsKey])) {
    storeKey = storeKey.key;
    newVal = newVal || InitialStateMap[propsKey].default;
  }
  store.states[storeKey].value = newVal;
}
function getArrKeysValue(props, keys) {
  if (keys.includes(".")) {
    const keyList = keys.split(".");
    let value = props;
    keyList.forEach((key) => {
      value = value[key];
    });
    return value;
  } else {
    return props[keys];
  }
}
class TableLayout {
  constructor(options) {
    this.observers = [];
    this.table = null;
    this.store = null;
    this.columns = [];
    this.fit = true;
    this.showHeader = true;
    this.height = ref(null);
    this.scrollX = ref(false);
    this.scrollY = ref(false);
    this.bodyWidth = ref(null);
    this.fixedWidth = ref(null);
    this.rightFixedWidth = ref(null);
    this.gutterWidth = 0;
    for (const name in options) {
      if (hasOwn(options, name)) {
        if (isRef(this[name])) {
          this[name].value = options[name];
        } else {
          this[name] = options[name];
        }
      }
    }
    if (!this.table) {
      throw new Error("Table is required for Table Layout");
    }
    if (!this.store) {
      throw new Error("Store is required for Table Layout");
    }
  }
  updateScrollY() {
    const height = this.height.value;
    if (isNull(height))
      return false;
    const scrollBarRef = this.table.refs.scrollBarRef;
    if (this.table.vnode.el && (scrollBarRef == null ? void 0 : scrollBarRef.wrapRef)) {
      let scrollY = true;
      const prevScrollY = this.scrollY.value;
      scrollY = scrollBarRef.wrapRef.scrollHeight > scrollBarRef.wrapRef.clientHeight;
      this.scrollY.value = scrollY;
      return prevScrollY !== scrollY;
    }
    return false;
  }
  setHeight(value, prop = "height") {
    return;
  }
  setMaxHeight(value) {
    this.setHeight(value, "max-height");
  }
  getFlattenColumns() {
    const flattenColumns = [];
    const columns = this.table.store.states.columns.value;
    columns.forEach((column) => {
      if (column.isColumnGroup) {
        flattenColumns.push.apply(flattenColumns, column.columns);
      } else {
        flattenColumns.push(column);
      }
    });
    return flattenColumns;
  }
  updateElsHeight() {
    this.updateScrollY();
    this.notifyObservers("scrollable");
  }
  headerDisplayNone(elm) {
    if (!elm)
      return true;
    let headerChild = elm;
    while (headerChild.tagName !== "DIV") {
      if (getComputedStyle(headerChild).display === "none") {
        return true;
      }
      headerChild = headerChild.parentElement;
    }
    return false;
  }
  updateColumnsWidth() {
    return;
  }
  addObserver(observer) {
    this.observers.push(observer);
  }
  removeObserver(observer) {
    const index = this.observers.indexOf(observer);
    if (index !== -1) {
      this.observers.splice(index, 1);
    }
  }
  notifyObservers(event) {
    const observers = this.observers;
    observers.forEach((observer) => {
      var _a, _b;
      switch (event) {
        case "columns":
          (_a = observer.state) == null ? void 0 : _a.onColumnsChange(this);
          break;
        case "scrollable":
          (_b = observer.state) == null ? void 0 : _b.onScrollableChange(this);
          break;
        default:
          throw new Error(`Table Layout don't have event ${event}.`);
      }
    });
  }
}
const { CheckboxGroup: ElCheckboxGroup } = ElCheckbox;
const _sfc_main$l = defineComponent({
  name: "ElTableFilterPanel",
  components: {
    ElCheckbox,
    ElCheckboxGroup,
    ElScrollbar,
    ElTooltip,
    ElIcon,
    ArrowDown: arrow_down_default,
    ArrowUp: arrow_up_default
  },
  directives: { ClickOutside },
  props: {
    placement: {
      type: String,
      default: "bottom-start"
    },
    store: {
      type: Object
    },
    column: {
      type: Object
    },
    upDataColumn: {
      type: Function
    },
    appendTo: useTooltipContentProps.appendTo
  },
  setup(props) {
    const instance = getCurrentInstance();
    const { t } = useLocale();
    const ns = useNamespace("table-filter");
    const parent = instance == null ? void 0 : instance.parent;
    if (!parent.filterPanels.value[props.column.id]) {
      parent.filterPanels.value[props.column.id] = instance;
    }
    const tooltipVisible = ref(false);
    const tooltip = ref(null);
    const filters = computed(() => {
      return props.column && props.column.filters;
    });
    const filterClassName = computed(() => {
      if (props.column.filterClassName) {
        return `${ns.b()} ${props.column.filterClassName}`;
      }
      return ns.b();
    });
    const filterValue = computed({
      get: () => {
        var _a;
        return (((_a = props.column) == null ? void 0 : _a.filteredValue) || [])[0];
      },
      set: (value) => {
        if (filteredValue.value) {
          if (!isPropAbsent(value)) {
            filteredValue.value.splice(0, 1, value);
          } else {
            filteredValue.value.splice(0, 1);
          }
        }
      }
    });
    const filteredValue = computed({
      get() {
        if (props.column) {
          return props.column.filteredValue || [];
        }
        return [];
      },
      set(value) {
        if (props.column) {
          props.upDataColumn("filteredValue", value);
        }
      }
    });
    const multiple = computed(() => {
      if (props.column) {
        return props.column.filterMultiple;
      }
      return true;
    });
    const isActive = (filter) => {
      return filter.value === filterValue.value;
    };
    const hidden = () => {
      tooltipVisible.value = false;
    };
    const showFilterPanel = (e) => {
      e.stopPropagation();
      tooltipVisible.value = !tooltipVisible.value;
    };
    const hideFilterPanel = () => {
      tooltipVisible.value = false;
    };
    const handleConfirm = () => {
      confirmFilter(filteredValue.value);
      hidden();
    };
    const handleReset = () => {
      filteredValue.value = [];
      confirmFilter(filteredValue.value);
      hidden();
    };
    const handleSelect = (_filterValue) => {
      filterValue.value = _filterValue;
      if (!isPropAbsent(_filterValue)) {
        confirmFilter(filteredValue.value);
      } else {
        confirmFilter([]);
      }
      hidden();
    };
    const confirmFilter = (filteredValue2) => {
      props.store.commit("filterChange", {
        column: props.column,
        values: filteredValue2
      });
      props.store.updateAllSelected();
    };
    watch(tooltipVisible, (value) => {
      if (props.column) {
        props.upDataColumn("filterOpened", value);
      }
    }, {
      immediate: true
    });
    const popperPaneRef = computed(() => {
      var _a, _b;
      return (_b = (_a = tooltip.value) == null ? void 0 : _a.popperRef) == null ? void 0 : _b.contentRef;
    });
    return {
      tooltipVisible,
      multiple,
      filterClassName,
      filteredValue,
      filterValue,
      filters,
      handleConfirm,
      handleReset,
      handleSelect,
      isPropAbsent,
      isActive,
      t,
      ns,
      showFilterPanel,
      hideFilterPanel,
      popperPaneRef,
      tooltip
    };
  }
});
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_el_checkbox = resolveComponent("el-checkbox");
  const _component_el_checkbox_group = resolveComponent("el-checkbox-group");
  const _component_el_scrollbar = resolveComponent("el-scrollbar");
  const _component_arrow_up = resolveComponent("arrow-up");
  const _component_arrow_down = resolveComponent("arrow-down");
  const _component_el_icon = resolveComponent("el-icon");
  const _component_el_tooltip = resolveComponent("el-tooltip");
  const _directive_click_outside = resolveDirective("click-outside");
  return openBlock(), createBlock(_component_el_tooltip, {
    ref: "tooltip",
    visible: _ctx.tooltipVisible,
    offset: 0,
    placement: _ctx.placement,
    "show-arrow": false,
    "stop-popper-mouse-event": false,
    teleported: "",
    effect: "light",
    pure: "",
    "popper-class": _ctx.filterClassName,
    persistent: "",
    "append-to": _ctx.appendTo
  }, {
    content: withCtx(() => [
      _ctx.multiple ? (openBlock(), createElementBlock("div", { key: 0 }, [
        createElementVNode("div", {
          class: normalizeClass(_ctx.ns.e("content"))
        }, [
          createVNode(_component_el_scrollbar, {
            "wrap-class": _ctx.ns.e("wrap")
          }, {
            default: withCtx(() => [
              createVNode(_component_el_checkbox_group, {
                modelValue: _ctx.filteredValue,
                "onUpdate:modelValue": ($event) => _ctx.filteredValue = $event,
                class: normalizeClass(_ctx.ns.e("checkbox-group"))
              }, {
                default: withCtx(() => [
                  (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.filters, (filter) => {
                    return openBlock(), createBlock(_component_el_checkbox, {
                      key: filter.value,
                      value: filter.value
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(filter.text), 1)
                      ]),
                      _: 2
                    }, 1032, ["value"]);
                  }), 128))
                ]),
                _: 1
              }, 8, ["modelValue", "onUpdate:modelValue", "class"])
            ]),
            _: 1
          }, 8, ["wrap-class"])
        ], 2),
        createElementVNode("div", {
          class: normalizeClass(_ctx.ns.e("bottom"))
        }, [
          createElementVNode("button", {
            class: normalizeClass({ [_ctx.ns.is("disabled")]: _ctx.filteredValue.length === 0 }),
            disabled: _ctx.filteredValue.length === 0,
            type: "button",
            onClick: _ctx.handleConfirm
          }, toDisplayString(_ctx.t("el.table.confirmFilter")), 11, ["disabled", "onClick"]),
          createElementVNode("button", {
            type: "button",
            onClick: _ctx.handleReset
          }, toDisplayString(_ctx.t("el.table.resetFilter")), 9, ["onClick"])
        ], 2)
      ])) : (openBlock(), createElementBlock("ul", {
        key: 1,
        class: normalizeClass(_ctx.ns.e("list"))
      }, [
        createElementVNode("li", {
          class: normalizeClass([
            _ctx.ns.e("list-item"),
            {
              [_ctx.ns.is("active")]: _ctx.isPropAbsent(_ctx.filterValue)
            }
          ]),
          onClick: ($event) => _ctx.handleSelect(null)
        }, toDisplayString(_ctx.t("el.table.clearFilter")), 11, ["onClick"]),
        (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.filters, (filter) => {
          return openBlock(), createElementBlock("li", {
            key: filter.value,
            class: normalizeClass([_ctx.ns.e("list-item"), _ctx.ns.is("active", _ctx.isActive(filter))]),
            label: filter.value,
            onClick: ($event) => _ctx.handleSelect(filter.value)
          }, toDisplayString(filter.text), 11, ["label", "onClick"]);
        }), 128))
      ], 2))
    ]),
    default: withCtx(() => [
      withDirectives((openBlock(), createElementBlock("span", {
        class: normalizeClass([
          `${_ctx.ns.namespace.value}-table__column-filter-trigger`,
          `${_ctx.ns.namespace.value}-none-outline`
        ]),
        onClick: _ctx.showFilterPanel
      }, [
        createVNode(_component_el_icon, null, {
          default: withCtx(() => [
            renderSlot(_ctx.$slots, "filter-icon", {}, () => [
              _ctx.column.filterOpened ? (openBlock(), createBlock(_component_arrow_up, { key: 0 })) : (openBlock(), createBlock(_component_arrow_down, { key: 1 }))
            ])
          ]),
          _: 3
        })
      ], 10, ["onClick"])), [
        [_directive_click_outside, _ctx.hideFilterPanel, _ctx.popperPaneRef]
      ])
    ]),
    _: 3
  }, 8, ["visible", "placement", "popper-class", "append-to"]);
}
var FilterPanel = /* @__PURE__ */ _export_sfc$1(_sfc_main$l, [["render", _sfc_render$1], ["__file", "filter-panel.vue"]]);
function useLayoutObserver(root2) {
  getCurrentInstance();
  const tableLayout = computed(() => {
    const layout = root2.layout;
    if (!layout) {
      throw new Error("Can not find table layout.");
    }
    return layout;
  });
  const onColumnsChange = (layout) => {
    var _a;
    const cols = ((_a = root2.vnode.el) == null ? void 0 : _a.querySelectorAll("colgroup > col")) || [];
    if (!cols.length)
      return;
    const flattenColumns = layout.getFlattenColumns();
    const columnsMap = {};
    flattenColumns.forEach((column) => {
      columnsMap[column.id] = column;
    });
    for (let i = 0, j = cols.length; i < j; i++) {
      const col = cols[i];
      const name = col.getAttribute("name");
      const column = columnsMap[name];
      if (column) {
        col.setAttribute("width", column.realWidth || column.width);
      }
    }
  };
  const onScrollableChange = (layout) => {
    var _a, _b;
    const cols = ((_a = root2.vnode.el) == null ? void 0 : _a.querySelectorAll("colgroup > col[name=gutter]")) || [];
    for (let i = 0, j = cols.length; i < j; i++) {
      const col = cols[i];
      col.setAttribute("width", layout.scrollY.value ? layout.gutterWidth : "0");
    }
    const ths = ((_b = root2.vnode.el) == null ? void 0 : _b.querySelectorAll("th.gutter")) || [];
    for (let i = 0, j = ths.length; i < j; i++) {
      const th = ths[i];
      th.style.width = layout.scrollY.value ? `${layout.gutterWidth}px` : "0";
      th.style.display = layout.scrollY.value ? "" : "none";
    }
  };
  return {
    tableLayout: tableLayout.value,
    onColumnsChange,
    onScrollableChange
  };
}
const TABLE_INJECTION_KEY = Symbol("ElTable");
function useEvent(props, emit) {
  getCurrentInstance();
  const parent = inject(TABLE_INJECTION_KEY);
  const handleFilterClick = (event) => {
    event.stopPropagation();
    return;
  };
  const handleHeaderClick = (event, column) => {
    if (!column.filters && column.sortable) {
      handleSortClick(event, column, false);
    } else if (column.filterable && !column.sortable) {
      handleFilterClick(event);
    }
    parent == null ? void 0 : parent.emit("header-click", column, event);
  };
  const handleHeaderContextMenu = (event, column) => {
    parent == null ? void 0 : parent.emit("header-contextmenu", column, event);
  };
  const draggingColumn = ref(null);
  const dragging = ref(false);
  ref({});
  const handleMouseDown = (event, column) => {
    return;
  };
  const handleMouseMove = (event, column) => {
    var _a;
    if (column.children && column.children.length > 0)
      return;
    const el = event.target;
    if (!isElement$1(el)) {
      return;
    }
    const target = el == null ? void 0 : el.closest("th");
    if (!column || !column.resizable || !target)
      return;
    if (!dragging.value && props.border) {
      const rect = target.getBoundingClientRect();
      const bodyStyle = (void 0).body.style;
      const isLastTh = ((_a = target.parentNode) == null ? void 0 : _a.lastElementChild) === target;
      const allowDarg = props.allowDragLastColumn || !isLastTh;
      if (rect.width > 12 && rect.right - event.clientX < 8 && allowDarg) {
        bodyStyle.cursor = "col-resize";
        if (hasClass(target, "is-sortable")) {
          target.style.cursor = "col-resize";
        }
        draggingColumn.value = column;
      } else if (!dragging.value) {
        bodyStyle.cursor = "";
        if (hasClass(target, "is-sortable")) {
          target.style.cursor = "pointer";
        }
        draggingColumn.value = null;
      }
    }
  };
  const handleMouseOut = () => {
    return;
  };
  const toggleOrder = ({ order, sortOrders }) => {
    if (order === "")
      return sortOrders[0];
    const index = sortOrders.indexOf(order || null);
    return sortOrders[index > sortOrders.length - 2 ? 0 : index + 1];
  };
  const handleSortClick = (event, column, givenOrder) => {
    var _a;
    event.stopPropagation();
    const order = column.order === givenOrder ? null : givenOrder || toggleOrder(column);
    const target = (_a = event.target) == null ? void 0 : _a.closest("th");
    if (target) {
      if (hasClass(target, "noclick")) {
        removeClass(target, "noclick");
        return;
      }
    }
    if (!column.sortable)
      return;
    const clickTarget = event.currentTarget;
    if (["ascending", "descending"].some((str) => hasClass(clickTarget, str) && !column.sortOrders.includes(str))) {
      return;
    }
    const states = props.store.states;
    let sortProp = states.sortProp.value;
    let sortOrder;
    const sortingColumn = states.sortingColumn.value;
    if (sortingColumn !== column || sortingColumn === column && isNull(sortingColumn.order)) {
      if (sortingColumn) {
        sortingColumn.order = null;
      }
      states.sortingColumn.value = column;
      sortProp = column.property;
    }
    if (!order) {
      sortOrder = column.order = null;
    } else {
      sortOrder = column.order = order;
    }
    states.sortProp.value = sortProp;
    states.sortOrder.value = sortOrder;
    parent == null ? void 0 : parent.store.commit("changeSortCondition");
  };
  return {
    handleHeaderClick,
    handleHeaderContextMenu,
    handleMouseDown,
    handleMouseMove,
    handleMouseOut,
    handleSortClick,
    handleFilterClick
  };
}
function useStyle$2(props) {
  const parent = inject(TABLE_INJECTION_KEY);
  const ns = useNamespace("table");
  const getHeaderRowStyle = (rowIndex) => {
    const headerRowStyle = parent == null ? void 0 : parent.props.headerRowStyle;
    if (isFunction$1(headerRowStyle)) {
      return headerRowStyle.call(null, { rowIndex });
    }
    return headerRowStyle;
  };
  const getHeaderRowClass = (rowIndex) => {
    const classes2 = [];
    const headerRowClassName = parent == null ? void 0 : parent.props.headerRowClassName;
    if (isString(headerRowClassName)) {
      classes2.push(headerRowClassName);
    } else if (isFunction$1(headerRowClassName)) {
      classes2.push(headerRowClassName.call(null, { rowIndex }));
    }
    return classes2.join(" ");
  };
  const getHeaderCellStyle = (rowIndex, columnIndex, row, column) => {
    var _a;
    let headerCellStyles = (_a = parent == null ? void 0 : parent.props.headerCellStyle) != null ? _a : {};
    if (isFunction$1(headerCellStyles)) {
      headerCellStyles = headerCellStyles.call(null, {
        rowIndex,
        columnIndex,
        row,
        column
      });
    }
    const fixedStyle = getFixedColumnOffset(columnIndex, column.fixed, props.store, row);
    ensurePosition(fixedStyle, "left");
    ensurePosition(fixedStyle, "right");
    return Object.assign({}, headerCellStyles, fixedStyle);
  };
  const getHeaderCellClass = (rowIndex, columnIndex, row, column) => {
    const fixedClasses = getFixedColumnsClass(ns.b(), columnIndex, column.fixed, props.store, row);
    const classes2 = [
      column.id,
      column.order,
      column.headerAlign,
      column.className,
      column.labelClassName,
      ...fixedClasses
    ];
    if (!column.children) {
      classes2.push("is-leaf");
    }
    if (column.sortable) {
      classes2.push("is-sortable");
    }
    const headerCellClassName = parent == null ? void 0 : parent.props.headerCellClassName;
    if (isString(headerCellClassName)) {
      classes2.push(headerCellClassName);
    } else if (isFunction$1(headerCellClassName)) {
      classes2.push(headerCellClassName.call(null, {
        rowIndex,
        columnIndex,
        row,
        column
      }));
    }
    classes2.push(ns.e("cell"));
    return classes2.filter((className) => Boolean(className)).join(" ");
  };
  return {
    getHeaderRowStyle,
    getHeaderRowClass,
    getHeaderCellStyle,
    getHeaderCellClass
  };
}
const getAllColumns = (columns) => {
  const result = [];
  columns.forEach((column) => {
    if (column.children) {
      result.push(column);
      result.push.apply(result, getAllColumns(column.children));
    } else {
      result.push(column);
    }
  });
  return result;
};
const convertToRows = (originColumns) => {
  let maxLevel = 1;
  const traverse = (column, parent) => {
    if (parent) {
      column.level = parent.level + 1;
      if (maxLevel < column.level) {
        maxLevel = column.level;
      }
    }
    if (column.children) {
      let colSpan = 0;
      column.children.forEach((subColumn) => {
        traverse(subColumn, column);
        colSpan += subColumn.colSpan;
      });
      column.colSpan = colSpan;
    } else {
      column.colSpan = 1;
    }
  };
  originColumns.forEach((column) => {
    column.level = 1;
    traverse(column, void 0);
  });
  const rows = [];
  for (let i = 0; i < maxLevel; i++) {
    rows.push([]);
  }
  const allColumns = getAllColumns(originColumns);
  allColumns.forEach((column) => {
    if (!column.children) {
      column.rowSpan = maxLevel - column.level + 1;
    } else {
      column.rowSpan = 1;
      column.children.forEach((col) => col.isSubColumn = true);
    }
    rows[column.level - 1].push(column);
  });
  return rows;
};
function useUtils$1(props) {
  const parent = inject(TABLE_INJECTION_KEY);
  const columnRows = computed(() => {
    return convertToRows(props.store.states.originColumns.value);
  });
  const isGroup = computed(() => {
    const result = columnRows.value.length > 1;
    if (result && parent) {
      parent.state.isGroup.value = true;
    }
    return result;
  });
  const toggleAllSelection = (event) => {
    event.stopPropagation();
    parent == null ? void 0 : parent.store.commit("toggleAllSelection");
  };
  return {
    isGroup,
    toggleAllSelection,
    columnRows
  };
}
var TableHeader = defineComponent({
  name: "ElTableHeader",
  components: {
    ElCheckbox
  },
  props: {
    fixed: {
      type: String,
      default: ""
    },
    store: {
      required: true,
      type: Object
    },
    border: Boolean,
    defaultSort: {
      type: Object,
      default: () => {
        return {
          prop: "",
          order: ""
        };
      }
    },
    appendFilterPanelTo: {
      type: String
    },
    allowDragLastColumn: {
      type: Boolean
    }
  },
  setup(props, { emit }) {
    const instance = getCurrentInstance();
    const parent = inject(TABLE_INJECTION_KEY);
    const ns = useNamespace("table");
    const filterPanels = ref({});
    const { onColumnsChange, onScrollableChange } = useLayoutObserver(parent);
    const isTableLayoutAuto = (parent == null ? void 0 : parent.props.tableLayout) === "auto";
    const saveIndexSelection = reactive(/* @__PURE__ */ new Map());
    const theadRef = ref();
    const updateFixedColumnStyle = () => {
      setTimeout(() => {
        if (saveIndexSelection.size > 0) {
          saveIndexSelection.forEach((column, key) => {
            const el = theadRef.value.querySelector(`.${key.replace(/\s/g, ".")}`);
            if (el) {
              const width = el.getBoundingClientRect().width;
              column.width = width;
            }
          });
          saveIndexSelection.clear();
        }
      });
    };
    watch(saveIndexSelection, updateFixedColumnStyle);
    const {
      handleHeaderClick,
      handleHeaderContextMenu,
      handleMouseDown,
      handleMouseMove,
      handleMouseOut,
      handleSortClick,
      handleFilterClick
    } = useEvent(props);
    const {
      getHeaderRowStyle,
      getHeaderRowClass,
      getHeaderCellStyle,
      getHeaderCellClass
    } = useStyle$2(props);
    const { isGroup, toggleAllSelection, columnRows } = useUtils$1(props);
    instance.state = {
      onColumnsChange,
      onScrollableChange
    };
    instance.filterPanels = filterPanels;
    return {
      ns,
      filterPanels,
      onColumnsChange,
      onScrollableChange,
      columnRows,
      getHeaderRowClass,
      getHeaderRowStyle,
      getHeaderCellClass,
      getHeaderCellStyle,
      handleHeaderClick,
      handleHeaderContextMenu,
      handleMouseDown,
      handleMouseMove,
      handleMouseOut,
      handleSortClick,
      handleFilterClick,
      isGroup,
      toggleAllSelection,
      saveIndexSelection,
      isTableLayoutAuto,
      theadRef,
      updateFixedColumnStyle
    };
  },
  render() {
    const {
      ns,
      isGroup,
      columnRows,
      getHeaderCellStyle,
      getHeaderCellClass,
      getHeaderRowClass,
      getHeaderRowStyle,
      handleHeaderClick,
      handleHeaderContextMenu,
      handleMouseDown,
      handleMouseMove,
      handleSortClick,
      handleMouseOut,
      store,
      $parent,
      saveIndexSelection,
      isTableLayoutAuto
    } = this;
    let rowSpan = 1;
    return h("thead", {
      ref: "theadRef",
      class: { [ns.is("group")]: isGroup }
    }, columnRows.map((subColumns, rowIndex) => h("tr", {
      class: getHeaderRowClass(rowIndex),
      key: rowIndex,
      style: getHeaderRowStyle(rowIndex)
    }, subColumns.map((column, cellIndex) => {
      if (column.rowSpan > rowSpan) {
        rowSpan = column.rowSpan;
      }
      const _class = getHeaderCellClass(rowIndex, cellIndex, subColumns, column);
      if (isTableLayoutAuto && column.fixed) {
        saveIndexSelection.set(_class, column);
      }
      return h("th", {
        class: _class,
        colspan: column.colSpan,
        key: `${column.id}-thead`,
        rowspan: column.rowSpan,
        style: getHeaderCellStyle(rowIndex, cellIndex, subColumns, column),
        onClick: ($event) => {
          if ($event.currentTarget.classList.contains("noclick")) {
            return;
          }
          handleHeaderClick($event, column);
        },
        onContextmenu: ($event) => handleHeaderContextMenu($event, column),
        onMousedown: ($event) => handleMouseDown($event, column),
        onMousemove: ($event) => handleMouseMove($event, column),
        onMouseout: handleMouseOut
      }, [
        h("div", {
          class: [
            "cell",
            column.filteredValue && column.filteredValue.length > 0 ? "highlight" : ""
          ]
        }, [
          column.renderHeader ? column.renderHeader({
            column,
            $index: cellIndex,
            store,
            _self: $parent
          }) : column.label,
          column.sortable && h("span", {
            onClick: ($event) => handleSortClick($event, column),
            class: "caret-wrapper"
          }, [
            h("i", {
              onClick: ($event) => handleSortClick($event, column, "ascending"),
              class: "sort-caret ascending"
            }),
            h("i", {
              onClick: ($event) => handleSortClick($event, column, "descending"),
              class: "sort-caret descending"
            })
          ]),
          column.filterable && h(FilterPanel, {
            store,
            placement: column.filterPlacement || "bottom-start",
            appendTo: $parent.appendFilterPanelTo,
            column,
            upDataColumn: (key, value) => {
              column[key] = value;
            }
          }, {
            "filter-icon": () => column.renderFilterIcon ? column.renderFilterIcon({
              filterOpened: column.filterOpened
            }) : null
          })
        ])
      ]);
    }))));
  }
});
function isGreaterThan(a, b, epsilon = 0.03) {
  return a - b > epsilon;
}
function useEvents(props) {
  const parent = inject(TABLE_INJECTION_KEY);
  const tooltipContent = ref("");
  const tooltipTrigger = ref(h("div"));
  const handleEvent = (event, row, name) => {
    var _a;
    const table = parent;
    const cell = getCell(event);
    let column;
    const namespace = (_a = table == null ? void 0 : table.vnode.el) == null ? void 0 : _a.dataset.prefix;
    if (cell) {
      column = getColumnByCell({
        columns: props.store.states.columns.value
      }, cell, namespace);
      if (column) {
        table == null ? void 0 : table.emit(`cell-${name}`, row, column, cell, event);
      }
    }
    table == null ? void 0 : table.emit(`row-${name}`, row, column, event);
  };
  const handleDoubleClick = (event, row) => {
    handleEvent(event, row, "dblclick");
  };
  const handleClick = (event, row) => {
    props.store.commit("setCurrentRow", row);
    handleEvent(event, row, "click");
  };
  const handleContextMenu = (event, row) => {
    handleEvent(event, row, "contextmenu");
  };
  const handleMouseEnter = debounce$1((index) => {
    props.store.commit("setHoverRow", index);
  }, 30);
  const handleMouseLeave = debounce$1(() => {
    props.store.commit("setHoverRow", null);
  }, 30);
  const getPadding = (el) => {
    const style2 = (void 0).getComputedStyle(el, null);
    const paddingLeft = Number.parseInt(style2.paddingLeft, 10) || 0;
    const paddingRight = Number.parseInt(style2.paddingRight, 10) || 0;
    const paddingTop = Number.parseInt(style2.paddingTop, 10) || 0;
    const paddingBottom = Number.parseInt(style2.paddingBottom, 10) || 0;
    return {
      left: paddingLeft,
      right: paddingRight,
      top: paddingTop,
      bottom: paddingBottom
    };
  };
  const toggleRowClassByCell = (rowSpan, event, toggle) => {
    let node = event.target.parentNode;
    while (rowSpan > 1) {
      node = node == null ? void 0 : node.nextSibling;
      if (!node || node.nodeName !== "TR")
        break;
      toggle(node, "hover-row hover-fixed-row");
      rowSpan--;
    }
  };
  const handleCellMouseEnter = (event, row, tooltipOptions) => {
    var _a, _b, _c;
    const table = parent;
    const cell = getCell(event);
    const namespace = (_a = table == null ? void 0 : table.vnode.el) == null ? void 0 : _a.dataset.prefix;
    let column;
    if (cell) {
      column = getColumnByCell({
        columns: props.store.states.columns.value
      }, cell, namespace);
      if (cell.rowSpan > 1) {
        toggleRowClassByCell(cell.rowSpan, event, addClass);
      }
      const hoverState = table.hoverState = { cell, column, row };
      table == null ? void 0 : table.emit("cell-mouse-enter", hoverState.row, hoverState.column, hoverState.cell, event);
    }
    if (!tooltipOptions) {
      return;
    }
    const cellChild = event.target.querySelector(".cell");
    if (!(hasClass(cellChild, `${namespace}-tooltip`) && cellChild.childNodes.length)) {
      return;
    }
    const range = (void 0).createRange();
    range.setStart(cellChild, 0);
    range.setEnd(cellChild, cellChild.childNodes.length);
    const { width: rangeWidth, height: rangeHeight } = range.getBoundingClientRect();
    const { width: cellChildWidth, height: cellChildHeight } = cellChild.getBoundingClientRect();
    const { top, left, right, bottom } = getPadding(cellChild);
    const horizontalPadding = left + right;
    const verticalPadding = top + bottom;
    if (isGreaterThan(rangeWidth + horizontalPadding, cellChildWidth) || isGreaterThan(rangeHeight + verticalPadding, cellChildHeight) || isGreaterThan(cellChild.scrollWidth, cellChildWidth)) {
      createTablePopper(tooltipOptions, cell.innerText || cell.textContent, row, column, cell, table);
    } else if (((_b = removePopper) == null ? void 0 : _b.trigger) === cell) {
      (_c = removePopper) == null ? void 0 : _c();
    }
  };
  const handleCellMouseLeave = (event) => {
    const cell = getCell(event);
    if (!cell)
      return;
    if (cell.rowSpan > 1) {
      toggleRowClassByCell(cell.rowSpan, event, removeClass);
    }
    const oldHoverState = parent == null ? void 0 : parent.hoverState;
    parent == null ? void 0 : parent.emit("cell-mouse-leave", oldHoverState == null ? void 0 : oldHoverState.row, oldHoverState == null ? void 0 : oldHoverState.column, oldHoverState == null ? void 0 : oldHoverState.cell, event);
  };
  return {
    handleDoubleClick,
    handleClick,
    handleContextMenu,
    handleMouseEnter,
    handleMouseLeave,
    handleCellMouseEnter,
    handleCellMouseLeave,
    tooltipContent,
    tooltipTrigger
  };
}
function useStyles(props) {
  const parent = inject(TABLE_INJECTION_KEY);
  const ns = useNamespace("table");
  const getRowStyle = (row, rowIndex) => {
    const rowStyle = parent == null ? void 0 : parent.props.rowStyle;
    if (isFunction$1(rowStyle)) {
      return rowStyle.call(null, {
        row,
        rowIndex
      });
    }
    return rowStyle || null;
  };
  const getRowClass = (row, rowIndex) => {
    const classes2 = [ns.e("row")];
    if ((parent == null ? void 0 : parent.props.highlightCurrentRow) && row === props.store.states.currentRow.value) {
      classes2.push("current-row");
    }
    if (props.stripe && rowIndex % 2 === 1) {
      classes2.push(ns.em("row", "striped"));
    }
    const rowClassName = parent == null ? void 0 : parent.props.rowClassName;
    if (isString(rowClassName)) {
      classes2.push(rowClassName);
    } else if (isFunction$1(rowClassName)) {
      classes2.push(rowClassName.call(null, {
        row,
        rowIndex
      }));
    }
    return classes2;
  };
  const getCellStyle = (rowIndex, columnIndex, row, column) => {
    const cellStyle = parent == null ? void 0 : parent.props.cellStyle;
    let cellStyles = cellStyle != null ? cellStyle : {};
    if (isFunction$1(cellStyle)) {
      cellStyles = cellStyle.call(null, {
        rowIndex,
        columnIndex,
        row,
        column
      });
    }
    const fixedStyle = getFixedColumnOffset(columnIndex, props == null ? void 0 : props.fixed, props.store);
    ensurePosition(fixedStyle, "left");
    ensurePosition(fixedStyle, "right");
    return Object.assign({}, cellStyles, fixedStyle);
  };
  const getCellClass = (rowIndex, columnIndex, row, column, offset) => {
    const fixedClasses = getFixedColumnsClass(ns.b(), columnIndex, props == null ? void 0 : props.fixed, props.store, void 0, offset);
    const classes2 = [column.id, column.align, column.className, ...fixedClasses];
    const cellClassName = parent == null ? void 0 : parent.props.cellClassName;
    if (isString(cellClassName)) {
      classes2.push(cellClassName);
    } else if (isFunction$1(cellClassName)) {
      classes2.push(cellClassName.call(null, {
        rowIndex,
        columnIndex,
        row,
        column
      }));
    }
    classes2.push(ns.e("cell"));
    return classes2.filter((className) => Boolean(className)).join(" ");
  };
  const getSpan = (row, column, rowIndex, columnIndex) => {
    let rowspan = 1;
    let colspan = 1;
    const fn = parent == null ? void 0 : parent.props.spanMethod;
    if (isFunction$1(fn)) {
      const result = fn({
        row,
        column,
        rowIndex,
        columnIndex
      });
      if (isArray(result)) {
        rowspan = result[0];
        colspan = result[1];
      } else if (isObject(result)) {
        rowspan = result.rowspan;
        colspan = result.colspan;
      }
    }
    return { rowspan, colspan };
  };
  const getColspanRealWidth = (columns, colspan, index) => {
    if (colspan < 1) {
      return columns[index].realWidth;
    }
    const widthArr = columns.map(({ realWidth, width }) => realWidth || width).slice(index, index + colspan);
    return Number(widthArr.reduce((acc, width) => Number(acc) + Number(width), -1));
  };
  return {
    getRowStyle,
    getRowClass,
    getCellStyle,
    getCellClass,
    getSpan,
    getColspanRealWidth
  };
}
const __default__$4 = defineComponent({
  name: "TableTdWrapper"
});
const _sfc_main$k = /* @__PURE__ */ defineComponent({
  ...__default__$4,
  props: {
    colspan: {
      type: Number,
      default: 1
    },
    rowspan: {
      type: Number,
      default: 1
    }
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("td", {
        colspan: __props.colspan,
        rowspan: __props.rowspan
      }, [
        renderSlot(_ctx.$slots, "default")
      ], 8, ["colspan", "rowspan"]);
    };
  }
});
var TdWrapper = /* @__PURE__ */ _export_sfc$1(_sfc_main$k, [["__file", "td-wrapper.vue"]]);
function useRender$1(props) {
  const parent = inject(TABLE_INJECTION_KEY);
  const ns = useNamespace("table");
  const {
    handleDoubleClick,
    handleClick,
    handleContextMenu,
    handleMouseEnter,
    handleMouseLeave,
    handleCellMouseEnter,
    handleCellMouseLeave,
    tooltipContent,
    tooltipTrigger
  } = useEvents(props);
  const {
    getRowStyle,
    getRowClass,
    getCellStyle,
    getCellClass,
    getSpan,
    getColspanRealWidth
  } = useStyles(props);
  const firstDefaultColumnIndex = computed(() => {
    return props.store.states.columns.value.findIndex(({ type }) => type === "default");
  });
  const getKeyOfRow = (row, index) => {
    const rowKey = parent.props.rowKey;
    if (rowKey) {
      return getRowIdentity(row, rowKey);
    }
    return index;
  };
  const rowRender = (row, $index, treeRowData, expanded = false) => {
    const { tooltipEffect, tooltipOptions, store } = props;
    const { indent, columns } = store.states;
    const rowClasses = getRowClass(row, $index);
    let display = true;
    if (treeRowData) {
      rowClasses.push(ns.em("row", `level-${treeRowData.level}`));
      display = treeRowData.display;
    }
    const displayStyle = display ? null : { display: "none" };
    return h("tr", {
      style: [displayStyle, getRowStyle(row, $index)],
      class: rowClasses,
      key: getKeyOfRow(row, $index),
      onDblclick: ($event) => handleDoubleClick($event, row),
      onClick: ($event) => handleClick($event, row),
      onContextmenu: ($event) => handleContextMenu($event, row),
      onMouseenter: () => handleMouseEnter($index),
      onMouseleave: handleMouseLeave
    }, columns.value.map((column, cellIndex) => {
      const { rowspan, colspan } = getSpan(row, column, $index, cellIndex);
      if (!rowspan || !colspan) {
        return null;
      }
      const columnData = Object.assign({}, column);
      columnData.realWidth = getColspanRealWidth(columns.value, colspan, cellIndex);
      const data2 = {
        store: props.store,
        _self: props.context || parent,
        column: columnData,
        row,
        $index,
        cellIndex,
        expanded
      };
      if (cellIndex === firstDefaultColumnIndex.value && treeRowData) {
        data2.treeNode = {
          indent: treeRowData.level * indent.value,
          level: treeRowData.level
        };
        if (isBoolean(treeRowData.expanded)) {
          data2.treeNode.expanded = treeRowData.expanded;
          if ("loading" in treeRowData) {
            data2.treeNode.loading = treeRowData.loading;
          }
          if ("noLazyChildren" in treeRowData) {
            data2.treeNode.noLazyChildren = treeRowData.noLazyChildren;
          }
        }
      }
      const baseKey = `${getKeyOfRow(row, $index)},${cellIndex}`;
      const patchKey = columnData.columnKey || columnData.rawColumnKey || "";
      const mergedTooltipOptions = column.showOverflowTooltip && merge({
        effect: tooltipEffect
      }, tooltipOptions, column.showOverflowTooltip);
      return h(TdWrapper, {
        style: getCellStyle($index, cellIndex, row, column),
        class: getCellClass($index, cellIndex, row, column, colspan - 1),
        key: `${patchKey}${baseKey}`,
        rowspan,
        colspan,
        onMouseenter: ($event) => handleCellMouseEnter($event, row, mergedTooltipOptions),
        onMouseleave: handleCellMouseLeave
      }, {
        default: () => cellChildren(cellIndex, column, data2)
      });
    }));
  };
  const cellChildren = (cellIndex, column, data2) => {
    return column.renderCell(data2);
  };
  const wrappedRowRender = (row, $index) => {
    const store = props.store;
    const { isRowExpanded, assertRowKey } = store;
    const { treeData, lazyTreeNodeMap, childrenColumnName, rowKey } = store.states;
    const columns = store.states.columns.value;
    const hasExpandColumn = columns.some(({ type }) => type === "expand");
    if (hasExpandColumn) {
      const expanded = isRowExpanded(row);
      const tr = rowRender(row, $index, void 0, expanded);
      const renderExpanded = parent.renderExpanded;
      if (!renderExpanded) {
        console.error("[Element Error]renderExpanded is required.");
        return tr;
      }
      const rows = [[tr]];
      if (parent.props.preserveExpandedContent || expanded) {
        rows[0].push(h("tr", {
          key: `expanded-row__${tr.key}`,
          style: { display: expanded ? "" : "none" }
        }, [
          h("td", {
            colspan: columns.length,
            class: `${ns.e("cell")} ${ns.e("expanded-cell")}`
          }, [renderExpanded({ row, $index, store, expanded })])
        ]));
      }
      return rows;
    } else if (Object.keys(treeData.value).length) {
      assertRowKey();
      const key = getRowIdentity(row, rowKey.value);
      let cur = treeData.value[key];
      let treeRowData = null;
      if (cur) {
        treeRowData = {
          expanded: cur.expanded,
          level: cur.level,
          display: true
        };
        if (isBoolean(cur.lazy)) {
          if (isBoolean(cur.loaded) && cur.loaded) {
            treeRowData.noLazyChildren = !(cur.children && cur.children.length);
          }
          treeRowData.loading = cur.loading;
        }
      }
      const tmp = [rowRender(row, $index, treeRowData)];
      if (cur) {
        let i = 0;
        const traverse = (children, parent2) => {
          if (!(children && children.length && parent2))
            return;
          children.forEach((node) => {
            const innerTreeRowData = {
              display: parent2.display && parent2.expanded,
              level: parent2.level + 1,
              expanded: false,
              noLazyChildren: false,
              loading: false
            };
            const childKey = getRowIdentity(node, rowKey.value);
            if (isPropAbsent(childKey)) {
              throw new Error("For nested data item, row-key is required.");
            }
            cur = { ...treeData.value[childKey] };
            if (cur) {
              innerTreeRowData.expanded = cur.expanded;
              cur.level = cur.level || innerTreeRowData.level;
              cur.display = !!(cur.expanded && innerTreeRowData.display);
              if (isBoolean(cur.lazy)) {
                if (isBoolean(cur.loaded) && cur.loaded) {
                  innerTreeRowData.noLazyChildren = !(cur.children && cur.children.length);
                }
                innerTreeRowData.loading = cur.loading;
              }
            }
            i++;
            tmp.push(rowRender(node, $index + i, innerTreeRowData));
            if (cur) {
              const nodes2 = lazyTreeNodeMap.value[childKey] || node[childrenColumnName.value];
              traverse(nodes2, cur);
            }
          });
        };
        cur.display = true;
        const nodes = lazyTreeNodeMap.value[key] || row[childrenColumnName.value];
        traverse(nodes, cur);
      }
      return tmp;
    } else {
      return rowRender(row, $index, void 0);
    }
  };
  return {
    wrappedRowRender,
    tooltipContent,
    tooltipTrigger
  };
}
const defaultProps$2 = {
  store: {
    required: true,
    type: Object
  },
  stripe: Boolean,
  tooltipEffect: String,
  tooltipOptions: {
    type: Object
  },
  context: {
    default: () => ({}),
    type: Object
  },
  rowClassName: [String, Function],
  rowStyle: [Object, Function],
  fixed: {
    type: String,
    default: ""
  },
  highlight: Boolean
};
var TableBody = defineComponent({
  name: "ElTableBody",
  props: defaultProps$2,
  setup(props) {
    const instance = getCurrentInstance();
    const parent = inject(TABLE_INJECTION_KEY);
    const ns = useNamespace("table");
    const { wrappedRowRender, tooltipContent, tooltipTrigger } = useRender$1(props);
    const { onColumnsChange, onScrollableChange } = useLayoutObserver(parent);
    const hoveredCellList = [];
    watch(props.store.states.hoverRow, (newVal, oldVal) => {
      var _a;
      const el = instance == null ? void 0 : instance.vnode.el;
      const rows = Array.from((el == null ? void 0 : el.children) || []).filter((e) => e == null ? void 0 : e.classList.contains(`${ns.e("row")}`));
      let rowNum = newVal;
      const childNodes = (_a = rows[rowNum]) == null ? void 0 : _a.childNodes;
      if (childNodes == null ? void 0 : childNodes.length) {
        let control = 0;
        const indexes = Array.from(childNodes).reduce((acc, item, index) => {
          var _a2, _b;
          if (((_a2 = childNodes[index]) == null ? void 0 : _a2.colSpan) > 1) {
            control = (_b = childNodes[index]) == null ? void 0 : _b.colSpan;
          }
          if (item.nodeName !== "TD" && control === 0) {
            acc.push(index);
          }
          control > 0 && control--;
          return acc;
        }, []);
        indexes.forEach((rowIndex) => {
          var _a2;
          rowNum = newVal;
          while (rowNum > 0) {
            const preChildNodes = (_a2 = rows[rowNum - 1]) == null ? void 0 : _a2.childNodes;
            if (preChildNodes[rowIndex] && preChildNodes[rowIndex].nodeName === "TD" && preChildNodes[rowIndex].rowSpan > 1) {
              addClass(preChildNodes[rowIndex], "hover-cell");
              hoveredCellList.push(preChildNodes[rowIndex]);
              break;
            }
            rowNum--;
          }
        });
      } else {
        hoveredCellList.forEach((item) => removeClass(item, "hover-cell"));
        hoveredCellList.length = 0;
      }
      if (!props.store.states.isComplex.value || true)
        return;
    });
    return {
      ns,
      onColumnsChange,
      onScrollableChange,
      wrappedRowRender,
      tooltipContent,
      tooltipTrigger
    };
  },
  render() {
    const { wrappedRowRender, store } = this;
    const data2 = store.states.data.value || [];
    return h("tbody", { tabIndex: -1 }, [
      data2.reduce((acc, row) => {
        return acc.concat(wrappedRowRender(row, acc.length));
      }, [])
    ]);
  }
});
function useMapState() {
  var _a;
  const table = inject(TABLE_INJECTION_KEY);
  const store = table == null ? void 0 : table.store;
  const leftFixedLeafCount = computed(() => {
    var _a2;
    return (_a2 = store == null ? void 0 : store.states.fixedLeafColumnsLength.value) != null ? _a2 : 0;
  });
  const rightFixedLeafCount = computed(() => {
    var _a2;
    return (_a2 = store == null ? void 0 : store.states.rightFixedColumns.value.length) != null ? _a2 : 0;
  });
  const columnsCount = computed(() => {
    var _a2;
    return (_a2 = store == null ? void 0 : store.states.columns.value.length) != null ? _a2 : 0;
  });
  const leftFixedCount = computed(() => {
    var _a2;
    return (_a2 = store == null ? void 0 : store.states.fixedColumns.value.length) != null ? _a2 : 0;
  });
  const rightFixedCount = computed(() => {
    var _a2;
    return (_a2 = store == null ? void 0 : store.states.rightFixedColumns.value.length) != null ? _a2 : 0;
  });
  return {
    leftFixedLeafCount,
    rightFixedLeafCount,
    columnsCount,
    leftFixedCount,
    rightFixedCount,
    columns: (_a = store == null ? void 0 : store.states.columns) != null ? _a : []
  };
}
function useStyle$1(props) {
  const { columns } = useMapState();
  const ns = useNamespace("table");
  const getCellClasses = (columns2, cellIndex) => {
    const column = columns2[cellIndex];
    const classes2 = [
      ns.e("cell"),
      column.id,
      column.align,
      column.labelClassName,
      ...getFixedColumnsClass(ns.b(), cellIndex, column.fixed, props.store)
    ];
    if (column.className) {
      classes2.push(column.className);
    }
    if (!column.children) {
      classes2.push(ns.is("leaf"));
    }
    return classes2;
  };
  const getCellStyles = (column, cellIndex) => {
    const fixedStyle = getFixedColumnOffset(cellIndex, column.fixed, props.store);
    ensurePosition(fixedStyle, "left");
    ensurePosition(fixedStyle, "right");
    return fixedStyle;
  };
  return {
    getCellClasses,
    getCellStyles,
    columns
  };
}
var TableFooter = defineComponent({
  name: "ElTableFooter",
  props: {
    fixed: {
      type: String,
      default: ""
    },
    store: {
      required: true,
      type: Object
    },
    summaryMethod: Function,
    sumText: String,
    border: Boolean,
    defaultSort: {
      type: Object,
      default: () => {
        return {
          prop: "",
          order: ""
        };
      }
    }
  },
  setup(props) {
    const parent = inject(TABLE_INJECTION_KEY);
    const ns = useNamespace("table");
    const { getCellClasses, getCellStyles, columns } = useStyle$1(props);
    const { onScrollableChange, onColumnsChange } = useLayoutObserver(parent);
    return {
      ns,
      onScrollableChange,
      onColumnsChange,
      getCellClasses,
      getCellStyles,
      columns
    };
  },
  render() {
    const { columns, getCellStyles, getCellClasses, summaryMethod, sumText } = this;
    const data2 = this.store.states.data.value;
    let sums = [];
    if (summaryMethod) {
      sums = summaryMethod({
        columns,
        data: data2
      });
    } else {
      columns.forEach((column, index) => {
        if (index === 0) {
          sums[index] = sumText;
          return;
        }
        const values = data2.map((item) => Number(item[column.property]));
        const precisions = [];
        let notNumber = true;
        values.forEach((value) => {
          if (!Number.isNaN(+value)) {
            notNumber = false;
            const decimal = `${value}`.split(".")[1];
            precisions.push(decimal ? decimal.length : 0);
          }
        });
        const precision = Math.max.apply(null, precisions);
        if (!notNumber) {
          sums[index] = values.reduce((prev, curr) => {
            const value = Number(curr);
            if (!Number.isNaN(+value)) {
              return Number.parseFloat((prev + curr).toFixed(Math.min(precision, 20)));
            } else {
              return prev;
            }
          }, 0);
        } else {
          sums[index] = "";
        }
      });
    }
    return h(h("tfoot", [
      h("tr", {}, [
        ...columns.map((column, cellIndex) => h("td", {
          key: cellIndex,
          colspan: column.colSpan,
          rowspan: column.rowSpan,
          class: getCellClasses(columns, cellIndex),
          style: getCellStyles(column, cellIndex)
        }, [
          h("div", {
            class: ["cell", column.labelClassName]
          }, [sums[cellIndex]])
        ]))
      ])
    ]));
  }
});
function useUtils(store) {
  const setCurrentRow = (row) => {
    store.commit("setCurrentRow", row);
  };
  const getSelectionRows = () => {
    return store.getSelectionRows();
  };
  const toggleRowSelection = (row, selected, ignoreSelectable = true) => {
    store.toggleRowSelection(row, selected, false, ignoreSelectable);
    store.updateAllSelected();
  };
  const clearSelection = () => {
    store.clearSelection();
  };
  const clearFilter = (columnKeys) => {
    store.clearFilter(columnKeys);
  };
  const toggleAllSelection = () => {
    store.commit("toggleAllSelection");
  };
  const toggleRowExpansion = (row, expanded) => {
    store.toggleRowExpansionAdapter(row, expanded);
  };
  const clearSort = () => {
    store.clearSort();
  };
  const sort = (prop, order) => {
    store.commit("sort", { prop, order });
  };
  const updateKeyChildren = (key, data2) => {
    store.updateKeyChildren(key, data2);
  };
  return {
    setCurrentRow,
    getSelectionRows,
    toggleRowSelection,
    clearSelection,
    clearFilter,
    toggleAllSelection,
    toggleRowExpansion,
    clearSort,
    sort,
    updateKeyChildren
  };
}
function useStyle(props, layout, store, table) {
  const isHidden = ref(false);
  const renderExpanded = ref(null);
  const resizeProxyVisible = ref(false);
  const setDragVisible = (visible) => {
    resizeProxyVisible.value = visible;
  };
  const resizeState = ref({
    width: null,
    height: null,
    headerHeight: null
  });
  const isGroup = ref(false);
  const scrollbarViewStyle = {
    display: "inline-block",
    verticalAlign: "middle"
  };
  const tableWidth = ref();
  ref(0);
  const bodyScrollHeight = ref(0);
  const headerScrollHeight = ref(0);
  const footerScrollHeight = ref(0);
  ref(0);
  watchEffect(() => {
    layout.setHeight(props.height);
  });
  watchEffect(() => {
    layout.setMaxHeight(props.maxHeight);
  });
  watch(() => [props.currentRowKey, store.states.rowKey], ([currentRowKey, rowKey]) => {
    if (!unref(rowKey) || !unref(currentRowKey))
      return;
    store.setCurrentRowKey(`${currentRowKey}`);
  }, {
    immediate: true
  });
  watch(() => props.data, (data2) => {
    table.store.commit("setData", data2);
  }, {
    immediate: true,
    deep: true
  });
  watchEffect(() => {
    if (props.expandRowKeys) {
      store.setExpandRowKeysAdapter(props.expandRowKeys);
    }
  });
  const handleMouseLeave = () => {
    table.store.commit("setHoverRow", null);
    if (table.hoverState)
      table.hoverState = null;
  };
  const handleHeaderFooterMousewheel = (event, data2) => {
    const { pixelX, pixelY } = data2;
    if (Math.abs(pixelX) >= Math.abs(pixelY)) {
      table.refs.bodyWrapper.scrollLeft += data2.pixelX / 5;
    }
  };
  const shouldUpdateHeight = computed(() => {
    return props.height || props.maxHeight || store.states.fixedColumns.value.length > 0 || store.states.rightFixedColumns.value.length > 0;
  });
  const tableBodyStyles = computed(() => {
    return {
      width: layout.bodyWidth.value ? `${layout.bodyWidth.value}px` : ""
    };
  });
  const doLayout = () => {
    if (shouldUpdateHeight.value) {
      layout.updateElsHeight();
    }
    layout.updateColumnsWidth();
    return;
  };
  const tableSize = useFormSize();
  const bodyWidth = computed(() => {
    const { bodyWidth: bodyWidth_, scrollY, gutterWidth } = layout;
    return bodyWidth_.value ? `${bodyWidth_.value - (scrollY.value ? gutterWidth : 0)}px` : "";
  });
  const tableLayout = computed(() => {
    if (props.maxHeight)
      return "fixed";
    return props.tableLayout;
  });
  const emptyBlockStyle = computed(() => {
    if (props.data && props.data.length)
      return null;
    let height = "100%";
    if (props.height && bodyScrollHeight.value) {
      height = `${bodyScrollHeight.value}px`;
    }
    const width = tableWidth.value;
    return {
      width: width ? `${width}px` : "",
      height
    };
  });
  const scrollbarStyle = computed(() => {
    if (props.height) {
      return {
        height: "100%"
      };
    }
    if (props.maxHeight) {
      if (!Number.isNaN(Number(props.maxHeight))) {
        return {
          maxHeight: `${props.maxHeight - headerScrollHeight.value - footerScrollHeight.value}px`
        };
      } else {
        return {
          maxHeight: `calc(${props.maxHeight} - ${headerScrollHeight.value + footerScrollHeight.value}px)`
        };
      }
    }
    return {};
  });
  const handleFixedMousewheel = (event, data2) => {
    const bodyWrapper = table.refs.bodyWrapper;
    if (Math.abs(data2.spinY) > 0) {
      const currentScrollTop = bodyWrapper.scrollTop;
      if (data2.pixelY < 0 && currentScrollTop !== 0) {
        event.preventDefault();
      }
      if (data2.pixelY > 0 && bodyWrapper.scrollHeight - bodyWrapper.clientHeight > currentScrollTop) {
        event.preventDefault();
      }
      bodyWrapper.scrollTop += Math.ceil(data2.pixelY / 5);
    } else {
      bodyWrapper.scrollLeft += Math.ceil(data2.pixelX / 5);
    }
  };
  return {
    isHidden,
    renderExpanded,
    setDragVisible,
    isGroup,
    handleMouseLeave,
    handleHeaderFooterMousewheel,
    tableSize,
    emptyBlockStyle,
    handleFixedMousewheel,
    resizeProxyVisible,
    bodyWidth,
    resizeState,
    doLayout,
    tableBodyStyles,
    tableLayout,
    scrollbarViewStyle,
    scrollbarStyle
  };
}
function useKeyRender(table) {
  ref();
}
var defaultProps$1 = {
  data: {
    type: Array,
    default: () => []
  },
  size: useSizeProp,
  width: [String, Number],
  height: [String, Number],
  maxHeight: [String, Number],
  fit: {
    type: Boolean,
    default: true
  },
  stripe: Boolean,
  border: Boolean,
  rowKey: [String, Function],
  showHeader: {
    type: Boolean,
    default: true
  },
  showSummary: Boolean,
  sumText: String,
  summaryMethod: Function,
  rowClassName: [String, Function],
  rowStyle: [Object, Function],
  cellClassName: [String, Function],
  cellStyle: [Object, Function],
  headerRowClassName: [String, Function],
  headerRowStyle: [Object, Function],
  headerCellClassName: [String, Function],
  headerCellStyle: [Object, Function],
  highlightCurrentRow: Boolean,
  currentRowKey: [String, Number],
  emptyText: String,
  expandRowKeys: Array,
  defaultExpandAll: Boolean,
  defaultSort: Object,
  tooltipEffect: String,
  tooltipOptions: Object,
  spanMethod: Function,
  selectOnIndeterminate: {
    type: Boolean,
    default: true
  },
  indent: {
    type: Number,
    default: 16
  },
  treeProps: {
    type: Object,
    default: () => {
      return {
        hasChildren: "hasChildren",
        children: "children",
        checkStrictly: false
      };
    }
  },
  lazy: Boolean,
  load: Function,
  style: {
    type: Object,
    default: () => ({})
  },
  className: {
    type: String,
    default: ""
  },
  tableLayout: {
    type: String,
    default: "fixed"
  },
  scrollbarAlwaysOn: Boolean,
  flexible: Boolean,
  showOverflowTooltip: [Boolean, Object],
  tooltipFormatter: Function,
  appendFilterPanelTo: String,
  scrollbarTabindex: {
    type: [Number, String],
    default: void 0
  },
  allowDragLastColumn: {
    type: Boolean,
    default: true
  },
  preserveExpandedContent: {
    type: Boolean,
    default: false
  }
};
function hColgroup(props) {
  const isAuto = props.tableLayout === "auto";
  let columns = props.columns || [];
  if (isAuto) {
    if (columns.every(({ width }) => isUndefined(width))) {
      columns = [];
    }
  }
  const getPropsData = (column) => {
    const propsData = {
      key: `${props.tableLayout}_${column.id}`,
      style: {},
      name: void 0
    };
    if (isAuto) {
      propsData.style = {
        width: `${column.width}px`
      };
    } else {
      propsData.name = column.id;
    }
    return propsData;
  };
  return h("colgroup", {}, columns.map((column) => h("col", getPropsData(column))));
}
hColgroup.props = ["columns", "tableLayout"];
const useScrollbar = () => {
  const scrollBarRef = ref();
  const scrollTo = (options, yCoord) => {
    const scrollbar = scrollBarRef.value;
    if (scrollbar) {
      scrollbar.scrollTo(options, yCoord);
    }
  };
  const setScrollPosition = (position, offset) => {
    const scrollbar = scrollBarRef.value;
    if (scrollbar && isNumber(offset) && ["Top", "Left"].includes(position)) {
      scrollbar[`setScroll${position}`](offset);
    }
  };
  const setScrollTop = (top) => setScrollPosition("Top", top);
  const setScrollLeft = (left) => setScrollPosition("Left", left);
  return {
    scrollBarRef,
    scrollTo,
    setScrollTop,
    setScrollLeft
  };
};
const mousewheel = function(element, callback) {
  if (element && element.addEventListener) {
    const fn = function(event) {
      const normalized = normalizeWheel(event);
      callback && Reflect.apply(callback, this, [event, normalized]);
    };
    element.addEventListener("wheel", fn, { passive: true });
  }
};
const Mousewheel = {
  beforeMount(el, binding) {
    mousewheel(el, binding.value);
  }
};
let tableIdSeed = 1;
const _sfc_main$j = defineComponent({
  name: "ElTable",
  directives: {
    Mousewheel
  },
  components: {
    TableHeader,
    TableBody,
    TableFooter,
    ElScrollbar,
    hColgroup
  },
  props: defaultProps$1,
  emits: [
    "select",
    "select-all",
    "selection-change",
    "cell-mouse-enter",
    "cell-mouse-leave",
    "cell-contextmenu",
    "cell-click",
    "cell-dblclick",
    "row-click",
    "row-contextmenu",
    "row-dblclick",
    "header-click",
    "header-contextmenu",
    "sort-change",
    "filter-change",
    "current-change",
    "header-dragend",
    "expand-change",
    "scroll"
  ],
  setup(props) {
    const { t } = useLocale();
    const ns = useNamespace("table");
    const table = getCurrentInstance();
    provide(TABLE_INJECTION_KEY, table);
    const store = createStore(table, props);
    table.store = store;
    const layout = new TableLayout({
      store: table.store,
      table,
      fit: props.fit,
      showHeader: props.showHeader
    });
    table.layout = layout;
    const isEmpty = computed(() => (store.states.data.value || []).length === 0);
    const {
      setCurrentRow,
      getSelectionRows,
      toggleRowSelection,
      clearSelection,
      clearFilter,
      toggleAllSelection,
      toggleRowExpansion,
      clearSort,
      sort,
      updateKeyChildren
    } = useUtils(store);
    const {
      isHidden,
      renderExpanded,
      setDragVisible,
      isGroup,
      handleMouseLeave,
      handleHeaderFooterMousewheel,
      tableSize,
      emptyBlockStyle,
      handleFixedMousewheel,
      resizeProxyVisible,
      bodyWidth,
      resizeState,
      doLayout,
      tableBodyStyles,
      tableLayout,
      scrollbarViewStyle,
      scrollbarStyle
    } = useStyle(props, layout, store, table);
    const { scrollBarRef, scrollTo, setScrollLeft, setScrollTop } = useScrollbar();
    const debouncedUpdateLayout = debounce$1(doLayout, 50);
    const tableId = `${ns.namespace.value}-table_${tableIdSeed++}`;
    table.tableId = tableId;
    table.state = {
      isGroup,
      resizeState,
      doLayout,
      debouncedUpdateLayout
    };
    const computedSumText = computed(() => {
      var _a;
      return (_a = props.sumText) != null ? _a : t("el.table.sumText");
    });
    const computedEmptyText = computed(() => {
      var _a;
      return (_a = props.emptyText) != null ? _a : t("el.table.emptyText");
    });
    const columns = computed(() => {
      return convertToRows(store.states.originColumns.value)[0];
    });
    useKeyRender();
    return {
      ns,
      layout,
      store,
      columns,
      handleHeaderFooterMousewheel,
      handleMouseLeave,
      tableId,
      tableSize,
      isHidden,
      isEmpty,
      renderExpanded,
      resizeProxyVisible,
      resizeState,
      isGroup,
      bodyWidth,
      tableBodyStyles,
      emptyBlockStyle,
      debouncedUpdateLayout,
      handleFixedMousewheel,
      setCurrentRow,
      getSelectionRows,
      toggleRowSelection,
      clearSelection,
      clearFilter,
      toggleAllSelection,
      toggleRowExpansion,
      clearSort,
      doLayout,
      sort,
      updateKeyChildren,
      t,
      setDragVisible,
      context: table,
      computedSumText,
      computedEmptyText,
      tableLayout,
      scrollbarViewStyle,
      scrollbarStyle,
      scrollBarRef,
      scrollTo,
      setScrollLeft,
      setScrollTop,
      allowDragLastColumn: props.allowDragLastColumn
    };
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_hColgroup = resolveComponent("hColgroup");
  const _component_table_header = resolveComponent("table-header");
  const _component_table_body = resolveComponent("table-body");
  const _component_table_footer = resolveComponent("table-footer");
  const _component_el_scrollbar = resolveComponent("el-scrollbar");
  const _directive_mousewheel = resolveDirective("mousewheel");
  return openBlock(), createElementBlock("div", {
    ref: "tableWrapper",
    class: normalizeClass([
      {
        [_ctx.ns.m("fit")]: _ctx.fit,
        [_ctx.ns.m("striped")]: _ctx.stripe,
        [_ctx.ns.m("border")]: _ctx.border || _ctx.isGroup,
        [_ctx.ns.m("hidden")]: _ctx.isHidden,
        [_ctx.ns.m("group")]: _ctx.isGroup,
        [_ctx.ns.m("fluid-height")]: _ctx.maxHeight,
        [_ctx.ns.m("scrollable-x")]: _ctx.layout.scrollX.value,
        [_ctx.ns.m("scrollable-y")]: _ctx.layout.scrollY.value,
        [_ctx.ns.m("enable-row-hover")]: !_ctx.store.states.isComplex.value,
        [_ctx.ns.m("enable-row-transition")]: (_ctx.store.states.data.value || []).length !== 0 && (_ctx.store.states.data.value || []).length < 100,
        "has-footer": _ctx.showSummary
      },
      _ctx.ns.m(_ctx.tableSize),
      _ctx.className,
      _ctx.ns.b(),
      _ctx.ns.m(`layout-${_ctx.tableLayout}`)
    ]),
    style: normalizeStyle(_ctx.style),
    "data-prefix": _ctx.ns.namespace.value,
    onMouseleave: _ctx.handleMouseLeave
  }, [
    createElementVNode("div", {
      class: normalizeClass(_ctx.ns.e("inner-wrapper"))
    }, [
      createElementVNode("div", {
        ref: "hiddenColumns",
        class: "hidden-columns"
      }, [
        renderSlot(_ctx.$slots, "default")
      ], 512),
      _ctx.showHeader && _ctx.tableLayout === "fixed" ? withDirectives((openBlock(), createElementBlock("div", {
        key: 0,
        ref: "headerWrapper",
        class: normalizeClass(_ctx.ns.e("header-wrapper"))
      }, [
        createElementVNode("table", {
          ref: "tableHeader",
          class: normalizeClass(_ctx.ns.e("header")),
          style: normalizeStyle(_ctx.tableBodyStyles),
          border: "0",
          cellpadding: "0",
          cellspacing: "0"
        }, [
          createVNode(_component_hColgroup, {
            columns: _ctx.store.states.columns.value,
            "table-layout": _ctx.tableLayout
          }, null, 8, ["columns", "table-layout"]),
          createVNode(_component_table_header, {
            ref: "tableHeaderRef",
            border: _ctx.border,
            "default-sort": _ctx.defaultSort,
            store: _ctx.store,
            "append-filter-panel-to": _ctx.appendFilterPanelTo,
            "allow-drag-last-column": _ctx.allowDragLastColumn,
            onSetDragVisible: _ctx.setDragVisible
          }, null, 8, ["border", "default-sort", "store", "append-filter-panel-to", "allow-drag-last-column", "onSetDragVisible"])
        ], 6)
      ], 2)), [
        [_directive_mousewheel, _ctx.handleHeaderFooterMousewheel]
      ]) : createCommentVNode("v-if", true),
      createElementVNode("div", {
        ref: "bodyWrapper",
        class: normalizeClass(_ctx.ns.e("body-wrapper"))
      }, [
        createVNode(_component_el_scrollbar, {
          ref: "scrollBarRef",
          "view-style": _ctx.scrollbarViewStyle,
          "wrap-style": _ctx.scrollbarStyle,
          always: _ctx.scrollbarAlwaysOn,
          tabindex: _ctx.scrollbarTabindex,
          onScroll: ($event) => _ctx.$emit("scroll", $event)
        }, {
          default: withCtx(() => [
            createElementVNode("table", {
              ref: "tableBody",
              class: normalizeClass(_ctx.ns.e("body")),
              cellspacing: "0",
              cellpadding: "0",
              border: "0",
              style: normalizeStyle({
                width: _ctx.bodyWidth,
                tableLayout: _ctx.tableLayout
              })
            }, [
              createVNode(_component_hColgroup, {
                columns: _ctx.store.states.columns.value,
                "table-layout": _ctx.tableLayout
              }, null, 8, ["columns", "table-layout"]),
              _ctx.showHeader && _ctx.tableLayout === "auto" ? (openBlock(), createBlock(_component_table_header, {
                key: 0,
                ref: "tableHeaderRef",
                class: normalizeClass(_ctx.ns.e("body-header")),
                border: _ctx.border,
                "default-sort": _ctx.defaultSort,
                store: _ctx.store,
                "append-filter-panel-to": _ctx.appendFilterPanelTo,
                onSetDragVisible: _ctx.setDragVisible
              }, null, 8, ["class", "border", "default-sort", "store", "append-filter-panel-to", "onSetDragVisible"])) : createCommentVNode("v-if", true),
              createVNode(_component_table_body, {
                context: _ctx.context,
                highlight: _ctx.highlightCurrentRow,
                "row-class-name": _ctx.rowClassName,
                "tooltip-effect": _ctx.tooltipEffect,
                "tooltip-options": _ctx.tooltipOptions,
                "row-style": _ctx.rowStyle,
                store: _ctx.store,
                stripe: _ctx.stripe
              }, null, 8, ["context", "highlight", "row-class-name", "tooltip-effect", "tooltip-options", "row-style", "store", "stripe"]),
              _ctx.showSummary && _ctx.tableLayout === "auto" ? (openBlock(), createBlock(_component_table_footer, {
                key: 1,
                class: normalizeClass(_ctx.ns.e("body-footer")),
                border: _ctx.border,
                "default-sort": _ctx.defaultSort,
                store: _ctx.store,
                "sum-text": _ctx.computedSumText,
                "summary-method": _ctx.summaryMethod
              }, null, 8, ["class", "border", "default-sort", "store", "sum-text", "summary-method"])) : createCommentVNode("v-if", true)
            ], 6),
            _ctx.isEmpty ? (openBlock(), createElementBlock("div", {
              key: 0,
              ref: "emptyBlock",
              style: normalizeStyle(_ctx.emptyBlockStyle),
              class: normalizeClass(_ctx.ns.e("empty-block"))
            }, [
              createElementVNode("span", {
                class: normalizeClass(_ctx.ns.e("empty-text"))
              }, [
                renderSlot(_ctx.$slots, "empty", {}, () => [
                  createTextVNode(toDisplayString(_ctx.computedEmptyText), 1)
                ])
              ], 2)
            ], 6)) : createCommentVNode("v-if", true),
            _ctx.$slots.append ? (openBlock(), createElementBlock("div", {
              key: 1,
              ref: "appendWrapper",
              class: normalizeClass(_ctx.ns.e("append-wrapper"))
            }, [
              renderSlot(_ctx.$slots, "append")
            ], 2)) : createCommentVNode("v-if", true)
          ]),
          _: 3
        }, 8, ["view-style", "wrap-style", "always", "tabindex", "onScroll"])
      ], 2),
      _ctx.showSummary && _ctx.tableLayout === "fixed" ? withDirectives((openBlock(), createElementBlock("div", {
        key: 1,
        ref: "footerWrapper",
        class: normalizeClass(_ctx.ns.e("footer-wrapper"))
      }, [
        createElementVNode("table", {
          class: normalizeClass(_ctx.ns.e("footer")),
          cellspacing: "0",
          cellpadding: "0",
          border: "0",
          style: normalizeStyle(_ctx.tableBodyStyles)
        }, [
          createVNode(_component_hColgroup, {
            columns: _ctx.store.states.columns.value,
            "table-layout": _ctx.tableLayout
          }, null, 8, ["columns", "table-layout"]),
          createVNode(_component_table_footer, {
            border: _ctx.border,
            "default-sort": _ctx.defaultSort,
            store: _ctx.store,
            "sum-text": _ctx.computedSumText,
            "summary-method": _ctx.summaryMethod
          }, null, 8, ["border", "default-sort", "store", "sum-text", "summary-method"])
        ], 6)
      ], 2)), [
        [vShow, !_ctx.isEmpty],
        [_directive_mousewheel, _ctx.handleHeaderFooterMousewheel]
      ]) : createCommentVNode("v-if", true),
      _ctx.border || _ctx.isGroup ? (openBlock(), createElementBlock("div", {
        key: 2,
        class: normalizeClass(_ctx.ns.e("border-left-patch"))
      }, null, 2)) : createCommentVNode("v-if", true)
    ], 2),
    withDirectives(createElementVNode("div", {
      ref: "resizeProxy",
      class: normalizeClass(_ctx.ns.e("column-resize-proxy"))
    }, null, 2), [
      [vShow, _ctx.resizeProxyVisible]
    ])
  ], 46, ["data-prefix", "onMouseleave"]);
}
var Table = /* @__PURE__ */ _export_sfc$1(_sfc_main$j, [["render", _sfc_render], ["__file", "table.vue"]]);
const defaultClassNames = {
  selection: "table-column--selection",
  expand: "table__expand-column"
};
const getDefaultClassName = (type) => {
  return defaultClassNames[type] || "";
};
const cellForced = {
  selection: {
    renderHeader({ store, column }) {
      function isDisabled() {
        return store.states.data.value && store.states.data.value.length === 0;
      }
      return h(ElCheckbox, {
        disabled: isDisabled(),
        size: store.states.tableSize.value,
        indeterminate: store.states.selection.value.length > 0 && !store.states.isAllSelected.value,
        "onUpdate:modelValue": store.toggleAllSelection,
        modelValue: store.states.isAllSelected.value,
        ariaLabel: column.label
      });
    },
    renderCell({
      row,
      column,
      store,
      $index
    }) {
      return h(ElCheckbox, {
        disabled: column.selectable ? !column.selectable.call(null, row, $index) : false,
        size: store.states.tableSize.value,
        onChange: () => {
          store.commit("rowSelectedChanged", row);
        },
        onClick: (event) => event.stopPropagation(),
        modelValue: store.isSelected(row),
        ariaLabel: column.label
      });
    },
    sortable: false,
    resizable: false
  },
  index: {
    renderHeader({ column }) {
      return column.label || "#";
    },
    renderCell({
      column,
      $index
    }) {
      let i = $index + 1;
      const index = column.index;
      if (isNumber(index)) {
        i = $index + index;
      } else if (isFunction$1(index)) {
        i = index($index);
      }
      return h("div", {}, [i]);
    },
    sortable: false
  },
  expand: {
    renderHeader({ column }) {
      return column.label || "";
    },
    renderCell({
      row,
      store,
      expanded
    }) {
      const { ns } = store;
      const classes2 = [ns.e("expand-icon")];
      if (expanded) {
        classes2.push(ns.em("expand-icon", "expanded"));
      }
      const callback = function(e) {
        e.stopPropagation();
        store.toggleRowExpansion(row);
      };
      return h("div", {
        class: classes2,
        onClick: callback
      }, {
        default: () => {
          return [
            h(ElIcon, null, {
              default: () => {
                return [h(arrow_right_default)];
              }
            })
          ];
        }
      });
    },
    sortable: false,
    resizable: false
  }
};
function defaultRenderCell({
  row,
  column,
  $index
}) {
  var _a;
  const property = column.property;
  const value = property && getProp(row, property).value;
  if (column && column.formatter) {
    return column.formatter(row, column, value, $index);
  }
  return ((_a = value == null ? void 0 : value.toString) == null ? void 0 : _a.call(value)) || "";
}
function treeCellPrefix({
  row,
  treeNode,
  store
}, createPlaceholder = false) {
  const { ns } = store;
  if (!treeNode) {
    if (createPlaceholder) {
      return [
        h("span", {
          class: ns.e("placeholder")
        })
      ];
    }
    return null;
  }
  const ele = [];
  const callback = function(e) {
    e.stopPropagation();
    if (treeNode.loading) {
      return;
    }
    store.loadOrToggle(row);
  };
  if (treeNode.indent) {
    ele.push(h("span", {
      class: ns.e("indent"),
      style: { "padding-left": `${treeNode.indent}px` }
    }));
  }
  if (isBoolean(treeNode.expanded) && !treeNode.noLazyChildren) {
    const expandClasses = [
      ns.e("expand-icon"),
      treeNode.expanded ? ns.em("expand-icon", "expanded") : ""
    ];
    let icon = arrow_right_default;
    if (treeNode.loading) {
      icon = loading_default;
    }
    ele.push(h("div", {
      class: expandClasses,
      onClick: callback
    }, {
      default: () => {
        return [
          h(ElIcon, { class: { [ns.is("loading")]: treeNode.loading } }, {
            default: () => [h(icon)]
          })
        ];
      }
    }));
  } else {
    ele.push(h("span", {
      class: ns.e("placeholder")
    }));
  }
  return ele;
}
function getAllAliases(props, aliases) {
  return props.reduce((prev, cur) => {
    prev[cur] = cur;
    return prev;
  }, aliases);
}
function useWatcher(owner, props_) {
  const instance = getCurrentInstance();
  const registerComplexWatchers = () => {
    const props = ["fixed"];
    const aliases = {
      realWidth: "width",
      realMinWidth: "minWidth"
    };
    const allAliases = getAllAliases(props, aliases);
    Object.keys(allAliases).forEach((key) => {
      const columnKey = aliases[key];
      if (hasOwn(props_, columnKey)) {
        watch(() => props_[columnKey], (newVal) => {
          let value = newVal;
          if (columnKey === "width" && key === "realWidth") {
            value = parseWidth(newVal);
          }
          if (columnKey === "minWidth" && key === "realMinWidth") {
            value = parseMinWidth(newVal);
          }
          instance.columnConfig.value[columnKey] = value;
          instance.columnConfig.value[key] = value;
          const updateColumns = columnKey === "fixed";
          owner.value.store.scheduleLayout(updateColumns);
        });
      }
    });
  };
  const registerNormalWatchers = () => {
    const props = [
      "label",
      "filters",
      "filterMultiple",
      "filteredValue",
      "sortable",
      "index",
      "formatter",
      "className",
      "labelClassName",
      "filterClassName",
      "showOverflowTooltip",
      "tooltipFormatter"
    ];
    const aliases = {
      property: "prop",
      align: "realAlign",
      headerAlign: "realHeaderAlign"
    };
    const allAliases = getAllAliases(props, aliases);
    Object.keys(allAliases).forEach((key) => {
      const columnKey = aliases[key];
      if (hasOwn(props_, columnKey)) {
        watch(() => props_[columnKey], (newVal) => {
          instance.columnConfig.value[key] = newVal;
        });
      }
    });
  };
  return {
    registerComplexWatchers,
    registerNormalWatchers
  };
}
function useRender(props, slots, owner) {
  const instance = getCurrentInstance();
  const columnId = ref("");
  const isSubColumn = ref(false);
  const realAlign = ref();
  const realHeaderAlign = ref();
  const ns = useNamespace("table");
  watchEffect(() => {
    realAlign.value = props.align ? `is-${props.align}` : null;
    realAlign.value;
  });
  watchEffect(() => {
    realHeaderAlign.value = props.headerAlign ? `is-${props.headerAlign}` : realAlign.value;
    realHeaderAlign.value;
  });
  const columnOrTableParent = computed(() => {
    let parent = instance.vnode.vParent || instance.parent;
    while (parent && !parent.tableId && !parent.columnId) {
      parent = parent.vnode.vParent || parent.parent;
    }
    return parent;
  });
  const hasTreeColumn = computed(() => {
    const { store } = instance.parent;
    if (!store)
      return false;
    const { treeData } = store.states;
    const treeDataValue = treeData.value;
    return treeDataValue && Object.keys(treeDataValue).length > 0;
  });
  const realWidth = ref(parseWidth(props.width));
  const realMinWidth = ref(parseMinWidth(props.minWidth));
  const setColumnWidth = (column) => {
    if (realWidth.value)
      column.width = realWidth.value;
    if (realMinWidth.value) {
      column.minWidth = realMinWidth.value;
    }
    if (!realWidth.value && realMinWidth.value) {
      column.width = void 0;
    }
    if (!column.minWidth) {
      column.minWidth = 80;
    }
    column.realWidth = Number(isUndefined(column.width) ? column.minWidth : column.width);
    return column;
  };
  const setColumnForcedProps = (column) => {
    const type = column.type;
    const source = cellForced[type] || {};
    Object.keys(source).forEach((prop) => {
      const value = source[prop];
      if (prop !== "className" && !isUndefined(value)) {
        column[prop] = value;
      }
    });
    const className = getDefaultClassName(type);
    if (className) {
      const forceClass = `${unref(ns.namespace)}-${className}`;
      column.className = column.className ? `${column.className} ${forceClass}` : forceClass;
    }
    return column;
  };
  const checkSubColumn = (children) => {
    if (isArray(children)) {
      children.forEach((child) => check(child));
    } else {
      check(children);
    }
    function check(item) {
      var _a;
      if (((_a = item == null ? void 0 : item.type) == null ? void 0 : _a.name) === "ElTableColumn") {
        item.vParent = instance;
      }
    }
  };
  const setColumnRenders = (column) => {
    if (props.renderHeader) ; else if (column.type !== "selection") {
      column.renderHeader = (scope) => {
        instance.columnConfig.value["label"];
        return renderSlot(slots, "header", scope, () => [column.label]);
      };
    }
    if (slots["filter-icon"]) {
      column.renderFilterIcon = (scope) => {
        return renderSlot(slots, "filter-icon", scope);
      };
    }
    let originRenderCell = column.renderCell;
    if (column.type === "expand") {
      column.renderCell = (data2) => h("div", {
        class: "cell"
      }, [originRenderCell(data2)]);
      owner.value.renderExpanded = (data2) => {
        return slots.default ? slots.default(data2) : slots.default;
      };
    } else {
      originRenderCell = originRenderCell || defaultRenderCell;
      column.renderCell = (data2) => {
        let children = null;
        if (slots.default) {
          const vnodes = slots.default(data2);
          children = vnodes.some((v) => v.type !== Comment) ? vnodes : originRenderCell(data2);
        } else {
          children = originRenderCell(data2);
        }
        const { columns } = owner.value.store.states;
        const firstUserColumnIndex = columns.value.findIndex((item) => item.type === "default");
        const shouldCreatePlaceholder = hasTreeColumn.value && data2.cellIndex === firstUserColumnIndex;
        const prefix = treeCellPrefix(data2, shouldCreatePlaceholder);
        const props2 = {
          class: "cell",
          style: {}
        };
        if (column.showOverflowTooltip) {
          props2.class = `${props2.class} ${unref(ns.namespace)}-tooltip`;
          props2.style = {
            width: `${(data2.column.realWidth || Number(data2.column.width)) - 1}px`
          };
        }
        checkSubColumn(children);
        return h("div", props2, [prefix, children]);
      };
    }
    return column;
  };
  const getPropsData = (...propsKey) => {
    return propsKey.reduce((prev, cur) => {
      if (isArray(cur)) {
        cur.forEach((key) => {
          prev[key] = props[key];
        });
      }
      return prev;
    }, {});
  };
  const getColumnElIndex = (children, child) => {
    return Array.prototype.indexOf.call(children, child);
  };
  const updateColumnOrder = () => {
    owner.value.store.commit("updateColumnOrder", instance.columnConfig.value);
  };
  return {
    columnId,
    realAlign,
    isSubColumn,
    realHeaderAlign,
    columnOrTableParent,
    setColumnWidth,
    setColumnForcedProps,
    setColumnRenders,
    getPropsData,
    getColumnElIndex,
    updateColumnOrder
  };
}
var defaultProps = {
  type: {
    type: String,
    default: "default"
  },
  label: String,
  className: String,
  labelClassName: String,
  property: String,
  prop: String,
  width: {
    type: [String, Number],
    default: ""
  },
  minWidth: {
    type: [String, Number],
    default: ""
  },
  renderHeader: Function,
  sortable: {
    type: [Boolean, String],
    default: false
  },
  sortMethod: Function,
  sortBy: [String, Function, Array],
  resizable: {
    type: Boolean,
    default: true
  },
  columnKey: String,
  align: String,
  headerAlign: String,
  showOverflowTooltip: {
    type: [Boolean, Object],
    default: void 0
  },
  tooltipFormatter: Function,
  fixed: [Boolean, String],
  formatter: Function,
  selectable: Function,
  reserveSelection: Boolean,
  filterMethod: Function,
  filteredValue: Array,
  filters: Array,
  filterPlacement: String,
  filterMultiple: {
    type: Boolean,
    default: true
  },
  filterClassName: String,
  index: [Number, Function],
  sortOrders: {
    type: Array,
    default: () => {
      return ["ascending", "descending", null];
    },
    validator: (val) => {
      return val.every((order) => ["ascending", "descending", null].includes(order));
    }
  }
};
let columnIdSeed = 1;
var ElTableColumn$1 = defineComponent({
  name: "ElTableColumn",
  components: {
    ElCheckbox
  },
  props: defaultProps,
  setup(props, { slots }) {
    const instance = getCurrentInstance();
    const columnConfig = ref({});
    const owner = computed(() => {
      let parent2 = instance.parent;
      while (parent2 && !parent2.tableId) {
        parent2 = parent2.parent;
      }
      return parent2;
    });
    useWatcher(owner, props);
    const {
      columnId,
      columnOrTableParent
    } = useRender(props, slots, owner);
    const parent = columnOrTableParent.value;
    columnId.value = `${parent.tableId || parent.columnId}_column_${columnIdSeed++}`;
    instance.columnId = columnId.value;
    instance.columnConfig = columnConfig;
    return;
  },
  render() {
    var _a, _b, _c;
    try {
      const renderDefault = (_b = (_a = this.$slots).default) == null ? void 0 : _b.call(_a, {
        row: {},
        column: {},
        $index: -1
      });
      const children = [];
      if (isArray(renderDefault)) {
        for (const childNode of renderDefault) {
          if (((_c = childNode.type) == null ? void 0 : _c.name) === "ElTableColumn" || childNode.shapeFlag & 2) {
            children.push(childNode);
          } else if (childNode.type === Fragment && isArray(childNode.children)) {
            childNode.children.forEach((vnode2) => {
              if ((vnode2 == null ? void 0 : vnode2.patchFlag) !== 1024 && !isString(vnode2 == null ? void 0 : vnode2.children)) {
                children.push(vnode2);
              }
            });
          }
        }
      }
      const vnode = h("div", children);
      return vnode;
    } catch (e) {
      return h("div", []);
    }
  }
});
const ElTable = withInstall(Table, {
  TableColumn: ElTableColumn$1
});
const ElTableColumn = withNoopInstall(ElTableColumn$1);
const uploadContextKey = Symbol("uploadContextKey");
const SCOPE$1 = "ElUpload";
class UploadAjaxError extends Error {
  constructor(message, status, method, url) {
    super(message);
    this.name = "UploadAjaxError";
    this.status = status;
    this.method = method;
    this.url = url;
  }
}
function getError(action, option, xhr) {
  let msg;
  if (xhr.response) {
    msg = `${xhr.response.error || xhr.response}`;
  } else if (xhr.responseText) {
    msg = `${xhr.responseText}`;
  } else {
    msg = `fail to ${option.method} ${action} ${xhr.status}`;
  }
  return new UploadAjaxError(msg, xhr.status, option.method, action);
}
function getBody(xhr) {
  const text = xhr.responseText || xhr.response;
  if (!text) {
    return text;
  }
  try {
    return JSON.parse(text);
  } catch (e) {
    return text;
  }
}
const ajaxUpload = (option) => {
  throwError(SCOPE$1, "XMLHttpRequest is undefined");
  const xhr = new (void 0)();
  const action = option.action;
  if (xhr.upload) {
    xhr.upload.addEventListener("progress", (evt) => {
      const progressEvt = evt;
      progressEvt.percent = evt.total > 0 ? evt.loaded / evt.total * 100 : 0;
      option.onProgress(progressEvt);
    });
  }
  const formData = new FormData();
  if (option.data) {
    for (const [key, value] of Object.entries(option.data)) {
      if (isArray(value) && value.length)
        formData.append(key, ...value);
      else
        formData.append(key, value);
    }
  }
  formData.append(option.filename, option.file, option.file.name);
  xhr.addEventListener("error", () => {
    option.onError(getError(action, option, xhr));
  });
  xhr.addEventListener("load", () => {
    if (xhr.status < 200 || xhr.status >= 300) {
      return option.onError(getError(action, option, xhr));
    }
    option.onSuccess(getBody(xhr));
  });
  xhr.open(option.method, action, true);
  if (option.withCredentials && "withCredentials" in xhr) {
    xhr.withCredentials = true;
  }
  const headers = option.headers || {};
  if (headers instanceof Headers) {
    headers.forEach((value, key) => xhr.setRequestHeader(key, value));
  } else {
    for (const [key, value] of Object.entries(headers)) {
      if (isNil(value))
        continue;
      xhr.setRequestHeader(key, String(value));
    }
  }
  xhr.send(formData);
  return xhr;
};
const uploadListTypes = ["text", "picture", "picture-card"];
let fileId = 1;
const genFileId = () => Date.now() + fileId++;
const uploadBaseProps = buildProps({
  action: {
    type: String,
    default: "#"
  },
  headers: {
    type: definePropType(Object)
  },
  method: {
    type: String,
    default: "post"
  },
  data: {
    type: definePropType([Object, Function, Promise]),
    default: () => mutable({})
  },
  multiple: Boolean,
  name: {
    type: String,
    default: "file"
  },
  drag: Boolean,
  withCredentials: Boolean,
  showFileList: {
    type: Boolean,
    default: true
  },
  accept: {
    type: String,
    default: ""
  },
  fileList: {
    type: definePropType(Array),
    default: () => mutable([])
  },
  autoUpload: {
    type: Boolean,
    default: true
  },
  listType: {
    type: String,
    values: uploadListTypes,
    default: "text"
  },
  httpRequest: {
    type: definePropType(Function),
    default: ajaxUpload
  },
  disabled: Boolean,
  limit: Number
});
const uploadProps = buildProps({
  ...uploadBaseProps,
  beforeUpload: {
    type: definePropType(Function),
    default: NOOP
  },
  beforeRemove: {
    type: definePropType(Function)
  },
  onRemove: {
    type: definePropType(Function),
    default: NOOP
  },
  onChange: {
    type: definePropType(Function),
    default: NOOP
  },
  onPreview: {
    type: definePropType(Function),
    default: NOOP
  },
  onSuccess: {
    type: definePropType(Function),
    default: NOOP
  },
  onProgress: {
    type: definePropType(Function),
    default: NOOP
  },
  onError: {
    type: definePropType(Function),
    default: NOOP
  },
  onExceed: {
    type: definePropType(Function),
    default: NOOP
  },
  crossorigin: {
    type: definePropType(String)
  }
});
const uploadListProps = buildProps({
  files: {
    type: definePropType(Array),
    default: () => mutable([])
  },
  disabled: {
    type: Boolean,
    default: false
  },
  handlePreview: {
    type: definePropType(Function),
    default: NOOP
  },
  listType: {
    type: String,
    values: uploadListTypes,
    default: "text"
  },
  crossorigin: {
    type: definePropType(String)
  }
});
const uploadListEmits = {
  remove: (file) => !!file
};
const __default__$3 = defineComponent({
  name: "ElUploadList"
});
const _sfc_main$i = /* @__PURE__ */ defineComponent({
  ...__default__$3,
  props: uploadListProps,
  emits: uploadListEmits,
  setup(__props, { emit }) {
    const props = __props;
    const { t } = useLocale();
    const nsUpload = useNamespace("upload");
    const nsIcon = useNamespace("icon");
    const nsList = useNamespace("list");
    const disabled = useFormDisabled();
    const focusing = ref(false);
    const containerKls = computed(() => [
      nsUpload.b("list"),
      nsUpload.bm("list", props.listType),
      nsUpload.is("disabled", props.disabled)
    ]);
    const handleRemove = (file) => {
      emit("remove", file);
    };
    return (_ctx, _cache) => {
      return openBlock(), createBlock(TransitionGroup, {
        tag: "ul",
        class: normalizeClass(unref(containerKls)),
        name: unref(nsList).b()
      }, {
        default: withCtx(() => [
          (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.files, (file, index) => {
            return openBlock(), createElementBlock("li", {
              key: file.uid || file.name,
              class: normalizeClass([
                unref(nsUpload).be("list", "item"),
                unref(nsUpload).is(file.status),
                { focusing: focusing.value }
              ]),
              tabindex: "0",
              onKeydown: withKeys(($event) => !unref(disabled) && handleRemove(file), ["delete"]),
              onFocus: ($event) => focusing.value = true,
              onBlur: ($event) => focusing.value = false,
              onClick: ($event) => focusing.value = false
            }, [
              renderSlot(_ctx.$slots, "default", {
                file,
                index
              }, () => [
                _ctx.listType === "picture" || file.status !== "uploading" && _ctx.listType === "picture-card" ? (openBlock(), createElementBlock("img", {
                  key: 0,
                  class: normalizeClass(unref(nsUpload).be("list", "item-thumbnail")),
                  src: file.url,
                  crossorigin: _ctx.crossorigin,
                  alt: ""
                }, null, 10, ["src", "crossorigin"])) : createCommentVNode("v-if", true),
                file.status === "uploading" || _ctx.listType !== "picture-card" ? (openBlock(), createElementBlock("div", {
                  key: 1,
                  class: normalizeClass(unref(nsUpload).be("list", "item-info"))
                }, [
                  createElementVNode("a", {
                    class: normalizeClass(unref(nsUpload).be("list", "item-name")),
                    onClick: withModifiers(($event) => _ctx.handlePreview(file), ["prevent"])
                  }, [
                    createVNode(unref(ElIcon), {
                      class: normalizeClass(unref(nsIcon).m("document"))
                    }, {
                      default: withCtx(() => [
                        createVNode(unref(document_default))
                      ]),
                      _: 1
                    }, 8, ["class"]),
                    createElementVNode("span", {
                      class: normalizeClass(unref(nsUpload).be("list", "item-file-name")),
                      title: file.name
                    }, toDisplayString(file.name), 11, ["title"])
                  ], 10, ["onClick"]),
                  file.status === "uploading" ? (openBlock(), createBlock(unref(ElProgress), {
                    key: 0,
                    type: _ctx.listType === "picture-card" ? "circle" : "line",
                    "stroke-width": _ctx.listType === "picture-card" ? 6 : 2,
                    percentage: Number(file.percentage),
                    style: normalizeStyle(_ctx.listType === "picture-card" ? "" : "margin-top: 0.5rem")
                  }, null, 8, ["type", "stroke-width", "percentage", "style"])) : createCommentVNode("v-if", true)
                ], 2)) : createCommentVNode("v-if", true),
                createElementVNode("label", {
                  class: normalizeClass(unref(nsUpload).be("list", "item-status-label"))
                }, [
                  _ctx.listType === "text" ? (openBlock(), createBlock(unref(ElIcon), {
                    key: 0,
                    class: normalizeClass([unref(nsIcon).m("upload-success"), unref(nsIcon).m("circle-check")])
                  }, {
                    default: withCtx(() => [
                      createVNode(unref(circle_check_default))
                    ]),
                    _: 1
                  }, 8, ["class"])) : ["picture-card", "picture"].includes(_ctx.listType) ? (openBlock(), createBlock(unref(ElIcon), {
                    key: 1,
                    class: normalizeClass([unref(nsIcon).m("upload-success"), unref(nsIcon).m("check")])
                  }, {
                    default: withCtx(() => [
                      createVNode(unref(check_default))
                    ]),
                    _: 1
                  }, 8, ["class"])) : createCommentVNode("v-if", true)
                ], 2),
                !unref(disabled) ? (openBlock(), createBlock(unref(ElIcon), {
                  key: 2,
                  class: normalizeClass(unref(nsIcon).m("close")),
                  onClick: ($event) => handleRemove(file)
                }, {
                  default: withCtx(() => [
                    createVNode(unref(close_default))
                  ]),
                  _: 2
                }, 1032, ["class", "onClick"])) : createCommentVNode("v-if", true),
                createCommentVNode(" Due to close btn only appears when li gets focused disappears after li gets blurred, thus keyboard navigation can never reach close btn"),
                createCommentVNode(" This is a bug which needs to be fixed "),
                createCommentVNode(" TODO: Fix the incorrect navigation interaction "),
                !unref(disabled) ? (openBlock(), createElementBlock("i", {
                  key: 3,
                  class: normalizeClass(unref(nsIcon).m("close-tip"))
                }, toDisplayString(unref(t)("el.upload.deleteTip")), 3)) : createCommentVNode("v-if", true),
                _ctx.listType === "picture-card" ? (openBlock(), createElementBlock("span", {
                  key: 4,
                  class: normalizeClass(unref(nsUpload).be("list", "item-actions"))
                }, [
                  createElementVNode("span", {
                    class: normalizeClass(unref(nsUpload).be("list", "item-preview")),
                    onClick: ($event) => _ctx.handlePreview(file)
                  }, [
                    createVNode(unref(ElIcon), {
                      class: normalizeClass(unref(nsIcon).m("zoom-in"))
                    }, {
                      default: withCtx(() => [
                        createVNode(unref(zoom_in_default))
                      ]),
                      _: 1
                    }, 8, ["class"])
                  ], 10, ["onClick"]),
                  !unref(disabled) ? (openBlock(), createElementBlock("span", {
                    key: 0,
                    class: normalizeClass(unref(nsUpload).be("list", "item-delete")),
                    onClick: ($event) => handleRemove(file)
                  }, [
                    createVNode(unref(ElIcon), {
                      class: normalizeClass(unref(nsIcon).m("delete"))
                    }, {
                      default: withCtx(() => [
                        createVNode(unref(delete_default))
                      ]),
                      _: 1
                    }, 8, ["class"])
                  ], 10, ["onClick"])) : createCommentVNode("v-if", true)
                ], 2)) : createCommentVNode("v-if", true)
              ])
            ], 42, ["onKeydown", "onFocus", "onBlur", "onClick"]);
          }), 128)),
          renderSlot(_ctx.$slots, "append")
        ]),
        _: 3
      }, 8, ["class", "name"]);
    };
  }
});
var UploadList = /* @__PURE__ */ _export_sfc$1(_sfc_main$i, [["__file", "upload-list.vue"]]);
const uploadDraggerProps = buildProps({
  disabled: {
    type: Boolean,
    default: false
  }
});
const uploadDraggerEmits = {
  file: (file) => isArray(file)
};
const COMPONENT_NAME = "ElUploadDrag";
const __default__$2 = defineComponent({
  name: COMPONENT_NAME
});
const _sfc_main$h = /* @__PURE__ */ defineComponent({
  ...__default__$2,
  props: uploadDraggerProps,
  emits: uploadDraggerEmits,
  setup(__props, { emit }) {
    const uploaderContext = inject(uploadContextKey);
    if (!uploaderContext) {
      throwError(COMPONENT_NAME, "usage: <el-upload><el-upload-dragger /></el-upload>");
    }
    const ns = useNamespace("upload");
    const dragover = ref(false);
    const disabled = useFormDisabled();
    const onDrop = (e) => {
      if (disabled.value)
        return;
      dragover.value = false;
      e.stopPropagation();
      const files = Array.from(e.dataTransfer.files);
      const items = e.dataTransfer.items || [];
      files.forEach((file, index) => {
        var _a;
        const item = items[index];
        const entry = (_a = item == null ? void 0 : item.webkitGetAsEntry) == null ? void 0 : _a.call(item);
        if (entry) {
          file.isDirectory = entry.isDirectory;
        }
      });
      emit("file", files);
    };
    const onDragover = () => {
      if (!disabled.value)
        dragover.value = true;
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass([unref(ns).b("dragger"), unref(ns).is("dragover", dragover.value)]),
        onDrop: withModifiers(onDrop, ["prevent"]),
        onDragover: withModifiers(onDragover, ["prevent"]),
        onDragleave: withModifiers(($event) => dragover.value = false, ["prevent"])
      }, [
        renderSlot(_ctx.$slots, "default")
      ], 42, ["onDrop", "onDragover", "onDragleave"]);
    };
  }
});
var UploadDragger = /* @__PURE__ */ _export_sfc$1(_sfc_main$h, [["__file", "upload-dragger.vue"]]);
const uploadContentProps = buildProps({
  ...uploadBaseProps,
  beforeUpload: {
    type: definePropType(Function),
    default: NOOP
  },
  onRemove: {
    type: definePropType(Function),
    default: NOOP
  },
  onStart: {
    type: definePropType(Function),
    default: NOOP
  },
  onSuccess: {
    type: definePropType(Function),
    default: NOOP
  },
  onProgress: {
    type: definePropType(Function),
    default: NOOP
  },
  onError: {
    type: definePropType(Function),
    default: NOOP
  },
  onExceed: {
    type: definePropType(Function),
    default: NOOP
  }
});
const __default__$1 = defineComponent({
  name: "ElUploadContent",
  inheritAttrs: false
});
const _sfc_main$g = /* @__PURE__ */ defineComponent({
  ...__default__$1,
  props: uploadContentProps,
  setup(__props, { expose }) {
    const props = __props;
    const ns = useNamespace("upload");
    const disabled = useFormDisabled();
    const requests = shallowRef({});
    const inputRef = shallowRef();
    const uploadFiles = (files) => {
      if (files.length === 0)
        return;
      const { autoUpload, limit, fileList, multiple, onStart, onExceed } = props;
      if (limit && fileList.length + files.length > limit) {
        onExceed(files, fileList);
        return;
      }
      if (!multiple) {
        files = files.slice(0, 1);
      }
      for (const file of files) {
        const rawFile = file;
        rawFile.uid = genFileId();
        onStart(rawFile);
        if (autoUpload)
          upload(rawFile);
      }
    };
    const upload = async (rawFile) => {
      inputRef.value.value = "";
      if (!props.beforeUpload) {
        return doUpload(rawFile);
      }
      let hookResult;
      let beforeData = {};
      try {
        const originData = props.data;
        const beforeUploadPromise = props.beforeUpload(rawFile);
        beforeData = isPlainObject(props.data) ? cloneDeep(props.data) : props.data;
        hookResult = await beforeUploadPromise;
        if (isPlainObject(props.data) && isEqual(originData, beforeData)) {
          beforeData = cloneDeep(props.data);
        }
      } catch (e) {
        hookResult = false;
      }
      if (hookResult === false) {
        props.onRemove(rawFile);
        return;
      }
      let file = rawFile;
      if (hookResult instanceof Blob) {
        if (hookResult instanceof File) {
          file = hookResult;
        } else {
          file = new File([hookResult], rawFile.name, {
            type: rawFile.type
          });
        }
      }
      doUpload(Object.assign(file, {
        uid: rawFile.uid
      }), beforeData);
    };
    const resolveData = async (data2, rawFile) => {
      if (isFunction$1(data2)) {
        return data2(rawFile);
      }
      return data2;
    };
    const doUpload = async (rawFile, beforeData) => {
      const {
        headers,
        data: data2,
        method,
        withCredentials,
        name: filename,
        action,
        onProgress,
        onSuccess,
        onError,
        httpRequest
      } = props;
      try {
        beforeData = await resolveData(beforeData != null ? beforeData : data2, rawFile);
      } catch (e) {
        props.onRemove(rawFile);
        return;
      }
      const { uid } = rawFile;
      const options = {
        headers: headers || {},
        withCredentials,
        file: rawFile,
        data: beforeData,
        method,
        filename,
        action,
        onProgress: (evt) => {
          onProgress(evt, rawFile);
        },
        onSuccess: (res) => {
          onSuccess(res, rawFile);
          delete requests.value[uid];
        },
        onError: (err) => {
          onError(err, rawFile);
          delete requests.value[uid];
        }
      };
      const request = httpRequest(options);
      requests.value[uid] = request;
      if (request instanceof Promise) {
        request.then(options.onSuccess, options.onError);
      }
    };
    const handleChange = (e) => {
      const files = e.target.files;
      if (!files)
        return;
      uploadFiles(Array.from(files));
    };
    const handleClick = () => {
      if (!disabled.value) {
        inputRef.value.value = "";
        inputRef.value.click();
      }
    };
    const handleKeydown = () => {
      handleClick();
    };
    const abort = (file) => {
      const _reqs = entriesOf(requests.value).filter(file ? ([uid]) => String(file.uid) === uid : () => true);
      _reqs.forEach(([uid, req]) => {
        if (req instanceof void 0)
          req.abort();
        delete requests.value[uid];
      });
    };
    expose({
      abort,
      upload
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass([
          unref(ns).b(),
          unref(ns).m(_ctx.listType),
          unref(ns).is("drag", _ctx.drag),
          unref(ns).is("disabled", unref(disabled))
        ]),
        tabindex: unref(disabled) ? "-1" : "0",
        onClick: handleClick,
        onKeydown: withKeys(withModifiers(handleKeydown, ["self"]), ["enter", "space"])
      }, [
        _ctx.drag ? (openBlock(), createBlock(UploadDragger, {
          key: 0,
          disabled: unref(disabled),
          onFile: uploadFiles
        }, {
          default: withCtx(() => [
            renderSlot(_ctx.$slots, "default")
          ]),
          _: 3
        }, 8, ["disabled"])) : renderSlot(_ctx.$slots, "default", { key: 1 }),
        createElementVNode("input", {
          ref_key: "inputRef",
          ref: inputRef,
          class: normalizeClass(unref(ns).e("input")),
          name: _ctx.name,
          disabled: unref(disabled),
          multiple: _ctx.multiple,
          accept: _ctx.accept,
          type: "file",
          onChange: handleChange,
          onClick: withModifiers(() => {
          }, ["stop"])
        }, null, 42, ["name", "disabled", "multiple", "accept", "onClick"])
      ], 42, ["tabindex", "onKeydown"]);
    };
  }
});
var UploadContent = /* @__PURE__ */ _export_sfc$1(_sfc_main$g, [["__file", "upload-content.vue"]]);
const SCOPE = "ElUpload";
const revokeFileObjectURL = (file) => {
  var _a;
  if ((_a = file.url) == null ? void 0 : _a.startsWith("blob:")) {
    URL.revokeObjectURL(file.url);
  }
};
const useHandlers = (props, uploadRef) => {
  const uploadFiles = useVModel(props, "fileList", void 0, { passive: true });
  const getFile = (rawFile) => uploadFiles.value.find((file) => file.uid === rawFile.uid);
  function abort(file) {
    var _a;
    (_a = uploadRef.value) == null ? void 0 : _a.abort(file);
  }
  function clearFiles(states = ["ready", "uploading", "success", "fail"]) {
    uploadFiles.value = uploadFiles.value.filter((row) => !states.includes(row.status));
  }
  function removeFile(file) {
    uploadFiles.value = uploadFiles.value.filter((uploadFile) => uploadFile.uid !== file.uid);
  }
  const handleError = (err, rawFile) => {
    const file = getFile(rawFile);
    if (!file)
      return;
    console.error(err);
    file.status = "fail";
    removeFile(file);
    props.onError(err, file, uploadFiles.value);
    props.onChange(file, uploadFiles.value);
  };
  const handleProgress = (evt, rawFile) => {
    const file = getFile(rawFile);
    if (!file)
      return;
    props.onProgress(evt, file, uploadFiles.value);
    file.status = "uploading";
    file.percentage = Math.round(evt.percent);
  };
  const handleSuccess = (response, rawFile) => {
    const file = getFile(rawFile);
    if (!file)
      return;
    file.status = "success";
    file.response = response;
    props.onSuccess(response, file, uploadFiles.value);
    props.onChange(file, uploadFiles.value);
  };
  const handleStart = (file) => {
    if (isNil(file.uid))
      file.uid = genFileId();
    const uploadFile = {
      name: file.name,
      percentage: 0,
      status: "ready",
      size: file.size,
      raw: file,
      uid: file.uid
    };
    if (props.listType === "picture-card" || props.listType === "picture") {
      try {
        uploadFile.url = URL.createObjectURL(file);
      } catch (err) {
        debugWarn(SCOPE, err.message);
        props.onError(err, uploadFile, uploadFiles.value);
      }
    }
    uploadFiles.value = [...uploadFiles.value, uploadFile];
    props.onChange(uploadFile, uploadFiles.value);
  };
  const handleRemove = async (file) => {
    const uploadFile = file instanceof File ? getFile(file) : file;
    if (!uploadFile)
      throwError(SCOPE, "file to be removed not found");
    const doRemove = (file2) => {
      abort(file2);
      removeFile(file2);
      props.onRemove(file2, uploadFiles.value);
      revokeFileObjectURL(file2);
    };
    if (props.beforeRemove) {
      const before = await props.beforeRemove(uploadFile, uploadFiles.value);
      if (before !== false)
        doRemove(uploadFile);
    } else {
      doRemove(uploadFile);
    }
  };
  function submit() {
    uploadFiles.value.filter(({ status }) => status === "ready").forEach(({ raw }) => {
      var _a;
      return raw && ((_a = uploadRef.value) == null ? void 0 : _a.upload(raw));
    });
  }
  watch(() => props.listType, (val) => {
    if (val !== "picture-card" && val !== "picture") {
      return;
    }
    uploadFiles.value = uploadFiles.value.map((file) => {
      const { raw, url } = file;
      if (!url && raw) {
        try {
          file.url = URL.createObjectURL(raw);
        } catch (err) {
          props.onError(err, file, uploadFiles.value);
        }
      }
      return file;
    });
  });
  watch(uploadFiles, (files) => {
    for (const file of files) {
      file.uid || (file.uid = genFileId());
      file.status || (file.status = "success");
    }
  }, { immediate: true, deep: true });
  return {
    uploadFiles,
    abort,
    clearFiles,
    handleError,
    handleProgress,
    handleStart,
    handleSuccess,
    handleRemove,
    submit,
    revokeFileObjectURL
  };
};
const __default__ = defineComponent({
  name: "ElUpload"
});
const _sfc_main$f = /* @__PURE__ */ defineComponent({
  ...__default__,
  props: uploadProps,
  setup(__props, { expose }) {
    const props = __props;
    const disabled = useFormDisabled();
    const uploadRef = shallowRef();
    const {
      abort,
      submit,
      clearFiles,
      uploadFiles,
      handleStart,
      handleError,
      handleRemove,
      handleSuccess,
      handleProgress
    } = useHandlers(props, uploadRef);
    const isPictureCard = computed(() => props.listType === "picture-card");
    const uploadContentProps2 = computed(() => ({
      ...props,
      fileList: uploadFiles.value,
      onStart: handleStart,
      onProgress: handleProgress,
      onSuccess: handleSuccess,
      onError: handleError,
      onRemove: handleRemove
    }));
    provide(uploadContextKey, {
      accept: toRef(props, "accept")
    });
    expose({
      abort,
      submit,
      clearFiles,
      handleStart,
      handleRemove
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", null, [
        unref(isPictureCard) && _ctx.showFileList ? (openBlock(), createBlock(UploadList, {
          key: 0,
          disabled: unref(disabled),
          "list-type": _ctx.listType,
          files: unref(uploadFiles),
          crossorigin: _ctx.crossorigin,
          "handle-preview": _ctx.onPreview,
          onRemove: unref(handleRemove)
        }, createSlots({
          append: withCtx(() => [
            createVNode(UploadContent, mergeProps({
              ref_key: "uploadRef",
              ref: uploadRef
            }, unref(uploadContentProps2)), {
              default: withCtx(() => [
                _ctx.$slots.trigger ? renderSlot(_ctx.$slots, "trigger", { key: 0 }) : createCommentVNode("v-if", true),
                !_ctx.$slots.trigger && _ctx.$slots.default ? renderSlot(_ctx.$slots, "default", { key: 1 }) : createCommentVNode("v-if", true)
              ]),
              _: 3
            }, 16)
          ]),
          _: 2
        }, [
          _ctx.$slots.file ? {
            name: "default",
            fn: withCtx(({ file, index }) => [
              renderSlot(_ctx.$slots, "file", {
                file,
                index
              })
            ])
          } : void 0
        ]), 1032, ["disabled", "list-type", "files", "crossorigin", "handle-preview", "onRemove"])) : createCommentVNode("v-if", true),
        !unref(isPictureCard) || unref(isPictureCard) && !_ctx.showFileList ? (openBlock(), createBlock(UploadContent, mergeProps({
          key: 1,
          ref_key: "uploadRef",
          ref: uploadRef
        }, unref(uploadContentProps2)), {
          default: withCtx(() => [
            _ctx.$slots.trigger ? renderSlot(_ctx.$slots, "trigger", { key: 0 }) : createCommentVNode("v-if", true),
            !_ctx.$slots.trigger && _ctx.$slots.default ? renderSlot(_ctx.$slots, "default", { key: 1 }) : createCommentVNode("v-if", true)
          ]),
          _: 3
        }, 16)) : createCommentVNode("v-if", true),
        _ctx.$slots.trigger ? renderSlot(_ctx.$slots, "default", { key: 2 }) : createCommentVNode("v-if", true),
        renderSlot(_ctx.$slots, "tip"),
        !unref(isPictureCard) && _ctx.showFileList ? (openBlock(), createBlock(UploadList, {
          key: 3,
          disabled: unref(disabled),
          "list-type": _ctx.listType,
          files: unref(uploadFiles),
          crossorigin: _ctx.crossorigin,
          "handle-preview": _ctx.onPreview,
          onRemove: unref(handleRemove)
        }, createSlots({
          _: 2
        }, [
          _ctx.$slots.file ? {
            name: "default",
            fn: withCtx(({ file, index }) => [
              renderSlot(_ctx.$slots, "file", {
                file,
                index
              })
            ])
          } : void 0
        ]), 1032, ["disabled", "list-type", "files", "crossorigin", "handle-preview", "onRemove"])) : createCommentVNode("v-if", true)
      ]);
    };
  }
});
var Upload = /* @__PURE__ */ _export_sfc$1(_sfc_main$f, [["__file", "upload.vue"]]);
const ElUpload = withInstall(Upload);
const _sfc_main$e = /* @__PURE__ */ defineComponent({
  __name: "BackofficeAdminTab",
  __ssrInlineRender: true,
  setup(__props) {
    const { $axios } = useNuxtApp();
    const loadingBtn = ref(false);
    const form = reactive({
      password: "",
      passwordConfirmation: ""
    });
    const ruleFormRef = ref();
    const rules = reactive({
      password: [
        { required: true, message: "Unesite lozinku", trigger: "blur" },
        {
          validator: (rule, value, callback) => {
            if (!validatePassword(value))
              callback(
                new Error(
                  "Morate koristiti mala i velika slova, brojeve i specijalni znak"
                )
              );
            else callback();
          },
          trigger: "change"
        }
      ],
      passwordConfirmation: [
        { required: true, message: "Unesite potvrdu lozinke", trigger: "blur" },
        {
          validator: (rule, value, callback) => {
            if (!isValuesEqual(value, form.password))
              callback(new Error("Lozinke se ne podudaraju"));
            else callback();
          },
          trigger: "change"
        }
      ]
    });
    async function handleEdit(formEl) {
      if (!formEl) return;
      await formEl.validate(async (valid) => {
        if (valid) {
          loadingBtn.value = true;
          try {
            await $axios.put("/users/user", { password: form.password });
            ElNotification({
              type: "success",
              message: "Uspje\u0161no ste promijenili lozinku.",
              duration: 3e3
            });
          } catch (error) {
            console.error("API Error:", error);
          } finally {
            loadingBtn.value = false;
          }
        }
      });
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ElRow = ElRow;
      const _component_ElForm = ElForm;
      const _component_ElFormItem = ElFormItem;
      const _component_ElInput = ElInput;
      const _component_ElButton = ElButton;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "backoffice-page" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_ElRow, { justify: "center" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h3 class="color-primary"${_scopeId}>Admin</h3>`);
          } else {
            return [
              createVNode("h3", { class: "color-primary" }, "Admin")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_ElRow, { justify: "center" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="color-primary"${_scopeId}><b${_scopeId}>Promijeni lozinku</b></span>`);
          } else {
            return [
              createVNode("span", { class: "color-primary" }, [
                createVNode("b", null, "Promijeni lozinku")
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_ElForm, {
        "label-position": _ctx.$viewport.isLessThan("tablet") ? "top" : "left",
        "require-asterisk-position": "right",
        ref_key: "ruleFormRef",
        ref: ruleFormRef,
        class: "form",
        model: unref(form),
        rules: unref(rules),
        "label-width": "auto",
        "status-icon": ""
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_ElFormItem, {
              label: "Lozinka",
              prop: "password"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_ElInput, {
                    modelValue: unref(form).password,
                    "onUpdate:modelValue": ($event) => unref(form).password = $event,
                    type: "password",
                    placeholder: "********",
                    "show-password": "",
                    class: "input-width"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_ElInput, {
                      modelValue: unref(form).password,
                      "onUpdate:modelValue": ($event) => unref(form).password = $event,
                      type: "password",
                      placeholder: "********",
                      "show-password": "",
                      class: "input-width"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_ElFormItem, {
              label: "Potvrda lozinke",
              prop: "passwordConfirmation",
              class: "mt-36"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_ElInput, {
                    modelValue: unref(form).passwordConfirmation,
                    "onUpdate:modelValue": ($event) => unref(form).passwordConfirmation = $event,
                    type: "password",
                    placeholder: "********",
                    "show-password": "",
                    class: "input-width"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_ElInput, {
                      modelValue: unref(form).passwordConfirmation,
                      "onUpdate:modelValue": ($event) => unref(form).passwordConfirmation = $event,
                      type: "password",
                      placeholder: "********",
                      "show-password": "",
                      class: "input-width"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_ElRow, { justify: "center" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_ElButton, {
                    type: "primary",
                    plain: "",
                    onClick: ($event) => handleEdit(unref(ruleFormRef)),
                    loading: unref(loadingBtn)
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Promijeni `);
                      } else {
                        return [
                          createTextVNode("Promijeni ")
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
                      onClick: ($event) => handleEdit(unref(ruleFormRef)),
                      loading: unref(loadingBtn)
                    }, {
                      default: withCtx(() => [
                        createTextVNode("Promijeni ")
                      ]),
                      _: 1
                    }, 8, ["onClick", "loading"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_ElFormItem, {
                label: "Lozinka",
                prop: "password"
              }, {
                default: withCtx(() => [
                  createVNode(_component_ElInput, {
                    modelValue: unref(form).password,
                    "onUpdate:modelValue": ($event) => unref(form).password = $event,
                    type: "password",
                    placeholder: "********",
                    "show-password": "",
                    class: "input-width"
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                ]),
                _: 1
              }),
              createVNode(_component_ElFormItem, {
                label: "Potvrda lozinke",
                prop: "passwordConfirmation",
                class: "mt-36"
              }, {
                default: withCtx(() => [
                  createVNode(_component_ElInput, {
                    modelValue: unref(form).passwordConfirmation,
                    "onUpdate:modelValue": ($event) => unref(form).passwordConfirmation = $event,
                    type: "password",
                    placeholder: "********",
                    "show-password": "",
                    class: "input-width"
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                ]),
                _: 1
              }),
              createVNode(_component_ElRow, { justify: "center" }, {
                default: withCtx(() => [
                  createVNode(_component_ElButton, {
                    type: "primary",
                    plain: "",
                    onClick: ($event) => handleEdit(unref(ruleFormRef)),
                    loading: unref(loadingBtn)
                  }, {
                    default: withCtx(() => [
                      createTextVNode("Promijeni ")
                    ]),
                    _: 1
                  }, 8, ["onClick", "loading"])
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$e = _sfc_main$e.setup;
_sfc_main$e.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/backoffice/tabs/BackofficeAdminTab.vue");
  return _sfc_setup$e ? _sfc_setup$e(props, ctx) : void 0;
};
function debounce(func, wait) {
  let timeout;
  return function(...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, args), wait);
  };
}
const _sfc_main$d = /* @__PURE__ */ defineComponent({
  __name: "BackofficePortalCategoriesTab",
  __ssrInlineRender: true,
  setup(__props) {
    const { $axios } = useNuxtApp();
    const isLoading = ref({
      activeCategories: true,
      deletedCategories: true,
      button: false
    });
    const activeCategories = ref();
    const deletedCategories = ref();
    const searchValues = ref({
      active: "",
      deleted: ""
    });
    const dialog = ref({
      isOpened: false,
      type: "create",
      item: void 0
    });
    const form = reactive({
      name: "",
      parentId: null
    });
    const ruleFormRef = ref();
    const rules = reactive({
      name: [
        { required: true, message: "Unesite naziv kategorije", trigger: "blur" }
      ]
    });
    function getAllCategories() {
      getActivePortalCategories();
      getDeletedPortalCategories();
    }
    function openDialog(type, item) {
      if (item) {
        form.name = String(item.name);
        form.parentId = item.parentId ? String(item.parentId) : null;
      }
      dialog.value = {
        isOpened: true,
        type,
        item
      };
    }
    function handleActiveSearch() {
      debounceActiveSearch();
    }
    const debounceActiveSearch = debounce(getActivePortalCategories, 300);
    async function getActivePortalCategories() {
      isLoading.value.activeCategories = true;
      try {
        const response = await $axios.get(
          `/portal-category?withoutHierarchy=true&search=${searchValues.value.active}`
        );
        activeCategories.value = response.data;
      } catch (error) {
        console.error("API Error:", error);
      } finally {
        isLoading.value.activeCategories = false;
      }
    }
    function handleDeletedSearch() {
      debounceDeletedSearch();
    }
    const debounceDeletedSearch = debounce(getDeletedPortalCategories, 300);
    async function getDeletedPortalCategories() {
      isLoading.value.deletedCategories = true;
      try {
        const response = await $axios.get(
          `/portal-category?deletedOnly=true&search=${searchValues.value.deleted}`
        );
        deletedCategories.value = response.data;
      } catch (error) {
        console.error("API Error:", error);
      } finally {
        isLoading.value.deletedCategories = false;
      }
    }
    function showSuccessMessage(message) {
    }
    function handleSubmitButton(formEl) {
      if (dialog.value.type === "create") handleCreate(formEl);
      else if (dialog.value.type === "edit") handleEdit(formEl);
      else if (dialog.value.type === "delete") handleDelete();
      else if (dialog.value.type === "unarchive") handleUnarchive();
    }
    function handleCloseDialog() {
      form.name = "";
      form.parentId = null;
      dialog.value.isOpened = false;
    }
    async function handleCreate(formEl) {
      if (!formEl) return;
      await formEl.validate(async (valid) => {
        if (valid) {
          isLoading.value.button = true;
          try {
            await $axios.post("/portal-category", form);
            getAllCategories();
            handleCloseDialog();
            showSuccessMessage("Uspje\u0161no ste dodali novu kategoriju.");
          } catch (error) {
            console.error("API Error:", error);
          } finally {
            isLoading.value.button = false;
          }
        }
      });
    }
    async function handleEdit(formEl) {
      if (!formEl) return;
      await formEl.validate(async (valid) => {
        var _a;
        if (valid) {
          isLoading.value.button = true;
          try {
            await $axios.put(`/portal-category/${(_a = dialog.value.item) == null ? void 0 : _a.id}`, form);
            getAllCategories();
            handleCloseDialog();
            showSuccessMessage("Uspje\u0161no ste uredili kategoriju.");
          } catch (error) {
            console.error("API Error:", error);
          } finally {
            isLoading.value.button = false;
          }
        }
      });
    }
    async function handleDelete() {
      var _a;
      isLoading.value.button = true;
      try {
        await $axios.delete(`/portal-category/${(_a = dialog.value.item) == null ? void 0 : _a.id}`);
        getAllCategories();
        handleCloseDialog();
        showSuccessMessage("Uspje\u0161no ste obrisali kategoriju.");
      } catch (error) {
        console.error("API Error:", error);
      } finally {
        isLoading.value.button = false;
      }
    }
    async function handleUnarchive() {
      var _a;
      isLoading.value.button = true;
      try {
        await $axios.patch(`/portal-category/${(_a = dialog.value.item) == null ? void 0 : _a.id}/unarchive`);
        getAllCategories();
        handleCloseDialog();
        showSuccessMessage("Uspje\u0161no ste vratili obrisanu kategoriju.");
      } catch (error) {
        console.error("API Error:", error);
      } finally {
        isLoading.value.button = false;
      }
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ElRow = ElRow;
      const _component_ElCol = ElCol;
      const _component_ElButton = ElButton;
      const _component_ElIcon = ElIcon;
      const _component_ElInput = ElInput;
      const _component_ElTable = ElTable;
      const _component_ElTableColumn = ElTableColumn;
      const _component_ElDialog = ElDialog;
      const _component_ElForm = ElForm;
      const _component_ElFormItem = ElFormItem;
      const _component_ElSelect = ElSelect;
      const _component_ElOption = ElOption;
      const _directive_loading = vLoading;
      _push(`<!--[--><div class="backoffice-page">`);
      _push(ssrRenderComponent(_component_ElRow, {
        justify: "space-between",
        align: "middle",
        class: "w-100"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_ElCol, { span: 6 }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_ElCol, {
              span: 12,
              align: "center"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<h3 class="color-primary"${_scopeId2}>Portal kategorije</h3>`);
                } else {
                  return [
                    createVNode("h3", { class: "color-primary" }, "Portal kategorije")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_ElCol, {
              span: 6,
              align: "end"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_ElButton, {
                    type: "primary",
                    plain: "",
                    onClick: ($event) => openDialog("create")
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_ElIcon, { size: "24" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(unref(circle_plus_filled_default), null, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(unref(circle_plus_filled_default))
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(`<span class="ml-8"${_scopeId3}>Dodaj kategoriju</span>`);
                      } else {
                        return [
                          createVNode(_component_ElIcon, { size: "24" }, {
                            default: withCtx(() => [
                              createVNode(unref(circle_plus_filled_default))
                            ]),
                            _: 1
                          }),
                          createVNode("span", { class: "ml-8" }, "Dodaj kategoriju")
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
                      onClick: ($event) => openDialog("create")
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_ElIcon, { size: "24" }, {
                          default: withCtx(() => [
                            createVNode(unref(circle_plus_filled_default))
                          ]),
                          _: 1
                        }),
                        createVNode("span", { class: "ml-8" }, "Dodaj kategoriju")
                      ]),
                      _: 1
                    }, 8, ["onClick"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_ElCol, { span: 6 }),
              createVNode(_component_ElCol, {
                span: 12,
                align: "center"
              }, {
                default: withCtx(() => [
                  createVNode("h3", { class: "color-primary" }, "Portal kategorije")
                ]),
                _: 1
              }),
              createVNode(_component_ElCol, {
                span: 6,
                align: "end"
              }, {
                default: withCtx(() => [
                  createVNode(_component_ElButton, {
                    type: "primary",
                    plain: "",
                    onClick: ($event) => openDialog("create")
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_ElIcon, { size: "24" }, {
                        default: withCtx(() => [
                          createVNode(unref(circle_plus_filled_default))
                        ]),
                        _: 1
                      }),
                      createVNode("span", { class: "ml-8" }, "Dodaj kategoriju")
                    ]),
                    _: 1
                  }, 8, ["onClick"])
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
        align: "middle",
        class: "w-100"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_ElCol, {
              span: 8,
              offset: 8,
              align: "center"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span class="color-primary"${_scopeId2}><b${_scopeId2}>Aktivne kategorije</b></span>`);
                } else {
                  return [
                    createVNode("span", { class: "color-primary" }, [
                      createVNode("b", null, "Aktivne kategorije")
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_ElCol, {
              span: 8,
              align: "end"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_ElInput, {
                    modelValue: unref(searchValues).active,
                    "onUpdate:modelValue": ($event) => unref(searchValues).active = $event,
                    type: "text",
                    placeholder: "Pretra\u017Eite naziv...",
                    class: "max-w-250",
                    "prefix-icon": unref(search_default),
                    onInput: handleActiveSearch
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_ElInput, {
                      modelValue: unref(searchValues).active,
                      "onUpdate:modelValue": ($event) => unref(searchValues).active = $event,
                      type: "text",
                      placeholder: "Pretra\u017Eite naziv...",
                      class: "max-w-250",
                      "prefix-icon": unref(search_default),
                      onInput: handleActiveSearch
                    }, null, 8, ["modelValue", "onUpdate:modelValue", "prefix-icon"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_ElCol, {
                span: 8,
                offset: 8,
                align: "center"
              }, {
                default: withCtx(() => [
                  createVNode("span", { class: "color-primary" }, [
                    createVNode("b", null, "Aktivne kategorije")
                  ])
                ]),
                _: 1
              }),
              createVNode(_component_ElCol, {
                span: 8,
                align: "end"
              }, {
                default: withCtx(() => [
                  createVNode(_component_ElInput, {
                    modelValue: unref(searchValues).active,
                    "onUpdate:modelValue": ($event) => unref(searchValues).active = $event,
                    type: "text",
                    placeholder: "Pretra\u017Eite naziv...",
                    class: "max-w-250",
                    "prefix-icon": unref(search_default),
                    onInput: handleActiveSearch
                  }, null, 8, ["modelValue", "onUpdate:modelValue", "prefix-icon"])
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_ElTable, mergeProps({
        data: unref(activeCategories),
        stripe: "",
        "empty-text": "Nema dostupnih podataka"
      }, ssrGetDirectiveProps(_ctx, _directive_loading, unref(isLoading).activeCategories)), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_ElTableColumn, {
              label: "Naziv",
              prop: "name"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_ElTableColumn, {
              label: "Nadkategorija",
              prop: "parent.name"
            }, {
              default: withCtx((items, _push3, _parent3, _scopeId2) => {
                var _a, _b;
                if (_push3) {
                  _push3(`${ssrInterpolate(((_a = items.row.parent) == null ? void 0 : _a.name) || "-")}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(((_b = items.row.parent) == null ? void 0 : _b.name) || "-"), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_ElTableColumn, {
              label: "Akcije",
              align: "center",
              width: "148"
            }, {
              default: withCtx((items, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_ElButton, {
                    type: "primary",
                    plain: "",
                    onClick: ($event) => openDialog("edit", items.row)
                  }, {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_ElIcon, { size: "24" }, {
                          default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(unref(edit_default), null, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(unref(edit_default))
                              ];
                            }
                          }),
                          _: 2
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_ElIcon, { size: "24" }, {
                            default: withCtx(() => [
                              createVNode(unref(edit_default))
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_ElButton, {
                    type: "danger",
                    plain: "",
                    onClick: ($event) => openDialog("delete", items.row)
                  }, {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_ElIcon, { size: "24" }, {
                          default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(unref(delete_filled_default), null, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(unref(delete_filled_default))
                              ];
                            }
                          }),
                          _: 2
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_ElIcon, { size: "24" }, {
                            default: withCtx(() => [
                              createVNode(unref(delete_filled_default))
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_ElButton, {
                      type: "primary",
                      plain: "",
                      onClick: ($event) => openDialog("edit", items.row)
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_ElIcon, { size: "24" }, {
                          default: withCtx(() => [
                            createVNode(unref(edit_default))
                          ]),
                          _: 1
                        })
                      ]),
                      _: 2
                    }, 1032, ["onClick"]),
                    createVNode(_component_ElButton, {
                      type: "danger",
                      plain: "",
                      onClick: ($event) => openDialog("delete", items.row)
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_ElIcon, { size: "24" }, {
                          default: withCtx(() => [
                            createVNode(unref(delete_filled_default))
                          ]),
                          _: 1
                        })
                      ]),
                      _: 2
                    }, 1032, ["onClick"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_ElTableColumn, {
                label: "Naziv",
                prop: "name"
              }),
              createVNode(_component_ElTableColumn, {
                label: "Nadkategorija",
                prop: "parent.name"
              }, {
                default: withCtx((items) => {
                  var _a;
                  return [
                    createTextVNode(toDisplayString(((_a = items.row.parent) == null ? void 0 : _a.name) || "-"), 1)
                  ];
                }),
                _: 1
              }),
              createVNode(_component_ElTableColumn, {
                label: "Akcije",
                align: "center",
                width: "148"
              }, {
                default: withCtx((items) => [
                  createVNode(_component_ElButton, {
                    type: "primary",
                    plain: "",
                    onClick: ($event) => openDialog("edit", items.row)
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_ElIcon, { size: "24" }, {
                        default: withCtx(() => [
                          createVNode(unref(edit_default))
                        ]),
                        _: 1
                      })
                    ]),
                    _: 2
                  }, 1032, ["onClick"]),
                  createVNode(_component_ElButton, {
                    type: "danger",
                    plain: "",
                    onClick: ($event) => openDialog("delete", items.row)
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_ElIcon, { size: "24" }, {
                        default: withCtx(() => [
                          createVNode(unref(delete_filled_default))
                        ]),
                        _: 1
                      })
                    ]),
                    _: 2
                  }, 1032, ["onClick"])
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
        align: "middle",
        class: "w-100"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_ElCol, {
              span: 8,
              offset: 8,
              align: "center"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span class="color-primary"${_scopeId2}><b${_scopeId2}>Obrisane kategorije</b></span>`);
                } else {
                  return [
                    createVNode("span", { class: "color-primary" }, [
                      createVNode("b", null, "Obrisane kategorije")
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_ElCol, {
              span: 8,
              align: "end"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_ElInput, {
                    modelValue: unref(searchValues).deleted,
                    "onUpdate:modelValue": ($event) => unref(searchValues).deleted = $event,
                    type: "text",
                    placeholder: "Pretra\u017Eite naziv...",
                    class: "max-w-250",
                    "prefix-icon": unref(search_default),
                    onInput: handleDeletedSearch
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_ElInput, {
                      modelValue: unref(searchValues).deleted,
                      "onUpdate:modelValue": ($event) => unref(searchValues).deleted = $event,
                      type: "text",
                      placeholder: "Pretra\u017Eite naziv...",
                      class: "max-w-250",
                      "prefix-icon": unref(search_default),
                      onInput: handleDeletedSearch
                    }, null, 8, ["modelValue", "onUpdate:modelValue", "prefix-icon"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_ElCol, {
                span: 8,
                offset: 8,
                align: "center"
              }, {
                default: withCtx(() => [
                  createVNode("span", { class: "color-primary" }, [
                    createVNode("b", null, "Obrisane kategorije")
                  ])
                ]),
                _: 1
              }),
              createVNode(_component_ElCol, {
                span: 8,
                align: "end"
              }, {
                default: withCtx(() => [
                  createVNode(_component_ElInput, {
                    modelValue: unref(searchValues).deleted,
                    "onUpdate:modelValue": ($event) => unref(searchValues).deleted = $event,
                    type: "text",
                    placeholder: "Pretra\u017Eite naziv...",
                    class: "max-w-250",
                    "prefix-icon": unref(search_default),
                    onInput: handleDeletedSearch
                  }, null, 8, ["modelValue", "onUpdate:modelValue", "prefix-icon"])
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_ElTable, mergeProps({
        data: unref(deletedCategories),
        stripe: "",
        "empty-text": "Nema dostupnih podataka"
      }, ssrGetDirectiveProps(_ctx, _directive_loading, unref(isLoading).deletedCategories)), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_ElTableColumn, {
              label: "Naziv",
              prop: "name"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_ElTableColumn, {
              label: "Nadkategorija",
              prop: "parent.name"
            }, {
              default: withCtx((items, _push3, _parent3, _scopeId2) => {
                var _a, _b;
                if (_push3) {
                  _push3(`${ssrInterpolate(((_a = items.row.parent) == null ? void 0 : _a.name) || "-")}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(((_b = items.row.parent) == null ? void 0 : _b.name) || "-"), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_ElTableColumn, {
              label: "Akcije",
              align: "center",
              width: "80"
            }, {
              default: withCtx((items, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_ElButton, {
                    type: "primary",
                    plain: "",
                    onClick: ($event) => openDialog("unarchive", items.row)
                  }, {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_ElIcon, { size: "24" }, {
                          default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(unref(refresh_left_default), null, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(unref(refresh_left_default))
                              ];
                            }
                          }),
                          _: 2
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_ElIcon, { size: "24" }, {
                            default: withCtx(() => [
                              createVNode(unref(refresh_left_default))
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_ElButton, {
                      type: "primary",
                      plain: "",
                      onClick: ($event) => openDialog("unarchive", items.row)
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_ElIcon, { size: "24" }, {
                          default: withCtx(() => [
                            createVNode(unref(refresh_left_default))
                          ]),
                          _: 1
                        })
                      ]),
                      _: 2
                    }, 1032, ["onClick"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_ElTableColumn, {
                label: "Naziv",
                prop: "name"
              }),
              createVNode(_component_ElTableColumn, {
                label: "Nadkategorija",
                prop: "parent.name"
              }, {
                default: withCtx((items) => {
                  var _a;
                  return [
                    createTextVNode(toDisplayString(((_a = items.row.parent) == null ? void 0 : _a.name) || "-"), 1)
                  ];
                }),
                _: 1
              }),
              createVNode(_component_ElTableColumn, {
                label: "Akcije",
                align: "center",
                width: "80"
              }, {
                default: withCtx((items) => [
                  createVNode(_component_ElButton, {
                    type: "primary",
                    plain: "",
                    onClick: ($event) => openDialog("unarchive", items.row)
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_ElIcon, { size: "24" }, {
                        default: withCtx(() => [
                          createVNode(unref(refresh_left_default))
                        ]),
                        _: 1
                      })
                    ]),
                    _: 2
                  }, 1032, ["onClick"])
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(_component_ElDialog, {
        modelValue: unref(dialog).isOpened,
        "onUpdate:modelValue": ($event) => unref(dialog).isOpened = $event,
        "close-on-click-modal": false,
        "destroy-on-close": "",
        fullscreen: _ctx.$viewport.isLessOrEquals("tablet") ? true : false,
        onClose: handleCloseDialog
      }, {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_ElRow, { justify: "center" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<h3 class="color-primary"${_scopeId2}>`);
                  if (unref(dialog).type === "create") {
                    _push3(`<span${_scopeId2}>Dodaj novu kategoriju</span>`);
                  } else if (unref(dialog).type === "edit") {
                    _push3(`<span${_scopeId2}>Uredi kategoriju</span>`);
                  } else if (unref(dialog).type === "unarchive") {
                    _push3(`<span${_scopeId2}>Vrati kategoriju</span>`);
                  } else {
                    _push3(`<span${_scopeId2}>Obri\u0161i kategoriju</span>`);
                  }
                  _push3(`</h3>`);
                } else {
                  return [
                    createVNode("h3", { class: "color-primary" }, [
                      unref(dialog).type === "create" ? (openBlock(), createBlock("span", { key: 0 }, "Dodaj novu kategoriju")) : unref(dialog).type === "edit" ? (openBlock(), createBlock("span", { key: 1 }, "Uredi kategoriju")) : unref(dialog).type === "unarchive" ? (openBlock(), createBlock("span", { key: 2 }, "Vrati kategoriju")) : (openBlock(), createBlock("span", { key: 3 }, "Obri\u0161i kategoriju"))
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_ElRow, { justify: "center" }, {
                default: withCtx(() => [
                  createVNode("h3", { class: "color-primary" }, [
                    unref(dialog).type === "create" ? (openBlock(), createBlock("span", { key: 0 }, "Dodaj novu kategoriju")) : unref(dialog).type === "edit" ? (openBlock(), createBlock("span", { key: 1 }, "Uredi kategoriju")) : unref(dialog).type === "unarchive" ? (openBlock(), createBlock("span", { key: 2 }, "Vrati kategoriju")) : (openBlock(), createBlock("span", { key: 3 }, "Obri\u0161i kategoriju"))
                  ])
                ]),
                _: 1
              })
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (unref(dialog).type === "create" || unref(dialog).type === "edit") {
              _push2(ssrRenderComponent(_component_ElRow, { justify: "center" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_ElForm, {
                      "label-position": _ctx.$viewport.isLessThan("tablet") ? "top" : "left",
                      "require-asterisk-position": "right",
                      ref_key: "ruleFormRef",
                      ref: ruleFormRef,
                      class: "form",
                      model: unref(form),
                      rules: unref(rules),
                      "label-width": "auto",
                      "status-icon": ""
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_ElFormItem, {
                            label: "Naziv",
                            prop: "name"
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(_component_ElInput, {
                                  modelValue: unref(form).name,
                                  "onUpdate:modelValue": ($event) => unref(form).name = $event,
                                  placeholder: "Moja kategorija",
                                  class: "input-width"
                                }, null, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(_component_ElInput, {
                                    modelValue: unref(form).name,
                                    "onUpdate:modelValue": ($event) => unref(form).name = $event,
                                    placeholder: "Moja kategorija",
                                    class: "input-width"
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(_component_ElFormItem, {
                            label: "Nadkategorija",
                            prop: "parentId"
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(_component_ElSelect, {
                                  modelValue: unref(form).parentId,
                                  "onUpdate:modelValue": ($event) => unref(form).parentId = $event,
                                  placeholder: "Odaberite kategoriju",
                                  class: "input-width",
                                  clearable: ""
                                }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(`<!--[-->`);
                                      ssrRenderList(unref(activeCategories), (category) => {
                                        _push6(ssrRenderComponent(_component_ElOption, {
                                          key: String(category.id),
                                          label: String(category.name),
                                          value: String(category.id)
                                        }, null, _parent6, _scopeId5));
                                      });
                                      _push6(`<!--]-->`);
                                    } else {
                                      return [
                                        (openBlock(true), createBlock(Fragment, null, renderList(unref(activeCategories), (category) => {
                                          return openBlock(), createBlock(_component_ElOption, {
                                            key: String(category.id),
                                            label: String(category.name),
                                            value: String(category.id)
                                          }, null, 8, ["label", "value"]);
                                        }), 128))
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(_component_ElSelect, {
                                    modelValue: unref(form).parentId,
                                    "onUpdate:modelValue": ($event) => unref(form).parentId = $event,
                                    placeholder: "Odaberite kategoriju",
                                    class: "input-width",
                                    clearable: ""
                                  }, {
                                    default: withCtx(() => [
                                      (openBlock(true), createBlock(Fragment, null, renderList(unref(activeCategories), (category) => {
                                        return openBlock(), createBlock(_component_ElOption, {
                                          key: String(category.id),
                                          label: String(category.name),
                                          value: String(category.id)
                                        }, null, 8, ["label", "value"]);
                                      }), 128))
                                    ]),
                                    _: 1
                                  }, 8, ["modelValue", "onUpdate:modelValue"])
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(_component_ElFormItem, {
                              label: "Naziv",
                              prop: "name"
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_ElInput, {
                                  modelValue: unref(form).name,
                                  "onUpdate:modelValue": ($event) => unref(form).name = $event,
                                  placeholder: "Moja kategorija",
                                  class: "input-width"
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ]),
                              _: 1
                            }),
                            createVNode(_component_ElFormItem, {
                              label: "Nadkategorija",
                              prop: "parentId"
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_ElSelect, {
                                  modelValue: unref(form).parentId,
                                  "onUpdate:modelValue": ($event) => unref(form).parentId = $event,
                                  placeholder: "Odaberite kategoriju",
                                  class: "input-width",
                                  clearable: ""
                                }, {
                                  default: withCtx(() => [
                                    (openBlock(true), createBlock(Fragment, null, renderList(unref(activeCategories), (category) => {
                                      return openBlock(), createBlock(_component_ElOption, {
                                        key: String(category.id),
                                        label: String(category.name),
                                        value: String(category.id)
                                      }, null, 8, ["label", "value"]);
                                    }), 128))
                                  ]),
                                  _: 1
                                }, 8, ["modelValue", "onUpdate:modelValue"])
                              ]),
                              _: 1
                            })
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
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
                        "status-icon": ""
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_ElFormItem, {
                            label: "Naziv",
                            prop: "name"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_ElInput, {
                                modelValue: unref(form).name,
                                "onUpdate:modelValue": ($event) => unref(form).name = $event,
                                placeholder: "Moja kategorija",
                                class: "input-width"
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            _: 1
                          }),
                          createVNode(_component_ElFormItem, {
                            label: "Nadkategorija",
                            prop: "parentId"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_ElSelect, {
                                modelValue: unref(form).parentId,
                                "onUpdate:modelValue": ($event) => unref(form).parentId = $event,
                                placeholder: "Odaberite kategoriju",
                                class: "input-width",
                                clearable: ""
                              }, {
                                default: withCtx(() => [
                                  (openBlock(true), createBlock(Fragment, null, renderList(unref(activeCategories), (category) => {
                                    return openBlock(), createBlock(_component_ElOption, {
                                      key: String(category.id),
                                      label: String(category.name),
                                      value: String(category.id)
                                    }, null, 8, ["label", "value"]);
                                  }), 128))
                                ]),
                                _: 1
                              }, 8, ["modelValue", "onUpdate:modelValue"])
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
              }, _parent2, _scopeId));
            } else if (unref(dialog).type === "delete") {
              _push2(ssrRenderComponent(_component_ElRow, {
                justify: "center",
                class: "mb-24"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_ElCol, { align: "middle" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        var _a, _b;
                        if (_push4) {
                          _push4(` Jeste li sigurni da \u017Eelite obrisati <b${_scopeId3}>${ssrInterpolate((_a = unref(dialog).item) == null ? void 0 : _a.name)}</b> kategoriju? `);
                        } else {
                          return [
                            createTextVNode(" Jeste li sigurni da \u017Eelite obrisati "),
                            createVNode("b", null, toDisplayString((_b = unref(dialog).item) == null ? void 0 : _b.name), 1),
                            createTextVNode(" kategoriju? ")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(_component_ElCol, {
                      align: "middle",
                      class: "mt-12"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`Mogu\u0107e ju je vratiti kasnije. `);
                        } else {
                          return [
                            createTextVNode("Mogu\u0107e ju je vratiti kasnije. ")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_ElCol, { align: "middle" }, {
                        default: withCtx(() => {
                          var _a;
                          return [
                            createTextVNode(" Jeste li sigurni da \u017Eelite obrisati "),
                            createVNode("b", null, toDisplayString((_a = unref(dialog).item) == null ? void 0 : _a.name), 1),
                            createTextVNode(" kategoriju? ")
                          ];
                        }),
                        _: 1
                      }),
                      createVNode(_component_ElCol, {
                        align: "middle",
                        class: "mt-12"
                      }, {
                        default: withCtx(() => [
                          createTextVNode("Mogu\u0107e ju je vratiti kasnije. ")
                        ]),
                        _: 1
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else if (unref(dialog).type === "unarchive") {
              _push2(ssrRenderComponent(_component_ElRow, {
                justify: "center",
                class: "mb-24"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_ElCol, { align: "middle" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        var _a, _b;
                        if (_push4) {
                          _push4(` Jeste li sigurni da \u017Eelite vratiti <b${_scopeId3}>${ssrInterpolate((_a = unref(dialog).item) == null ? void 0 : _a.name)}</b> kategoriju? `);
                        } else {
                          return [
                            createTextVNode(" Jeste li sigurni da \u017Eelite vratiti "),
                            createVNode("b", null, toDisplayString((_b = unref(dialog).item) == null ? void 0 : _b.name), 1),
                            createTextVNode(" kategoriju? ")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_ElCol, { align: "middle" }, {
                        default: withCtx(() => {
                          var _a;
                          return [
                            createTextVNode(" Jeste li sigurni da \u017Eelite vratiti "),
                            createVNode("b", null, toDisplayString((_a = unref(dialog).item) == null ? void 0 : _a.name), 1),
                            createTextVNode(" kategoriju? ")
                          ];
                        }),
                        _: 1
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            _push2(ssrRenderComponent(_component_ElRow, { justify: "center" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_ElButton, {
                    type: unref(dialog).type === "delete" ? "danger" : "primary",
                    plain: "",
                    onClick: ($event) => handleSubmitButton(unref(ruleFormRef)),
                    loading: unref(isLoading).button
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        if (unref(dialog).type === "create") {
                          _push4(`<span${_scopeId3}>Dodaj</span>`);
                        } else if (unref(dialog).type === "edit") {
                          _push4(`<span${_scopeId3}>Uredi</span>`);
                        } else if (unref(dialog).type === "unarchive") {
                          _push4(`<span${_scopeId3}>Vrati</span>`);
                        } else if (unref(dialog).type === "delete") {
                          _push4(`<span${_scopeId3}>Obri\u0161i</span>`);
                        } else {
                          _push4(`<!---->`);
                        }
                      } else {
                        return [
                          unref(dialog).type === "create" ? (openBlock(), createBlock("span", { key: 0 }, "Dodaj")) : unref(dialog).type === "edit" ? (openBlock(), createBlock("span", { key: 1 }, "Uredi")) : unref(dialog).type === "unarchive" ? (openBlock(), createBlock("span", { key: 2 }, "Vrati")) : unref(dialog).type === "delete" ? (openBlock(), createBlock("span", { key: 3 }, "Obri\u0161i")) : createCommentVNode("", true)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_ElButton, {
                      type: unref(dialog).type === "delete" ? "danger" : "primary",
                      plain: "",
                      onClick: ($event) => handleSubmitButton(unref(ruleFormRef)),
                      loading: unref(isLoading).button
                    }, {
                      default: withCtx(() => [
                        unref(dialog).type === "create" ? (openBlock(), createBlock("span", { key: 0 }, "Dodaj")) : unref(dialog).type === "edit" ? (openBlock(), createBlock("span", { key: 1 }, "Uredi")) : unref(dialog).type === "unarchive" ? (openBlock(), createBlock("span", { key: 2 }, "Vrati")) : unref(dialog).type === "delete" ? (openBlock(), createBlock("span", { key: 3 }, "Obri\u0161i")) : createCommentVNode("", true)
                      ]),
                      _: 1
                    }, 8, ["type", "onClick", "loading"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              unref(dialog).type === "create" || unref(dialog).type === "edit" ? (openBlock(), createBlock(_component_ElRow, {
                key: 0,
                justify: "center"
              }, {
                default: withCtx(() => [
                  createVNode(_component_ElForm, {
                    "label-position": _ctx.$viewport.isLessThan("tablet") ? "top" : "left",
                    "require-asterisk-position": "right",
                    ref_key: "ruleFormRef",
                    ref: ruleFormRef,
                    class: "form",
                    model: unref(form),
                    rules: unref(rules),
                    "label-width": "auto",
                    "status-icon": ""
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_ElFormItem, {
                        label: "Naziv",
                        prop: "name"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_ElInput, {
                            modelValue: unref(form).name,
                            "onUpdate:modelValue": ($event) => unref(form).name = $event,
                            placeholder: "Moja kategorija",
                            class: "input-width"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        _: 1
                      }),
                      createVNode(_component_ElFormItem, {
                        label: "Nadkategorija",
                        prop: "parentId"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_ElSelect, {
                            modelValue: unref(form).parentId,
                            "onUpdate:modelValue": ($event) => unref(form).parentId = $event,
                            placeholder: "Odaberite kategoriju",
                            class: "input-width",
                            clearable: ""
                          }, {
                            default: withCtx(() => [
                              (openBlock(true), createBlock(Fragment, null, renderList(unref(activeCategories), (category) => {
                                return openBlock(), createBlock(_component_ElOption, {
                                  key: String(category.id),
                                  label: String(category.name),
                                  value: String(category.id)
                                }, null, 8, ["label", "value"]);
                              }), 128))
                            ]),
                            _: 1
                          }, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }, 8, ["label-position", "model", "rules"])
                ]),
                _: 1
              })) : unref(dialog).type === "delete" ? (openBlock(), createBlock(_component_ElRow, {
                key: 1,
                justify: "center",
                class: "mb-24"
              }, {
                default: withCtx(() => [
                  createVNode(_component_ElCol, { align: "middle" }, {
                    default: withCtx(() => {
                      var _a;
                      return [
                        createTextVNode(" Jeste li sigurni da \u017Eelite obrisati "),
                        createVNode("b", null, toDisplayString((_a = unref(dialog).item) == null ? void 0 : _a.name), 1),
                        createTextVNode(" kategoriju? ")
                      ];
                    }),
                    _: 1
                  }),
                  createVNode(_component_ElCol, {
                    align: "middle",
                    class: "mt-12"
                  }, {
                    default: withCtx(() => [
                      createTextVNode("Mogu\u0107e ju je vratiti kasnije. ")
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })) : unref(dialog).type === "unarchive" ? (openBlock(), createBlock(_component_ElRow, {
                key: 2,
                justify: "center",
                class: "mb-24"
              }, {
                default: withCtx(() => [
                  createVNode(_component_ElCol, { align: "middle" }, {
                    default: withCtx(() => {
                      var _a;
                      return [
                        createTextVNode(" Jeste li sigurni da \u017Eelite vratiti "),
                        createVNode("b", null, toDisplayString((_a = unref(dialog).item) == null ? void 0 : _a.name), 1),
                        createTextVNode(" kategoriju? ")
                      ];
                    }),
                    _: 1
                  })
                ]),
                _: 1
              })) : createCommentVNode("", true),
              createVNode(_component_ElRow, { justify: "center" }, {
                default: withCtx(() => [
                  createVNode(_component_ElButton, {
                    type: unref(dialog).type === "delete" ? "danger" : "primary",
                    plain: "",
                    onClick: ($event) => handleSubmitButton(unref(ruleFormRef)),
                    loading: unref(isLoading).button
                  }, {
                    default: withCtx(() => [
                      unref(dialog).type === "create" ? (openBlock(), createBlock("span", { key: 0 }, "Dodaj")) : unref(dialog).type === "edit" ? (openBlock(), createBlock("span", { key: 1 }, "Uredi")) : unref(dialog).type === "unarchive" ? (openBlock(), createBlock("span", { key: 2 }, "Vrati")) : unref(dialog).type === "delete" ? (openBlock(), createBlock("span", { key: 3 }, "Obri\u0161i")) : createCommentVNode("", true)
                    ]),
                    _: 1
                  }, 8, ["type", "onClick", "loading"])
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup$d = _sfc_main$d.setup;
_sfc_main$d.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/backoffice/tabs/BackofficePortalCategoriesTab.vue");
  return _sfc_setup$d ? _sfc_setup$d(props, ctx) : void 0;
};
var Base = {
  _loadedStyleNames: /* @__PURE__ */ new Set(),
  getLoadedStyleNames: function getLoadedStyleNames() {
    return this._loadedStyleNames;
  },
  isStyleNameLoaded: function isStyleNameLoaded(name) {
    return this._loadedStyleNames.has(name);
  },
  setLoadedStyleName: function setLoadedStyleName(name) {
    this._loadedStyleNames.add(name);
  },
  deleteLoadedStyleName: function deleteLoadedStyleName(name) {
    this._loadedStyleNames["delete"](name);
  },
  clearLoadedStyleNames: function clearLoadedStyleNames() {
    this._loadedStyleNames.clear();
  }
};
function useAttrSelector() {
  var prefix = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "pc";
  var idx = useId();
  return "".concat(prefix).concat(idx.replace("v-", "").replaceAll("-", "_"));
}
var BaseComponentStyle = BaseStyle.extend({
  name: "common"
});
function _typeof$1(o) {
  "@babel/helpers - typeof";
  return _typeof$1 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o2) {
    return typeof o2;
  } : function(o2) {
    return o2 && "function" == typeof Symbol && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
  }, _typeof$1(o);
}
function _toArray(r) {
  return _arrayWithHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableRest();
}
function _iterableToArray(r) {
  if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r);
}
function _slicedToArray(r, e) {
  return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest();
}
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray(r, a) {
  if (r) {
    if ("string" == typeof r) return _arrayLikeToArray(r, a);
    var t = {}.toString.call(r).slice(8, -1);
    return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0;
  }
}
function _arrayLikeToArray(r, a) {
  (null == a || a > r.length) && (a = r.length);
  for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
  return n;
}
function _iterableToArrayLimit(r, l) {
  var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (null != t) {
    var e, n, i, u, a = [], f = true, o = false;
    try {
      if (i = (t = t.call(r)).next, 0 === l) {
        if (Object(t) !== t) return;
        f = false;
      } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = true) ;
    } catch (r2) {
      o = true, n = r2;
    } finally {
      try {
        if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return;
      } finally {
        if (o) throw n;
      }
    }
    return a;
  }
}
function _arrayWithHoles(r) {
  if (Array.isArray(r)) return r;
}
function ownKeys$1(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function(r2) {
      return Object.getOwnPropertyDescriptor(e, r2).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread$1(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys$1(Object(t), true).forEach(function(r2) {
      _defineProperty$1(e, r2, t[r2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$1(Object(t)).forEach(function(r2) {
      Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
    });
  }
  return e;
}
function _defineProperty$1(e, r, t) {
  return (r = _toPropertyKey$1(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: true, configurable: true, writable: true }) : e[r] = t, e;
}
function _toPropertyKey$1(t) {
  var i = _toPrimitive$1(t, "string");
  return "symbol" == _typeof$1(i) ? i : i + "";
}
function _toPrimitive$1(t, r) {
  if ("object" != _typeof$1(t) || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r);
    if ("object" != _typeof$1(i)) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
var script$3 = {
  name: "BaseComponent",
  props: {
    pt: {
      type: Object,
      "default": void 0
    },
    ptOptions: {
      type: Object,
      "default": void 0
    },
    unstyled: {
      type: Boolean,
      "default": void 0
    },
    dt: {
      type: Object,
      "default": void 0
    }
  },
  inject: {
    $parentInstance: {
      "default": void 0
    }
  },
  watch: {
    isUnstyled: {
      immediate: true,
      handler: function handler(newValue) {
        ThemeService.off("theme:change", this._loadCoreStyles);
        if (!newValue) {
          this._loadCoreStyles();
          this._themeChangeListener(this._loadCoreStyles);
        }
      }
    },
    dt: {
      immediate: true,
      handler: function handler2(newValue, oldValue) {
        var _this = this;
        ThemeService.off("theme:change", this._themeScopedListener);
        if (newValue) {
          this._loadScopedThemeStyles(newValue);
          this._themeScopedListener = function() {
            return _this._loadScopedThemeStyles(newValue);
          };
          this._themeChangeListener(this._themeScopedListener);
        } else {
          this._unloadScopedThemeStyles();
        }
      }
    }
  },
  scopedStyleEl: void 0,
  rootEl: void 0,
  uid: void 0,
  $attrSelector: void 0,
  beforeCreate: function beforeCreate() {
    var _this$pt, _this$pt2, _this$pt3, _ref, _ref$onBeforeCreate, _this$$primevueConfig, _this$$primevue, _this$$primevue2, _this$$primevue3, _ref2, _ref2$onBeforeCreate;
    var _usept = (_this$pt = this.pt) === null || _this$pt === void 0 ? void 0 : _this$pt["_usept"];
    var originalValue = _usept ? (_this$pt2 = this.pt) === null || _this$pt2 === void 0 || (_this$pt2 = _this$pt2.originalValue) === null || _this$pt2 === void 0 ? void 0 : _this$pt2[this.$.type.name] : void 0;
    var value = _usept ? (_this$pt3 = this.pt) === null || _this$pt3 === void 0 || (_this$pt3 = _this$pt3.value) === null || _this$pt3 === void 0 ? void 0 : _this$pt3[this.$.type.name] : this.pt;
    (_ref = value || originalValue) === null || _ref === void 0 || (_ref = _ref.hooks) === null || _ref === void 0 || (_ref$onBeforeCreate = _ref["onBeforeCreate"]) === null || _ref$onBeforeCreate === void 0 || _ref$onBeforeCreate.call(_ref);
    var _useptInConfig = (_this$$primevueConfig = this.$primevueConfig) === null || _this$$primevueConfig === void 0 || (_this$$primevueConfig = _this$$primevueConfig.pt) === null || _this$$primevueConfig === void 0 ? void 0 : _this$$primevueConfig["_usept"];
    var originalValueInConfig = _useptInConfig ? (_this$$primevue = this.$primevue) === null || _this$$primevue === void 0 || (_this$$primevue = _this$$primevue.config) === null || _this$$primevue === void 0 || (_this$$primevue = _this$$primevue.pt) === null || _this$$primevue === void 0 ? void 0 : _this$$primevue.originalValue : void 0;
    var valueInConfig = _useptInConfig ? (_this$$primevue2 = this.$primevue) === null || _this$$primevue2 === void 0 || (_this$$primevue2 = _this$$primevue2.config) === null || _this$$primevue2 === void 0 || (_this$$primevue2 = _this$$primevue2.pt) === null || _this$$primevue2 === void 0 ? void 0 : _this$$primevue2.value : (_this$$primevue3 = this.$primevue) === null || _this$$primevue3 === void 0 || (_this$$primevue3 = _this$$primevue3.config) === null || _this$$primevue3 === void 0 ? void 0 : _this$$primevue3.pt;
    (_ref2 = valueInConfig || originalValueInConfig) === null || _ref2 === void 0 || (_ref2 = _ref2[this.$.type.name]) === null || _ref2 === void 0 || (_ref2 = _ref2.hooks) === null || _ref2 === void 0 || (_ref2$onBeforeCreate = _ref2["onBeforeCreate"]) === null || _ref2$onBeforeCreate === void 0 || _ref2$onBeforeCreate.call(_ref2);
    this.$attrSelector = useAttrSelector();
    this.uid = this.$attrs.id || this.$attrSelector.replace("pc", "pv_id_");
  },
  created: function created() {
    this._hook("onCreated");
  },
  beforeMount: function beforeMount() {
    var _this$$el;
    this.rootEl = findSingle(isElement(this.$el) ? this.$el : (_this$$el = this.$el) === null || _this$$el === void 0 ? void 0 : _this$$el.parentElement, "[".concat(this.$attrSelector, "]"));
    if (this.rootEl) {
      this.rootEl.$pc = _objectSpread$1({
        name: this.$.type.name,
        attrSelector: this.$attrSelector
      }, this.$params);
    }
    this._loadStyles();
    this._hook("onBeforeMount");
  },
  mounted: function mounted() {
    this._hook("onMounted");
  },
  beforeUpdate: function beforeUpdate() {
    this._hook("onBeforeUpdate");
  },
  updated: function updated() {
    this._hook("onUpdated");
  },
  beforeUnmount: function beforeUnmount() {
    this._hook("onBeforeUnmount");
  },
  unmounted: function unmounted() {
    this._removeThemeListeners();
    this._unloadScopedThemeStyles();
    this._hook("onUnmounted");
  },
  methods: {
    _hook: function _hook(hookName) {
      if (!this.$options.hostName) {
        var selfHook = this._usePT(this._getPT(this.pt, this.$.type.name), this._getOptionValue, "hooks.".concat(hookName));
        var defaultHook = this._useDefaultPT(this._getOptionValue, "hooks.".concat(hookName));
        selfHook === null || selfHook === void 0 || selfHook();
        defaultHook === null || defaultHook === void 0 || defaultHook();
      }
    },
    _mergeProps: function _mergeProps(fn) {
      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key2 = 1; _key2 < _len; _key2++) {
        args[_key2 - 1] = arguments[_key2];
      }
      return isFunction(fn) ? fn.apply(void 0, args) : mergeProps.apply(void 0, args);
    },
    _load: function _load() {
      if (!Base.isStyleNameLoaded("base")) {
        BaseStyle.loadCSS(this.$styleOptions);
        this._loadGlobalStyles();
        Base.setLoadedStyleName("base");
      }
      this._loadThemeStyles();
    },
    _loadStyles: function _loadStyles() {
      this._load();
      this._themeChangeListener(this._load);
    },
    _loadCoreStyles: function _loadCoreStyles() {
      var _this$$style, _this$$style2;
      if (!Base.isStyleNameLoaded((_this$$style = this.$style) === null || _this$$style === void 0 ? void 0 : _this$$style.name) && (_this$$style2 = this.$style) !== null && _this$$style2 !== void 0 && _this$$style2.name) {
        BaseComponentStyle.loadCSS(this.$styleOptions);
        this.$options.style && this.$style.loadCSS(this.$styleOptions);
        Base.setLoadedStyleName(this.$style.name);
      }
    },
    _loadGlobalStyles: function _loadGlobalStyles() {
      var globalCSS = this._useGlobalPT(this._getOptionValue, "global.css", this.$params);
      isNotEmpty$1(globalCSS) && BaseStyle.load(globalCSS, _objectSpread$1({
        name: "global"
      }, this.$styleOptions));
    },
    _loadThemeStyles: function _loadThemeStyles() {
      var _this$$style4, _this$$style5;
      if (this.isUnstyled || this.$theme === "none") return;
      if (!Theme.isStyleNameLoaded("common")) {
        var _this$$style3, _this$$style3$getComm;
        var _ref3 = ((_this$$style3 = this.$style) === null || _this$$style3 === void 0 || (_this$$style3$getComm = _this$$style3.getCommonTheme) === null || _this$$style3$getComm === void 0 ? void 0 : _this$$style3$getComm.call(_this$$style3)) || {}, primitive = _ref3.primitive, semantic = _ref3.semantic, global = _ref3.global, style2 = _ref3.style;
        BaseStyle.load(primitive === null || primitive === void 0 ? void 0 : primitive.css, _objectSpread$1({
          name: "primitive-variables"
        }, this.$styleOptions));
        BaseStyle.load(semantic === null || semantic === void 0 ? void 0 : semantic.css, _objectSpread$1({
          name: "semantic-variables"
        }, this.$styleOptions));
        BaseStyle.load(global === null || global === void 0 ? void 0 : global.css, _objectSpread$1({
          name: "global-variables"
        }, this.$styleOptions));
        BaseStyle.loadStyle(_objectSpread$1({
          name: "global-style"
        }, this.$styleOptions), style2);
        Theme.setLoadedStyleName("common");
      }
      if (!Theme.isStyleNameLoaded((_this$$style4 = this.$style) === null || _this$$style4 === void 0 ? void 0 : _this$$style4.name) && (_this$$style5 = this.$style) !== null && _this$$style5 !== void 0 && _this$$style5.name) {
        var _this$$style6, _this$$style6$getComp, _this$$style7, _this$$style8;
        var _ref4 = ((_this$$style6 = this.$style) === null || _this$$style6 === void 0 || (_this$$style6$getComp = _this$$style6.getComponentTheme) === null || _this$$style6$getComp === void 0 ? void 0 : _this$$style6$getComp.call(_this$$style6)) || {}, css = _ref4.css, _style = _ref4.style;
        (_this$$style7 = this.$style) === null || _this$$style7 === void 0 || _this$$style7.load(css, _objectSpread$1({
          name: "".concat(this.$style.name, "-variables")
        }, this.$styleOptions));
        (_this$$style8 = this.$style) === null || _this$$style8 === void 0 || _this$$style8.loadStyle(_objectSpread$1({
          name: "".concat(this.$style.name, "-style")
        }, this.$styleOptions), _style);
        Theme.setLoadedStyleName(this.$style.name);
      }
      if (!Theme.isStyleNameLoaded("layer-order")) {
        var _this$$style9, _this$$style9$getLaye;
        var layerOrder = (_this$$style9 = this.$style) === null || _this$$style9 === void 0 || (_this$$style9$getLaye = _this$$style9.getLayerOrderThemeCSS) === null || _this$$style9$getLaye === void 0 ? void 0 : _this$$style9$getLaye.call(_this$$style9);
        BaseStyle.load(layerOrder, _objectSpread$1({
          name: "layer-order",
          first: true
        }, this.$styleOptions));
        Theme.setLoadedStyleName("layer-order");
      }
    },
    _loadScopedThemeStyles: function _loadScopedThemeStyles(preset) {
      var _this$$style0, _this$$style0$getPres, _this$$style1;
      var _ref5 = ((_this$$style0 = this.$style) === null || _this$$style0 === void 0 || (_this$$style0$getPres = _this$$style0.getPresetTheme) === null || _this$$style0$getPres === void 0 ? void 0 : _this$$style0$getPres.call(_this$$style0, preset, "[".concat(this.$attrSelector, "]"))) || {}, css = _ref5.css;
      var scopedStyle = (_this$$style1 = this.$style) === null || _this$$style1 === void 0 ? void 0 : _this$$style1.load(css, _objectSpread$1({
        name: "".concat(this.$attrSelector, "-").concat(this.$style.name)
      }, this.$styleOptions));
      this.scopedStyleEl = scopedStyle.el;
    },
    _unloadScopedThemeStyles: function _unloadScopedThemeStyles() {
      var _this$scopedStyleEl;
      (_this$scopedStyleEl = this.scopedStyleEl) === null || _this$scopedStyleEl === void 0 || (_this$scopedStyleEl = _this$scopedStyleEl.value) === null || _this$scopedStyleEl === void 0 || _this$scopedStyleEl.remove();
    },
    _themeChangeListener: function _themeChangeListener() {
      var callback = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : function() {
      };
      Base.clearLoadedStyleNames();
      ThemeService.on("theme:change", callback);
    },
    _removeThemeListeners: function _removeThemeListeners() {
      ThemeService.off("theme:change", this._loadCoreStyles);
      ThemeService.off("theme:change", this._load);
      ThemeService.off("theme:change", this._themeScopedListener);
    },
    _getHostInstance: function _getHostInstance(instance) {
      return instance ? this.$options.hostName ? instance.$.type.name === this.$options.hostName ? instance : this._getHostInstance(instance.$parentInstance) : instance.$parentInstance : void 0;
    },
    _getPropValue: function _getPropValue(name) {
      var _this$_getHostInstanc;
      return this[name] || ((_this$_getHostInstanc = this._getHostInstance(this)) === null || _this$_getHostInstanc === void 0 ? void 0 : _this$_getHostInstanc[name]);
    },
    _getOptionValue: function _getOptionValue(options) {
      var key = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
      var params = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
      return getKeyValue(options, key, params);
    },
    _getPTValue: function _getPTValue() {
      var _this$$primevueConfig2;
      var obj = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      var key = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
      var params = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
      var searchInDefaultPT = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : true;
      var searchOut = /./g.test(key) && !!params[key.split(".")[0]];
      var _ref6 = this._getPropValue("ptOptions") || ((_this$$primevueConfig2 = this.$primevueConfig) === null || _this$$primevueConfig2 === void 0 ? void 0 : _this$$primevueConfig2.ptOptions) || {}, _ref6$mergeSections = _ref6.mergeSections, mergeSections = _ref6$mergeSections === void 0 ? true : _ref6$mergeSections, _ref6$mergeProps = _ref6.mergeProps, useMergeProps = _ref6$mergeProps === void 0 ? false : _ref6$mergeProps;
      var global = searchInDefaultPT ? searchOut ? this._useGlobalPT(this._getPTClassValue, key, params) : this._useDefaultPT(this._getPTClassValue, key, params) : void 0;
      var self = searchOut ? void 0 : this._getPTSelf(obj, this._getPTClassValue, key, _objectSpread$1(_objectSpread$1({}, params), {}, {
        global: global || {}
      }));
      var datasets = this._getPTDatasets(key);
      return mergeSections || !mergeSections && self ? useMergeProps ? this._mergeProps(useMergeProps, global, self, datasets) : _objectSpread$1(_objectSpread$1(_objectSpread$1({}, global), self), datasets) : _objectSpread$1(_objectSpread$1({}, self), datasets);
    },
    _getPTSelf: function _getPTSelf() {
      var obj = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key3 = 1; _key3 < _len2; _key3++) {
        args[_key3 - 1] = arguments[_key3];
      }
      return mergeProps(
        this._usePT.apply(this, [this._getPT(obj, this.$name)].concat(args)),
        // Exp; <component :pt="{}"
        this._usePT.apply(this, [this.$_attrsPT].concat(args))
        // Exp; <component :pt:[passthrough_key]:[attribute]="{value}" or <component :pt:[passthrough_key]="() =>{value}"
      );
    },
    _getPTDatasets: function _getPTDatasets() {
      var _this$pt4, _this$pt5;
      var key = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
      var datasetPrefix = "data-pc-";
      var isExtended = key === "root" && isNotEmpty$1((_this$pt4 = this.pt) === null || _this$pt4 === void 0 ? void 0 : _this$pt4["data-pc-section"]);
      return key !== "transition" && _objectSpread$1(_objectSpread$1({}, key === "root" && _objectSpread$1(_objectSpread$1(_defineProperty$1({}, "".concat(datasetPrefix, "name"), toFlatCase(isExtended ? (_this$pt5 = this.pt) === null || _this$pt5 === void 0 ? void 0 : _this$pt5["data-pc-section"] : this.$.type.name)), isExtended && _defineProperty$1({}, "".concat(datasetPrefix, "extend"), toFlatCase(this.$.type.name))), {}, _defineProperty$1({}, "".concat(this.$attrSelector), ""))), {}, _defineProperty$1({}, "".concat(datasetPrefix, "section"), toFlatCase(key)));
    },
    _getPTClassValue: function _getPTClassValue() {
      var value = this._getOptionValue.apply(this, arguments);
      return isString$1(value) || isArray$1(value) ? {
        "class": value
      } : value;
    },
    _getPT: function _getPT(pt) {
      var _this2 = this;
      var key = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
      var callback = arguments.length > 2 ? arguments[2] : void 0;
      var getValue = function getValue2(value) {
        var _ref8;
        var checkSameKey = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
        var computedValue = callback ? callback(value) : value;
        var _key = toFlatCase(key);
        var _cKey = toFlatCase(_this2.$name);
        return (_ref8 = checkSameKey ? _key !== _cKey ? computedValue === null || computedValue === void 0 ? void 0 : computedValue[_key] : void 0 : computedValue === null || computedValue === void 0 ? void 0 : computedValue[_key]) !== null && _ref8 !== void 0 ? _ref8 : computedValue;
      };
      return pt !== null && pt !== void 0 && pt.hasOwnProperty("_usept") ? {
        _usept: pt["_usept"],
        originalValue: getValue(pt.originalValue),
        value: getValue(pt.value)
      } : getValue(pt, true);
    },
    _usePT: function _usePT(pt, callback, key, params) {
      var fn = function fn2(value2) {
        return callback(value2, key, params);
      };
      if (pt !== null && pt !== void 0 && pt.hasOwnProperty("_usept")) {
        var _this$$primevueConfig3;
        var _ref9 = pt["_usept"] || ((_this$$primevueConfig3 = this.$primevueConfig) === null || _this$$primevueConfig3 === void 0 ? void 0 : _this$$primevueConfig3.ptOptions) || {}, _ref9$mergeSections = _ref9.mergeSections, mergeSections = _ref9$mergeSections === void 0 ? true : _ref9$mergeSections, _ref9$mergeProps = _ref9.mergeProps, useMergeProps = _ref9$mergeProps === void 0 ? false : _ref9$mergeProps;
        var originalValue = fn(pt.originalValue);
        var value = fn(pt.value);
        if (originalValue === void 0 && value === void 0) return void 0;
        else if (isString$1(value)) return value;
        else if (isString$1(originalValue)) return originalValue;
        return mergeSections || !mergeSections && value ? useMergeProps ? this._mergeProps(useMergeProps, originalValue, value) : _objectSpread$1(_objectSpread$1({}, originalValue), value) : value;
      }
      return fn(pt);
    },
    _useGlobalPT: function _useGlobalPT(callback, key, params) {
      return this._usePT(this.globalPT, callback, key, params);
    },
    _useDefaultPT: function _useDefaultPT(callback, key, params) {
      return this._usePT(this.defaultPT, callback, key, params);
    },
    ptm: function ptm() {
      var key = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
      var params = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      return this._getPTValue(this.pt, key, _objectSpread$1(_objectSpread$1({}, this.$params), params));
    },
    ptmi: function ptmi() {
      var _attrs$id;
      var key = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
      var params = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      var attrs = mergeProps(this.$_attrsWithoutPT, this.ptm(key, params));
      (attrs === null || attrs === void 0 ? void 0 : attrs.hasOwnProperty("id")) && ((_attrs$id = attrs.id) !== null && _attrs$id !== void 0 ? _attrs$id : attrs.id = this.$id);
      return attrs;
    },
    ptmo: function ptmo() {
      var obj = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      var key = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
      var params = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
      return this._getPTValue(obj, key, _objectSpread$1({
        instance: this
      }, params), false);
    },
    cx: function cx() {
      var key = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
      var params = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      return !this.isUnstyled ? this._getOptionValue(this.$style.classes, key, _objectSpread$1(_objectSpread$1({}, this.$params), params)) : void 0;
    },
    sx: function sx() {
      var key = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
      var when = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true;
      var params = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
      if (when) {
        var self = this._getOptionValue(this.$style.inlineStyles, key, _objectSpread$1(_objectSpread$1({}, this.$params), params));
        var base = this._getOptionValue(BaseComponentStyle.inlineStyles, key, _objectSpread$1(_objectSpread$1({}, this.$params), params));
        return [base, self];
      }
      return void 0;
    }
  },
  computed: {
    globalPT: function globalPT() {
      var _this$$primevueConfig4, _this3 = this;
      return this._getPT((_this$$primevueConfig4 = this.$primevueConfig) === null || _this$$primevueConfig4 === void 0 ? void 0 : _this$$primevueConfig4.pt, void 0, function(value) {
        return resolve(value, {
          instance: _this3
        });
      });
    },
    defaultPT: function defaultPT() {
      var _this$$primevueConfig5, _this4 = this;
      return this._getPT((_this$$primevueConfig5 = this.$primevueConfig) === null || _this$$primevueConfig5 === void 0 ? void 0 : _this$$primevueConfig5.pt, void 0, function(value) {
        return _this4._getOptionValue(value, _this4.$name, _objectSpread$1({}, _this4.$params)) || resolve(value, _objectSpread$1({}, _this4.$params));
      });
    },
    isUnstyled: function isUnstyled() {
      var _this$$primevueConfig6;
      return this.unstyled !== void 0 ? this.unstyled : (_this$$primevueConfig6 = this.$primevueConfig) === null || _this$$primevueConfig6 === void 0 ? void 0 : _this$$primevueConfig6.unstyled;
    },
    $id: function $id() {
      return this.$attrs.id || this.uid;
    },
    $inProps: function $inProps() {
      var _this$$$vnode;
      var nodePropKeys = Object.keys(((_this$$$vnode = this.$.vnode) === null || _this$$$vnode === void 0 ? void 0 : _this$$$vnode.props) || {});
      return Object.fromEntries(Object.entries(this.$props).filter(function(_ref0) {
        var _ref1 = _slicedToArray(_ref0, 1), k = _ref1[0];
        return nodePropKeys === null || nodePropKeys === void 0 ? void 0 : nodePropKeys.includes(k);
      }));
    },
    $theme: function $theme() {
      var _this$$primevueConfig7;
      return (_this$$primevueConfig7 = this.$primevueConfig) === null || _this$$primevueConfig7 === void 0 ? void 0 : _this$$primevueConfig7.theme;
    },
    $style: function $style() {
      return _objectSpread$1(_objectSpread$1({
        classes: void 0,
        inlineStyles: void 0,
        load: function load() {
        },
        loadCSS: function loadCSS() {
        },
        loadStyle: function loadStyle() {
        }
      }, (this._getHostInstance(this) || {}).$style), this.$options.style);
    },
    $styleOptions: function $styleOptions() {
      var _this$$primevueConfig8;
      return {
        nonce: (_this$$primevueConfig8 = this.$primevueConfig) === null || _this$$primevueConfig8 === void 0 || (_this$$primevueConfig8 = _this$$primevueConfig8.csp) === null || _this$$primevueConfig8 === void 0 ? void 0 : _this$$primevueConfig8.nonce
      };
    },
    $primevueConfig: function $primevueConfig() {
      var _this$$primevue4;
      return (_this$$primevue4 = this.$primevue) === null || _this$$primevue4 === void 0 ? void 0 : _this$$primevue4.config;
    },
    $name: function $name() {
      return this.$options.hostName || this.$.type.name;
    },
    $params: function $params() {
      var parentInstance = this._getHostInstance(this) || this.$parent;
      return {
        instance: this,
        props: this.$props,
        state: this.$data,
        attrs: this.$attrs,
        parent: {
          instance: parentInstance,
          props: parentInstance === null || parentInstance === void 0 ? void 0 : parentInstance.$props,
          state: parentInstance === null || parentInstance === void 0 ? void 0 : parentInstance.$data,
          attrs: parentInstance === null || parentInstance === void 0 ? void 0 : parentInstance.$attrs
        }
      };
    },
    $_attrsPT: function $_attrsPT() {
      return Object.entries(this.$attrs || {}).filter(function(_ref10) {
        var _ref11 = _slicedToArray(_ref10, 1), key = _ref11[0];
        return key === null || key === void 0 ? void 0 : key.startsWith("pt:");
      }).reduce(function(result, _ref12) {
        var _ref13 = _slicedToArray(_ref12, 2), key = _ref13[0], value = _ref13[1];
        var _key$split = key.split(":"), _key$split2 = _toArray(_key$split), rest = _key$split2.slice(1);
        rest === null || rest === void 0 || rest.reduce(function(currentObj, nestedKey, index, array) {
          !currentObj[nestedKey] && (currentObj[nestedKey] = index === array.length - 1 ? value : {});
          return currentObj[nestedKey];
        }, result);
        return result;
      }, {});
    },
    $_attrsWithoutPT: function $_attrsWithoutPT() {
      return Object.entries(this.$attrs || {}).filter(function(_ref14) {
        var _ref15 = _slicedToArray(_ref14, 1), key = _ref15[0];
        return !(key !== null && key !== void 0 && key.startsWith("pt:"));
      }).reduce(function(acc, _ref16) {
        var _ref17 = _slicedToArray(_ref16, 2), key = _ref17[0], value = _ref17[1];
        acc[key] = value;
        return acc;
      }, {});
    }
  }
};
var script$2 = {
  name: "BaseEditableHolder",
  "extends": script$3,
  emits: ["update:modelValue", "value-change"],
  props: {
    modelValue: {
      type: null,
      "default": void 0
    },
    defaultValue: {
      type: null,
      "default": void 0
    },
    name: {
      type: String,
      "default": void 0
    },
    invalid: {
      type: Boolean,
      "default": void 0
    },
    disabled: {
      type: Boolean,
      "default": false
    },
    formControl: {
      type: Object,
      "default": void 0
    }
  },
  inject: {
    $parentInstance: {
      "default": void 0
    },
    $pcForm: {
      "default": void 0
    },
    $pcFormField: {
      "default": void 0
    }
  },
  data: function data() {
    return {
      d_value: this.defaultValue !== void 0 ? this.defaultValue : this.modelValue
    };
  },
  watch: {
    modelValue: function modelValue(newValue) {
      this.d_value = newValue;
    },
    defaultValue: function defaultValue(newValue) {
      this.d_value = newValue;
    },
    $formName: {
      immediate: true,
      handler: function handler3(newValue) {
        var _this$$pcForm, _this$$pcForm$registe;
        this.formField = ((_this$$pcForm = this.$pcForm) === null || _this$$pcForm === void 0 || (_this$$pcForm$registe = _this$$pcForm.register) === null || _this$$pcForm$registe === void 0 ? void 0 : _this$$pcForm$registe.call(_this$$pcForm, newValue, this.$formControl)) || {};
      }
    },
    $formControl: {
      immediate: true,
      handler: function handler4(newValue) {
        var _this$$pcForm2, _this$$pcForm2$regist;
        this.formField = ((_this$$pcForm2 = this.$pcForm) === null || _this$$pcForm2 === void 0 || (_this$$pcForm2$regist = _this$$pcForm2.register) === null || _this$$pcForm2$regist === void 0 ? void 0 : _this$$pcForm2$regist.call(_this$$pcForm2, this.$formName, newValue)) || {};
      }
    },
    $formDefaultValue: {
      immediate: true,
      handler: function handler5(newValue) {
        this.d_value !== newValue && (this.d_value = newValue);
      }
    },
    $formValue: {
      immediate: false,
      handler: function handler6(newValue) {
        var _this$$pcForm3;
        if ((_this$$pcForm3 = this.$pcForm) !== null && _this$$pcForm3 !== void 0 && _this$$pcForm3.getFieldState(this.$formName) && newValue !== this.d_value) {
          this.d_value = newValue;
        }
      }
    }
  },
  formField: {},
  methods: {
    writeValue: function writeValue(value, event) {
      var _this$formField$onCha, _this$formField;
      if (this.controlled) {
        this.d_value = value;
        this.$emit("update:modelValue", value);
      }
      this.$emit("value-change", value);
      (_this$formField$onCha = (_this$formField = this.formField).onChange) === null || _this$formField$onCha === void 0 || _this$formField$onCha.call(_this$formField, {
        originalEvent: event,
        value
      });
    },
    // @todo move to @primeuix/utils
    findNonEmpty: function findNonEmpty() {
      for (var _len = arguments.length, values = new Array(_len), _key = 0; _key < _len; _key++) {
        values[_key] = arguments[_key];
      }
      return values.find(isNotEmpty);
    }
  },
  computed: {
    $filled: function $filled() {
      return isNotEmpty(this.d_value);
    },
    $invalid: function $invalid() {
      var _this$$pcFormField, _this$$pcForm4;
      return !this.$formNovalidate && this.findNonEmpty(this.invalid, (_this$$pcFormField = this.$pcFormField) === null || _this$$pcFormField === void 0 || (_this$$pcFormField = _this$$pcFormField.$field) === null || _this$$pcFormField === void 0 ? void 0 : _this$$pcFormField.invalid, (_this$$pcForm4 = this.$pcForm) === null || _this$$pcForm4 === void 0 || (_this$$pcForm4 = _this$$pcForm4.getFieldState(this.$formName)) === null || _this$$pcForm4 === void 0 ? void 0 : _this$$pcForm4.invalid);
    },
    $formName: function $formName() {
      var _this$$formControl;
      return !this.$formNovalidate ? this.name || ((_this$$formControl = this.$formControl) === null || _this$$formControl === void 0 ? void 0 : _this$$formControl.name) : void 0;
    },
    $formControl: function $formControl() {
      var _this$$pcFormField2;
      return this.formControl || ((_this$$pcFormField2 = this.$pcFormField) === null || _this$$pcFormField2 === void 0 ? void 0 : _this$$pcFormField2.formControl);
    },
    $formNovalidate: function $formNovalidate() {
      var _this$$formControl2;
      return (_this$$formControl2 = this.$formControl) === null || _this$$formControl2 === void 0 ? void 0 : _this$$formControl2.novalidate;
    },
    $formDefaultValue: function $formDefaultValue() {
      var _this$$pcFormField3, _this$$pcForm5;
      return this.findNonEmpty(this.d_value, (_this$$pcFormField3 = this.$pcFormField) === null || _this$$pcFormField3 === void 0 ? void 0 : _this$$pcFormField3.initialValue, (_this$$pcForm5 = this.$pcForm) === null || _this$$pcForm5 === void 0 || (_this$$pcForm5 = _this$$pcForm5.initialValues) === null || _this$$pcForm5 === void 0 ? void 0 : _this$$pcForm5[this.$formName]);
    },
    $formValue: function $formValue() {
      var _this$$pcFormField4, _this$$pcForm6;
      return this.findNonEmpty((_this$$pcFormField4 = this.$pcFormField) === null || _this$$pcFormField4 === void 0 || (_this$$pcFormField4 = _this$$pcFormField4.$field) === null || _this$$pcFormField4 === void 0 ? void 0 : _this$$pcFormField4.value, (_this$$pcForm6 = this.$pcForm) === null || _this$$pcForm6 === void 0 || (_this$$pcForm6 = _this$$pcForm6.getFieldState(this.$formName)) === null || _this$$pcForm6 === void 0 ? void 0 : _this$$pcForm6.value);
    },
    controlled: function controlled() {
      return this.$inProps.hasOwnProperty("modelValue") || !this.$inProps.hasOwnProperty("modelValue") && !this.$inProps.hasOwnProperty("defaultValue");
    },
    // @deprecated use $filled instead
    filled: function filled() {
      return this.$filled;
    }
  }
};
var classes = {
  root: function root(_ref) {
    var instance = _ref.instance;
    return ["p-editor", {
      "p-invalid": instance.$invalid
    }];
  },
  toolbar: "p-editor-toolbar",
  content: "p-editor-content"
};
var EditorStyle = BaseStyle.extend({
  name: "editor",
  style,
  classes
});
var script$1 = {
  name: "BaseEditor",
  "extends": script$2,
  props: {
    placeholder: String,
    readonly: Boolean,
    formats: Array,
    editorStyle: null,
    modules: null
  },
  style: EditorStyle,
  provide: function provide2() {
    return {
      $pcEditor: this,
      $parentInstance: this
    };
  }
};
function _typeof(o) {
  "@babel/helpers - typeof";
  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o2) {
    return typeof o2;
  } : function(o2) {
    return o2 && "function" == typeof Symbol && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
  }, _typeof(o);
}
function ownKeys(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function(r2) {
      return Object.getOwnPropertyDescriptor(e, r2).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys(Object(t), true).forEach(function(r2) {
      _defineProperty(e, r2, t[r2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function(r2) {
      Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
    });
  }
  return e;
}
function _defineProperty(e, r, t) {
  return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: true, configurable: true, writable: true }) : e[r] = t, e;
}
function _toPropertyKey(t) {
  var i = _toPrimitive(t, "string");
  return "symbol" == _typeof(i) ? i : i + "";
}
function _toPrimitive(t, r) {
  if ("object" != _typeof(t) || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r);
    if ("object" != _typeof(i)) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
var QuillJS = function() {
  try {
    return (void 0).Quill;
  } catch (_unused) {
    return null;
  }
}();
var script = {
  name: "Editor",
  "extends": script$1,
  inheritAttrs: false,
  emits: ["text-change", "selection-change", "load"],
  quill: null,
  watch: {
    modelValue: function modelValue2(newValue, oldValue) {
      if (newValue !== oldValue && this.quill && !this.quill.hasFocus()) {
        this.renderValue(newValue);
      }
    },
    readonly: function readonly() {
      this.handleReadOnlyChange();
    }
  },
  mounted: function mounted2() {
    var _this = this;
    var configuration = {
      modules: _objectSpread({
        toolbar: this.$refs.toolbarElement
      }, this.modules),
      readOnly: this.readonly,
      theme: "snow",
      formats: this.formats,
      placeholder: this.placeholder
    };
    if (QuillJS) {
      this.quill = new QuillJS(this.$refs.editorElement, configuration);
      this.initQuill();
      this.handleLoad();
    } else {
      import('quill').then(function(module) {
        if (module && isExist(_this.$refs.editorElement)) {
          if (module["default"]) {
            _this.quill = new module["default"](_this.$refs.editorElement, configuration);
          } else {
            _this.quill = new module(_this.$refs.editorElement, configuration);
          }
          _this.initQuill();
        }
      }).then(function() {
        _this.handleLoad();
      });
    }
  },
  beforeUnmount: function beforeUnmount2() {
    this.quill = null;
  },
  methods: {
    renderValue: function renderValue(value) {
      if (this.quill) {
        if (value) {
          var delta = this.quill.clipboard.convert({
            html: value
          });
          this.quill.setContents(delta);
        } else {
          this.quill.setText("");
        }
      }
    },
    initQuill: function initQuill() {
      var _this2 = this;
      this.renderValue(this.d_value);
      this.quill.on("text-change", function(delta, oldContents, source) {
        if (source === "user") {
          var html = _this2.quill.getSemanticHTML();
          var text = _this2.quill.getText().trim();
          if (html === "<p><br></p>") {
            html = "";
          }
          _this2.writeValue(html);
          _this2.$emit("text-change", {
            htmlValue: html,
            textValue: text,
            delta,
            source,
            instance: _this2.quill
          });
        }
      });
      this.quill.on("selection-change", function(range, oldRange, source) {
        var html = _this2.quill.getSemanticHTML();
        var text = _this2.quill.getText().trim();
        _this2.$emit("selection-change", {
          htmlValue: html,
          textValue: text,
          range,
          oldRange,
          source,
          instance: _this2.quill
        });
      });
    },
    handleLoad: function handleLoad() {
      if (this.quill && this.quill.getModule("toolbar")) {
        this.$emit("load", {
          instance: this.quill
        });
      }
    },
    handleReadOnlyChange: function handleReadOnlyChange() {
      if (this.quill) this.quill.enable(!this.readonly);
    }
  }
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", mergeProps({
    "class": _ctx.cx("root")
  }, _ctx.ptmi("root")), [createElementVNode("div", mergeProps({
    ref: "toolbarElement",
    "class": _ctx.cx("toolbar")
  }, _ctx.ptm("toolbar")), [renderSlot(_ctx.$slots, "toolbar", {}, function() {
    return [createElementVNode("span", mergeProps({
      "class": "ql-formats"
    }, _ctx.ptm("formats")), [createElementVNode("select", mergeProps({
      "class": "ql-header",
      defaultValue: "0"
    }, _ctx.ptm("header")), [createElementVNode("option", mergeProps({
      value: "1"
    }, _ctx.ptm("option")), "Heading", 16), createElementVNode("option", mergeProps({
      value: "2"
    }, _ctx.ptm("option")), "Subheading", 16), createElementVNode("option", mergeProps({
      value: "0"
    }, _ctx.ptm("option")), "Normal", 16)], 16), createElementVNode("select", mergeProps({
      "class": "ql-font"
    }, _ctx.ptm("font")), [createElementVNode("option", normalizeProps(guardReactiveProps(_ctx.ptm("option"))), null, 16), createElementVNode("option", mergeProps({
      value: "serif"
    }, _ctx.ptm("option")), null, 16), createElementVNode("option", mergeProps({
      value: "monospace"
    }, _ctx.ptm("option")), null, 16)], 16)], 16), createElementVNode("span", mergeProps({
      "class": "ql-formats"
    }, _ctx.ptm("formats")), [createElementVNode("button", mergeProps({
      "class": "ql-bold",
      type: "button"
    }, _ctx.ptm("bold")), null, 16), createElementVNode("button", mergeProps({
      "class": "ql-italic",
      type: "button"
    }, _ctx.ptm("italic")), null, 16), createElementVNode("button", mergeProps({
      "class": "ql-underline",
      type: "button"
    }, _ctx.ptm("underline")), null, 16)], 16), createElementVNode("span", mergeProps({
      "class": "ql-formats"
    }, _ctx.ptm("formats")), [createElementVNode("select", mergeProps({
      "class": "ql-color"
    }, _ctx.ptm("color")), null, 16), createElementVNode("select", mergeProps({
      "class": "ql-background"
    }, _ctx.ptm("background")), null, 16)], 16), createElementVNode("span", mergeProps({
      "class": "ql-formats"
    }, _ctx.ptm("formats")), [createElementVNode("button", mergeProps({
      "class": "ql-list",
      value: "ordered",
      type: "button"
    }, _ctx.ptm("list")), null, 16), createElementVNode("button", mergeProps({
      "class": "ql-list",
      value: "bullet",
      type: "button"
    }, _ctx.ptm("list")), null, 16), createElementVNode("select", mergeProps({
      "class": "ql-align"
    }, _ctx.ptm("select")), [createElementVNode("option", mergeProps({
      defaultValue: ""
    }, _ctx.ptm("option")), null, 16), createElementVNode("option", mergeProps({
      value: "center"
    }, _ctx.ptm("option")), null, 16), createElementVNode("option", mergeProps({
      value: "right"
    }, _ctx.ptm("option")), null, 16), createElementVNode("option", mergeProps({
      value: "justify"
    }, _ctx.ptm("option")), null, 16)], 16)], 16), createElementVNode("span", mergeProps({
      "class": "ql-formats"
    }, _ctx.ptm("formats")), [createElementVNode("button", mergeProps({
      "class": "ql-link",
      type: "button"
    }, _ctx.ptm("link")), null, 16), createElementVNode("button", mergeProps({
      "class": "ql-image",
      type: "button"
    }, _ctx.ptm("image")), null, 16), createElementVNode("button", mergeProps({
      "class": "ql-code-block",
      type: "button"
    }, _ctx.ptm("codeBlock")), null, 16)], 16), createElementVNode("span", mergeProps({
      "class": "ql-formats"
    }, _ctx.ptm("formats")), [createElementVNode("button", mergeProps({
      "class": "ql-clean",
      type: "button"
    }, _ctx.ptm("clean")), null, 16)], 16)];
  })], 16), createElementVNode("div", mergeProps({
    ref: "editorElement",
    "class": _ctx.cx("content"),
    style: _ctx.editorStyle
  }, _ctx.ptm("content")), null, 16)], 16);
}
script.render = render;
const _sfc_main$c = /* @__PURE__ */ defineComponent({
  __name: "BackofficePortalNewsTab",
  __ssrInlineRender: true,
  setup(__props) {
    const { $axios } = useNuxtApp();
    const config = useRuntimeConfig();
    const cloudinaryPreset = config.public.cloudinaryPreset;
    const cloudinaryCloudName = config.public.cloudinaryCloudName;
    const fileList = ref({
      images: [],
      videos: []
    });
    const isLoading = ref({
      activeNews: true,
      deletedNews: true,
      categories: true,
      button: false
    });
    const activeNews = ref();
    const deletedNews = ref();
    const categories = ref();
    const searchValues = ref({
      active: "",
      deleted: ""
    });
    const dialog = ref({
      isOpened: false,
      type: "create",
      item: void 0
    });
    const form = reactive({
      categoryId: "",
      title: "",
      text: "",
      author: "",
      images: [],
      videos: []
    });
    const ruleFormRef = ref();
    const rules = reactive({
      categoryId: [
        { required: true, message: "Odaberite kategoriju vijesti", trigger: "blur" }
      ],
      title: [
        { required: true, message: "Unesite naslov vijesti", trigger: "blur" }
      ],
      text: [{ required: true, message: "Unesite text vijesti", trigger: "blur" }],
      author: [
        { required: true, message: "Unesite autora vijesti", trigger: "blur" }
      ]
    });
    const activeNewsPagination = ref({
      page: 1,
      perPage: 10,
      total: 0
    });
    const deletedNewspagination = ref({
      page: 1,
      perPage: 10,
      total: 0
    });
    const fullscreenImageUrl = ref("");
    const fullscreenImageDialog = ref(false);
    async function getCategories() {
      isLoading.value.categories = true;
      try {
        const response = await $axios.get(`/portal-category?withoutHierarchy=true`);
        categories.value = response.data;
      } catch (error) {
        console.error("API Error:", error);
      } finally {
        isLoading.value.categories = false;
      }
    }
    function getAllNews() {
      getActivePortalNews();
      getDeletedPortalNews();
    }
    function openDialog(type, item) {
      var _a2;
      var _a;
      if (item) {
        form.categoryId = String(item.categoryId);
        form.title = String(item.title);
        form.text = String(item.text);
        form.author = String(item.author);
        form.images = item.images ? item.images : null;
        form.videos = item.videos ? item.videos : null;
        fileList.value.images = (_a2 = (_a = form.images) == null ? void 0 : _a.map((image) => ({
          url: image
        }))) != null ? _a2 : [];
      }
      dialog.value = {
        isOpened: true,
        type,
        item
      };
    }
    function handleActiveSearch() {
      activeNewsPagination.value.page = 1;
      debounceActiveSearch();
    }
    const debounceActiveSearch = debounce(getActivePortalNews, 300);
    async function getActivePortalNews() {
      isLoading.value.activeNews = true;
      try {
        const response = await $axios.get(
          `/portal-news?page=${activeNewsPagination.value.page}&perPage=${activeNewsPagination.value.perPage}&search=${searchValues.value.active}`
        );
        activeNews.value = response.data.news;
        activeNewsPagination.value.total = response.data.total;
      } catch (error) {
        console.error("API Error:", error);
      } finally {
        isLoading.value.activeNews = false;
      }
    }
    function handleDeletedSearch() {
      deletedNewspagination.value.page = 1;
      debounceDeletedSearch();
    }
    const debounceDeletedSearch = debounce(getDeletedPortalNews, 300);
    async function getDeletedPortalNews() {
      isLoading.value.deletedNews = true;
      try {
        const response = await $axios.get(
          `/portal-news?deletedOnly=true&page=${deletedNewspagination.value.page}&perPage=${deletedNewspagination.value.perPage}&search=${searchValues.value.deleted}`
        );
        deletedNews.value = response.data.news;
        deletedNewspagination.value.total = response.data.total;
      } catch (error) {
        console.error("API Error:", error);
      } finally {
        isLoading.value.deletedNews = false;
      }
    }
    function showSuccessMessage(message) {
    }
    function handleSubmitButton(formEl) {
      if (dialog.value.type === "create") handleCreate(formEl);
      else if (dialog.value.type === "edit") handleEdit(formEl);
      else if (dialog.value.type === "delete") handleDelete();
      else if (dialog.value.type === "unarchive") handleUnarchive();
    }
    function handleOpenDialog() {
      var _a;
      if (!((_a = categories.value) == null ? void 0 : _a.length) && (dialog.value.type === "create" || dialog.value.type === "edit"))
        getCategories();
    }
    function handleCloseDialog() {
      form.categoryId = "";
      form.title = "";
      form.text = "";
      form.author = "";
      form.images = null;
      form.videos = null;
      fileList.value = {
        images: [],
        videos: []
      };
      dialog.value.isOpened = false;
    }
    async function handleCreate(formEl) {
      if (!formEl) return;
      await formEl.validate(async (valid) => {
        if (valid) {
          isLoading.value.button = true;
          await uploadDataToCloudinary();
          try {
            await $axios.post("/portal-news", form);
            getAllNews();
            handleCloseDialog();
            showSuccessMessage("Uspje\u0161no ste dodali novu vijest.");
          } catch (error) {
            console.error("API Error:", error);
          } finally {
            isLoading.value.button = false;
          }
        }
      });
    }
    async function handleEdit(formEl) {
      if (!formEl) return;
      await formEl.validate(async (valid) => {
        var _a;
        if (valid) {
          isLoading.value.button = true;
          await uploadDataToCloudinary();
          try {
            await $axios.put(`/portal-news/${(_a = dialog.value.item) == null ? void 0 : _a.id}`, form);
            getAllNews();
            handleCloseDialog();
            showSuccessMessage("Uspje\u0161no ste uredili vijest.");
          } catch (error) {
            console.error("API Error:", error);
          } finally {
            isLoading.value.button = false;
          }
        }
      });
    }
    async function handleDelete() {
      var _a;
      isLoading.value.button = true;
      try {
        await $axios.delete(`/portal-news/${(_a = dialog.value.item) == null ? void 0 : _a.id}`);
        getAllNews();
        handleCloseDialog();
        showSuccessMessage("Uspje\u0161no ste obrisali vijest.");
      } catch (error) {
        console.error("API Error:", error);
      } finally {
        isLoading.value.button = false;
      }
    }
    async function handleUnarchive() {
      var _a;
      isLoading.value.button = true;
      try {
        await $axios.patch(`/portal-news/${(_a = dialog.value.item) == null ? void 0 : _a.id}/unarchive`);
        getAllNews();
        handleCloseDialog();
        showSuccessMessage("Uspje\u0161no ste vratili obrisanu vijest.");
      } catch (error) {
        console.error("API Error:", error);
      } finally {
        isLoading.value.button = false;
      }
    }
    function handleSetImageToFirstPlace(file) {
      const index = fileList.value.images.findIndex((f) => f.uid === file.uid);
      if (index > -1) {
        const [selected] = fileList.value.images.splice(index, 1);
        fileList.value.images.unshift(selected);
      }
      form.images = fileList.value.images.map((f) => f.url);
    }
    function handleImagePreview(file) {
      fullscreenImageUrl.value = file.url;
      fullscreenImageDialog.value = true;
    }
    function handleImageRemove(file) {
      const index = fileList.value.images.findIndex((f) => f.uid === file.uid);
      if (index > -1) fileList.value.images.splice(index, 1);
      form.images = fileList.value.images.length ? fileList.value.images.map((f) => f.url) : null;
    }
    async function handleVideoChange(event) {
      const files = event.target.files;
      if (!files) return;
      fileList.value.videos = files ? files : null;
    }
    function handleVideoDownload(file) {
      (void 0).location.href = file;
    }
    function handleVideoRemove(file) {
      var _a2;
      var _a;
      form.videos = (_a2 = (_a = form.videos) == null ? void 0 : _a.filter((video) => video !== file)) != null ? _a2 : [];
    }
    async function uploadDataToCloudinary() {
      if (!form.images) form.images = [];
      if (!form.videos) form.videos = [];
      for (const image of fileList.value.images) {
        if (image.raw) {
          const url = await cloudinaryUpload(image.raw, "image");
          if (url) form.images.push(url);
        }
      }
      for (const video of fileList.value.videos) {
        const url = await cloudinaryUpload(video, "video");
        if (url) form.videos.push(url);
      }
    }
    async function cloudinaryUpload(file, resourceType) {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("upload_preset", cloudinaryPreset);
      formData.append("resource_type", resourceType);
      try {
        const response = await fetch(
          `https://api.cloudinary.com/v1_1/${cloudinaryCloudName}/${resourceType}/upload`,
          {
            method: "POST",
            body: formData
          }
        );
        const data2 = await response.json();
        return data2.secure_url;
      } catch (error) {
        console.error("Upload failed:", error);
        return null;
      }
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ElRow = ElRow;
      const _component_ElCol = ElCol;
      const _component_ElButton = ElButton;
      const _component_ElIcon = ElIcon;
      const _component_ElInput = ElInput;
      const _component_ElTable = ElTable;
      const _component_ElTableColumn = ElTableColumn;
      const _component_ElDialog = ElDialog;
      const _component_ElForm = ElForm;
      const _component_ElFormItem = ElFormItem;
      const _component_ElSelect = ElSelect;
      const _component_ElOption = ElOption;
      const _component_ElUpload = ElUpload;
      const _component_ElTooltip = ElTooltip;
      const _directive_loading = vLoading;
      _push(`<!--[--><div class="backoffice-page" data-v-1a35262c>`);
      _push(ssrRenderComponent(_component_ElRow, {
        justify: "space-between",
        align: "middle",
        class: "w-100"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_ElCol, { span: 6 }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_ElCol, {
              span: 12,
              align: "center"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<h3 class="color-primary" data-v-1a35262c${_scopeId2}>Portal vijesti</h3>`);
                } else {
                  return [
                    createVNode("h3", { class: "color-primary" }, "Portal vijesti")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_ElCol, {
              span: 6,
              align: "end"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_ElButton, {
                    type: "primary",
                    plain: "",
                    onClick: ($event) => openDialog("create")
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_ElIcon, { size: "24" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(unref(circle_plus_filled_default), null, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(unref(circle_plus_filled_default))
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(`<span class="ml-8" data-v-1a35262c${_scopeId3}>Dodaj vijest</span>`);
                      } else {
                        return [
                          createVNode(_component_ElIcon, { size: "24" }, {
                            default: withCtx(() => [
                              createVNode(unref(circle_plus_filled_default))
                            ]),
                            _: 1
                          }),
                          createVNode("span", { class: "ml-8" }, "Dodaj vijest")
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
                      onClick: ($event) => openDialog("create")
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_ElIcon, { size: "24" }, {
                          default: withCtx(() => [
                            createVNode(unref(circle_plus_filled_default))
                          ]),
                          _: 1
                        }),
                        createVNode("span", { class: "ml-8" }, "Dodaj vijest")
                      ]),
                      _: 1
                    }, 8, ["onClick"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_ElCol, { span: 6 }),
              createVNode(_component_ElCol, {
                span: 12,
                align: "center"
              }, {
                default: withCtx(() => [
                  createVNode("h3", { class: "color-primary" }, "Portal vijesti")
                ]),
                _: 1
              }),
              createVNode(_component_ElCol, {
                span: 6,
                align: "end"
              }, {
                default: withCtx(() => [
                  createVNode(_component_ElButton, {
                    type: "primary",
                    plain: "",
                    onClick: ($event) => openDialog("create")
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_ElIcon, { size: "24" }, {
                        default: withCtx(() => [
                          createVNode(unref(circle_plus_filled_default))
                        ]),
                        _: 1
                      }),
                      createVNode("span", { class: "ml-8" }, "Dodaj vijest")
                    ]),
                    _: 1
                  }, 8, ["onClick"])
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
        align: "middle",
        class: "w-100"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_ElCol, {
              span: 8,
              offset: 8,
              align: "center"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span class="color-primary" data-v-1a35262c${_scopeId2}><b data-v-1a35262c${_scopeId2}>Aktivne vijesti</b></span>`);
                } else {
                  return [
                    createVNode("span", { class: "color-primary" }, [
                      createVNode("b", null, "Aktivne vijesti")
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_ElCol, {
              span: 8,
              align: "end"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_ElInput, {
                    modelValue: unref(searchValues).active,
                    "onUpdate:modelValue": ($event) => unref(searchValues).active = $event,
                    type: "text",
                    placeholder: "Pretra\u017Eite naslov...",
                    class: "max-w-250",
                    "prefix-icon": unref(search_default),
                    onInput: handleActiveSearch
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_ElInput, {
                      modelValue: unref(searchValues).active,
                      "onUpdate:modelValue": ($event) => unref(searchValues).active = $event,
                      type: "text",
                      placeholder: "Pretra\u017Eite naslov...",
                      class: "max-w-250",
                      "prefix-icon": unref(search_default),
                      onInput: handleActiveSearch
                    }, null, 8, ["modelValue", "onUpdate:modelValue", "prefix-icon"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_ElCol, {
                span: 8,
                offset: 8,
                align: "center"
              }, {
                default: withCtx(() => [
                  createVNode("span", { class: "color-primary" }, [
                    createVNode("b", null, "Aktivne vijesti")
                  ])
                ]),
                _: 1
              }),
              createVNode(_component_ElCol, {
                span: 8,
                align: "end"
              }, {
                default: withCtx(() => [
                  createVNode(_component_ElInput, {
                    modelValue: unref(searchValues).active,
                    "onUpdate:modelValue": ($event) => unref(searchValues).active = $event,
                    type: "text",
                    placeholder: "Pretra\u017Eite naslov...",
                    class: "max-w-250",
                    "prefix-icon": unref(search_default),
                    onInput: handleActiveSearch
                  }, null, 8, ["modelValue", "onUpdate:modelValue", "prefix-icon"])
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_ElTable, mergeProps({
        data: unref(activeNews),
        stripe: "",
        "empty-text": "Nema dostupnih podataka"
      }, ssrGetDirectiveProps(_ctx, _directive_loading, unref(isLoading).activeNews)), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_ElTableColumn, {
              label: "Naslov",
              prop: "title"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_ElTableColumn, {
              label: "Kategorija",
              prop: "category.name"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_ElTableColumn, {
              label: "Autor",
              prop: "author"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_ElTableColumn, {
              label: "Akcije",
              align: "center",
              width: "148"
            }, {
              default: withCtx((items, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_ElButton, {
                    type: "primary",
                    plain: "",
                    onClick: ($event) => openDialog("edit", items.row)
                  }, {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_ElIcon, { size: "24" }, {
                          default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(unref(edit_default), null, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(unref(edit_default))
                              ];
                            }
                          }),
                          _: 2
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_ElIcon, { size: "24" }, {
                            default: withCtx(() => [
                              createVNode(unref(edit_default))
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_ElButton, {
                    type: "danger",
                    plain: "",
                    onClick: ($event) => openDialog("delete", items.row)
                  }, {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_ElIcon, { size: "24" }, {
                          default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(unref(delete_filled_default), null, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(unref(delete_filled_default))
                              ];
                            }
                          }),
                          _: 2
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_ElIcon, { size: "24" }, {
                            default: withCtx(() => [
                              createVNode(unref(delete_filled_default))
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_ElButton, {
                      type: "primary",
                      plain: "",
                      onClick: ($event) => openDialog("edit", items.row)
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_ElIcon, { size: "24" }, {
                          default: withCtx(() => [
                            createVNode(unref(edit_default))
                          ]),
                          _: 1
                        })
                      ]),
                      _: 2
                    }, 1032, ["onClick"]),
                    createVNode(_component_ElButton, {
                      type: "danger",
                      plain: "",
                      onClick: ($event) => openDialog("delete", items.row)
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_ElIcon, { size: "24" }, {
                          default: withCtx(() => [
                            createVNode(unref(delete_filled_default))
                          ]),
                          _: 1
                        })
                      ]),
                      _: 2
                    }, 1032, ["onClick"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_ElTableColumn, {
                label: "Naslov",
                prop: "title"
              }),
              createVNode(_component_ElTableColumn, {
                label: "Kategorija",
                prop: "category.name"
              }),
              createVNode(_component_ElTableColumn, {
                label: "Autor",
                prop: "author"
              }),
              createVNode(_component_ElTableColumn, {
                label: "Akcije",
                align: "center",
                width: "148"
              }, {
                default: withCtx((items) => [
                  createVNode(_component_ElButton, {
                    type: "primary",
                    plain: "",
                    onClick: ($event) => openDialog("edit", items.row)
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_ElIcon, { size: "24" }, {
                        default: withCtx(() => [
                          createVNode(unref(edit_default))
                        ]),
                        _: 1
                      })
                    ]),
                    _: 2
                  }, 1032, ["onClick"]),
                  createVNode(_component_ElButton, {
                    type: "danger",
                    plain: "",
                    onClick: ($event) => openDialog("delete", items.row)
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_ElIcon, { size: "24" }, {
                        default: withCtx(() => [
                          createVNode(unref(delete_filled_default))
                        ]),
                        _: 1
                      })
                    ]),
                    _: 2
                  }, 1032, ["onClick"])
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      if (unref(activeNewsPagination).total > 10) {
        _push(ssrRenderComponent(Pagination, {
          modelValue: unref(activeNewsPagination),
          "onUpdate:modelValue": ($event) => isRef(activeNewsPagination) ? activeNewsPagination.value = $event : null,
          loading: unref(isLoading).deletedNews,
          "scroll-element-id": "scroll-element",
          onPageChange: getActivePortalNews,
          class: "mb-24"
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(ssrRenderComponent(_component_ElRow, {
        justify: "center",
        align: "middle",
        class: "w-100"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_ElCol, {
              span: 8,
              offset: 8,
              align: "center"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span class="color-primary" data-v-1a35262c${_scopeId2}><b data-v-1a35262c${_scopeId2}>Obrisane vijesti</b></span>`);
                } else {
                  return [
                    createVNode("span", { class: "color-primary" }, [
                      createVNode("b", null, "Obrisane vijesti")
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_ElCol, {
              span: 8,
              align: "end"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_ElInput, {
                    modelValue: unref(searchValues).deleted,
                    "onUpdate:modelValue": ($event) => unref(searchValues).deleted = $event,
                    type: "text",
                    placeholder: "Pretra\u017Eite naslov...",
                    class: "max-w-250",
                    "prefix-icon": unref(search_default),
                    onInput: handleDeletedSearch
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_ElInput, {
                      modelValue: unref(searchValues).deleted,
                      "onUpdate:modelValue": ($event) => unref(searchValues).deleted = $event,
                      type: "text",
                      placeholder: "Pretra\u017Eite naslov...",
                      class: "max-w-250",
                      "prefix-icon": unref(search_default),
                      onInput: handleDeletedSearch
                    }, null, 8, ["modelValue", "onUpdate:modelValue", "prefix-icon"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_ElCol, {
                span: 8,
                offset: 8,
                align: "center"
              }, {
                default: withCtx(() => [
                  createVNode("span", { class: "color-primary" }, [
                    createVNode("b", null, "Obrisane vijesti")
                  ])
                ]),
                _: 1
              }),
              createVNode(_component_ElCol, {
                span: 8,
                align: "end"
              }, {
                default: withCtx(() => [
                  createVNode(_component_ElInput, {
                    modelValue: unref(searchValues).deleted,
                    "onUpdate:modelValue": ($event) => unref(searchValues).deleted = $event,
                    type: "text",
                    placeholder: "Pretra\u017Eite naslov...",
                    class: "max-w-250",
                    "prefix-icon": unref(search_default),
                    onInput: handleDeletedSearch
                  }, null, 8, ["modelValue", "onUpdate:modelValue", "prefix-icon"])
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_ElTable, mergeProps({
        data: unref(deletedNews),
        stripe: "",
        "empty-text": "Nema dostupnih podataka"
      }, ssrGetDirectiveProps(_ctx, _directive_loading, unref(isLoading).deletedNews)), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_ElTableColumn, {
              label: "Naslov",
              prop: "title"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_ElTableColumn, {
              label: "Kategorija",
              prop: "category.name"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_ElTableColumn, {
              label: "Autor",
              prop: "author"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_ElTableColumn, {
              label: "Akcije",
              align: "center",
              width: "80"
            }, {
              default: withCtx((items, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_ElButton, {
                    type: "primary",
                    plain: "",
                    onClick: ($event) => openDialog("unarchive", items.row)
                  }, {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_ElIcon, { size: "24" }, {
                          default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(unref(refresh_left_default), null, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(unref(refresh_left_default))
                              ];
                            }
                          }),
                          _: 2
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_ElIcon, { size: "24" }, {
                            default: withCtx(() => [
                              createVNode(unref(refresh_left_default))
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_ElButton, {
                      type: "primary",
                      plain: "",
                      onClick: ($event) => openDialog("unarchive", items.row)
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_ElIcon, { size: "24" }, {
                          default: withCtx(() => [
                            createVNode(unref(refresh_left_default))
                          ]),
                          _: 1
                        })
                      ]),
                      _: 2
                    }, 1032, ["onClick"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_ElTableColumn, {
                label: "Naslov",
                prop: "title"
              }),
              createVNode(_component_ElTableColumn, {
                label: "Kategorija",
                prop: "category.name"
              }),
              createVNode(_component_ElTableColumn, {
                label: "Autor",
                prop: "author"
              }),
              createVNode(_component_ElTableColumn, {
                label: "Akcije",
                align: "center",
                width: "80"
              }, {
                default: withCtx((items) => [
                  createVNode(_component_ElButton, {
                    type: "primary",
                    plain: "",
                    onClick: ($event) => openDialog("unarchive", items.row)
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_ElIcon, { size: "24" }, {
                        default: withCtx(() => [
                          createVNode(unref(refresh_left_default))
                        ]),
                        _: 1
                      })
                    ]),
                    _: 2
                  }, 1032, ["onClick"])
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      if (unref(deletedNewspagination).total > 10) {
        _push(ssrRenderComponent(Pagination, {
          modelValue: unref(deletedNewspagination),
          "onUpdate:modelValue": ($event) => isRef(deletedNewspagination) ? deletedNewspagination.value = $event : null,
          loading: unref(isLoading).deletedNews,
          "scroll-element-id": "scroll-element",
          onPageChange: getDeletedPortalNews,
          class: "mb-24"
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
      _push(ssrRenderComponent(_component_ElDialog, {
        modelValue: unref(dialog).isOpened,
        "onUpdate:modelValue": ($event) => unref(dialog).isOpened = $event,
        "close-on-click-modal": false,
        "destroy-on-close": "",
        fullscreen: "",
        onOpen: handleOpenDialog,
        onClose: handleCloseDialog
      }, {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_ElRow, { justify: "center" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<h3 class="color-primary" data-v-1a35262c${_scopeId2}>`);
                  if (unref(dialog).type === "create") {
                    _push3(`<span data-v-1a35262c${_scopeId2}>Dodaj novu vijest</span>`);
                  } else if (unref(dialog).type === "edit") {
                    _push3(`<span data-v-1a35262c${_scopeId2}>Uredi vijest</span>`);
                  } else if (unref(dialog).type === "unarchive") {
                    _push3(`<span data-v-1a35262c${_scopeId2}>Vrati vijest</span>`);
                  } else {
                    _push3(`<span data-v-1a35262c${_scopeId2}>Obri\u0161i vijest</span>`);
                  }
                  _push3(`</h3>`);
                } else {
                  return [
                    createVNode("h3", { class: "color-primary" }, [
                      unref(dialog).type === "create" ? (openBlock(), createBlock("span", { key: 0 }, "Dodaj novu vijest")) : unref(dialog).type === "edit" ? (openBlock(), createBlock("span", { key: 1 }, "Uredi vijest")) : unref(dialog).type === "unarchive" ? (openBlock(), createBlock("span", { key: 2 }, "Vrati vijest")) : (openBlock(), createBlock("span", { key: 3 }, "Obri\u0161i vijest"))
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_ElRow, { justify: "center" }, {
                default: withCtx(() => [
                  createVNode("h3", { class: "color-primary" }, [
                    unref(dialog).type === "create" ? (openBlock(), createBlock("span", { key: 0 }, "Dodaj novu vijest")) : unref(dialog).type === "edit" ? (openBlock(), createBlock("span", { key: 1 }, "Uredi vijest")) : unref(dialog).type === "unarchive" ? (openBlock(), createBlock("span", { key: 2 }, "Vrati vijest")) : (openBlock(), createBlock("span", { key: 3 }, "Obri\u0161i vijest"))
                  ])
                ]),
                _: 1
              })
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (unref(dialog).type === "create" || unref(dialog).type === "edit") {
              _push2(ssrRenderComponent(_component_ElRow, { justify: "center" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_ElForm, {
                      "label-position": _ctx.$viewport.isLessThan("tablet") ? "top" : "left",
                      "require-asterisk-position": "right",
                      ref_key: "ruleFormRef",
                      ref: ruleFormRef,
                      class: "form",
                      model: unref(form),
                      rules: unref(rules),
                      "label-width": "auto",
                      "status-icon": ""
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        var _a, _b;
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_ElFormItem, {
                            label: "Kategorija",
                            prop: "categoryId"
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(_component_ElSelect, {
                                  modelValue: unref(form).categoryId,
                                  "onUpdate:modelValue": ($event) => unref(form).categoryId = $event,
                                  loading: unref(isLoading).categories,
                                  placeholder: "Odaberite kategoriju",
                                  class: "input-width",
                                  clearable: ""
                                }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(`<!--[-->`);
                                      ssrRenderList(unref(categories), (category) => {
                                        _push6(ssrRenderComponent(_component_ElOption, {
                                          key: String(category.id),
                                          label: String(category.name),
                                          value: String(category.id)
                                        }, null, _parent6, _scopeId5));
                                      });
                                      _push6(`<!--]-->`);
                                    } else {
                                      return [
                                        (openBlock(true), createBlock(Fragment, null, renderList(unref(categories), (category) => {
                                          return openBlock(), createBlock(_component_ElOption, {
                                            key: String(category.id),
                                            label: String(category.name),
                                            value: String(category.id)
                                          }, null, 8, ["label", "value"]);
                                        }), 128))
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(_component_ElSelect, {
                                    modelValue: unref(form).categoryId,
                                    "onUpdate:modelValue": ($event) => unref(form).categoryId = $event,
                                    loading: unref(isLoading).categories,
                                    placeholder: "Odaberite kategoriju",
                                    class: "input-width",
                                    clearable: ""
                                  }, {
                                    default: withCtx(() => [
                                      (openBlock(true), createBlock(Fragment, null, renderList(unref(categories), (category) => {
                                        return openBlock(), createBlock(_component_ElOption, {
                                          key: String(category.id),
                                          label: String(category.name),
                                          value: String(category.id)
                                        }, null, 8, ["label", "value"]);
                                      }), 128))
                                    ]),
                                    _: 1
                                  }, 8, ["modelValue", "onUpdate:modelValue", "loading"])
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(_component_ElFormItem, {
                            label: "Naslov",
                            prop: "title"
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(_component_ElInput, {
                                  modelValue: unref(form).title,
                                  "onUpdate:modelValue": ($event) => unref(form).title = $event,
                                  placeholder: "Moja vijest",
                                  class: "input-width"
                                }, null, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(_component_ElInput, {
                                    modelValue: unref(form).title,
                                    "onUpdate:modelValue": ($event) => unref(form).title = $event,
                                    placeholder: "Moja vijest",
                                    class: "input-width"
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(_component_ElFormItem, {
                            label: "Autor",
                            prop: "author"
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(_component_ElInput, {
                                  modelValue: unref(form).author,
                                  "onUpdate:modelValue": ($event) => unref(form).author = $event,
                                  placeholder: "John Doe",
                                  class: "input-width"
                                }, null, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(_component_ElInput, {
                                    modelValue: unref(form).author,
                                    "onUpdate:modelValue": ($event) => unref(form).author = $event,
                                    placeholder: "John Doe",
                                    class: "input-width"
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                          _push4(`<div style="${ssrRenderStyle({ "height": "450px" })}" data-v-1a35262c${_scopeId3}>`);
                          _push4(ssrRenderComponent(_component_ElFormItem, {
                            label: "Sadr\u017Eaj",
                            prop: "text"
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(unref(script), {
                                  modelValue: unref(form).text,
                                  "onUpdate:modelValue": ($event) => unref(form).text = $event,
                                  class: "editor"
                                }, null, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(unref(script), {
                                    modelValue: unref(form).text,
                                    "onUpdate:modelValue": ($event) => unref(form).text = $event,
                                    class: "editor"
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                          _push4(`</div>`);
                          _push4(ssrRenderComponent(_component_ElFormItem, {
                            label: "Slike",
                            prop: "images",
                            class: "mt-12"
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(_component_ElUpload, {
                                  "file-list": unref(fileList).images,
                                  "onUpdate:fileList": ($event) => unref(fileList).images = $event,
                                  action: "#",
                                  "list-type": "picture-card",
                                  "auto-upload": false,
                                  multiple: "",
                                  accept: "image/*"
                                }, {
                                  file: withCtx(({ file }, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(`<div data-v-1a35262c${_scopeId5}><img class="el-upload-list__item-thumbnail"${ssrRenderAttr("src", file.url)} alt="" data-v-1a35262c${_scopeId5}><span class="el-upload-list__item-actions" data-v-1a35262c${_scopeId5}>`);
                                      _push6(ssrRenderComponent(_component_ElTooltip, {
                                        effect: "dark",
                                        content: "Postavi na prvu poziciju",
                                        placement: "top",
                                        "show-after": 500
                                      }, {
                                        default: withCtx((_5, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            if (unref(fileList).images[0].url !== file.url) {
                                              _push7(`<span data-v-1a35262c${_scopeId6}>`);
                                              _push7(ssrRenderComponent(_component_ElIcon, null, {
                                                default: withCtx((_6, _push8, _parent8, _scopeId7) => {
                                                  if (_push8) {
                                                    _push8(ssrRenderComponent(unref(gold_medal_default), null, null, _parent8, _scopeId7));
                                                  } else {
                                                    return [
                                                      createVNode(unref(gold_medal_default))
                                                    ];
                                                  }
                                                }),
                                                _: 2
                                              }, _parent7, _scopeId6));
                                              _push7(`</span>`);
                                            } else {
                                              _push7(`<!---->`);
                                            }
                                          } else {
                                            return [
                                              unref(fileList).images[0].url !== file.url ? (openBlock(), createBlock("span", {
                                                key: 0,
                                                onClick: ($event) => handleSetImageToFirstPlace(file)
                                              }, [
                                                createVNode(_component_ElIcon, null, {
                                                  default: withCtx(() => [
                                                    createVNode(unref(gold_medal_default))
                                                  ]),
                                                  _: 1
                                                })
                                              ], 8, ["onClick"])) : createCommentVNode("", true)
                                            ];
                                          }
                                        }),
                                        _: 2
                                      }, _parent6, _scopeId5));
                                      _push6(`<span data-v-1a35262c${_scopeId5}>`);
                                      _push6(ssrRenderComponent(_component_ElIcon, null, {
                                        default: withCtx((_5, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(ssrRenderComponent(unref(zoom_in_default), null, null, _parent7, _scopeId6));
                                          } else {
                                            return [
                                              createVNode(unref(zoom_in_default))
                                            ];
                                          }
                                        }),
                                        _: 2
                                      }, _parent6, _scopeId5));
                                      _push6(`</span><span data-v-1a35262c${_scopeId5}>`);
                                      _push6(ssrRenderComponent(_component_ElIcon, null, {
                                        default: withCtx((_5, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(ssrRenderComponent(unref(delete_default), null, null, _parent7, _scopeId6));
                                          } else {
                                            return [
                                              createVNode(unref(delete_default))
                                            ];
                                          }
                                        }),
                                        _: 2
                                      }, _parent6, _scopeId5));
                                      _push6(`</span></span></div>`);
                                    } else {
                                      return [
                                        createVNode("div", null, [
                                          createVNode("img", {
                                            class: "el-upload-list__item-thumbnail",
                                            src: file.url,
                                            alt: ""
                                          }, null, 8, ["src"]),
                                          createVNode("span", { class: "el-upload-list__item-actions" }, [
                                            createVNode(_component_ElTooltip, {
                                              effect: "dark",
                                              content: "Postavi na prvu poziciju",
                                              placement: "top",
                                              "show-after": 500
                                            }, {
                                              default: withCtx(() => [
                                                unref(fileList).images[0].url !== file.url ? (openBlock(), createBlock("span", {
                                                  key: 0,
                                                  onClick: ($event) => handleSetImageToFirstPlace(file)
                                                }, [
                                                  createVNode(_component_ElIcon, null, {
                                                    default: withCtx(() => [
                                                      createVNode(unref(gold_medal_default))
                                                    ]),
                                                    _: 1
                                                  })
                                                ], 8, ["onClick"])) : createCommentVNode("", true)
                                              ]),
                                              _: 2
                                            }, 1024),
                                            createVNode("span", {
                                              onClick: ($event) => handleImagePreview(file)
                                            }, [
                                              createVNode(_component_ElIcon, null, {
                                                default: withCtx(() => [
                                                  createVNode(unref(zoom_in_default))
                                                ]),
                                                _: 1
                                              })
                                            ], 8, ["onClick"]),
                                            createVNode("span", {
                                              onClick: ($event) => handleImageRemove(file)
                                            }, [
                                              createVNode(_component_ElIcon, null, {
                                                default: withCtx(() => [
                                                  createVNode(unref(delete_default))
                                                ]),
                                                _: 1
                                              })
                                            ], 8, ["onClick"])
                                          ])
                                        ])
                                      ];
                                    }
                                  }),
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(ssrRenderComponent(_component_ElIcon, null, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(ssrRenderComponent(unref(plus_default), null, null, _parent7, _scopeId6));
                                          } else {
                                            return [
                                              createVNode(unref(plus_default))
                                            ];
                                          }
                                        }),
                                        _: 1
                                      }, _parent6, _scopeId5));
                                    } else {
                                      return [
                                        createVNode(_component_ElIcon, null, {
                                          default: withCtx(() => [
                                            createVNode(unref(plus_default))
                                          ]),
                                          _: 1
                                        })
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(_component_ElUpload, {
                                    "file-list": unref(fileList).images,
                                    "onUpdate:fileList": ($event) => unref(fileList).images = $event,
                                    action: "#",
                                    "list-type": "picture-card",
                                    "auto-upload": false,
                                    multiple: "",
                                    accept: "image/*"
                                  }, {
                                    file: withCtx(({ file }) => [
                                      createVNode("div", null, [
                                        createVNode("img", {
                                          class: "el-upload-list__item-thumbnail",
                                          src: file.url,
                                          alt: ""
                                        }, null, 8, ["src"]),
                                        createVNode("span", { class: "el-upload-list__item-actions" }, [
                                          createVNode(_component_ElTooltip, {
                                            effect: "dark",
                                            content: "Postavi na prvu poziciju",
                                            placement: "top",
                                            "show-after": 500
                                          }, {
                                            default: withCtx(() => [
                                              unref(fileList).images[0].url !== file.url ? (openBlock(), createBlock("span", {
                                                key: 0,
                                                onClick: ($event) => handleSetImageToFirstPlace(file)
                                              }, [
                                                createVNode(_component_ElIcon, null, {
                                                  default: withCtx(() => [
                                                    createVNode(unref(gold_medal_default))
                                                  ]),
                                                  _: 1
                                                })
                                              ], 8, ["onClick"])) : createCommentVNode("", true)
                                            ]),
                                            _: 2
                                          }, 1024),
                                          createVNode("span", {
                                            onClick: ($event) => handleImagePreview(file)
                                          }, [
                                            createVNode(_component_ElIcon, null, {
                                              default: withCtx(() => [
                                                createVNode(unref(zoom_in_default))
                                              ]),
                                              _: 1
                                            })
                                          ], 8, ["onClick"]),
                                          createVNode("span", {
                                            onClick: ($event) => handleImageRemove(file)
                                          }, [
                                            createVNode(_component_ElIcon, null, {
                                              default: withCtx(() => [
                                                createVNode(unref(delete_default))
                                              ]),
                                              _: 1
                                            })
                                          ], 8, ["onClick"])
                                        ])
                                      ])
                                    ]),
                                    default: withCtx(() => [
                                      createVNode(_component_ElIcon, null, {
                                        default: withCtx(() => [
                                          createVNode(unref(plus_default))
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  }, 8, ["file-list", "onUpdate:fileList"])
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                          if ((_a = unref(form).videos) == null ? void 0 : _a.length) {
                            _push4(ssrRenderComponent(_component_ElFormItem, { label: "Dodani video" }, {
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(`<!--[-->`);
                                  ssrRenderList(unref(form).videos, (video) => {
                                    _push5(ssrRenderComponent(_component_ElRow, {
                                      justify: "center",
                                      align: "middle"
                                    }, {
                                      default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                        if (_push6) {
                                          _push6(` * ${ssrInterpolate(video)} `);
                                          _push6(ssrRenderComponent(_component_ElIcon, {
                                            size: 18,
                                            onClick: ($event) => handleVideoDownload(video),
                                            class: "ml-8 video-download-icon"
                                          }, {
                                            default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                              if (_push7) {
                                                _push7(ssrRenderComponent(unref(download_default), null, null, _parent7, _scopeId6));
                                              } else {
                                                return [
                                                  createVNode(unref(download_default))
                                                ];
                                              }
                                            }),
                                            _: 2
                                          }, _parent6, _scopeId5));
                                          _push6(ssrRenderComponent(_component_ElIcon, {
                                            size: 18,
                                            onClick: ($event) => handleVideoRemove(video),
                                            class: "ml-8 video-remove-icon"
                                          }, {
                                            default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                              if (_push7) {
                                                _push7(ssrRenderComponent(unref(delete_default), null, null, _parent7, _scopeId6));
                                              } else {
                                                return [
                                                  createVNode(unref(delete_default))
                                                ];
                                              }
                                            }),
                                            _: 2
                                          }, _parent6, _scopeId5));
                                        } else {
                                          return [
                                            createTextVNode(" * " + toDisplayString(video) + " ", 1),
                                            createVNode(_component_ElIcon, {
                                              size: 18,
                                              onClick: ($event) => handleVideoDownload(video),
                                              class: "ml-8 video-download-icon"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(unref(download_default))
                                              ]),
                                              _: 2
                                            }, 1032, ["onClick"]),
                                            createVNode(_component_ElIcon, {
                                              size: 18,
                                              onClick: ($event) => handleVideoRemove(video),
                                              class: "ml-8 video-remove-icon"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(unref(delete_default))
                                              ]),
                                              _: 2
                                            }, 1032, ["onClick"])
                                          ];
                                        }
                                      }),
                                      _: 2
                                    }, _parent5, _scopeId4));
                                  });
                                  _push5(`<!--]-->`);
                                } else {
                                  return [
                                    (openBlock(true), createBlock(Fragment, null, renderList(unref(form).videos, (video) => {
                                      return openBlock(), createBlock(_component_ElRow, {
                                        justify: "center",
                                        align: "middle"
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(" * " + toDisplayString(video) + " ", 1),
                                          createVNode(_component_ElIcon, {
                                            size: 18,
                                            onClick: ($event) => handleVideoDownload(video),
                                            class: "ml-8 video-download-icon"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(unref(download_default))
                                            ]),
                                            _: 2
                                          }, 1032, ["onClick"]),
                                          createVNode(_component_ElIcon, {
                                            size: 18,
                                            onClick: ($event) => handleVideoRemove(video),
                                            class: "ml-8 video-remove-icon"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(unref(delete_default))
                                            ]),
                                            _: 2
                                          }, 1032, ["onClick"])
                                        ]),
                                        _: 2
                                      }, 1024);
                                    }), 256))
                                  ];
                                }
                              }),
                              _: 1
                            }, _parent4, _scopeId3));
                          } else {
                            _push4(`<!---->`);
                          }
                          _push4(ssrRenderComponent(_component_ElFormItem, {
                            label: "Video",
                            prop: "videos"
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`<input type="file" multiple accept="video/*" data-v-1a35262c${_scopeId4}>`);
                              } else {
                                return [
                                  createVNode("input", {
                                    type: "file",
                                    multiple: "",
                                    accept: "video/*",
                                    onChange: handleVideoChange
                                  }, null, 32)
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(_component_ElFormItem, {
                              label: "Kategorija",
                              prop: "categoryId"
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_ElSelect, {
                                  modelValue: unref(form).categoryId,
                                  "onUpdate:modelValue": ($event) => unref(form).categoryId = $event,
                                  loading: unref(isLoading).categories,
                                  placeholder: "Odaberite kategoriju",
                                  class: "input-width",
                                  clearable: ""
                                }, {
                                  default: withCtx(() => [
                                    (openBlock(true), createBlock(Fragment, null, renderList(unref(categories), (category) => {
                                      return openBlock(), createBlock(_component_ElOption, {
                                        key: String(category.id),
                                        label: String(category.name),
                                        value: String(category.id)
                                      }, null, 8, ["label", "value"]);
                                    }), 128))
                                  ]),
                                  _: 1
                                }, 8, ["modelValue", "onUpdate:modelValue", "loading"])
                              ]),
                              _: 1
                            }),
                            createVNode(_component_ElFormItem, {
                              label: "Naslov",
                              prop: "title"
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_ElInput, {
                                  modelValue: unref(form).title,
                                  "onUpdate:modelValue": ($event) => unref(form).title = $event,
                                  placeholder: "Moja vijest",
                                  class: "input-width"
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ]),
                              _: 1
                            }),
                            createVNode(_component_ElFormItem, {
                              label: "Autor",
                              prop: "author"
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_ElInput, {
                                  modelValue: unref(form).author,
                                  "onUpdate:modelValue": ($event) => unref(form).author = $event,
                                  placeholder: "John Doe",
                                  class: "input-width"
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ]),
                              _: 1
                            }),
                            createVNode("div", { style: { "height": "450px" } }, [
                              createVNode(_component_ElFormItem, {
                                label: "Sadr\u017Eaj",
                                prop: "text"
                              }, {
                                default: withCtx(() => [
                                  createVNode(unref(script), {
                                    modelValue: unref(form).text,
                                    "onUpdate:modelValue": ($event) => unref(form).text = $event,
                                    class: "editor"
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                ]),
                                _: 1
                              })
                            ]),
                            createVNode(_component_ElFormItem, {
                              label: "Slike",
                              prop: "images",
                              class: "mt-12"
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_ElUpload, {
                                  "file-list": unref(fileList).images,
                                  "onUpdate:fileList": ($event) => unref(fileList).images = $event,
                                  action: "#",
                                  "list-type": "picture-card",
                                  "auto-upload": false,
                                  multiple: "",
                                  accept: "image/*"
                                }, {
                                  file: withCtx(({ file }) => [
                                    createVNode("div", null, [
                                      createVNode("img", {
                                        class: "el-upload-list__item-thumbnail",
                                        src: file.url,
                                        alt: ""
                                      }, null, 8, ["src"]),
                                      createVNode("span", { class: "el-upload-list__item-actions" }, [
                                        createVNode(_component_ElTooltip, {
                                          effect: "dark",
                                          content: "Postavi na prvu poziciju",
                                          placement: "top",
                                          "show-after": 500
                                        }, {
                                          default: withCtx(() => [
                                            unref(fileList).images[0].url !== file.url ? (openBlock(), createBlock("span", {
                                              key: 0,
                                              onClick: ($event) => handleSetImageToFirstPlace(file)
                                            }, [
                                              createVNode(_component_ElIcon, null, {
                                                default: withCtx(() => [
                                                  createVNode(unref(gold_medal_default))
                                                ]),
                                                _: 1
                                              })
                                            ], 8, ["onClick"])) : createCommentVNode("", true)
                                          ]),
                                          _: 2
                                        }, 1024),
                                        createVNode("span", {
                                          onClick: ($event) => handleImagePreview(file)
                                        }, [
                                          createVNode(_component_ElIcon, null, {
                                            default: withCtx(() => [
                                              createVNode(unref(zoom_in_default))
                                            ]),
                                            _: 1
                                          })
                                        ], 8, ["onClick"]),
                                        createVNode("span", {
                                          onClick: ($event) => handleImageRemove(file)
                                        }, [
                                          createVNode(_component_ElIcon, null, {
                                            default: withCtx(() => [
                                              createVNode(unref(delete_default))
                                            ]),
                                            _: 1
                                          })
                                        ], 8, ["onClick"])
                                      ])
                                    ])
                                  ]),
                                  default: withCtx(() => [
                                    createVNode(_component_ElIcon, null, {
                                      default: withCtx(() => [
                                        createVNode(unref(plus_default))
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }, 8, ["file-list", "onUpdate:fileList"])
                              ]),
                              _: 1
                            }),
                            ((_b = unref(form).videos) == null ? void 0 : _b.length) ? (openBlock(), createBlock(_component_ElFormItem, {
                              key: 0,
                              label: "Dodani video"
                            }, {
                              default: withCtx(() => [
                                (openBlock(true), createBlock(Fragment, null, renderList(unref(form).videos, (video) => {
                                  return openBlock(), createBlock(_component_ElRow, {
                                    justify: "center",
                                    align: "middle"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(" * " + toDisplayString(video) + " ", 1),
                                      createVNode(_component_ElIcon, {
                                        size: 18,
                                        onClick: ($event) => handleVideoDownload(video),
                                        class: "ml-8 video-download-icon"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(unref(download_default))
                                        ]),
                                        _: 2
                                      }, 1032, ["onClick"]),
                                      createVNode(_component_ElIcon, {
                                        size: 18,
                                        onClick: ($event) => handleVideoRemove(video),
                                        class: "ml-8 video-remove-icon"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(unref(delete_default))
                                        ]),
                                        _: 2
                                      }, 1032, ["onClick"])
                                    ]),
                                    _: 2
                                  }, 1024);
                                }), 256))
                              ]),
                              _: 1
                            })) : createCommentVNode("", true),
                            createVNode(_component_ElFormItem, {
                              label: "Video",
                              prop: "videos"
                            }, {
                              default: withCtx(() => [
                                createVNode("input", {
                                  type: "file",
                                  multiple: "",
                                  accept: "video/*",
                                  onChange: handleVideoChange
                                }, null, 32)
                              ]),
                              _: 1
                            })
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
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
                        "status-icon": ""
                      }, {
                        default: withCtx(() => {
                          var _a;
                          return [
                            createVNode(_component_ElFormItem, {
                              label: "Kategorija",
                              prop: "categoryId"
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_ElSelect, {
                                  modelValue: unref(form).categoryId,
                                  "onUpdate:modelValue": ($event) => unref(form).categoryId = $event,
                                  loading: unref(isLoading).categories,
                                  placeholder: "Odaberite kategoriju",
                                  class: "input-width",
                                  clearable: ""
                                }, {
                                  default: withCtx(() => [
                                    (openBlock(true), createBlock(Fragment, null, renderList(unref(categories), (category) => {
                                      return openBlock(), createBlock(_component_ElOption, {
                                        key: String(category.id),
                                        label: String(category.name),
                                        value: String(category.id)
                                      }, null, 8, ["label", "value"]);
                                    }), 128))
                                  ]),
                                  _: 1
                                }, 8, ["modelValue", "onUpdate:modelValue", "loading"])
                              ]),
                              _: 1
                            }),
                            createVNode(_component_ElFormItem, {
                              label: "Naslov",
                              prop: "title"
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_ElInput, {
                                  modelValue: unref(form).title,
                                  "onUpdate:modelValue": ($event) => unref(form).title = $event,
                                  placeholder: "Moja vijest",
                                  class: "input-width"
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ]),
                              _: 1
                            }),
                            createVNode(_component_ElFormItem, {
                              label: "Autor",
                              prop: "author"
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_ElInput, {
                                  modelValue: unref(form).author,
                                  "onUpdate:modelValue": ($event) => unref(form).author = $event,
                                  placeholder: "John Doe",
                                  class: "input-width"
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ]),
                              _: 1
                            }),
                            createVNode("div", { style: { "height": "450px" } }, [
                              createVNode(_component_ElFormItem, {
                                label: "Sadr\u017Eaj",
                                prop: "text"
                              }, {
                                default: withCtx(() => [
                                  createVNode(unref(script), {
                                    modelValue: unref(form).text,
                                    "onUpdate:modelValue": ($event) => unref(form).text = $event,
                                    class: "editor"
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                ]),
                                _: 1
                              })
                            ]),
                            createVNode(_component_ElFormItem, {
                              label: "Slike",
                              prop: "images",
                              class: "mt-12"
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_ElUpload, {
                                  "file-list": unref(fileList).images,
                                  "onUpdate:fileList": ($event) => unref(fileList).images = $event,
                                  action: "#",
                                  "list-type": "picture-card",
                                  "auto-upload": false,
                                  multiple: "",
                                  accept: "image/*"
                                }, {
                                  file: withCtx(({ file }) => [
                                    createVNode("div", null, [
                                      createVNode("img", {
                                        class: "el-upload-list__item-thumbnail",
                                        src: file.url,
                                        alt: ""
                                      }, null, 8, ["src"]),
                                      createVNode("span", { class: "el-upload-list__item-actions" }, [
                                        createVNode(_component_ElTooltip, {
                                          effect: "dark",
                                          content: "Postavi na prvu poziciju",
                                          placement: "top",
                                          "show-after": 500
                                        }, {
                                          default: withCtx(() => [
                                            unref(fileList).images[0].url !== file.url ? (openBlock(), createBlock("span", {
                                              key: 0,
                                              onClick: ($event) => handleSetImageToFirstPlace(file)
                                            }, [
                                              createVNode(_component_ElIcon, null, {
                                                default: withCtx(() => [
                                                  createVNode(unref(gold_medal_default))
                                                ]),
                                                _: 1
                                              })
                                            ], 8, ["onClick"])) : createCommentVNode("", true)
                                          ]),
                                          _: 2
                                        }, 1024),
                                        createVNode("span", {
                                          onClick: ($event) => handleImagePreview(file)
                                        }, [
                                          createVNode(_component_ElIcon, null, {
                                            default: withCtx(() => [
                                              createVNode(unref(zoom_in_default))
                                            ]),
                                            _: 1
                                          })
                                        ], 8, ["onClick"]),
                                        createVNode("span", {
                                          onClick: ($event) => handleImageRemove(file)
                                        }, [
                                          createVNode(_component_ElIcon, null, {
                                            default: withCtx(() => [
                                              createVNode(unref(delete_default))
                                            ]),
                                            _: 1
                                          })
                                        ], 8, ["onClick"])
                                      ])
                                    ])
                                  ]),
                                  default: withCtx(() => [
                                    createVNode(_component_ElIcon, null, {
                                      default: withCtx(() => [
                                        createVNode(unref(plus_default))
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }, 8, ["file-list", "onUpdate:fileList"])
                              ]),
                              _: 1
                            }),
                            ((_a = unref(form).videos) == null ? void 0 : _a.length) ? (openBlock(), createBlock(_component_ElFormItem, {
                              key: 0,
                              label: "Dodani video"
                            }, {
                              default: withCtx(() => [
                                (openBlock(true), createBlock(Fragment, null, renderList(unref(form).videos, (video) => {
                                  return openBlock(), createBlock(_component_ElRow, {
                                    justify: "center",
                                    align: "middle"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(" * " + toDisplayString(video) + " ", 1),
                                      createVNode(_component_ElIcon, {
                                        size: 18,
                                        onClick: ($event) => handleVideoDownload(video),
                                        class: "ml-8 video-download-icon"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(unref(download_default))
                                        ]),
                                        _: 2
                                      }, 1032, ["onClick"]),
                                      createVNode(_component_ElIcon, {
                                        size: 18,
                                        onClick: ($event) => handleVideoRemove(video),
                                        class: "ml-8 video-remove-icon"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(unref(delete_default))
                                        ]),
                                        _: 2
                                      }, 1032, ["onClick"])
                                    ]),
                                    _: 2
                                  }, 1024);
                                }), 256))
                              ]),
                              _: 1
                            })) : createCommentVNode("", true),
                            createVNode(_component_ElFormItem, {
                              label: "Video",
                              prop: "videos"
                            }, {
                              default: withCtx(() => [
                                createVNode("input", {
                                  type: "file",
                                  multiple: "",
                                  accept: "video/*",
                                  onChange: handleVideoChange
                                }, null, 32)
                              ]),
                              _: 1
                            })
                          ];
                        }),
                        _: 1
                      }, 8, ["label-position", "model", "rules"])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else if (unref(dialog).type === "delete") {
              _push2(ssrRenderComponent(_component_ElRow, {
                justify: "center",
                class: "mb-24"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_ElCol, { align: "middle" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        var _a, _b;
                        if (_push4) {
                          _push4(` Jeste li sigurni da \u017Eelite obrisati <b data-v-1a35262c${_scopeId3}>${ssrInterpolate((_a = unref(dialog).item) == null ? void 0 : _a.title)}</b> vijest? `);
                        } else {
                          return [
                            createTextVNode(" Jeste li sigurni da \u017Eelite obrisati "),
                            createVNode("b", null, toDisplayString((_b = unref(dialog).item) == null ? void 0 : _b.title), 1),
                            createTextVNode(" vijest? ")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(_component_ElCol, {
                      align: "middle",
                      class: "mt-12"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`Mogu\u0107e ju je vratiti kasnije. `);
                        } else {
                          return [
                            createTextVNode("Mogu\u0107e ju je vratiti kasnije. ")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_ElCol, { align: "middle" }, {
                        default: withCtx(() => {
                          var _a;
                          return [
                            createTextVNode(" Jeste li sigurni da \u017Eelite obrisati "),
                            createVNode("b", null, toDisplayString((_a = unref(dialog).item) == null ? void 0 : _a.title), 1),
                            createTextVNode(" vijest? ")
                          ];
                        }),
                        _: 1
                      }),
                      createVNode(_component_ElCol, {
                        align: "middle",
                        class: "mt-12"
                      }, {
                        default: withCtx(() => [
                          createTextVNode("Mogu\u0107e ju je vratiti kasnije. ")
                        ]),
                        _: 1
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else if (unref(dialog).type === "unarchive") {
              _push2(ssrRenderComponent(_component_ElRow, {
                justify: "center",
                class: "mb-24"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_ElCol, { align: "middle" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        var _a, _b;
                        if (_push4) {
                          _push4(` Jeste li sigurni da \u017Eelite vratiti <b data-v-1a35262c${_scopeId3}>${ssrInterpolate((_a = unref(dialog).item) == null ? void 0 : _a.title)}</b> vijest? `);
                        } else {
                          return [
                            createTextVNode(" Jeste li sigurni da \u017Eelite vratiti "),
                            createVNode("b", null, toDisplayString((_b = unref(dialog).item) == null ? void 0 : _b.title), 1),
                            createTextVNode(" vijest? ")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_ElCol, { align: "middle" }, {
                        default: withCtx(() => {
                          var _a;
                          return [
                            createTextVNode(" Jeste li sigurni da \u017Eelite vratiti "),
                            createVNode("b", null, toDisplayString((_a = unref(dialog).item) == null ? void 0 : _a.title), 1),
                            createTextVNode(" vijest? ")
                          ];
                        }),
                        _: 1
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            if (unref(isLoading).button) {
              _push2(ssrRenderComponent(_component_ElRow, {
                justify: "center",
                class: "color-primary mb-12"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(` Ne prekidajte u\u010Ditavanje podataka! `);
                  } else {
                    return [
                      createTextVNode(" Ne prekidajte u\u010Ditavanje podataka! ")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            _push2(ssrRenderComponent(_component_ElRow, { justify: "center" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_ElButton, {
                    type: unref(dialog).type === "delete" ? "danger" : "primary",
                    plain: "",
                    onClick: ($event) => handleSubmitButton(unref(ruleFormRef)),
                    loading: unref(isLoading).button
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        if (unref(dialog).type === "create") {
                          _push4(`<span data-v-1a35262c${_scopeId3}>Dodaj</span>`);
                        } else if (unref(dialog).type === "edit") {
                          _push4(`<span data-v-1a35262c${_scopeId3}>Uredi</span>`);
                        } else if (unref(dialog).type === "unarchive") {
                          _push4(`<span data-v-1a35262c${_scopeId3}>Vrati</span>`);
                        } else if (unref(dialog).type === "delete") {
                          _push4(`<span data-v-1a35262c${_scopeId3}>Obri\u0161i</span>`);
                        } else {
                          _push4(`<!---->`);
                        }
                      } else {
                        return [
                          unref(dialog).type === "create" ? (openBlock(), createBlock("span", { key: 0 }, "Dodaj")) : unref(dialog).type === "edit" ? (openBlock(), createBlock("span", { key: 1 }, "Uredi")) : unref(dialog).type === "unarchive" ? (openBlock(), createBlock("span", { key: 2 }, "Vrati")) : unref(dialog).type === "delete" ? (openBlock(), createBlock("span", { key: 3 }, "Obri\u0161i")) : createCommentVNode("", true)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_ElButton, {
                      type: unref(dialog).type === "delete" ? "danger" : "primary",
                      plain: "",
                      onClick: ($event) => handleSubmitButton(unref(ruleFormRef)),
                      loading: unref(isLoading).button
                    }, {
                      default: withCtx(() => [
                        unref(dialog).type === "create" ? (openBlock(), createBlock("span", { key: 0 }, "Dodaj")) : unref(dialog).type === "edit" ? (openBlock(), createBlock("span", { key: 1 }, "Uredi")) : unref(dialog).type === "unarchive" ? (openBlock(), createBlock("span", { key: 2 }, "Vrati")) : unref(dialog).type === "delete" ? (openBlock(), createBlock("span", { key: 3 }, "Obri\u0161i")) : createCommentVNode("", true)
                      ]),
                      _: 1
                    }, 8, ["type", "onClick", "loading"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              unref(dialog).type === "create" || unref(dialog).type === "edit" ? (openBlock(), createBlock(_component_ElRow, {
                key: 0,
                justify: "center"
              }, {
                default: withCtx(() => [
                  createVNode(_component_ElForm, {
                    "label-position": _ctx.$viewport.isLessThan("tablet") ? "top" : "left",
                    "require-asterisk-position": "right",
                    ref_key: "ruleFormRef",
                    ref: ruleFormRef,
                    class: "form",
                    model: unref(form),
                    rules: unref(rules),
                    "label-width": "auto",
                    "status-icon": ""
                  }, {
                    default: withCtx(() => {
                      var _a;
                      return [
                        createVNode(_component_ElFormItem, {
                          label: "Kategorija",
                          prop: "categoryId"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_ElSelect, {
                              modelValue: unref(form).categoryId,
                              "onUpdate:modelValue": ($event) => unref(form).categoryId = $event,
                              loading: unref(isLoading).categories,
                              placeholder: "Odaberite kategoriju",
                              class: "input-width",
                              clearable: ""
                            }, {
                              default: withCtx(() => [
                                (openBlock(true), createBlock(Fragment, null, renderList(unref(categories), (category) => {
                                  return openBlock(), createBlock(_component_ElOption, {
                                    key: String(category.id),
                                    label: String(category.name),
                                    value: String(category.id)
                                  }, null, 8, ["label", "value"]);
                                }), 128))
                              ]),
                              _: 1
                            }, 8, ["modelValue", "onUpdate:modelValue", "loading"])
                          ]),
                          _: 1
                        }),
                        createVNode(_component_ElFormItem, {
                          label: "Naslov",
                          prop: "title"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_ElInput, {
                              modelValue: unref(form).title,
                              "onUpdate:modelValue": ($event) => unref(form).title = $event,
                              placeholder: "Moja vijest",
                              class: "input-width"
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ]),
                          _: 1
                        }),
                        createVNode(_component_ElFormItem, {
                          label: "Autor",
                          prop: "author"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_ElInput, {
                              modelValue: unref(form).author,
                              "onUpdate:modelValue": ($event) => unref(form).author = $event,
                              placeholder: "John Doe",
                              class: "input-width"
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ]),
                          _: 1
                        }),
                        createVNode("div", { style: { "height": "450px" } }, [
                          createVNode(_component_ElFormItem, {
                            label: "Sadr\u017Eaj",
                            prop: "text"
                          }, {
                            default: withCtx(() => [
                              createVNode(unref(script), {
                                modelValue: unref(form).text,
                                "onUpdate:modelValue": ($event) => unref(form).text = $event,
                                class: "editor"
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            _: 1
                          })
                        ]),
                        createVNode(_component_ElFormItem, {
                          label: "Slike",
                          prop: "images",
                          class: "mt-12"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_ElUpload, {
                              "file-list": unref(fileList).images,
                              "onUpdate:fileList": ($event) => unref(fileList).images = $event,
                              action: "#",
                              "list-type": "picture-card",
                              "auto-upload": false,
                              multiple: "",
                              accept: "image/*"
                            }, {
                              file: withCtx(({ file }) => [
                                createVNode("div", null, [
                                  createVNode("img", {
                                    class: "el-upload-list__item-thumbnail",
                                    src: file.url,
                                    alt: ""
                                  }, null, 8, ["src"]),
                                  createVNode("span", { class: "el-upload-list__item-actions" }, [
                                    createVNode(_component_ElTooltip, {
                                      effect: "dark",
                                      content: "Postavi na prvu poziciju",
                                      placement: "top",
                                      "show-after": 500
                                    }, {
                                      default: withCtx(() => [
                                        unref(fileList).images[0].url !== file.url ? (openBlock(), createBlock("span", {
                                          key: 0,
                                          onClick: ($event) => handleSetImageToFirstPlace(file)
                                        }, [
                                          createVNode(_component_ElIcon, null, {
                                            default: withCtx(() => [
                                              createVNode(unref(gold_medal_default))
                                            ]),
                                            _: 1
                                          })
                                        ], 8, ["onClick"])) : createCommentVNode("", true)
                                      ]),
                                      _: 2
                                    }, 1024),
                                    createVNode("span", {
                                      onClick: ($event) => handleImagePreview(file)
                                    }, [
                                      createVNode(_component_ElIcon, null, {
                                        default: withCtx(() => [
                                          createVNode(unref(zoom_in_default))
                                        ]),
                                        _: 1
                                      })
                                    ], 8, ["onClick"]),
                                    createVNode("span", {
                                      onClick: ($event) => handleImageRemove(file)
                                    }, [
                                      createVNode(_component_ElIcon, null, {
                                        default: withCtx(() => [
                                          createVNode(unref(delete_default))
                                        ]),
                                        _: 1
                                      })
                                    ], 8, ["onClick"])
                                  ])
                                ])
                              ]),
                              default: withCtx(() => [
                                createVNode(_component_ElIcon, null, {
                                  default: withCtx(() => [
                                    createVNode(unref(plus_default))
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }, 8, ["file-list", "onUpdate:fileList"])
                          ]),
                          _: 1
                        }),
                        ((_a = unref(form).videos) == null ? void 0 : _a.length) ? (openBlock(), createBlock(_component_ElFormItem, {
                          key: 0,
                          label: "Dodani video"
                        }, {
                          default: withCtx(() => [
                            (openBlock(true), createBlock(Fragment, null, renderList(unref(form).videos, (video) => {
                              return openBlock(), createBlock(_component_ElRow, {
                                justify: "center",
                                align: "middle"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" * " + toDisplayString(video) + " ", 1),
                                  createVNode(_component_ElIcon, {
                                    size: 18,
                                    onClick: ($event) => handleVideoDownload(video),
                                    class: "ml-8 video-download-icon"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(unref(download_default))
                                    ]),
                                    _: 2
                                  }, 1032, ["onClick"]),
                                  createVNode(_component_ElIcon, {
                                    size: 18,
                                    onClick: ($event) => handleVideoRemove(video),
                                    class: "ml-8 video-remove-icon"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(unref(delete_default))
                                    ]),
                                    _: 2
                                  }, 1032, ["onClick"])
                                ]),
                                _: 2
                              }, 1024);
                            }), 256))
                          ]),
                          _: 1
                        })) : createCommentVNode("", true),
                        createVNode(_component_ElFormItem, {
                          label: "Video",
                          prop: "videos"
                        }, {
                          default: withCtx(() => [
                            createVNode("input", {
                              type: "file",
                              multiple: "",
                              accept: "video/*",
                              onChange: handleVideoChange
                            }, null, 32)
                          ]),
                          _: 1
                        })
                      ];
                    }),
                    _: 1
                  }, 8, ["label-position", "model", "rules"])
                ]),
                _: 1
              })) : unref(dialog).type === "delete" ? (openBlock(), createBlock(_component_ElRow, {
                key: 1,
                justify: "center",
                class: "mb-24"
              }, {
                default: withCtx(() => [
                  createVNode(_component_ElCol, { align: "middle" }, {
                    default: withCtx(() => {
                      var _a;
                      return [
                        createTextVNode(" Jeste li sigurni da \u017Eelite obrisati "),
                        createVNode("b", null, toDisplayString((_a = unref(dialog).item) == null ? void 0 : _a.title), 1),
                        createTextVNode(" vijest? ")
                      ];
                    }),
                    _: 1
                  }),
                  createVNode(_component_ElCol, {
                    align: "middle",
                    class: "mt-12"
                  }, {
                    default: withCtx(() => [
                      createTextVNode("Mogu\u0107e ju je vratiti kasnije. ")
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })) : unref(dialog).type === "unarchive" ? (openBlock(), createBlock(_component_ElRow, {
                key: 2,
                justify: "center",
                class: "mb-24"
              }, {
                default: withCtx(() => [
                  createVNode(_component_ElCol, { align: "middle" }, {
                    default: withCtx(() => {
                      var _a;
                      return [
                        createTextVNode(" Jeste li sigurni da \u017Eelite vratiti "),
                        createVNode("b", null, toDisplayString((_a = unref(dialog).item) == null ? void 0 : _a.title), 1),
                        createTextVNode(" vijest? ")
                      ];
                    }),
                    _: 1
                  })
                ]),
                _: 1
              })) : createCommentVNode("", true),
              unref(isLoading).button ? (openBlock(), createBlock(_component_ElRow, {
                key: 3,
                justify: "center",
                class: "color-primary mb-12"
              }, {
                default: withCtx(() => [
                  createTextVNode(" Ne prekidajte u\u010Ditavanje podataka! ")
                ]),
                _: 1
              })) : createCommentVNode("", true),
              createVNode(_component_ElRow, { justify: "center" }, {
                default: withCtx(() => [
                  createVNode(_component_ElButton, {
                    type: unref(dialog).type === "delete" ? "danger" : "primary",
                    plain: "",
                    onClick: ($event) => handleSubmitButton(unref(ruleFormRef)),
                    loading: unref(isLoading).button
                  }, {
                    default: withCtx(() => [
                      unref(dialog).type === "create" ? (openBlock(), createBlock("span", { key: 0 }, "Dodaj")) : unref(dialog).type === "edit" ? (openBlock(), createBlock("span", { key: 1 }, "Uredi")) : unref(dialog).type === "unarchive" ? (openBlock(), createBlock("span", { key: 2 }, "Vrati")) : unref(dialog).type === "delete" ? (openBlock(), createBlock("span", { key: 3 }, "Obri\u0161i")) : createCommentVNode("", true)
                    ]),
                    _: 1
                  }, 8, ["type", "onClick", "loading"])
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_ElDialog, {
        modelValue: unref(fullscreenImageDialog),
        "onUpdate:modelValue": ($event) => isRef(fullscreenImageDialog) ? fullscreenImageDialog.value = $event : null,
        width: "90%"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_ElRow, {
              justify: "center",
              align: "middle"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<img w-full${ssrRenderAttr("src", unref(fullscreenImageUrl))} class="preview-image" data-v-1a35262c${_scopeId2}>`);
                } else {
                  return [
                    createVNode("img", {
                      "w-full": "",
                      src: unref(fullscreenImageUrl),
                      class: "preview-image"
                    }, null, 8, ["src"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_ElRow, {
                justify: "center",
                align: "middle"
              }, {
                default: withCtx(() => [
                  createVNode("img", {
                    "w-full": "",
                    src: unref(fullscreenImageUrl),
                    class: "preview-image"
                  }, null, 8, ["src"])
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup$c = _sfc_main$c.setup;
_sfc_main$c.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/backoffice/tabs/BackofficePortalNewsTab.vue");
  return _sfc_setup$c ? _sfc_setup$c(props, ctx) : void 0;
};
const BackofficePortalNewsTab = /* @__PURE__ */ _export_sfc(_sfc_main$c, [["__scopeId", "data-v-1a35262c"]]);
const _sfc_main$b = /* @__PURE__ */ defineComponent({
  __name: "BackofficeJobCategoriesTab",
  __ssrInlineRender: true,
  setup(__props) {
    const { $axios } = useNuxtApp();
    const isLoading = ref({
      activeCategories: true,
      deletedCategories: true,
      button: false
    });
    const activeCategories = ref();
    const deletedCategories = ref();
    const searchValues = ref({
      active: "",
      deleted: ""
    });
    const dialog = ref({
      isOpened: false,
      type: "create",
      item: void 0
    });
    const form = reactive({
      name: ""
    });
    const ruleFormRef = ref();
    const rules = reactive({
      name: [
        { required: true, message: "Unesite naziv kategorije", trigger: "blur" }
      ]
    });
    function getAllCategories() {
      getActiveJobCategories();
      getDeletedJobCategories();
    }
    function openDialog(type, item) {
      if (item) form.name = String(item.name);
      dialog.value = {
        isOpened: true,
        type,
        item
      };
    }
    function handleActiveSearch() {
      debounceActiveSearch();
    }
    const debounceActiveSearch = debounce(getActiveJobCategories, 300);
    async function getActiveJobCategories() {
      isLoading.value.activeCategories = true;
      try {
        const response = await $axios.get(
          `/jobs-category?search=${searchValues.value.active}`
        );
        activeCategories.value = response.data;
      } catch (error) {
        console.error("API Error:", error);
      } finally {
        isLoading.value.activeCategories = false;
      }
    }
    function handleDeletedSearch() {
      debounceDeletedSearch();
    }
    const debounceDeletedSearch = debounce(getDeletedJobCategories, 300);
    async function getDeletedJobCategories() {
      isLoading.value.deletedCategories = true;
      try {
        const response = await $axios.get(
          `/jobs-category?deletedOnly=true&search=${searchValues.value.deleted}`
        );
        deletedCategories.value = response.data;
      } catch (error) {
        console.error("API Error:", error);
      } finally {
        isLoading.value.deletedCategories = false;
      }
    }
    function showSuccessMessage(message) {
    }
    function handleSubmitButton(formEl) {
      if (dialog.value.type === "create") handleCreate(formEl);
      else if (dialog.value.type === "edit") handleEdit(formEl);
      else if (dialog.value.type === "delete") handleDelete();
      else if (dialog.value.type === "unarchive") handleUnarchive();
    }
    function handleCloseDialog() {
      form.name = "";
      dialog.value.isOpened = false;
    }
    async function handleCreate(formEl) {
      if (!formEl) return;
      await formEl.validate(async (valid) => {
        if (valid) {
          isLoading.value.button = true;
          try {
            await $axios.post("/jobs-category", form);
            getAllCategories();
            handleCloseDialog();
            showSuccessMessage("Uspje\u0161no ste dodali novu kategoriju.");
          } catch (error) {
            console.error("API Error:", error);
          } finally {
            isLoading.value.button = false;
          }
        }
      });
    }
    async function handleEdit(formEl) {
      if (!formEl) return;
      await formEl.validate(async (valid) => {
        var _a;
        if (valid) {
          isLoading.value.button = true;
          try {
            await $axios.put(`/jobs-category/${(_a = dialog.value.item) == null ? void 0 : _a.id}`, form);
            getAllCategories();
            handleCloseDialog();
            showSuccessMessage("Uspje\u0161no ste uredili kategoriju.");
          } catch (error) {
            console.error("API Error:", error);
          } finally {
            isLoading.value.button = false;
          }
        }
      });
    }
    async function handleDelete() {
      var _a;
      isLoading.value.button = true;
      try {
        await $axios.delete(`/jobs-category/${(_a = dialog.value.item) == null ? void 0 : _a.id}`);
        getAllCategories();
        handleCloseDialog();
        showSuccessMessage("Uspje\u0161no ste obrisali kategoriju.");
      } catch (error) {
        console.error("API Error:", error);
      } finally {
        isLoading.value.button = false;
      }
    }
    async function handleUnarchive() {
      var _a;
      isLoading.value.button = true;
      try {
        await $axios.patch(`/jobs-category/${(_a = dialog.value.item) == null ? void 0 : _a.id}/unarchive`);
        getAllCategories();
        handleCloseDialog();
        showSuccessMessage("Uspje\u0161no ste vratili obrisanu kategoriju.");
      } catch (error) {
        console.error("API Error:", error);
      } finally {
        isLoading.value.button = false;
      }
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ElRow = ElRow;
      const _component_ElCol = ElCol;
      const _component_ElButton = ElButton;
      const _component_ElIcon = ElIcon;
      const _component_ElInput = ElInput;
      const _component_ElTable = ElTable;
      const _component_ElTableColumn = ElTableColumn;
      const _component_ElDialog = ElDialog;
      const _component_ElForm = ElForm;
      const _component_ElFormItem = ElFormItem;
      const _directive_loading = vLoading;
      _push(`<!--[--><div class="backoffice-page">`);
      _push(ssrRenderComponent(_component_ElRow, {
        justify: "space-between",
        align: "middle",
        class: "w-100"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_ElCol, { span: 6 }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_ElCol, {
              span: 12,
              align: "center"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<h3 class="color-primary"${_scopeId2}>Posao kategorije</h3>`);
                } else {
                  return [
                    createVNode("h3", { class: "color-primary" }, "Posao kategorije")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_ElCol, {
              span: 6,
              align: "end"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_ElButton, {
                    type: "primary",
                    plain: "",
                    onClick: ($event) => openDialog("create")
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_ElIcon, { size: "24" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(unref(circle_plus_filled_default), null, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(unref(circle_plus_filled_default))
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(`<span class="ml-8"${_scopeId3}>Dodaj kategoriju</span>`);
                      } else {
                        return [
                          createVNode(_component_ElIcon, { size: "24" }, {
                            default: withCtx(() => [
                              createVNode(unref(circle_plus_filled_default))
                            ]),
                            _: 1
                          }),
                          createVNode("span", { class: "ml-8" }, "Dodaj kategoriju")
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
                      onClick: ($event) => openDialog("create")
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_ElIcon, { size: "24" }, {
                          default: withCtx(() => [
                            createVNode(unref(circle_plus_filled_default))
                          ]),
                          _: 1
                        }),
                        createVNode("span", { class: "ml-8" }, "Dodaj kategoriju")
                      ]),
                      _: 1
                    }, 8, ["onClick"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_ElCol, { span: 6 }),
              createVNode(_component_ElCol, {
                span: 12,
                align: "center"
              }, {
                default: withCtx(() => [
                  createVNode("h3", { class: "color-primary" }, "Posao kategorije")
                ]),
                _: 1
              }),
              createVNode(_component_ElCol, {
                span: 6,
                align: "end"
              }, {
                default: withCtx(() => [
                  createVNode(_component_ElButton, {
                    type: "primary",
                    plain: "",
                    onClick: ($event) => openDialog("create")
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_ElIcon, { size: "24" }, {
                        default: withCtx(() => [
                          createVNode(unref(circle_plus_filled_default))
                        ]),
                        _: 1
                      }),
                      createVNode("span", { class: "ml-8" }, "Dodaj kategoriju")
                    ]),
                    _: 1
                  }, 8, ["onClick"])
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
        align: "middle",
        class: "w-100"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_ElCol, {
              span: 8,
              offset: 8,
              align: "center"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span class="color-primary"${_scopeId2}><b${_scopeId2}>Aktivne kategorije</b></span>`);
                } else {
                  return [
                    createVNode("span", { class: "color-primary" }, [
                      createVNode("b", null, "Aktivne kategorije")
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_ElCol, {
              span: 8,
              align: "end"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_ElInput, {
                    modelValue: unref(searchValues).active,
                    "onUpdate:modelValue": ($event) => unref(searchValues).active = $event,
                    type: "text",
                    placeholder: "Pretra\u017Eite naziv...",
                    class: "max-w-250",
                    "prefix-icon": unref(search_default),
                    onInput: handleActiveSearch
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_ElInput, {
                      modelValue: unref(searchValues).active,
                      "onUpdate:modelValue": ($event) => unref(searchValues).active = $event,
                      type: "text",
                      placeholder: "Pretra\u017Eite naziv...",
                      class: "max-w-250",
                      "prefix-icon": unref(search_default),
                      onInput: handleActiveSearch
                    }, null, 8, ["modelValue", "onUpdate:modelValue", "prefix-icon"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_ElCol, {
                span: 8,
                offset: 8,
                align: "center"
              }, {
                default: withCtx(() => [
                  createVNode("span", { class: "color-primary" }, [
                    createVNode("b", null, "Aktivne kategorije")
                  ])
                ]),
                _: 1
              }),
              createVNode(_component_ElCol, {
                span: 8,
                align: "end"
              }, {
                default: withCtx(() => [
                  createVNode(_component_ElInput, {
                    modelValue: unref(searchValues).active,
                    "onUpdate:modelValue": ($event) => unref(searchValues).active = $event,
                    type: "text",
                    placeholder: "Pretra\u017Eite naziv...",
                    class: "max-w-250",
                    "prefix-icon": unref(search_default),
                    onInput: handleActiveSearch
                  }, null, 8, ["modelValue", "onUpdate:modelValue", "prefix-icon"])
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_ElTable, mergeProps({
        data: unref(activeCategories),
        stripe: "",
        "empty-text": "Nema dostupnih podataka"
      }, ssrGetDirectiveProps(_ctx, _directive_loading, unref(isLoading).activeCategories)), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_ElTableColumn, {
              label: "Naziv",
              prop: "name"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_ElTableColumn, {
              label: "Akcije",
              align: "center",
              width: "148"
            }, {
              default: withCtx((items, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_ElButton, {
                    type: "primary",
                    plain: "",
                    onClick: ($event) => openDialog("edit", items.row)
                  }, {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_ElIcon, { size: "24" }, {
                          default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(unref(edit_default), null, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(unref(edit_default))
                              ];
                            }
                          }),
                          _: 2
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_ElIcon, { size: "24" }, {
                            default: withCtx(() => [
                              createVNode(unref(edit_default))
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_ElButton, {
                    type: "danger",
                    plain: "",
                    onClick: ($event) => openDialog("delete", items.row)
                  }, {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_ElIcon, { size: "24" }, {
                          default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(unref(delete_filled_default), null, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(unref(delete_filled_default))
                              ];
                            }
                          }),
                          _: 2
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_ElIcon, { size: "24" }, {
                            default: withCtx(() => [
                              createVNode(unref(delete_filled_default))
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_ElButton, {
                      type: "primary",
                      plain: "",
                      onClick: ($event) => openDialog("edit", items.row)
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_ElIcon, { size: "24" }, {
                          default: withCtx(() => [
                            createVNode(unref(edit_default))
                          ]),
                          _: 1
                        })
                      ]),
                      _: 2
                    }, 1032, ["onClick"]),
                    createVNode(_component_ElButton, {
                      type: "danger",
                      plain: "",
                      onClick: ($event) => openDialog("delete", items.row)
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_ElIcon, { size: "24" }, {
                          default: withCtx(() => [
                            createVNode(unref(delete_filled_default))
                          ]),
                          _: 1
                        })
                      ]),
                      _: 2
                    }, 1032, ["onClick"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_ElTableColumn, {
                label: "Naziv",
                prop: "name"
              }),
              createVNode(_component_ElTableColumn, {
                label: "Akcije",
                align: "center",
                width: "148"
              }, {
                default: withCtx((items) => [
                  createVNode(_component_ElButton, {
                    type: "primary",
                    plain: "",
                    onClick: ($event) => openDialog("edit", items.row)
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_ElIcon, { size: "24" }, {
                        default: withCtx(() => [
                          createVNode(unref(edit_default))
                        ]),
                        _: 1
                      })
                    ]),
                    _: 2
                  }, 1032, ["onClick"]),
                  createVNode(_component_ElButton, {
                    type: "danger",
                    plain: "",
                    onClick: ($event) => openDialog("delete", items.row)
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_ElIcon, { size: "24" }, {
                        default: withCtx(() => [
                          createVNode(unref(delete_filled_default))
                        ]),
                        _: 1
                      })
                    ]),
                    _: 2
                  }, 1032, ["onClick"])
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
        align: "middle",
        class: "w-100"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_ElCol, {
              span: 8,
              offset: 8,
              align: "center"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span class="color-primary"${_scopeId2}><b${_scopeId2}>Obrisane kategorije</b></span>`);
                } else {
                  return [
                    createVNode("span", { class: "color-primary" }, [
                      createVNode("b", null, "Obrisane kategorije")
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_ElCol, {
              span: 8,
              align: "end"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_ElInput, {
                    modelValue: unref(searchValues).deleted,
                    "onUpdate:modelValue": ($event) => unref(searchValues).deleted = $event,
                    type: "text",
                    placeholder: "Pretra\u017Eite naziv...",
                    class: "max-w-250",
                    "prefix-icon": unref(search_default),
                    onInput: handleDeletedSearch
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_ElInput, {
                      modelValue: unref(searchValues).deleted,
                      "onUpdate:modelValue": ($event) => unref(searchValues).deleted = $event,
                      type: "text",
                      placeholder: "Pretra\u017Eite naziv...",
                      class: "max-w-250",
                      "prefix-icon": unref(search_default),
                      onInput: handleDeletedSearch
                    }, null, 8, ["modelValue", "onUpdate:modelValue", "prefix-icon"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_ElCol, {
                span: 8,
                offset: 8,
                align: "center"
              }, {
                default: withCtx(() => [
                  createVNode("span", { class: "color-primary" }, [
                    createVNode("b", null, "Obrisane kategorije")
                  ])
                ]),
                _: 1
              }),
              createVNode(_component_ElCol, {
                span: 8,
                align: "end"
              }, {
                default: withCtx(() => [
                  createVNode(_component_ElInput, {
                    modelValue: unref(searchValues).deleted,
                    "onUpdate:modelValue": ($event) => unref(searchValues).deleted = $event,
                    type: "text",
                    placeholder: "Pretra\u017Eite naziv...",
                    class: "max-w-250",
                    "prefix-icon": unref(search_default),
                    onInput: handleDeletedSearch
                  }, null, 8, ["modelValue", "onUpdate:modelValue", "prefix-icon"])
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_ElTable, mergeProps({
        data: unref(deletedCategories),
        stripe: "",
        "empty-text": "Nema dostupnih podataka"
      }, ssrGetDirectiveProps(_ctx, _directive_loading, unref(isLoading).deletedCategories)), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_ElTableColumn, {
              label: "Naziv",
              prop: "name"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_ElTableColumn, {
              label: "Akcije",
              align: "center",
              width: "80"
            }, {
              default: withCtx((items, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_ElButton, {
                    type: "primary",
                    plain: "",
                    onClick: ($event) => openDialog("unarchive", items.row)
                  }, {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_ElIcon, { size: "24" }, {
                          default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(unref(refresh_left_default), null, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(unref(refresh_left_default))
                              ];
                            }
                          }),
                          _: 2
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_ElIcon, { size: "24" }, {
                            default: withCtx(() => [
                              createVNode(unref(refresh_left_default))
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_ElButton, {
                      type: "primary",
                      plain: "",
                      onClick: ($event) => openDialog("unarchive", items.row)
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_ElIcon, { size: "24" }, {
                          default: withCtx(() => [
                            createVNode(unref(refresh_left_default))
                          ]),
                          _: 1
                        })
                      ]),
                      _: 2
                    }, 1032, ["onClick"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_ElTableColumn, {
                label: "Naziv",
                prop: "name"
              }),
              createVNode(_component_ElTableColumn, {
                label: "Akcije",
                align: "center",
                width: "80"
              }, {
                default: withCtx((items) => [
                  createVNode(_component_ElButton, {
                    type: "primary",
                    plain: "",
                    onClick: ($event) => openDialog("unarchive", items.row)
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_ElIcon, { size: "24" }, {
                        default: withCtx(() => [
                          createVNode(unref(refresh_left_default))
                        ]),
                        _: 1
                      })
                    ]),
                    _: 2
                  }, 1032, ["onClick"])
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(_component_ElDialog, {
        modelValue: unref(dialog).isOpened,
        "onUpdate:modelValue": ($event) => unref(dialog).isOpened = $event,
        "close-on-click-modal": false,
        "destroy-on-close": "",
        fullscreen: _ctx.$viewport.isLessOrEquals("tablet") ? true : false,
        onClose: handleCloseDialog
      }, {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_ElRow, { justify: "center" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<h3 class="color-primary"${_scopeId2}>`);
                  if (unref(dialog).type === "create") {
                    _push3(`<span${_scopeId2}>Dodaj novu kategoriju</span>`);
                  } else if (unref(dialog).type === "edit") {
                    _push3(`<span${_scopeId2}>Uredi kategoriju</span>`);
                  } else if (unref(dialog).type === "unarchive") {
                    _push3(`<span${_scopeId2}>Vrati kategoriju</span>`);
                  } else {
                    _push3(`<span${_scopeId2}>Obri\u0161i kategoriju</span>`);
                  }
                  _push3(`</h3>`);
                } else {
                  return [
                    createVNode("h3", { class: "color-primary" }, [
                      unref(dialog).type === "create" ? (openBlock(), createBlock("span", { key: 0 }, "Dodaj novu kategoriju")) : unref(dialog).type === "edit" ? (openBlock(), createBlock("span", { key: 1 }, "Uredi kategoriju")) : unref(dialog).type === "unarchive" ? (openBlock(), createBlock("span", { key: 2 }, "Vrati kategoriju")) : (openBlock(), createBlock("span", { key: 3 }, "Obri\u0161i kategoriju"))
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_ElRow, { justify: "center" }, {
                default: withCtx(() => [
                  createVNode("h3", { class: "color-primary" }, [
                    unref(dialog).type === "create" ? (openBlock(), createBlock("span", { key: 0 }, "Dodaj novu kategoriju")) : unref(dialog).type === "edit" ? (openBlock(), createBlock("span", { key: 1 }, "Uredi kategoriju")) : unref(dialog).type === "unarchive" ? (openBlock(), createBlock("span", { key: 2 }, "Vrati kategoriju")) : (openBlock(), createBlock("span", { key: 3 }, "Obri\u0161i kategoriju"))
                  ])
                ]),
                _: 1
              })
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (unref(dialog).type === "create" || unref(dialog).type === "edit") {
              _push2(ssrRenderComponent(_component_ElRow, { justify: "center" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_ElForm, {
                      "label-position": _ctx.$viewport.isLessThan("tablet") ? "top" : "left",
                      "require-asterisk-position": "right",
                      ref_key: "ruleFormRef",
                      ref: ruleFormRef,
                      class: "form",
                      model: unref(form),
                      rules: unref(rules),
                      "label-width": "auto",
                      "status-icon": ""
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_ElFormItem, {
                            label: "Naziv",
                            prop: "name"
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(_component_ElInput, {
                                  modelValue: unref(form).name,
                                  "onUpdate:modelValue": ($event) => unref(form).name = $event,
                                  placeholder: "Moja kategorija",
                                  class: "input-width"
                                }, null, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(_component_ElInput, {
                                    modelValue: unref(form).name,
                                    "onUpdate:modelValue": ($event) => unref(form).name = $event,
                                    placeholder: "Moja kategorija",
                                    class: "input-width"
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(_component_ElFormItem, {
                              label: "Naziv",
                              prop: "name"
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_ElInput, {
                                  modelValue: unref(form).name,
                                  "onUpdate:modelValue": ($event) => unref(form).name = $event,
                                  placeholder: "Moja kategorija",
                                  class: "input-width"
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ]),
                              _: 1
                            })
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
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
                        "status-icon": ""
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_ElFormItem, {
                            label: "Naziv",
                            prop: "name"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_ElInput, {
                                modelValue: unref(form).name,
                                "onUpdate:modelValue": ($event) => unref(form).name = $event,
                                placeholder: "Moja kategorija",
                                class: "input-width"
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
              }, _parent2, _scopeId));
            } else if (unref(dialog).type === "delete") {
              _push2(ssrRenderComponent(_component_ElRow, {
                justify: "center",
                class: "mb-24"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_ElCol, { align: "middle" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        var _a, _b;
                        if (_push4) {
                          _push4(` Jeste li sigurni da \u017Eelite obrisati <b${_scopeId3}>${ssrInterpolate((_a = unref(dialog).item) == null ? void 0 : _a.name)}</b> kategoriju? `);
                        } else {
                          return [
                            createTextVNode(" Jeste li sigurni da \u017Eelite obrisati "),
                            createVNode("b", null, toDisplayString((_b = unref(dialog).item) == null ? void 0 : _b.name), 1),
                            createTextVNode(" kategoriju? ")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(_component_ElCol, {
                      align: "middle",
                      class: "mt-12"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`Mogu\u0107e ju je vratiti kasnije. `);
                        } else {
                          return [
                            createTextVNode("Mogu\u0107e ju je vratiti kasnije. ")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_ElCol, { align: "middle" }, {
                        default: withCtx(() => {
                          var _a;
                          return [
                            createTextVNode(" Jeste li sigurni da \u017Eelite obrisati "),
                            createVNode("b", null, toDisplayString((_a = unref(dialog).item) == null ? void 0 : _a.name), 1),
                            createTextVNode(" kategoriju? ")
                          ];
                        }),
                        _: 1
                      }),
                      createVNode(_component_ElCol, {
                        align: "middle",
                        class: "mt-12"
                      }, {
                        default: withCtx(() => [
                          createTextVNode("Mogu\u0107e ju je vratiti kasnije. ")
                        ]),
                        _: 1
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else if (unref(dialog).type === "unarchive") {
              _push2(ssrRenderComponent(_component_ElRow, {
                justify: "center",
                class: "mb-24"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_ElCol, { align: "middle" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        var _a, _b;
                        if (_push4) {
                          _push4(` Jeste li sigurni da \u017Eelite vratiti <b${_scopeId3}>${ssrInterpolate((_a = unref(dialog).item) == null ? void 0 : _a.name)}</b> kategoriju? `);
                        } else {
                          return [
                            createTextVNode(" Jeste li sigurni da \u017Eelite vratiti "),
                            createVNode("b", null, toDisplayString((_b = unref(dialog).item) == null ? void 0 : _b.name), 1),
                            createTextVNode(" kategoriju? ")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_ElCol, { align: "middle" }, {
                        default: withCtx(() => {
                          var _a;
                          return [
                            createTextVNode(" Jeste li sigurni da \u017Eelite vratiti "),
                            createVNode("b", null, toDisplayString((_a = unref(dialog).item) == null ? void 0 : _a.name), 1),
                            createTextVNode(" kategoriju? ")
                          ];
                        }),
                        _: 1
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            _push2(ssrRenderComponent(_component_ElRow, { justify: "center" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_ElButton, {
                    type: unref(dialog).type === "delete" ? "danger" : "primary",
                    plain: "",
                    onClick: ($event) => handleSubmitButton(unref(ruleFormRef)),
                    loading: unref(isLoading).button
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        if (unref(dialog).type === "create") {
                          _push4(`<span${_scopeId3}>Dodaj</span>`);
                        } else if (unref(dialog).type === "edit") {
                          _push4(`<span${_scopeId3}>Uredi</span>`);
                        } else if (unref(dialog).type === "unarchive") {
                          _push4(`<span${_scopeId3}>Vrati</span>`);
                        } else if (unref(dialog).type === "delete") {
                          _push4(`<span${_scopeId3}>Obri\u0161i</span>`);
                        } else {
                          _push4(`<!---->`);
                        }
                      } else {
                        return [
                          unref(dialog).type === "create" ? (openBlock(), createBlock("span", { key: 0 }, "Dodaj")) : unref(dialog).type === "edit" ? (openBlock(), createBlock("span", { key: 1 }, "Uredi")) : unref(dialog).type === "unarchive" ? (openBlock(), createBlock("span", { key: 2 }, "Vrati")) : unref(dialog).type === "delete" ? (openBlock(), createBlock("span", { key: 3 }, "Obri\u0161i")) : createCommentVNode("", true)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_ElButton, {
                      type: unref(dialog).type === "delete" ? "danger" : "primary",
                      plain: "",
                      onClick: ($event) => handleSubmitButton(unref(ruleFormRef)),
                      loading: unref(isLoading).button
                    }, {
                      default: withCtx(() => [
                        unref(dialog).type === "create" ? (openBlock(), createBlock("span", { key: 0 }, "Dodaj")) : unref(dialog).type === "edit" ? (openBlock(), createBlock("span", { key: 1 }, "Uredi")) : unref(dialog).type === "unarchive" ? (openBlock(), createBlock("span", { key: 2 }, "Vrati")) : unref(dialog).type === "delete" ? (openBlock(), createBlock("span", { key: 3 }, "Obri\u0161i")) : createCommentVNode("", true)
                      ]),
                      _: 1
                    }, 8, ["type", "onClick", "loading"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              unref(dialog).type === "create" || unref(dialog).type === "edit" ? (openBlock(), createBlock(_component_ElRow, {
                key: 0,
                justify: "center"
              }, {
                default: withCtx(() => [
                  createVNode(_component_ElForm, {
                    "label-position": _ctx.$viewport.isLessThan("tablet") ? "top" : "left",
                    "require-asterisk-position": "right",
                    ref_key: "ruleFormRef",
                    ref: ruleFormRef,
                    class: "form",
                    model: unref(form),
                    rules: unref(rules),
                    "label-width": "auto",
                    "status-icon": ""
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_ElFormItem, {
                        label: "Naziv",
                        prop: "name"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_ElInput, {
                            modelValue: unref(form).name,
                            "onUpdate:modelValue": ($event) => unref(form).name = $event,
                            placeholder: "Moja kategorija",
                            class: "input-width"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }, 8, ["label-position", "model", "rules"])
                ]),
                _: 1
              })) : unref(dialog).type === "delete" ? (openBlock(), createBlock(_component_ElRow, {
                key: 1,
                justify: "center",
                class: "mb-24"
              }, {
                default: withCtx(() => [
                  createVNode(_component_ElCol, { align: "middle" }, {
                    default: withCtx(() => {
                      var _a;
                      return [
                        createTextVNode(" Jeste li sigurni da \u017Eelite obrisati "),
                        createVNode("b", null, toDisplayString((_a = unref(dialog).item) == null ? void 0 : _a.name), 1),
                        createTextVNode(" kategoriju? ")
                      ];
                    }),
                    _: 1
                  }),
                  createVNode(_component_ElCol, {
                    align: "middle",
                    class: "mt-12"
                  }, {
                    default: withCtx(() => [
                      createTextVNode("Mogu\u0107e ju je vratiti kasnije. ")
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })) : unref(dialog).type === "unarchive" ? (openBlock(), createBlock(_component_ElRow, {
                key: 2,
                justify: "center",
                class: "mb-24"
              }, {
                default: withCtx(() => [
                  createVNode(_component_ElCol, { align: "middle" }, {
                    default: withCtx(() => {
                      var _a;
                      return [
                        createTextVNode(" Jeste li sigurni da \u017Eelite vratiti "),
                        createVNode("b", null, toDisplayString((_a = unref(dialog).item) == null ? void 0 : _a.name), 1),
                        createTextVNode(" kategoriju? ")
                      ];
                    }),
                    _: 1
                  })
                ]),
                _: 1
              })) : createCommentVNode("", true),
              createVNode(_component_ElRow, { justify: "center" }, {
                default: withCtx(() => [
                  createVNode(_component_ElButton, {
                    type: unref(dialog).type === "delete" ? "danger" : "primary",
                    plain: "",
                    onClick: ($event) => handleSubmitButton(unref(ruleFormRef)),
                    loading: unref(isLoading).button
                  }, {
                    default: withCtx(() => [
                      unref(dialog).type === "create" ? (openBlock(), createBlock("span", { key: 0 }, "Dodaj")) : unref(dialog).type === "edit" ? (openBlock(), createBlock("span", { key: 1 }, "Uredi")) : unref(dialog).type === "unarchive" ? (openBlock(), createBlock("span", { key: 2 }, "Vrati")) : unref(dialog).type === "delete" ? (openBlock(), createBlock("span", { key: 3 }, "Obri\u0161i")) : createCommentVNode("", true)
                    ]),
                    _: 1
                  }, 8, ["type", "onClick", "loading"])
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup$b = _sfc_main$b.setup;
_sfc_main$b.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/backoffice/tabs/BackofficeJobCategoriesTab.vue");
  return _sfc_setup$b ? _sfc_setup$b(props, ctx) : void 0;
};
const _sfc_main$a = /* @__PURE__ */ defineComponent({
  __name: "BackofficeJobAdsTab",
  __ssrInlineRender: true,
  setup(__props) {
    const { $axios } = useNuxtApp();
    const isLoading = ref({
      activeJobs: true,
      deletedJobs: true,
      categories: true,
      button: false
    });
    const activeJobs = ref();
    const deletedJobs = ref();
    const categories = ref();
    const searchValues = ref({
      active: "",
      deleted: ""
    });
    const dialog = ref({
      isOpened: false,
      type: "create",
      item: void 0
    });
    const form = reactive({
      jobCategoryId: "",
      name: "",
      description: "",
      location: "",
      salary: 0,
      contactEmail: "",
      contactNumber: ""
    });
    const ruleFormRef = ref();
    const rules = reactive({
      jobCategoryId: [
        { required: true, message: "Odaberite kategoriju posla", trigger: "blur" }
      ],
      name: [{ required: true, message: "Unesite naslov posla", trigger: "blur" }],
      description: [
        { required: true, message: "Unesite opis posla", trigger: "blur" }
      ],
      location: [
        { required: true, message: "Unesite lokaciju posla", trigger: "blur" }
      ],
      salary: [{ required: true, message: "Unesite pla\u0107u posla", trigger: "blur" }],
      contactEmail: [
        { required: true, message: "Unesite email prodava\u010Da", trigger: "blur" },
        {
          validator: (_, value, callback) => {
            if (!validateEmail(value)) callback(new Error("Neto\u010Dna email adresa"));
            else callback();
          },
          trigger: "blur"
        }
      ],
      contactNumber: [
        {
          validator: (_, value, callback) => {
            if (value.length && !validateMobileNumber(value))
              callback(new Error("Neto\u010Dan broj telefona"));
            else callback();
          },
          trigger: "blur"
        }
      ]
    });
    const activeJobsPagination = ref({
      page: 1,
      perPage: 10,
      total: 0
    });
    const deletedJobspagination = ref({
      page: 1,
      perPage: 10,
      total: 0
    });
    async function getCategories() {
      isLoading.value.categories = true;
      try {
        const response = await $axios.get(`/jobs-category`);
        categories.value = response.data;
      } catch (error) {
        console.error("API Error:", error);
      } finally {
        isLoading.value.categories = false;
      }
    }
    function getAllJobs() {
      getActiveJobs();
      getDeletedJobs();
    }
    function openDialog(type, item) {
      if (item) {
        form.jobCategoryId = String(item.jobCategoryId);
        form.name = String(item.name);
        form.description = String(item.description);
        form.location = String(item.location);
        form.salary = Number(item.salary);
        form.contactEmail = String(item.contactEmail);
        form.contactNumber = item.contactNumber ? String(item.contactNumber) : "";
      }
      dialog.value = {
        isOpened: true,
        type,
        item
      };
    }
    function handleActiveSearch() {
      activeJobsPagination.value.page = 1;
      debounceActiveSearch();
    }
    const debounceActiveSearch = debounce(getActiveJobs, 300);
    async function getActiveJobs() {
      isLoading.value.activeJobs = true;
      try {
        const response = await $axios.get(
          `/job?page=${activeJobsPagination.value.page}&perPage=${activeJobsPagination.value.perPage}&search=${searchValues.value.active}`
        );
        activeJobs.value = response.data.jobs;
        activeJobsPagination.value.total = response.data.total;
      } catch (error) {
        console.error("API Error:", error);
      } finally {
        isLoading.value.activeJobs = false;
      }
    }
    function handleDeletedSearch() {
      deletedJobspagination.value.page = 1;
      debounceDeletedSearch();
    }
    const debounceDeletedSearch = debounce(getDeletedJobs, 300);
    async function getDeletedJobs() {
      isLoading.value.deletedJobs = true;
      try {
        const response = await $axios.get(
          `/job?deletedOnly=true&page=${deletedJobspagination.value.page}&perPage=${deletedJobspagination.value.perPage}&search=${searchValues.value.deleted}`
        );
        deletedJobs.value = response.data.jobs;
        deletedJobspagination.value.total = response.data.total;
      } catch (error) {
        console.error("API Error:", error);
      } finally {
        isLoading.value.deletedJobs = false;
      }
    }
    function showSuccessMessage(message) {
    }
    function handleSubmitButton(formEl) {
      if (dialog.value.type === "create") handleCreate(formEl);
      else if (dialog.value.type === "edit") handleEdit(formEl);
      else if (dialog.value.type === "delete") handleDelete();
      else if (dialog.value.type === "unarchive") handleUnarchive();
    }
    function handleOpenDialog() {
      var _a;
      if (!((_a = categories.value) == null ? void 0 : _a.length) && (dialog.value.type === "create" || dialog.value.type === "edit"))
        getCategories();
    }
    function handleCloseDialog() {
      form.jobCategoryId = "";
      form.name = "";
      form.description = "";
      form.location = "";
      form.salary = 0;
      form.contactEmail = "";
      form.contactNumber = "";
      dialog.value.isOpened = false;
    }
    async function handleCreate(formEl) {
      if (!formEl) return;
      await formEl.validate(async (valid) => {
        if (valid) {
          isLoading.value.button = true;
          try {
            await $axios.post("/job", form);
            getAllJobs();
            handleCloseDialog();
            showSuccessMessage("Uspje\u0161no ste dodali novi oglas za posao.");
          } catch (error) {
            console.error("API Error:", error);
          } finally {
            isLoading.value.button = false;
          }
        }
      });
    }
    async function handleEdit(formEl) {
      if (!formEl) return;
      await formEl.validate(async (valid) => {
        var _a;
        if (valid) {
          isLoading.value.button = true;
          try {
            await $axios.put(`/job/${(_a = dialog.value.item) == null ? void 0 : _a.id}`, form);
            getAllJobs();
            handleCloseDialog();
            showSuccessMessage("Uspje\u0161no ste uredili oglas za posao.");
          } catch (error) {
            console.error("API Error:", error);
          } finally {
            isLoading.value.button = false;
          }
        }
      });
    }
    async function handleDelete() {
      var _a;
      isLoading.value.button = true;
      try {
        await $axios.delete(`/job/${(_a = dialog.value.item) == null ? void 0 : _a.id}`);
        getAllJobs();
        handleCloseDialog();
        showSuccessMessage("Uspje\u0161no ste obrisali oglas za posao.");
      } catch (error) {
        console.error("API Error:", error);
      } finally {
        isLoading.value.button = false;
      }
    }
    async function handleUnarchive() {
      var _a;
      isLoading.value.button = true;
      try {
        await $axios.patch(`/job/${(_a = dialog.value.item) == null ? void 0 : _a.id}/unarchive`);
        getAllJobs();
        handleCloseDialog();
        showSuccessMessage("Uspje\u0161no ste vratili obrisan oglas za posao.");
      } catch (error) {
        console.error("API Error:", error);
      } finally {
        isLoading.value.button = false;
      }
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ElRow = ElRow;
      const _component_ElCol = ElCol;
      const _component_ElButton = ElButton;
      const _component_ElIcon = ElIcon;
      const _component_ElInput = ElInput;
      const _component_ElTable = ElTable;
      const _component_ElTableColumn = ElTableColumn;
      const _component_ElDialog = ElDialog;
      const _component_ElForm = ElForm;
      const _component_ElFormItem = ElFormItem;
      const _component_ElSelect = ElSelect;
      const _component_ElOption = ElOption;
      const _component_ElInputNumber = ElInputNumber;
      const _directive_loading = vLoading;
      _push(`<!--[--><div class="backoffice-page" data-v-91469128>`);
      _push(ssrRenderComponent(_component_ElRow, {
        justify: "space-between",
        align: "middle",
        class: "w-100"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_ElCol, { span: 6 }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_ElCol, {
              span: 12,
              align: "center"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<h3 class="color-primary" data-v-91469128${_scopeId2}>Posao oglasi</h3>`);
                } else {
                  return [
                    createVNode("h3", { class: "color-primary" }, "Posao oglasi")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_ElCol, {
              span: 6,
              align: "end"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_ElButton, {
                    type: "primary",
                    plain: "",
                    onClick: ($event) => openDialog("create")
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_ElIcon, { size: "24" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(unref(circle_plus_filled_default), null, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(unref(circle_plus_filled_default))
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(`<span class="ml-8" data-v-91469128${_scopeId3}>Dodaj oglas</span>`);
                      } else {
                        return [
                          createVNode(_component_ElIcon, { size: "24" }, {
                            default: withCtx(() => [
                              createVNode(unref(circle_plus_filled_default))
                            ]),
                            _: 1
                          }),
                          createVNode("span", { class: "ml-8" }, "Dodaj oglas")
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
                      onClick: ($event) => openDialog("create")
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_ElIcon, { size: "24" }, {
                          default: withCtx(() => [
                            createVNode(unref(circle_plus_filled_default))
                          ]),
                          _: 1
                        }),
                        createVNode("span", { class: "ml-8" }, "Dodaj oglas")
                      ]),
                      _: 1
                    }, 8, ["onClick"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_ElCol, { span: 6 }),
              createVNode(_component_ElCol, {
                span: 12,
                align: "center"
              }, {
                default: withCtx(() => [
                  createVNode("h3", { class: "color-primary" }, "Posao oglasi")
                ]),
                _: 1
              }),
              createVNode(_component_ElCol, {
                span: 6,
                align: "end"
              }, {
                default: withCtx(() => [
                  createVNode(_component_ElButton, {
                    type: "primary",
                    plain: "",
                    onClick: ($event) => openDialog("create")
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_ElIcon, { size: "24" }, {
                        default: withCtx(() => [
                          createVNode(unref(circle_plus_filled_default))
                        ]),
                        _: 1
                      }),
                      createVNode("span", { class: "ml-8" }, "Dodaj oglas")
                    ]),
                    _: 1
                  }, 8, ["onClick"])
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
        align: "middle",
        class: "w-100"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_ElCol, {
              span: 8,
              offset: 8,
              align: "center"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span class="color-primary" data-v-91469128${_scopeId2}><b data-v-91469128${_scopeId2}>Aktivni poslovi</b></span>`);
                } else {
                  return [
                    createVNode("span", { class: "color-primary" }, [
                      createVNode("b", null, "Aktivni poslovi")
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_ElCol, {
              span: 8,
              align: "end"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_ElInput, {
                    modelValue: unref(searchValues).active,
                    "onUpdate:modelValue": ($event) => unref(searchValues).active = $event,
                    type: "text",
                    placeholder: "Pretra\u017Eite naslov...",
                    class: "max-w-250",
                    "prefix-icon": unref(search_default),
                    onInput: handleActiveSearch
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_ElInput, {
                      modelValue: unref(searchValues).active,
                      "onUpdate:modelValue": ($event) => unref(searchValues).active = $event,
                      type: "text",
                      placeholder: "Pretra\u017Eite naslov...",
                      class: "max-w-250",
                      "prefix-icon": unref(search_default),
                      onInput: handleActiveSearch
                    }, null, 8, ["modelValue", "onUpdate:modelValue", "prefix-icon"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_ElCol, {
                span: 8,
                offset: 8,
                align: "center"
              }, {
                default: withCtx(() => [
                  createVNode("span", { class: "color-primary" }, [
                    createVNode("b", null, "Aktivni poslovi")
                  ])
                ]),
                _: 1
              }),
              createVNode(_component_ElCol, {
                span: 8,
                align: "end"
              }, {
                default: withCtx(() => [
                  createVNode(_component_ElInput, {
                    modelValue: unref(searchValues).active,
                    "onUpdate:modelValue": ($event) => unref(searchValues).active = $event,
                    type: "text",
                    placeholder: "Pretra\u017Eite naslov...",
                    class: "max-w-250",
                    "prefix-icon": unref(search_default),
                    onInput: handleActiveSearch
                  }, null, 8, ["modelValue", "onUpdate:modelValue", "prefix-icon"])
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_ElTable, mergeProps({
        data: unref(activeJobs),
        stripe: "",
        "empty-text": "Nema dostupnih podataka"
      }, ssrGetDirectiveProps(_ctx, _directive_loading, unref(isLoading).activeJobs)), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_ElTableColumn, {
              label: "Naslov",
              prop: "name"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_ElTableColumn, {
              label: "Kategorija",
              prop: "jobCategory.name"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_ElTableColumn, {
              label: "Lokacija",
              prop: "location"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_ElTableColumn, {
              label: "Pla\u0107a",
              prop: "salary"
            }, {
              default: withCtx((items, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(Number(items.row.salary).toFixed(2))} \u20AC `);
                } else {
                  return [
                    createTextVNode(toDisplayString(Number(items.row.salary).toFixed(2)) + " \u20AC ", 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_ElTableColumn, {
              label: "Akcije",
              align: "center",
              width: "148"
            }, {
              default: withCtx((items, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_ElButton, {
                    type: "primary",
                    plain: "",
                    onClick: ($event) => openDialog("edit", items.row)
                  }, {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_ElIcon, { size: "24" }, {
                          default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(unref(edit_default), null, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(unref(edit_default))
                              ];
                            }
                          }),
                          _: 2
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_ElIcon, { size: "24" }, {
                            default: withCtx(() => [
                              createVNode(unref(edit_default))
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_ElButton, {
                    type: "danger",
                    plain: "",
                    onClick: ($event) => openDialog("delete", items.row)
                  }, {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_ElIcon, { size: "24" }, {
                          default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(unref(delete_filled_default), null, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(unref(delete_filled_default))
                              ];
                            }
                          }),
                          _: 2
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_ElIcon, { size: "24" }, {
                            default: withCtx(() => [
                              createVNode(unref(delete_filled_default))
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_ElButton, {
                      type: "primary",
                      plain: "",
                      onClick: ($event) => openDialog("edit", items.row)
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_ElIcon, { size: "24" }, {
                          default: withCtx(() => [
                            createVNode(unref(edit_default))
                          ]),
                          _: 1
                        })
                      ]),
                      _: 2
                    }, 1032, ["onClick"]),
                    createVNode(_component_ElButton, {
                      type: "danger",
                      plain: "",
                      onClick: ($event) => openDialog("delete", items.row)
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_ElIcon, { size: "24" }, {
                          default: withCtx(() => [
                            createVNode(unref(delete_filled_default))
                          ]),
                          _: 1
                        })
                      ]),
                      _: 2
                    }, 1032, ["onClick"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_ElTableColumn, {
                label: "Naslov",
                prop: "name"
              }),
              createVNode(_component_ElTableColumn, {
                label: "Kategorija",
                prop: "jobCategory.name"
              }),
              createVNode(_component_ElTableColumn, {
                label: "Lokacija",
                prop: "location"
              }),
              createVNode(_component_ElTableColumn, {
                label: "Pla\u0107a",
                prop: "salary"
              }, {
                default: withCtx((items) => [
                  createTextVNode(toDisplayString(Number(items.row.salary).toFixed(2)) + " \u20AC ", 1)
                ]),
                _: 1
              }),
              createVNode(_component_ElTableColumn, {
                label: "Akcije",
                align: "center",
                width: "148"
              }, {
                default: withCtx((items) => [
                  createVNode(_component_ElButton, {
                    type: "primary",
                    plain: "",
                    onClick: ($event) => openDialog("edit", items.row)
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_ElIcon, { size: "24" }, {
                        default: withCtx(() => [
                          createVNode(unref(edit_default))
                        ]),
                        _: 1
                      })
                    ]),
                    _: 2
                  }, 1032, ["onClick"]),
                  createVNode(_component_ElButton, {
                    type: "danger",
                    plain: "",
                    onClick: ($event) => openDialog("delete", items.row)
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_ElIcon, { size: "24" }, {
                        default: withCtx(() => [
                          createVNode(unref(delete_filled_default))
                        ]),
                        _: 1
                      })
                    ]),
                    _: 2
                  }, 1032, ["onClick"])
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      if (unref(activeJobsPagination).total > 10) {
        _push(ssrRenderComponent(Pagination, {
          modelValue: unref(activeJobsPagination),
          "onUpdate:modelValue": ($event) => isRef(activeJobsPagination) ? activeJobsPagination.value = $event : null,
          loading: unref(isLoading).deletedJobs,
          "scroll-element-id": "scroll-element",
          onPageChange: getActiveJobs,
          class: "mb-24"
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(ssrRenderComponent(_component_ElRow, {
        justify: "center",
        align: "middle",
        class: "w-100"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_ElCol, {
              span: 8,
              offset: 8,
              align: "center"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span class="color-primary" data-v-91469128${_scopeId2}><b data-v-91469128${_scopeId2}>Obrisani poslovi</b></span>`);
                } else {
                  return [
                    createVNode("span", { class: "color-primary" }, [
                      createVNode("b", null, "Obrisani poslovi")
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_ElCol, {
              span: 8,
              align: "end"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_ElInput, {
                    modelValue: unref(searchValues).deleted,
                    "onUpdate:modelValue": ($event) => unref(searchValues).deleted = $event,
                    type: "text",
                    placeholder: "Pretra\u017Eite naslov...",
                    class: "max-w-250",
                    "prefix-icon": unref(search_default),
                    onInput: handleDeletedSearch
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_ElInput, {
                      modelValue: unref(searchValues).deleted,
                      "onUpdate:modelValue": ($event) => unref(searchValues).deleted = $event,
                      type: "text",
                      placeholder: "Pretra\u017Eite naslov...",
                      class: "max-w-250",
                      "prefix-icon": unref(search_default),
                      onInput: handleDeletedSearch
                    }, null, 8, ["modelValue", "onUpdate:modelValue", "prefix-icon"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_ElCol, {
                span: 8,
                offset: 8,
                align: "center"
              }, {
                default: withCtx(() => [
                  createVNode("span", { class: "color-primary" }, [
                    createVNode("b", null, "Obrisani poslovi")
                  ])
                ]),
                _: 1
              }),
              createVNode(_component_ElCol, {
                span: 8,
                align: "end"
              }, {
                default: withCtx(() => [
                  createVNode(_component_ElInput, {
                    modelValue: unref(searchValues).deleted,
                    "onUpdate:modelValue": ($event) => unref(searchValues).deleted = $event,
                    type: "text",
                    placeholder: "Pretra\u017Eite naslov...",
                    class: "max-w-250",
                    "prefix-icon": unref(search_default),
                    onInput: handleDeletedSearch
                  }, null, 8, ["modelValue", "onUpdate:modelValue", "prefix-icon"])
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_ElTable, mergeProps({
        data: unref(deletedJobs),
        stripe: "",
        "empty-text": "Nema dostupnih podataka"
      }, ssrGetDirectiveProps(_ctx, _directive_loading, unref(isLoading).deletedJobs)), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_ElTableColumn, {
              label: "Naslov",
              prop: "name"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_ElTableColumn, {
              label: "Kategorija",
              prop: "jobCategory.name"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_ElTableColumn, {
              label: "Lokacija",
              prop: "location"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_ElTableColumn, {
              label: "Pla\u0107a",
              prop: "salary"
            }, {
              default: withCtx((items, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(Number(items.row.salary).toFixed(2))} \u20AC `);
                } else {
                  return [
                    createTextVNode(toDisplayString(Number(items.row.salary).toFixed(2)) + " \u20AC ", 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_ElTableColumn, {
              label: "Akcije",
              align: "center",
              width: "80"
            }, {
              default: withCtx((items, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_ElButton, {
                    type: "primary",
                    plain: "",
                    onClick: ($event) => openDialog("unarchive", items.row)
                  }, {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_ElIcon, { size: "24" }, {
                          default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(unref(refresh_left_default), null, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(unref(refresh_left_default))
                              ];
                            }
                          }),
                          _: 2
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_ElIcon, { size: "24" }, {
                            default: withCtx(() => [
                              createVNode(unref(refresh_left_default))
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_ElButton, {
                      type: "primary",
                      plain: "",
                      onClick: ($event) => openDialog("unarchive", items.row)
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_ElIcon, { size: "24" }, {
                          default: withCtx(() => [
                            createVNode(unref(refresh_left_default))
                          ]),
                          _: 1
                        })
                      ]),
                      _: 2
                    }, 1032, ["onClick"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_ElTableColumn, {
                label: "Naslov",
                prop: "name"
              }),
              createVNode(_component_ElTableColumn, {
                label: "Kategorija",
                prop: "jobCategory.name"
              }),
              createVNode(_component_ElTableColumn, {
                label: "Lokacija",
                prop: "location"
              }),
              createVNode(_component_ElTableColumn, {
                label: "Pla\u0107a",
                prop: "salary"
              }, {
                default: withCtx((items) => [
                  createTextVNode(toDisplayString(Number(items.row.salary).toFixed(2)) + " \u20AC ", 1)
                ]),
                _: 1
              }),
              createVNode(_component_ElTableColumn, {
                label: "Akcije",
                align: "center",
                width: "80"
              }, {
                default: withCtx((items) => [
                  createVNode(_component_ElButton, {
                    type: "primary",
                    plain: "",
                    onClick: ($event) => openDialog("unarchive", items.row)
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_ElIcon, { size: "24" }, {
                        default: withCtx(() => [
                          createVNode(unref(refresh_left_default))
                        ]),
                        _: 1
                      })
                    ]),
                    _: 2
                  }, 1032, ["onClick"])
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      if (unref(deletedJobspagination).total > 10) {
        _push(ssrRenderComponent(Pagination, {
          modelValue: unref(deletedJobspagination),
          "onUpdate:modelValue": ($event) => isRef(deletedJobspagination) ? deletedJobspagination.value = $event : null,
          loading: unref(isLoading).deletedJobs,
          "scroll-element-id": "scroll-element",
          onPageChange: getDeletedJobs,
          class: "mb-24"
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
      _push(ssrRenderComponent(_component_ElDialog, {
        modelValue: unref(dialog).isOpened,
        "onUpdate:modelValue": ($event) => unref(dialog).isOpened = $event,
        "close-on-click-modal": false,
        "destroy-on-close": "",
        fullscreen: "",
        onOpen: handleOpenDialog,
        onClose: handleCloseDialog
      }, {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_ElRow, { justify: "center" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<h3 class="color-primary" data-v-91469128${_scopeId2}>`);
                  if (unref(dialog).type === "create") {
                    _push3(`<span data-v-91469128${_scopeId2}>Dodaj novu vijest</span>`);
                  } else if (unref(dialog).type === "edit") {
                    _push3(`<span data-v-91469128${_scopeId2}>Uredi vijest</span>`);
                  } else if (unref(dialog).type === "unarchive") {
                    _push3(`<span data-v-91469128${_scopeId2}>Vrati vijest</span>`);
                  } else {
                    _push3(`<span data-v-91469128${_scopeId2}>Obri\u0161i vijest</span>`);
                  }
                  _push3(`</h3>`);
                } else {
                  return [
                    createVNode("h3", { class: "color-primary" }, [
                      unref(dialog).type === "create" ? (openBlock(), createBlock("span", { key: 0 }, "Dodaj novu vijest")) : unref(dialog).type === "edit" ? (openBlock(), createBlock("span", { key: 1 }, "Uredi vijest")) : unref(dialog).type === "unarchive" ? (openBlock(), createBlock("span", { key: 2 }, "Vrati vijest")) : (openBlock(), createBlock("span", { key: 3 }, "Obri\u0161i vijest"))
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_ElRow, { justify: "center" }, {
                default: withCtx(() => [
                  createVNode("h3", { class: "color-primary" }, [
                    unref(dialog).type === "create" ? (openBlock(), createBlock("span", { key: 0 }, "Dodaj novu vijest")) : unref(dialog).type === "edit" ? (openBlock(), createBlock("span", { key: 1 }, "Uredi vijest")) : unref(dialog).type === "unarchive" ? (openBlock(), createBlock("span", { key: 2 }, "Vrati vijest")) : (openBlock(), createBlock("span", { key: 3 }, "Obri\u0161i vijest"))
                  ])
                ]),
                _: 1
              })
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (unref(dialog).type === "create" || unref(dialog).type === "edit") {
              _push2(ssrRenderComponent(_component_ElRow, { justify: "center" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_ElForm, {
                      "label-position": _ctx.$viewport.isLessThan("tablet") ? "top" : "left",
                      "require-asterisk-position": "right",
                      ref_key: "ruleFormRef",
                      ref: ruleFormRef,
                      class: "form",
                      model: unref(form),
                      rules: unref(rules),
                      "label-width": "auto",
                      "status-icon": ""
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_ElFormItem, {
                            label: "Kategorija",
                            prop: "text"
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(_component_ElSelect, {
                                  modelValue: unref(form).jobCategoryId,
                                  "onUpdate:modelValue": ($event) => unref(form).jobCategoryId = $event,
                                  loading: unref(isLoading).categories,
                                  placeholder: "Odaberite kategoriju",
                                  class: "input-width",
                                  clearable: ""
                                }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(`<!--[-->`);
                                      ssrRenderList(unref(categories), (category) => {
                                        _push6(ssrRenderComponent(_component_ElOption, {
                                          key: String(category.id),
                                          label: String(category.name),
                                          value: String(category.id)
                                        }, null, _parent6, _scopeId5));
                                      });
                                      _push6(`<!--]-->`);
                                    } else {
                                      return [
                                        (openBlock(true), createBlock(Fragment, null, renderList(unref(categories), (category) => {
                                          return openBlock(), createBlock(_component_ElOption, {
                                            key: String(category.id),
                                            label: String(category.name),
                                            value: String(category.id)
                                          }, null, 8, ["label", "value"]);
                                        }), 128))
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(_component_ElSelect, {
                                    modelValue: unref(form).jobCategoryId,
                                    "onUpdate:modelValue": ($event) => unref(form).jobCategoryId = $event,
                                    loading: unref(isLoading).categories,
                                    placeholder: "Odaberite kategoriju",
                                    class: "input-width",
                                    clearable: ""
                                  }, {
                                    default: withCtx(() => [
                                      (openBlock(true), createBlock(Fragment, null, renderList(unref(categories), (category) => {
                                        return openBlock(), createBlock(_component_ElOption, {
                                          key: String(category.id),
                                          label: String(category.name),
                                          value: String(category.id)
                                        }, null, 8, ["label", "value"]);
                                      }), 128))
                                    ]),
                                    _: 1
                                  }, 8, ["modelValue", "onUpdate:modelValue", "loading"])
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(_component_ElFormItem, {
                            label: "Naziv",
                            prop: "name"
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(_component_ElInput, {
                                  modelValue: unref(form).name,
                                  "onUpdate:modelValue": ($event) => unref(form).name = $event,
                                  placeholder: "Moj oglas za posao",
                                  class: "input-width"
                                }, null, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(_component_ElInput, {
                                    modelValue: unref(form).name,
                                    "onUpdate:modelValue": ($event) => unref(form).name = $event,
                                    placeholder: "Moj oglas za posao",
                                    class: "input-width"
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(_component_ElFormItem, {
                            label: "Lokacija",
                            prop: "location"
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(_component_ElInput, {
                                  modelValue: unref(form).location,
                                  "onUpdate:modelValue": ($event) => unref(form).location = $event,
                                  placeholder: "Stuttgart",
                                  class: "input-width"
                                }, null, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(_component_ElInput, {
                                    modelValue: unref(form).location,
                                    "onUpdate:modelValue": ($event) => unref(form).location = $event,
                                    placeholder: "Stuttgart",
                                    class: "input-width"
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(_component_ElFormItem, {
                            label: "Pla\u0107a",
                            prop: "salary"
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(_component_ElInputNumber, {
                                  modelValue: unref(form).salary,
                                  "onUpdate:modelValue": ($event) => unref(form).salary = $event,
                                  precision: 2,
                                  placeholder: "1999.99",
                                  step: 50,
                                  class: "input-width"
                                }, {
                                  suffix: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(`\u20AC`);
                                    } else {
                                      return [
                                        createTextVNode("\u20AC")
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(_component_ElInputNumber, {
                                    modelValue: unref(form).salary,
                                    "onUpdate:modelValue": ($event) => unref(form).salary = $event,
                                    precision: 2,
                                    placeholder: "1999.99",
                                    step: 50,
                                    class: "input-width"
                                  }, {
                                    suffix: withCtx(() => [
                                      createTextVNode("\u20AC")
                                    ]),
                                    _: 1
                                  }, 8, ["modelValue", "onUpdate:modelValue"])
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(_component_ElFormItem, {
                            label: "Kontakt email",
                            prop: "contactEmail"
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(_component_ElInput, {
                                  modelValue: unref(form).contactEmail,
                                  "onUpdate:modelValue": ($event) => unref(form).contactEmail = $event,
                                  placeholder: "john.doe@mail.com",
                                  class: "input-width"
                                }, null, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(_component_ElInput, {
                                    modelValue: unref(form).contactEmail,
                                    "onUpdate:modelValue": ($event) => unref(form).contactEmail = $event,
                                    placeholder: "john.doe@mail.com",
                                    class: "input-width"
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(_component_ElFormItem, {
                            label: "Kontakt telefon",
                            prop: "contactNumber"
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(_component_ElInput, {
                                  modelValue: unref(form).contactNumber,
                                  "onUpdate:modelValue": ($event) => unref(form).contactNumber = $event,
                                  placeholder: "+3850123456789",
                                  class: "input-width"
                                }, null, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(_component_ElInput, {
                                    modelValue: unref(form).contactNumber,
                                    "onUpdate:modelValue": ($event) => unref(form).contactNumber = $event,
                                    placeholder: "+3850123456789",
                                    class: "input-width"
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                          _push4(`<div style="${ssrRenderStyle({ "height": "450px" })}" data-v-91469128${_scopeId3}>`);
                          _push4(ssrRenderComponent(_component_ElFormItem, {
                            label: "Opis",
                            prop: "text"
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(unref(script), {
                                  modelValue: unref(form).description,
                                  "onUpdate:modelValue": ($event) => unref(form).description = $event,
                                  class: "editor"
                                }, null, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(unref(script), {
                                    modelValue: unref(form).description,
                                    "onUpdate:modelValue": ($event) => unref(form).description = $event,
                                    class: "editor"
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                          _push4(`</div>`);
                        } else {
                          return [
                            createVNode(_component_ElFormItem, {
                              label: "Kategorija",
                              prop: "text"
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_ElSelect, {
                                  modelValue: unref(form).jobCategoryId,
                                  "onUpdate:modelValue": ($event) => unref(form).jobCategoryId = $event,
                                  loading: unref(isLoading).categories,
                                  placeholder: "Odaberite kategoriju",
                                  class: "input-width",
                                  clearable: ""
                                }, {
                                  default: withCtx(() => [
                                    (openBlock(true), createBlock(Fragment, null, renderList(unref(categories), (category) => {
                                      return openBlock(), createBlock(_component_ElOption, {
                                        key: String(category.id),
                                        label: String(category.name),
                                        value: String(category.id)
                                      }, null, 8, ["label", "value"]);
                                    }), 128))
                                  ]),
                                  _: 1
                                }, 8, ["modelValue", "onUpdate:modelValue", "loading"])
                              ]),
                              _: 1
                            }),
                            createVNode(_component_ElFormItem, {
                              label: "Naziv",
                              prop: "name"
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_ElInput, {
                                  modelValue: unref(form).name,
                                  "onUpdate:modelValue": ($event) => unref(form).name = $event,
                                  placeholder: "Moj oglas za posao",
                                  class: "input-width"
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ]),
                              _: 1
                            }),
                            createVNode(_component_ElFormItem, {
                              label: "Lokacija",
                              prop: "location"
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_ElInput, {
                                  modelValue: unref(form).location,
                                  "onUpdate:modelValue": ($event) => unref(form).location = $event,
                                  placeholder: "Stuttgart",
                                  class: "input-width"
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ]),
                              _: 1
                            }),
                            createVNode(_component_ElFormItem, {
                              label: "Pla\u0107a",
                              prop: "salary"
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_ElInputNumber, {
                                  modelValue: unref(form).salary,
                                  "onUpdate:modelValue": ($event) => unref(form).salary = $event,
                                  precision: 2,
                                  placeholder: "1999.99",
                                  step: 50,
                                  class: "input-width"
                                }, {
                                  suffix: withCtx(() => [
                                    createTextVNode("\u20AC")
                                  ]),
                                  _: 1
                                }, 8, ["modelValue", "onUpdate:modelValue"])
                              ]),
                              _: 1
                            }),
                            createVNode(_component_ElFormItem, {
                              label: "Kontakt email",
                              prop: "contactEmail"
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_ElInput, {
                                  modelValue: unref(form).contactEmail,
                                  "onUpdate:modelValue": ($event) => unref(form).contactEmail = $event,
                                  placeholder: "john.doe@mail.com",
                                  class: "input-width"
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ]),
                              _: 1
                            }),
                            createVNode(_component_ElFormItem, {
                              label: "Kontakt telefon",
                              prop: "contactNumber"
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_ElInput, {
                                  modelValue: unref(form).contactNumber,
                                  "onUpdate:modelValue": ($event) => unref(form).contactNumber = $event,
                                  placeholder: "+3850123456789",
                                  class: "input-width"
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ]),
                              _: 1
                            }),
                            createVNode("div", { style: { "height": "450px" } }, [
                              createVNode(_component_ElFormItem, {
                                label: "Opis",
                                prop: "text"
                              }, {
                                default: withCtx(() => [
                                  createVNode(unref(script), {
                                    modelValue: unref(form).description,
                                    "onUpdate:modelValue": ($event) => unref(form).description = $event,
                                    class: "editor"
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                ]),
                                _: 1
                              })
                            ])
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
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
                        "status-icon": ""
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_ElFormItem, {
                            label: "Kategorija",
                            prop: "text"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_ElSelect, {
                                modelValue: unref(form).jobCategoryId,
                                "onUpdate:modelValue": ($event) => unref(form).jobCategoryId = $event,
                                loading: unref(isLoading).categories,
                                placeholder: "Odaberite kategoriju",
                                class: "input-width",
                                clearable: ""
                              }, {
                                default: withCtx(() => [
                                  (openBlock(true), createBlock(Fragment, null, renderList(unref(categories), (category) => {
                                    return openBlock(), createBlock(_component_ElOption, {
                                      key: String(category.id),
                                      label: String(category.name),
                                      value: String(category.id)
                                    }, null, 8, ["label", "value"]);
                                  }), 128))
                                ]),
                                _: 1
                              }, 8, ["modelValue", "onUpdate:modelValue", "loading"])
                            ]),
                            _: 1
                          }),
                          createVNode(_component_ElFormItem, {
                            label: "Naziv",
                            prop: "name"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_ElInput, {
                                modelValue: unref(form).name,
                                "onUpdate:modelValue": ($event) => unref(form).name = $event,
                                placeholder: "Moj oglas za posao",
                                class: "input-width"
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            _: 1
                          }),
                          createVNode(_component_ElFormItem, {
                            label: "Lokacija",
                            prop: "location"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_ElInput, {
                                modelValue: unref(form).location,
                                "onUpdate:modelValue": ($event) => unref(form).location = $event,
                                placeholder: "Stuttgart",
                                class: "input-width"
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            _: 1
                          }),
                          createVNode(_component_ElFormItem, {
                            label: "Pla\u0107a",
                            prop: "salary"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_ElInputNumber, {
                                modelValue: unref(form).salary,
                                "onUpdate:modelValue": ($event) => unref(form).salary = $event,
                                precision: 2,
                                placeholder: "1999.99",
                                step: 50,
                                class: "input-width"
                              }, {
                                suffix: withCtx(() => [
                                  createTextVNode("\u20AC")
                                ]),
                                _: 1
                              }, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            _: 1
                          }),
                          createVNode(_component_ElFormItem, {
                            label: "Kontakt email",
                            prop: "contactEmail"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_ElInput, {
                                modelValue: unref(form).contactEmail,
                                "onUpdate:modelValue": ($event) => unref(form).contactEmail = $event,
                                placeholder: "john.doe@mail.com",
                                class: "input-width"
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            _: 1
                          }),
                          createVNode(_component_ElFormItem, {
                            label: "Kontakt telefon",
                            prop: "contactNumber"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_ElInput, {
                                modelValue: unref(form).contactNumber,
                                "onUpdate:modelValue": ($event) => unref(form).contactNumber = $event,
                                placeholder: "+3850123456789",
                                class: "input-width"
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            _: 1
                          }),
                          createVNode("div", { style: { "height": "450px" } }, [
                            createVNode(_component_ElFormItem, {
                              label: "Opis",
                              prop: "text"
                            }, {
                              default: withCtx(() => [
                                createVNode(unref(script), {
                                  modelValue: unref(form).description,
                                  "onUpdate:modelValue": ($event) => unref(form).description = $event,
                                  class: "editor"
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ]),
                              _: 1
                            })
                          ])
                        ]),
                        _: 1
                      }, 8, ["label-position", "model", "rules"])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else if (unref(dialog).type === "delete") {
              _push2(ssrRenderComponent(_component_ElRow, {
                justify: "center",
                class: "mb-24"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_ElCol, { align: "middle" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        var _a, _b;
                        if (_push4) {
                          _push4(` Jeste li sigurni da \u017Eelite obrisati <b data-v-91469128${_scopeId3}>${ssrInterpolate((_a = unref(dialog).item) == null ? void 0 : _a.name)}</b> oglas za posao? `);
                        } else {
                          return [
                            createTextVNode(" Jeste li sigurni da \u017Eelite obrisati "),
                            createVNode("b", null, toDisplayString((_b = unref(dialog).item) == null ? void 0 : _b.name), 1),
                            createTextVNode(" oglas za posao? ")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(_component_ElCol, {
                      align: "middle",
                      class: "mt-12"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`Mogu\u0107e ju je vratiti kasnije. `);
                        } else {
                          return [
                            createTextVNode("Mogu\u0107e ju je vratiti kasnije. ")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_ElCol, { align: "middle" }, {
                        default: withCtx(() => {
                          var _a;
                          return [
                            createTextVNode(" Jeste li sigurni da \u017Eelite obrisati "),
                            createVNode("b", null, toDisplayString((_a = unref(dialog).item) == null ? void 0 : _a.name), 1),
                            createTextVNode(" oglas za posao? ")
                          ];
                        }),
                        _: 1
                      }),
                      createVNode(_component_ElCol, {
                        align: "middle",
                        class: "mt-12"
                      }, {
                        default: withCtx(() => [
                          createTextVNode("Mogu\u0107e ju je vratiti kasnije. ")
                        ]),
                        _: 1
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else if (unref(dialog).type === "unarchive") {
              _push2(ssrRenderComponent(_component_ElRow, {
                justify: "center",
                class: "mb-24"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_ElCol, { align: "middle" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        var _a, _b;
                        if (_push4) {
                          _push4(` Jeste li sigurni da \u017Eelite vratiti <b data-v-91469128${_scopeId3}>${ssrInterpolate((_a = unref(dialog).item) == null ? void 0 : _a.name)}</b> oglas za posao? `);
                        } else {
                          return [
                            createTextVNode(" Jeste li sigurni da \u017Eelite vratiti "),
                            createVNode("b", null, toDisplayString((_b = unref(dialog).item) == null ? void 0 : _b.name), 1),
                            createTextVNode(" oglas za posao? ")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_ElCol, { align: "middle" }, {
                        default: withCtx(() => {
                          var _a;
                          return [
                            createTextVNode(" Jeste li sigurni da \u017Eelite vratiti "),
                            createVNode("b", null, toDisplayString((_a = unref(dialog).item) == null ? void 0 : _a.name), 1),
                            createTextVNode(" oglas za posao? ")
                          ];
                        }),
                        _: 1
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            if (unref(isLoading).button) {
              _push2(ssrRenderComponent(_component_ElRow, {
                justify: "center",
                class: "color-primary mb-12"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(` Ne prekidajte u\u010Ditavanje podataka! `);
                  } else {
                    return [
                      createTextVNode(" Ne prekidajte u\u010Ditavanje podataka! ")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            _push2(ssrRenderComponent(_component_ElRow, {
              justify: "center",
              class: "mt-16"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_ElButton, {
                    type: unref(dialog).type === "delete" ? "danger" : "primary",
                    plain: "",
                    onClick: ($event) => handleSubmitButton(unref(ruleFormRef)),
                    loading: unref(isLoading).button
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        if (unref(dialog).type === "create") {
                          _push4(`<span data-v-91469128${_scopeId3}>Dodaj</span>`);
                        } else if (unref(dialog).type === "edit") {
                          _push4(`<span data-v-91469128${_scopeId3}>Uredi</span>`);
                        } else if (unref(dialog).type === "unarchive") {
                          _push4(`<span data-v-91469128${_scopeId3}>Vrati</span>`);
                        } else if (unref(dialog).type === "delete") {
                          _push4(`<span data-v-91469128${_scopeId3}>Obri\u0161i</span>`);
                        } else {
                          _push4(`<!---->`);
                        }
                      } else {
                        return [
                          unref(dialog).type === "create" ? (openBlock(), createBlock("span", { key: 0 }, "Dodaj")) : unref(dialog).type === "edit" ? (openBlock(), createBlock("span", { key: 1 }, "Uredi")) : unref(dialog).type === "unarchive" ? (openBlock(), createBlock("span", { key: 2 }, "Vrati")) : unref(dialog).type === "delete" ? (openBlock(), createBlock("span", { key: 3 }, "Obri\u0161i")) : createCommentVNode("", true)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_ElButton, {
                      type: unref(dialog).type === "delete" ? "danger" : "primary",
                      plain: "",
                      onClick: ($event) => handleSubmitButton(unref(ruleFormRef)),
                      loading: unref(isLoading).button
                    }, {
                      default: withCtx(() => [
                        unref(dialog).type === "create" ? (openBlock(), createBlock("span", { key: 0 }, "Dodaj")) : unref(dialog).type === "edit" ? (openBlock(), createBlock("span", { key: 1 }, "Uredi")) : unref(dialog).type === "unarchive" ? (openBlock(), createBlock("span", { key: 2 }, "Vrati")) : unref(dialog).type === "delete" ? (openBlock(), createBlock("span", { key: 3 }, "Obri\u0161i")) : createCommentVNode("", true)
                      ]),
                      _: 1
                    }, 8, ["type", "onClick", "loading"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              unref(dialog).type === "create" || unref(dialog).type === "edit" ? (openBlock(), createBlock(_component_ElRow, {
                key: 0,
                justify: "center"
              }, {
                default: withCtx(() => [
                  createVNode(_component_ElForm, {
                    "label-position": _ctx.$viewport.isLessThan("tablet") ? "top" : "left",
                    "require-asterisk-position": "right",
                    ref_key: "ruleFormRef",
                    ref: ruleFormRef,
                    class: "form",
                    model: unref(form),
                    rules: unref(rules),
                    "label-width": "auto",
                    "status-icon": ""
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_ElFormItem, {
                        label: "Kategorija",
                        prop: "text"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_ElSelect, {
                            modelValue: unref(form).jobCategoryId,
                            "onUpdate:modelValue": ($event) => unref(form).jobCategoryId = $event,
                            loading: unref(isLoading).categories,
                            placeholder: "Odaberite kategoriju",
                            class: "input-width",
                            clearable: ""
                          }, {
                            default: withCtx(() => [
                              (openBlock(true), createBlock(Fragment, null, renderList(unref(categories), (category) => {
                                return openBlock(), createBlock(_component_ElOption, {
                                  key: String(category.id),
                                  label: String(category.name),
                                  value: String(category.id)
                                }, null, 8, ["label", "value"]);
                              }), 128))
                            ]),
                            _: 1
                          }, 8, ["modelValue", "onUpdate:modelValue", "loading"])
                        ]),
                        _: 1
                      }),
                      createVNode(_component_ElFormItem, {
                        label: "Naziv",
                        prop: "name"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_ElInput, {
                            modelValue: unref(form).name,
                            "onUpdate:modelValue": ($event) => unref(form).name = $event,
                            placeholder: "Moj oglas za posao",
                            class: "input-width"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        _: 1
                      }),
                      createVNode(_component_ElFormItem, {
                        label: "Lokacija",
                        prop: "location"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_ElInput, {
                            modelValue: unref(form).location,
                            "onUpdate:modelValue": ($event) => unref(form).location = $event,
                            placeholder: "Stuttgart",
                            class: "input-width"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        _: 1
                      }),
                      createVNode(_component_ElFormItem, {
                        label: "Pla\u0107a",
                        prop: "salary"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_ElInputNumber, {
                            modelValue: unref(form).salary,
                            "onUpdate:modelValue": ($event) => unref(form).salary = $event,
                            precision: 2,
                            placeholder: "1999.99",
                            step: 50,
                            class: "input-width"
                          }, {
                            suffix: withCtx(() => [
                              createTextVNode("\u20AC")
                            ]),
                            _: 1
                          }, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        _: 1
                      }),
                      createVNode(_component_ElFormItem, {
                        label: "Kontakt email",
                        prop: "contactEmail"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_ElInput, {
                            modelValue: unref(form).contactEmail,
                            "onUpdate:modelValue": ($event) => unref(form).contactEmail = $event,
                            placeholder: "john.doe@mail.com",
                            class: "input-width"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        _: 1
                      }),
                      createVNode(_component_ElFormItem, {
                        label: "Kontakt telefon",
                        prop: "contactNumber"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_ElInput, {
                            modelValue: unref(form).contactNumber,
                            "onUpdate:modelValue": ($event) => unref(form).contactNumber = $event,
                            placeholder: "+3850123456789",
                            class: "input-width"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        _: 1
                      }),
                      createVNode("div", { style: { "height": "450px" } }, [
                        createVNode(_component_ElFormItem, {
                          label: "Opis",
                          prop: "text"
                        }, {
                          default: withCtx(() => [
                            createVNode(unref(script), {
                              modelValue: unref(form).description,
                              "onUpdate:modelValue": ($event) => unref(form).description = $event,
                              class: "editor"
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ]),
                          _: 1
                        })
                      ])
                    ]),
                    _: 1
                  }, 8, ["label-position", "model", "rules"])
                ]),
                _: 1
              })) : unref(dialog).type === "delete" ? (openBlock(), createBlock(_component_ElRow, {
                key: 1,
                justify: "center",
                class: "mb-24"
              }, {
                default: withCtx(() => [
                  createVNode(_component_ElCol, { align: "middle" }, {
                    default: withCtx(() => {
                      var _a;
                      return [
                        createTextVNode(" Jeste li sigurni da \u017Eelite obrisati "),
                        createVNode("b", null, toDisplayString((_a = unref(dialog).item) == null ? void 0 : _a.name), 1),
                        createTextVNode(" oglas za posao? ")
                      ];
                    }),
                    _: 1
                  }),
                  createVNode(_component_ElCol, {
                    align: "middle",
                    class: "mt-12"
                  }, {
                    default: withCtx(() => [
                      createTextVNode("Mogu\u0107e ju je vratiti kasnije. ")
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })) : unref(dialog).type === "unarchive" ? (openBlock(), createBlock(_component_ElRow, {
                key: 2,
                justify: "center",
                class: "mb-24"
              }, {
                default: withCtx(() => [
                  createVNode(_component_ElCol, { align: "middle" }, {
                    default: withCtx(() => {
                      var _a;
                      return [
                        createTextVNode(" Jeste li sigurni da \u017Eelite vratiti "),
                        createVNode("b", null, toDisplayString((_a = unref(dialog).item) == null ? void 0 : _a.name), 1),
                        createTextVNode(" oglas za posao? ")
                      ];
                    }),
                    _: 1
                  })
                ]),
                _: 1
              })) : createCommentVNode("", true),
              unref(isLoading).button ? (openBlock(), createBlock(_component_ElRow, {
                key: 3,
                justify: "center",
                class: "color-primary mb-12"
              }, {
                default: withCtx(() => [
                  createTextVNode(" Ne prekidajte u\u010Ditavanje podataka! ")
                ]),
                _: 1
              })) : createCommentVNode("", true),
              createVNode(_component_ElRow, {
                justify: "center",
                class: "mt-16"
              }, {
                default: withCtx(() => [
                  createVNode(_component_ElButton, {
                    type: unref(dialog).type === "delete" ? "danger" : "primary",
                    plain: "",
                    onClick: ($event) => handleSubmitButton(unref(ruleFormRef)),
                    loading: unref(isLoading).button
                  }, {
                    default: withCtx(() => [
                      unref(dialog).type === "create" ? (openBlock(), createBlock("span", { key: 0 }, "Dodaj")) : unref(dialog).type === "edit" ? (openBlock(), createBlock("span", { key: 1 }, "Uredi")) : unref(dialog).type === "unarchive" ? (openBlock(), createBlock("span", { key: 2 }, "Vrati")) : unref(dialog).type === "delete" ? (openBlock(), createBlock("span", { key: 3 }, "Obri\u0161i")) : createCommentVNode("", true)
                    ]),
                    _: 1
                  }, 8, ["type", "onClick", "loading"])
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/backoffice/tabs/BackofficeJobAdsTab.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
const BackofficeJobAdsTab = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["__scopeId", "data-v-91469128"]]);
const _sfc_main$9 = /* @__PURE__ */ defineComponent({
  __name: "BackofficeWebshopCategoriesTab",
  __ssrInlineRender: true,
  setup(__props) {
    const { $axios } = useNuxtApp();
    const isLoading = ref({
      activeCategories: true,
      deletedCategories: true,
      button: false
    });
    const activeCategories = ref();
    const deletedCategories = ref();
    const searchValues = ref({
      active: "",
      deleted: ""
    });
    const dialog = ref({
      isOpened: false,
      type: "create",
      item: void 0
    });
    const form = reactive({
      name: ""
    });
    const ruleFormRef = ref();
    const rules = reactive({
      name: [
        { required: true, message: "Unesite naziv kategorije", trigger: "blur" }
      ]
    });
    function getAllCategories() {
      getActiveProductCategories();
      getDeletedProductCategories();
    }
    function openDialog(type, item) {
      if (item) form.name = String(item.name);
      dialog.value = {
        isOpened: true,
        type,
        item
      };
    }
    function handleActiveSearch() {
      debounceActiveSearch();
    }
    const debounceActiveSearch = debounce(getActiveProductCategories, 300);
    async function getActiveProductCategories() {
      isLoading.value.activeCategories = true;
      try {
        const response = await $axios.get(
          `/product-category?search=${searchValues.value.active}`
        );
        activeCategories.value = response.data;
      } catch (error) {
        console.error("API Error:", error);
      } finally {
        isLoading.value.activeCategories = false;
      }
    }
    function handleDeletedSearch() {
      debounceDeletedSearch();
    }
    const debounceDeletedSearch = debounce(getDeletedProductCategories, 300);
    async function getDeletedProductCategories() {
      isLoading.value.deletedCategories = true;
      try {
        const response = await $axios.get(
          `/product-category?deletedOnly=true&search=${searchValues.value.deleted}`
        );
        deletedCategories.value = response.data;
      } catch (error) {
        console.error("API Error:", error);
      } finally {
        isLoading.value.deletedCategories = false;
      }
    }
    function showSuccessMessage(message) {
    }
    function handleSubmitButton(formEl) {
      if (dialog.value.type === "create") handleCreate(formEl);
      else if (dialog.value.type === "edit") handleEdit(formEl);
      else if (dialog.value.type === "delete") handleDelete();
      else if (dialog.value.type === "unarchive") handleUnarchive();
    }
    function handleCloseDialog() {
      form.name = "";
      dialog.value.isOpened = false;
    }
    async function handleCreate(formEl) {
      if (!formEl) return;
      await formEl.validate(async (valid) => {
        if (valid) {
          isLoading.value.button = true;
          try {
            await $axios.post("/product-category", form);
            getAllCategories();
            handleCloseDialog();
            showSuccessMessage("Uspje\u0161no ste dodali novu kategoriju.");
          } catch (error) {
            console.error("API Error:", error);
          } finally {
            isLoading.value.button = false;
          }
        }
      });
    }
    async function handleEdit(formEl) {
      if (!formEl) return;
      await formEl.validate(async (valid) => {
        var _a;
        if (valid) {
          isLoading.value.button = true;
          try {
            await $axios.put(`/product-category/${(_a = dialog.value.item) == null ? void 0 : _a.id}`, form);
            getAllCategories();
            handleCloseDialog();
            showSuccessMessage("Uspje\u0161no ste uredili kategoriju.");
          } catch (error) {
            console.error("API Error:", error);
          } finally {
            isLoading.value.button = false;
          }
        }
      });
    }
    async function handleDelete() {
      var _a;
      isLoading.value.button = true;
      try {
        await $axios.delete(`/product-category/${(_a = dialog.value.item) == null ? void 0 : _a.id}`);
        getAllCategories();
        handleCloseDialog();
        showSuccessMessage("Uspje\u0161no ste obrisali kategoriju.");
      } catch (error) {
        console.error("API Error:", error);
      } finally {
        isLoading.value.button = false;
      }
    }
    async function handleUnarchive() {
      var _a;
      isLoading.value.button = true;
      try {
        await $axios.patch(`/product-category/${(_a = dialog.value.item) == null ? void 0 : _a.id}/unarchive`);
        getAllCategories();
        handleCloseDialog();
        showSuccessMessage("Uspje\u0161no ste vratili obrisanu kategoriju.");
      } catch (error) {
        console.error("API Error:", error);
      } finally {
        isLoading.value.button = false;
      }
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ElRow = ElRow;
      const _component_ElCol = ElCol;
      const _component_ElButton = ElButton;
      const _component_ElIcon = ElIcon;
      const _component_ElInput = ElInput;
      const _component_ElTable = ElTable;
      const _component_ElTableColumn = ElTableColumn;
      const _component_ElDialog = ElDialog;
      const _component_ElForm = ElForm;
      const _component_ElFormItem = ElFormItem;
      const _directive_loading = vLoading;
      _push(`<!--[--><div class="backoffice-page">`);
      _push(ssrRenderComponent(_component_ElRow, {
        justify: "space-between",
        align: "middle",
        class: "w-100"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_ElCol, { span: 6 }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_ElCol, {
              span: 12,
              align: "center"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<h3 class="color-primary"${_scopeId2}>Posao kategorije</h3>`);
                } else {
                  return [
                    createVNode("h3", { class: "color-primary" }, "Posao kategorije")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_ElCol, {
              span: 6,
              align: "end"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_ElButton, {
                    type: "primary",
                    plain: "",
                    onClick: ($event) => openDialog("create")
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_ElIcon, { size: "24" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(unref(circle_plus_filled_default), null, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(unref(circle_plus_filled_default))
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(`<span class="ml-8"${_scopeId3}>Dodaj kategoriju</span>`);
                      } else {
                        return [
                          createVNode(_component_ElIcon, { size: "24" }, {
                            default: withCtx(() => [
                              createVNode(unref(circle_plus_filled_default))
                            ]),
                            _: 1
                          }),
                          createVNode("span", { class: "ml-8" }, "Dodaj kategoriju")
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
                      onClick: ($event) => openDialog("create")
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_ElIcon, { size: "24" }, {
                          default: withCtx(() => [
                            createVNode(unref(circle_plus_filled_default))
                          ]),
                          _: 1
                        }),
                        createVNode("span", { class: "ml-8" }, "Dodaj kategoriju")
                      ]),
                      _: 1
                    }, 8, ["onClick"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_ElCol, { span: 6 }),
              createVNode(_component_ElCol, {
                span: 12,
                align: "center"
              }, {
                default: withCtx(() => [
                  createVNode("h3", { class: "color-primary" }, "Posao kategorije")
                ]),
                _: 1
              }),
              createVNode(_component_ElCol, {
                span: 6,
                align: "end"
              }, {
                default: withCtx(() => [
                  createVNode(_component_ElButton, {
                    type: "primary",
                    plain: "",
                    onClick: ($event) => openDialog("create")
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_ElIcon, { size: "24" }, {
                        default: withCtx(() => [
                          createVNode(unref(circle_plus_filled_default))
                        ]),
                        _: 1
                      }),
                      createVNode("span", { class: "ml-8" }, "Dodaj kategoriju")
                    ]),
                    _: 1
                  }, 8, ["onClick"])
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
        align: "middle",
        class: "w-100"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_ElCol, {
              span: 8,
              offset: 8,
              align: "center"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span class="color-primary"${_scopeId2}><b${_scopeId2}>Aktivne kategorije</b></span>`);
                } else {
                  return [
                    createVNode("span", { class: "color-primary" }, [
                      createVNode("b", null, "Aktivne kategorije")
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_ElCol, {
              span: 8,
              align: "end"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_ElInput, {
                    modelValue: unref(searchValues).active,
                    "onUpdate:modelValue": ($event) => unref(searchValues).active = $event,
                    type: "text",
                    placeholder: "Pretra\u017Eite naziv...",
                    class: "max-w-250",
                    "prefix-icon": unref(search_default),
                    onInput: handleActiveSearch
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_ElInput, {
                      modelValue: unref(searchValues).active,
                      "onUpdate:modelValue": ($event) => unref(searchValues).active = $event,
                      type: "text",
                      placeholder: "Pretra\u017Eite naziv...",
                      class: "max-w-250",
                      "prefix-icon": unref(search_default),
                      onInput: handleActiveSearch
                    }, null, 8, ["modelValue", "onUpdate:modelValue", "prefix-icon"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_ElCol, {
                span: 8,
                offset: 8,
                align: "center"
              }, {
                default: withCtx(() => [
                  createVNode("span", { class: "color-primary" }, [
                    createVNode("b", null, "Aktivne kategorije")
                  ])
                ]),
                _: 1
              }),
              createVNode(_component_ElCol, {
                span: 8,
                align: "end"
              }, {
                default: withCtx(() => [
                  createVNode(_component_ElInput, {
                    modelValue: unref(searchValues).active,
                    "onUpdate:modelValue": ($event) => unref(searchValues).active = $event,
                    type: "text",
                    placeholder: "Pretra\u017Eite naziv...",
                    class: "max-w-250",
                    "prefix-icon": unref(search_default),
                    onInput: handleActiveSearch
                  }, null, 8, ["modelValue", "onUpdate:modelValue", "prefix-icon"])
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_ElTable, mergeProps({
        data: unref(activeCategories),
        stripe: "",
        "empty-text": "Nema dostupnih podataka"
      }, ssrGetDirectiveProps(_ctx, _directive_loading, unref(isLoading).activeCategories)), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_ElTableColumn, {
              label: "Naziv",
              prop: "name"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_ElTableColumn, {
              label: "Akcije",
              align: "center",
              width: "148"
            }, {
              default: withCtx((items, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_ElButton, {
                    type: "primary",
                    plain: "",
                    onClick: ($event) => openDialog("edit", items.row)
                  }, {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_ElIcon, { size: "24" }, {
                          default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(unref(edit_default), null, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(unref(edit_default))
                              ];
                            }
                          }),
                          _: 2
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_ElIcon, { size: "24" }, {
                            default: withCtx(() => [
                              createVNode(unref(edit_default))
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_ElButton, {
                    type: "danger",
                    plain: "",
                    onClick: ($event) => openDialog("delete", items.row)
                  }, {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_ElIcon, { size: "24" }, {
                          default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(unref(delete_filled_default), null, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(unref(delete_filled_default))
                              ];
                            }
                          }),
                          _: 2
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_ElIcon, { size: "24" }, {
                            default: withCtx(() => [
                              createVNode(unref(delete_filled_default))
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_ElButton, {
                      type: "primary",
                      plain: "",
                      onClick: ($event) => openDialog("edit", items.row)
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_ElIcon, { size: "24" }, {
                          default: withCtx(() => [
                            createVNode(unref(edit_default))
                          ]),
                          _: 1
                        })
                      ]),
                      _: 2
                    }, 1032, ["onClick"]),
                    createVNode(_component_ElButton, {
                      type: "danger",
                      plain: "",
                      onClick: ($event) => openDialog("delete", items.row)
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_ElIcon, { size: "24" }, {
                          default: withCtx(() => [
                            createVNode(unref(delete_filled_default))
                          ]),
                          _: 1
                        })
                      ]),
                      _: 2
                    }, 1032, ["onClick"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_ElTableColumn, {
                label: "Naziv",
                prop: "name"
              }),
              createVNode(_component_ElTableColumn, {
                label: "Akcije",
                align: "center",
                width: "148"
              }, {
                default: withCtx((items) => [
                  createVNode(_component_ElButton, {
                    type: "primary",
                    plain: "",
                    onClick: ($event) => openDialog("edit", items.row)
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_ElIcon, { size: "24" }, {
                        default: withCtx(() => [
                          createVNode(unref(edit_default))
                        ]),
                        _: 1
                      })
                    ]),
                    _: 2
                  }, 1032, ["onClick"]),
                  createVNode(_component_ElButton, {
                    type: "danger",
                    plain: "",
                    onClick: ($event) => openDialog("delete", items.row)
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_ElIcon, { size: "24" }, {
                        default: withCtx(() => [
                          createVNode(unref(delete_filled_default))
                        ]),
                        _: 1
                      })
                    ]),
                    _: 2
                  }, 1032, ["onClick"])
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
        align: "middle",
        class: "w-100"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_ElCol, {
              span: 8,
              offset: 8,
              align: "center"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span class="color-primary"${_scopeId2}><b${_scopeId2}>Obrisane kategorije</b></span>`);
                } else {
                  return [
                    createVNode("span", { class: "color-primary" }, [
                      createVNode("b", null, "Obrisane kategorije")
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_ElCol, {
              span: 8,
              align: "end"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_ElInput, {
                    modelValue: unref(searchValues).deleted,
                    "onUpdate:modelValue": ($event) => unref(searchValues).deleted = $event,
                    type: "text",
                    placeholder: "Pretra\u017Eite naziv...",
                    class: "max-w-250",
                    "prefix-icon": unref(search_default),
                    onInput: handleDeletedSearch
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_ElInput, {
                      modelValue: unref(searchValues).deleted,
                      "onUpdate:modelValue": ($event) => unref(searchValues).deleted = $event,
                      type: "text",
                      placeholder: "Pretra\u017Eite naziv...",
                      class: "max-w-250",
                      "prefix-icon": unref(search_default),
                      onInput: handleDeletedSearch
                    }, null, 8, ["modelValue", "onUpdate:modelValue", "prefix-icon"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_ElCol, {
                span: 8,
                offset: 8,
                align: "center"
              }, {
                default: withCtx(() => [
                  createVNode("span", { class: "color-primary" }, [
                    createVNode("b", null, "Obrisane kategorije")
                  ])
                ]),
                _: 1
              }),
              createVNode(_component_ElCol, {
                span: 8,
                align: "end"
              }, {
                default: withCtx(() => [
                  createVNode(_component_ElInput, {
                    modelValue: unref(searchValues).deleted,
                    "onUpdate:modelValue": ($event) => unref(searchValues).deleted = $event,
                    type: "text",
                    placeholder: "Pretra\u017Eite naziv...",
                    class: "max-w-250",
                    "prefix-icon": unref(search_default),
                    onInput: handleDeletedSearch
                  }, null, 8, ["modelValue", "onUpdate:modelValue", "prefix-icon"])
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_ElTable, mergeProps({
        data: unref(deletedCategories),
        stripe: "",
        "empty-text": "Nema dostupnih podataka"
      }, ssrGetDirectiveProps(_ctx, _directive_loading, unref(isLoading).deletedCategories)), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_ElTableColumn, {
              label: "Naziv",
              prop: "name"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_ElTableColumn, {
              label: "Akcije",
              align: "center",
              width: "80"
            }, {
              default: withCtx((items, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_ElButton, {
                    type: "primary",
                    plain: "",
                    onClick: ($event) => openDialog("unarchive", items.row)
                  }, {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_ElIcon, { size: "24" }, {
                          default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(unref(refresh_left_default), null, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(unref(refresh_left_default))
                              ];
                            }
                          }),
                          _: 2
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_ElIcon, { size: "24" }, {
                            default: withCtx(() => [
                              createVNode(unref(refresh_left_default))
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_ElButton, {
                      type: "primary",
                      plain: "",
                      onClick: ($event) => openDialog("unarchive", items.row)
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_ElIcon, { size: "24" }, {
                          default: withCtx(() => [
                            createVNode(unref(refresh_left_default))
                          ]),
                          _: 1
                        })
                      ]),
                      _: 2
                    }, 1032, ["onClick"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_ElTableColumn, {
                label: "Naziv",
                prop: "name"
              }),
              createVNode(_component_ElTableColumn, {
                label: "Akcije",
                align: "center",
                width: "80"
              }, {
                default: withCtx((items) => [
                  createVNode(_component_ElButton, {
                    type: "primary",
                    plain: "",
                    onClick: ($event) => openDialog("unarchive", items.row)
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_ElIcon, { size: "24" }, {
                        default: withCtx(() => [
                          createVNode(unref(refresh_left_default))
                        ]),
                        _: 1
                      })
                    ]),
                    _: 2
                  }, 1032, ["onClick"])
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(_component_ElDialog, {
        modelValue: unref(dialog).isOpened,
        "onUpdate:modelValue": ($event) => unref(dialog).isOpened = $event,
        "close-on-click-modal": false,
        "destroy-on-close": "",
        fullscreen: _ctx.$viewport.isLessOrEquals("tablet") ? true : false,
        onClose: handleCloseDialog
      }, {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_ElRow, { justify: "center" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<h3 class="color-primary"${_scopeId2}>`);
                  if (unref(dialog).type === "create") {
                    _push3(`<span${_scopeId2}>Dodaj novu kategoriju</span>`);
                  } else if (unref(dialog).type === "edit") {
                    _push3(`<span${_scopeId2}>Uredi kategoriju</span>`);
                  } else if (unref(dialog).type === "unarchive") {
                    _push3(`<span${_scopeId2}>Vrati kategoriju</span>`);
                  } else {
                    _push3(`<span${_scopeId2}>Obri\u0161i kategoriju</span>`);
                  }
                  _push3(`</h3>`);
                } else {
                  return [
                    createVNode("h3", { class: "color-primary" }, [
                      unref(dialog).type === "create" ? (openBlock(), createBlock("span", { key: 0 }, "Dodaj novu kategoriju")) : unref(dialog).type === "edit" ? (openBlock(), createBlock("span", { key: 1 }, "Uredi kategoriju")) : unref(dialog).type === "unarchive" ? (openBlock(), createBlock("span", { key: 2 }, "Vrati kategoriju")) : (openBlock(), createBlock("span", { key: 3 }, "Obri\u0161i kategoriju"))
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_ElRow, { justify: "center" }, {
                default: withCtx(() => [
                  createVNode("h3", { class: "color-primary" }, [
                    unref(dialog).type === "create" ? (openBlock(), createBlock("span", { key: 0 }, "Dodaj novu kategoriju")) : unref(dialog).type === "edit" ? (openBlock(), createBlock("span", { key: 1 }, "Uredi kategoriju")) : unref(dialog).type === "unarchive" ? (openBlock(), createBlock("span", { key: 2 }, "Vrati kategoriju")) : (openBlock(), createBlock("span", { key: 3 }, "Obri\u0161i kategoriju"))
                  ])
                ]),
                _: 1
              })
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (unref(dialog).type === "create" || unref(dialog).type === "edit") {
              _push2(ssrRenderComponent(_component_ElRow, { justify: "center" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_ElForm, {
                      "label-position": _ctx.$viewport.isLessThan("tablet") ? "top" : "left",
                      "require-asterisk-position": "right",
                      ref_key: "ruleFormRef",
                      ref: ruleFormRef,
                      class: "form",
                      model: unref(form),
                      rules: unref(rules),
                      "label-width": "auto",
                      "status-icon": ""
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_ElFormItem, {
                            label: "Naziv",
                            prop: "name"
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(_component_ElInput, {
                                  modelValue: unref(form).name,
                                  "onUpdate:modelValue": ($event) => unref(form).name = $event,
                                  placeholder: "Moja kategorija",
                                  class: "input-width"
                                }, null, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(_component_ElInput, {
                                    modelValue: unref(form).name,
                                    "onUpdate:modelValue": ($event) => unref(form).name = $event,
                                    placeholder: "Moja kategorija",
                                    class: "input-width"
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(_component_ElFormItem, {
                              label: "Naziv",
                              prop: "name"
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_ElInput, {
                                  modelValue: unref(form).name,
                                  "onUpdate:modelValue": ($event) => unref(form).name = $event,
                                  placeholder: "Moja kategorija",
                                  class: "input-width"
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ]),
                              _: 1
                            })
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
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
                        "status-icon": ""
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_ElFormItem, {
                            label: "Naziv",
                            prop: "name"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_ElInput, {
                                modelValue: unref(form).name,
                                "onUpdate:modelValue": ($event) => unref(form).name = $event,
                                placeholder: "Moja kategorija",
                                class: "input-width"
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
              }, _parent2, _scopeId));
            } else if (unref(dialog).type === "delete") {
              _push2(ssrRenderComponent(_component_ElRow, {
                justify: "center",
                class: "mb-24"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_ElCol, { align: "middle" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        var _a, _b;
                        if (_push4) {
                          _push4(` Jeste li sigurni da \u017Eelite obrisati <b${_scopeId3}>${ssrInterpolate((_a = unref(dialog).item) == null ? void 0 : _a.name)}</b> kategoriju? `);
                        } else {
                          return [
                            createTextVNode(" Jeste li sigurni da \u017Eelite obrisati "),
                            createVNode("b", null, toDisplayString((_b = unref(dialog).item) == null ? void 0 : _b.name), 1),
                            createTextVNode(" kategoriju? ")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(_component_ElCol, {
                      align: "middle",
                      class: "mt-12"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`Mogu\u0107e ju je vratiti kasnije. `);
                        } else {
                          return [
                            createTextVNode("Mogu\u0107e ju je vratiti kasnije. ")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_ElCol, { align: "middle" }, {
                        default: withCtx(() => {
                          var _a;
                          return [
                            createTextVNode(" Jeste li sigurni da \u017Eelite obrisati "),
                            createVNode("b", null, toDisplayString((_a = unref(dialog).item) == null ? void 0 : _a.name), 1),
                            createTextVNode(" kategoriju? ")
                          ];
                        }),
                        _: 1
                      }),
                      createVNode(_component_ElCol, {
                        align: "middle",
                        class: "mt-12"
                      }, {
                        default: withCtx(() => [
                          createTextVNode("Mogu\u0107e ju je vratiti kasnije. ")
                        ]),
                        _: 1
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else if (unref(dialog).type === "unarchive") {
              _push2(ssrRenderComponent(_component_ElRow, {
                justify: "center",
                class: "mb-24"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_ElCol, { align: "middle" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        var _a, _b;
                        if (_push4) {
                          _push4(` Jeste li sigurni da \u017Eelite vratiti <b${_scopeId3}>${ssrInterpolate((_a = unref(dialog).item) == null ? void 0 : _a.name)}</b> kategoriju? `);
                        } else {
                          return [
                            createTextVNode(" Jeste li sigurni da \u017Eelite vratiti "),
                            createVNode("b", null, toDisplayString((_b = unref(dialog).item) == null ? void 0 : _b.name), 1),
                            createTextVNode(" kategoriju? ")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_ElCol, { align: "middle" }, {
                        default: withCtx(() => {
                          var _a;
                          return [
                            createTextVNode(" Jeste li sigurni da \u017Eelite vratiti "),
                            createVNode("b", null, toDisplayString((_a = unref(dialog).item) == null ? void 0 : _a.name), 1),
                            createTextVNode(" kategoriju? ")
                          ];
                        }),
                        _: 1
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            _push2(ssrRenderComponent(_component_ElRow, { justify: "center" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_ElButton, {
                    type: unref(dialog).type === "delete" ? "danger" : "primary",
                    plain: "",
                    onClick: ($event) => handleSubmitButton(unref(ruleFormRef)),
                    loading: unref(isLoading).button
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        if (unref(dialog).type === "create") {
                          _push4(`<span${_scopeId3}>Dodaj</span>`);
                        } else if (unref(dialog).type === "edit") {
                          _push4(`<span${_scopeId3}>Uredi</span>`);
                        } else if (unref(dialog).type === "unarchive") {
                          _push4(`<span${_scopeId3}>Vrati</span>`);
                        } else if (unref(dialog).type === "delete") {
                          _push4(`<span${_scopeId3}>Obri\u0161i</span>`);
                        } else {
                          _push4(`<!---->`);
                        }
                      } else {
                        return [
                          unref(dialog).type === "create" ? (openBlock(), createBlock("span", { key: 0 }, "Dodaj")) : unref(dialog).type === "edit" ? (openBlock(), createBlock("span", { key: 1 }, "Uredi")) : unref(dialog).type === "unarchive" ? (openBlock(), createBlock("span", { key: 2 }, "Vrati")) : unref(dialog).type === "delete" ? (openBlock(), createBlock("span", { key: 3 }, "Obri\u0161i")) : createCommentVNode("", true)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_ElButton, {
                      type: unref(dialog).type === "delete" ? "danger" : "primary",
                      plain: "",
                      onClick: ($event) => handleSubmitButton(unref(ruleFormRef)),
                      loading: unref(isLoading).button
                    }, {
                      default: withCtx(() => [
                        unref(dialog).type === "create" ? (openBlock(), createBlock("span", { key: 0 }, "Dodaj")) : unref(dialog).type === "edit" ? (openBlock(), createBlock("span", { key: 1 }, "Uredi")) : unref(dialog).type === "unarchive" ? (openBlock(), createBlock("span", { key: 2 }, "Vrati")) : unref(dialog).type === "delete" ? (openBlock(), createBlock("span", { key: 3 }, "Obri\u0161i")) : createCommentVNode("", true)
                      ]),
                      _: 1
                    }, 8, ["type", "onClick", "loading"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              unref(dialog).type === "create" || unref(dialog).type === "edit" ? (openBlock(), createBlock(_component_ElRow, {
                key: 0,
                justify: "center"
              }, {
                default: withCtx(() => [
                  createVNode(_component_ElForm, {
                    "label-position": _ctx.$viewport.isLessThan("tablet") ? "top" : "left",
                    "require-asterisk-position": "right",
                    ref_key: "ruleFormRef",
                    ref: ruleFormRef,
                    class: "form",
                    model: unref(form),
                    rules: unref(rules),
                    "label-width": "auto",
                    "status-icon": ""
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_ElFormItem, {
                        label: "Naziv",
                        prop: "name"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_ElInput, {
                            modelValue: unref(form).name,
                            "onUpdate:modelValue": ($event) => unref(form).name = $event,
                            placeholder: "Moja kategorija",
                            class: "input-width"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }, 8, ["label-position", "model", "rules"])
                ]),
                _: 1
              })) : unref(dialog).type === "delete" ? (openBlock(), createBlock(_component_ElRow, {
                key: 1,
                justify: "center",
                class: "mb-24"
              }, {
                default: withCtx(() => [
                  createVNode(_component_ElCol, { align: "middle" }, {
                    default: withCtx(() => {
                      var _a;
                      return [
                        createTextVNode(" Jeste li sigurni da \u017Eelite obrisati "),
                        createVNode("b", null, toDisplayString((_a = unref(dialog).item) == null ? void 0 : _a.name), 1),
                        createTextVNode(" kategoriju? ")
                      ];
                    }),
                    _: 1
                  }),
                  createVNode(_component_ElCol, {
                    align: "middle",
                    class: "mt-12"
                  }, {
                    default: withCtx(() => [
                      createTextVNode("Mogu\u0107e ju je vratiti kasnije. ")
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })) : unref(dialog).type === "unarchive" ? (openBlock(), createBlock(_component_ElRow, {
                key: 2,
                justify: "center",
                class: "mb-24"
              }, {
                default: withCtx(() => [
                  createVNode(_component_ElCol, { align: "middle" }, {
                    default: withCtx(() => {
                      var _a;
                      return [
                        createTextVNode(" Jeste li sigurni da \u017Eelite vratiti "),
                        createVNode("b", null, toDisplayString((_a = unref(dialog).item) == null ? void 0 : _a.name), 1),
                        createTextVNode(" kategoriju? ")
                      ];
                    }),
                    _: 1
                  })
                ]),
                _: 1
              })) : createCommentVNode("", true),
              createVNode(_component_ElRow, { justify: "center" }, {
                default: withCtx(() => [
                  createVNode(_component_ElButton, {
                    type: unref(dialog).type === "delete" ? "danger" : "primary",
                    plain: "",
                    onClick: ($event) => handleSubmitButton(unref(ruleFormRef)),
                    loading: unref(isLoading).button
                  }, {
                    default: withCtx(() => [
                      unref(dialog).type === "create" ? (openBlock(), createBlock("span", { key: 0 }, "Dodaj")) : unref(dialog).type === "edit" ? (openBlock(), createBlock("span", { key: 1 }, "Uredi")) : unref(dialog).type === "unarchive" ? (openBlock(), createBlock("span", { key: 2 }, "Vrati")) : unref(dialog).type === "delete" ? (openBlock(), createBlock("span", { key: 3 }, "Obri\u0161i")) : createCommentVNode("", true)
                    ]),
                    _: 1
                  }, 8, ["type", "onClick", "loading"])
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/backoffice/tabs/BackofficeWebshopCategoriesTab.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const _sfc_main$8 = /* @__PURE__ */ defineComponent({
  __name: "BackofficeWebshopProductsTab",
  __ssrInlineRender: true,
  setup(__props) {
    const { $axios } = useNuxtApp();
    const config = useRuntimeConfig();
    const cloudinaryPreset = config.public.cloudinaryPreset;
    const cloudinaryCloudName = config.public.cloudinaryCloudName;
    const fileList = ref({
      images: [],
      videos: []
    });
    const isLoading = ref({
      activeProducts: true,
      deletedProducts: true,
      categories: true,
      button: false
    });
    const activeProducts = ref();
    const deletedProducts = ref();
    const categories = ref();
    const searchValues = ref({
      active: "",
      deleted: ""
    });
    const dialog = ref({
      isOpened: false,
      type: "create",
      item: void 0
    });
    const form = reactive({
      productCategoryId: "",
      name: "",
      description: "",
      images: [],
      videos: [],
      price: 0,
      contactEmail: "",
      contactNumber: "",
      locationCountry: "",
      locationPlace: ""
    });
    const ruleFormRef = ref();
    const rules = reactive({
      productCategoryId: [
        {
          required: true,
          message: "Odaberite kategoriju proizvoda",
          trigger: "blur"
        }
      ],
      name: [
        { required: true, message: "Unesite naziv proizvoda", trigger: "blur" }
      ],
      description: [
        { required: true, message: "Unesite opis proizvoda", trigger: "blur" }
      ],
      price: [
        { required: true, message: "Unesite cijenu proizvoda", trigger: "blur" }
      ],
      contactEmail: [
        { required: true, message: "Unesite email prodava\u010Da", trigger: "blur" },
        {
          validator: (_, value, callback) => {
            if (!validateEmail(value)) callback(new Error("Neto\u010Dna email adresa"));
            else callback();
          },
          trigger: "blur"
        }
      ],
      contactNumber: [
        {
          validator: (_, value, callback) => {
            if (value.length && !validateMobileNumber(value))
              callback(new Error("Neto\u010Dan broj telefona"));
            else callback();
          },
          trigger: "blur"
        }
      ],
      locationCountry: [
        {
          required: true,
          message: "Unesite naziv dr\u017Eave lokacije proizvoda",
          trigger: "blur"
        }
      ],
      locationPlace: [
        {
          required: true,
          message: "Unesite naziv mjesta lokacije proizvoda",
          trigger: "blur"
        }
      ]
    });
    const activeProductsPagination = ref({
      page: 1,
      perPage: 10,
      total: 0
    });
    const deletedProductspagination = ref({
      page: 1,
      perPage: 10,
      total: 0
    });
    const fullscreenImageUrl = ref("");
    const fullscreenImageDialog = ref(false);
    async function getCategories() {
      isLoading.value.categories = true;
      try {
        const response = await $axios.get(`/product-category`);
        categories.value = response.data;
      } catch (error) {
        console.error("API Error:", error);
      } finally {
        isLoading.value.categories = false;
      }
    }
    function getAllProducts() {
      getActiveProducts();
      getDeletedProducts();
    }
    function openDialog(type, item) {
      var _a2;
      var _a;
      if (item) {
        form.productCategoryId = String(item.productCategoryId);
        form.name = String(item.name);
        form.description = String(item.description);
        form.price = Number(item.price);
        form.contactEmail = String(item.contactEmail);
        form.contactNumber = item.contactNumber ? String(item.contactNumber) : "";
        form.locationCountry = String(item.locationCountry);
        form.locationPlace = String(item.locationPlace);
        form.images = item.images ? item.images : null;
        form.videos = item.videos ? item.videos : null;
        fileList.value.images = (_a2 = (_a = form.images) == null ? void 0 : _a.map((image) => ({
          url: image
        }))) != null ? _a2 : [];
      }
      dialog.value = {
        isOpened: true,
        type,
        item
      };
    }
    function handleActiveSearch() {
      activeProductsPagination.value.page = 1;
      debounceActiveSearch();
    }
    const debounceActiveSearch = debounce(getActiveProducts, 300);
    async function getActiveProducts() {
      isLoading.value.activeProducts = true;
      try {
        const response = await $axios.get(
          `/product?page=${activeProductsPagination.value.page}&perPage=${activeProductsPagination.value.perPage}&search=${searchValues.value.active}`
        );
        activeProducts.value = response.data.products;
        activeProductsPagination.value.total = response.data.total;
      } catch (error) {
        console.error("API Error:", error);
      } finally {
        isLoading.value.activeProducts = false;
      }
    }
    function handleDeletedSearch() {
      deletedProductspagination.value.page = 1;
      debounceDeletedSearch();
    }
    const debounceDeletedSearch = debounce(getDeletedProducts, 300);
    async function getDeletedProducts() {
      isLoading.value.deletedProducts = true;
      try {
        const response = await $axios.get(
          `/product?deletedOnly=true&page=${deletedProductspagination.value.page}&perPage=${deletedProductspagination.value.perPage}&search=${searchValues.value.deleted}`
        );
        deletedProducts.value = response.data.products;
        deletedProductspagination.value.total = response.data.total;
      } catch (error) {
        console.error("API Error:", error);
      } finally {
        isLoading.value.deletedProducts = false;
      }
    }
    function showSuccessMessage(message) {
    }
    function handleSubmitButton(formEl) {
      if (dialog.value.type === "create") handleCreate(formEl);
      else if (dialog.value.type === "edit") handleEdit(formEl);
      else if (dialog.value.type === "delete") handleDelete();
      else if (dialog.value.type === "unarchive") handleUnarchive();
    }
    function handleOpenDialog() {
      var _a;
      if (!((_a = categories.value) == null ? void 0 : _a.length) && (dialog.value.type === "create" || dialog.value.type === "edit"))
        getCategories();
    }
    function handleCloseDialog() {
      form.productCategoryId = "";
      form.name = "";
      form.description = "";
      form.price = 0;
      form.contactEmail = "";
      form.contactNumber = "";
      form.locationCountry = "";
      form.locationPlace = "";
      form.images = null;
      form.videos = null;
      fileList.value.images = [];
      fileList.value.videos = [];
      dialog.value.isOpened = false;
    }
    async function handleCreate(formEl) {
      if (!formEl) return;
      await formEl.validate(async (valid) => {
        if (valid) {
          isLoading.value.button = true;
          await uploadDataToCloudinary();
          try {
            await $axios.post("/product", form);
            getAllProducts();
            handleCloseDialog();
            showSuccessMessage("Uspje\u0161no ste dodali novi proizvod.");
          } catch (error) {
            console.error("API Error:", error);
          } finally {
            isLoading.value.button = false;
          }
        }
      });
    }
    async function handleEdit(formEl) {
      if (!formEl) return;
      await formEl.validate(async (valid) => {
        var _a;
        if (valid) {
          isLoading.value.button = true;
          await uploadDataToCloudinary();
          try {
            await $axios.put(`/product/${(_a = dialog.value.item) == null ? void 0 : _a.id}`, form);
            getAllProducts();
            handleCloseDialog();
            showSuccessMessage("Uspje\u0161no ste uredili proizvod.");
          } catch (error) {
            console.error("API Error:", error);
          } finally {
            isLoading.value.button = false;
          }
        }
      });
    }
    async function handleDelete() {
      var _a;
      isLoading.value.button = true;
      try {
        await $axios.delete(`/product/${(_a = dialog.value.item) == null ? void 0 : _a.id}`);
        getAllProducts();
        handleCloseDialog();
        showSuccessMessage("Uspje\u0161no ste obrisali proizvod.");
      } catch (error) {
        console.error("API Error:", error);
      } finally {
        isLoading.value.button = false;
      }
    }
    async function handleUnarchive() {
      var _a;
      isLoading.value.button = true;
      try {
        await $axios.patch(`/product/${(_a = dialog.value.item) == null ? void 0 : _a.id}/unarchive`);
        getAllProducts();
        handleCloseDialog();
        showSuccessMessage("Uspje\u0161no ste vratili obrisan proizvod.");
      } catch (error) {
        console.error("API Error:", error);
      } finally {
        isLoading.value.button = false;
      }
    }
    function handleSetImageToFirstPlace(file) {
      const index = fileList.value.images.findIndex((f) => f.uid === file.uid);
      if (index > -1) {
        const [selected] = fileList.value.images.splice(index, 1);
        fileList.value.images.unshift(selected);
      }
      form.images = fileList.value.images.map((f) => f.url);
    }
    function handleImagePreview(file) {
      fullscreenImageUrl.value = file.url;
      fullscreenImageDialog.value = true;
    }
    function handleImageRemove(file) {
      const index = fileList.value.images.findIndex((f) => f.uid === file.uid);
      if (index > -1) fileList.value.images.splice(index, 1);
      form.images = fileList.value.images.length ? fileList.value.images.map((f) => f.url) : null;
    }
    async function handleVideoChange(event) {
      const files = event.target.files;
      if (!files) return;
      fileList.value.videos = files ? files : null;
    }
    function handleVideoDownload(file) {
      (void 0).location.href = file;
    }
    function handleVideoRemove(file) {
      var _a2;
      var _a;
      form.videos = (_a2 = (_a = form.videos) == null ? void 0 : _a.filter((video) => video !== file)) != null ? _a2 : [];
    }
    async function uploadDataToCloudinary() {
      if (!form.images) form.images = [];
      if (!form.videos) form.videos = [];
      for (const image of fileList.value.images) {
        if (image.raw) {
          const url = await cloudinaryUpload(image.raw, "image");
          if (url) form.images.push(url);
        }
      }
      for (const video of fileList.value.videos) {
        const url = await cloudinaryUpload(video, "video");
        if (url) form.videos.push(url);
      }
    }
    async function cloudinaryUpload(file, resourceType) {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("upload_preset", cloudinaryPreset);
      formData.append("resource_type", resourceType);
      try {
        const response = await fetch(
          `https://api.cloudinary.com/v1_1/${cloudinaryCloudName}/${resourceType}/upload`,
          {
            method: "POST",
            body: formData
          }
        );
        const data2 = await response.json();
        return data2.secure_url;
      } catch (error) {
        console.error("Upload failed:", error);
        return null;
      }
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ElRow = ElRow;
      const _component_ElCol = ElCol;
      const _component_ElButton = ElButton;
      const _component_ElIcon = ElIcon;
      const _component_ElInput = ElInput;
      const _component_ElTable = ElTable;
      const _component_ElTableColumn = ElTableColumn;
      const _component_ElDialog = ElDialog;
      const _component_ElForm = ElForm;
      const _component_ElFormItem = ElFormItem;
      const _component_ElSelect = ElSelect;
      const _component_ElOption = ElOption;
      const _component_ElInputNumber = ElInputNumber;
      const _component_ElUpload = ElUpload;
      const _component_ElTooltip = ElTooltip;
      const _directive_loading = vLoading;
      _push(`<!--[--><div class="backoffice-page" data-v-3b94e150>`);
      _push(ssrRenderComponent(_component_ElRow, {
        justify: "space-between",
        align: "middle",
        class: "w-100"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_ElCol, { span: 6 }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_ElCol, {
              span: 12,
              align: "center"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<h3 class="color-primary" data-v-3b94e150${_scopeId2}>Webshop proizvodi</h3>`);
                } else {
                  return [
                    createVNode("h3", { class: "color-primary" }, "Webshop proizvodi")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_ElCol, {
              span: 6,
              align: "end"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_ElButton, {
                    type: "primary",
                    plain: "",
                    onClick: ($event) => openDialog("create")
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_ElIcon, { size: "24" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(unref(circle_plus_filled_default), null, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(unref(circle_plus_filled_default))
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(`<span class="ml-8" data-v-3b94e150${_scopeId3}>Dodaj proizvod</span>`);
                      } else {
                        return [
                          createVNode(_component_ElIcon, { size: "24" }, {
                            default: withCtx(() => [
                              createVNode(unref(circle_plus_filled_default))
                            ]),
                            _: 1
                          }),
                          createVNode("span", { class: "ml-8" }, "Dodaj proizvod")
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
                      onClick: ($event) => openDialog("create")
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_ElIcon, { size: "24" }, {
                          default: withCtx(() => [
                            createVNode(unref(circle_plus_filled_default))
                          ]),
                          _: 1
                        }),
                        createVNode("span", { class: "ml-8" }, "Dodaj proizvod")
                      ]),
                      _: 1
                    }, 8, ["onClick"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_ElCol, { span: 6 }),
              createVNode(_component_ElCol, {
                span: 12,
                align: "center"
              }, {
                default: withCtx(() => [
                  createVNode("h3", { class: "color-primary" }, "Webshop proizvodi")
                ]),
                _: 1
              }),
              createVNode(_component_ElCol, {
                span: 6,
                align: "end"
              }, {
                default: withCtx(() => [
                  createVNode(_component_ElButton, {
                    type: "primary",
                    plain: "",
                    onClick: ($event) => openDialog("create")
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_ElIcon, { size: "24" }, {
                        default: withCtx(() => [
                          createVNode(unref(circle_plus_filled_default))
                        ]),
                        _: 1
                      }),
                      createVNode("span", { class: "ml-8" }, "Dodaj proizvod")
                    ]),
                    _: 1
                  }, 8, ["onClick"])
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
        align: "middle",
        class: "w-100"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_ElCol, {
              span: 8,
              offset: 8,
              align: "center"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span class="color-primary" data-v-3b94e150${_scopeId2}><b data-v-3b94e150${_scopeId2}>Aktivni proizvodi</b></span>`);
                } else {
                  return [
                    createVNode("span", { class: "color-primary" }, [
                      createVNode("b", null, "Aktivni proizvodi")
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_ElCol, {
              span: 8,
              align: "end"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_ElInput, {
                    modelValue: unref(searchValues).active,
                    "onUpdate:modelValue": ($event) => unref(searchValues).active = $event,
                    type: "text",
                    placeholder: "Pretra\u017Eite naziv...",
                    class: "max-w-250",
                    "prefix-icon": unref(search_default),
                    onInput: handleActiveSearch
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_ElInput, {
                      modelValue: unref(searchValues).active,
                      "onUpdate:modelValue": ($event) => unref(searchValues).active = $event,
                      type: "text",
                      placeholder: "Pretra\u017Eite naziv...",
                      class: "max-w-250",
                      "prefix-icon": unref(search_default),
                      onInput: handleActiveSearch
                    }, null, 8, ["modelValue", "onUpdate:modelValue", "prefix-icon"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_ElCol, {
                span: 8,
                offset: 8,
                align: "center"
              }, {
                default: withCtx(() => [
                  createVNode("span", { class: "color-primary" }, [
                    createVNode("b", null, "Aktivni proizvodi")
                  ])
                ]),
                _: 1
              }),
              createVNode(_component_ElCol, {
                span: 8,
                align: "end"
              }, {
                default: withCtx(() => [
                  createVNode(_component_ElInput, {
                    modelValue: unref(searchValues).active,
                    "onUpdate:modelValue": ($event) => unref(searchValues).active = $event,
                    type: "text",
                    placeholder: "Pretra\u017Eite naziv...",
                    class: "max-w-250",
                    "prefix-icon": unref(search_default),
                    onInput: handleActiveSearch
                  }, null, 8, ["modelValue", "onUpdate:modelValue", "prefix-icon"])
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_ElTable, mergeProps({
        data: unref(activeProducts),
        stripe: "",
        "empty-text": "Nema dostupnih podataka"
      }, ssrGetDirectiveProps(_ctx, _directive_loading, unref(isLoading).activeProducts)), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_ElTableColumn, {
              label: "Naziv",
              prop: "name"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_ElTableColumn, {
              label: "Kategorija",
              prop: "productCategory.name"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_ElTableColumn, {
              label: "Prodano",
              prop: "sold"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_ElTableColumn, {
              label: "Akcije",
              align: "center",
              width: "148"
            }, {
              default: withCtx((items, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_ElButton, {
                    type: "primary",
                    plain: "",
                    onClick: ($event) => openDialog("edit", items.row)
                  }, {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_ElIcon, { size: "24" }, {
                          default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(unref(edit_default), null, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(unref(edit_default))
                              ];
                            }
                          }),
                          _: 2
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_ElIcon, { size: "24" }, {
                            default: withCtx(() => [
                              createVNode(unref(edit_default))
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_ElButton, {
                    type: "danger",
                    plain: "",
                    onClick: ($event) => openDialog("delete", items.row)
                  }, {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_ElIcon, { size: "24" }, {
                          default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(unref(delete_filled_default), null, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(unref(delete_filled_default))
                              ];
                            }
                          }),
                          _: 2
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_ElIcon, { size: "24" }, {
                            default: withCtx(() => [
                              createVNode(unref(delete_filled_default))
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_ElButton, {
                      type: "primary",
                      plain: "",
                      onClick: ($event) => openDialog("edit", items.row)
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_ElIcon, { size: "24" }, {
                          default: withCtx(() => [
                            createVNode(unref(edit_default))
                          ]),
                          _: 1
                        })
                      ]),
                      _: 2
                    }, 1032, ["onClick"]),
                    createVNode(_component_ElButton, {
                      type: "danger",
                      plain: "",
                      onClick: ($event) => openDialog("delete", items.row)
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_ElIcon, { size: "24" }, {
                          default: withCtx(() => [
                            createVNode(unref(delete_filled_default))
                          ]),
                          _: 1
                        })
                      ]),
                      _: 2
                    }, 1032, ["onClick"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_ElTableColumn, {
                label: "Naziv",
                prop: "name"
              }),
              createVNode(_component_ElTableColumn, {
                label: "Kategorija",
                prop: "productCategory.name"
              }),
              createVNode(_component_ElTableColumn, {
                label: "Prodano",
                prop: "sold"
              }),
              createVNode(_component_ElTableColumn, {
                label: "Akcije",
                align: "center",
                width: "148"
              }, {
                default: withCtx((items) => [
                  createVNode(_component_ElButton, {
                    type: "primary",
                    plain: "",
                    onClick: ($event) => openDialog("edit", items.row)
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_ElIcon, { size: "24" }, {
                        default: withCtx(() => [
                          createVNode(unref(edit_default))
                        ]),
                        _: 1
                      })
                    ]),
                    _: 2
                  }, 1032, ["onClick"]),
                  createVNode(_component_ElButton, {
                    type: "danger",
                    plain: "",
                    onClick: ($event) => openDialog("delete", items.row)
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_ElIcon, { size: "24" }, {
                        default: withCtx(() => [
                          createVNode(unref(delete_filled_default))
                        ]),
                        _: 1
                      })
                    ]),
                    _: 2
                  }, 1032, ["onClick"])
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      if (unref(activeProductsPagination).total > 10) {
        _push(ssrRenderComponent(Pagination, {
          modelValue: unref(activeProductsPagination),
          "onUpdate:modelValue": ($event) => isRef(activeProductsPagination) ? activeProductsPagination.value = $event : null,
          loading: unref(isLoading).deletedProducts,
          "scroll-element-id": "scroll-element",
          onPageChange: getActiveProducts,
          class: "mb-24"
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(ssrRenderComponent(_component_ElRow, {
        justify: "center",
        align: "middle",
        class: "w-100"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_ElCol, {
              span: 8,
              offset: 8,
              align: "center"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span class="color-primary" data-v-3b94e150${_scopeId2}><b data-v-3b94e150${_scopeId2}>Obrisani proizvodi</b></span>`);
                } else {
                  return [
                    createVNode("span", { class: "color-primary" }, [
                      createVNode("b", null, "Obrisani proizvodi")
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_ElCol, {
              span: 8,
              align: "end"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_ElInput, {
                    modelValue: unref(searchValues).deleted,
                    "onUpdate:modelValue": ($event) => unref(searchValues).deleted = $event,
                    type: "text",
                    placeholder: "Pretra\u017Eite naziv...",
                    class: "max-w-250",
                    "prefix-icon": unref(search_default),
                    onInput: handleDeletedSearch
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_ElInput, {
                      modelValue: unref(searchValues).deleted,
                      "onUpdate:modelValue": ($event) => unref(searchValues).deleted = $event,
                      type: "text",
                      placeholder: "Pretra\u017Eite naziv...",
                      class: "max-w-250",
                      "prefix-icon": unref(search_default),
                      onInput: handleDeletedSearch
                    }, null, 8, ["modelValue", "onUpdate:modelValue", "prefix-icon"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_ElCol, {
                span: 8,
                offset: 8,
                align: "center"
              }, {
                default: withCtx(() => [
                  createVNode("span", { class: "color-primary" }, [
                    createVNode("b", null, "Obrisani proizvodi")
                  ])
                ]),
                _: 1
              }),
              createVNode(_component_ElCol, {
                span: 8,
                align: "end"
              }, {
                default: withCtx(() => [
                  createVNode(_component_ElInput, {
                    modelValue: unref(searchValues).deleted,
                    "onUpdate:modelValue": ($event) => unref(searchValues).deleted = $event,
                    type: "text",
                    placeholder: "Pretra\u017Eite naziv...",
                    class: "max-w-250",
                    "prefix-icon": unref(search_default),
                    onInput: handleDeletedSearch
                  }, null, 8, ["modelValue", "onUpdate:modelValue", "prefix-icon"])
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_ElTable, mergeProps({
        data: unref(deletedProducts),
        stripe: "",
        "empty-text": "Nema dostupnih podataka"
      }, ssrGetDirectiveProps(_ctx, _directive_loading, unref(isLoading).deletedProducts)), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_ElTableColumn, {
              label: "Naziv",
              prop: "name"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_ElTableColumn, {
              label: "Kategorija",
              prop: "productCategory.name"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_ElTableColumn, {
              label: "Prodano",
              prop: "sold"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_ElTableColumn, {
              label: "Akcije",
              align: "center",
              width: "80"
            }, {
              default: withCtx((items, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_ElButton, {
                    type: "primary",
                    plain: "",
                    onClick: ($event) => openDialog("unarchive", items.row)
                  }, {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_ElIcon, { size: "24" }, {
                          default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(unref(refresh_left_default), null, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(unref(refresh_left_default))
                              ];
                            }
                          }),
                          _: 2
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_ElIcon, { size: "24" }, {
                            default: withCtx(() => [
                              createVNode(unref(refresh_left_default))
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_ElButton, {
                      type: "primary",
                      plain: "",
                      onClick: ($event) => openDialog("unarchive", items.row)
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_ElIcon, { size: "24" }, {
                          default: withCtx(() => [
                            createVNode(unref(refresh_left_default))
                          ]),
                          _: 1
                        })
                      ]),
                      _: 2
                    }, 1032, ["onClick"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_ElTableColumn, {
                label: "Naziv",
                prop: "name"
              }),
              createVNode(_component_ElTableColumn, {
                label: "Kategorija",
                prop: "productCategory.name"
              }),
              createVNode(_component_ElTableColumn, {
                label: "Prodano",
                prop: "sold"
              }),
              createVNode(_component_ElTableColumn, {
                label: "Akcije",
                align: "center",
                width: "80"
              }, {
                default: withCtx((items) => [
                  createVNode(_component_ElButton, {
                    type: "primary",
                    plain: "",
                    onClick: ($event) => openDialog("unarchive", items.row)
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_ElIcon, { size: "24" }, {
                        default: withCtx(() => [
                          createVNode(unref(refresh_left_default))
                        ]),
                        _: 1
                      })
                    ]),
                    _: 2
                  }, 1032, ["onClick"])
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      if (unref(deletedProductspagination).total > 10) {
        _push(ssrRenderComponent(Pagination, {
          modelValue: unref(deletedProductspagination),
          "onUpdate:modelValue": ($event) => isRef(deletedProductspagination) ? deletedProductspagination.value = $event : null,
          loading: unref(isLoading).deletedProducts,
          "scroll-element-id": "scroll-element",
          onPageChange: getDeletedProducts,
          class: "mb-24"
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
      _push(ssrRenderComponent(_component_ElDialog, {
        modelValue: unref(dialog).isOpened,
        "onUpdate:modelValue": ($event) => unref(dialog).isOpened = $event,
        "close-on-click-modal": false,
        "destroy-on-close": "",
        fullscreen: "",
        onOpen: handleOpenDialog,
        onClose: handleCloseDialog
      }, {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_ElRow, { justify: "center" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<h3 class="color-primary" data-v-3b94e150${_scopeId2}>`);
                  if (unref(dialog).type === "create") {
                    _push3(`<span data-v-3b94e150${_scopeId2}>Dodaj novi proizvod</span>`);
                  } else if (unref(dialog).type === "edit") {
                    _push3(`<span data-v-3b94e150${_scopeId2}>Uredi proizvod</span>`);
                  } else if (unref(dialog).type === "unarchive") {
                    _push3(`<span data-v-3b94e150${_scopeId2}>Vrati proizvod</span>`);
                  } else {
                    _push3(`<span data-v-3b94e150${_scopeId2}>Obri\u0161i proizvod</span>`);
                  }
                  _push3(`</h3>`);
                } else {
                  return [
                    createVNode("h3", { class: "color-primary" }, [
                      unref(dialog).type === "create" ? (openBlock(), createBlock("span", { key: 0 }, "Dodaj novi proizvod")) : unref(dialog).type === "edit" ? (openBlock(), createBlock("span", { key: 1 }, "Uredi proizvod")) : unref(dialog).type === "unarchive" ? (openBlock(), createBlock("span", { key: 2 }, "Vrati proizvod")) : (openBlock(), createBlock("span", { key: 3 }, "Obri\u0161i proizvod"))
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_ElRow, { justify: "center" }, {
                default: withCtx(() => [
                  createVNode("h3", { class: "color-primary" }, [
                    unref(dialog).type === "create" ? (openBlock(), createBlock("span", { key: 0 }, "Dodaj novi proizvod")) : unref(dialog).type === "edit" ? (openBlock(), createBlock("span", { key: 1 }, "Uredi proizvod")) : unref(dialog).type === "unarchive" ? (openBlock(), createBlock("span", { key: 2 }, "Vrati proizvod")) : (openBlock(), createBlock("span", { key: 3 }, "Obri\u0161i proizvod"))
                  ])
                ]),
                _: 1
              })
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (unref(dialog).type === "create" || unref(dialog).type === "edit") {
              _push2(ssrRenderComponent(_component_ElRow, { justify: "center" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_ElForm, {
                      "label-position": _ctx.$viewport.isLessThan("tablet") ? "top" : "left",
                      "require-asterisk-position": "right",
                      ref_key: "ruleFormRef",
                      ref: ruleFormRef,
                      class: "form",
                      model: unref(form),
                      rules: unref(rules),
                      "label-width": "auto",
                      "status-icon": ""
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        var _a, _b;
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_ElFormItem, {
                            label: "Kategorija",
                            prop: "text"
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(_component_ElSelect, {
                                  modelValue: unref(form).productCategoryId,
                                  "onUpdate:modelValue": ($event) => unref(form).productCategoryId = $event,
                                  loading: unref(isLoading).categories,
                                  placeholder: "Odaberite kategoriju",
                                  class: "input-width",
                                  clearable: ""
                                }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(`<!--[-->`);
                                      ssrRenderList(unref(categories), (category) => {
                                        _push6(ssrRenderComponent(_component_ElOption, {
                                          key: String(category.id),
                                          label: String(category.name),
                                          value: String(category.id)
                                        }, null, _parent6, _scopeId5));
                                      });
                                      _push6(`<!--]-->`);
                                    } else {
                                      return [
                                        (openBlock(true), createBlock(Fragment, null, renderList(unref(categories), (category) => {
                                          return openBlock(), createBlock(_component_ElOption, {
                                            key: String(category.id),
                                            label: String(category.name),
                                            value: String(category.id)
                                          }, null, 8, ["label", "value"]);
                                        }), 128))
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(_component_ElSelect, {
                                    modelValue: unref(form).productCategoryId,
                                    "onUpdate:modelValue": ($event) => unref(form).productCategoryId = $event,
                                    loading: unref(isLoading).categories,
                                    placeholder: "Odaberite kategoriju",
                                    class: "input-width",
                                    clearable: ""
                                  }, {
                                    default: withCtx(() => [
                                      (openBlock(true), createBlock(Fragment, null, renderList(unref(categories), (category) => {
                                        return openBlock(), createBlock(_component_ElOption, {
                                          key: String(category.id),
                                          label: String(category.name),
                                          value: String(category.id)
                                        }, null, 8, ["label", "value"]);
                                      }), 128))
                                    ]),
                                    _: 1
                                  }, 8, ["modelValue", "onUpdate:modelValue", "loading"])
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(_component_ElFormItem, {
                            label: "Naslov",
                            prop: "title"
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(_component_ElInput, {
                                  modelValue: unref(form).name,
                                  "onUpdate:modelValue": ($event) => unref(form).name = $event,
                                  placeholder: "Moj proizvod",
                                  class: "input-width"
                                }, null, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(_component_ElInput, {
                                    modelValue: unref(form).name,
                                    "onUpdate:modelValue": ($event) => unref(form).name = $event,
                                    placeholder: "Moj proizvod",
                                    class: "input-width"
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                          _push4(`<div style="${ssrRenderStyle({ "height": "450px" })}" data-v-3b94e150${_scopeId3}>`);
                          _push4(ssrRenderComponent(_component_ElFormItem, {
                            label: "Opis",
                            prop: "text"
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(unref(script), {
                                  modelValue: unref(form).description,
                                  "onUpdate:modelValue": ($event) => unref(form).description = $event,
                                  class: "editor"
                                }, null, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(unref(script), {
                                    modelValue: unref(form).description,
                                    "onUpdate:modelValue": ($event) => unref(form).description = $event,
                                    class: "editor"
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                          _push4(`</div>`);
                          _push4(ssrRenderComponent(_component_ElFormItem, {
                            label: "Cijena",
                            prop: "price",
                            class: "mt-20"
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(_component_ElInputNumber, {
                                  modelValue: unref(form).price,
                                  "onUpdate:modelValue": ($event) => unref(form).price = $event,
                                  precision: 2,
                                  placeholder: "1.99",
                                  step: 0.01,
                                  class: "input-width"
                                }, {
                                  suffix: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(`\u20AC`);
                                    } else {
                                      return [
                                        createTextVNode("\u20AC")
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(_component_ElInputNumber, {
                                    modelValue: unref(form).price,
                                    "onUpdate:modelValue": ($event) => unref(form).price = $event,
                                    precision: 2,
                                    placeholder: "1.99",
                                    step: 0.01,
                                    class: "input-width"
                                  }, {
                                    suffix: withCtx(() => [
                                      createTextVNode("\u20AC")
                                    ]),
                                    _: 1
                                  }, 8, ["modelValue", "onUpdate:modelValue"])
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(_component_ElFormItem, {
                            label: "Email prodava\u010Da",
                            prop: "contactEmail",
                            class: "mt-20"
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(_component_ElInput, {
                                  modelValue: unref(form).contactEmail,
                                  "onUpdate:modelValue": ($event) => unref(form).contactEmail = $event,
                                  placeholder: "john.doe@mail.com",
                                  class: "input-width"
                                }, null, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(_component_ElInput, {
                                    modelValue: unref(form).contactEmail,
                                    "onUpdate:modelValue": ($event) => unref(form).contactEmail = $event,
                                    placeholder: "john.doe@mail.com",
                                    class: "input-width"
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(_component_ElFormItem, {
                            label: "Telefon prodava\u010Da",
                            prop: "contactNumber",
                            class: "mt-20"
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(_component_ElInput, {
                                  modelValue: unref(form).contactNumber,
                                  "onUpdate:modelValue": ($event) => unref(form).contactNumber = $event,
                                  placeholder: "+3850123456789",
                                  class: "input-width"
                                }, null, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(_component_ElInput, {
                                    modelValue: unref(form).contactNumber,
                                    "onUpdate:modelValue": ($event) => unref(form).contactNumber = $event,
                                    placeholder: "+3850123456789",
                                    class: "input-width"
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(_component_ElFormItem, {
                            label: "Dr\u017Eava proizvoda",
                            prop: "locationCountry",
                            class: "mt-20"
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(_component_ElInput, {
                                  modelValue: unref(form).locationCountry,
                                  "onUpdate:modelValue": ($event) => unref(form).locationCountry = $event,
                                  placeholder: "Hrvatska",
                                  class: "input-width"
                                }, null, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(_component_ElInput, {
                                    modelValue: unref(form).locationCountry,
                                    "onUpdate:modelValue": ($event) => unref(form).locationCountry = $event,
                                    placeholder: "Hrvatska",
                                    class: "input-width"
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(_component_ElFormItem, {
                            label: "Mjesto proizvoda",
                            prop: "locationPlace",
                            class: "mt-20"
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(_component_ElInput, {
                                  modelValue: unref(form).locationPlace,
                                  "onUpdate:modelValue": ($event) => unref(form).locationPlace = $event,
                                  placeholder: "Zagreb",
                                  class: "input-width"
                                }, null, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(_component_ElInput, {
                                    modelValue: unref(form).locationPlace,
                                    "onUpdate:modelValue": ($event) => unref(form).locationPlace = $event,
                                    placeholder: "Zagreb",
                                    class: "input-width"
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(_component_ElFormItem, {
                            label: "Slike",
                            prop: "images"
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(_component_ElUpload, {
                                  "file-list": unref(fileList).images,
                                  "onUpdate:fileList": ($event) => unref(fileList).images = $event,
                                  action: "#",
                                  "list-type": "picture-card",
                                  "auto-upload": false,
                                  multiple: "",
                                  accept: "image/*"
                                }, {
                                  file: withCtx(({ file }, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(`<div data-v-3b94e150${_scopeId5}><img class="el-upload-list__item-thumbnail"${ssrRenderAttr("src", file.url)} alt="" data-v-3b94e150${_scopeId5}><span class="el-upload-list__item-actions" data-v-3b94e150${_scopeId5}>`);
                                      _push6(ssrRenderComponent(_component_ElTooltip, {
                                        effect: "dark",
                                        content: "Postavi na prvu poziciju",
                                        placement: "top",
                                        "show-after": 500
                                      }, {
                                        default: withCtx((_5, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            if (unref(fileList).images[0].url !== file.url) {
                                              _push7(`<span data-v-3b94e150${_scopeId6}>`);
                                              _push7(ssrRenderComponent(_component_ElIcon, null, {
                                                default: withCtx((_6, _push8, _parent8, _scopeId7) => {
                                                  if (_push8) {
                                                    _push8(ssrRenderComponent(unref(gold_medal_default), null, null, _parent8, _scopeId7));
                                                  } else {
                                                    return [
                                                      createVNode(unref(gold_medal_default))
                                                    ];
                                                  }
                                                }),
                                                _: 2
                                              }, _parent7, _scopeId6));
                                              _push7(`</span>`);
                                            } else {
                                              _push7(`<!---->`);
                                            }
                                          } else {
                                            return [
                                              unref(fileList).images[0].url !== file.url ? (openBlock(), createBlock("span", {
                                                key: 0,
                                                onClick: ($event) => handleSetImageToFirstPlace(file)
                                              }, [
                                                createVNode(_component_ElIcon, null, {
                                                  default: withCtx(() => [
                                                    createVNode(unref(gold_medal_default))
                                                  ]),
                                                  _: 1
                                                })
                                              ], 8, ["onClick"])) : createCommentVNode("", true)
                                            ];
                                          }
                                        }),
                                        _: 2
                                      }, _parent6, _scopeId5));
                                      _push6(`<span data-v-3b94e150${_scopeId5}>`);
                                      _push6(ssrRenderComponent(_component_ElIcon, null, {
                                        default: withCtx((_5, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(ssrRenderComponent(unref(zoom_in_default), null, null, _parent7, _scopeId6));
                                          } else {
                                            return [
                                              createVNode(unref(zoom_in_default))
                                            ];
                                          }
                                        }),
                                        _: 2
                                      }, _parent6, _scopeId5));
                                      _push6(`</span><span data-v-3b94e150${_scopeId5}>`);
                                      _push6(ssrRenderComponent(_component_ElIcon, null, {
                                        default: withCtx((_5, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(ssrRenderComponent(unref(delete_default), null, null, _parent7, _scopeId6));
                                          } else {
                                            return [
                                              createVNode(unref(delete_default))
                                            ];
                                          }
                                        }),
                                        _: 2
                                      }, _parent6, _scopeId5));
                                      _push6(`</span></span></div>`);
                                    } else {
                                      return [
                                        createVNode("div", null, [
                                          createVNode("img", {
                                            class: "el-upload-list__item-thumbnail",
                                            src: file.url,
                                            alt: ""
                                          }, null, 8, ["src"]),
                                          createVNode("span", { class: "el-upload-list__item-actions" }, [
                                            createVNode(_component_ElTooltip, {
                                              effect: "dark",
                                              content: "Postavi na prvu poziciju",
                                              placement: "top",
                                              "show-after": 500
                                            }, {
                                              default: withCtx(() => [
                                                unref(fileList).images[0].url !== file.url ? (openBlock(), createBlock("span", {
                                                  key: 0,
                                                  onClick: ($event) => handleSetImageToFirstPlace(file)
                                                }, [
                                                  createVNode(_component_ElIcon, null, {
                                                    default: withCtx(() => [
                                                      createVNode(unref(gold_medal_default))
                                                    ]),
                                                    _: 1
                                                  })
                                                ], 8, ["onClick"])) : createCommentVNode("", true)
                                              ]),
                                              _: 2
                                            }, 1024),
                                            createVNode("span", {
                                              onClick: ($event) => handleImagePreview(file)
                                            }, [
                                              createVNode(_component_ElIcon, null, {
                                                default: withCtx(() => [
                                                  createVNode(unref(zoom_in_default))
                                                ]),
                                                _: 1
                                              })
                                            ], 8, ["onClick"]),
                                            createVNode("span", {
                                              onClick: ($event) => handleImageRemove(file)
                                            }, [
                                              createVNode(_component_ElIcon, null, {
                                                default: withCtx(() => [
                                                  createVNode(unref(delete_default))
                                                ]),
                                                _: 1
                                              })
                                            ], 8, ["onClick"])
                                          ])
                                        ])
                                      ];
                                    }
                                  }),
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(ssrRenderComponent(_component_ElIcon, null, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(ssrRenderComponent(unref(plus_default), null, null, _parent7, _scopeId6));
                                          } else {
                                            return [
                                              createVNode(unref(plus_default))
                                            ];
                                          }
                                        }),
                                        _: 1
                                      }, _parent6, _scopeId5));
                                    } else {
                                      return [
                                        createVNode(_component_ElIcon, null, {
                                          default: withCtx(() => [
                                            createVNode(unref(plus_default))
                                          ]),
                                          _: 1
                                        })
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(_component_ElUpload, {
                                    "file-list": unref(fileList).images,
                                    "onUpdate:fileList": ($event) => unref(fileList).images = $event,
                                    action: "#",
                                    "list-type": "picture-card",
                                    "auto-upload": false,
                                    multiple: "",
                                    accept: "image/*"
                                  }, {
                                    file: withCtx(({ file }) => [
                                      createVNode("div", null, [
                                        createVNode("img", {
                                          class: "el-upload-list__item-thumbnail",
                                          src: file.url,
                                          alt: ""
                                        }, null, 8, ["src"]),
                                        createVNode("span", { class: "el-upload-list__item-actions" }, [
                                          createVNode(_component_ElTooltip, {
                                            effect: "dark",
                                            content: "Postavi na prvu poziciju",
                                            placement: "top",
                                            "show-after": 500
                                          }, {
                                            default: withCtx(() => [
                                              unref(fileList).images[0].url !== file.url ? (openBlock(), createBlock("span", {
                                                key: 0,
                                                onClick: ($event) => handleSetImageToFirstPlace(file)
                                              }, [
                                                createVNode(_component_ElIcon, null, {
                                                  default: withCtx(() => [
                                                    createVNode(unref(gold_medal_default))
                                                  ]),
                                                  _: 1
                                                })
                                              ], 8, ["onClick"])) : createCommentVNode("", true)
                                            ]),
                                            _: 2
                                          }, 1024),
                                          createVNode("span", {
                                            onClick: ($event) => handleImagePreview(file)
                                          }, [
                                            createVNode(_component_ElIcon, null, {
                                              default: withCtx(() => [
                                                createVNode(unref(zoom_in_default))
                                              ]),
                                              _: 1
                                            })
                                          ], 8, ["onClick"]),
                                          createVNode("span", {
                                            onClick: ($event) => handleImageRemove(file)
                                          }, [
                                            createVNode(_component_ElIcon, null, {
                                              default: withCtx(() => [
                                                createVNode(unref(delete_default))
                                              ]),
                                              _: 1
                                            })
                                          ], 8, ["onClick"])
                                        ])
                                      ])
                                    ]),
                                    default: withCtx(() => [
                                      createVNode(_component_ElIcon, null, {
                                        default: withCtx(() => [
                                          createVNode(unref(plus_default))
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  }, 8, ["file-list", "onUpdate:fileList"])
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                          if ((_a = unref(form).videos) == null ? void 0 : _a.length) {
                            _push4(ssrRenderComponent(_component_ElFormItem, { label: "Dodani video" }, {
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(`<!--[-->`);
                                  ssrRenderList(unref(form).videos, (video) => {
                                    _push5(ssrRenderComponent(_component_ElRow, {
                                      justify: "center",
                                      align: "middle"
                                    }, {
                                      default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                        if (_push6) {
                                          _push6(` * ${ssrInterpolate(video)} `);
                                          _push6(ssrRenderComponent(_component_ElIcon, {
                                            size: 18,
                                            onClick: ($event) => handleVideoDownload(video),
                                            class: "ml-8 video-download-icon"
                                          }, {
                                            default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                              if (_push7) {
                                                _push7(ssrRenderComponent(unref(download_default), null, null, _parent7, _scopeId6));
                                              } else {
                                                return [
                                                  createVNode(unref(download_default))
                                                ];
                                              }
                                            }),
                                            _: 2
                                          }, _parent6, _scopeId5));
                                          _push6(ssrRenderComponent(_component_ElIcon, {
                                            size: 18,
                                            onClick: ($event) => handleVideoRemove(video),
                                            class: "ml-8 video-remove-icon"
                                          }, {
                                            default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                              if (_push7) {
                                                _push7(ssrRenderComponent(unref(delete_default), null, null, _parent7, _scopeId6));
                                              } else {
                                                return [
                                                  createVNode(unref(delete_default))
                                                ];
                                              }
                                            }),
                                            _: 2
                                          }, _parent6, _scopeId5));
                                        } else {
                                          return [
                                            createTextVNode(" * " + toDisplayString(video) + " ", 1),
                                            createVNode(_component_ElIcon, {
                                              size: 18,
                                              onClick: ($event) => handleVideoDownload(video),
                                              class: "ml-8 video-download-icon"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(unref(download_default))
                                              ]),
                                              _: 2
                                            }, 1032, ["onClick"]),
                                            createVNode(_component_ElIcon, {
                                              size: 18,
                                              onClick: ($event) => handleVideoRemove(video),
                                              class: "ml-8 video-remove-icon"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(unref(delete_default))
                                              ]),
                                              _: 2
                                            }, 1032, ["onClick"])
                                          ];
                                        }
                                      }),
                                      _: 2
                                    }, _parent5, _scopeId4));
                                  });
                                  _push5(`<!--]-->`);
                                } else {
                                  return [
                                    (openBlock(true), createBlock(Fragment, null, renderList(unref(form).videos, (video) => {
                                      return openBlock(), createBlock(_component_ElRow, {
                                        justify: "center",
                                        align: "middle"
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(" * " + toDisplayString(video) + " ", 1),
                                          createVNode(_component_ElIcon, {
                                            size: 18,
                                            onClick: ($event) => handleVideoDownload(video),
                                            class: "ml-8 video-download-icon"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(unref(download_default))
                                            ]),
                                            _: 2
                                          }, 1032, ["onClick"]),
                                          createVNode(_component_ElIcon, {
                                            size: 18,
                                            onClick: ($event) => handleVideoRemove(video),
                                            class: "ml-8 video-remove-icon"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(unref(delete_default))
                                            ]),
                                            _: 2
                                          }, 1032, ["onClick"])
                                        ]),
                                        _: 2
                                      }, 1024);
                                    }), 256))
                                  ];
                                }
                              }),
                              _: 1
                            }, _parent4, _scopeId3));
                          } else {
                            _push4(`<!---->`);
                          }
                          _push4(ssrRenderComponent(_component_ElFormItem, {
                            label: "Video",
                            prop: "videos"
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`<input type="file" multiple accept="video/*" data-v-3b94e150${_scopeId4}>`);
                              } else {
                                return [
                                  createVNode("input", {
                                    type: "file",
                                    multiple: "",
                                    accept: "video/*",
                                    onChange: handleVideoChange
                                  }, null, 32)
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(_component_ElFormItem, {
                              label: "Kategorija",
                              prop: "text"
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_ElSelect, {
                                  modelValue: unref(form).productCategoryId,
                                  "onUpdate:modelValue": ($event) => unref(form).productCategoryId = $event,
                                  loading: unref(isLoading).categories,
                                  placeholder: "Odaberite kategoriju",
                                  class: "input-width",
                                  clearable: ""
                                }, {
                                  default: withCtx(() => [
                                    (openBlock(true), createBlock(Fragment, null, renderList(unref(categories), (category) => {
                                      return openBlock(), createBlock(_component_ElOption, {
                                        key: String(category.id),
                                        label: String(category.name),
                                        value: String(category.id)
                                      }, null, 8, ["label", "value"]);
                                    }), 128))
                                  ]),
                                  _: 1
                                }, 8, ["modelValue", "onUpdate:modelValue", "loading"])
                              ]),
                              _: 1
                            }),
                            createVNode(_component_ElFormItem, {
                              label: "Naslov",
                              prop: "title"
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_ElInput, {
                                  modelValue: unref(form).name,
                                  "onUpdate:modelValue": ($event) => unref(form).name = $event,
                                  placeholder: "Moj proizvod",
                                  class: "input-width"
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ]),
                              _: 1
                            }),
                            createVNode("div", { style: { "height": "450px" } }, [
                              createVNode(_component_ElFormItem, {
                                label: "Opis",
                                prop: "text"
                              }, {
                                default: withCtx(() => [
                                  createVNode(unref(script), {
                                    modelValue: unref(form).description,
                                    "onUpdate:modelValue": ($event) => unref(form).description = $event,
                                    class: "editor"
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                ]),
                                _: 1
                              })
                            ]),
                            createVNode(_component_ElFormItem, {
                              label: "Cijena",
                              prop: "price",
                              class: "mt-20"
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_ElInputNumber, {
                                  modelValue: unref(form).price,
                                  "onUpdate:modelValue": ($event) => unref(form).price = $event,
                                  precision: 2,
                                  placeholder: "1.99",
                                  step: 0.01,
                                  class: "input-width"
                                }, {
                                  suffix: withCtx(() => [
                                    createTextVNode("\u20AC")
                                  ]),
                                  _: 1
                                }, 8, ["modelValue", "onUpdate:modelValue"])
                              ]),
                              _: 1
                            }),
                            createVNode(_component_ElFormItem, {
                              label: "Email prodava\u010Da",
                              prop: "contactEmail",
                              class: "mt-20"
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_ElInput, {
                                  modelValue: unref(form).contactEmail,
                                  "onUpdate:modelValue": ($event) => unref(form).contactEmail = $event,
                                  placeholder: "john.doe@mail.com",
                                  class: "input-width"
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ]),
                              _: 1
                            }),
                            createVNode(_component_ElFormItem, {
                              label: "Telefon prodava\u010Da",
                              prop: "contactNumber",
                              class: "mt-20"
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_ElInput, {
                                  modelValue: unref(form).contactNumber,
                                  "onUpdate:modelValue": ($event) => unref(form).contactNumber = $event,
                                  placeholder: "+3850123456789",
                                  class: "input-width"
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ]),
                              _: 1
                            }),
                            createVNode(_component_ElFormItem, {
                              label: "Dr\u017Eava proizvoda",
                              prop: "locationCountry",
                              class: "mt-20"
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_ElInput, {
                                  modelValue: unref(form).locationCountry,
                                  "onUpdate:modelValue": ($event) => unref(form).locationCountry = $event,
                                  placeholder: "Hrvatska",
                                  class: "input-width"
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ]),
                              _: 1
                            }),
                            createVNode(_component_ElFormItem, {
                              label: "Mjesto proizvoda",
                              prop: "locationPlace",
                              class: "mt-20"
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_ElInput, {
                                  modelValue: unref(form).locationPlace,
                                  "onUpdate:modelValue": ($event) => unref(form).locationPlace = $event,
                                  placeholder: "Zagreb",
                                  class: "input-width"
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ]),
                              _: 1
                            }),
                            createVNode(_component_ElFormItem, {
                              label: "Slike",
                              prop: "images"
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_ElUpload, {
                                  "file-list": unref(fileList).images,
                                  "onUpdate:fileList": ($event) => unref(fileList).images = $event,
                                  action: "#",
                                  "list-type": "picture-card",
                                  "auto-upload": false,
                                  multiple: "",
                                  accept: "image/*"
                                }, {
                                  file: withCtx(({ file }) => [
                                    createVNode("div", null, [
                                      createVNode("img", {
                                        class: "el-upload-list__item-thumbnail",
                                        src: file.url,
                                        alt: ""
                                      }, null, 8, ["src"]),
                                      createVNode("span", { class: "el-upload-list__item-actions" }, [
                                        createVNode(_component_ElTooltip, {
                                          effect: "dark",
                                          content: "Postavi na prvu poziciju",
                                          placement: "top",
                                          "show-after": 500
                                        }, {
                                          default: withCtx(() => [
                                            unref(fileList).images[0].url !== file.url ? (openBlock(), createBlock("span", {
                                              key: 0,
                                              onClick: ($event) => handleSetImageToFirstPlace(file)
                                            }, [
                                              createVNode(_component_ElIcon, null, {
                                                default: withCtx(() => [
                                                  createVNode(unref(gold_medal_default))
                                                ]),
                                                _: 1
                                              })
                                            ], 8, ["onClick"])) : createCommentVNode("", true)
                                          ]),
                                          _: 2
                                        }, 1024),
                                        createVNode("span", {
                                          onClick: ($event) => handleImagePreview(file)
                                        }, [
                                          createVNode(_component_ElIcon, null, {
                                            default: withCtx(() => [
                                              createVNode(unref(zoom_in_default))
                                            ]),
                                            _: 1
                                          })
                                        ], 8, ["onClick"]),
                                        createVNode("span", {
                                          onClick: ($event) => handleImageRemove(file)
                                        }, [
                                          createVNode(_component_ElIcon, null, {
                                            default: withCtx(() => [
                                              createVNode(unref(delete_default))
                                            ]),
                                            _: 1
                                          })
                                        ], 8, ["onClick"])
                                      ])
                                    ])
                                  ]),
                                  default: withCtx(() => [
                                    createVNode(_component_ElIcon, null, {
                                      default: withCtx(() => [
                                        createVNode(unref(plus_default))
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }, 8, ["file-list", "onUpdate:fileList"])
                              ]),
                              _: 1
                            }),
                            ((_b = unref(form).videos) == null ? void 0 : _b.length) ? (openBlock(), createBlock(_component_ElFormItem, {
                              key: 0,
                              label: "Dodani video"
                            }, {
                              default: withCtx(() => [
                                (openBlock(true), createBlock(Fragment, null, renderList(unref(form).videos, (video) => {
                                  return openBlock(), createBlock(_component_ElRow, {
                                    justify: "center",
                                    align: "middle"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(" * " + toDisplayString(video) + " ", 1),
                                      createVNode(_component_ElIcon, {
                                        size: 18,
                                        onClick: ($event) => handleVideoDownload(video),
                                        class: "ml-8 video-download-icon"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(unref(download_default))
                                        ]),
                                        _: 2
                                      }, 1032, ["onClick"]),
                                      createVNode(_component_ElIcon, {
                                        size: 18,
                                        onClick: ($event) => handleVideoRemove(video),
                                        class: "ml-8 video-remove-icon"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(unref(delete_default))
                                        ]),
                                        _: 2
                                      }, 1032, ["onClick"])
                                    ]),
                                    _: 2
                                  }, 1024);
                                }), 256))
                              ]),
                              _: 1
                            })) : createCommentVNode("", true),
                            createVNode(_component_ElFormItem, {
                              label: "Video",
                              prop: "videos"
                            }, {
                              default: withCtx(() => [
                                createVNode("input", {
                                  type: "file",
                                  multiple: "",
                                  accept: "video/*",
                                  onChange: handleVideoChange
                                }, null, 32)
                              ]),
                              _: 1
                            })
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
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
                        "status-icon": ""
                      }, {
                        default: withCtx(() => {
                          var _a;
                          return [
                            createVNode(_component_ElFormItem, {
                              label: "Kategorija",
                              prop: "text"
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_ElSelect, {
                                  modelValue: unref(form).productCategoryId,
                                  "onUpdate:modelValue": ($event) => unref(form).productCategoryId = $event,
                                  loading: unref(isLoading).categories,
                                  placeholder: "Odaberite kategoriju",
                                  class: "input-width",
                                  clearable: ""
                                }, {
                                  default: withCtx(() => [
                                    (openBlock(true), createBlock(Fragment, null, renderList(unref(categories), (category) => {
                                      return openBlock(), createBlock(_component_ElOption, {
                                        key: String(category.id),
                                        label: String(category.name),
                                        value: String(category.id)
                                      }, null, 8, ["label", "value"]);
                                    }), 128))
                                  ]),
                                  _: 1
                                }, 8, ["modelValue", "onUpdate:modelValue", "loading"])
                              ]),
                              _: 1
                            }),
                            createVNode(_component_ElFormItem, {
                              label: "Naslov",
                              prop: "title"
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_ElInput, {
                                  modelValue: unref(form).name,
                                  "onUpdate:modelValue": ($event) => unref(form).name = $event,
                                  placeholder: "Moj proizvod",
                                  class: "input-width"
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ]),
                              _: 1
                            }),
                            createVNode("div", { style: { "height": "450px" } }, [
                              createVNode(_component_ElFormItem, {
                                label: "Opis",
                                prop: "text"
                              }, {
                                default: withCtx(() => [
                                  createVNode(unref(script), {
                                    modelValue: unref(form).description,
                                    "onUpdate:modelValue": ($event) => unref(form).description = $event,
                                    class: "editor"
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                ]),
                                _: 1
                              })
                            ]),
                            createVNode(_component_ElFormItem, {
                              label: "Cijena",
                              prop: "price",
                              class: "mt-20"
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_ElInputNumber, {
                                  modelValue: unref(form).price,
                                  "onUpdate:modelValue": ($event) => unref(form).price = $event,
                                  precision: 2,
                                  placeholder: "1.99",
                                  step: 0.01,
                                  class: "input-width"
                                }, {
                                  suffix: withCtx(() => [
                                    createTextVNode("\u20AC")
                                  ]),
                                  _: 1
                                }, 8, ["modelValue", "onUpdate:modelValue"])
                              ]),
                              _: 1
                            }),
                            createVNode(_component_ElFormItem, {
                              label: "Email prodava\u010Da",
                              prop: "contactEmail",
                              class: "mt-20"
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_ElInput, {
                                  modelValue: unref(form).contactEmail,
                                  "onUpdate:modelValue": ($event) => unref(form).contactEmail = $event,
                                  placeholder: "john.doe@mail.com",
                                  class: "input-width"
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ]),
                              _: 1
                            }),
                            createVNode(_component_ElFormItem, {
                              label: "Telefon prodava\u010Da",
                              prop: "contactNumber",
                              class: "mt-20"
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_ElInput, {
                                  modelValue: unref(form).contactNumber,
                                  "onUpdate:modelValue": ($event) => unref(form).contactNumber = $event,
                                  placeholder: "+3850123456789",
                                  class: "input-width"
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ]),
                              _: 1
                            }),
                            createVNode(_component_ElFormItem, {
                              label: "Dr\u017Eava proizvoda",
                              prop: "locationCountry",
                              class: "mt-20"
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_ElInput, {
                                  modelValue: unref(form).locationCountry,
                                  "onUpdate:modelValue": ($event) => unref(form).locationCountry = $event,
                                  placeholder: "Hrvatska",
                                  class: "input-width"
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ]),
                              _: 1
                            }),
                            createVNode(_component_ElFormItem, {
                              label: "Mjesto proizvoda",
                              prop: "locationPlace",
                              class: "mt-20"
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_ElInput, {
                                  modelValue: unref(form).locationPlace,
                                  "onUpdate:modelValue": ($event) => unref(form).locationPlace = $event,
                                  placeholder: "Zagreb",
                                  class: "input-width"
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ]),
                              _: 1
                            }),
                            createVNode(_component_ElFormItem, {
                              label: "Slike",
                              prop: "images"
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_ElUpload, {
                                  "file-list": unref(fileList).images,
                                  "onUpdate:fileList": ($event) => unref(fileList).images = $event,
                                  action: "#",
                                  "list-type": "picture-card",
                                  "auto-upload": false,
                                  multiple: "",
                                  accept: "image/*"
                                }, {
                                  file: withCtx(({ file }) => [
                                    createVNode("div", null, [
                                      createVNode("img", {
                                        class: "el-upload-list__item-thumbnail",
                                        src: file.url,
                                        alt: ""
                                      }, null, 8, ["src"]),
                                      createVNode("span", { class: "el-upload-list__item-actions" }, [
                                        createVNode(_component_ElTooltip, {
                                          effect: "dark",
                                          content: "Postavi na prvu poziciju",
                                          placement: "top",
                                          "show-after": 500
                                        }, {
                                          default: withCtx(() => [
                                            unref(fileList).images[0].url !== file.url ? (openBlock(), createBlock("span", {
                                              key: 0,
                                              onClick: ($event) => handleSetImageToFirstPlace(file)
                                            }, [
                                              createVNode(_component_ElIcon, null, {
                                                default: withCtx(() => [
                                                  createVNode(unref(gold_medal_default))
                                                ]),
                                                _: 1
                                              })
                                            ], 8, ["onClick"])) : createCommentVNode("", true)
                                          ]),
                                          _: 2
                                        }, 1024),
                                        createVNode("span", {
                                          onClick: ($event) => handleImagePreview(file)
                                        }, [
                                          createVNode(_component_ElIcon, null, {
                                            default: withCtx(() => [
                                              createVNode(unref(zoom_in_default))
                                            ]),
                                            _: 1
                                          })
                                        ], 8, ["onClick"]),
                                        createVNode("span", {
                                          onClick: ($event) => handleImageRemove(file)
                                        }, [
                                          createVNode(_component_ElIcon, null, {
                                            default: withCtx(() => [
                                              createVNode(unref(delete_default))
                                            ]),
                                            _: 1
                                          })
                                        ], 8, ["onClick"])
                                      ])
                                    ])
                                  ]),
                                  default: withCtx(() => [
                                    createVNode(_component_ElIcon, null, {
                                      default: withCtx(() => [
                                        createVNode(unref(plus_default))
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }, 8, ["file-list", "onUpdate:fileList"])
                              ]),
                              _: 1
                            }),
                            ((_a = unref(form).videos) == null ? void 0 : _a.length) ? (openBlock(), createBlock(_component_ElFormItem, {
                              key: 0,
                              label: "Dodani video"
                            }, {
                              default: withCtx(() => [
                                (openBlock(true), createBlock(Fragment, null, renderList(unref(form).videos, (video) => {
                                  return openBlock(), createBlock(_component_ElRow, {
                                    justify: "center",
                                    align: "middle"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(" * " + toDisplayString(video) + " ", 1),
                                      createVNode(_component_ElIcon, {
                                        size: 18,
                                        onClick: ($event) => handleVideoDownload(video),
                                        class: "ml-8 video-download-icon"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(unref(download_default))
                                        ]),
                                        _: 2
                                      }, 1032, ["onClick"]),
                                      createVNode(_component_ElIcon, {
                                        size: 18,
                                        onClick: ($event) => handleVideoRemove(video),
                                        class: "ml-8 video-remove-icon"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(unref(delete_default))
                                        ]),
                                        _: 2
                                      }, 1032, ["onClick"])
                                    ]),
                                    _: 2
                                  }, 1024);
                                }), 256))
                              ]),
                              _: 1
                            })) : createCommentVNode("", true),
                            createVNode(_component_ElFormItem, {
                              label: "Video",
                              prop: "videos"
                            }, {
                              default: withCtx(() => [
                                createVNode("input", {
                                  type: "file",
                                  multiple: "",
                                  accept: "video/*",
                                  onChange: handleVideoChange
                                }, null, 32)
                              ]),
                              _: 1
                            })
                          ];
                        }),
                        _: 1
                      }, 8, ["label-position", "model", "rules"])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else if (unref(dialog).type === "delete") {
              _push2(ssrRenderComponent(_component_ElRow, {
                justify: "center",
                class: "mb-24"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_ElCol, { align: "middle" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        var _a, _b;
                        if (_push4) {
                          _push4(` Jeste li sigurni da \u017Eelite obrisati <b data-v-3b94e150${_scopeId3}>${ssrInterpolate((_a = unref(dialog).item) == null ? void 0 : _a.name)}</b> proizvod? `);
                        } else {
                          return [
                            createTextVNode(" Jeste li sigurni da \u017Eelite obrisati "),
                            createVNode("b", null, toDisplayString((_b = unref(dialog).item) == null ? void 0 : _b.name), 1),
                            createTextVNode(" proizvod? ")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(_component_ElCol, {
                      align: "middle",
                      class: "mt-12"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`Mogu\u0107e ga je vratiti kasnije. `);
                        } else {
                          return [
                            createTextVNode("Mogu\u0107e ga je vratiti kasnije. ")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_ElCol, { align: "middle" }, {
                        default: withCtx(() => {
                          var _a;
                          return [
                            createTextVNode(" Jeste li sigurni da \u017Eelite obrisati "),
                            createVNode("b", null, toDisplayString((_a = unref(dialog).item) == null ? void 0 : _a.name), 1),
                            createTextVNode(" proizvod? ")
                          ];
                        }),
                        _: 1
                      }),
                      createVNode(_component_ElCol, {
                        align: "middle",
                        class: "mt-12"
                      }, {
                        default: withCtx(() => [
                          createTextVNode("Mogu\u0107e ga je vratiti kasnije. ")
                        ]),
                        _: 1
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else if (unref(dialog).type === "unarchive") {
              _push2(ssrRenderComponent(_component_ElRow, {
                justify: "center",
                class: "mb-24"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_ElCol, { align: "middle" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        var _a, _b;
                        if (_push4) {
                          _push4(` Jeste li sigurni da \u017Eelite vratiti <b data-v-3b94e150${_scopeId3}>${ssrInterpolate((_a = unref(dialog).item) == null ? void 0 : _a.name)}</b> proizvod? `);
                        } else {
                          return [
                            createTextVNode(" Jeste li sigurni da \u017Eelite vratiti "),
                            createVNode("b", null, toDisplayString((_b = unref(dialog).item) == null ? void 0 : _b.name), 1),
                            createTextVNode(" proizvod? ")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_ElCol, { align: "middle" }, {
                        default: withCtx(() => {
                          var _a;
                          return [
                            createTextVNode(" Jeste li sigurni da \u017Eelite vratiti "),
                            createVNode("b", null, toDisplayString((_a = unref(dialog).item) == null ? void 0 : _a.name), 1),
                            createTextVNode(" proizvod? ")
                          ];
                        }),
                        _: 1
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            if (unref(isLoading).button) {
              _push2(ssrRenderComponent(_component_ElRow, {
                justify: "center",
                class: "color-primary mb-12"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(` Ne prekidajte u\u010Ditavanje podataka! `);
                  } else {
                    return [
                      createTextVNode(" Ne prekidajte u\u010Ditavanje podataka! ")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            _push2(ssrRenderComponent(_component_ElRow, { justify: "center" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_ElButton, {
                    type: unref(dialog).type === "delete" ? "danger" : "primary",
                    plain: "",
                    onClick: ($event) => handleSubmitButton(unref(ruleFormRef)),
                    loading: unref(isLoading).button
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        if (unref(dialog).type === "create") {
                          _push4(`<span data-v-3b94e150${_scopeId3}>Dodaj</span>`);
                        } else if (unref(dialog).type === "edit") {
                          _push4(`<span data-v-3b94e150${_scopeId3}>Uredi</span>`);
                        } else if (unref(dialog).type === "unarchive") {
                          _push4(`<span data-v-3b94e150${_scopeId3}>Vrati</span>`);
                        } else if (unref(dialog).type === "delete") {
                          _push4(`<span data-v-3b94e150${_scopeId3}>Obri\u0161i</span>`);
                        } else {
                          _push4(`<!---->`);
                        }
                      } else {
                        return [
                          unref(dialog).type === "create" ? (openBlock(), createBlock("span", { key: 0 }, "Dodaj")) : unref(dialog).type === "edit" ? (openBlock(), createBlock("span", { key: 1 }, "Uredi")) : unref(dialog).type === "unarchive" ? (openBlock(), createBlock("span", { key: 2 }, "Vrati")) : unref(dialog).type === "delete" ? (openBlock(), createBlock("span", { key: 3 }, "Obri\u0161i")) : createCommentVNode("", true)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_ElButton, {
                      type: unref(dialog).type === "delete" ? "danger" : "primary",
                      plain: "",
                      onClick: ($event) => handleSubmitButton(unref(ruleFormRef)),
                      loading: unref(isLoading).button
                    }, {
                      default: withCtx(() => [
                        unref(dialog).type === "create" ? (openBlock(), createBlock("span", { key: 0 }, "Dodaj")) : unref(dialog).type === "edit" ? (openBlock(), createBlock("span", { key: 1 }, "Uredi")) : unref(dialog).type === "unarchive" ? (openBlock(), createBlock("span", { key: 2 }, "Vrati")) : unref(dialog).type === "delete" ? (openBlock(), createBlock("span", { key: 3 }, "Obri\u0161i")) : createCommentVNode("", true)
                      ]),
                      _: 1
                    }, 8, ["type", "onClick", "loading"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              unref(dialog).type === "create" || unref(dialog).type === "edit" ? (openBlock(), createBlock(_component_ElRow, {
                key: 0,
                justify: "center"
              }, {
                default: withCtx(() => [
                  createVNode(_component_ElForm, {
                    "label-position": _ctx.$viewport.isLessThan("tablet") ? "top" : "left",
                    "require-asterisk-position": "right",
                    ref_key: "ruleFormRef",
                    ref: ruleFormRef,
                    class: "form",
                    model: unref(form),
                    rules: unref(rules),
                    "label-width": "auto",
                    "status-icon": ""
                  }, {
                    default: withCtx(() => {
                      var _a;
                      return [
                        createVNode(_component_ElFormItem, {
                          label: "Kategorija",
                          prop: "text"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_ElSelect, {
                              modelValue: unref(form).productCategoryId,
                              "onUpdate:modelValue": ($event) => unref(form).productCategoryId = $event,
                              loading: unref(isLoading).categories,
                              placeholder: "Odaberite kategoriju",
                              class: "input-width",
                              clearable: ""
                            }, {
                              default: withCtx(() => [
                                (openBlock(true), createBlock(Fragment, null, renderList(unref(categories), (category) => {
                                  return openBlock(), createBlock(_component_ElOption, {
                                    key: String(category.id),
                                    label: String(category.name),
                                    value: String(category.id)
                                  }, null, 8, ["label", "value"]);
                                }), 128))
                              ]),
                              _: 1
                            }, 8, ["modelValue", "onUpdate:modelValue", "loading"])
                          ]),
                          _: 1
                        }),
                        createVNode(_component_ElFormItem, {
                          label: "Naslov",
                          prop: "title"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_ElInput, {
                              modelValue: unref(form).name,
                              "onUpdate:modelValue": ($event) => unref(form).name = $event,
                              placeholder: "Moj proizvod",
                              class: "input-width"
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ]),
                          _: 1
                        }),
                        createVNode("div", { style: { "height": "450px" } }, [
                          createVNode(_component_ElFormItem, {
                            label: "Opis",
                            prop: "text"
                          }, {
                            default: withCtx(() => [
                              createVNode(unref(script), {
                                modelValue: unref(form).description,
                                "onUpdate:modelValue": ($event) => unref(form).description = $event,
                                class: "editor"
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            _: 1
                          })
                        ]),
                        createVNode(_component_ElFormItem, {
                          label: "Cijena",
                          prop: "price",
                          class: "mt-20"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_ElInputNumber, {
                              modelValue: unref(form).price,
                              "onUpdate:modelValue": ($event) => unref(form).price = $event,
                              precision: 2,
                              placeholder: "1.99",
                              step: 0.01,
                              class: "input-width"
                            }, {
                              suffix: withCtx(() => [
                                createTextVNode("\u20AC")
                              ]),
                              _: 1
                            }, 8, ["modelValue", "onUpdate:modelValue"])
                          ]),
                          _: 1
                        }),
                        createVNode(_component_ElFormItem, {
                          label: "Email prodava\u010Da",
                          prop: "contactEmail",
                          class: "mt-20"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_ElInput, {
                              modelValue: unref(form).contactEmail,
                              "onUpdate:modelValue": ($event) => unref(form).contactEmail = $event,
                              placeholder: "john.doe@mail.com",
                              class: "input-width"
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ]),
                          _: 1
                        }),
                        createVNode(_component_ElFormItem, {
                          label: "Telefon prodava\u010Da",
                          prop: "contactNumber",
                          class: "mt-20"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_ElInput, {
                              modelValue: unref(form).contactNumber,
                              "onUpdate:modelValue": ($event) => unref(form).contactNumber = $event,
                              placeholder: "+3850123456789",
                              class: "input-width"
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ]),
                          _: 1
                        }),
                        createVNode(_component_ElFormItem, {
                          label: "Dr\u017Eava proizvoda",
                          prop: "locationCountry",
                          class: "mt-20"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_ElInput, {
                              modelValue: unref(form).locationCountry,
                              "onUpdate:modelValue": ($event) => unref(form).locationCountry = $event,
                              placeholder: "Hrvatska",
                              class: "input-width"
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ]),
                          _: 1
                        }),
                        createVNode(_component_ElFormItem, {
                          label: "Mjesto proizvoda",
                          prop: "locationPlace",
                          class: "mt-20"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_ElInput, {
                              modelValue: unref(form).locationPlace,
                              "onUpdate:modelValue": ($event) => unref(form).locationPlace = $event,
                              placeholder: "Zagreb",
                              class: "input-width"
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ]),
                          _: 1
                        }),
                        createVNode(_component_ElFormItem, {
                          label: "Slike",
                          prop: "images"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_ElUpload, {
                              "file-list": unref(fileList).images,
                              "onUpdate:fileList": ($event) => unref(fileList).images = $event,
                              action: "#",
                              "list-type": "picture-card",
                              "auto-upload": false,
                              multiple: "",
                              accept: "image/*"
                            }, {
                              file: withCtx(({ file }) => [
                                createVNode("div", null, [
                                  createVNode("img", {
                                    class: "el-upload-list__item-thumbnail",
                                    src: file.url,
                                    alt: ""
                                  }, null, 8, ["src"]),
                                  createVNode("span", { class: "el-upload-list__item-actions" }, [
                                    createVNode(_component_ElTooltip, {
                                      effect: "dark",
                                      content: "Postavi na prvu poziciju",
                                      placement: "top",
                                      "show-after": 500
                                    }, {
                                      default: withCtx(() => [
                                        unref(fileList).images[0].url !== file.url ? (openBlock(), createBlock("span", {
                                          key: 0,
                                          onClick: ($event) => handleSetImageToFirstPlace(file)
                                        }, [
                                          createVNode(_component_ElIcon, null, {
                                            default: withCtx(() => [
                                              createVNode(unref(gold_medal_default))
                                            ]),
                                            _: 1
                                          })
                                        ], 8, ["onClick"])) : createCommentVNode("", true)
                                      ]),
                                      _: 2
                                    }, 1024),
                                    createVNode("span", {
                                      onClick: ($event) => handleImagePreview(file)
                                    }, [
                                      createVNode(_component_ElIcon, null, {
                                        default: withCtx(() => [
                                          createVNode(unref(zoom_in_default))
                                        ]),
                                        _: 1
                                      })
                                    ], 8, ["onClick"]),
                                    createVNode("span", {
                                      onClick: ($event) => handleImageRemove(file)
                                    }, [
                                      createVNode(_component_ElIcon, null, {
                                        default: withCtx(() => [
                                          createVNode(unref(delete_default))
                                        ]),
                                        _: 1
                                      })
                                    ], 8, ["onClick"])
                                  ])
                                ])
                              ]),
                              default: withCtx(() => [
                                createVNode(_component_ElIcon, null, {
                                  default: withCtx(() => [
                                    createVNode(unref(plus_default))
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }, 8, ["file-list", "onUpdate:fileList"])
                          ]),
                          _: 1
                        }),
                        ((_a = unref(form).videos) == null ? void 0 : _a.length) ? (openBlock(), createBlock(_component_ElFormItem, {
                          key: 0,
                          label: "Dodani video"
                        }, {
                          default: withCtx(() => [
                            (openBlock(true), createBlock(Fragment, null, renderList(unref(form).videos, (video) => {
                              return openBlock(), createBlock(_component_ElRow, {
                                justify: "center",
                                align: "middle"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" * " + toDisplayString(video) + " ", 1),
                                  createVNode(_component_ElIcon, {
                                    size: 18,
                                    onClick: ($event) => handleVideoDownload(video),
                                    class: "ml-8 video-download-icon"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(unref(download_default))
                                    ]),
                                    _: 2
                                  }, 1032, ["onClick"]),
                                  createVNode(_component_ElIcon, {
                                    size: 18,
                                    onClick: ($event) => handleVideoRemove(video),
                                    class: "ml-8 video-remove-icon"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(unref(delete_default))
                                    ]),
                                    _: 2
                                  }, 1032, ["onClick"])
                                ]),
                                _: 2
                              }, 1024);
                            }), 256))
                          ]),
                          _: 1
                        })) : createCommentVNode("", true),
                        createVNode(_component_ElFormItem, {
                          label: "Video",
                          prop: "videos"
                        }, {
                          default: withCtx(() => [
                            createVNode("input", {
                              type: "file",
                              multiple: "",
                              accept: "video/*",
                              onChange: handleVideoChange
                            }, null, 32)
                          ]),
                          _: 1
                        })
                      ];
                    }),
                    _: 1
                  }, 8, ["label-position", "model", "rules"])
                ]),
                _: 1
              })) : unref(dialog).type === "delete" ? (openBlock(), createBlock(_component_ElRow, {
                key: 1,
                justify: "center",
                class: "mb-24"
              }, {
                default: withCtx(() => [
                  createVNode(_component_ElCol, { align: "middle" }, {
                    default: withCtx(() => {
                      var _a;
                      return [
                        createTextVNode(" Jeste li sigurni da \u017Eelite obrisati "),
                        createVNode("b", null, toDisplayString((_a = unref(dialog).item) == null ? void 0 : _a.name), 1),
                        createTextVNode(" proizvod? ")
                      ];
                    }),
                    _: 1
                  }),
                  createVNode(_component_ElCol, {
                    align: "middle",
                    class: "mt-12"
                  }, {
                    default: withCtx(() => [
                      createTextVNode("Mogu\u0107e ga je vratiti kasnije. ")
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })) : unref(dialog).type === "unarchive" ? (openBlock(), createBlock(_component_ElRow, {
                key: 2,
                justify: "center",
                class: "mb-24"
              }, {
                default: withCtx(() => [
                  createVNode(_component_ElCol, { align: "middle" }, {
                    default: withCtx(() => {
                      var _a;
                      return [
                        createTextVNode(" Jeste li sigurni da \u017Eelite vratiti "),
                        createVNode("b", null, toDisplayString((_a = unref(dialog).item) == null ? void 0 : _a.name), 1),
                        createTextVNode(" proizvod? ")
                      ];
                    }),
                    _: 1
                  })
                ]),
                _: 1
              })) : createCommentVNode("", true),
              unref(isLoading).button ? (openBlock(), createBlock(_component_ElRow, {
                key: 3,
                justify: "center",
                class: "color-primary mb-12"
              }, {
                default: withCtx(() => [
                  createTextVNode(" Ne prekidajte u\u010Ditavanje podataka! ")
                ]),
                _: 1
              })) : createCommentVNode("", true),
              createVNode(_component_ElRow, { justify: "center" }, {
                default: withCtx(() => [
                  createVNode(_component_ElButton, {
                    type: unref(dialog).type === "delete" ? "danger" : "primary",
                    plain: "",
                    onClick: ($event) => handleSubmitButton(unref(ruleFormRef)),
                    loading: unref(isLoading).button
                  }, {
                    default: withCtx(() => [
                      unref(dialog).type === "create" ? (openBlock(), createBlock("span", { key: 0 }, "Dodaj")) : unref(dialog).type === "edit" ? (openBlock(), createBlock("span", { key: 1 }, "Uredi")) : unref(dialog).type === "unarchive" ? (openBlock(), createBlock("span", { key: 2 }, "Vrati")) : unref(dialog).type === "delete" ? (openBlock(), createBlock("span", { key: 3 }, "Obri\u0161i")) : createCommentVNode("", true)
                    ]),
                    _: 1
                  }, 8, ["type", "onClick", "loading"])
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_ElDialog, {
        modelValue: unref(fullscreenImageDialog),
        "onUpdate:modelValue": ($event) => isRef(fullscreenImageDialog) ? fullscreenImageDialog.value = $event : null,
        width: "90%"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_ElRow, {
              justify: "center",
              align: "middle"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<img w-full${ssrRenderAttr("src", unref(fullscreenImageUrl))} class="preview-image" data-v-3b94e150${_scopeId2}>`);
                } else {
                  return [
                    createVNode("img", {
                      "w-full": "",
                      src: unref(fullscreenImageUrl),
                      class: "preview-image"
                    }, null, 8, ["src"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_ElRow, {
                justify: "center",
                align: "middle"
              }, {
                default: withCtx(() => [
                  createVNode("img", {
                    "w-full": "",
                    src: unref(fullscreenImageUrl),
                    class: "preview-image"
                  }, null, 8, ["src"])
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/backoffice/tabs/BackofficeWebshopProductsTab.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const BackofficeWebshopProductsTab = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["__scopeId", "data-v-3b94e150"]]);
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  __name: "BackofficeOrdersTab",
  __ssrInlineRender: true,
  setup(__props) {
    const { $axios } = useNuxtApp();
    const isLoading = ref(true);
    const orders = ref();
    const searchValue = ref("");
    const dialog = ref({
      isOpened: false,
      order: void 0
    });
    const pagination = ref({
      page: 1,
      perPage: 10,
      total: 0
    });
    function handleSearch() {
      pagination.value.page = 1;
      debounceSearch();
    }
    const debounceSearch = debounce(getOrders, 300);
    async function getOrders() {
      isLoading.value = true;
      try {
        const response = await $axios.get(
          `/order?page=${pagination.value.page}&perPage=${pagination.value.perPage}&search=${searchValue.value}`
        );
        orders.value = response.data.orders;
        pagination.value.total = response.data.total;
      } catch (error) {
        console.error("API Error:", error);
      } finally {
        isLoading.value = false;
      }
    }
    function handleOpenDialog(order) {
      dialog.value = {
        isOpened: true,
        order
      };
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ElRow = ElRow;
      const _component_ElCol = ElCol;
      const _component_ElInput = ElInput;
      const _component_ElTable = ElTable;
      const _component_ElTableColumn = ElTableColumn;
      const _component_ElButton = ElButton;
      const _component_ElIcon = ElIcon;
      const _component_ElDialog = ElDialog;
      const _component_ElDescriptions = ElDescriptions;
      const _component_ElDescriptionsItem = ElDescriptionsItem;
      const _directive_loading = vLoading;
      _push(`<!--[--><div class="backoffice-page">`);
      _push(ssrRenderComponent(_component_ElRow, {
        justify: "center",
        align: "middle",
        class: "w-100"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_ElCol, {
              span: 8,
              offset: 8,
              align: "center"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<h3 class="color-primary"${_scopeId2}>Narud\u017Ebe</h3>`);
                } else {
                  return [
                    createVNode("h3", { class: "color-primary" }, "Narud\u017Ebe")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_ElCol, {
              span: 8,
              align: "end"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_ElInput, {
                    modelValue: unref(searchValue),
                    "onUpdate:modelValue": ($event) => isRef(searchValue) ? searchValue.value = $event : null,
                    type: "text",
                    placeholder: "Pretra\u017Eite ID, kupca ili proizvod...",
                    class: "max-w-250",
                    "prefix-icon": unref(search_default),
                    onInput: handleSearch
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_ElInput, {
                      modelValue: unref(searchValue),
                      "onUpdate:modelValue": ($event) => isRef(searchValue) ? searchValue.value = $event : null,
                      type: "text",
                      placeholder: "Pretra\u017Eite ID, kupca ili proizvod...",
                      class: "max-w-250",
                      "prefix-icon": unref(search_default),
                      onInput: handleSearch
                    }, null, 8, ["modelValue", "onUpdate:modelValue", "prefix-icon"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_ElCol, {
                span: 8,
                offset: 8,
                align: "center"
              }, {
                default: withCtx(() => [
                  createVNode("h3", { class: "color-primary" }, "Narud\u017Ebe")
                ]),
                _: 1
              }),
              createVNode(_component_ElCol, {
                span: 8,
                align: "end"
              }, {
                default: withCtx(() => [
                  createVNode(_component_ElInput, {
                    modelValue: unref(searchValue),
                    "onUpdate:modelValue": ($event) => isRef(searchValue) ? searchValue.value = $event : null,
                    type: "text",
                    placeholder: "Pretra\u017Eite ID, kupca ili proizvod...",
                    class: "max-w-250",
                    "prefix-icon": unref(search_default),
                    onInput: handleSearch
                  }, null, 8, ["modelValue", "onUpdate:modelValue", "prefix-icon"])
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_ElTable, mergeProps({
        data: unref(orders),
        stripe: "",
        "empty-text": "Nema dostupnih podataka"
      }, ssrGetDirectiveProps(_ctx, _directive_loading, unref(isLoading))), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_ElTableColumn, {
              label: "ID",
              prop: "id"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_ElTableColumn, {
              label: "Kupac",
              prop: "buyerFullname"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_ElTableColumn, {
              label: "Proizvod",
              prop: "product.name"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_ElTableColumn, {
              label: "Koli\u010Dina",
              prop: "quantity"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_ElTableColumn, {
              label: "Cijena",
              prop: "totalPrice"
            }, {
              default: withCtx((items, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(Number(items.row.totalPrice).toFixed(2))} \u20AC `);
                } else {
                  return [
                    createTextVNode(toDisplayString(Number(items.row.totalPrice).toFixed(2)) + " \u20AC ", 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_ElTableColumn, {
              label: "Vi\u0161e",
              align: "center",
              width: "80"
            }, {
              default: withCtx((items, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_ElButton, {
                    type: "primary",
                    plain: "",
                    onClick: ($event) => handleOpenDialog(items.row)
                  }, {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_ElIcon, { size: "24" }, {
                          default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(unref(info_filled_default), null, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(unref(info_filled_default))
                              ];
                            }
                          }),
                          _: 2
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_ElIcon, { size: "24" }, {
                            default: withCtx(() => [
                              createVNode(unref(info_filled_default))
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_ElButton, {
                      type: "primary",
                      plain: "",
                      onClick: ($event) => handleOpenDialog(items.row)
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_ElIcon, { size: "24" }, {
                          default: withCtx(() => [
                            createVNode(unref(info_filled_default))
                          ]),
                          _: 1
                        })
                      ]),
                      _: 2
                    }, 1032, ["onClick"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_ElTableColumn, {
                label: "ID",
                prop: "id"
              }),
              createVNode(_component_ElTableColumn, {
                label: "Kupac",
                prop: "buyerFullname"
              }),
              createVNode(_component_ElTableColumn, {
                label: "Proizvod",
                prop: "product.name"
              }),
              createVNode(_component_ElTableColumn, {
                label: "Koli\u010Dina",
                prop: "quantity"
              }),
              createVNode(_component_ElTableColumn, {
                label: "Cijena",
                prop: "totalPrice"
              }, {
                default: withCtx((items) => [
                  createTextVNode(toDisplayString(Number(items.row.totalPrice).toFixed(2)) + " \u20AC ", 1)
                ]),
                _: 1
              }),
              createVNode(_component_ElTableColumn, {
                label: "Vi\u0161e",
                align: "center",
                width: "80"
              }, {
                default: withCtx((items) => [
                  createVNode(_component_ElButton, {
                    type: "primary",
                    plain: "",
                    onClick: ($event) => handleOpenDialog(items.row)
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_ElIcon, { size: "24" }, {
                        default: withCtx(() => [
                          createVNode(unref(info_filled_default))
                        ]),
                        _: 1
                      })
                    ]),
                    _: 2
                  }, 1032, ["onClick"])
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      if (unref(pagination).total > 10) {
        _push(ssrRenderComponent(Pagination, {
          modelValue: unref(pagination),
          "onUpdate:modelValue": ($event) => isRef(pagination) ? pagination.value = $event : null,
          loading: unref(isLoading),
          "scroll-element-id": "scroll-element",
          onPageChange: getOrders,
          class: "mb-24"
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
      _push(ssrRenderComponent(_component_ElDialog, {
        modelValue: unref(dialog).isOpened,
        "onUpdate:modelValue": ($event) => unref(dialog).isOpened = $event,
        "close-on-click-modal": false,
        "destroy-on-close": "",
        fullscreen: ""
      }, {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_ElRow, { justify: "center" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                var _a, _b;
                if (_push3) {
                  _push3(`<h3 class="color-primary"${_scopeId2}><span${_scopeId2}>Narud\u017Eba: ${ssrInterpolate((_a = unref(dialog).order) == null ? void 0 : _a.id)}</span></h3>`);
                } else {
                  return [
                    createVNode("h3", { class: "color-primary" }, [
                      createVNode("span", null, "Narud\u017Eba: " + toDisplayString((_b = unref(dialog).order) == null ? void 0 : _b.id), 1)
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_ElRow, { justify: "center" }, {
                default: withCtx(() => {
                  var _a;
                  return [
                    createVNode("h3", { class: "color-primary" }, [
                      createVNode("span", null, "Narud\u017Eba: " + toDisplayString((_a = unref(dialog).order) == null ? void 0 : _a.id), 1)
                    ])
                  ];
                }),
                _: 1
              })
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_ElRow, { justify: "center" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_ElDescriptions, {
                    title: "Kupac",
                    border: "",
                    style: { "min-width": "450px" },
                    column: 1
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_ElDescriptionsItem, { label: "Ime i prezime" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            var _a, _b;
                            if (_push5) {
                              _push5(`${ssrInterpolate((_a = unref(dialog).order) == null ? void 0 : _a.buyerFullname)}`);
                            } else {
                              return [
                                createTextVNode(toDisplayString((_b = unref(dialog).order) == null ? void 0 : _b.buyerFullname), 1)
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_ElDescriptionsItem, { label: "Email" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            var _a, _b;
                            if (_push5) {
                              _push5(`${ssrInterpolate((_a = unref(dialog).order) == null ? void 0 : _a.buyerEmail)}`);
                            } else {
                              return [
                                createTextVNode(toDisplayString((_b = unref(dialog).order) == null ? void 0 : _b.buyerEmail), 1)
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_ElDescriptionsItem, { label: "Telefon" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            var _a, _b;
                            if (_push5) {
                              _push5(`${ssrInterpolate(((_a = unref(dialog).order) == null ? void 0 : _a.buyerNumber) || "-")}`);
                            } else {
                              return [
                                createTextVNode(toDisplayString(((_b = unref(dialog).order) == null ? void 0 : _b.buyerNumber) || "-"), 1)
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_ElDescriptionsItem, { label: "Adresa" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            var _a, _b;
                            if (_push5) {
                              _push5(`${ssrInterpolate((_a = unref(dialog).order) == null ? void 0 : _a.buyerAddress)}`);
                            } else {
                              return [
                                createTextVNode(toDisplayString((_b = unref(dialog).order) == null ? void 0 : _b.buyerAddress), 1)
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_ElDescriptionsItem, { label: "Mjesto" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            var _a, _b;
                            if (_push5) {
                              _push5(`${ssrInterpolate((_a = unref(dialog).order) == null ? void 0 : _a.buyerPlace)}`);
                            } else {
                              return [
                                createTextVNode(toDisplayString((_b = unref(dialog).order) == null ? void 0 : _b.buyerPlace), 1)
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_ElDescriptionsItem, { label: "Po\u0161tansi broj" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            var _a, _b;
                            if (_push5) {
                              _push5(`${ssrInterpolate((_a = unref(dialog).order) == null ? void 0 : _a.buyerZipCode)}`);
                            } else {
                              return [
                                createTextVNode(toDisplayString((_b = unref(dialog).order) == null ? void 0 : _b.buyerZipCode), 1)
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_ElDescriptionsItem, { label: "Dr\u017Eava" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            var _a, _b;
                            if (_push5) {
                              _push5(`${ssrInterpolate((_a = unref(dialog).order) == null ? void 0 : _a.buyerCountry)}`);
                            } else {
                              return [
                                createTextVNode(toDisplayString((_b = unref(dialog).order) == null ? void 0 : _b.buyerCountry), 1)
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_ElDescriptionsItem, { label: "Ime i prezime" }, {
                            default: withCtx(() => {
                              var _a;
                              return [
                                createTextVNode(toDisplayString((_a = unref(dialog).order) == null ? void 0 : _a.buyerFullname), 1)
                              ];
                            }),
                            _: 1
                          }),
                          createVNode(_component_ElDescriptionsItem, { label: "Email" }, {
                            default: withCtx(() => {
                              var _a;
                              return [
                                createTextVNode(toDisplayString((_a = unref(dialog).order) == null ? void 0 : _a.buyerEmail), 1)
                              ];
                            }),
                            _: 1
                          }),
                          createVNode(_component_ElDescriptionsItem, { label: "Telefon" }, {
                            default: withCtx(() => {
                              var _a;
                              return [
                                createTextVNode(toDisplayString(((_a = unref(dialog).order) == null ? void 0 : _a.buyerNumber) || "-"), 1)
                              ];
                            }),
                            _: 1
                          }),
                          createVNode(_component_ElDescriptionsItem, { label: "Adresa" }, {
                            default: withCtx(() => {
                              var _a;
                              return [
                                createTextVNode(toDisplayString((_a = unref(dialog).order) == null ? void 0 : _a.buyerAddress), 1)
                              ];
                            }),
                            _: 1
                          }),
                          createVNode(_component_ElDescriptionsItem, { label: "Mjesto" }, {
                            default: withCtx(() => {
                              var _a;
                              return [
                                createTextVNode(toDisplayString((_a = unref(dialog).order) == null ? void 0 : _a.buyerPlace), 1)
                              ];
                            }),
                            _: 1
                          }),
                          createVNode(_component_ElDescriptionsItem, { label: "Po\u0161tansi broj" }, {
                            default: withCtx(() => {
                              var _a;
                              return [
                                createTextVNode(toDisplayString((_a = unref(dialog).order) == null ? void 0 : _a.buyerZipCode), 1)
                              ];
                            }),
                            _: 1
                          }),
                          createVNode(_component_ElDescriptionsItem, { label: "Dr\u017Eava" }, {
                            default: withCtx(() => {
                              var _a;
                              return [
                                createTextVNode(toDisplayString((_a = unref(dialog).order) == null ? void 0 : _a.buyerCountry), 1)
                              ];
                            }),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_ElDescriptions, {
                      title: "Kupac",
                      border: "",
                      style: { "min-width": "450px" },
                      column: 1
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_ElDescriptionsItem, { label: "Ime i prezime" }, {
                          default: withCtx(() => {
                            var _a;
                            return [
                              createTextVNode(toDisplayString((_a = unref(dialog).order) == null ? void 0 : _a.buyerFullname), 1)
                            ];
                          }),
                          _: 1
                        }),
                        createVNode(_component_ElDescriptionsItem, { label: "Email" }, {
                          default: withCtx(() => {
                            var _a;
                            return [
                              createTextVNode(toDisplayString((_a = unref(dialog).order) == null ? void 0 : _a.buyerEmail), 1)
                            ];
                          }),
                          _: 1
                        }),
                        createVNode(_component_ElDescriptionsItem, { label: "Telefon" }, {
                          default: withCtx(() => {
                            var _a;
                            return [
                              createTextVNode(toDisplayString(((_a = unref(dialog).order) == null ? void 0 : _a.buyerNumber) || "-"), 1)
                            ];
                          }),
                          _: 1
                        }),
                        createVNode(_component_ElDescriptionsItem, { label: "Adresa" }, {
                          default: withCtx(() => {
                            var _a;
                            return [
                              createTextVNode(toDisplayString((_a = unref(dialog).order) == null ? void 0 : _a.buyerAddress), 1)
                            ];
                          }),
                          _: 1
                        }),
                        createVNode(_component_ElDescriptionsItem, { label: "Mjesto" }, {
                          default: withCtx(() => {
                            var _a;
                            return [
                              createTextVNode(toDisplayString((_a = unref(dialog).order) == null ? void 0 : _a.buyerPlace), 1)
                            ];
                          }),
                          _: 1
                        }),
                        createVNode(_component_ElDescriptionsItem, { label: "Po\u0161tansi broj" }, {
                          default: withCtx(() => {
                            var _a;
                            return [
                              createTextVNode(toDisplayString((_a = unref(dialog).order) == null ? void 0 : _a.buyerZipCode), 1)
                            ];
                          }),
                          _: 1
                        }),
                        createVNode(_component_ElDescriptionsItem, { label: "Dr\u017Eava" }, {
                          default: withCtx(() => {
                            var _a;
                            return [
                              createTextVNode(toDisplayString((_a = unref(dialog).order) == null ? void 0 : _a.buyerCountry), 1)
                            ];
                          }),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_ElRow, { justify: "center" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_ElDescriptions, {
                    title: "Prodava\u010D",
                    border: "",
                    style: { "min-width": "450px" },
                    column: 1,
                    class: "mt-24"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_ElDescriptionsItem, { label: "Email" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            var _a, _b;
                            if (_push5) {
                              _push5(`${ssrInterpolate((_a = unref(dialog).order) == null ? void 0 : _a.product.contactEmail)}`);
                            } else {
                              return [
                                createTextVNode(toDisplayString((_b = unref(dialog).order) == null ? void 0 : _b.product.contactEmail), 1)
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_ElDescriptionsItem, { label: "Telefon" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            var _a, _b;
                            if (_push5) {
                              _push5(`${ssrInterpolate((_a = unref(dialog).order) == null ? void 0 : _a.product.contactNumber)}`);
                            } else {
                              return [
                                createTextVNode(toDisplayString((_b = unref(dialog).order) == null ? void 0 : _b.product.contactNumber), 1)
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_ElDescriptionsItem, { label: "Mjesto" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            var _a, _b;
                            if (_push5) {
                              _push5(`${ssrInterpolate((_a = unref(dialog).order) == null ? void 0 : _a.product.locationPlace)}`);
                            } else {
                              return [
                                createTextVNode(toDisplayString((_b = unref(dialog).order) == null ? void 0 : _b.product.locationPlace), 1)
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_ElDescriptionsItem, { label: "Dr\u017Eava" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            var _a, _b;
                            if (_push5) {
                              _push5(`${ssrInterpolate((_a = unref(dialog).order) == null ? void 0 : _a.product.locationCountry)}`);
                            } else {
                              return [
                                createTextVNode(toDisplayString((_b = unref(dialog).order) == null ? void 0 : _b.product.locationCountry), 1)
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_ElDescriptionsItem, { label: "Email" }, {
                            default: withCtx(() => {
                              var _a;
                              return [
                                createTextVNode(toDisplayString((_a = unref(dialog).order) == null ? void 0 : _a.product.contactEmail), 1)
                              ];
                            }),
                            _: 1
                          }),
                          createVNode(_component_ElDescriptionsItem, { label: "Telefon" }, {
                            default: withCtx(() => {
                              var _a;
                              return [
                                createTextVNode(toDisplayString((_a = unref(dialog).order) == null ? void 0 : _a.product.contactNumber), 1)
                              ];
                            }),
                            _: 1
                          }),
                          createVNode(_component_ElDescriptionsItem, { label: "Mjesto" }, {
                            default: withCtx(() => {
                              var _a;
                              return [
                                createTextVNode(toDisplayString((_a = unref(dialog).order) == null ? void 0 : _a.product.locationPlace), 1)
                              ];
                            }),
                            _: 1
                          }),
                          createVNode(_component_ElDescriptionsItem, { label: "Dr\u017Eava" }, {
                            default: withCtx(() => {
                              var _a;
                              return [
                                createTextVNode(toDisplayString((_a = unref(dialog).order) == null ? void 0 : _a.product.locationCountry), 1)
                              ];
                            }),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_ElDescriptions, {
                      title: "Prodava\u010D",
                      border: "",
                      style: { "min-width": "450px" },
                      column: 1,
                      class: "mt-24"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_ElDescriptionsItem, { label: "Email" }, {
                          default: withCtx(() => {
                            var _a;
                            return [
                              createTextVNode(toDisplayString((_a = unref(dialog).order) == null ? void 0 : _a.product.contactEmail), 1)
                            ];
                          }),
                          _: 1
                        }),
                        createVNode(_component_ElDescriptionsItem, { label: "Telefon" }, {
                          default: withCtx(() => {
                            var _a;
                            return [
                              createTextVNode(toDisplayString((_a = unref(dialog).order) == null ? void 0 : _a.product.contactNumber), 1)
                            ];
                          }),
                          _: 1
                        }),
                        createVNode(_component_ElDescriptionsItem, { label: "Mjesto" }, {
                          default: withCtx(() => {
                            var _a;
                            return [
                              createTextVNode(toDisplayString((_a = unref(dialog).order) == null ? void 0 : _a.product.locationPlace), 1)
                            ];
                          }),
                          _: 1
                        }),
                        createVNode(_component_ElDescriptionsItem, { label: "Dr\u017Eava" }, {
                          default: withCtx(() => {
                            var _a;
                            return [
                              createTextVNode(toDisplayString((_a = unref(dialog).order) == null ? void 0 : _a.product.locationCountry), 1)
                            ];
                          }),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_ElRow, {
              justify: "center",
              class: "mt-24 mb-24"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_ElDescriptions, {
                    title: "Narud\u017Eba",
                    border: "",
                    style: { "min-width": "450px" },
                    column: 1
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_ElDescriptionsItem, { label: "ID Narud\u017Ebe" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            var _a, _b;
                            if (_push5) {
                              _push5(`${ssrInterpolate((_a = unref(dialog).order) == null ? void 0 : _a.id)}`);
                            } else {
                              return [
                                createTextVNode(toDisplayString((_b = unref(dialog).order) == null ? void 0 : _b.id), 1)
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_ElDescriptionsItem, { label: "Proizvod" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            var _a, _b;
                            if (_push5) {
                              _push5(`${ssrInterpolate((_a = unref(dialog).order) == null ? void 0 : _a.product.name)}`);
                            } else {
                              return [
                                createTextVNode(toDisplayString((_b = unref(dialog).order) == null ? void 0 : _b.product.name), 1)
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_ElDescriptionsItem, { label: "Cijena po jedinici" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            var _a, _b;
                            if (_push5) {
                              _push5(`${ssrInterpolate((_a = unref(dialog).order) == null ? void 0 : _a.product.price)} \u20AC `);
                            } else {
                              return [
                                createTextVNode(toDisplayString((_b = unref(dialog).order) == null ? void 0 : _b.product.price) + " \u20AC ", 1)
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_ElDescriptionsItem, { label: "ID proizvoda" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            var _a, _b;
                            if (_push5) {
                              _push5(`${ssrInterpolate((_a = unref(dialog).order) == null ? void 0 : _a.id)}`);
                            } else {
                              return [
                                createTextVNode(toDisplayString((_b = unref(dialog).order) == null ? void 0 : _b.id), 1)
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_ElDescriptionsItem, { label: "Na\u010Din pla\u0107anja" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            var _a, _b;
                            if (_push5) {
                              _push5(`${ssrInterpolate((_a = unref(dialog).order) == null ? void 0 : _a.payment)}`);
                            } else {
                              return [
                                createTextVNode(toDisplayString((_b = unref(dialog).order) == null ? void 0 : _b.payment), 1)
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_ElDescriptionsItem, { label: "Opis" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            var _a, _b;
                            if (_push5) {
                              _push5(`${ssrInterpolate(((_a = unref(dialog).order) == null ? void 0 : _a.description) || "-")}`);
                            } else {
                              return [
                                createTextVNode(toDisplayString(((_b = unref(dialog).order) == null ? void 0 : _b.description) || "-"), 1)
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_ElDescriptionsItem, { label: "Koli\u010Dina" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            var _a, _b;
                            if (_push5) {
                              _push5(`${ssrInterpolate((_a = unref(dialog).order) == null ? void 0 : _a.quantity)}`);
                            } else {
                              return [
                                createTextVNode(toDisplayString((_b = unref(dialog).order) == null ? void 0 : _b.quantity), 1)
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_ElDescriptionsItem, { label: "Ukupna cijena" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            var _a, _b;
                            if (_push5) {
                              _push5(`${ssrInterpolate((_a = unref(dialog).order) == null ? void 0 : _a.totalPrice)} \u20AC `);
                            } else {
                              return [
                                createTextVNode(toDisplayString((_b = unref(dialog).order) == null ? void 0 : _b.totalPrice) + " \u20AC ", 1)
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_ElDescriptionsItem, { label: "Vrijeme narud\u017Ebe" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            var _a, _b;
                            if (_push5) {
                              _push5(`${ssrInterpolate(("formatISOToDatetime" in _ctx ? _ctx.formatISOToDatetime : unref(formatISOToDatetime))((_a = unref(dialog).order) == null ? void 0 : _a.createdAt))}`);
                            } else {
                              return [
                                createTextVNode(toDisplayString(("formatISOToDatetime" in _ctx ? _ctx.formatISOToDatetime : unref(formatISOToDatetime))((_b = unref(dialog).order) == null ? void 0 : _b.createdAt)), 1)
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_ElDescriptionsItem, { label: "ID Narud\u017Ebe" }, {
                            default: withCtx(() => {
                              var _a;
                              return [
                                createTextVNode(toDisplayString((_a = unref(dialog).order) == null ? void 0 : _a.id), 1)
                              ];
                            }),
                            _: 1
                          }),
                          createVNode(_component_ElDescriptionsItem, { label: "Proizvod" }, {
                            default: withCtx(() => {
                              var _a;
                              return [
                                createTextVNode(toDisplayString((_a = unref(dialog).order) == null ? void 0 : _a.product.name), 1)
                              ];
                            }),
                            _: 1
                          }),
                          createVNode(_component_ElDescriptionsItem, { label: "Cijena po jedinici" }, {
                            default: withCtx(() => {
                              var _a;
                              return [
                                createTextVNode(toDisplayString((_a = unref(dialog).order) == null ? void 0 : _a.product.price) + " \u20AC ", 1)
                              ];
                            }),
                            _: 1
                          }),
                          createVNode(_component_ElDescriptionsItem, { label: "ID proizvoda" }, {
                            default: withCtx(() => {
                              var _a;
                              return [
                                createTextVNode(toDisplayString((_a = unref(dialog).order) == null ? void 0 : _a.id), 1)
                              ];
                            }),
                            _: 1
                          }),
                          createVNode(_component_ElDescriptionsItem, { label: "Na\u010Din pla\u0107anja" }, {
                            default: withCtx(() => {
                              var _a;
                              return [
                                createTextVNode(toDisplayString((_a = unref(dialog).order) == null ? void 0 : _a.payment), 1)
                              ];
                            }),
                            _: 1
                          }),
                          createVNode(_component_ElDescriptionsItem, { label: "Opis" }, {
                            default: withCtx(() => {
                              var _a;
                              return [
                                createTextVNode(toDisplayString(((_a = unref(dialog).order) == null ? void 0 : _a.description) || "-"), 1)
                              ];
                            }),
                            _: 1
                          }),
                          createVNode(_component_ElDescriptionsItem, { label: "Koli\u010Dina" }, {
                            default: withCtx(() => {
                              var _a;
                              return [
                                createTextVNode(toDisplayString((_a = unref(dialog).order) == null ? void 0 : _a.quantity), 1)
                              ];
                            }),
                            _: 1
                          }),
                          createVNode(_component_ElDescriptionsItem, { label: "Ukupna cijena" }, {
                            default: withCtx(() => {
                              var _a;
                              return [
                                createTextVNode(toDisplayString((_a = unref(dialog).order) == null ? void 0 : _a.totalPrice) + " \u20AC ", 1)
                              ];
                            }),
                            _: 1
                          }),
                          createVNode(_component_ElDescriptionsItem, { label: "Vrijeme narud\u017Ebe" }, {
                            default: withCtx(() => {
                              var _a;
                              return [
                                createTextVNode(toDisplayString(("formatISOToDatetime" in _ctx ? _ctx.formatISOToDatetime : unref(formatISOToDatetime))((_a = unref(dialog).order) == null ? void 0 : _a.createdAt)), 1)
                              ];
                            }),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_ElDescriptions, {
                      title: "Narud\u017Eba",
                      border: "",
                      style: { "min-width": "450px" },
                      column: 1
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_ElDescriptionsItem, { label: "ID Narud\u017Ebe" }, {
                          default: withCtx(() => {
                            var _a;
                            return [
                              createTextVNode(toDisplayString((_a = unref(dialog).order) == null ? void 0 : _a.id), 1)
                            ];
                          }),
                          _: 1
                        }),
                        createVNode(_component_ElDescriptionsItem, { label: "Proizvod" }, {
                          default: withCtx(() => {
                            var _a;
                            return [
                              createTextVNode(toDisplayString((_a = unref(dialog).order) == null ? void 0 : _a.product.name), 1)
                            ];
                          }),
                          _: 1
                        }),
                        createVNode(_component_ElDescriptionsItem, { label: "Cijena po jedinici" }, {
                          default: withCtx(() => {
                            var _a;
                            return [
                              createTextVNode(toDisplayString((_a = unref(dialog).order) == null ? void 0 : _a.product.price) + " \u20AC ", 1)
                            ];
                          }),
                          _: 1
                        }),
                        createVNode(_component_ElDescriptionsItem, { label: "ID proizvoda" }, {
                          default: withCtx(() => {
                            var _a;
                            return [
                              createTextVNode(toDisplayString((_a = unref(dialog).order) == null ? void 0 : _a.id), 1)
                            ];
                          }),
                          _: 1
                        }),
                        createVNode(_component_ElDescriptionsItem, { label: "Na\u010Din pla\u0107anja" }, {
                          default: withCtx(() => {
                            var _a;
                            return [
                              createTextVNode(toDisplayString((_a = unref(dialog).order) == null ? void 0 : _a.payment), 1)
                            ];
                          }),
                          _: 1
                        }),
                        createVNode(_component_ElDescriptionsItem, { label: "Opis" }, {
                          default: withCtx(() => {
                            var _a;
                            return [
                              createTextVNode(toDisplayString(((_a = unref(dialog).order) == null ? void 0 : _a.description) || "-"), 1)
                            ];
                          }),
                          _: 1
                        }),
                        createVNode(_component_ElDescriptionsItem, { label: "Koli\u010Dina" }, {
                          default: withCtx(() => {
                            var _a;
                            return [
                              createTextVNode(toDisplayString((_a = unref(dialog).order) == null ? void 0 : _a.quantity), 1)
                            ];
                          }),
                          _: 1
                        }),
                        createVNode(_component_ElDescriptionsItem, { label: "Ukupna cijena" }, {
                          default: withCtx(() => {
                            var _a;
                            return [
                              createTextVNode(toDisplayString((_a = unref(dialog).order) == null ? void 0 : _a.totalPrice) + " \u20AC ", 1)
                            ];
                          }),
                          _: 1
                        }),
                        createVNode(_component_ElDescriptionsItem, { label: "Vrijeme narud\u017Ebe" }, {
                          default: withCtx(() => {
                            var _a;
                            return [
                              createTextVNode(toDisplayString(("formatISOToDatetime" in _ctx ? _ctx.formatISOToDatetime : unref(formatISOToDatetime))((_a = unref(dialog).order) == null ? void 0 : _a.createdAt)), 1)
                            ];
                          }),
                          _: 1
                        })
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
              createVNode(_component_ElRow, { justify: "center" }, {
                default: withCtx(() => [
                  createVNode(_component_ElDescriptions, {
                    title: "Kupac",
                    border: "",
                    style: { "min-width": "450px" },
                    column: 1
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_ElDescriptionsItem, { label: "Ime i prezime" }, {
                        default: withCtx(() => {
                          var _a;
                          return [
                            createTextVNode(toDisplayString((_a = unref(dialog).order) == null ? void 0 : _a.buyerFullname), 1)
                          ];
                        }),
                        _: 1
                      }),
                      createVNode(_component_ElDescriptionsItem, { label: "Email" }, {
                        default: withCtx(() => {
                          var _a;
                          return [
                            createTextVNode(toDisplayString((_a = unref(dialog).order) == null ? void 0 : _a.buyerEmail), 1)
                          ];
                        }),
                        _: 1
                      }),
                      createVNode(_component_ElDescriptionsItem, { label: "Telefon" }, {
                        default: withCtx(() => {
                          var _a;
                          return [
                            createTextVNode(toDisplayString(((_a = unref(dialog).order) == null ? void 0 : _a.buyerNumber) || "-"), 1)
                          ];
                        }),
                        _: 1
                      }),
                      createVNode(_component_ElDescriptionsItem, { label: "Adresa" }, {
                        default: withCtx(() => {
                          var _a;
                          return [
                            createTextVNode(toDisplayString((_a = unref(dialog).order) == null ? void 0 : _a.buyerAddress), 1)
                          ];
                        }),
                        _: 1
                      }),
                      createVNode(_component_ElDescriptionsItem, { label: "Mjesto" }, {
                        default: withCtx(() => {
                          var _a;
                          return [
                            createTextVNode(toDisplayString((_a = unref(dialog).order) == null ? void 0 : _a.buyerPlace), 1)
                          ];
                        }),
                        _: 1
                      }),
                      createVNode(_component_ElDescriptionsItem, { label: "Po\u0161tansi broj" }, {
                        default: withCtx(() => {
                          var _a;
                          return [
                            createTextVNode(toDisplayString((_a = unref(dialog).order) == null ? void 0 : _a.buyerZipCode), 1)
                          ];
                        }),
                        _: 1
                      }),
                      createVNode(_component_ElDescriptionsItem, { label: "Dr\u017Eava" }, {
                        default: withCtx(() => {
                          var _a;
                          return [
                            createTextVNode(toDisplayString((_a = unref(dialog).order) == null ? void 0 : _a.buyerCountry), 1)
                          ];
                        }),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(_component_ElRow, { justify: "center" }, {
                default: withCtx(() => [
                  createVNode(_component_ElDescriptions, {
                    title: "Prodava\u010D",
                    border: "",
                    style: { "min-width": "450px" },
                    column: 1,
                    class: "mt-24"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_ElDescriptionsItem, { label: "Email" }, {
                        default: withCtx(() => {
                          var _a;
                          return [
                            createTextVNode(toDisplayString((_a = unref(dialog).order) == null ? void 0 : _a.product.contactEmail), 1)
                          ];
                        }),
                        _: 1
                      }),
                      createVNode(_component_ElDescriptionsItem, { label: "Telefon" }, {
                        default: withCtx(() => {
                          var _a;
                          return [
                            createTextVNode(toDisplayString((_a = unref(dialog).order) == null ? void 0 : _a.product.contactNumber), 1)
                          ];
                        }),
                        _: 1
                      }),
                      createVNode(_component_ElDescriptionsItem, { label: "Mjesto" }, {
                        default: withCtx(() => {
                          var _a;
                          return [
                            createTextVNode(toDisplayString((_a = unref(dialog).order) == null ? void 0 : _a.product.locationPlace), 1)
                          ];
                        }),
                        _: 1
                      }),
                      createVNode(_component_ElDescriptionsItem, { label: "Dr\u017Eava" }, {
                        default: withCtx(() => {
                          var _a;
                          return [
                            createTextVNode(toDisplayString((_a = unref(dialog).order) == null ? void 0 : _a.product.locationCountry), 1)
                          ];
                        }),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(_component_ElRow, {
                justify: "center",
                class: "mt-24 mb-24"
              }, {
                default: withCtx(() => [
                  createVNode(_component_ElDescriptions, {
                    title: "Narud\u017Eba",
                    border: "",
                    style: { "min-width": "450px" },
                    column: 1
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_ElDescriptionsItem, { label: "ID Narud\u017Ebe" }, {
                        default: withCtx(() => {
                          var _a;
                          return [
                            createTextVNode(toDisplayString((_a = unref(dialog).order) == null ? void 0 : _a.id), 1)
                          ];
                        }),
                        _: 1
                      }),
                      createVNode(_component_ElDescriptionsItem, { label: "Proizvod" }, {
                        default: withCtx(() => {
                          var _a;
                          return [
                            createTextVNode(toDisplayString((_a = unref(dialog).order) == null ? void 0 : _a.product.name), 1)
                          ];
                        }),
                        _: 1
                      }),
                      createVNode(_component_ElDescriptionsItem, { label: "Cijena po jedinici" }, {
                        default: withCtx(() => {
                          var _a;
                          return [
                            createTextVNode(toDisplayString((_a = unref(dialog).order) == null ? void 0 : _a.product.price) + " \u20AC ", 1)
                          ];
                        }),
                        _: 1
                      }),
                      createVNode(_component_ElDescriptionsItem, { label: "ID proizvoda" }, {
                        default: withCtx(() => {
                          var _a;
                          return [
                            createTextVNode(toDisplayString((_a = unref(dialog).order) == null ? void 0 : _a.id), 1)
                          ];
                        }),
                        _: 1
                      }),
                      createVNode(_component_ElDescriptionsItem, { label: "Na\u010Din pla\u0107anja" }, {
                        default: withCtx(() => {
                          var _a;
                          return [
                            createTextVNode(toDisplayString((_a = unref(dialog).order) == null ? void 0 : _a.payment), 1)
                          ];
                        }),
                        _: 1
                      }),
                      createVNode(_component_ElDescriptionsItem, { label: "Opis" }, {
                        default: withCtx(() => {
                          var _a;
                          return [
                            createTextVNode(toDisplayString(((_a = unref(dialog).order) == null ? void 0 : _a.description) || "-"), 1)
                          ];
                        }),
                        _: 1
                      }),
                      createVNode(_component_ElDescriptionsItem, { label: "Koli\u010Dina" }, {
                        default: withCtx(() => {
                          var _a;
                          return [
                            createTextVNode(toDisplayString((_a = unref(dialog).order) == null ? void 0 : _a.quantity), 1)
                          ];
                        }),
                        _: 1
                      }),
                      createVNode(_component_ElDescriptionsItem, { label: "Ukupna cijena" }, {
                        default: withCtx(() => {
                          var _a;
                          return [
                            createTextVNode(toDisplayString((_a = unref(dialog).order) == null ? void 0 : _a.totalPrice) + " \u20AC ", 1)
                          ];
                        }),
                        _: 1
                      }),
                      createVNode(_component_ElDescriptionsItem, { label: "Vrijeme narud\u017Ebe" }, {
                        default: withCtx(() => {
                          var _a;
                          return [
                            createTextVNode(toDisplayString(("formatISOToDatetime" in _ctx ? _ctx.formatISOToDatetime : unref(formatISOToDatetime))((_a = unref(dialog).order) == null ? void 0 : _a.createdAt)), 1)
                          ];
                        }),
                        _: 1
                      })
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
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/backoffice/tabs/BackofficeOrdersTab.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "BackofficeAdsGeneralSettings",
  __ssrInlineRender: true,
  props: {
    comSettings: {}
  },
  emits: ["save"],
  setup(__props, { emit: __emit }) {
    const emit = __emit;
    const { $axios } = useNuxtApp();
    const settings = ref({
      "dashboard-side": false,
      "footer-slider": false,
      "footer-large": false
    });
    const isButtonDisabled = ref(true);
    const buttonLoading = ref(false);
    async function saveSettings() {
      buttonLoading.value = true;
      try {
        await $axios.put(`/ad/settings`, settings.value);
        emit("save");
        ElNotification({
          type: "success",
          message: "Uspje\u0161no ste spremili promijene postavki reklama.",
          duration: 3e3
        });
      } catch (error) {
        console.error("API Error:", error);
      } finally {
        buttonLoading.value = false;
      }
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ElRow = ElRow;
      const _component_ElSwitch = ElSwitch;
      const _component_ElButton = ElButton;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "backoffice-page" }, _attrs))} data-v-509c6c73>`);
      _push(ssrRenderComponent(_component_ElRow, {
        justify: "center",
        align: "middle"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="color-primary" data-v-509c6c73${_scopeId}><b data-v-509c6c73${_scopeId}>Op\u0107enite postavke</b></span>`);
          } else {
            return [
              createVNode("span", { class: "color-primary" }, [
                createVNode("b", null, "Op\u0107enite postavke")
              ])
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
            _push2(`<span class="switch-label" data-v-509c6c73${_scopeId}>Naslovnica bo\u010Dni</span>`);
            _push2(ssrRenderComponent(_component_ElSwitch, {
              modelValue: unref(settings)["dashboard-side"],
              "onUpdate:modelValue": ($event) => unref(settings)["dashboard-side"] = $event,
              "active-text": "Prika\u017Ei",
              "inactive-text": "Sakrij",
              onChange: ($event) => isButtonDisabled.value = false
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode("span", { class: "switch-label" }, "Naslovnica bo\u010Dni"),
              createVNode(_component_ElSwitch, {
                modelValue: unref(settings)["dashboard-side"],
                "onUpdate:modelValue": ($event) => unref(settings)["dashboard-side"] = $event,
                "active-text": "Prika\u017Ei",
                "inactive-text": "Sakrij",
                onChange: ($event) => isButtonDisabled.value = false
              }, null, 8, ["modelValue", "onUpdate:modelValue", "onChange"])
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
            _push2(`<span class="switch-label" data-v-509c6c73${_scopeId}>Klizno podno\u017Eje</span>`);
            _push2(ssrRenderComponent(_component_ElSwitch, {
              modelValue: unref(settings)["footer-slider"],
              "onUpdate:modelValue": ($event) => unref(settings)["footer-slider"] = $event,
              "active-text": "Prika\u017Ei",
              "inactive-text": "Sakrij",
              onChange: ($event) => isButtonDisabled.value = false
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode("span", { class: "switch-label" }, "Klizno podno\u017Eje"),
              createVNode(_component_ElSwitch, {
                modelValue: unref(settings)["footer-slider"],
                "onUpdate:modelValue": ($event) => unref(settings)["footer-slider"] = $event,
                "active-text": "Prika\u017Ei",
                "inactive-text": "Sakrij",
                onChange: ($event) => isButtonDisabled.value = false
              }, null, 8, ["modelValue", "onUpdate:modelValue", "onChange"])
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
            _push2(`<span class="switch-label" data-v-509c6c73${_scopeId}>Podno\u017Eje velika</span>`);
            _push2(ssrRenderComponent(_component_ElSwitch, {
              modelValue: unref(settings)["footer-large"],
              "onUpdate:modelValue": ($event) => unref(settings)["footer-large"] = $event,
              "active-text": "Prika\u017Ei",
              "inactive-text": "Sakrij",
              onChange: ($event) => isButtonDisabled.value = false
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode("span", { class: "switch-label" }, "Podno\u017Eje velika"),
              createVNode(_component_ElSwitch, {
                modelValue: unref(settings)["footer-large"],
                "onUpdate:modelValue": ($event) => unref(settings)["footer-large"] = $event,
                "active-text": "Prika\u017Ei",
                "inactive-text": "Sakrij",
                onChange: ($event) => isButtonDisabled.value = false
              }, null, 8, ["modelValue", "onUpdate:modelValue", "onChange"])
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
            _push2(ssrRenderComponent(_component_ElButton, {
              type: "primary",
              disabled: unref(isButtonDisabled),
              loading: unref(buttonLoading),
              onClick: saveSettings
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Spremi `);
                } else {
                  return [
                    createTextVNode(" Spremi ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_ElButton, {
                type: "primary",
                disabled: unref(isButtonDisabled),
                loading: unref(buttonLoading),
                onClick: saveSettings
              }, {
                default: withCtx(() => [
                  createTextVNode(" Spremi ")
                ]),
                _: 1
              }, 8, ["disabled", "loading"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/backoffice/tabs/Ads/BackofficeAdsGeneralSettings.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const BackofficeAdsGeneralSettings = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["__scopeId", "data-v-509c6c73"]]);
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "BackofficeAdsSettings",
  __ssrInlineRender: true,
  props: {
    ads: {}
  },
  emits: ["save"],
  setup(__props, { emit: __emit }) {
    const emit = __emit;
    const { $axios } = useNuxtApp();
    const dialog = ref({
      isOpened: false,
      type: "edit",
      item: void 0
    });
    const form = reactive({
      id: "",
      url: "",
      imageUrl: "",
      price: 0
    });
    const ruleFormRef = ref();
    const rules = reactive({
      imageUrl: [
        {
          required: true,
          message: "Unesite link slike za reklamu",
          trigger: "blur"
        }
      ],
      price: [
        { required: true, message: "Unesite cijenu reklame", trigger: "blur" }
      ]
    });
    const buttonLoading = ref(false);
    function openDialog(type, item) {
      if (item) {
        form.id = String(item.id);
        form.imageUrl = item.imageUrl ? String(item.imageUrl) : "";
        form.url = item.url ? String(item.url) : "";
        form.price = Number(item.price);
      }
      dialog.value = {
        isOpened: true,
        type,
        item
      };
    }
    function handleCloseDialog() {
      form.id = "";
      form.imageUrl = "";
      form.url = "";
      form.price = 0;
      dialog.value.isOpened = false;
    }
    function handleSubmitButton(formEl) {
      if (dialog.value.type === "edit") handleEdit();
      else if (dialog.value.type === "remove") handleRemove();
    }
    async function handleEdit() {
      buttonLoading.value = true;
      try {
        await $axios.put(`/ad/update`, form);
        emit("save");
        ElNotification({
          type: "success",
          message: "Uspje\u0161no ste spremili promijene na reklami.",
          duration: 3e3
        });
      } catch (error) {
        console.error("API Error:", error);
      } finally {
        buttonLoading.value = false;
      }
    }
    async function handleRemove() {
      var _a;
      buttonLoading.value = true;
      try {
        await $axios.patch(`/ad/remove`, { id: (_a = dialog.value.item) == null ? void 0 : _a.id });
        emit("save");
        handleCloseDialog();
        showSuccessMessage("Uspje\u0161no ste uklonili reklamu.");
      } catch (error) {
        console.error("API Error:", error);
      } finally {
        buttonLoading.value = false;
      }
    }
    function showSuccessMessage(message) {
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ElRow = ElRow;
      const _component_ElTable = ElTable;
      const _component_ElTableColumn = ElTableColumn;
      const _component_ElTag = ElTag;
      const _component_ElButton = ElButton;
      const _component_ElIcon = ElIcon;
      const _component_ElDialog = ElDialog;
      const _component_ElForm = ElForm;
      const _component_ElFormItem = ElFormItem;
      const _component_ElInput = ElInput;
      const _component_ElInputNumber = ElInputNumber;
      const _component_ElCol = ElCol;
      _push(`<!--[--><div class="backoffice-page mt-24 mb-24">`);
      _push(ssrRenderComponent(_component_ElRow, {
        justify: "center",
        align: "middle"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="color-primary"${_scopeId}><b${_scopeId}>Reklame</b></span>`);
          } else {
            return [
              createVNode("span", { class: "color-primary" }, [
                createVNode("b", null, "Reklame")
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_ElTable, {
        data: _ctx.ads,
        stripe: "",
        "empty-text": "Nema dostupnih podataka"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_ElTableColumn, {
              label: "Pozicija",
              prop: "id"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_ElTableColumn, { label: "Status" }, {
              default: withCtx((items, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  if (items.row.imageUrl) {
                    _push3(ssrRenderComponent(_component_ElTag, { type: "success" }, {
                      default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`Aktivna`);
                        } else {
                          return [
                            createTextVNode("Aktivna")
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  } else {
                    _push3(ssrRenderComponent(_component_ElTag, { type: "danger" }, {
                      default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`Neaktivna`);
                        } else {
                          return [
                            createTextVNode("Neaktivna")
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  }
                } else {
                  return [
                    items.row.imageUrl ? (openBlock(), createBlock(_component_ElTag, {
                      key: 0,
                      type: "success"
                    }, {
                      default: withCtx(() => [
                        createTextVNode("Aktivna")
                      ]),
                      _: 1
                    })) : (openBlock(), createBlock(_component_ElTag, {
                      key: 1,
                      type: "danger"
                    }, {
                      default: withCtx(() => [
                        createTextVNode("Neaktivna")
                      ]),
                      _: 1
                    }))
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_ElTableColumn, { label: "Cijena" }, {
              default: withCtx((items, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(Number(items.row.price).toFixed(2))} \u20AC `);
                } else {
                  return [
                    createTextVNode(toDisplayString(Number(items.row.price).toFixed(2)) + " \u20AC ", 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_ElTableColumn, {
              label: "Akcije",
              width: "148",
              align: "center"
            }, {
              default: withCtx((items, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_ElButton, {
                    type: "primary",
                    plain: "",
                    onClick: ($event) => openDialog("edit", items.row)
                  }, {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_ElIcon, { size: "24" }, {
                          default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(unref(edit_default), null, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(unref(edit_default))
                              ];
                            }
                          }),
                          _: 2
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_ElIcon, { size: "24" }, {
                            default: withCtx(() => [
                              createVNode(unref(edit_default))
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_ElButton, {
                    type: "danger",
                    plain: "",
                    onClick: ($event) => openDialog("remove", items.row)
                  }, {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_ElIcon, { size: "24" }, {
                          default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(unref(delete_filled_default), null, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(unref(delete_filled_default))
                              ];
                            }
                          }),
                          _: 2
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_ElIcon, { size: "24" }, {
                            default: withCtx(() => [
                              createVNode(unref(delete_filled_default))
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_ElButton, {
                      type: "primary",
                      plain: "",
                      onClick: ($event) => openDialog("edit", items.row)
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_ElIcon, { size: "24" }, {
                          default: withCtx(() => [
                            createVNode(unref(edit_default))
                          ]),
                          _: 1
                        })
                      ]),
                      _: 2
                    }, 1032, ["onClick"]),
                    createVNode(_component_ElButton, {
                      type: "danger",
                      plain: "",
                      onClick: ($event) => openDialog("remove", items.row)
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_ElIcon, { size: "24" }, {
                          default: withCtx(() => [
                            createVNode(unref(delete_filled_default))
                          ]),
                          _: 1
                        })
                      ]),
                      _: 2
                    }, 1032, ["onClick"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_ElTableColumn, {
                label: "Pozicija",
                prop: "id"
              }),
              createVNode(_component_ElTableColumn, { label: "Status" }, {
                default: withCtx((items) => [
                  items.row.imageUrl ? (openBlock(), createBlock(_component_ElTag, {
                    key: 0,
                    type: "success"
                  }, {
                    default: withCtx(() => [
                      createTextVNode("Aktivna")
                    ]),
                    _: 1
                  })) : (openBlock(), createBlock(_component_ElTag, {
                    key: 1,
                    type: "danger"
                  }, {
                    default: withCtx(() => [
                      createTextVNode("Neaktivna")
                    ]),
                    _: 1
                  }))
                ]),
                _: 1
              }),
              createVNode(_component_ElTableColumn, { label: "Cijena" }, {
                default: withCtx((items) => [
                  createTextVNode(toDisplayString(Number(items.row.price).toFixed(2)) + " \u20AC ", 1)
                ]),
                _: 1
              }),
              createVNode(_component_ElTableColumn, {
                label: "Akcije",
                width: "148",
                align: "center"
              }, {
                default: withCtx((items) => [
                  createVNode(_component_ElButton, {
                    type: "primary",
                    plain: "",
                    onClick: ($event) => openDialog("edit", items.row)
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_ElIcon, { size: "24" }, {
                        default: withCtx(() => [
                          createVNode(unref(edit_default))
                        ]),
                        _: 1
                      })
                    ]),
                    _: 2
                  }, 1032, ["onClick"]),
                  createVNode(_component_ElButton, {
                    type: "danger",
                    plain: "",
                    onClick: ($event) => openDialog("remove", items.row)
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_ElIcon, { size: "24" }, {
                        default: withCtx(() => [
                          createVNode(unref(delete_filled_default))
                        ]),
                        _: 1
                      })
                    ]),
                    _: 2
                  }, 1032, ["onClick"])
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(_component_ElDialog, {
        modelValue: unref(dialog).isOpened,
        "onUpdate:modelValue": ($event) => unref(dialog).isOpened = $event,
        "close-on-click-modal": false,
        "destroy-on-close": "",
        fullscreen: "",
        onClose: handleCloseDialog
      }, {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_ElRow, { justify: "center" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<h3 class="color-primary"${_scopeId2}>`);
                  if (unref(dialog).type === "remove") {
                    _push3(`<span${_scopeId2}>Ukloni reklamu</span>`);
                  } else if (unref(dialog).type === "edit") {
                    _push3(`<span${_scopeId2}>Uredi reklamu</span>`);
                  } else {
                    _push3(`<!---->`);
                  }
                  _push3(`</h3>`);
                } else {
                  return [
                    createVNode("h3", { class: "color-primary" }, [
                      unref(dialog).type === "remove" ? (openBlock(), createBlock("span", { key: 0 }, "Ukloni reklamu")) : unref(dialog).type === "edit" ? (openBlock(), createBlock("span", { key: 1 }, "Uredi reklamu")) : createCommentVNode("", true)
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_ElRow, { justify: "center" }, {
                default: withCtx(() => [
                  createVNode("h3", { class: "color-primary" }, [
                    unref(dialog).type === "remove" ? (openBlock(), createBlock("span", { key: 0 }, "Ukloni reklamu")) : unref(dialog).type === "edit" ? (openBlock(), createBlock("span", { key: 1 }, "Uredi reklamu")) : createCommentVNode("", true)
                  ])
                ]),
                _: 1
              })
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (unref(dialog).type === "edit") {
              _push2(ssrRenderComponent(_component_ElRow, { justify: "center" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_ElForm, {
                      "label-position": _ctx.$viewport.isLessThan("tablet") ? "top" : "left",
                      "require-asterisk-position": "right",
                      ref_key: "ruleFormRef",
                      ref: ruleFormRef,
                      class: "form",
                      model: unref(form),
                      rules: unref(rules),
                      "label-width": "auto",
                      "status-icon": ""
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_ElFormItem, {
                            label: "Link slike",
                            prop: "imageUrl"
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(_component_ElInput, {
                                  modelValue: unref(form).imageUrl,
                                  "onUpdate:modelValue": ($event) => unref(form).imageUrl = $event,
                                  placeholder: "https://link-moje-slike.com",
                                  class: "input-width"
                                }, null, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(_component_ElInput, {
                                    modelValue: unref(form).imageUrl,
                                    "onUpdate:modelValue": ($event) => unref(form).imageUrl = $event,
                                    placeholder: "https://link-moje-slike.com",
                                    class: "input-width"
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(_component_ElFormItem, {
                            label: "Link poveznice",
                            prop: "url"
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(_component_ElInput, {
                                  modelValue: unref(form).url,
                                  "onUpdate:modelValue": ($event) => unref(form).url = $event,
                                  placeholder: "https://moja-poveznica.com",
                                  class: "input-width"
                                }, null, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(_component_ElInput, {
                                    modelValue: unref(form).url,
                                    "onUpdate:modelValue": ($event) => unref(form).url = $event,
                                    placeholder: "https://moja-poveznica.com",
                                    class: "input-width"
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(_component_ElFormItem, {
                            label: "Cijena",
                            prop: "price"
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(_component_ElInputNumber, {
                                  modelValue: unref(form).price,
                                  "onUpdate:modelValue": ($event) => unref(form).price = $event,
                                  precision: 2,
                                  placeholder: "100.00",
                                  step: 1,
                                  class: "input-width"
                                }, {
                                  suffix: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(`\u20AC`);
                                    } else {
                                      return [
                                        createTextVNode("\u20AC")
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(_component_ElInputNumber, {
                                    modelValue: unref(form).price,
                                    "onUpdate:modelValue": ($event) => unref(form).price = $event,
                                    precision: 2,
                                    placeholder: "100.00",
                                    step: 1,
                                    class: "input-width"
                                  }, {
                                    suffix: withCtx(() => [
                                      createTextVNode("\u20AC")
                                    ]),
                                    _: 1
                                  }, 8, ["modelValue", "onUpdate:modelValue"])
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(_component_ElFormItem, {
                              label: "Link slike",
                              prop: "imageUrl"
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_ElInput, {
                                  modelValue: unref(form).imageUrl,
                                  "onUpdate:modelValue": ($event) => unref(form).imageUrl = $event,
                                  placeholder: "https://link-moje-slike.com",
                                  class: "input-width"
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ]),
                              _: 1
                            }),
                            createVNode(_component_ElFormItem, {
                              label: "Link poveznice",
                              prop: "url"
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_ElInput, {
                                  modelValue: unref(form).url,
                                  "onUpdate:modelValue": ($event) => unref(form).url = $event,
                                  placeholder: "https://moja-poveznica.com",
                                  class: "input-width"
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ]),
                              _: 1
                            }),
                            createVNode(_component_ElFormItem, {
                              label: "Cijena",
                              prop: "price"
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_ElInputNumber, {
                                  modelValue: unref(form).price,
                                  "onUpdate:modelValue": ($event) => unref(form).price = $event,
                                  precision: 2,
                                  placeholder: "100.00",
                                  step: 1,
                                  class: "input-width"
                                }, {
                                  suffix: withCtx(() => [
                                    createTextVNode("\u20AC")
                                  ]),
                                  _: 1
                                }, 8, ["modelValue", "onUpdate:modelValue"])
                              ]),
                              _: 1
                            })
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
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
                        "status-icon": ""
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_ElFormItem, {
                            label: "Link slike",
                            prop: "imageUrl"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_ElInput, {
                                modelValue: unref(form).imageUrl,
                                "onUpdate:modelValue": ($event) => unref(form).imageUrl = $event,
                                placeholder: "https://link-moje-slike.com",
                                class: "input-width"
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            _: 1
                          }),
                          createVNode(_component_ElFormItem, {
                            label: "Link poveznice",
                            prop: "url"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_ElInput, {
                                modelValue: unref(form).url,
                                "onUpdate:modelValue": ($event) => unref(form).url = $event,
                                placeholder: "https://moja-poveznica.com",
                                class: "input-width"
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            _: 1
                          }),
                          createVNode(_component_ElFormItem, {
                            label: "Cijena",
                            prop: "price"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_ElInputNumber, {
                                modelValue: unref(form).price,
                                "onUpdate:modelValue": ($event) => unref(form).price = $event,
                                precision: 2,
                                placeholder: "100.00",
                                step: 1,
                                class: "input-width"
                              }, {
                                suffix: withCtx(() => [
                                  createTextVNode("\u20AC")
                                ]),
                                _: 1
                              }, 8, ["modelValue", "onUpdate:modelValue"])
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
              }, _parent2, _scopeId));
            } else if (unref(dialog).type === "remove") {
              _push2(ssrRenderComponent(_component_ElRow, {
                justify: "center",
                class: "mb-24"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_ElCol, { align: "middle" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        var _a, _b;
                        if (_push4) {
                          _push4(` Jeste li sigurni da \u017Eelite ukloniti reklamu ID: <b${_scopeId3}>${ssrInterpolate((_a = unref(dialog).item) == null ? void 0 : _a.id)}</b>? `);
                        } else {
                          return [
                            createTextVNode(" Jeste li sigurni da \u017Eelite ukloniti reklamu ID: "),
                            createVNode("b", null, toDisplayString((_b = unref(dialog).item) == null ? void 0 : _b.id), 1),
                            createTextVNode("? ")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(_component_ElCol, {
                      align: "middle",
                      class: "mt-12"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`Reklama \u0107e u tom slu\u010Daju ostati prazna.`);
                        } else {
                          return [
                            createTextVNode("Reklama \u0107e u tom slu\u010Daju ostati prazna.")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_ElCol, { align: "middle" }, {
                        default: withCtx(() => {
                          var _a;
                          return [
                            createTextVNode(" Jeste li sigurni da \u017Eelite ukloniti reklamu ID: "),
                            createVNode("b", null, toDisplayString((_a = unref(dialog).item) == null ? void 0 : _a.id), 1),
                            createTextVNode("? ")
                          ];
                        }),
                        _: 1
                      }),
                      createVNode(_component_ElCol, {
                        align: "middle",
                        class: "mt-12"
                      }, {
                        default: withCtx(() => [
                          createTextVNode("Reklama \u0107e u tom slu\u010Daju ostati prazna.")
                        ]),
                        _: 1
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            if (unref(buttonLoading)) {
              _push2(ssrRenderComponent(_component_ElRow, {
                justify: "center",
                class: "color-primary mb-12"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(` Ne prekidajte u\u010Ditavanje podataka! `);
                  } else {
                    return [
                      createTextVNode(" Ne prekidajte u\u010Ditavanje podataka! ")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            _push2(ssrRenderComponent(_component_ElRow, {
              justify: "center",
              class: "mt-16"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_ElButton, {
                    type: unref(dialog).type === "edit" ? "primary" : "danger",
                    plain: "",
                    onClick: ($event) => handleSubmitButton(unref(ruleFormRef)),
                    loading: unref(buttonLoading)
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        if (unref(dialog).type === "edit") {
                          _push4(`<span${_scopeId3}>Uredi</span>`);
                        } else if (unref(dialog).type === "remove") {
                          _push4(`<span${_scopeId3}>Ukloni</span>`);
                        } else {
                          _push4(`<!---->`);
                        }
                      } else {
                        return [
                          unref(dialog).type === "edit" ? (openBlock(), createBlock("span", { key: 0 }, "Uredi")) : unref(dialog).type === "remove" ? (openBlock(), createBlock("span", { key: 1 }, "Ukloni")) : createCommentVNode("", true)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_ElButton, {
                      type: unref(dialog).type === "edit" ? "primary" : "danger",
                      plain: "",
                      onClick: ($event) => handleSubmitButton(unref(ruleFormRef)),
                      loading: unref(buttonLoading)
                    }, {
                      default: withCtx(() => [
                        unref(dialog).type === "edit" ? (openBlock(), createBlock("span", { key: 0 }, "Uredi")) : unref(dialog).type === "remove" ? (openBlock(), createBlock("span", { key: 1 }, "Ukloni")) : createCommentVNode("", true)
                      ]),
                      _: 1
                    }, 8, ["type", "onClick", "loading"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              unref(dialog).type === "edit" ? (openBlock(), createBlock(_component_ElRow, {
                key: 0,
                justify: "center"
              }, {
                default: withCtx(() => [
                  createVNode(_component_ElForm, {
                    "label-position": _ctx.$viewport.isLessThan("tablet") ? "top" : "left",
                    "require-asterisk-position": "right",
                    ref_key: "ruleFormRef",
                    ref: ruleFormRef,
                    class: "form",
                    model: unref(form),
                    rules: unref(rules),
                    "label-width": "auto",
                    "status-icon": ""
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_ElFormItem, {
                        label: "Link slike",
                        prop: "imageUrl"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_ElInput, {
                            modelValue: unref(form).imageUrl,
                            "onUpdate:modelValue": ($event) => unref(form).imageUrl = $event,
                            placeholder: "https://link-moje-slike.com",
                            class: "input-width"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        _: 1
                      }),
                      createVNode(_component_ElFormItem, {
                        label: "Link poveznice",
                        prop: "url"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_ElInput, {
                            modelValue: unref(form).url,
                            "onUpdate:modelValue": ($event) => unref(form).url = $event,
                            placeholder: "https://moja-poveznica.com",
                            class: "input-width"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        _: 1
                      }),
                      createVNode(_component_ElFormItem, {
                        label: "Cijena",
                        prop: "price"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_ElInputNumber, {
                            modelValue: unref(form).price,
                            "onUpdate:modelValue": ($event) => unref(form).price = $event,
                            precision: 2,
                            placeholder: "100.00",
                            step: 1,
                            class: "input-width"
                          }, {
                            suffix: withCtx(() => [
                              createTextVNode("\u20AC")
                            ]),
                            _: 1
                          }, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }, 8, ["label-position", "model", "rules"])
                ]),
                _: 1
              })) : unref(dialog).type === "remove" ? (openBlock(), createBlock(_component_ElRow, {
                key: 1,
                justify: "center",
                class: "mb-24"
              }, {
                default: withCtx(() => [
                  createVNode(_component_ElCol, { align: "middle" }, {
                    default: withCtx(() => {
                      var _a;
                      return [
                        createTextVNode(" Jeste li sigurni da \u017Eelite ukloniti reklamu ID: "),
                        createVNode("b", null, toDisplayString((_a = unref(dialog).item) == null ? void 0 : _a.id), 1),
                        createTextVNode("? ")
                      ];
                    }),
                    _: 1
                  }),
                  createVNode(_component_ElCol, {
                    align: "middle",
                    class: "mt-12"
                  }, {
                    default: withCtx(() => [
                      createTextVNode("Reklama \u0107e u tom slu\u010Daju ostati prazna.")
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })) : createCommentVNode("", true),
              unref(buttonLoading) ? (openBlock(), createBlock(_component_ElRow, {
                key: 2,
                justify: "center",
                class: "color-primary mb-12"
              }, {
                default: withCtx(() => [
                  createTextVNode(" Ne prekidajte u\u010Ditavanje podataka! ")
                ]),
                _: 1
              })) : createCommentVNode("", true),
              createVNode(_component_ElRow, {
                justify: "center",
                class: "mt-16"
              }, {
                default: withCtx(() => [
                  createVNode(_component_ElButton, {
                    type: unref(dialog).type === "edit" ? "primary" : "danger",
                    plain: "",
                    onClick: ($event) => handleSubmitButton(unref(ruleFormRef)),
                    loading: unref(buttonLoading)
                  }, {
                    default: withCtx(() => [
                      unref(dialog).type === "edit" ? (openBlock(), createBlock("span", { key: 0 }, "Uredi")) : unref(dialog).type === "remove" ? (openBlock(), createBlock("span", { key: 1 }, "Ukloni")) : createCommentVNode("", true)
                    ]),
                    _: 1
                  }, 8, ["type", "onClick", "loading"])
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/backoffice/tabs/Ads/BackofficeAdsSettings.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "BackofficeAdsTab",
  __ssrInlineRender: true,
  setup(__props) {
    const { $axios } = useNuxtApp();
    const isLoading = ref(true);
    const comSettings = ref();
    const ads = ref();
    async function getAdDetails() {
      isLoading.value = true;
      try {
        const response = await $axios.get(`/ad`);
        comSettings.value = response.data.adSettings;
        ads.value = response.data.ads;
      } catch (error) {
        console.error("API Error:", error);
      } finally {
        isLoading.value = false;
      }
    }
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      const _component_ElRow = ElRow;
      const _directive_loading = vLoading;
      let _temp0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "backoffice-page" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_ElRow, {
        justify: "center",
        align: "middle",
        class: "w-100"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h3 class="color-primary"${_scopeId}>Reklame</h3>`);
          } else {
            return [
              createVNode("h3", { class: "color-primary" }, "Reklame")
            ];
          }
        }),
        _: 1
      }, _parent));
      if (unref(isLoading)) {
        _push(`<div${ssrRenderAttrs(_temp0 = mergeProps({ "element-loading-text": "U\u010Ditavanje..." }, ssrGetDirectiveProps(_ctx, _directive_loading, true, void 0, {
          fullscreen: true,
          lock: true
        })))}>${"textContent" in _temp0 ? ssrInterpolate(_temp0.textContent) : (_a = _temp0.innerHTML) != null ? _a : ""}</div>`);
      } else {
        _push(`<!--[-->`);
        _push(ssrRenderComponent(BackofficeAdsGeneralSettings, {
          "com-settings": unref(comSettings),
          onSave: getAdDetails
        }, null, _parent));
        _push(ssrRenderComponent(_sfc_main$5, {
          ads: unref(ads),
          onSave: getAdDetails
        }, null, _parent));
        _push(ssrRenderComponent(_component_ElRow, {
          justify: "center",
          align: "middle",
          class: "mt-24"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<img src="https://res.cloudinary.com/dtp08anpy/image/upload/v1747073768/1_rqrx5b_obajrn.png" style="${ssrRenderStyle({ "width": "60dvw" })}"${_scopeId}>`);
            } else {
              return [
                createVNode("img", {
                  src: "https://res.cloudinary.com/dtp08anpy/image/upload/v1747073768/1_rqrx5b_obajrn.png",
                  style: { "width": "60dvw" }
                })
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(_component_ElRow, {
          justify: "center",
          align: "middle",
          class: "mt-24"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<img src="https://res.cloudinary.com/dtp08anpy/image/upload/v1747073768/2_o3xcor_euc3om.png" style="${ssrRenderStyle({ "width": "60dvw" })}"${_scopeId}>`);
            } else {
              return [
                createVNode("img", {
                  src: "https://res.cloudinary.com/dtp08anpy/image/upload/v1747073768/2_o3xcor_euc3om.png",
                  style: { "width": "60dvw" }
                })
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
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/backoffice/tabs/Ads/BackofficeAdsTab.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "BackofficeLoggedIn",
  __ssrInlineRender: true,
  setup(__props) {
    const userStore = useUserStore();
    const activeTab = ref();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ElRow = ElRow;
      const _component_ElCol = ElCol;
      const _component_ElButton = ElButton;
      const _component_ElIcon = ElIcon;
      const _component_ElDivider = ElDivider;
      const _component_ElTabs = ElTabs;
      const _component_ElTabPane = ElTabPane;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "page-container" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_ElRow, {
        justify: "center",
        align: "middle"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_ElCol, { span: 4 }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_ElCol, { span: 16 }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_ElRow, {
                    justify: "center",
                    align: "middle"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<h2 class="color-primary"${_scopeId3}>Backoffice</h2>`);
                      } else {
                        return [
                          createVNode("h2", { class: "color-primary" }, "Backoffice")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_ElRow, {
                      justify: "center",
                      align: "middle"
                    }, {
                      default: withCtx(() => [
                        createVNode("h2", { class: "color-primary" }, "Backoffice")
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_ElCol, {
              span: 4,
              align: "end"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_ElButton, {
                    type: "primary",
                    plain: "",
                    class: "mr-24",
                    onClick: ($event) => unref(userStore).logout()
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_ElIcon, { size: 22 }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(unref(switch_button_default), null, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(unref(switch_button_default))
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_ElIcon, { size: 22 }, {
                            default: withCtx(() => [
                              createVNode(unref(switch_button_default))
                            ]),
                            _: 1
                          })
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
                      class: "mr-24",
                      onClick: ($event) => unref(userStore).logout()
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_ElIcon, { size: 22 }, {
                          default: withCtx(() => [
                            createVNode(unref(switch_button_default))
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }, 8, ["onClick"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_ElCol, { span: 4 }),
              createVNode(_component_ElCol, { span: 16 }, {
                default: withCtx(() => [
                  createVNode(_component_ElRow, {
                    justify: "center",
                    align: "middle"
                  }, {
                    default: withCtx(() => [
                      createVNode("h2", { class: "color-primary" }, "Backoffice")
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(_component_ElCol, {
                span: 4,
                align: "end"
              }, {
                default: withCtx(() => [
                  createVNode(_component_ElButton, {
                    type: "primary",
                    plain: "",
                    class: "mr-24",
                    onClick: ($event) => unref(userStore).logout()
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_ElIcon, { size: 22 }, {
                        default: withCtx(() => [
                          createVNode(unref(switch_button_default))
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }, 8, ["onClick"])
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_ElDivider, null, null, _parent));
      _push(ssrRenderComponent(_component_ElRow, {
        gutter: 12,
        justify: "center",
        class: "w-100"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_ElTabs, {
              modelValue: unref(activeTab),
              "onUpdate:modelValue": ($event) => isRef(activeTab) ? activeTab.value = $event : null
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_ElTabPane, {
                    label: "Portal kategorije",
                    name: "portal-categories"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        if (unref(activeTab) === "portal-categories") {
                          _push4(ssrRenderComponent(_sfc_main$d, null, null, _parent4, _scopeId3));
                        } else {
                          _push4(`<!---->`);
                        }
                      } else {
                        return [
                          unref(activeTab) === "portal-categories" ? (openBlock(), createBlock(_sfc_main$d, { key: 0 })) : createCommentVNode("", true)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_ElTabPane, {
                    label: "Portal vijesti",
                    name: "portal-news"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        if (unref(activeTab) === "portal-news") {
                          _push4(ssrRenderComponent(BackofficePortalNewsTab, null, null, _parent4, _scopeId3));
                        } else {
                          _push4(`<!---->`);
                        }
                      } else {
                        return [
                          unref(activeTab) === "portal-news" ? (openBlock(), createBlock(BackofficePortalNewsTab, { key: 0 })) : createCommentVNode("", true)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_ElTabPane, {
                    label: "Posao kategorije",
                    name: "job-categories"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        if (unref(activeTab) === "job-categories") {
                          _push4(ssrRenderComponent(_sfc_main$b, null, null, _parent4, _scopeId3));
                        } else {
                          _push4(`<!---->`);
                        }
                      } else {
                        return [
                          unref(activeTab) === "job-categories" ? (openBlock(), createBlock(_sfc_main$b, { key: 0 })) : createCommentVNode("", true)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_ElTabPane, {
                    label: "Posao oglasi",
                    name: "job-ads"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        if (unref(activeTab) === "job-ads") {
                          _push4(ssrRenderComponent(BackofficeJobAdsTab, null, null, _parent4, _scopeId3));
                        } else {
                          _push4(`<!---->`);
                        }
                      } else {
                        return [
                          unref(activeTab) === "job-ads" ? (openBlock(), createBlock(BackofficeJobAdsTab, { key: 0 })) : createCommentVNode("", true)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_ElTabPane, {
                    label: "Webshop kategorije",
                    name: "webshop-categories"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        if (unref(activeTab) === "webshop-categories") {
                          _push4(ssrRenderComponent(_sfc_main$9, null, null, _parent4, _scopeId3));
                        } else {
                          _push4(`<!---->`);
                        }
                      } else {
                        return [
                          unref(activeTab) === "webshop-categories" ? (openBlock(), createBlock(_sfc_main$9, { key: 0 })) : createCommentVNode("", true)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_ElTabPane, {
                    label: "Webshop proizvodi",
                    name: "webshop-products"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        if (unref(activeTab) === "webshop-products") {
                          _push4(ssrRenderComponent(BackofficeWebshopProductsTab, null, null, _parent4, _scopeId3));
                        } else {
                          _push4(`<!---->`);
                        }
                      } else {
                        return [
                          unref(activeTab) === "webshop-products" ? (openBlock(), createBlock(BackofficeWebshopProductsTab, { key: 0 })) : createCommentVNode("", true)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_ElTabPane, {
                    label: "Narud\u017Ebe",
                    name: "webshop-orders"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        if (unref(activeTab) === "webshop-orders") {
                          _push4(ssrRenderComponent(_sfc_main$7, null, null, _parent4, _scopeId3));
                        } else {
                          _push4(`<!---->`);
                        }
                      } else {
                        return [
                          unref(activeTab) === "webshop-orders" ? (openBlock(), createBlock(_sfc_main$7, { key: 0 })) : createCommentVNode("", true)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_ElTabPane, {
                    label: "Reklame",
                    name: "ads"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        if (unref(activeTab) === "ads") {
                          _push4(ssrRenderComponent(_sfc_main$4, null, null, _parent4, _scopeId3));
                        } else {
                          _push4(`<!---->`);
                        }
                      } else {
                        return [
                          unref(activeTab) === "ads" ? (openBlock(), createBlock(_sfc_main$4, { key: 0 })) : createCommentVNode("", true)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_ElTabPane, {
                    label: "Admin",
                    name: "admin"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        if (unref(activeTab) === "admin") {
                          _push4(ssrRenderComponent(_sfc_main$e, null, null, _parent4, _scopeId3));
                        } else {
                          _push4(`<!---->`);
                        }
                      } else {
                        return [
                          unref(activeTab) === "admin" ? (openBlock(), createBlock(_sfc_main$e, { key: 0 })) : createCommentVNode("", true)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_ElTabPane, {
                      label: "Portal kategorije",
                      name: "portal-categories"
                    }, {
                      default: withCtx(() => [
                        unref(activeTab) === "portal-categories" ? (openBlock(), createBlock(_sfc_main$d, { key: 0 })) : createCommentVNode("", true)
                      ]),
                      _: 1
                    }),
                    createVNode(_component_ElTabPane, {
                      label: "Portal vijesti",
                      name: "portal-news"
                    }, {
                      default: withCtx(() => [
                        unref(activeTab) === "portal-news" ? (openBlock(), createBlock(BackofficePortalNewsTab, { key: 0 })) : createCommentVNode("", true)
                      ]),
                      _: 1
                    }),
                    createVNode(_component_ElTabPane, {
                      label: "Posao kategorije",
                      name: "job-categories"
                    }, {
                      default: withCtx(() => [
                        unref(activeTab) === "job-categories" ? (openBlock(), createBlock(_sfc_main$b, { key: 0 })) : createCommentVNode("", true)
                      ]),
                      _: 1
                    }),
                    createVNode(_component_ElTabPane, {
                      label: "Posao oglasi",
                      name: "job-ads"
                    }, {
                      default: withCtx(() => [
                        unref(activeTab) === "job-ads" ? (openBlock(), createBlock(BackofficeJobAdsTab, { key: 0 })) : createCommentVNode("", true)
                      ]),
                      _: 1
                    }),
                    createVNode(_component_ElTabPane, {
                      label: "Webshop kategorije",
                      name: "webshop-categories"
                    }, {
                      default: withCtx(() => [
                        unref(activeTab) === "webshop-categories" ? (openBlock(), createBlock(_sfc_main$9, { key: 0 })) : createCommentVNode("", true)
                      ]),
                      _: 1
                    }),
                    createVNode(_component_ElTabPane, {
                      label: "Webshop proizvodi",
                      name: "webshop-products"
                    }, {
                      default: withCtx(() => [
                        unref(activeTab) === "webshop-products" ? (openBlock(), createBlock(BackofficeWebshopProductsTab, { key: 0 })) : createCommentVNode("", true)
                      ]),
                      _: 1
                    }),
                    createVNode(_component_ElTabPane, {
                      label: "Narud\u017Ebe",
                      name: "webshop-orders"
                    }, {
                      default: withCtx(() => [
                        unref(activeTab) === "webshop-orders" ? (openBlock(), createBlock(_sfc_main$7, { key: 0 })) : createCommentVNode("", true)
                      ]),
                      _: 1
                    }),
                    createVNode(_component_ElTabPane, {
                      label: "Reklame",
                      name: "ads"
                    }, {
                      default: withCtx(() => [
                        unref(activeTab) === "ads" ? (openBlock(), createBlock(_sfc_main$4, { key: 0 })) : createCommentVNode("", true)
                      ]),
                      _: 1
                    }),
                    createVNode(_component_ElTabPane, {
                      label: "Admin",
                      name: "admin"
                    }, {
                      default: withCtx(() => [
                        unref(activeTab) === "admin" ? (openBlock(), createBlock(_sfc_main$e, { key: 0 })) : createCommentVNode("", true)
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
              createVNode(_component_ElTabs, {
                modelValue: unref(activeTab),
                "onUpdate:modelValue": ($event) => isRef(activeTab) ? activeTab.value = $event : null
              }, {
                default: withCtx(() => [
                  createVNode(_component_ElTabPane, {
                    label: "Portal kategorije",
                    name: "portal-categories"
                  }, {
                    default: withCtx(() => [
                      unref(activeTab) === "portal-categories" ? (openBlock(), createBlock(_sfc_main$d, { key: 0 })) : createCommentVNode("", true)
                    ]),
                    _: 1
                  }),
                  createVNode(_component_ElTabPane, {
                    label: "Portal vijesti",
                    name: "portal-news"
                  }, {
                    default: withCtx(() => [
                      unref(activeTab) === "portal-news" ? (openBlock(), createBlock(BackofficePortalNewsTab, { key: 0 })) : createCommentVNode("", true)
                    ]),
                    _: 1
                  }),
                  createVNode(_component_ElTabPane, {
                    label: "Posao kategorije",
                    name: "job-categories"
                  }, {
                    default: withCtx(() => [
                      unref(activeTab) === "job-categories" ? (openBlock(), createBlock(_sfc_main$b, { key: 0 })) : createCommentVNode("", true)
                    ]),
                    _: 1
                  }),
                  createVNode(_component_ElTabPane, {
                    label: "Posao oglasi",
                    name: "job-ads"
                  }, {
                    default: withCtx(() => [
                      unref(activeTab) === "job-ads" ? (openBlock(), createBlock(BackofficeJobAdsTab, { key: 0 })) : createCommentVNode("", true)
                    ]),
                    _: 1
                  }),
                  createVNode(_component_ElTabPane, {
                    label: "Webshop kategorije",
                    name: "webshop-categories"
                  }, {
                    default: withCtx(() => [
                      unref(activeTab) === "webshop-categories" ? (openBlock(), createBlock(_sfc_main$9, { key: 0 })) : createCommentVNode("", true)
                    ]),
                    _: 1
                  }),
                  createVNode(_component_ElTabPane, {
                    label: "Webshop proizvodi",
                    name: "webshop-products"
                  }, {
                    default: withCtx(() => [
                      unref(activeTab) === "webshop-products" ? (openBlock(), createBlock(BackofficeWebshopProductsTab, { key: 0 })) : createCommentVNode("", true)
                    ]),
                    _: 1
                  }),
                  createVNode(_component_ElTabPane, {
                    label: "Narud\u017Ebe",
                    name: "webshop-orders"
                  }, {
                    default: withCtx(() => [
                      unref(activeTab) === "webshop-orders" ? (openBlock(), createBlock(_sfc_main$7, { key: 0 })) : createCommentVNode("", true)
                    ]),
                    _: 1
                  }),
                  createVNode(_component_ElTabPane, {
                    label: "Reklame",
                    name: "ads"
                  }, {
                    default: withCtx(() => [
                      unref(activeTab) === "ads" ? (openBlock(), createBlock(_sfc_main$4, { key: 0 })) : createCommentVNode("", true)
                    ]),
                    _: 1
                  }),
                  createVNode(_component_ElTabPane, {
                    label: "Admin",
                    name: "admin"
                  }, {
                    default: withCtx(() => [
                      unref(activeTab) === "admin" ? (openBlock(), createBlock(_sfc_main$e, { key: 0 })) : createCommentVNode("", true)
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["modelValue", "onUpdate:modelValue"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/backoffice/BackofficeLoggedIn.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "BackofficeLogin",
  __ssrInlineRender: true,
  emits: ["login-success"],
  setup(__props, { emit: __emit }) {
    const emit = __emit;
    const { $axios } = useNuxtApp();
    const btnLoading = ref(false);
    const ruleFormRef = ref();
    const form = reactive({
      email: "",
      password: ""
    });
    const rules = reactive({
      email: [
        { required: true, message: "Unesite email adresu", trigger: "blur" },
        {
          validator: (rule, value, callback) => {
            if (!validateEmail(value)) callback(new Error("Neto\u010Dna email adresa"));
            else callback();
          },
          trigger: "blur"
        }
      ],
      password: [
        { required: true, message: "Unesite lozinku", trigger: "blur" },
        {
          validator: (rule, value, callback) => {
            if (!validatePassword(value)) callback(new Error("Neto\u010Dna lozinka"));
            else callback();
          },
          trigger: "blur"
        }
      ]
    });
    async function handleLogin(formEl) {
      if (!formEl) return;
      await formEl.validate(async (valid) => {
        if (valid) {
          btnLoading.value = true;
          try {
            const response = await $axios.post("/auth/login", form);
            const bearerCookie = useCookie("bearer_token", {
              maxAge: 60 * 60 * 2,
              // 2h
              secure: true
            });
            bearerCookie.value = response.data.token;
            const roleCookie = useCookie("role", {
              maxAge: 60 * 60 * 2,
              // 2h
              secure: true
            });
            roleCookie.value = response.data.role;
            const activitiesCookie = useCookie("activities", {
              maxAge: 60 * 60 * 2,
              // 2h
              secure: true
            });
            activitiesCookie.value = response.data.activities;
            emit("login-success");
          } catch (error) {
            console.error("API Error:", error);
          } finally {
            btnLoading.value = false;
          }
        }
      });
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ElRow = ElRow;
      const _component_ElCol = ElCol;
      const _component_ElForm = ElForm;
      const _component_ElFormItem = ElFormItem;
      const _component_ElInput = ElInput;
      const _component_ElButton = ElButton;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "page-container" }, _attrs))} data-v-ff696785>`);
      _push(ssrRenderComponent(_component_ElRow, {
        justify: "center",
        align: "middle",
        class: "main-row"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div data-v-ff696785${_scopeId}>`);
            _push2(ssrRenderComponent(_component_ElCol, { span: 24 }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_ElRow, {
                    justify: "center",
                    align: "middle"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<h2 class="color-primary" data-v-ff696785${_scopeId3}>Backoffice prijava</h2>`);
                      } else {
                        return [
                          createVNode("h2", { class: "color-primary" }, "Backoffice prijava")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_ElRow, {
                      justify: "center",
                      align: "middle"
                    }, {
                      default: withCtx(() => [
                        createVNode("h2", { class: "color-primary" }, "Backoffice prijava")
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_ElCol, { span: 24 }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_ElForm, {
                    "label-position": _ctx.$viewport.isLessThan("tablet") ? "top" : "left",
                    "require-asterisk-position": "right",
                    ref_key: "ruleFormRef",
                    ref: ruleFormRef,
                    class: "form",
                    model: unref(form),
                    rules: unref(rules),
                    "label-width": "auto",
                    "status-icon": ""
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_ElRow, { justify: "center" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_ElFormItem, {
                                label: "Email",
                                prop: "email"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_ElInput, {
                                      modelValue: unref(form).email,
                                      "onUpdate:modelValue": ($event) => unref(form).email = $event,
                                      placeholder: "prefix@email.com",
                                      class: "input-width",
                                      onKeyup: ($event) => handleLogin(unref(ruleFormRef))
                                    }, null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_ElInput, {
                                        modelValue: unref(form).email,
                                        "onUpdate:modelValue": ($event) => unref(form).email = $event,
                                        placeholder: "prefix@email.com",
                                        class: "input-width",
                                        onKeyup: withKeys(($event) => handleLogin(unref(ruleFormRef)), ["enter"])
                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "onKeyup"])
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_ElFormItem, {
                                  label: "Email",
                                  prop: "email"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_ElInput, {
                                      modelValue: unref(form).email,
                                      "onUpdate:modelValue": ($event) => unref(form).email = $event,
                                      placeholder: "prefix@email.com",
                                      class: "input-width",
                                      onKeyup: withKeys(($event) => handleLogin(unref(ruleFormRef)), ["enter"])
                                    }, null, 8, ["modelValue", "onUpdate:modelValue", "onKeyup"])
                                  ]),
                                  _: 1
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_ElRow, { justify: "center" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_ElFormItem, {
                                label: "Lozinka",
                                prop: "password"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_ElInput, {
                                      modelValue: unref(form).password,
                                      "onUpdate:modelValue": ($event) => unref(form).password = $event,
                                      type: "password",
                                      placeholder: "********",
                                      "show-password": "",
                                      class: "input-width",
                                      onKeyup: ($event) => handleLogin(unref(ruleFormRef))
                                    }, null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_ElInput, {
                                        modelValue: unref(form).password,
                                        "onUpdate:modelValue": ($event) => unref(form).password = $event,
                                        type: "password",
                                        placeholder: "********",
                                        "show-password": "",
                                        class: "input-width",
                                        onKeyup: withKeys(($event) => handleLogin(unref(ruleFormRef)), ["enter"])
                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "onKeyup"])
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_ElFormItem, {
                                  label: "Lozinka",
                                  prop: "password"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_ElInput, {
                                      modelValue: unref(form).password,
                                      "onUpdate:modelValue": ($event) => unref(form).password = $event,
                                      type: "password",
                                      placeholder: "********",
                                      "show-password": "",
                                      class: "input-width",
                                      onKeyup: withKeys(($event) => handleLogin(unref(ruleFormRef)), ["enter"])
                                    }, null, 8, ["modelValue", "onUpdate:modelValue", "onKeyup"])
                                  ]),
                                  _: 1
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_ElRow, { justify: "center" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_ElButton, {
                                type: "primary",
                                onClick: ($event) => handleLogin(unref(ruleFormRef)),
                                loading: unref(btnLoading)
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(` Prijava `);
                                  } else {
                                    return [
                                      createTextVNode(" Prijava ")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_ElButton, {
                                  type: "primary",
                                  onClick: ($event) => handleLogin(unref(ruleFormRef)),
                                  loading: unref(btnLoading)
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" Prijava ")
                                  ]),
                                  _: 1
                                }, 8, ["onClick", "loading"])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_ElRow, { justify: "center" }, {
                            default: withCtx(() => [
                              createVNode(_component_ElFormItem, {
                                label: "Email",
                                prop: "email"
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_ElInput, {
                                    modelValue: unref(form).email,
                                    "onUpdate:modelValue": ($event) => unref(form).email = $event,
                                    placeholder: "prefix@email.com",
                                    class: "input-width",
                                    onKeyup: withKeys(($event) => handleLogin(unref(ruleFormRef)), ["enter"])
                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "onKeyup"])
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_ElRow, { justify: "center" }, {
                            default: withCtx(() => [
                              createVNode(_component_ElFormItem, {
                                label: "Lozinka",
                                prop: "password"
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_ElInput, {
                                    modelValue: unref(form).password,
                                    "onUpdate:modelValue": ($event) => unref(form).password = $event,
                                    type: "password",
                                    placeholder: "********",
                                    "show-password": "",
                                    class: "input-width",
                                    onKeyup: withKeys(($event) => handleLogin(unref(ruleFormRef)), ["enter"])
                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "onKeyup"])
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_ElRow, { justify: "center" }, {
                            default: withCtx(() => [
                              createVNode(_component_ElButton, {
                                type: "primary",
                                onClick: ($event) => handleLogin(unref(ruleFormRef)),
                                loading: unref(btnLoading)
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" Prijava ")
                                ]),
                                _: 1
                              }, 8, ["onClick", "loading"])
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
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
                      "status-icon": ""
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_ElRow, { justify: "center" }, {
                          default: withCtx(() => [
                            createVNode(_component_ElFormItem, {
                              label: "Email",
                              prop: "email"
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_ElInput, {
                                  modelValue: unref(form).email,
                                  "onUpdate:modelValue": ($event) => unref(form).email = $event,
                                  placeholder: "prefix@email.com",
                                  class: "input-width",
                                  onKeyup: withKeys(($event) => handleLogin(unref(ruleFormRef)), ["enter"])
                                }, null, 8, ["modelValue", "onUpdate:modelValue", "onKeyup"])
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(_component_ElRow, { justify: "center" }, {
                          default: withCtx(() => [
                            createVNode(_component_ElFormItem, {
                              label: "Lozinka",
                              prop: "password"
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_ElInput, {
                                  modelValue: unref(form).password,
                                  "onUpdate:modelValue": ($event) => unref(form).password = $event,
                                  type: "password",
                                  placeholder: "********",
                                  "show-password": "",
                                  class: "input-width",
                                  onKeyup: withKeys(($event) => handleLogin(unref(ruleFormRef)), ["enter"])
                                }, null, 8, ["modelValue", "onUpdate:modelValue", "onKeyup"])
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(_component_ElRow, { justify: "center" }, {
                          default: withCtx(() => [
                            createVNode(_component_ElButton, {
                              type: "primary",
                              onClick: ($event) => handleLogin(unref(ruleFormRef)),
                              loading: unref(btnLoading)
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" Prijava ")
                              ]),
                              _: 1
                            }, 8, ["onClick", "loading"])
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
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", null, [
                createVNode(_component_ElCol, { span: 24 }, {
                  default: withCtx(() => [
                    createVNode(_component_ElRow, {
                      justify: "center",
                      align: "middle"
                    }, {
                      default: withCtx(() => [
                        createVNode("h2", { class: "color-primary" }, "Backoffice prijava")
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                createVNode(_component_ElCol, { span: 24 }, {
                  default: withCtx(() => [
                    createVNode(_component_ElForm, {
                      "label-position": _ctx.$viewport.isLessThan("tablet") ? "top" : "left",
                      "require-asterisk-position": "right",
                      ref_key: "ruleFormRef",
                      ref: ruleFormRef,
                      class: "form",
                      model: unref(form),
                      rules: unref(rules),
                      "label-width": "auto",
                      "status-icon": ""
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_ElRow, { justify: "center" }, {
                          default: withCtx(() => [
                            createVNode(_component_ElFormItem, {
                              label: "Email",
                              prop: "email"
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_ElInput, {
                                  modelValue: unref(form).email,
                                  "onUpdate:modelValue": ($event) => unref(form).email = $event,
                                  placeholder: "prefix@email.com",
                                  class: "input-width",
                                  onKeyup: withKeys(($event) => handleLogin(unref(ruleFormRef)), ["enter"])
                                }, null, 8, ["modelValue", "onUpdate:modelValue", "onKeyup"])
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(_component_ElRow, { justify: "center" }, {
                          default: withCtx(() => [
                            createVNode(_component_ElFormItem, {
                              label: "Lozinka",
                              prop: "password"
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_ElInput, {
                                  modelValue: unref(form).password,
                                  "onUpdate:modelValue": ($event) => unref(form).password = $event,
                                  type: "password",
                                  placeholder: "********",
                                  "show-password": "",
                                  class: "input-width",
                                  onKeyup: withKeys(($event) => handleLogin(unref(ruleFormRef)), ["enter"])
                                }, null, 8, ["modelValue", "onUpdate:modelValue", "onKeyup"])
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(_component_ElRow, { justify: "center" }, {
                          default: withCtx(() => [
                            createVNode(_component_ElButton, {
                              type: "primary",
                              onClick: ($event) => handleLogin(unref(ruleFormRef)),
                              loading: unref(btnLoading)
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" Prijava ")
                              ]),
                              _: 1
                            }, 8, ["onClick", "loading"])
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }, 8, ["label-position", "model", "rules"])
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
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/backoffice/BackofficeLogin.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-ff696785"]]);
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "BackofficePage",
  __ssrInlineRender: true,
  setup(__props) {
    const userStore = useUserStore();
    const { isAdminLogged } = storeToRefs(userStore);
    const isMounted = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BackofficeLoggedIn = _sfc_main$3;
      const _component_BackofficeLogin = __nuxt_component_1;
      if (unref(isMounted)) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "page-container" }, _attrs))}>`);
        if (unref(isAdminLogged)) {
          _push(ssrRenderComponent(_component_BackofficeLoggedIn, null, null, _parent));
        } else {
          _push(ssrRenderComponent(_component_BackofficeLogin, {
            onLoginSuccess: ($event) => isAdminLogged.value = true
          }, null, _parent));
        }
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/backoffice/BackofficePage.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "backoffice",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "Backoffice",
      meta: [
        {
          name: "description",
          content: "Administratorske stranice"
        },
        { property: "og:title", content: "Backoffice" },
        {
          property: "og:description",
          content: "Administratorske stranice"
        }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$1, _attrs, null, _parent));
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/backoffice.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=backoffice-I2pOg4CV.mjs.map
