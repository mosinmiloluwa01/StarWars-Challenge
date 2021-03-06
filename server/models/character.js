
const character = (sequelize, DataTypes) => {
  const Character = sequelize.define('Character', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'name is required.'
        }
      }
    },
    height: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'height is required.'
        }
      }
    },
    gender: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'gender is required.'
        }
      }
    }
  }, {});
  Character.associate = (models) => {
    Character.hasMany(models.FilmCharacter, {
      foreignKey: 'character_id',
    });
  };
  return Character;
};

export default character;
