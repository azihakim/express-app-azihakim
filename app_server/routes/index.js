var express = require("express");
var router = express.Router();
// import controller
const controllerMain = require("../controllers/main");

/* GET home page. */
router.get("/", controllerMain.index); // routes

/* GET demo page. */
router.get("/demo", controllerMain.demo);

// router.get("/demo", function (req, res, next) {
//   res.render("index", { title: "Test", nama: "Demo" });
// });

module.exports = router;
