var express = require('express');

var app = express();
const PORT = process.env.PORT || 3000;
app.use(function(req,res,next){
  if(req.header['x-forwarded-proto'] === 'http'){
    next();
  } else {
    res.redirect('http://'+ req.hostname + req.url);
  }
});

app.listen(PORT, function(){
  console.log('port ' + PORT);
});
