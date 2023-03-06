// const express = require('express');
// const router = express.Router();
// const axios = require('axios');
// // const encodeFormData = require('../helperFunctions/encodeFormData.js');
// const querystring = require('querystring');
// const { read } = require('fs');
// const { privateDecrypt, publicDecrypt } = require('crypto');
// // once the user logs in, reaches here

// // user logs in
// router.get('/login', async (req, res) => {
//     let scope = 
//     user-modify-playback-state; 
//     user-read-playback-state; 
//     user-read-currently-playing;
//     user-library-modify;
//     user-library-read;
//     playlist-read-private; 
//     playlist-modify-public;
//     res.redirect(`https://accounts.spotify.com/authorize?client_id=${process.env.CLIENT_ID}&response_type=code&redirect_uri=${process.env.REDIRECT_URI}&scope=${scope}&show_dialog=true`)
// })

// // const router = require("express").Router();
// // const { User } = require("../models/user");
// // const bcrypt = require("bcrypt");

// // router.post("/", async (req, res) => {
// // 	const user = await User.findOne({ email: req.body.email });
// // 	if (!user)
// // 		return res.status(400).send({ message: "invalid email or password!" });

// // 	const validPassword = await bcrypt.compare(req.body.password, user.password);
// // 	if (!validPassword)
// // 		return res.status(400).send({ message: "Invalid email or password!" });

// // 	const token = user.generateAuthToken();
// // 	res.status(200).send({ data: token, message: "Signing in please wait..." });
// // });

// // module.exports = router;