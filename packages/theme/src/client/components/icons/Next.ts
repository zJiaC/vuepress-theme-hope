import { IconBase } from "@mr-hope/vuepress-shared/client";
import { h } from "vue";
import type { FunctionalComponent } from "vue";

export const NextIcon: FunctionalComponent = () =>
  h(
    IconBase,
    { name: "next" },
    {
      default: () =>
        h("path", {
          d: "M906.772 512c0 4.772-2.211 9.267-5.99 12.175L524.257 813.66a15.37 15.37 0 0 1-18.616.092 15.368 15.368 0 0 1-5.038-17.91l75.714-191.672h-443.73c-8.488 0-15.36-6.881-15.36-15.36v-153.6c0-8.489 6.872-15.36 15.36-15.36h443.73l-75.714-191.682a15.358 15.358 0 0 1 5.048-17.91c5.51-4.158 13.128-4.137 18.606.092l376.525 289.485a15.323 15.323 0 0 1 5.99 12.165z",
          fill: "currentColor",
        }),
    }
  );

NextIcon.displayName = "NextIcon";