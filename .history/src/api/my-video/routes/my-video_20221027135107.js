'use strict';

/**
 * my-video router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::my-video.my-video',{

    prefix:"/v1",
    only:['find'],
    except:[],
    config:{
        find:{
            auth:false,
            policies:[],
            middlewares:[]
        }
    }
});
