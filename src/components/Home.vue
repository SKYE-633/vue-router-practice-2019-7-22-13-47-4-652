<template>
  <div>
    <div>
      姓名：Skye
      <ol>
        <li>
          <a-button @click="showConfirm">Confirm</a-button>
        </li>
        <li>
          <router-link to="/TodoList">TodoList列表</router-link>
        </li>
        <li>
          <router-link to="/Welcome">我的</router-link>
        </li>
      </ol>
    </div>
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import TodoList from "./TodoList";
export default {
  name: "Home",
  components: {
    TodoList
  },
  methods: {
    showConfirm() {
      this.$confirm({
        title: 'Do you confirm?',
        content: 'Some descriptions',
        onOk() {
          console.log('OK');
        },
        onCancel() {
          console.log('Cancel');
        },
        class: 'test',
      });
    },
  computed: {
    getLoginUser: function() {
      return this.$store.state.name;
    }
  }
};
</script>

<style>
</style>
