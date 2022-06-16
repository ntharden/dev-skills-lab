import mongoose from 'mongoose'

const Schema = mongoose.Schema

const skillSchema = new Schema({
  type: String,
  proficiency: Boolean
})

const Skill = mongoose.model('Skill', skillSchema)

export {
  Skill
}