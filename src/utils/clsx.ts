export const clsx = (...args: (string | boolean | undefined)[]) => {
  let result = '';
  for (const className of args) {
    if (className) {
      result += ' ' + className;
    }
  }
  return result;
};
