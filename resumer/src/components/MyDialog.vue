<template>
  <div class="wrapper" v-show="visible">
    <div class="dialog">
      <header>{{ title }}
        <span class="close" @click="close">X</span>
      </header>
      <main>
        <slot></slot>
      </main>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'MyDialog',
    props: ['title', 'visible'],
    methods: {
      close () {
        this.$emie('close')
      }
    }
  }
</script>

<style scoped lang="scss">

</style>
