import { defineComponent, mergeProps, ref, withCtx, createVNode, toDisplayString, unref, createBlock, openBlock, Fragment, renderList, createCommentVNode, isRef, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderAttrs, ssrInterpolate, ssrRenderList } from 'vue/server-renderer';
import { bc as useRoute, v as useHead, _ as _export_sfc, u as useNuxtApp, b as ElRow, g as ElSkeleton, d as ElCol, h as ElSkeletonItem, j as ElDivider, E as ElEmpty } from './server.mjs';
import { N as NewsWidget } from './NewsWidget-Bgnk5vzn.mjs';
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
import './truncate-BSRTn-4H.mjs';
import './formatDate-BE2FzR0K.mjs';

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "PortalCategoryPage",
  __ssrInlineRender: true,
  props: ["title"],
  setup(__props) {
    const props = __props;
    const { $viewport, $axios } = useNuxtApp();
    const isLoading = ref(true);
    const firstTimeFetchingData = ref(true);
    const pagination = ref({
      page: 1,
      perPage: 10,
      total: 0
    });
    const newestLargeNews = ref();
    const newestSmallNews = ref();
    const news = ref([]);
    async function getNews() {
      isLoading.value = true;
      try {
        const response = await $axios.get(
          `/portal-news?page=${pagination.value.page}&perPage=${pagination.value.perPage}&categoryName=${props.title}`
        );
        news.value = response.data.news;
        pagination.value.total = response.data.total;
        if (firstTimeFetchingData.value) {
          newestLargeNews.value = news.value.slice(0, 2);
          newestSmallNews.value = news.value.slice(2, 5);
        }
      } catch (error) {
        console.error("API Error:", error);
      } finally {
        firstTimeFetchingData.value = false;
        isLoading.value = false;
      }
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ElRow = ElRow;
      const _component_ElSkeleton = ElSkeleton;
      const _component_ElCol = ElCol;
      const _component_ElSkeletonItem = ElSkeletonItem;
      const _component_ElDivider = ElDivider;
      const _component_ElEmpty = ElEmpty;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "page-container" }, _attrs))} data-v-4e8364f7>`);
      _push(ssrRenderComponent(_component_ElRow, {
        justify: "center",
        align: "middle"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h3 class="color-primary" data-v-4e8364f7${_scopeId}>Kategorija: ${ssrInterpolate(__props.title)}</h3>`);
          } else {
            return [
              createVNode("h3", { class: "color-primary" }, "Kategorija: " + toDisplayString(__props.title), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      if (unref(isLoading)) {
        _push(ssrRenderComponent(_component_ElSkeleton, { animated: "" }, {
          template: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              if (unref($viewport).isGreaterOrEquals("tablet")) {
                _push2(ssrRenderComponent(_component_ElRow, {
                  gutter: 12,
                  class: "mb-24"
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`<!--[-->`);
                      ssrRenderList(2, (_3) => {
                        _push3(ssrRenderComponent(_component_ElCol, {
                          xs: 24,
                          sm: 12,
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
                      _push3(`<!--]--><!--[-->`);
                      ssrRenderList(3, (_3) => {
                        _push3(ssrRenderComponent(_component_ElCol, {
                          xs: 24,
                          sm: 8,
                          class: "mt-12"
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
                        (openBlock(), createBlock(Fragment, null, renderList(2, (_3) => {
                          return createVNode(_component_ElCol, {
                            xs: 24,
                            sm: 12,
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
                        }), 64)),
                        (openBlock(), createBlock(Fragment, null, renderList(3, (_3) => {
                          return createVNode(_component_ElCol, {
                            xs: 24,
                            sm: 8,
                            class: "mt-12"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_ElSkeletonItem, {
                                variant: "image",
                                class: "skeleton-image"
                              })
                            ]),
                            _: 1
                          });
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
              _push2(ssrRenderComponent(_component_ElRow, {
                gutter: 12,
                class: "mb-24 mt-12"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<!--[-->`);
                    ssrRenderList(10, (_3) => {
                      _push3(ssrRenderComponent(_component_ElCol, {
                        xs: 24,
                        sm: 12,
                        class: "mt-12"
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
                      (openBlock(), createBlock(Fragment, null, renderList(10, (_3) => {
                        return createVNode(_component_ElCol, {
                          xs: 24,
                          sm: 12,
                          class: "mt-12"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_ElSkeletonItem, {
                              variant: "image",
                              class: "skeleton-image"
                            })
                          ]),
                          _: 1
                        });
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
                  gutter: 12,
                  class: "mb-24"
                }, {
                  default: withCtx(() => [
                    (openBlock(), createBlock(Fragment, null, renderList(2, (_2) => {
                      return createVNode(_component_ElCol, {
                        xs: 24,
                        sm: 12,
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
                    }), 64)),
                    (openBlock(), createBlock(Fragment, null, renderList(3, (_2) => {
                      return createVNode(_component_ElCol, {
                        xs: 24,
                        sm: 8,
                        class: "mt-12"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_ElSkeletonItem, {
                            variant: "image",
                            class: "skeleton-image"
                          })
                        ]),
                        _: 1
                      });
                    }), 64))
                  ]),
                  _: 1
                })) : createCommentVNode("", true),
                unref($viewport).isGreaterOrEquals("tablet") ? (openBlock(), createBlock(_component_ElDivider, { key: 1 })) : createCommentVNode("", true),
                createVNode(_component_ElRow, {
                  gutter: 12,
                  class: "mb-24 mt-12"
                }, {
                  default: withCtx(() => [
                    (openBlock(), createBlock(Fragment, null, renderList(10, (_2) => {
                      return createVNode(_component_ElCol, {
                        xs: 24,
                        sm: 12,
                        class: "mt-12"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_ElSkeletonItem, {
                            variant: "image",
                            class: "skeleton-image"
                          })
                        ]),
                        _: 1
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
      } else if (!unref(news).length) {
        _push(ssrRenderComponent(_component_ElEmpty, { description: "Ups! Nema dostupnih vijesti..." }, null, _parent));
      } else {
        _push(`<!--[-->`);
        if (unref($viewport).isGreaterOrEquals("tablet")) {
          _push(ssrRenderComponent(_component_ElRow, {
            gutter: 12,
            class: "mb-24"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<!--[-->`);
                ssrRenderList(unref(newestLargeNews), (news2) => {
                  _push2(ssrRenderComponent(_component_ElCol, {
                    key: String(news2.id),
                    xs: 24,
                    sm: 12,
                    class: ["news-container", { "mt-12": unref($viewport).isLessOrEquals("tablet") }]
                  }, {
                    default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                      if (_push3) {
                        _push3(ssrRenderComponent(NewsWidget, { news: news2 }, null, _parent3, _scopeId2));
                      } else {
                        return [
                          createVNode(NewsWidget, { news: news2 }, null, 8, ["news"])
                        ];
                      }
                    }),
                    _: 2
                  }, _parent2, _scopeId));
                });
                _push2(`<!--]--><!--[-->`);
                ssrRenderList(unref(newestSmallNews), (news2) => {
                  _push2(ssrRenderComponent(_component_ElCol, {
                    key: String(news2.id),
                    xs: 24,
                    sm: 8,
                    class: "news-container mt-12"
                  }, {
                    default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                      if (_push3) {
                        _push3(ssrRenderComponent(NewsWidget, { news: news2 }, null, _parent3, _scopeId2));
                      } else {
                        return [
                          createVNode(NewsWidget, { news: news2 }, null, 8, ["news"])
                        ];
                      }
                    }),
                    _: 2
                  }, _parent2, _scopeId));
                });
                _push2(`<!--]-->`);
              } else {
                return [
                  (openBlock(true), createBlock(Fragment, null, renderList(unref(newestLargeNews), (news2) => {
                    return openBlock(), createBlock(_component_ElCol, {
                      key: String(news2.id),
                      xs: 24,
                      sm: 12,
                      class: ["news-container", { "mt-12": unref($viewport).isLessOrEquals("tablet") }]
                    }, {
                      default: withCtx(() => [
                        createVNode(NewsWidget, { news: news2 }, null, 8, ["news"])
                      ]),
                      _: 2
                    }, 1032, ["class"]);
                  }), 128)),
                  (openBlock(true), createBlock(Fragment, null, renderList(unref(newestSmallNews), (news2) => {
                    return openBlock(), createBlock(_component_ElCol, {
                      key: String(news2.id),
                      xs: 24,
                      sm: 8,
                      class: "news-container mt-12"
                    }, {
                      default: withCtx(() => [
                        createVNode(NewsWidget, { news: news2 }, null, 8, ["news"])
                      ]),
                      _: 2
                    }, 1024);
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
        _push(ssrRenderComponent(_component_ElRow, {
          gutter: 12,
          class: ["mb-24", { "mt-24": unref($viewport).isGreaterOrEquals("tablet") }]
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<!--[-->`);
              ssrRenderList(unref(news), (article) => {
                _push2(ssrRenderComponent(_component_ElCol, {
                  key: String(article.id),
                  xs: 24,
                  sm: 12,
                  class: "mb-12 news"
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(ssrRenderComponent(NewsWidget, {
                        news: article,
                        class: "news"
                      }, null, _parent3, _scopeId2));
                    } else {
                      return [
                        createVNode(NewsWidget, {
                          news: article,
                          class: "news"
                        }, null, 8, ["news"])
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
              });
              _push2(`<!--]-->`);
            } else {
              return [
                (openBlock(true), createBlock(Fragment, null, renderList(unref(news), (article) => {
                  return openBlock(), createBlock(_component_ElCol, {
                    key: String(article.id),
                    xs: 24,
                    sm: 12,
                    class: "mb-12 news"
                  }, {
                    default: withCtx(() => [
                      createVNode(NewsWidget, {
                        news: article,
                        class: "news"
                      }, null, 8, ["news"])
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
          onPageChange: getNews,
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/portal/PortalCategoryPage.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const PortalCategoryPage = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-4e8364f7"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    const title = `${route.params.categoryName[0].toUpperCase()}${route.params.categoryName.slice(1, route.params.categoryName.length)}`;
    useHead({
      title,
      meta: [
        {
          name: "description",
          content: `Kategorija vijesti na Portalu sa najnovijim vijestima. ${title}`
        },
        { property: "og:title", content: "Kategorija" },
        {
          property: "og:description",
          content: `Kategorija vijesti na Portalu sa najnovijim vijestima. ${title}`
        }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(PortalCategoryPage, mergeProps({ title }, _attrs), null, _parent));
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/portal/[categoryName]/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-Bq3V9uLe.mjs.map
