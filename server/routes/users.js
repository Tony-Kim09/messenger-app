const usersRouter = require("express").Router();
const usersController = require("../controllers/usersController");
//Simple get request to obtain all current users
usersRouter.post("/", async (request, response) => usersController.getUsers(request, response));

module.exports = usersRouter;