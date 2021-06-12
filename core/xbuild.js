import { tools, DOM } from "https://titanium-studio.github.io/Tools/index.js"
import { Div, attr, setAttr, appendChild, setParam } from "./xtool.js"

const { is, each, getJSON, path, getBase64Image, EXTEND } = tools,
  { search, add, remove, styler } = DOM,
  $$ = document;

//#region Types
/**
 * @typedef {{
 * id: ?string,
 * css : ?string,
 * tagName: ?string,
 * style: ?CSSStyleDeclaration,
 * }} config_
 */
/**
 * @typedef {{
 * id: ?string,
 * css : ?string,
 * tagName: ?string,
 * style: ?CSSStyleDeclaration,
 * listType: ?"column" | "row"
 * }} config_List
 */
/**
 * @typedef {{
 * id: ?string,
 * css : ?string,
 * tagName: ?string,
 * style: ?CSSStyleDeclaration,
 * href: ?string
 * }} config_Text
 */
//#endregion

/**
 * @param {config_} [config]
 * @param {HTMLElement | HTMLElement[]} [child]
 */
export function XBlank(config, child) {
  if (!is.obj(config)) config = {}
  const x = appendChild(Div(config.tagName ? config.tagName : "div"), child)
  if (is.str(config.id)) x.id = config.id
  if (is.array(config.css)) add(x, ...config.css)
  if (is.obj(config.style)) styler(x, config.style)
  return setAttr(x, attr("xbuild"))
}
/**
 * @param {config_} [config]
 * @param {HTMLElement | HTMLElement[]} [child]
 */
export function XSection(config, child) {
  const x = XBlank(setParam(config, { tagName: "section" }), child)
  return setAttr(x, attr("xsection"))
}
/**
 * @param {config_} [config]
 * @param {HTMLElement | HTMLElement[]} [child]
 */
export function XContent(config, child) {
  const x = XBlank(config, child)
  return setAttr(x, attr("xcontent"))
}
/**
 * @param {config_List} [config]
 * @param {HTMLElement | HTMLElement[]} [child]
 */
export function XList(config, child) {
  const x = XBlank(config, child)
  let z = attr("xlist")
  if (is.obj(config)) {
    if (is.str(config.listType)) z.value = config.listType
  }
  return setAttr(x, z)
}
/**
 * @param {config_} [config]
 * @param {HTMLElement | HTMLElement[]} [child]
 */
export function XHero(config, child) {
  const x = XBlank(config, child)
  return setAttr(x, attr("xhero"))
}
/**
 * @param {config_} [config]
 * @param {HTMLElement | HTMLElement[]} [child]
 */
export function XFooter(config, child) {
  const x = XBlank(setParam(config, { tagName: "footer" }), child)
  return setAttr(x, attr("xfooter"))
}

/**
 * @param {config_Text} [config]
 * @param {string} [child]
 */
export function XText(config, text) {
  const x = XBlank(config)
  if (is.obj(config)) {
    if (config.notranslate) {
      x.translate = false; add(x, "notranslate")
    }
    if (x.tagName == "A" && is.str(config.href)) x.href = config.href
  }
  if (is.str(text)) x.innerText = text
  return setAttr(x, attr("xtext"))
}