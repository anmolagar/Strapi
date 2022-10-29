'use strict';

/**
 * admin-video controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::admin-video.admin-video',({strapi})=>({
     async search(ctx){
        console.log(ctx)
     },
    async find(ctx){
        await strapi.db.connection.select("*").from("demos")

    }
}));
