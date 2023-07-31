const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const User = require("../../models/user.model");

async function signUp(req, res) {
  try { 
    const {
      username,
      password
    } = req.body;

    encryptedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      username,
      password: encryptedPassword
    });

    const token = jwt.sign(
      { user_id: user._id, username },
      process.env.TOKEN_KEY,
      { }
    );

    return res.status(201).json({ token: token });

  } catch (err) {
    console.log(err);
  }

}

async function login(req, res) {
  
  try {
    const { 
      username, 
      password 
    } = req.body;
    
    console.log(password)
    const user = await User.findOne({ username });

    if (user && (await bcrypt.compare(password, user.password))) {
      const token = jwt.sign(
        { user_id: user._id, username},
        process.env.TOKEN_KEY,
        {}
      );

      user.token = token;

      return res.status(200).json({ token: token });

    } else {
      return res.status(400).json({error: "Bad credentials"});  
    }

  } catch (err) {
    console.log(err);
    return res.status(500).json({error: `Server Error: ${err}`});
  }

}

module.exports = {
  signUp,
  login
}