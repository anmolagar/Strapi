module.exports = {
    routes: [
      { // Path defined with a URL parameter
        method: 'POST',
        path: '/video/search',
        handler: 'search.search',
      }
      
    ]
  }
  
  