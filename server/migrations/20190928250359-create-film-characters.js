
const FilmCharacters = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('FilmCharacters', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    film_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'Films',
        key: 'id',
      }
    },
    character_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'Characters',
        key: 'id',
      }
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
  down: (queryInterface) => queryInterface.dropTable('FilmCharacters')
};

export default FilmCharacters;
