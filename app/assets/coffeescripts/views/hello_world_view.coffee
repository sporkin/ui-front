define [
  'views/base/view'
  'templates/hello_world'
], (View, template) ->
  'use strict'

  class HelloWorldView extends View

    # Save the template string in a prototype property.
    # This is overwritten with the compiled template function.
    # In the end you might want to used precompiled templates.
    template: "templates/hello_world"
    # template = null

    className: 'hello-world'

    # Automatically append to the DOM on render
    container: '#page-container'
    # Automatically render after initialize
    autoRender: true
