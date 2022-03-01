const router = require("express").Router();


/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});

const gamesRoutes = require("./games.routes")
router.use("/games", gamesRoutes)


module.exports = router;
