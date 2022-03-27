const express = require("express");
const router = express.Router();
const User = require("../model/userschema");

router.post("/register", async (req, res) => {
  const { fname, lname, Age, MobileNo, email, password } = req.body;
   //console.log(lname +"here");
  if (!fname || !lname || !Age || !MobileNo || !email || !password) {
    return res.status(422).json({ error: "please fill all filled" });
  }

  try {
    const userExist = await User.findOne({ email: email });
  //  console.log(userExist+ "xx");
    if (userExist) {
      return res
        .status(200)
        .json({
          message: "user already existed, try using a different email address",
        });
        // window.alert(`user already existed, try using a different email address`);
    }
    const newUser = new User({ fname, lname, Age, MobileNo, email, password });

    const isSaved = await newUser.save();
    // console.log(isSaved);
    if (isSaved) {
      res.status(201).json({ message: "user registered successfully" });
    }
  } catch (err) {
    console.log(err);
  }

  // res.send(`post call running successfully`);
});
router.get("/testing",async(req,res)=>{
  console.log("on testing");
    User.find({fname:"john"},((err,result)=>{
      if(err){
        res.json(err)
      }
      else{
       res.json(result);
      }

    }))
  return res.status(201).json({ message: "getting data successfully" });
})

module.exports = router;
