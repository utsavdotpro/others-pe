import { track } from "@amplitude/analytics-browser";

import { getPlatform } from "./platform";

export class AnalyticsEvent {
  static Launched = "Launched";
  static Clicked = "Clicked";
  static Changed = "Changed";

  key: string;
  properties: Record<string, any>;

  constructor(key: string) {
    this.key = key;
    this.properties = {
      platform: getPlatform(),
    };
  }

  add(key: string, value: any) {
    this.properties[key] = value;
    return this;
  }

  addTag(value: string) {
    return this.add("tag", value);
  }
}

export const trackEvent = ({ key, properties }: AnalyticsEvent) => {
  // TODO: enable this later, currently it's not working for iOS production builds
  // if (isDevEnvironment()) {
  //   console.log("trackEvent:", { key, properties });
  //   return;
  // }

  track(key, properties || {});
};
