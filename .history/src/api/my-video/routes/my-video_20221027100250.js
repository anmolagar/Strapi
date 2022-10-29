'use strict';

/**
 * my-video router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::my-video.my-video',{
    prefix:"",
    only:['find','findOne'],
    except:[],
    config:{
        find:{
            auth:false,
            policies:[],
            middlewares:[]
        }
    }
});
