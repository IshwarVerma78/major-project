const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");

main()
    .then((res)=>{
        console.log("Connected to MongoDB");
    })
    .catch(err => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/wanderlust");
}

const initDB = async () => {
    await Listing.deleteMany({});
    initData.data = initData.data.map((obj)=> ({...obj, owner: "67cacc0a6ceba099793f376d"}));
    await Listing.insertMany(initData.data);
    console.log("data was initilized")
};

initDB(); 