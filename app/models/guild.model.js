module.exports = (sequelize, DataTypes) => {
    const Guild = sequelize.define("guild", {
    id:{
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
      title: {
        type: DataTypes.STRING
      },
      users:{
        type:  DataTypes.ARRAY(DataTypes.JSONB),
        defaultValue: null
      },
      fame: {
        type: DataTypes.INTEGER
      },
      description: {
        type: DataTypes.STRING
      },
      visibility: {
        type: DataTypes.BOOLEAN
      }
    
    });
  
    return Guild;
  };