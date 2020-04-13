const db = require("../models");
const Guild = db.guilds;
const Op = db.Sequelize.Op;

// creates a new guild
exports.create = (req, res) => {
    // Validate request
    if (!req.body.name) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
      return;
    }
    //will have the creator added to guild with founder role (int value of 3)
    let usersArr = [].push(
        {userId: req.body.userId,
         name: req.body.name,
         position: 3,
         fame: 0});
    // Create a guild
    //User will be formatted to: {String userid, Integer position, Integer fame}
    const guild = {
      name: req.body.title,
      users: usersArr,
      fame: 0,
      description: req.body.description,
      visibility: req.body.visibility
    };
  
    // saves guild into db
    Guild.create(guild)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the guild."
        });
      });
  };

// gets all the public guilds from db
exports.getAllPublic = (req, res) => {
  
    Guild.findAll({where: {visibility: true}})
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving the public guilds."
        });
      });
  };

// Find a guild with an id
exports.findOneById = (req, res) => {
    const id = req.params.id;
  
    Tutorial.findByPk(id)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving guild with id=" + id
        });
      });
  };
// Find a guild with a name
  exports.findOneByName = (req, res) => {
    const name = req.params.name;
  
    Guild.findOne({where: {name: name}})
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving guild with name=" + name
        });
      });
  };

// Finds the guild by name and updates it
// Used to delete a player as well
exports.update = (req, res) => {
    const id = req.params.id;
  
    Guild.update(req.body, {
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Guild was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update guild with name=${name}.`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating guild  " + name
        });
      });
  };
//Adds a player to the guild
  exports.addPlayer = (req, res) => {
    const id = req.params.id;
    Guild.findByPk(id)
    .then(data => {
        data.users.push({userId:req.params.userId,
                         name: req.params.playerName, 
                         position: 0,
                         fame: 0 });
        Guild.update(data, {
            where: { id: id }
          })
            .then(num => {
              if (num == 1) {
                res.send({
                  message: "Player was added successfully."
                });
              } else {
                res.send({
                  message: `Error in adding player into the guild.`
                });
              }
            })
            .catch(err => {
              res.status(500).send({
                message: "Error finding the guild: " + name
              });
            });
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving guild with name=" + name
      });
    });

  };
// Delete a whole guild by name
exports.delete = (req, res) => {
    const id = req.params.id;
  
    Guild.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Guild was deleted successfully!"
          });
        } else {
          res.send({
            message: "Error in deleting guild:" + id
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error in deleting guild:" + id
        });
      });
  };
// Deletes a player from the guild
exports.deletePlayer = (req, res) => {
    const id = req.params.id;
    Guild.findByPk(id)
    .then(data => {
        data.users = data.users.filter(playerName => playerName !== req.params.playerName)
        Guild.update(data, {
            where: { id: id }
          })
            .then(num => {
              if (num == 1) {
                res.send({
                  message: "Player was added successfully."
                });
              } else {
                res.send({
                  message: `Error in adding player into the guild.`
                });
              }
            })
            .catch(err => {
              res.status(500).send({
                message: "Error finding the guild: " + name
              });
            });
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving guild with name=" + name
      });
    });

  };
  

