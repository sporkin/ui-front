define ['jquery', 'backbone', 'bootstrap'],
  ($, Backbone) ->
    describe "dependency resolution", ->
      it "loads dependency through AMD", ->
        console.log $, new Backbone.View(), "BB and jquery are ready"
        console.log dust, "dust is global scoped and ready"
        console.log $('.close').alert, "bootstrap is loaded"
