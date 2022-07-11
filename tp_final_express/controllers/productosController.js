const productosModel = require("../models/productosModels")
module.exports={
    getAll:async (req, res, next)=> {
        let queryFind={};
        if(req.query.buscar){
            queryFind={nombre:{$regex:".*"+req.query.buscar+".*",$options:"i"}}
        }
       
        const productos = await productosModel.find(queryFind);
        res.json(productos)
    },

    nuevo:async (req, res, next)=> {
        const productos = new productosModel({
            nombre:req.body.nombre,
            descripcion:req.body.descripcion,
            precio:req.body.precio,
            sku:req.body.sku
        })
        const documento = await productos.save()  //inserción en BD
        res.json(documento)
    },
    
    getById:async (req, res, next)=> {
        const producto = await productosModel.findById(req.params.id)
        res.json(producto)
    },

}
