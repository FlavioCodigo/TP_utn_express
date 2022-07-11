const mongoose = require("../bin/mongodb");

const productosSchema = new mongoose.Schema({
    nombre:{
        type: String,
        required:[true,"Falta el nombre del producto"],  
        minlength:3,                                     
        trim:true                                       
    },
    descripcion:String,

    precio:{
        type:Number,
        required:[true,"Campo precio es obligatorio"],
        min:0, 
    },
    sku:Number
    
})
module.exports=mongoose.model("productos",productosSchema)
