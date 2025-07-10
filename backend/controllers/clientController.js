import Client from '../models/Client.js';

export const getClients = async (req, res) => {
  try {
    const clients = await Client.find();
    res.json(clients);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch clients' });
  }
};

export const addClient = async (req, res) => {
  try {
    const { name, designation, description } = req.body;
    const image = req.file?.path;

    const newClient = new Client({ name, designation, description, image });
    await newClient.save();
    res.status(201).json(newClient);
  } catch (error) {
    res.status(500).json({ error: 'Failed to add client' });
  }
};
