<template lang="html">
  <div class="">
    <MenuBar/>
    <p>视频列表</p>
      <div class="box">
      	<router-link to="/VideoList/Video">      
      		<div class="photo">
        	<img src="../assets/src/video.jpg">
        	<p>创作过程</p>
      		</div>
      	</router-link>
      	<router-link to="/VideoList/Video">      
      		<div class="photo">
        	<img src="../assets/src/video.jpg">
        	<p>创作过程</p>
      		</div>
      	</router-link>
      	<router-link to="/VideoList/Video">      
      		<div class="photo">
        	<img src="../assets/src/video.jpg">
        	<p>创作过程</p>
      		</div>
      	</router-link>
      	<router-link to="/VideoList/Video">      
      		<div class="photo">
        	<img src="../assets/src/video.jpg">
        	<p>创作过程</p>
      		</div>
      	</router-link>
      	<router-link to="/VideoList/Video">      
      		<div class="photo">
        	<img src="../assets/src/video.jpg">
        	<p>创作过程</p>
      		</div>
      	</router-link>
      	<router-link to="/VideoList/Video">      
      		<div class="photo">
        	<img src="../assets/src/video.jpg">
        	<p>创作过程</p>
      		</div>
      	</router-link>
      	<router-link to="/VideoList/Video">      
      		<div class="photo">
        	<img src="../assets/src/video.jpg">
        	<p>创作过程</p>
      		</div>
      	</router-link>
      	<router-link to="/VideoList/Video">      
      		<div class="photo">
        	<img src="../assets/src/video.jpg">
        	<p>创作过程</p>
      		</div>
      	</router-link>
    </div>
    </div>
  </div>
</template>

<script>
import MenuBar from './MenuBar'

export default {
  name: 'VideoList',
  components: { MenuBar }
}
</script>

<style lang="css">
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
