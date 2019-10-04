const filmCharacter = (sequelize, DataTypes) => {
  const FilmCharacter = sequelize.define('FilmCharacter', {
    film_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    character_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    }
  }, {});
  FilmCharacter.associate = (models) => {
    FilmCharacter.belongsTo(models.Film, {
      foreignKey: 'film_id',
    });
    FilmCharacter.belongsTo(models.Character, {
      foreignKey: 'character_id',
    });
  };
  return FilmCharacter;
};

export default filmCharacter;
