import mongoose from 'mongoose';
const newsletterSchema = new mongoose.Schema({
  email: String
});
export default mongoose.model('Newsletter', newsletterSchema);
