
//npm imports
const Express = require('express');

//fields
const router = Express.Router();

//handler for the "/about" route
router.get('/', (request, response) => 
{
    //sets locals in "about.pug" file
    response.locals.onAbout = true;

    //renders "about.pug" in views folder
    response.render('about');
});

module.exports = router;