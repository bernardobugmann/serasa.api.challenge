const express = require('express');

const server = express();

server.use(express.json());

const projects = [];

// Log requests information
function applicationsLogs(req, res, next) {
  const { url, method } = req;
  const end = res.end;

  const data = {
    index: {
      method,
      url
    }
  };

  res.end = function(chunk, encoding) {
    data.index.statusCode = res.statusCode;

    console.time("request");
    console.group("Total Requests");
    console.count("Total number of requests made is");
    console.groupEnd();
    console.table(data);
    console.timeEnd("request");

    res.end = end;
    res.end(chunk, encoding);
  };

  return next();
}

server.use(applicationsLogs);

// Check if project exists
function checkProjectExists(req, res, next) {
  const { id } = req.params;

  const project = projects.find(p => p.id == id);

  if (!project) {
    return res.status(400).json({ error: 'Project does not exists.' });
  }

  req.project = project;

  return next();
};

// Found this idea in a pull request to check if id already exists
function checkIdInUse (req, res, next) {
  const { id } = req.body;
  const projectID = projects.findIndex(p => p.id == id);
  if (projectID != -1){
    return res.status(409).json({error: 'Project ID already exists.'});
  }
  return next();
}

// Get all existing projects
server.get('/projects', (req, res) => {
  return res.json(projects);
});

// Create a new project with empty task
server.post('/projects', checkIdInUse, (req, res) => {
  const { id, title } = req.body;

  const project = {
    id,
    title,
    tasks: []
  };

  projects.push(project);

  return res.json({ message: `Project ${title} created successful.` });
});

// Update an existing project
server.put('/projects/:id', checkProjectExists, (req, res) => {
  const { id } = req.params;

  const { title } = req.body;

  const project = projects.find(p => p.id == id);

  project.title = title;

  return res.json(project);
});

// Delete an existing project and all project tasks
server.delete('/projects/:id', checkProjectExists, (req, res) => {
  const { id } = req.params;

  const projectIndex = projects.findIndex(p => p.id == id);

  projects.splice(projectIndex, 1);

  return res.send();
});

// Create task in an existing project
server.post('/projects/:id/tasks', checkProjectExists, (req, res) => {
  const { id } = req.params;

  const { name } = req.body;

  const project = projects.find(p => p.id == id);

  project.tasks.push(name);

  return res.json(project);
});

server.listen(3000);
