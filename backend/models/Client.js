import mongoose from 'mongoose';
const clientSchema = new mongoose.Schema({
  image: String,
  name: String,
  description: String,
  designation: String
});
export default mongoose.model('Client', clientSchema);
