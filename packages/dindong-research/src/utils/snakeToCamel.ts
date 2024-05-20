import mapValues from "lodash/mapValues";
import isArray from "lodash/isArray";
import mapKeys from "lodash/mapKeys";
import isObject from "lodash/isObject";
import camelCase from "lodash/camelCase";
import { AxiosResponse } from "axios";

interface ObjectLiteral {
  [key: string]: any;
}

export function snakeToCamel(obj: ObjectLiteral): ObjectLiteral {
  if (isArray(obj)) {
    return obj.map((v) => snakeToCamel(v));
  }
  if (isObject(obj)) {
    return mapValues(
      mapKeys(obj, (v, k) => camelCase(k)),
      (v) => snakeToCamel(v)
    );
  }
  return obj;
}

export function getObject(response: AxiosResponse) {
  const { data } = response;
  return data !== null && typeof data === "object"
    ? snakeToCamel(response.data)
    : {};
}
