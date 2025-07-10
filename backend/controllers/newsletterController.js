import Newsletter from '../models/Newsletter.js';

export const getSubscribers = async (req, res) => {
  try {
    const emails = await Newsletter.find();
    res.json(emails);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch subscribers' });
  }
};

export const addSubscriber = async (req, res) => {
  try {
    const { email } = req.body;
    const newSubscriber = new Newsletter({ email });
    await newSubscriber.save();
    res.status(201).json(newSubscriber);
  } catch (error) {
    res.status(500).json({ error: 'Failed to subscribe' });
  }
};
