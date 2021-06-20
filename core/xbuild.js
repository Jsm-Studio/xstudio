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
  let [cfg, ...child] = toConfigurate([config, ...childs])
  const x = appendChild(Div(cfg.tagName ? cfg.tagName : "div"), child)
  if ("string" === typeof cfg.id) x.id = cfg.id
  if (Array.isArray(cfg.css)) x.classList.add([...cfg.css])
  if ("string" === typeof cfg.css) x.classList.add(cfg.css)
  if ("object" === typeof cfg.style && cfg.style !== null)
    for (const k in cfg.style) if (Object.hasOwnProperty.call(cfg.style, k))
      x.style[k] = cfg.style[k];
  if (cfg.notranslate) { x.translate = false; x.classList.add("notranslate") }
  return setAttr(x, attr("xbuild"))
}
/**
 * @param {config_} [config]
 * @param {HTMLElement[]} [childs]
 */
export function XSection(config, ...childs) {
  const x = XBlank(setParam(config, { tagName: "section" }), config, ...childs)
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
  if ("object" === typeof config && config !== null) {
    if ("string" === typeof config.listType) z.value = config.listType
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
  const x = XBlank(setParam(config, { tagName: "footer" }), config, ...childs)
  return setAttr(x, attr("xfooter"))
}

/**
 * @param {config_Text} [config]
 * @param {string} [child]
 */
export function XText(config, text) {
  const x = XBlank(config)
  if ("object" === typeof config && config !== null) {
    if ("string" === typeof config.href) x.href = config.href
    if ("string" === typeof config.rel) x.rel = config.rel
  }
  if ("string" === typeof text) x.innerHTML = text
  if ("string" === typeof config) x.innerHTML = config
  return setAttr(x, attr("xtext"))
}