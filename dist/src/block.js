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
          createBaseVNode("p", { class: "d-inline-block header" }, "Web Activity Time Tracker")
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
const Block_vue_vue_type_style_index_0_scoped_8f6e0f1e_lang = "";
const Block = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-8f6e0f1e"]]);
const app = createApp(Block);
app.use(i18n);
app.mount("body");
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmxvY2suanMiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbnRpdHkvZGVmZmVyaW5nLnRzIiwiLi4vLi4vc3JjL2Z1bmN0aW9ucy9kZWZlckxpc3QudHMiLCIuLi8uLi9zcmMvdXRpbHMvYmxvY2stcGFnZS50cyIsIi4uLy4uL3NyYy9wYWdlcy9CbG9jay52dWUiLCIuLi8uLi9zcmMvYmxvY2sudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTUlOVVRFIH0gZnJvbSAnLi4vdXRpbHMvdGltZSc7XG5pbXBvcnQgeyBCYXNlVGltZUxpc3QgfSBmcm9tICcuL2Jhc2VUaW1lTGlzdCc7XG5cbmV4cG9ydCBjbGFzcyBEZWZmZXJpbmcgaW1wbGVtZW50cyBCYXNlVGltZUxpc3Qge1xuICBkb21haW46IHN0cmluZztcbiAgdGltZTogbnVtYmVyO1xuXG4gIGNvbnN0cnVjdG9yKGRvbWFpbjogc3RyaW5nLCBtaW51dGVzOiBudW1iZXIpIHtcbiAgICB0aGlzLmRvbWFpbiA9IGRvbWFpbjtcbiAgICB0aGlzLnRpbWUgPSBEYXRlLm5vdygpICsgbWludXRlcyAqIE1JTlVURTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgU3RvcmFnZVBhcmFtcyB9IGZyb20gJy4uL3N0b3JhZ2Uvc3RvcmFnZS1wYXJhbXMnO1xuaW1wb3J0IHsgaXNEb21haW5FcXVhbHMgfSBmcm9tICcuLi91dGlscy9jb21tb24nO1xuaW1wb3J0IHsgU2V0dGluZ3MgfSBmcm9tICcuL3NldHRpbmdzJztcbmltcG9ydCB7IERlZmZlcmluZyB9IGZyb20gJy4uL2VudGl0eS9kZWZmZXJpbmcnO1xuaW1wb3J0IHsgaW5qZWN0U3RvcmFnZSB9IGZyb20gJy4uL3N0b3JhZ2UvaW5qZWN0LXN0b3JhZ2UnO1xuaW1wb3J0IHsgTUlOVVRFIH0gZnJvbSAnLi4vdXRpbHMvdGltZSc7XG5pbXBvcnQgeyBsb2cgfSBmcm9tICcuLi91dGlscy9sb2dnZXInO1xuaW1wb3J0IHsgbWlsbGlzZWNvbmRzSW5Ib3VyIH0gZnJvbSAnZGF0ZS1mbnMnO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gaXNJbkRlZmVyTGlzdCh1cmw6IHN0cmluZyk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICBjb25zdCBkZWZlckxpc3QgPSAoYXdhaXQgU2V0dGluZ3MuZ2V0SW5zdGFuY2UoKS5nZXRTZXR0aW5nKFxuICAgIFN0b3JhZ2VQYXJhbXMuQkxPQ0tfREVGRVJSQUxfVElNRSxcbiAgKSkgYXMgRGVmZmVyaW5nW107XG4gIGNvbnN0IGl0ZW0gPSBkZWZlckxpc3Q/LmZpbmQoeCA9PiBpc0RvbWFpbkVxdWFscyh4LmRvbWFpbiwgdXJsKSk7XG4gIGlmIChpdGVtICE9IHVuZGVmaW5lZCkgbG9nKGBEZWZlcnJpbmcgdGltZSAke3VybH0gJHtuZXcgRGF0ZShpdGVtLnRpbWUpfWApO1xuICByZXR1cm4gaXRlbSAhPSB1bmRlZmluZWQgJiYgaXRlbS50aW1lID4gRGF0ZS5ub3coKTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNhbkRlZmVyaW5nKHVybDogc3RyaW5nKTogUHJvbWlzZTxib29sZWFuPiB7XG4gIGNvbnN0IGRlZmVyTGlzdCA9IChhd2FpdCBTZXR0aW5ncy5nZXRJbnN0YW5jZSgpLmdldFNldHRpbmcoXG4gICAgU3RvcmFnZVBhcmFtcy5CTE9DS19ERUZFUlJBTF9USU1FLFxuICApKSBhcyBEZWZmZXJpbmdbXTtcbiAgY29uc3QgaXRlbSA9IGRlZmVyTGlzdD8uZmluZCh4ID0+IGlzRG9tYWluRXF1YWxzKHguZG9tYWluLCB1cmwpKTtcbiAgaWYgKGl0ZW0gIT0gdW5kZWZpbmVkKSBsb2coYERlZmVycmluZyB0aW1lICR7dXJsfSAke25ldyBEYXRlKGl0ZW0udGltZSl9YCk7XG4gIGlmIChpdGVtID09IHVuZGVmaW5lZCkgcmV0dXJuIHRydWU7XG5cbiAgcmV0dXJuIGl0ZW0gIT0gdW5kZWZpbmVkICYmIERhdGUubm93KCkgLSBuZXcgRGF0ZShpdGVtLnRpbWUpLmdldFRpbWUoKSA+IG1pbGxpc2Vjb25kc0luSG91ciAqIDI0O1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZGVmZXJpbmcodXJsOiBzdHJpbmcsIHRpbWVJbk1pbnV0ZXM6IG51bWJlcik6IFByb21pc2U8dm9pZD4ge1xuICBjb25zdCBzZXR0aW5nc1N0b3JhZ2UgPSBpbmplY3RTdG9yYWdlKCk7XG5cbiAgY29uc3QgZGVmZXJMaXN0ID0gKGF3YWl0IFNldHRpbmdzLmdldEluc3RhbmNlKCkuZ2V0U2V0dGluZyhcbiAgICBTdG9yYWdlUGFyYW1zLkJMT0NLX0RFRkVSUkFMX1RJTUUsXG4gICkpIGFzIERlZmZlcmluZ1tdO1xuICBjb25zdCBpdGVtID0gZGVmZXJMaXN0Py5maW5kKHggPT4gaXNEb21haW5FcXVhbHMoeC5kb21haW4sIHVybCkpO1xuICBpZiAoaXRlbSAhPSB1bmRlZmluZWQpIGl0ZW0udGltZSA9IERhdGUubm93KCkgKyB0aW1lSW5NaW51dGVzICogTUlOVVRFO1xuICBlbHNlIGRlZmVyTGlzdC5wdXNoKG5ldyBEZWZmZXJpbmcodXJsLCA1KSk7XG5cbiAgYXdhaXQgc2V0dGluZ3NTdG9yYWdlLnNhdmVWYWx1ZShTdG9yYWdlUGFyYW1zLkJMT0NLX0RFRkVSUkFMX1RJTUUsIGRlZmVyTGlzdCk7XG59XG4iLCJleHBvcnQgZW51bSBCbG9ja1BhcmFtcyB7XG4gIERvbWFpbiA9ICdkb21haW4nLFxuICBVUkwgPSAndXJsJyxcbiAgTGltaXRUaW1lID0gJ3N1bW1hcnlUaW1lJyxcbiAgU3VtbWFyeUNvdW50ZXIgPSAnc3VtbWFyeUNvdW50ZXInLFxuICBGYXZpY29uID0gJ2Zhdmljb24nLFxufVxuXG5leHBvcnQgZnVuY3Rpb24gYnVpbGRCbG9ja1F1ZXJ5KFxuICBkb21haW46IHN0cmluZyxcbiAgdXJsOiBzdHJpbmcsXG4gIGxpbWl0VGltZTogbnVtYmVyLFxuICBzdW1tYXJ5Q291bnRlcjogbnVtYmVyLFxuICBmYXZpY29uOiBzdHJpbmcsXG4pIHtcbiAgcmV0dXJuIGA/ZG9tYWluPSR7ZG9tYWlufSZ1cmw9JHt1cmx9JnN1bW1hcnlUaW1lPSR7bGltaXRUaW1lfSZzdW1tYXJ5Q291bnRlcj0ke3N1bW1hcnlDb3VudGVyfSZmYXZpY29uPSR7ZmF2aWNvbn1gO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0VmFsdWVGcm9tUXVlcnkodXJsOiBzdHJpbmcpIHtcbiAgY29uc3QgdXJsT2JqID0gbmV3IFVSTCh1cmwpO1xuICBjb25zdCBkb21haW4gPSB1cmxPYmouc2VhcmNoUGFyYW1zLmdldChCbG9ja1BhcmFtcy5Eb21haW4pO1xuICBjb25zdCBzb3VyY2VVcmwgPSB1cmxPYmouc2VhcmNoUGFyYW1zLmdldChCbG9ja1BhcmFtcy5VUkwpO1xuICBjb25zdCBmYXZpY29uID0gdXJsT2JqLnNlYXJjaFBhcmFtcy5nZXQoQmxvY2tQYXJhbXMuRmF2aWNvbik7XG4gIGNvbnN0IGxpbWl0VGltZSA9IE51bWJlcih1cmxPYmouc2VhcmNoUGFyYW1zLmdldChCbG9ja1BhcmFtcy5MaW1pdFRpbWUpKTtcbiAgY29uc3Qgc3VtbWFyeUNvdW50ZXIgPSBOdW1iZXIodXJsT2JqLnNlYXJjaFBhcmFtcy5nZXQoQmxvY2tQYXJhbXMuU3VtbWFyeUNvdW50ZXIpKTtcblxuICByZXR1cm4ge1xuICAgIGRvbWFpbjogZG9tYWluLFxuICAgIHVybDogc291cmNlVXJsLFxuICAgIGxpbWl0VGltZTogbGltaXRUaW1lLFxuICAgIHN1bW1hcnlDb3VudGVyOiBzdW1tYXJ5Q291bnRlcixcbiAgICBmYXZpY29uOiBmYXZpY29uLFxuICB9O1xufVxuIiwiPHRlbXBsYXRlPlxuICA8ZGl2IGNsYXNzPVwiYmxvY2stY29udGFpbmVyXCI+XG4gICAgPGRpdiBjbGFzcz1cImhlYWRlclwiPlxuICAgICAgPGltZyBjbGFzcz1cImQtaW5saW5lLWJsb2NrXCIgaGVpZ2h0PVwiNDBcIiBzcmM9XCIuLi9hc3NldHMvaWNvbnMvNDh4NDgucG5nXCIgLz5cbiAgICAgIDxwIGNsYXNzPVwiZC1pbmxpbmUtYmxvY2sgaGVhZGVyXCI+V2ViIEFjdGl2aXR5IFRpbWUgVHJhY2tlcjwvcD5cbiAgICA8L2Rpdj5cbiAgICA8cD5cbiAgICAgIHt7IHQoJ2Jsb2NrLm1lc3NhZ2UnKSB9fVxuICAgIDwvcD5cbiAgICA8ZGl2PlxuICAgICAgPGltZyBjbGFzcz1cImZhdmljb25cIiBoZWlnaHQ9XCIzNVwiIDpzcmM9XCJmYXZpY29uXCIgLz5cbiAgICAgIDxzcGFuPnt7IHdlYlNpdGUgfX08L3NwYW4+XG4gICAgPC9kaXY+XG4gICAgPHAgY2xhc3M9XCJzb3VyY2UtdXJsXCI+e3sgc291cmNlVXJsIH19PC9wPlxuICAgIDx0YWJsZT5cbiAgICAgIDx0cj5cbiAgICAgICAgPHRkIGNsYXNzPVwidGl0bGVcIj57eyB0KCdsaW1pdC5tZXNzYWdlJykgfX06PC90ZD5cbiAgICAgICAgPHRkIGNsYXNzPVwidmFsdWVcIj57eyBsaW1pdFRpbWVTdHJpbmcgfX08L3RkPlxuICAgICAgPC90cj5cbiAgICAgIDx0cj5cbiAgICAgICAgPHRkIGNsYXNzPVwidGl0bGVcIj57eyB0KCdzZXNzaW9ucy5tZXNzYWdlJykgfX06PC90ZD5cbiAgICAgICAgPHRkIGNsYXNzPVwidmFsdWVcIj57eyBzdW1tYXJ5Q291bnRlciB9fTwvdGQ+XG4gICAgICA8L3RyPlxuICAgIDwvdGFibGU+XG4gICAgPGlucHV0XG4gICAgICB2LWlmPVwiYWxsb3dEZWZlcnJpbmdCbG9jayAmJiBoYXZlVG9TaG93RGVmZmVyaW5nXCJcbiAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgY2xhc3M9XCJtdC0yMFwiXG4gICAgICA6dmFsdWU9XCJ0KCc1bWlucy5tZXNzYWdlJylcIlxuICAgICAgQGNsaWNrPVwiZGVmZXJyaW5nKClcIlxuICAgIC8+XG4gICAgPHAgY2xhc3M9XCJkZXNjdGlwdGlvblwiPnt7IHQoJ2RlZmVycmluZ0Rlc2NyaXB0aW9uLm1lc3NhZ2UnKSB9fTwvcD5cbiAgICA8UHJvbW9DbGVhcllvdVR1YmUgLz5cbiAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0IGxhbmc9XCJ0c1wiIHNldHVwPlxuaW1wb3J0IHsgb25Nb3VudGVkLCByZWYgfSBmcm9tICd2dWUnO1xuaW1wb3J0IHsgdXNlSTE4biB9IGZyb20gJ3Z1ZS1pMThuJztcbmltcG9ydCB7IGdldFZhbHVlRnJvbVF1ZXJ5IH0gZnJvbSAnLi4vdXRpbHMvYmxvY2stcGFnZSc7XG5pbXBvcnQgeyBpbmplY3RTdG9yYWdlIH0gZnJvbSAnLi4vc3RvcmFnZS9pbmplY3Qtc3RvcmFnZSc7XG5pbXBvcnQgeyBCTE9DS19ERUZFUlJBTF9ERUZBVUxULCBTdG9yYWdlUGFyYW1zIH0gZnJvbSAnLi4vc3RvcmFnZS9zdG9yYWdlLXBhcmFtcyc7XG5pbXBvcnQgeyBjb252ZXJ0TGltaXRUaW1lVG9TdHJpbmcgfSBmcm9tICcuLi91dGlscy9jb252ZXJ0ZXInO1xuaW1wb3J0IFByb21vQ2xlYXJZb3VUdWJlIGZyb20gJy4uL2NvbXBvbmVudHMvUHJvbW9DbGVhcllvdVR1YmUudnVlJztcbmltcG9ydCB7IGNhbkRlZmVyaW5nLCBkZWZlcmluZyB9IGZyb20gJy4uL2Z1bmN0aW9ucy9kZWZlckxpc3QnO1xuXG5jb25zdCB7IHQgfSA9IHVzZUkxOG4oKTtcblxuY29uc3Qgc2V0dGluZ3NTdG9yYWdlID0gaW5qZWN0U3RvcmFnZSgpO1xuXG5jb25zdCB3ZWJTaXRlID0gcmVmPHN0cmluZz4oKTtcbmNvbnN0IHNvdXJjZVVybCA9IHJlZjxzdHJpbmc+KCk7XG5jb25zdCBsaW1pdFRpbWUgPSByZWY8bnVtYmVyPigpO1xuY29uc3QgZmF2aWNvbiA9IHJlZjxzdHJpbmc+KCk7XG5jb25zdCBsaW1pdFRpbWVTdHJpbmcgPSByZWY8c3RyaW5nPigpO1xuY29uc3Qgc3VtbWFyeUNvdW50ZXIgPSByZWY8bnVtYmVyPigpO1xuY29uc3QgYWxsb3dEZWZlcnJpbmdCbG9jayA9IHJlZjxib29sZWFuPigpO1xuY29uc3QgaGF2ZVRvU2hvd0RlZmZlcmluZyA9IHJlZjxib29sZWFuPigpO1xuXG5vbk1vdW50ZWQoYXN5bmMgKCkgPT4ge1xuICBjb25zdCBxdWVyeU9iaiA9IGdldFZhbHVlRnJvbVF1ZXJ5KGxvY2F0aW9uLmhyZWYpO1xuICB3ZWJTaXRlLnZhbHVlID0gcXVlcnlPYmouZG9tYWluID8/ICcnO1xuICBzb3VyY2VVcmwudmFsdWUgPSBxdWVyeU9iai51cmwgPz8gJyc7XG4gIGxpbWl0VGltZS52YWx1ZSA9IHF1ZXJ5T2JqLmxpbWl0VGltZTtcbiAgZmF2aWNvbi52YWx1ZSA9IHF1ZXJ5T2JqLmZhdmljb24gPz8gJyc7XG4gIGxpbWl0VGltZVN0cmluZy52YWx1ZSA9IGNvbnZlcnRMaW1pdFRpbWVUb1N0cmluZyhxdWVyeU9iai5saW1pdFRpbWUpO1xuICBzdW1tYXJ5Q291bnRlci52YWx1ZSA9IHF1ZXJ5T2JqLnN1bW1hcnlDb3VudGVyID8/IDA7XG5cbiAgYWxsb3dEZWZlcnJpbmdCbG9jay52YWx1ZSA9IGF3YWl0IHNldHRpbmdzU3RvcmFnZS5nZXRWYWx1ZShcbiAgICBTdG9yYWdlUGFyYW1zLkJMT0NLX0RFRkVSUkFMLFxuICAgIEJMT0NLX0RFRkVSUkFMX0RFRkFVTFQsXG4gICk7XG4gIGhhdmVUb1Nob3dEZWZmZXJpbmcudmFsdWUgPSBhd2FpdCBjYW5EZWZlcmluZyh3ZWJTaXRlLnZhbHVlKTtcbn0pO1xuXG5hc3luYyBmdW5jdGlvbiBkZWZlcnJpbmcoKSB7XG4gIGlmIChcbiAgICB3ZWJTaXRlLnZhbHVlICE9IHVuZGVmaW5lZCAmJlxuICAgIGxpbWl0VGltZS52YWx1ZSAhPSB1bmRlZmluZWQgJiZcbiAgICBhbGxvd0RlZmVycmluZ0Jsb2NrLnZhbHVlICYmXG4gICAgaGF2ZVRvU2hvd0RlZmZlcmluZy52YWx1ZVxuICApIHtcbiAgICBhd2FpdCBkZWZlcmluZyh3ZWJTaXRlLnZhbHVlLCA1KTtcbiAgICBpZiAoc291cmNlVXJsLnZhbHVlICE9ICcnKSB3aW5kb3cubG9jYXRpb24ucmVwbGFjZShzb3VyY2VVcmwudmFsdWUpO1xuICB9XG59XG48L3NjcmlwdD5cblxuPHN0eWxlIHNjb3BlZD5cbmJvZHkge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgb3ZlcmZsb3c6IGF1dG87XG59XG4uYmxvY2stY29udGFpbmVyIHtcbiAgbWFyZ2luOiBhdXRvIGF1dG87XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDQ1JTtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbn1cblxuLmJsb2NrLWNvbnRhaW5lciBwIHtcbiAgZm9udC1zaXplOiAxN3B4O1xufVxuXG4uYmxvY2stY29udGFpbmVyIHNwYW4ge1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDIxcHg7XG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XG59XG5cbi5oZWFkZXIge1xuICBmb250LXdlaWdodDogNjAwO1xuICBjb2xvcjogIzRhNGE0YTtcbiAgZm9udC1zaXplOiAxOXB4ICFpbXBvcnRhbnQ7XG4gIHZlcnRpY2FsLWFsaWduOiBzdXBlcjtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG59XG4uc3RhdHMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuLnN0YXRzIHAge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiAxMDBweDtcbn1cbnRhYmxlIHtcbiAgZm9udC1zaXplOiAxN3B4O1xuICBtYXJnaW46IGF1dG87XG4gIG1hcmdpbi10b3A6IDE1cHg7XG59XG50YWJsZSAudGl0bGUge1xuICB3aWR0aDogMTAwcHg7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG50YWJsZSAudmFsdWUge1xuICBmb250LXdlaWdodDogNjAwO1xufVxuLmRlc2N0aXB0aW9uIHtcbiAgZm9udC1zaXplOiAxM3B4ICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjNGE0YTRhO1xufVxuLmZhdmljb24ge1xuICBtYXJnaW46IDAgMTBweDtcbn1cbi5zb3VyY2UtdXJsIHtcbiAgbWFyZ2luOiA1cHg7XG4gIGZvbnQtc2l6ZTogMTRweCAhaW1wb3J0YW50O1xuICBjb2xvcjogZ3JleTtcbn1cbjwvc3R5bGU+XG4iLCJpbXBvcnQgQmxvY2sgZnJvbSAnLi9wYWdlcy9CbG9jay52dWUnO1xuaW1wb3J0IHsgY3JlYXRlQXBwIH0gZnJvbSAndnVlJztcbmltcG9ydCBpMThuIGZyb20gJy4vcGx1Z2lucy9pMThuJztcblxuY29uc3QgYXBwID0gY3JlYXRlQXBwKEJsb2NrKTtcbmFwcC51c2UoaTE4bik7XG5hcHAubW91bnQoJ2JvZHknKTtcbiJdLCJuYW1lcyI6WyJfb3BlbkJsb2NrIiwiX2NyZWF0ZUVsZW1lbnRCbG9jayIsIl9jcmVhdGVFbGVtZW50Vk5vZGUiLCJfdW5yZWYiLCJfdG9EaXNwbGF5U3RyaW5nIiwiX2NyZWF0ZVZOb2RlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBR08sTUFBTSxVQUFrQztBQUFBLEVBSTdDLFlBQVksUUFBZ0IsU0FBaUI7QUFIN0M7QUFDQTtBQUdFLFNBQUssU0FBUztBQUNkLFNBQUssT0FBTyxLQUFLLElBQUksSUFBSSxVQUFVO0FBQUEsRUFDckM7QUFDRjtBQ09BLGVBQXNCLFlBQVksS0FBK0I7QUFDL0QsUUFBTSxZQUFhLE1BQU0sU0FBUyxZQUFjLEVBQUE7QUFBQSxJQUM5QyxjQUFjO0FBQUEsRUFBQTtBQUVWLFFBQUEsT0FBTyx1Q0FBVyxLQUFLLENBQUEsTUFBSyxlQUFlLEVBQUUsUUFBUSxHQUFHO0FBQzlELE1BQUksUUFBUTtBQUFlLFFBQUEsa0JBQWtCLEdBQUcsSUFBSSxJQUFJLEtBQUssS0FBSyxJQUFJLENBQUMsRUFBRTtBQUN6RSxNQUFJLFFBQVE7QUFBa0IsV0FBQTtBQUU5QixTQUFPLFFBQVEsVUFBYSxLQUFLLElBQUEsSUFBUSxJQUFJLEtBQUssS0FBSyxJQUFJLEVBQUUsUUFBUSxJQUFJLHFCQUFxQjtBQUNoRztBQUVzQixlQUFBLFNBQVMsS0FBYSxlQUFzQztBQUNoRixRQUFNLGtCQUFrQjtBQUV4QixRQUFNLFlBQWEsTUFB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
