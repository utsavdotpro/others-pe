import { BarcodeScanner } from "@capacitor-community/barcode-scanner";
import { AnalyticsEvent } from "@lib/amplitude";

export const trackScanProcess = (status: string, processed: boolean) => {
  new AnalyticsEvent("BarcodeScanner")
    .add("status", status)
    .add("processed", processed)
    .trackProcess();
};

// Docs: https://github.com/capacitor-community/barcode-scanner#permissions
const validateOrRequestCameraPermission = async () => {
  const status = await BarcodeScanner.checkPermission({ force: true });

  if (status.granted) return true;

  if (status.denied || status.restricted || status.unknown) {
    trackScanProcess("no_permission", false);

    alert("Please enable camera access in your Settings app!");
    return false;
  }

  trackScanProcess("unknown_permission", false);
  alert("Unable to detect camera access status, please check Settings!");

  return false;
};

const hideBackgroundForCamera = () => {
  document?.querySelector("body")?.classList.add("scanner-active");
  BarcodeScanner.hideBackground();
};

const showBackgroundForCamera = () => {
  document?.querySelector("body")?.classList.remove("scanner-active");
  BarcodeScanner.showBackground();
};

export const startQRScan = async (): Promise<string> => {
  if (await validateOrRequestCameraPermission()) {
    trackScanProcess("started", false);

    hideBackgroundForCamera();

    const result = await BarcodeScanner.startScan();

    showBackgroundForCamera();

    if (result.hasContent) {
      trackScanProcess("success", true);
      return result.content;
    } else trackScanProcess("no_content", false);
  }

  return Promise.resolve("");
};

export const stopQRScan = async () => {
  trackScanProcess("stopped", false);

  showBackgroundForCamera();
  await BarcodeScanner.stopScan();
};

export const toggleFlash = async () => {
  await BarcodeScanner.toggleTorch();
};
