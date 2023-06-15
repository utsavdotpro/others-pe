export enum StorageItem {
  isOnboardingComplete = "isOnboardingComplete",
  scannedQRData = "scannedQRData",
  paymentHistory = "paymentHistory",
}

class LocalStorage {
  static getItem(key: StorageItem) {
    return localStorage.getItem(key);
  }

  static setItem(key: StorageItem, value: string) {
    localStorage.setItem(key, value);
  }

  static removeItem(key: StorageItem) {
    localStorage.removeItem(key);
  }

  static pushItem<T = string>(key: StorageItem, value: T) {
    const items = this.getArray<T>(key);

    items.push(value);
    this.setItem(key, JSON.stringify(items));
  }

  static getArray<T = string>(key: StorageItem): T[] {
    const items = this.getItem(key) || "[]";
    return JSON.parse(items);
  }

  static getBoolean(key: StorageItem) {
    const item = this.getItem(key) || "[]";
    return item === "true";
  }
}

export default LocalStorage;
