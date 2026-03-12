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
const Welcome_vue_vue_type_style_index_0_scoped_b3d95b91_lang = "";
const Welcome = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-b3d95b91"]]);
const app = createApp(Welcome);
app.use(i18n);
app.mount("body");
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2VsY29tZS5qcyIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2Fzc2V0cy9pbml0aWFsLmpwZyIsIi4uLy4uL3NyYy9hc3NldHMvaWNvbnMvZXh0ZW5zaW9uLnN2ZyIsIi4uLy4uL3NyYy9hc3NldHMvaWNvbnMvcGluLnN2ZyIsIi4uLy4uL3NyYy9hc3NldHMvcGluLXR1dG9yaWFsLnBuZyIsIi4uLy4uL3NyYy9hc3NldHMvaWNvbnMvaWNvbi5wbmciLCIuLi8uLi9zcmMvcGFnZXMvV2VsY29tZS52dWUiLCIuLi8uLi9zcmMvd2VsY29tZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBcIl9fVklURV9BU1NFVF9fNjE2OGUzMmVfX1wiIiwiZXhwb3J0IGRlZmF1bHQgXCJfX1ZJVEVfQVNTRVRfXzY2NmYxYjQxX19cIiIsImV4cG9ydCBkZWZhdWx0IFwiX19WSVRFX0FTU0VUX19iN2I3MTUzM19fXCIiLCJleHBvcnQgZGVmYXVsdCBcIl9fVklURV9BU1NFVF9fN2U3N2MwMTNfX1wiIiwiZXhwb3J0IGRlZmF1bHQgXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUNNQUFBQWpDQVlBQUFBZTJiTlpBQUFBQVhOU1IwSUFyczRjNlFBQUFBUm5RVTFCQUFDeGp3djhZUVVBQUFBSmNFaFpjd0FBRHNNQUFBN0RBY2R2cUdRQUFBTDhTVVJCVkZoSDdaWmZTRk5SSE1lLzIzUnpaaTR6VGJPU1NrMG9zSDlVRnBYMlVGa2tsRllLOVJCRlJTbTlHTkZENFVNRjRzaisrQ3BGRDJtR0JHR2FpS1ZGUVNtRlVWWnFpcWlsNVFwdHR1MjYzZHY5bmQyOWROdTgwdzFHN0RNTzU1N2YrWjF6dnZ1ZDN6bjNxZ1FSQkFocXFRNElnbUxjRVJUamp2OURUTWFwQzFCdHlHV0ZubjNCdE82WjRvcHFaMzFrUDZ1bmk5ZGlSczIvVVhhM0ZpMXYzcVAxUXplenJWK1dnc3hWeTFHUW13VkRSRGl6VFFrU014bFdqaE1TOTV3UURsOHNGK0ozSHhWdTF6Y0xRNmFmZ29QbldhRm5zbEZmNFpVSzV0cy9QQ0tOVm82aXlJanJJZjNZT1V6WUhYaGNYb3h2RTMxb0dXaUFXdVZNT1Y3Z3NXWCtkc1NHSm1KclFURXNOZzZ2YjVWQ3I5T3lmcVVvRW1PMldKRnlvQkFkZDY2aTFkU0VoNzAxRU1SZmlEcUU5ZHQ1TzB4REFyS1NkMkxYMG15azVwMUdWL1VOekF6WHMzNmxLRHBOWlZXMUtEbDVrRVhFSllRZ0VWUUdlM25jdjJsRmZWY2Q4eWt0T0lUcjFYWE14eHNVaVdscWU0dHRhOVBZMXJpRXVCam9jYUN1MG9hc1BCMmk0MVRNaDN3Ylc5c2xEK1VvRXRQUk80Q1lLQVBMRWRmV0VIMmREdFJYY3FJUUxSSVdPZnZJaDN4cGpMY0UxUGVNVE15RGRpdU1qOHo0L04waFdYekRraGdOaW5aRUlEc3RUTExJa1cyVFA0UVFOQ2ZON1FtWkdIOEljVEhaM0I0VE9HZDFHRDVkaXNXVE05R3N2VEZKaTdiek1SZzB6bVhGdUMrUzJYMkZXekVrNVBMZVNFVG9WSklGaURPbzhhcUhRMExSTUo1MWNjaEkxVEdCdmtLV3dMU1FDMXJvV3I0QnY2dzhNa3ROa3RWSjFmRW9KTVdHNEhrM2grd1ZZUmkzQ29pYW9jTFhVUjZjWFVCaXRBYWR3M2JaT0lxb094VGRNMzlEMjdNcFdZdm1qemIwLzNEbXdic3ZFNmg4YVVHOEdMMFhva0NLM0x4WkdoWmhwWGd0aGlLU3MwYVBzc1p4Rk4wYms2emlUU3lLR2hyalliWUpyS2EydDNnbGh2N2x5b1docUdtendOamcrWmhPQmEvRXBDL1dzb1RPWDZkbmUwOG5hOEZzamRRN2ZXUUp2TGxreEc5M0RkM0NUOC9Pa1ZweVpKR2hLNXNHK1JyWDY4QVRBZldpbk5MUjloZEJNZTRJaXZrM3dCOC9PNkJZTWQ4TXlBQUFBQUJKUlU1RXJrSmdnZz09XCIiLCI8dGVtcGxhdGU+XG4gIDxkaXYgY2xhc3M9XCJtYWluXCI+XG4gICAgPHRlbXBsYXRlIHYtaWY9XCJzdGVwID09IFdlbGNvbWVTdGVwLkluaXRpYWxWaWV3XCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiaW5pdGlhbC1ibG9ja1wiPlxuICAgICAgICA8cCBjbGFzcz1cImhlYWRlclwiPnt7IHQoJ3dlbGNvbWUubWVzc2FnZScpIH19PC9wPlxuICAgICAgICA8aW1nIGNsYXNzPVwiaW1nXCIgc3JjPVwiLi4vYXNzZXRzL2luaXRpYWwuanBnXCIgaGVpZ2h0PVwiMjUwXCIgLz5cbiAgICAgICAgPHAgY2xhc3M9XCJkZXNjcmlwdGlvblwiIHYtaHRtbD1cInQoJ3dlbGNvbWUuZGVzY3JpcHRpb24nKVwiPjwvcD5cbiAgICAgICAgPGRpdiBjbGFzcz1cIm5leHQtYnRuXCI+XG4gICAgICAgICAgPGJ1dHRvbiBAY2xpY2s9XCJuZXh0U3RlcCgpXCI+e3sgdCgnbmV4dC5tZXNzYWdlJykgfX08L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L3RlbXBsYXRlPlxuICAgIDx0ZW1wbGF0ZSB2LWlmPVwic3RlcCA9PSBXZWxjb21lU3RlcC5UdXRvcmlhbFwiPlxuICAgICAgPGRpdiBjbGFzcz1cInN0ZXBzXCI+XG4gICAgICAgIDxwIGNsYXNzPVwiaGVhZGVyXCI+e3sgdCgnZ2V0U3RhcnRlZC5tZXNzYWdlJykgfX08L3A+XG4gICAgICAgIDxwIGNsYXNzPVwiZGVzY3JpcHRpb25cIj57eyB0KCd3ZWxjb21lU3RhcnQubWVzc2FnZScpIH19PC9wPlxuICAgICAgICA8cCBjbGFzcz1cInN0ZXBcIj4xLiB7eyB0KCdwaW5JY29uLm1lc3NhZ2UnKSB9fTwvcD5cbiAgICAgICAgPHAgY2xhc3M9XCJkZXNjcmlwdGlvblwiPlxuICAgICAgICAgIHt7IHQoJ3Bpbkljb25QYXJ0MS5tZXNzYWdlJykgfX1cbiAgICAgICAgICA8aW1nIHNyYz1cIi4uL2Fzc2V0cy9pY29ucy9leHRlbnNpb24uc3ZnXCIgaGVpZ2h0PVwiMjVcIiAvPiB7eyB0KCdwaW5JY29uUGFydDIubWVzc2FnZScpIH19XG4gICAgICAgICAgPGltZyBzcmM9XCIuLi9hc3NldHMvaWNvbnMvcGluLnN2Z1wiIGhlaWdodD1cIjI1XCIgLz5cbiAgICAgICAgPC9wPlxuICAgICAgICA8aW1nIGNsYXNzPVwiaW1nXCIgc3JjPVwiLi4vYXNzZXRzL3Bpbi10dXRvcmlhbC5wbmdcIiBoZWlnaHQ9XCIyNTBcIiAvPlxuICAgICAgICA8cCBjbGFzcz1cInN0ZXBcIj4yLiB7eyB0KCdicm93c2UubWVzc2FnZScpIH19PC9wPlxuICAgICAgICA8cCBjbGFzcz1cImRlc2NyaXB0aW9uXCI+XG4gICAgICAgICAge3sgdCgnYnJvd3NlLmRlc2NyaXB0aW9uJykgfX1cbiAgICAgICAgICA8aW1nIHNyYz1cIi4uL2Fzc2V0cy9pY29ucy9pY29uLnBuZ1wiIGhlaWdodD1cIjM1XCIgLz5cbiAgICAgICAgPC9wPlxuICAgICAgICA8cCBjbGFzcz1cInN0ZXBcIj4zLiB7eyB0KCdzZWVEYXRhLm1lc3NhZ2UnKSB9fTwvcD5cbiAgICAgICAgPHAgY2xhc3M9XCJkZXNjcmlwdGlvbiBtdC0yMFwiPlxuICAgICAgICAgIHt7IHQoJ3NlZURhdGEuZGVzY3JpcHRpb24nKSB9fVxuICAgICAgICA8L3A+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJidG4tYmxvY2tcIj5cbiAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiY2xvc2VcIiBAY2xpY2s9XCJjbG9zZSgpXCI+e3sgdCgnY2xvc2UubWVzc2FnZScpIH19PC9idXR0b24+XG4gICAgICAgICAgPGJ1dHRvbiBAY2xpY2s9XCJvcGVuRGFzaGJvYXJkKClcIj57eyB0KCd1c2VFeHRlbnNpb24ubWVzc2FnZScpIH19PC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC90ZW1wbGF0ZT5cbiAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0IGxhbmc9XCJ0c1wiIHNldHVwPlxuaW1wb3J0IHsgb25Nb3VudGVkLCByZWYgfSBmcm9tICd2dWUnO1xuaW1wb3J0IHsgdXNlSTE4biB9IGZyb20gJ3Z1ZS1pMThuJztcbmltcG9ydCBCcm93c2VyIGZyb20gJ3dlYmV4dGVuc2lvbi1wb2x5ZmlsbCc7XG5cbmNvbnN0IHsgdCB9ID0gdXNlSTE4bigpO1xuXG5lbnVtIFdlbGNvbWVTdGVwIHtcbiAgSW5pdGlhbFZpZXcsXG4gIFR1dG9yaWFsLFxufVxuXG5jb25zdCBzdGVwID0gcmVmPFdlbGNvbWVTdGVwPigpO1xuXG5vbk1vdW50ZWQoKCkgPT4ge1xuICBzdGVwLnZhbHVlID0gV2VsY29tZVN0ZXAuSW5pdGlhbFZpZXc7XG59KTtcblxuZnVuY3Rpb24gbmV4dFN0ZXAoKSB7XG4gIHN0ZXAudmFsdWUgPSBXZWxjb21lU3RlcC5UdXRvcmlhbDtcbn1cblxuYXN5bmMgZnVuY3Rpb24gY2xvc2UoKSB7XG4gIGNvbnN0IGN1cnJlbnRUYWIgPSBhd2FpdCBCcm93c2VyLnRhYnMuZ2V0Q3VycmVudCgpO1xuICBhd2FpdCBCcm93c2VyLnRhYnMucmVtb3ZlKGN1cnJlbnRUYWIuaWQhKTtcbn1cblxuYXN5bmMgZnVuY3Rpb24gb3BlbkRhc2hib2FyZCgpIHtcbiAgY29uc3QgdXJsID0gQnJvd3Nlci5ydW50aW1lLmdldFVSTCgnc3JjL2Rhc2hib2FyZC5odG1sP3RhYj1kYXNoYm9hcmQnKTtcbiAgY29uc3QgdGFiID0gYXdhaXQgQnJvd3Nlci50YWJzLnF1ZXJ5KHsgY3VycmVudFdpbmRvdzogdHJ1ZSwgYWN0aXZlOiB0cnVlIH0pO1xuICBCcm93c2VyLnRhYnMudXBkYXRlKHRhYlswXS5pZCwgeyB1cmw6IHVybCB9KTtcbn1cbjwvc2NyaXB0PlxuXG48c3R5bGUgc2NvcGVkPlxuLm1haW4ge1xuICBtYXJnaW46IGF1dG87XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luOiAwIDIwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuLmluaXRpYWwtYmxvY2sge1xuICBtYXJnaW4tdG9wOiAyMCU7XG59XG5cbi5oZWFkZXIge1xuICBmb250LXNpemU6IDI2cHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG4uaW1nIHtcbiAgbWFyZ2luOiAyMHB4IDA7XG59XG4uZGVzY3JpcHRpb24ge1xuICBmb250LXNpemU6IDE4cHg7XG59XG4uZGVzY3JpcHRpb24gc3BhbiB7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG4uZGVzY3JpcHRpb24gaW1nIHtcbiAgbWFyZ2luOiAwIDEwcHg7XG59XG4uc3RlcHMge1xuICBtYXJnaW4tdG9wOiA1MHB4O1xufVxuLnN0ZXBzIC5zdGVwIHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBmb250LXdlaWdodDogNzAwO1xufVxuLnN0ZXBzIC5zdGVwIHtcbiAgbWFyZ2luOiAzMHB4O1xufVxuXG4uc3RlcHMgLmRlc2NyaXB0aW9uIHtcbiAgbWFyZ2luOiAyMHB4O1xufVxuLm5leHQtYnRuIHtcbiAgbWFyZ2luLXRvcDogNDBweDtcbn1cblxuYnV0dG9uLmNsb3NlIHtcbiAgYmFja2dyb3VuZDogI2M1YzVjNTtcbiAgY29sb3I6IHJnYigwLCAwLCAwKTtcbn1cblxuYnV0dG9uIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBiYWNrZ3JvdW5kOiAjNDI4YmZmO1xuICBjb2xvcjogI2ZmZjtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBoZWlnaHQ6IDM2cHg7XG4gIGxpbmUtaGVpZ2h0OiAzNXB4O1xuICBwYWRkaW5nOiAwIDEwcHg7XG4gIGJvcmRlcjogMDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgd2lkdGg6IDIwMHB4O1xuICBtYXJnaW46IDAgMTBweDtcbn1cbi5idG4tYmxvY2sge1xuICBtYXJnaW46IDI1cHg7XG59XG48L3N0eWxlPlxuIiwiaW1wb3J0IFdlbGNvbWUgZnJvbSAnLi9wYWdlcy9XZWxjb21lLnZ1ZSc7XG5pbXBvcnQgeyBjcmVhdGVBcHAgfSBmcm9tICd2dWUnO1xuaW1wb3J0IGkxOG4gZnJvbSAnLi9wbHVnaW5zL2kxOG4nO1xuXG5jb25zdCBhcHAgPSBjcmVhdGVBcHAoV2VsY29tZSk7XG5hcHAudXNlKGkxOG4pO1xuYXBwLm1vdW50KCdib2R5Jyk7XG4iXSwibmFtZXMiOlsiX29wZW5CbG9jayIsIl9jcmVhdGVFbGVtZW50QmxvY2siLCJfY3JlYXRlRWxlbWVudFZOb2RlIiwiX3RvRGlzcGxheVN0cmluZyIsIl91bnJlZiIsIl9jcmVhdGVUZXh0Vk5vZGUiXSwibWFwcGluZ3MiOiI7O0FBQUEsTUFBZSxhQUFBO0FDQWYsTUFBZSxhQUFBO0FDQWYsTUFBZSxhQUFBO0FDQWYsTUFBZSxhQUFBO0FDQWYsTUFBZSxhQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDOENULFVBQUEsRUFBRSxNQUFNO0FBT2QsVUFBTSxPQUFPO0FBRWIsY0FBVSxNQUFNO0FBQ2QsV0FBSyxRQUFRO0FBQUEsSUFBQSxDQUNkO0FBRUQsYUFBUyxXQUFXO0FBQ2xCLFdBQUssUUFBUTtBQUFBLElBQ2Y7QUFFQSxtQkFBZSxRQUFRO0FBQ3JCLFlBQU0sYUFBYSxNQUFNLFFBQVEsS0FBSyxXQUFXO0FBQ2pELFlBQU0sUUFBUSxLQUFLLE9BQU8sV0FBVyxFQUFHO0FBQUEsSUFDMUM7QUFFQSxtQkFBZSxnQkFBZ0I7QUFDN0IsWUFBTSxNQUFNLFFBQVEsUUFBUSxPQUFPLGtDQUFrQztBQUMvRCxZQUFBLE1BQU0sTUFBTSxRQUFRLEtBQUssTUFBTSxFQUFFLGVBQWUsTUFBTSxRQUFRLEtBQUEsQ0FBTTtBQUNsRSxjQUFBLEtBQUssT0FBTyxJQUFJLENBQUMsRUFBRSxJQUFJLEVBQUUsS0FBVTtBQUFBLElBQzdDOztBQXZFRSxhQUFBQSxVQUFBLEdBQUFDLG1CQXFDTSxPQXJDTixZQXFDTTtBQUFBLFFBcENZLEtBQUksU0FBSSxLQUN0QkQsVUFBQSxHQUFBQyxtQkFPTSxPQVBOLFlBT007QUFBQSxVQU5KQyxnQkFBZ0QsS0FBaEQsWUFBZ0RDLGdCQUEzQkMsTUFBQyxDQUFBLEVBQUEsaUJBQUEsQ0FBQSxHQUFBLENBQUE7QUFBQSxvQ0FDdEJGLGdCQUE0RCxPQUFBO0FBQUEsWUFBdkQsT0FBTTtBQUFBLFlBQU0sS0FBQTtBQUFBLFlBQTRCLFFBQU87QUFBQSxVQUFBO1VBQ3BEQSxnQkFBNkQsS0FBQTtBQUFBLFlBQTFELE9BQU07QUFBQSxZQUFjLFdBQVFFLE1BQUMsQ0FBQSxFQUFBLHFCQUFBO0FBQUEsVUFBQTtVQUNoQ0YsZ0JBRU0sT0FGTixZQUVNO0FBQUEsWUFESkEsZ0JBQTRELFVBQUE7QUFBQSxjQUFuRCwrQ0FBTztZQUFRLG1CQUFPRSxNQUFDLENBQUEsRUFBQSxjQUFBLENBQUEsR0FBQSxDQUFBO0FBQUEsVUFBQTs7UUFJdEIsS0FBSSxTQUFJLEtBQ3RCSixVQUFBLEdBQUFDLG1CQXVCTSxPQXZCTixZQXVCTTtBQUFBLFVBdEJKQyxnQkFBbUQsS0FBbkQsWUFBbURDLGdCQUE5QkMsTUFBQyxDQUFBLEVBQUEsb0JBQUEsQ0FBQSxHQUFBLENBQUE7QUFBQSxVQUN0QkYsZ0JBQTBELEtBQTFELFlBQTBEQyxnQkFBaENDLE1BQUMsQ0FBQSxFQUFBLHNCQUFBLENBQUEsR0FBQSxDQUFBO0FBQUEsVUFDM0JGLGdCQUFpRCxLQUFqRCxZQUFnQix3QkFBTUUsTUFBQyxDQUFBLEVBQUEsaUJBQUEsQ0FBQSxHQUFBLENBQUE7QUFBQSxVQUN2QkYsZ0JBSUksS0FKSixhQUlJO0FBQUEsWUFIQ0csZ0JBQUFGLGdCQUFBQyxNQUFBLENBQUEsNkJBQTRCLEtBQy9CLENBQUE7QUFBQSxzQ0FBQUYsZ0JBQXVELE9BQUE7QUFBQSxjQUFsRCxLQUFBO0FBQUEsY0FBb0MsUUFBTztBQUFBLFlBQUE7NEJBQU8sTUFBQ0MsZ0JBQUdDLE1BQUMsQ0FBQSxFQUFBLHNCQUFBLENBQUEsSUFBMkIsS0FDdkYsQ0FBQTtBQUFBLHNDQUFBRixnQkFBaUQsT0FBQTtBQUFBLGNBQTVDLEtBQUE7QUFBQSxjQUE4QixRQUFPO0FBQUEsWUFBQTs7b0NBRTVDQSxnQkFBaUUsT0FBQTtBQUFBLFlBQTVELE9BQU07QUFBQSxZQUFNLEtBQUE7QUFBQSxZQUFpQyxRQUFPO0FBQUEsVUFBQTtVQUN6REEsZ0JBQWdELEtBQWhELGFBQWdCLHdCQUFNRSxNQUFDLENBQUEsRUFBQSxnQkFBQSxDQUFBLEdBQUEsQ0FBQTtBQUFBLFVBQ3ZCRixnQkFHSSxLQUhKLGFBR0k7QUFBQSxZQUZDRyxnQkFBQUYsZ0JBQUFDLE1BQUEsQ0FBQSwyQkFBMEIsS0FDN0IsQ0FBQTtBQUFBLHNDQUFBRixnQkFBa0QsT0FBQTtBQUFBLGNBQTdDLEtBQUE7QUFBQSxjQUErQixRQUFPO0FBQUEsWUFBQTs7VUFFN0NBLGdCQUFpRCxLQUFqRCxhQUFnQix3QkFBTUUsTUFBQyxDQUFBLEVBQUEsaUJBQUEsQ0FBQSxHQUFBLENBQUE7QUFBQSxVQUN2QkYsZ0JBRUksS0FGSixhQUVJQyxnQkFEQ0MsTUFBQyxDQUFBLEVBQUEscUJBQUEsQ0FBQSxHQUFBLENBQUE7QUFBQSxVQUVORixnQkFHTSxPQUhOLGFBR007QUFBQSxZQUZKQSxnQkFBd0UsVUFBQTtBQUFBLGNBQWhFLE9BQU07QUFBQSxjQUFTLCtDQUFPO1lBQUssbUJBQU9FLE1BQUMsQ0FBQSxFQUFBLGVBQUEsQ0FBQSxHQUFBLENBQUE7QUFBQSxZQUMzQ0YsZ0JBQXlFLFVBQUE7QUFBQSxjQUFoRSwrQ0FBTztZQUFhLG1CQUFPRSxNQUFDLENBQUEsRUFBQSxzQkFBQSxDQUFBLEdBQUEsQ0FBQTtBQUFBLFVBQUE7Ozs7Ozs7O0FDOUIvQyxNQUFNLE1BQU0sVUFBVSxPQUFPO0FBQzdCLElBQUksSUFBSSxJQUFJO0FBQ1osSUFBSSxNQUFNLE1BQU07In0=
