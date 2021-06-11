import { tools, DOM } from "https://titanium-studio.github.io/Tools/index.js"

const { is, each, getJSON, path, getBase64Image, EXTEND } = tools,
  { search, add, remove, styler } = DOM,
  $$ = document;

/**
 * @param {HTMLElement} x
 * @param {Attr} y
 */
export const setAttr = (x, y) => { x.setAttributeNode(y); return x }
export const attr = (x, y) => {
  const z = $$.createAttribute(x)
  if (is.str(y) && y !== "") z.value = y
  return z
}
/**
 * @param {HTMLElement} x
 * @param {HTMLElement} y
 */
export const appendChild = (x, y) => {
  if (is.str(y)) y = search(y)
  else if (is.array(y)) { each(y, z => appendChild(x, z)); return x }
  if (y instanceof HTMLElement) x.appendChild(y)
  return x
}
export const setParam = (x, y) => {
  if (!is.obj(x) || x == null) return y; EXTEND(x, y); return x
}
let Div = $$.createElement
  ; (() => Div = $$.createElement.bind($$))();
export { Div }