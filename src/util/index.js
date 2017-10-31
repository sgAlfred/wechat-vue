/**
 * Created by chenjz on 2017/8/3.
 */
'use strict'

// import 后直接 export，可以 混写
// export kind from './kind-of'
// export localStorage from './localstorage'

import kindOf from './kind-of'
import localStorage from './localstorage'

// 判断对象是否为空
const isEmptyObject = (value) => {
    if (kindOf(value) !== 'object') return false
    for (let t in value) return false
    return true
}


//
const convertImgToBase64 = (url, callback, outputFormat) => {
    let canvas = document.createElement('CANVAS'),
        ctx = canvas.getContext('2d'),
        img = new Image;
    img.crossOrigin = 'Anonymous';
    img.onload = function(){
        canvas.height = img.height;
        canvas.width = img.width;
        ctx.drawImage(img, 0, 0);
        let dataURL = canvas.toDataURL(outputFormat || 'image/png');
        callback.call(this, dataURL);
        canvas = null;
    };
    img.src = url;
}

// this ！！function ? 箭头函数 ?
export const gotoAddress = (path) => {
    console.log('调转到：', path);
    if (-1 === path) {
        this.$router.go(-1)
    } else {
        this.$router.push(path)
    }
}

export {
    kindOf,
    isEmptyObject,
    localStorage,
    convertImgToBase64
}