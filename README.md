# npmtest

> vue-compress-upload A Vue upload compress image
> 
>npm i vue-compress-upload
>
# 实例
<template>
  <div id="app">
    <vue-compress-upload :options="options" @imageCompress="imageCompress"></vue-compress-upload>
  </div>
</template>
<script>
import Vue from "vue";
import vueCompressUpload from "vue-compress-upload";
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

# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for npm
npm run dist

# build for production and view the bundle analyzer report
npm run build --report

# vueCompressUpload
