const crypto = require('crypto');
const path = require('path');
const { GridFsStorage } = require('multer-gridfs-storage');
const config = require('./config');
const multer = require('multer')

//Make sure the file types are for images only
const checkFileType = (file, cb) => {
  const fileTypes = /jpeg|jpg|png/;
  const extName = fileTypes.test(path.extname(file.originalname).toLocaleLowerCase());
  const mimeType = fileTypes.test(file.mimetype);

  if (mimeType && extName) {
    return cb(null, true);
  }
  cb('filetype');
}

const storage = new GridFsStorage({
  url: config.MONGODB_URL,
  options: { useNewUrlParser: true, useUnifiedTopology: true },
  file: (req, file) => {
    return new Promise((resolve, reject) => {
      crypto.randomBytes(16, (err, buf) => {
        if (err) {
          return reject(err);
        }
        const filename = buf.toString('hex') + path.extname(file.originalname);
        const fileInfo = {
          filename: filename,
          bucketName: 'uploads'
        };
        resolve(fileInfo);
      });
    });
  }
});
module.exports = multer({
  storage,
  limits: { fileSize: 20000000 }, //20mb size limit
  fileFilter: (req, file, cb) => {
    checkFileType(file, cb)
  }
});