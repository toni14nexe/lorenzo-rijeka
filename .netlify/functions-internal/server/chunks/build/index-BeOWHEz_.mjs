import { defineComponent, ref, mergeProps, unref, withCtx, createVNode, createBlock, openBlock, Fragment, renderList, createCommentVNode, isRef, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderAttrs, ssrRenderList } from 'vue/server-renderer';
import { v as useHead, _ as _export_sfc, u as useNuxtApp, ba as useCategoriesStore, s as storeToRefs, g as ElSkeleton, b as ElRow, d as ElCol, h as ElSkeletonItem, j as ElDivider, Y as ElButton, e as ElIcon, aP as search_default, E as ElEmpty } from './server.mjs';
import { E as ElSelect, a as ElOption } from './el-select-C7_MxKHv.mjs';
import { P as ProductWidget } from './ProductWidget-DppY-Wgi.mjs';
import { P as Pagination } from './Pagination-vWoxEUNQ.mjs';
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
import './strings-D1uxkXhq.mjs';
import './truncate-BSRTn-4H.mjs';

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "WebshopPage",
  __ssrInlineRender: true,
  setup(__props) {
    const { $viewport, $axios } = useNuxtApp();
    const categoriesStore = useCategoriesStore();
    const { categoriesLoading, webshopCategories } = storeToRefs(categoriesStore);
    const firstTimeFetchingData = ref(true);
    const categorySearch = ref([]);
    const isLoading = ref(true);
    const pagination = ref({
      page: 1,
      perPage: 10,
      total: 0
    });
    const newestProducts = ref();
    const products = ref([]);
    function handleCategorySearch() {
      pagination.value.page = 1;
      getProducts();
    }
    async function getProducts() {
      isLoading.value = true;
      try {
        const response = await $axios.get(
          `/product?page=${pagination.value.page}&perPage=${pagination.value.perPage}&categoryIds=${categorySearch.value}`
        );
        pagination.value.total = response.data.total;
        products.value = response.data.products;
        if (firstTimeFetchingData.value)
          newestProducts.value = products.value.slice(0, 3);
      } catch (error) {
        console.error("API Error:", error);
      } finally {
        firstTimeFetchingData.value = false;
        isLoading.value = false;
      }
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ElSkeleton = ElSkeleton;
      const _component_ElRow = ElRow;
      const _component_ElCol = ElCol;
      const _component_ElSkeletonItem = ElSkeletonItem;
      const _component_ElDivider = ElDivider;
      const _component_ElButton = ElButton;
      const _component_ElIcon = ElIcon;
      const _component_ElSelect = ElSelect;
      const _component_ElOption = ElOption;
      const _component_ElEmpty = ElEmpty;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "page-container" }, _attrs))} data-v-53367986>`);
      if (unref(isLoading)) {
        _push(ssrRenderComponent(_component_ElSkeleton, { animated: "" }, {
          template: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              if (unref($viewport).isGreaterOrEquals("tablet")) {
                _push2(ssrRenderComponent(_component_ElRow, { justify: "center" }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`<h3 class="color-primary" data-v-53367986${_scopeId2}>Najnoviji proizvodi</h3>`);
                    } else {
                      return [
                        createVNode("h3", { class: "color-primary" }, "Najnoviji proizvodi")
                      ];
                    }
                  }),
                  _: 1
                }, _parent2, _scopeId));
              } else {
                _push2(`<!---->`);
              }
              if (unref($viewport).isGreaterOrEquals("tablet")) {
                _push2(ssrRenderComponent(_component_ElRow, {
                  gutter: 12,
                  class: "mb-24"
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`<!--[-->`);
                      ssrRenderList(3, (_3) => {
                        _push3(ssrRenderComponent(_component_ElCol, {
                          xs: 24,
                          sm: 8,
                          class: { "mt-12": unref($viewport).isLessOrEquals("tablet") }
                        }, {
                          default: withCtx((_4, _push4, _parent4, _scopeId3) => {
                            if (_push4) {
                              _push4(ssrRenderComponent(_component_ElSkeletonItem, {
                                variant: "image",
                                class: "skeleton-image"
                              }, null, _parent4, _scopeId3));
                            } else {
                              return [
                                createVNode(_component_ElSkeletonItem, {
                                  variant: "image",
                                  class: "skeleton-image"
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
                        (openBlock(), createBlock(Fragment, null, renderList(3, (_3) => {
                          return createVNode(_component_ElCol, {
                            xs: 24,
                            sm: 8,
                            class: { "mt-12": unref($viewport).isLessOrEquals("tablet") }
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_ElSkeletonItem, {
                                variant: "image",
                                class: "skeleton-image"
                              })
                            ]),
                            _: 1
                          }, 8, ["class"]);
                        }), 64))
                      ];
                    }
                  }),
                  _: 1
                }, _parent2, _scopeId));
              } else {
                _push2(`<!---->`);
              }
              if (unref($viewport).isGreaterOrEquals("tablet")) {
                _push2(ssrRenderComponent(_component_ElDivider, null, null, _parent2, _scopeId));
              } else {
                _push2(`<!---->`);
              }
              _push2(ssrRenderComponent(_component_ElRow, { justify: "center" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<h3 class="color-primary" data-v-53367986${_scopeId2}>Proizvodi</h3>`);
                  } else {
                    return [
                      createVNode("h3", { class: "color-primary" }, "Proizvodi")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_ElRow, {
                justify: "center",
                align: "middle",
                class: "mb-24"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_ElSkeletonItem, {
                      variant: "text",
                      style: `width: ${unref($viewport).isLessThan("mobileWide") ? "195" : "320"}px; height: 32px`
                    }, null, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(_component_ElButton, {
                      type: "primary",
                      plain: "",
                      class: "ml-8",
                      onClick: getProducts,
                      disabled: ""
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_ElIcon, { size: 20 }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(unref(search_default), null, null, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(unref(search_default))
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(_component_ElIcon, { size: 20 }, {
                              default: withCtx(() => [
                                createVNode(unref(search_default))
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
                      createVNode(_component_ElSkeletonItem, {
                        variant: "text",
                        style: `width: ${unref($viewport).isLessThan("mobileWide") ? "195" : "320"}px; height: 32px`
                      }, null, 8, ["style"]),
                      createVNode(_component_ElButton, {
                        type: "primary",
                        plain: "",
                        class: "ml-8",
                        onClick: getProducts,
                        disabled: ""
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_ElIcon, { size: 20 }, {
                            default: withCtx(() => [
                              createVNode(unref(search_default))
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
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_ElRow, {
                gutter: 12,
                class: "mb-24"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<!--[-->`);
                    ssrRenderList(10, (_3, index) => {
                      _push3(ssrRenderComponent(_component_ElCol, {
                        xs: 24,
                        sm: 12,
                        class: {
                          "mt-12": index > 0 && unref($viewport).isLessThan("tablet") || index > 1 && unref($viewport).isGreaterOrEquals("tablet")
                        }
                      }, {
                        default: withCtx((_4, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(ssrRenderComponent(_component_ElSkeletonItem, {
                              variant: "image",
                              class: "skeleton-image"
                            }, null, _parent4, _scopeId3));
                          } else {
                            return [
                              createVNode(_component_ElSkeletonItem, {
                                variant: "image",
                                class: "skeleton-image"
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
                      (openBlock(), createBlock(Fragment, null, renderList(10, (_3, index) => {
                        return createVNode(_component_ElCol, {
                          xs: 24,
                          sm: 12,
                          class: {
                            "mt-12": index > 0 && unref($viewport).isLessThan("tablet") || index > 1 && unref($viewport).isGreaterOrEquals("tablet")
                          }
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_ElSkeletonItem, {
                              variant: "image",
                              class: "skeleton-image"
                            })
                          ]),
                          _: 2
                        }, 1032, ["class"]);
                      }), 64))
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              return [
                unref($viewport).isGreaterOrEquals("tablet") ? (openBlock(), createBlock(_component_ElRow, {
                  key: 0,
                  justify: "center"
                }, {
                  default: withCtx(() => [
                    createVNode("h3", { class: "color-primary" }, "Najnoviji proizvodi")
                  ]),
                  _: 1
                })) : createCommentVNode("", true),
                unref($viewport).isGreaterOrEquals("tablet") ? (openBlock(), createBlock(_component_ElRow, {
                  key: 1,
                  gutter: 12,
                  class: "mb-24"
                }, {
                  default: withCtx(() => [
                    (openBlock(), createBlock(Fragment, null, renderList(3, (_2) => {
                      return createVNode(_component_ElCol, {
                        xs: 24,
                        sm: 8,
                        class: { "mt-12": unref($viewport).isLessOrEquals("tablet") }
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_ElSkeletonItem, {
                            variant: "image",
                            class: "skeleton-image"
                          })
                        ]),
                        _: 1
                      }, 8, ["class"]);
                    }), 64))
                  ]),
                  _: 1
                })) : createCommentVNode("", true),
                unref($viewport).isGreaterOrEquals("tablet") ? (openBlock(), createBlock(_component_ElDivider, { key: 2 })) : createCommentVNode("", true),
                createVNode(_component_ElRow, { justify: "center" }, {
                  default: withCtx(() => [
                    createVNode("h3", { class: "color-primary" }, "Proizvodi")
                  ]),
                  _: 1
                }),
                createVNode(_component_ElRow, {
                  justify: "center",
                  align: "middle",
                  class: "mb-24"
                }, {
                  default: withCtx(() => [
                    createVNode(_component_ElSkeletonItem, {
                      variant: "text",
                      style: `width: ${unref($viewport).isLessThan("mobileWide") ? "195" : "320"}px; height: 32px`
                    }, null, 8, ["style"]),
                    createVNode(_component_ElButton, {
                      type: "primary",
                      plain: "",
                      class: "ml-8",
                      onClick: getProducts,
                      disabled: ""
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_ElIcon, { size: 20 }, {
                          default: withCtx(() => [
                            createVNode(unref(search_default))
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                createVNode(_component_ElRow, {
                  gutter: 12,
                  class: "mb-24"
                }, {
                  default: withCtx(() => [
                    (openBlock(), createBlock(Fragment, null, renderList(10, (_2, index) => {
                      return createVNode(_component_ElCol, {
                        xs: 24,
                        sm: 12,
                        class: {
                          "mt-12": index > 0 && unref($viewport).isLessThan("tablet") || index > 1 && unref($viewport).isGreaterOrEquals("tablet")
                        }
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_ElSkeletonItem, {
                            variant: "image",
                            class: "skeleton-image"
                          })
                        ]),
                        _: 2
                      }, 1032, ["class"]);
                    }), 64))
                  ]),
                  _: 1
                })
              ];
            }
          }),
          _: 1
        }, _parent));
      } else if (!unref(products).length) {
        _push(`<!--[-->`);
        _push(ssrRenderComponent(_component_ElRow, { justify: "center" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<h3 class="color-primary" data-v-53367986${_scopeId}>Proizvodi</h3>`);
            } else {
              return [
                createVNode("h3", { class: "color-primary" }, "Proizvodi")
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
              _push2(ssrRenderComponent(_component_ElSelect, {
                modelValue: unref(categorySearch),
                "onUpdate:modelValue": ($event) => isRef(categorySearch) ? categorySearch.value = $event : null,
                multiple: "",
                filterable: "",
                "allow-create": "",
                "default-first-option": "",
                "reserve-keyword": false,
                placeholder: "Odaberite kategoriju",
                loading: unref(categoriesLoading),
                style: `width: ${unref($viewport).isLessThan("mobileWide") ? "195" : "320"}px`
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<!--[-->`);
                    ssrRenderList(unref(webshopCategories), (category) => {
                      _push3(ssrRenderComponent(_component_ElOption, {
                        key: String(category.id),
                        label: String(category.name),
                        value: String(category.id)
                      }, null, _parent3, _scopeId2));
                    });
                    _push3(`<!--]-->`);
                  } else {
                    return [
                      (openBlock(true), createBlock(Fragment, null, renderList(unref(webshopCategories), (category) => {
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
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_ElButton, {
                type: "primary",
                plain: "",
                class: "ml-8",
                onClick: getProducts
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_ElIcon, { size: 20 }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(unref(search_default), null, null, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(unref(search_default))
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_ElIcon, { size: 20 }, {
                        default: withCtx(() => [
                          createVNode(unref(search_default))
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
                createVNode(_component_ElSelect, {
                  modelValue: unref(categorySearch),
                  "onUpdate:modelValue": ($event) => isRef(categorySearch) ? categorySearch.value = $event : null,
                  multiple: "",
                  filterable: "",
                  "allow-create": "",
                  "default-first-option": "",
                  "reserve-keyword": false,
                  placeholder: "Odaberite kategoriju",
                  loading: unref(categoriesLoading),
                  style: `width: ${unref($viewport).isLessThan("mobileWide") ? "195" : "320"}px`
                }, {
                  default: withCtx(() => [
                    (openBlock(true), createBlock(Fragment, null, renderList(unref(webshopCategories), (category) => {
                      return openBlock(), createBlock(_component_ElOption, {
                        key: String(category.id),
                        label: String(category.name),
                        value: String(category.id)
                      }, null, 8, ["label", "value"]);
                    }), 128))
                  ]),
                  _: 1
                }, 8, ["modelValue", "onUpdate:modelValue", "loading", "style"]),
                createVNode(_component_ElButton, {
                  type: "primary",
                  plain: "",
                  class: "ml-8",
                  onClick: getProducts
                }, {
                  default: withCtx(() => [
                    createVNode(_component_ElIcon, { size: 20 }, {
                      default: withCtx(() => [
                        createVNode(unref(search_default))
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
        _push(ssrRenderComponent(_component_ElEmpty, { description: "Ups! Ovdje nema dostupnih proizvoda..." }, null, _parent));
        _push(`<!--]-->`);
      } else {
        _push(`<!--[-->`);
        if (unref($viewport).isGreaterOrEquals("tablet")) {
          _push(ssrRenderComponent(_component_ElRow, { justify: "center" }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<h3 class="color-primary" data-v-53367986${_scopeId}>Najnoviji proizvodi</h3>`);
              } else {
                return [
                  createVNode("h3", { class: "color-primary" }, "Najnoviji proizvodi")
                ];
              }
            }),
            _: 1
          }, _parent));
        } else {
          _push(`<!---->`);
        }
        if (unref($viewport).isGreaterOrEquals("tablet")) {
          _push(ssrRenderComponent(_component_ElRow, {
            gutter: 12,
            class: "mb-24"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<!--[-->`);
                ssrRenderList(unref(newestProducts), (product) => {
                  _push2(ssrRenderComponent(_component_ElCol, {
                    key: String(product.id),
                    xs: 24,
                    sm: 8,
                    class: ["product-container", { "mt-12": unref($viewport).isLessOrEquals("tablet") }]
                  }, {
                    default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                      if (_push3) {
                        _push3(ssrRenderComponent(ProductWidget, { product }, null, _parent3, _scopeId2));
                      } else {
                        return [
                          createVNode(ProductWidget, { product }, null, 8, ["product"])
                        ];
                      }
                    }),
                    _: 2
                  }, _parent2, _scopeId));
                });
                _push2(`<!--]-->`);
              } else {
                return [
                  (openBlock(true), createBlock(Fragment, null, renderList(unref(newestProducts), (product) => {
                    return openBlock(), createBlock(_component_ElCol, {
                      key: String(product.id),
                      xs: 24,
                      sm: 8,
                      class: ["product-container", { "mt-12": unref($viewport).isLessOrEquals("tablet") }]
                    }, {
                      default: withCtx(() => [
                        createVNode(ProductWidget, { product }, null, 8, ["product"])
                      ]),
                      _: 2
                    }, 1032, ["class"]);
                  }), 128))
                ];
              }
            }),
            _: 1
          }, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(ssrRenderComponent(_component_ElDivider, {
          id: "scroll-element",
          class: { "display-none": unref($viewport).isLessThan("tablet") }
        }, null, _parent));
        _push(ssrRenderComponent(_component_ElRow, { justify: "center" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<h3 class="color-primary" data-v-53367986${_scopeId}>Proizvodi</h3>`);
            } else {
              return [
                createVNode("h3", { class: "color-primary" }, "Proizvodi")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(_component_ElRow, {
          justify: "center",
          align: "middle",
          class: "mb-24"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_ElSelect, {
                modelValue: unref(categorySearch),
                "onUpdate:modelValue": ($event) => isRef(categorySearch) ? categorySearch.value = $event : null,
                multiple: "",
                filterable: "",
                "allow-create": "",
                "default-first-option": "",
                "reserve-keyword": false,
                placeholder: "Odaberite kategoriju",
                loading: unref(categoriesLoading),
                style: `width: ${unref($viewport).isLessThan("mobileWide") ? "195" : "320"}px`
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<!--[-->`);
                    ssrRenderList(unref(webshopCategories), (category) => {
                      _push3(ssrRenderComponent(_component_ElOption, {
                        key: String(category.id),
                        label: String(category.name),
                        value: String(category.id)
                      }, null, _parent3, _scopeId2));
                    });
                    _push3(`<!--]-->`);
                  } else {
                    return [
                      (openBlock(true), createBlock(Fragment, null, renderList(unref(webshopCategories), (category) => {
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
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_ElButton, {
                type: "primary",
                plain: "",
                class: "ml-8",
                onClick: handleCategorySearch
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_ElIcon, { size: 20 }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(unref(search_default), null, null, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(unref(search_default))
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_ElIcon, { size: 20 }, {
                        default: withCtx(() => [
                          createVNode(unref(search_default))
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
                createVNode(_component_ElSelect, {
                  modelValue: unref(categorySearch),
                  "onUpdate:modelValue": ($event) => isRef(categorySearch) ? categorySearch.value = $event : null,
                  multiple: "",
                  filterable: "",
                  "allow-create": "",
                  "default-first-option": "",
                  "reserve-keyword": false,
                  placeholder: "Odaberite kategoriju",
                  loading: unref(categoriesLoading),
                  style: `width: ${unref($viewport).isLessThan("mobileWide") ? "195" : "320"}px`
                }, {
                  default: withCtx(() => [
                    (openBlock(true), createBlock(Fragment, null, renderList(unref(webshopCategories), (category) => {
                      return openBlock(), createBlock(_component_ElOption, {
                        key: String(category.id),
                        label: String(category.name),
                        value: String(category.id)
                      }, null, 8, ["label", "value"]);
                    }), 128))
                  ]),
                  _: 1
                }, 8, ["modelValue", "onUpdate:modelValue", "loading", "style"]),
                createVNode(_component_ElButton, {
                  type: "primary",
                  plain: "",
                  class: "ml-8",
                  onClick: handleCategorySearch
                }, {
                  default: withCtx(() => [
                    createVNode(_component_ElIcon, { size: 20 }, {
                      default: withCtx(() => [
                        createVNode(unref(search_default))
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
        _push(ssrRenderComponent(_component_ElRow, {
          gutter: 12,
          class: "mb-24"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<!--[-->`);
              ssrRenderList(unref(products), (product) => {
                _push2(ssrRenderComponent(_component_ElCol, {
                  key: String(product.id),
                  xs: 24,
                  sm: 12,
                  class: "mb-12 product"
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(ssrRenderComponent(ProductWidget, {
                        product,
                        class: "product"
                      }, null, _parent3, _scopeId2));
                    } else {
                      return [
                        createVNode(ProductWidget, {
                          product,
                          class: "product"
                        }, null, 8, ["product"])
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
              });
              _push2(`<!--]-->`);
            } else {
              return [
                (openBlock(true), createBlock(Fragment, null, renderList(unref(products), (product) => {
                  return openBlock(), createBlock(_component_ElCol, {
                    key: String(product.id),
                    xs: 24,
                    sm: 12,
                    class: "mb-12 product"
                  }, {
                    default: withCtx(() => [
                      createVNode(ProductWidget, {
                        product,
                        class: "product"
                      }, null, 8, ["product"])
                    ]),
                    _: 2
                  }, 1024);
                }), 128))
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`<!--]-->`);
      }
      if (unref(pagination).total > 10) {
        _push(ssrRenderComponent(Pagination, {
          modelValue: unref(pagination),
          "onUpdate:modelValue": ($event) => isRef(pagination) ? pagination.value = $event : null,
          loading: unref(isLoading),
          "scroll-element-id": "scroll-element",
          onPageChange: getProducts,
          class: "mb-24"
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/webshop/WebshopPage.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const WebshopPage = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-53367986"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "Gastabajter.de - Webshop proizvod",
      meta: [
        {
          name: "description",
          content: "Ovdje se nalazi na\u0161 webshop s ponudom na\u0161ih dostupnih i najnovijih proizvoda."
        },
        { property: "og:title", content: "Gastabajter.de - Webshop proizvod" },
        {
          property: "og:description",
          content: "Ovdje se nalazi na\u0161 webshop s ponudom na\u0161ih dostupnih i najnovijih proizvoda."
        }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(WebshopPage, _attrs, null, _parent));
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/webshop/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-BeOWHEz_.mjs.map
