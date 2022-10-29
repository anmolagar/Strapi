module.exports = {
    routes: [
      { // Path defined with a URL parameter
        method: 'POST',
        path: '/search',
        handler: 'search.search',
      }
      
    ]
  }
  
  