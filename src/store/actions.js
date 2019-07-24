import axios from 'axios'
export default {
  addTodoToBack({commit,state}, items){
    axios.post(`http://localhost:8001/todoList`,items)
      .then(function(response) {
        state.items.push(items);
        state.listItems = state.items;
        console.log(response.data);
      })
      .catch(function(error) {
        alert("please input repeat number.");
     });
  },
  findTodoListWithBack({commit,state}){
    axios.get(`http://localhost:8001/todoList`)
      .then(function(response) {
        console.log(response.data);
        state.items = response.data;
        state.listItems = response.data;
      })
      .catch(function(error) {
        console.log(error);
     });
  },
  updateTodoWithBack({commit,state},item){
    axios.put(`http://localhost:8001/todoList?key=${item.key}&value=${item.value}`)
      .then(function(response) {
        console.log(response.data);
      })
      .catch(function(error) {
        console.log(error);
     });
  },
  deleteTodoWithBack({commit,state},index){
    axios.delete(`http://localhost:8001/todoList/${index}`)
      .then(function(response) {
        console.log(response.data);
      })
      .catch(function(error) {
        console.log(error);
     });
  },
}
