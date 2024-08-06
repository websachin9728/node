const express = require("express");
const User = require("../Model/user");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const data = await User.find();
    console.log("fatch database Record");
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.post("/", async (req, res) => {
  const data = req.body;
  try {
    const createnewuser = new User(data);
    await createnewuser.save();
    res.status(200).json({
      message: "User created succuss",
      createnewuser,
    });
  } catch (error) {
    res.status(500).json(error);
  }
});

router.get("/:nametype", async (request, response) => {
  try {
    const nametype = request.params.nametype;
    const res = await User.find({ name: nametype });
    console.log("Age wise data");
    response.status(200).json(res);
  } catch (error) {
    response.status(500).json(error);
  }
});

router.put("/:id", async (request, response) => {
  try {
    const userId = request.params.id;
    const updateuserData = request.body;
    const res = await User.findByIdAndUpdate(userId, updateuserData, {
      new: true,
      runValidators: true,
    });
    if (!res) {
      return response.status(404).json({ error: "user not found" });
    }
    console.log("User Update Successfull!");
    response.status(200).json({
      message: "user Detials Update Successfully!",
      res,
    });
  } catch (error) {
    response.status(500).json(error);
  }
});

router.delete("/:id", async (request, response) => {
  try {
    const userId = request.params.id;
    const res = await User.findByIdAndDelete(userId);
    if (!res) {
        return response.status(404).json({ error: "user not found" });
      }
      console.log("User Deleted Successfull!");
      response.status(200).json({
        message: "User Deleted Successfully!",
        res,
      });
  } catch (error) {
    response.status(500).json(error);
  }
});

module.exports = router;
