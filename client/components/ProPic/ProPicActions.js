export function imageLoading() {
  return {
    type: 'LOADING',
  };
}

export function imageLoaded() {
  return {
    type: 'LOADED',
  };
}

export function imageError() {
  return {
    type: 'ERROR',
  };
}

export function clear() {
  return {
    type: 'CLEAR',
  };
}
