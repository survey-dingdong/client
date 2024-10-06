import mapValues from "lodash/mapValues";
import isArray from "lodash/isArray";
import mapKeys from "lodash/mapKeys";
import isObject from "lodash/isObject";
import camelCase from "lodash/camelCase";
import { AxiosResponse } from "axios";
import snakeCase from "lodash/snakeCase";

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

export function camelToSnake(obj: ObjectLiteral): ObjectLiteral {
  if (isArray(obj)) {
    return obj.map((v) => camelToSnake(v));
  }
  if (isObject(obj)) {
    return mapValues(
      mapKeys(obj, (v, k) => snakeCase(k)),
      (v) => camelToSnake(v)
    );
  }

  return obj;
}

export function getObject(obj: AxiosResponse, type: "response" | "request") {
  const { data } = obj;

  if (data === null || typeof data !== "object") {
    return {};
  }
  return type === "request" ? camelToSnake(obj.data) : snakeToCamel(obj.data);
}

export function toSnakeCaseQueryParams(url: string) {
  const _url = new URL(url);
  const params = new URLSearchParams(_url.search);
  const newParams = new URLSearchParams();

  for (const [key, value] of params.entries()) {
    newParams.append(snakeCase(key), value);
  }

  _url.search = newParams.toString();
  return _url;
}
