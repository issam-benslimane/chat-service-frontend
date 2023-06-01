const KEY = "CHAT.TOKEN";

export const storage = {
  getToken() {
    return window.localStorage.getItem(KEY);
  },
  setToken(v: string) {
    window.localStorage.setItem(KEY, v);
  },
};
