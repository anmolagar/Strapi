module.exports = {
    routes: [
      { // Path defined with a URL parameter
        method: 'GET',
        path: '/restaurants/:category/:id',
        handler: 'Restaurant.findOneByCategory',
      },
      { // Path defined with a regular expression
        method: 'GET',
        path: '/restaurants/:region(\\d{2}|\\d{3})/:id', // Only match when the first parameter contains 2 or 3 digits.
        handler: 'Restaurant.findOneByRegion',
      },
      { // Route with custom policies
        method: 'POST',
        path: "/restaurants/:id/reservation",
        handler: 'Restaurant.reservation',
        config: {
          policies: ["is-authenticated", "has-credit-card"]
        }
      }
    ]
  }
  
  