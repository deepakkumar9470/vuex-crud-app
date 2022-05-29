<template>
 <div class="legend">
      <span>Double click to mark as complete</span>
      <span>
        <span class="incomplete-box"></span> = Incomplete
      </span>
      <span>
        <span class="complete-box"></span> = Complete
      </span>
    </div>
    <div class="todos">

      <div @dblclick="onDblClick(t)" 
      :class="{'is-complete' : t.completed}"
      class="todo"  
      v-for="t in getTodos" :key="t.id">
    {{t.id}}. {{t.title}} |  {{t.completed}}
    <i  @click="deleteTodo(t.id)" class="fa-solid fa-xmark icon"></i>
  </div>
    </div>

</template>

<script>
import { mapGetters ,mapActions} from 'vuex';


export default {
 name : 'HeloWorld',

 methods : {
   ...mapActions(["fetchTodo", "deleteTodo", "updateTodo"]),
    onDblClick(todo){
    const updTodo = {
      id : todo.id,
      title: todo.title,
      completed : !todo.completed
    }
    this.updateTodo(updTodo)
   }
 },

 computed  : mapGetters(["getTodos"]),

 created () {
   this.fetchTodo()
 }

}

</script>


<style>
.icon{
  width: 10px;
  height: 10px;
  position: absolute;
  top: 5px;
  right: 10px;
  font-size: 12px;
  padding: 3px;
  background: #fff;
  border-radius: 50%;
  color: #FF0000;
}
 .todos {
   margin: 50px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 1rem;
  }
/* 
li{
  position: relative;
  width: 400px;
  height: 50px;
  list-style:none;
  margin-bottom: 10px;
  padding:10px;
  border-radius: 5px;;
  background: #d1f5fa;
  font-size: 20px;
  cursor: pointer;
} */

  .todo {
    position: relative;
    list-style:none;
    background: #E8F9FD;
    padding: 1rem;
    display: flex;
    align-items: center;
    font-size: 18px;
    border-radius: 5px;
    text-align: center;
    position: relative;
    margin-bottom: 10px;
    cursor: pointer;
  }
  .legend {
    display: flex;
    justify-content: space-around;
    margin-bottom: 1rem;
  }
  .complete-box,
  .incomplete-box {
    display: inline-block;
    width: 10px;
    height: 10px;
  }
  .complete-box {
    background: #35495e;
  }
  .incomplete-box {
    background: #41b883;
  }
  .is-complete {
    background: #041C32;
    color: #fff;
  }
</style>