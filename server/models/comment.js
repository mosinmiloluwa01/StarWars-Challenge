
const comment = (sequelize, DataTypes) => {
  const Comment = sequelize.define('Comment', {
    film_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'film_id is required.'
        }
      }
    },
    comment: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'comment is required.'
        }
      }
    },
    ip_address: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'ip address is required.'
        }
      }
    }
  }, {});
  Comment.associate = (models) => {
    Comment.belongsTo(models.Film, {
      foreignKey: 'film_id',
      as: 'film',
      onDelete: 'CASCADE'
    });
  };
  return Comment;
};

export default comment;
