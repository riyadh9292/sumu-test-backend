const {
  postUserService,
  getUserService,
  deleteUserService,
  updateUserService,
} = require("../services/user.service");

exports.saveAUser = async (req, res) => {
  //   console.log(req.body);
  //   const parsedBody = JSON.parse(res.body);
  //   const parsedBody = res.body;
  //   console.log(req.body, "req.body.name");
  //   console.log(req.body.name, "req.body.name");
  console.log("save a user method calls");
  console.log(req.body.sectors, "req.body.sectors");
  console.log(req.body.sectorName, " req.body.sectorName");
  //   console.log(req.body.agreeToTerms, "req.body.name");
  try {
    const user = await postUserService(
      req.body.name,
      req.body.agreeToTerms,
      req.body.sectors,
      req.body.sectorName
    );
    res.status(200).json({ status: "Saved", user });
  } catch (error) {
    res.status(400).json({ status: "fail", message: "something went wrong" });
  }
};
exports.getAllUsers = async (req, res) => {
  try {
    const users = await getUserService();
    res.status(200).json({ status: "Saved", users });
  } catch (error) {
    res.status(400).json({ status: "fail", message: "something went wrong" });
  }
};
exports.updateAUser = async (req, res) => {
  const { id } = req.params;
  try {
    const users = await updateUserService(
      id,
      req.body.name,
      req.body.sectors,
      req.body.agreeToTerms,
      req.body.sectorName
    );
    res.status(200).json({ status: "updated ", users });
  } catch (error) {
    res.status(400).json({ status: "fail", message: "something went wrong" });
  }
};
exports.deleteAUser = async (req, res) => {
  const { id } = req.params;
  try {
    const users = await deleteUserService(id);
    res.status(200).json({ status: "Deleted ", users });
  } catch (error) {
    res.status(400).json({ status: "fail", message: "something went wrong" });
  }
};
