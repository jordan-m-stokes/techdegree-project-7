
//npm imports
const Express = require('express');

//file imports
const data = require('../data.json');

//fields
const router = Express.Router();
const projects = data.projects;

//handler for the "/projects path"
router.get('/:id', (request, response, next) =>
{
    //gets project id from paramater sent in the client's request and retrieves given project
    const id = request.params.id;
    const project = projects[id];

    if(project)
    {
        //sets locals to the data in the "data.json" file
        response.locals = project;
        
        //renders "project.pug" in views folder
        response.render('project');
    }
    else
    {
        //creates error to throw for missing page
        const error = new Error("This project doesn't exist: ");

        error.status = 404;

        next(error);
    }
});

module.exports = router;