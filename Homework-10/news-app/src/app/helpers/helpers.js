export function toQueryString(params = {}) {
  const paramsArray = Object.entries(params);

  const query = paramsArray.reduce(
    (acc, [key, value], index) => `${acc}${index ? '&' : '?'}${encodeURIComponent(key)}=${encodeURIComponent(value)}`,
    ''
  );

  return query;
}
