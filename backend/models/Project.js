import mongoose from 'mongoose';
const projectSchema = new mongoose.Schema({
  image: String,
  name: String,
  description: String
});
export default mongoose.model('Project', projectSchema);
