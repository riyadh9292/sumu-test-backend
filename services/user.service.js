const User = require("../models/User");

exports.postUserService = async (name, agreeToTerms, sectors, sectorName) => {
  console.log(name, sectors, agreeToTerms, "name, sectors, agreeToTerms");
  const user = await User.create({ name, sectorName, sectors, agreeToTerms });
  return user;
};

exports.getUserService = async () => {
  const cre = await User.find();
  return cre;
};
exports.updateUserService = async (
  id,
  name,
  sectors,
  agreeToTerms,
  sectorName
) => {
  const cre = await User.findById({ _id: id });
  cre.name = name;
  cre.sectors = sectors;
  cre.sectorName = sectorName;
  cre.agreeToTerms = agreeToTerms;
  cre.save();
  return cre;
};
exports.deleteUserService = async (id) => {
  const cre = await User.deleteOne({ _id: id });
  return cre;
};
