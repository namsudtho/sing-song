module.exports = (sequelize, DataTypes) => {
  const History = sequelize.define('History', {}, {
    timestamps: false
  })
  History.removeAttribute('id')

  History.associate = function (models) {
    History.belongsTo(models.User, {foreignKey: 'userId', sourceKey: 'id'})
    History.belongsTo(models.Song, {foreignKey: 'songId', sourceKey: 'id'})
  }

  return History
}
