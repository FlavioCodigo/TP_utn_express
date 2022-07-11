var express = require('express');
var router = express.Router();
const productosController = require("../controllers/productosController")


//router.get('/',(req,res,next)=>{req.app.validateUser(req,res,next)}, productosController.getAll);
router.get('/', productosController.getAll);

router.post('/', productosController.nuevo);

router.get('/:id', (req,res,next)=>{req.app.validateUser(req,res,next)}, productosController.getById);

module.exports = router; 