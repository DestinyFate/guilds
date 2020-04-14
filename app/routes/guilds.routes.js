module.exports = app => {
    const guild = require("../controllers/guilds.controller.js");
  
    var router = require("express").Router();
  
    // Create a new guild
    router.post("/", guild.create);
  
    // Get all public guilds
    router.get("/public/", guild.getAllPublic);
  
    // Retrieve a single guild with id
    router.get("/:id", guild.findOneById);
  
    // Update a guild with id
    router.put("/:id", guild.update);

    //Add a player into the guild
    router.put("/cp/:id", guild.addPlayer);

    //Delete a player from the guild
    router.put("/dp/:id", guild.deletePlayer);
  
    // Delete a guild with id
    router.delete("/:id", guild.delete);
  
    app.use('/api/guilds', router);
  };