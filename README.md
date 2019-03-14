# npmtest

> vue-compress-upload A Vue upload compress image
> 
>npm i vue-compress-upload
>
# Example
```js
 main.js 

import Vue from 'vue';
import App from './App';
import vueCcompressUpload from "vue-compress-upload";
Vue.config.productionTip = false;

Vue.use(vueCcompressUpload);
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
});


app.vue
<template>
  <div id="app">
    <vue-compress-upload :options="options" @imageCompress="imageCompress"></vue-compress-upload>
  </div>
</template>
<script>
import Vue from "vue";

export default {
  name: "App",
  data() {
    return {
      options: {
        number: 0.7,// 图片质量默认0.7
        filename: "file",// 表单name
        btnClassName: "", //按钮class
        btnTxt: "",// 按钮美容
        url:""//  上传 url
          
      }
    };
  },
  methods: {
    imageCompress() {}//上传成功后的回调
  },
  components: {
    vueCompressUpload,
  }
};
</script>
```
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for npm
npm run dist

# build for production and view the bundle analyzer report
npm run build --report

# vueCompressUpload
