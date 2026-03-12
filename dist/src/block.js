var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
import "../browser-polyfill.js";
import { a6 as MINUTE, b as Settings, S as StorageParams, p as isDomainEquals, a7 as log, W as millisecondsInHour, i as injectStorage, a8 as convertLimitTimeToString, B as BLOCK_DEFERRAL_DEFAULT, g as _imports_0 } from "../general.js";
import { P as PromoClearYouTube } from "../PromoClearYouTube.js";
import { d as defineComponent, h as useI18n, i as onMounted, c as createElementBlock, a as createBaseVNode, t as toDisplayString, u as unref, p as createCommentVNode, e as createVNode, g as ref, o as openBlock, _ as _export_sfc, q as createApp, s as i18n } from "../i18n.js";
class Deffering {
  constructor(domain, minutes) {
    __publicField(this, "domain");
    __publicField(this, "time");
    this.domain = domain;
    this.time = Date.now() + minutes * MINUTE;
  }
}
async function canDefering(url) {
  const deferList = await Settings.getInstance().getSetting(
    StorageParams.BLOCK_DEFERRAL_TIME
  );
  const item = deferList == null ? void 0 : deferList.find((x) => isDomainEquals(x.domain, url));
  if (item != void 0)
    log(`Deferring time ${url} ${new Date(item.time)}`);
  if (item == void 0)
    return true;
  return item != void 0 && Date.now() - new Date(item.time).getTime() > millisecondsInHour * 24;
}
async function defering(url, timeInMinutes) {
  const settingsStorage = injectStorage();
  const deferList = await Settings.getInstance().getSetting(
    StorageParams.BLOCK_DEFERRAL_TIME
  );
  const item = deferList == null ? void 0 : deferList.find((x) => isDomainEquals(x.domain, url));
  if (item != void 0)
    item.time = Date.now() + timeInMinutes * MINUTE;
  else
    deferList.push(new Deffering(url, 5));
  await settingsStorage.saveValue(StorageParams.BLOCK_DEFERRAL_TIME, deferList);
}
function getValueFromQuery(url) {
  const urlObj = new URL(url);
  const domain = urlObj.searchParams.get(
    "domain"
    /* Domain */
  );
  const sourceUrl = urlObj.searchParams.get(
    "url"
    /* URL */
  );
  const favicon = urlObj.searchParams.get(
    "favicon"
    /* Favicon */
  );
  const limitTime = Number(urlObj.searchParams.get(
    "summaryTime"
    /* LimitTime */
  ));
  const summaryCounter = Number(urlObj.searchParams.get(
    "summaryCounter"
    /* SummaryCounter */
  ));
  return {
    domain,
    url: sourceUrl,
    limitTime,
    summaryCounter,
    favicon
  };
}
const _hoisted_1 = { class: "block-container" };
const _hoisted_2 = ["src"];
const _hoisted_3 = { class: "source-url" };
const _hoisted_4 = { class: "title" };
const _hoisted_5 = { class: "value" };
const _hoisted_6 = { class: "title" };
const _hoisted_7 = { class: "value" };
const _hoisted_8 = ["value"];
const _hoisted_9 = { class: "desctiption" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Block",
  setup(__props) {
    const { t } = useI18n();
    const settingsStorage = injectStorage();
    const webSite = ref();
    const sourceUrl = ref();
    const limitTime = ref();
    const favicon = ref();
    const limitTimeString = ref();
    const summaryCounter = ref();
    const allowDeferringBlock = ref();
    const haveToShowDeffering = ref();
    onMounted(async () => {
      const queryObj = getValueFromQuery(location.href);
      webSite.value = queryObj.domain ?? "";
      sourceUrl.value = queryObj.url ?? "";
      limitTime.value = queryObj.limitTime;
      favicon.value = queryObj.favicon ?? "";
      limitTimeString.value = convertLimitTimeToString(queryObj.limitTime);
      summaryCounter.value = queryObj.summaryCounter ?? 0;
      allowDeferringBlock.value = await settingsStorage.getValue(
        StorageParams.BLOCK_DEFERRAL,
        BLOCK_DEFERRAL_DEFAULT
      );
      haveToShowDeffering.value = await canDefering(webSite.value);
    });
    async function deferring() {
      if (webSite.value != void 0 && limitTime.value != void 0 && allowDeferringBlock.value && haveToShowDeffering.value) {
        await defering(webSite.value, 5);
        if (sourceUrl.value != "")
          window.location.replace(sourceUrl.value);
      }
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        _cache[1] || (_cache[1] = createBaseVNode("div", { class: "header" }, [
          createBaseVNode("img", {
            class: "d-inline-block",
            height: "40",
            src: _imports_0
          }),
          createBaseVNode("p", { class: "d-inline-block header" }, "TabTrack")
        ], -1)),
        createBaseVNode("p", null, toDisplayString(unref(t)("block.message")), 1),
        createBaseVNode("div", null, [
          createBaseVNode("img", {
            class: "favicon",
            height: "35",
            src: favicon.value
          }, null, 8, _hoisted_2),
          createBaseVNode("span", null, toDisplayString(webSite.value), 1)
        ]),
        createBaseVNode("p", _hoisted_3, toDisplayString(sourceUrl.value), 1),
        createBaseVNode("table", null, [
          createBaseVNode("tr", null, [
            createBaseVNode("td", _hoisted_4, toDisplayString(unref(t)("limit.message")) + ":", 1),
            createBaseVNode("td", _hoisted_5, toDisplayString(limitTimeString.value), 1)
          ]),
          createBaseVNode("tr", null, [
            createBaseVNode("td", _hoisted_6, toDisplayString(unref(t)("sessions.message")) + ":", 1),
            createBaseVNode("td", _hoisted_7, toDisplayString(summaryCounter.value), 1)
          ])
        ]),
        allowDeferringBlock.value && haveToShowDeffering.value ? (openBlock(), createElementBlock("input", {
          key: 0,
          type: "button",
          class: "mt-20",
          value: unref(t)("5mins.message"),
          onClick: _cache[0] || (_cache[0] = ($event) => deferring())
        }, null, 8, _hoisted_8)) : createCommentVNode("", true),
        createBaseVNode("p", _hoisted_9, toDisplayString(unref(t)("deferringDescription.message")), 1),
        createVNode(PromoClearYouTube)
      ]);
    };
  }
});
const Block_vue_vue_type_style_index_0_scoped_093c55cd_lang = "";
const Block = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-093c55cd"]]);
const app = createApp(Block);
app.use(i18n);
app.mount("body");
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmxvY2suanMiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbnRpdHkvZGVmZmVyaW5nLnRzIiwiLi4vLi4vc3JjL2Z1bmN0aW9ucy9kZWZlckxpc3QudHMiLCIuLi8uLi9zcmMvdXRpbHMvYmxvY2stcGFnZS50cyIsIi4uLy4uL3NyYy9wYWdlcy9CbG9jay52dWUiLCIuLi8uLi9zcmMvYmxvY2sudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTUlOVVRFIH0gZnJvbSAnLi4vdXRpbHMvdGltZSc7XHJcbmltcG9ydCB7IEJhc2VUaW1lTGlzdCB9IGZyb20gJy4vYmFzZVRpbWVMaXN0JztcclxuXHJcbmV4cG9ydCBjbGFzcyBEZWZmZXJpbmcgaW1wbGVtZW50cyBCYXNlVGltZUxpc3Qge1xyXG4gIGRvbWFpbjogc3RyaW5nO1xyXG4gIHRpbWU6IG51bWJlcjtcclxuXHJcbiAgY29uc3RydWN0b3IoZG9tYWluOiBzdHJpbmcsIG1pbnV0ZXM6IG51bWJlcikge1xyXG4gICAgdGhpcy5kb21haW4gPSBkb21haW47XHJcbiAgICB0aGlzLnRpbWUgPSBEYXRlLm5vdygpICsgbWludXRlcyAqIE1JTlVURTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgU3RvcmFnZVBhcmFtcyB9IGZyb20gJy4uL3N0b3JhZ2Uvc3RvcmFnZS1wYXJhbXMnO1xyXG5pbXBvcnQgeyBpc0RvbWFpbkVxdWFscyB9IGZyb20gJy4uL3V0aWxzL2NvbW1vbic7XHJcbmltcG9ydCB7IFNldHRpbmdzIH0gZnJvbSAnLi9zZXR0aW5ncyc7XHJcbmltcG9ydCB7IERlZmZlcmluZyB9IGZyb20gJy4uL2VudGl0eS9kZWZmZXJpbmcnO1xyXG5pbXBvcnQgeyBpbmplY3RTdG9yYWdlIH0gZnJvbSAnLi4vc3RvcmFnZS9pbmplY3Qtc3RvcmFnZSc7XHJcbmltcG9ydCB7IE1JTlVURSB9IGZyb20gJy4uL3V0aWxzL3RpbWUnO1xyXG5pbXBvcnQgeyBsb2cgfSBmcm9tICcuLi91dGlscy9sb2dnZXInO1xyXG5pbXBvcnQgeyBtaWxsaXNlY29uZHNJbkhvdXIgfSBmcm9tICdkYXRlLWZucyc7XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gaXNJbkRlZmVyTGlzdCh1cmw6IHN0cmluZyk6IFByb21pc2U8Ym9vbGVhbj4ge1xyXG4gIGNvbnN0IGRlZmVyTGlzdCA9IChhd2FpdCBTZXR0aW5ncy5nZXRJbnN0YW5jZSgpLmdldFNldHRpbmcoXHJcbiAgICBTdG9yYWdlUGFyYW1zLkJMT0NLX0RFRkVSUkFMX1RJTUUsXHJcbiAgKSkgYXMgRGVmZmVyaW5nW107XHJcbiAgY29uc3QgaXRlbSA9IGRlZmVyTGlzdD8uZmluZCh4ID0+IGlzRG9tYWluRXF1YWxzKHguZG9tYWluLCB1cmwpKTtcclxuICBpZiAoaXRlbSAhPSB1bmRlZmluZWQpIGxvZyhgRGVmZXJyaW5nIHRpbWUgJHt1cmx9ICR7bmV3IERhdGUoaXRlbS50aW1lKX1gKTtcclxuICByZXR1cm4gaXRlbSAhPSB1bmRlZmluZWQgJiYgaXRlbS50aW1lID4gRGF0ZS5ub3coKTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNhbkRlZmVyaW5nKHVybDogc3RyaW5nKTogUHJvbWlzZTxib29sZWFuPiB7XHJcbiAgY29uc3QgZGVmZXJMaXN0ID0gKGF3YWl0IFNldHRpbmdzLmdldEluc3RhbmNlKCkuZ2V0U2V0dGluZyhcclxuICAgIFN0b3JhZ2VQYXJhbXMuQkxPQ0tfREVGRVJSQUxfVElNRSxcclxuICApKSBhcyBEZWZmZXJpbmdbXTtcclxuICBjb25zdCBpdGVtID0gZGVmZXJMaXN0Py5maW5kKHggPT4gaXNEb21haW5FcXVhbHMoeC5kb21haW4sIHVybCkpO1xyXG4gIGlmIChpdGVtICE9IHVuZGVmaW5lZCkgbG9nKGBEZWZlcnJpbmcgdGltZSAke3VybH0gJHtuZXcgRGF0ZShpdGVtLnRpbWUpfWApO1xyXG4gIGlmIChpdGVtID09IHVuZGVmaW5lZCkgcmV0dXJuIHRydWU7XHJcblxyXG4gIHJldHVybiBpdGVtICE9IHVuZGVmaW5lZCAmJiBEYXRlLm5vdygpIC0gbmV3IERhdGUoaXRlbS50aW1lKS5nZXRUaW1lKCkgPiBtaWxsaXNlY29uZHNJbkhvdXIgKiAyNDtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlZmVyaW5nKHVybDogc3RyaW5nLCB0aW1lSW5NaW51dGVzOiBudW1iZXIpOiBQcm9taXNlPHZvaWQ+IHtcclxuICBjb25zdCBzZXR0aW5nc1N0b3JhZ2UgPSBpbmplY3RTdG9yYWdlKCk7XHJcblxyXG4gIGNvbnN0IGRlZmVyTGlzdCA9IChhd2FpdCBTZXR0aW5ncy5nZXRJbnN0YW5jZSgpLmdldFNldHRpbmcoXHJcbiAgICBTdG9yYWdlUGFyYW1zLkJMT0NLX0RFRkVSUkFMX1RJTUUsXHJcbiAgKSkgYXMgRGVmZmVyaW5nW107XHJcbiAgY29uc3QgaXRlbSA9IGRlZmVyTGlzdD8uZmluZCh4ID0+IGlzRG9tYWluRXF1YWxzKHguZG9tYWluLCB1cmwpKTtcclxuICBpZiAoaXRlbSAhPSB1bmRlZmluZWQpIGl0ZW0udGltZSA9IERhdGUubm93KCkgKyB0aW1lSW5NaW51dGVzICogTUlOVVRFO1xyXG4gIGVsc2UgZGVmZXJMaXN0LnB1c2gobmV3IERlZmZlcmluZyh1cmwsIDUpKTtcclxuXHJcbiAgYXdhaXQgc2V0dGluZ3NTdG9yYWdlLnNhdmVWYWx1ZShTdG9yYWdlUGFyYW1zLkJMT0NLX0RFRkVSUkFMX1RJTUUsIGRlZmVyTGlzdCk7XHJcbn1cclxuIiwiZXhwb3J0IGVudW0gQmxvY2tQYXJhbXMge1xyXG4gIERvbWFpbiA9ICdkb21haW4nLFxyXG4gIFVSTCA9ICd1cmwnLFxyXG4gIExpbWl0VGltZSA9ICdzdW1tYXJ5VGltZScsXHJcbiAgU3VtbWFyeUNvdW50ZXIgPSAnc3VtbWFyeUNvdW50ZXInLFxyXG4gIEZhdmljb24gPSAnZmF2aWNvbicsXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBidWlsZEJsb2NrUXVlcnkoXHJcbiAgZG9tYWluOiBzdHJpbmcsXHJcbiAgdXJsOiBzdHJpbmcsXHJcbiAgbGltaXRUaW1lOiBudW1iZXIsXHJcbiAgc3VtbWFyeUNvdW50ZXI6IG51bWJlcixcclxuICBmYXZpY29uOiBzdHJpbmcsXHJcbikge1xyXG4gIHJldHVybiBgP2RvbWFpbj0ke2RvbWFpbn0mdXJsPSR7dXJsfSZzdW1tYXJ5VGltZT0ke2xpbWl0VGltZX0mc3VtbWFyeUNvdW50ZXI9JHtzdW1tYXJ5Q291bnRlcn0mZmF2aWNvbj0ke2Zhdmljb259YDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldFZhbHVlRnJvbVF1ZXJ5KHVybDogc3RyaW5nKSB7XHJcbiAgY29uc3QgdXJsT2JqID0gbmV3IFVSTCh1cmwpO1xyXG4gIGNvbnN0IGRvbWFpbiA9IHVybE9iai5zZWFyY2hQYXJhbXMuZ2V0KEJsb2NrUGFyYW1zLkRvbWFpbik7XHJcbiAgY29uc3Qgc291cmNlVXJsID0gdXJsT2JqLnNlYXJjaFBhcmFtcy5nZXQoQmxvY2tQYXJhbXMuVVJMKTtcclxuICBjb25zdCBmYXZpY29uID0gdXJsT2JqLnNlYXJjaFBhcmFtcy5nZXQoQmxvY2tQYXJhbXMuRmF2aWNvbik7XHJcbiAgY29uc3QgbGltaXRUaW1lID0gTnVtYmVyKHVybE9iai5zZWFyY2hQYXJhbXMuZ2V0KEJsb2NrUGFyYW1zLkxpbWl0VGltZSkpO1xyXG4gIGNvbnN0IHN1bW1hcnlDb3VudGVyID0gTnVtYmVyKHVybE9iai5zZWFyY2hQYXJhbXMuZ2V0KEJsb2NrUGFyYW1zLlN1bW1hcnlDb3VudGVyKSk7XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBkb21haW46IGRvbWFpbixcclxuICAgIHVybDogc291cmNlVXJsLFxyXG4gICAgbGltaXRUaW1lOiBsaW1pdFRpbWUsXHJcbiAgICBzdW1tYXJ5Q291bnRlcjogc3VtbWFyeUNvdW50ZXIsXHJcbiAgICBmYXZpY29uOiBmYXZpY29uLFxyXG4gIH07XHJcbn1cclxuIiwiPHRlbXBsYXRlPlxyXG4gIDxkaXYgY2xhc3M9XCJibG9jay1jb250YWluZXJcIj5cclxuICAgIDxkaXYgY2xhc3M9XCJoZWFkZXJcIj5cclxuICAgICAgPGltZyBjbGFzcz1cImQtaW5saW5lLWJsb2NrXCIgaGVpZ2h0PVwiNDBcIiBzcmM9XCIuLi9hc3NldHMvaWNvbnMvNDh4NDgucG5nXCIgLz5cclxuICAgICAgPHAgY2xhc3M9XCJkLWlubGluZS1ibG9jayBoZWFkZXJcIj5UYWJUcmFjazwvcD5cclxuICAgIDwvZGl2PlxyXG4gICAgPHA+XHJcbiAgICAgIHt7IHQoJ2Jsb2NrLm1lc3NhZ2UnKSB9fVxyXG4gICAgPC9wPlxyXG4gICAgPGRpdj5cclxuICAgICAgPGltZyBjbGFzcz1cImZhdmljb25cIiBoZWlnaHQ9XCIzNVwiIDpzcmM9XCJmYXZpY29uXCIgLz5cclxuICAgICAgPHNwYW4+e3sgd2ViU2l0ZSB9fTwvc3Bhbj5cclxuICAgIDwvZGl2PlxyXG4gICAgPHAgY2xhc3M9XCJzb3VyY2UtdXJsXCI+e3sgc291cmNlVXJsIH19PC9wPlxyXG4gICAgPHRhYmxlPlxyXG4gICAgICA8dHI+XHJcbiAgICAgICAgPHRkIGNsYXNzPVwidGl0bGVcIj57eyB0KCdsaW1pdC5tZXNzYWdlJykgfX06PC90ZD5cclxuICAgICAgICA8dGQgY2xhc3M9XCJ2YWx1ZVwiPnt7IGxpbWl0VGltZVN0cmluZyB9fTwvdGQ+XHJcbiAgICAgIDwvdHI+XHJcbiAgICAgIDx0cj5cclxuICAgICAgICA8dGQgY2xhc3M9XCJ0aXRsZVwiPnt7IHQoJ3Nlc3Npb25zLm1lc3NhZ2UnKSB9fTo8L3RkPlxyXG4gICAgICAgIDx0ZCBjbGFzcz1cInZhbHVlXCI+e3sgc3VtbWFyeUNvdW50ZXIgfX08L3RkPlxyXG4gICAgICA8L3RyPlxyXG4gICAgPC90YWJsZT5cclxuICAgIDxpbnB1dFxyXG4gICAgICB2LWlmPVwiYWxsb3dEZWZlcnJpbmdCbG9jayAmJiBoYXZlVG9TaG93RGVmZmVyaW5nXCJcclxuICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgIGNsYXNzPVwibXQtMjBcIlxyXG4gICAgICA6dmFsdWU9XCJ0KCc1bWlucy5tZXNzYWdlJylcIlxyXG4gICAgICBAY2xpY2s9XCJkZWZlcnJpbmcoKVwiXHJcbiAgICAvPlxyXG4gICAgPHAgY2xhc3M9XCJkZXNjdGlwdGlvblwiPnt7IHQoJ2RlZmVycmluZ0Rlc2NyaXB0aW9uLm1lc3NhZ2UnKSB9fTwvcD5cclxuICAgIDxQcm9tb0NsZWFyWW91VHViZSAvPlxyXG4gIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdCBsYW5nPVwidHNcIiBzZXR1cD5cclxuaW1wb3J0IHsgb25Nb3VudGVkLCByZWYgfSBmcm9tICd2dWUnO1xyXG5pbXBvcnQgeyB1c2VJMThuIH0gZnJvbSAndnVlLWkxOG4nO1xyXG5pbXBvcnQgeyBnZXRWYWx1ZUZyb21RdWVyeSB9IGZyb20gJy4uL3V0aWxzL2Jsb2NrLXBhZ2UnO1xyXG5pbXBvcnQgeyBpbmplY3RTdG9yYWdlIH0gZnJvbSAnLi4vc3RvcmFnZS9pbmplY3Qtc3RvcmFnZSc7XHJcbmltcG9ydCB7IEJMT0NLX0RFRkVSUkFMX0RFRkFVTFQsIFN0b3JhZ2VQYXJhbXMgfSBmcm9tICcuLi9zdG9yYWdlL3N0b3JhZ2UtcGFyYW1zJztcclxuaW1wb3J0IHsgY29udmVydExpbWl0VGltZVRvU3RyaW5nIH0gZnJvbSAnLi4vdXRpbHMvY29udmVydGVyJztcclxuaW1wb3J0IFByb21vQ2xlYXJZb3VUdWJlIGZyb20gJy4uL2NvbXBvbmVudHMvUHJvbW9DbGVhcllvdVR1YmUudnVlJztcclxuaW1wb3J0IHsgY2FuRGVmZXJpbmcsIGRlZmVyaW5nIH0gZnJvbSAnLi4vZnVuY3Rpb25zL2RlZmVyTGlzdCc7XHJcblxyXG5jb25zdCB7IHQgfSA9IHVzZUkxOG4oKTtcclxuXHJcbmNvbnN0IHNldHRpbmdzU3RvcmFnZSA9IGluamVjdFN0b3JhZ2UoKTtcclxuXHJcbmNvbnN0IHdlYlNpdGUgPSByZWY8c3RyaW5nPigpO1xyXG5jb25zdCBzb3VyY2VVcmwgPSByZWY8c3RyaW5nPigpO1xyXG5jb25zdCBsaW1pdFRpbWUgPSByZWY8bnVtYmVyPigpO1xyXG5jb25zdCBmYXZpY29uID0gcmVmPHN0cmluZz4oKTtcclxuY29uc3QgbGltaXRUaW1lU3RyaW5nID0gcmVmPHN0cmluZz4oKTtcclxuY29uc3Qgc3VtbWFyeUNvdW50ZXIgPSByZWY8bnVtYmVyPigpO1xyXG5jb25zdCBhbGxvd0RlZmVycmluZ0Jsb2NrID0gcmVmPGJvb2xlYW4+KCk7XHJcbmNvbnN0IGhhdmVUb1Nob3dEZWZmZXJpbmcgPSByZWY8Ym9vbGVhbj4oKTtcclxuXHJcbm9uTW91bnRlZChhc3luYyAoKSA9PiB7XHJcbiAgY29uc3QgcXVlcnlPYmogPSBnZXRWYWx1ZUZyb21RdWVyeShsb2NhdGlvbi5ocmVmKTtcclxuICB3ZWJTaXRlLnZhbHVlID0gcXVlcnlPYmouZG9tYWluID8/ICcnO1xyXG4gIHNvdXJjZVVybC52YWx1ZSA9IHF1ZXJ5T2JqLnVybCA/PyAnJztcclxuICBsaW1pdFRpbWUudmFsdWUgPSBxdWVyeU9iai5saW1pdFRpbWU7XHJcbiAgZmF2aWNvbi52YWx1ZSA9IHF1ZXJ5T2JqLmZhdmljb24gPz8gJyc7XHJcbiAgbGltaXRUaW1lU3RyaW5nLnZhbHVlID0gY29udmVydExpbWl0VGltZVRvU3RyaW5nKHF1ZXJ5T2JqLmxpbWl0VGltZSk7XHJcbiAgc3VtbWFyeUNvdW50ZXIudmFsdWUgPSBxdWVyeU9iai5zdW1tYXJ5Q291bnRlciA/PyAwO1xyXG5cclxuICBhbGxvd0RlZmVycmluZ0Jsb2NrLnZhbHVlID0gYXdhaXQgc2V0dGluZ3NTdG9yYWdlLmdldFZhbHVlKFxyXG4gICAgU3RvcmFnZVBhcmFtcy5CTE9DS19ERUZFUlJBTCxcclxuICAgIEJMT0NLX0RFRkVSUkFMX0RFRkFVTFQsXHJcbiAgKTtcclxuICBoYXZlVG9TaG93RGVmZmVyaW5nLnZhbHVlID0gYXdhaXQgY2FuRGVmZXJpbmcod2ViU2l0ZS52YWx1ZSk7XHJcbn0pO1xyXG5cclxuYXN5bmMgZnVuY3Rpb24gZGVmZXJyaW5nKCkge1xyXG4gIGlmIChcclxuICAgIHdlYlNpdGUudmFsdWUgIT0gdW5kZWZpbmVkICYmXHJcbiAgICBsaW1pdFRpbWUudmFsdWUgIT0gdW5kZWZpbmVkICYmXHJcbiAgICBhbGxvd0RlZmVycmluZ0Jsb2NrLnZhbHVlICYmXHJcbiAgICBoYXZlVG9TaG93RGVmZmVyaW5nLnZhbHVlXHJcbiAgKSB7XHJcbiAgICBhd2FpdCBkZWZlcmluZyh3ZWJTaXRlLnZhbHVlLCA1KTtcclxuICAgIGlmIChzb3VyY2VVcmwudmFsdWUgIT0gJycpIHdpbmRvdy5sb2NhdGlvbi5yZXBsYWNlKHNvdXJjZVVybC52YWx1ZSk7XHJcbiAgfVxyXG59XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlIHNjb3BlZD5cclxuYm9keSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICBvdmVyZmxvdzogYXV0bztcclxufVxyXG4uYmxvY2stY29udGFpbmVyIHtcclxuICBtYXJnaW46IGF1dG8gYXV0bztcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogNDUlO1xyXG4gIGxlZnQ6IDUwJTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxufVxyXG5cclxuLmJsb2NrLWNvbnRhaW5lciBwIHtcclxuICBmb250LXNpemU6IDE3cHg7XHJcbn1cclxuXHJcbi5ibG9jay1jb250YWluZXIgc3BhbiB7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBmb250LXNpemU6IDIxcHg7XHJcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcclxufVxyXG5cclxuLmhlYWRlciB7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBjb2xvcjogIzRhNGE0YTtcclxuICBmb250LXNpemU6IDE5cHggIWltcG9ydGFudDtcclxuICB2ZXJ0aWNhbC1hbGlnbjogc3VwZXI7XHJcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbn1cclxuLnN0YXRzIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuLnN0YXRzIHAge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICB3aWR0aDogMTAwcHg7XHJcbn1cclxudGFibGUge1xyXG4gIGZvbnQtc2l6ZTogMTdweDtcclxuICBtYXJnaW46IGF1dG87XHJcbiAgbWFyZ2luLXRvcDogMTVweDtcclxufVxyXG50YWJsZSAudGl0bGUge1xyXG4gIHdpZHRoOiAxMDBweDtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG59XHJcbnRhYmxlIC52YWx1ZSB7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxufVxyXG4uZGVzY3RpcHRpb24ge1xyXG4gIGZvbnQtc2l6ZTogMTNweCAhaW1wb3J0YW50O1xyXG4gIGNvbG9yOiAjNGE0YTRhO1xyXG59XHJcbi5mYXZpY29uIHtcclxuICBtYXJnaW46IDAgMTBweDtcclxufVxyXG4uc291cmNlLXVybCB7XHJcbiAgbWFyZ2luOiA1cHg7XHJcbiAgZm9udC1zaXplOiAxNHB4ICFpbXBvcnRhbnQ7XHJcbiAgY29sb3I6IGdyZXk7XHJcbn1cclxuPC9zdHlsZT5cclxuIiwiaW1wb3J0IEJsb2NrIGZyb20gJy4vcGFnZXMvQmxvY2sudnVlJztcclxuaW1wb3J0IHsgY3JlYXRlQXBwIH0gZnJvbSAndnVlJztcclxuaW1wb3J0IGkxOG4gZnJvbSAnLi9wbHVnaW5zL2kxOG4nO1xyXG5cclxuY29uc3QgYXBwID0gY3JlYXRlQXBwKEJsb2NrKTtcclxuYXBwLnVzZShpMThuKTtcclxuYXBwLm1vdW50KCdib2R5Jyk7XHJcbiJdLCJuYW1lcyI6WyJfb3BlbkJsb2NrIiwiX2NyZWF0ZUVsZW1lbnRCbG9jayIsIl9jcmVhdGVFbGVtZW50Vk5vZGUiLCJfdW5yZWYiLCJfdG9EaXNwbGF5U3RyaW5nIiwiX2NyZWF0ZVZOb2RlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBR08sTUFBTSxVQUFrQztBQUFBLEVBSTdD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
