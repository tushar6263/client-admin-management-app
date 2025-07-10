import mongoose from 'mongoose';
const contactSchema = new mongoose.Schema({
  fullName: String,
  email: String,
  phone: String,
  city: String
});
export default mongoose.model('Contact', contactSchema);
