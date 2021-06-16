import { XCore, is, each } from "https://x-titan.github.io/utils/index.js"
import { search, add, remove, styler } from "https://x-titan.github.io/web-utils/index.js"
import { Div, attr, setAttr, appendChild, setParam, toConfigurate } from "./xtool.js"

//#region Types
/**
 * @typedef {{
 * id: ?string,
 * css : ?string | string[],
 * tagName: ?string,
 * style: ?CSSStyleDeclaration,
 * notranslate: ?boolean
 * }} config_
 */
/**
 * @typedef {{
 * id: ?string,
 * css : ?string | string[],
 * tagName: ?string,
 * style: ?CSSStyleDeclaration,
 * notranslate: ?boolean,
 * listType: ?"column" | "row"
 * }} config_List
 */
/**
 * @typedef {{
 * id: ?string,
 * css : ?string | string[],
 * tagName: ?string,
 * style: ?CSSStyleDeclaration,
 * notranslate: ?boolean,
 * href: ?string,
 * rel: ?string
 * }} config_Text
 */
//#endregion

/**
 * @param {config_} [config]
 * @param {HTMLElement[]} [childs]
 */
export function XBlank(config, ...childs) {
  let [cfg,...childs] = to([config,...childs])
  if (!is.obj(config)) config = {}
  const x = appendChild(search.newElement(config.tagName ? config.tagName : "div"), child)
  if (is.str(config.id)) x.id = config.id
  if (is.array(config.css)) add(x, [...config.css])
  if (is.str(config.css)) add(x, config.css)
  if (is.obj(config.style)) styler(x, config.style)
  if (config.notranslate) { x.translate = false; add(x, "notranslate") }
  return setAttr(x, attr("xbuild"))
}
/**
 * @param {config_} [config]
 * @param {HTMLElement[]} [childs]
 */
export function XSection(config, ...childs) {
  const x = XBlank(setParam(config, { tagName: "section" }), ...childs)
  return setAttr(x, attr("xsection"))
}
/**
 * @param {config_} [config]
 * @param {HTMLElement[]} [childs]
 */
export function XContent(config, ...childs) {
  const x = XBlank(config, ...childs)
  return setAttr(x, attr("xcontent"))
}
/**
 * @param {config_List} [config]
 * @param {HTMLElement[]} [childs]
 */
export function XList(config, ...childs) {
  const x = XBlank(config, ...childs)
  let z = attr("xlist")
  if (is.obj(config)) {
    if (is.str(config.listType)) z.value = config.listType
  }
  return setAttr(x, z)
}
/**
 * @param {config_} [config]
 * @param {HTMLElement[]} [childs]
 */
export function XHero(config, ...childs) {
  const x = XBlank(config, ...childs)
  return setAttr(x, attr("xhero"))
}
/**
 * @param {config_} [config]
 * @param {HTMLElement[]} [childs]
 */
export function XFooter(config, ...childs) {
  const x = XBlank(setParam(config, { tagName: "footer" }), ...childs)
  return setAttr(x, attr("xfooter"))
}

/**
 * @param {config_Text} [config]
 * @param {string} [child]
 */
export function XText(config, text) {
  const x = XBlank(config)
  if (is.obj(config)) {
    if (is.str(config.href)) x.href = config.href
    if (is.str(config.rel)) x.rel = config.rel
  }
  if (is.str(text)) x.innerHTML = text
  return setAttr(x, attr("xtext"))
}