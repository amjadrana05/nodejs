const Router = require('express').Router();
const { todoList, todoListDoneOnly, todoListNotDone, todoListTodayDone, singleTodo, createTodo, updateTodo, deleteTodo} = require('../controllers/todoController')

//Get 
Router.get('/', todoList)

//Get completed only todo
Router.get('/:done=true', todoListDoneOnly)

//Get Not completed todo
Router.get('/:done=false', todoListNotDone)

//Get all today completed todo
Router.get('/:today', todoListTodayDone)

//Get single data
Router.get('/:_id', singleTodo)

//Post
Router.post('/', createTodo)

//Put
Router.put('/:_id', updateTodo)

//Delete
Router.delete('/:id', deleteTodo)

module.exports = Router