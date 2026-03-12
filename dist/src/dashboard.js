var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
import { B as Browser } from "../browser-polyfill.js";
import { i as injectStorage, a as ranges, S as StorageParams, V as VIEW_TIME_IN_BADGE_DEFAULT, h as INTERVAL_INACTIVITY_DEFAULT, D as DARK_MODE_DEFAULT, B as BLOCK_DEFERRAL_DEFAULT, T as ThisWeekRange, j as SHOW_CHANGELOG_DEFAULT, k as InactivityInterval, m as todayLocalDate, n as CHROME_STORE_CLEAR_YOUTUBE_URL, o as TypeOfUrl, p as isDomainEquals, q as convertHHMMToSeconds, L as ListWithTime, s as convertSecondsToHHMM, u as DAILY_NOTIFICATION_DEFAULT, N as NOTIFICATION_MESSAGE_DEFAULT, v as DAILY_SUMMARY_NOTIFICATION_TIME_DEFAULT, P as PomodoroSounds, I as IS_POMODORO_ENABLED_DEFAULT, w as POMODORO_INTERVAL_WORK_DEFAULT, x as POMODORO_INTERVAL_REST_DEFAULT, y as POMODORO_FREQUENCY_DEFAULT, z as POMODORO_AUDIO_AFTER_WORK_DEFAULT, A as POMODORO_AUDIO_AFTER_REST_DEFAULT, E as POMODORO_AUDIO_AFTER_FINISHED_DEFAULT, l as logger, F as CHROME_STORE_SUPPORT_URL, C as CHROME_STORE_REVIEW_URL, c as convertSummaryTimeToString, e as SettingsTab, G as StorageDeserializeParam, H as convertStringTimeIntervalToSeconds, J as convertHoursToTime, f as TypeOfList, K as getEnumValueTab, g as _imports_0$7 } from "../general.js";
import { j as applyDarkMode, n as useImportToCsv, d as useFile, F as FileType, p as injectTabsRepository, e as addDays, f as addHours, s as startOfToday, q as Favicon, r as extractHostname, g as useBadge, h as BadgeColor, i as BadgeIcon, t as isSameDay, B as ByDaysChart, o as openPage, _ as _imports_0$6, v as getTypeOfUrl, b as _sfc_main$i, C as Chart, w as CategoryScale, L as LinearScale, x as BarElement, y as plugin_title, z as plugin_tooltip, A as plugin_legend, D as Bar, l as TabList, k as _imports_5, m as oa } from "../dark.js";
import { d as defineComponent, o as openBlock, c as createElementBlock, k as createBlock, w as withCtx, F as Fragment, l as renderList, x as normalizeStyle, r as renderSlot, n as normalizeClass, a as createBaseVNode, p as createCommentVNode, y as resolveDynamicComponent, z as TransitionGroup, h as useI18n, i as onMounted, j as resolveComponent, f as withDirectives, A as vModelCheckbox, u as unref, t as toDisplayString, B as vModelSelect, e as createVNode, g as ref, _ as _export_sfc, C as vModelText, m as computed, b as createTextVNode, D as watch, q as createApp, s as i18n } from "../i18n.js";
import { M as Messages } from "../messages.js";
import { P as PromoClearYouTube, _ as _imports_0$5, u as useExtensionPage } from "../PromoClearYouTube.js";
const _imports_1$3 = "/s-dashboard.svg";
const _imports_2$1 = "/s-whitelist.svg";
const _imports_3$1 = "/s-limits.svg";
const _imports_4 = "/s-notifications.svg";
const _imports_6 = "/s-settings.svg";
const _imports_7 = "/s-about.svg";
const _imports_8 = "/donate.png";
function M(t) {
  return { all: t = t || /* @__PURE__ */ new Map(), on: function(e, i) {
    var s = t.get(e);
    s ? s.push(i) : t.set(e, [i]);
  }, off: function(e, i) {
    var s = t.get(e);
    s && (i ? s.splice(s.indexOf(i) >>> 0, 1) : t.set(e, []));
  }, emit: function(e, i) {
    var s = t.get(e);
    s && s.slice().map(function(n) {
      n(i);
    }), (s = t.get("*")) && s.slice().map(function(n) {
      n(e, i);
    });
  } };
}
const d = M(), C = /* @__PURE__ */ new Map(), w = {
  x: ["left", "center", "right"],
  y: ["top", "bottom"]
}, R = ((t) => () => t++)(0), V = (t) => typeof t != "string" ? [] : t.split(/\s+/gi).filter((e) => e), W = (t) => {
  typeof t == "string" && (t = V(t));
  let e = null, i = null;
  return t.forEach((s) => {
    w.y.indexOf(s) !== -1 && (i = s), w.x.indexOf(s) !== -1 && (e = s);
  }), { x: e, y: i };
};
class Y {
  constructor(e, i, s) {
    this.remaining = i, this.callback = e, this.notifyItem = s, this.resume();
  }
  pause() {
    clearTimeout(this.notifyItem.timer), this.remaining -= Date.now() - this.start;
  }
  resume() {
    this.start = Date.now(), clearTimeout(this.notifyItem.timer), this.notifyItem.timer = setTimeout(this.callback, this.remaining);
  }
}
const m = {
  position: ["top", "right"],
  cssAnimation: "vn-fade",
  velocityAnimation: {
    enter: (t) => ({
      height: [t.clientHeight, 0],
      opacity: [1, 0]
    }),
    leave: {
      height: 0,
      opacity: [0, 1]
    }
  }
}, j = defineComponent({
  name: "velocity-group",
  emits: ["after-leave", "leave", "enter"],
  methods: {
    enter(t, e) {
      this.$emit("enter", t, e);
    },
    leave(t, e) {
      this.$emit("leave", t, e);
    },
    afterLeave() {
      this.$emit("after-leave");
    }
  }
}), v = (t, e) => {
  const i = t.__vccOpts || t;
  for (const [s, n] of e)
    i[s] = n;
  return i;
};
function G(t, e, i, s, n, c) {
  return openBlock(), createBlock(TransitionGroup, {
    tag: "span",
    css: false,
    onEnter: t.enter,
    onLeave: t.leave,
    onAfterLeave: t.afterLeave
  }, {
    default: withCtx(() => [
      renderSlot(t.$slots, "default")
    ]),
    _: 3
  }, 8, ["onEnter", "onLeave", "onAfterLeave"]);
}
const z = /* @__PURE__ */ v(j, [["render", G]]), F = defineComponent({
  name: "css-group",
  inheritAttrs: false,
  props: {
    name: { type: String, required: true }
  }
});
function P(t, e, i, s, n, c) {
  return openBlock(), createBlock(TransitionGroup, {
    tag: "span",
    name: t.name
  }, {
    default: withCtx(() => [
      renderSlot(t.$slots, "default")
    ]),
    _: 3
  }, 8, ["name"]);
}
const q = /* @__PURE__ */ v(F, [["render", P]]), h = "[-+]?[0-9]*.?[0-9]+", L = [
  {
    name: "px",
    regexp: new RegExp(`^${h}px$`)
  },
  {
    name: "%",
    regexp: new RegExp(`^${h}%$`)
  },
  /**
   * Fallback option
   * If no suffix specified, assigning "px"
   */
  {
    name: "px",
    regexp: new RegExp(`^${h}$`)
  }
], J = (t) => {
  if (t === "auto")
    return {
      type: t,
      value: 0
    };
  for (let e = 0; e < L.length; e++) {
    const i = L[e];
    if (i.regexp.test(t))
      return {
        type: i.name,
        value: parseFloat(t)
      };
  }
  return {
    type: "",
    value: t
  };
}, K = (t) => {
  switch (typeof t) {
    case "number":
      return { type: "px", value: t };
    case "string":
      return J(t);
    default:
      return { type: "", value: t };
  }
}, f = {
  IDLE: 0,
  DESTROYED: 2
}, Q = defineComponent({
  name: "notifications",
  components: {
    VelocityGroup: z,
    CssGroup: q
  },
  props: {
    group: {
      type: String,
      default: ""
    },
    width: {
      type: [Number, String],
      default: 300
    },
    reverse: {
      type: Boolean,
      default: false
    },
    position: {
      type: [String, Array],
      default: m.position
    },
    classes: {
      type: String,
      default: "vue-notification"
    },
    animationType: {
      type: String,
      default: "css"
    },
    animation: {
      type: Object,
      default: m.velocityAnimation
    },
    animationName: {
      type: String,
      default: m.cssAnimation
    },
    speed: {
      type: Number,
      default: 300
    },
    /* Todo */
    cooldown: {
      type: Number,
      default: 0
    },
    duration: {
      type: Number,
      default: 3e3
    },
    delay: {
      type: Number,
      default: 0
    },
    max: {
      type: Number,
      default: 1 / 0
    },
    ignoreDuplicates: {
      type: Boolean,
      default: false
    },
    closeOnClick: {
      type: Boolean,
      default: true
    },
    pauseOnHover: {
      type: Boolean,
      default: false
    }
  },
  emits: ["click", "destroy", "start"],
  data() {
    return {
      list: [],
      velocity: C.get("velocity"),
      timerControl: null
    };
  },
  computed: {
    actualWidth() {
      return K(this.width);
    },
    isVA() {
      return this.animationType === "velocity";
    },
    componentName() {
      return this.isVA ? "velocity-group" : "css-group";
    },
    styles() {
      const { x: t, y: e } = W(this.position), i = this.actualWidth.value, s = this.actualWidth.type, n = {
        width: i + s
      };
      return e && (n[e] = "0px"), t && (t === "center" ? n.left = `calc(50% - ${+i / 2}${s})` : n[t] = "0px"), n;
    },
    active() {
      return this.list.filter((t) => t.state !== f.DESTROYED);
    },
    botToTop() {
      return this.styles.hasOwnProperty("bottom");
    }
  },
  mounted() {
    d.on("add", this.addItem), d.on("close", this.closeItem);
  },
  methods: {
    destroyIfNecessary(t) {
      this.$emit("click", t), this.closeOnClick && this.destroy(t);
    },
    pauseTimeout() {
      var t;
      this.pauseOnHover && ((t = this.timerControl) == null || t.pause());
    },
    resumeTimeout() {
      var t;
      this.pauseOnHover && ((t = this.timerControl) == null || t.resume());
    },
    addItem(t = {}) {
      if (t.group || (t.group = ""), t.data || (t.data = {}), this.group !== t.group)
        return;
      if (t.clean || t.clear) {
        this.destroyAll();
        return;
      }
      const e = typeof t.duration == "number" ? t.duration : this.duration, i = typeof t.speed == "number" ? t.speed : this.speed, s = typeof t.ignoreDuplicates == "boolean" ? t.ignoreDuplicates : this.ignoreDuplicates, { title: n, text: c, type: o, data: l, id: I } = t, r = {
        id: I || R(),
        title: n,
        text: c,
        type: o,
        state: f.IDLE,
        speed: i,
        length: e + 2 * i,
        data: l
      };
      e >= 0 && (this.timerControl = new Y(() => this.destroy(r), r.length, r));
      const O = this.reverse ? !this.botToTop : this.botToTop;
      let u = -1;
      const S = this.active.some((E) => E.title === t.title && E.text === t.text);
      (!s || !S) && (O ? (this.list.push(r), this.$emit("start", r), this.active.length > this.max && (u = 0)) : (this.list.unshift(r), this.$emit("start", r), this.active.length > this.max && (u = this.active.length - 1)), u !== -1 && this.destroy(this.active[u]));
    },
    closeItem(t) {
      this.destroyById(t);
    },
    notifyClass(t) {
      return [
        "vue-notification-template",
        this.classes,
        t.type || ""
      ];
    },
    notifyWrapperStyle(t) {
      return this.isVA ? void 0 : { transition: `all ${t.speed}ms` };
    },
    destroy(t) {
      clearTimeout(t.timer), t.state = f.DESTROYED, this.clean(), this.$emit("destroy", t);
    },
    destroyById(t) {
      const e = this.list.find((i) => i.id === t);
      e && this.destroy(e);
    },
    destroyAll() {
      this.active.forEach(this.destroy);
    },
    getAnimation(t, e) {
      var s;
      const i = (s = this.animation) == null ? void 0 : s[t];
      return typeof i == "function" ? i.call(this, e) : i;
    },
    enter(t, e) {
      if (!this.isVA)
        return;
      const i = this.getAnimation("enter", t);
      this.velocity(t, i, {
        duration: this.speed,
        complete: e
      });
    },
    leave(t, e) {
      if (!this.isVA)
        return;
      const i = this.getAnimation("leave", t);
      this.velocity(t, i, {
        duration: this.speed,
        complete: e
      });
    },
    clean() {
      this.list = this.list.filter((t) => t.state !== f.DESTROYED);
    }
  }
});
const U = ["data-id"], X = ["onClick"], Z = ["innerHTML"], tt = ["innerHTML"];
function et(t, e, i, s, n, c) {
  return openBlock(), createElementBlock("div", {
    class: "vue-notification-group",
    style: normalizeStyle(t.styles)
  }, [
    (openBlock(), createBlock(resolveDynamicComponent(t.componentName), {
      name: t.animationName,
      onEnter: t.enter,
      onLeave: t.leave,
      onAfterLeave: t.clean
    }, {
      default: withCtx(() => [
        (openBlock(true), createElementBlock(Fragment, null, renderList(t.active, (o) => (openBlock(), createElementBlock("div", {
          key: o.id,
          class: "vue-notification-wrapper",
          style: normalizeStyle(t.notifyWrapperStyle(o)),
          "data-id": o.id,
          onMouseenter: e[0] || (e[0] = (...l) => t.pauseTimeout && t.pauseTimeout(...l)),
          onMouseleave: e[1] || (e[1] = (...l) => t.resumeTimeout && t.resumeTimeout(...l))
        }, [
          renderSlot(t.$slots, "body", {
            class: normalizeClass([t.classes, o.type]),
            item: o,
            close: () => t.destroy(o)
          }, () => [
            createBaseVNode("div", {
              class: normalizeClass(t.notifyClass(o)),
              onClick: (l) => t.destroyIfNecessary(o)
            }, [
              o.title ? (openBlock(), createElementBlock("div", {
                key: 0,
                class: "notification-title",
                innerHTML: o.title
              }, null, 8, Z)) : createCommentVNode("", true),
              createBaseVNode("div", {
                class: "notification-content",
                innerHTML: o.text
              }, null, 8, tt)
            ], 10, X)
          ])
        ], 44, U))), 128))
      ]),
      _: 3
    }, 40, ["name", "onEnter", "onLeave", "onAfterLeave"]))
  ], 4);
}
const it = /* @__PURE__ */ v(Q, [["render", et]]), A = (t) => {
  typeof t == "string" && (t = { title: "", text: t }), typeof t == "object" && d.emit("add", t);
};
A.close = (t) => {
  d.emit("close", t);
};
const rt = () => ({ notify: A });
function st(t, e = {}) {
  Object.entries(e).forEach((s) => C.set(...s));
  const i = e.name || "notify";
  t.config.globalProperties["$" + i] = A, t.component(e.componentName || "Notifications", it);
}
const at = {
  install: st
};
(function() {
  var o;
  try {
    if (typeof document != "undefined") {
      var e = document.createElement("style");
      e.nonce = (o = document.head.querySelector("meta[property=csp-nonce]")) == null ? void 0 : o.content, e.appendChild(document.createTextNode(".vue-notification-group{display:block;position:fixed;z-index:5000}.vue-notification-wrapper{display:block;overflow:hidden;width:100%;margin:0;padding:0}.notification-title{font-weight:600}.vue-notification-template{display:block;box-sizing:border-box;background:white;text-align:left}.vue-notification{display:block;box-sizing:border-box;text-align:left;font-size:12px;padding:10px;margin:0 5px 5px;color:#fff;background:#44A4FC;border-left:5px solid #187FE7}.vue-notification.warn{background:#ffb648;border-left-color:#f48a06}.vue-notification.error{background:#E54D42;border-left-color:#b82e24}.vue-notification.success{background:#68CD86;border-left-color:#42a85f}.vn-fade-enter-active,.vn-fade-leave-active,.vn-fade-move{transition:all .5s}.vn-fade-enter-from,.vn-fade-leave-to{opacity:0}")), document.head.appendChild(e);
    }
  } catch (i) {
    console.error("vite-plugin-css-injected-by-js", i);
  }
})();
async function useRemoveAllData() {
  const storage = injectStorage();
  await storage.saveIntervalList([]);
  await Browser.runtime.sendMessage(Messages.ClearAllData);
}
async function useRestoreData(json) {
  if (json != null && json != void 0 && json != "") {
    const data = JSON.parse(json);
    await Browser.runtime.sendMessage({
      message: Messages.Restore,
      data
    });
  }
}
const _hoisted_1$h = { class: "settings-item" };
const _hoisted_2$f = { class: "setting-header" };
const _hoisted_3$f = { class: "description" };
const _hoisted_4$d = { class: "settings-item" };
const _hoisted_5$c = { class: "setting-header" };
const _hoisted_6$b = { class: "description" };
const _hoisted_7$9 = { class: "settings-item" };
const _hoisted_8$8 = { class: "setting-header" };
const _hoisted_9$7 = { class: "settings-item" };
const _hoisted_10$7 = { class: "setting-header d-inline-block" };
const _hoisted_11$5 = { class: "d-inline-block ml-10" };
const _hoisted_12$4 = ["value"];
const _hoisted_13$4 = ["value"];
const _hoisted_14$3 = ["value"];
const _hoisted_15$3 = ["value"];
const _hoisted_16$2 = ["value"];
const _hoisted_17$2 = ["value"];
const _hoisted_18$1 = ["value"];
const _hoisted_19$1 = ["value"];
const _hoisted_20$1 = { class: "description" };
const _hoisted_21$1 = { class: "settings-item" };
const _hoisted_22$1 = { class: "setting-header d-inline-block" };
const _hoisted_23$1 = { class: "description" };
const _hoisted_24$1 = { class: "export-block" };
const _hoisted_25$1 = ["onClick"];
const _hoisted_26$1 = ["value"];
const _hoisted_27$1 = { class: "settings-item" };
const _hoisted_28$1 = { class: "setting-header d-inline-block" };
const _hoisted_29$1 = { class: "description" };
const _hoisted_30$1 = ["value"];
const _hoisted_31$1 = { class: "settings-item" };
const _hoisted_32$1 = { class: "setting-header d-inline-block" };
const _hoisted_33$1 = { class: "description" };
const _hoisted_34$1 = ["value"];
const _hoisted_35$1 = ["value"];
const _hoisted_36$1 = { class: "settings-item" };
const _hoisted_37$1 = { class: "setting-header" };
const _hoisted_38$1 = { class: "description" };
const _hoisted_39$1 = {
  key: 0,
  id: "removeAllConfirmModal",
  class: "modal"
};
const _hoisted_40$1 = { class: "modal-content" };
const _hoisted_41 = { class: "text-center" };
const _hoisted_42 = { class: "text-center" };
const _hoisted_43 = ["value"];
const _hoisted_44 = ["value"];
const __default__$f = {
  name: "GeneralSettings"
};
const _sfc_main$h = /* @__PURE__ */ defineComponent({
  ...__default__$f,
  setup(__props) {
    const { t } = useI18n();
    const settingsStorage = injectStorage();
    const notification = rt();
    const viewTimeInBadge = ref();
    const intervalInactivity = ref();
    const allowDeferringBlock = ref();
    const darkMode = ref();
    const selectedDate = ref();
    const presetRanges = ranges();
    const needToConfirmDeleteAllData = ref();
    const showChangelog = ref();
    const restoreFile = ref();
    onMounted(async () => {
      viewTimeInBadge.value = await settingsStorage.getValue(
        StorageParams.VIEW_TIME_IN_BADGE,
        VIEW_TIME_IN_BADGE_DEFAULT
      );
      intervalInactivity.value = await settingsStorage.getValue(
        StorageParams.INTERVAL_INACTIVITY,
        INTERVAL_INACTIVITY_DEFAULT
      );
      darkMode.value = await settingsStorage.getValue(StorageParams.DARK_MODE, DARK_MODE_DEFAULT);
      allowDeferringBlock.value = await settingsStorage.getValue(
        StorageParams.BLOCK_DEFERRAL,
        BLOCK_DEFERRAL_DEFAULT
      );
      selectedDate.value = ThisWeekRange;
      showChangelog.value = await settingsStorage.getValue(
        StorageParams.SHOW_CHANGELOG,
        SHOW_CHANGELOG_DEFAULT
      );
    });
    async function onChange(storageParam, target) {
      if (target != null)
        await save(
          storageParam,
          storageParam == StorageParams.INTERVAL_INACTIVITY ? Number(target.value) : target.checked
        );
      if (storageParam == StorageParams.DARK_MODE)
        applyDarkMode(target.checked);
    }
    async function save(storageParam, value) {
      if (value != void 0)
        await settingsStorage.saveValue(storageParam, value);
    }
    async function handleDate(modelData) {
      selectedDate.value = modelData;
    }
    async function exportToCsv() {
      var _a, _b;
      const dateFrom = (_a = selectedDate.value) == null ? void 0 : _a[0];
      const dateTo = (_b = selectedDate.value) == null ? void 0 : _b[1];
      if (dateFrom == void 0 || dateTo == void 0) {
        notification.notify({
          title: "No time period selected",
          type: "warn"
        });
      } else {
        const csv = await useImportToCsv(dateFrom, dateTo);
        useFile(
          csv,
          FileType.CSV,
          `websites_${dateFrom.toLocaleDateString()}-${dateTo.toLocaleDateString()}.csv`
        );
      }
    }
    async function removeAll() {
      needToConfirmDeleteAllData.value = true;
    }
    async function removeAllConfirm() {
      await useRemoveAllData();
      needToConfirmDeleteAllData.value = false;
    }
    function cancel() {
      needToConfirmDeleteAllData.value = false;
    }
    async function backup() {
      const repo = await injectTabsRepository();
      const tabs = repo.getTabs();
      const json = JSON.stringify(tabs);
      useFile(json, FileType.JSON, `backup-${todayLocalDate()}.json`);
    }
    function restore() {
      restoreFile.value.click();
    }
    function restoreFileUpload() {
      try {
        const file = restoreFile.value.files[0];
        if (file != null && file.type === FileType.JSON) {
          var reader = new FileReader();
          reader.readAsText(file, "UTF-8");
          reader.onload = async (readerEvent) => {
            var _a;
            if (readerEvent != null) {
              let content = (_a = readerEvent.target) == null ? void 0 : _a.result;
              if (content != null) {
                await useRestoreData(content);
              }
            }
          };
        } else {
          notification.notify({
            title: "Wrong restore file format",
            type: "warn"
          });
        }
      } catch {
        notification.notify({
          title: "Wrong restore file format",
          type: "warn"
        });
      }
    }
    return (_ctx, _cache) => {
      const _component_VueDatePicker = resolveComponent("VueDatePicker");
      return openBlock(), createElementBlock(Fragment, null, [
        createBaseVNode("div", _hoisted_1$h, [
          createBaseVNode("label", _hoisted_2$f, [
            withDirectives(createBaseVNode("input", {
              type: "checkbox",
              class: "filled-in",
              id: "viewTimeInBadge",
              "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => viewTimeInBadge.value = $event),
              onChange: _cache[1] || (_cache[1] = ($event) => onChange(unref(StorageParams).VIEW_TIME_IN_BADGE, $event.target))
            }, null, 544), [
              [vModelCheckbox, viewTimeInBadge.value]
            ]),
            createBaseVNode("span", null, toDisplayString(unref(t)("viewTimeInBadge.message")), 1),
            createBaseVNode("p", _hoisted_3$f, toDisplayString(unref(t)("viewTimeInBadge.description")), 1)
          ])
        ]),
        createBaseVNode("div", _hoisted_4$d, [
          createBaseVNode("label", _hoisted_5$c, [
            withDirectives(createBaseVNode("input", {
              type: "checkbox",
              class: "filled-in",
              id: "blockDeferral",
              "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => allowDeferringBlock.value = $event),
              onChange: _cache[3] || (_cache[3] = ($event) => onChange(unref(StorageParams).BLOCK_DEFERRAL, $event.target))
            }, null, 544), [
              [vModelCheckbox, allowDeferringBlock.value]
            ]),
            createBaseVNode("span", null, toDisplayString(unref(t)("allowDeferringBlock.message")), 1),
            createBaseVNode("p", _hoisted_6$b, toDisplayString(unref(t)("allowDeferringBlock.description")), 1)
          ])
        ]),
        createBaseVNode("div", _hoisted_7$9, [
          createBaseVNode("label", _hoisted_8$8, [
            withDirectives(createBaseVNode("input", {
              type: "checkbox",
              class: "filled-in",
              id: "darkMode",
              "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => darkMode.value = $event),
              onChange: _cache[5] || (_cache[5] = ($event) => onChange(unref(StorageParams).DARK_MODE, $event.target))
            }, null, 544), [
              [vModelCheckbox, darkMode.value]
            ]),
            createBaseVNode("span", null, toDisplayString(unref(t)("darkTheme.message")), 1)
          ])
        ]),
        createBaseVNode("div", _hoisted_9$7, [
          createBaseVNode("label", _hoisted_10$7, toDisplayString(unref(t)("intervalInactivity.message")), 1),
          createBaseVNode("div", _hoisted_11$5, [
            withDirectives(createBaseVNode("select", {
              class: "option",
              "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => intervalInactivity.value = $event),
              onChange: _cache[7] || (_cache[7] = ($event) => onChange(unref(StorageParams).INTERVAL_INACTIVITY, $event.target))
            }, [
              createBaseVNode("option", {
                value: unref(InactivityInterval).Seconds_30
              }, "30 " + toDisplayString(unref(t)("sec.message")), 9, _hoisted_12$4),
              createBaseVNode("option", {
                value: unref(InactivityInterval).Seconds_45
              }, "45 " + toDisplayString(unref(t)("sec.message")), 9, _hoisted_13$4),
              createBaseVNode("option", {
                value: unref(InactivityInterval).Min_1
              }, "1 " + toDisplayString(unref(t)("min.message")), 9, _hoisted_14$3),
              createBaseVNode("option", {
                value: unref(InactivityInterval).Min_2
              }, "2 " + toDisplayString(unref(t)("2min.message")), 9, _hoisted_15$3),
              createBaseVNode("option", {
                value: unref(InactivityInterval).Min_5
              }, "5 " + toDisplayString(unref(t)("mins.message")), 9, _hoisted_16$2),
              createBaseVNode("option", {
                value: unref(InactivityInterval).Min_10
              }, "10 " + toDisplayString(unref(t)("mins.message")), 9, _hoisted_17$2),
              createBaseVNode("option", {
                value: unref(InactivityInterval).Min_20
              }, "20 " + toDisplayString(unref(t)("mins.message")), 9, _hoisted_18$1),
              createBaseVNode("option", {
                value: unref(InactivityInterval).Min_30
              }, "30 " + toDisplayString(unref(t)("mins.message")), 9, _hoisted_19$1)
            ], 544), [
              [vModelSelect, intervalInactivity.value]
            ])
          ]),
          createBaseVNode("p", _hoisted_20$1, toDisplayString(unref(t)("intervalInactivity.description")), 1)
        ]),
        createBaseVNode("div", _hoisted_21$1, [
          createBaseVNode("label", _hoisted_22$1, toDisplayString(unref(t)("exportToCsvSetting.message")), 1),
          createBaseVNode("p", _hoisted_23$1, toDisplayString(unref(t)("exportToCsvSetting.description")), 1),
          createBaseVNode("div", _hoisted_24$1, [
            createVNode(_component_VueDatePicker, {
              range: "",
              "enable-time-picker": false,
              class: "date-picker",
              modelValue: selectedDate.value,
              "onUpdate:modelValue": [
                _cache[8] || (_cache[8] = ($event) => selectedDate.value = $event),
                handleDate
              ],
              "preset-ranges": unref(presetRanges)
            }, {
              yearly: withCtx(({ label, range, presetDateRange }) => [
                createBaseVNode("span", {
                  onClick: ($event) => presetDateRange(range)
                }, toDisplayString(label), 9, _hoisted_25$1)
              ]),
              _: 1
            }, 8, ["modelValue", "preset-ranges"]),
            createBaseVNode("input", {
              type: "button",
              value: unref(t)("exportToCsv.message"),
              onClick: _cache[9] || (_cache[9] = ($event) => exportToCsv())
            }, null, 8, _hoisted_26$1)
          ])
        ]),
        createBaseVNode("div", _hoisted_27$1, [
          createBaseVNode("label", _hoisted_28$1, toDisplayString(unref(t)("removeAllData.message")), 1),
          createBaseVNode("p", _hoisted_29$1, toDisplayString(unref(t)("removeAllData.description")), 1),
          createBaseVNode("input", {
            type: "button",
            value: unref(t)("remove.message"),
            onClick: _cache[10] || (_cache[10] = ($event) => removeAll())
          }, null, 8, _hoisted_30$1)
        ]),
        createBaseVNode("div", _hoisted_31$1, [
          createBaseVNode("label", _hoisted_32$1, toDisplayString(unref(t)("backupAndRestore.message")), 1),
          createBaseVNode("p", _hoisted_33$1, toDisplayString(unref(t)("backupAndRestore.description")), 1),
          createBaseVNode("input", {
            type: "button",
            value: unref(t)("backup.message"),
            onClick: _cache[11] || (_cache[11] = ($event) => backup())
          }, null, 8, _hoisted_34$1),
          createBaseVNode("input", {
            type: "file",
            ref_key: "restoreFile",
            ref: restoreFile,
            style: { "display": "none" },
            onChange: _cache[12] || (_cache[12] = ($event) => restoreFileUpload()),
            accept: "application/json"
          }, null, 544),
          createBaseVNode("input", {
            type: "button",
            class: "ml-10",
            value: unref(t)("restore.message"),
            onClick: _cache[13] || (_cache[13] = ($event) => restore())
          }, null, 8, _hoisted_35$1)
        ]),
        createBaseVNode("div", _hoisted_36$1, [
          createBaseVNode("label", _hoisted_37$1, [
            withDirectives(createBaseVNode("input", {
              type: "checkbox",
              class: "filled-in",
              id: "showChangelog",
              "onUpdate:modelValue": _cache[14] || (_cache[14] = ($event) => showChangelog.value = $event),
              onChange: _cache[15] || (_cache[15] = ($event) => onChange(unref(StorageParams).SHOW_CHANGELOG, $event.target))
            }, null, 544), [
              [vModelCheckbox, showChangelog.value]
            ]),
            createBaseVNode("span", null, toDisplayString(unref(t)("showChangelog.message")), 1),
            createBaseVNode("p", _hoisted_38$1, toDisplayString(unref(t)("showChangelog.description")), 1)
          ])
        ]),
        needToConfirmDeleteAllData.value ? (openBlock(), createElementBlock("div", _hoisted_39$1, [
          createBaseVNode("div", _hoisted_40$1, [
            createBaseVNode("p", _hoisted_41, toDisplayString(unref(t)("removeAllDataConfirm.message")), 1),
            createBaseVNode("div", _hoisted_42, [
              createBaseVNode("input", {
                type: "button",
                class: "alert",
                value: unref(t)("remove.message"),
                onClick: _cache[16] || (_cache[16] = ($event) => removeAllConfirm())
              }, null, 8, _hoisted_43),
              createBaseVNode("input", {
                type: "button",
                class: "info ml-10",
                value: unref(t)("cancel.message"),
                onClick: _cache[17] || (_cache[17] = ($event) => cancel())
              }, null, 8, _hoisted_44)
            ])
          ])
        ])) : createCommentVNode("", true)
      ], 64);
    };
  }
});
const GeneralSettings_vue_vue_type_style_index_0_scoped_b0c94db4_lang = "";
const GeneralSettings = /* @__PURE__ */ _export_sfc(_sfc_main$h, [["__scopeId", "data-v-b0c94db4"]]);
const _imports_0$4 = "/clear-youtube-promo.png";
const _hoisted_1$g = {
  key: 0,
  class: "modal"
};
const _hoisted_2$e = { class: "modal-content promo" };
const _hoisted_3$e = { class: "title" };
const _hoisted_4$c = { class: "text" };
const _hoisted_5$b = { class: "text features" };
const _hoisted_6$a = { class: "text-center" };
const _hoisted_7$8 = ["value"];
const _hoisted_8$7 = ["value"];
const PROMPT_AT_TIME_OF_DAY = 12;
const ADD_DAYS_INITIAL = 2;
const ADD_DAYS_COUNT = 5;
const _sfc_main$g = /* @__PURE__ */ defineComponent({
  __name: "PromoCleanYoutubeModal",
  setup(__props) {
    const { t } = useI18n();
    const settingsStorage = injectStorage();
    const showPromo = ref();
    onMounted(async () => {
      const promoDate = await settingsStorage.getValue(StorageParams.PROMO_CLEAR_YOUTUBE_DATE);
      if (promoDate == void 0) {
        let nextTime = await settingsStorage.getValue(StorageParams.PROMO_CLEAR_YOUTUBE_PROMPT_AT);
        if (nextTime == void 0) {
          await settingsStorage.saveValue(
            StorageParams.PROMO_CLEAR_YOUTUBE_PROMPT_AT,
            addDays(addHours(startOfToday(), PROMPT_AT_TIME_OF_DAY), ADD_DAYS_INITIAL).toString()
          );
        } else {
          nextTime = new Date(nextTime);
          if (nextTime < /* @__PURE__ */ new Date())
            showPromo.value = true;
        }
      }
    });
    async function close() {
      showPromo.value = false;
      await settingsStorage.saveValue(
        StorageParams.PROMO_CLEAR_YOUTUBE_PROMPT_AT,
        addDays(addHours(startOfToday(), PROMPT_AT_TIME_OF_DAY), ADD_DAYS_COUNT).toString()
      );
    }
    async function openUrl() {
      window.open(CHROME_STORE_CLEAR_YOUTUBE_URL, "_blank");
      await settingsStorage.saveValue(StorageParams.PROMO_CLEAR_YOUTUBE_DATE, (/* @__PURE__ */ new Date()).toString());
    }
    return (_ctx, _cache) => {
      return showPromo.value ? (openBlock(), createElementBlock("div", _hoisted_1$g, [
        createBaseVNode("div", _hoisted_2$e, [
          createBaseVNode("p", _hoisted_3$e, toDisplayString(unref(t)("cleanYoutube_promo.message")), 1),
          _cache[2] || (_cache[2] = createBaseVNode("div", { class: "img-block" }, [
            createBaseVNode("img", { src: _imports_0$4 })
          ], -1)),
          createBaseVNode("p", _hoisted_4$c, toDisplayString(unref(t)("cleanYoutube_description.message")) + " " + toDisplayString(unref(t)("cleanYoutube_description2.message")), 1),
          createBaseVNode("p", _hoisted_5$b, toDisplayString(unref(t)("cleanYoutube_features.message")), 1),
          createBaseVNode("ul", null, [
            createBaseVNode("li", null, "✅ " + toDisplayString(unref(t)("cleanYoutube_features1.message")), 1),
            createBaseVNode("li", null, "✅ " + toDisplayString(unref(t)("cleanYoutube_features2.message")), 1),
            createBaseVNode("li", null, "✅ " + toDisplayString(unref(t)("cleanYoutube_features3.message")), 1),
            createBaseVNode("li", null, "✅ " + toDisplayString(unref(t)("cleanYoutube_features4.message")), 1)
          ]),
          createBaseVNode("div", _hoisted_6$a, [
            createBaseVNode("input", {
              type: "button",
              value: unref(t)("try.message"),
              onClick: _cache[0] || (_cache[0] = ($event) => openUrl())
            }, null, 8, _hoisted_7$8),
            createBaseVNode("input", {
              type: "button",
              class: "info ml-10",
              value: unref(t)("close.message"),
              onClick: _cache[1] || (_cache[1] = ($event) => close())
            }, null, 8, _hoisted_8$7)
          ])
        ])
      ])) : createCommentVNode("", true);
    };
  }
});
const PromoCleanYoutubeModal_vue_vue_type_style_index_0_scoped_de2ce795_lang = "";
const PromoCleanYoutubeModal = /* @__PURE__ */ _export_sfc(_sfc_main$g, [["__scopeId", "data-v-de2ce795"]]);
const _imports_0$3 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAAigAAAIoBlCJR2wAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAFBSURBVDiNjZGxS0JRFIe/c68N2dhgWEFROji5lIQJahhB9Oe6aPgkiAJ3l0oSs62hUJf33j0tKvJ6zzzj4Xzf5f5+Mqmf3yPsitm63Wk/frLBTBvlrDq/ifJlEPaAojrfmzbK2Q1hDygCGWNCuRHhFcir87uz+sV+Ejy5KmXU+W0gDwytM3cCMKuWDjSlniqnwItRW0t3nsZRGLQDFIChDU11u/v8LouDdZIkGEBWX4mTOHFBEvxHEJUIDBSC5Z8jcKxgRfKgyvF89WFDU4nCAKk4gbP4KMFyoQRqxI+7NdHFSmA5YCzIEOHISejFVWwS4EVgl2JdReANyMVJZA28DGx2fXaooXgKJ0Qqlv/gxSRJZBN4ncSAtoCCwsBYja1qMelWbyRWawqDeSZNA3wDfWu1mm71RknwqsRarQJ94OcXgrPje7Q9MoQAAAAASUVORK5CYII=";
function getFavicon(url) {
  return `https://www.google.com/s2/favicons?domain=${url}&sz=64`;
}
const _hoisted_1$f = { class: "title mt-0" };
const _hoisted_2$d = {
  readonly: "",
  class: "url-list"
};
const _hoisted_3$d = ["onClick"];
const _hoisted_4$b = { class: "mt-20" };
const _hoisted_5$a = ["placeholder"];
const _hoisted_6$9 = ["value", "disabled"];
const __default__$e = {
  name: "WhiteList"
};
const _sfc_main$f = /* @__PURE__ */ defineComponent({
  ...__default__$e,
  setup(__props) {
    const { t } = useI18n();
    const notification = rt();
    const settingsStorage = injectStorage();
    const whiteList = ref();
    const newWebsiteForWhiteList = ref();
    onMounted(async () => {
      whiteList.value = Object.values(await settingsStorage.getValue(StorageParams.BLACK_LIST, []));
    });
    function addToWhiteList() {
      var _a, _b;
      const existingItem = (_a = whiteList.value) == null ? void 0 : _a.find(
        (x) => isDomainEquals(extractHostname(x), extractHostname(newWebsiteForWhiteList.value))
      );
      if (existingItem !== void 0) {
        notification.notify({
          title: "You have already added this site",
          type: "error"
        });
      } else {
        const newWebsite = extractHostname(newWebsiteForWhiteList.value);
        (_b = whiteList.value) == null ? void 0 : _b.push(newWebsite);
        save(whiteList.value);
        newWebsiteForWhiteList.value = "";
      }
    }
    function deleteFromWhiteList(url) {
      whiteList.value = whiteList.value.filter((x) => x != url);
      save(whiteList.value);
    }
    async function save(value) {
      if (value != void 0)
        await settingsStorage.saveValue(StorageParams.BLACK_LIST, value);
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", null, [
        createBaseVNode("p", _hoisted_1$f, toDisplayString(unref(t)("whiteList.message")), 1),
        createBaseVNode("ul", _hoisted_2$d, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(whiteList.value, (url, i) => {
            return openBlock(), createElementBlock("li", { key: i }, [
              createBaseVNode("div", null, [
                createBaseVNode("img", {
                  src: _imports_0$3,
                  height: "16",
                  onClick: ($event) => deleteFromWhiteList(url)
                }, null, 8, _hoisted_3$d),
                createVNode(Favicon, {
                  type: unref(TypeOfUrl).WebSite,
                  favicon: unref(getFavicon)(url)
                }, null, 8, ["type", "favicon"]),
                createBaseVNode("span", null, toDisplayString(url), 1)
              ])
            ]);
          }), 128))
        ]),
        createBaseVNode("div", _hoisted_4$b, [
          withDirectives(createBaseVNode("input", {
            type: "text",
            class: "d-inline-block custom-width",
            placeholder: unref(t)("enterWebsite.message"),
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => newWebsiteForWhiteList.value = $event)
          }, null, 8, _hoisted_5$a), [
            [vModelText, newWebsiteForWhiteList.value]
          ]),
          createBaseVNode("input", {
            type: "button",
            class: "d-inline-block small-btn ml-10",
            value: unref(t)("addWebsite.message"),
            disabled: newWebsiteForWhiteList.value == null || newWebsiteForWhiteList.value == "",
            onClick: _cache[1] || (_cache[1] = ($event) => addToWhiteList())
          }, null, 8, _hoisted_6$9)
        ])
      ]);
    };
  }
});
const WhiteList_vue_vue_type_style_index_0_scoped_aa3dcfc2_lang = "";
const WhiteList = /* @__PURE__ */ _export_sfc(_sfc_main$f, [["__scopeId", "data-v-aa3dcfc2"]]);
const _imports_1$2 = "/edit.svg";
class Restriction {
  constructor(domain, hours, minutes) {
    __publicField(this, "domain");
    __publicField(this, "time");
    this.domain = domain;
    this.time = convertHHMMToSeconds(hours, minutes);
  }
}
const _hoisted_1$e = { class: "limits-time-block mb-20" };
const _hoisted_2$c = ["disabled", "placeholder"];
const _hoisted_3$c = ["value", "disabled"];
const _hoisted_4$a = {
  key: 0,
  class: "mt-10"
};
const _hoisted_5$9 = { class: "block-checkbox" };
const _hoisted_6$8 = {
  readonly: "",
  class: "url-list"
};
const _hoisted_7$7 = ["onClick"];
const _hoisted_8$6 = ["onClick"];
const _hoisted_9$6 = {
  key: 0,
  class: "time-value d-inline-block"
};
const _hoisted_10$6 = {
  key: 1,
  class: "blocked"
};
const __default__$d = {
  name: "ListWithTime"
};
const _sfc_main$e = /* @__PURE__ */ defineComponent({
  ...__default__$d,
  props: {
    type: {}
  },
  setup(__props) {
    const { t } = useI18n();
    const props = __props;
    const notification = rt();
    const settingsStorage = injectStorage();
    const list = ref();
    const isEdit = ref();
    const time = ref({
      hours: 0,
      minutes: 30
    });
    const newWebsiteForList = ref();
    const storageParam = ref();
    const isCheckedCompletelyBlocked = computed(
      () => time.value != void 0 && time.value.hours == 0 && time.value.minutes == 0
    );
    const showCompletelyBlockValue = computed(
      () => props.type == ListWithTime.Limits && newWebsiteForList.value != void 0 && newWebsiteForList.value != ""
    );
    onMounted(async () => {
      switch (props.type) {
        case ListWithTime.Limits:
          list.value = Object.values(
            await settingsStorage.getValue(StorageParams.RESTRICTION_LIST, [])
          );
          storageParam.value = StorageParams.RESTRICTION_LIST;
          break;
        case ListWithTime.Notifications:
          list.value = Object.values(
            await settingsStorage.getValue(StorageParams.NOTIFICATION_LIST, [])
          );
          storageParam.value = StorageParams.NOTIFICATION_LIST;
          break;
      }
    });
    function addToList() {
      var _a, _b;
      const existingItem = (_a = list.value) == null ? void 0 : _a.find(
        (x) => isDomainEquals(extractHostname(x.domain), extractHostname(newWebsiteForList.value))
      );
      if (existingItem !== void 0) {
        notification.notify({
          title: "You have already added this site",
          type: "error"
        });
      } else {
        const newLimit = new Restriction(
          extractHostname(newWebsiteForList.value),
          time.value.hours,
          time.value.minutes
        );
        (_b = list.value) == null ? void 0 : _b.push(newLimit);
        save(list.value);
        newWebsiteForList.value = "";
      }
    }
    function completelyBlock() {
      time.value.hours = 0;
      time.value.minutes = 0;
    }
    function completelyBlocked(time2) {
      return props.type == ListWithTime.Limits && time2 == 0;
    }
    function getTime(time2) {
      const timeObj = convertSecondsToHHMM(time2);
      return `${timeObj.hours}:${timeObj.minutes < 10 ? "0" + timeObj.minutes : timeObj.minutes}`;
    }
    const isDisabledSaving = computed(() => {
      var _a, _b;
      if (props.type == ListWithTime.Notifications && ((_a = time.value) == null ? void 0 : _a.hours) == 0 && ((_b = time.value) == null ? void 0 : _b.minutes) == 0)
        return true;
      return newWebsiteForList.value == "" || newWebsiteForList.value == void 0 || time.value == null;
    });
    function deleteFromList(url) {
      list.value = list.value.filter((x) => x.domain != url);
      save(list.value);
      newWebsiteForList.value = "";
      isEdit.value = false;
    }
    function editItemFromList(url, timeForUrl) {
      isEdit.value = true;
      newWebsiteForList.value = url;
      const timeObj = convertSecondsToHHMM(timeForUrl);
      time.value.hours = timeObj.hours;
      time.value.minutes = timeObj.minutes;
    }
    function editItem() {
      var _a;
      const existingItem = (_a = list.value) == null ? void 0 : _a.find(
        (x) => isDomainEquals(extractHostname(x.domain), extractHostname(newWebsiteForList.value))
      );
      if (existingItem != void 0) {
        existingItem.time = convertHHMMToSeconds(time.value.hours, time.value.minutes);
        save(list.value);
        newWebsiteForList.value = "";
        isEdit.value = false;
      }
    }
    async function save(value) {
      if (value != void 0)
        await settingsStorage.saveValue(storageParam.value, value);
    }
    return (_ctx, _cache) => {
      const _component_VueDatePicker = resolveComponent("VueDatePicker");
      return openBlock(), createElementBlock(Fragment, null, [
        createBaseVNode("div", _hoisted_1$e, [
          withDirectives(createBaseVNode("input", {
            type: "text",
            disabled: isEdit.value,
            class: "d-inline-block",
            placeholder: unref(t)("enterWebsite.message"),
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => newWebsiteForList.value = $event)
          }, null, 8, _hoisted_2$c), [
            [vModelText, newWebsiteForList.value]
          ]),
          createVNode(_component_VueDatePicker, {
            modelValue: time.value,
            "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => time.value = $event),
            "time-picker": "",
            class: "date-picker height"
          }, null, 8, ["modelValue"]),
          createBaseVNode("input", {
            type: "button",
            class: "d-inline-block small-btn",
            value: !isEdit.value ? unref(t)("addWebsite.message") : unref(t)("save.message"),
            disabled: isDisabledSaving.value,
            onClick: _cache[2] || (_cache[2] = ($event) => isEdit.value ? editItem() : addToList())
          }, null, 8, _hoisted_3$c)
        ]),
        showCompletelyBlockValue.value ? (openBlock(), createElementBlock("div", _hoisted_4$a, [
          createBaseVNode("label", _hoisted_5$9, [
            withDirectives(createBaseVNode("input", {
              type: "checkbox",
              class: "filled-in",
              id: "viewTimeInBadge",
              "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => isCheckedCompletelyBlocked.value = $event),
              onChange: completelyBlock
            }, null, 544), [
              [vModelCheckbox, isCheckedCompletelyBlocked.value]
            ]),
            createBaseVNode("span", null, toDisplayString(unref(t)("completelyBlocked.description")), 1)
          ])
        ])) : createCommentVNode("", true),
        createBaseVNode("ul", _hoisted_6$8, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(list.value, (limit, i) => {
            return openBlock(), createElementBlock("li", { key: i }, [
              createBaseVNode("div", null, [
                createBaseVNode("img", {
                  src: _imports_0$3,
                  height: "16",
                  onClick: ($event) => deleteFromList(limit.domain)
                }, null, 8, _hoisted_7$7),
                createBaseVNode("img", {
                  src: _imports_1$2,
                  height: "16",
                  onClick: ($event) => editItemFromList(limit.domain, limit.time)
                }, null, 8, _hoisted_8$6),
                createVNode(Favicon, {
                  type: unref(TypeOfUrl).WebSite,
                  favicon: unref(getFavicon)(limit.domain)
                }, null, 8, ["type", "favicon"]),
                createBaseVNode("span", null, toDisplayString(limit.domain), 1),
                createBaseVNode("div", null, [
                  !completelyBlocked(limit.time) ? (openBlock(), createElementBlock("p", _hoisted_9$6, toDisplayString(unref(t)("limit.message")) + " : " + toDisplayString(getTime(limit.time)), 1)) : createCommentVNode("", true),
                  completelyBlocked(limit.time) ? (openBlock(), createElementBlock("p", _hoisted_10$6, toDisplayString(unref(t)("completelyBlocked.message")), 1)) : createCommentVNode("", true)
                ])
              ])
            ]);
          }), 128))
        ])
      ], 64);
    };
  }
});
const ListWithTime_vue_vue_type_style_index_0_scoped_9b91aff4_lang = "";
const ListWithTimeComponent = /* @__PURE__ */ _export_sfc(_sfc_main$e, [["__scopeId", "data-v-9b91aff4"]]);
const _hoisted_1$d = { class: "title mt-0" };
const _hoisted_2$b = { class: "description" };
const _hoisted_3$b = { class: "description" };
const __default__$c = {
  name: "Limits"
};
const _sfc_main$d = /* @__PURE__ */ defineComponent({
  ...__default__$c,
  setup(__props) {
    const { t } = useI18n();
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", null, [
        createBaseVNode("p", _hoisted_1$d, toDisplayString(unref(t)("limits.message")), 1),
        createBaseVNode("p", _hoisted_2$b, toDisplayString(unref(t)("limits.description")), 1),
        createBaseVNode("p", _hoisted_3$b, toDisplayString(unref(t)("limitsTip.message")), 1),
        createVNode(ListWithTimeComponent, {
          type: unref(ListWithTime).Limits
        }, null, 8, ["type"]),
        createVNode(PromoClearYouTube)
      ]);
    };
  }
});
const Limits_vue_vue_type_style_index_0_scoped_05ed8f7c_lang = "";
const Limits = /* @__PURE__ */ _export_sfc(_sfc_main$d, [["__scopeId", "data-v-05ed8f7c"]]);
const _hoisted_1$c = { class: "settings-item" };
const _hoisted_2$a = { class: "setting-header" };
const _hoisted_3$a = { class: "description" };
const _hoisted_4$9 = { class: "settings-item" };
const _hoisted_5$8 = { class: "setting-header d-inline-block" };
const _hoisted_6$7 = { class: "settings-item" };
const _hoisted_7$6 = { class: "setting-header" };
const _hoisted_8$5 = { class: "description" };
const _hoisted_9$5 = { class: "settings-item" };
const _hoisted_10$5 = { class: "setting-header" };
const _hoisted_11$4 = { class: "description" };
const _hoisted_12$3 = ["placeholder"];
const _hoisted_13$3 = ["value", "disabled"];
const __default__$b = {
  name: "DailyNotifications"
};
const _sfc_main$c = /* @__PURE__ */ defineComponent({
  ...__default__$b,
  setup(__props) {
    const { t } = useI18n();
    const settingsStorage = injectStorage();
    const showDailyNotification = ref();
    const dailyNotificationTime = ref();
    const notificationTime = ref();
    const notificationMessage = ref();
    onMounted(async () => {
      showDailyNotification.value = await settingsStorage.getValue(
        StorageParams.DAILY_NOTIFICATION,
        DAILY_NOTIFICATION_DEFAULT
      );
      notificationMessage.value = await settingsStorage.getValue(
        StorageParams.NOTIFICATION_MESSAGE,
        NOTIFICATION_MESSAGE_DEFAULT
      );
      dailyNotificationTime.value = await settingsStorage.getValue(
        StorageParams.DAILY_SUMMARY_NOTIFICATION_TIME,
        DAILY_SUMMARY_NOTIFICATION_TIME_DEFAULT
      );
      const timeObj = convertSecondsToHHMM(dailyNotificationTime.value);
      notificationTime.value = timeObj;
    });
    async function saveNotificationMessage() {
      save(StorageParams.NOTIFICATION_MESSAGE, notificationMessage.value);
    }
    async function handleDate(modelData) {
      if (modelData != null) {
        notificationTime.value = modelData;
        await save(
          StorageParams.DAILY_SUMMARY_NOTIFICATION_TIME,
          convertHHMMToSeconds(notificationTime.value.hours, notificationTime.value.minutes)
        );
        Browser.runtime.sendMessage(Messages.RescheduleJobs);
      }
    }
    async function onChange(storageParam, target) {
      if (target != null)
        await save(storageParam, target.checked);
    }
    async function save(storageParam, value) {
      if (value != void 0)
        await settingsStorage.saveValue(storageParam, value);
    }
    return (_ctx, _cache) => {
      const _component_VueDatePicker = resolveComponent("VueDatePicker");
      return openBlock(), createElementBlock("div", null, [
        createBaseVNode("div", _hoisted_1$c, [
          createBaseVNode("label", _hoisted_2$a, [
            withDirectives(createBaseVNode("input", {
              type: "checkbox",
              class: "filled-in",
              id: "blockDeferral",
              "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => showDailyNotification.value = $event),
              onChange: _cache[1] || (_cache[1] = ($event) => onChange(unref(StorageParams).DAILY_NOTIFICATION, $event.target))
            }, null, 544), [
              [vModelCheckbox, showDailyNotification.value]
            ]),
            createBaseVNode("span", null, toDisplayString(unref(t)("showDailyNotification.message")), 1),
            createBaseVNode("p", _hoisted_3$a, toDisplayString(unref(t)("showDailyNotification.description")), 1)
          ])
        ]),
        createBaseVNode("div", _hoisted_4$9, [
          createBaseVNode("p", _hoisted_5$8, toDisplayString(unref(t)("notificationTimeSetting.message")), 1),
          createVNode(_component_VueDatePicker, {
            modelValue: notificationTime.value,
            "onUpdate:modelValue": [
              _cache[2] || (_cache[2] = ($event) => notificationTime.value = $event),
              handleDate
            ],
            "time-picker": "",
            class: "date-picker d-inline-block"
          }, null, 8, ["modelValue"])
        ]),
        createBaseVNode("div", _hoisted_6$7, [
          createBaseVNode("label", _hoisted_7$6, toDisplayString(unref(t)("notificationTime.message")), 1),
          createBaseVNode("p", _hoisted_8$5, toDisplayString(unref(t)("notificationTime.description")), 1),
          createVNode(ListWithTimeComponent, {
            type: unref(ListWithTime).Notifications
          }, null, 8, ["type"])
        ]),
        createBaseVNode("div", _hoisted_9$5, [
          createBaseVNode("label", _hoisted_10$5, toDisplayString(unref(t)("notificationMessage.message")), 1),
          createBaseVNode("p", _hoisted_11$4, toDisplayString(unref(t)("notificationMessage.description")), 1),
          withDirectives(createBaseVNode("input", {
            type: "text",
            class: "",
            placeholder: unref(t)("enterNotification.message"),
            "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => notificationMessage.value = $event)
          }, null, 8, _hoisted_12$3), [
            [vModelText, notificationMessage.value]
          ]),
          createBaseVNode("input", {
            type: "button",
            class: "d-inline-block small-btn ml-10 width",
            value: unref(t)("save.message"),
            disabled: notificationMessage.value == "",
            onClick: _cache[4] || (_cache[4] = ($event) => saveNotificationMessage())
          }, null, 8, _hoisted_13$3)
        ])
      ]);
    };
  }
});
const Notifications_vue_vue_type_style_index_0_scoped_3ec38a8c_lang = "";
const DailyNotifications = /* @__PURE__ */ _export_sfc(_sfc_main$c, [["__scopeId", "data-v-3ec38a8c"]]);
const _imports_0$2 = "/pomodoro.png";
const _imports_1$1 = "/pomodoro-rest.png";
const _imports_2 = "/stop.svg";
const _imports_3 = "/start.svg";
function playSound(sound) {
  const myAudio = new Audio(Browser.runtime.getURL(`assets/pomodoro-sounds/${sound}`));
  myAudio.play();
}
const _hoisted_1$b = { class: "title-audio d-inline-block" };
const _hoisted_2$9 = ["value"];
const _hoisted_3$9 = ["value"];
const _hoisted_4$8 = ["value"];
const _hoisted_5$7 = ["value"];
const _hoisted_6$6 = ["value"];
const _hoisted_7$5 = ["value"];
const _hoisted_8$4 = ["value"];
const _hoisted_9$4 = ["value"];
const _hoisted_10$4 = ["value"];
const _hoisted_11$3 = ["value"];
const _hoisted_12$2 = ["value"];
const _hoisted_13$2 = ["value"];
const _hoisted_14$2 = ["value"];
const _hoisted_15$2 = { class: "preview" };
const __default__$a = {
  name: "PomodoroSoundsSelector"
};
const _sfc_main$b = /* @__PURE__ */ defineComponent({
  ...__default__$a,
  props: {
    option: {},
    value: {}
  },
  setup(__props) {
    const props = __props;
    const { t } = useI18n();
    const settingsStorage = injectStorage();
    const audioAfterPeriod = ref(props.value);
    function playAudio() {
      playSound(audioAfterPeriod.value);
    }
    async function onAudioChange(target) {
      await settingsStorage.saveValue(props.option, target.value);
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        createBaseVNode("p", _hoisted_1$b, toDisplayString(unref(t)("pomodoroSoundAfter.message")), 1),
        withDirectives(createBaseVNode("select", {
          class: "option",
          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => audioAfterPeriod.value = $event),
          onChange: _cache[1] || (_cache[1] = ($event) => onAudioChange($event.target))
        }, [
          createBaseVNode("option", {
            value: unref(PomodoroSounds)["Sound 1"]
          }, toDisplayString(unref(t)("sound.message")) + " 1", 9, _hoisted_2$9),
          createBaseVNode("option", {
            value: unref(PomodoroSounds)["Sound 2"]
          }, toDisplayString(unref(t)("sound.message")) + " 2", 9, _hoisted_3$9),
          createBaseVNode("option", {
            value: unref(PomodoroSounds)["Sound 3"]
          }, toDisplayString(unref(t)("sound.message")) + " 3", 9, _hoisted_4$8),
          createBaseVNode("option", {
            value: unref(PomodoroSounds)["Sound 4"]
          }, toDisplayString(unref(t)("sound.message")) + " 4", 9, _hoisted_5$7),
          createBaseVNode("option", {
            value: unref(PomodoroSounds)["Sound 5"]
          }, toDisplayString(unref(t)("sound.message")) + " 5", 9, _hoisted_6$6),
          createBaseVNode("option", {
            value: unref(PomodoroSounds)["Sound 6"]
          }, toDisplayString(unref(t)("sound.message")) + " 6", 9, _hoisted_7$5),
          createBaseVNode("option", {
            value: unref(PomodoroSounds)["Sound 7"]
          }, toDisplayString(unref(t)("sound.message")) + " 7", 9, _hoisted_8$4),
          createBaseVNode("option", {
            value: unref(PomodoroSounds)["Sound 8"]
          }, toDisplayString(unref(t)("sound.message")) + " 8", 9, _hoisted_9$4),
          createBaseVNode("option", {
            value: unref(PomodoroSounds)["Sound 9"]
          }, toDisplayString(unref(t)("sound.message")) + " 9", 9, _hoisted_10$4),
          createBaseVNode("option", {
            value: unref(PomodoroSounds)["Sound 10"]
          }, toDisplayString(unref(t)("sound.message")) + " 10", 9, _hoisted_11$3),
          createBaseVNode("option", {
            value: unref(PomodoroSounds)["Sound 11"]
          }, toDisplayString(unref(t)("sound.message")) + " 11", 9, _hoisted_12$2),
          createBaseVNode("option", {
            value: unref(PomodoroSounds)["Sound 12"]
          }, toDisplayString(unref(t)("sound.message")) + " 12", 9, _hoisted_13$2),
          createBaseVNode("option", {
            value: unref(PomodoroSounds)["Sound 13"]
          }, toDisplayString(unref(t)("sound.message")) + " 13", 9, _hoisted_14$2)
        ], 544), [
          [vModelSelect, audioAfterPeriod.value]
        ]),
        createBaseVNode("img", {
          src: _imports_3,
          height: "22",
          onClick: playAudio,
          class: "play"
        }),
        createBaseVNode("span", _hoisted_15$2, toDisplayString(unref(t)("clickToPreview.message")), 1)
      ], 64);
    };
  }
});
const PomodoroSoundsSelector_vue_vue_type_style_index_0_scoped_4951eca4_lang = "";
const PomodoroSoundsSelector = /* @__PURE__ */ _export_sfc(_sfc_main$b, [["__scopeId", "data-v-4951eca4"]]);
const _hoisted_1$a = { class: "title mt-0" };
const _hoisted_2$8 = { class: "description" };
const _hoisted_3$8 = { class: "explanation-block" };
const _hoisted_4$7 = { class: "explanation" };
const _hoisted_5$6 = { class: "explanation" };
const _hoisted_6$5 = { class: "explanation" };
const _hoisted_7$4 = { class: "pomodoro-block mt-20" };
const _hoisted_8$3 = { class: "title" };
const _hoisted_9$3 = { class: "pomodoro-block" };
const _hoisted_10$3 = { class: "pomodoro-block" };
const _hoisted_11$2 = { class: "title" };
const _hoisted_12$1 = { class: "pomodoro-block" };
const _hoisted_13$1 = { class: "pomodoro-block" };
const _hoisted_14$1 = { class: "title" };
const _hoisted_15$1 = { class: "pomodoro-block" };
const _hoisted_16$1 = {
  key: 0,
  class: "ml-5",
  src: _imports_2,
  height: "20"
};
const _hoisted_17$1 = {
  key: 1,
  class: "ml-5",
  src: _imports_3,
  height: "22"
};
const __default__$9 = {
  name: "Pomodoro"
};
const _sfc_main$a = /* @__PURE__ */ defineComponent({
  ...__default__$9,
  setup(__props) {
    const { t } = useI18n();
    const settingsStorage = injectStorage();
    const workTime = ref({
      hours: 0,
      minutes: 25
    });
    const restTime = ref({
      hours: 0,
      minutes: 5
    });
    const frequency = ref(3);
    const isEnabled = ref();
    const audioAfterWork = ref();
    const audioAfterRest = ref();
    const audioAfterFinished = ref();
    const isDisabled = computed(
      () => frequency.value <= 0 || timeIsEmpty(workTime) || timeIsEmpty(restTime)
    );
    onMounted(async () => {
      isEnabled.value = await settingsStorage.getValue(
        StorageParams.IS_POMODORO_ENABLED,
        IS_POMODORO_ENABLED_DEFAULT
      );
      workTime.value = convertSecondsToHHMM(
        await settingsStorage.getValue(
          StorageParams.POMODORO_INTERVAL_WORK,
          POMODORO_INTERVAL_WORK_DEFAULT
        )
      );
      restTime.value = convertSecondsToHHMM(
        await settingsStorage.getValue(
          StorageParams.POMODORO_INTERVAL_REST,
          POMODORO_INTERVAL_REST_DEFAULT
        )
      );
      frequency.value = await settingsStorage.getValue(
        StorageParams.POMODORO_FREQUENCY,
        POMODORO_FREQUENCY_DEFAULT
      );
      audioAfterWork.value = await settingsStorage.getValue(
        StorageParams.POMODORO_AUDIO_AFTER_WORK,
        POMODORO_AUDIO_AFTER_WORK_DEFAULT
      );
      audioAfterRest.value = await settingsStorage.getValue(
        StorageParams.POMODORO_AUDIO_AFTER_REST,
        POMODORO_AUDIO_AFTER_REST_DEFAULT
      );
      audioAfterFinished.value = await settingsStorage.getValue(
        StorageParams.POMODORO_AUDIO_AFTER_FINISHED,
        POMODORO_AUDIO_AFTER_FINISHED_DEFAULT
      );
    });
    function timeIsEmpty(time) {
      return time.value == void 0 || time.value.hours == 0 && time.value.minutes == 0;
    }
    async function changeStatus() {
      await settingsStorage.saveValue(StorageParams.IS_POMODORO_ENABLED, !isEnabled.value);
      await settingsStorage.saveValue(
        StorageParams.POMODORO_INTERVAL_WORK,
        convertHHMMToSeconds(workTime.value.hours, workTime.value.minutes)
      );
      await settingsStorage.saveValue(
        StorageParams.POMODORO_INTERVAL_REST,
        convertHHMMToSeconds(restTime.value.hours, restTime.value.minutes)
      );
      await settingsStorage.saveValue(StorageParams.POMODORO_START_TIME, (/* @__PURE__ */ new Date()).toString());
      await settingsStorage.saveValue(StorageParams.POMODORO_FREQUENCY, frequency.value);
      isEnabled.value = !isEnabled.value;
      if (isEnabled.value)
        await useBadge({
          text: null,
          color: BadgeColor.none,
          icon: BadgeIcon.pomodoroWorkingTime
        });
      else {
        await settingsStorage.saveValue(StorageParams.POMODORO_START_TIME, null);
        await useBadge({
          text: null,
          color: BadgeColor.none,
          icon: BadgeIcon.default
        });
      }
      logger.log(`Change pomodoro status to ${String(isEnabled.value).toUpperCase()}`);
    }
    return (_ctx, _cache) => {
      const _component_VueDatePicker = resolveComponent("VueDatePicker");
      return openBlock(), createElementBlock(Fragment, null, [
        createBaseVNode("p", _hoisted_1$a, toDisplayString(unref(t)("pomodoro.message")), 1),
        createBaseVNode("p", _hoisted_2$8, toDisplayString(unref(t)("pomodoro.description")), 1),
        createBaseVNode("div", _hoisted_3$8, [
          createBaseVNode("p", _hoisted_4$7, [
            createTextVNode(toDisplayString(unref(t)("pomodoroExplanationIcon.message")) + " ", 1),
            _cache[4] || (_cache[4] = createBaseVNode("span", null, [
              createBaseVNode("img", {
                class: "ml-5",
                src: _imports_0$2,
                height: "30"
              })
            ], -1)),
            createTextVNode(". " + toDisplayString(unref(t)("pomodoroExplanationIcon.description")) + " ", 1),
            _cache[5] || (_cache[5] = createBaseVNode("img", {
              class: "ml-5",
              src: _imports_1$1,
              height: "30"
            }, null, -1)),
            _cache[6] || (_cache[6] = createTextVNode(". ", -1))
          ]),
          createBaseVNode("p", _hoisted_5$6, toDisplayString(unref(t)("pomodoroExplanationTime.message")), 1),
          createBaseVNode("p", _hoisted_6$5, toDisplayString(unref(t)("pomodoroExplanationStop.message")), 1)
        ]),
        createBaseVNode("div", {
          class: normalizeClass(isEnabled.value ? "disabled" : "")
        }, [
          createBaseVNode("div", _hoisted_7$4, [
            createBaseVNode("p", _hoisted_8$3, toDisplayString(unref(t)("pomodoroWork.message")), 1),
            createVNode(_component_VueDatePicker, {
              modelValue: workTime.value,
              "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => workTime.value = $event),
              "time-picker": "",
              class: "date-picker"
            }, null, 8, ["modelValue"])
          ]),
          createBaseVNode("div", _hoisted_9$3, [
            audioAfterWork.value ? (openBlock(), createBlock(PomodoroSoundsSelector, {
              key: 0,
              option: unref(StorageParams).POMODORO_AUDIO_AFTER_WORK,
              value: audioAfterWork.value
            }, null, 8, ["option", "value"])) : createCommentVNode("", true)
          ]),
          createBaseVNode("div", _hoisted_10$3, [
            createBaseVNode("p", _hoisted_11$2, toDisplayString(unref(t)("pomodoroRest.message")), 1),
            createVNode(_component_VueDatePicker, {
              modelValue: restTime.value,
              "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => restTime.value = $event),
              "time-picker": "",
              class: "date-picker"
            }, null, 8, ["modelValue"])
          ]),
          createBaseVNode("div", _hoisted_12$1, [
            audioAfterRest.value ? (openBlock(), createBlock(PomodoroSoundsSelector, {
              key: 0,
              option: unref(StorageParams).POMODORO_AUDIO_AFTER_REST,
              value: audioAfterRest.value
            }, null, 8, ["option", "value"])) : createCommentVNode("", true)
          ]),
          createBaseVNode("div", _hoisted_13$1, [
            createBaseVNode("p", _hoisted_14$1, toDisplayString(unref(t)("pomodoroFrequency.message")), 1),
            withDirectives(createBaseVNode("input", {
              type: "number",
              class: "frequency",
              "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => frequency.value = $event)
            }, null, 512), [
              [vModelText, frequency.value]
            ])
          ]),
          createBaseVNode("div", _hoisted_15$1, [
            audioAfterFinished.value ? (openBlock(), createBlock(PomodoroSoundsSelector, {
              key: 0,
              option: unref(StorageParams).POMODORO_AUDIO_AFTER_FINISHED,
              value: audioAfterFinished.value
            }, null, 8, ["option", "value"])) : createCommentVNode("", true)
          ])
        ], 2),
        createBaseVNode("button", {
          class: normalizeClass(["d-inline-block mt-15", [isEnabled.value ? "stop" : "start", isDisabled.value ? "disabled" : ""]]),
          onClick: _cache[3] || (_cache[3] = ($event) => changeStatus())
        }, [
          isEnabled.value ? (openBlock(), createElementBlock("img", _hoisted_16$1)) : createCommentVNode("", true),
          !isEnabled.value ? (openBlock(), createElementBlock("img", _hoisted_17$1)) : createCommentVNode("", true),
          createTextVNode(" " + toDisplayString(!isEnabled.value ? unref(t)("start.message") : unref(t)("stop.message")), 1)
        ], 2)
      ], 64);
    };
  }
});
const Pomodoro_vue_vue_type_style_index_0_scoped_a0ecd989_lang = "";
const Pomodoro = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["__scopeId", "data-v-a0ecd989"]]);
const _hoisted_1$9 = { class: "main" };
const _hoisted_2$7 = { class: "header" };
const _hoisted_3$7 = { class: "title" };
const _hoisted_4$6 = { class: "description" };
const __default__$8 = {
  name: "MyApps"
};
const _sfc_main$9 = /* @__PURE__ */ defineComponent({
  ...__default__$8,
  setup(__props) {
    const { t } = useI18n();
    let App;
    ((App2) => {
      App2[App2["ClearYoutube"] = 0] = "ClearYoutube";
    })(App || (App = {}));
    function openAppLink(app2) {
      switch (app2) {
        case 0:
          window.open(CHROME_STORE_CLEAR_YOUTUBE_URL, "_blank");
          break;
      }
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$9, [
        createBaseVNode("p", _hoisted_2$7, toDisplayString(unref(t)("tryMyOtherApps.message")), 1),
        createBaseVNode("div", {
          class: "app-block",
          onClick: _cache[0] || (_cache[0] = ($event) => openAppLink(
            0
            /* ClearYoutube */
          ))
        }, [
          _cache[1] || (_cache[1] = createBaseVNode("div", { class: "img-block" }, [
            createBaseVNode("img", {
              src: _imports_0$5,
              height: "45"
            })
          ], -1)),
          createBaseVNode("div", null, [
            createBaseVNode("p", _hoisted_3$7, toDisplayString(unref(t)("clearYoutube.message")), 1),
            createBaseVNode("p", _hoisted_4$6, toDisplayString(unref(t)("clearYoutube.description")), 1)
          ])
        ])
      ]);
    };
  }
});
const MyApps_vue_vue_type_style_index_0_scoped_7f4f9668_lang = "";
const MyApps = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["__scopeId", "data-v-7f4f9668"]]);
const _hoisted_1$8 = { class: "about" };
const _hoisted_2$6 = { class: "about-label" };
const _hoisted_3$6 = { class: "about-label" };
const _hoisted_4$5 = ["href"];
const _hoisted_5$5 = { class: "about-label" };
const _hoisted_6$4 = ["href"];
const __default__$7 = {
  name: "About"
};
const _sfc_main$8 = /* @__PURE__ */ defineComponent({
  ...__default__$7,
  setup(__props) {
    const { t } = useI18n();
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        createBaseVNode("div", _hoisted_1$8, [
          _cache[2] || (_cache[2] = createBaseVNode("label", { class: "about-label" }, [
            createTextVNode("GitHub: "),
            createBaseVNode("a", {
              href: "https://github.com/Stigmatoz/web-activity-time-tracker",
              target: "_blank"
            }, "github.com/Stigmatoz/web-activity-time-tracker")
          ], -1)),
          createBaseVNode("label", _hoisted_2$6, [
            createTextVNode(toDisplayString(unref(t)("github.message")) + " ", 1),
            _cache[0] || (_cache[0] = createBaseVNode("a", {
              href: "https://github.com/Stigmatoz/web-activity-time-tracker/issues",
              target: "_blank"
            }, "GitHub issues page", -1))
          ]),
          createBaseVNode("label", _hoisted_3$6, [
            createTextVNode(toDisplayString(unref(t)("question.message")) + " ", 1),
            createBaseVNode("a", {
              href: unref(CHROME_STORE_SUPPORT_URL),
              target: "_blank"
            }, toDisplayString(unref(t)("supportForm.message")), 9, _hoisted_4$5),
            _cache[1] || (_cache[1] = createTextVNode(".", -1))
          ]),
          createBaseVNode("label", _hoisted_5$5, [
            createTextVNode(toDisplayString(unref(t)("doYouEnjoy.message")) + " ", 1),
            createBaseVNode("a", {
              href: unref(CHROME_STORE_REVIEW_URL),
              target: "_blank"
            }, toDisplayString(unref(t)("review.message")), 9, _hoisted_6$4)
          ])
        ]),
        createVNode(MyApps)
      ], 64);
    };
  }
});
const About_vue_vue_type_style_index_0_scoped_7691888e_lang = "";
const About = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["__scopeId", "data-v-7691888e"]]);
const _hoisted_1$7 = { class: "container" };
const _hoisted_2$5 = { class: "block" };
const _hoisted_3$5 = { class: "title" };
const _hoisted_4$4 = { class: "value" };
const _hoisted_5$4 = { class: "block" };
const _hoisted_6$3 = { class: "title" };
const _hoisted_7$3 = { class: "value" };
const _hoisted_8$2 = { class: "block" };
const _hoisted_9$2 = { class: "title" };
const _hoisted_10$2 = { class: "value" };
const __default__$6 = {
  name: "WebsiteStatsDetails"
};
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  ...__default__$6,
  props: {
    details: {}
  },
  setup(__props) {
    const { t } = useI18n();
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$7, [
        createBaseVNode("div", _hoisted_2$5, [
          createBaseVNode("p", _hoisted_3$5, toDisplayString(unref(t)("allTime.message")), 1),
          createBaseVNode("p", _hoisted_4$4, toDisplayString(unref(convertSummaryTimeToString)(__props.details.summaryTime)), 1)
        ]),
        createBaseVNode("div", _hoisted_5$4, [
          createBaseVNode("p", _hoisted_6$3, toDisplayString(unref(t)("sessions.message")), 1),
          createBaseVNode("p", _hoisted_7$3, toDisplayString(__props.details.sessions), 1)
        ]),
        createBaseVNode("div", _hoisted_8$2, [
          createBaseVNode("p", _hoisted_9$2, toDisplayString(unref(t)("averageDailyUsage.message")), 1),
          createBaseVNode("p", _hoisted_10$2, toDisplayString(unref(convertSummaryTimeToString)(__props.details.averageTime)), 1)
        ])
      ]);
    };
  }
});
const WebsiteStatsDetails_vue_vue_type_style_index_0_scoped_d1493cf0_lang = "";
const WebsiteStatsDetails = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["__scopeId", "data-v-d1493cf0"]]);
async function useTabStatsByDays(dateFrom, dateTo, domain) {
  const repo = await injectTabsRepository();
  const tab = repo.getTab(domain);
  let daysTabs = [];
  if (tab == void 0)
    return null;
  const isTheSameDay = isSameDay(dateFrom, dateTo);
  const unSortedTabsByDays = isTheSameDay ? tab.days.filter((s) => isSameDay(new Date(s.date), dateFrom)) : tab.days.filter((s) => new Date(s.date) >= dateFrom && new Date(s.date) <= dateTo);
  if (unSortedTabsByDays.length == 0)
    return {
      days: [],
      averageTime: 0,
      summaryTime: 0,
      sessions: 0
    };
  unSortedTabsByDays.forEach((tabDay) => {
    if (new Date(tabDay.date) >= dateFrom && new Date(tabDay.date) <= dateTo || isTheSameDay && isSameDay(new Date(tabDay.date), dateFrom)) {
      let dayTab = daysTabs.find((x) => x.day == tabDay.date);
      if (dayTab == void 0) {
        dayTab = {
          day: tabDay.date,
          tabs: [],
          time: tabDay.summary,
          sessions: tabDay.counter
        };
        dayTab.tabs.push({
          favicon: tab.favicon,
          url: tab.url,
          sessions: tabDay.counter,
          summaryTime: tabDay.summary
        });
        daysTabs.push(dayTab);
      } else {
        dayTab.time += tabDay.summary;
        dayTab.sessions += tabDay.counter;
        dayTab.tabs.push({
          favicon: tab.favicon,
          url: tab.url,
          sessions: tabDay.counter,
          summaryTime: tabDay.summary
        });
      }
    }
  });
  daysTabs.sort(function(a, b) {
    return new Date(a.day).valueOf() - new Date(b.day).valueOf();
  });
  daysTabs.forEach((dayTab) => {
    dayTab.tabs.sort(function(a, b) {
      return b.summaryTime - a.summaryTime;
    });
  });
  const summaryTime = daysTabs.map((x) => x.time).reduce(function(a, b) {
    return a + b;
  });
  const totalSessions = daysTabs.map((x) => x.sessions).reduce(function(a, b) {
    return a + b;
  });
  const averageTime = Math.round(summaryTime / daysTabs.length);
  return {
    days: daysTabs,
    summaryTime,
    averageTime,
    sessions: totalSessions
  };
}
const _hoisted_1$6 = { class: "settings-item" };
const _hoisted_2$4 = {
  key: 0,
  class: "no-data"
};
const _hoisted_3$4 = { key: 1 };
const _hoisted_4$3 = { key: 1 };
const _hoisted_5$3 = { class: "no-data" };
const _hoisted_6$2 = ["onClick"];
const _hoisted_7$2 = { key: 2 };
const _hoisted_8$1 = { class: "date-block" };
const _hoisted_9$1 = { class: "title" };
const _hoisted_10$1 = ["onClick"];
const _hoisted_11$1 = { class: "mt-20 ml-10 mr-10 by-days-chart" };
const __default__$5 = {
  name: "WebsiteStats"
};
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  ...__default__$5,
  props: {
    domain: {}
  },
  setup(__props) {
    const props = __props;
    const { t } = useI18n();
    const presetRanges = ranges();
    const tabInfoByDays = ref();
    const isLoading = ref();
    const noData = ref(false);
    const selectedDate = ref();
    const tab = ref();
    const countOfDays = computed(
      () => tabInfoByDays.value != void 0 ? tabInfoByDays.value.days.length : 0
    );
    onMounted(async () => {
      var _a, _b;
      isLoading.value = true;
      selectedDate.value = ThisWeekRange;
      const dateFrom = (_a = selectedDate.value) == null ? void 0 : _a[0];
      const dateTo = (_b = selectedDate.value) == null ? void 0 : _b[1];
      const repo = await injectTabsRepository();
      tab.value = repo.getTab(props.domain);
      if (tab == void 0) {
        noData.value = true;
        return;
      }
      await loadList(dateFrom, dateTo);
    });
    async function loadList(dateFrom, dateTo) {
      var _a;
      const tabList = await useTabStatsByDays(dateFrom, dateTo, (_a = tab.value) == null ? void 0 : _a.url);
      if (tabList != null) {
        tabInfoByDays.value = tabList;
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
    return (_ctx, _cache) => {
      var _a, _b, _c;
      const _component_VueDatePicker = resolveComponent("VueDatePicker");
      return openBlock(), createElementBlock("div", _hoisted_1$6, [
        createBaseVNode("label", {
          class: "title link",
          onClick: _cache[0] || (_cache[0] = ($event) => unref(openPage)(unref(SettingsTab).Dashboard))
        }, toDisplayString(unref(t)("dashboard.message")), 1),
        isLoading.value ? (openBlock(), createElementBlock("div", _hoisted_2$4, [..._cache[3] || (_cache[3] = [
          createBaseVNode("img", {
            height: "55",
            src: _imports_0$6
          }, null, -1)
        ])])) : (openBlock(), createElementBlock("div", _hoisted_3$4, [
          countOfDays.value == void 0 || countOfDays.value == 0 && !noData.value ? (openBlock(), createBlock(_sfc_main$i, { key: 0 })) : noData.value ? (openBlock(), createElementBlock("div", _hoisted_4$3, [
            createBaseVNode("div", _hoisted_5$3, [
              createTextVNode(toDisplayString(unref(t)("noDataForPeriod.message")) + " ", 1),
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
                  }, toDisplayString(label), 9, _hoisted_6$2)
                ]),
                _: 1
              }, 8, ["modelValue", "preset-ranges"])
            ])
          ])) : (openBlock(), createElementBlock("div", _hoisted_7$2, [
            createBaseVNode("div", _hoisted_8$1, [
              createBaseVNode("div", null, [
                createVNode(Favicon, {
                  favicon: (_a = tab.value) == null ? void 0 : _a.favicon,
                  type: unref(getTypeOfUrl)((_b = tab.value) == null ? void 0 : _b.url)
                }, null, 8, ["favicon", "type"]),
                createBaseVNode("span", _hoisted_9$1, toDisplayString((_c = tab.value) == null ? void 0 : _c.url), 1)
              ]),
              createVNode(_component_VueDatePicker, {
                range: "",
                "enable-time-picker": false,
                class: "date-picker mt-10",
                modelValue: selectedDate.value,
                "onUpdate:modelValue": [
                  _cache[2] || (_cache[2] = ($event) => selectedDate.value = $event),
                  handleDate
                ],
                "preset-ranges": unref(presetRanges)
              }, {
                yearly: withCtx(({ label, range, presetDateRange }) => [
                  createBaseVNode("span", {
                    onClick: ($event) => presetDateRange(range)
                  }, toDisplayString(label), 9, _hoisted_10$1)
                ]),
                _: 1
              }, 8, ["modelValue", "preset-ranges"])
            ]),
            createBaseVNode("div", _hoisted_11$1, [
              createVNode(ByDaysChart, {
                data: tabInfoByDays.value
              }, null, 8, ["data"])
            ]),
            createBaseVNode("div", null, [
              createVNode(WebsiteStatsDetails, {
                details: tabInfoByDays.value
              }, null, 8, ["details"])
            ])
          ]))
        ]))
      ]);
    };
  }
});
const WebsiteStats_vue_vue_type_style_index_0_scoped_02cd456d_lang = "";
const WebsiteStats = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["__scopeId", "data-v-02cd456d"]]);
const _imports_0$1 = "/by-hours.svg";
const _imports_1 = "/by-intervals.svg";
function ascending$1(a, b) {
  return a == null || b == null ? NaN : a < b ? -1 : a > b ? 1 : a >= b ? 0 : NaN;
}
function descending(a, b) {
  return a == null || b == null ? NaN : b < a ? -1 : b > a ? 1 : b >= a ? 0 : NaN;
}
function bisector(f2) {
  let compare1, compare2, delta;
  if (f2.length !== 2) {
    compare1 = ascending$1;
    compare2 = (d2, x) => ascending$1(f2(d2), x);
    delta = (d2, x) => f2(d2) - x;
  } else {
    compare1 = f2 === ascending$1 || f2 === descending ? f2 : zero$1;
    compare2 = f2;
    delta = f2;
  }
  function left2(a, x, lo = 0, hi = a.length) {
    if (lo < hi) {
      if (compare1(x, x) !== 0)
        return hi;
      do {
        const mid = lo + hi >>> 1;
        if (compare2(a[mid], x) < 0)
          lo = mid + 1;
        else
          hi = mid;
      } while (lo < hi);
    }
    return lo;
  }
  function right2(a, x, lo = 0, hi = a.length) {
    if (lo < hi) {
      if (compare1(x, x) !== 0)
        return hi;
      do {
        const mid = lo + hi >>> 1;
        if (compare2(a[mid], x) <= 0)
          lo = mid + 1;
        else
          hi = mid;
      } while (lo < hi);
    }
    return lo;
  }
  function center2(a, x, lo = 0, hi = a.length) {
    const i = left2(a, x, lo, hi - 1);
    return i > lo && delta(a[i - 1], x) > -delta(a[i], x) ? i - 1 : i;
  }
  return { left: left2, center: center2, right: right2 };
}
function zero$1() {
  return 0;
}
function number$2(x) {
  return x === null ? NaN : +x;
}
const ascendingBisect = bisector(ascending$1);
const bisectRight = ascendingBisect.right;
bisector(number$2).center;
const bisect = bisectRight;
const e10 = Math.sqrt(50), e5 = Math.sqrt(10), e2 = Math.sqrt(2);
function tickSpec(start2, stop, count) {
  const step = (stop - start2) / Math.max(0, count), power = Math.floor(Math.log10(step)), error = step / Math.pow(10, power), factor = error >= e10 ? 10 : error >= e5 ? 5 : error >= e2 ? 2 : 1;
  let i1, i2, inc;
  if (power < 0) {
    inc = Math.pow(10, -power) / factor;
    i1 = Math.round(start2 * inc);
    i2 = Math.round(stop * inc);
    if (i1 / inc < start2)
      ++i1;
    if (i2 / inc > stop)
      --i2;
    inc = -inc;
  } else {
    inc = Math.pow(10, power) * factor;
    i1 = Math.round(start2 / inc);
    i2 = Math.round(stop / inc);
    if (i1 * inc < start2)
      ++i1;
    if (i2 * inc > stop)
      --i2;
  }
  if (i2 < i1 && 0.5 <= count && count < 2)
    return tickSpec(start2, stop, count * 2);
  return [i1, i2, inc];
}
function ticks(start2, stop, count) {
  stop = +stop, start2 = +start2, count = +count;
  if (!(count > 0))
    return [];
  if (start2 === stop)
    return [start2];
  const reverse = stop < start2, [i1, i2, inc] = reverse ? tickSpec(stop, start2, count) : tickSpec(start2, stop, count);
  if (!(i2 >= i1))
    return [];
  const n = i2 - i1 + 1, ticks2 = new Array(n);
  if (reverse) {
    if (inc < 0)
      for (let i = 0; i < n; ++i)
        ticks2[i] = (i2 - i) / -inc;
    else
      for (let i = 0; i < n; ++i)
        ticks2[i] = (i2 - i) * inc;
  } else {
    if (inc < 0)
      for (let i = 0; i < n; ++i)
        ticks2[i] = (i1 + i) / -inc;
    else
      for (let i = 0; i < n; ++i)
        ticks2[i] = (i1 + i) * inc;
  }
  return ticks2;
}
function tickIncrement(start2, stop, count) {
  stop = +stop, start2 = +start2, count = +count;
  return tickSpec(start2, stop, count)[2];
}
function tickStep(start2, stop, count) {
  stop = +stop, start2 = +start2, count = +count;
  const reverse = stop < start2, inc = reverse ? tickIncrement(stop, start2, count) : tickIncrement(start2, stop, count);
  return (reverse ? -1 : 1) * (inc < 0 ? 1 / -inc : inc);
}
function identity$3(x) {
  return x;
}
var top = 1, right = 2, bottom = 3, left = 4, epsilon = 1e-6;
function translateX(x) {
  return "translate(" + x + ",0)";
}
function translateY(y) {
  return "translate(0," + y + ")";
}
function number$1(scale) {
  return (d2) => +scale(d2);
}
function center(scale, offset) {
  offset = Math.max(0, scale.bandwidth() - offset * 2) / 2;
  if (scale.round())
    offset = Math.round(offset);
  return (d2) => +scale(d2) + offset;
}
function entering() {
  return !this.__axis;
}
function axis(orient, scale) {
  var tickArguments = [], tickValues = null, tickFormat2 = null, tickSizeInner = 6, tickSizeOuter = 6, tickPadding = 3, offset = typeof window !== "undefined" && window.devicePixelRatio > 1 ? 0 : 0.5, k = orient === top || orient === left ? -1 : 1, x = orient === left || orient === right ? "x" : "y", transform = orient === top || orient === bottom ? translateX : translateY;
  function axis2(context) {
    var values = tickValues == null ? scale.ticks ? scale.ticks.apply(scale, tickArguments) : scale.domain() : tickValues, format2 = tickFormat2 == null ? scale.tickFormat ? scale.tickFormat.apply(scale, tickArguments) : identity$3 : tickFormat2, spacing = Math.max(tickSizeInner, 0) + tickPadding, range = scale.range(), range0 = +range[0] + offset, range1 = +range[range.length - 1] + offset, position = (scale.bandwidth ? center : number$1)(scale.copy(), offset), selection2 = context.selection ? context.selection() : context, path = selection2.selectAll(".domain").data([null]), tick = selection2.selectAll(".tick").data(values, scale).order(), tickExit = tick.exit(), tickEnter = tick.enter().append("g").attr("class", "tick"), line = tick.select("line"), text = tick.select("text");
    path = path.merge(path.enter().insert("path", ".tick").attr("class", "domain").attr("stroke", "currentColor"));
    tick = tick.merge(tickEnter);
    line = line.merge(tickEnter.append("line").attr("stroke", "currentColor").attr(x + "2", k * tickSizeInner));
    text = text.merge(tickEnter.append("text").attr("fill", "currentColor").attr(x, k * spacing).attr("dy", orient === top ? "0em" : orient === bottom ? "0.71em" : "0.32em"));
    if (context !== selection2) {
      path = path.transition(context);
      tick = tick.transition(context);
      line = line.transition(context);
      text = text.transition(context);
      tickExit = tickExit.transition(context).attr("opacity", epsilon).attr("transform", function(d2) {
        return isFinite(d2 = position(d2)) ? transform(d2 + offset) : this.getAttribute("transform");
      });
      tickEnter.attr("opacity", epsilon).attr("transform", function(d2) {
        var p = this.parentNode.__axis;
        return transform((p && isFinite(p = p(d2)) ? p : position(d2)) + offset);
      });
    }
    tickExit.remove();
    path.attr("d", orient === left || orient === right ? tickSizeOuter ? "M" + k * tickSizeOuter + "," + range0 + "H" + offset + "V" + range1 + "H" + k * tickSizeOuter : "M" + offset + "," + range0 + "V" + range1 : tickSizeOuter ? "M" + range0 + "," + k * tickSizeOuter + "V" + offset + "H" + range1 + "V" + k * tickSizeOuter : "M" + range0 + "," + offset + "H" + range1);
    tick.attr("opacity", 1).attr("transform", function(d2) {
      return transform(position(d2) + offset);
    });
    line.attr(x + "2", k * tickSizeInner);
    text.attr(x, k * spacing).text(format2);
    selection2.filter(entering).attr("fill", "none").attr("font-size", 10).attr("font-family", "sans-serif").attr("text-anchor", orient === right ? "start" : orient === left ? "end" : "middle");
    selection2.each(function() {
      this.__axis = position;
    });
  }
  axis2.scale = function(_) {
    return arguments.length ? (scale = _, axis2) : scale;
  };
  axis2.ticks = function() {
    return tickArguments = Array.from(arguments), axis2;
  };
  axis2.tickArguments = function(_) {
    return arguments.length ? (tickArguments = _ == null ? [] : Array.from(_), axis2) : tickArguments.slice();
  };
  axis2.tickValues = function(_) {
    return arguments.length ? (tickValues = _ == null ? null : Array.from(_), axis2) : tickValues && tickValues.slice();
  };
  axis2.tickFormat = function(_) {
    return arguments.length ? (tickFormat2 = _, axis2) : tickFormat2;
  };
  axis2.tickSize = function(_) {
    return arguments.length ? (tickSizeInner = tickSizeOuter = +_, axis2) : tickSizeInner;
  };
  axis2.tickSizeInner = function(_) {
    return arguments.length ? (tickSizeInner = +_, axis2) : tickSizeInner;
  };
  axis2.tickSizeOuter = function(_) {
    return arguments.length ? (tickSizeOuter = +_, axis2) : tickSizeOuter;
  };
  axis2.tickPadding = function(_) {
    return arguments.length ? (tickPadding = +_, axis2) : tickPadding;
  };
  axis2.offset = function(_) {
    return arguments.length ? (offset = +_, axis2) : offset;
  };
  return axis2;
}
function axisBottom(scale) {
  return axis(bottom, scale);
}
function axisLeft(scale) {
  return axis(left, scale);
}
var noop = { value: () => {
} };
function dispatch() {
  for (var i = 0, n = arguments.length, _ = {}, t; i < n; ++i) {
    if (!(t = arguments[i] + "") || t in _ || /[\s.]/.test(t))
      throw new Error("illegal type: " + t);
    _[t] = [];
  }
  return new Dispatch(_);
}
function Dispatch(_) {
  this._ = _;
}
function parseTypenames$1(typenames, types) {
  return typenames.trim().split(/^|\s+/).map(function(t) {
    var name = "", i = t.indexOf(".");
    if (i >= 0)
      name = t.slice(i + 1), t = t.slice(0, i);
    if (t && !types.hasOwnProperty(t))
      throw new Error("unknown type: " + t);
    return { type: t, name };
  });
}
Dispatch.prototype = dispatch.prototype = {
  constructor: Dispatch,
  on: function(typename, callback) {
    var _ = this._, T = parseTypenames$1(typename + "", _), t, i = -1, n = T.length;
    if (arguments.length < 2) {
      while (++i < n)
        if ((t = (typename = T[i]).type) && (t = get$1(_[t], typename.name)))
          return t;
      return;
    }
    if (callback != null && typeof callback !== "function")
      throw new Error("invalid callback: " + callback);
    while (++i < n) {
      if (t = (typename = T[i]).type)
        _[t] = set$1(_[t], typename.name, callback);
      else if (callback == null)
        for (t in _)
          _[t] = set$1(_[t], typename.name, null);
    }
    return this;
  },
  copy: function() {
    var copy2 = {}, _ = this._;
    for (var t in _)
      copy2[t] = _[t].slice();
    return new Dispatch(copy2);
  },
  call: function(type, that) {
    if ((n = arguments.length - 2) > 0)
      for (var args = new Array(n), i = 0, n, t; i < n; ++i)
        args[i] = arguments[i + 2];
    if (!this._.hasOwnProperty(type))
      throw new Error("unknown type: " + type);
    for (t = this._[type], i = 0, n = t.length; i < n; ++i)
      t[i].value.apply(that, args);
  },
  apply: function(type, that, args) {
    if (!this._.hasOwnProperty(type))
      throw new Error("unknown type: " + type);
    for (var t = this._[type], i = 0, n = t.length; i < n; ++i)
      t[i].value.apply(that, args);
  }
};
function get$1(type, name) {
  for (var i = 0, n = type.length, c; i < n; ++i) {
    if ((c = type[i]).name === name) {
      return c.value;
    }
  }
}
function set$1(type, name, callback) {
  for (var i = 0, n = type.length; i < n; ++i) {
    if (type[i].name === name) {
      type[i] = noop, type = type.slice(0, i).concat(type.slice(i + 1));
      break;
    }
  }
  if (callback != null)
    type.push({ name, value: callback });
  return type;
}
var xhtml = "http://www.w3.org/1999/xhtml";
const namespaces = {
  svg: "http://www.w3.org/2000/svg",
  xhtml,
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/"
};
function namespace(name) {
  var prefix = name += "", i = prefix.indexOf(":");
  if (i >= 0 && (prefix = name.slice(0, i)) !== "xmlns")
    name = name.slice(i + 1);
  return namespaces.hasOwnProperty(prefix) ? { space: namespaces[prefix], local: name } : name;
}
function creatorInherit(name) {
  return function() {
    var document2 = this.ownerDocument, uri = this.namespaceURI;
    return uri === xhtml && document2.documentElement.namespaceURI === xhtml ? document2.createElement(name) : document2.createElementNS(uri, name);
  };
}
function creatorFixed(fullname) {
  return function() {
    return this.ownerDocument.createElementNS(fullname.space, fullname.local);
  };
}
function creator(name) {
  var fullname = namespace(name);
  return (fullname.local ? creatorFixed : creatorInherit)(fullname);
}
function none() {
}
function selector(selector2) {
  return selector2 == null ? none : function() {
    return this.querySelector(selector2);
  };
}
function selection_select(select2) {
  if (typeof select2 !== "function")
    select2 = selector(select2);
  for (var groups = this._groups, m2 = groups.length, subgroups = new Array(m2), j2 = 0; j2 < m2; ++j2) {
    for (var group = groups[j2], n = group.length, subgroup = subgroups[j2] = new Array(n), node, subnode, i = 0; i < n; ++i) {
      if ((node = group[i]) && (subnode = select2.call(node, node.__data__, i, group))) {
        if ("__data__" in node)
          subnode.__data__ = node.__data__;
        subgroup[i] = subnode;
      }
    }
  }
  return new Selection$1(subgroups, this._parents);
}
function array(x) {
  return x == null ? [] : Array.isArray(x) ? x : Array.from(x);
}
function empty() {
  return [];
}
function selectorAll(selector2) {
  return selector2 == null ? empty : function() {
    return this.querySelectorAll(selector2);
  };
}
function arrayAll(select2) {
  return function() {
    return array(select2.apply(this, arguments));
  };
}
function selection_selectAll(select2) {
  if (typeof select2 === "function")
    select2 = arrayAll(select2);
  else
    select2 = selectorAll(select2);
  for (var groups = this._groups, m2 = groups.length, subgroups = [], parents = [], j2 = 0; j2 < m2; ++j2) {
    for (var group = groups[j2], n = group.length, node, i = 0; i < n; ++i) {
      if (node = group[i]) {
        subgroups.push(select2.call(node, node.__data__, i, group));
        parents.push(node);
      }
    }
  }
  return new Selection$1(subgroups, parents);
}
function matcher(selector2) {
  return function() {
    return this.matches(selector2);
  };
}
function childMatcher(selector2) {
  return function(node) {
    return node.matches(selector2);
  };
}
var find = Array.prototype.find;
function childFind(match) {
  return function() {
    return find.call(this.children, match);
  };
}
function childFirst() {
  return this.firstElementChild;
}
function selection_selectChild(match) {
  return this.select(match == null ? childFirst : childFind(typeof match === "function" ? match : childMatcher(match)));
}
var filter = Array.prototype.filter;
function children() {
  return Array.from(this.children);
}
function childrenFilter(match) {
  return function() {
    return filter.call(this.children, match);
  };
}
function selection_selectChildren(match) {
  return this.selectAll(match == null ? children : childrenFilter(typeof match === "function" ? match : childMatcher(match)));
}
function selection_filter(match) {
  if (typeof match !== "function")
    match = matcher(match);
  for (var groups = this._groups, m2 = groups.length, subgroups = new Array(m2), j2 = 0; j2 < m2; ++j2) {
    for (var group = groups[j2], n = group.length, subgroup = subgroups[j2] = [], node, i = 0; i < n; ++i) {
      if ((node = group[i]) && match.call(node, node.__data__, i, group)) {
        subgroup.push(node);
      }
    }
  }
  return new Selection$1(subgroups, this._parents);
}
function sparse(update) {
  return new Array(update.length);
}
function selection_enter() {
  return new Selection$1(this._enter || this._groups.map(sparse), this._parents);
}
function EnterNode(parent, datum2) {
  this.ownerDocument = parent.ownerDocument;
  this.namespaceURI = parent.namespaceURI;
  this._next = null;
  this._parent = parent;
  this.__data__ = datum2;
}
EnterNode.prototype = {
  constructor: EnterNode,
  appendChild: function(child) {
    return this._parent.insertBefore(child, this._next);
  },
  insertBefore: function(child, next) {
    return this._parent.insertBefore(child, next);
  },
  querySelector: function(selector2) {
    return this._parent.querySelector(selector2);
  },
  querySelectorAll: function(selector2) {
    return this._parent.querySelectorAll(selector2);
  }
};
function constant$1(x) {
  return function() {
    return x;
  };
}
function bindIndex(parent, group, enter, update, exit, data) {
  var i = 0, node, groupLength = group.length, dataLength = data.length;
  for (; i < dataLength; ++i) {
    if (node = group[i]) {
      node.__data__ = data[i];
      update[i] = node;
    } else {
      enter[i] = new EnterNode(parent, data[i]);
    }
  }
  for (; i < groupLength; ++i) {
    if (node = group[i]) {
      exit[i] = node;
    }
  }
}
function bindKey(parent, group, enter, update, exit, data, key) {
  var i, node, nodeByKeyValue = /* @__PURE__ */ new Map(), groupLength = group.length, dataLength = data.length, keyValues = new Array(groupLength), keyValue;
  for (i = 0; i < groupLength; ++i) {
    if (node = group[i]) {
      keyValues[i] = keyValue = key.call(node, node.__data__, i, group) + "";
      if (nodeByKeyValue.has(keyValue)) {
        exit[i] = node;
      } else {
        nodeByKeyValue.set(keyValue, node);
      }
    }
  }
  for (i = 0; i < dataLength; ++i) {
    keyValue = key.call(parent, data[i], i, data) + "";
    if (node = nodeByKeyValue.get(keyValue)) {
      update[i] = node;
      node.__data__ = data[i];
      nodeByKeyValue.delete(keyValue);
    } else {
      enter[i] = new EnterNode(parent, data[i]);
    }
  }
  for (i = 0; i < groupLength; ++i) {
    if ((node = group[i]) && nodeByKeyValue.get(keyValues[i]) === node) {
      exit[i] = node;
    }
  }
}
function datum(node) {
  return node.__data__;
}
function selection_data(value, key) {
  if (!arguments.length)
    return Array.from(this, datum);
  var bind = key ? bindKey : bindIndex, parents = this._parents, groups = this._groups;
  if (typeof value !== "function")
    value = constant$1(value);
  for (var m2 = groups.length, update = new Array(m2), enter = new Array(m2), exit = new Array(m2), j2 = 0; j2 < m2; ++j2) {
    var parent = parents[j2], group = groups[j2], groupLength = group.length, data = arraylike(value.call(parent, parent && parent.__data__, j2, parents)), dataLength = data.length, enterGroup = enter[j2] = new Array(dataLength), updateGroup = update[j2] = new Array(dataLength), exitGroup = exit[j2] = new Array(groupLength);
    bind(parent, group, enterGroup, updateGroup, exitGroup, data, key);
    for (var i0 = 0, i1 = 0, previous, next; i0 < dataLength; ++i0) {
      if (previous = enterGroup[i0]) {
        if (i0 >= i1)
          i1 = i0 + 1;
        while (!(next = updateGroup[i1]) && ++i1 < dataLength)
          ;
        previous._next = next || null;
      }
    }
  }
  update = new Selection$1(update, parents);
  update._enter = enter;
  update._exit = exit;
  return update;
}
function arraylike(data) {
  return typeof data === "object" && "length" in data ? data : Array.from(data);
}
function selection_exit() {
  return new Selection$1(this._exit || this._groups.map(sparse), this._parents);
}
function selection_join(onenter, onupdate, onexit) {
  var enter = this.enter(), update = this, exit = this.exit();
  if (typeof onenter === "function") {
    enter = onenter(enter);
    if (enter)
      enter = enter.selection();
  } else {
    enter = enter.append(onenter + "");
  }
  if (onupdate != null) {
    update = onupdate(update);
    if (update)
      update = update.selection();
  }
  if (onexit == null)
    exit.remove();
  else
    onexit(exit);
  return enter && update ? enter.merge(update).order() : update;
}
function selection_merge(context) {
  var selection2 = context.selection ? context.selection() : context;
  for (var groups0 = this._groups, groups1 = selection2._groups, m0 = groups0.length, m1 = groups1.length, m2 = Math.min(m0, m1), merges = new Array(m0), j2 = 0; j2 < m2; ++j2) {
    for (var group0 = groups0[j2], group1 = groups1[j2], n = group0.length, merge = merges[j2] = new Array(n), node, i = 0; i < n; ++i) {
      if (node = group0[i] || group1[i]) {
        merge[i] = node;
      }
    }
  }
  for (; j2 < m0; ++j2) {
    merges[j2] = groups0[j2];
  }
  return new Selection$1(merges, this._parents);
}
function selection_order() {
  for (var groups = this._groups, j2 = -1, m2 = groups.length; ++j2 < m2; ) {
    for (var group = groups[j2], i = group.length - 1, next = group[i], node; --i >= 0; ) {
      if (node = group[i]) {
        if (next && node.compareDocumentPosition(next) ^ 4)
          next.parentNode.insertBefore(node, next);
        next = node;
      }
    }
  }
  return this;
}
function selection_sort(compare) {
  if (!compare)
    compare = ascending;
  function compareNode(a, b) {
    return a && b ? compare(a.__data__, b.__data__) : !a - !b;
  }
  for (var groups = this._groups, m2 = groups.length, sortgroups = new Array(m2), j2 = 0; j2 < m2; ++j2) {
    for (var group = groups[j2], n = group.length, sortgroup = sortgroups[j2] = new Array(n), node, i = 0; i < n; ++i) {
      if (node = group[i]) {
        sortgroup[i] = node;
      }
    }
    sortgroup.sort(compareNode);
  }
  return new Selection$1(sortgroups, this._parents).order();
}
function ascending(a, b) {
  return a < b ? -1 : a > b ? 1 : a >= b ? 0 : NaN;
}
function selection_call() {
  var callback = arguments[0];
  arguments[0] = this;
  callback.apply(null, arguments);
  return this;
}
function selection_nodes() {
  return Array.from(this);
}
function selection_node() {
  for (var groups = this._groups, j2 = 0, m2 = groups.length; j2 < m2; ++j2) {
    for (var group = groups[j2], i = 0, n = group.length; i < n; ++i) {
      var node = group[i];
      if (node)
        return node;
    }
  }
  return null;
}
function selection_size() {
  let size = 0;
  for (const node of this)
    ++size;
  return size;
}
function selection_empty() {
  return !this.node();
}
function selection_each(callback) {
  for (var groups = this._groups, j2 = 0, m2 = groups.length; j2 < m2; ++j2) {
    for (var group = groups[j2], i = 0, n = group.length, node; i < n; ++i) {
      if (node = group[i])
        callback.call(node, node.__data__, i, group);
    }
  }
  return this;
}
function attrRemove$1(name) {
  return function() {
    this.removeAttribute(name);
  };
}
function attrRemoveNS$1(fullname) {
  return function() {
    this.removeAttributeNS(fullname.space, fullname.local);
  };
}
function attrConstant$1(name, value) {
  return function() {
    this.setAttribute(name, value);
  };
}
function attrConstantNS$1(fullname, value) {
  return function() {
    this.setAttributeNS(fullname.space, fullname.local, value);
  };
}
function attrFunction$1(name, value) {
  return function() {
    var v2 = value.apply(this, arguments);
    if (v2 == null)
      this.removeAttribute(name);
    else
      this.setAttribute(name, v2);
  };
}
function attrFunctionNS$1(fullname, value) {
  return function() {
    var v2 = value.apply(this, arguments);
    if (v2 == null)
      this.removeAttributeNS(fullname.space, fullname.local);
    else
      this.setAttributeNS(fullname.space, fullname.local, v2);
  };
}
function selection_attr(name, value) {
  var fullname = namespace(name);
  if (arguments.length < 2) {
    var node = this.node();
    return fullname.local ? node.getAttributeNS(fullname.space, fullname.local) : node.getAttribute(fullname);
  }
  return this.each((value == null ? fullname.local ? attrRemoveNS$1 : attrRemove$1 : typeof value === "function" ? fullname.local ? attrFunctionNS$1 : attrFunction$1 : fullname.local ? attrConstantNS$1 : attrConstant$1)(fullname, value));
}
function defaultView(node) {
  return node.ownerDocument && node.ownerDocument.defaultView || node.document && node || node.defaultView;
}
function styleRemove$1(name) {
  return function() {
    this.style.removeProperty(name);
  };
}
function styleConstant$1(name, value, priority) {
  return function() {
    this.style.setProperty(name, value, priority);
  };
}
function styleFunction$1(name, value, priority) {
  return function() {
    var v2 = value.apply(this, arguments);
    if (v2 == null)
      this.style.removeProperty(name);
    else
      this.style.setProperty(name, v2, priority);
  };
}
function selection_style(name, value, priority) {
  return arguments.length > 1 ? this.each((value == null ? styleRemove$1 : typeof value === "function" ? styleFunction$1 : styleConstant$1)(name, value, priority == null ? "" : priority)) : styleValue(this.node(), name);
}
function styleValue(node, name) {
  return node.style.getPropertyValue(name) || defaultView(node).getComputedStyle(node, null).getPropertyValue(name);
}
function propertyRemove(name) {
  return function() {
    delete this[name];
  };
}
function propertyConstant(name, value) {
  return function() {
    this[name] = value;
  };
}
function propertyFunction(name, value) {
  return function() {
    var v2 = value.apply(this, arguments);
    if (v2 == null)
      delete this[name];
    else
      this[name] = v2;
  };
}
function selection_property(name, value) {
  return arguments.length > 1 ? this.each((value == null ? propertyRemove : typeof value === "function" ? propertyFunction : propertyConstant)(name, value)) : this.node()[name];
}
function classArray(string) {
  return string.trim().split(/^|\s+/);
}
function classList(node) {
  return node.classList || new ClassList(node);
}
function ClassList(node) {
  this._node = node;
  this._names = classArray(node.getAttribute("class") || "");
}
ClassList.prototype = {
  add: function(name) {
    var i = this._names.indexOf(name);
    if (i < 0) {
      this._names.push(name);
      this._node.setAttribute("class", this._names.join(" "));
    }
  },
  remove: function(name) {
    var i = this._names.indexOf(name);
    if (i >= 0) {
      this._names.splice(i, 1);
      this._node.setAttribute("class", this._names.join(" "));
    }
  },
  contains: function(name) {
    return this._names.indexOf(name) >= 0;
  }
};
function classedAdd(node, names) {
  var list = classList(node), i = -1, n = names.length;
  while (++i < n)
    list.add(names[i]);
}
function classedRemove(node, names) {
  var list = classList(node), i = -1, n = names.length;
  while (++i < n)
    list.remove(names[i]);
}
function classedTrue(names) {
  return function() {
    classedAdd(this, names);
  };
}
function classedFalse(names) {
  return function() {
    classedRemove(this, names);
  };
}
function classedFunction(names, value) {
  return function() {
    (value.apply(this, arguments) ? classedAdd : classedRemove)(this, names);
  };
}
function selection_classed(name, value) {
  var names = classArray(name + "");
  if (arguments.length < 2) {
    var list = classList(this.node()), i = -1, n = names.length;
    while (++i < n)
      if (!list.contains(names[i]))
        return false;
    return true;
  }
  return this.each((typeof value === "function" ? classedFunction : value ? classedTrue : classedFalse)(names, value));
}
function textRemove() {
  this.textContent = "";
}
function textConstant$1(value) {
  return function() {
    this.textContent = value;
  };
}
function textFunction$1(value) {
  return function() {
    var v2 = value.apply(this, arguments);
    this.textContent = v2 == null ? "" : v2;
  };
}
function selection_text(value) {
  return arguments.length ? this.each(value == null ? textRemove : (typeof value === "function" ? textFunction$1 : textConstant$1)(value)) : this.node().textContent;
}
function htmlRemove() {
  this.innerHTML = "";
}
function htmlConstant(value) {
  return function() {
    this.innerHTML = value;
  };
}
function htmlFunction(value) {
  return function() {
    var v2 = value.apply(this, arguments);
    this.innerHTML = v2 == null ? "" : v2;
  };
}
function selection_html(value) {
  return arguments.length ? this.each(value == null ? htmlRemove : (typeof value === "function" ? htmlFunction : htmlConstant)(value)) : this.node().innerHTML;
}
function raise() {
  if (this.nextSibling)
    this.parentNode.appendChild(this);
}
function selection_raise() {
  return this.each(raise);
}
function lower() {
  if (this.previousSibling)
    this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
function selection_lower() {
  return this.each(lower);
}
function selection_append(name) {
  var create2 = typeof name === "function" ? name : creator(name);
  return this.select(function() {
    return this.appendChild(create2.apply(this, arguments));
  });
}
function constantNull() {
  return null;
}
function selection_insert(name, before) {
  var create2 = typeof name === "function" ? name : creator(name), select2 = before == null ? constantNull : typeof before === "function" ? before : selector(before);
  return this.select(function() {
    return this.insertBefore(create2.apply(this, arguments), select2.apply(this, arguments) || null);
  });
}
function remove() {
  var parent = this.parentNode;
  if (parent)
    parent.removeChild(this);
}
function selection_remove() {
  return this.each(remove);
}
function selection_cloneShallow() {
  var clone = this.cloneNode(false), parent = this.parentNode;
  return parent ? parent.insertBefore(clone, this.nextSibling) : clone;
}
function selection_cloneDeep() {
  var clone = this.cloneNode(true), parent = this.parentNode;
  return parent ? parent.insertBefore(clone, this.nextSibling) : clone;
}
function selection_clone(deep) {
  return this.select(deep ? selection_cloneDeep : selection_cloneShallow);
}
function selection_datum(value) {
  return arguments.length ? this.property("__data__", value) : this.node().__data__;
}
function contextListener(listener) {
  return function(event) {
    listener.call(this, event, this.__data__);
  };
}
function parseTypenames(typenames) {
  return typenames.trim().split(/^|\s+/).map(function(t) {
    var name = "", i = t.indexOf(".");
    if (i >= 0)
      name = t.slice(i + 1), t = t.slice(0, i);
    return { type: t, name };
  });
}
function onRemove(typename) {
  return function() {
    var on = this.__on;
    if (!on)
      return;
    for (var j2 = 0, i = -1, m2 = on.length, o; j2 < m2; ++j2) {
      if (o = on[j2], (!typename.type || o.type === typename.type) && o.name === typename.name) {
        this.removeEventListener(o.type, o.listener, o.options);
      } else {
        on[++i] = o;
      }
    }
    if (++i)
      on.length = i;
    else
      delete this.__on;
  };
}
function onAdd(typename, value, options) {
  return function() {
    var on = this.__on, o, listener = contextListener(value);
    if (on)
      for (var j2 = 0, m2 = on.length; j2 < m2; ++j2) {
        if ((o = on[j2]).type === typename.type && o.name === typename.name) {
          this.removeEventListener(o.type, o.listener, o.options);
          this.addEventListener(o.type, o.listener = listener, o.options = options);
          o.value = value;
          return;
        }
      }
    this.addEventListener(typename.type, listener, options);
    o = { type: typename.type, name: typename.name, value, listener, options };
    if (!on)
      this.__on = [o];
    else
      on.push(o);
  };
}
function selection_on(typename, value, options) {
  var typenames = parseTypenames(typename + ""), i, n = typenames.length, t;
  if (arguments.length < 2) {
    var on = this.node().__on;
    if (on)
      for (var j2 = 0, m2 = on.length, o; j2 < m2; ++j2) {
        for (i = 0, o = on[j2]; i < n; ++i) {
          if ((t = typenames[i]).type === o.type && t.name === o.name) {
            return o.value;
          }
        }
      }
    return;
  }
  on = value ? onAdd : onRemove;
  for (i = 0; i < n; ++i)
    this.each(on(typenames[i], value, options));
  return this;
}
function dispatchEvent(node, type, params) {
  var window2 = defaultView(node), event = window2.CustomEvent;
  if (typeof event === "function") {
    event = new event(type, params);
  } else {
    event = window2.document.createEvent("Event");
    if (params)
      event.initEvent(type, params.bubbles, params.cancelable), event.detail = params.detail;
    else
      event.initEvent(type, false, false);
  }
  node.dispatchEvent(event);
}
function dispatchConstant(type, params) {
  return function() {
    return dispatchEvent(this, type, params);
  };
}
function dispatchFunction(type, params) {
  return function() {
    return dispatchEvent(this, type, params.apply(this, arguments));
  };
}
function selection_dispatch(type, params) {
  return this.each((typeof params === "function" ? dispatchFunction : dispatchConstant)(type, params));
}
function* selection_iterator() {
  for (var groups = this._groups, j2 = 0, m2 = groups.length; j2 < m2; ++j2) {
    for (var group = groups[j2], i = 0, n = group.length, node; i < n; ++i) {
      if (node = group[i])
        yield node;
    }
  }
}
var root = [null];
function Selection$1(groups, parents) {
  this._groups = groups;
  this._parents = parents;
}
function selection() {
  return new Selection$1([[document.documentElement]], root);
}
function selection_selection() {
  return this;
}
Selection$1.prototype = selection.prototype = {
  constructor: Selection$1,
  select: selection_select,
  selectAll: selection_selectAll,
  selectChild: selection_selectChild,
  selectChildren: selection_selectChildren,
  filter: selection_filter,
  data: selection_data,
  enter: selection_enter,
  exit: selection_exit,
  join: selection_join,
  merge: selection_merge,
  selection: selection_selection,
  order: selection_order,
  sort: selection_sort,
  call: selection_call,
  nodes: selection_nodes,
  node: selection_node,
  size: selection_size,
  empty: selection_empty,
  each: selection_each,
  attr: selection_attr,
  style: selection_style,
  property: selection_property,
  classed: selection_classed,
  text: selection_text,
  html: selection_html,
  raise: selection_raise,
  lower: selection_lower,
  append: selection_append,
  insert: selection_insert,
  remove: selection_remove,
  clone: selection_clone,
  datum: selection_datum,
  on: selection_on,
  dispatch: selection_dispatch,
  [Symbol.iterator]: selection_iterator
};
function select(selector2) {
  return typeof selector2 === "string" ? new Selection$1([[document.querySelector(selector2)]], [document.documentElement]) : new Selection$1([[selector2]], root);
}
function define(constructor, factory, prototype) {
  constructor.prototype = factory.prototype = prototype;
  prototype.constructor = constructor;
}
function extend(parent, definition) {
  var prototype = Object.create(parent.prototype);
  for (var key in definition)
    prototype[key] = definition[key];
  return prototype;
}
function Color() {
}
var darker = 0.7;
var brighter = 1 / darker;
var reI = "\\s*([+-]?\\d+)\\s*", reN = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", reP = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", reHex = /^#([0-9a-f]{3,8})$/, reRgbInteger = new RegExp(`^rgb\\(${reI},${reI},${reI}\\)$`), reRgbPercent = new RegExp(`^rgb\\(${reP},${reP},${reP}\\)$`), reRgbaInteger = new RegExp(`^rgba\\(${reI},${reI},${reI},${reN}\\)$`), reRgbaPercent = new RegExp(`^rgba\\(${reP},${reP},${reP},${reN}\\)$`), reHslPercent = new RegExp(`^hsl\\(${reN},${reP},${reP}\\)$`), reHslaPercent = new RegExp(`^hsla\\(${reN},${reP},${reP},${reN}\\)$`);
var named = {
  aliceblue: 15792383,
  antiquewhite: 16444375,
  aqua: 65535,
  aquamarine: 8388564,
  azure: 15794175,
  beige: 16119260,
  bisque: 16770244,
  black: 0,
  blanchedalmond: 16772045,
  blue: 255,
  blueviolet: 9055202,
  brown: 10824234,
  burlywood: 14596231,
  cadetblue: 6266528,
  chartreuse: 8388352,
  chocolate: 13789470,
  coral: 16744272,
  cornflowerblue: 6591981,
  cornsilk: 16775388,
  crimson: 14423100,
  cyan: 65535,
  darkblue: 139,
  darkcyan: 35723,
  darkgoldenrod: 12092939,
  darkgray: 11119017,
  darkgreen: 25600,
  darkgrey: 11119017,
  darkkhaki: 12433259,
  darkmagenta: 9109643,
  darkolivegreen: 5597999,
  darkorange: 16747520,
  darkorchid: 10040012,
  darkred: 9109504,
  darksalmon: 15308410,
  darkseagreen: 9419919,
  darkslateblue: 4734347,
  darkslategray: 3100495,
  darkslategrey: 3100495,
  darkturquoise: 52945,
  darkviolet: 9699539,
  deeppink: 16716947,
  deepskyblue: 49151,
  dimgray: 6908265,
  dimgrey: 6908265,
  dodgerblue: 2003199,
  firebrick: 11674146,
  floralwhite: 16775920,
  forestgreen: 2263842,
  fuchsia: 16711935,
  gainsboro: 14474460,
  ghostwhite: 16316671,
  gold: 16766720,
  goldenrod: 14329120,
  gray: 8421504,
  green: 32768,
  greenyellow: 11403055,
  grey: 8421504,
  honeydew: 15794160,
  hotpink: 16738740,
  indianred: 13458524,
  indigo: 4915330,
  ivory: 16777200,
  khaki: 15787660,
  lavender: 15132410,
  lavenderblush: 16773365,
  lawngreen: 8190976,
  lemonchiffon: 16775885,
  lightblue: 11393254,
  lightcoral: 15761536,
  lightcyan: 14745599,
  lightgoldenrodyellow: 16448210,
  lightgray: 13882323,
  lightgreen: 9498256,
  lightgrey: 13882323,
  lightpink: 16758465,
  lightsalmon: 16752762,
  lightseagreen: 2142890,
  lightskyblue: 8900346,
  lightslategray: 7833753,
  lightslategrey: 7833753,
  lightsteelblue: 11584734,
  lightyellow: 16777184,
  lime: 65280,
  limegreen: 3329330,
  linen: 16445670,
  magenta: 16711935,
  maroon: 8388608,
  mediumaquamarine: 6737322,
  mediumblue: 205,
  mediumorchid: 12211667,
  mediumpurple: 9662683,
  mediumseagreen: 3978097,
  mediumslateblue: 8087790,
  mediumspringgreen: 64154,
  mediumturquoise: 4772300,
  mediumvioletred: 13047173,
  midnightblue: 1644912,
  mintcream: 16121850,
  mistyrose: 16770273,
  moccasin: 16770229,
  navajowhite: 16768685,
  navy: 128,
  oldlace: 16643558,
  olive: 8421376,
  olivedrab: 7048739,
  orange: 16753920,
  orangered: 16729344,
  orchid: 14315734,
  palegoldenrod: 15657130,
  palegreen: 10025880,
  paleturquoise: 11529966,
  palevioletred: 14381203,
  papayawhip: 16773077,
  peachpuff: 16767673,
  peru: 13468991,
  pink: 16761035,
  plum: 14524637,
  powderblue: 11591910,
  purple: 8388736,
  rebeccapurple: 6697881,
  red: 16711680,
  rosybrown: 12357519,
  royalblue: 4286945,
  saddlebrown: 9127187,
  salmon: 16416882,
  sandybrown: 16032864,
  seagreen: 3050327,
  seashell: 16774638,
  sienna: 10506797,
  silver: 12632256,
  skyblue: 8900331,
  slateblue: 6970061,
  slategray: 7372944,
  slategrey: 7372944,
  snow: 16775930,
  springgreen: 65407,
  steelblue: 4620980,
  tan: 13808780,
  teal: 32896,
  thistle: 14204888,
  tomato: 16737095,
  turquoise: 4251856,
  violet: 15631086,
  wheat: 16113331,
  white: 16777215,
  whitesmoke: 16119285,
  yellow: 16776960,
  yellowgreen: 10145074
};
define(Color, color, {
  copy(channels) {
    return Object.assign(new this.constructor(), this, channels);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: color_formatHex,
  // Deprecated! Use color.formatHex.
  formatHex: color_formatHex,
  formatHex8: color_formatHex8,
  formatHsl: color_formatHsl,
  formatRgb: color_formatRgb,
  toString: color_formatRgb
});
function color_formatHex() {
  return this.rgb().formatHex();
}
function color_formatHex8() {
  return this.rgb().formatHex8();
}
function color_formatHsl() {
  return hslConvert(this).formatHsl();
}
function color_formatRgb() {
  return this.rgb().formatRgb();
}
function color(format2) {
  var m2, l;
  format2 = (format2 + "").trim().toLowerCase();
  return (m2 = reHex.exec(format2)) ? (l = m2[1].length, m2 = parseInt(m2[1], 16), l === 6 ? rgbn(m2) : l === 3 ? new Rgb(m2 >> 8 & 15 | m2 >> 4 & 240, m2 >> 4 & 15 | m2 & 240, (m2 & 15) << 4 | m2 & 15, 1) : l === 8 ? rgba(m2 >> 24 & 255, m2 >> 16 & 255, m2 >> 8 & 255, (m2 & 255) / 255) : l === 4 ? rgba(m2 >> 12 & 15 | m2 >> 8 & 240, m2 >> 8 & 15 | m2 >> 4 & 240, m2 >> 4 & 15 | m2 & 240, ((m2 & 15) << 4 | m2 & 15) / 255) : null) : (m2 = reRgbInteger.exec(format2)) ? new Rgb(m2[1], m2[2], m2[3], 1) : (m2 = reRgbPercent.exec(format2)) ? new Rgb(m2[1] * 255 / 100, m2[2] * 255 / 100, m2[3] * 255 / 100, 1) : (m2 = reRgbaInteger.exec(format2)) ? rgba(m2[1], m2[2], m2[3], m2[4]) : (m2 = reRgbaPercent.exec(format2)) ? rgba(m2[1] * 255 / 100, m2[2] * 255 / 100, m2[3] * 255 / 100, m2[4]) : (m2 = reHslPercent.exec(format2)) ? hsla(m2[1], m2[2] / 100, m2[3] / 100, 1) : (m2 = reHslaPercent.exec(format2)) ? hsla(m2[1], m2[2] / 100, m2[3] / 100, m2[4]) : named.hasOwnProperty(format2) ? rgbn(named[format2]) : format2 === "transparent" ? new Rgb(NaN, NaN, NaN, 0) : null;
}
function rgbn(n) {
  return new Rgb(n >> 16 & 255, n >> 8 & 255, n & 255, 1);
}
function rgba(r, g, b, a) {
  if (a <= 0)
    r = g = b = NaN;
  return new Rgb(r, g, b, a);
}
function rgbConvert(o) {
  if (!(o instanceof Color))
    o = color(o);
  if (!o)
    return new Rgb();
  o = o.rgb();
  return new Rgb(o.r, o.g, o.b, o.opacity);
}
function rgb(r, g, b, opacity) {
  return arguments.length === 1 ? rgbConvert(r) : new Rgb(r, g, b, opacity == null ? 1 : opacity);
}
function Rgb(r, g, b, opacity) {
  this.r = +r;
  this.g = +g;
  this.b = +b;
  this.opacity = +opacity;
}
define(Rgb, rgb, extend(Color, {
  brighter(k) {
    k = k == null ? brighter : Math.pow(brighter, k);
    return new Rgb(this.r * k, this.g * k, this.b * k, this.opacity);
  },
  darker(k) {
    k = k == null ? darker : Math.pow(darker, k);
    return new Rgb(this.r * k, this.g * k, this.b * k, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new Rgb(clampi(this.r), clampi(this.g), clampi(this.b), clampa(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && (-0.5 <= this.g && this.g < 255.5) && (-0.5 <= this.b && this.b < 255.5) && (0 <= this.opacity && this.opacity <= 1);
  },
  hex: rgb_formatHex,
  // Deprecated! Use color.formatHex.
  formatHex: rgb_formatHex,
  formatHex8: rgb_formatHex8,
  formatRgb: rgb_formatRgb,
  toString: rgb_formatRgb
}));
function rgb_formatHex() {
  return `#${hex(this.r)}${hex(this.g)}${hex(this.b)}`;
}
function rgb_formatHex8() {
  return `#${hex(this.r)}${hex(this.g)}${hex(this.b)}${hex((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function rgb_formatRgb() {
  const a = clampa(this.opacity);
  return `${a === 1 ? "rgb(" : "rgba("}${clampi(this.r)}, ${clampi(this.g)}, ${clampi(this.b)}${a === 1 ? ")" : `, ${a})`}`;
}
function clampa(opacity) {
  return isNaN(opacity) ? 1 : Math.max(0, Math.min(1, opacity));
}
function clampi(value) {
  return Math.max(0, Math.min(255, Math.round(value) || 0));
}
function hex(value) {
  value = clampi(value);
  return (value < 16 ? "0" : "") + value.toString(16);
}
function hsla(h2, s, l, a) {
  if (a <= 0)
    h2 = s = l = NaN;
  else if (l <= 0 || l >= 1)
    h2 = s = NaN;
  else if (s <= 0)
    h2 = NaN;
  return new Hsl(h2, s, l, a);
}
function hslConvert(o) {
  if (o instanceof Hsl)
    return new Hsl(o.h, o.s, o.l, o.opacity);
  if (!(o instanceof Color))
    o = color(o);
  if (!o)
    return new Hsl();
  if (o instanceof Hsl)
    return o;
  o = o.rgb();
  var r = o.r / 255, g = o.g / 255, b = o.b / 255, min = Math.min(r, g, b), max = Math.max(r, g, b), h2 = NaN, s = max - min, l = (max + min) / 2;
  if (s) {
    if (r === max)
      h2 = (g - b) / s + (g < b) * 6;
    else if (g === max)
      h2 = (b - r) / s + 2;
    else
      h2 = (r - g) / s + 4;
    s /= l < 0.5 ? max + min : 2 - max - min;
    h2 *= 60;
  } else {
    s = l > 0 && l < 1 ? 0 : h2;
  }
  return new Hsl(h2, s, l, o.opacity);
}
function hsl(h2, s, l, opacity) {
  return arguments.length === 1 ? hslConvert(h2) : new Hsl(h2, s, l, opacity == null ? 1 : opacity);
}
function Hsl(h2, s, l, opacity) {
  this.h = +h2;
  this.s = +s;
  this.l = +l;
  this.opacity = +opacity;
}
define(Hsl, hsl, extend(Color, {
  brighter(k) {
    k = k == null ? brighter : Math.pow(brighter, k);
    return new Hsl(this.h, this.s, this.l * k, this.opacity);
  },
  darker(k) {
    k = k == null ? darker : Math.pow(darker, k);
    return new Hsl(this.h, this.s, this.l * k, this.opacity);
  },
  rgb() {
    var h2 = this.h % 360 + (this.h < 0) * 360, s = isNaN(h2) || isNaN(this.s) ? 0 : this.s, l = this.l, m2 = l + (l < 0.5 ? l : 1 - l) * s, m1 = 2 * l - m2;
    return new Rgb(
      hsl2rgb(h2 >= 240 ? h2 - 240 : h2 + 120, m1, m2),
      hsl2rgb(h2, m1, m2),
      hsl2rgb(h2 < 120 ? h2 + 240 : h2 - 120, m1, m2),
      this.opacity
    );
  },
  clamp() {
    return new Hsl(clamph(this.h), clampt(this.s), clampt(this.l), clampa(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && (0 <= this.l && this.l <= 1) && (0 <= this.opacity && this.opacity <= 1);
  },
  formatHsl() {
    const a = clampa(this.opacity);
    return `${a === 1 ? "hsl(" : "hsla("}${clamph(this.h)}, ${clampt(this.s) * 100}%, ${clampt(this.l) * 100}%${a === 1 ? ")" : `, ${a})`}`;
  }
}));
function clamph(value) {
  value = (value || 0) % 360;
  return value < 0 ? value + 360 : value;
}
function clampt(value) {
  return Math.max(0, Math.min(1, value || 0));
}
function hsl2rgb(h2, m1, m2) {
  return (h2 < 60 ? m1 + (m2 - m1) * h2 / 60 : h2 < 180 ? m2 : h2 < 240 ? m1 + (m2 - m1) * (240 - h2) / 60 : m1) * 255;
}
const constant = (x) => () => x;
function linear$1(a, d2) {
  return function(t) {
    return a + t * d2;
  };
}
function exponential(a, b, y) {
  return a = Math.pow(a, y), b = Math.pow(b, y) - a, y = 1 / y, function(t) {
    return Math.pow(a + t * b, y);
  };
}
function gamma(y) {
  return (y = +y) === 1 ? nogamma : function(a, b) {
    return b - a ? exponential(a, b, y) : constant(isNaN(a) ? b : a);
  };
}
function nogamma(a, b) {
  var d2 = b - a;
  return d2 ? linear$1(a, d2) : constant(isNaN(a) ? b : a);
}
const interpolateRgb = function rgbGamma(y) {
  var color2 = gamma(y);
  function rgb$1(start2, end) {
    var r = color2((start2 = rgb(start2)).r, (end = rgb(end)).r), g = color2(start2.g, end.g), b = color2(start2.b, end.b), opacity = nogamma(start2.opacity, end.opacity);
    return function(t) {
      start2.r = r(t);
      start2.g = g(t);
      start2.b = b(t);
      start2.opacity = opacity(t);
      return start2 + "";
    };
  }
  rgb$1.gamma = rgbGamma;
  return rgb$1;
}(1);
function numberArray(a, b) {
  if (!b)
    b = [];
  var n = a ? Math.min(b.length, a.length) : 0, c = b.slice(), i;
  return function(t) {
    for (i = 0; i < n; ++i)
      c[i] = a[i] * (1 - t) + b[i] * t;
    return c;
  };
}
function isNumberArray(x) {
  return ArrayBuffer.isView(x) && !(x instanceof DataView);
}
function genericArray(a, b) {
  var nb = b ? b.length : 0, na = a ? Math.min(nb, a.length) : 0, x = new Array(na), c = new Array(nb), i;
  for (i = 0; i < na; ++i)
    x[i] = interpolate$1(a[i], b[i]);
  for (; i < nb; ++i)
    c[i] = b[i];
  return function(t) {
    for (i = 0; i < na; ++i)
      c[i] = x[i](t);
    return c;
  };
}
function date(a, b) {
  var d2 = /* @__PURE__ */ new Date();
  return a = +a, b = +b, function(t) {
    return d2.setTime(a * (1 - t) + b * t), d2;
  };
}
function interpolateNumber(a, b) {
  return a = +a, b = +b, function(t) {
    return a * (1 - t) + b * t;
  };
}
function object(a, b) {
  var i = {}, c = {}, k;
  if (a === null || typeof a !== "object")
    a = {};
  if (b === null || typeof b !== "object")
    b = {};
  for (k in b) {
    if (k in a) {
      i[k] = interpolate$1(a[k], b[k]);
    } else {
      c[k] = b[k];
    }
  }
  return function(t) {
    for (k in i)
      c[k] = i[k](t);
    return c;
  };
}
var reA = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, reB = new RegExp(reA.source, "g");
function zero(b) {
  return function() {
    return b;
  };
}
function one(b) {
  return function(t) {
    return b(t) + "";
  };
}
function interpolateString(a, b) {
  var bi = reA.lastIndex = reB.lastIndex = 0, am, bm, bs, i = -1, s = [], q2 = [];
  a = a + "", b = b + "";
  while ((am = reA.exec(a)) && (bm = reB.exec(b))) {
    if ((bs = bm.index) > bi) {
      bs = b.slice(bi, bs);
      if (s[i])
        s[i] += bs;
      else
        s[++i] = bs;
    }
    if ((am = am[0]) === (bm = bm[0])) {
      if (s[i])
        s[i] += bm;
      else
        s[++i] = bm;
    } else {
      s[++i] = null;
      q2.push({ i, x: interpolateNumber(am, bm) });
    }
    bi = reB.lastIndex;
  }
  if (bi < b.length) {
    bs = b.slice(bi);
    if (s[i])
      s[i] += bs;
    else
      s[++i] = bs;
  }
  return s.length < 2 ? q2[0] ? one(q2[0].x) : zero(b) : (b = q2.length, function(t) {
    for (var i2 = 0, o; i2 < b; ++i2)
      s[(o = q2[i2]).i] = o.x(t);
    return s.join("");
  });
}
function interpolate$1(a, b) {
  var t = typeof b, c;
  return b == null || t === "boolean" ? constant(b) : (t === "number" ? interpolateNumber : t === "string" ? (c = color(b)) ? (b = c, interpolateRgb) : interpolateString : b instanceof color ? interpolateRgb : b instanceof Date ? date : isNumberArray(b) ? numberArray : Array.isArray(b) ? genericArray : typeof b.valueOf !== "function" && typeof b.toString !== "function" || isNaN(b) ? object : interpolateNumber)(a, b);
}
function interpolateRound(a, b) {
  return a = +a, b = +b, function(t) {
    return Math.round(a * (1 - t) + b * t);
  };
}
var degrees = 180 / Math.PI;
var identity$2 = {
  translateX: 0,
  translateY: 0,
  rotate: 0,
  skewX: 0,
  scaleX: 1,
  scaleY: 1
};
function decompose(a, b, c, d2, e, f2) {
  var scaleX, scaleY, skewX;
  if (scaleX = Math.sqrt(a * a + b * b))
    a /= scaleX, b /= scaleX;
  if (skewX = a * c + b * d2)
    c -= a * skewX, d2 -= b * skewX;
  if (scaleY = Math.sqrt(c * c + d2 * d2))
    c /= scaleY, d2 /= scaleY, skewX /= scaleY;
  if (a * d2 < b * c)
    a = -a, b = -b, skewX = -skewX, scaleX = -scaleX;
  return {
    translateX: e,
    translateY: f2,
    rotate: Math.atan2(b, a) * degrees,
    skewX: Math.atan(skewX) * degrees,
    scaleX,
    scaleY
  };
}
var svgNode;
function parseCss(value) {
  const m2 = new (typeof DOMMatrix === "function" ? DOMMatrix : WebKitCSSMatrix)(value + "");
  return m2.isIdentity ? identity$2 : decompose(m2.a, m2.b, m2.c, m2.d, m2.e, m2.f);
}
function parseSvg(value) {
  if (value == null)
    return identity$2;
  if (!svgNode)
    svgNode = document.createElementNS("http://www.w3.org/2000/svg", "g");
  svgNode.setAttribute("transform", value);
  if (!(value = svgNode.transform.baseVal.consolidate()))
    return identity$2;
  value = value.matrix;
  return decompose(value.a, value.b, value.c, value.d, value.e, value.f);
}
function interpolateTransform(parse, pxComma, pxParen, degParen) {
  function pop(s) {
    return s.length ? s.pop() + " " : "";
  }
  function translate(xa, ya, xb, yb, s, q2) {
    if (xa !== xb || ya !== yb) {
      var i = s.push("translate(", null, pxComma, null, pxParen);
      q2.push({ i: i - 4, x: interpolateNumber(xa, xb) }, { i: i - 2, x: interpolateNumber(ya, yb) });
    } else if (xb || yb) {
      s.push("translate(" + xb + pxComma + yb + pxParen);
    }
  }
  function rotate(a, b, s, q2) {
    if (a !== b) {
      if (a - b > 180)
        b += 360;
      else if (b - a > 180)
        a += 360;
      q2.push({ i: s.push(pop(s) + "rotate(", null, degParen) - 2, x: interpolateNumber(a, b) });
    } else if (b) {
      s.push(pop(s) + "rotate(" + b + degParen);
    }
  }
  function skewX(a, b, s, q2) {
    if (a !== b) {
      q2.push({ i: s.push(pop(s) + "skewX(", null, degParen) - 2, x: interpolateNumber(a, b) });
    } else if (b) {
      s.push(pop(s) + "skewX(" + b + degParen);
    }
  }
  function scale(xa, ya, xb, yb, s, q2) {
    if (xa !== xb || ya !== yb) {
      var i = s.push(pop(s) + "scale(", null, ",", null, ")");
      q2.push({ i: i - 4, x: interpolateNumber(xa, xb) }, { i: i - 2, x: interpolateNumber(ya, yb) });
    } else if (xb !== 1 || yb !== 1) {
      s.push(pop(s) + "scale(" + xb + "," + yb + ")");
    }
  }
  return function(a, b) {
    var s = [], q2 = [];
    a = parse(a), b = parse(b);
    translate(a.translateX, a.translateY, b.translateX, b.translateY, s, q2);
    rotate(a.rotate, b.rotate, s, q2);
    skewX(a.skewX, b.skewX, s, q2);
    scale(a.scaleX, a.scaleY, b.scaleX, b.scaleY, s, q2);
    a = b = null;
    return function(t) {
      var i = -1, n = q2.length, o;
      while (++i < n)
        s[(o = q2[i]).i] = o.x(t);
      return s.join("");
    };
  };
}
var interpolateTransformCss = interpolateTransform(parseCss, "px, ", "px)", "deg)");
var interpolateTransformSvg = interpolateTransform(parseSvg, ", ", ")", ")");
var frame = 0, timeout$1 = 0, interval = 0, pokeDelay = 1e3, taskHead, taskTail, clockLast = 0, clockNow = 0, clockSkew = 0, clock = typeof performance === "object" && performance.now ? performance : Date, setFrame = typeof window === "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(f2) {
  setTimeout(f2, 17);
};
function now() {
  return clockNow || (setFrame(clearNow), clockNow = clock.now() + clockSkew);
}
function clearNow() {
  clockNow = 0;
}
function Timer() {
  this._call = this._time = this._next = null;
}
Timer.prototype = timer.prototype = {
  constructor: Timer,
  restart: function(callback, delay, time) {
    if (typeof callback !== "function")
      throw new TypeError("callback is not a function");
    time = (time == null ? now() : +time) + (delay == null ? 0 : +delay);
    if (!this._next && taskTail !== this) {
      if (taskTail)
        taskTail._next = this;
      else
        taskHead = this;
      taskTail = this;
    }
    this._call = callback;
    this._time = time;
    sleep();
  },
  stop: function() {
    if (this._call) {
      this._call = null;
      this._time = Infinity;
      sleep();
    }
  }
};
function timer(callback, delay, time) {
  var t = new Timer();
  t.restart(callback, delay, time);
  return t;
}
function timerFlush() {
  now();
  ++frame;
  var t = taskHead, e;
  while (t) {
    if ((e = clockNow - t._time) >= 0)
      t._call.call(void 0, e);
    t = t._next;
  }
  --frame;
}
function wake() {
  clockNow = (clockLast = clock.now()) + clockSkew;
  frame = timeout$1 = 0;
  try {
    timerFlush();
  } finally {
    frame = 0;
    nap();
    clockNow = 0;
  }
}
function poke() {
  var now2 = clock.now(), delay = now2 - clockLast;
  if (delay > pokeDelay)
    clockSkew -= delay, clockLast = now2;
}
function nap() {
  var t0, t1 = taskHead, t2, time = Infinity;
  while (t1) {
    if (t1._call) {
      if (time > t1._time)
        time = t1._time;
      t0 = t1, t1 = t1._next;
    } else {
      t2 = t1._next, t1._next = null;
      t1 = t0 ? t0._next = t2 : taskHead = t2;
    }
  }
  taskTail = t0;
  sleep(time);
}
function sleep(time) {
  if (frame)
    return;
  if (timeout$1)
    timeout$1 = clearTimeout(timeout$1);
  var delay = time - clockNow;
  if (delay > 24) {
    if (time < Infinity)
      timeout$1 = setTimeout(wake, time - clock.now() - clockSkew);
    if (interval)
      interval = clearInterval(interval);
  } else {
    if (!interval)
      clockLast = clock.now(), interval = setInterval(poke, pokeDelay);
    frame = 1, setFrame(wake);
  }
}
function timeout(callback, delay, time) {
  var t = new Timer();
  delay = delay == null ? 0 : +delay;
  t.restart((elapsed) => {
    t.stop();
    callback(elapsed + delay);
  }, delay, time);
  return t;
}
var emptyOn = dispatch("start", "end", "cancel", "interrupt");
var emptyTween = [];
var CREATED = 0;
var SCHEDULED = 1;
var STARTING = 2;
var STARTED = 3;
var RUNNING = 4;
var ENDING = 5;
var ENDED = 6;
function schedule(node, name, id2, index, group, timing) {
  var schedules = node.__transition;
  if (!schedules)
    node.__transition = {};
  else if (id2 in schedules)
    return;
  create(node, id2, {
    name,
    index,
    // For context during callback.
    group,
    // For context during callback.
    on: emptyOn,
    tween: emptyTween,
    time: timing.time,
    delay: timing.delay,
    duration: timing.duration,
    ease: timing.ease,
    timer: null,
    state: CREATED
  });
}
function init(node, id2) {
  var schedule2 = get(node, id2);
  if (schedule2.state > CREATED)
    throw new Error("too late; already scheduled");
  return schedule2;
}
function set(node, id2) {
  var schedule2 = get(node, id2);
  if (schedule2.state > STARTED)
    throw new Error("too late; already running");
  return schedule2;
}
function get(node, id2) {
  var schedule2 = node.__transition;
  if (!schedule2 || !(schedule2 = schedule2[id2]))
    throw new Error("transition not found");
  return schedule2;
}
function create(node, id2, self) {
  var schedules = node.__transition, tween;
  schedules[id2] = self;
  self.timer = timer(schedule2, 0, self.time);
  function schedule2(elapsed) {
    self.state = SCHEDULED;
    self.timer.restart(start2, self.delay, self.time);
    if (self.delay <= elapsed)
      start2(elapsed - self.delay);
  }
  function start2(elapsed) {
    var i, j2, n, o;
    if (self.state !== SCHEDULED)
      return stop();
    for (i in schedules) {
      o = schedules[i];
      if (o.name !== self.name)
        continue;
      if (o.state === STARTED)
        return timeout(start2);
      if (o.state === RUNNING) {
        o.state = ENDED;
        o.timer.stop();
        o.on.call("interrupt", node, node.__data__, o.index, o.group);
        delete schedules[i];
      } else if (+i < id2) {
        o.state = ENDED;
        o.timer.stop();
        o.on.call("cancel", node, node.__data__, o.index, o.group);
        delete schedules[i];
      }
    }
    timeout(function() {
      if (self.state === STARTED) {
        self.state = RUNNING;
        self.timer.restart(tick, self.delay, self.time);
        tick(elapsed);
      }
    });
    self.state = STARTING;
    self.on.call("start", node, node.__data__, self.index, self.group);
    if (self.state !== STARTING)
      return;
    self.state = STARTED;
    tween = new Array(n = self.tween.length);
    for (i = 0, j2 = -1; i < n; ++i) {
      if (o = self.tween[i].value.call(node, node.__data__, self.index, self.group)) {
        tween[++j2] = o;
      }
    }
    tween.length = j2 + 1;
  }
  function tick(elapsed) {
    var t = elapsed < self.duration ? self.ease.call(null, elapsed / self.duration) : (self.timer.restart(stop), self.state = ENDING, 1), i = -1, n = tween.length;
    while (++i < n) {
      tween[i].call(node, t);
    }
    if (self.state === ENDING) {
      self.on.call("end", node, node.__data__, self.index, self.group);
      stop();
    }
  }
  function stop() {
    self.state = ENDED;
    self.timer.stop();
    delete schedules[id2];
    for (var i in schedules)
      return;
    delete node.__transition;
  }
}
function interrupt(node, name) {
  var schedules = node.__transition, schedule2, active, empty2 = true, i;
  if (!schedules)
    return;
  name = name == null ? null : name + "";
  for (i in schedules) {
    if ((schedule2 = schedules[i]).name !== name) {
      empty2 = false;
      continue;
    }
    active = schedule2.state > STARTING && schedule2.state < ENDING;
    schedule2.state = ENDED;
    schedule2.timer.stop();
    schedule2.on.call(active ? "interrupt" : "cancel", node, node.__data__, schedule2.index, schedule2.group);
    delete schedules[i];
  }
  if (empty2)
    delete node.__transition;
}
function selection_interrupt(name) {
  return this.each(function() {
    interrupt(this, name);
  });
}
function tweenRemove(id2, name) {
  var tween0, tween1;
  return function() {
    var schedule2 = set(this, id2), tween = schedule2.tween;
    if (tween !== tween0) {
      tween1 = tween0 = tween;
      for (var i = 0, n = tween1.length; i < n; ++i) {
        if (tween1[i].name === name) {
          tween1 = tween1.slice();
          tween1.splice(i, 1);
          break;
        }
      }
    }
    schedule2.tween = tween1;
  };
}
function tweenFunction(id2, name, value) {
  var tween0, tween1;
  if (typeof value !== "function")
    throw new Error();
  return function() {
    var schedule2 = set(this, id2), tween = schedule2.tween;
    if (tween !== tween0) {
      tween1 = (tween0 = tween).slice();
      for (var t = { name, value }, i = 0, n = tween1.length; i < n; ++i) {
        if (tween1[i].name === name) {
          tween1[i] = t;
          break;
        }
      }
      if (i === n)
        tween1.push(t);
    }
    schedule2.tween = tween1;
  };
}
function transition_tween(name, value) {
  var id2 = this._id;
  name += "";
  if (arguments.length < 2) {
    var tween = get(this.node(), id2).tween;
    for (var i = 0, n = tween.length, t; i < n; ++i) {
      if ((t = tween[i]).name === name) {
        return t.value;
      }
    }
    return null;
  }
  return this.each((value == null ? tweenRemove : tweenFunction)(id2, name, value));
}
function tweenValue(transition, name, value) {
  var id2 = transition._id;
  transition.each(function() {
    var schedule2 = set(this, id2);
    (schedule2.value || (schedule2.value = {}))[name] = value.apply(this, arguments);
  });
  return function(node) {
    return get(node, id2).value[name];
  };
}
function interpolate(a, b) {
  var c;
  return (typeof b === "number" ? interpolateNumber : b instanceof color ? interpolateRgb : (c = color(b)) ? (b = c, interpolateRgb) : interpolateString)(a, b);
}
function attrRemove(name) {
  return function() {
    this.removeAttribute(name);
  };
}
function attrRemoveNS(fullname) {
  return function() {
    this.removeAttributeNS(fullname.space, fullname.local);
  };
}
function attrConstant(name, interpolate2, value1) {
  var string00, string1 = value1 + "", interpolate0;
  return function() {
    var string0 = this.getAttribute(name);
    return string0 === string1 ? null : string0 === string00 ? interpolate0 : interpolate0 = interpolate2(string00 = string0, value1);
  };
}
function attrConstantNS(fullname, interpolate2, value1) {
  var string00, string1 = value1 + "", interpolate0;
  return function() {
    var string0 = this.getAttributeNS(fullname.space, fullname.local);
    return string0 === string1 ? null : string0 === string00 ? interpolate0 : interpolate0 = interpolate2(string00 = string0, value1);
  };
}
function attrFunction(name, interpolate2, value) {
  var string00, string10, interpolate0;
  return function() {
    var string0, value1 = value(this), string1;
    if (value1 == null)
      return void this.removeAttribute(name);
    string0 = this.getAttribute(name);
    string1 = value1 + "";
    return string0 === string1 ? null : string0 === string00 && string1 === string10 ? interpolate0 : (string10 = string1, interpolate0 = interpolate2(string00 = string0, value1));
  };
}
function attrFunctionNS(fullname, interpolate2, value) {
  var string00, string10, interpolate0;
  return function() {
    var string0, value1 = value(this), string1;
    if (value1 == null)
      return void this.removeAttributeNS(fullname.space, fullname.local);
    string0 = this.getAttributeNS(fullname.space, fullname.local);
    string1 = value1 + "";
    return string0 === string1 ? null : string0 === string00 && string1 === string10 ? interpolate0 : (string10 = string1, interpolate0 = interpolate2(string00 = string0, value1));
  };
}
function transition_attr(name, value) {
  var fullname = namespace(name), i = fullname === "transform" ? interpolateTransformSvg : interpolate;
  return this.attrTween(name, typeof value === "function" ? (fullname.local ? attrFunctionNS : attrFunction)(fullname, i, tweenValue(this, "attr." + name, value)) : value == null ? (fullname.local ? attrRemoveNS : attrRemove)(fullname) : (fullname.local ? attrConstantNS : attrConstant)(fullname, i, value));
}
function attrInterpolate(name, i) {
  return function(t) {
    this.setAttribute(name, i.call(this, t));
  };
}
function attrInterpolateNS(fullname, i) {
  return function(t) {
    this.setAttributeNS(fullname.space, fullname.local, i.call(this, t));
  };
}
function attrTweenNS(fullname, value) {
  var t0, i0;
  function tween() {
    var i = value.apply(this, arguments);
    if (i !== i0)
      t0 = (i0 = i) && attrInterpolateNS(fullname, i);
    return t0;
  }
  tween._value = value;
  return tween;
}
function attrTween(name, value) {
  var t0, i0;
  function tween() {
    var i = value.apply(this, arguments);
    if (i !== i0)
      t0 = (i0 = i) && attrInterpolate(name, i);
    return t0;
  }
  tween._value = value;
  return tween;
}
function transition_attrTween(name, value) {
  var key = "attr." + name;
  if (arguments.length < 2)
    return (key = this.tween(key)) && key._value;
  if (value == null)
    return this.tween(key, null);
  if (typeof value !== "function")
    throw new Error();
  var fullname = namespace(name);
  return this.tween(key, (fullname.local ? attrTweenNS : attrTween)(fullname, value));
}
function delayFunction(id2, value) {
  return function() {
    init(this, id2).delay = +value.apply(this, arguments);
  };
}
function delayConstant(id2, value) {
  return value = +value, function() {
    init(this, id2).delay = value;
  };
}
function transition_delay(value) {
  var id2 = this._id;
  return arguments.length ? this.each((typeof value === "function" ? delayFunction : delayConstant)(id2, value)) : get(this.node(), id2).delay;
}
function durationFunction(id2, value) {
  return function() {
    set(this, id2).duration = +value.apply(this, arguments);
  };
}
function durationConstant(id2, value) {
  return value = +value, function() {
    set(this, id2).duration = value;
  };
}
function transition_duration(value) {
  var id2 = this._id;
  return arguments.length ? this.each((typeof value === "function" ? durationFunction : durationConstant)(id2, value)) : get(this.node(), id2).duration;
}
function easeConstant(id2, value) {
  if (typeof value !== "function")
    throw new Error();
  return function() {
    set(this, id2).ease = value;
  };
}
function transition_ease(value) {
  var id2 = this._id;
  return arguments.length ? this.each(easeConstant(id2, value)) : get(this.node(), id2).ease;
}
function easeVarying(id2, value) {
  return function() {
    var v2 = value.apply(this, arguments);
    if (typeof v2 !== "function")
      throw new Error();
    set(this, id2).ease = v2;
  };
}
function transition_easeVarying(value) {
  if (typeof value !== "function")
    throw new Error();
  return this.each(easeVarying(this._id, value));
}
function transition_filter(match) {
  if (typeof match !== "function")
    match = matcher(match);
  for (var groups = this._groups, m2 = groups.length, subgroups = new Array(m2), j2 = 0; j2 < m2; ++j2) {
    for (var group = groups[j2], n = group.length, subgroup = subgroups[j2] = [], node, i = 0; i < n; ++i) {
      if ((node = group[i]) && match.call(node, node.__data__, i, group)) {
        subgroup.push(node);
      }
    }
  }
  return new Transition(subgroups, this._parents, this._name, this._id);
}
function transition_merge(transition) {
  if (transition._id !== this._id)
    throw new Error();
  for (var groups0 = this._groups, groups1 = transition._groups, m0 = groups0.length, m1 = groups1.length, m2 = Math.min(m0, m1), merges = new Array(m0), j2 = 0; j2 < m2; ++j2) {
    for (var group0 = groups0[j2], group1 = groups1[j2], n = group0.length, merge = merges[j2] = new Array(n), node, i = 0; i < n; ++i) {
      if (node = group0[i] || group1[i]) {
        merge[i] = node;
      }
    }
  }
  for (; j2 < m0; ++j2) {
    merges[j2] = groups0[j2];
  }
  return new Transition(merges, this._parents, this._name, this._id);
}
function start(name) {
  return (name + "").trim().split(/^|\s+/).every(function(t) {
    var i = t.indexOf(".");
    if (i >= 0)
      t = t.slice(0, i);
    return !t || t === "start";
  });
}
function onFunction(id2, name, listener) {
  var on0, on1, sit = start(name) ? init : set;
  return function() {
    var schedule2 = sit(this, id2), on = schedule2.on;
    if (on !== on0)
      (on1 = (on0 = on).copy()).on(name, listener);
    schedule2.on = on1;
  };
}
function transition_on(name, listener) {
  var id2 = this._id;
  return arguments.length < 2 ? get(this.node(), id2).on.on(name) : this.each(onFunction(id2, name, listener));
}
function removeFunction(id2) {
  return function() {
    var parent = this.parentNode;
    for (var i in this.__transition)
      if (+i !== id2)
        return;
    if (parent)
      parent.removeChild(this);
  };
}
function transition_remove() {
  return this.on("end.remove", removeFunction(this._id));
}
function transition_select(select2) {
  var name = this._name, id2 = this._id;
  if (typeof select2 !== "function")
    select2 = selector(select2);
  for (var groups = this._groups, m2 = groups.length, subgroups = new Array(m2), j2 = 0; j2 < m2; ++j2) {
    for (var group = groups[j2], n = group.length, subgroup = subgroups[j2] = new Array(n), node, subnode, i = 0; i < n; ++i) {
      if ((node = group[i]) && (subnode = select2.call(node, node.__data__, i, group))) {
        if ("__data__" in node)
          subnode.__data__ = node.__data__;
        subgroup[i] = subnode;
        schedule(subgroup[i], name, id2, i, subgroup, get(node, id2));
      }
    }
  }
  return new Transition(subgroups, this._parents, name, id2);
}
function transition_selectAll(select2) {
  var name = this._name, id2 = this._id;
  if (typeof select2 !== "function")
    select2 = selectorAll(select2);
  for (var groups = this._groups, m2 = groups.length, subgroups = [], parents = [], j2 = 0; j2 < m2; ++j2) {
    for (var group = groups[j2], n = group.length, node, i = 0; i < n; ++i) {
      if (node = group[i]) {
        for (var children2 = select2.call(node, node.__data__, i, group), child, inherit2 = get(node, id2), k = 0, l = children2.length; k < l; ++k) {
          if (child = children2[k]) {
            schedule(child, name, id2, k, children2, inherit2);
          }
        }
        subgroups.push(children2);
        parents.push(node);
      }
    }
  }
  return new Transition(subgroups, parents, name, id2);
}
var Selection = selection.prototype.constructor;
function transition_selection() {
  return new Selection(this._groups, this._parents);
}
function styleNull(name, interpolate2) {
  var string00, string10, interpolate0;
  return function() {
    var string0 = styleValue(this, name), string1 = (this.style.removeProperty(name), styleValue(this, name));
    return string0 === string1 ? null : string0 === string00 && string1 === string10 ? interpolate0 : interpolate0 = interpolate2(string00 = string0, string10 = string1);
  };
}
function styleRemove(name) {
  return function() {
    this.style.removeProperty(name);
  };
}
function styleConstant(name, interpolate2, value1) {
  var string00, string1 = value1 + "", interpolate0;
  return function() {
    var string0 = styleValue(this, name);
    return string0 === string1 ? null : string0 === string00 ? interpolate0 : interpolate0 = interpolate2(string00 = string0, value1);
  };
}
function styleFunction(name, interpolate2, value) {
  var string00, string10, interpolate0;
  return function() {
    var string0 = styleValue(this, name), value1 = value(this), string1 = value1 + "";
    if (value1 == null)
      string1 = value1 = (this.style.removeProperty(name), styleValue(this, name));
    return string0 === string1 ? null : string0 === string00 && string1 === string10 ? interpolate0 : (string10 = string1, interpolate0 = interpolate2(string00 = string0, value1));
  };
}
function styleMaybeRemove(id2, name) {
  var on0, on1, listener0, key = "style." + name, event = "end." + key, remove2;
  return function() {
    var schedule2 = set(this, id2), on = schedule2.on, listener = schedule2.value[key] == null ? remove2 || (remove2 = styleRemove(name)) : void 0;
    if (on !== on0 || listener0 !== listener)
      (on1 = (on0 = on).copy()).on(event, listener0 = listener);
    schedule2.on = on1;
  };
}
function transition_style(name, value, priority) {
  var i = (name += "") === "transform" ? interpolateTransformCss : interpolate;
  return value == null ? this.styleTween(name, styleNull(name, i)).on("end.style." + name, styleRemove(name)) : typeof value === "function" ? this.styleTween(name, styleFunction(name, i, tweenValue(this, "style." + name, value))).each(styleMaybeRemove(this._id, name)) : this.styleTween(name, styleConstant(name, i, value), priority).on("end.style." + name, null);
}
function styleInterpolate(name, i, priority) {
  return function(t) {
    this.style.setProperty(name, i.call(this, t), priority);
  };
}
function styleTween(name, value, priority) {
  var t, i0;
  function tween() {
    var i = value.apply(this, arguments);
    if (i !== i0)
      t = (i0 = i) && styleInterpolate(name, i, priority);
    return t;
  }
  tween._value = value;
  return tween;
}
function transition_styleTween(name, value, priority) {
  var key = "style." + (name += "");
  if (arguments.length < 2)
    return (key = this.tween(key)) && key._value;
  if (value == null)
    return this.tween(key, null);
  if (typeof value !== "function")
    throw new Error();
  return this.tween(key, styleTween(name, value, priority == null ? "" : priority));
}
function textConstant(value) {
  return function() {
    this.textContent = value;
  };
}
function textFunction(value) {
  return function() {
    var value1 = value(this);
    this.textContent = value1 == null ? "" : value1;
  };
}
function transition_text(value) {
  return this.tween("text", typeof value === "function" ? textFunction(tweenValue(this, "text", value)) : textConstant(value == null ? "" : value + ""));
}
function textInterpolate(i) {
  return function(t) {
    this.textContent = i.call(this, t);
  };
}
function textTween(value) {
  var t0, i0;
  function tween() {
    var i = value.apply(this, arguments);
    if (i !== i0)
      t0 = (i0 = i) && textInterpolate(i);
    return t0;
  }
  tween._value = value;
  return tween;
}
function transition_textTween(value) {
  var key = "text";
  if (arguments.length < 1)
    return (key = this.tween(key)) && key._value;
  if (value == null)
    return this.tween(key, null);
  if (typeof value !== "function")
    throw new Error();
  return this.tween(key, textTween(value));
}
function transition_transition() {
  var name = this._name, id0 = this._id, id1 = newId();
  for (var groups = this._groups, m2 = groups.length, j2 = 0; j2 < m2; ++j2) {
    for (var group = groups[j2], n = group.length, node, i = 0; i < n; ++i) {
      if (node = group[i]) {
        var inherit2 = get(node, id0);
        schedule(node, name, id1, i, group, {
          time: inherit2.time + inherit2.delay + inherit2.duration,
          delay: 0,
          duration: inherit2.duration,
          ease: inherit2.ease
        });
      }
    }
  }
  return new Transition(groups, this._parents, name, id1);
}
function transition_end() {
  var on0, on1, that = this, id2 = that._id, size = that.size();
  return new Promise(function(resolve, reject) {
    var cancel = { value: reject }, end = { value: function() {
      if (--size === 0)
        resolve();
    } };
    that.each(function() {
      var schedule2 = set(this, id2), on = schedule2.on;
      if (on !== on0) {
        on1 = (on0 = on).copy();
        on1._.cancel.push(cancel);
        on1._.interrupt.push(cancel);
        on1._.end.push(end);
      }
      schedule2.on = on1;
    });
    if (size === 0)
      resolve();
  });
}
var id = 0;
function Transition(groups, parents, name, id2) {
  this._groups = groups;
  this._parents = parents;
  this._name = name;
  this._id = id2;
}
function newId() {
  return ++id;
}
var selection_prototype = selection.prototype;
Transition.prototype = {
  constructor: Transition,
  select: transition_select,
  selectAll: transition_selectAll,
  selectChild: selection_prototype.selectChild,
  selectChildren: selection_prototype.selectChildren,
  filter: transition_filter,
  merge: transition_merge,
  selection: transition_selection,
  transition: transition_transition,
  call: selection_prototype.call,
  nodes: selection_prototype.nodes,
  node: selection_prototype.node,
  size: selection_prototype.size,
  empty: selection_prototype.empty,
  each: selection_prototype.each,
  on: transition_on,
  attr: transition_attr,
  attrTween: transition_attrTween,
  style: transition_style,
  styleTween: transition_styleTween,
  text: transition_text,
  textTween: transition_textTween,
  remove: transition_remove,
  tween: transition_tween,
  delay: transition_delay,
  duration: transition_duration,
  ease: transition_ease,
  easeVarying: transition_easeVarying,
  end: transition_end,
  [Symbol.iterator]: selection_prototype[Symbol.iterator]
};
function cubicInOut(t) {
  return ((t *= 2) <= 1 ? t * t * t : (t -= 2) * t * t + 2) / 2;
}
var defaultTiming = {
  time: null,
  // Set on use.
  delay: 0,
  duration: 250,
  ease: cubicInOut
};
function inherit(node, id2) {
  var timing;
  while (!(timing = node.__transition) || !(timing = timing[id2])) {
    if (!(node = node.parentNode)) {
      throw new Error(`transition ${id2} not found`);
    }
  }
  return timing;
}
function selection_transition(name) {
  var id2, timing;
  if (name instanceof Transition) {
    id2 = name._id, name = name._name;
  } else {
    id2 = newId(), (timing = defaultTiming).time = now(), name = name == null ? null : name + "";
  }
  for (var groups = this._groups, m2 = groups.length, j2 = 0; j2 < m2; ++j2) {
    for (var group = groups[j2], n = group.length, node, i = 0; i < n; ++i) {
      if (node = group[i]) {
        schedule(node, name, id2, i, group, timing || inherit(node, id2));
      }
    }
  }
  return new Transition(groups, this._parents, name, id2);
}
selection.prototype.interrupt = selection_interrupt;
selection.prototype.transition = selection_transition;
function formatDecimal(x) {
  return Math.abs(x = Math.round(x)) >= 1e21 ? x.toLocaleString("en").replace(/,/g, "") : x.toString(10);
}
function formatDecimalParts(x, p) {
  if (!isFinite(x) || x === 0)
    return null;
  var i = (x = p ? x.toExponential(p - 1) : x.toExponential()).indexOf("e"), coefficient = x.slice(0, i);
  return [
    coefficient.length > 1 ? coefficient[0] + coefficient.slice(2) : coefficient,
    +x.slice(i + 1)
  ];
}
function exponent(x) {
  return x = formatDecimalParts(Math.abs(x)), x ? x[1] : NaN;
}
function formatGroup(grouping, thousands) {
  return function(value, width) {
    var i = value.length, t = [], j2 = 0, g = grouping[0], length = 0;
    while (i > 0 && g > 0) {
      if (length + g + 1 > width)
        g = Math.max(1, width - length);
      t.push(value.substring(i -= g, i + g));
      if ((length += g + 1) > width)
        break;
      g = grouping[j2 = (j2 + 1) % grouping.length];
    }
    return t.reverse().join(thousands);
  };
}
function formatNumerals(numerals) {
  return function(value) {
    return value.replace(/[0-9]/g, function(i) {
      return numerals[+i];
    });
  };
}
var re = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
function formatSpecifier(specifier) {
  if (!(match = re.exec(specifier)))
    throw new Error("invalid format: " + specifier);
  var match;
  return new FormatSpecifier({
    fill: match[1],
    align: match[2],
    sign: match[3],
    symbol: match[4],
    zero: match[5],
    width: match[6],
    comma: match[7],
    precision: match[8] && match[8].slice(1),
    trim: match[9],
    type: match[10]
  });
}
formatSpecifier.prototype = FormatSpecifier.prototype;
function FormatSpecifier(specifier) {
  this.fill = specifier.fill === void 0 ? " " : specifier.fill + "";
  this.align = specifier.align === void 0 ? ">" : specifier.align + "";
  this.sign = specifier.sign === void 0 ? "-" : specifier.sign + "";
  this.symbol = specifier.symbol === void 0 ? "" : specifier.symbol + "";
  this.zero = !!specifier.zero;
  this.width = specifier.width === void 0 ? void 0 : +specifier.width;
  this.comma = !!specifier.comma;
  this.precision = specifier.precision === void 0 ? void 0 : +specifier.precision;
  this.trim = !!specifier.trim;
  this.type = specifier.type === void 0 ? "" : specifier.type + "";
}
FormatSpecifier.prototype.toString = function() {
  return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (this.width === void 0 ? "" : Math.max(1, this.width | 0)) + (this.comma ? "," : "") + (this.precision === void 0 ? "" : "." + Math.max(0, this.precision | 0)) + (this.trim ? "~" : "") + this.type;
};
function formatTrim(s) {
  out:
    for (var n = s.length, i = 1, i0 = -1, i1; i < n; ++i) {
      switch (s[i]) {
        case ".":
          i0 = i1 = i;
          break;
        case "0":
          if (i0 === 0)
            i0 = i;
          i1 = i;
          break;
        default:
          if (!+s[i])
            break out;
          if (i0 > 0)
            i0 = 0;
          break;
      }
    }
  return i0 > 0 ? s.slice(0, i0) + s.slice(i1 + 1) : s;
}
var prefixExponent;
function formatPrefixAuto(x, p) {
  var d2 = formatDecimalParts(x, p);
  if (!d2)
    return prefixExponent = void 0, x.toPrecision(p);
  var coefficient = d2[0], exponent2 = d2[1], i = exponent2 - (prefixExponent = Math.max(-8, Math.min(8, Math.floor(exponent2 / 3))) * 3) + 1, n = coefficient.length;
  return i === n ? coefficient : i > n ? coefficient + new Array(i - n + 1).join("0") : i > 0 ? coefficient.slice(0, i) + "." + coefficient.slice(i) : "0." + new Array(1 - i).join("0") + formatDecimalParts(x, Math.max(0, p + i - 1))[0];
}
function formatRounded(x, p) {
  var d2 = formatDecimalParts(x, p);
  if (!d2)
    return x + "";
  var coefficient = d2[0], exponent2 = d2[1];
  return exponent2 < 0 ? "0." + new Array(-exponent2).join("0") + coefficient : coefficient.length > exponent2 + 1 ? coefficient.slice(0, exponent2 + 1) + "." + coefficient.slice(exponent2 + 1) : coefficient + new Array(exponent2 - coefficient.length + 2).join("0");
}
const formatTypes = {
  "%": (x, p) => (x * 100).toFixed(p),
  "b": (x) => Math.round(x).toString(2),
  "c": (x) => x + "",
  "d": formatDecimal,
  "e": (x, p) => x.toExponential(p),
  "f": (x, p) => x.toFixed(p),
  "g": (x, p) => x.toPrecision(p),
  "o": (x) => Math.round(x).toString(8),
  "p": (x, p) => formatRounded(x * 100, p),
  "r": formatRounded,
  "s": formatPrefixAuto,
  "X": (x) => Math.round(x).toString(16).toUpperCase(),
  "x": (x) => Math.round(x).toString(16)
};
function identity$1(x) {
  return x;
}
var map = Array.prototype.map, prefixes = ["y", "z", "a", "f", "p", "n", "µ", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];
function formatLocale(locale2) {
  var group = locale2.grouping === void 0 || locale2.thousands === void 0 ? identity$1 : formatGroup(map.call(locale2.grouping, Number), locale2.thousands + ""), currencyPrefix = locale2.currency === void 0 ? "" : locale2.currency[0] + "", currencySuffix = locale2.currency === void 0 ? "" : locale2.currency[1] + "", decimal = locale2.decimal === void 0 ? "." : locale2.decimal + "", numerals = locale2.numerals === void 0 ? identity$1 : formatNumerals(map.call(locale2.numerals, String)), percent = locale2.percent === void 0 ? "%" : locale2.percent + "", minus = locale2.minus === void 0 ? "−" : locale2.minus + "", nan = locale2.nan === void 0 ? "NaN" : locale2.nan + "";
  function newFormat(specifier, options) {
    specifier = formatSpecifier(specifier);
    var fill = specifier.fill, align = specifier.align, sign = specifier.sign, symbol = specifier.symbol, zero2 = specifier.zero, width = specifier.width, comma = specifier.comma, precision = specifier.precision, trim = specifier.trim, type = specifier.type;
    if (type === "n")
      comma = true, type = "g";
    else if (!formatTypes[type])
      precision === void 0 && (precision = 12), trim = true, type = "g";
    if (zero2 || fill === "0" && align === "=")
      zero2 = true, fill = "0", align = "=";
    var prefix = (options && options.prefix !== void 0 ? options.prefix : "") + (symbol === "$" ? currencyPrefix : symbol === "#" && /[boxX]/.test(type) ? "0" + type.toLowerCase() : ""), suffix = (symbol === "$" ? currencySuffix : /[%p]/.test(type) ? percent : "") + (options && options.suffix !== void 0 ? options.suffix : "");
    var formatType = formatTypes[type], maybeSuffix = /[defgprs%]/.test(type);
    precision = precision === void 0 ? 6 : /[gprs]/.test(type) ? Math.max(1, Math.min(21, precision)) : Math.max(0, Math.min(20, precision));
    function format2(value) {
      var valuePrefix = prefix, valueSuffix = suffix, i, n, c;
      if (type === "c") {
        valueSuffix = formatType(value) + valueSuffix;
        value = "";
      } else {
        value = +value;
        var valueNegative = value < 0 || 1 / value < 0;
        value = isNaN(value) ? nan : formatType(Math.abs(value), precision);
        if (trim)
          value = formatTrim(value);
        if (valueNegative && +value === 0 && sign !== "+")
          valueNegative = false;
        valuePrefix = (valueNegative ? sign === "(" ? sign : minus : sign === "-" || sign === "(" ? "" : sign) + valuePrefix;
        valueSuffix = (type === "s" && !isNaN(value) && prefixExponent !== void 0 ? prefixes[8 + prefixExponent / 3] : "") + valueSuffix + (valueNegative && sign === "(" ? ")" : "");
        if (maybeSuffix) {
          i = -1, n = value.length;
          while (++i < n) {
            if (c = value.charCodeAt(i), 48 > c || c > 57) {
              valueSuffix = (c === 46 ? decimal + value.slice(i + 1) : value.slice(i)) + valueSuffix;
              value = value.slice(0, i);
              break;
            }
          }
        }
      }
      if (comma && !zero2)
        value = group(value, Infinity);
      var length = valuePrefix.length + value.length + valueSuffix.length, padding = length < width ? new Array(width - length + 1).join(fill) : "";
      if (comma && zero2)
        value = group(padding + value, padding.length ? width - valueSuffix.length : Infinity), padding = "";
      switch (align) {
        case "<":
          value = valuePrefix + value + valueSuffix + padding;
          break;
        case "=":
          value = valuePrefix + padding + value + valueSuffix;
          break;
        case "^":
          value = padding.slice(0, length = padding.length >> 1) + valuePrefix + value + valueSuffix + padding.slice(length);
          break;
        default:
          value = padding + valuePrefix + value + valueSuffix;
          break;
      }
      return numerals(value);
    }
    format2.toString = function() {
      return specifier + "";
    };
    return format2;
  }
  function formatPrefix2(specifier, value) {
    var e = Math.max(-8, Math.min(8, Math.floor(exponent(value) / 3))) * 3, k = Math.pow(10, -e), f2 = newFormat((specifier = formatSpecifier(specifier), specifier.type = "f", specifier), { suffix: prefixes[8 + e / 3] });
    return function(value2) {
      return f2(k * value2);
    };
  }
  return {
    format: newFormat,
    formatPrefix: formatPrefix2
  };
}
var locale;
var format;
var formatPrefix;
defaultLocale({
  thousands: ",",
  grouping: [3],
  currency: ["$", ""]
});
function defaultLocale(definition) {
  locale = formatLocale(definition);
  format = locale.format;
  formatPrefix = locale.formatPrefix;
  return locale;
}
function precisionFixed(step) {
  return Math.max(0, -exponent(Math.abs(step)));
}
function precisionPrefix(step, value) {
  return Math.max(0, Math.max(-8, Math.min(8, Math.floor(exponent(value) / 3))) * 3 - exponent(Math.abs(step)));
}
function precisionRound(step, max) {
  step = Math.abs(step), max = Math.abs(max) - step;
  return Math.max(0, exponent(max) - exponent(step)) + 1;
}
function initRange(domain, range) {
  switch (arguments.length) {
    case 0:
      break;
    case 1:
      this.range(domain);
      break;
    default:
      this.range(range).domain(domain);
      break;
  }
  return this;
}
function constants(x) {
  return function() {
    return x;
  };
}
function number(x) {
  return +x;
}
var unit = [0, 1];
function identity(x) {
  return x;
}
function normalize(a, b) {
  return (b -= a = +a) ? function(x) {
    return (x - a) / b;
  } : constants(isNaN(b) ? NaN : 0.5);
}
function clamper(a, b) {
  var t;
  if (a > b)
    t = a, a = b, b = t;
  return function(x) {
    return Math.max(a, Math.min(b, x));
  };
}
function bimap(domain, range, interpolate2) {
  var d0 = domain[0], d1 = domain[1], r0 = range[0], r1 = range[1];
  if (d1 < d0)
    d0 = normalize(d1, d0), r0 = interpolate2(r1, r0);
  else
    d0 = normalize(d0, d1), r0 = interpolate2(r0, r1);
  return function(x) {
    return r0(d0(x));
  };
}
function polymap(domain, range, interpolate2) {
  var j2 = Math.min(domain.length, range.length) - 1, d2 = new Array(j2), r = new Array(j2), i = -1;
  if (domain[j2] < domain[0]) {
    domain = domain.slice().reverse();
    range = range.slice().reverse();
  }
  while (++i < j2) {
    d2[i] = normalize(domain[i], domain[i + 1]);
    r[i] = interpolate2(range[i], range[i + 1]);
  }
  return function(x) {
    var i2 = bisect(domain, x, 1, j2) - 1;
    return r[i2](d2[i2](x));
  };
}
function copy(source, target) {
  return target.domain(source.domain()).range(source.range()).interpolate(source.interpolate()).clamp(source.clamp()).unknown(source.unknown());
}
function transformer() {
  var domain = unit, range = unit, interpolate2 = interpolate$1, transform, untransform, unknown, clamp = identity, piecewise, output, input;
  function rescale() {
    var n = Math.min(domain.length, range.length);
    if (clamp !== identity)
      clamp = clamper(domain[0], domain[n - 1]);
    piecewise = n > 2 ? polymap : bimap;
    output = input = null;
    return scale;
  }
  function scale(x) {
    return x == null || isNaN(x = +x) ? unknown : (output || (output = piecewise(domain.map(transform), range, interpolate2)))(transform(clamp(x)));
  }
  scale.invert = function(y) {
    return clamp(untransform((input || (input = piecewise(range, domain.map(transform), interpolateNumber)))(y)));
  };
  scale.domain = function(_) {
    return arguments.length ? (domain = Array.from(_, number), rescale()) : domain.slice();
  };
  scale.range = function(_) {
    return arguments.length ? (range = Array.from(_), rescale()) : range.slice();
  };
  scale.rangeRound = function(_) {
    return range = Array.from(_), interpolate2 = interpolateRound, rescale();
  };
  scale.clamp = function(_) {
    return arguments.length ? (clamp = _ ? true : identity, rescale()) : clamp !== identity;
  };
  scale.interpolate = function(_) {
    return arguments.length ? (interpolate2 = _, rescale()) : interpolate2;
  };
  scale.unknown = function(_) {
    return arguments.length ? (unknown = _, scale) : unknown;
  };
  return function(t, u) {
    transform = t, untransform = u;
    return rescale();
  };
}
function continuous() {
  return transformer()(identity, identity);
}
function tickFormat(start2, stop, count, specifier) {
  var step = tickStep(start2, stop, count), precision;
  specifier = formatSpecifier(specifier == null ? ",f" : specifier);
  switch (specifier.type) {
    case "s": {
      var value = Math.max(Math.abs(start2), Math.abs(stop));
      if (specifier.precision == null && !isNaN(precision = precisionPrefix(step, value)))
        specifier.precision = precision;
      return formatPrefix(specifier, value);
    }
    case "":
    case "e":
    case "g":
    case "p":
    case "r": {
      if (specifier.precision == null && !isNaN(precision = precisionRound(step, Math.max(Math.abs(start2), Math.abs(stop)))))
        specifier.precision = precision - (specifier.type === "e");
      break;
    }
    case "f":
    case "%": {
      if (specifier.precision == null && !isNaN(precision = precisionFixed(step)))
        specifier.precision = precision - (specifier.type === "%") * 2;
      break;
    }
  }
  return format(specifier);
}
function linearish(scale) {
  var domain = scale.domain;
  scale.ticks = function(count) {
    var d2 = domain();
    return ticks(d2[0], d2[d2.length - 1], count == null ? 10 : count);
  };
  scale.tickFormat = function(count, specifier) {
    var d2 = domain();
    return tickFormat(d2[0], d2[d2.length - 1], count == null ? 10 : count, specifier);
  };
  scale.nice = function(count) {
    if (count == null)
      count = 10;
    var d2 = domain();
    var i0 = 0;
    var i1 = d2.length - 1;
    var start2 = d2[i0];
    var stop = d2[i1];
    var prestep;
    var step;
    var maxIter = 10;
    if (stop < start2) {
      step = start2, start2 = stop, stop = step;
      step = i0, i0 = i1, i1 = step;
    }
    while (maxIter-- > 0) {
      step = tickIncrement(start2, stop, count);
      if (step === prestep) {
        d2[i0] = start2;
        d2[i1] = stop;
        return domain(d2);
      } else if (step > 0) {
        start2 = Math.floor(start2 / step) * step;
        stop = Math.ceil(stop / step) * step;
      } else if (step < 0) {
        start2 = Math.ceil(start2 * step) / step;
        stop = Math.floor(stop * step) / step;
      } else {
        break;
      }
      prestep = step;
    }
    return scale;
  };
  return scale;
}
function linear() {
  var scale = continuous();
  scale.copy = function() {
    return copy(scale, linear());
  };
  initRange.apply(scale, arguments);
  return linearish(scale);
}
function Transform(k, x, y) {
  this.k = k;
  this.x = x;
  this.y = y;
}
Transform.prototype = {
  constructor: Transform,
  scale: function(k) {
    return k === 1 ? this : new Transform(this.k * k, this.x, this.y);
  },
  translate: function(x, y) {
    return x === 0 & y === 0 ? this : new Transform(this.k, this.x + this.k * x, this.y + this.k * y);
  },
  apply: function(point) {
    return [point[0] * this.k + this.x, point[1] * this.k + this.y];
  },
  applyX: function(x) {
    return x * this.k + this.x;
  },
  applyY: function(y) {
    return y * this.k + this.y;
  },
  invert: function(location2) {
    return [(location2[0] - this.x) / this.k, (location2[1] - this.y) / this.k];
  },
  invertX: function(x) {
    return (x - this.x) / this.k;
  },
  invertY: function(y) {
    return (y - this.y) / this.k;
  },
  rescaleX: function(x) {
    return x.copy().domain(x.range().map(this.invertX, this).map(x.invert, x));
  },
  rescaleY: function(y) {
    return y.copy().domain(y.range().map(this.invertY, this).map(y.invert, y));
  },
  toString: function() {
    return "translate(" + this.x + "," + this.y + ") scale(" + this.k + ")";
  }
};
Transform.prototype;
const _hoisted_1$5 = { class: "description d-inline-block" };
const _hoisted_2$3 = { class: "d-inline-block mr-10 ml-10" };
const _hoisted_3$3 = ["value"];
const _hoisted_4$2 = ["value"];
const _hoisted_5$2 = ["value"];
const _hoisted_6$1 = ["value"];
const _hoisted_7$1 = { class: "description d-inline-block" };
const __default__$4 = {
  name: "TimeIntervalChart"
};
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  ...__default__$4,
  setup(__props) {
    let MinValue;
    ((MinValue2) => {
      MinValue2[MinValue2["Seconds_10"] = 10] = "Seconds_10";
      MinValue2[MinValue2["Min_1"] = 60] = "Min_1";
      MinValue2[MinValue2["Min_5"] = 300] = "Min_5";
      MinValue2[MinValue2["Min_10"] = 600] = "Min_10";
    })(MinValue || (MinValue = {}));
    const { t } = useI18n();
    const storage = injectStorage();
    const chart = ref();
    const minValue = ref();
    const todayIntervals = ref();
    const darkMode = ref();
    onMounted(async () => {
      minValue.value = 10;
      const timeIntervalList = await storage.getDeserializeList(
        StorageDeserializeParam.TIMEINTERVAL_LIST
      );
      todayIntervals.value = timeIntervalList == null ? void 0 : timeIntervalList.filter((x) => x.day == todayLocalDate());
      darkMode.value = await storage.getValue(StorageParams.DARK_MODE, DARK_MODE_DEFAULT);
      renderChart();
    });
    function renderChart() {
      var _a;
      const dataForChart = [];
      (_a = todayIntervals.value) == null ? void 0 : _a.forEach((interval2) => {
        interval2.intervals.forEach((int) => {
          const from = int.split("-")[0];
          const to = int.split("-")[1];
          if (convertStringTimeIntervalToSeconds(to) - convertStringTimeIntervalToSeconds(from) > minValue.value) {
            dataForChart.push({ domain: interval2.domain, interval: convertInterval(int) });
          }
        });
      });
      drawIntervalChart(dataForChart);
    }
    function refreshChart() {
      chart.value.innerHTML = "";
      renderChart();
    }
    function convertInterval(interval2) {
      function convert(item) {
        item = item.map((x) => x.length == 1 ? `0${x}` : x);
        return item.join(":");
      }
      const sourceTimeFrom = interval2.split("-")[0].split(":");
      const sourceTimeTo = interval2.split("-")[1].split(":");
      return `${convert(sourceTimeFrom)}-${convert(sourceTimeTo)}`;
    }
    function drawIntervalChart(data) {
      data.forEach((item) => {
        const hFrom = getHourFrom(item.interval);
        const hTo = getHourTo(item.interval);
        if (hFrom != hTo) {
          const sourceTimeFrom = item.interval.split("-")[0].split(":");
          const sourceTimeTo = item.interval.split("-")[1].split(":");
          const timeTo = `${sourceTimeFrom[0]}:59:59`;
          const timeFrom = `${sourceTimeTo[0]}:00:00`;
          data.push({ domain: item.domain, interval: item.interval.split("-")[0] + "-" + timeTo });
          data.push({ domain: item.domain, interval: timeFrom + "-" + item.interval.split("-")[1] });
        }
      });
      const margin = { top: 10, right: 10, bottom: 20, left: 20 };
      const width = chart.value.offsetWidth;
      const height = 400;
      const tickDistance = 4.38;
      const tooltip = select("#timeIntervalChartD3").append("div").style("opacity", 0).style("display", "none").style("position", "absolute").style("background-color", "white").style("color", "black").style("border", "1px solid grey").attr("class", "tooltip").style("border-width", "1px").style("border-radius", "3px").style("padding", "5px");
      const mouseover = function(e) {
        tooltip.style("opacity", 1).style("display", "block");
        select(".tooltip").style("left", e.layerX + 15 + "px").style("top", e.layerY + 15 + "px");
      };
      const mousemove = function(event, data2) {
        tooltip.html(`<b>${data2.domain}</b><br>${data2.interval}`);
      };
      const mouseleave = function(e) {
        tooltip.style("opacity", 0).style("display", "none");
      };
      const svg = select("#timeIntervalChartD3").append("svg").attr("width", width + margin.left + margin.right).attr("height", height + margin.top + margin.bottom).append("g").attr("transform", `translate(${margin.left},${margin.top})`);
      const y = linear([height, 0]).domain([0, 60]);
      const yAxis = axisLeft(y);
      const x = linear([0, width]).domain([0, 24]);
      const xAxis = axisBottom(x).ticks(24);
      svg.append("g").attr("class", "grid").style("color", darkMode.value ? "#797979" : "#e5e5e5").attr("transform", `translate(0, ${height})`).call(xAxis.tickSize(-height));
      svg.append("g").attr("class", "grid").style("color", darkMode.value ? "#797979" : "#e5e5e5").call(yAxis.tickSize(-width));
      svg.selectAll("text").style("fill", "#797979");
      svg.selectAll(".bar").data(data).enter().append("rect").style("fill", "#5668e2").style("cursor", "pointer").style("stroke-width", "1").attr("class", "bar").attr("x", (data2) => x(getHourFrom(data2.interval)) + 2).attr("width", chart.value.offsetWidth / 24 - 4).attr("y", (data2) => y(getMinutesTo(data2.interval)) - 1).attr("height", (data2) => {
        const offset = getMinutesTo(data2.interval) - getMinutesFrom(data2.interval);
        if (offset == 0) {
          const offsetSeconds = getSecondsTo(data2.interval) - getSecondsFrom(data2.interval);
          if (offsetSeconds <= 3)
            return 0;
          else
            return 1;
        } else
          return offset * tickDistance;
      }).on("mouseover", mouseover).on("mousemove", mousemove).on("mouseleave", mouseleave);
      function getHourFrom(interval2) {
        const time = interval2.split("-")[0];
        return Number(time.split(":")[0]);
      }
      function getHourTo(interval2) {
        var time = interval2.split("-")[1];
        return Number(time.split(":")[0]);
      }
      function getMinutesFrom(interval2) {
        var time = interval2.split("-")[0];
        return Number(time.split(":")[1]);
      }
      function getMinutesTo(interval2) {
        var time = interval2.split("-")[1];
        return Number(time.split(":")[1]);
      }
      function getSecondsFrom(interval2) {
        var time = interval2.split("-")[0];
        return Number(time.split(":")[2]);
      }
      function getSecondsTo(interval2) {
        var time = interval2.split("-")[1];
        return Number(time.split(":")[2]);
      }
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        createBaseVNode("div", null, [
          createBaseVNode("p", _hoisted_1$5, toDisplayString(unref(t)("intervalsChart.message")), 1),
          createBaseVNode("div", _hoisted_2$3, [
            withDirectives(createBaseVNode("select", {
              class: "option",
              "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => minValue.value = $event),
              onChange: _cache[1] || (_cache[1] = ($event) => refreshChart())
            }, [
              createBaseVNode("option", {
                value: 10
                /* Seconds_10 */
              }, "10 " + toDisplayString(unref(t)("sec.message")), 9, _hoisted_3$3),
              createBaseVNode("option", {
                value: 60
                /* Min_1 */
              }, "1 " + toDisplayString(unref(t)("min.message")), 9, _hoisted_4$2),
              createBaseVNode("option", {
                value: 300
                /* Min_5 */
              }, "5 " + toDisplayString(unref(t)("2min.message")), 9, _hoisted_5$2),
              createBaseVNode("option", {
                value: 600
                /* Min_10 */
              }, "10 " + toDisplayString(unref(t)("mins.message")), 9, _hoisted_6$1)
            ], 544), [
              [vModelSelect, minValue.value]
            ])
          ]),
          createBaseVNode("p", _hoisted_7$1, toDisplayString(unref(t)("intervalsChart.description")), 1)
        ]),
        createBaseVNode("div", {
          ref_key: "chart",
          ref: chart,
          id: "timeIntervalChartD3"
        }, null, 512)
      ], 64);
    };
  }
});
const TimeIntervalChart_vue_vue_type_style_index_0_scoped_c58a5a1f_lang = "";
const TimeIntervalChart = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["__scopeId", "data-v-c58a5a1f"]]);
const _hoisted_1$4 = { class: "description" };
const __default__$3 = {
  name: "HourlyChart"
};
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  ...__default__$3,
  setup(__props) {
    const { t } = useI18n();
    const storage = injectStorage();
    Chart.register(CategoryScale, LinearScale, BarElement, plugin_title, plugin_tooltip, plugin_legend);
    const options = ref();
    const data = ref();
    const isLoaded = ref();
    const objects = [];
    const hours = [];
    isLoaded.value = false;
    function convertTimIntervalToObject(timeInterval, domain) {
      const array2 = timeInterval.split("-");
      const time1 = array2[0].split(":");
      const time2 = array2[1].split(":");
      if (time1[0] == time2[0]) {
        return [
          {
            hour: Number(time1[0]),
            summary: convertStringTimeIntervalToSeconds(array2[1]) - convertStringTimeIntervalToSeconds(array2[0]),
            domain
          }
        ];
      } else {
        const arr = [];
        const firstPart1 = array2[0];
        const firstPart2 = `${time1[0]}:59:59`;
        const hourForFirstPart = firstPart1.split(":");
        arr.push({
          hour: Number(hourForFirstPart[0]),
          summary: convertStringTimeIntervalToSeconds(firstPart2) - convertStringTimeIntervalToSeconds(firstPart1),
          domain
        });
        const secondPart1 = `${time2[0]}:00:00`;
        const secondPart2 = `${time2[0]}:${time2[1]}:${time2[2]}`;
        const hourForsecondPart = secondPart1.split(":");
        arr.push({
          hour: Number(hourForsecondPart[0]),
          summary: convertStringTimeIntervalToSeconds(secondPart2) - convertStringTimeIntervalToSeconds(secondPart1),
          domain
        });
        return arr;
      }
    }
    function fillData(timeIntervalList) {
      const items = timeIntervalList == null ? void 0 : timeIntervalList.filter((x) => x.day == todayLocalDate());
      const domains = items.map((x) => x.domain);
      const result = [];
      const intervalsObj = [];
      domains.forEach((domain) => {
        const intervals = items.filter((x) => x.domain == domain);
        intervals.forEach((array2) => {
          const i = array2.intervals;
          i.forEach((time) => {
            const objs = convertTimIntervalToObject(time, domain);
            if (objs != null && objs.length > 0) {
              objs.forEach((obj) => {
                const existDomain = intervalsObj.find((x) => x.domain == domain && x.hour == obj.hour);
                if (existDomain != void 0) {
                  existDomain.summary += obj.summary;
                } else
                  intervalsObj.push(obj);
              });
            }
          });
        });
      });
      const tempArray = [];
      for (let index = 0; index < 24; index++) {
        const obj = objects.find((x) => x.hour == index);
        const intervalObj = intervalsObj.filter((x) => x.hour == index);
        const summary = intervalObj.length == 0 ? 0 : intervalObj.map((x) => x.summary).reduce((a, b) => a + b);
        if (obj == void 0) {
          const newObj = {
            summary,
            hour: index,
            domains: intervalObj
          };
          objects.push(newObj);
        } else {
          obj.summary += summary;
          intervalObj.forEach((element) => {
            obj.domains.push(element);
          });
        }
        tempArray.push(0);
      }
      objects.forEach((obj) => {
        const emptyArray = Object.assign([], tempArray);
        emptyArray[obj.hour] = Number(obj.summary / 60);
        result.push({
          backgroundColor: ["#5668e2"],
          data: emptyArray
        });
      });
      return result;
    }
    async function buildChart() {
      const timeIntervalList = await storage.getDeserializeList(
        StorageDeserializeParam.TIMEINTERVAL_LIST
      );
      for (let index = 0; index <= 23; index++) {
        hours.push(index);
      }
      const dataForChart = fillData(timeIntervalList);
      data.value = {
        labels: hours,
        datasets: dataForChart
      };
      options.value = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: "none"
          },
          tooltip: {
            callbacks: {
              label: function(context) {
                return `${context.label}:00-${Number(context.label) + 1}:00 ${convertHoursToTime(
                  context.raw
                )}`;
              }
            }
          }
        },
        scales: {
          y: {
            min: 0,
            max: 60,
            ticks: {
              stepSize: 5
            }
          },
          x: {
            stacked: true,
            min: 0,
            max: 23
          }
        }
      };
      isLoaded.value = true;
    }
    onMounted(async () => await buildChart());
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        createBaseVNode("p", _hoisted_1$4, toDisplayString(unref(t)("timeChartDescription.message")), 1),
        isLoaded.value ? (openBlock(), createBlock(unref(Bar), {
          key: 0,
          data: data.value,
          options: options.value
        }, null, 8, ["data", "options"])) : createCommentVNode("", true)
      ], 64);
    };
  }
});
const _hoisted_1$3 = { class: "settings-item" };
const _hoisted_2$2 = { class: "title" };
const _hoisted_3$2 = { class: "chart chartByHours" };
const _hoisted_4$1 = { class: "mt-10 mb-20" };
const _hoisted_5$1 = { class: "tab-items" };
const __default__$2 = {
  name: "Dashboard"
};
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  ...__default__$2,
  setup(__props) {
    const { t } = useI18n();
    const chart = ref();
    let TypeOfChart;
    ((TypeOfChart2) => {
      TypeOfChart2[TypeOfChart2["Horly"] = 0] = "Horly";
      TypeOfChart2[TypeOfChart2["Interval"] = 1] = "Interval";
    })(TypeOfChart || (TypeOfChart = {}));
    onMounted(() => {
      chart.value = 0;
    });
    function openChart(type) {
      chart.value = type;
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        createBaseVNode("div", _hoisted_1$3, [
          createBaseVNode("label", _hoisted_2$2, toDisplayString(unref(t)("dashboard.message")), 1)
        ]),
        createBaseVNode("div", _hoisted_3$2, [
          createBaseVNode("div", _hoisted_4$1, [
            createBaseVNode("button", {
              class: normalizeClass(["chart-btn", chart.value == 0 ? "active" : ""]),
              onClick: _cache[0] || (_cache[0] = ($event) => openChart(
                0
                /* Horly */
              ))
            }, [
              _cache[2] || (_cache[2] = createBaseVNode("img", {
                class: "ml-5",
                src: _imports_0$1,
                height: "22"
              }, null, -1)),
              createTextVNode(" " + toDisplayString(unref(t)("byHours.message")), 1)
            ], 2),
            createBaseVNode("button", {
              class: normalizeClass(["ml-10", "chart-btn", chart.value == 1 ? "active" : ""]),
              onClick: _cache[1] || (_cache[1] = ($event) => openChart(
                1
                /* Interval */
              ))
            }, [
              _cache[3] || (_cache[3] = createBaseVNode("img", {
                class: "ml-5",
                src: _imports_1,
                height: "22"
              }, null, -1)),
              createTextVNode(" " + toDisplayString(unref(t)("intervals.message")), 1)
            ], 2)
          ]),
          chart.value == 0 ? (openBlock(), createBlock(_sfc_main$4, { key: 0 })) : createCommentVNode("", true),
          chart.value == 1 ? (openBlock(), createBlock(TimeIntervalChart, { key: 1 })) : createCommentVNode("", true)
        ]),
        createBaseVNode("div", _hoisted_5$1, [
          chart.value == 0 ? (openBlock(), createBlock(TabList, {
            key: 0,
            type: unref(TypeOfList).Dashboard,
            showAllStats: false
          }, null, 8, ["type"])) : createCommentVNode("", true)
        ])
      ], 64);
    };
  }
});
const Dashboad_vue_vue_type_style_index_0_scoped_1e2b21f5_lang = "";
const Dashboad = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-1e2b21f5"]]);
const _hoisted_1$2 = { class: "main" };
const __default__$1 = {
  name: "DashboadContainer"
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  ...__default__$1,
  props: {
    type: {},
    domain: {}
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$2, [
        __props.type == unref(SettingsTab).Dashboard ? (openBlock(), createBlock(Dashboad, { key: 0 })) : createCommentVNode("", true),
        __props.type == unref(SettingsTab).WebsiteStats ? (openBlock(), createBlock(WebsiteStats, {
          key: 1,
          domain: __props.domain
        }, null, 8, ["domain"])) : createCommentVNode("", true)
      ]);
    };
  }
});
const DashboadContainer_vue_vue_type_style_index_0_scoped_8ef3e0ae_lang = "";
const DashboadContainer = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-8ef3e0ae"]]);
const _imports_0 = "/donation-qr.png";
const _hoisted_1$1 = { class: "title" };
const _hoisted_2$1 = { class: "mt-30" };
const _hoisted_3$1 = { class: "font-bold mt-30" };
const __default__ = {
  name: "Donation"
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  ...__default__,
  setup(__props) {
    const { t } = useI18n();
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", null, [
        createBaseVNode("p", _hoisted_1$1, toDisplayString(unref(t)("enjoy.message")), 1),
        createBaseVNode("p", null, toDisplayString(unref(t)("canDonate.message")), 1),
        createBaseVNode("div", _hoisted_2$1, [
          createBaseVNode("p", null, [
            createTextVNode(toDisplayString(unref(t)("coin.message")) + " ", 1),
            _cache[0] || (_cache[0] = createBaseVNode("span", { class: "font-bold" }, " USDT ", -1))
          ]),
          createBaseVNode("p", null, [
            createTextVNode(toDisplayString(unref(t)("chain.message")), 1),
            _cache[1] || (_cache[1] = createBaseVNode("span", { class: "font-bold" }, " Ethereum (ERC20) ", -1))
          ]),
          createBaseVNode("p", null, [
            createTextVNode(toDisplayString(unref(t)("address.message")) + " ", 1),
            _cache[2] || (_cache[2] = createBaseVNode("span", { class: "font-bold" }, " 0x427a22e1f4ba81351c22465faf6cfcf6095583d1 ", -1))
          ])
        ]),
        _cache[3] || (_cache[3] = createBaseVNode("img", {
          class: "mt-15",
          src: _imports_0
        }, null, -1)),
        createBaseVNode("p", _hoisted_3$1, toDisplayString(unref(t)("thanks.message")), 1)
      ]);
    };
  }
});
const Donation_vue_vue_type_style_index_0_scoped_7c82c1d9_lang = "";
const Donation = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-7c82c1d9"]]);
const _hoisted_1 = { class: "settings-tabs" };
const _hoisted_2 = { class: "settings-tab mt-20" };
const _hoisted_3 = ["checked"];
const _hoisted_4 = {
  name: "tabName",
  for: "timeIntervalChart-tab"
};
const _hoisted_5 = { class: "settings-content" };
const _hoisted_6 = { class: "settings-tab" };
const _hoisted_7 = ["checked"];
const _hoisted_8 = {
  name: "tabName",
  for: "white-list-tab"
};
const _hoisted_9 = { class: "settings-content" };
const _hoisted_10 = { class: "main" };
const _hoisted_11 = { class: "settings-tab" };
const _hoisted_12 = ["checked"];
const _hoisted_13 = {
  name: "tabName",
  for: "limits-tab"
};
const _hoisted_14 = { class: "settings-content" };
const _hoisted_15 = { class: "main" };
const _hoisted_16 = { class: "settings-tab" };
const _hoisted_17 = ["checked"];
const _hoisted_18 = {
  name: "tabName",
  for: "notification-tab"
};
const _hoisted_19 = { class: "settings-content" };
const _hoisted_20 = { class: "main" };
const _hoisted_21 = { class: "settings-tab" };
const _hoisted_22 = ["checked"];
const _hoisted_23 = {
  name: "tabName",
  for: "pomodoro-tab"
};
const _hoisted_24 = { class: "settings-content" };
const _hoisted_25 = { class: "main" };
const _hoisted_26 = { class: "settings-tab" };
const _hoisted_27 = ["checked"];
const _hoisted_28 = {
  name: "tabName",
  for: "general-tab"
};
const _hoisted_29 = { class: "settings-content" };
const _hoisted_30 = { class: "main" };
const _hoisted_31 = { class: "settings-tab" };
const _hoisted_32 = ["checked"];
const _hoisted_33 = {
  class: "about",
  name: "tabName",
  for: "about-tab"
};
const _hoisted_34 = { class: "settings-content" };
const _hoisted_35 = { class: "main" };
const _hoisted_36 = { class: "settings-tab" };
const _hoisted_37 = ["checked"];
const _hoisted_38 = {
  name: "tabName",
  for: "donate-tab",
  class: "donate"
};
const _hoisted_39 = { class: "settings-content" };
const _hoisted_40 = { class: "main" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Dashboard",
  setup(__props) {
    const { t } = useI18n();
    const extensionPage = useExtensionPage();
    const settingsStorage = injectStorage();
    const selectedTab = ref();
    const currentUrl = ref(new URL(location.href));
    const selectedWebsite = ref();
    const darkMode = ref();
    watch(currentUrl, () => {
      getCurrentTab();
    });
    onMounted(async () => {
      darkMode.value = await settingsStorage.getValue(StorageParams.DARK_MODE, DARK_MODE_DEFAULT);
      applyDarkMode(darkMode.value);
      getCurrentTab();
    });
    function getCurrentTab() {
      const tabName = currentUrl.value.searchParams.get("tab");
      if (tabName != null && tabName != "") {
        selectedTab.value = getEnumValueTab(tabName);
        const domain = currentUrl.value.searchParams.get("website");
        if (selectedTab.value == SettingsTab.WebsiteStats) {
          if (domain != null && domain != "")
            selectedWebsite.value = domain;
          else
            selectedTab.value = SettingsTab.Dashboard;
        } else if (domain != null && domain != "") {
          window.history.replaceState(
            location.href,
            document.title,
            location.href.replace(`&website=${domain}`, "")
          );
        }
      }
    }
    function selectTab(value) {
      selectedTab.value = value;
      extensionPage.updateTab(value);
      currentUrl.value = new URL(location.href);
    }
    return (_ctx, _cache) => {
      const _component_notifications = resolveComponent("notifications");
      return openBlock(), createElementBlock(Fragment, null, [
        createVNode(_component_notifications, { position: "bottom right" }),
        createBaseVNode("div", _hoisted_1, [
          _cache[16] || (_cache[16] = createBaseVNode("div", { class: "header-block" }, [
            createBaseVNode("img", {
              class: "d-inline-block logo",
              height: "30",
              src: _imports_0$7
            }),
            createBaseVNode("p", { class: "d-inline-block title" }, "TabTrack")
          ], -1)),
          createBaseVNode("div", _hoisted_2, [
            createBaseVNode("input", {
              type: "radio",
              id: "timeIntervalChart-tab",
              name: "settings-group",
              checked: selectedTab.value == unref(SettingsTab).Dashboard || selectedTab.value == unref(SettingsTab).WebsiteStats,
              onChange: _cache[0] || (_cache[0] = ($event) => selectTab(unref(SettingsTab).Dashboard))
            }, null, 40, _hoisted_3),
            createBaseVNode("label", _hoisted_4, [
              _cache[8] || (_cache[8] = createBaseVNode("img", {
                src: _imports_1$3,
                height: "30"
              }, null, -1)),
              createTextVNode(toDisplayString(unref(t)("dashboard.message")), 1)
            ]),
            createBaseVNode("div", _hoisted_5, [
              selectedTab.value == unref(SettingsTab).Dashboard || selectedTab.value == unref(SettingsTab).WebsiteStats ? (openBlock(), createBlock(DashboadContainer, {
                key: 0,
                type: selectedTab.value,
                domain: selectedWebsite.value
              }, null, 8, ["type", "domain"])) : createCommentVNode("", true)
            ])
          ]),
          createBaseVNode("div", _hoisted_6, [
            createBaseVNode("input", {
              type: "radio",
              id: "white-list-tab",
              name: "settings-group",
              checked: selectedTab.value == unref(SettingsTab).WhiteList,
              onChange: _cache[1] || (_cache[1] = ($event) => selectTab(unref(SettingsTab).WhiteList))
            }, null, 40, _hoisted_7),
            createBaseVNode("label", _hoisted_8, [
              _cache[9] || (_cache[9] = createBaseVNode("img", {
                src: _imports_2$1,
                height: "30"
              }, null, -1)),
              createTextVNode(toDisplayString(unref(t)("whiteListSettings.message")), 1)
            ]),
            createBaseVNode("div", _hoisted_9, [
              createBaseVNode("div", _hoisted_10, [
                selectedTab.value == unref(SettingsTab).WhiteList ? (openBlock(), createBlock(WhiteList, { key: 0 })) : createCommentVNode("", true)
              ])
            ])
          ]),
          createBaseVNode("div", _hoisted_11, [
            createBaseVNode("input", {
              type: "radio",
              id: "limits-tab",
              name: "settings-group",
              checked: selectedTab.value == unref(SettingsTab).Limits,
              onChange: _cache[2] || (_cache[2] = ($event) => selectTab(unref(SettingsTab).Limits))
            }, null, 40, _hoisted_12),
            createBaseVNode("label", _hoisted_13, [
              _cache[10] || (_cache[10] = createBaseVNode("img", {
                src: _imports_3$1,
                height: "30"
              }, null, -1)),
              createTextVNode(toDisplayString(unref(t)("limitsSettings.message")), 1)
            ]),
            createBaseVNode("div", _hoisted_14, [
              createBaseVNode("div", _hoisted_15, [
                selectedTab.value == unref(SettingsTab).Limits ? (openBlock(), createBlock(Limits, { key: 0 })) : createCommentVNode("", true)
              ])
            ])
          ]),
          createBaseVNode("div", _hoisted_16, [
            createBaseVNode("input", {
              type: "radio",
              id: "notification-tab",
              name: "settings-group",
              checked: selectedTab.value == unref(SettingsTab).Notifications,
              onChange: _cache[3] || (_cache[3] = ($event) => selectTab(unref(SettingsTab).Notifications))
            }, null, 40, _hoisted_17),
            createBaseVNode("label", _hoisted_18, [
              _cache[11] || (_cache[11] = createBaseVNode("img", {
                src: _imports_4,
                height: "30"
              }, null, -1)),
              createTextVNode(toDisplayString(unref(t)("notificationsSettings.message")), 1)
            ]),
            createBaseVNode("div", _hoisted_19, [
              createBaseVNode("div", _hoisted_20, [
                selectedTab.value == unref(SettingsTab).Notifications ? (openBlock(), createBlock(DailyNotifications, { key: 0 })) : createCommentVNode("", true)
              ])
            ])
          ]),
          createBaseVNode("div", _hoisted_21, [
            createBaseVNode("input", {
              type: "radio",
              id: "pomodoro-tab",
              name: "settings-group",
              checked: selectedTab.value == unref(SettingsTab).Pomodoro,
              onChange: _cache[4] || (_cache[4] = ($event) => selectTab(unref(SettingsTab).Pomodoro))
            }, null, 40, _hoisted_22),
            createBaseVNode("label", _hoisted_23, [
              _cache[12] || (_cache[12] = createBaseVNode("img", {
                src: _imports_5,
                height: "30"
              }, null, -1)),
              createTextVNode(toDisplayString(unref(t)("pomodoroMode.message")), 1)
            ]),
            createBaseVNode("div", _hoisted_24, [
              createBaseVNode("div", _hoisted_25, [
                selectedTab.value == unref(SettingsTab).Pomodoro ? (openBlock(), createBlock(Pomodoro, { key: 0 })) : createCommentVNode("", true)
              ])
            ])
          ]),
          createBaseVNode("div", _hoisted_26, [
            createBaseVNode("input", {
              type: "radio",
              id: "general-tab",
              name: "settings-group",
              checked: selectedTab.value == unref(SettingsTab).GeneralSettings,
              onChange: _cache[5] || (_cache[5] = ($event) => selectTab(unref(SettingsTab).GeneralSettings))
            }, null, 40, _hoisted_27),
            createBaseVNode("label", _hoisted_28, [
              _cache[13] || (_cache[13] = createBaseVNode("img", {
                src: _imports_6,
                height: "30"
              }, null, -1)),
              createTextVNode(toDisplayString(unref(t)("generalSettings.message")), 1)
            ]),
            createBaseVNode("div", _hoisted_29, [
              createBaseVNode("div", _hoisted_30, [
                selectedTab.value == unref(SettingsTab).GeneralSettings ? (openBlock(), createBlock(GeneralSettings, { key: 0 })) : createCommentVNode("", true)
              ])
            ])
          ]),
          createBaseVNode("div", _hoisted_31, [
            createBaseVNode("input", {
              type: "radio",
              id: "about-tab",
              name: "settings-group",
              checked: selectedTab.value == unref(SettingsTab).About,
              onChange: _cache[6] || (_cache[6] = ($event) => selectTab(unref(SettingsTab).About))
            }, null, 40, _hoisted_32),
            createBaseVNode("label", _hoisted_33, [
              _cache[14] || (_cache[14] = createBaseVNode("img", {
                src: _imports_7,
                height: "30"
              }, null, -1)),
              createTextVNode(toDisplayString(unref(t)("aboutSettings.message")), 1)
            ]),
            createBaseVNode("div", _hoisted_34, [
              createBaseVNode("div", _hoisted_35, [
                selectedTab.value == unref(SettingsTab).About ? (openBlock(), createBlock(About, { key: 0 })) : createCommentVNode("", true)
              ])
            ])
          ]),
          createBaseVNode("div", _hoisted_36, [
            createBaseVNode("input", {
              type: "radio",
              id: "donate-tab",
              name: "settings-group",
              checked: selectedTab.value == unref(SettingsTab).Donate,
              onChange: _cache[7] || (_cache[7] = ($event) => selectTab(unref(SettingsTab).Donate))
            }, null, 40, _hoisted_37),
            createBaseVNode("label", _hoisted_38, [
              _cache[15] || (_cache[15] = createBaseVNode("img", {
                src: _imports_8,
                height: "30"
              }, null, -1)),
              createTextVNode(toDisplayString(unref(t)("donate.message")), 1)
            ]),
            createBaseVNode("div", _hoisted_39, [
              createBaseVNode("div", _hoisted_40, [
                selectedTab.value == unref(SettingsTab).Donate ? (openBlock(), createBlock(Donation, { key: 0 })) : createCommentVNode("", true)
              ])
            ])
          ]),
          createVNode(PromoCleanYoutubeModal)
        ])
      ], 64);
    };
  }
});
const Dashboard_vue_vue_type_style_index_0_scoped_521a29ed_lang = "";
const Settings = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-521a29ed"]]);
const app = createApp(Settings);
app.use(at);
app.use(i18n);
app.component("VueDatePicker", oa);
app.mount("body");
const dashboard = "";
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGFzaGJvYXJkLmpzIiwic291cmNlcyI6WyIuLi8uLi9zcmMvYXNzZXRzL2ljb25zL3MtZGFzaGJvYXJkLnN2ZyIsIi4uLy4uL3NyYy9hc3NldHMvaWNvbnMvcy13aGl0ZWxpc3Quc3ZnIiwiLi4vLi4vc3JjL2Fzc2V0cy9pY29ucy9zLWxpbWl0cy5zdmciLCIuLi8uLi9zcmMvYXNzZXRzL2ljb25zL3Mtbm90aWZpY2F0aW9ucy5zdmciLCIuLi8uLi9zcmMvYXNzZXRzL2ljb25zL3Mtc2V0dGluZ3Muc3ZnIiwiLi4vLi4vc3JjL2Fzc2V0cy9pY29ucy9zLWFib3V0LnN2ZyIsIi4uLy4uL3NyYy9hc3NldHMvaWNvbnMvZG9uYXRlLnBuZyIsIi4uLy4uL25vZGVfbW9kdWxlcy9Aa3l2Zy92dWUzLW5vdGlmaWNhdGlvbi9kaXN0L2luZGV4LmVzLmpzIiwiLi4vLi4vc3JjL2Z1bmN0aW9ucy91c2VSZW1vdmVBbGxEYXRhLnRzIiwiLi4vLi4vc3JjL2Z1bmN0aW9ucy91c2VSZXN0b3JlRGF0YS50cyIsIi4uLy4uL3NyYy9jb21wb25lbnRzL0dlbmVyYWxTZXR0aW5ncy52dWUiLCIuLi8uLi9zcmMvYXNzZXRzL2NsZWFyLXlvdXR1YmUtcHJvbW8ucG5nIiwiLi4vLi4vc3JjL2NvbXBvbmVudHMvUHJvbW9DbGVhbllvdXR1YmVNb2RhbC52dWUiLCIuLi8uLi9zcmMvYXNzZXRzL2ljb25zL2RlbGV0ZS5wbmciLCIuLi8uLi9zcmMvdXRpbHMvZmF2aWNvbi50cyIsIi4uLy4uL3NyYy9jb21wb25lbnRzL1doaXRlTGlzdC52dWUiLCIuLi8uLi9zcmMvYXNzZXRzL2ljb25zL2VkaXQuc3ZnIiwiLi4vLi4vc3JjL2VudGl0eS9yZXN0cmljdGlvbi50cyIsIi4uLy4uL3NyYy9jb21wb25lbnRzL0xpc3RXaXRoVGltZS52dWUiLCIuLi8uLi9zcmMvY29tcG9uZW50cy9MaW1pdHMudnVlIiwiLi4vLi4vc3JjL2NvbXBvbmVudHMvTm90aWZpY2F0aW9ucy52dWUiLCIuLi8uLi9zcmMvYXNzZXRzL2ljb25zL3BvbW9kb3JvLnBuZyIsIi4uLy4uL3NyYy9hc3NldHMvaWNvbnMvcG9tb2Rvcm8tcmVzdC5wbmciLCIuLi8uLi9zcmMvYXNzZXRzL2ljb25zL3N0b3Auc3ZnIiwiLi4vLi4vc3JjL2Fzc2V0cy9pY29ucy9zdGFydC5zdmciLCIuLi8uLi9zcmMvZnVuY3Rpb25zL3BsYXlTb3VuZC50cyIsIi4uLy4uL3NyYy9jb21wb25lbnRzL1BvbW9kb3JvU291bmRzU2VsZWN0b3IudnVlIiwiLi4vLi4vc3JjL2NvbXBvbmVudHMvUG9tb2Rvcm8udnVlIiwiLi4vLi4vc3JjL2NvbXBvbmVudHMvTXlBcHBzLnZ1ZSIsIi4uLy4uL3NyYy9jb21wb25lbnRzL0Fib3V0LnZ1ZSIsIi4uLy4uL3NyYy9jb21wb25lbnRzL1dlYnNpdGVTdGF0c0RldGFpbHMudnVlIiwiLi4vLi4vc3JjL2Z1bmN0aW9ucy91c2VUYWJTdGF0c0J5RGF5cy50cyIsIi4uLy4uL3NyYy9jb21wb25lbnRzL1dlYnNpdGVTdGF0cy52dWUiLCIuLi8uLi9zcmMvYXNzZXRzL2ljb25zL2J5LWhvdXJzLnN2ZyIsIi4uLy4uL3NyYy9hc3NldHMvaWNvbnMvYnktaW50ZXJ2YWxzLnN2ZyIsIi4uLy4uL25vZGVfbW9kdWxlcy9kMy1hcnJheS9zcmMvYXNjZW5kaW5nLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2QzLWFycmF5L3NyYy9kZXNjZW5kaW5nLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2QzLWFycmF5L3NyYy9iaXNlY3Rvci5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9kMy1hcnJheS9zcmMvbnVtYmVyLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2QzLWFycmF5L3NyYy9iaXNlY3QuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvZDMtYXJyYXkvc3JjL3RpY2tzLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2QzLWF4aXMvc3JjL2lkZW50aXR5LmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2QzLWF4aXMvc3JjL2F4aXMuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvZDMtZGlzcGF0Y2gvc3JjL2Rpc3BhdGNoLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2QzLXNlbGVjdGlvbi9zcmMvbmFtZXNwYWNlcy5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9kMy1zZWxlY3Rpb24vc3JjL25hbWVzcGFjZS5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9kMy1zZWxlY3Rpb24vc3JjL2NyZWF0b3IuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvZDMtc2VsZWN0aW9uL3NyYy9zZWxlY3Rvci5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9kMy1zZWxlY3Rpb24vc3JjL3NlbGVjdGlvbi9zZWxlY3QuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvZDMtc2VsZWN0aW9uL3NyYy9hcnJheS5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9kMy1zZWxlY3Rpb24vc3JjL3NlbGVjdG9yQWxsLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2QzLXNlbGVjdGlvbi9zcmMvc2VsZWN0aW9uL3NlbGVjdEFsbC5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9kMy1zZWxlY3Rpb24vc3JjL21hdGNoZXIuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvZDMtc2VsZWN0aW9uL3NyYy9zZWxlY3Rpb24vc2VsZWN0Q2hpbGQuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvZDMtc2VsZWN0aW9uL3NyYy9zZWxlY3Rpb24vc2VsZWN0Q2hpbGRyZW4uanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvZDMtc2VsZWN0aW9uL3NyYy9zZWxlY3Rpb24vZmlsdGVyLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2QzLXNlbGVjdGlvbi9zcmMvc2VsZWN0aW9uL3NwYXJzZS5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9kMy1zZWxlY3Rpb24vc3JjL3NlbGVjdGlvbi9lbnRlci5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9kMy1zZWxlY3Rpb24vc3JjL2NvbnN0YW50LmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2QzLXNlbGVjdGlvbi9zcmMvc2VsZWN0aW9uL2RhdGEuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvZDMtc2VsZWN0aW9uL3NyYy9zZWxlY3Rpb24vZXhpdC5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9kMy1zZWxlY3Rpb24vc3JjL3NlbGVjdGlvbi9qb2luLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2QzLXNlbGVjdGlvbi9zcmMvc2VsZWN0aW9uL21lcmdlLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2QzLXNlbGVjdGlvbi9zcmMvc2VsZWN0aW9uL29yZGVyLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2QzLXNlbGVjdGlvbi9zcmMvc2VsZWN0aW9uL3NvcnQuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvZDMtc2VsZWN0aW9uL3NyYy9zZWxlY3Rpb24vY2FsbC5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9kMy1zZWxlY3Rpb24vc3JjL3NlbGVjdGlvbi9ub2Rlcy5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9kMy1zZWxlY3Rpb24vc3JjL3NlbGVjdGlvbi9ub2RlLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2QzLXNlbGVjdGlvbi9zcmMvc2VsZWN0aW9uL3NpemUuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvZDMtc2VsZWN0aW9uL3NyYy9zZWxlY3Rpb24vZW1wdHkuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvZDMtc2VsZWN0aW9uL3NyYy9zZWxlY3Rpb24vZWFjaC5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9kMy1zZWxlY3Rpb24vc3JjL3NlbGVjdGlvbi9hdHRyLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2QzLXNlbGVjdGlvbi9zcmMvd2luZG93LmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2QzLXNlbGVjdGlvbi9zcmMvc2VsZWN0aW9uL3N0eWxlLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2QzLXNlbGVjdGlvbi9zcmMvc2VsZWN0aW9uL3Byb3BlcnR5LmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2QzLXNlbGVjdGlvbi9zcmMvc2VsZWN0aW9uL2NsYXNzZWQuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvZDMtc2VsZWN0aW9uL3NyYy9zZWxlY3Rpb24vdGV4dC5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9kMy1zZWxlY3Rpb24vc3JjL3NlbGVjdGlvbi9odG1sLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2QzLXNlbGVjdGlvbi9zcmMvc2VsZWN0aW9uL3JhaXNlLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2QzLXNlbGVjdGlvbi9zcmMvc2VsZWN0aW9uL2xvd2VyLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2QzLXNlbGVjdGlvbi9zcmMvc2VsZWN0aW9uL2FwcGVuZC5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9kMy1zZWxlY3Rpb24vc3JjL3NlbGVjdGlvbi9pbnNlcnQuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvZDMtc2VsZWN0aW9uL3NyYy9zZWxlY3Rpb24vcmVtb3ZlLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2QzLXNlbGVjdGlvbi9zcmMvc2VsZWN0aW9uL2Nsb25lLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2QzLXNlbGVjdGlvbi9zcmMvc2VsZWN0aW9uL2RhdHVtLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2QzLXNlbGVjdGlvbi9zcmMvc2VsZWN0aW9uL29uLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2QzLXNlbGVjdGlvbi9zcmMvc2VsZWN0aW9uL2Rpc3BhdGNoLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2QzLXNlbGVjdGlvbi9zcmMvc2VsZWN0aW9uL2l0ZXJhdG9yLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2QzLXNlbGVjdGlvbi9zcmMvc2VsZWN0aW9uL2luZGV4LmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2QzLXNlbGVjdGlvbi9zcmMvc2VsZWN0LmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2QzLWNvbG9yL3NyYy9kZWZpbmUuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvZDMtY29sb3Ivc3JjL2NvbG9yLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2QzLWludGVycG9sYXRlL3NyYy9jb25zdGFudC5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9kMy1pbnRlcnBvbGF0ZS9zcmMvY29sb3IuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvZDMtaW50ZXJwb2xhdGUvc3JjL3JnYi5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9kMy1pbnRlcnBvbGF0ZS9zcmMvbnVtYmVyQXJyYXkuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvZDMtaW50ZXJwb2xhdGUvc3JjL2FycmF5LmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2QzLWludGVycG9sYXRlL3NyYy9kYXRlLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2QzLWludGVycG9sYXRlL3NyYy9udW1iZXIuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvZDMtaW50ZXJwb2xhdGUvc3JjL29iamVjdC5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9kMy1pbnRlcnBvbGF0ZS9zcmMvc3RyaW5nLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2QzLWludGVycG9sYXRlL3NyYy92YWx1ZS5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9kMy1pbnRlcnBvbGF0ZS9zcmMvcm91bmQuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvZDMtaW50ZXJwb2xhdGUvc3JjL3RyYW5zZm9ybS9kZWNvbXBvc2UuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvZDMtaW50ZXJwb2xhdGUvc3JjL3RyYW5zZm9ybS9wYXJzZS5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9kMy1pbnRlcnBvbGF0ZS9zcmMvdHJhbnNmb3JtL2luZGV4LmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2QzLXRpbWVyL3NyYy90aW1lci5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9kMy10aW1lci9zcmMvdGltZW91dC5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9kMy10cmFuc2l0aW9uL3NyYy90cmFuc2l0aW9uL3NjaGVkdWxlLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2QzLXRyYW5zaXRpb24vc3JjL2ludGVycnVwdC5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9kMy10cmFuc2l0aW9uL3NyYy9zZWxlY3Rpb24vaW50ZXJydXB0LmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2QzLXRyYW5zaXRpb24vc3JjL3RyYW5zaXRpb24vdHdlZW4uanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvZDMtdHJhbnNpdGlvbi9zcmMvdHJhbnNpdGlvbi9pbnRlcnBvbGF0ZS5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9kMy10cmFuc2l0aW9uL3NyYy90cmFuc2l0aW9uL2F0dHIuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvZDMtdHJhbnNpdGlvbi9zcmMvdHJhbnNpdGlvbi9hdHRyVHdlZW4uanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvZDMtdHJhbnNpdGlvbi9zcmMvdHJhbnNpdGlvbi9kZWxheS5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9kMy10cmFuc2l0aW9uL3NyYy90cmFuc2l0aW9uL2R1cmF0aW9uLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2QzLXRyYW5zaXRpb24vc3JjL3RyYW5zaXRpb24vZWFzZS5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9kMy10cmFuc2l0aW9uL3NyYy90cmFuc2l0aW9uL2Vhc2VWYXJ5aW5nLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2QzLXRyYW5zaXRpb24vc3JjL3RyYW5zaXRpb24vZmlsdGVyLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2QzLXRyYW5zaXRpb24vc3JjL3RyYW5zaXRpb24vbWVyZ2UuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvZDMtdHJhbnNpdGlvbi9zcmMvdHJhbnNpdGlvbi9vbi5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9kMy10cmFuc2l0aW9uL3NyYy90cmFuc2l0aW9uL3JlbW92ZS5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9kMy10cmFuc2l0aW9uL3NyYy90cmFuc2l0aW9uL3NlbGVjdC5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9kMy10cmFuc2l0aW9uL3NyYy90cmFuc2l0aW9uL3NlbGVjdEFsbC5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9kMy10cmFuc2l0aW9uL3NyYy90cmFuc2l0aW9uL3NlbGVjdGlvbi5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9kMy10cmFuc2l0aW9uL3NyYy90cmFuc2l0aW9uL3N0eWxlLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2QzLXRyYW5zaXRpb24vc3JjL3RyYW5zaXRpb24vc3R5bGVUd2Vlbi5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9kMy10cmFuc2l0aW9uL3NyYy90cmFuc2l0aW9uL3RleHQuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvZDMtdHJhbnNpdGlvbi9zcmMvdHJhbnNpdGlvbi90ZXh0VHdlZW4uanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvZDMtdHJhbnNpdGlvbi9zcmMvdHJhbnNpdGlvbi90cmFuc2l0aW9uLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2QzLXRyYW5zaXRpb24vc3JjL3RyYW5zaXRpb24vZW5kLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2QzLXRyYW5zaXRpb24vc3JjL3RyYW5zaXRpb24vaW5kZXguanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvZDMtZWFzZS9zcmMvY3ViaWMuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvZDMtdHJhbnNpdGlvbi9zcmMvc2VsZWN0aW9uL3RyYW5zaXRpb24uanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvZDMtdHJhbnNpdGlvbi9zcmMvc2VsZWN0aW9uL2luZGV4LmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2QzLWZvcm1hdC9zcmMvZm9ybWF0RGVjaW1hbC5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9kMy1mb3JtYXQvc3JjL2V4cG9uZW50LmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2QzLWZvcm1hdC9zcmMvZm9ybWF0R3JvdXAuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvZDMtZm9ybWF0L3NyYy9mb3JtYXROdW1lcmFscy5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9kMy1mb3JtYXQvc3JjL2Zvcm1hdFNwZWNpZmllci5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9kMy1mb3JtYXQvc3JjL2Zvcm1hdFRyaW0uanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvZDMtZm9ybWF0L3NyYy9mb3JtYXRQcmVmaXhBdXRvLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2QzLWZvcm1hdC9zcmMvZm9ybWF0Um91bmRlZC5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9kMy1mb3JtYXQvc3JjL2Zvcm1hdFR5cGVzLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2QzLWZvcm1hdC9zcmMvaWRlbnRpdHkuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvZDMtZm9ybWF0L3NyYy9sb2NhbGUuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvZDMtZm9ybWF0L3NyYy9kZWZhdWx0TG9jYWxlLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2QzLWZvcm1hdC9zcmMvcHJlY2lzaW9uRml4ZWQuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvZDMtZm9ybWF0L3NyYy9wcmVjaXNpb25QcmVmaXguanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvZDMtZm9ybWF0L3NyYy9wcmVjaXNpb25Sb3VuZC5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9kMy1zY2FsZS9zcmMvaW5pdC5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9kMy1zY2FsZS9zcmMvY29uc3RhbnQuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvZDMtc2NhbGUvc3JjL251bWJlci5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9kMy1zY2FsZS9zcmMvY29udGludW91cy5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9kMy1zY2FsZS9zcmMvdGlja0Zvcm1hdC5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9kMy1zY2FsZS9zcmMvbGluZWFyLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2QzLXpvb20vc3JjL3RyYW5zZm9ybS5qcyIsIi4uLy4uL3NyYy9jb21wb25lbnRzL1RpbWVJbnRlcnZhbENoYXJ0LnZ1ZSIsIi4uLy4uL3NyYy9jb21wb25lbnRzL0hvdXJseUNoYXJ0LnZ1ZSIsIi4uLy4uL3NyYy9jb21wb25lbnRzL0Rhc2hib2FkLnZ1ZSIsIi4uLy4uL3NyYy9jb21wb25lbnRzL0Rhc2hib2FkQ29udGFpbmVyLnZ1ZSIsIi4uLy4uL3NyYy9hc3NldHMvaWNvbnMvZG9uYXRpb24tcXIucG5nIiwiLi4vLi4vc3JjL2NvbXBvbmVudHMvRG9uYXRpb24udnVlIiwiLi4vLi4vc3JjL3BhZ2VzL0Rhc2hib2FyZC52dWUiLCIuLi8uLi9zcmMvZGFzaGJvYXJkLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IFwiX19WSVRFX0FTU0VUX18xZDc3ZjhlYl9fXCIiLCJleHBvcnQgZGVmYXVsdCBcIl9fVklURV9BU1NFVF9fYjUzNjljZmJfX1wiIiwiZXhwb3J0IGRlZmF1bHQgXCJfX1ZJVEVfQVNTRVRfXzdmOWFjODMxX19cIiIsImV4cG9ydCBkZWZhdWx0IFwiX19WSVRFX0FTU0VUX19lMGQ2ZTI2Yl9fXCIiLCJleHBvcnQgZGVmYXVsdCBcIl9fVklURV9BU1NFVF9fNmMzNmE5NGFfX1wiIiwiZXhwb3J0IGRlZmF1bHQgXCJfX1ZJVEVfQVNTRVRfX2VhMDM4NjNjX19cIiIsImV4cG9ydCBkZWZhdWx0IFwiX19WSVRFX0FTU0VUX18zNDRhNTA0Zl9fXCIiLCJpbXBvcnQgeyBkZWZpbmVDb21wb25lbnQgYXMgeSwgb3BlbkJsb2NrIGFzIGEsIGNyZWF0ZUJsb2NrIGFzIGcsIFRyYW5zaXRpb25Hcm91cCBhcyB4LCB3aXRoQ3R4IGFzICQsIHJlbmRlclNsb3QgYXMgVCwgY3JlYXRlRWxlbWVudEJsb2NrIGFzIHAsIG5vcm1hbGl6ZVN0eWxlIGFzIGIsIHJlc29sdmVEeW5hbWljQ29tcG9uZW50IGFzIGssIEZyYWdtZW50IGFzIF8sIHJlbmRlckxpc3QgYXMgQiwgbm9ybWFsaXplQ2xhc3MgYXMgRCwgY3JlYXRlRWxlbWVudFZOb2RlIGFzIE4sIGNyZWF0ZUNvbW1lbnRWTm9kZSBhcyBIIH0gZnJvbSBcInZ1ZVwiO1xuZnVuY3Rpb24gTSh0KSB7XG4gIHJldHVybiB7IGFsbDogdCA9IHQgfHwgLyogQF9fUFVSRV9fICovIG5ldyBNYXAoKSwgb246IGZ1bmN0aW9uKGUsIGkpIHtcbiAgICB2YXIgcyA9IHQuZ2V0KGUpO1xuICAgIHMgPyBzLnB1c2goaSkgOiB0LnNldChlLCBbaV0pO1xuICB9LCBvZmY6IGZ1bmN0aW9uKGUsIGkpIHtcbiAgICB2YXIgcyA9IHQuZ2V0KGUpO1xuICAgIHMgJiYgKGkgPyBzLnNwbGljZShzLmluZGV4T2YoaSkgPj4+IDAsIDEpIDogdC5zZXQoZSwgW10pKTtcbiAgfSwgZW1pdDogZnVuY3Rpb24oZSwgaSkge1xuICAgIHZhciBzID0gdC5nZXQoZSk7XG4gICAgcyAmJiBzLnNsaWNlKCkubWFwKGZ1bmN0aW9uKG4pIHtcbiAgICAgIG4oaSk7XG4gICAgfSksIChzID0gdC5nZXQoXCIqXCIpKSAmJiBzLnNsaWNlKCkubWFwKGZ1bmN0aW9uKG4pIHtcbiAgICAgIG4oZSwgaSk7XG4gICAgfSk7XG4gIH0gfTtcbn1cbmNvbnN0IGQgPSBNKCksIEMgPSAvKiBAX19QVVJFX18gKi8gbmV3IE1hcCgpLCB3ID0ge1xuICB4OiBbXCJsZWZ0XCIsIFwiY2VudGVyXCIsIFwicmlnaHRcIl0sXG4gIHk6IFtcInRvcFwiLCBcImJvdHRvbVwiXVxufSwgUiA9ICgodCkgPT4gKCkgPT4gdCsrKSgwKSwgViA9ICh0KSA9PiB0eXBlb2YgdCAhPSBcInN0cmluZ1wiID8gW10gOiB0LnNwbGl0KC9cXHMrL2dpKS5maWx0ZXIoKGUpID0+IGUpLCBXID0gKHQpID0+IHtcbiAgdHlwZW9mIHQgPT0gXCJzdHJpbmdcIiAmJiAodCA9IFYodCkpO1xuICBsZXQgZSA9IG51bGwsIGkgPSBudWxsO1xuICByZXR1cm4gdC5mb3JFYWNoKChzKSA9PiB7XG4gICAgdy55LmluZGV4T2YocykgIT09IC0xICYmIChpID0gcyksIHcueC5pbmRleE9mKHMpICE9PSAtMSAmJiAoZSA9IHMpO1xuICB9KSwgeyB4OiBlLCB5OiBpIH07XG59O1xuY2xhc3MgWSB7XG4gIGNvbnN0cnVjdG9yKGUsIGksIHMpIHtcbiAgICB0aGlzLnJlbWFpbmluZyA9IGksIHRoaXMuY2FsbGJhY2sgPSBlLCB0aGlzLm5vdGlmeUl0ZW0gPSBzLCB0aGlzLnJlc3VtZSgpO1xuICB9XG4gIHBhdXNlKCkge1xuICAgIGNsZWFyVGltZW91dCh0aGlzLm5vdGlmeUl0ZW0udGltZXIpLCB0aGlzLnJlbWFpbmluZyAtPSBEYXRlLm5vdygpIC0gdGhpcy5zdGFydDtcbiAgfVxuICByZXN1bWUoKSB7XG4gICAgdGhpcy5zdGFydCA9IERhdGUubm93KCksIGNsZWFyVGltZW91dCh0aGlzLm5vdGlmeUl0ZW0udGltZXIpLCB0aGlzLm5vdGlmeUl0ZW0udGltZXIgPSBzZXRUaW1lb3V0KHRoaXMuY2FsbGJhY2ssIHRoaXMucmVtYWluaW5nKTtcbiAgfVxufVxuY29uc3QgbSA9IHtcbiAgcG9zaXRpb246IFtcInRvcFwiLCBcInJpZ2h0XCJdLFxuICBjc3NBbmltYXRpb246IFwidm4tZmFkZVwiLFxuICB2ZWxvY2l0eUFuaW1hdGlvbjoge1xuICAgIGVudGVyOiAodCkgPT4gKHtcbiAgICAgIGhlaWdodDogW3QuY2xpZW50SGVpZ2h0LCAwXSxcbiAgICAgIG9wYWNpdHk6IFsxLCAwXVxuICAgIH0pLFxuICAgIGxlYXZlOiB7XG4gICAgICBoZWlnaHQ6IDAsXG4gICAgICBvcGFjaXR5OiBbMCwgMV1cbiAgICB9XG4gIH1cbn0sIGogPSB5KHtcbiAgbmFtZTogXCJ2ZWxvY2l0eS1ncm91cFwiLFxuICBlbWl0czogW1wiYWZ0ZXItbGVhdmVcIiwgXCJsZWF2ZVwiLCBcImVudGVyXCJdLFxuICBtZXRob2RzOiB7XG4gICAgZW50ZXIodCwgZSkge1xuICAgICAgdGhpcy4kZW1pdChcImVudGVyXCIsIHQsIGUpO1xuICAgIH0sXG4gICAgbGVhdmUodCwgZSkge1xuICAgICAgdGhpcy4kZW1pdChcImxlYXZlXCIsIHQsIGUpO1xuICAgIH0sXG4gICAgYWZ0ZXJMZWF2ZSgpIHtcbiAgICAgIHRoaXMuJGVtaXQoXCJhZnRlci1sZWF2ZVwiKTtcbiAgICB9XG4gIH1cbn0pLCB2ID0gKHQsIGUpID0+IHtcbiAgY29uc3QgaSA9IHQuX192Y2NPcHRzIHx8IHQ7XG4gIGZvciAoY29uc3QgW3MsIG5dIG9mIGUpXG4gICAgaVtzXSA9IG47XG4gIHJldHVybiBpO1xufTtcbmZ1bmN0aW9uIEcodCwgZSwgaSwgcywgbiwgYykge1xuICByZXR1cm4gYSgpLCBnKHgsIHtcbiAgICB0YWc6IFwic3BhblwiLFxuICAgIGNzczogITEsXG4gICAgb25FbnRlcjogdC5lbnRlcixcbiAgICBvbkxlYXZlOiB0LmxlYXZlLFxuICAgIG9uQWZ0ZXJMZWF2ZTogdC5hZnRlckxlYXZlXG4gIH0sIHtcbiAgICBkZWZhdWx0OiAkKCgpID0+IFtcbiAgICAgIFQodC4kc2xvdHMsIFwiZGVmYXVsdFwiKVxuICAgIF0pLFxuICAgIF86IDNcbiAgfSwgOCwgW1wib25FbnRlclwiLCBcIm9uTGVhdmVcIiwgXCJvbkFmdGVyTGVhdmVcIl0pO1xufVxuY29uc3QgeiA9IC8qIEBfX1BVUkVfXyAqLyB2KGosIFtbXCJyZW5kZXJcIiwgR11dKSwgRiA9IHkoe1xuICBuYW1lOiBcImNzcy1ncm91cFwiLFxuICBpbmhlcml0QXR0cnM6ICExLFxuICBwcm9wczoge1xuICAgIG5hbWU6IHsgdHlwZTogU3RyaW5nLCByZXF1aXJlZDogITAgfVxuICB9XG59KTtcbmZ1bmN0aW9uIFAodCwgZSwgaSwgcywgbiwgYykge1xuICByZXR1cm4gYSgpLCBnKHgsIHtcbiAgICB0YWc6IFwic3BhblwiLFxuICAgIG5hbWU6IHQubmFtZVxuICB9LCB7XG4gICAgZGVmYXVsdDogJCgoKSA9PiBbXG4gICAgICBUKHQuJHNsb3RzLCBcImRlZmF1bHRcIilcbiAgICBdKSxcbiAgICBfOiAzXG4gIH0sIDgsIFtcIm5hbWVcIl0pO1xufVxuY29uc3QgcSA9IC8qIEBfX1BVUkVfXyAqLyB2KEYsIFtbXCJyZW5kZXJcIiwgUF1dKSwgaCA9IFwiWy0rXT9bMC05XSouP1swLTldK1wiLCBMID0gW1xuICB7XG4gICAgbmFtZTogXCJweFwiLFxuICAgIHJlZ2V4cDogbmV3IFJlZ0V4cChgXiR7aH1weCRgKVxuICB9LFxuICB7XG4gICAgbmFtZTogXCIlXCIsXG4gICAgcmVnZXhwOiBuZXcgUmVnRXhwKGBeJHtofSUkYClcbiAgfSxcbiAgLyoqXG4gICAqIEZhbGxiYWNrIG9wdGlvblxuICAgKiBJZiBubyBzdWZmaXggc3BlY2lmaWVkLCBhc3NpZ25pbmcgXCJweFwiXG4gICAqL1xuICB7XG4gICAgbmFtZTogXCJweFwiLFxuICAgIHJlZ2V4cDogbmV3IFJlZ0V4cChgXiR7aH0kYClcbiAgfVxuXSwgSiA9ICh0KSA9PiB7XG4gIGlmICh0ID09PSBcImF1dG9cIilcbiAgICByZXR1cm4ge1xuICAgICAgdHlwZTogdCxcbiAgICAgIHZhbHVlOiAwXG4gICAgfTtcbiAgZm9yIChsZXQgZSA9IDA7IGUgPCBMLmxlbmd0aDsgZSsrKSB7XG4gICAgY29uc3QgaSA9IExbZV07XG4gICAgaWYgKGkucmVnZXhwLnRlc3QodCkpXG4gICAgICByZXR1cm4ge1xuICAgICAgICB0eXBlOiBpLm5hbWUsXG4gICAgICAgIHZhbHVlOiBwYXJzZUZsb2F0KHQpXG4gICAgICB9O1xuICB9XG4gIHJldHVybiB7XG4gICAgdHlwZTogXCJcIixcbiAgICB2YWx1ZTogdFxuICB9O1xufSwgSyA9ICh0KSA9PiB7XG4gIHN3aXRjaCAodHlwZW9mIHQpIHtcbiAgICBjYXNlIFwibnVtYmVyXCI6XG4gICAgICByZXR1cm4geyB0eXBlOiBcInB4XCIsIHZhbHVlOiB0IH07XG4gICAgY2FzZSBcInN0cmluZ1wiOlxuICAgICAgcmV0dXJuIEoodCk7XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiB7IHR5cGU6IFwiXCIsIHZhbHVlOiB0IH07XG4gIH1cbn0sIGYgPSB7XG4gIElETEU6IDAsXG4gIERFU1RST1lFRDogMlxufSwgUSA9IHkoe1xuICBuYW1lOiBcIm5vdGlmaWNhdGlvbnNcIixcbiAgY29tcG9uZW50czoge1xuICAgIFZlbG9jaXR5R3JvdXA6IHosXG4gICAgQ3NzR3JvdXA6IHFcbiAgfSxcbiAgcHJvcHM6IHtcbiAgICBncm91cDoge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgZGVmYXVsdDogXCJcIlxuICAgIH0sXG4gICAgd2lkdGg6IHtcbiAgICAgIHR5cGU6IFtOdW1iZXIsIFN0cmluZ10sXG4gICAgICBkZWZhdWx0OiAzMDBcbiAgICB9LFxuICAgIHJldmVyc2U6IHtcbiAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICBkZWZhdWx0OiAhMVxuICAgIH0sXG4gICAgcG9zaXRpb246IHtcbiAgICAgIHR5cGU6IFtTdHJpbmcsIEFycmF5XSxcbiAgICAgIGRlZmF1bHQ6IG0ucG9zaXRpb25cbiAgICB9LFxuICAgIGNsYXNzZXM6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIGRlZmF1bHQ6IFwidnVlLW5vdGlmaWNhdGlvblwiXG4gICAgfSxcbiAgICBhbmltYXRpb25UeXBlOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICBkZWZhdWx0OiBcImNzc1wiXG4gICAgfSxcbiAgICBhbmltYXRpb246IHtcbiAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgIGRlZmF1bHQ6IG0udmVsb2NpdHlBbmltYXRpb25cbiAgICB9LFxuICAgIGFuaW1hdGlvbk5hbWU6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIGRlZmF1bHQ6IG0uY3NzQW5pbWF0aW9uXG4gICAgfSxcbiAgICBzcGVlZDoge1xuICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgZGVmYXVsdDogMzAwXG4gICAgfSxcbiAgICAvKiBUb2RvICovXG4gICAgY29vbGRvd246IHtcbiAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgIGRlZmF1bHQ6IDBcbiAgICB9LFxuICAgIGR1cmF0aW9uOiB7XG4gICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICBkZWZhdWx0OiAzZTNcbiAgICB9LFxuICAgIGRlbGF5OiB7XG4gICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICBkZWZhdWx0OiAwXG4gICAgfSxcbiAgICBtYXg6IHtcbiAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgIGRlZmF1bHQ6IDEgLyAwXG4gICAgfSxcbiAgICBpZ25vcmVEdXBsaWNhdGVzOiB7XG4gICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgZGVmYXVsdDogITFcbiAgICB9LFxuICAgIGNsb3NlT25DbGljazoge1xuICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgIGRlZmF1bHQ6ICEwXG4gICAgfSxcbiAgICBwYXVzZU9uSG92ZXI6IHtcbiAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICBkZWZhdWx0OiAhMVxuICAgIH1cbiAgfSxcbiAgZW1pdHM6IFtcImNsaWNrXCIsIFwiZGVzdHJveVwiLCBcInN0YXJ0XCJdLFxuICBkYXRhKCkge1xuICAgIHJldHVybiB7XG4gICAgICBsaXN0OiBbXSxcbiAgICAgIHZlbG9jaXR5OiBDLmdldChcInZlbG9jaXR5XCIpLFxuICAgICAgdGltZXJDb250cm9sOiBudWxsXG4gICAgfTtcbiAgfSxcbiAgY29tcHV0ZWQ6IHtcbiAgICBhY3R1YWxXaWR0aCgpIHtcbiAgICAgIHJldHVybiBLKHRoaXMud2lkdGgpO1xuICAgIH0sXG4gICAgaXNWQSgpIHtcbiAgICAgIHJldHVybiB0aGlzLmFuaW1hdGlvblR5cGUgPT09IFwidmVsb2NpdHlcIjtcbiAgICB9LFxuICAgIGNvbXBvbmVudE5hbWUoKSB7XG4gICAgICByZXR1cm4gdGhpcy5pc1ZBID8gXCJ2ZWxvY2l0eS1ncm91cFwiIDogXCJjc3MtZ3JvdXBcIjtcbiAgICB9LFxuICAgIHN0eWxlcygpIHtcbiAgICAgIGNvbnN0IHsgeDogdCwgeTogZSB9ID0gVyh0aGlzLnBvc2l0aW9uKSwgaSA9IHRoaXMuYWN0dWFsV2lkdGgudmFsdWUsIHMgPSB0aGlzLmFjdHVhbFdpZHRoLnR5cGUsIG4gPSB7XG4gICAgICAgIHdpZHRoOiBpICsgc1xuICAgICAgfTtcbiAgICAgIHJldHVybiBlICYmIChuW2VdID0gXCIwcHhcIiksIHQgJiYgKHQgPT09IFwiY2VudGVyXCIgPyBuLmxlZnQgPSBgY2FsYyg1MCUgLSAkeytpIC8gMn0ke3N9KWAgOiBuW3RdID0gXCIwcHhcIiksIG47XG4gICAgfSxcbiAgICBhY3RpdmUoKSB7XG4gICAgICByZXR1cm4gdGhpcy5saXN0LmZpbHRlcigodCkgPT4gdC5zdGF0ZSAhPT0gZi5ERVNUUk9ZRUQpO1xuICAgIH0sXG4gICAgYm90VG9Ub3AoKSB7XG4gICAgICByZXR1cm4gdGhpcy5zdHlsZXMuaGFzT3duUHJvcGVydHkoXCJib3R0b21cIik7XG4gICAgfVxuICB9LFxuICBtb3VudGVkKCkge1xuICAgIGQub24oXCJhZGRcIiwgdGhpcy5hZGRJdGVtKSwgZC5vbihcImNsb3NlXCIsIHRoaXMuY2xvc2VJdGVtKTtcbiAgfSxcbiAgbWV0aG9kczoge1xuICAgIGRlc3Ryb3lJZk5lY2Vzc2FyeSh0KSB7XG4gICAgICB0aGlzLiRlbWl0KFwiY2xpY2tcIiwgdCksIHRoaXMuY2xvc2VPbkNsaWNrICYmIHRoaXMuZGVzdHJveSh0KTtcbiAgICB9LFxuICAgIHBhdXNlVGltZW91dCgpIHtcbiAgICAgIHZhciB0O1xuICAgICAgdGhpcy5wYXVzZU9uSG92ZXIgJiYgKCh0ID0gdGhpcy50aW1lckNvbnRyb2wpID09IG51bGwgfHwgdC5wYXVzZSgpKTtcbiAgICB9LFxuICAgIHJlc3VtZVRpbWVvdXQoKSB7XG4gICAgICB2YXIgdDtcbiAgICAgIHRoaXMucGF1c2VPbkhvdmVyICYmICgodCA9IHRoaXMudGltZXJDb250cm9sKSA9PSBudWxsIHx8IHQucmVzdW1lKCkpO1xuICAgIH0sXG4gICAgYWRkSXRlbSh0ID0ge30pIHtcbiAgICAgIGlmICh0Lmdyb3VwIHx8ICh0Lmdyb3VwID0gXCJcIiksIHQuZGF0YSB8fCAodC5kYXRhID0ge30pLCB0aGlzLmdyb3VwICE9PSB0Lmdyb3VwKVxuICAgICAgICByZXR1cm47XG4gICAgICBpZiAodC5jbGVhbiB8fCB0LmNsZWFyKSB7XG4gICAgICAgIHRoaXMuZGVzdHJveUFsbCgpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBjb25zdCBlID0gdHlwZW9mIHQuZHVyYXRpb24gPT0gXCJudW1iZXJcIiA/IHQuZHVyYXRpb24gOiB0aGlzLmR1cmF0aW9uLCBpID0gdHlwZW9mIHQuc3BlZWQgPT0gXCJudW1iZXJcIiA/IHQuc3BlZWQgOiB0aGlzLnNwZWVkLCBzID0gdHlwZW9mIHQuaWdub3JlRHVwbGljYXRlcyA9PSBcImJvb2xlYW5cIiA/IHQuaWdub3JlRHVwbGljYXRlcyA6IHRoaXMuaWdub3JlRHVwbGljYXRlcywgeyB0aXRsZTogbiwgdGV4dDogYywgdHlwZTogbywgZGF0YTogbCwgaWQ6IEkgfSA9IHQsIHIgPSB7XG4gICAgICAgIGlkOiBJIHx8IFIoKSxcbiAgICAgICAgdGl0bGU6IG4sXG4gICAgICAgIHRleHQ6IGMsXG4gICAgICAgIHR5cGU6IG8sXG4gICAgICAgIHN0YXRlOiBmLklETEUsXG4gICAgICAgIHNwZWVkOiBpLFxuICAgICAgICBsZW5ndGg6IGUgKyAyICogaSxcbiAgICAgICAgZGF0YTogbFxuICAgICAgfTtcbiAgICAgIGUgPj0gMCAmJiAodGhpcy50aW1lckNvbnRyb2wgPSBuZXcgWSgoKSA9PiB0aGlzLmRlc3Ryb3kociksIHIubGVuZ3RoLCByKSk7XG4gICAgICBjb25zdCBPID0gdGhpcy5yZXZlcnNlID8gIXRoaXMuYm90VG9Ub3AgOiB0aGlzLmJvdFRvVG9wO1xuICAgICAgbGV0IHUgPSAtMTtcbiAgICAgIGNvbnN0IFMgPSB0aGlzLmFjdGl2ZS5zb21lKChFKSA9PiBFLnRpdGxlID09PSB0LnRpdGxlICYmIEUudGV4dCA9PT0gdC50ZXh0KTtcbiAgICAgICghcyB8fCAhUykgJiYgKE8gPyAodGhpcy5saXN0LnB1c2gociksIHRoaXMuJGVtaXQoXCJzdGFydFwiLCByKSwgdGhpcy5hY3RpdmUubGVuZ3RoID4gdGhpcy5tYXggJiYgKHUgPSAwKSkgOiAodGhpcy5saXN0LnVuc2hpZnQociksIHRoaXMuJGVtaXQoXCJzdGFydFwiLCByKSwgdGhpcy5hY3RpdmUubGVuZ3RoID4gdGhpcy5tYXggJiYgKHUgPSB0aGlzLmFjdGl2ZS5sZW5ndGggLSAxKSksIHUgIT09IC0xICYmIHRoaXMuZGVzdHJveSh0aGlzLmFjdGl2ZVt1XSkpO1xuICAgIH0sXG4gICAgY2xvc2VJdGVtKHQpIHtcbiAgICAgIHRoaXMuZGVzdHJveUJ5SWQodCk7XG4gICAgfSxcbiAgICBub3RpZnlDbGFzcyh0KSB7XG4gICAgICByZXR1cm4gW1xuICAgICAgICBcInZ1ZS1ub3RpZmljYXRpb24tdGVtcGxhdGVcIixcbiAgICAgICAgdGhpcy5jbGFzc2VzLFxuICAgICAgICB0LnR5cGUgfHwgXCJcIlxuICAgICAgXTtcbiAgICB9LFxuICAgIG5vdGlmeVdyYXBwZXJTdHlsZSh0KSB7XG4gICAgICByZXR1cm4gdGhpcy5pc1ZBID8gdm9pZCAwIDogeyB0cmFuc2l0aW9uOiBgYWxsICR7dC5zcGVlZH1tc2AgfTtcbiAgICB9LFxuICAgIGRlc3Ryb3kodCkge1xuICAgICAgY2xlYXJUaW1lb3V0KHQudGltZXIpLCB0LnN0YXRlID0gZi5ERVNUUk9ZRUQsIHRoaXMuY2xlYW4oKSwgdGhpcy4kZW1pdChcImRlc3Ryb3lcIiwgdCk7XG4gICAgfSxcbiAgICBkZXN0cm95QnlJZCh0KSB7XG4gICAgICBjb25zdCBlID0gdGhpcy5saXN0LmZpbmQoKGkpID0+IGkuaWQgPT09IHQpO1xuICAgICAgZSAmJiB0aGlzLmRlc3Ryb3koZSk7XG4gICAgfSxcbiAgICBkZXN0cm95QWxsKCkge1xuICAgICAgdGhpcy5hY3RpdmUuZm9yRWFjaCh0aGlzLmRlc3Ryb3kpO1xuICAgIH0sXG4gICAgZ2V0QW5pbWF0aW9uKHQsIGUpIHtcbiAgICAgIHZhciBzO1xuICAgICAgY29uc3QgaSA9IChzID0gdGhpcy5hbmltYXRpb24pID09IG51bGwgPyB2b2lkIDAgOiBzW3RdO1xuICAgICAgcmV0dXJuIHR5cGVvZiBpID09IFwiZnVuY3Rpb25cIiA/IGkuY2FsbCh0aGlzLCBlKSA6IGk7XG4gICAgfSxcbiAgICBlbnRlcih0LCBlKSB7XG4gICAgICBpZiAoIXRoaXMuaXNWQSlcbiAgICAgICAgcmV0dXJuO1xuICAgICAgY29uc3QgaSA9IHRoaXMuZ2V0QW5pbWF0aW9uKFwiZW50ZXJcIiwgdCk7XG4gICAgICB0aGlzLnZlbG9jaXR5KHQsIGksIHtcbiAgICAgICAgZHVyYXRpb246IHRoaXMuc3BlZWQsXG4gICAgICAgIGNvbXBsZXRlOiBlXG4gICAgICB9KTtcbiAgICB9LFxuICAgIGxlYXZlKHQsIGUpIHtcbiAgICAgIGlmICghdGhpcy5pc1ZBKVxuICAgICAgICByZXR1cm47XG4gICAgICBjb25zdCBpID0gdGhpcy5nZXRBbmltYXRpb24oXCJsZWF2ZVwiLCB0KTtcbiAgICAgIHRoaXMudmVsb2NpdHkodCwgaSwge1xuICAgICAgICBkdXJhdGlvbjogdGhpcy5zcGVlZCxcbiAgICAgICAgY29tcGxldGU6IGVcbiAgICAgIH0pO1xuICAgIH0sXG4gICAgY2xlYW4oKSB7XG4gICAgICB0aGlzLmxpc3QgPSB0aGlzLmxpc3QuZmlsdGVyKCh0KSA9PiB0LnN0YXRlICE9PSBmLkRFU1RST1lFRCk7XG4gICAgfVxuICB9XG59KTtcbmNvbnN0IFUgPSBbXCJkYXRhLWlkXCJdLCBYID0gW1wib25DbGlja1wiXSwgWiA9IFtcImlubmVySFRNTFwiXSwgdHQgPSBbXCJpbm5lckhUTUxcIl07XG5mdW5jdGlvbiBldCh0LCBlLCBpLCBzLCBuLCBjKSB7XG4gIHJldHVybiBhKCksIHAoXCJkaXZcIiwge1xuICAgIGNsYXNzOiBcInZ1ZS1ub3RpZmljYXRpb24tZ3JvdXBcIixcbiAgICBzdHlsZTogYih0LnN0eWxlcylcbiAgfSwgW1xuICAgIChhKCksIGcoayh0LmNvbXBvbmVudE5hbWUpLCB7XG4gICAgICBuYW1lOiB0LmFuaW1hdGlvbk5hbWUsXG4gICAgICBvbkVudGVyOiB0LmVudGVyLFxuICAgICAgb25MZWF2ZTogdC5sZWF2ZSxcbiAgICAgIG9uQWZ0ZXJMZWF2ZTogdC5jbGVhblxuICAgIH0sIHtcbiAgICAgIGRlZmF1bHQ6ICQoKCkgPT4gW1xuICAgICAgICAoYSghMCksIHAoXywgbnVsbCwgQih0LmFjdGl2ZSwgKG8pID0+IChhKCksIHAoXCJkaXZcIiwge1xuICAgICAgICAgIGtleTogby5pZCxcbiAgICAgICAgICBjbGFzczogXCJ2dWUtbm90aWZpY2F0aW9uLXdyYXBwZXJcIixcbiAgICAgICAgICBzdHlsZTogYih0Lm5vdGlmeVdyYXBwZXJTdHlsZShvKSksXG4gICAgICAgICAgXCJkYXRhLWlkXCI6IG8uaWQsXG4gICAgICAgICAgb25Nb3VzZWVudGVyOiBlWzBdIHx8IChlWzBdID0gKC4uLmwpID0+IHQucGF1c2VUaW1lb3V0ICYmIHQucGF1c2VUaW1lb3V0KC4uLmwpKSxcbiAgICAgICAgICBvbk1vdXNlbGVhdmU6IGVbMV0gfHwgKGVbMV0gPSAoLi4ubCkgPT4gdC5yZXN1bWVUaW1lb3V0ICYmIHQucmVzdW1lVGltZW91dCguLi5sKSlcbiAgICAgICAgfSwgW1xuICAgICAgICAgIFQodC4kc2xvdHMsIFwiYm9keVwiLCB7XG4gICAgICAgICAgICBjbGFzczogRChbdC5jbGFzc2VzLCBvLnR5cGVdKSxcbiAgICAgICAgICAgIGl0ZW06IG8sXG4gICAgICAgICAgICBjbG9zZTogKCkgPT4gdC5kZXN0cm95KG8pXG4gICAgICAgICAgfSwgKCkgPT4gW1xuICAgICAgICAgICAgTihcImRpdlwiLCB7XG4gICAgICAgICAgICAgIGNsYXNzOiBEKHQubm90aWZ5Q2xhc3MobykpLFxuICAgICAgICAgICAgICBvbkNsaWNrOiAobCkgPT4gdC5kZXN0cm95SWZOZWNlc3NhcnkobylcbiAgICAgICAgICAgIH0sIFtcbiAgICAgICAgICAgICAgby50aXRsZSA/IChhKCksIHAoXCJkaXZcIiwge1xuICAgICAgICAgICAgICAgIGtleTogMCxcbiAgICAgICAgICAgICAgICBjbGFzczogXCJub3RpZmljYXRpb24tdGl0bGVcIixcbiAgICAgICAgICAgICAgICBpbm5lckhUTUw6IG8udGl0bGVcbiAgICAgICAgICAgICAgfSwgbnVsbCwgOCwgWikpIDogSChcIlwiLCAhMCksXG4gICAgICAgICAgICAgIE4oXCJkaXZcIiwge1xuICAgICAgICAgICAgICAgIGNsYXNzOiBcIm5vdGlmaWNhdGlvbi1jb250ZW50XCIsXG4gICAgICAgICAgICAgICAgaW5uZXJIVE1MOiBvLnRleHRcbiAgICAgICAgICAgICAgfSwgbnVsbCwgOCwgdHQpXG4gICAgICAgICAgICBdLCAxMCwgWClcbiAgICAgICAgICBdKVxuICAgICAgICBdLCA0NCwgVSkpKSwgMTI4KSlcbiAgICAgIF0pLFxuICAgICAgXzogM1xuICAgIH0sIDQwLCBbXCJuYW1lXCIsIFwib25FbnRlclwiLCBcIm9uTGVhdmVcIiwgXCJvbkFmdGVyTGVhdmVcIl0pKVxuICBdLCA0KTtcbn1cbmNvbnN0IGl0ID0gLyogQF9fUFVSRV9fICovIHYoUSwgW1tcInJlbmRlclwiLCBldF1dKSwgQSA9ICh0KSA9PiB7XG4gIHR5cGVvZiB0ID09IFwic3RyaW5nXCIgJiYgKHQgPSB7IHRpdGxlOiBcIlwiLCB0ZXh0OiB0IH0pLCB0eXBlb2YgdCA9PSBcIm9iamVjdFwiICYmIGQuZW1pdChcImFkZFwiLCB0KTtcbn07XG5BLmNsb3NlID0gKHQpID0+IHtcbiAgZC5lbWl0KFwiY2xvc2VcIiwgdCk7XG59O1xuY29uc3QgcnQgPSAoKSA9PiAoeyBub3RpZnk6IEEgfSk7XG5mdW5jdGlvbiBzdCh0LCBlID0ge30pIHtcbiAgT2JqZWN0LmVudHJpZXMoZSkuZm9yRWFjaCgocykgPT4gQy5zZXQoLi4ucykpO1xuICBjb25zdCBpID0gZS5uYW1lIHx8IFwibm90aWZ5XCI7XG4gIHQuY29uZmlnLmdsb2JhbFByb3BlcnRpZXNbXCIkXCIgKyBpXSA9IEEsIHQuY29tcG9uZW50KGUuY29tcG9uZW50TmFtZSB8fCBcIk5vdGlmaWNhdGlvbnNcIiwgaXQpO1xufVxuY29uc3QgYXQgPSB7XG4gIGluc3RhbGw6IHN0XG59O1xuZXhwb3J0IHtcbiAgYXQgYXMgZGVmYXVsdCxcbiAgQSBhcyBub3RpZnksXG4gIHJ0IGFzIHVzZU5vdGlmaWNhdGlvblxufTtcbihmdW5jdGlvbigpe3ZhciBvO1widXNlIHN0cmljdFwiO3RyeXtpZih0eXBlb2YgZG9jdW1lbnQhPVwidW5kZWZpbmVkXCIpe3ZhciBlPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtlLm5vbmNlPShvPWRvY3VtZW50LmhlYWQucXVlcnlTZWxlY3RvcihcIm1ldGFbcHJvcGVydHk9Y3NwLW5vbmNlXVwiKSk9PW51bGw/dm9pZCAwOm8uY29udGVudCxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiLnZ1ZS1ub3RpZmljYXRpb24tZ3JvdXB7ZGlzcGxheTpibG9jaztwb3NpdGlvbjpmaXhlZDt6LWluZGV4OjUwMDB9LnZ1ZS1ub3RpZmljYXRpb24td3JhcHBlcntkaXNwbGF5OmJsb2NrO292ZXJmbG93OmhpZGRlbjt3aWR0aDoxMDAlO21hcmdpbjowO3BhZGRpbmc6MH0ubm90aWZpY2F0aW9uLXRpdGxle2ZvbnQtd2VpZ2h0OjYwMH0udnVlLW5vdGlmaWNhdGlvbi10ZW1wbGF0ZXtkaXNwbGF5OmJsb2NrO2JveC1zaXppbmc6Ym9yZGVyLWJveDtiYWNrZ3JvdW5kOndoaXRlO3RleHQtYWxpZ246bGVmdH0udnVlLW5vdGlmaWNhdGlvbntkaXNwbGF5OmJsb2NrO2JveC1zaXppbmc6Ym9yZGVyLWJveDt0ZXh0LWFsaWduOmxlZnQ7Zm9udC1zaXplOjEycHg7cGFkZGluZzoxMHB4O21hcmdpbjowIDVweCA1cHg7Y29sb3I6I2ZmZjtiYWNrZ3JvdW5kOiM0NEE0RkM7Ym9yZGVyLWxlZnQ6NXB4IHNvbGlkICMxODdGRTd9LnZ1ZS1ub3RpZmljYXRpb24ud2FybntiYWNrZ3JvdW5kOiNmZmI2NDg7Ym9yZGVyLWxlZnQtY29sb3I6I2Y0OGEwNn0udnVlLW5vdGlmaWNhdGlvbi5lcnJvcntiYWNrZ3JvdW5kOiNFNTRENDI7Ym9yZGVyLWxlZnQtY29sb3I6I2I4MmUyNH0udnVlLW5vdGlmaWNhdGlvbi5zdWNjZXNze2JhY2tncm91bmQ6IzY4Q0Q4Njtib3JkZXItbGVmdC1jb2xvcjojNDJhODVmfS52bi1mYWRlLWVudGVyLWFjdGl2ZSwudm4tZmFkZS1sZWF2ZS1hY3RpdmUsLnZuLWZhZGUtbW92ZXt0cmFuc2l0aW9uOmFsbCAuNXN9LnZuLWZhZGUtZW50ZXItZnJvbSwudm4tZmFkZS1sZWF2ZS10b3tvcGFjaXR5OjB9XCIpKSxkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKGUpfX1jYXRjaChpKXtjb25zb2xlLmVycm9yKFwidml0ZS1wbHVnaW4tY3NzLWluamVjdGVkLWJ5LWpzXCIsaSl9fSkoKTtcbiIsImltcG9ydCBCcm93c2VyIGZyb20gJ3dlYmV4dGVuc2lvbi1wb2x5ZmlsbCc7XHJcbmltcG9ydCB7IGluamVjdFN0b3JhZ2UgfSBmcm9tICcuLi9zdG9yYWdlL2luamVjdC1zdG9yYWdlJztcclxuaW1wb3J0IHsgTWVzc2FnZXMgfSBmcm9tICcuLi91dGlscy9tZXNzYWdlcyc7XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXNlUmVtb3ZlQWxsRGF0YSgpIHtcclxuICBjb25zdCBzdG9yYWdlID0gaW5qZWN0U3RvcmFnZSgpO1xyXG4gIGF3YWl0IHN0b3JhZ2Uuc2F2ZUludGVydmFsTGlzdChbXSk7XHJcbiAgYXdhaXQgQnJvd3Nlci5ydW50aW1lLnNlbmRNZXNzYWdlKE1lc3NhZ2VzLkNsZWFyQWxsRGF0YSk7XHJcbn1cclxuIiwiaW1wb3J0IEJyb3dzZXIgZnJvbSAnd2ViZXh0ZW5zaW9uLXBvbHlmaWxsJztcclxuaW1wb3J0IHsgTWVzc2FnZXMgfSBmcm9tICcuLi91dGlscy9tZXNzYWdlcyc7XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXNlUmVzdG9yZURhdGEoanNvbjogc3RyaW5nKSB7XHJcbiAgaWYgKGpzb24gIT0gbnVsbCAmJiBqc29uICE9IHVuZGVmaW5lZCAmJiBqc29uICE9ICcnKSB7XHJcbiAgICBjb25zdCBkYXRhID0gSlNPTi5wYXJzZShqc29uKTtcclxuICAgIGF3YWl0IEJyb3dzZXIucnVudGltZS5zZW5kTWVzc2FnZSh7XHJcbiAgICAgIG1lc3NhZ2U6IE1lc3NhZ2VzLlJlc3RvcmUsXHJcbiAgICAgIGRhdGE6IGRhdGEsXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuIiwiPHRlbXBsYXRlPlxyXG4gIDxkaXYgY2xhc3M9XCJzZXR0aW5ncy1pdGVtXCI+XHJcbiAgICA8bGFiZWwgY2xhc3M9XCJzZXR0aW5nLWhlYWRlclwiPlxyXG4gICAgICA8aW5wdXRcclxuICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxyXG4gICAgICAgIGNsYXNzPVwiZmlsbGVkLWluXCJcclxuICAgICAgICBpZD1cInZpZXdUaW1lSW5CYWRnZVwiXHJcbiAgICAgICAgdi1tb2RlbD1cInZpZXdUaW1lSW5CYWRnZVwiXHJcbiAgICAgICAgQGNoYW5nZT1cIm9uQ2hhbmdlKFN0b3JhZ2VQYXJhbXMuVklFV19USU1FX0lOX0JBREdFLCAkZXZlbnQudGFyZ2V0KVwiXHJcbiAgICAgIC8+XHJcbiAgICAgIDxzcGFuPnt7IHQoJ3ZpZXdUaW1lSW5CYWRnZS5tZXNzYWdlJykgfX08L3NwYW4+XHJcbiAgICAgIDxwIGNsYXNzPVwiZGVzY3JpcHRpb25cIj5cclxuICAgICAgICB7eyB0KCd2aWV3VGltZUluQmFkZ2UuZGVzY3JpcHRpb24nKSB9fVxyXG4gICAgICA8L3A+XHJcbiAgICA8L2xhYmVsPlxyXG4gIDwvZGl2PlxyXG4gIDxkaXYgY2xhc3M9XCJzZXR0aW5ncy1pdGVtXCI+XHJcbiAgICA8bGFiZWwgY2xhc3M9XCJzZXR0aW5nLWhlYWRlclwiPlxyXG4gICAgICA8aW5wdXRcclxuICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxyXG4gICAgICAgIGNsYXNzPVwiZmlsbGVkLWluXCJcclxuICAgICAgICBpZD1cImJsb2NrRGVmZXJyYWxcIlxyXG4gICAgICAgIHYtbW9kZWw9XCJhbGxvd0RlZmVycmluZ0Jsb2NrXCJcclxuICAgICAgICBAY2hhbmdlPVwib25DaGFuZ2UoU3RvcmFnZVBhcmFtcy5CTE9DS19ERUZFUlJBTCwgJGV2ZW50LnRhcmdldClcIlxyXG4gICAgICAvPlxyXG4gICAgICA8c3Bhbj57eyB0KCdhbGxvd0RlZmVycmluZ0Jsb2NrLm1lc3NhZ2UnKSB9fTwvc3Bhbj5cclxuICAgICAgPHAgY2xhc3M9XCJkZXNjcmlwdGlvblwiPlxyXG4gICAgICAgIHt7IHQoJ2FsbG93RGVmZXJyaW5nQmxvY2suZGVzY3JpcHRpb24nKSB9fVxyXG4gICAgICA8L3A+XHJcbiAgICA8L2xhYmVsPlxyXG4gIDwvZGl2PlxyXG4gIDxkaXYgY2xhc3M9XCJzZXR0aW5ncy1pdGVtXCI+XHJcbiAgICA8bGFiZWwgY2xhc3M9XCJzZXR0aW5nLWhlYWRlclwiPlxyXG4gICAgICA8aW5wdXRcclxuICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxyXG4gICAgICAgIGNsYXNzPVwiZmlsbGVkLWluXCJcclxuICAgICAgICBpZD1cImRhcmtNb2RlXCJcclxuICAgICAgICB2LW1vZGVsPVwiZGFya01vZGVcIlxyXG4gICAgICAgIEBjaGFuZ2U9XCJvbkNoYW5nZShTdG9yYWdlUGFyYW1zLkRBUktfTU9ERSwgJGV2ZW50LnRhcmdldClcIlxyXG4gICAgICAvPlxyXG4gICAgICA8c3Bhbj57eyB0KCdkYXJrVGhlbWUubWVzc2FnZScpIH19PC9zcGFuPlxyXG4gICAgPC9sYWJlbD5cclxuICA8L2Rpdj5cclxuICA8ZGl2IGNsYXNzPVwic2V0dGluZ3MtaXRlbVwiPlxyXG4gICAgPGxhYmVsIGNsYXNzPVwic2V0dGluZy1oZWFkZXIgZC1pbmxpbmUtYmxvY2tcIj57eyB0KCdpbnRlcnZhbEluYWN0aXZpdHkubWVzc2FnZScpIH19IDwvbGFiZWw+XHJcbiAgICA8ZGl2IGNsYXNzPVwiZC1pbmxpbmUtYmxvY2sgbWwtMTBcIj5cclxuICAgICAgPHNlbGVjdFxyXG4gICAgICAgIGNsYXNzPVwib3B0aW9uXCJcclxuICAgICAgICB2LW1vZGVsPVwiaW50ZXJ2YWxJbmFjdGl2aXR5XCJcclxuICAgICAgICBAY2hhbmdlPVwib25DaGFuZ2UoU3RvcmFnZVBhcmFtcy5JTlRFUlZBTF9JTkFDVElWSVRZLCAkZXZlbnQudGFyZ2V0KVwiXHJcbiAgICAgID5cclxuICAgICAgICA8b3B0aW9uIDp2YWx1ZT1cIkluYWN0aXZpdHlJbnRlcnZhbC5TZWNvbmRzXzMwXCI+MzAge3sgdCgnc2VjLm1lc3NhZ2UnKSB9fTwvb3B0aW9uPlxyXG4gICAgICAgIDxvcHRpb24gOnZhbHVlPVwiSW5hY3Rpdml0eUludGVydmFsLlNlY29uZHNfNDVcIj40NSB7eyB0KCdzZWMubWVzc2FnZScpIH19PC9vcHRpb24+XHJcbiAgICAgICAgPG9wdGlvbiA6dmFsdWU9XCJJbmFjdGl2aXR5SW50ZXJ2YWwuTWluXzFcIj4xIHt7IHQoJ21pbi5tZXNzYWdlJykgfX08L29wdGlvbj5cclxuICAgICAgICA8b3B0aW9uIDp2YWx1ZT1cIkluYWN0aXZpdHlJbnRlcnZhbC5NaW5fMlwiPjIge3sgdCgnMm1pbi5tZXNzYWdlJykgfX08L29wdGlvbj5cclxuICAgICAgICA8b3B0aW9uIDp2YWx1ZT1cIkluYWN0aXZpdHlJbnRlcnZhbC5NaW5fNVwiPjUge3sgdCgnbWlucy5tZXNzYWdlJykgfX08L29wdGlvbj5cclxuICAgICAgICA8b3B0aW9uIDp2YWx1ZT1cIkluYWN0aXZpdHlJbnRlcnZhbC5NaW5fMTBcIj4xMCB7eyB0KCdtaW5zLm1lc3NhZ2UnKSB9fTwvb3B0aW9uPlxyXG4gICAgICAgIDxvcHRpb24gOnZhbHVlPVwiSW5hY3Rpdml0eUludGVydmFsLk1pbl8yMFwiPjIwIHt7IHQoJ21pbnMubWVzc2FnZScpIH19PC9vcHRpb24+XHJcbiAgICAgICAgPG9wdGlvbiA6dmFsdWU9XCJJbmFjdGl2aXR5SW50ZXJ2YWwuTWluXzMwXCI+MzAge3sgdCgnbWlucy5tZXNzYWdlJykgfX08L29wdGlvbj5cclxuICAgICAgPC9zZWxlY3Q+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxwIGNsYXNzPVwiZGVzY3JpcHRpb25cIj57eyB0KCdpbnRlcnZhbEluYWN0aXZpdHkuZGVzY3JpcHRpb24nKSB9fTwvcD5cclxuICA8L2Rpdj5cclxuICA8ZGl2IGNsYXNzPVwic2V0dGluZ3MtaXRlbVwiPlxyXG4gICAgPGxhYmVsIGNsYXNzPVwic2V0dGluZy1oZWFkZXIgZC1pbmxpbmUtYmxvY2tcIj57eyB0KCdleHBvcnRUb0NzdlNldHRpbmcubWVzc2FnZScpIH19PC9sYWJlbD5cclxuICAgIDxwIGNsYXNzPVwiZGVzY3JpcHRpb25cIj57eyB0KCdleHBvcnRUb0NzdlNldHRpbmcuZGVzY3JpcHRpb24nKSB9fTwvcD5cclxuICAgIDxkaXYgY2xhc3M9XCJleHBvcnQtYmxvY2tcIj5cclxuICAgICAgPFZ1ZURhdGVQaWNrZXJcclxuICAgICAgICByYW5nZVxyXG4gICAgICAgIDplbmFibGUtdGltZS1waWNrZXI9XCJmYWxzZVwiXHJcbiAgICAgICAgY2xhc3M9XCJkYXRlLXBpY2tlclwiXHJcbiAgICAgICAgdi1tb2RlbD1cInNlbGVjdGVkRGF0ZVwiXHJcbiAgICAgICAgOnByZXNldC1yYW5nZXM9XCJwcmVzZXRSYW5nZXNcIlxyXG4gICAgICAgIEB1cGRhdGU6bW9kZWwtdmFsdWU9XCJoYW5kbGVEYXRlXCJcclxuICAgICAgPlxyXG4gICAgICAgIDx0ZW1wbGF0ZSAjeWVhcmx5PVwieyBsYWJlbCwgcmFuZ2UsIHByZXNldERhdGVSYW5nZSB9XCI+XHJcbiAgICAgICAgICA8c3BhbiBAY2xpY2s9XCJwcmVzZXREYXRlUmFuZ2UocmFuZ2UpXCI+e3sgbGFiZWwgfX08L3NwYW4+XHJcbiAgICAgICAgPC90ZW1wbGF0ZT5cclxuICAgICAgPC9WdWVEYXRlUGlja2VyPlxyXG4gICAgICA8aW5wdXQgdHlwZT1cImJ1dHRvblwiIDp2YWx1ZT1cInQoJ2V4cG9ydFRvQ3N2Lm1lc3NhZ2UnKVwiIEBjbGljaz1cImV4cG9ydFRvQ3N2KClcIiAvPlxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbiAgPGRpdiBjbGFzcz1cInNldHRpbmdzLWl0ZW1cIj5cclxuICAgIDxsYWJlbCBjbGFzcz1cInNldHRpbmctaGVhZGVyIGQtaW5saW5lLWJsb2NrXCI+e3sgdCgncmVtb3ZlQWxsRGF0YS5tZXNzYWdlJykgfX08L2xhYmVsPlxyXG4gICAgPHAgY2xhc3M9XCJkZXNjcmlwdGlvblwiPnt7IHQoJ3JlbW92ZUFsbERhdGEuZGVzY3JpcHRpb24nKSB9fTwvcD5cclxuICAgIDxpbnB1dCB0eXBlPVwiYnV0dG9uXCIgOnZhbHVlPVwidCgncmVtb3ZlLm1lc3NhZ2UnKVwiIEBjbGljaz1cInJlbW92ZUFsbCgpXCIgLz5cclxuICA8L2Rpdj5cclxuICA8ZGl2IGNsYXNzPVwic2V0dGluZ3MtaXRlbVwiPlxyXG4gICAgPGxhYmVsIGNsYXNzPVwic2V0dGluZy1oZWFkZXIgZC1pbmxpbmUtYmxvY2tcIj57eyB0KCdiYWNrdXBBbmRSZXN0b3JlLm1lc3NhZ2UnKSB9fTwvbGFiZWw+XHJcbiAgICA8cCBjbGFzcz1cImRlc2NyaXB0aW9uXCI+e3sgdCgnYmFja3VwQW5kUmVzdG9yZS5kZXNjcmlwdGlvbicpIH19PC9wPlxyXG4gICAgPGlucHV0IHR5cGU9XCJidXR0b25cIiA6dmFsdWU9XCJ0KCdiYWNrdXAubWVzc2FnZScpXCIgQGNsaWNrPVwiYmFja3VwKClcIiAvPlxyXG4gICAgPGlucHV0XHJcbiAgICAgIHR5cGU9XCJmaWxlXCJcclxuICAgICAgcmVmPVwicmVzdG9yZUZpbGVcIlxyXG4gICAgICBzdHlsZT1cImRpc3BsYXk6IG5vbmVcIlxyXG4gICAgICBAY2hhbmdlPVwicmVzdG9yZUZpbGVVcGxvYWQoKVwiXHJcbiAgICAgIGFjY2VwdD1cImFwcGxpY2F0aW9uL2pzb25cIlxyXG4gICAgLz5cclxuICAgIDxpbnB1dCB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJtbC0xMFwiIDp2YWx1ZT1cInQoJ3Jlc3RvcmUubWVzc2FnZScpXCIgQGNsaWNrPVwicmVzdG9yZSgpXCIgLz5cclxuICA8L2Rpdj5cclxuICA8ZGl2IGNsYXNzPVwic2V0dGluZ3MtaXRlbVwiPlxyXG4gICAgPGxhYmVsIGNsYXNzPVwic2V0dGluZy1oZWFkZXJcIj5cclxuICAgICAgPGlucHV0XHJcbiAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcclxuICAgICAgICBjbGFzcz1cImZpbGxlZC1pblwiXHJcbiAgICAgICAgaWQ9XCJzaG93Q2hhbmdlbG9nXCJcclxuICAgICAgICB2LW1vZGVsPVwic2hvd0NoYW5nZWxvZ1wiXHJcbiAgICAgICAgQGNoYW5nZT1cIm9uQ2hhbmdlKFN0b3JhZ2VQYXJhbXMuU0hPV19DSEFOR0VMT0csICRldmVudC50YXJnZXQpXCJcclxuICAgICAgLz5cclxuICAgICAgPHNwYW4+e3sgdCgnc2hvd0NoYW5nZWxvZy5tZXNzYWdlJykgfX08L3NwYW4+XHJcbiAgICAgIDxwIGNsYXNzPVwiZGVzY3JpcHRpb25cIj5cclxuICAgICAgICB7eyB0KCdzaG93Q2hhbmdlbG9nLmRlc2NyaXB0aW9uJykgfX1cclxuICAgICAgPC9wPlxyXG4gICAgPC9sYWJlbD5cclxuICA8L2Rpdj5cclxuICA8ZGl2IGlkPVwicmVtb3ZlQWxsQ29uZmlybU1vZGFsXCIgY2xhc3M9XCJtb2RhbFwiIHYtaWY9XCJuZWVkVG9Db25maXJtRGVsZXRlQWxsRGF0YVwiPlxyXG4gICAgPGRpdiBjbGFzcz1cIm1vZGFsLWNvbnRlbnRcIj5cclxuICAgICAgPHAgY2xhc3M9XCJ0ZXh0LWNlbnRlclwiPnt7IHQoJ3JlbW92ZUFsbERhdGFDb25maXJtLm1lc3NhZ2UnKSB9fTwvcD5cclxuICAgICAgPGRpdiBjbGFzcz1cInRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgIGNsYXNzPVwiYWxlcnRcIlxyXG4gICAgICAgICAgOnZhbHVlPVwidCgncmVtb3ZlLm1lc3NhZ2UnKVwiXHJcbiAgICAgICAgICBAY2xpY2s9XCJyZW1vdmVBbGxDb25maXJtKClcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPGlucHV0IHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImluZm8gbWwtMTBcIiA6dmFsdWU9XCJ0KCdjYW5jZWwubWVzc2FnZScpXCIgQGNsaWNrPVwiY2FuY2VsKClcIiAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdCBsYW5nPVwidHNcIj5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gIG5hbWU6ICdHZW5lcmFsU2V0dGluZ3MnLFxyXG59O1xyXG48L3NjcmlwdD5cclxuXHJcbjxzY3JpcHQgbGFuZz1cInRzXCIgc2V0dXA+XHJcbmltcG9ydCB7IG9uTW91bnRlZCwgcmVmIH0gZnJvbSAndnVlJztcclxuaW1wb3J0IHsgdXNlSTE4biB9IGZyb20gJ3Z1ZS1pMThuJztcclxuaW1wb3J0IHsgaW5qZWN0U3RvcmFnZSB9IGZyb20gJy4uL3N0b3JhZ2UvaW5qZWN0LXN0b3JhZ2UnO1xyXG5pbXBvcnQgeyB1c2VOb3RpZmljYXRpb24gfSBmcm9tICdAa3l2Zy92dWUzLW5vdGlmaWNhdGlvbic7XHJcbmltcG9ydCB7XHJcbiAgQkxPQ0tfREVGRVJSQUxfREVGQVVMVCxcclxuICBEQVJLX01PREVfREVGQVVMVCxcclxuICBJTlRFUlZBTF9JTkFDVElWSVRZX0RFRkFVTFQsXHJcbiAgU3RvcmFnZVBhcmFtcyxcclxuICBWSUVXX1RJTUVfSU5fQkFER0VfREVGQVVMVCxcclxuICBJbmFjdGl2aXR5SW50ZXJ2YWwsXHJcbiAgU0hPV19DSEFOR0VMT0dfREVGQVVMVCxcclxufSBmcm9tICcuLi9zdG9yYWdlL3N0b3JhZ2UtcGFyYW1zJztcclxuaW1wb3J0IHsgcmFuZ2VzLCBUaGlzV2Vla1JhbmdlLCB0b2RheUxvY2FsRGF0ZSB9IGZyb20gJy4uL3V0aWxzL2RhdGUnO1xyXG5pbXBvcnQgeyB1c2VJbXBvcnRUb0NzdiB9IGZyb20gJy4uL2Z1bmN0aW9ucy91c2VJbXBvcnRUb0Nzdic7XHJcbmltcG9ydCB7IEZpbGVUeXBlLCB1c2VGaWxlIH0gZnJvbSAnLi4vZnVuY3Rpb25zL3VzZUZpbGUnO1xyXG5pbXBvcnQgeyB1c2VSZW1vdmVBbGxEYXRhIH0gZnJvbSAnLi4vZnVuY3Rpb25zL3VzZVJlbW92ZUFsbERhdGEnO1xyXG5pbXBvcnQgeyBpbmplY3RUYWJzUmVwb3NpdG9yeSB9IGZyb20gJy4uL3JlcG9zaXRvcnkvaW5qZWN0LXRhYnMtcmVwb3NpdG9yeSc7XHJcbmltcG9ydCB7IHVzZVJlc3RvcmVEYXRhIH0gZnJvbSAnLi4vZnVuY3Rpb25zL3VzZVJlc3RvcmVEYXRhJztcclxuaW1wb3J0IHsgYXBwbHlEYXJrTW9kZSB9IGZyb20gJy4uL3V0aWxzL2RhcmstbW9kZSc7XHJcblxyXG5jb25zdCB7IHQgfSA9IHVzZUkxOG4oKTtcclxuXHJcbmNvbnN0IHNldHRpbmdzU3RvcmFnZSA9IGluamVjdFN0b3JhZ2UoKTtcclxuY29uc3Qgbm90aWZpY2F0aW9uID0gdXNlTm90aWZpY2F0aW9uKCk7XHJcblxyXG5jb25zdCB2aWV3VGltZUluQmFkZ2UgPSByZWY8Ym9vbGVhbj4oKTtcclxuY29uc3QgaW50ZXJ2YWxJbmFjdGl2aXR5ID0gcmVmPEluYWN0aXZpdHlJbnRlcnZhbD4oKTtcclxuY29uc3QgYWxsb3dEZWZlcnJpbmdCbG9jayA9IHJlZjxib29sZWFuPigpO1xyXG5jb25zdCBkYXJrTW9kZSA9IHJlZjxib29sZWFuPigpO1xyXG5jb25zdCBzZWxlY3RlZERhdGUgPSByZWY8RGF0ZVtdPigpO1xyXG5cclxuY29uc3QgcHJlc2V0UmFuZ2VzID0gcmFuZ2VzKCk7XHJcblxyXG5jb25zdCBuZWVkVG9Db25maXJtRGVsZXRlQWxsRGF0YSA9IHJlZjxib29sZWFuPigpO1xyXG5jb25zdCBzaG93Q2hhbmdlbG9nID0gcmVmPGJvb2xlYW4+KCk7XHJcblxyXG5jb25zdCByZXN0b3JlRmlsZSA9IHJlZjxhbnk+KCk7XHJcblxyXG5vbk1vdW50ZWQoYXN5bmMgKCkgPT4ge1xyXG4gIHZpZXdUaW1lSW5CYWRnZS52YWx1ZSA9IGF3YWl0IHNldHRpbmdzU3RvcmFnZS5nZXRWYWx1ZShcclxuICAgIFN0b3JhZ2VQYXJhbXMuVklFV19USU1FX0lOX0JBREdFLFxyXG4gICAgVklFV19USU1FX0lOX0JBREdFX0RFRkFVTFQsXHJcbiAgKTtcclxuICBpbnRlcnZhbEluYWN0aXZpdHkudmFsdWUgPSBhd2FpdCBzZXR0aW5nc1N0b3JhZ2UuZ2V0VmFsdWUoXHJcbiAgICBTdG9yYWdlUGFyYW1zLklOVEVSVkFMX0lOQUNUSVZJVFksXHJcbiAgICBJTlRFUlZBTF9JTkFDVElWSVRZX0RFRkFVTFQsXHJcbiAgKTtcclxuICBkYXJrTW9kZS52YWx1ZSA9IGF3YWl0IHNldHRpbmdzU3RvcmFnZS5nZXRWYWx1ZShTdG9yYWdlUGFyYW1zLkRBUktfTU9ERSwgREFSS19NT0RFX0RFRkFVTFQpO1xyXG4gIGFsbG93RGVmZXJyaW5nQmxvY2sudmFsdWUgPSBhd2FpdCBzZXR0aW5nc1N0b3JhZ2UuZ2V0VmFsdWUoXHJcbiAgICBTdG9yYWdlUGFyYW1zLkJMT0NLX0RFRkVSUkFMLFxyXG4gICAgQkxPQ0tfREVGRVJSQUxfREVGQVVMVCxcclxuICApO1xyXG4gIHNlbGVjdGVkRGF0ZS52YWx1ZSA9IFRoaXNXZWVrUmFuZ2U7XHJcbiAgc2hvd0NoYW5nZWxvZy52YWx1ZSA9IGF3YWl0IHNldHRpbmdzU3RvcmFnZS5nZXRWYWx1ZShcclxuICAgIFN0b3JhZ2VQYXJhbXMuU0hPV19DSEFOR0VMT0csXHJcbiAgICBTSE9XX0NIQU5HRUxPR19ERUZBVUxULFxyXG4gICk7XHJcbn0pO1xyXG5cclxuYXN5bmMgZnVuY3Rpb24gb25DaGFuZ2Uoc3RvcmFnZVBhcmFtOiBTdG9yYWdlUGFyYW1zLCB0YXJnZXQ6IGFueSkge1xyXG4gIGlmICh0YXJnZXQgIT0gbnVsbClcclxuICAgIGF3YWl0IHNhdmUoXHJcbiAgICAgIHN0b3JhZ2VQYXJhbSxcclxuICAgICAgc3RvcmFnZVBhcmFtID09IFN0b3JhZ2VQYXJhbXMuSU5URVJWQUxfSU5BQ1RJVklUWSA/IE51bWJlcih0YXJnZXQudmFsdWUpIDogdGFyZ2V0LmNoZWNrZWQsXHJcbiAgICApO1xyXG5cclxuICBpZiAoc3RvcmFnZVBhcmFtID09IFN0b3JhZ2VQYXJhbXMuREFSS19NT0RFKSBhcHBseURhcmtNb2RlKHRhcmdldC5jaGVja2VkKTtcclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gc2F2ZShzdG9yYWdlUGFyYW06IFN0b3JhZ2VQYXJhbXMsIHZhbHVlOiBhbnkpIHtcclxuICBpZiAodmFsdWUgIT0gdW5kZWZpbmVkKSBhd2FpdCBzZXR0aW5nc1N0b3JhZ2Uuc2F2ZVZhbHVlKHN0b3JhZ2VQYXJhbSwgdmFsdWUpO1xyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiBoYW5kbGVEYXRlKG1vZGVsRGF0YTogRGF0ZVtdKSB7XHJcbiAgc2VsZWN0ZWREYXRlLnZhbHVlID0gbW9kZWxEYXRhO1xyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiBleHBvcnRUb0NzdigpIHtcclxuICBjb25zdCBkYXRlRnJvbSA9IHNlbGVjdGVkRGF0ZS52YWx1ZT8uWzBdIGFzIERhdGU7XHJcbiAgY29uc3QgZGF0ZVRvID0gc2VsZWN0ZWREYXRlLnZhbHVlPy5bMV0gYXMgRGF0ZTtcclxuICBpZiAoZGF0ZUZyb20gPT0gdW5kZWZpbmVkIHx8IGRhdGVUbyA9PSB1bmRlZmluZWQpIHtcclxuICAgIG5vdGlmaWNhdGlvbi5ub3RpZnkoe1xyXG4gICAgICB0aXRsZTogJ05vIHRpbWUgcGVyaW9kIHNlbGVjdGVkJyxcclxuICAgICAgdHlwZTogJ3dhcm4nLFxyXG4gICAgfSk7XHJcbiAgfSBlbHNlIHtcclxuICAgIGNvbnN0IGNzdiA9IGF3YWl0IHVzZUltcG9ydFRvQ3N2KGRhdGVGcm9tLCBkYXRlVG8pO1xyXG4gICAgdXNlRmlsZShcclxuICAgICAgY3N2LFxyXG4gICAgICBGaWxlVHlwZS5DU1YsXHJcbiAgICAgIGB3ZWJzaXRlc18ke2RhdGVGcm9tLnRvTG9jYWxlRGF0ZVN0cmluZygpfS0ke2RhdGVUby50b0xvY2FsZURhdGVTdHJpbmcoKX0uY3N2YCxcclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiByZW1vdmVBbGwoKSB7XHJcbiAgbmVlZFRvQ29uZmlybURlbGV0ZUFsbERhdGEudmFsdWUgPSB0cnVlO1xyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiByZW1vdmVBbGxDb25maXJtKCkge1xyXG4gIGF3YWl0IHVzZVJlbW92ZUFsbERhdGEoKTtcclxuICBuZWVkVG9Db25maXJtRGVsZXRlQWxsRGF0YS52YWx1ZSA9IGZhbHNlO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjYW5jZWwoKSB7XHJcbiAgbmVlZFRvQ29uZmlybURlbGV0ZUFsbERhdGEudmFsdWUgPSBmYWxzZTtcclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gYmFja3VwKCkge1xyXG4gIGNvbnN0IHJlcG8gPSBhd2FpdCBpbmplY3RUYWJzUmVwb3NpdG9yeSgpO1xyXG4gIGNvbnN0IHRhYnMgPSByZXBvLmdldFRhYnMoKTtcclxuICBjb25zdCBqc29uID0gSlNPTi5zdHJpbmdpZnkodGFicyk7XHJcbiAgdXNlRmlsZShqc29uLCBGaWxlVHlwZS5KU09OLCBgYmFja3VwLSR7dG9kYXlMb2NhbERhdGUoKX0uanNvbmApO1xyXG59XHJcblxyXG5mdW5jdGlvbiByZXN0b3JlKCkge1xyXG4gIHJlc3RvcmVGaWxlLnZhbHVlLmNsaWNrKCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlc3RvcmVGaWxlVXBsb2FkKCkge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBmaWxlID0gcmVzdG9yZUZpbGUudmFsdWUuZmlsZXNbMF07XHJcbiAgICBpZiAoZmlsZSAhPSBudWxsICYmIGZpbGUudHlwZSA9PT0gRmlsZVR5cGUuSlNPTikge1xyXG4gICAgICB2YXIgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcclxuICAgICAgcmVhZGVyLnJlYWRBc1RleHQoZmlsZSwgJ1VURi04Jyk7XHJcbiAgICAgIHJlYWRlci5vbmxvYWQgPSBhc3luYyByZWFkZXJFdmVudCA9PiB7XHJcbiAgICAgICAgaWYgKHJlYWRlckV2ZW50ICE9IG51bGwpIHtcclxuICAgICAgICAgIGxldCBjb250ZW50ID0gcmVhZGVyRXZlbnQudGFyZ2V0Py5yZXN1bHQ7XHJcbiAgICAgICAgICBpZiAoY29udGVudCAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgIGF3YWl0IHVzZVJlc3RvcmVEYXRhKGNvbnRlbnQgYXMgc3RyaW5nKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH07XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBub3RpZmljYXRpb24ubm90aWZ5KHtcclxuICAgICAgICB0aXRsZTogJ1dyb25nIHJlc3RvcmUgZmlsZSBmb3JtYXQnLFxyXG4gICAgICAgIHR5cGU6ICd3YXJuJyxcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfSBjYXRjaCB7XHJcbiAgICBub3RpZmljYXRpb24ubm90aWZ5KHtcclxuICAgICAgdGl0bGU6ICdXcm9uZyByZXN0b3JlIGZpbGUgZm9ybWF0JyxcclxuICAgICAgdHlwZTogJ3dhcm4nLFxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlIHNjb3BlZD5cclxuLmV4cG9ydC1ibG9jayB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xyXG59XHJcblxyXG4uZXhwb3J0LWJsb2NrIC5kYXRlLXBpY2tlciB7XHJcbiAgd2lkdGg6IDI1MHB4O1xyXG4gIG1hcmdpbi1yaWdodDogMTVweDtcclxufVxyXG48L3N0eWxlPlxyXG4iLCJleHBvcnQgZGVmYXVsdCBcIl9fVklURV9BU1NFVF9fMjM0NThiYTRfX1wiIiwiPHRlbXBsYXRlPlxyXG4gIDxkaXYgY2xhc3M9XCJtb2RhbFwiIHYtaWY9XCJzaG93UHJvbW9cIj5cclxuICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1jb250ZW50IHByb21vXCI+XHJcbiAgICAgIDxwIGNsYXNzPVwidGl0bGVcIj57eyB0KCdjbGVhbllvdXR1YmVfcHJvbW8ubWVzc2FnZScpIH19PC9wPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiaW1nLWJsb2NrXCI+XHJcbiAgICAgICAgPGltZyBzcmM9XCIuLi9hc3NldHMvY2xlYXIteW91dHViZS1wcm9tby5wbmdcIiAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPHAgY2xhc3M9XCJ0ZXh0XCI+XHJcbiAgICAgICAge3sgdCgnY2xlYW5Zb3V0dWJlX2Rlc2NyaXB0aW9uLm1lc3NhZ2UnKSB9fSB7eyB0KCdjbGVhbllvdXR1YmVfZGVzY3JpcHRpb24yLm1lc3NhZ2UnKSB9fVxyXG4gICAgICA8L3A+XHJcblxyXG4gICAgICA8cCBjbGFzcz1cInRleHQgZmVhdHVyZXNcIj57eyB0KCdjbGVhbllvdXR1YmVfZmVhdHVyZXMubWVzc2FnZScpIH19PC9wPlxyXG4gICAgICA8dWw+XHJcbiAgICAgICAgPGxpPuKchSB7eyB0KCdjbGVhbllvdXR1YmVfZmVhdHVyZXMxLm1lc3NhZ2UnKSB9fTwvbGk+XHJcbiAgICAgICAgPGxpPuKchSB7eyB0KCdjbGVhbllvdXR1YmVfZmVhdHVyZXMyLm1lc3NhZ2UnKSB9fTwvbGk+XHJcbiAgICAgICAgPGxpPuKchSB7eyB0KCdjbGVhbllvdXR1YmVfZmVhdHVyZXMzLm1lc3NhZ2UnKSB9fTwvbGk+XHJcbiAgICAgICAgPGxpPuKchSB7eyB0KCdjbGVhbllvdXR1YmVfZmVhdHVyZXM0Lm1lc3NhZ2UnKSB9fTwvbGk+XHJcbiAgICAgIDwvdWw+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJ0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgIDxpbnB1dCB0eXBlPVwiYnV0dG9uXCIgOnZhbHVlPVwidCgndHJ5Lm1lc3NhZ2UnKVwiIEBjbGljaz1cIm9wZW5VcmwoKVwiIC8+XHJcbiAgICAgICAgPGlucHV0IHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImluZm8gbWwtMTBcIiA6dmFsdWU9XCJ0KCdjbG9zZS5tZXNzYWdlJylcIiBAY2xpY2s9XCJjbG9zZSgpXCIgLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQgbGFuZz1cInRzXCIgc2V0dXA+XHJcbmltcG9ydCB7IHVzZUkxOG4gfSBmcm9tICd2dWUtaTE4bic7XHJcbmltcG9ydCB7IG9uTW91bnRlZCwgcmVmIH0gZnJvbSAndnVlJztcclxuaW1wb3J0IHsgaW5qZWN0U3RvcmFnZSB9IGZyb20gJy4uL3N0b3JhZ2UvaW5qZWN0LXN0b3JhZ2UnO1xyXG5pbXBvcnQgeyBTdG9yYWdlUGFyYW1zIH0gZnJvbSAnLi4vc3RvcmFnZS9zdG9yYWdlLXBhcmFtcyc7XHJcbmltcG9ydCB7IGFkZERheXMsIHN0YXJ0T2ZUb2RheSB9IGZyb20gJ2RhdGUtZm5zJztcclxuaW1wb3J0IHsgYWRkSG91cnMgfSBmcm9tICdkYXRlLWZucy9lc20nO1xyXG5pbXBvcnQgeyBDSFJPTUVfU1RPUkVfQ0xFQVJfWU9VVFVCRV9VUkwgfSBmcm9tICcuLi91dGlscy9jaHJvbWUtdXJsJztcclxuXHJcbmNvbnN0IHsgdCB9ID0gdXNlSTE4bigpO1xyXG5jb25zdCBzZXR0aW5nc1N0b3JhZ2UgPSBpbmplY3RTdG9yYWdlKCk7XHJcblxyXG5jb25zdCBzaG93UHJvbW8gPSByZWY8Ym9vbGVhbj4oKTtcclxuXHJcbmNvbnN0IFBST01QVF9BVF9USU1FX09GX0RBWSA9IDEyO1xyXG5jb25zdCBBRERfREFZU19JTklUSUFMID0gMjtcclxuY29uc3QgQUREX0RBWVNfQ09VTlQgPSA1O1xyXG5cclxub25Nb3VudGVkKGFzeW5jICgpID0+IHtcclxuICBjb25zdCBwcm9tb0RhdGUgPSBhd2FpdCBzZXR0aW5nc1N0b3JhZ2UuZ2V0VmFsdWUoU3RvcmFnZVBhcmFtcy5QUk9NT19DTEVBUl9ZT1VUVUJFX0RBVEUpO1xyXG5cclxuICBpZiAocHJvbW9EYXRlID09IHVuZGVmaW5lZCkge1xyXG4gICAgbGV0IG5leHRUaW1lID0gYXdhaXQgc2V0dGluZ3NTdG9yYWdlLmdldFZhbHVlKFN0b3JhZ2VQYXJhbXMuUFJPTU9fQ0xFQVJfWU9VVFVCRV9QUk9NUFRfQVQpO1xyXG4gICAgaWYgKG5leHRUaW1lID09IHVuZGVmaW5lZCkge1xyXG4gICAgICBhd2FpdCBzZXR0aW5nc1N0b3JhZ2Uuc2F2ZVZhbHVlKFxyXG4gICAgICAgIFN0b3JhZ2VQYXJhbXMuUFJPTU9fQ0xFQVJfWU9VVFVCRV9QUk9NUFRfQVQsXHJcbiAgICAgICAgYWRkRGF5cyhhZGRIb3VycyhzdGFydE9mVG9kYXkoKSwgUFJPTVBUX0FUX1RJTUVfT0ZfREFZKSwgQUREX0RBWVNfSU5JVElBTCkudG9TdHJpbmcoKSxcclxuICAgICAgKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIG5leHRUaW1lID0gbmV3IERhdGUobmV4dFRpbWUpO1xyXG4gICAgICBpZiAobmV4dFRpbWUgPCBuZXcgRGF0ZSgpKSBzaG93UHJvbW8udmFsdWUgPSB0cnVlO1xyXG4gICAgfVxyXG4gIH1cclxufSk7XHJcblxyXG5hc3luYyBmdW5jdGlvbiBjbG9zZSgpIHtcclxuICBzaG93UHJvbW8udmFsdWUgPSBmYWxzZTtcclxuICBhd2FpdCBzZXR0aW5nc1N0b3JhZ2Uuc2F2ZVZhbHVlKFxyXG4gICAgU3RvcmFnZVBhcmFtcy5QUk9NT19DTEVBUl9ZT1VUVUJFX1BST01QVF9BVCxcclxuICAgIGFkZERheXMoYWRkSG91cnMoc3RhcnRPZlRvZGF5KCksIFBST01QVF9BVF9USU1FX09GX0RBWSksIEFERF9EQVlTX0NPVU5UKS50b1N0cmluZygpLFxyXG4gICk7XHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIG9wZW5VcmwoKSB7XHJcbiAgd2luZG93Lm9wZW4oQ0hST01FX1NUT1JFX0NMRUFSX1lPVVRVQkVfVVJMLCAnX2JsYW5rJyk7XHJcbiAgYXdhaXQgc2V0dGluZ3NTdG9yYWdlLnNhdmVWYWx1ZShTdG9yYWdlUGFyYW1zLlBST01PX0NMRUFSX1lPVVRVQkVfREFURSwgbmV3IERhdGUoKS50b1N0cmluZygpKTtcclxufVxyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZSBzY29wZWQ+XHJcbi50aXRsZSB7XHJcbiAgZm9udC1zaXplOiAyMnB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIG1hcmdpbjogMDtcclxufVxyXG51bCxcclxuLnRleHQge1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG59XHJcbi50ZXh0IC5mZWF0dXJlcyB7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxufVxyXG4uaW1nLWJsb2NrIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuaW1nIHtcclxuICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG59XHJcbjwvc3R5bGU+XHJcbiIsImV4cG9ydCBkZWZhdWx0IFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFCQUFBQUFRQ0FZQUFBQWY4LzloQUFBQUJITkNTVlFJQ0FnSWZBaGtpQUFBQUFsd1NGbHpBQUFBaWdBQUFJb0JsQ0pSMndBQUFCbDBSVmgwVTI5bWRIZGhjbVVBZDNkM0xtbHVhM05qWVhCbExtOXlaNXZ1UEJvQUFBRkJTVVJCVkRpTmpaR3hTMEpSRkllL2M2OE4yZGhnV0VGUk9qaTVsSVFKYWhoQjlPZTZhUGdraUFKM2wwb1NzNjJoVUpmMzNqMHRLdko2enp6ajRYemY1ZjUrTXFtZjN5UHNpdG02M1drL2ZyTEJUQnZsckRxL2lmSmxFUGFBb2pyZm16YksyUTFoRHlnQ0dXTkN1UkhoRmNpcjg3dXorc1YrRWp5NUttWFUrVzBnRHd5dE0zY0NNS3VXRGpTbG5pcW53SXRSVzB0M25zWlJHTFFERklDaERVMTF1L3Y4TG91RGRaSWtHRUJXWDRtVE9IRkJFdnhIRUpVSURCU0M1WjhqY0t4Z1JmS2d5dkY4OVdGRFU0bkNBS2s0Z2JQNEtNRnlvUVJxeEkrN05kSEZTbUE1WUN6SUVPSElTZWpGVld3UzRFVmdsMkpkUmVBTnlNVkpaQTI4REd4MmZYYW9vWGdLSjBRcWx2L2d4U1JKWkJONG5jU0F0b0NDd3NCWWphMXFNZWxXYnlSV2F3cURlU1pOQTN3RGZXdTFtbTcxUmtud3FzUmFyUUo5NE9jWGdyUGplN1E5TW9RQUFBQUFTVVZPUks1Q1lJST1cIiIsImV4cG9ydCBmdW5jdGlvbiBnZXRGYXZpY29uKHVybDogc3RyaW5nKSB7XHJcbiAgcmV0dXJuIGBodHRwczovL3d3dy5nb29nbGUuY29tL3MyL2Zhdmljb25zP2RvbWFpbj0ke3VybH0mc3o9NjRgO1xyXG59XHJcbiIsIjx0ZW1wbGF0ZT5cclxuICA8ZGl2PlxyXG4gICAgPHAgY2xhc3M9XCJ0aXRsZSBtdC0wXCI+e3sgdCgnd2hpdGVMaXN0Lm1lc3NhZ2UnKSB9fTwvcD5cclxuICAgIDx1bCByZWFkb25seSBjbGFzcz1cInVybC1saXN0XCI+XHJcbiAgICAgIDxsaSB2LWZvcj1cIih1cmwsIGkpIG9mIHdoaXRlTGlzdFwiIDprZXk9XCJpXCI+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxpbWcgc3JjPVwiLi4vYXNzZXRzL2ljb25zL2RlbGV0ZS5wbmdcIiBoZWlnaHQ9XCIxNlwiIEBjbGljaz1cImRlbGV0ZUZyb21XaGl0ZUxpc3QodXJsKVwiIC8+XHJcbiAgICAgICAgICA8RmF2aWNvbiA6dHlwZT1cIlR5cGVPZlVybC5XZWJTaXRlXCIgOmZhdmljb249XCJnZXRGYXZpY29uKHVybClcIiAvPlxyXG4gICAgICAgICAgPHNwYW4+e3sgdXJsIH19PC9zcGFuPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2xpPlxyXG4gICAgPC91bD5cclxuICAgIDxkaXYgY2xhc3M9XCJtdC0yMFwiPlxyXG4gICAgICA8aW5wdXRcclxuICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgY2xhc3M9XCJkLWlubGluZS1ibG9jayBjdXN0b20td2lkdGhcIlxyXG4gICAgICAgIDpwbGFjZWhvbGRlcj1cInQoJ2VudGVyV2Vic2l0ZS5tZXNzYWdlJylcIlxyXG4gICAgICAgIHYtbW9kZWw9XCJuZXdXZWJzaXRlRm9yV2hpdGVMaXN0XCJcclxuICAgICAgLz5cclxuICAgICAgPGlucHV0XHJcbiAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgY2xhc3M9XCJkLWlubGluZS1ibG9jayBzbWFsbC1idG4gbWwtMTBcIlxyXG4gICAgICAgIDp2YWx1ZT1cInQoJ2FkZFdlYnNpdGUubWVzc2FnZScpXCJcclxuICAgICAgICA6ZGlzYWJsZWQ9XCJuZXdXZWJzaXRlRm9yV2hpdGVMaXN0ID09IG51bGwgfHwgbmV3V2Vic2l0ZUZvcldoaXRlTGlzdCA9PSAnJ1wiXHJcbiAgICAgICAgQGNsaWNrPVwiYWRkVG9XaGl0ZUxpc3QoKVwiXHJcbiAgICAgIC8+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQgbGFuZz1cInRzXCI+XHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICBuYW1lOiAnV2hpdGVMaXN0JyxcclxufTtcclxuPC9zY3JpcHQ+XHJcblxyXG48c2NyaXB0IGxhbmc9XCJ0c1wiIHNldHVwPlxyXG5pbXBvcnQgRmF2aWNvbiBmcm9tICcuL0Zhdmljb24udnVlJztcclxuaW1wb3J0IHsgZ2V0RmF2aWNvbiB9IGZyb20gJy4uL3V0aWxzL2Zhdmljb24nO1xyXG5pbXBvcnQgeyBvbk1vdW50ZWQsIHJlZiB9IGZyb20gJ3Z1ZSc7XHJcbmltcG9ydCB7IHVzZUkxOG4gfSBmcm9tICd2dWUtaTE4bic7XHJcbmltcG9ydCB7IFR5cGVPZlVybCB9IGZyb20gJy4uL3V0aWxzL2VudW1zJztcclxuaW1wb3J0IHsgdXNlTm90aWZpY2F0aW9uIH0gZnJvbSAnQGt5dmcvdnVlMy1ub3RpZmljYXRpb24nO1xyXG5pbXBvcnQgeyBpbmplY3RTdG9yYWdlIH0gZnJvbSAnLi4vc3RvcmFnZS9pbmplY3Qtc3RvcmFnZSc7XHJcbmltcG9ydCB7IFN0b3JhZ2VQYXJhbXMgfSBmcm9tICcuLi9zdG9yYWdlL3N0b3JhZ2UtcGFyYW1zJztcclxuaW1wb3J0IHsgaXNEb21haW5FcXVhbHMgfSBmcm9tICcuLi91dGlscy9jb21tb24nO1xyXG5pbXBvcnQgeyBleHRyYWN0SG9zdG5hbWUgfSBmcm9tICcuLi91dGlscy9leHRyYWN0LWhvc3RuYW1lJztcclxuXHJcbmNvbnN0IHsgdCB9ID0gdXNlSTE4bigpO1xyXG5cclxuY29uc3Qgbm90aWZpY2F0aW9uID0gdXNlTm90aWZpY2F0aW9uKCk7XHJcblxyXG5jb25zdCBzZXR0aW5nc1N0b3JhZ2UgPSBpbmplY3RTdG9yYWdlKCk7XHJcblxyXG5jb25zdCB3aGl0ZUxpc3QgPSByZWY8c3RyaW5nW10+KCk7XHJcbmNvbnN0IG5ld1dlYnNpdGVGb3JXaGl0ZUxpc3QgPSByZWY8c3RyaW5nPigpO1xyXG5cclxub25Nb3VudGVkKGFzeW5jICgpID0+IHtcclxuICB3aGl0ZUxpc3QudmFsdWUgPSBPYmplY3QudmFsdWVzKGF3YWl0IHNldHRpbmdzU3RvcmFnZS5nZXRWYWx1ZShTdG9yYWdlUGFyYW1zLkJMQUNLX0xJU1QsIFtdKSk7XHJcbn0pO1xyXG5cclxuZnVuY3Rpb24gYWRkVG9XaGl0ZUxpc3QoKSB7XHJcbiAgY29uc3QgZXhpc3RpbmdJdGVtID0gd2hpdGVMaXN0LnZhbHVlPy5maW5kKHggPT5cclxuICAgIGlzRG9tYWluRXF1YWxzKGV4dHJhY3RIb3N0bmFtZSh4KSwgZXh0cmFjdEhvc3RuYW1lKG5ld1dlYnNpdGVGb3JXaGl0ZUxpc3QudmFsdWUhKSksXHJcbiAgKTtcclxuICBpZiAoZXhpc3RpbmdJdGVtICE9PSB1bmRlZmluZWQpIHtcclxuICAgIG5vdGlmaWNhdGlvbi5ub3RpZnkoe1xyXG4gICAgICB0aXRsZTogJ1lvdSBoYXZlIGFscmVhZHkgYWRkZWQgdGhpcyBzaXRlJyxcclxuICAgICAgdHlwZTogJ2Vycm9yJyxcclxuICAgIH0pO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBjb25zdCBuZXdXZWJzaXRlID0gZXh0cmFjdEhvc3RuYW1lKG5ld1dlYnNpdGVGb3JXaGl0ZUxpc3QudmFsdWUhKTtcclxuICAgIHdoaXRlTGlzdC52YWx1ZT8ucHVzaChuZXdXZWJzaXRlKTtcclxuICAgIHNhdmUod2hpdGVMaXN0LnZhbHVlKTtcclxuICAgIG5ld1dlYnNpdGVGb3JXaGl0ZUxpc3QudmFsdWUgPSAnJztcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGRlbGV0ZUZyb21XaGl0ZUxpc3QodXJsOiBzdHJpbmcpIHtcclxuICB3aGl0ZUxpc3QudmFsdWUgPSB3aGl0ZUxpc3QudmFsdWUhLmZpbHRlcih4ID0+IHggIT0gdXJsKTtcclxuICBzYXZlKHdoaXRlTGlzdC52YWx1ZSk7XHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIHNhdmUodmFsdWU6IGFueSkge1xyXG4gIGlmICh2YWx1ZSAhPSB1bmRlZmluZWQpIGF3YWl0IHNldHRpbmdzU3RvcmFnZS5zYXZlVmFsdWUoU3RvcmFnZVBhcmFtcy5CTEFDS19MSVNULCB2YWx1ZSk7XHJcbn1cclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGUgc2NvcGVkPlxyXG4uYWJvdXQgLmFib3V0LWxhYmVsIHtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxuICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuLmN1c3RvbS13aWR0aCB7XHJcbiAgd2lkdGg6IDUzOHB4O1xyXG59XHJcbjwvc3R5bGU+XHJcbiIsImV4cG9ydCBkZWZhdWx0IFwiX19WSVRFX0FTU0VUX184MWE0YWI1MV9fXCIiLCJpbXBvcnQgeyBjb252ZXJ0SEhNTVRvU2Vjb25kcyB9IGZyb20gJy4uL3V0aWxzL2NvbnZlcnRlcic7XHJcblxyXG5leHBvcnQgY2xhc3MgUmVzdHJpY3Rpb24ge1xyXG4gIGRvbWFpbjogc3RyaW5nO1xyXG4gIHRpbWU6IG51bWJlcjtcclxuXHJcbiAgY29uc3RydWN0b3IoZG9tYWluOiBzdHJpbmcsIGhvdXJzOiBudW1iZXIsIG1pbnV0ZXM6IG51bWJlcikge1xyXG4gICAgdGhpcy5kb21haW4gPSBkb21haW47XHJcbiAgICB0aGlzLnRpbWUgPSBjb252ZXJ0SEhNTVRvU2Vjb25kcyhob3VycywgbWludXRlcyk7XHJcbiAgfVxyXG59XHJcbiIsIjx0ZW1wbGF0ZT5cclxuICA8ZGl2IGNsYXNzPVwibGltaXRzLXRpbWUtYmxvY2sgbWItMjBcIj5cclxuICAgIDxpbnB1dFxyXG4gICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgIDpkaXNhYmxlZD1cImlzRWRpdFwiXHJcbiAgICAgIGNsYXNzPVwiZC1pbmxpbmUtYmxvY2tcIlxyXG4gICAgICA6cGxhY2Vob2xkZXI9XCJ0KCdlbnRlcldlYnNpdGUubWVzc2FnZScpXCJcclxuICAgICAgdi1tb2RlbD1cIm5ld1dlYnNpdGVGb3JMaXN0XCJcclxuICAgIC8+XHJcbiAgICA8VnVlRGF0ZVBpY2tlciB2LW1vZGVsPVwidGltZVwiIHRpbWUtcGlja2VyIGNsYXNzPVwiZGF0ZS1waWNrZXIgaGVpZ2h0XCIgLz5cclxuICAgIDxpbnB1dFxyXG4gICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgY2xhc3M9XCJkLWlubGluZS1ibG9jayBzbWFsbC1idG5cIlxyXG4gICAgICA6dmFsdWU9XCIhaXNFZGl0ID8gdCgnYWRkV2Vic2l0ZS5tZXNzYWdlJykgOiB0KCdzYXZlLm1lc3NhZ2UnKVwiXHJcbiAgICAgIDpkaXNhYmxlZD1cImlzRGlzYWJsZWRTYXZpbmdcIlxyXG4gICAgICBAY2xpY2s9XCJpc0VkaXQgPyBlZGl0SXRlbSgpIDogYWRkVG9MaXN0KClcIlxyXG4gICAgLz5cclxuICA8L2Rpdj5cclxuICA8ZGl2IGNsYXNzPVwibXQtMTBcIiB2LWlmPVwic2hvd0NvbXBsZXRlbHlCbG9ja1ZhbHVlXCI+XHJcbiAgICA8bGFiZWwgY2xhc3M9XCJibG9jay1jaGVja2JveFwiPlxyXG4gICAgICA8aW5wdXRcclxuICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxyXG4gICAgICAgIGNsYXNzPVwiZmlsbGVkLWluXCJcclxuICAgICAgICBpZD1cInZpZXdUaW1lSW5CYWRnZVwiXHJcbiAgICAgICAgdi1tb2RlbD1cImlzQ2hlY2tlZENvbXBsZXRlbHlCbG9ja2VkXCJcclxuICAgICAgICBAY2hhbmdlPVwiY29tcGxldGVseUJsb2NrXCJcclxuICAgICAgLz5cclxuICAgICAgPHNwYW4+e3sgdCgnY29tcGxldGVseUJsb2NrZWQuZGVzY3JpcHRpb24nKSB9fTwvc3Bhbj5cclxuICAgIDwvbGFiZWw+XHJcbiAgPC9kaXY+XHJcbiAgPHVsIHJlYWRvbmx5IGNsYXNzPVwidXJsLWxpc3RcIj5cclxuICAgIDxsaSB2LWZvcj1cIihsaW1pdCwgaSkgb2YgbGlzdFwiIDprZXk9XCJpXCI+XHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPGltZyBzcmM9XCIuLi9hc3NldHMvaWNvbnMvZGVsZXRlLnBuZ1wiIGhlaWdodD1cIjE2XCIgQGNsaWNrPVwiZGVsZXRlRnJvbUxpc3QobGltaXQuZG9tYWluKVwiIC8+XHJcbiAgICAgICAgPGltZ1xyXG4gICAgICAgICAgc3JjPVwiLi4vYXNzZXRzL2ljb25zL2VkaXQuc3ZnXCJcclxuICAgICAgICAgIGhlaWdodD1cIjE2XCJcclxuICAgICAgICAgIEBjbGljaz1cImVkaXRJdGVtRnJvbUxpc3QobGltaXQuZG9tYWluLCBsaW1pdC50aW1lKVwiXHJcbiAgICAgICAgLz5cclxuICAgICAgICA8RmF2aWNvbiA6dHlwZT1cIlR5cGVPZlVybC5XZWJTaXRlXCIgOmZhdmljb249XCJnZXRGYXZpY29uKGxpbWl0LmRvbWFpbilcIiAvPlxyXG4gICAgICAgIDxzcGFuPnt7IGxpbWl0LmRvbWFpbiB9fTwvc3Bhbj5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPHAgY2xhc3M9XCJ0aW1lLXZhbHVlIGQtaW5saW5lLWJsb2NrXCIgdi1pZj1cIiFjb21wbGV0ZWx5QmxvY2tlZChsaW1pdC50aW1lKVwiPlxyXG4gICAgICAgICAgICB7eyB0KCdsaW1pdC5tZXNzYWdlJykgfX0gOiB7eyBnZXRUaW1lKGxpbWl0LnRpbWUpIH19XHJcbiAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICA8cCBjbGFzcz1cImJsb2NrZWRcIiB2LWlmPVwiY29tcGxldGVseUJsb2NrZWQobGltaXQudGltZSlcIj5cclxuICAgICAgICAgICAge3sgdCgnY29tcGxldGVseUJsb2NrZWQubWVzc2FnZScpIH19XHJcbiAgICAgICAgICA8L3A+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9saT5cclxuICA8L3VsPlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdCBsYW5nPVwidHNcIj5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gIG5hbWU6ICdMaXN0V2l0aFRpbWUnLFxyXG59O1xyXG48L3NjcmlwdD5cclxuXHJcbjxzY3JpcHQgbGFuZz1cInRzXCIgc2V0dXA+XHJcbmltcG9ydCBGYXZpY29uIGZyb20gJy4vRmF2aWNvbi52dWUnO1xyXG5pbXBvcnQgeyBnZXRGYXZpY29uIH0gZnJvbSAnLi4vdXRpbHMvZmF2aWNvbic7XHJcbmltcG9ydCB7IHVzZU5vdGlmaWNhdGlvbiB9IGZyb20gJ0BreXZnL3Z1ZTMtbm90aWZpY2F0aW9uJztcclxuaW1wb3J0IHsgdXNlSTE4biB9IGZyb20gJ3Z1ZS1pMThuJztcclxuaW1wb3J0IHsgaW5qZWN0U3RvcmFnZSB9IGZyb20gJy4uL3N0b3JhZ2UvaW5qZWN0LXN0b3JhZ2UnO1xyXG5pbXBvcnQgeyBUaW1lIH0gZnJvbSAnLi4vdXRpbHMvdGltZSc7XHJcbmltcG9ydCB7IGNvbXB1dGVkLCBvbk1vdW50ZWQsIHJlZiB9IGZyb20gJ3Z1ZSc7XHJcbmltcG9ydCB7IExpc3RXaXRoVGltZSwgVHlwZU9mVXJsIH0gZnJvbSAnLi4vdXRpbHMvZW51bXMnO1xyXG5pbXBvcnQgeyBTdG9yYWdlUGFyYW1zIH0gZnJvbSAnLi4vc3RvcmFnZS9zdG9yYWdlLXBhcmFtcyc7XHJcbmltcG9ydCB7IGlzRG9tYWluRXF1YWxzIH0gZnJvbSAnLi4vdXRpbHMvY29tbW9uJztcclxuaW1wb3J0IHsgZXh0cmFjdEhvc3RuYW1lIH0gZnJvbSAnLi4vdXRpbHMvZXh0cmFjdC1ob3N0bmFtZSc7XHJcbmltcG9ydCB7IGNvbnZlcnRISE1NVG9TZWNvbmRzLCBjb252ZXJ0U2Vjb25kc1RvSEhNTSB9IGZyb20gJy4uL3V0aWxzL2NvbnZlcnRlcic7XHJcbmltcG9ydCB7IFJlc3RyaWN0aW9uIH0gZnJvbSAnLi4vZW50aXR5L3Jlc3RyaWN0aW9uJztcclxuaW1wb3J0IHsgQmFzZVRpbWVMaXN0IH0gZnJvbSAnLi4vZW50aXR5L2Jhc2VUaW1lTGlzdCc7XHJcbmltcG9ydCB7IE5vdGlmaWNhdGlvbnMgfSBmcm9tICcuLi9lbnRpdHkvbm90aWZpY2F0aW9uJztcclxuXHJcbmNvbnN0IHsgdCB9ID0gdXNlSTE4bigpO1xyXG5cclxuY29uc3QgcHJvcHMgPSBkZWZpbmVQcm9wczx7XHJcbiAgdHlwZTogTGlzdFdpdGhUaW1lO1xyXG59PigpO1xyXG5cclxuY29uc3Qgbm90aWZpY2F0aW9uID0gdXNlTm90aWZpY2F0aW9uKCk7XHJcbmNvbnN0IHNldHRpbmdzU3RvcmFnZSA9IGluamVjdFN0b3JhZ2UoKTtcclxuXHJcbmNvbnN0IGxpc3QgPSByZWY8QmFzZVRpbWVMaXN0W10+KCk7XHJcbmNvbnN0IGlzRWRpdCA9IHJlZjxib29sZWFuPigpO1xyXG5jb25zdCB0aW1lID0gcmVmPFRpbWU+KHtcclxuICBob3VyczogMCxcclxuICBtaW51dGVzOiAzMCxcclxufSk7XHJcbmNvbnN0IG5ld1dlYnNpdGVGb3JMaXN0ID0gcmVmPHN0cmluZz4oKTtcclxuY29uc3Qgc3RvcmFnZVBhcmFtID0gcmVmPFN0b3JhZ2VQYXJhbXM+KCk7XHJcbmNvbnN0IGlzQ2hlY2tlZENvbXBsZXRlbHlCbG9ja2VkID0gY29tcHV0ZWQoXHJcbiAgKCkgPT4gdGltZS52YWx1ZSAhPSB1bmRlZmluZWQgJiYgdGltZS52YWx1ZS5ob3VycyA9PSAwICYmIHRpbWUudmFsdWUubWludXRlcyA9PSAwLFxyXG4pO1xyXG5jb25zdCBzaG93Q29tcGxldGVseUJsb2NrVmFsdWUgPSBjb21wdXRlZChcclxuICAoKSA9PlxyXG4gICAgcHJvcHMudHlwZSA9PSBMaXN0V2l0aFRpbWUuTGltaXRzICYmXHJcbiAgICBuZXdXZWJzaXRlRm9yTGlzdC52YWx1ZSAhPSB1bmRlZmluZWQgJiZcclxuICAgIG5ld1dlYnNpdGVGb3JMaXN0LnZhbHVlICE9ICcnLFxyXG4pO1xyXG5cclxub25Nb3VudGVkKGFzeW5jICgpID0+IHtcclxuICBzd2l0Y2ggKHByb3BzLnR5cGUpIHtcclxuICAgIGNhc2UgTGlzdFdpdGhUaW1lLkxpbWl0czpcclxuICAgICAgbGlzdC52YWx1ZSA9IE9iamVjdC52YWx1ZXMoXHJcbiAgICAgICAgYXdhaXQgc2V0dGluZ3NTdG9yYWdlLmdldFZhbHVlKFN0b3JhZ2VQYXJhbXMuUkVTVFJJQ1RJT05fTElTVCwgW10pLFxyXG4gICAgICApIGFzIFJlc3RyaWN0aW9uW107XHJcbiAgICAgIHN0b3JhZ2VQYXJhbS52YWx1ZSA9IFN0b3JhZ2VQYXJhbXMuUkVTVFJJQ1RJT05fTElTVDtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIExpc3RXaXRoVGltZS5Ob3RpZmljYXRpb25zOlxyXG4gICAgICBsaXN0LnZhbHVlID0gT2JqZWN0LnZhbHVlcyhcclxuICAgICAgICBhd2FpdCBzZXR0aW5nc1N0b3JhZ2UuZ2V0VmFsdWUoU3RvcmFnZVBhcmFtcy5OT1RJRklDQVRJT05fTElTVCwgW10pLFxyXG4gICAgICApIGFzIE5vdGlmaWNhdGlvbnNbXTtcclxuICAgICAgc3RvcmFnZVBhcmFtLnZhbHVlID0gU3RvcmFnZVBhcmFtcy5OT1RJRklDQVRJT05fTElTVDtcclxuICAgICAgYnJlYWs7XHJcbiAgfVxyXG59KTtcclxuXHJcbmZ1bmN0aW9uIGFkZFRvTGlzdCgpIHtcclxuICBjb25zdCBleGlzdGluZ0l0ZW0gPSBsaXN0LnZhbHVlPy5maW5kKHggPT5cclxuICAgIGlzRG9tYWluRXF1YWxzKGV4dHJhY3RIb3N0bmFtZSh4LmRvbWFpbiksIGV4dHJhY3RIb3N0bmFtZShuZXdXZWJzaXRlRm9yTGlzdC52YWx1ZSEpKSxcclxuICApO1xyXG4gIGlmIChleGlzdGluZ0l0ZW0gIT09IHVuZGVmaW5lZCkge1xyXG4gICAgbm90aWZpY2F0aW9uLm5vdGlmeSh7XHJcbiAgICAgIHRpdGxlOiAnWW91IGhhdmUgYWxyZWFkeSBhZGRlZCB0aGlzIHNpdGUnLFxyXG4gICAgICB0eXBlOiAnZXJyb3InLFxyXG4gICAgfSk7XHJcbiAgfSBlbHNlIHtcclxuICAgIGNvbnN0IG5ld0xpbWl0ID0gbmV3IFJlc3RyaWN0aW9uKFxyXG4gICAgICBleHRyYWN0SG9zdG5hbWUobmV3V2Vic2l0ZUZvckxpc3QudmFsdWUhKSxcclxuICAgICAgdGltZS52YWx1ZS5ob3VycyxcclxuICAgICAgdGltZS52YWx1ZS5taW51dGVzLFxyXG4gICAgKTtcclxuICAgIGxpc3QudmFsdWU/LnB1c2gobmV3TGltaXQpO1xyXG4gICAgc2F2ZShsaXN0LnZhbHVlKTtcclxuICAgIG5ld1dlYnNpdGVGb3JMaXN0LnZhbHVlID0gJyc7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBjb21wbGV0ZWx5QmxvY2soKSB7XHJcbiAgdGltZS52YWx1ZS5ob3VycyA9IDA7XHJcbiAgdGltZS52YWx1ZS5taW51dGVzID0gMDtcclxufVxyXG5cclxuZnVuY3Rpb24gY29tcGxldGVseUJsb2NrZWQodGltZTogbnVtYmVyKSB7XHJcbiAgcmV0dXJuIHByb3BzLnR5cGUgPT0gTGlzdFdpdGhUaW1lLkxpbWl0cyAmJiB0aW1lID09IDA7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldFRpbWUodGltZTogbnVtYmVyKSB7XHJcbiAgY29uc3QgdGltZU9iaiA9IGNvbnZlcnRTZWNvbmRzVG9ISE1NKHRpbWUpO1xyXG4gIHJldHVybiBgJHt0aW1lT2JqLmhvdXJzfToke3RpbWVPYmoubWludXRlcyA8IDEwID8gJzAnICsgdGltZU9iai5taW51dGVzIDogdGltZU9iai5taW51dGVzfWA7XHJcbn1cclxuXHJcbmNvbnN0IGlzRGlzYWJsZWRTYXZpbmcgPSBjb21wdXRlZCgoKSA9PiB7XHJcbiAgaWYgKFxyXG4gICAgcHJvcHMudHlwZSA9PSBMaXN0V2l0aFRpbWUuTm90aWZpY2F0aW9ucyAmJlxyXG4gICAgdGltZS52YWx1ZT8uaG91cnMgPT0gMCAmJlxyXG4gICAgdGltZS52YWx1ZT8ubWludXRlcyA9PSAwXHJcbiAgKVxyXG4gICAgcmV0dXJuIHRydWU7XHJcbiAgcmV0dXJuIChcclxuICAgIG5ld1dlYnNpdGVGb3JMaXN0LnZhbHVlID09ICcnIHx8IG5ld1dlYnNpdGVGb3JMaXN0LnZhbHVlID09IHVuZGVmaW5lZCB8fCB0aW1lLnZhbHVlID09IG51bGxcclxuICApO1xyXG59KTtcclxuXHJcbmZ1bmN0aW9uIGRlbGV0ZUZyb21MaXN0KHVybDogc3RyaW5nKSB7XHJcbiAgbGlzdC52YWx1ZSA9IGxpc3QudmFsdWUhLmZpbHRlcih4ID0+IHguZG9tYWluICE9IHVybCk7XHJcbiAgc2F2ZShsaXN0LnZhbHVlKTtcclxuICBuZXdXZWJzaXRlRm9yTGlzdC52YWx1ZSA9ICcnO1xyXG4gIGlzRWRpdC52YWx1ZSA9IGZhbHNlO1xyXG59XHJcblxyXG5mdW5jdGlvbiBlZGl0SXRlbUZyb21MaXN0KHVybDogc3RyaW5nLCB0aW1lRm9yVXJsOiBudW1iZXIpIHtcclxuICBpc0VkaXQudmFsdWUgPSB0cnVlO1xyXG4gIG5ld1dlYnNpdGVGb3JMaXN0LnZhbHVlID0gdXJsO1xyXG4gIGNvbnN0IHRpbWVPYmogPSBjb252ZXJ0U2Vjb25kc1RvSEhNTSh0aW1lRm9yVXJsKTtcclxuICB0aW1lLnZhbHVlLmhvdXJzID0gdGltZU9iai5ob3VycztcclxuICB0aW1lLnZhbHVlLm1pbnV0ZXMgPSB0aW1lT2JqLm1pbnV0ZXM7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGVkaXRJdGVtKCkge1xyXG4gIGNvbnN0IGV4aXN0aW5nSXRlbSA9IGxpc3QudmFsdWU/LmZpbmQoeCA9PlxyXG4gICAgaXNEb21haW5FcXVhbHMoZXh0cmFjdEhvc3RuYW1lKHguZG9tYWluKSwgZXh0cmFjdEhvc3RuYW1lKG5ld1dlYnNpdGVGb3JMaXN0LnZhbHVlISkpLFxyXG4gICk7XHJcbiAgaWYgKGV4aXN0aW5nSXRlbSAhPSB1bmRlZmluZWQpIHtcclxuICAgIGV4aXN0aW5nSXRlbS50aW1lID0gY29udmVydEhITU1Ub1NlY29uZHModGltZS52YWx1ZS5ob3VycywgdGltZS52YWx1ZS5taW51dGVzKTtcclxuICAgIHNhdmUobGlzdC52YWx1ZSk7XHJcbiAgICBuZXdXZWJzaXRlRm9yTGlzdC52YWx1ZSA9ICcnO1xyXG4gICAgaXNFZGl0LnZhbHVlID0gZmFsc2U7XHJcbiAgfVxyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiBzYXZlKHZhbHVlOiBhbnkpIHtcclxuICBpZiAodmFsdWUgIT0gdW5kZWZpbmVkKSBhd2FpdCBzZXR0aW5nc1N0b3JhZ2Uuc2F2ZVZhbHVlKHN0b3JhZ2VQYXJhbS52YWx1ZSEsIHZhbHVlKTtcclxufVxyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZSBzY29wZWQ+XHJcbi5saW1pdHMtdGltZS1ibG9jayB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xyXG59XHJcblxyXG4ubGltaXRzLXRpbWUtYmxvY2sgLmRhdGUtcGlja2VyIHtcclxuICB3aWR0aDogMTIwcHg7XHJcbiAgbWFyZ2luOiAwIDE1cHg7XHJcbn1cclxuLmJsb2NrZWQge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBmb250LXNpemU6IDEzcHg7XHJcbiAgY29sb3I6IGdyYXk7XHJcbiAgbWFyZ2luLWxlZnQ6IDU1cHg7XHJcbiAgbWFyZ2luLXRvcDogMDtcclxufVxyXG48L3N0eWxlPlxyXG4iLCI8dGVtcGxhdGU+XHJcbiAgPGRpdj5cclxuICAgIDxwIGNsYXNzPVwidGl0bGUgbXQtMFwiPnt7IHQoJ2xpbWl0cy5tZXNzYWdlJykgfX08L3A+XHJcbiAgICA8cCBjbGFzcz1cImRlc2NyaXB0aW9uXCI+XHJcbiAgICAgIHt7IHQoJ2xpbWl0cy5kZXNjcmlwdGlvbicpIH19XHJcbiAgICA8L3A+XHJcbiAgICA8cCBjbGFzcz1cImRlc2NyaXB0aW9uXCI+XHJcbiAgICAgIHt7IHQoJ2xpbWl0c1RpcC5tZXNzYWdlJykgfX1cclxuICAgIDwvcD5cclxuICAgIDxMaXN0V2l0aFRpbWVDb21wb25lbnQgOnR5cGU9XCJMaXN0V2l0aFRpbWUuTGltaXRzXCIgLz5cclxuICAgIDxQcm9tb0NsZWFyWW91VHViZSAvPlxyXG4gIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdCBsYW5nPVwidHNcIj5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gIG5hbWU6ICdMaW1pdHMnLFxyXG59O1xyXG48L3NjcmlwdD5cclxuXHJcbjxzY3JpcHQgbGFuZz1cInRzXCIgc2V0dXA+XHJcbmltcG9ydCBMaXN0V2l0aFRpbWVDb21wb25lbnQgZnJvbSAnLi4vY29tcG9uZW50cy9MaXN0V2l0aFRpbWUudnVlJztcclxuaW1wb3J0IFByb21vQ2xlYXJZb3VUdWJlIGZyb20gJy4uL2NvbXBvbmVudHMvUHJvbW9DbGVhcllvdVR1YmUudnVlJztcclxuaW1wb3J0IHsgTGlzdFdpdGhUaW1lIH0gZnJvbSAnLi4vdXRpbHMvZW51bXMnO1xyXG5pbXBvcnQgeyB1c2VJMThuIH0gZnJvbSAndnVlLWkxOG4nO1xyXG5cclxuY29uc3QgeyB0IH0gPSB1c2VJMThuKCk7XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlIHNjb3BlZD5cclxuLmFib3V0IC5hYm91dC1sYWJlbCB7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuPC9zdHlsZT5cclxuIiwiPHRlbXBsYXRlPlxyXG4gIDxkaXY+XHJcbiAgICA8ZGl2IGNsYXNzPVwic2V0dGluZ3MtaXRlbVwiPlxyXG4gICAgICA8bGFiZWwgY2xhc3M9XCJzZXR0aW5nLWhlYWRlclwiPlxyXG4gICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcclxuICAgICAgICAgIGNsYXNzPVwiZmlsbGVkLWluXCJcclxuICAgICAgICAgIGlkPVwiYmxvY2tEZWZlcnJhbFwiXHJcbiAgICAgICAgICB2LW1vZGVsPVwic2hvd0RhaWx5Tm90aWZpY2F0aW9uXCJcclxuICAgICAgICAgIEBjaGFuZ2U9XCJvbkNoYW5nZShTdG9yYWdlUGFyYW1zLkRBSUxZX05PVElGSUNBVElPTiwgJGV2ZW50LnRhcmdldClcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPHNwYW4+e3sgdCgnc2hvd0RhaWx5Tm90aWZpY2F0aW9uLm1lc3NhZ2UnKSB9fTwvc3Bhbj5cclxuICAgICAgICA8cCBjbGFzcz1cImRlc2NyaXB0aW9uXCI+XHJcbiAgICAgICAgICB7eyB0KCdzaG93RGFpbHlOb3RpZmljYXRpb24uZGVzY3JpcHRpb24nKSB9fVxyXG4gICAgICAgIDwvcD5cclxuICAgICAgPC9sYWJlbD5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdiBjbGFzcz1cInNldHRpbmdzLWl0ZW1cIj5cclxuICAgICAgPHAgY2xhc3M9XCJzZXR0aW5nLWhlYWRlciBkLWlubGluZS1ibG9ja1wiPlxyXG4gICAgICAgIHt7IHQoJ25vdGlmaWNhdGlvblRpbWVTZXR0aW5nLm1lc3NhZ2UnKSB9fVxyXG4gICAgICA8L3A+XHJcbiAgICAgIDxWdWVEYXRlUGlja2VyXHJcbiAgICAgICAgdi1tb2RlbD1cIm5vdGlmaWNhdGlvblRpbWVcIlxyXG4gICAgICAgIHRpbWUtcGlja2VyXHJcbiAgICAgICAgQHVwZGF0ZTptb2RlbC12YWx1ZT1cImhhbmRsZURhdGVcIlxyXG4gICAgICAgIGNsYXNzPVwiZGF0ZS1waWNrZXIgZC1pbmxpbmUtYmxvY2tcIlxyXG4gICAgICAvPlxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzPVwic2V0dGluZ3MtaXRlbVwiPlxyXG4gICAgICA8bGFiZWwgY2xhc3M9XCJzZXR0aW5nLWhlYWRlclwiPnt7IHQoJ25vdGlmaWNhdGlvblRpbWUubWVzc2FnZScpIH19PC9sYWJlbD5cclxuICAgICAgPHAgY2xhc3M9XCJkZXNjcmlwdGlvblwiPlxyXG4gICAgICAgIHt7IHQoJ25vdGlmaWNhdGlvblRpbWUuZGVzY3JpcHRpb24nKSB9fVxyXG4gICAgICA8L3A+XHJcbiAgICAgIDxMaXN0V2l0aFRpbWVDb21wb25lbnQgOnR5cGU9XCJMaXN0V2l0aFRpbWUuTm90aWZpY2F0aW9uc1wiIC8+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgY2xhc3M9XCJzZXR0aW5ncy1pdGVtXCI+XHJcbiAgICAgIDxsYWJlbCBjbGFzcz1cInNldHRpbmctaGVhZGVyXCI+e3sgdCgnbm90aWZpY2F0aW9uTWVzc2FnZS5tZXNzYWdlJykgfX08L2xhYmVsPlxyXG4gICAgICA8cCBjbGFzcz1cImRlc2NyaXB0aW9uXCI+XHJcbiAgICAgICAge3sgdCgnbm90aWZpY2F0aW9uTWVzc2FnZS5kZXNjcmlwdGlvbicpIH19XHJcbiAgICAgIDwvcD5cclxuICAgICAgPGlucHV0XHJcbiAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgIGNsYXNzPVwiXCJcclxuICAgICAgICA6cGxhY2Vob2xkZXI9XCJ0KCdlbnRlck5vdGlmaWNhdGlvbi5tZXNzYWdlJylcIlxyXG4gICAgICAgIHYtbW9kZWw9XCJub3RpZmljYXRpb25NZXNzYWdlXCJcclxuICAgICAgLz5cclxuICAgICAgPGlucHV0XHJcbiAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgY2xhc3M9XCJkLWlubGluZS1ibG9jayBzbWFsbC1idG4gbWwtMTAgd2lkdGhcIlxyXG4gICAgICAgIDp2YWx1ZT1cInQoJ3NhdmUubWVzc2FnZScpXCJcclxuICAgICAgICA6ZGlzYWJsZWQ9XCJub3RpZmljYXRpb25NZXNzYWdlID09ICcnXCJcclxuICAgICAgICBAY2xpY2s9XCJzYXZlTm90aWZpY2F0aW9uTWVzc2FnZSgpXCJcclxuICAgICAgLz5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdCBsYW5nPVwidHNcIj5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gIG5hbWU6ICdEYWlseU5vdGlmaWNhdGlvbnMnLFxyXG59O1xyXG48L3NjcmlwdD5cclxuXHJcbjxzY3JpcHQgbGFuZz1cInRzXCIgc2V0dXA+XHJcbmltcG9ydCB7IG9uTW91bnRlZCwgcmVmIH0gZnJvbSAndnVlJztcclxuaW1wb3J0IHsgdXNlSTE4biB9IGZyb20gJ3Z1ZS1pMThuJztcclxuaW1wb3J0IHsgaW5qZWN0U3RvcmFnZSB9IGZyb20gJy4uL3N0b3JhZ2UvaW5qZWN0LXN0b3JhZ2UnO1xyXG5pbXBvcnQgeyBOT1RJRklDQVRJT05fTUVTU0FHRV9ERUZBVUxULCBTdG9yYWdlUGFyYW1zIH0gZnJvbSAnLi4vc3RvcmFnZS9zdG9yYWdlLXBhcmFtcyc7XHJcbmltcG9ydCB7XHJcbiAgREFJTFlfTk9USUZJQ0FUSU9OX0RFRkFVTFQsXHJcbiAgREFJTFlfU1VNTUFSWV9OT1RJRklDQVRJT05fVElNRV9ERUZBVUxULFxyXG59IGZyb20gJy4uL3N0b3JhZ2Uvc3RvcmFnZS1wYXJhbXMnO1xyXG5pbXBvcnQgeyBjb252ZXJ0SEhNTVRvU2Vjb25kcywgY29udmVydFNlY29uZHNUb0hITU0gfSBmcm9tICcuLi91dGlscy9jb252ZXJ0ZXInO1xyXG5pbXBvcnQgeyBUaW1lIH0gZnJvbSAnLi4vdXRpbHMvdGltZSc7XHJcbmltcG9ydCBMaXN0V2l0aFRpbWVDb21wb25lbnQgZnJvbSAnLi4vY29tcG9uZW50cy9MaXN0V2l0aFRpbWUudnVlJztcclxuaW1wb3J0IFByb21vQ2xlYXJZb3VUdWJlIGZyb20gJy4uL2NvbXBvbmVudHMvUHJvbW9DbGVhcllvdVR1YmUudnVlJztcclxuaW1wb3J0IHsgTGlzdFdpdGhUaW1lIH0gZnJvbSAnLi4vdXRpbHMvZW51bXMnO1xyXG5pbXBvcnQgQnJvd3NlciBmcm9tICd3ZWJleHRlbnNpb24tcG9seWZpbGwnO1xyXG5pbXBvcnQgeyBNZXNzYWdlcyB9IGZyb20gJy4uL3V0aWxzL21lc3NhZ2VzJztcclxuXHJcbmNvbnN0IHsgdCB9ID0gdXNlSTE4bigpO1xyXG5cclxuY29uc3Qgc2V0dGluZ3NTdG9yYWdlID0gaW5qZWN0U3RvcmFnZSgpO1xyXG5cclxuY29uc3Qgc2hvd0RhaWx5Tm90aWZpY2F0aW9uID0gcmVmPGJvb2xlYW4+KCk7XHJcbmNvbnN0IGRhaWx5Tm90aWZpY2F0aW9uVGltZSA9IHJlZjxudW1iZXI+KCk7XHJcbmNvbnN0IG5vdGlmaWNhdGlvblRpbWUgPSByZWY8VGltZT4oKTtcclxuY29uc3Qgbm90aWZpY2F0aW9uTWVzc2FnZSA9IHJlZjxzdHJpbmc+KCk7XHJcblxyXG5vbk1vdW50ZWQoYXN5bmMgKCkgPT4ge1xyXG4gIHNob3dEYWlseU5vdGlmaWNhdGlvbi52YWx1ZSA9IGF3YWl0IHNldHRpbmdzU3RvcmFnZS5nZXRWYWx1ZShcclxuICAgIFN0b3JhZ2VQYXJhbXMuREFJTFlfTk9USUZJQ0FUSU9OLFxyXG4gICAgREFJTFlfTk9USUZJQ0FUSU9OX0RFRkFVTFQsXHJcbiAgKTtcclxuXHJcbiAgbm90aWZpY2F0aW9uTWVzc2FnZS52YWx1ZSA9IGF3YWl0IHNldHRpbmdzU3RvcmFnZS5nZXRWYWx1ZShcclxuICAgIFN0b3JhZ2VQYXJhbXMuTk9USUZJQ0FUSU9OX01FU1NBR0UsXHJcbiAgICBOT1RJRklDQVRJT05fTUVTU0FHRV9ERUZBVUxULFxyXG4gICk7XHJcblxyXG4gIGRhaWx5Tm90aWZpY2F0aW9uVGltZS52YWx1ZSA9IChhd2FpdCBzZXR0aW5nc1N0b3JhZ2UuZ2V0VmFsdWUoXHJcbiAgICBTdG9yYWdlUGFyYW1zLkRBSUxZX1NVTU1BUllfTk9USUZJQ0FUSU9OX1RJTUUsXHJcbiAgICBEQUlMWV9TVU1NQVJZX05PVElGSUNBVElPTl9USU1FX0RFRkFVTFQsXHJcbiAgKSkgYXMgbnVtYmVyO1xyXG5cclxuICBjb25zdCB0aW1lT2JqID0gY29udmVydFNlY29uZHNUb0hITU0oZGFpbHlOb3RpZmljYXRpb25UaW1lLnZhbHVlKTtcclxuICBub3RpZmljYXRpb25UaW1lLnZhbHVlID0gdGltZU9iajtcclxufSk7XHJcblxyXG5hc3luYyBmdW5jdGlvbiBzYXZlTm90aWZpY2F0aW9uTWVzc2FnZSgpIHtcclxuICBzYXZlKFN0b3JhZ2VQYXJhbXMuTk9USUZJQ0FUSU9OX01FU1NBR0UsIG5vdGlmaWNhdGlvbk1lc3NhZ2UudmFsdWUpO1xyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiBoYW5kbGVEYXRlKG1vZGVsRGF0YTogVGltZSkge1xyXG4gIGlmIChtb2RlbERhdGEgIT0gbnVsbCkge1xyXG4gICAgbm90aWZpY2F0aW9uVGltZS52YWx1ZSA9IG1vZGVsRGF0YTtcclxuICAgIGF3YWl0IHNhdmUoXHJcbiAgICAgIFN0b3JhZ2VQYXJhbXMuREFJTFlfU1VNTUFSWV9OT1RJRklDQVRJT05fVElNRSxcclxuICAgICAgY29udmVydEhITU1Ub1NlY29uZHMobm90aWZpY2F0aW9uVGltZS52YWx1ZS5ob3Vycywgbm90aWZpY2F0aW9uVGltZS52YWx1ZS5taW51dGVzKSxcclxuICAgICk7XHJcbiAgICBCcm93c2VyLnJ1bnRpbWUuc2VuZE1lc3NhZ2UoTWVzc2FnZXMuUmVzY2hlZHVsZUpvYnMpO1xyXG4gIH1cclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gb25DaGFuZ2Uoc3RvcmFnZVBhcmFtOiBTdG9yYWdlUGFyYW1zLCB0YXJnZXQ6IGFueSkge1xyXG4gIGlmICh0YXJnZXQgIT0gbnVsbCkgYXdhaXQgc2F2ZShzdG9yYWdlUGFyYW0sIHRhcmdldC5jaGVja2VkKTtcclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gc2F2ZShzdG9yYWdlUGFyYW06IFN0b3JhZ2VQYXJhbXMsIHZhbHVlOiBhbnkpIHtcclxuICBpZiAodmFsdWUgIT0gdW5kZWZpbmVkKSBhd2FpdCBzZXR0aW5nc1N0b3JhZ2Uuc2F2ZVZhbHVlKHN0b3JhZ2VQYXJhbSwgdmFsdWUpO1xyXG59XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlIHNjb3BlZD5cclxuLmRhdGUtcGlja2VyIHtcclxuICB3aWR0aDogMTIwcHg7XHJcbiAgbWFyZ2luOiAwIDE1cHg7XHJcbn1cclxuLndpZHRoIHtcclxuICB3aWR0aDogNTQwcHg7XHJcbn1cclxuPC9zdHlsZT5cclxuIiwiZXhwb3J0IGRlZmF1bHQgXCJfX1ZJVEVfQVNTRVRfX2ExNjZhNTUwX19cIiIsImV4cG9ydCBkZWZhdWx0IFwiX19WSVRFX0FTU0VUX19mYTE2MjA0YV9fXCIiLCJleHBvcnQgZGVmYXVsdCBcIl9fVklURV9BU1NFVF9fOGI5NDNiOGZfX1wiIiwiZXhwb3J0IGRlZmF1bHQgXCJfX1ZJVEVfQVNTRVRfXzI4NzcxMjYxX19cIiIsImltcG9ydCBCcm93c2VyIGZyb20gJ3dlYmV4dGVuc2lvbi1wb2x5ZmlsbCc7XHJcbmltcG9ydCB7IFBvbW9kb3JvU291bmRzIH0gZnJvbSAnLi4vdXRpbHMvcG9tb2Rvcm8nO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHBsYXlTb3VuZChzb3VuZDogUG9tb2Rvcm9Tb3VuZHMpIHtcclxuICBjb25zdCBteUF1ZGlvID0gbmV3IEF1ZGlvKEJyb3dzZXIucnVudGltZS5nZXRVUkwoYGFzc2V0cy9wb21vZG9yby1zb3VuZHMvJHtzb3VuZH1gKSk7XHJcbiAgbXlBdWRpby5wbGF5KCk7XHJcbn1cclxuIiwiPHRlbXBsYXRlPlxyXG4gIDxwIGNsYXNzPVwidGl0bGUtYXVkaW8gZC1pbmxpbmUtYmxvY2tcIj57eyB0KCdwb21vZG9yb1NvdW5kQWZ0ZXIubWVzc2FnZScpIH19PC9wPlxyXG4gIDxzZWxlY3QgY2xhc3M9XCJvcHRpb25cIiB2LW1vZGVsPVwiYXVkaW9BZnRlclBlcmlvZFwiIEBjaGFuZ2U9XCJvbkF1ZGlvQ2hhbmdlKCRldmVudC50YXJnZXQpXCI+XHJcbiAgICA8b3B0aW9uIDp2YWx1ZT1cIlBvbW9kb3JvU291bmRzWydTb3VuZCAxJ11cIj57eyB0KCdzb3VuZC5tZXNzYWdlJykgfX0gMTwvb3B0aW9uPlxyXG4gICAgPG9wdGlvbiA6dmFsdWU9XCJQb21vZG9yb1NvdW5kc1snU291bmQgMiddXCI+e3sgdCgnc291bmQubWVzc2FnZScpIH19IDI8L29wdGlvbj5cclxuICAgIDxvcHRpb24gOnZhbHVlPVwiUG9tb2Rvcm9Tb3VuZHNbJ1NvdW5kIDMnXVwiPnt7IHQoJ3NvdW5kLm1lc3NhZ2UnKSB9fSAzPC9vcHRpb24+XHJcbiAgICA8b3B0aW9uIDp2YWx1ZT1cIlBvbW9kb3JvU291bmRzWydTb3VuZCA0J11cIj57eyB0KCdzb3VuZC5tZXNzYWdlJykgfX0gNDwvb3B0aW9uPlxyXG4gICAgPG9wdGlvbiA6dmFsdWU9XCJQb21vZG9yb1NvdW5kc1snU291bmQgNSddXCI+e3sgdCgnc291bmQubWVzc2FnZScpIH19IDU8L29wdGlvbj5cclxuICAgIDxvcHRpb24gOnZhbHVlPVwiUG9tb2Rvcm9Tb3VuZHNbJ1NvdW5kIDYnXVwiPnt7IHQoJ3NvdW5kLm1lc3NhZ2UnKSB9fSA2PC9vcHRpb24+XHJcbiAgICA8b3B0aW9uIDp2YWx1ZT1cIlBvbW9kb3JvU291bmRzWydTb3VuZCA3J11cIj57eyB0KCdzb3VuZC5tZXNzYWdlJykgfX0gNzwvb3B0aW9uPlxyXG4gICAgPG9wdGlvbiA6dmFsdWU9XCJQb21vZG9yb1NvdW5kc1snU291bmQgOCddXCI+e3sgdCgnc291bmQubWVzc2FnZScpIH19IDg8L29wdGlvbj5cclxuICAgIDxvcHRpb24gOnZhbHVlPVwiUG9tb2Rvcm9Tb3VuZHNbJ1NvdW5kIDknXVwiPnt7IHQoJ3NvdW5kLm1lc3NhZ2UnKSB9fSA5PC9vcHRpb24+XHJcbiAgICA8b3B0aW9uIDp2YWx1ZT1cIlBvbW9kb3JvU291bmRzWydTb3VuZCAxMCddXCI+e3sgdCgnc291bmQubWVzc2FnZScpIH19IDEwPC9vcHRpb24+XHJcbiAgICA8b3B0aW9uIDp2YWx1ZT1cIlBvbW9kb3JvU291bmRzWydTb3VuZCAxMSddXCI+e3sgdCgnc291bmQubWVzc2FnZScpIH19IDExPC9vcHRpb24+XHJcbiAgICA8b3B0aW9uIDp2YWx1ZT1cIlBvbW9kb3JvU291bmRzWydTb3VuZCAxMiddXCI+e3sgdCgnc291bmQubWVzc2FnZScpIH19IDEyPC9vcHRpb24+XHJcbiAgICA8b3B0aW9uIDp2YWx1ZT1cIlBvbW9kb3JvU291bmRzWydTb3VuZCAxMyddXCI+e3sgdCgnc291bmQubWVzc2FnZScpIH19IDEzPC9vcHRpb24+XHJcbiAgPC9zZWxlY3Q+XHJcbiAgPGltZyBzcmM9XCIuLi9hc3NldHMvaWNvbnMvc3RhcnQuc3ZnXCIgaGVpZ2h0PVwiMjJcIiBAY2xpY2s9XCJwbGF5QXVkaW9cIiBjbGFzcz1cInBsYXlcIiAvPlxyXG4gIDxzcGFuIGNsYXNzPVwicHJldmlld1wiPnt7IHQoJ2NsaWNrVG9QcmV2aWV3Lm1lc3NhZ2UnKSB9fTwvc3Bhbj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQgbGFuZz1cInRzXCI+XHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICBuYW1lOiAnUG9tb2Rvcm9Tb3VuZHNTZWxlY3RvcicsXHJcbn07XHJcbjwvc2NyaXB0PlxyXG5cclxuPHNjcmlwdCBsYW5nPVwidHNcIiBzZXR1cD5cclxuaW1wb3J0IHsgcmVmIH0gZnJvbSAndnVlJztcclxuaW1wb3J0IHsgdXNlSTE4biB9IGZyb20gJ3Z1ZS1pMThuJztcclxuaW1wb3J0IHsgUG9tb2Rvcm9BdWRpb1BhcmFtcywgUG9tb2Rvcm9Tb3VuZHMgfSBmcm9tICcuLi91dGlscy9wb21vZG9ybyc7XHJcbmltcG9ydCB7IGluamVjdFN0b3JhZ2UgfSBmcm9tICcuLi9zdG9yYWdlL2luamVjdC1zdG9yYWdlJztcclxuaW1wb3J0IHsgcGxheVNvdW5kIH0gZnJvbSAnLi4vZnVuY3Rpb25zL3BsYXlTb3VuZCc7XHJcblxyXG5jb25zdCBwcm9wcyA9IGRlZmluZVByb3BzPHtcclxuICBvcHRpb246IFBvbW9kb3JvQXVkaW9QYXJhbXM7XHJcbiAgdmFsdWU6IFBvbW9kb3JvU291bmRzO1xyXG59PigpO1xyXG5cclxuY29uc3QgeyB0IH0gPSB1c2VJMThuKCk7XHJcbmNvbnN0IHNldHRpbmdzU3RvcmFnZSA9IGluamVjdFN0b3JhZ2UoKTtcclxuY29uc3QgYXVkaW9BZnRlclBlcmlvZCA9IHJlZjxQb21vZG9yb1NvdW5kcz4ocHJvcHMudmFsdWUpO1xyXG5cclxuZnVuY3Rpb24gcGxheUF1ZGlvKCkge1xyXG4gIHBsYXlTb3VuZChhdWRpb0FmdGVyUGVyaW9kLnZhbHVlKTtcclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gb25BdWRpb0NoYW5nZSh0YXJnZXQ6IGFueSkge1xyXG4gIGF3YWl0IHNldHRpbmdzU3RvcmFnZS5zYXZlVmFsdWUocHJvcHMub3B0aW9uLCB0YXJnZXQudmFsdWUpO1xyXG59XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlIHNjb3BlZD5cclxuLnBsYXkge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbn1cclxuLnRpdGxlLWF1ZGlvIHtcclxuICBmb250LXNpemU6IDE1cHg7XHJcbn1cclxuLnByZXZpZXcge1xyXG4gIGNvbG9yOiBncmV5O1xyXG59XHJcbi5vcHRpb24ge1xyXG4gIGhlaWdodDogMzhweDtcclxuICBtYXJnaW4tbGVmdDogMTVweDtcclxufVxyXG48L3N0eWxlPlxyXG4iLCI8dGVtcGxhdGU+XHJcbiAgPHAgY2xhc3M9XCJ0aXRsZSBtdC0wXCI+e3sgdCgncG9tb2Rvcm8ubWVzc2FnZScpIH19PC9wPlxyXG4gIDxwIGNsYXNzPVwiZGVzY3JpcHRpb25cIj5cclxuICAgIHt7IHQoJ3BvbW9kb3JvLmRlc2NyaXB0aW9uJykgfX1cclxuICA8L3A+XHJcbiAgPGRpdiBjbGFzcz1cImV4cGxhbmF0aW9uLWJsb2NrXCI+XHJcbiAgICA8cCBjbGFzcz1cImV4cGxhbmF0aW9uXCI+XHJcbiAgICAgIHt7IHQoJ3BvbW9kb3JvRXhwbGFuYXRpb25JY29uLm1lc3NhZ2UnKSB9fVxyXG4gICAgICA8c3Bhbj48aW1nIGNsYXNzPVwibWwtNVwiIHNyYz1cIi4uL2Fzc2V0cy9pY29ucy9wb21vZG9yby5wbmdcIiBoZWlnaHQ9XCIzMFwiIC8+PC9zcGFuPi5cclxuICAgICAge3sgdCgncG9tb2Rvcm9FeHBsYW5hdGlvbkljb24uZGVzY3JpcHRpb24nKSB9fVxyXG4gICAgICA8aW1nIGNsYXNzPVwibWwtNVwiIHNyYz1cIi4uL2Fzc2V0cy9pY29ucy9wb21vZG9yby1yZXN0LnBuZ1wiIGhlaWdodD1cIjMwXCIgLz4uXHJcbiAgICA8L3A+XHJcbiAgICA8cCBjbGFzcz1cImV4cGxhbmF0aW9uXCI+XHJcbiAgICAgIHt7IHQoJ3BvbW9kb3JvRXhwbGFuYXRpb25UaW1lLm1lc3NhZ2UnKSB9fVxyXG4gICAgPC9wPlxyXG4gICAgPHAgY2xhc3M9XCJleHBsYW5hdGlvblwiPnt7IHQoJ3BvbW9kb3JvRXhwbGFuYXRpb25TdG9wLm1lc3NhZ2UnKSB9fTwvcD5cclxuICA8L2Rpdj5cclxuICA8ZGl2IDpjbGFzcz1cImlzRW5hYmxlZCA/ICdkaXNhYmxlZCcgOiAnJ1wiPlxyXG4gICAgPGRpdiBjbGFzcz1cInBvbW9kb3JvLWJsb2NrIG10LTIwXCI+XHJcbiAgICAgIDxwIGNsYXNzPVwidGl0bGVcIj57eyB0KCdwb21vZG9yb1dvcmsubWVzc2FnZScpIH19PC9wPlxyXG4gICAgICA8VnVlRGF0ZVBpY2tlciB2LW1vZGVsPVwid29ya1RpbWVcIiB0aW1lLXBpY2tlciBjbGFzcz1cImRhdGUtcGlja2VyXCIgLz5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdiBjbGFzcz1cInBvbW9kb3JvLWJsb2NrXCI+XHJcbiAgICAgIDxQb21vZG9yb1NvdW5kc1NlbGVjdG9yXHJcbiAgICAgICAgdi1pZj1cImF1ZGlvQWZ0ZXJXb3JrXCJcclxuICAgICAgICA6b3B0aW9uPVwiU3RvcmFnZVBhcmFtcy5QT01PRE9ST19BVURJT19BRlRFUl9XT1JLXCJcclxuICAgICAgICA6dmFsdWU9XCJhdWRpb0FmdGVyV29ya1wiXHJcbiAgICAgIC8+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgY2xhc3M9XCJwb21vZG9yby1ibG9ja1wiPlxyXG4gICAgICA8cCBjbGFzcz1cInRpdGxlXCI+e3sgdCgncG9tb2Rvcm9SZXN0Lm1lc3NhZ2UnKSB9fTwvcD5cclxuICAgICAgPFZ1ZURhdGVQaWNrZXIgdi1tb2RlbD1cInJlc3RUaW1lXCIgdGltZS1waWNrZXIgY2xhc3M9XCJkYXRlLXBpY2tlclwiIC8+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgY2xhc3M9XCJwb21vZG9yby1ibG9ja1wiPlxyXG4gICAgICA8UG9tb2Rvcm9Tb3VuZHNTZWxlY3RvclxyXG4gICAgICAgIHYtaWY9XCJhdWRpb0FmdGVyUmVzdFwiXHJcbiAgICAgICAgOm9wdGlvbj1cIlN0b3JhZ2VQYXJhbXMuUE9NT0RPUk9fQVVESU9fQUZURVJfUkVTVFwiXHJcbiAgICAgICAgOnZhbHVlPVwiYXVkaW9BZnRlclJlc3RcIlxyXG4gICAgICAvPlxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzPVwicG9tb2Rvcm8tYmxvY2tcIj5cclxuICAgICAgPHAgY2xhc3M9XCJ0aXRsZVwiPnt7IHQoJ3BvbW9kb3JvRnJlcXVlbmN5Lm1lc3NhZ2UnKSB9fTwvcD5cclxuICAgICAgPGlucHV0IHR5cGU9XCJudW1iZXJcIiBjbGFzcz1cImZyZXF1ZW5jeVwiIHYtbW9kZWw9XCJmcmVxdWVuY3lcIiAvPlxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzPVwicG9tb2Rvcm8tYmxvY2tcIj5cclxuICAgICAgPFBvbW9kb3JvU291bmRzU2VsZWN0b3JcclxuICAgICAgICB2LWlmPVwiYXVkaW9BZnRlckZpbmlzaGVkXCJcclxuICAgICAgICA6b3B0aW9uPVwiU3RvcmFnZVBhcmFtcy5QT01PRE9ST19BVURJT19BRlRFUl9GSU5JU0hFRFwiXHJcbiAgICAgICAgOnZhbHVlPVwiYXVkaW9BZnRlckZpbmlzaGVkXCJcclxuICAgICAgLz5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG4gIDxidXR0b25cclxuICAgIGNsYXNzPVwiZC1pbmxpbmUtYmxvY2sgbXQtMTVcIlxyXG4gICAgOmNsYXNzPVwiW2lzRW5hYmxlZCA/ICdzdG9wJyA6ICdzdGFydCcsIGlzRGlzYWJsZWQgPyAnZGlzYWJsZWQnIDogJyddXCJcclxuICAgIEBjbGljaz1cImNoYW5nZVN0YXR1cygpXCJcclxuICA+XHJcbiAgICA8aW1nIHYtaWY9XCJpc0VuYWJsZWRcIiBjbGFzcz1cIm1sLTVcIiBzcmM9XCIuLi9hc3NldHMvaWNvbnMvc3RvcC5zdmdcIiBoZWlnaHQ9XCIyMFwiIC8+XHJcbiAgICA8aW1nIHYtaWY9XCIhaXNFbmFibGVkXCIgY2xhc3M9XCJtbC01XCIgc3JjPVwiLi4vYXNzZXRzL2ljb25zL3N0YXJ0LnN2Z1wiIGhlaWdodD1cIjIyXCIgLz5cclxuICAgIHt7ICFpc0VuYWJsZWQgPyB0KCdzdGFydC5tZXNzYWdlJykgOiB0KCdzdG9wLm1lc3NhZ2UnKSB9fVxyXG4gIDwvYnV0dG9uPlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdCBsYW5nPVwidHNcIj5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gIG5hbWU6ICdQb21vZG9ybycsXHJcbn07XHJcbjwvc2NyaXB0PlxyXG5cclxuPHNjcmlwdCBsYW5nPVwidHNcIiBzZXR1cD5cclxuaW1wb3J0IHsgUmVmLCBjb21wdXRlZCwgb25Nb3VudGVkLCByZWYgfSBmcm9tICd2dWUnO1xyXG5pbXBvcnQgeyBjb252ZXJ0SEhNTVRvU2Vjb25kcywgY29udmVydFNlY29uZHNUb0hITU0gfSBmcm9tICcuLi91dGlscy9jb252ZXJ0ZXInO1xyXG5pbXBvcnQgeyB1c2VJMThuIH0gZnJvbSAndnVlLWkxOG4nO1xyXG5pbXBvcnQgeyBpbmplY3RTdG9yYWdlIH0gZnJvbSAnLi4vc3RvcmFnZS9pbmplY3Qtc3RvcmFnZSc7XHJcbmltcG9ydCB7XHJcbiAgSVNfUE9NT0RPUk9fRU5BQkxFRF9ERUZBVUxULFxyXG4gIFBPTU9ET1JPX0FVRElPX0FGVEVSX0ZJTklTSEVEX0RFRkFVTFQsXHJcbiAgUE9NT0RPUk9fQVVESU9fQUZURVJfUkVTVF9ERUZBVUxULFxyXG4gIFBPTU9ET1JPX0FVRElPX0FGVEVSX1dPUktfREVGQVVMVCxcclxuICBQT01PRE9ST19GUkVRVUVOQ1lfREVGQVVMVCxcclxuICBQT01PRE9ST19JTlRFUlZBTF9SRVNUX0RFRkFVTFQsXHJcbiAgUE9NT0RPUk9fSU5URVJWQUxfV09SS19ERUZBVUxULFxyXG4gIFN0b3JhZ2VQYXJhbXMsXHJcbn0gZnJvbSAnLi4vc3RvcmFnZS9zdG9yYWdlLXBhcmFtcyc7XHJcbmltcG9ydCB7IFRpbWUgfSBmcm9tICcuLi91dGlscy90aW1lJztcclxuaW1wb3J0IHsgbG9nZ2VyIH0gZnJvbSAnLi4vdXRpbHMvbG9nZ2VyJztcclxuaW1wb3J0IHsgdXNlQmFkZ2UsIEJhZGdlQ29sb3IsIEJhZGdlSWNvbiB9IGZyb20gJy4uL2Z1bmN0aW9ucy91c2VCYWRnZSc7XHJcbmltcG9ydCB7IFBvbW9kb3JvU291bmRzIH0gZnJvbSAnLi4vdXRpbHMvcG9tb2Rvcm8nO1xyXG5pbXBvcnQgUG9tb2Rvcm9Tb3VuZHNTZWxlY3RvciBmcm9tICcuLi9jb21wb25lbnRzL1BvbW9kb3JvU291bmRzU2VsZWN0b3IudnVlJztcclxuaW1wb3J0IEJyb3dzZXIgZnJvbSAnd2ViZXh0ZW5zaW9uLXBvbHlmaWxsJztcclxuXHJcbmNvbnN0IHsgdCB9ID0gdXNlSTE4bigpO1xyXG5jb25zdCBzZXR0aW5nc1N0b3JhZ2UgPSBpbmplY3RTdG9yYWdlKCk7XHJcblxyXG5jb25zdCB3b3JrVGltZSA9IHJlZjxUaW1lPih7XHJcbiAgaG91cnM6IDAsXHJcbiAgbWludXRlczogMjUsXHJcbn0pO1xyXG5jb25zdCByZXN0VGltZSA9IHJlZjxUaW1lPih7XHJcbiAgaG91cnM6IDAsXHJcbiAgbWludXRlczogNSxcclxufSk7XHJcbmNvbnN0IGZyZXF1ZW5jeSA9IHJlZjxudW1iZXI+KDMpO1xyXG5jb25zdCBpc0VuYWJsZWQgPSByZWY8Ym9vbGVhbj4oKTtcclxuY29uc3QgYXVkaW9BZnRlcldvcmsgPSByZWY8UG9tb2Rvcm9Tb3VuZHM+KCk7XHJcbmNvbnN0IGF1ZGlvQWZ0ZXJSZXN0ID0gcmVmPFBvbW9kb3JvU291bmRzPigpO1xyXG5jb25zdCBhdWRpb0FmdGVyRmluaXNoZWQgPSByZWY8UG9tb2Rvcm9Tb3VuZHM+KCk7XHJcbmNvbnN0IGlzRGlzYWJsZWQgPSBjb21wdXRlZChcclxuICAoKSA9PiBmcmVxdWVuY3kudmFsdWUgPD0gMCB8fCB0aW1lSXNFbXB0eSh3b3JrVGltZSkgfHwgdGltZUlzRW1wdHkocmVzdFRpbWUpLFxyXG4pO1xyXG5cclxub25Nb3VudGVkKGFzeW5jICgpID0+IHtcclxuICBpc0VuYWJsZWQudmFsdWUgPSBhd2FpdCBzZXR0aW5nc1N0b3JhZ2UuZ2V0VmFsdWUoXHJcbiAgICBTdG9yYWdlUGFyYW1zLklTX1BPTU9ET1JPX0VOQUJMRUQsXHJcbiAgICBJU19QT01PRE9ST19FTkFCTEVEX0RFRkFVTFQsXHJcbiAgKTtcclxuICB3b3JrVGltZS52YWx1ZSA9IGNvbnZlcnRTZWNvbmRzVG9ISE1NKFxyXG4gICAgYXdhaXQgc2V0dGluZ3NTdG9yYWdlLmdldFZhbHVlKFxyXG4gICAgICBTdG9yYWdlUGFyYW1zLlBPTU9ET1JPX0lOVEVSVkFMX1dPUkssXHJcbiAgICAgIFBPTU9ET1JPX0lOVEVSVkFMX1dPUktfREVGQVVMVCxcclxuICAgICksXHJcbiAgKTtcclxuICByZXN0VGltZS52YWx1ZSA9IGNvbnZlcnRTZWNvbmRzVG9ISE1NKFxyXG4gICAgYXdhaXQgc2V0dGluZ3NTdG9yYWdlLmdldFZhbHVlKFxyXG4gICAgICBTdG9yYWdlUGFyYW1zLlBPTU9ET1JPX0lOVEVSVkFMX1JFU1QsXHJcbiAgICAgIFBPTU9ET1JPX0lOVEVSVkFMX1JFU1RfREVGQVVMVCxcclxuICAgICksXHJcbiAgKTtcclxuICBmcmVxdWVuY3kudmFsdWUgPSBhd2FpdCBzZXR0aW5nc1N0b3JhZ2UuZ2V0VmFsdWUoXHJcbiAgICBTdG9yYWdlUGFyYW1zLlBPTU9ET1JPX0ZSRVFVRU5DWSxcclxuICAgIFBPTU9ET1JPX0ZSRVFVRU5DWV9ERUZBVUxULFxyXG4gICk7XHJcblxyXG4gIGF1ZGlvQWZ0ZXJXb3JrLnZhbHVlID0gYXdhaXQgc2V0dGluZ3NTdG9yYWdlLmdldFZhbHVlKFxyXG4gICAgU3RvcmFnZVBhcmFtcy5QT01PRE9ST19BVURJT19BRlRFUl9XT1JLLFxyXG4gICAgUE9NT0RPUk9fQVVESU9fQUZURVJfV09SS19ERUZBVUxULFxyXG4gICk7XHJcblxyXG4gIGF1ZGlvQWZ0ZXJSZXN0LnZhbHVlID0gYXdhaXQgc2V0dGluZ3NTdG9yYWdlLmdldFZhbHVlKFxyXG4gICAgU3RvcmFnZVBhcmFtcy5QT01PRE9ST19BVURJT19BRlRFUl9SRVNULFxyXG4gICAgUE9NT0RPUk9fQVVESU9fQUZURVJfUkVTVF9ERUZBVUxULFxyXG4gICk7XHJcblxyXG4gIGF1ZGlvQWZ0ZXJGaW5pc2hlZC52YWx1ZSA9IGF3YWl0IHNldHRpbmdzU3RvcmFnZS5nZXRWYWx1ZShcclxuICAgIFN0b3JhZ2VQYXJhbXMuUE9NT0RPUk9fQVVESU9fQUZURVJfRklOSVNIRUQsXHJcbiAgICBQT01PRE9ST19BVURJT19BRlRFUl9GSU5JU0hFRF9ERUZBVUxULFxyXG4gICk7XHJcbn0pO1xyXG5cclxuZnVuY3Rpb24gdGltZUlzRW1wdHkodGltZTogUmVmPFRpbWUgfCB1bmRlZmluZWQ+KSB7XHJcbiAgcmV0dXJuIHRpbWUudmFsdWUgPT0gdW5kZWZpbmVkIHx8ICh0aW1lLnZhbHVlLmhvdXJzID09IDAgJiYgdGltZS52YWx1ZS5taW51dGVzID09IDApO1xyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiBjaGFuZ2VTdGF0dXMoKSB7XHJcbiAgYXdhaXQgc2V0dGluZ3NTdG9yYWdlLnNhdmVWYWx1ZShTdG9yYWdlUGFyYW1zLklTX1BPTU9ET1JPX0VOQUJMRUQsICFpc0VuYWJsZWQudmFsdWUpO1xyXG4gIGF3YWl0IHNldHRpbmdzU3RvcmFnZS5zYXZlVmFsdWUoXHJcbiAgICBTdG9yYWdlUGFyYW1zLlBPTU9ET1JPX0lOVEVSVkFMX1dPUkssXHJcbiAgICBjb252ZXJ0SEhNTVRvU2Vjb25kcyh3b3JrVGltZS52YWx1ZS5ob3Vycywgd29ya1RpbWUudmFsdWUubWludXRlcyksXHJcbiAgKTtcclxuICBhd2FpdCBzZXR0aW5nc1N0b3JhZ2Uuc2F2ZVZhbHVlKFxyXG4gICAgU3RvcmFnZVBhcmFtcy5QT01PRE9ST19JTlRFUlZBTF9SRVNULFxyXG4gICAgY29udmVydEhITU1Ub1NlY29uZHMocmVzdFRpbWUudmFsdWUuaG91cnMsIHJlc3RUaW1lLnZhbHVlLm1pbnV0ZXMpLFxyXG4gICk7XHJcbiAgYXdhaXQgc2V0dGluZ3NTdG9yYWdlLnNhdmVWYWx1ZShTdG9yYWdlUGFyYW1zLlBPTU9ET1JPX1NUQVJUX1RJTUUsIG5ldyBEYXRlKCkudG9TdHJpbmcoKSk7XHJcbiAgYXdhaXQgc2V0dGluZ3NTdG9yYWdlLnNhdmVWYWx1ZShTdG9yYWdlUGFyYW1zLlBPTU9ET1JPX0ZSRVFVRU5DWSwgZnJlcXVlbmN5LnZhbHVlKTtcclxuXHJcbiAgaXNFbmFibGVkLnZhbHVlID0gIWlzRW5hYmxlZC52YWx1ZTtcclxuXHJcbiAgaWYgKGlzRW5hYmxlZC52YWx1ZSlcclxuICAgIGF3YWl0IHVzZUJhZGdlKHtcclxuICAgICAgdGV4dDogbnVsbCxcclxuICAgICAgY29sb3I6IEJhZGdlQ29sb3Iubm9uZSxcclxuICAgICAgaWNvbjogQmFkZ2VJY29uLnBvbW9kb3JvV29ya2luZ1RpbWUsXHJcbiAgICB9KTtcclxuICBlbHNlIHtcclxuICAgIGF3YWl0IHNldHRpbmdzU3RvcmFnZS5zYXZlVmFsdWUoU3RvcmFnZVBhcmFtcy5QT01PRE9ST19TVEFSVF9USU1FLCBudWxsKTtcclxuICAgIGF3YWl0IHVzZUJhZGdlKHtcclxuICAgICAgdGV4dDogbnVsbCxcclxuICAgICAgY29sb3I6IEJhZGdlQ29sb3Iubm9uZSxcclxuICAgICAgaWNvbjogQmFkZ2VJY29uLmRlZmF1bHQsXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGxvZ2dlci5sb2coYENoYW5nZSBwb21vZG9ybyBzdGF0dXMgdG8gJHtTdHJpbmcoaXNFbmFibGVkLnZhbHVlKS50b1VwcGVyQ2FzZSgpfWApO1xyXG59XHJcblxyXG5mdW5jdGlvbiBwbGF5QXVkaW8oc291bmQ6IFBvbW9kb3JvU291bmRzKSB7XHJcbiAgY29uc3QgbXlBdWRpbyA9IG5ldyBBdWRpbyhCcm93c2VyLnJ1bnRpbWUuZ2V0VVJMKGBhc3NldHMvcG9tb2Rvcm8tc291bmRzLyR7c291bmR9YCkpO1xyXG4gIG15QXVkaW8ucGxheSgpO1xyXG59XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlIHNjb3BlZD5cclxuLnBvbW9kb3JvLWJsb2NrIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3RhcnQ7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG4uZGF0ZS1waWNrZXIge1xyXG4gIHdpZHRoOiAxMjBweDtcclxuICBtYXJnaW46IDAgMTVweDtcclxuICB2ZXJ0aWNhbC1hbGlnbjogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDEwcHggMDtcclxufVxyXG4uZnJlcXVlbmN5IHtcclxuICB3aWR0aDogNTBweDtcclxuICBwYWRkaW5nOiA1cHggMTBweDtcclxuICBoZWlnaHQ6IDIwcHg7XHJcbiAgbWFyZ2luOiBhdXRvIDA7XHJcbiAgbWFyZ2luLWxlZnQ6IDE1cHg7XHJcbn1cclxuLmJsb2NrZWQge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBmb250LXNpemU6IDEzcHg7XHJcbiAgY29sb3I6IGdyYXk7XHJcbiAgbWFyZ2luLWxlZnQ6IDU1cHg7XHJcbiAgbWFyZ2luLXRvcDogNXB4O1xyXG59XHJcbmJ1dHRvbiB7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGJvcmRlci1yYWRpdXM6IDdweDtcclxuICBoZWlnaHQ6IDM2cHg7XHJcbiAgbGluZS1oZWlnaHQ6IDM1cHg7XHJcbiAgcGFkZGluZzogMCAyMHB4O1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBtaW4td2lkdGg6IDgwcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHdpZHRoOiAyMDBweDtcclxufVxyXG5idXR0b24uc3RhcnQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig2MiwgMTQ4LCA2MikgIWltcG9ydGFudDtcclxufVxyXG5idXR0b24uc3RvcCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE5MSwgNTksIDU5KSAhaW1wb3J0YW50O1xyXG59XHJcbi5leHBsYW5hdGlvbi1ibG9jayB7XHJcbiAgbWFyZ2luOiAxMHB4IDA7XHJcbiAgcGFkZGluZzogMTVweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDdkN2ZmO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbn1cclxuLmV4cGxhbmF0aW9uLWJsb2NrIC5leHBsYW5hdGlvbiB7XHJcbiAgZm9udC1zaXplOiAxNXB4O1xyXG4gIGNvbG9yOiBibGFjaztcclxufVxyXG4uZGlzYWJsZWQge1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgb3BhY2l0eTogMC41O1xyXG59XHJcbjwvc3R5bGU+XHJcbiIsIjx0ZW1wbGF0ZT5cclxuICA8ZGl2IGNsYXNzPVwibWFpblwiPlxyXG4gICAgPHAgY2xhc3M9XCJoZWFkZXJcIj57eyB0KCd0cnlNeU90aGVyQXBwcy5tZXNzYWdlJykgfX08L3A+XHJcbiAgICA8ZGl2IGNsYXNzPVwiYXBwLWJsb2NrXCIgQGNsaWNrPVwib3BlbkFwcExpbmsoQXBwLkNsZWFyWW91dHViZSlcIj5cclxuICAgICAgPGRpdiBjbGFzcz1cImltZy1ibG9ja1wiPlxyXG4gICAgICAgIDxpbWcgc3JjPVwiLi4vYXNzZXRzL2ljb25zL2NsZWFyLXlvdXR1YmUtbG9nby5zdmdcIiBoZWlnaHQ9XCI0NVwiIC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxwIGNsYXNzPVwidGl0bGVcIj57eyB0KCdjbGVhcllvdXR1YmUubWVzc2FnZScpIH19PC9wPlxyXG4gICAgICAgIDxwIGNsYXNzPVwiZGVzY3JpcHRpb25cIj5cclxuICAgICAgICAgIHt7IHQoJ2NsZWFyWW91dHViZS5kZXNjcmlwdGlvbicpIH19XHJcbiAgICAgICAgPC9wPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdCBsYW5nPVwidHNcIj5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gIG5hbWU6ICdNeUFwcHMnLFxyXG59O1xyXG48L3NjcmlwdD5cclxuXHJcbjxzY3JpcHQgbGFuZz1cInRzXCIgc2V0dXA+XHJcbmltcG9ydCB7IHVzZUkxOG4gfSBmcm9tICd2dWUtaTE4bic7XHJcbmltcG9ydCB7IENIUk9NRV9TVE9SRV9DTEVBUl9ZT1VUVUJFX1VSTCB9IGZyb20gJy4uL3V0aWxzL2Nocm9tZS11cmwnO1xyXG5jb25zdCB7IHQgfSA9IHVzZUkxOG4oKTtcclxuXHJcbmVudW0gQXBwIHtcclxuICBDbGVhcllvdXR1YmUsXHJcbn1cclxuXHJcbmZ1bmN0aW9uIG9wZW5BcHBMaW5rKGFwcDogQXBwKSB7XHJcbiAgc3dpdGNoIChhcHApIHtcclxuICAgIGNhc2UgQXBwLkNsZWFyWW91dHViZTpcclxuICAgICAgd2luZG93Lm9wZW4oQ0hST01FX1NUT1JFX0NMRUFSX1lPVVRVQkVfVVJMLCAnX2JsYW5rJyk7XHJcbiAgICAgIGJyZWFrO1xyXG4gIH1cclxufVxyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZSBzY29wZWQ+XHJcbi5tYWluIHtcclxuICBtYXJnaW4tdG9wOiA1MHB4O1xyXG59XHJcbi5oZWFkZXIge1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbn1cclxuLmFwcC1ibG9jayB7XHJcbiAgbWFyZ2luOiAyMHB4IDA7XHJcbiAgcGFkZGluZzogMTBweCAyMHB4O1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWZlZmVmO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgbWluLXdpZHRoOiA2NTVweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgZ2FwOiAyMHB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4uYXBwLWJsb2NrIC5pbWctYmxvY2sge1xyXG4gIG1hcmdpbjogYXV0byAwO1xyXG59XHJcbi50aXRsZSB7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBmb250LXNpemU6IDE1cHg7XHJcbn1cclxuLmRlc2NyaXB0aW9uIHtcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBjb2xvcjogYmxhY2s7XHJcbn1cclxuaW1nIHtcclxuICBtYXJnaW46IGF1dG87XHJcbn1cclxuPC9zdHlsZT5cclxuIiwiPHRlbXBsYXRlPlxyXG4gIDxkaXYgY2xhc3M9XCJhYm91dFwiPlxyXG4gICAgPGxhYmVsIGNsYXNzPVwiYWJvdXQtbGFiZWxcIlxyXG4gICAgICA+R2l0SHViOlxyXG4gICAgICA8YSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL1N0aWdtYXRvei93ZWItYWN0aXZpdHktdGltZS10cmFja2VyXCIgdGFyZ2V0PVwiX2JsYW5rXCJcclxuICAgICAgICA+Z2l0aHViLmNvbS9TdGlnbWF0b3ovd2ViLWFjdGl2aXR5LXRpbWUtdHJhY2tlcjwvYVxyXG4gICAgICA+PC9sYWJlbFxyXG4gICAgPlxyXG4gICAgPGxhYmVsIGNsYXNzPVwiYWJvdXQtbGFiZWxcIlxyXG4gICAgICA+e3sgdCgnZ2l0aHViLm1lc3NhZ2UnKSB9fVxyXG4gICAgICA8YSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL1N0aWdtYXRvei93ZWItYWN0aXZpdHktdGltZS10cmFja2VyL2lzc3Vlc1wiIHRhcmdldD1cIl9ibGFua1wiXHJcbiAgICAgICAgPkdpdEh1YiBpc3N1ZXMgcGFnZTwvYVxyXG4gICAgICA+PC9sYWJlbFxyXG4gICAgPlxyXG4gICAgPGxhYmVsIGNsYXNzPVwiYWJvdXQtbGFiZWxcIlxyXG4gICAgICA+e3sgdCgncXVlc3Rpb24ubWVzc2FnZScpIH19XHJcbiAgICAgIDxhIDpocmVmPVwiQ0hST01FX1NUT1JFX1NVUFBPUlRfVVJMXCIgdGFyZ2V0PVwiX2JsYW5rXCI+e3sgdCgnc3VwcG9ydEZvcm0ubWVzc2FnZScpIH19PC9hXHJcbiAgICAgID4uPC9sYWJlbFxyXG4gICAgPlxyXG4gICAgPGxhYmVsIGNsYXNzPVwiYWJvdXQtbGFiZWxcIlxyXG4gICAgICA+e3sgdCgnZG9Zb3VFbmpveS5tZXNzYWdlJykgfX1cclxuICAgICAgPGEgOmhyZWY9XCJDSFJPTUVfU1RPUkVfUkVWSUVXX1VSTFwiIHRhcmdldD1cIl9ibGFua1wiPnt7IHQoJ3Jldmlldy5tZXNzYWdlJykgfX08L2E+PC9sYWJlbFxyXG4gICAgPlxyXG4gIDwvZGl2PlxyXG4gIDxNeUFwcHMgLz5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQgbGFuZz1cInRzXCI+XHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICBuYW1lOiAnQWJvdXQnLFxyXG59O1xyXG48L3NjcmlwdD5cclxuXHJcbjxzY3JpcHQgbGFuZz1cInRzXCIgc2V0dXA+XHJcbmltcG9ydCBNeUFwcHMgZnJvbSAnLi9NeUFwcHMudnVlJztcclxuaW1wb3J0IHsgdXNlSTE4biB9IGZyb20gJ3Z1ZS1pMThuJztcclxuaW1wb3J0IHsgQ0hST01FX1NUT1JFX1NVUFBPUlRfVVJMLCBDSFJPTUVfU1RPUkVfUkVWSUVXX1VSTCB9IGZyb20gJy4uL3V0aWxzL2Nocm9tZS11cmwnO1xyXG5jb25zdCB7IHQgfSA9IHVzZUkxOG4oKTtcclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGUgc2NvcGVkPlxyXG4uYWJvdXQgLmFib3V0LWxhYmVsIHtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxuICBkaXNwbGF5OiBibG9jaztcclxufVxyXG48L3N0eWxlPlxyXG4iLCI8dGVtcGxhdGU+XHJcbiAgPGRpdiBjbGFzcz1cImNvbnRhaW5lclwiPlxyXG4gICAgPGRpdiBjbGFzcz1cImJsb2NrXCI+XHJcbiAgICAgIDxwIGNsYXNzPVwidGl0bGVcIj57eyB0KCdhbGxUaW1lLm1lc3NhZ2UnKSB9fTwvcD5cclxuICAgICAgPHAgY2xhc3M9XCJ2YWx1ZVwiPlxyXG4gICAgICAgIHt7IGNvbnZlcnRTdW1tYXJ5VGltZVRvU3RyaW5nKGRldGFpbHMuc3VtbWFyeVRpbWUpIH19XHJcbiAgICAgIDwvcD5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdiBjbGFzcz1cImJsb2NrXCI+XHJcbiAgICAgIDxwIGNsYXNzPVwidGl0bGVcIj57eyB0KCdzZXNzaW9ucy5tZXNzYWdlJykgfX08L3A+XHJcbiAgICAgIDxwIGNsYXNzPVwidmFsdWVcIj5cclxuICAgICAgICB7eyBkZXRhaWxzLnNlc3Npb25zIH19XHJcbiAgICAgIDwvcD5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdiBjbGFzcz1cImJsb2NrXCI+XHJcbiAgICAgIDxwIGNsYXNzPVwidGl0bGVcIj57eyB0KCdhdmVyYWdlRGFpbHlVc2FnZS5tZXNzYWdlJykgfX08L3A+XHJcbiAgICAgIDxwIGNsYXNzPVwidmFsdWVcIj5cclxuICAgICAgICB7eyBjb252ZXJ0U3VtbWFyeVRpbWVUb1N0cmluZyhkZXRhaWxzLmF2ZXJhZ2VUaW1lKSB9fVxyXG4gICAgICA8L3A+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQgbGFuZz1cInRzXCI+XHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICBuYW1lOiAnV2Vic2l0ZVN0YXRzRGV0YWlscycsXHJcbn07XHJcbjwvc2NyaXB0PlxyXG5cclxuPHNjcmlwdCBsYW5nPVwidHNcIiBzZXR1cD5cclxuaW1wb3J0IHsgdXNlSTE4biB9IGZyb20gJ3Z1ZS1pMThuJztcclxuaW1wb3J0IHsgVGFiTGlzdEJ5RGF5cyB9IGZyb20gJy4uL2R0by90YWJMaXN0U3VtbWFyeSc7XHJcbmltcG9ydCB7IGNvbnZlcnRTdW1tYXJ5VGltZVRvU3RyaW5nIH0gZnJvbSAnLi4vdXRpbHMvY29udmVydGVyJztcclxuXHJcbmRlZmluZVByb3BzPHtcclxuICBkZXRhaWxzOiBUYWJMaXN0QnlEYXlzO1xyXG59PigpO1xyXG5cclxuY29uc3QgeyB0IH0gPSB1c2VJMThuKCk7XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlIHNjb3BlZD5cclxuLnRpdGxlIHtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxufVxyXG4uY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIHdpZHRoOiBhdXRvO1xyXG59XHJcbi5ibG9jayB7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjM3IDIzNyAyMzcpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgbWFyZ2luLXJpZ2h0OiAzMHB4O1xyXG4gIGJveC1zaGFkb3c6IDEycHggMTJweCAycHggMXB4IHJnYigxODUgMjU1IDE3MSk7XHJcbn1cclxuLmJsb2NrIHAudGl0bGUge1xyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxuICBjb2xvcjogZ3JleTtcclxufVxyXG4uYmxvY2sgcC52YWx1ZSB7XHJcbiAgbWFyZ2luOiA1cHg7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbn1cclxuPC9zdHlsZT5cclxuIiwiaW1wb3J0IHsgQ3VycmVudFRhYkl0ZW0gfSBmcm9tICcuLi9kdG8vY3VycmVudFRhYkl0ZW0nO1xyXG5pbXBvcnQgeyBEYXlUYWJzLCBUYWJMaXN0QnlEYXlzIH0gZnJvbSAnLi4vZHRvL3RhYkxpc3RTdW1tYXJ5JztcclxuaW1wb3J0IHsgaW5qZWN0VGFic1JlcG9zaXRvcnkgfSBmcm9tICcuLi9yZXBvc2l0b3J5L2luamVjdC10YWJzLXJlcG9zaXRvcnknO1xyXG5pbXBvcnQgeyBpc1NhbWVEYXkgfSBmcm9tICdkYXRlLWZucyc7XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXNlVGFiU3RhdHNCeURheXMoXHJcbiAgZGF0ZUZyb206IERhdGUsXHJcbiAgZGF0ZVRvOiBEYXRlLFxyXG4gIGRvbWFpbjogc3RyaW5nLFxyXG4pOiBQcm9taXNlPFRhYkxpc3RCeURheXMgfCBudWxsPiB7XHJcbiAgY29uc3QgcmVwbyA9IGF3YWl0IGluamVjdFRhYnNSZXBvc2l0b3J5KCk7XHJcbiAgY29uc3QgdGFiID0gcmVwby5nZXRUYWIoZG9tYWluKTtcclxuICBsZXQgZGF5c1RhYnM6IERheVRhYnNbXSA9IFtdO1xyXG5cclxuICBpZiAodGFiID09IHVuZGVmaW5lZCkgcmV0dXJuIG51bGw7XHJcblxyXG4gIGNvbnN0IGlzVGhlU2FtZURheSA9IGlzU2FtZURheShkYXRlRnJvbSwgZGF0ZVRvKTtcclxuXHJcbiAgY29uc3QgdW5Tb3J0ZWRUYWJzQnlEYXlzID0gaXNUaGVTYW1lRGF5XHJcbiAgICA/IHRhYi5kYXlzLmZpbHRlcihzID0+IGlzU2FtZURheShuZXcgRGF0ZShzLmRhdGUpLCBkYXRlRnJvbSkpXHJcbiAgICA6IHRhYi5kYXlzLmZpbHRlcihzID0+IG5ldyBEYXRlKHMuZGF0ZSkgPj0gZGF0ZUZyb20gJiYgbmV3IERhdGUocy5kYXRlKSA8PSBkYXRlVG8pO1xyXG5cclxuICBpZiAodW5Tb3J0ZWRUYWJzQnlEYXlzLmxlbmd0aCA9PSAwKVxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgZGF5czogW10sXHJcbiAgICAgIGF2ZXJhZ2VUaW1lOiAwLFxyXG4gICAgICBzdW1tYXJ5VGltZTogMCxcclxuICAgICAgc2Vzc2lvbnM6IDAsXHJcbiAgICB9O1xyXG5cclxuICB1blNvcnRlZFRhYnNCeURheXMuZm9yRWFjaCh0YWJEYXkgPT4ge1xyXG4gICAgaWYgKFxyXG4gICAgICAobmV3IERhdGUodGFiRGF5LmRhdGUpID49IGRhdGVGcm9tICYmIG5ldyBEYXRlKHRhYkRheS5kYXRlKSA8PSBkYXRlVG8pIHx8XHJcbiAgICAgIChpc1RoZVNhbWVEYXkgJiYgaXNTYW1lRGF5KG5ldyBEYXRlKHRhYkRheS5kYXRlKSwgZGF0ZUZyb20pKVxyXG4gICAgKSB7XHJcbiAgICAgIGxldCBkYXlUYWIgPSBkYXlzVGFicy5maW5kKHggPT4geC5kYXkgPT0gdGFiRGF5LmRhdGUpO1xyXG4gICAgICBpZiAoZGF5VGFiID09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIGRheVRhYiA9IHtcclxuICAgICAgICAgIGRheTogdGFiRGF5LmRhdGUsXHJcbiAgICAgICAgICB0YWJzOiBbXSxcclxuICAgICAgICAgIHRpbWU6IHRhYkRheS5zdW1tYXJ5LFxyXG4gICAgICAgICAgc2Vzc2lvbnM6IHRhYkRheS5jb3VudGVyLFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgZGF5VGFiLnRhYnMucHVzaCh7XHJcbiAgICAgICAgICBmYXZpY29uOiB0YWIuZmF2aWNvbixcclxuICAgICAgICAgIHVybDogdGFiLnVybCxcclxuICAgICAgICAgIHNlc3Npb25zOiB0YWJEYXkuY291bnRlcixcclxuICAgICAgICAgIHN1bW1hcnlUaW1lOiB0YWJEYXkuc3VtbWFyeSxcclxuICAgICAgICB9KTtcclxuICAgICAgICBkYXlzVGFicy5wdXNoKGRheVRhYik7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgZGF5VGFiLnRpbWUgKz0gdGFiRGF5LnN1bW1hcnk7XHJcbiAgICAgICAgZGF5VGFiLnNlc3Npb25zICs9IHRhYkRheS5jb3VudGVyO1xyXG4gICAgICAgIGRheVRhYi50YWJzLnB1c2goe1xyXG4gICAgICAgICAgZmF2aWNvbjogdGFiLmZhdmljb24sXHJcbiAgICAgICAgICB1cmw6IHRhYi51cmwsXHJcbiAgICAgICAgICBzZXNzaW9uczogdGFiRGF5LmNvdW50ZXIsXHJcbiAgICAgICAgICBzdW1tYXJ5VGltZTogdGFiRGF5LnN1bW1hcnksXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9KTtcclxuXHJcbiAgZGF5c1RhYnMuc29ydChmdW5jdGlvbiAoYSwgYikge1xyXG4gICAgcmV0dXJuIG5ldyBEYXRlKGEuZGF5KS52YWx1ZU9mKCkgLSBuZXcgRGF0ZShiLmRheSkudmFsdWVPZigpO1xyXG4gIH0pO1xyXG5cclxuICBkYXlzVGFicy5mb3JFYWNoKGRheVRhYiA9PiB7XHJcbiAgICBkYXlUYWIudGFicy5zb3J0KGZ1bmN0aW9uIChhOiBDdXJyZW50VGFiSXRlbSwgYjogQ3VycmVudFRhYkl0ZW0pIHtcclxuICAgICAgcmV0dXJuIGIuc3VtbWFyeVRpbWUgLSBhLnN1bW1hcnlUaW1lO1xyXG4gICAgfSk7XHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IHN1bW1hcnlUaW1lID0gZGF5c1RhYnNcclxuICAgIC5tYXAoeCA9PiB4LnRpbWUpXHJcbiAgICAucmVkdWNlKGZ1bmN0aW9uIChhLCBiKSB7XHJcbiAgICAgIHJldHVybiBhICsgYjtcclxuICAgIH0pO1xyXG5cclxuICBjb25zdCB0b3RhbFNlc3Npb25zID0gZGF5c1RhYnNcclxuICAgIC5tYXAoeCA9PiB4LnNlc3Npb25zKVxyXG4gICAgLnJlZHVjZShmdW5jdGlvbiAoYSwgYikge1xyXG4gICAgICByZXR1cm4gYSArIGI7XHJcbiAgICB9KTtcclxuXHJcbiAgY29uc3QgYXZlcmFnZVRpbWUgPSBNYXRoLnJvdW5kKHN1bW1hcnlUaW1lIC8gZGF5c1RhYnMubGVuZ3RoKTtcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIGRheXM6IGRheXNUYWJzLFxyXG4gICAgc3VtbWFyeVRpbWU6IHN1bW1hcnlUaW1lLFxyXG4gICAgYXZlcmFnZVRpbWU6IGF2ZXJhZ2VUaW1lLFxyXG4gICAgc2Vzc2lvbnM6IHRvdGFsU2Vzc2lvbnMsXHJcbiAgfTtcclxufVxyXG4iLCI8dGVtcGxhdGU+XHJcbiAgPGRpdiBjbGFzcz1cInNldHRpbmdzLWl0ZW1cIj5cclxuICAgIDxsYWJlbCBjbGFzcz1cInRpdGxlIGxpbmtcIiBAY2xpY2s9XCJvcGVuUGFnZShTZXR0aW5nc1RhYi5EYXNoYm9hcmQpXCI+XHJcbiAgICAgIHt7IHQoJ2Rhc2hib2FyZC5tZXNzYWdlJykgfX1cclxuICAgIDwvbGFiZWw+XHJcbiAgICA8ZGl2IGNsYXNzPVwibm8tZGF0YVwiIHYtaWY9XCJpc0xvYWRpbmdcIj5cclxuICAgICAgPGltZyBoZWlnaHQ9XCI1NVwiIHNyYz1cIi4uL2Fzc2V0cy9pY29ucy9wcmVsb2FkZXIuZ2lmXCIgLz5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdiB2LWVsc2U+XHJcbiAgICAgIDxuby1kYXRhLWJ5LWRheXMgdi1pZj1cImNvdW50T2ZEYXlzID09IHVuZGVmaW5lZCB8fCAoY291bnRPZkRheXMgPT0gMCAmJiAhbm9EYXRhKVwiIC8+XHJcbiAgICAgIDxkaXYgdi1lbHNlLWlmPVwibm9EYXRhXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cIm5vLWRhdGFcIj5cclxuICAgICAgICAgIHt7IHQoJ25vRGF0YUZvclBlcmlvZC5tZXNzYWdlJykgfX1cclxuICAgICAgICAgIDxWdWVEYXRlUGlja2VyXHJcbiAgICAgICAgICAgIHJhbmdlXHJcbiAgICAgICAgICAgIDplbmFibGUtdGltZS1waWNrZXI9XCJmYWxzZVwiXHJcbiAgICAgICAgICAgIGNsYXNzPVwiZGF0ZS1waWNrZXJcIlxyXG4gICAgICAgICAgICB2LW1vZGVsPVwic2VsZWN0ZWREYXRlXCJcclxuICAgICAgICAgICAgOnByZXNldC1yYW5nZXM9XCJwcmVzZXRSYW5nZXNcIlxyXG4gICAgICAgICAgICBAdXBkYXRlOm1vZGVsLXZhbHVlPVwiaGFuZGxlRGF0ZVwiXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDx0ZW1wbGF0ZSAjeWVhcmx5PVwieyBsYWJlbCwgcmFuZ2UsIHByZXNldERhdGVSYW5nZSB9XCI+XHJcbiAgICAgICAgICAgICAgPHNwYW4gQGNsaWNrPVwicHJlc2V0RGF0ZVJhbmdlKHJhbmdlKVwiPnt7IGxhYmVsIH19PC9zcGFuPlxyXG4gICAgICAgICAgICA8L3RlbXBsYXRlPjwvVnVlRGF0ZVBpY2tlclxyXG4gICAgICAgICAgPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiB2LWVsc2U+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImRhdGUtYmxvY2tcIj5cclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxGYXZpY29uIDpmYXZpY29uPVwidGFiPy5mYXZpY29uXCIgOnR5cGU9XCJnZXRUeXBlT2ZVcmwodGFiPy51cmwhKVwiIC8+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidGl0bGVcIj4ge3sgdGFiPy51cmwgfX08L3NwYW4+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICA8VnVlRGF0ZVBpY2tlclxyXG4gICAgICAgICAgICByYW5nZVxyXG4gICAgICAgICAgICA6ZW5hYmxlLXRpbWUtcGlja2VyPVwiZmFsc2VcIlxyXG4gICAgICAgICAgICBjbGFzcz1cImRhdGUtcGlja2VyIG10LTEwXCJcclxuICAgICAgICAgICAgdi1tb2RlbD1cInNlbGVjdGVkRGF0ZVwiXHJcbiAgICAgICAgICAgIDpwcmVzZXQtcmFuZ2VzPVwicHJlc2V0UmFuZ2VzXCJcclxuICAgICAgICAgICAgQHVwZGF0ZTptb2RlbC12YWx1ZT1cImhhbmRsZURhdGVcIlxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8dGVtcGxhdGUgI3llYXJseT1cInsgbGFiZWwsIHJhbmdlLCBwcmVzZXREYXRlUmFuZ2UgfVwiPlxyXG4gICAgICAgICAgICAgIDxzcGFuIEBjbGljaz1cInByZXNldERhdGVSYW5nZShyYW5nZSlcIj57eyBsYWJlbCB9fTwvc3Bhbj5cclxuICAgICAgICAgICAgPC90ZW1wbGF0ZT48L1Z1ZURhdGVQaWNrZXJcclxuICAgICAgICAgID5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwibXQtMjAgbWwtMTAgbXItMTAgYnktZGF5cy1jaGFydFwiPlxyXG4gICAgICAgICAgPGJ5LWRheXMtY2hhcnQgOmRhdGE9XCJ0YWJJbmZvQnlEYXlzIVwiIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDx3ZWJzaXRlLXN0YXRzLWRldGFpbHMgOmRldGFpbHM9XCJ0YWJJbmZvQnlEYXlzIVwiIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0IGxhbmc9XCJ0c1wiPlxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgbmFtZTogJ1dlYnNpdGVTdGF0cycsXHJcbn07XHJcbjwvc2NyaXB0PlxyXG5cclxuPHNjcmlwdCBsYW5nPVwidHNcIiBzZXR1cD5cclxuaW1wb3J0IHsgdXNlSTE4biB9IGZyb20gJ3Z1ZS1pMThuJztcclxuaW1wb3J0IEZhdmljb24gZnJvbSAnLi9GYXZpY29uLnZ1ZSc7XHJcbmltcG9ydCBOb0RhdGFCeURheXMgZnJvbSAnLi9Ob0RhdGFCeURheXMudnVlJztcclxuaW1wb3J0IEJ5RGF5c0NoYXJ0IGZyb20gJy4uL2NvbXBvbmVudHMvQnlEYXlzQ2hhcnQudnVlJztcclxuaW1wb3J0IFdlYnNpdGVTdGF0c0RldGFpbHMgZnJvbSAnLi4vY29tcG9uZW50cy9XZWJzaXRlU3RhdHNEZXRhaWxzLnZ1ZSc7XHJcbmltcG9ydCB7IG9wZW5QYWdlIH0gZnJvbSAnLi4vdXRpbHMvb3Blbi1wYWdlJztcclxuaW1wb3J0IHsgY29tcHV0ZWQsIG9uTW91bnRlZCwgcmVmIH0gZnJvbSAndnVlJztcclxuaW1wb3J0IHsgU2V0dGluZ3NUYWIgfSBmcm9tICcuLi91dGlscy9lbnVtcyc7XHJcbmltcG9ydCB7IFRoaXNXZWVrUmFuZ2UsIHJhbmdlcyB9IGZyb20gJy4uL3V0aWxzL2RhdGUnO1xyXG5pbXBvcnQgeyB1c2VUYWJTdGF0c0J5RGF5cyB9IGZyb20gJy4uL2Z1bmN0aW9ucy91c2VUYWJTdGF0c0J5RGF5cyc7XHJcbmltcG9ydCB7IFRhYkxpc3RCeURheXMgfSBmcm9tICcuLi9kdG8vdGFiTGlzdFN1bW1hcnknO1xyXG5pbXBvcnQgeyBUYWIgfSBmcm9tICcuLi9lbnRpdHkvdGFiJztcclxuaW1wb3J0IHsgZ2V0VHlwZU9mVXJsIH0gZnJvbSAnLi4vdXRpbHMvZ2V0LXR5cGUtb2YtdXJsJztcclxuaW1wb3J0IHsgaW5qZWN0VGFic1JlcG9zaXRvcnkgfSBmcm9tICcuLi9yZXBvc2l0b3J5L2luamVjdC10YWJzLXJlcG9zaXRvcnknO1xyXG5cclxuY29uc3QgcHJvcHMgPSBkZWZpbmVQcm9wczx7XHJcbiAgZG9tYWluOiBzdHJpbmc7XHJcbn0+KCk7XHJcblxyXG5jb25zdCB7IHQgfSA9IHVzZUkxOG4oKTtcclxuY29uc3QgcHJlc2V0UmFuZ2VzID0gcmFuZ2VzKCk7XHJcblxyXG5jb25zdCB0YWJJbmZvQnlEYXlzID0gcmVmPFRhYkxpc3RCeURheXM+KCk7XHJcbmNvbnN0IGlzTG9hZGluZyA9IHJlZjxib29sZWFuPigpO1xyXG5jb25zdCBub0RhdGEgPSByZWY8Ym9vbGVhbj4oZmFsc2UpO1xyXG5jb25zdCBzZWxlY3RlZERhdGUgPSByZWY8RGF0ZVtdPigpO1xyXG5jb25zdCB0YWIgPSByZWY8VGFiPigpO1xyXG5cclxuY29uc3QgY291bnRPZkRheXMgPSBjb21wdXRlZCgoKSA9PlxyXG4gIHRhYkluZm9CeURheXMudmFsdWUgIT0gdW5kZWZpbmVkID8gdGFiSW5mb0J5RGF5cy52YWx1ZS5kYXlzLmxlbmd0aCA6IDAsXHJcbik7XHJcblxyXG5vbk1vdW50ZWQoYXN5bmMgKCkgPT4ge1xyXG4gIGlzTG9hZGluZy52YWx1ZSA9IHRydWU7XHJcbiAgc2VsZWN0ZWREYXRlLnZhbHVlID0gVGhpc1dlZWtSYW5nZTtcclxuICBjb25zdCBkYXRlRnJvbSA9IHNlbGVjdGVkRGF0ZS52YWx1ZT8uWzBdIGFzIERhdGU7XHJcbiAgY29uc3QgZGF0ZVRvID0gc2VsZWN0ZWREYXRlLnZhbHVlPy5bMV0gYXMgRGF0ZTtcclxuICBjb25zdCByZXBvID0gYXdhaXQgaW5qZWN0VGFic1JlcG9zaXRvcnkoKTtcclxuICB0YWIudmFsdWUgPSByZXBvLmdldFRhYihwcm9wcy5kb21haW4pO1xyXG4gIGlmICh0YWIgPT0gdW5kZWZpbmVkKSB7XHJcbiAgICBub0RhdGEudmFsdWUgPSB0cnVlO1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgYXdhaXQgbG9hZExpc3QoZGF0ZUZyb20sIGRhdGVUbyk7XHJcbn0pO1xyXG5cclxuYXN5bmMgZnVuY3Rpb24gbG9hZExpc3QoZGF0ZUZyb206IERhdGUsIGRhdGVUbzogRGF0ZSkge1xyXG4gIGNvbnN0IHRhYkxpc3QgPSBhd2FpdCB1c2VUYWJTdGF0c0J5RGF5cyhkYXRlRnJvbSwgZGF0ZVRvLCB0YWIudmFsdWU/LnVybCEpO1xyXG4gIGlmICh0YWJMaXN0ICE9IG51bGwpIHtcclxuICAgIHRhYkluZm9CeURheXMudmFsdWUgPSB0YWJMaXN0O1xyXG4gICAgaWYgKHRhYkxpc3QuZGF5cy5sZW5ndGggPT0gMCAmJiB0YWJMaXN0LnN1bW1hcnlUaW1lID09IDApIG5vRGF0YS52YWx1ZSA9IHRydWU7XHJcbiAgICBlbHNlIG5vRGF0YS52YWx1ZSA9IGZhbHNlO1xyXG4gIH1cclxuICBpc0xvYWRpbmcudmFsdWUgPSBmYWxzZTtcclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gaGFuZGxlRGF0ZShtb2RlbERhdGE6IERhdGVbXSkge1xyXG4gIHNlbGVjdGVkRGF0ZS52YWx1ZSA9IG1vZGVsRGF0YTtcclxuICBjb25zdCBkYXRlRnJvbSA9IHNlbGVjdGVkRGF0ZS52YWx1ZT8uWzBdIGFzIERhdGU7XHJcbiAgY29uc3QgZGF0ZVRvID0gc2VsZWN0ZWREYXRlLnZhbHVlPy5bMV0gYXMgRGF0ZTtcclxuICBhd2FpdCBsb2FkTGlzdChkYXRlRnJvbSwgZGF0ZVRvKTtcclxufVxyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZSBzY29wZWQ+XHJcbi5saW5rIHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgY29sb3I6IGdyZXk7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbn1cclxuLmRhdGUtYmxvY2sge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG59XHJcbi5ieS1kYXlzLWNoYXJ0IHtcclxuICBoZWlnaHQ6IDQwMHB4O1xyXG59XHJcbjwvc3R5bGU+XHJcbiIsImV4cG9ydCBkZWZhdWx0IFwiX19WSVRFX0FTU0VUX18zNTc2MWM4MV9fXCIiLCJleHBvcnQgZGVmYXVsdCBcIl9fVklURV9BU1NFVF9fOWRjYzhlMzhfX1wiIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYXNjZW5kaW5nKGEsIGIpIHtcbiAgcmV0dXJuIGEgPT0gbnVsbCB8fCBiID09IG51bGwgPyBOYU4gOiBhIDwgYiA/IC0xIDogYSA+IGIgPyAxIDogYSA+PSBiID8gMCA6IE5hTjtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGRlc2NlbmRpbmcoYSwgYikge1xuICByZXR1cm4gYSA9PSBudWxsIHx8IGIgPT0gbnVsbCA/IE5hTlxuICAgIDogYiA8IGEgPyAtMVxuICAgIDogYiA+IGEgPyAxXG4gICAgOiBiID49IGEgPyAwXG4gICAgOiBOYU47XG59XG4iLCJpbXBvcnQgYXNjZW5kaW5nIGZyb20gXCIuL2FzY2VuZGluZy5qc1wiO1xuaW1wb3J0IGRlc2NlbmRpbmcgZnJvbSBcIi4vZGVzY2VuZGluZy5qc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBiaXNlY3RvcihmKSB7XG4gIGxldCBjb21wYXJlMSwgY29tcGFyZTIsIGRlbHRhO1xuXG4gIC8vIElmIGFuIGFjY2Vzc29yIGlzIHNwZWNpZmllZCwgcHJvbW90ZSBpdCB0byBhIGNvbXBhcmF0b3IuIEluIHRoaXMgY2FzZSB3ZVxuICAvLyBjYW4gdGVzdCB3aGV0aGVyIHRoZSBzZWFyY2ggdmFsdWUgaXMgKHNlbGYtKSBjb21wYXJhYmxlLiBXZSBjYW7igJl0IGRvIHRoaXNcbiAgLy8gZm9yIGEgY29tcGFyYXRvciAoZXhjZXB0IGZvciBzcGVjaWZpYywga25vd24gY29tcGFyYXRvcnMpIGJlY2F1c2Ugd2UgY2Fu4oCZdFxuICAvLyB0ZWxsIGlmIHRoZSBjb21wYXJhdG9yIGlzIHN5bW1ldHJpYywgYW5kIGFuIGFzeW1tZXRyaWMgY29tcGFyYXRvciBjYW7igJl0IGJlXG4gIC8vIHVzZWQgdG8gdGVzdCB3aGV0aGVyIGEgc2luZ2xlIHZhbHVlIGlzIGNvbXBhcmFibGUuXG4gIGlmIChmLmxlbmd0aCAhPT0gMikge1xuICAgIGNvbXBhcmUxID0gYXNjZW5kaW5nO1xuICAgIGNvbXBhcmUyID0gKGQsIHgpID0+IGFzY2VuZGluZyhmKGQpLCB4KTtcbiAgICBkZWx0YSA9IChkLCB4KSA9PiBmKGQpIC0geDtcbiAgfSBlbHNlIHtcbiAgICBjb21wYXJlMSA9IGYgPT09IGFzY2VuZGluZyB8fCBmID09PSBkZXNjZW5kaW5nID8gZiA6IHplcm87XG4gICAgY29tcGFyZTIgPSBmO1xuICAgIGRlbHRhID0gZjtcbiAgfVxuXG4gIGZ1bmN0aW9uIGxlZnQoYSwgeCwgbG8gPSAwLCBoaSA9IGEubGVuZ3RoKSB7XG4gICAgaWYgKGxvIDwgaGkpIHtcbiAgICAgIGlmIChjb21wYXJlMSh4LCB4KSAhPT0gMCkgcmV0dXJuIGhpO1xuICAgICAgZG8ge1xuICAgICAgICBjb25zdCBtaWQgPSAobG8gKyBoaSkgPj4+IDE7XG4gICAgICAgIGlmIChjb21wYXJlMihhW21pZF0sIHgpIDwgMCkgbG8gPSBtaWQgKyAxO1xuICAgICAgICBlbHNlIGhpID0gbWlkO1xuICAgICAgfSB3aGlsZSAobG8gPCBoaSk7XG4gICAgfVxuICAgIHJldHVybiBsbztcbiAgfVxuXG4gIGZ1bmN0aW9uIHJpZ2h0KGEsIHgsIGxvID0gMCwgaGkgPSBhLmxlbmd0aCkge1xuICAgIGlmIChsbyA8IGhpKSB7XG4gICAgICBpZiAoY29tcGFyZTEoeCwgeCkgIT09IDApIHJldHVybiBoaTtcbiAgICAgIGRvIHtcbiAgICAgICAgY29uc3QgbWlkID0gKGxvICsgaGkpID4+PiAxO1xuICAgICAgICBpZiAoY29tcGFyZTIoYVttaWRdLCB4KSA8PSAwKSBsbyA9IG1pZCArIDE7XG4gICAgICAgIGVsc2UgaGkgPSBtaWQ7XG4gICAgICB9IHdoaWxlIChsbyA8IGhpKTtcbiAgICB9XG4gICAgcmV0dXJuIGxvO1xuICB9XG5cbiAgZnVuY3Rpb24gY2VudGVyKGEsIHgsIGxvID0gMCwgaGkgPSBhLmxlbmd0aCkge1xuICAgIGNvbnN0IGkgPSBsZWZ0KGEsIHgsIGxvLCBoaSAtIDEpO1xuICAgIHJldHVybiBpID4gbG8gJiYgZGVsdGEoYVtpIC0gMV0sIHgpID4gLWRlbHRhKGFbaV0sIHgpID8gaSAtIDEgOiBpO1xuICB9XG5cbiAgcmV0dXJuIHtsZWZ0LCBjZW50ZXIsIHJpZ2h0fTtcbn1cblxuZnVuY3Rpb24gemVybygpIHtcbiAgcmV0dXJuIDA7XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBudW1iZXIoeCkge1xuICByZXR1cm4geCA9PT0gbnVsbCA/IE5hTiA6ICt4O1xufVxuXG5leHBvcnQgZnVuY3Rpb24qIG51bWJlcnModmFsdWVzLCB2YWx1ZW9mKSB7XG4gIGlmICh2YWx1ZW9mID09PSB1bmRlZmluZWQpIHtcbiAgICBmb3IgKGxldCB2YWx1ZSBvZiB2YWx1ZXMpIHtcbiAgICAgIGlmICh2YWx1ZSAhPSBudWxsICYmICh2YWx1ZSA9ICt2YWx1ZSkgPj0gdmFsdWUpIHtcbiAgICAgICAgeWllbGQgdmFsdWU7XG4gICAgICB9XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGxldCBpbmRleCA9IC0xO1xuICAgIGZvciAobGV0IHZhbHVlIG9mIHZhbHVlcykge1xuICAgICAgaWYgKCh2YWx1ZSA9IHZhbHVlb2YodmFsdWUsICsraW5kZXgsIHZhbHVlcykpICE9IG51bGwgJiYgKHZhbHVlID0gK3ZhbHVlKSA+PSB2YWx1ZSkge1xuICAgICAgICB5aWVsZCB2YWx1ZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCBhc2NlbmRpbmcgZnJvbSBcIi4vYXNjZW5kaW5nLmpzXCI7XG5pbXBvcnQgYmlzZWN0b3IgZnJvbSBcIi4vYmlzZWN0b3IuanNcIjtcbmltcG9ydCBudW1iZXIgZnJvbSBcIi4vbnVtYmVyLmpzXCI7XG5cbmNvbnN0IGFzY2VuZGluZ0Jpc2VjdCA9IGJpc2VjdG9yKGFzY2VuZGluZyk7XG5leHBvcnQgY29uc3QgYmlzZWN0UmlnaHQgPSBhc2NlbmRpbmdCaXNlY3QucmlnaHQ7XG5leHBvcnQgY29uc3QgYmlzZWN0TGVmdCA9IGFzY2VuZGluZ0Jpc2VjdC5sZWZ0O1xuZXhwb3J0IGNvbnN0IGJpc2VjdENlbnRlciA9IGJpc2VjdG9yKG51bWJlcikuY2VudGVyO1xuZXhwb3J0IGRlZmF1bHQgYmlzZWN0UmlnaHQ7XG4iLCJjb25zdCBlMTAgPSBNYXRoLnNxcnQoNTApLFxuICAgIGU1ID0gTWF0aC5zcXJ0KDEwKSxcbiAgICBlMiA9IE1hdGguc3FydCgyKTtcblxuZnVuY3Rpb24gdGlja1NwZWMoc3RhcnQsIHN0b3AsIGNvdW50KSB7XG4gIGNvbnN0IHN0ZXAgPSAoc3RvcCAtIHN0YXJ0KSAvIE1hdGgubWF4KDAsIGNvdW50KSxcbiAgICAgIHBvd2VyID0gTWF0aC5mbG9vcihNYXRoLmxvZzEwKHN0ZXApKSxcbiAgICAgIGVycm9yID0gc3RlcCAvIE1hdGgucG93KDEwLCBwb3dlciksXG4gICAgICBmYWN0b3IgPSBlcnJvciA+PSBlMTAgPyAxMCA6IGVycm9yID49IGU1ID8gNSA6IGVycm9yID49IGUyID8gMiA6IDE7XG4gIGxldCBpMSwgaTIsIGluYztcbiAgaWYgKHBvd2VyIDwgMCkge1xuICAgIGluYyA9IE1hdGgucG93KDEwLCAtcG93ZXIpIC8gZmFjdG9yO1xuICAgIGkxID0gTWF0aC5yb3VuZChzdGFydCAqIGluYyk7XG4gICAgaTIgPSBNYXRoLnJvdW5kKHN0b3AgKiBpbmMpO1xuICAgIGlmIChpMSAvIGluYyA8IHN0YXJ0KSArK2kxO1xuICAgIGlmIChpMiAvIGluYyA+IHN0b3ApIC0taTI7XG4gICAgaW5jID0gLWluYztcbiAgfSBlbHNlIHtcbiAgICBpbmMgPSBNYXRoLnBvdygxMCwgcG93ZXIpICogZmFjdG9yO1xuICAgIGkxID0gTWF0aC5yb3VuZChzdGFydCAvIGluYyk7XG4gICAgaTIgPSBNYXRoLnJvdW5kKHN0b3AgLyBpbmMpO1xuICAgIGlmIChpMSAqIGluYyA8IHN0YXJ0KSArK2kxO1xuICAgIGlmIChpMiAqIGluYyA+IHN0b3ApIC0taTI7XG4gIH1cbiAgaWYgKGkyIDwgaTEgJiYgMC41IDw9IGNvdW50ICYmIGNvdW50IDwgMikgcmV0dXJuIHRpY2tTcGVjKHN0YXJ0LCBzdG9wLCBjb3VudCAqIDIpO1xuICByZXR1cm4gW2kxLCBpMiwgaW5jXTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdGlja3Moc3RhcnQsIHN0b3AsIGNvdW50KSB7XG4gIHN0b3AgPSArc3RvcCwgc3RhcnQgPSArc3RhcnQsIGNvdW50ID0gK2NvdW50O1xuICBpZiAoIShjb3VudCA+IDApKSByZXR1cm4gW107XG4gIGlmIChzdGFydCA9PT0gc3RvcCkgcmV0dXJuIFtzdGFydF07XG4gIGNvbnN0IHJldmVyc2UgPSBzdG9wIDwgc3RhcnQsIFtpMSwgaTIsIGluY10gPSByZXZlcnNlID8gdGlja1NwZWMoc3RvcCwgc3RhcnQsIGNvdW50KSA6IHRpY2tTcGVjKHN0YXJ0LCBzdG9wLCBjb3VudCk7XG4gIGlmICghKGkyID49IGkxKSkgcmV0dXJuIFtdO1xuICBjb25zdCBuID0gaTIgLSBpMSArIDEsIHRpY2tzID0gbmV3IEFycmF5KG4pO1xuICBpZiAocmV2ZXJzZSkge1xuICAgIGlmIChpbmMgPCAwKSBmb3IgKGxldCBpID0gMDsgaSA8IG47ICsraSkgdGlja3NbaV0gPSAoaTIgLSBpKSAvIC1pbmM7XG4gICAgZWxzZSBmb3IgKGxldCBpID0gMDsgaSA8IG47ICsraSkgdGlja3NbaV0gPSAoaTIgLSBpKSAqIGluYztcbiAgfSBlbHNlIHtcbiAgICBpZiAoaW5jIDwgMCkgZm9yIChsZXQgaSA9IDA7IGkgPCBuOyArK2kpIHRpY2tzW2ldID0gKGkxICsgaSkgLyAtaW5jO1xuICAgIGVsc2UgZm9yIChsZXQgaSA9IDA7IGkgPCBuOyArK2kpIHRpY2tzW2ldID0gKGkxICsgaSkgKiBpbmM7XG4gIH1cbiAgcmV0dXJuIHRpY2tzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdGlja0luY3JlbWVudChzdGFydCwgc3RvcCwgY291bnQpIHtcbiAgc3RvcCA9ICtzdG9wLCBzdGFydCA9ICtzdGFydCwgY291bnQgPSArY291bnQ7XG4gIHJldHVybiB0aWNrU3BlYyhzdGFydCwgc3RvcCwgY291bnQpWzJdO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdGlja1N0ZXAoc3RhcnQsIHN0b3AsIGNvdW50KSB7XG4gIHN0b3AgPSArc3RvcCwgc3RhcnQgPSArc3RhcnQsIGNvdW50ID0gK2NvdW50O1xuICBjb25zdCByZXZlcnNlID0gc3RvcCA8IHN0YXJ0LCBpbmMgPSByZXZlcnNlID8gdGlja0luY3JlbWVudChzdG9wLCBzdGFydCwgY291bnQpIDogdGlja0luY3JlbWVudChzdGFydCwgc3RvcCwgY291bnQpO1xuICByZXR1cm4gKHJldmVyc2UgPyAtMSA6IDEpICogKGluYyA8IDAgPyAxIC8gLWluYyA6IGluYyk7XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbih4KSB7XG4gIHJldHVybiB4O1xufVxuIiwiaW1wb3J0IGlkZW50aXR5IGZyb20gXCIuL2lkZW50aXR5LmpzXCI7XG5cbnZhciB0b3AgPSAxLFxuICAgIHJpZ2h0ID0gMixcbiAgICBib3R0b20gPSAzLFxuICAgIGxlZnQgPSA0LFxuICAgIGVwc2lsb24gPSAxZS02O1xuXG5mdW5jdGlvbiB0cmFuc2xhdGVYKHgpIHtcbiAgcmV0dXJuIFwidHJhbnNsYXRlKFwiICsgeCArIFwiLDApXCI7XG59XG5cbmZ1bmN0aW9uIHRyYW5zbGF0ZVkoeSkge1xuICByZXR1cm4gXCJ0cmFuc2xhdGUoMCxcIiArIHkgKyBcIilcIjtcbn1cblxuZnVuY3Rpb24gbnVtYmVyKHNjYWxlKSB7XG4gIHJldHVybiBkID0+ICtzY2FsZShkKTtcbn1cblxuZnVuY3Rpb24gY2VudGVyKHNjYWxlLCBvZmZzZXQpIHtcbiAgb2Zmc2V0ID0gTWF0aC5tYXgoMCwgc2NhbGUuYmFuZHdpZHRoKCkgLSBvZmZzZXQgKiAyKSAvIDI7XG4gIGlmIChzY2FsZS5yb3VuZCgpKSBvZmZzZXQgPSBNYXRoLnJvdW5kKG9mZnNldCk7XG4gIHJldHVybiBkID0+ICtzY2FsZShkKSArIG9mZnNldDtcbn1cblxuZnVuY3Rpb24gZW50ZXJpbmcoKSB7XG4gIHJldHVybiAhdGhpcy5fX2F4aXM7XG59XG5cbmZ1bmN0aW9uIGF4aXMob3JpZW50LCBzY2FsZSkge1xuICB2YXIgdGlja0FyZ3VtZW50cyA9IFtdLFxuICAgICAgdGlja1ZhbHVlcyA9IG51bGwsXG4gICAgICB0aWNrRm9ybWF0ID0gbnVsbCxcbiAgICAgIHRpY2tTaXplSW5uZXIgPSA2LFxuICAgICAgdGlja1NpemVPdXRlciA9IDYsXG4gICAgICB0aWNrUGFkZGluZyA9IDMsXG4gICAgICBvZmZzZXQgPSB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiICYmIHdpbmRvdy5kZXZpY2VQaXhlbFJhdGlvID4gMSA/IDAgOiAwLjUsXG4gICAgICBrID0gb3JpZW50ID09PSB0b3AgfHwgb3JpZW50ID09PSBsZWZ0ID8gLTEgOiAxLFxuICAgICAgeCA9IG9yaWVudCA9PT0gbGVmdCB8fCBvcmllbnQgPT09IHJpZ2h0ID8gXCJ4XCIgOiBcInlcIixcbiAgICAgIHRyYW5zZm9ybSA9IG9yaWVudCA9PT0gdG9wIHx8IG9yaWVudCA9PT0gYm90dG9tID8gdHJhbnNsYXRlWCA6IHRyYW5zbGF0ZVk7XG5cbiAgZnVuY3Rpb24gYXhpcyhjb250ZXh0KSB7XG4gICAgdmFyIHZhbHVlcyA9IHRpY2tWYWx1ZXMgPT0gbnVsbCA/IChzY2FsZS50aWNrcyA/IHNjYWxlLnRpY2tzLmFwcGx5KHNjYWxlLCB0aWNrQXJndW1lbnRzKSA6IHNjYWxlLmRvbWFpbigpKSA6IHRpY2tWYWx1ZXMsXG4gICAgICAgIGZvcm1hdCA9IHRpY2tGb3JtYXQgPT0gbnVsbCA/IChzY2FsZS50aWNrRm9ybWF0ID8gc2NhbGUudGlja0Zvcm1hdC5hcHBseShzY2FsZSwgdGlja0FyZ3VtZW50cykgOiBpZGVudGl0eSkgOiB0aWNrRm9ybWF0LFxuICAgICAgICBzcGFjaW5nID0gTWF0aC5tYXgodGlja1NpemVJbm5lciwgMCkgKyB0aWNrUGFkZGluZyxcbiAgICAgICAgcmFuZ2UgPSBzY2FsZS5yYW5nZSgpLFxuICAgICAgICByYW5nZTAgPSArcmFuZ2VbMF0gKyBvZmZzZXQsXG4gICAgICAgIHJhbmdlMSA9ICtyYW5nZVtyYW5nZS5sZW5ndGggLSAxXSArIG9mZnNldCxcbiAgICAgICAgcG9zaXRpb24gPSAoc2NhbGUuYmFuZHdpZHRoID8gY2VudGVyIDogbnVtYmVyKShzY2FsZS5jb3B5KCksIG9mZnNldCksXG4gICAgICAgIHNlbGVjdGlvbiA9IGNvbnRleHQuc2VsZWN0aW9uID8gY29udGV4dC5zZWxlY3Rpb24oKSA6IGNvbnRleHQsXG4gICAgICAgIHBhdGggPSBzZWxlY3Rpb24uc2VsZWN0QWxsKFwiLmRvbWFpblwiKS5kYXRhKFtudWxsXSksXG4gICAgICAgIHRpY2sgPSBzZWxlY3Rpb24uc2VsZWN0QWxsKFwiLnRpY2tcIikuZGF0YSh2YWx1ZXMsIHNjYWxlKS5vcmRlcigpLFxuICAgICAgICB0aWNrRXhpdCA9IHRpY2suZXhpdCgpLFxuICAgICAgICB0aWNrRW50ZXIgPSB0aWNrLmVudGVyKCkuYXBwZW5kKFwiZ1wiKS5hdHRyKFwiY2xhc3NcIiwgXCJ0aWNrXCIpLFxuICAgICAgICBsaW5lID0gdGljay5zZWxlY3QoXCJsaW5lXCIpLFxuICAgICAgICB0ZXh0ID0gdGljay5zZWxlY3QoXCJ0ZXh0XCIpO1xuXG4gICAgcGF0aCA9IHBhdGgubWVyZ2UocGF0aC5lbnRlcigpLmluc2VydChcInBhdGhcIiwgXCIudGlja1wiKVxuICAgICAgICAuYXR0cihcImNsYXNzXCIsIFwiZG9tYWluXCIpXG4gICAgICAgIC5hdHRyKFwic3Ryb2tlXCIsIFwiY3VycmVudENvbG9yXCIpKTtcblxuICAgIHRpY2sgPSB0aWNrLm1lcmdlKHRpY2tFbnRlcik7XG5cbiAgICBsaW5lID0gbGluZS5tZXJnZSh0aWNrRW50ZXIuYXBwZW5kKFwibGluZVwiKVxuICAgICAgICAuYXR0cihcInN0cm9rZVwiLCBcImN1cnJlbnRDb2xvclwiKVxuICAgICAgICAuYXR0cih4ICsgXCIyXCIsIGsgKiB0aWNrU2l6ZUlubmVyKSk7XG5cbiAgICB0ZXh0ID0gdGV4dC5tZXJnZSh0aWNrRW50ZXIuYXBwZW5kKFwidGV4dFwiKVxuICAgICAgICAuYXR0cihcImZpbGxcIiwgXCJjdXJyZW50Q29sb3JcIilcbiAgICAgICAgLmF0dHIoeCwgayAqIHNwYWNpbmcpXG4gICAgICAgIC5hdHRyKFwiZHlcIiwgb3JpZW50ID09PSB0b3AgPyBcIjBlbVwiIDogb3JpZW50ID09PSBib3R0b20gPyBcIjAuNzFlbVwiIDogXCIwLjMyZW1cIikpO1xuXG4gICAgaWYgKGNvbnRleHQgIT09IHNlbGVjdGlvbikge1xuICAgICAgcGF0aCA9IHBhdGgudHJhbnNpdGlvbihjb250ZXh0KTtcbiAgICAgIHRpY2sgPSB0aWNrLnRyYW5zaXRpb24oY29udGV4dCk7XG4gICAgICBsaW5lID0gbGluZS50cmFuc2l0aW9uKGNvbnRleHQpO1xuICAgICAgdGV4dCA9IHRleHQudHJhbnNpdGlvbihjb250ZXh0KTtcblxuICAgICAgdGlja0V4aXQgPSB0aWNrRXhpdC50cmFuc2l0aW9uKGNvbnRleHQpXG4gICAgICAgICAgLmF0dHIoXCJvcGFjaXR5XCIsIGVwc2lsb24pXG4gICAgICAgICAgLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgZnVuY3Rpb24oZCkgeyByZXR1cm4gaXNGaW5pdGUoZCA9IHBvc2l0aW9uKGQpKSA/IHRyYW5zZm9ybShkICsgb2Zmc2V0KSA6IHRoaXMuZ2V0QXR0cmlidXRlKFwidHJhbnNmb3JtXCIpOyB9KTtcblxuICAgICAgdGlja0VudGVyXG4gICAgICAgICAgLmF0dHIoXCJvcGFjaXR5XCIsIGVwc2lsb24pXG4gICAgICAgICAgLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgZnVuY3Rpb24oZCkgeyB2YXIgcCA9IHRoaXMucGFyZW50Tm9kZS5fX2F4aXM7IHJldHVybiB0cmFuc2Zvcm0oKHAgJiYgaXNGaW5pdGUocCA9IHAoZCkpID8gcCA6IHBvc2l0aW9uKGQpKSArIG9mZnNldCk7IH0pO1xuICAgIH1cblxuICAgIHRpY2tFeGl0LnJlbW92ZSgpO1xuXG4gICAgcGF0aFxuICAgICAgICAuYXR0cihcImRcIiwgb3JpZW50ID09PSBsZWZ0IHx8IG9yaWVudCA9PT0gcmlnaHRcbiAgICAgICAgICAgID8gKHRpY2tTaXplT3V0ZXIgPyBcIk1cIiArIGsgKiB0aWNrU2l6ZU91dGVyICsgXCIsXCIgKyByYW5nZTAgKyBcIkhcIiArIG9mZnNldCArIFwiVlwiICsgcmFuZ2UxICsgXCJIXCIgKyBrICogdGlja1NpemVPdXRlciA6IFwiTVwiICsgb2Zmc2V0ICsgXCIsXCIgKyByYW5nZTAgKyBcIlZcIiArIHJhbmdlMSlcbiAgICAgICAgICAgIDogKHRpY2tTaXplT3V0ZXIgPyBcIk1cIiArIHJhbmdlMCArIFwiLFwiICsgayAqIHRpY2tTaXplT3V0ZXIgKyBcIlZcIiArIG9mZnNldCArIFwiSFwiICsgcmFuZ2UxICsgXCJWXCIgKyBrICogdGlja1NpemVPdXRlciA6IFwiTVwiICsgcmFuZ2UwICsgXCIsXCIgKyBvZmZzZXQgKyBcIkhcIiArIHJhbmdlMSkpO1xuXG4gICAgdGlja1xuICAgICAgICAuYXR0cihcIm9wYWNpdHlcIiwgMSlcbiAgICAgICAgLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgZnVuY3Rpb24oZCkgeyByZXR1cm4gdHJhbnNmb3JtKHBvc2l0aW9uKGQpICsgb2Zmc2V0KTsgfSk7XG5cbiAgICBsaW5lXG4gICAgICAgIC5hdHRyKHggKyBcIjJcIiwgayAqIHRpY2tTaXplSW5uZXIpO1xuXG4gICAgdGV4dFxuICAgICAgICAuYXR0cih4LCBrICogc3BhY2luZylcbiAgICAgICAgLnRleHQoZm9ybWF0KTtcblxuICAgIHNlbGVjdGlvbi5maWx0ZXIoZW50ZXJpbmcpXG4gICAgICAgIC5hdHRyKFwiZmlsbFwiLCBcIm5vbmVcIilcbiAgICAgICAgLmF0dHIoXCJmb250LXNpemVcIiwgMTApXG4gICAgICAgIC5hdHRyKFwiZm9udC1mYW1pbHlcIiwgXCJzYW5zLXNlcmlmXCIpXG4gICAgICAgIC5hdHRyKFwidGV4dC1hbmNob3JcIiwgb3JpZW50ID09PSByaWdodCA/IFwic3RhcnRcIiA6IG9yaWVudCA9PT0gbGVmdCA/IFwiZW5kXCIgOiBcIm1pZGRsZVwiKTtcblxuICAgIHNlbGVjdGlvblxuICAgICAgICAuZWFjaChmdW5jdGlvbigpIHsgdGhpcy5fX2F4aXMgPSBwb3NpdGlvbjsgfSk7XG4gIH1cblxuICBheGlzLnNjYWxlID0gZnVuY3Rpb24oXykge1xuICAgIHJldHVybiBhcmd1bWVudHMubGVuZ3RoID8gKHNjYWxlID0gXywgYXhpcykgOiBzY2FsZTtcbiAgfTtcblxuICBheGlzLnRpY2tzID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRpY2tBcmd1bWVudHMgPSBBcnJheS5mcm9tKGFyZ3VtZW50cyksIGF4aXM7XG4gIH07XG5cbiAgYXhpcy50aWNrQXJndW1lbnRzID0gZnVuY3Rpb24oXykge1xuICAgIHJldHVybiBhcmd1bWVudHMubGVuZ3RoID8gKHRpY2tBcmd1bWVudHMgPSBfID09IG51bGwgPyBbXSA6IEFycmF5LmZyb20oXyksIGF4aXMpIDogdGlja0FyZ3VtZW50cy5zbGljZSgpO1xuICB9O1xuXG4gIGF4aXMudGlja1ZhbHVlcyA9IGZ1bmN0aW9uKF8pIHtcbiAgICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA/ICh0aWNrVmFsdWVzID0gXyA9PSBudWxsID8gbnVsbCA6IEFycmF5LmZyb20oXyksIGF4aXMpIDogdGlja1ZhbHVlcyAmJiB0aWNrVmFsdWVzLnNsaWNlKCk7XG4gIH07XG5cbiAgYXhpcy50aWNrRm9ybWF0ID0gZnVuY3Rpb24oXykge1xuICAgIHJldHVybiBhcmd1bWVudHMubGVuZ3RoID8gKHRpY2tGb3JtYXQgPSBfLCBheGlzKSA6IHRpY2tGb3JtYXQ7XG4gIH07XG5cbiAgYXhpcy50aWNrU2l6ZSA9IGZ1bmN0aW9uKF8pIHtcbiAgICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA/ICh0aWNrU2l6ZUlubmVyID0gdGlja1NpemVPdXRlciA9ICtfLCBheGlzKSA6IHRpY2tTaXplSW5uZXI7XG4gIH07XG5cbiAgYXhpcy50aWNrU2l6ZUlubmVyID0gZnVuY3Rpb24oXykge1xuICAgIHJldHVybiBhcmd1bWVudHMubGVuZ3RoID8gKHRpY2tTaXplSW5uZXIgPSArXywgYXhpcykgOiB0aWNrU2l6ZUlubmVyO1xuICB9O1xuXG4gIGF4aXMudGlja1NpemVPdXRlciA9IGZ1bmN0aW9uKF8pIHtcbiAgICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA/ICh0aWNrU2l6ZU91dGVyID0gK18sIGF4aXMpIDogdGlja1NpemVPdXRlcjtcbiAgfTtcblxuICBheGlzLnRpY2tQYWRkaW5nID0gZnVuY3Rpb24oXykge1xuICAgIHJldHVybiBhcmd1bWVudHMubGVuZ3RoID8gKHRpY2tQYWRkaW5nID0gK18sIGF4aXMpIDogdGlja1BhZGRpbmc7XG4gIH07XG5cbiAgYXhpcy5vZmZzZXQgPSBmdW5jdGlvbihfKSB7XG4gICAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPyAob2Zmc2V0ID0gK18sIGF4aXMpIDogb2Zmc2V0O1xuICB9O1xuXG4gIHJldHVybiBheGlzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYXhpc1RvcChzY2FsZSkge1xuICByZXR1cm4gYXhpcyh0b3AsIHNjYWxlKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGF4aXNSaWdodChzY2FsZSkge1xuICByZXR1cm4gYXhpcyhyaWdodCwgc2NhbGUpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYXhpc0JvdHRvbShzY2FsZSkge1xuICByZXR1cm4gYXhpcyhib3R0b20sIHNjYWxlKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGF4aXNMZWZ0KHNjYWxlKSB7XG4gIHJldHVybiBheGlzKGxlZnQsIHNjYWxlKTtcbn1cbiIsInZhciBub29wID0ge3ZhbHVlOiAoKSA9PiB7fX07XG5cbmZ1bmN0aW9uIGRpc3BhdGNoKCkge1xuICBmb3IgKHZhciBpID0gMCwgbiA9IGFyZ3VtZW50cy5sZW5ndGgsIF8gPSB7fSwgdDsgaSA8IG47ICsraSkge1xuICAgIGlmICghKHQgPSBhcmd1bWVudHNbaV0gKyBcIlwiKSB8fCAodCBpbiBfKSB8fCAvW1xccy5dLy50ZXN0KHQpKSB0aHJvdyBuZXcgRXJyb3IoXCJpbGxlZ2FsIHR5cGU6IFwiICsgdCk7XG4gICAgX1t0XSA9IFtdO1xuICB9XG4gIHJldHVybiBuZXcgRGlzcGF0Y2goXyk7XG59XG5cbmZ1bmN0aW9uIERpc3BhdGNoKF8pIHtcbiAgdGhpcy5fID0gXztcbn1cblxuZnVuY3Rpb24gcGFyc2VUeXBlbmFtZXModHlwZW5hbWVzLCB0eXBlcykge1xuICByZXR1cm4gdHlwZW5hbWVzLnRyaW0oKS5zcGxpdCgvXnxcXHMrLykubWFwKGZ1bmN0aW9uKHQpIHtcbiAgICB2YXIgbmFtZSA9IFwiXCIsIGkgPSB0LmluZGV4T2YoXCIuXCIpO1xuICAgIGlmIChpID49IDApIG5hbWUgPSB0LnNsaWNlKGkgKyAxKSwgdCA9IHQuc2xpY2UoMCwgaSk7XG4gICAgaWYgKHQgJiYgIXR5cGVzLmhhc093blByb3BlcnR5KHQpKSB0aHJvdyBuZXcgRXJyb3IoXCJ1bmtub3duIHR5cGU6IFwiICsgdCk7XG4gICAgcmV0dXJuIHt0eXBlOiB0LCBuYW1lOiBuYW1lfTtcbiAgfSk7XG59XG5cbkRpc3BhdGNoLnByb3RvdHlwZSA9IGRpc3BhdGNoLnByb3RvdHlwZSA9IHtcbiAgY29uc3RydWN0b3I6IERpc3BhdGNoLFxuICBvbjogZnVuY3Rpb24odHlwZW5hbWUsIGNhbGxiYWNrKSB7XG4gICAgdmFyIF8gPSB0aGlzLl8sXG4gICAgICAgIFQgPSBwYXJzZVR5cGVuYW1lcyh0eXBlbmFtZSArIFwiXCIsIF8pLFxuICAgICAgICB0LFxuICAgICAgICBpID0gLTEsXG4gICAgICAgIG4gPSBULmxlbmd0aDtcblxuICAgIC8vIElmIG5vIGNhbGxiYWNrIHdhcyBzcGVjaWZpZWQsIHJldHVybiB0aGUgY2FsbGJhY2sgb2YgdGhlIGdpdmVuIHR5cGUgYW5kIG5hbWUuXG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPCAyKSB7XG4gICAgICB3aGlsZSAoKytpIDwgbikgaWYgKCh0ID0gKHR5cGVuYW1lID0gVFtpXSkudHlwZSkgJiYgKHQgPSBnZXQoX1t0XSwgdHlwZW5hbWUubmFtZSkpKSByZXR1cm4gdDtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBJZiBhIHR5cGUgd2FzIHNwZWNpZmllZCwgc2V0IHRoZSBjYWxsYmFjayBmb3IgdGhlIGdpdmVuIHR5cGUgYW5kIG5hbWUuXG4gICAgLy8gT3RoZXJ3aXNlLCBpZiBhIG51bGwgY2FsbGJhY2sgd2FzIHNwZWNpZmllZCwgcmVtb3ZlIGNhbGxiYWNrcyBvZiB0aGUgZ2l2ZW4gbmFtZS5cbiAgICBpZiAoY2FsbGJhY2sgIT0gbnVsbCAmJiB0eXBlb2YgY2FsbGJhY2sgIT09IFwiZnVuY3Rpb25cIikgdGhyb3cgbmV3IEVycm9yKFwiaW52YWxpZCBjYWxsYmFjazogXCIgKyBjYWxsYmFjayk7XG4gICAgd2hpbGUgKCsraSA8IG4pIHtcbiAgICAgIGlmICh0ID0gKHR5cGVuYW1lID0gVFtpXSkudHlwZSkgX1t0XSA9IHNldChfW3RdLCB0eXBlbmFtZS5uYW1lLCBjYWxsYmFjayk7XG4gICAgICBlbHNlIGlmIChjYWxsYmFjayA9PSBudWxsKSBmb3IgKHQgaW4gXykgX1t0XSA9IHNldChfW3RdLCB0eXBlbmFtZS5uYW1lLCBudWxsKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfSxcbiAgY29weTogZnVuY3Rpb24oKSB7XG4gICAgdmFyIGNvcHkgPSB7fSwgXyA9IHRoaXMuXztcbiAgICBmb3IgKHZhciB0IGluIF8pIGNvcHlbdF0gPSBfW3RdLnNsaWNlKCk7XG4gICAgcmV0dXJuIG5ldyBEaXNwYXRjaChjb3B5KTtcbiAgfSxcbiAgY2FsbDogZnVuY3Rpb24odHlwZSwgdGhhdCkge1xuICAgIGlmICgobiA9IGFyZ3VtZW50cy5sZW5ndGggLSAyKSA+IDApIGZvciAodmFyIGFyZ3MgPSBuZXcgQXJyYXkobiksIGkgPSAwLCBuLCB0OyBpIDwgbjsgKytpKSBhcmdzW2ldID0gYXJndW1lbnRzW2kgKyAyXTtcbiAgICBpZiAoIXRoaXMuXy5oYXNPd25Qcm9wZXJ0eSh0eXBlKSkgdGhyb3cgbmV3IEVycm9yKFwidW5rbm93biB0eXBlOiBcIiArIHR5cGUpO1xuICAgIGZvciAodCA9IHRoaXMuX1t0eXBlXSwgaSA9IDAsIG4gPSB0Lmxlbmd0aDsgaSA8IG47ICsraSkgdFtpXS52YWx1ZS5hcHBseSh0aGF0LCBhcmdzKTtcbiAgfSxcbiAgYXBwbHk6IGZ1bmN0aW9uKHR5cGUsIHRoYXQsIGFyZ3MpIHtcbiAgICBpZiAoIXRoaXMuXy5oYXNPd25Qcm9wZXJ0eSh0eXBlKSkgdGhyb3cgbmV3IEVycm9yKFwidW5rbm93biB0eXBlOiBcIiArIHR5cGUpO1xuICAgIGZvciAodmFyIHQgPSB0aGlzLl9bdHlwZV0sIGkgPSAwLCBuID0gdC5sZW5ndGg7IGkgPCBuOyArK2kpIHRbaV0udmFsdWUuYXBwbHkodGhhdCwgYXJncyk7XG4gIH1cbn07XG5cbmZ1bmN0aW9uIGdldCh0eXBlLCBuYW1lKSB7XG4gIGZvciAodmFyIGkgPSAwLCBuID0gdHlwZS5sZW5ndGgsIGM7IGkgPCBuOyArK2kpIHtcbiAgICBpZiAoKGMgPSB0eXBlW2ldKS5uYW1lID09PSBuYW1lKSB7XG4gICAgICByZXR1cm4gYy52YWx1ZTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gc2V0KHR5cGUsIG5hbWUsIGNhbGxiYWNrKSB7XG4gIGZvciAodmFyIGkgPSAwLCBuID0gdHlwZS5sZW5ndGg7IGkgPCBuOyArK2kpIHtcbiAgICBpZiAodHlwZVtpXS5uYW1lID09PSBuYW1lKSB7XG4gICAgICB0eXBlW2ldID0gbm9vcCwgdHlwZSA9IHR5cGUuc2xpY2UoMCwgaSkuY29uY2F0KHR5cGUuc2xpY2UoaSArIDEpKTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICBpZiAoY2FsbGJhY2sgIT0gbnVsbCkgdHlwZS5wdXNoKHtuYW1lOiBuYW1lLCB2YWx1ZTogY2FsbGJhY2t9KTtcbiAgcmV0dXJuIHR5cGU7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGRpc3BhdGNoO1xuIiwiZXhwb3J0IHZhciB4aHRtbCA9IFwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94aHRtbFwiO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIHN2ZzogXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiLFxuICB4aHRtbDogeGh0bWwsXG4gIHhsaW5rOiBcImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmtcIixcbiAgeG1sOiBcImh0dHA6Ly93d3cudzMub3JnL1hNTC8xOTk4L25hbWVzcGFjZVwiLFxuICB4bWxuczogXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3htbG5zL1wiXG59O1xuIiwiaW1wb3J0IG5hbWVzcGFjZXMgZnJvbSBcIi4vbmFtZXNwYWNlcy5qc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihuYW1lKSB7XG4gIHZhciBwcmVmaXggPSBuYW1lICs9IFwiXCIsIGkgPSBwcmVmaXguaW5kZXhPZihcIjpcIik7XG4gIGlmIChpID49IDAgJiYgKHByZWZpeCA9IG5hbWUuc2xpY2UoMCwgaSkpICE9PSBcInhtbG5zXCIpIG5hbWUgPSBuYW1lLnNsaWNlKGkgKyAxKTtcbiAgcmV0dXJuIG5hbWVzcGFjZXMuaGFzT3duUHJvcGVydHkocHJlZml4KSA/IHtzcGFjZTogbmFtZXNwYWNlc1twcmVmaXhdLCBsb2NhbDogbmFtZX0gOiBuYW1lOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXByb3RvdHlwZS1idWlsdGluc1xufVxuIiwiaW1wb3J0IG5hbWVzcGFjZSBmcm9tIFwiLi9uYW1lc3BhY2UuanNcIjtcbmltcG9ydCB7eGh0bWx9IGZyb20gXCIuL25hbWVzcGFjZXMuanNcIjtcblxuZnVuY3Rpb24gY3JlYXRvckluaGVyaXQobmFtZSkge1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgdmFyIGRvY3VtZW50ID0gdGhpcy5vd25lckRvY3VtZW50LFxuICAgICAgICB1cmkgPSB0aGlzLm5hbWVzcGFjZVVSSTtcbiAgICByZXR1cm4gdXJpID09PSB4aHRtbCAmJiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQubmFtZXNwYWNlVVJJID09PSB4aHRtbFxuICAgICAgICA/IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQobmFtZSlcbiAgICAgICAgOiBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlModXJpLCBuYW1lKTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gY3JlYXRvckZpeGVkKGZ1bGxuYW1lKSB7XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5vd25lckRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhmdWxsbmFtZS5zcGFjZSwgZnVsbG5hbWUubG9jYWwpO1xuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihuYW1lKSB7XG4gIHZhciBmdWxsbmFtZSA9IG5hbWVzcGFjZShuYW1lKTtcbiAgcmV0dXJuIChmdWxsbmFtZS5sb2NhbFxuICAgICAgPyBjcmVhdG9yRml4ZWRcbiAgICAgIDogY3JlYXRvckluaGVyaXQpKGZ1bGxuYW1lKTtcbn1cbiIsImZ1bmN0aW9uIG5vbmUoKSB7fVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihzZWxlY3Rvcikge1xuICByZXR1cm4gc2VsZWN0b3IgPT0gbnVsbCA/IG5vbmUgOiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKTtcbiAgfTtcbn1cbiIsImltcG9ydCB7U2VsZWN0aW9ufSBmcm9tIFwiLi9pbmRleC5qc1wiO1xuaW1wb3J0IHNlbGVjdG9yIGZyb20gXCIuLi9zZWxlY3Rvci5qc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihzZWxlY3QpIHtcbiAgaWYgKHR5cGVvZiBzZWxlY3QgIT09IFwiZnVuY3Rpb25cIikgc2VsZWN0ID0gc2VsZWN0b3Ioc2VsZWN0KTtcblxuICBmb3IgKHZhciBncm91cHMgPSB0aGlzLl9ncm91cHMsIG0gPSBncm91cHMubGVuZ3RoLCBzdWJncm91cHMgPSBuZXcgQXJyYXkobSksIGogPSAwOyBqIDwgbTsgKytqKSB7XG4gICAgZm9yICh2YXIgZ3JvdXAgPSBncm91cHNbal0sIG4gPSBncm91cC5sZW5ndGgsIHN1Ymdyb3VwID0gc3ViZ3JvdXBzW2pdID0gbmV3IEFycmF5KG4pLCBub2RlLCBzdWJub2RlLCBpID0gMDsgaSA8IG47ICsraSkge1xuICAgICAgaWYgKChub2RlID0gZ3JvdXBbaV0pICYmIChzdWJub2RlID0gc2VsZWN0LmNhbGwobm9kZSwgbm9kZS5fX2RhdGFfXywgaSwgZ3JvdXApKSkge1xuICAgICAgICBpZiAoXCJfX2RhdGFfX1wiIGluIG5vZGUpIHN1Ym5vZGUuX19kYXRhX18gPSBub2RlLl9fZGF0YV9fO1xuICAgICAgICBzdWJncm91cFtpXSA9IHN1Ym5vZGU7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG5ldyBTZWxlY3Rpb24oc3ViZ3JvdXBzLCB0aGlzLl9wYXJlbnRzKTtcbn1cbiIsIi8vIEdpdmVuIHNvbWV0aGluZyBhcnJheSBsaWtlIChvciBudWxsKSwgcmV0dXJucyBzb21ldGhpbmcgdGhhdCBpcyBzdHJpY3RseSBhblxuLy8gYXJyYXkuIFRoaXMgaXMgdXNlZCB0byBlbnN1cmUgdGhhdCBhcnJheS1saWtlIG9iamVjdHMgcGFzc2VkIHRvIGQzLnNlbGVjdEFsbFxuLy8gb3Igc2VsZWN0aW9uLnNlbGVjdEFsbCBhcmUgY29udmVydGVkIGludG8gcHJvcGVyIGFycmF5cyB3aGVuIGNyZWF0aW5nIGFcbi8vIHNlbGVjdGlvbjsgd2UgZG9u4oCZdCBldmVyIHdhbnQgdG8gY3JlYXRlIGEgc2VsZWN0aW9uIGJhY2tlZCBieSBhIGxpdmVcbi8vIEhUTUxDb2xsZWN0aW9uIG9yIE5vZGVMaXN0LiBIb3dldmVyLCBub3RlIHRoYXQgc2VsZWN0aW9uLnNlbGVjdEFsbCB3aWxsIHVzZSBhXG4vLyBzdGF0aWMgTm9kZUxpc3QgYXMgYSBncm91cCwgc2luY2UgaXQgc2FmZWx5IGRlcml2ZWQgZnJvbSBxdWVyeVNlbGVjdG9yQWxsLlxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYXJyYXkoeCkge1xuICByZXR1cm4geCA9PSBudWxsID8gW10gOiBBcnJheS5pc0FycmF5KHgpID8geCA6IEFycmF5LmZyb20oeCk7XG59XG4iLCJmdW5jdGlvbiBlbXB0eSgpIHtcbiAgcmV0dXJuIFtdO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihzZWxlY3Rvcikge1xuICByZXR1cm4gc2VsZWN0b3IgPT0gbnVsbCA/IGVtcHR5IDogZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMucXVlcnlTZWxlY3RvckFsbChzZWxlY3Rvcik7XG4gIH07XG59XG4iLCJpbXBvcnQge1NlbGVjdGlvbn0gZnJvbSBcIi4vaW5kZXguanNcIjtcbmltcG9ydCBhcnJheSBmcm9tIFwiLi4vYXJyYXkuanNcIjtcbmltcG9ydCBzZWxlY3RvckFsbCBmcm9tIFwiLi4vc2VsZWN0b3JBbGwuanNcIjtcblxuZnVuY3Rpb24gYXJyYXlBbGwoc2VsZWN0KSB7XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gYXJyYXkoc2VsZWN0LmFwcGx5KHRoaXMsIGFyZ3VtZW50cykpO1xuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihzZWxlY3QpIHtcbiAgaWYgKHR5cGVvZiBzZWxlY3QgPT09IFwiZnVuY3Rpb25cIikgc2VsZWN0ID0gYXJyYXlBbGwoc2VsZWN0KTtcbiAgZWxzZSBzZWxlY3QgPSBzZWxlY3RvckFsbChzZWxlY3QpO1xuXG4gIGZvciAodmFyIGdyb3VwcyA9IHRoaXMuX2dyb3VwcywgbSA9IGdyb3Vwcy5sZW5ndGgsIHN1Ymdyb3VwcyA9IFtdLCBwYXJlbnRzID0gW10sIGogPSAwOyBqIDwgbTsgKytqKSB7XG4gICAgZm9yICh2YXIgZ3JvdXAgPSBncm91cHNbal0sIG4gPSBncm91cC5sZW5ndGgsIG5vZGUsIGkgPSAwOyBpIDwgbjsgKytpKSB7XG4gICAgICBpZiAobm9kZSA9IGdyb3VwW2ldKSB7XG4gICAgICAgIHN1Ymdyb3Vwcy5wdXNoKHNlbGVjdC5jYWxsKG5vZGUsIG5vZGUuX19kYXRhX18sIGksIGdyb3VwKSk7XG4gICAgICAgIHBhcmVudHMucHVzaChub2RlKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gbmV3IFNlbGVjdGlvbihzdWJncm91cHMsIHBhcmVudHMpO1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oc2VsZWN0b3IpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLm1hdGNoZXMoc2VsZWN0b3IpO1xuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2hpbGRNYXRjaGVyKHNlbGVjdG9yKSB7XG4gIHJldHVybiBmdW5jdGlvbihub2RlKSB7XG4gICAgcmV0dXJuIG5vZGUubWF0Y2hlcyhzZWxlY3Rvcik7XG4gIH07XG59XG5cbiIsImltcG9ydCB7Y2hpbGRNYXRjaGVyfSBmcm9tIFwiLi4vbWF0Y2hlci5qc1wiO1xuXG52YXIgZmluZCA9IEFycmF5LnByb3RvdHlwZS5maW5kO1xuXG5mdW5jdGlvbiBjaGlsZEZpbmQobWF0Y2gpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBmaW5kLmNhbGwodGhpcy5jaGlsZHJlbiwgbWF0Y2gpO1xuICB9O1xufVxuXG5mdW5jdGlvbiBjaGlsZEZpcnN0KCkge1xuICByZXR1cm4gdGhpcy5maXJzdEVsZW1lbnRDaGlsZDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24obWF0Y2gpIHtcbiAgcmV0dXJuIHRoaXMuc2VsZWN0KG1hdGNoID09IG51bGwgPyBjaGlsZEZpcnN0XG4gICAgICA6IGNoaWxkRmluZCh0eXBlb2YgbWF0Y2ggPT09IFwiZnVuY3Rpb25cIiA/IG1hdGNoIDogY2hpbGRNYXRjaGVyKG1hdGNoKSkpO1xufVxuIiwiaW1wb3J0IHtjaGlsZE1hdGNoZXJ9IGZyb20gXCIuLi9tYXRjaGVyLmpzXCI7XG5cbnZhciBmaWx0ZXIgPSBBcnJheS5wcm90b3R5cGUuZmlsdGVyO1xuXG5mdW5jdGlvbiBjaGlsZHJlbigpIHtcbiAgcmV0dXJuIEFycmF5LmZyb20odGhpcy5jaGlsZHJlbik7XG59XG5cbmZ1bmN0aW9uIGNoaWxkcmVuRmlsdGVyKG1hdGNoKSB7XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gZmlsdGVyLmNhbGwodGhpcy5jaGlsZHJlbiwgbWF0Y2gpO1xuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihtYXRjaCkge1xuICByZXR1cm4gdGhpcy5zZWxlY3RBbGwobWF0Y2ggPT0gbnVsbCA/IGNoaWxkcmVuXG4gICAgICA6IGNoaWxkcmVuRmlsdGVyKHR5cGVvZiBtYXRjaCA9PT0gXCJmdW5jdGlvblwiID8gbWF0Y2ggOiBjaGlsZE1hdGNoZXIobWF0Y2gpKSk7XG59XG4iLCJpbXBvcnQge1NlbGVjdGlvbn0gZnJvbSBcIi4vaW5kZXguanNcIjtcbmltcG9ydCBtYXRjaGVyIGZyb20gXCIuLi9tYXRjaGVyLmpzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKG1hdGNoKSB7XG4gIGlmICh0eXBlb2YgbWF0Y2ggIT09IFwiZnVuY3Rpb25cIikgbWF0Y2ggPSBtYXRjaGVyKG1hdGNoKTtcblxuICBmb3IgKHZhciBncm91cHMgPSB0aGlzLl9ncm91cHMsIG0gPSBncm91cHMubGVuZ3RoLCBzdWJncm91cHMgPSBuZXcgQXJyYXkobSksIGogPSAwOyBqIDwgbTsgKytqKSB7XG4gICAgZm9yICh2YXIgZ3JvdXAgPSBncm91cHNbal0sIG4gPSBncm91cC5sZW5ndGgsIHN1Ymdyb3VwID0gc3ViZ3JvdXBzW2pdID0gW10sIG5vZGUsIGkgPSAwOyBpIDwgbjsgKytpKSB7XG4gICAgICBpZiAoKG5vZGUgPSBncm91cFtpXSkgJiYgbWF0Y2guY2FsbChub2RlLCBub2RlLl9fZGF0YV9fLCBpLCBncm91cCkpIHtcbiAgICAgICAgc3ViZ3JvdXAucHVzaChub2RlKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gbmV3IFNlbGVjdGlvbihzdWJncm91cHMsIHRoaXMuX3BhcmVudHMpO1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24odXBkYXRlKSB7XG4gIHJldHVybiBuZXcgQXJyYXkodXBkYXRlLmxlbmd0aCk7XG59XG4iLCJpbXBvcnQgc3BhcnNlIGZyb20gXCIuL3NwYXJzZS5qc1wiO1xuaW1wb3J0IHtTZWxlY3Rpb259IGZyb20gXCIuL2luZGV4LmpzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gbmV3IFNlbGVjdGlvbih0aGlzLl9lbnRlciB8fCB0aGlzLl9ncm91cHMubWFwKHNwYXJzZSksIHRoaXMuX3BhcmVudHMpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gRW50ZXJOb2RlKHBhcmVudCwgZGF0dW0pIHtcbiAgdGhpcy5vd25lckRvY3VtZW50ID0gcGFyZW50Lm93bmVyRG9jdW1lbnQ7XG4gIHRoaXMubmFtZXNwYWNlVVJJID0gcGFyZW50Lm5hbWVzcGFjZVVSSTtcbiAgdGhpcy5fbmV4dCA9IG51bGw7XG4gIHRoaXMuX3BhcmVudCA9IHBhcmVudDtcbiAgdGhpcy5fX2RhdGFfXyA9IGRhdHVtO1xufVxuXG5FbnRlck5vZGUucHJvdG90eXBlID0ge1xuICBjb25zdHJ1Y3RvcjogRW50ZXJOb2RlLFxuICBhcHBlbmRDaGlsZDogZnVuY3Rpb24oY2hpbGQpIHsgcmV0dXJuIHRoaXMuX3BhcmVudC5pbnNlcnRCZWZvcmUoY2hpbGQsIHRoaXMuX25leHQpOyB9LFxuICBpbnNlcnRCZWZvcmU6IGZ1bmN0aW9uKGNoaWxkLCBuZXh0KSB7IHJldHVybiB0aGlzLl9wYXJlbnQuaW5zZXJ0QmVmb3JlKGNoaWxkLCBuZXh0KTsgfSxcbiAgcXVlcnlTZWxlY3RvcjogZnVuY3Rpb24oc2VsZWN0b3IpIHsgcmV0dXJuIHRoaXMuX3BhcmVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKTsgfSxcbiAgcXVlcnlTZWxlY3RvckFsbDogZnVuY3Rpb24oc2VsZWN0b3IpIHsgcmV0dXJuIHRoaXMuX3BhcmVudC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKTsgfVxufTtcbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKHgpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB4O1xuICB9O1xufVxuIiwiaW1wb3J0IHtTZWxlY3Rpb259IGZyb20gXCIuL2luZGV4LmpzXCI7XG5pbXBvcnQge0VudGVyTm9kZX0gZnJvbSBcIi4vZW50ZXIuanNcIjtcbmltcG9ydCBjb25zdGFudCBmcm9tIFwiLi4vY29uc3RhbnQuanNcIjtcblxuZnVuY3Rpb24gYmluZEluZGV4KHBhcmVudCwgZ3JvdXAsIGVudGVyLCB1cGRhdGUsIGV4aXQsIGRhdGEpIHtcbiAgdmFyIGkgPSAwLFxuICAgICAgbm9kZSxcbiAgICAgIGdyb3VwTGVuZ3RoID0gZ3JvdXAubGVuZ3RoLFxuICAgICAgZGF0YUxlbmd0aCA9IGRhdGEubGVuZ3RoO1xuXG4gIC8vIFB1dCBhbnkgbm9uLW51bGwgbm9kZXMgdGhhdCBmaXQgaW50byB1cGRhdGUuXG4gIC8vIFB1dCBhbnkgbnVsbCBub2RlcyBpbnRvIGVudGVyLlxuICAvLyBQdXQgYW55IHJlbWFpbmluZyBkYXRhIGludG8gZW50ZXIuXG4gIGZvciAoOyBpIDwgZGF0YUxlbmd0aDsgKytpKSB7XG4gICAgaWYgKG5vZGUgPSBncm91cFtpXSkge1xuICAgICAgbm9kZS5fX2RhdGFfXyA9IGRhdGFbaV07XG4gICAgICB1cGRhdGVbaV0gPSBub2RlO1xuICAgIH0gZWxzZSB7XG4gICAgICBlbnRlcltpXSA9IG5ldyBFbnRlck5vZGUocGFyZW50LCBkYXRhW2ldKTtcbiAgICB9XG4gIH1cblxuICAvLyBQdXQgYW55IG5vbi1udWxsIG5vZGVzIHRoYXQgZG9u4oCZdCBmaXQgaW50byBleGl0LlxuICBmb3IgKDsgaSA8IGdyb3VwTGVuZ3RoOyArK2kpIHtcbiAgICBpZiAobm9kZSA9IGdyb3VwW2ldKSB7XG4gICAgICBleGl0W2ldID0gbm9kZTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gYmluZEtleShwYXJlbnQsIGdyb3VwLCBlbnRlciwgdXBkYXRlLCBleGl0LCBkYXRhLCBrZXkpIHtcbiAgdmFyIGksXG4gICAgICBub2RlLFxuICAgICAgbm9kZUJ5S2V5VmFsdWUgPSBuZXcgTWFwLFxuICAgICAgZ3JvdXBMZW5ndGggPSBncm91cC5sZW5ndGgsXG4gICAgICBkYXRhTGVuZ3RoID0gZGF0YS5sZW5ndGgsXG4gICAgICBrZXlWYWx1ZXMgPSBuZXcgQXJyYXkoZ3JvdXBMZW5ndGgpLFxuICAgICAga2V5VmFsdWU7XG5cbiAgLy8gQ29tcHV0ZSB0aGUga2V5IGZvciBlYWNoIG5vZGUuXG4gIC8vIElmIG11bHRpcGxlIG5vZGVzIGhhdmUgdGhlIHNhbWUga2V5LCB0aGUgZHVwbGljYXRlcyBhcmUgYWRkZWQgdG8gZXhpdC5cbiAgZm9yIChpID0gMDsgaSA8IGdyb3VwTGVuZ3RoOyArK2kpIHtcbiAgICBpZiAobm9kZSA9IGdyb3VwW2ldKSB7XG4gICAgICBrZXlWYWx1ZXNbaV0gPSBrZXlWYWx1ZSA9IGtleS5jYWxsKG5vZGUsIG5vZGUuX19kYXRhX18sIGksIGdyb3VwKSArIFwiXCI7XG4gICAgICBpZiAobm9kZUJ5S2V5VmFsdWUuaGFzKGtleVZhbHVlKSkge1xuICAgICAgICBleGl0W2ldID0gbm9kZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG5vZGVCeUtleVZhbHVlLnNldChrZXlWYWx1ZSwgbm9kZSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLy8gQ29tcHV0ZSB0aGUga2V5IGZvciBlYWNoIGRhdHVtLlxuICAvLyBJZiB0aGVyZSBhIG5vZGUgYXNzb2NpYXRlZCB3aXRoIHRoaXMga2V5LCBqb2luIGFuZCBhZGQgaXQgdG8gdXBkYXRlLlxuICAvLyBJZiB0aGVyZSBpcyBub3QgKG9yIHRoZSBrZXkgaXMgYSBkdXBsaWNhdGUpLCBhZGQgaXQgdG8gZW50ZXIuXG4gIGZvciAoaSA9IDA7IGkgPCBkYXRhTGVuZ3RoOyArK2kpIHtcbiAgICBrZXlWYWx1ZSA9IGtleS5jYWxsKHBhcmVudCwgZGF0YVtpXSwgaSwgZGF0YSkgKyBcIlwiO1xuICAgIGlmIChub2RlID0gbm9kZUJ5S2V5VmFsdWUuZ2V0KGtleVZhbHVlKSkge1xuICAgICAgdXBkYXRlW2ldID0gbm9kZTtcbiAgICAgIG5vZGUuX19kYXRhX18gPSBkYXRhW2ldO1xuICAgICAgbm9kZUJ5S2V5VmFsdWUuZGVsZXRlKGtleVZhbHVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZW50ZXJbaV0gPSBuZXcgRW50ZXJOb2RlKHBhcmVudCwgZGF0YVtpXSk7XG4gICAgfVxuICB9XG5cbiAgLy8gQWRkIGFueSByZW1haW5pbmcgbm9kZXMgdGhhdCB3ZXJlIG5vdCBib3VuZCB0byBkYXRhIHRvIGV4aXQuXG4gIGZvciAoaSA9IDA7IGkgPCBncm91cExlbmd0aDsgKytpKSB7XG4gICAgaWYgKChub2RlID0gZ3JvdXBbaV0pICYmIChub2RlQnlLZXlWYWx1ZS5nZXQoa2V5VmFsdWVzW2ldKSA9PT0gbm9kZSkpIHtcbiAgICAgIGV4aXRbaV0gPSBub2RlO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBkYXR1bShub2RlKSB7XG4gIHJldHVybiBub2RlLl9fZGF0YV9fO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbih2YWx1ZSwga2V5KSB7XG4gIGlmICghYXJndW1lbnRzLmxlbmd0aCkgcmV0dXJuIEFycmF5LmZyb20odGhpcywgZGF0dW0pO1xuXG4gIHZhciBiaW5kID0ga2V5ID8gYmluZEtleSA6IGJpbmRJbmRleCxcbiAgICAgIHBhcmVudHMgPSB0aGlzLl9wYXJlbnRzLFxuICAgICAgZ3JvdXBzID0gdGhpcy5fZ3JvdXBzO1xuXG4gIGlmICh0eXBlb2YgdmFsdWUgIT09IFwiZnVuY3Rpb25cIikgdmFsdWUgPSBjb25zdGFudCh2YWx1ZSk7XG5cbiAgZm9yICh2YXIgbSA9IGdyb3Vwcy5sZW5ndGgsIHVwZGF0ZSA9IG5ldyBBcnJheShtKSwgZW50ZXIgPSBuZXcgQXJyYXkobSksIGV4aXQgPSBuZXcgQXJyYXkobSksIGogPSAwOyBqIDwgbTsgKytqKSB7XG4gICAgdmFyIHBhcmVudCA9IHBhcmVudHNbal0sXG4gICAgICAgIGdyb3VwID0gZ3JvdXBzW2pdLFxuICAgICAgICBncm91cExlbmd0aCA9IGdyb3VwLmxlbmd0aCxcbiAgICAgICAgZGF0YSA9IGFycmF5bGlrZSh2YWx1ZS5jYWxsKHBhcmVudCwgcGFyZW50ICYmIHBhcmVudC5fX2RhdGFfXywgaiwgcGFyZW50cykpLFxuICAgICAgICBkYXRhTGVuZ3RoID0gZGF0YS5sZW5ndGgsXG4gICAgICAgIGVudGVyR3JvdXAgPSBlbnRlcltqXSA9IG5ldyBBcnJheShkYXRhTGVuZ3RoKSxcbiAgICAgICAgdXBkYXRlR3JvdXAgPSB1cGRhdGVbal0gPSBuZXcgQXJyYXkoZGF0YUxlbmd0aCksXG4gICAgICAgIGV4aXRHcm91cCA9IGV4aXRbal0gPSBuZXcgQXJyYXkoZ3JvdXBMZW5ndGgpO1xuXG4gICAgYmluZChwYXJlbnQsIGdyb3VwLCBlbnRlckdyb3VwLCB1cGRhdGVHcm91cCwgZXhpdEdyb3VwLCBkYXRhLCBrZXkpO1xuXG4gICAgLy8gTm93IGNvbm5lY3QgdGhlIGVudGVyIG5vZGVzIHRvIHRoZWlyIGZvbGxvd2luZyB1cGRhdGUgbm9kZSwgc3VjaCB0aGF0XG4gICAgLy8gYXBwZW5kQ2hpbGQgY2FuIGluc2VydCB0aGUgbWF0ZXJpYWxpemVkIGVudGVyIG5vZGUgYmVmb3JlIHRoaXMgbm9kZSxcbiAgICAvLyByYXRoZXIgdGhhbiBhdCB0aGUgZW5kIG9mIHRoZSBwYXJlbnQgbm9kZS5cbiAgICBmb3IgKHZhciBpMCA9IDAsIGkxID0gMCwgcHJldmlvdXMsIG5leHQ7IGkwIDwgZGF0YUxlbmd0aDsgKytpMCkge1xuICAgICAgaWYgKHByZXZpb3VzID0gZW50ZXJHcm91cFtpMF0pIHtcbiAgICAgICAgaWYgKGkwID49IGkxKSBpMSA9IGkwICsgMTtcbiAgICAgICAgd2hpbGUgKCEobmV4dCA9IHVwZGF0ZUdyb3VwW2kxXSkgJiYgKytpMSA8IGRhdGFMZW5ndGgpO1xuICAgICAgICBwcmV2aW91cy5fbmV4dCA9IG5leHQgfHwgbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICB1cGRhdGUgPSBuZXcgU2VsZWN0aW9uKHVwZGF0ZSwgcGFyZW50cyk7XG4gIHVwZGF0ZS5fZW50ZXIgPSBlbnRlcjtcbiAgdXBkYXRlLl9leGl0ID0gZXhpdDtcbiAgcmV0dXJuIHVwZGF0ZTtcbn1cblxuLy8gR2l2ZW4gc29tZSBkYXRhLCB0aGlzIHJldHVybnMgYW4gYXJyYXktbGlrZSB2aWV3IG9mIGl0OiBhbiBvYmplY3QgdGhhdFxuLy8gZXhwb3NlcyBhIGxlbmd0aCBwcm9wZXJ0eSBhbmQgYWxsb3dzIG51bWVyaWMgaW5kZXhpbmcuIE5vdGUgdGhhdCB1bmxpa2Vcbi8vIHNlbGVjdEFsbCwgdGhpcyBpc27igJl0IHdvcnJpZWQgYWJvdXQg4oCcbGl2ZeKAnSBjb2xsZWN0aW9ucyBiZWNhdXNlIHRoZSByZXN1bHRpbmdcbi8vIGFycmF5IHdpbGwgb25seSBiZSB1c2VkIGJyaWVmbHkgd2hpbGUgZGF0YSBpcyBiZWluZyBib3VuZC4gKEl0IGlzIHBvc3NpYmxlIHRvXG4vLyBjYXVzZSB0aGUgZGF0YSB0byBjaGFuZ2Ugd2hpbGUgaXRlcmF0aW5nIGJ5IHVzaW5nIGEga2V5IGZ1bmN0aW9uLCBidXQgcGxlYXNlXG4vLyBkb27igJl0OyB3ZeKAmWQgcmF0aGVyIGF2b2lkIGEgZ3JhdHVpdG91cyBjb3B5LilcbmZ1bmN0aW9uIGFycmF5bGlrZShkYXRhKSB7XG4gIHJldHVybiB0eXBlb2YgZGF0YSA9PT0gXCJvYmplY3RcIiAmJiBcImxlbmd0aFwiIGluIGRhdGFcbiAgICA/IGRhdGEgLy8gQXJyYXksIFR5cGVkQXJyYXksIE5vZGVMaXN0LCBhcnJheS1saWtlXG4gICAgOiBBcnJheS5mcm9tKGRhdGEpOyAvLyBNYXAsIFNldCwgaXRlcmFibGUsIHN0cmluZywgb3IgYW55dGhpbmcgZWxzZVxufVxuIiwiaW1wb3J0IHNwYXJzZSBmcm9tIFwiLi9zcGFyc2UuanNcIjtcbmltcG9ydCB7U2VsZWN0aW9ufSBmcm9tIFwiLi9pbmRleC5qc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIG5ldyBTZWxlY3Rpb24odGhpcy5fZXhpdCB8fCB0aGlzLl9ncm91cHMubWFwKHNwYXJzZSksIHRoaXMuX3BhcmVudHMpO1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24ob25lbnRlciwgb251cGRhdGUsIG9uZXhpdCkge1xuICB2YXIgZW50ZXIgPSB0aGlzLmVudGVyKCksIHVwZGF0ZSA9IHRoaXMsIGV4aXQgPSB0aGlzLmV4aXQoKTtcbiAgaWYgKHR5cGVvZiBvbmVudGVyID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICBlbnRlciA9IG9uZW50ZXIoZW50ZXIpO1xuICAgIGlmIChlbnRlcikgZW50ZXIgPSBlbnRlci5zZWxlY3Rpb24oKTtcbiAgfSBlbHNlIHtcbiAgICBlbnRlciA9IGVudGVyLmFwcGVuZChvbmVudGVyICsgXCJcIik7XG4gIH1cbiAgaWYgKG9udXBkYXRlICE9IG51bGwpIHtcbiAgICB1cGRhdGUgPSBvbnVwZGF0ZSh1cGRhdGUpO1xuICAgIGlmICh1cGRhdGUpIHVwZGF0ZSA9IHVwZGF0ZS5zZWxlY3Rpb24oKTtcbiAgfVxuICBpZiAob25leGl0ID09IG51bGwpIGV4aXQucmVtb3ZlKCk7IGVsc2Ugb25leGl0KGV4aXQpO1xuICByZXR1cm4gZW50ZXIgJiYgdXBkYXRlID8gZW50ZXIubWVyZ2UodXBkYXRlKS5vcmRlcigpIDogdXBkYXRlO1xufVxuIiwiaW1wb3J0IHtTZWxlY3Rpb259IGZyb20gXCIuL2luZGV4LmpzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKGNvbnRleHQpIHtcbiAgdmFyIHNlbGVjdGlvbiA9IGNvbnRleHQuc2VsZWN0aW9uID8gY29udGV4dC5zZWxlY3Rpb24oKSA6IGNvbnRleHQ7XG5cbiAgZm9yICh2YXIgZ3JvdXBzMCA9IHRoaXMuX2dyb3VwcywgZ3JvdXBzMSA9IHNlbGVjdGlvbi5fZ3JvdXBzLCBtMCA9IGdyb3VwczAubGVuZ3RoLCBtMSA9IGdyb3VwczEubGVuZ3RoLCBtID0gTWF0aC5taW4obTAsIG0xKSwgbWVyZ2VzID0gbmV3IEFycmF5KG0wKSwgaiA9IDA7IGogPCBtOyArK2opIHtcbiAgICBmb3IgKHZhciBncm91cDAgPSBncm91cHMwW2pdLCBncm91cDEgPSBncm91cHMxW2pdLCBuID0gZ3JvdXAwLmxlbmd0aCwgbWVyZ2UgPSBtZXJnZXNbal0gPSBuZXcgQXJyYXkobiksIG5vZGUsIGkgPSAwOyBpIDwgbjsgKytpKSB7XG4gICAgICBpZiAobm9kZSA9IGdyb3VwMFtpXSB8fCBncm91cDFbaV0pIHtcbiAgICAgICAgbWVyZ2VbaV0gPSBub2RlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGZvciAoOyBqIDwgbTA7ICsraikge1xuICAgIG1lcmdlc1tqXSA9IGdyb3VwczBbal07XG4gIH1cblxuICByZXR1cm4gbmV3IFNlbGVjdGlvbihtZXJnZXMsIHRoaXMuX3BhcmVudHMpO1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKSB7XG5cbiAgZm9yICh2YXIgZ3JvdXBzID0gdGhpcy5fZ3JvdXBzLCBqID0gLTEsIG0gPSBncm91cHMubGVuZ3RoOyArK2ogPCBtOykge1xuICAgIGZvciAodmFyIGdyb3VwID0gZ3JvdXBzW2pdLCBpID0gZ3JvdXAubGVuZ3RoIC0gMSwgbmV4dCA9IGdyb3VwW2ldLCBub2RlOyAtLWkgPj0gMDspIHtcbiAgICAgIGlmIChub2RlID0gZ3JvdXBbaV0pIHtcbiAgICAgICAgaWYgKG5leHQgJiYgbm9kZS5jb21wYXJlRG9jdW1lbnRQb3NpdGlvbihuZXh0KSBeIDQpIG5leHQucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUobm9kZSwgbmV4dCk7XG4gICAgICAgIG5leHQgPSBub2RlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0aGlzO1xufVxuIiwiaW1wb3J0IHtTZWxlY3Rpb259IGZyb20gXCIuL2luZGV4LmpzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKGNvbXBhcmUpIHtcbiAgaWYgKCFjb21wYXJlKSBjb21wYXJlID0gYXNjZW5kaW5nO1xuXG4gIGZ1bmN0aW9uIGNvbXBhcmVOb2RlKGEsIGIpIHtcbiAgICByZXR1cm4gYSAmJiBiID8gY29tcGFyZShhLl9fZGF0YV9fLCBiLl9fZGF0YV9fKSA6ICFhIC0gIWI7XG4gIH1cblxuICBmb3IgKHZhciBncm91cHMgPSB0aGlzLl9ncm91cHMsIG0gPSBncm91cHMubGVuZ3RoLCBzb3J0Z3JvdXBzID0gbmV3IEFycmF5KG0pLCBqID0gMDsgaiA8IG07ICsraikge1xuICAgIGZvciAodmFyIGdyb3VwID0gZ3JvdXBzW2pdLCBuID0gZ3JvdXAubGVuZ3RoLCBzb3J0Z3JvdXAgPSBzb3J0Z3JvdXBzW2pdID0gbmV3IEFycmF5KG4pLCBub2RlLCBpID0gMDsgaSA8IG47ICsraSkge1xuICAgICAgaWYgKG5vZGUgPSBncm91cFtpXSkge1xuICAgICAgICBzb3J0Z3JvdXBbaV0gPSBub2RlO1xuICAgICAgfVxuICAgIH1cbiAgICBzb3J0Z3JvdXAuc29ydChjb21wYXJlTm9kZSk7XG4gIH1cblxuICByZXR1cm4gbmV3IFNlbGVjdGlvbihzb3J0Z3JvdXBzLCB0aGlzLl9wYXJlbnRzKS5vcmRlcigpO1xufVxuXG5mdW5jdGlvbiBhc2NlbmRpbmcoYSwgYikge1xuICByZXR1cm4gYSA8IGIgPyAtMSA6IGEgPiBiID8gMSA6IGEgPj0gYiA/IDAgOiBOYU47XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbigpIHtcbiAgdmFyIGNhbGxiYWNrID0gYXJndW1lbnRzWzBdO1xuICBhcmd1bWVudHNbMF0gPSB0aGlzO1xuICBjYWxsYmFjay5hcHBseShudWxsLCBhcmd1bWVudHMpO1xuICByZXR1cm4gdGhpcztcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gQXJyYXkuZnJvbSh0aGlzKTtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCkge1xuXG4gIGZvciAodmFyIGdyb3VwcyA9IHRoaXMuX2dyb3VwcywgaiA9IDAsIG0gPSBncm91cHMubGVuZ3RoOyBqIDwgbTsgKytqKSB7XG4gICAgZm9yICh2YXIgZ3JvdXAgPSBncm91cHNbal0sIGkgPSAwLCBuID0gZ3JvdXAubGVuZ3RoOyBpIDwgbjsgKytpKSB7XG4gICAgICB2YXIgbm9kZSA9IGdyb3VwW2ldO1xuICAgICAgaWYgKG5vZGUpIHJldHVybiBub2RlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBudWxsO1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKSB7XG4gIGxldCBzaXplID0gMDtcbiAgZm9yIChjb25zdCBub2RlIG9mIHRoaXMpICsrc2l6ZTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bnVzZWQtdmFyc1xuICByZXR1cm4gc2l6ZTtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gIXRoaXMubm9kZSgpO1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oY2FsbGJhY2spIHtcblxuICBmb3IgKHZhciBncm91cHMgPSB0aGlzLl9ncm91cHMsIGogPSAwLCBtID0gZ3JvdXBzLmxlbmd0aDsgaiA8IG07ICsraikge1xuICAgIGZvciAodmFyIGdyb3VwID0gZ3JvdXBzW2pdLCBpID0gMCwgbiA9IGdyb3VwLmxlbmd0aCwgbm9kZTsgaSA8IG47ICsraSkge1xuICAgICAgaWYgKG5vZGUgPSBncm91cFtpXSkgY2FsbGJhY2suY2FsbChub2RlLCBub2RlLl9fZGF0YV9fLCBpLCBncm91cCk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRoaXM7XG59XG4iLCJpbXBvcnQgbmFtZXNwYWNlIGZyb20gXCIuLi9uYW1lc3BhY2UuanNcIjtcblxuZnVuY3Rpb24gYXR0clJlbW92ZShuYW1lKSB7XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICB0aGlzLnJlbW92ZUF0dHJpYnV0ZShuYW1lKTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gYXR0clJlbW92ZU5TKGZ1bGxuYW1lKSB7XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICB0aGlzLnJlbW92ZUF0dHJpYnV0ZU5TKGZ1bGxuYW1lLnNwYWNlLCBmdWxsbmFtZS5sb2NhbCk7XG4gIH07XG59XG5cbmZ1bmN0aW9uIGF0dHJDb25zdGFudChuYW1lLCB2YWx1ZSkge1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5zZXRBdHRyaWJ1dGUobmFtZSwgdmFsdWUpO1xuICB9O1xufVxuXG5mdW5jdGlvbiBhdHRyQ29uc3RhbnROUyhmdWxsbmFtZSwgdmFsdWUpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuc2V0QXR0cmlidXRlTlMoZnVsbG5hbWUuc3BhY2UsIGZ1bGxuYW1lLmxvY2FsLCB2YWx1ZSk7XG4gIH07XG59XG5cbmZ1bmN0aW9uIGF0dHJGdW5jdGlvbihuYW1lLCB2YWx1ZSkge1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgdmFyIHYgPSB2YWx1ZS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIGlmICh2ID09IG51bGwpIHRoaXMucmVtb3ZlQXR0cmlidXRlKG5hbWUpO1xuICAgIGVsc2UgdGhpcy5zZXRBdHRyaWJ1dGUobmFtZSwgdik7XG4gIH07XG59XG5cbmZ1bmN0aW9uIGF0dHJGdW5jdGlvbk5TKGZ1bGxuYW1lLCB2YWx1ZSkge1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgdmFyIHYgPSB2YWx1ZS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIGlmICh2ID09IG51bGwpIHRoaXMucmVtb3ZlQXR0cmlidXRlTlMoZnVsbG5hbWUuc3BhY2UsIGZ1bGxuYW1lLmxvY2FsKTtcbiAgICBlbHNlIHRoaXMuc2V0QXR0cmlidXRlTlMoZnVsbG5hbWUuc3BhY2UsIGZ1bGxuYW1lLmxvY2FsLCB2KTtcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24obmFtZSwgdmFsdWUpIHtcbiAgdmFyIGZ1bGxuYW1lID0gbmFtZXNwYWNlKG5hbWUpO1xuXG4gIGlmIChhcmd1bWVudHMubGVuZ3RoIDwgMikge1xuICAgIHZhciBub2RlID0gdGhpcy5ub2RlKCk7XG4gICAgcmV0dXJuIGZ1bGxuYW1lLmxvY2FsXG4gICAgICAgID8gbm9kZS5nZXRBdHRyaWJ1dGVOUyhmdWxsbmFtZS5zcGFjZSwgZnVsbG5hbWUubG9jYWwpXG4gICAgICAgIDogbm9kZS5nZXRBdHRyaWJ1dGUoZnVsbG5hbWUpO1xuICB9XG5cbiAgcmV0dXJuIHRoaXMuZWFjaCgodmFsdWUgPT0gbnVsbFxuICAgICAgPyAoZnVsbG5hbWUubG9jYWwgPyBhdHRyUmVtb3ZlTlMgOiBhdHRyUmVtb3ZlKSA6ICh0eXBlb2YgdmFsdWUgPT09IFwiZnVuY3Rpb25cIlxuICAgICAgPyAoZnVsbG5hbWUubG9jYWwgPyBhdHRyRnVuY3Rpb25OUyA6IGF0dHJGdW5jdGlvbilcbiAgICAgIDogKGZ1bGxuYW1lLmxvY2FsID8gYXR0ckNvbnN0YW50TlMgOiBhdHRyQ29uc3RhbnQpKSkoZnVsbG5hbWUsIHZhbHVlKSk7XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbihub2RlKSB7XG4gIHJldHVybiAobm9kZS5vd25lckRvY3VtZW50ICYmIG5vZGUub3duZXJEb2N1bWVudC5kZWZhdWx0VmlldykgLy8gbm9kZSBpcyBhIE5vZGVcbiAgICAgIHx8IChub2RlLmRvY3VtZW50ICYmIG5vZGUpIC8vIG5vZGUgaXMgYSBXaW5kb3dcbiAgICAgIHx8IG5vZGUuZGVmYXVsdFZpZXc7IC8vIG5vZGUgaXMgYSBEb2N1bWVudFxufVxuIiwiaW1wb3J0IGRlZmF1bHRWaWV3IGZyb20gXCIuLi93aW5kb3cuanNcIjtcblxuZnVuY3Rpb24gc3R5bGVSZW1vdmUobmFtZSkge1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5zdHlsZS5yZW1vdmVQcm9wZXJ0eShuYW1lKTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gc3R5bGVDb25zdGFudChuYW1lLCB2YWx1ZSwgcHJpb3JpdHkpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuc3R5bGUuc2V0UHJvcGVydHkobmFtZSwgdmFsdWUsIHByaW9yaXR5KTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gc3R5bGVGdW5jdGlvbihuYW1lLCB2YWx1ZSwgcHJpb3JpdHkpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIHZhciB2ID0gdmFsdWUuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICBpZiAodiA9PSBudWxsKSB0aGlzLnN0eWxlLnJlbW92ZVByb3BlcnR5KG5hbWUpO1xuICAgIGVsc2UgdGhpcy5zdHlsZS5zZXRQcm9wZXJ0eShuYW1lLCB2LCBwcmlvcml0eSk7XG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKG5hbWUsIHZhbHVlLCBwcmlvcml0eSkge1xuICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA+IDFcbiAgICAgID8gdGhpcy5lYWNoKCh2YWx1ZSA9PSBudWxsXG4gICAgICAgICAgICA/IHN0eWxlUmVtb3ZlIDogdHlwZW9mIHZhbHVlID09PSBcImZ1bmN0aW9uXCJcbiAgICAgICAgICAgID8gc3R5bGVGdW5jdGlvblxuICAgICAgICAgICAgOiBzdHlsZUNvbnN0YW50KShuYW1lLCB2YWx1ZSwgcHJpb3JpdHkgPT0gbnVsbCA/IFwiXCIgOiBwcmlvcml0eSkpXG4gICAgICA6IHN0eWxlVmFsdWUodGhpcy5ub2RlKCksIG5hbWUpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3R5bGVWYWx1ZShub2RlLCBuYW1lKSB7XG4gIHJldHVybiBub2RlLnN0eWxlLmdldFByb3BlcnR5VmFsdWUobmFtZSlcbiAgICAgIHx8IGRlZmF1bHRWaWV3KG5vZGUpLmdldENvbXB1dGVkU3R5bGUobm9kZSwgbnVsbCkuZ2V0UHJvcGVydHlWYWx1ZShuYW1lKTtcbn1cbiIsImZ1bmN0aW9uIHByb3BlcnR5UmVtb3ZlKG5hbWUpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIGRlbGV0ZSB0aGlzW25hbWVdO1xuICB9O1xufVxuXG5mdW5jdGlvbiBwcm9wZXJ0eUNvbnN0YW50KG5hbWUsIHZhbHVlKSB7XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICB0aGlzW25hbWVdID0gdmFsdWU7XG4gIH07XG59XG5cbmZ1bmN0aW9uIHByb3BlcnR5RnVuY3Rpb24obmFtZSwgdmFsdWUpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIHZhciB2ID0gdmFsdWUuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICBpZiAodiA9PSBudWxsKSBkZWxldGUgdGhpc1tuYW1lXTtcbiAgICBlbHNlIHRoaXNbbmFtZV0gPSB2O1xuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihuYW1lLCB2YWx1ZSkge1xuICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA+IDFcbiAgICAgID8gdGhpcy5lYWNoKCh2YWx1ZSA9PSBudWxsXG4gICAgICAgICAgPyBwcm9wZXJ0eVJlbW92ZSA6IHR5cGVvZiB2YWx1ZSA9PT0gXCJmdW5jdGlvblwiXG4gICAgICAgICAgPyBwcm9wZXJ0eUZ1bmN0aW9uXG4gICAgICAgICAgOiBwcm9wZXJ0eUNvbnN0YW50KShuYW1lLCB2YWx1ZSkpXG4gICAgICA6IHRoaXMubm9kZSgpW25hbWVdO1xufVxuIiwiZnVuY3Rpb24gY2xhc3NBcnJheShzdHJpbmcpIHtcbiAgcmV0dXJuIHN0cmluZy50cmltKCkuc3BsaXQoL158XFxzKy8pO1xufVxuXG5mdW5jdGlvbiBjbGFzc0xpc3Qobm9kZSkge1xuICByZXR1cm4gbm9kZS5jbGFzc0xpc3QgfHwgbmV3IENsYXNzTGlzdChub2RlKTtcbn1cblxuZnVuY3Rpb24gQ2xhc3NMaXN0KG5vZGUpIHtcbiAgdGhpcy5fbm9kZSA9IG5vZGU7XG4gIHRoaXMuX25hbWVzID0gY2xhc3NBcnJheShub2RlLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpIHx8IFwiXCIpO1xufVxuXG5DbGFzc0xpc3QucHJvdG90eXBlID0ge1xuICBhZGQ6IGZ1bmN0aW9uKG5hbWUpIHtcbiAgICB2YXIgaSA9IHRoaXMuX25hbWVzLmluZGV4T2YobmFtZSk7XG4gICAgaWYgKGkgPCAwKSB7XG4gICAgICB0aGlzLl9uYW1lcy5wdXNoKG5hbWUpO1xuICAgICAgdGhpcy5fbm9kZS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCB0aGlzLl9uYW1lcy5qb2luKFwiIFwiKSk7XG4gICAgfVxuICB9LFxuICByZW1vdmU6IGZ1bmN0aW9uKG5hbWUpIHtcbiAgICB2YXIgaSA9IHRoaXMuX25hbWVzLmluZGV4T2YobmFtZSk7XG4gICAgaWYgKGkgPj0gMCkge1xuICAgICAgdGhpcy5fbmFtZXMuc3BsaWNlKGksIDEpO1xuICAgICAgdGhpcy5fbm9kZS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCB0aGlzLl9uYW1lcy5qb2luKFwiIFwiKSk7XG4gICAgfVxuICB9LFxuICBjb250YWluczogZnVuY3Rpb24obmFtZSkge1xuICAgIHJldHVybiB0aGlzLl9uYW1lcy5pbmRleE9mKG5hbWUpID49IDA7XG4gIH1cbn07XG5cbmZ1bmN0aW9uIGNsYXNzZWRBZGQobm9kZSwgbmFtZXMpIHtcbiAgdmFyIGxpc3QgPSBjbGFzc0xpc3Qobm9kZSksIGkgPSAtMSwgbiA9IG5hbWVzLmxlbmd0aDtcbiAgd2hpbGUgKCsraSA8IG4pIGxpc3QuYWRkKG5hbWVzW2ldKTtcbn1cblxuZnVuY3Rpb24gY2xhc3NlZFJlbW92ZShub2RlLCBuYW1lcykge1xuICB2YXIgbGlzdCA9IGNsYXNzTGlzdChub2RlKSwgaSA9IC0xLCBuID0gbmFtZXMubGVuZ3RoO1xuICB3aGlsZSAoKytpIDwgbikgbGlzdC5yZW1vdmUobmFtZXNbaV0pO1xufVxuXG5mdW5jdGlvbiBjbGFzc2VkVHJ1ZShuYW1lcykge1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgY2xhc3NlZEFkZCh0aGlzLCBuYW1lcyk7XG4gIH07XG59XG5cbmZ1bmN0aW9uIGNsYXNzZWRGYWxzZShuYW1lcykge1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgY2xhc3NlZFJlbW92ZSh0aGlzLCBuYW1lcyk7XG4gIH07XG59XG5cbmZ1bmN0aW9uIGNsYXNzZWRGdW5jdGlvbihuYW1lcywgdmFsdWUpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgICh2YWx1ZS5hcHBseSh0aGlzLCBhcmd1bWVudHMpID8gY2xhc3NlZEFkZCA6IGNsYXNzZWRSZW1vdmUpKHRoaXMsIG5hbWVzKTtcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24obmFtZSwgdmFsdWUpIHtcbiAgdmFyIG5hbWVzID0gY2xhc3NBcnJheShuYW1lICsgXCJcIik7XG5cbiAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPCAyKSB7XG4gICAgdmFyIGxpc3QgPSBjbGFzc0xpc3QodGhpcy5ub2RlKCkpLCBpID0gLTEsIG4gPSBuYW1lcy5sZW5ndGg7XG4gICAgd2hpbGUgKCsraSA8IG4pIGlmICghbGlzdC5jb250YWlucyhuYW1lc1tpXSkpIHJldHVybiBmYWxzZTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIHJldHVybiB0aGlzLmVhY2goKHR5cGVvZiB2YWx1ZSA9PT0gXCJmdW5jdGlvblwiXG4gICAgICA/IGNsYXNzZWRGdW5jdGlvbiA6IHZhbHVlXG4gICAgICA/IGNsYXNzZWRUcnVlXG4gICAgICA6IGNsYXNzZWRGYWxzZSkobmFtZXMsIHZhbHVlKSk7XG59XG4iLCJmdW5jdGlvbiB0ZXh0UmVtb3ZlKCkge1xuICB0aGlzLnRleHRDb250ZW50ID0gXCJcIjtcbn1cblxuZnVuY3Rpb24gdGV4dENvbnN0YW50KHZhbHVlKSB7XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICB0aGlzLnRleHRDb250ZW50ID0gdmFsdWU7XG4gIH07XG59XG5cbmZ1bmN0aW9uIHRleHRGdW5jdGlvbih2YWx1ZSkge1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgdmFyIHYgPSB2YWx1ZS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIHRoaXMudGV4dENvbnRlbnQgPSB2ID09IG51bGwgPyBcIlwiIDogdjtcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24odmFsdWUpIHtcbiAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGhcbiAgICAgID8gdGhpcy5lYWNoKHZhbHVlID09IG51bGxcbiAgICAgICAgICA/IHRleHRSZW1vdmUgOiAodHlwZW9mIHZhbHVlID09PSBcImZ1bmN0aW9uXCJcbiAgICAgICAgICA/IHRleHRGdW5jdGlvblxuICAgICAgICAgIDogdGV4dENvbnN0YW50KSh2YWx1ZSkpXG4gICAgICA6IHRoaXMubm9kZSgpLnRleHRDb250ZW50O1xufVxuIiwiZnVuY3Rpb24gaHRtbFJlbW92ZSgpIHtcbiAgdGhpcy5pbm5lckhUTUwgPSBcIlwiO1xufVxuXG5mdW5jdGlvbiBodG1sQ29uc3RhbnQodmFsdWUpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuaW5uZXJIVE1MID0gdmFsdWU7XG4gIH07XG59XG5cbmZ1bmN0aW9uIGh0bWxGdW5jdGlvbih2YWx1ZSkge1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgdmFyIHYgPSB2YWx1ZS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIHRoaXMuaW5uZXJIVE1MID0gdiA9PSBudWxsID8gXCJcIiA6IHY7XG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKHZhbHVlKSB7XG4gIHJldHVybiBhcmd1bWVudHMubGVuZ3RoXG4gICAgICA/IHRoaXMuZWFjaCh2YWx1ZSA9PSBudWxsXG4gICAgICAgICAgPyBodG1sUmVtb3ZlIDogKHR5cGVvZiB2YWx1ZSA9PT0gXCJmdW5jdGlvblwiXG4gICAgICAgICAgPyBodG1sRnVuY3Rpb25cbiAgICAgICAgICA6IGh0bWxDb25zdGFudCkodmFsdWUpKVxuICAgICAgOiB0aGlzLm5vZGUoKS5pbm5lckhUTUw7XG59XG4iLCJmdW5jdGlvbiByYWlzZSgpIHtcbiAgaWYgKHRoaXMubmV4dFNpYmxpbmcpIHRoaXMucGFyZW50Tm9kZS5hcHBlbmRDaGlsZCh0aGlzKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKSB7XG4gIHJldHVybiB0aGlzLmVhY2gocmFpc2UpO1xufVxuIiwiZnVuY3Rpb24gbG93ZXIoKSB7XG4gIGlmICh0aGlzLnByZXZpb3VzU2libGluZykgdGhpcy5wYXJlbnROb2RlLmluc2VydEJlZm9yZSh0aGlzLCB0aGlzLnBhcmVudE5vZGUuZmlyc3RDaGlsZCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gdGhpcy5lYWNoKGxvd2VyKTtcbn1cbiIsImltcG9ydCBjcmVhdG9yIGZyb20gXCIuLi9jcmVhdG9yLmpzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKG5hbWUpIHtcbiAgdmFyIGNyZWF0ZSA9IHR5cGVvZiBuYW1lID09PSBcImZ1bmN0aW9uXCIgPyBuYW1lIDogY3JlYXRvcihuYW1lKTtcbiAgcmV0dXJuIHRoaXMuc2VsZWN0KGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLmFwcGVuZENoaWxkKGNyZWF0ZS5hcHBseSh0aGlzLCBhcmd1bWVudHMpKTtcbiAgfSk7XG59XG4iLCJpbXBvcnQgY3JlYXRvciBmcm9tIFwiLi4vY3JlYXRvci5qc1wiO1xuaW1wb3J0IHNlbGVjdG9yIGZyb20gXCIuLi9zZWxlY3Rvci5qc1wiO1xuXG5mdW5jdGlvbiBjb25zdGFudE51bGwoKSB7XG4gIHJldHVybiBudWxsO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihuYW1lLCBiZWZvcmUpIHtcbiAgdmFyIGNyZWF0ZSA9IHR5cGVvZiBuYW1lID09PSBcImZ1bmN0aW9uXCIgPyBuYW1lIDogY3JlYXRvcihuYW1lKSxcbiAgICAgIHNlbGVjdCA9IGJlZm9yZSA9PSBudWxsID8gY29uc3RhbnROdWxsIDogdHlwZW9mIGJlZm9yZSA9PT0gXCJmdW5jdGlvblwiID8gYmVmb3JlIDogc2VsZWN0b3IoYmVmb3JlKTtcbiAgcmV0dXJuIHRoaXMuc2VsZWN0KGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLmluc2VydEJlZm9yZShjcmVhdGUuYXBwbHkodGhpcywgYXJndW1lbnRzKSwgc2VsZWN0LmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgbnVsbCk7XG4gIH0pO1xufVxuIiwiZnVuY3Rpb24gcmVtb3ZlKCkge1xuICB2YXIgcGFyZW50ID0gdGhpcy5wYXJlbnROb2RlO1xuICBpZiAocGFyZW50KSBwYXJlbnQucmVtb3ZlQ2hpbGQodGhpcyk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gdGhpcy5lYWNoKHJlbW92ZSk7XG59XG4iLCJmdW5jdGlvbiBzZWxlY3Rpb25fY2xvbmVTaGFsbG93KCkge1xuICB2YXIgY2xvbmUgPSB0aGlzLmNsb25lTm9kZShmYWxzZSksIHBhcmVudCA9IHRoaXMucGFyZW50Tm9kZTtcbiAgcmV0dXJuIHBhcmVudCA/IHBhcmVudC5pbnNlcnRCZWZvcmUoY2xvbmUsIHRoaXMubmV4dFNpYmxpbmcpIDogY2xvbmU7XG59XG5cbmZ1bmN0aW9uIHNlbGVjdGlvbl9jbG9uZURlZXAoKSB7XG4gIHZhciBjbG9uZSA9IHRoaXMuY2xvbmVOb2RlKHRydWUpLCBwYXJlbnQgPSB0aGlzLnBhcmVudE5vZGU7XG4gIHJldHVybiBwYXJlbnQgPyBwYXJlbnQuaW5zZXJ0QmVmb3JlKGNsb25lLCB0aGlzLm5leHRTaWJsaW5nKSA6IGNsb25lO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihkZWVwKSB7XG4gIHJldHVybiB0aGlzLnNlbGVjdChkZWVwID8gc2VsZWN0aW9uX2Nsb25lRGVlcCA6IHNlbGVjdGlvbl9jbG9uZVNoYWxsb3cpO1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24odmFsdWUpIHtcbiAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGhcbiAgICAgID8gdGhpcy5wcm9wZXJ0eShcIl9fZGF0YV9fXCIsIHZhbHVlKVxuICAgICAgOiB0aGlzLm5vZGUoKS5fX2RhdGFfXztcbn1cbiIsImZ1bmN0aW9uIGNvbnRleHRMaXN0ZW5lcihsaXN0ZW5lcikge1xuICByZXR1cm4gZnVuY3Rpb24oZXZlbnQpIHtcbiAgICBsaXN0ZW5lci5jYWxsKHRoaXMsIGV2ZW50LCB0aGlzLl9fZGF0YV9fKTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gcGFyc2VUeXBlbmFtZXModHlwZW5hbWVzKSB7XG4gIHJldHVybiB0eXBlbmFtZXMudHJpbSgpLnNwbGl0KC9efFxccysvKS5tYXAoZnVuY3Rpb24odCkge1xuICAgIHZhciBuYW1lID0gXCJcIiwgaSA9IHQuaW5kZXhPZihcIi5cIik7XG4gICAgaWYgKGkgPj0gMCkgbmFtZSA9IHQuc2xpY2UoaSArIDEpLCB0ID0gdC5zbGljZSgwLCBpKTtcbiAgICByZXR1cm4ge3R5cGU6IHQsIG5hbWU6IG5hbWV9O1xuICB9KTtcbn1cblxuZnVuY3Rpb24gb25SZW1vdmUodHlwZW5hbWUpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIHZhciBvbiA9IHRoaXMuX19vbjtcbiAgICBpZiAoIW9uKSByZXR1cm47XG4gICAgZm9yICh2YXIgaiA9IDAsIGkgPSAtMSwgbSA9IG9uLmxlbmd0aCwgbzsgaiA8IG07ICsraikge1xuICAgICAgaWYgKG8gPSBvbltqXSwgKCF0eXBlbmFtZS50eXBlIHx8IG8udHlwZSA9PT0gdHlwZW5hbWUudHlwZSkgJiYgby5uYW1lID09PSB0eXBlbmFtZS5uYW1lKSB7XG4gICAgICAgIHRoaXMucmVtb3ZlRXZlbnRMaXN0ZW5lcihvLnR5cGUsIG8ubGlzdGVuZXIsIG8ub3B0aW9ucyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBvblsrK2ldID0gbztcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKCsraSkgb24ubGVuZ3RoID0gaTtcbiAgICBlbHNlIGRlbGV0ZSB0aGlzLl9fb247XG4gIH07XG59XG5cbmZ1bmN0aW9uIG9uQWRkKHR5cGVuYW1lLCB2YWx1ZSwgb3B0aW9ucykge1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgdmFyIG9uID0gdGhpcy5fX29uLCBvLCBsaXN0ZW5lciA9IGNvbnRleHRMaXN0ZW5lcih2YWx1ZSk7XG4gICAgaWYgKG9uKSBmb3IgKHZhciBqID0gMCwgbSA9IG9uLmxlbmd0aDsgaiA8IG07ICsraikge1xuICAgICAgaWYgKChvID0gb25bal0pLnR5cGUgPT09IHR5cGVuYW1lLnR5cGUgJiYgby5uYW1lID09PSB0eXBlbmFtZS5uYW1lKSB7XG4gICAgICAgIHRoaXMucmVtb3ZlRXZlbnRMaXN0ZW5lcihvLnR5cGUsIG8ubGlzdGVuZXIsIG8ub3B0aW9ucyk7XG4gICAgICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcihvLnR5cGUsIG8ubGlzdGVuZXIgPSBsaXN0ZW5lciwgby5vcHRpb25zID0gb3B0aW9ucyk7XG4gICAgICAgIG8udmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIodHlwZW5hbWUudHlwZSwgbGlzdGVuZXIsIG9wdGlvbnMpO1xuICAgIG8gPSB7dHlwZTogdHlwZW5hbWUudHlwZSwgbmFtZTogdHlwZW5hbWUubmFtZSwgdmFsdWU6IHZhbHVlLCBsaXN0ZW5lcjogbGlzdGVuZXIsIG9wdGlvbnM6IG9wdGlvbnN9O1xuICAgIGlmICghb24pIHRoaXMuX19vbiA9IFtvXTtcbiAgICBlbHNlIG9uLnB1c2gobyk7XG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKHR5cGVuYW1lLCB2YWx1ZSwgb3B0aW9ucykge1xuICB2YXIgdHlwZW5hbWVzID0gcGFyc2VUeXBlbmFtZXModHlwZW5hbWUgKyBcIlwiKSwgaSwgbiA9IHR5cGVuYW1lcy5sZW5ndGgsIHQ7XG5cbiAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPCAyKSB7XG4gICAgdmFyIG9uID0gdGhpcy5ub2RlKCkuX19vbjtcbiAgICBpZiAob24pIGZvciAodmFyIGogPSAwLCBtID0gb24ubGVuZ3RoLCBvOyBqIDwgbTsgKytqKSB7XG4gICAgICBmb3IgKGkgPSAwLCBvID0gb25bal07IGkgPCBuOyArK2kpIHtcbiAgICAgICAgaWYgKCh0ID0gdHlwZW5hbWVzW2ldKS50eXBlID09PSBvLnR5cGUgJiYgdC5uYW1lID09PSBvLm5hbWUpIHtcbiAgICAgICAgICByZXR1cm4gby52YWx1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm47XG4gIH1cblxuICBvbiA9IHZhbHVlID8gb25BZGQgOiBvblJlbW92ZTtcbiAgZm9yIChpID0gMDsgaSA8IG47ICsraSkgdGhpcy5lYWNoKG9uKHR5cGVuYW1lc1tpXSwgdmFsdWUsIG9wdGlvbnMpKTtcbiAgcmV0dXJuIHRoaXM7XG59XG4iLCJpbXBvcnQgZGVmYXVsdFZpZXcgZnJvbSBcIi4uL3dpbmRvdy5qc1wiO1xuXG5mdW5jdGlvbiBkaXNwYXRjaEV2ZW50KG5vZGUsIHR5cGUsIHBhcmFtcykge1xuICB2YXIgd2luZG93ID0gZGVmYXVsdFZpZXcobm9kZSksXG4gICAgICBldmVudCA9IHdpbmRvdy5DdXN0b21FdmVudDtcblxuICBpZiAodHlwZW9mIGV2ZW50ID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICBldmVudCA9IG5ldyBldmVudCh0eXBlLCBwYXJhbXMpO1xuICB9IGVsc2Uge1xuICAgIGV2ZW50ID0gd2luZG93LmRvY3VtZW50LmNyZWF0ZUV2ZW50KFwiRXZlbnRcIik7XG4gICAgaWYgKHBhcmFtcykgZXZlbnQuaW5pdEV2ZW50KHR5cGUsIHBhcmFtcy5idWJibGVzLCBwYXJhbXMuY2FuY2VsYWJsZSksIGV2ZW50LmRldGFpbCA9IHBhcmFtcy5kZXRhaWw7XG4gICAgZWxzZSBldmVudC5pbml0RXZlbnQodHlwZSwgZmFsc2UsIGZhbHNlKTtcbiAgfVxuXG4gIG5vZGUuZGlzcGF0Y2hFdmVudChldmVudCk7XG59XG5cbmZ1bmN0aW9uIGRpc3BhdGNoQ29uc3RhbnQodHlwZSwgcGFyYW1zKSB7XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gZGlzcGF0Y2hFdmVudCh0aGlzLCB0eXBlLCBwYXJhbXMpO1xuICB9O1xufVxuXG5mdW5jdGlvbiBkaXNwYXRjaEZ1bmN0aW9uKHR5cGUsIHBhcmFtcykge1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIGRpc3BhdGNoRXZlbnQodGhpcywgdHlwZSwgcGFyYW1zLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykpO1xuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbih0eXBlLCBwYXJhbXMpIHtcbiAgcmV0dXJuIHRoaXMuZWFjaCgodHlwZW9mIHBhcmFtcyA9PT0gXCJmdW5jdGlvblwiXG4gICAgICA/IGRpc3BhdGNoRnVuY3Rpb25cbiAgICAgIDogZGlzcGF0Y2hDb25zdGFudCkodHlwZSwgcGFyYW1zKSk7XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiooKSB7XG4gIGZvciAodmFyIGdyb3VwcyA9IHRoaXMuX2dyb3VwcywgaiA9IDAsIG0gPSBncm91cHMubGVuZ3RoOyBqIDwgbTsgKytqKSB7XG4gICAgZm9yICh2YXIgZ3JvdXAgPSBncm91cHNbal0sIGkgPSAwLCBuID0gZ3JvdXAubGVuZ3RoLCBub2RlOyBpIDwgbjsgKytpKSB7XG4gICAgICBpZiAobm9kZSA9IGdyb3VwW2ldKSB5aWVsZCBub2RlO1xuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IHNlbGVjdGlvbl9zZWxlY3QgZnJvbSBcIi4vc2VsZWN0LmpzXCI7XG5pbXBvcnQgc2VsZWN0aW9uX3NlbGVjdEFsbCBmcm9tIFwiLi9zZWxlY3RBbGwuanNcIjtcbmltcG9ydCBzZWxlY3Rpb25fc2VsZWN0Q2hpbGQgZnJvbSBcIi4vc2VsZWN0Q2hpbGQuanNcIjtcbmltcG9ydCBzZWxlY3Rpb25fc2VsZWN0Q2hpbGRyZW4gZnJvbSBcIi4vc2VsZWN0Q2hpbGRyZW4uanNcIjtcbmltcG9ydCBzZWxlY3Rpb25fZmlsdGVyIGZyb20gXCIuL2ZpbHRlci5qc1wiO1xuaW1wb3J0IHNlbGVjdGlvbl9kYXRhIGZyb20gXCIuL2RhdGEuanNcIjtcbmltcG9ydCBzZWxlY3Rpb25fZW50ZXIgZnJvbSBcIi4vZW50ZXIuanNcIjtcbmltcG9ydCBzZWxlY3Rpb25fZXhpdCBmcm9tIFwiLi9leGl0LmpzXCI7XG5pbXBvcnQgc2VsZWN0aW9uX2pvaW4gZnJvbSBcIi4vam9pbi5qc1wiO1xuaW1wb3J0IHNlbGVjdGlvbl9tZXJnZSBmcm9tIFwiLi9tZXJnZS5qc1wiO1xuaW1wb3J0IHNlbGVjdGlvbl9vcmRlciBmcm9tIFwiLi9vcmRlci5qc1wiO1xuaW1wb3J0IHNlbGVjdGlvbl9zb3J0IGZyb20gXCIuL3NvcnQuanNcIjtcbmltcG9ydCBzZWxlY3Rpb25fY2FsbCBmcm9tIFwiLi9jYWxsLmpzXCI7XG5pbXBvcnQgc2VsZWN0aW9uX25vZGVzIGZyb20gXCIuL25vZGVzLmpzXCI7XG5pbXBvcnQgc2VsZWN0aW9uX25vZGUgZnJvbSBcIi4vbm9kZS5qc1wiO1xuaW1wb3J0IHNlbGVjdGlvbl9zaXplIGZyb20gXCIuL3NpemUuanNcIjtcbmltcG9ydCBzZWxlY3Rpb25fZW1wdHkgZnJvbSBcIi4vZW1wdHkuanNcIjtcbmltcG9ydCBzZWxlY3Rpb25fZWFjaCBmcm9tIFwiLi9lYWNoLmpzXCI7XG5pbXBvcnQgc2VsZWN0aW9uX2F0dHIgZnJvbSBcIi4vYXR0ci5qc1wiO1xuaW1wb3J0IHNlbGVjdGlvbl9zdHlsZSBmcm9tIFwiLi9zdHlsZS5qc1wiO1xuaW1wb3J0IHNlbGVjdGlvbl9wcm9wZXJ0eSBmcm9tIFwiLi9wcm9wZXJ0eS5qc1wiO1xuaW1wb3J0IHNlbGVjdGlvbl9jbGFzc2VkIGZyb20gXCIuL2NsYXNzZWQuanNcIjtcbmltcG9ydCBzZWxlY3Rpb25fdGV4dCBmcm9tIFwiLi90ZXh0LmpzXCI7XG5pbXBvcnQgc2VsZWN0aW9uX2h0bWwgZnJvbSBcIi4vaHRtbC5qc1wiO1xuaW1wb3J0IHNlbGVjdGlvbl9yYWlzZSBmcm9tIFwiLi9yYWlzZS5qc1wiO1xuaW1wb3J0IHNlbGVjdGlvbl9sb3dlciBmcm9tIFwiLi9sb3dlci5qc1wiO1xuaW1wb3J0IHNlbGVjdGlvbl9hcHBlbmQgZnJvbSBcIi4vYXBwZW5kLmpzXCI7XG5pbXBvcnQgc2VsZWN0aW9uX2luc2VydCBmcm9tIFwiLi9pbnNlcnQuanNcIjtcbmltcG9ydCBzZWxlY3Rpb25fcmVtb3ZlIGZyb20gXCIuL3JlbW92ZS5qc1wiO1xuaW1wb3J0IHNlbGVjdGlvbl9jbG9uZSBmcm9tIFwiLi9jbG9uZS5qc1wiO1xuaW1wb3J0IHNlbGVjdGlvbl9kYXR1bSBmcm9tIFwiLi9kYXR1bS5qc1wiO1xuaW1wb3J0IHNlbGVjdGlvbl9vbiBmcm9tIFwiLi9vbi5qc1wiO1xuaW1wb3J0IHNlbGVjdGlvbl9kaXNwYXRjaCBmcm9tIFwiLi9kaXNwYXRjaC5qc1wiO1xuaW1wb3J0IHNlbGVjdGlvbl9pdGVyYXRvciBmcm9tIFwiLi9pdGVyYXRvci5qc1wiO1xuXG5leHBvcnQgdmFyIHJvb3QgPSBbbnVsbF07XG5cbmV4cG9ydCBmdW5jdGlvbiBTZWxlY3Rpb24oZ3JvdXBzLCBwYXJlbnRzKSB7XG4gIHRoaXMuX2dyb3VwcyA9IGdyb3VwcztcbiAgdGhpcy5fcGFyZW50cyA9IHBhcmVudHM7XG59XG5cbmZ1bmN0aW9uIHNlbGVjdGlvbigpIHtcbiAgcmV0dXJuIG5ldyBTZWxlY3Rpb24oW1tkb2N1bWVudC5kb2N1bWVudEVsZW1lbnRdXSwgcm9vdCk7XG59XG5cbmZ1bmN0aW9uIHNlbGVjdGlvbl9zZWxlY3Rpb24oKSB7XG4gIHJldHVybiB0aGlzO1xufVxuXG5TZWxlY3Rpb24ucHJvdG90eXBlID0gc2VsZWN0aW9uLnByb3RvdHlwZSA9IHtcbiAgY29uc3RydWN0b3I6IFNlbGVjdGlvbixcbiAgc2VsZWN0OiBzZWxlY3Rpb25fc2VsZWN0LFxuICBzZWxlY3RBbGw6IHNlbGVjdGlvbl9zZWxlY3RBbGwsXG4gIHNlbGVjdENoaWxkOiBzZWxlY3Rpb25fc2VsZWN0Q2hpbGQsXG4gIHNlbGVjdENoaWxkcmVuOiBzZWxlY3Rpb25fc2VsZWN0Q2hpbGRyZW4sXG4gIGZpbHRlcjogc2VsZWN0aW9uX2ZpbHRlcixcbiAgZGF0YTogc2VsZWN0aW9uX2RhdGEsXG4gIGVudGVyOiBzZWxlY3Rpb25fZW50ZXIsXG4gIGV4aXQ6IHNlbGVjdGlvbl9leGl0LFxuICBqb2luOiBzZWxlY3Rpb25fam9pbixcbiAgbWVyZ2U6IHNlbGVjdGlvbl9tZXJnZSxcbiAgc2VsZWN0aW9uOiBzZWxlY3Rpb25fc2VsZWN0aW9uLFxuICBvcmRlcjogc2VsZWN0aW9uX29yZGVyLFxuICBzb3J0OiBzZWxlY3Rpb25fc29ydCxcbiAgY2FsbDogc2VsZWN0aW9uX2NhbGwsXG4gIG5vZGVzOiBzZWxlY3Rpb25fbm9kZXMsXG4gIG5vZGU6IHNlbGVjdGlvbl9ub2RlLFxuICBzaXplOiBzZWxlY3Rpb25fc2l6ZSxcbiAgZW1wdHk6IHNlbGVjdGlvbl9lbXB0eSxcbiAgZWFjaDogc2VsZWN0aW9uX2VhY2gsXG4gIGF0dHI6IHNlbGVjdGlvbl9hdHRyLFxuICBzdHlsZTogc2VsZWN0aW9uX3N0eWxlLFxuICBwcm9wZXJ0eTogc2VsZWN0aW9uX3Byb3BlcnR5LFxuICBjbGFzc2VkOiBzZWxlY3Rpb25fY2xhc3NlZCxcbiAgdGV4dDogc2VsZWN0aW9uX3RleHQsXG4gIGh0bWw6IHNlbGVjdGlvbl9odG1sLFxuICByYWlzZTogc2VsZWN0aW9uX3JhaXNlLFxuICBsb3dlcjogc2VsZWN0aW9uX2xvd2VyLFxuICBhcHBlbmQ6IHNlbGVjdGlvbl9hcHBlbmQsXG4gIGluc2VydDogc2VsZWN0aW9uX2luc2VydCxcbiAgcmVtb3ZlOiBzZWxlY3Rpb25fcmVtb3ZlLFxuICBjbG9uZTogc2VsZWN0aW9uX2Nsb25lLFxuICBkYXR1bTogc2VsZWN0aW9uX2RhdHVtLFxuICBvbjogc2VsZWN0aW9uX29uLFxuICBkaXNwYXRjaDogc2VsZWN0aW9uX2Rpc3BhdGNoLFxuICBbU3ltYm9sLml0ZXJhdG9yXTogc2VsZWN0aW9uX2l0ZXJhdG9yXG59O1xuXG5leHBvcnQgZGVmYXVsdCBzZWxlY3Rpb247XG4iLCJpbXBvcnQge1NlbGVjdGlvbiwgcm9vdH0gZnJvbSBcIi4vc2VsZWN0aW9uL2luZGV4LmpzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKHNlbGVjdG9yKSB7XG4gIHJldHVybiB0eXBlb2Ygc2VsZWN0b3IgPT09IFwic3RyaW5nXCJcbiAgICAgID8gbmV3IFNlbGVjdGlvbihbW2RvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpXV0sIFtkb2N1bWVudC5kb2N1bWVudEVsZW1lbnRdKVxuICAgICAgOiBuZXcgU2VsZWN0aW9uKFtbc2VsZWN0b3JdXSwgcm9vdCk7XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbihjb25zdHJ1Y3RvciwgZmFjdG9yeSwgcHJvdG90eXBlKSB7XG4gIGNvbnN0cnVjdG9yLnByb3RvdHlwZSA9IGZhY3RvcnkucHJvdG90eXBlID0gcHJvdG90eXBlO1xuICBwcm90b3R5cGUuY29uc3RydWN0b3IgPSBjb25zdHJ1Y3Rvcjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGV4dGVuZChwYXJlbnQsIGRlZmluaXRpb24pIHtcbiAgdmFyIHByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUocGFyZW50LnByb3RvdHlwZSk7XG4gIGZvciAodmFyIGtleSBpbiBkZWZpbml0aW9uKSBwcm90b3R5cGVba2V5XSA9IGRlZmluaXRpb25ba2V5XTtcbiAgcmV0dXJuIHByb3RvdHlwZTtcbn1cbiIsImltcG9ydCBkZWZpbmUsIHtleHRlbmR9IGZyb20gXCIuL2RlZmluZS5qc1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gQ29sb3IoKSB7fVxuXG5leHBvcnQgdmFyIGRhcmtlciA9IDAuNztcbmV4cG9ydCB2YXIgYnJpZ2h0ZXIgPSAxIC8gZGFya2VyO1xuXG52YXIgcmVJID0gXCJcXFxccyooWystXT9cXFxcZCspXFxcXHMqXCIsXG4gICAgcmVOID0gXCJcXFxccyooWystXT8oPzpcXFxcZCpcXFxcLik/XFxcXGQrKD86W2VFXVsrLV0/XFxcXGQrKT8pXFxcXHMqXCIsXG4gICAgcmVQID0gXCJcXFxccyooWystXT8oPzpcXFxcZCpcXFxcLik/XFxcXGQrKD86W2VFXVsrLV0/XFxcXGQrKT8pJVxcXFxzKlwiLFxuICAgIHJlSGV4ID0gL14jKFswLTlhLWZdezMsOH0pJC8sXG4gICAgcmVSZ2JJbnRlZ2VyID0gbmV3IFJlZ0V4cChgXnJnYlxcXFwoJHtyZUl9LCR7cmVJfSwke3JlSX1cXFxcKSRgKSxcbiAgICByZVJnYlBlcmNlbnQgPSBuZXcgUmVnRXhwKGBecmdiXFxcXCgke3JlUH0sJHtyZVB9LCR7cmVQfVxcXFwpJGApLFxuICAgIHJlUmdiYUludGVnZXIgPSBuZXcgUmVnRXhwKGBecmdiYVxcXFwoJHtyZUl9LCR7cmVJfSwke3JlSX0sJHtyZU59XFxcXCkkYCksXG4gICAgcmVSZ2JhUGVyY2VudCA9IG5ldyBSZWdFeHAoYF5yZ2JhXFxcXCgke3JlUH0sJHtyZVB9LCR7cmVQfSwke3JlTn1cXFxcKSRgKSxcbiAgICByZUhzbFBlcmNlbnQgPSBuZXcgUmVnRXhwKGBeaHNsXFxcXCgke3JlTn0sJHtyZVB9LCR7cmVQfVxcXFwpJGApLFxuICAgIHJlSHNsYVBlcmNlbnQgPSBuZXcgUmVnRXhwKGBeaHNsYVxcXFwoJHtyZU59LCR7cmVQfSwke3JlUH0sJHtyZU59XFxcXCkkYCk7XG5cbnZhciBuYW1lZCA9IHtcbiAgYWxpY2VibHVlOiAweGYwZjhmZixcbiAgYW50aXF1ZXdoaXRlOiAweGZhZWJkNyxcbiAgYXF1YTogMHgwMGZmZmYsXG4gIGFxdWFtYXJpbmU6IDB4N2ZmZmQ0LFxuICBhenVyZTogMHhmMGZmZmYsXG4gIGJlaWdlOiAweGY1ZjVkYyxcbiAgYmlzcXVlOiAweGZmZTRjNCxcbiAgYmxhY2s6IDB4MDAwMDAwLFxuICBibGFuY2hlZGFsbW9uZDogMHhmZmViY2QsXG4gIGJsdWU6IDB4MDAwMGZmLFxuICBibHVldmlvbGV0OiAweDhhMmJlMixcbiAgYnJvd246IDB4YTUyYTJhLFxuICBidXJseXdvb2Q6IDB4ZGViODg3LFxuICBjYWRldGJsdWU6IDB4NWY5ZWEwLFxuICBjaGFydHJldXNlOiAweDdmZmYwMCxcbiAgY2hvY29sYXRlOiAweGQyNjkxZSxcbiAgY29yYWw6IDB4ZmY3ZjUwLFxuICBjb3JuZmxvd2VyYmx1ZTogMHg2NDk1ZWQsXG4gIGNvcm5zaWxrOiAweGZmZjhkYyxcbiAgY3JpbXNvbjogMHhkYzE0M2MsXG4gIGN5YW46IDB4MDBmZmZmLFxuICBkYXJrYmx1ZTogMHgwMDAwOGIsXG4gIGRhcmtjeWFuOiAweDAwOGI4YixcbiAgZGFya2dvbGRlbnJvZDogMHhiODg2MGIsXG4gIGRhcmtncmF5OiAweGE5YTlhOSxcbiAgZGFya2dyZWVuOiAweDAwNjQwMCxcbiAgZGFya2dyZXk6IDB4YTlhOWE5LFxuICBkYXJra2hha2k6IDB4YmRiNzZiLFxuICBkYXJrbWFnZW50YTogMHg4YjAwOGIsXG4gIGRhcmtvbGl2ZWdyZWVuOiAweDU1NmIyZixcbiAgZGFya29yYW5nZTogMHhmZjhjMDAsXG4gIGRhcmtvcmNoaWQ6IDB4OTkzMmNjLFxuICBkYXJrcmVkOiAweDhiMDAwMCxcbiAgZGFya3NhbG1vbjogMHhlOTk2N2EsXG4gIGRhcmtzZWFncmVlbjogMHg4ZmJjOGYsXG4gIGRhcmtzbGF0ZWJsdWU6IDB4NDgzZDhiLFxuICBkYXJrc2xhdGVncmF5OiAweDJmNGY0ZixcbiAgZGFya3NsYXRlZ3JleTogMHgyZjRmNGYsXG4gIGRhcmt0dXJxdW9pc2U6IDB4MDBjZWQxLFxuICBkYXJrdmlvbGV0OiAweDk0MDBkMyxcbiAgZGVlcHBpbms6IDB4ZmYxNDkzLFxuICBkZWVwc2t5Ymx1ZTogMHgwMGJmZmYsXG4gIGRpbWdyYXk6IDB4Njk2OTY5LFxuICBkaW1ncmV5OiAweDY5Njk2OSxcbiAgZG9kZ2VyYmx1ZTogMHgxZTkwZmYsXG4gIGZpcmVicmljazogMHhiMjIyMjIsXG4gIGZsb3JhbHdoaXRlOiAweGZmZmFmMCxcbiAgZm9yZXN0Z3JlZW46IDB4MjI4YjIyLFxuICBmdWNoc2lhOiAweGZmMDBmZixcbiAgZ2FpbnNib3JvOiAweGRjZGNkYyxcbiAgZ2hvc3R3aGl0ZTogMHhmOGY4ZmYsXG4gIGdvbGQ6IDB4ZmZkNzAwLFxuICBnb2xkZW5yb2Q6IDB4ZGFhNTIwLFxuICBncmF5OiAweDgwODA4MCxcbiAgZ3JlZW46IDB4MDA4MDAwLFxuICBncmVlbnllbGxvdzogMHhhZGZmMmYsXG4gIGdyZXk6IDB4ODA4MDgwLFxuICBob25leWRldzogMHhmMGZmZjAsXG4gIGhvdHBpbms6IDB4ZmY2OWI0LFxuICBpbmRpYW5yZWQ6IDB4Y2Q1YzVjLFxuICBpbmRpZ286IDB4NGIwMDgyLFxuICBpdm9yeTogMHhmZmZmZjAsXG4gIGtoYWtpOiAweGYwZTY4YyxcbiAgbGF2ZW5kZXI6IDB4ZTZlNmZhLFxuICBsYXZlbmRlcmJsdXNoOiAweGZmZjBmNSxcbiAgbGF3bmdyZWVuOiAweDdjZmMwMCxcbiAgbGVtb25jaGlmZm9uOiAweGZmZmFjZCxcbiAgbGlnaHRibHVlOiAweGFkZDhlNixcbiAgbGlnaHRjb3JhbDogMHhmMDgwODAsXG4gIGxpZ2h0Y3lhbjogMHhlMGZmZmYsXG4gIGxpZ2h0Z29sZGVucm9keWVsbG93OiAweGZhZmFkMixcbiAgbGlnaHRncmF5OiAweGQzZDNkMyxcbiAgbGlnaHRncmVlbjogMHg5MGVlOTAsXG4gIGxpZ2h0Z3JleTogMHhkM2QzZDMsXG4gIGxpZ2h0cGluazogMHhmZmI2YzEsXG4gIGxpZ2h0c2FsbW9uOiAweGZmYTA3YSxcbiAgbGlnaHRzZWFncmVlbjogMHgyMGIyYWEsXG4gIGxpZ2h0c2t5Ymx1ZTogMHg4N2NlZmEsXG4gIGxpZ2h0c2xhdGVncmF5OiAweDc3ODg5OSxcbiAgbGlnaHRzbGF0ZWdyZXk6IDB4Nzc4ODk5LFxuICBsaWdodHN0ZWVsYmx1ZTogMHhiMGM0ZGUsXG4gIGxpZ2h0eWVsbG93OiAweGZmZmZlMCxcbiAgbGltZTogMHgwMGZmMDAsXG4gIGxpbWVncmVlbjogMHgzMmNkMzIsXG4gIGxpbmVuOiAweGZhZjBlNixcbiAgbWFnZW50YTogMHhmZjAwZmYsXG4gIG1hcm9vbjogMHg4MDAwMDAsXG4gIG1lZGl1bWFxdWFtYXJpbmU6IDB4NjZjZGFhLFxuICBtZWRpdW1ibHVlOiAweDAwMDBjZCxcbiAgbWVkaXVtb3JjaGlkOiAweGJhNTVkMyxcbiAgbWVkaXVtcHVycGxlOiAweDkzNzBkYixcbiAgbWVkaXVtc2VhZ3JlZW46IDB4M2NiMzcxLFxuICBtZWRpdW1zbGF0ZWJsdWU6IDB4N2I2OGVlLFxuICBtZWRpdW1zcHJpbmdncmVlbjogMHgwMGZhOWEsXG4gIG1lZGl1bXR1cnF1b2lzZTogMHg0OGQxY2MsXG4gIG1lZGl1bXZpb2xldHJlZDogMHhjNzE1ODUsXG4gIG1pZG5pZ2h0Ymx1ZTogMHgxOTE5NzAsXG4gIG1pbnRjcmVhbTogMHhmNWZmZmEsXG4gIG1pc3R5cm9zZTogMHhmZmU0ZTEsXG4gIG1vY2Nhc2luOiAweGZmZTRiNSxcbiAgbmF2YWpvd2hpdGU6IDB4ZmZkZWFkLFxuICBuYXZ5OiAweDAwMDA4MCxcbiAgb2xkbGFjZTogMHhmZGY1ZTYsXG4gIG9saXZlOiAweDgwODAwMCxcbiAgb2xpdmVkcmFiOiAweDZiOGUyMyxcbiAgb3JhbmdlOiAweGZmYTUwMCxcbiAgb3JhbmdlcmVkOiAweGZmNDUwMCxcbiAgb3JjaGlkOiAweGRhNzBkNixcbiAgcGFsZWdvbGRlbnJvZDogMHhlZWU4YWEsXG4gIHBhbGVncmVlbjogMHg5OGZiOTgsXG4gIHBhbGV0dXJxdW9pc2U6IDB4YWZlZWVlLFxuICBwYWxldmlvbGV0cmVkOiAweGRiNzA5MyxcbiAgcGFwYXlhd2hpcDogMHhmZmVmZDUsXG4gIHBlYWNocHVmZjogMHhmZmRhYjksXG4gIHBlcnU6IDB4Y2Q4NTNmLFxuICBwaW5rOiAweGZmYzBjYixcbiAgcGx1bTogMHhkZGEwZGQsXG4gIHBvd2RlcmJsdWU6IDB4YjBlMGU2LFxuICBwdXJwbGU6IDB4ODAwMDgwLFxuICByZWJlY2NhcHVycGxlOiAweDY2MzM5OSxcbiAgcmVkOiAweGZmMDAwMCxcbiAgcm9zeWJyb3duOiAweGJjOGY4ZixcbiAgcm95YWxibHVlOiAweDQxNjllMSxcbiAgc2FkZGxlYnJvd246IDB4OGI0NTEzLFxuICBzYWxtb246IDB4ZmE4MDcyLFxuICBzYW5keWJyb3duOiAweGY0YTQ2MCxcbiAgc2VhZ3JlZW46IDB4MmU4YjU3LFxuICBzZWFzaGVsbDogMHhmZmY1ZWUsXG4gIHNpZW5uYTogMHhhMDUyMmQsXG4gIHNpbHZlcjogMHhjMGMwYzAsXG4gIHNreWJsdWU6IDB4ODdjZWViLFxuICBzbGF0ZWJsdWU6IDB4NmE1YWNkLFxuICBzbGF0ZWdyYXk6IDB4NzA4MDkwLFxuICBzbGF0ZWdyZXk6IDB4NzA4MDkwLFxuICBzbm93OiAweGZmZmFmYSxcbiAgc3ByaW5nZ3JlZW46IDB4MDBmZjdmLFxuICBzdGVlbGJsdWU6IDB4NDY4MmI0LFxuICB0YW46IDB4ZDJiNDhjLFxuICB0ZWFsOiAweDAwODA4MCxcbiAgdGhpc3RsZTogMHhkOGJmZDgsXG4gIHRvbWF0bzogMHhmZjYzNDcsXG4gIHR1cnF1b2lzZTogMHg0MGUwZDAsXG4gIHZpb2xldDogMHhlZTgyZWUsXG4gIHdoZWF0OiAweGY1ZGViMyxcbiAgd2hpdGU6IDB4ZmZmZmZmLFxuICB3aGl0ZXNtb2tlOiAweGY1ZjVmNSxcbiAgeWVsbG93OiAweGZmZmYwMCxcbiAgeWVsbG93Z3JlZW46IDB4OWFjZDMyXG59O1xuXG5kZWZpbmUoQ29sb3IsIGNvbG9yLCB7XG4gIGNvcHkoY2hhbm5lbHMpIHtcbiAgICByZXR1cm4gT2JqZWN0LmFzc2lnbihuZXcgdGhpcy5jb25zdHJ1Y3RvciwgdGhpcywgY2hhbm5lbHMpO1xuICB9LFxuICBkaXNwbGF5YWJsZSgpIHtcbiAgICByZXR1cm4gdGhpcy5yZ2IoKS5kaXNwbGF5YWJsZSgpO1xuICB9LFxuICBoZXg6IGNvbG9yX2Zvcm1hdEhleCwgLy8gRGVwcmVjYXRlZCEgVXNlIGNvbG9yLmZvcm1hdEhleC5cbiAgZm9ybWF0SGV4OiBjb2xvcl9mb3JtYXRIZXgsXG4gIGZvcm1hdEhleDg6IGNvbG9yX2Zvcm1hdEhleDgsXG4gIGZvcm1hdEhzbDogY29sb3JfZm9ybWF0SHNsLFxuICBmb3JtYXRSZ2I6IGNvbG9yX2Zvcm1hdFJnYixcbiAgdG9TdHJpbmc6IGNvbG9yX2Zvcm1hdFJnYlxufSk7XG5cbmZ1bmN0aW9uIGNvbG9yX2Zvcm1hdEhleCgpIHtcbiAgcmV0dXJuIHRoaXMucmdiKCkuZm9ybWF0SGV4KCk7XG59XG5cbmZ1bmN0aW9uIGNvbG9yX2Zvcm1hdEhleDgoKSB7XG4gIHJldHVybiB0aGlzLnJnYigpLmZvcm1hdEhleDgoKTtcbn1cblxuZnVuY3Rpb24gY29sb3JfZm9ybWF0SHNsKCkge1xuICByZXR1cm4gaHNsQ29udmVydCh0aGlzKS5mb3JtYXRIc2woKTtcbn1cblxuZnVuY3Rpb24gY29sb3JfZm9ybWF0UmdiKCkge1xuICByZXR1cm4gdGhpcy5yZ2IoKS5mb3JtYXRSZ2IoKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY29sb3IoZm9ybWF0KSB7XG4gIHZhciBtLCBsO1xuICBmb3JtYXQgPSAoZm9ybWF0ICsgXCJcIikudHJpbSgpLnRvTG93ZXJDYXNlKCk7XG4gIHJldHVybiAobSA9IHJlSGV4LmV4ZWMoZm9ybWF0KSkgPyAobCA9IG1bMV0ubGVuZ3RoLCBtID0gcGFyc2VJbnQobVsxXSwgMTYpLCBsID09PSA2ID8gcmdibihtKSAvLyAjZmYwMDAwXG4gICAgICA6IGwgPT09IDMgPyBuZXcgUmdiKChtID4+IDggJiAweGYpIHwgKG0gPj4gNCAmIDB4ZjApLCAobSA+PiA0ICYgMHhmKSB8IChtICYgMHhmMCksICgobSAmIDB4ZikgPDwgNCkgfCAobSAmIDB4ZiksIDEpIC8vICNmMDBcbiAgICAgIDogbCA9PT0gOCA/IHJnYmEobSA+PiAyNCAmIDB4ZmYsIG0gPj4gMTYgJiAweGZmLCBtID4+IDggJiAweGZmLCAobSAmIDB4ZmYpIC8gMHhmZikgLy8gI2ZmMDAwMDAwXG4gICAgICA6IGwgPT09IDQgPyByZ2JhKChtID4+IDEyICYgMHhmKSB8IChtID4+IDggJiAweGYwKSwgKG0gPj4gOCAmIDB4ZikgfCAobSA+PiA0ICYgMHhmMCksIChtID4+IDQgJiAweGYpIHwgKG0gJiAweGYwKSwgKCgobSAmIDB4ZikgPDwgNCkgfCAobSAmIDB4ZikpIC8gMHhmZikgLy8gI2YwMDBcbiAgICAgIDogbnVsbCkgLy8gaW52YWxpZCBoZXhcbiAgICAgIDogKG0gPSByZVJnYkludGVnZXIuZXhlYyhmb3JtYXQpKSA/IG5ldyBSZ2IobVsxXSwgbVsyXSwgbVszXSwgMSkgLy8gcmdiKDI1NSwgMCwgMClcbiAgICAgIDogKG0gPSByZVJnYlBlcmNlbnQuZXhlYyhmb3JtYXQpKSA/IG5ldyBSZ2IobVsxXSAqIDI1NSAvIDEwMCwgbVsyXSAqIDI1NSAvIDEwMCwgbVszXSAqIDI1NSAvIDEwMCwgMSkgLy8gcmdiKDEwMCUsIDAlLCAwJSlcbiAgICAgIDogKG0gPSByZVJnYmFJbnRlZ2VyLmV4ZWMoZm9ybWF0KSkgPyByZ2JhKG1bMV0sIG1bMl0sIG1bM10sIG1bNF0pIC8vIHJnYmEoMjU1LCAwLCAwLCAxKVxuICAgICAgOiAobSA9IHJlUmdiYVBlcmNlbnQuZXhlYyhmb3JtYXQpKSA/IHJnYmEobVsxXSAqIDI1NSAvIDEwMCwgbVsyXSAqIDI1NSAvIDEwMCwgbVszXSAqIDI1NSAvIDEwMCwgbVs0XSkgLy8gcmdiKDEwMCUsIDAlLCAwJSwgMSlcbiAgICAgIDogKG0gPSByZUhzbFBlcmNlbnQuZXhlYyhmb3JtYXQpKSA/IGhzbGEobVsxXSwgbVsyXSAvIDEwMCwgbVszXSAvIDEwMCwgMSkgLy8gaHNsKDEyMCwgNTAlLCA1MCUpXG4gICAgICA6IChtID0gcmVIc2xhUGVyY2VudC5leGVjKGZvcm1hdCkpID8gaHNsYShtWzFdLCBtWzJdIC8gMTAwLCBtWzNdIC8gMTAwLCBtWzRdKSAvLyBoc2xhKDEyMCwgNTAlLCA1MCUsIDEpXG4gICAgICA6IG5hbWVkLmhhc093blByb3BlcnR5KGZvcm1hdCkgPyByZ2JuKG5hbWVkW2Zvcm1hdF0pIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tcHJvdG90eXBlLWJ1aWx0aW5zXG4gICAgICA6IGZvcm1hdCA9PT0gXCJ0cmFuc3BhcmVudFwiID8gbmV3IFJnYihOYU4sIE5hTiwgTmFOLCAwKVxuICAgICAgOiBudWxsO1xufVxuXG5mdW5jdGlvbiByZ2JuKG4pIHtcbiAgcmV0dXJuIG5ldyBSZ2IobiA+PiAxNiAmIDB4ZmYsIG4gPj4gOCAmIDB4ZmYsIG4gJiAweGZmLCAxKTtcbn1cblxuZnVuY3Rpb24gcmdiYShyLCBnLCBiLCBhKSB7XG4gIGlmIChhIDw9IDApIHIgPSBnID0gYiA9IE5hTjtcbiAgcmV0dXJuIG5ldyBSZ2IociwgZywgYiwgYSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZ2JDb252ZXJ0KG8pIHtcbiAgaWYgKCEobyBpbnN0YW5jZW9mIENvbG9yKSkgbyA9IGNvbG9yKG8pO1xuICBpZiAoIW8pIHJldHVybiBuZXcgUmdiO1xuICBvID0gby5yZ2IoKTtcbiAgcmV0dXJuIG5ldyBSZ2Ioby5yLCBvLmcsIG8uYiwgby5vcGFjaXR5KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJnYihyLCBnLCBiLCBvcGFjaXR5KSB7XG4gIHJldHVybiBhcmd1bWVudHMubGVuZ3RoID09PSAxID8gcmdiQ29udmVydChyKSA6IG5ldyBSZ2IociwgZywgYiwgb3BhY2l0eSA9PSBudWxsID8gMSA6IG9wYWNpdHkpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gUmdiKHIsIGcsIGIsIG9wYWNpdHkpIHtcbiAgdGhpcy5yID0gK3I7XG4gIHRoaXMuZyA9ICtnO1xuICB0aGlzLmIgPSArYjtcbiAgdGhpcy5vcGFjaXR5ID0gK29wYWNpdHk7XG59XG5cbmRlZmluZShSZ2IsIHJnYiwgZXh0ZW5kKENvbG9yLCB7XG4gIGJyaWdodGVyKGspIHtcbiAgICBrID0gayA9PSBudWxsID8gYnJpZ2h0ZXIgOiBNYXRoLnBvdyhicmlnaHRlciwgayk7XG4gICAgcmV0dXJuIG5ldyBSZ2IodGhpcy5yICogaywgdGhpcy5nICogaywgdGhpcy5iICogaywgdGhpcy5vcGFjaXR5KTtcbiAgfSxcbiAgZGFya2VyKGspIHtcbiAgICBrID0gayA9PSBudWxsID8gZGFya2VyIDogTWF0aC5wb3coZGFya2VyLCBrKTtcbiAgICByZXR1cm4gbmV3IFJnYih0aGlzLnIgKiBrLCB0aGlzLmcgKiBrLCB0aGlzLmIgKiBrLCB0aGlzLm9wYWNpdHkpO1xuICB9LFxuICByZ2IoKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH0sXG4gIGNsYW1wKCkge1xuICAgIHJldHVybiBuZXcgUmdiKGNsYW1waSh0aGlzLnIpLCBjbGFtcGkodGhpcy5nKSwgY2xhbXBpKHRoaXMuYiksIGNsYW1wYSh0aGlzLm9wYWNpdHkpKTtcbiAgfSxcbiAgZGlzcGxheWFibGUoKSB7XG4gICAgcmV0dXJuICgtMC41IDw9IHRoaXMuciAmJiB0aGlzLnIgPCAyNTUuNSlcbiAgICAgICAgJiYgKC0wLjUgPD0gdGhpcy5nICYmIHRoaXMuZyA8IDI1NS41KVxuICAgICAgICAmJiAoLTAuNSA8PSB0aGlzLmIgJiYgdGhpcy5iIDwgMjU1LjUpXG4gICAgICAgICYmICgwIDw9IHRoaXMub3BhY2l0eSAmJiB0aGlzLm9wYWNpdHkgPD0gMSk7XG4gIH0sXG4gIGhleDogcmdiX2Zvcm1hdEhleCwgLy8gRGVwcmVjYXRlZCEgVXNlIGNvbG9yLmZvcm1hdEhleC5cbiAgZm9ybWF0SGV4OiByZ2JfZm9ybWF0SGV4LFxuICBmb3JtYXRIZXg4OiByZ2JfZm9ybWF0SGV4OCxcbiAgZm9ybWF0UmdiOiByZ2JfZm9ybWF0UmdiLFxuICB0b1N0cmluZzogcmdiX2Zvcm1hdFJnYlxufSkpO1xuXG5mdW5jdGlvbiByZ2JfZm9ybWF0SGV4KCkge1xuICByZXR1cm4gYCMke2hleCh0aGlzLnIpfSR7aGV4KHRoaXMuZyl9JHtoZXgodGhpcy5iKX1gO1xufVxuXG5mdW5jdGlvbiByZ2JfZm9ybWF0SGV4OCgpIHtcbiAgcmV0dXJuIGAjJHtoZXgodGhpcy5yKX0ke2hleCh0aGlzLmcpfSR7aGV4KHRoaXMuYil9JHtoZXgoKGlzTmFOKHRoaXMub3BhY2l0eSkgPyAxIDogdGhpcy5vcGFjaXR5KSAqIDI1NSl9YDtcbn1cblxuZnVuY3Rpb24gcmdiX2Zvcm1hdFJnYigpIHtcbiAgY29uc3QgYSA9IGNsYW1wYSh0aGlzLm9wYWNpdHkpO1xuICByZXR1cm4gYCR7YSA9PT0gMSA/IFwicmdiKFwiIDogXCJyZ2JhKFwifSR7Y2xhbXBpKHRoaXMucil9LCAke2NsYW1waSh0aGlzLmcpfSwgJHtjbGFtcGkodGhpcy5iKX0ke2EgPT09IDEgPyBcIilcIiA6IGAsICR7YX0pYH1gO1xufVxuXG5mdW5jdGlvbiBjbGFtcGEob3BhY2l0eSkge1xuICByZXR1cm4gaXNOYU4ob3BhY2l0eSkgPyAxIDogTWF0aC5tYXgoMCwgTWF0aC5taW4oMSwgb3BhY2l0eSkpO1xufVxuXG5mdW5jdGlvbiBjbGFtcGkodmFsdWUpIHtcbiAgcmV0dXJuIE1hdGgubWF4KDAsIE1hdGgubWluKDI1NSwgTWF0aC5yb3VuZCh2YWx1ZSkgfHwgMCkpO1xufVxuXG5mdW5jdGlvbiBoZXgodmFsdWUpIHtcbiAgdmFsdWUgPSBjbGFtcGkodmFsdWUpO1xuICByZXR1cm4gKHZhbHVlIDwgMTYgPyBcIjBcIiA6IFwiXCIpICsgdmFsdWUudG9TdHJpbmcoMTYpO1xufVxuXG5mdW5jdGlvbiBoc2xhKGgsIHMsIGwsIGEpIHtcbiAgaWYgKGEgPD0gMCkgaCA9IHMgPSBsID0gTmFOO1xuICBlbHNlIGlmIChsIDw9IDAgfHwgbCA+PSAxKSBoID0gcyA9IE5hTjtcbiAgZWxzZSBpZiAocyA8PSAwKSBoID0gTmFOO1xuICByZXR1cm4gbmV3IEhzbChoLCBzLCBsLCBhKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGhzbENvbnZlcnQobykge1xuICBpZiAobyBpbnN0YW5jZW9mIEhzbCkgcmV0dXJuIG5ldyBIc2woby5oLCBvLnMsIG8ubCwgby5vcGFjaXR5KTtcbiAgaWYgKCEobyBpbnN0YW5jZW9mIENvbG9yKSkgbyA9IGNvbG9yKG8pO1xuICBpZiAoIW8pIHJldHVybiBuZXcgSHNsO1xuICBpZiAobyBpbnN0YW5jZW9mIEhzbCkgcmV0dXJuIG87XG4gIG8gPSBvLnJnYigpO1xuICB2YXIgciA9IG8uciAvIDI1NSxcbiAgICAgIGcgPSBvLmcgLyAyNTUsXG4gICAgICBiID0gby5iIC8gMjU1LFxuICAgICAgbWluID0gTWF0aC5taW4ociwgZywgYiksXG4gICAgICBtYXggPSBNYXRoLm1heChyLCBnLCBiKSxcbiAgICAgIGggPSBOYU4sXG4gICAgICBzID0gbWF4IC0gbWluLFxuICAgICAgbCA9IChtYXggKyBtaW4pIC8gMjtcbiAgaWYgKHMpIHtcbiAgICBpZiAociA9PT0gbWF4KSBoID0gKGcgLSBiKSAvIHMgKyAoZyA8IGIpICogNjtcbiAgICBlbHNlIGlmIChnID09PSBtYXgpIGggPSAoYiAtIHIpIC8gcyArIDI7XG4gICAgZWxzZSBoID0gKHIgLSBnKSAvIHMgKyA0O1xuICAgIHMgLz0gbCA8IDAuNSA/IG1heCArIG1pbiA6IDIgLSBtYXggLSBtaW47XG4gICAgaCAqPSA2MDtcbiAgfSBlbHNlIHtcbiAgICBzID0gbCA+IDAgJiYgbCA8IDEgPyAwIDogaDtcbiAgfVxuICByZXR1cm4gbmV3IEhzbChoLCBzLCBsLCBvLm9wYWNpdHkpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaHNsKGgsIHMsIGwsIG9wYWNpdHkpIHtcbiAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPT09IDEgPyBoc2xDb252ZXJ0KGgpIDogbmV3IEhzbChoLCBzLCBsLCBvcGFjaXR5ID09IG51bGwgPyAxIDogb3BhY2l0eSk7XG59XG5cbmZ1bmN0aW9uIEhzbChoLCBzLCBsLCBvcGFjaXR5KSB7XG4gIHRoaXMuaCA9ICtoO1xuICB0aGlzLnMgPSArcztcbiAgdGhpcy5sID0gK2w7XG4gIHRoaXMub3BhY2l0eSA9ICtvcGFjaXR5O1xufVxuXG5kZWZpbmUoSHNsLCBoc2wsIGV4dGVuZChDb2xvciwge1xuICBicmlnaHRlcihrKSB7XG4gICAgayA9IGsgPT0gbnVsbCA/IGJyaWdodGVyIDogTWF0aC5wb3coYnJpZ2h0ZXIsIGspO1xuICAgIHJldHVybiBuZXcgSHNsKHRoaXMuaCwgdGhpcy5zLCB0aGlzLmwgKiBrLCB0aGlzLm9wYWNpdHkpO1xuICB9LFxuICBkYXJrZXIoaykge1xuICAgIGsgPSBrID09IG51bGwgPyBkYXJrZXIgOiBNYXRoLnBvdyhkYXJrZXIsIGspO1xuICAgIHJldHVybiBuZXcgSHNsKHRoaXMuaCwgdGhpcy5zLCB0aGlzLmwgKiBrLCB0aGlzLm9wYWNpdHkpO1xuICB9LFxuICByZ2IoKSB7XG4gICAgdmFyIGggPSB0aGlzLmggJSAzNjAgKyAodGhpcy5oIDwgMCkgKiAzNjAsXG4gICAgICAgIHMgPSBpc05hTihoKSB8fCBpc05hTih0aGlzLnMpID8gMCA6IHRoaXMucyxcbiAgICAgICAgbCA9IHRoaXMubCxcbiAgICAgICAgbTIgPSBsICsgKGwgPCAwLjUgPyBsIDogMSAtIGwpICogcyxcbiAgICAgICAgbTEgPSAyICogbCAtIG0yO1xuICAgIHJldHVybiBuZXcgUmdiKFxuICAgICAgaHNsMnJnYihoID49IDI0MCA/IGggLSAyNDAgOiBoICsgMTIwLCBtMSwgbTIpLFxuICAgICAgaHNsMnJnYihoLCBtMSwgbTIpLFxuICAgICAgaHNsMnJnYihoIDwgMTIwID8gaCArIDI0MCA6IGggLSAxMjAsIG0xLCBtMiksXG4gICAgICB0aGlzLm9wYWNpdHlcbiAgICApO1xuICB9LFxuICBjbGFtcCgpIHtcbiAgICByZXR1cm4gbmV3IEhzbChjbGFtcGgodGhpcy5oKSwgY2xhbXB0KHRoaXMucyksIGNsYW1wdCh0aGlzLmwpLCBjbGFtcGEodGhpcy5vcGFjaXR5KSk7XG4gIH0sXG4gIGRpc3BsYXlhYmxlKCkge1xuICAgIHJldHVybiAoMCA8PSB0aGlzLnMgJiYgdGhpcy5zIDw9IDEgfHwgaXNOYU4odGhpcy5zKSlcbiAgICAgICAgJiYgKDAgPD0gdGhpcy5sICYmIHRoaXMubCA8PSAxKVxuICAgICAgICAmJiAoMCA8PSB0aGlzLm9wYWNpdHkgJiYgdGhpcy5vcGFjaXR5IDw9IDEpO1xuICB9LFxuICBmb3JtYXRIc2woKSB7XG4gICAgY29uc3QgYSA9IGNsYW1wYSh0aGlzLm9wYWNpdHkpO1xuICAgIHJldHVybiBgJHthID09PSAxID8gXCJoc2woXCIgOiBcImhzbGEoXCJ9JHtjbGFtcGgodGhpcy5oKX0sICR7Y2xhbXB0KHRoaXMucykgKiAxMDB9JSwgJHtjbGFtcHQodGhpcy5sKSAqIDEwMH0lJHthID09PSAxID8gXCIpXCIgOiBgLCAke2F9KWB9YDtcbiAgfVxufSkpO1xuXG5mdW5jdGlvbiBjbGFtcGgodmFsdWUpIHtcbiAgdmFsdWUgPSAodmFsdWUgfHwgMCkgJSAzNjA7XG4gIHJldHVybiB2YWx1ZSA8IDAgPyB2YWx1ZSArIDM2MCA6IHZhbHVlO1xufVxuXG5mdW5jdGlvbiBjbGFtcHQodmFsdWUpIHtcbiAgcmV0dXJuIE1hdGgubWF4KDAsIE1hdGgubWluKDEsIHZhbHVlIHx8IDApKTtcbn1cblxuLyogRnJvbSBGdkQgMTMuMzcsIENTUyBDb2xvciBNb2R1bGUgTGV2ZWwgMyAqL1xuZnVuY3Rpb24gaHNsMnJnYihoLCBtMSwgbTIpIHtcbiAgcmV0dXJuIChoIDwgNjAgPyBtMSArIChtMiAtIG0xKSAqIGggLyA2MFxuICAgICAgOiBoIDwgMTgwID8gbTJcbiAgICAgIDogaCA8IDI0MCA/IG0xICsgKG0yIC0gbTEpICogKDI0MCAtIGgpIC8gNjBcbiAgICAgIDogbTEpICogMjU1O1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgeCA9PiAoKSA9PiB4O1xuIiwiaW1wb3J0IGNvbnN0YW50IGZyb20gXCIuL2NvbnN0YW50LmpzXCI7XG5cbmZ1bmN0aW9uIGxpbmVhcihhLCBkKSB7XG4gIHJldHVybiBmdW5jdGlvbih0KSB7XG4gICAgcmV0dXJuIGEgKyB0ICogZDtcbiAgfTtcbn1cblxuZnVuY3Rpb24gZXhwb25lbnRpYWwoYSwgYiwgeSkge1xuICByZXR1cm4gYSA9IE1hdGgucG93KGEsIHkpLCBiID0gTWF0aC5wb3coYiwgeSkgLSBhLCB5ID0gMSAvIHksIGZ1bmN0aW9uKHQpIHtcbiAgICByZXR1cm4gTWF0aC5wb3coYSArIHQgKiBiLCB5KTtcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGh1ZShhLCBiKSB7XG4gIHZhciBkID0gYiAtIGE7XG4gIHJldHVybiBkID8gbGluZWFyKGEsIGQgPiAxODAgfHwgZCA8IC0xODAgPyBkIC0gMzYwICogTWF0aC5yb3VuZChkIC8gMzYwKSA6IGQpIDogY29uc3RhbnQoaXNOYU4oYSkgPyBiIDogYSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnYW1tYSh5KSB7XG4gIHJldHVybiAoeSA9ICt5KSA9PT0gMSA/IG5vZ2FtbWEgOiBmdW5jdGlvbihhLCBiKSB7XG4gICAgcmV0dXJuIGIgLSBhID8gZXhwb25lbnRpYWwoYSwgYiwgeSkgOiBjb25zdGFudChpc05hTihhKSA/IGIgOiBhKTtcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbm9nYW1tYShhLCBiKSB7XG4gIHZhciBkID0gYiAtIGE7XG4gIHJldHVybiBkID8gbGluZWFyKGEsIGQpIDogY29uc3RhbnQoaXNOYU4oYSkgPyBiIDogYSk7XG59XG4iLCJpbXBvcnQge3JnYiBhcyBjb2xvclJnYn0gZnJvbSBcImQzLWNvbG9yXCI7XG5pbXBvcnQgYmFzaXMgZnJvbSBcIi4vYmFzaXMuanNcIjtcbmltcG9ydCBiYXNpc0Nsb3NlZCBmcm9tIFwiLi9iYXNpc0Nsb3NlZC5qc1wiO1xuaW1wb3J0IG5vZ2FtbWEsIHtnYW1tYX0gZnJvbSBcIi4vY29sb3IuanNcIjtcblxuZXhwb3J0IGRlZmF1bHQgKGZ1bmN0aW9uIHJnYkdhbW1hKHkpIHtcbiAgdmFyIGNvbG9yID0gZ2FtbWEoeSk7XG5cbiAgZnVuY3Rpb24gcmdiKHN0YXJ0LCBlbmQpIHtcbiAgICB2YXIgciA9IGNvbG9yKChzdGFydCA9IGNvbG9yUmdiKHN0YXJ0KSkuciwgKGVuZCA9IGNvbG9yUmdiKGVuZCkpLnIpLFxuICAgICAgICBnID0gY29sb3Ioc3RhcnQuZywgZW5kLmcpLFxuICAgICAgICBiID0gY29sb3Ioc3RhcnQuYiwgZW5kLmIpLFxuICAgICAgICBvcGFjaXR5ID0gbm9nYW1tYShzdGFydC5vcGFjaXR5LCBlbmQub3BhY2l0eSk7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKHQpIHtcbiAgICAgIHN0YXJ0LnIgPSByKHQpO1xuICAgICAgc3RhcnQuZyA9IGcodCk7XG4gICAgICBzdGFydC5iID0gYih0KTtcbiAgICAgIHN0YXJ0Lm9wYWNpdHkgPSBvcGFjaXR5KHQpO1xuICAgICAgcmV0dXJuIHN0YXJ0ICsgXCJcIjtcbiAgICB9O1xuICB9XG5cbiAgcmdiLmdhbW1hID0gcmdiR2FtbWE7XG5cbiAgcmV0dXJuIHJnYjtcbn0pKDEpO1xuXG5mdW5jdGlvbiByZ2JTcGxpbmUoc3BsaW5lKSB7XG4gIHJldHVybiBmdW5jdGlvbihjb2xvcnMpIHtcbiAgICB2YXIgbiA9IGNvbG9ycy5sZW5ndGgsXG4gICAgICAgIHIgPSBuZXcgQXJyYXkobiksXG4gICAgICAgIGcgPSBuZXcgQXJyYXkobiksXG4gICAgICAgIGIgPSBuZXcgQXJyYXkobiksXG4gICAgICAgIGksIGNvbG9yO1xuICAgIGZvciAoaSA9IDA7IGkgPCBuOyArK2kpIHtcbiAgICAgIGNvbG9yID0gY29sb3JSZ2IoY29sb3JzW2ldKTtcbiAgICAgIHJbaV0gPSBjb2xvci5yIHx8IDA7XG4gICAgICBnW2ldID0gY29sb3IuZyB8fCAwO1xuICAgICAgYltpXSA9IGNvbG9yLmIgfHwgMDtcbiAgICB9XG4gICAgciA9IHNwbGluZShyKTtcbiAgICBnID0gc3BsaW5lKGcpO1xuICAgIGIgPSBzcGxpbmUoYik7XG4gICAgY29sb3Iub3BhY2l0eSA9IDE7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKHQpIHtcbiAgICAgIGNvbG9yLnIgPSByKHQpO1xuICAgICAgY29sb3IuZyA9IGcodCk7XG4gICAgICBjb2xvci5iID0gYih0KTtcbiAgICAgIHJldHVybiBjb2xvciArIFwiXCI7XG4gICAgfTtcbiAgfTtcbn1cblxuZXhwb3J0IHZhciByZ2JCYXNpcyA9IHJnYlNwbGluZShiYXNpcyk7XG5leHBvcnQgdmFyIHJnYkJhc2lzQ2xvc2VkID0gcmdiU3BsaW5lKGJhc2lzQ2xvc2VkKTtcbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKGEsIGIpIHtcbiAgaWYgKCFiKSBiID0gW107XG4gIHZhciBuID0gYSA/IE1hdGgubWluKGIubGVuZ3RoLCBhLmxlbmd0aCkgOiAwLFxuICAgICAgYyA9IGIuc2xpY2UoKSxcbiAgICAgIGk7XG4gIHJldHVybiBmdW5jdGlvbih0KSB7XG4gICAgZm9yIChpID0gMDsgaSA8IG47ICsraSkgY1tpXSA9IGFbaV0gKiAoMSAtIHQpICsgYltpXSAqIHQ7XG4gICAgcmV0dXJuIGM7XG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc051bWJlckFycmF5KHgpIHtcbiAgcmV0dXJuIEFycmF5QnVmZmVyLmlzVmlldyh4KSAmJiAhKHggaW5zdGFuY2VvZiBEYXRhVmlldyk7XG59XG4iLCJpbXBvcnQgdmFsdWUgZnJvbSBcIi4vdmFsdWUuanNcIjtcbmltcG9ydCBudW1iZXJBcnJheSwge2lzTnVtYmVyQXJyYXl9IGZyb20gXCIuL251bWJlckFycmF5LmpzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKGEsIGIpIHtcbiAgcmV0dXJuIChpc051bWJlckFycmF5KGIpID8gbnVtYmVyQXJyYXkgOiBnZW5lcmljQXJyYXkpKGEsIGIpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2VuZXJpY0FycmF5KGEsIGIpIHtcbiAgdmFyIG5iID0gYiA/IGIubGVuZ3RoIDogMCxcbiAgICAgIG5hID0gYSA/IE1hdGgubWluKG5iLCBhLmxlbmd0aCkgOiAwLFxuICAgICAgeCA9IG5ldyBBcnJheShuYSksXG4gICAgICBjID0gbmV3IEFycmF5KG5iKSxcbiAgICAgIGk7XG5cbiAgZm9yIChpID0gMDsgaSA8IG5hOyArK2kpIHhbaV0gPSB2YWx1ZShhW2ldLCBiW2ldKTtcbiAgZm9yICg7IGkgPCBuYjsgKytpKSBjW2ldID0gYltpXTtcblxuICByZXR1cm4gZnVuY3Rpb24odCkge1xuICAgIGZvciAoaSA9IDA7IGkgPCBuYTsgKytpKSBjW2ldID0geFtpXSh0KTtcbiAgICByZXR1cm4gYztcbiAgfTtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKGEsIGIpIHtcbiAgdmFyIGQgPSBuZXcgRGF0ZTtcbiAgcmV0dXJuIGEgPSArYSwgYiA9ICtiLCBmdW5jdGlvbih0KSB7XG4gICAgcmV0dXJuIGQuc2V0VGltZShhICogKDEgLSB0KSArIGIgKiB0KSwgZDtcbiAgfTtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKGEsIGIpIHtcbiAgcmV0dXJuIGEgPSArYSwgYiA9ICtiLCBmdW5jdGlvbih0KSB7XG4gICAgcmV0dXJuIGEgKiAoMSAtIHQpICsgYiAqIHQ7XG4gIH07XG59XG4iLCJpbXBvcnQgdmFsdWUgZnJvbSBcIi4vdmFsdWUuanNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oYSwgYikge1xuICB2YXIgaSA9IHt9LFxuICAgICAgYyA9IHt9LFxuICAgICAgaztcblxuICBpZiAoYSA9PT0gbnVsbCB8fCB0eXBlb2YgYSAhPT0gXCJvYmplY3RcIikgYSA9IHt9O1xuICBpZiAoYiA9PT0gbnVsbCB8fCB0eXBlb2YgYiAhPT0gXCJvYmplY3RcIikgYiA9IHt9O1xuXG4gIGZvciAoayBpbiBiKSB7XG4gICAgaWYgKGsgaW4gYSkge1xuICAgICAgaVtrXSA9IHZhbHVlKGFba10sIGJba10pO1xuICAgIH0gZWxzZSB7XG4gICAgICBjW2tdID0gYltrXTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZnVuY3Rpb24odCkge1xuICAgIGZvciAoayBpbiBpKSBjW2tdID0gaVtrXSh0KTtcbiAgICByZXR1cm4gYztcbiAgfTtcbn1cbiIsImltcG9ydCBudW1iZXIgZnJvbSBcIi4vbnVtYmVyLmpzXCI7XG5cbnZhciByZUEgPSAvWy0rXT8oPzpcXGQrXFwuP1xcZCp8XFwuP1xcZCspKD86W2VFXVstK10/XFxkKyk/L2csXG4gICAgcmVCID0gbmV3IFJlZ0V4cChyZUEuc291cmNlLCBcImdcIik7XG5cbmZ1bmN0aW9uIHplcm8oYikge1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIGI7XG4gIH07XG59XG5cbmZ1bmN0aW9uIG9uZShiKSB7XG4gIHJldHVybiBmdW5jdGlvbih0KSB7XG4gICAgcmV0dXJuIGIodCkgKyBcIlwiO1xuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihhLCBiKSB7XG4gIHZhciBiaSA9IHJlQS5sYXN0SW5kZXggPSByZUIubGFzdEluZGV4ID0gMCwgLy8gc2NhbiBpbmRleCBmb3IgbmV4dCBudW1iZXIgaW4gYlxuICAgICAgYW0sIC8vIGN1cnJlbnQgbWF0Y2ggaW4gYVxuICAgICAgYm0sIC8vIGN1cnJlbnQgbWF0Y2ggaW4gYlxuICAgICAgYnMsIC8vIHN0cmluZyBwcmVjZWRpbmcgY3VycmVudCBudW1iZXIgaW4gYiwgaWYgYW55XG4gICAgICBpID0gLTEsIC8vIGluZGV4IGluIHNcbiAgICAgIHMgPSBbXSwgLy8gc3RyaW5nIGNvbnN0YW50cyBhbmQgcGxhY2Vob2xkZXJzXG4gICAgICBxID0gW107IC8vIG51bWJlciBpbnRlcnBvbGF0b3JzXG5cbiAgLy8gQ29lcmNlIGlucHV0cyB0byBzdHJpbmdzLlxuICBhID0gYSArIFwiXCIsIGIgPSBiICsgXCJcIjtcblxuICAvLyBJbnRlcnBvbGF0ZSBwYWlycyBvZiBudW1iZXJzIGluIGEgJiBiLlxuICB3aGlsZSAoKGFtID0gcmVBLmV4ZWMoYSkpXG4gICAgICAmJiAoYm0gPSByZUIuZXhlYyhiKSkpIHtcbiAgICBpZiAoKGJzID0gYm0uaW5kZXgpID4gYmkpIHsgLy8gYSBzdHJpbmcgcHJlY2VkZXMgdGhlIG5leHQgbnVtYmVyIGluIGJcbiAgICAgIGJzID0gYi5zbGljZShiaSwgYnMpO1xuICAgICAgaWYgKHNbaV0pIHNbaV0gKz0gYnM7IC8vIGNvYWxlc2NlIHdpdGggcHJldmlvdXMgc3RyaW5nXG4gICAgICBlbHNlIHNbKytpXSA9IGJzO1xuICAgIH1cbiAgICBpZiAoKGFtID0gYW1bMF0pID09PSAoYm0gPSBibVswXSkpIHsgLy8gbnVtYmVycyBpbiBhICYgYiBtYXRjaFxuICAgICAgaWYgKHNbaV0pIHNbaV0gKz0gYm07IC8vIGNvYWxlc2NlIHdpdGggcHJldmlvdXMgc3RyaW5nXG4gICAgICBlbHNlIHNbKytpXSA9IGJtO1xuICAgIH0gZWxzZSB7IC8vIGludGVycG9sYXRlIG5vbi1tYXRjaGluZyBudW1iZXJzXG4gICAgICBzWysraV0gPSBudWxsO1xuICAgICAgcS5wdXNoKHtpOiBpLCB4OiBudW1iZXIoYW0sIGJtKX0pO1xuICAgIH1cbiAgICBiaSA9IHJlQi5sYXN0SW5kZXg7XG4gIH1cblxuICAvLyBBZGQgcmVtYWlucyBvZiBiLlxuICBpZiAoYmkgPCBiLmxlbmd0aCkge1xuICAgIGJzID0gYi5zbGljZShiaSk7XG4gICAgaWYgKHNbaV0pIHNbaV0gKz0gYnM7IC8vIGNvYWxlc2NlIHdpdGggcHJldmlvdXMgc3RyaW5nXG4gICAgZWxzZSBzWysraV0gPSBicztcbiAgfVxuXG4gIC8vIFNwZWNpYWwgb3B0aW1pemF0aW9uIGZvciBvbmx5IGEgc2luZ2xlIG1hdGNoLlxuICAvLyBPdGhlcndpc2UsIGludGVycG9sYXRlIGVhY2ggb2YgdGhlIG51bWJlcnMgYW5kIHJlam9pbiB0aGUgc3RyaW5nLlxuICByZXR1cm4gcy5sZW5ndGggPCAyID8gKHFbMF1cbiAgICAgID8gb25lKHFbMF0ueClcbiAgICAgIDogemVybyhiKSlcbiAgICAgIDogKGIgPSBxLmxlbmd0aCwgZnVuY3Rpb24odCkge1xuICAgICAgICAgIGZvciAodmFyIGkgPSAwLCBvOyBpIDwgYjsgKytpKSBzWyhvID0gcVtpXSkuaV0gPSBvLngodCk7XG4gICAgICAgICAgcmV0dXJuIHMuam9pbihcIlwiKTtcbiAgICAgICAgfSk7XG59XG4iLCJpbXBvcnQge2NvbG9yfSBmcm9tIFwiZDMtY29sb3JcIjtcbmltcG9ydCByZ2IgZnJvbSBcIi4vcmdiLmpzXCI7XG5pbXBvcnQge2dlbmVyaWNBcnJheX0gZnJvbSBcIi4vYXJyYXkuanNcIjtcbmltcG9ydCBkYXRlIGZyb20gXCIuL2RhdGUuanNcIjtcbmltcG9ydCBudW1iZXIgZnJvbSBcIi4vbnVtYmVyLmpzXCI7XG5pbXBvcnQgb2JqZWN0IGZyb20gXCIuL29iamVjdC5qc1wiO1xuaW1wb3J0IHN0cmluZyBmcm9tIFwiLi9zdHJpbmcuanNcIjtcbmltcG9ydCBjb25zdGFudCBmcm9tIFwiLi9jb25zdGFudC5qc1wiO1xuaW1wb3J0IG51bWJlckFycmF5LCB7aXNOdW1iZXJBcnJheX0gZnJvbSBcIi4vbnVtYmVyQXJyYXkuanNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oYSwgYikge1xuICB2YXIgdCA9IHR5cGVvZiBiLCBjO1xuICByZXR1cm4gYiA9PSBudWxsIHx8IHQgPT09IFwiYm9vbGVhblwiID8gY29uc3RhbnQoYilcbiAgICAgIDogKHQgPT09IFwibnVtYmVyXCIgPyBudW1iZXJcbiAgICAgIDogdCA9PT0gXCJzdHJpbmdcIiA/ICgoYyA9IGNvbG9yKGIpKSA/IChiID0gYywgcmdiKSA6IHN0cmluZylcbiAgICAgIDogYiBpbnN0YW5jZW9mIGNvbG9yID8gcmdiXG4gICAgICA6IGIgaW5zdGFuY2VvZiBEYXRlID8gZGF0ZVxuICAgICAgOiBpc051bWJlckFycmF5KGIpID8gbnVtYmVyQXJyYXlcbiAgICAgIDogQXJyYXkuaXNBcnJheShiKSA/IGdlbmVyaWNBcnJheVxuICAgICAgOiB0eXBlb2YgYi52YWx1ZU9mICE9PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIGIudG9TdHJpbmcgIT09IFwiZnVuY3Rpb25cIiB8fCBpc05hTihiKSA/IG9iamVjdFxuICAgICAgOiBudW1iZXIpKGEsIGIpO1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oYSwgYikge1xuICByZXR1cm4gYSA9ICthLCBiID0gK2IsIGZ1bmN0aW9uKHQpIHtcbiAgICByZXR1cm4gTWF0aC5yb3VuZChhICogKDEgLSB0KSArIGIgKiB0KTtcbiAgfTtcbn1cbiIsInZhciBkZWdyZWVzID0gMTgwIC8gTWF0aC5QSTtcblxuZXhwb3J0IHZhciBpZGVudGl0eSA9IHtcbiAgdHJhbnNsYXRlWDogMCxcbiAgdHJhbnNsYXRlWTogMCxcbiAgcm90YXRlOiAwLFxuICBza2V3WDogMCxcbiAgc2NhbGVYOiAxLFxuICBzY2FsZVk6IDFcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKGEsIGIsIGMsIGQsIGUsIGYpIHtcbiAgdmFyIHNjYWxlWCwgc2NhbGVZLCBza2V3WDtcbiAgaWYgKHNjYWxlWCA9IE1hdGguc3FydChhICogYSArIGIgKiBiKSkgYSAvPSBzY2FsZVgsIGIgLz0gc2NhbGVYO1xuICBpZiAoc2tld1ggPSBhICogYyArIGIgKiBkKSBjIC09IGEgKiBza2V3WCwgZCAtPSBiICogc2tld1g7XG4gIGlmIChzY2FsZVkgPSBNYXRoLnNxcnQoYyAqIGMgKyBkICogZCkpIGMgLz0gc2NhbGVZLCBkIC89IHNjYWxlWSwgc2tld1ggLz0gc2NhbGVZO1xuICBpZiAoYSAqIGQgPCBiICogYykgYSA9IC1hLCBiID0gLWIsIHNrZXdYID0gLXNrZXdYLCBzY2FsZVggPSAtc2NhbGVYO1xuICByZXR1cm4ge1xuICAgIHRyYW5zbGF0ZVg6IGUsXG4gICAgdHJhbnNsYXRlWTogZixcbiAgICByb3RhdGU6IE1hdGguYXRhbjIoYiwgYSkgKiBkZWdyZWVzLFxuICAgIHNrZXdYOiBNYXRoLmF0YW4oc2tld1gpICogZGVncmVlcyxcbiAgICBzY2FsZVg6IHNjYWxlWCxcbiAgICBzY2FsZVk6IHNjYWxlWVxuICB9O1xufVxuIiwiaW1wb3J0IGRlY29tcG9zZSwge2lkZW50aXR5fSBmcm9tIFwiLi9kZWNvbXBvc2UuanNcIjtcblxudmFyIHN2Z05vZGU7XG5cbi8qIGVzbGludC1kaXNhYmxlIG5vLXVuZGVmICovXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VDc3ModmFsdWUpIHtcbiAgY29uc3QgbSA9IG5ldyAodHlwZW9mIERPTU1hdHJpeCA9PT0gXCJmdW5jdGlvblwiID8gRE9NTWF0cml4IDogV2ViS2l0Q1NTTWF0cml4KSh2YWx1ZSArIFwiXCIpO1xuICByZXR1cm4gbS5pc0lkZW50aXR5ID8gaWRlbnRpdHkgOiBkZWNvbXBvc2UobS5hLCBtLmIsIG0uYywgbS5kLCBtLmUsIG0uZik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZVN2Zyh2YWx1ZSkge1xuICBpZiAodmFsdWUgPT0gbnVsbCkgcmV0dXJuIGlkZW50aXR5O1xuICBpZiAoIXN2Z05vZGUpIHN2Z05vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiLCBcImdcIik7XG4gIHN2Z05vZGUuc2V0QXR0cmlidXRlKFwidHJhbnNmb3JtXCIsIHZhbHVlKTtcbiAgaWYgKCEodmFsdWUgPSBzdmdOb2RlLnRyYW5zZm9ybS5iYXNlVmFsLmNvbnNvbGlkYXRlKCkpKSByZXR1cm4gaWRlbnRpdHk7XG4gIHZhbHVlID0gdmFsdWUubWF0cml4O1xuICByZXR1cm4gZGVjb21wb3NlKHZhbHVlLmEsIHZhbHVlLmIsIHZhbHVlLmMsIHZhbHVlLmQsIHZhbHVlLmUsIHZhbHVlLmYpO1xufVxuIiwiaW1wb3J0IG51bWJlciBmcm9tIFwiLi4vbnVtYmVyLmpzXCI7XG5pbXBvcnQge3BhcnNlQ3NzLCBwYXJzZVN2Z30gZnJvbSBcIi4vcGFyc2UuanNcIjtcblxuZnVuY3Rpb24gaW50ZXJwb2xhdGVUcmFuc2Zvcm0ocGFyc2UsIHB4Q29tbWEsIHB4UGFyZW4sIGRlZ1BhcmVuKSB7XG5cbiAgZnVuY3Rpb24gcG9wKHMpIHtcbiAgICByZXR1cm4gcy5sZW5ndGggPyBzLnBvcCgpICsgXCIgXCIgOiBcIlwiO1xuICB9XG5cbiAgZnVuY3Rpb24gdHJhbnNsYXRlKHhhLCB5YSwgeGIsIHliLCBzLCBxKSB7XG4gICAgaWYgKHhhICE9PSB4YiB8fCB5YSAhPT0geWIpIHtcbiAgICAgIHZhciBpID0gcy5wdXNoKFwidHJhbnNsYXRlKFwiLCBudWxsLCBweENvbW1hLCBudWxsLCBweFBhcmVuKTtcbiAgICAgIHEucHVzaCh7aTogaSAtIDQsIHg6IG51bWJlcih4YSwgeGIpfSwge2k6IGkgLSAyLCB4OiBudW1iZXIoeWEsIHliKX0pO1xuICAgIH0gZWxzZSBpZiAoeGIgfHwgeWIpIHtcbiAgICAgIHMucHVzaChcInRyYW5zbGF0ZShcIiArIHhiICsgcHhDb21tYSArIHliICsgcHhQYXJlbik7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gcm90YXRlKGEsIGIsIHMsIHEpIHtcbiAgICBpZiAoYSAhPT0gYikge1xuICAgICAgaWYgKGEgLSBiID4gMTgwKSBiICs9IDM2MDsgZWxzZSBpZiAoYiAtIGEgPiAxODApIGEgKz0gMzYwOyAvLyBzaG9ydGVzdCBwYXRoXG4gICAgICBxLnB1c2goe2k6IHMucHVzaChwb3AocykgKyBcInJvdGF0ZShcIiwgbnVsbCwgZGVnUGFyZW4pIC0gMiwgeDogbnVtYmVyKGEsIGIpfSk7XG4gICAgfSBlbHNlIGlmIChiKSB7XG4gICAgICBzLnB1c2gocG9wKHMpICsgXCJyb3RhdGUoXCIgKyBiICsgZGVnUGFyZW4pO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHNrZXdYKGEsIGIsIHMsIHEpIHtcbiAgICBpZiAoYSAhPT0gYikge1xuICAgICAgcS5wdXNoKHtpOiBzLnB1c2gocG9wKHMpICsgXCJza2V3WChcIiwgbnVsbCwgZGVnUGFyZW4pIC0gMiwgeDogbnVtYmVyKGEsIGIpfSk7XG4gICAgfSBlbHNlIGlmIChiKSB7XG4gICAgICBzLnB1c2gocG9wKHMpICsgXCJza2V3WChcIiArIGIgKyBkZWdQYXJlbik7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gc2NhbGUoeGEsIHlhLCB4YiwgeWIsIHMsIHEpIHtcbiAgICBpZiAoeGEgIT09IHhiIHx8IHlhICE9PSB5Yikge1xuICAgICAgdmFyIGkgPSBzLnB1c2gocG9wKHMpICsgXCJzY2FsZShcIiwgbnVsbCwgXCIsXCIsIG51bGwsIFwiKVwiKTtcbiAgICAgIHEucHVzaCh7aTogaSAtIDQsIHg6IG51bWJlcih4YSwgeGIpfSwge2k6IGkgLSAyLCB4OiBudW1iZXIoeWEsIHliKX0pO1xuICAgIH0gZWxzZSBpZiAoeGIgIT09IDEgfHwgeWIgIT09IDEpIHtcbiAgICAgIHMucHVzaChwb3AocykgKyBcInNjYWxlKFwiICsgeGIgKyBcIixcIiArIHliICsgXCIpXCIpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmdW5jdGlvbihhLCBiKSB7XG4gICAgdmFyIHMgPSBbXSwgLy8gc3RyaW5nIGNvbnN0YW50cyBhbmQgcGxhY2Vob2xkZXJzXG4gICAgICAgIHEgPSBbXTsgLy8gbnVtYmVyIGludGVycG9sYXRvcnNcbiAgICBhID0gcGFyc2UoYSksIGIgPSBwYXJzZShiKTtcbiAgICB0cmFuc2xhdGUoYS50cmFuc2xhdGVYLCBhLnRyYW5zbGF0ZVksIGIudHJhbnNsYXRlWCwgYi50cmFuc2xhdGVZLCBzLCBxKTtcbiAgICByb3RhdGUoYS5yb3RhdGUsIGIucm90YXRlLCBzLCBxKTtcbiAgICBza2V3WChhLnNrZXdYLCBiLnNrZXdYLCBzLCBxKTtcbiAgICBzY2FsZShhLnNjYWxlWCwgYS5zY2FsZVksIGIuc2NhbGVYLCBiLnNjYWxlWSwgcywgcSk7XG4gICAgYSA9IGIgPSBudWxsOyAvLyBnY1xuICAgIHJldHVybiBmdW5jdGlvbih0KSB7XG4gICAgICB2YXIgaSA9IC0xLCBuID0gcS5sZW5ndGgsIG87XG4gICAgICB3aGlsZSAoKytpIDwgbikgc1sobyA9IHFbaV0pLmldID0gby54KHQpO1xuICAgICAgcmV0dXJuIHMuam9pbihcIlwiKTtcbiAgICB9O1xuICB9O1xufVxuXG5leHBvcnQgdmFyIGludGVycG9sYXRlVHJhbnNmb3JtQ3NzID0gaW50ZXJwb2xhdGVUcmFuc2Zvcm0ocGFyc2VDc3MsIFwicHgsIFwiLCBcInB4KVwiLCBcImRlZylcIik7XG5leHBvcnQgdmFyIGludGVycG9sYXRlVHJhbnNmb3JtU3ZnID0gaW50ZXJwb2xhdGVUcmFuc2Zvcm0ocGFyc2VTdmcsIFwiLCBcIiwgXCIpXCIsIFwiKVwiKTtcbiIsInZhciBmcmFtZSA9IDAsIC8vIGlzIGFuIGFuaW1hdGlvbiBmcmFtZSBwZW5kaW5nP1xuICAgIHRpbWVvdXQgPSAwLCAvLyBpcyBhIHRpbWVvdXQgcGVuZGluZz9cbiAgICBpbnRlcnZhbCA9IDAsIC8vIGFyZSBhbnkgdGltZXJzIGFjdGl2ZT9cbiAgICBwb2tlRGVsYXkgPSAxMDAwLCAvLyBob3cgZnJlcXVlbnRseSB3ZSBjaGVjayBmb3IgY2xvY2sgc2tld1xuICAgIHRhc2tIZWFkLFxuICAgIHRhc2tUYWlsLFxuICAgIGNsb2NrTGFzdCA9IDAsXG4gICAgY2xvY2tOb3cgPSAwLFxuICAgIGNsb2NrU2tldyA9IDAsXG4gICAgY2xvY2sgPSB0eXBlb2YgcGVyZm9ybWFuY2UgPT09IFwib2JqZWN0XCIgJiYgcGVyZm9ybWFuY2Uubm93ID8gcGVyZm9ybWFuY2UgOiBEYXRlLFxuICAgIHNldEZyYW1lID0gdHlwZW9mIHdpbmRvdyA9PT0gXCJvYmplY3RcIiAmJiB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lID8gd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZS5iaW5kKHdpbmRvdykgOiBmdW5jdGlvbihmKSB7IHNldFRpbWVvdXQoZiwgMTcpOyB9O1xuXG5leHBvcnQgZnVuY3Rpb24gbm93KCkge1xuICByZXR1cm4gY2xvY2tOb3cgfHwgKHNldEZyYW1lKGNsZWFyTm93KSwgY2xvY2tOb3cgPSBjbG9jay5ub3coKSArIGNsb2NrU2tldyk7XG59XG5cbmZ1bmN0aW9uIGNsZWFyTm93KCkge1xuICBjbG9ja05vdyA9IDA7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBUaW1lcigpIHtcbiAgdGhpcy5fY2FsbCA9XG4gIHRoaXMuX3RpbWUgPVxuICB0aGlzLl9uZXh0ID0gbnVsbDtcbn1cblxuVGltZXIucHJvdG90eXBlID0gdGltZXIucHJvdG90eXBlID0ge1xuICBjb25zdHJ1Y3RvcjogVGltZXIsXG4gIHJlc3RhcnQ6IGZ1bmN0aW9uKGNhbGxiYWNrLCBkZWxheSwgdGltZSkge1xuICAgIGlmICh0eXBlb2YgY2FsbGJhY2sgIT09IFwiZnVuY3Rpb25cIikgdGhyb3cgbmV3IFR5cGVFcnJvcihcImNhbGxiYWNrIGlzIG5vdCBhIGZ1bmN0aW9uXCIpO1xuICAgIHRpbWUgPSAodGltZSA9PSBudWxsID8gbm93KCkgOiArdGltZSkgKyAoZGVsYXkgPT0gbnVsbCA/IDAgOiArZGVsYXkpO1xuICAgIGlmICghdGhpcy5fbmV4dCAmJiB0YXNrVGFpbCAhPT0gdGhpcykge1xuICAgICAgaWYgKHRhc2tUYWlsKSB0YXNrVGFpbC5fbmV4dCA9IHRoaXM7XG4gICAgICBlbHNlIHRhc2tIZWFkID0gdGhpcztcbiAgICAgIHRhc2tUYWlsID0gdGhpcztcbiAgICB9XG4gICAgdGhpcy5fY2FsbCA9IGNhbGxiYWNrO1xuICAgIHRoaXMuX3RpbWUgPSB0aW1lO1xuICAgIHNsZWVwKCk7XG4gIH0sXG4gIHN0b3A6IGZ1bmN0aW9uKCkge1xuICAgIGlmICh0aGlzLl9jYWxsKSB7XG4gICAgICB0aGlzLl9jYWxsID0gbnVsbDtcbiAgICAgIHRoaXMuX3RpbWUgPSBJbmZpbml0eTtcbiAgICAgIHNsZWVwKCk7XG4gICAgfVxuICB9XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gdGltZXIoY2FsbGJhY2ssIGRlbGF5LCB0aW1lKSB7XG4gIHZhciB0ID0gbmV3IFRpbWVyO1xuICB0LnJlc3RhcnQoY2FsbGJhY2ssIGRlbGF5LCB0aW1lKTtcbiAgcmV0dXJuIHQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0aW1lckZsdXNoKCkge1xuICBub3coKTsgLy8gR2V0IHRoZSBjdXJyZW50IHRpbWUsIGlmIG5vdCBhbHJlYWR5IHNldC5cbiAgKytmcmFtZTsgLy8gUHJldGVuZCB3ZeKAmXZlIHNldCBhbiBhbGFybSwgaWYgd2UgaGF2ZW7igJl0IGFscmVhZHkuXG4gIHZhciB0ID0gdGFza0hlYWQsIGU7XG4gIHdoaWxlICh0KSB7XG4gICAgaWYgKChlID0gY2xvY2tOb3cgLSB0Ll90aW1lKSA+PSAwKSB0Ll9jYWxsLmNhbGwodW5kZWZpbmVkLCBlKTtcbiAgICB0ID0gdC5fbmV4dDtcbiAgfVxuICAtLWZyYW1lO1xufVxuXG5mdW5jdGlvbiB3YWtlKCkge1xuICBjbG9ja05vdyA9IChjbG9ja0xhc3QgPSBjbG9jay5ub3coKSkgKyBjbG9ja1NrZXc7XG4gIGZyYW1lID0gdGltZW91dCA9IDA7XG4gIHRyeSB7XG4gICAgdGltZXJGbHVzaCgpO1xuICB9IGZpbmFsbHkge1xuICAgIGZyYW1lID0gMDtcbiAgICBuYXAoKTtcbiAgICBjbG9ja05vdyA9IDA7XG4gIH1cbn1cblxuZnVuY3Rpb24gcG9rZSgpIHtcbiAgdmFyIG5vdyA9IGNsb2NrLm5vdygpLCBkZWxheSA9IG5vdyAtIGNsb2NrTGFzdDtcbiAgaWYgKGRlbGF5ID4gcG9rZURlbGF5KSBjbG9ja1NrZXcgLT0gZGVsYXksIGNsb2NrTGFzdCA9IG5vdztcbn1cblxuZnVuY3Rpb24gbmFwKCkge1xuICB2YXIgdDAsIHQxID0gdGFza0hlYWQsIHQyLCB0aW1lID0gSW5maW5pdHk7XG4gIHdoaWxlICh0MSkge1xuICAgIGlmICh0MS5fY2FsbCkge1xuICAgICAgaWYgKHRpbWUgPiB0MS5fdGltZSkgdGltZSA9IHQxLl90aW1lO1xuICAgICAgdDAgPSB0MSwgdDEgPSB0MS5fbmV4dDtcbiAgICB9IGVsc2Uge1xuICAgICAgdDIgPSB0MS5fbmV4dCwgdDEuX25leHQgPSBudWxsO1xuICAgICAgdDEgPSB0MCA/IHQwLl9uZXh0ID0gdDIgOiB0YXNrSGVhZCA9IHQyO1xuICAgIH1cbiAgfVxuICB0YXNrVGFpbCA9IHQwO1xuICBzbGVlcCh0aW1lKTtcbn1cblxuZnVuY3Rpb24gc2xlZXAodGltZSkge1xuICBpZiAoZnJhbWUpIHJldHVybjsgLy8gU29vbmVzdCBhbGFybSBhbHJlYWR5IHNldCwgb3Igd2lsbCBiZS5cbiAgaWYgKHRpbWVvdXQpIHRpbWVvdXQgPSBjbGVhclRpbWVvdXQodGltZW91dCk7XG4gIHZhciBkZWxheSA9IHRpbWUgLSBjbG9ja05vdzsgLy8gU3RyaWN0bHkgbGVzcyB0aGFuIGlmIHdlIHJlY29tcHV0ZWQgY2xvY2tOb3cuXG4gIGlmIChkZWxheSA+IDI0KSB7XG4gICAgaWYgKHRpbWUgPCBJbmZpbml0eSkgdGltZW91dCA9IHNldFRpbWVvdXQod2FrZSwgdGltZSAtIGNsb2NrLm5vdygpIC0gY2xvY2tTa2V3KTtcbiAgICBpZiAoaW50ZXJ2YWwpIGludGVydmFsID0gY2xlYXJJbnRlcnZhbChpbnRlcnZhbCk7XG4gIH0gZWxzZSB7XG4gICAgaWYgKCFpbnRlcnZhbCkgY2xvY2tMYXN0ID0gY2xvY2subm93KCksIGludGVydmFsID0gc2V0SW50ZXJ2YWwocG9rZSwgcG9rZURlbGF5KTtcbiAgICBmcmFtZSA9IDEsIHNldEZyYW1lKHdha2UpO1xuICB9XG59XG4iLCJpbXBvcnQge1RpbWVyfSBmcm9tIFwiLi90aW1lci5qc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihjYWxsYmFjaywgZGVsYXksIHRpbWUpIHtcbiAgdmFyIHQgPSBuZXcgVGltZXI7XG4gIGRlbGF5ID0gZGVsYXkgPT0gbnVsbCA/IDAgOiArZGVsYXk7XG4gIHQucmVzdGFydChlbGFwc2VkID0+IHtcbiAgICB0LnN0b3AoKTtcbiAgICBjYWxsYmFjayhlbGFwc2VkICsgZGVsYXkpO1xuICB9LCBkZWxheSwgdGltZSk7XG4gIHJldHVybiB0O1xufVxuIiwiaW1wb3J0IHtkaXNwYXRjaH0gZnJvbSBcImQzLWRpc3BhdGNoXCI7XG5pbXBvcnQge3RpbWVyLCB0aW1lb3V0fSBmcm9tIFwiZDMtdGltZXJcIjtcblxudmFyIGVtcHR5T24gPSBkaXNwYXRjaChcInN0YXJ0XCIsIFwiZW5kXCIsIFwiY2FuY2VsXCIsIFwiaW50ZXJydXB0XCIpO1xudmFyIGVtcHR5VHdlZW4gPSBbXTtcblxuZXhwb3J0IHZhciBDUkVBVEVEID0gMDtcbmV4cG9ydCB2YXIgU0NIRURVTEVEID0gMTtcbmV4cG9ydCB2YXIgU1RBUlRJTkcgPSAyO1xuZXhwb3J0IHZhciBTVEFSVEVEID0gMztcbmV4cG9ydCB2YXIgUlVOTklORyA9IDQ7XG5leHBvcnQgdmFyIEVORElORyA9IDU7XG5leHBvcnQgdmFyIEVOREVEID0gNjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24obm9kZSwgbmFtZSwgaWQsIGluZGV4LCBncm91cCwgdGltaW5nKSB7XG4gIHZhciBzY2hlZHVsZXMgPSBub2RlLl9fdHJhbnNpdGlvbjtcbiAgaWYgKCFzY2hlZHVsZXMpIG5vZGUuX190cmFuc2l0aW9uID0ge307XG4gIGVsc2UgaWYgKGlkIGluIHNjaGVkdWxlcykgcmV0dXJuO1xuICBjcmVhdGUobm9kZSwgaWQsIHtcbiAgICBuYW1lOiBuYW1lLFxuICAgIGluZGV4OiBpbmRleCwgLy8gRm9yIGNvbnRleHQgZHVyaW5nIGNhbGxiYWNrLlxuICAgIGdyb3VwOiBncm91cCwgLy8gRm9yIGNvbnRleHQgZHVyaW5nIGNhbGxiYWNrLlxuICAgIG9uOiBlbXB0eU9uLFxuICAgIHR3ZWVuOiBlbXB0eVR3ZWVuLFxuICAgIHRpbWU6IHRpbWluZy50aW1lLFxuICAgIGRlbGF5OiB0aW1pbmcuZGVsYXksXG4gICAgZHVyYXRpb246IHRpbWluZy5kdXJhdGlvbixcbiAgICBlYXNlOiB0aW1pbmcuZWFzZSxcbiAgICB0aW1lcjogbnVsbCxcbiAgICBzdGF0ZTogQ1JFQVRFRFxuICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGluaXQobm9kZSwgaWQpIHtcbiAgdmFyIHNjaGVkdWxlID0gZ2V0KG5vZGUsIGlkKTtcbiAgaWYgKHNjaGVkdWxlLnN0YXRlID4gQ1JFQVRFRCkgdGhyb3cgbmV3IEVycm9yKFwidG9vIGxhdGU7IGFscmVhZHkgc2NoZWR1bGVkXCIpO1xuICByZXR1cm4gc2NoZWR1bGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXQobm9kZSwgaWQpIHtcbiAgdmFyIHNjaGVkdWxlID0gZ2V0KG5vZGUsIGlkKTtcbiAgaWYgKHNjaGVkdWxlLnN0YXRlID4gU1RBUlRFRCkgdGhyb3cgbmV3IEVycm9yKFwidG9vIGxhdGU7IGFscmVhZHkgcnVubmluZ1wiKTtcbiAgcmV0dXJuIHNjaGVkdWxlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0KG5vZGUsIGlkKSB7XG4gIHZhciBzY2hlZHVsZSA9IG5vZGUuX190cmFuc2l0aW9uO1xuICBpZiAoIXNjaGVkdWxlIHx8ICEoc2NoZWR1bGUgPSBzY2hlZHVsZVtpZF0pKSB0aHJvdyBuZXcgRXJyb3IoXCJ0cmFuc2l0aW9uIG5vdCBmb3VuZFwiKTtcbiAgcmV0dXJuIHNjaGVkdWxlO1xufVxuXG5mdW5jdGlvbiBjcmVhdGUobm9kZSwgaWQsIHNlbGYpIHtcbiAgdmFyIHNjaGVkdWxlcyA9IG5vZGUuX190cmFuc2l0aW9uLFxuICAgICAgdHdlZW47XG5cbiAgLy8gSW5pdGlhbGl6ZSB0aGUgc2VsZiB0aW1lciB3aGVuIHRoZSB0cmFuc2l0aW9uIGlzIGNyZWF0ZWQuXG4gIC8vIE5vdGUgdGhlIGFjdHVhbCBkZWxheSBpcyBub3Qga25vd24gdW50aWwgdGhlIGZpcnN0IGNhbGxiYWNrIVxuICBzY2hlZHVsZXNbaWRdID0gc2VsZjtcbiAgc2VsZi50aW1lciA9IHRpbWVyKHNjaGVkdWxlLCAwLCBzZWxmLnRpbWUpO1xuXG4gIGZ1bmN0aW9uIHNjaGVkdWxlKGVsYXBzZWQpIHtcbiAgICBzZWxmLnN0YXRlID0gU0NIRURVTEVEO1xuICAgIHNlbGYudGltZXIucmVzdGFydChzdGFydCwgc2VsZi5kZWxheSwgc2VsZi50aW1lKTtcblxuICAgIC8vIElmIHRoZSBlbGFwc2VkIGRlbGF5IGlzIGxlc3MgdGhhbiBvdXIgZmlyc3Qgc2xlZXAsIHN0YXJ0IGltbWVkaWF0ZWx5LlxuICAgIGlmIChzZWxmLmRlbGF5IDw9IGVsYXBzZWQpIHN0YXJ0KGVsYXBzZWQgLSBzZWxmLmRlbGF5KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHN0YXJ0KGVsYXBzZWQpIHtcbiAgICB2YXIgaSwgaiwgbiwgbztcblxuICAgIC8vIElmIHRoZSBzdGF0ZSBpcyBub3QgU0NIRURVTEVELCB0aGVuIHdlIHByZXZpb3VzbHkgZXJyb3JlZCBvbiBzdGFydC5cbiAgICBpZiAoc2VsZi5zdGF0ZSAhPT0gU0NIRURVTEVEKSByZXR1cm4gc3RvcCgpO1xuXG4gICAgZm9yIChpIGluIHNjaGVkdWxlcykge1xuICAgICAgbyA9IHNjaGVkdWxlc1tpXTtcbiAgICAgIGlmIChvLm5hbWUgIT09IHNlbGYubmFtZSkgY29udGludWU7XG5cbiAgICAgIC8vIFdoaWxlIHRoaXMgZWxlbWVudCBhbHJlYWR5IGhhcyBhIHN0YXJ0aW5nIHRyYW5zaXRpb24gZHVyaW5nIHRoaXMgZnJhbWUsXG4gICAgICAvLyBkZWZlciBzdGFydGluZyBhbiBpbnRlcnJ1cHRpbmcgdHJhbnNpdGlvbiB1bnRpbCB0aGF0IHRyYW5zaXRpb24gaGFzIGFcbiAgICAgIC8vIGNoYW5jZSB0byB0aWNrIChhbmQgcG9zc2libHkgZW5kKTsgc2VlIGQzL2QzLXRyYW5zaXRpb24jNTQhXG4gICAgICBpZiAoby5zdGF0ZSA9PT0gU1RBUlRFRCkgcmV0dXJuIHRpbWVvdXQoc3RhcnQpO1xuXG4gICAgICAvLyBJbnRlcnJ1cHQgdGhlIGFjdGl2ZSB0cmFuc2l0aW9uLCBpZiBhbnkuXG4gICAgICBpZiAoby5zdGF0ZSA9PT0gUlVOTklORykge1xuICAgICAgICBvLnN0YXRlID0gRU5ERUQ7XG4gICAgICAgIG8udGltZXIuc3RvcCgpO1xuICAgICAgICBvLm9uLmNhbGwoXCJpbnRlcnJ1cHRcIiwgbm9kZSwgbm9kZS5fX2RhdGFfXywgby5pbmRleCwgby5ncm91cCk7XG4gICAgICAgIGRlbGV0ZSBzY2hlZHVsZXNbaV07XG4gICAgICB9XG5cbiAgICAgIC8vIENhbmNlbCBhbnkgcHJlLWVtcHRlZCB0cmFuc2l0aW9ucy5cbiAgICAgIGVsc2UgaWYgKCtpIDwgaWQpIHtcbiAgICAgICAgby5zdGF0ZSA9IEVOREVEO1xuICAgICAgICBvLnRpbWVyLnN0b3AoKTtcbiAgICAgICAgby5vbi5jYWxsKFwiY2FuY2VsXCIsIG5vZGUsIG5vZGUuX19kYXRhX18sIG8uaW5kZXgsIG8uZ3JvdXApO1xuICAgICAgICBkZWxldGUgc2NoZWR1bGVzW2ldO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIERlZmVyIHRoZSBmaXJzdCB0aWNrIHRvIGVuZCBvZiB0aGUgY3VycmVudCBmcmFtZTsgc2VlIGQzL2QzIzE1NzYuXG4gICAgLy8gTm90ZSB0aGUgdHJhbnNpdGlvbiBtYXkgYmUgY2FuY2VsZWQgYWZ0ZXIgc3RhcnQgYW5kIGJlZm9yZSB0aGUgZmlyc3QgdGljayFcbiAgICAvLyBOb3RlIHRoaXMgbXVzdCBiZSBzY2hlZHVsZWQgYmVmb3JlIHRoZSBzdGFydCBldmVudDsgc2VlIGQzL2QzLXRyYW5zaXRpb24jMTYhXG4gICAgLy8gQXNzdW1pbmcgdGhpcyBpcyBzdWNjZXNzZnVsLCBzdWJzZXF1ZW50IGNhbGxiYWNrcyBnbyBzdHJhaWdodCB0byB0aWNrLlxuICAgIHRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICBpZiAoc2VsZi5zdGF0ZSA9PT0gU1RBUlRFRCkge1xuICAgICAgICBzZWxmLnN0YXRlID0gUlVOTklORztcbiAgICAgICAgc2VsZi50aW1lci5yZXN0YXJ0KHRpY2ssIHNlbGYuZGVsYXksIHNlbGYudGltZSk7XG4gICAgICAgIHRpY2soZWxhcHNlZCk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICAvLyBEaXNwYXRjaCB0aGUgc3RhcnQgZXZlbnQuXG4gICAgLy8gTm90ZSB0aGlzIG11c3QgYmUgZG9uZSBiZWZvcmUgdGhlIHR3ZWVuIGFyZSBpbml0aWFsaXplZC5cbiAgICBzZWxmLnN0YXRlID0gU1RBUlRJTkc7XG4gICAgc2VsZi5vbi5jYWxsKFwic3RhcnRcIiwgbm9kZSwgbm9kZS5fX2RhdGFfXywgc2VsZi5pbmRleCwgc2VsZi5ncm91cCk7XG4gICAgaWYgKHNlbGYuc3RhdGUgIT09IFNUQVJUSU5HKSByZXR1cm47IC8vIGludGVycnVwdGVkXG4gICAgc2VsZi5zdGF0ZSA9IFNUQVJURUQ7XG5cbiAgICAvLyBJbml0aWFsaXplIHRoZSB0d2VlbiwgZGVsZXRpbmcgbnVsbCB0d2Vlbi5cbiAgICB0d2VlbiA9IG5ldyBBcnJheShuID0gc2VsZi50d2Vlbi5sZW5ndGgpO1xuICAgIGZvciAoaSA9IDAsIGogPSAtMTsgaSA8IG47ICsraSkge1xuICAgICAgaWYgKG8gPSBzZWxmLnR3ZWVuW2ldLnZhbHVlLmNhbGwobm9kZSwgbm9kZS5fX2RhdGFfXywgc2VsZi5pbmRleCwgc2VsZi5ncm91cCkpIHtcbiAgICAgICAgdHdlZW5bKytqXSA9IG87XG4gICAgICB9XG4gICAgfVxuICAgIHR3ZWVuLmxlbmd0aCA9IGogKyAxO1xuICB9XG5cbiAgZnVuY3Rpb24gdGljayhlbGFwc2VkKSB7XG4gICAgdmFyIHQgPSBlbGFwc2VkIDwgc2VsZi5kdXJhdGlvbiA/IHNlbGYuZWFzZS5jYWxsKG51bGwsIGVsYXBzZWQgLyBzZWxmLmR1cmF0aW9uKSA6IChzZWxmLnRpbWVyLnJlc3RhcnQoc3RvcCksIHNlbGYuc3RhdGUgPSBFTkRJTkcsIDEpLFxuICAgICAgICBpID0gLTEsXG4gICAgICAgIG4gPSB0d2Vlbi5sZW5ndGg7XG5cbiAgICB3aGlsZSAoKytpIDwgbikge1xuICAgICAgdHdlZW5baV0uY2FsbChub2RlLCB0KTtcbiAgICB9XG5cbiAgICAvLyBEaXNwYXRjaCB0aGUgZW5kIGV2ZW50LlxuICAgIGlmIChzZWxmLnN0YXRlID09PSBFTkRJTkcpIHtcbiAgICAgIHNlbGYub24uY2FsbChcImVuZFwiLCBub2RlLCBub2RlLl9fZGF0YV9fLCBzZWxmLmluZGV4LCBzZWxmLmdyb3VwKTtcbiAgICAgIHN0b3AoKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBzdG9wKCkge1xuICAgIHNlbGYuc3RhdGUgPSBFTkRFRDtcbiAgICBzZWxmLnRpbWVyLnN0b3AoKTtcbiAgICBkZWxldGUgc2NoZWR1bGVzW2lkXTtcbiAgICBmb3IgKHZhciBpIGluIHNjaGVkdWxlcykgcmV0dXJuOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVudXNlZC12YXJzXG4gICAgZGVsZXRlIG5vZGUuX190cmFuc2l0aW9uO1xuICB9XG59XG4iLCJpbXBvcnQge1NUQVJUSU5HLCBFTkRJTkcsIEVOREVEfSBmcm9tIFwiLi90cmFuc2l0aW9uL3NjaGVkdWxlLmpzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKG5vZGUsIG5hbWUpIHtcbiAgdmFyIHNjaGVkdWxlcyA9IG5vZGUuX190cmFuc2l0aW9uLFxuICAgICAgc2NoZWR1bGUsXG4gICAgICBhY3RpdmUsXG4gICAgICBlbXB0eSA9IHRydWUsXG4gICAgICBpO1xuXG4gIGlmICghc2NoZWR1bGVzKSByZXR1cm47XG5cbiAgbmFtZSA9IG5hbWUgPT0gbnVsbCA/IG51bGwgOiBuYW1lICsgXCJcIjtcblxuICBmb3IgKGkgaW4gc2NoZWR1bGVzKSB7XG4gICAgaWYgKChzY2hlZHVsZSA9IHNjaGVkdWxlc1tpXSkubmFtZSAhPT0gbmFtZSkgeyBlbXB0eSA9IGZhbHNlOyBjb250aW51ZTsgfVxuICAgIGFjdGl2ZSA9IHNjaGVkdWxlLnN0YXRlID4gU1RBUlRJTkcgJiYgc2NoZWR1bGUuc3RhdGUgPCBFTkRJTkc7XG4gICAgc2NoZWR1bGUuc3RhdGUgPSBFTkRFRDtcbiAgICBzY2hlZHVsZS50aW1lci5zdG9wKCk7XG4gICAgc2NoZWR1bGUub24uY2FsbChhY3RpdmUgPyBcImludGVycnVwdFwiIDogXCJjYW5jZWxcIiwgbm9kZSwgbm9kZS5fX2RhdGFfXywgc2NoZWR1bGUuaW5kZXgsIHNjaGVkdWxlLmdyb3VwKTtcbiAgICBkZWxldGUgc2NoZWR1bGVzW2ldO1xuICB9XG5cbiAgaWYgKGVtcHR5KSBkZWxldGUgbm9kZS5fX3RyYW5zaXRpb247XG59XG4iLCJpbXBvcnQgaW50ZXJydXB0IGZyb20gXCIuLi9pbnRlcnJ1cHQuanNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24obmFtZSkge1xuICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKCkge1xuICAgIGludGVycnVwdCh0aGlzLCBuYW1lKTtcbiAgfSk7XG59XG4iLCJpbXBvcnQge2dldCwgc2V0fSBmcm9tIFwiLi9zY2hlZHVsZS5qc1wiO1xuXG5mdW5jdGlvbiB0d2VlblJlbW92ZShpZCwgbmFtZSkge1xuICB2YXIgdHdlZW4wLCB0d2VlbjE7XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICB2YXIgc2NoZWR1bGUgPSBzZXQodGhpcywgaWQpLFxuICAgICAgICB0d2VlbiA9IHNjaGVkdWxlLnR3ZWVuO1xuXG4gICAgLy8gSWYgdGhpcyBub2RlIHNoYXJlZCB0d2VlbiB3aXRoIHRoZSBwcmV2aW91cyBub2RlLFxuICAgIC8vIGp1c3QgYXNzaWduIHRoZSB1cGRhdGVkIHNoYXJlZCB0d2VlbiBhbmQgd2XigJlyZSBkb25lIVxuICAgIC8vIE90aGVyd2lzZSwgY29weS1vbi13cml0ZS5cbiAgICBpZiAodHdlZW4gIT09IHR3ZWVuMCkge1xuICAgICAgdHdlZW4xID0gdHdlZW4wID0gdHdlZW47XG4gICAgICBmb3IgKHZhciBpID0gMCwgbiA9IHR3ZWVuMS5sZW5ndGg7IGkgPCBuOyArK2kpIHtcbiAgICAgICAgaWYgKHR3ZWVuMVtpXS5uYW1lID09PSBuYW1lKSB7XG4gICAgICAgICAgdHdlZW4xID0gdHdlZW4xLnNsaWNlKCk7XG4gICAgICAgICAgdHdlZW4xLnNwbGljZShpLCAxKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHNjaGVkdWxlLnR3ZWVuID0gdHdlZW4xO1xuICB9O1xufVxuXG5mdW5jdGlvbiB0d2VlbkZ1bmN0aW9uKGlkLCBuYW1lLCB2YWx1ZSkge1xuICB2YXIgdHdlZW4wLCB0d2VlbjE7XG4gIGlmICh0eXBlb2YgdmFsdWUgIT09IFwiZnVuY3Rpb25cIikgdGhyb3cgbmV3IEVycm9yO1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgdmFyIHNjaGVkdWxlID0gc2V0KHRoaXMsIGlkKSxcbiAgICAgICAgdHdlZW4gPSBzY2hlZHVsZS50d2VlbjtcblxuICAgIC8vIElmIHRoaXMgbm9kZSBzaGFyZWQgdHdlZW4gd2l0aCB0aGUgcHJldmlvdXMgbm9kZSxcbiAgICAvLyBqdXN0IGFzc2lnbiB0aGUgdXBkYXRlZCBzaGFyZWQgdHdlZW4gYW5kIHdl4oCZcmUgZG9uZSFcbiAgICAvLyBPdGhlcndpc2UsIGNvcHktb24td3JpdGUuXG4gICAgaWYgKHR3ZWVuICE9PSB0d2VlbjApIHtcbiAgICAgIHR3ZWVuMSA9ICh0d2VlbjAgPSB0d2Vlbikuc2xpY2UoKTtcbiAgICAgIGZvciAodmFyIHQgPSB7bmFtZTogbmFtZSwgdmFsdWU6IHZhbHVlfSwgaSA9IDAsIG4gPSB0d2VlbjEubGVuZ3RoOyBpIDwgbjsgKytpKSB7XG4gICAgICAgIGlmICh0d2VlbjFbaV0ubmFtZSA9PT0gbmFtZSkge1xuICAgICAgICAgIHR3ZWVuMVtpXSA9IHQ7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChpID09PSBuKSB0d2VlbjEucHVzaCh0KTtcbiAgICB9XG5cbiAgICBzY2hlZHVsZS50d2VlbiA9IHR3ZWVuMTtcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24obmFtZSwgdmFsdWUpIHtcbiAgdmFyIGlkID0gdGhpcy5faWQ7XG5cbiAgbmFtZSArPSBcIlwiO1xuXG4gIGlmIChhcmd1bWVudHMubGVuZ3RoIDwgMikge1xuICAgIHZhciB0d2VlbiA9IGdldCh0aGlzLm5vZGUoKSwgaWQpLnR3ZWVuO1xuICAgIGZvciAodmFyIGkgPSAwLCBuID0gdHdlZW4ubGVuZ3RoLCB0OyBpIDwgbjsgKytpKSB7XG4gICAgICBpZiAoKHQgPSB0d2VlbltpXSkubmFtZSA9PT0gbmFtZSkge1xuICAgICAgICByZXR1cm4gdC52YWx1ZTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICByZXR1cm4gdGhpcy5lYWNoKCh2YWx1ZSA9PSBudWxsID8gdHdlZW5SZW1vdmUgOiB0d2VlbkZ1bmN0aW9uKShpZCwgbmFtZSwgdmFsdWUpKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHR3ZWVuVmFsdWUodHJhbnNpdGlvbiwgbmFtZSwgdmFsdWUpIHtcbiAgdmFyIGlkID0gdHJhbnNpdGlvbi5faWQ7XG5cbiAgdHJhbnNpdGlvbi5lYWNoKGZ1bmN0aW9uKCkge1xuICAgIHZhciBzY2hlZHVsZSA9IHNldCh0aGlzLCBpZCk7XG4gICAgKHNjaGVkdWxlLnZhbHVlIHx8IChzY2hlZHVsZS52YWx1ZSA9IHt9KSlbbmFtZV0gPSB2YWx1ZS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICB9KTtcblxuICByZXR1cm4gZnVuY3Rpb24obm9kZSkge1xuICAgIHJldHVybiBnZXQobm9kZSwgaWQpLnZhbHVlW25hbWVdO1xuICB9O1xufVxuIiwiaW1wb3J0IHtjb2xvcn0gZnJvbSBcImQzLWNvbG9yXCI7XG5pbXBvcnQge2ludGVycG9sYXRlTnVtYmVyLCBpbnRlcnBvbGF0ZVJnYiwgaW50ZXJwb2xhdGVTdHJpbmd9IGZyb20gXCJkMy1pbnRlcnBvbGF0ZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihhLCBiKSB7XG4gIHZhciBjO1xuICByZXR1cm4gKHR5cGVvZiBiID09PSBcIm51bWJlclwiID8gaW50ZXJwb2xhdGVOdW1iZXJcbiAgICAgIDogYiBpbnN0YW5jZW9mIGNvbG9yID8gaW50ZXJwb2xhdGVSZ2JcbiAgICAgIDogKGMgPSBjb2xvcihiKSkgPyAoYiA9IGMsIGludGVycG9sYXRlUmdiKVxuICAgICAgOiBpbnRlcnBvbGF0ZVN0cmluZykoYSwgYik7XG59XG4iLCJpbXBvcnQge2ludGVycG9sYXRlVHJhbnNmb3JtU3ZnIGFzIGludGVycG9sYXRlVHJhbnNmb3JtfSBmcm9tIFwiZDMtaW50ZXJwb2xhdGVcIjtcbmltcG9ydCB7bmFtZXNwYWNlfSBmcm9tIFwiZDMtc2VsZWN0aW9uXCI7XG5pbXBvcnQge3R3ZWVuVmFsdWV9IGZyb20gXCIuL3R3ZWVuLmpzXCI7XG5pbXBvcnQgaW50ZXJwb2xhdGUgZnJvbSBcIi4vaW50ZXJwb2xhdGUuanNcIjtcblxuZnVuY3Rpb24gYXR0clJlbW92ZShuYW1lKSB7XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICB0aGlzLnJlbW92ZUF0dHJpYnV0ZShuYW1lKTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gYXR0clJlbW92ZU5TKGZ1bGxuYW1lKSB7XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICB0aGlzLnJlbW92ZUF0dHJpYnV0ZU5TKGZ1bGxuYW1lLnNwYWNlLCBmdWxsbmFtZS5sb2NhbCk7XG4gIH07XG59XG5cbmZ1bmN0aW9uIGF0dHJDb25zdGFudChuYW1lLCBpbnRlcnBvbGF0ZSwgdmFsdWUxKSB7XG4gIHZhciBzdHJpbmcwMCxcbiAgICAgIHN0cmluZzEgPSB2YWx1ZTEgKyBcIlwiLFxuICAgICAgaW50ZXJwb2xhdGUwO1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgdmFyIHN0cmluZzAgPSB0aGlzLmdldEF0dHJpYnV0ZShuYW1lKTtcbiAgICByZXR1cm4gc3RyaW5nMCA9PT0gc3RyaW5nMSA/IG51bGxcbiAgICAgICAgOiBzdHJpbmcwID09PSBzdHJpbmcwMCA/IGludGVycG9sYXRlMFxuICAgICAgICA6IGludGVycG9sYXRlMCA9IGludGVycG9sYXRlKHN0cmluZzAwID0gc3RyaW5nMCwgdmFsdWUxKTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gYXR0ckNvbnN0YW50TlMoZnVsbG5hbWUsIGludGVycG9sYXRlLCB2YWx1ZTEpIHtcbiAgdmFyIHN0cmluZzAwLFxuICAgICAgc3RyaW5nMSA9IHZhbHVlMSArIFwiXCIsXG4gICAgICBpbnRlcnBvbGF0ZTA7XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICB2YXIgc3RyaW5nMCA9IHRoaXMuZ2V0QXR0cmlidXRlTlMoZnVsbG5hbWUuc3BhY2UsIGZ1bGxuYW1lLmxvY2FsKTtcbiAgICByZXR1cm4gc3RyaW5nMCA9PT0gc3RyaW5nMSA/IG51bGxcbiAgICAgICAgOiBzdHJpbmcwID09PSBzdHJpbmcwMCA/IGludGVycG9sYXRlMFxuICAgICAgICA6IGludGVycG9sYXRlMCA9IGludGVycG9sYXRlKHN0cmluZzAwID0gc3RyaW5nMCwgdmFsdWUxKTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gYXR0ckZ1bmN0aW9uKG5hbWUsIGludGVycG9sYXRlLCB2YWx1ZSkge1xuICB2YXIgc3RyaW5nMDAsXG4gICAgICBzdHJpbmcxMCxcbiAgICAgIGludGVycG9sYXRlMDtcbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIHZhciBzdHJpbmcwLCB2YWx1ZTEgPSB2YWx1ZSh0aGlzKSwgc3RyaW5nMTtcbiAgICBpZiAodmFsdWUxID09IG51bGwpIHJldHVybiB2b2lkIHRoaXMucmVtb3ZlQXR0cmlidXRlKG5hbWUpO1xuICAgIHN0cmluZzAgPSB0aGlzLmdldEF0dHJpYnV0ZShuYW1lKTtcbiAgICBzdHJpbmcxID0gdmFsdWUxICsgXCJcIjtcbiAgICByZXR1cm4gc3RyaW5nMCA9PT0gc3RyaW5nMSA/IG51bGxcbiAgICAgICAgOiBzdHJpbmcwID09PSBzdHJpbmcwMCAmJiBzdHJpbmcxID09PSBzdHJpbmcxMCA/IGludGVycG9sYXRlMFxuICAgICAgICA6IChzdHJpbmcxMCA9IHN0cmluZzEsIGludGVycG9sYXRlMCA9IGludGVycG9sYXRlKHN0cmluZzAwID0gc3RyaW5nMCwgdmFsdWUxKSk7XG4gIH07XG59XG5cbmZ1bmN0aW9uIGF0dHJGdW5jdGlvbk5TKGZ1bGxuYW1lLCBpbnRlcnBvbGF0ZSwgdmFsdWUpIHtcbiAgdmFyIHN0cmluZzAwLFxuICAgICAgc3RyaW5nMTAsXG4gICAgICBpbnRlcnBvbGF0ZTA7XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICB2YXIgc3RyaW5nMCwgdmFsdWUxID0gdmFsdWUodGhpcyksIHN0cmluZzE7XG4gICAgaWYgKHZhbHVlMSA9PSBudWxsKSByZXR1cm4gdm9pZCB0aGlzLnJlbW92ZUF0dHJpYnV0ZU5TKGZ1bGxuYW1lLnNwYWNlLCBmdWxsbmFtZS5sb2NhbCk7XG4gICAgc3RyaW5nMCA9IHRoaXMuZ2V0QXR0cmlidXRlTlMoZnVsbG5hbWUuc3BhY2UsIGZ1bGxuYW1lLmxvY2FsKTtcbiAgICBzdHJpbmcxID0gdmFsdWUxICsgXCJcIjtcbiAgICByZXR1cm4gc3RyaW5nMCA9PT0gc3RyaW5nMSA/IG51bGxcbiAgICAgICAgOiBzdHJpbmcwID09PSBzdHJpbmcwMCAmJiBzdHJpbmcxID09PSBzdHJpbmcxMCA/IGludGVycG9sYXRlMFxuICAgICAgICA6IChzdHJpbmcxMCA9IHN0cmluZzEsIGludGVycG9sYXRlMCA9IGludGVycG9sYXRlKHN0cmluZzAwID0gc3RyaW5nMCwgdmFsdWUxKSk7XG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKG5hbWUsIHZhbHVlKSB7XG4gIHZhciBmdWxsbmFtZSA9IG5hbWVzcGFjZShuYW1lKSwgaSA9IGZ1bGxuYW1lID09PSBcInRyYW5zZm9ybVwiID8gaW50ZXJwb2xhdGVUcmFuc2Zvcm0gOiBpbnRlcnBvbGF0ZTtcbiAgcmV0dXJuIHRoaXMuYXR0clR3ZWVuKG5hbWUsIHR5cGVvZiB2YWx1ZSA9PT0gXCJmdW5jdGlvblwiXG4gICAgICA/IChmdWxsbmFtZS5sb2NhbCA/IGF0dHJGdW5jdGlvbk5TIDogYXR0ckZ1bmN0aW9uKShmdWxsbmFtZSwgaSwgdHdlZW5WYWx1ZSh0aGlzLCBcImF0dHIuXCIgKyBuYW1lLCB2YWx1ZSkpXG4gICAgICA6IHZhbHVlID09IG51bGwgPyAoZnVsbG5hbWUubG9jYWwgPyBhdHRyUmVtb3ZlTlMgOiBhdHRyUmVtb3ZlKShmdWxsbmFtZSlcbiAgICAgIDogKGZ1bGxuYW1lLmxvY2FsID8gYXR0ckNvbnN0YW50TlMgOiBhdHRyQ29uc3RhbnQpKGZ1bGxuYW1lLCBpLCB2YWx1ZSkpO1xufVxuIiwiaW1wb3J0IHtuYW1lc3BhY2V9IGZyb20gXCJkMy1zZWxlY3Rpb25cIjtcblxuZnVuY3Rpb24gYXR0ckludGVycG9sYXRlKG5hbWUsIGkpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKHQpIHtcbiAgICB0aGlzLnNldEF0dHJpYnV0ZShuYW1lLCBpLmNhbGwodGhpcywgdCkpO1xuICB9O1xufVxuXG5mdW5jdGlvbiBhdHRySW50ZXJwb2xhdGVOUyhmdWxsbmFtZSwgaSkge1xuICByZXR1cm4gZnVuY3Rpb24odCkge1xuICAgIHRoaXMuc2V0QXR0cmlidXRlTlMoZnVsbG5hbWUuc3BhY2UsIGZ1bGxuYW1lLmxvY2FsLCBpLmNhbGwodGhpcywgdCkpO1xuICB9O1xufVxuXG5mdW5jdGlvbiBhdHRyVHdlZW5OUyhmdWxsbmFtZSwgdmFsdWUpIHtcbiAgdmFyIHQwLCBpMDtcbiAgZnVuY3Rpb24gdHdlZW4oKSB7XG4gICAgdmFyIGkgPSB2YWx1ZS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIGlmIChpICE9PSBpMCkgdDAgPSAoaTAgPSBpKSAmJiBhdHRySW50ZXJwb2xhdGVOUyhmdWxsbmFtZSwgaSk7XG4gICAgcmV0dXJuIHQwO1xuICB9XG4gIHR3ZWVuLl92YWx1ZSA9IHZhbHVlO1xuICByZXR1cm4gdHdlZW47XG59XG5cbmZ1bmN0aW9uIGF0dHJUd2VlbihuYW1lLCB2YWx1ZSkge1xuICB2YXIgdDAsIGkwO1xuICBmdW5jdGlvbiB0d2VlbigpIHtcbiAgICB2YXIgaSA9IHZhbHVlLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgaWYgKGkgIT09IGkwKSB0MCA9IChpMCA9IGkpICYmIGF0dHJJbnRlcnBvbGF0ZShuYW1lLCBpKTtcbiAgICByZXR1cm4gdDA7XG4gIH1cbiAgdHdlZW4uX3ZhbHVlID0gdmFsdWU7XG4gIHJldHVybiB0d2Vlbjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24obmFtZSwgdmFsdWUpIHtcbiAgdmFyIGtleSA9IFwiYXR0ci5cIiArIG5hbWU7XG4gIGlmIChhcmd1bWVudHMubGVuZ3RoIDwgMikgcmV0dXJuIChrZXkgPSB0aGlzLnR3ZWVuKGtleSkpICYmIGtleS5fdmFsdWU7XG4gIGlmICh2YWx1ZSA9PSBudWxsKSByZXR1cm4gdGhpcy50d2VlbihrZXksIG51bGwpO1xuICBpZiAodHlwZW9mIHZhbHVlICE9PSBcImZ1bmN0aW9uXCIpIHRocm93IG5ldyBFcnJvcjtcbiAgdmFyIGZ1bGxuYW1lID0gbmFtZXNwYWNlKG5hbWUpO1xuICByZXR1cm4gdGhpcy50d2VlbihrZXksIChmdWxsbmFtZS5sb2NhbCA/IGF0dHJUd2Vlbk5TIDogYXR0clR3ZWVuKShmdWxsbmFtZSwgdmFsdWUpKTtcbn1cbiIsImltcG9ydCB7Z2V0LCBpbml0fSBmcm9tIFwiLi9zY2hlZHVsZS5qc1wiO1xuXG5mdW5jdGlvbiBkZWxheUZ1bmN0aW9uKGlkLCB2YWx1ZSkge1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgaW5pdCh0aGlzLCBpZCkuZGVsYXkgPSArdmFsdWUuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gZGVsYXlDb25zdGFudChpZCwgdmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlID0gK3ZhbHVlLCBmdW5jdGlvbigpIHtcbiAgICBpbml0KHRoaXMsIGlkKS5kZWxheSA9IHZhbHVlO1xuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbih2YWx1ZSkge1xuICB2YXIgaWQgPSB0aGlzLl9pZDtcblxuICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aFxuICAgICAgPyB0aGlzLmVhY2goKHR5cGVvZiB2YWx1ZSA9PT0gXCJmdW5jdGlvblwiXG4gICAgICAgICAgPyBkZWxheUZ1bmN0aW9uXG4gICAgICAgICAgOiBkZWxheUNvbnN0YW50KShpZCwgdmFsdWUpKVxuICAgICAgOiBnZXQodGhpcy5ub2RlKCksIGlkKS5kZWxheTtcbn1cbiIsImltcG9ydCB7Z2V0LCBzZXR9IGZyb20gXCIuL3NjaGVkdWxlLmpzXCI7XG5cbmZ1bmN0aW9uIGR1cmF0aW9uRnVuY3Rpb24oaWQsIHZhbHVlKSB7XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICBzZXQodGhpcywgaWQpLmR1cmF0aW9uID0gK3ZhbHVlLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gIH07XG59XG5cbmZ1bmN0aW9uIGR1cmF0aW9uQ29uc3RhbnQoaWQsIHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSA9ICt2YWx1ZSwgZnVuY3Rpb24oKSB7XG4gICAgc2V0KHRoaXMsIGlkKS5kdXJhdGlvbiA9IHZhbHVlO1xuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbih2YWx1ZSkge1xuICB2YXIgaWQgPSB0aGlzLl9pZDtcblxuICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aFxuICAgICAgPyB0aGlzLmVhY2goKHR5cGVvZiB2YWx1ZSA9PT0gXCJmdW5jdGlvblwiXG4gICAgICAgICAgPyBkdXJhdGlvbkZ1bmN0aW9uXG4gICAgICAgICAgOiBkdXJhdGlvbkNvbnN0YW50KShpZCwgdmFsdWUpKVxuICAgICAgOiBnZXQodGhpcy5ub2RlKCksIGlkKS5kdXJhdGlvbjtcbn1cbiIsImltcG9ydCB7Z2V0LCBzZXR9IGZyb20gXCIuL3NjaGVkdWxlLmpzXCI7XG5cbmZ1bmN0aW9uIGVhc2VDb25zdGFudChpZCwgdmFsdWUpIHtcbiAgaWYgKHR5cGVvZiB2YWx1ZSAhPT0gXCJmdW5jdGlvblwiKSB0aHJvdyBuZXcgRXJyb3I7XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICBzZXQodGhpcywgaWQpLmVhc2UgPSB2YWx1ZTtcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24odmFsdWUpIHtcbiAgdmFyIGlkID0gdGhpcy5faWQ7XG5cbiAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGhcbiAgICAgID8gdGhpcy5lYWNoKGVhc2VDb25zdGFudChpZCwgdmFsdWUpKVxuICAgICAgOiBnZXQodGhpcy5ub2RlKCksIGlkKS5lYXNlO1xufVxuIiwiaW1wb3J0IHtzZXR9IGZyb20gXCIuL3NjaGVkdWxlLmpzXCI7XG5cbmZ1bmN0aW9uIGVhc2VWYXJ5aW5nKGlkLCB2YWx1ZSkge1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgdmFyIHYgPSB2YWx1ZS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIGlmICh0eXBlb2YgdiAhPT0gXCJmdW5jdGlvblwiKSB0aHJvdyBuZXcgRXJyb3I7XG4gICAgc2V0KHRoaXMsIGlkKS5lYXNlID0gdjtcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24odmFsdWUpIHtcbiAgaWYgKHR5cGVvZiB2YWx1ZSAhPT0gXCJmdW5jdGlvblwiKSB0aHJvdyBuZXcgRXJyb3I7XG4gIHJldHVybiB0aGlzLmVhY2goZWFzZVZhcnlpbmcodGhpcy5faWQsIHZhbHVlKSk7XG59XG4iLCJpbXBvcnQge21hdGNoZXJ9IGZyb20gXCJkMy1zZWxlY3Rpb25cIjtcbmltcG9ydCB7VHJhbnNpdGlvbn0gZnJvbSBcIi4vaW5kZXguanNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24obWF0Y2gpIHtcbiAgaWYgKHR5cGVvZiBtYXRjaCAhPT0gXCJmdW5jdGlvblwiKSBtYXRjaCA9IG1hdGNoZXIobWF0Y2gpO1xuXG4gIGZvciAodmFyIGdyb3VwcyA9IHRoaXMuX2dyb3VwcywgbSA9IGdyb3Vwcy5sZW5ndGgsIHN1Ymdyb3VwcyA9IG5ldyBBcnJheShtKSwgaiA9IDA7IGogPCBtOyArK2opIHtcbiAgICBmb3IgKHZhciBncm91cCA9IGdyb3Vwc1tqXSwgbiA9IGdyb3VwLmxlbmd0aCwgc3ViZ3JvdXAgPSBzdWJncm91cHNbal0gPSBbXSwgbm9kZSwgaSA9IDA7IGkgPCBuOyArK2kpIHtcbiAgICAgIGlmICgobm9kZSA9IGdyb3VwW2ldKSAmJiBtYXRjaC5jYWxsKG5vZGUsIG5vZGUuX19kYXRhX18sIGksIGdyb3VwKSkge1xuICAgICAgICBzdWJncm91cC5wdXNoKG5vZGUpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBuZXcgVHJhbnNpdGlvbihzdWJncm91cHMsIHRoaXMuX3BhcmVudHMsIHRoaXMuX25hbWUsIHRoaXMuX2lkKTtcbn1cbiIsImltcG9ydCB7VHJhbnNpdGlvbn0gZnJvbSBcIi4vaW5kZXguanNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24odHJhbnNpdGlvbikge1xuICBpZiAodHJhbnNpdGlvbi5faWQgIT09IHRoaXMuX2lkKSB0aHJvdyBuZXcgRXJyb3I7XG5cbiAgZm9yICh2YXIgZ3JvdXBzMCA9IHRoaXMuX2dyb3VwcywgZ3JvdXBzMSA9IHRyYW5zaXRpb24uX2dyb3VwcywgbTAgPSBncm91cHMwLmxlbmd0aCwgbTEgPSBncm91cHMxLmxlbmd0aCwgbSA9IE1hdGgubWluKG0wLCBtMSksIG1lcmdlcyA9IG5ldyBBcnJheShtMCksIGogPSAwOyBqIDwgbTsgKytqKSB7XG4gICAgZm9yICh2YXIgZ3JvdXAwID0gZ3JvdXBzMFtqXSwgZ3JvdXAxID0gZ3JvdXBzMVtqXSwgbiA9IGdyb3VwMC5sZW5ndGgsIG1lcmdlID0gbWVyZ2VzW2pdID0gbmV3IEFycmF5KG4pLCBub2RlLCBpID0gMDsgaSA8IG47ICsraSkge1xuICAgICAgaWYgKG5vZGUgPSBncm91cDBbaV0gfHwgZ3JvdXAxW2ldKSB7XG4gICAgICAgIG1lcmdlW2ldID0gbm9kZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBmb3IgKDsgaiA8IG0wOyArK2opIHtcbiAgICBtZXJnZXNbal0gPSBncm91cHMwW2pdO1xuICB9XG5cbiAgcmV0dXJuIG5ldyBUcmFuc2l0aW9uKG1lcmdlcywgdGhpcy5fcGFyZW50cywgdGhpcy5fbmFtZSwgdGhpcy5faWQpO1xufVxuIiwiaW1wb3J0IHtnZXQsIHNldCwgaW5pdH0gZnJvbSBcIi4vc2NoZWR1bGUuanNcIjtcblxuZnVuY3Rpb24gc3RhcnQobmFtZSkge1xuICByZXR1cm4gKG5hbWUgKyBcIlwiKS50cmltKCkuc3BsaXQoL158XFxzKy8pLmV2ZXJ5KGZ1bmN0aW9uKHQpIHtcbiAgICB2YXIgaSA9IHQuaW5kZXhPZihcIi5cIik7XG4gICAgaWYgKGkgPj0gMCkgdCA9IHQuc2xpY2UoMCwgaSk7XG4gICAgcmV0dXJuICF0IHx8IHQgPT09IFwic3RhcnRcIjtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIG9uRnVuY3Rpb24oaWQsIG5hbWUsIGxpc3RlbmVyKSB7XG4gIHZhciBvbjAsIG9uMSwgc2l0ID0gc3RhcnQobmFtZSkgPyBpbml0IDogc2V0O1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgdmFyIHNjaGVkdWxlID0gc2l0KHRoaXMsIGlkKSxcbiAgICAgICAgb24gPSBzY2hlZHVsZS5vbjtcblxuICAgIC8vIElmIHRoaXMgbm9kZSBzaGFyZWQgYSBkaXNwYXRjaCB3aXRoIHRoZSBwcmV2aW91cyBub2RlLFxuICAgIC8vIGp1c3QgYXNzaWduIHRoZSB1cGRhdGVkIHNoYXJlZCBkaXNwYXRjaCBhbmQgd2XigJlyZSBkb25lIVxuICAgIC8vIE90aGVyd2lzZSwgY29weS1vbi13cml0ZS5cbiAgICBpZiAob24gIT09IG9uMCkgKG9uMSA9IChvbjAgPSBvbikuY29weSgpKS5vbihuYW1lLCBsaXN0ZW5lcik7XG5cbiAgICBzY2hlZHVsZS5vbiA9IG9uMTtcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24obmFtZSwgbGlzdGVuZXIpIHtcbiAgdmFyIGlkID0gdGhpcy5faWQ7XG5cbiAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPCAyXG4gICAgICA/IGdldCh0aGlzLm5vZGUoKSwgaWQpLm9uLm9uKG5hbWUpXG4gICAgICA6IHRoaXMuZWFjaChvbkZ1bmN0aW9uKGlkLCBuYW1lLCBsaXN0ZW5lcikpO1xufVxuIiwiZnVuY3Rpb24gcmVtb3ZlRnVuY3Rpb24oaWQpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIHZhciBwYXJlbnQgPSB0aGlzLnBhcmVudE5vZGU7XG4gICAgZm9yICh2YXIgaSBpbiB0aGlzLl9fdHJhbnNpdGlvbikgaWYgKCtpICE9PSBpZCkgcmV0dXJuO1xuICAgIGlmIChwYXJlbnQpIHBhcmVudC5yZW1vdmVDaGlsZCh0aGlzKTtcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKSB7XG4gIHJldHVybiB0aGlzLm9uKFwiZW5kLnJlbW92ZVwiLCByZW1vdmVGdW5jdGlvbih0aGlzLl9pZCkpO1xufVxuIiwiaW1wb3J0IHtzZWxlY3Rvcn0gZnJvbSBcImQzLXNlbGVjdGlvblwiO1xuaW1wb3J0IHtUcmFuc2l0aW9ufSBmcm9tIFwiLi9pbmRleC5qc1wiO1xuaW1wb3J0IHNjaGVkdWxlLCB7Z2V0fSBmcm9tIFwiLi9zY2hlZHVsZS5qc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihzZWxlY3QpIHtcbiAgdmFyIG5hbWUgPSB0aGlzLl9uYW1lLFxuICAgICAgaWQgPSB0aGlzLl9pZDtcblxuICBpZiAodHlwZW9mIHNlbGVjdCAhPT0gXCJmdW5jdGlvblwiKSBzZWxlY3QgPSBzZWxlY3RvcihzZWxlY3QpO1xuXG4gIGZvciAodmFyIGdyb3VwcyA9IHRoaXMuX2dyb3VwcywgbSA9IGdyb3Vwcy5sZW5ndGgsIHN1Ymdyb3VwcyA9IG5ldyBBcnJheShtKSwgaiA9IDA7IGogPCBtOyArK2opIHtcbiAgICBmb3IgKHZhciBncm91cCA9IGdyb3Vwc1tqXSwgbiA9IGdyb3VwLmxlbmd0aCwgc3ViZ3JvdXAgPSBzdWJncm91cHNbal0gPSBuZXcgQXJyYXkobiksIG5vZGUsIHN1Ym5vZGUsIGkgPSAwOyBpIDwgbjsgKytpKSB7XG4gICAgICBpZiAoKG5vZGUgPSBncm91cFtpXSkgJiYgKHN1Ym5vZGUgPSBzZWxlY3QuY2FsbChub2RlLCBub2RlLl9fZGF0YV9fLCBpLCBncm91cCkpKSB7XG4gICAgICAgIGlmIChcIl9fZGF0YV9fXCIgaW4gbm9kZSkgc3Vibm9kZS5fX2RhdGFfXyA9IG5vZGUuX19kYXRhX187XG4gICAgICAgIHN1Ymdyb3VwW2ldID0gc3Vibm9kZTtcbiAgICAgICAgc2NoZWR1bGUoc3ViZ3JvdXBbaV0sIG5hbWUsIGlkLCBpLCBzdWJncm91cCwgZ2V0KG5vZGUsIGlkKSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG5ldyBUcmFuc2l0aW9uKHN1Ymdyb3VwcywgdGhpcy5fcGFyZW50cywgbmFtZSwgaWQpO1xufVxuIiwiaW1wb3J0IHtzZWxlY3RvckFsbH0gZnJvbSBcImQzLXNlbGVjdGlvblwiO1xuaW1wb3J0IHtUcmFuc2l0aW9ufSBmcm9tIFwiLi9pbmRleC5qc1wiO1xuaW1wb3J0IHNjaGVkdWxlLCB7Z2V0fSBmcm9tIFwiLi9zY2hlZHVsZS5qc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihzZWxlY3QpIHtcbiAgdmFyIG5hbWUgPSB0aGlzLl9uYW1lLFxuICAgICAgaWQgPSB0aGlzLl9pZDtcblxuICBpZiAodHlwZW9mIHNlbGVjdCAhPT0gXCJmdW5jdGlvblwiKSBzZWxlY3QgPSBzZWxlY3RvckFsbChzZWxlY3QpO1xuXG4gIGZvciAodmFyIGdyb3VwcyA9IHRoaXMuX2dyb3VwcywgbSA9IGdyb3Vwcy5sZW5ndGgsIHN1Ymdyb3VwcyA9IFtdLCBwYXJlbnRzID0gW10sIGogPSAwOyBqIDwgbTsgKytqKSB7XG4gICAgZm9yICh2YXIgZ3JvdXAgPSBncm91cHNbal0sIG4gPSBncm91cC5sZW5ndGgsIG5vZGUsIGkgPSAwOyBpIDwgbjsgKytpKSB7XG4gICAgICBpZiAobm9kZSA9IGdyb3VwW2ldKSB7XG4gICAgICAgIGZvciAodmFyIGNoaWxkcmVuID0gc2VsZWN0LmNhbGwobm9kZSwgbm9kZS5fX2RhdGFfXywgaSwgZ3JvdXApLCBjaGlsZCwgaW5oZXJpdCA9IGdldChub2RlLCBpZCksIGsgPSAwLCBsID0gY2hpbGRyZW4ubGVuZ3RoOyBrIDwgbDsgKytrKSB7XG4gICAgICAgICAgaWYgKGNoaWxkID0gY2hpbGRyZW5ba10pIHtcbiAgICAgICAgICAgIHNjaGVkdWxlKGNoaWxkLCBuYW1lLCBpZCwgaywgY2hpbGRyZW4sIGluaGVyaXQpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBzdWJncm91cHMucHVzaChjaGlsZHJlbik7XG4gICAgICAgIHBhcmVudHMucHVzaChub2RlKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gbmV3IFRyYW5zaXRpb24oc3ViZ3JvdXBzLCBwYXJlbnRzLCBuYW1lLCBpZCk7XG59XG4iLCJpbXBvcnQge3NlbGVjdGlvbn0gZnJvbSBcImQzLXNlbGVjdGlvblwiO1xuXG52YXIgU2VsZWN0aW9uID0gc2VsZWN0aW9uLnByb3RvdHlwZS5jb25zdHJ1Y3RvcjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKSB7XG4gIHJldHVybiBuZXcgU2VsZWN0aW9uKHRoaXMuX2dyb3VwcywgdGhpcy5fcGFyZW50cyk7XG59XG4iLCJpbXBvcnQge2ludGVycG9sYXRlVHJhbnNmb3JtQ3NzIGFzIGludGVycG9sYXRlVHJhbnNmb3JtfSBmcm9tIFwiZDMtaW50ZXJwb2xhdGVcIjtcbmltcG9ydCB7c3R5bGV9IGZyb20gXCJkMy1zZWxlY3Rpb25cIjtcbmltcG9ydCB7c2V0fSBmcm9tIFwiLi9zY2hlZHVsZS5qc1wiO1xuaW1wb3J0IHt0d2VlblZhbHVlfSBmcm9tIFwiLi90d2Vlbi5qc1wiO1xuaW1wb3J0IGludGVycG9sYXRlIGZyb20gXCIuL2ludGVycG9sYXRlLmpzXCI7XG5cbmZ1bmN0aW9uIHN0eWxlTnVsbChuYW1lLCBpbnRlcnBvbGF0ZSkge1xuICB2YXIgc3RyaW5nMDAsXG4gICAgICBzdHJpbmcxMCxcbiAgICAgIGludGVycG9sYXRlMDtcbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIHZhciBzdHJpbmcwID0gc3R5bGUodGhpcywgbmFtZSksXG4gICAgICAgIHN0cmluZzEgPSAodGhpcy5zdHlsZS5yZW1vdmVQcm9wZXJ0eShuYW1lKSwgc3R5bGUodGhpcywgbmFtZSkpO1xuICAgIHJldHVybiBzdHJpbmcwID09PSBzdHJpbmcxID8gbnVsbFxuICAgICAgICA6IHN0cmluZzAgPT09IHN0cmluZzAwICYmIHN0cmluZzEgPT09IHN0cmluZzEwID8gaW50ZXJwb2xhdGUwXG4gICAgICAgIDogaW50ZXJwb2xhdGUwID0gaW50ZXJwb2xhdGUoc3RyaW5nMDAgPSBzdHJpbmcwLCBzdHJpbmcxMCA9IHN0cmluZzEpO1xuICB9O1xufVxuXG5mdW5jdGlvbiBzdHlsZVJlbW92ZShuYW1lKSB7XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICB0aGlzLnN0eWxlLnJlbW92ZVByb3BlcnR5KG5hbWUpO1xuICB9O1xufVxuXG5mdW5jdGlvbiBzdHlsZUNvbnN0YW50KG5hbWUsIGludGVycG9sYXRlLCB2YWx1ZTEpIHtcbiAgdmFyIHN0cmluZzAwLFxuICAgICAgc3RyaW5nMSA9IHZhbHVlMSArIFwiXCIsXG4gICAgICBpbnRlcnBvbGF0ZTA7XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICB2YXIgc3RyaW5nMCA9IHN0eWxlKHRoaXMsIG5hbWUpO1xuICAgIHJldHVybiBzdHJpbmcwID09PSBzdHJpbmcxID8gbnVsbFxuICAgICAgICA6IHN0cmluZzAgPT09IHN0cmluZzAwID8gaW50ZXJwb2xhdGUwXG4gICAgICAgIDogaW50ZXJwb2xhdGUwID0gaW50ZXJwb2xhdGUoc3RyaW5nMDAgPSBzdHJpbmcwLCB2YWx1ZTEpO1xuICB9O1xufVxuXG5mdW5jdGlvbiBzdHlsZUZ1bmN0aW9uKG5hbWUsIGludGVycG9sYXRlLCB2YWx1ZSkge1xuICB2YXIgc3RyaW5nMDAsXG4gICAgICBzdHJpbmcxMCxcbiAgICAgIGludGVycG9sYXRlMDtcbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIHZhciBzdHJpbmcwID0gc3R5bGUodGhpcywgbmFtZSksXG4gICAgICAgIHZhbHVlMSA9IHZhbHVlKHRoaXMpLFxuICAgICAgICBzdHJpbmcxID0gdmFsdWUxICsgXCJcIjtcbiAgICBpZiAodmFsdWUxID09IG51bGwpIHN0cmluZzEgPSB2YWx1ZTEgPSAodGhpcy5zdHlsZS5yZW1vdmVQcm9wZXJ0eShuYW1lKSwgc3R5bGUodGhpcywgbmFtZSkpO1xuICAgIHJldHVybiBzdHJpbmcwID09PSBzdHJpbmcxID8gbnVsbFxuICAgICAgICA6IHN0cmluZzAgPT09IHN0cmluZzAwICYmIHN0cmluZzEgPT09IHN0cmluZzEwID8gaW50ZXJwb2xhdGUwXG4gICAgICAgIDogKHN0cmluZzEwID0gc3RyaW5nMSwgaW50ZXJwb2xhdGUwID0gaW50ZXJwb2xhdGUoc3RyaW5nMDAgPSBzdHJpbmcwLCB2YWx1ZTEpKTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gc3R5bGVNYXliZVJlbW92ZShpZCwgbmFtZSkge1xuICB2YXIgb24wLCBvbjEsIGxpc3RlbmVyMCwga2V5ID0gXCJzdHlsZS5cIiArIG5hbWUsIGV2ZW50ID0gXCJlbmQuXCIgKyBrZXksIHJlbW92ZTtcbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIHZhciBzY2hlZHVsZSA9IHNldCh0aGlzLCBpZCksXG4gICAgICAgIG9uID0gc2NoZWR1bGUub24sXG4gICAgICAgIGxpc3RlbmVyID0gc2NoZWR1bGUudmFsdWVba2V5XSA9PSBudWxsID8gcmVtb3ZlIHx8IChyZW1vdmUgPSBzdHlsZVJlbW92ZShuYW1lKSkgOiB1bmRlZmluZWQ7XG5cbiAgICAvLyBJZiB0aGlzIG5vZGUgc2hhcmVkIGEgZGlzcGF0Y2ggd2l0aCB0aGUgcHJldmlvdXMgbm9kZSxcbiAgICAvLyBqdXN0IGFzc2lnbiB0aGUgdXBkYXRlZCBzaGFyZWQgZGlzcGF0Y2ggYW5kIHdl4oCZcmUgZG9uZSFcbiAgICAvLyBPdGhlcndpc2UsIGNvcHktb24td3JpdGUuXG4gICAgaWYgKG9uICE9PSBvbjAgfHwgbGlzdGVuZXIwICE9PSBsaXN0ZW5lcikgKG9uMSA9IChvbjAgPSBvbikuY29weSgpKS5vbihldmVudCwgbGlzdGVuZXIwID0gbGlzdGVuZXIpO1xuXG4gICAgc2NoZWR1bGUub24gPSBvbjE7XG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKG5hbWUsIHZhbHVlLCBwcmlvcml0eSkge1xuICB2YXIgaSA9IChuYW1lICs9IFwiXCIpID09PSBcInRyYW5zZm9ybVwiID8gaW50ZXJwb2xhdGVUcmFuc2Zvcm0gOiBpbnRlcnBvbGF0ZTtcbiAgcmV0dXJuIHZhbHVlID09IG51bGwgPyB0aGlzXG4gICAgICAuc3R5bGVUd2VlbihuYW1lLCBzdHlsZU51bGwobmFtZSwgaSkpXG4gICAgICAub24oXCJlbmQuc3R5bGUuXCIgKyBuYW1lLCBzdHlsZVJlbW92ZShuYW1lKSlcbiAgICA6IHR5cGVvZiB2YWx1ZSA9PT0gXCJmdW5jdGlvblwiID8gdGhpc1xuICAgICAgLnN0eWxlVHdlZW4obmFtZSwgc3R5bGVGdW5jdGlvbihuYW1lLCBpLCB0d2VlblZhbHVlKHRoaXMsIFwic3R5bGUuXCIgKyBuYW1lLCB2YWx1ZSkpKVxuICAgICAgLmVhY2goc3R5bGVNYXliZVJlbW92ZSh0aGlzLl9pZCwgbmFtZSkpXG4gICAgOiB0aGlzXG4gICAgICAuc3R5bGVUd2VlbihuYW1lLCBzdHlsZUNvbnN0YW50KG5hbWUsIGksIHZhbHVlKSwgcHJpb3JpdHkpXG4gICAgICAub24oXCJlbmQuc3R5bGUuXCIgKyBuYW1lLCBudWxsKTtcbn1cbiIsImZ1bmN0aW9uIHN0eWxlSW50ZXJwb2xhdGUobmFtZSwgaSwgcHJpb3JpdHkpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKHQpIHtcbiAgICB0aGlzLnN0eWxlLnNldFByb3BlcnR5KG5hbWUsIGkuY2FsbCh0aGlzLCB0KSwgcHJpb3JpdHkpO1xuICB9O1xufVxuXG5mdW5jdGlvbiBzdHlsZVR3ZWVuKG5hbWUsIHZhbHVlLCBwcmlvcml0eSkge1xuICB2YXIgdCwgaTA7XG4gIGZ1bmN0aW9uIHR3ZWVuKCkge1xuICAgIHZhciBpID0gdmFsdWUuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICBpZiAoaSAhPT0gaTApIHQgPSAoaTAgPSBpKSAmJiBzdHlsZUludGVycG9sYXRlKG5hbWUsIGksIHByaW9yaXR5KTtcbiAgICByZXR1cm4gdDtcbiAgfVxuICB0d2Vlbi5fdmFsdWUgPSB2YWx1ZTtcbiAgcmV0dXJuIHR3ZWVuO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihuYW1lLCB2YWx1ZSwgcHJpb3JpdHkpIHtcbiAgdmFyIGtleSA9IFwic3R5bGUuXCIgKyAobmFtZSArPSBcIlwiKTtcbiAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPCAyKSByZXR1cm4gKGtleSA9IHRoaXMudHdlZW4oa2V5KSkgJiYga2V5Ll92YWx1ZTtcbiAgaWYgKHZhbHVlID09IG51bGwpIHJldHVybiB0aGlzLnR3ZWVuKGtleSwgbnVsbCk7XG4gIGlmICh0eXBlb2YgdmFsdWUgIT09IFwiZnVuY3Rpb25cIikgdGhyb3cgbmV3IEVycm9yO1xuICByZXR1cm4gdGhpcy50d2VlbihrZXksIHN0eWxlVHdlZW4obmFtZSwgdmFsdWUsIHByaW9yaXR5ID09IG51bGwgPyBcIlwiIDogcHJpb3JpdHkpKTtcbn1cbiIsImltcG9ydCB7dHdlZW5WYWx1ZX0gZnJvbSBcIi4vdHdlZW4uanNcIjtcblxuZnVuY3Rpb24gdGV4dENvbnN0YW50KHZhbHVlKSB7XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICB0aGlzLnRleHRDb250ZW50ID0gdmFsdWU7XG4gIH07XG59XG5cbmZ1bmN0aW9uIHRleHRGdW5jdGlvbih2YWx1ZSkge1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgdmFyIHZhbHVlMSA9IHZhbHVlKHRoaXMpO1xuICAgIHRoaXMudGV4dENvbnRlbnQgPSB2YWx1ZTEgPT0gbnVsbCA/IFwiXCIgOiB2YWx1ZTE7XG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKHZhbHVlKSB7XG4gIHJldHVybiB0aGlzLnR3ZWVuKFwidGV4dFwiLCB0eXBlb2YgdmFsdWUgPT09IFwiZnVuY3Rpb25cIlxuICAgICAgPyB0ZXh0RnVuY3Rpb24odHdlZW5WYWx1ZSh0aGlzLCBcInRleHRcIiwgdmFsdWUpKVxuICAgICAgOiB0ZXh0Q29uc3RhbnQodmFsdWUgPT0gbnVsbCA/IFwiXCIgOiB2YWx1ZSArIFwiXCIpKTtcbn1cbiIsImZ1bmN0aW9uIHRleHRJbnRlcnBvbGF0ZShpKSB7XG4gIHJldHVybiBmdW5jdGlvbih0KSB7XG4gICAgdGhpcy50ZXh0Q29udGVudCA9IGkuY2FsbCh0aGlzLCB0KTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gdGV4dFR3ZWVuKHZhbHVlKSB7XG4gIHZhciB0MCwgaTA7XG4gIGZ1bmN0aW9uIHR3ZWVuKCkge1xuICAgIHZhciBpID0gdmFsdWUuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICBpZiAoaSAhPT0gaTApIHQwID0gKGkwID0gaSkgJiYgdGV4dEludGVycG9sYXRlKGkpO1xuICAgIHJldHVybiB0MDtcbiAgfVxuICB0d2Vlbi5fdmFsdWUgPSB2YWx1ZTtcbiAgcmV0dXJuIHR3ZWVuO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbih2YWx1ZSkge1xuICB2YXIga2V5ID0gXCJ0ZXh0XCI7XG4gIGlmIChhcmd1bWVudHMubGVuZ3RoIDwgMSkgcmV0dXJuIChrZXkgPSB0aGlzLnR3ZWVuKGtleSkpICYmIGtleS5fdmFsdWU7XG4gIGlmICh2YWx1ZSA9PSBudWxsKSByZXR1cm4gdGhpcy50d2VlbihrZXksIG51bGwpO1xuICBpZiAodHlwZW9mIHZhbHVlICE9PSBcImZ1bmN0aW9uXCIpIHRocm93IG5ldyBFcnJvcjtcbiAgcmV0dXJuIHRoaXMudHdlZW4oa2V5LCB0ZXh0VHdlZW4odmFsdWUpKTtcbn1cbiIsImltcG9ydCB7VHJhbnNpdGlvbiwgbmV3SWR9IGZyb20gXCIuL2luZGV4LmpzXCI7XG5pbXBvcnQgc2NoZWR1bGUsIHtnZXR9IGZyb20gXCIuL3NjaGVkdWxlLmpzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCkge1xuICB2YXIgbmFtZSA9IHRoaXMuX25hbWUsXG4gICAgICBpZDAgPSB0aGlzLl9pZCxcbiAgICAgIGlkMSA9IG5ld0lkKCk7XG5cbiAgZm9yICh2YXIgZ3JvdXBzID0gdGhpcy5fZ3JvdXBzLCBtID0gZ3JvdXBzLmxlbmd0aCwgaiA9IDA7IGogPCBtOyArK2opIHtcbiAgICBmb3IgKHZhciBncm91cCA9IGdyb3Vwc1tqXSwgbiA9IGdyb3VwLmxlbmd0aCwgbm9kZSwgaSA9IDA7IGkgPCBuOyArK2kpIHtcbiAgICAgIGlmIChub2RlID0gZ3JvdXBbaV0pIHtcbiAgICAgICAgdmFyIGluaGVyaXQgPSBnZXQobm9kZSwgaWQwKTtcbiAgICAgICAgc2NoZWR1bGUobm9kZSwgbmFtZSwgaWQxLCBpLCBncm91cCwge1xuICAgICAgICAgIHRpbWU6IGluaGVyaXQudGltZSArIGluaGVyaXQuZGVsYXkgKyBpbmhlcml0LmR1cmF0aW9uLFxuICAgICAgICAgIGRlbGF5OiAwLFxuICAgICAgICAgIGR1cmF0aW9uOiBpbmhlcml0LmR1cmF0aW9uLFxuICAgICAgICAgIGVhc2U6IGluaGVyaXQuZWFzZVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gbmV3IFRyYW5zaXRpb24oZ3JvdXBzLCB0aGlzLl9wYXJlbnRzLCBuYW1lLCBpZDEpO1xufVxuIiwiaW1wb3J0IHtzZXR9IGZyb20gXCIuL3NjaGVkdWxlLmpzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCkge1xuICB2YXIgb24wLCBvbjEsIHRoYXQgPSB0aGlzLCBpZCA9IHRoYXQuX2lkLCBzaXplID0gdGhhdC5zaXplKCk7XG4gIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiAgICB2YXIgY2FuY2VsID0ge3ZhbHVlOiByZWplY3R9LFxuICAgICAgICBlbmQgPSB7dmFsdWU6IGZ1bmN0aW9uKCkgeyBpZiAoLS1zaXplID09PSAwKSByZXNvbHZlKCk7IH19O1xuXG4gICAgdGhhdC5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIHNjaGVkdWxlID0gc2V0KHRoaXMsIGlkKSxcbiAgICAgICAgICBvbiA9IHNjaGVkdWxlLm9uO1xuXG4gICAgICAvLyBJZiB0aGlzIG5vZGUgc2hhcmVkIGEgZGlzcGF0Y2ggd2l0aCB0aGUgcHJldmlvdXMgbm9kZSxcbiAgICAgIC8vIGp1c3QgYXNzaWduIHRoZSB1cGRhdGVkIHNoYXJlZCBkaXNwYXRjaCBhbmQgd2XigJlyZSBkb25lIVxuICAgICAgLy8gT3RoZXJ3aXNlLCBjb3B5LW9uLXdyaXRlLlxuICAgICAgaWYgKG9uICE9PSBvbjApIHtcbiAgICAgICAgb24xID0gKG9uMCA9IG9uKS5jb3B5KCk7XG4gICAgICAgIG9uMS5fLmNhbmNlbC5wdXNoKGNhbmNlbCk7XG4gICAgICAgIG9uMS5fLmludGVycnVwdC5wdXNoKGNhbmNlbCk7XG4gICAgICAgIG9uMS5fLmVuZC5wdXNoKGVuZCk7XG4gICAgICB9XG5cbiAgICAgIHNjaGVkdWxlLm9uID0gb24xO1xuICAgIH0pO1xuXG4gICAgLy8gVGhlIHNlbGVjdGlvbiB3YXMgZW1wdHksIHJlc29sdmUgZW5kIGltbWVkaWF0ZWx5XG4gICAgaWYgKHNpemUgPT09IDApIHJlc29sdmUoKTtcbiAgfSk7XG59XG4iLCJpbXBvcnQge3NlbGVjdGlvbn0gZnJvbSBcImQzLXNlbGVjdGlvblwiO1xuaW1wb3J0IHRyYW5zaXRpb25fYXR0ciBmcm9tIFwiLi9hdHRyLmpzXCI7XG5pbXBvcnQgdHJhbnNpdGlvbl9hdHRyVHdlZW4gZnJvbSBcIi4vYXR0clR3ZWVuLmpzXCI7XG5pbXBvcnQgdHJhbnNpdGlvbl9kZWxheSBmcm9tIFwiLi9kZWxheS5qc1wiO1xuaW1wb3J0IHRyYW5zaXRpb25fZHVyYXRpb24gZnJvbSBcIi4vZHVyYXRpb24uanNcIjtcbmltcG9ydCB0cmFuc2l0aW9uX2Vhc2UgZnJvbSBcIi4vZWFzZS5qc1wiO1xuaW1wb3J0IHRyYW5zaXRpb25fZWFzZVZhcnlpbmcgZnJvbSBcIi4vZWFzZVZhcnlpbmcuanNcIjtcbmltcG9ydCB0cmFuc2l0aW9uX2ZpbHRlciBmcm9tIFwiLi9maWx0ZXIuanNcIjtcbmltcG9ydCB0cmFuc2l0aW9uX21lcmdlIGZyb20gXCIuL21lcmdlLmpzXCI7XG5pbXBvcnQgdHJhbnNpdGlvbl9vbiBmcm9tIFwiLi9vbi5qc1wiO1xuaW1wb3J0IHRyYW5zaXRpb25fcmVtb3ZlIGZyb20gXCIuL3JlbW92ZS5qc1wiO1xuaW1wb3J0IHRyYW5zaXRpb25fc2VsZWN0IGZyb20gXCIuL3NlbGVjdC5qc1wiO1xuaW1wb3J0IHRyYW5zaXRpb25fc2VsZWN0QWxsIGZyb20gXCIuL3NlbGVjdEFsbC5qc1wiO1xuaW1wb3J0IHRyYW5zaXRpb25fc2VsZWN0aW9uIGZyb20gXCIuL3NlbGVjdGlvbi5qc1wiO1xuaW1wb3J0IHRyYW5zaXRpb25fc3R5bGUgZnJvbSBcIi4vc3R5bGUuanNcIjtcbmltcG9ydCB0cmFuc2l0aW9uX3N0eWxlVHdlZW4gZnJvbSBcIi4vc3R5bGVUd2Vlbi5qc1wiO1xuaW1wb3J0IHRyYW5zaXRpb25fdGV4dCBmcm9tIFwiLi90ZXh0LmpzXCI7XG5pbXBvcnQgdHJhbnNpdGlvbl90ZXh0VHdlZW4gZnJvbSBcIi4vdGV4dFR3ZWVuLmpzXCI7XG5pbXBvcnQgdHJhbnNpdGlvbl90cmFuc2l0aW9uIGZyb20gXCIuL3RyYW5zaXRpb24uanNcIjtcbmltcG9ydCB0cmFuc2l0aW9uX3R3ZWVuIGZyb20gXCIuL3R3ZWVuLmpzXCI7XG5pbXBvcnQgdHJhbnNpdGlvbl9lbmQgZnJvbSBcIi4vZW5kLmpzXCI7XG5cbnZhciBpZCA9IDA7XG5cbmV4cG9ydCBmdW5jdGlvbiBUcmFuc2l0aW9uKGdyb3VwcywgcGFyZW50cywgbmFtZSwgaWQpIHtcbiAgdGhpcy5fZ3JvdXBzID0gZ3JvdXBzO1xuICB0aGlzLl9wYXJlbnRzID0gcGFyZW50cztcbiAgdGhpcy5fbmFtZSA9IG5hbWU7XG4gIHRoaXMuX2lkID0gaWQ7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRyYW5zaXRpb24obmFtZSkge1xuICByZXR1cm4gc2VsZWN0aW9uKCkudHJhbnNpdGlvbihuYW1lKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG5ld0lkKCkge1xuICByZXR1cm4gKytpZDtcbn1cblxudmFyIHNlbGVjdGlvbl9wcm90b3R5cGUgPSBzZWxlY3Rpb24ucHJvdG90eXBlO1xuXG5UcmFuc2l0aW9uLnByb3RvdHlwZSA9IHRyYW5zaXRpb24ucHJvdG90eXBlID0ge1xuICBjb25zdHJ1Y3RvcjogVHJhbnNpdGlvbixcbiAgc2VsZWN0OiB0cmFuc2l0aW9uX3NlbGVjdCxcbiAgc2VsZWN0QWxsOiB0cmFuc2l0aW9uX3NlbGVjdEFsbCxcbiAgc2VsZWN0Q2hpbGQ6IHNlbGVjdGlvbl9wcm90b3R5cGUuc2VsZWN0Q2hpbGQsXG4gIHNlbGVjdENoaWxkcmVuOiBzZWxlY3Rpb25fcHJvdG90eXBlLnNlbGVjdENoaWxkcmVuLFxuICBmaWx0ZXI6IHRyYW5zaXRpb25fZmlsdGVyLFxuICBtZXJnZTogdHJhbnNpdGlvbl9tZXJnZSxcbiAgc2VsZWN0aW9uOiB0cmFuc2l0aW9uX3NlbGVjdGlvbixcbiAgdHJhbnNpdGlvbjogdHJhbnNpdGlvbl90cmFuc2l0aW9uLFxuICBjYWxsOiBzZWxlY3Rpb25fcHJvdG90eXBlLmNhbGwsXG4gIG5vZGVzOiBzZWxlY3Rpb25fcHJvdG90eXBlLm5vZGVzLFxuICBub2RlOiBzZWxlY3Rpb25fcHJvdG90eXBlLm5vZGUsXG4gIHNpemU6IHNlbGVjdGlvbl9wcm90b3R5cGUuc2l6ZSxcbiAgZW1wdHk6IHNlbGVjdGlvbl9wcm90b3R5cGUuZW1wdHksXG4gIGVhY2g6IHNlbGVjdGlvbl9wcm90b3R5cGUuZWFjaCxcbiAgb246IHRyYW5zaXRpb25fb24sXG4gIGF0dHI6IHRyYW5zaXRpb25fYXR0cixcbiAgYXR0clR3ZWVuOiB0cmFuc2l0aW9uX2F0dHJUd2VlbixcbiAgc3R5bGU6IHRyYW5zaXRpb25fc3R5bGUsXG4gIHN0eWxlVHdlZW46IHRyYW5zaXRpb25fc3R5bGVUd2VlbixcbiAgdGV4dDogdHJhbnNpdGlvbl90ZXh0LFxuICB0ZXh0VHdlZW46IHRyYW5zaXRpb25fdGV4dFR3ZWVuLFxuICByZW1vdmU6IHRyYW5zaXRpb25fcmVtb3ZlLFxuICB0d2VlbjogdHJhbnNpdGlvbl90d2VlbixcbiAgZGVsYXk6IHRyYW5zaXRpb25fZGVsYXksXG4gIGR1cmF0aW9uOiB0cmFuc2l0aW9uX2R1cmF0aW9uLFxuICBlYXNlOiB0cmFuc2l0aW9uX2Vhc2UsXG4gIGVhc2VWYXJ5aW5nOiB0cmFuc2l0aW9uX2Vhc2VWYXJ5aW5nLFxuICBlbmQ6IHRyYW5zaXRpb25fZW5kLFxuICBbU3ltYm9sLml0ZXJhdG9yXTogc2VsZWN0aW9uX3Byb3RvdHlwZVtTeW1ib2wuaXRlcmF0b3JdXG59O1xuIiwiZXhwb3J0IGZ1bmN0aW9uIGN1YmljSW4odCkge1xuICByZXR1cm4gdCAqIHQgKiB0O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY3ViaWNPdXQodCkge1xuICByZXR1cm4gLS10ICogdCAqIHQgKyAxO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY3ViaWNJbk91dCh0KSB7XG4gIHJldHVybiAoKHQgKj0gMikgPD0gMSA/IHQgKiB0ICogdCA6ICh0IC09IDIpICogdCAqIHQgKyAyKSAvIDI7XG59XG4iLCJpbXBvcnQge1RyYW5zaXRpb24sIG5ld0lkfSBmcm9tIFwiLi4vdHJhbnNpdGlvbi9pbmRleC5qc1wiO1xuaW1wb3J0IHNjaGVkdWxlIGZyb20gXCIuLi90cmFuc2l0aW9uL3NjaGVkdWxlLmpzXCI7XG5pbXBvcnQge2Vhc2VDdWJpY0luT3V0fSBmcm9tIFwiZDMtZWFzZVwiO1xuaW1wb3J0IHtub3d9IGZyb20gXCJkMy10aW1lclwiO1xuXG52YXIgZGVmYXVsdFRpbWluZyA9IHtcbiAgdGltZTogbnVsbCwgLy8gU2V0IG9uIHVzZS5cbiAgZGVsYXk6IDAsXG4gIGR1cmF0aW9uOiAyNTAsXG4gIGVhc2U6IGVhc2VDdWJpY0luT3V0XG59O1xuXG5mdW5jdGlvbiBpbmhlcml0KG5vZGUsIGlkKSB7XG4gIHZhciB0aW1pbmc7XG4gIHdoaWxlICghKHRpbWluZyA9IG5vZGUuX190cmFuc2l0aW9uKSB8fCAhKHRpbWluZyA9IHRpbWluZ1tpZF0pKSB7XG4gICAgaWYgKCEobm9kZSA9IG5vZGUucGFyZW50Tm9kZSkpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgdHJhbnNpdGlvbiAke2lkfSBub3QgZm91bmRgKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHRpbWluZztcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24obmFtZSkge1xuICB2YXIgaWQsXG4gICAgICB0aW1pbmc7XG5cbiAgaWYgKG5hbWUgaW5zdGFuY2VvZiBUcmFuc2l0aW9uKSB7XG4gICAgaWQgPSBuYW1lLl9pZCwgbmFtZSA9IG5hbWUuX25hbWU7XG4gIH0gZWxzZSB7XG4gICAgaWQgPSBuZXdJZCgpLCAodGltaW5nID0gZGVmYXVsdFRpbWluZykudGltZSA9IG5vdygpLCBuYW1lID0gbmFtZSA9PSBudWxsID8gbnVsbCA6IG5hbWUgKyBcIlwiO1xuICB9XG5cbiAgZm9yICh2YXIgZ3JvdXBzID0gdGhpcy5fZ3JvdXBzLCBtID0gZ3JvdXBzLmxlbmd0aCwgaiA9IDA7IGogPCBtOyArK2opIHtcbiAgICBmb3IgKHZhciBncm91cCA9IGdyb3Vwc1tqXSwgbiA9IGdyb3VwLmxlbmd0aCwgbm9kZSwgaSA9IDA7IGkgPCBuOyArK2kpIHtcbiAgICAgIGlmIChub2RlID0gZ3JvdXBbaV0pIHtcbiAgICAgICAgc2NoZWR1bGUobm9kZSwgbmFtZSwgaWQsIGksIGdyb3VwLCB0aW1pbmcgfHwgaW5oZXJpdChub2RlLCBpZCkpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBuZXcgVHJhbnNpdGlvbihncm91cHMsIHRoaXMuX3BhcmVudHMsIG5hbWUsIGlkKTtcbn1cbiIsImltcG9ydCB7c2VsZWN0aW9ufSBmcm9tIFwiZDMtc2VsZWN0aW9uXCI7XG5pbXBvcnQgc2VsZWN0aW9uX2ludGVycnVwdCBmcm9tIFwiLi9pbnRlcnJ1cHQuanNcIjtcbmltcG9ydCBzZWxlY3Rpb25fdHJhbnNpdGlvbiBmcm9tIFwiLi90cmFuc2l0aW9uLmpzXCI7XG5cbnNlbGVjdGlvbi5wcm90b3R5cGUuaW50ZXJydXB0ID0gc2VsZWN0aW9uX2ludGVycnVwdDtcbnNlbGVjdGlvbi5wcm90b3R5cGUudHJhbnNpdGlvbiA9IHNlbGVjdGlvbl90cmFuc2l0aW9uO1xuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oeCkge1xuICByZXR1cm4gTWF0aC5hYnMoeCA9IE1hdGgucm91bmQoeCkpID49IDFlMjFcbiAgICAgID8geC50b0xvY2FsZVN0cmluZyhcImVuXCIpLnJlcGxhY2UoLywvZywgXCJcIilcbiAgICAgIDogeC50b1N0cmluZygxMCk7XG59XG5cbi8vIENvbXB1dGVzIHRoZSBkZWNpbWFsIGNvZWZmaWNpZW50IGFuZCBleHBvbmVudCBvZiB0aGUgc3BlY2lmaWVkIG51bWJlciB4IHdpdGhcbi8vIHNpZ25pZmljYW50IGRpZ2l0cyBwLCB3aGVyZSB4IGlzIHBvc2l0aXZlIGFuZCBwIGlzIGluIFsxLCAyMV0gb3IgdW5kZWZpbmVkLlxuLy8gRm9yIGV4YW1wbGUsIGZvcm1hdERlY2ltYWxQYXJ0cygxLjIzKSByZXR1cm5zIFtcIjEyM1wiLCAwXS5cbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXREZWNpbWFsUGFydHMoeCwgcCkge1xuICBpZiAoIWlzRmluaXRlKHgpIHx8IHggPT09IDApIHJldHVybiBudWxsOyAvLyBOYU4sIMKxSW5maW5pdHksIMKxMFxuICB2YXIgaSA9ICh4ID0gcCA/IHgudG9FeHBvbmVudGlhbChwIC0gMSkgOiB4LnRvRXhwb25lbnRpYWwoKSkuaW5kZXhPZihcImVcIiksIGNvZWZmaWNpZW50ID0geC5zbGljZSgwLCBpKTtcblxuICAvLyBUaGUgc3RyaW5nIHJldHVybmVkIGJ5IHRvRXhwb25lbnRpYWwgZWl0aGVyIGhhcyB0aGUgZm9ybSBcXGRcXC5cXGQrZVstK11cXGQrXG4gIC8vIChlLmcuLCAxLjJlKzMpIG9yIHRoZSBmb3JtIFxcZGVbLStdXFxkKyAoZS5nLiwgMWUrMykuXG4gIHJldHVybiBbXG4gICAgY29lZmZpY2llbnQubGVuZ3RoID4gMSA/IGNvZWZmaWNpZW50WzBdICsgY29lZmZpY2llbnQuc2xpY2UoMikgOiBjb2VmZmljaWVudCxcbiAgICAreC5zbGljZShpICsgMSlcbiAgXTtcbn1cbiIsImltcG9ydCB7Zm9ybWF0RGVjaW1hbFBhcnRzfSBmcm9tIFwiLi9mb3JtYXREZWNpbWFsLmpzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKHgpIHtcbiAgcmV0dXJuIHggPSBmb3JtYXREZWNpbWFsUGFydHMoTWF0aC5hYnMoeCkpLCB4ID8geFsxXSA6IE5hTjtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKGdyb3VwaW5nLCB0aG91c2FuZHMpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKHZhbHVlLCB3aWR0aCkge1xuICAgIHZhciBpID0gdmFsdWUubGVuZ3RoLFxuICAgICAgICB0ID0gW10sXG4gICAgICAgIGogPSAwLFxuICAgICAgICBnID0gZ3JvdXBpbmdbMF0sXG4gICAgICAgIGxlbmd0aCA9IDA7XG5cbiAgICB3aGlsZSAoaSA+IDAgJiYgZyA+IDApIHtcbiAgICAgIGlmIChsZW5ndGggKyBnICsgMSA+IHdpZHRoKSBnID0gTWF0aC5tYXgoMSwgd2lkdGggLSBsZW5ndGgpO1xuICAgICAgdC5wdXNoKHZhbHVlLnN1YnN0cmluZyhpIC09IGcsIGkgKyBnKSk7XG4gICAgICBpZiAoKGxlbmd0aCArPSBnICsgMSkgPiB3aWR0aCkgYnJlYWs7XG4gICAgICBnID0gZ3JvdXBpbmdbaiA9IChqICsgMSkgJSBncm91cGluZy5sZW5ndGhdO1xuICAgIH1cblxuICAgIHJldHVybiB0LnJldmVyc2UoKS5qb2luKHRob3VzYW5kcyk7XG4gIH07XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbihudW1lcmFscykge1xuICByZXR1cm4gZnVuY3Rpb24odmFsdWUpIHtcbiAgICByZXR1cm4gdmFsdWUucmVwbGFjZSgvWzAtOV0vZywgZnVuY3Rpb24oaSkge1xuICAgICAgcmV0dXJuIG51bWVyYWxzWytpXTtcbiAgICB9KTtcbiAgfTtcbn1cbiIsIi8vIFtbZmlsbF1hbGlnbl1bc2lnbl1bc3ltYm9sXVswXVt3aWR0aF1bLF1bLnByZWNpc2lvbl1bfl1bdHlwZV1cbnZhciByZSA9IC9eKD86KC4pPyhbPD49Xl0pKT8oWytcXC0oIF0pPyhbJCNdKT8oMCk/KFxcZCspPygsKT8oXFwuXFxkKyk/KH4pPyhbYS16JV0pPyQvaTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZm9ybWF0U3BlY2lmaWVyKHNwZWNpZmllcikge1xuICBpZiAoIShtYXRjaCA9IHJlLmV4ZWMoc3BlY2lmaWVyKSkpIHRocm93IG5ldyBFcnJvcihcImludmFsaWQgZm9ybWF0OiBcIiArIHNwZWNpZmllcik7XG4gIHZhciBtYXRjaDtcbiAgcmV0dXJuIG5ldyBGb3JtYXRTcGVjaWZpZXIoe1xuICAgIGZpbGw6IG1hdGNoWzFdLFxuICAgIGFsaWduOiBtYXRjaFsyXSxcbiAgICBzaWduOiBtYXRjaFszXSxcbiAgICBzeW1ib2w6IG1hdGNoWzRdLFxuICAgIHplcm86IG1hdGNoWzVdLFxuICAgIHdpZHRoOiBtYXRjaFs2XSxcbiAgICBjb21tYTogbWF0Y2hbN10sXG4gICAgcHJlY2lzaW9uOiBtYXRjaFs4XSAmJiBtYXRjaFs4XS5zbGljZSgxKSxcbiAgICB0cmltOiBtYXRjaFs5XSxcbiAgICB0eXBlOiBtYXRjaFsxMF1cbiAgfSk7XG59XG5cbmZvcm1hdFNwZWNpZmllci5wcm90b3R5cGUgPSBGb3JtYXRTcGVjaWZpZXIucHJvdG90eXBlOyAvLyBpbnN0YW5jZW9mXG5cbmV4cG9ydCBmdW5jdGlvbiBGb3JtYXRTcGVjaWZpZXIoc3BlY2lmaWVyKSB7XG4gIHRoaXMuZmlsbCA9IHNwZWNpZmllci5maWxsID09PSB1bmRlZmluZWQgPyBcIiBcIiA6IHNwZWNpZmllci5maWxsICsgXCJcIjtcbiAgdGhpcy5hbGlnbiA9IHNwZWNpZmllci5hbGlnbiA9PT0gdW5kZWZpbmVkID8gXCI+XCIgOiBzcGVjaWZpZXIuYWxpZ24gKyBcIlwiO1xuICB0aGlzLnNpZ24gPSBzcGVjaWZpZXIuc2lnbiA9PT0gdW5kZWZpbmVkID8gXCItXCIgOiBzcGVjaWZpZXIuc2lnbiArIFwiXCI7XG4gIHRoaXMuc3ltYm9sID0gc3BlY2lmaWVyLnN5bWJvbCA9PT0gdW5kZWZpbmVkID8gXCJcIiA6IHNwZWNpZmllci5zeW1ib2wgKyBcIlwiO1xuICB0aGlzLnplcm8gPSAhIXNwZWNpZmllci56ZXJvO1xuICB0aGlzLndpZHRoID0gc3BlY2lmaWVyLndpZHRoID09PSB1bmRlZmluZWQgPyB1bmRlZmluZWQgOiArc3BlY2lmaWVyLndpZHRoO1xuICB0aGlzLmNvbW1hID0gISFzcGVjaWZpZXIuY29tbWE7XG4gIHRoaXMucHJlY2lzaW9uID0gc3BlY2lmaWVyLnByZWNpc2lvbiA9PT0gdW5kZWZpbmVkID8gdW5kZWZpbmVkIDogK3NwZWNpZmllci5wcmVjaXNpb247XG4gIHRoaXMudHJpbSA9ICEhc3BlY2lmaWVyLnRyaW07XG4gIHRoaXMudHlwZSA9IHNwZWNpZmllci50eXBlID09PSB1bmRlZmluZWQgPyBcIlwiIDogc3BlY2lmaWVyLnR5cGUgKyBcIlwiO1xufVxuXG5Gb3JtYXRTcGVjaWZpZXIucHJvdG90eXBlLnRvU3RyaW5nID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiB0aGlzLmZpbGxcbiAgICAgICsgdGhpcy5hbGlnblxuICAgICAgKyB0aGlzLnNpZ25cbiAgICAgICsgdGhpcy5zeW1ib2xcbiAgICAgICsgKHRoaXMuemVybyA/IFwiMFwiIDogXCJcIilcbiAgICAgICsgKHRoaXMud2lkdGggPT09IHVuZGVmaW5lZCA/IFwiXCIgOiBNYXRoLm1heCgxLCB0aGlzLndpZHRoIHwgMCkpXG4gICAgICArICh0aGlzLmNvbW1hID8gXCIsXCIgOiBcIlwiKVxuICAgICAgKyAodGhpcy5wcmVjaXNpb24gPT09IHVuZGVmaW5lZCA/IFwiXCIgOiBcIi5cIiArIE1hdGgubWF4KDAsIHRoaXMucHJlY2lzaW9uIHwgMCkpXG4gICAgICArICh0aGlzLnRyaW0gPyBcIn5cIiA6IFwiXCIpXG4gICAgICArIHRoaXMudHlwZTtcbn07XG4iLCIvLyBUcmltcyBpbnNpZ25pZmljYW50IHplcm9zLCBlLmcuLCByZXBsYWNlcyAxLjIwMDBrIHdpdGggMS4yay5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKHMpIHtcbiAgb3V0OiBmb3IgKHZhciBuID0gcy5sZW5ndGgsIGkgPSAxLCBpMCA9IC0xLCBpMTsgaSA8IG47ICsraSkge1xuICAgIHN3aXRjaCAoc1tpXSkge1xuICAgICAgY2FzZSBcIi5cIjogaTAgPSBpMSA9IGk7IGJyZWFrO1xuICAgICAgY2FzZSBcIjBcIjogaWYgKGkwID09PSAwKSBpMCA9IGk7IGkxID0gaTsgYnJlYWs7XG4gICAgICBkZWZhdWx0OiBpZiAoIStzW2ldKSBicmVhayBvdXQ7IGlmIChpMCA+IDApIGkwID0gMDsgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiBpMCA+IDAgPyBzLnNsaWNlKDAsIGkwKSArIHMuc2xpY2UoaTEgKyAxKSA6IHM7XG59XG4iLCJpbXBvcnQge2Zvcm1hdERlY2ltYWxQYXJ0c30gZnJvbSBcIi4vZm9ybWF0RGVjaW1hbC5qc1wiO1xuXG5leHBvcnQgdmFyIHByZWZpeEV4cG9uZW50O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbih4LCBwKSB7XG4gIHZhciBkID0gZm9ybWF0RGVjaW1hbFBhcnRzKHgsIHApO1xuICBpZiAoIWQpIHJldHVybiBwcmVmaXhFeHBvbmVudCA9IHVuZGVmaW5lZCwgeC50b1ByZWNpc2lvbihwKTtcbiAgdmFyIGNvZWZmaWNpZW50ID0gZFswXSxcbiAgICAgIGV4cG9uZW50ID0gZFsxXSxcbiAgICAgIGkgPSBleHBvbmVudCAtIChwcmVmaXhFeHBvbmVudCA9IE1hdGgubWF4KC04LCBNYXRoLm1pbig4LCBNYXRoLmZsb29yKGV4cG9uZW50IC8gMykpKSAqIDMpICsgMSxcbiAgICAgIG4gPSBjb2VmZmljaWVudC5sZW5ndGg7XG4gIHJldHVybiBpID09PSBuID8gY29lZmZpY2llbnRcbiAgICAgIDogaSA+IG4gPyBjb2VmZmljaWVudCArIG5ldyBBcnJheShpIC0gbiArIDEpLmpvaW4oXCIwXCIpXG4gICAgICA6IGkgPiAwID8gY29lZmZpY2llbnQuc2xpY2UoMCwgaSkgKyBcIi5cIiArIGNvZWZmaWNpZW50LnNsaWNlKGkpXG4gICAgICA6IFwiMC5cIiArIG5ldyBBcnJheSgxIC0gaSkuam9pbihcIjBcIikgKyBmb3JtYXREZWNpbWFsUGFydHMoeCwgTWF0aC5tYXgoMCwgcCArIGkgLSAxKSlbMF07IC8vIGxlc3MgdGhhbiAxeSFcbn1cbiIsImltcG9ydCB7Zm9ybWF0RGVjaW1hbFBhcnRzfSBmcm9tIFwiLi9mb3JtYXREZWNpbWFsLmpzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKHgsIHApIHtcbiAgdmFyIGQgPSBmb3JtYXREZWNpbWFsUGFydHMoeCwgcCk7XG4gIGlmICghZCkgcmV0dXJuIHggKyBcIlwiO1xuICB2YXIgY29lZmZpY2llbnQgPSBkWzBdLFxuICAgICAgZXhwb25lbnQgPSBkWzFdO1xuICByZXR1cm4gZXhwb25lbnQgPCAwID8gXCIwLlwiICsgbmV3IEFycmF5KC1leHBvbmVudCkuam9pbihcIjBcIikgKyBjb2VmZmljaWVudFxuICAgICAgOiBjb2VmZmljaWVudC5sZW5ndGggPiBleHBvbmVudCArIDEgPyBjb2VmZmljaWVudC5zbGljZSgwLCBleHBvbmVudCArIDEpICsgXCIuXCIgKyBjb2VmZmljaWVudC5zbGljZShleHBvbmVudCArIDEpXG4gICAgICA6IGNvZWZmaWNpZW50ICsgbmV3IEFycmF5KGV4cG9uZW50IC0gY29lZmZpY2llbnQubGVuZ3RoICsgMikuam9pbihcIjBcIik7XG59XG4iLCJpbXBvcnQgZm9ybWF0RGVjaW1hbCBmcm9tIFwiLi9mb3JtYXREZWNpbWFsLmpzXCI7XG5pbXBvcnQgZm9ybWF0UHJlZml4QXV0byBmcm9tIFwiLi9mb3JtYXRQcmVmaXhBdXRvLmpzXCI7XG5pbXBvcnQgZm9ybWF0Um91bmRlZCBmcm9tIFwiLi9mb3JtYXRSb3VuZGVkLmpzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgXCIlXCI6ICh4LCBwKSA9PiAoeCAqIDEwMCkudG9GaXhlZChwKSxcbiAgXCJiXCI6ICh4KSA9PiBNYXRoLnJvdW5kKHgpLnRvU3RyaW5nKDIpLFxuICBcImNcIjogKHgpID0+IHggKyBcIlwiLFxuICBcImRcIjogZm9ybWF0RGVjaW1hbCxcbiAgXCJlXCI6ICh4LCBwKSA9PiB4LnRvRXhwb25lbnRpYWwocCksXG4gIFwiZlwiOiAoeCwgcCkgPT4geC50b0ZpeGVkKHApLFxuICBcImdcIjogKHgsIHApID0+IHgudG9QcmVjaXNpb24ocCksXG4gIFwib1wiOiAoeCkgPT4gTWF0aC5yb3VuZCh4KS50b1N0cmluZyg4KSxcbiAgXCJwXCI6ICh4LCBwKSA9PiBmb3JtYXRSb3VuZGVkKHggKiAxMDAsIHApLFxuICBcInJcIjogZm9ybWF0Um91bmRlZCxcbiAgXCJzXCI6IGZvcm1hdFByZWZpeEF1dG8sXG4gIFwiWFwiOiAoeCkgPT4gTWF0aC5yb3VuZCh4KS50b1N0cmluZygxNikudG9VcHBlckNhc2UoKSxcbiAgXCJ4XCI6ICh4KSA9PiBNYXRoLnJvdW5kKHgpLnRvU3RyaW5nKDE2KVxufTtcbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKHgpIHtcbiAgcmV0dXJuIHg7XG59XG4iLCJpbXBvcnQgZXhwb25lbnQgZnJvbSBcIi4vZXhwb25lbnQuanNcIjtcbmltcG9ydCBmb3JtYXRHcm91cCBmcm9tIFwiLi9mb3JtYXRHcm91cC5qc1wiO1xuaW1wb3J0IGZvcm1hdE51bWVyYWxzIGZyb20gXCIuL2Zvcm1hdE51bWVyYWxzLmpzXCI7XG5pbXBvcnQgZm9ybWF0U3BlY2lmaWVyIGZyb20gXCIuL2Zvcm1hdFNwZWNpZmllci5qc1wiO1xuaW1wb3J0IGZvcm1hdFRyaW0gZnJvbSBcIi4vZm9ybWF0VHJpbS5qc1wiO1xuaW1wb3J0IGZvcm1hdFR5cGVzIGZyb20gXCIuL2Zvcm1hdFR5cGVzLmpzXCI7XG5pbXBvcnQge3ByZWZpeEV4cG9uZW50fSBmcm9tIFwiLi9mb3JtYXRQcmVmaXhBdXRvLmpzXCI7XG5pbXBvcnQgaWRlbnRpdHkgZnJvbSBcIi4vaWRlbnRpdHkuanNcIjtcblxudmFyIG1hcCA9IEFycmF5LnByb3RvdHlwZS5tYXAsXG4gICAgcHJlZml4ZXMgPSBbXCJ5XCIsXCJ6XCIsXCJhXCIsXCJmXCIsXCJwXCIsXCJuXCIsXCLCtVwiLFwibVwiLFwiXCIsXCJrXCIsXCJNXCIsXCJHXCIsXCJUXCIsXCJQXCIsXCJFXCIsXCJaXCIsXCJZXCJdO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihsb2NhbGUpIHtcbiAgdmFyIGdyb3VwID0gbG9jYWxlLmdyb3VwaW5nID09PSB1bmRlZmluZWQgfHwgbG9jYWxlLnRob3VzYW5kcyA9PT0gdW5kZWZpbmVkID8gaWRlbnRpdHkgOiBmb3JtYXRHcm91cChtYXAuY2FsbChsb2NhbGUuZ3JvdXBpbmcsIE51bWJlciksIGxvY2FsZS50aG91c2FuZHMgKyBcIlwiKSxcbiAgICAgIGN1cnJlbmN5UHJlZml4ID0gbG9jYWxlLmN1cnJlbmN5ID09PSB1bmRlZmluZWQgPyBcIlwiIDogbG9jYWxlLmN1cnJlbmN5WzBdICsgXCJcIixcbiAgICAgIGN1cnJlbmN5U3VmZml4ID0gbG9jYWxlLmN1cnJlbmN5ID09PSB1bmRlZmluZWQgPyBcIlwiIDogbG9jYWxlLmN1cnJlbmN5WzFdICsgXCJcIixcbiAgICAgIGRlY2ltYWwgPSBsb2NhbGUuZGVjaW1hbCA9PT0gdW5kZWZpbmVkID8gXCIuXCIgOiBsb2NhbGUuZGVjaW1hbCArIFwiXCIsXG4gICAgICBudW1lcmFscyA9IGxvY2FsZS5udW1lcmFscyA9PT0gdW5kZWZpbmVkID8gaWRlbnRpdHkgOiBmb3JtYXROdW1lcmFscyhtYXAuY2FsbChsb2NhbGUubnVtZXJhbHMsIFN0cmluZykpLFxuICAgICAgcGVyY2VudCA9IGxvY2FsZS5wZXJjZW50ID09PSB1bmRlZmluZWQgPyBcIiVcIiA6IGxvY2FsZS5wZXJjZW50ICsgXCJcIixcbiAgICAgIG1pbnVzID0gbG9jYWxlLm1pbnVzID09PSB1bmRlZmluZWQgPyBcIuKIklwiIDogbG9jYWxlLm1pbnVzICsgXCJcIixcbiAgICAgIG5hbiA9IGxvY2FsZS5uYW4gPT09IHVuZGVmaW5lZCA/IFwiTmFOXCIgOiBsb2NhbGUubmFuICsgXCJcIjtcblxuICBmdW5jdGlvbiBuZXdGb3JtYXQoc3BlY2lmaWVyLCBvcHRpb25zKSB7XG4gICAgc3BlY2lmaWVyID0gZm9ybWF0U3BlY2lmaWVyKHNwZWNpZmllcik7XG5cbiAgICB2YXIgZmlsbCA9IHNwZWNpZmllci5maWxsLFxuICAgICAgICBhbGlnbiA9IHNwZWNpZmllci5hbGlnbixcbiAgICAgICAgc2lnbiA9IHNwZWNpZmllci5zaWduLFxuICAgICAgICBzeW1ib2wgPSBzcGVjaWZpZXIuc3ltYm9sLFxuICAgICAgICB6ZXJvID0gc3BlY2lmaWVyLnplcm8sXG4gICAgICAgIHdpZHRoID0gc3BlY2lmaWVyLndpZHRoLFxuICAgICAgICBjb21tYSA9IHNwZWNpZmllci5jb21tYSxcbiAgICAgICAgcHJlY2lzaW9uID0gc3BlY2lmaWVyLnByZWNpc2lvbixcbiAgICAgICAgdHJpbSA9IHNwZWNpZmllci50cmltLFxuICAgICAgICB0eXBlID0gc3BlY2lmaWVyLnR5cGU7XG5cbiAgICAvLyBUaGUgXCJuXCIgdHlwZSBpcyBhbiBhbGlhcyBmb3IgXCIsZ1wiLlxuICAgIGlmICh0eXBlID09PSBcIm5cIikgY29tbWEgPSB0cnVlLCB0eXBlID0gXCJnXCI7XG5cbiAgICAvLyBUaGUgXCJcIiB0eXBlLCBhbmQgYW55IGludmFsaWQgdHlwZSwgaXMgYW4gYWxpYXMgZm9yIFwiLjEyfmdcIi5cbiAgICBlbHNlIGlmICghZm9ybWF0VHlwZXNbdHlwZV0pIHByZWNpc2lvbiA9PT0gdW5kZWZpbmVkICYmIChwcmVjaXNpb24gPSAxMiksIHRyaW0gPSB0cnVlLCB0eXBlID0gXCJnXCI7XG5cbiAgICAvLyBJZiB6ZXJvIGZpbGwgaXMgc3BlY2lmaWVkLCBwYWRkaW5nIGdvZXMgYWZ0ZXIgc2lnbiBhbmQgYmVmb3JlIGRpZ2l0cy5cbiAgICBpZiAoemVybyB8fCAoZmlsbCA9PT0gXCIwXCIgJiYgYWxpZ24gPT09IFwiPVwiKSkgemVybyA9IHRydWUsIGZpbGwgPSBcIjBcIiwgYWxpZ24gPSBcIj1cIjtcblxuICAgIC8vIENvbXB1dGUgdGhlIHByZWZpeCBhbmQgc3VmZml4LlxuICAgIC8vIEZvciBTSS1wcmVmaXgsIHRoZSBzdWZmaXggaXMgbGF6aWx5IGNvbXB1dGVkLlxuICAgIHZhciBwcmVmaXggPSAob3B0aW9ucyAmJiBvcHRpb25zLnByZWZpeCAhPT0gdW5kZWZpbmVkID8gb3B0aW9ucy5wcmVmaXggOiBcIlwiKSArIChzeW1ib2wgPT09IFwiJFwiID8gY3VycmVuY3lQcmVmaXggOiBzeW1ib2wgPT09IFwiI1wiICYmIC9bYm94WF0vLnRlc3QodHlwZSkgPyBcIjBcIiArIHR5cGUudG9Mb3dlckNhc2UoKSA6IFwiXCIpLFxuICAgICAgICBzdWZmaXggPSAoc3ltYm9sID09PSBcIiRcIiA/IGN1cnJlbmN5U3VmZml4IDogL1slcF0vLnRlc3QodHlwZSkgPyBwZXJjZW50IDogXCJcIikgKyAob3B0aW9ucyAmJiBvcHRpb25zLnN1ZmZpeCAhPT0gdW5kZWZpbmVkID8gb3B0aW9ucy5zdWZmaXggOiBcIlwiKTtcblxuICAgIC8vIFdoYXQgZm9ybWF0IGZ1bmN0aW9uIHNob3VsZCB3ZSB1c2U/XG4gICAgLy8gSXMgdGhpcyBhbiBpbnRlZ2VyIHR5cGU/XG4gICAgLy8gQ2FuIHRoaXMgdHlwZSBnZW5lcmF0ZSBleHBvbmVudGlhbCBub3RhdGlvbj9cbiAgICB2YXIgZm9ybWF0VHlwZSA9IGZvcm1hdFR5cGVzW3R5cGVdLFxuICAgICAgICBtYXliZVN1ZmZpeCA9IC9bZGVmZ3BycyVdLy50ZXN0KHR5cGUpO1xuXG4gICAgLy8gU2V0IHRoZSBkZWZhdWx0IHByZWNpc2lvbiBpZiBub3Qgc3BlY2lmaWVkLFxuICAgIC8vIG9yIGNsYW1wIHRoZSBzcGVjaWZpZWQgcHJlY2lzaW9uIHRvIHRoZSBzdXBwb3J0ZWQgcmFuZ2UuXG4gICAgLy8gRm9yIHNpZ25pZmljYW50IHByZWNpc2lvbiwgaXQgbXVzdCBiZSBpbiBbMSwgMjFdLlxuICAgIC8vIEZvciBmaXhlZCBwcmVjaXNpb24sIGl0IG11c3QgYmUgaW4gWzAsIDIwXS5cbiAgICBwcmVjaXNpb24gPSBwcmVjaXNpb24gPT09IHVuZGVmaW5lZCA/IDZcbiAgICAgICAgOiAvW2dwcnNdLy50ZXN0KHR5cGUpID8gTWF0aC5tYXgoMSwgTWF0aC5taW4oMjEsIHByZWNpc2lvbikpXG4gICAgICAgIDogTWF0aC5tYXgoMCwgTWF0aC5taW4oMjAsIHByZWNpc2lvbikpO1xuXG4gICAgZnVuY3Rpb24gZm9ybWF0KHZhbHVlKSB7XG4gICAgICB2YXIgdmFsdWVQcmVmaXggPSBwcmVmaXgsXG4gICAgICAgICAgdmFsdWVTdWZmaXggPSBzdWZmaXgsXG4gICAgICAgICAgaSwgbiwgYztcblxuICAgICAgaWYgKHR5cGUgPT09IFwiY1wiKSB7XG4gICAgICAgIHZhbHVlU3VmZml4ID0gZm9ybWF0VHlwZSh2YWx1ZSkgKyB2YWx1ZVN1ZmZpeDtcbiAgICAgICAgdmFsdWUgPSBcIlwiO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFsdWUgPSArdmFsdWU7XG5cbiAgICAgICAgLy8gRGV0ZXJtaW5lIHRoZSBzaWduLiAtMCBpcyBub3QgbGVzcyB0aGFuIDAsIGJ1dCAxIC8gLTAgaXMhXG4gICAgICAgIHZhciB2YWx1ZU5lZ2F0aXZlID0gdmFsdWUgPCAwIHx8IDEgLyB2YWx1ZSA8IDA7XG5cbiAgICAgICAgLy8gUGVyZm9ybSB0aGUgaW5pdGlhbCBmb3JtYXR0aW5nLlxuICAgICAgICB2YWx1ZSA9IGlzTmFOKHZhbHVlKSA/IG5hbiA6IGZvcm1hdFR5cGUoTWF0aC5hYnModmFsdWUpLCBwcmVjaXNpb24pO1xuXG4gICAgICAgIC8vIFRyaW0gaW5zaWduaWZpY2FudCB6ZXJvcy5cbiAgICAgICAgaWYgKHRyaW0pIHZhbHVlID0gZm9ybWF0VHJpbSh2YWx1ZSk7XG5cbiAgICAgICAgLy8gSWYgYSBuZWdhdGl2ZSB2YWx1ZSByb3VuZHMgdG8gemVybyBhZnRlciBmb3JtYXR0aW5nLCBhbmQgbm8gZXhwbGljaXQgcG9zaXRpdmUgc2lnbiBpcyByZXF1ZXN0ZWQsIGhpZGUgdGhlIHNpZ24uXG4gICAgICAgIGlmICh2YWx1ZU5lZ2F0aXZlICYmICt2YWx1ZSA9PT0gMCAmJiBzaWduICE9PSBcIitcIikgdmFsdWVOZWdhdGl2ZSA9IGZhbHNlO1xuXG4gICAgICAgIC8vIENvbXB1dGUgdGhlIHByZWZpeCBhbmQgc3VmZml4LlxuICAgICAgICB2YWx1ZVByZWZpeCA9ICh2YWx1ZU5lZ2F0aXZlID8gKHNpZ24gPT09IFwiKFwiID8gc2lnbiA6IG1pbnVzKSA6IHNpZ24gPT09IFwiLVwiIHx8IHNpZ24gPT09IFwiKFwiID8gXCJcIiA6IHNpZ24pICsgdmFsdWVQcmVmaXg7XG4gICAgICAgIHZhbHVlU3VmZml4ID0gKHR5cGUgPT09IFwic1wiICYmICFpc05hTih2YWx1ZSkgJiYgcHJlZml4RXhwb25lbnQgIT09IHVuZGVmaW5lZCA/IHByZWZpeGVzWzggKyBwcmVmaXhFeHBvbmVudCAvIDNdIDogXCJcIikgKyB2YWx1ZVN1ZmZpeCArICh2YWx1ZU5lZ2F0aXZlICYmIHNpZ24gPT09IFwiKFwiID8gXCIpXCIgOiBcIlwiKTtcblxuICAgICAgICAvLyBCcmVhayB0aGUgZm9ybWF0dGVkIHZhbHVlIGludG8gdGhlIGludGVnZXIg4oCcdmFsdWXigJ0gcGFydCB0aGF0IGNhbiBiZVxuICAgICAgICAvLyBncm91cGVkLCBhbmQgZnJhY3Rpb25hbCBvciBleHBvbmVudGlhbCDigJxzdWZmaXjigJ0gcGFydCB0aGF0IGlzIG5vdC5cbiAgICAgICAgaWYgKG1heWJlU3VmZml4KSB7XG4gICAgICAgICAgaSA9IC0xLCBuID0gdmFsdWUubGVuZ3RoO1xuICAgICAgICAgIHdoaWxlICgrK2kgPCBuKSB7XG4gICAgICAgICAgICBpZiAoYyA9IHZhbHVlLmNoYXJDb2RlQXQoaSksIDQ4ID4gYyB8fCBjID4gNTcpIHtcbiAgICAgICAgICAgICAgdmFsdWVTdWZmaXggPSAoYyA9PT0gNDYgPyBkZWNpbWFsICsgdmFsdWUuc2xpY2UoaSArIDEpIDogdmFsdWUuc2xpY2UoaSkpICsgdmFsdWVTdWZmaXg7XG4gICAgICAgICAgICAgIHZhbHVlID0gdmFsdWUuc2xpY2UoMCwgaSk7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBJZiB0aGUgZmlsbCBjaGFyYWN0ZXIgaXMgbm90IFwiMFwiLCBncm91cGluZyBpcyBhcHBsaWVkIGJlZm9yZSBwYWRkaW5nLlxuICAgICAgaWYgKGNvbW1hICYmICF6ZXJvKSB2YWx1ZSA9IGdyb3VwKHZhbHVlLCBJbmZpbml0eSk7XG5cbiAgICAgIC8vIENvbXB1dGUgdGhlIHBhZGRpbmcuXG4gICAgICB2YXIgbGVuZ3RoID0gdmFsdWVQcmVmaXgubGVuZ3RoICsgdmFsdWUubGVuZ3RoICsgdmFsdWVTdWZmaXgubGVuZ3RoLFxuICAgICAgICAgIHBhZGRpbmcgPSBsZW5ndGggPCB3aWR0aCA/IG5ldyBBcnJheSh3aWR0aCAtIGxlbmd0aCArIDEpLmpvaW4oZmlsbCkgOiBcIlwiO1xuXG4gICAgICAvLyBJZiB0aGUgZmlsbCBjaGFyYWN0ZXIgaXMgXCIwXCIsIGdyb3VwaW5nIGlzIGFwcGxpZWQgYWZ0ZXIgcGFkZGluZy5cbiAgICAgIGlmIChjb21tYSAmJiB6ZXJvKSB2YWx1ZSA9IGdyb3VwKHBhZGRpbmcgKyB2YWx1ZSwgcGFkZGluZy5sZW5ndGggPyB3aWR0aCAtIHZhbHVlU3VmZml4Lmxlbmd0aCA6IEluZmluaXR5KSwgcGFkZGluZyA9IFwiXCI7XG5cbiAgICAgIC8vIFJlY29uc3RydWN0IHRoZSBmaW5hbCBvdXRwdXQgYmFzZWQgb24gdGhlIGRlc2lyZWQgYWxpZ25tZW50LlxuICAgICAgc3dpdGNoIChhbGlnbikge1xuICAgICAgICBjYXNlIFwiPFwiOiB2YWx1ZSA9IHZhbHVlUHJlZml4ICsgdmFsdWUgKyB2YWx1ZVN1ZmZpeCArIHBhZGRpbmc7IGJyZWFrO1xuICAgICAgICBjYXNlIFwiPVwiOiB2YWx1ZSA9IHZhbHVlUHJlZml4ICsgcGFkZGluZyArIHZhbHVlICsgdmFsdWVTdWZmaXg7IGJyZWFrO1xuICAgICAgICBjYXNlIFwiXlwiOiB2YWx1ZSA9IHBhZGRpbmcuc2xpY2UoMCwgbGVuZ3RoID0gcGFkZGluZy5sZW5ndGggPj4gMSkgKyB2YWx1ZVByZWZpeCArIHZhbHVlICsgdmFsdWVTdWZmaXggKyBwYWRkaW5nLnNsaWNlKGxlbmd0aCk7IGJyZWFrO1xuICAgICAgICBkZWZhdWx0OiB2YWx1ZSA9IHBhZGRpbmcgKyB2YWx1ZVByZWZpeCArIHZhbHVlICsgdmFsdWVTdWZmaXg7IGJyZWFrO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gbnVtZXJhbHModmFsdWUpO1xuICAgIH1cblxuICAgIGZvcm1hdC50b1N0cmluZyA9IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIHNwZWNpZmllciArIFwiXCI7XG4gICAgfTtcblxuICAgIHJldHVybiBmb3JtYXQ7XG4gIH1cblxuICBmdW5jdGlvbiBmb3JtYXRQcmVmaXgoc3BlY2lmaWVyLCB2YWx1ZSkge1xuICAgIHZhciBlID0gTWF0aC5tYXgoLTgsIE1hdGgubWluKDgsIE1hdGguZmxvb3IoZXhwb25lbnQodmFsdWUpIC8gMykpKSAqIDMsXG4gICAgICAgIGsgPSBNYXRoLnBvdygxMCwgLWUpLFxuICAgICAgICBmID0gbmV3Rm9ybWF0KChzcGVjaWZpZXIgPSBmb3JtYXRTcGVjaWZpZXIoc3BlY2lmaWVyKSwgc3BlY2lmaWVyLnR5cGUgPSBcImZcIiwgc3BlY2lmaWVyKSwge3N1ZmZpeDogcHJlZml4ZXNbOCArIGUgLyAzXX0pO1xuICAgIHJldHVybiBmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgcmV0dXJuIGYoayAqIHZhbHVlKTtcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBmb3JtYXQ6IG5ld0Zvcm1hdCxcbiAgICBmb3JtYXRQcmVmaXg6IGZvcm1hdFByZWZpeFxuICB9O1xufVxuIiwiaW1wb3J0IGZvcm1hdExvY2FsZSBmcm9tIFwiLi9sb2NhbGUuanNcIjtcblxudmFyIGxvY2FsZTtcbmV4cG9ydCB2YXIgZm9ybWF0O1xuZXhwb3J0IHZhciBmb3JtYXRQcmVmaXg7XG5cbmRlZmF1bHRMb2NhbGUoe1xuICB0aG91c2FuZHM6IFwiLFwiLFxuICBncm91cGluZzogWzNdLFxuICBjdXJyZW5jeTogW1wiJFwiLCBcIlwiXVxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGRlZmF1bHRMb2NhbGUoZGVmaW5pdGlvbikge1xuICBsb2NhbGUgPSBmb3JtYXRMb2NhbGUoZGVmaW5pdGlvbik7XG4gIGZvcm1hdCA9IGxvY2FsZS5mb3JtYXQ7XG4gIGZvcm1hdFByZWZpeCA9IGxvY2FsZS5mb3JtYXRQcmVmaXg7XG4gIHJldHVybiBsb2NhbGU7XG59XG4iLCJpbXBvcnQgZXhwb25lbnQgZnJvbSBcIi4vZXhwb25lbnQuanNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oc3RlcCkge1xuICByZXR1cm4gTWF0aC5tYXgoMCwgLWV4cG9uZW50KE1hdGguYWJzKHN0ZXApKSk7XG59XG4iLCJpbXBvcnQgZXhwb25lbnQgZnJvbSBcIi4vZXhwb25lbnQuanNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oc3RlcCwgdmFsdWUpIHtcbiAgcmV0dXJuIE1hdGgubWF4KDAsIE1hdGgubWF4KC04LCBNYXRoLm1pbig4LCBNYXRoLmZsb29yKGV4cG9uZW50KHZhbHVlKSAvIDMpKSkgKiAzIC0gZXhwb25lbnQoTWF0aC5hYnMoc3RlcCkpKTtcbn1cbiIsImltcG9ydCBleHBvbmVudCBmcm9tIFwiLi9leHBvbmVudC5qc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihzdGVwLCBtYXgpIHtcbiAgc3RlcCA9IE1hdGguYWJzKHN0ZXApLCBtYXggPSBNYXRoLmFicyhtYXgpIC0gc3RlcDtcbiAgcmV0dXJuIE1hdGgubWF4KDAsIGV4cG9uZW50KG1heCkgLSBleHBvbmVudChzdGVwKSkgKyAxO1xufVxuIiwiZXhwb3J0IGZ1bmN0aW9uIGluaXRSYW5nZShkb21haW4sIHJhbmdlKSB7XG4gIHN3aXRjaCAoYXJndW1lbnRzLmxlbmd0aCkge1xuICAgIGNhc2UgMDogYnJlYWs7XG4gICAgY2FzZSAxOiB0aGlzLnJhbmdlKGRvbWFpbik7IGJyZWFrO1xuICAgIGRlZmF1bHQ6IHRoaXMucmFuZ2UocmFuZ2UpLmRvbWFpbihkb21haW4pOyBicmVhaztcbiAgfVxuICByZXR1cm4gdGhpcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGluaXRJbnRlcnBvbGF0b3IoZG9tYWluLCBpbnRlcnBvbGF0b3IpIHtcbiAgc3dpdGNoIChhcmd1bWVudHMubGVuZ3RoKSB7XG4gICAgY2FzZSAwOiBicmVhaztcbiAgICBjYXNlIDE6IHtcbiAgICAgIGlmICh0eXBlb2YgZG9tYWluID09PSBcImZ1bmN0aW9uXCIpIHRoaXMuaW50ZXJwb2xhdG9yKGRvbWFpbik7XG4gICAgICBlbHNlIHRoaXMucmFuZ2UoZG9tYWluKTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgICBkZWZhdWx0OiB7XG4gICAgICB0aGlzLmRvbWFpbihkb21haW4pO1xuICAgICAgaWYgKHR5cGVvZiBpbnRlcnBvbGF0b3IgPT09IFwiZnVuY3Rpb25cIikgdGhpcy5pbnRlcnBvbGF0b3IoaW50ZXJwb2xhdG9yKTtcbiAgICAgIGVsc2UgdGhpcy5yYW5nZShpbnRlcnBvbGF0b3IpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiB0aGlzO1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY29uc3RhbnRzKHgpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB4O1xuICB9O1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbnVtYmVyKHgpIHtcbiAgcmV0dXJuICt4O1xufVxuIiwiaW1wb3J0IHtiaXNlY3R9IGZyb20gXCJkMy1hcnJheVwiO1xuaW1wb3J0IHtpbnRlcnBvbGF0ZSBhcyBpbnRlcnBvbGF0ZVZhbHVlLCBpbnRlcnBvbGF0ZU51bWJlciwgaW50ZXJwb2xhdGVSb3VuZH0gZnJvbSBcImQzLWludGVycG9sYXRlXCI7XG5pbXBvcnQgY29uc3RhbnQgZnJvbSBcIi4vY29uc3RhbnQuanNcIjtcbmltcG9ydCBudW1iZXIgZnJvbSBcIi4vbnVtYmVyLmpzXCI7XG5cbnZhciB1bml0ID0gWzAsIDFdO1xuXG5leHBvcnQgZnVuY3Rpb24gaWRlbnRpdHkoeCkge1xuICByZXR1cm4geDtcbn1cblxuZnVuY3Rpb24gbm9ybWFsaXplKGEsIGIpIHtcbiAgcmV0dXJuIChiIC09IChhID0gK2EpKVxuICAgICAgPyBmdW5jdGlvbih4KSB7IHJldHVybiAoeCAtIGEpIC8gYjsgfVxuICAgICAgOiBjb25zdGFudChpc05hTihiKSA/IE5hTiA6IDAuNSk7XG59XG5cbmZ1bmN0aW9uIGNsYW1wZXIoYSwgYikge1xuICB2YXIgdDtcbiAgaWYgKGEgPiBiKSB0ID0gYSwgYSA9IGIsIGIgPSB0O1xuICByZXR1cm4gZnVuY3Rpb24oeCkgeyByZXR1cm4gTWF0aC5tYXgoYSwgTWF0aC5taW4oYiwgeCkpOyB9O1xufVxuXG4vLyBub3JtYWxpemUoYSwgYikoeCkgdGFrZXMgYSBkb21haW4gdmFsdWUgeCBpbiBbYSxiXSBhbmQgcmV0dXJucyB0aGUgY29ycmVzcG9uZGluZyBwYXJhbWV0ZXIgdCBpbiBbMCwxXS5cbi8vIGludGVycG9sYXRlKGEsIGIpKHQpIHRha2VzIGEgcGFyYW1ldGVyIHQgaW4gWzAsMV0gYW5kIHJldHVybnMgdGhlIGNvcnJlc3BvbmRpbmcgcmFuZ2UgdmFsdWUgeCBpbiBbYSxiXS5cbmZ1bmN0aW9uIGJpbWFwKGRvbWFpbiwgcmFuZ2UsIGludGVycG9sYXRlKSB7XG4gIHZhciBkMCA9IGRvbWFpblswXSwgZDEgPSBkb21haW5bMV0sIHIwID0gcmFuZ2VbMF0sIHIxID0gcmFuZ2VbMV07XG4gIGlmIChkMSA8IGQwKSBkMCA9IG5vcm1hbGl6ZShkMSwgZDApLCByMCA9IGludGVycG9sYXRlKHIxLCByMCk7XG4gIGVsc2UgZDAgPSBub3JtYWxpemUoZDAsIGQxKSwgcjAgPSBpbnRlcnBvbGF0ZShyMCwgcjEpO1xuICByZXR1cm4gZnVuY3Rpb24oeCkgeyByZXR1cm4gcjAoZDAoeCkpOyB9O1xufVxuXG5mdW5jdGlvbiBwb2x5bWFwKGRvbWFpbiwgcmFuZ2UsIGludGVycG9sYXRlKSB7XG4gIHZhciBqID0gTWF0aC5taW4oZG9tYWluLmxlbmd0aCwgcmFuZ2UubGVuZ3RoKSAtIDEsXG4gICAgICBkID0gbmV3IEFycmF5KGopLFxuICAgICAgciA9IG5ldyBBcnJheShqKSxcbiAgICAgIGkgPSAtMTtcblxuICAvLyBSZXZlcnNlIGRlc2NlbmRpbmcgZG9tYWlucy5cbiAgaWYgKGRvbWFpbltqXSA8IGRvbWFpblswXSkge1xuICAgIGRvbWFpbiA9IGRvbWFpbi5zbGljZSgpLnJldmVyc2UoKTtcbiAgICByYW5nZSA9IHJhbmdlLnNsaWNlKCkucmV2ZXJzZSgpO1xuICB9XG5cbiAgd2hpbGUgKCsraSA8IGopIHtcbiAgICBkW2ldID0gbm9ybWFsaXplKGRvbWFpbltpXSwgZG9tYWluW2kgKyAxXSk7XG4gICAgcltpXSA9IGludGVycG9sYXRlKHJhbmdlW2ldLCByYW5nZVtpICsgMV0pO1xuICB9XG5cbiAgcmV0dXJuIGZ1bmN0aW9uKHgpIHtcbiAgICB2YXIgaSA9IGJpc2VjdChkb21haW4sIHgsIDEsIGopIC0gMTtcbiAgICByZXR1cm4gcltpXShkW2ldKHgpKTtcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvcHkoc291cmNlLCB0YXJnZXQpIHtcbiAgcmV0dXJuIHRhcmdldFxuICAgICAgLmRvbWFpbihzb3VyY2UuZG9tYWluKCkpXG4gICAgICAucmFuZ2Uoc291cmNlLnJhbmdlKCkpXG4gICAgICAuaW50ZXJwb2xhdGUoc291cmNlLmludGVycG9sYXRlKCkpXG4gICAgICAuY2xhbXAoc291cmNlLmNsYW1wKCkpXG4gICAgICAudW5rbm93bihzb3VyY2UudW5rbm93bigpKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRyYW5zZm9ybWVyKCkge1xuICB2YXIgZG9tYWluID0gdW5pdCxcbiAgICAgIHJhbmdlID0gdW5pdCxcbiAgICAgIGludGVycG9sYXRlID0gaW50ZXJwb2xhdGVWYWx1ZSxcbiAgICAgIHRyYW5zZm9ybSxcbiAgICAgIHVudHJhbnNmb3JtLFxuICAgICAgdW5rbm93bixcbiAgICAgIGNsYW1wID0gaWRlbnRpdHksXG4gICAgICBwaWVjZXdpc2UsXG4gICAgICBvdXRwdXQsXG4gICAgICBpbnB1dDtcblxuICBmdW5jdGlvbiByZXNjYWxlKCkge1xuICAgIHZhciBuID0gTWF0aC5taW4oZG9tYWluLmxlbmd0aCwgcmFuZ2UubGVuZ3RoKTtcbiAgICBpZiAoY2xhbXAgIT09IGlkZW50aXR5KSBjbGFtcCA9IGNsYW1wZXIoZG9tYWluWzBdLCBkb21haW5bbiAtIDFdKTtcbiAgICBwaWVjZXdpc2UgPSBuID4gMiA/IHBvbHltYXAgOiBiaW1hcDtcbiAgICBvdXRwdXQgPSBpbnB1dCA9IG51bGw7XG4gICAgcmV0dXJuIHNjYWxlO1xuICB9XG5cbiAgZnVuY3Rpb24gc2NhbGUoeCkge1xuICAgIHJldHVybiB4ID09IG51bGwgfHwgaXNOYU4oeCA9ICt4KSA/IHVua25vd24gOiAob3V0cHV0IHx8IChvdXRwdXQgPSBwaWVjZXdpc2UoZG9tYWluLm1hcCh0cmFuc2Zvcm0pLCByYW5nZSwgaW50ZXJwb2xhdGUpKSkodHJhbnNmb3JtKGNsYW1wKHgpKSk7XG4gIH1cblxuICBzY2FsZS5pbnZlcnQgPSBmdW5jdGlvbih5KSB7XG4gICAgcmV0dXJuIGNsYW1wKHVudHJhbnNmb3JtKChpbnB1dCB8fCAoaW5wdXQgPSBwaWVjZXdpc2UocmFuZ2UsIGRvbWFpbi5tYXAodHJhbnNmb3JtKSwgaW50ZXJwb2xhdGVOdW1iZXIpKSkoeSkpKTtcbiAgfTtcblxuICBzY2FsZS5kb21haW4gPSBmdW5jdGlvbihfKSB7XG4gICAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPyAoZG9tYWluID0gQXJyYXkuZnJvbShfLCBudW1iZXIpLCByZXNjYWxlKCkpIDogZG9tYWluLnNsaWNlKCk7XG4gIH07XG5cbiAgc2NhbGUucmFuZ2UgPSBmdW5jdGlvbihfKSB7XG4gICAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPyAocmFuZ2UgPSBBcnJheS5mcm9tKF8pLCByZXNjYWxlKCkpIDogcmFuZ2Uuc2xpY2UoKTtcbiAgfTtcblxuICBzY2FsZS5yYW5nZVJvdW5kID0gZnVuY3Rpb24oXykge1xuICAgIHJldHVybiByYW5nZSA9IEFycmF5LmZyb20oXyksIGludGVycG9sYXRlID0gaW50ZXJwb2xhdGVSb3VuZCwgcmVzY2FsZSgpO1xuICB9O1xuXG4gIHNjYWxlLmNsYW1wID0gZnVuY3Rpb24oXykge1xuICAgIHJldHVybiBhcmd1bWVudHMubGVuZ3RoID8gKGNsYW1wID0gXyA/IHRydWUgOiBpZGVudGl0eSwgcmVzY2FsZSgpKSA6IGNsYW1wICE9PSBpZGVudGl0eTtcbiAgfTtcblxuICBzY2FsZS5pbnRlcnBvbGF0ZSA9IGZ1bmN0aW9uKF8pIHtcbiAgICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA/IChpbnRlcnBvbGF0ZSA9IF8sIHJlc2NhbGUoKSkgOiBpbnRlcnBvbGF0ZTtcbiAgfTtcblxuICBzY2FsZS51bmtub3duID0gZnVuY3Rpb24oXykge1xuICAgIHJldHVybiBhcmd1bWVudHMubGVuZ3RoID8gKHVua25vd24gPSBfLCBzY2FsZSkgOiB1bmtub3duO1xuICB9O1xuXG4gIHJldHVybiBmdW5jdGlvbih0LCB1KSB7XG4gICAgdHJhbnNmb3JtID0gdCwgdW50cmFuc2Zvcm0gPSB1O1xuICAgIHJldHVybiByZXNjYWxlKCk7XG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNvbnRpbnVvdXMoKSB7XG4gIHJldHVybiB0cmFuc2Zvcm1lcigpKGlkZW50aXR5LCBpZGVudGl0eSk7XG59XG4iLCJpbXBvcnQge3RpY2tTdGVwfSBmcm9tIFwiZDMtYXJyYXlcIjtcbmltcG9ydCB7Zm9ybWF0LCBmb3JtYXRQcmVmaXgsIGZvcm1hdFNwZWNpZmllciwgcHJlY2lzaW9uRml4ZWQsIHByZWNpc2lvblByZWZpeCwgcHJlY2lzaW9uUm91bmR9IGZyb20gXCJkMy1mb3JtYXRcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdGlja0Zvcm1hdChzdGFydCwgc3RvcCwgY291bnQsIHNwZWNpZmllcikge1xuICB2YXIgc3RlcCA9IHRpY2tTdGVwKHN0YXJ0LCBzdG9wLCBjb3VudCksXG4gICAgICBwcmVjaXNpb247XG4gIHNwZWNpZmllciA9IGZvcm1hdFNwZWNpZmllcihzcGVjaWZpZXIgPT0gbnVsbCA/IFwiLGZcIiA6IHNwZWNpZmllcik7XG4gIHN3aXRjaCAoc3BlY2lmaWVyLnR5cGUpIHtcbiAgICBjYXNlIFwic1wiOiB7XG4gICAgICB2YXIgdmFsdWUgPSBNYXRoLm1heChNYXRoLmFicyhzdGFydCksIE1hdGguYWJzKHN0b3ApKTtcbiAgICAgIGlmIChzcGVjaWZpZXIucHJlY2lzaW9uID09IG51bGwgJiYgIWlzTmFOKHByZWNpc2lvbiA9IHByZWNpc2lvblByZWZpeChzdGVwLCB2YWx1ZSkpKSBzcGVjaWZpZXIucHJlY2lzaW9uID0gcHJlY2lzaW9uO1xuICAgICAgcmV0dXJuIGZvcm1hdFByZWZpeChzcGVjaWZpZXIsIHZhbHVlKTtcbiAgICB9XG4gICAgY2FzZSBcIlwiOlxuICAgIGNhc2UgXCJlXCI6XG4gICAgY2FzZSBcImdcIjpcbiAgICBjYXNlIFwicFwiOlxuICAgIGNhc2UgXCJyXCI6IHtcbiAgICAgIGlmIChzcGVjaWZpZXIucHJlY2lzaW9uID09IG51bGwgJiYgIWlzTmFOKHByZWNpc2lvbiA9IHByZWNpc2lvblJvdW5kKHN0ZXAsIE1hdGgubWF4KE1hdGguYWJzKHN0YXJ0KSwgTWF0aC5hYnMoc3RvcCkpKSkpIHNwZWNpZmllci5wcmVjaXNpb24gPSBwcmVjaXNpb24gLSAoc3BlY2lmaWVyLnR5cGUgPT09IFwiZVwiKTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgICBjYXNlIFwiZlwiOlxuICAgIGNhc2UgXCIlXCI6IHtcbiAgICAgIGlmIChzcGVjaWZpZXIucHJlY2lzaW9uID09IG51bGwgJiYgIWlzTmFOKHByZWNpc2lvbiA9IHByZWNpc2lvbkZpeGVkKHN0ZXApKSkgc3BlY2lmaWVyLnByZWNpc2lvbiA9IHByZWNpc2lvbiAtIChzcGVjaWZpZXIudHlwZSA9PT0gXCIlXCIpICogMjtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gZm9ybWF0KHNwZWNpZmllcik7XG59XG4iLCJpbXBvcnQge3RpY2tzLCB0aWNrSW5jcmVtZW50fSBmcm9tIFwiZDMtYXJyYXlcIjtcbmltcG9ydCBjb250aW51b3VzLCB7Y29weX0gZnJvbSBcIi4vY29udGludW91cy5qc1wiO1xuaW1wb3J0IHtpbml0UmFuZ2V9IGZyb20gXCIuL2luaXQuanNcIjtcbmltcG9ydCB0aWNrRm9ybWF0IGZyb20gXCIuL3RpY2tGb3JtYXQuanNcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGxpbmVhcmlzaChzY2FsZSkge1xuICB2YXIgZG9tYWluID0gc2NhbGUuZG9tYWluO1xuXG4gIHNjYWxlLnRpY2tzID0gZnVuY3Rpb24oY291bnQpIHtcbiAgICB2YXIgZCA9IGRvbWFpbigpO1xuICAgIHJldHVybiB0aWNrcyhkWzBdLCBkW2QubGVuZ3RoIC0gMV0sIGNvdW50ID09IG51bGwgPyAxMCA6IGNvdW50KTtcbiAgfTtcblxuICBzY2FsZS50aWNrRm9ybWF0ID0gZnVuY3Rpb24oY291bnQsIHNwZWNpZmllcikge1xuICAgIHZhciBkID0gZG9tYWluKCk7XG4gICAgcmV0dXJuIHRpY2tGb3JtYXQoZFswXSwgZFtkLmxlbmd0aCAtIDFdLCBjb3VudCA9PSBudWxsID8gMTAgOiBjb3VudCwgc3BlY2lmaWVyKTtcbiAgfTtcblxuICBzY2FsZS5uaWNlID0gZnVuY3Rpb24oY291bnQpIHtcbiAgICBpZiAoY291bnQgPT0gbnVsbCkgY291bnQgPSAxMDtcblxuICAgIHZhciBkID0gZG9tYWluKCk7XG4gICAgdmFyIGkwID0gMDtcbiAgICB2YXIgaTEgPSBkLmxlbmd0aCAtIDE7XG4gICAgdmFyIHN0YXJ0ID0gZFtpMF07XG4gICAgdmFyIHN0b3AgPSBkW2kxXTtcbiAgICB2YXIgcHJlc3RlcDtcbiAgICB2YXIgc3RlcDtcbiAgICB2YXIgbWF4SXRlciA9IDEwO1xuXG4gICAgaWYgKHN0b3AgPCBzdGFydCkge1xuICAgICAgc3RlcCA9IHN0YXJ0LCBzdGFydCA9IHN0b3AsIHN0b3AgPSBzdGVwO1xuICAgICAgc3RlcCA9IGkwLCBpMCA9IGkxLCBpMSA9IHN0ZXA7XG4gICAgfVxuICAgIFxuICAgIHdoaWxlIChtYXhJdGVyLS0gPiAwKSB7XG4gICAgICBzdGVwID0gdGlja0luY3JlbWVudChzdGFydCwgc3RvcCwgY291bnQpO1xuICAgICAgaWYgKHN0ZXAgPT09IHByZXN0ZXApIHtcbiAgICAgICAgZFtpMF0gPSBzdGFydFxuICAgICAgICBkW2kxXSA9IHN0b3BcbiAgICAgICAgcmV0dXJuIGRvbWFpbihkKTtcbiAgICAgIH0gZWxzZSBpZiAoc3RlcCA+IDApIHtcbiAgICAgICAgc3RhcnQgPSBNYXRoLmZsb29yKHN0YXJ0IC8gc3RlcCkgKiBzdGVwO1xuICAgICAgICBzdG9wID0gTWF0aC5jZWlsKHN0b3AgLyBzdGVwKSAqIHN0ZXA7XG4gICAgICB9IGVsc2UgaWYgKHN0ZXAgPCAwKSB7XG4gICAgICAgIHN0YXJ0ID0gTWF0aC5jZWlsKHN0YXJ0ICogc3RlcCkgLyBzdGVwO1xuICAgICAgICBzdG9wID0gTWF0aC5mbG9vcihzdG9wICogc3RlcCkgLyBzdGVwO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBwcmVzdGVwID0gc3RlcDtcbiAgICB9XG5cbiAgICByZXR1cm4gc2NhbGU7XG4gIH07XG5cbiAgcmV0dXJuIHNjYWxlO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBsaW5lYXIoKSB7XG4gIHZhciBzY2FsZSA9IGNvbnRpbnVvdXMoKTtcblxuICBzY2FsZS5jb3B5ID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIGNvcHkoc2NhbGUsIGxpbmVhcigpKTtcbiAgfTtcblxuICBpbml0UmFuZ2UuYXBwbHkoc2NhbGUsIGFyZ3VtZW50cyk7XG5cbiAgcmV0dXJuIGxpbmVhcmlzaChzY2FsZSk7XG59XG4iLCJleHBvcnQgZnVuY3Rpb24gVHJhbnNmb3JtKGssIHgsIHkpIHtcbiAgdGhpcy5rID0gaztcbiAgdGhpcy54ID0geDtcbiAgdGhpcy55ID0geTtcbn1cblxuVHJhbnNmb3JtLnByb3RvdHlwZSA9IHtcbiAgY29uc3RydWN0b3I6IFRyYW5zZm9ybSxcbiAgc2NhbGU6IGZ1bmN0aW9uKGspIHtcbiAgICByZXR1cm4gayA9PT0gMSA/IHRoaXMgOiBuZXcgVHJhbnNmb3JtKHRoaXMuayAqIGssIHRoaXMueCwgdGhpcy55KTtcbiAgfSxcbiAgdHJhbnNsYXRlOiBmdW5jdGlvbih4LCB5KSB7XG4gICAgcmV0dXJuIHggPT09IDAgJiB5ID09PSAwID8gdGhpcyA6IG5ldyBUcmFuc2Zvcm0odGhpcy5rLCB0aGlzLnggKyB0aGlzLmsgKiB4LCB0aGlzLnkgKyB0aGlzLmsgKiB5KTtcbiAgfSxcbiAgYXBwbHk6IGZ1bmN0aW9uKHBvaW50KSB7XG4gICAgcmV0dXJuIFtwb2ludFswXSAqIHRoaXMuayArIHRoaXMueCwgcG9pbnRbMV0gKiB0aGlzLmsgKyB0aGlzLnldO1xuICB9LFxuICBhcHBseVg6IGZ1bmN0aW9uKHgpIHtcbiAgICByZXR1cm4geCAqIHRoaXMuayArIHRoaXMueDtcbiAgfSxcbiAgYXBwbHlZOiBmdW5jdGlvbih5KSB7XG4gICAgcmV0dXJuIHkgKiB0aGlzLmsgKyB0aGlzLnk7XG4gIH0sXG4gIGludmVydDogZnVuY3Rpb24obG9jYXRpb24pIHtcbiAgICByZXR1cm4gWyhsb2NhdGlvblswXSAtIHRoaXMueCkgLyB0aGlzLmssIChsb2NhdGlvblsxXSAtIHRoaXMueSkgLyB0aGlzLmtdO1xuICB9LFxuICBpbnZlcnRYOiBmdW5jdGlvbih4KSB7XG4gICAgcmV0dXJuICh4IC0gdGhpcy54KSAvIHRoaXMuaztcbiAgfSxcbiAgaW52ZXJ0WTogZnVuY3Rpb24oeSkge1xuICAgIHJldHVybiAoeSAtIHRoaXMueSkgLyB0aGlzLms7XG4gIH0sXG4gIHJlc2NhbGVYOiBmdW5jdGlvbih4KSB7XG4gICAgcmV0dXJuIHguY29weSgpLmRvbWFpbih4LnJhbmdlKCkubWFwKHRoaXMuaW52ZXJ0WCwgdGhpcykubWFwKHguaW52ZXJ0LCB4KSk7XG4gIH0sXG4gIHJlc2NhbGVZOiBmdW5jdGlvbih5KSB7XG4gICAgcmV0dXJuIHkuY29weSgpLmRvbWFpbih5LnJhbmdlKCkubWFwKHRoaXMuaW52ZXJ0WSwgdGhpcykubWFwKHkuaW52ZXJ0LCB5KSk7XG4gIH0sXG4gIHRvU3RyaW5nOiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gXCJ0cmFuc2xhdGUoXCIgKyB0aGlzLnggKyBcIixcIiArIHRoaXMueSArIFwiKSBzY2FsZShcIiArIHRoaXMuayArIFwiKVwiO1xuICB9XG59O1xuXG5leHBvcnQgdmFyIGlkZW50aXR5ID0gbmV3IFRyYW5zZm9ybSgxLCAwLCAwKTtcblxudHJhbnNmb3JtLnByb3RvdHlwZSA9IFRyYW5zZm9ybS5wcm90b3R5cGU7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRyYW5zZm9ybShub2RlKSB7XG4gIHdoaWxlICghbm9kZS5fX3pvb20pIGlmICghKG5vZGUgPSBub2RlLnBhcmVudE5vZGUpKSByZXR1cm4gaWRlbnRpdHk7XG4gIHJldHVybiBub2RlLl9fem9vbTtcbn1cbiIsIjx0ZW1wbGF0ZT5cclxuICA8ZGl2PlxyXG4gICAgPHAgY2xhc3M9XCJkZXNjcmlwdGlvbiBkLWlubGluZS1ibG9ja1wiPnt7IHQoJ2ludGVydmFsc0NoYXJ0Lm1lc3NhZ2UnKSB9fTwvcD5cclxuICAgIDxkaXYgY2xhc3M9XCJkLWlubGluZS1ibG9jayBtci0xMCBtbC0xMFwiPlxyXG4gICAgICA8c2VsZWN0IGNsYXNzPVwib3B0aW9uXCIgdi1tb2RlbD1cIm1pblZhbHVlXCIgQGNoYW5nZT1cInJlZnJlc2hDaGFydCgpXCI+XHJcbiAgICAgICAgPG9wdGlvbiA6dmFsdWU9XCJNaW5WYWx1ZS5TZWNvbmRzXzEwXCI+MTAge3sgdCgnc2VjLm1lc3NhZ2UnKSB9fTwvb3B0aW9uPlxyXG4gICAgICAgIDxvcHRpb24gOnZhbHVlPVwiTWluVmFsdWUuTWluXzFcIj4xIHt7IHQoJ21pbi5tZXNzYWdlJykgfX08L29wdGlvbj5cclxuICAgICAgICA8b3B0aW9uIDp2YWx1ZT1cIk1pblZhbHVlLk1pbl81XCI+NSB7eyB0KCcybWluLm1lc3NhZ2UnKSB9fTwvb3B0aW9uPlxyXG4gICAgICAgIDxvcHRpb24gOnZhbHVlPVwiTWluVmFsdWUuTWluXzEwXCI+MTAge3sgdCgnbWlucy5tZXNzYWdlJykgfX08L29wdGlvbj5cclxuICAgICAgPC9zZWxlY3Q+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxwIGNsYXNzPVwiZGVzY3JpcHRpb24gZC1pbmxpbmUtYmxvY2tcIj57eyB0KCdpbnRlcnZhbHNDaGFydC5kZXNjcmlwdGlvbicpIH19PC9wPlxyXG4gIDwvZGl2PlxyXG4gIDxkaXYgcmVmPVwiY2hhcnRcIiBpZD1cInRpbWVJbnRlcnZhbENoYXJ0RDNcIj48L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQgbGFuZz1cInRzXCI+XHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICBuYW1lOiAnVGltZUludGVydmFsQ2hhcnQnLFxyXG59O1xyXG48L3NjcmlwdD5cclxuXHJcbjxzY3JpcHQgbGFuZz1cInRzXCIgc2V0dXA+XHJcbmltcG9ydCB7IG9uTW91bnRlZCwgcmVmIH0gZnJvbSAndnVlJztcclxuaW1wb3J0IHsgaW5qZWN0U3RvcmFnZSB9IGZyb20gJy4uL3N0b3JhZ2UvaW5qZWN0LXN0b3JhZ2UnO1xyXG5pbXBvcnQge1xyXG4gIERBUktfTU9ERV9ERUZBVUxULFxyXG4gIFN0b3JhZ2VEZXNlcmlhbGl6ZVBhcmFtLFxyXG4gIFN0b3JhZ2VQYXJhbXMsXHJcbn0gZnJvbSAnLi4vc3RvcmFnZS9zdG9yYWdlLXBhcmFtcyc7XHJcbmltcG9ydCB7IFRpbWVJbnRlcnZhbCB9IGZyb20gJy4uL2VudGl0eS90aW1lLWludGVydmFsJztcclxuaW1wb3J0IHsgdG9kYXlMb2NhbERhdGUgfSBmcm9tICcuLi91dGlscy9kYXRlJztcclxuaW1wb3J0IHsgdXNlSTE4biB9IGZyb20gJ3Z1ZS1pMThuJztcclxuaW1wb3J0ICogYXMgZDMgZnJvbSAnZDMnO1xyXG5pbXBvcnQgeyBjb252ZXJ0U3RyaW5nVGltZUludGVydmFsVG9TZWNvbmRzIH0gZnJvbSAnLi4vdXRpbHMvY29udmVydGVyJztcclxuXHJcbmVudW0gTWluVmFsdWUge1xyXG4gIFNlY29uZHNfMTAgPSAxMCxcclxuICBNaW5fMSA9IDYwLFxyXG4gIE1pbl81ID0gMzAwLFxyXG4gIE1pbl8xMCA9IDYwMCxcclxufVxyXG5cclxuY29uc3QgeyB0IH0gPSB1c2VJMThuKCk7XHJcbmNvbnN0IHN0b3JhZ2UgPSBpbmplY3RTdG9yYWdlKCk7XHJcblxyXG5jb25zdCBjaGFydCA9IHJlZjxhbnk+KCk7XHJcbmNvbnN0IG1pblZhbHVlID0gcmVmPG51bWJlcj4oKTtcclxuY29uc3QgdG9kYXlJbnRlcnZhbHMgPSByZWY8VGltZUludGVydmFsW10+KCk7XHJcbmNvbnN0IGRhcmtNb2RlID0gcmVmKCk7XHJcblxyXG50eXBlIERhdGFGb3JDaGFydCA9IHtcclxuICBkb21haW46IHN0cmluZztcclxuICBpbnRlcnZhbDogc3RyaW5nO1xyXG59O1xyXG5cclxub25Nb3VudGVkKGFzeW5jICgpID0+IHtcclxuICBtaW5WYWx1ZS52YWx1ZSA9IE1pblZhbHVlLlNlY29uZHNfMTA7XHJcbiAgY29uc3QgdGltZUludGVydmFsTGlzdCA9IChhd2FpdCBzdG9yYWdlLmdldERlc2VyaWFsaXplTGlzdChcclxuICAgIFN0b3JhZ2VEZXNlcmlhbGl6ZVBhcmFtLlRJTUVJTlRFUlZBTF9MSVNULFxyXG4gICkpIGFzIFRpbWVJbnRlcnZhbFtdO1xyXG5cclxuICB0b2RheUludGVydmFscy52YWx1ZSA9IHRpbWVJbnRlcnZhbExpc3Q/LmZpbHRlcih4ID0+IHguZGF5ID09IHRvZGF5TG9jYWxEYXRlKCkpO1xyXG4gIGRhcmtNb2RlLnZhbHVlID0gYXdhaXQgc3RvcmFnZS5nZXRWYWx1ZShTdG9yYWdlUGFyYW1zLkRBUktfTU9ERSwgREFSS19NT0RFX0RFRkFVTFQpO1xyXG4gIHJlbmRlckNoYXJ0KCk7XHJcbn0pO1xyXG5cclxuZnVuY3Rpb24gcmVuZGVyQ2hhcnQoKSB7XHJcbiAgY29uc3QgZGF0YUZvckNoYXJ0OiBEYXRhRm9yQ2hhcnRbXSA9IFtdO1xyXG4gIHRvZGF5SW50ZXJ2YWxzLnZhbHVlPy5mb3JFYWNoKGludGVydmFsID0+IHtcclxuICAgIGludGVydmFsLmludGVydmFscy5mb3JFYWNoKGludCA9PiB7XHJcbiAgICAgIGNvbnN0IGZyb20gPSBpbnQuc3BsaXQoJy0nKVswXTtcclxuICAgICAgY29uc3QgdG8gPSBpbnQuc3BsaXQoJy0nKVsxXTtcclxuICAgICAgaWYgKFxyXG4gICAgICAgIGNvbnZlcnRTdHJpbmdUaW1lSW50ZXJ2YWxUb1NlY29uZHModG8pIC0gY29udmVydFN0cmluZ1RpbWVJbnRlcnZhbFRvU2Vjb25kcyhmcm9tKSA+XHJcbiAgICAgICAgbWluVmFsdWUudmFsdWUhXHJcbiAgICAgICkge1xyXG4gICAgICAgIGRhdGFGb3JDaGFydC5wdXNoKHsgZG9tYWluOiBpbnRlcnZhbC5kb21haW4sIGludGVydmFsOiBjb252ZXJ0SW50ZXJ2YWwoaW50KSB9KTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfSk7XHJcbiAgZHJhd0ludGVydmFsQ2hhcnQoZGF0YUZvckNoYXJ0KTtcclxufVxyXG5cclxuZnVuY3Rpb24gcmVmcmVzaENoYXJ0KCkge1xyXG4gIGNoYXJ0LnZhbHVlLmlubmVySFRNTCA9ICcnO1xyXG4gIHJlbmRlckNoYXJ0KCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNvbnZlcnRJbnRlcnZhbChpbnRlcnZhbDogc3RyaW5nKTogc3RyaW5nIHtcclxuICBmdW5jdGlvbiBjb252ZXJ0KGl0ZW06IHN0cmluZ1tdKSB7XHJcbiAgICBpdGVtID0gaXRlbS5tYXAoeCA9PiAoeC5sZW5ndGggPT0gMSA/IGAwJHt4fWAgOiB4KSk7XHJcbiAgICByZXR1cm4gaXRlbS5qb2luKCc6Jyk7XHJcbiAgfVxyXG5cclxuICBjb25zdCBzb3VyY2VUaW1lRnJvbSA9IGludGVydmFsLnNwbGl0KCctJylbMF0uc3BsaXQoJzonKTtcclxuICBjb25zdCBzb3VyY2VUaW1lVG8gPSBpbnRlcnZhbC5zcGxpdCgnLScpWzFdLnNwbGl0KCc6Jyk7XHJcbiAgcmV0dXJuIGAke2NvbnZlcnQoc291cmNlVGltZUZyb20pfS0ke2NvbnZlcnQoc291cmNlVGltZVRvKX1gO1xyXG59XHJcblxyXG5mdW5jdGlvbiBkcmF3SW50ZXJ2YWxDaGFydChkYXRhOiBEYXRhRm9yQ2hhcnRbXSkge1xyXG4gIGRhdGEuZm9yRWFjaChpdGVtID0+IHtcclxuICAgIGNvbnN0IGhGcm9tID0gZ2V0SG91ckZyb20oaXRlbS5pbnRlcnZhbCk7XHJcbiAgICBjb25zdCBoVG8gPSBnZXRIb3VyVG8oaXRlbS5pbnRlcnZhbCk7XHJcbiAgICBpZiAoaEZyb20gIT0gaFRvKSB7XHJcbiAgICAgIGNvbnN0IHNvdXJjZVRpbWVGcm9tID0gaXRlbS5pbnRlcnZhbC5zcGxpdCgnLScpWzBdLnNwbGl0KCc6Jyk7XHJcbiAgICAgIGNvbnN0IHNvdXJjZVRpbWVUbyA9IGl0ZW0uaW50ZXJ2YWwuc3BsaXQoJy0nKVsxXS5zcGxpdCgnOicpO1xyXG4gICAgICBjb25zdCB0aW1lVG8gPSBgJHtzb3VyY2VUaW1lRnJvbVswXX06NTk6NTlgO1xyXG4gICAgICBjb25zdCB0aW1lRnJvbSA9IGAke3NvdXJjZVRpbWVUb1swXX06MDA6MDBgO1xyXG4gICAgICBkYXRhLnB1c2goeyBkb21haW46IGl0ZW0uZG9tYWluLCBpbnRlcnZhbDogaXRlbS5pbnRlcnZhbC5zcGxpdCgnLScpWzBdICsgJy0nICsgdGltZVRvIH0pO1xyXG4gICAgICBkYXRhLnB1c2goeyBkb21haW46IGl0ZW0uZG9tYWluLCBpbnRlcnZhbDogdGltZUZyb20gKyAnLScgKyBpdGVtLmludGVydmFsLnNwbGl0KCctJylbMV0gfSk7XHJcbiAgICB9XHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IG1hcmdpbiA9IHsgdG9wOiAxMCwgcmlnaHQ6IDEwLCBib3R0b206IDIwLCBsZWZ0OiAyMCB9O1xyXG4gIGNvbnN0IHdpZHRoID0gY2hhcnQudmFsdWUub2Zmc2V0V2lkdGg7XHJcbiAgY29uc3QgaGVpZ2h0ID0gNDAwO1xyXG5cclxuICBjb25zdCB0aWNrRGlzdGFuY2UgPSA0LjM4O1xyXG5cclxuICBjb25zdCB0b29sdGlwID0gZDNcclxuICAgIC5zZWxlY3QoJyN0aW1lSW50ZXJ2YWxDaGFydEQzJylcclxuICAgIC5hcHBlbmQoJ2RpdicpXHJcbiAgICAuc3R5bGUoJ29wYWNpdHknLCAwKVxyXG4gICAgLnN0eWxlKCdkaXNwbGF5JywgJ25vbmUnKVxyXG4gICAgLnN0eWxlKCdwb3NpdGlvbicsICdhYnNvbHV0ZScpXHJcbiAgICAuc3R5bGUoJ2JhY2tncm91bmQtY29sb3InLCAnd2hpdGUnKVxyXG4gICAgLnN0eWxlKCdjb2xvcicsICdibGFjaycpXHJcbiAgICAuc3R5bGUoJ2JvcmRlcicsICcxcHggc29saWQgZ3JleScpXHJcbiAgICAuYXR0cignY2xhc3MnLCAndG9vbHRpcCcpXHJcbiAgICAuc3R5bGUoJ2JvcmRlci13aWR0aCcsICcxcHgnKVxyXG4gICAgLnN0eWxlKCdib3JkZXItcmFkaXVzJywgJzNweCcpXHJcbiAgICAuc3R5bGUoJ3BhZGRpbmcnLCAnNXB4Jyk7XHJcblxyXG4gIGNvbnN0IG1vdXNlb3ZlciA9IGZ1bmN0aW9uIChlOiBhbnkpIHtcclxuICAgIHRvb2x0aXAuc3R5bGUoJ29wYWNpdHknLCAxKS5zdHlsZSgnZGlzcGxheScsICdibG9jaycpO1xyXG4gICAgZDMuc2VsZWN0KCcudG9vbHRpcCcpXHJcbiAgICAgIC5zdHlsZSgnbGVmdCcsIGUubGF5ZXJYICsgMTUgKyAncHgnKVxyXG4gICAgICAuc3R5bGUoJ3RvcCcsIGUubGF5ZXJZICsgMTUgKyAncHgnKTtcclxuICB9O1xyXG4gIGNvbnN0IG1vdXNlbW92ZSA9IGZ1bmN0aW9uIChldmVudDogYW55LCBkYXRhOiBhbnkpIHtcclxuICAgIHRvb2x0aXAuaHRtbChgPGI+JHtkYXRhLmRvbWFpbn08L2I+PGJyPiR7ZGF0YS5pbnRlcnZhbH1gKTtcclxuICB9O1xyXG4gIGNvbnN0IG1vdXNlbGVhdmUgPSBmdW5jdGlvbiAoZTogYW55KSB7XHJcbiAgICB0b29sdGlwLnN0eWxlKCdvcGFjaXR5JywgMCkuc3R5bGUoJ2Rpc3BsYXknLCAnbm9uZScpO1xyXG4gIH07XHJcblxyXG4gIC8vY3JlYXRlIHRoZSBzdmdcclxuICBjb25zdCBzdmcgPSBkM1xyXG4gICAgLnNlbGVjdCgnI3RpbWVJbnRlcnZhbENoYXJ0RDMnKVxyXG4gICAgLmFwcGVuZCgnc3ZnJylcclxuICAgIC5hdHRyKCd3aWR0aCcsIHdpZHRoICsgbWFyZ2luLmxlZnQgKyBtYXJnaW4ucmlnaHQpXHJcbiAgICAuYXR0cignaGVpZ2h0JywgaGVpZ2h0ICsgbWFyZ2luLnRvcCArIG1hcmdpbi5ib3R0b20pXHJcbiAgICAuYXBwZW5kKCdnJylcclxuICAgIC5hdHRyKCd0cmFuc2Zvcm0nLCBgdHJhbnNsYXRlKCR7bWFyZ2luLmxlZnR9LCR7bWFyZ2luLnRvcH0pYCk7XHJcblxyXG4gIGNvbnN0IHkgPSBkMy5zY2FsZUxpbmVhcihbaGVpZ2h0LCAwXSkuZG9tYWluKFswLCA2MF0pO1xyXG4gIGNvbnN0IHlBeGlzID0gZDMuYXhpc0xlZnQoeSk7XHJcblxyXG4gIGNvbnN0IHggPSBkMy5zY2FsZUxpbmVhcihbMCwgd2lkdGhdKS5kb21haW4oWzAsIDI0XSk7XHJcbiAgY29uc3QgeEF4aXMgPSBkMy5heGlzQm90dG9tKHgpLnRpY2tzKDI0KTtcclxuXHJcbiAgc3ZnXHJcbiAgICAuYXBwZW5kKCdnJylcclxuICAgIC5hdHRyKCdjbGFzcycsICdncmlkJylcclxuICAgIC5zdHlsZSgnY29sb3InLCBkYXJrTW9kZS52YWx1ZSA/ICcjNzk3OTc5JyA6ICcjZTVlNWU1JylcclxuICAgIC5hdHRyKCd0cmFuc2Zvcm0nLCBgdHJhbnNsYXRlKDAsICR7aGVpZ2h0fSlgKVxyXG4gICAgLmNhbGwoeEF4aXMudGlja1NpemUoLWhlaWdodCkpO1xyXG5cclxuICBzdmdcclxuICAgIC5hcHBlbmQoJ2cnKVxyXG4gICAgLmF0dHIoJ2NsYXNzJywgJ2dyaWQnKVxyXG4gICAgLnN0eWxlKCdjb2xvcicsIGRhcmtNb2RlLnZhbHVlID8gJyM3OTc5NzknIDogJyNlNWU1ZTUnKVxyXG4gICAgLmNhbGwoeUF4aXMudGlja1NpemUoLXdpZHRoKSk7XHJcbiAgc3ZnLnNlbGVjdEFsbCgndGV4dCcpLnN0eWxlKCdmaWxsJywgJyM3OTc5NzknKTtcclxuXHJcbiAgLy9kcmF3IHRoZSBiYXJzLCBvZmZzZXQgeSBhbmQgYmFyIGhlaWdodCBiYXNlZCBvbiBkYXRhXHJcbiAgc3ZnXHJcbiAgICAuc2VsZWN0QWxsKCcuYmFyJylcclxuICAgIC5kYXRhKGRhdGEpXHJcbiAgICAuZW50ZXIoKVxyXG4gICAgLmFwcGVuZCgncmVjdCcpXHJcbiAgICAuc3R5bGUoJ2ZpbGwnLCAnIzU2NjhlMicpXHJcbiAgICAuc3R5bGUoJ2N1cnNvcicsICdwb2ludGVyJylcclxuICAgIC5zdHlsZSgnc3Ryb2tlLXdpZHRoJywgJzEnKVxyXG4gICAgLmF0dHIoJ2NsYXNzJywgJ2JhcicpXHJcbiAgICAuYXR0cigneCcsIChkYXRhOiBhbnkpID0+IHgoZ2V0SG91ckZyb20oZGF0YS5pbnRlcnZhbCkpICsgMilcclxuICAgIC5hdHRyKCd3aWR0aCcsIGNoYXJ0LnZhbHVlLm9mZnNldFdpZHRoIC8gMjQgLSA0KVxyXG4gICAgLmF0dHIoJ3knLCAoZGF0YTogYW55KSA9PiB5KGdldE1pbnV0ZXNUbyhkYXRhLmludGVydmFsKSkgLSAxKVxyXG4gICAgLmF0dHIoJ2hlaWdodCcsIChkYXRhOiBhbnkpID0+IHtcclxuICAgICAgY29uc3Qgb2Zmc2V0ID0gZ2V0TWludXRlc1RvKGRhdGEuaW50ZXJ2YWwpIC0gZ2V0TWludXRlc0Zyb20oZGF0YS5pbnRlcnZhbCk7XHJcbiAgICAgIGlmIChvZmZzZXQgPT0gMCkge1xyXG4gICAgICAgIGNvbnN0IG9mZnNldFNlY29uZHMgPSBnZXRTZWNvbmRzVG8oZGF0YS5pbnRlcnZhbCkgLSBnZXRTZWNvbmRzRnJvbShkYXRhLmludGVydmFsKTtcclxuICAgICAgICBpZiAob2Zmc2V0U2Vjb25kcyA8PSAzKSByZXR1cm4gMDtcclxuICAgICAgICBlbHNlIHJldHVybiAxO1xyXG4gICAgICB9IGVsc2UgcmV0dXJuIG9mZnNldCAqIHRpY2tEaXN0YW5jZTtcclxuICAgIH0pXHJcbiAgICAub24oJ21vdXNlb3ZlcicsIG1vdXNlb3ZlcilcclxuICAgIC5vbignbW91c2Vtb3ZlJywgbW91c2Vtb3ZlKVxyXG4gICAgLm9uKCdtb3VzZWxlYXZlJywgbW91c2VsZWF2ZSk7XHJcblxyXG4gIGZ1bmN0aW9uIGdldEhvdXJGcm9tKGludGVydmFsOiBzdHJpbmcpOiBudW1iZXIge1xyXG4gICAgY29uc3QgdGltZSA9IGludGVydmFsLnNwbGl0KCctJylbMF07XHJcbiAgICByZXR1cm4gTnVtYmVyKHRpbWUuc3BsaXQoJzonKVswXSk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBnZXRIb3VyVG8oaW50ZXJ2YWw6IHN0cmluZyk6IG51bWJlciB7XHJcbiAgICB2YXIgdGltZSA9IGludGVydmFsLnNwbGl0KCctJylbMV07XHJcbiAgICByZXR1cm4gTnVtYmVyKHRpbWUuc3BsaXQoJzonKVswXSk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBnZXRNaW51dGVzRnJvbShpbnRlcnZhbDogc3RyaW5nKTogbnVtYmVyIHtcclxuICAgIHZhciB0aW1lID0gaW50ZXJ2YWwuc3BsaXQoJy0nKVswXTtcclxuICAgIHJldHVybiBOdW1iZXIodGltZS5zcGxpdCgnOicpWzFdKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGdldE1pbnV0ZXNUbyhpbnRlcnZhbDogc3RyaW5nKTogbnVtYmVyIHtcclxuICAgIHZhciB0aW1lID0gaW50ZXJ2YWwuc3BsaXQoJy0nKVsxXTtcclxuICAgIHJldHVybiBOdW1iZXIodGltZS5zcGxpdCgnOicpWzFdKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGdldFNlY29uZHNGcm9tKGludGVydmFsOiBzdHJpbmcpOiBudW1iZXIge1xyXG4gICAgdmFyIHRpbWUgPSBpbnRlcnZhbC5zcGxpdCgnLScpWzBdO1xyXG4gICAgcmV0dXJuIE51bWJlcih0aW1lLnNwbGl0KCc6JylbMl0pO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gZ2V0U2Vjb25kc1RvKGludGVydmFsOiBzdHJpbmcpOiBudW1iZXIge1xyXG4gICAgdmFyIHRpbWUgPSBpbnRlcnZhbC5zcGxpdCgnLScpWzFdO1xyXG4gICAgcmV0dXJuIE51bWJlcih0aW1lLnNwbGl0KCc6JylbMl0pO1xyXG4gIH1cclxufVxyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZSBzY29wZWQ+XHJcbi5ibG9jayB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGJvcmRlcjogMXB4IHJnYigxOTcsIDE5NywgMTk3KSBzb2xpZDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICBoZWlnaHQ6IDQwcHg7XHJcbiAgd2lkdGg6IDQwcHg7XHJcbn1cclxuXHJcbi5ncmlkIGxpbmUge1xyXG4gIHN0cm9rZTogZ3JheTtcclxuICBzdHJva2Utb3BhY2l0eTogMC4yO1xyXG4gIGNvbG9yOiBibGFjaztcclxufVxyXG48L3N0eWxlPlxyXG4iLCI8dGVtcGxhdGU+XHJcbiAgPHAgY2xhc3M9XCJkZXNjcmlwdGlvblwiPnt7IHQoJ3RpbWVDaGFydERlc2NyaXB0aW9uLm1lc3NhZ2UnKSB9fTwvcD5cclxuICA8QmFyIDpkYXRhPVwiZGF0YVwiIDpvcHRpb25zPVwib3B0aW9uc1wiIHYtaWY9XCJpc0xvYWRlZFwiIC8+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0IGxhbmc9XCJ0c1wiPlxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgbmFtZTogJ0hvdXJseUNoYXJ0JyxcclxufTtcclxuPC9zY3JpcHQ+XHJcblxyXG48c2NyaXB0IGxhbmc9XCJ0c1wiIHNldHVwPlxyXG5pbXBvcnQgeyBCYXIgfSBmcm9tICd2dWUtY2hhcnRqcyc7XHJcbmltcG9ydCB7XHJcbiAgQ2hhcnQgYXMgQ2hhcnRKUyxcclxuICBUaXRsZSxcclxuICBUb29sdGlwLFxyXG4gIExlZ2VuZCxcclxuICBCYXJFbGVtZW50LFxyXG4gIExpbmVhclNjYWxlLFxyXG4gIENhdGVnb3J5U2NhbGUsXHJcbn0gZnJvbSAnY2hhcnQuanMnO1xyXG5pbXBvcnQgeyBvbk1vdW50ZWQsIHJlZiB9IGZyb20gJ3Z1ZSc7XHJcbmltcG9ydCB7IGluamVjdFN0b3JhZ2UgfSBmcm9tICcuLi9zdG9yYWdlL2luamVjdC1zdG9yYWdlJztcclxuaW1wb3J0IHsgU3RvcmFnZURlc2VyaWFsaXplUGFyYW0gfSBmcm9tICcuLi9zdG9yYWdlL3N0b3JhZ2UtcGFyYW1zJztcclxuaW1wb3J0IHsgVGltZUludGVydmFsIH0gZnJvbSAnLi4vZW50aXR5L3RpbWUtaW50ZXJ2YWwnO1xyXG5pbXBvcnQgeyB0b2RheUxvY2FsRGF0ZSB9IGZyb20gJy4uL3V0aWxzL2RhdGUnO1xyXG5pbXBvcnQgeyBjb252ZXJ0SG91cnNUb1RpbWUsIGNvbnZlcnRTdHJpbmdUaW1lSW50ZXJ2YWxUb1NlY29uZHMgfSBmcm9tICcuLi91dGlscy9jb252ZXJ0ZXInO1xyXG5pbXBvcnQgeyB1c2VJMThuIH0gZnJvbSAndnVlLWkxOG4nO1xyXG5cclxuY29uc3QgeyB0IH0gPSB1c2VJMThuKCk7XHJcblxyXG50eXBlIERhdGFGb3JDaGFydCA9IHtcclxuICBzdW1tYXJ5OiBudW1iZXI7XHJcbiAgaG91cjogbnVtYmVyO1xyXG4gIGRvbWFpbnM6IERvbWFpbnNJbnRlcnZhbFtdO1xyXG59O1xyXG5cclxudHlwZSBEb21haW5zSW50ZXJ2YWwgPSB7XHJcbiAgaG91cjogbnVtYmVyO1xyXG4gIHN1bW1hcnk6IG51bWJlcjtcclxuICBkb21haW46IHN0cmluZztcclxufTtcclxuXHJcbmNvbnN0IHN0b3JhZ2UgPSBpbmplY3RTdG9yYWdlKCk7XHJcblxyXG5DaGFydEpTLnJlZ2lzdGVyKENhdGVnb3J5U2NhbGUsIExpbmVhclNjYWxlLCBCYXJFbGVtZW50LCBUaXRsZSwgVG9vbHRpcCwgTGVnZW5kKTtcclxuXHJcbmNvbnN0IG9wdGlvbnMgPSByZWY8YW55PigpO1xyXG5jb25zdCBkYXRhID0gcmVmPGFueT4oKTtcclxuY29uc3QgaXNMb2FkZWQgPSByZWY8Ym9vbGVhbj4oKTtcclxuXHJcbmNvbnN0IG9iamVjdHM6IERhdGFGb3JDaGFydFtdID0gW107XHJcbmNvbnN0IGhvdXJzOiBudW1iZXJbXSA9IFtdO1xyXG5cclxuaXNMb2FkZWQudmFsdWUgPSBmYWxzZTtcclxuXHJcbmZ1bmN0aW9uIGNvbnZlcnRUaW1JbnRlcnZhbFRvT2JqZWN0KFxyXG4gIHRpbWVJbnRlcnZhbDogc3RyaW5nLFxyXG4gIGRvbWFpbjogc3RyaW5nLFxyXG4pOiBEb21haW5zSW50ZXJ2YWxbXSB8IG51bGwge1xyXG4gIGNvbnN0IGFycmF5ID0gdGltZUludGVydmFsLnNwbGl0KCctJyk7XHJcbiAgY29uc3QgdGltZTEgPSBhcnJheVswXS5zcGxpdCgnOicpO1xyXG4gIGNvbnN0IHRpbWUyID0gYXJyYXlbMV0uc3BsaXQoJzonKTtcclxuICBpZiAodGltZTFbMF0gPT0gdGltZTJbMF0pIHtcclxuICAgIHJldHVybiBbXHJcbiAgICAgIHtcclxuICAgICAgICBob3VyOiBOdW1iZXIodGltZTFbMF0pLFxyXG4gICAgICAgIHN1bW1hcnk6XHJcbiAgICAgICAgICBjb252ZXJ0U3RyaW5nVGltZUludGVydmFsVG9TZWNvbmRzKGFycmF5WzFdKSAtXHJcbiAgICAgICAgICBjb252ZXJ0U3RyaW5nVGltZUludGVydmFsVG9TZWNvbmRzKGFycmF5WzBdKSxcclxuICAgICAgICBkb21haW46IGRvbWFpbixcclxuICAgICAgfSxcclxuICAgIF07XHJcbiAgfSBlbHNlIHtcclxuICAgIGNvbnN0IGFyciA9IFtdO1xyXG4gICAgY29uc3QgZmlyc3RQYXJ0MSA9IGFycmF5WzBdO1xyXG4gICAgY29uc3QgZmlyc3RQYXJ0MiA9IGAke3RpbWUxWzBdfTo1OTo1OWA7XHJcbiAgICBjb25zdCBob3VyRm9yRmlyc3RQYXJ0ID0gZmlyc3RQYXJ0MS5zcGxpdCgnOicpO1xyXG4gICAgYXJyLnB1c2goe1xyXG4gICAgICBob3VyOiBOdW1iZXIoaG91ckZvckZpcnN0UGFydFswXSksXHJcbiAgICAgIHN1bW1hcnk6XHJcbiAgICAgICAgY29udmVydFN0cmluZ1RpbWVJbnRlcnZhbFRvU2Vjb25kcyhmaXJzdFBhcnQyKSAtXHJcbiAgICAgICAgY29udmVydFN0cmluZ1RpbWVJbnRlcnZhbFRvU2Vjb25kcyhmaXJzdFBhcnQxKSxcclxuICAgICAgZG9tYWluOiBkb21haW4sXHJcbiAgICB9KTtcclxuICAgIGNvbnN0IHNlY29uZFBhcnQxID0gYCR7dGltZTJbMF19OjAwOjAwYDtcclxuICAgIGNvbnN0IHNlY29uZFBhcnQyID0gYCR7dGltZTJbMF19OiR7dGltZTJbMV19OiR7dGltZTJbMl19YDtcclxuICAgIGNvbnN0IGhvdXJGb3JzZWNvbmRQYXJ0ID0gc2Vjb25kUGFydDEuc3BsaXQoJzonKTtcclxuICAgIGFyci5wdXNoKHtcclxuICAgICAgaG91cjogTnVtYmVyKGhvdXJGb3JzZWNvbmRQYXJ0WzBdKSxcclxuICAgICAgc3VtbWFyeTpcclxuICAgICAgICBjb252ZXJ0U3RyaW5nVGltZUludGVydmFsVG9TZWNvbmRzKHNlY29uZFBhcnQyKSAtXHJcbiAgICAgICAgY29udmVydFN0cmluZ1RpbWVJbnRlcnZhbFRvU2Vjb25kcyhzZWNvbmRQYXJ0MSksXHJcbiAgICAgIGRvbWFpbjogZG9tYWluLFxyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gYXJyO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gZmlsbERhdGEodGltZUludGVydmFsTGlzdDogVGltZUludGVydmFsW10pIHtcclxuICBjb25zdCBpdGVtcyA9IHRpbWVJbnRlcnZhbExpc3Q/LmZpbHRlcih4ID0+IHguZGF5ID09IHRvZGF5TG9jYWxEYXRlKCkpO1xyXG4gIGNvbnN0IGRvbWFpbnMgPSBpdGVtcy5tYXAoeCA9PiB4LmRvbWFpbik7XHJcbiAgY29uc3QgcmVzdWx0OiBhbnlbXSA9IFtdO1xyXG4gIGNvbnN0IGludGVydmFsc09iajogRG9tYWluc0ludGVydmFsW10gPSBbXTtcclxuICBkb21haW5zLmZvckVhY2goZG9tYWluID0+IHtcclxuICAgIGNvbnN0IGludGVydmFscyA9IGl0ZW1zLmZpbHRlcih4ID0+IHguZG9tYWluID09IGRvbWFpbik7XHJcbiAgICBpbnRlcnZhbHMuZm9yRWFjaChhcnJheSA9PiB7XHJcbiAgICAgIGNvbnN0IGkgPSBhcnJheS5pbnRlcnZhbHM7XHJcbiAgICAgIGkuZm9yRWFjaCh0aW1lID0+IHtcclxuICAgICAgICBjb25zdCBvYmpzID0gY29udmVydFRpbUludGVydmFsVG9PYmplY3QodGltZSwgZG9tYWluKTtcclxuICAgICAgICBpZiAob2JqcyAhPSBudWxsICYmIG9ianMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgb2Jqcy5mb3JFYWNoKG9iaiA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGV4aXN0RG9tYWluID0gaW50ZXJ2YWxzT2JqLmZpbmQoeCA9PiB4LmRvbWFpbiA9PSBkb21haW4gJiYgeC5ob3VyID09IG9iai5ob3VyKTtcclxuICAgICAgICAgICAgaWYgKGV4aXN0RG9tYWluICE9IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgIGV4aXN0RG9tYWluLnN1bW1hcnkgKz0gb2JqLnN1bW1hcnk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpbnRlcnZhbHNPYmoucHVzaChvYmopO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH0pO1xyXG5cclxuICBjb25zdCB0ZW1wQXJyYXk6IG51bWJlcltdID0gW107XHJcbiAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IDI0OyBpbmRleCsrKSB7XHJcbiAgICBjb25zdCBvYmogPSBvYmplY3RzLmZpbmQoeCA9PiB4LmhvdXIgPT0gaW5kZXgpO1xyXG4gICAgY29uc3QgaW50ZXJ2YWxPYmogPSBpbnRlcnZhbHNPYmouZmlsdGVyKHggPT4geC5ob3VyID09IGluZGV4KTtcclxuICAgIGNvbnN0IHN1bW1hcnkgPVxyXG4gICAgICBpbnRlcnZhbE9iai5sZW5ndGggPT0gMCA/IDAgOiBpbnRlcnZhbE9iai5tYXAoeCA9PiB4LnN1bW1hcnkpLnJlZHVjZSgoYSwgYikgPT4gYSArIGIpO1xyXG4gICAgaWYgKG9iaiA9PSB1bmRlZmluZWQpIHtcclxuICAgICAgY29uc3QgbmV3T2JqID0ge1xyXG4gICAgICAgIHN1bW1hcnk6IHN1bW1hcnksXHJcbiAgICAgICAgaG91cjogaW5kZXgsXHJcbiAgICAgICAgZG9tYWluczogaW50ZXJ2YWxPYmosXHJcbiAgICAgIH07XHJcbiAgICAgIG9iamVjdHMucHVzaChuZXdPYmopO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgb2JqLnN1bW1hcnkgKz0gc3VtbWFyeTtcclxuICAgICAgaW50ZXJ2YWxPYmouZm9yRWFjaChlbGVtZW50ID0+IHtcclxuICAgICAgICBvYmouZG9tYWlucy5wdXNoKGVsZW1lbnQpO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICB0ZW1wQXJyYXkucHVzaCgwKTtcclxuICB9XHJcblxyXG4gIG9iamVjdHMuZm9yRWFjaChvYmogPT4ge1xyXG4gICAgY29uc3QgZW1wdHlBcnJheTogbnVtYmVyW10gPSBPYmplY3QuYXNzaWduKFtdLCB0ZW1wQXJyYXkpO1xyXG4gICAgZW1wdHlBcnJheVtvYmouaG91cl0gPSBOdW1iZXIob2JqLnN1bW1hcnkgLyA2MCk7XHJcbiAgICByZXN1bHQucHVzaCh7XHJcbiAgICAgIGJhY2tncm91bmRDb2xvcjogWycjNTY2OGUyJ10sXHJcbiAgICAgIGRhdGE6IGVtcHR5QXJyYXksXHJcbiAgICB9KTtcclxuICB9KTtcclxuXHJcbiAgcmV0dXJuIHJlc3VsdDtcclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gYnVpbGRDaGFydCgpIHtcclxuICBjb25zdCB0aW1lSW50ZXJ2YWxMaXN0ID0gKGF3YWl0IHN0b3JhZ2UuZ2V0RGVzZXJpYWxpemVMaXN0KFxyXG4gICAgU3RvcmFnZURlc2VyaWFsaXplUGFyYW0uVElNRUlOVEVSVkFMX0xJU1QsXHJcbiAgKSkgYXMgVGltZUludGVydmFsW107XHJcbiAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8PSAyMzsgaW5kZXgrKykge1xyXG4gICAgaG91cnMucHVzaChpbmRleCk7XHJcbiAgfVxyXG4gIGxldCBtaW51dGVzOiBudW1iZXJbXSA9IFtdO1xyXG4gIGZvciAobGV0IGluZGV4ID0gMTsgaW5kZXggPCA2MDsgaW5kZXgrKykge1xyXG4gICAgbWludXRlcy5wdXNoKGluZGV4KTtcclxuICB9XHJcblxyXG4gIGNvbnN0IGRhdGFGb3JDaGFydCA9IGZpbGxEYXRhKHRpbWVJbnRlcnZhbExpc3QpO1xyXG4gIGRhdGEudmFsdWUgPSB7XHJcbiAgICBsYWJlbHM6IGhvdXJzLFxyXG4gICAgZGF0YXNldHM6IGRhdGFGb3JDaGFydCxcclxuICB9O1xyXG5cclxuICBvcHRpb25zLnZhbHVlID0ge1xyXG4gICAgcmVzcG9uc2l2ZTogdHJ1ZSxcclxuICAgIG1haW50YWluQXNwZWN0UmF0aW86IGZhbHNlLFxyXG4gICAgcGx1Z2luczoge1xyXG4gICAgICBsZWdlbmQ6IHtcclxuICAgICAgICBwb3NpdGlvbjogJ25vbmUnLFxyXG4gICAgICB9LFxyXG4gICAgICB0b29sdGlwOiB7XHJcbiAgICAgICAgY2FsbGJhY2tzOiB7XHJcbiAgICAgICAgICBsYWJlbDogZnVuY3Rpb24gKGNvbnRleHQ6IGFueSkge1xyXG4gICAgICAgICAgICByZXR1cm4gYCR7Y29udGV4dC5sYWJlbH06MDAtJHtOdW1iZXIoY29udGV4dC5sYWJlbCkgKyAxfTowMCAke2NvbnZlcnRIb3Vyc1RvVGltZShcclxuICAgICAgICAgICAgICBjb250ZXh0LnJhdyxcclxuICAgICAgICAgICAgKX1gO1xyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICAgIHNjYWxlczoge1xyXG4gICAgICB5OiB7XHJcbiAgICAgICAgbWluOiAwLFxyXG4gICAgICAgIG1heDogNjAsXHJcbiAgICAgICAgdGlja3M6IHtcclxuICAgICAgICAgIHN0ZXBTaXplOiA1LFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICAgIHg6IHtcclxuICAgICAgICBzdGFja2VkOiB0cnVlLFxyXG4gICAgICAgIG1pbjogMCxcclxuICAgICAgICBtYXg6IDIzLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICB9O1xyXG4gIGlzTG9hZGVkLnZhbHVlID0gdHJ1ZTtcclxufVxyXG5cclxub25Nb3VudGVkKGFzeW5jICgpID0+IGF3YWl0IGJ1aWxkQ2hhcnQoKSk7XHJcbjwvc2NyaXB0PlxyXG4iLCI8dGVtcGxhdGU+XHJcbiAgPGRpdiBjbGFzcz1cInNldHRpbmdzLWl0ZW1cIj5cclxuICAgIDxsYWJlbCBjbGFzcz1cInRpdGxlXCI+IHt7IHQoJ2Rhc2hib2FyZC5tZXNzYWdlJykgfX0gPC9sYWJlbD5cclxuICA8L2Rpdj5cclxuICA8ZGl2IGNsYXNzPVwiY2hhcnQgY2hhcnRCeUhvdXJzXCI+XHJcbiAgICA8ZGl2IGNsYXNzPVwibXQtMTAgbWItMjBcIj5cclxuICAgICAgPGJ1dHRvblxyXG4gICAgICAgIDpjbGFzcz1cIlsnY2hhcnQtYnRuJywgY2hhcnQgPT0gVHlwZU9mQ2hhcnQuSG9ybHkgPyAnYWN0aXZlJyA6ICcnXVwiXHJcbiAgICAgICAgQGNsaWNrPVwib3BlbkNoYXJ0KFR5cGVPZkNoYXJ0Lkhvcmx5KVwiXHJcbiAgICAgID5cclxuICAgICAgICA8aW1nIGNsYXNzPVwibWwtNVwiIHNyYz1cIi4uL2Fzc2V0cy9pY29ucy9ieS1ob3Vycy5zdmdcIiBoZWlnaHQ9XCIyMlwiIC8+XHJcbiAgICAgICAge3sgdCgnYnlIb3Vycy5tZXNzYWdlJykgfX1cclxuICAgICAgPC9idXR0b24+XHJcbiAgICAgIDxidXR0b25cclxuICAgICAgICA6Y2xhc3M9XCJbJ21sLTEwJywgJ2NoYXJ0LWJ0bicsIGNoYXJ0ID09IFR5cGVPZkNoYXJ0LkludGVydmFsID8gJ2FjdGl2ZScgOiAnJ11cIlxyXG4gICAgICAgIEBjbGljaz1cIm9wZW5DaGFydChUeXBlT2ZDaGFydC5JbnRlcnZhbClcIlxyXG4gICAgICA+XHJcbiAgICAgICAgPGltZyBjbGFzcz1cIm1sLTVcIiBzcmM9XCIuLi9hc3NldHMvaWNvbnMvYnktaW50ZXJ2YWxzLnN2Z1wiIGhlaWdodD1cIjIyXCIgLz5cclxuICAgICAgICB7eyB0KCdpbnRlcnZhbHMubWVzc2FnZScpIH19XHJcbiAgICAgIDwvYnV0dG9uPlxyXG4gICAgPC9kaXY+XHJcbiAgICA8SG91cmx5Q2hhcnQgdi1pZj1cImNoYXJ0ID09IFR5cGVPZkNoYXJ0Lkhvcmx5XCIgLz5cclxuICAgIDxUaW1lSW50ZXJ2YWxDaGFydCB2LWlmPVwiY2hhcnQgPT0gVHlwZU9mQ2hhcnQuSW50ZXJ2YWxcIiAvPlxyXG4gIDwvZGl2PlxyXG4gIDxkaXYgY2xhc3M9XCJ0YWItaXRlbXNcIj5cclxuICAgIDxUYWJMaXN0IDp0eXBlPVwiVHlwZU9mTGlzdC5EYXNoYm9hcmRcIiA6c2hvd0FsbFN0YXRzPVwiZmFsc2VcIiB2LWlmPVwiY2hhcnQgPT0gVHlwZU9mQ2hhcnQuSG9ybHlcIiAvPlxyXG4gIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdCBsYW5nPVwidHNcIj5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gIG5hbWU6ICdEYXNoYm9hcmQnLFxyXG59O1xyXG48L3NjcmlwdD5cclxuXHJcbjxzY3JpcHQgbGFuZz1cInRzXCIgc2V0dXA+XHJcbmltcG9ydCB7IHVzZUkxOG4gfSBmcm9tICd2dWUtaTE4bic7XHJcbmltcG9ydCBUaW1lSW50ZXJ2YWxDaGFydCBmcm9tICcuL1RpbWVJbnRlcnZhbENoYXJ0LnZ1ZSc7XHJcbmltcG9ydCBIb3VybHlDaGFydCBmcm9tICcuL0hvdXJseUNoYXJ0LnZ1ZSc7XHJcbmltcG9ydCBUYWJMaXN0IGZyb20gJy4uL2NvbXBvbmVudHMvVGFiTGlzdC52dWUnO1xyXG5pbXBvcnQgeyBUeXBlT2ZMaXN0IH0gZnJvbSAnLi4vdXRpbHMvZW51bXMnO1xyXG5pbXBvcnQgeyBvbk1vdW50ZWQsIHJlZiB9IGZyb20gJ3Z1ZSc7XHJcblxyXG5jb25zdCB7IHQgfSA9IHVzZUkxOG4oKTtcclxuY29uc3QgY2hhcnQgPSByZWY8VHlwZU9mQ2hhcnQ+KCk7XHJcblxyXG5lbnVtIFR5cGVPZkNoYXJ0IHtcclxuICBIb3JseSxcclxuICBJbnRlcnZhbCxcclxufVxyXG5cclxub25Nb3VudGVkKCgpID0+IHtcclxuICBjaGFydC52YWx1ZSA9IFR5cGVPZkNoYXJ0Lkhvcmx5O1xyXG59KTtcclxuXHJcbmZ1bmN0aW9uIG9wZW5DaGFydCh0eXBlOiBUeXBlT2ZDaGFydCkge1xyXG4gIGNoYXJ0LnZhbHVlID0gdHlwZTtcclxufVxyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZSBzY29wZWQ+XHJcbi5jaGFydCB7XHJcbiAgbWFyZ2luOiAyMHB4IDA7XHJcbiAgd2lkdGg6IDgwJTtcclxufVxyXG4udGFiLWl0ZW1zIHtcclxuICB3aWR0aDogODAlO1xyXG4gIG1hcmdpbi10b3A6IDEwMHB4O1xyXG59XHJcbi5jaGFydEJ5SG91cnMge1xyXG4gIGhlaWdodDogMzkwcHg7XHJcbn1cclxuLmNoYXJ0LWJ0biB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE5MiwgMTkyLCAxOTIpO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGJvcmRlci1yYWRpdXM6IDdweDtcclxuICBoZWlnaHQ6IDM2cHg7XHJcbiAgbGluZS1oZWlnaHQ6IDM1cHg7XHJcbiAgcGFkZGluZzogMCAyMHB4O1xyXG4gIGJvcmRlcjogMDtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgbWluLXdpZHRoOiA4MHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB3aWR0aDogMjAwcHg7XHJcbn1cclxuXHJcbi5jaGFydC1idG4uYWN0aXZlIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTM3N2FmICFpbXBvcnRhbnQ7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcbjwvc3R5bGU+XHJcbiIsIjx0ZW1wbGF0ZT5cclxuICA8ZGl2IGNsYXNzPVwibWFpblwiPlxyXG4gICAgPERhc2hib2FkIHYtaWY9XCJ0eXBlID09IFNldHRpbmdzVGFiLkRhc2hib2FyZFwiIC8+XHJcbiAgICA8V2Vic2l0ZVN0YXRzIHYtaWY9XCJ0eXBlID09IFNldHRpbmdzVGFiLldlYnNpdGVTdGF0c1wiIDpkb21haW49XCJkb21haW4hXCIgLz5cclxuICA8L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQgbGFuZz1cInRzXCI+XHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICBuYW1lOiAnRGFzaGJvYWRDb250YWluZXInLFxyXG59O1xyXG48L3NjcmlwdD5cclxuXHJcbjxzY3JpcHQgbGFuZz1cInRzXCIgc2V0dXA+XHJcbmltcG9ydCB7IFNldHRpbmdzVGFiIH0gZnJvbSAnLi4vdXRpbHMvZW51bXMnO1xyXG5pbXBvcnQgV2Vic2l0ZVN0YXRzIGZyb20gJy4vV2Vic2l0ZVN0YXRzLnZ1ZSc7XHJcbmltcG9ydCBEYXNoYm9hZCBmcm9tICcuL0Rhc2hib2FkLnZ1ZSc7XHJcblxyXG5kZWZpbmVQcm9wczx7XHJcbiAgdHlwZTogU2V0dGluZ3NUYWI7XHJcbiAgZG9tYWluOiBzdHJpbmcgfCB1bmRlZmluZWQ7XHJcbn0+KCk7XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlIHNjb3BlZD5cclxuLm1haW4ge1xyXG4gIHdpZHRoOiA4MCU7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG59XHJcbjwvc3R5bGU+XHJcbiIsImV4cG9ydCBkZWZhdWx0IFwiX19WSVRFX0FTU0VUX183MTc5NmYwMl9fXCIiLCI8dGVtcGxhdGU+XHJcbiAgPGRpdj5cclxuICAgIDxwIGNsYXNzPVwidGl0bGVcIj5cclxuICAgICAge3sgdCgnZW5qb3kubWVzc2FnZScpIH19XHJcbiAgICA8L3A+XHJcblxyXG4gICAgPHA+XHJcbiAgICAgIHt7IHQoJ2NhbkRvbmF0ZS5tZXNzYWdlJykgfX1cclxuICAgIDwvcD5cclxuXHJcbiAgICA8ZGl2IGNsYXNzPVwibXQtMzBcIj5cclxuICAgICAgPHA+e3sgdCgnY29pbi5tZXNzYWdlJykgfX0gPHNwYW4gY2xhc3M9XCJmb250LWJvbGRcIj4gVVNEVCA8L3NwYW4+PC9wPlxyXG4gICAgICA8cD57eyB0KCdjaGFpbi5tZXNzYWdlJykgfX08c3BhbiBjbGFzcz1cImZvbnQtYm9sZFwiPiBFdGhlcmV1bSAoRVJDMjApIDwvc3Bhbj48L3A+XHJcbiAgICAgIDxwPlxyXG4gICAgICAgIHt7IHQoJ2FkZHJlc3MubWVzc2FnZScpIH19XHJcbiAgICAgICAgPHNwYW4gY2xhc3M9XCJmb250LWJvbGRcIj4gMHg0MjdhMjJlMWY0YmE4MTM1MWMyMjQ2NWZhZjZjZmNmNjA5NTU4M2QxIDwvc3Bhbj5cclxuICAgICAgPC9wPlxyXG4gICAgPC9kaXY+XHJcblxyXG4gICAgPGltZyBjbGFzcz1cIm10LTE1XCIgc3JjPVwiLi4vYXNzZXRzL2ljb25zL2RvbmF0aW9uLXFyLnBuZ1wiIC8+XHJcblxyXG4gICAgPHAgY2xhc3M9XCJmb250LWJvbGQgbXQtMzBcIj5cclxuICAgICAge3sgdCgndGhhbmtzLm1lc3NhZ2UnKSB9fVxyXG4gICAgPC9wPlxyXG4gIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdCBsYW5nPVwidHNcIj5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gIG5hbWU6ICdEb25hdGlvbicsXHJcbn07XHJcbjwvc2NyaXB0PlxyXG5cclxuPHNjcmlwdCBsYW5nPVwidHNcIiBzZXR1cD5cclxuaW1wb3J0IHsgdXNlSTE4biB9IGZyb20gJ3Z1ZS1pMThuJztcclxuY29uc3QgeyB0IH0gPSB1c2VJMThuKCk7XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlIHNjb3BlZD5cclxucCB7XHJcbiAgZm9udC1zaXplOiAxNXB4O1xyXG59XHJcbi50aXRsZSB7XHJcbiAgZm9udC1zaXplOiAxOHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuPC9zdHlsZT5cclxuIiwiPHRlbXBsYXRlPlxyXG4gIDxub3RpZmljYXRpb25zIHBvc2l0aW9uPVwiYm90dG9tIHJpZ2h0XCIgLz5cclxuICA8ZGl2IGNsYXNzPVwic2V0dGluZ3MtdGFic1wiPlxyXG4gICAgPGRpdiBjbGFzcz1cImhlYWRlci1ibG9ja1wiPlxyXG4gICAgICA8aW1nIGNsYXNzPVwiZC1pbmxpbmUtYmxvY2sgbG9nb1wiIGhlaWdodD1cIjMwXCIgc3JjPVwiLi4vYXNzZXRzL2ljb25zLzQ4eDQ4LnBuZ1wiIC8+XHJcbiAgICAgIDxwIGNsYXNzPVwiZC1pbmxpbmUtYmxvY2sgdGl0bGVcIj5UYWJUcmFjazwvcD5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdiBjbGFzcz1cInNldHRpbmdzLXRhYiBtdC0yMFwiPlxyXG4gICAgICA8aW5wdXRcclxuICAgICAgICB0eXBlPVwicmFkaW9cIlxyXG4gICAgICAgIGlkPVwidGltZUludGVydmFsQ2hhcnQtdGFiXCJcclxuICAgICAgICBuYW1lPVwic2V0dGluZ3MtZ3JvdXBcIlxyXG4gICAgICAgIDpjaGVja2VkPVwic2VsZWN0ZWRUYWIgPT0gU2V0dGluZ3NUYWIuRGFzaGJvYXJkIHx8IHNlbGVjdGVkVGFiID09IFNldHRpbmdzVGFiLldlYnNpdGVTdGF0c1wiXHJcbiAgICAgICAgdi1vbjpjaGFuZ2U9XCJzZWxlY3RUYWIoU2V0dGluZ3NUYWIuRGFzaGJvYXJkKVwiXHJcbiAgICAgIC8+XHJcbiAgICAgIDxsYWJlbCBuYW1lPVwidGFiTmFtZVwiIGZvcj1cInRpbWVJbnRlcnZhbENoYXJ0LXRhYlwiXHJcbiAgICAgICAgPjxpbWcgc3JjPVwiLi4vYXNzZXRzL2ljb25zL3MtZGFzaGJvYXJkLnN2Z1wiIGhlaWdodD1cIjMwXCIgLz57e1xyXG4gICAgICAgICAgdCgnZGFzaGJvYXJkLm1lc3NhZ2UnKVxyXG4gICAgICAgIH19PC9sYWJlbFxyXG4gICAgICA+XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzPVwic2V0dGluZ3MtY29udGVudFwiPlxyXG4gICAgICAgIDxEYXNoYm9hZENvbnRhaW5lclxyXG4gICAgICAgICAgdi1pZj1cInNlbGVjdGVkVGFiID09IFNldHRpbmdzVGFiLkRhc2hib2FyZCB8fCBzZWxlY3RlZFRhYiA9PSBTZXR0aW5nc1RhYi5XZWJzaXRlU3RhdHNcIlxyXG4gICAgICAgICAgOnR5cGU9XCJzZWxlY3RlZFRhYlwiXHJcbiAgICAgICAgICA6ZG9tYWluPVwic2VsZWN0ZWRXZWJzaXRlXCJcclxuICAgICAgICAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG5cclxuICAgIDxkaXYgY2xhc3M9XCJzZXR0aW5ncy10YWJcIj5cclxuICAgICAgPGlucHV0XHJcbiAgICAgICAgdHlwZT1cInJhZGlvXCJcclxuICAgICAgICBpZD1cIndoaXRlLWxpc3QtdGFiXCJcclxuICAgICAgICBuYW1lPVwic2V0dGluZ3MtZ3JvdXBcIlxyXG4gICAgICAgIDpjaGVja2VkPVwic2VsZWN0ZWRUYWIgPT0gU2V0dGluZ3NUYWIuV2hpdGVMaXN0XCJcclxuICAgICAgICB2LW9uOmNoYW5nZT1cInNlbGVjdFRhYihTZXR0aW5nc1RhYi5XaGl0ZUxpc3QpXCJcclxuICAgICAgLz5cclxuICAgICAgPGxhYmVsIG5hbWU9XCJ0YWJOYW1lXCIgZm9yPVwid2hpdGUtbGlzdC10YWJcIlxyXG4gICAgICAgID48aW1nIHNyYz1cIi4uL2Fzc2V0cy9pY29ucy9zLXdoaXRlbGlzdC5zdmdcIiBoZWlnaHQ9XCIzMFwiIC8+e3tcclxuICAgICAgICAgIHQoJ3doaXRlTGlzdFNldHRpbmdzLm1lc3NhZ2UnKVxyXG4gICAgICAgIH19PC9sYWJlbFxyXG4gICAgICA+XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzPVwic2V0dGluZ3MtY29udGVudFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJtYWluXCI+XHJcbiAgICAgICAgICA8V2hpdGVMaXN0IHYtaWY9XCJzZWxlY3RlZFRhYiA9PSBTZXR0aW5nc1RhYi5XaGl0ZUxpc3RcIiAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG5cclxuICAgIDxkaXYgY2xhc3M9XCJzZXR0aW5ncy10YWJcIj5cclxuICAgICAgPGlucHV0XHJcbiAgICAgICAgdHlwZT1cInJhZGlvXCJcclxuICAgICAgICBpZD1cImxpbWl0cy10YWJcIlxyXG4gICAgICAgIG5hbWU9XCJzZXR0aW5ncy1ncm91cFwiXHJcbiAgICAgICAgOmNoZWNrZWQ9XCJzZWxlY3RlZFRhYiA9PSBTZXR0aW5nc1RhYi5MaW1pdHNcIlxyXG4gICAgICAgIHYtb246Y2hhbmdlPVwic2VsZWN0VGFiKFNldHRpbmdzVGFiLkxpbWl0cylcIlxyXG4gICAgICAvPlxyXG4gICAgICA8bGFiZWwgbmFtZT1cInRhYk5hbWVcIiBmb3I9XCJsaW1pdHMtdGFiXCJcclxuICAgICAgICA+PGltZyBzcmM9XCIuLi9hc3NldHMvaWNvbnMvcy1saW1pdHMuc3ZnXCIgaGVpZ2h0PVwiMzBcIiAvPnt7XHJcbiAgICAgICAgICB0KCdsaW1pdHNTZXR0aW5ncy5tZXNzYWdlJylcclxuICAgICAgICB9fTwvbGFiZWxcclxuICAgICAgPlxyXG5cclxuICAgICAgPGRpdiBjbGFzcz1cInNldHRpbmdzLWNvbnRlbnRcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwibWFpblwiPlxyXG4gICAgICAgICAgPExpbWl0cyB2LWlmPVwic2VsZWN0ZWRUYWIgPT0gU2V0dGluZ3NUYWIuTGltaXRzXCIgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgY2xhc3M9XCJzZXR0aW5ncy10YWJcIj5cclxuICAgICAgPGlucHV0XHJcbiAgICAgICAgdHlwZT1cInJhZGlvXCJcclxuICAgICAgICBpZD1cIm5vdGlmaWNhdGlvbi10YWJcIlxyXG4gICAgICAgIG5hbWU9XCJzZXR0aW5ncy1ncm91cFwiXHJcbiAgICAgICAgOmNoZWNrZWQ9XCJzZWxlY3RlZFRhYiA9PSBTZXR0aW5nc1RhYi5Ob3RpZmljYXRpb25zXCJcclxuICAgICAgICB2LW9uOmNoYW5nZT1cInNlbGVjdFRhYihTZXR0aW5nc1RhYi5Ob3RpZmljYXRpb25zKVwiXHJcbiAgICAgIC8+XHJcbiAgICAgIDxsYWJlbCBuYW1lPVwidGFiTmFtZVwiIGZvcj1cIm5vdGlmaWNhdGlvbi10YWJcIlxyXG4gICAgICAgID48aW1nIHNyYz1cIi4uL2Fzc2V0cy9pY29ucy9zLW5vdGlmaWNhdGlvbnMuc3ZnXCIgaGVpZ2h0PVwiMzBcIiAvPnt7XHJcbiAgICAgICAgICB0KCdub3RpZmljYXRpb25zU2V0dGluZ3MubWVzc2FnZScpXHJcbiAgICAgICAgfX08L2xhYmVsXHJcbiAgICAgID5cclxuXHJcbiAgICAgIDxkaXYgY2xhc3M9XCJzZXR0aW5ncy1jb250ZW50XCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cIm1haW5cIj5cclxuICAgICAgICAgIDxEYWlseU5vdGlmaWNhdGlvbnMgdi1pZj1cInNlbGVjdGVkVGFiID09IFNldHRpbmdzVGFiLk5vdGlmaWNhdGlvbnNcIiAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG5cclxuICAgIDxkaXYgY2xhc3M9XCJzZXR0aW5ncy10YWJcIj5cclxuICAgICAgPGlucHV0XHJcbiAgICAgICAgdHlwZT1cInJhZGlvXCJcclxuICAgICAgICBpZD1cInBvbW9kb3JvLXRhYlwiXHJcbiAgICAgICAgbmFtZT1cInNldHRpbmdzLWdyb3VwXCJcclxuICAgICAgICA6Y2hlY2tlZD1cInNlbGVjdGVkVGFiID09IFNldHRpbmdzVGFiLlBvbW9kb3JvXCJcclxuICAgICAgICB2LW9uOmNoYW5nZT1cInNlbGVjdFRhYihTZXR0aW5nc1RhYi5Qb21vZG9ybylcIlxyXG4gICAgICAvPlxyXG4gICAgICA8bGFiZWwgbmFtZT1cInRhYk5hbWVcIiBmb3I9XCJwb21vZG9yby10YWJcIlxyXG4gICAgICAgID48aW1nIHNyYz1cIi4uL2Fzc2V0cy9pY29ucy9wb21vZG9yby5zdmdcIiBoZWlnaHQ9XCIzMFwiIC8+e3tcclxuICAgICAgICAgIHQoJ3BvbW9kb3JvTW9kZS5tZXNzYWdlJylcclxuICAgICAgICB9fTwvbGFiZWxcclxuICAgICAgPlxyXG5cclxuICAgICAgPGRpdiBjbGFzcz1cInNldHRpbmdzLWNvbnRlbnRcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwibWFpblwiPlxyXG4gICAgICAgICAgPFBvbW9kb3JvIHYtaWY9XCJzZWxlY3RlZFRhYiA9PSBTZXR0aW5nc1RhYi5Qb21vZG9yb1wiIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcblxyXG4gICAgPGRpdiBjbGFzcz1cInNldHRpbmdzLXRhYlwiPlxyXG4gICAgICA8aW5wdXRcclxuICAgICAgICB0eXBlPVwicmFkaW9cIlxyXG4gICAgICAgIGlkPVwiZ2VuZXJhbC10YWJcIlxyXG4gICAgICAgIG5hbWU9XCJzZXR0aW5ncy1ncm91cFwiXHJcbiAgICAgICAgOmNoZWNrZWQ9XCJzZWxlY3RlZFRhYiA9PSBTZXR0aW5nc1RhYi5HZW5lcmFsU2V0dGluZ3NcIlxyXG4gICAgICAgIHYtb246Y2hhbmdlPVwic2VsZWN0VGFiKFNldHRpbmdzVGFiLkdlbmVyYWxTZXR0aW5ncylcIlxyXG4gICAgICAvPlxyXG4gICAgICA8bGFiZWwgbmFtZT1cInRhYk5hbWVcIiBmb3I9XCJnZW5lcmFsLXRhYlwiXHJcbiAgICAgICAgPjxpbWcgc3JjPVwiLi4vYXNzZXRzL2ljb25zL3Mtc2V0dGluZ3Muc3ZnXCIgaGVpZ2h0PVwiMzBcIiAvPnt7XHJcbiAgICAgICAgICB0KCdnZW5lcmFsU2V0dGluZ3MubWVzc2FnZScpXHJcbiAgICAgICAgfX08L2xhYmVsXHJcbiAgICAgID5cclxuXHJcbiAgICAgIDxkaXYgY2xhc3M9XCJzZXR0aW5ncy1jb250ZW50XCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cIm1haW5cIj5cclxuICAgICAgICAgIDxHZW5lcmFsU2V0dGluZ3Mgdi1pZj1cInNlbGVjdGVkVGFiID09IFNldHRpbmdzVGFiLkdlbmVyYWxTZXR0aW5nc1wiIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcblxyXG4gICAgPGRpdiBjbGFzcz1cInNldHRpbmdzLXRhYlwiPlxyXG4gICAgICA8aW5wdXRcclxuICAgICAgICB0eXBlPVwicmFkaW9cIlxyXG4gICAgICAgIGlkPVwiYWJvdXQtdGFiXCJcclxuICAgICAgICBuYW1lPVwic2V0dGluZ3MtZ3JvdXBcIlxyXG4gICAgICAgIDpjaGVja2VkPVwic2VsZWN0ZWRUYWIgPT0gU2V0dGluZ3NUYWIuQWJvdXRcIlxyXG4gICAgICAgIHYtb246Y2hhbmdlPVwic2VsZWN0VGFiKFNldHRpbmdzVGFiLkFib3V0KVwiXHJcbiAgICAgIC8+XHJcbiAgICAgIDxsYWJlbCBjbGFzcz1cImFib3V0XCIgbmFtZT1cInRhYk5hbWVcIiBmb3I9XCJhYm91dC10YWJcIlxyXG4gICAgICAgID48aW1nIHNyYz1cIi4uL2Fzc2V0cy9pY29ucy9zLWFib3V0LnN2Z1wiIGhlaWdodD1cIjMwXCIgLz57e1xyXG4gICAgICAgICAgdCgnYWJvdXRTZXR0aW5ncy5tZXNzYWdlJylcclxuICAgICAgICB9fTwvbGFiZWxcclxuICAgICAgPlxyXG5cclxuICAgICAgPGRpdiBjbGFzcz1cInNldHRpbmdzLWNvbnRlbnRcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwibWFpblwiPlxyXG4gICAgICAgICAgPEFib3V0IHYtaWY9XCJzZWxlY3RlZFRhYiA9PSBTZXR0aW5nc1RhYi5BYm91dFwiIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcblxyXG4gICAgPGRpdiBjbGFzcz1cInNldHRpbmdzLXRhYlwiPlxyXG4gICAgICA8aW5wdXRcclxuICAgICAgICB0eXBlPVwicmFkaW9cIlxyXG4gICAgICAgIGlkPVwiZG9uYXRlLXRhYlwiXHJcbiAgICAgICAgbmFtZT1cInNldHRpbmdzLWdyb3VwXCJcclxuICAgICAgICA6Y2hlY2tlZD1cInNlbGVjdGVkVGFiID09IFNldHRpbmdzVGFiLkRvbmF0ZVwiXHJcbiAgICAgICAgdi1vbjpjaGFuZ2U9XCJzZWxlY3RUYWIoU2V0dGluZ3NUYWIuRG9uYXRlKVwiXHJcbiAgICAgIC8+XHJcbiAgICAgIDxsYWJlbCBuYW1lPVwidGFiTmFtZVwiIGZvcj1cImRvbmF0ZS10YWJcIiBjbGFzcz1cImRvbmF0ZVwiXHJcbiAgICAgICAgPjxpbWcgc3JjPVwiLi4vYXNzZXRzL2ljb25zL2RvbmF0ZS5wbmdcIiBoZWlnaHQ9XCIzMFwiIC8+e3sgdCgnZG9uYXRlLm1lc3NhZ2UnKSB9fTwvbGFiZWxcclxuICAgICAgPlxyXG5cclxuICAgICAgPGRpdiBjbGFzcz1cInNldHRpbmdzLWNvbnRlbnRcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwibWFpblwiPlxyXG4gICAgICAgICAgPERvbmF0aW9uIHYtaWY9XCJzZWxlY3RlZFRhYiA9PSBTZXR0aW5nc1RhYi5Eb25hdGVcIiAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG5cclxuICAgIDxQcm9tb0NsZWFuWW91dHViZU1vZGFsIC8+XHJcbiAgPC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0IGxhbmc9XCJ0c1wiIHNldHVwPlxyXG5pbXBvcnQgeyBvbk1vdW50ZWQsIHJlZiwgd2F0Y2ggfSBmcm9tICd2dWUnO1xyXG5pbXBvcnQgeyB1c2VJMThuIH0gZnJvbSAndnVlLWkxOG4nO1xyXG5pbXBvcnQgR2VuZXJhbFNldHRpbmdzIGZyb20gJy4uL2NvbXBvbmVudHMvR2VuZXJhbFNldHRpbmdzLnZ1ZSc7XHJcbmltcG9ydCBQcm9tb0NsZWFuWW91dHViZU1vZGFsIGZyb20gJy4uL2NvbXBvbmVudHMvUHJvbW9DbGVhbllvdXR1YmVNb2RhbC52dWUnO1xyXG5pbXBvcnQgV2hpdGVMaXN0IGZyb20gJy4uL2NvbXBvbmVudHMvV2hpdGVMaXN0LnZ1ZSc7XHJcbmltcG9ydCBMaW1pdHMgZnJvbSAnLi4vY29tcG9uZW50cy9MaW1pdHMudnVlJztcclxuaW1wb3J0IERhaWx5Tm90aWZpY2F0aW9ucyBmcm9tICcuLi9jb21wb25lbnRzL05vdGlmaWNhdGlvbnMudnVlJztcclxuaW1wb3J0IFBvbW9kb3JvIGZyb20gJy4uL2NvbXBvbmVudHMvUG9tb2Rvcm8udnVlJztcclxuaW1wb3J0IEFib3V0IGZyb20gJy4uL2NvbXBvbmVudHMvQWJvdXQudnVlJztcclxuaW1wb3J0IHsgU2V0dGluZ3NUYWIgfSBmcm9tICcuLi91dGlscy9lbnVtcyc7XHJcbmltcG9ydCBEYXNoYm9hZENvbnRhaW5lciBmcm9tICcuLi9jb21wb25lbnRzL0Rhc2hib2FkQ29udGFpbmVyLnZ1ZSc7XHJcbmltcG9ydCB7IHVzZUV4dGVuc2lvblBhZ2UgfSBmcm9tICcuLi9jb21wb3NpdGlvbnMvdXNlRXh0ZW5zaW9uUGFnZSc7XHJcbmltcG9ydCB7IGdldEVudW1WYWx1ZVRhYiB9IGZyb20gJy4uL3V0aWxzL2V4dGVuc2lvbi10YWJzJztcclxuaW1wb3J0IHsgYXBwbHlEYXJrTW9kZSB9IGZyb20gJy4uL3V0aWxzL2RhcmstbW9kZSc7XHJcbmltcG9ydCB7IGluamVjdFN0b3JhZ2UgfSBmcm9tICcuLi9zdG9yYWdlL2luamVjdC1zdG9yYWdlJztcclxuaW1wb3J0IHsgU3RvcmFnZVBhcmFtcywgREFSS19NT0RFX0RFRkFVTFQgfSBmcm9tICcuLi9zdG9yYWdlL3N0b3JhZ2UtcGFyYW1zJztcclxuaW1wb3J0IERvbmF0aW9uIGZyb20gJy4uL2NvbXBvbmVudHMvRG9uYXRpb24udnVlJztcclxuXHJcbmNvbnN0IHsgdCB9ID0gdXNlSTE4bigpO1xyXG5jb25zdCBleHRlbnNpb25QYWdlID0gdXNlRXh0ZW5zaW9uUGFnZSgpO1xyXG5jb25zdCBzZXR0aW5nc1N0b3JhZ2UgPSBpbmplY3RTdG9yYWdlKCk7XHJcblxyXG5jb25zdCBzZWxlY3RlZFRhYiA9IHJlZjxTZXR0aW5nc1RhYj4oKTtcclxuY29uc3QgY3VycmVudFVybCA9IHJlZihuZXcgVVJMKGxvY2F0aW9uLmhyZWYpKTtcclxuY29uc3Qgc2VsZWN0ZWRXZWJzaXRlID0gcmVmPHN0cmluZz4oKTtcclxuY29uc3QgZGFya01vZGUgPSByZWY8Ym9vbGVhbj4oKTtcclxuXHJcbndhdGNoKGN1cnJlbnRVcmwsICgpID0+IHtcclxuICBnZXRDdXJyZW50VGFiKCk7XHJcbn0pO1xyXG5cclxub25Nb3VudGVkKGFzeW5jICgpID0+IHtcclxuICBkYXJrTW9kZS52YWx1ZSA9IGF3YWl0IHNldHRpbmdzU3RvcmFnZS5nZXRWYWx1ZShTdG9yYWdlUGFyYW1zLkRBUktfTU9ERSwgREFSS19NT0RFX0RFRkFVTFQpO1xyXG4gIGFwcGx5RGFya01vZGUoZGFya01vZGUudmFsdWUhKTtcclxuICBnZXRDdXJyZW50VGFiKCk7XHJcbn0pO1xyXG5cclxuZnVuY3Rpb24gZ2V0Q3VycmVudFRhYigpIHtcclxuICBjb25zdCB0YWJOYW1lID0gY3VycmVudFVybC52YWx1ZS5zZWFyY2hQYXJhbXMuZ2V0KCd0YWInKTtcclxuICBpZiAodGFiTmFtZSAhPSBudWxsICYmIHRhYk5hbWUgIT0gJycpIHtcclxuICAgIHNlbGVjdGVkVGFiLnZhbHVlID0gZ2V0RW51bVZhbHVlVGFiKHRhYk5hbWUpO1xyXG4gICAgY29uc3QgZG9tYWluID0gY3VycmVudFVybC52YWx1ZS5zZWFyY2hQYXJhbXMuZ2V0KCd3ZWJzaXRlJyk7XHJcbiAgICBpZiAoc2VsZWN0ZWRUYWIudmFsdWUgPT0gU2V0dGluZ3NUYWIuV2Vic2l0ZVN0YXRzKSB7XHJcbiAgICAgIGlmIChkb21haW4gIT0gbnVsbCAmJiBkb21haW4gIT0gJycpIHNlbGVjdGVkV2Vic2l0ZS52YWx1ZSA9IGRvbWFpbjtcclxuICAgICAgZWxzZSBzZWxlY3RlZFRhYi52YWx1ZSA9IFNldHRpbmdzVGFiLkRhc2hib2FyZDtcclxuICAgIH0gZWxzZSBpZiAoZG9tYWluICE9IG51bGwgJiYgZG9tYWluICE9ICcnKSB7XHJcbiAgICAgIHdpbmRvdy5oaXN0b3J5LnJlcGxhY2VTdGF0ZShcclxuICAgICAgICBsb2NhdGlvbi5ocmVmLFxyXG4gICAgICAgIGRvY3VtZW50LnRpdGxlLFxyXG4gICAgICAgIGxvY2F0aW9uLmhyZWYucmVwbGFjZShgJndlYnNpdGU9JHtkb21haW59YCwgJycpLFxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gc2VsZWN0VGFiKHZhbHVlOiBTZXR0aW5nc1RhYikge1xyXG4gIHNlbGVjdGVkVGFiLnZhbHVlID0gdmFsdWU7XHJcbiAgZXh0ZW5zaW9uUGFnZS51cGRhdGVUYWIodmFsdWUpO1xyXG4gIGN1cnJlbnRVcmwudmFsdWUgPSBuZXcgVVJMKGxvY2F0aW9uLmhyZWYpO1xyXG59XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlIHNjb3BlZD5cclxuLm1haW4ge1xyXG4gIHdpZHRoOiA4MCU7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG59XHJcbi5oZWFkZXItYmxvY2sge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHVuc2V0ICFpbXBvcnRhbnQ7XHJcbn1cclxuLmhlYWRlci1ibG9jayAudGl0bGUge1xyXG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XHJcbiAgbWFyZ2luLXRvcDogMTVweDtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxufVxyXG4uaGVhZGVyLWJsb2NrIC5sb2dvIHtcclxuICBtYXJnaW46IDEwcHggMTBweCAxMHB4IDE1cHg7XHJcbn1cclxuLnRhYi1zZXBhcmF0b3Ige1xyXG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gIGZvbnQtc2l6ZTogMTNweDtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG59XHJcbi5hYm91dCB7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIGJvdHRvbTogMjBweDtcclxufVxyXG4uZG9uYXRlIHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgYm90dG9tOiA3NXB4O1xyXG59XHJcbjwvc3R5bGU+XHJcbiIsImltcG9ydCBTZXR0aW5ncyBmcm9tICcuL3BhZ2VzL0Rhc2hib2FyZC52dWUnO1xyXG5pbXBvcnQgTm90aWZpY2F0aW9ucyBmcm9tICdAa3l2Zy92dWUzLW5vdGlmaWNhdGlvbic7XHJcbmltcG9ydCBWdWVEYXRlUGlja2VyIGZyb20gJ0B2dWVwaWMvdnVlLWRhdGVwaWNrZXInO1xyXG5pbXBvcnQgJ0B2dWVwaWMvdnVlLWRhdGVwaWNrZXIvZGlzdC9tYWluLmNzcyc7XHJcbmltcG9ydCB7IGNyZWF0ZUFwcCB9IGZyb20gJ3Z1ZSc7XHJcbmltcG9ydCBpMThuIGZyb20gJy4vcGx1Z2lucy9pMThuJztcclxuXHJcbmNvbnN0IGFwcCA9IGNyZWF0ZUFwcChTZXR0aW5ncyk7XHJcbmFwcC51c2UoTm90aWZpY2F0aW9ucyk7XHJcbmFwcC51c2UoaTE4bik7XHJcbmFwcC5jb21wb25lbnQoJ1Z1ZURhdGVQaWNrZXInLCBWdWVEYXRlUGlja2VyKTtcclxuYXBwLm1vdW50KCdib2R5Jyk7XHJcbiJdLCJuYW1lcyI6WyJ5IiwiYSIsImciLCJ4IiwiJCIsIlQiLCJwIiwiYiIsImsiLCJfIiwiQiIsIkQiLCJOIiwiSCIsIl9fZGVmYXVsdF9fIiwidXNlTm90aWZpY2F0aW9uIiwiX2NyZWF0ZUVsZW1lbnRWTm9kZSIsIl9ob2lzdGVkXzEiLCJfaG9pc3RlZF8yIiwiX3VucmVmIiwiX2hvaXN0ZWRfMyIsIl90b0Rpc3BsYXlTdHJpbmciLCJfaG9pc3RlZF80IiwiX2hvaXN0ZWRfNSIsIl9ob2lzdGVkXzYiLCJfaG9pc3RlZF83IiwiX2hvaXN0ZWRfOCIsIl9ob2lzdGVkXzkiLCJfaG9pc3RlZF8xMCIsIl9ob2lzdGVkXzExIiwiX2hvaXN0ZWRfMTIiLCJfaG9pc3RlZF8xMyIsIl9ob2lzdGVkXzE0IiwiX2hvaXN0ZWRfMTUiLCJfaG9pc3RlZF8xNiIsIl9ob2lzdGVkXzE3IiwiX2hvaXN0ZWRfMTgiLCJfaG9pc3RlZF8xOSIsIl9ob2lzdGVkXzIwIiwiX2hvaXN0ZWRfMjEiLCJfaG9pc3RlZF8yMiIsIl9ob2lzdGVkXzIzIiwiX2hvaXN0ZWRfMjQiLCJfY3JlYXRlVk5vZGUiLCJfaG9pc3RlZF8yNSIsIl9ob2lzdGVkXzI3IiwiX2hvaXN0ZWRfMjgiLCJfaG9pc3RlZF8yOSIsIl9ob2lzdGVkXzMxIiwiX2hvaXN0ZWRfMzIiLCJfaG9pc3RlZF8zMyIsIl9ob2lzdGVkXzM2IiwiX2hvaXN0ZWRfMzciLCJfaG9pc3RlZF8zOCIsIl9vcGVuQmxvY2siLCJfY3JlYXRlRWxlbWVudEJsb2NrIiwiX2hvaXN0ZWRfMzkiLCJfaG9pc3RlZF80MCIsIl9pbXBvcnRzXzAiLCJfRnJhZ21lbnQiLCJfcmVuZGVyTGlzdCIsInRpbWUiLCJfaW1wb3J0c18xIiwiX2NyZWF0ZVRleHRWTm9kZSIsIl9jcmVhdGVCbG9jayIsIl9ub3JtYWxpemVDbGFzcyIsIkFwcCIsImFwcCIsIk5vRGF0YUJ5RGF5cyIsImFzY2VuZGluZyIsImYiLCJkIiwiemVybyIsImxlZnQiLCJyaWdodCIsImNlbnRlciIsIm51bWJlciIsInN0YXJ0IiwidGlja3MiLCJ0aWNrRm9ybWF0IiwiYXhpcyIsImZvcm1hdCIsImlkZW50aXR5Iiwic2VsZWN0aW9uIiwicGFyc2VUeXBlbmFtZXMiLCJnZXQiLCJzZXQiLCJjb3B5IiwiZG9jdW1lbnQiLCJzZWxlY3RvciIsInNlbGVjdCIsIm0iLCJqIiwiU2VsZWN0aW9uIiwiZGF0dW0iLCJjb25zdGFudCIsImF0dHJSZW1vdmUiLCJhdHRyUmVtb3ZlTlMiLCJhdHRyQ29uc3RhbnQiLCJhdHRyQ29uc3RhbnROUyIsImF0dHJGdW5jdGlvbiIsInYiLCJhdHRyRnVuY3Rpb25OUyIsInN0eWxlUmVtb3ZlIiwic3R5bGVDb25zdGFudCIsInN0eWxlRnVuY3Rpb24iLCJ0ZXh0Q29uc3RhbnQiLCJ0ZXh0RnVuY3Rpb24iLCJjcmVhdGUiLCJ3aW5kb3ciLCJoIiwibGluZWFyIiwiY29sb3IiLCJyZ2IiLCJjb2xvclJnYiIsInZhbHVlIiwicSIsImkiLCJzdHJpbmciLCJ0aW1lb3V0Iiwibm93IiwiaWQiLCJzY2hlZHVsZSIsImVtcHR5IiwiaW50ZXJwb2xhdGUiLCJpbnRlcnBvbGF0ZVRyYW5zZm9ybSIsImNoaWxkcmVuIiwiaW5oZXJpdCIsInN0eWxlIiwicmVtb3ZlIiwiZWFzZUN1YmljSW5PdXQiLCJleHBvbmVudCIsImxvY2FsZSIsImZvcm1hdFByZWZpeCIsImludGVycG9sYXRlVmFsdWUiLCJsb2NhdGlvbiIsIk1pblZhbHVlIiwiaW50ZXJ2YWwiLCJkMy5zZWxlY3QiLCJkYXRhIiwiZDMuc2NhbGVMaW5lYXIiLCJkMy5heGlzTGVmdCIsImQzLmF4aXNCb3R0b20iLCJDaGFydEpTIiwiVGl0bGUiLCJUb29sdGlwIiwiTGVnZW5kIiwiYXJyYXkiLCJUeXBlT2ZDaGFydCIsIkhvdXJseUNoYXJ0IiwiX2ltcG9ydHNfMiIsIl9pbXBvcnRzXzMiLCJOb3RpZmljYXRpb25zIiwiVnVlRGF0ZVBpY2tlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUEsTUFBZSxlQUFBO0FDQWYsTUFBZSxlQUFBO0FDQWYsTUFBZSxlQUFBO0FDQWYsTUFBZSxhQUFBO0FDQWYsTUFBZSxhQUFBO0FDQWYsTUFBZSxhQUFBO0FDQWYsTUFBZSxhQUFBO0FDQ2YsU0FBUyxFQUFFLEdBQUc7QUFDWixTQUFPLEVBQUUsS0FBSyxJQUFJLEtBQXFCLG9CQUFJLElBQUcsR0FBSSxJQUFJLFNBQVMsR0FBRyxHQUFHO0FBQ25FLFFBQUksSUFBSSxFQUFFLElBQUksQ0FBQztBQUNmLFFBQUksRUFBRSxLQUFLLENBQUMsSUFBSSxFQUFFLElBQUksR0FBRyxDQUFDLENBQUMsQ0FBQztBQUFBLEVBQ2hDLEdBQUssS0FBSyxTQUFTLEdBQUcsR0FBRztBQUNyQixRQUFJLElBQUksRUFBRSxJQUFJLENBQUM7QUFDZixVQUFNLElBQUksRUFBRSxPQUFPLEVBQUUsUUFBUSxDQUFDLE1BQU0sR0FBRyxDQUFDLElBQUksRUFBRSxJQUFJLEdBQUcsQ0FBRSxDQUFBO0FBQUEs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LE9BQU87QUFBQSxFQUNQLFFBQVE7QUFBQSxFQUNSLE9BQU87QUFBQSxFQUNQLGdCQUFnQjtBQUFBLEVBQ2hCLE1BQU07QUFBQSxFQUNOLFlBQVk7QUFBQSxFQUNaLE9BQU87QUFBQSxFQUNQLFdBQVc7QUFBQSxFQUNYLFdBQVc7QUFBQSxFQUNYLFlBQVk7QUFBQSxFQUNaLFdBQVc7QUFBQSxFQUNYLE9BQU87QUFBQSxFQUNQLGdCQUFnQjtBQUFBLEVBQ2hCLFVBQVU7QUFBQSxFQUNWLFNBQVM7QUFBQSxFQUNULE1BQU07QUFBQSxFQUNOLFVBQVU7QUFBQSxFQUNWLFVBQVU7QUFBQSxFQUNWLGVBQWU7QUFBQSxFQUNmLFVBQVU7QUFBQSxFQUNWLFdBQVc7QUFBQSxFQUNYLFVBQVU7QUFBQSxFQUNWLFdBQVc7QUFBQSxFQUNYLGFBQWE7QUFBQSxFQUNiLGdCQUFnQjtBQUFBLEVBQ2hCLFlBQVk7QUFBQSxFQUNaLFlBQVk7QUFBQSxFQUNaLFNBQVM7QUFBQSxFQUNULFlBQVk7QUFBQSxFQUNaLGNBQWM7QUFBQSxFQUNkLGVBQWU7QUFBQSxFQUNmLGVBQWU7QUFBQSxFQUNmLGVBQWU7QUFBQSxFQUNmLGVBQWU7QUFBQSxFQUNmLFlBQVk7QUFBQSxFQUNaLFVBQVU7QUFBQSxFQUNWLGFBQWE7QUFBQSxFQUNiLFNBQVM7QUFBQSxFQUNULFNBQVM7QUFBQSxFQUNULFlBQVk7QUFBQSxFQUNaLFdBQVc7QUFBQSxFQUNYLGFBQWE7QUFBQSxFQUNiLGFBQWE7QUFBQSxFQUNiLFNBQVM7QUFBQSxFQUNULFdBQVc7QUFBQSxFQUNYLFlBQVk7QUFBQSxFQUNaLE1BQU07QUFBQSxFQUNOLFdBQVc7QUFBQSxFQUNYLE1BQU07QUFBQSxFQUNOLE9BQU87QUFBQSxFQUNQLGFBQWE7QUFBQSxFQUNiLE1BQU07QUFBQSxFQUNOLFVBQVU7QUFBQSxFQUNWLFNBQVM7QUFBQSxFQUNULFdBQVc7QUFBQSxFQUNYLFFBQVE7QUFBQSxFQUNSLE9BQU87QUFBQSxFQUNQLE9BQU87QUFBQSxFQUNQLFVBQVU7QUFBQSxFQUNWLGVBQWU7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LE1BQU0sS0FBS1YsT0FBTSxNQUFNLElBQUlVLEdBQUUsQ0FBQyxFQUFFLFFBQVFBLEtBQUksU0FBU0EsR0FBRSxDQUFDLEdBQUcsRUFBRSxHQUFHLE1BQU0sSUFBSSxLQUFLQSxFQUFDLElBQ3RGLE1BQU0sSUFBSSxJQUFJLElBQUtBLE1BQUssSUFBSSxLQUFRQSxNQUFLLElBQUksS0FBUUEsTUFBSyxJQUFJLEtBQVFBLEtBQUksTUFBU0EsS0FBSSxPQUFRLElBQU1BLEtBQUksSUFBTSxDQUFDLElBQ2hILE1BQU0sSUFBSSxLQUFLQSxNQUFLLEtBQUssS0FBTUEsTUFBSyxLQUFLLEtBQU1BLE1BQUssSUFBSSxNQUFPQSxLQUFJLE9BQVEsR0FBSSxJQUMvRSxNQUFNLElBQUksS0FBTUEsTUFBSyxLQUFLLEtBQVFBLE1BQUssSUFBSSxLQUFRQSxNQUFLLElBQUksS0FBUUEsTUFBSyxJQUFJLEtBQVFBLE1BQUssSUFBSSxLQUFRQSxLQUFJLE9BQVVBLEtBQUksT0FBUSxJQUFNQSxLQUFJLE1BQVEsR0FBSSxJQUN0SixTQUNDQSxLQUFJLGFBQWEsS0FBS1YsT0FBTSxLQUFLLElBQUksSUFBSVUsR0FBRSxDQUFDLEdBQUdBLEdBQUUsQ0FBQyxHQUFHQSxHQUFFLENBQUMsR0FBRyxDQUFDLEtBQzVEQSxLQUFJLGFBQWEsS0FBS1YsT0FBTSxLQUFLLElBQUksSUFBSVUsR0FBRSxDQUFDLElBQUksTUFBTSxLQUFLQSxHQUFFLENBQUMsSUFBSSxNQUFNLEtBQUtBLEdBQUUsQ0FBQyxJQUFJLE1BQU0sS0FBSyxDQUFDLEtBQ2hHQSxLQUFJLGNBQWMsS0FBS1YsT0FBTSxLQUFLLEtBQUtVLEdBQUUsQ0FBQyxHQUFHQSxHQUFFLENBQUMsR0FBR0EsR0FBRSxDQUFDLEdBQUdBLEdBQUUsQ0FBQyxDQUFDLEtBQzdEQSxLQUFJLGNBQWMsS0FBS1YsT0FBTSxLQUFLLEtBQUtVLEdBQUUsQ0FBQyxJQUFJLE1BQU0sS0FBS0EsR0FBRSxDQUFDLElBQUksTUFBTSxLQUFLQSxHQUFFLENBQUMsSUFBSSxNQUFNLEtBQUtBLEdBQUUsQ0FBQyxDQUFDLEtBQ2pHQSxLQUFJLGFBQWEsS0FBS1YsT0FBTSxLQUFLLEtBQUtVLEdBQUUsQ0FBQyxHQUFHQSxHQUFFLENBQUMsSUFBSSxLQUFLQSxHQUFFLENBQUMsSUFBSSxLQUFLLENBQUMsS0FDckVBLEtBQUksY0FBYyxLQUFLVixPQUFNLEtBQUssS0FBS1UsR0FBRSxDQUFDLEdBQUdBLEdBQUUsQ0FBQyxJQUFJLEtBQUtBLEdBQUUsQ0FBQyxJQUFJLEtBQUtBLEdBQUUsQ0FBQyxDQUFDLElBQzFFLE1BQU0sZUFBZVYsT0FBTSxJQUFJLEtBQUssTUFBTUEsT0FBTSxDQUFDLElBQ2pEQSxZQUFXLGdCQUFnQixJQUFJLElBQUksS0FBSyxLQUFLLEtBQUssQ0FBQyxJQUNuRDtBQUNSO0FBRUEsU0FBUyxLQUFLLEdBQUc7QUFDZixTQUFPLElBQUksSUFBSSxLQUFLLEtBQUssS0FBTSxLQUFLLElBQUksS0FBTSxJQUFJLEtBQU0sQ0FBQztBQUMzRDtBQUVBLFNBQVMsS0FBSyxHQUFHLEdBQUcsR0FBRyxHQUFHO0FBQ3hCLE1BQUksS0FBSztBQUFHLFFBQUksSUFBSSxJQUFJO0FBQ3hCLFNBQU8sSUFBSSxJQUFJLEdBQUcsR0FBRyxHQUFHLENBQUM7QUFDM0I7QUFFTyxTQUFTLFdBQVcsR0FBRztBQUM1QixNQUFJLEVBQUUsYUFBYTtBQUFRLFFBQUksTUFBTSxDQUFDO0FBQ3RDLE1BQUksQ0FBQztBQUFHLFdBQU8sSUFBSTtBQUNuQixNQUFJLEVBQUU7QUFDTixTQUFPLElBQUksSUFBSSxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLE9BQU87QUFDekM7QUFFTyxTQUFTLElBQUksR0FBRyxHQUFHLEdBQUcsU0FBUztBQUNwQyxTQUFPLFVBQVUsV0FBVyxJQUFJLFdBQVcsQ0FBQyxJQUFJLElBQUksSUFBSSxHQUFHLEdBQUcsR0FBRyxXQUFXLE9BQU8sSUFBSSxPQUFPO0FBQ2hHO0FBRU8sU0FBUyxJQUFJLEdBQUcsR0FBRyxHQUFHLFNBQVM7QUFDcEMsT0FBSyxJQUFJLENBQUM7QUFDVixPQUFLLElBQUksQ0FBQztBQUNWLE9BQUssSUFBSSxDQUFDO0FBQ1YsT0FBSyxVQUFVLENBQUM7QUFDbEI7QUFFQSxPQUFPLEtBQUssS0FBSyxPQUFPLE9BQU87QUFBQSxFQUM3QixTQUFTLEdBQUc7QUFDVixRQUFJLEtBQUssT0FBTyxXQUFXLEtBQUssSUFBSSxVQUFVLENBQUM7QUFDL0MsV0FBTyxJQUFJLElBQUksS0FBSyxJQUFJLEdBQUcsS0FBSyxJQUFJLEdBQUcsS0FBSyxJQUFJLEdBQUcsS0FBSyxPQUFPO0FBQUEsRUFDaEU7QUFBQSxFQUNELE9BQU8sR0FBRztBQUNSLFFBQUksS0FBSyxPQUFPLFNBQVMsS0FBSyxJQUFJLFFBQVEsQ0FBQztBQUMzQyxXQUFPLElBQUksSUFBSSxLQUFLLElBQUksR0FBRyxLQUFLLElBQUksR0FBRyxLQUFLLElBQUksR0FBRyxLQUFLLE9BQU87QUFBQSxFQUNoRTtBQUFBLEVBQ0QsTUFBTTtBQUNKLFdBQU87QUFBQSxFQUNSO0FBQUEsRUFDRCxRQUFRO0FBQ04sV0FBTyxJQUFJLElBQUksT0FBTyxLQUFLLENBQUMsR0FBRyxPQUFPLEtBQUssQ0FBQyxHQUFHLE9BQU8sS0FBSyxDQUFDLEdBQUcsT0FBTyxLQUFLLE9BQU8sQ0FBQztBQUFBLEVBQ3BGO0FBQUEsRUFDRCxjQUFjO0FBQ1osV0FBUSxRQUFRLEtBQUssS0FBSyxLQUFLLElBQUksVUFDM0IsUUFBUSxLQUFLLEtBQUssS0FBSyxJQUFJLFdBQzNCLFFBQVEsS0FBSyxLQUFLLEtBQUssSUFBSSxXQUMzQixLQUFLLEtBQUssV0FBVyxLQUFLLFdBQVc7QUFBQSxFQUM5QztBQUFBLEVBQ0QsS0FBSztBQUFBO0FBQUEsRUFDTCxXQUFXO0FBQUEsRUFDWCxZQUFZO0FBQUEsRUFDWixXQUFXO0FBQUEsRUFDWCxVQUFVO0FBQ1osQ0FBQyxDQUFDO0FBRUYsU0FBUyxnQkFBZ0I7QUFDdkIsU0FBTyxJQUFJLElBQUksS0FBSyxDQUFDLENBQUMsR0FBRyxJQUFJLEtBQUssQ0FBQyxDQUFDLEdBQUcsSUFBSSxLQUFLLENBQUMsQ0FBQztBQUNwRDtBQUVBLFNBQVMsaUJBQWlCO0FBQ3hCLFNBQU8sSUFBSSxJQUFJLEtBQUssQ0FBQyxDQUFDLEdBQUcsSUFBSSxLQUFLLENBQUMsQ0FBQyxHQUFHLElBQUksS0FBSyxDQUFDLENBQUMsR0FBRyxLQUFLLE1BQU0sS0FBSyxPQUFPLElBQUksSUFBSSxLQUFLLFdBQVcsR0FBRyxDQUFDO0FBQzFHO0FBRUEsU0FBUyxnQkFBZ0I7QUFDdkIsUUFBTSxJQUFJLE9BQU8sS0FBSyxPQUFPO0FBQzdCLFNBQU8sR0FBRyxNQUFNLElBQUksU0FBUyxPQUFPLEdBQUcsT0FBTyxLQUFLLENBQUMsQ0FBQyxLQUFLLE9BQU8sS0FBSyxDQUFDLENBQUMsS0FBSyxPQUFPLEtBQUssQ0FBQyxDQUFDLEdBQUcsTUFBTSxJQUFJLE1BQU0sS0FBSyxDQUFDLEdBQUc7QUFDekg7QUFFQSxTQUFTLE9BQU8sU0FBUztBQUN2QixTQUFPLE1BQU0sT0FBTyxJQUFJLElBQUksS0FBSyxJQUFJLEdBQUcsS0FBSyxJQUFJLEdBQUcsT0FBTyxDQUFDO0FBQzlEO0FBRUEsU0FBUyxPQUFPLE9BQU87QUFDckIsU0FBTyxLQUFLLElBQUksR0FBRyxLQUFLLElBQUksS0FBSyxLQUFLLE1BQU0sS0FBSyxLQUFLLENBQUMsQ0FBQztBQUMxRDtBQUVBLFNBQVMsSUFBSSxPQUFPO0FBQ2xCLFVBQVEsT0FBTyxLQUFLO0FBQ3BCLFVBQVEsUUFBUSxLQUFLLE1BQU0sTUFBTSxNQUFNLFNBQVMsRUFBRTtBQUNwRDtBQUVBLFNBQVMsS0FBSzZCLElBQUcsR0FBRyxHQUFHLEdBQUc7QUFDeEIsTUFBSSxLQUFLO0FBQUcsSUFBQUEsS0FBSSxJQUFJLElBQUk7QUFBQSxXQUNmLEtBQUssS0FBSyxLQUFLO0FBQUcsSUFBQUEsS0FBSSxJQUFJO0FBQUEsV0FDMUIsS0FBSztBQUFHLElBQUFBLEtBQUk7QUFDckIsU0FBTyxJQUFJLElBQUlBLElBQUcsR0FBRyxHQUFHLENBQUM7QUFDM0I7QUFFTyxTQUFTLFdBQVcsR0FBRztBQUM1QixNQUFJLGFBQWE7QUFBSyxXQUFPLElBQUksSUFBSSxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLE9BQU87QUFDN0QsTUFBSSxFQUFFLGFBQWE7QUFBUSxRQUFJLE1BQU0sQ0FBQztBQUN0QyxNQUFJLENBQUM7QUFBRyxXQUFPLElBQUk7QUFDbkIsTUFBSSxhQUFhO0FBQUssV0FBTztBQUM3QixNQUFJLEVBQUU7QUFDTixNQUFJLElBQUksRUFBRSxJQUFJLEtBQ1YsSUFBSSxFQUFFLElBQUksS0FDVixJQUFJLEVBQUUsSUFBSSxLQUNWLE1BQU0sS0FBSyxJQUFJLEdBQUcsR0FBRyxDQUFDLEdBQ3RCLE1BQU0sS0FBSyxJQUFJLEdBQUcsR0FBRyxDQUFDLEdBQ3RCQSxLQUFJLEtBQ0osSUFBSSxNQUFNLEtBQ1YsS0FBSyxNQUFNLE9BQU87QUFDdEIsTUFBSSxHQUFHO0FBQ0wsUUFBSSxNQUFNO0FBQUssTUFBQUEsTUFBSyxJQUFJLEtBQUssS0FBSyxJQUFJLEtBQUs7QUFBQSxhQUNsQyxNQUFNO0FBQUssTUFBQUEsTUFBSyxJQUFJLEtBQUssSUFBSTtBQUFBO0FBQ2pDLE1BQUFBLE1BQUssSUFBSSxLQUFLLElBQUk7QUFDdkIsU0FBSyxJQUFJLE1BQU0sTUFBTSxNQUFNLElBQUksTUFBTTtBQUNyQyxJQUFBQSxNQUFLO0FBQUEsRUFDVCxPQUFTO0FBQ0wsUUFBSSxJQUFJLEtBQUssSUFBSSxJQUFJLElBQUlBO0FBQUEsRUFDMUI7QUFDRCxTQUFPLElBQUksSUFBSUEsSUFBRyxHQUFHLEdBQUcsRUFBRSxPQUFPO0FBQ25DO0FBRU8sU0FBUyxJQUFJQSxJQUFHLEdBQUcsR0FBRyxTQUFTO0FBQ3BDLFNBQU8sVUFBVSxXQUFXLElBQUksV0FBV0EsRUFBQyxJQUFJLElBQUksSUFBSUEsSUFBRyxHQUFHLEdBQUcsV0FBVyxPQUFPLElBQUksT0FBTztBQUNoRztBQUVBLFNBQVMsSUFBSUEsSUFBRyxHQUFHLEdBQUcsU0FBUztBQUM3QixPQUFLLElBQUksQ0FBQ0E7QUFDVixPQUFLLElBQUksQ0FBQztBQUNWLE9BQUssSUFBSSxDQUFDO0FBQ1YsT0FBSyxVQUFVLENBQUM7QUFDbEI7QUFFQSxPQUFPLEtBQUssS0FBSyxPQUFPLE9BQU87QUFBQSxFQUM3QixTQUFTLEdBQUc7QUFDVixRQUFJLEtBQUssT0FBTyxXQUFXLEtBQUssSUFBSSxVQUFVLENBQUM7QUFDL0MsV0FBTyxJQUFJLElBQUksS0FBSyxHQUFHLEtBQUssR0FBRyxLQUFLLElBQUksR0FBRyxLQUFLLE9BQU87QUFBQSxFQUN4RDtBQUFBLEVBQ0QsT0FBTyxHQUFHO0FBQ1IsUUFBSSxLQUFLLE9BQU8sU0FBUyxLQUFLLElBQUksUUFBUSxDQUFDO0FBQzNDLFdBQU8sSUFBSSxJQUFJLEtBQUssR0FBRyxLQUFLLEdBQUcsS0FBSyxJQUFJLEdBQUcsS0FBSyxPQUFPO0FBQUEsRUFDeEQ7QUFBQSxFQUNELE1BQU07QUFDSixRQUFJQSxLQUFJLEtBQUssSUFBSSxPQUFPLEtBQUssSUFBSSxLQUFLLEtBQ2xDLElBQUksTUFBTUEsRUFBQyxLQUFLLE1BQU0sS0FBSyxDQUFDLElBQUksSUFBSSxLQUFLLEdBQ3pDLElBQUksS0FBSyxHQUNULEtBQUssS0FBSyxJQUFJLE1BQU0sSUFBSSxJQUFJLEtBQUssR0FDakMsS0FBSyxJQUFJLElBQUk7QUFDakIsV0FBTyxJQUFJO0FBQUEsTUFDVCxRQUFRQSxNQUFLLE1BQU1BLEtBQUksTUFBTUEsS0FBSSxLQUFLLElBQUksRUFBRTtBQUFBLE1BQzVDLFFBQVFBLElBQUcsSUFBSSxFQUFFO0FBQUEsTUFDakIsUUFBUUEsS0FBSSxNQUFNQSxLQUFJLE1BQU1BLEtBQUksS0FBSyxJQUFJLEVBQUU7QUFBQSxNQUMzQyxLQUFLO0FBQUEsSUFDWDtBQUFBLEVBQ0c7QUFBQSxFQUNELFFBQVE7QUFDTixXQUFPLElBQUksSUFBSSxPQUFPLEtBQUssQ0FBQyxHQUFHLE9BQU8sS0FBSyxDQUFDLEdBQUcsT0FBTyxLQUFLLENBQUMsR0FBRyxPQUFPLEtBQUssT0FBTyxDQUFDO0FBQUEsRUFDcEY7QUFBQSxFQUNELGNBQWM7QUFDWixZQUFRLEtBQUssS0FBSyxLQUFLLEtBQUssS0FBSyxLQUFLLE1BQU0sS0FBSyxDQUFDLE9BQzFDLEtBQUssS0FBSyxLQUFLLEtBQUssS0FBSyxPQUN6QixLQUFLLEtBQUssV0FBVyxLQUFLLFdBQVc7QUFBQSxFQUM5QztBQUFBLEVBQ0QsWUFBWTtBQUNWLFVBQU0sSUFBSSxPQUFPLEtBQUssT0FBTztBQUM3QixXQUFPLEdBQUcsTUFBTSxJQUFJLFNBQVMsT0FBTyxHQUFHLE9BQU8sS0FBSyxDQUFDLENBQUMsS0FBSyxPQUFPLEtBQUssQ0FBQyxJQUFJLEdBQUcsTUFBTSxPQUFPLEtBQUssQ0FBQyxJQUFJLEdBQUcsSUFBSSxNQUFNLElBQUksTUFBTSxLQUFLLENBQUMsR0FBRztBQUFBLEVBQ3RJO0FBQ0gsQ0FBQyxDQUFDO0FBRUYsU0FBUyxPQUFPLE9BQU87QUFDckIsV0FBUyxTQUFTLEtBQUs7QUFDdkIsU0FBTyxRQUFRLElBQUksUUFBUSxNQUFNO0FBQ25DO0FBRUEsU0FBUyxPQUFPLE9BQU87QUFDckIsU0FBTyxLQUFLLElBQUksR0FBRyxLQUFLLElBQUksR0FBRyxTQUFTLENBQUMsQ0FBQztBQUM1QztBQUdBLFNBQVMsUUFBUUEsSUFBRyxJQUFJLElBQUk7QUFDMUIsVUFBUUEsS0FBSSxLQUFLLE1BQU0sS0FBSyxNQUFNQSxLQUFJLEtBQ2hDQSxLQUFJLE1BQU0sS0FDVkEsS0FBSSxNQUFNLE1BQU0sS0FBSyxPQUFPLE1BQU1BLE1BQUssS0FDdkMsTUFBTTtBQUNkO0FDM1lBLE1BQWUsV0FBQSxPQUFLLE1BQU07QUNFMUIsU0FBU0MsU0FBTyxHQUFHeEMsSUFBRztBQUNwQixTQUFPLFNBQVMsR0FBRztBQUNqQixXQUFPLElBQUksSUFBSUE7QUFBQSxFQUNuQjtBQUNBO0FBRUEsU0FBUyxZQUFZLEdBQUcsR0FBRyxHQUFHO0FBQzVCLFNBQU8sSUFBSSxLQUFLLElBQUksR0FBRyxDQUFDLEdBQUcsSUFBSSxLQUFLLElBQUksR0FBRyxDQUFDLElBQUksR0FBRyxJQUFJLElBQUksR0FBRyxTQUFTLEdBQUc7QUFDeEUsV0FBTyxLQUFLLElBQUksSUFBSSxJQUFJLEdBQUcsQ0FBQztBQUFBLEVBQ2hDO0FBQ0E7QUFPTyxTQUFTLE1BQU0sR0FBRztBQUN2QixVQUFRLElBQUksQ0FBQyxPQUFPLElBQUksVUFBVSxTQUFTLEdBQUcsR0FBRztBQUMvQyxXQUFPLElBQUksSUFBSSxZQUFZLEdBQUcsR0FBRyxDQUFDLElBQUksU0FBUyxNQUFNLENBQUMsSUFBSSxJQUFJLENBQUM7QUFBQSxFQUNuRTtBQUNBO0FBRWUsU0FBUyxRQUFRLEdBQUcsR0FBRztBQUNwQyxNQUFJQSxLQUFJLElBQUk7QUFDWixTQUFPQSxLQUFJd0MsU0FBTyxHQUFHeEMsRUFBQyxJQUFJLFNBQVMsTUFBTSxDQUFDLElBQUksSUFBSSxDQUFDO0FBQ3JEO0FDdkJBLE1BQUEsaUJBQWdCLFNBQVMsU0FBUyxHQUFHO0FBQ25DLE1BQUl5QyxTQUFRLE1BQU0sQ0FBQztBQUVuQixXQUFTQyxNQUFJcEMsUUFBTyxLQUFLO0FBQ3ZCLFFBQUksSUFBSW1DLFFBQU9uQyxTQUFRcUMsSUFBU3JDLE1BQUssR0FBRyxJQUFJLE1BQU1xQyxJQUFTLEdBQUcsR0FBRyxDQUFDLEdBQzlELElBQUlGLE9BQU1uQyxPQUFNLEdBQUcsSUFBSSxDQUFDLEdBQ3hCLElBQUltQyxPQUFNbkMsT0FBTSxHQUFHLElBQUksQ0FBQyxHQUN4QixVQUFVLFFBQVFBLE9BQU0sU0FBUyxJQUFJLE9BQU87QUFDaEQsV0FBTyxTQUFTLEdBQUc7QUFDakIsTUFBQUEsT0FBTSxJQUFJLEVBQUUsQ0FBQztBQUNiLE1BQUFBLE9BQU0sSUFBSSxFQUFFLENBQUM7QUFDYixNQUFBQSxPQUFNLElBQUksRUFBRSxDQUFDO0FBQ2IsTUFBQUEsT0FBTSxVQUFVLFFBQVEsQ0FBQztBQUN6QixhQUFPQSxTQUFRO0FBQUEsSUFDckI7QUFBQSxFQUNHO0FBRURvQyxRQUFJLFFBQVE7QUFFWixTQUFPQTtBQUNULEVBQUcsQ0FBQztBQ3pCVyxTQUFBLFlBQVMsR0FBRyxHQUFHO0FBQzVCLE1BQUksQ0FBQztBQUFHLFFBQUk7QUFDWixNQUFJLElBQUksSUFBSSxLQUFLLElBQUksRUFBRSxRQUFRLEVBQUUsTUFBTSxJQUFJLEdBQ3ZDLElBQUksRUFBRSxNQUFPLEdBQ2I7QUFDSixTQUFPLFNBQVMsR0FBRztBQUNqQixTQUFLLElBQUksR0FBRyxJQUFJLEdBQUcsRUFBRTtBQUFHLFFBQUUsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxLQUFLLElBQUksS0FBSyxFQUFFLENBQUMsSUFBSTtBQUN2RCxXQUFPO0FBQUEsRUFDWDtBQUNBO0FBRU8sU0FBUyxjQUFjLEdBQUc7QUFDL0IsU0FBTyxZQUFZLE9BQU8sQ0FBQyxLQUFLLEVBQUUsYUFBYTtBQUNqRDtBQ05PLFNBQVMsYUFBYSxHQUFHLEdBQUc7QUFDakMsTUFBSSxLQUFLLElBQUksRUFBRSxTQUFTLEdBQ3BCLEtBQUssSUFBSSxLQUFLLElBQUksSUFBSSxFQUFFLE1BQU0sSUFBSSxHQUNsQyxJQUFJLElBQUksTUFBTSxFQUFFLEdBQ2hCLElBQUksSUFBSSxNQUFNLEVBQUUsR0FDaEI7QUFFSixPQUFLLElBQUksR0FBRyxJQUFJLElBQUksRUFBRTtBQUFHLE1BQUUsQ0FBQyxJQUFJRSxjQUFNLEVBQUUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDO0FBQ2hELFNBQU8sSUFBSSxJQUFJLEVBQUU7QUFBRyxNQUFFLENBQUMsSUFBSSxFQUFFLENBQUM7QUFFOUIsU0FBTyxTQUFTLEdBQUc7QUFDakIsU0FBSyxJQUFJLEdBQUcsSUFBSSxJQUFJLEVBQUU7QUFBRyxRQUFFLENBQUMsSUFBSSxFQUFFLENBQUMsRUFBRSxDQUFDO0FBQ3RDLFdBQU87QUFBQSxFQUNYO0FBQ0E7QUNyQmUsU0FBQSxLQUFTLEdBQUcsR0FBRztBQUM1QixNQUFJNUMsS0FBSSxvQkFBSTtBQUNaLFNBQU8sSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsU0FBUyxHQUFHO0FBQ2pDLFdBQU9BLEdBQUUsUUFBUSxLQUFLLElBQUksS0FBSyxJQUFJLENBQUMsR0FBR0E7QUFBQSxFQUMzQztBQUNBO0FDTGUsU0FBQSxrQkFBUyxHQUFHLEdBQUc7QUFDNUIsU0FBTyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxTQUFTLEdBQUc7QUFDakMsV0FBTyxLQUFLLElBQUksS0FBSyxJQUFJO0FBQUEsRUFDN0I7QUFDQTtBQ0ZlLFNBQUEsT0FBUyxHQUFHLEdBQUc7QUFDNUIsTUFBSSxJQUFJLENBQUUsR0FDTixJQUFJLENBQUUsR0FDTjtBQUVKLE1BQUksTUFBTSxRQUFRLE9BQU8sTUFBTTtBQUFVLFFBQUk7QUFDN0MsTUFBSSxNQUFNLFFBQVEsT0FBTyxNQUFNO0FBQVUsUUFBSTtBQUU3QyxPQUFLLEtBQUssR0FBRztBQUNYLFFBQUksS0FBSyxHQUFHO0FBQ1YsUUFBRSxDQUFDLElBQUk0QyxjQUFNLEVBQUUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDO0FBQUEsSUFDN0IsT0FBVztBQUNMLFFBQUUsQ0FBQyxJQUFJLEVBQUUsQ0FBQztBQUFBLElBQ1g7QUFBQSxFQUNGO0FBRUQsU0FBTyxTQUFTLEdBQUc7QUFDakIsU0FBSyxLQUFLO0FBQUcsUUFBRSxDQUFDLElBQUksRUFBRSxDQUFDLEVBQUUsQ0FBQztBQUMxQixXQUFPO0FBQUEsRUFDWDtBQUNBO0FDcEJBLElBQUksTUFBTSwrQ0FDTixNQUFNLElBQUksT0FBTyxJQUFJLFFBQVEsR0FBRztBQUVwQyxTQUFTLEtBQUssR0FBRztBQUNmLFNBQU8sV0FBVztBQUNoQixXQUFPO0FBQUEsRUFDWDtBQUNBO0FBRUEsU0FBUyxJQUFJLEdBQUc7QUFDZCxTQUFPLFNBQVMsR0FBRztBQUNqQixXQUFPLEVBQUUsQ0FBQyxJQUFJO0FBQUEsRUFDbEI7QUFDQTtBQUVlLFNBQUEsa0JBQVMsR0FBRyxHQUFHO0FBQzVCLE1BQUksS0FBSyxJQUFJLFlBQVksSUFBSSxZQUFZLEdBQ3JDLElBQ0EsSUFDQSxJQUNBLElBQUksSUFDSixJQUFJLENBQUUsR0FDTkMsS0FBSSxDQUFBO0FBR1IsTUFBSSxJQUFJLElBQUksSUFBSSxJQUFJO0FBR3BCLFVBQVEsS0FBSyxJQUFJLEtBQUssQ0FBQyxPQUNmLEtBQUssSUFBSSxLQUFLLENBQUMsSUFBSTtBQUN6QixTQUFLLEtBQUssR0FBRyxTQUFTLElBQUk7QUFDeEIsV0FBSyxFQUFFLE1BQU0sSUFBSSxFQUFFO0FBQ25CLFVBQUksRUFBRSxDQUFDO0FBQUcsVUFBRSxDQUFDLEtBQUs7QUFBQTtBQUNiLFVBQUUsRUFBRSxDQUFDLElBQUk7QUFBQSxJQUNmO0FBQ0QsU0FBSyxLQUFLLEdBQUcsQ0FBQyxRQUFRLEtBQUssR0FBRyxDQUFDLElBQUk7QUFDakMsVUFBSSxFQUFFLENBQUM7QUFBRyxVQUFFLENBQUMsS0FBSztBQUFBO0FBQ2IsVUFBRSxFQUFFLENBQUMsSUFBSTtBQUFBLElBQ3BCLE9BQVc7QUFDTCxRQUFFLEVBQUUsQ0FBQyxJQUFJO0FBQ1QsTUFBQUEsR0FBRSxLQUFLLEVBQUMsR0FBTSxHQUFHeEMsa0JBQU8sSUFBSSxFQUFFLEVBQUMsQ0FBQztBQUFBLElBQ2pDO0FBQ0QsU0FBSyxJQUFJO0FBQUEsRUFDVjtBQUdELE1BQUksS0FBSyxFQUFFLFFBQVE7QUFDakIsU0FBSyxFQUFFLE1BQU0sRUFBRTtBQUNmLFFBQUksRUFBRSxDQUFDO0FBQUcsUUFBRSxDQUFDLEtBQUs7QUFBQTtBQUNiLFFBQUUsRUFBRSxDQUFDLElBQUk7QUFBQSxFQUNmO0FBSUQsU0FBTyxFQUFFLFNBQVMsSUFBS3dDLEdBQUUsQ0FBQyxJQUNwQixJQUFJQSxHQUFFLENBQUMsRUFBRSxDQUFDLElBQ1YsS0FBSyxDQUFDLEtBQ0wsSUFBSUEsR0FBRSxRQUFRLFNBQVMsR0FBRztBQUN6QixhQUFTQyxLQUFJLEdBQUcsR0FBR0EsS0FBSSxHQUFHLEVBQUVBO0FBQUcsU0FBRyxJQUFJRCxHQUFFQyxFQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDO0FBQ3RELFdBQU8sRUFBRSxLQUFLLEVBQUU7QUFBQSxFQUMxQjtBQUNBO0FDckRlLFNBQUEsY0FBUyxHQUFHLEdBQUc7QUFDNUIsTUFBSSxJQUFJLE9BQU8sR0FBRztBQUNsQixTQUFPLEtBQUssUUFBUSxNQUFNLFlBQVksU0FBUyxDQUFDLEtBQ3pDLE1BQU0sV0FBV3pDLG9CQUNsQixNQUFNLFlBQWEsSUFBSSxNQUFNLENBQUMsTUFBTSxJQUFJLEdBQUdxQyxrQkFBT0ssb0JBQ2xELGFBQWEsUUFBUUwsaUJBQ3JCLGFBQWEsT0FBTyxPQUNwQixjQUFjLENBQUMsSUFBSSxjQUNuQixNQUFNLFFBQVEsQ0FBQyxJQUFJLGVBQ25CLE9BQU8sRUFBRSxZQUFZLGNBQWMsT0FBTyxFQUFFLGFBQWEsY0FBYyxNQUFNLENBQUMsSUFBSSxTQUNsRnJDLG1CQUFRLEdBQUcsQ0FBQztBQUNwQjtBQ3JCZSxTQUFBLGlCQUFTLEdBQUcsR0FBRztBQUM1QixTQUFPLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLFNBQVMsR0FBRztBQUNqQyxXQUFPLEtBQUssTUFBTSxLQUFLLElBQUksS0FBSyxJQUFJLENBQUM7QUFBQSxFQUN6QztBQUNBO0FDSkEsSUFBSSxVQUFVLE1BQU0sS0FBSztBQUVsQixJQUFJTSxhQUFXO0FBQUEsRUFDcEIsWUFBWTtBQUFBLEVBQ1osWUFBWTtBQUFBLEVBQ1osUUFBUTtBQUFBLEVBQ1IsT0FBTztBQUFBLEVBQ1AsUUFBUTtBQUFBLEVBQ1IsUUFBUTtBQUNWO0FBRWUsU0FBQSxVQUFTLEdBQUcsR0FBRyxHQUFHWCxJQUFHLEdBQUdELElBQUc7QUFDeEMsTUFBSSxRQUFRLFFBQVE7QUFDcEIsTUFBSSxTQUFTLEtBQUssS0FBSyxJQUFJLElBQUksSUFBSSxDQUFDO0FBQUcsU0FBSyxRQUFRLEtBQUs7QUFDekQsTUFBSSxRQUFRLElBQUksSUFBSSxJQUFJQztBQUFHLFNBQUssSUFBSSxPQUFPQSxNQUFLLElBQUk7QUFDcEQsTUFBSSxTQUFTLEtBQUssS0FBSyxJQUFJLElBQUlBLEtBQUlBLEVBQUM7QUFBRyxTQUFLLFFBQVFBLE1BQUssUUFBUSxTQUFTO0FBQzFFLE1BQUksSUFBSUEsS0FBSSxJQUFJO0FBQUcsUUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsUUFBUSxDQUFDLE9BQU8sU0FBUyxDQUFDO0FBQzdELFNBQU87QUFBQSxJQUNMLFlBQVk7QUFBQSxJQUNaLFlBQVlEO0FBQUEsSUFDWixRQUFRLEtBQUssTUFBTSxHQUFHLENBQUMsSUFBSTtBQUFBLElBQzNCLE9BQU8sS0FBSyxLQUFLLEtBQUssSUFBSTtBQUFBLElBQzFCO0FBQUEsSUFDQTtBQUFBLEVBQ0o7QUFDQTtBQ3ZCQSxJQUFJO0FBR0csU0FBUyxTQUFTLE9BQU87QUFDOUIsUUFBTXFCLEtBQUksS0FBSyxPQUFPLGNBQWMsYUFBYSxZQUFZLGlCQUFpQixRQUFRLEVBQUU7QUFDeEYsU0FBT0EsR0FBRSxhQUFhVCxhQUFXLFVBQVVTLEdBQUUsR0FBR0EsR0FBRSxHQUFHQSxHQUFFLEdBQUdBLEdBQUUsR0FBR0EsR0FBRSxHQUFHQSxHQUFFLENBQUM7QUFDekU7QUFFTyxTQUFTLFNBQVMsT0FBTztBQUM5QixNQUFJLFNBQVM7QUFBTSxXQUFPVDtBQUMxQixNQUFJLENBQUM7QUFBUyxjQUFVLFNBQVMsZ0JBQWdCLDhCQUE4QixHQUFHO0FBQ2xGLFVBQVEsYUFBYSxhQUFhLEtBQUs7QUFDdkMsTUFBSSxFQUFFLFFBQVEsUUFBUSxVQUFVLFFBQVEsWUFBYTtBQUFHLFdBQU9BO0FBQy9ELFVBQVEsTUFBTTtBQUNkLFNBQU8sVUFBVSxNQUFNLEdBQUcsTUFBTSxHQUFHLE1BQU0sR0FBRyxNQUFNLEdBQUcsTUFBTSxHQUFHLE1BQU0sQ0FBQztBQUN2RTtBQ2RBLFNBQVMscUJBQXFCLE9BQU8sU0FBUyxTQUFTLFVBQVU7QUFFL0QsV0FBUyxJQUFJLEdBQUc7QUFDZCxXQUFPLEVBQUUsU0FBUyxFQUFFLElBQUssSUFBRyxNQUFNO0FBQUEsRUFDbkM7QUFFRCxXQUFTLFVBQVUsSUFBSSxJQUFJLElBQUksSUFBSSxHQUFHa0MsSUFBRztBQUN2QyxRQUFJLE9BQU8sTUFBTSxPQUFPLElBQUk7QUFDMUIsVUFBSSxJQUFJLEVBQUUsS0FBSyxjQUFjLE1BQU0sU0FBUyxNQUFNLE9BQU87QUFDekQsTUFBQUEsR0FBRSxLQUFLLEVBQUMsR0FBRyxJQUFJLEdBQUcsR0FBR3hDLGtCQUFPLElBQUksRUFBRSxFQUFDLEdBQUcsRUFBQyxHQUFHLElBQUksR0FBRyxHQUFHQSxrQkFBTyxJQUFJLEVBQUUsRUFBQyxDQUFDO0FBQUEsSUFDekUsV0FBZSxNQUFNLElBQUk7QUFDbkIsUUFBRSxLQUFLLGVBQWUsS0FBSyxVQUFVLEtBQUssT0FBTztBQUFBLElBQ2xEO0FBQUEsRUFDRjtBQUVELFdBQVMsT0FBTyxHQUFHLEdBQUcsR0FBR3dDLElBQUc7QUFDMUIsUUFBSSxNQUFNLEdBQUc7QUFDWCxVQUFJLElBQUksSUFBSTtBQUFLLGFBQUs7QUFBQSxlQUFjLElBQUksSUFBSTtBQUFLLGFBQUs7QUFDdEQsTUFBQUEsR0FBRSxLQUFLLEVBQUMsR0FBRyxFQUFFLEtBQUssSUFBSSxDQUFDLElBQUksV0FBVyxNQUFNLFFBQVEsSUFBSSxHQUFHLEdBQUd4QyxrQkFBTyxHQUFHLENBQUMsRUFBQyxDQUFDO0FBQUEsSUFDNUUsV0FBVSxHQUFHO0FBQ1osUUFBRSxLQUFLLElBQUksQ0FBQyxJQUFJLFlBQVksSUFBSSxRQUFRO0FBQUEsSUFDekM7QUFBQSxFQUNGO0FBRUQsV0FBUyxNQUFNLEdBQUcsR0FBRyxHQUFHd0MsSUFBRztBQUN6QixRQUFJLE1BQU0sR0FBRztBQUNYLE1BQUFBLEdBQUUsS0FBSyxFQUFDLEdBQUcsRUFBRSxLQUFLLElBQUksQ0FBQyxJQUFJLFVBQVUsTUFBTSxRQUFRLElBQUksR0FBRyxHQUFHeEMsa0JBQU8sR0FBRyxDQUFDLEVBQUMsQ0FBQztBQUFBLElBQzNFLFdBQVUsR0FBRztBQUNaLFFBQUUsS0FBSyxJQUFJLENBQUMsSUFBSSxXQUFXLElBQUksUUFBUTtBQUFBLElBQ3hDO0FBQUEsRUFDRjtBQUVELFdBQVMsTUFBTSxJQUFJLElBQUksSUFBSSxJQUFJLEdBQUd3QyxJQUFHO0FBQ25DLFFBQUksT0FBTyxNQUFNLE9BQU8sSUFBSTtBQUMxQixVQUFJLElBQUksRUFBRSxLQUFLLElBQUksQ0FBQyxJQUFJLFVBQVUsTUFBTSxLQUFLLE1BQU0sR0FBRztBQUN0RCxNQUFBQSxHQUFFLEtBQUssRUFBQyxHQUFHLElBQUksR0FBRyxHQUFHeEMsa0JBQU8sSUFBSSxFQUFFLEVBQUMsR0FBRyxFQUFDLEdBQUcsSUFBSSxHQUFHLEdBQUdBLGtCQUFPLElBQUksRUFBRSxFQUFDLENBQUM7QUFBQSxJQUNwRSxXQUFVLE9BQU8sS0FBSyxPQUFPLEdBQUc7QUFDL0IsUUFBRSxLQUFLLElBQUksQ0FBQyxJQUFJLFdBQVcsS0FBSyxNQUFNLEtBQUssR0FBRztBQUFBLElBQy9DO0FBQUEsRUFDRjtBQUVELFNBQU8sU0FBUyxHQUFHLEdBQUc7QUFDcEIsUUFBSSxJQUFJLENBQUUsR0FDTndDLEtBQUksQ0FBQTtBQUNSLFFBQUksTUFBTSxDQUFDLEdBQUcsSUFBSSxNQUFNLENBQUM7QUFDekIsY0FBVSxFQUFFLFlBQVksRUFBRSxZQUFZLEVBQUUsWUFBWSxFQUFFLFlBQVksR0FBR0EsRUFBQztBQUN0RSxXQUFPLEVBQUUsUUFBUSxFQUFFLFFBQVEsR0FBR0EsRUFBQztBQUMvQixVQUFNLEVBQUUsT0FBTyxFQUFFLE9BQU8sR0FBR0EsRUFBQztBQUM1QixVQUFNLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxHQUFHQSxFQUFDO0FBQ2xELFFBQUksSUFBSTtBQUNSLFdBQU8sU0FBUyxHQUFHO0FBQ2pCLFVBQUksSUFBSSxJQUFJLElBQUlBLEdBQUUsUUFBUTtBQUMxQixhQUFPLEVBQUUsSUFBSTtBQUFHLFdBQUcsSUFBSUEsR0FBRSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDO0FBQ3ZDLGFBQU8sRUFBRSxLQUFLLEVBQUU7QUFBQSxJQUN0QjtBQUFBLEVBQ0E7QUFDQTtBQUVPLElBQUksMEJBQTBCLHFCQUFxQixVQUFVLFFBQVEsT0FBTyxNQUFNO0FBQ2xGLElBQUksMEJBQTBCLHFCQUFxQixVQUFVLE1BQU0sS0FBSyxHQUFHO0FDOURsRixJQUFJLFFBQVEsR0FDUkcsWUFBVSxHQUNWLFdBQVcsR0FDWCxZQUFZLEtBQ1osVUFDQSxVQUNBLFlBQVksR0FDWixXQUFXLEdBQ1gsWUFBWSxHQUNaLFFBQVEsT0FBTyxnQkFBZ0IsWUFBWSxZQUFZLE1BQU0sY0FBYyxNQUMzRSxXQUFXLE9BQU8sV0FBVyxZQUFZLE9BQU8sd0JBQXdCLE9BQU8sc0JBQXNCLEtBQUssTUFBTSxJQUFJLFNBQVNqRCxJQUFHO0FBQUUsYUFBV0EsSUFBRyxFQUFFOztBQUUvSSxTQUFTLE1BQU07QUFDcEIsU0FBTyxhQUFhLFNBQVMsUUFBUSxHQUFHLFdBQVcsTUFBTSxRQUFRO0FBQ25FO0FBRUEsU0FBUyxXQUFXO0FBQ2xCLGFBQVc7QUFDYjtBQUVPLFNBQVMsUUFBUTtBQUN0QixPQUFLLFFBQ0wsS0FBSyxRQUNMLEtBQUssUUFBUTtBQUNmO0FBRUEsTUFBTSxZQUFZLE1BQU0sWUFBWTtBQUFBLEVBQ2xDLGFBQWE7QUFBQSxFQUNiLFNBQVMsU0FBUyxVQUFVLE9BQU8sTUFBTTtBQUN2QyxRQUFJLE9BQU8sYUFBYTtBQUFZLFlBQU0sSUFBSSxVQUFVLDRCQUE0QjtBQUNwRixZQUFRLFFBQVEsT0FBTyxJQUFHLElBQUssQ0FBQyxTQUFTLFNBQVMsT0FBTyxJQUFJLENBQUM7QUFDOUQsUUFBSSxDQUFDLEtBQUssU0FBUyxhQUFhLE1BQU07QUFDcEMsVUFBSTtBQUFVLGlCQUFTLFFBQVE7QUFBQTtBQUMxQixtQkFBVztBQUNoQixpQkFBVztBQUFBLElBQ1o7QUFDRCxTQUFLLFFBQVE7QUFDYixTQUFLLFFBQVE7QUFDYjtFQUNEO0FBQUEsRUFDRCxNQUFNLFdBQVc7QUFDZixRQUFJLEtBQUssT0FBTztBQUNkLFdBQUssUUFBUTtBQUNiLFdBQUssUUFBUTtBQUNiO0lBQ0Q7QUFBQSxFQUNGO0FBQ0g7QUFFTyxTQUFTLE1BQU0sVUFBVSxPQUFPLE1BQU07QUFDM0MsTUFBSSxJQUFJLElBQUk7QUFDWixJQUFFLFFBQVEsVUFBVSxPQUFPLElBQUk7QUFDL0IsU0FBTztBQUNUO0FBRU8sU0FBUyxhQUFhO0FBQzNCO0FBQ0EsSUFBRTtBQUNGLE1BQUksSUFBSSxVQUFVO0FBQ2xCLFNBQU8sR0FBRztBQUNSLFNBQUssSUFBSSxXQUFXLEVBQUUsVUFBVTtBQUFHLFFBQUUsTUFBTSxLQUFLLFFBQVcsQ0FBQztBQUM1RCxRQUFJLEVBQUU7QUFBQSxFQUNQO0FBQ0QsSUFBRTtBQUNKO0FBRUEsU0FBUyxPQUFPO0FBQ2QsY0FBWSxZQUFZLE1BQU0sSUFBRyxLQUFNO0FBQ3ZDLFVBQVFpRCxZQUFVO0FBQ2xCLE1BQUk7QUFDRjtFQUNKLFVBQVk7QUFDUixZQUFRO0FBQ1I7QUFDQSxlQUFXO0FBQUEsRUFDWjtBQUNIO0FBRUEsU0FBUyxPQUFPO0FBQ2QsTUFBSUMsT0FBTSxNQUFNLElBQUssR0FBRSxRQUFRQSxPQUFNO0FBQ3JDLE1BQUksUUFBUTtBQUFXLGlCQUFhLE9BQU8sWUFBWUE7QUFDekQ7QUFFQSxTQUFTLE1BQU07QUFDYixNQUFJLElBQUksS0FBSyxVQUFVLElBQUksT0FBTztBQUNsQyxTQUFPLElBQUk7QUFDVCxRQUFJLEdBQUcsT0FBTztBQUNaLFVBQUksT0FBTyxHQUFHO0FBQU8sZUFBTyxHQUFHO0FBQy9CLFdBQUssSUFBSSxLQUFLLEdBQUc7QUFBQSxJQUN2QixPQUFXO0FBQ0wsV0FBSyxHQUFHLE9BQU8sR0FBRyxRQUFRO0FBQzFCLFdBQUssS0FBSyxHQUFHLFFBQVEsS0FBSyxXQUFXO0FBQUEsSUFDdEM7QUFBQSxFQUNGO0FBQ0QsYUFBVztBQUNYLFFBQU0sSUFBSTtBQUNaO0FBRUEsU0FBUyxNQUFNLE1BQU07QUFDbkIsTUFBSTtBQUFPO0FBQ1gsTUFBSUQ7QUFBU0EsZ0JBQVUsYUFBYUEsU0FBTztBQUMzQyxNQUFJLFFBQVEsT0FBTztBQUNuQixNQUFJLFFBQVEsSUFBSTtBQUNkLFFBQUksT0FBTztBQUFVQSxrQkFBVSxXQUFXLE1BQU0sT0FBTyxNQUFNLFFBQVEsU0FBUztBQUM5RSxRQUFJO0FBQVUsaUJBQVcsY0FBYyxRQUFRO0FBQUEsRUFDbkQsT0FBUztBQUNMLFFBQUksQ0FBQztBQUFVLGtCQUFZLE1BQU0sT0FBTyxXQUFXLFlBQVksTUFBTSxTQUFTO0FBQzlFLFlBQVEsR0FBRyxTQUFTLElBQUk7QUFBQSxFQUN6QjtBQUNIO0FDM0dlLFNBQUEsUUFBUyxVQUFVLE9BQU8sTUFBTTtBQUM3QyxNQUFJLElBQUksSUFBSTtBQUNaLFVBQVEsU0FBUyxPQUFPLElBQUksQ0FBQztBQUM3QixJQUFFLFFBQVEsYUFBVztBQUNuQixNQUFFLEtBQUk7QUFDTixhQUFTLFVBQVUsS0FBSztBQUFBLEVBQzVCLEdBQUssT0FBTyxJQUFJO0FBQ2QsU0FBTztBQUNUO0FDUEEsSUFBSSxVQUFVLFNBQVMsU0FBUyxPQUFPLFVBQVUsV0FBVztBQUM1RCxJQUFJLGFBQWEsQ0FBQTtBQUVWLElBQUksVUFBVTtBQUNkLElBQUksWUFBWTtBQUNoQixJQUFJLFdBQVc7QUFDZixJQUFJLFVBQVU7QUFDZCxJQUFJLFVBQVU7QUFDZCxJQUFJLFNBQVM7QUFDYixJQUFJLFFBQVE7QUFFSixTQUFBLFNBQVMsTUFBTSxNQUFNRSxLQUFJLE9BQU8sT0FBTyxRQUFRO0FBQzVELE1BQUksWUFBWSxLQUFLO0FBQ3JCLE1BQUksQ0FBQztBQUFXLFNBQUssZUFBZSxDQUFBO0FBQUEsV0FDM0JBLE9BQU07QUFBVztBQUMxQixTQUFPLE1BQU1BLEtBQUk7QUFBQSxJQUNmO0FBQUEsSUFDQTtBQUFBO0FBQUEsSUFDQTtBQUFBO0FBQUEsSUFDQSxJQUFJO0FBQUEsSUFDSixPQUFPO0FBQUEsSUFDUCxNQUFNLE9BQU87QUFBQSxJQUNiLE9BQU8sT0FBTztBQUFBLElBQ2QsVUFBVSxPQUFPO0FBQUEsSUFDakIsTUFBTSxPQUFPO0FBQUEsSUFDYixPQUFPO0FBQUEsSUFDUCxPQUFPO0FBQUEsRUFDWCxDQUFHO0FBQ0g7QUFFTyxTQUFTLEtBQUssTUFBTUEsS0FBSTtBQUM3QixNQUFJQyxZQUFXLElBQUksTUFBTUQsR0FBRTtBQUMzQixNQUFJQyxVQUFTLFFBQVE7QUFBUyxVQUFNLElBQUksTUFBTSw2QkFBNkI7QUFDM0UsU0FBT0E7QUFDVDtBQUVPLFNBQVMsSUFBSSxNQUFNRCxLQUFJO0FBQzVCLE1BQUlDLFlBQVcsSUFBSSxNQUFNRCxHQUFFO0FBQzNCLE1BQUlDLFVBQVMsUUFBUTtBQUFTLFVBQU0sSUFBSSxNQUFNLDJCQUEyQjtBQUN6RSxTQUFPQTtBQUNUO0FBRU8sU0FBUyxJQUFJLE1BQU1ELEtBQUk7QUFDNUIsTUFBSUMsWUFBVyxLQUFLO0FBQ3BCLE1BQUksQ0FBQ0EsYUFBWSxFQUFFQSxZQUFXQSxVQUFTRCxHQUFFO0FBQUksVUFBTSxJQUFJLE1BQU0sc0JBQXNCO0FBQ25GLFNBQU9DO0FBQ1Q7QUFFQSxTQUFTLE9BQU8sTUFBTUQsS0FBSSxNQUFNO0FBQzlCLE1BQUksWUFBWSxLQUFLLGNBQ2pCO0FBSUosWUFBVUEsR0FBRSxJQUFJO0FBQ2hCLE9BQUssUUFBUSxNQUFNQyxXQUFVLEdBQUcsS0FBSyxJQUFJO0FBRXpDLFdBQVNBLFVBQVMsU0FBUztBQUN6QixTQUFLLFFBQVE7QUFDYixTQUFLLE1BQU0sUUFBUTdDLFFBQU8sS0FBSyxPQUFPLEtBQUssSUFBSTtBQUcvQyxRQUFJLEtBQUssU0FBUztBQUFTLE1BQUFBLE9BQU0sVUFBVSxLQUFLLEtBQUs7QUFBQSxFQUN0RDtBQUVELFdBQVNBLE9BQU0sU0FBUztBQUN0QixRQUFJLEdBQUdlLElBQUcsR0FBRztBQUdiLFFBQUksS0FBSyxVQUFVO0FBQVcsYUFBTyxLQUFJO0FBRXpDLFNBQUssS0FBSyxXQUFXO0FBQ25CLFVBQUksVUFBVSxDQUFDO0FBQ2YsVUFBSSxFQUFFLFNBQVMsS0FBSztBQUFNO0FBSzFCLFVBQUksRUFBRSxVQUFVO0FBQVMsZUFBTyxRQUFRZixNQUFLO0FBRzdDLFVBQUksRUFBRSxVQUFVLFNBQVM7QUFDdkIsVUFBRSxRQUFRO0FBQ1YsVUFBRSxNQUFNO0FBQ1IsVUFBRSxHQUFHLEtBQUssYUFBYSxNQUFNLEtBQUssVUFBVSxFQUFFLE9BQU8sRUFBRSxLQUFLO0FBQzVELGVBQU8sVUFBVSxDQUFDO0FBQUEsTUFDbkIsV0FHUSxDQUFDLElBQUk0QyxLQUFJO0FBQ2hCLFVBQUUsUUFBUTtBQUNWLFVBQUUsTUFBTTtBQUNSLFVBQUUsR0FBRyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsRUFBRSxPQUFPLEVBQUUsS0FBSztBQUN6RCxlQUFPLFVBQVUsQ0FBQztBQUFBLE1BQ25CO0FBQUEsSUFDRjtBQU1ELFlBQVEsV0FBVztBQUNqQixVQUFJLEtBQUssVUFBVSxTQUFTO0FBQzFCLGFBQUssUUFBUTtBQUNiLGFBQUssTUFBTSxRQUFRLE1BQU0sS0FBSyxPQUFPLEtBQUssSUFBSTtBQUM5QyxhQUFLLE9BQU87QUFBQSxNQUNiO0FBQUEsSUFDUCxDQUFLO0FBSUQsU0FBSyxRQUFRO0FBQ2IsU0FBSyxHQUFHLEtBQUssU0FBUyxNQUFNLEtBQUssVUFBVSxLQUFLLE9BQU8sS0FBSyxLQUFLO0FBQ2pFLFFBQUksS0FBSyxVQUFVO0FBQVU7QUFDN0IsU0FBSyxRQUFRO0FBR2IsWUFBUSxJQUFJLE1BQU0sSUFBSSxLQUFLLE1BQU0sTUFBTTtBQUN2QyxTQUFLLElBQUksR0FBRzdCLEtBQUksSUFBSSxJQUFJLEdBQUcsRUFBRSxHQUFHO0FBQzlCLFVBQUksSUFBSSxLQUFLLE1BQU0sQ0FBQyxFQUFFLE1BQU0sS0FBSyxNQUFNLEtBQUssVUFBVSxLQUFLLE9BQU8sS0FBSyxLQUFLLEdBQUc7QUFDN0UsY0FBTSxFQUFFQSxFQUFDLElBQUk7QUFBQSxNQUNkO0FBQUEsSUFDRjtBQUNELFVBQU0sU0FBU0EsS0FBSTtBQUFBLEVBQ3BCO0FBRUQsV0FBUyxLQUFLLFNBQVM7QUFDckIsUUFBSSxJQUFJLFVBQVUsS0FBSyxXQUFXLEtBQUssS0FBSyxLQUFLLE1BQU0sVUFBVSxLQUFLLFFBQVEsS0FBSyxLQUFLLE1BQU0sUUFBUSxJQUFJLEdBQUcsS0FBSyxRQUFRLFFBQVEsSUFDOUgsSUFBSSxJQUNKLElBQUksTUFBTTtBQUVkLFdBQU8sRUFBRSxJQUFJLEdBQUc7QUFDZCxZQUFNLENBQUMsRUFBRSxLQUFLLE1BQU0sQ0FBQztBQUFBLElBQ3RCO0FBR0QsUUFBSSxLQUFLLFVBQVUsUUFBUTtBQUN6QixXQUFLLEdBQUcsS0FBSyxPQUFPLE1BQU0sS0FBSyxVQUFVLEtBQUssT0FBTyxLQUFLLEtBQUs7QUFDL0Q7SUFDRDtBQUFBLEVBQ0Y7QUFFRCxXQUFTLE9BQU87QUFDZCxTQUFLLFFBQVE7QUFDYixTQUFLLE1BQU07QUFDWCxXQUFPLFVBQVU2QixHQUFFO0FBQ25CLGFBQVMsS0FBSztBQUFXO0FBQ3pCLFdBQU8sS0FBSztBQUFBLEVBQ2I7QUFDSDtBQ3RKZSxTQUFBLFVBQVMsTUFBTSxNQUFNO0FBQ2xDLE1BQUksWUFBWSxLQUFLLGNBQ2pCQyxXQUNBLFFBQ0FDLFNBQVEsTUFDUjtBQUVKLE1BQUksQ0FBQztBQUFXO0FBRWhCLFNBQU8sUUFBUSxPQUFPLE9BQU8sT0FBTztBQUVwQyxPQUFLLEtBQUssV0FBVztBQUNuQixTQUFLRCxZQUFXLFVBQVUsQ0FBQyxHQUFHLFNBQVMsTUFBTTtBQUFFLE1BQUFDLFNBQVE7QUFBTztBQUFBLElBQVc7QUFDekUsYUFBU0QsVUFBUyxRQUFRLFlBQVlBLFVBQVMsUUFBUTtBQUN2RCxJQUFBQSxVQUFTLFFBQVE7QUFDakIsSUFBQUEsVUFBUyxNQUFNO0FBQ2YsSUFBQUEsVUFBUyxHQUFHLEtBQUssU0FBUyxjQUFjLFVBQVUsTUFBTSxLQUFLLFVBQVVBLFVBQVMsT0FBT0EsVUFBUyxLQUFLO0FBQ3JHLFdBQU8sVUFBVSxDQUFDO0FBQUEsRUFDbkI7QUFFRCxNQUFJQztBQUFPLFdBQU8sS0FBSztBQUN6QjtBQ3JCZSxTQUFRLG9CQUFDLE1BQU07QUFDNUIsU0FBTyxLQUFLLEtBQUssV0FBVztBQUMxQixjQUFVLE1BQU0sSUFBSTtBQUFBLEVBQ3hCLENBQUc7QUFDSDtBQ0pBLFNBQVMsWUFBWUYsS0FBSSxNQUFNO0FBQzdCLE1BQUksUUFBUTtBQUNaLFNBQU8sV0FBVztBQUNoQixRQUFJQyxZQUFXLElBQUksTUFBTUQsR0FBRSxHQUN2QixRQUFRQyxVQUFTO0FBS3JCLFFBQUksVUFBVSxRQUFRO0FBQ3BCLGVBQVMsU0FBUztBQUNsQixlQUFTLElBQUksR0FBRyxJQUFJLE9BQU8sUUFBUSxJQUFJLEdBQUcsRUFBRSxHQUFHO0FBQzdDLFlBQUksT0FBTyxDQUFDLEVBQUUsU0FBUyxNQUFNO0FBQzNCLG1CQUFTLE9BQU87QUFDaEIsaUJBQU8sT0FBTyxHQUFHLENBQUM7QUFDbEI7QUFBQSxRQUNEO0FBQUEsTUFDRjtBQUFBLElBQ0Y7QUFFRCxJQUFBQSxVQUFTLFFBQVE7QUFBQSxFQUNyQjtBQUNBO0FBRUEsU0FBUyxjQUFjRCxLQUFJLE1BQU0sT0FBTztBQUN0QyxNQUFJLFFBQVE7QUFDWixNQUFJLE9BQU8sVUFBVTtBQUFZLFVBQU0sSUFBSTtBQUMzQyxTQUFPLFdBQVc7QUFDaEIsUUFBSUMsWUFBVyxJQUFJLE1BQU1ELEdBQUUsR0FDdkIsUUFBUUMsVUFBUztBQUtyQixRQUFJLFVBQVUsUUFBUTtBQUNwQixnQkFBVSxTQUFTLE9BQU8sTUFBSztBQUMvQixlQUFTLElBQUksRUFBQyxNQUFZLE1BQVksR0FBRyxJQUFJLEdBQUcsSUFBSSxPQUFPLFFBQVEsSUFBSSxHQUFHLEVBQUUsR0FBRztBQUM3RSxZQUFJLE9BQU8sQ0FBQyxFQUFFLFNBQVMsTUFBTTtBQUMzQixpQkFBTyxDQUFDLElBQUk7QUFDWjtBQUFBLFFBQ0Q7QUFBQSxNQUNGO0FBQ0QsVUFBSSxNQUFNO0FBQUcsZUFBTyxLQUFLLENBQUM7QUFBQSxJQUMzQjtBQUVELElBQUFBLFVBQVMsUUFBUTtBQUFBLEVBQ3JCO0FBQ0E7QUFFZSxTQUFBLGlCQUFTLE1BQU0sT0FBTztBQUNuQyxNQUFJRCxNQUFLLEtBQUs7QUFFZCxVQUFRO0FBRVIsTUFBSSxVQUFVLFNBQVMsR0FBRztBQUN4QixRQUFJLFFBQVEsSUFBSSxLQUFLLEtBQUksR0FBSUEsR0FBRSxFQUFFO0FBQ2pDLGFBQVMsSUFBSSxHQUFHLElBQUksTUFBTSxRQUFRLEdBQUcsSUFBSSxHQUFHLEVBQUUsR0FBRztBQUMvQyxXQUFLLElBQUksTUFBTSxDQUFDLEdBQUcsU0FBUyxNQUFNO0FBQ2hDLGVBQU8sRUFBRTtBQUFBLE1BQ1Y7QUFBQSxJQUNGO0FBQ0QsV0FBTztBQUFBLEVBQ1I7QUFFRCxTQUFPLEtBQUssTUFBTSxTQUFTLE9BQU8sY0FBYyxlQUFlQSxLQUFJLE1BQU0sS0FBSyxDQUFDO0FBQ2pGO0FBRU8sU0FBUyxXQUFXLFlBQVksTUFBTSxPQUFPO0FBQ2xELE1BQUlBLE1BQUssV0FBVztBQUVwQixhQUFXLEtBQUssV0FBVztBQUN6QixRQUFJQyxZQUFXLElBQUksTUFBTUQsR0FBRTtBQUMzQixLQUFDQyxVQUFTLFVBQVVBLFVBQVMsUUFBUSxDQUFFLElBQUcsSUFBSSxJQUFJLE1BQU0sTUFBTSxNQUFNLFNBQVM7QUFBQSxFQUNqRixDQUFHO0FBRUQsU0FBTyxTQUFTLE1BQU07QUFDcEIsV0FBTyxJQUFJLE1BQU1ELEdBQUUsRUFBRSxNQUFNLElBQUk7QUFBQSxFQUNuQztBQUNBO0FDN0VlLFNBQUEsWUFBUyxHQUFHLEdBQUc7QUFDNUIsTUFBSTtBQUNKLFVBQVEsT0FBTyxNQUFNLFdBQVcsb0JBQzFCLGFBQWEsUUFBUSxrQkFDcEIsSUFBSSxNQUFNLENBQUMsTUFBTSxJQUFJLEdBQUcsa0JBQ3pCLG1CQUFtQixHQUFHLENBQUM7QUFDL0I7QUNKQSxTQUFTLFdBQVcsTUFBTTtBQUN4QixTQUFPLFdBQVc7QUFDaEIsU0FBSyxnQkFBZ0IsSUFBSTtBQUFBLEVBQzdCO0FBQ0E7QUFFQSxTQUFTLGFBQWEsVUFBVTtBQUM5QixTQUFPLFdBQVc7QUFDaEIsU0FBSyxrQkFBa0IsU0FBUyxPQUFPLFNBQVMsS0FBSztBQUFBLEVBQ3pEO0FBQ0E7QUFFQSxTQUFTLGFBQWEsTUFBTUcsY0FBYSxRQUFRO0FBQy9DLE1BQUksVUFDQSxVQUFVLFNBQVMsSUFDbkI7QUFDSixTQUFPLFdBQVc7QUFDaEIsUUFBSSxVQUFVLEtBQUssYUFBYSxJQUFJO0FBQ3BDLFdBQU8sWUFBWSxVQUFVLE9BQ3ZCLFlBQVksV0FBVyxlQUN2QixlQUFlQSxhQUFZLFdBQVcsU0FBUyxNQUFNO0FBQUEsRUFDL0Q7QUFDQTtBQUVBLFNBQVMsZUFBZSxVQUFVQSxjQUFhLFFBQVE7QUFDckQsTUFBSSxVQUNBLFVBQVUsU0FBUyxJQUNuQjtBQUNKLFNBQU8sV0FBVztBQUNoQixRQUFJLFVBQVUsS0FBSyxlQUFlLFNBQVMsT0FBTyxTQUFTLEtBQUs7QUFDaEUsV0FBTyxZQUFZLFVBQVUsT0FDdkIsWUFBWSxXQUFXLGVBQ3ZCLGVBQWVBLGFBQVksV0FBVyxTQUFTLE1BQU07QUFBQSxFQUMvRDtBQUNBO0FBRUEsU0FBUyxhQUFhLE1BQU1BLGNBQWEsT0FBTztBQUM5QyxNQUFJLFVBQ0EsVUFDQTtBQUNKLFNBQU8sV0FBVztBQUNoQixRQUFJLFNBQVMsU0FBUyxNQUFNLElBQUksR0FBRztBQUNuQyxRQUFJLFVBQVU7QUFBTSxhQUFPLEtBQUssS0FBSyxnQkFBZ0IsSUFBSTtBQUN6RCxjQUFVLEtBQUssYUFBYSxJQUFJO0FBQ2hDLGNBQVUsU0FBUztBQUNuQixXQUFPLFlBQVksVUFBVSxPQUN2QixZQUFZLFlBQVksWUFBWSxXQUFXLGdCQUM5QyxXQUFXLFNBQVMsZUFBZUEsYUFBWSxXQUFXLFNBQVMsTUFBTTtBQUFBLEVBQ3BGO0FBQ0E7QUFFQSxTQUFTLGVBQWUsVUFBVUEsY0FBYSxPQUFPO0FBQ3BELE1BQUksVUFDQSxVQUNBO0FBQ0osU0FBTyxXQUFXO0FBQ2hCLFFBQUksU0FBUyxTQUFTLE1BQU0sSUFBSSxHQUFHO0FBQ25DLFFBQUksVUFBVTtBQUFNLGFBQU8sS0FBSyxLQUFLLGtCQUFrQixTQUFTLE9BQU8sU0FBUyxLQUFLO0FBQ3JGLGNBQVUsS0FBSyxlQUFlLFNBQVMsT0FBTyxTQUFTLEtBQUs7QUFDNUQsY0FBVSxTQUFTO0FBQ25CLFdBQU8sWUFBWSxVQUFVLE9BQ3ZCLFlBQVksWUFBWSxZQUFZLFdBQVcsZ0JBQzlDLFdBQVcsU0FBUyxlQUFlQSxhQUFZLFdBQVcsU0FBUyxNQUFNO0FBQUEsRUFDcEY7QUFDQTtBQUVlLFNBQUEsZ0JBQVMsTUFBTSxPQUFPO0FBQ25DLE1BQUksV0FBVyxVQUFVLElBQUksR0FBRyxJQUFJLGFBQWEsY0FBY0MsMEJBQXVCO0FBQ3RGLFNBQU8sS0FBSyxVQUFVLE1BQU0sT0FBTyxVQUFVLGNBQ3RDLFNBQVMsUUFBUSxpQkFBaUIsY0FBYyxVQUFVLEdBQUcsV0FBVyxNQUFNLFVBQVUsTUFBTSxLQUFLLENBQUMsSUFDckcsU0FBUyxRQUFRLFNBQVMsUUFBUSxlQUFlLFlBQVksUUFBUSxLQUNwRSxTQUFTLFFBQVEsaUJBQWlCLGNBQWMsVUFBVSxHQUFHLEtBQUssQ0FBQztBQUM1RTtBQzNFQSxTQUFTLGdCQUFnQixNQUFNLEdBQUc7QUFDaEMsU0FBTyxTQUFTLEdBQUc7QUFDakIsU0FBSyxhQUFhLE1BQU0sRUFBRSxLQUFLLE1BQU0sQ0FBQyxDQUFDO0FBQUEsRUFDM0M7QUFDQTtBQUVBLFNBQVMsa0JBQWtCLFVBQVUsR0FBRztBQUN0QyxTQUFPLFNBQVMsR0FBRztBQUNqQixTQUFLLGVBQWUsU0FBUyxPQUFPLFNBQVMsT0FBTyxFQUFFLEtBQUssTUFBTSxDQUFDLENBQUM7QUFBQSxFQUN2RTtBQUNBO0FBRUEsU0FBUyxZQUFZLFVBQVUsT0FBTztBQUNwQyxNQUFJLElBQUk7QUFDUixXQUFTLFFBQVE7QUFDZixRQUFJLElBQUksTUFBTSxNQUFNLE1BQU0sU0FBUztBQUNuQyxRQUFJLE1BQU07QUFBSSxZQUFNLEtBQUssTUFBTSxrQkFBa0IsVUFBVSxDQUFDO0FBQzVELFdBQU87QUFBQSxFQUNSO0FBQ0QsUUFBTSxTQUFTO0FBQ2YsU0FBTztBQUNUO0FBRUEsU0FBUyxVQUFVLE1BQU0sT0FBTztBQUM5QixNQUFJLElBQUk7QUFDUixXQUFTLFFBQVE7QUFDZixRQUFJLElBQUksTUFBTSxNQUFNLE1BQU0sU0FBUztBQUNuQyxRQUFJLE1BQU07QUFBSSxZQUFNLEtBQUssTUFBTSxnQkFBZ0IsTUFBTSxDQUFDO0FBQ3RELFdBQU87QUFBQSxFQUNSO0FBQ0QsUUFBTSxTQUFTO0FBQ2YsU0FBTztBQUNUO0FBRWUsU0FBQSxxQkFBUyxNQUFNLE9BQU87QUFDbkMsTUFBSSxNQUFNLFVBQVU7QUFDcEIsTUFBSSxVQUFVLFNBQVM7QUFBRyxZQUFRLE1BQU0sS0FBSyxNQUFNLEdBQUcsTUFBTSxJQUFJO0FBQ2hFLE1BQUksU0FBUztBQUFNLFdBQU8sS0FBSyxNQUFNLEtBQUssSUFBSTtBQUM5QyxNQUFJLE9BQU8sVUFBVTtBQUFZLFVBQU0sSUFBSTtBQUMzQyxNQUFJLFdBQVcsVUFBVSxJQUFJO0FBQzdCLFNBQU8sS0FBSyxNQUFNLE1BQU0sU0FBUyxRQUFRLGNBQWMsV0FBVyxVQUFVLEtBQUssQ0FBQztBQUNwRjtBQ3pDQSxTQUFTLGNBQWNKLEtBQUksT0FBTztBQUNoQyxTQUFPLFdBQVc7QUFDaEIsU0FBSyxNQUFNQSxHQUFFLEVBQUUsUUFBUSxDQUFDLE1BQU0sTUFBTSxNQUFNLFNBQVM7QUFBQSxFQUN2RDtBQUNBO0FBRUEsU0FBUyxjQUFjQSxLQUFJLE9BQU87QUFDaEMsU0FBTyxRQUFRLENBQUMsT0FBTyxXQUFXO0FBQ2hDLFNBQUssTUFBTUEsR0FBRSxFQUFFLFFBQVE7QUFBQSxFQUMzQjtBQUNBO0FBRWUsU0FBUSxpQkFBQyxPQUFPO0FBQzdCLE1BQUlBLE1BQUssS0FBSztBQUVkLFNBQU8sVUFBVSxTQUNYLEtBQUssTUFBTSxPQUFPLFVBQVUsYUFDeEIsZ0JBQ0EsZUFBZUEsS0FBSSxLQUFLLENBQUMsSUFDN0IsSUFBSSxLQUFLLEtBQU0sR0FBRUEsR0FBRSxFQUFFO0FBQzdCO0FDcEJBLFNBQVMsaUJBQWlCQSxLQUFJLE9BQU87QUFDbkMsU0FBTyxXQUFXO0FBQ2hCLFFBQUksTUFBTUEsR0FBRSxFQUFFLFdBQVcsQ0FBQyxNQUFNLE1BQU0sTUFBTSxTQUFTO0FBQUEsRUFDekQ7QUFDQTtBQUVBLFNBQVMsaUJBQWlCQSxLQUFJLE9BQU87QUFDbkMsU0FBTyxRQUFRLENBQUMsT0FBTyxXQUFXO0FBQ2hDLFFBQUksTUFBTUEsR0FBRSxFQUFFLFdBQVc7QUFBQSxFQUM3QjtBQUNBO0FBRWUsU0FBUSxvQkFBQyxPQUFPO0FBQzdCLE1BQUlBLE1BQUssS0FBSztBQUVkLFNBQU8sVUFBVSxTQUNYLEtBQUssTUFBTSxPQUFPLFVBQVUsYUFDeEIsbUJBQ0Esa0JBQWtCQSxLQUFJLEtBQUssQ0FBQyxJQUNoQyxJQUFJLEtBQUssS0FBTSxHQUFFQSxHQUFFLEVBQUU7QUFDN0I7QUNwQkEsU0FBUyxhQUFhQSxLQUFJLE9BQU87QUFDL0IsTUFBSSxPQUFPLFVBQVU7QUFBWSxVQUFNLElBQUk7QUFDM0MsU0FBTyxXQUFXO0FBQ2hCLFFBQUksTUFBTUEsR0FBRSxFQUFFLE9BQU87QUFBQSxFQUN6QjtBQUNBO0FBRWUsU0FBUSxnQkFBQyxPQUFPO0FBQzdCLE1BQUlBLE1BQUssS0FBSztBQUVkLFNBQU8sVUFBVSxTQUNYLEtBQUssS0FBSyxhQUFhQSxLQUFJLEtBQUssQ0FBQyxJQUNqQyxJQUFJLEtBQUssS0FBTSxHQUFFQSxHQUFFLEVBQUU7QUFDN0I7QUNiQSxTQUFTLFlBQVlBLEtBQUksT0FBTztBQUM5QixTQUFPLFdBQVc7QUFDaEIsUUFBSXBCLEtBQUksTUFBTSxNQUFNLE1BQU0sU0FBUztBQUNuQyxRQUFJLE9BQU9BLE9BQU07QUFBWSxZQUFNLElBQUk7QUFDdkMsUUFBSSxNQUFNb0IsR0FBRSxFQUFFLE9BQU9wQjtBQUFBLEVBQ3pCO0FBQ0E7QUFFZSxTQUFRLHVCQUFDLE9BQU87QUFDN0IsTUFBSSxPQUFPLFVBQVU7QUFBWSxVQUFNLElBQUk7QUFDM0MsU0FBTyxLQUFLLEtBQUssWUFBWSxLQUFLLEtBQUssS0FBSyxDQUFDO0FBQy9DO0FDVmUsU0FBUSxrQkFBQyxPQUFPO0FBQzdCLE1BQUksT0FBTyxVQUFVO0FBQVksWUFBUSxRQUFRLEtBQUs7QUFFdEQsV0FBUyxTQUFTLEtBQUssU0FBU1YsS0FBSSxPQUFPLFFBQVEsWUFBWSxJQUFJLE1BQU1BLEVBQUMsR0FBR0MsS0FBSSxHQUFHQSxLQUFJRCxJQUFHLEVBQUVDLElBQUc7QUFDOUYsYUFBUyxRQUFRLE9BQU9BLEVBQUMsR0FBRyxJQUFJLE1BQU0sUUFBUSxXQUFXLFVBQVVBLEVBQUMsSUFBSSxDQUFBLEdBQUksTUFBTSxJQUFJLEdBQUcsSUFBSSxHQUFHLEVBQUUsR0FBRztBQUNuRyxXQUFLLE9BQU8sTUFBTSxDQUFDLE1BQU0sTUFBTSxLQUFLLE1BQU0sS0FBSyxVQUFVLEdBQUcsS0FBSyxHQUFHO0FBQ2xFLGlCQUFTLEtBQUssSUFBSTtBQUFBLE1BQ25CO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFFRCxTQUFPLElBQUksV0FBVyxXQUFXLEtBQUssVUFBVSxLQUFLLE9BQU8sS0FBSyxHQUFHO0FBQ3RFO0FDYmUsU0FBUSxpQkFBQyxZQUFZO0FBQ2xDLE1BQUksV0FBVyxRQUFRLEtBQUs7QUFBSyxVQUFNLElBQUk7QUFFM0MsV0FBUyxVQUFVLEtBQUssU0FBUyxVQUFVLFdBQVcsU0FBUyxLQUFLLFFBQVEsUUFBUSxLQUFLLFFBQVEsUUFBUUQsS0FBSSxLQUFLLElBQUksSUFBSSxFQUFFLEdBQUcsU0FBUyxJQUFJLE1BQU0sRUFBRSxHQUFHQyxLQUFJLEdBQUdBLEtBQUlELElBQUcsRUFBRUMsSUFBRztBQUN4SyxhQUFTLFNBQVMsUUFBUUEsRUFBQyxHQUFHLFNBQVMsUUFBUUEsRUFBQyxHQUFHLElBQUksT0FBTyxRQUFRLFFBQVEsT0FBT0EsRUFBQyxJQUFJLElBQUksTUFBTSxDQUFDLEdBQUcsTUFBTSxJQUFJLEdBQUcsSUFBSSxHQUFHLEVBQUUsR0FBRztBQUMvSCxVQUFJLE9BQU8sT0FBTyxDQUFDLEtBQUssT0FBTyxDQUFDLEdBQUc7QUFDakMsY0FBTSxDQUFDLElBQUk7QUFBQSxNQUNaO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFFRCxTQUFPQSxLQUFJLElBQUksRUFBRUEsSUFBRztBQUNsQixXQUFPQSxFQUFDLElBQUksUUFBUUEsRUFBQztBQUFBLEVBQ3RCO0FBRUQsU0FBTyxJQUFJLFdBQVcsUUFBUSxLQUFLLFVBQVUsS0FBSyxPQUFPLEtBQUssR0FBRztBQUNuRTtBQ2hCQSxTQUFTLE1BQU0sTUFBTTtBQUNuQixVQUFRLE9BQU8sSUFBSSxLQUFNLEVBQUMsTUFBTSxPQUFPLEVBQUUsTUFBTSxTQUFTLEdBQUc7QUFDekQsUUFBSSxJQUFJLEVBQUUsUUFBUSxHQUFHO0FBQ3JCLFFBQUksS0FBSztBQUFHLFVBQUksRUFBRSxNQUFNLEdBQUcsQ0FBQztBQUM1QixXQUFPLENBQUMsS0FBSyxNQUFNO0FBQUEsRUFDdkIsQ0FBRztBQUNIO0FBRUEsU0FBUyxXQUFXNkIsS0FBSSxNQUFNLFVBQVU7QUFDdEMsTUFBSSxLQUFLLEtBQUssTUFBTSxNQUFNLElBQUksSUFBSSxPQUFPO0FBQ3pDLFNBQU8sV0FBVztBQUNoQixRQUFJQyxZQUFXLElBQUksTUFBTUQsR0FBRSxHQUN2QixLQUFLQyxVQUFTO0FBS2xCLFFBQUksT0FBTztBQUFLLE9BQUMsT0FBTyxNQUFNLElBQUksUUFBUSxHQUFHLE1BQU0sUUFBUTtBQUUzRCxJQUFBQSxVQUFTLEtBQUs7QUFBQSxFQUNsQjtBQUNBO0FBRWUsU0FBQSxjQUFTLE1BQU0sVUFBVTtBQUN0QyxNQUFJRCxNQUFLLEtBQUs7QUFFZCxTQUFPLFVBQVUsU0FBUyxJQUNwQixJQUFJLEtBQUssS0FBTSxHQUFFQSxHQUFFLEVBQUUsR0FBRyxHQUFHLElBQUksSUFDL0IsS0FBSyxLQUFLLFdBQVdBLEtBQUksTUFBTSxRQUFRLENBQUM7QUFDaEQ7QUMvQkEsU0FBUyxlQUFlQSxLQUFJO0FBQzFCLFNBQU8sV0FBVztBQUNoQixRQUFJLFNBQVMsS0FBSztBQUNsQixhQUFTLEtBQUssS0FBSztBQUFjLFVBQUksQ0FBQyxNQUFNQTtBQUFJO0FBQ2hELFFBQUk7QUFBUSxhQUFPLFlBQVksSUFBSTtBQUFBLEVBQ3ZDO0FBQ0E7QUFFZSxTQUFBLG9CQUFXO0FBQ3hCLFNBQU8sS0FBSyxHQUFHLGNBQWMsZUFBZSxLQUFLLEdBQUcsQ0FBQztBQUN2RDtBQ05lLFNBQVEsa0JBQUMvQixTQUFRO0FBQzlCLE1BQUksT0FBTyxLQUFLLE9BQ1orQixNQUFLLEtBQUs7QUFFZCxNQUFJLE9BQU8vQixZQUFXO0FBQVksSUFBQUEsVUFBUyxTQUFTQSxPQUFNO0FBRTFELFdBQVMsU0FBUyxLQUFLLFNBQVNDLEtBQUksT0FBTyxRQUFRLFlBQVksSUFBSSxNQUFNQSxFQUFDLEdBQUdDLEtBQUksR0FBR0EsS0FBSUQsSUFBRyxFQUFFQyxJQUFHO0FBQzlGLGFBQVMsUUFBUSxPQUFPQSxFQUFDLEdBQUcsSUFBSSxNQUFNLFFBQVEsV0FBVyxVQUFVQSxFQUFDLElBQUksSUFBSSxNQUFNLENBQUMsR0FBRyxNQUFNLFNBQVMsSUFBSSxHQUFHLElBQUksR0FBRyxFQUFFLEdBQUc7QUFDdEgsV0FBSyxPQUFPLE1BQU0sQ0FBQyxPQUFPLFVBQVVGLFFBQU8sS0FBSyxNQUFNLEtBQUssVUFBVSxHQUFHLEtBQUssSUFBSTtBQUMvRSxZQUFJLGNBQWM7QUFBTSxrQkFBUSxXQUFXLEtBQUs7QUFDaEQsaUJBQVMsQ0FBQyxJQUFJO0FBQ2QsaUJBQVMsU0FBUyxDQUFDLEdBQUcsTUFBTStCLEtBQUksR0FBRyxVQUFVLElBQUksTUFBTUEsR0FBRSxDQUFDO0FBQUEsTUFDM0Q7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUVELFNBQU8sSUFBSSxXQUFXLFdBQVcsS0FBSyxVQUFVLE1BQU1BLEdBQUU7QUFDMUQ7QUNqQmUsU0FBUSxxQkFBQy9CLFNBQVE7QUFDOUIsTUFBSSxPQUFPLEtBQUssT0FDWitCLE1BQUssS0FBSztBQUVkLE1BQUksT0FBTy9CLFlBQVc7QUFBWSxJQUFBQSxVQUFTLFlBQVlBLE9BQU07QUFFN0QsV0FBUyxTQUFTLEtBQUssU0FBU0MsS0FBSSxPQUFPLFFBQVEsWUFBWSxDQUFFLEdBQUUsVUFBVSxDQUFFLEdBQUVDLEtBQUksR0FBR0EsS0FBSUQsSUFBRyxFQUFFQyxJQUFHO0FBQ2xHLGFBQVMsUUFBUSxPQUFPQSxFQUFDLEdBQUcsSUFBSSxNQUFNLFFBQVEsTUFBTSxJQUFJLEdBQUcsSUFBSSxHQUFHLEVBQUUsR0FBRztBQUNyRSxVQUFJLE9BQU8sTUFBTSxDQUFDLEdBQUc7QUFDbkIsaUJBQVNrQyxZQUFXcEMsUUFBTyxLQUFLLE1BQU0sS0FBSyxVQUFVLEdBQUcsS0FBSyxHQUFHLE9BQU9xQyxXQUFVLElBQUksTUFBTU4sR0FBRSxHQUFHLElBQUksR0FBRyxJQUFJSyxVQUFTLFFBQVEsSUFBSSxHQUFHLEVBQUUsR0FBRztBQUN0SSxjQUFJLFFBQVFBLFVBQVMsQ0FBQyxHQUFHO0FBQ3ZCLHFCQUFTLE9BQU8sTUFBTUwsS0FBSSxHQUFHSyxXQUFVQyxRQUFPO0FBQUEsVUFDL0M7QUFBQSxRQUNGO0FBQ0Qsa0JBQVUsS0FBS0QsU0FBUTtBQUN2QixnQkFBUSxLQUFLLElBQUk7QUFBQSxNQUNsQjtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBRUQsU0FBTyxJQUFJLFdBQVcsV0FBVyxTQUFTLE1BQU1MLEdBQUU7QUFDcEQ7QUN2QkEsSUFBSSxZQUFZLFVBQVUsVUFBVTtBQUVyQixTQUFBLHVCQUFXO0FBQ3hCLFNBQU8sSUFBSSxVQUFVLEtBQUssU0FBUyxLQUFLLFFBQVE7QUFDbEQ7QUNBQSxTQUFTLFVBQVUsTUFBTUcsY0FBYTtBQUNwQyxNQUFJLFVBQ0EsVUFDQTtBQUNKLFNBQU8sV0FBVztBQUNoQixRQUFJLFVBQVVJLFdBQU0sTUFBTSxJQUFJLEdBQzFCLFdBQVcsS0FBSyxNQUFNLGVBQWUsSUFBSSxHQUFHQSxXQUFNLE1BQU0sSUFBSTtBQUNoRSxXQUFPLFlBQVksVUFBVSxPQUN2QixZQUFZLFlBQVksWUFBWSxXQUFXLGVBQy9DLGVBQWVKLGFBQVksV0FBVyxTQUFTLFdBQVcsT0FBTztBQUFBLEVBQzNFO0FBQ0E7QUFFQSxTQUFTLFlBQVksTUFBTTtBQUN6QixTQUFPLFdBQVc7QUFDaEIsU0FBSyxNQUFNLGVBQWUsSUFBSTtBQUFBLEVBQ2xDO0FBQ0E7QUFFQSxTQUFTLGNBQWMsTUFBTUEsY0FBYSxRQUFRO0FBQ2hELE1BQUksVUFDQSxVQUFVLFNBQVMsSUFDbkI7QUFDSixTQUFPLFdBQVc7QUFDaEIsUUFBSSxVQUFVSSxXQUFNLE1BQU0sSUFBSTtBQUM5QixXQUFPLFlBQVksVUFBVSxPQUN2QixZQUFZLFdBQVcsZUFDdkIsZUFBZUosYUFBWSxXQUFXLFNBQVMsTUFBTTtBQUFBLEVBQy9EO0FBQ0E7QUFFQSxTQUFTLGNBQWMsTUFBTUEsY0FBYSxPQUFPO0FBQy9DLE1BQUksVUFDQSxVQUNBO0FBQ0osU0FBTyxXQUFXO0FBQ2hCLFFBQUksVUFBVUksV0FBTSxNQUFNLElBQUksR0FDMUIsU0FBUyxNQUFNLElBQUksR0FDbkIsVUFBVSxTQUFTO0FBQ3ZCLFFBQUksVUFBVTtBQUFNLGdCQUFVLFVBQVUsS0FBSyxNQUFNLGVBQWUsSUFBSSxHQUFHQSxXQUFNLE1BQU0sSUFBSTtBQUN6RixXQUFPLFlBQVksVUFBVSxPQUN2QixZQUFZLFlBQVksWUFBWSxXQUFXLGdCQUM5QyxXQUFXLFNBQVMsZUFBZUosYUFBWSxXQUFXLFNBQVMsTUFBTTtBQUFBLEVBQ3BGO0FBQ0E7QUFFQSxTQUFTLGlCQUFpQkgsS0FBSSxNQUFNO0FBQ2xDLE1BQUksS0FBSyxLQUFLLFdBQVcsTUFBTSxXQUFXLE1BQU0sUUFBUSxTQUFTLEtBQUtRO0FBQ3RFLFNBQU8sV0FBVztBQUNoQixRQUFJUCxZQUFXLElBQUksTUFBTUQsR0FBRSxHQUN2QixLQUFLQyxVQUFTLElBQ2QsV0FBV0EsVUFBUyxNQUFNLEdBQUcsS0FBSyxPQUFPTyxZQUFXQSxVQUFTLFlBQVksSUFBSSxLQUFLO0FBS3RGLFFBQUksT0FBTyxPQUFPLGNBQWM7QUFBVSxPQUFDLE9BQU8sTUFBTSxJQUFJLEtBQU0sR0FBRSxHQUFHLE9BQU8sWUFBWSxRQUFRO0FBRWxHLElBQUFQLFVBQVMsS0FBSztBQUFBLEVBQ2xCO0FBQ0E7QUFFZSxTQUFBLGlCQUFTLE1BQU0sT0FBTyxVQUFVO0FBQzdDLE1BQUksS0FBSyxRQUFRLFFBQVEsY0FBY0csMEJBQXVCO0FBQzlELFNBQU8sU0FBUyxPQUFPLEtBQ2xCLFdBQVcsTUFBTSxVQUFVLE1BQU0sQ0FBQyxDQUFDLEVBQ25DLEdBQUcsZUFBZSxNQUFNLFlBQVksSUFBSSxDQUFDLElBQzFDLE9BQU8sVUFBVSxhQUFhLEtBQzdCLFdBQVcsTUFBTSxjQUFjLE1BQU0sR0FBRyxXQUFXLE1BQU0sV0FBVyxNQUFNLEtBQUssQ0FBQyxDQUFDLEVBQ2pGLEtBQUssaUJBQWlCLEtBQUssS0FBSyxJQUFJLENBQUMsSUFDdEMsS0FDQyxXQUFXLE1BQU0sY0FBYyxNQUFNLEdBQUcsS0FBSyxHQUFHLFFBQVEsRUFDeEQsR0FBRyxlQUFlLE1BQU0sSUFBSTtBQUNuQztBQy9FQSxTQUFTLGlCQUFpQixNQUFNLEdBQUcsVUFBVTtBQUMzQyxTQUFPLFNBQVMsR0FBRztBQUNqQixTQUFLLE1BQU0sWUFBWSxNQUFNLEVBQUUsS0FBSyxNQUFNLENBQUMsR0FBRyxRQUFRO0FBQUEsRUFDMUQ7QUFDQTtBQUVBLFNBQVMsV0FBVyxNQUFNLE9BQU8sVUFBVTtBQUN6QyxNQUFJLEdBQUc7QUFDUCxXQUFTLFFBQVE7QUFDZixRQUFJLElBQUksTUFBTSxNQUFNLE1BQU0sU0FBUztBQUNuQyxRQUFJLE1BQU07QUFBSSxXQUFLLEtBQUssTUFBTSxpQkFBaUIsTUFBTSxHQUFHLFFBQVE7QUFDaEUsV0FBTztBQUFBLEVBQ1I7QUFDRCxRQUFNLFNBQVM7QUFDZixTQUFPO0FBQ1Q7QUFFZSxTQUFBLHNCQUFTLE1BQU0sT0FBTyxVQUFVO0FBQzdDLE1BQUksTUFBTSxZQUFZLFFBQVE7QUFDOUIsTUFBSSxVQUFVLFNBQVM7QUFBRyxZQUFRLE1BQU0sS0FBSyxNQUFNLEdBQUcsTUFBTSxJQUFJO0FBQ2hFLE1BQUksU0FBUztBQUFNLFdBQU8sS0FBSyxNQUFNLEtBQUssSUFBSTtBQUM5QyxNQUFJLE9BQU8sVUFBVTtBQUFZLFVBQU0sSUFBSTtBQUMzQyxTQUFPLEtBQUssTUFBTSxLQUFLLFdBQVcsTUFBTSxPQUFPLFlBQVksT0FBTyxLQUFLLFFBQVEsQ0FBQztBQUNsRjtBQ3JCQSxTQUFTLGFBQWEsT0FBTztBQUMzQixTQUFPLFdBQVc7QUFDaEIsU0FBSyxjQUFjO0FBQUEsRUFDdkI7QUFDQTtBQUVBLFNBQVMsYUFBYSxPQUFPO0FBQzNCLFNBQU8sV0FBVztBQUNoQixRQUFJLFNBQVMsTUFBTSxJQUFJO0FBQ3ZCLFNBQUssY0FBYyxVQUFVLE9BQU8sS0FBSztBQUFBLEVBQzdDO0FBQ0E7QUFFZSxTQUFRLGdCQUFDLE9BQU87QUFDN0IsU0FBTyxLQUFLLE1BQU0sUUFBUSxPQUFPLFVBQVUsYUFDckMsYUFBYSxXQUFXLE1BQU0sUUFBUSxLQUFLLENBQUMsSUFDNUMsYUFBYSxTQUFTLE9BQU8sS0FBSyxRQUFRLEVBQUUsQ0FBQztBQUNyRDtBQ25CQSxTQUFTLGdCQUFnQixHQUFHO0FBQzFCLFNBQU8sU0FBUyxHQUFHO0FBQ2pCLFNBQUssY0FBYyxFQUFFLEtBQUssTUFBTSxDQUFDO0FBQUEsRUFDckM7QUFDQTtBQUVBLFNBQVMsVUFBVSxPQUFPO0FBQ3hCLE1BQUksSUFBSTtBQUNSLFdBQVMsUUFBUTtBQUNmLFFBQUksSUFBSSxNQUFNLE1BQU0sTUFBTSxTQUFTO0FBQ25DLFFBQUksTUFBTTtBQUFJLFlBQU0sS0FBSyxNQUFNLGdCQUFnQixDQUFDO0FBQ2hELFdBQU87QUFBQSxFQUNSO0FBQ0QsUUFBTSxTQUFTO0FBQ2YsU0FBTztBQUNUO0FBRWUsU0FBUSxxQkFBQyxPQUFPO0FBQzdCLE1BQUksTUFBTTtBQUNWLE1BQUksVUFBVSxTQUFTO0FBQUcsWUFBUSxNQUFNLEtBQUssTUFBTSxHQUFHLE1BQU0sSUFBSTtBQUNoRSxNQUFJLFNBQVM7QUFBTSxXQUFPLEtBQUssTUFBTSxLQUFLLElBQUk7QUFDOUMsTUFBSSxPQUFPLFVBQVU7QUFBWSxVQUFNLElBQUk7QUFDM0MsU0FBTyxLQUFLLE1BQU0sS0FBSyxVQUFVLEtBQUssQ0FBQztBQUN6QztBQ3BCZSxTQUFBLHdCQUFXO0FBQ3hCLE1BQUksT0FBTyxLQUFLLE9BQ1osTUFBTSxLQUFLLEtBQ1gsTUFBTSxNQUFLO0FBRWYsV0FBUyxTQUFTLEtBQUssU0FBU2xDLEtBQUksT0FBTyxRQUFRQyxLQUFJLEdBQUdBLEtBQUlELElBQUcsRUFBRUMsSUFBRztBQUNwRSxhQUFTLFFBQVEsT0FBT0EsRUFBQyxHQUFHLElBQUksTUFBTSxRQUFRLE1BQU0sSUFBSSxHQUFHLElBQUksR0FBRyxFQUFFLEdBQUc7QUFDckUsVUFBSSxPQUFPLE1BQU0sQ0FBQyxHQUFHO0FBQ25CLFlBQUltQyxXQUFVLElBQUksTUFBTSxHQUFHO0FBQzNCLGlCQUFTLE1BQU0sTUFBTSxLQUFLLEdBQUcsT0FBTztBQUFBLFVBQ2xDLE1BQU1BLFNBQVEsT0FBT0EsU0FBUSxRQUFRQSxTQUFRO0FBQUEsVUFDN0MsT0FBTztBQUFBLFVBQ1AsVUFBVUEsU0FBUTtBQUFBLFVBQ2xCLE1BQU1BLFNBQVE7QUFBQSxRQUN4QixDQUFTO0FBQUEsTUFDRjtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBRUQsU0FBTyxJQUFJLFdBQVcsUUFBUSxLQUFLLFVBQVUsTUFBTSxHQUFHO0FBQ3hEO0FDckJlLFNBQUEsaUJBQVc7QUFDeEIsTUFBSSxLQUFLLEtBQUssT0FBTyxNQUFNTixNQUFLLEtBQUssS0FBSyxPQUFPLEtBQUssS0FBSTtBQUMxRCxTQUFPLElBQUksUUFBUSxTQUFTLFNBQVMsUUFBUTtBQUMzQyxRQUFJLFNBQVMsRUFBQyxPQUFPLE9BQU0sR0FDdkIsTUFBTSxFQUFDLE9BQU8sV0FBVztBQUFFLFVBQUksRUFBRSxTQUFTO0FBQUc7SUFBVSxFQUFFO0FBRTdELFNBQUssS0FBSyxXQUFXO0FBQ25CLFVBQUlDLFlBQVcsSUFBSSxNQUFNRCxHQUFFLEdBQ3ZCLEtBQUtDLFVBQVM7QUFLbEIsVUFBSSxPQUFPLEtBQUs7QUFDZCxlQUFPLE1BQU0sSUFBSSxLQUFJO0FBQ3JCLFlBQUksRUFBRSxPQUFPLEtBQUssTUFBTTtBQUN4QixZQUFJLEVBQUUsVUFBVSxLQUFLLE1BQU07QUFDM0IsWUFBSSxFQUFFLElBQUksS0FBSyxHQUFHO0FBQUEsTUFDbkI7QUFFRCxNQUFBQSxVQUFTLEtBQUs7QUFBQSxJQUNwQixDQUFLO0FBR0QsUUFBSSxTQUFTO0FBQUc7RUFDcEIsQ0FBRztBQUNIO0FDTkEsSUFBSSxLQUFLO0FBRUYsU0FBUyxXQUFXLFFBQVEsU0FBUyxNQUFNRCxLQUFJO0FBQ3BELE9BQUssVUFBVTtBQUNmLE9BQUssV0FBVztBQUNoQixPQUFLLFFBQVE7QUFDYixPQUFLLE1BQU1BO0FBQ2I7QUFNTyxTQUFTLFFBQVE7QUFDdEIsU0FBTyxFQUFFO0FBQ1g7QUFFQSxJQUFJLHNCQUFzQixVQUFVO0FBRXBDLFdBQVcsWUFBbUM7QUFBQSxFQUM1QyxhQUFhO0FBQUEsRUFDYixRQUFRO0FBQUEsRUFDUixXQUFXO0FBQUEsRUFDWCxhQUFhLG9CQUFvQjtBQUFBLEVBQ2pDLGdCQUFnQixvQkFBb0I7QUFBQSxFQUNwQyxRQUFRO0FBQUEsRUFDUixPQUFPO0FBQUEsRUFDUCxXQUFXO0FBQUEsRUFDWCxZQUFZO0FBQUEsRUFDWixNQUFNLG9CQUFvQjtBQUFBLEVBQzFCLE9BQU8sb0JBQW9CO0FBQUEsRUFDM0IsTUFBTSxvQkFBb0I7QUFBQSxFQUMxQixNQUFNLG9CQUFvQjtBQUFBLEVBQzFCLE9BQU8sb0JBQW9CO0FBQUEsRUFDM0IsTUFBTSxvQkFBb0I7QUFBQSxFQUMxQixJQUFJO0FBQUEsRUFDSixNQUFNO0FBQUEsRUFDTixXQUFXO0FBQUEsRUFDWCxPQUFPO0FBQUEsRUFDUCxZQUFZO0FBQUEsRUFDWixNQUFNO0FBQUEsRUFDTixXQUFXO0FBQUEsRUFDWCxRQUFRO0FBQUEsRUFDUixPQUFPO0FBQUEsRUFDUCxPQUFPO0FBQUEsRUFDUCxVQUFVO0FBQUEsRUFDVixNQUFNO0FBQUEsRUFDTixhQUFhO0FBQUEsRUFDYixLQUFLO0FBQUEsRUFDTCxDQUFDLE9BQU8sUUFBUSxHQUFHLG9CQUFvQixPQUFPLFFBQVE7QUFDeEQ7QUNoRU8sU0FBUyxXQUFXLEdBQUc7QUFDNUIsV0FBUyxLQUFLLE1BQU0sSUFBSSxJQUFJLElBQUksS0FBSyxLQUFLLEtBQUssSUFBSSxJQUFJLEtBQUs7QUFDOUQ7QUNMQSxJQUFJLGdCQUFnQjtBQUFBLEVBQ2xCLE1BQU07QUFBQTtBQUFBLEVBQ04sT0FBTztBQUFBLEVBQ1AsVUFBVTtBQUFBLEVBQ1YsTUFBTVM7QUFDUjtBQUVBLFNBQVMsUUFBUSxNQUFNVCxLQUFJO0FBQ3pCLE1BQUk7QUFDSixTQUFPLEVBQUUsU0FBUyxLQUFLLGlCQUFpQixFQUFFLFNBQVMsT0FBT0EsR0FBRSxJQUFJO0FBQzlELFFBQUksRUFBRSxPQUFPLEtBQUssYUFBYTtBQUM3QixZQUFNLElBQUksTUFBTSxjQUFjQSxHQUFFLFlBQVk7QUFBQSxJQUM3QztBQUFBLEVBQ0Y7QUFDRCxTQUFPO0FBQ1Q7QUFFZSxTQUFRLHFCQUFDLE1BQU07QUFDNUIsTUFBSUEsS0FDQTtBQUVKLE1BQUksZ0JBQWdCLFlBQVk7QUFDOUIsSUFBQUEsTUFBSyxLQUFLLEtBQUssT0FBTyxLQUFLO0FBQUEsRUFDL0IsT0FBUztBQUNMLElBQUFBLE1BQUssTUFBTyxJQUFHLFNBQVMsZUFBZSxPQUFPLE9BQU8sT0FBTyxRQUFRLE9BQU8sT0FBTyxPQUFPO0FBQUEsRUFDMUY7QUFFRCxXQUFTLFNBQVMsS0FBSyxTQUFTOUIsS0FBSSxPQUFPLFFBQVFDLEtBQUksR0FBR0EsS0FBSUQsSUFBRyxFQUFFQyxJQUFHO0FBQ3BFLGFBQVMsUUFBUSxPQUFPQSxFQUFDLEdBQUcsSUFBSSxNQUFNLFFBQVEsTUFBTSxJQUFJLEdBQUcsSUFBSSxHQUFHLEVBQUUsR0FBRztBQUNyRSxVQUFJLE9BQU8sTUFBTSxDQUFDLEdBQUc7QUFDbkIsaUJBQVMsTUFBTSxNQUFNNkIsS0FBSSxHQUFHLE9BQU8sVUFBVSxRQUFRLE1BQU1BLEdBQUUsQ0FBQztBQUFBLE1BQy9EO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFFRCxTQUFPLElBQUksV0FBVyxRQUFRLEtBQUssVUFBVSxNQUFNQSxHQUFFO0FBQ3ZEO0FDckNBLFVBQVUsVUFBVSxZQUFZO0FBQ2hDLFVBQVUsVUFBVSxhQUFhO0FDTGxCLFNBQVEsY0FBQyxHQUFHO0FBQ3pCLFNBQU8sS0FBSyxJQUFJLElBQUksS0FBSyxNQUFNLENBQUMsQ0FBQyxLQUFLLE9BQ2hDLEVBQUUsZUFBZSxJQUFJLEVBQUUsUUFBUSxNQUFNLEVBQUUsSUFDdkMsRUFBRSxTQUFTLEVBQUU7QUFDckI7QUFLTyxTQUFTLG1CQUFtQixHQUFHLEdBQUc7QUFDdkMsTUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLE1BQU07QUFBRyxXQUFPO0FBQ3BDLE1BQUksS0FBSyxJQUFJLElBQUksRUFBRSxjQUFjLElBQUksQ0FBQyxJQUFJLEVBQUUsaUJBQWlCLFFBQVEsR0FBRyxHQUFHLGNBQWMsRUFBRSxNQUFNLEdBQUcsQ0FBQztBQUlyRyxTQUFPO0FBQUEsSUFDTCxZQUFZLFNBQVMsSUFBSSxZQUFZLENBQUMsSUFBSSxZQUFZLE1BQU0sQ0FBQyxJQUFJO0FBQUEsSUFDakUsQ0FBQyxFQUFFLE1BQU0sSUFBSSxDQUFDO0FBQUEsRUFDbEI7QUFDQTtBQ2pCZSxTQUFRLFNBQUMsR0FBRztBQUN6QixTQUFPLElBQUksbUJBQW1CLEtBQUssSUFBSSxDQUFDLENBQUMsR0FBRyxJQUFJLEVBQUUsQ0FBQyxJQUFJO0FBQ3pEO0FDSmUsU0FBQSxZQUFTLFVBQVUsV0FBVztBQUMzQyxTQUFPLFNBQVMsT0FBTyxPQUFPO0FBQzVCLFFBQUksSUFBSSxNQUFNLFFBQ1YsSUFBSSxDQUFFLEdBQ043QixLQUFJLEdBQ0osSUFBSSxTQUFTLENBQUMsR0FDZCxTQUFTO0FBRWIsV0FBTyxJQUFJLEtBQUssSUFBSSxHQUFHO0FBQ3JCLFVBQUksU0FBUyxJQUFJLElBQUk7QUFBTyxZQUFJLEtBQUssSUFBSSxHQUFHLFFBQVEsTUFBTTtBQUMxRCxRQUFFLEtBQUssTUFBTSxVQUFVLEtBQUssR0FBRyxJQUFJLENBQUMsQ0FBQztBQUNyQyxXQUFLLFVBQVUsSUFBSSxLQUFLO0FBQU87QUFDL0IsVUFBSSxTQUFTQSxNQUFLQSxLQUFJLEtBQUssU0FBUyxNQUFNO0FBQUEsSUFDM0M7QUFFRCxXQUFPLEVBQUUsUUFBTyxFQUFHLEtBQUssU0FBUztBQUFBLEVBQ3JDO0FBQ0E7QUNqQmUsU0FBUSxlQUFDLFVBQVU7QUFDaEMsU0FBTyxTQUFTLE9BQU87QUFDckIsV0FBTyxNQUFNLFFBQVEsVUFBVSxTQUFTLEdBQUc7QUFDekMsYUFBTyxTQUFTLENBQUMsQ0FBQztBQUFBLElBQ3hCLENBQUs7QUFBQSxFQUNMO0FBQ0E7QUNMQSxJQUFJLEtBQUs7QUFFTSxTQUFTLGdCQUFnQixXQUFXO0FBQ2pELE1BQUksRUFBRSxRQUFRLEdBQUcsS0FBSyxTQUFTO0FBQUksVUFBTSxJQUFJLE1BQU0scUJBQXFCLFNBQVM7QUFDakYsTUFBSTtBQUNKLFNBQU8sSUFBSSxnQkFBZ0I7QUFBQSxJQUN6QixNQUFNLE1BQU0sQ0FBQztBQUFBLElBQ2IsT0FBTyxNQUFNLENBQUM7QUFBQSxJQUNkLE1BQU0sTUFBTSxDQUFDO0FBQUEsSUFDYixRQUFRLE1BQU0sQ0FBQztBQUFBLElBQ2YsTUFBTSxNQUFNLENBQUM7QUFBQSxJQUNiLE9BQU8sTUFBTSxDQUFDO0FBQUEsSUFDZCxPQUFPLE1BQU0sQ0FBQztBQUFBLElBQ2QsV0FBVyxNQUFNLENBQUMsS0FBSyxNQUFNLENBQUMsRUFBRSxNQUFNLENBQUM7QUFBQSxJQUN2QyxNQUFNLE1BQU0sQ0FBQztBQUFBLElBQ2IsTUFBTSxNQUFNLEVBQUU7QUFBQSxFQUNsQixDQUFHO0FBQ0g7QUFFQSxnQkFBZ0IsWUFBWSxnQkFBZ0I7QUFFckMsU0FBUyxnQkFBZ0IsV0FBVztBQUN6QyxPQUFLLE9BQU8sVUFBVSxTQUFTLFNBQVksTUFBTSxVQUFVLE9BQU87QUFDbEUsT0FBSyxRQUFRLFVBQVUsVUFBVSxTQUFZLE1BQU0sVUFBVSxRQUFRO0FBQ3JFLE9BQUssT0FBTyxVQUFVLFNBQVMsU0FBWSxNQUFNLFVBQVUsT0FBTztBQUNsRSxPQUFLLFNBQVMsVUFBVSxXQUFXLFNBQVksS0FBSyxVQUFVLFNBQVM7QUFDdkUsT0FBSyxPQUFPLENBQUMsQ0FBQyxVQUFVO0FBQ3hCLE9BQUssUUFBUSxVQUFVLFVBQVUsU0FBWSxTQUFZLENBQUMsVUFBVTtBQUNwRSxPQUFLLFFBQVEsQ0FBQyxDQUFDLFVBQVU7QUFDekIsT0FBSyxZQUFZLFVBQVUsY0FBYyxTQUFZLFNBQVksQ0FBQyxVQUFVO0FBQzVFLE9BQUssT0FBTyxDQUFDLENBQUMsVUFBVTtBQUN4QixPQUFLLE9BQU8sVUFBVSxTQUFTLFNBQVksS0FBSyxVQUFVLE9BQU87QUFDbkU7QUFFQSxnQkFBZ0IsVUFBVSxXQUFXLFdBQVc7QUFDOUMsU0FBTyxLQUFLLE9BQ04sS0FBSyxRQUNMLEtBQUssT0FDTCxLQUFLLFVBQ0osS0FBSyxPQUFPLE1BQU0sT0FDbEIsS0FBSyxVQUFVLFNBQVksS0FBSyxLQUFLLElBQUksR0FBRyxLQUFLLFFBQVEsQ0FBQyxNQUMxRCxLQUFLLFFBQVEsTUFBTSxPQUNuQixLQUFLLGNBQWMsU0FBWSxLQUFLLE1BQU0sS0FBSyxJQUFJLEdBQUcsS0FBSyxZQUFZLENBQUMsTUFDeEUsS0FBSyxPQUFPLE1BQU0sTUFDbkIsS0FBSztBQUNiO0FDN0NlLFNBQVEsV0FBQyxHQUFHO0FBQ3pCO0FBQUssYUFBUyxJQUFJLEVBQUUsUUFBUSxJQUFJLEdBQUcsS0FBSyxJQUFJLElBQUksSUFBSSxHQUFHLEVBQUUsR0FBRztBQUMxRCxjQUFRLEVBQUUsQ0FBQyxHQUFDO0FBQUEsUUFDVixLQUFLO0FBQUssZUFBSyxLQUFLO0FBQUc7QUFBQSxRQUN2QixLQUFLO0FBQUssY0FBSSxPQUFPO0FBQUcsaUJBQUs7QUFBRyxlQUFLO0FBQUc7QUFBQSxRQUN4QztBQUFTLGNBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQztBQUFHLGtCQUFNO0FBQUssY0FBSSxLQUFLO0FBQUcsaUJBQUs7QUFBRztBQUFBLE1BQ3JEO0FBQUEsSUFDRjtBQUNELFNBQU8sS0FBSyxJQUFJLEVBQUUsTUFBTSxHQUFHLEVBQUUsSUFBSSxFQUFFLE1BQU0sS0FBSyxDQUFDLElBQUk7QUFDckQ7QUNSTyxJQUFJO0FBRUksU0FBQSxpQkFBUyxHQUFHLEdBQUc7QUFDNUIsTUFBSXJCLEtBQUksbUJBQW1CLEdBQUcsQ0FBQztBQUMvQixNQUFJLENBQUNBO0FBQUcsV0FBTyxpQkFBaUIsUUFBVyxFQUFFLFlBQVksQ0FBQztBQUMxRCxNQUFJLGNBQWNBLEdBQUUsQ0FBQyxHQUNqQjRELFlBQVc1RCxHQUFFLENBQUMsR0FDZCxJQUFJNEQsYUFBWSxpQkFBaUIsS0FBSyxJQUFJLElBQUksS0FBSyxJQUFJLEdBQUcsS0FBSyxNQUFNQSxZQUFXLENBQUMsQ0FBQyxDQUFDLElBQUksS0FBSyxHQUM1RixJQUFJLFlBQVk7QUFDcEIsU0FBTyxNQUFNLElBQUksY0FDWCxJQUFJLElBQUksY0FBYyxJQUFJLE1BQU0sSUFBSSxJQUFJLENBQUMsRUFBRSxLQUFLLEdBQUcsSUFDbkQsSUFBSSxJQUFJLFlBQVksTUFBTSxHQUFHLENBQUMsSUFBSSxNQUFNLFlBQVksTUFBTSxDQUFDLElBQzNELE9BQU8sSUFBSSxNQUFNLElBQUksQ0FBQyxFQUFFLEtBQUssR0FBRyxJQUFJLG1CQUFtQixHQUFHLEtBQUssSUFBSSxHQUFHLElBQUksSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDO0FBQzNGO0FDYmUsU0FBQSxjQUFTLEdBQUcsR0FBRztBQUM1QixNQUFJNUQsS0FBSSxtQkFBbUIsR0FBRyxDQUFDO0FBQy9CLE1BQUksQ0FBQ0E7QUFBRyxXQUFPLElBQUk7QUFDbkIsTUFBSSxjQUFjQSxHQUFFLENBQUMsR0FDakI0RCxZQUFXNUQsR0FBRSxDQUFDO0FBQ2xCLFNBQU80RCxZQUFXLElBQUksT0FBTyxJQUFJLE1BQU0sQ0FBQ0EsU0FBUSxFQUFFLEtBQUssR0FBRyxJQUFJLGNBQ3hELFlBQVksU0FBU0EsWUFBVyxJQUFJLFlBQVksTUFBTSxHQUFHQSxZQUFXLENBQUMsSUFBSSxNQUFNLFlBQVksTUFBTUEsWUFBVyxDQUFDLElBQzdHLGNBQWMsSUFBSSxNQUFNQSxZQUFXLFlBQVksU0FBUyxDQUFDLEVBQUUsS0FBSyxHQUFHO0FBQzNFO0FDTkEsTUFBZSxjQUFBO0FBQUEsRUFDYixLQUFLLENBQUMsR0FBRyxPQUFPLElBQUksS0FBSyxRQUFRLENBQUM7QUFBQSxFQUNsQyxLQUFLLENBQUMsTUFBTSxLQUFLLE1BQU0sQ0FBQyxFQUFFLFNBQVMsQ0FBQztBQUFBLEVBQ3BDLEtBQUssQ0FBQyxNQUFNLElBQUk7QUFBQSxFQUNoQixLQUFLO0FBQUEsRUFDTCxLQUFLLENBQUMsR0FBRyxNQUFNLEVBQUUsY0FBYyxDQUFDO0FBQUEsRUFDaEMsS0FBSyxDQUFDLEdBQUcsTUFBTSxFQUFFLFFBQVEsQ0FBQztBQUFBLEVBQzFCLEtBQUssQ0FBQyxHQUFHLE1BQU0sRUFBRSxZQUFZLENBQUM7QUFBQSxFQUM5QixLQUFLLENBQUMsTUFBTSxLQUFLLE1BQU0sQ0FBQyxFQUFFLFNBQVMsQ0FBQztBQUFBLEVBQ3BDLEtBQUssQ0FBQyxHQUFHLE1BQU0sY0FBYyxJQUFJLEtBQUssQ0FBQztBQUFBLEVBQ3ZDLEtBQUs7QUFBQSxFQUNMLEtBQUs7QUFBQSxFQUNMLEtBQUssQ0FBQyxNQUFNLEtBQUssTUFBTSxDQUFDLEVBQUUsU0FBUyxFQUFFLEVBQUUsWUFBYTtBQUFBLEVBQ3BELEtBQUssQ0FBQyxNQUFNLEtBQUssTUFBTSxDQUFDLEVBQUUsU0FBUyxFQUFFO0FBQ3ZDO0FDbEJlLFNBQVEsV0FBQyxHQUFHO0FBQ3pCLFNBQU87QUFDVDtBQ09BLElBQUksTUFBTSxNQUFNLFVBQVUsS0FDdEIsV0FBVyxDQUFDLEtBQUksS0FBSSxLQUFJLEtBQUksS0FBSSxLQUFJLEtBQUksS0FBSSxJQUFHLEtBQUksS0FBSSxLQUFJLEtBQUksS0FBSSxLQUFJLEtBQUksR0FBRztBQUVuRSxTQUFRLGFBQUNDLFNBQVE7QUFDOUIsTUFBSSxRQUFRQSxRQUFPLGFBQWEsVUFBYUEsUUFBTyxjQUFjLFNBQVlsRCxhQUFXLFlBQVksSUFBSSxLQUFLa0QsUUFBTyxVQUFVLE1BQU0sR0FBR0EsUUFBTyxZQUFZLEVBQUUsR0FDekosaUJBQWlCQSxRQUFPLGFBQWEsU0FBWSxLQUFLQSxRQUFPLFNBQVMsQ0FBQyxJQUFJLElBQzNFLGlCQUFpQkEsUUFBTyxhQUFhLFNBQVksS0FBS0EsUUFBTyxTQUFTLENBQUMsSUFBSSxJQUMzRSxVQUFVQSxRQUFPLFlBQVksU0FBWSxNQUFNQSxRQUFPLFVBQVUsSUFDaEUsV0FBV0EsUUFBTyxhQUFhLFNBQVlsRCxhQUFXLGVBQWUsSUFBSSxLQUFLa0QsUUFBTyxVQUFVLE1BQU0sQ0FBQyxHQUN0RyxVQUFVQSxRQUFPLFlBQVksU0FBWSxNQUFNQSxRQUFPLFVBQVUsSUFDaEUsUUFBUUEsUUFBTyxVQUFVLFNBQVksTUFBTUEsUUFBTyxRQUFRLElBQzFELE1BQU1BLFFBQU8sUUFBUSxTQUFZLFFBQVFBLFFBQU8sTUFBTTtBQUUxRCxXQUFTLFVBQVUsV0FBVyxTQUFTO0FBQ3JDLGdCQUFZLGdCQUFnQixTQUFTO0FBRXJDLFFBQUksT0FBTyxVQUFVLE1BQ2pCLFFBQVEsVUFBVSxPQUNsQixPQUFPLFVBQVUsTUFDakIsU0FBUyxVQUFVLFFBQ25CNUQsUUFBTyxVQUFVLE1BQ2pCLFFBQVEsVUFBVSxPQUNsQixRQUFRLFVBQVUsT0FDbEIsWUFBWSxVQUFVLFdBQ3RCLE9BQU8sVUFBVSxNQUNqQixPQUFPLFVBQVU7QUFHckIsUUFBSSxTQUFTO0FBQUssY0FBUSxNQUFNLE9BQU87QUFBQSxhQUc5QixDQUFDLFlBQVksSUFBSTtBQUFHLG9CQUFjLFdBQWMsWUFBWSxLQUFLLE9BQU8sTUFBTSxPQUFPO0FBRzlGLFFBQUlBLFNBQVMsU0FBUyxPQUFPLFVBQVU7QUFBTSxNQUFBQSxRQUFPLE1BQU0sT0FBTyxLQUFLLFFBQVE7QUFJOUUsUUFBSSxVQUFVLFdBQVcsUUFBUSxXQUFXLFNBQVksUUFBUSxTQUFTLE9BQU8sV0FBVyxNQUFNLGlCQUFpQixXQUFXLE9BQU8sU0FBUyxLQUFLLElBQUksSUFBSSxNQUFNLEtBQUssWUFBYSxJQUFHLEtBQ2pMLFVBQVUsV0FBVyxNQUFNLGlCQUFpQixPQUFPLEtBQUssSUFBSSxJQUFJLFVBQVUsT0FBTyxXQUFXLFFBQVEsV0FBVyxTQUFZLFFBQVEsU0FBUztBQUtoSixRQUFJLGFBQWEsWUFBWSxJQUFJLEdBQzdCLGNBQWMsYUFBYSxLQUFLLElBQUk7QUFNeEMsZ0JBQVksY0FBYyxTQUFZLElBQ2hDLFNBQVMsS0FBSyxJQUFJLElBQUksS0FBSyxJQUFJLEdBQUcsS0FBSyxJQUFJLElBQUksU0FBUyxDQUFDLElBQ3pELEtBQUssSUFBSSxHQUFHLEtBQUssSUFBSSxJQUFJLFNBQVMsQ0FBQztBQUV6QyxhQUFTUyxRQUFPLE9BQU87QUFDckIsVUFBSSxjQUFjLFFBQ2QsY0FBYyxRQUNkLEdBQUcsR0FBRztBQUVWLFVBQUksU0FBUyxLQUFLO0FBQ2hCLHNCQUFjLFdBQVcsS0FBSyxJQUFJO0FBQ2xDLGdCQUFRO0FBQUEsTUFDaEIsT0FBYTtBQUNMLGdCQUFRLENBQUM7QUFHVCxZQUFJLGdCQUFnQixRQUFRLEtBQUssSUFBSSxRQUFRO0FBRzdDLGdCQUFRLE1BQU0sS0FBSyxJQUFJLE1BQU0sV0FBVyxLQUFLLElBQUksS0FBSyxHQUFHLFNBQVM7QUFHbEUsWUFBSTtBQUFNLGtCQUFRLFdBQVcsS0FBSztBQUdsQyxZQUFJLGlCQUFpQixDQUFDLFVBQVUsS0FBSyxTQUFTO0FBQUssMEJBQWdCO0FBR25FLHVCQUFlLGdCQUFpQixTQUFTLE1BQU0sT0FBTyxRQUFTLFNBQVMsT0FBTyxTQUFTLE1BQU0sS0FBSyxRQUFRO0FBQzNHLHVCQUFlLFNBQVMsT0FBTyxDQUFDLE1BQU0sS0FBSyxLQUFLLG1CQUFtQixTQUFZLFNBQVMsSUFBSSxpQkFBaUIsQ0FBQyxJQUFJLE1BQU0sZUFBZSxpQkFBaUIsU0FBUyxNQUFNLE1BQU07QUFJN0ssWUFBSSxhQUFhO0FBQ2YsY0FBSSxJQUFJLElBQUksTUFBTTtBQUNsQixpQkFBTyxFQUFFLElBQUksR0FBRztBQUNkLGdCQUFJLElBQUksTUFBTSxXQUFXLENBQUMsR0FBRyxLQUFLLEtBQUssSUFBSSxJQUFJO0FBQzdDLDZCQUFlLE1BQU0sS0FBSyxVQUFVLE1BQU0sTUFBTSxJQUFJLENBQUMsSUFBSSxNQUFNLE1BQU0sQ0FBQyxLQUFLO0FBQzNFLHNCQUFRLE1BQU0sTUFBTSxHQUFHLENBQUM7QUFDeEI7QUFBQSxZQUNEO0FBQUEsVUFDRjtBQUFBLFFBQ0Y7QUFBQSxNQUNGO0FBR0QsVUFBSSxTQUFTLENBQUNUO0FBQU0sZ0JBQVEsTUFBTSxPQUFPLFFBQVE7QUFHakQsVUFBSSxTQUFTLFlBQVksU0FBUyxNQUFNLFNBQVMsWUFBWSxRQUN6RCxVQUFVLFNBQVMsUUFBUSxJQUFJLE1BQU0sUUFBUSxTQUFTLENBQUMsRUFBRSxLQUFLLElBQUksSUFBSTtBQUcxRSxVQUFJLFNBQVNBO0FBQU0sZ0JBQVEsTUFBTSxVQUFVLE9BQU8sUUFBUSxTQUFTLFFBQVEsWUFBWSxTQUFTLFFBQVEsR0FBRyxVQUFVO0FBR3JILGNBQVEsT0FBSztBQUFBLFFBQ1gsS0FBSztBQUFLLGtCQUFRLGNBQWMsUUFBUSxjQUFjO0FBQVM7QUFBQSxRQUMvRCxLQUFLO0FBQUssa0JBQVEsY0FBYyxVQUFVLFFBQVE7QUFBYTtBQUFBLFFBQy9ELEtBQUs7QUFBSyxrQkFBUSxRQUFRLE1BQU0sR0FBRyxTQUFTLFFBQVEsVUFBVSxDQUFDLElBQUksY0FBYyxRQUFRLGNBQWMsUUFBUSxNQUFNLE1BQU07QUFBRztBQUFBLFFBQzlIO0FBQVMsa0JBQVEsVUFBVSxjQUFjLFFBQVE7QUFBYTtBQUFBLE1BQy9EO0FBRUQsYUFBTyxTQUFTLEtBQUs7QUFBQSxJQUN0QjtBQUVELElBQUFTLFFBQU8sV0FBVyxXQUFXO0FBQzNCLGFBQU8sWUFBWTtBQUFBLElBQ3pCO0FBRUksV0FBT0E7QUFBQSxFQUNSO0FBRUQsV0FBU29ELGNBQWEsV0FBVyxPQUFPO0FBQ3RDLFFBQUksSUFBSSxLQUFLLElBQUksSUFBSSxLQUFLLElBQUksR0FBRyxLQUFLLE1BQU0sU0FBUyxLQUFLLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxHQUNqRSxJQUFJLEtBQUssSUFBSSxJQUFJLENBQUMsQ0FBQyxHQUNuQi9ELEtBQUksV0FBVyxZQUFZLGdCQUFnQixTQUFTLEdBQUcsVUFBVSxPQUFPLEtBQUssWUFBWSxFQUFDLFFBQVEsU0FBUyxJQUFJLElBQUksQ0FBQyxFQUFDLENBQUM7QUFDMUgsV0FBTyxTQUFTNkMsUUFBTztBQUNyQixhQUFPN0MsR0FBRSxJQUFJNkMsTUFBSztBQUFBLElBQ3hCO0FBQUEsRUFDRztBQUVELFNBQU87QUFBQSxJQUNMLFFBQVE7QUFBQSxJQUNSLGNBQWNrQjtBQUFBLEVBQ2xCO0FBQ0E7QUNoSkEsSUFBSTtBQUNHLElBQUk7QUFDSixJQUFJO0FBRVgsY0FBYztBQUFBLEVBQ1osV0FBVztBQUFBLEVBQ1gsVUFBVSxDQUFDLENBQUM7QUFBQSxFQUNaLFVBQVUsQ0FBQyxLQUFLLEVBQUU7QUFDcEIsQ0FBQztBQUVjLFNBQVMsY0FBYyxZQUFZO0FBQ2hELFdBQVMsYUFBYSxVQUFVO0FBQ2hDLFdBQVMsT0FBTztBQUNoQixpQkFBZSxPQUFPO0FBQ3RCLFNBQU87QUFDVDtBQ2ZlLFNBQVEsZUFBQyxNQUFNO0FBQzVCLFNBQU8sS0FBSyxJQUFJLEdBQUcsQ0FBQyxTQUFTLEtBQUssSUFBSSxJQUFJLENBQUMsQ0FBQztBQUM5QztBQ0ZlLFNBQUEsZ0JBQVMsTUFBTSxPQUFPO0FBQ25DLFNBQU8sS0FBSyxJQUFJLEdBQUcsS0FBSyxJQUFJLElBQUksS0FBSyxJQUFJLEdBQUcsS0FBSyxNQUFNLFNBQVMsS0FBSyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxTQUFTLEtBQUssSUFBSSxJQUFJLENBQUMsQ0FBQztBQUM5RztBQ0ZlLFNBQUEsZUFBUyxNQUFNLEtBQUs7QUFDakMsU0FBTyxLQUFLLElBQUksSUFBSSxHQUFHLE1BQU0sS0FBSyxJQUFJLEdBQUcsSUFBSTtBQUM3QyxTQUFPLEtBQUssSUFBSSxHQUFHLFNBQVMsR0FBRyxJQUFJLFNBQVMsSUFBSSxDQUFDLElBQUk7QUFDdkQ7QUNMTyxTQUFTLFVBQVUsUUFBUSxPQUFPO0FBQ3ZDLFVBQVEsVUFBVSxRQUFNO0FBQUEsSUFDdEIsS0FBSztBQUFHO0FBQUEsSUFDUixLQUFLO0FBQUcsV0FBSyxNQUFNLE1BQU07QUFBRztBQUFBLElBQzVCO0FBQVMsV0FBSyxNQUFNLEtBQUssRUFBRSxPQUFPLE1BQU07QUFBRztBQUFBLEVBQzVDO0FBQ0QsU0FBTztBQUNUO0FDUGUsU0FBUyxVQUFVLEdBQUc7QUFDbkMsU0FBTyxXQUFXO0FBQ2hCLFdBQU87QUFBQSxFQUNYO0FBQ0E7QUNKZSxTQUFTLE9BQU8sR0FBRztBQUNoQyxTQUFPLENBQUM7QUFDVjtBQ0dBLElBQUksT0FBTyxDQUFDLEdBQUcsQ0FBQztBQUVULFNBQVMsU0FBUyxHQUFHO0FBQzFCLFNBQU87QUFDVDtBQUVBLFNBQVMsVUFBVSxHQUFHLEdBQUc7QUFDdkIsVUFBUSxLQUFNLElBQUksQ0FBQyxLQUNiLFNBQVMsR0FBRztBQUFFLFlBQVEsSUFBSSxLQUFLO0FBQUEsRUFBSSxJQUNuQ3RDLFVBQVMsTUFBTSxDQUFDLElBQUksTUFBTSxHQUFHO0FBQ3JDO0FBRUEsU0FBUyxRQUFRLEdBQUcsR0FBRztBQUNyQixNQUFJO0FBQ0osTUFBSSxJQUFJO0FBQUcsUUFBSSxHQUFHLElBQUksR0FBRyxJQUFJO0FBQzdCLFNBQU8sU0FBUyxHQUFHO0FBQUUsV0FBTyxLQUFLLElBQUksR0FBRyxLQUFLLElBQUksR0FBRyxDQUFDLENBQUM7QUFBQSxFQUFFO0FBQzFEO0FBSUEsU0FBUyxNQUFNLFFBQVEsT0FBTzZCLGNBQWE7QUFDekMsTUFBSSxLQUFLLE9BQU8sQ0FBQyxHQUFHLEtBQUssT0FBTyxDQUFDLEdBQUcsS0FBSyxNQUFNLENBQUMsR0FBRyxLQUFLLE1BQU0sQ0FBQztBQUMvRCxNQUFJLEtBQUs7QUFBSSxTQUFLLFVBQVUsSUFBSSxFQUFFLEdBQUcsS0FBS0EsYUFBWSxJQUFJLEVBQUU7QUFBQTtBQUN2RCxTQUFLLFVBQVUsSUFBSSxFQUFFLEdBQUcsS0FBS0EsYUFBWSxJQUFJLEVBQUU7QUFDcEQsU0FBTyxTQUFTLEdBQUc7QUFBRSxXQUFPLEdBQUcsR0FBRyxDQUFDLENBQUM7QUFBQTtBQUN0QztBQUVBLFNBQVMsUUFBUSxRQUFRLE9BQU9BLGNBQWE7QUFDM0MsTUFBSWhDLEtBQUksS0FBSyxJQUFJLE9BQU8sUUFBUSxNQUFNLE1BQU0sSUFBSSxHQUM1Q3JCLEtBQUksSUFBSSxNQUFNcUIsRUFBQyxHQUNmLElBQUksSUFBSSxNQUFNQSxFQUFDLEdBQ2YsSUFBSTtBQUdSLE1BQUksT0FBT0EsRUFBQyxJQUFJLE9BQU8sQ0FBQyxHQUFHO0FBQ3pCLGFBQVMsT0FBTyxNQUFPLEVBQUMsUUFBTztBQUMvQixZQUFRLE1BQU0sTUFBTyxFQUFDLFFBQU87QUFBQSxFQUM5QjtBQUVELFNBQU8sRUFBRSxJQUFJQSxJQUFHO0FBQ2QsSUFBQXJCLEdBQUUsQ0FBQyxJQUFJLFVBQVUsT0FBTyxDQUFDLEdBQUcsT0FBTyxJQUFJLENBQUMsQ0FBQztBQUN6QyxNQUFFLENBQUMsSUFBSXFELGFBQVksTUFBTSxDQUFDLEdBQUcsTUFBTSxJQUFJLENBQUMsQ0FBQztBQUFBLEVBQzFDO0FBRUQsU0FBTyxTQUFTLEdBQUc7QUFDakIsUUFBSVAsS0FBSSxPQUFPLFFBQVEsR0FBRyxHQUFHekIsRUFBQyxJQUFJO0FBQ2xDLFdBQU8sRUFBRXlCLEVBQUMsRUFBRTlDLEdBQUU4QyxFQUFDLEVBQUUsQ0FBQyxDQUFDO0FBQUEsRUFDdkI7QUFDQTtBQUVPLFNBQVMsS0FBSyxRQUFRLFFBQVE7QUFDbkMsU0FBTyxPQUNGLE9BQU8sT0FBTyxRQUFRLEVBQ3RCLE1BQU0sT0FBTyxPQUFPLEVBQ3BCLFlBQVksT0FBTyxhQUFhLEVBQ2hDLE1BQU0sT0FBTyxPQUFPLEVBQ3BCLFFBQVEsT0FBTyxRQUFPLENBQUU7QUFDL0I7QUFFTyxTQUFTLGNBQWM7QUFDNUIsTUFBSSxTQUFTLE1BQ1QsUUFBUSxNQUNSTyxlQUFjVSxlQUNkLFdBQ0EsYUFDQSxTQUNBLFFBQVEsVUFDUixXQUNBLFFBQ0E7QUFFSixXQUFTLFVBQVU7QUFDakIsUUFBSSxJQUFJLEtBQUssSUFBSSxPQUFPLFFBQVEsTUFBTSxNQUFNO0FBQzVDLFFBQUksVUFBVTtBQUFVLGNBQVEsUUFBUSxPQUFPLENBQUMsR0FBRyxPQUFPLElBQUksQ0FBQyxDQUFDO0FBQ2hFLGdCQUFZLElBQUksSUFBSSxVQUFVO0FBQzlCLGFBQVMsUUFBUTtBQUNqQixXQUFPO0FBQUEsRUFDUjtBQUVELFdBQVMsTUFBTSxHQUFHO0FBQ2hCLFdBQU8sS0FBSyxRQUFRLE1BQU0sSUFBSSxDQUFDLENBQUMsSUFBSSxXQUFXLFdBQVcsU0FBUyxVQUFVLE9BQU8sSUFBSSxTQUFTLEdBQUcsT0FBT1YsWUFBVyxJQUFJLFVBQVUsTUFBTSxDQUFDLENBQUMsQ0FBQztBQUFBLEVBQzlJO0FBRUQsUUFBTSxTQUFTLFNBQVMsR0FBRztBQUN6QixXQUFPLE1BQU0sYUFBYSxVQUFVLFFBQVEsVUFBVSxPQUFPLE9BQU8sSUFBSSxTQUFTLEdBQUcsaUJBQWlCLElBQUksQ0FBQyxDQUFDLENBQUM7QUFBQSxFQUNoSDtBQUVFLFFBQU0sU0FBUyxTQUFTLEdBQUc7QUFDekIsV0FBTyxVQUFVLFVBQVUsU0FBUyxNQUFNLEtBQUssR0FBRyxNQUFNLEdBQUcsUUFBTyxLQUFNLE9BQU8sTUFBSztBQUFBLEVBQ3hGO0FBRUUsUUFBTSxRQUFRLFNBQVMsR0FBRztBQUN4QixXQUFPLFVBQVUsVUFBVSxRQUFRLE1BQU0sS0FBSyxDQUFDLEdBQUcsUUFBTyxLQUFNLE1BQU0sTUFBSztBQUFBLEVBQzlFO0FBRUUsUUFBTSxhQUFhLFNBQVMsR0FBRztBQUM3QixXQUFPLFFBQVEsTUFBTSxLQUFLLENBQUMsR0FBR0EsZUFBYyxrQkFBa0I7RUFDbEU7QUFFRSxRQUFNLFFBQVEsU0FBUyxHQUFHO0FBQ3hCLFdBQU8sVUFBVSxVQUFVLFFBQVEsSUFBSSxPQUFPLFVBQVUsUUFBTyxLQUFNLFVBQVU7QUFBQSxFQUNuRjtBQUVFLFFBQU0sY0FBYyxTQUFTLEdBQUc7QUFDOUIsV0FBTyxVQUFVLFVBQVVBLGVBQWMsR0FBRyxRQUFTLEtBQUlBO0FBQUEsRUFDN0Q7QUFFRSxRQUFNLFVBQVUsU0FBUyxHQUFHO0FBQzFCLFdBQU8sVUFBVSxVQUFVLFVBQVUsR0FBRyxTQUFTO0FBQUEsRUFDckQ7QUFFRSxTQUFPLFNBQVMsR0FBRyxHQUFHO0FBQ3BCLGdCQUFZLEdBQUcsY0FBYztBQUM3QixXQUFPLFFBQU87QUFBQSxFQUNsQjtBQUNBO0FBRWUsU0FBUyxhQUFhO0FBQ25DLFNBQU8sWUFBYSxFQUFDLFVBQVUsUUFBUTtBQUN6QztBQ3pIZSxTQUFTLFdBQVcvQyxRQUFPLE1BQU0sT0FBTyxXQUFXO0FBQ2hFLE1BQUksT0FBTyxTQUFTQSxRQUFPLE1BQU0sS0FBSyxHQUNsQztBQUNKLGNBQVksZ0JBQWdCLGFBQWEsT0FBTyxPQUFPLFNBQVM7QUFDaEUsVUFBUSxVQUFVLE1BQUk7QUFBQSxJQUNwQixLQUFLLEtBQUs7QUFDUixVQUFJLFFBQVEsS0FBSyxJQUFJLEtBQUssSUFBSUEsTUFBSyxHQUFHLEtBQUssSUFBSSxJQUFJLENBQUM7QUFDcEQsVUFBSSxVQUFVLGFBQWEsUUFBUSxDQUFDLE1BQU0sWUFBWSxnQkFBZ0IsTUFBTSxLQUFLLENBQUM7QUFBRyxrQkFBVSxZQUFZO0FBQzNHLGFBQU8sYUFBYSxXQUFXLEtBQUs7QUFBQSxJQUNyQztBQUFBLElBQ0QsS0FBSztBQUFBLElBQ0wsS0FBSztBQUFBLElBQ0wsS0FBSztBQUFBLElBQ0wsS0FBSztBQUFBLElBQ0wsS0FBSyxLQUFLO0FBQ1IsVUFBSSxVQUFVLGFBQWEsUUFBUSxDQUFDLE1BQU0sWUFBWSxlQUFlLE1BQU0sS0FBSyxJQUFJLEtBQUssSUFBSUEsTUFBSyxHQUFHLEtBQUssSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDO0FBQUcsa0JBQVUsWUFBWSxhQUFhLFVBQVUsU0FBUztBQUM5SztBQUFBLElBQ0Q7QUFBQSxJQUNELEtBQUs7QUFBQSxJQUNMLEtBQUssS0FBSztBQUNSLFVBQUksVUFBVSxhQUFhLFFBQVEsQ0FBQyxNQUFNLFlBQVksZUFBZSxJQUFJLENBQUM7QUFBRyxrQkFBVSxZQUFZLGFBQWEsVUFBVSxTQUFTLE9BQU87QUFDMUk7QUFBQSxJQUNEO0FBQUEsRUFDRjtBQUNELFNBQU8sT0FBTyxTQUFTO0FBQ3pCO0FDdkJPLFNBQVMsVUFBVSxPQUFPO0FBQy9CLE1BQUksU0FBUyxNQUFNO0FBRW5CLFFBQU0sUUFBUSxTQUFTLE9BQU87QUFDNUIsUUFBSU4sS0FBSTtBQUNSLFdBQU8sTUFBTUEsR0FBRSxDQUFDLEdBQUdBLEdBQUVBLEdBQUUsU0FBUyxDQUFDLEdBQUcsU0FBUyxPQUFPLEtBQUssS0FBSztBQUFBLEVBQ2xFO0FBRUUsUUFBTSxhQUFhLFNBQVMsT0FBTyxXQUFXO0FBQzVDLFFBQUlBLEtBQUk7QUFDUixXQUFPLFdBQVdBLEdBQUUsQ0FBQyxHQUFHQSxHQUFFQSxHQUFFLFNBQVMsQ0FBQyxHQUFHLFNBQVMsT0FBTyxLQUFLLE9BQU8sU0FBUztBQUFBLEVBQ2xGO0FBRUUsUUFBTSxPQUFPLFNBQVMsT0FBTztBQUMzQixRQUFJLFNBQVM7QUFBTSxjQUFRO0FBRTNCLFFBQUlBLEtBQUk7QUFDUixRQUFJLEtBQUs7QUFDVCxRQUFJLEtBQUtBLEdBQUUsU0FBUztBQUNwQixRQUFJTSxTQUFRTixHQUFFLEVBQUU7QUFDaEIsUUFBSSxPQUFPQSxHQUFFLEVBQUU7QUFDZixRQUFJO0FBQ0osUUFBSTtBQUNKLFFBQUksVUFBVTtBQUVkLFFBQUksT0FBT00sUUFBTztBQUNoQixhQUFPQSxRQUFPQSxTQUFRLE1BQU0sT0FBTztBQUNuQyxhQUFPLElBQUksS0FBSyxJQUFJLEtBQUs7QUFBQSxJQUMxQjtBQUVELFdBQU8sWUFBWSxHQUFHO0FBQ3BCLGFBQU8sY0FBY0EsUUFBTyxNQUFNLEtBQUs7QUFDdkMsVUFBSSxTQUFTLFNBQVM7QUFDcEIsUUFBQU4sR0FBRSxFQUFFLElBQUlNO0FBQ1IsUUFBQU4sR0FBRSxFQUFFLElBQUk7QUFDUixlQUFPLE9BQU9BLEVBQUM7QUFBQSxNQUN2QixXQUFpQixPQUFPLEdBQUc7QUFDbkIsUUFBQU0sU0FBUSxLQUFLLE1BQU1BLFNBQVEsSUFBSSxJQUFJO0FBQ25DLGVBQU8sS0FBSyxLQUFLLE9BQU8sSUFBSSxJQUFJO0FBQUEsTUFDeEMsV0FBaUIsT0FBTyxHQUFHO0FBQ25CLFFBQUFBLFNBQVEsS0FBSyxLQUFLQSxTQUFRLElBQUksSUFBSTtBQUNsQyxlQUFPLEtBQUssTUFBTSxPQUFPLElBQUksSUFBSTtBQUFBLE1BQ3pDLE9BQWE7QUFDTDtBQUFBLE1BQ0Q7QUFDRCxnQkFBVTtBQUFBLElBQ1g7QUFFRCxXQUFPO0FBQUEsRUFDWDtBQUVFLFNBQU87QUFDVDtBQUVlLFNBQVMsU0FBUztBQUMvQixNQUFJLFFBQVE7QUFFWixRQUFNLE9BQU8sV0FBVztBQUN0QixXQUFPLEtBQUssT0FBTyxPQUFNLENBQUU7QUFBQSxFQUMvQjtBQUVFLFlBQVUsTUFBTSxPQUFPLFNBQVM7QUFFaEMsU0FBTyxVQUFVLEtBQUs7QUFDeEI7QUNyRU8sU0FBUyxVQUFVLEdBQUcsR0FBRyxHQUFHO0FBQ2pDLE9BQUssSUFBSTtBQUNULE9BQUssSUFBSTtBQUNULE9BQUssSUFBSTtBQUNYO0FBRUEsVUFBVSxZQUFZO0FBQUEsRUFDcEIsYUFBYTtBQUFBLEVBQ2IsT0FBTyxTQUFTLEdBQUc7QUFDakIsV0FBTyxNQUFNLElBQUksT0FBTyxJQUFJLFVBQVUsS0FBSyxJQUFJLEdBQUcsS0FBSyxHQUFHLEtBQUssQ0FBQztBQUFBLEVBQ2pFO0FBQUEsRUFDRCxXQUFXLFNBQVMsR0FBRyxHQUFHO0FBQ3hCLFdBQU8sTUFBTSxJQUFJLE1BQU0sSUFBSSxPQUFPLElBQUksVUFBVSxLQUFLLEdBQUcsS0FBSyxJQUFJLEtBQUssSUFBSSxHQUFHLEtBQUssSUFBSSxLQUFLLElBQUksQ0FBQztBQUFBLEVBQ2pHO0FBQUEsRUFDRCxPQUFPLFNBQVMsT0FBTztBQUNyQixXQUFPLENBQUMsTUFBTSxDQUFDLElBQUksS0FBSyxJQUFJLEtBQUssR0FBRyxNQUFNLENBQUMsSUFBSSxLQUFLLElBQUksS0FBSyxDQUFDO0FBQUEsRUFDL0Q7QUFBQSxFQUNELFFBQVEsU0FBUyxHQUFHO0FBQ2xCLFdBQU8sSUFBSSxLQUFLLElBQUksS0FBSztBQUFBLEVBQzFCO0FBQUEsRUFDRCxRQUFRLFNBQVMsR0FBRztBQUNsQixXQUFPLElBQUksS0FBSyxJQUFJLEtBQUs7QUFBQSxFQUMxQjtBQUFBLEVBQ0QsUUFBUSxTQUFTMEQsV0FBVTtBQUN6QixXQUFPLEVBQUVBLFVBQVMsQ0FBQyxJQUFJLEtBQUssS0FBSyxLQUFLLElBQUlBLFVBQVMsQ0FBQyxJQUFJLEtBQUssS0FBSyxLQUFLLENBQUM7QUFBQSxFQUN6RTtBQUFBLEVBQ0QsU0FBUyxTQUFTLEdBQUc7QUFDbkIsWUFBUSxJQUFJLEtBQUssS0FBSyxLQUFLO0FBQUEsRUFDNUI7QUFBQSxFQUNELFNBQVMsU0FBUyxHQUFHO0FBQ25CLFlBQVEsSUFBSSxLQUFLLEtBQUssS0FBSztBQUFBLEVBQzVCO0FBQUEsRUFDRCxVQUFVLFNBQVMsR0FBRztBQUNwQixXQUFPLEVBQUUsS0FBTSxFQUFDLE9BQU8sRUFBRSxNQUFLLEVBQUcsSUFBSSxLQUFLLFNBQVMsSUFBSSxFQUFFLElBQUksRUFBRSxRQUFRLENBQUMsQ0FBQztBQUFBLEVBQzFFO0FBQUEsRUFDRCxVQUFVLFNBQVMsR0FBRztBQUNwQixXQUFPLEVBQUUsS0FBTSxFQUFDLE9BQU8sRUFBRSxNQUFLLEVBQUcsSUFBSSxLQUFLLFNBQVMsSUFBSSxFQUFFLElBQUksRUFBRSxRQUFRLENBQUMsQ0FBQztBQUFBLEVBQzFFO0FBQUEsRUFDRCxVQUFVLFdBQVc7QUFDbkIsV0FBTyxlQUFlLEtBQUssSUFBSSxNQUFNLEtBQUssSUFBSSxhQUFhLEtBQUssSUFBSTtBQUFBLEVBQ3JFO0FBQ0g7QUFJc0IsVUFBVTs7Ozs7Ozs7QUM1QmhDLE1BQUF6SCxnQkFBZTtBQUFBLEVBQ2IsTUFBTTtBQUNSOzs7O0FBaUJLLFFBQUE7QUFBTCxLQUFBLENBQUswSCxjQUFMO0FBQ0VBLGdCQUFBQSxVQUFBLGdCQUFhLEVBQWIsSUFBQTtBQUNBQSxnQkFBQUEsVUFBQSxXQUFRLEVBQVIsSUFBQTtBQUNBQSxnQkFBQUEsVUFBQSxXQUFRLEdBQVIsSUFBQTtBQUNBQSxnQkFBQUEsVUFBQSxZQUFTLEdBQVQsSUFBQTtBQUFBLElBSkcsR0FBQSxhQUFBLFdBQUEsQ0FBQSxFQUFBO0FBT0MsVUFBQSxFQUFFLE1BQU07QUFDZCxVQUFNLFVBQVU7QUFFaEIsVUFBTSxRQUFRO0FBQ2QsVUFBTSxXQUFXO0FBQ2pCLFVBQU0saUJBQWlCO0FBQ3ZCLFVBQU0sV0FBVztBQU9qQixjQUFVLFlBQVk7QUFDcEIsZUFBUyxRQUFRO0FBQ1gsWUFBQSxtQkFBb0IsTUFBTSxRQUFRO0FBQUEsUUFDdEMsd0JBQXdCO0FBQUEsTUFBQTtBQUcxQixxQkFBZSxRQUFRLHFEQUFrQixPQUFPLE9BQUssRUFBRSxPQUFPO0FBQzlELGVBQVMsUUFBUSxNQUFNLFFBQVEsU0FBUyxjQUFjLFdBQVcsaUJBQWlCO0FBQ3RFO0lBQUEsQ0FDYjtBQUVELGFBQVMsY0FBYzs7QUFDckIsWUFBTSxlQUErQixDQUFBO0FBQ3RCLDJCQUFBLFVBQUEsbUJBQU8sUUFBUSxDQUFZQyxjQUFBO0FBQy9CLFFBQUFBLFVBQUEsVUFBVSxRQUFRLENBQU8sUUFBQTtBQUNoQyxnQkFBTSxPQUFPLElBQUksTUFBTSxHQUFHLEVBQUUsQ0FBQztBQUM3QixnQkFBTSxLQUFLLElBQUksTUFBTSxHQUFHLEVBQUUsQ0FBQztBQUMzQixjQUNFLG1DQUFtQyxFQUFFLElBQUksbUNBQW1DLElBQUksSUFDaEYsU0FBUyxPQUNUO0FBQ2EseUJBQUEsS0FBSyxFQUFFLFFBQVFBLFVBQVMsUUFBUSxVQUFVLGdCQUFnQixHQUFHLEVBQUEsQ0FBRztBQUFBLFVBQy9FO0FBQUEsUUFBQSxDQUNEO0FBQUEsTUFBQTtBQUVILHdCQUFrQixZQUFZO0FBQUEsSUFDaEM7QUFFQSxhQUFTLGVBQWU7QUFDdEIsWUFBTSxNQUFNLFlBQVk7QUFDWjtJQUNkO0FBRUEsYUFBUyxnQkFBZ0JBLFdBQTBCO0FBQ2pELGVBQVMsUUFBUSxNQUFnQjtBQUN4QixlQUFBLEtBQUssSUFBSSxDQUFNLE1BQUEsRUFBRSxVQUFVLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBRTtBQUMzQyxlQUFBLEtBQUssS0FBSyxHQUFHO0FBQUEsTUFDdEI7QUFFTSxZQUFBLGlCQUFpQkEsVUFBUyxNQUFNLEdBQUcsRUFBRSxDQUFDLEVBQUUsTUFBTSxHQUFHO0FBQ2pELFlBQUEsZUFBZUEsVUFBUyxNQUFNLEdBQUcsRUFBRSxDQUFDLEVBQUUsTUFBTSxHQUFHO0FBQ3JELGFBQU8sR0FBRyxRQUFRLGNBQWMsQ0FBQyxJQUFJLFFBQVEsWUFBWSxDQUFDO0FBQUEsSUFDNUQ7QUFFQSxhQUFTLGtCQUFrQixNQUFzQjtBQUMvQyxXQUFLLFFBQVEsQ0FBUSxTQUFBO0FBQ2IsY0FBQSxRQUFRLFlBQVksS0FBSyxRQUFRO0FBQ2pDLGNBQUEsTUFBTSxVQUFVLEtBQUssUUFBUTtBQUNuQyxZQUFJLFNBQVMsS0FBSztBQUNWLGdCQUFBLGlCQUFpQixLQUFLLFNBQVMsTUFBTSxHQUFHLEVBQUUsQ0FBQyxFQUFFLE1BQU0sR0FBRztBQUN0RCxnQkFBQSxlQUFlLEtBQUssU0FBUyxNQUFNLEdBQUcsRUFBRSxDQUFDLEVBQUUsTUFBTSxHQUFHO0FBQzFELGdCQUFNLFNBQVMsR0FBRyxlQUFlLENBQUMsQ0FBQztBQUNuQyxnQkFBTSxXQUFXLEdBQUcsYUFBYSxDQUFDLENBQUM7QUFDbkMsZUFBSyxLQUFLLEVBQUUsUUFBUSxLQUFLLFFBQVEsVUFBVSxLQUFLLFNBQVMsTUFBTSxHQUFHLEVBQUUsQ0FBQyxJQUFJLE1BQU0sUUFBUTtBQUN2RixlQUFLLEtBQUssRUFBRSxRQUFRLEtBQUssUUFBUSxVQUFVLFdBQVcsTUFBTSxLQUFLLFNBQVMsTUFBTSxHQUFHLEVBQUUsQ0FBQyxHQUFHO0FBQUEsUUFDM0Y7QUFBQSxNQUFBLENBQ0Q7QUFFSyxZQUFBLFNBQVMsRUFBRSxLQUFLLElBQUksT0FBTyxJQUFJLFFBQVEsSUFBSSxNQUFNO0FBQ2pELFlBQUEsUUFBUSxNQUFNLE1BQU07QUFDMUIsWUFBTSxTQUFTO0FBRWYsWUFBTSxlQUFlO0FBRWYsWUFBQSxVQUFVQyxPQUNOLHNCQUFzQixFQUM3QixPQUFPLEtBQUssRUFDWixNQUFNLFdBQVcsQ0FBQyxFQUNsQixNQUFNLFdBQVcsTUFBTSxFQUN2QixNQUFNLFlBQVksVUFBVSxFQUM1QixNQUFNLG9CQUFvQixPQUFPLEVBQ2pDLE1BQU0sU0FBUyxPQUFPLEVBQ3RCLE1BQU0sVUFBVSxnQkFBZ0IsRUFDaEMsS0FBSyxTQUFTLFNBQVMsRUFDdkIsTUFBTSxnQkFBZ0IsS0FBSyxFQUMzQixNQUFNLGlCQUFpQixLQUFLLEVBQzVCLE1BQU0sV0FBVyxLQUFLO0FBRW5CLFlBQUEsWUFBWSxTQUFVLEdBQVE7QUFDbEMsZ0JBQVEsTUFBTSxXQUFXLENBQUMsRUFBRSxNQUFNLFdBQVcsT0FBTztBQUNwREEsZUFBVSxVQUFVLEVBQ2pCLE1BQU0sUUFBUSxFQUFFLFNBQVMsS0FBSyxJQUFJLEVBQ2xDLE1BQU0sT0FBTyxFQUFFLFNBQVMsS0FBSyxJQUFJO0FBQUEsTUFBQTtBQUVoQyxZQUFBLFlBQVksU0FBVSxPQUFZQyxPQUFXO0FBQ2pELGdCQUFRLEtBQUssTUFBTUEsTUFBSyxNQUFNLFdBQVdBLE1BQUssUUFBUSxFQUFFO0FBQUEsTUFBQTtBQUVwRCxZQUFBLGFBQWEsU0FBVSxHQUFRO0FBQ25DLGdCQUFRLE1BQU0sV0FBVyxDQUFDLEVBQUUsTUFBTSxXQUFXLE1BQU07QUFBQSxNQUFBO0FBSXJELFlBQU0sTUFBTUQsT0FDRixzQkFBc0IsRUFDN0IsT0FBTyxLQUFLLEVBQ1osS0FBSyxTQUFTLFFBQVEsT0FBTyxPQUFPLE9BQU8sS0FBSyxFQUNoRCxLQUFLLFVBQVUsU0FBUyxPQUFPLE1BQU0sT0FBTyxNQUFNLEVBQ2xELE9BQU8sR0FBRyxFQUNWLEtBQUssYUFBYSxhQUFhLE9BQU8sSUFBSSxJQUFJLE9BQU8sR0FBRyxHQUFHO0FBRTlELFlBQU0sSUFBSUUsT0FBZSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsT0FBTyxDQUFDLEdBQUcsRUFBRSxDQUFDO0FBQzlDLFlBQUEsUUFBUUMsU0FBWSxDQUFDO0FBRTNCLFlBQU0sSUFBSUQsT0FBZSxDQUFDLEdBQUcsS0FBSyxDQUFDLEVBQUUsT0FBTyxDQUFDLEdBQUcsRUFBRSxDQUFDO0FBQ25ELFlBQU0sUUFBUUUsV0FBYyxDQUFDLEVBQUUsTUFBTSxFQUFFO0FBR3BDLFVBQUEsT0FBTyxHQUFHLEVBQ1YsS0FBSyxTQUFTLE1BQU0sRUFDcEIsTUFBTSxTQUFTLFNBQVMsUUFBUSxZQUFZLFNBQVMsRUFDckQsS0FBSyxhQUFhLGdCQUFnQixNQUFNLEdBQUcsRUFDM0MsS0FBSyxNQUFNLFNBQVMsQ0FBQyxNQUFNLENBQUM7QUFFL0IsVUFDRyxPQUFPLEdBQUcsRUFDVixLQUFLLFNBQVMsTUFBTSxFQUNwQixNQUFNLFNBQVMsU0FBUyxRQUFRLFlBQVksU0FBUyxFQUNyRCxLQUFLLE1BQU0sU0FBUyxDQUFDLEtBQUssQ0FBQztBQUM5QixVQUFJLFVBQVUsTUFBTSxFQUFFLE1BQU0sUUFBUSxTQUFTO0FBRzdDLFVBQ0csVUFBVSxNQUFNLEVBQ2hCLEtBQUssSUFBSSxFQUNULE1BQU0sRUFDTixPQUFPLE1BQU0sRUFDYixNQUFNLFFBQVEsU0FBUyxFQUN2QixNQUFNLFVBQVUsU0FBUyxFQUN6QixNQUFNLGdCQUFnQixHQUFHLEVBQ3pCLEtBQUssU0FBUyxLQUFLLEVBQ25CLEtBQUssS0FBSyxDQUFDSCxVQUFjLEVBQUUsWUFBWUEsTUFBSyxRQUFRLENBQUMsSUFBSSxDQUFDLEVBQzFELEtBQUssU0FBUyxNQUFNLE1BQU0sY0FBYyxLQUFLLENBQUMsRUFDOUMsS0FBSyxLQUFLLENBQUNBLFVBQWMsRUFBRSxhQUFhQSxNQUFLLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFDM0QsS0FBSyxVQUFVLENBQUNBLFVBQWM7QUFDN0IsY0FBTSxTQUFTLGFBQWFBLE1BQUssUUFBUSxJQUFJLGVBQWVBLE1BQUssUUFBUTtBQUN6RSxZQUFJLFVBQVUsR0FBRztBQUNmLGdCQUFNLGdCQUFnQixhQUFhQSxNQUFLLFFBQVEsSUFBSSxlQUFlQSxNQUFLLFFBQVE7QUFDaEYsY0FBSSxpQkFBaUI7QUFBVSxtQkFBQTtBQUFBO0FBQ25CLG1CQUFBO0FBQUEsUUFDZDtBQUFPLGlCQUFPLFNBQVM7QUFBQSxNQUN4QixDQUFBLEVBQ0EsR0FBRyxhQUFhLFNBQVMsRUFDekIsR0FBRyxhQUFhLFNBQVMsRUFDekIsR0FBRyxjQUFjLFVBQVU7QUFFOUIsZUFBUyxZQUFZRixXQUEwQjtBQUM3QyxjQUFNLE9BQU9BLFVBQVMsTUFBTSxHQUFHLEVBQUUsQ0FBQztBQUNsQyxlQUFPLE9BQU8sS0FBSyxNQUFNLEdBQUcsRUFBRSxDQUFDLENBQUM7QUFBQSxNQUNsQztBQUVBLGVBQVMsVUFBVUEsV0FBMEI7QUFDM0MsWUFBSSxPQUFPQSxVQUFTLE1BQU0sR0FBRyxFQUFFLENBQUM7QUFDaEMsZUFBTyxPQUFPLEtBQUssTUFBTSxHQUFHLEVBQUUsQ0FBQyxDQUFDO0FBQUEsTUFDbEM7QUFFQSxlQUFTLGVBQWVBLFdBQTBCO0FBQ2hELFlBQUksT0FBT0EsVUFBUyxNQUFNLEdBQUcsRUFBRSxDQUFDO0FBQ2hDLGVBQU8sT0FBTyxLQUFLLE1BQU0sR0FBRyxFQUFFLENBQUMsQ0FBQztBQUFBLE1BQ2xDO0FBRUEsZUFBUyxhQUFhQSxXQUEwQjtBQUM5QyxZQUFJLE9BQU9BLFVBQVMsTUFBTSxHQUFHLEVBQUUsQ0FBQztBQUNoQyxlQUFPLE9BQU8sS0FBSyxNQUFNLEdBQUcsRUFBRSxDQUFDLENBQUM7QUFBQSxNQUNsQztBQUVBLGVBQVMsZUFBZUEsV0FBMEI7QUFDaEQsWUFBSSxPQUFPQSxVQUFTLE1BQU0sR0FBRyxFQUFFLENBQUM7QUFDaEMsZUFBTyxPQUFPLEtBQUssTUFBTSxHQUFHLEVBQUUsQ0FBQyxDQUFDO0FBQUEsTUFDbEM7QUFFQSxlQUFTLGFBQWFBLFdBQTBCO0FBQzlDLFlBQUksT0FBT0EsVUFBUyxNQUFNLEdBQUcsRUFBRSxDQUFDO0FBQ2hDLGVBQU8sT0FBTyxLQUFLLE1BQU0sR0FBRyxFQUFFLENBQUMsQ0FBQztBQUFBLE1BQ2xDO0FBQUEsSUFDRjs7O1FBck9FekgsZ0JBV00sT0FBQSxNQUFBO0FBQUEsVUFWSkEsZ0JBQTJFLEtBQTNFQyxjQUEyRUksZ0JBQWxDRixNQUFDLENBQUEsRUFBQSx3QkFBQSxDQUFBLEdBQUEsQ0FBQTtBQUFBLFVBQzFDSCxnQkFPTSxPQVBORSxjQU9NO0FBQUEsMkJBTkpGLGdCQUtTLFVBQUE7QUFBQSxjQUxELE9BQU07QUFBQSwyRUFBa0IsU0FBUSxRQUFBO0FBQUEsY0FBRyxnREFBUTtZQUFZO2NBQzdEQSxnQkFBdUUsVUFBQTtBQUFBLGdCQUE5RCxPQUFPO0FBQUE7QUFBQSxjQUFBLEdBQXFCLHdCQUFNRyxNQUFDLENBQUEsRUFBQSxhQUFBLENBQUEsR0FBQSxHQUFBQyxZQUFBO0FBQUEsY0FDNUNKLGdCQUFpRSxVQUFBO0FBQUEsZ0JBQXhELE9BQU87QUFBQTtBQUFBLGNBQUEsR0FBZ0IsdUJBQUtHLE1BQUMsQ0FBQSxFQUFBLGFBQUEsQ0FBQSxHQUFBLEdBQUFHLFlBQUE7QUFBQSxjQUN0Q04sZ0JBQWtFLFVBQUE7QUFBQSxnQkFBekQsT0FBTztBQUFBO0FBQUEsY0FBQSxHQUFnQix1QkFBS0csTUFBQyxDQUFBLEVBQUEsY0FBQSxDQUFBLEdBQUEsR0FBQUksWUFBQTtBQUFBLGNBQ3RDUCxnQkFBb0UsVUFBQTtBQUFBLGdCQUEzRCxPQUFPO0FBQUE7QUFBQSxjQUFBLEdBQWlCLHdCQUFNRyxNQUFDLENBQUEsRUFBQSxjQUFBLENBQUEsR0FBQSxHQUFBSyxZQUFBO0FBQUE7NkJBSlYsU0FBUSxLQUFBO0FBQUEsWUFBQTs7VUFPMUNSLGdCQUErRSxLQUEvRVMsY0FBK0VKLGdCQUF0Q0YsTUFBQyxDQUFBLEVBQUEsNEJBQUEsQ0FBQSxHQUFBLENBQUE7QUFBQSxRQUFBO1FBRTVDSCxnQkFBZ0QsT0FBQTtBQUFBLG1CQUF2QztBQUFBLFVBQUosS0FBSTtBQUFBLFVBQVEsSUFBRztBQUFBLFFBQUE7Ozs7Ozs7O0FDUHRCLE1BQUFGLGdCQUFlO0FBQUEsRUFDYixNQUFNO0FBQ1I7Ozs7QUFzQk0sVUFBQSxFQUFFLE1BQU07QUFjZCxVQUFNLFVBQVU7QUFFaEJpSSxVQUFRLFNBQVMsZUFBZSxhQUFhLFlBQVlDLGNBQU9DLGdCQUFTQyxhQUFNO0FBRS9FLFVBQU0sVUFBVTtBQUNoQixVQUFNLE9BQU87QUFDYixVQUFNLFdBQVc7QUFFakIsVUFBTSxVQUEwQixDQUFBO0FBQ2hDLFVBQU0sUUFBa0IsQ0FBQTtBQUV4QixhQUFTLFFBQVE7QUFFUixhQUFBLDJCQUNQLGNBQ0EsUUFDMEI7QUFDcEIsWUFBQUMsU0FBUSxhQUFhLE1BQU0sR0FBRztBQUNwQyxZQUFNLFFBQVFBLE9BQU0sQ0FBQyxFQUFFLE1BQU0sR0FBRztBQUNoQyxZQUFNLFFBQVFBLE9BQU0sQ0FBQyxFQUFFLE1BQU0sR0FBRztBQUNoQyxVQUFJLE1BQU0sQ0FBQyxLQUFLLE1BQU0sQ0FBQyxHQUFHO0FBQ2pCLGVBQUE7QUFBQSxVQUNMO0FBQUEsWUFDRSxNQUFNLE9BQU8sTUFBTSxDQUFDLENBQUM7QUFBQSxZQUNyQixTQUNFLG1DQUFtQ0EsT0FBTSxDQUFDLENBQUMsSUFDM0MsbUNBQW1DQSxPQUFNLENBQUMsQ0FBQztBQUFBLFlBQzdDO0FBQUEsVUFDRjtBQUFBLFFBQUE7QUFBQSxNQUNGLE9BQ0s7QUFDTCxjQUFNLE1BQU0sQ0FBQTtBQUNOLGNBQUEsYUFBYUEsT0FBTSxDQUFDO0FBQzFCLGNBQU0sYUFBYSxHQUFHLE1BQU0sQ0FBQyxDQUFDO0FBQ3hCLGNBQUEsbUJBQW1CLFdBQVcsTUFBTSxHQUFHO0FBQzdDLFlBQUksS0FBSztBQUFBLFVBQ1AsTUFBTSxPQUFPLGlCQUFpQixDQUFDLENBQUM7QUFBQSxVQUNoQyxTQUNFLG1DQUFtQyxVQUFVLElBQzdDLG1DQUFtQyxVQUFVO0FBQUEsVUFDL0M7QUFBQSxRQUFBLENBQ0Q7QUFDRCxjQUFNLGNBQWMsR0FBRyxNQUFNLENBQUMsQ0FBQztBQUMvQixjQUFNLGNBQWMsR0FBRyxNQUFNLENBQUMsQ0FBQyxJQUFJLE1BQU0sQ0FBQyxDQUFDLElBQUksTUFBTSxDQUFDLENBQUM7QUFDakQsY0FBQSxvQkFBb0IsWUFBWSxNQUFNLEdBQUc7QUFDL0MsWUFBSSxLQUFLO0FBQUEsVUFDUCxNQUFNLE9BQU8sa0JBQWtCLENBQUMsQ0FBQztBQUFBLFVBQ2pDLFNBQ0UsbUNBQW1DLFdBQVcsSUFDOUMsbUNBQW1DLFdBQVc7QUFBQSxVQUNoRDtBQUFBLFFBQUEsQ0FDRDtBQUNNLGVBQUE7QUFBQSxNQUNUO0FBQUEsSUFDRjtBQUVBLGFBQVMsU0FBUyxrQkFBa0M7QUFDbEQsWUFBTSxRQUFRLHFEQUFrQixPQUFPLE9BQUssRUFBRSxPQUFPO0FBQ3JELFlBQU0sVUFBVSxNQUFNLElBQUksQ0FBQSxNQUFLLEVBQUUsTUFBTTtBQUN2QyxZQUFNLFNBQWdCLENBQUE7QUFDdEIsWUFBTSxlQUFrQyxDQUFBO0FBQ3hDLGNBQVEsUUFBUSxDQUFVLFdBQUE7QUFDeEIsY0FBTSxZQUFZLE1BQU0sT0FBTyxDQUFLLE1BQUEsRUFBRSxVQUFVLE1BQU07QUFDdEQsa0JBQVUsUUFBUSxDQUFTQSxXQUFBO0FBQ3pCLGdCQUFNLElBQUlBLE9BQU07QUFDaEIsWUFBRSxRQUFRLENBQVEsU0FBQTtBQUNWLGtCQUFBLE9BQU8sMkJBQTJCLE1BQU0sTUFBTTtBQUNwRCxnQkFBSSxRQUFRLFFBQVEsS0FBSyxTQUFTLEdBQUc7QUFDbkMsbUJBQUssUUFBUSxDQUFPLFFBQUE7QUFDWixzQkFBQSxjQUFjLGFBQWEsS0FBSyxDQUFLLE1BQUEsRUFBRSxVQUFVLFVBQVUsRUFBRSxRQUFRLElBQUksSUFBSTtBQUNuRixvQkFBSSxlQUFlLFFBQVc7QUFDNUIsOEJBQVksV0FBVyxJQUFJO0FBQUEsZ0JBQzdCO0FBQU8sK0JBQWEsS0FBSyxHQUFHO0FBQUEsY0FBQSxDQUM3QjtBQUFBLFlBQ0g7QUFBQSxVQUFBLENBQ0Q7QUFBQSxRQUFBLENBQ0Y7QUFBQSxNQUFBLENBQ0Y7QUFFRCxZQUFNLFlBQXNCLENBQUE7QUFDNUIsZUFBUyxRQUFRLEdBQUcsUUFBUSxJQUFJLFNBQVM7QUFDdkMsY0FBTSxNQUFNLFFBQVEsS0FBSyxDQUFLLE1BQUEsRUFBRSxRQUFRLEtBQUs7QUFDN0MsY0FBTSxjQUFjLGFBQWEsT0FBTyxDQUFLLE1BQUEsRUFBRSxRQUFRLEtBQUs7QUFDNUQsY0FBTSxVQUNKLFlBQVksVUFBVSxJQUFJLElBQUksWUFBWSxJQUFJLENBQUEsTUFBSyxFQUFFLE9BQU8sRUFBRSxPQUFPLENBQUMsR0FBRyxNQUFNLElBQUksQ0FBQztBQUN0RixZQUFJLE9BQU8sUUFBVztBQUNwQixnQkFBTSxTQUFTO0FBQUEsWUFDYjtBQUFBLFlBQ0EsTUFBTTtBQUFBLFlBQ04sU0FBUztBQUFBLFVBQUE7QUFFWCxrQkFBUSxLQUFLLE1BQU07QUFBQSxRQUFBLE9BQ2Q7QUFDTCxjQUFJLFdBQVc7QUFDZixzQkFBWSxRQUFRLENBQVcsWUFBQTtBQUN6QixnQkFBQSxRQUFRLEtBQUssT0FBTztBQUFBLFVBQUEsQ0FDekI7QUFBQSxRQUNIO0FBRUEsa0JBQVUsS0FBSyxDQUFDO0FBQUEsTUFDbEI7QUFFQSxjQUFRLFFBQVEsQ0FBTyxRQUFBO0FBQ3JCLGNBQU0sYUFBdUIsT0FBTyxPQUFPLElBQUksU0FBUztBQUN4RCxtQkFBVyxJQUFJLElBQUksSUFBSSxPQUFPLElBQUksVUFBVSxFQUFFO0FBQzlDLGVBQU8sS0FBSztBQUFBLFVBQ1YsaUJBQWlCLENBQUMsU0FBUztBQUFBLFVBQzNCLE1BQU07QUFBQSxRQUFBLENBQ1A7QUFBQSxNQUFBLENBQ0Y7QUFFTSxhQUFBO0FBQUEsSUFDVDtBQUVBLG1CQUFlLGFBQWE7QUFDcEIsWUFBQSxtQkFBb0IsTUFBTSxRQUFRO0FBQUEsUUFDdEMsd0JBQXdCO0FBQUEsTUFBQTtBQUUxQixlQUFTLFFBQVEsR0FBRyxTQUFTLElBQUksU0FBUztBQUN4QyxjQUFNLEtBQUssS0FBSztBQUFBLE1BQ2xCO0FBTU0sWUFBQSxlQUFlLFNBQVMsZ0JBQWdCO0FBQzlDLFdBQUssUUFBUTtBQUFBLFFBQ1gsUUFBUTtBQUFBLFFBQ1IsVUFBVTtBQUFBLE1BQUE7QUFHWixjQUFRLFFBQVE7QUFBQSxRQUNkLFlBQVk7QUFBQSxRQUNaLHFCQUFxQjtBQUFBLFFBQ3JCLFNBQVM7QUFBQSxVQUNQLFFBQVE7QUFBQSxZQUNOLFVBQVU7QUFBQSxVQUNaO0FBQUEsVUFDQSxTQUFTO0FBQUEsWUFDUCxXQUFXO0FBQUEsY0FDVCxPQUFPLFNBQVUsU0FBYztBQUN0Qix1QkFBQSxHQUFHLFFBQVEsS0FBSyxPQUFPLE9BQU8sUUFBUSxLQUFLLElBQUksQ0FBQyxPQUFPO0FBQUEsa0JBQzVELFFBQVE7QUFBQSxnQkFDVCxDQUFBO0FBQUEsY0FDSDtBQUFBLFlBQ0Y7QUFBQSxVQUNGO0FBQUEsUUFDRjtBQUFBLFFBQ0EsUUFBUTtBQUFBLFVBQ04sR0FBRztBQUFBLFlBQ0QsS0FBSztBQUFBLFlBQ0wsS0FBSztBQUFBLFlBQ0wsT0FBTztBQUFBLGNBQ0wsVUFBVTtBQUFBLFlBQ1o7QUFBQSxVQUNGO0FBQUEsVUFDQSxHQUFHO0FBQUEsWUFDRCxTQUFTO0FBQUEsWUFDVCxLQUFLO0FBQUEsWUFDTCxLQUFLO0FBQUEsVUFDUDtBQUFBLFFBQ0Y7QUFBQSxNQUFBO0FBRUYsZUFBUyxRQUFRO0FBQUEsSUFDbkI7QUFFVSxjQUFBLFlBQVksTUFBTSxXQUFBLENBQVk7OztRQWxOdENuSSxnQkFBa0UsS0FBbEVDLGNBQWtFSSxnQkFBeENGLE1BQUMsQ0FBQSxFQUFBLDhCQUFBLENBQUEsR0FBQSxDQUFBO0FBQUEsUUFDZ0IsU0FBUSxzQkFBbkQ2QyxZQUF1RDdDLE1BQUEsR0FBQSxHQUFBO0FBQUE7VUFBakQsTUFBTSxLQUFJO0FBQUEsVUFBRyxTQUFTLFFBQU87QUFBQSxRQUFBOzs7Ozs7Ozs7O0FDNEJyQyxNQUFBTCxnQkFBZTtBQUFBLEVBQ2IsTUFBTTtBQUNSOzs7O0FBV00sVUFBQSxFQUFFLE1BQU07QUFDZCxVQUFNLFFBQVE7QUFFVCxRQUFBO0FBQUwsS0FBQSxDQUFLc0ksaUJBQUw7QUFDRUEsbUJBQUEsYUFBQSxPQUFBLElBQUEsQ0FBQSxJQUFBO0FBQ0FBLG1CQUFBLGFBQUEsVUFBQSxJQUFBLENBQUEsSUFBQTtBQUFBLElBRkcsR0FBQSxnQkFBQSxjQUFBLENBQUEsRUFBQTtBQUtMLGNBQVUsTUFBTTtBQUNkLFlBQU0sUUFBUTtBQUFBLElBQUEsQ0FDZjtBQUVELGFBQVMsVUFBVSxNQUFtQjtBQUNwQyxZQUFNLFFBQVE7QUFBQSxJQUNoQjs7O1FBeERFcEksZ0JBRU0sT0FGTkMsY0FFTTtBQUFBLFVBREpELGdCQUEyRCxTQUEzREUsY0FBMkRHLGdCQUFsQ0YsTUFBQyxDQUFBLEVBQUEsbUJBQUEsQ0FBQSxHQUFBLENBQUE7QUFBQSxRQUFBO1FBRTVCSCxnQkFtQk0sT0FuQk5JLGNBbUJNO0FBQUEsVUFsQkpKLGdCQWVNLE9BZk5NLGNBZU07QUFBQSxZQWRKTixnQkFNUyxVQUFBO0FBQUEsY0FMTixPQUFxQmlELGVBQUEsQ0FBQSxhQUFBLE1BQUEsU0FBUyxJQUFpQixXQUFBLEVBQUEsQ0FBQTtBQUFBLGNBQy9DLFNBQU8sT0FBQSxDQUFBLE1BQUEsT0FBQSxDQUFBLElBQUEsQ0FBQSxXQUFBO0FBQUEsZ0JBQVU7QUFBQTtBQUFBO1lBQWlCO3dDQUVuQ2pELGdCQUFtRSxPQUFBO0FBQUEsZ0JBQTlELE9BQU07QUFBQSxnQkFBTyxLQUFBMEM7QUFBQUEsZ0JBQW1DLFFBQU87QUFBQSxjQUFBO2NBQU9LLGdCQUFBLHNCQUNoRTVDLE1BQUMsQ0FBQSxFQUFBLGlCQUFBLENBQUEsR0FBQSxDQUFBO0FBQUE7WUFFTkgsZ0JBTVMsVUFBQTtBQUFBLGNBTE4sT0FBOEJpRCxlQUFBLENBQUEsU0FBQSxhQUFBLE1BQUEsU0FBUyxJQUFvQixXQUFBLEVBQUEsQ0FBQTtBQUFBLGNBQzNELFNBQU8sT0FBQSxDQUFBLE1BQUEsT0FBQSxDQUFBLElBQUEsQ0FBQSxXQUFBO0FBQUEsZ0JBQVU7QUFBQTtBQUFBO1lBQW9CO3dDQUV0Q2pELGdCQUF1RSxPQUFBO0FBQUEsZ0JBQWxFLE9BQU07QUFBQSxnQkFBTyxLQUFBO0FBQUEsZ0JBQXVDLFFBQU87QUFBQSxjQUFBO2NBQU8rQyxnQkFBQSxzQkFDcEU1QyxNQUFDLENBQUEsRUFBQSxtQkFBQSxDQUFBLEdBQUEsQ0FBQTtBQUFBOztVQUdXLE1BQUssU0FBSSxrQkFBNUI2QyxZQUFpRHFGLGFBQUEsRUFBQSxLQUFBLEVBQUEsQ0FBQTtVQUN4QixNQUFLLFNBQUksa0JBQWxDckYsWUFBMEQsbUJBQUEsRUFBQSxLQUFBLEVBQUEsQ0FBQTs7UUFFNURoRCxnQkFFTSxPQUZOTyxjQUVNO0FBQUEsVUFEOEQsTUFBSyxTQUFJLGtCQUEzRXlDLFlBQWdHLFNBQUE7QUFBQTtZQUF0RixNQUFNN0MsTUFBVSxVQUFBLEVBQUM7QUFBQSxZQUFZLGNBQWM7QUFBQSxVQUFBOzs7Ozs7Ozs7QUNqQnpELE1BQUFMLGdCQUFlO0FBQUEsRUFDYixNQUFNO0FBQ1I7Ozs7Ozs7OztBQVRFLGFBQUF3QyxVQUFBLEdBQUFDLG1CQUdNLE9BSE50QyxjQUdNO0FBQUEsUUFGWSxRQUFJLFFBQUlFLE1BQVcsV0FBQSxFQUFDLDBCQUFwQzZDLFlBQWlELFVBQUEsRUFBQSxLQUFBLEVBQUEsQ0FBQTtRQUM3QixRQUFJLFFBQUk3QyxNQUFXLFdBQUEsRUFBQyw2QkFBeEM2QyxZQUEwRSxjQUFBO0FBQUE7VUFBbkIsUUFBUSxRQUFNO0FBQUEsUUFBQTs7Ozs7OztBQ0h6RSxNQUFlLGFBQUE7Ozs7QUM0QmYsTUFBQSxjQUFlO0FBQUEsRUFDYixNQUFNO0FBQ1I7Ozs7QUFLTSxVQUFBLEVBQUUsTUFBTTs7MEJBbENaVCxtQkF1Qk0sT0FBQSxNQUFBO0FBQUEsUUF0Qkp2QyxnQkFFSSxLQUZKQyxjQUVJSSxnQkFEQ0YsTUFBQyxDQUFBLEVBQUEsZUFBQSxDQUFBLEdBQUEsQ0FBQTtBQUFBLFFBR05ILGdCQUVJLDJCQURDRyxNQUFDLENBQUEsRUFBQSxtQkFBQSxDQUFBLEdBQUEsQ0FBQTtBQUFBLFFBR05ILGdCQU9NLE9BUE5FLGNBT007QUFBQSxVQU5KRixnQkFBb0UsS0FBQSxNQUFBO0FBQUEsWUFBOUQrQyxnQkFBQTFDLGdCQUFBRixNQUFBLENBQUEscUJBQW9CLEtBQUMsQ0FBQTtBQUFBLFlBQUEsT0FBQSxDQUFBLE1BQUEsT0FBQSxDQUFBLElBQUFILGdCQUFxQyxRQUEvQixFQUFBLE9BQU0sZUFBWSxVQUFNLEVBQUE7QUFBQSxVQUFBO1VBQ3pEQSxnQkFBZ0YsS0FBQSxNQUFBO0FBQUEsNENBQTFFRyxNQUFDLENBQUEsRUFBQSxlQUFBLENBQUEsR0FBQSxDQUFBO0FBQUEsWUFBb0IsT0FBQSxDQUFBLE1BQUEsT0FBQSxDQUFBLElBQUFILGdCQUFpRCxRQUEzQyxFQUFBLE9BQU0sZUFBWSxzQkFBa0IsRUFBQTtBQUFBLFVBQUE7VUFDckVBLGdCQUdJLEtBQUEsTUFBQTtBQUFBLFlBRkMrQyxnQkFBQTFDLGdCQUFBRixNQUFBLENBQUEsd0JBQXVCLEtBQzFCLENBQUE7QUFBQSxZQUFBLE9BQUEsQ0FBQSxNQUFBLE9BQUEsQ0FBQSxJQUFBSCxnQkFBMkUsUUFBckUsRUFBQSxPQUFNLGVBQVksZ0RBQTRDLEVBQUE7QUFBQSxVQUFBOztrQ0FJeEVBLGdCQUEyRCxPQUFBO0FBQUEsVUFBdEQsT0FBTTtBQUFBLFVBQVEsS0FBQTtBQUFBLFFBQUE7UUFFbkJBLGdCQUVJLEtBRkpJLGNBRUlDLGdCQURDRixNQUFDLENBQUEsRUFBQSxnQkFBQSxDQUFBLEdBQUEsQ0FBQTtBQUFBLE1BQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQytLSixVQUFBLEVBQUUsTUFBTTtBQUNkLFVBQU0sZ0JBQWdCO0FBQ3RCLFVBQU0sa0JBQWtCO0FBRXhCLFVBQU0sY0FBYztBQUNwQixVQUFNLGFBQWEsSUFBSSxJQUFJLElBQUksU0FBUyxJQUFJLENBQUM7QUFDN0MsVUFBTSxrQkFBa0I7QUFDeEIsVUFBTSxXQUFXO0FBRWpCLFVBQU0sWUFBWSxNQUFNO0FBQ1I7SUFBQSxDQUNmO0FBRUQsY0FBVSxZQUFZO0FBQ3BCLGVBQVMsUUFBUSxNQUFNLGdCQUFnQixTQUFTLGNBQWMsV0FBVyxpQkFBaUI7QUFDMUYsb0JBQWMsU0FBUyxLQUFNO0FBQ2Y7SUFBQSxDQUNmO0FBRUQsYUFBUyxnQkFBZ0I7QUFDdkIsWUFBTSxVQUFVLFdBQVcsTUFBTSxhQUFhLElBQUksS0FBSztBQUNuRCxVQUFBLFdBQVcsUUFBUSxXQUFXLElBQUk7QUFDeEIsb0JBQUEsUUFBUSxnQkFBZ0IsT0FBTztBQUMzQyxjQUFNLFNBQVMsV0FBVyxNQUFNLGFBQWEsSUFBSSxTQUFTO0FBQ3RELFlBQUEsWUFBWSxTQUFTLFlBQVksY0FBYztBQUM3QyxjQUFBLFVBQVUsUUFBUSxVQUFVO0FBQUksNEJBQWdCLFFBQVE7QUFBQTtBQUN2RCx3QkFBWSxRQUFRLFlBQVk7QUFBQSxRQUM1QixXQUFBLFVBQVUsUUFBUSxVQUFVLElBQUk7QUFDekMsaUJBQU8sUUFBUTtBQUFBLFlBQ2IsU0FBUztBQUFBLFlBQ1QsU0FBUztBQUFBLFlBQ1QsU0FBUyxLQUFLLFFBQVEsWUFBWSxNQUFNLElBQUksRUFBRTtBQUFBLFVBQUE7QUFBQSxRQUVsRDtBQUFBLE1BQ0Y7QUFBQSxJQUNGO0FBRUEsYUFBUyxVQUFVLE9BQW9CO0FBQ3JDLGtCQUFZLFFBQVE7QUFDcEIsb0JBQWMsVUFBVSxLQUFLO0FBQzdCLGlCQUFXLFFBQVEsSUFBSSxJQUFJLFNBQVMsSUFBSTtBQUFBLElBQzFDOzs7O1FBN09Fd0IsWUFBeUMsMEJBQUEsRUFBMUIsVUFBUyxnQkFBYztBQUFBLFFBQ3RDM0IsZ0JBNktNLE9BN0tOLFlBNktNO0FBQUEsc0NBNUtKQSxnQkFHTSxPQUFBLEVBSEQsT0FBTSxrQkFBYztBQUFBLFlBQ3ZCQSxnQkFBK0UsT0FBQTtBQUFBLGNBQTFFLE9BQU07QUFBQSxjQUFzQixRQUFPO0FBQUEsY0FBSyxLQUFBMEM7QUFBQUEsWUFBQTtZQUM3QzFDLGdCQUE0QyxLQUF6QyxFQUFBLE9BQU0sdUJBQUEsR0FBdUIsVUFBUTtBQUFBLFVBQUE7VUFFMUNBLGdCQXFCTSxPQXJCTixZQXFCTTtBQUFBLFlBcEJKQSxnQkFNRSxTQUFBO0FBQUEsY0FMQSxNQUFLO0FBQUEsY0FDTCxJQUFHO0FBQUEsY0FDSCxNQUFLO0FBQUEsY0FDSixTQUFTLFlBQVcsU0FBSUcsTUFBVyxXQUFBLEVBQUMsYUFBYSxZQUFXLFNBQUlBLE1BQVcsV0FBQSxFQUFDO0FBQUEsY0FDeEUsVUFBUSxPQUFBLENBQUEsTUFBQSxPQUFBLENBQUEsSUFBQSxDQUFBLFdBQUEsVUFBVUEsTUFBQSxXQUFBLEVBQVksU0FBUztBQUFBLFlBQUE7WUFFOUNILGdCQUdvQixTQUhwQixZQUdvQjtBQUFBLHdDQUZqQkEsZ0JBQXlELE9BQUE7QUFBQSxnQkFBcEQsS0FBQThDO0FBQUFBLGdCQUFzQyxRQUFPO0FBQUEsY0FBQTs4Q0FDakQzQyxNQUFDLENBQUEsRUFBQSxtQkFBQSxDQUFBLEdBQUEsQ0FBQTtBQUFBLFlBQUE7WUFJTEgsZ0JBTU0sT0FOTixZQU1NO0FBQUEsY0FKSSxZQUFXLFNBQUlHLG1CQUFZLGFBQWEsWUFBVyxTQUFJQSxNQUFXLFdBQUEsRUFBQyw2QkFEM0U2QyxZQUlFLG1CQUFBO0FBQUE7Z0JBRkMsTUFBTSxZQUFXO0FBQUEsZ0JBQ2pCLFFBQVEsZ0JBQWU7QUFBQSxjQUFBOzs7VUFLOUJoRCxnQkFtQk0sT0FuQk4sWUFtQk07QUFBQSxZQWxCSkEsZ0JBTUUsU0FBQTtBQUFBLGNBTEEsTUFBSztBQUFBLGNBQ0wsSUFBRztBQUFBLGNBQ0gsTUFBSztBQUFBLGNBQ0osU0FBUyxZQUFBLFNBQWVHLE1BQUEsV0FBQSxFQUFZO0FBQUEsY0FDaEMsVUFBUSxPQUFBLENBQUEsTUFBQSxPQUFBLENBQUEsSUFBQSxDQUFBLFdBQUEsVUFBVUEsTUFBQSxXQUFBLEVBQVksU0FBUztBQUFBLFlBQUE7WUFFOUNILGdCQUdvQixTQUhwQixZQUdvQjtBQUFBLHdDQUZqQkEsZ0JBQXlELE9BQUE7QUFBQSxnQkFBcEQsS0FBQXNJO0FBQUFBLGdCQUFzQyxRQUFPO0FBQUEsY0FBQTs4Q0FDakRuSSxNQUFDLENBQUEsRUFBQSwyQkFBQSxDQUFBLEdBQUEsQ0FBQTtBQUFBLFlBQUE7WUFJTEgsZ0JBSU0sT0FKTixZQUlNO0FBQUEsY0FISkEsZ0JBRU0sT0FGTixhQUVNO0FBQUEsZ0JBRGEsWUFBVyxTQUFJRyxNQUFXLFdBQUEsRUFBQywwQkFBNUM2QyxZQUF5RCxXQUFBLEVBQUEsS0FBQSxFQUFBLENBQUE7Ozs7VUFLL0RoRCxnQkFtQk0sT0FuQk4sYUFtQk07QUFBQSxZQWxCSkEsZ0JBTUUsU0FBQTtBQUFBLGNBTEEsTUFBSztBQUFBLGNBQ0wsSUFBRztBQUFBLGNBQ0gsTUFBSztBQUFBLGNBQ0osU0FBUyxZQUFBLFNBQWVHLE1BQUEsV0FBQSxFQUFZO0FBQUEsY0FDaEMsVUFBUSxPQUFBLENBQUEsTUFBQSxPQUFBLENBQUEsSUFBQSxDQUFBLFdBQUEsVUFBVUEsTUFBQSxXQUFBLEVBQVksTUFBTTtBQUFBLFlBQUE7WUFFM0NILGdCQUdvQixTQUhwQixhQUdvQjtBQUFBLDBDQUZqQkEsZ0JBQXNELE9BQUE7QUFBQSxnQkFBakQsS0FBQXVJO0FBQUFBLGdCQUFtQyxRQUFPO0FBQUEsY0FBQTs4Q0FDOUNwSSxNQUFDLENBQUEsRUFBQSx3QkFBQSxDQUFBLEdBQUEsQ0FBQTtBQUFBLFlBQUE7WUFJTEgsZ0JBSU0sT0FKTixhQUlNO0FBQUEsY0FISkEsZ0JBRU0sT0FGTixhQUVNO0FBQUEsZ0JBRFUsWUFBVyxTQUFJRyxNQUFXLFdBQUEsRUFBQyx1QkFBekM2QyxZQUFtRCxRQUFBLEVBQUEsS0FBQSxFQUFBLENBQUE7Ozs7VUFJekRoRCxnQkFtQk0sT0FuQk4sYUFtQk07QUFBQSxZQWxCSkEsZ0JBTUUsU0FBQTtBQUFBLGNBTEEsTUFBSztBQUFBLGNBQ0wsSUFBRztBQUFBLGNBQ0gsTUFBSztBQUFBLGNBQ0osU0FBUyxZQUFBLFNBQWVHLE1BQUEsV0FBQSxFQUFZO0FBQUEsY0FDaEMsVUFBUSxPQUFBLENBQUEsTUFBQSxPQUFBLENBQUEsSUFBQSxDQUFBLFdBQUEsVUFBVUEsTUFBQSxXQUFBLEVBQVksYUFBYTtBQUFBLFlBQUE7WUFFbERILGdCQUdvQixTQUhwQixhQUdvQjtBQUFBLDBDQUZqQkEsZ0JBQTZELE9BQUE7QUFBQSxnQkFBeEQsS0FBQTtBQUFBLGdCQUEwQyxRQUFPO0FBQUEsY0FBQTs4Q0FDckRHLE1BQUMsQ0FBQSxFQUFBLCtCQUFBLENBQUEsR0FBQSxDQUFBO0FBQUEsWUFBQTtZQUlMSCxnQkFJTSxPQUpOLGFBSU07QUFBQSxjQUhKQSxnQkFFTSxPQUZOLGFBRU07QUFBQSxnQkFEc0IsWUFBVyxTQUFJRyxNQUFXLFdBQUEsRUFBQyw4QkFBckQ2QyxZQUFzRSxvQkFBQSxFQUFBLEtBQUEsRUFBQSxDQUFBOzs7O1VBSzVFaEQsZ0JBbUJNLE9BbkJOLGFBbUJNO0FBQUEsWUFsQkpBLGdCQU1FLFNBQUE7QUFBQSxjQUxBLE1BQUs7QUFBQSxjQUNMLElBQUc7QUFBQSxjQUNILE1BQUs7QUFBQSxjQUNKLFNBQVMsWUFBQSxTQUFlRyxNQUFBLFdBQUEsRUFBWTtBQUFBLGNBQ2hDLFVBQVEsT0FBQSxDQUFBLE1BQUEsT0FBQSxDQUFBLElBQUEsQ0FBQSxXQUFBLFVBQVVBLE1BQUEsV0FBQSxFQUFZLFFBQVE7QUFBQSxZQUFBO1lBRTdDSCxnQkFHb0IsU0FIcEIsYUFHb0I7QUFBQSwwQ0FGakJBLGdCQUFzRCxPQUFBO0FBQUEsZ0JBQWpELEtBQUE7QUFBQSxnQkFBbUMsUUFBTztBQUFBLGNBQUE7OENBQzlDRyxNQUFDLENBQUEsRUFBQSxzQkFBQSxDQUFBLEdBQUEsQ0FBQTtBQUFBLFlBQUE7WUFJTEgsZ0JBSU0sT0FKTixhQUlNO0FBQUEsY0FISkEsZ0JBRU0sT0FGTixhQUVNO0FBQUEsZ0JBRFksWUFBVyxTQUFJRyxNQUFXLFdBQUEsRUFBQyx5QkFBM0M2QyxZQUF1RCxVQUFBLEVBQUEsS0FBQSxFQUFBLENBQUE7Ozs7VUFLN0RoRCxnQkFtQk0sT0FuQk4sYUFtQk07QUFBQSxZQWxCSkEsZ0JBTUUsU0FBQTtBQUFBLGNBTEEsTUFBSztBQUFBLGNBQ0wsSUFBRztBQUFBLGNBQ0gsTUFBSztBQUFBLGNBQ0osU0FBUyxZQUFBLFNBQWVHLE1BQUEsV0FBQSxFQUFZO0FBQUEsY0FDaEMsVUFBUSxPQUFBLENBQUEsTUFBQSxPQUFBLENBQUEsSUFBQSxDQUFBLFdBQUEsVUFBVUEsTUFBQSxXQUFBLEVBQVksZUFBZTtBQUFBLFlBQUE7WUFFcERILGdCQUdvQixTQUhwQixhQUdvQjtBQUFBLDBDQUZqQkEsZ0JBQXdELE9BQUE7QUFBQSxnQkFBbkQsS0FBQTtBQUFBLGdCQUFxQyxRQUFPO0FBQUEsY0FBQTs4Q0FDaERHLE1BQUMsQ0FBQSxFQUFBLHlCQUFBLENBQUEsR0FBQSxDQUFBO0FBQUEsWUFBQTtZQUlMSCxnQkFJTSxPQUpOLGFBSU07QUFBQSxjQUhKQSxnQkFFTSxPQUZOLGFBRU07QUFBQSxnQkFEbUIsWUFBVyxTQUFJRyxNQUFXLFdBQUEsRUFBQyxnQ0FBbEQ2QyxZQUFxRSxpQkFBQSxFQUFBLEtBQUEsRUFBQSxDQUFBOzs7O1VBSzNFaEQsZ0JBbUJNLE9BbkJOLGFBbUJNO0FBQUEsWUFsQkpBLGdCQU1FLFNBQUE7QUFBQSxjQUxBLE1BQUs7QUFBQSxjQUNMLElBQUc7QUFBQSxjQUNILE1BQUs7QUFBQSxjQUNKLFNBQVMsWUFBQSxTQUFlRyxNQUFBLFdBQUEsRUFBWTtBQUFBLGNBQ2hDLFVBQVEsT0FBQSxDQUFBLE1BQUEsT0FBQSxDQUFBLElBQUEsQ0FBQSxXQUFBLFVBQVVBLE1BQUEsV0FBQSxFQUFZLEtBQUs7QUFBQSxZQUFBO1lBRTFDSCxnQkFHb0IsU0FIcEIsYUFHb0I7QUFBQSwwQ0FGakJBLGdCQUFxRCxPQUFBO0FBQUEsZ0JBQWhELEtBQUE7QUFBQSxnQkFBa0MsUUFBTztBQUFBLGNBQUE7OENBQzdDRyxNQUFDLENBQUEsRUFBQSx1QkFBQSxDQUFBLEdBQUEsQ0FBQTtBQUFBLFlBQUE7WUFJTEgsZ0JBSU0sT0FKTixhQUlNO0FBQUEsY0FISkEsZ0JBRU0sT0FGTixhQUVNO0FBQUEsZ0JBRFMsWUFBVyxTQUFJRyxNQUFXLFdBQUEsRUFBQyxzQkFBeEM2QyxZQUFpRCxPQUFBLEVBQUEsS0FBQSxFQUFBLENBQUE7Ozs7VUFLdkRoRCxnQkFpQk0sT0FqQk4sYUFpQk07QUFBQSxZQWhCSkEsZ0JBTUUsU0FBQTtBQUFBLGNBTEEsTUFBSztBQUFBLGNBQ0wsSUFBRztBQUFBLGNBQ0gsTUFBSztBQUFBLGNBQ0osU0FBUyxZQUFBLFNBQWVHLE1BQUEsV0FBQSxFQUFZO0FBQUEsY0FDaEMsVUFBUSxPQUFBLENBQUEsTUFBQSxPQUFBLENBQUEsSUFBQSxDQUFBLFdBQUEsVUFBVUEsTUFBQSxXQUFBLEVBQVksTUFBTTtBQUFBLFlBQUE7WUFFM0NILGdCQUNnRyxTQURoRyxhQUNnRztBQUFBLDBDQUE3RkEsZ0JBQW9ELE9BQUE7QUFBQSxnQkFBL0MsS0FBQTtBQUFBLGdCQUFpQyxRQUFPO0FBQUEsY0FBQTs4Q0FBVUcsTUFBQyxDQUFBLEVBQUEsZ0JBQUEsQ0FBQSxHQUFBLENBQUE7QUFBQSxZQUFBO1lBRzNESCxnQkFJTSxPQUpOLGFBSU07QUFBQSxjQUhKQSxnQkFFTSxPQUZOLGFBRU07QUFBQSxnQkFEWSxZQUFXLFNBQUlHLE1BQVcsV0FBQSxFQUFDLHVCQUEzQzZDLFlBQXFELFVBQUEsRUFBQSxLQUFBLEVBQUEsQ0FBQTs7OztVQUszRHJCLFlBQTBCLHNCQUFBO0FBQUEsUUFBQTs7Ozs7OztBQ3ZLOUIsTUFBTSxNQUFNLFVBQVUsUUFBUTtBQUM5QixJQUFJLElBQUk2RyxFQUFhO0FBQ3JCLElBQUksSUFBSSxJQUFJO0FBQ1osSUFBSSxVQUFVLGlCQUFpQkMsRUFBYTtBQUM1QyxJQUFJLE1BQU0sTUFBTTs7IiwieF9nb29nbGVfaWdub3JlTGlzdCI6WzcsMzUsMzYsMzcsMzgsMzksNDAsNDEsNDIsNDMsNDQsNDUsNDYsNDcsNDgsNDksNTAsNTEsNTIsNTMsNTQsNTUsNTYsNTcsNTgsNTksNjAsNjEsNjIsNjMsNjQsNjUsNjYsNjcsNjgsNjksNzAsNzEsNzIsNzMsNzQsNzUsNzYsNzcsNzgsNzksODAsODEsODIsODMsODQsODUsODYsODcsODgsODksOTAsOTEsOTIsOTMsOTQsOTUsOTYsOTcsOTgsOTksMTAwLDEwMSwxMDIsMTAzLDEwNCwxMDUsMTA2LDEwNywxMDgsMTA5LDExMCwxMTEsMTEyLDExMywxMTQsMTE1LDExNiwxMTcsMTE4LDExOSwxMjAsMTIxLDEyMiwxMjMsMTI0LDEyNSwxMjYsMTI3LDEyOCwxMjksMTMwLDEzMSwxMzIsMTMzLDEzNCwxMzUsMTM2LDEzNywxMzgsMTM5LDE0MCwxNDEsMTQyLDE0MywxNDQsMTQ1LDE0NiwxNDcsMTQ4LDE0OSwxNTAsMTUxLDE1MiwxNTMsMTU0LDE1NSwxNTYsMTU3XX0=
