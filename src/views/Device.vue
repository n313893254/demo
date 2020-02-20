<template>
  <div class="device">
    <h1>This is an {{name}} page</h1>
    <el-button 
      @click="doMethod"
      type="primary"
    >
      点击使用Method
    </el-button>
    <el-input 
      v-model="input" 
      placeholder="请输入内容"
    />
    <p>
      {{formatInput}}
    </p>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Message } from 'element-ui';

interface Idata {
  name: string;
  locations: string[];
  input: string;
}

export default Vue.extend({
  data(): Idata {
    return {
      name: 'new device',
      locations: [],
      input: '',
    };
  },

  // data() {
  //   return {
  //     name: 'new device' as string,
  //     locations: [] as string[],
  //     input: '' as string,
  //   };
  // },

  computed: {
    formatInput(): string {
      return `Input: ${this.input}`
    }
  },

  methods: {
    doMethod (): void {
      Message.info(`Method Triggered`)
    }
  },

  props: {
    title: String,
    likes: Number,
    isPublished: Boolean,
    commentIds: Array,
    author: Object,
    callback: Function,
    contactsPromise: Promise // or any other constructor
  },

  mounted: function () {
    this.doMethod()
  }
});
</script>