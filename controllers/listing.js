const Listing = require("../models/listing");
module.exports.index = async (req, res) => { const allListings = await Listing.find({}); res.render("index.ejs", { allListings }); };
module.exports.showListing = async (req, res) => { const { id } = req.params; const listing = await Listing.findById(id); res.render("show.ejs", { listing }); };
