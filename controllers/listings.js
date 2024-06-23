const Listing = require("../models/listing.js");
const mbxGeocoding = require('@mapbox/mapbox-sdk/services/geocoding');
const mapToken = process.env.MAP_TOKEN;
const geocodingClient = mbxGeocoding({ accessToken: mapToken });

// module.exports.index = async (req,res,next) => {
//     const allListings = await Listing.find({});
//     res.render("./listings/index.ejs", {allListings});
// };


// Handle search and listing retrieval
module.exports.index = async (req, res, next) => {
    try {
        const { q } = req.query; // Extract the search query from the request

        let query = {};
        if (q) {
            query = {
                $or: [
                    { 'location': { $regex: new RegExp(q, 'i') } }, // Case-insensitive search for location
                    { 'country': { $regex: new RegExp(q, 'i') } } // Case-insensitive search for location
                ]
            };
        }

        const allListings = await Listing.find(query);
        res.render("./listings/index.ejs", { allListings, query: q });
    } catch (err) {
        console.error(err);
        res.status(500).send("Internal Server Error");
    }
};


module.exports.renderNewForm = (req,res) => {
    res.render("listings/new.ejs");
};

module.exports.showListing = async (req,res) => {
    let {id} = req.params;
    const listing = await Listing.findById(id)
    .populate({
        path:"reviews",
        populate: {
            path:"author"
        },
    }).populate("owner");
    if(!listing){
        req.flash("error", "Listing you requested for does not exist!");
        res.redirect("/listings");
    }
    //console.log(listing);
    res.render("./listings/show.ejs", {listing});
};

module.exports.createListing = async(req,res) => {
    let response = await geocodingClient.forwardGeocode({
        query: req.body.listing.location,
        limit: 1,
      })
        .send();
       
    let url = req.file.path;
    let filename = req.file.filename;

     const newListing = new Listing(req.body.listing);
     newListing.owner = req.user._id;
     newListing.image = {url, filename};

     newListing.geometry = response.body.features[0].geometry;

     let savedListing = await newListing.save();
      console.log(savedListing);

     req.flash("success", "New Listing created!");
     res.redirect("/listings");
};

module.exports.renderEditForm = async (req,res) =>{
    let {id}  = req.params;
    const listing = await Listing.findById(id);
    if(!listing){
        req.flash("error", "Listing you requested for does not exist!");
        res.redirect("/listings");
    }

    let originalImageUrl = listing.image.url;
    originalImageUrl = originalImageUrl.replace("/upload", "/upload/w_250");
    res.render("listings/edit.ejs", {listing ,originalImageUrl});
};

module.exports.updateListing = async (req,res) => {
    let {id} = req.params;

     // Update basic fields
     let updatedData = { ...req.body.listing };

     // Check if the location has changed and update the coordinates if needed
     if (req.body.listing.location) {
         let response = await geocodingClient.forwardGeocode({
             query: req.body.listing.location,
             limit: 1,
         }).send();
 
         updatedData.geometry = response.body.features[0].geometry;
     }

    let listing = await Listing.findByIdAndUpdate(id, updatedData, { new: true });

    if(typeof req.file !== "undefined"){
        let url = req.file.path;
        let filename = req.file.filename;
        listing.image = {url, filename};
        await listing.save();
    }
    req.flash("success", "Listing Updated!");
    res.redirect(`/listings/${id}`);
};

module.exports.destroyListing = async(req,res) => {
    let {id} = req.params;
    let deletedListing = await Listing.findByIdAndDelete(id);
    console.log(deletedListing);
    req.flash("success", "Listing Deleted!");
    res.redirect("/listings");
};