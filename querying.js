const {User, Post, Subbreaddit} = require('./models')
const {Op} = require('sequelize')
// {User: userModel, Subbreaddit: subModel, Sequelize: {Op: {substring, or,}}}

const findUserById = async (id) => {
  const user = await User.findByPk(id)
  console.log(user.toJSON())
}

// findUserById(3)

const findBreadPosts = async () => {
  const breadPosts = await Post.findAll({where: {
    title: {
      [Op.substring]: 'bread'
    }
  }})
  console.log(breadPosts.map(post => post.toJSON()))
}

// findBreadPosts()

const findUserByEmail = async (email) => {
  try {
    const user = await User.findOne({ where: { email }})
    console.log(user.toJSON())

  } catch (e) {
    console.log(e)
  }
}

findUserByEmail('gina@gmail.com')