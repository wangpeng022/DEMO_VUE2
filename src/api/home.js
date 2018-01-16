import {
  get
} from './index';
//向后台请求主页的数据
export function getlist() {
  return get('/list');
}
