const { default: mongoose } = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: {
    type: String,
    require: true,
  },
  sectors: [String],
  agreeToTerms: {
    type: Boolean,
    require: true,
  },
});
module.exports = mongoose.model("User", userSchema);
