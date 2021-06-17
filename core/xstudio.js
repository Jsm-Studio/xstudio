import { Div, attr, setAttr, setParam, appendChild } from "./xtool.js"

const  $d = document

/** @type {XStudio} */
let xs
const initApp = x => {
  if ("string" === typeof x) x = document.querySelector(x)
  if (!(x instanceof HTMLElement))
    throw new TypeError("Require HTMLElement")
  return x
}

export default class XStudio {
  #self
  #app

  #inited = false;
  #readed = false;

  constructor(app) {
    if (xs instanceof XStudio)
      throw new Error("It's a class is Mono");
    ((xs = this).#self = Div("div")).id = "xbody"; this.#app = initApp(app);
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
      if (xs.#inited || !Array.isArray(config?.data?.use))
        return fn({ imgList: [] });
      let use = config.data.use, imgList = xs.usingImages; xs.inited = true;
      use.forEach(z => {
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
    if (force) { setAttr(xs.#self, attr("hide", "force")); xs.#self.style.display = "none" }
    else setAttr(xs.#self, attr("hide")); return xs
  }
  view() {
    xs.#self.removeAttribute("hide")
    xs.#self.style.display = ""; return xs
  }
  ready() {
    if (xs.#readed) return xs; xs.hide(); xs.#app.appendChild(xs.#self)
    setTimeout(() => xs.view(), 10); xs.#readed = true; return xs
  }
  /** @param {HTMLElement | HTMLElement[]} xtarget */
  use(xtarget) {
    if (Array.isArray(xtarget)) {
      xtarget.forEach(xs.use)
      return xs
    }
    if (xtarget instanceof HTMLElement) xs.#self.appendChild(xtarget)
    return xs
  }
  set title(title) { if ("string" === typeof title) $d.title = title; return xs }
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
