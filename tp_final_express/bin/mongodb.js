var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/eCommerce_mod3', { useNewUrlParser: true, useUnifiedTopology: true }, function(error){
   if(error){
      throw error; 
   }else{
      console.log('Conectados a MongoDB');
   }
});

module.exports = mongoose;