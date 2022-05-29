<template>
   <div class="form_div">
        <form action="" @submit.prevent="onSubmit">
        <input type="text" name="title" v-model="title" placeholder="Add todo..">
        
        <input type="submit">
    </form>
   </div>
</template>

<script>
import {mapActions} from 'vuex'

export default {
  name: 'AddTodo',
  datae () {
      return {
          title: '',
      }
  },
  methods : {
   ...mapActions(["addTodos"]),
   onSubmit () {
     this.addTodos(this.title)
     this.title = ""
   }
 },


}
</script>

<style>
.form_div{
  display: flex;
    align-content: center;
    justify-content: center;
}
/* form{
    width: 500px;
    display: flex;
    align-content: center;
    justify-content: center;
}
form input[type="text"]{
    width:100%;
    padding: 10px;
    margin: 10px 0;
    outline: none;
    
}

form input[type="submit"]{
    align-items: center;
    width:100px;

    padding: 10px;
    margin: 10px 0;
    outline: none;
    cursor: pointer;
    background: #333;
    color:#fff;
    
} */
 form {
    display: flex;
    margin-top: 50px ;
    margin-bottom: 20px;
  }
 
  input[type="text"] {
    outline:none;
    border:none;
    flex: 20;
    padding: 15px;
    font-size: 14px;
    
  }
 
  input[type="submit"] {
    flex: 2;
    background: #41b883;
    color: #fff;
    border: 1px solid #41b883;
    cursor: pointer;
  }
</style>