const router = require("express").Router();
const { append } = require("express/lib/response");
const gamesRoutes = require("./games.routes")
router.use("/games", gamesRoutes)



/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});

module.exports = router;
