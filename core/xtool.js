/**
 * @param {HTMLElement} x
 * @param {Attr} y
 */
export const setAttr = (x, y) => { x.setAttributeNode(y); return x }
export const attr = (x, y) => {
  const z = document.createAttribute(x)
  if ("string" === typeof y && y !== "") z.value = y
  return z
}
/**
 * @param {HTMLElement} x
 * @param {HTMLElement} y
 */
export const appendChild = (x, y) => {
  for (const z of y)
    if (z instanceof HTMLElement) x.appendChild(z)

  return x
}
export const toConfigurate = args => {
  if (args[0] instanceof HTMLElement) return [{}, ...args]
  else if ("object" !== typeof args[0] || args[0] === null) return [{}, ...args]
  return args
}
export const setParam = (x, y) => {
  if ("object" !== typeof x || x === null) return y;
  if (x instanceof HTMLElement) return y
  return { ...x, ...y }
}
let Div = document.createElement; (() => Div = document.createElement.bind(document))()
export { Div }