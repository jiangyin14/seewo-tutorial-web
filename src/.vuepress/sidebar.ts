import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/docs": [
    {
      text: "一体机硬件简介",
      collapsible: false,
      expanded: true,
      prefix: "seewo-hardware-introduction",
      link: "seewo-hardware-introduction/",
      children: [
        "pc-module",
        "android-part",
      ],
    },
    {
      text: "一体机软件推荐",
      collapsible: false,
      expanded: true,
      prefix: "seewo-software-suggestion",
      link: "seewo-software-suggestion/",
      children: [
        "operating-system",
        "core-utilities",
        "presentation-apps",
      ],
    },
    {
      text: "一体机系统优化",
      collapsible: false,
      expanded: true,
      prefix: "seewo-system-optimization",
      link: "seewo-system-optimization/",
      children: [
        "daily-maintenance",
      ],
    },
    {
      text: "一体机故障修复",
      collapsible: false,
      expanded: true,
      prefix: "seewo-problem-fixing",
      link: "seewo-problem-fixing/",
      children: [
      ],
    },
  ],
});
