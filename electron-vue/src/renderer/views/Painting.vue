<template lang="html">
  <div class="body">
  	<div class="nav">
  		<div class="small_logo">
  			<img src="../assets/src/piclist_06.png">
  		</div>
  	  <div class="yemei_title">
  	  	<p>知识库》画作》山水</p>
  	  </div>
  	  <div class="yemei_year">
  	  	<img src="../assets/src/piclist_03.png">
  	  </div>
  	  <div class="gongsi"><img src="../assets/src/logoe4.png">
  	  	<p>伊世易技术支持</p></div>
  	</div>
    <div class="menu-wrapper-left">
      <div class="menu" v-if="leftMenuSeen">
        <div class="button" @click="set('书法')"><img src="../assets/src/piclist_21.png"></div>
        <div class="button" @click="set('连环画')"><img src="../assets/src/piclist_27.png"></div>
        <div class="button" @click="set('速写')"><img src="../assets/src/piclist_30.png"></div>
        <div class="button" @click="set('人物')"><img src="../assets/src/piclist_34.png"></div>
        <div class="button" @click="set('临摹')"><img src="../assets/src/piclist_37.png"></div>
        <div class="button" @click="set('山水')"><img src="../assets/src/piclist_40.png"></div>
        <div class="button" @click="set('花鸟')"><img src="../assets/src/piclist_43.png"></div>
        <div class="button" @click="closeLeftMenu()"><img src="../assets/src/fenlei_29.png"></div>
      </div>
      <div class="menu" v-else>
        <div class="button" @click="openLeftMenu()"><img src="../assets/src/fenlei_29.png"></div>
      </div>
    </div>
    <div class="content-wrapper">
      <div class="title">
        <span> {{ title }} </span>
      </div>
      <div class="img-list">
        <div class="img" v-for="painting in paintings">
          <div class="painting-wrapper">
            <router-link class="poi"
              :to="{ path: '/Painting/Display', query: { src: painting.imgSrc }}">
              <img :src="painting.imgSrc" alt="">
            </router-link>
          </div>
          <div class="img-description">
            <p>{{ painting.title }}</p>
            <p>{{ painting.year }}</p>
          </div>
          <div class="img_detail" >
            <p>{{painting.name}}</p>
            <p>{{painting.time}}</p>
            <p>{{painting.size}}</p>
            <p>{{painting.qualitaive}}</p>
            <p>{{painting.collection}}</p>
            <p>{{painting.inscription}}</p>
            <p>{{painting.seal}}</p>
          </div>
        </div>
      </div>
    </div>
    <mu-raised-button label="undocked drawer" @click="toggle(true)"/>
    <mu-drawer :open="open" :docked="docked" @close="toggle()">
      <mu-list @itemClick="docked ? '' : toggle()">
        <mu-list-item title="Menu Item 1"/>
        <mu-list-item title="Menu Item 2"/>
        <mu-list-item title="Menu Item 3"/>
        <mu-list-item v-if="docked" @click.native="open = false" title="Close"/>
      </mu-list>
    </mu-drawer>
  </div>
</template>

<script>
export default {
  name: 'Painting',
  data () {
    return {
      open: false,
      docked: true
    }
  },
  computed: {
    title () {
      return this.$store.state.paintingTitle
    },
    leftMenuSeen () {
      return this.$store.state.leftMenuSeen
    },
    paintings () {
      return this.$store.state.paintings.slice(0, 12)
    },
    display () {

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
    },
    toggle (flag) {
      this.open = !this.open
      this.docked = !flag
    }
  },
  created: function () {
    this.$store.commit('setMenuBarSeen', true)
    let paintings = this.$store.state.paintings.slice(0, 12)
    for (let i in paintings) {
      let img = new Image()
      img.src = paintings[i].imgSrc
      if (img.height > img.width) {
        this.$store.commit('setDisplay', {
          number: i,
          display: 'height'
        })
      } else {
        this.$store.commit('setDisplay', {
          number: i,
          display: 'width'
        })
      }
    }
  }
}
</script>

<style lang="less" scoped>
.body {
  overflow: hidden;
}
.menu-wrapper-left {
  position: fixed;
  left: 1vh;
  bottom: 1vw;
}
.title{
	background-image:url(../assets/src/flower_11.png);
	background-repeat: no-repeat;
	background-size: contain;
  background-position: center;
	width: 100vw;
	color:#6F473B ;
  margin-top: 10vh;
}
.title span{
	font-size: 2.5vw;
	text-align: center;
}
.painting-wrapper {
  height: 100%;
  width: 100%;
}
.img {
  height: 30vh;
  width: 16vw;
  margin-bottom: 16vh;
}
.poi {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.img  img {
  clip-path: circle(80px at 50% 50%);
  /*@media*/
}
.img p {
  color: #6F473B;
  font-size: 2vh;
}
.img-description {
	margin-top: 1vh;
	height: 8vh;
	background-size: 100% 100%;
	background-image: url(../assets/src/piclist_24.png);
	background-repeat: no-repeat;
	background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.content-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .title {
    height: 10vh;
    text-align: center;
    margin: 5vh auto;
    margin-top: 10vh;
    line-height: 10vh;
    font-size: 5vh;
  }
  .img-list {
    display: flex;
    justify-content: flex-start;
    width: 80vw;
    margin-right: 0;
    flex-wrap: wrap;
  }
}
.img_detail{
  background-color: #000000;
  display: none;
}
</style>
