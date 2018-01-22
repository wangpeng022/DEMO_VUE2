<template>
    <div id="app">
      <home/>
    </div>
</template>
<script>
import Home from "./components/home";
export default {
  data() {
    return {};
  },
  components: { Home }
};
</script>
<style>
* {
  margin: 0;
  padding: 0;
}
ul li {
  list-style: none;
}
a {
  color: black;
  text-decoration: none;
}
</style>