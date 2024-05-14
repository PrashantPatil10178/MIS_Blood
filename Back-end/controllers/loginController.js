const Login = require("../models/loginModel.js");
const Contact = require("../models/contactModel.js");
const signUp = require("../models/signModel");

exports.logIn = async (req, res) => {
  try {
    const { post, user, body } = req.body;

    const login = new Login({});

    //save the new comment into the database
    const savedLogin = await login.save();

    //find the post by ID, add the new commnet to its comments array
    const udpatedPost = await Post.findByIdAndUpdate(
      post,
      { $push: { comments: savedComment._id } },
      { new: true }
    )
      .populate("login") //populate the comments array with comment documents
      .exec();

    res.json({
      post: udpatedPost,
    });
  } catch (error) {
    return res.status(500).json({
      error: "Error While Creating comment",
    });
  }
};
