import AV from 'leancloud-storage'

const APP_ID = 'uCUyyf8BRyQaxO6xSqIqIX4v-gzGzoHsz'
const APP_KEY = 'bolW8RSewIqofSenm5DuCOaD'
AV.init({
  appId: APP_ID,
  appKey: APP_KEY
})

export default AV

export const TodoModel = {
  getByUser (user, successFn, errorFn) {
    let query = new AV.Query('Todo')
    query.find().then((response) => {
      let array = response.map((t) => {
        return {id: t.id, ...t.attributes}
      })
      successFn.call(null, array)
    }, (error) => {
      errorFn && errorFn.call(null, error)
    })
  },
  create({status, title, deleted}, successFn, errorFn) {
    let Todo = AV.Object.extend('Todo')
    let todo = new Todo()
    todo.set('title', title)
    todo.set('status', status)
    todo.set('deleted', deleted)

    let acl = new AV.ACL()
    acl.setPublicReadAccess(false)
    acl.setWriteAccess(AV.User.current(), true)

    todo.setACL(acl)

    todo.save().then(function (response) {
      successFn.call(null, response.id)
    }, function (error) {
      errorFn && errorFn.call(null, error)
    })
  },
  update () {

  },
  destroy () {

  }
}

export function signUp (email, username, password, successFn, errorFn) {
  var user = new AV.User()
  user.setUsername(username)
  user.setPassword(password)
  user.setEmail(email)
  user.signUp().then(function (loginedUser) {
    let user = getUserFromAVUser(loginedUser)
    successFn.call(null, user)
  }, function (error) {
    errorFn.call(null, error)
  })

  return undefined
}

export function getCurrentUser () {
  let user = AV.User.current()
  if (user) {
    return getUserFromAVUser(user)
  } else {
    return null
  }
}

export function signOut () {
  AV.User.logOut()
  return undefined
}

export function signIn (username, password, successFn, errorFn) {
  AV.User.logIn(username, password).then(function (loginedUser) {
    let user = getUserFromAVUser(loginedUser)
    successFn.call(null, user)
  }, function (error) {
    errorFn.call(null, error)
  })
}

export function sendPasswordResetEmail (email, successFn, errorFn) {
  AV.User.requestPasswordReset(email).then(function (success) {
    successFn.call()
  }, function (error) {
    errorFn.call(null, error)
  })
}

function getUserFromAVUser (AVUser) {
  return {
    id: AVUser.id,
    ...AVUser.attributes
  }
}
