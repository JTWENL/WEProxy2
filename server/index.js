const express = require('express');
const app = express();
const PORT = process.env.PORT || 1167

app.use(express.static('dist'));

app.listen(PORT, ()=>{
  console.log(`listening on ${PORT}`);
})