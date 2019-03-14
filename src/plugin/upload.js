import uploadCom from './upload.vue';
let upload = {};
upload.install = function (Vue) {
  //   Vue.prototype.$msg = 'Hello I am test.js';
  //   Vue.prototype.$myMethod = function (arr) {
  //     if (arr.length < 0) {
  //       return false;
  //     } else {
  //       arr = arr.join('连接你我');
  //       return arr;
  //     }
  //   };
  Vue.component(uploadCom.name, uploadCom);
};
export default upload;
