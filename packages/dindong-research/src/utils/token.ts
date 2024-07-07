const localStorage = typeof window === "undefined" ? null : window.localStorage;

const get = (name: string) => {
  if (!localStorage) {
    return;
  }

  return localStorage.getItem(name);
};

const set = (name: string, value: string) => {
  if (!localStorage) {
    return;
  }

  localStorage.setItem(name, value);
};

const remove = (name: string) => {
  if (!localStorage) {
    return;
  }

  localStorage.removeItem(name);
};

const clear = () => {
  if (!localStorage) {
    return;
  }

  localStorage.clear();
};

export const token = {
  get,
  set,
  remove,
  clear,
} as const;
