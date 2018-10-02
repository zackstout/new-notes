<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>

    <button v-stream:click="click$">Yo</button>
    <h1> {{ random$ }} </h1>

  </div>

</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import {Observable} from 'rxjs/Rx'

export default {
  name: 'app',
  components: {
    HelloWorld
  },
  domStreams: ["click$"],
  subscriptions() {
    const random$ = this.click$.map(() => Math.floor(Math.random() * 100))

    return {
      random$
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
