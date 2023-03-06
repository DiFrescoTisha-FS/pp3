const router = require("express").Router();
const Album = require('../models/album');

// create song
router.post('/', async (req, res) => {
    const album = await Album(req.body).save();
    res.status(201).send({ data: album, message: "Album created successfully" });
});

// Get all albums
router.get("/", async (req, res) => {
	const albums = await Album.find();
	res.status(200).send({ data: albums });
});

// Update album
router.patch("/:id", async (req, res) => {
	const album = await Album.findByIdAndUpdate(req.params.id, req.body, {
		new: true,
	});
	res.send({ data: album, message: "Updated album successfully" });
});

// Delete song by ID
router.delete("/:id", async (req, res) => {
	await Album.findByIdAndDelete(req.params.id);
	res.status(200).send({ message: "Album deleted sucessfully" });
});