const express = require('express'); 
const app = express(); 
const path = require('path'); 
const router = express.Router(); 
// Setup essential routes 
app.get('/', function(req, res) { 
    res.send("Welecome 1")
 
}); 
app.get('/about', function(req, res) { 
   res.send("about")
}); 
app.get('/sitemap', function(req, res) { 
    res.send("sitemap")
}); 
//add the router 
app.use('/', router); 
app.listen(process.env.port || 3000); 
console.log('Running at Port 3000'); 