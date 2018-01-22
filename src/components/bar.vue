<template>
    <div class="bar">
        <ul>
           <router-link to="/home/a"><li>LIST</li></router-link>
           <router-link to="/home/b"><li>MOVING</li></router-link>
           <router-link to="/home/table"><li>VIEW_TABLE</li></router-link>

           <router-link to="/home/count" v-for="n in 8" :key="n"><li >MENU_LIST_{{n}}</li></router-link>
        </ul>
    </div>
</template>
<script>
export default {
  data() {
    return {};
  }
};
</script>
<style scoped>
.bar {
  width: 280px;
  height: 100%;
  background: rgb(229, 231, 231);
  position: absolute;
  top: 100px;
  left: 0;
}
.bar ul {
  /* margin: 50px; */
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  width: 100%;
  height: 100%;
}
ul a li {
  flex: 1;
  cursor: pointer;
  text-align: center;
  padding-top: 15px;
}
.bar ul li:hover,
.router-link-active {
  background: pink;
}
</style>