export function getPropertyFromItem(item: any, property: any, fallback: any) {
  if (property === true) return item === undefined ? fallback : item;
  if (property == null || typeof property === "boolean") return fallback;
  if (item !== Object(item)) {
    if (property !== "function") return fallback;
    const value = property(item, fallback);
    return typeof value === "undefined" ? fallback : value;
  }
  if (typeof property === "string") return typeof item[property] === "undefined" ? fallback : item[property];
  if (typeof property !== "function") return fallback;
  const value = property(item, fallback);
  return typeof value === "undefined" ? fallback : value;
}
