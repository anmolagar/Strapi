module.exports={
    routes:[
        {
            method:"POST",
            path:"/search",
            handler:"search.search"
        },
        {
            method:"POST",
            path:"/category",
            handler:"search.categoryFilter"
        },
        {
            method:"POST",
            path:"/get/video",
            handler:"search.tags"
        }
    ]
}