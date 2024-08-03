const todoRepo = require('../repo/todoRepo')

const getAllTodos = async  (userId) => {
   const todo = await todoRepo.getAllTodos(userId);
   return todo;
}
const createTodo = async  (userId, body) => {
   const todo = await todoRepo.createTodo(userId, body);
   return todo
}

const updateTodo  = async (userId, id, body) => {
    const todo = await todoRepo.updateTodo(userId, id, body);
    return todo;
}

const deleteTodo  = async (userId, id) => {
   const todo = await todoRepo.deleteTodo(userId, id);
   return todo;
}


module.exports.getAllTodos =  getAllTodos
module.exports.createTodo =  createTodo
module.exports.updateTodo =  updateTodo
module.exports.deleteTodo =  deleteTodo