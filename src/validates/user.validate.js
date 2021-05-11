import { celebrate, Joi, Segments }  from 'celebrate';

const pattern = {
    name  : new RegExp(/^[a-zA-Z]+[\w]*[a-zA-Z]$/),
    state : new RegExp(/(deleted|active|inactive)$/),
    scopes: new RegExp(/^[a-z]+(,[a-z])*$/),
    attr  : new RegExp(/^[\w]+(,[\w]+)*$/)
};

const defaultGets = {
    limit : Joi.number().positive().integer().max(50).min(10).default(20),
    page  : Joi.number().integer().min(0).default(0),
    scopes: Joi.string().regex(pattern.scopes),
    attr  : Joi.string().regex(pattern.attr)
};

const valReqToken = celebrate({
    [Segments.HEADERS]: {
        'x-access-token' : Joi.number().required().min(1)
    }
})

const valReqGetUserId = celebrate({
    [Segments.PARAMS]: {
        id_user: Joi.number().required().min(1)
    }
})

const valReqPostUser = celebrate({
    [Segments.BODY]: {
        id_user: Joi.number().required().min(1)
    }
})

const valReqPutUserId = celebrate({
    [Segments.PARAMS]: {
        id_user: Joi.number().required().min(1)
    },
    [Segments.BODY]: {
        id_user: Joi.number().required().min(1)
    }

})

const valReqDeleteUserId = celebrate({
    [Segments.PARAMS]: {
        id_user: Joi.number().required().min(1)
    }
})


module.exports = {
    valReqGetUserId,
    valReqPostUser,
    valReqPutUserId,
    valReqDeleteUserId
}
