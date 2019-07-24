<template>
  <div>
    <a-input placeholder="Basic usage" type="text" v-model="item" /> 
    <a-button type="danger" id="addBtn" @click="addItem">Add</a-button>
  </div>
</template>
<script>
export default {
  name: "AddItem",
  data() {
    return {
      item: ""
    };
  },
  methods: {
    addItem() {
      this.$store.dispatch("addItem", { content: this.item, isCompleted: false });
      this.item = "";
    }
  }
};
</script>
<style></style>