const { default: mongoose} = require("mongoose");
const { PUBLIC_Data } = require("../../constant");

exports.ConnectDB = async ()=> {
    try {
        await mongoose.connect(PUBLIC_Data.mongo_url)
        console.log(`This app us connect with ${mongoose.connection.host}`)
    } catch (error) {
        mongoose.disconnect();
        process.exit(1)
    }
}