<template>
  <div id="app">
    <img src="./assets/logo.png">
    <vue-compress-upload :options="options" @imageCompress="imageCompress"></vue-compress-upload>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      options: {
        number: 0.4,
        filename: "file",
        btnClassName: "",
        btnTxt: "",
        url:
          "http://10.10.32.164:6021/manager/upload?r=1552531099334&token=1505_ebd8938bc2ce462fb279b0ba68f78174"
      }
    };
  },
  methods: {
    imageCompress() {}
  },
  components: {}
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
