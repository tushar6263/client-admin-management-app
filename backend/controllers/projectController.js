import Project from '../models/Project.js';
export const getProjects = async (req, res) => {
  const data = await Project.find();
  res.json(data);
};
export const addProject = async (req, res) => {
  const { name, description } = req.body;
  const image = req.file?.path;
  const project = new Project({ name, description, image });
  await project.save();
  res.status(201).json(project);
};
