import mongoose from "mongoose";

const conn = async () => {
  try {
    const connection = await mongoose.connect(process.env.MONGODB_URL, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log("Mongo connected");
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

export default conn;
