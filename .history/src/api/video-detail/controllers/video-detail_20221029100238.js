'use strict';

/**
 * video-detail controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::video-detail.video-detail',({strapi})=>({
      async find(ctx){
        try {
          const data=await strapi.db.connection.select("*").from("")
        } catch (error) {
          throw error
        }
      },
      async create(ctx,next){
        console.log(ctx)
      }

}));
