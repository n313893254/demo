<template>
  <div class="setting">
    <p>
      {{description}}
    </p>
    <counter
      :description="description"
      @changeDescription="changeDescription"
    />
    <el-divider>
      我是Vuex的分割线
    </el-divider>
    <p>
      Vuex: {{homeStore.title}}
      <el-button 
        @click="changeTitle"
        type="primary"
      >
        点击修改vuex
      </el-button>
    </p>
    <p>
      {{color}}
    </p>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Counter from '@/components/counter.vue';
import { State, Action } from 'vuex-class';
import { IHomeState } from '@/store/homeStore';

enum COLOR {
  RED = 'red',
  GREEN = 'green',
  BLUE = 'blue',
}

@Component({
  name: 'Setting',
  components: {
    Counter,
  }
})
export default class extends Vue {
  @State homeStore!: IHomeState;
  description: string = '鹿屋基地'

  @Action('homeStore/setTitle') changeTitleAc!: Function;

  changeTitle(): void {
    this.changeTitleAc(Math.random());
  }

  changeDescription(value: string): void {
    this.description = value
  }

  color: string = COLOR.RED
}
</script>
