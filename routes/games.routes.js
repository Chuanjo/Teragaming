const router = require("express").Router();
const Rawger = require('rawger');
const axios = require("axios")

router.get("/", (req, res, next) => {
  //console.log(process.env.GAMES_API_KEY)
  axios.get(`https://api.rawg.io/api/games?key=${process.env.GAMES_API_KEY}`)
  .then((response) => {
    //console.log(response)
    console.log(response.data.results.length)
    console.log(response.data.results)
  })


  res.render("index");
});



module.exports = router;