require('dotenv').config();
require('./config/database');

const Course = require('./models/course');

// IIFE
// Immediately Invoked Function Expression
(async function() {

  await Course.deleteMany({});
  const courses = await Course.create([
    {name: 'Heymaker', address: '34855 US-40 EAST, Steamboat Springs', state: 'CO', price: 154, link: 'https://www.haymakergolf.com/'},
    {name: 'Pebble Beach Golf', address: '17-Mile Drive, Pebble Beach', state: 'CA', price: 750, link: 'https://www.pebblebeach.com/golf/pebble-beach-golf-links/'},
    {name: 'Shackamaxon', address: '100 Tillinghast Turn, Scotch Plains', state: 'NJ', price: 250, link: 'https://www.shackamaxoncc.com/'},
    {name: 'Catamount Ranch', address: '33400 Catamount Drive, Steamboat Springs', state: 'CO', price: 200, link: 'https://www.catamountranchclub.com/golf'},
    {name: 'Eagle Springs', address: '28521 US-6, Wolcott', state: 'CO', price: 400, link: 'https://eaglesprings.org/'},
  ]);

  console.log(courses)

  process.exit();

})();
