export enum StorageItem {
  isOnboardingComplete = "isOnboardingComplete",
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

  static pushItem(key: StorageItem, value: string) {
    const items = this.getArray(key);

    items.push(value);
    this.setItem(key, JSON.stringify(items));
  }

  static getArray(key: StorageItem) {
    const items = this.getItem(key) || "[]";
    return JSON.parse(items);
  }

  static getBoolean(key: StorageItem) {
    const item = this.getItem(key) || "[]";
    return item === "true";
  }
}

export default LocalStorage;
