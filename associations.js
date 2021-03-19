const {User, Post, Subbreaddit} = require('./models')

const getUserWithPosts = async (id) => {
  // lazy-loading
  // const user = await User.findByPk(id)
  // const userPosts = await user.getPosts()
  // console.log('user', user.toJSON())
  // console.log('user posts', userPosts.map(post => post.toJSON()))

  // eager loading
  // fetching user and associated posts
  // const userWithPosts = await User.findByPk(id, {
  //   include: Post
  // })
  // console.log(userWithPosts.toJSON())

  // fetch user, their posts, and each posts subbreaddit
  const userPostsAndSubs = await User.findByPk(id, {
    include: {model: Post, include: Subbreaddit}
  })

  console.log('userObj', userPostsAndSubs.toJSON())
  const userPosts = userPostsAndSubs.Posts
  console.log('posts subbreaddit',userPosts[0].Subbreaddit.toJSON())
}

getUserWithPosts(1)