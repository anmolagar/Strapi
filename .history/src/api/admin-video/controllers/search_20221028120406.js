'use strict';

/**
 * admin-video controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::admin-video.admin-video', ({ strapi }) => ({
    async search(ctx){
        const searchText=ctx.request.body.searchText
        try {
            const data = await strapi.db.connection.select("*").from("admin_videos").where({video_name:ser})
        } catch (error) {
            throw error
        }
    }
}));
