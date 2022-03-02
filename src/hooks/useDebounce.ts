let timer: NodeJS.Timeout;

export const useDebounce = (action: () => void, timeout = 500) => {
  clearTimeout(timer);
  timer = setTimeout(action, timeout);
};
