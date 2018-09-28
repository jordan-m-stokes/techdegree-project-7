
//npm imports
const Express = require('express');

//file imports
const data = require('../data.json');

//fields
const router = Express.Router();
const projects = data.projects;

//handler for the "/projects path"
router.get('/:id', (request, response) =>
{
    //gets project id from paramater sent in the client's request and retrieves given project
    const id = request.params.id;
    const project = projects[id];

    //sets locals to the data in the "data.json" file
    response.locals = project;
    
    //renders "project.pug" in views folder
    response.render('project');
});

module.exports = router;