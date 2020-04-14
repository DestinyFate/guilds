module.exports = (sequelize, Sequelize) => {
    const Guild = sequelize.define("guild", {
    id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
      title: {
        type: Sequelize.STRING
      },
      users:{
        type:  Sequelize.ARRAY(Sequelize.JSONB),
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