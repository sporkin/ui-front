define [
  'dust'
  'chaplin'
  'lib/view_helper' # Just load the view helpers, no return value
], (Handlebars, Chaplin) ->
  'use strict'

  class View extends Chaplin.View
    render: ->
      return false if @disposed
      templateFunc = @getTemplateFunction()
      dust.render @template, @getTemplateData(), (err, out) =>
        @$el.empty().append out
      @afterRender() unless @renderIsWrapped
      this

    getTemplateFunction: ->
      return @template
