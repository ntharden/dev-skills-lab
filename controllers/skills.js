import { skills } from "../data/skill-data.js"
import { Skill } from "../models/skill.js" 

function index(req, res) {
  Skill.find({})
  .then(skills => {
    res.render('skills/index', {
      skills
    })
  })
  .catch(error => {
    console.log(error)
    res.redirect('/')
  })
}

export {
  index
}