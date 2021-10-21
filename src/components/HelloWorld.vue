<template>
  <div class="hello">
    <button
      class="px-5 bg-blue-500 hover:bg-blue-300 text-white ml-52 py-2 shadow-lg rounded-full"
    >
      Clicke me
    </button>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
