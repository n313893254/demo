<template lang="html">
  <div class="" >
    <v-touch @pinchout="onPinchout">
      <TransisionLayer/>
      <p>这是年表</p>
      <router-link class="button" to="/Painting">画作</router-link>
      <router-link class="button" to="/exhibit">生活</router-link>
      <button>工作</button>
      <router-link class="button" to="/Chronological/ArticleDetail">文章</router-link>
      <button>展览</button>
      <p>时间轴</p>
      <v-touch class="button" @tap="onSwipeLeft">Swipe me!</v-touch>
    </v-touch>
    <!-- <object id="tuio" type="application/x-tuio" style="width: 0px; height: 0px;">
      Touch input plugin failed to load!
    </object> -->
  </div>
</template>

<script>
import TransisionLayer from '../components/TransisionLayer'
// import tuio from '../ignore_lib/magictouch'
export default {
  name: 'Chronological',
  components: { TransisionLayer },
  computed: {
    message () {
      return this.$store.state.message
    }
  },
  methods: {
    // hammer.js 测试触屏手势
    onSwipeLeft () {
      console.log('poi')
    },
    onPinchout () {
      console.log('yamato')
    }
  },
  created: function () {
    this.$store.commit('setMenuBarSeen', true)
    this.$store.commit('closeRightMenu')
  }
}
</script>

<style lang="css" scoped>
p{
	margin: auto;
	font-size: 9vw;
}
</style>
