import { XCore, is, each } from "https://x-titan.github.io/utils/index.js"
import { search, add, remove, styler } from "https://x-titan.github.io/web-utils/index.js"

const Extend = XCore.Extend, $d = document;

/**
 * @param {HTMLElement} x
 * @param {Attr} y
 */
export const setAttr = (x, y) => { x.setAttributeNode(y); return x }
export const attr = (x, y) => {
  const z = $d.createAttribute(x)
  if (is.str(y) && y !== "") z.value = y
  return z
}
/**
 * @param {HTMLElement} x
 * @param {HTMLElement} y
 */
export const appendChild = (x, y) => {
  if (is.str(y)) y = [search(y)]
  each(y, z => { if (y instanceof HTMLElement) x.appendChild(z) })
  return x
}
export const setParam = (x, y) => { if (!is.obj(x)) return y; return Extend(x, y) }
let Div = search.newElement
export { Div }