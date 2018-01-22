<template>
    <div class="home">
      <Bar/>
      <Header/>
      <router-view></router-view>
    </div>
</template>
<script>
import ContentBody from "./content_body";
import Bar from "./bar";
import Header from "../common/Header";
export default {
  data() {
    return {};
  },
  components: { ContentBody, Bar, Header }
};
</script>
<style scoped>
.home {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  padding-left: 280px;
  padding-top: 100px;
  background-color: #fefefe;
}
</style>