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
const GeneralSettings_vue_vue_type_style_index_0_scoped_626be72c_lang = "";
const GeneralSettings = /* @__PURE__ */ _export_sfc(_sfc_main$h, [["__scopeId", "data-v-626be72c"]]);
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
const PromoCleanYoutubeModal_vue_vue_type_style_index_0_scoped_051d233f_lang = "";
const PromoCleanYoutubeModal = /* @__PURE__ */ _export_sfc(_sfc_main$g, [["__scopeId", "data-v-051d233f"]]);
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
const WhiteList_vue_vue_type_style_index_0_scoped_a38a67eb_lang = "";
const WhiteList = /* @__PURE__ */ _export_sfc(_sfc_main$f, [["__scopeId", "data-v-a38a67eb"]]);
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
const ListWithTime_vue_vue_type_style_index_0_scoped_7ea332ba_lang = "";
const ListWithTimeComponent = /* @__PURE__ */ _export_sfc(_sfc_main$e, [["__scopeId", "data-v-7ea332ba"]]);
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
const Limits_vue_vue_type_style_index_0_scoped_ef067dd9_lang = "";
const Limits = /* @__PURE__ */ _export_sfc(_sfc_main$d, [["__scopeId", "data-v-ef067dd9"]]);
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
const Notifications_vue_vue_type_style_index_0_scoped_8f61faa2_lang = "";
const DailyNotifications = /* @__PURE__ */ _export_sfc(_sfc_main$c, [["__scopeId", "data-v-8f61faa2"]]);
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
const PomodoroSoundsSelector_vue_vue_type_style_index_0_scoped_725e6873_lang = "";
const PomodoroSoundsSelector = /* @__PURE__ */ _export_sfc(_sfc_main$b, [["__scopeId", "data-v-725e6873"]]);
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
const Pomodoro_vue_vue_type_style_index_0_scoped_94514745_lang = "";
const Pomodoro = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["__scopeId", "data-v-94514745"]]);
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
const MyApps_vue_vue_type_style_index_0_scoped_e9e5d503_lang = "";
const MyApps = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["__scopeId", "data-v-e9e5d503"]]);
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
const About_vue_vue_type_style_index_0_scoped_16b1607e_lang = "";
const About = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["__scopeId", "data-v-16b1607e"]]);
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
const WebsiteStatsDetails_vue_vue_type_style_index_0_scoped_772a5983_lang = "";
const WebsiteStatsDetails = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["__scopeId", "data-v-772a5983"]]);
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
const WebsiteStats_vue_vue_type_style_index_0_scoped_b3d08563_lang = "";
const WebsiteStats = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["__scopeId", "data-v-b3d08563"]]);
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
const TimeIntervalChart_vue_vue_type_style_index_0_scoped_7953a316_lang = "";
const TimeIntervalChart = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["__scopeId", "data-v-7953a316"]]);
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
const Dashboad_vue_vue_type_style_index_0_scoped_de71a1bc_lang = "";
const Dashboad = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-de71a1bc"]]);
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
const DashboadContainer_vue_vue_type_style_index_0_scoped_858be692_lang = "";
const DashboadContainer = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-858be692"]]);
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
const Donation_vue_vue_type_style_index_0_scoped_0aff4854_lang = "";
const Donation = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-0aff4854"]]);
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
            createBaseVNode("p", { class: "d-inline-block title" }, "Web Activity Time Tracker")
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
const Dashboard_vue_vue_type_style_index_0_scoped_d2447372_lang = "";
const Settings = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-d2447372"]]);
const app = createApp(Settings);
app.use(at);
app.use(i18n);
app.component("VueDatePicker", oa);
app.mount("body");
const dashboard = "";
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGFzaGJvYXJkLmpzIiwic291cmNlcyI6WyIuLi8uLi9zcmMvYXNzZXRzL2ljb25zL3MtZGFzaGJvYXJkLnN2ZyIsIi4uLy4uL3NyYy9hc3NldHMvaWNvbnMvcy13aGl0ZWxpc3Quc3ZnIiwiLi4vLi4vc3JjL2Fzc2V0cy9pY29ucy9zLWxpbWl0cy5zdmciLCIuLi8uLi9zcmMvYXNzZXRzL2ljb25zL3Mtbm90aWZpY2F0aW9ucy5zdmciLCIuLi8uLi9zcmMvYXNzZXRzL2ljb25zL3Mtc2V0dGluZ3Muc3ZnIiwiLi4vLi4vc3JjL2Fzc2V0cy9pY29ucy9zLWFib3V0LnN2ZyIsIi4uLy4uL3NyYy9hc3NldHMvaWNvbnMvZG9uYXRlLnBuZyIsIi4uLy4uL25vZGVfbW9kdWxlcy9Aa3l2Zy92dWUzLW5vdGlmaWNhdGlvbi9kaXN0L2luZGV4LmVzLmpzIiwiLi4vLi4vc3JjL2Z1bmN0aW9ucy91c2VSZW1vdmVBbGxEYXRhLnRzIiwiLi4vLi4vc3JjL2Z1bmN0aW9ucy91c2VSZXN0b3JlRGF0YS50cyIsIi4uLy4uL3NyYy9jb21wb25lbnRzL0dlbmVyYWxTZXR0aW5ncy52dWUiLCIuLi8uLi9zcmMvYXNzZXRzL2NsZWFyLXlvdXR1YmUtcHJvbW8ucG5nIiwiLi4vLi4vc3JjL2NvbXBvbmVudHMvUHJvbW9DbGVhbllvdXR1YmVNb2RhbC52dWUiLCIuLi8uLi9zcmMvYXNzZXRzL2ljb25zL2RlbGV0ZS5wbmciLCIuLi8uLi9zcmMvdXRpbHMvZmF2aWNvbi50cyIsIi4uLy4uL3NyYy9jb21wb25lbnRzL1doaXRlTGlzdC52dWUiLCIuLi8uLi9zcmMvYXNzZXRzL2ljb25zL2VkaXQuc3ZnIiwiLi4vLi4vc3JjL2VudGl0eS9yZXN0cmljdGlvbi50cyIsIi4uLy4uL3NyYy9jb21wb25lbnRzL0xpc3RXaXRoVGltZS52dWUiLCIuLi8uLi9zcmMvY29tcG9uZW50cy9MaW1pdHMudnVlIiwiLi4vLi4vc3JjL2NvbXBvbmVudHMvTm90aWZpY2F0aW9ucy52dWUiLCIuLi8uLi9zcmMvYXNzZXRzL2ljb25zL3BvbW9kb3JvLnBuZyIsIi4uLy4uL3NyYy9hc3NldHMvaWNvbnMvcG9tb2Rvcm8tcmVzdC5wbmciLCIuLi8uLi9zcmMvYXNzZXRzL2ljb25zL3N0b3Auc3ZnIiwiLi4vLi4vc3JjL2Fzc2V0cy9pY29ucy9zdGFydC5zdmciLCIuLi8uLi9zcmMvZnVuY3Rpb25zL3BsYXlTb3VuZC50cyIsIi4uLy4uL3NyYy9jb21wb25lbnRzL1BvbW9kb3JvU291bmRzU2VsZWN0b3IudnVlIiwiLi4vLi4vc3JjL2NvbXBvbmVudHMvUG9tb2Rvcm8udnVlIiwiLi4vLi4vc3JjL2NvbXBvbmVudHMvTXlBcHBzLnZ1ZSIsIi4uLy4uL3NyYy9jb21wb25lbnRzL0Fib3V0LnZ1ZSIsIi4uLy4uL3NyYy9jb21wb25lbnRzL1dlYnNpdGVTdGF0c0RldGFpbHMudnVlIiwiLi4vLi4vc3JjL2Z1bmN0aW9ucy91c2VUYWJTdGF0c0J5RGF5cy50cyIsIi4uLy4uL3NyYy9jb21wb25lbnRzL1dlYnNpdGVTdGF0cy52dWUiLCIuLi8uLi9zcmMvYXNzZXRzL2ljb25zL2J5LWhvdXJzLnN2ZyIsIi4uLy4uL3NyYy9hc3NldHMvaWNvbnMvYnktaW50ZXJ2YWxzLnN2ZyIsIi4uLy4uL25vZGVfbW9kdWxlcy9kMy1hcnJheS9zcmMvYXNjZW5kaW5nLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2QzLWFycmF5L3NyYy9kZXNjZW5kaW5nLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2QzLWFycmF5L3NyYy9iaXNlY3Rvci5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9kMy1hcnJheS9zcmMvbnVtYmVyLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2QzLWFycmF5L3NyYy9iaXNlY3QuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvZDMtYXJyYXkvc3JjL3RpY2tzLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2QzLWF4aXMvc3JjL2lkZW50aXR5LmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2QzLWF4aXMvc3JjL2F4aXMuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvZDMtZGlzcGF0Y2gvc3JjL2Rpc3BhdGNoLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2QzLXNlbGVjdGlvbi9zcmMvbmFtZXNwYWNlcy5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9kMy1zZWxlY3Rpb24vc3JjL25hbWVzcGFjZS5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9kMy1zZWxlY3Rpb24vc3JjL2NyZWF0b3IuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvZDMtc2VsZWN0aW9uL3NyYy9zZWxlY3Rvci5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9kMy1zZWxlY3Rpb24vc3JjL3NlbGVjdGlvbi9zZWxlY3QuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvZDMtc2VsZWN0aW9uL3NyYy9hcnJheS5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9kMy1zZWxlY3Rpb24vc3JjL3NlbGVjdG9yQWxsLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2QzLXNlbGVjdGlvbi9zcmMvc2VsZWN0aW9uL3NlbGVjdEFsbC5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9kMy1zZWxlY3Rpb24vc3JjL21hdGNoZXIuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvZDMtc2VsZWN0aW9uL3NyYy9zZWxlY3Rpb24vc2VsZWN0Q2hpbGQuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvZDMtc2VsZWN0aW9uL3NyYy9zZWxlY3Rpb24vc2VsZWN0Q2hpbGRyZW4uanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvZDMtc2VsZWN0aW9uL3NyYy9zZWxlY3Rpb24vZmlsdGVyLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2QzLXNlbGVjdGlvbi9zcmMvc2VsZWN0aW9uL3NwYXJzZS5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9kMy1zZWxlY3Rpb24vc3JjL3NlbGVjdGlvbi9lbnRlci5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9kMy1zZWxlY3Rpb24vc3JjL2NvbnN0YW50LmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2QzLXNlbGVjdGlvbi9zcmMvc2VsZWN0aW9uL2RhdGEuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvZDMtc2VsZWN0aW9uL3NyYy9zZWxlY3Rpb24vZXhpdC5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9kMy1zZWxlY3Rpb24vc3JjL3NlbGVjdGlvbi9qb2luLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2QzLXNlbGVjdGlvbi9zcmMvc2VsZWN0aW9uL21lcmdlLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2QzLXNlbGVjdGlvbi9zcmMvc2VsZWN0aW9uL29yZGVyLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2QzLXNlbGVjdGlvbi9zcmMvc2VsZWN0aW9uL3NvcnQuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvZDMtc2VsZWN0aW9uL3NyYy9zZWxlY3Rpb24vY2FsbC5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9kMy1zZWxlY3Rpb24vc3JjL3NlbGVjdGlvbi9ub2Rlcy5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9kMy1zZWxlY3Rpb24vc3JjL3NlbGVjdGlvbi9ub2RlLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2QzLXNlbGVjdGlvbi9zcmMvc2VsZWN0aW9uL3NpemUuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvZDMtc2VsZWN0aW9uL3NyYy9zZWxlY3Rpb24vZW1wdHkuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvZDMtc2VsZWN0aW9uL3NyYy9zZWxlY3Rpb24vZWFjaC5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9kMy1zZWxlY3Rpb24vc3JjL3NlbGVjdGlvbi9hdHRyLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2QzLXNlbGVjdGlvbi9zcmMvd2luZG93LmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2QzLXNlbGVjdGlvbi9zcmMvc2VsZWN0aW9uL3N0eWxlLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2QzLXNlbGVjdGlvbi9zcmMvc2VsZWN0aW9uL3Byb3BlcnR5LmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2QzLXNlbGVjdGlvbi9zcmMvc2VsZWN0aW9uL2NsYXNzZWQuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvZDMtc2VsZWN0aW9uL3NyYy9zZWxlY3Rpb24vdGV4dC5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9kMy1zZWxlY3Rpb24vc3JjL3NlbGVjdGlvbi9odG1sLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2QzLXNlbGVjdGlvbi9zcmMvc2VsZWN0aW9uL3JhaXNlLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2QzLXNlbGVjdGlvbi9zcmMvc2VsZWN0aW9uL2xvd2VyLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2QzLXNlbGVjdGlvbi9zcmMvc2VsZWN0aW9uL2FwcGVuZC5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9kMy1zZWxlY3Rpb24vc3JjL3NlbGVjdGlvbi9pbnNlcnQuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvZDMtc2VsZWN0aW9uL3NyYy9zZWxlY3Rpb24vcmVtb3ZlLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2QzLXNlbGVjdGlvbi9zcmMvc2VsZWN0aW9uL2Nsb25lLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2QzLXNlbGVjdGlvbi9zcmMvc2VsZWN0aW9uL2RhdHVtLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2QzLXNlbGVjdGlvbi9zcmMvc2VsZWN0aW9uL29uLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2QzLXNlbGVjdGlvbi9zcmMvc2VsZWN0aW9uL2Rpc3BhdGNoLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2QzLXNlbGVjdGlvbi9zcmMvc2VsZWN0aW9uL2l0ZXJhdG9yLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2QzLXNlbGVjdGlvbi9zcmMvc2VsZWN0aW9uL2luZGV4LmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2QzLXNlbGVjdGlvbi9zcmMvc2VsZWN0LmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2QzLWNvbG9yL3NyYy9kZWZpbmUuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvZDMtY29sb3Ivc3JjL2NvbG9yLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2QzLWludGVycG9sYXRlL3NyYy9jb25zdGFudC5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9kMy1pbnRlcnBvbGF0ZS9zcmMvY29sb3IuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvZDMtaW50ZXJwb2xhdGUvc3JjL3JnYi5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9kMy1pbnRlcnBvbGF0ZS9zcmMvbnVtYmVyQXJyYXkuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvZDMtaW50ZXJwb2xhdGUvc3JjL2FycmF5LmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2QzLWludGVycG9sYXRlL3NyYy9kYXRlLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2QzLWludGVycG9sYXRlL3NyYy9udW1iZXIuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvZDMtaW50ZXJwb2xhdGUvc3JjL29iamVjdC5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9kMy1pbnRlcnBvbGF0ZS9zcmMvc3RyaW5nLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2QzLWludGVycG9sYXRlL3NyYy92YWx1ZS5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9kMy1pbnRlcnBvbGF0ZS9zcmMvcm91bmQuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvZDMtaW50ZXJwb2xhdGUvc3JjL3RyYW5zZm9ybS9kZWNvbXBvc2UuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvZDMtaW50ZXJwb2xhdGUvc3JjL3RyYW5zZm9ybS9wYXJzZS5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9kMy1pbnRlcnBvbGF0ZS9zcmMvdHJhbnNmb3JtL2luZGV4LmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2QzLXRpbWVyL3NyYy90aW1lci5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9kMy10aW1lci9zcmMvdGltZW91dC5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9kMy10cmFuc2l0aW9uL3NyYy90cmFuc2l0aW9uL3NjaGVkdWxlLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2QzLXRyYW5zaXRpb24vc3JjL2ludGVycnVwdC5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9kMy10cmFuc2l0aW9uL3NyYy9zZWxlY3Rpb24vaW50ZXJydXB0LmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2QzLXRyYW5zaXRpb24vc3JjL3RyYW5zaXRpb24vdHdlZW4uanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvZDMtdHJhbnNpdGlvbi9zcmMvdHJhbnNpdGlvbi9pbnRlcnBvbGF0ZS5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9kMy10cmFuc2l0aW9uL3NyYy90cmFuc2l0aW9uL2F0dHIuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvZDMtdHJhbnNpdGlvbi9zcmMvdHJhbnNpdGlvbi9hdHRyVHdlZW4uanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvZDMtdHJhbnNpdGlvbi9zcmMvdHJhbnNpdGlvbi9kZWxheS5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9kMy10cmFuc2l0aW9uL3NyYy90cmFuc2l0aW9uL2R1cmF0aW9uLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2QzLXRyYW5zaXRpb24vc3JjL3RyYW5zaXRpb24vZWFzZS5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9kMy10cmFuc2l0aW9uL3NyYy90cmFuc2l0aW9uL2Vhc2VWYXJ5aW5nLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2QzLXRyYW5zaXRpb24vc3JjL3RyYW5zaXRpb24vZmlsdGVyLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2QzLXRyYW5zaXRpb24vc3JjL3RyYW5zaXRpb24vbWVyZ2UuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvZDMtdHJhbnNpdGlvbi9zcmMvdHJhbnNpdGlvbi9vbi5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9kMy10cmFuc2l0aW9uL3NyYy90cmFuc2l0aW9uL3JlbW92ZS5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9kMy10cmFuc2l0aW9uL3NyYy90cmFuc2l0aW9uL3NlbGVjdC5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9kMy10cmFuc2l0aW9uL3NyYy90cmFuc2l0aW9uL3NlbGVjdEFsbC5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9kMy10cmFuc2l0aW9uL3NyYy90cmFuc2l0aW9uL3NlbGVjdGlvbi5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9kMy10cmFuc2l0aW9uL3NyYy90cmFuc2l0aW9uL3N0eWxlLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2QzLXRyYW5zaXRpb24vc3JjL3RyYW5zaXRpb24vc3R5bGVUd2Vlbi5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9kMy10cmFuc2l0aW9uL3NyYy90cmFuc2l0aW9uL3RleHQuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvZDMtdHJhbnNpdGlvbi9zcmMvdHJhbnNpdGlvbi90ZXh0VHdlZW4uanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvZDMtdHJhbnNpdGlvbi9zcmMvdHJhbnNpdGlvbi90cmFuc2l0aW9uLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2QzLXRyYW5zaXRpb24vc3JjL3RyYW5zaXRpb24vZW5kLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2QzLXRyYW5zaXRpb24vc3JjL3RyYW5zaXRpb24vaW5kZXguanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvZDMtZWFzZS9zcmMvY3ViaWMuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvZDMtdHJhbnNpdGlvbi9zcmMvc2VsZWN0aW9uL3RyYW5zaXRpb24uanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvZDMtdHJhbnNpdGlvbi9zcmMvc2VsZWN0aW9uL2luZGV4LmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2QzLWZvcm1hdC9zcmMvZm9ybWF0RGVjaW1hbC5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9kMy1mb3JtYXQvc3JjL2V4cG9uZW50LmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2QzLWZvcm1hdC9zcmMvZm9ybWF0R3JvdXAuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvZDMtZm9ybWF0L3NyYy9mb3JtYXROdW1lcmFscy5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9kMy1mb3JtYXQvc3JjL2Zvcm1hdFNwZWNpZmllci5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9kMy1mb3JtYXQvc3JjL2Zvcm1hdFRyaW0uanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvZDMtZm9ybWF0L3NyYy9mb3JtYXRQcmVmaXhBdXRvLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2QzLWZvcm1hdC9zcmMvZm9ybWF0Um91bmRlZC5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9kMy1mb3JtYXQvc3JjL2Zvcm1hdFR5cGVzLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2QzLWZvcm1hdC9zcmMvaWRlbnRpdHkuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvZDMtZm9ybWF0L3NyYy9sb2NhbGUuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvZDMtZm9ybWF0L3NyYy9kZWZhdWx0TG9jYWxlLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2QzLWZvcm1hdC9zcmMvcHJlY2lzaW9uRml4ZWQuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvZDMtZm9ybWF0L3NyYy9wcmVjaXNpb25QcmVmaXguanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvZDMtZm9ybWF0L3NyYy9wcmVjaXNpb25Sb3VuZC5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9kMy1zY2FsZS9zcmMvaW5pdC5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9kMy1zY2FsZS9zcmMvY29uc3RhbnQuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvZDMtc2NhbGUvc3JjL251bWJlci5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9kMy1zY2FsZS9zcmMvY29udGludW91cy5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9kMy1zY2FsZS9zcmMvdGlja0Zvcm1hdC5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9kMy1zY2FsZS9zcmMvbGluZWFyLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2QzLXpvb20vc3JjL3RyYW5zZm9ybS5qcyIsIi4uLy4uL3NyYy9jb21wb25lbnRzL1RpbWVJbnRlcnZhbENoYXJ0LnZ1ZSIsIi4uLy4uL3NyYy9jb21wb25lbnRzL0hvdXJseUNoYXJ0LnZ1ZSIsIi4uLy4uL3NyYy9jb21wb25lbnRzL0Rhc2hib2FkLnZ1ZSIsIi4uLy4uL3NyYy9jb21wb25lbnRzL0Rhc2hib2FkQ29udGFpbmVyLnZ1ZSIsIi4uLy4uL3NyYy9hc3NldHMvaWNvbnMvZG9uYXRpb24tcXIucG5nIiwiLi4vLi4vc3JjL2NvbXBvbmVudHMvRG9uYXRpb24udnVlIiwiLi4vLi4vc3JjL3BhZ2VzL0Rhc2hib2FyZC52dWUiLCIuLi8uLi9zcmMvZGFzaGJvYXJkLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IFwiX19WSVRFX0FTU0VUX18xZDc3ZjhlYl9fXCIiLCJleHBvcnQgZGVmYXVsdCBcIl9fVklURV9BU1NFVF9fYjUzNjljZmJfX1wiIiwiZXhwb3J0IGRlZmF1bHQgXCJfX1ZJVEVfQVNTRVRfXzdmOWFjODMxX19cIiIsImV4cG9ydCBkZWZhdWx0IFwiX19WSVRFX0FTU0VUX19lMGQ2ZTI2Yl9fXCIiLCJleHBvcnQgZGVmYXVsdCBcIl9fVklURV9BU1NFVF9fNmMzNmE5NGFfX1wiIiwiZXhwb3J0IGRlZmF1bHQgXCJfX1ZJVEVfQVNTRVRfX2VhMDM4NjNjX19cIiIsImV4cG9ydCBkZWZhdWx0IFwiX19WSVRFX0FTU0VUX18zNDRhNTA0Zl9fXCIiLCJpbXBvcnQgeyBkZWZpbmVDb21wb25lbnQgYXMgeSwgb3BlbkJsb2NrIGFzIGEsIGNyZWF0ZUJsb2NrIGFzIGcsIFRyYW5zaXRpb25Hcm91cCBhcyB4LCB3aXRoQ3R4IGFzICQsIHJlbmRlclNsb3QgYXMgVCwgY3JlYXRlRWxlbWVudEJsb2NrIGFzIHAsIG5vcm1hbGl6ZVN0eWxlIGFzIGIsIHJlc29sdmVEeW5hbWljQ29tcG9uZW50IGFzIGssIEZyYWdtZW50IGFzIF8sIHJlbmRlckxpc3QgYXMgQiwgbm9ybWFsaXplQ2xhc3MgYXMgRCwgY3JlYXRlRWxlbWVudFZOb2RlIGFzIE4sIGNyZWF0ZUNvbW1lbnRWTm9kZSBhcyBIIH0gZnJvbSBcInZ1ZVwiO1xuZnVuY3Rpb24gTSh0KSB7XG4gIHJldHVybiB7IGFsbDogdCA9IHQgfHwgLyogQF9fUFVSRV9fICovIG5ldyBNYXAoKSwgb246IGZ1bmN0aW9uKGUsIGkpIHtcbiAgICB2YXIgcyA9IHQuZ2V0KGUpO1xuICAgIHMgPyBzLnB1c2goaSkgOiB0LnNldChlLCBbaV0pO1xuICB9LCBvZmY6IGZ1bmN0aW9uKGUsIGkpIHtcbiAgICB2YXIgcyA9IHQuZ2V0KGUpO1xuICAgIHMgJiYgKGkgPyBzLnNwbGljZShzLmluZGV4T2YoaSkgPj4+IDAsIDEpIDogdC5zZXQoZSwgW10pKTtcbiAgfSwgZW1pdDogZnVuY3Rpb24oZSwgaSkge1xuICAgIHZhciBzID0gdC5nZXQoZSk7XG4gICAgcyAmJiBzLnNsaWNlKCkubWFwKGZ1bmN0aW9uKG4pIHtcbiAgICAgIG4oaSk7XG4gICAgfSksIChzID0gdC5nZXQoXCIqXCIpKSAmJiBzLnNsaWNlKCkubWFwKGZ1bmN0aW9uKG4pIHtcbiAgICAgIG4oZSwgaSk7XG4gICAgfSk7XG4gIH0gfTtcbn1cbmNvbnN0IGQgPSBNKCksIEMgPSAvKiBAX19QVVJFX18gKi8gbmV3IE1hcCgpLCB3ID0ge1xuICB4OiBbXCJsZWZ0XCIsIFwiY2VudGVyXCIsIFwicmlnaHRcIl0sXG4gIHk6IFtcInRvcFwiLCBcImJvdHRvbVwiXVxufSwgUiA9ICgodCkgPT4gKCkgPT4gdCsrKSgwKSwgViA9ICh0KSA9PiB0eXBlb2YgdCAhPSBcInN0cmluZ1wiID8gW10gOiB0LnNwbGl0KC9cXHMrL2dpKS5maWx0ZXIoKGUpID0+IGUpLCBXID0gKHQpID0+IHtcbiAgdHlwZW9mIHQgPT0gXCJzdHJpbmdcIiAmJiAodCA9IFYodCkpO1xuICBsZXQgZSA9IG51bGwsIGkgPSBudWxsO1xuICByZXR1cm4gdC5mb3JFYWNoKChzKSA9PiB7XG4gICAgdy55LmluZGV4T2YocykgIT09IC0xICYmIChpID0gcyksIHcueC5pbmRleE9mKHMpICE9PSAtMSAmJiAoZSA9IHMpO1xuICB9KSwgeyB4OiBlLCB5OiBpIH07XG59O1xuY2xhc3MgWSB7XG4gIGNvbnN0cnVjdG9yKGUsIGksIHMpIHtcbiAgICB0aGlzLnJlbWFpbmluZyA9IGksIHRoaXMuY2FsbGJhY2sgPSBlLCB0aGlzLm5vdGlmeUl0ZW0gPSBzLCB0aGlzLnJlc3VtZSgpO1xuICB9XG4gIHBhdXNlKCkge1xuICAgIGNsZWFyVGltZW91dCh0aGlzLm5vdGlmeUl0ZW0udGltZXIpLCB0aGlzLnJlbWFpbmluZyAtPSBEYXRlLm5vdygpIC0gdGhpcy5zdGFydDtcbiAgfVxuICByZXN1bWUoKSB7XG4gICAgdGhpcy5zdGFydCA9IERhdGUubm93KCksIGNsZWFyVGltZW91dCh0aGlzLm5vdGlmeUl0ZW0udGltZXIpLCB0aGlzLm5vdGlmeUl0ZW0udGltZXIgPSBzZXRUaW1lb3V0KHRoaXMuY2FsbGJhY2ssIHRoaXMucmVtYWluaW5nKTtcbiAgfVxufVxuY29uc3QgbSA9IHtcbiAgcG9zaXRpb246IFtcInRvcFwiLCBcInJpZ2h0XCJdLFxuICBjc3NBbmltYXRpb246IFwidm4tZmFkZVwiLFxuICB2ZWxvY2l0eUFuaW1hdGlvbjoge1xuICAgIGVudGVyOiAodCkgPT4gKHtcbiAgICAgIGhlaWdodDogW3QuY2xpZW50SGVpZ2h0LCAwXSxcbiAgICAgIG9wYWNpdHk6IFsxLCAwXVxuICAgIH0pLFxuICAgIGxlYXZlOiB7XG4gICAgICBoZWlnaHQ6IDAsXG4gICAgICBvcGFjaXR5OiBbMCwgMV1cbiAgICB9XG4gIH1cbn0sIGogPSB5KHtcbiAgbmFtZTogXCJ2ZWxvY2l0eS1ncm91cFwiLFxuICBlbWl0czogW1wiYWZ0ZXItbGVhdmVcIiwgXCJsZWF2ZVwiLCBcImVudGVyXCJdLFxuICBtZXRob2RzOiB7XG4gICAgZW50ZXIodCwgZSkge1xuICAgICAgdGhpcy4kZW1pdChcImVudGVyXCIsIHQsIGUpO1xuICAgIH0sXG4gICAgbGVhdmUodCwgZSkge1xuICAgICAgdGhpcy4kZW1pdChcImxlYXZlXCIsIHQsIGUpO1xuICAgIH0sXG4gICAgYWZ0ZXJMZWF2ZSgpIHtcbiAgICAgIHRoaXMuJGVtaXQoXCJhZnRlci1sZWF2ZVwiKTtcbiAgICB9XG4gIH1cbn0pLCB2ID0gKHQsIGUpID0+IHtcbiAgY29uc3QgaSA9IHQuX192Y2NPcHRzIHx8IHQ7XG4gIGZvciAoY29uc3QgW3MsIG5dIG9mIGUpXG4gICAgaVtzXSA9IG47XG4gIHJldHVybiBpO1xufTtcbmZ1bmN0aW9uIEcodCwgZSwgaSwgcywgbiwgYykge1xuICByZXR1cm4gYSgpLCBnKHgsIHtcbiAgICB0YWc6IFwic3BhblwiLFxuICAgIGNzczogITEsXG4gICAgb25FbnRlcjogdC5lbnRlcixcbiAgICBvbkxlYXZlOiB0LmxlYXZlLFxuICAgIG9uQWZ0ZXJMZWF2ZTogdC5hZnRlckxlYXZlXG4gIH0sIHtcbiAgICBkZWZhdWx0OiAkKCgpID0+IFtcbiAgICAgIFQodC4kc2xvdHMsIFwiZGVmYXVsdFwiKVxuICAgIF0pLFxuICAgIF86IDNcbiAgfSwgOCwgW1wib25FbnRlclwiLCBcIm9uTGVhdmVcIiwgXCJvbkFmdGVyTGVhdmVcIl0pO1xufVxuY29uc3QgeiA9IC8qIEBfX1BVUkVfXyAqLyB2KGosIFtbXCJyZW5kZXJcIiwgR11dKSwgRiA9IHkoe1xuICBuYW1lOiBcImNzcy1ncm91cFwiLFxuICBpbmhlcml0QXR0cnM6ICExLFxuICBwcm9wczoge1xuICAgIG5hbWU6IHsgdHlwZTogU3RyaW5nLCByZXF1aXJlZDogITAgfVxuICB9XG59KTtcbmZ1bmN0aW9uIFAodCwgZSwgaSwgcywgbiwgYykge1xuICByZXR1cm4gYSgpLCBnKHgsIHtcbiAgICB0YWc6IFwic3BhblwiLFxuICAgIG5hbWU6IHQubmFtZVxuICB9LCB7XG4gICAgZGVmYXVsdDogJCgoKSA9PiBbXG4gICAgICBUKHQuJHNsb3RzLCBcImRlZmF1bHRcIilcbiAgICBdKSxcbiAgICBfOiAzXG4gIH0sIDgsIFtcIm5hbWVcIl0pO1xufVxuY29uc3QgcSA9IC8qIEBfX1BVUkVfXyAqLyB2KEYsIFtbXCJyZW5kZXJcIiwgUF1dKSwgaCA9IFwiWy0rXT9bMC05XSouP1swLTldK1wiLCBMID0gW1xuICB7XG4gICAgbmFtZTogXCJweFwiLFxuICAgIHJlZ2V4cDogbmV3IFJlZ0V4cChgXiR7aH1weCRgKVxuICB9LFxuICB7XG4gICAgbmFtZTogXCIlXCIsXG4gICAgcmVnZXhwOiBuZXcgUmVnRXhwKGBeJHtofSUkYClcbiAgfSxcbiAgLyoqXG4gICAqIEZhbGxiYWNrIG9wdGlvblxuICAgKiBJZiBubyBzdWZmaXggc3BlY2lmaWVkLCBhc3NpZ25pbmcgXCJweFwiXG4gICAqL1xuICB7XG4gICAgbmFtZTogXCJweFwiLFxuICAgIHJlZ2V4cDogbmV3IFJlZ0V4cChgXiR7aH0kYClcbiAgfVxuXSwgSiA9ICh0KSA9PiB7XG4gIGlmICh0ID09PSBcImF1dG9cIilcbiAgICByZXR1cm4ge1xuICAgICAgdHlwZTogdCxcbiAgICAgIHZhbHVlOiAwXG4gICAgfTtcbiAgZm9yIChsZXQgZSA9IDA7IGUgPCBMLmxlbmd0aDsgZSsrKSB7XG4gICAgY29uc3QgaSA9IExbZV07XG4gICAgaWYgKGkucmVnZXhwLnRlc3QodCkpXG4gICAgICByZXR1cm4ge1xuICAgICAgICB0eXBlOiBpLm5hbWUsXG4gICAgICAgIHZhbHVlOiBwYXJzZUZsb2F0KHQpXG4gICAgICB9O1xuICB9XG4gIHJldHVybiB7XG4gICAgdHlwZTogXCJcIixcbiAgICB2YWx1ZTogdFxuICB9O1xufSwgSyA9ICh0KSA9PiB7XG4gIHN3aXRjaCAodHlwZW9mIHQpIHtcbiAgICBjYXNlIFwibnVtYmVyXCI6XG4gICAgICByZXR1cm4geyB0eXBlOiBcInB4XCIsIHZhbHVlOiB0IH07XG4gICAgY2FzZSBcInN0cmluZ1wiOlxuICAgICAgcmV0dXJuIEoodCk7XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiB7IHR5cGU6IFwiXCIsIHZhbHVlOiB0IH07XG4gIH1cbn0sIGYgPSB7XG4gIElETEU6IDAsXG4gIERFU1RST1lFRDogMlxufSwgUSA9IHkoe1xuICBuYW1lOiBcIm5vdGlmaWNhdGlvbnNcIixcbiAgY29tcG9uZW50czoge1xuICAgIFZlbG9jaXR5R3JvdXA6IHosXG4gICAgQ3NzR3JvdXA6IHFcbiAgfSxcbiAgcHJvcHM6IHtcbiAgICBncm91cDoge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgZGVmYXVsdDogXCJcIlxuICAgIH0sXG4gICAgd2lkdGg6IHtcbiAgICAgIHR5cGU6IFtOdW1iZXIsIFN0cmluZ10sXG4gICAgICBkZWZhdWx0OiAzMDBcbiAgICB9LFxuICAgIHJldmVyc2U6IHtcbiAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICBkZWZhdWx0OiAhMVxuICAgIH0sXG4gICAgcG9zaXRpb246IHtcbiAgICAgIHR5cGU6IFtTdHJpbmcsIEFycmF5XSxcbiAgICAgIGRlZmF1bHQ6IG0ucG9zaXRpb25cbiAgICB9LFxuICAgIGNsYXNzZXM6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIGRlZmF1bHQ6IFwidnVlLW5vdGlmaWNhdGlvblwiXG4gICAgfSxcbiAgICBhbmltYXRpb25UeXBlOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICBkZWZhdWx0OiBcImNzc1wiXG4gICAgfSxcbiAgICBhbmltYXRpb246IHtcbiAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgIGRlZmF1bHQ6IG0udmVsb2NpdHlBbmltYXRpb25cbiAgICB9LFxuICAgIGFuaW1hdGlvbk5hbWU6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIGRlZmF1bHQ6IG0uY3NzQW5pbWF0aW9uXG4gICAgfSxcbiAgICBzcGVlZDoge1xuICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgZGVmYXVsdDogMzAwXG4gICAgfSxcbiAgICAvKiBUb2RvICovXG4gICAgY29vbGRvd246IHtcbiAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgIGRlZmF1bHQ6IDBcbiAgICB9LFxuICAgIGR1cmF0aW9uOiB7XG4gICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICBkZWZhdWx0OiAzZTNcbiAgICB9LFxuICAgIGRlbGF5OiB7XG4gICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICBkZWZhdWx0OiAwXG4gICAgfSxcbiAgICBtYXg6IHtcbiAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgIGRlZmF1bHQ6IDEgLyAwXG4gICAgfSxcbiAgICBpZ25vcmVEdXBsaWNhdGVzOiB7XG4gICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgZGVmYXVsdDogITFcbiAgICB9LFxuICAgIGNsb3NlT25DbGljazoge1xuICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgIGRlZmF1bHQ6ICEwXG4gICAgfSxcbiAgICBwYXVzZU9uSG92ZXI6IHtcbiAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICBkZWZhdWx0OiAhMVxuICAgIH1cbiAgfSxcbiAgZW1pdHM6IFtcImNsaWNrXCIsIFwiZGVzdHJveVwiLCBcInN0YXJ0XCJdLFxuICBkYXRhKCkge1xuICAgIHJldHVybiB7XG4gICAgICBsaXN0OiBbXSxcbiAgICAgIHZlbG9jaXR5OiBDLmdldChcInZlbG9jaXR5XCIpLFxuICAgICAgdGltZXJDb250cm9sOiBudWxsXG4gICAgfTtcbiAgfSxcbiAgY29tcHV0ZWQ6IHtcbiAgICBhY3R1YWxXaWR0aCgpIHtcbiAgICAgIHJldHVybiBLKHRoaXMud2lkdGgpO1xuICAgIH0sXG4gICAgaXNWQSgpIHtcbiAgICAgIHJldHVybiB0aGlzLmFuaW1hdGlvblR5cGUgPT09IFwidmVsb2NpdHlcIjtcbiAgICB9LFxuICAgIGNvbXBvbmVudE5hbWUoKSB7XG4gICAgICByZXR1cm4gdGhpcy5pc1ZBID8gXCJ2ZWxvY2l0eS1ncm91cFwiIDogXCJjc3MtZ3JvdXBcIjtcbiAgICB9LFxuICAgIHN0eWxlcygpIHtcbiAgICAgIGNvbnN0IHsgeDogdCwgeTogZSB9ID0gVyh0aGlzLnBvc2l0aW9uKSwgaSA9IHRoaXMuYWN0dWFsV2lkdGgudmFsdWUsIHMgPSB0aGlzLmFjdHVhbFdpZHRoLnR5cGUsIG4gPSB7XG4gICAgICAgIHdpZHRoOiBpICsgc1xuICAgICAgfTtcbiAgICAgIHJldHVybiBlICYmIChuW2VdID0gXCIwcHhcIiksIHQgJiYgKHQgPT09IFwiY2VudGVyXCIgPyBuLmxlZnQgPSBgY2FsYyg1MCUgLSAkeytpIC8gMn0ke3N9KWAgOiBuW3RdID0gXCIwcHhcIiksIG47XG4gICAgfSxcbiAgICBhY3RpdmUoKSB7XG4gICAgICByZXR1cm4gdGhpcy5saXN0LmZpbHRlcigodCkgPT4gdC5zdGF0ZSAhPT0gZi5ERVNUUk9ZRUQpO1xuICAgIH0sXG4gICAgYm90VG9Ub3AoKSB7XG4gICAgICByZXR1cm4gdGhpcy5zdHlsZXMuaGFzT3duUHJvcGVydHkoXCJib3R0b21cIik7XG4gICAgfVxuICB9LFxuICBtb3VudGVkKCkge1xuICAgIGQub24oXCJhZGRcIiwgdGhpcy5hZGRJdGVtKSwgZC5vbihcImNsb3NlXCIsIHRoaXMuY2xvc2VJdGVtKTtcbiAgfSxcbiAgbWV0aG9kczoge1xuICAgIGRlc3Ryb3lJZk5lY2Vzc2FyeSh0KSB7XG4gICAgICB0aGlzLiRlbWl0KFwiY2xpY2tcIiwgdCksIHRoaXMuY2xvc2VPbkNsaWNrICYmIHRoaXMuZGVzdHJveSh0KTtcbiAgICB9LFxuICAgIHBhdXNlVGltZW91dCgpIHtcbiAgICAgIHZhciB0O1xuICAgICAgdGhpcy5wYXVzZU9uSG92ZXIgJiYgKCh0ID0gdGhpcy50aW1lckNvbnRyb2wpID09IG51bGwgfHwgdC5wYXVzZSgpKTtcbiAgICB9LFxuICAgIHJlc3VtZVRpbWVvdXQoKSB7XG4gICAgICB2YXIgdDtcbiAgICAgIHRoaXMucGF1c2VPbkhvdmVyICYmICgodCA9IHRoaXMudGltZXJDb250cm9sKSA9PSBudWxsIHx8IHQucmVzdW1lKCkpO1xuICAgIH0sXG4gICAgYWRkSXRlbSh0ID0ge30pIHtcbiAgICAgIGlmICh0Lmdyb3VwIHx8ICh0Lmdyb3VwID0gXCJcIiksIHQuZGF0YSB8fCAodC5kYXRhID0ge30pLCB0aGlzLmdyb3VwICE9PSB0Lmdyb3VwKVxuICAgICAgICByZXR1cm47XG4gICAgICBpZiAodC5jbGVhbiB8fCB0LmNsZWFyKSB7XG4gICAgICAgIHRoaXMuZGVzdHJveUFsbCgpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBjb25zdCBlID0gdHlwZW9mIHQuZHVyYXRpb24gPT0gXCJudW1iZXJcIiA/IHQuZHVyYXRpb24gOiB0aGlzLmR1cmF0aW9uLCBpID0gdHlwZW9mIHQuc3BlZWQgPT0gXCJudW1iZXJcIiA/IHQuc3BlZWQgOiB0aGlzLnNwZWVkLCBzID0gdHlwZW9mIHQuaWdub3JlRHVwbGljYXRlcyA9PSBcImJvb2xlYW5cIiA/IHQuaWdub3JlRHVwbGljYXRlcyA6IHRoaXMuaWdub3JlRHVwbGljYXRlcywgeyB0aXRsZTogbiwgdGV4dDogYywgdHlwZTogbywgZGF0YTogbCwgaWQ6IEkgfSA9IHQsIHIgPSB7XG4gICAgICAgIGlkOiBJIHx8IFIoKSxcbiAgICAgICAgdGl0bGU6IG4sXG4gICAgICAgIHRleHQ6IGMsXG4gICAgICAgIHR5cGU6IG8sXG4gICAgICAgIHN0YXRlOiBmLklETEUsXG4gICAgICAgIHNwZWVkOiBpLFxuICAgICAgICBsZW5ndGg6IGUgKyAyICogaSxcbiAgICAgICAgZGF0YTogbFxuICAgICAgfTtcbiAgICAgIGUgPj0gMCAmJiAodGhpcy50aW1lckNvbnRyb2wgPSBuZXcgWSgoKSA9PiB0aGlzLmRlc3Ryb3kociksIHIubGVuZ3RoLCByKSk7XG4gICAgICBjb25zdCBPID0gdGhpcy5yZXZlcnNlID8gIXRoaXMuYm90VG9Ub3AgOiB0aGlzLmJvdFRvVG9wO1xuICAgICAgbGV0IHUgPSAtMTtcbiAgICAgIGNvbnN0IFMgPSB0aGlzLmFjdGl2ZS5zb21lKChFKSA9PiBFLnRpdGxlID09PSB0LnRpdGxlICYmIEUudGV4dCA9PT0gdC50ZXh0KTtcbiAgICAgICghcyB8fCAhUykgJiYgKE8gPyAodGhpcy5saXN0LnB1c2gociksIHRoaXMuJGVtaXQoXCJzdGFydFwiLCByKSwgdGhpcy5hY3RpdmUubGVuZ3RoID4gdGhpcy5tYXggJiYgKHUgPSAwKSkgOiAodGhpcy5saXN0LnVuc2hpZnQociksIHRoaXMuJGVtaXQoXCJzdGFydFwiLCByKSwgdGhpcy5hY3RpdmUubGVuZ3RoID4gdGhpcy5tYXggJiYgKHUgPSB0aGlzLmFjdGl2ZS5sZW5ndGggLSAxKSksIHUgIT09IC0xICYmIHRoaXMuZGVzdHJveSh0aGlzLmFjdGl2ZVt1XSkpO1xuICAgIH0sXG4gICAgY2xvc2VJdGVtKHQpIHtcbiAgICAgIHRoaXMuZGVzdHJveUJ5SWQodCk7XG4gICAgfSxcbiAgICBub3RpZnlDbGFzcyh0KSB7XG4gICAgICByZXR1cm4gW1xuICAgICAgICBcInZ1ZS1ub3RpZmljYXRpb24tdGVtcGxhdGVcIixcbiAgICAgICAgdGhpcy5jbGFzc2VzLFxuICAgICAgICB0LnR5cGUgfHwgXCJcIlxuICAgICAgXTtcbiAgICB9LFxuICAgIG5vdGlmeVdyYXBwZXJTdHlsZSh0KSB7XG4gICAgICByZXR1cm4gdGhpcy5pc1ZBID8gdm9pZCAwIDogeyB0cmFuc2l0aW9uOiBgYWxsICR7dC5zcGVlZH1tc2AgfTtcbiAgICB9LFxuICAgIGRlc3Ryb3kodCkge1xuICAgICAgY2xlYXJUaW1lb3V0KHQudGltZXIpLCB0LnN0YXRlID0gZi5ERVNUUk9ZRUQsIHRoaXMuY2xlYW4oKSwgdGhpcy4kZW1pdChcImRlc3Ryb3lcIiwgdCk7XG4gICAgfSxcbiAgICBkZXN0cm95QnlJZCh0KSB7XG4gICAgICBjb25zdCBlID0gdGhpcy5saXN0LmZpbmQoKGkpID0+IGkuaWQgPT09IHQpO1xuICAgICAgZSAmJiB0aGlzLmRlc3Ryb3koZSk7XG4gICAgfSxcbiAgICBkZXN0cm95QWxsKCkge1xuICAgICAgdGhpcy5hY3RpdmUuZm9yRWFjaCh0aGlzLmRlc3Ryb3kpO1xuICAgIH0sXG4gICAgZ2V0QW5pbWF0aW9uKHQsIGUpIHtcbiAgICAgIHZhciBzO1xuICAgICAgY29uc3QgaSA9IChzID0gdGhpcy5hbmltYXRpb24pID09IG51bGwgPyB2b2lkIDAgOiBzW3RdO1xuICAgICAgcmV0dXJuIHR5cGVvZiBpID09IFwiZnVuY3Rpb25cIiA/IGkuY2FsbCh0aGlzLCBlKSA6IGk7XG4gICAgfSxcbiAgICBlbnRlcih0LCBlKSB7XG4gICAgICBpZiAoIXRoaXMuaXNWQSlcbiAgICAgICAgcmV0dXJuO1xuICAgICAgY29uc3QgaSA9IHRoaXMuZ2V0QW5pbWF0aW9uKFwiZW50ZXJcIiwgdCk7XG4gICAgICB0aGlzLnZlbG9jaXR5KHQsIGksIHtcbiAgICAgICAgZHVyYXRpb246IHRoaXMuc3BlZWQsXG4gICAgICAgIGNvbXBsZXRlOiBlXG4gICAgICB9KTtcbiAgICB9LFxuICAgIGxlYXZlKHQsIGUpIHtcbiAgICAgIGlmICghdGhpcy5pc1ZBKVxuICAgICAgICByZXR1cm47XG4gICAgICBjb25zdCBpID0gdGhpcy5nZXRBbmltYXRpb24oXCJsZWF2ZVwiLCB0KTtcbiAgICAgIHRoaXMudmVsb2NpdHkodCwgaSwge1xuICAgICAgICBkdXJhdGlvbjogdGhpcy5zcGVlZCxcbiAgICAgICAgY29tcGxldGU6IGVcbiAgICAgIH0pO1xuICAgIH0sXG4gICAgY2xlYW4oKSB7XG4gICAgICB0aGlzLmxpc3QgPSB0aGlzLmxpc3QuZmlsdGVyKCh0KSA9PiB0LnN0YXRlICE9PSBmLkRFU1RST1lFRCk7XG4gICAgfVxuICB9XG59KTtcbmNvbnN0IFUgPSBbXCJkYXRhLWlkXCJdLCBYID0gW1wib25DbGlja1wiXSwgWiA9IFtcImlubmVySFRNTFwiXSwgdHQgPSBbXCJpbm5lckhUTUxcIl07XG5mdW5jdGlvbiBldCh0LCBlLCBpLCBzLCBuLCBjKSB7XG4gIHJldHVybiBhKCksIHAoXCJkaXZcIiwge1xuICAgIGNsYXNzOiBcInZ1ZS1ub3RpZmljYXRpb24tZ3JvdXBcIixcbiAgICBzdHlsZTogYih0LnN0eWxlcylcbiAgfSwgW1xuICAgIChhKCksIGcoayh0LmNvbXBvbmVudE5hbWUpLCB7XG4gICAgICBuYW1lOiB0LmFuaW1hdGlvbk5hbWUsXG4gICAgICBvbkVudGVyOiB0LmVudGVyLFxuICAgICAgb25MZWF2ZTogdC5sZWF2ZSxcbiAgICAgIG9uQWZ0ZXJMZWF2ZTogdC5jbGVhblxuICAgIH0sIHtcbiAgICAgIGRlZmF1bHQ6ICQoKCkgPT4gW1xuICAgICAgICAoYSghMCksIHAoXywgbnVsbCwgQih0LmFjdGl2ZSwgKG8pID0+IChhKCksIHAoXCJkaXZcIiwge1xuICAgICAgICAgIGtleTogby5pZCxcbiAgICAgICAgICBjbGFzczogXCJ2dWUtbm90aWZpY2F0aW9uLXdyYXBwZXJcIixcbiAgICAgICAgICBzdHlsZTogYih0Lm5vdGlmeVdyYXBwZXJTdHlsZShvKSksXG4gICAgICAgICAgXCJkYXRhLWlkXCI6IG8uaWQsXG4gICAgICAgICAgb25Nb3VzZWVudGVyOiBlWzBdIHx8IChlWzBdID0gKC4uLmwpID0+IHQucGF1c2VUaW1lb3V0ICYmIHQucGF1c2VUaW1lb3V0KC4uLmwpKSxcbiAgICAgICAgICBvbk1vdXNlbGVhdmU6IGVbMV0gfHwgKGVbMV0gPSAoLi4ubCkgPT4gdC5yZXN1bWVUaW1lb3V0ICYmIHQucmVzdW1lVGltZW91dCguLi5sKSlcbiAgICAgICAgfSwgW1xuICAgICAgICAgIFQodC4kc2xvdHMsIFwiYm9keVwiLCB7XG4gICAgICAgICAgICBjbGFzczogRChbdC5jbGFzc2VzLCBvLnR5cGVdKSxcbiAgICAgICAgICAgIGl0ZW06IG8sXG4gICAgICAgICAgICBjbG9zZTogKCkgPT4gdC5kZXN0cm95KG8pXG4gICAgICAgICAgfSwgKCkgPT4gW1xuICAgICAgICAgICAgTihcImRpdlwiLCB7XG4gICAgICAgICAgICAgIGNsYXNzOiBEKHQubm90aWZ5Q2xhc3MobykpLFxuICAgICAgICAgICAgICBvbkNsaWNrOiAobCkgPT4gdC5kZXN0cm95SWZOZWNlc3NhcnkobylcbiAgICAgICAgICAgIH0sIFtcbiAgICAgICAgICAgICAgby50aXRsZSA/IChhKCksIHAoXCJkaXZcIiwge1xuICAgICAgICAgICAgICAgIGtleTogMCxcbiAgICAgICAgICAgICAgICBjbGFzczogXCJub3RpZmljYXRpb24tdGl0bGVcIixcbiAgICAgICAgICAgICAgICBpbm5lckhUTUw6IG8udGl0bGVcbiAgICAgICAgICAgICAgfSwgbnVsbCwgOCwgWikpIDogSChcIlwiLCAhMCksXG4gICAgICAgICAgICAgIE4oXCJkaXZcIiwge1xuICAgICAgICAgICAgICAgIGNsYXNzOiBcIm5vdGlmaWNhdGlvbi1jb250ZW50XCIsXG4gICAgICAgICAgICAgICAgaW5uZXJIVE1MOiBvLnRleHRcbiAgICAgICAgICAgICAgfSwgbnVsbCwgOCwgdHQpXG4gICAgICAgICAgICBdLCAxMCwgWClcbiAgICAgICAgICBdKVxuICAgICAgICBdLCA0NCwgVSkpKSwgMTI4KSlcbiAgICAgIF0pLFxuICAgICAgXzogM1xuICAgIH0sIDQwLCBbXCJuYW1lXCIsIFwib25FbnRlclwiLCBcIm9uTGVhdmVcIiwgXCJvbkFmdGVyTGVhdmVcIl0pKVxuICBdLCA0KTtcbn1cbmNvbnN0IGl0ID0gLyogQF9fUFVSRV9fICovIHYoUSwgW1tcInJlbmRlclwiLCBldF1dKSwgQSA9ICh0KSA9PiB7XG4gIHR5cGVvZiB0ID09IFwic3RyaW5nXCIgJiYgKHQgPSB7IHRpdGxlOiBcIlwiLCB0ZXh0OiB0IH0pLCB0eXBlb2YgdCA9PSBcIm9iamVjdFwiICYmIGQuZW1pdChcImFkZFwiLCB0KTtcbn07XG5BLmNsb3NlID0gKHQpID0+IHtcbiAgZC5lbWl0KFwiY2xvc2VcIiwgdCk7XG59O1xuY29uc3QgcnQgPSAoKSA9PiAoeyBub3RpZnk6IEEgfSk7XG5mdW5jdGlvbiBzdCh0LCBlID0ge30pIHtcbiAgT2JqZWN0LmVudHJpZXMoZSkuZm9yRWFjaCgocykgPT4gQy5zZXQoLi4ucykpO1xuICBjb25zdCBpID0gZS5uYW1lIHx8IFwibm90aWZ5XCI7XG4gIHQuY29uZmlnLmdsb2JhbFByb3BlcnRpZXNbXCIkXCIgKyBpXSA9IEEsIHQuY29tcG9uZW50KGUuY29tcG9uZW50TmFtZSB8fCBcIk5vdGlmaWNhdGlvbnNcIiwgaXQpO1xufVxuY29uc3QgYXQgPSB7XG4gIGluc3RhbGw6IHN0XG59O1xuZXhwb3J0IHtcbiAgYXQgYXMgZGVmYXVsdCxcbiAgQSBhcyBub3RpZnksXG4gIHJ0IGFzIHVzZU5vdGlmaWNhdGlvblxufTtcbihmdW5jdGlvbigpe3ZhciBvO1widXNlIHN0cmljdFwiO3RyeXtpZih0eXBlb2YgZG9jdW1lbnQhPVwidW5kZWZpbmVkXCIpe3ZhciBlPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtlLm5vbmNlPShvPWRvY3VtZW50LmhlYWQucXVlcnlTZWxlY3RvcihcIm1ldGFbcHJvcGVydHk9Y3NwLW5vbmNlXVwiKSk9PW51bGw/dm9pZCAwOm8uY29udGVudCxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiLnZ1ZS1ub3RpZmljYXRpb24tZ3JvdXB7ZGlzcGxheTpibG9jaztwb3NpdGlvbjpmaXhlZDt6LWluZGV4OjUwMDB9LnZ1ZS1ub3RpZmljYXRpb24td3JhcHBlcntkaXNwbGF5OmJsb2NrO292ZXJmbG93OmhpZGRlbjt3aWR0aDoxMDAlO21hcmdpbjowO3BhZGRpbmc6MH0ubm90aWZpY2F0aW9uLXRpdGxle2ZvbnQtd2VpZ2h0OjYwMH0udnVlLW5vdGlmaWNhdGlvbi10ZW1wbGF0ZXtkaXNwbGF5OmJsb2NrO2JveC1zaXppbmc6Ym9yZGVyLWJveDtiYWNrZ3JvdW5kOndoaXRlO3RleHQtYWxpZ246bGVmdH0udnVlLW5vdGlmaWNhdGlvbntkaXNwbGF5OmJsb2NrO2JveC1zaXppbmc6Ym9yZGVyLWJveDt0ZXh0LWFsaWduOmxlZnQ7Zm9udC1zaXplOjEycHg7cGFkZGluZzoxMHB4O21hcmdpbjowIDVweCA1cHg7Y29sb3I6I2ZmZjtiYWNrZ3JvdW5kOiM0NEE0RkM7Ym9yZGVyLWxlZnQ6NXB4IHNvbGlkICMxODdGRTd9LnZ1ZS1ub3RpZmljYXRpb24ud2FybntiYWNrZ3JvdW5kOiNmZmI2NDg7Ym9yZGVyLWxlZnQtY29sb3I6I2Y0OGEwNn0udnVlLW5vdGlmaWNhdGlvbi5lcnJvcntiYWNrZ3JvdW5kOiNFNTRENDI7Ym9yZGVyLWxlZnQtY29sb3I6I2I4MmUyNH0udnVlLW5vdGlmaWNhdGlvbi5zdWNjZXNze2JhY2tncm91bmQ6IzY4Q0Q4Njtib3JkZXItbGVmdC1jb2xvcjojNDJhODVmfS52bi1mYWRlLWVudGVyLWFjdGl2ZSwudm4tZmFkZS1sZWF2ZS1hY3RpdmUsLnZuLWZhZGUtbW92ZXt0cmFuc2l0aW9uOmFsbCAuNXN9LnZuLWZhZGUtZW50ZXItZnJvbSwudm4tZmFkZS1sZWF2ZS10b3tvcGFjaXR5OjB9XCIpKSxkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKGUpfX1jYXRjaChpKXtjb25zb2xlLmVycm9yKFwidml0ZS1wbHVnaW4tY3NzLWluamVjdGVkLWJ5LWpzXCIsaSl9fSkoKTtcbiIsImltcG9ydCBCcm93c2VyIGZyb20gJ3dlYmV4dGVuc2lvbi1wb2x5ZmlsbCc7XG5pbXBvcnQgeyBpbmplY3RTdG9yYWdlIH0gZnJvbSAnLi4vc3RvcmFnZS9pbmplY3Qtc3RvcmFnZSc7XG5pbXBvcnQgeyBNZXNzYWdlcyB9IGZyb20gJy4uL3V0aWxzL21lc3NhZ2VzJztcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVzZVJlbW92ZUFsbERhdGEoKSB7XG4gIGNvbnN0IHN0b3JhZ2UgPSBpbmplY3RTdG9yYWdlKCk7XG4gIGF3YWl0IHN0b3JhZ2Uuc2F2ZUludGVydmFsTGlzdChbXSk7XG4gIGF3YWl0IEJyb3dzZXIucnVudGltZS5zZW5kTWVzc2FnZShNZXNzYWdlcy5DbGVhckFsbERhdGEpO1xufVxuIiwiaW1wb3J0IEJyb3dzZXIgZnJvbSAnd2ViZXh0ZW5zaW9uLXBvbHlmaWxsJztcbmltcG9ydCB7IE1lc3NhZ2VzIH0gZnJvbSAnLi4vdXRpbHMvbWVzc2FnZXMnO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXNlUmVzdG9yZURhdGEoanNvbjogc3RyaW5nKSB7XG4gIGlmIChqc29uICE9IG51bGwgJiYganNvbiAhPSB1bmRlZmluZWQgJiYganNvbiAhPSAnJykge1xuICAgIGNvbnN0IGRhdGEgPSBKU09OLnBhcnNlKGpzb24pO1xuICAgIGF3YWl0IEJyb3dzZXIucnVudGltZS5zZW5kTWVzc2FnZSh7XG4gICAgICBtZXNzYWdlOiBNZXNzYWdlcy5SZXN0b3JlLFxuICAgICAgZGF0YTogZGF0YSxcbiAgICB9KTtcbiAgfVxufVxuIiwiPHRlbXBsYXRlPlxuICA8ZGl2IGNsYXNzPVwic2V0dGluZ3MtaXRlbVwiPlxuICAgIDxsYWJlbCBjbGFzcz1cInNldHRpbmctaGVhZGVyXCI+XG4gICAgICA8aW5wdXRcbiAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcbiAgICAgICAgY2xhc3M9XCJmaWxsZWQtaW5cIlxuICAgICAgICBpZD1cInZpZXdUaW1lSW5CYWRnZVwiXG4gICAgICAgIHYtbW9kZWw9XCJ2aWV3VGltZUluQmFkZ2VcIlxuICAgICAgICBAY2hhbmdlPVwib25DaGFuZ2UoU3RvcmFnZVBhcmFtcy5WSUVXX1RJTUVfSU5fQkFER0UsICRldmVudC50YXJnZXQpXCJcbiAgICAgIC8+XG4gICAgICA8c3Bhbj57eyB0KCd2aWV3VGltZUluQmFkZ2UubWVzc2FnZScpIH19PC9zcGFuPlxuICAgICAgPHAgY2xhc3M9XCJkZXNjcmlwdGlvblwiPlxuICAgICAgICB7eyB0KCd2aWV3VGltZUluQmFkZ2UuZGVzY3JpcHRpb24nKSB9fVxuICAgICAgPC9wPlxuICAgIDwvbGFiZWw+XG4gIDwvZGl2PlxuICA8ZGl2IGNsYXNzPVwic2V0dGluZ3MtaXRlbVwiPlxuICAgIDxsYWJlbCBjbGFzcz1cInNldHRpbmctaGVhZGVyXCI+XG4gICAgICA8aW5wdXRcbiAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcbiAgICAgICAgY2xhc3M9XCJmaWxsZWQtaW5cIlxuICAgICAgICBpZD1cImJsb2NrRGVmZXJyYWxcIlxuICAgICAgICB2LW1vZGVsPVwiYWxsb3dEZWZlcnJpbmdCbG9ja1wiXG4gICAgICAgIEBjaGFuZ2U9XCJvbkNoYW5nZShTdG9yYWdlUGFyYW1zLkJMT0NLX0RFRkVSUkFMLCAkZXZlbnQudGFyZ2V0KVwiXG4gICAgICAvPlxuICAgICAgPHNwYW4+e3sgdCgnYWxsb3dEZWZlcnJpbmdCbG9jay5tZXNzYWdlJykgfX08L3NwYW4+XG4gICAgICA8cCBjbGFzcz1cImRlc2NyaXB0aW9uXCI+XG4gICAgICAgIHt7IHQoJ2FsbG93RGVmZXJyaW5nQmxvY2suZGVzY3JpcHRpb24nKSB9fVxuICAgICAgPC9wPlxuICAgIDwvbGFiZWw+XG4gIDwvZGl2PlxuICA8ZGl2IGNsYXNzPVwic2V0dGluZ3MtaXRlbVwiPlxuICAgIDxsYWJlbCBjbGFzcz1cInNldHRpbmctaGVhZGVyXCI+XG4gICAgICA8aW5wdXRcbiAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcbiAgICAgICAgY2xhc3M9XCJmaWxsZWQtaW5cIlxuICAgICAgICBpZD1cImRhcmtNb2RlXCJcbiAgICAgICAgdi1tb2RlbD1cImRhcmtNb2RlXCJcbiAgICAgICAgQGNoYW5nZT1cIm9uQ2hhbmdlKFN0b3JhZ2VQYXJhbXMuREFSS19NT0RFLCAkZXZlbnQudGFyZ2V0KVwiXG4gICAgICAvPlxuICAgICAgPHNwYW4+e3sgdCgnZGFya1RoZW1lLm1lc3NhZ2UnKSB9fTwvc3Bhbj5cbiAgICA8L2xhYmVsPlxuICA8L2Rpdj5cbiAgPGRpdiBjbGFzcz1cInNldHRpbmdzLWl0ZW1cIj5cbiAgICA8bGFiZWwgY2xhc3M9XCJzZXR0aW5nLWhlYWRlciBkLWlubGluZS1ibG9ja1wiPnt7IHQoJ2ludGVydmFsSW5hY3Rpdml0eS5tZXNzYWdlJykgfX0gPC9sYWJlbD5cbiAgICA8ZGl2IGNsYXNzPVwiZC1pbmxpbmUtYmxvY2sgbWwtMTBcIj5cbiAgICAgIDxzZWxlY3RcbiAgICAgICAgY2xhc3M9XCJvcHRpb25cIlxuICAgICAgICB2LW1vZGVsPVwiaW50ZXJ2YWxJbmFjdGl2aXR5XCJcbiAgICAgICAgQGNoYW5nZT1cIm9uQ2hhbmdlKFN0b3JhZ2VQYXJhbXMuSU5URVJWQUxfSU5BQ1RJVklUWSwgJGV2ZW50LnRhcmdldClcIlxuICAgICAgPlxuICAgICAgICA8b3B0aW9uIDp2YWx1ZT1cIkluYWN0aXZpdHlJbnRlcnZhbC5TZWNvbmRzXzMwXCI+MzAge3sgdCgnc2VjLm1lc3NhZ2UnKSB9fTwvb3B0aW9uPlxuICAgICAgICA8b3B0aW9uIDp2YWx1ZT1cIkluYWN0aXZpdHlJbnRlcnZhbC5TZWNvbmRzXzQ1XCI+NDUge3sgdCgnc2VjLm1lc3NhZ2UnKSB9fTwvb3B0aW9uPlxuICAgICAgICA8b3B0aW9uIDp2YWx1ZT1cIkluYWN0aXZpdHlJbnRlcnZhbC5NaW5fMVwiPjEge3sgdCgnbWluLm1lc3NhZ2UnKSB9fTwvb3B0aW9uPlxuICAgICAgICA8b3B0aW9uIDp2YWx1ZT1cIkluYWN0aXZpdHlJbnRlcnZhbC5NaW5fMlwiPjIge3sgdCgnMm1pbi5tZXNzYWdlJykgfX08L29wdGlvbj5cbiAgICAgICAgPG9wdGlvbiA6dmFsdWU9XCJJbmFjdGl2aXR5SW50ZXJ2YWwuTWluXzVcIj41IHt7IHQoJ21pbnMubWVzc2FnZScpIH19PC9vcHRpb24+XG4gICAgICAgIDxvcHRpb24gOnZhbHVlPVwiSW5hY3Rpdml0eUludGVydmFsLk1pbl8xMFwiPjEwIHt7IHQoJ21pbnMubWVzc2FnZScpIH19PC9vcHRpb24+XG4gICAgICAgIDxvcHRpb24gOnZhbHVlPVwiSW5hY3Rpdml0eUludGVydmFsLk1pbl8yMFwiPjIwIHt7IHQoJ21pbnMubWVzc2FnZScpIH19PC9vcHRpb24+XG4gICAgICAgIDxvcHRpb24gOnZhbHVlPVwiSW5hY3Rpdml0eUludGVydmFsLk1pbl8zMFwiPjMwIHt7IHQoJ21pbnMubWVzc2FnZScpIH19PC9vcHRpb24+XG4gICAgICA8L3NlbGVjdD5cbiAgICA8L2Rpdj5cbiAgICA8cCBjbGFzcz1cImRlc2NyaXB0aW9uXCI+e3sgdCgnaW50ZXJ2YWxJbmFjdGl2aXR5LmRlc2NyaXB0aW9uJykgfX08L3A+XG4gIDwvZGl2PlxuICA8ZGl2IGNsYXNzPVwic2V0dGluZ3MtaXRlbVwiPlxuICAgIDxsYWJlbCBjbGFzcz1cInNldHRpbmctaGVhZGVyIGQtaW5saW5lLWJsb2NrXCI+e3sgdCgnZXhwb3J0VG9Dc3ZTZXR0aW5nLm1lc3NhZ2UnKSB9fTwvbGFiZWw+XG4gICAgPHAgY2xhc3M9XCJkZXNjcmlwdGlvblwiPnt7IHQoJ2V4cG9ydFRvQ3N2U2V0dGluZy5kZXNjcmlwdGlvbicpIH19PC9wPlxuICAgIDxkaXYgY2xhc3M9XCJleHBvcnQtYmxvY2tcIj5cbiAgICAgIDxWdWVEYXRlUGlja2VyXG4gICAgICAgIHJhbmdlXG4gICAgICAgIDplbmFibGUtdGltZS1waWNrZXI9XCJmYWxzZVwiXG4gICAgICAgIGNsYXNzPVwiZGF0ZS1waWNrZXJcIlxuICAgICAgICB2LW1vZGVsPVwic2VsZWN0ZWREYXRlXCJcbiAgICAgICAgOnByZXNldC1yYW5nZXM9XCJwcmVzZXRSYW5nZXNcIlxuICAgICAgICBAdXBkYXRlOm1vZGVsLXZhbHVlPVwiaGFuZGxlRGF0ZVwiXG4gICAgICA+XG4gICAgICAgIDx0ZW1wbGF0ZSAjeWVhcmx5PVwieyBsYWJlbCwgcmFuZ2UsIHByZXNldERhdGVSYW5nZSB9XCI+XG4gICAgICAgICAgPHNwYW4gQGNsaWNrPVwicHJlc2V0RGF0ZVJhbmdlKHJhbmdlKVwiPnt7IGxhYmVsIH19PC9zcGFuPlxuICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgPC9WdWVEYXRlUGlja2VyPlxuICAgICAgPGlucHV0IHR5cGU9XCJidXR0b25cIiA6dmFsdWU9XCJ0KCdleHBvcnRUb0Nzdi5tZXNzYWdlJylcIiBAY2xpY2s9XCJleHBvcnRUb0NzdigpXCIgLz5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG4gIDxkaXYgY2xhc3M9XCJzZXR0aW5ncy1pdGVtXCI+XG4gICAgPGxhYmVsIGNsYXNzPVwic2V0dGluZy1oZWFkZXIgZC1pbmxpbmUtYmxvY2tcIj57eyB0KCdyZW1vdmVBbGxEYXRhLm1lc3NhZ2UnKSB9fTwvbGFiZWw+XG4gICAgPHAgY2xhc3M9XCJkZXNjcmlwdGlvblwiPnt7IHQoJ3JlbW92ZUFsbERhdGEuZGVzY3JpcHRpb24nKSB9fTwvcD5cbiAgICA8aW5wdXQgdHlwZT1cImJ1dHRvblwiIDp2YWx1ZT1cInQoJ3JlbW92ZS5tZXNzYWdlJylcIiBAY2xpY2s9XCJyZW1vdmVBbGwoKVwiIC8+XG4gIDwvZGl2PlxuICA8ZGl2IGNsYXNzPVwic2V0dGluZ3MtaXRlbVwiPlxuICAgIDxsYWJlbCBjbGFzcz1cInNldHRpbmctaGVhZGVyIGQtaW5saW5lLWJsb2NrXCI+e3sgdCgnYmFja3VwQW5kUmVzdG9yZS5tZXNzYWdlJykgfX08L2xhYmVsPlxuICAgIDxwIGNsYXNzPVwiZGVzY3JpcHRpb25cIj57eyB0KCdiYWNrdXBBbmRSZXN0b3JlLmRlc2NyaXB0aW9uJykgfX08L3A+XG4gICAgPGlucHV0IHR5cGU9XCJidXR0b25cIiA6dmFsdWU9XCJ0KCdiYWNrdXAubWVzc2FnZScpXCIgQGNsaWNrPVwiYmFja3VwKClcIiAvPlxuICAgIDxpbnB1dFxuICAgICAgdHlwZT1cImZpbGVcIlxuICAgICAgcmVmPVwicmVzdG9yZUZpbGVcIlxuICAgICAgc3R5bGU9XCJkaXNwbGF5OiBub25lXCJcbiAgICAgIEBjaGFuZ2U9XCJyZXN0b3JlRmlsZVVwbG9hZCgpXCJcbiAgICAgIGFjY2VwdD1cImFwcGxpY2F0aW9uL2pzb25cIlxuICAgIC8+XG4gICAgPGlucHV0IHR5cGU9XCJidXR0b25cIiBjbGFzcz1cIm1sLTEwXCIgOnZhbHVlPVwidCgncmVzdG9yZS5tZXNzYWdlJylcIiBAY2xpY2s9XCJyZXN0b3JlKClcIiAvPlxuICA8L2Rpdj5cbiAgPGRpdiBjbGFzcz1cInNldHRpbmdzLWl0ZW1cIj5cbiAgICA8bGFiZWwgY2xhc3M9XCJzZXR0aW5nLWhlYWRlclwiPlxuICAgICAgPGlucHV0XG4gICAgICAgIHR5cGU9XCJjaGVja2JveFwiXG4gICAgICAgIGNsYXNzPVwiZmlsbGVkLWluXCJcbiAgICAgICAgaWQ9XCJzaG93Q2hhbmdlbG9nXCJcbiAgICAgICAgdi1tb2RlbD1cInNob3dDaGFuZ2Vsb2dcIlxuICAgICAgICBAY2hhbmdlPVwib25DaGFuZ2UoU3RvcmFnZVBhcmFtcy5TSE9XX0NIQU5HRUxPRywgJGV2ZW50LnRhcmdldClcIlxuICAgICAgLz5cbiAgICAgIDxzcGFuPnt7IHQoJ3Nob3dDaGFuZ2Vsb2cubWVzc2FnZScpIH19PC9zcGFuPlxuICAgICAgPHAgY2xhc3M9XCJkZXNjcmlwdGlvblwiPlxuICAgICAgICB7eyB0KCdzaG93Q2hhbmdlbG9nLmRlc2NyaXB0aW9uJykgfX1cbiAgICAgIDwvcD5cbiAgICA8L2xhYmVsPlxuICA8L2Rpdj5cbiAgPGRpdiBpZD1cInJlbW92ZUFsbENvbmZpcm1Nb2RhbFwiIGNsYXNzPVwibW9kYWxcIiB2LWlmPVwibmVlZFRvQ29uZmlybURlbGV0ZUFsbERhdGFcIj5cbiAgICA8ZGl2IGNsYXNzPVwibW9kYWwtY29udGVudFwiPlxuICAgICAgPHAgY2xhc3M9XCJ0ZXh0LWNlbnRlclwiPnt7IHQoJ3JlbW92ZUFsbERhdGFDb25maXJtLm1lc3NhZ2UnKSB9fTwvcD5cbiAgICAgIDxkaXYgY2xhc3M9XCJ0ZXh0LWNlbnRlclwiPlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICBjbGFzcz1cImFsZXJ0XCJcbiAgICAgICAgICA6dmFsdWU9XCJ0KCdyZW1vdmUubWVzc2FnZScpXCJcbiAgICAgICAgICBAY2xpY2s9XCJyZW1vdmVBbGxDb25maXJtKClcIlxuICAgICAgICAvPlxuICAgICAgICA8aW5wdXQgdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiaW5mbyBtbC0xMFwiIDp2YWx1ZT1cInQoJ2NhbmNlbC5tZXNzYWdlJylcIiBAY2xpY2s9XCJjYW5jZWwoKVwiIC8+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0IGxhbmc9XCJ0c1wiPlxuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiAnR2VuZXJhbFNldHRpbmdzJyxcbn07XG48L3NjcmlwdD5cblxuPHNjcmlwdCBsYW5nPVwidHNcIiBzZXR1cD5cbmltcG9ydCB7IG9uTW91bnRlZCwgcmVmIH0gZnJvbSAndnVlJztcbmltcG9ydCB7IHVzZUkxOG4gfSBmcm9tICd2dWUtaTE4bic7XG5pbXBvcnQgeyBpbmplY3RTdG9yYWdlIH0gZnJvbSAnLi4vc3RvcmFnZS9pbmplY3Qtc3RvcmFnZSc7XG5pbXBvcnQgeyB1c2VOb3RpZmljYXRpb24gfSBmcm9tICdAa3l2Zy92dWUzLW5vdGlmaWNhdGlvbic7XG5pbXBvcnQge1xuICBCTE9DS19ERUZFUlJBTF9ERUZBVUxULFxuICBEQVJLX01PREVfREVGQVVMVCxcbiAgSU5URVJWQUxfSU5BQ1RJVklUWV9ERUZBVUxULFxuICBTdG9yYWdlUGFyYW1zLFxuICBWSUVXX1RJTUVfSU5fQkFER0VfREVGQVVMVCxcbiAgSW5hY3Rpdml0eUludGVydmFsLFxuICBTSE9XX0NIQU5HRUxPR19ERUZBVUxULFxufSBmcm9tICcuLi9zdG9yYWdlL3N0b3JhZ2UtcGFyYW1zJztcbmltcG9ydCB7IHJhbmdlcywgVGhpc1dlZWtSYW5nZSwgdG9kYXlMb2NhbERhdGUgfSBmcm9tICcuLi91dGlscy9kYXRlJztcbmltcG9ydCB7IHVzZUltcG9ydFRvQ3N2IH0gZnJvbSAnLi4vZnVuY3Rpb25zL3VzZUltcG9ydFRvQ3N2JztcbmltcG9ydCB7IEZpbGVUeXBlLCB1c2VGaWxlIH0gZnJvbSAnLi4vZnVuY3Rpb25zL3VzZUZpbGUnO1xuaW1wb3J0IHsgdXNlUmVtb3ZlQWxsRGF0YSB9IGZyb20gJy4uL2Z1bmN0aW9ucy91c2VSZW1vdmVBbGxEYXRhJztcbmltcG9ydCB7IGluamVjdFRhYnNSZXBvc2l0b3J5IH0gZnJvbSAnLi4vcmVwb3NpdG9yeS9pbmplY3QtdGFicy1yZXBvc2l0b3J5JztcbmltcG9ydCB7IHVzZVJlc3RvcmVEYXRhIH0gZnJvbSAnLi4vZnVuY3Rpb25zL3VzZVJlc3RvcmVEYXRhJztcbmltcG9ydCB7IGFwcGx5RGFya01vZGUgfSBmcm9tICcuLi91dGlscy9kYXJrLW1vZGUnO1xuXG5jb25zdCB7IHQgfSA9IHVzZUkxOG4oKTtcblxuY29uc3Qgc2V0dGluZ3NTdG9yYWdlID0gaW5qZWN0U3RvcmFnZSgpO1xuY29uc3Qgbm90aWZpY2F0aW9uID0gdXNlTm90aWZpY2F0aW9uKCk7XG5cbmNvbnN0IHZpZXdUaW1lSW5CYWRnZSA9IHJlZjxib29sZWFuPigpO1xuY29uc3QgaW50ZXJ2YWxJbmFjdGl2aXR5ID0gcmVmPEluYWN0aXZpdHlJbnRlcnZhbD4oKTtcbmNvbnN0IGFsbG93RGVmZXJyaW5nQmxvY2sgPSByZWY8Ym9vbGVhbj4oKTtcbmNvbnN0IGRhcmtNb2RlID0gcmVmPGJvb2xlYW4+KCk7XG5jb25zdCBzZWxlY3RlZERhdGUgPSByZWY8RGF0ZVtdPigpO1xuXG5jb25zdCBwcmVzZXRSYW5nZXMgPSByYW5nZXMoKTtcblxuY29uc3QgbmVlZFRvQ29uZmlybURlbGV0ZUFsbERhdGEgPSByZWY8Ym9vbGVhbj4oKTtcbmNvbnN0IHNob3dDaGFuZ2Vsb2cgPSByZWY8Ym9vbGVhbj4oKTtcblxuY29uc3QgcmVzdG9yZUZpbGUgPSByZWY8YW55PigpO1xuXG5vbk1vdW50ZWQoYXN5bmMgKCkgPT4ge1xuICB2aWV3VGltZUluQmFkZ2UudmFsdWUgPSBhd2FpdCBzZXR0aW5nc1N0b3JhZ2UuZ2V0VmFsdWUoXG4gICAgU3RvcmFnZVBhcmFtcy5WSUVXX1RJTUVfSU5fQkFER0UsXG4gICAgVklFV19USU1FX0lOX0JBREdFX0RFRkFVTFQsXG4gICk7XG4gIGludGVydmFsSW5hY3Rpdml0eS52YWx1ZSA9IGF3YWl0IHNldHRpbmdzU3RvcmFnZS5nZXRWYWx1ZShcbiAgICBTdG9yYWdlUGFyYW1zLklOVEVSVkFMX0lOQUNUSVZJVFksXG4gICAgSU5URVJWQUxfSU5BQ1RJVklUWV9ERUZBVUxULFxuICApO1xuICBkYXJrTW9kZS52YWx1ZSA9IGF3YWl0IHNldHRpbmdzU3RvcmFnZS5nZXRWYWx1ZShTdG9yYWdlUGFyYW1zLkRBUktfTU9ERSwgREFSS19NT0RFX0RFRkFVTFQpO1xuICBhbGxvd0RlZmVycmluZ0Jsb2NrLnZhbHVlID0gYXdhaXQgc2V0dGluZ3NTdG9yYWdlLmdldFZhbHVlKFxuICAgIFN0b3JhZ2VQYXJhbXMuQkxPQ0tfREVGRVJSQUwsXG4gICAgQkxPQ0tfREVGRVJSQUxfREVGQVVMVCxcbiAgKTtcbiAgc2VsZWN0ZWREYXRlLnZhbHVlID0gVGhpc1dlZWtSYW5nZTtcbiAgc2hvd0NoYW5nZWxvZy52YWx1ZSA9IGF3YWl0IHNldHRpbmdzU3RvcmFnZS5nZXRWYWx1ZShcbiAgICBTdG9yYWdlUGFyYW1zLlNIT1dfQ0hBTkdFTE9HLFxuICAgIFNIT1dfQ0hBTkdFTE9HX0RFRkFVTFQsXG4gICk7XG59KTtcblxuYXN5bmMgZnVuY3Rpb24gb25DaGFuZ2Uoc3RvcmFnZVBhcmFtOiBTdG9yYWdlUGFyYW1zLCB0YXJnZXQ6IGFueSkge1xuICBpZiAodGFyZ2V0ICE9IG51bGwpXG4gICAgYXdhaXQgc2F2ZShcbiAgICAgIHN0b3JhZ2VQYXJhbSxcbiAgICAgIHN0b3JhZ2VQYXJhbSA9PSBTdG9yYWdlUGFyYW1zLklOVEVSVkFMX0lOQUNUSVZJVFkgPyBOdW1iZXIodGFyZ2V0LnZhbHVlKSA6IHRhcmdldC5jaGVja2VkLFxuICAgICk7XG5cbiAgaWYgKHN0b3JhZ2VQYXJhbSA9PSBTdG9yYWdlUGFyYW1zLkRBUktfTU9ERSkgYXBwbHlEYXJrTW9kZSh0YXJnZXQuY2hlY2tlZCk7XG59XG5cbmFzeW5jIGZ1bmN0aW9uIHNhdmUoc3RvcmFnZVBhcmFtOiBTdG9yYWdlUGFyYW1zLCB2YWx1ZTogYW55KSB7XG4gIGlmICh2YWx1ZSAhPSB1bmRlZmluZWQpIGF3YWl0IHNldHRpbmdzU3RvcmFnZS5zYXZlVmFsdWUoc3RvcmFnZVBhcmFtLCB2YWx1ZSk7XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGhhbmRsZURhdGUobW9kZWxEYXRhOiBEYXRlW10pIHtcbiAgc2VsZWN0ZWREYXRlLnZhbHVlID0gbW9kZWxEYXRhO1xufVxuXG5hc3luYyBmdW5jdGlvbiBleHBvcnRUb0NzdigpIHtcbiAgY29uc3QgZGF0ZUZyb20gPSBzZWxlY3RlZERhdGUudmFsdWU/LlswXSBhcyBEYXRlO1xuICBjb25zdCBkYXRlVG8gPSBzZWxlY3RlZERhdGUudmFsdWU/LlsxXSBhcyBEYXRlO1xuICBpZiAoZGF0ZUZyb20gPT0gdW5kZWZpbmVkIHx8IGRhdGVUbyA9PSB1bmRlZmluZWQpIHtcbiAgICBub3RpZmljYXRpb24ubm90aWZ5KHtcbiAgICAgIHRpdGxlOiAnTm8gdGltZSBwZXJpb2Qgc2VsZWN0ZWQnLFxuICAgICAgdHlwZTogJ3dhcm4nLFxuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIGNvbnN0IGNzdiA9IGF3YWl0IHVzZUltcG9ydFRvQ3N2KGRhdGVGcm9tLCBkYXRlVG8pO1xuICAgIHVzZUZpbGUoXG4gICAgICBjc3YsXG4gICAgICBGaWxlVHlwZS5DU1YsXG4gICAgICBgd2Vic2l0ZXNfJHtkYXRlRnJvbS50b0xvY2FsZURhdGVTdHJpbmcoKX0tJHtkYXRlVG8udG9Mb2NhbGVEYXRlU3RyaW5nKCl9LmNzdmAsXG4gICAgKTtcbiAgfVxufVxuXG5hc3luYyBmdW5jdGlvbiByZW1vdmVBbGwoKSB7XG4gIG5lZWRUb0NvbmZpcm1EZWxldGVBbGxEYXRhLnZhbHVlID0gdHJ1ZTtcbn1cblxuYXN5bmMgZnVuY3Rpb24gcmVtb3ZlQWxsQ29uZmlybSgpIHtcbiAgYXdhaXQgdXNlUmVtb3ZlQWxsRGF0YSgpO1xuICBuZWVkVG9Db25maXJtRGVsZXRlQWxsRGF0YS52YWx1ZSA9IGZhbHNlO1xufVxuXG5mdW5jdGlvbiBjYW5jZWwoKSB7XG4gIG5lZWRUb0NvbmZpcm1EZWxldGVBbGxEYXRhLnZhbHVlID0gZmFsc2U7XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGJhY2t1cCgpIHtcbiAgY29uc3QgcmVwbyA9IGF3YWl0IGluamVjdFRhYnNSZXBvc2l0b3J5KCk7XG4gIGNvbnN0IHRhYnMgPSByZXBvLmdldFRhYnMoKTtcbiAgY29uc3QganNvbiA9IEpTT04uc3RyaW5naWZ5KHRhYnMpO1xuICB1c2VGaWxlKGpzb24sIEZpbGVUeXBlLkpTT04sIGBiYWNrdXAtJHt0b2RheUxvY2FsRGF0ZSgpfS5qc29uYCk7XG59XG5cbmZ1bmN0aW9uIHJlc3RvcmUoKSB7XG4gIHJlc3RvcmVGaWxlLnZhbHVlLmNsaWNrKCk7XG59XG5cbmZ1bmN0aW9uIHJlc3RvcmVGaWxlVXBsb2FkKCkge1xuICB0cnkge1xuICAgIGNvbnN0IGZpbGUgPSByZXN0b3JlRmlsZS52YWx1ZS5maWxlc1swXTtcbiAgICBpZiAoZmlsZSAhPSBudWxsICYmIGZpbGUudHlwZSA9PT0gRmlsZVR5cGUuSlNPTikge1xuICAgICAgdmFyIHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XG4gICAgICByZWFkZXIucmVhZEFzVGV4dChmaWxlLCAnVVRGLTgnKTtcbiAgICAgIHJlYWRlci5vbmxvYWQgPSBhc3luYyByZWFkZXJFdmVudCA9PiB7XG4gICAgICAgIGlmIChyZWFkZXJFdmVudCAhPSBudWxsKSB7XG4gICAgICAgICAgbGV0IGNvbnRlbnQgPSByZWFkZXJFdmVudC50YXJnZXQ/LnJlc3VsdDtcbiAgICAgICAgICBpZiAoY29udGVudCAhPSBudWxsKSB7XG4gICAgICAgICAgICBhd2FpdCB1c2VSZXN0b3JlRGF0YShjb250ZW50IGFzIHN0cmluZyk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9O1xuICAgIH0gZWxzZSB7XG4gICAgICBub3RpZmljYXRpb24ubm90aWZ5KHtcbiAgICAgICAgdGl0bGU6ICdXcm9uZyByZXN0b3JlIGZpbGUgZm9ybWF0JyxcbiAgICAgICAgdHlwZTogJ3dhcm4nLFxuICAgICAgfSk7XG4gICAgfVxuICB9IGNhdGNoIHtcbiAgICBub3RpZmljYXRpb24ubm90aWZ5KHtcbiAgICAgIHRpdGxlOiAnV3JvbmcgcmVzdG9yZSBmaWxlIGZvcm1hdCcsXG4gICAgICB0eXBlOiAnd2FybicsXG4gICAgfSk7XG4gIH1cbn1cbjwvc2NyaXB0PlxuXG48c3R5bGUgc2NvcGVkPlxuLmV4cG9ydC1ibG9jayB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3RhcnQ7XG59XG5cbi5leHBvcnQtYmxvY2sgLmRhdGUtcGlja2VyIHtcbiAgd2lkdGg6IDI1MHB4O1xuICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG59XG48L3N0eWxlPlxuIiwiZXhwb3J0IGRlZmF1bHQgXCJfX1ZJVEVfQVNTRVRfXzIzNDU4YmE0X19cIiIsIjx0ZW1wbGF0ZT5cbiAgPGRpdiBjbGFzcz1cIm1vZGFsXCIgdi1pZj1cInNob3dQcm9tb1wiPlxuICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1jb250ZW50IHByb21vXCI+XG4gICAgICA8cCBjbGFzcz1cInRpdGxlXCI+e3sgdCgnY2xlYW5Zb3V0dWJlX3Byb21vLm1lc3NhZ2UnKSB9fTwvcD5cbiAgICAgIDxkaXYgY2xhc3M9XCJpbWctYmxvY2tcIj5cbiAgICAgICAgPGltZyBzcmM9XCIuLi9hc3NldHMvY2xlYXIteW91dHViZS1wcm9tby5wbmdcIiAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8cCBjbGFzcz1cInRleHRcIj5cbiAgICAgICAge3sgdCgnY2xlYW5Zb3V0dWJlX2Rlc2NyaXB0aW9uLm1lc3NhZ2UnKSB9fSB7eyB0KCdjbGVhbllvdXR1YmVfZGVzY3JpcHRpb24yLm1lc3NhZ2UnKSB9fVxuICAgICAgPC9wPlxuXG4gICAgICA8cCBjbGFzcz1cInRleHQgZmVhdHVyZXNcIj57eyB0KCdjbGVhbllvdXR1YmVfZmVhdHVyZXMubWVzc2FnZScpIH19PC9wPlxuICAgICAgPHVsPlxuICAgICAgICA8bGk+4pyFIHt7IHQoJ2NsZWFuWW91dHViZV9mZWF0dXJlczEubWVzc2FnZScpIH19PC9saT5cbiAgICAgICAgPGxpPuKchSB7eyB0KCdjbGVhbllvdXR1YmVfZmVhdHVyZXMyLm1lc3NhZ2UnKSB9fTwvbGk+XG4gICAgICAgIDxsaT7inIUge3sgdCgnY2xlYW5Zb3V0dWJlX2ZlYXR1cmVzMy5tZXNzYWdlJykgfX08L2xpPlxuICAgICAgICA8bGk+4pyFIHt7IHQoJ2NsZWFuWW91dHViZV9mZWF0dXJlczQubWVzc2FnZScpIH19PC9saT5cbiAgICAgIDwvdWw+XG4gICAgICA8ZGl2IGNsYXNzPVwidGV4dC1jZW50ZXJcIj5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJidXR0b25cIiA6dmFsdWU9XCJ0KCd0cnkubWVzc2FnZScpXCIgQGNsaWNrPVwib3BlblVybCgpXCIgLz5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImluZm8gbWwtMTBcIiA6dmFsdWU9XCJ0KCdjbG9zZS5tZXNzYWdlJylcIiBAY2xpY2s9XCJjbG9zZSgpXCIgLz5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQgbGFuZz1cInRzXCIgc2V0dXA+XG5pbXBvcnQgeyB1c2VJMThuIH0gZnJvbSAndnVlLWkxOG4nO1xuaW1wb3J0IHsgb25Nb3VudGVkLCByZWYgfSBmcm9tICd2dWUnO1xuaW1wb3J0IHsgaW5qZWN0U3RvcmFnZSB9IGZyb20gJy4uL3N0b3JhZ2UvaW5qZWN0LXN0b3JhZ2UnO1xuaW1wb3J0IHsgU3RvcmFnZVBhcmFtcyB9IGZyb20gJy4uL3N0b3JhZ2Uvc3RvcmFnZS1wYXJhbXMnO1xuaW1wb3J0IHsgYWRkRGF5cywgc3RhcnRPZlRvZGF5IH0gZnJvbSAnZGF0ZS1mbnMnO1xuaW1wb3J0IHsgYWRkSG91cnMgfSBmcm9tICdkYXRlLWZucy9lc20nO1xuaW1wb3J0IHsgQ0hST01FX1NUT1JFX0NMRUFSX1lPVVRVQkVfVVJMIH0gZnJvbSAnLi4vdXRpbHMvY2hyb21lLXVybCc7XG5cbmNvbnN0IHsgdCB9ID0gdXNlSTE4bigpO1xuY29uc3Qgc2V0dGluZ3NTdG9yYWdlID0gaW5qZWN0U3RvcmFnZSgpO1xuXG5jb25zdCBzaG93UHJvbW8gPSByZWY8Ym9vbGVhbj4oKTtcblxuY29uc3QgUFJPTVBUX0FUX1RJTUVfT0ZfREFZID0gMTI7XG5jb25zdCBBRERfREFZU19JTklUSUFMID0gMjtcbmNvbnN0IEFERF9EQVlTX0NPVU5UID0gNTtcblxub25Nb3VudGVkKGFzeW5jICgpID0+IHtcbiAgY29uc3QgcHJvbW9EYXRlID0gYXdhaXQgc2V0dGluZ3NTdG9yYWdlLmdldFZhbHVlKFN0b3JhZ2VQYXJhbXMuUFJPTU9fQ0xFQVJfWU9VVFVCRV9EQVRFKTtcblxuICBpZiAocHJvbW9EYXRlID09IHVuZGVmaW5lZCkge1xuICAgIGxldCBuZXh0VGltZSA9IGF3YWl0IHNldHRpbmdzU3RvcmFnZS5nZXRWYWx1ZShTdG9yYWdlUGFyYW1zLlBST01PX0NMRUFSX1lPVVRVQkVfUFJPTVBUX0FUKTtcbiAgICBpZiAobmV4dFRpbWUgPT0gdW5kZWZpbmVkKSB7XG4gICAgICBhd2FpdCBzZXR0aW5nc1N0b3JhZ2Uuc2F2ZVZhbHVlKFxuICAgICAgICBTdG9yYWdlUGFyYW1zLlBST01PX0NMRUFSX1lPVVRVQkVfUFJPTVBUX0FULFxuICAgICAgICBhZGREYXlzKGFkZEhvdXJzKHN0YXJ0T2ZUb2RheSgpLCBQUk9NUFRfQVRfVElNRV9PRl9EQVkpLCBBRERfREFZU19JTklUSUFMKS50b1N0cmluZygpLFxuICAgICAgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbmV4dFRpbWUgPSBuZXcgRGF0ZShuZXh0VGltZSk7XG4gICAgICBpZiAobmV4dFRpbWUgPCBuZXcgRGF0ZSgpKSBzaG93UHJvbW8udmFsdWUgPSB0cnVlO1xuICAgIH1cbiAgfVxufSk7XG5cbmFzeW5jIGZ1bmN0aW9uIGNsb3NlKCkge1xuICBzaG93UHJvbW8udmFsdWUgPSBmYWxzZTtcbiAgYXdhaXQgc2V0dGluZ3NTdG9yYWdlLnNhdmVWYWx1ZShcbiAgICBTdG9yYWdlUGFyYW1zLlBST01PX0NMRUFSX1lPVVRVQkVfUFJPTVBUX0FULFxuICAgIGFkZERheXMoYWRkSG91cnMoc3RhcnRPZlRvZGF5KCksIFBST01QVF9BVF9USU1FX09GX0RBWSksIEFERF9EQVlTX0NPVU5UKS50b1N0cmluZygpLFxuICApO1xufVxuXG5hc3luYyBmdW5jdGlvbiBvcGVuVXJsKCkge1xuICB3aW5kb3cub3BlbihDSFJPTUVfU1RPUkVfQ0xFQVJfWU9VVFVCRV9VUkwsICdfYmxhbmsnKTtcbiAgYXdhaXQgc2V0dGluZ3NTdG9yYWdlLnNhdmVWYWx1ZShTdG9yYWdlUGFyYW1zLlBST01PX0NMRUFSX1lPVVRVQkVfREFURSwgbmV3IERhdGUoKS50b1N0cmluZygpKTtcbn1cbjwvc2NyaXB0PlxuXG48c3R5bGUgc2NvcGVkPlxuLnRpdGxlIHtcbiAgZm9udC1zaXplOiAyMnB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbjogMDtcbn1cbnVsLFxuLnRleHQge1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBmb250LXNpemU6IDE0cHg7XG59XG4udGV4dCAuZmVhdHVyZXMge1xuICBmb250LXdlaWdodDogNjAwO1xufVxuLmltZy1ibG9jayB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbmltZyB7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xufVxuPC9zdHlsZT5cbiIsImV4cG9ydCBkZWZhdWx0IFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFCQUFBQUFRQ0FZQUFBQWY4LzloQUFBQUJITkNTVlFJQ0FnSWZBaGtpQUFBQUFsd1NGbHpBQUFBaWdBQUFJb0JsQ0pSMndBQUFCbDBSVmgwVTI5bWRIZGhjbVVBZDNkM0xtbHVhM05qWVhCbExtOXlaNXZ1UEJvQUFBRkJTVVJCVkRpTmpaR3hTMEpSRkllL2M2OE4yZGhnV0VGUk9qaTVsSVFKYWhoQjlPZTZhUGdraUFKM2wwb1NzNjJoVUpmMzNqMHRLdko2enp6ajRYemY1ZjUrTXFtZjN5UHNpdG02M1drL2ZyTEJUQnZsckRxL2lmSmxFUGFBb2pyZm16YksyUTFoRHlnQ0dXTkN1UkhoRmNpcjg3dXorc1YrRWp5NUttWFUrVzBnRHd5dE0zY0NNS3VXRGpTbG5pcW53SXRSVzB0M25zWlJHTFFERklDaERVMTF1L3Y4TG91RGRaSWtHRUJXWDRtVE9IRkJFdnhIRUpVSURCU0M1WjhqY0t4Z1JmS2d5dkY4OVdGRFU0bkNBS2s0Z2JQNEtNRnlvUVJxeEkrN05kSEZTbUE1WUN6SUVPSElTZWpGVld3UzRFVmdsMkpkUmVBTnlNVkpaQTI4REd4MmZYYW9vWGdLSjBRcWx2L2d4U1JKWkJONG5jU0F0b0NDd3NCWWphMXFNZWxXYnlSV2F3cURlU1pOQTN3RGZXdTFtbTcxUmtud3FzUmFyUUo5NE9jWGdyUGplN1E5TW9RQUFBQUFTVVZPUks1Q1lJST1cIiIsImV4cG9ydCBmdW5jdGlvbiBnZXRGYXZpY29uKHVybDogc3RyaW5nKSB7XG4gIHJldHVybiBgaHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS9zMi9mYXZpY29ucz9kb21haW49JHt1cmx9JnN6PTY0YDtcbn1cbiIsIjx0ZW1wbGF0ZT5cbiAgPGRpdj5cbiAgICA8cCBjbGFzcz1cInRpdGxlIG10LTBcIj57eyB0KCd3aGl0ZUxpc3QubWVzc2FnZScpIH19PC9wPlxuICAgIDx1bCByZWFkb25seSBjbGFzcz1cInVybC1saXN0XCI+XG4gICAgICA8bGkgdi1mb3I9XCIodXJsLCBpKSBvZiB3aGl0ZUxpc3RcIiA6a2V5PVwiaVwiPlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxpbWcgc3JjPVwiLi4vYXNzZXRzL2ljb25zL2RlbGV0ZS5wbmdcIiBoZWlnaHQ9XCIxNlwiIEBjbGljaz1cImRlbGV0ZUZyb21XaGl0ZUxpc3QodXJsKVwiIC8+XG4gICAgICAgICAgPEZhdmljb24gOnR5cGU9XCJUeXBlT2ZVcmwuV2ViU2l0ZVwiIDpmYXZpY29uPVwiZ2V0RmF2aWNvbih1cmwpXCIgLz5cbiAgICAgICAgICA8c3Bhbj57eyB1cmwgfX08L3NwYW4+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9saT5cbiAgICA8L3VsPlxuICAgIDxkaXYgY2xhc3M9XCJtdC0yMFwiPlxuICAgICAgPGlucHV0XG4gICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgY2xhc3M9XCJkLWlubGluZS1ibG9jayBjdXN0b20td2lkdGhcIlxuICAgICAgICA6cGxhY2Vob2xkZXI9XCJ0KCdlbnRlcldlYnNpdGUubWVzc2FnZScpXCJcbiAgICAgICAgdi1tb2RlbD1cIm5ld1dlYnNpdGVGb3JXaGl0ZUxpc3RcIlxuICAgICAgLz5cbiAgICAgIDxpbnB1dFxuICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgY2xhc3M9XCJkLWlubGluZS1ibG9jayBzbWFsbC1idG4gbWwtMTBcIlxuICAgICAgICA6dmFsdWU9XCJ0KCdhZGRXZWJzaXRlLm1lc3NhZ2UnKVwiXG4gICAgICAgIDpkaXNhYmxlZD1cIm5ld1dlYnNpdGVGb3JXaGl0ZUxpc3QgPT0gbnVsbCB8fCBuZXdXZWJzaXRlRm9yV2hpdGVMaXN0ID09ICcnXCJcbiAgICAgICAgQGNsaWNrPVwiYWRkVG9XaGl0ZUxpc3QoKVwiXG4gICAgICAvPlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQgbGFuZz1cInRzXCI+XG5leHBvcnQgZGVmYXVsdCB7XG4gIG5hbWU6ICdXaGl0ZUxpc3QnLFxufTtcbjwvc2NyaXB0PlxuXG48c2NyaXB0IGxhbmc9XCJ0c1wiIHNldHVwPlxuaW1wb3J0IEZhdmljb24gZnJvbSAnLi9GYXZpY29uLnZ1ZSc7XG5pbXBvcnQgeyBnZXRGYXZpY29uIH0gZnJvbSAnLi4vdXRpbHMvZmF2aWNvbic7XG5pbXBvcnQgeyBvbk1vdW50ZWQsIHJlZiB9IGZyb20gJ3Z1ZSc7XG5pbXBvcnQgeyB1c2VJMThuIH0gZnJvbSAndnVlLWkxOG4nO1xuaW1wb3J0IHsgVHlwZU9mVXJsIH0gZnJvbSAnLi4vdXRpbHMvZW51bXMnO1xuaW1wb3J0IHsgdXNlTm90aWZpY2F0aW9uIH0gZnJvbSAnQGt5dmcvdnVlMy1ub3RpZmljYXRpb24nO1xuaW1wb3J0IHsgaW5qZWN0U3RvcmFnZSB9IGZyb20gJy4uL3N0b3JhZ2UvaW5qZWN0LXN0b3JhZ2UnO1xuaW1wb3J0IHsgU3RvcmFnZVBhcmFtcyB9IGZyb20gJy4uL3N0b3JhZ2Uvc3RvcmFnZS1wYXJhbXMnO1xuaW1wb3J0IHsgaXNEb21haW5FcXVhbHMgfSBmcm9tICcuLi91dGlscy9jb21tb24nO1xuaW1wb3J0IHsgZXh0cmFjdEhvc3RuYW1lIH0gZnJvbSAnLi4vdXRpbHMvZXh0cmFjdC1ob3N0bmFtZSc7XG5cbmNvbnN0IHsgdCB9ID0gdXNlSTE4bigpO1xuXG5jb25zdCBub3RpZmljYXRpb24gPSB1c2VOb3RpZmljYXRpb24oKTtcblxuY29uc3Qgc2V0dGluZ3NTdG9yYWdlID0gaW5qZWN0U3RvcmFnZSgpO1xuXG5jb25zdCB3aGl0ZUxpc3QgPSByZWY8c3RyaW5nW10+KCk7XG5jb25zdCBuZXdXZWJzaXRlRm9yV2hpdGVMaXN0ID0gcmVmPHN0cmluZz4oKTtcblxub25Nb3VudGVkKGFzeW5jICgpID0+IHtcbiAgd2hpdGVMaXN0LnZhbHVlID0gT2JqZWN0LnZhbHVlcyhhd2FpdCBzZXR0aW5nc1N0b3JhZ2UuZ2V0VmFsdWUoU3RvcmFnZVBhcmFtcy5CTEFDS19MSVNULCBbXSkpO1xufSk7XG5cbmZ1bmN0aW9uIGFkZFRvV2hpdGVMaXN0KCkge1xuICBjb25zdCBleGlzdGluZ0l0ZW0gPSB3aGl0ZUxpc3QudmFsdWU/LmZpbmQoeCA9PlxuICAgIGlzRG9tYWluRXF1YWxzKGV4dHJhY3RIb3N0bmFtZSh4KSwgZXh0cmFjdEhvc3RuYW1lKG5ld1dlYnNpdGVGb3JXaGl0ZUxpc3QudmFsdWUhKSksXG4gICk7XG4gIGlmIChleGlzdGluZ0l0ZW0gIT09IHVuZGVmaW5lZCkge1xuICAgIG5vdGlmaWNhdGlvbi5ub3RpZnkoe1xuICAgICAgdGl0bGU6ICdZb3UgaGF2ZSBhbHJlYWR5IGFkZGVkIHRoaXMgc2l0ZScsXG4gICAgICB0eXBlOiAnZXJyb3InLFxuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIGNvbnN0IG5ld1dlYnNpdGUgPSBleHRyYWN0SG9zdG5hbWUobmV3V2Vic2l0ZUZvcldoaXRlTGlzdC52YWx1ZSEpO1xuICAgIHdoaXRlTGlzdC52YWx1ZT8ucHVzaChuZXdXZWJzaXRlKTtcbiAgICBzYXZlKHdoaXRlTGlzdC52YWx1ZSk7XG4gICAgbmV3V2Vic2l0ZUZvcldoaXRlTGlzdC52YWx1ZSA9ICcnO1xuICB9XG59XG5cbmZ1bmN0aW9uIGRlbGV0ZUZyb21XaGl0ZUxpc3QodXJsOiBzdHJpbmcpIHtcbiAgd2hpdGVMaXN0LnZhbHVlID0gd2hpdGVMaXN0LnZhbHVlIS5maWx0ZXIoeCA9PiB4ICE9IHVybCk7XG4gIHNhdmUod2hpdGVMaXN0LnZhbHVlKTtcbn1cblxuYXN5bmMgZnVuY3Rpb24gc2F2ZSh2YWx1ZTogYW55KSB7XG4gIGlmICh2YWx1ZSAhPSB1bmRlZmluZWQpIGF3YWl0IHNldHRpbmdzU3RvcmFnZS5zYXZlVmFsdWUoU3RvcmFnZVBhcmFtcy5CTEFDS19MSVNULCB2YWx1ZSk7XG59XG48L3NjcmlwdD5cblxuPHN0eWxlIHNjb3BlZD5cbi5hYm91dCAuYWJvdXQtbGFiZWwge1xuICBmb250LXNpemU6IDE0cHg7XG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4uY3VzdG9tLXdpZHRoIHtcbiAgd2lkdGg6IDUzOHB4O1xufVxuPC9zdHlsZT5cbiIsImV4cG9ydCBkZWZhdWx0IFwiX19WSVRFX0FTU0VUX184MWE0YWI1MV9fXCIiLCJpbXBvcnQgeyBjb252ZXJ0SEhNTVRvU2Vjb25kcyB9IGZyb20gJy4uL3V0aWxzL2NvbnZlcnRlcic7XG5cbmV4cG9ydCBjbGFzcyBSZXN0cmljdGlvbiB7XG4gIGRvbWFpbjogc3RyaW5nO1xuICB0aW1lOiBudW1iZXI7XG5cbiAgY29uc3RydWN0b3IoZG9tYWluOiBzdHJpbmcsIGhvdXJzOiBudW1iZXIsIG1pbnV0ZXM6IG51bWJlcikge1xuICAgIHRoaXMuZG9tYWluID0gZG9tYWluO1xuICAgIHRoaXMudGltZSA9IGNvbnZlcnRISE1NVG9TZWNvbmRzKGhvdXJzLCBtaW51dGVzKTtcbiAgfVxufVxuIiwiPHRlbXBsYXRlPlxuICA8ZGl2IGNsYXNzPVwibGltaXRzLXRpbWUtYmxvY2sgbWItMjBcIj5cbiAgICA8aW5wdXRcbiAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgIDpkaXNhYmxlZD1cImlzRWRpdFwiXG4gICAgICBjbGFzcz1cImQtaW5saW5lLWJsb2NrXCJcbiAgICAgIDpwbGFjZWhvbGRlcj1cInQoJ2VudGVyV2Vic2l0ZS5tZXNzYWdlJylcIlxuICAgICAgdi1tb2RlbD1cIm5ld1dlYnNpdGVGb3JMaXN0XCJcbiAgICAvPlxuICAgIDxWdWVEYXRlUGlja2VyIHYtbW9kZWw9XCJ0aW1lXCIgdGltZS1waWNrZXIgY2xhc3M9XCJkYXRlLXBpY2tlciBoZWlnaHRcIiAvPlxuICAgIDxpbnB1dFxuICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICBjbGFzcz1cImQtaW5saW5lLWJsb2NrIHNtYWxsLWJ0blwiXG4gICAgICA6dmFsdWU9XCIhaXNFZGl0ID8gdCgnYWRkV2Vic2l0ZS5tZXNzYWdlJykgOiB0KCdzYXZlLm1lc3NhZ2UnKVwiXG4gICAgICA6ZGlzYWJsZWQ9XCJpc0Rpc2FibGVkU2F2aW5nXCJcbiAgICAgIEBjbGljaz1cImlzRWRpdCA/IGVkaXRJdGVtKCkgOiBhZGRUb0xpc3QoKVwiXG4gICAgLz5cbiAgPC9kaXY+XG4gIDxkaXYgY2xhc3M9XCJtdC0xMFwiIHYtaWY9XCJzaG93Q29tcGxldGVseUJsb2NrVmFsdWVcIj5cbiAgICA8bGFiZWwgY2xhc3M9XCJibG9jay1jaGVja2JveFwiPlxuICAgICAgPGlucHV0XG4gICAgICAgIHR5cGU9XCJjaGVja2JveFwiXG4gICAgICAgIGNsYXNzPVwiZmlsbGVkLWluXCJcbiAgICAgICAgaWQ9XCJ2aWV3VGltZUluQmFkZ2VcIlxuICAgICAgICB2LW1vZGVsPVwiaXNDaGVja2VkQ29tcGxldGVseUJsb2NrZWRcIlxuICAgICAgICBAY2hhbmdlPVwiY29tcGxldGVseUJsb2NrXCJcbiAgICAgIC8+XG4gICAgICA8c3Bhbj57eyB0KCdjb21wbGV0ZWx5QmxvY2tlZC5kZXNjcmlwdGlvbicpIH19PC9zcGFuPlxuICAgIDwvbGFiZWw+XG4gIDwvZGl2PlxuICA8dWwgcmVhZG9ubHkgY2xhc3M9XCJ1cmwtbGlzdFwiPlxuICAgIDxsaSB2LWZvcj1cIihsaW1pdCwgaSkgb2YgbGlzdFwiIDprZXk9XCJpXCI+XG4gICAgICA8ZGl2PlxuICAgICAgICA8aW1nIHNyYz1cIi4uL2Fzc2V0cy9pY29ucy9kZWxldGUucG5nXCIgaGVpZ2h0PVwiMTZcIiBAY2xpY2s9XCJkZWxldGVGcm9tTGlzdChsaW1pdC5kb21haW4pXCIgLz5cbiAgICAgICAgPGltZ1xuICAgICAgICAgIHNyYz1cIi4uL2Fzc2V0cy9pY29ucy9lZGl0LnN2Z1wiXG4gICAgICAgICAgaGVpZ2h0PVwiMTZcIlxuICAgICAgICAgIEBjbGljaz1cImVkaXRJdGVtRnJvbUxpc3QobGltaXQuZG9tYWluLCBsaW1pdC50aW1lKVwiXG4gICAgICAgIC8+XG4gICAgICAgIDxGYXZpY29uIDp0eXBlPVwiVHlwZU9mVXJsLldlYlNpdGVcIiA6ZmF2aWNvbj1cImdldEZhdmljb24obGltaXQuZG9tYWluKVwiIC8+XG4gICAgICAgIDxzcGFuPnt7IGxpbWl0LmRvbWFpbiB9fTwvc3Bhbj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8cCBjbGFzcz1cInRpbWUtdmFsdWUgZC1pbmxpbmUtYmxvY2tcIiB2LWlmPVwiIWNvbXBsZXRlbHlCbG9ja2VkKGxpbWl0LnRpbWUpXCI+XG4gICAgICAgICAgICB7eyB0KCdsaW1pdC5tZXNzYWdlJykgfX0gOiB7eyBnZXRUaW1lKGxpbWl0LnRpbWUpIH19XG4gICAgICAgICAgPC9wPlxuICAgICAgICAgIDxwIGNsYXNzPVwiYmxvY2tlZFwiIHYtaWY9XCJjb21wbGV0ZWx5QmxvY2tlZChsaW1pdC50aW1lKVwiPlxuICAgICAgICAgICAge3sgdCgnY29tcGxldGVseUJsb2NrZWQubWVzc2FnZScpIH19XG4gICAgICAgICAgPC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvbGk+XG4gIDwvdWw+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0IGxhbmc9XCJ0c1wiPlxuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiAnTGlzdFdpdGhUaW1lJyxcbn07XG48L3NjcmlwdD5cblxuPHNjcmlwdCBsYW5nPVwidHNcIiBzZXR1cD5cbmltcG9ydCBGYXZpY29uIGZyb20gJy4vRmF2aWNvbi52dWUnO1xuaW1wb3J0IHsgZ2V0RmF2aWNvbiB9IGZyb20gJy4uL3V0aWxzL2Zhdmljb24nO1xuaW1wb3J0IHsgdXNlTm90aWZpY2F0aW9uIH0gZnJvbSAnQGt5dmcvdnVlMy1ub3RpZmljYXRpb24nO1xuaW1wb3J0IHsgdXNlSTE4biB9IGZyb20gJ3Z1ZS1pMThuJztcbmltcG9ydCB7IGluamVjdFN0b3JhZ2UgfSBmcm9tICcuLi9zdG9yYWdlL2luamVjdC1zdG9yYWdlJztcbmltcG9ydCB7IFRpbWUgfSBmcm9tICcuLi91dGlscy90aW1lJztcbmltcG9ydCB7IGNvbXB1dGVkLCBvbk1vdW50ZWQsIHJlZiB9IGZyb20gJ3Z1ZSc7XG5pbXBvcnQgeyBMaXN0V2l0aFRpbWUsIFR5cGVPZlVybCB9IGZyb20gJy4uL3V0aWxzL2VudW1zJztcbmltcG9ydCB7IFN0b3JhZ2VQYXJhbXMgfSBmcm9tICcuLi9zdG9yYWdlL3N0b3JhZ2UtcGFyYW1zJztcbmltcG9ydCB7IGlzRG9tYWluRXF1YWxzIH0gZnJvbSAnLi4vdXRpbHMvY29tbW9uJztcbmltcG9ydCB7IGV4dHJhY3RIb3N0bmFtZSB9IGZyb20gJy4uL3V0aWxzL2V4dHJhY3QtaG9zdG5hbWUnO1xuaW1wb3J0IHsgY29udmVydEhITU1Ub1NlY29uZHMsIGNvbnZlcnRTZWNvbmRzVG9ISE1NIH0gZnJvbSAnLi4vdXRpbHMvY29udmVydGVyJztcbmltcG9ydCB7IFJlc3RyaWN0aW9uIH0gZnJvbSAnLi4vZW50aXR5L3Jlc3RyaWN0aW9uJztcbmltcG9ydCB7IEJhc2VUaW1lTGlzdCB9IGZyb20gJy4uL2VudGl0eS9iYXNlVGltZUxpc3QnO1xuaW1wb3J0IHsgTm90aWZpY2F0aW9ucyB9IGZyb20gJy4uL2VudGl0eS9ub3RpZmljYXRpb24nO1xuXG5jb25zdCB7IHQgfSA9IHVzZUkxOG4oKTtcblxuY29uc3QgcHJvcHMgPSBkZWZpbmVQcm9wczx7XG4gIHR5cGU6IExpc3RXaXRoVGltZTtcbn0+KCk7XG5cbmNvbnN0IG5vdGlmaWNhdGlvbiA9IHVzZU5vdGlmaWNhdGlvbigpO1xuY29uc3Qgc2V0dGluZ3NTdG9yYWdlID0gaW5qZWN0U3RvcmFnZSgpO1xuXG5jb25zdCBsaXN0ID0gcmVmPEJhc2VUaW1lTGlzdFtdPigpO1xuY29uc3QgaXNFZGl0ID0gcmVmPGJvb2xlYW4+KCk7XG5jb25zdCB0aW1lID0gcmVmPFRpbWU+KHtcbiAgaG91cnM6IDAsXG4gIG1pbnV0ZXM6IDMwLFxufSk7XG5jb25zdCBuZXdXZWJzaXRlRm9yTGlzdCA9IHJlZjxzdHJpbmc+KCk7XG5jb25zdCBzdG9yYWdlUGFyYW0gPSByZWY8U3RvcmFnZVBhcmFtcz4oKTtcbmNvbnN0IGlzQ2hlY2tlZENvbXBsZXRlbHlCbG9ja2VkID0gY29tcHV0ZWQoXG4gICgpID0+IHRpbWUudmFsdWUgIT0gdW5kZWZpbmVkICYmIHRpbWUudmFsdWUuaG91cnMgPT0gMCAmJiB0aW1lLnZhbHVlLm1pbnV0ZXMgPT0gMCxcbik7XG5jb25zdCBzaG93Q29tcGxldGVseUJsb2NrVmFsdWUgPSBjb21wdXRlZChcbiAgKCkgPT5cbiAgICBwcm9wcy50eXBlID09IExpc3RXaXRoVGltZS5MaW1pdHMgJiZcbiAgICBuZXdXZWJzaXRlRm9yTGlzdC52YWx1ZSAhPSB1bmRlZmluZWQgJiZcbiAgICBuZXdXZWJzaXRlRm9yTGlzdC52YWx1ZSAhPSAnJyxcbik7XG5cbm9uTW91bnRlZChhc3luYyAoKSA9PiB7XG4gIHN3aXRjaCAocHJvcHMudHlwZSkge1xuICAgIGNhc2UgTGlzdFdpdGhUaW1lLkxpbWl0czpcbiAgICAgIGxpc3QudmFsdWUgPSBPYmplY3QudmFsdWVzKFxuICAgICAgICBhd2FpdCBzZXR0aW5nc1N0b3JhZ2UuZ2V0VmFsdWUoU3RvcmFnZVBhcmFtcy5SRVNUUklDVElPTl9MSVNULCBbXSksXG4gICAgICApIGFzIFJlc3RyaWN0aW9uW107XG4gICAgICBzdG9yYWdlUGFyYW0udmFsdWUgPSBTdG9yYWdlUGFyYW1zLlJFU1RSSUNUSU9OX0xJU1Q7XG4gICAgICBicmVhaztcbiAgICBjYXNlIExpc3RXaXRoVGltZS5Ob3RpZmljYXRpb25zOlxuICAgICAgbGlzdC52YWx1ZSA9IE9iamVjdC52YWx1ZXMoXG4gICAgICAgIGF3YWl0IHNldHRpbmdzU3RvcmFnZS5nZXRWYWx1ZShTdG9yYWdlUGFyYW1zLk5PVElGSUNBVElPTl9MSVNULCBbXSksXG4gICAgICApIGFzIE5vdGlmaWNhdGlvbnNbXTtcbiAgICAgIHN0b3JhZ2VQYXJhbS52YWx1ZSA9IFN0b3JhZ2VQYXJhbXMuTk9USUZJQ0FUSU9OX0xJU1Q7XG4gICAgICBicmVhaztcbiAgfVxufSk7XG5cbmZ1bmN0aW9uIGFkZFRvTGlzdCgpIHtcbiAgY29uc3QgZXhpc3RpbmdJdGVtID0gbGlzdC52YWx1ZT8uZmluZCh4ID0+XG4gICAgaXNEb21haW5FcXVhbHMoZXh0cmFjdEhvc3RuYW1lKHguZG9tYWluKSwgZXh0cmFjdEhvc3RuYW1lKG5ld1dlYnNpdGVGb3JMaXN0LnZhbHVlISkpLFxuICApO1xuICBpZiAoZXhpc3RpbmdJdGVtICE9PSB1bmRlZmluZWQpIHtcbiAgICBub3RpZmljYXRpb24ubm90aWZ5KHtcbiAgICAgIHRpdGxlOiAnWW91IGhhdmUgYWxyZWFkeSBhZGRlZCB0aGlzIHNpdGUnLFxuICAgICAgdHlwZTogJ2Vycm9yJyxcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBjb25zdCBuZXdMaW1pdCA9IG5ldyBSZXN0cmljdGlvbihcbiAgICAgIGV4dHJhY3RIb3N0bmFtZShuZXdXZWJzaXRlRm9yTGlzdC52YWx1ZSEpLFxuICAgICAgdGltZS52YWx1ZS5ob3VycyxcbiAgICAgIHRpbWUudmFsdWUubWludXRlcyxcbiAgICApO1xuICAgIGxpc3QudmFsdWU/LnB1c2gobmV3TGltaXQpO1xuICAgIHNhdmUobGlzdC52YWx1ZSk7XG4gICAgbmV3V2Vic2l0ZUZvckxpc3QudmFsdWUgPSAnJztcbiAgfVxufVxuXG5mdW5jdGlvbiBjb21wbGV0ZWx5QmxvY2soKSB7XG4gIHRpbWUudmFsdWUuaG91cnMgPSAwO1xuICB0aW1lLnZhbHVlLm1pbnV0ZXMgPSAwO1xufVxuXG5mdW5jdGlvbiBjb21wbGV0ZWx5QmxvY2tlZCh0aW1lOiBudW1iZXIpIHtcbiAgcmV0dXJuIHByb3BzLnR5cGUgPT0gTGlzdFdpdGhUaW1lLkxpbWl0cyAmJiB0aW1lID09IDA7XG59XG5cbmZ1bmN0aW9uIGdldFRpbWUodGltZTogbnVtYmVyKSB7XG4gIGNvbnN0IHRpbWVPYmogPSBjb252ZXJ0U2Vjb25kc1RvSEhNTSh0aW1lKTtcbiAgcmV0dXJuIGAke3RpbWVPYmouaG91cnN9OiR7dGltZU9iai5taW51dGVzIDwgMTAgPyAnMCcgKyB0aW1lT2JqLm1pbnV0ZXMgOiB0aW1lT2JqLm1pbnV0ZXN9YDtcbn1cblxuY29uc3QgaXNEaXNhYmxlZFNhdmluZyA9IGNvbXB1dGVkKCgpID0+IHtcbiAgaWYgKFxuICAgIHByb3BzLnR5cGUgPT0gTGlzdFdpdGhUaW1lLk5vdGlmaWNhdGlvbnMgJiZcbiAgICB0aW1lLnZhbHVlPy5ob3VycyA9PSAwICYmXG4gICAgdGltZS52YWx1ZT8ubWludXRlcyA9PSAwXG4gIClcbiAgICByZXR1cm4gdHJ1ZTtcbiAgcmV0dXJuIChcbiAgICBuZXdXZWJzaXRlRm9yTGlzdC52YWx1ZSA9PSAnJyB8fCBuZXdXZWJzaXRlRm9yTGlzdC52YWx1ZSA9PSB1bmRlZmluZWQgfHwgdGltZS52YWx1ZSA9PSBudWxsXG4gICk7XG59KTtcblxuZnVuY3Rpb24gZGVsZXRlRnJvbUxpc3QodXJsOiBzdHJpbmcpIHtcbiAgbGlzdC52YWx1ZSA9IGxpc3QudmFsdWUhLmZpbHRlcih4ID0+IHguZG9tYWluICE9IHVybCk7XG4gIHNhdmUobGlzdC52YWx1ZSk7XG4gIG5ld1dlYnNpdGVGb3JMaXN0LnZhbHVlID0gJyc7XG4gIGlzRWRpdC52YWx1ZSA9IGZhbHNlO1xufVxuXG5mdW5jdGlvbiBlZGl0SXRlbUZyb21MaXN0KHVybDogc3RyaW5nLCB0aW1lRm9yVXJsOiBudW1iZXIpIHtcbiAgaXNFZGl0LnZhbHVlID0gdHJ1ZTtcbiAgbmV3V2Vic2l0ZUZvckxpc3QudmFsdWUgPSB1cmw7XG4gIGNvbnN0IHRpbWVPYmogPSBjb252ZXJ0U2Vjb25kc1RvSEhNTSh0aW1lRm9yVXJsKTtcbiAgdGltZS52YWx1ZS5ob3VycyA9IHRpbWVPYmouaG91cnM7XG4gIHRpbWUudmFsdWUubWludXRlcyA9IHRpbWVPYmoubWludXRlcztcbn1cblxuZnVuY3Rpb24gZWRpdEl0ZW0oKSB7XG4gIGNvbnN0IGV4aXN0aW5nSXRlbSA9IGxpc3QudmFsdWU/LmZpbmQoeCA9PlxuICAgIGlzRG9tYWluRXF1YWxzKGV4dHJhY3RIb3N0bmFtZSh4LmRvbWFpbiksIGV4dHJhY3RIb3N0bmFtZShuZXdXZWJzaXRlRm9yTGlzdC52YWx1ZSEpKSxcbiAgKTtcbiAgaWYgKGV4aXN0aW5nSXRlbSAhPSB1bmRlZmluZWQpIHtcbiAgICBleGlzdGluZ0l0ZW0udGltZSA9IGNvbnZlcnRISE1NVG9TZWNvbmRzKHRpbWUudmFsdWUuaG91cnMsIHRpbWUudmFsdWUubWludXRlcyk7XG4gICAgc2F2ZShsaXN0LnZhbHVlKTtcbiAgICBuZXdXZWJzaXRlRm9yTGlzdC52YWx1ZSA9ICcnO1xuICAgIGlzRWRpdC52YWx1ZSA9IGZhbHNlO1xuICB9XG59XG5cbmFzeW5jIGZ1bmN0aW9uIHNhdmUodmFsdWU6IGFueSkge1xuICBpZiAodmFsdWUgIT0gdW5kZWZpbmVkKSBhd2FpdCBzZXR0aW5nc1N0b3JhZ2Uuc2F2ZVZhbHVlKHN0b3JhZ2VQYXJhbS52YWx1ZSEsIHZhbHVlKTtcbn1cbjwvc2NyaXB0PlxuXG48c3R5bGUgc2NvcGVkPlxuLmxpbWl0cy10aW1lLWJsb2NrIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzdGFydDtcbn1cblxuLmxpbWl0cy10aW1lLWJsb2NrIC5kYXRlLXBpY2tlciB7XG4gIHdpZHRoOiAxMjBweDtcbiAgbWFyZ2luOiAwIDE1cHg7XG59XG4uYmxvY2tlZCB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgZm9udC1zaXplOiAxM3B4O1xuICBjb2xvcjogZ3JheTtcbiAgbWFyZ2luLWxlZnQ6IDU1cHg7XG4gIG1hcmdpbi10b3A6IDA7XG59XG48L3N0eWxlPlxuIiwiPHRlbXBsYXRlPlxuICA8ZGl2PlxuICAgIDxwIGNsYXNzPVwidGl0bGUgbXQtMFwiPnt7IHQoJ2xpbWl0cy5tZXNzYWdlJykgfX08L3A+XG4gICAgPHAgY2xhc3M9XCJkZXNjcmlwdGlvblwiPlxuICAgICAge3sgdCgnbGltaXRzLmRlc2NyaXB0aW9uJykgfX1cbiAgICA8L3A+XG4gICAgPHAgY2xhc3M9XCJkZXNjcmlwdGlvblwiPlxuICAgICAge3sgdCgnbGltaXRzVGlwLm1lc3NhZ2UnKSB9fVxuICAgIDwvcD5cbiAgICA8TGlzdFdpdGhUaW1lQ29tcG9uZW50IDp0eXBlPVwiTGlzdFdpdGhUaW1lLkxpbWl0c1wiIC8+XG4gICAgPFByb21vQ2xlYXJZb3VUdWJlIC8+XG4gIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdCBsYW5nPVwidHNcIj5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbmFtZTogJ0xpbWl0cycsXG59O1xuPC9zY3JpcHQ+XG5cbjxzY3JpcHQgbGFuZz1cInRzXCIgc2V0dXA+XG5pbXBvcnQgTGlzdFdpdGhUaW1lQ29tcG9uZW50IGZyb20gJy4uL2NvbXBvbmVudHMvTGlzdFdpdGhUaW1lLnZ1ZSc7XG5pbXBvcnQgUHJvbW9DbGVhcllvdVR1YmUgZnJvbSAnLi4vY29tcG9uZW50cy9Qcm9tb0NsZWFyWW91VHViZS52dWUnO1xuaW1wb3J0IHsgTGlzdFdpdGhUaW1lIH0gZnJvbSAnLi4vdXRpbHMvZW51bXMnO1xuaW1wb3J0IHsgdXNlSTE4biB9IGZyb20gJ3Z1ZS1pMThuJztcblxuY29uc3QgeyB0IH0gPSB1c2VJMThuKCk7XG48L3NjcmlwdD5cblxuPHN0eWxlIHNjb3BlZD5cbi5hYm91dCAuYWJvdXQtbGFiZWwge1xuICBmb250LXNpemU6IDE0cHg7XG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuPC9zdHlsZT5cbiIsIjx0ZW1wbGF0ZT5cbiAgPGRpdj5cbiAgICA8ZGl2IGNsYXNzPVwic2V0dGluZ3MtaXRlbVwiPlxuICAgICAgPGxhYmVsIGNsYXNzPVwic2V0dGluZy1oZWFkZXJcIj5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcbiAgICAgICAgICBjbGFzcz1cImZpbGxlZC1pblwiXG4gICAgICAgICAgaWQ9XCJibG9ja0RlZmVycmFsXCJcbiAgICAgICAgICB2LW1vZGVsPVwic2hvd0RhaWx5Tm90aWZpY2F0aW9uXCJcbiAgICAgICAgICBAY2hhbmdlPVwib25DaGFuZ2UoU3RvcmFnZVBhcmFtcy5EQUlMWV9OT1RJRklDQVRJT04sICRldmVudC50YXJnZXQpXCJcbiAgICAgICAgLz5cbiAgICAgICAgPHNwYW4+e3sgdCgnc2hvd0RhaWx5Tm90aWZpY2F0aW9uLm1lc3NhZ2UnKSB9fTwvc3Bhbj5cbiAgICAgICAgPHAgY2xhc3M9XCJkZXNjcmlwdGlvblwiPlxuICAgICAgICAgIHt7IHQoJ3Nob3dEYWlseU5vdGlmaWNhdGlvbi5kZXNjcmlwdGlvbicpIH19XG4gICAgICAgIDwvcD5cbiAgICAgIDwvbGFiZWw+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cInNldHRpbmdzLWl0ZW1cIj5cbiAgICAgIDxwIGNsYXNzPVwic2V0dGluZy1oZWFkZXIgZC1pbmxpbmUtYmxvY2tcIj5cbiAgICAgICAge3sgdCgnbm90aWZpY2F0aW9uVGltZVNldHRpbmcubWVzc2FnZScpIH19XG4gICAgICA8L3A+XG4gICAgICA8VnVlRGF0ZVBpY2tlclxuICAgICAgICB2LW1vZGVsPVwibm90aWZpY2F0aW9uVGltZVwiXG4gICAgICAgIHRpbWUtcGlja2VyXG4gICAgICAgIEB1cGRhdGU6bW9kZWwtdmFsdWU9XCJoYW5kbGVEYXRlXCJcbiAgICAgICAgY2xhc3M9XCJkYXRlLXBpY2tlciBkLWlubGluZS1ibG9ja1wiXG4gICAgICAvPlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJzZXR0aW5ncy1pdGVtXCI+XG4gICAgICA8bGFiZWwgY2xhc3M9XCJzZXR0aW5nLWhlYWRlclwiPnt7IHQoJ25vdGlmaWNhdGlvblRpbWUubWVzc2FnZScpIH19PC9sYWJlbD5cbiAgICAgIDxwIGNsYXNzPVwiZGVzY3JpcHRpb25cIj5cbiAgICAgICAge3sgdCgnbm90aWZpY2F0aW9uVGltZS5kZXNjcmlwdGlvbicpIH19XG4gICAgICA8L3A+XG4gICAgICA8TGlzdFdpdGhUaW1lQ29tcG9uZW50IDp0eXBlPVwiTGlzdFdpdGhUaW1lLk5vdGlmaWNhdGlvbnNcIiAvPlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJzZXR0aW5ncy1pdGVtXCI+XG4gICAgICA8bGFiZWwgY2xhc3M9XCJzZXR0aW5nLWhlYWRlclwiPnt7IHQoJ25vdGlmaWNhdGlvbk1lc3NhZ2UubWVzc2FnZScpIH19PC9sYWJlbD5cbiAgICAgIDxwIGNsYXNzPVwiZGVzY3JpcHRpb25cIj5cbiAgICAgICAge3sgdCgnbm90aWZpY2F0aW9uTWVzc2FnZS5kZXNjcmlwdGlvbicpIH19XG4gICAgICA8L3A+XG4gICAgICA8aW5wdXRcbiAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICBjbGFzcz1cIlwiXG4gICAgICAgIDpwbGFjZWhvbGRlcj1cInQoJ2VudGVyTm90aWZpY2F0aW9uLm1lc3NhZ2UnKVwiXG4gICAgICAgIHYtbW9kZWw9XCJub3RpZmljYXRpb25NZXNzYWdlXCJcbiAgICAgIC8+XG4gICAgICA8aW5wdXRcbiAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgIGNsYXNzPVwiZC1pbmxpbmUtYmxvY2sgc21hbGwtYnRuIG1sLTEwIHdpZHRoXCJcbiAgICAgICAgOnZhbHVlPVwidCgnc2F2ZS5tZXNzYWdlJylcIlxuICAgICAgICA6ZGlzYWJsZWQ9XCJub3RpZmljYXRpb25NZXNzYWdlID09ICcnXCJcbiAgICAgICAgQGNsaWNrPVwic2F2ZU5vdGlmaWNhdGlvbk1lc3NhZ2UoKVwiXG4gICAgICAvPlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQgbGFuZz1cInRzXCI+XG5leHBvcnQgZGVmYXVsdCB7XG4gIG5hbWU6ICdEYWlseU5vdGlmaWNhdGlvbnMnLFxufTtcbjwvc2NyaXB0PlxuXG48c2NyaXB0IGxhbmc9XCJ0c1wiIHNldHVwPlxuaW1wb3J0IHsgb25Nb3VudGVkLCByZWYgfSBmcm9tICd2dWUnO1xuaW1wb3J0IHsgdXNlSTE4biB9IGZyb20gJ3Z1ZS1pMThuJztcbmltcG9ydCB7IGluamVjdFN0b3JhZ2UgfSBmcm9tICcuLi9zdG9yYWdlL2luamVjdC1zdG9yYWdlJztcbmltcG9ydCB7IE5PVElGSUNBVElPTl9NRVNTQUdFX0RFRkFVTFQsIFN0b3JhZ2VQYXJhbXMgfSBmcm9tICcuLi9zdG9yYWdlL3N0b3JhZ2UtcGFyYW1zJztcbmltcG9ydCB7XG4gIERBSUxZX05PVElGSUNBVElPTl9ERUZBVUxULFxuICBEQUlMWV9TVU1NQVJZX05PVElGSUNBVElPTl9USU1FX0RFRkFVTFQsXG59IGZyb20gJy4uL3N0b3JhZ2Uvc3RvcmFnZS1wYXJhbXMnO1xuaW1wb3J0IHsgY29udmVydEhITU1Ub1NlY29uZHMsIGNvbnZlcnRTZWNvbmRzVG9ISE1NIH0gZnJvbSAnLi4vdXRpbHMvY29udmVydGVyJztcbmltcG9ydCB7IFRpbWUgfSBmcm9tICcuLi91dGlscy90aW1lJztcbmltcG9ydCBMaXN0V2l0aFRpbWVDb21wb25lbnQgZnJvbSAnLi4vY29tcG9uZW50cy9MaXN0V2l0aFRpbWUudnVlJztcbmltcG9ydCBQcm9tb0NsZWFyWW91VHViZSBmcm9tICcuLi9jb21wb25lbnRzL1Byb21vQ2xlYXJZb3VUdWJlLnZ1ZSc7XG5pbXBvcnQgeyBMaXN0V2l0aFRpbWUgfSBmcm9tICcuLi91dGlscy9lbnVtcyc7XG5pbXBvcnQgQnJvd3NlciBmcm9tICd3ZWJleHRlbnNpb24tcG9seWZpbGwnO1xuaW1wb3J0IHsgTWVzc2FnZXMgfSBmcm9tICcuLi91dGlscy9tZXNzYWdlcyc7XG5cbmNvbnN0IHsgdCB9ID0gdXNlSTE4bigpO1xuXG5jb25zdCBzZXR0aW5nc1N0b3JhZ2UgPSBpbmplY3RTdG9yYWdlKCk7XG5cbmNvbnN0IHNob3dEYWlseU5vdGlmaWNhdGlvbiA9IHJlZjxib29sZWFuPigpO1xuY29uc3QgZGFpbHlOb3RpZmljYXRpb25UaW1lID0gcmVmPG51bWJlcj4oKTtcbmNvbnN0IG5vdGlmaWNhdGlvblRpbWUgPSByZWY8VGltZT4oKTtcbmNvbnN0IG5vdGlmaWNhdGlvbk1lc3NhZ2UgPSByZWY8c3RyaW5nPigpO1xuXG5vbk1vdW50ZWQoYXN5bmMgKCkgPT4ge1xuICBzaG93RGFpbHlOb3RpZmljYXRpb24udmFsdWUgPSBhd2FpdCBzZXR0aW5nc1N0b3JhZ2UuZ2V0VmFsdWUoXG4gICAgU3RvcmFnZVBhcmFtcy5EQUlMWV9OT1RJRklDQVRJT04sXG4gICAgREFJTFlfTk9USUZJQ0FUSU9OX0RFRkFVTFQsXG4gICk7XG5cbiAgbm90aWZpY2F0aW9uTWVzc2FnZS52YWx1ZSA9IGF3YWl0IHNldHRpbmdzU3RvcmFnZS5nZXRWYWx1ZShcbiAgICBTdG9yYWdlUGFyYW1zLk5PVElGSUNBVElPTl9NRVNTQUdFLFxuICAgIE5PVElGSUNBVElPTl9NRVNTQUdFX0RFRkFVTFQsXG4gICk7XG5cbiAgZGFpbHlOb3RpZmljYXRpb25UaW1lLnZhbHVlID0gKGF3YWl0IHNldHRpbmdzU3RvcmFnZS5nZXRWYWx1ZShcbiAgICBTdG9yYWdlUGFyYW1zLkRBSUxZX1NVTU1BUllfTk9USUZJQ0FUSU9OX1RJTUUsXG4gICAgREFJTFlfU1VNTUFSWV9OT1RJRklDQVRJT05fVElNRV9ERUZBVUxULFxuICApKSBhcyBudW1iZXI7XG5cbiAgY29uc3QgdGltZU9iaiA9IGNvbnZlcnRTZWNvbmRzVG9ISE1NKGRhaWx5Tm90aWZpY2F0aW9uVGltZS52YWx1ZSk7XG4gIG5vdGlmaWNhdGlvblRpbWUudmFsdWUgPSB0aW1lT2JqO1xufSk7XG5cbmFzeW5jIGZ1bmN0aW9uIHNhdmVOb3RpZmljYXRpb25NZXNzYWdlKCkge1xuICBzYXZlKFN0b3JhZ2VQYXJhbXMuTk9USUZJQ0FUSU9OX01FU1NBR0UsIG5vdGlmaWNhdGlvbk1lc3NhZ2UudmFsdWUpO1xufVxuXG5hc3luYyBmdW5jdGlvbiBoYW5kbGVEYXRlKG1vZGVsRGF0YTogVGltZSkge1xuICBpZiAobW9kZWxEYXRhICE9IG51bGwpIHtcbiAgICBub3RpZmljYXRpb25UaW1lLnZhbHVlID0gbW9kZWxEYXRhO1xuICAgIGF3YWl0IHNhdmUoXG4gICAgICBTdG9yYWdlUGFyYW1zLkRBSUxZX1NVTU1BUllfTk9USUZJQ0FUSU9OX1RJTUUsXG4gICAgICBjb252ZXJ0SEhNTVRvU2Vjb25kcyhub3RpZmljYXRpb25UaW1lLnZhbHVlLmhvdXJzLCBub3RpZmljYXRpb25UaW1lLnZhbHVlLm1pbnV0ZXMpLFxuICAgICk7XG4gICAgQnJvd3Nlci5ydW50aW1lLnNlbmRNZXNzYWdlKE1lc3NhZ2VzLlJlc2NoZWR1bGVKb2JzKTtcbiAgfVxufVxuXG5hc3luYyBmdW5jdGlvbiBvbkNoYW5nZShzdG9yYWdlUGFyYW06IFN0b3JhZ2VQYXJhbXMsIHRhcmdldDogYW55KSB7XG4gIGlmICh0YXJnZXQgIT0gbnVsbCkgYXdhaXQgc2F2ZShzdG9yYWdlUGFyYW0sIHRhcmdldC5jaGVja2VkKTtcbn1cblxuYXN5bmMgZnVuY3Rpb24gc2F2ZShzdG9yYWdlUGFyYW06IFN0b3JhZ2VQYXJhbXMsIHZhbHVlOiBhbnkpIHtcbiAgaWYgKHZhbHVlICE9IHVuZGVmaW5lZCkgYXdhaXQgc2V0dGluZ3NTdG9yYWdlLnNhdmVWYWx1ZShzdG9yYWdlUGFyYW0sIHZhbHVlKTtcbn1cbjwvc2NyaXB0PlxuXG48c3R5bGUgc2NvcGVkPlxuLmRhdGUtcGlja2VyIHtcbiAgd2lkdGg6IDEyMHB4O1xuICBtYXJnaW46IDAgMTVweDtcbn1cbi53aWR0aCB7XG4gIHdpZHRoOiA1NDBweDtcbn1cbjwvc3R5bGU+XG4iLCJleHBvcnQgZGVmYXVsdCBcIl9fVklURV9BU1NFVF9fYTE2NmE1NTBfX1wiIiwiZXhwb3J0IGRlZmF1bHQgXCJfX1ZJVEVfQVNTRVRfX2ZhMTYyMDRhX19cIiIsImV4cG9ydCBkZWZhdWx0IFwiX19WSVRFX0FTU0VUX184Yjk0M2I4Zl9fXCIiLCJleHBvcnQgZGVmYXVsdCBcIl9fVklURV9BU1NFVF9fMjg3NzEyNjFfX1wiIiwiaW1wb3J0IEJyb3dzZXIgZnJvbSAnd2ViZXh0ZW5zaW9uLXBvbHlmaWxsJztcbmltcG9ydCB7IFBvbW9kb3JvU291bmRzIH0gZnJvbSAnLi4vdXRpbHMvcG9tb2Rvcm8nO1xuXG5leHBvcnQgZnVuY3Rpb24gcGxheVNvdW5kKHNvdW5kOiBQb21vZG9yb1NvdW5kcykge1xuICBjb25zdCBteUF1ZGlvID0gbmV3IEF1ZGlvKEJyb3dzZXIucnVudGltZS5nZXRVUkwoYGFzc2V0cy9wb21vZG9yby1zb3VuZHMvJHtzb3VuZH1gKSk7XG4gIG15QXVkaW8ucGxheSgpO1xufVxuIiwiPHRlbXBsYXRlPlxuICA8cCBjbGFzcz1cInRpdGxlLWF1ZGlvIGQtaW5saW5lLWJsb2NrXCI+e3sgdCgncG9tb2Rvcm9Tb3VuZEFmdGVyLm1lc3NhZ2UnKSB9fTwvcD5cbiAgPHNlbGVjdCBjbGFzcz1cIm9wdGlvblwiIHYtbW9kZWw9XCJhdWRpb0FmdGVyUGVyaW9kXCIgQGNoYW5nZT1cIm9uQXVkaW9DaGFuZ2UoJGV2ZW50LnRhcmdldClcIj5cbiAgICA8b3B0aW9uIDp2YWx1ZT1cIlBvbW9kb3JvU291bmRzWydTb3VuZCAxJ11cIj57eyB0KCdzb3VuZC5tZXNzYWdlJykgfX0gMTwvb3B0aW9uPlxuICAgIDxvcHRpb24gOnZhbHVlPVwiUG9tb2Rvcm9Tb3VuZHNbJ1NvdW5kIDInXVwiPnt7IHQoJ3NvdW5kLm1lc3NhZ2UnKSB9fSAyPC9vcHRpb24+XG4gICAgPG9wdGlvbiA6dmFsdWU9XCJQb21vZG9yb1NvdW5kc1snU291bmQgMyddXCI+e3sgdCgnc291bmQubWVzc2FnZScpIH19IDM8L29wdGlvbj5cbiAgICA8b3B0aW9uIDp2YWx1ZT1cIlBvbW9kb3JvU291bmRzWydTb3VuZCA0J11cIj57eyB0KCdzb3VuZC5tZXNzYWdlJykgfX0gNDwvb3B0aW9uPlxuICAgIDxvcHRpb24gOnZhbHVlPVwiUG9tb2Rvcm9Tb3VuZHNbJ1NvdW5kIDUnXVwiPnt7IHQoJ3NvdW5kLm1lc3NhZ2UnKSB9fSA1PC9vcHRpb24+XG4gICAgPG9wdGlvbiA6dmFsdWU9XCJQb21vZG9yb1NvdW5kc1snU291bmQgNiddXCI+e3sgdCgnc291bmQubWVzc2FnZScpIH19IDY8L29wdGlvbj5cbiAgICA8b3B0aW9uIDp2YWx1ZT1cIlBvbW9kb3JvU291bmRzWydTb3VuZCA3J11cIj57eyB0KCdzb3VuZC5tZXNzYWdlJykgfX0gNzwvb3B0aW9uPlxuICAgIDxvcHRpb24gOnZhbHVlPVwiUG9tb2Rvcm9Tb3VuZHNbJ1NvdW5kIDgnXVwiPnt7IHQoJ3NvdW5kLm1lc3NhZ2UnKSB9fSA4PC9vcHRpb24+XG4gICAgPG9wdGlvbiA6dmFsdWU9XCJQb21vZG9yb1NvdW5kc1snU291bmQgOSddXCI+e3sgdCgnc291bmQubWVzc2FnZScpIH19IDk8L29wdGlvbj5cbiAgICA8b3B0aW9uIDp2YWx1ZT1cIlBvbW9kb3JvU291bmRzWydTb3VuZCAxMCddXCI+e3sgdCgnc291bmQubWVzc2FnZScpIH19IDEwPC9vcHRpb24+XG4gICAgPG9wdGlvbiA6dmFsdWU9XCJQb21vZG9yb1NvdW5kc1snU291bmQgMTEnXVwiPnt7IHQoJ3NvdW5kLm1lc3NhZ2UnKSB9fSAxMTwvb3B0aW9uPlxuICAgIDxvcHRpb24gOnZhbHVlPVwiUG9tb2Rvcm9Tb3VuZHNbJ1NvdW5kIDEyJ11cIj57eyB0KCdzb3VuZC5tZXNzYWdlJykgfX0gMTI8L29wdGlvbj5cbiAgICA8b3B0aW9uIDp2YWx1ZT1cIlBvbW9kb3JvU291bmRzWydTb3VuZCAxMyddXCI+e3sgdCgnc291bmQubWVzc2FnZScpIH19IDEzPC9vcHRpb24+XG4gIDwvc2VsZWN0PlxuICA8aW1nIHNyYz1cIi4uL2Fzc2V0cy9pY29ucy9zdGFydC5zdmdcIiBoZWlnaHQ9XCIyMlwiIEBjbGljaz1cInBsYXlBdWRpb1wiIGNsYXNzPVwicGxheVwiIC8+XG4gIDxzcGFuIGNsYXNzPVwicHJldmlld1wiPnt7IHQoJ2NsaWNrVG9QcmV2aWV3Lm1lc3NhZ2UnKSB9fTwvc3Bhbj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQgbGFuZz1cInRzXCI+XG5leHBvcnQgZGVmYXVsdCB7XG4gIG5hbWU6ICdQb21vZG9yb1NvdW5kc1NlbGVjdG9yJyxcbn07XG48L3NjcmlwdD5cblxuPHNjcmlwdCBsYW5nPVwidHNcIiBzZXR1cD5cbmltcG9ydCB7IHJlZiB9IGZyb20gJ3Z1ZSc7XG5pbXBvcnQgeyB1c2VJMThuIH0gZnJvbSAndnVlLWkxOG4nO1xuaW1wb3J0IHsgUG9tb2Rvcm9BdWRpb1BhcmFtcywgUG9tb2Rvcm9Tb3VuZHMgfSBmcm9tICcuLi91dGlscy9wb21vZG9ybyc7XG5pbXBvcnQgeyBpbmplY3RTdG9yYWdlIH0gZnJvbSAnLi4vc3RvcmFnZS9pbmplY3Qtc3RvcmFnZSc7XG5pbXBvcnQgeyBwbGF5U291bmQgfSBmcm9tICcuLi9mdW5jdGlvbnMvcGxheVNvdW5kJztcblxuY29uc3QgcHJvcHMgPSBkZWZpbmVQcm9wczx7XG4gIG9wdGlvbjogUG9tb2Rvcm9BdWRpb1BhcmFtcztcbiAgdmFsdWU6IFBvbW9kb3JvU291bmRzO1xufT4oKTtcblxuY29uc3QgeyB0IH0gPSB1c2VJMThuKCk7XG5jb25zdCBzZXR0aW5nc1N0b3JhZ2UgPSBpbmplY3RTdG9yYWdlKCk7XG5jb25zdCBhdWRpb0FmdGVyUGVyaW9kID0gcmVmPFBvbW9kb3JvU291bmRzPihwcm9wcy52YWx1ZSk7XG5cbmZ1bmN0aW9uIHBsYXlBdWRpbygpIHtcbiAgcGxheVNvdW5kKGF1ZGlvQWZ0ZXJQZXJpb2QudmFsdWUpO1xufVxuXG5hc3luYyBmdW5jdGlvbiBvbkF1ZGlvQ2hhbmdlKHRhcmdldDogYW55KSB7XG4gIGF3YWl0IHNldHRpbmdzU3RvcmFnZS5zYXZlVmFsdWUocHJvcHMub3B0aW9uLCB0YXJnZXQudmFsdWUpO1xufVxuPC9zY3JpcHQ+XG5cbjxzdHlsZSBzY29wZWQ+XG4ucGxheSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBtYXJnaW4tbGVmdDogMTBweDtcbn1cbi50aXRsZS1hdWRpbyB7XG4gIGZvbnQtc2l6ZTogMTVweDtcbn1cbi5wcmV2aWV3IHtcbiAgY29sb3I6IGdyZXk7XG59XG4ub3B0aW9uIHtcbiAgaGVpZ2h0OiAzOHB4O1xuICBtYXJnaW4tbGVmdDogMTVweDtcbn1cbjwvc3R5bGU+XG4iLCI8dGVtcGxhdGU+XG4gIDxwIGNsYXNzPVwidGl0bGUgbXQtMFwiPnt7IHQoJ3BvbW9kb3JvLm1lc3NhZ2UnKSB9fTwvcD5cbiAgPHAgY2xhc3M9XCJkZXNjcmlwdGlvblwiPlxuICAgIHt7IHQoJ3BvbW9kb3JvLmRlc2NyaXB0aW9uJykgfX1cbiAgPC9wPlxuICA8ZGl2IGNsYXNzPVwiZXhwbGFuYXRpb24tYmxvY2tcIj5cbiAgICA8cCBjbGFzcz1cImV4cGxhbmF0aW9uXCI+XG4gICAgICB7eyB0KCdwb21vZG9yb0V4cGxhbmF0aW9uSWNvbi5tZXNzYWdlJykgfX1cbiAgICAgIDxzcGFuPjxpbWcgY2xhc3M9XCJtbC01XCIgc3JjPVwiLi4vYXNzZXRzL2ljb25zL3BvbW9kb3JvLnBuZ1wiIGhlaWdodD1cIjMwXCIgLz48L3NwYW4+LlxuICAgICAge3sgdCgncG9tb2Rvcm9FeHBsYW5hdGlvbkljb24uZGVzY3JpcHRpb24nKSB9fVxuICAgICAgPGltZyBjbGFzcz1cIm1sLTVcIiBzcmM9XCIuLi9hc3NldHMvaWNvbnMvcG9tb2Rvcm8tcmVzdC5wbmdcIiBoZWlnaHQ9XCIzMFwiIC8+LlxuICAgIDwvcD5cbiAgICA8cCBjbGFzcz1cImV4cGxhbmF0aW9uXCI+XG4gICAgICB7eyB0KCdwb21vZG9yb0V4cGxhbmF0aW9uVGltZS5tZXNzYWdlJykgfX1cbiAgICA8L3A+XG4gICAgPHAgY2xhc3M9XCJleHBsYW5hdGlvblwiPnt7IHQoJ3BvbW9kb3JvRXhwbGFuYXRpb25TdG9wLm1lc3NhZ2UnKSB9fTwvcD5cbiAgPC9kaXY+XG4gIDxkaXYgOmNsYXNzPVwiaXNFbmFibGVkID8gJ2Rpc2FibGVkJyA6ICcnXCI+XG4gICAgPGRpdiBjbGFzcz1cInBvbW9kb3JvLWJsb2NrIG10LTIwXCI+XG4gICAgICA8cCBjbGFzcz1cInRpdGxlXCI+e3sgdCgncG9tb2Rvcm9Xb3JrLm1lc3NhZ2UnKSB9fTwvcD5cbiAgICAgIDxWdWVEYXRlUGlja2VyIHYtbW9kZWw9XCJ3b3JrVGltZVwiIHRpbWUtcGlja2VyIGNsYXNzPVwiZGF0ZS1waWNrZXJcIiAvPlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJwb21vZG9yby1ibG9ja1wiPlxuICAgICAgPFBvbW9kb3JvU291bmRzU2VsZWN0b3JcbiAgICAgICAgdi1pZj1cImF1ZGlvQWZ0ZXJXb3JrXCJcbiAgICAgICAgOm9wdGlvbj1cIlN0b3JhZ2VQYXJhbXMuUE9NT0RPUk9fQVVESU9fQUZURVJfV09SS1wiXG4gICAgICAgIDp2YWx1ZT1cImF1ZGlvQWZ0ZXJXb3JrXCJcbiAgICAgIC8+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cInBvbW9kb3JvLWJsb2NrXCI+XG4gICAgICA8cCBjbGFzcz1cInRpdGxlXCI+e3sgdCgncG9tb2Rvcm9SZXN0Lm1lc3NhZ2UnKSB9fTwvcD5cbiAgICAgIDxWdWVEYXRlUGlja2VyIHYtbW9kZWw9XCJyZXN0VGltZVwiIHRpbWUtcGlja2VyIGNsYXNzPVwiZGF0ZS1waWNrZXJcIiAvPlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJwb21vZG9yby1ibG9ja1wiPlxuICAgICAgPFBvbW9kb3JvU291bmRzU2VsZWN0b3JcbiAgICAgICAgdi1pZj1cImF1ZGlvQWZ0ZXJSZXN0XCJcbiAgICAgICAgOm9wdGlvbj1cIlN0b3JhZ2VQYXJhbXMuUE9NT0RPUk9fQVVESU9fQUZURVJfUkVTVFwiXG4gICAgICAgIDp2YWx1ZT1cImF1ZGlvQWZ0ZXJSZXN0XCJcbiAgICAgIC8+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cInBvbW9kb3JvLWJsb2NrXCI+XG4gICAgICA8cCBjbGFzcz1cInRpdGxlXCI+e3sgdCgncG9tb2Rvcm9GcmVxdWVuY3kubWVzc2FnZScpIH19PC9wPlxuICAgICAgPGlucHV0IHR5cGU9XCJudW1iZXJcIiBjbGFzcz1cImZyZXF1ZW5jeVwiIHYtbW9kZWw9XCJmcmVxdWVuY3lcIiAvPlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJwb21vZG9yby1ibG9ja1wiPlxuICAgICAgPFBvbW9kb3JvU291bmRzU2VsZWN0b3JcbiAgICAgICAgdi1pZj1cImF1ZGlvQWZ0ZXJGaW5pc2hlZFwiXG4gICAgICAgIDpvcHRpb249XCJTdG9yYWdlUGFyYW1zLlBPTU9ET1JPX0FVRElPX0FGVEVSX0ZJTklTSEVEXCJcbiAgICAgICAgOnZhbHVlPVwiYXVkaW9BZnRlckZpbmlzaGVkXCJcbiAgICAgIC8+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuICA8YnV0dG9uXG4gICAgY2xhc3M9XCJkLWlubGluZS1ibG9jayBtdC0xNVwiXG4gICAgOmNsYXNzPVwiW2lzRW5hYmxlZCA/ICdzdG9wJyA6ICdzdGFydCcsIGlzRGlzYWJsZWQgPyAnZGlzYWJsZWQnIDogJyddXCJcbiAgICBAY2xpY2s9XCJjaGFuZ2VTdGF0dXMoKVwiXG4gID5cbiAgICA8aW1nIHYtaWY9XCJpc0VuYWJsZWRcIiBjbGFzcz1cIm1sLTVcIiBzcmM9XCIuLi9hc3NldHMvaWNvbnMvc3RvcC5zdmdcIiBoZWlnaHQ9XCIyMFwiIC8+XG4gICAgPGltZyB2LWlmPVwiIWlzRW5hYmxlZFwiIGNsYXNzPVwibWwtNVwiIHNyYz1cIi4uL2Fzc2V0cy9pY29ucy9zdGFydC5zdmdcIiBoZWlnaHQ9XCIyMlwiIC8+XG4gICAge3sgIWlzRW5hYmxlZCA/IHQoJ3N0YXJ0Lm1lc3NhZ2UnKSA6IHQoJ3N0b3AubWVzc2FnZScpIH19XG4gIDwvYnV0dG9uPlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdCBsYW5nPVwidHNcIj5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbmFtZTogJ1BvbW9kb3JvJyxcbn07XG48L3NjcmlwdD5cblxuPHNjcmlwdCBsYW5nPVwidHNcIiBzZXR1cD5cbmltcG9ydCB7IFJlZiwgY29tcHV0ZWQsIG9uTW91bnRlZCwgcmVmIH0gZnJvbSAndnVlJztcbmltcG9ydCB7IGNvbnZlcnRISE1NVG9TZWNvbmRzLCBjb252ZXJ0U2Vjb25kc1RvSEhNTSB9IGZyb20gJy4uL3V0aWxzL2NvbnZlcnRlcic7XG5pbXBvcnQgeyB1c2VJMThuIH0gZnJvbSAndnVlLWkxOG4nO1xuaW1wb3J0IHsgaW5qZWN0U3RvcmFnZSB9IGZyb20gJy4uL3N0b3JhZ2UvaW5qZWN0LXN0b3JhZ2UnO1xuaW1wb3J0IHtcbiAgSVNfUE9NT0RPUk9fRU5BQkxFRF9ERUZBVUxULFxuICBQT01PRE9ST19BVURJT19BRlRFUl9GSU5JU0hFRF9ERUZBVUxULFxuICBQT01PRE9ST19BVURJT19BRlRFUl9SRVNUX0RFRkFVTFQsXG4gIFBPTU9ET1JPX0FVRElPX0FGVEVSX1dPUktfREVGQVVMVCxcbiAgUE9NT0RPUk9fRlJFUVVFTkNZX0RFRkFVTFQsXG4gIFBPTU9ET1JPX0lOVEVSVkFMX1JFU1RfREVGQVVMVCxcbiAgUE9NT0RPUk9fSU5URVJWQUxfV09SS19ERUZBVUxULFxuICBTdG9yYWdlUGFyYW1zLFxufSBmcm9tICcuLi9zdG9yYWdlL3N0b3JhZ2UtcGFyYW1zJztcbmltcG9ydCB7IFRpbWUgfSBmcm9tICcuLi91dGlscy90aW1lJztcbmltcG9ydCB7IGxvZ2dlciB9IGZyb20gJy4uL3V0aWxzL2xvZ2dlcic7XG5pbXBvcnQgeyB1c2VCYWRnZSwgQmFkZ2VDb2xvciwgQmFkZ2VJY29uIH0gZnJvbSAnLi4vZnVuY3Rpb25zL3VzZUJhZGdlJztcbmltcG9ydCB7IFBvbW9kb3JvU291bmRzIH0gZnJvbSAnLi4vdXRpbHMvcG9tb2Rvcm8nO1xuaW1wb3J0IFBvbW9kb3JvU291bmRzU2VsZWN0b3IgZnJvbSAnLi4vY29tcG9uZW50cy9Qb21vZG9yb1NvdW5kc1NlbGVjdG9yLnZ1ZSc7XG5pbXBvcnQgQnJvd3NlciBmcm9tICd3ZWJleHRlbnNpb24tcG9seWZpbGwnO1xuXG5jb25zdCB7IHQgfSA9IHVzZUkxOG4oKTtcbmNvbnN0IHNldHRpbmdzU3RvcmFnZSA9IGluamVjdFN0b3JhZ2UoKTtcblxuY29uc3Qgd29ya1RpbWUgPSByZWY8VGltZT4oe1xuICBob3VyczogMCxcbiAgbWludXRlczogMjUsXG59KTtcbmNvbnN0IHJlc3RUaW1lID0gcmVmPFRpbWU+KHtcbiAgaG91cnM6IDAsXG4gIG1pbnV0ZXM6IDUsXG59KTtcbmNvbnN0IGZyZXF1ZW5jeSA9IHJlZjxudW1iZXI+KDMpO1xuY29uc3QgaXNFbmFibGVkID0gcmVmPGJvb2xlYW4+KCk7XG5jb25zdCBhdWRpb0FmdGVyV29yayA9IHJlZjxQb21vZG9yb1NvdW5kcz4oKTtcbmNvbnN0IGF1ZGlvQWZ0ZXJSZXN0ID0gcmVmPFBvbW9kb3JvU291bmRzPigpO1xuY29uc3QgYXVkaW9BZnRlckZpbmlzaGVkID0gcmVmPFBvbW9kb3JvU291bmRzPigpO1xuY29uc3QgaXNEaXNhYmxlZCA9IGNvbXB1dGVkKFxuICAoKSA9PiBmcmVxdWVuY3kudmFsdWUgPD0gMCB8fCB0aW1lSXNFbXB0eSh3b3JrVGltZSkgfHwgdGltZUlzRW1wdHkocmVzdFRpbWUpLFxuKTtcblxub25Nb3VudGVkKGFzeW5jICgpID0+IHtcbiAgaXNFbmFibGVkLnZhbHVlID0gYXdhaXQgc2V0dGluZ3NTdG9yYWdlLmdldFZhbHVlKFxuICAgIFN0b3JhZ2VQYXJhbXMuSVNfUE9NT0RPUk9fRU5BQkxFRCxcbiAgICBJU19QT01PRE9ST19FTkFCTEVEX0RFRkFVTFQsXG4gICk7XG4gIHdvcmtUaW1lLnZhbHVlID0gY29udmVydFNlY29uZHNUb0hITU0oXG4gICAgYXdhaXQgc2V0dGluZ3NTdG9yYWdlLmdldFZhbHVlKFxuICAgICAgU3RvcmFnZVBhcmFtcy5QT01PRE9ST19JTlRFUlZBTF9XT1JLLFxuICAgICAgUE9NT0RPUk9fSU5URVJWQUxfV09SS19ERUZBVUxULFxuICAgICksXG4gICk7XG4gIHJlc3RUaW1lLnZhbHVlID0gY29udmVydFNlY29uZHNUb0hITU0oXG4gICAgYXdhaXQgc2V0dGluZ3NTdG9yYWdlLmdldFZhbHVlKFxuICAgICAgU3RvcmFnZVBhcmFtcy5QT01PRE9ST19JTlRFUlZBTF9SRVNULFxuICAgICAgUE9NT0RPUk9fSU5URVJWQUxfUkVTVF9ERUZBVUxULFxuICAgICksXG4gICk7XG4gIGZyZXF1ZW5jeS52YWx1ZSA9IGF3YWl0IHNldHRpbmdzU3RvcmFnZS5nZXRWYWx1ZShcbiAgICBTdG9yYWdlUGFyYW1zLlBPTU9ET1JPX0ZSRVFVRU5DWSxcbiAgICBQT01PRE9ST19GUkVRVUVOQ1lfREVGQVVMVCxcbiAgKTtcblxuICBhdWRpb0FmdGVyV29yay52YWx1ZSA9IGF3YWl0IHNldHRpbmdzU3RvcmFnZS5nZXRWYWx1ZShcbiAgICBTdG9yYWdlUGFyYW1zLlBPTU9ET1JPX0FVRElPX0FGVEVSX1dPUkssXG4gICAgUE9NT0RPUk9fQVVESU9fQUZURVJfV09SS19ERUZBVUxULFxuICApO1xuXG4gIGF1ZGlvQWZ0ZXJSZXN0LnZhbHVlID0gYXdhaXQgc2V0dGluZ3NTdG9yYWdlLmdldFZhbHVlKFxuICAgIFN0b3JhZ2VQYXJhbXMuUE9NT0RPUk9fQVVESU9fQUZURVJfUkVTVCxcbiAgICBQT01PRE9ST19BVURJT19BRlRFUl9SRVNUX0RFRkFVTFQsXG4gICk7XG5cbiAgYXVkaW9BZnRlckZpbmlzaGVkLnZhbHVlID0gYXdhaXQgc2V0dGluZ3NTdG9yYWdlLmdldFZhbHVlKFxuICAgIFN0b3JhZ2VQYXJhbXMuUE9NT0RPUk9fQVVESU9fQUZURVJfRklOSVNIRUQsXG4gICAgUE9NT0RPUk9fQVVESU9fQUZURVJfRklOSVNIRURfREVGQVVMVCxcbiAgKTtcbn0pO1xuXG5mdW5jdGlvbiB0aW1lSXNFbXB0eSh0aW1lOiBSZWY8VGltZSB8IHVuZGVmaW5lZD4pIHtcbiAgcmV0dXJuIHRpbWUudmFsdWUgPT0gdW5kZWZpbmVkIHx8ICh0aW1lLnZhbHVlLmhvdXJzID09IDAgJiYgdGltZS52YWx1ZS5taW51dGVzID09IDApO1xufVxuXG5hc3luYyBmdW5jdGlvbiBjaGFuZ2VTdGF0dXMoKSB7XG4gIGF3YWl0IHNldHRpbmdzU3RvcmFnZS5zYXZlVmFsdWUoU3RvcmFnZVBhcmFtcy5JU19QT01PRE9ST19FTkFCTEVELCAhaXNFbmFibGVkLnZhbHVlKTtcbiAgYXdhaXQgc2V0dGluZ3NTdG9yYWdlLnNhdmVWYWx1ZShcbiAgICBTdG9yYWdlUGFyYW1zLlBPTU9ET1JPX0lOVEVSVkFMX1dPUkssXG4gICAgY29udmVydEhITU1Ub1NlY29uZHMod29ya1RpbWUudmFsdWUuaG91cnMsIHdvcmtUaW1lLnZhbHVlLm1pbnV0ZXMpLFxuICApO1xuICBhd2FpdCBzZXR0aW5nc1N0b3JhZ2Uuc2F2ZVZhbHVlKFxuICAgIFN0b3JhZ2VQYXJhbXMuUE9NT0RPUk9fSU5URVJWQUxfUkVTVCxcbiAgICBjb252ZXJ0SEhNTVRvU2Vjb25kcyhyZXN0VGltZS52YWx1ZS5ob3VycywgcmVzdFRpbWUudmFsdWUubWludXRlcyksXG4gICk7XG4gIGF3YWl0IHNldHRpbmdzU3RvcmFnZS5zYXZlVmFsdWUoU3RvcmFnZVBhcmFtcy5QT01PRE9ST19TVEFSVF9USU1FLCBuZXcgRGF0ZSgpLnRvU3RyaW5nKCkpO1xuICBhd2FpdCBzZXR0aW5nc1N0b3JhZ2Uuc2F2ZVZhbHVlKFN0b3JhZ2VQYXJhbXMuUE9NT0RPUk9fRlJFUVVFTkNZLCBmcmVxdWVuY3kudmFsdWUpO1xuXG4gIGlzRW5hYmxlZC52YWx1ZSA9ICFpc0VuYWJsZWQudmFsdWU7XG5cbiAgaWYgKGlzRW5hYmxlZC52YWx1ZSlcbiAgICBhd2FpdCB1c2VCYWRnZSh7XG4gICAgICB0ZXh0OiBudWxsLFxuICAgICAgY29sb3I6IEJhZGdlQ29sb3Iubm9uZSxcbiAgICAgIGljb246IEJhZGdlSWNvbi5wb21vZG9yb1dvcmtpbmdUaW1lLFxuICAgIH0pO1xuICBlbHNlIHtcbiAgICBhd2FpdCBzZXR0aW5nc1N0b3JhZ2Uuc2F2ZVZhbHVlKFN0b3JhZ2VQYXJhbXMuUE9NT0RPUk9fU1RBUlRfVElNRSwgbnVsbCk7XG4gICAgYXdhaXQgdXNlQmFkZ2Uoe1xuICAgICAgdGV4dDogbnVsbCxcbiAgICAgIGNvbG9yOiBCYWRnZUNvbG9yLm5vbmUsXG4gICAgICBpY29uOiBCYWRnZUljb24uZGVmYXVsdCxcbiAgICB9KTtcbiAgfVxuXG4gIGxvZ2dlci5sb2coYENoYW5nZSBwb21vZG9ybyBzdGF0dXMgdG8gJHtTdHJpbmcoaXNFbmFibGVkLnZhbHVlKS50b1VwcGVyQ2FzZSgpfWApO1xufVxuXG5mdW5jdGlvbiBwbGF5QXVkaW8oc291bmQ6IFBvbW9kb3JvU291bmRzKSB7XG4gIGNvbnN0IG15QXVkaW8gPSBuZXcgQXVkaW8oQnJvd3Nlci5ydW50aW1lLmdldFVSTChgYXNzZXRzL3BvbW9kb3JvLXNvdW5kcy8ke3NvdW5kfWApKTtcbiAgbXlBdWRpby5wbGF5KCk7XG59XG48L3NjcmlwdD5cblxuPHN0eWxlIHNjb3BlZD5cbi5wb21vZG9yby1ibG9jayB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3RhcnQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4uZGF0ZS1waWNrZXIge1xuICB3aWR0aDogMTIwcHg7XG4gIG1hcmdpbjogMCAxNXB4O1xuICB2ZXJ0aWNhbC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiAxMHB4IDA7XG59XG4uZnJlcXVlbmN5IHtcbiAgd2lkdGg6IDUwcHg7XG4gIHBhZGRpbmc6IDVweCAxMHB4O1xuICBoZWlnaHQ6IDIwcHg7XG4gIG1hcmdpbjogYXV0byAwO1xuICBtYXJnaW4tbGVmdDogMTVweDtcbn1cbi5ibG9ja2VkIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBmb250LXNpemU6IDEzcHg7XG4gIGNvbG9yOiBncmF5O1xuICBtYXJnaW4tbGVmdDogNTVweDtcbiAgbWFyZ2luLXRvcDogNXB4O1xufVxuYnV0dG9uIHtcbiAgYm9yZGVyOiBub25lO1xuICBjb2xvcjogI2ZmZjtcbiAgYm9yZGVyLXJhZGl1czogN3B4O1xuICBoZWlnaHQ6IDM2cHg7XG4gIGxpbmUtaGVpZ2h0OiAzNXB4O1xuICBwYWRkaW5nOiAwIDIwcHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBtaW4td2lkdGg6IDgwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgd2lkdGg6IDIwMHB4O1xufVxuYnV0dG9uLnN0YXJ0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDYyLCAxNDgsIDYyKSAhaW1wb3J0YW50O1xufVxuYnV0dG9uLnN0b3Age1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTkxLCA1OSwgNTkpICFpbXBvcnRhbnQ7XG59XG4uZXhwbGFuYXRpb24tYmxvY2sge1xuICBtYXJnaW46IDEwcHggMDtcbiAgcGFkZGluZzogMTVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Q3ZDdmZjtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cbi5leHBsYW5hdGlvbi1ibG9jayAuZXhwbGFuYXRpb24ge1xuICBmb250LXNpemU6IDE1cHg7XG4gIGNvbG9yOiBibGFjaztcbn1cbi5kaXNhYmxlZCB7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICBvcGFjaXR5OiAwLjU7XG59XG48L3N0eWxlPlxuIiwiPHRlbXBsYXRlPlxuICA8ZGl2IGNsYXNzPVwibWFpblwiPlxuICAgIDxwIGNsYXNzPVwiaGVhZGVyXCI+e3sgdCgndHJ5TXlPdGhlckFwcHMubWVzc2FnZScpIH19PC9wPlxuICAgIDxkaXYgY2xhc3M9XCJhcHAtYmxvY2tcIiBAY2xpY2s9XCJvcGVuQXBwTGluayhBcHAuQ2xlYXJZb3V0dWJlKVwiPlxuICAgICAgPGRpdiBjbGFzcz1cImltZy1ibG9ja1wiPlxuICAgICAgICA8aW1nIHNyYz1cIi4uL2Fzc2V0cy9pY29ucy9jbGVhci15b3V0dWJlLWxvZ28uc3ZnXCIgaGVpZ2h0PVwiNDVcIiAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2PlxuICAgICAgICA8cCBjbGFzcz1cInRpdGxlXCI+e3sgdCgnY2xlYXJZb3V0dWJlLm1lc3NhZ2UnKSB9fTwvcD5cbiAgICAgICAgPHAgY2xhc3M9XCJkZXNjcmlwdGlvblwiPlxuICAgICAgICAgIHt7IHQoJ2NsZWFyWW91dHViZS5kZXNjcmlwdGlvbicpIH19XG4gICAgICAgIDwvcD5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQgbGFuZz1cInRzXCI+XG5leHBvcnQgZGVmYXVsdCB7XG4gIG5hbWU6ICdNeUFwcHMnLFxufTtcbjwvc2NyaXB0PlxuXG48c2NyaXB0IGxhbmc9XCJ0c1wiIHNldHVwPlxuaW1wb3J0IHsgdXNlSTE4biB9IGZyb20gJ3Z1ZS1pMThuJztcbmltcG9ydCB7IENIUk9NRV9TVE9SRV9DTEVBUl9ZT1VUVUJFX1VSTCB9IGZyb20gJy4uL3V0aWxzL2Nocm9tZS11cmwnO1xuY29uc3QgeyB0IH0gPSB1c2VJMThuKCk7XG5cbmVudW0gQXBwIHtcbiAgQ2xlYXJZb3V0dWJlLFxufVxuXG5mdW5jdGlvbiBvcGVuQXBwTGluayhhcHA6IEFwcCkge1xuICBzd2l0Y2ggKGFwcCkge1xuICAgIGNhc2UgQXBwLkNsZWFyWW91dHViZTpcbiAgICAgIHdpbmRvdy5vcGVuKENIUk9NRV9TVE9SRV9DTEVBUl9ZT1VUVUJFX1VSTCwgJ19ibGFuaycpO1xuICAgICAgYnJlYWs7XG4gIH1cbn1cbjwvc2NyaXB0PlxuXG48c3R5bGUgc2NvcGVkPlxuLm1haW4ge1xuICBtYXJnaW4tdG9wOiA1MHB4O1xufVxuLmhlYWRlciB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cbi5hcHAtYmxvY2sge1xuICBtYXJnaW46IDIwcHggMDtcbiAgcGFkZGluZzogMTBweCAyMHB4O1xuICBmb250LXNpemU6IDE0cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlZmVmZWY7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIG1pbi13aWR0aDogNjU1cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGdhcDogMjBweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmFwcC1ibG9jayAuaW1nLWJsb2NrIHtcbiAgbWFyZ2luOiBhdXRvIDA7XG59XG4udGl0bGUge1xuICBmb250LXdlaWdodDogNTAwO1xuICBmb250LXNpemU6IDE1cHg7XG59XG4uZGVzY3JpcHRpb24ge1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiBibGFjaztcbn1cbmltZyB7XG4gIG1hcmdpbjogYXV0bztcbn1cbjwvc3R5bGU+XG4iLCI8dGVtcGxhdGU+XG4gIDxkaXYgY2xhc3M9XCJhYm91dFwiPlxuICAgIDxsYWJlbCBjbGFzcz1cImFib3V0LWxhYmVsXCJcbiAgICAgID5HaXRIdWI6XG4gICAgICA8YSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL1N0aWdtYXRvei93ZWItYWN0aXZpdHktdGltZS10cmFja2VyXCIgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgPmdpdGh1Yi5jb20vU3RpZ21hdG96L3dlYi1hY3Rpdml0eS10aW1lLXRyYWNrZXI8L2FcbiAgICAgID48L2xhYmVsXG4gICAgPlxuICAgIDxsYWJlbCBjbGFzcz1cImFib3V0LWxhYmVsXCJcbiAgICAgID57eyB0KCdnaXRodWIubWVzc2FnZScpIH19XG4gICAgICA8YSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL1N0aWdtYXRvei93ZWItYWN0aXZpdHktdGltZS10cmFja2VyL2lzc3Vlc1wiIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgID5HaXRIdWIgaXNzdWVzIHBhZ2U8L2FcbiAgICAgID48L2xhYmVsXG4gICAgPlxuICAgIDxsYWJlbCBjbGFzcz1cImFib3V0LWxhYmVsXCJcbiAgICAgID57eyB0KCdxdWVzdGlvbi5tZXNzYWdlJykgfX1cbiAgICAgIDxhIDpocmVmPVwiQ0hST01FX1NUT1JFX1NVUFBPUlRfVVJMXCIgdGFyZ2V0PVwiX2JsYW5rXCI+e3sgdCgnc3VwcG9ydEZvcm0ubWVzc2FnZScpIH19PC9hXG4gICAgICA+LjwvbGFiZWxcbiAgICA+XG4gICAgPGxhYmVsIGNsYXNzPVwiYWJvdXQtbGFiZWxcIlxuICAgICAgPnt7IHQoJ2RvWW91RW5qb3kubWVzc2FnZScpIH19XG4gICAgICA8YSA6aHJlZj1cIkNIUk9NRV9TVE9SRV9SRVZJRVdfVVJMXCIgdGFyZ2V0PVwiX2JsYW5rXCI+e3sgdCgncmV2aWV3Lm1lc3NhZ2UnKSB9fTwvYT48L2xhYmVsXG4gICAgPlxuICA8L2Rpdj5cbiAgPE15QXBwcyAvPlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdCBsYW5nPVwidHNcIj5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbmFtZTogJ0Fib3V0Jyxcbn07XG48L3NjcmlwdD5cblxuPHNjcmlwdCBsYW5nPVwidHNcIiBzZXR1cD5cbmltcG9ydCBNeUFwcHMgZnJvbSAnLi9NeUFwcHMudnVlJztcbmltcG9ydCB7IHVzZUkxOG4gfSBmcm9tICd2dWUtaTE4bic7XG5pbXBvcnQgeyBDSFJPTUVfU1RPUkVfU1VQUE9SVF9VUkwsIENIUk9NRV9TVE9SRV9SRVZJRVdfVVJMIH0gZnJvbSAnLi4vdXRpbHMvY2hyb21lLXVybCc7XG5jb25zdCB7IHQgfSA9IHVzZUkxOG4oKTtcbjwvc2NyaXB0PlxuXG48c3R5bGUgc2NvcGVkPlxuLmFib3V0IC5hYm91dC1sYWJlbCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgZGlzcGxheTogYmxvY2s7XG59XG48L3N0eWxlPlxuIiwiPHRlbXBsYXRlPlxuICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyXCI+XG4gICAgPGRpdiBjbGFzcz1cImJsb2NrXCI+XG4gICAgICA8cCBjbGFzcz1cInRpdGxlXCI+e3sgdCgnYWxsVGltZS5tZXNzYWdlJykgfX08L3A+XG4gICAgICA8cCBjbGFzcz1cInZhbHVlXCI+XG4gICAgICAgIHt7IGNvbnZlcnRTdW1tYXJ5VGltZVRvU3RyaW5nKGRldGFpbHMuc3VtbWFyeVRpbWUpIH19XG4gICAgICA8L3A+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cImJsb2NrXCI+XG4gICAgICA8cCBjbGFzcz1cInRpdGxlXCI+e3sgdCgnc2Vzc2lvbnMubWVzc2FnZScpIH19PC9wPlxuICAgICAgPHAgY2xhc3M9XCJ2YWx1ZVwiPlxuICAgICAgICB7eyBkZXRhaWxzLnNlc3Npb25zIH19XG4gICAgICA8L3A+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cImJsb2NrXCI+XG4gICAgICA8cCBjbGFzcz1cInRpdGxlXCI+e3sgdCgnYXZlcmFnZURhaWx5VXNhZ2UubWVzc2FnZScpIH19PC9wPlxuICAgICAgPHAgY2xhc3M9XCJ2YWx1ZVwiPlxuICAgICAgICB7eyBjb252ZXJ0U3VtbWFyeVRpbWVUb1N0cmluZyhkZXRhaWxzLmF2ZXJhZ2VUaW1lKSB9fVxuICAgICAgPC9wPlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQgbGFuZz1cInRzXCI+XG5leHBvcnQgZGVmYXVsdCB7XG4gIG5hbWU6ICdXZWJzaXRlU3RhdHNEZXRhaWxzJyxcbn07XG48L3NjcmlwdD5cblxuPHNjcmlwdCBsYW5nPVwidHNcIiBzZXR1cD5cbmltcG9ydCB7IHVzZUkxOG4gfSBmcm9tICd2dWUtaTE4bic7XG5pbXBvcnQgeyBUYWJMaXN0QnlEYXlzIH0gZnJvbSAnLi4vZHRvL3RhYkxpc3RTdW1tYXJ5JztcbmltcG9ydCB7IGNvbnZlcnRTdW1tYXJ5VGltZVRvU3RyaW5nIH0gZnJvbSAnLi4vdXRpbHMvY29udmVydGVyJztcblxuZGVmaW5lUHJvcHM8e1xuICBkZXRhaWxzOiBUYWJMaXN0QnlEYXlzO1xufT4oKTtcblxuY29uc3QgeyB0IH0gPSB1c2VJMThuKCk7XG48L3NjcmlwdD5cblxuPHN0eWxlIHNjb3BlZD5cbi50aXRsZSB7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cbi5jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogYXV0bztcbn1cbi5ibG9jayB7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzcgMjM3IDIzNyk7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIG1hcmdpbi1yaWdodDogMzBweDtcbiAgYm94LXNoYWRvdzogMTJweCAxMnB4IDJweCAxcHggcmdiKDE4NSAyNTUgMTcxKTtcbn1cbi5ibG9jayBwLnRpdGxlIHtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBjb2xvcjogZ3JleTtcbn1cbi5ibG9jayBwLnZhbHVlIHtcbiAgbWFyZ2luOiA1cHg7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cbjwvc3R5bGU+XG4iLCJpbXBvcnQgeyBDdXJyZW50VGFiSXRlbSB9IGZyb20gJy4uL2R0by9jdXJyZW50VGFiSXRlbSc7XG5pbXBvcnQgeyBEYXlUYWJzLCBUYWJMaXN0QnlEYXlzIH0gZnJvbSAnLi4vZHRvL3RhYkxpc3RTdW1tYXJ5JztcbmltcG9ydCB7IGluamVjdFRhYnNSZXBvc2l0b3J5IH0gZnJvbSAnLi4vcmVwb3NpdG9yeS9pbmplY3QtdGFicy1yZXBvc2l0b3J5JztcbmltcG9ydCB7IGlzU2FtZURheSB9IGZyb20gJ2RhdGUtZm5zJztcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVzZVRhYlN0YXRzQnlEYXlzKFxuICBkYXRlRnJvbTogRGF0ZSxcbiAgZGF0ZVRvOiBEYXRlLFxuICBkb21haW46IHN0cmluZyxcbik6IFByb21pc2U8VGFiTGlzdEJ5RGF5cyB8IG51bGw+IHtcbiAgY29uc3QgcmVwbyA9IGF3YWl0IGluamVjdFRhYnNSZXBvc2l0b3J5KCk7XG4gIGNvbnN0IHRhYiA9IHJlcG8uZ2V0VGFiKGRvbWFpbik7XG4gIGxldCBkYXlzVGFiczogRGF5VGFic1tdID0gW107XG5cbiAgaWYgKHRhYiA9PSB1bmRlZmluZWQpIHJldHVybiBudWxsO1xuXG4gIGNvbnN0IGlzVGhlU2FtZURheSA9IGlzU2FtZURheShkYXRlRnJvbSwgZGF0ZVRvKTtcblxuICBjb25zdCB1blNvcnRlZFRhYnNCeURheXMgPSBpc1RoZVNhbWVEYXlcbiAgICA/IHRhYi5kYXlzLmZpbHRlcihzID0+IGlzU2FtZURheShuZXcgRGF0ZShzLmRhdGUpLCBkYXRlRnJvbSkpXG4gICAgOiB0YWIuZGF5cy5maWx0ZXIocyA9PiBuZXcgRGF0ZShzLmRhdGUpID49IGRhdGVGcm9tICYmIG5ldyBEYXRlKHMuZGF0ZSkgPD0gZGF0ZVRvKTtcblxuICBpZiAodW5Tb3J0ZWRUYWJzQnlEYXlzLmxlbmd0aCA9PSAwKVxuICAgIHJldHVybiB7XG4gICAgICBkYXlzOiBbXSxcbiAgICAgIGF2ZXJhZ2VUaW1lOiAwLFxuICAgICAgc3VtbWFyeVRpbWU6IDAsXG4gICAgICBzZXNzaW9uczogMCxcbiAgICB9O1xuXG4gIHVuU29ydGVkVGFic0J5RGF5cy5mb3JFYWNoKHRhYkRheSA9PiB7XG4gICAgaWYgKFxuICAgICAgKG5ldyBEYXRlKHRhYkRheS5kYXRlKSA+PSBkYXRlRnJvbSAmJiBuZXcgRGF0ZSh0YWJEYXkuZGF0ZSkgPD0gZGF0ZVRvKSB8fFxuICAgICAgKGlzVGhlU2FtZURheSAmJiBpc1NhbWVEYXkobmV3IERhdGUodGFiRGF5LmRhdGUpLCBkYXRlRnJvbSkpXG4gICAgKSB7XG4gICAgICBsZXQgZGF5VGFiID0gZGF5c1RhYnMuZmluZCh4ID0+IHguZGF5ID09IHRhYkRheS5kYXRlKTtcbiAgICAgIGlmIChkYXlUYWIgPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGRheVRhYiA9IHtcbiAgICAgICAgICBkYXk6IHRhYkRheS5kYXRlLFxuICAgICAgICAgIHRhYnM6IFtdLFxuICAgICAgICAgIHRpbWU6IHRhYkRheS5zdW1tYXJ5LFxuICAgICAgICAgIHNlc3Npb25zOiB0YWJEYXkuY291bnRlcixcbiAgICAgICAgfTtcbiAgICAgICAgZGF5VGFiLnRhYnMucHVzaCh7XG4gICAgICAgICAgZmF2aWNvbjogdGFiLmZhdmljb24sXG4gICAgICAgICAgdXJsOiB0YWIudXJsLFxuICAgICAgICAgIHNlc3Npb25zOiB0YWJEYXkuY291bnRlcixcbiAgICAgICAgICBzdW1tYXJ5VGltZTogdGFiRGF5LnN1bW1hcnksXG4gICAgICAgIH0pO1xuICAgICAgICBkYXlzVGFicy5wdXNoKGRheVRhYik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBkYXlUYWIudGltZSArPSB0YWJEYXkuc3VtbWFyeTtcbiAgICAgICAgZGF5VGFiLnNlc3Npb25zICs9IHRhYkRheS5jb3VudGVyO1xuICAgICAgICBkYXlUYWIudGFicy5wdXNoKHtcbiAgICAgICAgICBmYXZpY29uOiB0YWIuZmF2aWNvbixcbiAgICAgICAgICB1cmw6IHRhYi51cmwsXG4gICAgICAgICAgc2Vzc2lvbnM6IHRhYkRheS5jb3VudGVyLFxuICAgICAgICAgIHN1bW1hcnlUaW1lOiB0YWJEYXkuc3VtbWFyeSxcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICB9KTtcblxuICBkYXlzVGFicy5zb3J0KGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgcmV0dXJuIG5ldyBEYXRlKGEuZGF5KS52YWx1ZU9mKCkgLSBuZXcgRGF0ZShiLmRheSkudmFsdWVPZigpO1xuICB9KTtcblxuICBkYXlzVGFicy5mb3JFYWNoKGRheVRhYiA9PiB7XG4gICAgZGF5VGFiLnRhYnMuc29ydChmdW5jdGlvbiAoYTogQ3VycmVudFRhYkl0ZW0sIGI6IEN1cnJlbnRUYWJJdGVtKSB7XG4gICAgICByZXR1cm4gYi5zdW1tYXJ5VGltZSAtIGEuc3VtbWFyeVRpbWU7XG4gICAgfSk7XG4gIH0pO1xuXG4gIGNvbnN0IHN1bW1hcnlUaW1lID0gZGF5c1RhYnNcbiAgICAubWFwKHggPT4geC50aW1lKVxuICAgIC5yZWR1Y2UoZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgIHJldHVybiBhICsgYjtcbiAgICB9KTtcblxuICBjb25zdCB0b3RhbFNlc3Npb25zID0gZGF5c1RhYnNcbiAgICAubWFwKHggPT4geC5zZXNzaW9ucylcbiAgICAucmVkdWNlKGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgICByZXR1cm4gYSArIGI7XG4gICAgfSk7XG5cbiAgY29uc3QgYXZlcmFnZVRpbWUgPSBNYXRoLnJvdW5kKHN1bW1hcnlUaW1lIC8gZGF5c1RhYnMubGVuZ3RoKTtcblxuICByZXR1cm4ge1xuICAgIGRheXM6IGRheXNUYWJzLFxuICAgIHN1bW1hcnlUaW1lOiBzdW1tYXJ5VGltZSxcbiAgICBhdmVyYWdlVGltZTogYXZlcmFnZVRpbWUsXG4gICAgc2Vzc2lvbnM6IHRvdGFsU2Vzc2lvbnMsXG4gIH07XG59XG4iLCI8dGVtcGxhdGU+XG4gIDxkaXYgY2xhc3M9XCJzZXR0aW5ncy1pdGVtXCI+XG4gICAgPGxhYmVsIGNsYXNzPVwidGl0bGUgbGlua1wiIEBjbGljaz1cIm9wZW5QYWdlKFNldHRpbmdzVGFiLkRhc2hib2FyZClcIj5cbiAgICAgIHt7IHQoJ2Rhc2hib2FyZC5tZXNzYWdlJykgfX1cbiAgICA8L2xhYmVsPlxuICAgIDxkaXYgY2xhc3M9XCJuby1kYXRhXCIgdi1pZj1cImlzTG9hZGluZ1wiPlxuICAgICAgPGltZyBoZWlnaHQ9XCI1NVwiIHNyYz1cIi4uL2Fzc2V0cy9pY29ucy9wcmVsb2FkZXIuZ2lmXCIgLz5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IHYtZWxzZT5cbiAgICAgIDxuby1kYXRhLWJ5LWRheXMgdi1pZj1cImNvdW50T2ZEYXlzID09IHVuZGVmaW5lZCB8fCAoY291bnRPZkRheXMgPT0gMCAmJiAhbm9EYXRhKVwiIC8+XG4gICAgICA8ZGl2IHYtZWxzZS1pZj1cIm5vRGF0YVwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwibm8tZGF0YVwiPlxuICAgICAgICAgIHt7IHQoJ25vRGF0YUZvclBlcmlvZC5tZXNzYWdlJykgfX1cbiAgICAgICAgICA8VnVlRGF0ZVBpY2tlclxuICAgICAgICAgICAgcmFuZ2VcbiAgICAgICAgICAgIDplbmFibGUtdGltZS1waWNrZXI9XCJmYWxzZVwiXG4gICAgICAgICAgICBjbGFzcz1cImRhdGUtcGlja2VyXCJcbiAgICAgICAgICAgIHYtbW9kZWw9XCJzZWxlY3RlZERhdGVcIlxuICAgICAgICAgICAgOnByZXNldC1yYW5nZXM9XCJwcmVzZXRSYW5nZXNcIlxuICAgICAgICAgICAgQHVwZGF0ZTptb2RlbC12YWx1ZT1cImhhbmRsZURhdGVcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDx0ZW1wbGF0ZSAjeWVhcmx5PVwieyBsYWJlbCwgcmFuZ2UsIHByZXNldERhdGVSYW5nZSB9XCI+XG4gICAgICAgICAgICAgIDxzcGFuIEBjbGljaz1cInByZXNldERhdGVSYW5nZShyYW5nZSlcIj57eyBsYWJlbCB9fTwvc3Bhbj5cbiAgICAgICAgICAgIDwvdGVtcGxhdGU+PC9WdWVEYXRlUGlja2VyXG4gICAgICAgICAgPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiB2LWVsc2U+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJkYXRlLWJsb2NrXCI+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxGYXZpY29uIDpmYXZpY29uPVwidGFiPy5mYXZpY29uXCIgOnR5cGU9XCJnZXRUeXBlT2ZVcmwodGFiPy51cmwhKVwiIC8+XG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cInRpdGxlXCI+IHt7IHRhYj8udXJsIH19PC9zcGFuPlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPFZ1ZURhdGVQaWNrZXJcbiAgICAgICAgICAgIHJhbmdlXG4gICAgICAgICAgICA6ZW5hYmxlLXRpbWUtcGlja2VyPVwiZmFsc2VcIlxuICAgICAgICAgICAgY2xhc3M9XCJkYXRlLXBpY2tlciBtdC0xMFwiXG4gICAgICAgICAgICB2LW1vZGVsPVwic2VsZWN0ZWREYXRlXCJcbiAgICAgICAgICAgIDpwcmVzZXQtcmFuZ2VzPVwicHJlc2V0UmFuZ2VzXCJcbiAgICAgICAgICAgIEB1cGRhdGU6bW9kZWwtdmFsdWU9XCJoYW5kbGVEYXRlXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8dGVtcGxhdGUgI3llYXJseT1cInsgbGFiZWwsIHJhbmdlLCBwcmVzZXREYXRlUmFuZ2UgfVwiPlxuICAgICAgICAgICAgICA8c3BhbiBAY2xpY2s9XCJwcmVzZXREYXRlUmFuZ2UocmFuZ2UpXCI+e3sgbGFiZWwgfX08L3NwYW4+XG4gICAgICAgICAgICA8L3RlbXBsYXRlPjwvVnVlRGF0ZVBpY2tlclxuICAgICAgICAgID5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJtdC0yMCBtbC0xMCBtci0xMCBieS1kYXlzLWNoYXJ0XCI+XG4gICAgICAgICAgPGJ5LWRheXMtY2hhcnQgOmRhdGE9XCJ0YWJJbmZvQnlEYXlzIVwiIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDx3ZWJzaXRlLXN0YXRzLWRldGFpbHMgOmRldGFpbHM9XCJ0YWJJbmZvQnlEYXlzIVwiIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdCBsYW5nPVwidHNcIj5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbmFtZTogJ1dlYnNpdGVTdGF0cycsXG59O1xuPC9zY3JpcHQ+XG5cbjxzY3JpcHQgbGFuZz1cInRzXCIgc2V0dXA+XG5pbXBvcnQgeyB1c2VJMThuIH0gZnJvbSAndnVlLWkxOG4nO1xuaW1wb3J0IEZhdmljb24gZnJvbSAnLi9GYXZpY29uLnZ1ZSc7XG5pbXBvcnQgTm9EYXRhQnlEYXlzIGZyb20gJy4vTm9EYXRhQnlEYXlzLnZ1ZSc7XG5pbXBvcnQgQnlEYXlzQ2hhcnQgZnJvbSAnLi4vY29tcG9uZW50cy9CeURheXNDaGFydC52dWUnO1xuaW1wb3J0IFdlYnNpdGVTdGF0c0RldGFpbHMgZnJvbSAnLi4vY29tcG9uZW50cy9XZWJzaXRlU3RhdHNEZXRhaWxzLnZ1ZSc7XG5pbXBvcnQgeyBvcGVuUGFnZSB9IGZyb20gJy4uL3V0aWxzL29wZW4tcGFnZSc7XG5pbXBvcnQgeyBjb21wdXRlZCwgb25Nb3VudGVkLCByZWYgfSBmcm9tICd2dWUnO1xuaW1wb3J0IHsgU2V0dGluZ3NUYWIgfSBmcm9tICcuLi91dGlscy9lbnVtcyc7XG5pbXBvcnQgeyBUaGlzV2Vla1JhbmdlLCByYW5nZXMgfSBmcm9tICcuLi91dGlscy9kYXRlJztcbmltcG9ydCB7IHVzZVRhYlN0YXRzQnlEYXlzIH0gZnJvbSAnLi4vZnVuY3Rpb25zL3VzZVRhYlN0YXRzQnlEYXlzJztcbmltcG9ydCB7IFRhYkxpc3RCeURheXMgfSBmcm9tICcuLi9kdG8vdGFiTGlzdFN1bW1hcnknO1xuaW1wb3J0IHsgVGFiIH0gZnJvbSAnLi4vZW50aXR5L3RhYic7XG5pbXBvcnQgeyBnZXRUeXBlT2ZVcmwgfSBmcm9tICcuLi91dGlscy9nZXQtdHlwZS1vZi11cmwnO1xuaW1wb3J0IHsgaW5qZWN0VGFic1JlcG9zaXRvcnkgfSBmcm9tICcuLi9yZXBvc2l0b3J5L2luamVjdC10YWJzLXJlcG9zaXRvcnknO1xuXG5jb25zdCBwcm9wcyA9IGRlZmluZVByb3BzPHtcbiAgZG9tYWluOiBzdHJpbmc7XG59PigpO1xuXG5jb25zdCB7IHQgfSA9IHVzZUkxOG4oKTtcbmNvbnN0IHByZXNldFJhbmdlcyA9IHJhbmdlcygpO1xuXG5jb25zdCB0YWJJbmZvQnlEYXlzID0gcmVmPFRhYkxpc3RCeURheXM+KCk7XG5jb25zdCBpc0xvYWRpbmcgPSByZWY8Ym9vbGVhbj4oKTtcbmNvbnN0IG5vRGF0YSA9IHJlZjxib29sZWFuPihmYWxzZSk7XG5jb25zdCBzZWxlY3RlZERhdGUgPSByZWY8RGF0ZVtdPigpO1xuY29uc3QgdGFiID0gcmVmPFRhYj4oKTtcblxuY29uc3QgY291bnRPZkRheXMgPSBjb21wdXRlZCgoKSA9PlxuICB0YWJJbmZvQnlEYXlzLnZhbHVlICE9IHVuZGVmaW5lZCA/IHRhYkluZm9CeURheXMudmFsdWUuZGF5cy5sZW5ndGggOiAwLFxuKTtcblxub25Nb3VudGVkKGFzeW5jICgpID0+IHtcbiAgaXNMb2FkaW5nLnZhbHVlID0gdHJ1ZTtcbiAgc2VsZWN0ZWREYXRlLnZhbHVlID0gVGhpc1dlZWtSYW5nZTtcbiAgY29uc3QgZGF0ZUZyb20gPSBzZWxlY3RlZERhdGUudmFsdWU/LlswXSBhcyBEYXRlO1xuICBjb25zdCBkYXRlVG8gPSBzZWxlY3RlZERhdGUudmFsdWU/LlsxXSBhcyBEYXRlO1xuICBjb25zdCByZXBvID0gYXdhaXQgaW5qZWN0VGFic1JlcG9zaXRvcnkoKTtcbiAgdGFiLnZhbHVlID0gcmVwby5nZXRUYWIocHJvcHMuZG9tYWluKTtcbiAgaWYgKHRhYiA9PSB1bmRlZmluZWQpIHtcbiAgICBub0RhdGEudmFsdWUgPSB0cnVlO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGF3YWl0IGxvYWRMaXN0KGRhdGVGcm9tLCBkYXRlVG8pO1xufSk7XG5cbmFzeW5jIGZ1bmN0aW9uIGxvYWRMaXN0KGRhdGVGcm9tOiBEYXRlLCBkYXRlVG86IERhdGUpIHtcbiAgY29uc3QgdGFiTGlzdCA9IGF3YWl0IHVzZVRhYlN0YXRzQnlEYXlzKGRhdGVGcm9tLCBkYXRlVG8sIHRhYi52YWx1ZT8udXJsISk7XG4gIGlmICh0YWJMaXN0ICE9IG51bGwpIHtcbiAgICB0YWJJbmZvQnlEYXlzLnZhbHVlID0gdGFiTGlzdDtcbiAgICBpZiAodGFiTGlzdC5kYXlzLmxlbmd0aCA9PSAwICYmIHRhYkxpc3Quc3VtbWFyeVRpbWUgPT0gMCkgbm9EYXRhLnZhbHVlID0gdHJ1ZTtcbiAgICBlbHNlIG5vRGF0YS52YWx1ZSA9IGZhbHNlO1xuICB9XG4gIGlzTG9hZGluZy52YWx1ZSA9IGZhbHNlO1xufVxuXG5hc3luYyBmdW5jdGlvbiBoYW5kbGVEYXRlKG1vZGVsRGF0YTogRGF0ZVtdKSB7XG4gIHNlbGVjdGVkRGF0ZS52YWx1ZSA9IG1vZGVsRGF0YTtcbiAgY29uc3QgZGF0ZUZyb20gPSBzZWxlY3RlZERhdGUudmFsdWU/LlswXSBhcyBEYXRlO1xuICBjb25zdCBkYXRlVG8gPSBzZWxlY3RlZERhdGUudmFsdWU/LlsxXSBhcyBEYXRlO1xuICBhd2FpdCBsb2FkTGlzdChkYXRlRnJvbSwgZGF0ZVRvKTtcbn1cbjwvc2NyaXB0PlxuXG48c3R5bGUgc2NvcGVkPlxuLmxpbmsge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGNvbG9yOiBncmV5O1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbn1cbi5kYXRlLWJsb2NrIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuLmJ5LWRheXMtY2hhcnQge1xuICBoZWlnaHQ6IDQwMHB4O1xufVxuPC9zdHlsZT5cbiIsImV4cG9ydCBkZWZhdWx0IFwiX19WSVRFX0FTU0VUX18zNTc2MWM4MV9fXCIiLCJleHBvcnQgZGVmYXVsdCBcIl9fVklURV9BU1NFVF9fOWRjYzhlMzhfX1wiIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYXNjZW5kaW5nKGEsIGIpIHtcbiAgcmV0dXJuIGEgPT0gbnVsbCB8fCBiID09IG51bGwgPyBOYU4gOiBhIDwgYiA/IC0xIDogYSA+IGIgPyAxIDogYSA+PSBiID8gMCA6IE5hTjtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGRlc2NlbmRpbmcoYSwgYikge1xuICByZXR1cm4gYSA9PSBudWxsIHx8IGIgPT0gbnVsbCA/IE5hTlxuICAgIDogYiA8IGEgPyAtMVxuICAgIDogYiA+IGEgPyAxXG4gICAgOiBiID49IGEgPyAwXG4gICAgOiBOYU47XG59XG4iLCJpbXBvcnQgYXNjZW5kaW5nIGZyb20gXCIuL2FzY2VuZGluZy5qc1wiO1xuaW1wb3J0IGRlc2NlbmRpbmcgZnJvbSBcIi4vZGVzY2VuZGluZy5qc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBiaXNlY3RvcihmKSB7XG4gIGxldCBjb21wYXJlMSwgY29tcGFyZTIsIGRlbHRhO1xuXG4gIC8vIElmIGFuIGFjY2Vzc29yIGlzIHNwZWNpZmllZCwgcHJvbW90ZSBpdCB0byBhIGNvbXBhcmF0b3IuIEluIHRoaXMgY2FzZSB3ZVxuICAvLyBjYW4gdGVzdCB3aGV0aGVyIHRoZSBzZWFyY2ggdmFsdWUgaXMgKHNlbGYtKSBjb21wYXJhYmxlLiBXZSBjYW7igJl0IGRvIHRoaXNcbiAgLy8gZm9yIGEgY29tcGFyYXRvciAoZXhjZXB0IGZvciBzcGVjaWZpYywga25vd24gY29tcGFyYXRvcnMpIGJlY2F1c2Ugd2UgY2Fu4oCZdFxuICAvLyB0ZWxsIGlmIHRoZSBjb21wYXJhdG9yIGlzIHN5bW1ldHJpYywgYW5kIGFuIGFzeW1tZXRyaWMgY29tcGFyYXRvciBjYW7igJl0IGJlXG4gIC8vIHVzZWQgdG8gdGVzdCB3aGV0aGVyIGEgc2luZ2xlIHZhbHVlIGlzIGNvbXBhcmFibGUuXG4gIGlmIChmLmxlbmd0aCAhPT0gMikge1xuICAgIGNvbXBhcmUxID0gYXNjZW5kaW5nO1xuICAgIGNvbXBhcmUyID0gKGQsIHgpID0+IGFzY2VuZGluZyhmKGQpLCB4KTtcbiAgICBkZWx0YSA9IChkLCB4KSA9PiBmKGQpIC0geDtcbiAgfSBlbHNlIHtcbiAgICBjb21wYXJlMSA9IGYgPT09IGFzY2VuZGluZyB8fCBmID09PSBkZXNjZW5kaW5nID8gZiA6IHplcm87XG4gICAgY29tcGFyZTIgPSBmO1xuICAgIGRlbHRhID0gZjtcbiAgfVxuXG4gIGZ1bmN0aW9uIGxlZnQoYSwgeCwgbG8gPSAwLCBoaSA9IGEubGVuZ3RoKSB7XG4gICAgaWYgKGxvIDwgaGkpIHtcbiAgICAgIGlmIChjb21wYXJlMSh4LCB4KSAhPT0gMCkgcmV0dXJuIGhpO1xuICAgICAgZG8ge1xuICAgICAgICBjb25zdCBtaWQgPSAobG8gKyBoaSkgPj4+IDE7XG4gICAgICAgIGlmIChjb21wYXJlMihhW21pZF0sIHgpIDwgMCkgbG8gPSBtaWQgKyAxO1xuICAgICAgICBlbHNlIGhpID0gbWlkO1xuICAgICAgfSB3aGlsZSAobG8gPCBoaSk7XG4gICAgfVxuICAgIHJldHVybiBsbztcbiAgfVxuXG4gIGZ1bmN0aW9uIHJpZ2h0KGEsIHgsIGxvID0gMCwgaGkgPSBhLmxlbmd0aCkge1xuICAgIGlmIChsbyA8IGhpKSB7XG4gICAgICBpZiAoY29tcGFyZTEoeCwgeCkgIT09IDApIHJldHVybiBoaTtcbiAgICAgIGRvIHtcbiAgICAgICAgY29uc3QgbWlkID0gKGxvICsgaGkpID4+PiAxO1xuICAgICAgICBpZiAoY29tcGFyZTIoYVttaWRdLCB4KSA8PSAwKSBsbyA9IG1pZCArIDE7XG4gICAgICAgIGVsc2UgaGkgPSBtaWQ7XG4gICAgICB9IHdoaWxlIChsbyA8IGhpKTtcbiAgICB9XG4gICAgcmV0dXJuIGxvO1xuICB9XG5cbiAgZnVuY3Rpb24gY2VudGVyKGEsIHgsIGxvID0gMCwgaGkgPSBhLmxlbmd0aCkge1xuICAgIGNvbnN0IGkgPSBsZWZ0KGEsIHgsIGxvLCBoaSAtIDEpO1xuICAgIHJldHVybiBpID4gbG8gJiYgZGVsdGEoYVtpIC0gMV0sIHgpID4gLWRlbHRhKGFbaV0sIHgpID8gaSAtIDEgOiBpO1xuICB9XG5cbiAgcmV0dXJuIHtsZWZ0LCBjZW50ZXIsIHJpZ2h0fTtcbn1cblxuZnVuY3Rpb24gemVybygpIHtcbiAgcmV0dXJuIDA7XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBudW1iZXIoeCkge1xuICByZXR1cm4geCA9PT0gbnVsbCA/IE5hTiA6ICt4O1xufVxuXG5leHBvcnQgZnVuY3Rpb24qIG51bWJlcnModmFsdWVzLCB2YWx1ZW9mKSB7XG4gIGlmICh2YWx1ZW9mID09PSB1bmRlZmluZWQpIHtcbiAgICBmb3IgKGxldCB2YWx1ZSBvZiB2YWx1ZXMpIHtcbiAgICAgIGlmICh2YWx1ZSAhPSBudWxsICYmICh2YWx1ZSA9ICt2YWx1ZSkgPj0gdmFsdWUpIHtcbiAgICAgICAgeWllbGQgdmFsdWU7XG4gICAgICB9XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGxldCBpbmRleCA9IC0xO1xuICAgIGZvciAobGV0IHZhbHVlIG9mIHZhbHVlcykge1xuICAgICAgaWYgKCh2YWx1ZSA9IHZhbHVlb2YodmFsdWUsICsraW5kZXgsIHZhbHVlcykpICE9IG51bGwgJiYgKHZhbHVlID0gK3ZhbHVlKSA+PSB2YWx1ZSkge1xuICAgICAgICB5aWVsZCB2YWx1ZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCBhc2NlbmRpbmcgZnJvbSBcIi4vYXNjZW5kaW5nLmpzXCI7XG5pbXBvcnQgYmlzZWN0b3IgZnJvbSBcIi4vYmlzZWN0b3IuanNcIjtcbmltcG9ydCBudW1iZXIgZnJvbSBcIi4vbnVtYmVyLmpzXCI7XG5cbmNvbnN0IGFzY2VuZGluZ0Jpc2VjdCA9IGJpc2VjdG9yKGFzY2VuZGluZyk7XG5leHBvcnQgY29uc3QgYmlzZWN0UmlnaHQgPSBhc2NlbmRpbmdCaXNlY3QucmlnaHQ7XG5leHBvcnQgY29uc3QgYmlzZWN0TGVmdCA9IGFzY2VuZGluZ0Jpc2VjdC5sZWZ0O1xuZXhwb3J0IGNvbnN0IGJpc2VjdENlbnRlciA9IGJpc2VjdG9yKG51bWJlcikuY2VudGVyO1xuZXhwb3J0IGRlZmF1bHQgYmlzZWN0UmlnaHQ7XG4iLCJjb25zdCBlMTAgPSBNYXRoLnNxcnQoNTApLFxuICAgIGU1ID0gTWF0aC5zcXJ0KDEwKSxcbiAgICBlMiA9IE1hdGguc3FydCgyKTtcblxuZnVuY3Rpb24gdGlja1NwZWMoc3RhcnQsIHN0b3AsIGNvdW50KSB7XG4gIGNvbnN0IHN0ZXAgPSAoc3RvcCAtIHN0YXJ0KSAvIE1hdGgubWF4KDAsIGNvdW50KSxcbiAgICAgIHBvd2VyID0gTWF0aC5mbG9vcihNYXRoLmxvZzEwKHN0ZXApKSxcbiAgICAgIGVycm9yID0gc3RlcCAvIE1hdGgucG93KDEwLCBwb3dlciksXG4gICAgICBmYWN0b3IgPSBlcnJvciA+PSBlMTAgPyAxMCA6IGVycm9yID49IGU1ID8gNSA6IGVycm9yID49IGUyID8gMiA6IDE7XG4gIGxldCBpMSwgaTIsIGluYztcbiAgaWYgKHBvd2VyIDwgMCkge1xuICAgIGluYyA9IE1hdGgucG93KDEwLCAtcG93ZXIpIC8gZmFjdG9yO1xuICAgIGkxID0gTWF0aC5yb3VuZChzdGFydCAqIGluYyk7XG4gICAgaTIgPSBNYXRoLnJvdW5kKHN0b3AgKiBpbmMpO1xuICAgIGlmIChpMSAvIGluYyA8IHN0YXJ0KSArK2kxO1xuICAgIGlmIChpMiAvIGluYyA+IHN0b3ApIC0taTI7XG4gICAgaW5jID0gLWluYztcbiAgfSBlbHNlIHtcbiAgICBpbmMgPSBNYXRoLnBvdygxMCwgcG93ZXIpICogZmFjdG9yO1xuICAgIGkxID0gTWF0aC5yb3VuZChzdGFydCAvIGluYyk7XG4gICAgaTIgPSBNYXRoLnJvdW5kKHN0b3AgLyBpbmMpO1xuICAgIGlmIChpMSAqIGluYyA8IHN0YXJ0KSArK2kxO1xuICAgIGlmIChpMiAqIGluYyA+IHN0b3ApIC0taTI7XG4gIH1cbiAgaWYgKGkyIDwgaTEgJiYgMC41IDw9IGNvdW50ICYmIGNvdW50IDwgMikgcmV0dXJuIHRpY2tTcGVjKHN0YXJ0LCBzdG9wLCBjb3VudCAqIDIpO1xuICByZXR1cm4gW2kxLCBpMiwgaW5jXTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdGlja3Moc3RhcnQsIHN0b3AsIGNvdW50KSB7XG4gIHN0b3AgPSArc3RvcCwgc3RhcnQgPSArc3RhcnQsIGNvdW50ID0gK2NvdW50O1xuICBpZiAoIShjb3VudCA+IDApKSByZXR1cm4gW107XG4gIGlmIChzdGFydCA9PT0gc3RvcCkgcmV0dXJuIFtzdGFydF07XG4gIGNvbnN0IHJldmVyc2UgPSBzdG9wIDwgc3RhcnQsIFtpMSwgaTIsIGluY10gPSByZXZlcnNlID8gdGlja1NwZWMoc3RvcCwgc3RhcnQsIGNvdW50KSA6IHRpY2tTcGVjKHN0YXJ0LCBzdG9wLCBjb3VudCk7XG4gIGlmICghKGkyID49IGkxKSkgcmV0dXJuIFtdO1xuICBjb25zdCBuID0gaTIgLSBpMSArIDEsIHRpY2tzID0gbmV3IEFycmF5KG4pO1xuICBpZiAocmV2ZXJzZSkge1xuICAgIGlmIChpbmMgPCAwKSBmb3IgKGxldCBpID0gMDsgaSA8IG47ICsraSkgdGlja3NbaV0gPSAoaTIgLSBpKSAvIC1pbmM7XG4gICAgZWxzZSBmb3IgKGxldCBpID0gMDsgaSA8IG47ICsraSkgdGlja3NbaV0gPSAoaTIgLSBpKSAqIGluYztcbiAgfSBlbHNlIHtcbiAgICBpZiAoaW5jIDwgMCkgZm9yIChsZXQgaSA9IDA7IGkgPCBuOyArK2kpIHRpY2tzW2ldID0gKGkxICsgaSkgLyAtaW5jO1xuICAgIGVsc2UgZm9yIChsZXQgaSA9IDA7IGkgPCBuOyArK2kpIHRpY2tzW2ldID0gKGkxICsgaSkgKiBpbmM7XG4gIH1cbiAgcmV0dXJuIHRpY2tzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdGlja0luY3JlbWVudChzdGFydCwgc3RvcCwgY291bnQpIHtcbiAgc3RvcCA9ICtzdG9wLCBzdGFydCA9ICtzdGFydCwgY291bnQgPSArY291bnQ7XG4gIHJldHVybiB0aWNrU3BlYyhzdGFydCwgc3RvcCwgY291bnQpWzJdO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdGlja1N0ZXAoc3RhcnQsIHN0b3AsIGNvdW50KSB7XG4gIHN0b3AgPSArc3RvcCwgc3RhcnQgPSArc3RhcnQsIGNvdW50ID0gK2NvdW50O1xuICBjb25zdCByZXZlcnNlID0gc3RvcCA8IHN0YXJ0LCBpbmMgPSByZXZlcnNlID8gdGlja0luY3JlbWVudChzdG9wLCBzdGFydCwgY291bnQpIDogdGlja0luY3JlbWVudChzdGFydCwgc3RvcCwgY291bnQpO1xuICByZXR1cm4gKHJldmVyc2UgPyAtMSA6IDEpICogKGluYyA8IDAgPyAxIC8gLWluYyA6IGluYyk7XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbih4KSB7XG4gIHJldHVybiB4O1xufVxuIiwiaW1wb3J0IGlkZW50aXR5IGZyb20gXCIuL2lkZW50aXR5LmpzXCI7XG5cbnZhciB0b3AgPSAxLFxuICAgIHJpZ2h0ID0gMixcbiAgICBib3R0b20gPSAzLFxuICAgIGxlZnQgPSA0LFxuICAgIGVwc2lsb24gPSAxZS02O1xuXG5mdW5jdGlvbiB0cmFuc2xhdGVYKHgpIHtcbiAgcmV0dXJuIFwidHJhbnNsYXRlKFwiICsgeCArIFwiLDApXCI7XG59XG5cbmZ1bmN0aW9uIHRyYW5zbGF0ZVkoeSkge1xuICByZXR1cm4gXCJ0cmFuc2xhdGUoMCxcIiArIHkgKyBcIilcIjtcbn1cblxuZnVuY3Rpb24gbnVtYmVyKHNjYWxlKSB7XG4gIHJldHVybiBkID0+ICtzY2FsZShkKTtcbn1cblxuZnVuY3Rpb24gY2VudGVyKHNjYWxlLCBvZmZzZXQpIHtcbiAgb2Zmc2V0ID0gTWF0aC5tYXgoMCwgc2NhbGUuYmFuZHdpZHRoKCkgLSBvZmZzZXQgKiAyKSAvIDI7XG4gIGlmIChzY2FsZS5yb3VuZCgpKSBvZmZzZXQgPSBNYXRoLnJvdW5kKG9mZnNldCk7XG4gIHJldHVybiBkID0+ICtzY2FsZShkKSArIG9mZnNldDtcbn1cblxuZnVuY3Rpb24gZW50ZXJpbmcoKSB7XG4gIHJldHVybiAhdGhpcy5fX2F4aXM7XG59XG5cbmZ1bmN0aW9uIGF4aXMob3JpZW50LCBzY2FsZSkge1xuICB2YXIgdGlja0FyZ3VtZW50cyA9IFtdLFxuICAgICAgdGlja1ZhbHVlcyA9IG51bGwsXG4gICAgICB0aWNrRm9ybWF0ID0gbnVsbCxcbiAgICAgIHRpY2tTaXplSW5uZXIgPSA2LFxuICAgICAgdGlja1NpemVPdXRlciA9IDYsXG4gICAgICB0aWNrUGFkZGluZyA9IDMsXG4gICAgICBvZmZzZXQgPSB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiICYmIHdpbmRvdy5kZXZpY2VQaXhlbFJhdGlvID4gMSA/IDAgOiAwLjUsXG4gICAgICBrID0gb3JpZW50ID09PSB0b3AgfHwgb3JpZW50ID09PSBsZWZ0ID8gLTEgOiAxLFxuICAgICAgeCA9IG9yaWVudCA9PT0gbGVmdCB8fCBvcmllbnQgPT09IHJpZ2h0ID8gXCJ4XCIgOiBcInlcIixcbiAgICAgIHRyYW5zZm9ybSA9IG9yaWVudCA9PT0gdG9wIHx8IG9yaWVudCA9PT0gYm90dG9tID8gdHJhbnNsYXRlWCA6IHRyYW5zbGF0ZVk7XG5cbiAgZnVuY3Rpb24gYXhpcyhjb250ZXh0KSB7XG4gICAgdmFyIHZhbHVlcyA9IHRpY2tWYWx1ZXMgPT0gbnVsbCA/IChzY2FsZS50aWNrcyA/IHNjYWxlLnRpY2tzLmFwcGx5KHNjYWxlLCB0aWNrQXJndW1lbnRzKSA6IHNjYWxlLmRvbWFpbigpKSA6IHRpY2tWYWx1ZXMsXG4gICAgICAgIGZvcm1hdCA9IHRpY2tGb3JtYXQgPT0gbnVsbCA/IChzY2FsZS50aWNrRm9ybWF0ID8gc2NhbGUudGlja0Zvcm1hdC5hcHBseShzY2FsZSwgdGlja0FyZ3VtZW50cykgOiBpZGVudGl0eSkgOiB0aWNrRm9ybWF0LFxuICAgICAgICBzcGFjaW5nID0gTWF0aC5tYXgodGlja1NpemVJbm5lciwgMCkgKyB0aWNrUGFkZGluZyxcbiAgICAgICAgcmFuZ2UgPSBzY2FsZS5yYW5nZSgpLFxuICAgICAgICByYW5nZTAgPSArcmFuZ2VbMF0gKyBvZmZzZXQsXG4gICAgICAgIHJhbmdlMSA9ICtyYW5nZVtyYW5nZS5sZW5ndGggLSAxXSArIG9mZnNldCxcbiAgICAgICAgcG9zaXRpb24gPSAoc2NhbGUuYmFuZHdpZHRoID8gY2VudGVyIDogbnVtYmVyKShzY2FsZS5jb3B5KCksIG9mZnNldCksXG4gICAgICAgIHNlbGVjdGlvbiA9IGNvbnRleHQuc2VsZWN0aW9uID8gY29udGV4dC5zZWxlY3Rpb24oKSA6IGNvbnRleHQsXG4gICAgICAgIHBhdGggPSBzZWxlY3Rpb24uc2VsZWN0QWxsKFwiLmRvbWFpblwiKS5kYXRhKFtudWxsXSksXG4gICAgICAgIHRpY2sgPSBzZWxlY3Rpb24uc2VsZWN0QWxsKFwiLnRpY2tcIikuZGF0YSh2YWx1ZXMsIHNjYWxlKS5vcmRlcigpLFxuICAgICAgICB0aWNrRXhpdCA9IHRpY2suZXhpdCgpLFxuICAgICAgICB0aWNrRW50ZXIgPSB0aWNrLmVudGVyKCkuYXBwZW5kKFwiZ1wiKS5hdHRyKFwiY2xhc3NcIiwgXCJ0aWNrXCIpLFxuICAgICAgICBsaW5lID0gdGljay5zZWxlY3QoXCJsaW5lXCIpLFxuICAgICAgICB0ZXh0ID0gdGljay5zZWxlY3QoXCJ0ZXh0XCIpO1xuXG4gICAgcGF0aCA9IHBhdGgubWVyZ2UocGF0aC5lbnRlcigpLmluc2VydChcInBhdGhcIiwgXCIudGlja1wiKVxuICAgICAgICAuYXR0cihcImNsYXNzXCIsIFwiZG9tYWluXCIpXG4gICAgICAgIC5hdHRyKFwic3Ryb2tlXCIsIFwiY3VycmVudENvbG9yXCIpKTtcblxuICAgIHRpY2sgPSB0aWNrLm1lcmdlKHRpY2tFbnRlcik7XG5cbiAgICBsaW5lID0gbGluZS5tZXJnZSh0aWNrRW50ZXIuYXBwZW5kKFwibGluZVwiKVxuICAgICAgICAuYXR0cihcInN0cm9rZVwiLCBcImN1cnJlbnRDb2xvclwiKVxuICAgICAgICAuYXR0cih4ICsgXCIyXCIsIGsgKiB0aWNrU2l6ZUlubmVyKSk7XG5cbiAgICB0ZXh0ID0gdGV4dC5tZXJnZSh0aWNrRW50ZXIuYXBwZW5kKFwidGV4dFwiKVxuICAgICAgICAuYXR0cihcImZpbGxcIiwgXCJjdXJyZW50Q29sb3JcIilcbiAgICAgICAgLmF0dHIoeCwgayAqIHNwYWNpbmcpXG4gICAgICAgIC5hdHRyKFwiZHlcIiwgb3JpZW50ID09PSB0b3AgPyBcIjBlbVwiIDogb3JpZW50ID09PSBib3R0b20gPyBcIjAuNzFlbVwiIDogXCIwLjMyZW1cIikpO1xuXG4gICAgaWYgKGNvbnRleHQgIT09IHNlbGVjdGlvbikge1xuICAgICAgcGF0aCA9IHBhdGgudHJhbnNpdGlvbihjb250ZXh0KTtcbiAgICAgIHRpY2sgPSB0aWNrLnRyYW5zaXRpb24oY29udGV4dCk7XG4gICAgICBsaW5lID0gbGluZS50cmFuc2l0aW9uKGNvbnRleHQpO1xuICAgICAgdGV4dCA9IHRleHQudHJhbnNpdGlvbihjb250ZXh0KTtcblxuICAgICAgdGlja0V4aXQgPSB0aWNrRXhpdC50cmFuc2l0aW9uKGNvbnRleHQpXG4gICAgICAgICAgLmF0dHIoXCJvcGFjaXR5XCIsIGVwc2lsb24pXG4gICAgICAgICAgLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgZnVuY3Rpb24oZCkgeyByZXR1cm4gaXNGaW5pdGUoZCA9IHBvc2l0aW9uKGQpKSA/IHRyYW5zZm9ybShkICsgb2Zmc2V0KSA6IHRoaXMuZ2V0QXR0cmlidXRlKFwidHJhbnNmb3JtXCIpOyB9KTtcblxuICAgICAgdGlja0VudGVyXG4gICAgICAgICAgLmF0dHIoXCJvcGFjaXR5XCIsIGVwc2lsb24pXG4gICAgICAgICAgLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgZnVuY3Rpb24oZCkgeyB2YXIgcCA9IHRoaXMucGFyZW50Tm9kZS5fX2F4aXM7IHJldHVybiB0cmFuc2Zvcm0oKHAgJiYgaXNGaW5pdGUocCA9IHAoZCkpID8gcCA6IHBvc2l0aW9uKGQpKSArIG9mZnNldCk7IH0pO1xuICAgIH1cblxuICAgIHRpY2tFeGl0LnJlbW92ZSgpO1xuXG4gICAgcGF0aFxuICAgICAgICAuYXR0cihcImRcIiwgb3JpZW50ID09PSBsZWZ0IHx8IG9yaWVudCA9PT0gcmlnaHRcbiAgICAgICAgICAgID8gKHRpY2tTaXplT3V0ZXIgPyBcIk1cIiArIGsgKiB0aWNrU2l6ZU91dGVyICsgXCIsXCIgKyByYW5nZTAgKyBcIkhcIiArIG9mZnNldCArIFwiVlwiICsgcmFuZ2UxICsgXCJIXCIgKyBrICogdGlja1NpemVPdXRlciA6IFwiTVwiICsgb2Zmc2V0ICsgXCIsXCIgKyByYW5nZTAgKyBcIlZcIiArIHJhbmdlMSlcbiAgICAgICAgICAgIDogKHRpY2tTaXplT3V0ZXIgPyBcIk1cIiArIHJhbmdlMCArIFwiLFwiICsgayAqIHRpY2tTaXplT3V0ZXIgKyBcIlZcIiArIG9mZnNldCArIFwiSFwiICsgcmFuZ2UxICsgXCJWXCIgKyBrICogdGlja1NpemVPdXRlciA6IFwiTVwiICsgcmFuZ2UwICsgXCIsXCIgKyBvZmZzZXQgKyBcIkhcIiArIHJhbmdlMSkpO1xuXG4gICAgdGlja1xuICAgICAgICAuYXR0cihcIm9wYWNpdHlcIiwgMSlcbiAgICAgICAgLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgZnVuY3Rpb24oZCkgeyByZXR1cm4gdHJhbnNmb3JtKHBvc2l0aW9uKGQpICsgb2Zmc2V0KTsgfSk7XG5cbiAgICBsaW5lXG4gICAgICAgIC5hdHRyKHggKyBcIjJcIiwgayAqIHRpY2tTaXplSW5uZXIpO1xuXG4gICAgdGV4dFxuICAgICAgICAuYXR0cih4LCBrICogc3BhY2luZylcbiAgICAgICAgLnRleHQoZm9ybWF0KTtcblxuICAgIHNlbGVjdGlvbi5maWx0ZXIoZW50ZXJpbmcpXG4gICAgICAgIC5hdHRyKFwiZmlsbFwiLCBcIm5vbmVcIilcbiAgICAgICAgLmF0dHIoXCJmb250LXNpemVcIiwgMTApXG4gICAgICAgIC5hdHRyKFwiZm9udC1mYW1pbHlcIiwgXCJzYW5zLXNlcmlmXCIpXG4gICAgICAgIC5hdHRyKFwidGV4dC1hbmNob3JcIiwgb3JpZW50ID09PSByaWdodCA/IFwic3RhcnRcIiA6IG9yaWVudCA9PT0gbGVmdCA/IFwiZW5kXCIgOiBcIm1pZGRsZVwiKTtcblxuICAgIHNlbGVjdGlvblxuICAgICAgICAuZWFjaChmdW5jdGlvbigpIHsgdGhpcy5fX2F4aXMgPSBwb3NpdGlvbjsgfSk7XG4gIH1cblxuICBheGlzLnNjYWxlID0gZnVuY3Rpb24oXykge1xuICAgIHJldHVybiBhcmd1bWVudHMubGVuZ3RoID8gKHNjYWxlID0gXywgYXhpcykgOiBzY2FsZTtcbiAgfTtcblxuICBheGlzLnRpY2tzID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRpY2tBcmd1bWVudHMgPSBBcnJheS5mcm9tKGFyZ3VtZW50cyksIGF4aXM7XG4gIH07XG5cbiAgYXhpcy50aWNrQXJndW1lbnRzID0gZnVuY3Rpb24oXykge1xuICAgIHJldHVybiBhcmd1bWVudHMubGVuZ3RoID8gKHRpY2tBcmd1bWVudHMgPSBfID09IG51bGwgPyBbXSA6IEFycmF5LmZyb20oXyksIGF4aXMpIDogdGlja0FyZ3VtZW50cy5zbGljZSgpO1xuICB9O1xuXG4gIGF4aXMudGlja1ZhbHVlcyA9IGZ1bmN0aW9uKF8pIHtcbiAgICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA/ICh0aWNrVmFsdWVzID0gXyA9PSBudWxsID8gbnVsbCA6IEFycmF5LmZyb20oXyksIGF4aXMpIDogdGlja1ZhbHVlcyAmJiB0aWNrVmFsdWVzLnNsaWNlKCk7XG4gIH07XG5cbiAgYXhpcy50aWNrRm9ybWF0ID0gZnVuY3Rpb24oXykge1xuICAgIHJldHVybiBhcmd1bWVudHMubGVuZ3RoID8gKHRpY2tGb3JtYXQgPSBfLCBheGlzKSA6IHRpY2tGb3JtYXQ7XG4gIH07XG5cbiAgYXhpcy50aWNrU2l6ZSA9IGZ1bmN0aW9uKF8pIHtcbiAgICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA/ICh0aWNrU2l6ZUlubmVyID0gdGlja1NpemVPdXRlciA9ICtfLCBheGlzKSA6IHRpY2tTaXplSW5uZXI7XG4gIH07XG5cbiAgYXhpcy50aWNrU2l6ZUlubmVyID0gZnVuY3Rpb24oXykge1xuICAgIHJldHVybiBhcmd1bWVudHMubGVuZ3RoID8gKHRpY2tTaXplSW5uZXIgPSArXywgYXhpcykgOiB0aWNrU2l6ZUlubmVyO1xuICB9O1xuXG4gIGF4aXMudGlja1NpemVPdXRlciA9IGZ1bmN0aW9uKF8pIHtcbiAgICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA/ICh0aWNrU2l6ZU91dGVyID0gK18sIGF4aXMpIDogdGlja1NpemVPdXRlcjtcbiAgfTtcblxuICBheGlzLnRpY2tQYWRkaW5nID0gZnVuY3Rpb24oXykge1xuICAgIHJldHVybiBhcmd1bWVudHMubGVuZ3RoID8gKHRpY2tQYWRkaW5nID0gK18sIGF4aXMpIDogdGlja1BhZGRpbmc7XG4gIH07XG5cbiAgYXhpcy5vZmZzZXQgPSBmdW5jdGlvbihfKSB7XG4gICAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPyAob2Zmc2V0ID0gK18sIGF4aXMpIDogb2Zmc2V0O1xuICB9O1xuXG4gIHJldHVybiBheGlzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYXhpc1RvcChzY2FsZSkge1xuICByZXR1cm4gYXhpcyh0b3AsIHNjYWxlKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGF4aXNSaWdodChzY2FsZSkge1xuICByZXR1cm4gYXhpcyhyaWdodCwgc2NhbGUpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYXhpc0JvdHRvbShzY2FsZSkge1xuICByZXR1cm4gYXhpcyhib3R0b20sIHNjYWxlKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGF4aXNMZWZ0KHNjYWxlKSB7XG4gIHJldHVybiBheGlzKGxlZnQsIHNjYWxlKTtcbn1cbiIsInZhciBub29wID0ge3ZhbHVlOiAoKSA9PiB7fX07XG5cbmZ1bmN0aW9uIGRpc3BhdGNoKCkge1xuICBmb3IgKHZhciBpID0gMCwgbiA9IGFyZ3VtZW50cy5sZW5ndGgsIF8gPSB7fSwgdDsgaSA8IG47ICsraSkge1xuICAgIGlmICghKHQgPSBhcmd1bWVudHNbaV0gKyBcIlwiKSB8fCAodCBpbiBfKSB8fCAvW1xccy5dLy50ZXN0KHQpKSB0aHJvdyBuZXcgRXJyb3IoXCJpbGxlZ2FsIHR5cGU6IFwiICsgdCk7XG4gICAgX1t0XSA9IFtdO1xuICB9XG4gIHJldHVybiBuZXcgRGlzcGF0Y2goXyk7XG59XG5cbmZ1bmN0aW9uIERpc3BhdGNoKF8pIHtcbiAgdGhpcy5fID0gXztcbn1cblxuZnVuY3Rpb24gcGFyc2VUeXBlbmFtZXModHlwZW5hbWVzLCB0eXBlcykge1xuICByZXR1cm4gdHlwZW5hbWVzLnRyaW0oKS5zcGxpdCgvXnxcXHMrLykubWFwKGZ1bmN0aW9uKHQpIHtcbiAgICB2YXIgbmFtZSA9IFwiXCIsIGkgPSB0LmluZGV4T2YoXCIuXCIpO1xuICAgIGlmIChpID49IDApIG5hbWUgPSB0LnNsaWNlKGkgKyAxKSwgdCA9IHQuc2xpY2UoMCwgaSk7XG4gICAgaWYgKHQgJiYgIXR5cGVzLmhhc093blByb3BlcnR5KHQpKSB0aHJvdyBuZXcgRXJyb3IoXCJ1bmtub3duIHR5cGU6IFwiICsgdCk7XG4gICAgcmV0dXJuIHt0eXBlOiB0LCBuYW1lOiBuYW1lfTtcbiAgfSk7XG59XG5cbkRpc3BhdGNoLnByb3RvdHlwZSA9IGRpc3BhdGNoLnByb3RvdHlwZSA9IHtcbiAgY29uc3RydWN0b3I6IERpc3BhdGNoLFxuICBvbjogZnVuY3Rpb24odHlwZW5hbWUsIGNhbGxiYWNrKSB7XG4gICAgdmFyIF8gPSB0aGlzLl8sXG4gICAgICAgIFQgPSBwYXJzZVR5cGVuYW1lcyh0eXBlbmFtZSArIFwiXCIsIF8pLFxuICAgICAgICB0LFxuICAgICAgICBpID0gLTEsXG4gICAgICAgIG4gPSBULmxlbmd0aDtcblxuICAgIC8vIElmIG5vIGNhbGxiYWNrIHdhcyBzcGVjaWZpZWQsIHJldHVybiB0aGUgY2FsbGJhY2sgb2YgdGhlIGdpdmVuIHR5cGUgYW5kIG5hbWUuXG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPCAyKSB7XG4gICAgICB3aGlsZSAoKytpIDwgbikgaWYgKCh0ID0gKHR5cGVuYW1lID0gVFtpXSkudHlwZSkgJiYgKHQgPSBnZXQoX1t0XSwgdHlwZW5hbWUubmFtZSkpKSByZXR1cm4gdDtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBJZiBhIHR5cGUgd2FzIHNwZWNpZmllZCwgc2V0IHRoZSBjYWxsYmFjayBmb3IgdGhlIGdpdmVuIHR5cGUgYW5kIG5hbWUuXG4gICAgLy8gT3RoZXJ3aXNlLCBpZiBhIG51bGwgY2FsbGJhY2sgd2FzIHNwZWNpZmllZCwgcmVtb3ZlIGNhbGxiYWNrcyBvZiB0aGUgZ2l2ZW4gbmFtZS5cbiAgICBpZiAoY2FsbGJhY2sgIT0gbnVsbCAmJiB0eXBlb2YgY2FsbGJhY2sgIT09IFwiZnVuY3Rpb25cIikgdGhyb3cgbmV3IEVycm9yKFwiaW52YWxpZCBjYWxsYmFjazogXCIgKyBjYWxsYmFjayk7XG4gICAgd2hpbGUgKCsraSA8IG4pIHtcbiAgICAgIGlmICh0ID0gKHR5cGVuYW1lID0gVFtpXSkudHlwZSkgX1t0XSA9IHNldChfW3RdLCB0eXBlbmFtZS5uYW1lLCBjYWxsYmFjayk7XG4gICAgICBlbHNlIGlmIChjYWxsYmFjayA9PSBudWxsKSBmb3IgKHQgaW4gXykgX1t0XSA9IHNldChfW3RdLCB0eXBlbmFtZS5uYW1lLCBudWxsKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfSxcbiAgY29weTogZnVuY3Rpb24oKSB7XG4gICAgdmFyIGNvcHkgPSB7fSwgXyA9IHRoaXMuXztcbiAgICBmb3IgKHZhciB0IGluIF8pIGNvcHlbdF0gPSBfW3RdLnNsaWNlKCk7XG4gICAgcmV0dXJuIG5ldyBEaXNwYXRjaChjb3B5KTtcbiAgfSxcbiAgY2FsbDogZnVuY3Rpb24odHlwZSwgdGhhdCkge1xuICAgIGlmICgobiA9IGFyZ3VtZW50cy5sZW5ndGggLSAyKSA+IDApIGZvciAodmFyIGFyZ3MgPSBuZXcgQXJyYXkobiksIGkgPSAwLCBuLCB0OyBpIDwgbjsgKytpKSBhcmdzW2ldID0gYXJndW1lbnRzW2kgKyAyXTtcbiAgICBpZiAoIXRoaXMuXy5oYXNPd25Qcm9wZXJ0eSh0eXBlKSkgdGhyb3cgbmV3IEVycm9yKFwidW5rbm93biB0eXBlOiBcIiArIHR5cGUpO1xuICAgIGZvciAodCA9IHRoaXMuX1t0eXBlXSwgaSA9IDAsIG4gPSB0Lmxlbmd0aDsgaSA8IG47ICsraSkgdFtpXS52YWx1ZS5hcHBseSh0aGF0LCBhcmdzKTtcbiAgfSxcbiAgYXBwbHk6IGZ1bmN0aW9uKHR5cGUsIHRoYXQsIGFyZ3MpIHtcbiAgICBpZiAoIXRoaXMuXy5oYXNPd25Qcm9wZXJ0eSh0eXBlKSkgdGhyb3cgbmV3IEVycm9yKFwidW5rbm93biB0eXBlOiBcIiArIHR5cGUpO1xuICAgIGZvciAodmFyIHQgPSB0aGlzLl9bdHlwZV0sIGkgPSAwLCBuID0gdC5sZW5ndGg7IGkgPCBuOyArK2kpIHRbaV0udmFsdWUuYXBwbHkodGhhdCwgYXJncyk7XG4gIH1cbn07XG5cbmZ1bmN0aW9uIGdldCh0eXBlLCBuYW1lKSB7XG4gIGZvciAodmFyIGkgPSAwLCBuID0gdHlwZS5sZW5ndGgsIGM7IGkgPCBuOyArK2kpIHtcbiAgICBpZiAoKGMgPSB0eXBlW2ldKS5uYW1lID09PSBuYW1lKSB7XG4gICAgICByZXR1cm4gYy52YWx1ZTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gc2V0KHR5cGUsIG5hbWUsIGNhbGxiYWNrKSB7XG4gIGZvciAodmFyIGkgPSAwLCBuID0gdHlwZS5sZW5ndGg7IGkgPCBuOyArK2kpIHtcbiAgICBpZiAodHlwZVtpXS5uYW1lID09PSBuYW1lKSB7XG4gICAgICB0eXBlW2ldID0gbm9vcCwgdHlwZSA9IHR5cGUuc2xpY2UoMCwgaSkuY29uY2F0KHR5cGUuc2xpY2UoaSArIDEpKTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICBpZiAoY2FsbGJhY2sgIT0gbnVsbCkgdHlwZS5wdXNoKHtuYW1lOiBuYW1lLCB2YWx1ZTogY2FsbGJhY2t9KTtcbiAgcmV0dXJuIHR5cGU7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGRpc3BhdGNoO1xuIiwiZXhwb3J0IHZhciB4aHRtbCA9IFwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94aHRtbFwiO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIHN2ZzogXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiLFxuICB4aHRtbDogeGh0bWwsXG4gIHhsaW5rOiBcImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmtcIixcbiAgeG1sOiBcImh0dHA6Ly93d3cudzMub3JnL1hNTC8xOTk4L25hbWVzcGFjZVwiLFxuICB4bWxuczogXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3htbG5zL1wiXG59O1xuIiwiaW1wb3J0IG5hbWVzcGFjZXMgZnJvbSBcIi4vbmFtZXNwYWNlcy5qc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihuYW1lKSB7XG4gIHZhciBwcmVmaXggPSBuYW1lICs9IFwiXCIsIGkgPSBwcmVmaXguaW5kZXhPZihcIjpcIik7XG4gIGlmIChpID49IDAgJiYgKHByZWZpeCA9IG5hbWUuc2xpY2UoMCwgaSkpICE9PSBcInhtbG5zXCIpIG5hbWUgPSBuYW1lLnNsaWNlKGkgKyAxKTtcbiAgcmV0dXJuIG5hbWVzcGFjZXMuaGFzT3duUHJvcGVydHkocHJlZml4KSA/IHtzcGFjZTogbmFtZXNwYWNlc1twcmVmaXhdLCBsb2NhbDogbmFtZX0gOiBuYW1lOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXByb3RvdHlwZS1idWlsdGluc1xufVxuIiwiaW1wb3J0IG5hbWVzcGFjZSBmcm9tIFwiLi9uYW1lc3BhY2UuanNcIjtcbmltcG9ydCB7eGh0bWx9IGZyb20gXCIuL25hbWVzcGFjZXMuanNcIjtcblxuZnVuY3Rpb24gY3JlYXRvckluaGVyaXQobmFtZSkge1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgdmFyIGRvY3VtZW50ID0gdGhpcy5vd25lckRvY3VtZW50LFxuICAgICAgICB1cmkgPSB0aGlzLm5hbWVzcGFjZVVSSTtcbiAgICByZXR1cm4gdXJpID09PSB4aHRtbCAmJiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQubmFtZXNwYWNlVVJJID09PSB4aHRtbFxuICAgICAgICA/IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQobmFtZSlcbiAgICAgICAgOiBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlModXJpLCBuYW1lKTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gY3JlYXRvckZpeGVkKGZ1bGxuYW1lKSB7XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5vd25lckRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhmdWxsbmFtZS5zcGFjZSwgZnVsbG5hbWUubG9jYWwpO1xuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihuYW1lKSB7XG4gIHZhciBmdWxsbmFtZSA9IG5hbWVzcGFjZShuYW1lKTtcbiAgcmV0dXJuIChmdWxsbmFtZS5sb2NhbFxuICAgICAgPyBjcmVhdG9yRml4ZWRcbiAgICAgIDogY3JlYXRvckluaGVyaXQpKGZ1bGxuYW1lKTtcbn1cbiIsImZ1bmN0aW9uIG5vbmUoKSB7fVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihzZWxlY3Rvcikge1xuICByZXR1cm4gc2VsZWN0b3IgPT0gbnVsbCA/IG5vbmUgOiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKTtcbiAgfTtcbn1cbiIsImltcG9ydCB7U2VsZWN0aW9ufSBmcm9tIFwiLi9pbmRleC5qc1wiO1xuaW1wb3J0IHNlbGVjdG9yIGZyb20gXCIuLi9zZWxlY3Rvci5qc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihzZWxlY3QpIHtcbiAgaWYgKHR5cGVvZiBzZWxlY3QgIT09IFwiZnVuY3Rpb25cIikgc2VsZWN0ID0gc2VsZWN0b3Ioc2VsZWN0KTtcblxuICBmb3IgKHZhciBncm91cHMgPSB0aGlzLl9ncm91cHMsIG0gPSBncm91cHMubGVuZ3RoLCBzdWJncm91cHMgPSBuZXcgQXJyYXkobSksIGogPSAwOyBqIDwgbTsgKytqKSB7XG4gICAgZm9yICh2YXIgZ3JvdXAgPSBncm91cHNbal0sIG4gPSBncm91cC5sZW5ndGgsIHN1Ymdyb3VwID0gc3ViZ3JvdXBzW2pdID0gbmV3IEFycmF5KG4pLCBub2RlLCBzdWJub2RlLCBpID0gMDsgaSA8IG47ICsraSkge1xuICAgICAgaWYgKChub2RlID0gZ3JvdXBbaV0pICYmIChzdWJub2RlID0gc2VsZWN0LmNhbGwobm9kZSwgbm9kZS5fX2RhdGFfXywgaSwgZ3JvdXApKSkge1xuICAgICAgICBpZiAoXCJfX2RhdGFfX1wiIGluIG5vZGUpIHN1Ym5vZGUuX19kYXRhX18gPSBub2RlLl9fZGF0YV9fO1xuICAgICAgICBzdWJncm91cFtpXSA9IHN1Ym5vZGU7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG5ldyBTZWxlY3Rpb24oc3ViZ3JvdXBzLCB0aGlzLl9wYXJlbnRzKTtcbn1cbiIsIi8vIEdpdmVuIHNvbWV0aGluZyBhcnJheSBsaWtlIChvciBudWxsKSwgcmV0dXJucyBzb21ldGhpbmcgdGhhdCBpcyBzdHJpY3RseSBhblxuLy8gYXJyYXkuIFRoaXMgaXMgdXNlZCB0byBlbnN1cmUgdGhhdCBhcnJheS1saWtlIG9iamVjdHMgcGFzc2VkIHRvIGQzLnNlbGVjdEFsbFxuLy8gb3Igc2VsZWN0aW9uLnNlbGVjdEFsbCBhcmUgY29udmVydGVkIGludG8gcHJvcGVyIGFycmF5cyB3aGVuIGNyZWF0aW5nIGFcbi8vIHNlbGVjdGlvbjsgd2UgZG9u4oCZdCBldmVyIHdhbnQgdG8gY3JlYXRlIGEgc2VsZWN0aW9uIGJhY2tlZCBieSBhIGxpdmVcbi8vIEhUTUxDb2xsZWN0aW9uIG9yIE5vZGVMaXN0LiBIb3dldmVyLCBub3RlIHRoYXQgc2VsZWN0aW9uLnNlbGVjdEFsbCB3aWxsIHVzZSBhXG4vLyBzdGF0aWMgTm9kZUxpc3QgYXMgYSBncm91cCwgc2luY2UgaXQgc2FmZWx5IGRlcml2ZWQgZnJvbSBxdWVyeVNlbGVjdG9yQWxsLlxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYXJyYXkoeCkge1xuICByZXR1cm4geCA9PSBudWxsID8gW10gOiBBcnJheS5pc0FycmF5KHgpID8geCA6IEFycmF5LmZyb20oeCk7XG59XG4iLCJmdW5jdGlvbiBlbXB0eSgpIHtcbiAgcmV0dXJuIFtdO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihzZWxlY3Rvcikge1xuICByZXR1cm4gc2VsZWN0b3IgPT0gbnVsbCA/IGVtcHR5IDogZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMucXVlcnlTZWxlY3RvckFsbChzZWxlY3Rvcik7XG4gIH07XG59XG4iLCJpbXBvcnQge1NlbGVjdGlvbn0gZnJvbSBcIi4vaW5kZXguanNcIjtcbmltcG9ydCBhcnJheSBmcm9tIFwiLi4vYXJyYXkuanNcIjtcbmltcG9ydCBzZWxlY3RvckFsbCBmcm9tIFwiLi4vc2VsZWN0b3JBbGwuanNcIjtcblxuZnVuY3Rpb24gYXJyYXlBbGwoc2VsZWN0KSB7XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gYXJyYXkoc2VsZWN0LmFwcGx5KHRoaXMsIGFyZ3VtZW50cykpO1xuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihzZWxlY3QpIHtcbiAgaWYgKHR5cGVvZiBzZWxlY3QgPT09IFwiZnVuY3Rpb25cIikgc2VsZWN0ID0gYXJyYXlBbGwoc2VsZWN0KTtcbiAgZWxzZSBzZWxlY3QgPSBzZWxlY3RvckFsbChzZWxlY3QpO1xuXG4gIGZvciAodmFyIGdyb3VwcyA9IHRoaXMuX2dyb3VwcywgbSA9IGdyb3Vwcy5sZW5ndGgsIHN1Ymdyb3VwcyA9IFtdLCBwYXJlbnRzID0gW10sIGogPSAwOyBqIDwgbTsgKytqKSB7XG4gICAgZm9yICh2YXIgZ3JvdXAgPSBncm91cHNbal0sIG4gPSBncm91cC5sZW5ndGgsIG5vZGUsIGkgPSAwOyBpIDwgbjsgKytpKSB7XG4gICAgICBpZiAobm9kZSA9IGdyb3VwW2ldKSB7XG4gICAgICAgIHN1Ymdyb3Vwcy5wdXNoKHNlbGVjdC5jYWxsKG5vZGUsIG5vZGUuX19kYXRhX18sIGksIGdyb3VwKSk7XG4gICAgICAgIHBhcmVudHMucHVzaChub2RlKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gbmV3IFNlbGVjdGlvbihzdWJncm91cHMsIHBhcmVudHMpO1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oc2VsZWN0b3IpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLm1hdGNoZXMoc2VsZWN0b3IpO1xuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2hpbGRNYXRjaGVyKHNlbGVjdG9yKSB7XG4gIHJldHVybiBmdW5jdGlvbihub2RlKSB7XG4gICAgcmV0dXJuIG5vZGUubWF0Y2hlcyhzZWxlY3Rvcik7XG4gIH07XG59XG5cbiIsImltcG9ydCB7Y2hpbGRNYXRjaGVyfSBmcm9tIFwiLi4vbWF0Y2hlci5qc1wiO1xuXG52YXIgZmluZCA9IEFycmF5LnByb3RvdHlwZS5maW5kO1xuXG5mdW5jdGlvbiBjaGlsZEZpbmQobWF0Y2gpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBmaW5kLmNhbGwodGhpcy5jaGlsZHJlbiwgbWF0Y2gpO1xuICB9O1xufVxuXG5mdW5jdGlvbiBjaGlsZEZpcnN0KCkge1xuICByZXR1cm4gdGhpcy5maXJzdEVsZW1lbnRDaGlsZDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24obWF0Y2gpIHtcbiAgcmV0dXJuIHRoaXMuc2VsZWN0KG1hdGNoID09IG51bGwgPyBjaGlsZEZpcnN0XG4gICAgICA6IGNoaWxkRmluZCh0eXBlb2YgbWF0Y2ggPT09IFwiZnVuY3Rpb25cIiA/IG1hdGNoIDogY2hpbGRNYXRjaGVyKG1hdGNoKSkpO1xufVxuIiwiaW1wb3J0IHtjaGlsZE1hdGNoZXJ9IGZyb20gXCIuLi9tYXRjaGVyLmpzXCI7XG5cbnZhciBmaWx0ZXIgPSBBcnJheS5wcm90b3R5cGUuZmlsdGVyO1xuXG5mdW5jdGlvbiBjaGlsZHJlbigpIHtcbiAgcmV0dXJuIEFycmF5LmZyb20odGhpcy5jaGlsZHJlbik7XG59XG5cbmZ1bmN0aW9uIGNoaWxkcmVuRmlsdGVyKG1hdGNoKSB7XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gZmlsdGVyLmNhbGwodGhpcy5jaGlsZHJlbiwgbWF0Y2gpO1xuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihtYXRjaCkge1xuICByZXR1cm4gdGhpcy5zZWxlY3RBbGwobWF0Y2ggPT0gbnVsbCA/IGNoaWxkcmVuXG4gICAgICA6IGNoaWxkcmVuRmlsdGVyKHR5cGVvZiBtYXRjaCA9PT0gXCJmdW5jdGlvblwiID8gbWF0Y2ggOiBjaGlsZE1hdGNoZXIobWF0Y2gpKSk7XG59XG4iLCJpbXBvcnQge1NlbGVjdGlvbn0gZnJvbSBcIi4vaW5kZXguanNcIjtcbmltcG9ydCBtYXRjaGVyIGZyb20gXCIuLi9tYXRjaGVyLmpzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKG1hdGNoKSB7XG4gIGlmICh0eXBlb2YgbWF0Y2ggIT09IFwiZnVuY3Rpb25cIikgbWF0Y2ggPSBtYXRjaGVyKG1hdGNoKTtcblxuICBmb3IgKHZhciBncm91cHMgPSB0aGlzLl9ncm91cHMsIG0gPSBncm91cHMubGVuZ3RoLCBzdWJncm91cHMgPSBuZXcgQXJyYXkobSksIGogPSAwOyBqIDwgbTsgKytqKSB7XG4gICAgZm9yICh2YXIgZ3JvdXAgPSBncm91cHNbal0sIG4gPSBncm91cC5sZW5ndGgsIHN1Ymdyb3VwID0gc3ViZ3JvdXBzW2pdID0gW10sIG5vZGUsIGkgPSAwOyBpIDwgbjsgKytpKSB7XG4gICAgICBpZiAoKG5vZGUgPSBncm91cFtpXSkgJiYgbWF0Y2guY2FsbChub2RlLCBub2RlLl9fZGF0YV9fLCBpLCBncm91cCkpIHtcbiAgICAgICAgc3ViZ3JvdXAucHVzaChub2RlKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gbmV3IFNlbGVjdGlvbihzdWJncm91cHMsIHRoaXMuX3BhcmVudHMpO1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24odXBkYXRlKSB7XG4gIHJldHVybiBuZXcgQXJyYXkodXBkYXRlLmxlbmd0aCk7XG59XG4iLCJpbXBvcnQgc3BhcnNlIGZyb20gXCIuL3NwYXJzZS5qc1wiO1xuaW1wb3J0IHtTZWxlY3Rpb259IGZyb20gXCIuL2luZGV4LmpzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gbmV3IFNlbGVjdGlvbih0aGlzLl9lbnRlciB8fCB0aGlzLl9ncm91cHMubWFwKHNwYXJzZSksIHRoaXMuX3BhcmVudHMpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gRW50ZXJOb2RlKHBhcmVudCwgZGF0dW0pIHtcbiAgdGhpcy5vd25lckRvY3VtZW50ID0gcGFyZW50Lm93bmVyRG9jdW1lbnQ7XG4gIHRoaXMubmFtZXNwYWNlVVJJID0gcGFyZW50Lm5hbWVzcGFjZVVSSTtcbiAgdGhpcy5fbmV4dCA9IG51bGw7XG4gIHRoaXMuX3BhcmVudCA9IHBhcmVudDtcbiAgdGhpcy5fX2RhdGFfXyA9IGRhdHVtO1xufVxuXG5FbnRlck5vZGUucHJvdG90eXBlID0ge1xuICBjb25zdHJ1Y3RvcjogRW50ZXJOb2RlLFxuICBhcHBlbmRDaGlsZDogZnVuY3Rpb24oY2hpbGQpIHsgcmV0dXJuIHRoaXMuX3BhcmVudC5pbnNlcnRCZWZvcmUoY2hpbGQsIHRoaXMuX25leHQpOyB9LFxuICBpbnNlcnRCZWZvcmU6IGZ1bmN0aW9uKGNoaWxkLCBuZXh0KSB7IHJldHVybiB0aGlzLl9wYXJlbnQuaW5zZXJ0QmVmb3JlKGNoaWxkLCBuZXh0KTsgfSxcbiAgcXVlcnlTZWxlY3RvcjogZnVuY3Rpb24oc2VsZWN0b3IpIHsgcmV0dXJuIHRoaXMuX3BhcmVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKTsgfSxcbiAgcXVlcnlTZWxlY3RvckFsbDogZnVuY3Rpb24oc2VsZWN0b3IpIHsgcmV0dXJuIHRoaXMuX3BhcmVudC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKTsgfVxufTtcbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKHgpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB4O1xuICB9O1xufVxuIiwiaW1wb3J0IHtTZWxlY3Rpb259IGZyb20gXCIuL2luZGV4LmpzXCI7XG5pbXBvcnQge0VudGVyTm9kZX0gZnJvbSBcIi4vZW50ZXIuanNcIjtcbmltcG9ydCBjb25zdGFudCBmcm9tIFwiLi4vY29uc3RhbnQuanNcIjtcblxuZnVuY3Rpb24gYmluZEluZGV4KHBhcmVudCwgZ3JvdXAsIGVudGVyLCB1cGRhdGUsIGV4aXQsIGRhdGEpIHtcbiAgdmFyIGkgPSAwLFxuICAgICAgbm9kZSxcbiAgICAgIGdyb3VwTGVuZ3RoID0gZ3JvdXAubGVuZ3RoLFxuICAgICAgZGF0YUxlbmd0aCA9IGRhdGEubGVuZ3RoO1xuXG4gIC8vIFB1dCBhbnkgbm9uLW51bGwgbm9kZXMgdGhhdCBmaXQgaW50byB1cGRhdGUuXG4gIC8vIFB1dCBhbnkgbnVsbCBub2RlcyBpbnRvIGVudGVyLlxuICAvLyBQdXQgYW55IHJlbWFpbmluZyBkYXRhIGludG8gZW50ZXIuXG4gIGZvciAoOyBpIDwgZGF0YUxlbmd0aDsgKytpKSB7XG4gICAgaWYgKG5vZGUgPSBncm91cFtpXSkge1xuICAgICAgbm9kZS5fX2RhdGFfXyA9IGRhdGFbaV07XG4gICAgICB1cGRhdGVbaV0gPSBub2RlO1xuICAgIH0gZWxzZSB7XG4gICAgICBlbnRlcltpXSA9IG5ldyBFbnRlck5vZGUocGFyZW50LCBkYXRhW2ldKTtcbiAgICB9XG4gIH1cblxuICAvLyBQdXQgYW55IG5vbi1udWxsIG5vZGVzIHRoYXQgZG9u4oCZdCBmaXQgaW50byBleGl0LlxuICBmb3IgKDsgaSA8IGdyb3VwTGVuZ3RoOyArK2kpIHtcbiAgICBpZiAobm9kZSA9IGdyb3VwW2ldKSB7XG4gICAgICBleGl0W2ldID0gbm9kZTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gYmluZEtleShwYXJlbnQsIGdyb3VwLCBlbnRlciwgdXBkYXRlLCBleGl0LCBkYXRhLCBrZXkpIHtcbiAgdmFyIGksXG4gICAgICBub2RlLFxuICAgICAgbm9kZUJ5S2V5VmFsdWUgPSBuZXcgTWFwLFxuICAgICAgZ3JvdXBMZW5ndGggPSBncm91cC5sZW5ndGgsXG4gICAgICBkYXRhTGVuZ3RoID0gZGF0YS5sZW5ndGgsXG4gICAgICBrZXlWYWx1ZXMgPSBuZXcgQXJyYXkoZ3JvdXBMZW5ndGgpLFxuICAgICAga2V5VmFsdWU7XG5cbiAgLy8gQ29tcHV0ZSB0aGUga2V5IGZvciBlYWNoIG5vZGUuXG4gIC8vIElmIG11bHRpcGxlIG5vZGVzIGhhdmUgdGhlIHNhbWUga2V5LCB0aGUgZHVwbGljYXRlcyBhcmUgYWRkZWQgdG8gZXhpdC5cbiAgZm9yIChpID0gMDsgaSA8IGdyb3VwTGVuZ3RoOyArK2kpIHtcbiAgICBpZiAobm9kZSA9IGdyb3VwW2ldKSB7XG4gICAgICBrZXlWYWx1ZXNbaV0gPSBrZXlWYWx1ZSA9IGtleS5jYWxsKG5vZGUsIG5vZGUuX19kYXRhX18sIGksIGdyb3VwKSArIFwiXCI7XG4gICAgICBpZiAobm9kZUJ5S2V5VmFsdWUuaGFzKGtleVZhbHVlKSkge1xuICAgICAgICBleGl0W2ldID0gbm9kZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG5vZGVCeUtleVZhbHVlLnNldChrZXlWYWx1ZSwgbm9kZSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLy8gQ29tcHV0ZSB0aGUga2V5IGZvciBlYWNoIGRhdHVtLlxuICAvLyBJZiB0aGVyZSBhIG5vZGUgYXNzb2NpYXRlZCB3aXRoIHRoaXMga2V5LCBqb2luIGFuZCBhZGQgaXQgdG8gdXBkYXRlLlxuICAvLyBJZiB0aGVyZSBpcyBub3QgKG9yIHRoZSBrZXkgaXMgYSBkdXBsaWNhdGUpLCBhZGQgaXQgdG8gZW50ZXIuXG4gIGZvciAoaSA9IDA7IGkgPCBkYXRhTGVuZ3RoOyArK2kpIHtcbiAgICBrZXlWYWx1ZSA9IGtleS5jYWxsKHBhcmVudCwgZGF0YVtpXSwgaSwgZGF0YSkgKyBcIlwiO1xuICAgIGlmIChub2RlID0gbm9kZUJ5S2V5VmFsdWUuZ2V0KGtleVZhbHVlKSkge1xuICAgICAgdXBkYXRlW2ldID0gbm9kZTtcbiAgICAgIG5vZGUuX19kYXRhX18gPSBkYXRhW2ldO1xuICAgICAgbm9kZUJ5S2V5VmFsdWUuZGVsZXRlKGtleVZhbHVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZW50ZXJbaV0gPSBuZXcgRW50ZXJOb2RlKHBhcmVudCwgZGF0YVtpXSk7XG4gICAgfVxuICB9XG5cbiAgLy8gQWRkIGFueSByZW1haW5pbmcgbm9kZXMgdGhhdCB3ZXJlIG5vdCBib3VuZCB0byBkYXRhIHRvIGV4aXQuXG4gIGZvciAoaSA9IDA7IGkgPCBncm91cExlbmd0aDsgKytpKSB7XG4gICAgaWYgKChub2RlID0gZ3JvdXBbaV0pICYmIChub2RlQnlLZXlWYWx1ZS5nZXQoa2V5VmFsdWVzW2ldKSA9PT0gbm9kZSkpIHtcbiAgICAgIGV4aXRbaV0gPSBub2RlO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBkYXR1bShub2RlKSB7XG4gIHJldHVybiBub2RlLl9fZGF0YV9fO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbih2YWx1ZSwga2V5KSB7XG4gIGlmICghYXJndW1lbnRzLmxlbmd0aCkgcmV0dXJuIEFycmF5LmZyb20odGhpcywgZGF0dW0pO1xuXG4gIHZhciBiaW5kID0ga2V5ID8gYmluZEtleSA6IGJpbmRJbmRleCxcbiAgICAgIHBhcmVudHMgPSB0aGlzLl9wYXJlbnRzLFxuICAgICAgZ3JvdXBzID0gdGhpcy5fZ3JvdXBzO1xuXG4gIGlmICh0eXBlb2YgdmFsdWUgIT09IFwiZnVuY3Rpb25cIikgdmFsdWUgPSBjb25zdGFudCh2YWx1ZSk7XG5cbiAgZm9yICh2YXIgbSA9IGdyb3Vwcy5sZW5ndGgsIHVwZGF0ZSA9IG5ldyBBcnJheShtKSwgZW50ZXIgPSBuZXcgQXJyYXkobSksIGV4aXQgPSBuZXcgQXJyYXkobSksIGogPSAwOyBqIDwgbTsgKytqKSB7XG4gICAgdmFyIHBhcmVudCA9IHBhcmVudHNbal0sXG4gICAgICAgIGdyb3VwID0gZ3JvdXBzW2pdLFxuICAgICAgICBncm91cExlbmd0aCA9IGdyb3VwLmxlbmd0aCxcbiAgICAgICAgZGF0YSA9IGFycmF5bGlrZSh2YWx1ZS5jYWxsKHBhcmVudCwgcGFyZW50ICYmIHBhcmVudC5fX2RhdGFfXywgaiwgcGFyZW50cykpLFxuICAgICAgICBkYXRhTGVuZ3RoID0gZGF0YS5sZW5ndGgsXG4gICAgICAgIGVudGVyR3JvdXAgPSBlbnRlcltqXSA9IG5ldyBBcnJheShkYXRhTGVuZ3RoKSxcbiAgICAgICAgdXBkYXRlR3JvdXAgPSB1cGRhdGVbal0gPSBuZXcgQXJyYXkoZGF0YUxlbmd0aCksXG4gICAgICAgIGV4aXRHcm91cCA9IGV4aXRbal0gPSBuZXcgQXJyYXkoZ3JvdXBMZW5ndGgpO1xuXG4gICAgYmluZChwYXJlbnQsIGdyb3VwLCBlbnRlckdyb3VwLCB1cGRhdGVHcm91cCwgZXhpdEdyb3VwLCBkYXRhLCBrZXkpO1xuXG4gICAgLy8gTm93IGNvbm5lY3QgdGhlIGVudGVyIG5vZGVzIHRvIHRoZWlyIGZvbGxvd2luZyB1cGRhdGUgbm9kZSwgc3VjaCB0aGF0XG4gICAgLy8gYXBwZW5kQ2hpbGQgY2FuIGluc2VydCB0aGUgbWF0ZXJpYWxpemVkIGVudGVyIG5vZGUgYmVmb3JlIHRoaXMgbm9kZSxcbiAgICAvLyByYXRoZXIgdGhhbiBhdCB0aGUgZW5kIG9mIHRoZSBwYXJlbnQgbm9kZS5cbiAgICBmb3IgKHZhciBpMCA9IDAsIGkxID0gMCwgcHJldmlvdXMsIG5leHQ7IGkwIDwgZGF0YUxlbmd0aDsgKytpMCkge1xuICAgICAgaWYgKHByZXZpb3VzID0gZW50ZXJHcm91cFtpMF0pIHtcbiAgICAgICAgaWYgKGkwID49IGkxKSBpMSA9IGkwICsgMTtcbiAgICAgICAgd2hpbGUgKCEobmV4dCA9IHVwZGF0ZUdyb3VwW2kxXSkgJiYgKytpMSA8IGRhdGFMZW5ndGgpO1xuICAgICAgICBwcmV2aW91cy5fbmV4dCA9IG5leHQgfHwgbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICB1cGRhdGUgPSBuZXcgU2VsZWN0aW9uKHVwZGF0ZSwgcGFyZW50cyk7XG4gIHVwZGF0ZS5fZW50ZXIgPSBlbnRlcjtcbiAgdXBkYXRlLl9leGl0ID0gZXhpdDtcbiAgcmV0dXJuIHVwZGF0ZTtcbn1cblxuLy8gR2l2ZW4gc29tZSBkYXRhLCB0aGlzIHJldHVybnMgYW4gYXJyYXktbGlrZSB2aWV3IG9mIGl0OiBhbiBvYmplY3QgdGhhdFxuLy8gZXhwb3NlcyBhIGxlbmd0aCBwcm9wZXJ0eSBhbmQgYWxsb3dzIG51bWVyaWMgaW5kZXhpbmcuIE5vdGUgdGhhdCB1bmxpa2Vcbi8vIHNlbGVjdEFsbCwgdGhpcyBpc27igJl0IHdvcnJpZWQgYWJvdXQg4oCcbGl2ZeKAnSBjb2xsZWN0aW9ucyBiZWNhdXNlIHRoZSByZXN1bHRpbmdcbi8vIGFycmF5IHdpbGwgb25seSBiZSB1c2VkIGJyaWVmbHkgd2hpbGUgZGF0YSBpcyBiZWluZyBib3VuZC4gKEl0IGlzIHBvc3NpYmxlIHRvXG4vLyBjYXVzZSB0aGUgZGF0YSB0byBjaGFuZ2Ugd2hpbGUgaXRlcmF0aW5nIGJ5IHVzaW5nIGEga2V5IGZ1bmN0aW9uLCBidXQgcGxlYXNlXG4vLyBkb27igJl0OyB3ZeKAmWQgcmF0aGVyIGF2b2lkIGEgZ3JhdHVpdG91cyBjb3B5LilcbmZ1bmN0aW9uIGFycmF5bGlrZShkYXRhKSB7XG4gIHJldHVybiB0eXBlb2YgZGF0YSA9PT0gXCJvYmplY3RcIiAmJiBcImxlbmd0aFwiIGluIGRhdGFcbiAgICA/IGRhdGEgLy8gQXJyYXksIFR5cGVkQXJyYXksIE5vZGVMaXN0LCBhcnJheS1saWtlXG4gICAgOiBBcnJheS5mcm9tKGRhdGEpOyAvLyBNYXAsIFNldCwgaXRlcmFibGUsIHN0cmluZywgb3IgYW55dGhpbmcgZWxzZVxufVxuIiwiaW1wb3J0IHNwYXJzZSBmcm9tIFwiLi9zcGFyc2UuanNcIjtcbmltcG9ydCB7U2VsZWN0aW9ufSBmcm9tIFwiLi9pbmRleC5qc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIG5ldyBTZWxlY3Rpb24odGhpcy5fZXhpdCB8fCB0aGlzLl9ncm91cHMubWFwKHNwYXJzZSksIHRoaXMuX3BhcmVudHMpO1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24ob25lbnRlciwgb251cGRhdGUsIG9uZXhpdCkge1xuICB2YXIgZW50ZXIgPSB0aGlzLmVudGVyKCksIHVwZGF0ZSA9IHRoaXMsIGV4aXQgPSB0aGlzLmV4aXQoKTtcbiAgaWYgKHR5cGVvZiBvbmVudGVyID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICBlbnRlciA9IG9uZW50ZXIoZW50ZXIpO1xuICAgIGlmIChlbnRlcikgZW50ZXIgPSBlbnRlci5zZWxlY3Rpb24oKTtcbiAgfSBlbHNlIHtcbiAgICBlbnRlciA9IGVudGVyLmFwcGVuZChvbmVudGVyICsgXCJcIik7XG4gIH1cbiAgaWYgKG9udXBkYXRlICE9IG51bGwpIHtcbiAgICB1cGRhdGUgPSBvbnVwZGF0ZSh1cGRhdGUpO1xuICAgIGlmICh1cGRhdGUpIHVwZGF0ZSA9IHVwZGF0ZS5zZWxlY3Rpb24oKTtcbiAgfVxuICBpZiAob25leGl0ID09IG51bGwpIGV4aXQucmVtb3ZlKCk7IGVsc2Ugb25leGl0KGV4aXQpO1xuICByZXR1cm4gZW50ZXIgJiYgdXBkYXRlID8gZW50ZXIubWVyZ2UodXBkYXRlKS5vcmRlcigpIDogdXBkYXRlO1xufVxuIiwiaW1wb3J0IHtTZWxlY3Rpb259IGZyb20gXCIuL2luZGV4LmpzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKGNvbnRleHQpIHtcbiAgdmFyIHNlbGVjdGlvbiA9IGNvbnRleHQuc2VsZWN0aW9uID8gY29udGV4dC5zZWxlY3Rpb24oKSA6IGNvbnRleHQ7XG5cbiAgZm9yICh2YXIgZ3JvdXBzMCA9IHRoaXMuX2dyb3VwcywgZ3JvdXBzMSA9IHNlbGVjdGlvbi5fZ3JvdXBzLCBtMCA9IGdyb3VwczAubGVuZ3RoLCBtMSA9IGdyb3VwczEubGVuZ3RoLCBtID0gTWF0aC5taW4obTAsIG0xKSwgbWVyZ2VzID0gbmV3IEFycmF5KG0wKSwgaiA9IDA7IGogPCBtOyArK2opIHtcbiAgICBmb3IgKHZhciBncm91cDAgPSBncm91cHMwW2pdLCBncm91cDEgPSBncm91cHMxW2pdLCBuID0gZ3JvdXAwLmxlbmd0aCwgbWVyZ2UgPSBtZXJnZXNbal0gPSBuZXcgQXJyYXkobiksIG5vZGUsIGkgPSAwOyBpIDwgbjsgKytpKSB7XG4gICAgICBpZiAobm9kZSA9IGdyb3VwMFtpXSB8fCBncm91cDFbaV0pIHtcbiAgICAgICAgbWVyZ2VbaV0gPSBub2RlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGZvciAoOyBqIDwgbTA7ICsraikge1xuICAgIG1lcmdlc1tqXSA9IGdyb3VwczBbal07XG4gIH1cblxuICByZXR1cm4gbmV3IFNlbGVjdGlvbihtZXJnZXMsIHRoaXMuX3BhcmVudHMpO1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKSB7XG5cbiAgZm9yICh2YXIgZ3JvdXBzID0gdGhpcy5fZ3JvdXBzLCBqID0gLTEsIG0gPSBncm91cHMubGVuZ3RoOyArK2ogPCBtOykge1xuICAgIGZvciAodmFyIGdyb3VwID0gZ3JvdXBzW2pdLCBpID0gZ3JvdXAubGVuZ3RoIC0gMSwgbmV4dCA9IGdyb3VwW2ldLCBub2RlOyAtLWkgPj0gMDspIHtcbiAgICAgIGlmIChub2RlID0gZ3JvdXBbaV0pIHtcbiAgICAgICAgaWYgKG5leHQgJiYgbm9kZS5jb21wYXJlRG9jdW1lbnRQb3NpdGlvbihuZXh0KSBeIDQpIG5leHQucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUobm9kZSwgbmV4dCk7XG4gICAgICAgIG5leHQgPSBub2RlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0aGlzO1xufVxuIiwiaW1wb3J0IHtTZWxlY3Rpb259IGZyb20gXCIuL2luZGV4LmpzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKGNvbXBhcmUpIHtcbiAgaWYgKCFjb21wYXJlKSBjb21wYXJlID0gYXNjZW5kaW5nO1xuXG4gIGZ1bmN0aW9uIGNvbXBhcmVOb2RlKGEsIGIpIHtcbiAgICByZXR1cm4gYSAmJiBiID8gY29tcGFyZShhLl9fZGF0YV9fLCBiLl9fZGF0YV9fKSA6ICFhIC0gIWI7XG4gIH1cblxuICBmb3IgKHZhciBncm91cHMgPSB0aGlzLl9ncm91cHMsIG0gPSBncm91cHMubGVuZ3RoLCBzb3J0Z3JvdXBzID0gbmV3IEFycmF5KG0pLCBqID0gMDsgaiA8IG07ICsraikge1xuICAgIGZvciAodmFyIGdyb3VwID0gZ3JvdXBzW2pdLCBuID0gZ3JvdXAubGVuZ3RoLCBzb3J0Z3JvdXAgPSBzb3J0Z3JvdXBzW2pdID0gbmV3IEFycmF5KG4pLCBub2RlLCBpID0gMDsgaSA8IG47ICsraSkge1xuICAgICAgaWYgKG5vZGUgPSBncm91cFtpXSkge1xuICAgICAgICBzb3J0Z3JvdXBbaV0gPSBub2RlO1xuICAgICAgfVxuICAgIH1cbiAgICBzb3J0Z3JvdXAuc29ydChjb21wYXJlTm9kZSk7XG4gIH1cblxuICByZXR1cm4gbmV3IFNlbGVjdGlvbihzb3J0Z3JvdXBzLCB0aGlzLl9wYXJlbnRzKS5vcmRlcigpO1xufVxuXG5mdW5jdGlvbiBhc2NlbmRpbmcoYSwgYikge1xuICByZXR1cm4gYSA8IGIgPyAtMSA6IGEgPiBiID8gMSA6IGEgPj0gYiA/IDAgOiBOYU47XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbigpIHtcbiAgdmFyIGNhbGxiYWNrID0gYXJndW1lbnRzWzBdO1xuICBhcmd1bWVudHNbMF0gPSB0aGlzO1xuICBjYWxsYmFjay5hcHBseShudWxsLCBhcmd1bWVudHMpO1xuICByZXR1cm4gdGhpcztcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gQXJyYXkuZnJvbSh0aGlzKTtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCkge1xuXG4gIGZvciAodmFyIGdyb3VwcyA9IHRoaXMuX2dyb3VwcywgaiA9IDAsIG0gPSBncm91cHMubGVuZ3RoOyBqIDwgbTsgKytqKSB7XG4gICAgZm9yICh2YXIgZ3JvdXAgPSBncm91cHNbal0sIGkgPSAwLCBuID0gZ3JvdXAubGVuZ3RoOyBpIDwgbjsgKytpKSB7XG4gICAgICB2YXIgbm9kZSA9IGdyb3VwW2ldO1xuICAgICAgaWYgKG5vZGUpIHJldHVybiBub2RlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBudWxsO1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKSB7XG4gIGxldCBzaXplID0gMDtcbiAgZm9yIChjb25zdCBub2RlIG9mIHRoaXMpICsrc2l6ZTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bnVzZWQtdmFyc1xuICByZXR1cm4gc2l6ZTtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gIXRoaXMubm9kZSgpO1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oY2FsbGJhY2spIHtcblxuICBmb3IgKHZhciBncm91cHMgPSB0aGlzLl9ncm91cHMsIGogPSAwLCBtID0gZ3JvdXBzLmxlbmd0aDsgaiA8IG07ICsraikge1xuICAgIGZvciAodmFyIGdyb3VwID0gZ3JvdXBzW2pdLCBpID0gMCwgbiA9IGdyb3VwLmxlbmd0aCwgbm9kZTsgaSA8IG47ICsraSkge1xuICAgICAgaWYgKG5vZGUgPSBncm91cFtpXSkgY2FsbGJhY2suY2FsbChub2RlLCBub2RlLl9fZGF0YV9fLCBpLCBncm91cCk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRoaXM7XG59XG4iLCJpbXBvcnQgbmFtZXNwYWNlIGZyb20gXCIuLi9uYW1lc3BhY2UuanNcIjtcblxuZnVuY3Rpb24gYXR0clJlbW92ZShuYW1lKSB7XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICB0aGlzLnJlbW92ZUF0dHJpYnV0ZShuYW1lKTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gYXR0clJlbW92ZU5TKGZ1bGxuYW1lKSB7XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICB0aGlzLnJlbW92ZUF0dHJpYnV0ZU5TKGZ1bGxuYW1lLnNwYWNlLCBmdWxsbmFtZS5sb2NhbCk7XG4gIH07XG59XG5cbmZ1bmN0aW9uIGF0dHJDb25zdGFudChuYW1lLCB2YWx1ZSkge1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5zZXRBdHRyaWJ1dGUobmFtZSwgdmFsdWUpO1xuICB9O1xufVxuXG5mdW5jdGlvbiBhdHRyQ29uc3RhbnROUyhmdWxsbmFtZSwgdmFsdWUpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuc2V0QXR0cmlidXRlTlMoZnVsbG5hbWUuc3BhY2UsIGZ1bGxuYW1lLmxvY2FsLCB2YWx1ZSk7XG4gIH07XG59XG5cbmZ1bmN0aW9uIGF0dHJGdW5jdGlvbihuYW1lLCB2YWx1ZSkge1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgdmFyIHYgPSB2YWx1ZS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIGlmICh2ID09IG51bGwpIHRoaXMucmVtb3ZlQXR0cmlidXRlKG5hbWUpO1xuICAgIGVsc2UgdGhpcy5zZXRBdHRyaWJ1dGUobmFtZSwgdik7XG4gIH07XG59XG5cbmZ1bmN0aW9uIGF0dHJGdW5jdGlvbk5TKGZ1bGxuYW1lLCB2YWx1ZSkge1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgdmFyIHYgPSB2YWx1ZS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIGlmICh2ID09IG51bGwpIHRoaXMucmVtb3ZlQXR0cmlidXRlTlMoZnVsbG5hbWUuc3BhY2UsIGZ1bGxuYW1lLmxvY2FsKTtcbiAgICBlbHNlIHRoaXMuc2V0QXR0cmlidXRlTlMoZnVsbG5hbWUuc3BhY2UsIGZ1bGxuYW1lLmxvY2FsLCB2KTtcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24obmFtZSwgdmFsdWUpIHtcbiAgdmFyIGZ1bGxuYW1lID0gbmFtZXNwYWNlKG5hbWUpO1xuXG4gIGlmIChhcmd1bWVudHMubGVuZ3RoIDwgMikge1xuICAgIHZhciBub2RlID0gdGhpcy5ub2RlKCk7XG4gICAgcmV0dXJuIGZ1bGxuYW1lLmxvY2FsXG4gICAgICAgID8gbm9kZS5nZXRBdHRyaWJ1dGVOUyhmdWxsbmFtZS5zcGFjZSwgZnVsbG5hbWUubG9jYWwpXG4gICAgICAgIDogbm9kZS5nZXRBdHRyaWJ1dGUoZnVsbG5hbWUpO1xuICB9XG5cbiAgcmV0dXJuIHRoaXMuZWFjaCgodmFsdWUgPT0gbnVsbFxuICAgICAgPyAoZnVsbG5hbWUubG9jYWwgPyBhdHRyUmVtb3ZlTlMgOiBhdHRyUmVtb3ZlKSA6ICh0eXBlb2YgdmFsdWUgPT09IFwiZnVuY3Rpb25cIlxuICAgICAgPyAoZnVsbG5hbWUubG9jYWwgPyBhdHRyRnVuY3Rpb25OUyA6IGF0dHJGdW5jdGlvbilcbiAgICAgIDogKGZ1bGxuYW1lLmxvY2FsID8gYXR0ckNvbnN0YW50TlMgOiBhdHRyQ29uc3RhbnQpKSkoZnVsbG5hbWUsIHZhbHVlKSk7XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbihub2RlKSB7XG4gIHJldHVybiAobm9kZS5vd25lckRvY3VtZW50ICYmIG5vZGUub3duZXJEb2N1bWVudC5kZWZhdWx0VmlldykgLy8gbm9kZSBpcyBhIE5vZGVcbiAgICAgIHx8IChub2RlLmRvY3VtZW50ICYmIG5vZGUpIC8vIG5vZGUgaXMgYSBXaW5kb3dcbiAgICAgIHx8IG5vZGUuZGVmYXVsdFZpZXc7IC8vIG5vZGUgaXMgYSBEb2N1bWVudFxufVxuIiwiaW1wb3J0IGRlZmF1bHRWaWV3IGZyb20gXCIuLi93aW5kb3cuanNcIjtcblxuZnVuY3Rpb24gc3R5bGVSZW1vdmUobmFtZSkge1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5zdHlsZS5yZW1vdmVQcm9wZXJ0eShuYW1lKTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gc3R5bGVDb25zdGFudChuYW1lLCB2YWx1ZSwgcHJpb3JpdHkpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuc3R5bGUuc2V0UHJvcGVydHkobmFtZSwgdmFsdWUsIHByaW9yaXR5KTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gc3R5bGVGdW5jdGlvbihuYW1lLCB2YWx1ZSwgcHJpb3JpdHkpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIHZhciB2ID0gdmFsdWUuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICBpZiAodiA9PSBudWxsKSB0aGlzLnN0eWxlLnJlbW92ZVByb3BlcnR5KG5hbWUpO1xuICAgIGVsc2UgdGhpcy5zdHlsZS5zZXRQcm9wZXJ0eShuYW1lLCB2LCBwcmlvcml0eSk7XG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKG5hbWUsIHZhbHVlLCBwcmlvcml0eSkge1xuICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA+IDFcbiAgICAgID8gdGhpcy5lYWNoKCh2YWx1ZSA9PSBudWxsXG4gICAgICAgICAgICA/IHN0eWxlUmVtb3ZlIDogdHlwZW9mIHZhbHVlID09PSBcImZ1bmN0aW9uXCJcbiAgICAgICAgICAgID8gc3R5bGVGdW5jdGlvblxuICAgICAgICAgICAgOiBzdHlsZUNvbnN0YW50KShuYW1lLCB2YWx1ZSwgcHJpb3JpdHkgPT0gbnVsbCA/IFwiXCIgOiBwcmlvcml0eSkpXG4gICAgICA6IHN0eWxlVmFsdWUodGhpcy5ub2RlKCksIG5hbWUpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3R5bGVWYWx1ZShub2RlLCBuYW1lKSB7XG4gIHJldHVybiBub2RlLnN0eWxlLmdldFByb3BlcnR5VmFsdWUobmFtZSlcbiAgICAgIHx8IGRlZmF1bHRWaWV3KG5vZGUpLmdldENvbXB1dGVkU3R5bGUobm9kZSwgbnVsbCkuZ2V0UHJvcGVydHlWYWx1ZShuYW1lKTtcbn1cbiIsImZ1bmN0aW9uIHByb3BlcnR5UmVtb3ZlKG5hbWUpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIGRlbGV0ZSB0aGlzW25hbWVdO1xuICB9O1xufVxuXG5mdW5jdGlvbiBwcm9wZXJ0eUNvbnN0YW50KG5hbWUsIHZhbHVlKSB7XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICB0aGlzW25hbWVdID0gdmFsdWU7XG4gIH07XG59XG5cbmZ1bmN0aW9uIHByb3BlcnR5RnVuY3Rpb24obmFtZSwgdmFsdWUpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIHZhciB2ID0gdmFsdWUuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICBpZiAodiA9PSBudWxsKSBkZWxldGUgdGhpc1tuYW1lXTtcbiAgICBlbHNlIHRoaXNbbmFtZV0gPSB2O1xuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihuYW1lLCB2YWx1ZSkge1xuICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA+IDFcbiAgICAgID8gdGhpcy5lYWNoKCh2YWx1ZSA9PSBudWxsXG4gICAgICAgICAgPyBwcm9wZXJ0eVJlbW92ZSA6IHR5cGVvZiB2YWx1ZSA9PT0gXCJmdW5jdGlvblwiXG4gICAgICAgICAgPyBwcm9wZXJ0eUZ1bmN0aW9uXG4gICAgICAgICAgOiBwcm9wZXJ0eUNvbnN0YW50KShuYW1lLCB2YWx1ZSkpXG4gICAgICA6IHRoaXMubm9kZSgpW25hbWVdO1xufVxuIiwiZnVuY3Rpb24gY2xhc3NBcnJheShzdHJpbmcpIHtcbiAgcmV0dXJuIHN0cmluZy50cmltKCkuc3BsaXQoL158XFxzKy8pO1xufVxuXG5mdW5jdGlvbiBjbGFzc0xpc3Qobm9kZSkge1xuICByZXR1cm4gbm9kZS5jbGFzc0xpc3QgfHwgbmV3IENsYXNzTGlzdChub2RlKTtcbn1cblxuZnVuY3Rpb24gQ2xhc3NMaXN0KG5vZGUpIHtcbiAgdGhpcy5fbm9kZSA9IG5vZGU7XG4gIHRoaXMuX25hbWVzID0gY2xhc3NBcnJheShub2RlLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpIHx8IFwiXCIpO1xufVxuXG5DbGFzc0xpc3QucHJvdG90eXBlID0ge1xuICBhZGQ6IGZ1bmN0aW9uKG5hbWUpIHtcbiAgICB2YXIgaSA9IHRoaXMuX25hbWVzLmluZGV4T2YobmFtZSk7XG4gICAgaWYgKGkgPCAwKSB7XG4gICAgICB0aGlzLl9uYW1lcy5wdXNoKG5hbWUpO1xuICAgICAgdGhpcy5fbm9kZS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCB0aGlzLl9uYW1lcy5qb2luKFwiIFwiKSk7XG4gICAgfVxuICB9LFxuICByZW1vdmU6IGZ1bmN0aW9uKG5hbWUpIHtcbiAgICB2YXIgaSA9IHRoaXMuX25hbWVzLmluZGV4T2YobmFtZSk7XG4gICAgaWYgKGkgPj0gMCkge1xuICAgICAgdGhpcy5fbmFtZXMuc3BsaWNlKGksIDEpO1xuICAgICAgdGhpcy5fbm9kZS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCB0aGlzLl9uYW1lcy5qb2luKFwiIFwiKSk7XG4gICAgfVxuICB9LFxuICBjb250YWluczogZnVuY3Rpb24obmFtZSkge1xuICAgIHJldHVybiB0aGlzLl9uYW1lcy5pbmRleE9mKG5hbWUpID49IDA7XG4gIH1cbn07XG5cbmZ1bmN0aW9uIGNsYXNzZWRBZGQobm9kZSwgbmFtZXMpIHtcbiAgdmFyIGxpc3QgPSBjbGFzc0xpc3Qobm9kZSksIGkgPSAtMSwgbiA9IG5hbWVzLmxlbmd0aDtcbiAgd2hpbGUgKCsraSA8IG4pIGxpc3QuYWRkKG5hbWVzW2ldKTtcbn1cblxuZnVuY3Rpb24gY2xhc3NlZFJlbW92ZShub2RlLCBuYW1lcykge1xuICB2YXIgbGlzdCA9IGNsYXNzTGlzdChub2RlKSwgaSA9IC0xLCBuID0gbmFtZXMubGVuZ3RoO1xuICB3aGlsZSAoKytpIDwgbikgbGlzdC5yZW1vdmUobmFtZXNbaV0pO1xufVxuXG5mdW5jdGlvbiBjbGFzc2VkVHJ1ZShuYW1lcykge1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgY2xhc3NlZEFkZCh0aGlzLCBuYW1lcyk7XG4gIH07XG59XG5cbmZ1bmN0aW9uIGNsYXNzZWRGYWxzZShuYW1lcykge1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgY2xhc3NlZFJlbW92ZSh0aGlzLCBuYW1lcyk7XG4gIH07XG59XG5cbmZ1bmN0aW9uIGNsYXNzZWRGdW5jdGlvbihuYW1lcywgdmFsdWUpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgICh2YWx1ZS5hcHBseSh0aGlzLCBhcmd1bWVudHMpID8gY2xhc3NlZEFkZCA6IGNsYXNzZWRSZW1vdmUpKHRoaXMsIG5hbWVzKTtcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24obmFtZSwgdmFsdWUpIHtcbiAgdmFyIG5hbWVzID0gY2xhc3NBcnJheShuYW1lICsgXCJcIik7XG5cbiAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPCAyKSB7XG4gICAgdmFyIGxpc3QgPSBjbGFzc0xpc3QodGhpcy5ub2RlKCkpLCBpID0gLTEsIG4gPSBuYW1lcy5sZW5ndGg7XG4gICAgd2hpbGUgKCsraSA8IG4pIGlmICghbGlzdC5jb250YWlucyhuYW1lc1tpXSkpIHJldHVybiBmYWxzZTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIHJldHVybiB0aGlzLmVhY2goKHR5cGVvZiB2YWx1ZSA9PT0gXCJmdW5jdGlvblwiXG4gICAgICA/IGNsYXNzZWRGdW5jdGlvbiA6IHZhbHVlXG4gICAgICA/IGNsYXNzZWRUcnVlXG4gICAgICA6IGNsYXNzZWRGYWxzZSkobmFtZXMsIHZhbHVlKSk7XG59XG4iLCJmdW5jdGlvbiB0ZXh0UmVtb3ZlKCkge1xuICB0aGlzLnRleHRDb250ZW50ID0gXCJcIjtcbn1cblxuZnVuY3Rpb24gdGV4dENvbnN0YW50KHZhbHVlKSB7XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICB0aGlzLnRleHRDb250ZW50ID0gdmFsdWU7XG4gIH07XG59XG5cbmZ1bmN0aW9uIHRleHRGdW5jdGlvbih2YWx1ZSkge1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgdmFyIHYgPSB2YWx1ZS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIHRoaXMudGV4dENvbnRlbnQgPSB2ID09IG51bGwgPyBcIlwiIDogdjtcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24odmFsdWUpIHtcbiAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGhcbiAgICAgID8gdGhpcy5lYWNoKHZhbHVlID09IG51bGxcbiAgICAgICAgICA/IHRleHRSZW1vdmUgOiAodHlwZW9mIHZhbHVlID09PSBcImZ1bmN0aW9uXCJcbiAgICAgICAgICA/IHRleHRGdW5jdGlvblxuICAgICAgICAgIDogdGV4dENvbnN0YW50KSh2YWx1ZSkpXG4gICAgICA6IHRoaXMubm9kZSgpLnRleHRDb250ZW50O1xufVxuIiwiZnVuY3Rpb24gaHRtbFJlbW92ZSgpIHtcbiAgdGhpcy5pbm5lckhUTUwgPSBcIlwiO1xufVxuXG5mdW5jdGlvbiBodG1sQ29uc3RhbnQodmFsdWUpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuaW5uZXJIVE1MID0gdmFsdWU7XG4gIH07XG59XG5cbmZ1bmN0aW9uIGh0bWxGdW5jdGlvbih2YWx1ZSkge1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgdmFyIHYgPSB2YWx1ZS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIHRoaXMuaW5uZXJIVE1MID0gdiA9PSBudWxsID8gXCJcIiA6IHY7XG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKHZhbHVlKSB7XG4gIHJldHVybiBhcmd1bWVudHMubGVuZ3RoXG4gICAgICA/IHRoaXMuZWFjaCh2YWx1ZSA9PSBudWxsXG4gICAgICAgICAgPyBodG1sUmVtb3ZlIDogKHR5cGVvZiB2YWx1ZSA9PT0gXCJmdW5jdGlvblwiXG4gICAgICAgICAgPyBodG1sRnVuY3Rpb25cbiAgICAgICAgICA6IGh0bWxDb25zdGFudCkodmFsdWUpKVxuICAgICAgOiB0aGlzLm5vZGUoKS5pbm5lckhUTUw7XG59XG4iLCJmdW5jdGlvbiByYWlzZSgpIHtcbiAgaWYgKHRoaXMubmV4dFNpYmxpbmcpIHRoaXMucGFyZW50Tm9kZS5hcHBlbmRDaGlsZCh0aGlzKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKSB7XG4gIHJldHVybiB0aGlzLmVhY2gocmFpc2UpO1xufVxuIiwiZnVuY3Rpb24gbG93ZXIoKSB7XG4gIGlmICh0aGlzLnByZXZpb3VzU2libGluZykgdGhpcy5wYXJlbnROb2RlLmluc2VydEJlZm9yZSh0aGlzLCB0aGlzLnBhcmVudE5vZGUuZmlyc3RDaGlsZCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gdGhpcy5lYWNoKGxvd2VyKTtcbn1cbiIsImltcG9ydCBjcmVhdG9yIGZyb20gXCIuLi9jcmVhdG9yLmpzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKG5hbWUpIHtcbiAgdmFyIGNyZWF0ZSA9IHR5cGVvZiBuYW1lID09PSBcImZ1bmN0aW9uXCIgPyBuYW1lIDogY3JlYXRvcihuYW1lKTtcbiAgcmV0dXJuIHRoaXMuc2VsZWN0KGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLmFwcGVuZENoaWxkKGNyZWF0ZS5hcHBseSh0aGlzLCBhcmd1bWVudHMpKTtcbiAgfSk7XG59XG4iLCJpbXBvcnQgY3JlYXRvciBmcm9tIFwiLi4vY3JlYXRvci5qc1wiO1xuaW1wb3J0IHNlbGVjdG9yIGZyb20gXCIuLi9zZWxlY3Rvci5qc1wiO1xuXG5mdW5jdGlvbiBjb25zdGFudE51bGwoKSB7XG4gIHJldHVybiBudWxsO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihuYW1lLCBiZWZvcmUpIHtcbiAgdmFyIGNyZWF0ZSA9IHR5cGVvZiBuYW1lID09PSBcImZ1bmN0aW9uXCIgPyBuYW1lIDogY3JlYXRvcihuYW1lKSxcbiAgICAgIHNlbGVjdCA9IGJlZm9yZSA9PSBudWxsID8gY29uc3RhbnROdWxsIDogdHlwZW9mIGJlZm9yZSA9PT0gXCJmdW5jdGlvblwiID8gYmVmb3JlIDogc2VsZWN0b3IoYmVmb3JlKTtcbiAgcmV0dXJuIHRoaXMuc2VsZWN0KGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLmluc2VydEJlZm9yZShjcmVhdGUuYXBwbHkodGhpcywgYXJndW1lbnRzKSwgc2VsZWN0LmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgbnVsbCk7XG4gIH0pO1xufVxuIiwiZnVuY3Rpb24gcmVtb3ZlKCkge1xuICB2YXIgcGFyZW50ID0gdGhpcy5wYXJlbnROb2RlO1xuICBpZiAocGFyZW50KSBwYXJlbnQucmVtb3ZlQ2hpbGQodGhpcyk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gdGhpcy5lYWNoKHJlbW92ZSk7XG59XG4iLCJmdW5jdGlvbiBzZWxlY3Rpb25fY2xvbmVTaGFsbG93KCkge1xuICB2YXIgY2xvbmUgPSB0aGlzLmNsb25lTm9kZShmYWxzZSksIHBhcmVudCA9IHRoaXMucGFyZW50Tm9kZTtcbiAgcmV0dXJuIHBhcmVudCA/IHBhcmVudC5pbnNlcnRCZWZvcmUoY2xvbmUsIHRoaXMubmV4dFNpYmxpbmcpIDogY2xvbmU7XG59XG5cbmZ1bmN0aW9uIHNlbGVjdGlvbl9jbG9uZURlZXAoKSB7XG4gIHZhciBjbG9uZSA9IHRoaXMuY2xvbmVOb2RlKHRydWUpLCBwYXJlbnQgPSB0aGlzLnBhcmVudE5vZGU7XG4gIHJldHVybiBwYXJlbnQgPyBwYXJlbnQuaW5zZXJ0QmVmb3JlKGNsb25lLCB0aGlzLm5leHRTaWJsaW5nKSA6IGNsb25lO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihkZWVwKSB7XG4gIHJldHVybiB0aGlzLnNlbGVjdChkZWVwID8gc2VsZWN0aW9uX2Nsb25lRGVlcCA6IHNlbGVjdGlvbl9jbG9uZVNoYWxsb3cpO1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24odmFsdWUpIHtcbiAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGhcbiAgICAgID8gdGhpcy5wcm9wZXJ0eShcIl9fZGF0YV9fXCIsIHZhbHVlKVxuICAgICAgOiB0aGlzLm5vZGUoKS5fX2RhdGFfXztcbn1cbiIsImZ1bmN0aW9uIGNvbnRleHRMaXN0ZW5lcihsaXN0ZW5lcikge1xuICByZXR1cm4gZnVuY3Rpb24oZXZlbnQpIHtcbiAgICBsaXN0ZW5lci5jYWxsKHRoaXMsIGV2ZW50LCB0aGlzLl9fZGF0YV9fKTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gcGFyc2VUeXBlbmFtZXModHlwZW5hbWVzKSB7XG4gIHJldHVybiB0eXBlbmFtZXMudHJpbSgpLnNwbGl0KC9efFxccysvKS5tYXAoZnVuY3Rpb24odCkge1xuICAgIHZhciBuYW1lID0gXCJcIiwgaSA9IHQuaW5kZXhPZihcIi5cIik7XG4gICAgaWYgKGkgPj0gMCkgbmFtZSA9IHQuc2xpY2UoaSArIDEpLCB0ID0gdC5zbGljZSgwLCBpKTtcbiAgICByZXR1cm4ge3R5cGU6IHQsIG5hbWU6IG5hbWV9O1xuICB9KTtcbn1cblxuZnVuY3Rpb24gb25SZW1vdmUodHlwZW5hbWUpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIHZhciBvbiA9IHRoaXMuX19vbjtcbiAgICBpZiAoIW9uKSByZXR1cm47XG4gICAgZm9yICh2YXIgaiA9IDAsIGkgPSAtMSwgbSA9IG9uLmxlbmd0aCwgbzsgaiA8IG07ICsraikge1xuICAgICAgaWYgKG8gPSBvbltqXSwgKCF0eXBlbmFtZS50eXBlIHx8IG8udHlwZSA9PT0gdHlwZW5hbWUudHlwZSkgJiYgby5uYW1lID09PSB0eXBlbmFtZS5uYW1lKSB7XG4gICAgICAgIHRoaXMucmVtb3ZlRXZlbnRMaXN0ZW5lcihvLnR5cGUsIG8ubGlzdGVuZXIsIG8ub3B0aW9ucyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBvblsrK2ldID0gbztcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKCsraSkgb24ubGVuZ3RoID0gaTtcbiAgICBlbHNlIGRlbGV0ZSB0aGlzLl9fb247XG4gIH07XG59XG5cbmZ1bmN0aW9uIG9uQWRkKHR5cGVuYW1lLCB2YWx1ZSwgb3B0aW9ucykge1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgdmFyIG9uID0gdGhpcy5fX29uLCBvLCBsaXN0ZW5lciA9IGNvbnRleHRMaXN0ZW5lcih2YWx1ZSk7XG4gICAgaWYgKG9uKSBmb3IgKHZhciBqID0gMCwgbSA9IG9uLmxlbmd0aDsgaiA8IG07ICsraikge1xuICAgICAgaWYgKChvID0gb25bal0pLnR5cGUgPT09IHR5cGVuYW1lLnR5cGUgJiYgby5uYW1lID09PSB0eXBlbmFtZS5uYW1lKSB7XG4gICAgICAgIHRoaXMucmVtb3ZlRXZlbnRMaXN0ZW5lcihvLnR5cGUsIG8ubGlzdGVuZXIsIG8ub3B0aW9ucyk7XG4gICAgICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcihvLnR5cGUsIG8ubGlzdGVuZXIgPSBsaXN0ZW5lciwgby5vcHRpb25zID0gb3B0aW9ucyk7XG4gICAgICAgIG8udmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIodHlwZW5hbWUudHlwZSwgbGlzdGVuZXIsIG9wdGlvbnMpO1xuICAgIG8gPSB7dHlwZTogdHlwZW5hbWUudHlwZSwgbmFtZTogdHlwZW5hbWUubmFtZSwgdmFsdWU6IHZhbHVlLCBsaXN0ZW5lcjogbGlzdGVuZXIsIG9wdGlvbnM6IG9wdGlvbnN9O1xuICAgIGlmICghb24pIHRoaXMuX19vbiA9IFtvXTtcbiAgICBlbHNlIG9uLnB1c2gobyk7XG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKHR5cGVuYW1lLCB2YWx1ZSwgb3B0aW9ucykge1xuICB2YXIgdHlwZW5hbWVzID0gcGFyc2VUeXBlbmFtZXModHlwZW5hbWUgKyBcIlwiKSwgaSwgbiA9IHR5cGVuYW1lcy5sZW5ndGgsIHQ7XG5cbiAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPCAyKSB7XG4gICAgdmFyIG9uID0gdGhpcy5ub2RlKCkuX19vbjtcbiAgICBpZiAob24pIGZvciAodmFyIGogPSAwLCBtID0gb24ubGVuZ3RoLCBvOyBqIDwgbTsgKytqKSB7XG4gICAgICBmb3IgKGkgPSAwLCBvID0gb25bal07IGkgPCBuOyArK2kpIHtcbiAgICAgICAgaWYgKCh0ID0gdHlwZW5hbWVzW2ldKS50eXBlID09PSBvLnR5cGUgJiYgdC5uYW1lID09PSBvLm5hbWUpIHtcbiAgICAgICAgICByZXR1cm4gby52YWx1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm47XG4gIH1cblxuICBvbiA9IHZhbHVlID8gb25BZGQgOiBvblJlbW92ZTtcbiAgZm9yIChpID0gMDsgaSA8IG47ICsraSkgdGhpcy5lYWNoKG9uKHR5cGVuYW1lc1tpXSwgdmFsdWUsIG9wdGlvbnMpKTtcbiAgcmV0dXJuIHRoaXM7XG59XG4iLCJpbXBvcnQgZGVmYXVsdFZpZXcgZnJvbSBcIi4uL3dpbmRvdy5qc1wiO1xuXG5mdW5jdGlvbiBkaXNwYXRjaEV2ZW50KG5vZGUsIHR5cGUsIHBhcmFtcykge1xuICB2YXIgd2luZG93ID0gZGVmYXVsdFZpZXcobm9kZSksXG4gICAgICBldmVudCA9IHdpbmRvdy5DdXN0b21FdmVudDtcblxuICBpZiAodHlwZW9mIGV2ZW50ID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICBldmVudCA9IG5ldyBldmVudCh0eXBlLCBwYXJhbXMpO1xuICB9IGVsc2Uge1xuICAgIGV2ZW50ID0gd2luZG93LmRvY3VtZW50LmNyZWF0ZUV2ZW50KFwiRXZlbnRcIik7XG4gICAgaWYgKHBhcmFtcykgZXZlbnQuaW5pdEV2ZW50KHR5cGUsIHBhcmFtcy5idWJibGVzLCBwYXJhbXMuY2FuY2VsYWJsZSksIGV2ZW50LmRldGFpbCA9IHBhcmFtcy5kZXRhaWw7XG4gICAgZWxzZSBldmVudC5pbml0RXZlbnQodHlwZSwgZmFsc2UsIGZhbHNlKTtcbiAgfVxuXG4gIG5vZGUuZGlzcGF0Y2hFdmVudChldmVudCk7XG59XG5cbmZ1bmN0aW9uIGRpc3BhdGNoQ29uc3RhbnQodHlwZSwgcGFyYW1zKSB7XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gZGlzcGF0Y2hFdmVudCh0aGlzLCB0eXBlLCBwYXJhbXMpO1xuICB9O1xufVxuXG5mdW5jdGlvbiBkaXNwYXRjaEZ1bmN0aW9uKHR5cGUsIHBhcmFtcykge1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIGRpc3BhdGNoRXZlbnQodGhpcywgdHlwZSwgcGFyYW1zLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykpO1xuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbih0eXBlLCBwYXJhbXMpIHtcbiAgcmV0dXJuIHRoaXMuZWFjaCgodHlwZW9mIHBhcmFtcyA9PT0gXCJmdW5jdGlvblwiXG4gICAgICA/IGRpc3BhdGNoRnVuY3Rpb25cbiAgICAgIDogZGlzcGF0Y2hDb25zdGFudCkodHlwZSwgcGFyYW1zKSk7XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiooKSB7XG4gIGZvciAodmFyIGdyb3VwcyA9IHRoaXMuX2dyb3VwcywgaiA9IDAsIG0gPSBncm91cHMubGVuZ3RoOyBqIDwgbTsgKytqKSB7XG4gICAgZm9yICh2YXIgZ3JvdXAgPSBncm91cHNbal0sIGkgPSAwLCBuID0gZ3JvdXAubGVuZ3RoLCBub2RlOyBpIDwgbjsgKytpKSB7XG4gICAgICBpZiAobm9kZSA9IGdyb3VwW2ldKSB5aWVsZCBub2RlO1xuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IHNlbGVjdGlvbl9zZWxlY3QgZnJvbSBcIi4vc2VsZWN0LmpzXCI7XG5pbXBvcnQgc2VsZWN0aW9uX3NlbGVjdEFsbCBmcm9tIFwiLi9zZWxlY3RBbGwuanNcIjtcbmltcG9ydCBzZWxlY3Rpb25fc2VsZWN0Q2hpbGQgZnJvbSBcIi4vc2VsZWN0Q2hpbGQuanNcIjtcbmltcG9ydCBzZWxlY3Rpb25fc2VsZWN0Q2hpbGRyZW4gZnJvbSBcIi4vc2VsZWN0Q2hpbGRyZW4uanNcIjtcbmltcG9ydCBzZWxlY3Rpb25fZmlsdGVyIGZyb20gXCIuL2ZpbHRlci5qc1wiO1xuaW1wb3J0IHNlbGVjdGlvbl9kYXRhIGZyb20gXCIuL2RhdGEuanNcIjtcbmltcG9ydCBzZWxlY3Rpb25fZW50ZXIgZnJvbSBcIi4vZW50ZXIuanNcIjtcbmltcG9ydCBzZWxlY3Rpb25fZXhpdCBmcm9tIFwiLi9leGl0LmpzXCI7XG5pbXBvcnQgc2VsZWN0aW9uX2pvaW4gZnJvbSBcIi4vam9pbi5qc1wiO1xuaW1wb3J0IHNlbGVjdGlvbl9tZXJnZSBmcm9tIFwiLi9tZXJnZS5qc1wiO1xuaW1wb3J0IHNlbGVjdGlvbl9vcmRlciBmcm9tIFwiLi9vcmRlci5qc1wiO1xuaW1wb3J0IHNlbGVjdGlvbl9zb3J0IGZyb20gXCIuL3NvcnQuanNcIjtcbmltcG9ydCBzZWxlY3Rpb25fY2FsbCBmcm9tIFwiLi9jYWxsLmpzXCI7XG5pbXBvcnQgc2VsZWN0aW9uX25vZGVzIGZyb20gXCIuL25vZGVzLmpzXCI7XG5pbXBvcnQgc2VsZWN0aW9uX25vZGUgZnJvbSBcIi4vbm9kZS5qc1wiO1xuaW1wb3J0IHNlbGVjdGlvbl9zaXplIGZyb20gXCIuL3NpemUuanNcIjtcbmltcG9ydCBzZWxlY3Rpb25fZW1wdHkgZnJvbSBcIi4vZW1wdHkuanNcIjtcbmltcG9ydCBzZWxlY3Rpb25fZWFjaCBmcm9tIFwiLi9lYWNoLmpzXCI7XG5pbXBvcnQgc2VsZWN0aW9uX2F0dHIgZnJvbSBcIi4vYXR0ci5qc1wiO1xuaW1wb3J0IHNlbGVjdGlvbl9zdHlsZSBmcm9tIFwiLi9zdHlsZS5qc1wiO1xuaW1wb3J0IHNlbGVjdGlvbl9wcm9wZXJ0eSBmcm9tIFwiLi9wcm9wZXJ0eS5qc1wiO1xuaW1wb3J0IHNlbGVjdGlvbl9jbGFzc2VkIGZyb20gXCIuL2NsYXNzZWQuanNcIjtcbmltcG9ydCBzZWxlY3Rpb25fdGV4dCBmcm9tIFwiLi90ZXh0LmpzXCI7XG5pbXBvcnQgc2VsZWN0aW9uX2h0bWwgZnJvbSBcIi4vaHRtbC5qc1wiO1xuaW1wb3J0IHNlbGVjdGlvbl9yYWlzZSBmcm9tIFwiLi9yYWlzZS5qc1wiO1xuaW1wb3J0IHNlbGVjdGlvbl9sb3dlciBmcm9tIFwiLi9sb3dlci5qc1wiO1xuaW1wb3J0IHNlbGVjdGlvbl9hcHBlbmQgZnJvbSBcIi4vYXBwZW5kLmpzXCI7XG5pbXBvcnQgc2VsZWN0aW9uX2luc2VydCBmcm9tIFwiLi9pbnNlcnQuanNcIjtcbmltcG9ydCBzZWxlY3Rpb25fcmVtb3ZlIGZyb20gXCIuL3JlbW92ZS5qc1wiO1xuaW1wb3J0IHNlbGVjdGlvbl9jbG9uZSBmcm9tIFwiLi9jbG9uZS5qc1wiO1xuaW1wb3J0IHNlbGVjdGlvbl9kYXR1bSBmcm9tIFwiLi9kYXR1bS5qc1wiO1xuaW1wb3J0IHNlbGVjdGlvbl9vbiBmcm9tIFwiLi9vbi5qc1wiO1xuaW1wb3J0IHNlbGVjdGlvbl9kaXNwYXRjaCBmcm9tIFwiLi9kaXNwYXRjaC5qc1wiO1xuaW1wb3J0IHNlbGVjdGlvbl9pdGVyYXRvciBmcm9tIFwiLi9pdGVyYXRvci5qc1wiO1xuXG5leHBvcnQgdmFyIHJvb3QgPSBbbnVsbF07XG5cbmV4cG9ydCBmdW5jdGlvbiBTZWxlY3Rpb24oZ3JvdXBzLCBwYXJlbnRzKSB7XG4gIHRoaXMuX2dyb3VwcyA9IGdyb3VwcztcbiAgdGhpcy5fcGFyZW50cyA9IHBhcmVudHM7XG59XG5cbmZ1bmN0aW9uIHNlbGVjdGlvbigpIHtcbiAgcmV0dXJuIG5ldyBTZWxlY3Rpb24oW1tkb2N1bWVudC5kb2N1bWVudEVsZW1lbnRdXSwgcm9vdCk7XG59XG5cbmZ1bmN0aW9uIHNlbGVjdGlvbl9zZWxlY3Rpb24oKSB7XG4gIHJldHVybiB0aGlzO1xufVxuXG5TZWxlY3Rpb24ucHJvdG90eXBlID0gc2VsZWN0aW9uLnByb3RvdHlwZSA9IHtcbiAgY29uc3RydWN0b3I6IFNlbGVjdGlvbixcbiAgc2VsZWN0OiBzZWxlY3Rpb25fc2VsZWN0LFxuICBzZWxlY3RBbGw6IHNlbGVjdGlvbl9zZWxlY3RBbGwsXG4gIHNlbGVjdENoaWxkOiBzZWxlY3Rpb25fc2VsZWN0Q2hpbGQsXG4gIHNlbGVjdENoaWxkcmVuOiBzZWxlY3Rpb25fc2VsZWN0Q2hpbGRyZW4sXG4gIGZpbHRlcjogc2VsZWN0aW9uX2ZpbHRlcixcbiAgZGF0YTogc2VsZWN0aW9uX2RhdGEsXG4gIGVudGVyOiBzZWxlY3Rpb25fZW50ZXIsXG4gIGV4aXQ6IHNlbGVjdGlvbl9leGl0LFxuICBqb2luOiBzZWxlY3Rpb25fam9pbixcbiAgbWVyZ2U6IHNlbGVjdGlvbl9tZXJnZSxcbiAgc2VsZWN0aW9uOiBzZWxlY3Rpb25fc2VsZWN0aW9uLFxuICBvcmRlcjogc2VsZWN0aW9uX29yZGVyLFxuICBzb3J0OiBzZWxlY3Rpb25fc29ydCxcbiAgY2FsbDogc2VsZWN0aW9uX2NhbGwsXG4gIG5vZGVzOiBzZWxlY3Rpb25fbm9kZXMsXG4gIG5vZGU6IHNlbGVjdGlvbl9ub2RlLFxuICBzaXplOiBzZWxlY3Rpb25fc2l6ZSxcbiAgZW1wdHk6IHNlbGVjdGlvbl9lbXB0eSxcbiAgZWFjaDogc2VsZWN0aW9uX2VhY2gsXG4gIGF0dHI6IHNlbGVjdGlvbl9hdHRyLFxuICBzdHlsZTogc2VsZWN0aW9uX3N0eWxlLFxuICBwcm9wZXJ0eTogc2VsZWN0aW9uX3Byb3BlcnR5LFxuICBjbGFzc2VkOiBzZWxlY3Rpb25fY2xhc3NlZCxcbiAgdGV4dDogc2VsZWN0aW9uX3RleHQsXG4gIGh0bWw6IHNlbGVjdGlvbl9odG1sLFxuICByYWlzZTogc2VsZWN0aW9uX3JhaXNlLFxuICBsb3dlcjogc2VsZWN0aW9uX2xvd2VyLFxuICBhcHBlbmQ6IHNlbGVjdGlvbl9hcHBlbmQsXG4gIGluc2VydDogc2VsZWN0aW9uX2luc2VydCxcbiAgcmVtb3ZlOiBzZWxlY3Rpb25fcmVtb3ZlLFxuICBjbG9uZTogc2VsZWN0aW9uX2Nsb25lLFxuICBkYXR1bTogc2VsZWN0aW9uX2RhdHVtLFxuICBvbjogc2VsZWN0aW9uX29uLFxuICBkaXNwYXRjaDogc2VsZWN0aW9uX2Rpc3BhdGNoLFxuICBbU3ltYm9sLml0ZXJhdG9yXTogc2VsZWN0aW9uX2l0ZXJhdG9yXG59O1xuXG5leHBvcnQgZGVmYXVsdCBzZWxlY3Rpb247XG4iLCJpbXBvcnQge1NlbGVjdGlvbiwgcm9vdH0gZnJvbSBcIi4vc2VsZWN0aW9uL2luZGV4LmpzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKHNlbGVjdG9yKSB7XG4gIHJldHVybiB0eXBlb2Ygc2VsZWN0b3IgPT09IFwic3RyaW5nXCJcbiAgICAgID8gbmV3IFNlbGVjdGlvbihbW2RvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpXV0sIFtkb2N1bWVudC5kb2N1bWVudEVsZW1lbnRdKVxuICAgICAgOiBuZXcgU2VsZWN0aW9uKFtbc2VsZWN0b3JdXSwgcm9vdCk7XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbihjb25zdHJ1Y3RvciwgZmFjdG9yeSwgcHJvdG90eXBlKSB7XG4gIGNvbnN0cnVjdG9yLnByb3RvdHlwZSA9IGZhY3RvcnkucHJvdG90eXBlID0gcHJvdG90eXBlO1xuICBwcm90b3R5cGUuY29uc3RydWN0b3IgPSBjb25zdHJ1Y3Rvcjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGV4dGVuZChwYXJlbnQsIGRlZmluaXRpb24pIHtcbiAgdmFyIHByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUocGFyZW50LnByb3RvdHlwZSk7XG4gIGZvciAodmFyIGtleSBpbiBkZWZpbml0aW9uKSBwcm90b3R5cGVba2V5XSA9IGRlZmluaXRpb25ba2V5XTtcbiAgcmV0dXJuIHByb3RvdHlwZTtcbn1cbiIsImltcG9ydCBkZWZpbmUsIHtleHRlbmR9IGZyb20gXCIuL2RlZmluZS5qc1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gQ29sb3IoKSB7fVxuXG5leHBvcnQgdmFyIGRhcmtlciA9IDAuNztcbmV4cG9ydCB2YXIgYnJpZ2h0ZXIgPSAxIC8gZGFya2VyO1xuXG52YXIgcmVJID0gXCJcXFxccyooWystXT9cXFxcZCspXFxcXHMqXCIsXG4gICAgcmVOID0gXCJcXFxccyooWystXT8oPzpcXFxcZCpcXFxcLik/XFxcXGQrKD86W2VFXVsrLV0/XFxcXGQrKT8pXFxcXHMqXCIsXG4gICAgcmVQID0gXCJcXFxccyooWystXT8oPzpcXFxcZCpcXFxcLik/XFxcXGQrKD86W2VFXVsrLV0/XFxcXGQrKT8pJVxcXFxzKlwiLFxuICAgIHJlSGV4ID0gL14jKFswLTlhLWZdezMsOH0pJC8sXG4gICAgcmVSZ2JJbnRlZ2VyID0gbmV3IFJlZ0V4cChgXnJnYlxcXFwoJHtyZUl9LCR7cmVJfSwke3JlSX1cXFxcKSRgKSxcbiAgICByZVJnYlBlcmNlbnQgPSBuZXcgUmVnRXhwKGBecmdiXFxcXCgke3JlUH0sJHtyZVB9LCR7cmVQfVxcXFwpJGApLFxuICAgIHJlUmdiYUludGVnZXIgPSBuZXcgUmVnRXhwKGBecmdiYVxcXFwoJHtyZUl9LCR7cmVJfSwke3JlSX0sJHtyZU59XFxcXCkkYCksXG4gICAgcmVSZ2JhUGVyY2VudCA9IG5ldyBSZWdFeHAoYF5yZ2JhXFxcXCgke3JlUH0sJHtyZVB9LCR7cmVQfSwke3JlTn1cXFxcKSRgKSxcbiAgICByZUhzbFBlcmNlbnQgPSBuZXcgUmVnRXhwKGBeaHNsXFxcXCgke3JlTn0sJHtyZVB9LCR7cmVQfVxcXFwpJGApLFxuICAgIHJlSHNsYVBlcmNlbnQgPSBuZXcgUmVnRXhwKGBeaHNsYVxcXFwoJHtyZU59LCR7cmVQfSwke3JlUH0sJHtyZU59XFxcXCkkYCk7XG5cbnZhciBuYW1lZCA9IHtcbiAgYWxpY2VibHVlOiAweGYwZjhmZixcbiAgYW50aXF1ZXdoaXRlOiAweGZhZWJkNyxcbiAgYXF1YTogMHgwMGZmZmYsXG4gIGFxdWFtYXJpbmU6IDB4N2ZmZmQ0LFxuICBhenVyZTogMHhmMGZmZmYsXG4gIGJlaWdlOiAweGY1ZjVkYyxcbiAgYmlzcXVlOiAweGZmZTRjNCxcbiAgYmxhY2s6IDB4MDAwMDAwLFxuICBibGFuY2hlZGFsbW9uZDogMHhmZmViY2QsXG4gIGJsdWU6IDB4MDAwMGZmLFxuICBibHVldmlvbGV0OiAweDhhMmJlMixcbiAgYnJvd246IDB4YTUyYTJhLFxuICBidXJseXdvb2Q6IDB4ZGViODg3LFxuICBjYWRldGJsdWU6IDB4NWY5ZWEwLFxuICBjaGFydHJldXNlOiAweDdmZmYwMCxcbiAgY2hvY29sYXRlOiAweGQyNjkxZSxcbiAgY29yYWw6IDB4ZmY3ZjUwLFxuICBjb3JuZmxvd2VyYmx1ZTogMHg2NDk1ZWQsXG4gIGNvcm5zaWxrOiAweGZmZjhkYyxcbiAgY3JpbXNvbjogMHhkYzE0M2MsXG4gIGN5YW46IDB4MDBmZmZmLFxuICBkYXJrYmx1ZTogMHgwMDAwOGIsXG4gIGRhcmtjeWFuOiAweDAwOGI4YixcbiAgZGFya2dvbGRlbnJvZDogMHhiODg2MGIsXG4gIGRhcmtncmF5OiAweGE5YTlhOSxcbiAgZGFya2dyZWVuOiAweDAwNjQwMCxcbiAgZGFya2dyZXk6IDB4YTlhOWE5LFxuICBkYXJra2hha2k6IDB4YmRiNzZiLFxuICBkYXJrbWFnZW50YTogMHg4YjAwOGIsXG4gIGRhcmtvbGl2ZWdyZWVuOiAweDU1NmIyZixcbiAgZGFya29yYW5nZTogMHhmZjhjMDAsXG4gIGRhcmtvcmNoaWQ6IDB4OTkzMmNjLFxuICBkYXJrcmVkOiAweDhiMDAwMCxcbiAgZGFya3NhbG1vbjogMHhlOTk2N2EsXG4gIGRhcmtzZWFncmVlbjogMHg4ZmJjOGYsXG4gIGRhcmtzbGF0ZWJsdWU6IDB4NDgzZDhiLFxuICBkYXJrc2xhdGVncmF5OiAweDJmNGY0ZixcbiAgZGFya3NsYXRlZ3JleTogMHgyZjRmNGYsXG4gIGRhcmt0dXJxdW9pc2U6IDB4MDBjZWQxLFxuICBkYXJrdmlvbGV0OiAweDk0MDBkMyxcbiAgZGVlcHBpbms6IDB4ZmYxNDkzLFxuICBkZWVwc2t5Ymx1ZTogMHgwMGJmZmYsXG4gIGRpbWdyYXk6IDB4Njk2OTY5LFxuICBkaW1ncmV5OiAweDY5Njk2OSxcbiAgZG9kZ2VyYmx1ZTogMHgxZTkwZmYsXG4gIGZpcmVicmljazogMHhiMjIyMjIsXG4gIGZsb3JhbHdoaXRlOiAweGZmZmFmMCxcbiAgZm9yZXN0Z3JlZW46IDB4MjI4YjIyLFxuICBmdWNoc2lhOiAweGZmMDBmZixcbiAgZ2FpbnNib3JvOiAweGRjZGNkYyxcbiAgZ2hvc3R3aGl0ZTogMHhmOGY4ZmYsXG4gIGdvbGQ6IDB4ZmZkNzAwLFxuICBnb2xkZW5yb2Q6IDB4ZGFhNTIwLFxuICBncmF5OiAweDgwODA4MCxcbiAgZ3JlZW46IDB4MDA4MDAwLFxuICBncmVlbnllbGxvdzogMHhhZGZmMmYsXG4gIGdyZXk6IDB4ODA4MDgwLFxuICBob25leWRldzogMHhmMGZmZjAsXG4gIGhvdHBpbms6IDB4ZmY2OWI0LFxuICBpbmRpYW5yZWQ6IDB4Y2Q1YzVjLFxuICBpbmRpZ286IDB4NGIwMDgyLFxuICBpdm9yeTogMHhmZmZmZjAsXG4gIGtoYWtpOiAweGYwZTY4YyxcbiAgbGF2ZW5kZXI6IDB4ZTZlNmZhLFxuICBsYXZlbmRlcmJsdXNoOiAweGZmZjBmNSxcbiAgbGF3bmdyZWVuOiAweDdjZmMwMCxcbiAgbGVtb25jaGlmZm9uOiAweGZmZmFjZCxcbiAgbGlnaHRibHVlOiAweGFkZDhlNixcbiAgbGlnaHRjb3JhbDogMHhmMDgwODAsXG4gIGxpZ2h0Y3lhbjogMHhlMGZmZmYsXG4gIGxpZ2h0Z29sZGVucm9keWVsbG93OiAweGZhZmFkMixcbiAgbGlnaHRncmF5OiAweGQzZDNkMyxcbiAgbGlnaHRncmVlbjogMHg5MGVlOTAsXG4gIGxpZ2h0Z3JleTogMHhkM2QzZDMsXG4gIGxpZ2h0cGluazogMHhmZmI2YzEsXG4gIGxpZ2h0c2FsbW9uOiAweGZmYTA3YSxcbiAgbGlnaHRzZWFncmVlbjogMHgyMGIyYWEsXG4gIGxpZ2h0c2t5Ymx1ZTogMHg4N2NlZmEsXG4gIGxpZ2h0c2xhdGVncmF5OiAweDc3ODg5OSxcbiAgbGlnaHRzbGF0ZWdyZXk6IDB4Nzc4ODk5LFxuICBsaWdodHN0ZWVsYmx1ZTogMHhiMGM0ZGUsXG4gIGxpZ2h0eWVsbG93OiAweGZmZmZlMCxcbiAgbGltZTogMHgwMGZmMDAsXG4gIGxpbWVncmVlbjogMHgzMmNkMzIsXG4gIGxpbmVuOiAweGZhZjBlNixcbiAgbWFnZW50YTogMHhmZjAwZmYsXG4gIG1hcm9vbjogMHg4MDAwMDAsXG4gIG1lZGl1bWFxdWFtYXJpbmU6IDB4NjZjZGFhLFxuICBtZWRpdW1ibHVlOiAweDAwMDBjZCxcbiAgbWVkaXVtb3JjaGlkOiAweGJhNTVkMyxcbiAgbWVkaXVtcHVycGxlOiAweDkzNzBkYixcbiAgbWVkaXVtc2VhZ3JlZW46IDB4M2NiMzcxLFxuICBtZWRpdW1zbGF0ZWJsdWU6IDB4N2I2OGVlLFxuICBtZWRpdW1zcHJpbmdncmVlbjogMHgwMGZhOWEsXG4gIG1lZGl1bXR1cnF1b2lzZTogMHg0OGQxY2MsXG4gIG1lZGl1bXZpb2xldHJlZDogMHhjNzE1ODUsXG4gIG1pZG5pZ2h0Ymx1ZTogMHgxOTE5NzAsXG4gIG1pbnRjcmVhbTogMHhmNWZmZmEsXG4gIG1pc3R5cm9zZTogMHhmZmU0ZTEsXG4gIG1vY2Nhc2luOiAweGZmZTRiNSxcbiAgbmF2YWpvd2hpdGU6IDB4ZmZkZWFkLFxuICBuYXZ5OiAweDAwMDA4MCxcbiAgb2xkbGFjZTogMHhmZGY1ZTYsXG4gIG9saXZlOiAweDgwODAwMCxcbiAgb2xpdmVkcmFiOiAweDZiOGUyMyxcbiAgb3JhbmdlOiAweGZmYTUwMCxcbiAgb3JhbmdlcmVkOiAweGZmNDUwMCxcbiAgb3JjaGlkOiAweGRhNzBkNixcbiAgcGFsZWdvbGRlbnJvZDogMHhlZWU4YWEsXG4gIHBhbGVncmVlbjogMHg5OGZiOTgsXG4gIHBhbGV0dXJxdW9pc2U6IDB4YWZlZWVlLFxuICBwYWxldmlvbGV0cmVkOiAweGRiNzA5MyxcbiAgcGFwYXlhd2hpcDogMHhmZmVmZDUsXG4gIHBlYWNocHVmZjogMHhmZmRhYjksXG4gIHBlcnU6IDB4Y2Q4NTNmLFxuICBwaW5rOiAweGZmYzBjYixcbiAgcGx1bTogMHhkZGEwZGQsXG4gIHBvd2RlcmJsdWU6IDB4YjBlMGU2LFxuICBwdXJwbGU6IDB4ODAwMDgwLFxuICByZWJlY2NhcHVycGxlOiAweDY2MzM5OSxcbiAgcmVkOiAweGZmMDAwMCxcbiAgcm9zeWJyb3duOiAweGJjOGY4ZixcbiAgcm95YWxibHVlOiAweDQxNjllMSxcbiAgc2FkZGxlYnJvd246IDB4OGI0NTEzLFxuICBzYWxtb246IDB4ZmE4MDcyLFxuICBzYW5keWJyb3duOiAweGY0YTQ2MCxcbiAgc2VhZ3JlZW46IDB4MmU4YjU3LFxuICBzZWFzaGVsbDogMHhmZmY1ZWUsXG4gIHNpZW5uYTogMHhhMDUyMmQsXG4gIHNpbHZlcjogMHhjMGMwYzAsXG4gIHNreWJsdWU6IDB4ODdjZWViLFxuICBzbGF0ZWJsdWU6IDB4NmE1YWNkLFxuICBzbGF0ZWdyYXk6IDB4NzA4MDkwLFxuICBzbGF0ZWdyZXk6IDB4NzA4MDkwLFxuICBzbm93OiAweGZmZmFmYSxcbiAgc3ByaW5nZ3JlZW46IDB4MDBmZjdmLFxuICBzdGVlbGJsdWU6IDB4NDY4MmI0LFxuICB0YW46IDB4ZDJiNDhjLFxuICB0ZWFsOiAweDAwODA4MCxcbiAgdGhpc3RsZTogMHhkOGJmZDgsXG4gIHRvbWF0bzogMHhmZjYzNDcsXG4gIHR1cnF1b2lzZTogMHg0MGUwZDAsXG4gIHZpb2xldDogMHhlZTgyZWUsXG4gIHdoZWF0OiAweGY1ZGViMyxcbiAgd2hpdGU6IDB4ZmZmZmZmLFxuICB3aGl0ZXNtb2tlOiAweGY1ZjVmNSxcbiAgeWVsbG93OiAweGZmZmYwMCxcbiAgeWVsbG93Z3JlZW46IDB4OWFjZDMyXG59O1xuXG5kZWZpbmUoQ29sb3IsIGNvbG9yLCB7XG4gIGNvcHkoY2hhbm5lbHMpIHtcbiAgICByZXR1cm4gT2JqZWN0LmFzc2lnbihuZXcgdGhpcy5jb25zdHJ1Y3RvciwgdGhpcywgY2hhbm5lbHMpO1xuICB9LFxuICBkaXNwbGF5YWJsZSgpIHtcbiAgICByZXR1cm4gdGhpcy5yZ2IoKS5kaXNwbGF5YWJsZSgpO1xuICB9LFxuICBoZXg6IGNvbG9yX2Zvcm1hdEhleCwgLy8gRGVwcmVjYXRlZCEgVXNlIGNvbG9yLmZvcm1hdEhleC5cbiAgZm9ybWF0SGV4OiBjb2xvcl9mb3JtYXRIZXgsXG4gIGZvcm1hdEhleDg6IGNvbG9yX2Zvcm1hdEhleDgsXG4gIGZvcm1hdEhzbDogY29sb3JfZm9ybWF0SHNsLFxuICBmb3JtYXRSZ2I6IGNvbG9yX2Zvcm1hdFJnYixcbiAgdG9TdHJpbmc6IGNvbG9yX2Zvcm1hdFJnYlxufSk7XG5cbmZ1bmN0aW9uIGNvbG9yX2Zvcm1hdEhleCgpIHtcbiAgcmV0dXJuIHRoaXMucmdiKCkuZm9ybWF0SGV4KCk7XG59XG5cbmZ1bmN0aW9uIGNvbG9yX2Zvcm1hdEhleDgoKSB7XG4gIHJldHVybiB0aGlzLnJnYigpLmZvcm1hdEhleDgoKTtcbn1cblxuZnVuY3Rpb24gY29sb3JfZm9ybWF0SHNsKCkge1xuICByZXR1cm4gaHNsQ29udmVydCh0aGlzKS5mb3JtYXRIc2woKTtcbn1cblxuZnVuY3Rpb24gY29sb3JfZm9ybWF0UmdiKCkge1xuICByZXR1cm4gdGhpcy5yZ2IoKS5mb3JtYXRSZ2IoKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY29sb3IoZm9ybWF0KSB7XG4gIHZhciBtLCBsO1xuICBmb3JtYXQgPSAoZm9ybWF0ICsgXCJcIikudHJpbSgpLnRvTG93ZXJDYXNlKCk7XG4gIHJldHVybiAobSA9IHJlSGV4LmV4ZWMoZm9ybWF0KSkgPyAobCA9IG1bMV0ubGVuZ3RoLCBtID0gcGFyc2VJbnQobVsxXSwgMTYpLCBsID09PSA2ID8gcmdibihtKSAvLyAjZmYwMDAwXG4gICAgICA6IGwgPT09IDMgPyBuZXcgUmdiKChtID4+IDggJiAweGYpIHwgKG0gPj4gNCAmIDB4ZjApLCAobSA+PiA0ICYgMHhmKSB8IChtICYgMHhmMCksICgobSAmIDB4ZikgPDwgNCkgfCAobSAmIDB4ZiksIDEpIC8vICNmMDBcbiAgICAgIDogbCA9PT0gOCA/IHJnYmEobSA+PiAyNCAmIDB4ZmYsIG0gPj4gMTYgJiAweGZmLCBtID4+IDggJiAweGZmLCAobSAmIDB4ZmYpIC8gMHhmZikgLy8gI2ZmMDAwMDAwXG4gICAgICA6IGwgPT09IDQgPyByZ2JhKChtID4+IDEyICYgMHhmKSB8IChtID4+IDggJiAweGYwKSwgKG0gPj4gOCAmIDB4ZikgfCAobSA+PiA0ICYgMHhmMCksIChtID4+IDQgJiAweGYpIHwgKG0gJiAweGYwKSwgKCgobSAmIDB4ZikgPDwgNCkgfCAobSAmIDB4ZikpIC8gMHhmZikgLy8gI2YwMDBcbiAgICAgIDogbnVsbCkgLy8gaW52YWxpZCBoZXhcbiAgICAgIDogKG0gPSByZVJnYkludGVnZXIuZXhlYyhmb3JtYXQpKSA/IG5ldyBSZ2IobVsxXSwgbVsyXSwgbVszXSwgMSkgLy8gcmdiKDI1NSwgMCwgMClcbiAgICAgIDogKG0gPSByZVJnYlBlcmNlbnQuZXhlYyhmb3JtYXQpKSA/IG5ldyBSZ2IobVsxXSAqIDI1NSAvIDEwMCwgbVsyXSAqIDI1NSAvIDEwMCwgbVszXSAqIDI1NSAvIDEwMCwgMSkgLy8gcmdiKDEwMCUsIDAlLCAwJSlcbiAgICAgIDogKG0gPSByZVJnYmFJbnRlZ2VyLmV4ZWMoZm9ybWF0KSkgPyByZ2JhKG1bMV0sIG1bMl0sIG1bM10sIG1bNF0pIC8vIHJnYmEoMjU1LCAwLCAwLCAxKVxuICAgICAgOiAobSA9IHJlUmdiYVBlcmNlbnQuZXhlYyhmb3JtYXQpKSA/IHJnYmEobVsxXSAqIDI1NSAvIDEwMCwgbVsyXSAqIDI1NSAvIDEwMCwgbVszXSAqIDI1NSAvIDEwMCwgbVs0XSkgLy8gcmdiKDEwMCUsIDAlLCAwJSwgMSlcbiAgICAgIDogKG0gPSByZUhzbFBlcmNlbnQuZXhlYyhmb3JtYXQpKSA/IGhzbGEobVsxXSwgbVsyXSAvIDEwMCwgbVszXSAvIDEwMCwgMSkgLy8gaHNsKDEyMCwgNTAlLCA1MCUpXG4gICAgICA6IChtID0gcmVIc2xhUGVyY2VudC5leGVjKGZvcm1hdCkpID8gaHNsYShtWzFdLCBtWzJdIC8gMTAwLCBtWzNdIC8gMTAwLCBtWzRdKSAvLyBoc2xhKDEyMCwgNTAlLCA1MCUsIDEpXG4gICAgICA6IG5hbWVkLmhhc093blByb3BlcnR5KGZvcm1hdCkgPyByZ2JuKG5hbWVkW2Zvcm1hdF0pIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tcHJvdG90eXBlLWJ1aWx0aW5zXG4gICAgICA6IGZvcm1hdCA9PT0gXCJ0cmFuc3BhcmVudFwiID8gbmV3IFJnYihOYU4sIE5hTiwgTmFOLCAwKVxuICAgICAgOiBudWxsO1xufVxuXG5mdW5jdGlvbiByZ2JuKG4pIHtcbiAgcmV0dXJuIG5ldyBSZ2IobiA+PiAxNiAmIDB4ZmYsIG4gPj4gOCAmIDB4ZmYsIG4gJiAweGZmLCAxKTtcbn1cblxuZnVuY3Rpb24gcmdiYShyLCBnLCBiLCBhKSB7XG4gIGlmIChhIDw9IDApIHIgPSBnID0gYiA9IE5hTjtcbiAgcmV0dXJuIG5ldyBSZ2IociwgZywgYiwgYSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZ2JDb252ZXJ0KG8pIHtcbiAgaWYgKCEobyBpbnN0YW5jZW9mIENvbG9yKSkgbyA9IGNvbG9yKG8pO1xuICBpZiAoIW8pIHJldHVybiBuZXcgUmdiO1xuICBvID0gby5yZ2IoKTtcbiAgcmV0dXJuIG5ldyBSZ2Ioby5yLCBvLmcsIG8uYiwgby5vcGFjaXR5KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJnYihyLCBnLCBiLCBvcGFjaXR5KSB7XG4gIHJldHVybiBhcmd1bWVudHMubGVuZ3RoID09PSAxID8gcmdiQ29udmVydChyKSA6IG5ldyBSZ2IociwgZywgYiwgb3BhY2l0eSA9PSBudWxsID8gMSA6IG9wYWNpdHkpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gUmdiKHIsIGcsIGIsIG9wYWNpdHkpIHtcbiAgdGhpcy5yID0gK3I7XG4gIHRoaXMuZyA9ICtnO1xuICB0aGlzLmIgPSArYjtcbiAgdGhpcy5vcGFjaXR5ID0gK29wYWNpdHk7XG59XG5cbmRlZmluZShSZ2IsIHJnYiwgZXh0ZW5kKENvbG9yLCB7XG4gIGJyaWdodGVyKGspIHtcbiAgICBrID0gayA9PSBudWxsID8gYnJpZ2h0ZXIgOiBNYXRoLnBvdyhicmlnaHRlciwgayk7XG4gICAgcmV0dXJuIG5ldyBSZ2IodGhpcy5yICogaywgdGhpcy5nICogaywgdGhpcy5iICogaywgdGhpcy5vcGFjaXR5KTtcbiAgfSxcbiAgZGFya2VyKGspIHtcbiAgICBrID0gayA9PSBudWxsID8gZGFya2VyIDogTWF0aC5wb3coZGFya2VyLCBrKTtcbiAgICByZXR1cm4gbmV3IFJnYih0aGlzLnIgKiBrLCB0aGlzLmcgKiBrLCB0aGlzLmIgKiBrLCB0aGlzLm9wYWNpdHkpO1xuICB9LFxuICByZ2IoKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH0sXG4gIGNsYW1wKCkge1xuICAgIHJldHVybiBuZXcgUmdiKGNsYW1waSh0aGlzLnIpLCBjbGFtcGkodGhpcy5nKSwgY2xhbXBpKHRoaXMuYiksIGNsYW1wYSh0aGlzLm9wYWNpdHkpKTtcbiAgfSxcbiAgZGlzcGxheWFibGUoKSB7XG4gICAgcmV0dXJuICgtMC41IDw9IHRoaXMuciAmJiB0aGlzLnIgPCAyNTUuNSlcbiAgICAgICAgJiYgKC0wLjUgPD0gdGhpcy5nICYmIHRoaXMuZyA8IDI1NS41KVxuICAgICAgICAmJiAoLTAuNSA8PSB0aGlzLmIgJiYgdGhpcy5iIDwgMjU1LjUpXG4gICAgICAgICYmICgwIDw9IHRoaXMub3BhY2l0eSAmJiB0aGlzLm9wYWNpdHkgPD0gMSk7XG4gIH0sXG4gIGhleDogcmdiX2Zvcm1hdEhleCwgLy8gRGVwcmVjYXRlZCEgVXNlIGNvbG9yLmZvcm1hdEhleC5cbiAgZm9ybWF0SGV4OiByZ2JfZm9ybWF0SGV4LFxuICBmb3JtYXRIZXg4OiByZ2JfZm9ybWF0SGV4OCxcbiAgZm9ybWF0UmdiOiByZ2JfZm9ybWF0UmdiLFxuICB0b1N0cmluZzogcmdiX2Zvcm1hdFJnYlxufSkpO1xuXG5mdW5jdGlvbiByZ2JfZm9ybWF0SGV4KCkge1xuICByZXR1cm4gYCMke2hleCh0aGlzLnIpfSR7aGV4KHRoaXMuZyl9JHtoZXgodGhpcy5iKX1gO1xufVxuXG5mdW5jdGlvbiByZ2JfZm9ybWF0SGV4OCgpIHtcbiAgcmV0dXJuIGAjJHtoZXgodGhpcy5yKX0ke2hleCh0aGlzLmcpfSR7aGV4KHRoaXMuYil9JHtoZXgoKGlzTmFOKHRoaXMub3BhY2l0eSkgPyAxIDogdGhpcy5vcGFjaXR5KSAqIDI1NSl9YDtcbn1cblxuZnVuY3Rpb24gcmdiX2Zvcm1hdFJnYigpIHtcbiAgY29uc3QgYSA9IGNsYW1wYSh0aGlzLm9wYWNpdHkpO1xuICByZXR1cm4gYCR7YSA9PT0gMSA/IFwicmdiKFwiIDogXCJyZ2JhKFwifSR7Y2xhbXBpKHRoaXMucil9LCAke2NsYW1waSh0aGlzLmcpfSwgJHtjbGFtcGkodGhpcy5iKX0ke2EgPT09IDEgPyBcIilcIiA6IGAsICR7YX0pYH1gO1xufVxuXG5mdW5jdGlvbiBjbGFtcGEob3BhY2l0eSkge1xuICByZXR1cm4gaXNOYU4ob3BhY2l0eSkgPyAxIDogTWF0aC5tYXgoMCwgTWF0aC5taW4oMSwgb3BhY2l0eSkpO1xufVxuXG5mdW5jdGlvbiBjbGFtcGkodmFsdWUpIHtcbiAgcmV0dXJuIE1hdGgubWF4KDAsIE1hdGgubWluKDI1NSwgTWF0aC5yb3VuZCh2YWx1ZSkgfHwgMCkpO1xufVxuXG5mdW5jdGlvbiBoZXgodmFsdWUpIHtcbiAgdmFsdWUgPSBjbGFtcGkodmFsdWUpO1xuICByZXR1cm4gKHZhbHVlIDwgMTYgPyBcIjBcIiA6IFwiXCIpICsgdmFsdWUudG9TdHJpbmcoMTYpO1xufVxuXG5mdW5jdGlvbiBoc2xhKGgsIHMsIGwsIGEpIHtcbiAgaWYgKGEgPD0gMCkgaCA9IHMgPSBsID0gTmFOO1xuICBlbHNlIGlmIChsIDw9IDAgfHwgbCA+PSAxKSBoID0gcyA9IE5hTjtcbiAgZWxzZSBpZiAocyA8PSAwKSBoID0gTmFOO1xuICByZXR1cm4gbmV3IEhzbChoLCBzLCBsLCBhKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGhzbENvbnZlcnQobykge1xuICBpZiAobyBpbnN0YW5jZW9mIEhzbCkgcmV0dXJuIG5ldyBIc2woby5oLCBvLnMsIG8ubCwgby5vcGFjaXR5KTtcbiAgaWYgKCEobyBpbnN0YW5jZW9mIENvbG9yKSkgbyA9IGNvbG9yKG8pO1xuICBpZiAoIW8pIHJldHVybiBuZXcgSHNsO1xuICBpZiAobyBpbnN0YW5jZW9mIEhzbCkgcmV0dXJuIG87XG4gIG8gPSBvLnJnYigpO1xuICB2YXIgciA9IG8uciAvIDI1NSxcbiAgICAgIGcgPSBvLmcgLyAyNTUsXG4gICAgICBiID0gby5iIC8gMjU1LFxuICAgICAgbWluID0gTWF0aC5taW4ociwgZywgYiksXG4gICAgICBtYXggPSBNYXRoLm1heChyLCBnLCBiKSxcbiAgICAgIGggPSBOYU4sXG4gICAgICBzID0gbWF4IC0gbWluLFxuICAgICAgbCA9IChtYXggKyBtaW4pIC8gMjtcbiAgaWYgKHMpIHtcbiAgICBpZiAociA9PT0gbWF4KSBoID0gKGcgLSBiKSAvIHMgKyAoZyA8IGIpICogNjtcbiAgICBlbHNlIGlmIChnID09PSBtYXgpIGggPSAoYiAtIHIpIC8gcyArIDI7XG4gICAgZWxzZSBoID0gKHIgLSBnKSAvIHMgKyA0O1xuICAgIHMgLz0gbCA8IDAuNSA/IG1heCArIG1pbiA6IDIgLSBtYXggLSBtaW47XG4gICAgaCAqPSA2MDtcbiAgfSBlbHNlIHtcbiAgICBzID0gbCA+IDAgJiYgbCA8IDEgPyAwIDogaDtcbiAgfVxuICByZXR1cm4gbmV3IEhzbChoLCBzLCBsLCBvLm9wYWNpdHkpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaHNsKGgsIHMsIGwsIG9wYWNpdHkpIHtcbiAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPT09IDEgPyBoc2xDb252ZXJ0KGgpIDogbmV3IEhzbChoLCBzLCBsLCBvcGFjaXR5ID09IG51bGwgPyAxIDogb3BhY2l0eSk7XG59XG5cbmZ1bmN0aW9uIEhzbChoLCBzLCBsLCBvcGFjaXR5KSB7XG4gIHRoaXMuaCA9ICtoO1xuICB0aGlzLnMgPSArcztcbiAgdGhpcy5sID0gK2w7XG4gIHRoaXMub3BhY2l0eSA9ICtvcGFjaXR5O1xufVxuXG5kZWZpbmUoSHNsLCBoc2wsIGV4dGVuZChDb2xvciwge1xuICBicmlnaHRlcihrKSB7XG4gICAgayA9IGsgPT0gbnVsbCA/IGJyaWdodGVyIDogTWF0aC5wb3coYnJpZ2h0ZXIsIGspO1xuICAgIHJldHVybiBuZXcgSHNsKHRoaXMuaCwgdGhpcy5zLCB0aGlzLmwgKiBrLCB0aGlzLm9wYWNpdHkpO1xuICB9LFxuICBkYXJrZXIoaykge1xuICAgIGsgPSBrID09IG51bGwgPyBkYXJrZXIgOiBNYXRoLnBvdyhkYXJrZXIsIGspO1xuICAgIHJldHVybiBuZXcgSHNsKHRoaXMuaCwgdGhpcy5zLCB0aGlzLmwgKiBrLCB0aGlzLm9wYWNpdHkpO1xuICB9LFxuICByZ2IoKSB7XG4gICAgdmFyIGggPSB0aGlzLmggJSAzNjAgKyAodGhpcy5oIDwgMCkgKiAzNjAsXG4gICAgICAgIHMgPSBpc05hTihoKSB8fCBpc05hTih0aGlzLnMpID8gMCA6IHRoaXMucyxcbiAgICAgICAgbCA9IHRoaXMubCxcbiAgICAgICAgbTIgPSBsICsgKGwgPCAwLjUgPyBsIDogMSAtIGwpICogcyxcbiAgICAgICAgbTEgPSAyICogbCAtIG0yO1xuICAgIHJldHVybiBuZXcgUmdiKFxuICAgICAgaHNsMnJnYihoID49IDI0MCA/IGggLSAyNDAgOiBoICsgMTIwLCBtMSwgbTIpLFxuICAgICAgaHNsMnJnYihoLCBtMSwgbTIpLFxuICAgICAgaHNsMnJnYihoIDwgMTIwID8gaCArIDI0MCA6IGggLSAxMjAsIG0xLCBtMiksXG4gICAgICB0aGlzLm9wYWNpdHlcbiAgICApO1xuICB9LFxuICBjbGFtcCgpIHtcbiAgICByZXR1cm4gbmV3IEhzbChjbGFtcGgodGhpcy5oKSwgY2xhbXB0KHRoaXMucyksIGNsYW1wdCh0aGlzLmwpLCBjbGFtcGEodGhpcy5vcGFjaXR5KSk7XG4gIH0sXG4gIGRpc3BsYXlhYmxlKCkge1xuICAgIHJldHVybiAoMCA8PSB0aGlzLnMgJiYgdGhpcy5zIDw9IDEgfHwgaXNOYU4odGhpcy5zKSlcbiAgICAgICAgJiYgKDAgPD0gdGhpcy5sICYmIHRoaXMubCA8PSAxKVxuICAgICAgICAmJiAoMCA8PSB0aGlzLm9wYWNpdHkgJiYgdGhpcy5vcGFjaXR5IDw9IDEpO1xuICB9LFxuICBmb3JtYXRIc2woKSB7XG4gICAgY29uc3QgYSA9IGNsYW1wYSh0aGlzLm9wYWNpdHkpO1xuICAgIHJldHVybiBgJHthID09PSAxID8gXCJoc2woXCIgOiBcImhzbGEoXCJ9JHtjbGFtcGgodGhpcy5oKX0sICR7Y2xhbXB0KHRoaXMucykgKiAxMDB9JSwgJHtjbGFtcHQodGhpcy5sKSAqIDEwMH0lJHthID09PSAxID8gXCIpXCIgOiBgLCAke2F9KWB9YDtcbiAgfVxufSkpO1xuXG5mdW5jdGlvbiBjbGFtcGgodmFsdWUpIHtcbiAgdmFsdWUgPSAodmFsdWUgfHwgMCkgJSAzNjA7XG4gIHJldHVybiB2YWx1ZSA8IDAgPyB2YWx1ZSArIDM2MCA6IHZhbHVlO1xufVxuXG5mdW5jdGlvbiBjbGFtcHQodmFsdWUpIHtcbiAgcmV0dXJuIE1hdGgubWF4KDAsIE1hdGgubWluKDEsIHZhbHVlIHx8IDApKTtcbn1cblxuLyogRnJvbSBGdkQgMTMuMzcsIENTUyBDb2xvciBNb2R1bGUgTGV2ZWwgMyAqL1xuZnVuY3Rpb24gaHNsMnJnYihoLCBtMSwgbTIpIHtcbiAgcmV0dXJuIChoIDwgNjAgPyBtMSArIChtMiAtIG0xKSAqIGggLyA2MFxuICAgICAgOiBoIDwgMTgwID8gbTJcbiAgICAgIDogaCA8IDI0MCA/IG0xICsgKG0yIC0gbTEpICogKDI0MCAtIGgpIC8gNjBcbiAgICAgIDogbTEpICogMjU1O1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgeCA9PiAoKSA9PiB4O1xuIiwiaW1wb3J0IGNvbnN0YW50IGZyb20gXCIuL2NvbnN0YW50LmpzXCI7XG5cbmZ1bmN0aW9uIGxpbmVhcihhLCBkKSB7XG4gIHJldHVybiBmdW5jdGlvbih0KSB7XG4gICAgcmV0dXJuIGEgKyB0ICogZDtcbiAgfTtcbn1cblxuZnVuY3Rpb24gZXhwb25lbnRpYWwoYSwgYiwgeSkge1xuICByZXR1cm4gYSA9IE1hdGgucG93KGEsIHkpLCBiID0gTWF0aC5wb3coYiwgeSkgLSBhLCB5ID0gMSAvIHksIGZ1bmN0aW9uKHQpIHtcbiAgICByZXR1cm4gTWF0aC5wb3coYSArIHQgKiBiLCB5KTtcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGh1ZShhLCBiKSB7XG4gIHZhciBkID0gYiAtIGE7XG4gIHJldHVybiBkID8gbGluZWFyKGEsIGQgPiAxODAgfHwgZCA8IC0xODAgPyBkIC0gMzYwICogTWF0aC5yb3VuZChkIC8gMzYwKSA6IGQpIDogY29uc3RhbnQoaXNOYU4oYSkgPyBiIDogYSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnYW1tYSh5KSB7XG4gIHJldHVybiAoeSA9ICt5KSA9PT0gMSA/IG5vZ2FtbWEgOiBmdW5jdGlvbihhLCBiKSB7XG4gICAgcmV0dXJuIGIgLSBhID8gZXhwb25lbnRpYWwoYSwgYiwgeSkgOiBjb25zdGFudChpc05hTihhKSA/IGIgOiBhKTtcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbm9nYW1tYShhLCBiKSB7XG4gIHZhciBkID0gYiAtIGE7XG4gIHJldHVybiBkID8gbGluZWFyKGEsIGQpIDogY29uc3RhbnQoaXNOYU4oYSkgPyBiIDogYSk7XG59XG4iLCJpbXBvcnQge3JnYiBhcyBjb2xvclJnYn0gZnJvbSBcImQzLWNvbG9yXCI7XG5pbXBvcnQgYmFzaXMgZnJvbSBcIi4vYmFzaXMuanNcIjtcbmltcG9ydCBiYXNpc0Nsb3NlZCBmcm9tIFwiLi9iYXNpc0Nsb3NlZC5qc1wiO1xuaW1wb3J0IG5vZ2FtbWEsIHtnYW1tYX0gZnJvbSBcIi4vY29sb3IuanNcIjtcblxuZXhwb3J0IGRlZmF1bHQgKGZ1bmN0aW9uIHJnYkdhbW1hKHkpIHtcbiAgdmFyIGNvbG9yID0gZ2FtbWEoeSk7XG5cbiAgZnVuY3Rpb24gcmdiKHN0YXJ0LCBlbmQpIHtcbiAgICB2YXIgciA9IGNvbG9yKChzdGFydCA9IGNvbG9yUmdiKHN0YXJ0KSkuciwgKGVuZCA9IGNvbG9yUmdiKGVuZCkpLnIpLFxuICAgICAgICBnID0gY29sb3Ioc3RhcnQuZywgZW5kLmcpLFxuICAgICAgICBiID0gY29sb3Ioc3RhcnQuYiwgZW5kLmIpLFxuICAgICAgICBvcGFjaXR5ID0gbm9nYW1tYShzdGFydC5vcGFjaXR5LCBlbmQub3BhY2l0eSk7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKHQpIHtcbiAgICAgIHN0YXJ0LnIgPSByKHQpO1xuICAgICAgc3RhcnQuZyA9IGcodCk7XG4gICAgICBzdGFydC5iID0gYih0KTtcbiAgICAgIHN0YXJ0Lm9wYWNpdHkgPSBvcGFjaXR5KHQpO1xuICAgICAgcmV0dXJuIHN0YXJ0ICsgXCJcIjtcbiAgICB9O1xuICB9XG5cbiAgcmdiLmdhbW1hID0gcmdiR2FtbWE7XG5cbiAgcmV0dXJuIHJnYjtcbn0pKDEpO1xuXG5mdW5jdGlvbiByZ2JTcGxpbmUoc3BsaW5lKSB7XG4gIHJldHVybiBmdW5jdGlvbihjb2xvcnMpIHtcbiAgICB2YXIgbiA9IGNvbG9ycy5sZW5ndGgsXG4gICAgICAgIHIgPSBuZXcgQXJyYXkobiksXG4gICAgICAgIGcgPSBuZXcgQXJyYXkobiksXG4gICAgICAgIGIgPSBuZXcgQXJyYXkobiksXG4gICAgICAgIGksIGNvbG9yO1xuICAgIGZvciAoaSA9IDA7IGkgPCBuOyArK2kpIHtcbiAgICAgIGNvbG9yID0gY29sb3JSZ2IoY29sb3JzW2ldKTtcbiAgICAgIHJbaV0gPSBjb2xvci5yIHx8IDA7XG4gICAgICBnW2ldID0gY29sb3IuZyB8fCAwO1xuICAgICAgYltpXSA9IGNvbG9yLmIgfHwgMDtcbiAgICB9XG4gICAgciA9IHNwbGluZShyKTtcbiAgICBnID0gc3BsaW5lKGcpO1xuICAgIGIgPSBzcGxpbmUoYik7XG4gICAgY29sb3Iub3BhY2l0eSA9IDE7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKHQpIHtcbiAgICAgIGNvbG9yLnIgPSByKHQpO1xuICAgICAgY29sb3IuZyA9IGcodCk7XG4gICAgICBjb2xvci5iID0gYih0KTtcbiAgICAgIHJldHVybiBjb2xvciArIFwiXCI7XG4gICAgfTtcbiAgfTtcbn1cblxuZXhwb3J0IHZhciByZ2JCYXNpcyA9IHJnYlNwbGluZShiYXNpcyk7XG5leHBvcnQgdmFyIHJnYkJhc2lzQ2xvc2VkID0gcmdiU3BsaW5lKGJhc2lzQ2xvc2VkKTtcbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKGEsIGIpIHtcbiAgaWYgKCFiKSBiID0gW107XG4gIHZhciBuID0gYSA/IE1hdGgubWluKGIubGVuZ3RoLCBhLmxlbmd0aCkgOiAwLFxuICAgICAgYyA9IGIuc2xpY2UoKSxcbiAgICAgIGk7XG4gIHJldHVybiBmdW5jdGlvbih0KSB7XG4gICAgZm9yIChpID0gMDsgaSA8IG47ICsraSkgY1tpXSA9IGFbaV0gKiAoMSAtIHQpICsgYltpXSAqIHQ7XG4gICAgcmV0dXJuIGM7XG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc051bWJlckFycmF5KHgpIHtcbiAgcmV0dXJuIEFycmF5QnVmZmVyLmlzVmlldyh4KSAmJiAhKHggaW5zdGFuY2VvZiBEYXRhVmlldyk7XG59XG4iLCJpbXBvcnQgdmFsdWUgZnJvbSBcIi4vdmFsdWUuanNcIjtcbmltcG9ydCBudW1iZXJBcnJheSwge2lzTnVtYmVyQXJyYXl9IGZyb20gXCIuL251bWJlckFycmF5LmpzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKGEsIGIpIHtcbiAgcmV0dXJuIChpc051bWJlckFycmF5KGIpID8gbnVtYmVyQXJyYXkgOiBnZW5lcmljQXJyYXkpKGEsIGIpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2VuZXJpY0FycmF5KGEsIGIpIHtcbiAgdmFyIG5iID0gYiA/IGIubGVuZ3RoIDogMCxcbiAgICAgIG5hID0gYSA/IE1hdGgubWluKG5iLCBhLmxlbmd0aCkgOiAwLFxuICAgICAgeCA9IG5ldyBBcnJheShuYSksXG4gICAgICBjID0gbmV3IEFycmF5KG5iKSxcbiAgICAgIGk7XG5cbiAgZm9yIChpID0gMDsgaSA8IG5hOyArK2kpIHhbaV0gPSB2YWx1ZShhW2ldLCBiW2ldKTtcbiAgZm9yICg7IGkgPCBuYjsgKytpKSBjW2ldID0gYltpXTtcblxuICByZXR1cm4gZnVuY3Rpb24odCkge1xuICAgIGZvciAoaSA9IDA7IGkgPCBuYTsgKytpKSBjW2ldID0geFtpXSh0KTtcbiAgICByZXR1cm4gYztcbiAgfTtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKGEsIGIpIHtcbiAgdmFyIGQgPSBuZXcgRGF0ZTtcbiAgcmV0dXJuIGEgPSArYSwgYiA9ICtiLCBmdW5jdGlvbih0KSB7XG4gICAgcmV0dXJuIGQuc2V0VGltZShhICogKDEgLSB0KSArIGIgKiB0KSwgZDtcbiAgfTtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKGEsIGIpIHtcbiAgcmV0dXJuIGEgPSArYSwgYiA9ICtiLCBmdW5jdGlvbih0KSB7XG4gICAgcmV0dXJuIGEgKiAoMSAtIHQpICsgYiAqIHQ7XG4gIH07XG59XG4iLCJpbXBvcnQgdmFsdWUgZnJvbSBcIi4vdmFsdWUuanNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oYSwgYikge1xuICB2YXIgaSA9IHt9LFxuICAgICAgYyA9IHt9LFxuICAgICAgaztcblxuICBpZiAoYSA9PT0gbnVsbCB8fCB0eXBlb2YgYSAhPT0gXCJvYmplY3RcIikgYSA9IHt9O1xuICBpZiAoYiA9PT0gbnVsbCB8fCB0eXBlb2YgYiAhPT0gXCJvYmplY3RcIikgYiA9IHt9O1xuXG4gIGZvciAoayBpbiBiKSB7XG4gICAgaWYgKGsgaW4gYSkge1xuICAgICAgaVtrXSA9IHZhbHVlKGFba10sIGJba10pO1xuICAgIH0gZWxzZSB7XG4gICAgICBjW2tdID0gYltrXTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZnVuY3Rpb24odCkge1xuICAgIGZvciAoayBpbiBpKSBjW2tdID0gaVtrXSh0KTtcbiAgICByZXR1cm4gYztcbiAgfTtcbn1cbiIsImltcG9ydCBudW1iZXIgZnJvbSBcIi4vbnVtYmVyLmpzXCI7XG5cbnZhciByZUEgPSAvWy0rXT8oPzpcXGQrXFwuP1xcZCp8XFwuP1xcZCspKD86W2VFXVstK10/XFxkKyk/L2csXG4gICAgcmVCID0gbmV3IFJlZ0V4cChyZUEuc291cmNlLCBcImdcIik7XG5cbmZ1bmN0aW9uIHplcm8oYikge1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIGI7XG4gIH07XG59XG5cbmZ1bmN0aW9uIG9uZShiKSB7XG4gIHJldHVybiBmdW5jdGlvbih0KSB7XG4gICAgcmV0dXJuIGIodCkgKyBcIlwiO1xuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihhLCBiKSB7XG4gIHZhciBiaSA9IHJlQS5sYXN0SW5kZXggPSByZUIubGFzdEluZGV4ID0gMCwgLy8gc2NhbiBpbmRleCBmb3IgbmV4dCBudW1iZXIgaW4gYlxuICAgICAgYW0sIC8vIGN1cnJlbnQgbWF0Y2ggaW4gYVxuICAgICAgYm0sIC8vIGN1cnJlbnQgbWF0Y2ggaW4gYlxuICAgICAgYnMsIC8vIHN0cmluZyBwcmVjZWRpbmcgY3VycmVudCBudW1iZXIgaW4gYiwgaWYgYW55XG4gICAgICBpID0gLTEsIC8vIGluZGV4IGluIHNcbiAgICAgIHMgPSBbXSwgLy8gc3RyaW5nIGNvbnN0YW50cyBhbmQgcGxhY2Vob2xkZXJzXG4gICAgICBxID0gW107IC8vIG51bWJlciBpbnRlcnBvbGF0b3JzXG5cbiAgLy8gQ29lcmNlIGlucHV0cyB0byBzdHJpbmdzLlxuICBhID0gYSArIFwiXCIsIGIgPSBiICsgXCJcIjtcblxuICAvLyBJbnRlcnBvbGF0ZSBwYWlycyBvZiBudW1iZXJzIGluIGEgJiBiLlxuICB3aGlsZSAoKGFtID0gcmVBLmV4ZWMoYSkpXG4gICAgICAmJiAoYm0gPSByZUIuZXhlYyhiKSkpIHtcbiAgICBpZiAoKGJzID0gYm0uaW5kZXgpID4gYmkpIHsgLy8gYSBzdHJpbmcgcHJlY2VkZXMgdGhlIG5leHQgbnVtYmVyIGluIGJcbiAgICAgIGJzID0gYi5zbGljZShiaSwgYnMpO1xuICAgICAgaWYgKHNbaV0pIHNbaV0gKz0gYnM7IC8vIGNvYWxlc2NlIHdpdGggcHJldmlvdXMgc3RyaW5nXG4gICAgICBlbHNlIHNbKytpXSA9IGJzO1xuICAgIH1cbiAgICBpZiAoKGFtID0gYW1bMF0pID09PSAoYm0gPSBibVswXSkpIHsgLy8gbnVtYmVycyBpbiBhICYgYiBtYXRjaFxuICAgICAgaWYgKHNbaV0pIHNbaV0gKz0gYm07IC8vIGNvYWxlc2NlIHdpdGggcHJldmlvdXMgc3RyaW5nXG4gICAgICBlbHNlIHNbKytpXSA9IGJtO1xuICAgIH0gZWxzZSB7IC8vIGludGVycG9sYXRlIG5vbi1tYXRjaGluZyBudW1iZXJzXG4gICAgICBzWysraV0gPSBudWxsO1xuICAgICAgcS5wdXNoKHtpOiBpLCB4OiBudW1iZXIoYW0sIGJtKX0pO1xuICAgIH1cbiAgICBiaSA9IHJlQi5sYXN0SW5kZXg7XG4gIH1cblxuICAvLyBBZGQgcmVtYWlucyBvZiBiLlxuICBpZiAoYmkgPCBiLmxlbmd0aCkge1xuICAgIGJzID0gYi5zbGljZShiaSk7XG4gICAgaWYgKHNbaV0pIHNbaV0gKz0gYnM7IC8vIGNvYWxlc2NlIHdpdGggcHJldmlvdXMgc3RyaW5nXG4gICAgZWxzZSBzWysraV0gPSBicztcbiAgfVxuXG4gIC8vIFNwZWNpYWwgb3B0aW1pemF0aW9uIGZvciBvbmx5IGEgc2luZ2xlIG1hdGNoLlxuICAvLyBPdGhlcndpc2UsIGludGVycG9sYXRlIGVhY2ggb2YgdGhlIG51bWJlcnMgYW5kIHJlam9pbiB0aGUgc3RyaW5nLlxuICByZXR1cm4gcy5sZW5ndGggPCAyID8gKHFbMF1cbiAgICAgID8gb25lKHFbMF0ueClcbiAgICAgIDogemVybyhiKSlcbiAgICAgIDogKGIgPSBxLmxlbmd0aCwgZnVuY3Rpb24odCkge1xuICAgICAgICAgIGZvciAodmFyIGkgPSAwLCBvOyBpIDwgYjsgKytpKSBzWyhvID0gcVtpXSkuaV0gPSBvLngodCk7XG4gICAgICAgICAgcmV0dXJuIHMuam9pbihcIlwiKTtcbiAgICAgICAgfSk7XG59XG4iLCJpbXBvcnQge2NvbG9yfSBmcm9tIFwiZDMtY29sb3JcIjtcbmltcG9ydCByZ2IgZnJvbSBcIi4vcmdiLmpzXCI7XG5pbXBvcnQge2dlbmVyaWNBcnJheX0gZnJvbSBcIi4vYXJyYXkuanNcIjtcbmltcG9ydCBkYXRlIGZyb20gXCIuL2RhdGUuanNcIjtcbmltcG9ydCBudW1iZXIgZnJvbSBcIi4vbnVtYmVyLmpzXCI7XG5pbXBvcnQgb2JqZWN0IGZyb20gXCIuL29iamVjdC5qc1wiO1xuaW1wb3J0IHN0cmluZyBmcm9tIFwiLi9zdHJpbmcuanNcIjtcbmltcG9ydCBjb25zdGFudCBmcm9tIFwiLi9jb25zdGFudC5qc1wiO1xuaW1wb3J0IG51bWJlckFycmF5LCB7aXNOdW1iZXJBcnJheX0gZnJvbSBcIi4vbnVtYmVyQXJyYXkuanNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oYSwgYikge1xuICB2YXIgdCA9IHR5cGVvZiBiLCBjO1xuICByZXR1cm4gYiA9PSBudWxsIHx8IHQgPT09IFwiYm9vbGVhblwiID8gY29uc3RhbnQoYilcbiAgICAgIDogKHQgPT09IFwibnVtYmVyXCIgPyBudW1iZXJcbiAgICAgIDogdCA9PT0gXCJzdHJpbmdcIiA/ICgoYyA9IGNvbG9yKGIpKSA/IChiID0gYywgcmdiKSA6IHN0cmluZylcbiAgICAgIDogYiBpbnN0YW5jZW9mIGNvbG9yID8gcmdiXG4gICAgICA6IGIgaW5zdGFuY2VvZiBEYXRlID8gZGF0ZVxuICAgICAgOiBpc051bWJlckFycmF5KGIpID8gbnVtYmVyQXJyYXlcbiAgICAgIDogQXJyYXkuaXNBcnJheShiKSA/IGdlbmVyaWNBcnJheVxuICAgICAgOiB0eXBlb2YgYi52YWx1ZU9mICE9PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIGIudG9TdHJpbmcgIT09IFwiZnVuY3Rpb25cIiB8fCBpc05hTihiKSA/IG9iamVjdFxuICAgICAgOiBudW1iZXIpKGEsIGIpO1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oYSwgYikge1xuICByZXR1cm4gYSA9ICthLCBiID0gK2IsIGZ1bmN0aW9uKHQpIHtcbiAgICByZXR1cm4gTWF0aC5yb3VuZChhICogKDEgLSB0KSArIGIgKiB0KTtcbiAgfTtcbn1cbiIsInZhciBkZWdyZWVzID0gMTgwIC8gTWF0aC5QSTtcblxuZXhwb3J0IHZhciBpZGVudGl0eSA9IHtcbiAgdHJhbnNsYXRlWDogMCxcbiAgdHJhbnNsYXRlWTogMCxcbiAgcm90YXRlOiAwLFxuICBza2V3WDogMCxcbiAgc2NhbGVYOiAxLFxuICBzY2FsZVk6IDFcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKGEsIGIsIGMsIGQsIGUsIGYpIHtcbiAgdmFyIHNjYWxlWCwgc2NhbGVZLCBza2V3WDtcbiAgaWYgKHNjYWxlWCA9IE1hdGguc3FydChhICogYSArIGIgKiBiKSkgYSAvPSBzY2FsZVgsIGIgLz0gc2NhbGVYO1xuICBpZiAoc2tld1ggPSBhICogYyArIGIgKiBkKSBjIC09IGEgKiBza2V3WCwgZCAtPSBiICogc2tld1g7XG4gIGlmIChzY2FsZVkgPSBNYXRoLnNxcnQoYyAqIGMgKyBkICogZCkpIGMgLz0gc2NhbGVZLCBkIC89IHNjYWxlWSwgc2tld1ggLz0gc2NhbGVZO1xuICBpZiAoYSAqIGQgPCBiICogYykgYSA9IC1hLCBiID0gLWIsIHNrZXdYID0gLXNrZXdYLCBzY2FsZVggPSAtc2NhbGVYO1xuICByZXR1cm4ge1xuICAgIHRyYW5zbGF0ZVg6IGUsXG4gICAgdHJhbnNsYXRlWTogZixcbiAgICByb3RhdGU6IE1hdGguYXRhbjIoYiwgYSkgKiBkZWdyZWVzLFxuICAgIHNrZXdYOiBNYXRoLmF0YW4oc2tld1gpICogZGVncmVlcyxcbiAgICBzY2FsZVg6IHNjYWxlWCxcbiAgICBzY2FsZVk6IHNjYWxlWVxuICB9O1xufVxuIiwiaW1wb3J0IGRlY29tcG9zZSwge2lkZW50aXR5fSBmcm9tIFwiLi9kZWNvbXBvc2UuanNcIjtcblxudmFyIHN2Z05vZGU7XG5cbi8qIGVzbGludC1kaXNhYmxlIG5vLXVuZGVmICovXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VDc3ModmFsdWUpIHtcbiAgY29uc3QgbSA9IG5ldyAodHlwZW9mIERPTU1hdHJpeCA9PT0gXCJmdW5jdGlvblwiID8gRE9NTWF0cml4IDogV2ViS2l0Q1NTTWF0cml4KSh2YWx1ZSArIFwiXCIpO1xuICByZXR1cm4gbS5pc0lkZW50aXR5ID8gaWRlbnRpdHkgOiBkZWNvbXBvc2UobS5hLCBtLmIsIG0uYywgbS5kLCBtLmUsIG0uZik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZVN2Zyh2YWx1ZSkge1xuICBpZiAodmFsdWUgPT0gbnVsbCkgcmV0dXJuIGlkZW50aXR5O1xuICBpZiAoIXN2Z05vZGUpIHN2Z05vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiLCBcImdcIik7XG4gIHN2Z05vZGUuc2V0QXR0cmlidXRlKFwidHJhbnNmb3JtXCIsIHZhbHVlKTtcbiAgaWYgKCEodmFsdWUgPSBzdmdOb2RlLnRyYW5zZm9ybS5iYXNlVmFsLmNvbnNvbGlkYXRlKCkpKSByZXR1cm4gaWRlbnRpdHk7XG4gIHZhbHVlID0gdmFsdWUubWF0cml4O1xuICByZXR1cm4gZGVjb21wb3NlKHZhbHVlLmEsIHZhbHVlLmIsIHZhbHVlLmMsIHZhbHVlLmQsIHZhbHVlLmUsIHZhbHVlLmYpO1xufVxuIiwiaW1wb3J0IG51bWJlciBmcm9tIFwiLi4vbnVtYmVyLmpzXCI7XG5pbXBvcnQge3BhcnNlQ3NzLCBwYXJzZVN2Z30gZnJvbSBcIi4vcGFyc2UuanNcIjtcblxuZnVuY3Rpb24gaW50ZXJwb2xhdGVUcmFuc2Zvcm0ocGFyc2UsIHB4Q29tbWEsIHB4UGFyZW4sIGRlZ1BhcmVuKSB7XG5cbiAgZnVuY3Rpb24gcG9wKHMpIHtcbiAgICByZXR1cm4gcy5sZW5ndGggPyBzLnBvcCgpICsgXCIgXCIgOiBcIlwiO1xuICB9XG5cbiAgZnVuY3Rpb24gdHJhbnNsYXRlKHhhLCB5YSwgeGIsIHliLCBzLCBxKSB7XG4gICAgaWYgKHhhICE9PSB4YiB8fCB5YSAhPT0geWIpIHtcbiAgICAgIHZhciBpID0gcy5wdXNoKFwidHJhbnNsYXRlKFwiLCBudWxsLCBweENvbW1hLCBudWxsLCBweFBhcmVuKTtcbiAgICAgIHEucHVzaCh7aTogaSAtIDQsIHg6IG51bWJlcih4YSwgeGIpfSwge2k6IGkgLSAyLCB4OiBudW1iZXIoeWEsIHliKX0pO1xuICAgIH0gZWxzZSBpZiAoeGIgfHwgeWIpIHtcbiAgICAgIHMucHVzaChcInRyYW5zbGF0ZShcIiArIHhiICsgcHhDb21tYSArIHliICsgcHhQYXJlbik7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gcm90YXRlKGEsIGIsIHMsIHEpIHtcbiAgICBpZiAoYSAhPT0gYikge1xuICAgICAgaWYgKGEgLSBiID4gMTgwKSBiICs9IDM2MDsgZWxzZSBpZiAoYiAtIGEgPiAxODApIGEgKz0gMzYwOyAvLyBzaG9ydGVzdCBwYXRoXG4gICAgICBxLnB1c2goe2k6IHMucHVzaChwb3AocykgKyBcInJvdGF0ZShcIiwgbnVsbCwgZGVnUGFyZW4pIC0gMiwgeDogbnVtYmVyKGEsIGIpfSk7XG4gICAgfSBlbHNlIGlmIChiKSB7XG4gICAgICBzLnB1c2gocG9wKHMpICsgXCJyb3RhdGUoXCIgKyBiICsgZGVnUGFyZW4pO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHNrZXdYKGEsIGIsIHMsIHEpIHtcbiAgICBpZiAoYSAhPT0gYikge1xuICAgICAgcS5wdXNoKHtpOiBzLnB1c2gocG9wKHMpICsgXCJza2V3WChcIiwgbnVsbCwgZGVnUGFyZW4pIC0gMiwgeDogbnVtYmVyKGEsIGIpfSk7XG4gICAgfSBlbHNlIGlmIChiKSB7XG4gICAgICBzLnB1c2gocG9wKHMpICsgXCJza2V3WChcIiArIGIgKyBkZWdQYXJlbik7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gc2NhbGUoeGEsIHlhLCB4YiwgeWIsIHMsIHEpIHtcbiAgICBpZiAoeGEgIT09IHhiIHx8IHlhICE9PSB5Yikge1xuICAgICAgdmFyIGkgPSBzLnB1c2gocG9wKHMpICsgXCJzY2FsZShcIiwgbnVsbCwgXCIsXCIsIG51bGwsIFwiKVwiKTtcbiAgICAgIHEucHVzaCh7aTogaSAtIDQsIHg6IG51bWJlcih4YSwgeGIpfSwge2k6IGkgLSAyLCB4OiBudW1iZXIoeWEsIHliKX0pO1xuICAgIH0gZWxzZSBpZiAoeGIgIT09IDEgfHwgeWIgIT09IDEpIHtcbiAgICAgIHMucHVzaChwb3AocykgKyBcInNjYWxlKFwiICsgeGIgKyBcIixcIiArIHliICsgXCIpXCIpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmdW5jdGlvbihhLCBiKSB7XG4gICAgdmFyIHMgPSBbXSwgLy8gc3RyaW5nIGNvbnN0YW50cyBhbmQgcGxhY2Vob2xkZXJzXG4gICAgICAgIHEgPSBbXTsgLy8gbnVtYmVyIGludGVycG9sYXRvcnNcbiAgICBhID0gcGFyc2UoYSksIGIgPSBwYXJzZShiKTtcbiAgICB0cmFuc2xhdGUoYS50cmFuc2xhdGVYLCBhLnRyYW5zbGF0ZVksIGIudHJhbnNsYXRlWCwgYi50cmFuc2xhdGVZLCBzLCBxKTtcbiAgICByb3RhdGUoYS5yb3RhdGUsIGIucm90YXRlLCBzLCBxKTtcbiAgICBza2V3WChhLnNrZXdYLCBiLnNrZXdYLCBzLCBxKTtcbiAgICBzY2FsZShhLnNjYWxlWCwgYS5zY2FsZVksIGIuc2NhbGVYLCBiLnNjYWxlWSwgcywgcSk7XG4gICAgYSA9IGIgPSBudWxsOyAvLyBnY1xuICAgIHJldHVybiBmdW5jdGlvbih0KSB7XG4gICAgICB2YXIgaSA9IC0xLCBuID0gcS5sZW5ndGgsIG87XG4gICAgICB3aGlsZSAoKytpIDwgbikgc1sobyA9IHFbaV0pLmldID0gby54KHQpO1xuICAgICAgcmV0dXJuIHMuam9pbihcIlwiKTtcbiAgICB9O1xuICB9O1xufVxuXG5leHBvcnQgdmFyIGludGVycG9sYXRlVHJhbnNmb3JtQ3NzID0gaW50ZXJwb2xhdGVUcmFuc2Zvcm0ocGFyc2VDc3MsIFwicHgsIFwiLCBcInB4KVwiLCBcImRlZylcIik7XG5leHBvcnQgdmFyIGludGVycG9sYXRlVHJhbnNmb3JtU3ZnID0gaW50ZXJwb2xhdGVUcmFuc2Zvcm0ocGFyc2VTdmcsIFwiLCBcIiwgXCIpXCIsIFwiKVwiKTtcbiIsInZhciBmcmFtZSA9IDAsIC8vIGlzIGFuIGFuaW1hdGlvbiBmcmFtZSBwZW5kaW5nP1xuICAgIHRpbWVvdXQgPSAwLCAvLyBpcyBhIHRpbWVvdXQgcGVuZGluZz9cbiAgICBpbnRlcnZhbCA9IDAsIC8vIGFyZSBhbnkgdGltZXJzIGFjdGl2ZT9cbiAgICBwb2tlRGVsYXkgPSAxMDAwLCAvLyBob3cgZnJlcXVlbnRseSB3ZSBjaGVjayBmb3IgY2xvY2sgc2tld1xuICAgIHRhc2tIZWFkLFxuICAgIHRhc2tUYWlsLFxuICAgIGNsb2NrTGFzdCA9IDAsXG4gICAgY2xvY2tOb3cgPSAwLFxuICAgIGNsb2NrU2tldyA9IDAsXG4gICAgY2xvY2sgPSB0eXBlb2YgcGVyZm9ybWFuY2UgPT09IFwib2JqZWN0XCIgJiYgcGVyZm9ybWFuY2Uubm93ID8gcGVyZm9ybWFuY2UgOiBEYXRlLFxuICAgIHNldEZyYW1lID0gdHlwZW9mIHdpbmRvdyA9PT0gXCJvYmplY3RcIiAmJiB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lID8gd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZS5iaW5kKHdpbmRvdykgOiBmdW5jdGlvbihmKSB7IHNldFRpbWVvdXQoZiwgMTcpOyB9O1xuXG5leHBvcnQgZnVuY3Rpb24gbm93KCkge1xuICByZXR1cm4gY2xvY2tOb3cgfHwgKHNldEZyYW1lKGNsZWFyTm93KSwgY2xvY2tOb3cgPSBjbG9jay5ub3coKSArIGNsb2NrU2tldyk7XG59XG5cbmZ1bmN0aW9uIGNsZWFyTm93KCkge1xuICBjbG9ja05vdyA9IDA7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBUaW1lcigpIHtcbiAgdGhpcy5fY2FsbCA9XG4gIHRoaXMuX3RpbWUgPVxuICB0aGlzLl9uZXh0ID0gbnVsbDtcbn1cblxuVGltZXIucHJvdG90eXBlID0gdGltZXIucHJvdG90eXBlID0ge1xuICBjb25zdHJ1Y3RvcjogVGltZXIsXG4gIHJlc3RhcnQ6IGZ1bmN0aW9uKGNhbGxiYWNrLCBkZWxheSwgdGltZSkge1xuICAgIGlmICh0eXBlb2YgY2FsbGJhY2sgIT09IFwiZnVuY3Rpb25cIikgdGhyb3cgbmV3IFR5cGVFcnJvcihcImNhbGxiYWNrIGlzIG5vdCBhIGZ1bmN0aW9uXCIpO1xuICAgIHRpbWUgPSAodGltZSA9PSBudWxsID8gbm93KCkgOiArdGltZSkgKyAoZGVsYXkgPT0gbnVsbCA/IDAgOiArZGVsYXkpO1xuICAgIGlmICghdGhpcy5fbmV4dCAmJiB0YXNrVGFpbCAhPT0gdGhpcykge1xuICAgICAgaWYgKHRhc2tUYWlsKSB0YXNrVGFpbC5fbmV4dCA9IHRoaXM7XG4gICAgICBlbHNlIHRhc2tIZWFkID0gdGhpcztcbiAgICAgIHRhc2tUYWlsID0gdGhpcztcbiAgICB9XG4gICAgdGhpcy5fY2FsbCA9IGNhbGxiYWNrO1xuICAgIHRoaXMuX3RpbWUgPSB0aW1lO1xuICAgIHNsZWVwKCk7XG4gIH0sXG4gIHN0b3A6IGZ1bmN0aW9uKCkge1xuICAgIGlmICh0aGlzLl9jYWxsKSB7XG4gICAgICB0aGlzLl9jYWxsID0gbnVsbDtcbiAgICAgIHRoaXMuX3RpbWUgPSBJbmZpbml0eTtcbiAgICAgIHNsZWVwKCk7XG4gICAgfVxuICB9XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gdGltZXIoY2FsbGJhY2ssIGRlbGF5LCB0aW1lKSB7XG4gIHZhciB0ID0gbmV3IFRpbWVyO1xuICB0LnJlc3RhcnQoY2FsbGJhY2ssIGRlbGF5LCB0aW1lKTtcbiAgcmV0dXJuIHQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0aW1lckZsdXNoKCkge1xuICBub3coKTsgLy8gR2V0IHRoZSBjdXJyZW50IHRpbWUsIGlmIG5vdCBhbHJlYWR5IHNldC5cbiAgKytmcmFtZTsgLy8gUHJldGVuZCB3ZeKAmXZlIHNldCBhbiBhbGFybSwgaWYgd2UgaGF2ZW7igJl0IGFscmVhZHkuXG4gIHZhciB0ID0gdGFza0hlYWQsIGU7XG4gIHdoaWxlICh0KSB7XG4gICAgaWYgKChlID0gY2xvY2tOb3cgLSB0Ll90aW1lKSA+PSAwKSB0Ll9jYWxsLmNhbGwodW5kZWZpbmVkLCBlKTtcbiAgICB0ID0gdC5fbmV4dDtcbiAgfVxuICAtLWZyYW1lO1xufVxuXG5mdW5jdGlvbiB3YWtlKCkge1xuICBjbG9ja05vdyA9IChjbG9ja0xhc3QgPSBjbG9jay5ub3coKSkgKyBjbG9ja1NrZXc7XG4gIGZyYW1lID0gdGltZW91dCA9IDA7XG4gIHRyeSB7XG4gICAgdGltZXJGbHVzaCgpO1xuICB9IGZpbmFsbHkge1xuICAgIGZyYW1lID0gMDtcbiAgICBuYXAoKTtcbiAgICBjbG9ja05vdyA9IDA7XG4gIH1cbn1cblxuZnVuY3Rpb24gcG9rZSgpIHtcbiAgdmFyIG5vdyA9IGNsb2NrLm5vdygpLCBkZWxheSA9IG5vdyAtIGNsb2NrTGFzdDtcbiAgaWYgKGRlbGF5ID4gcG9rZURlbGF5KSBjbG9ja1NrZXcgLT0gZGVsYXksIGNsb2NrTGFzdCA9IG5vdztcbn1cblxuZnVuY3Rpb24gbmFwKCkge1xuICB2YXIgdDAsIHQxID0gdGFza0hlYWQsIHQyLCB0aW1lID0gSW5maW5pdHk7XG4gIHdoaWxlICh0MSkge1xuICAgIGlmICh0MS5fY2FsbCkge1xuICAgICAgaWYgKHRpbWUgPiB0MS5fdGltZSkgdGltZSA9IHQxLl90aW1lO1xuICAgICAgdDAgPSB0MSwgdDEgPSB0MS5fbmV4dDtcbiAgICB9IGVsc2Uge1xuICAgICAgdDIgPSB0MS5fbmV4dCwgdDEuX25leHQgPSBudWxsO1xuICAgICAgdDEgPSB0MCA/IHQwLl9uZXh0ID0gdDIgOiB0YXNrSGVhZCA9IHQyO1xuICAgIH1cbiAgfVxuICB0YXNrVGFpbCA9IHQwO1xuICBzbGVlcCh0aW1lKTtcbn1cblxuZnVuY3Rpb24gc2xlZXAodGltZSkge1xuICBpZiAoZnJhbWUpIHJldHVybjsgLy8gU29vbmVzdCBhbGFybSBhbHJlYWR5IHNldCwgb3Igd2lsbCBiZS5cbiAgaWYgKHRpbWVvdXQpIHRpbWVvdXQgPSBjbGVhclRpbWVvdXQodGltZW91dCk7XG4gIHZhciBkZWxheSA9IHRpbWUgLSBjbG9ja05vdzsgLy8gU3RyaWN0bHkgbGVzcyB0aGFuIGlmIHdlIHJlY29tcHV0ZWQgY2xvY2tOb3cuXG4gIGlmIChkZWxheSA+IDI0KSB7XG4gICAgaWYgKHRpbWUgPCBJbmZpbml0eSkgdGltZW91dCA9IHNldFRpbWVvdXQod2FrZSwgdGltZSAtIGNsb2NrLm5vdygpIC0gY2xvY2tTa2V3KTtcbiAgICBpZiAoaW50ZXJ2YWwpIGludGVydmFsID0gY2xlYXJJbnRlcnZhbChpbnRlcnZhbCk7XG4gIH0gZWxzZSB7XG4gICAgaWYgKCFpbnRlcnZhbCkgY2xvY2tMYXN0ID0gY2xvY2subm93KCksIGludGVydmFsID0gc2V0SW50ZXJ2YWwocG9rZSwgcG9rZURlbGF5KTtcbiAgICBmcmFtZSA9IDEsIHNldEZyYW1lKHdha2UpO1xuICB9XG59XG4iLCJpbXBvcnQge1RpbWVyfSBmcm9tIFwiLi90aW1lci5qc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihjYWxsYmFjaywgZGVsYXksIHRpbWUpIHtcbiAgdmFyIHQgPSBuZXcgVGltZXI7XG4gIGRlbGF5ID0gZGVsYXkgPT0gbnVsbCA/IDAgOiArZGVsYXk7XG4gIHQucmVzdGFydChlbGFwc2VkID0+IHtcbiAgICB0LnN0b3AoKTtcbiAgICBjYWxsYmFjayhlbGFwc2VkICsgZGVsYXkpO1xuICB9LCBkZWxheSwgdGltZSk7XG4gIHJldHVybiB0O1xufVxuIiwiaW1wb3J0IHtkaXNwYXRjaH0gZnJvbSBcImQzLWRpc3BhdGNoXCI7XG5pbXBvcnQge3RpbWVyLCB0aW1lb3V0fSBmcm9tIFwiZDMtdGltZXJcIjtcblxudmFyIGVtcHR5T24gPSBkaXNwYXRjaChcInN0YXJ0XCIsIFwiZW5kXCIsIFwiY2FuY2VsXCIsIFwiaW50ZXJydXB0XCIpO1xudmFyIGVtcHR5VHdlZW4gPSBbXTtcblxuZXhwb3J0IHZhciBDUkVBVEVEID0gMDtcbmV4cG9ydCB2YXIgU0NIRURVTEVEID0gMTtcbmV4cG9ydCB2YXIgU1RBUlRJTkcgPSAyO1xuZXhwb3J0IHZhciBTVEFSVEVEID0gMztcbmV4cG9ydCB2YXIgUlVOTklORyA9IDQ7XG5leHBvcnQgdmFyIEVORElORyA9IDU7XG5leHBvcnQgdmFyIEVOREVEID0gNjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24obm9kZSwgbmFtZSwgaWQsIGluZGV4LCBncm91cCwgdGltaW5nKSB7XG4gIHZhciBzY2hlZHVsZXMgPSBub2RlLl9fdHJhbnNpdGlvbjtcbiAgaWYgKCFzY2hlZHVsZXMpIG5vZGUuX190cmFuc2l0aW9uID0ge307XG4gIGVsc2UgaWYgKGlkIGluIHNjaGVkdWxlcykgcmV0dXJuO1xuICBjcmVhdGUobm9kZSwgaWQsIHtcbiAgICBuYW1lOiBuYW1lLFxuICAgIGluZGV4OiBpbmRleCwgLy8gRm9yIGNvbnRleHQgZHVyaW5nIGNhbGxiYWNrLlxuICAgIGdyb3VwOiBncm91cCwgLy8gRm9yIGNvbnRleHQgZHVyaW5nIGNhbGxiYWNrLlxuICAgIG9uOiBlbXB0eU9uLFxuICAgIHR3ZWVuOiBlbXB0eVR3ZWVuLFxuICAgIHRpbWU6IHRpbWluZy50aW1lLFxuICAgIGRlbGF5OiB0aW1pbmcuZGVsYXksXG4gICAgZHVyYXRpb246IHRpbWluZy5kdXJhdGlvbixcbiAgICBlYXNlOiB0aW1pbmcuZWFzZSxcbiAgICB0aW1lcjogbnVsbCxcbiAgICBzdGF0ZTogQ1JFQVRFRFxuICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGluaXQobm9kZSwgaWQpIHtcbiAgdmFyIHNjaGVkdWxlID0gZ2V0KG5vZGUsIGlkKTtcbiAgaWYgKHNjaGVkdWxlLnN0YXRlID4gQ1JFQVRFRCkgdGhyb3cgbmV3IEVycm9yKFwidG9vIGxhdGU7IGFscmVhZHkgc2NoZWR1bGVkXCIpO1xuICByZXR1cm4gc2NoZWR1bGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXQobm9kZSwgaWQpIHtcbiAgdmFyIHNjaGVkdWxlID0gZ2V0KG5vZGUsIGlkKTtcbiAgaWYgKHNjaGVkdWxlLnN0YXRlID4gU1RBUlRFRCkgdGhyb3cgbmV3IEVycm9yKFwidG9vIGxhdGU7IGFscmVhZHkgcnVubmluZ1wiKTtcbiAgcmV0dXJuIHNjaGVkdWxlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0KG5vZGUsIGlkKSB7XG4gIHZhciBzY2hlZHVsZSA9IG5vZGUuX190cmFuc2l0aW9uO1xuICBpZiAoIXNjaGVkdWxlIHx8ICEoc2NoZWR1bGUgPSBzY2hlZHVsZVtpZF0pKSB0aHJvdyBuZXcgRXJyb3IoXCJ0cmFuc2l0aW9uIG5vdCBmb3VuZFwiKTtcbiAgcmV0dXJuIHNjaGVkdWxlO1xufVxuXG5mdW5jdGlvbiBjcmVhdGUobm9kZSwgaWQsIHNlbGYpIHtcbiAgdmFyIHNjaGVkdWxlcyA9IG5vZGUuX190cmFuc2l0aW9uLFxuICAgICAgdHdlZW47XG5cbiAgLy8gSW5pdGlhbGl6ZSB0aGUgc2VsZiB0aW1lciB3aGVuIHRoZSB0cmFuc2l0aW9uIGlzIGNyZWF0ZWQuXG4gIC8vIE5vdGUgdGhlIGFjdHVhbCBkZWxheSBpcyBub3Qga25vd24gdW50aWwgdGhlIGZpcnN0IGNhbGxiYWNrIVxuICBzY2hlZHVsZXNbaWRdID0gc2VsZjtcbiAgc2VsZi50aW1lciA9IHRpbWVyKHNjaGVkdWxlLCAwLCBzZWxmLnRpbWUpO1xuXG4gIGZ1bmN0aW9uIHNjaGVkdWxlKGVsYXBzZWQpIHtcbiAgICBzZWxmLnN0YXRlID0gU0NIRURVTEVEO1xuICAgIHNlbGYudGltZXIucmVzdGFydChzdGFydCwgc2VsZi5kZWxheSwgc2VsZi50aW1lKTtcblxuICAgIC8vIElmIHRoZSBlbGFwc2VkIGRlbGF5IGlzIGxlc3MgdGhhbiBvdXIgZmlyc3Qgc2xlZXAsIHN0YXJ0IGltbWVkaWF0ZWx5LlxuICAgIGlmIChzZWxmLmRlbGF5IDw9IGVsYXBzZWQpIHN0YXJ0KGVsYXBzZWQgLSBzZWxmLmRlbGF5KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHN0YXJ0KGVsYXBzZWQpIHtcbiAgICB2YXIgaSwgaiwgbiwgbztcblxuICAgIC8vIElmIHRoZSBzdGF0ZSBpcyBub3QgU0NIRURVTEVELCB0aGVuIHdlIHByZXZpb3VzbHkgZXJyb3JlZCBvbiBzdGFydC5cbiAgICBpZiAoc2VsZi5zdGF0ZSAhPT0gU0NIRURVTEVEKSByZXR1cm4gc3RvcCgpO1xuXG4gICAgZm9yIChpIGluIHNjaGVkdWxlcykge1xuICAgICAgbyA9IHNjaGVkdWxlc1tpXTtcbiAgICAgIGlmIChvLm5hbWUgIT09IHNlbGYubmFtZSkgY29udGludWU7XG5cbiAgICAgIC8vIFdoaWxlIHRoaXMgZWxlbWVudCBhbHJlYWR5IGhhcyBhIHN0YXJ0aW5nIHRyYW5zaXRpb24gZHVyaW5nIHRoaXMgZnJhbWUsXG4gICAgICAvLyBkZWZlciBzdGFydGluZyBhbiBpbnRlcnJ1cHRpbmcgdHJhbnNpdGlvbiB1bnRpbCB0aGF0IHRyYW5zaXRpb24gaGFzIGFcbiAgICAgIC8vIGNoYW5jZSB0byB0aWNrIChhbmQgcG9zc2libHkgZW5kKTsgc2VlIGQzL2QzLXRyYW5zaXRpb24jNTQhXG4gICAgICBpZiAoby5zdGF0ZSA9PT0gU1RBUlRFRCkgcmV0dXJuIHRpbWVvdXQoc3RhcnQpO1xuXG4gICAgICAvLyBJbnRlcnJ1cHQgdGhlIGFjdGl2ZSB0cmFuc2l0aW9uLCBpZiBhbnkuXG4gICAgICBpZiAoby5zdGF0ZSA9PT0gUlVOTklORykge1xuICAgICAgICBvLnN0YXRlID0gRU5ERUQ7XG4gICAgICAgIG8udGltZXIuc3RvcCgpO1xuICAgICAgICBvLm9uLmNhbGwoXCJpbnRlcnJ1cHRcIiwgbm9kZSwgbm9kZS5fX2RhdGFfXywgby5pbmRleCwgby5ncm91cCk7XG4gICAgICAgIGRlbGV0ZSBzY2hlZHVsZXNbaV07XG4gICAgICB9XG5cbiAgICAgIC8vIENhbmNlbCBhbnkgcHJlLWVtcHRlZCB0cmFuc2l0aW9ucy5cbiAgICAgIGVsc2UgaWYgKCtpIDwgaWQpIHtcbiAgICAgICAgby5zdGF0ZSA9IEVOREVEO1xuICAgICAgICBvLnRpbWVyLnN0b3AoKTtcbiAgICAgICAgby5vbi5jYWxsKFwiY2FuY2VsXCIsIG5vZGUsIG5vZGUuX19kYXRhX18sIG8uaW5kZXgsIG8uZ3JvdXApO1xuICAgICAgICBkZWxldGUgc2NoZWR1bGVzW2ldO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIERlZmVyIHRoZSBmaXJzdCB0aWNrIHRvIGVuZCBvZiB0aGUgY3VycmVudCBmcmFtZTsgc2VlIGQzL2QzIzE1NzYuXG4gICAgLy8gTm90ZSB0aGUgdHJhbnNpdGlvbiBtYXkgYmUgY2FuY2VsZWQgYWZ0ZXIgc3RhcnQgYW5kIGJlZm9yZSB0aGUgZmlyc3QgdGljayFcbiAgICAvLyBOb3RlIHRoaXMgbXVzdCBiZSBzY2hlZHVsZWQgYmVmb3JlIHRoZSBzdGFydCBldmVudDsgc2VlIGQzL2QzLXRyYW5zaXRpb24jMTYhXG4gICAgLy8gQXNzdW1pbmcgdGhpcyBpcyBzdWNjZXNzZnVsLCBzdWJzZXF1ZW50IGNhbGxiYWNrcyBnbyBzdHJhaWdodCB0byB0aWNrLlxuICAgIHRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICBpZiAoc2VsZi5zdGF0ZSA9PT0gU1RBUlRFRCkge1xuICAgICAgICBzZWxmLnN0YXRlID0gUlVOTklORztcbiAgICAgICAgc2VsZi50aW1lci5yZXN0YXJ0KHRpY2ssIHNlbGYuZGVsYXksIHNlbGYudGltZSk7XG4gICAgICAgIHRpY2soZWxhcHNlZCk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICAvLyBEaXNwYXRjaCB0aGUgc3RhcnQgZXZlbnQuXG4gICAgLy8gTm90ZSB0aGlzIG11c3QgYmUgZG9uZSBiZWZvcmUgdGhlIHR3ZWVuIGFyZSBpbml0aWFsaXplZC5cbiAgICBzZWxmLnN0YXRlID0gU1RBUlRJTkc7XG4gICAgc2VsZi5vbi5jYWxsKFwic3RhcnRcIiwgbm9kZSwgbm9kZS5fX2RhdGFfXywgc2VsZi5pbmRleCwgc2VsZi5ncm91cCk7XG4gICAgaWYgKHNlbGYuc3RhdGUgIT09IFNUQVJUSU5HKSByZXR1cm47IC8vIGludGVycnVwdGVkXG4gICAgc2VsZi5zdGF0ZSA9IFNUQVJURUQ7XG5cbiAgICAvLyBJbml0aWFsaXplIHRoZSB0d2VlbiwgZGVsZXRpbmcgbnVsbCB0d2Vlbi5cbiAgICB0d2VlbiA9IG5ldyBBcnJheShuID0gc2VsZi50d2Vlbi5sZW5ndGgpO1xuICAgIGZvciAoaSA9IDAsIGogPSAtMTsgaSA8IG47ICsraSkge1xuICAgICAgaWYgKG8gPSBzZWxmLnR3ZWVuW2ldLnZhbHVlLmNhbGwobm9kZSwgbm9kZS5fX2RhdGFfXywgc2VsZi5pbmRleCwgc2VsZi5ncm91cCkpIHtcbiAgICAgICAgdHdlZW5bKytqXSA9IG87XG4gICAgICB9XG4gICAgfVxuICAgIHR3ZWVuLmxlbmd0aCA9IGogKyAxO1xuICB9XG5cbiAgZnVuY3Rpb24gdGljayhlbGFwc2VkKSB7XG4gICAgdmFyIHQgPSBlbGFwc2VkIDwgc2VsZi5kdXJhdGlvbiA/IHNlbGYuZWFzZS5jYWxsKG51bGwsIGVsYXBzZWQgLyBzZWxmLmR1cmF0aW9uKSA6IChzZWxmLnRpbWVyLnJlc3RhcnQoc3RvcCksIHNlbGYuc3RhdGUgPSBFTkRJTkcsIDEpLFxuICAgICAgICBpID0gLTEsXG4gICAgICAgIG4gPSB0d2Vlbi5sZW5ndGg7XG5cbiAgICB3aGlsZSAoKytpIDwgbikge1xuICAgICAgdHdlZW5baV0uY2FsbChub2RlLCB0KTtcbiAgICB9XG5cbiAgICAvLyBEaXNwYXRjaCB0aGUgZW5kIGV2ZW50LlxuICAgIGlmIChzZWxmLnN0YXRlID09PSBFTkRJTkcpIHtcbiAgICAgIHNlbGYub24uY2FsbChcImVuZFwiLCBub2RlLCBub2RlLl9fZGF0YV9fLCBzZWxmLmluZGV4LCBzZWxmLmdyb3VwKTtcbiAgICAgIHN0b3AoKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBzdG9wKCkge1xuICAgIHNlbGYuc3RhdGUgPSBFTkRFRDtcbiAgICBzZWxmLnRpbWVyLnN0b3AoKTtcbiAgICBkZWxldGUgc2NoZWR1bGVzW2lkXTtcbiAgICBmb3IgKHZhciBpIGluIHNjaGVkdWxlcykgcmV0dXJuOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVudXNlZC12YXJzXG4gICAgZGVsZXRlIG5vZGUuX190cmFuc2l0aW9uO1xuICB9XG59XG4iLCJpbXBvcnQge1NUQVJUSU5HLCBFTkRJTkcsIEVOREVEfSBmcm9tIFwiLi90cmFuc2l0aW9uL3NjaGVkdWxlLmpzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKG5vZGUsIG5hbWUpIHtcbiAgdmFyIHNjaGVkdWxlcyA9IG5vZGUuX190cmFuc2l0aW9uLFxuICAgICAgc2NoZWR1bGUsXG4gICAgICBhY3RpdmUsXG4gICAgICBlbXB0eSA9IHRydWUsXG4gICAgICBpO1xuXG4gIGlmICghc2NoZWR1bGVzKSByZXR1cm47XG5cbiAgbmFtZSA9IG5hbWUgPT0gbnVsbCA/IG51bGwgOiBuYW1lICsgXCJcIjtcblxuICBmb3IgKGkgaW4gc2NoZWR1bGVzKSB7XG4gICAgaWYgKChzY2hlZHVsZSA9IHNjaGVkdWxlc1tpXSkubmFtZSAhPT0gbmFtZSkgeyBlbXB0eSA9IGZhbHNlOyBjb250aW51ZTsgfVxuICAgIGFjdGl2ZSA9IHNjaGVkdWxlLnN0YXRlID4gU1RBUlRJTkcgJiYgc2NoZWR1bGUuc3RhdGUgPCBFTkRJTkc7XG4gICAgc2NoZWR1bGUuc3RhdGUgPSBFTkRFRDtcbiAgICBzY2hlZHVsZS50aW1lci5zdG9wKCk7XG4gICAgc2NoZWR1bGUub24uY2FsbChhY3RpdmUgPyBcImludGVycnVwdFwiIDogXCJjYW5jZWxcIiwgbm9kZSwgbm9kZS5fX2RhdGFfXywgc2NoZWR1bGUuaW5kZXgsIHNjaGVkdWxlLmdyb3VwKTtcbiAgICBkZWxldGUgc2NoZWR1bGVzW2ldO1xuICB9XG5cbiAgaWYgKGVtcHR5KSBkZWxldGUgbm9kZS5fX3RyYW5zaXRpb247XG59XG4iLCJpbXBvcnQgaW50ZXJydXB0IGZyb20gXCIuLi9pbnRlcnJ1cHQuanNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24obmFtZSkge1xuICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKCkge1xuICAgIGludGVycnVwdCh0aGlzLCBuYW1lKTtcbiAgfSk7XG59XG4iLCJpbXBvcnQge2dldCwgc2V0fSBmcm9tIFwiLi9zY2hlZHVsZS5qc1wiO1xuXG5mdW5jdGlvbiB0d2VlblJlbW92ZShpZCwgbmFtZSkge1xuICB2YXIgdHdlZW4wLCB0d2VlbjE7XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICB2YXIgc2NoZWR1bGUgPSBzZXQodGhpcywgaWQpLFxuICAgICAgICB0d2VlbiA9IHNjaGVkdWxlLnR3ZWVuO1xuXG4gICAgLy8gSWYgdGhpcyBub2RlIHNoYXJlZCB0d2VlbiB3aXRoIHRoZSBwcmV2aW91cyBub2RlLFxuICAgIC8vIGp1c3QgYXNzaWduIHRoZSB1cGRhdGVkIHNoYXJlZCB0d2VlbiBhbmQgd2XigJlyZSBkb25lIVxuICAgIC8vIE90aGVyd2lzZSwgY29weS1vbi13cml0ZS5cbiAgICBpZiAodHdlZW4gIT09IHR3ZWVuMCkge1xuICAgICAgdHdlZW4xID0gdHdlZW4wID0gdHdlZW47XG4gICAgICBmb3IgKHZhciBpID0gMCwgbiA9IHR3ZWVuMS5sZW5ndGg7IGkgPCBuOyArK2kpIHtcbiAgICAgICAgaWYgKHR3ZWVuMVtpXS5uYW1lID09PSBuYW1lKSB7XG4gICAgICAgICAgdHdlZW4xID0gdHdlZW4xLnNsaWNlKCk7XG4gICAgICAgICAgdHdlZW4xLnNwbGljZShpLCAxKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHNjaGVkdWxlLnR3ZWVuID0gdHdlZW4xO1xuICB9O1xufVxuXG5mdW5jdGlvbiB0d2VlbkZ1bmN0aW9uKGlkLCBuYW1lLCB2YWx1ZSkge1xuICB2YXIgdHdlZW4wLCB0d2VlbjE7XG4gIGlmICh0eXBlb2YgdmFsdWUgIT09IFwiZnVuY3Rpb25cIikgdGhyb3cgbmV3IEVycm9yO1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgdmFyIHNjaGVkdWxlID0gc2V0KHRoaXMsIGlkKSxcbiAgICAgICAgdHdlZW4gPSBzY2hlZHVsZS50d2VlbjtcblxuICAgIC8vIElmIHRoaXMgbm9kZSBzaGFyZWQgdHdlZW4gd2l0aCB0aGUgcHJldmlvdXMgbm9kZSxcbiAgICAvLyBqdXN0IGFzc2lnbiB0aGUgdXBkYXRlZCBzaGFyZWQgdHdlZW4gYW5kIHdl4oCZcmUgZG9uZSFcbiAgICAvLyBPdGhlcndpc2UsIGNvcHktb24td3JpdGUuXG4gICAgaWYgKHR3ZWVuICE9PSB0d2VlbjApIHtcbiAgICAgIHR3ZWVuMSA9ICh0d2VlbjAgPSB0d2Vlbikuc2xpY2UoKTtcbiAgICAgIGZvciAodmFyIHQgPSB7bmFtZTogbmFtZSwgdmFsdWU6IHZhbHVlfSwgaSA9IDAsIG4gPSB0d2VlbjEubGVuZ3RoOyBpIDwgbjsgKytpKSB7XG4gICAgICAgIGlmICh0d2VlbjFbaV0ubmFtZSA9PT0gbmFtZSkge1xuICAgICAgICAgIHR3ZWVuMVtpXSA9IHQ7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChpID09PSBuKSB0d2VlbjEucHVzaCh0KTtcbiAgICB9XG5cbiAgICBzY2hlZHVsZS50d2VlbiA9IHR3ZWVuMTtcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24obmFtZSwgdmFsdWUpIHtcbiAgdmFyIGlkID0gdGhpcy5faWQ7XG5cbiAgbmFtZSArPSBcIlwiO1xuXG4gIGlmIChhcmd1bWVudHMubGVuZ3RoIDwgMikge1xuICAgIHZhciB0d2VlbiA9IGdldCh0aGlzLm5vZGUoKSwgaWQpLnR3ZWVuO1xuICAgIGZvciAodmFyIGkgPSAwLCBuID0gdHdlZW4ubGVuZ3RoLCB0OyBpIDwgbjsgKytpKSB7XG4gICAgICBpZiAoKHQgPSB0d2VlbltpXSkubmFtZSA9PT0gbmFtZSkge1xuICAgICAgICByZXR1cm4gdC52YWx1ZTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICByZXR1cm4gdGhpcy5lYWNoKCh2YWx1ZSA9PSBudWxsID8gdHdlZW5SZW1vdmUgOiB0d2VlbkZ1bmN0aW9uKShpZCwgbmFtZSwgdmFsdWUpKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHR3ZWVuVmFsdWUodHJhbnNpdGlvbiwgbmFtZSwgdmFsdWUpIHtcbiAgdmFyIGlkID0gdHJhbnNpdGlvbi5faWQ7XG5cbiAgdHJhbnNpdGlvbi5lYWNoKGZ1bmN0aW9uKCkge1xuICAgIHZhciBzY2hlZHVsZSA9IHNldCh0aGlzLCBpZCk7XG4gICAgKHNjaGVkdWxlLnZhbHVlIHx8IChzY2hlZHVsZS52YWx1ZSA9IHt9KSlbbmFtZV0gPSB2YWx1ZS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICB9KTtcblxuICByZXR1cm4gZnVuY3Rpb24obm9kZSkge1xuICAgIHJldHVybiBnZXQobm9kZSwgaWQpLnZhbHVlW25hbWVdO1xuICB9O1xufVxuIiwiaW1wb3J0IHtjb2xvcn0gZnJvbSBcImQzLWNvbG9yXCI7XG5pbXBvcnQge2ludGVycG9sYXRlTnVtYmVyLCBpbnRlcnBvbGF0ZVJnYiwgaW50ZXJwb2xhdGVTdHJpbmd9IGZyb20gXCJkMy1pbnRlcnBvbGF0ZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihhLCBiKSB7XG4gIHZhciBjO1xuICByZXR1cm4gKHR5cGVvZiBiID09PSBcIm51bWJlclwiID8gaW50ZXJwb2xhdGVOdW1iZXJcbiAgICAgIDogYiBpbnN0YW5jZW9mIGNvbG9yID8gaW50ZXJwb2xhdGVSZ2JcbiAgICAgIDogKGMgPSBjb2xvcihiKSkgPyAoYiA9IGMsIGludGVycG9sYXRlUmdiKVxuICAgICAgOiBpbnRlcnBvbGF0ZVN0cmluZykoYSwgYik7XG59XG4iLCJpbXBvcnQge2ludGVycG9sYXRlVHJhbnNmb3JtU3ZnIGFzIGludGVycG9sYXRlVHJhbnNmb3JtfSBmcm9tIFwiZDMtaW50ZXJwb2xhdGVcIjtcbmltcG9ydCB7bmFtZXNwYWNlfSBmcm9tIFwiZDMtc2VsZWN0aW9uXCI7XG5pbXBvcnQge3R3ZWVuVmFsdWV9IGZyb20gXCIuL3R3ZWVuLmpzXCI7XG5pbXBvcnQgaW50ZXJwb2xhdGUgZnJvbSBcIi4vaW50ZXJwb2xhdGUuanNcIjtcblxuZnVuY3Rpb24gYXR0clJlbW92ZShuYW1lKSB7XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICB0aGlzLnJlbW92ZUF0dHJpYnV0ZShuYW1lKTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gYXR0clJlbW92ZU5TKGZ1bGxuYW1lKSB7XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICB0aGlzLnJlbW92ZUF0dHJpYnV0ZU5TKGZ1bGxuYW1lLnNwYWNlLCBmdWxsbmFtZS5sb2NhbCk7XG4gIH07XG59XG5cbmZ1bmN0aW9uIGF0dHJDb25zdGFudChuYW1lLCBpbnRlcnBvbGF0ZSwgdmFsdWUxKSB7XG4gIHZhciBzdHJpbmcwMCxcbiAgICAgIHN0cmluZzEgPSB2YWx1ZTEgKyBcIlwiLFxuICAgICAgaW50ZXJwb2xhdGUwO1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgdmFyIHN0cmluZzAgPSB0aGlzLmdldEF0dHJpYnV0ZShuYW1lKTtcbiAgICByZXR1cm4gc3RyaW5nMCA9PT0gc3RyaW5nMSA/IG51bGxcbiAgICAgICAgOiBzdHJpbmcwID09PSBzdHJpbmcwMCA/IGludGVycG9sYXRlMFxuICAgICAgICA6IGludGVycG9sYXRlMCA9IGludGVycG9sYXRlKHN0cmluZzAwID0gc3RyaW5nMCwgdmFsdWUxKTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gYXR0ckNvbnN0YW50TlMoZnVsbG5hbWUsIGludGVycG9sYXRlLCB2YWx1ZTEpIHtcbiAgdmFyIHN0cmluZzAwLFxuICAgICAgc3RyaW5nMSA9IHZhbHVlMSArIFwiXCIsXG4gICAgICBpbnRlcnBvbGF0ZTA7XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICB2YXIgc3RyaW5nMCA9IHRoaXMuZ2V0QXR0cmlidXRlTlMoZnVsbG5hbWUuc3BhY2UsIGZ1bGxuYW1lLmxvY2FsKTtcbiAgICByZXR1cm4gc3RyaW5nMCA9PT0gc3RyaW5nMSA/IG51bGxcbiAgICAgICAgOiBzdHJpbmcwID09PSBzdHJpbmcwMCA/IGludGVycG9sYXRlMFxuICAgICAgICA6IGludGVycG9sYXRlMCA9IGludGVycG9sYXRlKHN0cmluZzAwID0gc3RyaW5nMCwgdmFsdWUxKTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gYXR0ckZ1bmN0aW9uKG5hbWUsIGludGVycG9sYXRlLCB2YWx1ZSkge1xuICB2YXIgc3RyaW5nMDAsXG4gICAgICBzdHJpbmcxMCxcbiAgICAgIGludGVycG9sYXRlMDtcbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIHZhciBzdHJpbmcwLCB2YWx1ZTEgPSB2YWx1ZSh0aGlzKSwgc3RyaW5nMTtcbiAgICBpZiAodmFsdWUxID09IG51bGwpIHJldHVybiB2b2lkIHRoaXMucmVtb3ZlQXR0cmlidXRlKG5hbWUpO1xuICAgIHN0cmluZzAgPSB0aGlzLmdldEF0dHJpYnV0ZShuYW1lKTtcbiAgICBzdHJpbmcxID0gdmFsdWUxICsgXCJcIjtcbiAgICByZXR1cm4gc3RyaW5nMCA9PT0gc3RyaW5nMSA/IG51bGxcbiAgICAgICAgOiBzdHJpbmcwID09PSBzdHJpbmcwMCAmJiBzdHJpbmcxID09PSBzdHJpbmcxMCA/IGludGVycG9sYXRlMFxuICAgICAgICA6IChzdHJpbmcxMCA9IHN0cmluZzEsIGludGVycG9sYXRlMCA9IGludGVycG9sYXRlKHN0cmluZzAwID0gc3RyaW5nMCwgdmFsdWUxKSk7XG4gIH07XG59XG5cbmZ1bmN0aW9uIGF0dHJGdW5jdGlvbk5TKGZ1bGxuYW1lLCBpbnRlcnBvbGF0ZSwgdmFsdWUpIHtcbiAgdmFyIHN0cmluZzAwLFxuICAgICAgc3RyaW5nMTAsXG4gICAgICBpbnRlcnBvbGF0ZTA7XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICB2YXIgc3RyaW5nMCwgdmFsdWUxID0gdmFsdWUodGhpcyksIHN0cmluZzE7XG4gICAgaWYgKHZhbHVlMSA9PSBudWxsKSByZXR1cm4gdm9pZCB0aGlzLnJlbW92ZUF0dHJpYnV0ZU5TKGZ1bGxuYW1lLnNwYWNlLCBmdWxsbmFtZS5sb2NhbCk7XG4gICAgc3RyaW5nMCA9IHRoaXMuZ2V0QXR0cmlidXRlTlMoZnVsbG5hbWUuc3BhY2UsIGZ1bGxuYW1lLmxvY2FsKTtcbiAgICBzdHJpbmcxID0gdmFsdWUxICsgXCJcIjtcbiAgICByZXR1cm4gc3RyaW5nMCA9PT0gc3RyaW5nMSA/IG51bGxcbiAgICAgICAgOiBzdHJpbmcwID09PSBzdHJpbmcwMCAmJiBzdHJpbmcxID09PSBzdHJpbmcxMCA/IGludGVycG9sYXRlMFxuICAgICAgICA6IChzdHJpbmcxMCA9IHN0cmluZzEsIGludGVycG9sYXRlMCA9IGludGVycG9sYXRlKHN0cmluZzAwID0gc3RyaW5nMCwgdmFsdWUxKSk7XG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKG5hbWUsIHZhbHVlKSB7XG4gIHZhciBmdWxsbmFtZSA9IG5hbWVzcGFjZShuYW1lKSwgaSA9IGZ1bGxuYW1lID09PSBcInRyYW5zZm9ybVwiID8gaW50ZXJwb2xhdGVUcmFuc2Zvcm0gOiBpbnRlcnBvbGF0ZTtcbiAgcmV0dXJuIHRoaXMuYXR0clR3ZWVuKG5hbWUsIHR5cGVvZiB2YWx1ZSA9PT0gXCJmdW5jdGlvblwiXG4gICAgICA/IChmdWxsbmFtZS5sb2NhbCA/IGF0dHJGdW5jdGlvbk5TIDogYXR0ckZ1bmN0aW9uKShmdWxsbmFtZSwgaSwgdHdlZW5WYWx1ZSh0aGlzLCBcImF0dHIuXCIgKyBuYW1lLCB2YWx1ZSkpXG4gICAgICA6IHZhbHVlID09IG51bGwgPyAoZnVsbG5hbWUubG9jYWwgPyBhdHRyUmVtb3ZlTlMgOiBhdHRyUmVtb3ZlKShmdWxsbmFtZSlcbiAgICAgIDogKGZ1bGxuYW1lLmxvY2FsID8gYXR0ckNvbnN0YW50TlMgOiBhdHRyQ29uc3RhbnQpKGZ1bGxuYW1lLCBpLCB2YWx1ZSkpO1xufVxuIiwiaW1wb3J0IHtuYW1lc3BhY2V9IGZyb20gXCJkMy1zZWxlY3Rpb25cIjtcblxuZnVuY3Rpb24gYXR0ckludGVycG9sYXRlKG5hbWUsIGkpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKHQpIHtcbiAgICB0aGlzLnNldEF0dHJpYnV0ZShuYW1lLCBpLmNhbGwodGhpcywgdCkpO1xuICB9O1xufVxuXG5mdW5jdGlvbiBhdHRySW50ZXJwb2xhdGVOUyhmdWxsbmFtZSwgaSkge1xuICByZXR1cm4gZnVuY3Rpb24odCkge1xuICAgIHRoaXMuc2V0QXR0cmlidXRlTlMoZnVsbG5hbWUuc3BhY2UsIGZ1bGxuYW1lLmxvY2FsLCBpLmNhbGwodGhpcywgdCkpO1xuICB9O1xufVxuXG5mdW5jdGlvbiBhdHRyVHdlZW5OUyhmdWxsbmFtZSwgdmFsdWUpIHtcbiAgdmFyIHQwLCBpMDtcbiAgZnVuY3Rpb24gdHdlZW4oKSB7XG4gICAgdmFyIGkgPSB2YWx1ZS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIGlmIChpICE9PSBpMCkgdDAgPSAoaTAgPSBpKSAmJiBhdHRySW50ZXJwb2xhdGVOUyhmdWxsbmFtZSwgaSk7XG4gICAgcmV0dXJuIHQwO1xuICB9XG4gIHR3ZWVuLl92YWx1ZSA9IHZhbHVlO1xuICByZXR1cm4gdHdlZW47XG59XG5cbmZ1bmN0aW9uIGF0dHJUd2VlbihuYW1lLCB2YWx1ZSkge1xuICB2YXIgdDAsIGkwO1xuICBmdW5jdGlvbiB0d2VlbigpIHtcbiAgICB2YXIgaSA9IHZhbHVlLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgaWYgKGkgIT09IGkwKSB0MCA9IChpMCA9IGkpICYmIGF0dHJJbnRlcnBvbGF0ZShuYW1lLCBpKTtcbiAgICByZXR1cm4gdDA7XG4gIH1cbiAgdHdlZW4uX3ZhbHVlID0gdmFsdWU7XG4gIHJldHVybiB0d2Vlbjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24obmFtZSwgdmFsdWUpIHtcbiAgdmFyIGtleSA9IFwiYXR0ci5cIiArIG5hbWU7XG4gIGlmIChhcmd1bWVudHMubGVuZ3RoIDwgMikgcmV0dXJuIChrZXkgPSB0aGlzLnR3ZWVuKGtleSkpICYmIGtleS5fdmFsdWU7XG4gIGlmICh2YWx1ZSA9PSBudWxsKSByZXR1cm4gdGhpcy50d2VlbihrZXksIG51bGwpO1xuICBpZiAodHlwZW9mIHZhbHVlICE9PSBcImZ1bmN0aW9uXCIpIHRocm93IG5ldyBFcnJvcjtcbiAgdmFyIGZ1bGxuYW1lID0gbmFtZXNwYWNlKG5hbWUpO1xuICByZXR1cm4gdGhpcy50d2VlbihrZXksIChmdWxsbmFtZS5sb2NhbCA/IGF0dHJUd2Vlbk5TIDogYXR0clR3ZWVuKShmdWxsbmFtZSwgdmFsdWUpKTtcbn1cbiIsImltcG9ydCB7Z2V0LCBpbml0fSBmcm9tIFwiLi9zY2hlZHVsZS5qc1wiO1xuXG5mdW5jdGlvbiBkZWxheUZ1bmN0aW9uKGlkLCB2YWx1ZSkge1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgaW5pdCh0aGlzLCBpZCkuZGVsYXkgPSArdmFsdWUuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gZGVsYXlDb25zdGFudChpZCwgdmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlID0gK3ZhbHVlLCBmdW5jdGlvbigpIHtcbiAgICBpbml0KHRoaXMsIGlkKS5kZWxheSA9IHZhbHVlO1xuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbih2YWx1ZSkge1xuICB2YXIgaWQgPSB0aGlzLl9pZDtcblxuICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aFxuICAgICAgPyB0aGlzLmVhY2goKHR5cGVvZiB2YWx1ZSA9PT0gXCJmdW5jdGlvblwiXG4gICAgICAgICAgPyBkZWxheUZ1bmN0aW9uXG4gICAgICAgICAgOiBkZWxheUNvbnN0YW50KShpZCwgdmFsdWUpKVxuICAgICAgOiBnZXQodGhpcy5ub2RlKCksIGlkKS5kZWxheTtcbn1cbiIsImltcG9ydCB7Z2V0LCBzZXR9IGZyb20gXCIuL3NjaGVkdWxlLmpzXCI7XG5cbmZ1bmN0aW9uIGR1cmF0aW9uRnVuY3Rpb24oaWQsIHZhbHVlKSB7XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICBzZXQodGhpcywgaWQpLmR1cmF0aW9uID0gK3ZhbHVlLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gIH07XG59XG5cbmZ1bmN0aW9uIGR1cmF0aW9uQ29uc3RhbnQoaWQsIHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSA9ICt2YWx1ZSwgZnVuY3Rpb24oKSB7XG4gICAgc2V0KHRoaXMsIGlkKS5kdXJhdGlvbiA9IHZhbHVlO1xuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbih2YWx1ZSkge1xuICB2YXIgaWQgPSB0aGlzLl9pZDtcblxuICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aFxuICAgICAgPyB0aGlzLmVhY2goKHR5cGVvZiB2YWx1ZSA9PT0gXCJmdW5jdGlvblwiXG4gICAgICAgICAgPyBkdXJhdGlvbkZ1bmN0aW9uXG4gICAgICAgICAgOiBkdXJhdGlvbkNvbnN0YW50KShpZCwgdmFsdWUpKVxuICAgICAgOiBnZXQodGhpcy5ub2RlKCksIGlkKS5kdXJhdGlvbjtcbn1cbiIsImltcG9ydCB7Z2V0LCBzZXR9IGZyb20gXCIuL3NjaGVkdWxlLmpzXCI7XG5cbmZ1bmN0aW9uIGVhc2VDb25zdGFudChpZCwgdmFsdWUpIHtcbiAgaWYgKHR5cGVvZiB2YWx1ZSAhPT0gXCJmdW5jdGlvblwiKSB0aHJvdyBuZXcgRXJyb3I7XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICBzZXQodGhpcywgaWQpLmVhc2UgPSB2YWx1ZTtcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24odmFsdWUpIHtcbiAgdmFyIGlkID0gdGhpcy5faWQ7XG5cbiAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGhcbiAgICAgID8gdGhpcy5lYWNoKGVhc2VDb25zdGFudChpZCwgdmFsdWUpKVxuICAgICAgOiBnZXQodGhpcy5ub2RlKCksIGlkKS5lYXNlO1xufVxuIiwiaW1wb3J0IHtzZXR9IGZyb20gXCIuL3NjaGVkdWxlLmpzXCI7XG5cbmZ1bmN0aW9uIGVhc2VWYXJ5aW5nKGlkLCB2YWx1ZSkge1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgdmFyIHYgPSB2YWx1ZS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIGlmICh0eXBlb2YgdiAhPT0gXCJmdW5jdGlvblwiKSB0aHJvdyBuZXcgRXJyb3I7XG4gICAgc2V0KHRoaXMsIGlkKS5lYXNlID0gdjtcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24odmFsdWUpIHtcbiAgaWYgKHR5cGVvZiB2YWx1ZSAhPT0gXCJmdW5jdGlvblwiKSB0aHJvdyBuZXcgRXJyb3I7XG4gIHJldHVybiB0aGlzLmVhY2goZWFzZVZhcnlpbmcodGhpcy5faWQsIHZhbHVlKSk7XG59XG4iLCJpbXBvcnQge21hdGNoZXJ9IGZyb20gXCJkMy1zZWxlY3Rpb25cIjtcbmltcG9ydCB7VHJhbnNpdGlvbn0gZnJvbSBcIi4vaW5kZXguanNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24obWF0Y2gpIHtcbiAgaWYgKHR5cGVvZiBtYXRjaCAhPT0gXCJmdW5jdGlvblwiKSBtYXRjaCA9IG1hdGNoZXIobWF0Y2gpO1xuXG4gIGZvciAodmFyIGdyb3VwcyA9IHRoaXMuX2dyb3VwcywgbSA9IGdyb3Vwcy5sZW5ndGgsIHN1Ymdyb3VwcyA9IG5ldyBBcnJheShtKSwgaiA9IDA7IGogPCBtOyArK2opIHtcbiAgICBmb3IgKHZhciBncm91cCA9IGdyb3Vwc1tqXSwgbiA9IGdyb3VwLmxlbmd0aCwgc3ViZ3JvdXAgPSBzdWJncm91cHNbal0gPSBbXSwgbm9kZSwgaSA9IDA7IGkgPCBuOyArK2kpIHtcbiAgICAgIGlmICgobm9kZSA9IGdyb3VwW2ldKSAmJiBtYXRjaC5jYWxsKG5vZGUsIG5vZGUuX19kYXRhX18sIGksIGdyb3VwKSkge1xuICAgICAgICBzdWJncm91cC5wdXNoKG5vZGUpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBuZXcgVHJhbnNpdGlvbihzdWJncm91cHMsIHRoaXMuX3BhcmVudHMsIHRoaXMuX25hbWUsIHRoaXMuX2lkKTtcbn1cbiIsImltcG9ydCB7VHJhbnNpdGlvbn0gZnJvbSBcIi4vaW5kZXguanNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24odHJhbnNpdGlvbikge1xuICBpZiAodHJhbnNpdGlvbi5faWQgIT09IHRoaXMuX2lkKSB0aHJvdyBuZXcgRXJyb3I7XG5cbiAgZm9yICh2YXIgZ3JvdXBzMCA9IHRoaXMuX2dyb3VwcywgZ3JvdXBzMSA9IHRyYW5zaXRpb24uX2dyb3VwcywgbTAgPSBncm91cHMwLmxlbmd0aCwgbTEgPSBncm91cHMxLmxlbmd0aCwgbSA9IE1hdGgubWluKG0wLCBtMSksIG1lcmdlcyA9IG5ldyBBcnJheShtMCksIGogPSAwOyBqIDwgbTsgKytqKSB7XG4gICAgZm9yICh2YXIgZ3JvdXAwID0gZ3JvdXBzMFtqXSwgZ3JvdXAxID0gZ3JvdXBzMVtqXSwgbiA9IGdyb3VwMC5sZW5ndGgsIG1lcmdlID0gbWVyZ2VzW2pdID0gbmV3IEFycmF5KG4pLCBub2RlLCBpID0gMDsgaSA8IG47ICsraSkge1xuICAgICAgaWYgKG5vZGUgPSBncm91cDBbaV0gfHwgZ3JvdXAxW2ldKSB7XG4gICAgICAgIG1lcmdlW2ldID0gbm9kZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBmb3IgKDsgaiA8IG0wOyArK2opIHtcbiAgICBtZXJnZXNbal0gPSBncm91cHMwW2pdO1xuICB9XG5cbiAgcmV0dXJuIG5ldyBUcmFuc2l0aW9uKG1lcmdlcywgdGhpcy5fcGFyZW50cywgdGhpcy5fbmFtZSwgdGhpcy5faWQpO1xufVxuIiwiaW1wb3J0IHtnZXQsIHNldCwgaW5pdH0gZnJvbSBcIi4vc2NoZWR1bGUuanNcIjtcblxuZnVuY3Rpb24gc3RhcnQobmFtZSkge1xuICByZXR1cm4gKG5hbWUgKyBcIlwiKS50cmltKCkuc3BsaXQoL158XFxzKy8pLmV2ZXJ5KGZ1bmN0aW9uKHQpIHtcbiAgICB2YXIgaSA9IHQuaW5kZXhPZihcIi5cIik7XG4gICAgaWYgKGkgPj0gMCkgdCA9IHQuc2xpY2UoMCwgaSk7XG4gICAgcmV0dXJuICF0IHx8IHQgPT09IFwic3RhcnRcIjtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIG9uRnVuY3Rpb24oaWQsIG5hbWUsIGxpc3RlbmVyKSB7XG4gIHZhciBvbjAsIG9uMSwgc2l0ID0gc3RhcnQobmFtZSkgPyBpbml0IDogc2V0O1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgdmFyIHNjaGVkdWxlID0gc2l0KHRoaXMsIGlkKSxcbiAgICAgICAgb24gPSBzY2hlZHVsZS5vbjtcblxuICAgIC8vIElmIHRoaXMgbm9kZSBzaGFyZWQgYSBkaXNwYXRjaCB3aXRoIHRoZSBwcmV2aW91cyBub2RlLFxuICAgIC8vIGp1c3QgYXNzaWduIHRoZSB1cGRhdGVkIHNoYXJlZCBkaXNwYXRjaCBhbmQgd2XigJlyZSBkb25lIVxuICAgIC8vIE90aGVyd2lzZSwgY29weS1vbi13cml0ZS5cbiAgICBpZiAob24gIT09IG9uMCkgKG9uMSA9IChvbjAgPSBvbikuY29weSgpKS5vbihuYW1lLCBsaXN0ZW5lcik7XG5cbiAgICBzY2hlZHVsZS5vbiA9IG9uMTtcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24obmFtZSwgbGlzdGVuZXIpIHtcbiAgdmFyIGlkID0gdGhpcy5faWQ7XG5cbiAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPCAyXG4gICAgICA/IGdldCh0aGlzLm5vZGUoKSwgaWQpLm9uLm9uKG5hbWUpXG4gICAgICA6IHRoaXMuZWFjaChvbkZ1bmN0aW9uKGlkLCBuYW1lLCBsaXN0ZW5lcikpO1xufVxuIiwiZnVuY3Rpb24gcmVtb3ZlRnVuY3Rpb24oaWQpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIHZhciBwYXJlbnQgPSB0aGlzLnBhcmVudE5vZGU7XG4gICAgZm9yICh2YXIgaSBpbiB0aGlzLl9fdHJhbnNpdGlvbikgaWYgKCtpICE9PSBpZCkgcmV0dXJuO1xuICAgIGlmIChwYXJlbnQpIHBhcmVudC5yZW1vdmVDaGlsZCh0aGlzKTtcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKSB7XG4gIHJldHVybiB0aGlzLm9uKFwiZW5kLnJlbW92ZVwiLCByZW1vdmVGdW5jdGlvbih0aGlzLl9pZCkpO1xufVxuIiwiaW1wb3J0IHtzZWxlY3Rvcn0gZnJvbSBcImQzLXNlbGVjdGlvblwiO1xuaW1wb3J0IHtUcmFuc2l0aW9ufSBmcm9tIFwiLi9pbmRleC5qc1wiO1xuaW1wb3J0IHNjaGVkdWxlLCB7Z2V0fSBmcm9tIFwiLi9zY2hlZHVsZS5qc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihzZWxlY3QpIHtcbiAgdmFyIG5hbWUgPSB0aGlzLl9uYW1lLFxuICAgICAgaWQgPSB0aGlzLl9pZDtcblxuICBpZiAodHlwZW9mIHNlbGVjdCAhPT0gXCJmdW5jdGlvblwiKSBzZWxlY3QgPSBzZWxlY3RvcihzZWxlY3QpO1xuXG4gIGZvciAodmFyIGdyb3VwcyA9IHRoaXMuX2dyb3VwcywgbSA9IGdyb3Vwcy5sZW5ndGgsIHN1Ymdyb3VwcyA9IG5ldyBBcnJheShtKSwgaiA9IDA7IGogPCBtOyArK2opIHtcbiAgICBmb3IgKHZhciBncm91cCA9IGdyb3Vwc1tqXSwgbiA9IGdyb3VwLmxlbmd0aCwgc3ViZ3JvdXAgPSBzdWJncm91cHNbal0gPSBuZXcgQXJyYXkobiksIG5vZGUsIHN1Ym5vZGUsIGkgPSAwOyBpIDwgbjsgKytpKSB7XG4gICAgICBpZiAoKG5vZGUgPSBncm91cFtpXSkgJiYgKHN1Ym5vZGUgPSBzZWxlY3QuY2FsbChub2RlLCBub2RlLl9fZGF0YV9fLCBpLCBncm91cCkpKSB7XG4gICAgICAgIGlmIChcIl9fZGF0YV9fXCIgaW4gbm9kZSkgc3Vibm9kZS5fX2RhdGFfXyA9IG5vZGUuX19kYXRhX187XG4gICAgICAgIHN1Ymdyb3VwW2ldID0gc3Vibm9kZTtcbiAgICAgICAgc2NoZWR1bGUoc3ViZ3JvdXBbaV0sIG5hbWUsIGlkLCBpLCBzdWJncm91cCwgZ2V0KG5vZGUsIGlkKSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG5ldyBUcmFuc2l0aW9uKHN1Ymdyb3VwcywgdGhpcy5fcGFyZW50cywgbmFtZSwgaWQpO1xufVxuIiwiaW1wb3J0IHtzZWxlY3RvckFsbH0gZnJvbSBcImQzLXNlbGVjdGlvblwiO1xuaW1wb3J0IHtUcmFuc2l0aW9ufSBmcm9tIFwiLi9pbmRleC5qc1wiO1xuaW1wb3J0IHNjaGVkdWxlLCB7Z2V0fSBmcm9tIFwiLi9zY2hlZHVsZS5qc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihzZWxlY3QpIHtcbiAgdmFyIG5hbWUgPSB0aGlzLl9uYW1lLFxuICAgICAgaWQgPSB0aGlzLl9pZDtcblxuICBpZiAodHlwZW9mIHNlbGVjdCAhPT0gXCJmdW5jdGlvblwiKSBzZWxlY3QgPSBzZWxlY3RvckFsbChzZWxlY3QpO1xuXG4gIGZvciAodmFyIGdyb3VwcyA9IHRoaXMuX2dyb3VwcywgbSA9IGdyb3Vwcy5sZW5ndGgsIHN1Ymdyb3VwcyA9IFtdLCBwYXJlbnRzID0gW10sIGogPSAwOyBqIDwgbTsgKytqKSB7XG4gICAgZm9yICh2YXIgZ3JvdXAgPSBncm91cHNbal0sIG4gPSBncm91cC5sZW5ndGgsIG5vZGUsIGkgPSAwOyBpIDwgbjsgKytpKSB7XG4gICAgICBpZiAobm9kZSA9IGdyb3VwW2ldKSB7XG4gICAgICAgIGZvciAodmFyIGNoaWxkcmVuID0gc2VsZWN0LmNhbGwobm9kZSwgbm9kZS5fX2RhdGFfXywgaSwgZ3JvdXApLCBjaGlsZCwgaW5oZXJpdCA9IGdldChub2RlLCBpZCksIGsgPSAwLCBsID0gY2hpbGRyZW4ubGVuZ3RoOyBrIDwgbDsgKytrKSB7XG4gICAgICAgICAgaWYgKGNoaWxkID0gY2hpbGRyZW5ba10pIHtcbiAgICAgICAgICAgIHNjaGVkdWxlKGNoaWxkLCBuYW1lLCBpZCwgaywgY2hpbGRyZW4sIGluaGVyaXQpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBzdWJncm91cHMucHVzaChjaGlsZHJlbik7XG4gICAgICAgIHBhcmVudHMucHVzaChub2RlKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gbmV3IFRyYW5zaXRpb24oc3ViZ3JvdXBzLCBwYXJlbnRzLCBuYW1lLCBpZCk7XG59XG4iLCJpbXBvcnQge3NlbGVjdGlvbn0gZnJvbSBcImQzLXNlbGVjdGlvblwiO1xuXG52YXIgU2VsZWN0aW9uID0gc2VsZWN0aW9uLnByb3RvdHlwZS5jb25zdHJ1Y3RvcjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKSB7XG4gIHJldHVybiBuZXcgU2VsZWN0aW9uKHRoaXMuX2dyb3VwcywgdGhpcy5fcGFyZW50cyk7XG59XG4iLCJpbXBvcnQge2ludGVycG9sYXRlVHJhbnNmb3JtQ3NzIGFzIGludGVycG9sYXRlVHJhbnNmb3JtfSBmcm9tIFwiZDMtaW50ZXJwb2xhdGVcIjtcbmltcG9ydCB7c3R5bGV9IGZyb20gXCJkMy1zZWxlY3Rpb25cIjtcbmltcG9ydCB7c2V0fSBmcm9tIFwiLi9zY2hlZHVsZS5qc1wiO1xuaW1wb3J0IHt0d2VlblZhbHVlfSBmcm9tIFwiLi90d2Vlbi5qc1wiO1xuaW1wb3J0IGludGVycG9sYXRlIGZyb20gXCIuL2ludGVycG9sYXRlLmpzXCI7XG5cbmZ1bmN0aW9uIHN0eWxlTnVsbChuYW1lLCBpbnRlcnBvbGF0ZSkge1xuICB2YXIgc3RyaW5nMDAsXG4gICAgICBzdHJpbmcxMCxcbiAgICAgIGludGVycG9sYXRlMDtcbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIHZhciBzdHJpbmcwID0gc3R5bGUodGhpcywgbmFtZSksXG4gICAgICAgIHN0cmluZzEgPSAodGhpcy5zdHlsZS5yZW1vdmVQcm9wZXJ0eShuYW1lKSwgc3R5bGUodGhpcywgbmFtZSkpO1xuICAgIHJldHVybiBzdHJpbmcwID09PSBzdHJpbmcxID8gbnVsbFxuICAgICAgICA6IHN0cmluZzAgPT09IHN0cmluZzAwICYmIHN0cmluZzEgPT09IHN0cmluZzEwID8gaW50ZXJwb2xhdGUwXG4gICAgICAgIDogaW50ZXJwb2xhdGUwID0gaW50ZXJwb2xhdGUoc3RyaW5nMDAgPSBzdHJpbmcwLCBzdHJpbmcxMCA9IHN0cmluZzEpO1xuICB9O1xufVxuXG5mdW5jdGlvbiBzdHlsZVJlbW92ZShuYW1lKSB7XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICB0aGlzLnN0eWxlLnJlbW92ZVByb3BlcnR5KG5hbWUpO1xuICB9O1xufVxuXG5mdW5jdGlvbiBzdHlsZUNvbnN0YW50KG5hbWUsIGludGVycG9sYXRlLCB2YWx1ZTEpIHtcbiAgdmFyIHN0cmluZzAwLFxuICAgICAgc3RyaW5nMSA9IHZhbHVlMSArIFwiXCIsXG4gICAgICBpbnRlcnBvbGF0ZTA7XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICB2YXIgc3RyaW5nMCA9IHN0eWxlKHRoaXMsIG5hbWUpO1xuICAgIHJldHVybiBzdHJpbmcwID09PSBzdHJpbmcxID8gbnVsbFxuICAgICAgICA6IHN0cmluZzAgPT09IHN0cmluZzAwID8gaW50ZXJwb2xhdGUwXG4gICAgICAgIDogaW50ZXJwb2xhdGUwID0gaW50ZXJwb2xhdGUoc3RyaW5nMDAgPSBzdHJpbmcwLCB2YWx1ZTEpO1xuICB9O1xufVxuXG5mdW5jdGlvbiBzdHlsZUZ1bmN0aW9uKG5hbWUsIGludGVycG9sYXRlLCB2YWx1ZSkge1xuICB2YXIgc3RyaW5nMDAsXG4gICAgICBzdHJpbmcxMCxcbiAgICAgIGludGVycG9sYXRlMDtcbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIHZhciBzdHJpbmcwID0gc3R5bGUodGhpcywgbmFtZSksXG4gICAgICAgIHZhbHVlMSA9IHZhbHVlKHRoaXMpLFxuICAgICAgICBzdHJpbmcxID0gdmFsdWUxICsgXCJcIjtcbiAgICBpZiAodmFsdWUxID09IG51bGwpIHN0cmluZzEgPSB2YWx1ZTEgPSAodGhpcy5zdHlsZS5yZW1vdmVQcm9wZXJ0eShuYW1lKSwgc3R5bGUodGhpcywgbmFtZSkpO1xuICAgIHJldHVybiBzdHJpbmcwID09PSBzdHJpbmcxID8gbnVsbFxuICAgICAgICA6IHN0cmluZzAgPT09IHN0cmluZzAwICYmIHN0cmluZzEgPT09IHN0cmluZzEwID8gaW50ZXJwb2xhdGUwXG4gICAgICAgIDogKHN0cmluZzEwID0gc3RyaW5nMSwgaW50ZXJwb2xhdGUwID0gaW50ZXJwb2xhdGUoc3RyaW5nMDAgPSBzdHJpbmcwLCB2YWx1ZTEpKTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gc3R5bGVNYXliZVJlbW92ZShpZCwgbmFtZSkge1xuICB2YXIgb24wLCBvbjEsIGxpc3RlbmVyMCwga2V5ID0gXCJzdHlsZS5cIiArIG5hbWUsIGV2ZW50ID0gXCJlbmQuXCIgKyBrZXksIHJlbW92ZTtcbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIHZhciBzY2hlZHVsZSA9IHNldCh0aGlzLCBpZCksXG4gICAgICAgIG9uID0gc2NoZWR1bGUub24sXG4gICAgICAgIGxpc3RlbmVyID0gc2NoZWR1bGUudmFsdWVba2V5XSA9PSBudWxsID8gcmVtb3ZlIHx8IChyZW1vdmUgPSBzdHlsZVJlbW92ZShuYW1lKSkgOiB1bmRlZmluZWQ7XG5cbiAgICAvLyBJZiB0aGlzIG5vZGUgc2hhcmVkIGEgZGlzcGF0Y2ggd2l0aCB0aGUgcHJldmlvdXMgbm9kZSxcbiAgICAvLyBqdXN0IGFzc2lnbiB0aGUgdXBkYXRlZCBzaGFyZWQgZGlzcGF0Y2ggYW5kIHdl4oCZcmUgZG9uZSFcbiAgICAvLyBPdGhlcndpc2UsIGNvcHktb24td3JpdGUuXG4gICAgaWYgKG9uICE9PSBvbjAgfHwgbGlzdGVuZXIwICE9PSBsaXN0ZW5lcikgKG9uMSA9IChvbjAgPSBvbikuY29weSgpKS5vbihldmVudCwgbGlzdGVuZXIwID0gbGlzdGVuZXIpO1xuXG4gICAgc2NoZWR1bGUub24gPSBvbjE7XG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKG5hbWUsIHZhbHVlLCBwcmlvcml0eSkge1xuICB2YXIgaSA9IChuYW1lICs9IFwiXCIpID09PSBcInRyYW5zZm9ybVwiID8gaW50ZXJwb2xhdGVUcmFuc2Zvcm0gOiBpbnRlcnBvbGF0ZTtcbiAgcmV0dXJuIHZhbHVlID09IG51bGwgPyB0aGlzXG4gICAgICAuc3R5bGVUd2VlbihuYW1lLCBzdHlsZU51bGwobmFtZSwgaSkpXG4gICAgICAub24oXCJlbmQuc3R5bGUuXCIgKyBuYW1lLCBzdHlsZVJlbW92ZShuYW1lKSlcbiAgICA6IHR5cGVvZiB2YWx1ZSA9PT0gXCJmdW5jdGlvblwiID8gdGhpc1xuICAgICAgLnN0eWxlVHdlZW4obmFtZSwgc3R5bGVGdW5jdGlvbihuYW1lLCBpLCB0d2VlblZhbHVlKHRoaXMsIFwic3R5bGUuXCIgKyBuYW1lLCB2YWx1ZSkpKVxuICAgICAgLmVhY2goc3R5bGVNYXliZVJlbW92ZSh0aGlzLl9pZCwgbmFtZSkpXG4gICAgOiB0aGlzXG4gICAgICAuc3R5bGVUd2VlbihuYW1lLCBzdHlsZUNvbnN0YW50KG5hbWUsIGksIHZhbHVlKSwgcHJpb3JpdHkpXG4gICAgICAub24oXCJlbmQuc3R5bGUuXCIgKyBuYW1lLCBudWxsKTtcbn1cbiIsImZ1bmN0aW9uIHN0eWxlSW50ZXJwb2xhdGUobmFtZSwgaSwgcHJpb3JpdHkpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKHQpIHtcbiAgICB0aGlzLnN0eWxlLnNldFByb3BlcnR5KG5hbWUsIGkuY2FsbCh0aGlzLCB0KSwgcHJpb3JpdHkpO1xuICB9O1xufVxuXG5mdW5jdGlvbiBzdHlsZVR3ZWVuKG5hbWUsIHZhbHVlLCBwcmlvcml0eSkge1xuICB2YXIgdCwgaTA7XG4gIGZ1bmN0aW9uIHR3ZWVuKCkge1xuICAgIHZhciBpID0gdmFsdWUuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICBpZiAoaSAhPT0gaTApIHQgPSAoaTAgPSBpKSAmJiBzdHlsZUludGVycG9sYXRlKG5hbWUsIGksIHByaW9yaXR5KTtcbiAgICByZXR1cm4gdDtcbiAgfVxuICB0d2Vlbi5fdmFsdWUgPSB2YWx1ZTtcbiAgcmV0dXJuIHR3ZWVuO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihuYW1lLCB2YWx1ZSwgcHJpb3JpdHkpIHtcbiAgdmFyIGtleSA9IFwic3R5bGUuXCIgKyAobmFtZSArPSBcIlwiKTtcbiAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPCAyKSByZXR1cm4gKGtleSA9IHRoaXMudHdlZW4oa2V5KSkgJiYga2V5Ll92YWx1ZTtcbiAgaWYgKHZhbHVlID09IG51bGwpIHJldHVybiB0aGlzLnR3ZWVuKGtleSwgbnVsbCk7XG4gIGlmICh0eXBlb2YgdmFsdWUgIT09IFwiZnVuY3Rpb25cIikgdGhyb3cgbmV3IEVycm9yO1xuICByZXR1cm4gdGhpcy50d2VlbihrZXksIHN0eWxlVHdlZW4obmFtZSwgdmFsdWUsIHByaW9yaXR5ID09IG51bGwgPyBcIlwiIDogcHJpb3JpdHkpKTtcbn1cbiIsImltcG9ydCB7dHdlZW5WYWx1ZX0gZnJvbSBcIi4vdHdlZW4uanNcIjtcblxuZnVuY3Rpb24gdGV4dENvbnN0YW50KHZhbHVlKSB7XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICB0aGlzLnRleHRDb250ZW50ID0gdmFsdWU7XG4gIH07XG59XG5cbmZ1bmN0aW9uIHRleHRGdW5jdGlvbih2YWx1ZSkge1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgdmFyIHZhbHVlMSA9IHZhbHVlKHRoaXMpO1xuICAgIHRoaXMudGV4dENvbnRlbnQgPSB2YWx1ZTEgPT0gbnVsbCA/IFwiXCIgOiB2YWx1ZTE7XG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKHZhbHVlKSB7XG4gIHJldHVybiB0aGlzLnR3ZWVuKFwidGV4dFwiLCB0eXBlb2YgdmFsdWUgPT09IFwiZnVuY3Rpb25cIlxuICAgICAgPyB0ZXh0RnVuY3Rpb24odHdlZW5WYWx1ZSh0aGlzLCBcInRleHRcIiwgdmFsdWUpKVxuICAgICAgOiB0ZXh0Q29uc3RhbnQodmFsdWUgPT0gbnVsbCA/IFwiXCIgOiB2YWx1ZSArIFwiXCIpKTtcbn1cbiIsImZ1bmN0aW9uIHRleHRJbnRlcnBvbGF0ZShpKSB7XG4gIHJldHVybiBmdW5jdGlvbih0KSB7XG4gICAgdGhpcy50ZXh0Q29udGVudCA9IGkuY2FsbCh0aGlzLCB0KTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gdGV4dFR3ZWVuKHZhbHVlKSB7XG4gIHZhciB0MCwgaTA7XG4gIGZ1bmN0aW9uIHR3ZWVuKCkge1xuICAgIHZhciBpID0gdmFsdWUuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICBpZiAoaSAhPT0gaTApIHQwID0gKGkwID0gaSkgJiYgdGV4dEludGVycG9sYXRlKGkpO1xuICAgIHJldHVybiB0MDtcbiAgfVxuICB0d2Vlbi5fdmFsdWUgPSB2YWx1ZTtcbiAgcmV0dXJuIHR3ZWVuO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbih2YWx1ZSkge1xuICB2YXIga2V5ID0gXCJ0ZXh0XCI7XG4gIGlmIChhcmd1bWVudHMubGVuZ3RoIDwgMSkgcmV0dXJuIChrZXkgPSB0aGlzLnR3ZWVuKGtleSkpICYmIGtleS5fdmFsdWU7XG4gIGlmICh2YWx1ZSA9PSBudWxsKSByZXR1cm4gdGhpcy50d2VlbihrZXksIG51bGwpO1xuICBpZiAodHlwZW9mIHZhbHVlICE9PSBcImZ1bmN0aW9uXCIpIHRocm93IG5ldyBFcnJvcjtcbiAgcmV0dXJuIHRoaXMudHdlZW4oa2V5LCB0ZXh0VHdlZW4odmFsdWUpKTtcbn1cbiIsImltcG9ydCB7VHJhbnNpdGlvbiwgbmV3SWR9IGZyb20gXCIuL2luZGV4LmpzXCI7XG5pbXBvcnQgc2NoZWR1bGUsIHtnZXR9IGZyb20gXCIuL3NjaGVkdWxlLmpzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCkge1xuICB2YXIgbmFtZSA9IHRoaXMuX25hbWUsXG4gICAgICBpZDAgPSB0aGlzLl9pZCxcbiAgICAgIGlkMSA9IG5ld0lkKCk7XG5cbiAgZm9yICh2YXIgZ3JvdXBzID0gdGhpcy5fZ3JvdXBzLCBtID0gZ3JvdXBzLmxlbmd0aCwgaiA9IDA7IGogPCBtOyArK2opIHtcbiAgICBmb3IgKHZhciBncm91cCA9IGdyb3Vwc1tqXSwgbiA9IGdyb3VwLmxlbmd0aCwgbm9kZSwgaSA9IDA7IGkgPCBuOyArK2kpIHtcbiAgICAgIGlmIChub2RlID0gZ3JvdXBbaV0pIHtcbiAgICAgICAgdmFyIGluaGVyaXQgPSBnZXQobm9kZSwgaWQwKTtcbiAgICAgICAgc2NoZWR1bGUobm9kZSwgbmFtZSwgaWQxLCBpLCBncm91cCwge1xuICAgICAgICAgIHRpbWU6IGluaGVyaXQudGltZSArIGluaGVyaXQuZGVsYXkgKyBpbmhlcml0LmR1cmF0aW9uLFxuICAgICAgICAgIGRlbGF5OiAwLFxuICAgICAgICAgIGR1cmF0aW9uOiBpbmhlcml0LmR1cmF0aW9uLFxuICAgICAgICAgIGVhc2U6IGluaGVyaXQuZWFzZVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gbmV3IFRyYW5zaXRpb24oZ3JvdXBzLCB0aGlzLl9wYXJlbnRzLCBuYW1lLCBpZDEpO1xufVxuIiwiaW1wb3J0IHtzZXR9IGZyb20gXCIuL3NjaGVkdWxlLmpzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCkge1xuICB2YXIgb24wLCBvbjEsIHRoYXQgPSB0aGlzLCBpZCA9IHRoYXQuX2lkLCBzaXplID0gdGhhdC5zaXplKCk7XG4gIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiAgICB2YXIgY2FuY2VsID0ge3ZhbHVlOiByZWplY3R9LFxuICAgICAgICBlbmQgPSB7dmFsdWU6IGZ1bmN0aW9uKCkgeyBpZiAoLS1zaXplID09PSAwKSByZXNvbHZlKCk7IH19O1xuXG4gICAgdGhhdC5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIHNjaGVkdWxlID0gc2V0KHRoaXMsIGlkKSxcbiAgICAgICAgICBvbiA9IHNjaGVkdWxlLm9uO1xuXG4gICAgICAvLyBJZiB0aGlzIG5vZGUgc2hhcmVkIGEgZGlzcGF0Y2ggd2l0aCB0aGUgcHJldmlvdXMgbm9kZSxcbiAgICAgIC8vIGp1c3QgYXNzaWduIHRoZSB1cGRhdGVkIHNoYXJlZCBkaXNwYXRjaCBhbmQgd2XigJlyZSBkb25lIVxuICAgICAgLy8gT3RoZXJ3aXNlLCBjb3B5LW9uLXdyaXRlLlxuICAgICAgaWYgKG9uICE9PSBvbjApIHtcbiAgICAgICAgb24xID0gKG9uMCA9IG9uKS5jb3B5KCk7XG4gICAgICAgIG9uMS5fLmNhbmNlbC5wdXNoKGNhbmNlbCk7XG4gICAgICAgIG9uMS5fLmludGVycnVwdC5wdXNoKGNhbmNlbCk7XG4gICAgICAgIG9uMS5fLmVuZC5wdXNoKGVuZCk7XG4gICAgICB9XG5cbiAgICAgIHNjaGVkdWxlLm9uID0gb24xO1xuICAgIH0pO1xuXG4gICAgLy8gVGhlIHNlbGVjdGlvbiB3YXMgZW1wdHksIHJlc29sdmUgZW5kIGltbWVkaWF0ZWx5XG4gICAgaWYgKHNpemUgPT09IDApIHJlc29sdmUoKTtcbiAgfSk7XG59XG4iLCJpbXBvcnQge3NlbGVjdGlvbn0gZnJvbSBcImQzLXNlbGVjdGlvblwiO1xuaW1wb3J0IHRyYW5zaXRpb25fYXR0ciBmcm9tIFwiLi9hdHRyLmpzXCI7XG5pbXBvcnQgdHJhbnNpdGlvbl9hdHRyVHdlZW4gZnJvbSBcIi4vYXR0clR3ZWVuLmpzXCI7XG5pbXBvcnQgdHJhbnNpdGlvbl9kZWxheSBmcm9tIFwiLi9kZWxheS5qc1wiO1xuaW1wb3J0IHRyYW5zaXRpb25fZHVyYXRpb24gZnJvbSBcIi4vZHVyYXRpb24uanNcIjtcbmltcG9ydCB0cmFuc2l0aW9uX2Vhc2UgZnJvbSBcIi4vZWFzZS5qc1wiO1xuaW1wb3J0IHRyYW5zaXRpb25fZWFzZVZhcnlpbmcgZnJvbSBcIi4vZWFzZVZhcnlpbmcuanNcIjtcbmltcG9ydCB0cmFuc2l0aW9uX2ZpbHRlciBmcm9tIFwiLi9maWx0ZXIuanNcIjtcbmltcG9ydCB0cmFuc2l0aW9uX21lcmdlIGZyb20gXCIuL21lcmdlLmpzXCI7XG5pbXBvcnQgdHJhbnNpdGlvbl9vbiBmcm9tIFwiLi9vbi5qc1wiO1xuaW1wb3J0IHRyYW5zaXRpb25fcmVtb3ZlIGZyb20gXCIuL3JlbW92ZS5qc1wiO1xuaW1wb3J0IHRyYW5zaXRpb25fc2VsZWN0IGZyb20gXCIuL3NlbGVjdC5qc1wiO1xuaW1wb3J0IHRyYW5zaXRpb25fc2VsZWN0QWxsIGZyb20gXCIuL3NlbGVjdEFsbC5qc1wiO1xuaW1wb3J0IHRyYW5zaXRpb25fc2VsZWN0aW9uIGZyb20gXCIuL3NlbGVjdGlvbi5qc1wiO1xuaW1wb3J0IHRyYW5zaXRpb25fc3R5bGUgZnJvbSBcIi4vc3R5bGUuanNcIjtcbmltcG9ydCB0cmFuc2l0aW9uX3N0eWxlVHdlZW4gZnJvbSBcIi4vc3R5bGVUd2Vlbi5qc1wiO1xuaW1wb3J0IHRyYW5zaXRpb25fdGV4dCBmcm9tIFwiLi90ZXh0LmpzXCI7XG5pbXBvcnQgdHJhbnNpdGlvbl90ZXh0VHdlZW4gZnJvbSBcIi4vdGV4dFR3ZWVuLmpzXCI7XG5pbXBvcnQgdHJhbnNpdGlvbl90cmFuc2l0aW9uIGZyb20gXCIuL3RyYW5zaXRpb24uanNcIjtcbmltcG9ydCB0cmFuc2l0aW9uX3R3ZWVuIGZyb20gXCIuL3R3ZWVuLmpzXCI7XG5pbXBvcnQgdHJhbnNpdGlvbl9lbmQgZnJvbSBcIi4vZW5kLmpzXCI7XG5cbnZhciBpZCA9IDA7XG5cbmV4cG9ydCBmdW5jdGlvbiBUcmFuc2l0aW9uKGdyb3VwcywgcGFyZW50cywgbmFtZSwgaWQpIHtcbiAgdGhpcy5fZ3JvdXBzID0gZ3JvdXBzO1xuICB0aGlzLl9wYXJlbnRzID0gcGFyZW50cztcbiAgdGhpcy5fbmFtZSA9IG5hbWU7XG4gIHRoaXMuX2lkID0gaWQ7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRyYW5zaXRpb24obmFtZSkge1xuICByZXR1cm4gc2VsZWN0aW9uKCkudHJhbnNpdGlvbihuYW1lKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG5ld0lkKCkge1xuICByZXR1cm4gKytpZDtcbn1cblxudmFyIHNlbGVjdGlvbl9wcm90b3R5cGUgPSBzZWxlY3Rpb24ucHJvdG90eXBlO1xuXG5UcmFuc2l0aW9uLnByb3RvdHlwZSA9IHRyYW5zaXRpb24ucHJvdG90eXBlID0ge1xuICBjb25zdHJ1Y3RvcjogVHJhbnNpdGlvbixcbiAgc2VsZWN0OiB0cmFuc2l0aW9uX3NlbGVjdCxcbiAgc2VsZWN0QWxsOiB0cmFuc2l0aW9uX3NlbGVjdEFsbCxcbiAgc2VsZWN0Q2hpbGQ6IHNlbGVjdGlvbl9wcm90b3R5cGUuc2VsZWN0Q2hpbGQsXG4gIHNlbGVjdENoaWxkcmVuOiBzZWxlY3Rpb25fcHJvdG90eXBlLnNlbGVjdENoaWxkcmVuLFxuICBmaWx0ZXI6IHRyYW5zaXRpb25fZmlsdGVyLFxuICBtZXJnZTogdHJhbnNpdGlvbl9tZXJnZSxcbiAgc2VsZWN0aW9uOiB0cmFuc2l0aW9uX3NlbGVjdGlvbixcbiAgdHJhbnNpdGlvbjogdHJhbnNpdGlvbl90cmFuc2l0aW9uLFxuICBjYWxsOiBzZWxlY3Rpb25fcHJvdG90eXBlLmNhbGwsXG4gIG5vZGVzOiBzZWxlY3Rpb25fcHJvdG90eXBlLm5vZGVzLFxuICBub2RlOiBzZWxlY3Rpb25fcHJvdG90eXBlLm5vZGUsXG4gIHNpemU6IHNlbGVjdGlvbl9wcm90b3R5cGUuc2l6ZSxcbiAgZW1wdHk6IHNlbGVjdGlvbl9wcm90b3R5cGUuZW1wdHksXG4gIGVhY2g6IHNlbGVjdGlvbl9wcm90b3R5cGUuZWFjaCxcbiAgb246IHRyYW5zaXRpb25fb24sXG4gIGF0dHI6IHRyYW5zaXRpb25fYXR0cixcbiAgYXR0clR3ZWVuOiB0cmFuc2l0aW9uX2F0dHJUd2VlbixcbiAgc3R5bGU6IHRyYW5zaXRpb25fc3R5bGUsXG4gIHN0eWxlVHdlZW46IHRyYW5zaXRpb25fc3R5bGVUd2VlbixcbiAgdGV4dDogdHJhbnNpdGlvbl90ZXh0LFxuICB0ZXh0VHdlZW46IHRyYW5zaXRpb25fdGV4dFR3ZWVuLFxuICByZW1vdmU6IHRyYW5zaXRpb25fcmVtb3ZlLFxuICB0d2VlbjogdHJhbnNpdGlvbl90d2VlbixcbiAgZGVsYXk6IHRyYW5zaXRpb25fZGVsYXksXG4gIGR1cmF0aW9uOiB0cmFuc2l0aW9uX2R1cmF0aW9uLFxuICBlYXNlOiB0cmFuc2l0aW9uX2Vhc2UsXG4gIGVhc2VWYXJ5aW5nOiB0cmFuc2l0aW9uX2Vhc2VWYXJ5aW5nLFxuICBlbmQ6IHRyYW5zaXRpb25fZW5kLFxuICBbU3ltYm9sLml0ZXJhdG9yXTogc2VsZWN0aW9uX3Byb3RvdHlwZVtTeW1ib2wuaXRlcmF0b3JdXG59O1xuIiwiZXhwb3J0IGZ1bmN0aW9uIGN1YmljSW4odCkge1xuICByZXR1cm4gdCAqIHQgKiB0O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY3ViaWNPdXQodCkge1xuICByZXR1cm4gLS10ICogdCAqIHQgKyAxO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY3ViaWNJbk91dCh0KSB7XG4gIHJldHVybiAoKHQgKj0gMikgPD0gMSA/IHQgKiB0ICogdCA6ICh0IC09IDIpICogdCAqIHQgKyAyKSAvIDI7XG59XG4iLCJpbXBvcnQge1RyYW5zaXRpb24sIG5ld0lkfSBmcm9tIFwiLi4vdHJhbnNpdGlvbi9pbmRleC5qc1wiO1xuaW1wb3J0IHNjaGVkdWxlIGZyb20gXCIuLi90cmFuc2l0aW9uL3NjaGVkdWxlLmpzXCI7XG5pbXBvcnQge2Vhc2VDdWJpY0luT3V0fSBmcm9tIFwiZDMtZWFzZVwiO1xuaW1wb3J0IHtub3d9IGZyb20gXCJkMy10aW1lclwiO1xuXG52YXIgZGVmYXVsdFRpbWluZyA9IHtcbiAgdGltZTogbnVsbCwgLy8gU2V0IG9uIHVzZS5cbiAgZGVsYXk6IDAsXG4gIGR1cmF0aW9uOiAyNTAsXG4gIGVhc2U6IGVhc2VDdWJpY0luT3V0XG59O1xuXG5mdW5jdGlvbiBpbmhlcml0KG5vZGUsIGlkKSB7XG4gIHZhciB0aW1pbmc7XG4gIHdoaWxlICghKHRpbWluZyA9IG5vZGUuX190cmFuc2l0aW9uKSB8fCAhKHRpbWluZyA9IHRpbWluZ1tpZF0pKSB7XG4gICAgaWYgKCEobm9kZSA9IG5vZGUucGFyZW50Tm9kZSkpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgdHJhbnNpdGlvbiAke2lkfSBub3QgZm91bmRgKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHRpbWluZztcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24obmFtZSkge1xuICB2YXIgaWQsXG4gICAgICB0aW1pbmc7XG5cbiAgaWYgKG5hbWUgaW5zdGFuY2VvZiBUcmFuc2l0aW9uKSB7XG4gICAgaWQgPSBuYW1lLl9pZCwgbmFtZSA9IG5hbWUuX25hbWU7XG4gIH0gZWxzZSB7XG4gICAgaWQgPSBuZXdJZCgpLCAodGltaW5nID0gZGVmYXVsdFRpbWluZykudGltZSA9IG5vdygpLCBuYW1lID0gbmFtZSA9PSBudWxsID8gbnVsbCA6IG5hbWUgKyBcIlwiO1xuICB9XG5cbiAgZm9yICh2YXIgZ3JvdXBzID0gdGhpcy5fZ3JvdXBzLCBtID0gZ3JvdXBzLmxlbmd0aCwgaiA9IDA7IGogPCBtOyArK2opIHtcbiAgICBmb3IgKHZhciBncm91cCA9IGdyb3Vwc1tqXSwgbiA9IGdyb3VwLmxlbmd0aCwgbm9kZSwgaSA9IDA7IGkgPCBuOyArK2kpIHtcbiAgICAgIGlmIChub2RlID0gZ3JvdXBbaV0pIHtcbiAgICAgICAgc2NoZWR1bGUobm9kZSwgbmFtZSwgaWQsIGksIGdyb3VwLCB0aW1pbmcgfHwgaW5oZXJpdChub2RlLCBpZCkpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBuZXcgVHJhbnNpdGlvbihncm91cHMsIHRoaXMuX3BhcmVudHMsIG5hbWUsIGlkKTtcbn1cbiIsImltcG9ydCB7c2VsZWN0aW9ufSBmcm9tIFwiZDMtc2VsZWN0aW9uXCI7XG5pbXBvcnQgc2VsZWN0aW9uX2ludGVycnVwdCBmcm9tIFwiLi9pbnRlcnJ1cHQuanNcIjtcbmltcG9ydCBzZWxlY3Rpb25fdHJhbnNpdGlvbiBmcm9tIFwiLi90cmFuc2l0aW9uLmpzXCI7XG5cbnNlbGVjdGlvbi5wcm90b3R5cGUuaW50ZXJydXB0ID0gc2VsZWN0aW9uX2ludGVycnVwdDtcbnNlbGVjdGlvbi5wcm90b3R5cGUudHJhbnNpdGlvbiA9IHNlbGVjdGlvbl90cmFuc2l0aW9uO1xuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oeCkge1xuICByZXR1cm4gTWF0aC5hYnMoeCA9IE1hdGgucm91bmQoeCkpID49IDFlMjFcbiAgICAgID8geC50b0xvY2FsZVN0cmluZyhcImVuXCIpLnJlcGxhY2UoLywvZywgXCJcIilcbiAgICAgIDogeC50b1N0cmluZygxMCk7XG59XG5cbi8vIENvbXB1dGVzIHRoZSBkZWNpbWFsIGNvZWZmaWNpZW50IGFuZCBleHBvbmVudCBvZiB0aGUgc3BlY2lmaWVkIG51bWJlciB4IHdpdGhcbi8vIHNpZ25pZmljYW50IGRpZ2l0cyBwLCB3aGVyZSB4IGlzIHBvc2l0aXZlIGFuZCBwIGlzIGluIFsxLCAyMV0gb3IgdW5kZWZpbmVkLlxuLy8gRm9yIGV4YW1wbGUsIGZvcm1hdERlY2ltYWxQYXJ0cygxLjIzKSByZXR1cm5zIFtcIjEyM1wiLCAwXS5cbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXREZWNpbWFsUGFydHMoeCwgcCkge1xuICBpZiAoIWlzRmluaXRlKHgpIHx8IHggPT09IDApIHJldHVybiBudWxsOyAvLyBOYU4sIMKxSW5maW5pdHksIMKxMFxuICB2YXIgaSA9ICh4ID0gcCA/IHgudG9FeHBvbmVudGlhbChwIC0gMSkgOiB4LnRvRXhwb25lbnRpYWwoKSkuaW5kZXhPZihcImVcIiksIGNvZWZmaWNpZW50ID0geC5zbGljZSgwLCBpKTtcblxuICAvLyBUaGUgc3RyaW5nIHJldHVybmVkIGJ5IHRvRXhwb25lbnRpYWwgZWl0aGVyIGhhcyB0aGUgZm9ybSBcXGRcXC5cXGQrZVstK11cXGQrXG4gIC8vIChlLmcuLCAxLjJlKzMpIG9yIHRoZSBmb3JtIFxcZGVbLStdXFxkKyAoZS5nLiwgMWUrMykuXG4gIHJldHVybiBbXG4gICAgY29lZmZpY2llbnQubGVuZ3RoID4gMSA/IGNvZWZmaWNpZW50WzBdICsgY29lZmZpY2llbnQuc2xpY2UoMikgOiBjb2VmZmljaWVudCxcbiAgICAreC5zbGljZShpICsgMSlcbiAgXTtcbn1cbiIsImltcG9ydCB7Zm9ybWF0RGVjaW1hbFBhcnRzfSBmcm9tIFwiLi9mb3JtYXREZWNpbWFsLmpzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKHgpIHtcbiAgcmV0dXJuIHggPSBmb3JtYXREZWNpbWFsUGFydHMoTWF0aC5hYnMoeCkpLCB4ID8geFsxXSA6IE5hTjtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKGdyb3VwaW5nLCB0aG91c2FuZHMpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKHZhbHVlLCB3aWR0aCkge1xuICAgIHZhciBpID0gdmFsdWUubGVuZ3RoLFxuICAgICAgICB0ID0gW10sXG4gICAgICAgIGogPSAwLFxuICAgICAgICBnID0gZ3JvdXBpbmdbMF0sXG4gICAgICAgIGxlbmd0aCA9IDA7XG5cbiAgICB3aGlsZSAoaSA+IDAgJiYgZyA+IDApIHtcbiAgICAgIGlmIChsZW5ndGggKyBnICsgMSA+IHdpZHRoKSBnID0gTWF0aC5tYXgoMSwgd2lkdGggLSBsZW5ndGgpO1xuICAgICAgdC5wdXNoKHZhbHVlLnN1YnN0cmluZyhpIC09IGcsIGkgKyBnKSk7XG4gICAgICBpZiAoKGxlbmd0aCArPSBnICsgMSkgPiB3aWR0aCkgYnJlYWs7XG4gICAgICBnID0gZ3JvdXBpbmdbaiA9IChqICsgMSkgJSBncm91cGluZy5sZW5ndGhdO1xuICAgIH1cblxuICAgIHJldHVybiB0LnJldmVyc2UoKS5qb2luKHRob3VzYW5kcyk7XG4gIH07XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbihudW1lcmFscykge1xuICByZXR1cm4gZnVuY3Rpb24odmFsdWUpIHtcbiAgICByZXR1cm4gdmFsdWUucmVwbGFjZSgvWzAtOV0vZywgZnVuY3Rpb24oaSkge1xuICAgICAgcmV0dXJuIG51bWVyYWxzWytpXTtcbiAgICB9KTtcbiAgfTtcbn1cbiIsIi8vIFtbZmlsbF1hbGlnbl1bc2lnbl1bc3ltYm9sXVswXVt3aWR0aF1bLF1bLnByZWNpc2lvbl1bfl1bdHlwZV1cbnZhciByZSA9IC9eKD86KC4pPyhbPD49Xl0pKT8oWytcXC0oIF0pPyhbJCNdKT8oMCk/KFxcZCspPygsKT8oXFwuXFxkKyk/KH4pPyhbYS16JV0pPyQvaTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZm9ybWF0U3BlY2lmaWVyKHNwZWNpZmllcikge1xuICBpZiAoIShtYXRjaCA9IHJlLmV4ZWMoc3BlY2lmaWVyKSkpIHRocm93IG5ldyBFcnJvcihcImludmFsaWQgZm9ybWF0OiBcIiArIHNwZWNpZmllcik7XG4gIHZhciBtYXRjaDtcbiAgcmV0dXJuIG5ldyBGb3JtYXRTcGVjaWZpZXIoe1xuICAgIGZpbGw6IG1hdGNoWzFdLFxuICAgIGFsaWduOiBtYXRjaFsyXSxcbiAgICBzaWduOiBtYXRjaFszXSxcbiAgICBzeW1ib2w6IG1hdGNoWzRdLFxuICAgIHplcm86IG1hdGNoWzVdLFxuICAgIHdpZHRoOiBtYXRjaFs2XSxcbiAgICBjb21tYTogbWF0Y2hbN10sXG4gICAgcHJlY2lzaW9uOiBtYXRjaFs4XSAmJiBtYXRjaFs4XS5zbGljZSgxKSxcbiAgICB0cmltOiBtYXRjaFs5XSxcbiAgICB0eXBlOiBtYXRjaFsxMF1cbiAgfSk7XG59XG5cbmZvcm1hdFNwZWNpZmllci5wcm90b3R5cGUgPSBGb3JtYXRTcGVjaWZpZXIucHJvdG90eXBlOyAvLyBpbnN0YW5jZW9mXG5cbmV4cG9ydCBmdW5jdGlvbiBGb3JtYXRTcGVjaWZpZXIoc3BlY2lmaWVyKSB7XG4gIHRoaXMuZmlsbCA9IHNwZWNpZmllci5maWxsID09PSB1bmRlZmluZWQgPyBcIiBcIiA6IHNwZWNpZmllci5maWxsICsgXCJcIjtcbiAgdGhpcy5hbGlnbiA9IHNwZWNpZmllci5hbGlnbiA9PT0gdW5kZWZpbmVkID8gXCI+XCIgOiBzcGVjaWZpZXIuYWxpZ24gKyBcIlwiO1xuICB0aGlzLnNpZ24gPSBzcGVjaWZpZXIuc2lnbiA9PT0gdW5kZWZpbmVkID8gXCItXCIgOiBzcGVjaWZpZXIuc2lnbiArIFwiXCI7XG4gIHRoaXMuc3ltYm9sID0gc3BlY2lmaWVyLnN5bWJvbCA9PT0gdW5kZWZpbmVkID8gXCJcIiA6IHNwZWNpZmllci5zeW1ib2wgKyBcIlwiO1xuICB0aGlzLnplcm8gPSAhIXNwZWNpZmllci56ZXJvO1xuICB0aGlzLndpZHRoID0gc3BlY2lmaWVyLndpZHRoID09PSB1bmRlZmluZWQgPyB1bmRlZmluZWQgOiArc3BlY2lmaWVyLndpZHRoO1xuICB0aGlzLmNvbW1hID0gISFzcGVjaWZpZXIuY29tbWE7XG4gIHRoaXMucHJlY2lzaW9uID0gc3BlY2lmaWVyLnByZWNpc2lvbiA9PT0gdW5kZWZpbmVkID8gdW5kZWZpbmVkIDogK3NwZWNpZmllci5wcmVjaXNpb247XG4gIHRoaXMudHJpbSA9ICEhc3BlY2lmaWVyLnRyaW07XG4gIHRoaXMudHlwZSA9IHNwZWNpZmllci50eXBlID09PSB1bmRlZmluZWQgPyBcIlwiIDogc3BlY2lmaWVyLnR5cGUgKyBcIlwiO1xufVxuXG5Gb3JtYXRTcGVjaWZpZXIucHJvdG90eXBlLnRvU3RyaW5nID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiB0aGlzLmZpbGxcbiAgICAgICsgdGhpcy5hbGlnblxuICAgICAgKyB0aGlzLnNpZ25cbiAgICAgICsgdGhpcy5zeW1ib2xcbiAgICAgICsgKHRoaXMuemVybyA/IFwiMFwiIDogXCJcIilcbiAgICAgICsgKHRoaXMud2lkdGggPT09IHVuZGVmaW5lZCA/IFwiXCIgOiBNYXRoLm1heCgxLCB0aGlzLndpZHRoIHwgMCkpXG4gICAgICArICh0aGlzLmNvbW1hID8gXCIsXCIgOiBcIlwiKVxuICAgICAgKyAodGhpcy5wcmVjaXNpb24gPT09IHVuZGVmaW5lZCA/IFwiXCIgOiBcIi5cIiArIE1hdGgubWF4KDAsIHRoaXMucHJlY2lzaW9uIHwgMCkpXG4gICAgICArICh0aGlzLnRyaW0gPyBcIn5cIiA6IFwiXCIpXG4gICAgICArIHRoaXMudHlwZTtcbn07XG4iLCIvLyBUcmltcyBpbnNpZ25pZmljYW50IHplcm9zLCBlLmcuLCByZXBsYWNlcyAxLjIwMDBrIHdpdGggMS4yay5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKHMpIHtcbiAgb3V0OiBmb3IgKHZhciBuID0gcy5sZW5ndGgsIGkgPSAxLCBpMCA9IC0xLCBpMTsgaSA8IG47ICsraSkge1xuICAgIHN3aXRjaCAoc1tpXSkge1xuICAgICAgY2FzZSBcIi5cIjogaTAgPSBpMSA9IGk7IGJyZWFrO1xuICAgICAgY2FzZSBcIjBcIjogaWYgKGkwID09PSAwKSBpMCA9IGk7IGkxID0gaTsgYnJlYWs7XG4gICAgICBkZWZhdWx0OiBpZiAoIStzW2ldKSBicmVhayBvdXQ7IGlmIChpMCA+IDApIGkwID0gMDsgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiBpMCA+IDAgPyBzLnNsaWNlKDAsIGkwKSArIHMuc2xpY2UoaTEgKyAxKSA6IHM7XG59XG4iLCJpbXBvcnQge2Zvcm1hdERlY2ltYWxQYXJ0c30gZnJvbSBcIi4vZm9ybWF0RGVjaW1hbC5qc1wiO1xuXG5leHBvcnQgdmFyIHByZWZpeEV4cG9uZW50O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbih4LCBwKSB7XG4gIHZhciBkID0gZm9ybWF0RGVjaW1hbFBhcnRzKHgsIHApO1xuICBpZiAoIWQpIHJldHVybiBwcmVmaXhFeHBvbmVudCA9IHVuZGVmaW5lZCwgeC50b1ByZWNpc2lvbihwKTtcbiAgdmFyIGNvZWZmaWNpZW50ID0gZFswXSxcbiAgICAgIGV4cG9uZW50ID0gZFsxXSxcbiAgICAgIGkgPSBleHBvbmVudCAtIChwcmVmaXhFeHBvbmVudCA9IE1hdGgubWF4KC04LCBNYXRoLm1pbig4LCBNYXRoLmZsb29yKGV4cG9uZW50IC8gMykpKSAqIDMpICsgMSxcbiAgICAgIG4gPSBjb2VmZmljaWVudC5sZW5ndGg7XG4gIHJldHVybiBpID09PSBuID8gY29lZmZpY2llbnRcbiAgICAgIDogaSA+IG4gPyBjb2VmZmljaWVudCArIG5ldyBBcnJheShpIC0gbiArIDEpLmpvaW4oXCIwXCIpXG4gICAgICA6IGkgPiAwID8gY29lZmZpY2llbnQuc2xpY2UoMCwgaSkgKyBcIi5cIiArIGNvZWZmaWNpZW50LnNsaWNlKGkpXG4gICAgICA6IFwiMC5cIiArIG5ldyBBcnJheSgxIC0gaSkuam9pbihcIjBcIikgKyBmb3JtYXREZWNpbWFsUGFydHMoeCwgTWF0aC5tYXgoMCwgcCArIGkgLSAxKSlbMF07IC8vIGxlc3MgdGhhbiAxeSFcbn1cbiIsImltcG9ydCB7Zm9ybWF0RGVjaW1hbFBhcnRzfSBmcm9tIFwiLi9mb3JtYXREZWNpbWFsLmpzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKHgsIHApIHtcbiAgdmFyIGQgPSBmb3JtYXREZWNpbWFsUGFydHMoeCwgcCk7XG4gIGlmICghZCkgcmV0dXJuIHggKyBcIlwiO1xuICB2YXIgY29lZmZpY2llbnQgPSBkWzBdLFxuICAgICAgZXhwb25lbnQgPSBkWzFdO1xuICByZXR1cm4gZXhwb25lbnQgPCAwID8gXCIwLlwiICsgbmV3IEFycmF5KC1leHBvbmVudCkuam9pbihcIjBcIikgKyBjb2VmZmljaWVudFxuICAgICAgOiBjb2VmZmljaWVudC5sZW5ndGggPiBleHBvbmVudCArIDEgPyBjb2VmZmljaWVudC5zbGljZSgwLCBleHBvbmVudCArIDEpICsgXCIuXCIgKyBjb2VmZmljaWVudC5zbGljZShleHBvbmVudCArIDEpXG4gICAgICA6IGNvZWZmaWNpZW50ICsgbmV3IEFycmF5KGV4cG9uZW50IC0gY29lZmZpY2llbnQubGVuZ3RoICsgMikuam9pbihcIjBcIik7XG59XG4iLCJpbXBvcnQgZm9ybWF0RGVjaW1hbCBmcm9tIFwiLi9mb3JtYXREZWNpbWFsLmpzXCI7XG5pbXBvcnQgZm9ybWF0UHJlZml4QXV0byBmcm9tIFwiLi9mb3JtYXRQcmVmaXhBdXRvLmpzXCI7XG5pbXBvcnQgZm9ybWF0Um91bmRlZCBmcm9tIFwiLi9mb3JtYXRSb3VuZGVkLmpzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgXCIlXCI6ICh4LCBwKSA9PiAoeCAqIDEwMCkudG9GaXhlZChwKSxcbiAgXCJiXCI6ICh4KSA9PiBNYXRoLnJvdW5kKHgpLnRvU3RyaW5nKDIpLFxuICBcImNcIjogKHgpID0+IHggKyBcIlwiLFxuICBcImRcIjogZm9ybWF0RGVjaW1hbCxcbiAgXCJlXCI6ICh4LCBwKSA9PiB4LnRvRXhwb25lbnRpYWwocCksXG4gIFwiZlwiOiAoeCwgcCkgPT4geC50b0ZpeGVkKHApLFxuICBcImdcIjogKHgsIHApID0+IHgudG9QcmVjaXNpb24ocCksXG4gIFwib1wiOiAoeCkgPT4gTWF0aC5yb3VuZCh4KS50b1N0cmluZyg4KSxcbiAgXCJwXCI6ICh4LCBwKSA9PiBmb3JtYXRSb3VuZGVkKHggKiAxMDAsIHApLFxuICBcInJcIjogZm9ybWF0Um91bmRlZCxcbiAgXCJzXCI6IGZvcm1hdFByZWZpeEF1dG8sXG4gIFwiWFwiOiAoeCkgPT4gTWF0aC5yb3VuZCh4KS50b1N0cmluZygxNikudG9VcHBlckNhc2UoKSxcbiAgXCJ4XCI6ICh4KSA9PiBNYXRoLnJvdW5kKHgpLnRvU3RyaW5nKDE2KVxufTtcbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKHgpIHtcbiAgcmV0dXJuIHg7XG59XG4iLCJpbXBvcnQgZXhwb25lbnQgZnJvbSBcIi4vZXhwb25lbnQuanNcIjtcbmltcG9ydCBmb3JtYXRHcm91cCBmcm9tIFwiLi9mb3JtYXRHcm91cC5qc1wiO1xuaW1wb3J0IGZvcm1hdE51bWVyYWxzIGZyb20gXCIuL2Zvcm1hdE51bWVyYWxzLmpzXCI7XG5pbXBvcnQgZm9ybWF0U3BlY2lmaWVyIGZyb20gXCIuL2Zvcm1hdFNwZWNpZmllci5qc1wiO1xuaW1wb3J0IGZvcm1hdFRyaW0gZnJvbSBcIi4vZm9ybWF0VHJpbS5qc1wiO1xuaW1wb3J0IGZvcm1hdFR5cGVzIGZyb20gXCIuL2Zvcm1hdFR5cGVzLmpzXCI7XG5pbXBvcnQge3ByZWZpeEV4cG9uZW50fSBmcm9tIFwiLi9mb3JtYXRQcmVmaXhBdXRvLmpzXCI7XG5pbXBvcnQgaWRlbnRpdHkgZnJvbSBcIi4vaWRlbnRpdHkuanNcIjtcblxudmFyIG1hcCA9IEFycmF5LnByb3RvdHlwZS5tYXAsXG4gICAgcHJlZml4ZXMgPSBbXCJ5XCIsXCJ6XCIsXCJhXCIsXCJmXCIsXCJwXCIsXCJuXCIsXCLCtVwiLFwibVwiLFwiXCIsXCJrXCIsXCJNXCIsXCJHXCIsXCJUXCIsXCJQXCIsXCJFXCIsXCJaXCIsXCJZXCJdO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihsb2NhbGUpIHtcbiAgdmFyIGdyb3VwID0gbG9jYWxlLmdyb3VwaW5nID09PSB1bmRlZmluZWQgfHwgbG9jYWxlLnRob3VzYW5kcyA9PT0gdW5kZWZpbmVkID8gaWRlbnRpdHkgOiBmb3JtYXRHcm91cChtYXAuY2FsbChsb2NhbGUuZ3JvdXBpbmcsIE51bWJlciksIGxvY2FsZS50aG91c2FuZHMgKyBcIlwiKSxcbiAgICAgIGN1cnJlbmN5UHJlZml4ID0gbG9jYWxlLmN1cnJlbmN5ID09PSB1bmRlZmluZWQgPyBcIlwiIDogbG9jYWxlLmN1cnJlbmN5WzBdICsgXCJcIixcbiAgICAgIGN1cnJlbmN5U3VmZml4ID0gbG9jYWxlLmN1cnJlbmN5ID09PSB1bmRlZmluZWQgPyBcIlwiIDogbG9jYWxlLmN1cnJlbmN5WzFdICsgXCJcIixcbiAgICAgIGRlY2ltYWwgPSBsb2NhbGUuZGVjaW1hbCA9PT0gdW5kZWZpbmVkID8gXCIuXCIgOiBsb2NhbGUuZGVjaW1hbCArIFwiXCIsXG4gICAgICBudW1lcmFscyA9IGxvY2FsZS5udW1lcmFscyA9PT0gdW5kZWZpbmVkID8gaWRlbnRpdHkgOiBmb3JtYXROdW1lcmFscyhtYXAuY2FsbChsb2NhbGUubnVtZXJhbHMsIFN0cmluZykpLFxuICAgICAgcGVyY2VudCA9IGxvY2FsZS5wZXJjZW50ID09PSB1bmRlZmluZWQgPyBcIiVcIiA6IGxvY2FsZS5wZXJjZW50ICsgXCJcIixcbiAgICAgIG1pbnVzID0gbG9jYWxlLm1pbnVzID09PSB1bmRlZmluZWQgPyBcIuKIklwiIDogbG9jYWxlLm1pbnVzICsgXCJcIixcbiAgICAgIG5hbiA9IGxvY2FsZS5uYW4gPT09IHVuZGVmaW5lZCA/IFwiTmFOXCIgOiBsb2NhbGUubmFuICsgXCJcIjtcblxuICBmdW5jdGlvbiBuZXdGb3JtYXQoc3BlY2lmaWVyLCBvcHRpb25zKSB7XG4gICAgc3BlY2lmaWVyID0gZm9ybWF0U3BlY2lmaWVyKHNwZWNpZmllcik7XG5cbiAgICB2YXIgZmlsbCA9IHNwZWNpZmllci5maWxsLFxuICAgICAgICBhbGlnbiA9IHNwZWNpZmllci5hbGlnbixcbiAgICAgICAgc2lnbiA9IHNwZWNpZmllci5zaWduLFxuICAgICAgICBzeW1ib2wgPSBzcGVjaWZpZXIuc3ltYm9sLFxuICAgICAgICB6ZXJvID0gc3BlY2lmaWVyLnplcm8sXG4gICAgICAgIHdpZHRoID0gc3BlY2lmaWVyLndpZHRoLFxuICAgICAgICBjb21tYSA9IHNwZWNpZmllci5jb21tYSxcbiAgICAgICAgcHJlY2lzaW9uID0gc3BlY2lmaWVyLnByZWNpc2lvbixcbiAgICAgICAgdHJpbSA9IHNwZWNpZmllci50cmltLFxuICAgICAgICB0eXBlID0gc3BlY2lmaWVyLnR5cGU7XG5cbiAgICAvLyBUaGUgXCJuXCIgdHlwZSBpcyBhbiBhbGlhcyBmb3IgXCIsZ1wiLlxuICAgIGlmICh0eXBlID09PSBcIm5cIikgY29tbWEgPSB0cnVlLCB0eXBlID0gXCJnXCI7XG5cbiAgICAvLyBUaGUgXCJcIiB0eXBlLCBhbmQgYW55IGludmFsaWQgdHlwZSwgaXMgYW4gYWxpYXMgZm9yIFwiLjEyfmdcIi5cbiAgICBlbHNlIGlmICghZm9ybWF0VHlwZXNbdHlwZV0pIHByZWNpc2lvbiA9PT0gdW5kZWZpbmVkICYmIChwcmVjaXNpb24gPSAxMiksIHRyaW0gPSB0cnVlLCB0eXBlID0gXCJnXCI7XG5cbiAgICAvLyBJZiB6ZXJvIGZpbGwgaXMgc3BlY2lmaWVkLCBwYWRkaW5nIGdvZXMgYWZ0ZXIgc2lnbiBhbmQgYmVmb3JlIGRpZ2l0cy5cbiAgICBpZiAoemVybyB8fCAoZmlsbCA9PT0gXCIwXCIgJiYgYWxpZ24gPT09IFwiPVwiKSkgemVybyA9IHRydWUsIGZpbGwgPSBcIjBcIiwgYWxpZ24gPSBcIj1cIjtcblxuICAgIC8vIENvbXB1dGUgdGhlIHByZWZpeCBhbmQgc3VmZml4LlxuICAgIC8vIEZvciBTSS1wcmVmaXgsIHRoZSBzdWZmaXggaXMgbGF6aWx5IGNvbXB1dGVkLlxuICAgIHZhciBwcmVmaXggPSAob3B0aW9ucyAmJiBvcHRpb25zLnByZWZpeCAhPT0gdW5kZWZpbmVkID8gb3B0aW9ucy5wcmVmaXggOiBcIlwiKSArIChzeW1ib2wgPT09IFwiJFwiID8gY3VycmVuY3lQcmVmaXggOiBzeW1ib2wgPT09IFwiI1wiICYmIC9bYm94WF0vLnRlc3QodHlwZSkgPyBcIjBcIiArIHR5cGUudG9Mb3dlckNhc2UoKSA6IFwiXCIpLFxuICAgICAgICBzdWZmaXggPSAoc3ltYm9sID09PSBcIiRcIiA/IGN1cnJlbmN5U3VmZml4IDogL1slcF0vLnRlc3QodHlwZSkgPyBwZXJjZW50IDogXCJcIikgKyAob3B0aW9ucyAmJiBvcHRpb25zLnN1ZmZpeCAhPT0gdW5kZWZpbmVkID8gb3B0aW9ucy5zdWZmaXggOiBcIlwiKTtcblxuICAgIC8vIFdoYXQgZm9ybWF0IGZ1bmN0aW9uIHNob3VsZCB3ZSB1c2U/XG4gICAgLy8gSXMgdGhpcyBhbiBpbnRlZ2VyIHR5cGU/XG4gICAgLy8gQ2FuIHRoaXMgdHlwZSBnZW5lcmF0ZSBleHBvbmVudGlhbCBub3RhdGlvbj9cbiAgICB2YXIgZm9ybWF0VHlwZSA9IGZvcm1hdFR5cGVzW3R5cGVdLFxuICAgICAgICBtYXliZVN1ZmZpeCA9IC9bZGVmZ3BycyVdLy50ZXN0KHR5cGUpO1xuXG4gICAgLy8gU2V0IHRoZSBkZWZhdWx0IHByZWNpc2lvbiBpZiBub3Qgc3BlY2lmaWVkLFxuICAgIC8vIG9yIGNsYW1wIHRoZSBzcGVjaWZpZWQgcHJlY2lzaW9uIHRvIHRoZSBzdXBwb3J0ZWQgcmFuZ2UuXG4gICAgLy8gRm9yIHNpZ25pZmljYW50IHByZWNpc2lvbiwgaXQgbXVzdCBiZSBpbiBbMSwgMjFdLlxuICAgIC8vIEZvciBmaXhlZCBwcmVjaXNpb24sIGl0IG11c3QgYmUgaW4gWzAsIDIwXS5cbiAgICBwcmVjaXNpb24gPSBwcmVjaXNpb24gPT09IHVuZGVmaW5lZCA/IDZcbiAgICAgICAgOiAvW2dwcnNdLy50ZXN0KHR5cGUpID8gTWF0aC5tYXgoMSwgTWF0aC5taW4oMjEsIHByZWNpc2lvbikpXG4gICAgICAgIDogTWF0aC5tYXgoMCwgTWF0aC5taW4oMjAsIHByZWNpc2lvbikpO1xuXG4gICAgZnVuY3Rpb24gZm9ybWF0KHZhbHVlKSB7XG4gICAgICB2YXIgdmFsdWVQcmVmaXggPSBwcmVmaXgsXG4gICAgICAgICAgdmFsdWVTdWZmaXggPSBzdWZmaXgsXG4gICAgICAgICAgaSwgbiwgYztcblxuICAgICAgaWYgKHR5cGUgPT09IFwiY1wiKSB7XG4gICAgICAgIHZhbHVlU3VmZml4ID0gZm9ybWF0VHlwZSh2YWx1ZSkgKyB2YWx1ZVN1ZmZpeDtcbiAgICAgICAgdmFsdWUgPSBcIlwiO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFsdWUgPSArdmFsdWU7XG5cbiAgICAgICAgLy8gRGV0ZXJtaW5lIHRoZSBzaWduLiAtMCBpcyBub3QgbGVzcyB0aGFuIDAsIGJ1dCAxIC8gLTAgaXMhXG4gICAgICAgIHZhciB2YWx1ZU5lZ2F0aXZlID0gdmFsdWUgPCAwIHx8IDEgLyB2YWx1ZSA8IDA7XG5cbiAgICAgICAgLy8gUGVyZm9ybSB0aGUgaW5pdGlhbCBmb3JtYXR0aW5nLlxuICAgICAgICB2YWx1ZSA9IGlzTmFOKHZhbHVlKSA/IG5hbiA6IGZvcm1hdFR5cGUoTWF0aC5hYnModmFsdWUpLCBwcmVjaXNpb24pO1xuXG4gICAgICAgIC8vIFRyaW0gaW5zaWduaWZpY2FudCB6ZXJvcy5cbiAgICAgICAgaWYgKHRyaW0pIHZhbHVlID0gZm9ybWF0VHJpbSh2YWx1ZSk7XG5cbiAgICAgICAgLy8gSWYgYSBuZWdhdGl2ZSB2YWx1ZSByb3VuZHMgdG8gemVybyBhZnRlciBmb3JtYXR0aW5nLCBhbmQgbm8gZXhwbGljaXQgcG9zaXRpdmUgc2lnbiBpcyByZXF1ZXN0ZWQsIGhpZGUgdGhlIHNpZ24uXG4gICAgICAgIGlmICh2YWx1ZU5lZ2F0aXZlICYmICt2YWx1ZSA9PT0gMCAmJiBzaWduICE9PSBcIitcIikgdmFsdWVOZWdhdGl2ZSA9IGZhbHNlO1xuXG4gICAgICAgIC8vIENvbXB1dGUgdGhlIHByZWZpeCBhbmQgc3VmZml4LlxuICAgICAgICB2YWx1ZVByZWZpeCA9ICh2YWx1ZU5lZ2F0aXZlID8gKHNpZ24gPT09IFwiKFwiID8gc2lnbiA6IG1pbnVzKSA6IHNpZ24gPT09IFwiLVwiIHx8IHNpZ24gPT09IFwiKFwiID8gXCJcIiA6IHNpZ24pICsgdmFsdWVQcmVmaXg7XG4gICAgICAgIHZhbHVlU3VmZml4ID0gKHR5cGUgPT09IFwic1wiICYmICFpc05hTih2YWx1ZSkgJiYgcHJlZml4RXhwb25lbnQgIT09IHVuZGVmaW5lZCA/IHByZWZpeGVzWzggKyBwcmVmaXhFeHBvbmVudCAvIDNdIDogXCJcIikgKyB2YWx1ZVN1ZmZpeCArICh2YWx1ZU5lZ2F0aXZlICYmIHNpZ24gPT09IFwiKFwiID8gXCIpXCIgOiBcIlwiKTtcblxuICAgICAgICAvLyBCcmVhayB0aGUgZm9ybWF0dGVkIHZhbHVlIGludG8gdGhlIGludGVnZXIg4oCcdmFsdWXigJ0gcGFydCB0aGF0IGNhbiBiZVxuICAgICAgICAvLyBncm91cGVkLCBhbmQgZnJhY3Rpb25hbCBvciBleHBvbmVudGlhbCDigJxzdWZmaXjigJ0gcGFydCB0aGF0IGlzIG5vdC5cbiAgICAgICAgaWYgKG1heWJlU3VmZml4KSB7XG4gICAgICAgICAgaSA9IC0xLCBuID0gdmFsdWUubGVuZ3RoO1xuICAgICAgICAgIHdoaWxlICgrK2kgPCBuKSB7XG4gICAgICAgICAgICBpZiAoYyA9IHZhbHVlLmNoYXJDb2RlQXQoaSksIDQ4ID4gYyB8fCBjID4gNTcpIHtcbiAgICAgICAgICAgICAgdmFsdWVTdWZmaXggPSAoYyA9PT0gNDYgPyBkZWNpbWFsICsgdmFsdWUuc2xpY2UoaSArIDEpIDogdmFsdWUuc2xpY2UoaSkpICsgdmFsdWVTdWZmaXg7XG4gICAgICAgICAgICAgIHZhbHVlID0gdmFsdWUuc2xpY2UoMCwgaSk7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBJZiB0aGUgZmlsbCBjaGFyYWN0ZXIgaXMgbm90IFwiMFwiLCBncm91cGluZyBpcyBhcHBsaWVkIGJlZm9yZSBwYWRkaW5nLlxuICAgICAgaWYgKGNvbW1hICYmICF6ZXJvKSB2YWx1ZSA9IGdyb3VwKHZhbHVlLCBJbmZpbml0eSk7XG5cbiAgICAgIC8vIENvbXB1dGUgdGhlIHBhZGRpbmcuXG4gICAgICB2YXIgbGVuZ3RoID0gdmFsdWVQcmVmaXgubGVuZ3RoICsgdmFsdWUubGVuZ3RoICsgdmFsdWVTdWZmaXgubGVuZ3RoLFxuICAgICAgICAgIHBhZGRpbmcgPSBsZW5ndGggPCB3aWR0aCA/IG5ldyBBcnJheSh3aWR0aCAtIGxlbmd0aCArIDEpLmpvaW4oZmlsbCkgOiBcIlwiO1xuXG4gICAgICAvLyBJZiB0aGUgZmlsbCBjaGFyYWN0ZXIgaXMgXCIwXCIsIGdyb3VwaW5nIGlzIGFwcGxpZWQgYWZ0ZXIgcGFkZGluZy5cbiAgICAgIGlmIChjb21tYSAmJiB6ZXJvKSB2YWx1ZSA9IGdyb3VwKHBhZGRpbmcgKyB2YWx1ZSwgcGFkZGluZy5sZW5ndGggPyB3aWR0aCAtIHZhbHVlU3VmZml4Lmxlbmd0aCA6IEluZmluaXR5KSwgcGFkZGluZyA9IFwiXCI7XG5cbiAgICAgIC8vIFJlY29uc3RydWN0IHRoZSBmaW5hbCBvdXRwdXQgYmFzZWQgb24gdGhlIGRlc2lyZWQgYWxpZ25tZW50LlxuICAgICAgc3dpdGNoIChhbGlnbikge1xuICAgICAgICBjYXNlIFwiPFwiOiB2YWx1ZSA9IHZhbHVlUHJlZml4ICsgdmFsdWUgKyB2YWx1ZVN1ZmZpeCArIHBhZGRpbmc7IGJyZWFrO1xuICAgICAgICBjYXNlIFwiPVwiOiB2YWx1ZSA9IHZhbHVlUHJlZml4ICsgcGFkZGluZyArIHZhbHVlICsgdmFsdWVTdWZmaXg7IGJyZWFrO1xuICAgICAgICBjYXNlIFwiXlwiOiB2YWx1ZSA9IHBhZGRpbmcuc2xpY2UoMCwgbGVuZ3RoID0gcGFkZGluZy5sZW5ndGggPj4gMSkgKyB2YWx1ZVByZWZpeCArIHZhbHVlICsgdmFsdWVTdWZmaXggKyBwYWRkaW5nLnNsaWNlKGxlbmd0aCk7IGJyZWFrO1xuICAgICAgICBkZWZhdWx0OiB2YWx1ZSA9IHBhZGRpbmcgKyB2YWx1ZVByZWZpeCArIHZhbHVlICsgdmFsdWVTdWZmaXg7IGJyZWFrO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gbnVtZXJhbHModmFsdWUpO1xuICAgIH1cblxuICAgIGZvcm1hdC50b1N0cmluZyA9IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIHNwZWNpZmllciArIFwiXCI7XG4gICAgfTtcblxuICAgIHJldHVybiBmb3JtYXQ7XG4gIH1cblxuICBmdW5jdGlvbiBmb3JtYXRQcmVmaXgoc3BlY2lmaWVyLCB2YWx1ZSkge1xuICAgIHZhciBlID0gTWF0aC5tYXgoLTgsIE1hdGgubWluKDgsIE1hdGguZmxvb3IoZXhwb25lbnQodmFsdWUpIC8gMykpKSAqIDMsXG4gICAgICAgIGsgPSBNYXRoLnBvdygxMCwgLWUpLFxuICAgICAgICBmID0gbmV3Rm9ybWF0KChzcGVjaWZpZXIgPSBmb3JtYXRTcGVjaWZpZXIoc3BlY2lmaWVyKSwgc3BlY2lmaWVyLnR5cGUgPSBcImZcIiwgc3BlY2lmaWVyKSwge3N1ZmZpeDogcHJlZml4ZXNbOCArIGUgLyAzXX0pO1xuICAgIHJldHVybiBmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgcmV0dXJuIGYoayAqIHZhbHVlKTtcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBmb3JtYXQ6IG5ld0Zvcm1hdCxcbiAgICBmb3JtYXRQcmVmaXg6IGZvcm1hdFByZWZpeFxuICB9O1xufVxuIiwiaW1wb3J0IGZvcm1hdExvY2FsZSBmcm9tIFwiLi9sb2NhbGUuanNcIjtcblxudmFyIGxvY2FsZTtcbmV4cG9ydCB2YXIgZm9ybWF0O1xuZXhwb3J0IHZhciBmb3JtYXRQcmVmaXg7XG5cbmRlZmF1bHRMb2NhbGUoe1xuICB0aG91c2FuZHM6IFwiLFwiLFxuICBncm91cGluZzogWzNdLFxuICBjdXJyZW5jeTogW1wiJFwiLCBcIlwiXVxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGRlZmF1bHRMb2NhbGUoZGVmaW5pdGlvbikge1xuICBsb2NhbGUgPSBmb3JtYXRMb2NhbGUoZGVmaW5pdGlvbik7XG4gIGZvcm1hdCA9IGxvY2FsZS5mb3JtYXQ7XG4gIGZvcm1hdFByZWZpeCA9IGxvY2FsZS5mb3JtYXRQcmVmaXg7XG4gIHJldHVybiBsb2NhbGU7XG59XG4iLCJpbXBvcnQgZXhwb25lbnQgZnJvbSBcIi4vZXhwb25lbnQuanNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oc3RlcCkge1xuICByZXR1cm4gTWF0aC5tYXgoMCwgLWV4cG9uZW50KE1hdGguYWJzKHN0ZXApKSk7XG59XG4iLCJpbXBvcnQgZXhwb25lbnQgZnJvbSBcIi4vZXhwb25lbnQuanNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oc3RlcCwgdmFsdWUpIHtcbiAgcmV0dXJuIE1hdGgubWF4KDAsIE1hdGgubWF4KC04LCBNYXRoLm1pbig4LCBNYXRoLmZsb29yKGV4cG9uZW50KHZhbHVlKSAvIDMpKSkgKiAzIC0gZXhwb25lbnQoTWF0aC5hYnMoc3RlcCkpKTtcbn1cbiIsImltcG9ydCBleHBvbmVudCBmcm9tIFwiLi9leHBvbmVudC5qc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihzdGVwLCBtYXgpIHtcbiAgc3RlcCA9IE1hdGguYWJzKHN0ZXApLCBtYXggPSBNYXRoLmFicyhtYXgpIC0gc3RlcDtcbiAgcmV0dXJuIE1hdGgubWF4KDAsIGV4cG9uZW50KG1heCkgLSBleHBvbmVudChzdGVwKSkgKyAxO1xufVxuIiwiZXhwb3J0IGZ1bmN0aW9uIGluaXRSYW5nZShkb21haW4sIHJhbmdlKSB7XG4gIHN3aXRjaCAoYXJndW1lbnRzLmxlbmd0aCkge1xuICAgIGNhc2UgMDogYnJlYWs7XG4gICAgY2FzZSAxOiB0aGlzLnJhbmdlKGRvbWFpbik7IGJyZWFrO1xuICAgIGRlZmF1bHQ6IHRoaXMucmFuZ2UocmFuZ2UpLmRvbWFpbihkb21haW4pOyBicmVhaztcbiAgfVxuICByZXR1cm4gdGhpcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGluaXRJbnRlcnBvbGF0b3IoZG9tYWluLCBpbnRlcnBvbGF0b3IpIHtcbiAgc3dpdGNoIChhcmd1bWVudHMubGVuZ3RoKSB7XG4gICAgY2FzZSAwOiBicmVhaztcbiAgICBjYXNlIDE6IHtcbiAgICAgIGlmICh0eXBlb2YgZG9tYWluID09PSBcImZ1bmN0aW9uXCIpIHRoaXMuaW50ZXJwb2xhdG9yKGRvbWFpbik7XG4gICAgICBlbHNlIHRoaXMucmFuZ2UoZG9tYWluKTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgICBkZWZhdWx0OiB7XG4gICAgICB0aGlzLmRvbWFpbihkb21haW4pO1xuICAgICAgaWYgKHR5cGVvZiBpbnRlcnBvbGF0b3IgPT09IFwiZnVuY3Rpb25cIikgdGhpcy5pbnRlcnBvbGF0b3IoaW50ZXJwb2xhdG9yKTtcbiAgICAgIGVsc2UgdGhpcy5yYW5nZShpbnRlcnBvbGF0b3IpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiB0aGlzO1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY29uc3RhbnRzKHgpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB4O1xuICB9O1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbnVtYmVyKHgpIHtcbiAgcmV0dXJuICt4O1xufVxuIiwiaW1wb3J0IHtiaXNlY3R9IGZyb20gXCJkMy1hcnJheVwiO1xuaW1wb3J0IHtpbnRlcnBvbGF0ZSBhcyBpbnRlcnBvbGF0ZVZhbHVlLCBpbnRlcnBvbGF0ZU51bWJlciwgaW50ZXJwb2xhdGVSb3VuZH0gZnJvbSBcImQzLWludGVycG9sYXRlXCI7XG5pbXBvcnQgY29uc3RhbnQgZnJvbSBcIi4vY29uc3RhbnQuanNcIjtcbmltcG9ydCBudW1iZXIgZnJvbSBcIi4vbnVtYmVyLmpzXCI7XG5cbnZhciB1bml0ID0gWzAsIDFdO1xuXG5leHBvcnQgZnVuY3Rpb24gaWRlbnRpdHkoeCkge1xuICByZXR1cm4geDtcbn1cblxuZnVuY3Rpb24gbm9ybWFsaXplKGEsIGIpIHtcbiAgcmV0dXJuIChiIC09IChhID0gK2EpKVxuICAgICAgPyBmdW5jdGlvbih4KSB7IHJldHVybiAoeCAtIGEpIC8gYjsgfVxuICAgICAgOiBjb25zdGFudChpc05hTihiKSA/IE5hTiA6IDAuNSk7XG59XG5cbmZ1bmN0aW9uIGNsYW1wZXIoYSwgYikge1xuICB2YXIgdDtcbiAgaWYgKGEgPiBiKSB0ID0gYSwgYSA9IGIsIGIgPSB0O1xuICByZXR1cm4gZnVuY3Rpb24oeCkgeyByZXR1cm4gTWF0aC5tYXgoYSwgTWF0aC5taW4oYiwgeCkpOyB9O1xufVxuXG4vLyBub3JtYWxpemUoYSwgYikoeCkgdGFrZXMgYSBkb21haW4gdmFsdWUgeCBpbiBbYSxiXSBhbmQgcmV0dXJucyB0aGUgY29ycmVzcG9uZGluZyBwYXJhbWV0ZXIgdCBpbiBbMCwxXS5cbi8vIGludGVycG9sYXRlKGEsIGIpKHQpIHRha2VzIGEgcGFyYW1ldGVyIHQgaW4gWzAsMV0gYW5kIHJldHVybnMgdGhlIGNvcnJlc3BvbmRpbmcgcmFuZ2UgdmFsdWUgeCBpbiBbYSxiXS5cbmZ1bmN0aW9uIGJpbWFwKGRvbWFpbiwgcmFuZ2UsIGludGVycG9sYXRlKSB7XG4gIHZhciBkMCA9IGRvbWFpblswXSwgZDEgPSBkb21haW5bMV0sIHIwID0gcmFuZ2VbMF0sIHIxID0gcmFuZ2VbMV07XG4gIGlmIChkMSA8IGQwKSBkMCA9IG5vcm1hbGl6ZShkMSwgZDApLCByMCA9IGludGVycG9sYXRlKHIxLCByMCk7XG4gIGVsc2UgZDAgPSBub3JtYWxpemUoZDAsIGQxKSwgcjAgPSBpbnRlcnBvbGF0ZShyMCwgcjEpO1xuICByZXR1cm4gZnVuY3Rpb24oeCkgeyByZXR1cm4gcjAoZDAoeCkpOyB9O1xufVxuXG5mdW5jdGlvbiBwb2x5bWFwKGRvbWFpbiwgcmFuZ2UsIGludGVycG9sYXRlKSB7XG4gIHZhciBqID0gTWF0aC5taW4oZG9tYWluLmxlbmd0aCwgcmFuZ2UubGVuZ3RoKSAtIDEsXG4gICAgICBkID0gbmV3IEFycmF5KGopLFxuICAgICAgciA9IG5ldyBBcnJheShqKSxcbiAgICAgIGkgPSAtMTtcblxuICAvLyBSZXZlcnNlIGRlc2NlbmRpbmcgZG9tYWlucy5cbiAgaWYgKGRvbWFpbltqXSA8IGRvbWFpblswXSkge1xuICAgIGRvbWFpbiA9IGRvbWFpbi5zbGljZSgpLnJldmVyc2UoKTtcbiAgICByYW5nZSA9IHJhbmdlLnNsaWNlKCkucmV2ZXJzZSgpO1xuICB9XG5cbiAgd2hpbGUgKCsraSA8IGopIHtcbiAgICBkW2ldID0gbm9ybWFsaXplKGRvbWFpbltpXSwgZG9tYWluW2kgKyAxXSk7XG4gICAgcltpXSA9IGludGVycG9sYXRlKHJhbmdlW2ldLCByYW5nZVtpICsgMV0pO1xuICB9XG5cbiAgcmV0dXJuIGZ1bmN0aW9uKHgpIHtcbiAgICB2YXIgaSA9IGJpc2VjdChkb21haW4sIHgsIDEsIGopIC0gMTtcbiAgICByZXR1cm4gcltpXShkW2ldKHgpKTtcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvcHkoc291cmNlLCB0YXJnZXQpIHtcbiAgcmV0dXJuIHRhcmdldFxuICAgICAgLmRvbWFpbihzb3VyY2UuZG9tYWluKCkpXG4gICAgICAucmFuZ2Uoc291cmNlLnJhbmdlKCkpXG4gICAgICAuaW50ZXJwb2xhdGUoc291cmNlLmludGVycG9sYXRlKCkpXG4gICAgICAuY2xhbXAoc291cmNlLmNsYW1wKCkpXG4gICAgICAudW5rbm93bihzb3VyY2UudW5rbm93bigpKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRyYW5zZm9ybWVyKCkge1xuICB2YXIgZG9tYWluID0gdW5pdCxcbiAgICAgIHJhbmdlID0gdW5pdCxcbiAgICAgIGludGVycG9sYXRlID0gaW50ZXJwb2xhdGVWYWx1ZSxcbiAgICAgIHRyYW5zZm9ybSxcbiAgICAgIHVudHJhbnNmb3JtLFxuICAgICAgdW5rbm93bixcbiAgICAgIGNsYW1wID0gaWRlbnRpdHksXG4gICAgICBwaWVjZXdpc2UsXG4gICAgICBvdXRwdXQsXG4gICAgICBpbnB1dDtcblxuICBmdW5jdGlvbiByZXNjYWxlKCkge1xuICAgIHZhciBuID0gTWF0aC5taW4oZG9tYWluLmxlbmd0aCwgcmFuZ2UubGVuZ3RoKTtcbiAgICBpZiAoY2xhbXAgIT09IGlkZW50aXR5KSBjbGFtcCA9IGNsYW1wZXIoZG9tYWluWzBdLCBkb21haW5bbiAtIDFdKTtcbiAgICBwaWVjZXdpc2UgPSBuID4gMiA/IHBvbHltYXAgOiBiaW1hcDtcbiAgICBvdXRwdXQgPSBpbnB1dCA9IG51bGw7XG4gICAgcmV0dXJuIHNjYWxlO1xuICB9XG5cbiAgZnVuY3Rpb24gc2NhbGUoeCkge1xuICAgIHJldHVybiB4ID09IG51bGwgfHwgaXNOYU4oeCA9ICt4KSA/IHVua25vd24gOiAob3V0cHV0IHx8IChvdXRwdXQgPSBwaWVjZXdpc2UoZG9tYWluLm1hcCh0cmFuc2Zvcm0pLCByYW5nZSwgaW50ZXJwb2xhdGUpKSkodHJhbnNmb3JtKGNsYW1wKHgpKSk7XG4gIH1cblxuICBzY2FsZS5pbnZlcnQgPSBmdW5jdGlvbih5KSB7XG4gICAgcmV0dXJuIGNsYW1wKHVudHJhbnNmb3JtKChpbnB1dCB8fCAoaW5wdXQgPSBwaWVjZXdpc2UocmFuZ2UsIGRvbWFpbi5tYXAodHJhbnNmb3JtKSwgaW50ZXJwb2xhdGVOdW1iZXIpKSkoeSkpKTtcbiAgfTtcblxuICBzY2FsZS5kb21haW4gPSBmdW5jdGlvbihfKSB7XG4gICAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPyAoZG9tYWluID0gQXJyYXkuZnJvbShfLCBudW1iZXIpLCByZXNjYWxlKCkpIDogZG9tYWluLnNsaWNlKCk7XG4gIH07XG5cbiAgc2NhbGUucmFuZ2UgPSBmdW5jdGlvbihfKSB7XG4gICAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPyAocmFuZ2UgPSBBcnJheS5mcm9tKF8pLCByZXNjYWxlKCkpIDogcmFuZ2Uuc2xpY2UoKTtcbiAgfTtcblxuICBzY2FsZS5yYW5nZVJvdW5kID0gZnVuY3Rpb24oXykge1xuICAgIHJldHVybiByYW5nZSA9IEFycmF5LmZyb20oXyksIGludGVycG9sYXRlID0gaW50ZXJwb2xhdGVSb3VuZCwgcmVzY2FsZSgpO1xuICB9O1xuXG4gIHNjYWxlLmNsYW1wID0gZnVuY3Rpb24oXykge1xuICAgIHJldHVybiBhcmd1bWVudHMubGVuZ3RoID8gKGNsYW1wID0gXyA/IHRydWUgOiBpZGVudGl0eSwgcmVzY2FsZSgpKSA6IGNsYW1wICE9PSBpZGVudGl0eTtcbiAgfTtcblxuICBzY2FsZS5pbnRlcnBvbGF0ZSA9IGZ1bmN0aW9uKF8pIHtcbiAgICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA/IChpbnRlcnBvbGF0ZSA9IF8sIHJlc2NhbGUoKSkgOiBpbnRlcnBvbGF0ZTtcbiAgfTtcblxuICBzY2FsZS51bmtub3duID0gZnVuY3Rpb24oXykge1xuICAgIHJldHVybiBhcmd1bWVudHMubGVuZ3RoID8gKHVua25vd24gPSBfLCBzY2FsZSkgOiB1bmtub3duO1xuICB9O1xuXG4gIHJldHVybiBmdW5jdGlvbih0LCB1KSB7XG4gICAgdHJhbnNmb3JtID0gdCwgdW50cmFuc2Zvcm0gPSB1O1xuICAgIHJldHVybiByZXNjYWxlKCk7XG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNvbnRpbnVvdXMoKSB7XG4gIHJldHVybiB0cmFuc2Zvcm1lcigpKGlkZW50aXR5LCBpZGVudGl0eSk7XG59XG4iLCJpbXBvcnQge3RpY2tTdGVwfSBmcm9tIFwiZDMtYXJyYXlcIjtcbmltcG9ydCB7Zm9ybWF0LCBmb3JtYXRQcmVmaXgsIGZvcm1hdFNwZWNpZmllciwgcHJlY2lzaW9uRml4ZWQsIHByZWNpc2lvblByZWZpeCwgcHJlY2lzaW9uUm91bmR9IGZyb20gXCJkMy1mb3JtYXRcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdGlja0Zvcm1hdChzdGFydCwgc3RvcCwgY291bnQsIHNwZWNpZmllcikge1xuICB2YXIgc3RlcCA9IHRpY2tTdGVwKHN0YXJ0LCBzdG9wLCBjb3VudCksXG4gICAgICBwcmVjaXNpb247XG4gIHNwZWNpZmllciA9IGZvcm1hdFNwZWNpZmllcihzcGVjaWZpZXIgPT0gbnVsbCA/IFwiLGZcIiA6IHNwZWNpZmllcik7XG4gIHN3aXRjaCAoc3BlY2lmaWVyLnR5cGUpIHtcbiAgICBjYXNlIFwic1wiOiB7XG4gICAgICB2YXIgdmFsdWUgPSBNYXRoLm1heChNYXRoLmFicyhzdGFydCksIE1hdGguYWJzKHN0b3ApKTtcbiAgICAgIGlmIChzcGVjaWZpZXIucHJlY2lzaW9uID09IG51bGwgJiYgIWlzTmFOKHByZWNpc2lvbiA9IHByZWNpc2lvblByZWZpeChzdGVwLCB2YWx1ZSkpKSBzcGVjaWZpZXIucHJlY2lzaW9uID0gcHJlY2lzaW9uO1xuICAgICAgcmV0dXJuIGZvcm1hdFByZWZpeChzcGVjaWZpZXIsIHZhbHVlKTtcbiAgICB9XG4gICAgY2FzZSBcIlwiOlxuICAgIGNhc2UgXCJlXCI6XG4gICAgY2FzZSBcImdcIjpcbiAgICBjYXNlIFwicFwiOlxuICAgIGNhc2UgXCJyXCI6IHtcbiAgICAgIGlmIChzcGVjaWZpZXIucHJlY2lzaW9uID09IG51bGwgJiYgIWlzTmFOKHByZWNpc2lvbiA9IHByZWNpc2lvblJvdW5kKHN0ZXAsIE1hdGgubWF4KE1hdGguYWJzKHN0YXJ0KSwgTWF0aC5hYnMoc3RvcCkpKSkpIHNwZWNpZmllci5wcmVjaXNpb24gPSBwcmVjaXNpb24gLSAoc3BlY2lmaWVyLnR5cGUgPT09IFwiZVwiKTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgICBjYXNlIFwiZlwiOlxuICAgIGNhc2UgXCIlXCI6IHtcbiAgICAgIGlmIChzcGVjaWZpZXIucHJlY2lzaW9uID09IG51bGwgJiYgIWlzTmFOKHByZWNpc2lvbiA9IHByZWNpc2lvbkZpeGVkKHN0ZXApKSkgc3BlY2lmaWVyLnByZWNpc2lvbiA9IHByZWNpc2lvbiAtIChzcGVjaWZpZXIudHlwZSA9PT0gXCIlXCIpICogMjtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gZm9ybWF0KHNwZWNpZmllcik7XG59XG4iLCJpbXBvcnQge3RpY2tzLCB0aWNrSW5jcmVtZW50fSBmcm9tIFwiZDMtYXJyYXlcIjtcbmltcG9ydCBjb250aW51b3VzLCB7Y29weX0gZnJvbSBcIi4vY29udGludW91cy5qc1wiO1xuaW1wb3J0IHtpbml0UmFuZ2V9IGZyb20gXCIuL2luaXQuanNcIjtcbmltcG9ydCB0aWNrRm9ybWF0IGZyb20gXCIuL3RpY2tGb3JtYXQuanNcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGxpbmVhcmlzaChzY2FsZSkge1xuICB2YXIgZG9tYWluID0gc2NhbGUuZG9tYWluO1xuXG4gIHNjYWxlLnRpY2tzID0gZnVuY3Rpb24oY291bnQpIHtcbiAgICB2YXIgZCA9IGRvbWFpbigpO1xuICAgIHJldHVybiB0aWNrcyhkWzBdLCBkW2QubGVuZ3RoIC0gMV0sIGNvdW50ID09IG51bGwgPyAxMCA6IGNvdW50KTtcbiAgfTtcblxuICBzY2FsZS50aWNrRm9ybWF0ID0gZnVuY3Rpb24oY291bnQsIHNwZWNpZmllcikge1xuICAgIHZhciBkID0gZG9tYWluKCk7XG4gICAgcmV0dXJuIHRpY2tGb3JtYXQoZFswXSwgZFtkLmxlbmd0aCAtIDFdLCBjb3VudCA9PSBudWxsID8gMTAgOiBjb3VudCwgc3BlY2lmaWVyKTtcbiAgfTtcblxuICBzY2FsZS5uaWNlID0gZnVuY3Rpb24oY291bnQpIHtcbiAgICBpZiAoY291bnQgPT0gbnVsbCkgY291bnQgPSAxMDtcblxuICAgIHZhciBkID0gZG9tYWluKCk7XG4gICAgdmFyIGkwID0gMDtcbiAgICB2YXIgaTEgPSBkLmxlbmd0aCAtIDE7XG4gICAgdmFyIHN0YXJ0ID0gZFtpMF07XG4gICAgdmFyIHN0b3AgPSBkW2kxXTtcbiAgICB2YXIgcHJlc3RlcDtcbiAgICB2YXIgc3RlcDtcbiAgICB2YXIgbWF4SXRlciA9IDEwO1xuXG4gICAgaWYgKHN0b3AgPCBzdGFydCkge1xuICAgICAgc3RlcCA9IHN0YXJ0LCBzdGFydCA9IHN0b3AsIHN0b3AgPSBzdGVwO1xuICAgICAgc3RlcCA9IGkwLCBpMCA9IGkxLCBpMSA9IHN0ZXA7XG4gICAgfVxuICAgIFxuICAgIHdoaWxlIChtYXhJdGVyLS0gPiAwKSB7XG4gICAgICBzdGVwID0gdGlja0luY3JlbWVudChzdGFydCwgc3RvcCwgY291bnQpO1xuICAgICAgaWYgKHN0ZXAgPT09IHByZXN0ZXApIHtcbiAgICAgICAgZFtpMF0gPSBzdGFydFxuICAgICAgICBkW2kxXSA9IHN0b3BcbiAgICAgICAgcmV0dXJuIGRvbWFpbihkKTtcbiAgICAgIH0gZWxzZSBpZiAoc3RlcCA+IDApIHtcbiAgICAgICAgc3RhcnQgPSBNYXRoLmZsb29yKHN0YXJ0IC8gc3RlcCkgKiBzdGVwO1xuICAgICAgICBzdG9wID0gTWF0aC5jZWlsKHN0b3AgLyBzdGVwKSAqIHN0ZXA7XG4gICAgICB9IGVsc2UgaWYgKHN0ZXAgPCAwKSB7XG4gICAgICAgIHN0YXJ0ID0gTWF0aC5jZWlsKHN0YXJ0ICogc3RlcCkgLyBzdGVwO1xuICAgICAgICBzdG9wID0gTWF0aC5mbG9vcihzdG9wICogc3RlcCkgLyBzdGVwO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBwcmVzdGVwID0gc3RlcDtcbiAgICB9XG5cbiAgICByZXR1cm4gc2NhbGU7XG4gIH07XG5cbiAgcmV0dXJuIHNjYWxlO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBsaW5lYXIoKSB7XG4gIHZhciBzY2FsZSA9IGNvbnRpbnVvdXMoKTtcblxuICBzY2FsZS5jb3B5ID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIGNvcHkoc2NhbGUsIGxpbmVhcigpKTtcbiAgfTtcblxuICBpbml0UmFuZ2UuYXBwbHkoc2NhbGUsIGFyZ3VtZW50cyk7XG5cbiAgcmV0dXJuIGxpbmVhcmlzaChzY2FsZSk7XG59XG4iLCJleHBvcnQgZnVuY3Rpb24gVHJhbnNmb3JtKGssIHgsIHkpIHtcbiAgdGhpcy5rID0gaztcbiAgdGhpcy54ID0geDtcbiAgdGhpcy55ID0geTtcbn1cblxuVHJhbnNmb3JtLnByb3RvdHlwZSA9IHtcbiAgY29uc3RydWN0b3I6IFRyYW5zZm9ybSxcbiAgc2NhbGU6IGZ1bmN0aW9uKGspIHtcbiAgICByZXR1cm4gayA9PT0gMSA/IHRoaXMgOiBuZXcgVHJhbnNmb3JtKHRoaXMuayAqIGssIHRoaXMueCwgdGhpcy55KTtcbiAgfSxcbiAgdHJhbnNsYXRlOiBmdW5jdGlvbih4LCB5KSB7XG4gICAgcmV0dXJuIHggPT09IDAgJiB5ID09PSAwID8gdGhpcyA6IG5ldyBUcmFuc2Zvcm0odGhpcy5rLCB0aGlzLnggKyB0aGlzLmsgKiB4LCB0aGlzLnkgKyB0aGlzLmsgKiB5KTtcbiAgfSxcbiAgYXBwbHk6IGZ1bmN0aW9uKHBvaW50KSB7XG4gICAgcmV0dXJuIFtwb2ludFswXSAqIHRoaXMuayArIHRoaXMueCwgcG9pbnRbMV0gKiB0aGlzLmsgKyB0aGlzLnldO1xuICB9LFxuICBhcHBseVg6IGZ1bmN0aW9uKHgpIHtcbiAgICByZXR1cm4geCAqIHRoaXMuayArIHRoaXMueDtcbiAgfSxcbiAgYXBwbHlZOiBmdW5jdGlvbih5KSB7XG4gICAgcmV0dXJuIHkgKiB0aGlzLmsgKyB0aGlzLnk7XG4gIH0sXG4gIGludmVydDogZnVuY3Rpb24obG9jYXRpb24pIHtcbiAgICByZXR1cm4gWyhsb2NhdGlvblswXSAtIHRoaXMueCkgLyB0aGlzLmssIChsb2NhdGlvblsxXSAtIHRoaXMueSkgLyB0aGlzLmtdO1xuICB9LFxuICBpbnZlcnRYOiBmdW5jdGlvbih4KSB7XG4gICAgcmV0dXJuICh4IC0gdGhpcy54KSAvIHRoaXMuaztcbiAgfSxcbiAgaW52ZXJ0WTogZnVuY3Rpb24oeSkge1xuICAgIHJldHVybiAoeSAtIHRoaXMueSkgLyB0aGlzLms7XG4gIH0sXG4gIHJlc2NhbGVYOiBmdW5jdGlvbih4KSB7XG4gICAgcmV0dXJuIHguY29weSgpLmRvbWFpbih4LnJhbmdlKCkubWFwKHRoaXMuaW52ZXJ0WCwgdGhpcykubWFwKHguaW52ZXJ0LCB4KSk7XG4gIH0sXG4gIHJlc2NhbGVZOiBmdW5jdGlvbih5KSB7XG4gICAgcmV0dXJuIHkuY29weSgpLmRvbWFpbih5LnJhbmdlKCkubWFwKHRoaXMuaW52ZXJ0WSwgdGhpcykubWFwKHkuaW52ZXJ0LCB5KSk7XG4gIH0sXG4gIHRvU3RyaW5nOiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gXCJ0cmFuc2xhdGUoXCIgKyB0aGlzLnggKyBcIixcIiArIHRoaXMueSArIFwiKSBzY2FsZShcIiArIHRoaXMuayArIFwiKVwiO1xuICB9XG59O1xuXG5leHBvcnQgdmFyIGlkZW50aXR5ID0gbmV3IFRyYW5zZm9ybSgxLCAwLCAwKTtcblxudHJhbnNmb3JtLnByb3RvdHlwZSA9IFRyYW5zZm9ybS5wcm90b3R5cGU7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRyYW5zZm9ybShub2RlKSB7XG4gIHdoaWxlICghbm9kZS5fX3pvb20pIGlmICghKG5vZGUgPSBub2RlLnBhcmVudE5vZGUpKSByZXR1cm4gaWRlbnRpdHk7XG4gIHJldHVybiBub2RlLl9fem9vbTtcbn1cbiIsIjx0ZW1wbGF0ZT5cbiAgPGRpdj5cbiAgICA8cCBjbGFzcz1cImRlc2NyaXB0aW9uIGQtaW5saW5lLWJsb2NrXCI+e3sgdCgnaW50ZXJ2YWxzQ2hhcnQubWVzc2FnZScpIH19PC9wPlxuICAgIDxkaXYgY2xhc3M9XCJkLWlubGluZS1ibG9jayBtci0xMCBtbC0xMFwiPlxuICAgICAgPHNlbGVjdCBjbGFzcz1cIm9wdGlvblwiIHYtbW9kZWw9XCJtaW5WYWx1ZVwiIEBjaGFuZ2U9XCJyZWZyZXNoQ2hhcnQoKVwiPlxuICAgICAgICA8b3B0aW9uIDp2YWx1ZT1cIk1pblZhbHVlLlNlY29uZHNfMTBcIj4xMCB7eyB0KCdzZWMubWVzc2FnZScpIH19PC9vcHRpb24+XG4gICAgICAgIDxvcHRpb24gOnZhbHVlPVwiTWluVmFsdWUuTWluXzFcIj4xIHt7IHQoJ21pbi5tZXNzYWdlJykgfX08L29wdGlvbj5cbiAgICAgICAgPG9wdGlvbiA6dmFsdWU9XCJNaW5WYWx1ZS5NaW5fNVwiPjUge3sgdCgnMm1pbi5tZXNzYWdlJykgfX08L29wdGlvbj5cbiAgICAgICAgPG9wdGlvbiA6dmFsdWU9XCJNaW5WYWx1ZS5NaW5fMTBcIj4xMCB7eyB0KCdtaW5zLm1lc3NhZ2UnKSB9fTwvb3B0aW9uPlxuICAgICAgPC9zZWxlY3Q+XG4gICAgPC9kaXY+XG4gICAgPHAgY2xhc3M9XCJkZXNjcmlwdGlvbiBkLWlubGluZS1ibG9ja1wiPnt7IHQoJ2ludGVydmFsc0NoYXJ0LmRlc2NyaXB0aW9uJykgfX08L3A+XG4gIDwvZGl2PlxuICA8ZGl2IHJlZj1cImNoYXJ0XCIgaWQ9XCJ0aW1lSW50ZXJ2YWxDaGFydEQzXCI+PC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0IGxhbmc9XCJ0c1wiPlxuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiAnVGltZUludGVydmFsQ2hhcnQnLFxufTtcbjwvc2NyaXB0PlxuXG48c2NyaXB0IGxhbmc9XCJ0c1wiIHNldHVwPlxuaW1wb3J0IHsgb25Nb3VudGVkLCByZWYgfSBmcm9tICd2dWUnO1xuaW1wb3J0IHsgaW5qZWN0U3RvcmFnZSB9IGZyb20gJy4uL3N0b3JhZ2UvaW5qZWN0LXN0b3JhZ2UnO1xuaW1wb3J0IHtcbiAgREFSS19NT0RFX0RFRkFVTFQsXG4gIFN0b3JhZ2VEZXNlcmlhbGl6ZVBhcmFtLFxuICBTdG9yYWdlUGFyYW1zLFxufSBmcm9tICcuLi9zdG9yYWdlL3N0b3JhZ2UtcGFyYW1zJztcbmltcG9ydCB7IFRpbWVJbnRlcnZhbCB9IGZyb20gJy4uL2VudGl0eS90aW1lLWludGVydmFsJztcbmltcG9ydCB7IHRvZGF5TG9jYWxEYXRlIH0gZnJvbSAnLi4vdXRpbHMvZGF0ZSc7XG5pbXBvcnQgeyB1c2VJMThuIH0gZnJvbSAndnVlLWkxOG4nO1xuaW1wb3J0ICogYXMgZDMgZnJvbSAnZDMnO1xuaW1wb3J0IHsgY29udmVydFN0cmluZ1RpbWVJbnRlcnZhbFRvU2Vjb25kcyB9IGZyb20gJy4uL3V0aWxzL2NvbnZlcnRlcic7XG5cbmVudW0gTWluVmFsdWUge1xuICBTZWNvbmRzXzEwID0gMTAsXG4gIE1pbl8xID0gNjAsXG4gIE1pbl81ID0gMzAwLFxuICBNaW5fMTAgPSA2MDAsXG59XG5cbmNvbnN0IHsgdCB9ID0gdXNlSTE4bigpO1xuY29uc3Qgc3RvcmFnZSA9IGluamVjdFN0b3JhZ2UoKTtcblxuY29uc3QgY2hhcnQgPSByZWY8YW55PigpO1xuY29uc3QgbWluVmFsdWUgPSByZWY8bnVtYmVyPigpO1xuY29uc3QgdG9kYXlJbnRlcnZhbHMgPSByZWY8VGltZUludGVydmFsW10+KCk7XG5jb25zdCBkYXJrTW9kZSA9IHJlZigpO1xuXG50eXBlIERhdGFGb3JDaGFydCA9IHtcbiAgZG9tYWluOiBzdHJpbmc7XG4gIGludGVydmFsOiBzdHJpbmc7XG59O1xuXG5vbk1vdW50ZWQoYXN5bmMgKCkgPT4ge1xuICBtaW5WYWx1ZS52YWx1ZSA9IE1pblZhbHVlLlNlY29uZHNfMTA7XG4gIGNvbnN0IHRpbWVJbnRlcnZhbExpc3QgPSAoYXdhaXQgc3RvcmFnZS5nZXREZXNlcmlhbGl6ZUxpc3QoXG4gICAgU3RvcmFnZURlc2VyaWFsaXplUGFyYW0uVElNRUlOVEVSVkFMX0xJU1QsXG4gICkpIGFzIFRpbWVJbnRlcnZhbFtdO1xuXG4gIHRvZGF5SW50ZXJ2YWxzLnZhbHVlID0gdGltZUludGVydmFsTGlzdD8uZmlsdGVyKHggPT4geC5kYXkgPT0gdG9kYXlMb2NhbERhdGUoKSk7XG4gIGRhcmtNb2RlLnZhbHVlID0gYXdhaXQgc3RvcmFnZS5nZXRWYWx1ZShTdG9yYWdlUGFyYW1zLkRBUktfTU9ERSwgREFSS19NT0RFX0RFRkFVTFQpO1xuICByZW5kZXJDaGFydCgpO1xufSk7XG5cbmZ1bmN0aW9uIHJlbmRlckNoYXJ0KCkge1xuICBjb25zdCBkYXRhRm9yQ2hhcnQ6IERhdGFGb3JDaGFydFtdID0gW107XG4gIHRvZGF5SW50ZXJ2YWxzLnZhbHVlPy5mb3JFYWNoKGludGVydmFsID0+IHtcbiAgICBpbnRlcnZhbC5pbnRlcnZhbHMuZm9yRWFjaChpbnQgPT4ge1xuICAgICAgY29uc3QgZnJvbSA9IGludC5zcGxpdCgnLScpWzBdO1xuICAgICAgY29uc3QgdG8gPSBpbnQuc3BsaXQoJy0nKVsxXTtcbiAgICAgIGlmIChcbiAgICAgICAgY29udmVydFN0cmluZ1RpbWVJbnRlcnZhbFRvU2Vjb25kcyh0bykgLSBjb252ZXJ0U3RyaW5nVGltZUludGVydmFsVG9TZWNvbmRzKGZyb20pID5cbiAgICAgICAgbWluVmFsdWUudmFsdWUhXG4gICAgICApIHtcbiAgICAgICAgZGF0YUZvckNoYXJ0LnB1c2goeyBkb21haW46IGludGVydmFsLmRvbWFpbiwgaW50ZXJ2YWw6IGNvbnZlcnRJbnRlcnZhbChpbnQpIH0pO1xuICAgICAgfVxuICAgIH0pO1xuICB9KTtcbiAgZHJhd0ludGVydmFsQ2hhcnQoZGF0YUZvckNoYXJ0KTtcbn1cblxuZnVuY3Rpb24gcmVmcmVzaENoYXJ0KCkge1xuICBjaGFydC52YWx1ZS5pbm5lckhUTUwgPSAnJztcbiAgcmVuZGVyQ2hhcnQoKTtcbn1cblxuZnVuY3Rpb24gY29udmVydEludGVydmFsKGludGVydmFsOiBzdHJpbmcpOiBzdHJpbmcge1xuICBmdW5jdGlvbiBjb252ZXJ0KGl0ZW06IHN0cmluZ1tdKSB7XG4gICAgaXRlbSA9IGl0ZW0ubWFwKHggPT4gKHgubGVuZ3RoID09IDEgPyBgMCR7eH1gIDogeCkpO1xuICAgIHJldHVybiBpdGVtLmpvaW4oJzonKTtcbiAgfVxuXG4gIGNvbnN0IHNvdXJjZVRpbWVGcm9tID0gaW50ZXJ2YWwuc3BsaXQoJy0nKVswXS5zcGxpdCgnOicpO1xuICBjb25zdCBzb3VyY2VUaW1lVG8gPSBpbnRlcnZhbC5zcGxpdCgnLScpWzFdLnNwbGl0KCc6Jyk7XG4gIHJldHVybiBgJHtjb252ZXJ0KHNvdXJjZVRpbWVGcm9tKX0tJHtjb252ZXJ0KHNvdXJjZVRpbWVUbyl9YDtcbn1cblxuZnVuY3Rpb24gZHJhd0ludGVydmFsQ2hhcnQoZGF0YTogRGF0YUZvckNoYXJ0W10pIHtcbiAgZGF0YS5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgIGNvbnN0IGhGcm9tID0gZ2V0SG91ckZyb20oaXRlbS5pbnRlcnZhbCk7XG4gICAgY29uc3QgaFRvID0gZ2V0SG91clRvKGl0ZW0uaW50ZXJ2YWwpO1xuICAgIGlmIChoRnJvbSAhPSBoVG8pIHtcbiAgICAgIGNvbnN0IHNvdXJjZVRpbWVGcm9tID0gaXRlbS5pbnRlcnZhbC5zcGxpdCgnLScpWzBdLnNwbGl0KCc6Jyk7XG4gICAgICBjb25zdCBzb3VyY2VUaW1lVG8gPSBpdGVtLmludGVydmFsLnNwbGl0KCctJylbMV0uc3BsaXQoJzonKTtcbiAgICAgIGNvbnN0IHRpbWVUbyA9IGAke3NvdXJjZVRpbWVGcm9tWzBdfTo1OTo1OWA7XG4gICAgICBjb25zdCB0aW1lRnJvbSA9IGAke3NvdXJjZVRpbWVUb1swXX06MDA6MDBgO1xuICAgICAgZGF0YS5wdXNoKHsgZG9tYWluOiBpdGVtLmRvbWFpbiwgaW50ZXJ2YWw6IGl0ZW0uaW50ZXJ2YWwuc3BsaXQoJy0nKVswXSArICctJyArIHRpbWVUbyB9KTtcbiAgICAgIGRhdGEucHVzaCh7IGRvbWFpbjogaXRlbS5kb21haW4sIGludGVydmFsOiB0aW1lRnJvbSArICctJyArIGl0ZW0uaW50ZXJ2YWwuc3BsaXQoJy0nKVsxXSB9KTtcbiAgICB9XG4gIH0pO1xuXG4gIGNvbnN0IG1hcmdpbiA9IHsgdG9wOiAxMCwgcmlnaHQ6IDEwLCBib3R0b206IDIwLCBsZWZ0OiAyMCB9O1xuICBjb25zdCB3aWR0aCA9IGNoYXJ0LnZhbHVlLm9mZnNldFdpZHRoO1xuICBjb25zdCBoZWlnaHQgPSA0MDA7XG5cbiAgY29uc3QgdGlja0Rpc3RhbmNlID0gNC4zODtcblxuICBjb25zdCB0b29sdGlwID0gZDNcbiAgICAuc2VsZWN0KCcjdGltZUludGVydmFsQ2hhcnREMycpXG4gICAgLmFwcGVuZCgnZGl2JylcbiAgICAuc3R5bGUoJ29wYWNpdHknLCAwKVxuICAgIC5zdHlsZSgnZGlzcGxheScsICdub25lJylcbiAgICAuc3R5bGUoJ3Bvc2l0aW9uJywgJ2Fic29sdXRlJylcbiAgICAuc3R5bGUoJ2JhY2tncm91bmQtY29sb3InLCAnd2hpdGUnKVxuICAgIC5zdHlsZSgnY29sb3InLCAnYmxhY2snKVxuICAgIC5zdHlsZSgnYm9yZGVyJywgJzFweCBzb2xpZCBncmV5JylcbiAgICAuYXR0cignY2xhc3MnLCAndG9vbHRpcCcpXG4gICAgLnN0eWxlKCdib3JkZXItd2lkdGgnLCAnMXB4JylcbiAgICAuc3R5bGUoJ2JvcmRlci1yYWRpdXMnLCAnM3B4JylcbiAgICAuc3R5bGUoJ3BhZGRpbmcnLCAnNXB4Jyk7XG5cbiAgY29uc3QgbW91c2VvdmVyID0gZnVuY3Rpb24gKGU6IGFueSkge1xuICAgIHRvb2x0aXAuc3R5bGUoJ29wYWNpdHknLCAxKS5zdHlsZSgnZGlzcGxheScsICdibG9jaycpO1xuICAgIGQzLnNlbGVjdCgnLnRvb2x0aXAnKVxuICAgICAgLnN0eWxlKCdsZWZ0JywgZS5sYXllclggKyAxNSArICdweCcpXG4gICAgICAuc3R5bGUoJ3RvcCcsIGUubGF5ZXJZICsgMTUgKyAncHgnKTtcbiAgfTtcbiAgY29uc3QgbW91c2Vtb3ZlID0gZnVuY3Rpb24gKGV2ZW50OiBhbnksIGRhdGE6IGFueSkge1xuICAgIHRvb2x0aXAuaHRtbChgPGI+JHtkYXRhLmRvbWFpbn08L2I+PGJyPiR7ZGF0YS5pbnRlcnZhbH1gKTtcbiAgfTtcbiAgY29uc3QgbW91c2VsZWF2ZSA9IGZ1bmN0aW9uIChlOiBhbnkpIHtcbiAgICB0b29sdGlwLnN0eWxlKCdvcGFjaXR5JywgMCkuc3R5bGUoJ2Rpc3BsYXknLCAnbm9uZScpO1xuICB9O1xuXG4gIC8vY3JlYXRlIHRoZSBzdmdcbiAgY29uc3Qgc3ZnID0gZDNcbiAgICAuc2VsZWN0KCcjdGltZUludGVydmFsQ2hhcnREMycpXG4gICAgLmFwcGVuZCgnc3ZnJylcbiAgICAuYXR0cignd2lkdGgnLCB3aWR0aCArIG1hcmdpbi5sZWZ0ICsgbWFyZ2luLnJpZ2h0KVxuICAgIC5hdHRyKCdoZWlnaHQnLCBoZWlnaHQgKyBtYXJnaW4udG9wICsgbWFyZ2luLmJvdHRvbSlcbiAgICAuYXBwZW5kKCdnJylcbiAgICAuYXR0cigndHJhbnNmb3JtJywgYHRyYW5zbGF0ZSgke21hcmdpbi5sZWZ0fSwke21hcmdpbi50b3B9KWApO1xuXG4gIGNvbnN0IHkgPSBkMy5zY2FsZUxpbmVhcihbaGVpZ2h0LCAwXSkuZG9tYWluKFswLCA2MF0pO1xuICBjb25zdCB5QXhpcyA9IGQzLmF4aXNMZWZ0KHkpO1xuXG4gIGNvbnN0IHggPSBkMy5zY2FsZUxpbmVhcihbMCwgd2lkdGhdKS5kb21haW4oWzAsIDI0XSk7XG4gIGNvbnN0IHhBeGlzID0gZDMuYXhpc0JvdHRvbSh4KS50aWNrcygyNCk7XG5cbiAgc3ZnXG4gICAgLmFwcGVuZCgnZycpXG4gICAgLmF0dHIoJ2NsYXNzJywgJ2dyaWQnKVxuICAgIC5zdHlsZSgnY29sb3InLCBkYXJrTW9kZS52YWx1ZSA/ICcjNzk3OTc5JyA6ICcjZTVlNWU1JylcbiAgICAuYXR0cigndHJhbnNmb3JtJywgYHRyYW5zbGF0ZSgwLCAke2hlaWdodH0pYClcbiAgICAuY2FsbCh4QXhpcy50aWNrU2l6ZSgtaGVpZ2h0KSk7XG5cbiAgc3ZnXG4gICAgLmFwcGVuZCgnZycpXG4gICAgLmF0dHIoJ2NsYXNzJywgJ2dyaWQnKVxuICAgIC5zdHlsZSgnY29sb3InLCBkYXJrTW9kZS52YWx1ZSA/ICcjNzk3OTc5JyA6ICcjZTVlNWU1JylcbiAgICAuY2FsbCh5QXhpcy50aWNrU2l6ZSgtd2lkdGgpKTtcbiAgc3ZnLnNlbGVjdEFsbCgndGV4dCcpLnN0eWxlKCdmaWxsJywgJyM3OTc5NzknKTtcblxuICAvL2RyYXcgdGhlIGJhcnMsIG9mZnNldCB5IGFuZCBiYXIgaGVpZ2h0IGJhc2VkIG9uIGRhdGFcbiAgc3ZnXG4gICAgLnNlbGVjdEFsbCgnLmJhcicpXG4gICAgLmRhdGEoZGF0YSlcbiAgICAuZW50ZXIoKVxuICAgIC5hcHBlbmQoJ3JlY3QnKVxuICAgIC5zdHlsZSgnZmlsbCcsICcjNTY2OGUyJylcbiAgICAuc3R5bGUoJ2N1cnNvcicsICdwb2ludGVyJylcbiAgICAuc3R5bGUoJ3N0cm9rZS13aWR0aCcsICcxJylcbiAgICAuYXR0cignY2xhc3MnLCAnYmFyJylcbiAgICAuYXR0cigneCcsIChkYXRhOiBhbnkpID0+IHgoZ2V0SG91ckZyb20oZGF0YS5pbnRlcnZhbCkpICsgMilcbiAgICAuYXR0cignd2lkdGgnLCBjaGFydC52YWx1ZS5vZmZzZXRXaWR0aCAvIDI0IC0gNClcbiAgICAuYXR0cigneScsIChkYXRhOiBhbnkpID0+IHkoZ2V0TWludXRlc1RvKGRhdGEuaW50ZXJ2YWwpKSAtIDEpXG4gICAgLmF0dHIoJ2hlaWdodCcsIChkYXRhOiBhbnkpID0+IHtcbiAgICAgIGNvbnN0IG9mZnNldCA9IGdldE1pbnV0ZXNUbyhkYXRhLmludGVydmFsKSAtIGdldE1pbnV0ZXNGcm9tKGRhdGEuaW50ZXJ2YWwpO1xuICAgICAgaWYgKG9mZnNldCA9PSAwKSB7XG4gICAgICAgIGNvbnN0IG9mZnNldFNlY29uZHMgPSBnZXRTZWNvbmRzVG8oZGF0YS5pbnRlcnZhbCkgLSBnZXRTZWNvbmRzRnJvbShkYXRhLmludGVydmFsKTtcbiAgICAgICAgaWYgKG9mZnNldFNlY29uZHMgPD0gMykgcmV0dXJuIDA7XG4gICAgICAgIGVsc2UgcmV0dXJuIDE7XG4gICAgICB9IGVsc2UgcmV0dXJuIG9mZnNldCAqIHRpY2tEaXN0YW5jZTtcbiAgICB9KVxuICAgIC5vbignbW91c2VvdmVyJywgbW91c2VvdmVyKVxuICAgIC5vbignbW91c2Vtb3ZlJywgbW91c2Vtb3ZlKVxuICAgIC5vbignbW91c2VsZWF2ZScsIG1vdXNlbGVhdmUpO1xuXG4gIGZ1bmN0aW9uIGdldEhvdXJGcm9tKGludGVydmFsOiBzdHJpbmcpOiBudW1iZXIge1xuICAgIGNvbnN0IHRpbWUgPSBpbnRlcnZhbC5zcGxpdCgnLScpWzBdO1xuICAgIHJldHVybiBOdW1iZXIodGltZS5zcGxpdCgnOicpWzBdKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldEhvdXJUbyhpbnRlcnZhbDogc3RyaW5nKTogbnVtYmVyIHtcbiAgICB2YXIgdGltZSA9IGludGVydmFsLnNwbGl0KCctJylbMV07XG4gICAgcmV0dXJuIE51bWJlcih0aW1lLnNwbGl0KCc6JylbMF0pO1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0TWludXRlc0Zyb20oaW50ZXJ2YWw6IHN0cmluZyk6IG51bWJlciB7XG4gICAgdmFyIHRpbWUgPSBpbnRlcnZhbC5zcGxpdCgnLScpWzBdO1xuICAgIHJldHVybiBOdW1iZXIodGltZS5zcGxpdCgnOicpWzFdKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldE1pbnV0ZXNUbyhpbnRlcnZhbDogc3RyaW5nKTogbnVtYmVyIHtcbiAgICB2YXIgdGltZSA9IGludGVydmFsLnNwbGl0KCctJylbMV07XG4gICAgcmV0dXJuIE51bWJlcih0aW1lLnNwbGl0KCc6JylbMV0pO1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0U2Vjb25kc0Zyb20oaW50ZXJ2YWw6IHN0cmluZyk6IG51bWJlciB7XG4gICAgdmFyIHRpbWUgPSBpbnRlcnZhbC5zcGxpdCgnLScpWzBdO1xuICAgIHJldHVybiBOdW1iZXIodGltZS5zcGxpdCgnOicpWzJdKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldFNlY29uZHNUbyhpbnRlcnZhbDogc3RyaW5nKTogbnVtYmVyIHtcbiAgICB2YXIgdGltZSA9IGludGVydmFsLnNwbGl0KCctJylbMV07XG4gICAgcmV0dXJuIE51bWJlcih0aW1lLnNwbGl0KCc6JylbMl0pO1xuICB9XG59XG48L3NjcmlwdD5cblxuPHN0eWxlIHNjb3BlZD5cbi5ibG9jayB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgYm9yZGVyOiAxcHggcmdiKDE5NywgMTk3LCAxOTcpIHNvbGlkO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgaGVpZ2h0OiA0MHB4O1xuICB3aWR0aDogNDBweDtcbn1cblxuLmdyaWQgbGluZSB7XG4gIHN0cm9rZTogZ3JheTtcbiAgc3Ryb2tlLW9wYWNpdHk6IDAuMjtcbiAgY29sb3I6IGJsYWNrO1xufVxuPC9zdHlsZT5cbiIsIjx0ZW1wbGF0ZT5cbiAgPHAgY2xhc3M9XCJkZXNjcmlwdGlvblwiPnt7IHQoJ3RpbWVDaGFydERlc2NyaXB0aW9uLm1lc3NhZ2UnKSB9fTwvcD5cbiAgPEJhciA6ZGF0YT1cImRhdGFcIiA6b3B0aW9ucz1cIm9wdGlvbnNcIiB2LWlmPVwiaXNMb2FkZWRcIiAvPlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdCBsYW5nPVwidHNcIj5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbmFtZTogJ0hvdXJseUNoYXJ0Jyxcbn07XG48L3NjcmlwdD5cblxuPHNjcmlwdCBsYW5nPVwidHNcIiBzZXR1cD5cbmltcG9ydCB7IEJhciB9IGZyb20gJ3Z1ZS1jaGFydGpzJztcbmltcG9ydCB7XG4gIENoYXJ0IGFzIENoYXJ0SlMsXG4gIFRpdGxlLFxuICBUb29sdGlwLFxuICBMZWdlbmQsXG4gIEJhckVsZW1lbnQsXG4gIExpbmVhclNjYWxlLFxuICBDYXRlZ29yeVNjYWxlLFxufSBmcm9tICdjaGFydC5qcyc7XG5pbXBvcnQgeyBvbk1vdW50ZWQsIHJlZiB9IGZyb20gJ3Z1ZSc7XG5pbXBvcnQgeyBpbmplY3RTdG9yYWdlIH0gZnJvbSAnLi4vc3RvcmFnZS9pbmplY3Qtc3RvcmFnZSc7XG5pbXBvcnQgeyBTdG9yYWdlRGVzZXJpYWxpemVQYXJhbSB9IGZyb20gJy4uL3N0b3JhZ2Uvc3RvcmFnZS1wYXJhbXMnO1xuaW1wb3J0IHsgVGltZUludGVydmFsIH0gZnJvbSAnLi4vZW50aXR5L3RpbWUtaW50ZXJ2YWwnO1xuaW1wb3J0IHsgdG9kYXlMb2NhbERhdGUgfSBmcm9tICcuLi91dGlscy9kYXRlJztcbmltcG9ydCB7IGNvbnZlcnRIb3Vyc1RvVGltZSwgY29udmVydFN0cmluZ1RpbWVJbnRlcnZhbFRvU2Vjb25kcyB9IGZyb20gJy4uL3V0aWxzL2NvbnZlcnRlcic7XG5pbXBvcnQgeyB1c2VJMThuIH0gZnJvbSAndnVlLWkxOG4nO1xuXG5jb25zdCB7IHQgfSA9IHVzZUkxOG4oKTtcblxudHlwZSBEYXRhRm9yQ2hhcnQgPSB7XG4gIHN1bW1hcnk6IG51bWJlcjtcbiAgaG91cjogbnVtYmVyO1xuICBkb21haW5zOiBEb21haW5zSW50ZXJ2YWxbXTtcbn07XG5cbnR5cGUgRG9tYWluc0ludGVydmFsID0ge1xuICBob3VyOiBudW1iZXI7XG4gIHN1bW1hcnk6IG51bWJlcjtcbiAgZG9tYWluOiBzdHJpbmc7XG59O1xuXG5jb25zdCBzdG9yYWdlID0gaW5qZWN0U3RvcmFnZSgpO1xuXG5DaGFydEpTLnJlZ2lzdGVyKENhdGVnb3J5U2NhbGUsIExpbmVhclNjYWxlLCBCYXJFbGVtZW50LCBUaXRsZSwgVG9vbHRpcCwgTGVnZW5kKTtcblxuY29uc3Qgb3B0aW9ucyA9IHJlZjxhbnk+KCk7XG5jb25zdCBkYXRhID0gcmVmPGFueT4oKTtcbmNvbnN0IGlzTG9hZGVkID0gcmVmPGJvb2xlYW4+KCk7XG5cbmNvbnN0IG9iamVjdHM6IERhdGFGb3JDaGFydFtdID0gW107XG5jb25zdCBob3VyczogbnVtYmVyW10gPSBbXTtcblxuaXNMb2FkZWQudmFsdWUgPSBmYWxzZTtcblxuZnVuY3Rpb24gY29udmVydFRpbUludGVydmFsVG9PYmplY3QoXG4gIHRpbWVJbnRlcnZhbDogc3RyaW5nLFxuICBkb21haW46IHN0cmluZyxcbik6IERvbWFpbnNJbnRlcnZhbFtdIHwgbnVsbCB7XG4gIGNvbnN0IGFycmF5ID0gdGltZUludGVydmFsLnNwbGl0KCctJyk7XG4gIGNvbnN0IHRpbWUxID0gYXJyYXlbMF0uc3BsaXQoJzonKTtcbiAgY29uc3QgdGltZTIgPSBhcnJheVsxXS5zcGxpdCgnOicpO1xuICBpZiAodGltZTFbMF0gPT0gdGltZTJbMF0pIHtcbiAgICByZXR1cm4gW1xuICAgICAge1xuICAgICAgICBob3VyOiBOdW1iZXIodGltZTFbMF0pLFxuICAgICAgICBzdW1tYXJ5OlxuICAgICAgICAgIGNvbnZlcnRTdHJpbmdUaW1lSW50ZXJ2YWxUb1NlY29uZHMoYXJyYXlbMV0pIC1cbiAgICAgICAgICBjb252ZXJ0U3RyaW5nVGltZUludGVydmFsVG9TZWNvbmRzKGFycmF5WzBdKSxcbiAgICAgICAgZG9tYWluOiBkb21haW4sXG4gICAgICB9LFxuICAgIF07XG4gIH0gZWxzZSB7XG4gICAgY29uc3QgYXJyID0gW107XG4gICAgY29uc3QgZmlyc3RQYXJ0MSA9IGFycmF5WzBdO1xuICAgIGNvbnN0IGZpcnN0UGFydDIgPSBgJHt0aW1lMVswXX06NTk6NTlgO1xuICAgIGNvbnN0IGhvdXJGb3JGaXJzdFBhcnQgPSBmaXJzdFBhcnQxLnNwbGl0KCc6Jyk7XG4gICAgYXJyLnB1c2goe1xuICAgICAgaG91cjogTnVtYmVyKGhvdXJGb3JGaXJzdFBhcnRbMF0pLFxuICAgICAgc3VtbWFyeTpcbiAgICAgICAgY29udmVydFN0cmluZ1RpbWVJbnRlcnZhbFRvU2Vjb25kcyhmaXJzdFBhcnQyKSAtXG4gICAgICAgIGNvbnZlcnRTdHJpbmdUaW1lSW50ZXJ2YWxUb1NlY29uZHMoZmlyc3RQYXJ0MSksXG4gICAgICBkb21haW46IGRvbWFpbixcbiAgICB9KTtcbiAgICBjb25zdCBzZWNvbmRQYXJ0MSA9IGAke3RpbWUyWzBdfTowMDowMGA7XG4gICAgY29uc3Qgc2Vjb25kUGFydDIgPSBgJHt0aW1lMlswXX06JHt0aW1lMlsxXX06JHt0aW1lMlsyXX1gO1xuICAgIGNvbnN0IGhvdXJGb3JzZWNvbmRQYXJ0ID0gc2Vjb25kUGFydDEuc3BsaXQoJzonKTtcbiAgICBhcnIucHVzaCh7XG4gICAgICBob3VyOiBOdW1iZXIoaG91ckZvcnNlY29uZFBhcnRbMF0pLFxuICAgICAgc3VtbWFyeTpcbiAgICAgICAgY29udmVydFN0cmluZ1RpbWVJbnRlcnZhbFRvU2Vjb25kcyhzZWNvbmRQYXJ0MikgLVxuICAgICAgICBjb252ZXJ0U3RyaW5nVGltZUludGVydmFsVG9TZWNvbmRzKHNlY29uZFBhcnQxKSxcbiAgICAgIGRvbWFpbjogZG9tYWluLFxuICAgIH0pO1xuICAgIHJldHVybiBhcnI7XG4gIH1cbn1cblxuZnVuY3Rpb24gZmlsbERhdGEodGltZUludGVydmFsTGlzdDogVGltZUludGVydmFsW10pIHtcbiAgY29uc3QgaXRlbXMgPSB0aW1lSW50ZXJ2YWxMaXN0Py5maWx0ZXIoeCA9PiB4LmRheSA9PSB0b2RheUxvY2FsRGF0ZSgpKTtcbiAgY29uc3QgZG9tYWlucyA9IGl0ZW1zLm1hcCh4ID0+IHguZG9tYWluKTtcbiAgY29uc3QgcmVzdWx0OiBhbnlbXSA9IFtdO1xuICBjb25zdCBpbnRlcnZhbHNPYmo6IERvbWFpbnNJbnRlcnZhbFtdID0gW107XG4gIGRvbWFpbnMuZm9yRWFjaChkb21haW4gPT4ge1xuICAgIGNvbnN0IGludGVydmFscyA9IGl0ZW1zLmZpbHRlcih4ID0+IHguZG9tYWluID09IGRvbWFpbik7XG4gICAgaW50ZXJ2YWxzLmZvckVhY2goYXJyYXkgPT4ge1xuICAgICAgY29uc3QgaSA9IGFycmF5LmludGVydmFscztcbiAgICAgIGkuZm9yRWFjaCh0aW1lID0+IHtcbiAgICAgICAgY29uc3Qgb2JqcyA9IGNvbnZlcnRUaW1JbnRlcnZhbFRvT2JqZWN0KHRpbWUsIGRvbWFpbik7XG4gICAgICAgIGlmIChvYmpzICE9IG51bGwgJiYgb2Jqcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgb2Jqcy5mb3JFYWNoKG9iaiA9PiB7XG4gICAgICAgICAgICBjb25zdCBleGlzdERvbWFpbiA9IGludGVydmFsc09iai5maW5kKHggPT4geC5kb21haW4gPT0gZG9tYWluICYmIHguaG91ciA9PSBvYmouaG91cik7XG4gICAgICAgICAgICBpZiAoZXhpc3REb21haW4gIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgIGV4aXN0RG9tYWluLnN1bW1hcnkgKz0gb2JqLnN1bW1hcnk7XG4gICAgICAgICAgICB9IGVsc2UgaW50ZXJ2YWxzT2JqLnB1c2gob2JqKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG4gIH0pO1xuXG4gIGNvbnN0IHRlbXBBcnJheTogbnVtYmVyW10gPSBbXTtcbiAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IDI0OyBpbmRleCsrKSB7XG4gICAgY29uc3Qgb2JqID0gb2JqZWN0cy5maW5kKHggPT4geC5ob3VyID09IGluZGV4KTtcbiAgICBjb25zdCBpbnRlcnZhbE9iaiA9IGludGVydmFsc09iai5maWx0ZXIoeCA9PiB4LmhvdXIgPT0gaW5kZXgpO1xuICAgIGNvbnN0IHN1bW1hcnkgPVxuICAgICAgaW50ZXJ2YWxPYmoubGVuZ3RoID09IDAgPyAwIDogaW50ZXJ2YWxPYmoubWFwKHggPT4geC5zdW1tYXJ5KS5yZWR1Y2UoKGEsIGIpID0+IGEgKyBiKTtcbiAgICBpZiAob2JqID09IHVuZGVmaW5lZCkge1xuICAgICAgY29uc3QgbmV3T2JqID0ge1xuICAgICAgICBzdW1tYXJ5OiBzdW1tYXJ5LFxuICAgICAgICBob3VyOiBpbmRleCxcbiAgICAgICAgZG9tYWluczogaW50ZXJ2YWxPYmosXG4gICAgICB9O1xuICAgICAgb2JqZWN0cy5wdXNoKG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIG9iai5zdW1tYXJ5ICs9IHN1bW1hcnk7XG4gICAgICBpbnRlcnZhbE9iai5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICBvYmouZG9tYWlucy5wdXNoKGVsZW1lbnQpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgdGVtcEFycmF5LnB1c2goMCk7XG4gIH1cblxuICBvYmplY3RzLmZvckVhY2gob2JqID0+IHtcbiAgICBjb25zdCBlbXB0eUFycmF5OiBudW1iZXJbXSA9IE9iamVjdC5hc3NpZ24oW10sIHRlbXBBcnJheSk7XG4gICAgZW1wdHlBcnJheVtvYmouaG91cl0gPSBOdW1iZXIob2JqLnN1bW1hcnkgLyA2MCk7XG4gICAgcmVzdWx0LnB1c2goe1xuICAgICAgYmFja2dyb3VuZENvbG9yOiBbJyM1NjY4ZTInXSxcbiAgICAgIGRhdGE6IGVtcHR5QXJyYXksXG4gICAgfSk7XG4gIH0pO1xuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGJ1aWxkQ2hhcnQoKSB7XG4gIGNvbnN0IHRpbWVJbnRlcnZhbExpc3QgPSAoYXdhaXQgc3RvcmFnZS5nZXREZXNlcmlhbGl6ZUxpc3QoXG4gICAgU3RvcmFnZURlc2VyaWFsaXplUGFyYW0uVElNRUlOVEVSVkFMX0xJU1QsXG4gICkpIGFzIFRpbWVJbnRlcnZhbFtdO1xuICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDw9IDIzOyBpbmRleCsrKSB7XG4gICAgaG91cnMucHVzaChpbmRleCk7XG4gIH1cbiAgbGV0IG1pbnV0ZXM6IG51bWJlcltdID0gW107XG4gIGZvciAobGV0IGluZGV4ID0gMTsgaW5kZXggPCA2MDsgaW5kZXgrKykge1xuICAgIG1pbnV0ZXMucHVzaChpbmRleCk7XG4gIH1cblxuICBjb25zdCBkYXRhRm9yQ2hhcnQgPSBmaWxsRGF0YSh0aW1lSW50ZXJ2YWxMaXN0KTtcbiAgZGF0YS52YWx1ZSA9IHtcbiAgICBsYWJlbHM6IGhvdXJzLFxuICAgIGRhdGFzZXRzOiBkYXRhRm9yQ2hhcnQsXG4gIH07XG5cbiAgb3B0aW9ucy52YWx1ZSA9IHtcbiAgICByZXNwb25zaXZlOiB0cnVlLFxuICAgIG1haW50YWluQXNwZWN0UmF0aW86IGZhbHNlLFxuICAgIHBsdWdpbnM6IHtcbiAgICAgIGxlZ2VuZDoge1xuICAgICAgICBwb3NpdGlvbjogJ25vbmUnLFxuICAgICAgfSxcbiAgICAgIHRvb2x0aXA6IHtcbiAgICAgICAgY2FsbGJhY2tzOiB7XG4gICAgICAgICAgbGFiZWw6IGZ1bmN0aW9uIChjb250ZXh0OiBhbnkpIHtcbiAgICAgICAgICAgIHJldHVybiBgJHtjb250ZXh0LmxhYmVsfTowMC0ke051bWJlcihjb250ZXh0LmxhYmVsKSArIDF9OjAwICR7Y29udmVydEhvdXJzVG9UaW1lKFxuICAgICAgICAgICAgICBjb250ZXh0LnJhdyxcbiAgICAgICAgICAgICl9YDtcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9LFxuICAgIHNjYWxlczoge1xuICAgICAgeToge1xuICAgICAgICBtaW46IDAsXG4gICAgICAgIG1heDogNjAsXG4gICAgICAgIHRpY2tzOiB7XG4gICAgICAgICAgc3RlcFNpemU6IDUsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgICAgeDoge1xuICAgICAgICBzdGFja2VkOiB0cnVlLFxuICAgICAgICBtaW46IDAsXG4gICAgICAgIG1heDogMjMsXG4gICAgICB9LFxuICAgIH0sXG4gIH07XG4gIGlzTG9hZGVkLnZhbHVlID0gdHJ1ZTtcbn1cblxub25Nb3VudGVkKGFzeW5jICgpID0+IGF3YWl0IGJ1aWxkQ2hhcnQoKSk7XG48L3NjcmlwdD5cbiIsIjx0ZW1wbGF0ZT5cbiAgPGRpdiBjbGFzcz1cInNldHRpbmdzLWl0ZW1cIj5cbiAgICA8bGFiZWwgY2xhc3M9XCJ0aXRsZVwiPiB7eyB0KCdkYXNoYm9hcmQubWVzc2FnZScpIH19IDwvbGFiZWw+XG4gIDwvZGl2PlxuICA8ZGl2IGNsYXNzPVwiY2hhcnQgY2hhcnRCeUhvdXJzXCI+XG4gICAgPGRpdiBjbGFzcz1cIm10LTEwIG1iLTIwXCI+XG4gICAgICA8YnV0dG9uXG4gICAgICAgIDpjbGFzcz1cIlsnY2hhcnQtYnRuJywgY2hhcnQgPT0gVHlwZU9mQ2hhcnQuSG9ybHkgPyAnYWN0aXZlJyA6ICcnXVwiXG4gICAgICAgIEBjbGljaz1cIm9wZW5DaGFydChUeXBlT2ZDaGFydC5Ib3JseSlcIlxuICAgICAgPlxuICAgICAgICA8aW1nIGNsYXNzPVwibWwtNVwiIHNyYz1cIi4uL2Fzc2V0cy9pY29ucy9ieS1ob3Vycy5zdmdcIiBoZWlnaHQ9XCIyMlwiIC8+XG4gICAgICAgIHt7IHQoJ2J5SG91cnMubWVzc2FnZScpIH19XG4gICAgICA8L2J1dHRvbj5cbiAgICAgIDxidXR0b25cbiAgICAgICAgOmNsYXNzPVwiWydtbC0xMCcsICdjaGFydC1idG4nLCBjaGFydCA9PSBUeXBlT2ZDaGFydC5JbnRlcnZhbCA/ICdhY3RpdmUnIDogJyddXCJcbiAgICAgICAgQGNsaWNrPVwib3BlbkNoYXJ0KFR5cGVPZkNoYXJ0LkludGVydmFsKVwiXG4gICAgICA+XG4gICAgICAgIDxpbWcgY2xhc3M9XCJtbC01XCIgc3JjPVwiLi4vYXNzZXRzL2ljb25zL2J5LWludGVydmFscy5zdmdcIiBoZWlnaHQ9XCIyMlwiIC8+XG4gICAgICAgIHt7IHQoJ2ludGVydmFscy5tZXNzYWdlJykgfX1cbiAgICAgIDwvYnV0dG9uPlxuICAgIDwvZGl2PlxuICAgIDxIb3VybHlDaGFydCB2LWlmPVwiY2hhcnQgPT0gVHlwZU9mQ2hhcnQuSG9ybHlcIiAvPlxuICAgIDxUaW1lSW50ZXJ2YWxDaGFydCB2LWlmPVwiY2hhcnQgPT0gVHlwZU9mQ2hhcnQuSW50ZXJ2YWxcIiAvPlxuICA8L2Rpdj5cbiAgPGRpdiBjbGFzcz1cInRhYi1pdGVtc1wiPlxuICAgIDxUYWJMaXN0IDp0eXBlPVwiVHlwZU9mTGlzdC5EYXNoYm9hcmRcIiA6c2hvd0FsbFN0YXRzPVwiZmFsc2VcIiB2LWlmPVwiY2hhcnQgPT0gVHlwZU9mQ2hhcnQuSG9ybHlcIiAvPlxuICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQgbGFuZz1cInRzXCI+XG5leHBvcnQgZGVmYXVsdCB7XG4gIG5hbWU6ICdEYXNoYm9hcmQnLFxufTtcbjwvc2NyaXB0PlxuXG48c2NyaXB0IGxhbmc9XCJ0c1wiIHNldHVwPlxuaW1wb3J0IHsgdXNlSTE4biB9IGZyb20gJ3Z1ZS1pMThuJztcbmltcG9ydCBUaW1lSW50ZXJ2YWxDaGFydCBmcm9tICcuL1RpbWVJbnRlcnZhbENoYXJ0LnZ1ZSc7XG5pbXBvcnQgSG91cmx5Q2hhcnQgZnJvbSAnLi9Ib3VybHlDaGFydC52dWUnO1xuaW1wb3J0IFRhYkxpc3QgZnJvbSAnLi4vY29tcG9uZW50cy9UYWJMaXN0LnZ1ZSc7XG5pbXBvcnQgeyBUeXBlT2ZMaXN0IH0gZnJvbSAnLi4vdXRpbHMvZW51bXMnO1xuaW1wb3J0IHsgb25Nb3VudGVkLCByZWYgfSBmcm9tICd2dWUnO1xuXG5jb25zdCB7IHQgfSA9IHVzZUkxOG4oKTtcbmNvbnN0IGNoYXJ0ID0gcmVmPFR5cGVPZkNoYXJ0PigpO1xuXG5lbnVtIFR5cGVPZkNoYXJ0IHtcbiAgSG9ybHksXG4gIEludGVydmFsLFxufVxuXG5vbk1vdW50ZWQoKCkgPT4ge1xuICBjaGFydC52YWx1ZSA9IFR5cGVPZkNoYXJ0Lkhvcmx5O1xufSk7XG5cbmZ1bmN0aW9uIG9wZW5DaGFydCh0eXBlOiBUeXBlT2ZDaGFydCkge1xuICBjaGFydC52YWx1ZSA9IHR5cGU7XG59XG48L3NjcmlwdD5cblxuPHN0eWxlIHNjb3BlZD5cbi5jaGFydCB7XG4gIG1hcmdpbjogMjBweCAwO1xuICB3aWR0aDogODAlO1xufVxuLnRhYi1pdGVtcyB7XG4gIHdpZHRoOiA4MCU7XG4gIG1hcmdpbi10b3A6IDEwMHB4O1xufVxuLmNoYXJ0QnlIb3VycyB7XG4gIGhlaWdodDogMzkwcHg7XG59XG4uY2hhcnQtYnRuIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE5MiwgMTkyLCAxOTIpO1xuICBjb2xvcjogI2ZmZjtcbiAgYm9yZGVyLXJhZGl1czogN3B4O1xuICBoZWlnaHQ6IDM2cHg7XG4gIGxpbmUtaGVpZ2h0OiAzNXB4O1xuICBwYWRkaW5nOiAwIDIwcHg7XG4gIGJvcmRlcjogMDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIG1pbi13aWR0aDogODBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB3aWR0aDogMjAwcHg7XG59XG5cbi5jaGFydC1idG4uYWN0aXZlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzUzNzdhZiAhaW1wb3J0YW50O1xuICBjb2xvcjogd2hpdGU7XG59XG48L3N0eWxlPlxuIiwiPHRlbXBsYXRlPlxuICA8ZGl2IGNsYXNzPVwibWFpblwiPlxuICAgIDxEYXNoYm9hZCB2LWlmPVwidHlwZSA9PSBTZXR0aW5nc1RhYi5EYXNoYm9hcmRcIiAvPlxuICAgIDxXZWJzaXRlU3RhdHMgdi1pZj1cInR5cGUgPT0gU2V0dGluZ3NUYWIuV2Vic2l0ZVN0YXRzXCIgOmRvbWFpbj1cImRvbWFpbiFcIiAvPlxuICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQgbGFuZz1cInRzXCI+XG5leHBvcnQgZGVmYXVsdCB7XG4gIG5hbWU6ICdEYXNoYm9hZENvbnRhaW5lcicsXG59O1xuPC9zY3JpcHQ+XG5cbjxzY3JpcHQgbGFuZz1cInRzXCIgc2V0dXA+XG5pbXBvcnQgeyBTZXR0aW5nc1RhYiB9IGZyb20gJy4uL3V0aWxzL2VudW1zJztcbmltcG9ydCBXZWJzaXRlU3RhdHMgZnJvbSAnLi9XZWJzaXRlU3RhdHMudnVlJztcbmltcG9ydCBEYXNoYm9hZCBmcm9tICcuL0Rhc2hib2FkLnZ1ZSc7XG5cbmRlZmluZVByb3BzPHtcbiAgdHlwZTogU2V0dGluZ3NUYWI7XG4gIGRvbWFpbjogc3RyaW5nIHwgdW5kZWZpbmVkO1xufT4oKTtcbjwvc2NyaXB0PlxuXG48c3R5bGUgc2NvcGVkPlxuLm1haW4ge1xuICB3aWR0aDogODAlO1xuICBtYXJnaW46IGF1dG87XG59XG48L3N0eWxlPlxuIiwiZXhwb3J0IGRlZmF1bHQgXCJfX1ZJVEVfQVNTRVRfXzcxNzk2ZjAyX19cIiIsIjx0ZW1wbGF0ZT5cbiAgPGRpdj5cbiAgICA8cCBjbGFzcz1cInRpdGxlXCI+XG4gICAgICB7eyB0KCdlbmpveS5tZXNzYWdlJykgfX1cbiAgICA8L3A+XG5cbiAgICA8cD5cbiAgICAgIHt7IHQoJ2NhbkRvbmF0ZS5tZXNzYWdlJykgfX1cbiAgICA8L3A+XG5cbiAgICA8ZGl2IGNsYXNzPVwibXQtMzBcIj5cbiAgICAgIDxwPnt7IHQoJ2NvaW4ubWVzc2FnZScpIH19IDxzcGFuIGNsYXNzPVwiZm9udC1ib2xkXCI+IFVTRFQgPC9zcGFuPjwvcD5cbiAgICAgIDxwPnt7IHQoJ2NoYWluLm1lc3NhZ2UnKSB9fTxzcGFuIGNsYXNzPVwiZm9udC1ib2xkXCI+IEV0aGVyZXVtIChFUkMyMCkgPC9zcGFuPjwvcD5cbiAgICAgIDxwPlxuICAgICAgICB7eyB0KCdhZGRyZXNzLm1lc3NhZ2UnKSB9fVxuICAgICAgICA8c3BhbiBjbGFzcz1cImZvbnQtYm9sZFwiPiAweDQyN2EyMmUxZjRiYTgxMzUxYzIyNDY1ZmFmNmNmY2Y2MDk1NTgzZDEgPC9zcGFuPlxuICAgICAgPC9wPlxuICAgIDwvZGl2PlxuXG4gICAgPGltZyBjbGFzcz1cIm10LTE1XCIgc3JjPVwiLi4vYXNzZXRzL2ljb25zL2RvbmF0aW9uLXFyLnBuZ1wiIC8+XG5cbiAgICA8cCBjbGFzcz1cImZvbnQtYm9sZCBtdC0zMFwiPlxuICAgICAge3sgdCgndGhhbmtzLm1lc3NhZ2UnKSB9fVxuICAgIDwvcD5cbiAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0IGxhbmc9XCJ0c1wiPlxuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiAnRG9uYXRpb24nLFxufTtcbjwvc2NyaXB0PlxuXG48c2NyaXB0IGxhbmc9XCJ0c1wiIHNldHVwPlxuaW1wb3J0IHsgdXNlSTE4biB9IGZyb20gJ3Z1ZS1pMThuJztcbmNvbnN0IHsgdCB9ID0gdXNlSTE4bigpO1xuPC9zY3JpcHQ+XG5cbjxzdHlsZSBzY29wZWQ+XG5wIHtcbiAgZm9udC1zaXplOiAxNXB4O1xufVxuLnRpdGxlIHtcbiAgZm9udC1zaXplOiAxOHB4ICFpbXBvcnRhbnQ7XG59XG48L3N0eWxlPlxuIiwiPHRlbXBsYXRlPlxuICA8bm90aWZpY2F0aW9ucyBwb3NpdGlvbj1cImJvdHRvbSByaWdodFwiIC8+XG4gIDxkaXYgY2xhc3M9XCJzZXR0aW5ncy10YWJzXCI+XG4gICAgPGRpdiBjbGFzcz1cImhlYWRlci1ibG9ja1wiPlxuICAgICAgPGltZyBjbGFzcz1cImQtaW5saW5lLWJsb2NrIGxvZ29cIiBoZWlnaHQ9XCIzMFwiIHNyYz1cIi4uL2Fzc2V0cy9pY29ucy80OHg0OC5wbmdcIiAvPlxuICAgICAgPHAgY2xhc3M9XCJkLWlubGluZS1ibG9jayB0aXRsZVwiPldlYiBBY3Rpdml0eSBUaW1lIFRyYWNrZXI8L3A+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cInNldHRpbmdzLXRhYiBtdC0yMFwiPlxuICAgICAgPGlucHV0XG4gICAgICAgIHR5cGU9XCJyYWRpb1wiXG4gICAgICAgIGlkPVwidGltZUludGVydmFsQ2hhcnQtdGFiXCJcbiAgICAgICAgbmFtZT1cInNldHRpbmdzLWdyb3VwXCJcbiAgICAgICAgOmNoZWNrZWQ9XCJzZWxlY3RlZFRhYiA9PSBTZXR0aW5nc1RhYi5EYXNoYm9hcmQgfHwgc2VsZWN0ZWRUYWIgPT0gU2V0dGluZ3NUYWIuV2Vic2l0ZVN0YXRzXCJcbiAgICAgICAgdi1vbjpjaGFuZ2U9XCJzZWxlY3RUYWIoU2V0dGluZ3NUYWIuRGFzaGJvYXJkKVwiXG4gICAgICAvPlxuICAgICAgPGxhYmVsIG5hbWU9XCJ0YWJOYW1lXCIgZm9yPVwidGltZUludGVydmFsQ2hhcnQtdGFiXCJcbiAgICAgICAgPjxpbWcgc3JjPVwiLi4vYXNzZXRzL2ljb25zL3MtZGFzaGJvYXJkLnN2Z1wiIGhlaWdodD1cIjMwXCIgLz57e1xuICAgICAgICAgIHQoJ2Rhc2hib2FyZC5tZXNzYWdlJylcbiAgICAgICAgfX08L2xhYmVsXG4gICAgICA+XG5cbiAgICAgIDxkaXYgY2xhc3M9XCJzZXR0aW5ncy1jb250ZW50XCI+XG4gICAgICAgIDxEYXNoYm9hZENvbnRhaW5lclxuICAgICAgICAgIHYtaWY9XCJzZWxlY3RlZFRhYiA9PSBTZXR0aW5nc1RhYi5EYXNoYm9hcmQgfHwgc2VsZWN0ZWRUYWIgPT0gU2V0dGluZ3NUYWIuV2Vic2l0ZVN0YXRzXCJcbiAgICAgICAgICA6dHlwZT1cInNlbGVjdGVkVGFiXCJcbiAgICAgICAgICA6ZG9tYWluPVwic2VsZWN0ZWRXZWJzaXRlXCJcbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuXG4gICAgPGRpdiBjbGFzcz1cInNldHRpbmdzLXRhYlwiPlxuICAgICAgPGlucHV0XG4gICAgICAgIHR5cGU9XCJyYWRpb1wiXG4gICAgICAgIGlkPVwid2hpdGUtbGlzdC10YWJcIlxuICAgICAgICBuYW1lPVwic2V0dGluZ3MtZ3JvdXBcIlxuICAgICAgICA6Y2hlY2tlZD1cInNlbGVjdGVkVGFiID09IFNldHRpbmdzVGFiLldoaXRlTGlzdFwiXG4gICAgICAgIHYtb246Y2hhbmdlPVwic2VsZWN0VGFiKFNldHRpbmdzVGFiLldoaXRlTGlzdClcIlxuICAgICAgLz5cbiAgICAgIDxsYWJlbCBuYW1lPVwidGFiTmFtZVwiIGZvcj1cIndoaXRlLWxpc3QtdGFiXCJcbiAgICAgICAgPjxpbWcgc3JjPVwiLi4vYXNzZXRzL2ljb25zL3Mtd2hpdGVsaXN0LnN2Z1wiIGhlaWdodD1cIjMwXCIgLz57e1xuICAgICAgICAgIHQoJ3doaXRlTGlzdFNldHRpbmdzLm1lc3NhZ2UnKVxuICAgICAgICB9fTwvbGFiZWxcbiAgICAgID5cblxuICAgICAgPGRpdiBjbGFzcz1cInNldHRpbmdzLWNvbnRlbnRcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cIm1haW5cIj5cbiAgICAgICAgICA8V2hpdGVMaXN0IHYtaWY9XCJzZWxlY3RlZFRhYiA9PSBTZXR0aW5nc1RhYi5XaGl0ZUxpc3RcIiAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuXG4gICAgPGRpdiBjbGFzcz1cInNldHRpbmdzLXRhYlwiPlxuICAgICAgPGlucHV0XG4gICAgICAgIHR5cGU9XCJyYWRpb1wiXG4gICAgICAgIGlkPVwibGltaXRzLXRhYlwiXG4gICAgICAgIG5hbWU9XCJzZXR0aW5ncy1ncm91cFwiXG4gICAgICAgIDpjaGVja2VkPVwic2VsZWN0ZWRUYWIgPT0gU2V0dGluZ3NUYWIuTGltaXRzXCJcbiAgICAgICAgdi1vbjpjaGFuZ2U9XCJzZWxlY3RUYWIoU2V0dGluZ3NUYWIuTGltaXRzKVwiXG4gICAgICAvPlxuICAgICAgPGxhYmVsIG5hbWU9XCJ0YWJOYW1lXCIgZm9yPVwibGltaXRzLXRhYlwiXG4gICAgICAgID48aW1nIHNyYz1cIi4uL2Fzc2V0cy9pY29ucy9zLWxpbWl0cy5zdmdcIiBoZWlnaHQ9XCIzMFwiIC8+e3tcbiAgICAgICAgICB0KCdsaW1pdHNTZXR0aW5ncy5tZXNzYWdlJylcbiAgICAgICAgfX08L2xhYmVsXG4gICAgICA+XG5cbiAgICAgIDxkaXYgY2xhc3M9XCJzZXR0aW5ncy1jb250ZW50XCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJtYWluXCI+XG4gICAgICAgICAgPExpbWl0cyB2LWlmPVwic2VsZWN0ZWRUYWIgPT0gU2V0dGluZ3NUYWIuTGltaXRzXCIgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwic2V0dGluZ3MtdGFiXCI+XG4gICAgICA8aW5wdXRcbiAgICAgICAgdHlwZT1cInJhZGlvXCJcbiAgICAgICAgaWQ9XCJub3RpZmljYXRpb24tdGFiXCJcbiAgICAgICAgbmFtZT1cInNldHRpbmdzLWdyb3VwXCJcbiAgICAgICAgOmNoZWNrZWQ9XCJzZWxlY3RlZFRhYiA9PSBTZXR0aW5nc1RhYi5Ob3RpZmljYXRpb25zXCJcbiAgICAgICAgdi1vbjpjaGFuZ2U9XCJzZWxlY3RUYWIoU2V0dGluZ3NUYWIuTm90aWZpY2F0aW9ucylcIlxuICAgICAgLz5cbiAgICAgIDxsYWJlbCBuYW1lPVwidGFiTmFtZVwiIGZvcj1cIm5vdGlmaWNhdGlvbi10YWJcIlxuICAgICAgICA+PGltZyBzcmM9XCIuLi9hc3NldHMvaWNvbnMvcy1ub3RpZmljYXRpb25zLnN2Z1wiIGhlaWdodD1cIjMwXCIgLz57e1xuICAgICAgICAgIHQoJ25vdGlmaWNhdGlvbnNTZXR0aW5ncy5tZXNzYWdlJylcbiAgICAgICAgfX08L2xhYmVsXG4gICAgICA+XG5cbiAgICAgIDxkaXYgY2xhc3M9XCJzZXR0aW5ncy1jb250ZW50XCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJtYWluXCI+XG4gICAgICAgICAgPERhaWx5Tm90aWZpY2F0aW9ucyB2LWlmPVwic2VsZWN0ZWRUYWIgPT0gU2V0dGluZ3NUYWIuTm90aWZpY2F0aW9uc1wiIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG5cbiAgICA8ZGl2IGNsYXNzPVwic2V0dGluZ3MtdGFiXCI+XG4gICAgICA8aW5wdXRcbiAgICAgICAgdHlwZT1cInJhZGlvXCJcbiAgICAgICAgaWQ9XCJwb21vZG9yby10YWJcIlxuICAgICAgICBuYW1lPVwic2V0dGluZ3MtZ3JvdXBcIlxuICAgICAgICA6Y2hlY2tlZD1cInNlbGVjdGVkVGFiID09IFNldHRpbmdzVGFiLlBvbW9kb3JvXCJcbiAgICAgICAgdi1vbjpjaGFuZ2U9XCJzZWxlY3RUYWIoU2V0dGluZ3NUYWIuUG9tb2Rvcm8pXCJcbiAgICAgIC8+XG4gICAgICA8bGFiZWwgbmFtZT1cInRhYk5hbWVcIiBmb3I9XCJwb21vZG9yby10YWJcIlxuICAgICAgICA+PGltZyBzcmM9XCIuLi9hc3NldHMvaWNvbnMvcG9tb2Rvcm8uc3ZnXCIgaGVpZ2h0PVwiMzBcIiAvPnt7XG4gICAgICAgICAgdCgncG9tb2Rvcm9Nb2RlLm1lc3NhZ2UnKVxuICAgICAgICB9fTwvbGFiZWxcbiAgICAgID5cblxuICAgICAgPGRpdiBjbGFzcz1cInNldHRpbmdzLWNvbnRlbnRcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cIm1haW5cIj5cbiAgICAgICAgICA8UG9tb2Rvcm8gdi1pZj1cInNlbGVjdGVkVGFiID09IFNldHRpbmdzVGFiLlBvbW9kb3JvXCIgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cblxuICAgIDxkaXYgY2xhc3M9XCJzZXR0aW5ncy10YWJcIj5cbiAgICAgIDxpbnB1dFxuICAgICAgICB0eXBlPVwicmFkaW9cIlxuICAgICAgICBpZD1cImdlbmVyYWwtdGFiXCJcbiAgICAgICAgbmFtZT1cInNldHRpbmdzLWdyb3VwXCJcbiAgICAgICAgOmNoZWNrZWQ9XCJzZWxlY3RlZFRhYiA9PSBTZXR0aW5nc1RhYi5HZW5lcmFsU2V0dGluZ3NcIlxuICAgICAgICB2LW9uOmNoYW5nZT1cInNlbGVjdFRhYihTZXR0aW5nc1RhYi5HZW5lcmFsU2V0dGluZ3MpXCJcbiAgICAgIC8+XG4gICAgICA8bGFiZWwgbmFtZT1cInRhYk5hbWVcIiBmb3I9XCJnZW5lcmFsLXRhYlwiXG4gICAgICAgID48aW1nIHNyYz1cIi4uL2Fzc2V0cy9pY29ucy9zLXNldHRpbmdzLnN2Z1wiIGhlaWdodD1cIjMwXCIgLz57e1xuICAgICAgICAgIHQoJ2dlbmVyYWxTZXR0aW5ncy5tZXNzYWdlJylcbiAgICAgICAgfX08L2xhYmVsXG4gICAgICA+XG5cbiAgICAgIDxkaXYgY2xhc3M9XCJzZXR0aW5ncy1jb250ZW50XCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJtYWluXCI+XG4gICAgICAgICAgPEdlbmVyYWxTZXR0aW5ncyB2LWlmPVwic2VsZWN0ZWRUYWIgPT0gU2V0dGluZ3NUYWIuR2VuZXJhbFNldHRpbmdzXCIgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cblxuICAgIDxkaXYgY2xhc3M9XCJzZXR0aW5ncy10YWJcIj5cbiAgICAgIDxpbnB1dFxuICAgICAgICB0eXBlPVwicmFkaW9cIlxuICAgICAgICBpZD1cImFib3V0LXRhYlwiXG4gICAgICAgIG5hbWU9XCJzZXR0aW5ncy1ncm91cFwiXG4gICAgICAgIDpjaGVja2VkPVwic2VsZWN0ZWRUYWIgPT0gU2V0dGluZ3NUYWIuQWJvdXRcIlxuICAgICAgICB2LW9uOmNoYW5nZT1cInNlbGVjdFRhYihTZXR0aW5nc1RhYi5BYm91dClcIlxuICAgICAgLz5cbiAgICAgIDxsYWJlbCBjbGFzcz1cImFib3V0XCIgbmFtZT1cInRhYk5hbWVcIiBmb3I9XCJhYm91dC10YWJcIlxuICAgICAgICA+PGltZyBzcmM9XCIuLi9hc3NldHMvaWNvbnMvcy1hYm91dC5zdmdcIiBoZWlnaHQ9XCIzMFwiIC8+e3tcbiAgICAgICAgICB0KCdhYm91dFNldHRpbmdzLm1lc3NhZ2UnKVxuICAgICAgICB9fTwvbGFiZWxcbiAgICAgID5cblxuICAgICAgPGRpdiBjbGFzcz1cInNldHRpbmdzLWNvbnRlbnRcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cIm1haW5cIj5cbiAgICAgICAgICA8QWJvdXQgdi1pZj1cInNlbGVjdGVkVGFiID09IFNldHRpbmdzVGFiLkFib3V0XCIgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cblxuICAgIDxkaXYgY2xhc3M9XCJzZXR0aW5ncy10YWJcIj5cbiAgICAgIDxpbnB1dFxuICAgICAgICB0eXBlPVwicmFkaW9cIlxuICAgICAgICBpZD1cImRvbmF0ZS10YWJcIlxuICAgICAgICBuYW1lPVwic2V0dGluZ3MtZ3JvdXBcIlxuICAgICAgICA6Y2hlY2tlZD1cInNlbGVjdGVkVGFiID09IFNldHRpbmdzVGFiLkRvbmF0ZVwiXG4gICAgICAgIHYtb246Y2hhbmdlPVwic2VsZWN0VGFiKFNldHRpbmdzVGFiLkRvbmF0ZSlcIlxuICAgICAgLz5cbiAgICAgIDxsYWJlbCBuYW1lPVwidGFiTmFtZVwiIGZvcj1cImRvbmF0ZS10YWJcIiBjbGFzcz1cImRvbmF0ZVwiXG4gICAgICAgID48aW1nIHNyYz1cIi4uL2Fzc2V0cy9pY29ucy9kb25hdGUucG5nXCIgaGVpZ2h0PVwiMzBcIiAvPnt7IHQoJ2RvbmF0ZS5tZXNzYWdlJykgfX08L2xhYmVsXG4gICAgICA+XG5cbiAgICAgIDxkaXYgY2xhc3M9XCJzZXR0aW5ncy1jb250ZW50XCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJtYWluXCI+XG4gICAgICAgICAgPERvbmF0aW9uIHYtaWY9XCJzZWxlY3RlZFRhYiA9PSBTZXR0aW5nc1RhYi5Eb25hdGVcIiAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuXG4gICAgPFByb21vQ2xlYW5Zb3V0dWJlTW9kYWwgLz5cbiAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0IGxhbmc9XCJ0c1wiIHNldHVwPlxuaW1wb3J0IHsgb25Nb3VudGVkLCByZWYsIHdhdGNoIH0gZnJvbSAndnVlJztcbmltcG9ydCB7IHVzZUkxOG4gfSBmcm9tICd2dWUtaTE4bic7XG5pbXBvcnQgR2VuZXJhbFNldHRpbmdzIGZyb20gJy4uL2NvbXBvbmVudHMvR2VuZXJhbFNldHRpbmdzLnZ1ZSc7XG5pbXBvcnQgUHJvbW9DbGVhbllvdXR1YmVNb2RhbCBmcm9tICcuLi9jb21wb25lbnRzL1Byb21vQ2xlYW5Zb3V0dWJlTW9kYWwudnVlJztcbmltcG9ydCBXaGl0ZUxpc3QgZnJvbSAnLi4vY29tcG9uZW50cy9XaGl0ZUxpc3QudnVlJztcbmltcG9ydCBMaW1pdHMgZnJvbSAnLi4vY29tcG9uZW50cy9MaW1pdHMudnVlJztcbmltcG9ydCBEYWlseU5vdGlmaWNhdGlvbnMgZnJvbSAnLi4vY29tcG9uZW50cy9Ob3RpZmljYXRpb25zLnZ1ZSc7XG5pbXBvcnQgUG9tb2Rvcm8gZnJvbSAnLi4vY29tcG9uZW50cy9Qb21vZG9yby52dWUnO1xuaW1wb3J0IEFib3V0IGZyb20gJy4uL2NvbXBvbmVudHMvQWJvdXQudnVlJztcbmltcG9ydCB7IFNldHRpbmdzVGFiIH0gZnJvbSAnLi4vdXRpbHMvZW51bXMnO1xuaW1wb3J0IERhc2hib2FkQ29udGFpbmVyIGZyb20gJy4uL2NvbXBvbmVudHMvRGFzaGJvYWRDb250YWluZXIudnVlJztcbmltcG9ydCB7IHVzZUV4dGVuc2lvblBhZ2UgfSBmcm9tICcuLi9jb21wb3NpdGlvbnMvdXNlRXh0ZW5zaW9uUGFnZSc7XG5pbXBvcnQgeyBnZXRFbnVtVmFsdWVUYWIgfSBmcm9tICcuLi91dGlscy9leHRlbnNpb24tdGFicyc7XG5pbXBvcnQgeyBhcHBseURhcmtNb2RlIH0gZnJvbSAnLi4vdXRpbHMvZGFyay1tb2RlJztcbmltcG9ydCB7IGluamVjdFN0b3JhZ2UgfSBmcm9tICcuLi9zdG9yYWdlL2luamVjdC1zdG9yYWdlJztcbmltcG9ydCB7IFN0b3JhZ2VQYXJhbXMsIERBUktfTU9ERV9ERUZBVUxUIH0gZnJvbSAnLi4vc3RvcmFnZS9zdG9yYWdlLXBhcmFtcyc7XG5pbXBvcnQgRG9uYXRpb24gZnJvbSAnLi4vY29tcG9uZW50cy9Eb25hdGlvbi52dWUnO1xuXG5jb25zdCB7IHQgfSA9IHVzZUkxOG4oKTtcbmNvbnN0IGV4dGVuc2lvblBhZ2UgPSB1c2VFeHRlbnNpb25QYWdlKCk7XG5jb25zdCBzZXR0aW5nc1N0b3JhZ2UgPSBpbmplY3RTdG9yYWdlKCk7XG5cbmNvbnN0IHNlbGVjdGVkVGFiID0gcmVmPFNldHRpbmdzVGFiPigpO1xuY29uc3QgY3VycmVudFVybCA9IHJlZihuZXcgVVJMKGxvY2F0aW9uLmhyZWYpKTtcbmNvbnN0IHNlbGVjdGVkV2Vic2l0ZSA9IHJlZjxzdHJpbmc+KCk7XG5jb25zdCBkYXJrTW9kZSA9IHJlZjxib29sZWFuPigpO1xuXG53YXRjaChjdXJyZW50VXJsLCAoKSA9PiB7XG4gIGdldEN1cnJlbnRUYWIoKTtcbn0pO1xuXG5vbk1vdW50ZWQoYXN5bmMgKCkgPT4ge1xuICBkYXJrTW9kZS52YWx1ZSA9IGF3YWl0IHNldHRpbmdzU3RvcmFnZS5nZXRWYWx1ZShTdG9yYWdlUGFyYW1zLkRBUktfTU9ERSwgREFSS19NT0RFX0RFRkFVTFQpO1xuICBhcHBseURhcmtNb2RlKGRhcmtNb2RlLnZhbHVlISk7XG4gIGdldEN1cnJlbnRUYWIoKTtcbn0pO1xuXG5mdW5jdGlvbiBnZXRDdXJyZW50VGFiKCkge1xuICBjb25zdCB0YWJOYW1lID0gY3VycmVudFVybC52YWx1ZS5zZWFyY2hQYXJhbXMuZ2V0KCd0YWInKTtcbiAgaWYgKHRhYk5hbWUgIT0gbnVsbCAmJiB0YWJOYW1lICE9ICcnKSB7XG4gICAgc2VsZWN0ZWRUYWIudmFsdWUgPSBnZXRFbnVtVmFsdWVUYWIodGFiTmFtZSk7XG4gICAgY29uc3QgZG9tYWluID0gY3VycmVudFVybC52YWx1ZS5zZWFyY2hQYXJhbXMuZ2V0KCd3ZWJzaXRlJyk7XG4gICAgaWYgKHNlbGVjdGVkVGFiLnZhbHVlID09IFNldHRpbmdzVGFiLldlYnNpdGVTdGF0cykge1xuICAgICAgaWYgKGRvbWFpbiAhPSBudWxsICYmIGRvbWFpbiAhPSAnJykgc2VsZWN0ZWRXZWJzaXRlLnZhbHVlID0gZG9tYWluO1xuICAgICAgZWxzZSBzZWxlY3RlZFRhYi52YWx1ZSA9IFNldHRpbmdzVGFiLkRhc2hib2FyZDtcbiAgICB9IGVsc2UgaWYgKGRvbWFpbiAhPSBudWxsICYmIGRvbWFpbiAhPSAnJykge1xuICAgICAgd2luZG93Lmhpc3RvcnkucmVwbGFjZVN0YXRlKFxuICAgICAgICBsb2NhdGlvbi5ocmVmLFxuICAgICAgICBkb2N1bWVudC50aXRsZSxcbiAgICAgICAgbG9jYXRpb24uaHJlZi5yZXBsYWNlKGAmd2Vic2l0ZT0ke2RvbWFpbn1gLCAnJyksXG4gICAgICApO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBzZWxlY3RUYWIodmFsdWU6IFNldHRpbmdzVGFiKSB7XG4gIHNlbGVjdGVkVGFiLnZhbHVlID0gdmFsdWU7XG4gIGV4dGVuc2lvblBhZ2UudXBkYXRlVGFiKHZhbHVlKTtcbiAgY3VycmVudFVybC52YWx1ZSA9IG5ldyBVUkwobG9jYXRpb24uaHJlZik7XG59XG48L3NjcmlwdD5cblxuPHN0eWxlIHNjb3BlZD5cbi5tYWluIHtcbiAgd2lkdGg6IDgwJTtcbiAgbWFyZ2luOiBhdXRvO1xufVxuLmhlYWRlci1ibG9jayB7XG4gIGJhY2tncm91bmQtY29sb3I6IHVuc2V0ICFpbXBvcnRhbnQ7XG59XG4uaGVhZGVyLWJsb2NrIC50aXRsZSB7XG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc2l6ZTogMTVweDtcbn1cbi5oZWFkZXItYmxvY2sgLmxvZ28ge1xuICBtYXJnaW46IDEwcHggMTBweCAxMHB4IDE1cHg7XG59XG4udGFiLXNlcGFyYXRvciB7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICBmb250LXNpemU6IDEzcHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG4uYWJvdXQge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGJvdHRvbTogMjBweDtcbn1cbi5kb25hdGUge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGJvdHRvbTogNzVweDtcbn1cbjwvc3R5bGU+XG4iLCJpbXBvcnQgU2V0dGluZ3MgZnJvbSAnLi9wYWdlcy9EYXNoYm9hcmQudnVlJztcbmltcG9ydCBOb3RpZmljYXRpb25zIGZyb20gJ0BreXZnL3Z1ZTMtbm90aWZpY2F0aW9uJztcbmltcG9ydCBWdWVEYXRlUGlja2VyIGZyb20gJ0B2dWVwaWMvdnVlLWRhdGVwaWNrZXInO1xuaW1wb3J0ICdAdnVlcGljL3Z1ZS1kYXRlcGlja2VyL2Rpc3QvbWFpbi5jc3MnO1xuaW1wb3J0IHsgY3JlYXRlQXBwIH0gZnJvbSAndnVlJztcbmltcG9ydCBpMThuIGZyb20gJy4vcGx1Z2lucy9pMThuJztcblxuY29uc3QgYXBwID0gY3JlYXRlQXBwKFNldHRpbmdzKTtcbmFwcC51c2UoTm90aWZpY2F0aW9ucyk7XG5hcHAudXNlKGkxOG4pO1xuYXBwLmNvbXBvbmVudCgnVnVlRGF0ZVBpY2tlcicsIFZ1ZURhdGVQaWNrZXIpO1xuYXBwLm1vdW50KCdib2R5Jyk7XG4iXSwibmFtZXMiOlsieSIsImEiLCJnIiwieCIsIiQiLCJUIiwicCIsImIiLCJrIiwiXyIsIkIiLCJEIiwiTiIsIkgiLCJfX2RlZmF1bHRfXyIsInVzZU5vdGlmaWNhdGlvbiIsIl9jcmVhdGVFbGVtZW50Vk5vZGUiLCJfaG9pc3RlZF8xIiwiX2hvaXN0ZWRfMiIsIl91bnJlZiIsIl9ob2lzdGVkXzMiLCJfdG9EaXNwbGF5U3RyaW5nIiwiX2hvaXN0ZWRfNCIsIl9ob2lzdGVkXzUiLCJfaG9pc3RlZF82IiwiX2hvaXN0ZWRfNyIsIl9ob2lzdGVkXzgiLCJfaG9pc3RlZF85IiwiX2hvaXN0ZWRfMTAiLCJfaG9pc3RlZF8xMSIsIl9ob2lzdGVkXzEyIiwiX2hvaXN0ZWRfMTMiLCJfaG9pc3RlZF8xNCIsIl9ob2lzdGVkXzE1IiwiX2hvaXN0ZWRfMTYiLCJfaG9pc3RlZF8xNyIsIl9ob2lzdGVkXzE4IiwiX2hvaXN0ZWRfMTkiLCJfaG9pc3RlZF8yMCIsIl9ob2lzdGVkXzIxIiwiX2hvaXN0ZWRfMjIiLCJfaG9pc3RlZF8yMyIsIl9ob2lzdGVkXzI0IiwiX2NyZWF0ZVZOb2RlIiwiX2hvaXN0ZWRfMjUiLCJfaG9pc3RlZF8yNyIsIl9ob2lzdGVkXzI4IiwiX2hvaXN0ZWRfMjkiLCJfaG9pc3RlZF8zMSIsIl9ob2lzdGVkXzMyIiwiX2hvaXN0ZWRfMzMiLCJfaG9pc3RlZF8zNiIsIl9ob2lzdGVkXzM3IiwiX2hvaXN0ZWRfMzgiLCJfb3BlbkJsb2NrIiwiX2NyZWF0ZUVsZW1lbnRCbG9jayIsIl9ob2lzdGVkXzM5IiwiX2hvaXN0ZWRfNDAiLCJfaW1wb3J0c18wIiwiX0ZyYWdtZW50IiwiX3JlbmRlckxpc3QiLCJ0aW1lIiwiX2ltcG9ydHNfMSIsIl9jcmVhdGVUZXh0Vk5vZGUiLCJfY3JlYXRlQmxvY2siLCJfbm9ybWFsaXplQ2xhc3MiLCJBcHAiLCJhcHAiLCJOb0RhdGFCeURheXMiLCJhc2NlbmRpbmciLCJmIiwiZCIsInplcm8iLCJsZWZ0IiwicmlnaHQiLCJjZW50ZXIiLCJudW1iZXIiLCJzdGFydCIsInRpY2tzIiwidGlja0Zvcm1hdCIsImF4aXMiLCJmb3JtYXQiLCJpZGVudGl0eSIsInNlbGVjdGlvbiIsInBhcnNlVHlwZW5hbWVzIiwiZ2V0Iiwic2V0IiwiY29weSIsImRvY3VtZW50Iiwic2VsZWN0b3IiLCJzZWxlY3QiLCJtIiwiaiIsIlNlbGVjdGlvbiIsImRhdHVtIiwiY29uc3RhbnQiLCJhdHRyUmVtb3ZlIiwiYXR0clJlbW92ZU5TIiwiYXR0ckNvbnN0YW50IiwiYXR0ckNvbnN0YW50TlMiLCJhdHRyRnVuY3Rpb24iLCJ2IiwiYXR0ckZ1bmN0aW9uTlMiLCJzdHlsZVJlbW92ZSIsInN0eWxlQ29uc3RhbnQiLCJzdHlsZUZ1bmN0aW9uIiwidGV4dENvbnN0YW50IiwidGV4dEZ1bmN0aW9uIiwiY3JlYXRlIiwid2luZG93IiwiaCIsImxpbmVhciIsImNvbG9yIiwicmdiIiwiY29sb3JSZ2IiLCJ2YWx1ZSIsInEiLCJpIiwic3RyaW5nIiwidGltZW91dCIsIm5vdyIsImlkIiwic2NoZWR1bGUiLCJlbXB0eSIsImludGVycG9sYXRlIiwiaW50ZXJwb2xhdGVUcmFuc2Zvcm0iLCJjaGlsZHJlbiIsImluaGVyaXQiLCJzdHlsZSIsInJlbW92ZSIsImVhc2VDdWJpY0luT3V0IiwiZXhwb25lbnQiLCJsb2NhbGUiLCJmb3JtYXRQcmVmaXgiLCJpbnRlcnBvbGF0ZVZhbHVlIiwibG9jYXRpb24iLCJNaW5WYWx1ZSIsImludGVydmFsIiwiZDMuc2VsZWN0IiwiZGF0YSIsImQzLnNjYWxlTGluZWFyIiwiZDMuYXhpc0xlZnQiLCJkMy5heGlzQm90dG9tIiwiQ2hhcnRKUyIsIlRpdGxlIiwiVG9vbHRpcCIsIkxlZ2VuZCIsImFycmF5IiwiVHlwZU9mQ2hhcnQiLCJIb3VybHlDaGFydCIsIl9pbXBvcnRzXzIiLCJfaW1wb3J0c18zIiwiTm90aWZpY2F0aW9ucyIsIlZ1ZURhdGVQaWNrZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBLE1BQWUsZUFBQTtBQ0FmLE1BQWUsZUFBQTtBQ0FmLE1BQWUsZUFBQTtBQ0FmLE1BQWUsYUFBQTtBQ0FmLE1BQWUsYUFBQTtBQ0FmLE1BQWUsYUFBQTtBQ0FmLE1BQWUsYUFBQTtBQ0NmLFNBQVMsRUFBRSxHQUFHO0FBQ1osU0FBTyxFQUFFLEtBQUssSUFBSSxLQUFxQixvQkFBSSxJQUFHLEdBQUksSUFBSSxTQUFTLEdBQUcsR0FBRztBQUNuRSxRQUFJLElBQUksRUFBRSxJQUFJLENBQUM7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O0FBQUEsRUFDTixXQUFXO0FBQUEsRUFDWCxNQUFNO0FBQUEsRUFDTixPQUFPO0FBQUEsRUFDUCxhQUFhO0FBQUEsRUFDYixNQUFNO0FBQUEsRUFDTixVQUFVO0FBQUEsRUFDVixTQUFTO0FBQUEsRUFDVCxXQUFXO0FBQUEsRUFDWCxRQUFRO0FBQUEsRUFDUixPQUFPO0FBQUEsRUFDUCxPQUFPO0FBQUEsRUFDUCxVQUFVO0FBQUEsRUFDVixlQUFlO0FBQUEsRUFDZixXQUFXO0FBQUEsRUFDWCxjQUFjO0FBQUEsRUFDZCxXQUFXO0FBQUEsRUFDWCxZQUFZO0FBQUEsRUFDWixXQUFXO0FBQUEsRUFDWCxzQkFBc0I7QUFBQSxFQUN0QixXQUFXO0FBQUEsRUFDWCxZQUFZO0FBQUEsRUFDWixXQUFXO0FBQUEsRUFDWCxXQUFXO0FBQUEsRUFDWCxhQUFhO0FBQUEsRUFDYixlQUFlO0FBQUEsRUFDZixjQUFjO0FBQUEsRUFDZCxnQkFBZ0I7QUFBQSxFQUNoQixnQkFBZ0I7QUFBQSxFQUNoQixnQkFBZ0I7QUFBQSxFQUNoQixhQUFhO0FBQUEsRUFDYixNQUFNO0FBQUEsRUFDTixXQUFXO0FBQUEsRUFDWCxPQUFPO0FBQUEsRUFDUCxTQUFTO0FBQUEsRUFDVCxRQUFRO0FBQUEsRUFDUixrQkFBa0I7QUFBQSxFQUNsQixZQUFZO0FBQUEsRUFDWixjQUFjO0FBQUEsRUFDZCxjQUFjO0FBQUEsRUFDZCxnQkFBZ0I7QUFBQSxFQUNoQixpQkFBaUI7QUFBQSxFQUNqQixtQkFBbUI7QUFBQSxFQUNuQixpQkFBaUI7QUFBQSxFQUNqQixpQkFBaUI7QUFBQSxFQUNqQixjQUFjO0FBQUEsRUFDZCxXQUFXO0FBQUEsRUFDWCxXQUFXO0FBQUEsRUFDWCxVQUFVO0FBQUEsRUFDVixhQUFhO0FBQUEsRUFDYixNQUFNO0FBQUEsRUFDTixTQUFTO0FBQUEsRUFDVCxPQUFPO0FBQUEsRUFDUCxXQUFXO0FBQUEsRUFDWCxRQUFRO0FBQUEsRUFDUixXQUFXO0FBQUEsRUFDWCxRQUFRO0FBQUEsRUFDUixlQUFlO0FBQUEsRUFDZixXQUFX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S0FBQSxFQUFBLENBQUE7Ozs7VUFLM0RyQixZQUEwQixzQkFBQTtBQUFBLFFBQUE7Ozs7Ozs7QUN2SzlCLE1BQU0sTUFBTSxVQUFVLFFBQVE7QUFDOUIsSUFBSSxJQUFJNkcsRUFBYTtBQUNyQixJQUFJLElBQUksSUFBSTtBQUNaLElBQUksVUFBVSxpQkFBaUJDLEVBQWE7QUFDNUMsSUFBSSxNQUFNLE1BQU07OyIsInhfZ29vZ2xlX2lnbm9yZUxpc3QiOls3LDM1LDM2LDM3LDM4LDM5LDQwLDQxLDQyLDQzLDQ0LDQ1LDQ2LDQ3LDQ4LDQ5LDUwLDUxLDUyLDUzLDU0LDU1LDU2LDU3LDU4LDU5LDYwLDYxLDYyLDYzLDY0LDY1LDY2LDY3LDY4LDY5LDcwLDcxLDcyLDczLDc0LDc1LDc2LDc3LDc4LDc5LDgwLDgxLDgyLDgzLDg0LDg1LDg2LDg3LDg4LDg5LDkwLDkxLDkyLDkzLDk0LDk1LDk2LDk3LDk4LDk5LDEwMCwxMDEsMTAyLDEwMywxMDQsMTA1LDEwNiwxMDcsMTA4LDEwOSwxMTAsMTExLDExMiwxMTMsMTE0LDExNSwxMTYsMTE3LDExOCwxMTksMTIwLDEyMSwxMjIsMTIzLDEyNCwxMjUsMTI2LDEyNywxMjgsMTI5LDEzMCwxMzEsMTMyLDEzMywxMzQsMTM1LDEzNiwxMzcsMTM4LDEzOSwxNDAsMTQxLDE0MiwxNDMsMTQ0LDE0NSwxNDYsMTQ3LDE0OCwxNDksMTUwLDE1MSwxNTIsMTUzLDE1NCwxNTUsMTU2LDE1N119
