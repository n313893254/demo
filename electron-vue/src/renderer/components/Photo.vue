<template lang="html">
  <div class="">
    <MenuBar/>
    <p>照片列表</p>
    <div class="box">
      <div class="photo">
        <img src="../assets/src/photo.jpg">
        <p>关山月与朋友合照</p>
      </div>
      <div class="photo">
        <img src="../assets/src/photo.jpg">
        <p>关山月与朋友合照</p>
      </div>
      <div class="photo">
        <img src="../assets/src/photo.jpg">
        <p>关山月与朋友合照</p>
      </div>
      <div class="photo">
        <img src="../assets/src/photo.jpg">
        <p>关山月与朋友合照</p>
      </div>
      <div class="photo">
        <img src="../assets/src/photo.jpg">
        <p>关山月与朋友合照</p>
      </div>
      <div class="photo">
        <img src="../assets/src/photo.jpg">
        <p>关山月与朋友合照</p>
      </div>
      <div class="photo">
        <img src="../assets/src/photo.jpg">
        <p>关山月与朋友合照</p>
      </div>
      <div class="photo">
        <img src="../assets/src/photo.jpg">
        <p>关山月与朋友合照</p>
      </div>
    </div>
  </div>
</template>

<script>
import MenuBar from './MenuBar'

export default {
  name: 'Photo',
  components: { MenuBar }
}
</script>

<style lang="css" scoped>
.box{
	width: 83vw;
	height: 90vh;
	border: dotted 1px #000000;
}
.photo{
	width: 15vw;
	height: 35vh;
	float: left;
	margin: 3%;
	margin-top: 2.5%;
}
img{
	width: 15vw;
	height: 25vh;
}
</style>
