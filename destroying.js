const {Post} = require('./models')

const deletePostById = async (id) => {
  // class method
  // const destroyed = await Post.destroy({where: {id: [4,5]}})
  // console.log(destroyed)

  // instance method
  const post = await Post.findByPk(id)
  await post.destroy()
}

deletePostById(2)

