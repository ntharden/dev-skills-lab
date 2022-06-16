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

function newSkill(req, res) {
  res.render('skills/new')
}

function create(req, res) {
  const type = req.body.type
  const stringProficiency = req.body.proficiency
  const proficiency = stringProficiency === 'on' ? true : false
  const data = {
    type,
    proficiency
  }
  Skill.create(data)
  .then(skill => {
    skill.save()
    res.redirect('/skills')
  })
  .catch(error => {
    console.log(error)
    res.redirect('/skills')
  })
}

export {
  index,
  newSkill as new,
  create
}