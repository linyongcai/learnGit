import jsonp from 'common/js/jsonp'
import {commonParms,option} from "api/config"

export function getSinger() {
  const url = 'https://c.y.qq.com/v8/fcg-bin/v8.fcg'
  const data = Object.assign({},commonParms, {
    channel: 'singer',
    page: 'list',
    key: 'all_all_all',
    pagesize: 100,
    pagenum: 1,
    g_tk:817220007,
    hostUin:0,
    platform:'yqq',
    needNewCode:0
  })

  return jsonp(url, data, option)
}

export function getSingerDetail(mid) {
  const url = 'https://c.y.qq.com/v8/fcg-bin/fcg_v8_singer_track_cp.fcg'
  const data = Object.assign({}, commonParms, {
    g_tk: 817220007,
    loginUin: 0,
    hostUin: 0,
    platform: 'yqq',
    singermid: mid,
    begin: 0,
    num: 100,
    order: 'listen',
    needNewCode: 0
  })
  return jsonp(url, data, option)

}

