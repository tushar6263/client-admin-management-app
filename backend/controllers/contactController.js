import Contact from '../models/Contact.js';

export const getContacts = async (req, res) => {
  try {
    const contacts = await Contact.find();
    res.json(contacts);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch contact forms' });
  }
};

export const addContact = async (req, res) => {
  try {
    const { fullName, email, phone, city } = req.body;
    const newContact = new Contact({ fullName, email, phone, city });
    await newContact.save();
    res.status(201).json(newContact);
  } catch (error) {
    res.status(500).json({ error: 'Failed to submit contact form' });
  }
};
