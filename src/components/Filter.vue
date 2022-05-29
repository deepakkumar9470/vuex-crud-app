<template>
      
        <div class="filter">
            Filter Todos :
            <select name="" id="" @change="filterTodo($event)">
                <option value="200">200</option>
                <option value="100">100</option>
                <option value="50">50</option>
                <option value="20">20</option>
                <option value="10">10</option>
                <option value="5">5</option>
            </select>
        </div>
</template>

<script>
import {mapActions} from 'vuex';
export default {
  name:  'Filter',
  methods : mapActions(["filterTodo"])
 
}
</script>

<style scoped>
.filter{
    margin-left: 140px;
}
select{
    margin: 20px 0;
    padding:6px;
    border:1px solid #97DBAE
}
</style>