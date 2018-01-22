<template>
    <div class="content">
      <button @click="addT">增加</button>
      <button @click="deleteT">删除</button>
      <br/>
       <ul>
         <li v-for="(item,index) in notes" :key="index">{{item.text}}</li>
       </ul>
        <div class="tt">
          <p>编辑框</p>
          <textarea name="tt"  cols="30" rows="10" style="border:none" v-model="activeNote.text">默认值</textarea>
        </div>
    </div>
</template>
<script>
import { mapState, mapActions, mapGetters, mapMutations } from "vuex";
export default {
  name: "content_body",
  data() {
    return {};
  },
  components: {},

  computed: {
    ...mapState(["notes", "activeNote"])
  },
  methods: {
    ...mapActions(["addT", "deleteT"])
  }
};
</script>
<style scoped>
.content {
  margin: 50px;
}
.tt {
  position: absolute;
  top: 150px;
  left: 450px;
}
</style>