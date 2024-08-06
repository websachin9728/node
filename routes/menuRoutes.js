const express = require("express");
const MenuItems = require("../Model/Menu");
const menuroute = express.Router();


menuroute.get("/", async (request, response) => {
    try {
      const data = await MenuItems.find();
      console.log("Fetch Menu data");
      response.status(200).json(data);
    } catch (error) {
      response.status(500).json(error);
    }
  });

  menuroute.post("/", async (request, response) => {
    const data = request.body;
    try {
      const createmenu = new MenuItems(data);
      await createmenu.save();
      response.status(200).json({
        message: "Menu Create Successfully!",
        createmenu,
      });
    } catch (error) {
      response.status(500).json(error);
    }
  });

  module.exports = menuroute;
