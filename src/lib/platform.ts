import { isPlatform } from "@ionic/react";

export const Platform = {
  isAndroid: isPlatform("android"),
  isIOS: isPlatform("ios"),
  isMobile: isPlatform("mobile"),
  isMobileWeb: isPlatform("mobileweb"),
  isDesktop: isPlatform("desktop"),
  isWeb: isPlatform("desktop") || isPlatform("mobileweb"),
};

export const getPlatform = () => {
  if (Platform.isAndroid) return "android";
  if (Platform.isIOS) return "ios";
  if (Platform.isMobileWeb) return "mobileweb";
  if (Platform.isDesktop) return "desktop";
  return "unknown";
};
