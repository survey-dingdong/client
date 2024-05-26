const sessionStorage =
  typeof window === "undefined" ? null : window.sessionStorage;

const get = (name: string) => {
  if (!sessionStorage) {
    return;
  }

  return sessionStorage.getItem(name);
};

const set = (name: string, value: string) => {
  if (!sessionStorage) {
    return;
  }

  sessionStorage.setItem(name, value);
};

const remove = (name: string) => {
  if (!sessionStorage) {
    return;
  }

  sessionStorage.removeItem(name);
};

export const token = {
  get,
  set,
  remove,
} as const;
