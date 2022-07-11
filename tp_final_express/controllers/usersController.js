const usersSchema = require("../models/usersModels");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

module.exports = {
    
    create: async function (req, res, next) {
        try{
            console.log(req.body);
            const user = new usersSchema({
                nombre: req.body.nombre,
                apellido: req.body.apellido,
                dni: req.body.dni,
                email: req.body.email,
                contraseña: bcrypt.hashSync(req.body.contraseña,10)
                //contraseña:req.body.contraseña
            })
            const document = await user.save();
            res.json(document);
        }catch(e){
            next(e)
        }
        
    },
    login: async function (req, res, next) {
        try{
            const user = await usersSchema.findOne({email:req.body.email});
            if(!user){
                res.json({error:true,message:"Email incorrecto"})
                return;
            }
            if(bcrypt.compareSync(req.body.contraseña,user.contraseña)){
                const token=jwt.sign({userId:user._id},req.app.get("secretKey"),{expiresIn:"1h"})
                res.json({error:false,message:"Login OK",token:token})
                return;
                }
    

            else{
                res.json({error:true,message:"Contraseña incorrecta"})
                return;
            }
        }catch(e){
            next(e)
        }
    }

}