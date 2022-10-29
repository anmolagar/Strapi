'use strict';

/**
 * admin-video controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::admin-video.admin-video', ({ strapi }) => ({
    async search(ctx){
        const searchText=ctx.request.body.searchText;
        console.log(searchText)
        try {
            const data = await strapi.db.connection.select("*").from("admin_videos").where('video_name', 'like', `%${searchText}%`)
            return {
                status:200,
                success:true,
                data:data
            }
        } catch (error) {
            throw error
        }
    }
}));
