const Authentication = require('./controllers/Authentication')
const AuthenticationPolicy = require('./policies/AuthenticationPolicy')
const Songs = require('./controllers/Songs')
const Bookmarks = require('./controllers/Bookmarks')
const Histories = require('./controllers/Histories')

const isAuthenticated = require('./policies/isAuthenticated')

module.exports = (app) => {
  app.post('/api/register', AuthenticationPolicy.register, Authentication.register)
  app.post('/api/login', Authentication.login)

  app.get('/api/songs', Songs.index)
  app.get('/api/songs/:songId', Songs.show)
  app.put('/api/songs/:songId', Songs.put)
  app.post('/api/songs', Songs.post)

  app.use('/api/bookmarks', isAuthenticated)
  app.get('/api/bookmarks', Bookmarks.index)
  app.post('/api/bookmarks', Bookmarks.post)
  app.delete('/api/bookmarks/:bookmarkId', Bookmarks.remove)

  app.use('/api/histories', isAuthenticated)
  app.get('/api/histories', Histories.index)
  app.post('/api/histories', Histories.post)
}
