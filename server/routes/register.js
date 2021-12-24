const registerRouter = require("express").Router();
const registerController = require("../controllers/registerController");

//Create a new account
registerRouter.post("/", async (req, res) => registerController.create(req, res));

module.exports = registerRouter;