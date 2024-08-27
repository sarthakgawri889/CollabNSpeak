import mongoose from "mongoose";

const Connection = async () => {
  const URL ="mongodb://sarthakgawri889:saarthi123k@ac-qaedcze-shard-00-00.rt1sig2.mongodb.net:27017,ac-qaedcze-shard-00-01.rt1sig2.mongodb.net:27017,ac-qaedcze-shard-00-02.rt1sig2.mongodb.net:27017/?ssl=true&replicaSet=atlas-tvs7wy-shard-0&authSource=admin&retryWrites=true&w=majority&appName=CollabNSpeak";
 
  try {
    await mongoose.connect(URL, { useUnifiedTopology: true });
    console.log("Database connected successfully");
  } catch (error) {
    console.log("Error while connecting the database", error.message);
  }
};


export default Connection;
