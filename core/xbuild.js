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
  let [cfg,...child] = to([config,...childs])
  const x = appendChild(search.newElement(cfg.tagName ? cfg.tagName : "div"), child)
  if (is.str(cfg.id)) x.id = cfg.id
  if (is.array(cfg.css)) add(x, [...cfg.css])
  if (is.str(cfg.css)) add(x, cfg.css)
  if (is.obj(cfg.style)) styler(x, cfg.style)
  if (cfg.notranslate) { x.translate = false; add(x, "notranslate") }
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