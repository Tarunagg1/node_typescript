import mongoose from "mongoose";
import log from "../logger";

function connect(){
    const dbURL = "mongodb://localhost/ts";

    return mongoose.connect(dbURL,{
    })
    .then(() => {
        log.info("Database connected")
    })
    .catch((err) => {
        log.error("Error connecting to Database", err)
    })
}

export default connect;