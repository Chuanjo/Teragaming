const router = require("express").Router();
const axios = require("axios")
const UserModel = require("../models/User.model")
const GameModel = require("../models/game.model");
const isLoggedIn = require("../middleware/isLoggedIn");

let baseUrl = `https://api.rawg.io/api/games?key=${process.env.GAMES_API_KEY}`
let baseUrlNext;
let baseUrlPrevious;

//show the list of the games.
router.get("/game-list", (req, res, next) => {
  baseUrl = `https://api.rawg.io/api/games?key=${process.env.GAMES_API_KEY}`
  axios.get(baseUrl)
  .then((response) => {
    baseUrlNext = response.data.next
    baseUrlPrevious = response.data.previous
    let firstPage = response.data.previous === null
    res.render("games/game-list", {data:response.data.results, firstPage})
  })
  .catch((err)=>{
    next(err)
  })
});

router.get("/game-list/:page", (req, res, next) => {
  const {page} = req.params
  let gamesUrl;
  if (page === "next") {
    gamesUrl = baseUrlNext
  } else {
    gamesUrl = baseUrlPrevious
  }
  axios.get(gamesUrl)
  .then((response) => {
    baseUrlNext = response.data.next
    baseUrlPrevious = response.data.previous
    let firstPage = response.data.previous === null
    res.render("games/game-list", {data:response.data.results, firstPage})
  })
  .catch((err)=>{
    next(err)
  })
});

//router show the details of the game by Id.
router.get("/game-details/:id", (req, res, next)=>{
  const{id} = req.params //se pone antes del axios para que pueda inicializarse la ID.
  // console.log("hola",id)
  axios.get(`https://api.rawg.io/api/games/${id}?key=${process.env.GAMES_API_KEY}`)
  .then((response)=>{
    // console.log("adios",id,response.data.id)
    res.render("games/game-details", {data:response.data})
  })
  .catch((err)=>{
    next(err)
  })
})

//Edit the information of the game.
router.get("/edit/:id/:name", (req, res, next)=>{
  const{id, name} = req.params
  
GameModel.findOne({apiId: id})
.then((response)=>{
  // console.log("Holaaaa")
  if (response && response.createBy == req.session.user._id){
    // console.log("Dentrooo")
    res.render("games/game-list", {
      errorMessage: "Game already added"
    })
  } else {
    res.render("games/edit", {name, id})
  }
})
})

//create the new details by user
router.post("/create/:id/:name",isLoggedIn, (req, res, next) =>{
  const {id, name} = req.params
  const {score, status,comment} = req.body
  // console.log("hola",id,name)
  GameModel.create({
      name:name,
      apiId:id,
      score:score,
      status:status,
      comment:comment,
      createBy:req.session.user 
    })
    .then(() =>{
      res.redirect("/auth/profile")
    })
    .catch((err)=>{
      next(err)
    })
  })
  
module.exports = router;