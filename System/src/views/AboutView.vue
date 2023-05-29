<template>
  <div class="about">
    <h1>
      哈哈哈哈
      <div>hhhh</div>
      <button @click="test">test</button>
      <el-button>Default</el-button>
    </h1>
  </div>
</template>
<script setup>
import axios from '../axios/api'

function test() {
  console.log(axios)
  axios.login().then(res => {
    console.log(res)
  })
}
</script>

<style lang="less"></style>
