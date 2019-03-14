<template>
  <div id="app">
    <img src="./assets/logo.png">
    <HelloWorld/>
    <vue-compress-upload :options="options" @imageCompress="imageCompress"></vue-compress-upload>
  </div>
</template>

<script>
import Vue from "vue";
import HelloWorld from "./components/HelloWorld";
import vueCcompressUpload from "../dist/upload.js";
Vue.use(vueCcompressUpload);
export default {
  name: "App",
  data() {
    return {
      options: {
        number: 0.7,
        filename: "file",
        btnClassName: "",
        btnTxt: "",
        url: ""
      }
    };
  },
  methods: {
    imageCompress() {}
  },
  components: {
    HelloWorld
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
