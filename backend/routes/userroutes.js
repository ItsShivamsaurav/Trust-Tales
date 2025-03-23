const { Router } = require("express");

const User = require("../models/user");

const router = Router();

router.get("/", (req, res) => {
  res.send("Hello from user routes ");
});

router.get("/signout", (req, res) => {
  res.clearCookie("token").redirect("/user");
});

router.post("/signin", async (req, res) => {
  const { email, password } = req.body;
  try {
    const token = await User.matchpasswordAndGenerateToken(email, password);
    console.log("User Verified");
    return res.json({token});
    // return res.send("User Verified");
  } catch (error) {
    console.log(error);
    //  return res.render("signup" ,{ error : "Incorrect email or password",})
    return res.send("Incorrect email or password");
  }
});

router.post("/signup", async (req, res) => {
  const { fullName, email, password } = req.body;
  const user = await User.create({
    name: fullName,
    email,
    password,
  });
  console.log(`${fullName} , ${email} ,${password}`);
  res.send("User Created");
});

module.exports = router;
