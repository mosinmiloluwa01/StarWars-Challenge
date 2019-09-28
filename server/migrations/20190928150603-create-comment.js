
const Comments = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('Comments', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    film_id: {
      type: Sequelize.INTEGER,
      validate: {
        notEmpty: true
      },
      references: {
        model: 'Films',
        key: 'id',
        as: 'film_id'
      }
    },
    comment: {
      type: Sequelize.TEXT,
      validate: {
        notEmpty: true
      },
    },
    ip_address: {
      type: Sequelize.STRING,
      validate: {
        notEmpty: true
      },
    },
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE
    }
  }),
  down: (queryInterface) => queryInterface.dropTable('Comments')
};

export default Comments;
