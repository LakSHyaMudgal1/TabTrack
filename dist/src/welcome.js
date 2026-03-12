import { B as Browser } from "../browser-polyfill.js";
import { d as defineComponent, h as useI18n, i as onMounted, c as createElementBlock, a as createBaseVNode, t as toDisplayString, u as unref, p as createCommentVNode, b as createTextVNode, g as ref, o as openBlock, _ as _export_sfc, q as createApp, s as i18n } from "../i18n.js";
const _imports_0 = "/initial.jpg";
const _imports_1 = "/extension.svg";
const _imports_2 = "/pin.svg";
const _imports_3 = "/pin-tutorial.png";
const _imports_4 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAjCAYAAAAe2bNZAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAL8SURBVFhH7ZZfSFNRHMe/23RzZi4zTbOSSk0osH9UFpX2UFkklFYK9RBFRSm9GNFD4UMF4sj++CpFD2mGBGGaiKVFQSmFUVZqiqil5Qpttu263dv9nd29dNu80w1G7DMO557f+Z1zvvud3zn3qgQRBAhqqQ4IgmLcERTjjv9DTMapC1BtyGWFnn3BtO6Z4opqZ31kP6uni9diRs2/UXa3Fi1v3qP1QzezrV+WgsxVy1GQmwVDRDizTQkSMxlWjhMS95wQDl8sF+J3HxVu1zcLQ6afgoPnWaFnslFf4ZUK5ts/PCKNVo6iyIjrIf3YOUzYHXhcXoxvE31oGWiAWuVMOV7gsWX+dsSGJmJrQTEsNg6vb5VCr9OyfqUoEmO2WJFyoBAdd66i1dSEh701EMRfiDqE9dt5O0xDArKSd2LX0myk5p1GV/UNzAzXs36lKDpNZVW1KDl5kEXEJYQgEVQGe3ncv2lFfVcd8yktOITr1XXMxxsUiWlqe4tta9PY1riEuBjocaCu0oasPB2i41TMh3wbW9slD+UoEtPRO4CYKAPLEdfWEH2dDtRXcqIQLRIWOfvIh3xpjLcE1PeMTMyDdiuMj8z4/N0hWXzDkhgNinZEIDstTLLIkW2TP4QQNCfN7QmZGH8IcTHZ3B4TOGd1GD5disWTM9GsvTFJi7bzMRg0zmXFuC+S2X2FWzEk5PLeSEToVJIFiDOo8aqHQ0LRMJ51cchI1TGBvkKWwLSQC1roWr4Bv6w8MktNktVJ1fEoJMWG4Hk3h+wVYRi3CoiaocLXUR6cXUBitAadw3bZOIqoOxTdM39D27MpWYvmjzb0/3DmwbsvE6h8aUG8GL0XokCK3LxZGhZhpXgthiKSs0aPssZxFN0bk6ziTSyKGhrjYbYJrKa2t3glhv7lyoWhqGmzwNjg+ZhOBa/EpC/WsoTOX6dne08na8FsjdQ7fWQJvLlkxG93Dd3CT8/OkVpyZJGhK5sG+RrX68ATAfWinNLR9hdBMe4Iivk3wB8/O6BYMd8MyAAAAABJRU5ErkJggg==";
const _hoisted_1 = { class: "main" };
const _hoisted_2 = {
  key: 0,
  class: "initial-block"
};
const _hoisted_3 = { class: "header" };
const _hoisted_4 = ["innerHTML"];
const _hoisted_5 = { class: "next-btn" };
const _hoisted_6 = {
  key: 1,
  class: "steps"
};
const _hoisted_7 = { class: "header" };
const _hoisted_8 = { class: "description" };
const _hoisted_9 = { class: "step" };
const _hoisted_10 = { class: "description" };
const _hoisted_11 = { class: "step" };
const _hoisted_12 = { class: "description" };
const _hoisted_13 = { class: "step" };
const _hoisted_14 = { class: "description mt-20" };
const _hoisted_15 = { class: "btn-block" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Welcome",
  setup(__props) {
    const { t } = useI18n();
    const step = ref();
    onMounted(() => {
      step.value = 0;
    });
    function nextStep() {
      step.value = 1;
    }
    async function close() {
      const currentTab = await Browser.tabs.getCurrent();
      await Browser.tabs.remove(currentTab.id);
    }
    async function openDashboard() {
      const url = Browser.runtime.getURL("src/dashboard.html?tab=dashboard");
      const tab = await Browser.tabs.query({ currentWindow: true, active: true });
      Browser.tabs.update(tab[0].id, { url });
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        step.value == 0 ? (openBlock(), createElementBlock("div", _hoisted_2, [
          createBaseVNode("p", _hoisted_3, toDisplayString(unref(t)("welcome.message")), 1),
          _cache[3] || (_cache[3] = createBaseVNode("img", {
            class: "img",
            src: _imports_0,
            height: "250"
          }, null, -1)),
          createBaseVNode("p", {
            class: "description",
            innerHTML: unref(t)("welcome.description")
          }, null, 8, _hoisted_4),
          createBaseVNode("div", _hoisted_5, [
            createBaseVNode("button", {
              onClick: _cache[0] || (_cache[0] = ($event) => nextStep())
            }, toDisplayString(unref(t)("next.message")), 1)
          ])
        ])) : createCommentVNode("", true),
        step.value == 1 ? (openBlock(), createElementBlock("div", _hoisted_6, [
          createBaseVNode("p", _hoisted_7, toDisplayString(unref(t)("getStarted.message")), 1),
          createBaseVNode("p", _hoisted_8, toDisplayString(unref(t)("welcomeStart.message")), 1),
          createBaseVNode("p", _hoisted_9, "1. " + toDisplayString(unref(t)("pinIcon.message")), 1),
          createBaseVNode("p", _hoisted_10, [
            createTextVNode(toDisplayString(unref(t)("pinIconPart1.message")) + " ", 1),
            _cache[4] || (_cache[4] = createBaseVNode("img", {
              src: _imports_1,
              height: "25"
            }, null, -1)),
            createTextVNode(" " + toDisplayString(unref(t)("pinIconPart2.message")) + " ", 1),
            _cache[5] || (_cache[5] = createBaseVNode("img", {
              src: _imports_2,
              height: "25"
            }, null, -1))
          ]),
          _cache[7] || (_cache[7] = createBaseVNode("img", {
            class: "img",
            src: _imports_3,
            height: "250"
          }, null, -1)),
          createBaseVNode("p", _hoisted_11, "2. " + toDisplayString(unref(t)("browse.message")), 1),
          createBaseVNode("p", _hoisted_12, [
            createTextVNode(toDisplayString(unref(t)("browse.description")) + " ", 1),
            _cache[6] || (_cache[6] = createBaseVNode("img", {
              src: _imports_4,
              height: "35"
            }, null, -1))
          ]),
          createBaseVNode("p", _hoisted_13, "3. " + toDisplayString(unref(t)("seeData.message")), 1),
          createBaseVNode("p", _hoisted_14, toDisplayString(unref(t)("seeData.description")), 1),
          createBaseVNode("div", _hoisted_15, [
            createBaseVNode("button", {
              class: "close",
              onClick: _cache[1] || (_cache[1] = ($event) => close())
            }, toDisplayString(unref(t)("close.message")), 1),
            createBaseVNode("button", {
              onClick: _cache[2] || (_cache[2] = ($event) => openDashboard())
            }, toDisplayString(unref(t)("useExtension.message")), 1)
          ])
        ])) : createCommentVNode("", true)
      ]);
    };
  }
});
const Welcome_vue_vue_type_style_index_0_scoped_77bffd68_lang = "";
const Welcome = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-77bffd68"]]);
const app = createApp(Welcome);
app.use(i18n);
app.mount("body");
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2VsY29tZS5qcyIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2Fzc2V0cy9pbml0aWFsLmpwZyIsIi4uLy4uL3NyYy9hc3NldHMvaWNvbnMvZXh0ZW5zaW9uLnN2ZyIsIi4uLy4uL3NyYy9hc3NldHMvaWNvbnMvcGluLnN2ZyIsIi4uLy4uL3NyYy9hc3NldHMvcGluLXR1dG9yaWFsLnBuZyIsIi4uLy4uL3NyYy9hc3NldHMvaWNvbnMvaWNvbi5wbmciLCIuLi8uLi9zcmMvcGFnZXMvV2VsY29tZS52dWUiLCIuLi8uLi9zcmMvd2VsY29tZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBcIl9fVklURV9BU1NFVF9fNjE2OGUzMmVfX1wiIiwiZXhwb3J0IGRlZmF1bHQgXCJfX1ZJVEVfQVNTRVRfXzY2NmYxYjQxX19cIiIsImV4cG9ydCBkZWZhdWx0IFwiX19WSVRFX0FTU0VUX19iN2I3MTUzM19fXCIiLCJleHBvcnQgZGVmYXVsdCBcIl9fVklURV9BU1NFVF9fN2U3N2MwMTNfX1wiIiwiZXhwb3J0IGRlZmF1bHQgXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUNNQUFBQWpDQVlBQUFBZTJiTlpBQUFBQVhOU1IwSUFyczRjNlFBQUFBUm5RVTFCQUFDeGp3djhZUVVBQUFBSmNFaFpjd0FBRHNNQUFBN0RBY2R2cUdRQUFBTDhTVVJCVkZoSDdaWmZTRk5SSE1lLzIzUnpaaTR6VGJPU1NrMG9zSDlVRnBYMlVGa2tsRllLOVJCRlJTbTlHTkZENFVNRjRzaisrQ3BGRDJtR0JHR2FpS1ZGUVNtRlVWWnFpcWlsNVFwdHR1MjYzZHY5bmQyOWROdTgwdzFHN0RNTzU1N2YrWjF6dnZ1ZDN6bjNxZ1FSQkFocXFRNElnbUxjRVJUamp2OURUTWFwQzFCdHlHV0ZubjNCdE82WjRvcHFaMzFrUDZ1bmk5ZGlSczIvVVhhM0ZpMXYzcVAxUXplenJWK1dnc3hWeTFHUW13VkRSRGl6VFFrU014bFdqaE1TOTV3UURsOHNGK0ozSHhWdTF6Y0xRNmFmZ29QbldhRm5zbEZmNFpVSzV0cy9QQ0tOVm82aXlJanJJZjNZT1V6WUhYaGNYb3h2RTMxb0dXaUFXdVZNT1Y3Z3NXWCtkc1NHSm1KclFURXNOZzZ2YjVWQ3I5T3lmcVVvRW1PMldKRnlvQkFkZDY2aTFkU0VoNzAxRU1SZmlEcUU5ZHQ1TzB4REFyS1NkMkxYMG15azVwMUdWL1VOekF6WHMzNmxLRHBOWlZXMUtEbDVrRVhFSllRZ0VWUUdlM25jdjJsRmZWY2Q4eWt0T0lUcjFYWE14eHNVaVdscWU0dHRhOVBZMXJpRXVCam9jYUN1MG9hc1BCMmk0MVRNaDN3Ylc5c2xEK1VvRXRQUk80Q1lLQVBMRWRmV0VIMmREdFJYY3FJUUxSSVdPZnZJaDN4cGpMY0UxUGVNVE15RGRpdU1qOHo0L04waFdYekRraGdOaW5aRUlEc3RUTExJa1cyVFA0UVFOQ2ZON1FtWkdIOEljVEhaM0I0VE9HZDFHRDVkaXNXVE05R3N2VEZKaTdiek1SZzB6bVhGdUMrUzJYMkZXekVrNVBMZVNFVG9WSklGaURPbzhhcUhRMExSTUo1MWNjaEkxVEdCdmtLV3dMU1FDMXJvV3I0QnY2dzhNa3ROa3RWSjFmRW9KTVdHNEhrM2grd1ZZUmkzQ29pYW9jTFhVUjZjWFVCaXRBYWR3M2JaT0lxb094VGRNMzlEMjdNcFdZdm1qemIwLzNEbXdic3ZFNmg4YVVHOEdMMFhva0NLM0x4WkdoWmhwWGd0aGlLU3MwYVBzc1p4Rk4wYms2emlUU3lLR2hyalliWUpyS2EydDNnbGh2N2x5b1docUdtendOamcrWmhPQmEvRXBDL1dzb1RPWDZkbmUwOG5hOEZzamRRN2ZXUUp2TGxreEc5M0RkM0NUOC9Pa1ZweVpKR2hLNXNHK1JyWDY4QVRBZldpbk5MUjloZEJNZTRJaXZrM3dCOC9PNkJZTWQ4TXlBQUFBQUJKUlU1RXJrSmdnZz09XCIiLCI8dGVtcGxhdGU+XHJcbiAgPGRpdiBjbGFzcz1cIm1haW5cIj5cclxuICAgIDx0ZW1wbGF0ZSB2LWlmPVwic3RlcCA9PSBXZWxjb21lU3RlcC5Jbml0aWFsVmlld1wiPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiaW5pdGlhbC1ibG9ja1wiPlxyXG4gICAgICAgIDxwIGNsYXNzPVwiaGVhZGVyXCI+e3sgdCgnd2VsY29tZS5tZXNzYWdlJykgfX08L3A+XHJcbiAgICAgICAgPGltZyBjbGFzcz1cImltZ1wiIHNyYz1cIi4uL2Fzc2V0cy9pbml0aWFsLmpwZ1wiIGhlaWdodD1cIjI1MFwiIC8+XHJcbiAgICAgICAgPHAgY2xhc3M9XCJkZXNjcmlwdGlvblwiIHYtaHRtbD1cInQoJ3dlbGNvbWUuZGVzY3JpcHRpb24nKVwiPjwvcD5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwibmV4dC1idG5cIj5cclxuICAgICAgICAgIDxidXR0b24gQGNsaWNrPVwibmV4dFN0ZXAoKVwiPnt7IHQoJ25leHQubWVzc2FnZScpIH19PC9idXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC90ZW1wbGF0ZT5cclxuICAgIDx0ZW1wbGF0ZSB2LWlmPVwic3RlcCA9PSBXZWxjb21lU3RlcC5UdXRvcmlhbFwiPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwic3RlcHNcIj5cclxuICAgICAgICA8cCBjbGFzcz1cImhlYWRlclwiPnt7IHQoJ2dldFN0YXJ0ZWQubWVzc2FnZScpIH19PC9wPlxyXG4gICAgICAgIDxwIGNsYXNzPVwiZGVzY3JpcHRpb25cIj57eyB0KCd3ZWxjb21lU3RhcnQubWVzc2FnZScpIH19PC9wPlxyXG4gICAgICAgIDxwIGNsYXNzPVwic3RlcFwiPjEuIHt7IHQoJ3Bpbkljb24ubWVzc2FnZScpIH19PC9wPlxyXG4gICAgICAgIDxwIGNsYXNzPVwiZGVzY3JpcHRpb25cIj5cclxuICAgICAgICAgIHt7IHQoJ3Bpbkljb25QYXJ0MS5tZXNzYWdlJykgfX1cclxuICAgICAgICAgIDxpbWcgc3JjPVwiLi4vYXNzZXRzL2ljb25zL2V4dGVuc2lvbi5zdmdcIiBoZWlnaHQ9XCIyNVwiIC8+IHt7IHQoJ3Bpbkljb25QYXJ0Mi5tZXNzYWdlJykgfX1cclxuICAgICAgICAgIDxpbWcgc3JjPVwiLi4vYXNzZXRzL2ljb25zL3Bpbi5zdmdcIiBoZWlnaHQ9XCIyNVwiIC8+XHJcbiAgICAgICAgPC9wPlxyXG4gICAgICAgIDxpbWcgY2xhc3M9XCJpbWdcIiBzcmM9XCIuLi9hc3NldHMvcGluLXR1dG9yaWFsLnBuZ1wiIGhlaWdodD1cIjI1MFwiIC8+XHJcbiAgICAgICAgPHAgY2xhc3M9XCJzdGVwXCI+Mi4ge3sgdCgnYnJvd3NlLm1lc3NhZ2UnKSB9fTwvcD5cclxuICAgICAgICA8cCBjbGFzcz1cImRlc2NyaXB0aW9uXCI+XHJcbiAgICAgICAgICB7eyB0KCdicm93c2UuZGVzY3JpcHRpb24nKSB9fVxyXG4gICAgICAgICAgPGltZyBzcmM9XCIuLi9hc3NldHMvaWNvbnMvaWNvbi5wbmdcIiBoZWlnaHQ9XCIzNVwiIC8+XHJcbiAgICAgICAgPC9wPlxyXG4gICAgICAgIDxwIGNsYXNzPVwic3RlcFwiPjMuIHt7IHQoJ3NlZURhdGEubWVzc2FnZScpIH19PC9wPlxyXG4gICAgICAgIDxwIGNsYXNzPVwiZGVzY3JpcHRpb24gbXQtMjBcIj5cclxuICAgICAgICAgIHt7IHQoJ3NlZURhdGEuZGVzY3JpcHRpb24nKSB9fVxyXG4gICAgICAgIDwvcD5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiYnRuLWJsb2NrXCI+XHJcbiAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiY2xvc2VcIiBAY2xpY2s9XCJjbG9zZSgpXCI+e3sgdCgnY2xvc2UubWVzc2FnZScpIH19PC9idXR0b24+XHJcbiAgICAgICAgICA8YnV0dG9uIEBjbGljaz1cIm9wZW5EYXNoYm9hcmQoKVwiPnt7IHQoJ3VzZUV4dGVuc2lvbi5tZXNzYWdlJykgfX08L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L3RlbXBsYXRlPlxyXG4gIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdCBsYW5nPVwidHNcIiBzZXR1cD5cclxuaW1wb3J0IHsgb25Nb3VudGVkLCByZWYgfSBmcm9tICd2dWUnO1xyXG5pbXBvcnQgeyB1c2VJMThuIH0gZnJvbSAndnVlLWkxOG4nO1xyXG5pbXBvcnQgQnJvd3NlciBmcm9tICd3ZWJleHRlbnNpb24tcG9seWZpbGwnO1xyXG5cclxuY29uc3QgeyB0IH0gPSB1c2VJMThuKCk7XHJcblxyXG5lbnVtIFdlbGNvbWVTdGVwIHtcclxuICBJbml0aWFsVmlldyxcclxuICBUdXRvcmlhbCxcclxufVxyXG5cclxuY29uc3Qgc3RlcCA9IHJlZjxXZWxjb21lU3RlcD4oKTtcclxuXHJcbm9uTW91bnRlZCgoKSA9PiB7XHJcbiAgc3RlcC52YWx1ZSA9IFdlbGNvbWVTdGVwLkluaXRpYWxWaWV3O1xyXG59KTtcclxuXHJcbmZ1bmN0aW9uIG5leHRTdGVwKCkge1xyXG4gIHN0ZXAudmFsdWUgPSBXZWxjb21lU3RlcC5UdXRvcmlhbDtcclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gY2xvc2UoKSB7XHJcbiAgY29uc3QgY3VycmVudFRhYiA9IGF3YWl0IEJyb3dzZXIudGFicy5nZXRDdXJyZW50KCk7XHJcbiAgYXdhaXQgQnJvd3Nlci50YWJzLnJlbW92ZShjdXJyZW50VGFiLmlkISk7XHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIG9wZW5EYXNoYm9hcmQoKSB7XHJcbiAgY29uc3QgdXJsID0gQnJvd3Nlci5ydW50aW1lLmdldFVSTCgnc3JjL2Rhc2hib2FyZC5odG1sP3RhYj1kYXNoYm9hcmQnKTtcclxuICBjb25zdCB0YWIgPSBhd2FpdCBCcm93c2VyLnRhYnMucXVlcnkoeyBjdXJyZW50V2luZG93OiB0cnVlLCBhY3RpdmU6IHRydWUgfSk7XHJcbiAgQnJvd3Nlci50YWJzLnVwZGF0ZSh0YWJbMF0uaWQsIHsgdXJsOiB1cmwgfSk7XHJcbn1cclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGUgc2NvcGVkPlxyXG4ubWFpbiB7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBtYXJnaW46IDAgMjAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxufVxyXG4uaW5pdGlhbC1ibG9jayB7XHJcbiAgbWFyZ2luLXRvcDogMjAlO1xyXG59XHJcblxyXG4uaGVhZGVyIHtcclxuICBmb250LXNpemU6IDI2cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxufVxyXG4uaW1nIHtcclxuICBtYXJnaW46IDIwcHggMDtcclxufVxyXG4uZGVzY3JpcHRpb24ge1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxufVxyXG4uZGVzY3JpcHRpb24gc3BhbiB7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxufVxyXG4uZGVzY3JpcHRpb24gaW1nIHtcclxuICBtYXJnaW46IDAgMTBweDtcclxufVxyXG4uc3RlcHMge1xyXG4gIG1hcmdpbi10b3A6IDUwcHg7XHJcbn1cclxuLnN0ZXBzIC5zdGVwIHtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIGZvbnQtc2l6ZTogMjRweDtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG59XHJcbi5zdGVwcyAuc3RlcCB7XHJcbiAgbWFyZ2luOiAzMHB4O1xyXG59XHJcblxyXG4uc3RlcHMgLmRlc2NyaXB0aW9uIHtcclxuICBtYXJnaW46IDIwcHg7XHJcbn1cclxuLm5leHQtYnRuIHtcclxuICBtYXJnaW4tdG9wOiA0MHB4O1xyXG59XHJcblxyXG5idXR0b24uY2xvc2Uge1xyXG4gIGJhY2tncm91bmQ6ICNjNWM1YzU7XHJcbiAgY29sb3I6IHJnYigwLCAwLCAwKTtcclxufVxyXG5cclxuYnV0dG9uIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgYmFja2dyb3VuZDogIzQyOGJmZjtcclxuICBjb2xvcjogI2ZmZjtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgaGVpZ2h0OiAzNnB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAzNXB4O1xyXG4gIHBhZGRpbmc6IDAgMTBweDtcclxuICBib3JkZXI6IDA7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgd2lkdGg6IDIwMHB4O1xyXG4gIG1hcmdpbjogMCAxMHB4O1xyXG59XHJcbi5idG4tYmxvY2sge1xyXG4gIG1hcmdpbjogMjVweDtcclxufVxyXG48L3N0eWxlPlxyXG4iLCJpbXBvcnQgV2VsY29tZSBmcm9tICcuL3BhZ2VzL1dlbGNvbWUudnVlJztcclxuaW1wb3J0IHsgY3JlYXRlQXBwIH0gZnJvbSAndnVlJztcclxuaW1wb3J0IGkxOG4gZnJvbSAnLi9wbHVnaW5zL2kxOG4nO1xyXG5cclxuY29uc3QgYXBwID0gY3JlYXRlQXBwKFdlbGNvbWUpO1xyXG5hcHAudXNlKGkxOG4pO1xyXG5hcHAubW91bnQoJ2JvZHknKTtcclxuIl0sIm5hbWVzIjpbIl9vcGVuQmxvY2siLCJfY3JlYXRlRWxlbWVudEJsb2NrIiwiX2NyZWF0ZUVsZW1lbnRWTm9kZSIsIl90b0Rpc3BsYXlTdHJpbmciLCJfdW5yZWYiLCJfY3JlYXRlVGV4dFZOb2RlIl0sIm1hcHBpbmdzIjoiOztBQUFBLE1BQWUsYUFBQTtBQ0FmLE1BQWUsYUFBQTtBQ0FmLE1BQWUsYUFBQTtBQ0FmLE1BQWUsYUFBQTtBQ0FmLE1BQWUsYUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzhDVCxVQUFBLEVBQUUsTUFBTTtBQU9kLFVBQU0sT0FBTztBQUViLGNBQVUsTUFBTTtBQUNkLFdBQUssUUFBUTtBQUFBLElBQUEsQ0FDZDtBQUVELGFBQVMsV0FBVztBQUNsQixXQUFLLFFBQVE7QUFBQSxJQUNmO0FBRUEsbUJBQWUsUUFBUTtBQUNyQixZQUFNLGFBQWEsTUFBTSxRQUFRLEtBQUssV0FBVztBQUNqRCxZQUFNLFFBQVEsS0FBSyxPQUFPLFdBQVcsRUFBRztBQUFBLElBQzFDO0FBRUEsbUJBQWUsZ0JBQWdCO0FBQzdCLFlBQU0sTUFBTSxRQUFRLFFBQVEsT0FBTyxrQ0FBa0M7QUFDL0QsWUFBQSxNQUFNLE1BQU0sUUFBUSxLQUFLLE1BQU0sRUFBRSxlQUFlLE1BQU0sUUFBUSxLQUFBLENBQU07QUFDbEUsY0FBQSxLQUFL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
