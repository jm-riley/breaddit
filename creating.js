const {User, Post, Subbreaddit} = require('./models/index')

const createUser = async (userObj) => {
  const user = await User.create(userObj)
  console.log(user)
}

createUser({username: 'jwong', email: 'jesse@jesse.com'})