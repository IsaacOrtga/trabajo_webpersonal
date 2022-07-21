  const mongoose = require ('mongoose');
  const commentSchema = new mongoose.Schema(
     {
         nick: String,
         date: Date,
         title: String,
         text: String
  });
  const Comments = new mongoose.model('Comments', commentSchema);
  module.exports = Comments;