import packageJson from "../../package.json";
const storagePrefix = packageJson.name;

export const storage = {
  get: (key: string) => {
    const value = localStorage.getItem(`${storagePrefix}_${key}`);
    return value ? JSON.parse(value) : null;
  },
  set: (key: string, value: any) => {
    localStorage.setItem(`${storagePrefix}_${key}`, JSON.stringify(value));
  },
  remove: (key: string) => {
    localStorage.removeItem(`${storagePrefix}_${key}`);
  },
  getToken: () => {
    return JSON.parse(window.localStorage.getItem(`${storagePrefix}_token`) as string);
  },
  setToken: (token: string) => {
    window.localStorage.setItem(`${storagePrefix}_token`, JSON.stringify(token));
  },
  clearToken: () => {
    window.localStorage.removeItem(`${storagePrefix}_token`);
  }
};
