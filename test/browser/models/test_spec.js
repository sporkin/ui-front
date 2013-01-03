define(['jquery','backbone','bootstrap'], function($, Backbone, bb) {

  describe("test dependency resolution test", function(){
    it("loads dependency through AMD", function(){

      console.log($, new Backbone.View(), "BB and jquery are ready")
      console.log(dust, "dust is global scoped and ready")
      console.log($(".close").alert, "boot strap is loaded")
    })
  })
});