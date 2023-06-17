import { track } from "@amplitude/analytics-browser";

import { getPlatform } from "@lib/platform";
import { isDevEnvironment } from "@utils/.";

enum Event {
  Launched = "Launched",
  Clicked = "Clicked",
  Changed = "Changed",
  Process = "Process",
}

export class AnalyticsEvent {
  properties: Record<string, any>;

  constructor(tag: string) {
    this.properties = {
      platform: getPlatform(),
      tag,
    };
  }

  add(key: string, value: any) {
    this.properties[key] = value;
    return this;
  }

  trackLaunch() {
    this.track(Event.Launched);
  }

  trackClick() {
    this.track(Event.Clicked);
  }

  trackChange() {
    this.track(Event.Changed);
  }

  trackProcess() {
    this.track(Event.Process);
  }

  private track(key: string) {
    if (isDevEnvironment()) {
      console.log(key, this);

      // TODO: enable this later, currently it's not working for iOS production builds
      // return;
    }

    track(key, this.properties);
  }
}
