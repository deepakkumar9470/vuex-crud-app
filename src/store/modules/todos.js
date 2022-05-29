import axios from "axios"



const state = {
    todos : []
}
const getters ={
    getTodos :state => state.todos ,
    
}

const actions = {
    async fetchTodo ({commit}){
     const res = await axios.get('https://jsonplaceholder.typicode.com/todos')
      
     commit('setTodos', res.data)
    },

    async addTodos ({commit}, title){
        const res = await axios.post('https://jsonplaceholder.typicode.com/todos', {title, 
        completed: false}) 
        commit('newTodos', res.data)
    },
    
    async deleteTodo ({commit}, id){
        await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`) 
        commit('removeTodo', id)
    },

     
    async updateTodo({ commit }, updatedTodo) {
        const res = await axios.put(`https://jsonplaceholder.typicode.com/todos/${updatedTodo.id}`, updatedTodo);
        commit('updateTodo', res.data);
    },

    async filterTodo({ commit }, e) {
        const limit = parseInt(
            e.target.options[e.target.options.selectedIndex].innerText
        )
        const res = await axios.get(`https://jsonplaceholder.typicode.com/todos?_limit=${limit}`);
        commit('setTodos', res.data)
    }
 
 
}




const mutations = {
    setTodos  : (state,todos) => (state.todos = todos),
    newTodos  : (state,todo) =>  state.todos.unshift(todo), 
    removeTodo  : (state,id) =>  (state.todos = state.todos.filter(todo => todo.id !== id)),
    updateTodo : (state,updatetodo) => {
        const index = state.todos.findIndex(todo => todo.id === updatetodo.id)
        if(index !== -1){
            state.todos.splice(index, 1, updatetodo)
        }
    }
}


export default {
    state,
    getters,
    actions,
    mutations
}