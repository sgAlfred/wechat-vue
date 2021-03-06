/**
 * Created by chenjz on 2017/8/3.
 */
'use strict'

// import 后直接 export，可以 混写
import localStorage from './localstorage'
import initSocketio from './socket'
import kindOf from './kind-of'

// 判断对象是否为空
export const isEmptyObject = (value) => {
  if (kindOf(value) !== 'object') return false
  for (let t in value) return false
  return true
}

// 将图片转化为64位编码
export const convertImgToBase64 = (url, callback, outputFormat = 'image/png') => {
  let canvas = document.createElement('CANVAS')
  const ctx = canvas.getContext('2d')
  const img = new Image()
  img.crossOrigin = 'Anonymous'
  img.onload = function () {
    canvas.height = img.height
    canvas.width = img.width
    ctx.drawImage(img, 0, 0)
    let dataURL = canvas.toDataURL(outputFormat)
    callback.call(this, dataURL)
    canvas = null
  }
  img.src = url
}

// 防抖，下拉刷新控制！
export const debounce = (fn, wait = 0) => {
  var timeId

  function debounced() {
    if (timeId) {
      clearTimeout(timeId)
    }
    timeId = setTimeout(fn, wait)
  }

  return debounced
}

// 节流
export const throttle = (fn, wait = 0) => {
  var timeId
  var lasttime = 0

  function throttled() {
    let nowtime = new Date()

    // 当作一次新的开始！
    if (nowtime - lasttime > wait) {
      fn()
      lasttime = nowtime
    } else {
      if (timeId) {
        clearTimeout(timeId)
      }
      timeId = setTimeout(fn, wait)
    }
  }

  return throttled
}

export {
  localStorage,
  initSocketio,
  kindOf
}
