<template lang="html">
  <div class="painting-page">
    <!-- <TransisionLayer/> -->
    <transition name="bounce">
      <div class="painting-display" v-if="this.$store.state.isPaintingShow">
        <PaintingDisplay/>
      </div>
    </transition>
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
        <div class="button" @click="handleCategory('书法')"><img src="../assets/src/piclist_21.png"></div>
        <div class="button" @click="handleCategory('连环画')"><img src="../assets/src/piclist_27.png"></div>
        <div class="button" @click="handleCategory('速写')"><img src="../assets/src/piclist_30.png"></div>
        <div class="button" @click="handleCategory('人物')"><img src="../assets/src/piclist_34.png"></div>
        <div class="button" @click="handleCategory('临摹')"><img src="../assets/src/piclist_37.png"></div>
        <div class="button" @click="handleCategory('山水')"><img src="../assets/src/piclist_40.png"></div>
        <div class="button" @click="handleCategory('花鸟')"><img src="../assets/src/piclist_43.png"></div>
        <div class="button" @click="closeLeftMenu()"><img src="../assets/src/fenlei_29.png"></div>
      </div>
      <div class="menu" v-else>
        <div class="button" @click="openLeftMenu()"><img src="../assets/src/fenlei_29.png"></div>
      </div>
    </div>
    <div class="content-wrapper">
      <div class="title">
        <span> {{ listTitle }} </span>
      </div>
      <div class="img-list">
        <div class="img" v-for="painting in rows">
          <div class="painting-wrapper">
            <div class="poi"  @click="handlePainting()"
              style="background-image: url(imgs/painting_img2.jpg);
                      background-size: cover">
              <!-- <img src="../assets/src/painting_img2.jpg" alt=""> -->
            </div>
          </div>
          <div class="img-description">
            <p>{{ painting.name }}</p>
            <p>{{ painting.create_time }}</p>
          </div>
          <!-- <div class="img_detail" >
            <p>{{painting.name}}</p>
            <p>{{painting.time}}</p>
            <p>{{painting.size}}</p>
            <p>{{painting.qualitaive}}</p>
            <p>{{painting.collection}}</p>
            <p>{{painting.inscription}}</p>
            <p>{{painting.seal}}</p>
          </div> -->
        </div>
      </div>
    </div>
    <!-- <mu-raised-button label="undocked drawer" @click="toggle(true)"/> -->
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
import db from '../ignore_lib/GsyDB'
import TransisionLayer from '../components/TransisionLayer'
import PaintingDisplay from '../components/PaintingDisplay'
export default {
  name: 'Painting',
  components: { db, TransisionLayer, PaintingDisplay },
  data () {
    return {
      open: false,
      docked: true,
      rows: [],
      listTitle: '画作'
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
    }
  },
  methods: {
    openLeftMenu () {
      return this.$store.commit('openLeftMenu')
    },
    closeLeftMenu () {
      return this.$store.commit('closeLeftMenu')
    },
    toggle (flag) {
      this.open = !this.open
      this.docked = !flag
    },
    handleCategory (value) {
      let categoryId = this.$store.state.category_id
      this.listTitle = value
      db.getWorkList(categoryId[value], (row) => {
        this.rows = row
      })
      document.body.scrollTop = 0
    },
    handlePainting () {
      this.$store.commit('handlePaintingShow', true)
    }
  },
  created: function () {
    this.$store.commit('setMenuBarSeen', true)
    this.$store.commit('closeRightMenu')
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
    db.getWorkList(0, (row) => {
      this.rows = row
      console.log(this.rows[0])
    })
  }
  /* mounted: function () {
    $(function () {
      $('.img_detail').hide()
      $('.img-description').hover(function () {
        $('.img_detail').show()
      }, function () {
        $('.img_detail').hide()
      })
      $('.img_detail').hover(function () {
        $('.img_detail').show()
      }, function () {
        $('.img_detail').hide()
      }) */
}
</script>

<style lang="less" scoped>
@import "../assets/animate.less";
.painting-page {
  overflow: hidden;
  .painting-display {
    position: fixed;
    top: 0;
    left: 0;
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
      margin-top: 15vh;
      line-height: 10vh;
      font-size: 5vh;
      background-image:url(../assets/src/flower_11.png);
      background-repeat: no-repeat;
      background-size: contain;
      background-position: center;
      width: 100vw;
      color:#6F473B ;
    }
    .img-list {
      display: flex;
      justify-content: flex-start;
      width: 80vw;
      margin-right: 0;
      flex-wrap: wrap;
      .img {
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
          p {
            width: 100%;
            color: #6F473B;
            font-size: 2vh;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
            text-align: center;
          }
        }
      }
    }
  }
}
.menu-wrapper-left {
  position: fixed;
  left: 1vh;
  bottom: 1vw;
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
  margin-left: 2vw;
  margin-right: 2vw;
}
.poi {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
}
.img  img {
  // clip-path: circle(80px at 50% 50%);
  /*@media*/
}


.img_detail{
  background-color:#FFFFFF;
  display:block ;
  opacity: 0;
  transition: 0.3s;
  position: absolute;
  -webkit-transition: .5s;
  -moz-transition: .5s;
}
.img-description:hover .img_detail{
	opacity: 1;
}
</style>
