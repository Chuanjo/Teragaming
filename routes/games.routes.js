const router = require("express").Router();
const axios = require("axios")

router.get("/game-list", (req, res, next) => {
  axios.get(`https://api.rawg.io/api/games?key=${process.env.GAMES_API_KEY}`)
  .then((response) => {
    console.log("Hola que tal",response.data.background_image[0])
    res.render("games/game-list", {data:response.data.results})


  })
  .catch((err)=>{
    next(err)
  })
});



module.exports = router;