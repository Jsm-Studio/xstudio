import { XCore, is, each } from "https://x-titan.github.io/utils/index.js"
import { search, add, remove, styler } from "https://x-titan.github.io/web-utils/index.js"
import { attr, setAttr, setParam, appendChild } from "./xtool.js"

const Mono = XCore.Mono, $d = document

/** @type {XStudio} */
let xs
const initApp = x => {
  if (is.str(app)) app = search(app)
  if (!(app instanceof HTMLElement))
    throw new TypeError("Require HTMLElement")
  return app
}

export default class XStudio {

  #self
  #app

  #inited = false;
  #readed = false;

  constructor(app) {
    if (Mono.force(this)) throw new Error("It's a class is Mono");
    ((xs = this).#self = search.newElement("div")).id = "xbody"; this.#app = initApp(app);
    setAttr(xs.#self, attr("xbody")); this.usingImages = { length: 0 }
  }
  /**
   * @param {Object} [config]
   * @param {Object} [config.data]
   * @param {{type: "img", value: string, name: string}[]} [config.data.use]
   * @param {string} [config.title]
   */
  init(config) {
    return new Promise((fn, er) => {
      if (xs.#inited || !is.array(config?.data?.use))
        return fn({ imgList: [] });
      let use = config.data.use, imgList = xs.usingImages; xs.inited = true;
      each(use, z => {
        let img, load;
        if (z.type == "img") {
          (img = new Image()).src = z.value
          img.onerror = er;
          img.addEventListener("load", load = () => {
            if (img.complete) {
              imgList[z.name] = img
              if (use.length == ++imgList.length) fn({ imgList })
            } else return setTimeout(load, 100)
          }, { once: true })
        }
      })
    })
  }
  /** @param {boolean} [force] */
  hide(force = false) {
    console.log("hide")
    if (force) { setAttr(xs.#self, attr("hide", "force")); xs.#self.style.display = "none" }
    else setAttr(xs.#self, attr("hide")); return xs
  }
  view() {
    console.log("view")
    remove(xs.#self, ["rotateX90", "hide", "none"])
    xs.#self.style.display = ""; return xs
  }
  ready() {
    if (xs.#readed) return xs; xs.hide(); xs.#app.appendChild(xs.#self)
    setTimeout(() => xs.view(), 10); xs.#readed = true; return xs
  }
  /** @param {HTMLElement | HTMLElement[]} xtarget */
  use(xtarget) {
    if (is.array(xtarget)) return each(xtarget, xs.use)
    if (xtarget instanceof HTMLElement) xs.#self.appendChild(xtarget)
    return xs
  }
  set title(title) { if (is.str(title)) $d.title = title; return xs }
  get isInited() { return this.#inited }
  get isReaded() { return this.#readed }
  static ERROR(...msg) {
    $d.body.innerHTML
      = "<h1 style='z-index:9999;position:fixed;left:50%;top:50%;"
      + "transform:translate(-50%,-50%);text-align:center;'>"
      + "😓Unfortunately this page doesn't work</h1>";
    console.error(...msg)
  }
}
