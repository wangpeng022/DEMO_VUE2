<template>
    <div>

        <div class="bb" v-drag>
          <!-- 自定义：局部指令 v-drag 可拖拽 -->
        </div>
        <div class="bb" v-drag></div>
        <div class="bb" v-drag></div>
        <div class="bb" v-drag></div>

        <p>{{msg}}</p>
        <p  v-pre>{{msg}}</p>
        <br/>
        <br/>
        <br/>
        <br/>
        <p>自定义：局部指令 v-drag 可拖拽</p>
    </div>
</template>
<script>
export default {
  data() {
    return {
      msg: "123467890"
    };
  },
  directives: {
    drag(el) {
      el.onmousedown = function(e) {
        var disx = e.pageX - el.offsetLeft;
        var disy = e.pageY - el.offsetTop;
        document.onmousemove = function(e) {
          var x = e.pageX - disx;
          var y = e.pageY - disy;
          el.style.top = y + "px";
          el.style.left = x + "px";
        };
        document.onmouseup = function() {
          document.onmousemove = document.onmouseup = null;
        };
        //e.preventDefault();
      };
    }
  }
};
</script>
<style scoped>
.bb {
  display: block;
  position: absolute;
  top: 100px;
  left: 280px;
  width: 100px;
  height: 100px;
  background: rgb(60, 161, 122);
  border-radius: 50%;
}
</style>