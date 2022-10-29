'use strict';

/**
 * admin-video controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::admin-video.admin-video', ({ strapi }) => ({
    async search(ctx){
        const searchText=ctx.request.body.searchText
        try {
            const data = await strapi.db.connection.raw(`select * from admin_videos where lower(video_name)like lower('%${searchText}%')`)
            return {
                status:200,
                success:true,
                data:data?.["rows"]
            }
        } catch (error) {
            throw error
        }
    }
})); 