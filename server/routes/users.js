const usersRouter = require("express").Router();
const usersController = require("../controllers/usersController");
const { uploadMiddleware } = require("../utils/middleware");

//Simple get request to obtain all current users
usersRouter.post("/", async (req, res) => usersController.getUsers(req, res));

//Update User Avatar using UserID
usersRouter.post("/avatar", uploadMiddleware, async (req, res) => usersController.changeAvatar(req, res));

//Retrieve Avatar
usersRouter.get("/avatar/:id", async (req, res) => usersController.retrieveAvatar(req, res));

module.exports = usersRouter;