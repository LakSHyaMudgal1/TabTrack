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
const Expander_vue_vue_type_style_index_0_scoped_ce550e5a_lang = "";
const Expander = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__scopeId", "data-v-ce550e5a"]]);
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
const ByDays_vue_vue_type_style_index_0_scoped_669b93d9_lang = "";
const ByDays = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-669b93d9"]]);
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
const Review_vue_vue_type_style_index_0_scoped_a1376d2d_lang = "";
const Review = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-a1376d2d"]]);
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
const PomodoroInfo_vue_vue_type_style_index_0_scoped_588fc8aa_lang = "";
const PomodoroInfo = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-588fc8aa"]]);
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
            createBaseVNode("p", { class: "header" }, "TabTrackr")
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
const Popup_vue_vue_type_style_index_0_scoped_e741d025_lang = "";
const Popup = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-e741d025"]]);
const app = createApp(Popup);
app.component("VueDatePicker", oa);
app.use(i18n);
app.mount("body");
const main = "";
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9wdXAuanMiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hc3NldHMvaWNvbnMvbGlnaHQtbW9kZS5zdmciLCIuLi8uLi9zcmMvYXNzZXRzL2ljb25zL2RhcmstbW9kZS5zdmciLCIuLi8uLi9zcmMvYXNzZXRzL2ljb25zL2Rhc2hib2FyZC5zdmciLCIuLi8uLi9zcmMvYXNzZXRzL2ljb25zL3NldHRpbmdzLnN2ZyIsIi4uLy4uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vYWRkU2Vjb25kcy9pbmRleC5qcyIsIi4uLy4uL3NyYy9jb21wb25lbnRzL0V4cGFuZGVyLnZ1ZSIsIi4uLy4uL3NyYy9jb21wb25lbnRzL0J5RGF5cy52dWUiLCIuLi8uLi9zcmMvY29tcG9uZW50cy9SZXZpZXcudnVlIiwiLi4vLi4vc3JjL29mZnNjcmVlbi9pbmRleC50cyIsIi4uLy4uL3NyYy9mdW5jdGlvbnMvcG9tb2Rvcm8udHMiLCIuLi8uLi9zcmMvY29tcG9uZW50cy9Qb21vZG9yb0luZm8udnVlIiwiLi4vLi4vc3JjL3BhZ2VzL1BvcHVwLnZ1ZSIsIi4uLy4uL3NyYy9wb3B1cC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBcIl9fVklURV9BU1NFVF9fZWNlYjUzMWZfX1wiIiwiZXhwb3J0IGRlZmF1bHQgXCJfX1ZJVEVfQVNTRVRfX2IzOTI0YWQ4X19cIiIsImV4cG9ydCBkZWZhdWx0IFwiX19WSVRFX0FTU0VUX184YTM2ZDg0NF9fXCIiLCJleHBvcnQgZGVmYXVsdCBcIl9fVklURV9BU1NFVF9fODYyY2VlNGNfX1wiIiwiaW1wb3J0IHRvSW50ZWdlciBmcm9tIFwiLi4vX2xpYi90b0ludGVnZXIvaW5kZXguanNcIjtcbmltcG9ydCBhZGRNaWxsaXNlY29uZHMgZnJvbSBcIi4uL2FkZE1pbGxpc2Vjb25kcy9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgYWRkU2Vjb25kc1xuICogQGNhdGVnb3J5IFNlY29uZCBIZWxwZXJzXG4gKiBAc3VtbWFyeSBBZGQgdGhlIHNwZWNpZmllZCBudW1iZXIgb2Ygc2Vjb25kcyB0byB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIEFkZCB0aGUgc3BlY2lmaWVkIG51bWJlciBvZiBzZWNvbmRzIHRvIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGUgLSB0aGUgZGF0ZSB0byBiZSBjaGFuZ2VkXG4gKiBAcGFyYW0ge051bWJlcn0gYW1vdW50IC0gdGhlIGFtb3VudCBvZiBzZWNvbmRzIHRvIGJlIGFkZGVkLiBQb3NpdGl2ZSBkZWNpbWFscyB3aWxsIGJlIHJvdW5kZWQgdXNpbmcgYE1hdGguZmxvb3JgLCBkZWNpbWFscyBsZXNzIHRoYW4gemVybyB3aWxsIGJlIHJvdW5kZWQgdXNpbmcgYE1hdGguY2VpbGAuXG4gKiBAcmV0dXJucyB7RGF0ZX0gdGhlIG5ldyBkYXRlIHdpdGggdGhlIHNlY29uZHMgYWRkZWRcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMiBhcmd1bWVudHMgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQWRkIDMwIHNlY29uZHMgdG8gMTAgSnVseSAyMDE0IDEyOjQ1OjAwOlxuICogY29uc3QgcmVzdWx0ID0gYWRkU2Vjb25kcyhuZXcgRGF0ZSgyMDE0LCA2LCAxMCwgMTIsIDQ1LCAwKSwgMzApXG4gKiAvLz0+IFRodSBKdWwgMTAgMjAxNCAxMjo0NTozMFxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhZGRTZWNvbmRzKGRpcnR5RGF0ZSwgZGlydHlBbW91bnQpIHtcbiAgcmVxdWlyZWRBcmdzKDIsIGFyZ3VtZW50cyk7XG4gIHZhciBhbW91bnQgPSB0b0ludGVnZXIoZGlydHlBbW91bnQpO1xuICByZXR1cm4gYWRkTWlsbGlzZWNvbmRzKGRpcnR5RGF0ZSwgYW1vdW50ICogMTAwMCk7XG59IiwiPHRlbXBsYXRlPlxyXG4gIDxkaXYgY2xhc3M9XCJleHBhbmRlclwiPlxyXG4gICAgPGRpdiBjbGFzcz1cImV4cGFuZGVyLXRyaWdnZXJcIiBAY2xpY2s9XCJvcGVuID0gIW9wZW5cIiA6Y2xhc3M9XCJvcGVuID8gJ2FjdGl2ZScgOiAnYmVmb3JlQm9yZGVyJ1wiPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiZC1pbmxpbmUtYmxvY2tcIj5cclxuICAgICAgICA8c3ZnXHJcbiAgICAgICAgICBjbGFzcz1cImV4cGFuZGVyLXRyaWdnZXItSWNvblwiXHJcbiAgICAgICAgICA6Y2xhc3M9XCJ7IG9wZW46IG9wZW4gfVwiXHJcbiAgICAgICAgICB3aWR0aD1cIjQwXCJcclxuICAgICAgICAgIGhlaWdodD1cIjEyXCJcclxuICAgICAgICAgIHN0cm9rZT1cImNvcm5mbG93ZXJibHVlXCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICA8cG9seWxpbmUgcG9pbnRzPVwiMTIsMiAyMCwxMCAyOCwyXCIgc3Ryb2tlLXdpZHRoPVwiM1wiIGZpbGw9XCJub25lXCI+PC9wb2x5bGluZT5cclxuICAgICAgICA8L3N2Zz5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJoZWFkZXJcIj5cclxuICAgICAgICB7eyBkYXkgfX1cclxuICAgICAgICA8c3Bhbj57eyBjb252ZXJ0U3VtbWFyeVRpbWVUb1N0cmluZyh0aW1lKSB9fTwvc3Bhbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICAgIDx0cmFuc2l0aW9uIG5hbWU9XCJsZWZ0VG9SaWdodFwiPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiZXhwYW5kZXItYm9keVwiIHYtc2hvdz1cIm9wZW5cIj5cclxuICAgICAgICA8c2xvdD48L3Nsb3Q+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC90cmFuc2l0aW9uPlxyXG4gIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdCBsYW5nPVwidHNcIj5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gIG5hbWU6ICdFeHBhbmRlcicsXHJcbn07XHJcbjwvc2NyaXB0PlxyXG5cclxuPHNjcmlwdCBsYW5nPVwidHNcIiBzZXR1cD5cclxuaW1wb3J0IHsgcmVmIH0gZnJvbSAndnVlJztcclxuaW1wb3J0IHsgY29udmVydFN1bW1hcnlUaW1lVG9TdHJpbmcgfSBmcm9tICcuLi91dGlscy9jb252ZXJ0ZXInO1xyXG5cclxuY29uc3QgcHJvcHMgPSBkZWZpbmVQcm9wczx7XHJcbiAgZGF5OiBzdHJpbmc7XHJcbiAgdGltZTogbnVtYmVyO1xyXG59PigpO1xyXG5cclxuY29uc3Qgb3BlbiA9IHJlZjxib29sZWFuPigpO1xyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZSBzY29wZWQ+XHJcbi5oZWFkZXIge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICB3aWR0aDogOTAlO1xyXG59XHJcbi5oZWFkZXIgc3BhbiB7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICBmb250LXNpemU6IDEzcHg7XHJcbiAgY29sb3I6IHJnYig1OSwgNTksIDU5KTtcclxuICBmbG9hdDogcmlnaHQ7XHJcbn1cclxuLmV4cGFuZGVyLXRyaWdnZXIge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBwYWRkaW5nOiAwLjdyZW0gMC41cmVtO1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZWZlZmVmO1xyXG59XHJcbi5leHBhbmRlci10cmlnZ2VyOmhvdmVyIHtcclxuICBjb2xvcjogIzQ3N2RjYTtcclxufVxyXG4uZXhwYW5kZXItdHJpZ2dlci5hY3RpdmUge1xyXG4gIGJvcmRlci1ib3R0b20tY29sb3I6ICM0NzdkY2E7XHJcbn1cclxuLmV4cGFuZGVyLXRyaWdnZXItSWNvbiB7XHJcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMnMgY3ViaWMtYmV6aWVyKDAuMjMsIDEsIDAuMzIsIDEpO1xyXG59XHJcbi5leHBhbmRlci10cmlnZ2VyLUljb24ub3BlbiB7XHJcbiAgc3Ryb2tlOiAjZmY2MzQ3O1xyXG4gIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XHJcbn1cclxuLmV4cGFuZGVyLWJvZHkge1xyXG4gIHBhZGRpbmc6IDFweDtcclxuICBiYWNrZ3JvdW5kOiAjZWZmMGYyO1xyXG59XHJcbi5sZWZ0VG9SaWdodC1lbnRlci1hY3RpdmUge1xyXG4gIC13ZWJraXQtYW5pbWF0aW9uOiBsZWZ0VG9SaWdodCAwLjVzO1xyXG4gIGFuaW1hdGlvbjogbGVmdFRvUmlnaHQgMC41cztcclxufVxyXG4ubGVmdFRvUmlnaHQtbGVhdmUtYWN0aXZlIHtcclxuICBhbmltYXRpb246IGxlZnRUb1JpZ2h0IDAuNXMgcmV2ZXJzZTtcclxufVxyXG5ALXdlYmtpdC1rZXlmcmFtZXMgbGVmdFRvUmlnaHQge1xyXG4gIDAlIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwdncpO1xyXG4gIH1cclxuICA1MCUge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDJlbSk7XHJcbiAgfVxyXG4gIDEwMCUge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xyXG4gIH1cclxufVxyXG5Aa2V5ZnJhbWVzIGxlZnRUb1JpZ2h0IHtcclxuICAwJSB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMHZ3KTtcclxuICB9XHJcbiAgNTAlIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgyZW0pO1xyXG4gIH1cclxuICAxMDAlIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcclxuICB9XHJcbn1cclxuPC9zdHlsZT5cclxuIiwiPHRlbXBsYXRlPlxyXG4gIDxkaXYgY2xhc3M9XCJuby1kYXRhXCIgdi1pZj1cImlzTG9hZGluZ1wiPlxyXG4gICAgPGltZyBoZWlnaHQ9XCI1NVwiIHNyYz1cIi4uL2Fzc2V0cy9pY29ucy9wcmVsb2FkZXIuZ2lmXCIgLz5cclxuICA8L2Rpdj5cclxuXHJcbiAgPGRpdiB2LWVsc2U+XHJcbiAgICA8bm8tZGF0YS1ieS1kYXlzIHYtaWY9XCJjb3VudE9mRGF5cyA9PSB1bmRlZmluZWQgfHwgKGNvdW50T2ZEYXlzID09IDAgJiYgIW5vRGF0YSlcIiAvPlxyXG5cclxuICAgIDxkaXYgdi1lbHNlLWlmPVwibm9EYXRhXCI+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJuby1kYXRhXCI+XHJcbiAgICAgICAge3sgdCgnbm9EYXRhRm9yUGVyaW9kLm1lc3NhZ2UnKSB9fVxyXG4gICAgICAgIDxWdWVEYXRlUGlja2VyXHJcbiAgICAgICAgICByYW5nZVxyXG4gICAgICAgICAgOmVuYWJsZS10aW1lLXBpY2tlcj1cImZhbHNlXCJcclxuICAgICAgICAgIGNsYXNzPVwiZGF0ZS1waWNrZXJcIlxyXG4gICAgICAgICAgdi1tb2RlbD1cInNlbGVjdGVkRGF0ZVwiXHJcbiAgICAgICAgICA6cHJlc2V0LXJhbmdlcz1cInByZXNldFJhbmdlc1wiXHJcbiAgICAgICAgICBAdXBkYXRlOm1vZGVsLXZhbHVlPVwiaGFuZGxlRGF0ZVwiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPHRlbXBsYXRlICN5ZWFybHk9XCJ7IGxhYmVsLCByYW5nZSwgcHJlc2V0RGF0ZVJhbmdlIH1cIj5cclxuICAgICAgICAgICAgPHNwYW4gQGNsaWNrPVwicHJlc2V0RGF0ZVJhbmdlKHJhbmdlKVwiPnt7IGxhYmVsIH19PC9zcGFuPlxyXG4gICAgICAgICAgPC90ZW1wbGF0ZT5cclxuICAgICAgICA8L1Z1ZURhdGVQaWNrZXI+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcblxyXG4gICAgPGRpdiB2LWVsc2U+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJkYXRlLWJsb2NrXCI+XHJcbiAgICAgICAgPFZ1ZURhdGVQaWNrZXJcclxuICAgICAgICAgIHJhbmdlXHJcbiAgICAgICAgICA6ZW5hYmxlLXRpbWUtcGlja2VyPVwiZmFsc2VcIlxyXG4gICAgICAgICAgY2xhc3M9XCJkYXRlLXBpY2tlclwiXHJcbiAgICAgICAgICB2LW1vZGVsPVwic2VsZWN0ZWREYXRlXCJcclxuICAgICAgICAgIDpwcmVzZXQtcmFuZ2VzPVwicHJlc2V0UmFuZ2VzXCJcclxuICAgICAgICAgIEB1cGRhdGU6bW9kZWwtdmFsdWU9XCJoYW5kbGVEYXRlXCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICA8dGVtcGxhdGUgI3llYXJseT1cInsgbGFiZWwsIHJhbmdlLCBwcmVzZXREYXRlUmFuZ2UgfVwiPlxyXG4gICAgICAgICAgICA8c3BhbiBAY2xpY2s9XCJwcmVzZXREYXRlUmFuZ2UocmFuZ2UpXCI+e3sgbGFiZWwgfX08L3NwYW4+XHJcbiAgICAgICAgICA8L3RlbXBsYXRlPlxyXG4gICAgICAgIDwvVnVlRGF0ZVBpY2tlcj5cclxuICAgICAgICA8aW5wdXQgdHlwZT1cImJ1dHRvblwiIDp2YWx1ZT1cInQoJ2V4cG9ydFRvQ3N2Lm1lc3NhZ2UnKVwiIEBjbGljaz1cImV4cG9ydFRvQ3N2KClcIiAvPlxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIDxkaXYgY2xhc3M9XCJzdGF0cy1ibG9jayBibG9ja1wiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJoZWFkZXJcIj57eyB0KCdhdmVyYWdlVGltZUJ5RGF5cy5tZXNzYWdlJykgfX08L2Rpdj5cclxuICAgICAgICA8cD57eyBjb252ZXJ0U3VtbWFyeVRpbWVUb1N0cmluZyh0YWJzQnlEYXlzIS5hdmVyYWdlVGltZSkgfX08L3A+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPGRpdiBjbGFzcz1cIm1sLTIwIG1yLTIwIGJ5LWRheXMtY2hhcnRcIj5cclxuICAgICAgICA8QnlEYXlzQ2hhcnQgOmRhdGE9XCJ0YWJzQnlEYXlzIVwiIC8+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPGRpdj5cclxuICAgICAgICA8RXhwYW5kZXIgOmRheT1cInQoJ2FsbFRpbWUubWVzc2FnZScpXCIgOnRpbWU9XCJ0YWJzQnlEYXlzPy5zdW1tYXJ5VGltZSB8fCAwXCIgY2xhc3M9XCJ0b3RhbFwiPlxyXG4gICAgICAgICAgPFRhYkl0ZW1cclxuICAgICAgICAgICAgdi1mb3I9XCIodGFiLCBpKSBvZiBtZXJnZUFsbERheXModGFic0J5RGF5cz8uZGF5cylcIlxyXG4gICAgICAgICAgICA6aXRlbT1cInRhYlwiXHJcbiAgICAgICAgICAgIDpzdW1tYXJ5VGltZUZvcldob2xlRGF5PVwidGFic0J5RGF5cz8uc3VtbWFyeVRpbWUgfHwgMFwiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvRXhwYW5kZXI+XHJcblxyXG4gICAgICAgIDxFeHBhbmRlclxyXG4gICAgICAgICAgdi1mb3I9XCIodGFiRGF5LCBpKSBvZiB0YWJzQnlEYXlzPy5kYXlzXCJcclxuICAgICAgICAgIDprZXk9XCJpXCJcclxuICAgICAgICAgIDpkYXk9XCJ0YWJEYXkuZGF5XCJcclxuICAgICAgICAgIDp0aW1lPVwidGFiRGF5LnRpbWVcIlxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxUYWJJdGVtXHJcbiAgICAgICAgICAgIHYtZm9yPVwiKHRhYiwgaSkgb2YgdGFiRGF5LnRhYnNcIlxyXG4gICAgICAgICAgICA6a2V5PVwiaVwiXHJcbiAgICAgICAgICAgIDppdGVtPVwidGFiXCJcclxuICAgICAgICAgICAgOnN1bW1hcnlUaW1lRm9yV2hvbGVEYXk9XCJ0YWJEYXkudGltZVwiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvRXhwYW5kZXI+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0IGxhbmc9XCJ0c1wiPlxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgbmFtZTogJ1RhYkxpc3QnLFxyXG59O1xyXG48L3NjcmlwdD5cclxuXHJcbjxzY3JpcHQgbGFuZz1cInRzXCIgc2V0dXA+XHJcbmltcG9ydCB7IGNvbXB1dGVkLCBvbk1vdW50ZWQsIHJlZiB9IGZyb20gJ3Z1ZSc7XHJcbmltcG9ydCB7IHVzZUkxOG4gfSBmcm9tICd2dWUtaTE4bic7XHJcbmltcG9ydCBUYWJJdGVtIGZyb20gJy4uL2NvbXBvbmVudHMvVGFiSXRlbS52dWUnO1xyXG5pbXBvcnQgTm9EYXRhQnlEYXlzIGZyb20gJy4vTm9EYXRhQnlEYXlzLnZ1ZSc7XHJcbmltcG9ydCBCeURheXNDaGFydCBmcm9tICcuLi9jb21wb25lbnRzL0J5RGF5c0NoYXJ0LnZ1ZSc7XHJcbmltcG9ydCBFeHBhbmRlciBmcm9tICcuLi9jb21wb25lbnRzL0V4cGFuZGVyLnZ1ZSc7XHJcbmltcG9ydCB7IFRhYkxpc3RCeURheXMgfSBmcm9tICcuLi9kdG8vdGFiTGlzdFN1bW1hcnknO1xyXG5pbXBvcnQgeyBDdXJyZW50VGFiSXRlbSB9IGZyb20gJy4uL2R0by9jdXJyZW50VGFiSXRlbSc7XHJcbmltcG9ydCB7IHVzZVRhYkxpc3RCeURheXMgfSBmcm9tICcuLi9mdW5jdGlvbnMvdXNlVGFiTGlzdEJ5RGF5cyc7XHJcbmltcG9ydCB7IGNvbnZlcnRTdW1tYXJ5VGltZVRvU3RyaW5nIH0gZnJvbSAnLi4vdXRpbHMvY29udmVydGVyJztcclxuaW1wb3J0IHsgcmFuZ2VzLCBUaGlzV2Vla1JhbmdlIH0gZnJvbSAnLi4vdXRpbHMvZGF0ZSc7XHJcbmltcG9ydCB7IHVzZUltcG9ydFRvQ3N2V2l0aERhdGEgfSBmcm9tICcuLi9mdW5jdGlvbnMvdXNlSW1wb3J0VG9Dc3YnO1xyXG5pbXBvcnQgeyB1c2VGaWxlLCBGaWxlVHlwZSB9IGZyb20gJy4uL2Z1bmN0aW9ucy91c2VGaWxlJztcclxuXHJcbmNvbnN0IHsgdCB9ID0gdXNlSTE4bigpO1xyXG5cclxuY29uc3QgdGFic0J5RGF5cyA9IHJlZjxUYWJMaXN0QnlEYXlzPigpO1xyXG5jb25zdCBpc0xvYWRpbmcgPSByZWY8Ym9vbGVhbj4oKTtcclxuY29uc3Qgbm9EYXRhID0gcmVmPGJvb2xlYW4+KCk7XHJcbmNvbnN0IHNlbGVjdGVkRGF0ZSA9IHJlZjxEYXRlW10+KCk7XHJcblxyXG5jb25zdCBwcmVzZXRSYW5nZXMgPSByYW5nZXMoKTtcclxuXHJcbmNvbnN0IGNvdW50T2ZEYXlzID0gY29tcHV0ZWQoKCkgPT5cclxuICB0YWJzQnlEYXlzLnZhbHVlICE9IHVuZGVmaW5lZCA/IHRhYnNCeURheXMudmFsdWUuZGF5cy5sZW5ndGggOiAwLFxyXG4pO1xyXG5cclxuYXN5bmMgZnVuY3Rpb24gbG9hZExpc3QoZGF0ZUZyb206IERhdGUsIGRhdGVUbzogRGF0ZSkge1xyXG4gIGNvbnN0IHRhYkxpc3QgPSBhd2FpdCB1c2VUYWJMaXN0QnlEYXlzKGRhdGVGcm9tLCBkYXRlVG8pO1xyXG4gIGlmICh0YWJMaXN0ICE9IG51bGwpIHtcclxuICAgIHRhYnNCeURheXMudmFsdWUgPSB0YWJMaXN0O1xyXG4gICAgaWYgKHRhYkxpc3QuZGF5cy5sZW5ndGggPT0gMCAmJiB0YWJMaXN0LnN1bW1hcnlUaW1lID09IDApIG5vRGF0YS52YWx1ZSA9IHRydWU7XHJcbiAgICBlbHNlIG5vRGF0YS52YWx1ZSA9IGZhbHNlO1xyXG4gIH1cclxuICBpc0xvYWRpbmcudmFsdWUgPSBmYWxzZTtcclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gaGFuZGxlRGF0ZShtb2RlbERhdGE6IERhdGVbXSkge1xyXG4gIHNlbGVjdGVkRGF0ZS52YWx1ZSA9IG1vZGVsRGF0YTtcclxuICBjb25zdCBkYXRlRnJvbSA9IHNlbGVjdGVkRGF0ZS52YWx1ZT8uWzBdIGFzIERhdGU7XHJcbiAgY29uc3QgZGF0ZVRvID0gc2VsZWN0ZWREYXRlLnZhbHVlPy5bMV0gYXMgRGF0ZTtcclxuICBhd2FpdCBsb2FkTGlzdChkYXRlRnJvbSwgZGF0ZVRvKTtcclxufVxyXG5cclxub25Nb3VudGVkKGFzeW5jICgpID0+IHtcclxuICBpc0xvYWRpbmcudmFsdWUgPSB0cnVlO1xyXG4gIHNlbGVjdGVkRGF0ZS52YWx1ZSA9IFRoaXNXZWVrUmFuZ2U7XHJcbiAgY29uc3QgZGF0ZUZyb20gPSBzZWxlY3RlZERhdGUudmFsdWU/LlswXSBhcyBEYXRlO1xyXG4gIGNvbnN0IGRhdGVUbyA9IHNlbGVjdGVkRGF0ZS52YWx1ZT8uWzFdIGFzIERhdGU7XHJcbiAgYXdhaXQgbG9hZExpc3QoZGF0ZUZyb20sIGRhdGVUbyk7XHJcbn0pO1xyXG5cclxuYXN5bmMgZnVuY3Rpb24gZXhwb3J0VG9Dc3YoKSB7XHJcbiAgY29uc3QgZGF0ZUZyb20gPSBzZWxlY3RlZERhdGUudmFsdWU/LlswXSBhcyBEYXRlO1xyXG4gIGNvbnN0IGRhdGVUbyA9IHNlbGVjdGVkRGF0ZS52YWx1ZT8uWzFdIGFzIERhdGU7XHJcbiAgY29uc3QgY3N2ID0gYXdhaXQgdXNlSW1wb3J0VG9Dc3ZXaXRoRGF0YSh0YWJzQnlEYXlzLnZhbHVlPy5kYXlzKTtcclxuICB1c2VGaWxlKFxyXG4gICAgY3N2LFxyXG4gICAgRmlsZVR5cGUuQ1NWLFxyXG4gICAgYHdlYnNpdGVzXyR7ZGF0ZUZyb20udG9Mb2NhbGVEYXRlU3RyaW5nKCl9LSR7ZGF0ZVRvLnRvTG9jYWxlRGF0ZVN0cmluZygpfS5jc3ZgLFxyXG4gICk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG1lcmdlQWxsRGF5cyhkYXlzOiBUYWJMaXN0QnlEYXlzWydkYXlzJ10gfCB1bmRlZmluZWQpOiBDdXJyZW50VGFiSXRlbVtdIHtcclxuICBpZiAoIWRheXMpIHJldHVybiBbXTtcclxuXHJcbiAgY29uc3QgdXJsTWFwID0gbmV3IE1hcDxzdHJpbmcsIEN1cnJlbnRUYWJJdGVtPigpO1xyXG5cclxuICBmb3IgKGNvbnN0IGRheSBvZiBkYXlzKSB7XHJcbiAgICBmb3IgKGNvbnN0IHRhYiBvZiBkYXkudGFicykge1xyXG4gICAgICBpZiAoIXVybE1hcC5oYXModGFiLnVybCkpIHtcclxuICAgICAgICB1cmxNYXAuc2V0KHRhYi51cmwsIHsgLi4udGFiIH0pO1xyXG4gICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBjb25zdCBleGlzdGluZ1RhYiA9IHVybE1hcC5nZXQodGFiLnVybCkhO1xyXG4gICAgICBleGlzdGluZ1RhYi5zdW1tYXJ5VGltZSArPSB0YWIuc3VtbWFyeVRpbWU7XHJcbiAgICAgIGV4aXN0aW5nVGFiLnNlc3Npb25zICs9IHRhYi5zZXNzaW9ucztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJldHVybiBBcnJheS5mcm9tKHVybE1hcC52YWx1ZXMoKSkuc29ydCgoYSwgYikgPT4gYi5zdW1tYXJ5VGltZSAtIGEuc3VtbWFyeVRpbWUpO1xyXG59XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlIHNjb3BlZD5cclxuLnN0YXRzLWJsb2NrLmJsb2NrIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgbWFyZ2luOiAxMHB4IDI1cHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uc3RhdHMtYmxvY2suYmxvY2sgLmhlYWRlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcG9wdXAtaGVhZGVyKTtcclxuICBjb2xvcjogcmdiKDY2LCA2NiwgNjYpO1xyXG4gIHBhZGRpbmc6IDVweCA1cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG59XHJcblxyXG4uc3RhdHMtYmxvY2suYmxvY2sgcCB7XHJcbiAgbWFyZ2luOiAycHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgZm9udC1zaXplOiAxM3B4O1xyXG4gIGNvbG9yOiByZ2IoNTksIDU5LCA1OSk7XHJcbn1cclxuLmRhdGUtYmxvY2sge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIG1hcmdpbjogMCAyNXB4O1xyXG59XHJcbi5ieS1kYXlzLWNoYXJ0IHtcclxuICBoZWlnaHQ6IDI0MHB4O1xyXG59XHJcbi5leHBhbmRlci50b3RhbCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2UwZTRmZjtcclxufVxyXG48L3N0eWxlPlxyXG4iLCI8dGVtcGxhdGU+XHJcbiAgPGRpdiBjbGFzcz1cInJldmlldy1ibG9ja1wiIHYtaWY9XCJzaG93UmV2aWV3XCI+XHJcbiAgICA8cD57eyB0KCdlbmpveUFuZFJldmlldy5tZXNzYWdlJykgfX08L3A+XHJcbiAgICA8aW1nIGhlaWdodD1cIjE1XCIgc3JjPVwiLi4vYXNzZXRzL2ljb25zL2Nsb3NlLnN2Z1wiIEBjbGljaz1cImNsb3NlQmxvY2soKVwiIC8+XHJcbiAgICA8aW5wdXQgdHlwZT1cImJ1dHRvblwiIDp2YWx1ZT1cInQoJ2Vuam95QW5kUmV2aWV3LmRlc2NyaXB0aW9uJylcIiBAY2xpY2s9XCJvcGVuU3RvcmUoKVwiIC8+XHJcbiAgPC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0IGxhbmc9XCJ0c1wiPlxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgbmFtZTogJ1JldmlldycsXHJcbn07XHJcbjwvc2NyaXB0PlxyXG5cclxuPHNjcmlwdCBsYW5nPVwidHNcIiBzZXR1cD5cclxuaW1wb3J0IHsgb25Nb3VudGVkLCByZWYgfSBmcm9tICd2dWUnO1xyXG5pbXBvcnQgeyB1c2VJMThuIH0gZnJvbSAndnVlLWkxOG4nO1xyXG5pbXBvcnQgeyBpbmplY3RTdG9yYWdlIH0gZnJvbSAnLi4vc3RvcmFnZS9pbmplY3Qtc3RvcmFnZSc7XHJcbmltcG9ydCB7IFN0b3JhZ2VQYXJhbXMgfSBmcm9tICcuLi9zdG9yYWdlL3N0b3JhZ2UtcGFyYW1zJztcclxuaW1wb3J0IHsgYWRkRGF5cywgc3RhcnRPZlRvZGF5IH0gZnJvbSAnZGF0ZS1mbnMnO1xyXG5pbXBvcnQgeyBhZGRIb3VycyB9IGZyb20gJ2RhdGUtZm5zL2VzbSc7XHJcbmltcG9ydCB7IENIUk9NRV9TVE9SRV9SRVZJRVdfVVJMLCBFREdFX1NUT1JFX1JFVklFV19VUkwgfSBmcm9tICcuLi91dGlscy9jaHJvbWUtdXJsJztcclxuXHJcbmNvbnN0IHsgdCB9ID0gdXNlSTE4bigpO1xyXG5cclxuY29uc3Qgc2V0dGluZ3NTdG9yYWdlID0gaW5qZWN0U3RvcmFnZSgpO1xyXG5jb25zdCBQUk9NUFRfQVRfVElNRV9PRl9EQVkgPSAxMjtcclxuY29uc3QgQUREX0RBWVNfRklSU1QgPSAyO1xyXG5jb25zdCBBRERfREFZU19ORVhUID0gNTtcclxuXHJcbmNvbnN0IHNob3dSZXZpZXcgPSByZWY8Ym9vbGVhbj4oKTtcclxuXHJcbm9uTW91bnRlZChhc3luYyAoKSA9PiB7XHJcbiAgc2hvd1Jldmlldy52YWx1ZSA9IGZhbHNlO1xyXG4gIGNvbnN0IHJldmlld0RhdGUgPSBhd2FpdCBzZXR0aW5nc1N0b3JhZ2UuZ2V0VmFsdWUoU3RvcmFnZVBhcmFtcy5SRVZJRVdfREFURSk7XHJcblxyXG4gIGlmIChyZXZpZXdEYXRlID09IHVuZGVmaW5lZCkge1xyXG4gICAgbGV0IG5leHRUaW1lID0gYXdhaXQgc2V0dGluZ3NTdG9yYWdlLmdldFZhbHVlKFN0b3JhZ2VQYXJhbXMuUkVWSUVXX1BST01QVF9BVCk7XHJcbiAgICBpZiAobmV4dFRpbWUgPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIGF3YWl0IHNldHRpbmdzU3RvcmFnZS5zYXZlVmFsdWUoXHJcbiAgICAgICAgU3RvcmFnZVBhcmFtcy5SRVZJRVdfUFJPTVBUX0FULFxyXG4gICAgICAgIGFkZERheXMoYWRkSG91cnMoc3RhcnRPZlRvZGF5KCksIFBST01QVF9BVF9USU1FX09GX0RBWSksIEFERF9EQVlTX0ZJUlNUKS50b1N0cmluZygpLFxyXG4gICAgICApO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgbmV4dFRpbWUgPSBuZXcgRGF0ZShuZXh0VGltZSk7XHJcbiAgICAgIGlmIChuZXh0VGltZSA8IG5ldyBEYXRlKCkpIHNob3dSZXZpZXcudmFsdWUgPSB0cnVlO1xyXG4gICAgfVxyXG4gIH1cclxufSk7XHJcblxyXG5hc3luYyBmdW5jdGlvbiBjbG9zZUJsb2NrKCkge1xyXG4gIHNob3dSZXZpZXcudmFsdWUgPSBmYWxzZTtcclxuICBhd2FpdCBzZXR0aW5nc1N0b3JhZ2Uuc2F2ZVZhbHVlKFxyXG4gICAgU3RvcmFnZVBhcmFtcy5SRVZJRVdfUFJPTVBUX0FULFxyXG4gICAgYWRkRGF5cyhhZGRIb3VycyhzdGFydE9mVG9kYXkoKSwgUFJPTVBUX0FUX1RJTUVfT0ZfREFZKSwgQUREX0RBWVNfTkVYVCkudG9TdHJpbmcoKSxcclxuICApO1xyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiBvcGVuU3RvcmUoKSB7XHJcbiAgd2luZG93Lm9wZW4oX19CUk9XU0VSX18gPT0gJ2VkZ2UnID8gRURHRV9TVE9SRV9SRVZJRVdfVVJMIDogQ0hST01FX1NUT1JFX1JFVklFV19VUkwsICdfYmxhbmsnKTtcclxuICBhd2FpdCBzZXR0aW5nc1N0b3JhZ2Uuc2F2ZVZhbHVlKFN0b3JhZ2VQYXJhbXMuUkVWSUVXX0RBVEUsIG5ldyBEYXRlKCkudG9TdHJpbmcoKSk7XHJcbn1cclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGUgc2NvcGVkPlxyXG4ucmV2aWV3LWJsb2NrIHtcclxuICB3aWR0aDogLXdlYmtpdC1maWxsLWF2YWlsYWJsZTtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgYm90dG9tOiAwO1xyXG4gIHBhZGRpbmc6IDhweCAyMHB4O1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWZlZmVmO1xyXG59XHJcbi5yZXZpZXctYmxvY2sgaW5wdXRbdHlwZT0nYnV0dG9uJ10ge1xyXG4gIG1hcmdpbjogMCAyMHB4IDAgMDtcclxuICBmbG9hdDogcmlnaHQ7XHJcbiAgd2lkdGg6IGF1dG87XHJcbn1cclxuLnJldmlldy1ibG9jayBwIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgbWFyZ2luOiA4cHg7XHJcbiAgZm9udC1zaXplOiAxN3B4O1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbn1cclxuLnJldmlldy1ibG9jayBpbWcge1xyXG4gIHBhZGRpbmc6IDlweCAwIDAgMDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG59XHJcbjwvc3R5bGU+XHJcbiIsImltcG9ydCBCcm93c2VyIGZyb20gJ3dlYmV4dGVuc2lvbi1wb2x5ZmlsbCc7XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlT2Zmc2NyZWVuKCkge1xyXG4gIGNvbnN0IHBhdGggPSAnc3JjL29mZnNjcmVlbi5odG1sJztcclxuICBjb25zdCBvZmZzY3JlZW5VcmwgPSBCcm93c2VyLnJ1bnRpbWUuZ2V0VVJMKHBhdGgpO1xyXG4gIGlmIChhd2FpdCBjaHJvbWUub2Zmc2NyZWVuLmhhc0RvY3VtZW50KCkpIHJldHVybjtcclxuICBhd2FpdCBjaHJvbWUub2Zmc2NyZWVuLmNyZWF0ZURvY3VtZW50KHtcclxuICAgIHVybDogb2Zmc2NyZWVuVXJsLFxyXG4gICAgcmVhc29uczogWydBVURJT19QTEFZQkFDSyddLFxyXG4gICAganVzdGlmaWNhdGlvbjogJ1BsYXkgYXVkaW8gc291bmRzJyxcclxuICB9KTtcclxufVxyXG4iLCJpbXBvcnQgeyBhZGRTZWNvbmRzIH0gZnJvbSAnZGF0ZS1mbnMnO1xyXG5pbXBvcnQgeyBpbmplY3RTdG9yYWdlIH0gZnJvbSAnLi4vc3RvcmFnZS9pbmplY3Qtc3RvcmFnZSc7XHJcbmltcG9ydCB7IFN0b3JhZ2VQYXJhbXMgfSBmcm9tICcuLi9zdG9yYWdlL3N0b3JhZ2UtcGFyYW1zJztcclxuaW1wb3J0IHsgdXNlQmFkZ2UsIEJhZGdlSWNvbiwgQmFkZ2VDb2xvciB9IGZyb20gJy4vdXNlQmFkZ2UnO1xyXG5pbXBvcnQgeyBTZXR0aW5ncyB9IGZyb20gJy4vc2V0dGluZ3MnO1xyXG5pbXBvcnQgQnJvd3NlciBmcm9tICd3ZWJleHRlbnNpb24tcG9seWZpbGwnO1xyXG5pbXBvcnQgeyBsb2dnZXIgfSBmcm9tICcuLi91dGlscy9sb2dnZXInO1xyXG5pbXBvcnQgeyBNZXNzYWdlcyB9IGZyb20gJy4uL3V0aWxzL21lc3NhZ2VzJztcclxuaW1wb3J0IHsgaXNEYXRlRXF1YWwgfSBmcm9tICcuLi91dGlscy9kYXRlJztcclxuaW1wb3J0IHsgY3JlYXRlT2Zmc2NyZWVuIH0gZnJvbSAnLi4vb2Zmc2NyZWVuL2luZGV4JztcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjaGVja1BvbW9kb3JvKCkge1xyXG4gIHR5cGUgUG9tb2Rvcm9QZXJpb2QgPSB7XHJcbiAgICBwZXJpb2Q6IFBlcmlvZDtcclxuICAgIGlzVGFyZ2V0UGVyaW9kOiBib29sZWFuO1xyXG4gICAgaXNUYXJnZXRQZXJpb2RGaW5pc2hlZE5vdzogYm9vbGVhbjtcclxuICB9O1xyXG5cclxuICBlbnVtIFBlcmlvZCB7XHJcbiAgICB3b3JrID0gJ1dPUksnLFxyXG4gICAgcmVzdCA9ICdSRVNUJyxcclxuICAgIGZpbmlzaGVkID0gJ0ZJTklTSCcsXHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBpc1RhcmdldFBlcmlvZChwZXJpb2Q6IFBlcmlvZCk6IFBvbW9kb3JvUGVyaW9kIHtcclxuICAgIGxldCBpc1BvbW9kb3JvVGFyZ2V0UGVyaW9kRW5kO1xyXG4gICAgZm9yIChsZXQgaW5kZXggPSAxOyBpbmRleCA8PSBmcmVxdWVuY3k7IGluZGV4KyspIHtcclxuICAgICAgbGV0IGluZCA9IHBlcmlvZCA9PSBQZXJpb2Qud29yayA/IGluZGV4IC0gMSA6IGluZGV4O1xyXG4gICAgICBjb25zdCBwbHVzV29ya2luZ1RpbWUgPSB3b3JrVGltZSAqIGluZDtcclxuICAgICAgY29uc3QgcGx1c1Jlc3RUaW1lID0gKHJlc3RUaW1lICsgMSkgKiAoaW5kZXggLSAxKTtcclxuICAgICAgY29uc3QgaXNQb21vZG9yb1RhcmdldFBlcmlvZFN0YXJ0ID0gYWRkU2Vjb25kcyhzdGFydFRpbWUsIHBsdXNXb3JraW5nVGltZSArIHBsdXNSZXN0VGltZSk7XHJcbiAgICAgIGlzUG9tb2Rvcm9UYXJnZXRQZXJpb2RFbmQgPSBhZGRTZWNvbmRzKHN0YXJ0VGltZSwgcGx1c1dvcmtpbmdUaW1lICsgcGx1c1Jlc3RUaW1lICsgd29ya1RpbWUpO1xyXG4gICAgICBjb25zdCBpc1RhcmdldFBlcmlvZCA9XHJcbiAgICAgICAgbm93ID49IGlzUG9tb2Rvcm9UYXJnZXRQZXJpb2RTdGFydCAmJlxyXG4gICAgICAgIChhZGRTZWNvbmRzKG5vdywgLTEpIDw9IGlzUG9tb2Rvcm9UYXJnZXRQZXJpb2RFbmQgfHwgbm93IDw9IGlzUG9tb2Rvcm9UYXJnZXRQZXJpb2RFbmQpO1xyXG5cclxuICAgICAgaWYgKGlzVGFyZ2V0UGVyaW9kKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgIHBlcmlvZDogcGVyaW9kLFxyXG4gICAgICAgICAgaXNUYXJnZXRQZXJpb2Q6IGlzVGFyZ2V0UGVyaW9kLFxyXG4gICAgICAgICAgaXNUYXJnZXRQZXJpb2RGaW5pc2hlZE5vdzpcclxuICAgICAgICAgICAgaXNEYXRlRXF1YWwoYWRkU2Vjb25kcyhub3csIC0xKSwgaXNQb21vZG9yb1RhcmdldFBlcmlvZEVuZCkgfHxcclxuICAgICAgICAgICAgaXNEYXRlRXF1YWwobm93LCBpc1BvbW9kb3JvVGFyZ2V0UGVyaW9kRW5kKSxcclxuICAgICAgICB9O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBwZXJpb2Q6IFBlcmlvZC5maW5pc2hlZCxcclxuICAgICAgaXNUYXJnZXRQZXJpb2Q6IGZhbHNlLFxyXG4gICAgICBpc1RhcmdldFBlcmlvZEZpbmlzaGVkTm93OiBmYWxzZSxcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBhc3luYyBmdW5jdGlvbiBwbGF5KHBlcmlvZDogUGVyaW9kKSB7XHJcbiAgICBmdW5jdGlvbiBnZXRTb3VuZCgpIHtcclxuICAgICAgc3dpdGNoIChwZXJpb2QpIHtcclxuICAgICAgICBjYXNlIFBlcmlvZC53b3JrOlxyXG4gICAgICAgICAgcmV0dXJuIFN0b3JhZ2VQYXJhbXMuUE9NT0RPUk9fQVVESU9fQUZURVJfV09SSztcclxuICAgICAgICBjYXNlIFBlcmlvZC5yZXN0OlxyXG4gICAgICAgICAgcmV0dXJuIFN0b3JhZ2VQYXJhbXMuUE9NT0RPUk9fQVVESU9fQUZURVJfUkVTVDtcclxuICAgICAgICBjYXNlIFBlcmlvZC5maW5pc2hlZDpcclxuICAgICAgICAgIHJldHVybiBTdG9yYWdlUGFyYW1zLlBPTU9ET1JPX0FVRElPX0FGVEVSX0ZJTklTSEVEO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBsb2dnZXIubG9nKGBbUG9tb2Rvcm9dICR7cGVyaW9kfWApO1xyXG4gICAgY29uc3Qgc291bmQgPSBhd2FpdCBzdG9yYWdlLmdldFZhbHVlKGdldFNvdW5kKCkpO1xyXG4gICAgYXdhaXQgY3JlYXRlT2Zmc2NyZWVuKCk7XHJcbiAgICBhd2FpdCBCcm93c2VyLnJ1bnRpbWUuc2VuZE1lc3NhZ2Uoe1xyXG4gICAgICBtZXNzYWdlOiBNZXNzYWdlcy5QbGF5QXVkaW8sXHJcbiAgICAgIHNvdW5kOiBzb3VuZCxcclxuICAgICAgb2Zmc2NyZWVuOiB0cnVlLFxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBjb25zdCBzdG9yYWdlID0gaW5qZWN0U3RvcmFnZSgpO1xyXG4gIGNvbnN0IGlzUG9tb2Rvcm9FbmFibGVkID0gKGF3YWl0IFNldHRpbmdzLmdldEluc3RhbmNlKCkuZ2V0U2V0dGluZyhcclxuICAgIFN0b3JhZ2VQYXJhbXMuSVNfUE9NT0RPUk9fRU5BQkxFRCxcclxuICApKSBhcyBib29sZWFuO1xyXG5cclxuICBpZiAoIWlzUG9tb2Rvcm9FbmFibGVkKSByZXR1cm47XHJcblxyXG4gIGNvbnN0IHN0YXJ0VGltZSA9IG5ldyBEYXRlKFxyXG4gICAgKGF3YWl0IFNldHRpbmdzLmdldEluc3RhbmNlKCkuZ2V0U2V0dGluZyhTdG9yYWdlUGFyYW1zLlBPTU9ET1JPX1NUQVJUX1RJTUUpKSBhcyBzdHJpbmcsXHJcbiAgKTtcclxuICBjb25zdCB3b3JrVGltZSA9IChhd2FpdCBTZXR0aW5ncy5nZXRJbnN0YW5jZSgpLmdldFNldHRpbmcoXHJcbiAgICBTdG9yYWdlUGFyYW1zLlBPTU9ET1JPX0lOVEVSVkFMX1dPUkssXHJcbiAgKSkgYXMgbnVtYmVyO1xyXG4gIGNvbnN0IHJlc3RUaW1lID0gKGF3YWl0IFNldHRpbmdzLmdldEluc3RhbmNlKCkuZ2V0U2V0dGluZyhcclxuICAgIFN0b3JhZ2VQYXJhbXMuUE9NT0RPUk9fSU5URVJWQUxfUkVTVCxcclxuICApKSBhcyBudW1iZXI7XHJcbiAgY29uc3QgZnJlcXVlbmN5ID0gKGF3YWl0IFNldHRpbmdzLmdldEluc3RhbmNlKCkuZ2V0U2V0dGluZyhcclxuICAgIFN0b3JhZ2VQYXJhbXMuUE9NT0RPUk9fRlJFUVVFTkNZLFxyXG4gICkpIGFzIG51bWJlcjtcclxuXHJcbiAgY29uc3Qgbm93ID0gbmV3IERhdGUoKTtcclxuXHJcbiAgY29uc3QgcG9tb2Rvcm9FbmRUaW1lID0gYWRkU2Vjb25kcyhzdGFydFRpbWUsIHdvcmtUaW1lICogZnJlcXVlbmN5ICsgcmVzdFRpbWUgKiBmcmVxdWVuY3kpO1xyXG5cclxuICBjb25zdCBhY3RpdmVUYWIgPSBhd2FpdCBCcm93c2VyLnRhYnMucXVlcnkoeyBhY3RpdmU6IHRydWUgfSk7XHJcblxyXG4gIGlmIChub3cgPj0gcG9tb2Rvcm9FbmRUaW1lKSB7XHJcbiAgICBpZiAoaXNEYXRlRXF1YWwobm93LCBwb21vZG9yb0VuZFRpbWUpKSB7XHJcbiAgICAgIGxvZ2dlci5sb2coYFtQb21vZG9yb10gUG9tb2Rvcm8gZmluaXNoZWRgKTtcclxuICAgICAgYXdhaXQgcGxheShQZXJpb2QuZmluaXNoZWQpO1xyXG4gICAgfVxyXG5cclxuICAgIGF3YWl0IHN0b3JhZ2Uuc2F2ZVZhbHVlKFN0b3JhZ2VQYXJhbXMuSVNfUE9NT0RPUk9fRU5BQkxFRCwgZmFsc2UpO1xyXG4gICAgYXdhaXQgc3RvcmFnZS5zYXZlVmFsdWUoU3RvcmFnZVBhcmFtcy5QT01PRE9ST19TVEFSVF9USU1FLCBudWxsKTtcclxuICAgIGF3YWl0IHVzZUJhZGdlKHtcclxuICAgICAgdGFiSWQ6IGFjdGl2ZVRhYlswXS5pZCxcclxuICAgICAgdGV4dDogbnVsbCxcclxuICAgICAgY29sb3I6IEJhZGdlQ29sb3Iubm9uZSxcclxuICAgICAgaWNvbjogQmFkZ2VJY29uLmRlZmF1bHQsXHJcbiAgICB9KTtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIGxldCB0YXJnZXQgPSBpc1RhcmdldFBlcmlvZChQZXJpb2Qud29yayk7XHJcbiAgY29uc3QgaXNXb3JrID0gdGFyZ2V0LmlzVGFyZ2V0UGVyaW9kO1xyXG5cclxuICBpZiAoaXNXb3JrKSB7XHJcbiAgICBhd2FpdCB1c2VCYWRnZSh7XHJcbiAgICAgIHRhYklkOiBhY3RpdmVUYWJbMF0uaWQsXHJcbiAgICAgIHRleHQ6IG51bGwsXHJcbiAgICAgIGNvbG9yOiBCYWRnZUNvbG9yLm5vbmUsXHJcbiAgICAgIGljb246IEJhZGdlSWNvbi5wb21vZG9yb1dvcmtpbmdUaW1lLFxyXG4gICAgfSk7XHJcbiAgfSBlbHNlIHtcclxuICAgIHRhcmdldCA9IGlzVGFyZ2V0UGVyaW9kKFBlcmlvZC5yZXN0KTtcclxuICAgIGlmICh0YXJnZXQuaXNUYXJnZXRQZXJpb2QpIHtcclxuICAgICAgYXdhaXQgdXNlQmFkZ2Uoe1xyXG4gICAgICAgIHRhYklkOiBhY3RpdmVUYWJbMF0uaWQsXHJcbiAgICAgICAgdGV4dDogbnVsbCxcclxuICAgICAgICBjb2xvcjogQmFkZ2VDb2xvci5ub25lLFxyXG4gICAgICAgIGljb246IEJhZGdlSWNvbi5wb21vZG9yb1Jlc3RUaW1lLFxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGlmICh0YXJnZXQuaXNUYXJnZXRQZXJpb2RGaW5pc2hlZE5vdykgYXdhaXQgcGxheSh0YXJnZXQucGVyaW9kKTtcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIGlzV29yayxcclxuICB9O1xyXG59XHJcbiIsIjx0ZW1wbGF0ZT5cclxuICA8ZGl2IGNsYXNzPVwicG9tb2Rvcm8tcG9wdXAtYmxvY2tcIiB2LWlmPVwiaXNFbmFibGVkXCI+XHJcbiAgICA8cD57eyB0KCdwb21vZG9yb0lzRW5hYmxlZC5tZXNzYWdlJykgfX08L3A+XHJcbiAgICA8c3BhbiB2LWlmPVwiaXNXb3JraW5nVGltZVwiPnt7IHQoJ3BvbW9kb3JvV29yay5tZXNzYWdlJykgfX08L3NwYW4+XHJcbiAgICA8c3BhbiB2LWlmPVwiIWlzV29ya2luZ1RpbWVcIj57eyB0KCdwb21vZG9yb1Jlc3QubWVzc2FnZScpIH19PC9zcGFuPlxyXG4gICAgPGlucHV0XHJcbiAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICA6dmFsdWU9XCJ0KCdwb21vZG9yb1NldHRpbmdzLm1lc3NhZ2UnKVwiXHJcbiAgICAgIEBjbGljaz1cIm9wZW5QYWdlKFNldHRpbmdzVGFiLlBvbW9kb3JvKVwiXHJcbiAgICAvPlxyXG4gIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdCBsYW5nPVwidHNcIj5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gIG5hbWU6ICdQb21vZG9yb0luZm8nLFxyXG59O1xyXG48L3NjcmlwdD5cclxuXHJcbjxzY3JpcHQgbGFuZz1cInRzXCIgc2V0dXA+XHJcbmltcG9ydCB7IG9uTW91bnRlZCwgcmVmIH0gZnJvbSAndnVlJztcclxuaW1wb3J0IHsgU3RvcmFnZVBhcmFtcywgSVNfUE9NT0RPUk9fRU5BQkxFRF9ERUZBVUxUIH0gZnJvbSAnLi4vc3RvcmFnZS9zdG9yYWdlLXBhcmFtcyc7XHJcbmltcG9ydCB7IHVzZUkxOG4gfSBmcm9tICd2dWUtaTE4bic7XHJcbmltcG9ydCB7IGluamVjdFN0b3JhZ2UgfSBmcm9tICcuLi9zdG9yYWdlL2luamVjdC1zdG9yYWdlJztcclxuaW1wb3J0IHsgb3BlblBhZ2UgfSBmcm9tICcuLi91dGlscy9vcGVuLXBhZ2UnO1xyXG5pbXBvcnQgeyBTZXR0aW5nc1RhYiB9IGZyb20gJy4uL3V0aWxzL2VudW1zJztcclxuaW1wb3J0IHsgY2hlY2tQb21vZG9ybyB9IGZyb20gJy4uL2Z1bmN0aW9ucy9wb21vZG9ybyc7XHJcblxyXG5jb25zdCB7IHQgfSA9IHVzZUkxOG4oKTtcclxuY29uc3Qgc2V0dGluZ3NTdG9yYWdlID0gaW5qZWN0U3RvcmFnZSgpO1xyXG5cclxuY29uc3QgaXNFbmFibGVkID0gcmVmPGJvb2xlYW4+KCk7XHJcbmNvbnN0IGlzV29ya2luZ1RpbWUgPSByZWY8Ym9vbGVhbj4oKTtcclxuXHJcbm9uTW91bnRlZChhc3luYyAoKSA9PiB7XHJcbiAgaXNFbmFibGVkLnZhbHVlID0gYXdhaXQgc2V0dGluZ3NTdG9yYWdlLmdldFZhbHVlKFxyXG4gICAgU3RvcmFnZVBhcmFtcy5JU19QT01PRE9ST19FTkFCTEVELFxyXG4gICAgSVNfUE9NT0RPUk9fRU5BQkxFRF9ERUZBVUxULFxyXG4gICk7XHJcblxyXG4gIGlzV29ya2luZ1RpbWUudmFsdWUgPSAoYXdhaXQgY2hlY2tQb21vZG9ybygpKT8uaXNXb3JrO1xyXG59KTtcclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGUgc2NvcGVkPlxyXG4ucG9tb2Rvcm8tcG9wdXAtYmxvY2sge1xyXG4gIHdpZHRoOiAtd2Via2l0LWZpbGwtYXZhaWxhYmxlO1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICBib3R0b206IDA7XHJcbiAgcGFkZGluZzogOHB4IDEwcHg7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNlZmVmZWY7XHJcbn1cclxuLnBvbW9kb3JvLXBvcHVwLWJsb2NrIHAge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBtYXJnaW46IDhweDtcclxuICBmb250LXNpemU6IDE3cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxufVxyXG4ucG9tb2Rvcm8tcG9wdXAtYmxvY2sgc3BhbiB7XHJcbiAgcGFkZGluZzogNXB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxMDUsIDIwMiwgMTA1KTtcclxuICBjb2xvcjogYmxhY2s7XHJcbiAgbWFyZ2luLWxlZnQ6IDVweDtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBmb250LXNpemU6IDEzcHg7XHJcbn1cclxuLnBvbW9kb3JvLXBvcHVwLWJsb2NrIGlucHV0W3R5cGU9J2J1dHRvbiddIHtcclxuICBmbG9hdDogcmlnaHQ7XHJcbn1cclxuPC9zdHlsZT5cclxuIiwiPHRlbXBsYXRlPlxyXG4gIDxkaXYgY2xhc3M9XCJoZWFkZXJCbG9ja1wiPlxyXG4gICAgPGRpdiBjbGFzcz1cImQtaW5saW5lLWJsb2NrXCI+XHJcbiAgICAgIDxpbWcgY2xhc3M9XCJsb2dvXCIgaGVpZ2h0PVwiMzBcIiBzcmM9XCIuLi9hc3NldHMvaWNvbnMvNDh4NDgucG5nXCIgLz5cclxuICAgICAgPHAgY2xhc3M9XCJoZWFkZXJcIj5UYWJUcmFja3I8L3A+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgY2xhc3M9XCJpY29ucy1ibG9ja1wiPlxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxpbWdcclxuICAgICAgICAgIGNsYXNzPVwiZGFyay1tb2RlLWljb25cIlxyXG4gICAgICAgICAgaGVpZ2h0PVwiMjVcIlxyXG4gICAgICAgICAgc3JjPVwiLi4vYXNzZXRzL2ljb25zL2xpZ2h0LW1vZGUuc3ZnXCJcclxuICAgICAgICAgIHRpdGxlPVwiRGlzYWJsZSBEYXJrIE1vZGVcIlxyXG4gICAgICAgICAgdi1pZj1cImRhcmtNb2RlID09IHRydWVcIlxyXG4gICAgICAgICAgQGNsaWNrPVwiY2hhbmdlRGFya01vZGUoZmFsc2UpXCJcclxuICAgICAgICAvPlxyXG4gICAgICAgIDxpbWdcclxuICAgICAgICAgIGNsYXNzPVwiZGFyay1tb2RlLWljb25cIlxyXG4gICAgICAgICAgdGl0bGU9XCJFbmFibGUgRGFyayBNb2RlXCJcclxuICAgICAgICAgIGhlaWdodD1cIjI1XCJcclxuICAgICAgICAgIHNyYz1cIi4uL2Fzc2V0cy9pY29ucy9kYXJrLW1vZGUuc3ZnXCJcclxuICAgICAgICAgIHYtaWY9XCJkYXJrTW9kZSA9PSBmYWxzZVwiXHJcbiAgICAgICAgICBAY2xpY2s9XCJjaGFuZ2VEYXJrTW9kZSh0cnVlKVwiXHJcbiAgICAgICAgLz5cclxuXHJcbiAgICAgICAgPGEgQGNsaWNrPVwib3BlblBhZ2UoU2V0dGluZ3NUYWIuUG9tb2Rvcm8pXCJcclxuICAgICAgICAgID57eyB0KCdwb21vZG9yb01vZGUubWVzc2FnZScpIH19PGltZyBzcmM9XCIuLi9hc3NldHMvaWNvbnMvcG9tb2Rvcm8uc3ZnXCIgaGVpZ2h0PVwiMjJcIlxyXG4gICAgICAgIC8+PC9hPlxyXG4gICAgICAgIDxhIGNsYXNzPVwiZmlsdGVyXCIgQGNsaWNrPVwib3BlblBhZ2UoU2V0dGluZ3NUYWIuRGFzaGJvYXJkKVwiXHJcbiAgICAgICAgICA+e3sgdCgnZGFzaGJvYXJkLm1lc3NhZ2UnKSB9fTxpbWcgaGVpZ2h0PVwiMjJcIiBzcmM9XCIuLi9hc3NldHMvaWNvbnMvZGFzaGJvYXJkLnN2Z1wiXHJcbiAgICAgICAgLz48L2E+XHJcbiAgICAgICAgPGEgY2xhc3M9XCJmaWx0ZXJcIiBAY2xpY2s9XCJvcGVuUGFnZShTZXR0aW5nc1RhYi5HZW5lcmFsU2V0dGluZ3MpXCJcclxuICAgICAgICAgID57eyB0KCdzZXR0aW5ncy5tZXNzYWdlJykgfX08aW1nIGhlaWdodD1cIjIyXCIgc3JjPVwiLi4vYXNzZXRzL2ljb25zL3NldHRpbmdzLnN2Z1wiXHJcbiAgICAgICAgLz48L2E+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbiAgPGRpdiBjbGFzcz1cInRhYnNcIj5cclxuICAgIDxpbnB1dFxyXG4gICAgICB0eXBlPVwicmFkaW9cIlxyXG4gICAgICBpZD1cInRvZGF5VGFiXCJcclxuICAgICAgbmFtZT1cInRhYi1jb250cm9sXCJcclxuICAgICAgY2hlY2tlZFxyXG4gICAgICB2LW9uOmNoYW5nZT1cInNlbGVjdFRhYihUeXBlT2ZMaXN0LlRvZGF5KVwiXHJcbiAgICAvPlxyXG4gICAgPGlucHV0XHJcbiAgICAgIHR5cGU9XCJyYWRpb1wiXHJcbiAgICAgIGlkPVwiYWxsVGltZVRhYlwiXHJcbiAgICAgIG5hbWU9XCJ0YWItY29udHJvbFwiXHJcbiAgICAgIHYtb246Y2hhbmdlPVwic2VsZWN0VGFiKFR5cGVPZkxpc3QuQWxsKVwiXHJcbiAgICAvPlxyXG4gICAgPGlucHV0XHJcbiAgICAgIHR5cGU9XCJyYWRpb1wiXHJcbiAgICAgIGlkPVwiYnlEYXlzVGFiXCJcclxuICAgICAgbmFtZT1cInRhYi1jb250cm9sXCJcclxuICAgICAgdi1vbjpjaGFuZ2U9XCJzZWxlY3RUYWIoVHlwZU9mTGlzdC5CeURheXMpXCJcclxuICAgIC8+XHJcbiAgICA8dWw+XHJcbiAgICAgIDxsaSB0aXRsZT1cIlRvZGF5XCI+XHJcbiAgICAgICAgPGxhYmVsIGZvcj1cInRvZGF5VGFiXCIgcm9sZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICA+PHNwYW4+e3sgdCgndG9kYXkubWVzc2FnZScpIH19PC9zcGFuPjwvbGFiZWxcclxuICAgICAgICA+XHJcbiAgICAgIDwvbGk+XHJcbiAgICAgIDxsaSB0aXRsZT1cIkFsbCBUaGUgVGltZVwiPlxyXG4gICAgICAgIDxsYWJlbCBmb3I9XCJhbGxUaW1lVGFiXCIgcm9sZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICA+PHNwYW4+e3sgdCgnYWxsVGltZS5tZXNzYWdlJykgfX08L3NwYW4+PC9sYWJlbFxyXG4gICAgICAgID5cclxuICAgICAgPC9saT5cclxuICAgICAgPGxpIHRpdGxlPVwiQnkgRGF5c1wiPlxyXG4gICAgICAgIDxsYWJlbCBmb3I9XCJieURheXNUYWJcIiByb2xlPVwiYnV0dG9uXCJcclxuICAgICAgICAgID48c3Bhbj57eyB0KCdieURheXMubWVzc2FnZScpIH19PC9zcGFuPjwvbGFiZWxcclxuICAgICAgICA+XHJcbiAgICAgIDwvbGk+XHJcbiAgICA8L3VsPlxyXG5cclxuICAgIDxkaXYgY2xhc3M9XCJzbGlkZXJcIj48ZGl2IGNsYXNzPVwiaW5kaWNhdG9yXCI+PC9kaXY+PC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzPVwiY29udGVudFwiPlxyXG4gICAgICA8c2VjdGlvbiBpZD1cInRvZGF5VGFiTGlzdFwiPlxyXG4gICAgICAgIDxUYWJMaXN0XHJcbiAgICAgICAgICB2LWlmPVwiYWN0aXZlVGFiID09IFR5cGVPZkxpc3QuVG9kYXlcIlxyXG4gICAgICAgICAgOnR5cGU9XCJUeXBlT2ZMaXN0LlRvZGF5XCJcclxuICAgICAgICAgIDpzaG93QWxsU3RhdHM9XCJmYWxzZVwiXHJcbiAgICAgICAgLz5cclxuICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICA8c2VjdGlvbiBpZD1cInN1bW1hcnlcIj5cclxuICAgICAgICA8VGFiTGlzdCB2LWlmPVwiYWN0aXZlVGFiID09IFR5cGVPZkxpc3QuQWxsXCIgOnR5cGU9XCJUeXBlT2ZMaXN0LkFsbFwiIDpzaG93QWxsU3RhdHM9XCJ0cnVlXCIgLz5cclxuICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICA8c2VjdGlvbiBpZD1cImJ5RGF5c1RhYkxpc3RcIj5cclxuICAgICAgICA8QnlEYXlzIHYtaWY9XCJhY3RpdmVUYWIgPT0gVHlwZU9mTGlzdC5CeURheXNcIiAvPlxyXG4gICAgICA8L3NlY3Rpb24+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuICA8UG9tb2Rvcm9JbmZvIC8+XHJcbiAgPFJldmlldyAvPlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdCBsYW5nPVwidHNcIiBzZXR1cD5cclxuaW1wb3J0IHsgb25Nb3VudGVkLCByZWYgfSBmcm9tICd2dWUnO1xyXG5pbXBvcnQgeyB1c2VJMThuIH0gZnJvbSAndnVlLWkxOG4nO1xyXG5pbXBvcnQgVGFiTGlzdCBmcm9tICcuLi9jb21wb25lbnRzL1RhYkxpc3QudnVlJztcclxuaW1wb3J0IEJ5RGF5cyBmcm9tICcuLi9jb21wb25lbnRzL0J5RGF5cy52dWUnO1xyXG5pbXBvcnQgUmV2aWV3IGZyb20gJy4uL2NvbXBvbmVudHMvUmV2aWV3LnZ1ZSc7XHJcbmltcG9ydCBQb21vZG9yb0luZm8gZnJvbSAnLi4vY29tcG9uZW50cy9Qb21vZG9yb0luZm8udnVlJztcclxuaW1wb3J0IHsgb3BlblBhZ2UgfSBmcm9tICcuLi91dGlscy9vcGVuLXBhZ2UnO1xyXG5pbXBvcnQgeyBTZXR0aW5nc1RhYiwgVHlwZU9mTGlzdCB9IGZyb20gJy4uL3V0aWxzL2VudW1zJztcclxuaW1wb3J0IHsgaW5qZWN0U3RvcmFnZSB9IGZyb20gJy4uL3N0b3JhZ2UvaW5qZWN0LXN0b3JhZ2UnO1xyXG5pbXBvcnQgeyBEQVJLX01PREVfREVGQVVMVCwgU3RvcmFnZVBhcmFtcyB9IGZyb20gJy4uL3N0b3JhZ2Uvc3RvcmFnZS1wYXJhbXMnO1xyXG5pbXBvcnQgeyBhcHBseURhcmtNb2RlIH0gZnJvbSAnLi4vdXRpbHMvZGFyay1tb2RlJztcclxuXHJcbmNvbnN0IHsgdCB9ID0gdXNlSTE4bigpO1xyXG5jb25zdCBzZXR0aW5nc1N0b3JhZ2UgPSBpbmplY3RTdG9yYWdlKCk7XHJcblxyXG5jb25zdCBhY3RpdmVUYWIgPSByZWY8VHlwZU9mTGlzdD4oKTtcclxuY29uc3QgZGFya01vZGUgPSByZWY8Ym9vbGVhbj4oKTtcclxuXHJcbm9uTW91bnRlZChhc3luYyAoKSA9PiB7XHJcbiAgYWN0aXZlVGFiLnZhbHVlID0gVHlwZU9mTGlzdC5Ub2RheTtcclxuICBkYXJrTW9kZS52YWx1ZSA9IGF3YWl0IHNldHRpbmdzU3RvcmFnZS5nZXRWYWx1ZShTdG9yYWdlUGFyYW1zLkRBUktfTU9ERSwgREFSS19NT0RFX0RFRkFVTFQpO1xyXG4gIGlmIChkYXJrTW9kZS52YWx1ZSkgYXBwbHlEYXJrTW9kZShkYXJrTW9kZS52YWx1ZSk7XHJcbn0pO1xyXG5cclxuZnVuY3Rpb24gc2VsZWN0VGFiKHR5cGU6IFR5cGVPZkxpc3QpIHtcclxuICBhY3RpdmVUYWIudmFsdWUgPSB0eXBlO1xyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiBjaGFuZ2VEYXJrTW9kZSh2YWx1ZTogYm9vbGVhbikge1xyXG4gIGF3YWl0IHNldHRpbmdzU3RvcmFnZS5zYXZlVmFsdWUoU3RvcmFnZVBhcmFtcy5EQVJLX01PREUsIHZhbHVlKTtcclxuICBkYXJrTW9kZS52YWx1ZSA9IHZhbHVlO1xyXG4gIGFwcGx5RGFya01vZGUodmFsdWUpO1xyXG4gIHVwZGF0ZVRhYigpO1xyXG59XHJcblxyXG5mdW5jdGlvbiB1cGRhdGVUYWIoKSB7XHJcbiAgY29uc3QgdGVtcFZhbHVlID0gYWN0aXZlVGFiLnZhbHVlO1xyXG4gIGFjdGl2ZVRhYi52YWx1ZSA9IHVuZGVmaW5lZDtcclxuICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgIGFjdGl2ZVRhYi52YWx1ZSA9IHRlbXBWYWx1ZTtcclxuICB9LCA1MCk7XHJcbn1cclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGUgc2NvcGVkPlxyXG4uaGVhZGVyQmxvY2sge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG59XHJcbi5oZWFkZXJCbG9jayAuaGVhZGVyIHtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgcGFkZGluZzogMCAwIDAgNXB4O1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIGNvbG9yOiAjNGE0YTRhO1xyXG4gIHZlcnRpY2FsLWFsaWduOiB0ZXh0LWJvdHRvbTtcclxufVxyXG5cclxuLmhlYWRlckJsb2NrIGltZyB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbn1cclxuLmhlYWRlckJsb2NrIC5sb2dvIHtcclxuICBtYXJnaW4tbGVmdDogN3B4O1xyXG59XHJcbi5oZWFkZXJCbG9jayAuaWNvbnMtYmxvY2sge1xyXG4gIGZsb2F0OiByaWdodDtcclxuICBtYXJnaW46IDdweCAwIDAgMDtcclxufVxyXG5cclxuLmhlYWRlckJsb2NrIC5pY29ucy1ibG9jayBhOmhvdmVyIHtcclxuICBmaWx0ZXI6IGludmVydCg0MCUpIHNlcGlhKDk0JSkgc2F0dXJhdGUoMzM3MSUpIGh1ZS1yb3RhdGUoMjI3ZGVnKSBicmlnaHRuZXNzKDk5JSkgY29udHJhc3QoOTIlKTtcclxufVxyXG5cclxuLmhlYWRlckJsb2NrIC5pY29ucy1ibG9jayBhIHtcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbn1cclxuXHJcbi5oZWFkZXJCbG9jayAuaWNvbnMtYmxvY2sgYSBpbWcge1xyXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgcGFkZGluZy1sZWZ0OiA1cHggIWltcG9ydGFudDtcclxufVxyXG4uaGVhZGVyQmxvY2sgLmljb25zLWJsb2NrIC5kYXJrLW1vZGUtaWNvbiB7XHJcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxufVxyXG5cclxuLmhlYWRlckJsb2NrIC5pY29ucy1ibG9jayAuZG9uYXRlLWltZyB7XHJcbiAgcGFkZGluZy10b3A6IDA7XHJcbiAgcGFkZGluZy1ib3R0b206IDA7XHJcbn1cclxuPC9zdHlsZT5cclxuIiwiaW1wb3J0IFBvcHVwIGZyb20gJy4vcGFnZXMvUG9wdXAudnVlJztcclxuaW1wb3J0IFZ1ZURhdGVQaWNrZXIgZnJvbSAnQHZ1ZXBpYy92dWUtZGF0ZXBpY2tlcic7XHJcbmltcG9ydCAnQHZ1ZXBpYy92dWUtZGF0ZXBpY2tlci9kaXN0L21haW4uY3NzJztcclxuaW1wb3J0IHsgY3JlYXRlQXBwIH0gZnJvbSAndnVlJztcclxuaW1wb3J0IGkxOG4gZnJvbSAnLi9wbHVnaW5zL2kxOG4nO1xyXG5cclxuY29uc3QgYXBwID0gY3JlYXRlQXBwKFBvcHVwKTtcclxuYXBwLmNvbXBvbmVudCgnVnVlRGF0ZVBpY2tlcicsIFZ1ZURhdGVQaWNrZXIpO1xyXG5hcHAudXNlKGkxOG4pO1xyXG5hcHAubW91bnQoJ2JvZHknKTtcclxuIl0sIm5hbWVzIjpbIl9fZGVmYXVsdF9fIiwiX29wZW5CbG9jayIsIl9jcmVhdGVFbGVtZW50QmxvY2siLCJfaG9pc3RlZF8xIiwiX2NyZWF0ZUVsZW1lbnRWTm9kZSIsIl9ub3JtYWxpemVDbGFzcyIsIl9ob2lzdGVkXzIiLCJfaG9pc3RlZF8zIiwiX2NyZWF0ZVRleHRWTm9kZSIsIl90b0Rpc3BsYXlTdHJpbmciLCJfdW5yZWYiLCJfY3JlYXRlVk5vZGUiLCJfVHJhbnNpdGlvbiIsIl93aXRoRGlyZWN0aXZlcyIsIl9ob2lzdGVkXzQiLCJfcmVuZGVyU2xvdCIsIl9jcmVhdGVCbG9jayIsIk5vRGF0YUJ5RGF5cyIsIl9ob2lzdGVkXzUiLCJfaG9pc3RlZF82IiwiX2hvaXN0ZWRfNyIsIl9ob2lzdGVkXzgiLCJfaG9pc3RlZF8xMCIsIl9ob2lzdGVkXzExIiwiX2hvaXN0ZWRfMTIiLCJfRnJhZ21lbnQiLCJfcmVuZGVyTGlzdCIsIl9hIiwiaSIsIl9pbXBvcnRzXzAiLCJQZXJpb2QiLCJpc1RhcmdldFBlcmlvZCIsIl9pbXBvcnRzXzMiLCJWdWVEYXRlUGlja2VyIl0sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE1BQWUsYUFBQTtBQ0FmLE1BQWUsYUFBQTtBQ0FmLE1BQWUsYUFBQTtBQ0FmLE1BQWUsYUFBQTtBQ3FCQSxTQUFTLFdBQVcsV0FBVyxhQUFhO0FBQ3pELGVBQWEsR0FBRyxTQUFTO0FBQ3pCLE1BQUksU0FBUyxVQUFVLFdBQVc7QUFDbEMsU0FBTyxnQkFBZ0IsV0FBVyxTQUFTLEdBQUk7QUFDakQ7Ozs7O0FDR0EsTUFBQUEsZ0JBQWU7QUFBQSxFQUNiLE1BQU07QUFDUjs7Ozs7Ozs7QUFZQSxVQUFNLE9BQU87O0FBekNYLGFBQUFDLFVBQUEsR0FBQUMsbUJBdUJNLE9BdkJOQyxjQXVCTTtBQUFBLFFBdEJKQyxnQkFnQk0sT0FBQTtBQUFBLFVBaEJELE9BQUtDLGVBQUEsQ0FBQyxvQkFBaUQsS0FBSSxRQUFBLFdBQUEsY0FBQSxDQUFBO0FBQUEsVUFBakMsU0FBSyxPQUFBLENBQUEsTUFBQSxPQUFBLENBQUEsSUFBQSxDQUFBLFdBQUUsS0FBSSxRQUFBLENBQUksS0FBSTtBQUFBLFFBQUE7VUFDaERELGdCQVVNLE9BVk5FLGNBVU07QUFBQSx1QkFUSixHQUFBSixtQkFRTSxPQUFBO0FBQUEsY0FQSixPQUFLRyxlQUFBLENBQUMseUJBQXVCLEVBQUEsTUFDYixLQUFJLE1BQUEsQ0FBQSxDQUFBO0FBQUEsY0FDcEIs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
