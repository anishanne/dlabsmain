const express = require('express');
const app = express();
app.set('view engine','ejs')
app.use(express.static('public'));
app.set('views', '${__dirname}/app/public/')
app.get('/', function(req, res) {
  res.render("index")
});
// listen for requests :)
const listener = app.listen(process.env.PORT, function() {
  console.log('Your app is listening on port ' + listener.address().port);
});
