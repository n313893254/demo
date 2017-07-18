<template lang="html">
  <div class="">
    <MenuBar/>
    <div class="menu-wrapper-left">
      <div class="menu" v-if="leftMenuSeen">
        <div class="button" @click="set('书法')">书法</div>
        <div class="button" @click="set('连环画')">连环画</div>
        <div class="button" @click="set('速写')">速写</div>
        <div class="button" @click="set('人物')">人物</div>
        <div class="button" @click="set('临摹')">临摹</div>
        <div class="button" @click="set('山水')">山水</div>
        <div class="button" @click="set('花鸟')">花鸟</div>
        <div class="button" @click="closeLeftMenu()">返回</div>
      </div>
      <div class="menu" v-else>
        <div class="button" @click="openLeftMenu()">分类菜单</div>
      </div>
    </div>
    <div class="title">
      <span> {{ title }} </span>
    </div>
    <div class="img-list">
      <div class="img">
        <router-link to="/Painting/Display"><img src="http://omph2coqc.bkt.clouddn.com/00357C.png" alt=""></router-link>
        <p>这是{{ title }}图片</p>
      </div>
      <div class="img">
        <router-link to="/Painting/Display"><img src="http://omph2coqc.bkt.clouddn.com/00357C.png" alt=""></router-link>
        <p>这是{{ title }}图片</p>
      </div>
      <div class="img">
        <router-link to="/Painting/Display"><img src="http://omph2coqc.bkt.clouddn.com/00357C.png" alt=""></router-link>
        <p>这是{{ title }}图片</p>
      </div>
      <div class="img">
        <router-link to="/Painting/Display"><img src="http://omph2coqc.bkt.clouddn.com/00357C.png" alt=""></router-link>
        <p>这是{{ title }}图片</p>
      </div>
      <div class="img">
        <router-link to="/Painting/Display"><img src="http://omph2coqc.bkt.clouddn.com/00357C.png" alt=""></router-link>
        <p>这是{{ title }}图片</p>
      </div>
      <div class="img">
        <router-link to="/Painting/Display"><img src="http://omph2coqc.bkt.clouddn.com/00357C.png" alt=""></router-link>
        <p>这是{{ title }}图片</p>
      </div>
      <div class="img">
        <router-link to="/Painting/Display"><img src="http://omph2coqc.bkt.clouddn.com/00357C.png" alt=""></router-link>
        <p>这是{{ title }}图片</p>
      </div>
    </div>
  </div>
</template>

<script>
import MenuBar from './MenuBar'

export default {
  name: 'Painting',
  components: { MenuBar },
  computed: {
    title () {
      return this.$store.state.paintingTitle
    },
    leftMenuSeen () {
      return this.$store.state.leftMenuSeen
    }
  },
  methods: {
    set (value) {
      return this.$store.commit('setPaintingList', value)
    },
    openLeftMenu () {
      return this.$store.commit('openLeftMenu')
    },
    closeLeftMenu () {
      return this.$store.commit('closeLeftMenu')
    }
  }
}
</script>

<style lang="css" scoped>
.menu-wrapper-left {
  position: fixed;
  left: 1vh;
  bottom: 1vw;
  /*margin: 5vh 5vw;*/
}

.img  img {
  height: 30vh;
  width: 20vh;
  margin: 1vh 1vw;
}

.title {
  height: 10vh;
  text-align: center;
}

.img-list {
  display: flex;
  justify-content:flex-start;
  width: 70vw;
  flex-wrap: wrap;
}
</style>
