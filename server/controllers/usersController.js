const User = require("../models/User");
const mongoose = require('mongoose');
const { gfs, conn } = require("../db/connect")

const getUsers = async (req, res) => {
  const username = req.body.username;
  const users = await User.find({ username: { $ne: username } });

  res.status(200).json(users);
}

const changeAvatar = async (req, res) => {
  const _id = new mongoose.Types.ObjectId(req.userID);
  const filterByUserID = { _id };
  const setAvatarFileID = { avatar: req.file.id };

  const user = await User.findOne(filterByUserID);
  const oldAvatarID = user.avatar;

  if (oldAvatarID) {
    //delete old image if it exists
    const avatarToDelete = new mongoose.Types.ObjectId(oldAvatarID);
    gfs.grid.delete(avatarToDelete, (err) => {
      if (err) {
        return res.status(500).send("error in deleting image");
      }
    })
  }
  await User.updateOne(filterByUserID, setAvatarFileID);
  const updatedUser = await User.findOne(filterByUserID);
  res.status(200).send(updatedUser);
}

const retrieveAvatar = async (req, res) => {

  const avatarID = req.params.id;
  //Check id param exists 
  if (!avatarID || avatarID === "undefined") {
    return res.status(400).send('avatar id required');
  }

  const _id = new mongoose.Types.ObjectId(avatarID);

  gfs.grid.find({ _id }).toArray((err, files) => {
    if (!files || files.length === 0) {
      return res.status(400).send('no files exist');
    }
    // If a file exists, send the data
    gfs.grid.openDownloadStream(_id).pipe(res);
  });

}

const usersController = { getUsers, changeAvatar, retrieveAvatar };

module.exports = usersController;