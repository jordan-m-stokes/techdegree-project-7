
//npm imports
const Express = require('express');

//file imports
const data = require('../data.json');

//fields
const router = Express.Router();

//index route handler
router.get('/', (request, response) => 
{
    //sets locals to the data in the "data.json" file
    response.locals.projects = data.projects;

    //renders "index.pug" in views folder
    response.render('index');
});

module.exports = router;