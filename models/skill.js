import mongoose from "mongoose";

const Schema = mongoose.Schema

const skillSchema = new Schema({
  skill: String,
  level: Number,
})

const Skill = mongoose.model('Skill', skillSchema)

export {
  Skill
}