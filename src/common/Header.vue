<template>
    <div class="header">
      <router-link to="/"><span>DEMO</span></router-link>
    </div>
</template>
<script>
export default {
  name: "Header",
  data() {
    return {};
  }
};
</script>
<style scoped>
.header {
  width: 100%;
  height: 100px;
  background: #09c;
  position: absolute;
  top: 0;
  left: 0;
  color: white;
}
.header span {
  display: block;
  font-size: 28px;
  margin: 30px 95px;
}
</style>