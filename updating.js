const {User} = require('./models')

const findUserAndUpdate = async (id) => {
  // updating properties directly, then calling .save
  const user = await User.findByPk(id)
  // user.email = 'sourdoughbob@yahoo.com'
  // await user.save()
  // console.log(user.toJSON())

  // call .update on model instance
  // await user.update({email: 'sourdoughbob@hotmail.com', username: 'myNameIsBob'})

  // .update on Model itself
  await User.update({email: 'sourdoughbob@gmail.com'}, { where: { id }})
} 

findUserAndUpdate(1)