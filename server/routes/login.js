const loginRouter = require("express").Router();
const loginController = require("../controllers/loginController");

//Logging in route
loginRouter.post("/", async (req, res) => loginController.login(req, res));

module.exports = loginRouter;