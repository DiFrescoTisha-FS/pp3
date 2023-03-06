const router = require("express").Router();
const { Song } = require("../models/song");
const { Artist } = require("../models/artist");

router.get("/", async (req, res) => {
	const search = req.query.search;
	if (search !== "") {
		const songs = await Song.find({
			name: { $regex: search, $options: "i" },
		}).limit(10);
		const albums = await Album.find({
			name: { $regex: search, $options: "i" },
		}).limit(10);
        const artists = await Artist.find({
			name: { $regex: search, $options: "i" },
		}).limit(10);
		const result = { songs, albums, artists };
		res.status(200).send(result);
	} else {
		res.status(200).send({});
	}
});

module.exports = router;