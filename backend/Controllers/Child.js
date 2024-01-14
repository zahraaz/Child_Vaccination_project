const { getChild: getChildModel, addChild, getChildById: getChildByIdModel, 
  deleteChild: deleteChildModel, updateChild: updateChildModel } = require('../models/child')

function getChild(req, res, next) {
  getChildModel().then(childs => res.json(childs));
}

function getChildById(req, res, next) {
  getChildByIdModel(req.params.childId).then(childs =>
      res.status(childs ? 200 : 404).json(childs ?? {
          message: "No child found"
      }));
}

function deleteChild(req, res, next) {
  deleteChildModel(req.params.childId).then(deletedChild =>
      res.status(deletedChild ? 202 : 404).json(deletedChild ?? { message: 'Child not found' })
  )
}

async function createNewChild(req, res, next) {
  const body = req.body;

  if (!body.firstName)
      return res.status(400).json({ message: "Your first name is required" })
  if (body.firstName.length < 3)
      return res.status(400).json({ message: "Your first name is too short" })
  if (!body.secondName)
      return res.status(400).json({ message: "Your second name is required" })
  if (body.secondName.length < 3)
      return res.status(400).json({ message: "Your second name is too short" })
  if (!body.thirdName)
      return res.status(400).json({ message: "Your third name is required" })
  if (body.thirdName.length < 3)
      return res.status(400).json({ message: "Your third name is too short" })
  if (!body.fourthName)
      return res.status(400).json({ message: "Your fourth name is required" })
  if (body.fourthName.length < 3)
      return res.status(400).json({ message: "Your fourth name is too short" })    
  if (!body.familyName)
      return res.status(400).json({ message: "Your family name is required" })
  if (body.familyName.length < 3)
      return res.status(400).json({ message: "Your family name is too short" })      
  if (!body.motherName)
      return res.status(400).json({ message: "Your mother name is required" })
  if (body.motherName.length < 3)
      return res.status(400).json({ message: "Your mother name is too short" })
  if (!body.birthDate)
      return res.status(400).json({ message: "Your bithdate is required" })
  if (!body.phoneNumber)
      return res.status(400).json({ message: "Your phone number is required" })
  if (!body.email)
      return res.status(400).json({ message: "Your email is required" })
  if ((body.email.length < 3) || (body.email.indexOf("@") === -1))
      return res.status(400).json({ message: "Your email is invalid" })
  if (!body.password)
      return res.status(400).json({ message: "Your password is required" })
  if (body.password.length < 8)
      return res.status(400).json({ message: "Your password is too short" })
  if (!body.weight)
      return res.status(400).json({ message: "Your weight is required" })
  if (!body.environment)
  return res.status(400).json({ message: "Your environment  is required" })


  await addChild(body).then(child => {
      res.json(child);
  })
}

function updateChild(req, res, next) {
  const body = req.body;

  if ((body.firstName) && (body.firstName.length < 3))
      return res.status(400).json({ message: "Your first name is too short" })
  if ((body.secondName) && (body.secondName.length < 3))
      return res.status(400).json({ message: "Your second name is too short" })
  if ((body.thirdName) && (body.thirdName.length < 3))
      return res.status(400).json({ message: "Your third name is too short" })
  if ((body.fourthName) && (body.fourthName.length < 3))
      return res.status(400).json({ message: "Your fourth name is too short" })
  if ((body.familyName) && (body.familyName.length < 3))
      return res.status(400).json({ message: "Your family name is too short" })
  if ((body.motherName) && (body.motherName.length < 3))
      return res.status(400).json({ message: "Your mother name is too short" })
  if (body.birthDate)
      return res.status(400).json({ message: "Your birthdate is required" })
  if ((body.password) && (body.password.length < 8))
      return res.status(400).json({ message: "Your password is too short" })

  updateChildModel(req.params.childId, body).then(updatedChild =>
      res.json(updatedChild)
  )
}

module.exports = {
  getChild,
  getChildById,
  createNewChild,
  deleteChild,
  updateChild,
}