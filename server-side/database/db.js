const mongoose = require("mongoose");
const MONGO_URL = "mongodb+srv://david:david@cluster0.axzcq.mongodb.net/asd";
const User = require("../models/User");
class Controller {
  constructor() {
    this.connect();
  }
  async connect() {
    try {
      await mongoose.connect(MONGO_URL, {
        useNewUrlParser: true,
      });
      console.info("Connect to DB");
    } catch (err) {
      console.error(err);
    }
  }
  addUser(res, data) {
    User.create(data, (err, newUser) => {
      if (err) throw err;
      res.json({
        status: 200,
        message: "Created",
        user: newUser,
      });
    });
  }
  login(res, data) {
    User.findOne(
      {
        $and: [{ email: data.email }, { password: data.password }],
      },
      (err, user) => {
        if (err) throw err;
        res.json({
          status: 200,
          message: "ok",
          user,
        });
      }
    );
  }
  updateUser(res, id, data) {
    User.updateOne(
      {
        _id: id,
      },
      data,
      (err, updateUser) => {
        if (err) throw err;
        res.json({
          status: 200,
          message: "Updated",
          user: updateUser,
        });
      }
    );
  }
  getUser(res, id) {
    User.findOne(
      {
        _id: id,
      },
      (err, user) => {
        if (err) throw err;
        res.json({
          status: 200,
          message: "ok",
          user,
        });
      }
    );
  }
  getUsers(res) {
    User.find(
      (err, users) => {
        if (err) throw err;
        res.json({
          status: 200,
          message: "ok",
          users,
        });
      }
    );
  }
  deleteUser(res, id) {
    User.deleteOne(
      {
        _id: id,
      },
      (err) => {
        if (err) throw err;
        res.json({
          status: 200,
          message: "Deleted",
        });
      }
    );
  }
  addNote(res, data) {
    Note.create(data, (err, newNote) => {
      if (err) throw err;
      res.json({
        status: 200,
        message: "Created",
        note: newNote,
      });
    });
  }
  getNotes(res, userId) {
    Note.find(
      {
        id_user: userId,
      },
      (err, notes) => {
        if (err) throw err;
        res.json({
          status: 200,
          message: "ok",
          notes,
        });
      }
    );
  }
  updateNote(res, id, data) {
    Note.updateOne(
      {
        _id: id,
      },
      data,
      (err, updateNote) => {
        if (err) throw err;
        res.json({
          status: 200,
          message: "Updated",
          note: updateNote,
        });
      }
    );
  }
  deleteNote(res, id) {
    Note.deleteOne(
      {
        _id: id,
      },
      (err) => {
        if (err) throw err;
        res.json({
          status: 200,
          message: "Deleted",
        });
      }
    );
  }
  
}
exports.db = new Controller();
