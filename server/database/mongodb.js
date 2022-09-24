import mongoose from "mongoose";


async function connect() {
    await mongoose.connect(
        "mongodb+srv://teodor:Teodor1991@teodor-mern.smstf2q.mongodb.net/?retryWrites=true&w=majority"
    );
    console.log("MongoDB connection is successful");
}

export default connect;

