const express = require('express');
const router = express.Router();

const controller = require("../controller/getCep")


/* GET home page. */
router.get("/:cep", controller.get );

module.exports = router;
