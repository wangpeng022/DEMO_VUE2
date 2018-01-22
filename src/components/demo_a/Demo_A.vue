<template>
   <div class="demoa">
     <div class="loadEffect" v-if="isloading">
        <div><span></span></div>
        <div><span></span></div>
        <div><span></span></div>
        <div><span></span></div>
      </div>
      <table border="1" v-if="!isloading" style="margin:auto">
                   <td>序号</td>
                   <td>姓名</td>
                   <td>地址</td>
                   <td>电话</td>
                   <td>邮箱</td>
                   <td>用户名</td>
                   <td>域名</td>
           <tr v-for='(item,index) in list' :key="index">
               <td>
                   {{item.id}}
               </td>
               <td>
                   {{item.name}}
               </td>
               <td>
                   {{item.address.street}}
               </td>
               <td>
                   {{item.phone}}
               </td>
               <td>
                   {{item.email}}
               </td>
               <td>
                 {{item.username}}
               </td>
               <td>
                 {{item.website}}
               </td>
           </tr>
      </table>

   </div>
</template>
<script>
import axios from "axios";
axios.defaults.baseURL = "http://localhost:3000";
export default {
  data() {
    return {
      list: [],
      isloading: true
    };
  },
  created() {
    this.timer = setTimeout(() => {
      this.getList();
    }, 3000);
  },
  computed: {},
  methods: {
    getList() {
      axios.get("/api/list").then(res => {
        this.list = res.data;
        console.log(this.list);
        this.isloading = false;
      });
    }
  }
};
</script>
<style scoped>
.demoa {
  text-align: center;
  margin-top: 30px;
}
.loadEffect {
  width: 100px;
  height: 100px;
  margin: 0 auto;
  margin-top: 100px;
  position: relative;
}
.loadEffect div {
  width: 100%;
  height: 100%;
  position: absolute;
  -webkit-animation: load 2.08s linear infinite;
}
.loadEffect div span {
  display: inline-block;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: lightgreen;
  /* position: absolute; */
  /* left: 50%;
  margin-top: -10px;
  margin-left: -10px;*/
}
@-webkit-keyframes load {
  0% {
    -webkit-transform: rotate(0deg);
  }
  10% {
    -webkit-transform: rotate(45deg);
  }
  50% {
    opacity: 1;
    -webkit-transform: rotate(160deg);
  }
  62% {
    opacity: 0;
  }
  65% {
    opacity: 0;
    -webkit-transform: rotate(200deg);
  }
  90% {
    -webkit-transform: rotate(340deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
  }
}
.loadEffect div:nth-child(1) {
  -webkit-animation-delay: 0.2s;
}
.loadEffect div:nth-child(2) {
  -webkit-animation-delay: 0.4s;
}
.loadEffect div:nth-child(3) {
  -webkit-animation-delay: 0.6s;
}
.loadEffect div:nth-child(4) {
  -webkit-animation-delay: 0.8s;
}
</style>