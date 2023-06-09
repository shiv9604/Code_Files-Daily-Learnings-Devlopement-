const Joi = require('joi');

function validateCourse(course) {
    const courseType = {
        name:Joi.string().min(3).required()
    }
    return Joi.validate(course, courseType);
    
}

const ValidationsModule = {
    validateCourse
}

module.exports=ValidationsModule;

