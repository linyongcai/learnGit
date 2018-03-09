import {commonParms, option} from './config'
import jsonp from 'common/js/jsonp'

export function getRanks() {
  const url = 'https://c.y.qq.com/v8/fcg-bin/fcg_myqq_toplist.fcg'
  const data = Object.assign({}, commonParms, {
    uin: 0,
    platform: 'h5',
    needNewCode: 1
  })
  return jsonp(url, data, option)
}
export function getTopListSongs(topid) {
  const url = 'https://c.y.qq.com/v8/fcg-bin/fcg_v8_toplist_cp.fcg'
  const data = Object.assign({}, commonParms, {
    uin: 0,
    platform: 'h5',
    needNewCode: 1,
    topid,
    tpl:3,
    page:'detail',
    type:'top'
  })
  return jsonp(url, data, option)
}
