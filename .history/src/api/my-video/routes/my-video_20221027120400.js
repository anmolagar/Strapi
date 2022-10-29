'use strict';

/**
 * my-video router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::myvideo.myvideo',{
    prefix:"/v1",
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
