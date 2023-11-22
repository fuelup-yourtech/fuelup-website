function isPlainObject(obj) {
  if (typeof obj === "object" && obj !== null) {
    const proto = Object.getPrototypeOf(obj);
    return proto === Object.prototype || proto === null;
  }
  return false;
}

function classNames(...classes) {
  if (!classes || classes.length === 0) return undefined;

  const classSet = new Set();

  for (const className of classes) {
    if (!className) continue;

    if (typeof className === "string") {
      classSet.add(className);
    } else if (Array.isArray(className)) {
      for (const cls of className) {
        if (cls) {
          classSet.add(cls);
        }
      }
    } else if (isPlainObject(className)) {
      for (const key in className) {
        if (className[key]) {
          classSet.add(key);
        }
      }
    }
  }

  return classSet.size > 0 ? Array.from(classSet).join(" ") : undefined;
}

module.exports = classNames;
