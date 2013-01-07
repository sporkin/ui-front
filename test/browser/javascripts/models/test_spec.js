(function() {
  define(['jquery', 'backbone', 'bootstrap', 'dust'], function($, Backbone) {
    return describe("dependency resolution", function() {
      return it("loads dependency through AMD", function() {
        console.log($, new Backbone.View(), "BB and jquery are ready");
        console.log(dust, "dust is global scoped and ready");
        return console.log($('.close').alert, "bootstrap is loaded");
      });
    });
  });
}).call(this);
