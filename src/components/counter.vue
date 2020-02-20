<template>
  <div class="setting">
    <el-divider>
      我是组件的分割线
    </el-divider>
    <h1>This is a {{name}} page</h1>
    <p>
      {{showCount}}
    </p>
    <el-button 
      @click="onButtonClick"
      type="primary"
    >
      点击增加
    </el-button>
    <el-button 
      @click="changePropsDescription"
      type="primary"
    >
      点击发送emit
    </el-button>
    <el-button 
      @click="doMethod"
      type="primary"
    >
      点击使用Method
    </el-button>
  </div>
</template>

<script lang="ts">
import { mapState } from 'vuex';
import { Component, Vue, Prop, Watch, Emit } from 'vue-property-decorator'
import { Message } from 'element-ui';

@Component({
  name: 'counter',  // 组件名称
})
export default class extends Vue {
  // data
  count: number =  1
  name: string = 'setting'

  // computed
  get showCount(): string {
    return `Clicked ${this.count} counts`
  }

  // 指定 description 为 prop
  @Prop({ 
    default: 'default description',
    required: true,
  }) private description!: string;

  onButtonClick(): void {
    this.count += 1;
  }

  mounted(): void {
    Message.info(`欢迎来到${this.description}`);
  }

  // watch
  @Watch('count')
  onCountChange(val: number, old: number): void {
    Message.info(`Watch new value: ${val}, old value: ${old}`)
  }

  @Emit('changeDescription')
  changePropsDescription(): string {
    return this.description === '横须贺镇守府' ? '鹿屋基地' : '横须贺镇守府'
  }

  // Methods
  doMethod () {
    Message.info(`Method Triggered`)
  }
}
</script>
