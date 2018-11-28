import { Map } from "core-js";

export default function (source) {
  return removeNumberAttributesFromJSON(source);
}

function removeNumberAttributesFromJSON(source) {
  const parsedSource = JSON.parse(source);
  const processedSource = {};

  for (let key in parsedSource) {
    const value = parsedSource[key];
    if (typeof(value) !== 'number') {
      processedSource[key] = value;
    }
  }

  return JSON.stringify(processedSource);
}
