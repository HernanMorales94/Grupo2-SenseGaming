const express = require("express")
const router = express.Router()
const productController = require("../controllers/productsController")

let mw = (req,res.next) => {
  console.log("pasando por el mw a nivel RUTA")
  next();
}

router.get("/", mw, productController.listar)
router.get("/detalle/:id", mw, productController.detalle)
router.get("/search",productController.search)

module.exports=router
