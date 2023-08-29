const User = require('../Models/userSchema');

const userController = {
  Register: async (req, res) => {
    try {
      const { fullName, password, address, numberPhone } = req.body;
      const existUser = await User.find({ numberPhone: numberPhone });
      if (existUser) {
        return res.status(400).json({ msg: 'User is exist' });
      }
      const newUser = new User({
        fullName,
        password,
        address,
        numberPhone,
      });

      await newUser.save();
      res.status(200).json({ msg: 'Create user successful' });
    } catch (error) {
      // console.log(error);
      res.status(400).json({ msg: 'Create user fail', error });
    }
  },
};

module.exports = userController;
