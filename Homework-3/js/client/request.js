function toQueryString(params = {}) {
  const paramsArray = Object.entries(params);

  const query = paramsArray.reduce(
    (acc, [key, value], index) => `${acc}${index ? '&' : '?'}${encodeURIComponent(key)}=${encodeURIComponent(value)}`,
    ''
  );

  return query;
}

export async function request(endpoint, path, params) {
  try {
    const response = await fetch(`${endpoint}${path && `/${path}`}${toQueryString(params)}`);

    return response.json();
  } catch(e) {
    console.log('Someting went wrong during request', e.message);
    return { error: true };
  }
}
