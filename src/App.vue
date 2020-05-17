<template>
  <div id="app">
    <inbox-screen></inbox-screen>
  </div>
</template>

<script>
import store from "./store";
import InboxScreen from "./components/InboxScreen.vue";
export default {
  name: "App",
  store,
  components: {
    InboxScreen
  }
};
</script>

<style>
@import "./index.css";
</style>
