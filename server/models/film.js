const film = (sequelize, DataTypes) => {
  const Film = sequelize.define('Film', {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'title is required.'
        }
      }
    },
    opening_crawl: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'opening_crawl is required.'
        }
      }
    },
    release_date: {
      type: DataTypes.DATE,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'release_date is required.'
        }
      }
    }
  }, {});
  Film.associate = (models) => {
    Film.hasMany(models.Comment, {
      foreignKey: 'film_id',
      as: 'comments',
    });
  };
  return Film;
};

export default film;
