const Todo = require('../models/Todo')

module.exports.todoList = async (req,res) =>{
  let allTodos = undefined;
  const queryTodo = req.query
  if (Object.keys(queryTodo).length){
    allTodos = await Todo.find(queryTodo)
  } else{
    allTodos = await Todo.find()
  }
  if (allTodos.length === 0)
    return res.status(404).json({
      "Message": "no todo found!"
    })
  return res.send(allTodos)
} 

module.exports.todoListDoneOnly = async (req, res) =>{
  const doneTodo = await Todo.find({"done": true})
  res.json(doneTodo);
}

module.exports.todoListNotDone = async (req, res ) => {
  const notDone = await Todo.find({"done": false})
  console.log(notDone);
  
  res.json(notDone)
}

module.exports.todoListTodayDone =  async (req, res) => {
  const todayDone = await Todo.findOne({ '"createdAt".toString()': Date.now()})
  res.json(todayDone);
}

module.exports.singleTodo = async (req, res) =>{
  const {_id} = req.params
  
  const findTodo = await Todo.findById(_id)
  if (findTodo)
    return res.json(findTodo)
  return res.json({
    "message": "Todo Not Found!"
  })

}

module.exports.createTodo = async (req, res) => {
  const todo = new Todo({
    task: req.body.task
  })

  const newTodo = await todo.save()
  res.json(newTodo);
};

module.exports.updateTodo = async (req, res) => {
  const todoUpdate = await Todo.findByIdAndUpdate(
    req.params._id, 
    {
      $set: {
        task: req.body.task,
        done: req.body.done
      }
    },
    {
      new: true
    });
  if (todoUpdate)
    return res.json({
      "Message": "Updated",
      todo: todoUpdate
    })
  return res.json({
    "Message": "todo not matched! try agagin!"
  })
}

module.exports.deleteTodo = async (req, res) => {
  const {id} = req.params
  const deletedTodo = await Todo.findByIdAndDelete({_id:id}) 
  if (deletedTodo)
    return  res.json({
      "Message": "todo deleted",
      todo: deletedTodo
    })
  return res.status(404).json({
    "Message": "already deleted or todo not found!"
  })
}