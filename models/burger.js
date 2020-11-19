//using CATS help 
// Import the ORM to create functions that will interact with the database.
const orm = require("../config/orm.js");

const burger = {
  all: function(bb) {
    orm.all("burger", function(res) {
      bb(res);
    });
  },
  // The variables cols and vals are arrays.
  create: function(cols, vals, bb) {
    orm.create("burger", cols, vals, function(res) {
      bb(res);
    });
  },
  update: function(objColVals, condition, bb) {
    orm.update("burger", objColVals, condition, function(res) {
      bb(res);
    });
  },
  delete: function(condition, bb) {
    orm.delete("burger", condition, function(res) {
      bb(res);
    });
  }
};

// Export the database functions for the controller (catsController.js).
module.exports = burger;