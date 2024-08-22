export function isEmptyObject(obj) {
  return obj && typeof obj === "object" && JSON.stringify(obj) === "{}";
}
