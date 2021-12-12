const loginRouter = require("express").Router();
const loginController = require("../controllers/loginController");
loginRouter.post("/", async (request, response) => loginController.login(request, response));

module.exports = loginRouter;