import jsonp from 'common/js/jsonp'
import axios from 'axios'
import {commonParms, option,jp1} from "api/config"

export function getRecommend() {
  const url = 'https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg'
  const data = Object.assign({}, commonParms, {
    platform: 'h5',
    uin: 0,
    needNewCode: 1
  })
  return jsonp(url, data, option)
}

export function getDiscList() {
  const url = '/api/getDiscList'
  const data = Object.assign({}, commonParms, {
    platform: 'yqq',
    hostUin: 0,
    sin: 0,
    ein: 29,
    sortId: 5,
    needNewCode: 0,
    categoryId: 10000000,
    rnd: Math.random(),
    format:'json'
  })
  return axios.get(url, {
    params: data
  }).then((response) => {
    return Promise.resolve(response.data)
  })
}

export function getSongList(disstid) {
  const url = '/api/getSongList'
  const data = Object.assign({}, commonParms, {
    type: 1,
    json: 1,
    utf8: 1,
    onlysong: 0,
    disstid: disstid,
    loginUin: 0,
    hostUin: 0,
    platform: 'yqq',
    needNewCode: 0,
    format:'json'
  })
  return axios.get(url, {
    params: data
  }).then((response) => {
    return Promise.resolve(response.data)
  })
}
// export function getSongList(disstid) {
//   const url = 'https://c.y.qq.com/qzone/fcg-bin/fcg_ucc_getcdinfo_byids_cp.fcg'
//
//   const data = Object.assign({}, commonParms, {
//     type: 1,
//     json: 1,
//     utf8: 1,
//     onlysong: 0,
//     disstid: disstid,
//     loginUin: 0,
//     hostUin: 0,
//     platform: 'yqq',
//     needNewCode: 0,
//   })
//   return jsonp(url, data, jp1)
// }
