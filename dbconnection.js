const mongoose = require('mongoose')
mongoose.connect(
  process.env.DB_URL,
  { useNewUrlParser: true })
  .then(res => {
    console.log("Databaase connected!")
  })
  .catch(res => {
    console.log("Connection Failed")
  })