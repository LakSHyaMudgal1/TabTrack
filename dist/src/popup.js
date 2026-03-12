import { B as Browser } from "../browser-polyfill.js";
import { r as requiredArgs, t as toInteger, c as convertSummaryTimeToString, a as ranges, T as ThisWeekRange, S as StorageParams, _ as _imports_1$1, i as injectStorage, C as CHROME_STORE_REVIEW_URL, b as Settings, d as isDateEqual, l as logger, I as IS_POMODORO_ENABLED_DEFAULT, e as SettingsTab, f as TypeOfList, D as DARK_MODE_DEFAULT, g as _imports_0$1 } from "../general.js";
import { a as addMilliseconds, _ as _imports_0, b as _sfc_main$5, B as ByDaysChart, T as TabItem, u as useTabListByDays, c as useImportToCsvWithData, d as useFile, F as FileType, e as addDays, f as addHours, s as startOfToday, g as useBadge, h as BadgeColor, i as BadgeIcon, o as openPage, j as applyDarkMode, k as _imports_5$1, l as TabList, m as oa } from "../dark.js";
import { d as defineComponent, o as openBlock, c as createElementBlock, a as createBaseVNode, n as normalizeClass, b as createTextVNode, t as toDisplayString, u as unref, e as createVNode, w as withCtx, f as withDirectives, r as renderSlot, v as vShow, T as Transition, g as ref, _ as _export_sfc, h as useI18n, i as onMounted, j as resolveComponent, k as createBlock, F as Fragment, l as renderList, m as computed, p as createCommentVNode, q as createApp, s as i18n } from "../i18n.js";
import { M as Messages } from "../messages.js";
const _imports_1 = "/light-mode.svg";
const _imports_2 = "/dark-mode.svg";
const _imports_4 = "/dashboard.svg";
const _imports_5 = "/settings.svg";
function addSeconds(dirtyDate, dirtyAmount) {
  requiredArgs(2, arguments);
  var amount = toInteger(dirtyAmount);
  return addMilliseconds(dirtyDate, amount * 1e3);
}
const _hoisted_1$4 = { class: "expander" };
const _hoisted_2$4 = { class: "d-inline-block" };
const _hoisted_3$3 = { class: "header" };
const _hoisted_4$3 = { class: "expander-body" };
const __default__$3 = {
  name: "Expander"
};
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  ...__default__$3,
  props: {
    day: {},
    time: {}
  },
  setup(__props) {
    const open = ref();
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$4, [
        createBaseVNode("div", {
          class: normalizeClass(["expander-trigger", open.value ? "active" : "beforeBorder"]),
          onClick: _cache[0] || (_cache[0] = ($event) => open.value = !open.value)
        }, [
          createBaseVNode("div", _hoisted_2$4, [
            (openBlock(), createElementBlock("svg", {
              class: normalizeClass(["expander-trigger-Icon", { open: open.value }]),
              width: "40",
              height: "12",
              stroke: "cornflowerblue"
            }, [..._cache[1] || (_cache[1] = [
              createBaseVNode("polyline", {
                points: "12,2 20,10 28,2",
                "stroke-width": "3",
                fill: "none"
              }, null, -1)
            ])], 2))
          ]),
          createBaseVNode("div", _hoisted_3$3, [
            createTextVNode(toDisplayString(__props.day) + " ", 1),
            createBaseVNode("span", null, toDisplayString(unref(convertSummaryTimeToString)(__props.time)), 1)
          ])
        ], 2),
        createVNode(Transition, { name: "leftToRight" }, {
          default: withCtx(() => [
            withDirectives(createBaseVNode("div", _hoisted_4$3, [
              renderSlot(_ctx.$slots, "default", {}, void 0, true)
            ], 512), [
              [vShow, open.value]
            ])
          ]),
          _: 3
        })
      ]);
    };
  }
});
const Expander_vue_vue_type_style_index_0_scoped_677b5a4c_lang = "";
const Expander = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__scopeId", "data-v-677b5a4c"]]);
const _hoisted_1$3 = {
  key: 0,
  class: "no-data"
};
const _hoisted_2$3 = { key: 1 };
const _hoisted_3$2 = { key: 1 };
const _hoisted_4$2 = { class: "no-data" };
const _hoisted_5$1 = ["onClick"];
const _hoisted_6$1 = { key: 2 };
const _hoisted_7$1 = { class: "date-block" };
const _hoisted_8$1 = ["onClick"];
const _hoisted_9$1 = ["value"];
const _hoisted_10$1 = { class: "stats-block block" };
const _hoisted_11$1 = { class: "header" };
const _hoisted_12$1 = { class: "ml-20 mr-20 by-days-chart" };
const __default__$2 = {
  name: "TabList"
};
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  ...__default__$2,
  setup(__props) {
    const { t } = useI18n();
    const tabsByDays = ref();
    const isLoading = ref();
    const noData = ref();
    const selectedDate = ref();
    const presetRanges = ranges();
    const countOfDays = computed(
      () => tabsByDays.value != void 0 ? tabsByDays.value.days.length : 0
    );
    async function loadList(dateFrom, dateTo) {
      const tabList = await useTabListByDays(dateFrom, dateTo);
      if (tabList != null) {
        tabsByDays.value = tabList;
        if (tabList.days.length == 0 && tabList.summaryTime == 0)
          noData.value = true;
        else
          noData.value = false;
      }
      isLoading.value = false;
    }
    async function handleDate(modelData) {
      var _a, _b;
      selectedDate.value = modelData;
      const dateFrom = (_a = selectedDate.value) == null ? void 0 : _a[0];
      const dateTo = (_b = selectedDate.value) == null ? void 0 : _b[1];
      await loadList(dateFrom, dateTo);
    }
    onMounted(async () => {
      var _a, _b;
      isLoading.value = true;
      selectedDate.value = ThisWeekRange;
      const dateFrom = (_a = selectedDate.value) == null ? void 0 : _a[0];
      const dateTo = (_b = selectedDate.value) == null ? void 0 : _b[1];
      await loadList(dateFrom, dateTo);
    });
    async function exportToCsv() {
      var _a, _b, _c;
      const dateFrom = (_a = selectedDate.value) == null ? void 0 : _a[0];
      const dateTo = (_b = selectedDate.value) == null ? void 0 : _b[1];
      const csv = await useImportToCsvWithData((_c = tabsByDays.value) == null ? void 0 : _c.days);
      useFile(
        csv,
        FileType.CSV,
        `websites_${dateFrom.toLocaleDateString()}-${dateTo.toLocaleDateString()}.csv`
      );
    }
    function mergeAllDays(days) {
      if (!days)
        return [];
      const urlMap = /* @__PURE__ */ new Map();
      for (const day of days) {
        for (const tab of day.tabs) {
          if (!urlMap.has(tab.url)) {
            urlMap.set(tab.url, { ...tab });
            continue;
          }
          const existingTab = urlMap.get(tab.url);
          existingTab.summaryTime += tab.summaryTime;
          existingTab.sessions += tab.sessions;
        }
      }
      return Array.from(urlMap.values()).sort((a, b) => b.summaryTime - a.summaryTime);
    }
    return (_ctx, _cache) => {
      var _a, _b;
      const _component_VueDatePicker = resolveComponent("VueDatePicker");
      return isLoading.value ? (openBlock(), createElementBlock("div", _hoisted_1$3, [..._cache[3] || (_cache[3] = [
        createBaseVNode("img", {
          height: "55",
          src: _imports_0
        }, null, -1)
      ])])) : (openBlock(), createElementBlock("div", _hoisted_2$3, [
        countOfDays.value == void 0 || countOfDays.value == 0 && !noData.value ? (openBlock(), createBlock(_sfc_main$5, { key: 0 })) : noData.value ? (openBlock(), createElementBlock("div", _hoisted_3$2, [
          createBaseVNode("div", _hoisted_4$2, [
            createTextVNode(toDisplayString(unref(t)("noDataForPeriod.message")) + " ", 1),
            createVNode(_component_VueDatePicker, {
              range: "",
              "enable-time-picker": false,
              class: "date-picker",
              modelValue: selectedDate.value,
              "onUpdate:modelValue": [
                _cache[0] || (_cache[0] = ($event) => selectedDate.value = $event),
                handleDate
              ],
              "preset-ranges": unref(presetRanges)
            }, {
              yearly: withCtx(({ label, range, presetDateRange }) => [
                createBaseVNode("span", {
                  onClick: ($event) => presetDateRange(range)
                }, toDisplayString(label), 9, _hoisted_5$1)
              ]),
              _: 1
            }, 8, ["modelValue", "preset-ranges"])
          ])
        ])) : (openBlock(), createElementBlock("div", _hoisted_6$1, [
          createBaseVNode("div", _hoisted_7$1, [
            createVNode(_component_VueDatePicker, {
              range: "",
              "enable-time-picker": false,
              class: "date-picker",
              modelValue: selectedDate.value,
              "onUpdate:modelValue": [
                _cache[1] || (_cache[1] = ($event) => selectedDate.value = $event),
                handleDate
              ],
              "preset-ranges": unref(presetRanges)
            }, {
              yearly: withCtx(({ label, range, presetDateRange }) => [
                createBaseVNode("span", {
                  onClick: ($event) => presetDateRange(range)
                }, toDisplayString(label), 9, _hoisted_8$1)
              ]),
              _: 1
            }, 8, ["modelValue", "preset-ranges"]),
            createBaseVNode("input", {
              type: "button",
              value: unref(t)("exportToCsv.message"),
              onClick: _cache[2] || (_cache[2] = ($event) => exportToCsv())
            }, null, 8, _hoisted_9$1)
          ]),
          createBaseVNode("div", _hoisted_10$1, [
            createBaseVNode("div", _hoisted_11$1, toDisplayString(unref(t)("averageTimeByDays.message")), 1),
            createBaseVNode("p", null, toDisplayString(unref(convertSummaryTimeToString)(tabsByDays.value.averageTime)), 1)
          ]),
          createBaseVNode("div", _hoisted_12$1, [
            createVNode(ByDaysChart, {
              data: tabsByDays.value
            }, null, 8, ["data"])
          ]),
          createBaseVNode("div", null, [
            createVNode(Expander, {
              day: unref(t)("allTime.message"),
              time: ((_a = tabsByDays.value) == null ? void 0 : _a.summaryTime) || 0,
              class: "total"
            }, {
              default: withCtx(() => {
                var _a2;
                return [
                  (openBlock(true), createElementBlock(Fragment, null, renderList(mergeAllDays((_a2 = tabsByDays.value) == null ? void 0 : _a2.days), (tab, i) => {
                    var _a3;
                    return openBlock(), createBlock(TabItem, {
                      item: tab,
                      summaryTimeForWholeDay: ((_a3 = tabsByDays.value) == null ? void 0 : _a3.summaryTime) || 0
                    }, null, 8, ["item", "summaryTimeForWholeDay"]);
                  }), 256))
                ];
              }),
              _: 1
            }, 8, ["day", "time"]),
            (openBlock(true), createElementBlock(Fragment, null, renderList((_b = tabsByDays.value) == null ? void 0 : _b.days, (tabDay, i) => {
              return openBlock(), createBlock(Expander, {
                key: i,
                day: tabDay.day,
                time: tabDay.time
              }, {
                default: withCtx(() => [
                  (openBlock(true), createElementBlock(Fragment, null, renderList(tabDay.tabs, (tab, i2) => {
                    return openBlock(), createBlock(TabItem, {
                      key: i2,
                      item: tab,
                      summaryTimeForWholeDay: tabDay.time
                    }, null, 8, ["item", "summaryTimeForWholeDay"]);
                  }), 128))
                ]),
                _: 2
              }, 1032, ["day", "time"]);
            }), 128))
          ])
        ]))
      ]));
    };
  }
});
const ByDays_vue_vue_type_style_index_0_scoped_2129e53b_lang = "";
const ByDays = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-2129e53b"]]);
const _hoisted_1$2 = {
  key: 0,
  class: "review-block"
};
const _hoisted_2$2 = ["value"];
const __default__$1 = {
  name: "Review"
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  ...__default__$1,
  setup(__props) {
    const { t } = useI18n();
    const settingsStorage = injectStorage();
    const PROMPT_AT_TIME_OF_DAY = 12;
    const ADD_DAYS_FIRST = 2;
    const ADD_DAYS_NEXT = 5;
    const showReview = ref();
    onMounted(async () => {
      showReview.value = false;
      const reviewDate = await settingsStorage.getValue(StorageParams.REVIEW_DATE);
      if (reviewDate == void 0) {
        let nextTime = await settingsStorage.getValue(StorageParams.REVIEW_PROMPT_AT);
        if (nextTime == void 0) {
          await settingsStorage.saveValue(
            StorageParams.REVIEW_PROMPT_AT,
            addDays(addHours(startOfToday(), PROMPT_AT_TIME_OF_DAY), ADD_DAYS_FIRST).toString()
          );
        } else {
          nextTime = new Date(nextTime);
          if (nextTime < /* @__PURE__ */ new Date())
            showReview.value = true;
        }
      }
    });
    async function closeBlock() {
      showReview.value = false;
      await settingsStorage.saveValue(
        StorageParams.REVIEW_PROMPT_AT,
        addDays(addHours(startOfToday(), PROMPT_AT_TIME_OF_DAY), ADD_DAYS_NEXT).toString()
      );
    }
    async function openStore() {
      window.open(CHROME_STORE_REVIEW_URL, "_blank");
      await settingsStorage.saveValue(StorageParams.REVIEW_DATE, (/* @__PURE__ */ new Date()).toString());
    }
    return (_ctx, _cache) => {
      return showReview.value ? (openBlock(), createElementBlock("div", _hoisted_1$2, [
        createBaseVNode("p", null, toDisplayString(unref(t)("enjoyAndReview.message")), 1),
        createBaseVNode("img", {
          height: "15",
          src: _imports_1$1,
          onClick: _cache[0] || (_cache[0] = ($event) => closeBlock())
        }),
        createBaseVNode("input", {
          type: "button",
          value: unref(t)("enjoyAndReview.description"),
          onClick: _cache[1] || (_cache[1] = ($event) => openStore())
        }, null, 8, _hoisted_2$2)
      ])) : createCommentVNode("", true);
    };
  }
});
const Review_vue_vue_type_style_index_0_scoped_ac21db1f_lang = "";
const Review = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-ac21db1f"]]);
async function createOffscreen() {
  const path = "src/offscreen.html";
  const offscreenUrl = Browser.runtime.getURL(path);
  if (await chrome.offscreen.hasDocument())
    return;
  await chrome.offscreen.createDocument({
    url: offscreenUrl,
    reasons: ["AUDIO_PLAYBACK"],
    justification: "Play audio sounds"
  });
}
async function checkPomodoro() {
  let Period;
  ((Period2) => {
    Period2["work"] = "WORK";
    Period2["rest"] = "REST";
    Period2["finished"] = "FINISH";
  })(Period || (Period = {}));
  function isTargetPeriod(period) {
    let isPomodoroTargetPeriodEnd;
    for (let index = 1; index <= frequency; index++) {
      let ind = period == "WORK" ? index - 1 : index;
      const plusWorkingTime = workTime * ind;
      const plusRestTime = (restTime + 1) * (index - 1);
      const isPomodoroTargetPeriodStart = addSeconds(startTime, plusWorkingTime + plusRestTime);
      isPomodoroTargetPeriodEnd = addSeconds(startTime, plusWorkingTime + plusRestTime + workTime);
      const isTargetPeriod2 = now >= isPomodoroTargetPeriodStart && (addSeconds(now, -1) <= isPomodoroTargetPeriodEnd || now <= isPomodoroTargetPeriodEnd);
      if (isTargetPeriod2) {
        return {
          period,
          isTargetPeriod: isTargetPeriod2,
          isTargetPeriodFinishedNow: isDateEqual(addSeconds(now, -1), isPomodoroTargetPeriodEnd) || isDateEqual(now, isPomodoroTargetPeriodEnd)
        };
      }
    }
    return {
      period: "FINISH",
      isTargetPeriod: false,
      isTargetPeriodFinishedNow: false
    };
  }
  async function play(period) {
    function getSound() {
      switch (period) {
        case "WORK":
          return StorageParams.POMODORO_AUDIO_AFTER_WORK;
        case "REST":
          return StorageParams.POMODORO_AUDIO_AFTER_REST;
        case "FINISH":
          return StorageParams.POMODORO_AUDIO_AFTER_FINISHED;
      }
    }
    logger.log(`[Pomodoro] ${period}`);
    const sound = await storage.getValue(getSound());
    await createOffscreen();
    await Browser.runtime.sendMessage({
      message: Messages.PlayAudio,
      sound,
      offscreen: true
    });
  }
  const storage = injectStorage();
  const isPomodoroEnabled = await Settings.getInstance().getSetting(
    StorageParams.IS_POMODORO_ENABLED
  );
  if (!isPomodoroEnabled)
    return;
  const startTime = new Date(
    await Settings.getInstance().getSetting(StorageParams.POMODORO_START_TIME)
  );
  const workTime = await Settings.getInstance().getSetting(
    StorageParams.POMODORO_INTERVAL_WORK
  );
  const restTime = await Settings.getInstance().getSetting(
    StorageParams.POMODORO_INTERVAL_REST
  );
  const frequency = await Settings.getInstance().getSetting(
    StorageParams.POMODORO_FREQUENCY
  );
  const now = /* @__PURE__ */ new Date();
  const pomodoroEndTime = addSeconds(startTime, workTime * frequency + restTime * frequency);
  const activeTab = await Browser.tabs.query({ active: true });
  if (now >= pomodoroEndTime) {
    if (isDateEqual(now, pomodoroEndTime)) {
      logger.log(`[Pomodoro] Pomodoro finished`);
      await play(
        "FINISH"
        /* finished */
      );
    }
    await storage.saveValue(StorageParams.IS_POMODORO_ENABLED, false);
    await storage.saveValue(StorageParams.POMODORO_START_TIME, null);
    await useBadge({
      tabId: activeTab[0].id,
      text: null,
      color: BadgeColor.none,
      icon: BadgeIcon.default
    });
    return;
  }
  let target = isTargetPeriod(
    "WORK"
    /* work */
  );
  const isWork = target.isTargetPeriod;
  if (isWork) {
    await useBadge({
      tabId: activeTab[0].id,
      text: null,
      color: BadgeColor.none,
      icon: BadgeIcon.pomodoroWorkingTime
    });
  } else {
    target = isTargetPeriod(
      "REST"
      /* rest */
    );
    if (target.isTargetPeriod) {
      await useBadge({
        tabId: activeTab[0].id,
        text: null,
        color: BadgeColor.none,
        icon: BadgeIcon.pomodoroRestTime
      });
    }
  }
  if (target.isTargetPeriodFinishedNow)
    await play(target.period);
  return {
    isWork
  };
}
const _hoisted_1$1 = {
  key: 0,
  class: "pomodoro-popup-block"
};
const _hoisted_2$1 = { key: 0 };
const _hoisted_3$1 = { key: 1 };
const _hoisted_4$1 = ["value"];
const __default__ = {
  name: "PomodoroInfo"
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  ...__default__,
  setup(__props) {
    const { t } = useI18n();
    const settingsStorage = injectStorage();
    const isEnabled = ref();
    const isWorkingTime = ref();
    onMounted(async () => {
      var _a;
      isEnabled.value = await settingsStorage.getValue(
        StorageParams.IS_POMODORO_ENABLED,
        IS_POMODORO_ENABLED_DEFAULT
      );
      isWorkingTime.value = (_a = await checkPomodoro()) == null ? void 0 : _a.isWork;
    });
    return (_ctx, _cache) => {
      return isEnabled.value ? (openBlock(), createElementBlock("div", _hoisted_1$1, [
        createBaseVNode("p", null, toDisplayString(unref(t)("pomodoroIsEnabled.message")), 1),
        isWorkingTime.value ? (openBlock(), createElementBlock("span", _hoisted_2$1, toDisplayString(unref(t)("pomodoroWork.message")), 1)) : createCommentVNode("", true),
        !isWorkingTime.value ? (openBlock(), createElementBlock("span", _hoisted_3$1, toDisplayString(unref(t)("pomodoroRest.message")), 1)) : createCommentVNode("", true),
        createBaseVNode("input", {
          type: "button",
          value: unref(t)("pomodoroSettings.message"),
          onClick: _cache[0] || (_cache[0] = ($event) => unref(openPage)(unref(SettingsTab).Pomodoro))
        }, null, 8, _hoisted_4$1)
      ])) : createCommentVNode("", true);
    };
  }
});
const PomodoroInfo_vue_vue_type_style_index_0_scoped_9dbdf296_lang = "";
const PomodoroInfo = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-9dbdf296"]]);
const _hoisted_1 = { class: "headerBlock" };
const _hoisted_2 = { class: "icons-block" };
const _hoisted_3 = { class: "tabs" };
const _hoisted_4 = { title: "Today" };
const _hoisted_5 = {
  for: "todayTab",
  role: "button"
};
const _hoisted_6 = { title: "All The Time" };
const _hoisted_7 = {
  for: "allTimeTab",
  role: "button"
};
const _hoisted_8 = { title: "By Days" };
const _hoisted_9 = {
  for: "byDaysTab",
  role: "button"
};
const _hoisted_10 = { class: "content" };
const _hoisted_11 = { id: "todayTabList" };
const _hoisted_12 = { id: "summary" };
const _hoisted_13 = { id: "byDaysTabList" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Popup",
  setup(__props) {
    const { t } = useI18n();
    const settingsStorage = injectStorage();
    const activeTab = ref();
    const darkMode = ref();
    onMounted(async () => {
      activeTab.value = TypeOfList.Today;
      darkMode.value = await settingsStorage.getValue(StorageParams.DARK_MODE, DARK_MODE_DEFAULT);
      if (darkMode.value)
        applyDarkMode(darkMode.value);
    });
    function selectTab(type) {
      activeTab.value = type;
    }
    async function changeDarkMode(value) {
      await settingsStorage.saveValue(StorageParams.DARK_MODE, value);
      darkMode.value = value;
      applyDarkMode(value);
      updateTab();
    }
    function updateTab() {
      const tempValue = activeTab.value;
      activeTab.value = void 0;
      setTimeout(() => {
        activeTab.value = tempValue;
      }, 50);
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        createBaseVNode("div", _hoisted_1, [
          _cache[11] || (_cache[11] = createBaseVNode("div", { class: "d-inline-block" }, [
            createBaseVNode("img", {
              class: "logo",
              height: "30",
              src: _imports_0$1
            }),
            createBaseVNode("p", { class: "header" }, "Web Activity Time Tracker")
          ], -1)),
          createBaseVNode("div", _hoisted_2, [
            createBaseVNode("div", null, [
              darkMode.value == true ? (openBlock(), createElementBlock("img", {
                key: 0,
                class: "dark-mode-icon",
                height: "25",
                src: _imports_1,
                title: "Disable Dark Mode",
                onClick: _cache[0] || (_cache[0] = ($event) => changeDarkMode(false))
              })) : createCommentVNode("", true),
              darkMode.value == false ? (openBlock(), createElementBlock("img", {
                key: 1,
                class: "dark-mode-icon",
                title: "Enable Dark Mode",
                height: "25",
                src: _imports_2,
                onClick: _cache[1] || (_cache[1] = ($event) => changeDarkMode(true))
              })) : createCommentVNode("", true),
              createBaseVNode("a", {
                onClick: _cache[2] || (_cache[2] = ($event) => unref(openPage)(unref(SettingsTab).Pomodoro))
              }, [
                createTextVNode(toDisplayString(unref(t)("pomodoroMode.message")), 1),
                _cache[8] || (_cache[8] = createBaseVNode("img", {
                  src: _imports_5$1,
                  height: "22"
                }, null, -1))
              ]),
              createBaseVNode("a", {
                class: "filter",
                onClick: _cache[3] || (_cache[3] = ($event) => unref(openPage)(unref(SettingsTab).Dashboard))
              }, [
                createTextVNode(toDisplayString(unref(t)("dashboard.message")), 1),
                _cache[9] || (_cache[9] = createBaseVNode("img", {
                  height: "22",
                  src: _imports_4
                }, null, -1))
              ]),
              createBaseVNode("a", {
                class: "filter",
                onClick: _cache[4] || (_cache[4] = ($event) => unref(openPage)(unref(SettingsTab).GeneralSettings))
              }, [
                createTextVNode(toDisplayString(unref(t)("settings.message")), 1),
                _cache[10] || (_cache[10] = createBaseVNode("img", {
                  height: "22",
                  src: _imports_5
                }, null, -1))
              ])
            ])
          ])
        ]),
        createBaseVNode("div", _hoisted_3, [
          createBaseVNode("input", {
            type: "radio",
            id: "todayTab",
            name: "tab-control",
            checked: "",
            onChange: _cache[5] || (_cache[5] = ($event) => selectTab(unref(TypeOfList).Today))
          }, null, 32),
          createBaseVNode("input", {
            type: "radio",
            id: "allTimeTab",
            name: "tab-control",
            onChange: _cache[6] || (_cache[6] = ($event) => selectTab(unref(TypeOfList).All))
          }, null, 32),
          createBaseVNode("input", {
            type: "radio",
            id: "byDaysTab",
            name: "tab-control",
            onChange: _cache[7] || (_cache[7] = ($event) => selectTab(unref(TypeOfList).ByDays))
          }, null, 32),
          createBaseVNode("ul", null, [
            createBaseVNode("li", _hoisted_4, [
              createBaseVNode("label", _hoisted_5, [
                createBaseVNode("span", null, toDisplayString(unref(t)("today.message")), 1)
              ])
            ]),
            createBaseVNode("li", _hoisted_6, [
              createBaseVNode("label", _hoisted_7, [
                createBaseVNode("span", null, toDisplayString(unref(t)("allTime.message")), 1)
              ])
            ]),
            createBaseVNode("li", _hoisted_8, [
              createBaseVNode("label", _hoisted_9, [
                createBaseVNode("span", null, toDisplayString(unref(t)("byDays.message")), 1)
              ])
            ])
          ]),
          _cache[12] || (_cache[12] = createBaseVNode("div", { class: "slider" }, [
            createBaseVNode("div", { class: "indicator" })
          ], -1)),
          createBaseVNode("div", _hoisted_10, [
            createBaseVNode("section", _hoisted_11, [
              activeTab.value == unref(TypeOfList).Today ? (openBlock(), createBlock(TabList, {
                key: 0,
                type: unref(TypeOfList).Today,
                showAllStats: false
              }, null, 8, ["type"])) : createCommentVNode("", true)
            ]),
            createBaseVNode("section", _hoisted_12, [
              activeTab.value == unref(TypeOfList).All ? (openBlock(), createBlock(TabList, {
                key: 0,
                type: unref(TypeOfList).All,
                showAllStats: true
              }, null, 8, ["type"])) : createCommentVNode("", true)
            ]),
            createBaseVNode("section", _hoisted_13, [
              activeTab.value == unref(TypeOfList).ByDays ? (openBlock(), createBlock(ByDays, { key: 0 })) : createCommentVNode("", true)
            ])
          ])
        ]),
        createVNode(PomodoroInfo),
        createVNode(Review)
      ], 64);
    };
  }
});
const Popup_vue_vue_type_style_index_0_scoped_11616b9c_lang = "";
const Popup = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-11616b9c"]]);
const app = createApp(Popup);
app.component("VueDatePicker", oa);
app.use(i18n);
app.mount("body");
const main = "";
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9wdXAuanMiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hc3NldHMvaWNvbnMvbGlnaHQtbW9kZS5zdmciLCIuLi8uLi9zcmMvYXNzZXRzL2ljb25zL2RhcmstbW9kZS5zdmciLCIuLi8uLi9zcmMvYXNzZXRzL2ljb25zL2Rhc2hib2FyZC5zdmciLCIuLi8uLi9zcmMvYXNzZXRzL2ljb25zL3NldHRpbmdzLnN2ZyIsIi4uLy4uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vYWRkU2Vjb25kcy9pbmRleC5qcyIsIi4uLy4uL3NyYy9jb21wb25lbnRzL0V4cGFuZGVyLnZ1ZSIsIi4uLy4uL3NyYy9jb21wb25lbnRzL0J5RGF5cy52dWUiLCIuLi8uLi9zcmMvY29tcG9uZW50cy9SZXZpZXcudnVlIiwiLi4vLi4vc3JjL29mZnNjcmVlbi9pbmRleC50cyIsIi4uLy4uL3NyYy9mdW5jdGlvbnMvcG9tb2Rvcm8udHMiLCIuLi8uLi9zcmMvY29tcG9uZW50cy9Qb21vZG9yb0luZm8udnVlIiwiLi4vLi4vc3JjL3BhZ2VzL1BvcHVwLnZ1ZSIsIi4uLy4uL3NyYy9wb3B1cC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBcIl9fVklURV9BU1NFVF9fZWNlYjUzMWZfX1wiIiwiZXhwb3J0IGRlZmF1bHQgXCJfX1ZJVEVfQVNTRVRfX2IzOTI0YWQ4X19cIiIsImV4cG9ydCBkZWZhdWx0IFwiX19WSVRFX0FTU0VUX184YTM2ZDg0NF9fXCIiLCJleHBvcnQgZGVmYXVsdCBcIl9fVklURV9BU1NFVF9fODYyY2VlNGNfX1wiIiwiaW1wb3J0IHRvSW50ZWdlciBmcm9tIFwiLi4vX2xpYi90b0ludGVnZXIvaW5kZXguanNcIjtcbmltcG9ydCBhZGRNaWxsaXNlY29uZHMgZnJvbSBcIi4uL2FkZE1pbGxpc2Vjb25kcy9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgYWRkU2Vjb25kc1xuICogQGNhdGVnb3J5IFNlY29uZCBIZWxwZXJzXG4gKiBAc3VtbWFyeSBBZGQgdGhlIHNwZWNpZmllZCBudW1iZXIgb2Ygc2Vjb25kcyB0byB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIEFkZCB0aGUgc3BlY2lmaWVkIG51bWJlciBvZiBzZWNvbmRzIHRvIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGUgLSB0aGUgZGF0ZSB0byBiZSBjaGFuZ2VkXG4gKiBAcGFyYW0ge051bWJlcn0gYW1vdW50IC0gdGhlIGFtb3VudCBvZiBzZWNvbmRzIHRvIGJlIGFkZGVkLiBQb3NpdGl2ZSBkZWNpbWFscyB3aWxsIGJlIHJvdW5kZWQgdXNpbmcgYE1hdGguZmxvb3JgLCBkZWNpbWFscyBsZXNzIHRoYW4gemVybyB3aWxsIGJlIHJvdW5kZWQgdXNpbmcgYE1hdGguY2VpbGAuXG4gKiBAcmV0dXJucyB7RGF0ZX0gdGhlIG5ldyBkYXRlIHdpdGggdGhlIHNlY29uZHMgYWRkZWRcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMiBhcmd1bWVudHMgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQWRkIDMwIHNlY29uZHMgdG8gMTAgSnVseSAyMDE0IDEyOjQ1OjAwOlxuICogY29uc3QgcmVzdWx0ID0gYWRkU2Vjb25kcyhuZXcgRGF0ZSgyMDE0LCA2LCAxMCwgMTIsIDQ1LCAwKSwgMzApXG4gKiAvLz0+IFRodSBKdWwgMTAgMjAxNCAxMjo0NTozMFxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhZGRTZWNvbmRzKGRpcnR5RGF0ZSwgZGlydHlBbW91bnQpIHtcbiAgcmVxdWlyZWRBcmdzKDIsIGFyZ3VtZW50cyk7XG4gIHZhciBhbW91bnQgPSB0b0ludGVnZXIoZGlydHlBbW91bnQpO1xuICByZXR1cm4gYWRkTWlsbGlzZWNvbmRzKGRpcnR5RGF0ZSwgYW1vdW50ICogMTAwMCk7XG59IiwiPHRlbXBsYXRlPlxuICA8ZGl2IGNsYXNzPVwiZXhwYW5kZXJcIj5cbiAgICA8ZGl2IGNsYXNzPVwiZXhwYW5kZXItdHJpZ2dlclwiIEBjbGljaz1cIm9wZW4gPSAhb3BlblwiIDpjbGFzcz1cIm9wZW4gPyAnYWN0aXZlJyA6ICdiZWZvcmVCb3JkZXInXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiZC1pbmxpbmUtYmxvY2tcIj5cbiAgICAgICAgPHN2Z1xuICAgICAgICAgIGNsYXNzPVwiZXhwYW5kZXItdHJpZ2dlci1JY29uXCJcbiAgICAgICAgICA6Y2xhc3M9XCJ7IG9wZW46IG9wZW4gfVwiXG4gICAgICAgICAgd2lkdGg9XCI0MFwiXG4gICAgICAgICAgaGVpZ2h0PVwiMTJcIlxuICAgICAgICAgIHN0cm9rZT1cImNvcm5mbG93ZXJibHVlXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxwb2x5bGluZSBwb2ludHM9XCIxMiwyIDIwLDEwIDI4LDJcIiBzdHJva2Utd2lkdGg9XCIzXCIgZmlsbD1cIm5vbmVcIj48L3BvbHlsaW5lPlxuICAgICAgICA8L3N2Zz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cImhlYWRlclwiPlxuICAgICAgICB7eyBkYXkgfX1cbiAgICAgICAgPHNwYW4+e3sgY29udmVydFN1bW1hcnlUaW1lVG9TdHJpbmcodGltZSkgfX08L3NwYW4+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICA8dHJhbnNpdGlvbiBuYW1lPVwibGVmdFRvUmlnaHRcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJleHBhbmRlci1ib2R5XCIgdi1zaG93PVwib3BlblwiPlxuICAgICAgICA8c2xvdD48L3Nsb3Q+XG4gICAgICA8L2Rpdj5cbiAgICA8L3RyYW5zaXRpb24+XG4gIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdCBsYW5nPVwidHNcIj5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbmFtZTogJ0V4cGFuZGVyJyxcbn07XG48L3NjcmlwdD5cblxuPHNjcmlwdCBsYW5nPVwidHNcIiBzZXR1cD5cbmltcG9ydCB7IHJlZiB9IGZyb20gJ3Z1ZSc7XG5pbXBvcnQgeyBjb252ZXJ0U3VtbWFyeVRpbWVUb1N0cmluZyB9IGZyb20gJy4uL3V0aWxzL2NvbnZlcnRlcic7XG5cbmNvbnN0IHByb3BzID0gZGVmaW5lUHJvcHM8e1xuICBkYXk6IHN0cmluZztcbiAgdGltZTogbnVtYmVyO1xufT4oKTtcblxuY29uc3Qgb3BlbiA9IHJlZjxib29sZWFuPigpO1xuPC9zY3JpcHQ+XG5cbjxzdHlsZSBzY29wZWQ+XG4uaGVhZGVyIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogOTAlO1xufVxuLmhlYWRlciBzcGFuIHtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBjb2xvcjogcmdiKDU5LCA1OSwgNTkpO1xuICBmbG9hdDogcmlnaHQ7XG59XG4uZXhwYW5kZXItdHJpZ2dlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgcGFkZGluZzogMC43cmVtIDAuNXJlbTtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlZmVmZWY7XG59XG4uZXhwYW5kZXItdHJpZ2dlcjpob3ZlciB7XG4gIGNvbG9yOiAjNDc3ZGNhO1xufVxuLmV4cGFuZGVyLXRyaWdnZXIuYWN0aXZlIHtcbiAgYm9yZGVyLWJvdHRvbS1jb2xvcjogIzQ3N2RjYTtcbn1cbi5leHBhbmRlci10cmlnZ2VyLUljb24ge1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4ycyBjdWJpYy1iZXppZXIoMC4yMywgMSwgMC4zMiwgMSk7XG59XG4uZXhwYW5kZXItdHJpZ2dlci1JY29uLm9wZW4ge1xuICBzdHJva2U6ICNmZjYzNDc7XG4gIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XG59XG4uZXhwYW5kZXItYm9keSB7XG4gIHBhZGRpbmc6IDFweDtcbiAgYmFja2dyb3VuZDogI2VmZjBmMjtcbn1cbi5sZWZ0VG9SaWdodC1lbnRlci1hY3RpdmUge1xuICAtd2Via2l0LWFuaW1hdGlvbjogbGVmdFRvUmlnaHQgMC41cztcbiAgYW5pbWF0aW9uOiBsZWZ0VG9SaWdodCAwLjVzO1xufVxuLmxlZnRUb1JpZ2h0LWxlYXZlLWFjdGl2ZSB7XG4gIGFuaW1hdGlvbjogbGVmdFRvUmlnaHQgMC41cyByZXZlcnNlO1xufVxuQC13ZWJraXQta2V5ZnJhbWVzIGxlZnRUb1JpZ2h0IHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwdncpO1xuICB9XG4gIDUwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDJlbSk7XG4gIH1cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xuICB9XG59XG5Aa2V5ZnJhbWVzIGxlZnRUb1JpZ2h0IHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwdncpO1xuICB9XG4gIDUwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDJlbSk7XG4gIH1cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xuICB9XG59XG48L3N0eWxlPlxuIiwiPHRlbXBsYXRlPlxuICA8ZGl2IGNsYXNzPVwibm8tZGF0YVwiIHYtaWY9XCJpc0xvYWRpbmdcIj5cbiAgICA8aW1nIGhlaWdodD1cIjU1XCIgc3JjPVwiLi4vYXNzZXRzL2ljb25zL3ByZWxvYWRlci5naWZcIiAvPlxuICA8L2Rpdj5cblxuICA8ZGl2IHYtZWxzZT5cbiAgICA8bm8tZGF0YS1ieS1kYXlzIHYtaWY9XCJjb3VudE9mRGF5cyA9PSB1bmRlZmluZWQgfHwgKGNvdW50T2ZEYXlzID09IDAgJiYgIW5vRGF0YSlcIiAvPlxuXG4gICAgPGRpdiB2LWVsc2UtaWY9XCJub0RhdGFcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJuby1kYXRhXCI+XG4gICAgICAgIHt7IHQoJ25vRGF0YUZvclBlcmlvZC5tZXNzYWdlJykgfX1cbiAgICAgICAgPFZ1ZURhdGVQaWNrZXJcbiAgICAgICAgICByYW5nZVxuICAgICAgICAgIDplbmFibGUtdGltZS1waWNrZXI9XCJmYWxzZVwiXG4gICAgICAgICAgY2xhc3M9XCJkYXRlLXBpY2tlclwiXG4gICAgICAgICAgdi1tb2RlbD1cInNlbGVjdGVkRGF0ZVwiXG4gICAgICAgICAgOnByZXNldC1yYW5nZXM9XCJwcmVzZXRSYW5nZXNcIlxuICAgICAgICAgIEB1cGRhdGU6bW9kZWwtdmFsdWU9XCJoYW5kbGVEYXRlXCJcbiAgICAgICAgPlxuICAgICAgICAgIDx0ZW1wbGF0ZSAjeWVhcmx5PVwieyBsYWJlbCwgcmFuZ2UsIHByZXNldERhdGVSYW5nZSB9XCI+XG4gICAgICAgICAgICA8c3BhbiBAY2xpY2s9XCJwcmVzZXREYXRlUmFuZ2UocmFuZ2UpXCI+e3sgbGFiZWwgfX08L3NwYW4+XG4gICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgPC9WdWVEYXRlUGlja2VyPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG5cbiAgICA8ZGl2IHYtZWxzZT5cbiAgICAgIDxkaXYgY2xhc3M9XCJkYXRlLWJsb2NrXCI+XG4gICAgICAgIDxWdWVEYXRlUGlja2VyXG4gICAgICAgICAgcmFuZ2VcbiAgICAgICAgICA6ZW5hYmxlLXRpbWUtcGlja2VyPVwiZmFsc2VcIlxuICAgICAgICAgIGNsYXNzPVwiZGF0ZS1waWNrZXJcIlxuICAgICAgICAgIHYtbW9kZWw9XCJzZWxlY3RlZERhdGVcIlxuICAgICAgICAgIDpwcmVzZXQtcmFuZ2VzPVwicHJlc2V0UmFuZ2VzXCJcbiAgICAgICAgICBAdXBkYXRlOm1vZGVsLXZhbHVlPVwiaGFuZGxlRGF0ZVwiXG4gICAgICAgID5cbiAgICAgICAgICA8dGVtcGxhdGUgI3llYXJseT1cInsgbGFiZWwsIHJhbmdlLCBwcmVzZXREYXRlUmFuZ2UgfVwiPlxuICAgICAgICAgICAgPHNwYW4gQGNsaWNrPVwicHJlc2V0RGF0ZVJhbmdlKHJhbmdlKVwiPnt7IGxhYmVsIH19PC9zcGFuPlxuICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgIDwvVnVlRGF0ZVBpY2tlcj5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJidXR0b25cIiA6dmFsdWU9XCJ0KCdleHBvcnRUb0Nzdi5tZXNzYWdlJylcIiBAY2xpY2s9XCJleHBvcnRUb0NzdigpXCIgLz5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8ZGl2IGNsYXNzPVwic3RhdHMtYmxvY2sgYmxvY2tcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImhlYWRlclwiPnt7IHQoJ2F2ZXJhZ2VUaW1lQnlEYXlzLm1lc3NhZ2UnKSB9fTwvZGl2PlxuICAgICAgICA8cD57eyBjb252ZXJ0U3VtbWFyeVRpbWVUb1N0cmluZyh0YWJzQnlEYXlzIS5hdmVyYWdlVGltZSkgfX08L3A+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGRpdiBjbGFzcz1cIm1sLTIwIG1yLTIwIGJ5LWRheXMtY2hhcnRcIj5cbiAgICAgICAgPEJ5RGF5c0NoYXJ0IDpkYXRhPVwidGFic0J5RGF5cyFcIiAvPlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxFeHBhbmRlciA6ZGF5PVwidCgnYWxsVGltZS5tZXNzYWdlJylcIiA6dGltZT1cInRhYnNCeURheXM/LnN1bW1hcnlUaW1lIHx8IDBcIiBjbGFzcz1cInRvdGFsXCI+XG4gICAgICAgICAgPFRhYkl0ZW1cbiAgICAgICAgICAgIHYtZm9yPVwiKHRhYiwgaSkgb2YgbWVyZ2VBbGxEYXlzKHRhYnNCeURheXM/LmRheXMpXCJcbiAgICAgICAgICAgIDppdGVtPVwidGFiXCJcbiAgICAgICAgICAgIDpzdW1tYXJ5VGltZUZvcldob2xlRGF5PVwidGFic0J5RGF5cz8uc3VtbWFyeVRpbWUgfHwgMFwiXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9FeHBhbmRlcj5cblxuICAgICAgICA8RXhwYW5kZXJcbiAgICAgICAgICB2LWZvcj1cIih0YWJEYXksIGkpIG9mIHRhYnNCeURheXM/LmRheXNcIlxuICAgICAgICAgIDprZXk9XCJpXCJcbiAgICAgICAgICA6ZGF5PVwidGFiRGF5LmRheVwiXG4gICAgICAgICAgOnRpbWU9XCJ0YWJEYXkudGltZVwiXG4gICAgICAgID5cbiAgICAgICAgICA8VGFiSXRlbVxuICAgICAgICAgICAgdi1mb3I9XCIodGFiLCBpKSBvZiB0YWJEYXkudGFic1wiXG4gICAgICAgICAgICA6a2V5PVwiaVwiXG4gICAgICAgICAgICA6aXRlbT1cInRhYlwiXG4gICAgICAgICAgICA6c3VtbWFyeVRpbWVGb3JXaG9sZURheT1cInRhYkRheS50aW1lXCJcbiAgICAgICAgICAvPlxuICAgICAgICA8L0V4cGFuZGVyPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdCBsYW5nPVwidHNcIj5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbmFtZTogJ1RhYkxpc3QnLFxufTtcbjwvc2NyaXB0PlxuXG48c2NyaXB0IGxhbmc9XCJ0c1wiIHNldHVwPlxuaW1wb3J0IHsgY29tcHV0ZWQsIG9uTW91bnRlZCwgcmVmIH0gZnJvbSAndnVlJztcbmltcG9ydCB7IHVzZUkxOG4gfSBmcm9tICd2dWUtaTE4bic7XG5pbXBvcnQgVGFiSXRlbSBmcm9tICcuLi9jb21wb25lbnRzL1RhYkl0ZW0udnVlJztcbmltcG9ydCBOb0RhdGFCeURheXMgZnJvbSAnLi9Ob0RhdGFCeURheXMudnVlJztcbmltcG9ydCBCeURheXNDaGFydCBmcm9tICcuLi9jb21wb25lbnRzL0J5RGF5c0NoYXJ0LnZ1ZSc7XG5pbXBvcnQgRXhwYW5kZXIgZnJvbSAnLi4vY29tcG9uZW50cy9FeHBhbmRlci52dWUnO1xuaW1wb3J0IHsgVGFiTGlzdEJ5RGF5cyB9IGZyb20gJy4uL2R0by90YWJMaXN0U3VtbWFyeSc7XG5pbXBvcnQgeyBDdXJyZW50VGFiSXRlbSB9IGZyb20gJy4uL2R0by9jdXJyZW50VGFiSXRlbSc7XG5pbXBvcnQgeyB1c2VUYWJMaXN0QnlEYXlzIH0gZnJvbSAnLi4vZnVuY3Rpb25zL3VzZVRhYkxpc3RCeURheXMnO1xuaW1wb3J0IHsgY29udmVydFN1bW1hcnlUaW1lVG9TdHJpbmcgfSBmcm9tICcuLi91dGlscy9jb252ZXJ0ZXInO1xuaW1wb3J0IHsgcmFuZ2VzLCBUaGlzV2Vla1JhbmdlIH0gZnJvbSAnLi4vdXRpbHMvZGF0ZSc7XG5pbXBvcnQgeyB1c2VJbXBvcnRUb0NzdldpdGhEYXRhIH0gZnJvbSAnLi4vZnVuY3Rpb25zL3VzZUltcG9ydFRvQ3N2JztcbmltcG9ydCB7IHVzZUZpbGUsIEZpbGVUeXBlIH0gZnJvbSAnLi4vZnVuY3Rpb25zL3VzZUZpbGUnO1xuXG5jb25zdCB7IHQgfSA9IHVzZUkxOG4oKTtcblxuY29uc3QgdGFic0J5RGF5cyA9IHJlZjxUYWJMaXN0QnlEYXlzPigpO1xuY29uc3QgaXNMb2FkaW5nID0gcmVmPGJvb2xlYW4+KCk7XG5jb25zdCBub0RhdGEgPSByZWY8Ym9vbGVhbj4oKTtcbmNvbnN0IHNlbGVjdGVkRGF0ZSA9IHJlZjxEYXRlW10+KCk7XG5cbmNvbnN0IHByZXNldFJhbmdlcyA9IHJhbmdlcygpO1xuXG5jb25zdCBjb3VudE9mRGF5cyA9IGNvbXB1dGVkKCgpID0+XG4gIHRhYnNCeURheXMudmFsdWUgIT0gdW5kZWZpbmVkID8gdGFic0J5RGF5cy52YWx1ZS5kYXlzLmxlbmd0aCA6IDAsXG4pO1xuXG5hc3luYyBmdW5jdGlvbiBsb2FkTGlzdChkYXRlRnJvbTogRGF0ZSwgZGF0ZVRvOiBEYXRlKSB7XG4gIGNvbnN0IHRhYkxpc3QgPSBhd2FpdCB1c2VUYWJMaXN0QnlEYXlzKGRhdGVGcm9tLCBkYXRlVG8pO1xuICBpZiAodGFiTGlzdCAhPSBudWxsKSB7XG4gICAgdGFic0J5RGF5cy52YWx1ZSA9IHRhYkxpc3Q7XG4gICAgaWYgKHRhYkxpc3QuZGF5cy5sZW5ndGggPT0gMCAmJiB0YWJMaXN0LnN1bW1hcnlUaW1lID09IDApIG5vRGF0YS52YWx1ZSA9IHRydWU7XG4gICAgZWxzZSBub0RhdGEudmFsdWUgPSBmYWxzZTtcbiAgfVxuICBpc0xvYWRpbmcudmFsdWUgPSBmYWxzZTtcbn1cblxuYXN5bmMgZnVuY3Rpb24gaGFuZGxlRGF0ZShtb2RlbERhdGE6IERhdGVbXSkge1xuICBzZWxlY3RlZERhdGUudmFsdWUgPSBtb2RlbERhdGE7XG4gIGNvbnN0IGRhdGVGcm9tID0gc2VsZWN0ZWREYXRlLnZhbHVlPy5bMF0gYXMgRGF0ZTtcbiAgY29uc3QgZGF0ZVRvID0gc2VsZWN0ZWREYXRlLnZhbHVlPy5bMV0gYXMgRGF0ZTtcbiAgYXdhaXQgbG9hZExpc3QoZGF0ZUZyb20sIGRhdGVUbyk7XG59XG5cbm9uTW91bnRlZChhc3luYyAoKSA9PiB7XG4gIGlzTG9hZGluZy52YWx1ZSA9IHRydWU7XG4gIHNlbGVjdGVkRGF0ZS52YWx1ZSA9IFRoaXNXZWVrUmFuZ2U7XG4gIGNvbnN0IGRhdGVGcm9tID0gc2VsZWN0ZWREYXRlLnZhbHVlPy5bMF0gYXMgRGF0ZTtcbiAgY29uc3QgZGF0ZVRvID0gc2VsZWN0ZWREYXRlLnZhbHVlPy5bMV0gYXMgRGF0ZTtcbiAgYXdhaXQgbG9hZExpc3QoZGF0ZUZyb20sIGRhdGVUbyk7XG59KTtcblxuYXN5bmMgZnVuY3Rpb24gZXhwb3J0VG9Dc3YoKSB7XG4gIGNvbnN0IGRhdGVGcm9tID0gc2VsZWN0ZWREYXRlLnZhbHVlPy5bMF0gYXMgRGF0ZTtcbiAgY29uc3QgZGF0ZVRvID0gc2VsZWN0ZWREYXRlLnZhbHVlPy5bMV0gYXMgRGF0ZTtcbiAgY29uc3QgY3N2ID0gYXdhaXQgdXNlSW1wb3J0VG9Dc3ZXaXRoRGF0YSh0YWJzQnlEYXlzLnZhbHVlPy5kYXlzKTtcbiAgdXNlRmlsZShcbiAgICBjc3YsXG4gICAgRmlsZVR5cGUuQ1NWLFxuICAgIGB3ZWJzaXRlc18ke2RhdGVGcm9tLnRvTG9jYWxlRGF0ZVN0cmluZygpfS0ke2RhdGVUby50b0xvY2FsZURhdGVTdHJpbmcoKX0uY3N2YCxcbiAgKTtcbn1cblxuZnVuY3Rpb24gbWVyZ2VBbGxEYXlzKGRheXM6IFRhYkxpc3RCeURheXNbJ2RheXMnXSB8IHVuZGVmaW5lZCk6IEN1cnJlbnRUYWJJdGVtW10ge1xuICBpZiAoIWRheXMpIHJldHVybiBbXTtcblxuICBjb25zdCB1cmxNYXAgPSBuZXcgTWFwPHN0cmluZywgQ3VycmVudFRhYkl0ZW0+KCk7XG5cbiAgZm9yIChjb25zdCBkYXkgb2YgZGF5cykge1xuICAgIGZvciAoY29uc3QgdGFiIG9mIGRheS50YWJzKSB7XG4gICAgICBpZiAoIXVybE1hcC5oYXModGFiLnVybCkpIHtcbiAgICAgICAgdXJsTWFwLnNldCh0YWIudXJsLCB7IC4uLnRhYiB9KTtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGV4aXN0aW5nVGFiID0gdXJsTWFwLmdldCh0YWIudXJsKSE7XG4gICAgICBleGlzdGluZ1RhYi5zdW1tYXJ5VGltZSArPSB0YWIuc3VtbWFyeVRpbWU7XG4gICAgICBleGlzdGluZ1RhYi5zZXNzaW9ucyArPSB0YWIuc2Vzc2lvbnM7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIEFycmF5LmZyb20odXJsTWFwLnZhbHVlcygpKS5zb3J0KChhLCBiKSA9PiBiLnN1bW1hcnlUaW1lIC0gYS5zdW1tYXJ5VGltZSk7XG59XG48L3NjcmlwdD5cblxuPHN0eWxlIHNjb3BlZD5cbi5zdGF0cy1ibG9jay5ibG9jayB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICBtYXJnaW46IDEwcHggMjVweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uc3RhdHMtYmxvY2suYmxvY2sgLmhlYWRlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXBvcHVwLWhlYWRlcik7XG4gIGNvbG9yOiByZ2IoNjYsIDY2LCA2Nik7XG4gIHBhZGRpbmc6IDVweCA1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cblxuLnN0YXRzLWJsb2NrLmJsb2NrIHAge1xuICBtYXJnaW46IDJweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXdlaWdodDogNzAwO1xuICBmb250LXNpemU6IDEzcHg7XG4gIGNvbG9yOiByZ2IoNTksIDU5LCA1OSk7XG59XG4uZGF0ZS1ibG9jayB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgbWFyZ2luOiAwIDI1cHg7XG59XG4uYnktZGF5cy1jaGFydCB7XG4gIGhlaWdodDogMjQwcHg7XG59XG4uZXhwYW5kZXIudG90YWwge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTBlNGZmO1xufVxuPC9zdHlsZT5cbiIsIjx0ZW1wbGF0ZT5cbiAgPGRpdiBjbGFzcz1cInJldmlldy1ibG9ja1wiIHYtaWY9XCJzaG93UmV2aWV3XCI+XG4gICAgPHA+e3sgdCgnZW5qb3lBbmRSZXZpZXcubWVzc2FnZScpIH19PC9wPlxuICAgIDxpbWcgaGVpZ2h0PVwiMTVcIiBzcmM9XCIuLi9hc3NldHMvaWNvbnMvY2xvc2Uuc3ZnXCIgQGNsaWNrPVwiY2xvc2VCbG9jaygpXCIgLz5cbiAgICA8aW5wdXQgdHlwZT1cImJ1dHRvblwiIDp2YWx1ZT1cInQoJ2Vuam95QW5kUmV2aWV3LmRlc2NyaXB0aW9uJylcIiBAY2xpY2s9XCJvcGVuU3RvcmUoKVwiIC8+XG4gIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdCBsYW5nPVwidHNcIj5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbmFtZTogJ1JldmlldycsXG59O1xuPC9zY3JpcHQ+XG5cbjxzY3JpcHQgbGFuZz1cInRzXCIgc2V0dXA+XG5pbXBvcnQgeyBvbk1vdW50ZWQsIHJlZiB9IGZyb20gJ3Z1ZSc7XG5pbXBvcnQgeyB1c2VJMThuIH0gZnJvbSAndnVlLWkxOG4nO1xuaW1wb3J0IHsgaW5qZWN0U3RvcmFnZSB9IGZyb20gJy4uL3N0b3JhZ2UvaW5qZWN0LXN0b3JhZ2UnO1xuaW1wb3J0IHsgU3RvcmFnZVBhcmFtcyB9IGZyb20gJy4uL3N0b3JhZ2Uvc3RvcmFnZS1wYXJhbXMnO1xuaW1wb3J0IHsgYWRkRGF5cywgc3RhcnRPZlRvZGF5IH0gZnJvbSAnZGF0ZS1mbnMnO1xuaW1wb3J0IHsgYWRkSG91cnMgfSBmcm9tICdkYXRlLWZucy9lc20nO1xuaW1wb3J0IHsgQ0hST01FX1NUT1JFX1JFVklFV19VUkwsIEVER0VfU1RPUkVfUkVWSUVXX1VSTCB9IGZyb20gJy4uL3V0aWxzL2Nocm9tZS11cmwnO1xuXG5jb25zdCB7IHQgfSA9IHVzZUkxOG4oKTtcblxuY29uc3Qgc2V0dGluZ3NTdG9yYWdlID0gaW5qZWN0U3RvcmFnZSgpO1xuY29uc3QgUFJPTVBUX0FUX1RJTUVfT0ZfREFZID0gMTI7XG5jb25zdCBBRERfREFZU19GSVJTVCA9IDI7XG5jb25zdCBBRERfREFZU19ORVhUID0gNTtcblxuY29uc3Qgc2hvd1JldmlldyA9IHJlZjxib29sZWFuPigpO1xuXG5vbk1vdW50ZWQoYXN5bmMgKCkgPT4ge1xuICBzaG93UmV2aWV3LnZhbHVlID0gZmFsc2U7XG4gIGNvbnN0IHJldmlld0RhdGUgPSBhd2FpdCBzZXR0aW5nc1N0b3JhZ2UuZ2V0VmFsdWUoU3RvcmFnZVBhcmFtcy5SRVZJRVdfREFURSk7XG5cbiAgaWYgKHJldmlld0RhdGUgPT0gdW5kZWZpbmVkKSB7XG4gICAgbGV0IG5leHRUaW1lID0gYXdhaXQgc2V0dGluZ3NTdG9yYWdlLmdldFZhbHVlKFN0b3JhZ2VQYXJhbXMuUkVWSUVXX1BST01QVF9BVCk7XG4gICAgaWYgKG5leHRUaW1lID09IHVuZGVmaW5lZCkge1xuICAgICAgYXdhaXQgc2V0dGluZ3NTdG9yYWdlLnNhdmVWYWx1ZShcbiAgICAgICAgU3RvcmFnZVBhcmFtcy5SRVZJRVdfUFJPTVBUX0FULFxuICAgICAgICBhZGREYXlzKGFkZEhvdXJzKHN0YXJ0T2ZUb2RheSgpLCBQUk9NUFRfQVRfVElNRV9PRl9EQVkpLCBBRERfREFZU19GSVJTVCkudG9TdHJpbmcoKSxcbiAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG5leHRUaW1lID0gbmV3IERhdGUobmV4dFRpbWUpO1xuICAgICAgaWYgKG5leHRUaW1lIDwgbmV3IERhdGUoKSkgc2hvd1Jldmlldy52YWx1ZSA9IHRydWU7XG4gICAgfVxuICB9XG59KTtcblxuYXN5bmMgZnVuY3Rpb24gY2xvc2VCbG9jaygpIHtcbiAgc2hvd1Jldmlldy52YWx1ZSA9IGZhbHNlO1xuICBhd2FpdCBzZXR0aW5nc1N0b3JhZ2Uuc2F2ZVZhbHVlKFxuICAgIFN0b3JhZ2VQYXJhbXMuUkVWSUVXX1BST01QVF9BVCxcbiAgICBhZGREYXlzKGFkZEhvdXJzKHN0YXJ0T2ZUb2RheSgpLCBQUk9NUFRfQVRfVElNRV9PRl9EQVkpLCBBRERfREFZU19ORVhUKS50b1N0cmluZygpLFxuICApO1xufVxuXG5hc3luYyBmdW5jdGlvbiBvcGVuU3RvcmUoKSB7XG4gIHdpbmRvdy5vcGVuKF9fQlJPV1NFUl9fID09ICdlZGdlJyA/IEVER0VfU1RPUkVfUkVWSUVXX1VSTCA6IENIUk9NRV9TVE9SRV9SRVZJRVdfVVJMLCAnX2JsYW5rJyk7XG4gIGF3YWl0IHNldHRpbmdzU3RvcmFnZS5zYXZlVmFsdWUoU3RvcmFnZVBhcmFtcy5SRVZJRVdfREFURSwgbmV3IERhdGUoKS50b1N0cmluZygpKTtcbn1cbjwvc2NyaXB0PlxuXG48c3R5bGUgc2NvcGVkPlxuLnJldmlldy1ibG9jayB7XG4gIHdpZHRoOiAtd2Via2l0LWZpbGwtYXZhaWxhYmxlO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGJvdHRvbTogMDtcbiAgcGFkZGluZzogOHB4IDIwcHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VmZWZlZjtcbn1cbi5yZXZpZXctYmxvY2sgaW5wdXRbdHlwZT0nYnV0dG9uJ10ge1xuICBtYXJnaW46IDAgMjBweCAwIDA7XG4gIGZsb2F0OiByaWdodDtcbiAgd2lkdGg6IGF1dG87XG59XG4ucmV2aWV3LWJsb2NrIHAge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbjogOHB4O1xuICBmb250LXNpemU6IDE3cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG4ucmV2aWV3LWJsb2NrIGltZyB7XG4gIHBhZGRpbmc6IDlweCAwIDAgMDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBmbG9hdDogcmlnaHQ7XG59XG48L3N0eWxlPlxuIiwiaW1wb3J0IEJyb3dzZXIgZnJvbSAnd2ViZXh0ZW5zaW9uLXBvbHlmaWxsJztcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZU9mZnNjcmVlbigpIHtcbiAgY29uc3QgcGF0aCA9ICdzcmMvb2Zmc2NyZWVuLmh0bWwnO1xuICBjb25zdCBvZmZzY3JlZW5VcmwgPSBCcm93c2VyLnJ1bnRpbWUuZ2V0VVJMKHBhdGgpO1xuICBpZiAoYXdhaXQgY2hyb21lLm9mZnNjcmVlbi5oYXNEb2N1bWVudCgpKSByZXR1cm47XG4gIGF3YWl0IGNocm9tZS5vZmZzY3JlZW4uY3JlYXRlRG9jdW1lbnQoe1xuICAgIHVybDogb2Zmc2NyZWVuVXJsLFxuICAgIHJlYXNvbnM6IFsnQVVESU9fUExBWUJBQ0snXSxcbiAgICBqdXN0aWZpY2F0aW9uOiAnUGxheSBhdWRpbyBzb3VuZHMnLFxuICB9KTtcbn1cbiIsImltcG9ydCB7IGFkZFNlY29uZHMgfSBmcm9tICdkYXRlLWZucyc7XG5pbXBvcnQgeyBpbmplY3RTdG9yYWdlIH0gZnJvbSAnLi4vc3RvcmFnZS9pbmplY3Qtc3RvcmFnZSc7XG5pbXBvcnQgeyBTdG9yYWdlUGFyYW1zIH0gZnJvbSAnLi4vc3RvcmFnZS9zdG9yYWdlLXBhcmFtcyc7XG5pbXBvcnQgeyB1c2VCYWRnZSwgQmFkZ2VJY29uLCBCYWRnZUNvbG9yIH0gZnJvbSAnLi91c2VCYWRnZSc7XG5pbXBvcnQgeyBTZXR0aW5ncyB9IGZyb20gJy4vc2V0dGluZ3MnO1xuaW1wb3J0IEJyb3dzZXIgZnJvbSAnd2ViZXh0ZW5zaW9uLXBvbHlmaWxsJztcbmltcG9ydCB7IGxvZ2dlciB9IGZyb20gJy4uL3V0aWxzL2xvZ2dlcic7XG5pbXBvcnQgeyBNZXNzYWdlcyB9IGZyb20gJy4uL3V0aWxzL21lc3NhZ2VzJztcbmltcG9ydCB7IGlzRGF0ZUVxdWFsIH0gZnJvbSAnLi4vdXRpbHMvZGF0ZSc7XG5pbXBvcnQgeyBjcmVhdGVPZmZzY3JlZW4gfSBmcm9tICcuLi9vZmZzY3JlZW4vaW5kZXgnO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY2hlY2tQb21vZG9ybygpIHtcbiAgdHlwZSBQb21vZG9yb1BlcmlvZCA9IHtcbiAgICBwZXJpb2Q6IFBlcmlvZDtcbiAgICBpc1RhcmdldFBlcmlvZDogYm9vbGVhbjtcbiAgICBpc1RhcmdldFBlcmlvZEZpbmlzaGVkTm93OiBib29sZWFuO1xuICB9O1xuXG4gIGVudW0gUGVyaW9kIHtcbiAgICB3b3JrID0gJ1dPUksnLFxuICAgIHJlc3QgPSAnUkVTVCcsXG4gICAgZmluaXNoZWQgPSAnRklOSVNIJyxcbiAgfVxuXG4gIGZ1bmN0aW9uIGlzVGFyZ2V0UGVyaW9kKHBlcmlvZDogUGVyaW9kKTogUG9tb2Rvcm9QZXJpb2Qge1xuICAgIGxldCBpc1BvbW9kb3JvVGFyZ2V0UGVyaW9kRW5kO1xuICAgIGZvciAobGV0IGluZGV4ID0gMTsgaW5kZXggPD0gZnJlcXVlbmN5OyBpbmRleCsrKSB7XG4gICAgICBsZXQgaW5kID0gcGVyaW9kID09IFBlcmlvZC53b3JrID8gaW5kZXggLSAxIDogaW5kZXg7XG4gICAgICBjb25zdCBwbHVzV29ya2luZ1RpbWUgPSB3b3JrVGltZSAqIGluZDtcbiAgICAgIGNvbnN0IHBsdXNSZXN0VGltZSA9IChyZXN0VGltZSArIDEpICogKGluZGV4IC0gMSk7XG4gICAgICBjb25zdCBpc1BvbW9kb3JvVGFyZ2V0UGVyaW9kU3RhcnQgPSBhZGRTZWNvbmRzKHN0YXJ0VGltZSwgcGx1c1dvcmtpbmdUaW1lICsgcGx1c1Jlc3RUaW1lKTtcbiAgICAgIGlzUG9tb2Rvcm9UYXJnZXRQZXJpb2RFbmQgPSBhZGRTZWNvbmRzKHN0YXJ0VGltZSwgcGx1c1dvcmtpbmdUaW1lICsgcGx1c1Jlc3RUaW1lICsgd29ya1RpbWUpO1xuICAgICAgY29uc3QgaXNUYXJnZXRQZXJpb2QgPVxuICAgICAgICBub3cgPj0gaXNQb21vZG9yb1RhcmdldFBlcmlvZFN0YXJ0ICYmXG4gICAgICAgIChhZGRTZWNvbmRzKG5vdywgLTEpIDw9IGlzUG9tb2Rvcm9UYXJnZXRQZXJpb2RFbmQgfHwgbm93IDw9IGlzUG9tb2Rvcm9UYXJnZXRQZXJpb2RFbmQpO1xuXG4gICAgICBpZiAoaXNUYXJnZXRQZXJpb2QpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBwZXJpb2Q6IHBlcmlvZCxcbiAgICAgICAgICBpc1RhcmdldFBlcmlvZDogaXNUYXJnZXRQZXJpb2QsXG4gICAgICAgICAgaXNUYXJnZXRQZXJpb2RGaW5pc2hlZE5vdzpcbiAgICAgICAgICAgIGlzRGF0ZUVxdWFsKGFkZFNlY29uZHMobm93LCAtMSksIGlzUG9tb2Rvcm9UYXJnZXRQZXJpb2RFbmQpIHx8XG4gICAgICAgICAgICBpc0RhdGVFcXVhbChub3csIGlzUG9tb2Rvcm9UYXJnZXRQZXJpb2RFbmQpLFxuICAgICAgICB9O1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgcGVyaW9kOiBQZXJpb2QuZmluaXNoZWQsXG4gICAgICBpc1RhcmdldFBlcmlvZDogZmFsc2UsXG4gICAgICBpc1RhcmdldFBlcmlvZEZpbmlzaGVkTm93OiBmYWxzZSxcbiAgICB9O1xuICB9XG5cbiAgYXN5bmMgZnVuY3Rpb24gcGxheShwZXJpb2Q6IFBlcmlvZCkge1xuICAgIGZ1bmN0aW9uIGdldFNvdW5kKCkge1xuICAgICAgc3dpdGNoIChwZXJpb2QpIHtcbiAgICAgICAgY2FzZSBQZXJpb2Qud29yazpcbiAgICAgICAgICByZXR1cm4gU3RvcmFnZVBhcmFtcy5QT01PRE9ST19BVURJT19BRlRFUl9XT1JLO1xuICAgICAgICBjYXNlIFBlcmlvZC5yZXN0OlxuICAgICAgICAgIHJldHVybiBTdG9yYWdlUGFyYW1zLlBPTU9ET1JPX0FVRElPX0FGVEVSX1JFU1Q7XG4gICAgICAgIGNhc2UgUGVyaW9kLmZpbmlzaGVkOlxuICAgICAgICAgIHJldHVybiBTdG9yYWdlUGFyYW1zLlBPTU9ET1JPX0FVRElPX0FGVEVSX0ZJTklTSEVEO1xuICAgICAgfVxuICAgIH1cbiAgICBsb2dnZXIubG9nKGBbUG9tb2Rvcm9dICR7cGVyaW9kfWApO1xuICAgIGNvbnN0IHNvdW5kID0gYXdhaXQgc3RvcmFnZS5nZXRWYWx1ZShnZXRTb3VuZCgpKTtcbiAgICBhd2FpdCBjcmVhdGVPZmZzY3JlZW4oKTtcbiAgICBhd2FpdCBCcm93c2VyLnJ1bnRpbWUuc2VuZE1lc3NhZ2Uoe1xuICAgICAgbWVzc2FnZTogTWVzc2FnZXMuUGxheUF1ZGlvLFxuICAgICAgc291bmQ6IHNvdW5kLFxuICAgICAgb2Zmc2NyZWVuOiB0cnVlLFxuICAgIH0pO1xuICB9XG5cbiAgY29uc3Qgc3RvcmFnZSA9IGluamVjdFN0b3JhZ2UoKTtcbiAgY29uc3QgaXNQb21vZG9yb0VuYWJsZWQgPSAoYXdhaXQgU2V0dGluZ3MuZ2V0SW5zdGFuY2UoKS5nZXRTZXR0aW5nKFxuICAgIFN0b3JhZ2VQYXJhbXMuSVNfUE9NT0RPUk9fRU5BQkxFRCxcbiAgKSkgYXMgYm9vbGVhbjtcblxuICBpZiAoIWlzUG9tb2Rvcm9FbmFibGVkKSByZXR1cm47XG5cbiAgY29uc3Qgc3RhcnRUaW1lID0gbmV3IERhdGUoXG4gICAgKGF3YWl0IFNldHRpbmdzLmdldEluc3RhbmNlKCkuZ2V0U2V0dGluZyhTdG9yYWdlUGFyYW1zLlBPTU9ET1JPX1NUQVJUX1RJTUUpKSBhcyBzdHJpbmcsXG4gICk7XG4gIGNvbnN0IHdvcmtUaW1lID0gKGF3YWl0IFNldHRpbmdzLmdldEluc3RhbmNlKCkuZ2V0U2V0dGluZyhcbiAgICBTdG9yYWdlUGFyYW1zLlBPTU9ET1JPX0lOVEVSVkFMX1dPUkssXG4gICkpIGFzIG51bWJlcjtcbiAgY29uc3QgcmVzdFRpbWUgPSAoYXdhaXQgU2V0dGluZ3MuZ2V0SW5zdGFuY2UoKS5nZXRTZXR0aW5nKFxuICAgIFN0b3JhZ2VQYXJhbXMuUE9NT0RPUk9fSU5URVJWQUxfUkVTVCxcbiAgKSkgYXMgbnVtYmVyO1xuICBjb25zdCBmcmVxdWVuY3kgPSAoYXdhaXQgU2V0dGluZ3MuZ2V0SW5zdGFuY2UoKS5nZXRTZXR0aW5nKFxuICAgIFN0b3JhZ2VQYXJhbXMuUE9NT0RPUk9fRlJFUVVFTkNZLFxuICApKSBhcyBudW1iZXI7XG5cbiAgY29uc3Qgbm93ID0gbmV3IERhdGUoKTtcblxuICBjb25zdCBwb21vZG9yb0VuZFRpbWUgPSBhZGRTZWNvbmRzKHN0YXJ0VGltZSwgd29ya1RpbWUgKiBmcmVxdWVuY3kgKyByZXN0VGltZSAqIGZyZXF1ZW5jeSk7XG5cbiAgY29uc3QgYWN0aXZlVGFiID0gYXdhaXQgQnJvd3Nlci50YWJzLnF1ZXJ5KHsgYWN0aXZlOiB0cnVlIH0pO1xuXG4gIGlmIChub3cgPj0gcG9tb2Rvcm9FbmRUaW1lKSB7XG4gICAgaWYgKGlzRGF0ZUVxdWFsKG5vdywgcG9tb2Rvcm9FbmRUaW1lKSkge1xuICAgICAgbG9nZ2VyLmxvZyhgW1BvbW9kb3JvXSBQb21vZG9ybyBmaW5pc2hlZGApO1xuICAgICAgYXdhaXQgcGxheShQZXJpb2QuZmluaXNoZWQpO1xuICAgIH1cblxuICAgIGF3YWl0IHN0b3JhZ2Uuc2F2ZVZhbHVlKFN0b3JhZ2VQYXJhbXMuSVNfUE9NT0RPUk9fRU5BQkxFRCwgZmFsc2UpO1xuICAgIGF3YWl0IHN0b3JhZ2Uuc2F2ZVZhbHVlKFN0b3JhZ2VQYXJhbXMuUE9NT0RPUk9fU1RBUlRfVElNRSwgbnVsbCk7XG4gICAgYXdhaXQgdXNlQmFkZ2Uoe1xuICAgICAgdGFiSWQ6IGFjdGl2ZVRhYlswXS5pZCxcbiAgICAgIHRleHQ6IG51bGwsXG4gICAgICBjb2xvcjogQmFkZ2VDb2xvci5ub25lLFxuICAgICAgaWNvbjogQmFkZ2VJY29uLmRlZmF1bHQsXG4gICAgfSk7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgbGV0IHRhcmdldCA9IGlzVGFyZ2V0UGVyaW9kKFBlcmlvZC53b3JrKTtcbiAgY29uc3QgaXNXb3JrID0gdGFyZ2V0LmlzVGFyZ2V0UGVyaW9kO1xuXG4gIGlmIChpc1dvcmspIHtcbiAgICBhd2FpdCB1c2VCYWRnZSh7XG4gICAgICB0YWJJZDogYWN0aXZlVGFiWzBdLmlkLFxuICAgICAgdGV4dDogbnVsbCxcbiAgICAgIGNvbG9yOiBCYWRnZUNvbG9yLm5vbmUsXG4gICAgICBpY29uOiBCYWRnZUljb24ucG9tb2Rvcm9Xb3JraW5nVGltZSxcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICB0YXJnZXQgPSBpc1RhcmdldFBlcmlvZChQZXJpb2QucmVzdCk7XG4gICAgaWYgKHRhcmdldC5pc1RhcmdldFBlcmlvZCkge1xuICAgICAgYXdhaXQgdXNlQmFkZ2Uoe1xuICAgICAgICB0YWJJZDogYWN0aXZlVGFiWzBdLmlkLFxuICAgICAgICB0ZXh0OiBudWxsLFxuICAgICAgICBjb2xvcjogQmFkZ2VDb2xvci5ub25lLFxuICAgICAgICBpY29uOiBCYWRnZUljb24ucG9tb2Rvcm9SZXN0VGltZSxcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIGlmICh0YXJnZXQuaXNUYXJnZXRQZXJpb2RGaW5pc2hlZE5vdykgYXdhaXQgcGxheSh0YXJnZXQucGVyaW9kKTtcblxuICByZXR1cm4ge1xuICAgIGlzV29yayxcbiAgfTtcbn1cbiIsIjx0ZW1wbGF0ZT5cbiAgPGRpdiBjbGFzcz1cInBvbW9kb3JvLXBvcHVwLWJsb2NrXCIgdi1pZj1cImlzRW5hYmxlZFwiPlxuICAgIDxwPnt7IHQoJ3BvbW9kb3JvSXNFbmFibGVkLm1lc3NhZ2UnKSB9fTwvcD5cbiAgICA8c3BhbiB2LWlmPVwiaXNXb3JraW5nVGltZVwiPnt7IHQoJ3BvbW9kb3JvV29yay5tZXNzYWdlJykgfX08L3NwYW4+XG4gICAgPHNwYW4gdi1pZj1cIiFpc1dvcmtpbmdUaW1lXCI+e3sgdCgncG9tb2Rvcm9SZXN0Lm1lc3NhZ2UnKSB9fTwvc3Bhbj5cbiAgICA8aW5wdXRcbiAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgOnZhbHVlPVwidCgncG9tb2Rvcm9TZXR0aW5ncy5tZXNzYWdlJylcIlxuICAgICAgQGNsaWNrPVwib3BlblBhZ2UoU2V0dGluZ3NUYWIuUG9tb2Rvcm8pXCJcbiAgICAvPlxuICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQgbGFuZz1cInRzXCI+XG5leHBvcnQgZGVmYXVsdCB7XG4gIG5hbWU6ICdQb21vZG9yb0luZm8nLFxufTtcbjwvc2NyaXB0PlxuXG48c2NyaXB0IGxhbmc9XCJ0c1wiIHNldHVwPlxuaW1wb3J0IHsgb25Nb3VudGVkLCByZWYgfSBmcm9tICd2dWUnO1xuaW1wb3J0IHsgU3RvcmFnZVBhcmFtcywgSVNfUE9NT0RPUk9fRU5BQkxFRF9ERUZBVUxUIH0gZnJvbSAnLi4vc3RvcmFnZS9zdG9yYWdlLXBhcmFtcyc7XG5pbXBvcnQgeyB1c2VJMThuIH0gZnJvbSAndnVlLWkxOG4nO1xuaW1wb3J0IHsgaW5qZWN0U3RvcmFnZSB9IGZyb20gJy4uL3N0b3JhZ2UvaW5qZWN0LXN0b3JhZ2UnO1xuaW1wb3J0IHsgb3BlblBhZ2UgfSBmcm9tICcuLi91dGlscy9vcGVuLXBhZ2UnO1xuaW1wb3J0IHsgU2V0dGluZ3NUYWIgfSBmcm9tICcuLi91dGlscy9lbnVtcyc7XG5pbXBvcnQgeyBjaGVja1BvbW9kb3JvIH0gZnJvbSAnLi4vZnVuY3Rpb25zL3BvbW9kb3JvJztcblxuY29uc3QgeyB0IH0gPSB1c2VJMThuKCk7XG5jb25zdCBzZXR0aW5nc1N0b3JhZ2UgPSBpbmplY3RTdG9yYWdlKCk7XG5cbmNvbnN0IGlzRW5hYmxlZCA9IHJlZjxib29sZWFuPigpO1xuY29uc3QgaXNXb3JraW5nVGltZSA9IHJlZjxib29sZWFuPigpO1xuXG5vbk1vdW50ZWQoYXN5bmMgKCkgPT4ge1xuICBpc0VuYWJsZWQudmFsdWUgPSBhd2FpdCBzZXR0aW5nc1N0b3JhZ2UuZ2V0VmFsdWUoXG4gICAgU3RvcmFnZVBhcmFtcy5JU19QT01PRE9ST19FTkFCTEVELFxuICAgIElTX1BPTU9ET1JPX0VOQUJMRURfREVGQVVMVCxcbiAgKTtcblxuICBpc1dvcmtpbmdUaW1lLnZhbHVlID0gKGF3YWl0IGNoZWNrUG9tb2Rvcm8oKSk/LmlzV29yaztcbn0pO1xuPC9zY3JpcHQ+XG5cbjxzdHlsZSBzY29wZWQ+XG4ucG9tb2Rvcm8tcG9wdXAtYmxvY2sge1xuICB3aWR0aDogLXdlYmtpdC1maWxsLWF2YWlsYWJsZTtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBib3R0b206IDA7XG4gIHBhZGRpbmc6IDhweCAxMHB4O1xuICBmb250LXNpemU6IDE0cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlZmVmZWY7XG59XG4ucG9tb2Rvcm8tcG9wdXAtYmxvY2sgcCB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWFyZ2luOiA4cHg7XG4gIGZvbnQtc2l6ZTogMTdweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cbi5wb21vZG9yby1wb3B1cC1ibG9jayBzcGFuIHtcbiAgcGFkZGluZzogNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTA1LCAyMDIsIDEwNSk7XG4gIGNvbG9yOiBibGFjaztcbiAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBmb250LXNpemU6IDEzcHg7XG59XG4ucG9tb2Rvcm8tcG9wdXAtYmxvY2sgaW5wdXRbdHlwZT0nYnV0dG9uJ10ge1xuICBmbG9hdDogcmlnaHQ7XG59XG48L3N0eWxlPlxuIiwiPHRlbXBsYXRlPlxuICA8ZGl2IGNsYXNzPVwiaGVhZGVyQmxvY2tcIj5cbiAgICA8ZGl2IGNsYXNzPVwiZC1pbmxpbmUtYmxvY2tcIj5cbiAgICAgIDxpbWcgY2xhc3M9XCJsb2dvXCIgaGVpZ2h0PVwiMzBcIiBzcmM9XCIuLi9hc3NldHMvaWNvbnMvNDh4NDgucG5nXCIgLz5cbiAgICAgIDxwIGNsYXNzPVwiaGVhZGVyXCI+V2ViIEFjdGl2aXR5IFRpbWUgVHJhY2tlcjwvcD5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwiaWNvbnMtYmxvY2tcIj5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxpbWdcbiAgICAgICAgICBjbGFzcz1cImRhcmstbW9kZS1pY29uXCJcbiAgICAgICAgICBoZWlnaHQ9XCIyNVwiXG4gICAgICAgICAgc3JjPVwiLi4vYXNzZXRzL2ljb25zL2xpZ2h0LW1vZGUuc3ZnXCJcbiAgICAgICAgICB0aXRsZT1cIkRpc2FibGUgRGFyayBNb2RlXCJcbiAgICAgICAgICB2LWlmPVwiZGFya01vZGUgPT0gdHJ1ZVwiXG4gICAgICAgICAgQGNsaWNrPVwiY2hhbmdlRGFya01vZGUoZmFsc2UpXCJcbiAgICAgICAgLz5cbiAgICAgICAgPGltZ1xuICAgICAgICAgIGNsYXNzPVwiZGFyay1tb2RlLWljb25cIlxuICAgICAgICAgIHRpdGxlPVwiRW5hYmxlIERhcmsgTW9kZVwiXG4gICAgICAgICAgaGVpZ2h0PVwiMjVcIlxuICAgICAgICAgIHNyYz1cIi4uL2Fzc2V0cy9pY29ucy9kYXJrLW1vZGUuc3ZnXCJcbiAgICAgICAgICB2LWlmPVwiZGFya01vZGUgPT0gZmFsc2VcIlxuICAgICAgICAgIEBjbGljaz1cImNoYW5nZURhcmtNb2RlKHRydWUpXCJcbiAgICAgICAgLz5cblxuICAgICAgICA8YSBAY2xpY2s9XCJvcGVuUGFnZShTZXR0aW5nc1RhYi5Qb21vZG9ybylcIlxuICAgICAgICAgID57eyB0KCdwb21vZG9yb01vZGUubWVzc2FnZScpIH19PGltZyBzcmM9XCIuLi9hc3NldHMvaWNvbnMvcG9tb2Rvcm8uc3ZnXCIgaGVpZ2h0PVwiMjJcIlxuICAgICAgICAvPjwvYT5cbiAgICAgICAgPGEgY2xhc3M9XCJmaWx0ZXJcIiBAY2xpY2s9XCJvcGVuUGFnZShTZXR0aW5nc1RhYi5EYXNoYm9hcmQpXCJcbiAgICAgICAgICA+e3sgdCgnZGFzaGJvYXJkLm1lc3NhZ2UnKSB9fTxpbWcgaGVpZ2h0PVwiMjJcIiBzcmM9XCIuLi9hc3NldHMvaWNvbnMvZGFzaGJvYXJkLnN2Z1wiXG4gICAgICAgIC8+PC9hPlxuICAgICAgICA8YSBjbGFzcz1cImZpbHRlclwiIEBjbGljaz1cIm9wZW5QYWdlKFNldHRpbmdzVGFiLkdlbmVyYWxTZXR0aW5ncylcIlxuICAgICAgICAgID57eyB0KCdzZXR0aW5ncy5tZXNzYWdlJykgfX08aW1nIGhlaWdodD1cIjIyXCIgc3JjPVwiLi4vYXNzZXRzL2ljb25zL3NldHRpbmdzLnN2Z1wiXG4gICAgICAgIC8+PC9hPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuICA8ZGl2IGNsYXNzPVwidGFic1wiPlxuICAgIDxpbnB1dFxuICAgICAgdHlwZT1cInJhZGlvXCJcbiAgICAgIGlkPVwidG9kYXlUYWJcIlxuICAgICAgbmFtZT1cInRhYi1jb250cm9sXCJcbiAgICAgIGNoZWNrZWRcbiAgICAgIHYtb246Y2hhbmdlPVwic2VsZWN0VGFiKFR5cGVPZkxpc3QuVG9kYXkpXCJcbiAgICAvPlxuICAgIDxpbnB1dFxuICAgICAgdHlwZT1cInJhZGlvXCJcbiAgICAgIGlkPVwiYWxsVGltZVRhYlwiXG4gICAgICBuYW1lPVwidGFiLWNvbnRyb2xcIlxuICAgICAgdi1vbjpjaGFuZ2U9XCJzZWxlY3RUYWIoVHlwZU9mTGlzdC5BbGwpXCJcbiAgICAvPlxuICAgIDxpbnB1dFxuICAgICAgdHlwZT1cInJhZGlvXCJcbiAgICAgIGlkPVwiYnlEYXlzVGFiXCJcbiAgICAgIG5hbWU9XCJ0YWItY29udHJvbFwiXG4gICAgICB2LW9uOmNoYW5nZT1cInNlbGVjdFRhYihUeXBlT2ZMaXN0LkJ5RGF5cylcIlxuICAgIC8+XG4gICAgPHVsPlxuICAgICAgPGxpIHRpdGxlPVwiVG9kYXlcIj5cbiAgICAgICAgPGxhYmVsIGZvcj1cInRvZGF5VGFiXCIgcm9sZT1cImJ1dHRvblwiXG4gICAgICAgICAgPjxzcGFuPnt7IHQoJ3RvZGF5Lm1lc3NhZ2UnKSB9fTwvc3Bhbj48L2xhYmVsXG4gICAgICAgID5cbiAgICAgIDwvbGk+XG4gICAgICA8bGkgdGl0bGU9XCJBbGwgVGhlIFRpbWVcIj5cbiAgICAgICAgPGxhYmVsIGZvcj1cImFsbFRpbWVUYWJcIiByb2xlPVwiYnV0dG9uXCJcbiAgICAgICAgICA+PHNwYW4+e3sgdCgnYWxsVGltZS5tZXNzYWdlJykgfX08L3NwYW4+PC9sYWJlbFxuICAgICAgICA+XG4gICAgICA8L2xpPlxuICAgICAgPGxpIHRpdGxlPVwiQnkgRGF5c1wiPlxuICAgICAgICA8bGFiZWwgZm9yPVwiYnlEYXlzVGFiXCIgcm9sZT1cImJ1dHRvblwiXG4gICAgICAgICAgPjxzcGFuPnt7IHQoJ2J5RGF5cy5tZXNzYWdlJykgfX08L3NwYW4+PC9sYWJlbFxuICAgICAgICA+XG4gICAgICA8L2xpPlxuICAgIDwvdWw+XG5cbiAgICA8ZGl2IGNsYXNzPVwic2xpZGVyXCI+PGRpdiBjbGFzcz1cImluZGljYXRvclwiPjwvZGl2PjwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJjb250ZW50XCI+XG4gICAgICA8c2VjdGlvbiBpZD1cInRvZGF5VGFiTGlzdFwiPlxuICAgICAgICA8VGFiTGlzdFxuICAgICAgICAgIHYtaWY9XCJhY3RpdmVUYWIgPT0gVHlwZU9mTGlzdC5Ub2RheVwiXG4gICAgICAgICAgOnR5cGU9XCJUeXBlT2ZMaXN0LlRvZGF5XCJcbiAgICAgICAgICA6c2hvd0FsbFN0YXRzPVwiZmFsc2VcIlxuICAgICAgICAvPlxuICAgICAgPC9zZWN0aW9uPlxuICAgICAgPHNlY3Rpb24gaWQ9XCJzdW1tYXJ5XCI+XG4gICAgICAgIDxUYWJMaXN0IHYtaWY9XCJhY3RpdmVUYWIgPT0gVHlwZU9mTGlzdC5BbGxcIiA6dHlwZT1cIlR5cGVPZkxpc3QuQWxsXCIgOnNob3dBbGxTdGF0cz1cInRydWVcIiAvPlxuICAgICAgPC9zZWN0aW9uPlxuICAgICAgPHNlY3Rpb24gaWQ9XCJieURheXNUYWJMaXN0XCI+XG4gICAgICAgIDxCeURheXMgdi1pZj1cImFjdGl2ZVRhYiA9PSBUeXBlT2ZMaXN0LkJ5RGF5c1wiIC8+XG4gICAgICA8L3NlY3Rpb24+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuICA8UG9tb2Rvcm9JbmZvIC8+XG4gIDxSZXZpZXcgLz5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQgbGFuZz1cInRzXCIgc2V0dXA+XG5pbXBvcnQgeyBvbk1vdW50ZWQsIHJlZiB9IGZyb20gJ3Z1ZSc7XG5pbXBvcnQgeyB1c2VJMThuIH0gZnJvbSAndnVlLWkxOG4nO1xuaW1wb3J0IFRhYkxpc3QgZnJvbSAnLi4vY29tcG9uZW50cy9UYWJMaXN0LnZ1ZSc7XG5pbXBvcnQgQnlEYXlzIGZyb20gJy4uL2NvbXBvbmVudHMvQnlEYXlzLnZ1ZSc7XG5pbXBvcnQgUmV2aWV3IGZyb20gJy4uL2NvbXBvbmVudHMvUmV2aWV3LnZ1ZSc7XG5pbXBvcnQgUG9tb2Rvcm9JbmZvIGZyb20gJy4uL2NvbXBvbmVudHMvUG9tb2Rvcm9JbmZvLnZ1ZSc7XG5pbXBvcnQgeyBvcGVuUGFnZSB9IGZyb20gJy4uL3V0aWxzL29wZW4tcGFnZSc7XG5pbXBvcnQgeyBTZXR0aW5nc1RhYiwgVHlwZU9mTGlzdCB9IGZyb20gJy4uL3V0aWxzL2VudW1zJztcbmltcG9ydCB7IGluamVjdFN0b3JhZ2UgfSBmcm9tICcuLi9zdG9yYWdlL2luamVjdC1zdG9yYWdlJztcbmltcG9ydCB7IERBUktfTU9ERV9ERUZBVUxULCBTdG9yYWdlUGFyYW1zIH0gZnJvbSAnLi4vc3RvcmFnZS9zdG9yYWdlLXBhcmFtcyc7XG5pbXBvcnQgeyBhcHBseURhcmtNb2RlIH0gZnJvbSAnLi4vdXRpbHMvZGFyay1tb2RlJztcblxuY29uc3QgeyB0IH0gPSB1c2VJMThuKCk7XG5jb25zdCBzZXR0aW5nc1N0b3JhZ2UgPSBpbmplY3RTdG9yYWdlKCk7XG5cbmNvbnN0IGFjdGl2ZVRhYiA9IHJlZjxUeXBlT2ZMaXN0PigpO1xuY29uc3QgZGFya01vZGUgPSByZWY8Ym9vbGVhbj4oKTtcblxub25Nb3VudGVkKGFzeW5jICgpID0+IHtcbiAgYWN0aXZlVGFiLnZhbHVlID0gVHlwZU9mTGlzdC5Ub2RheTtcbiAgZGFya01vZGUudmFsdWUgPSBhd2FpdCBzZXR0aW5nc1N0b3JhZ2UuZ2V0VmFsdWUoU3RvcmFnZVBhcmFtcy5EQVJLX01PREUsIERBUktfTU9ERV9ERUZBVUxUKTtcbiAgaWYgKGRhcmtNb2RlLnZhbHVlKSBhcHBseURhcmtNb2RlKGRhcmtNb2RlLnZhbHVlKTtcbn0pO1xuXG5mdW5jdGlvbiBzZWxlY3RUYWIodHlwZTogVHlwZU9mTGlzdCkge1xuICBhY3RpdmVUYWIudmFsdWUgPSB0eXBlO1xufVxuXG5hc3luYyBmdW5jdGlvbiBjaGFuZ2VEYXJrTW9kZSh2YWx1ZTogYm9vbGVhbikge1xuICBhd2FpdCBzZXR0aW5nc1N0b3JhZ2Uuc2F2ZVZhbHVlKFN0b3JhZ2VQYXJhbXMuREFSS19NT0RFLCB2YWx1ZSk7XG4gIGRhcmtNb2RlLnZhbHVlID0gdmFsdWU7XG4gIGFwcGx5RGFya01vZGUodmFsdWUpO1xuICB1cGRhdGVUYWIoKTtcbn1cblxuZnVuY3Rpb24gdXBkYXRlVGFiKCkge1xuICBjb25zdCB0ZW1wVmFsdWUgPSBhY3RpdmVUYWIudmFsdWU7XG4gIGFjdGl2ZVRhYi52YWx1ZSA9IHVuZGVmaW5lZDtcbiAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgYWN0aXZlVGFiLnZhbHVlID0gdGVtcFZhbHVlO1xuICB9LCA1MCk7XG59XG48L3NjcmlwdD5cblxuPHN0eWxlIHNjb3BlZD5cbi5oZWFkZXJCbG9jayB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cbi5oZWFkZXJCbG9jayAuaGVhZGVyIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBwYWRkaW5nOiAwIDAgMCA1cHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY29sb3I6ICM0YTRhNGE7XG4gIHZlcnRpY2FsLWFsaWduOiB0ZXh0LWJvdHRvbTtcbn1cblxuLmhlYWRlckJsb2NrIGltZyB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgcGFkZGluZzogMTBweDtcbn1cbi5oZWFkZXJCbG9jayAubG9nbyB7XG4gIG1hcmdpbi1sZWZ0OiA3cHg7XG59XG4uaGVhZGVyQmxvY2sgLmljb25zLWJsb2NrIHtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBtYXJnaW46IDdweCAwIDAgMDtcbn1cblxuLmhlYWRlckJsb2NrIC5pY29ucy1ibG9jayBhOmhvdmVyIHtcbiAgZmlsdGVyOiBpbnZlcnQoNDAlKSBzZXBpYSg5NCUpIHNhdHVyYXRlKDMzNzElKSBodWUtcm90YXRlKDIyN2RlZykgYnJpZ2h0bmVzcyg5OSUpIGNvbnRyYXN0KDkyJSk7XG59XG5cbi5oZWFkZXJCbG9jayAuaWNvbnMtYmxvY2sgYSB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBmb250LXdlaWdodDogNjAwO1xufVxuXG4uaGVhZGVyQmxvY2sgLmljb25zLWJsb2NrIGEgaW1nIHtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgcGFkZGluZy1sZWZ0OiA1cHggIWltcG9ydGFudDtcbn1cbi5oZWFkZXJCbG9jayAuaWNvbnMtYmxvY2sgLmRhcmstbW9kZS1pY29uIHtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cblxuLmhlYWRlckJsb2NrIC5pY29ucy1ibG9jayAuZG9uYXRlLWltZyB7XG4gIHBhZGRpbmctdG9wOiAwO1xuICBwYWRkaW5nLWJvdHRvbTogMDtcbn1cbjwvc3R5bGU+XG4iLCJpbXBvcnQgUG9wdXAgZnJvbSAnLi9wYWdlcy9Qb3B1cC52dWUnO1xuaW1wb3J0IFZ1ZURhdGVQaWNrZXIgZnJvbSAnQHZ1ZXBpYy92dWUtZGF0ZXBpY2tlcic7XG5pbXBvcnQgJ0B2dWVwaWMvdnVlLWRhdGVwaWNrZXIvZGlzdC9tYWluLmNzcyc7XG5pbXBvcnQgeyBjcmVhdGVBcHAgfSBmcm9tICd2dWUnO1xuaW1wb3J0IGkxOG4gZnJvbSAnLi9wbHVnaW5zL2kxOG4nO1xuXG5jb25zdCBhcHAgPSBjcmVhdGVBcHAoUG9wdXApO1xuYXBwLmNvbXBvbmVudCgnVnVlRGF0ZVBpY2tlcicsIFZ1ZURhdGVQaWNrZXIpO1xuYXBwLnVzZShpMThuKTtcbmFwcC5tb3VudCgnYm9keScpO1xuIl0sIm5hbWVzIjpbIl9fZGVmYXVsdF9fIiwiX29wZW5CbG9jayIsIl9jcmVhdGVFbGVtZW50QmxvY2siLCJfaG9pc3RlZF8xIiwiX2NyZWF0ZUVsZW1lbnRWTm9kZSIsIl9ub3JtYWxpemVDbGFzcyIsIl9ob2lzdGVkXzIiLCJfaG9pc3RlZF8zIiwiX2NyZWF0ZVRleHRWTm9kZSIsIl90b0Rpc3BsYXlTdHJpbmciLCJfdW5yZWYiLCJfY3JlYXRlVk5vZGUiLCJfVHJhbnNpdGlvbiIsIl93aXRoRGlyZWN0aXZlcyIsIl9ob2lzdGVkXzQiLCJfcmVuZGVyU2xvdCIsIl9jcmVhdGVCbG9jayIsIk5vRGF0YUJ5RGF5cyIsIl9ob2lzdGVkXzUiLCJfaG9pc3RlZF82IiwiX2hvaXN0ZWRfNyIsIl9ob2lzdGVkXzgiLCJfaG9pc3RlZF8xMCIsIl9ob2lzdGVkXzExIiwiX2hvaXN0ZWRfMTIiLCJfRnJhZ21lbnQiLCJfcmVuZGVyTGlzdCIsIl9hIiwiaSIsIl9pbXBvcnRzXzAiLCJQZXJpb2QiLCJpc1RhcmdldFBlcmlvZCIsIl9pbXBvcnRzXzMiLCJWdWVEYXRlUGlja2VyIl0sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE1BQWUsYUFBQTtBQ0FmLE1BQWUsYUFBQTtBQ0FmLE1BQWUsYUFBQTtBQ0FmLE1BQWUsYUFBQTtBQ3FCQSxTQUFTLFdBQVcsV0FBVyxhQUFhO0FBQ3pELGVBQWEsR0FBRyxTQUFTO0FBQ3pCLE1BQUksU0FBUyxVQUFVLFdBQVc7QUFDbEMsU0FBTyxnQkFBZ0IsV0FBVyxTQUFTLEdBQUk7QUFDakQ7Ozs7O0FDR0EsTUFBZUEsZ0JBQUE7QUFBQSxFQUNiLE1BQU07QUFDUjs7Ozs7Ozs7QUFZQSxVQUFNLE9BQU87O0FBekNYLGFBQUFDLFVBQUEsR0FBQUMsbUJBdUJNLE9BdkJOQyxjQXVCTTtBQUFBLFFBdEJKQyxnQkFnQk0sT0FBQTtBQUFBLFVBaEJELE9BQUtDLGVBQUEsQ0FBQyxvQkFBaUQsS0FBSSxRQUFBLFdBQUEsY0FBQSxDQUFBO0FBQUEsVUFBakMsU0FBSyxPQUFBLENBQUEsTUFBQSxPQUFBLENBQUEsSUFBQSxDQUFBLFdBQUUsS0FBSSxR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
