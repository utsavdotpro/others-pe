import { BarcodeScanner } from "@capacitor-community/barcode-scanner";

// Docs: https://github.com/capacitor-community/barcode-scanner#permissions
const validateOrRequestCameraPermission = async () => {
  const status = await BarcodeScanner.checkPermission({ force: true });

  if (status.granted) return true;

  if (status.denied || status.restricted || status.unknown) {
    alert("Please enable camera access in your Settings app");
    return false;
  }

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
    hideBackgroundForCamera();

    const result = await BarcodeScanner.startScan();

    showBackgroundForCamera();

    if (result.hasContent) return result.content;
  }

  return Promise.resolve("");
};

export const stopQRScan = async () => {
  showBackgroundForCamera();
  await BarcodeScanner.stopScan();
};
