<template>
  <AddTodo/>
  <Filter/>
  <Todos/>
</template>

<script>
import Todos from './components/Todos.vue'
import AddTodo from './components/AddTodo.vue'
import Filter from './components/Filter.vue'

export default {
  name: 'App',
  components: {
    Todos,
    AddTodo,
    Filter
}
}
</script>

<style>
body{
  display: flex;
  overflow-x: hidden;
  align-content: center;
  justify-content: center;
  width: 100%;
  font-family:Verdana, Geneva, Tahoma, sans-serif;
  height: 100vh;
  background: #eaeceb;
}
</style>
