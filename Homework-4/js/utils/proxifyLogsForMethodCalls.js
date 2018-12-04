export function proxifyLogsForMethodCalls(target, targetName = '') {
  return new Proxy(target, {
    get(target, key) {
      const originalMethod = target[key];

      return function (...args) {
        const result = originalMethod.apply(this, args);
        console.log(`${targetName} ${key} method has been called with the following parameters: ${JSON.stringify(args)}`);

        return result;
      }
    }
  });
}
