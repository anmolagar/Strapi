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
            const data = await strapi.db.connection.select("*").from("admin_videos").
            whereILike('video_name',  `%${searchText}%)
           
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
