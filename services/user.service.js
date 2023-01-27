const User = require("../models/User");

exports.postUserService = async (name, sectors, agreeToTerms) => {
  console.log(name, sectors, agreeToTerms, "name, sectors, agreeToTerms");
  const user = await User.create({ name, sectors, agreeToTerms });
  return user;
};

exports.getUserService = async () => {
  const cre = await User.find();
  return cre;
};
exports.updateUserService = async (id, name, sectors, agreeToTerms) => {
  const cre = await User.findById({ _id: id });
  cre.name = name;
  cre.sectors = sectors;
  cre.agreeToTerms = agreeToTerms;
  cre.save();
  return cre;
};
exports.deleteUserService = async (id) => {
  const cre = await User.deleteOne({ _id: id });
  return cre;
};
