const express = require("express")
const router = express.Router()
const productController = require("../controllers/productsController")

const consoleLogMW = require("../middlewares/consoleLogMiddleware")



router.get("/", concoleLogMW, productController.listar)
router.get("/detalle/:id", consoleLogMW, productController.detalle)
router.get("/search",productController.search)

module.exports=router
