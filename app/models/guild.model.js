module.exports = (sequelize, Sequelize) => {
    const Guild = sequelize.define("guild", {
    id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
      name: {
        type: Sequelize.STRING
      },
      users:{
        type:  Sequelize.ARRAY(Sequelize.JSON),
        defaultValue: null
      },
      fame: {
        type: Sequelize.INTEGER
      },
      description: {
        type: Sequelize.STRING
      },
      visibility: {
        type: Sequelize.BOOLEAN
      }
    
    });
  
    return Guild;
  };