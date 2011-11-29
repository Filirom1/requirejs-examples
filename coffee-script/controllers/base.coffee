define [
    'jquery'
    'weld'
  ], ($, weld)->
    class Base

      # Main DOM element
      el: null

      # Events to bind to
      events: {}

      # The template
      template: null

      # Bind events to class method
      constructor: ->
        for event, cb of @events
          [action, selector] = event.split ' '
          $('body').on action, selector, @[cb]

      render: (data)->
        @el.html @template
        weld @el[0], data
