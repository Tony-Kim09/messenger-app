const registerRouter = require("express").Router();
const registerController = require("../controllers/registerController");

registerRouter.post("/", async (request, response) => registerController.create(request, response));

module.exports = registerRouter;