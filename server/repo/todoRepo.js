const Todo = require('../models/todo');

const getAllTodos = async  (userId) => {
   try {
      const todos = await Todo.find({ userId: userId });
      return todos
   }
   catch (e) {
      throw new Error(`db error ${e.message}`)
   }
}
const createTodo = async  (userId, body) => {
    try {
      const {title, status} = body
      const todo = new Todo({ userId: userId, title, status});
      await todo.save();
    }
    catch (e) {
      throw new Error(`db error ${e.message}`)
    }
}

const updateTodo  = async (userId, id, body) => {
    try {
      const todo = await Todo.findOneAndUpdate({ _id: id, userId: userId }, body, { new: true });
      return todo
    }
    catch (e) {
      throw new Error(`db error ${e.message}`)
   }
}

const deleteTodo  = async (userId, id) => {
   try {
      const todo = await Todo.findOneAndDelete({ _id: id, userId: userId });
      return todo
   }
   catch (e) {
       throw new Error(`db error ${e.message}`)
   }
}


module.exports.getAllTodos =  getAllTodos
module.exports.createTodo =  createTodo
module.exports.updateTodo =  updateTodo
module.exports.deleteTodo =  deleteTodo

