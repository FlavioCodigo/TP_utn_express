const mongoose = require("../bin/mongodb");
const bcrypt = require('bcrypt');
const usersSchema = new mongoose.Schema({
    nombre:{
        type: String,
        required:[true,"El campo nombre es obligatorio"],  //validador de mongoose
        minlength:2,                                     //validador
        trim:true                                        //modificador
    },
    apellido:{
        type: String,
        required:[true,"El campo apellido es obligatorio"],  
        minlength:2,                                     
        trim:true                                      
    },
    dni:{
        type:Number,
        min:0
    },
    email:{
        type:String,
        required:true
    },
    contraseña:{
        type:String,
        required:true
    }
})

module.exports=mongoose.model("users",usersSchema)
