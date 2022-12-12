"use strict";

/**
 * video-detail controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController(
  "api::video-detail.video-detail",
  ({ strapi }) => ({
    async search(ctx) {
      const searchItem = ctx.request?.body?.searchItem;
      if (searchItem && searchItem.length > 0) {
        try {
          const data = await strapi.db.connection.raw(
            `SELECT vd.*,mc.category_name,vt.tag_name FROM video_details vd
          INNER JOIN video_details_master_categories_links vdmcl ON vdmcl.video_detail_id=vd.id
          INNER JOIN master_categories mc ON mc.id=vdmcl.master_category_id 
          INNER JOIN video_details_master_tags_links vtvdl ON vtvdl.video_detail_id=vd.id
          INNER JOIN video_tags vt ON vt.id=vtvdl.video_tag_id
          WHERE 	LOWER(vd.video_name) 	LIKE LOWER('%${searchItem}%') OR LOWER(mc.category_name) LIKE LOWER('%${searchItem}%') 
             OR LOWER(vt.tag_name)   	LIKE LOWER('%${searchItem}%') OR LOWER(vd.description) LIKE LOWER('%${searchItem}%')
             OR LOWER(vd.subcategories) LIKE LOWER('%${searchItem}%')
          ORDER BY updated_at`
          );
          return {
            status: 200,
            success: true,
            data: data?.rows,
          };
        } catch (error) {
          throw error;
        }
      } else {
        return {
          status: 200,
          success: false,
          message: "search text not found"
        }
      }
    },
    async categoryFilter(ctx) {
      try {
        const category = ctx?.request?.body?.["category"];
        if (category && category.length > 0) {
          const catdata = await strapi.db.connection
            .select("id")
            .from("master_categories")
            .whereIn("category_name", category);
          if (catdata.length > 0) {
            const catId = catdata.map((id) => {
              return id.id;
            });

            const videodata = await strapi.db.connection
              .select("video_detail_id")
              .from("video_details_master_categories_links")
              .whereIn("master_category_id", catId);
            const videoId = videodata.map((id) => {
              return id?.["video_detail_id"];
            });
            const videoInfo = await strapi.db.connection
              .select("*")
              .from("video_details")
              .whereIn("id", videoId).orderBy('id', 'desc');
            return {
              status: 200,
              success: true,
              data: videoInfo,
              message: "Video Fetched Successfully",
            };
          } else {
            return {
              status: 201,
              success: false,
              message: "Category Not Found",
            };
          }
        } else {
          return {
            status: 201,
            success: false,
            message: "Unable to fetched video",
          };
        }
      } catch (error) {
        throw error;
      }
    },
    async tags(ctx) {
      try {
        const tags = ctx.request.body?.["tags"];
        if (tags && tags?.length > 0) {
          try {
            let videodata = await strapi.db.connection.raw(`SELECT mc.category_name,array_to_json(array_agg(row_to_json((vd.*))))
            FROM video_details vd
            INNER JOIN video_details_master_categories_links vdmcl ON vdmcl.video_detail_id=vd.id
            INNER JOIN master_categories mc ON mc.id=vdmcl.master_category_id 
            INNER JOIN video_details_master_tags_links  vtvdl ON vtvdl.video_detail_id=vd.id
            INNER JOIN video_tags vt ON vt.id=vtvdl.video_tag_id
            WHERE LOWER(vt.tag_name) = LOWER('${tags}') 
            GROUP BY mc.category_name`)
            videodata = videodata?.rows
            return {
              status: 200,
              success: true,
              data: videodata,
              message: "Video Fetched Successfully",
            }
          } catch (error) {
            throw error
          }

        }
        else {
          return {
            status: 201,
            success: true,
            message: "tag not found"
          }
        }
      } catch (error) {
        throw error;
      }
    },
  })
);
