module.exports = (sequelize, DataTypes) => {
  const Bookmark = sequelize.define('Bookmark', {

  }, {
    paranoid: true
  })

  Bookmark.associate = function (models) {
    Bookmark.belongsTo(models.User)
    Bookmark.belongsTo(models.Song)
  }

  return Bookmark
}
