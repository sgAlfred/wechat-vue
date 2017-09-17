/**
 * Created by chenjz on 2017/7/31.
 */
'use strict'

import { kindOf } from '../util'

export const isLogin = state => state.isLogin

export const getUserid = state => {
    return kindOf(state.userinfo) === 'object' ? state.userinfo.id : ''
}

export const getUserinfo = state => state.userinfo

export const currentSubMenu = state => state.currentSubMenu
