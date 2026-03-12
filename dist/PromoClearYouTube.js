import { a0 as getStringTab, S as StorageParams, i as injectStorage, $ as computedAsync, _ as _imports_1, n as CHROME_STORE_CLEAR_YOUTUBE_URL } from "./general.js";
import { g as ref, m as computed, d as defineComponent, h as useI18n, u as unref, o as openBlock, c as createElementBlock, a as createBaseVNode, t as toDisplayString, p as createCommentVNode, _ as _export_sfc } from "./i18n.js";
const _imports_0 = "/clear-youtube-logo.svg";
const QUERY_PARAMS_DASHBOARD = "dashboard.html";
const QUERY_PARAMS_TAB = "tab";
const QUERY_PARAMS_TAB_LIMITS = "limits";
const QUERY_PARAMS_BLOCK = "block.html";
const QUERY_PARAMS_BLOCK_DOMAIN = "domain";
function useExtensionPage() {
  const urlObj = ref(new URL(location.href));
  const isLimitPage = computed(
    () => urlObj.value.hostname == "hhfnghjdeddcfegfekjeihfmbjenlomm" && urlObj.value.pathname.includes(QUERY_PARAMS_DASHBOARD) && urlObj.value.searchParams.get(QUERY_PARAMS_TAB) == QUERY_PARAMS_TAB_LIMITS
  );
  const isBlockPage = computed(
    () => {
      var _a;
      return urlObj.value.hostname == "hhfnghjdeddcfegfekjeihfmbjenlomm" && urlObj.value.pathname.includes(QUERY_PARAMS_BLOCK) && ((_a = urlObj.value.searchParams.get(QUERY_PARAMS_BLOCK_DOMAIN)) == null ? void 0 : _a.includes("youtube.com"));
    }
  );
  function updateTab(tab) {
    let targetTab = getStringTab(tab);
    const currentTab = urlObj.value.searchParams.get(QUERY_PARAMS_TAB);
    if (window.history.replaceState && currentTab) {
      const sourceUrl = `tab=${currentTab}`;
      const targetUrl = `tab=${targetTab}`;
      window.history.replaceState(
        location.href,
        document.title,
        location.href.replace(sourceUrl, targetUrl)
      );
      urlObj.value = new URL(location.href);
    }
  }
  return {
    isLimitPage,
    isBlockPage,
    updateTab
  };
}
async function usePromoExtension() {
  const settingsStorage = injectStorage();
  const extensionPage = useExtensionPage();
  const hasReviewOnLimits = await settingsStorage.getValue(
    StorageParams.PROMO_CLEAR_YOUTUBE_ON_LIMITS
  );
  const hasReviewOnBlock = await settingsStorage.getValue(
    StorageParams.PROMO_CLEAR_YOUTUBE_ON_BLOCK
  );
  const whitelist = Object.values(
    await settingsStorage.getValue(StorageParams.RESTRICTION_LIST, [])
  );
  const isIncludeYoutube = computed(
    () => whitelist.find((x) => x.domain == "youtube.com") != void 0
  );
  const showOnLimitPage = computed(
    () => (hasReviewOnLimits == void 0 || hasReviewOnLimits == false) && extensionPage.isLimitPage.value && isIncludeYoutube.value
  );
  const showOnBlockPage = computed(
    () => (hasReviewOnBlock == void 0 || hasReviewOnBlock == false) && extensionPage.isBlockPage.value
  );
  return showOnLimitPage.value || showOnBlockPage.value;
}
const _hoisted_1 = {
  key: 0,
  class: "review-block"
};
const _hoisted_2 = ["value"];
const __default__ = {
  name: "PromoClearYouTube"
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...__default__,
  setup(__props) {
    const { t } = useI18n();
    const settingsStorage = injectStorage();
    const extensionPage = useExtensionPage();
    const showReview = ref(true);
    const canShowPromo = computedAsync(async () => await usePromoExtension());
    async function closeBlock() {
      showReview.value = false;
      await saveValue();
    }
    async function openStore() {
      showReview.value = false;
      window.open(CHROME_STORE_CLEAR_YOUTUBE_URL, "_blank");
      await saveValue();
    }
    async function saveValue() {
      let param = void 0;
      if (extensionPage.isBlockPage.value)
        param = StorageParams.PROMO_CLEAR_YOUTUBE_ON_BLOCK;
      if (extensionPage.isLimitPage.value)
        param = StorageParams.PROMO_CLEAR_YOUTUBE_ON_LIMITS;
      if (param)
        await settingsStorage.saveValue(param, true);
    }
    return (_ctx, _cache) => {
      return showReview.value && unref(canShowPromo) ? (openBlock(), createElementBlock("div", _hoisted_1, [
        _cache[2] || (_cache[2] = createBaseVNode("div", { class: "img-block" }, [
          createBaseVNode("img", {
            src: _imports_0,
            height: "45"
          })
        ], -1)),
        createBaseVNode("p", null, toDisplayString(unref(t)("promoClearYoutube.message")), 1),
        createBaseVNode("input", {
          type: "button",
          value: unref(t)("promoClearYoutube.description"),
          onClick: _cache[0] || (_cache[0] = ($event) => openStore())
        }, null, 8, _hoisted_2),
        createBaseVNode("img", {
          height: "15",
          src: _imports_1,
          onClick: _cache[1] || (_cache[1] = ($event) => closeBlock())
        })
      ])) : createCommentVNode("", true);
    };
  }
});
const PromoClearYouTube_vue_vue_type_style_index_0_scoped_ee13cb8a_lang = "";
const PromoClearYouTube = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-ee13cb8a"]]);
export {
  PromoClearYouTube as P,
  _imports_0 as _,
  useExtensionPage as u
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUHJvbW9DbGVhcllvdVR1YmUuanMiLCJzb3VyY2VzIjpbIi4uL3NyYy9hc3NldHMvaWNvbnMvY2xlYXIteW91dHViZS1sb2dvLnN2ZyIsIi4uL3NyYy9jb21wb3NpdGlvbnMvdXNlRXh0ZW5zaW9uUGFnZS50cyIsIi4uL3NyYy9jb21wb3NpdGlvbnMvdXNlUHJvbW9FeHRlbnNpb24udHMiLCIuLi9zcmMvY29tcG9uZW50cy9Qcm9tb0NsZWFyWW91VHViZS52dWUiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgXCJfX1ZJVEVfQVNTRVRfX2FmMTViMTVkX19cIiIsImltcG9ydCB7IGNvbXB1dGVkLCByZWYgfSBmcm9tICd2dWUnO1xuaW1wb3J0IHsgU2V0dGluZ3NUYWIgfSBmcm9tICcuLi91dGlscy9lbnVtcyc7XG5pbXBvcnQgeyBnZXRTdHJpbmdUYWIgfSBmcm9tICcuLi91dGlscy9leHRlbnNpb24tdGFicyc7XG5cbmV4cG9ydCBjb25zdCBRVUVSWV9QQVJBTVNfREFTSEJPQVJEID0gJ2Rhc2hib2FyZC5odG1sJztcbmV4cG9ydCBjb25zdCBRVUVSWV9QQVJBTVNfVEFCID0gJ3RhYic7XG5leHBvcnQgY29uc3QgUVVFUllfUEFSQU1TX1RBQl9MSU1JVFMgPSAnbGltaXRzJztcbmV4cG9ydCBjb25zdCBRVUVSWV9QQVJBTVNfQkxPQ0sgPSAnYmxvY2suaHRtbCc7XG5leHBvcnQgY29uc3QgUVVFUllfUEFSQU1TX0JMT0NLX0RPTUFJTiA9ICdkb21haW4nO1xuXG5leHBvcnQgZnVuY3Rpb24gdXNlRXh0ZW5zaW9uUGFnZSgpIHtcbiAgY29uc3QgdXJsT2JqID0gcmVmKG5ldyBVUkwobG9jYXRpb24uaHJlZikpO1xuXG4gIGNvbnN0IGlzTGltaXRQYWdlID0gY29tcHV0ZWQoXG4gICAgKCkgPT5cbiAgICAgIHVybE9iai52YWx1ZS5ob3N0bmFtZSA9PSBfX0FQUF9JRF9fICYmXG4gICAgICB1cmxPYmoudmFsdWUucGF0aG5hbWUuaW5jbHVkZXMoUVVFUllfUEFSQU1TX0RBU0hCT0FSRCkgJiZcbiAgICAgIHVybE9iai52YWx1ZS5zZWFyY2hQYXJhbXMuZ2V0KFFVRVJZX1BBUkFNU19UQUIpID09IFFVRVJZX1BBUkFNU19UQUJfTElNSVRTLFxuICApO1xuXG4gIGNvbnN0IGlzQmxvY2tQYWdlID0gY29tcHV0ZWQoXG4gICAgKCkgPT5cbiAgICAgIHVybE9iai52YWx1ZS5ob3N0bmFtZSA9PSBfX0FQUF9JRF9fICYmXG4gICAgICB1cmxPYmoudmFsdWUucGF0aG5hbWUuaW5jbHVkZXMoUVVFUllfUEFSQU1TX0JMT0NLKSAmJlxuICAgICAgdXJsT2JqLnZhbHVlLnNlYXJjaFBhcmFtcy5nZXQoUVVFUllfUEFSQU1TX0JMT0NLX0RPTUFJTik/LmluY2x1ZGVzKCd5b3V0dWJlLmNvbScpLFxuICApO1xuXG4gIGZ1bmN0aW9uIHVwZGF0ZVRhYih0YWI6IFNldHRpbmdzVGFiKSB7XG4gICAgbGV0IHRhcmdldFRhYiA9IGdldFN0cmluZ1RhYih0YWIpO1xuICAgIGNvbnN0IGN1cnJlbnRUYWIgPSB1cmxPYmoudmFsdWUuc2VhcmNoUGFyYW1zLmdldChRVUVSWV9QQVJBTVNfVEFCKTtcbiAgICBpZiAod2luZG93Lmhpc3RvcnkucmVwbGFjZVN0YXRlICYmIGN1cnJlbnRUYWIpIHtcbiAgICAgIGNvbnN0IHNvdXJjZVVybCA9IGB0YWI9JHtjdXJyZW50VGFifWA7XG4gICAgICBjb25zdCB0YXJnZXRVcmwgPSBgdGFiPSR7dGFyZ2V0VGFifWA7XG4gICAgICB3aW5kb3cuaGlzdG9yeS5yZXBsYWNlU3RhdGUoXG4gICAgICAgIGxvY2F0aW9uLmhyZWYsXG4gICAgICAgIGRvY3VtZW50LnRpdGxlLFxuICAgICAgICBsb2NhdGlvbi5ocmVmLnJlcGxhY2Uoc291cmNlVXJsLCB0YXJnZXRVcmwpLFxuICAgICAgKTtcbiAgICAgIHVybE9iai52YWx1ZSA9IG5ldyBVUkwobG9jYXRpb24uaHJlZik7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBpc0xpbWl0UGFnZSxcbiAgICBpc0Jsb2NrUGFnZSxcbiAgICB1cGRhdGVUYWIsXG4gIH07XG59XG4iLCJpbXBvcnQgeyBjb21wdXRlZCB9IGZyb20gJ3Z1ZSc7XG5pbXBvcnQgeyBSZXN0cmljdGlvbiB9IGZyb20gJy4uL2VudGl0eS9yZXN0cmljdGlvbic7XG5pbXBvcnQgeyBpbmplY3RTdG9yYWdlIH0gZnJvbSAnLi4vc3RvcmFnZS9pbmplY3Qtc3RvcmFnZSc7XG5pbXBvcnQgeyBTdG9yYWdlUGFyYW1zIH0gZnJvbSAnLi4vc3RvcmFnZS9zdG9yYWdlLXBhcmFtcyc7XG5pbXBvcnQgeyB1c2VFeHRlbnNpb25QYWdlIH0gZnJvbSAnLi91c2VFeHRlbnNpb25QYWdlJztcblxuZXhwb3J0IGNvbnN0IFFVRVJZX1BBUkFNU19EQVNIQk9BUkQgPSAnZGFzaGJvYXJkLmh0bWwnO1xuZXhwb3J0IGNvbnN0IFFVRVJZX1BBUkFNU19EQVNIQk9BUkRfVEFCID0gJ3RhYic7XG5leHBvcnQgY29uc3QgUVVFUllfUEFSQU1TX0RBU0hCT0FSRF9UQUJfU0VUVElOR1MgPSAnc2V0dGluZ3MnO1xuZXhwb3J0IGNvbnN0IFFVRVJZX1BBUkFNU19CTE9DSyA9ICdibG9jay5odG1sJztcbmV4cG9ydCBjb25zdCBRVUVSWV9QQVJBTVNfQkxPQ0tfRE9NQUlOID0gJ2RvbWFpbic7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1c2VQcm9tb0V4dGVuc2lvbigpIHtcbiAgY29uc3Qgc2V0dGluZ3NTdG9yYWdlID0gaW5qZWN0U3RvcmFnZSgpO1xuICBjb25zdCBleHRlbnNpb25QYWdlID0gdXNlRXh0ZW5zaW9uUGFnZSgpO1xuXG4gIGNvbnN0IGhhc1Jldmlld09uTGltaXRzID0gYXdhaXQgc2V0dGluZ3NTdG9yYWdlLmdldFZhbHVlKFxuICAgIFN0b3JhZ2VQYXJhbXMuUFJPTU9fQ0xFQVJfWU9VVFVCRV9PTl9MSU1JVFMsXG4gICk7XG4gIGNvbnN0IGhhc1Jldmlld09uQmxvY2sgPSBhd2FpdCBzZXR0aW5nc1N0b3JhZ2UuZ2V0VmFsdWUoXG4gICAgU3RvcmFnZVBhcmFtcy5QUk9NT19DTEVBUl9ZT1VUVUJFX09OX0JMT0NLLFxuICApO1xuXG4gIGNvbnN0IHdoaXRlbGlzdCA9IE9iamVjdC52YWx1ZXMoXG4gICAgYXdhaXQgc2V0dGluZ3NTdG9yYWdlLmdldFZhbHVlKFN0b3JhZ2VQYXJhbXMuUkVTVFJJQ1RJT05fTElTVCwgW10pLFxuICApIGFzIFJlc3RyaWN0aW9uW107XG5cbiAgY29uc3QgaXNJbmNsdWRlWW91dHViZSA9IGNvbXB1dGVkKFxuICAgICgpID0+IHdoaXRlbGlzdC5maW5kKHggPT4geC5kb21haW4gPT0gJ3lvdXR1YmUuY29tJykgIT0gdW5kZWZpbmVkLFxuICApO1xuXG4gIGNvbnN0IHNob3dPbkxpbWl0UGFnZSA9IGNvbXB1dGVkKFxuICAgICgpID0+XG4gICAgICAoaGFzUmV2aWV3T25MaW1pdHMgPT0gdW5kZWZpbmVkIHx8IGhhc1Jldmlld09uTGltaXRzID09IGZhbHNlKSAmJlxuICAgICAgZXh0ZW5zaW9uUGFnZS5pc0xpbWl0UGFnZS52YWx1ZSAmJlxuICAgICAgaXNJbmNsdWRlWW91dHViZS52YWx1ZSxcbiAgKTtcbiAgY29uc3Qgc2hvd09uQmxvY2tQYWdlID0gY29tcHV0ZWQoXG4gICAgKCkgPT5cbiAgICAgIChoYXNSZXZpZXdPbkJsb2NrID09IHVuZGVmaW5lZCB8fCBoYXNSZXZpZXdPbkJsb2NrID09IGZhbHNlKSAmJlxuICAgICAgZXh0ZW5zaW9uUGFnZS5pc0Jsb2NrUGFnZS52YWx1ZSxcbiAgKTtcblxuICByZXR1cm4gc2hvd09uTGltaXRQYWdlLnZhbHVlIHx8IHNob3dPbkJsb2NrUGFnZS52YWx1ZTtcbn1cbiIsIjx0ZW1wbGF0ZT5cbiAgPGRpdiBjbGFzcz1cInJldmlldy1ibG9ja1wiIHYtaWY9XCJzaG93UmV2aWV3ICYmIGNhblNob3dQcm9tb1wiPlxuICAgIDxkaXYgY2xhc3M9XCJpbWctYmxvY2tcIj5cbiAgICAgIDxpbWcgc3JjPVwiLi4vYXNzZXRzL2ljb25zL2NsZWFyLXlvdXR1YmUtbG9nby5zdmdcIiBoZWlnaHQ9XCI0NVwiIC8+XG4gICAgPC9kaXY+XG4gICAgPHA+e3sgdCgncHJvbW9DbGVhcllvdXR1YmUubWVzc2FnZScpIH19PC9wPlxuICAgIDxpbnB1dCB0eXBlPVwiYnV0dG9uXCIgOnZhbHVlPVwidCgncHJvbW9DbGVhcllvdXR1YmUuZGVzY3JpcHRpb24nKVwiIEBjbGljaz1cIm9wZW5TdG9yZSgpXCIgLz5cbiAgICA8aW1nIGhlaWdodD1cIjE1XCIgc3JjPVwiLi4vYXNzZXRzL2ljb25zL2Nsb3NlLnN2Z1wiIEBjbGljaz1cImNsb3NlQmxvY2soKVwiIC8+XG4gIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdCBsYW5nPVwidHNcIj5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbmFtZTogJ1Byb21vQ2xlYXJZb3VUdWJlJyxcbn07XG48L3NjcmlwdD5cblxuPHNjcmlwdCBsYW5nPVwidHNcIiBzZXR1cD5cbmltcG9ydCB7IHJlZiB9IGZyb20gJ3Z1ZSc7XG5pbXBvcnQgeyB1c2VJMThuIH0gZnJvbSAndnVlLWkxOG4nO1xuaW1wb3J0IHsgaW5qZWN0U3RvcmFnZSB9IGZyb20gJy4uL3N0b3JhZ2UvaW5qZWN0LXN0b3JhZ2UnO1xuaW1wb3J0IHsgU3RvcmFnZVBhcmFtcyB9IGZyb20gJy4uL3N0b3JhZ2Uvc3RvcmFnZS1wYXJhbXMnO1xuaW1wb3J0IHsgQ0hST01FX1NUT1JFX0NMRUFSX1lPVVRVQkVfVVJMIH0gZnJvbSAnLi4vdXRpbHMvY2hyb21lLXVybCc7XG5pbXBvcnQgeyB1c2VQcm9tb0V4dGVuc2lvbiB9IGZyb20gJy4uL2NvbXBvc2l0aW9ucy91c2VQcm9tb0V4dGVuc2lvbic7XG5pbXBvcnQgeyBjb21wdXRlZEFzeW5jIH0gZnJvbSAnQHZ1ZXVzZS9jb3JlJztcbmltcG9ydCB7IHVzZUV4dGVuc2lvblBhZ2UgfSBmcm9tICcuLi9jb21wb3NpdGlvbnMvdXNlRXh0ZW5zaW9uUGFnZSc7XG5cbmNvbnN0IHsgdCB9ID0gdXNlSTE4bigpO1xuXG5jb25zdCBzZXR0aW5nc1N0b3JhZ2UgPSBpbmplY3RTdG9yYWdlKCk7XG5jb25zdCBleHRlbnNpb25QYWdlID0gdXNlRXh0ZW5zaW9uUGFnZSgpO1xuXG5jb25zdCBzaG93UmV2aWV3ID0gcmVmPGJvb2xlYW4+KHRydWUpO1xuXG5jb25zdCBjYW5TaG93UHJvbW8gPSBjb21wdXRlZEFzeW5jKGFzeW5jICgpID0+IGF3YWl0IHVzZVByb21vRXh0ZW5zaW9uKCkpO1xuXG5hc3luYyBmdW5jdGlvbiBjbG9zZUJsb2NrKCkge1xuICBzaG93UmV2aWV3LnZhbHVlID0gZmFsc2U7XG4gIGF3YWl0IHNhdmVWYWx1ZSgpO1xufVxuXG5hc3luYyBmdW5jdGlvbiBvcGVuU3RvcmUoKSB7XG4gIHNob3dSZXZpZXcudmFsdWUgPSBmYWxzZTtcbiAgd2luZG93Lm9wZW4oQ0hST01FX1NUT1JFX0NMRUFSX1lPVVRVQkVfVVJMLCAnX2JsYW5rJyk7XG4gIGF3YWl0IHNhdmVWYWx1ZSgpO1xufVxuXG5hc3luYyBmdW5jdGlvbiBzYXZlVmFsdWUoKSB7XG4gIGxldCBwYXJhbTogU3RvcmFnZVBhcmFtcyB8IHVuZGVmaW5lZCA9IHVuZGVmaW5lZDtcbiAgaWYgKGV4dGVuc2lvblBhZ2UuaXNCbG9ja1BhZ2UudmFsdWUpIHBhcmFtID0gU3RvcmFnZVBhcmFtcy5QUk9NT19DTEVBUl9ZT1VUVUJFX09OX0JMT0NLO1xuICBpZiAoZXh0ZW5zaW9uUGFnZS5pc0xpbWl0UGFnZS52YWx1ZSkgcGFyYW0gPSBTdG9yYWdlUGFyYW1zLlBST01PX0NMRUFSX1lPVVRVQkVfT05fTElNSVRTO1xuICBpZiAocGFyYW0pIGF3YWl0IHNldHRpbmdzU3RvcmFnZS5zYXZlVmFsdWUocGFyYW0sIHRydWUpO1xufVxuPC9zY3JpcHQ+XG5cbjxzdHlsZSBzY29wZWQ+XG4ucmV2aWV3LWJsb2NrIHtcbiAgbWFyZ2luOiAyMHB4IDAgMjBweCAwO1xuICBwYWRkaW5nOiAxMHB4O1xuICBmb250LXNpemU6IDE0cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlZmVmZWY7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cbi5yZXZpZXctYmxvY2sgLmJ0bi1ibG9jayB7XG4gIG1hcmdpbjogOHB4IDVweCAwIDA7XG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gIGZsb2F0OiByaWdodDtcbn1cbi5yZXZpZXctYmxvY2sgcCB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWFyZ2luOiAwIDEwcHg7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgd2lkdGg6IDcwJTtcbn1cbi5yZXZpZXctYmxvY2sgaW1nIHtcbiAgbWFyZ2luLWxlZnQ6IDhweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBmbG9hdDogcmlnaHQ7XG59XG48L3N0eWxlPlxuIl0sIm5hbWVzIjpbIl91bnJlZiIsIl9vcGVuQmxvY2siLCJfY3JlYXRlRWxlbWVudEJsb2NrIiwiX2NyZWF0ZUVsZW1lbnRWTm9kZSJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxNQUFlLGFBQUE7QUNJUixNQUFNLHlCQUF5QjtBQUMvQixNQUFNLG1CQUFtQjtBQUN6QixNQUFNLDBCQUEwQjtBQUNoQyxNQUFNLHFCQUFxQjtBQUMzQixNQUFNLDRCQUE0QjtBQUVsQyxTQUFTLG1CQUFtQjtBQUNqQyxRQUFNLFNBQVMsSUFBSSxJQUFJLElBQUksU0FBUyxJQUFJLENBQUM7QUFFekMsUUFBTSxjQUFjO0FBQUEsSUFDbEIsTUFDRSxPQUFPLE1BQU0sWUFBWSxzQ0FDekIsT0FBTyxNQUFNLFNBQVMsU0FBUyxzQkFBc0IsS0FDckQsT0FBTyxNQUFNLGFBQWEsSUFBSSxnQkFBZ0IsS0FBSztBQUFBLEVBQUE7QUFHdkQsUUFBTSxjQUFjO0FBQUEsSUFDbEIsTUFDRTs7QUFBQSxvQkFBTyxNQUFNLFlBQVksc0NBQ3pCLE9BQU8sTUFBTSxTQUFTLFNBQVMsa0JBQWtCLE9BQ2pELFlBQU8sTUFBTSxhQUFhLElBQUkseUJBQXlCLE1BQXZELG1CQUEwRCxTQUFT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
