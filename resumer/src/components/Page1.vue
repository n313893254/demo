<template lang="html">
  <div class="page">
    <p>a new page1</p>
    <div class="button-wrapper">
      <router-link class="button" to="/page">next page</router-link>
      <router-link class="button" to="/page">last page</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Page1'
}
</script>

<style lang="css">

.page {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
}

.button-wrapper {
  display: flex;
  justify-content: space-between;
  width: 100vw;
}
</style>
