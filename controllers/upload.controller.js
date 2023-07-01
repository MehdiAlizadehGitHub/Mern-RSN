const UserModel = require("../models/user.model");
const fs = require("fs");
const { uploadErrors } = require("../utils/errors.utils");

module.exports.uploadProfil = async (req, res) => {
  try {
    console.log("1")
    if (
      req.file.mimetype != "image/jpg" &&
      req.file.mimetype != "image/png" &&
      req.file.mimetype != "image/jpeg"
    )
      throw Error("invalid file");

    if (req.file.size > 500_000) throw Error("max size");
  } catch (err) {
    console.log("2")
    const errors = uploadErrors(err);
    return res.status(201).json({ errors });

  }
  const fileName = req.body.name + ".jpg";


  
  fs.renameSync(req.file.path, `client/public/uploads/profil/${fileName}`)


    try {
      console.log("3")
      await UserModel.findByIdAndUpdate(
        req.body.userId,
        { $set : {picture: "./uploads/profil/" + fileName}},
        { new: true, upsert: true, setDefaultsOnInsert: true},
        (err, docs) => {
          if (!err) return res.send(docs);
          else return res.status(500).send({ message: err });
        }
      );
    } catch (err) {
      console.log("4")
      return res.status(500).send({ message: err });
    }


};