module.exports = (sequelize, DataTypes) => {
  const Bookmark = sequelize.define('Bookmark', {}, {
    // timestamps: false
  })
  Bookmark.removeAttribute('id')

  Bookmark.associate = function (models) {
    Bookmark.belongsTo(models.User, {foreignKey: 'userId', sourceKey: 'id'})
    Bookmark.belongsTo(models.Song, {foreignKey: 'songId', sourceKey: 'id'})
  }

  return Bookmark
}
