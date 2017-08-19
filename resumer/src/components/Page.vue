<template lang="html">
  <div class="page">
    <p>a new page</p>
    <div class="button-wrapper">
      <router-link class="button" to="/page1">next page</router-link>
      <router-link class="button" to="/page1">last page</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Page'
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
