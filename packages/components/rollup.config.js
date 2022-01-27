import { rollupTypescript } from "../../scripts/rollup";

export default [
  ...rollupTypescript("node/index", {
    external: [
      "@mr-hope/vuepress-shared",
      "@vuepress/utils",
      "lodash.debounce",
      "vue",
      "vuepress-plugin-reading-time2",
      "vuepress-plugin-sass-palette",
    ],
  }),
  ...rollupTypescript("client/appEnhance", {
    external: [
      "@vuepress/client",
      "@Badge",
      "@BreadCrumb",
      "@PageInfo",
      "@Pagination",
      "@ScreenFull",
      /\.scss$/,
    ],
    dtsExternal: [/\.scss$/],
    copy: [["client/styles", "client"]],
  }),
  ...rollupTypescript("client/components/Badge", {
    external: ["vue", /\.scss$/],
    dtsExternal: [/\.scss$/],
  }),
  ...rollupTypescript("client/components/BreadCrumb", {
    external: ["@vuepress/client", "vue", "vue-router", /\.scss$/],
    dtsExternal: [/\.scss$/],
  }),
  ...rollupTypescript("client/components/PageInfo", {
    external: [
      "@mr-hope/vuepress-shared/lib/client",
      "@vuepress/client",
      "balloon-css/balloon.css",
      "vue",
      "vue-router",
      /\.scss$/,
    ],
    dtsExternal: ["balloon-css/balloon.css", /\.scss$/],
  }),
  ...rollupTypescript("client/components/Pagination", {
    external: [
      "@mr-hope/vuepress-shared/lib/client",
      "vue",
      "vue-router",
      /\.scss$/,
    ],
    dtsExternal: [/\.scss$/],
  }),
  ...rollupTypescript("client/components/ScreenFull", {
    external: ["@mr-hope/vuepress-shared/lib/client", "screenfull", "vue"],
  }),
  ...rollupTypescript("client/root-components/BackToTop", {
    external: [
      "@mr-hope/vuepress-shared/lib/client",
      "@vuepress/client",
      "@vuepress/plugin-theme-data/lib/client",
      "lodash.debounce",
      "vue",
      /\.scss$/,
    ],
    dtsExternal: [/\.scss$/],
  }),
];