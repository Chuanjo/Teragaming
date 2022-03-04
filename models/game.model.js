const { Schema, model } = require("mongoose");

const gameSchema = new Schema({
  name: String,

  apiId: String,

  score: String,

  status: String,

  comment: String,

  createBy: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
});

const Game = model("Game", gameSchema);

module.exports = Game;
